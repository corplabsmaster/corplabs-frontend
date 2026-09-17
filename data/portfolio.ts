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

export interface PortfolioProject {
  slug: string;
  /** Project/client name shown as the card and detail-page title. */
  name: string;
  pillar: ProjectPillarId;
  /** Short industry label, e.g. "Furniture & Retail". */
  industry: string;
  kind: ProjectKind;
  /** One sentence shown on the grid card. */
  summary: string;
  /** 2–4 sentences shown on the case-study page — the "where we came in" story. */
  brief: string;
  /** The deployed site prospects can click through to. */
  liveUrl: string;
  /** Path under /public/portfolio, e.g. "/portfolio/montesofa.png". Falls back to a placeholder tile when unset. */
  image?: string;
  featured?: boolean;
}

// NOTE: brief copy below is a first draft written from what the live sites
// show (layout, copy, industry) — not confirmed engagement details (scope,
// timeline, budget). Sahira: please fact-check before this goes live.
export const projects: PortfolioProject[] = [
  {
    slug: "montesofa",
    name: "Monte",
    pillar: "corpsite",
    industry: "Furniture & Retail",
    kind: "revamp",
    summary:
      "A revamp for a Malaysian luxury sofa maker — from a dated storefront to an editorial, product-led site.",
    brief:
      "Monte makes handmade luxury sofas out of Selangor, and their old site undersold the craft. We rebuilt it around full-bleed product photography and a quieter, editorial layout, so the leatherwork and the copy do the selling instead of busy page furniture.",
    liveUrl: "https://monte-web-xi.vercel.app/",
    image: "/portfolio/montesofa.jpg",
    featured: true,
  },
  {
    slug: "hiterra",
    name: "HiTerra",
    pillar: "corpsite",
    industry: "AgriTech / SaaS",
    kind: "build",
    summary:
      "A dark-mode platform site for HiTerra's field-to-harvest agritech product, explaining four connected modules at a glance.",
    brief:
      "HiTerra turns soil samples and field data into guidance farms can act on. The site had to make four distinct modules — HiTerra, TerraCarbon, TerraBrain, TerraMarket — legible to three different audiences (farmers, estates, partners) without turning into a wall of SaaS jargon.",
    liveUrl: "https://www.hiterra.co/",
    image: "/portfolio/hiterra.jpg",
    featured: true,
  },
  {
    slug: "evenmall",
    name: "EvenMall",
    pillar: "corpsite",
    industry: "E-commerce / Retail",
    kind: "build",
    summary:
      "A bold, orange-and-black storefront for EvenMall's furniture and home-essentials marketplace.",
    brief:
      "EvenMall needed a storefront that could carry categories as different as furniture and fitness gear under one confident identity. We leaned into a bold black-and-orange system and big display type instead of the generic marketplace template look.",
    liveUrl: "https://evenmall.com/",
    image: "/portfolio/evenmall.jpg",
  },
];

export const portfolioHero = {
  eyebrow: "Our Work",
  headlineLead: "Real sites, built by",
  headlineGradient: "the same team.",
  lede: "A look at what we've shipped, across every pillar. Click through from the story to the live site — no mockups, nothing staged.",
};

export const portfolioFilterCopy = {
  all: "All",
};

export const portfolioCaseStudyCopy = {
  backLabel: "← All work",
  liveSiteLabel: "Visit the live site",
  relatedLabel: "More work",
};
