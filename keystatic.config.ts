import { collection, config, fields } from "@keystatic/core";

/**
 * Keystatic — git-based CMS for the blog. Content lives in the repo under
 * content/posts/ as Markdoc + YAML frontmatter, so posts ship as fully
 * static pages (good for SEO) and every edit is a commit.
 *
 * Storage: `github` — the admin at /keystatic authenticates against GitHub and
 * writes through the API, so it works on the deployed site (a serverless
 * filesystem is read-only, which is why `local` mode showed an empty
 * collection in production). Needs four env vars; see .env.example for the
 * one-time setup wizard.
 *
 * Note this only affects *editing*. Rendering still reads the checked-out
 * files at build time via createReader in lib/posts.ts, so /blog is unchanged.
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
    brand: { name: "Corplabs Blog" },
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
  },
});
