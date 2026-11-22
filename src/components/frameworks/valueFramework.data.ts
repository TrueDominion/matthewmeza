/*
 * Financial management framework: how the finance function creates value.
 * Source: Johns Hopkins Carey EMBA, corporate finance coursework.
 * Each node carries the course concept plus an operating translation for a
 * private, mission-driven hospital.
 */

export type NodeId =
  | "goal"
  | "analysis"
  | "planning"
  | "control"
  | "investment"
  | "financing"
  | "distribution"
  | "liquidity"
  | "risk"
  | "valuation";

export type EdgeKind = "mandate" | "lateral" | "decision" | "monitoring" | "feedback";

export interface FrameworkNode {
  id: NodeId;
  eyebrow: string;
  title: string;
  short?: string;
  question: string;
  levers: string[];
  measures: string[];
  hospital: string;
  failure: string;
}

export interface FrameworkEdge {
  from: NodeId;
  to: NodeId;
  kind: EdgeKind;
}

export const EDGE_COLORS: Record<EdgeKind, [string, string]> = {
  mandate: ["#818cf8", "#a78bfa"],
  lateral: ["#64748b", "#94a3b8"],
  decision: ["#38bdf8", "#818cf8"],
  monitoring: ["#34d399", "#2dd4bf"],
  feedback: ["#fbbf24", "#f97316"],
};

export const EDGE_LABELS: Record<EdgeKind, string> = {
  mandate: "Mandate",
  lateral: "Coordination",
  decision: "Decision flow",
  monitoring: "Monitoring",
  feedback: "Feedback",
};

