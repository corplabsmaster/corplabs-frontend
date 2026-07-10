/**
 * Homepage copy — from the Claude Design "Corplabs Landing" handoff.
 * Corpi pricing follows the live site (data/corpi.ts), not the prototype.
 */

export const hero = {
  eyebrow: "Idea to Reality",
  headline: {
    plain: "Bringing Your Ideas to Life,",
    gradient: "One Line of Code at a Time",
  },
  lede: "We design, build, and maintain software for businesses across Southeast Asia — four products of our own, and yours next.",
  primaryCta: { label: "Get a Quote", href: "#contact" },
  secondaryCta: { label: "Our Products", href: "#products" },
  corpiRibbon: {
    pill: "NEW",
    text: "Corpi Intelligence — your AI WhatsApp sales agent.",
    cta: "Meet Corpi →",
  },
};

// ─── Product tabs ───────────────────────────────────────────────────────────

export type PillarKind = "corpi" | "code" | "rise" | "site";

export interface HomePillar {
  index: string;
  name: string;
  isNew?: boolean;
  kind: PillarKind;
  title: string;
  price: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  pageHref: string;
}

export const homePillars: HomePillar[] = [
  {
    index: "01",
    name: "Corpi",
    isNew: true,
    kind: "corpi",
    title: "Corpi Intelligence",
    price: "from RM 1,500 setup + RM 300–800/mo",
    blurb:
      "A Claude-powered sales agent that answers your WhatsApp — quoting, following up, and qualifying leads, then handing hot ones to your team with full context.",
    features: [
      "Replies in seconds, 24/7",
      "English, Bahasa & Manglish",
      "Human handoff built in",
    ],
    cta: { label: "Get Corpi on your number", href: "/corpi" },
    pageHref: "/corpi",
  },
  {
    index: "02",
    name: "Corpcode",
    kind: "code",
    title: "Corpcode",
    price: "from RM 30,000 · discovery from RM 5,000",
    blurb:
      "Custom software builds, by the team that ships its own products. Paid discovery, fixed quote, milestone-phased delivery — from internal tools to full ERPs.",
    features: [
      "Scope & fixed quote up front",
      "Short cycles, visible progress",
      "We maintain what we build",
    ],
    cta: { label: "Book a discovery call", href: "/corpcode" },
    pageHref: "/corpcode",
  },
  {
    index: "03",
    name: "Corprise",
    kind: "rise",
    title: "Corprise ERP",
    price: "RM 1,000 – 5,000 / month",
    blurb:
      "Odoo ERP on a flat monthly subscription — hosted in Malaysia, MyInvois compliant from day one, live in four to eight weeks. No per-user pricing.",
    features: [
      "Flat monthly subscription",
      "MyInvois compliant from day one",
      "Live in 4–8 weeks",
    ],
    cta: { label: "Book a discovery workshop", href: "/corprise" },
    pageHref: "/corprise",
  },
  {
    index: "04",
    name: "Corpsite",
    kind: "site",
    title: "Corpsite",
    price: "from RM 2,000 + RM 100/mo retainer",
    blurb:
      "Websites built like software — six tiers from starter sites to enterprise platforms, every plan with a transparent retainer for hosting, monitoring, and edits.",
    features: [
      "Tiered packages, clear pricing",
      "Modern stack, Cloudflare-native",
      "NGO programme for good causes",
    ],
    cta: { label: "Book a discovery call", href: "/corpsite" },
    pageHref: "/corpsite",
  },
];

export const productsHeading = {
  title: "Four Products, One Team",
  hint: "Click a product — try it live",
};

// ─── Corpi demo chat ────────────────────────────────────────────────────────

export interface ChatMessage {
  from: "cust" | "corpi" | "system";
  text: string;
}

