import { createClient } from "./client.js";

export function createHandlers(apiKey) {
  const client = createClient(apiKey);

  return async function handleTool(name, args) {
    switch (name) {
      // ─── INVESTOR ────────────────────────────────────────────────────────

      case "add_investor": {
        const {
          bo_grid, ira_grid, trustees_grid,
          qq_iii_a_ent, qq_iii_b_ent, qq_iii_c_ent,
          qq_iii_a_ira, qq_iii_b_ira, qq_iii_c_ira,
          qq_iii_a_inv, qq_iii_b_inv, qq_iii_c_inv,
          qq_iii_a_trust, qq_iii_c_trust,
          bpis_res,
          ...rest
        } = args;
        const fields = { ...rest };
        if (bo_grid) fields.bo_grid = bo_grid;
        if (ira_grid) fields.ira_grid = ira_grid;
        if (trustees_grid) fields.trustees_grid = trustees_grid;
        if (qq_iii_a_ent) fields.qq_iii_a_ent = JSON.stringify(qq_iii_a_ent);
        if (qq_iii_b_ent) fields.qq_iii_b_ent = JSON.stringify(qq_iii_b_ent);
        if (qq_iii_c_ent) fields.qq_iii_c_ent = JSON.stringify(qq_iii_c_ent);
        if (qq_iii_a_ira) fields.qq_iii_a_ira = JSON.stringify(qq_iii_a_ira);
        if (qq_iii_b_ira) fields.qq_iii_b_ira = JSON.stringify(qq_iii_b_ira);
        if (qq_iii_c_ira) fields.qq_iii_c_ira = JSON.stringify(qq_iii_c_ira);
        if (qq_iii_a_inv) fields.qq_iii_a_inv = JSON.stringify(qq_iii_a_inv);
        if (qq_iii_b_inv) fields.qq_iii_b_inv = JSON.stringify(qq_iii_b_inv);
        if (qq_iii_c_inv) fields.qq_iii_c_inv = JSON.stringify(qq_iii_c_inv);
        if (qq_iii_a_trust) fields.qq_iii_a_trust = JSON.stringify(qq_iii_a_trust);
        if (qq_iii_c_trust) fields.qq_iii_c_trust = JSON.stringify(qq_iii_c_trust);
        if (bpis_res) fields.bpis_res = JSON.stringify(bpis_res);
        const result = await client.postForm("/csdapi/v1/csd_investor_api", fields);
        return result;
      }

      case "get_investor": {
        const result = await client.get("/csdapi/v1/csd_investor_api", {
          investor_sr_no: args.investor_sr_no,
        });
        return result;
      }

      case "list_investors": {
        const result = await client.get("/csdapi/v1/csd_investor_list_api", {
          page: args.page ?? 1,
        });
        return result;
      }

      case "update_investor": {
        const { investor_sr_no, ...fields } = args;
        const result = await client.putForm(
          "/csdapi/v1/csd_investor_api",
          { investor_sr_no },
          fields
        );
        return result;
      }

      // ─── SUBSCRIPTIONS ───────────────────────────────────────────────────

      case "add_subscription": {
        const result = await client.postForm(
          "/csdapi/v1/csd_subscription_api",
          args
        );
        return result;
      }

      case "get_subscription": {
        const result = await client.get("/csdapi/v1/csd_subscription_api", {
          subscription_sr_no: args.subscription_sr_no,
        });
        return result;
      }

      case "get_subscription_status": {
        const result = await client.get(
          "/csdapi/v1/csd_subscription_status_api",
          { subscription_sr_no: args.subscription_sr_no }
        );
        return result;
      }

      case "update_subscription": {
        const { subscription_id, ...fields } = args;
        const result = await client.postForm(
          `/api/update/subscription?subscription_id=${encodeURIComponent(subscription_id)}`,
          fields
        );
        return result;
      }

      case "get_investor_subscriptions": {
        const result = await client.get(
          "/api/investor/subscription/detail",
          { investor_id: args.investor_id }
        );
        return result;
      }

      // ─── FUNDS ───────────────────────────────────────────────────────────

      case "list_funds": {
        const result = await client.get("/csdapi/v1/csd_fund_api");
        return result;
      }

      case "get_fund_detail": {
        const result = await client.get("/csdapi/v1/csd_fund_details_api", {
          id: args.id,
        });
        return result;
      }

      case "get_fund_documents": {
        const result = await client.get("/get/fund/document", {
          id: args.id,
        });
        return result;
      }

      case "get_fund_tracker": {
        const result = await client.postForm("/api/fund/tracker", {
          investor_id: args.investor_id,
          fund_id: args.fund_id,
        });
        return result;
      }

      case "get_fundwise_tracker": {
        const result = await client.get(
          `/api/fundwise/tracker/${args.fund_id}`
        );
        return result;
      }

      case "get_fundwise_investment": {
        const result = await client.get("/api/fundwise/investment", {
          fund_id: args.fund_id,
        });
        return result;
      }

      // ─── PORTFOLIO & REPORTING ───────────────────────────────────────────

      case "get_portfolio": {
        const result = await client.get("/get/portfolio", {
          investor_sr_no: args.investor_sr_no,
        });
        return result;
      }

      case "get_investor_statement": {
        const result = await client.get("/api/investor/statement", {
          investor_id: args.investor_id,
          fund_id: args.fund_id,
          date: args.date,
        });
        return result;
      }

      case "get_redemption": {
        const result = await client.get("/csdapi/v1/csd_redemption_api", {
          fund_id: args.fund_id,
          page: args.page ?? 1,
        });
        return result;
      }

      case "get_kyc_status": {
        const result = await client.get("/csdapi/v1/csd_amlkyc_api", {
          subscription_id: args.subscription_id,
        });
        return result;
      }

      // ─── DOCUMENTS ───────────────────────────────────────────────────────

      case "get_investor_documents": {
        const result = await client.get("/get/investor/document", {
          investor_id: args.investor_id,
        });
        return result;
      }

      // ─── COMMUNICATIONS ──────────────────────────────────────────────────

      case "send_contract_note": {
        const result = await client.postForm("/api/send/contractnote", {
          investor_id: args.investor_id,
          fund_id: args.fund_id,
        });
        return result;
      }

      case "send_subscription_agreement": {
        const result = await client.postForm(
          "/api/send/subscription/agreement",
          {
            subscription_id: args.subscription_id,
            send_email: args.send_email !== false ? "true" : "false",
          }
        );
        return result;
      }

      // ─── DEALER / BRANCH / REP ───────────────────────────────────────────

      case "get_dealer_details": {
        const result = await client.get("/api/dealer/details", {
          cdr_number: args.cdr_number,
        });
        return result;
      }

      case "get_branch_details": {
        const result = await client.get("/api/branch/details", {
          branch_number: args.branch_number,
          dealer_id: args.dealer_id,
        });
        return result;
      }

      case "get_account_rep_details": {
        const result = await client.get("/api/accountrep/details", {
          rep_number: args.rep_number,
          branch_id: args.branch_id,
          dealer_id: args.dealer_id,
        });
        return result;
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  };
}
