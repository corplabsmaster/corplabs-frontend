export const dynamic = "force-static";

import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

const escapeXml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export async function GET() {
  const posts = await getAllPosts();
  const items = posts
    .map(
      post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${site.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.publishedDate}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${site.name} Blog`)}</title>
    <link>${site.url}/blog</link>
    <description>Practical guides from the Corplabs team — MyInvois e-invoicing, Odoo ERP, WhatsApp AI agents, and building software for Southeast Asian businesses.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
