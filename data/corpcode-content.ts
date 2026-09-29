import type { PillarStripItem } from "@/components/pillar-strip";
import type { FaqItem } from "@/components/ui/faq-accordion";

/* ── Hero ──────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "CORPCODE · CUSTOM SOFTWARE BUILDS",
  headline: "Custom software, built for what your business actually does",
  lede: "From internal tools to full ERPs — we design, build, and maintain the systems off-the-shelf can't touch. Paid discovery first, so the quote you get is the price you pay.",
  primaryCta: { label: "Start with discovery", href: "/contact" },
  secondaryCta: { label: "Size my build", href: "#finder" },
};

export interface SpecRow {
  k: string;
  v: string;
}

export const specSheetLabel = "ENGAGEMENT AT A GLANCE";

export const specSheet: SpecRow[] = [
  { k: "Price floor", v: "RM 30,000" },
  { k: "Paid discovery", v: "from RM 5,000 · 1–4 weeks" },
  { k: "Delivery", v: "milestone-phased, demo every 2 weeks" },
  { k: "Warranty", v: "60 days post-launch, included" },
  { k: "Team", v: "Malaysian-led · EN / BM / 中文" },
];

/* ── Tiers ─────────────────────────────────────────────────────────────── */

export interface CorpcodeTier {
  id: string;
  /** Mono kicker, e.g. "TIER 01". */
  n: string;
  name: string;
  startsFrom: string;
  duration: string;
  bestFor: string;
  examples: string[];
  popular?: boolean;
}

export const tiersHeading = {
  title: "Four tiers, one process",
  lede: "Public price floors and what each tier actually ships.",
  note: "excl. 8% SST",
};

export const tiers: CorpcodeTier[] = [
  {
    id: "lite",
    n: "TIER 01",
    name: "Lite",
    startsFrom: "from RM 30,000",
    duration: "6–10 weeks",
    bestFor: "Single-purpose internal tools that one team lives in daily.",
    examples: ["Inventory tracker", "Lead capture", "Ops dashboard"],
  },
  {
    id: "standard",
    n: "TIER 02",
    name: "Standard",
    startsFrom: "from RM 60,000",
    duration: "3–5 months",
    bestFor: "Multi-module web applications with roles, payments, and reporting.",
    examples: ["Booking system", "Member portal", "Payment-gated platform"],
    popular: true,
  },
  {
    id: "advanced",
    n: "TIER 03",
    name: "Advanced",
    startsFrom: "from RM 150,000",
    duration: "5–9 months",
    bestFor: "Real-time and AI-driven systems, often mobile-first.",
    examples: ["Mobile + web apps", "ML inference", "IoT-connected workflows"],
  },
  {
    id: "enterprise",
    n: "TIER 04",
    name: "Enterprise",
    startsFrom: "RM 300,000+",
    duration: "9–18 months",
    bestFor: "ERP-class, multi-tenant platforms with audit-grade requirements.",
    examples: ["Custom ERP", "Audit-grade systems", "Deep legacy integration"],
  },
];

export const tierDisclaimer =
  "All prices exclude 8% SST and pass-through costs (hosting, third-party APIs, premium licenses). Final quotes follow paid discovery.";

/* ── Tier finder (five questions, highest answer wins) ─────────────────── */

export interface FinderQuestion {
  id: string;
  prompt: string;
  /** Options are ordered from lowest tier (index 0) to highest (index 3). */
  options: string[];
}

export const finderQuestions: FinderQuestion[] = [
  {
    id: "users",
    prompt: "Who will use the system?",
    options: ["Internal team", "Team + partners", "Public users", "Multiple tenants"],
  },
  {
    id: "function",
    prompt: "What's the core function?",
    options: ["One focused tool", "Multi-module platform", "Real-time / AI", "Replaces an ERP"],
  },
  {
    id: "integrations",
    prompt: "How many external integrations?",
    options: ["One or two", "Three to five", "Six+, or IoT / ML", "Deep legacy (SAP, Oracle)"],
  },
  {
    id: "timeline",
    prompt: "Target timeline?",
    options: ["6–10 weeks", "3–5 months", "5–9 months", "9 months+, phased"],
  },
  {
    id: "compliance",
    prompt: "Compliance requirements?",
    options: ["Minimal", "PDPA / standard", "Regulated industry", "ISO / SOC2"],
  },
];

export const finder = {
  heading: "Size your build in five questions",
  answeredLabel: "5 of 5 answered",
  subline: "Highest answer wins — that's how we scope it too.",
  resultLabel: "RECOMMENDED TIER",
  nextStepLabel: "NEXT STEP",
  nextStep:
    "Discovery from RM 5,000 — you keep the SOW, architecture diagram, and fixed quote whether we build it or not.",
  cta: { label: "Book a discovery call", href: "/contact" },
};

