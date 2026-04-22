// ─── INVESTOR TOOLS ────────────────────────────────────────────────────────

export const investorTools = [
  {
    name: "add_investor",
    description:
      "Create a new investor record in CommonSubDoc. Supports Individual (IND), IRA Account, Entity (ENT), and Trust types.",
    inputSchema: {
      type: "object",
      properties: {
        full_name: { type: "string", description: "Legal full name (required)" },
        investor_type: {
          type: "string",
          enum: ["IND", "IRA", "ENT", "TRUST"],
          description: "Investor type: IND=Individual, IRA=IRA Account, ENT=Entity, TRUST=Trust",
        },
        email: { type: "string", description: "Email address (required)" },
        first_name: { type: "string", description: "First name" },
        last_name: { type: "string", description: "Last name" },
        middle_name: { type: "string", description: "Middle name" },
        phone: { type: "string", description: "Phone number e.g. +1 222-222-2222" },
        dob: { type: "string", description: "Date of birth: DD-MMM-YYYY e.g. 05-Jan-1984" },
        address1: { type: "string", description: "Street address" },
        address2: { type: "string", description: "Suite number" },
        city: { type: "string", description: "City" },
        state: { type: "string", description: "State" },
        zipcode: { type: "string", description: "Zip/postal code" },
        country: { type: "string", description: "Country" },
        type_of_ownership_inv: {
          type: "string",
          enum: ["A", "B", "C", "D", "E"],
          description:
            "Individual ownership type: A=Individual, B=Joint (tenants in common), C=Joint (rights of survivorship), D=Other, E=Joint (tenants by entirety)",
        },
        type_of_ownership_ent: {
          type: "string",
          enum: ["A","B","C","D","E","F","G","H","I","K","L","M","O"],
          description: "Entity ownership type",
        },
        type_of_ownership_ira: {
          type: "string",
          enum: ["A", "B", "C", "F"],
          description: "IRA ownership type: A=Traditional IRA, B=Roth IRA, C=SEP IRA, F=Other",
        },
        trust_type_of_ownership: {
          type: "string",
          enum: ["A", "B"],
          description: "Trust type: A=Irrevocable, B=Revocable",
        },
        ownership_type_oth: { type: "string", description: "Other ownership type description" },
        is_address_same: { type: "string", description: "Is mailing address same as registered?" },
        mail_address: { type: "string", description: "Mailing street address" },
        m_address2: { type: "string", description: "Mailing suite number" },
        mail_city: { type: "string", description: "Mailing city" },
        mail_state: { type: "string", description: "Mailing state" },
        mail_zipcode: { type: "string", description: "Mailing zip code" },
        mail_country: { type: "string", description: "Mailing country" },
        country_of_citizenship: { type: "string", description: "Country of citizenship" },
        country_of_domicile: { type: "string", description: "Country of domicile" },
        bank_country: { type: "string", description: "Bank country" },
        bank_name: { type: "string", description: "Bank name" },
        aba_number: { type: "string", description: "ABA routing number" },
        account_number: { type: "string", description: "Bank account number" },
        account_name: { type: "string", description: "Bank account name" },
        ib_aba_swift: { type: "string", description: "Intermediary bank ABA/SWIFT" },
        fcc_details: { type: "string", description: "FCC details" },
        tax_id: { type: "string", description: "Tax ID / SSN" },
        electronic_delivery_by_email: {
          type: "string",
          enum: ["Y", "N"],
          description: "Y=Email delivery, N=Hard copy by mail",
        },
        k1_consent_electronic_delivery: {
          type: "string",
          enum: ["A", "B"],
          description: "K1 electronic delivery consent: A=Yes, B=No",
        },
        united_states_person: {
          type: "string",
          enum: ["Y", "N"],
          description: "Is the investor a US person?",
        },
        identity_type: {
          type: "string",
          enum: ["PP", "DL", "NI"],
          description: "PP=Passport, DL=Driver's License, NI=National/Government ID",
        },
        identity_number: { type: "string", description: "Identity document number" },
        identity_exp_date: {
          type: "string",
          description: "Identity expiry date: DD-MMM-YYYY",
        },
        qq_iii_a_inv: {
          type: "array",
          items: { type: "string" },
          description: "Accredited investor representation for Individual (codes A-I)",
        },
        qq_iii_b_inv: {
          type: "array",
          items: { type: "string" },
          description: "Qualified client representation for Individual (codes A-F)",
        },
        qq_iii_c_inv: {
          type: "array",
          items: { type: "string" },
          description: "Qualified purchaser status for Individual (codes A-D)",
        },
        qq_iii_a_ent: {
          type: "array",
          items: { type: "string" },
          description: "Accredited investor representation for Entity",
        },
        qq_iii_b_ent: {
          type: "array",
          items: { type: "string" },
          description: "Qualified client representation for Entity",
        },
        qq_iii_c_ent: {
          type: "array",
          items: { type: "string" },
          description: "Qualified purchaser status for Entity",
        },
        qq_iii_a_ira: {
          type: "array",
          items: { type: "string" },
          description: "Accredited investor representation for IRA",
        },
        qq_iii_b_ira: {
          type: "array",
          items: { type: "string" },
          description: "Qualified client representation for IRA",
        },
        qq_iii_c_ira: {
          type: "array",
          items: { type: "string" },
          description: "Qualified purchaser status for IRA",
        },
        qq_iii_a_trust: {
          type: "array",
          items: { type: "string" },
          description: "Accredited investor representation for Trust",
        },
        qq_iii_c_trust: {
          type: "array",
          items: { type: "string" },
          description: "Qualified purchaser status for Trust",
        },
        bo_grid: {
          type: "array",
          items: { type: "object" },
          description:
            "Beneficial owners array (Entity LP/LLC only). Each: bo_full_name, bo_dob, bo_tax_id, bo_phone_no, bo_street_address, bo_email, bo_city, bo_state, bo_zip_code, bo_country, identity_type, identity_number, identity_exp_date",
        },
        ira_grid: {
          type: "array",
          items: { type: "object" },
          description:
            "IRA beneficial owner array. Each: ira_name, ira_dob, ira_email, ira_address, ira_city, ira_state, ira_zip_code, ira_country, ira_phone, ira_company, ira_ssn, ira_identity_type, ira_identity_number, ira_identity_exp_date",
        },
        trustees_grid: {
          type: "array",
          items: { type: "object" },
          description:
            "Trust trustees array. Each: trustee_full_name, trustee_dob, trustee_tax_id, trustee_street_address, trustee_city, trustee_state, trustee_zip_code, trustee_country, trustee_phone_no, trustee_email, identity_type, identity_number, identity_exp_date",
        },
        is_bpis: {
          type: "string",
          enum: ["Y", "N"],
          description: "Is subscriber a Benefit Plan Investor?",
        },
        bpis_res: {
          type: "array",
          items: { type: "string" },
          description: "BPI type: A=ERISA Title I, B=Section 4975, C=plan assets entity, D=group trust",
        },
        bpis_per: {
          type: "string",
          description: "Percentage of plan assets (10–100), only when bpis_res includes C",
        },
        investor_classification: {
          type: "string",
          enum: ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
          description:
            "A=US individual, B=Non-US individual, C=Broker-dealer, D=Insurance, E=Registered investment co., F=Private fund, G=Non-profit, H=Pension plan, I=Banking/thrift, J=State/municipal govt, K=Govt pension plan, L=Sovereign wealth fund, M=Other",
        },
      },
      required: ["full_name", "investor_type", "email"],
    },
  },

  {
    name: "get_investor",
    description: "Retrieve full details of a specific investor by their ID.",
    inputSchema: {
      type: "object",
      properties: {
        investor_sr_no: {
          type: "string",
          description: "Investor serial number e.g. INVCSD10001234",
        },
      },
      required: ["investor_sr_no"],
    },
  },

  {
    name: "list_investors",
    description:
      "Get a paginated list of all investors. Returns 50 per page.",
    inputSchema: {
      type: "object",
      properties: {
        page: {
          type: "number",
          description: "Page number (default: 1)",
          default: 1,
        },
      },
    },
  },

  {
    name: "update_investor",
    description:
      "Update an existing investor's details. Only provide fields you want to change.",
    inputSchema: {
      type: "object",
      properties: {
        investor_sr_no: {
          type: "string",
          description: "Investor serial number to update (required)",
        },
        full_name: { type: "string" },
        investor_type: { type: "string", enum: ["IND", "IRA", "ENT", "TRUST"] },
        email: { type: "string" },
        first_name: { type: "string" },
        last_name: { type: "string" },
        phone: { type: "string" },
        address1: { type: "string" },
        city: { type: "string" },
        state: { type: "string" },
        zipcode: { type: "string" },
        country: { type: "string" },
        tax_id: { type: "string" },
        bank_name: { type: "string" },
        account_number: { type: "string" },
        account_name: { type: "string" },
        identity_type: { type: "string", enum: ["PP", "DL", "NI"] },
        identity_number: { type: "string" },
        identity_exp_date: { type: "string" },
      },
      required: ["investor_sr_no"],
    },
  },
];