export const corpiChat: { shopName: string; status: string; script: ChatMessage[] } = {
  shopName: "Kedai Hardware Maju",
  status: "Corpi · online",
  script: [
    { from: "cust", text: "Hi, do you have the 20L storage box? Need 50 units for my shop" },
    {
      from: "corpi",
      text: "Hi! Yes — the 20L stackable is in stock. For 50 units the bulk price is RM 12.50/unit, RM 625 total. Want me to reserve them?",
    },
    { from: "cust", text: "boleh dapat discount tak kalau ambik 100?" },
    {
      from: "corpi",
      text: "Boleh! 100 units masuk tier borong — RM 11/unit, jadi RM 1,100. Nak saya sediakan quotation sekali?",
    },
    { from: "cust", text: "ok send quote" },
    {
      from: "corpi",
      text: "Done — quotation #Q-1042 sent to this chat. Delivery to Puchong is free above RM 800. Anything else?",
    },
    { from: "system", text: "→ lead qualified · handed to Sarah (Sales) with full context" },
  ],
};

// ─── Mini finders (3-question teasers; full wizards live on pillar pages) ───

export interface MiniFinderQuestion {
  prompt: string;
  options: string[];
}

export interface MiniFinderTier {
  name: string;
  price: string;
  detail: string;
  cta: string;
  popular?: boolean;
}

export interface MiniFinder {
  title: string;
  questions: MiniFinderQuestion[];
  /** answers (option indexes) → recommended tier */
  recommend: (answers: number[]) => MiniFinderTier;
  fullWizard: { label: string; href: string };
}

const riseTiers: (MiniFinderTier & { min: number; max: number })[] = [
  { name: "Starter", price: "RM 1,000/mo", detail: "Invoicing · Contacts · MyInvois e-Invoice · up to 3 users", cta: "Start with Starter", min: 0, max: 5 },
  { name: "Essential", price: "RM 2,000/mo", detail: "Accounting · Invoicing · MyInvois · Expenses · up to 10 users", cta: "Choose Essential", min: 6, max: 10 },
  { name: "Growth", price: "RM 3,000/mo", detail: "Essential + Sales · Purchase · Inventory · CRM · up to 25 users", cta: "Choose Growth", popular: true, min: 11, max: 16 },
  { name: "Professional", price: "RM 4,000/mo", detail: "Growth + HR & Payroll (MY) · Projects · Helpdesk · up to 50 users", cta: "Choose Professional", min: 17, max: 22 },
  { name: "Scale", price: "RM 5,000/mo", detail: "Professional + Manufacturing · Multi-company · Multi-currency · up to 100 users", cta: "Choose Scale", min: 23, max: 28 },
  { name: "Bespoke", price: "Let's talk", detail: "Scale + custom modules, integrations, on-site engineers · unlimited users", cta: "Book a call", min: 29, max: Infinity },
];

const codeTiers: MiniFinderTier[] = [
  { name: "Lite", price: "from RM 30,000", detail: "A focused single-purpose build, typically 6–10 weeks.", cta: "Book a discovery call" },
  { name: "Standard", price: "from RM 60,000", detail: "A multi-module web application, typically 3–5 months.", cta: "Book a discovery call", popular: true },
  { name: "Advanced", price: "from RM 150,000", detail: "A real-time or AI-driven system, typically 5–9 months.", cta: "Book a discovery call" },
  { name: "Enterprise", price: "RM 300,000+", detail: "An ERP-class, multi-tenant platform, typically 9–18 months.", cta: "Book a discovery call" },
];

const siteTiers: MiniFinderTier[] = [
  { name: "Corpsite Spark", price: "RM 2,000 + RM 100/mo", detail: "1–3 page custom site on Cloudflare. We handle edits under the retainer.", cta: "Start with Spark" },
  { name: "Corpsite Launch", price: "from RM 12,000 + RM 600/mo", detail: "5–7 pages, Payload CMS, SEO, GA4, contact forms to a Notion CRM.", cta: "Start with Launch", popular: true },
  { name: "Corpsite Studio", price: "from RM 28,000 + RM 1,200/mo", detail: "10–15 pages, custom motion, multi-language, advanced SEO.", cta: "Start with Studio" },
  { name: "Corpsite Stack", price: "from RM 60,000 + RM 3,500/mo", detail: "Gated portals, dashboards, integrations, CI/CD, engineering retainer.", cta: "Talk about Stack" },
];

