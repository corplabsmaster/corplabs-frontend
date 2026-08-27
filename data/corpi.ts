/** /corpi — Corpi Intelligence (AI WhatsApp sales agent). All page copy. */

import type { PillarStripItem } from "@/components/pillar-strip";

// ─── Corpi demo chat (single source of truth; also used by the home tabs) ────

export interface ChatMessage {
  from: "cust" | "corpi" | "system";
  text: string;
}

export interface CorpiChat {
  shopName: string;
  status: string;
  script: ChatMessage[];
}

export const corpiChat: CorpiChat = {
  shopName: "Amber Table Catering",
  status: "Corpi · online",
  script: [
    {
      from: "cust",
      text: "Hi, do you do corporate lunches? I need 80 sets for next Thursday at our office in Bangsar.",
    },
    {
      from: "corpi",
      text: "We do — Thursday the 4th is still open. For 80 sets the corporate menu is RM 18/set, so RM 1,440 including delivery and setup in Bangsar. Shall I hold the date?",
    },
    { from: "cust", text: "What if it goes up to 150?" },
    {
      from: "corpi",
      text: "150 crosses into the bulk tier — RM 15.50/set, so RM 2,325, and two servers are included at that size. Want me to draft the quote?",
    },
    { from: "cust", text: "Yes please, send it over" },
    {
      from: "corpi",
      text: "Done — quote #Q-1042 is in this chat. It holds Thursday the 4th for 48 hours. Anything you'd like swapped on the menu?",
    },
    { from: "system", text: "→ lead qualified · handed to Sarah (Sales) with full context" },
  ],
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "A Corplabs Product · Powered by Claude",
  headline: { plain: "Your business, ", gradient: "always on." },
  lede: "A customer messages at 11pm. Nobody's there. They move on — and that sale is gone. Corpi answers on your own WhatsApp number in seconds, in the language they wrote in, and files the lead before you wake up.",
  primaryCta: {
    label: "Start a 7-day free trial",
    href: "https://corpi.corplabs.co/signup",
  },
  secondaryCta: { label: "Book a discovery call", href: "/contact" },
  stats: [
    { stat: "11pm", label: "When most Malaysian leads actually message" },
    { stat: "24/7", label: "Corpi replies, every day of the year" },
    { stat: "< 2 wks", label: "From discovery call to live agent" },
  ],
  chatCaption: "How a Corpi thread runs end to end — availability, tier pricing, quote, handoff.",
  microsite: {
    label: "Visit the Corpi microsite",
    href: "https://corpi.corplabs.co",
  },
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface CorpiFeature {
  n: string;
  title: string;
  desc: string;
}

export const featuresHeading = "What Corpi Does";
export const featuresHint = "Managed end to end by Corplabs";

export const features: CorpiFeature[] = [
  {
    n: "01",
    title: "Talks like a consultant",
    desc: "Replies naturally in English, BM, Mandarin, or Manglish — in your brand's tone, not a chatbot's.",
  },
  {
    n: "02",
    title: "Qualifies without forms",
    desc: "Through conversation it uncovers the need, the budget, and the location. No form fields, no drop-off.",
  },
  {
    n: "03",
    title: "Files every lead",
    desc: "Qualified leads land in your Notion CRM with name, phone, objectives, budget, and a conversation summary.",
  },
  {
    n: "04",
    title: "Knows your products",
    desc: "Edit one Notion page to change what the agent knows. Live in 30 minutes, no deployment.",
  },
  {
    n: "05",
    title: "Live dashboard",
    desc: "Bot status, lead table, stage updates, and a restart button — on your own domain.",
  },
  {
    n: "06",
    title: "Hands off to humans",
    desc: "When a customer wants a real person, Corpi escalates gracefully with the full thread attached.",
  },
];

// ─── Onboarding ──────────────────────────────────────────────────────────────

export interface OnboardingStep {
  n: string;
  day: string;
  title: string;
  desc: string;
}

export const onboarding = {
  title: "Live in Under Two Weeks",
  lede: "You don't touch any code. You scan one QR code at the end.",
  steps: [
    {
      n: "1",
      day: "Day 1",
      title: "Discovery call",
      desc: "We learn the business, the customers, the goals. You name the bot and list the products and languages.",
    },
    {
      n: "2",
      day: "Day 2–7",
      title: "We build it",
      desc: "Server, persona, Notion CRM, and branded dashboard. You touch no code.",
    },
    {
      n: "3",
      day: "Day 7–10",
      title: "Review & refine",
      desc: "You test your own bot as a customer. We tune tone and answers until they're right.",
    },
    {
      n: "4",
      day: "Day 10–14",
      title: "Go live",
      desc: "Scan one QR code. The agent is live, and we monitor the first 48 hours with you.",
    },
    {
      n: "5",
      day: "Day 14+",
      title: "Handoff",
      desc: "We walk you through the dashboard and Notion workspace. From here it runs itself.",
    },
  ] satisfies OnboardingStep[],
};

// ─── Pricing (RM 1,500 setup + RM 300/500/800 monthly — repo is source of truth) ──

export interface CorpiPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  recommended: boolean;
}