/* ── Process ───────────────────────────────────────────────────────────── */

export interface ProcessStep {
  n: string;
  title: string;
  duration: string;
  desc: string;
}

export const processHeading = "From discovery to launch";

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery",
    duration: "1–4 weeks · from RM 5,000",
    desc: "We map your workflow, write the SOW, design the architecture, and quote the build. You walk away with deliverables you own — even if you don't continue.",
  },
  {
    n: "02",
    title: "Build",
    duration: "3–9 months · milestone-phased",
    desc: "Demos every two weeks. UAT sign-off before each payment milestone. You see progress before you pay for it.",
  },
  {
    n: "03",
    title: "Maintain",
    duration: "Optional retainer",
    desc: "60-day warranty included. Ongoing plans cover bug fixes, dependency updates, and minor changes as the business shifts.",
  },
];

/* ── Tech stack ────────────────────────────────────────────────────────── */

export interface TechGroup {
  id: string;
  title: string;
  items: string[];
}

export const techStack = {
  heading: "Technologies we use",
  intro:
    "Stack-agnostic by default. Final choices depend on your team's capability for long-term ownership, your existing infrastructure, and what the project actually demands.",
  outro:
    "We don't lock you into our defaults. If your team needs to maintain the system in PHP, .NET, or Python, we'll say so during discovery.",
  groups: [
    { id: "frontend", title: "Frontend", items: ["TypeScript", "React", "Next.js", "TanStack Start", "Tailwind CSS", "shadcn/ui"] },
    { id: "mobile", title: "Mobile", items: ["React Native", "Expo", "native iOS / Android when required"] },
    { id: "backend", title: "Backend", items: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL", "tRPC"] },
    { id: "databases", title: "Databases", items: ["PostgreSQL", "MySQL", "Redis", "time-series stores for IoT"] },
    { id: "cms", title: "Content & CMS", items: ["Payload CMS v3", "headless content modelling"] },
    { id: "cloud", title: "Cloud & infrastructure", items: ["Google Cloud", "Cloudflare Workers / R2 / Tunnels", "Docker", "PM2", "Nginx", "GitHub Actions"] },
    { id: "ai", title: "AI & automation", items: ["Anthropic Claude API", "OpenAI Whisper", "WhatsApp agents"] },
    { id: "iot", title: "IoT & specialty", items: ["MQTT", "LoRaWAN", "sensor integration (proven on HiTerra)"] },
  ] satisfies TechGroup[],
};

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqHeading = "Common questions";

export const faqs: FaqItem[] = [
  {
    question: "How much does a project cost?",
    answer:
      "Lite from RM 30,000. Standard from RM 60,000. Advanced from RM 150,000. Enterprise RM 300,000+. Discovery starts at RM 5,000. All figures exclude 8% SST and pass-through costs, and are fixed after paid discovery.",
  },
  {
    question: "Do we own the source code?",
    answer:
      "By default Corplabs retains code ownership and you receive a perpetual license to use the deployed system. Full source ownership transfer is available as an add-on.",
  },
  {
    question: "What if scope changes mid-build?",
    answer:
      "Change requests are quoted separately and folded into the next milestone, so the original scope stays protected and the build doesn't drift.",
  },
  {
    question: "Do you maintain the system after launch?",
    answer:
      "A 60-day post-launch warranty is included. After that, monthly retainers cover bug fixes, dependency updates, and minor changes.",
  },
  {
    question: "Can you work with our existing dev team?",
    answer:
      "Yes — augmentation engagements embed our engineers into your team on a monthly retainer.",
  },
  {
    question: "What if I'm not ready for a full build?",
    answer:
      "Start with paid discovery. You walk away with a written SOW, an architecture diagram, and a fixed quote — yours regardless of whether we build it.",
  },
];

/* ── Closing CTA ───────────────────────────────────────────────────────── */

export const finalCta = {
  headline: "Have an idea? Let's see if it's worth building.",
  body: "Discovery starts at RM 5,000 and gives you a written SOW, an architecture diagram, and a fixed quote — yours to keep whether we build it or not.",
  cta: { label: "Book a discovery call", href: "/contact" },
};

/* ── Cross-pillar strip ────────────────────────────────────────────────── */

export const pillars: PillarStripItem[] = [
  {
    id: "corpi",
    name: "Corpi",
    href: "/corpi",
    blurb: "AI WhatsApp sales agents that capture and qualify leads 24/7.",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    href: "/corpcode",
    blurb: "Custom software builds — from internal tools to full ERPs.",
    isCurrent: true,
  },
  {
    id: "corprise",
    name: "Corprise",
    href: "/corprise",
    blurb: "Subscription-priced ERP for Malaysian SMEs. MyInvois-ready.",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    href: "/corpsite",
    blurb: "Websites — design, build, and ongoing care, software-house grade.",
  },
];
