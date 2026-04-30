/**
 * Corpsite — single source of truth for tiers, add-ons, NGO programme,
 * FAQs, plan-selector spec, and supporting copy.
 *
 * All user-facing strings live in this file. Components import by name
 * and never inline copy, so a future i18n pass can wrap these exports.
 *
 * Source of truth (Notion):
 * https://www.notion.so/3521f36a70cf81e9a0eaec84817c3766
 */

// ─── Tiers ─────────────────────────────────────────────────────────────────

export type TierId =
  | "spark"
  | "spark-notion"
  | "launch"
  | "studio"
  | "stack"
  | "suite"
  | "for-good";

export type TierHighlight = "popular-solo" | "popular-startup";

export interface Tier {
  id: TierId;
  name: string;
  emoji: string;
  oneTime: string;
  monthly: string;
  cms: string;
  pages: string;
  bestFor: string;
  delivery: string;
  /** Long-form summary for tier detail cards. */
  description: string;
  /** Bullet points for tier detail cards. */
  features: string[];
  highlight?: TierHighlight;
  ctaLabel: string;
  ctaHref: string;
}

/** Tier ordering for max() comparison and budget-fit comparison. */
export const TIER_RANK: Record<TierId, number> = {
  "for-good": 0,
  spark: 1,
  "spark-notion": 1,
  launch: 2,
  studio: 3,
  stack: 4,
  suite: 5,
};

export const tiers: Tier[] = [
  {
    id: "spark",
    name: "Corpsite Spark",
    emoji: "🔥",
    oneTime: "RM 2,000",
    monthly: "RM 100",
    cms: "None (static)",
    pages: "1–3",
    bestFor: "Solopreneurs, single-page launches",
    delivery: "14-day delivery",
    description:
      "For solopreneurs, freelancers, single-product launches, and pre-revenue MVPs.",
    features: [
      "1–3 page custom site, mobile-responsive",
      "Designed within the Corplabs design system",
      "Static hosting on Cloudflare Pages, free SSL, 99.9% uptime",
      "Contact form → email or Notion inbox",
      "14-day delivery",
      "No CMS — content edits handled by Corplabs as part of the retainer (fair-use)",
    ],
    highlight: "popular-solo",
    ctaLabel: "Start with Spark",
    ctaHref: "/contact?intent=corpsite&tier=spark",
  },
  {
    id: "spark-notion",
    name: "Corpsite Spark + Notion",
    emoji: "🪴",
    oneTime: "RM 3,000",
    monthly: "RM 100",
    cms: "Notion-powered",
    pages: "1–5",
    bestFor: "Teams that already live in Notion",
    delivery: "18-day delivery",
    description:
      "Spark, plus self-managed content powered by Notion.",
    features: [
      "Edit copy, images, blog posts directly in Notion",
      "Auto-syncs to live site (rebuild on save / scheduled)",
      "Up to 5 pages + simple blog feed",
      "Ideal for content-light sites where the team already works in Notion",
      "18-day delivery",
    ],
    ctaLabel: "Start with Spark + Notion",
    ctaHref: "/contact?intent=corpsite&tier=spark-notion",
  },
  {
    id: "launch",
    name: "Corpsite Launch",
    emoji: "🚀",
    oneTime: "from RM 12,000",
    monthly: "RM 600",
    cms: "Payload CMS",
    pages: "5–7",
    bestFor: "Startups, single-product brands",
    delivery: "3–4 weeks delivery",
    description:
      "For startups and post-MVP companies that need a real marketing site.",
    features: [
      "5–7 pages, Corplabs design system applied with light brand customisation",
      "Payload CMS v3 (PostgreSQL backend) — proper editorial workflows",
      "Cloudflare Pages + R2 storage",
      "Basic SEO setup, GA4, sitemap, robots, structured data",
      "Contact forms with Notion CRM integration",
      "3–4 weeks delivery",
      "30 days post-launch support included",
    ],
    highlight: "popular-startup",
    ctaLabel: "Start with Launch",
    ctaHref: "/contact?intent=corpsite&tier=launch",
  },
  {
    id: "studio",
    name: "Corpsite Studio",
    emoji: "🏗️",
    oneTime: "from RM 28,000",
    monthly: "RM 1,200",
    cms: "Payload CMS",
    pages: "10–15",
    bestFor: "Scaling SMEs, B2B service firms",
    delivery: "6–8 weeks delivery",
    description:
      "For scaling SMEs and B2B firms running content as a growth channel.",
    features: [
      "10–15 pages, custom illustrations and motion",
      "Payload CMS with multi-role editorial workflows",
      "Blog with categories, tags, related posts",
      "Multi-language (BM / EN, +1 optional)",
      "Advanced SEO + structured data + Open Graph templates",
      "A/B test scaffolding (PostHog or similar)",
      "6–8 weeks delivery",
      "Quarterly performance review included in retainer",
    ],
    ctaLabel: "Start with Studio",
    ctaHref: "/contact?intent=corpsite&tier=studio",
  },
  {
    id: "stack",
    name: "Corpsite Stack",
    emoji: "🧰",
    oneTime: "from RM 60,000",
    monthly: "RM 3,500",
    cms: "Custom CMS",
    pages: "15+",
    bestFor: "Mid-market, regional product cos",
    delivery: "10–14 weeks delivery",
    description:
      "For mid-market and regional product companies that need more than a brochure.",
    features: [
      "Studio scope + custom CMS modules",
      "Gated portals, member dashboards, role-based content",
      "API integrations (Stripe, HubSpot, Notion, custom REST/GraphQL)",
      "CI/CD pipelines + staging environment",
      "Cloudflare Tunnel ingress for internal tools / dashboards",
      "10–14 weeks delivery",
      "Monthly engineering retainer (typically 10–20 dev hours)",
    ],
    ctaLabel: "Talk about Stack",
    ctaHref: "/contact?intent=corpsite&tier=stack",
  },
  {
    id: "suite",
    name: "Corpsite Suite",
    emoji: "🏛️",
    oneTime: "from RM 120,000",
    monthly: "RM 8,000",
    cms: "Bespoke",
    pages: "Custom",
    bestFor: "Enterprise, regulated industries",
    delivery: "16–24 weeks, phased",
    description:
      "For enterprise, regional SaaS, and regulated industries.",
    features: [
      "Stack scope + multi-tenant architecture",
      "Role-based auth, SSO (Google / Microsoft / SAML), audit logs",
      "AI features powered by Claude (chat, search, agents)",
      "Bespoke integrations and data pipelines",
      "SLA with response/resolution targets",
      "16–24 weeks, phased delivery with formal SOWs",
    ],
    ctaLabel: "Talk about Suite",
    ctaHref: "/contact?intent=corpsite&tier=suite",
  },
];

