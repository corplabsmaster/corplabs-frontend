/**
 * Portfolio — page copy for /portfolio and /portfolio/[slug] that isn't
 * project content. The projects themselves are Keystatic-managed content
 * (content/portfolio/*.yaml, read via lib/portfolio.ts) so Sahira can add
 * or edit one without a PR — this file is just the surrounding UI strings.
 */

/** Shared between the case-study header and the grid card's tag badges. */
export const kindLabel: Record<"build" | "revamp", string> = {
  build: "New website build",
  revamp: "Website revamp",
};

export const portfolioHero = {
  eyebrow: "Our Work",
  headlineLead: "Real sites, built by",
  headlineGradient: "the same team.",
  lede: "Some of our projects we are proud of, shipped, live and doing real work.",
};

export const portfolioCaseStudyCopy = {
  backLabel: "← All work",
  liveSiteLabel: "Visit the live site",
  relatedLabel: "More work",
};
