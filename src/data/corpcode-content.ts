export interface ValueProp {
  id: string;
  title: string;
  description: string;
}

export interface CorpcodeTier {
  id: string;
  name: string;
  startsFrom: string;
  bestFor: string;
  examples: string[];
  popular?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
}

export interface PillarLink {
  id: string;
  name: string;
  href: string;
  blurb: string;
  isCurrent?: boolean;
}

export interface CorpcodeFAQ {
  question: string;
  answer: string;
}

export const hero = {
  eyebrow: "A Corplabs Product · Custom Software Builds",
  headline: "Custom software, built for what your business actually does",
  subheadline:
    "From internal tools to full ERPs — we design, build, and maintain the systems off-the-shelf can't touch.",
  primaryCta: {
    label: "Start with a discovery call",
    href: "/contact?intent=corpcode",
  },
  secondaryCta: {
    label: "See how we work",
    href: "#process",
  },
};

export const valueProps: ValueProp[] = [
  {
    id: "bespoke",
    title: "Bespoke, not templated",
    description:
      "Every line of code matches your workflow. No generic CRM bolt-ons, no forced process changes.",
  },
  {
    id: "predictable",
    title: "Senior craft, predictable cost",
    description:
      "Paid discovery before any build quote. Fixed price, milestone-phased delivery. No surprise invoices.",
  },
  {
    id: "endtoend",
    title: "One team, end-to-end",
    description:
      "Discovery, design, build, deploy, maintain — all under one roof. No vendor handoffs.",
  },
  {
    id: "sea",
    title: "Built for Southeast Asia",
    description:
      "Malaysian-led team. English / Bahasa / Mandarin native. Same time zone, same payment rails (FPX, DuitNow, e-invoicing).",
  },
];

export const tiers: CorpcodeTier[] = [
  {
    id: "lite",
    name: "Lite",
    startsFrom: "RM30k",
    bestFor: "Single-purpose internal tools",
    examples: ["Inventory tracker", "Lead capture", "Ops dashboard"],
  },
  {
    id: "standard",
    name: "Standard",
    startsFrom: "RM60k",
    bestFor: "Multi-module web applications",
    examples: ["Booking system", "Member portal", "Payment-gated platform"],
    popular: true,
  },
  {
    id: "advanced",
    name: "Advanced",
    startsFrom: "RM150k",
    bestFor: "Real-time + AI-driven systems",
    examples: ["Mobile + web apps", "ML inference", "IoT-connected workflows"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    startsFrom: "RM300k+",
    bestFor: "ERP-class, multi-tenant platforms",
    examples: ["Custom ERP", "Audit-grade systems", "Deep legacy integration"],
  },
];

export const tierDisclaimer =
  "All prices exclude 6% SST and pass-through costs (hosting, third-party APIs, premium licenses). Final quotes follow paid discovery.";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    duration: "1–4 weeks · from RM5k",
    description:
      "We map your workflow, write the SOW, design the architecture, and quote the build. You walk away with deliverables you own — even if you don't continue.",
  },
  {
    step: 2,
    title: "Build",
    duration: "3–9 months · milestone-phased",
    description:
      "Demos every 2 weeks. UAT sign-off before each payment milestone. You see progress before you pay for it.",
  },
  {
    step: 3,
    title: "Maintain",
    duration: "Optional retainer",
    description:
      "60-day warranty included. Ongoing plans cover bug fixes, dependency updates, and minor changes.",
  },
];

export const pillars: PillarLink[] = [
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
];

export const faqs: CorpcodeFAQ[] = [
  {
    question: "How much does a project cost?",
    answer:
      "Lite: from RM30k. Standard: from RM60k. Advanced: from RM150k. Enterprise: RM300k+. Discovery starts at RM5k. All prices exclude 6% SST and pass-through costs. Final figures are confirmed after paid discovery.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Lite: 6–10 weeks. Standard: 3–5 months. Advanced: 5–9 months. Enterprise: 9–18 months. Discovery (1–4 weeks) precedes all of these.",
  },
  {
    question: "Do we own the source code?",
    answer:
      "By default, Corplabs retains code ownership and you receive a perpetual license to use the deployed system. Full source code ownership transfer is available as an add-on.",
  },
  {
    question: "What if scope changes mid-build?",
    answer:
      "Change requests are quoted separately and folded into the next milestone. The original scope stays protected so the build doesn't drift.",
  },
  {
    question: "Do you maintain the system after launch?",
    answer:
      "A 60-day post-launch warranty is included free. After that, monthly maintenance retainers cover bug fixes, dependency updates, and minor changes.",
  },
  {
    question: "Can you work with our existing dev team?",
    answer:
      "Yes — augmentation engagements embed our engineers into your team on a monthly retainer.",
  },
  {
    question: "What if I'm not ready for a full build?",
    answer:
      "Start with paid discovery. You'll get a written SOW, architecture diagram, and fixed quote — yours to keep regardless of whether we build it.",
  },
];

