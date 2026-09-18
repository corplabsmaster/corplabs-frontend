/**
 * Portfolio — single source of truth for /portfolio and /portfolio/[slug].
 *
 * Modeled after data/corpsite.ts: every user-facing string lives here, plain
 * TS objects (not Keystatic) because entries need a typed `pillar` and
 * `liveUrl`, not long-form Markdoc bodies. Revisit as a Keystatic collection
 * (see keystatic.config.ts) if this grows past a handful of hand-edited
 * entries and Sahira wants to add projects without a PR.
 */

export type ProjectPillarId = "corpi" | "corpcode" | "corprise" | "corpsite";

export type ProjectKind = "build" | "revamp";

export interface StatPair {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  src: string;
  label: string;
  /** "portrait" = a mobile-viewport shot; "wide" = a full-width desktop section. */
  orientation?: "wide" | "portrait";
}

export interface PortfolioProject {
  slug: string;
  /** Project/client name shown as the card and detail-page title. */
  name: string;
  pillar: ProjectPillarId;
  /** Standardised business type — one plain term, no "/" or "&", no tech-jargon suffixes. */
  industry: string;
  /** How the client operates, for the info box next to the intro. */
  companyType: string;
  kind: ProjectKind;
  /** One sentence shown on the grid card. */
  summary: string;
  /** The lead narrative — client's situation, the challenge, what we did. Case-study page only. */
  intro: string;
  /** The specific problem to solve — concrete, not a restatement of `intro`. */
  challenge: string;
  /** What we actually did about it — concrete actions, not a restatement of `intro`. */
  solution: string;
  /** The visual language as label/value tokens — palette, type, mood, signature move. */
  designTokens: StatPair[];
  /** Short chips summarising the design style, e.g. "Dark-mode SaaS". */
  styleTags: string[];
  /** The deployed site prospects can click through to. */
  liveUrl: string;
  /** Grid-card thumbnail — the client's logo or a business/product photo, never a UI screenshot. */
  cardImage: string;
  /** Full-width case-study hero screenshot. Omit when `heroVideo` is set. */
  heroImage?: string;
  /** Full-width case-study hero video (the client's own site video, if it has one). */
  heroVideo?: string;
  /** Poster frame shown before `heroVideo` loads. */
  heroPoster?: string;
  /** Extra screenshots — multiple views (sections, mobile) for the gallery. */
  screenshots: ProjectScreenshot[];
  featured?: boolean;
}

