/**
 * Corpsite — single source of truth for the /corpsite page.
 *
 * Every user-facing string lives here; components import by name and never
 * inline copy, so a future i18n pass can wrap these exports. Prices match the
 * live site (Corpi add-on retainer is the live RM 300–800/mo, not the stale
 * prototype figure).
 */

// ─── Tiers ─────────────────────────────────────────────────────────────────

export type SiteTierId =
  | "spark"
  | "spark-notion"
  | "launch"
  | "studio"
  | "stack"
  | "suite";

export interface SiteTier {
  id: SiteTierId;
  /** Full display name, e.g. "Corpsite Spark". */
  name: string;
  /** Short name for the hero ladder, e.g. "Spark". */
  short: string;
  /** One-time build price, e.g. "RM 2,000" or "from RM 12,000". */
  oneTime: string;
  /** Monthly retainer, e.g. "RM 100". */
  monthly: string;
  pages: string;
  bestFor: string;
  /** 0.1 … 1 — drives the ladder bar width and the selector ranking. */
  weight: number;
  popular?: boolean;
  /** One-liner for the tier table's "What you get" column. */
  what: string;
  /** Feature checklist shown in the plan-selector result card. */
  features: string[];
  /** CTA label shown in the plan-selector result card. */
  cta: string;
}

export const siteTiers: SiteTier[] = [
  {
    id: "spark",
    name: "Corpsite Spark",
    short: "Spark",
    oneTime: "RM 2,000",
    monthly: "RM 100",
    pages: "1–3",
    bestFor: "Solopreneurs, single-page launches",
    weight: 0.1,
    what: "A custom one-pager on Cloudflare. We handle content edits under the retainer.",
    features: [
      "1–3 custom-designed pages",
      "Cloudflare hosting + SSL",
      "Contact form to email",
      "Basic on-page SEO",
      "Minor edits under the retainer",
    ],
    cta: "Start with Spark",
  },
  {
    id: "spark-notion",
    name: "Corpsite Spark + Notion",
    short: "Spark + Notion",
    oneTime: "RM 3,000",
    monthly: "RM 100",
    pages: "1–5",
    bestFor: "Teams that already live in Notion",
    weight: 0.2,
    what: "Spark, with Notion as the content source so your team edits pages where it already works.",
    features: [
      "1–5 pages driven from Notion",
      "Edit content in Notion, publish in minutes",
      "Cloudflare hosting + SSL",
      "Contact form to a Notion database",
      "Basic on-page SEO",
    ],
    cta: "Start with Spark + Notion",
  },
  {
    id: "launch",
    name: "Corpsite Launch",
    short: "Launch",
    oneTime: "from RM 12,000",
    monthly: "RM 600",
    pages: "5–7",
    bestFor: "Startups, single-product brands",
    weight: 0.4,
    popular: true,
    what: "Payload CMS, proper SEO, analytics, and forms wired into your CRM.",
    features: [
      "5–7 pages, custom design",
      "Payload CMS — you own the content model",
      "SEO structure + GA4",
      "Forms into a Notion or HubSpot CRM",
      "Monthly performance report",
    ],
    cta: "Start with Launch",
  },
  {
    id: "studio",
    name: "Corpsite Studio",
    short: "Studio",
    oneTime: "from RM 28,000",
    monthly: "RM 1,200",
    pages: "10–15",
    bestFor: "Scaling SMEs, B2B service firms",
    weight: 0.6,
    what: "Custom motion, multi-language, advanced SEO, and a design system you can extend.",
    features: [
      "10–15 pages with a design system",
      "Custom motion and interaction design",
      "Multi-language (EN / BM / 中文)",
      "Advanced technical SEO",
      "Quarterly design review",
    ],
    cta: "Start with Studio",
  },
  {
    id: "stack",
    name: "Corpsite Stack",
    short: "Stack",
    oneTime: "from RM 60,000",
    monthly: "RM 3,500",
    pages: "15+",
    bestFor: "Mid-market, regional product cos",
    weight: 0.8,
    what: "Gated portals, dashboards, third-party integrations, CI/CD, and an engineering retainer.",
    features: [
      "15+ pages plus authenticated areas",
      "Customer portal or dashboard",
      "Third-party integrations",
      "CI/CD with staging environments",
      "Engineering retainer, not just edits",
    ],
    cta: "Talk about Stack",
  },
  {
    id: "suite",
    name: "Corpsite Suite",
    short: "Suite",
    oneTime: "from RM 120,000",
    monthly: "RM 8,000",
    pages: "Custom",
    bestFor: "Enterprise, regulated industries",
    weight: 1,
    what: "Multi-site, multi-region platforms with governance, audit trails, and SLAs on contract.",
    features: [
      "Multi-site / multi-region platform",
      "Governance and content workflows",
      "Audit trails and access control",
      "Named engineering team",
      "SLA on contract",
    ],
    cta: "Book a call",
  },
];

