export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  stat?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  mirrorsProblemId: string;
}

export interface ProcessStepItem {
  step: number;
  label: string;
  title: string;
  description: string;
  duration: string;
}

export const problems: ProblemItem[] = [
  {
    id: "cost",
    stat: "RM 80k+",
    title: "Implementation costs that break the bank",
    description:
      "Traditional Odoo Gold partners charge RM 80,000 to RM 300,000 upfront before you see a single login screen. That's a year of working capital gone before the ERP earns a ringgit back.",
  },
  {
    id: "timeline",
    stat: "6–12 months",
    title: "Timelines that outlast quarters",
    description:
      "Most implementations drag six to twelve months, with scope creep, missed deadlines, and consultants who disappear between sprints. By the time you go live, the business has already changed.",
  },
  {
    id: "lockin",
    stat: "5-year contracts",
    title: "Lock-in that outlasts relationships",
    description:
      "Multi-year contracts tie you to one partner, one support queue, and one pricing model — whether the work delivers value or not. You can't switch without losing everything.",
  },
];

export const solutions: SolutionItem[] = [
  {
    id: "subscription",
    mirrorsProblemId: "cost",
    title: "One subscription. Predictable from day one.",
    description:
      "Corprise replaces the upfront invoice with a monthly subscription from RM 1,000. Implementation, hosting, MyInvois compliance, training, and ongoing refinements — all included in the tier you choose.",
  },
  {
    id: "fast",
    mirrorsProblemId: "timeline",
    title: "Live in weeks, not quarters.",
    description:
      "Our scorecard maps you to a tier, our pre-built Malaysian SME playbooks cut discovery in half, and your first modules go live in 4 to 8 weeks. Every tier ships — bespoke only when the business genuinely demands it.",
  },
  {
    id: "flexible",
    mirrorsProblemId: "lockin",
    title: "Month-to-month. Yours to own.",
    description:
      "After a three-month minimum, you're month-to-month. Your data stays on your Odoo instance — we hand it over clean if you ever leave. No hostage customisations, no exit fees.",
  },
];

export const processSteps: ProcessStepItem[] = [
  {
    step: 1,
    label: "Step 01",
    title: "Score",
    duration: "10 minutes",
    description:
      "Answer seven questions about your business, team, and modules you need. The scorecard maps you to the tier and modules that fit — no sales call required.",
  },
  {
    step: 2,
    label: "Step 02",
    title: "Discovery",
    duration: "Week 1",
    description:
      "A 90-minute discovery workshop with your team. We confirm scope, map your existing workflows to Odoo, and agree on go-live milestones in writing.",
  },
  {
    step: 3,
    label: "Step 03",
    title: "Implement",
    duration: "Weeks 2–7",
    description:
      "We configure your modules, migrate your data, connect MyInvois, and train your team. You see weekly progress in a shared dashboard, not a 40-page status report.",
  },
  {
    step: 4,
    label: "Step 04",
    title: "Go-live & Refine",
    duration: "Week 8+",
    description:
      "Go-live day with a Corplabs engineer on site or on call. After launch, your subscription covers continuous refinement — new reports, new workflows, new modules as you grow.",
  },
];

// ─── Hero ───────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "A Corplabs Product · Built on Odoo · MyInvois-ready",
  headline: {
    line1: "ERP for Malaysian SMEs.",
    line2: "One monthly subscription. No upfront shock.",
  },
  subheadline:
    "Corprise replaces RM 80,000+ Odoo implementations with a predictable monthly subscription — from RM 1,000. Go live in weeks, stay flexible month-to-month, get MyInvois and AI automation included.",
  primaryCta: { label: "Find My Tier in 10 Minutes", href: "#scorecard" },
  secondaryCta: { label: "See Pricing", href: "#pricing" },
  reassurance:
    "Trusted by Malaysian founders. 3-month minimum, then month-to-month. Your data stays yours.",
};

// ─── Trust bar ──────────────────────────────────────────────────────────────

export interface TrustItem {
  label: string;
  sublabel: string;
}

export const trustItems: TrustItem[] = [
  { label: "Built on Odoo", sublabel: "Community edition, self-hosted" },
  { label: "MyInvois-ready", sublabel: "LHDN e-Invoice integration" },
  { label: "LHDN-compliant", sublabel: "e-Invoicing mandate covered" },
  { label: "Malaysian-owned", sublabel: "Corplabs Sdn Bhd · D-U-N-S certified" },
  { label: "Corpi AI included", sublabel: "Powered by Claude · every tier" },
];

// ─── Section headings ───────────────────────────────────────────────────────