// NOTE: copy below is a first draft written from what the live sites show
// (layout, copy, stats, industry) — not confirmed engagement details (scope,
// timeline, budget). Sahira: please fact-check before this goes live.
export const projects: PortfolioProject[] = [
  {
    slug: "montesofa",
    name: "Monte",
    pillar: "corpsite",
    industry: "Furniture",
    companyType: "Furniture Manufacturer",
    kind: "revamp",
    summary:
      "A revamp for a Malaysian luxury sofa maker — from a dated storefront to an editorial, product-led site.",
    intro:
      "Monte has been building handmade leather sofas in Selangor since 1997 — from a four-person workshop to a 150-person atelier. But their site still read like a catalogue, and catalogues don't sell craftsmanship. We rebuilt it around full-bleed leather photography, a slower editorial pace, and the same looping hero film that greets visitors on the real showroom floor. Fewer clicks, more looking — the sofa does the convincing.",
    challenge:
      "Sell handmade craftsmanship through a site that looked like every other furniture catalogue.",
    solution:
      "We rebuilt the site around full-bleed leather photography and the brand's own hero film, cut the catalogue UI, and let the product carry the page.",
    designTokens: [
      { label: "Palette", value: "Warm cream canvas, charcoal accent sections" },
      { label: "Type", value: "Serif display headlines, small-caps sans labels" },
      { label: "Layout mood", value: "Quiet luxury — whitespace, hairline dividers" },
      { label: "Signature move", value: "Full-bleed macro leather photography + film" },
    ],
    styleTags: ["Editorial", "Full-bleed photography", "Quiet luxury", "Heritage storytelling"],
    liveUrl: "https://monte-web-xi.vercel.app/",
    cardImage: "/portfolio/montesofa-card.jpg",
    heroVideo: "/portfolio/montesofa-hero.mp4",
    heroPoster: "/portfolio/montesofa-hero-poster.jpg",
    screenshots: [
      { src: "/portfolio/montesofa.jpg", label: "Homepage", orientation: "wide" },
      { src: "/portfolio/montesofa-2.jpg", label: "Collections", orientation: "wide" },
      { src: "/portfolio/montesofa-3.jpg", label: "In your space", orientation: "wide" },
      { src: "/portfolio/montesofa-mobile.jpg", label: "Mobile", orientation: "portrait" },
    ],
    featured: true,
  },
  {
    slug: "hiterra",
    name: "HiTerra",
    pillar: "corpsite",
    industry: "AgriTech",
    companyType: "Software Platform",
    kind: "build",
    summary:
      "A dark-mode platform site for HiTerra's field-to-harvest agritech product, explaining four connected modules at a glance.",
    intro:
      "HiTerra turns soil samples and field data into decisions a farm team can actually act on, across Malaysia and Indonesia. The challenge wasn't proving the tech worked — it was explaining four connected products to three completely different audiences without burying anyone in jargon. We built a dark, data-forward site that splits the homepage into explicit paths for farmers, estates, and partners, with live dashboard mockups doing the convincing instead of another feature list.",
    challenge:
      "Explain four connected products to three different audiences — farmers, estates, partners — without burying anyone in jargon.",
    solution:
      "We split the homepage into three explicit paths, each with its own CTA, and used live dashboard mockups instead of another feature list.",
    designTokens: [
      { label: "Palette", value: "Navy hero fading to aerial field photo, lime accent" },
      { label: "Type", value: "Dense, clean grotesque sans" },
      { label: "Layout mood", value: "B2B SaaS — data as proof, not illustration" },
      { label: "Signature move", value: "Live dashboard mockups (pH/N/P/K, carbon map)" },
    ],
    styleTags: ["Dark-mode SaaS", "Lime accent", "Data-forward", "Multi-persona"],
    liveUrl: "https://www.hiterra.co/",
    cardImage: "/portfolio/hiterra-card.jpg",
    heroImage: "/portfolio/hiterra-wide.jpg",
    screenshots: [
      { src: "/portfolio/hiterra-2.jpg", label: "The four modules", orientation: "wide" },
      { src: "/portfolio/hiterra-3.jpg", label: "Built for every audience", orientation: "wide" },
      { src: "/portfolio/hiterra-mobile.jpg", label: "Mobile", orientation: "portrait" },
    ],
    featured: true,
  },
  {
    slug: "evenmall",
    name: "EvenMall",
    pillar: "corpsite",
    industry: "E-commerce",
    companyType: "Online Marketplace",
    kind: "build",
    summary:
      "A bold, orange-and-black storefront for EvenMall's furniture and home-essentials marketplace.",
    intro:
      "EvenMall sells everything from Italian sofas to fitness gear under one roof, and needed a storefront confident enough to hold that range together. Rather than default to the white background and blue links most furniture marketplaces settle for, we built a bold black-and-orange identity carried through every banner, badge, and call to action — closer to a fashion outlet's energy than a generic catalogue.",
    challenge:
      "Hold furniture, home goods, pet, and fitness categories together under one storefront without it reading like a generic marketplace theme.",
    solution:
      "We built a bold black-and-orange identity and carried it through every banner, badge, and call to action, instead of the default white-background template.",
    designTokens: [
      { label: "Palette", value: "High-contrast black + saturated orange" },
      { label: "Type", value: "Bold, heavy sans-serif display" },
      { label: "Layout mood", value: "Dense product grids, promo urgency" },
      { label: "Signature move", value: "Gradient orange \"Weekend Special\" bands" },
    ],
    styleTags: ["Bold retail", "High-contrast", "Promo-driven", "Product-grid dense"],
    liveUrl: "https://evenmall.com/",
    cardImage: "/portfolio/evenmall-card.jpg",
    heroImage: "/portfolio/evenmall-wide.jpg",
    screenshots: [
      { src: "/portfolio/evenmall-2.jpg", label: "Trending this week", orientation: "wide" },
      { src: "/portfolio/evenmall-3.jpg", label: "Why shop with EvenMall", orientation: "wide" },
      { src: "/portfolio/evenmall-mobile.jpg", label: "Mobile", orientation: "portrait" },
    ],
  },
];

export const portfolioHero = {
  eyebrow: "Our Work",
  headlineLead: "Real sites, built by",
  headlineGradient: "the same team.",
  lede: "Some of our projects we are proud of, shipped, live and doing real work.",
};

export const portfolioFilterCopy = {
  all: "All",
};

export const portfolioCaseStudyCopy = {
  backLabel: "← All work",
  liveSiteLabel: "Visit the live site",
  relatedLabel: "More work",
};