// ─── Plan selector: steps, options, and recommendation engine ──────────────

export interface SiteStepOption {
  label: string;
  /** Ranking weight; -1 flags the NGO short-circuit on the goal step. */
  w: number;
}

export interface SiteStep {
  id: "goal" | "pages" | "cms" | "features" | "budget";
  prompt: string;
  help: string;
  options: SiteStepOption[];
}

export const siteSteps: SiteStep[] = [
  {
    id: "goal",
    prompt: "What's the site's main job?",
    help: "Pick the one that matters most this year.",
    options: [
      { label: "Look credible — a simple online presence", w: 0 },
      { label: "Generate leads and enquiries", w: 1 },
      { label: "Publish content regularly", w: 2 },
      { label: "Power a product or service, with logins", w: 3 },
      { label: "We're a registered NGO", w: -1 },
    ],
  },
  {
    id: "pages",
    prompt: "Roughly how many pages?",
    help: "Count templates, not every blog post.",
    options: [
      { label: "1–3", w: 0 },
      { label: "4–7", w: 1 },
      { label: "8–15", w: 2 },
      { label: "More than 15", w: 3 },
    ],
  },
  {
    id: "cms",
    prompt: "Who edits the content after launch?",
    help: "Be honest — this drives half the build.",
    options: [
      { label: "Nobody, it rarely changes", w: 0 },
      { label: "One person, occasionally", w: 1 },
      { label: "A marketing team, weekly", w: 2 },
      { label: "Several teams with review workflows", w: 3 },
    ],
  },
  {
    id: "features",
    prompt: "Anything beyond pages and forms?",
    help: "The biggest thing you need.",
    options: [
      { label: "No, pages and a contact form", w: 0 },
      { label: "Multi-language", w: 1 },
      { label: "Customer logins or a portal", w: 2 },
      { label: "Integrations with our internal systems", w: 3 },
    ],
  },
  {
    id: "budget",
    prompt: "What's the budget you're working with?",
    help: "We'll show a budget-fit alternative if it differs.",
    options: [
      { label: "Under RM 5,000", w: 0 },
      { label: "RM 5,000 – 20,000", w: 1 },
      { label: "RM 20,000 – 60,000", w: 2 },
      { label: "RM 60,000+", w: 3 },
    ],
  },
];

/** Index of the "We're a registered NGO" option on the goal step. */
export const NGO_GOAL_INDEX = 4;

/** Fresh answer vector — one slot per step, all unanswered. */
export const emptySiteAnswers = (): (number | null)[] =>
  siteSteps.map(() => null);

export interface SiteNote {
  title: string;
  body: string;
}

export interface SiteRecommendation {
  tier: SiteTier;
  note: SiteNote | null;
}

/**
 * Ported verbatim from the prototype's siteVals():
 *  - NGO goal short-circuits to Spark with the programme note.
 *  - Otherwise the top weight across the first four answers picks the tier
 *    ([spark, launch, studio, stack][top]); the budget answer can then
 *    surface a cheaper "budget-fit alternative" ([spark, launch, studio,
 *    suite][budget]) when it undershoots the recommendation.
 */
export const recommendSiteTier = (
  answers: (number | null)[]
): SiteRecommendation => {
  const [spark, , launch, studio, stack, suite] = siteTiers;

  if (answers[0] === NGO_GOAL_INDEX) {
    return {
      tier: spark,
      note: {
        title: "NGO programme — the build is on us",
        body: "You qualify for a free Spark-tier site with the first year of hosting included. Tell us about the organisation and we'll take it from there.",
      },
    };
  }

  const picked: number[] = [];
  for (let i = 0; i < 4; i += 1) {
    const answer = answers[i];
    if (answer !== null && answer !== undefined) {
      picked.push(siteSteps[i].options[answer].w);
    }
  }
  const top = picked.length ? Math.max(...picked) : 1;
  const byGoal = [spark, launch, studio, stack];
  const tier = byGoal[top] ?? launch;

  let note: SiteNote | null = null;
  const budget = answers[4];
  if (budget !== null && budget !== undefined) {
    const cap = [spark, launch, studio, suite][budget];
    if (cap && cap.weight < tier.weight) {
      note = {
        title: `Budget-fit alternative: ${cap.name}`,
        body: `Your answers point at ${tier.name}, but the budget lands on ${cap.name}. The honest gap is scope — fewer templates, less custom motion, and integrations deferred to a later phase.`,
      };
    }
  }

  return { tier, note };
};

// ─── Add-ons ───────────────────────────────────────────────────────────────

