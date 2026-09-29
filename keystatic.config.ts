import { collection, config, fields } from "@keystatic/core";
import { pillars } from "@/data/site";

/** The two portfolio engagement kinds — also the source for data/portfolio.ts's
 * kindLabel, so the CMS option label and the site's display label can't drift. */
export const projectKinds = [
  { label: "New website build", value: "build" },
  { label: "Website revamp", value: "revamp" },
] as const;

/**
 * Keystatic — git-based CMS for the blog and the portfolio. Content lives in
 * the repo (content/posts/ as Markdoc + YAML frontmatter, content/portfolio/
 * as plain YAML — no long-form body, every field is structured), so pages
 * ship fully static (good for SEO) and every edit is a commit.
 *
 * Storage: `github` — the admin at /keystatic authenticates against GitHub and
 * writes through the API, so it works on the deployed site (a serverless
 * filesystem is read-only, which is why `local` mode showed an empty
 * collection in production). Needs four env vars; see .env.example for the
 * one-time setup wizard.
 *
 * Note this only affects *editing*. Rendering still reads the checked-out
 * files at build time via createReader (lib/posts.ts, lib/portfolio.ts), so
 * /blog and /portfolio are unchanged either way.
 *
 * To edit offline against the filesystem instead, swap the storage block for
 * `{ kind: "local" }` and run `npm run dev` — no credentials needed.
 */
export default config({
  storage: {
    kind: "github",
    repo: { owner: "corplabs-co", name: "corplabs-frontend" },
  },
  ui: {
    brand: { name: "Corplabs" },
  },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
        }),
        publishedDate: fields.date({
          label: "Published date",
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description:
            "1–2 sentences shown on the blog index and used as the meta description (aim for under 160 characters).",
          multiline: true,
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: props => props.value || "Tag",
        }),
        author: fields.text({
          label: "Author",
          defaultValue: "Corplabs Team",
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Drafts never appear on the live site.",
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
    portfolio: collection({
      label: "Portfolio projects",
      slugField: "name",
      path: "content/portfolio/*",
      entryLayout: "form",
      format: "yaml",
      schema: {
        name: fields.slug({
          name: {
            label: "Project name",
            description: 'Shown as the title everywhere, e.g. "Montesofa".',
            validation: { isRequired: true },
          },
        }),
        order: fields.integer({
          label: "Sort order",
          description: "Lower shows first on the /portfolio grid.",
          defaultValue: 0,
        }),
        pillar: fields.select({
          label: "Pillar",
          options: pillars.map(p => ({ label: p.name, value: p.id })),
          defaultValue: "corpsite",
        }),
        industry: fields.text({
          label: "Industry",
          description: 'One plain word, e.g. "Furniture" — no "/" or "&".',
          validation: { isRequired: true },
        }),
        companyType: fields.text({
          label: "Company type",
          description: 'How the client operates, e.g. "Furniture Manufacturer".',
          validation: { isRequired: true },
        }),
        kind: fields.select({
          label: "Engagement",
          options: projectKinds,
          defaultValue: "build",
        }),
        summary: fields.text({
          label: "Summary",
          description: "One sentence, shown on the grid card.",
          multiline: true,
          validation: { isRequired: true },
        }),
        intro: fields.text({
          label: "Intro",
          description: "The lead narrative on the case-study page.",
          multiline: true,
          validation: { isRequired: true },
        }),
        challenge: fields.text({
          label: "The challenge",
          description: "The specific problem to solve — concrete, not a restatement of the intro.",
          multiline: true,
          validation: { isRequired: true },
        }),
        solution: fields.text({
          label: "The solution",
          description: "What we actually did about it.",
          multiline: true,
          validation: { isRequired: true },
        }),
        stack: fields.array(
          fields.object({
            label: fields.text({
              label: "Label",
              description: 'e.g. "Platform"',
              validation: { isRequired: true },
            }),
            value: fields.text({
              label: "Value",
              description: 'e.g. "Next.js + Payload CMS"',
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Stack",
            description: "Rows shown in the fact box on the case-study page.",
            itemLabel: props => props.fields.label.value || "Stack row",
          }
        ),
        stackTags: fields.array(fields.text({ label: "Tag", validation: { isRequired: true } }), {
          label: "Stack tags",
          description: 'Short chips, e.g. "Next.js".',
          itemLabel: props => props.value || "Tag",
        }),
        liveUrl: fields.url({
          label: "Live site URL",
          validation: { isRequired: true },
        }),
        cardImage: fields.image({
          label: "Card image",
          description: "Full-bleed grid-card thumbnail — a business/product photo, never a UI screenshot.",
          directory: "public/portfolio",
          publicPath: "/portfolio/",
          validation: { isRequired: true },
        }),
        hero: fields.conditional(
          fields.select({
            label: "Hero type",
            options: [
              { label: "Video", value: "video" },
              { label: "Image", value: "image" },
            ],
            defaultValue: "image",
          }),
          {
            video: fields.object({
              heroVideo: fields.file({
                label: "Hero video (mp4)",
                directory: "public/portfolio",
                publicPath: "/portfolio/",
                validation: { isRequired: true },
              }),
              heroPoster: fields.image({
                label: "Hero poster (shown before the video loads)",
                directory: "public/portfolio",
                publicPath: "/portfolio/",
              }),
            }),
            image: fields.image({
              label: "Hero image",
              directory: "public/portfolio",
              publicPath: "/portfolio/",
              validation: { isRequired: true },
            }),
          }
        ),
        screenshots: fields.array(
          fields.object({
            src: fields.image({
              label: "Screenshot",
              directory: "public/portfolio",
              publicPath: "/portfolio/",
              validation: { isRequired: true },
            }),
            label: fields.text({
              label: "Label (optional)",
              description: "Alt-text detail only — not shown in the UI.",
            }),
            device: fields.select({
              label: "Device frame",
              options: [
                { label: "Desktop", value: "desktop" },
                { label: "Tablet", value: "tablet" },
                { label: "Mobile", value: "mobile" },
              ],
              defaultValue: "desktop",
            }),
          }),
          {
            label: "Screenshots",
            itemLabel: props => props.fields.label.value || props.fields.device.value,
          }
        ),
        featured: fields.checkbox({
          label: "Featured",
          defaultValue: false,
        }),
      },
    }),
  },
});
