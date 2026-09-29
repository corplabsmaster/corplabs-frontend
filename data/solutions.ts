/**
 * /solutions — umbrella page copy, from the Claude Design "Corplabs Site"
 * handoff: hero + price floors, the problem router, the side-by-side ledger,
 * the "one team" strip and the closing CTA.
 *
 * Corpi pricing follows the live site (data/corpi.ts): from RM 1,500 setup
 * plus RM 300 / 500 / 800 per month.
 */

export type PillarId = "corpi" | "corpcode" | "corprise" | "corpsite";

// ─── Hero ───────────────────────────────────────────────────────────────────

export const solutionsHero = {
  eyebrow: "Solutions · The Corplabs Lineup",
  /** Rendered as `${titleLead} <span class="gradient-text">${titleGradient}</span>`. */
  titleLead: "Four pillars,",
  titleGradient: "one playbook.",
  lede: "Pick the surface that solves your problem. Every pillar is built, deployed, and supported by the same Corplabs team — so you never get handed off between vendors.",
};

export interface PriceFloor {
  id: PillarId;
  name: string;
  floor: string;
  href: string;
}

export const priceFloorsPanel = {
  title: "Price floors",
  note: "public · no sales call",
};

export const priceFloors: PriceFloor[] = [
  { id: "corpi", name: "Corpi", floor: "RM 300 / mo", href: "/corpi" },
  { id: "corpcode", name: "Corpcode", floor: "from RM 30,000", href: "/corpcode" },
  { id: "corprise", name: "Corprise", floor: "from RM 1,000 / mo", href: "/corprise" },
  { id: "corpsite", name: "Corpsite", floor: "from RM 2,000", href: "/corpsite" },
];

// ─── Problem router ─────────────────────────────────────────────────────────

export const routerIntro = {
  title: "Tell us the problem. We'll point at the pillar.",
  lede: "One question. No form, no email gate.",
  /** Legend for the list of problem statements (visually hidden). */
  optionsLabel: "What are you trying to fix?",
  resultEyebrow: "Start here",
};

export interface RouterPick {
  id: string;
  /** Two-digit ordinal shown before the problem statement. */
  n: string;
  label: string;
  name: string;
  floor: string;
  why: string;
  href: string;
  cta: string;
}

export const routerPicks: RouterPick[] = [
  {
    id: "slow-replies",
    n: "01",
    label: "Enquiries come in and nobody replies fast enough",
    name: "Corpi",
    floor: "RM 1,500 setup + RM 300/mo",
    why: "An AI agent on your WhatsApp number answers in seconds, qualifies the lead, and files it in your CRM with a summary.",
    href: "/corpi",
    cta: "Explore Corpi",
  },
  {
    id: "spreadsheets",
    n: "02",
    label: "The business runs on spreadsheets and WhatsApp threads",
    name: "Corprise",
    floor: "from RM 1,000 / month",
    why: "Odoo ERP on a flat monthly subscription — real accounting, inventory and MyInvois without an RM 80,000 implementation project.",
    href: "/corprise",
    cta: "Explore Corprise",
  },
  {
    id: "no-fit",
    n: "03",
    label: "Off-the-shelf software can't model how we actually work",
    name: "Corpcode",
    floor: "from RM 30,000 · discovery RM 5,000",
    why: "A bespoke build scoped in paid discovery: written SOW, architecture diagram, fixed quote, milestone-phased delivery.",
    href: "/corpcode",
    cta: "Explore Corpcode",
  },
  {
    id: "dated-site",
    n: "04",
    label: "Our website is dated and doesn't bring in work",
    name: "Corpsite",
    floor: "from RM 2,000 + RM 100/mo",
    why: "Six tiers from a starter site to an enterprise platform — modern stack, Cloudflare-native, retainer covers hosting and edits.",
    href: "/corpsite",
    cta: "Explore Corpsite",
  },
  {
    id: "unsure",
    n: "05",
    label: "Honestly, we're not sure yet",
    name: "Discovery call",
    floor: "free · 30 minutes",
    why: "Bring the workflow, not the spec. We'll tell you which pillar fits — and say so plainly if none of them do.",
    href: "/contact",
    cta: "Book the call",
  },
];