export interface SiteAddon {
  name: string;
  /** One-time setup figure. */
  setup: string;
  /** Recurring line, or a qualifier like "one-time" / "per page". */
  monthly: string;
}

export const siteAddons: SiteAddon[] = [
  // Corpi retainer uses the live RM 300–800/mo, not the stale prototype figure.
  { name: "Corpi WhatsApp AI agent", setup: "from RM 1,500", monthly: "RM 300 – 800 /mo" },
  { name: "Custom illustrations / brand system", setup: "from RM 6,000", monthly: "one-time" },
  { name: "SEO retainer", setup: "—", monthly: "RM 2,500 – 6,000 /mo" },
  { name: "Core Web Vitals audit", setup: "RM 3,500", monthly: "one-time" },
  { name: "Analytics dashboard stack", setup: "RM 4,000", monthly: "RM 400 /mo" },
  { name: "Migration off WordPress / Wix", setup: "from RM 2,500", monthly: "one-time" },
  { name: "Copywriting, per page", setup: "RM 600", monthly: "per page" },
  { name: "Photography / video shoot day", setup: "from RM 4,500", monthly: "per day" },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────

export interface SiteFaq {
  question: string;
  answer: string;
}

export const siteFaqs: SiteFaq[] = [
  {
    question: "What does the monthly retainer actually cover?",
    answer:
      "Hosting, SSL, uptime monitoring, dependency and security updates, backups, and minor content or layout edits. It is not a maintenance fee for a site nobody touches — it's how the site stays current.",
  },
  {
    question: "Do we own the site?",
    answer:
      "Yes. The content, the design, and the deployed site are yours, and on CMS tiers you own the content model. We can hand over the repository at any point.",
  },
  {
    question: "Why Cloudflare rather than shared hosting?",
    answer:
      "Global edge delivery, free SSL, DDoS protection, and no server to patch. It's cheaper and faster than the cPanel hosting most Malaysian sites run on.",
  },
  {
    question: "Can you migrate our WordPress / Wix site?",
    answer:
      "Yes — migration is an add-on. We move content, preserve URLs, and set up redirects so you don't lose search rankings.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Spark ships in days. Launch runs three to five weeks. Studio six to ten. Stack and Suite are scoped in discovery like a software project, because that's what they are.",
  },
  {
    question: "Can we add Corpi to the site?",
    answer:
      "Yes. Corpi is the most common add-on — the WhatsApp agent picks up where the contact form leaves off.",
  },
];

// ─── Static section copy ───────────────────────────────────────────────────

export const hero = {
  eyebrow: "Corpsite · Websites",
  headlineLead: "Websites, built like",
  headlineGradient: "software.",
  lede: "Six tiers, from a one-page Spark to an enterprise Suite. Modern stack, Cloudflare-native infrastructure, and a transparent monthly retainer covering hosting, monitoring, and edits — so the site keeps working instead of ageing.",
  primaryCta: { label: "Find my plan", href: "#selector" },
  secondaryCta: { label: "See all six tiers", href: "#tiers" },
};

export const ladderCopy = {
  heading: "The ladder",
  scale: "one-time · monthly",
};

export const selectorCopy = {
  progressLabel: "Question",
  nextLabel: "Next",
  seePlanLabel: "See my plan",
  previousLabel: "Previous",
  resultEyebrow: "Your recommended plan",
  monthlySuffix: "/ month",
  backLabel: "Back",
  startOverLabel: "Start over",
};

export const tiersSection = {
  heading: "Six tiers, transparent from day one",
  note: "retainer covers hosting, monitoring, minor edits",
  head: ["Tier", "Build", "Retainer", "Pages", "What you get"] as const,
  finePrint:
    "All prices exclude 6% SST. Domains, premium licenses, and stock media are passed through at cost.",
};

export const addonsSection = {
  heading: "Extend any tier",
  lede: "Bolt-ons priced the same way as the tiers — one setup figure, one clear monthly.",
};

export const ngoBand = {
  badge: "NGO Programme",
  heading: "Registered NGOs pay nothing for the build",
  lede: "A Spark-tier site, designed and built at no charge, with hosting on us for the first year. We take two a quarter — send us what you do and who it's for.",
  cta: { label: "Apply for the programme", href: "/contact" },
};

export const faqSection = {
  heading: "Common questions",
};

// ─── Cross-pillar strip ────────────────────────────────────────────────────

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
    blurb: "AI WhatsApp sales agents that reply in seconds.",
    href: "/corpi",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    blurb: "Custom software builds, from internal tools to full ERPs.",
    href: "/corpcode",
  },
  {
    id: "corprise",
    name: "Corprise",
    blurb: "Subscription-priced Odoo ERP. MyInvois-ready.",
    href: "/corprise",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    blurb: "Websites — design, build, ongoing care.",
    href: "/corpsite",
    isCurrent: true,
  },
];
