/**
 * Corprise page copy — from the Claude Design "Corplabs Site" handoff (Corprise
 * screen). All user-facing strings for the page live here; scoring weights live
 * in lib/corpriseScore.ts and tier data in data/corprise-tiers.ts.
 */
import type { PillarStripItem } from "@/components/pillar-strip";

// ─── Hero ───────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Corprise · Subscription-Priced Odoo ERP",
  headline: {
    plain: "Real ERP, ",
    gradient: "without the RM 80,000 project.",
  },
  lede: "Odoo on a flat monthly subscription — implementation, hosting in Malaysia, MyInvois compliance, and ongoing refinements included. Live in four to eight weeks, not four quarters.",
  primaryCta: { label: "See the six tiers", href: "#pricing" },
  secondaryCta: { label: "Find my tier", href: "#scorecard" },
  noLockIn: "No lock-in beyond the first three months. Your data is exportable, always.",
};

// ─── Hero comparison cards ──────────────────────────────────────────────────

export interface ComparisonCard {
  label: string;
  price: string;
  priceSuffix: string;
  body: string;
  bullets: string[];
}

export const usualRoute: ComparisonCard = {
  label: "The usual Odoo route",
  price: "RM 80,000",
  priceSuffix: "up front",
  body: "A one-off implementation project, quoted per module, billed per user, delivered in six to twelve months — then a change request for every adjustment after go-live.",
  bullets: [
    "Quoted per module, billed per user, forever",
    "Six to twelve months before anyone logs in",
    "MyInvois scoped as a separate phase",
    "Every post-launch tweak is a change request",
  ],
};

export const corpriseRoute: ComparisonCard = {
  label: "Corprise",
  price: "RM 1,000",
  priceSuffix: "/ month",
  body: "One subscription that includes the implementation, the hosting, the compliance work, and the refinements. Change tiers as the business changes. Cancel with notice.",
  bullets: [
    "Implementation and hosting inside the monthly",
    "Live in four to eight weeks",
    "MyInvois configured before go-live",
    "Refinements included, not quoted",
  ],
};

// ─── Trust strip ────────────────────────────────────────────────────────────

export interface TrustItem {
  label: string;
  sub: string;
}

export const trustItems: TrustItem[] = [
  { label: "Odoo, not a clone", sub: "Standard modules — no proprietary lock-in" },
  { label: "Hosted in Malaysia", sub: "Daily backups, infrastructure we manage" },
  { label: "MyInvois compliant", sub: "Configured and validated before go-live" },
  { label: "One team after launch", sub: "The implementers answer the support line" },
];

// ─── Scorecard (3-question quick finder) ────────────────────────────────────

export const scorecard = {
  title: "Which tier fits? Three questions.",
  sub: "Same scoring we use on a discovery call.",
  resultLabel: "Your tier",
};

export interface ShortScorecardQuestion {
  prompt: string;
  options: string[];
}

/** Order and option counts must stay aligned with SHORT_SCORECARD_WEIGHTS. */
export const shortScorecardQuestions: ShortScorecardQuestion[] = [
  { prompt: "How big is the team?", options: ["1–3", "4–10", "11–25", "26–50", "50+"] },
  {
    prompt: "What do you need to run?",
    options: ["Invoicing", "Accounting", "Sales + inventory", "HR + projects", "Manufacturing"],
  },
  { prompt: "MyInvois e-Invoice?", options: ["Need it now", "Soon", "Not sure"] },
];

// ─── Pricing table ──────────────────────────────────────────────────────────

export const pricing = {
  title: "Six tiers, one monthly number",
  note: "no per-user pricing · excl. 8% SST",
  tableHead: ["Tier", "Monthly", "Modules included", "Users", "Support"],
};

// ─── MyInvois ───────────────────────────────────────────────────────────────

export const myInvois = {
  eyebrow: "Compliance",
  title: "MyInvois-ready on day one",
  body: "e-Invoicing isn't an add-on module you buy later. It's configured, validated, and submitting before you go live.",
  trademarkNote:
    "MyInvois and LHDN are trademarks of the Government of Malaysia. Corplabs is an independent implementer, not an affiliate.",
  items: [
    "LHDN MyInvois submission from Odoo",
    "Validated TIN and buyer details",
    "Consolidated e-Invoices for retail",
    "Credit and debit note handling",
    "Self-billed invoices for imports",
    "Audit trail retained per LHDN rules",
  ],
};

// ─── Implementation process ─────────────────────────────────────────────────

export interface ProcessStep {
  n: string;
  duration: string;
  title: string;
  description: string;
}

export const processFlow = {
  title: "Live in four to eight weeks",
  steps: [
    {
      n: "1",
      duration: "Week 1",
      title: "Discovery workshop",
      description:
        "We sit with your team, map the current process, and agree the module list and the go-live date.",
    },
    {
      n: "2",
      duration: "Week 2–4",
      title: "Configure & migrate",
      description:
        "Chart of accounts, products, contacts, opening balances, MyInvois setup. Your data, in the system.",
    },
    {
      n: "3",
      duration: "Week 4–6",
      title: "Train & parallel run",
      description:
        "Your team runs a month of real transactions alongside the old process until they trust it.",
    },
    {
      n: "4",
      duration: "Week 6–8",
      title: "Go live & refine",
      description:
        "Old process off. We stay on the refinements — that's what the subscription covers.",
    },
  ] satisfies ProcessStep[],
};

// ─── Founding Five ──────────────────────────────────────────────────────────

export const foundingFive = {
  badge: "Founding Five",
  title: "Five foundation clients, better terms",
  lede: "We're taking on five Malaysian SMEs as foundation clients for Corprise. You get more of our attention than the price suggests; we get a case study we can name.",
  perks: [
    "Founding rate held for 24 months",
    "Discovery workshop at no charge",
    "Direct line to the implementing engineer",
    "First refusal on new modules as we build them",
  ],
  cta: { label: "Apply as a founding client", href: "/contact" },
  note: "3 of 5 places open",
};

// ─── FAQ heading ────────────────────────────────────────────────────────────

export const faqHeading = { title: "Common questions" };

// ─── Cross-pillar strip ─────────────────────────────────────────────────────

export const pillarStripItems: PillarStripItem[] = [
  { id: "corpi", name: "Corpi", blurb: "AI WhatsApp sales agents that reply in seconds.", href: "/corpi" },
  {
    id: "corpcode",
    name: "Corpcode",
    blurb: "Custom software builds, from internal tools to full ERPs.",
    href: "/corpcode",
  },
  {
    id: "corprise",
    name: "Corprise",
    blurb: "Subscription-priced Odoo ERP.",
    href: "/corprise",
    isCurrent: true,
  },
  { id: "corpsite", name: "Corpsite", blurb: "Websites — design, build, and ongoing care.", href: "/corpsite" },
];