export const pricing = {
  title: "Simple, Transparent Pricing",
  lede: "One setup fee, one monthly retainer. No Meta Business API subscription, no per-message billing.",
  setupCard: {
    title: "One-time setup — from RM 1,500",
    body: "Discovery, bot configuration, Notion CRM, VPS provisioning, domain linking, and go-live support. Final price depends on scope.",
  },
  finePrint:
    "Monthly includes VPS hosting, dashboard, Notion CRM, and Corplabs support. Claude API usage above tier limits is billed at cost + 20%. Minimum three-month commitment, month-to-month after that.",
  plans: [
    {
      name: "Starter",
      price: "RM 300",
      period: "/month",
      desc: "Up to 500 conversations a month. Right for a single shop or one sales line.",
      recommended: false,
    },
    {
      name: "Growth",
      price: "RM 500",
      period: "/month",
      desc: "Up to 2,000 conversations a month. The usual choice for an active SME.",
      recommended: true,
    },
    {
      name: "Scale",
      price: "RM 800",
      period: "/month",
      desc: "Unlimited conversations, for multi-branch and campaign-driven volume.",
      recommended: false,
    },
  ] satisfies CorpiPlan[],
  ctaLabel: "Get started",
  ctaHref: "/contact",
  trial: {
    lead: "Every plan starts with a 7-day free trial.",
    body: "Try Corpi on your own number before committing to setup — no card, cancel any time.",
    cta: { label: "Start the free trial", href: "https://corpi.corplabs.co/signup" },
  },
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqHeading = "Questions people actually ask";
export const faqLede =
  "Anything not covered here, ask us on WhatsApp — you'll be talking to a human.";

export const faqs = [
  {
    question: "Does this work with my existing WhatsApp number?",
    answer:
      "Yes. Corpi links directly to your WhatsApp Business number — you scan a QR code, much like WhatsApp Web on a laptop.",
  },
  {
    question: "Do I need the Meta WhatsApp Business API?",
    answer:
      "No. Corpi uses a direct connection that doesn't require a Meta Business API subscription, so you skip the monthly fee and the approval process.",
  },
  {
    question: "What if the bot doesn't know the answer?",
    answer:
      "Corpi acknowledges the gap and offers to connect the customer with your team. It will never invent an answer.",
  },
  {
    question: "Can I update what the bot knows myself?",
    answer:
      "Yes. Your knowledge base is a Notion page. Edit it and the bot picks up changes within 30 minutes — no code, no restart, no developer.",
  },
  {
    question: "Is my customer data safe?",
    answer:
      "Each client gets a dedicated server. Leads and conversations live only in your own Notion workspace and your private server. We don't store or share your customer data.",
  },
  {
    question: "What if customers write in mixed languages?",
    answer:
      "Corpi detects the language in use and replies in kind — including Manglish and mixed BM-English, which is most of Malaysian WhatsApp.",
  },
];

// ─── Live WhatsApp demo ──────────────────────────────────────────────────────

export interface DemoStarter {
  /** Short, low-cardinality id — this is the GA4 dimension value. */
  id: string;
  /** What the button says. */
  label: string;
  /** Prefilled first message. */
  text: string;
}

/**
 * The number below is Corplabs' own WhatsApp line, and Corpi is what answers
 * it. That is the demo: rather than watch a scripted replay, a visitor messages
 * the same agent we sell and sees it reply.
 *
 * The starters are deliberately in three languages. The page claims Corpi
 * answers in whatever language it is written to; a visitor who taps the Bahasa
 * one is testing that claim rather than taking our word for it.
 */
export const liveDemo = {
  /** International format, digits only — what wa.me expects. */
  number: "60166727208",
  numberDisplay: "+60 16-672 7208",
  eyebrow: "Try it for real",
  title: "This number is answered by Corpi",
  body:
    "Not a recording and not a form — our own WhatsApp line, running the same agent we build for clients. Ask it anything. It hands you to a human the moment you ask for one.",
  starters: [
    {
      id: "en_pricing",
      label: "English",
      text: "Hi Corpi — I found you on corplabs.co. What would an agent like you cost for my business?",
    },
    {
      id: "ms_explain",
      label: "Bahasa Malaysia",
      text: "Hai Corpi, saya jumpa anda di corplabs.co. Boleh terangkan Corpi ni untuk kedai saya?",
    },
    {
      id: "zh_explain",
      label: "中文",
      text: "你好 Corpi，我在 corplabs.co 看到你。可以介绍一下 Corpi 吗？",
    },
  ] as DemoStarter[],
  /** Shown under the buttons. */
  note: "Opens WhatsApp with the message ready — send it and watch the reply come back in the language you wrote in.",
};

// ─── Closing CTA ─────────────────────────────────────────────────────────────

export const finalCta = {
  title: "Ready to stop losing 11pm leads?",
  body: "Book a discovery call and we'll have your agent live in under two weeks.",
  /** Rendered by WhatsAppDemo so the click is tracked like the hero one. */
  primaryCta: { label: "Message Corpi", starterId: "en_pricing" },
  secondaryCta: { label: "Email us", href: "mailto:contact@corplabs.co" },
  micrositeNote: {
    pre: "Prefer the full product experience? ",
    label: "corpi.corplabs.co",
    href: "https://corpi.corplabs.co",
  },
};

// ─── Cross-pillar strip ──────────────────────────────────────────────────────

export const pillars: PillarStripItem[] = [
  {
    id: "corpi",
    name: "Corpi",
    href: "/corpi",
    blurb: "AI WhatsApp sales agents that capture and qualify leads 24/7.",
    isCurrent: true,
  },
  {
    id: "corpcode",
    name: "Corpcode",
    href: "/corpcode",
    blurb: "Custom software builds — from internal tools to full ERPs.",
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
