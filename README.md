# Corplabs — corplabs.co

Marketing site for Corplabs and its four product pillars: **Corpi** (AI
WhatsApp sales agents), **Corpcode** (custom software builds), **Corprise**
(subscription-priced Odoo ERP), and **Corpsite** (website packages).

## Stack

- [Next.js](https://nextjs.org) (App Router, static-first) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in `app/globals.css`
- [Motion](https://motion.dev) for animation
- [Vitest](https://vitest.dev) for tests

## Getting started

```sh
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```sh
npm run build      # production build
npm test           # vitest
npm run typecheck  # tsc --noEmit
```

## Project layout

```
app/          # routes (App Router) — one folder per page
components/   # shared React components (layout/, ui/, per-pillar sections)
data/         # ALL user-facing copy, tiers, FAQs — typed TS modules
lib/          # framework-agnostic logic (e.g. corpriseScore) + tests
public/       # static assets
```

Two conventions carried over from the previous site — keep them:

1. **No inline copy in components.** Every user-facing string lives in
   `data/*.ts` so content edits and a future i18n pass never touch markup.
2. **Business logic stays in `lib/` with tests.** UI components consume it.

## History

The site was rebuilt from Gatsby 4 to Next.js in five phases; see
[`docs/REVAMP_PLAN.md`](docs/REVAMP_PLAN.md) for the record. The old Gatsby app
has been removed (it remains in git history and on the pre-revamp `develop`
branch).

## Analytics

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_ID` is set (see
`.env.example`). Leave it unset for local/dev builds.
