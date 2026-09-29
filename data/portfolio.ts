/**
 * Portfolio — page copy for /portfolio and /portfolio/[slug] that isn't
 * project content. The projects themselves are Keystatic-managed content
 * (content/portfolio/*.yaml, read via lib/portfolio.ts) so Sahira can add
 * or edit one without a PR — this file is just the surrounding UI strings.
 */

import { projectKinds } from "@/keystatic.config";
import type { ProjectKind } from "@/lib/portfolio";

/** Shared between the case-study header and the grid card's tag badges.
 * Derived from keystatic.config.ts's `kind` select options — the single
 * place those two labels are actually written — instead of retyping them. */
export const kindLabel: Record<ProjectKind, string> = Object.fromEntries(
  projectKinds.map(({ value, label }) => [value, label])
) as Record<ProjectKind, string>;

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
