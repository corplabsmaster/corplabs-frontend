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
  /** The business, as a scannable fact table (3–4 rows) — not prose. */
  vitals: StatPair[];
  /** 2–4 sentences shown on the case-study page — the "where we came in" story. */
  brief: string;
  /** The generic move most competitors make in this category. */
  expectedMove: string;
  /** What this site does instead. Paired with `expectedMove` as a comparison. */
  actualMove: string;
  /** The visual language as label/value tokens — palette, type, mood, signature move. */
  designTokens: StatPair[];
  /** Short chips summarising the design style, e.g. "Dark-mode SaaS". */
  styleTags: string[];
  /** The deployed site prospects can click through to. */
  liveUrl: string;
  /** Path under /public/portfolio, e.g. "/portfolio/montesofa.jpg". Falls back to a placeholder tile when unset. */
  image?: string;
  /** Extra screenshots shown right under the hero image on the case-study page. */
  gallery?: string[];
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
    industry: "Furniture & Retail",
    kind: "revamp",
    summary:
      "A revamp for a Malaysian luxury sofa maker — from a dated storefront to an editorial, product-led site.",
    vitals: [
      { label: "Founded", value: "1997" },
      { label: "Team", value: "4 → 150 makers" },
      { label: "Facility", value: "8,000 sq ft, Selangor" },
      { label: "Collections", value: "Neo & Incliner" },
    ],
    brief:
      "Monte makes handmade luxury sofas out of Selangor, and their old site undersold the craft. We rebuilt it around full-bleed product photography and a quieter, editorial layout, so the leatherwork and the copy do the selling instead of busy page furniture.",
    expectedMove:
      "A price-sorted catalogue — grids, filters, side-by-side spec comparisons.",
    actualMove:
      "No price-sort, no \"compare\" button. Just a heritage story (1997, four founders, 150 makers) and macro leather photography doing the selling.",
    designTokens: [
      { label: "Palette", value: "Warm cream canvas, charcoal accent sections" },
      { label: "Type", value: "Serif display headlines, small-caps sans labels" },
      { label: "Layout mood", value: "Quiet luxury — whitespace, hairline dividers" },
      { label: "Signature move", value: "Full-bleed macro leather photography" },
    ],
    styleTags: ["Editorial", "Full-bleed photography", "Quiet luxury", "Heritage storytelling"],
    liveUrl: "https://monte-web-xi.vercel.app/",
    image: "/portfolio/montesofa.jpg",
    gallery: ["/portfolio/montesofa-2.jpg", "/portfolio/montesofa-3.jpg"],
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
    vitals: [
      { label: "Coverage", value: "Malaysia & Indonesia" },
      { label: "Habitats monitored", value: "2,840+" },
      { label: "Partner labs", value: "38" },
      { label: "Sub-products", value: "HiTerra · TerraCarbon · TerraBrain · TerraMarket" },
    ],
    brief:
      "HiTerra turns soil samples and field data into guidance farms can act on. The site had to make four distinct modules — HiTerra, TerraCarbon, TerraBrain, TerraMarket — legible to three different audiences (farmers, estates, partners) without turning into a wall of SaaS jargon.",
    expectedMove:
      "One homepage pitching the enterprise buyer, with features listed underneath.",
    actualMove:
      "Three explicit funnels — Farmers, Enterprises & Estates, Partners — each with its own CTA and its own product story, tied together by a shared \"TerraLink\" data layer.",
    designTokens: [
      { label: "Palette", value: "Navy hero fading to aerial field photo, lime accent" },
      { label: "Type", value: "Dense, clean grotesque sans" },
      { label: "Layout mood", value: "B2B SaaS — data as proof, not illustration" },
      { label: "Signature move", value: "Live dashboard mockups (pH/N/P/K, carbon map)" },
    ],
    styleTags: ["Dark-mode SaaS", "Lime accent", "Data-forward", "Multi-persona"],
    liveUrl: "https://www.hiterra.co/",
    image: "/portfolio/hiterra.jpg",
    gallery: ["/portfolio/hiterra-2.jpg", "/portfolio/hiterra-3.jpg"],
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
    vitals: [
      { label: "Categories", value: "Furniture · Home & Living · Pet · Fitness" },
      { label: "Customers", value: "100,000+ across Malaysia" },
      { label: "Returns", value: "30-day policy" },
      { label: "Structure", value: "Hero → trending grid → promo → trust badges" },
    ],
    brief:
      "EvenMall needed a storefront that could carry categories as different as furniture and fitness gear under one confident identity. We leaned into a bold black-and-orange system and big display type instead of the generic marketplace template look.",
    expectedMove:
      "White background, blue links — the generic marketplace template look.",
    actualMove:
      "A fully black header with saturated orange run through every CTA and sale banner, and bold condensed headlines that push more retail-sale energy than the average furniture marketplace.",
    designTokens: [
      { label: "Palette", value: "High-contrast black + saturated orange" },
      { label: "Type", value: "Bold, heavy sans-serif display" },
      { label: "Layout mood", value: "Dense product grids, promo urgency" },
      { label: "Signature move", value: "Gradient orange \"Weekend Special\" bands" },
    ],
    styleTags: ["Bold retail", "High-contrast", "Promo-driven", "Product-grid dense"],
    liveUrl: "https://evenmall.com/",
    image: "/portfolio/evenmall.jpg",
    gallery: ["/portfolio/evenmall-2.jpg", "/portfolio/evenmall-3.jpg"],
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
