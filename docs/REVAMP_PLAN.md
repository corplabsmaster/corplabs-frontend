# Site revamp plan

Objective: rebuild corplabs.co on a modern, single-system stack and clean up
the design. **Status: complete** — all five phases merged to `master` and the
old Gatsby app under `legacy/` has been removed at cutover (preserved in git
history and on the pre-revamp `develop` branch).

## Branch strategy

- **`master`** — revamp PRs target `master` directly (Phases 3+). Phases 1–2
  already landed there via PR #3.
- **`claude/codebase-overview-bkj4m9`** — the working feature branch.
- `develop` exists but is a stale pre-revamp Gatsby branch; it is **not** used
  for the revamp.

## Stack decisions

| Concern    | Old (Gatsby site)                                   | New                              |
| ---------- | --------------------------------------------------- | -------------------------------- |
| Framework  | Gatsby 4 + React 17                                  | Next.js 16 (App Router) + React 19, static-first |
| Language   | TypeScript 4.2 (loose)                               | TypeScript 6, `strict`           |
| Styling    | Tailwind 3 **+ antd + MUI + Bootstrap + styled-components + Emotion** | Tailwind v4 only; tokens in `app/globals.css` |
| Components | Mixed libraries                                      | Own `components/ui` primitives (shadcn-style, Radix where needed) |
| Animation  | Per-page IntersectionObserver + CSS                  | Motion + one shared `Reveal` component |
| Fonts      | Local Work Sans variants                             | `next/font` — Work Sans (body), Space Grotesk (display) |
| Testing    | Jest 26 + ts-jest                                    | Vitest                           |
| Dead code  | Apollo carts/wishlists, cookie auth, Redux, socket.io, Stripe, moment | Not ported |

Design direction: **modernized dark theme with the existing brand purple
`#5300EA`** (token scale `brand-50…950`), consistent type scale and spacing,
subtle motion.

## What gets ported as-is

- `data/*.ts` — the typed content layer (tiers, FAQs, comparisons, copy).
- `lib/corpriseScore.ts` + tests — scorecard scoring logic.
- Page copy and information architecture (same URLs, no redirects needed).

## Phases

- [x] **Phase 1 — Foundation.** Move Gatsby app to `legacy/`, scaffold
      Next.js + Tailwind v4, design tokens, base header/footer, placeholder
      homepage, port data layer + scorecard tests, green build.
- [x] **Phase 2 — Design system.** `components/ui` primitives (Button,
      Card/LinkCard, SectionHeading, FaqAccordion, CtaBand, Reveal), header
      with mobile nav + active-link state, homepage rebuilt on the primitives.
- [x] **Phase 3 — Pages.** /solutions, /corpi, /corpcode, /corprise,
      /corpsite, about, contact, privacy, 404 — all ported to the new design
      system with copy in `data/*.ts`. `/blogs` was intentionally dropped: the
      old page was a single stale job posting, not a blog (revisit in Phase 5
      if a real blog is wanted). Decorative SVG illustrations from the old
      hero sections (Corpi phone mock, Corprise dashboard) were not ported.
- [ ] **Phase 4 — Wizards.** Corprise ScorecardWidget, Corpsite 6-step
      PlanSelector (URL state), Corpcode TierFinder — as client components.
- [x] **Phase 5 — Launch.** SEO parity: per-page canonicals, homepage
      Organization JSON-LD, `sitemap.ts`, `robots.ts`, `manifest.ts`,
      OpenGraph/Twitter metadata + a build-time generated OG image
      (`app/opengraph-image.tsx`). GA4 via `@next/third-parties`, gated on
      `NEXT_PUBLIC_GA_ID`. Cutover: `legacy/` deleted. Optional follow-up: a
      real blog if `/blogs` is ever wanted back.

## URL parity checklist (from the old site)

`/` `/solutions` `/corpi` `/corpcode` `/corprise` `/corpsite` `/about`
`/contact` `/blogs` `/privacy` `/404` — plus `/coming-soon` and `/maintence`
(intentionally dropped; the misspelled route was unlinked).

## Phase 6 — Homepage redesign (Claude Design handoff)