export const finalCta = {
  headline: "Have an idea? Let's see if it's worth building.",
  body:
    "Discovery starts at RM5k and gives you a written SOW, architecture diagram, and a fixed quote — yours to keep whether we build it or not.",
  primaryCta: {
    label: "Book a discovery call",
    href: "/contact?intent=corpcode",
  },
};

export type TierSlug = "lite" | "standard" | "advanced" | "enterprise";

export interface TierFinderOption {
  label: string;
  tier: TierSlug;
}

export interface TierFinderQuestion {
  id: string;
  prompt: string;
  options: TierFinderOption[];
}

const tierFinderQuestions: TierFinderQuestion[] = [
  {
    id: "users",
    prompt: "Who will use the system?",
    options: [
      { label: "Just my internal team (5–50 people)", tier: "lite" },
      { label: "My team plus selected partners or clients", tier: "standard" },
      {
        label: "Public users or customers (hundreds to thousands)",
        tier: "advanced",
      },
      { label: "Multiple business units or tenants", tier: "enterprise" },
    ],
  },
  {
    id: "function",
    prompt: "What's the core function?",
    options: [
      {
        label:
          "A single tool that does one job well (track leads, manage inventory)",
        tier: "lite",
      },
      {
        label:
          "A multi-module platform (booking + payments + reports + roles)",
        tier: "standard",
      },
      {
        label: "Real-time, AI-driven, or mobile-first system",
        tier: "advanced",
      },
      {
        label: "Replaces or integrates with existing ERP/legacy systems",
        tier: "enterprise",
      },
    ],
  },
  {
    id: "integrations",
    prompt: "How many external integrations?",
    options: [
      { label: "One or two (email, basic auth)", tier: "lite" },
      {
        label: "Three to five (payment gateway, SMS, CRM, etc.)",
        tier: "standard",
      },
      {
        label: "Six or more, or includes IoT/hardware/ML services",
        tier: "advanced",
      },
      {
        label: "Deep legacy integration (SAP, Oracle, custom protocols)",
        tier: "enterprise",
      },
    ],
  },
  {
    id: "timeline",
    prompt: "What's your target timeline?",
    options: [
      { label: "Six to ten weeks", tier: "lite" },
      { label: "Three to five months", tier: "standard" },
      { label: "Five to nine months", tier: "advanced" },
      { label: "Nine months or more, phased rollout", tier: "enterprise" },
    ],
  },
  {
    id: "compliance",
    prompt: "Compliance / audit requirements?",
    options: [
      { label: "None or minimal", tier: "lite" },
      { label: "Industry-standard (PDPA, basic logging)", tier: "standard" },
      {
        label: "Regulated industry (finance, healthcare, government)",
        tier: "advanced",
      },
      { label: "ISO / SOC2 / audit-grade required", tier: "enterprise" },
    ],
  },
];

const tierFinderTierDescriptions: Record<TierSlug, string> = {
  lite: "A focused build, typically 6–10 weeks, starting at RM30k.",
  standard:
    "A multi-module web application, typically 3–5 months, starting at RM60k.",
  advanced:
    "A real-time or AI-driven system, typically 5–9 months, starting at RM150k.",
  enterprise:
    "An ERP-class platform, typically 9–18 months, starting at RM300k+.",
};

const tierFinderTierLabels: Record<TierSlug, string> = {
  lite: "Lite",
  standard: "Standard",
  advanced: "Advanced",
  enterprise: "Enterprise",
};

export const tierFinder = {
  heading: "Not sure which tier fits? Take 60 seconds.",
  subheading: "Five questions. Highest-tier answer wins.",
  questions: tierFinderQuestions,
  tierDescriptions: tierFinderTierDescriptions,
  tierLabels: tierFinderTierLabels,
};

export interface TechStackCategory {
  id: string;
  title: string;
  items: string[];
}

const techStackCategories: TechStackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Start",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["React Native", "Expo", "native iOS / Android when required"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL", "tRPC"],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis (caching)",
      "time-series stores for IoT workloads",
    ],
  },
  {
    id: "cms",
    title: "Content & CMS",
    items: ["Payload CMS v3", "headless content modelling"],
  },
  {
    id: "cloud",
    title: "Cloud & infrastructure",
    items: [
      "Google Cloud Platform",
      "Cloudflare (Workers, R2, Tunnels)",
      "Docker",
      "PM2",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    id: "ai",
    title: "AI & automation",
    items: [
      "Anthropic Claude API",
      "OpenAI Whisper",
      "custom agents and integrations (e.g., WhatsApp via Baileys)",
    ],
  },
  {
    id: "iot",
    title: "IoT & specialty",
    items: [
      "MQTT",
      "LoRaWAN",
      "sensor integration (proven in production by our HiTerra smart-farming platform)",
    ],
  },
];

export const techStack = {
  heading: "Technologies we use",
  intro:
    "Stack-agnostic by default. Final choices depend on your team's capability for long-term ownership, your existing infrastructure, and the project's specific demands.",
  categories: techStackCategories,
  outro:
    "We don't lock you into our defaults. If your team needs to maintain the system in PHP, .NET, or Python — we'll discuss it during discovery.",
};