export const miniFinders: Record<Exclude<PillarKind, "corpi">, MiniFinder> = {
  rise: {
    title: "Find your tier in 3 questions",
    questions: [
      { prompt: "How big is the team?", options: ["1–3", "4–10", "11–25", "26–50", "50+"] },
      { prompt: "What do you need to run?", options: ["Invoicing", "Accounting", "Sales + inventory", "HR + projects", "Manufacturing"] },
      { prompt: "MyInvois e-Invoice?", options: ["Need it now", "Soon", "Not sure"] },
    ],
    recommend: ([a = 0, b = 0, c = 0]) => {
      const score = [1, 4, 7, 10, 13][a] + [2, 5, 9, 13, 16][b] + [2, 1, 0][c];
      return riseTiers.find((t) => score >= t.min && score <= t.max) ?? riseTiers[0];
    },
    fullWizard: { label: "Take the full 7-question scorecard", href: "/corprise#scorecard" },
  },
  code: {
    title: "Find your build tier in 3 questions",
    questions: [
      { prompt: "Who will use it?", options: ["Internal team", "Team + partners", "Public users", "Multi-tenant"] },
      { prompt: "Core function?", options: ["One focused tool", "Multi-module app", "Real-time / AI", "Replaces ERP"] },
      { prompt: "Compliance needs?", options: ["Minimal", "Standard (PDPA)", "Regulated", "ISO / SOC2"] },
    ],
    recommend: (answers) => codeTiers[Math.max(...answers, 0)],
    fullWizard: { label: "Take the full tier finder", href: "/corpcode#find-tier" },
  },
  site: {
    title: "Find your plan in 3 questions",
    questions: [
      { prompt: "Primary goal?", options: ["Online presence", "Generate leads", "Content engine", "Power a product"] },
      { prompt: "How many pages?", options: ["1–3", "4–7", "8–15", "15+"] },
      { prompt: "Edit content yourself?", options: ["No, you handle it", "Yes, simple CMS", "Yes, workflows", "Yes, multi-role"] },
    ],
    recommend: (answers) => siteTiers[Math.max(...answers, 0)],
    fullWizard: { label: "Take the full plan selector", href: "/corpsite#plan-selector" },
  },
};

// ─── Services ───────────────────────────────────────────────────────────────

export const servicesHeading = { title: "Our Services", hint: "Beyond the Products" };

export const services = [
  { name: "App", blurb: "Engaging, user-centered mobile apps.", icon: "/icons/app-icon.svg" },
  { name: "Web", blurb: "Website creation, SEO, e-commerce, and maintenance.", icon: "/icons/web-icon.svg" },
  { name: "Cybersecurity", blurb: "Comprehensive protection for your digital assets.", icon: "/icons/cybersecurity-icon.svg" },
  { name: "Design", blurb: "Inclusive, accessible digital design.", icon: "/icons/design-icon.svg" },
  { name: "Marketing", blurb: "Strategic marketing that elevates your brand.", icon: "/icons/marketing-icon.svg" },
  { name: "GameFi", blurb: "Gaming meets finance and blockchain.", icon: "/icons/gamefi-icon.svg" },
];

// ─── Process ────────────────────────────────────────────────────────────────

export const processHeading = {
  pre: "Helping Your Business ",
  gradientA: "<Grow>",
  amp: " & ",
  gradientB: "<Succeed>",
};

export const processSteps = [
  {
    n: "1",
    name: "Plan",
    blurb: "We scope with you, put the timeline on paper, and price the work before a line of code is written.",
  },
  {
    n: "2",
    name: "Execute",
    blurb: "Short build cycles with visible progress — you see working software, not status reports.",
  },
  {
    n: "3",
    name: "Maintain",
    blurb: "We stay after launch: monitoring, fixes, and steady improvements as your business grows.",
  },
];

// ─── HiTerra flagship ───────────────────────────────────────────────────────

