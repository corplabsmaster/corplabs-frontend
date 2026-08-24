import { collection, config, fields } from "@keystatic/core";

/**
 * Keystatic — git-based CMS for the blog. Content lives in the repo under
 * content/posts/ as Markdoc + YAML frontmatter, so posts ship as fully
 * static pages (good for SEO) and every edit is a commit.
 *
 * Storage: `local` writes to the filesystem — use it in dev (`npm run dev`,
 * then open /keystatic). To let teammates edit from the deployed site,
 * switch to GitHub mode:
 *   storage: { kind: "github", repo: "corplabs-co/corplabs-frontend" }
 * and follow https://keystatic.com/docs/github-mode (creates a GitHub App;
 * writers get auth'd edits in production, each save is a commit/PR).
 */
export default config({
  storage: { kind: "local" },
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