// ─── SUBSCRIPTION TOOLS ────────────────────────────────────────────────────

export const subscriptionTools = [
  {
    name: "add_subscription",
    description: "Create a new subscription for an investor in a fund.",
    inputSchema: {
      type: "object",
      properties: {
        investor_profile: {
          type: "string",
          description: "Investor ID (investor serial number)",
        },
        fund: {
          type: "string",
          description: "Fund ID",
        },
        asset_type: {
          type: "string",
          description: "Asset type e.g. Series A",
        },
        subscription_type: {
          type: "string",
          enum: ["A", "I"],
          description: "A=Additional, I=Initial",
        },
        amount: {
          type: "string",
          description: "Subscription amount",
        },
        fund_currency: {
          type: "string",
          description: "Currency code e.g. USD",
        },
        entry_date: {
          type: "string",
          description: "Entry date in DD-MMM-YYYY format e.g. 01-Jan-2024",
        },
        funding_status: {
          type: "string",
          enum: ["F", "FN", "PF", "NA"],
          description: "F=Fully Funded, FN=Not Funded, PF=Partially Funded, NA=Not Applicable",
        },
        management_fees: { type: "string", description: "Management fees %" },
        performance_fees: { type: "string", description: "Performance fees %" },
        series: {
          type: "string",
          enum: ["Y", "N"],
          description: "Fund series applicable: Y=Yes, N=No",
        },
        dis_rev_plan: {
          type: "string",
          enum: ["A", "B", "C"],
          description:
            "Distribution reinvestment: A=Reinvest all, B=Reinvest %, C=Do not reinvest",
        },
        reinvest: { type: "string", description: "Reinvestment % (when dis_rev_plan=B)" },
        periodic_investment_plan: {
          type: "string",
          enum: ["Y", "N"],
          description: "Y=Yes, N=No",
        },
        periodic_investment_amount: {
          type: "string",
          description: "Periodic investment amount (when periodic_investment_plan=Y)",
        },
        fund_frequency: {
          type: "string",
          enum: ["A", "B", "M", "Q", "W"],
          description: "A=Annually, B=Bi-Weekly, M=Monthly, Q=Quarterly, W=Weekly",
        },
        transaction_source: {
          type: "string",
          enum: ["E", "F", "M", "O", "P"],
          description: "E=Email, F=Fax, M=Mail, O=Others, P=Prior Admin",
        },
        number_of_unit: { type: "string", description: "Number of shares/units" },
      },
      required: ["investor_profile", "fund", "asset_type", "subscription_type", "amount"],
    },
  },

  {
    name: "get_subscription",
    description: "Get details of a specific subscription by its ID.",
    inputSchema: {
      type: "object",
      properties: {
        subscription_sr_no: {
          type: "string",
          description: "Subscription serial number e.g. SUBCDS10001234",
        },
      },
      required: ["subscription_sr_no"],
    },
  },

  {
    name: "get_subscription_status",
    description: "Check the approval status of a subscription (Pending/Approved/Rejected).",
    inputSchema: {
      type: "object",
      properties: {
        subscription_sr_no: {
          type: "string",
          description: "Subscription serial number",
        },
      },
      required: ["subscription_sr_no"],
    },
  },

  {
    name: "update_subscription",
    description:
      "Update a pending subscription. Only works when activity status is Pending.",
    inputSchema: {
      type: "object",
      properties: {
        subscription_id: {
          type: "string",
          description: "Subscription serial number to update",
        },
        amount: { type: "string", description: "New amount" },
        fund_currency: { type: "string", description: "Currency code" },
        entry_date: { type: "string", description: "Entry date DD-MMM-YYYY" },
        funding_status: {
          type: "string",
          enum: ["F", "FN", "PF", "NA"],
          description: "Funding status",
        },
        subscription_type: {
          type: "string",
          enum: ["A", "I"],
          description: "A=Additional, I=Initial",
        },
        management_fees: { type: "string" },
        performance_fees: { type: "string" },
        transaction_source: { type: "string", enum: ["E", "F", "M", "O", "P"] },
      },
      required: ["subscription_id"],
    },
  },

  {
    name: "get_investor_subscriptions",
    description: "Get all subscriptions for a specific investor.",
    inputSchema: {
      type: "object",
      properties: {
        investor_id: {
          type: "string",
          description: "Investor serial number",
        },
      },
      required: ["investor_id"],
    },
  },
];