/** Lookup tier by id; throws if id is unknown. */
export const findTier = (id: TierId): Tier => {
  const tier = tiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Unknown tier id: ${id}`);
  return tier;
};

// ─── Add-ons ───────────────────────────────────────────────────────────────

export interface Addon {
  id: string;
  name: string;
  setup: string;
  monthly: string;
  description: string;
}

export const addons: Addon[] = [
  {
    id: "corpi",
    name: "Corpi WhatsApp AI agent",
    setup: "RM 4,500",
    monthly: "RM 1,800 – 3,500",
    description:
      "Claude-powered WhatsApp sales agent. Captures and qualifies leads 24/7.",
  },
  {
    id: "illustrations",
    name: "Custom illustrations / brand system",
    setup: "RM 6,000 – 18,000",
    monthly: "—",
    description:
      "Bespoke illustration set, icon system, or extended brand guidelines.",
  },
  {
    id: "seo",
    name: "SEO retainer",
    setup: "—",
    monthly: "RM 2,500 – 6,000",
    description: "Technical and content SEO retained monthly.",
  },
  {
    id: "perf",
    name: "Performance / Core Web Vitals audit",
    setup: "RM 3,500",
    monthly: "—",
    description:
      "Deep audit and remediation plan for LCP, CLS, INP, and bundle size.",
  },
  {
    id: "analytics",
    name: "Analytics dashboard stack",
    setup: "RM 4,500",
    monthly: "RM 400",
    description: "Plausible / PostHog / GA4 wired with shared dashboards.",
  },
  {
    id: "migration",
    name: "Migration off WordPress / Webflow / Wix",
    setup: "RM 8,000 – 20,000",
    monthly: "—",
    description:
      "Content migration, redirect mapping, and SEO preservation onto the Corpsite stack.",
  },
  {
    id: "copy",
    name: "Copywriting (per page)",
    setup: "RM 400 – 1,200",
    monthly: "—",
    description: "Production copy by an editor who actually understands SEO.",
  },
  {
    id: "media",
    name: "Photography / video shoot day",
    setup: "RM 2,500 – 6,000",
    monthly: "—",
    description:
      "Half-day or full-day shoot — product, team, or environment.",
  },
];

// ─── NGO programme: Corpsite for Good ─────────────────────────────────────

export const ngoProgramme = {
  emoji: "🦂",
  badge: "Free for NGOs",
  heading: "Corpsite for Good",
  intro:
    "Great digital tooling shouldn't be reserved for funded orgs. Corpsite for Good offers free website construction for registered NGOs and non-profits, capped at 1–2 projects per year.",
  scope: {
    title: "What's included (Corpsite Spark or Launch tier scope)",
    items: [
      "Custom website on the Corplabs design system",
      "Notion CMS or Payload CMS",
      "Free hosting on Cloudflare in Year 1 (Year 2 optional, by review)",
      "Setup, deployment, and initial training",
      "30 days post-launch support",
    ],
  },
  eligibility: {
    title: "Who's eligible",
    items: [
      "Registered NGO, non-profit, society, or company limited by guarantee in MY or SEA (ROS, CLBG, or equivalent)",
      "Mission aligned with social, environmental, educational, or community impact",
      "Active for at least 12 months with verifiable activities",
    ],
  },
  terms: {
    title: "Terms & conditions",
    items: [
      "Maximum 2 projects awarded per calendar year, selected by Corplabs at sole discretion",
      "Corplabs footer credit (“Built with 🦂 by Corpsite”) required during the retention period",
      "Hosting & maintenance from Year 3 onward chargeable at standard Corpsite Spark retainer rates",
      "Cannot be used for political campaigning, religious proselytisation, or for-profit ventures",
      "Recipient must commit to a published case study / testimonial post-launch",
      "Scope is fixed at announcement; out-of-scope additions billed at standard rates",
      "Corplabs reserves the right to decline or withdraw at any stage",
    ],
  },
  apply: {
    title: "How to apply",
    intro: "Reach out via the contact form with:",
    items: [
      "A short overview of your org (registration number, mission, current activities)",
      "The specific change you want the website to support",
      "Any existing brand assets, links, or socials",
    ],
    closing: "We respond within 2 weeks. Apply year-round — selections rolling.",
  },
  cta: {
    label: "Apply for Corpsite for Good",
    href: "/contact?intent=corpsite-for-good",
  },
};

// ─── Pillars (for the cross-pillar nav strip) ─────────────────────────────

export interface Pillar {
  id: "corpi" | "corprise" | "corpcode" | "corpsite";
  name: string;
  blurb: string;
  href: string;
  isCurrent?: boolean;
}

export const pillars: Pillar[] = [
  {
    id: "corpi",
    name: "Corpi",
    blurb: "AI agents — WhatsApp, sales, support.",
    href: "/corpi",
  },
  {
    id: "corprise",
    name: "Corprise",
    blurb: "Subscription-priced ERP for Malaysian SMEs.",
    href: "/corprise",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    blurb: "Engineering services — custom software builds.",
    href: "/corpcode",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    blurb: "Websites — design, build, ongoing care.",
    href: "/solutions",
    isCurrent: true,
  },
];

// ─── Hero copy ─────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "A Corplabs Pillar · Websites",
  headline: {
    line1: "Websites,",
    line2: "built like software.",
  },
  subheadline:
    "Corpsite is how we deliver websites — modern stack, Cloudflare-native infra, optional AI via Corpi. Six tiers from RM 2,000 starter sites to enterprise platforms. Every plan includes a transparent monthly retainer for hosting, monitoring, and minor edits.",
  primaryCta: {
    label: "See pricing",
    href: "#tiers",
  },
  secondaryCta: {
    label: "Find my plan",
    href: "#plan-selector",
  },
};

// ─── Footer CTA ────────────────────────────────────────────────────────────

export const footerCta = {
  eyebrow: "Ready when you are",
  headline: "Book a discovery call.",
  body:
    "Tell us what you want to build. We'll come back with a written scope, a fixed quote, and the architecture diagram — yours to keep, even if you don't continue.",
  primaryCta: {
    label: "Book a discovery call",
    // TODO: replace placeholder with real Cal.com booking link.
    href: "https://cal.com/corplabs/discovery",
  },
  secondaryCta: {
    label: "Or use the contact form",
    href: "/contact?intent=corpsite",
  },
};

// ─── FAQ ───────────────────────────────────────────────────────────────────

export interface CorpsiteFaq {
  question: string;
  answer: string;
}

export const faqs: CorpsiteFaq[] = [
  {
    question: "Can I skip the monthly retainer?",
    answer:
      "Every Corpsite plan ships with a retainer because hosting, monitoring, and minor edits all need someone behind them. Without it, sites rot — that's the most common reason small-business websites die. The retainer keeps the lights on; it isn't an upsell.",
  },
  {
    question: "Are these prices in Malaysian Ringgit?",
    answer:
      "Yes — all prices are in Ringgit Malaysia (RM). Spark and Spark + Notion are flat. Launch through Suite are “from” floors that get a fixed quote after a paid discovery, so you never sign on a guess.",
  },
  {
    question: "What's the difference between Spark and Spark + Notion?",
    answer:
      "Spark is a static site we maintain for you — you brief us on changes via the retainer. Spark + Notion adds a Notion-powered CMS so your team can edit copy, swap images, and publish blog posts directly from Notion, with the site rebuilding automatically.",
  },
  {
    question: "Do you transfer code ownership?",
    answer:
      "By default, Corplabs retains code ownership and you receive a perpetual license to use the deployed system. Full source-code ownership transfer is available as an add-on, typically in Stack and Suite engagements.",
  },
  {
    question: "How does Corpsite for Good work?",
    answer:
      "Corpsite for Good is a free programme for registered NGOs in Malaysia and SEA. We award up to two projects a year at Spark or Launch tier scope, with free Year-1 hosting on Cloudflare. Apply year-round — selections roll. See the Corpsite for Good section for eligibility and T&Cs.",
  },
  {
    question: "Can I add a WhatsApp sales agent?",
    answer:
      "Yes — Corpi is our Claude-powered WhatsApp AI agent and slots in as an add-on to any Corpsite tier. Setup is RM 4,500, and the monthly retainer scales with conversation volume. The Plan Selector flags this automatically when you tick the WhatsApp option.",
  },
  {
    question: "What if I outgrow my tier?",
    answer:
      "Tiers upgrade in place. Spark → Launch swaps the static site for Payload CMS without losing your URL or design. Studio → Stack adds custom modules to the same codebase. We quote upgrades on the same fixed-price basis as the original build.",
  },
];

// ─── Plan Selector — questions, options, and tier mapping ─────────────────

export type Goal = "presence" | "leads" | "content" | "product" | "ngo";
export type PageCount = "1-3" | "4-7" | "8-15" | "15+";
export type CmsNeed = "none" | "notion" | "cms" | "workflows";
export type FeatureFlag =
  | "blog"
  | "i18n"
  | "auth"
  | "dashboards"
  | "ai"
  | "sso"
  | "whatsapp";
export type Traffic = "lt2k" | "2k-20k" | "20k-100k" | "100k+";
export type Budget = "lt5k" | "10-25k" | "25-60k" | "60-120k" | "120k+";

export interface SelectorAnswers {
  goal: Goal | null;
  pages: PageCount | null;
  cms: CmsNeed | null;
  features: FeatureFlag[];
  traffic: Traffic | null;
  budget: Budget | null;
}

export const emptyAnswers = (): SelectorAnswers => ({
  goal: null,
  pages: null,
  cms: null,
  features: [],
  traffic: null,
  budget: null,
});

export type GoalOption = { value: Goal; label: string; tier: TierId };
export type PageOption = { value: PageCount; label: string; tier: TierId };
export type CmsOption = { value: CmsNeed; label: string; tier: TierId };
export type FeatureOption = {
  value: FeatureFlag;
  label: string;
  tier?: TierId;
  triggersCorpi?: boolean;
};
export type TrafficOption = { value: Traffic; label: string; tier: TierId };
export type BudgetOption = { value: Budget; label: string; tier: TierId };

export const goalOptions: GoalOption[] = [
  {
    value: "presence",
    label: "Just need an online presence / business card",
    tier: "spark",
  },
  { value: "leads", label: "Generate leads or bookings", tier: "launch" },
  {
    value: "content",
    label: "Run a content engine (blog, SEO, growth)",
    tier: "studio",
  },
  {
    value: "product",
    label: "Power a product, portal, or dashboard",
    tier: "stack",
  },
  { value: "ngo", label: "We're a registered NGO", tier: "for-good" },
];

export const pageOptions: PageOption[] = [
  { value: "1-3", label: "1–3 pages", tier: "spark" },
  { value: "4-7", label: "4–7 pages", tier: "launch" },
  { value: "8-15", label: "8–15 pages", tier: "studio" },
  { value: "15+", label: "15+ pages, or app-like", tier: "stack" },
];

export const cmsOptions: CmsOption[] = [
  {
    value: "none",
    label: "No — infrequent updates, handled by Corplabs",
    tier: "spark",
  },
  {
    value: "notion",
    label: "Yes — in Notion (we already use Notion)",
    tier: "spark-notion",
  },
  {
    value: "cms",
    label: "Yes — via a dedicated CMS with workflows",
    tier: "launch",
  },
  {
    value: "workflows",
    label: "Yes — with multiple editors / roles / approvals",
    tier: "studio",
  },
];

export const featureOptions: FeatureOption[] = [
  { value: "blog", label: "Blog", tier: "launch" },
  { value: "i18n", label: "Multi-language (BM / EN / ID / ZH)", tier: "studio" },
  { value: "auth", label: "User accounts / login", tier: "stack" },
  { value: "dashboards", label: "Dashboards / data visualisation", tier: "stack" },
  { value: "ai", label: "AI chatbot or smart search", tier: "suite" },
  { value: "sso", label: "SSO / audit logs / compliance", tier: "suite" },
  { value: "whatsapp", label: "WhatsApp / sales automation", triggersCorpi: true },
];

export const trafficOptions: TrafficOption[] = [
  { value: "lt2k", label: "Under 2,000 visits / month", tier: "spark" },
  { value: "2k-20k", label: "2,000 – 20,000 / month", tier: "launch" },
  { value: "20k-100k", label: "20,000 – 100,000 / month", tier: "stack" },
  { value: "100k+", label: "100,000+ / month", tier: "suite" },
];

export const budgetOptions: BudgetOption[] = [
  { value: "lt5k", label: "Under RM 5,000", tier: "spark" },
  { value: "10-25k", label: "RM 10,000 – 25,000", tier: "launch" },
  { value: "25-60k", label: "RM 25,000 – 60,000", tier: "studio" },
  { value: "60-120k", label: "RM 60,000 – 120,000", tier: "stack" },
  { value: "120k+", label: "RM 120,000+", tier: "suite" },
];

export type SelectorStepId =
  | "goal"
  | "pages"
  | "cms"
  | "features"
  | "traffic"
  | "budget";

export interface SelectorStep {
  id: SelectorStepId;
  prompt: string;
  helpText?: string;
  kind: "single" | "multi";
}

export const selectorSteps: SelectorStep[] = [
  { id: "goal", prompt: "What's your primary goal?", kind: "single" },
  { id: "pages", prompt: "How many pages do you need?", kind: "single" },
  {
    id: "cms",
    prompt: "Do you need to update content yourself?",
    kind: "single",
  },
  {
    id: "features",
    prompt: "Any of these required?",
    helpText: "Multi-select — pick everything you'll need.",
    kind: "multi",
  },
  { id: "traffic", prompt: "Expected monthly traffic?", kind: "single" },
  { id: "budget", prompt: "Budget range?", kind: "single" },
];

// ─── Recommendation engine ────────────────────────────────────────────────

export interface Recommendation {
  recommended: TierId;
  budgetFit: TierId | null;
  diffNote: string | null;
  addCorpi: boolean;
  ngoBranch: boolean;
}

const tierFromGoal = (goal: Goal | null): TierId | null =>
  goal === null ? null : goalOptions.find((o) => o.value === goal)?.tier ?? null;

const tierFromPages = (pages: PageCount | null): TierId | null =>
  pages === null ? null : pageOptions.find((o) => o.value === pages)?.tier ?? null;

const tierFromCms = (cms: CmsNeed | null): TierId | null =>
  cms === null ? null : cmsOptions.find((o) => o.value === cms)?.tier ?? null;

const tierFromFeatures = (features: FeatureFlag[]): TierId | null => {
  const ranks: { tier: TierId; rank: number }[] = [];
  for (const f of features) {
    const tier = featureOptions.find((o) => o.value === f)?.tier;
    if (tier) ranks.push({ tier, rank: TIER_RANK[tier] });
  }
  if (ranks.length === 0) return null;
  return ranks.reduce((a, b) => (a.rank >= b.rank ? a : b)).tier;
};

const tierFromTraffic = (traffic: Traffic | null): TierId | null =>
  traffic === null
    ? null
    : trafficOptions.find((o) => o.value === traffic)?.tier ?? null;

const tierFromBudget = (budget: Budget | null): TierId | null =>
  budget === null ? null : budgetOptions.find((o) => o.value === budget)?.tier ?? null;

const maxTier = (candidates: (TierId | null)[]): TierId => {
  const nonNull: TierId[] = [];
  for (const c of candidates) {
    if (c !== null) nonNull.push(c);
  }
  if (nonNull.length === 0) return "spark";
  return nonNull.reduce((a, b) =>
    TIER_RANK[a] >= TIER_RANK[b] ? a : b
  );
};

/**
 * Diff notes describing what budget-fit gives up vs the recommended tier.
 * Keyed by `${recommended}|${budgetFit}`. Falls back to a generic line.
 */
const DIFF_NOTES: Record<string, string> = {
  "launch|spark":
    "Drops Payload CMS and editorial workflows; static site, fewer pages.",
  "launch|spark-notion":
    "Notion CMS instead of Payload — fewer editorial controls and integrations.",
  "studio|launch":
    "Drops multi-language support, advanced SEO templates, and A/B test scaffolding.",
  "studio|spark-notion":
    "Drops Payload CMS, blog, multi-role editors, and A/B test scaffolding.",
  "studio|spark":
    "Drops the CMS, blog, multi-language, and quarterly performance reviews.",
  "stack|studio":
    "Drops gated portals, role-based content, and CI/CD with staging.",
  "stack|launch":
    "Drops gated portals, custom CMS modules, and the engineering retainer.",
  "stack|spark-notion":
    "Drops portals, integrations, custom CMS, and the engineering retainer.",
  "stack|spark":
    "Drops every advanced feature — only suitable if scope shrinks significantly.",
  "suite|stack":
    "Drops multi-tenant architecture, SSO, audit logs, and the SLA.",
  "suite|studio":
    "Drops portals, multi-tenant architecture, SSO, and the AI features.",
  "suite|launch":
    "Drops nearly all enterprise scope — fits only if requirements scale back.",
  "suite|spark-notion":
    "Drops nearly all enterprise scope — fits only if requirements scale back.",
  "suite|spark":
    "Not realistically comparable — discovery will reframe the scope.",
};

const diffNoteFor = (recommended: TierId, budget: TierId): string => {
  const key = `${recommended}|${budget}`;
  return (
    DIFF_NOTES[key] ??
    "A discovery call will map the scope difference precisely."
  );
};

export const computeRecommendation = (
  answers: SelectorAnswers
): Recommendation | null => {
  // NGO branch short-circuits everything else.
  if (answers.goal === "ngo") {
    return {
      recommended: "for-good",
      budgetFit: null,
      diffNote: null,
      addCorpi: false,
      ngoBranch: true,
    };
  }

  const allAnswered =
    answers.goal !== null &&
    answers.pages !== null &&
    answers.cms !== null &&
    answers.traffic !== null &&
    answers.budget !== null;

  if (!allAnswered) return null;

  const recommended = maxTier([
    tierFromGoal(answers.goal),
    tierFromPages(answers.pages),
    tierFromCms(answers.cms),
    tierFromFeatures(answers.features),
    tierFromTraffic(answers.traffic),
  ]);

  const budgetTier = tierFromBudget(answers.budget);
  const budgetFit =
    budgetTier && TIER_RANK[budgetTier] < TIER_RANK[recommended]
      ? budgetTier
      : null;

  return {
    recommended,
    budgetFit,
    diffNote: budgetFit ? diffNoteFor(recommended, budgetFit) : null,
    addCorpi: answers.features.includes("whatsapp"),
    ngoBranch: false,
  };
};

// ─── URL-param helpers ─────────────────────────────────────────────────────

const VALID_GOAL: Goal[] = [
  "presence",
  "leads",
  "content",
  "product",
  "ngo",
];
const VALID_PAGES: PageCount[] = ["1-3", "4-7", "8-15", "15+"];
const VALID_CMS: CmsNeed[] = ["none", "notion", "cms", "workflows"];
const VALID_FEATURE: FeatureFlag[] = [
  "blog",
  "i18n",
  "auth",
  "dashboards",
  "ai",
  "sso",
  "whatsapp",
];
const VALID_TRAFFIC: Traffic[] = [
  "lt2k",
  "2k-20k",
  "20k-100k",
  "100k+",
];
const VALID_BUDGET: Budget[] = [
  "lt5k",
  "10-25k",
  "25-60k",
  "60-120k",
  "120k+",
];

const oneOfGoal = (raw: string | null): Goal | null => {
  if (!raw) return null;
  for (const v of VALID_GOAL) if (v === raw) return v;
  return null;
};
const oneOfPages = (raw: string | null): PageCount | null => {
  if (!raw) return null;
  for (const v of VALID_PAGES) if (v === raw) return v;
  return null;
};
const oneOfCms = (raw: string | null): CmsNeed | null => {
  if (!raw) return null;
  for (const v of VALID_CMS) if (v === raw) return v;
  return null;
};
const oneOfTraffic = (raw: string | null): Traffic | null => {
  if (!raw) return null;
  for (const v of VALID_TRAFFIC) if (v === raw) return v;
  return null;
};
const oneOfBudget = (raw: string | null): Budget | null => {
  if (!raw) return null;
  for (const v of VALID_BUDGET) if (v === raw) return v;
  return null;
};

export const parseAnswersFromSearch = (
  search: string
): SelectorAnswers => {
  const params = new URLSearchParams(search);
  const featuresRaw = (params.get("features") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const features: FeatureFlag[] = [];
  for (const f of featuresRaw) {
    for (const v of VALID_FEATURE) {
      if (v === f) {
        features.push(v);
        break;
      }
    }
  }
  return {
    goal: oneOfGoal(params.get("goal")),
    pages: oneOfPages(params.get("pages")),
    cms: oneOfCms(params.get("cms")),
    features,
    traffic: oneOfTraffic(params.get("traffic")),
    budget: oneOfBudget(params.get("budget")),
  };
};

export const serializeAnswersToSearch = (
  answers: SelectorAnswers,
  step: number | "result" | "ngo"
): string => {
  const params = new URLSearchParams();
  params.set("step", String(step));
  if (answers.goal) params.set("goal", answers.goal);
  if (answers.pages) params.set("pages", answers.pages);
  if (answers.cms) params.set("cms", answers.cms);
  if (answers.features.length > 0)
    params.set("features", answers.features.join(","));
  if (answers.traffic) params.set("traffic", answers.traffic);
  if (answers.budget) params.set("budget", answers.budget);
  return `?${params.toString()}`;
};

// ─── Section copy bundle ───────────────────────────────────────────────────

export const sectionCopy = {
  tierTable: {
    eyebrow: "All tiers, all in one table",
    heading: "Six plans. Real prices. No mystery.",
    intro:
      "Every plan includes a transparent monthly retainer for hosting, monitoring, and minor edits. Spark and Spark + Notion are flat — Launch onwards quote out after paid discovery.",
  },
  tierDetails: {
    eyebrow: "What each plan gets you",
    heading: "Every tier in detail.",
    intro:
      "Spark and Launch anchor our funnel: simple, fast, predictable. Studio and above add the editorial, integration, and infrastructure depth you need as you scale.",
  },
  addons: {
    eyebrow: "Add-ons",
    heading: "Stack on what you need.",
    intro:
      "Mix and match — every add-on attaches to any Corpsite tier. Pricing is a public floor; final figures are confirmed at discovery.",
  },
  planSelector: {
    eyebrow: "Plan Selector",
    heading: "Not sure which plan? Take 90 seconds.",
    subheading: "Six questions. We recommend the right tier — and a budget-fit alternative if needed.",
    progressLabel: "Question",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "The questions everyone asks.",
    intro:
      "Still unsure? Email contact@corplabs.co — we usually reply within a business day.",
  },
};