// ─── Side-by-side ledger ────────────────────────────────────────────────────

export const pillarLedgerHeading = {
  title: "Side by Side",
  note: "Every pillar, every number",
};

export const pillarLedgerHead = [
  "Pillar",
  "What it is",
  "Price floor",
  "Time to value",
  "Best when",
] as const;

export interface PillarLedgerRow {
  id: PillarId;
  name: string;
  tagline: string;
  href: string;
  what: string;
  /** Contains a newline — render with `whitespace-pre-line`. */
  floor: string;
  time: string;
  bestWhen: string;
  cta: string;
}

export const pillarLedger: PillarLedgerRow[] = [
  {
    id: "corpi",
    name: "Corpi",
    tagline: "AI WhatsApp sales agent",
    href: "/corpi",
    what: "A Claude-powered agent on your own WhatsApp number that replies, quotes, qualifies, and hands hot leads to your team with full context.",
    floor: "RM 1,500 setup\nRM 300–800 / mo",
    time: "Under 2 weeks",
    bestWhen: "You already get enquiries — you just lose them to slow replies.",
    cta: "Explore Corpi",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    tagline: "Custom software builds",
    href: "/corpcode",
    what: "Internal tools through to ERP-class platforms. Paid discovery, fixed quote, demos every two weeks, we maintain what we build.",
    floor: "from RM 30,000\ndiscovery RM 5,000",
    time: "6 weeks – 18 months",
    bestWhen: "Your process is the advantage and no product on the market fits it.",
    cta: "Explore Corpcode",
  },
  {
    id: "corprise",
    name: "Corprise",
    tagline: "Subscription-priced ERP",
    href: "/corprise",
    what: "Odoo ERP as a flat monthly subscription — implementation, hosting in Malaysia, MyInvois compliance and refinements included.",
    floor: "RM 1,000 – 5,000 / mo",
    time: "4 – 8 weeks",
    bestWhen: "You need real ERP now and can't sink RM 80,000 into a project.",
    cta: "Explore Corprise",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    tagline: "Websites, built like software",
    href: "/corpsite",
    what: "Six tiers from a one-page Spark to an enterprise Suite. Next.js, Payload CMS, Cloudflare — every plan on a transparent retainer.",
    floor: "from RM 2,000\n+ RM 100 / mo",
    time: "Days to weeks",
    bestWhen: "The website is the storefront, and it needs to be maintained, not rebuilt yearly.",
    cta: "Explore Corpsite",
  },
];

export const pillarLedgerFinePrint =
  "All figures exclude 8% SST and pass-through costs. Build quotes are fixed after paid discovery.";

/** Shown above the ledger on small screens, where it scrolls sideways. */
export const pillarLedgerScrollHint = "Scroll sideways to compare all five columns.";

// ─── One team ───────────────────────────────────────────────────────────────

export interface OneTeamItem {
  n: string;
  name: string;
  blurb: string;
}

export const oneTeam: OneTeamItem[] = [
  {
    n: "01",
    name: "One team, no handoffs",
    blurb: "The people who scope your work are the people who build it and the people who answer the phone after launch. No account-manager relay.",
  },
  {
    n: "02",
    name: "Public price floors",
    blurb: "Every pillar publishes where it starts. You can size the engagement before you talk to us — and hold us to it afterwards.",
  },
  {
    n: "03",
    name: "Built for Southeast Asia",
    blurb: "Malaysian-led, same time zone, English / Bahasa / Mandarin. FPX, DuitNow, MyInvois and SST handled as defaults, not add-ons.",
  },
];

// ─── Closing CTA ────────────────────────────────────────────────────────────

export const solutionsCta = {
  title: "Still not sure which fits?",
  lede: "Share the workflow you're trying to fix. We come back with a written scope, a fixed quote, and the architecture diagram — yours to keep whether we build it or not.",
  primaryCta: { label: "Book a discovery call", href: "/contact" },
  secondaryCta: { label: "Email us", href: "mailto:contact@corplabs.co" },
};
