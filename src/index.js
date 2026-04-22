#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { allTools } from "./tools.js";
import { createHandlers } from "./handlers.js";
import dotenv from 'dotenv';

dotenv.config();

// ─── Configuration ─────────────────────────────────────────────────────────
// API key is read from environment variable CSD_API_KEY.
// Set it before starting: export CSD_API_KEY=your_key_here

const API_KEY = process.env.CSD_API_KEY;

if (!API_KEY) {
  console.error(
    "[CommonSubDoc MCP] ERROR: CSD_API_KEY environment variable is not set.\n" +
    "Please set it before starting the server:\n" +
    "  export CSD_API_KEY=your_api_key_here"
  );
  process.exit(1);
}

// ─── Server setup ──────────────────────────────────────────────────────────

const server = new Server(
  {
    name: "commonsubdoc-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const handleTool = createHandlers(API_KEY);

// ─── List tools handler ────────────────────────────────────────────────────

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: allTools };
});

// ─── Call tool handler ─────────────────────────────────────────────────────

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    const result = await handleTool(name, args ?? {});
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error) {
    const message =
      error?.response?.data
        ? JSON.stringify(error.response.data)
        : error?.message ?? String(error);

    return {
      content: [
        {
          type: "text",
          text: `Error calling ${name}: ${message}`,
        },
      ],
      isError: true,
    };
  }
});

// ─── Start ─────────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[CommonSubDoc MCP] Server running on stdio");
}

main().catch((err) => {
  console.error("[CommonSubDoc MCP] Fatal error:", err);
  process.exit(1);
});