Implemented the "Corplabs Landing" prototype on the attached Corplabs Design
System: global token retheme (deep navy-black surfaces, indigo-tinted
neutrals mapped over the zinc utilities, Inter display, cyan→lilac gradient
accent), capsule nav header, violet footer with D-U-N-S line, and a new
homepage — hero with floating planet, tabbed product showcase (live Corpi
chat simulation + three 3-question mini finders that link to the full
wizards), services grid, process steps, HiTerra flagship band (green is
HiTerra-only per the DS), collab/culture, job vacancies, and a native
contact form. Corpi pricing follows the live site, not the prototype.

Contact form → Notion: POST /api/contact writes to the "Website Inquiries"
database via the Notion REST API (honeypot + rate limit; graceful
email-fallback 503 until NOTION_API_KEY / NOTION_INQUIRIES_DB_ID are set).

## Phase 7 — Full-site rebuild from the latest prototype

The second Claude Design handoff ("Corplabs Site.dc.html") gave every marketing
page its own spine (not the shared card-stack) and a new animated hero. Built:

- **Animated hero** (`components/home/HeroOrbit.tsx`): the Corplabs mark orbits
  the "Idea / To / Reality" letterforms with the astronaut drifting inside the
  ring — a self-contained rAF component that only re-renders its own subtree and
  is skipped under `prefers-reduced-motion`. Orbit geometry and letterform paths
  ported verbatim from the export; astronaut art optimized 2.2 MB PNG → 95 KB webp.
- **Six rebuilt pages**, each to its prototype spine:
  - `/solutions` — hero + price floors, interactive problem router, side-by-side
    ledger (mobile-scrollable), one-team strip, CTA. Replaces the old card grid.
  - `/corpi` — hero with live chat demo + stats, features, onboarding, pricing
    (RM 300/500/800), FAQ, CTA. The chat player was extracted to a shared
    `components/corpi/ChatDemo.tsx` used by both this page and the home tabs.
  - `/corpcode` — spec sheet, four tiers, 5-question finder, process, tech stack, FAQ.
  - `/corprise` — RM 80k-vs-subscription comparison, trust strip, 3-question
    scorecard (derived from the tested `lib/corpriseScore.ts`), six-tier pricing
    table, MyInvois, process, Founding Five, FAQ.
  - `/corpsite` — hero ladder, 5-step plan selector (NGO + budget-fit logic),
    six-tier table, add-ons, NGO band, FAQ.
  - `/about` — timeline, mission/vision, values, culture band, HiTerra flagship, CTA.
- **Header**: capsule nav now leads with Home + a divider. **Footer**: 4 columns
  (Solutions / Company / Services / Contact) + KL line.
- Corpi pricing follows the live site throughout (the prototype's RM 4,500 /
  RM 1,800–3,500 numbers were stale and intentionally not used).

Note: the prototype's `culture-bg.svg` shipped without its class definitions
(the export dropped the stylesheet), so the About culture band reuses the
astronaut motif with a violet glow instead — consistent with the hero.

Verified: tsc clean, 15/15 tests (Corprise scoring preserved), build (17 routes)
green, zero console errors, and all four interactive widgets (problem router,
tier finder, plan selector, scorecard) driven in headless Chromium.

## Phase 8 — Multi-currency pricing + changelog with old-site archive

**Currency.** All prices are authored in MYR (the invoicing currency) and
display-converted client-side. USD is the default; edge middleware sets a geo
cookie so Malaysian visitors see MYR; a header switcher (USD / MYR / EUR / SGD,
persisted in localStorage) always wins. Conversions use fixed indicative rates
in `lib/currency.ts` (labeled "indicative — invoiced in MYR"). `<Price rm=...>`
wraps every Corplabs price render across all pages, incl. FAQ answers; the
Corpi demo-chat roleplay prices intentionally stay in RM. The objective:
signal clearly that Corplabs takes overseas projects.

**Changelog + archive.** `/changelog` tells the site's version story
(v1 Gatsby era → v2 Next rebuild → v3 design system → v4 full rebuild) with
screenshots, and links to a browsable frozen snapshot of the original Gatsby
homepage at `/archive/v1/` — reconstructed from git history (the live site was
unreachable from the sandbox), styled by CSS compiled from the original
tailwind.config.js so it's fully self-contained, with a slim "Archived" banner.
The old Notion-driven job cards render as their static fallbacks.

Verified: 25/25 tests (10 new currency tests), build green, and in-browser:
default USD, live switching, cross-page persistence, geo-cookie respected,
demo chat unconverted, FAQ conversion, archive styled with 23/23 images.
