/**
 * All site copy lives here. Edit text in this file; layout lives in src/app and src/components.
 */

export const site = {
  name: "Matthew Meza",
  tagline: "Systems / Governance / Mission",
  role: "Chief Financial Officer",
  url: "https://matthewmeza.com",
  email: "matt@matthewmeza.com",
  linkedin: "https://linkedin.com/in/matthewameza",
  location: "Al Ain, United Arab Emirates",
  title: "Matthew Meza — Where systems meet mission.",
  description:
    "Strategy and operations executive. Building financial infrastructure, governance systems, and organizational capacity across complex, regulated environments. Ex-Amazon. Johns Hopkins MBA 2026.",
};

export const nav = [
  { label: "Approach", href: "/#approach" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Frameworks", href: "/frameworks/value-creation/" },
  { label: "About", href: "/about/" },
];

export const hero = {
  eyebrow: "CFO · Kanad Hospital · Al Ain, UAE",
  // The final word is underlined in Signal Orange, per the brand guidelines.
  headlineLead: "Where systems meet",
  headlineMark: "mission.",
  subline:
    "I build the systems, governance, and operational discipline that let organizations perform at their ceiling.",
};

export const metrics = [
  { value: "33%", label: "Procurement cycle reduction", context: "Hospital supply chain" },
  { value: "$200M+", label: "Inventory oversight", context: "Amazon operations" },
  { value: "6", label: "Functions consolidated", context: "One executive mandate" },
  { value: "2", label: "ERP implementations", context: "Selection to go-live" },
];

export const approach = {
  eyebrow: "01 / The Bridge",
  title: "Three crossings. One operating model.",
  intro:
    "The executives who create the most durable value are not the deepest experts in one world. They carry operational intelligence across contexts that rarely talk to each other.",
  crossings: [
    {
      from: "Amazon",
      to: "Kanad Hospital",
      body: "Amazon-scale operational discipline ($200M+ in inventory, 125+ associates, robotics fulfillment at peak throughput) translated into hospital supply chain, procurement reform, and an ERP implementation built from zero.",
      tags: ["CI systems", "Accountability frameworks", "Data-driven decisions"],
    },
    {
      from: "Corporate",
      to: "Complex institutions",
      body: "Financial governance designed for high-accountability environments, where the constraint is mission integrity, regulatory compliance, and stakeholder trust rather than margin alone.",
      tags: ["Zero-based budgeting", "Variance governance", "Outcome-oriented design"],
    },
    {
      from: "West",
      to: "Gulf",
      body: "US-trained financial and operational leadership, executed inside one of the world's most complex healthcare markets. Al Ain is where the actual work happens.",
      tags: ["Market fluency", "Institutional relationships", "Regional credibility"],
    },
  ],
};

export const capabilities = {
  eyebrow: "02 / Capabilities",
  title: "Six functions. One standard.",
  intro:
    "Consolidated oversight across the enterprise, each function built or rebuilt to operate with institutional-grade discipline under board scrutiny.",
  items: [
    {
      title: "Finance & Capital Governance",
      body: "Board-level reporting, IFRS-compliant accounting, capital allocation, and treasury. Full P&L ownership with zero-based budgeting and variance architecture designed from inception.",
    },
    {
      title: "Revenue Cycle Management",
      body: "End-to-end RCM across claims, payer contracts, denial management, and IFRS 9 / ECL-compliant receivables, with significant reductions in AR days and collection risk.",
    },
    {
      title: "IT Governance",
      body: "ERP implementation ownership, IT governance framework design, and digital infrastructure oversight, with internal talent developed at every layer.",
    },
    {
      title: "Supply Chain & Procurement",
      body: "Amazon-trained procurement discipline applied to hospital supply chain. Vendor governance, formulary management, and inventory optimization.",
    },
    {
      title: "Patient Access & Experience",
      body: "Registration, scheduling, insurance verification, and patient throughput, designed to make the front end of care as accountable as the financial back end.",
    },
    {
      title: "Strategy & Capital Projects",
      body: "Board-level strategic planning, capital governance, and organizational design. Business development and market entry analysis aligned to institutional positioning.",
    },
  ],
};

export const focus = {
  eyebrow: "03 / Focus Areas",
  title: "Built in three worlds. Applied where it counts.",
  intro: "The experience is most useful where financial rigor and mission integrity have to coexist.",
  items: [
    {
      title: "Governance and Board Reporting",
      body: "Financial governance that gives boards a clear, timely, and defensible view of performance, risk, and capital.",
    },
    {
      title: "Operational Transformation",
      body: "Turning functions that run on effort into functions that run on systems, with accountability built into how the work is done.",
    },
    {
      title: "Healthcare in the Gulf",
      body: "Operating context, not theory. Finance and operations leadership inside one of the region's most demanding regulatory environments.",
    },
    {
      title: "Mission-Driven Institutions",
      body: "Institutional financial discipline without compromising the culture and purpose that make the organization worth running.",
    },
  ],
};

export const framework = {
  eyebrow: "04 / How I Think",
  title: "How finance creates value.",
  body: "The goal sets the test. Analysis, planning and control act through four decisions: what to invest in, how to fund it, what to distribute, and how much liquidity to hold. The market keeps score, and the score feeds the next round of analysis.",
  cta: "Explore the framework",
  href: "/frameworks/value-creation/",
};

export const connect = {
  title: "Let's talk.",
  body: "Always glad to connect with leaders working on finance, governance, and healthcare operations, in the Gulf and beyond.",
};

export const about = {
  title: "About",
  description: `${site.name}, CFO and strategy and operations executive based in Al Ain, UAE.`,
  intro: [
    "The executives who create the most durable value are not the deepest experts in one world. They are the ones who carry operational intelligence across contexts that never otherwise communicate.",
    "Matthew builds the financial and operational infrastructure that lets complex organizations perform at their ceiling, regardless of sector. Not by importing best practices from adjacent industries, but by living in radically different worlds and translating what he finds.",
  ],
  experience: [
    {
      org: "Kanad Hospital",
      role: "Chief Financial Officer · Al Ain, UAE",
      when: "Present",
      points: [
        "Consolidated leadership of finance, revenue cycle, IT, supply chain, patient access, and marketing under a single executive mandate with full P&L ownership.",
        "Designed and deployed board-level financial governance: zero-based budgeting, real-time variance reporting, IFRS-compliant accounting, and capital allocation discipline.",
        "Cut procurement cycle time by a third through a continuous improvement framework applied to supply chain, vendor governance, and inventory.",
        "Owned ERP implementation from system selection through go-live, building internal talent at every layer.",
      ],
    },
    {
      org: "Amazon",
      role: "Operations Leadership",
      when: "Prior",
      points: [
        "Oversaw $200M+ in inventory across robotics-enabled fulfillment operations at peak throughput.",
        "Led teams of 125+ associates with metric-driven accountability frameworks.",
      ],
    },
  ],
  education: [
    {
      org: "Johns Hopkins University",
      detail: "Executive MBA, 2026 · Co-Terminal Certificate in Investments",
    },
  ],
};
