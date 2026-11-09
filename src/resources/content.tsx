import { About, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Matthew",
  lastName: "Meza",
  name: "Matthew Meza",
  role: "CFO · Strategy & Operations Executive",
  avatar: "/images/avatar.jpg",
  email: "matt@matthewmeza.com",
  location: "Asia/Dubai", // IANA time zone, drives the live clock in the header
  locationLabel: "Al Ain, UAE", // Human readable location shown in the UI
  languages: [],
  locale: "en",
};

const social: Social = [
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/matthewameza",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Matthew Meza — Where systems meet mission.",
  description:
    "Strategy and operations executive. Building financial infrastructure, governance systems, and organizational capacity across complex, regulated environments. Ex-Amazon. Johns Hopkins MBA 2026.",
  headline: <>Where systems meet mission.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CFO</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Kanad Hospital · Al Ain, UAE
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I'm {person.firstName}. I build the systems, governance, and operational discipline that let
      organizations perform at their ceiling.
    </>
  ),
  proof: {
    display: true,
    title: "The work, in numbers.",
    metrics: [
      {
        value: "33%",
        label: "Procurement cycle reduction",
        description:
          "CI framework compressed hospital supply chain lead time by one-third. Amazon-trained operational discipline translated directly into healthcare procurement.",
      },
      {
        value: "$200M+",
        label: "Inventory oversight",
        description:
          "Amazon operations at scale: robotics fulfillment, 125+ associates, peak throughput across a global network.",
      },
      {
        value: "6",
        label: "Functions consolidated",
        description:
          "Finance, RCM, IT governance, supply chain, patient access, and marketing unified under single executive leadership.",
      },
      {
        value: "2",
        label: "ERP implementations",
        description:
          "Full implementation cycles owned, from system selection and vendor governance through go-live, stabilization, and integration remediation.",
      },
    ],
  },
  audiences: {
    display: true,
    title: "Built in three worlds. Applied in yours.",
    description:
      "For institutions and leaders where financial rigor and mission integrity must coexist without compromise.",
    items: [
      {
        title: "GCC Institutional Boards and Governance",
        description:
          "Board advisory and independent director roles across Abu Dhabi, Dubai, and the wider Gulf. Regional credibility backed by institutional finance depth and cross-sector operating experience.",
      },
      {
        title: "PE-Backed and Institutional Operators",
        description:
          "Assets that need executive leadership capable of both board-level financial governance and hands-on operational transformation, not just oversight of existing systems.",
      },
      {
        title: "International Organizations Entering MENA",
        description:
          "Health systems, consulting firms, and investors seeking market entry guidance from someone who operates in the region, not visits it.",
      },
      {
        title: "Complex Institutions Building for Scale",
        description:
          "Nonprofits, government-linked entities, foundations, and mission-driven organizations building institutional financial discipline without compromising operational culture.",
      },
    ],
  },
  connect: {
    display: true,
    title: "The infrastructure work starts here.",
    description:
      "Every engagement gets the accumulated intelligence of three radically different operational worlds: the discipline of Amazon, the financial rigor of a board-level CFO, and the market fluency of someone who actually operates in the Gulf.",
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name}, CFO and strategy and operations executive based in ${person.locationLabel}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    // Set display: true and add a booking link (e.g. Cal.com, Calendly) to show a "Schedule a call" pill
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          The executives who create the most durable value are not the deepest experts in one world.
          They are the ones who carry operational intelligence across contexts that never otherwise
          communicate.
        </p>
        <p>
          Matthew builds the financial and operational infrastructure that lets complex
          organizations perform at their ceiling, regardless of sector. Not by importing best
          practices from adjacent industries, but by living in radically different worlds and
          translating what he finds.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Kanad Hospital",
        timeframe: "Present",
        role: "Chief Financial Officer · Al Ain, UAE",
        achievements: [
          <>
            Consolidated leadership of finance, revenue cycle, IT, supply chain, patient access, and
            marketing under a single executive mandate with full P&L ownership.
          </>,
          <>
            Designed and deployed board-level financial governance from inception: zero-based
            budgeting, real-time variance reporting, IFRS-compliant accounting, and capital
            allocation discipline.
          </>,
          <>
            Cut procurement cycle time by a third through a continuous improvement framework applied
            to hospital supply chain, vendor governance, and inventory.
          </>,
          <>
            Owned ERP implementation from system selection through go-live and integration
            remediation, building internal talent at every layer.
          </>,
        ],
        images: [],
      },
      {
        company: "Amazon",
        timeframe: "Prior",
        role: "Operations Leadership",
        achievements: [
          <>
            Oversaw $200M+ in inventory across robotics-enabled fulfillment operations at peak
            throughput.
          </>,
          <>Led teams of 125+ associates with metric-driven accountability frameworks.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Johns Hopkins University",
        description: (
          <>Executive MBA, 2026 · Co-Terminal Certificate in Investments</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Capabilities",
    skills: [
      {
        title: "Finance & Capital Governance",
        description: (
          <>
            Board-level financial reporting, IFRS-compliant accounting, capital allocation, and
            treasury. Full P&L ownership with zero-based budget governance and variance architecture
            designed and deployed from inception.
          </>
        ),
        tags: [{ name: "IFRS" }, { name: "Zero-Based Budgeting" }, { name: "Treasury" }],
        images: [],
      },
      {
        title: "Revenue Cycle Management",
        description: (
          <>
            End-to-end RCM covering claims, payer contracts, denial management, and IFRS 9 /
            ECL-compliant receivables. Significant reductions in AR days and collection risk
            exposure.
          </>
        ),
        tags: [{ name: "Payer Contracts" }, { name: "Denial Management" }, { name: "IFRS 9 / ECL" }],
        images: [],
      },
      {
        title: "IT Governance",
        description: (
          <>
            Full ERP implementation ownership, IT governance framework design, and digital
            infrastructure oversight, built from zero with internal talent developed at every layer.
          </>
        ),
        tags: [{ name: "ERP" }, { name: "Integration" }, { name: "Digital Infrastructure" }],
        images: [],
      },
      {
        title: "Supply Chain & Procurement",
        description: (
          <>
            Amazon-trained procurement discipline applied to hospital supply chain. Vendor
            governance, formulary management, and inventory optimization.
          </>
        ),
        tags: [{ name: "Continuous Improvement" }, { name: "Vendor Governance" }],
        images: [],
      },
      {
        title: "Patient Access & Experience",
        description: (
          <>
            Registration, scheduling, insurance verification, and patient throughput, designed to
            make the front end of care as precise and accountable as the financial back end.
          </>
        ),
        tags: [{ name: "Throughput" }, { name: "Eligibility" }],
        images: [],
      },
      {
        title: "Strategy & Capital Projects",
        description: (
          <>
            Board-level strategic planning, capital governance, and organizational design. Business
            development, market entry analysis, and marketing aligned to institutional positioning.
          </>
        ),
        tags: [{ name: "Capital Governance" }, { name: "Market Entry" }, { name: "Org Design" }],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Case studies",
  description: `Operating case studies by ${person.name}: what transferred across Amazon, complex institutions, and the Gulf.`,
  // Add a new case study by adding an .mdx file to src/app/work/projects
};

export { person, social, home, about, work };