export const sectionHeadings = {
  problem: {
    eyebrow: "The Problem",
    title: "ERP shouldn't cost a year of working capital.",
    lede: "Malaysian SMEs need the same ERP enterprises use, without the enterprise invoice. Here's what today's options actually cost you.",
  },
  solution: {
    eyebrow: "The Solution",
    title: "Subscription-priced ERP, built for how Malaysian SMEs actually work.",
    lede: "Every problem above has an answer baked into how Corprise is priced, delivered, and supported.",
  },
  process: {
    eyebrow: "How it works",
    title: "From scorecard to go-live in 4–8 weeks.",
    lede: "A playbook, not a proposal. Every Corprise engagement follows the same four steps — because Malaysian SMEs deserve predictable, not custom-quoted.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Five tiers. One monthly invoice.",
    lede: "Every tier includes managed Odoo hosting, MyInvois, training, and monthly refinement hours. Not sure which fits? Use the scorecard below.",
  },
  matrix: {
    eyebrow: "What's included",
    title: "The full feature matrix.",
    lede: "Every tier, every module, every SLA — in one table. No hidden gotchas.",
  },
  compare: {
    eyebrow: "How we compare",
    title: "Corprise vs. the usual options.",
    lede: "A straight comparison of what you actually get for the money — not a marketing chart.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    lede: "Still have one we haven't covered? Email contact@corplabs.co — we usually reply within a business day.",
  },
};

// ─── MyInvois ───────────────────────────────────────────────────────────────

export const myInvois = {
  eyebrow: "MyInvois · LHDN-ready",
  title: "e-Invoicing compliance, included in every tier.",
  body: "Malaysia's e-Invoice mandate is expanding through 2026. Corprise hooks directly into MyInvois so your invoices are submitted, validated, and archived — automatically — the moment you hit send in Odoo.",
  checklist: [
    "LHDN taxpayer registration & TIN validation",
    "Supplier and customer onboarding flows",
    "Invoice submission, validation & unique identifier storage",
    "Consolidated e-invoice support for B2C businesses",
    "Credit notes, debit notes, and refunds",
    "Seven-year archival and audit-ready exports",
  ],
  trademarkNote:
    "MyInvois and LHDN are trademarks of Lembaga Hasil Dalam Negeri Malaysia.",
};

// ─── AI integration ─────────────────────────────────────────────────────────

export const aiIntegration = {
  eyebrow: "AI · Corpi + Claude",
  title: "Your ERP, with a Claude-powered teammate built in.",
  lede: "Every Corprise subscription includes Corpi — our Claude-powered assistant wired directly into your Odoo instance. It's how a five-person SME runs operations like a fifty-person team.",
  benefits: [
    {
      title: "WhatsApp leads into Odoo, automatically",
      description:
        "Corpi listens on WhatsApp, qualifies leads, and writes them straight into your Odoo CRM with notes, contacts, and next actions ready for your team.",
    },
    {
      title: "Draft invoices from a sentence",
      description:
        "Tell Corpi “bill Ahmad RM 1,200 for the June retainer” and a MyInvois-ready draft lands in Odoo, waiting for your approval.",
    },
    {
      title: "Ask your ERP anything",
      description:
        "“How much stock of SKU-443 is in the Penang warehouse?” Corpi reads your Odoo data live and answers in plain English, BM, or Mandarin.",
    },
    {
      title: "Ops that keep improving",
      description:
        "Claude powers weekly summaries, anomaly alerts, and workflow suggestions — every tier gets smarter the longer you stay.",
    },
  ],
};

// ─── Founding Five ──────────────────────────────────────────────────────────

export const foundingFive = {
  eyebrow: "Founding Five · Early access",
  title: "Be one of our first five Corprise clients.",
  lede: "We're onboarding our first cohort of Malaysian SMEs. In exchange for partnering with us on the early roadmap, you lock in founding-member perks that never come back.",
  perks: [
    "25% off your first 12 months",
    "Founder-line WhatsApp access to the Corplabs team",
    "Roadmap input — quarterly priority call",
    "Free tier upgrade for 3 months as your business grows",
    "Case study co-authorship (opt-in)",
  ],
  cta: { label: "Apply to the Founding Five", href: "/contact?program=founding-five" },
  note: "Limited to five companies. Applications reviewed weekly.",
};

// ─── Final CTA ──────────────────────────────────────────────────────────────

export const finalCta = {
  title: "Skip the RM 80,000 invoice. Start with your first month.",
  body: "Take the scorecard, book a discovery call, or email us directly. Your first Corprise month starts whenever you're ready — and the Founding Five perks close when we hit five.",
  primaryCta: { label: "Take the Scorecard", href: "#scorecard" },
  secondaryCta: { label: "Book a Discovery Call", href: "/contact?product=corprise" },
  contactLine: "corplabs.co · contact@corplabs.co · 016-672 7208",
};

// ─── Scorecard ──────────────────────────────────────────────────────────────

export const scorecardIntro = {
  eyebrow: "Tier scorecard",
  title: "Find your tier in 10 minutes.",
  lede: "Seven questions about your team, revenue, and operations. We map your answers to the Corprise tier that fits — no email required.",
};
