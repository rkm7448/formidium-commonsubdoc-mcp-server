import axios from "axios";
import FormData from "form-data";

const BASE_URL = "https://januarycapital.commonsubdoc.com";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export function createClient(apiKey) {
  const headers = {
    "X-CSD-API-Key-Token": apiKey,
    "User-Agent": USER_AGENT,
  };

  async function get(path, params = {}) {
    const url = `${BASE_URL}${path}`;
    const response = await axios.get(url, { headers, params });
    return response.data;
  }

  async function postForm(path, fields = {}) {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined && value !== null && value !== "") {
        if (typeof value === "object") {
          form.append(key, JSON.stringify(value));
        } else {
          form.append(key, String(value));
        }
      }
    }
    const url = `${BASE_URL}${path}`;
    const response = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    });
    return response.data;
  }

  async function putForm(path, params = {}, fields = {}) {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined && value !== null && value !== "") {
        if (typeof value === "object") {
          form.append(key, JSON.stringify(value));
        } else {
          form.append(key, String(value));
        }
      }
    }
    const url = `${BASE_URL}${path}`;
    const response = await axios.put(url, form, {
      headers: { ...headers, ...form.getHeaders() },
      params,
    });
    return response.data;
  }

  return { get, postForm, putForm };
}