// ─── FUND TOOLS ────────────────────────────────────────────────────────────

export const fundTools = [
  {
    name: "list_funds",
    description: "List all available funds in CommonSubDoc.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },

  {
    name: "get_fund_detail",
    description:
      "Get detailed information about a specific fund including classes, fees, and type.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["id"],
    },
  },

  {
    name: "get_fund_documents",
    description:
      "Get all documents associated with a fund (FundDoc, FactsheetDoc, DDQDoc, MarketingContentDoc).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["id"],
    },
  },

  {
    name: "get_fund_tracker",
    description:
      "Get the subscription process tracker for a specific investor-fund pair, showing steps like application submission, AML/KYC, signing status, and funding.",
    inputSchema: {
      type: "object",
      properties: {
        investor_id: {
          type: "string",
          description: "Investor serial number",
        },
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["investor_id", "fund_id"],
    },
  },

  {
    name: "get_fundwise_tracker",
    description:
      "Get the subscription tracker for all investors in a specific fund.",
    inputSchema: {
      type: "object",
      properties: {
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["fund_id"],
    },
  },

  {
    name: "get_fundwise_investment",
    description:
      "Get current balance and investment totals for all investors in a specific fund.",
    inputSchema: {
      type: "object",
      properties: {
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["fund_id"],
    },
  },
];

// ─── PORTFOLIO & REPORTING TOOLS ───────────────────────────────────────────

export const portfolioTools = [
  {
    name: "get_portfolio",
    description:
      "Get full portfolio overview for an investor including total invested, withdrawals, account value, profit/loss, and per-fund breakdown.",
    inputSchema: {
      type: "object",
      properties: {
        investor_sr_no: {
          type: "string",
          description: "Investor serial number",
        },
      },
      required: ["investor_sr_no"],
    },
  },

  {
    name: "get_investor_statement",
    description:
      "Fetch the investor statement PDF (returned as base64 stream) for a specific investor, fund, and date.",
    inputSchema: {
      type: "object",
      properties: {
        investor_id: {
          type: "string",
          description: "Investor serial number",
        },
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
        date: {
          type: "string",
          description: "Statement date",
        },
      },
      required: ["investor_id", "fund_id", "date"],
    },
  },

  {
    name: "get_redemption",
    description: "Get redemption records for a specific fund, paginated.",
    inputSchema: {
      type: "object",
      properties: {
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
        page: {
          type: "number",
          description: "Page number (default: 1)",
          default: 1,
        },
      },
      required: ["fund_id"],
    },
  },

  {
    name: "get_kyc_status",
    description:
      "Get AML/KYC status for a subscription, including all process steps and their dates.",
    inputSchema: {
      type: "object",
      properties: {
        subscription_id: {
          type: "string",
          description: "Subscription serial number",
        },
      },
      required: ["subscription_id"],
    },
  },
];

// ─── DOCUMENT TOOLS ────────────────────────────────────────────────────────

export const documentTools = [
  {
    name: "get_investor_documents",
    description:
      "Fetch all documents uploaded for an investor (supporting docs + document grid).",
    inputSchema: {
      type: "object",
      properties: {
        investor_id: {
          type: "string",
          description: "Investor serial number",
        },
      },
      required: ["investor_id"],
    },
  },
];

// ─── COMMUNICATION TOOLS ───────────────────────────────────────────────────

export const communicationTools = [
  {
    name: "send_contract_note",
    description: "Send a contract note email to an investor for a specific fund.",
    inputSchema: {
      type: "object",
      properties: {
        investor_id: {
          type: "string",
          description: "Investor serial number",
        },
        fund_id: {
          type: "string",
          description: "Fund ID",
        },
      },
      required: ["investor_id", "fund_id"],
    },
  },

  {
    name: "send_subscription_agreement",
    description:
      "Send a subscription agreement to an investor for signing. Returns the document signing URL.",
    inputSchema: {
      type: "object",
      properties: {
        subscription_id: {
          type: "string",
          description: "Subscription serial number",
        },
        send_email: {
          type: "boolean",
          description:
            "Whether to trigger email notification (default: true)",
          default: true,
        },
      },
      required: ["subscription_id"],
    },
  },
];

// ─── DEALER / BRANCH / REP TOOLS ───────────────────────────────────────────

export const dealerTools = [
  {
    name: "get_dealer_details",
    description: "Get dealer details by CDR number.",
    inputSchema: {
      type: "object",
      properties: {
        cdr_number: {
          type: "string",
          description: "Dealer CDR number",
        },
      },
      required: ["cdr_number"],
    },
  },

  {
    name: "get_branch_details",
    description: "Get branch details by branch number and dealer CDR number.",
    inputSchema: {
      type: "object",
      properties: {
        branch_number: {
          type: "string",
          description: "Branch number",
        },
        dealer_id: {
          type: "string",
          description: "Dealer CDR number",
        },
      },
      required: ["branch_number", "dealer_id"],
    },
  },

  {
    name: "get_account_rep_details",
    description:
      "Get account representative details by rep number, branch ID, and dealer CDR number.",
    inputSchema: {
      type: "object",
      properties: {
        rep_number: {
          type: "string",
          description: "Account representative number",
        },
        branch_id: {
          type: "string",
          description: "Branch number",
        },
        dealer_id: {
          type: "string",
          description: "Dealer CDR number",
        },
      },
      required: ["rep_number", "branch_id", "dealer_id"],
    },
  },
];

export const allTools = [
  ...investorTools,
  ...subscriptionTools,
  ...fundTools,
  ...portfolioTools,
  ...documentTools,
  ...communicationTools,
  ...dealerTools,
];
