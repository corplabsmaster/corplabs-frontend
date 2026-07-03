/** /corpi — Corpi Intelligence (AI WhatsApp sales agent). All page copy. */

export const hero = {
  eyebrow: "A Corplabs Product · Powered by Claude AI",
  headline: "Your Business, Always On.",
  subheadline:
    "Corpi Intelligence — AI WhatsApp sales agent, built and managed by Corplabs.",
  primaryCta: { label: "Get Started", href: "/contact" },
  secondaryCta: { label: "See Pricing", href: "#pricing" },
};

export const problem = {
  title: "The Problem We Solve",
  paragraphs: [
    "Most businesses in Malaysia lose leads simply because no one replies fast enough. A customer messages at 11pm. Nobody's there. They move on. That sale is gone.",
    "Corpi Intelligence fixes that. The moment someone messages your WhatsApp, they get an intelligent, helpful, human-like response — instantly. Your team wakes up to a CRM full of qualified leads with names, needs, budgets, and contact details already captured.",
  ],
  stats: [
    { stat: "11pm", label: "When most leads message after hours" },
    { stat: "24/7", label: "Corpi is always available" },
    { stat: "< 2 weeks", label: "From sign-up to live bot" },
  ],
};

export interface CorpiFeature {
  title: string;
  description: string;
}

export const featuresHeading = "What Corpi Intelligence Does";

export const features: CorpiFeature[] = [
  {
    title: "Talks Like a Real Consultant",
    description:
      "Responds naturally in English, BM, Mandarin, or Manglish — in your brand's tone and voice.",
  },
  {
    title: "Qualifies Leads Naturally",
    description:
      "Through conversation, Corpi uncovers what the customer needs, their budget, and location — no forms, no drop-offs.",
  },
  {
    title: "Saves Leads Automatically",
    description:
      "Every qualified lead lands in your Notion CRM with name, phone, objectives, budget, and a conversation summary.",
  },
  {
    title: "Knows Your Products",
    description:
      "Update your bot's knowledge anytime by editing a Notion page. Changes go live in 30 minutes — no code needed.",
  },
  {
    title: "Live Dashboard",
    description:
      "Monitor bot status, view leads, update stages, and restart the bot — from a dashboard on your own domain.",
  },
  {
    title: "Human Escalation",
    description:
      "When a customer wants a real person, Corpi hands off gracefully and professionally.",
  },
];

export const whatYouGetHeading = "What You Get";

export const whatYouGet = [
  { label: "AI WhatsApp Agent", desc: "Custom-branded bot with your persona, tone, and product knowledge" },
  { label: "Lead CRM", desc: "Notion database capturing all qualified leads automatically" },
  { label: "Live Dashboard", desc: "Web dashboard on your domain — bot controls, lead table, QR scan" },
  { label: "Knowledge Base", desc: "Notion page you control — update bot knowledge anytime, no code needed" },
  { label: "Multilingual Support", desc: "English, BM, Mandarin, Manglish (or your preferred languages)" },
  { label: "Setup & Configuration", desc: "Full deployment by Corplabs — you just scan a QR code" },
  { label: "Ongoing Support", desc: "Monthly retainer includes monitoring, maintenance, and updates" },
];

export const onboarding = {
  title: "How We Onboard You",
  lede: "From first conversation to live bot in under 2 weeks.",
  steps: [
    { day: "Day 1", title: "Discovery Call", desc: "We learn about your business, customers, and goals. You tell us your bot name, products, and languages." },
    { day: "Day 2–7", title: "We Build It", desc: "Corplabs sets up your server, bot persona, Notion CRM, and branded dashboard. You don't touch any code." },
    { day: "Day 7–10", title: "Review & Refine", desc: "You test your own bot as a customer. We refine until the tone and responses are exactly right." },
    { day: "Day 10–14", title: "Go Live", desc: "You scan one QR code. Your bot is live on WhatsApp. We monitor the first 48 hours with you." },
    { day: "Day 14+", title: "Handoff & Training", desc: "We walk you through your dashboard and Notion workspace. From here, your bot runs itself." },
  ],
};

export const pricing = {
  title: "Simple, Transparent Pricing",
  setupFee: {
    title: "One-time Setup Fee — from RM 1,500",
    body: "Covers discovery, bot configuration, Notion setup, VPS provisioning, domain linking, and go-live support. Final price depends on scope.",
  },
  plans: [
    { name: "Starter", price: "RM 300", period: "/month", desc: "Up to 500 conversations/month", recommended: false },
    { name: "Growth", price: "RM 500", period: "/month", desc: "Up to 2,000 conversations/month", recommended: true },
    { name: "Scale", price: "RM 800", period: "/month", desc: "Unlimited conversations", recommended: false },
  ],
  includesLine: "VPS hosting · Dashboard · Notion CRM · Corplabs support",
  footnote: "Claude API usage above tier limits is billed at cost + 20% margin.",
  ctaLabel: "Get Started",
  ctaHref: "/contact",
};

export const faqsHeading = "Frequently Asked Questions";

export const faqs = [
  {
    question: "Does this work with my existing WhatsApp number?",
    answer:
      "Yes. Corpi links directly to your WhatsApp Business number. You just scan a QR code — similar to how WhatsApp Web works on your laptop.",
  },
  {
    question: "Do I need WhatsApp Business API (Meta)?",
    answer:
      "No. Corpi uses a direct connection to WhatsApp that does not require a Meta Business API subscription, saving you the monthly fee and approval process.",
  },
  {
    question: "What happens if the bot doesn't know the answer?",
    answer:
      "Corpi is designed to gracefully acknowledge when it doesn't have enough information and offer to connect the customer with your team. It will never make up answers.",
  },
  {
    question: "Can I update what the bot knows without calling Corplabs?",
    answer:
      "Yes. Your Knowledge Base is a simple Notion page. Edit it yourself and the bot picks up changes within 30 minutes — no code, no restarts, no developer needed.",
  },
  {
    question: "Is my customer data safe?",
    answer:
      "Yes. Each client has a dedicated server. Your leads and conversation data are stored only in your own Notion workspace and your private server. We do not store or share your customer data.",
  },
  {
    question: "What if my customers write in mixed languages?",
    answer:
      "Corpi detects the language your customer is using and responds accordingly — including Manglish and mixed BM-English, which is common in Malaysia.",
  },
  {
    question: "Can I see what the bot said to my customers?",
    answer:
      "Yes. Every lead saved to your Notion CRM includes a conversation summary. Full logs are accessible from your dashboard.",
  },
  {
    question: "What if I want to add more products later?",
    answer:
      "Just update your Knowledge Base page in Notion. For significant changes to lead fields or CRM structure, that's covered under the retainer.",
  },
  {
    question: "Is there a contract?",
    answer:
      "We operate on a monthly retainer with a minimum 3-month commitment. After that, it's month-to-month. Setup fee is non-refundable once deployment begins.",
  },
];

export const finalCta = {
  title: "Ready to Get Started?",
  body: "Book a discovery call with the Corplabs team. We'll have your bot live in under 2 weeks.",
  primaryCta: { label: "Email Us", href: "mailto:contact@corplabs.co" },
  secondaryCta: { label: "WhatsApp Us", href: "https://wa.me/60166727208" },
  contactLine: "corplabs.co · contact@corplabs.co",
};
