import "server-only";
import { cache } from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig, { projectKinds } from "@/keystatic.config";
import type { PillarId } from "@/data/site";
import type { DeviceKind } from "@/components/portfolio/DeviceFrame";

/** Server-side access to the Keystatic portfolio content (content/portfolio/*). */

/** Derived from keystatic.config.ts's `kind` select options, so the two can't drift. */
export type ProjectKind = (typeof projectKinds)[number]["value"];

export interface StatPair {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  src: string;
  /** Not shown in the UI — kept only so alt text can be more specific than "{name} — {device} view". */
  label?: string;
  /** Which device chrome the gallery frames this shot in. */
  device: DeviceKind;
}

/** Exactly one hero medium — never both, never neither. */
export type ProjectHero =
  | { heroVideo: string; heroPoster?: string; heroImage?: undefined }
  | { heroVideo?: undefined; heroPoster?: undefined; heroImage: string };

export type PortfolioProject = {
  slug: string;
  /** Project/client name shown as the card and detail-page title. */
  name: string;
  pillar: PillarId;
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
  /** What it's actually built on — platform, hosting, one notable technical detail. */
  stack: StatPair[];
  /** Short chips for the stack, e.g. "Next.js", "Payload CMS". */
  stackTags: string[];
  /** The deployed site prospects can click through to. */
  liveUrl: string;
  /** Grid-card thumbnail — a business/product photo, never a UI screenshot. */
  cardImage: string;
  /** Extra screenshots — multiple views (sections, mobile) for the gallery. */
  screenshots: ProjectScreenshot[];
  featured?: boolean;
} & ProjectHero;

const reader = createReader(process.cwd(), keystaticConfig);

/** content/portfolio/*'s image/file fields store a bare filename — every
 * asset lives in this one shared public/portfolio directory (see
 * keystatic.config.ts's `directory`/`publicPath` on each field), so the
 * public URL is always this prefix plus that filename. */
const ASSET_BASE = "/portfolio/";

type PortfolioEntry = Awaited<ReturnType<typeof reader.collections.portfolio.read>>;

function toProject(slug: string, entry: NonNullable<PortfolioEntry>): PortfolioProject {
  const hero: ProjectHero =
    entry.hero.discriminant === "video"
      ? {
          heroVideo: ASSET_BASE + entry.hero.value.heroVideo,
          heroPoster: entry.hero.value.heroPoster ? ASSET_BASE + entry.hero.value.heroPoster : undefined,
        }
      : { heroImage: ASSET_BASE + entry.hero.value };

  return {
    slug,
    name: entry.name,
    pillar: entry.pillar,
    industry: entry.industry,
    companyType: entry.companyType,
    kind: entry.kind,
    summary: entry.summary,
    intro: entry.intro,
    challenge: entry.challenge,
    solution: entry.solution,
    stack: entry.stack.map(({ label, value }) => ({ label, value })),
    stackTags: [...entry.stackTags],
    liveUrl: entry.liveUrl,
    cardImage: ASSET_BASE + entry.cardImage,
    screenshots: entry.screenshots.map(({ src, label, device }) => ({
      src: ASSET_BASE + src,
      label: label || undefined,
      device,
    })),
    featured: entry.featured,
    ...hero,
  };
}

/** All portfolio projects, in editor-defined order (the `order` field, lowest first).
 * Cached per request so a page that reads this and `getProject` for the same
 * slug (e.g. the case-study page building its "related" list) doesn't re-read
 * and re-parse that project's file twice. */
export const getAllProjects = cache(async (): Promise<PortfolioProject[]> => {
  const entries = await reader.collections.portfolio.all();
  return entries
    .map(({ slug, entry }) => ({ slug, entry, order: entry.order ?? 0 }))
    .sort((a, b) => a.order - b.order)
    .map(({ slug, entry }) => toProject(slug, entry));
});

/** One project, or null if the slug doesn't exist. Cached per request/slug. */
export const getProject = cache(async (slug: string): Promise<PortfolioProject | null> => {
  const entry = await reader.collections.portfolio.read(slug);
  if (!entry) return null;
  return toProject(slug, entry);
});
