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
  /** What the client's business actually does — case-study page only. */
  business: string;
  /** 2–4 sentences shown on the case-study page — the "where we came in" story. */
  brief: string;
  /** What sets this site/brand apart from others in its category. */
  whatsDifferent: string;
  /** The visual/design language in plain language — palette, type, layout mood. */
  styleNotes: string;
  /** Short chips summarising the design style, e.g. "Dark-mode SaaS". */
  styleTags: string[];
  /** The deployed site prospects can click through to. */
  liveUrl: string;
  /** Path under /public/portfolio, e.g. "/portfolio/montesofa.jpg". Falls back to a placeholder tile when unset. */
  image?: string;
  /** Extra screenshots shown in a gallery on the case-study page only. */
  gallery?: string[];
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
    business:
      "Monte is the premium sofa line of FUTURE Group, a Selangor manufacturer that's built sofas by hand since 1997 — grown from a four-person, 1,500 sq ft workshop to a 150-person, 8,000 sq ft facility, selling direct through its Neo and Incliner collections.",
    brief:
      "Monte makes handmade luxury sofas out of Selangor, and their old site undersold the craft. We rebuilt it around full-bleed product photography and a quieter, editorial layout, so the leatherwork and the copy do the selling instead of busy page furniture.",
    whatsDifferent:
      "Most furniture sites in this price bracket default to a catalogue: grids, filters, side-by-side spec comparisons. Monte's site refuses all of that — no price-sorting, no \"compare\" buttons — and instead spends its homepage on a heritage story (1997, four founders, 150 makers) and macro leather photography. It reads as a design house's site, not a retailer's.",
    styleNotes:
      "Full-bleed macro leather photography, a warm cream/off-white canvas, and a serif display headline (\"The quiet authority of a room, made by hand\") set against restrained sans-serif labels. Dark charcoal sections break up the page for brand-story moments. Generous negative space, thin hairline dividers, small-caps eyebrow labels — the visual grammar of quiet luxury, not e-commerce.",
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
    business:
      "HiTerra is a Malaysia/Indonesia agritech platform that turns soil samples, field tasks and lab results into guidance a farm team can act on — by its own numbers, 2,840+ habitats monitored through 38 partner labs across 2 markets.",
    brief:
      "HiTerra turns soil samples and field data into guidance farms can act on. The site had to make four distinct modules — HiTerra, TerraCarbon, TerraBrain, TerraMarket — legible to three different audiences (farmers, estates, partners) without turning into a wall of SaaS jargon.",
    whatsDifferent:
      "Most agritech marketing sites write to one buyer — usually the estate manager with a budget. HiTerra's homepage instead splits into three explicit funnels with their own CTA: Farmers get \"Get the App\", Enterprises & Estates get \"Request a Demo\", Partners get \"Partner With Us\". The four sub-products (HiTerra, TerraCarbon, TerraBrain, TerraMarket) are presented as one connected system via a shared \"TerraLink\" data layer, not a bundle of upsells.",
    styleNotes:
      "A dark navy hero that fades into an aerial crop-field photo, with a single lime-green accent carried through every primary button and data highlight. Live dashboard mockups — block-level pH/N/P/K readouts, a carbon-tracking map — do the proof-of-product work instead of stock illustration. Typography is a dense, clean grotesque sans; the overall feel is B2B SaaS, deliberately avoiding rustic or \"agriculture\" visual cliché.",
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
    business:
      "EvenMall is a Malaysian e-commerce marketplace covering furniture, home & living, pet and fitness categories — positioned as a one-stop store with the trust levers shoppers expect from a marketplace: secure checkout, fast delivery, and a 30-day return policy.",
    brief:
      "EvenMall needed a storefront that could carry categories as different as furniture and fitness gear under one confident identity. We leaned into a bold black-and-orange system and big display type instead of the generic marketplace template look.",
    whatsDifferent:
      "The structure is a familiar one — hero banner, trending-products grid, promo strip, trust badges — because shoppers already know how to use it. The differentiation is tonal: a fully black header, saturated orange run consistently through badges, CTAs and sale banners, and bold condensed headlines that push more retail-sale energy than the average furniture marketplace, which tends to hide behind white backgrounds and blue links.",
    styleNotes:
      "High-contrast black-and-orange palette used everywhere — nav, buttons, promo banners, wishlist icons on hover. Bold, heavy sans-serif display type on headlines (\"Even More Choices, Even Better Deals\"). Dense product grids with prices and quick-add carts, and gradient orange promo bands (\"Weekend Special — Up to 25% off\") built for urgency.",
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
