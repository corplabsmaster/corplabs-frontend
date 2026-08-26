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

## Notion integrations

One internal Notion integration powers both pipelines (create it at
notion.so/profile/integrations, share each database with it, set the env vars):

- **Contact form** → `POST /api/contact` writes to the *Website Inquiries*
  database (`NOTION_API_KEY` + `NOTION_INQUIRIES_DB_ID`). Falls back to a
  polite "email us" message until configured.
- **Careers** → the homepage `#careers` section and `/careers` pull the jobs
  database (`NOTION_JOBS_DB_ID`), rows where `Status = Open`. Post or close a
  role in Notion — no deploy. Falls back to the static list in `data/home.ts`
  until configured.

  Each open role also gets `/careers/<slug>`, rendering the JD from the Notion
  page body with `JobPosting` structured data, so the role is readable on
  corplabs.co and eligible for Google Jobs. Roles added after a deploy render
  on first request. An optional `Apply URL` column drives the apply buttons;
  without one they point at `/contact?intent=careers`. Note that any row set
  to `Open` is published — stale rows are visible roles.

## Blog (Keystatic)

Posts live in `content/posts/` as Markdoc files — every edit is a commit, and
posts ship as fully static pages. The blog surfaces at `/blog`, with per-post
Article JSON-LD, RSS at `/blog/rss.xml`, and sitemap entries generated
automatically.

The admin is at `/keystatic` and runs in **GitHub mode**: editors sign in with
GitHub and each save commits to this repo, so it works on the deployed site as
well as locally. It needs the four `KEYSTATIC_*` env vars — `.env.example` has
the one-time setup wizard, which must be run locally because GitHub App
creation is deliberately dev-only. Only people with write access to the repo
can publish.

Editing and rendering are independent: the admin talks to the GitHub API, while
pages are built from the checked-out files via `createReader` in `lib/posts.ts`.
So you can also just edit the `.mdoc` files in your editor and push — or swap
`keystatic.config.ts` to `storage: { kind: "local" }` to run the editor against
the filesystem with no credentials.
