/**
 * /about — company story: hero + facts, timeline, mission/vision, values,
 * culture, HiTerra flagship, and a closing CTA. All user-facing copy lives here.
 */

export const aboutHero = {
  eyebrow: "About Corplabs",
  title: "A small Malaysian team that ships its own products — and yours.",
  lead:
    "Corplabs started in 2015 as a research group: a handful of engineers who kept building things after hours. We're still that, with invoices. Four products of our own, client work in Malaysia and across Southeast Asia, and a habit of staying on the phone long after launch.",
  body:
    "We look small, and we prefer it that way. It means the people who scope your work are the ones who build it.",
};

export interface AboutFact {
  stat: string;
  label: string;
}

export const facts: AboutFact[] = [
  { stat: "2015", label: "Founded in Kuala Lumpur as a research group" },
  { stat: "4 products", label: "Corpi, Corpcode, Corprise, Corpsite — plus HiTerra" },
  { stat: "EN · BM · 中文", label: "Languages we work and write in" },
  { stat: "D-U-N-S® 44-791-6777", label: "Registered and verifiable" },
];

export const storyHeading = "How we got here";

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "A research group",
    body: "Corplabs began as a handful of engineers investigating things nobody was paying us for yet — sensor networks, automation, and the unglamorous middle of business software.",
  },
  {
    year: "2017",
    title: "A private community",
    body: "We formalised into a private community to pursue bigger plans, backed by a sponsor who funded open development work. That's when client projects started arriving.",
  },
  {
    year: "2021",
    title: "HiTerra begins",
    body: "Our own agriculture platform: AI recommendations, a provider network, and IoT in real fields. It became the proof that we could run a product, not just deliver one.",
  },
  {
    year: "2024",
    title: "Four pillars",
    body: "Client work had settled into four repeatable shapes, so we named them and published the prices — Corpi, Corpcode, Corprise, and Corpsite.",
  },
  {
    year: "Today",
    title: "Still small on purpose",
    body: "Small enough that the person scoping your work is the person building it, and the person who answers when something breaks at 9pm.",
  },
];

export interface MissionVisionItem {
  id: string;
  title: string;
  body: string;
}

export const missionVision: MissionVisionItem[] = [
  {
    id: "mission",
    title: "Mission",
    body: "Always driven by innovation, self-motivated, and ready to surpass the competition in the global arena.",
  },
  {
    id: "vision",
    title: "Vision",
    body: "To be a globally recognised leader that delivers captivating, inspiring experiences — and sets new standards in a landscape that never stops moving.",
  },
];

export const valuesHeading = {
  title: "What we hold to",
  lede: "Five words we use as tie-breakers when a decision is genuinely close.",
};

export interface AboutValue {
  n: string;
  title: string;
  body: string;
}

export const values: AboutValue[] = [
  {
    n: "01",
    title: "Maintainability",
    body: "We write what the next person can keep running — including the next person on your team, not ours.",
  },
  {
    n: "02",
    title: "Sustainability",
    body: "A pace we can hold for years. Fast bursts that burn out a team cost the client more in the end.",
  },
  {
    n: "03",
    title: "Productivity",
    body: "Work that outlives the invoice. If it stops mattering the quarter after launch, we mis-scoped it.",
  },
  {
    n: "04",
    title: "Motivated",
    body: "We take on problems because they're interesting, and it shows in what we hand over.",
  },
  {
    n: "05",
    title: "Innovative",
    body: "Pushing the boundary is the job — but we ship boring, dependable software when that's what serves you.",
  },
];

export const culture = {
  title: { plain: "We Look Small, ", gradient: "But Think Big" },
  body: "Corpians work across products, not in silos — the engineer who built HiTerra's sensor pipeline is the one who'll tell you whether your IoT idea holds up. We hire for curiosity and keep the team small enough that everyone can see the whole board.",
  image: "/astronaut.webp",
};

export interface CultureCard {
  name: string;
  blurb: string;
}

export const cultureCards: CultureCard[] = [
  { name: "Work with us", blurb: "Challenging projects, real ownership, and a supportive workplace." },
  { name: "Benefits & perks", blurb: "Competitive pay, health coverage, flexible hours." },
  { name: "Career growth", blurb: "Learning, mentorship, and problems that stretch you." },
  { name: "Equal opportunity", blurb: "All backgrounds welcome, without discrimination." },
];

export const flagship = {
  badge: "Our Flagship Project",
  title: "HiTerra™ AI Platform",
  body: "The clearest answer to what we do: an AI platform we built, own, and run — helping farmers and agricultural companies operate more profitably and more sustainably. Everything we've learned shipping it goes into client work.",
  cta: { label: "Visit HiTerra →", href: "https://www.hiterra.co" },
};

export interface FlagshipTile {
  name: string;
  blurb: string;
}

export const flagshipTiles: FlagshipTile[] = [
  { name: "AI recommendations", blurb: "TerraMind insights that optimise practices and yield." },
  { name: "TerraLink system", blurb: "Connects providers, farmers, and services seamlessly." },
  { name: "Proven results", blurb: "85% less labour, 70% time saved — field-validated." },
  { name: "Carbon compliance", blurb: "Aligned with global carbon credit standards." },
];

export const closingCta = {
  title: "Want to build with us?",
  body: "Tell us about the idea — we'll bring the team that ships it. Or come work here: we're hiring engineers and a product lead.",
  primary: { label: "Talk to us", href: "/contact" },
  secondary: { label: "See open roles", href: "/#careers" },
};
