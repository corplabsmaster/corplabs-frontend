# Site revamp plan

Objective: rebuild corplabs.co on a modern, single-system stack and clean up
the design. The old Gatsby app lives in `legacy/` as a porting reference and
is deleted at cutover.

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
- [ ] **Phase 2 — Design system.** `components/ui` primitives (Button,
      Card, SectionHeading, FaqAccordion, CtaBand, Reveal), full header with
      mobile nav + Solutions dropdown, polished footer.
- [ ] **Phase 3 — Pages.** Home, /solutions, /corpi, /corpcode, /corprise,
      /corpsite, then about/contact/privacy/404. One PR per page or pillar.
- [ ] **Phase 4 — Wizards.** Corprise ScorecardWidget, Corpsite 6-step
      PlanSelector (URL state), Corpcode TierFinder — as client components.
- [ ] **Phase 5 — Launch.** SEO parity (JSON-LD, sitemap, robots,
      canonicals), GA4, redirect audit, production deploy, delete `legacy/`.

## URL parity checklist (from the old site)

`/` `/solutions` `/corpi` `/corpcode` `/corprise` `/corpsite` `/about`
`/contact` `/blogs` `/privacy` `/404` — plus `/coming-soon` and `/maintence`
(intentionally dropped; the misspelled route was unlinked).