export const hiterra = {
  eyebrow: "Our Flagship Project",
  title: "HiTerra™ AI Platform",
  lede: "An AI platform that helps farmers and agricultural companies run more profitable, more sustainable operations.",
  cta: { label: "Visit HiTerra Website →", href: "https://www.hiterra.co" },
  tiles: [
    { name: "AI Recommendations", blurb: "TerraMind AI insights to optimize practices and yield." },
    { name: "TerraLink System", blurb: "Connects providers, farmers, and services seamlessly." },
    { name: "Proven Results", blurb: "85% less labour, 70% time saved — field-validated." },
    { name: "Carbon Compliance", blurb: "Aligned with global carbon credit standards." },
  ],
};

// ─── Collaboration + culture ────────────────────────────────────────────────

export const collab = {
  title: "Collaborating with Corpians",
  lede: "Projects go right when everyone is in the room. We plan with you, build with you, and stay reachable — from first scope call to the release after launch.",
  badges: [
    { label: "Expert Consultation", icon: "/icons/consult-icon.svg" },
    { label: "Comprehensive Approach", icon: "/icons/compre-icon.svg" },
    { label: "Collaboration", icon: "/icons/collab-icon.svg" },
    { label: "Idea to Reality", icon: "/icons/idea-icon.svg" },
    { label: "Continued Support", icon: "/icons/support-icon.svg" },
  ],
};

export const culture = {
  title: { plain: "We Look Small, ", gradient: "But Think Big" },
  lede: "A small team that ships its own products and yours. We value diversity, balance, and room to grow.",
  blocks: [
    { name: "Work With Us", blurb: "Challenging projects and a supportive workplace." },
    { name: "Benefits & Perks", blurb: "Competitive pay, health coverage, flexible hours." },
    { name: "Career Growth", blurb: "Learning, mentorship, and challenges that stretch you." },
    { name: "Equal Opportunity", blurb: "All backgrounds welcome, without discrimination." },
  ],
};

// ─── Careers ────────────────────────────────────────────────────────────────

export const careersHeading = {
  title: "Job Vacancies",
  lede: "Exciting job opportunities await! Join our team today.",
};

export const jobs = [
  {
    team: "Engineering",
    title: "Senior Java Backend",
    thumb: "linear-gradient(135deg,#220066,#733FFF)",
    type: "Full-time",
    location: "Kuala Lumpur",
    monogram: "SB",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    href: "https://corplabs.notion.site/Senior-Java-Backend-e8dc9233206842ab9048106bbcc2d833",
  },
  {
    team: "Engineering",
    title: "NodeJS Backend Developer",
    thumb: "linear-gradient(135deg,#2F027E,#5605FF)",
    type: "Full-time",
    location: "Remote · MY",
    monogram: "ND",
    tags: ["Node.js", "NestJS", "TypeScript"],
    href: "/contact?intent=careers",
  },
  {
    team: "Product",
    title: "Product Lead",
    thumb: "linear-gradient(135deg,#220066,#AA97FF)",
    type: "Full-time",
    location: "Kuala Lumpur",
    monogram: "PL",
    tags: ["Roadmapping", "Discovery", "Analytics"],
    href: "/contact?intent=careers",
  },
];

// ─── Contact ────────────────────────────────────────────────────────────────

export const contactSection = {
  eyebrow: "Contact",
  title: { plain: "Have an Idea? Let's put a ", gradient: "plan on paper." },
  lede: "We usually reply within a business day. Discovery calls are free; written scopes are yours to keep.",
  phoneLabel: "Phone / WhatsApp",
  phone: "016-672 7208",
  emailLabel: "Email",
  email: "contact@corplabs.co",
  intents: ["General", "Corpi demo", "Corprise workshop", "Corpsite quote"],
  success: {
    title: "Got it — talk soon.",
    body: "Your inquiry is in. We usually reply within a business day.",
    again: "Send another",
  },
};

// ─── Footer ─────────────────────────────────────────────────────────────────

export const dunsLine = "D-U-N-S® Certified : 44-791-6777";