export const NODES: Record<NodeId, FrameworkNode> = {
  goal: {
    id: "goal",
    eyebrow: "Objective",
    title: "Maximize long term shareholder wealth",
    question:
      "Does this decision raise the present value of future free cash flow, after pricing its risk?",
    levers: ["Every decision below is tested against this one criterion"],
    measures: ["Intrinsic value (DCF)", "Economic profit: ROIC minus WACC", "NPV of the decision"],
    hospital:
      "For a mission-driven hospital, read this as long term enterprise value: the durable capacity to fund quality care. Surplus is the means, not the end.",
    failure:
      "Optimizing this year's EBITDA by cutting capability, quality or reputation. Accounting profit rises while value falls.",
  },
  analysis: {
    id: "analysis",
    eyebrow: "Function",
    title: "Analysis activity",
    short: "Analysis",
    question: "Where do we stand, and why?",
    levers: ["Ratio and DuPont analysis", "Variance decomposition", "Benchmarking and trend"],
    measures: ["ROE = margin × turnover × leverage", "Cash conversion cycle", "Contribution margin by line"],
    hospital:
      "Payer mix, denial and rejection rates, cost per case, DSO by payer, contribution margin by service line and physician.",
    failure: "Reporting without diagnosis: numbers that describe but never explain.",
  },
  planning: {
    id: "planning",
    eyebrow: "Function",
    title: "Planning function",
    short: "Planning",
    question: "What will we commit to, and how will it be funded?",
    levers: ["Budget and pro forma statements", "Capital plan", "Sources and uses of funds"],
    measures: ["Plan vs. capacity to fund", "Sustainable growth rate", "Forecast accuracy"],
    hospital:
      "Annual operating budget, rolling five year capital plan, service line growth cases, all reconciled to cash.",
    failure: "Plans built bottom up that never meet the capital constraint.",
  },
  control: {
    id: "control",
    eyebrow: "Function",
    title: "Control system",
    short: "Control",
    question: "Is execution tracking the plan, and who acts when it is not?",
    levers: ["KPI scorecards", "Variance thresholds and escalation", "Post-investment audits"],
    measures: ["Actual vs. budget", "Covenant headroom", "Realized vs. approved NPV"],
    hospital:
      "Monthly executive scorecard, budget holder accountability, capex post-implementation reviews at 12 and 24 months.",
    failure: "Monitoring that never triggers a decision.",
  },
  investment: {
    id: "investment",
    eyebrow: "Decision area",
    title: "Which projects to undertake",
    short: "Investment",
    question: "Does it earn more than its risk-adjusted cost of capital?",
    levers: ["Capital budgeting: NPV, IRR, payback", "Rank by profitability index under rationing", "Real options"],
    measures: ["NPV > 0 at risk-adjusted WACC", "Profitability index", "Post-audit realization"],
    hospital:
      "Equipment, beds, service lines, IT. Model ramp-up, staffing and maintenance tails, not only the purchase price.",
    failure: "IRR vanity and optimistic volumes; opex tails left out of the case.",
  },
  financing: {
    id: "financing",
    eyebrow: "Decision area",
    title: "How to raise funds",
    short: "Financing",
    question: "What mix of capital minimizes cost without inviting distress?",
    levers: ["Debt vs. equity mix", "Maturity matching", "Lease vs. buy"],
    measures: ["WACC", "Debt / EBITDA, interest cover", "Covenant headroom"],
    hospital:
      "Bank facilities, Ijara and Murabaha structures, vendor financing, lease vs. buy on major equipment.",
    failure: "Funding long-lived assets with short-term money.",
  },
  distribution: {
    id: "distribution",
    eyebrow: "Decision area",
    title: "Set a distribution policy",
    short: "Distribution",
    question: "Can we reinvest this cash at more than the owners' cost of capital?",
    levers: ["Retain vs. distribute", "Dividend stability and signaling", "Reserves policy"],
    measures: ["Payout ratio", "ROIC on retained capital", "Reserve adequacy"],
    hospital:
      "Surplus reinvestment vs. owner distributions vs. reserves. Retain when the capital plan earns above cost of capital.",
    failure: "Distributing cash the capital plan needs, then borrowing to replace it.",
  },
  liquidity: {
    id: "liquidity",
    eyebrow: "Decision area",
    title: "Adopt proper liquidity level",
    short: "Liquidity",
    question: "How much cash is enough to be safe without dragging returns?",
    levers: ["Working capital policy", "Cash buffer and facilities", "Collections and payables timing"],
    measures: ["Days cash on hand", "DSO, DIO, DPO", "Current and quick ratios"],
    hospital:
      "Insurer payment cycles drive DSO. Inventory days on pharmacy and consumables. Days cash on hand as the board's floor.",
    failure: "Too little: distress. Too much: idle cash that lowers ROE.",
  },
  risk: {
    id: "risk",
    eyebrow: "Outcome",
    title: "Risk and return profile",
    question: "Is the return we deliver worth the risk investors perceive?",
    levers: ["Investor perception of performance", "Financial environment factors"],
    measures: ["Cost of capital and beta", "Credit spreads and rating", "Earnings volatility"],
    hospital:
      "Payer concentration, regulatory change, rate environment (the dirham peg imports US policy rates), reputation and clinical risk.",
    failure: "Taking return without pricing the risk. Higher return with higher risk can still destroy value.",
  },
  valuation: {
    id: "valuation",
    eyebrow: "Scoreboard",
    title: "Resulting valuation in the market",
    question: "What is the market's verdict on our decisions?",
    levers: ["Not a lever: the result of every lever above"],
    measures: ["Market or implied value", "EV / EBITDA vs. peers", "Market to book vs. ROE"],
    hospital:
      "Private, so the verdict shows up as implied value, lender appetite and pricing, and board confidence in the plan.",
    failure: "Managing to the scoreboard. The score is evidence for analysis, not the strategy.",
  },
};

export const DECISIONS: NodeId[] = ["investment", "financing", "distribution", "liquidity"];

export const EDGES: FrameworkEdge[] = [
  { from: "goal", to: "analysis", kind: "mandate" },
  { from: "goal", to: "planning", kind: "mandate" },
  { from: "goal", to: "control", kind: "mandate" },
  { from: "analysis", to: "planning", kind: "lateral" },
  { from: "planning", to: "control", kind: "lateral" },
  ...DECISIONS.map((d) => ({ from: "planning" as NodeId, to: d, kind: "decision" as EdgeKind })),
  ...DECISIONS.map((d) => ({ from: d, to: "risk" as NodeId, kind: "decision" as EdgeKind })),
  { from: "risk", to: "valuation", kind: "decision" },
  { from: "control", to: "risk", kind: "monitoring" },
  { from: "valuation", to: "analysis", kind: "feedback" },
];

export const PRINCIPLES = [
  {
    title: "Value is made in the middle",
    body: "Only the four decision areas create or destroy value. The goal sets the test; the valuation keeps score.",
  },
  {
    title: "Risk and return are priced together",
    body: "A decision that raises return but raises perceived risk more lowers value. Always ask what it does to the discount rate.",
  },
  {
    title: "The loop closes through analysis",
    body: "The market's verdict is data for the next cycle, not a target to manage. Control watches the risk; analysis learns from the score.",
  },
];
