# CommonSubDoc MCP Server

MCP server for the [CommonSubDoc API](https://januarycapital.commonsubdoc.com) — built for January Capital OS.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set your API key

```bash
export CSD_API_KEY=your_api_key_here
```

### 3. Run the server

```bash
npm start
```

---

## Integrate with Claude Desktop

Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "commonsubdoc": {
      "command": "node",
      "args": ["/absolute/path/to/commonsubdoc-mcp/src/index.js"],
      "env": {
        "CSD_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

**Config file location:**
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

---

## Available Tools (26 total)

### Investors
| Tool | Description |
|------|-------------|
| `add_investor` | Create a new investor (IND / IRA / ENT / TRUST) |
| `get_investor` | Get full investor details by ID |
| `list_investors` | Paginated list of all investors |
| `update_investor` | Update investor fields |

### Subscriptions
| Tool | Description |
|------|-------------|
| `add_subscription` | Create a new fund subscription |
| `get_subscription` | Get subscription details |
| `get_subscription_status` | Check PND / APR / REJ status |
| `update_subscription` | Update a pending subscription |
| `get_investor_subscriptions` | All subscriptions for an investor |

### Funds
| Tool | Description |
|------|-------------|
| `list_funds` | List all funds |
| `get_fund_detail` | Fund details, classes, and fees |
| `get_fund_documents` | Fund documents (PPM, factsheet, DDQ, etc.) |
| `get_fund_tracker` | Subscription process tracker (investor × fund) |
| `get_fundwise_tracker` | Tracker for all investors in a fund |
| `get_fundwise_investment` | Current balances across investors in a fund |

### Portfolio & Reporting
| Tool | Description |
|------|-------------|
| `get_portfolio` | Full investor portfolio summary |
| `get_investor_statement` | PDF statement (base64) |
| `get_redemption` | Redemption records for a fund |
| `get_kyc_status` | AML/KYC process status |

### Documents
| Tool | Description |
|------|-------------|
| `get_investor_documents` | All uploaded docs for an investor |

### Communications
| Tool | Description |
|------|-------------|
| `send_contract_note` | Email contract note to investor |
| `send_subscription_agreement` | Send subscription agreement for e-signing |

### Dealer / Branch / Rep
| Tool | Description |
|------|-------------|
| `get_dealer_details` | Dealer info by CDR number |
| `get_branch_details` | Branch info by branch + dealer number |
| `get_account_rep_details` | Account rep info |

---

## Rate Limits
The CommonSubDoc API enforces **10 requests per minute per endpoint**.
