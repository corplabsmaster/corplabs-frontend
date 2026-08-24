/**
 * /changelog — the story of how corplabs.co evolved, newest first.
 * Version numbers match the repo's archive branches: the hand-built static
 * site is preserved on `protected/v1`, the Gatsby site on `protected/v2`
 * (also browsable at /archive/v2/).
 */

export const changelogHero = {
  eyebrow: "Changelog",
  title: { plain: "How this site ", gradient: "got here." },
  lede: "We build our own site the way we build yours — in the open, and we keep the old versions around. Here's every major release, and a door back to the ones that started it.",
};

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: string[];
  /** optional screenshot under /public */
  image?: string;
  imageAlt?: string;
  /** primary link shown as a button (e.g. the live site or the archive) */
  link?: { label: string; href: string; external?: boolean };
  current?: boolean;
}

export const changelog: ChangelogEntry[] = [
  {
    version: "v5.0",
    date: "August 2026",
    title: "The full-site rebuild",
    summary:
      "Every marketing page rebuilt to its own purpose-made layout, fronted by a new animated hero — with prices in your currency and a blog to write from.",
    changes: [
      "Animated hero: the Corplabs mark orbiting “Idea · To · Reality”, astronaut inside the ring",
      "Distinct spines for Solutions, Corpi, Corpcode, Corprise, Corpsite and About",
      "Multi-currency pricing — USD by default, switch to MYR / EUR / SGD",
      "Live product demos: the Corpi WhatsApp agent and per-pillar tier finders",
      "Careers pulled live from Notion; a Keystatic-powered blog for the long reads",
    ],
    current: true,
    image: "/changelog/v5.webp",
    imageAlt: "The current Corplabs homepage",
    link: { label: "You're looking at it →", href: "/" },
  },
  {
    version: "v4.0",
    date: "July 2026",
    title: "New design system + homepage",
    summary:
      "A single, considered visual language — deep indigo surfaces, the cyan-to-lilac accent, and a tabbed product showcase.",
    changes: [
      "Corplabs Design System tokens applied site-wide",
      "Tabbed “Four Products, One Team” showcase with live widgets",
      "Contact form wired to a Notion inbox, replacing the old embed",
      "HiTerra flagship, services, process and careers sections",
    ],
  },
  {
    version: "v3.0",
    date: "July 2026",
    title: "Rebuilt on Next.js",
    summary:
      "Migrated off Gatsby onto a modern, single-stack foundation — dropping four overlapping UI libraries for one.",
    changes: [
      "Next.js 16 (App Router) + React 19 + TypeScript strict",
      "Tailwind v4 only — Ant Design, MUI, Bootstrap and Emotion removed",
      "Build memory down from ~8 GB to seconds; every page static",
      "Typed content layer and tested pricing logic carried over",
    ],
  },
  {
    version: "v2.0",
    date: "2024 – 2026",
    title: "The Gatsby era",
    summary:
      "The React site that carried the brand for two years — where the four pillars, the astronaut, and the brand purple took the shape we still build on. Preserved so it isn't lost.",
    changes: [
      "Gatsby 4 + React 17, the first public four-pillar lineup",
      "Careers pulled live from a Notion database",
      "The astronaut hero and violet brand that we still build on",
      "Source frozen on the protected/v2 branch",
    ],
    image: "/changelog/v2.webp",
    imageAlt: "The Gatsby-era Corplabs homepage",
    link: { label: "Browse the archived site →", href: "/archive/v2/", external: true },
  },
  {
    version: "v1.0",
    date: "2023 – 2024",
    title: "The first corplabs.co",
    summary:
      "Where it all started: a hand-built static HTML site — every page written by hand, deployed with a shell script. Humble, fast, and honest.",
    changes: [
      "Plain HTML and CSS, no framework at all",
      "Careers, blog, case studies and pricing as hand-written pages",
      "Deployed with a single deploy.sh",
      "Source frozen on the protected/v1 branch",
    ],
    image: "/changelog/v1.webp",
    imageAlt: "The first hand-built Corplabs.co homepage",
    link: { label: "Browse the archived site →", href: "/archive/v1/", external: true },
  },
];
