import type { Metadata } from "next";
import { site } from "@/data/site";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

/**
 * Open Graph fields every page shares. Next merges metadata one key deep, so a
 * page that sets `openGraph` at all replaces the layout's object wholesale —
 * which is how inner pages ended up advertising the homepage as their og:url
 * and blog posts shipped none. Every route builds its metadata through
 * pageMetadata() so these are always spread back in.
 */
const ogDefaults = {
  siteName: site.name,
  locale: "en_MY",
  type: "website",
} as const;

/** Past this, Google truncates the title in results. */
export const TITLE_MAX = 60;

/** The site-wide card from app/opengraph-image.tsx, which exports these. */
export const OG_IMAGE = {
  url: "/opengraph-image",
  alt: `${site.name} — ${site.tagline}`,
  width: 1200,
  height: 630,
  type: "image/png",
} as const;

/**
 * Metadata for one route. `path` drives both the canonical and og:url so the
 * two can't drift apart. og:title and og:description are left unset unless a
 * page passes them — Next fills them from `title` and `description`.
 *
 * The site-wide card is spelled out rather than inherited: a file-based
 * opengraph-image only attaches at its own segment, and a page's `openGraph`
 * replaces whatever it resolved to. A route with its own opengraph-image file
 * passes `ownImage` so Next can attach it — Next skips the file when a page
 * declares `images` itself.
 */
export function pageMetadata({
  path,
  title,
  description,
  openGraph,
  ownImage = false,
}: {
  path: string;
  title: Metadata["title"];
  description: string;
  openGraph?: Partial<OpenGraph>;
  ownImage?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...ogDefaults,
      ...(ownImage ? {} : { images: [OG_IMAGE] }),
      ...openGraph,
      url: path,
    } as OpenGraph,
  };
}

/**
 * The layout template appends " | Corplabs". Keep it while the result still
 * fits in search results; drop it once it would push the page's own words past
 * the cut — Google already shows the site name above each result.
 */
export function fitTitle(title: string): Metadata["title"] {
  return `${title} | ${site.name}`.length <= TITLE_MAX ? title : { absolute: title };
}
