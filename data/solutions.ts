/** /solutions — umbrella page copy: hero, pillar cards, closing CTA. */

export const solutionsHero = {
  eyebrow: "Solutions · The Corplabs lineup",
  title: "Four pillars, one playbook.",
  lede: "Pick the surface that solves your problem. Each pillar is built, deployed, and supported by the same Corplabs team — so you never get handed off between vendors.",
  primaryCta: { label: "Explore the pillars", href: "#pillars" },
  secondaryCta: { label: "Book a discovery call", href: "/contact" },
};

export const solutionsPillarsHeading = {
  eyebrow: "Our pillars",
  title: "Four pillars covering every surface.",
  lede: "Each pillar has a public price floor, a transparent process, and a dedicated page below. Click through for tiers, FAQs, and a way to start a conversation.",
};

export interface SolutionPillarCard {
  id: "corpi" | "corpcode" | "corprise" | "corpsite";
  name: string;
  tagline: string;
  description: string;
  href: string;
  startsFrom?: string;
  ctaLabel: string;
}

export const solutionPillarCards: SolutionPillarCard[] = [
  {
    id: "corpi",
    name: "Corpi",
    tagline: "AI WhatsApp sales agents.",
    description:
      "Done-for-you Claude-powered WhatsApp agents that capture leads, qualify them, and save them straight to your CRM — 24/7.",
    href: "/corpi",
    ctaLabel: "Explore Corpi",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    tagline: "Custom software builds.",
    description:
      "Internal tools to ERP-class platforms. Paid discovery, fixed milestones, and a Malaysian-led team. From RM 30k.",
    href: "/corpcode",
    startsFrom: "from RM 30k",
    ctaLabel: "Explore Corpcode",
  },
  {
    id: "corprise",
    name: "Corprise",
    tagline: "Subscription-priced ERP.",
    description:
      "Replace RM 80k+ Odoo implementations with a monthly subscription from RM 1,000. MyInvois-ready. Live in weeks, not quarters.",
    href: "/corprise",
    startsFrom: "from RM 1k / mo",
    ctaLabel: "Explore Corprise",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    tagline: "Websites — design, build, ongoing care.",
    description:
      "Six tiers from RM 2,000 starter sites to enterprise platforms. Modern stack (Next.js / Payload / Cloudflare). Free for NGOs.",
    href: "/corpsite",
    startsFrom: "from RM 2k",
    ctaLabel: "Explore Corpsite",
  },
];

export const solutionsCta = {
  eyebrow: "Not sure which fits?",
  title: "Tell us the problem. We'll point you at the pillar.",
  lede: "A discovery call is the fastest path. Share the workflow you're trying to fix and we'll come back with a written scope, a fixed quote, and the architecture diagram — yours to keep.",
  primaryCta: { label: "Book a discovery call", href: "/contact" },
  secondaryCta: { label: "Email us", href: "mailto:contact@corplabs.co" },
};
