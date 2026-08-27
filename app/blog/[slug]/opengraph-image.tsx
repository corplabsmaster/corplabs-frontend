import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { getAllPosts, getPost } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — blog post`;

/**
 * Per-post share card, generated at build time.
 *
 * Without this every post inherited the site-wide card, so a MyInvois piece
 * and an Odoo piece produced an identical preview on LinkedIn and WhatsApp —
 * which is where this audience actually shares links, and where the preview
 * image is doing the work of an ad.
 *
 * Generated rather than hand-made on purpose: a card per post is recurring
 * work that drifts in style and eventually gets forgotten, and a post shipped
 * without one silently falls back to the generic card again.
 */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

/** Long titles get smaller type rather than a clipped card. */
function titleSize(title: string): number {
  if (title.length <= 38) return 74;
  if (title.length <= 58) return 62;
  return 52;
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  // A draft or an unknown slug still has to render something rather than fail
  // the build; the generic line is the same one the blog index leads with.
  const title = post?.title ?? "Notes from the workshop";
  const tag = post?.tags[0];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(1000px 500px at 50% -10%, #2b0a70 0%, #07070c 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{ width: 40, height: 40, borderRadius: 11, background: "#5300ea" }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.4 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 26, color: "#8f7ad6" }}>· Blog</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize(title),
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.6,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {tag && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#c9b6ff",
                border: "2px solid #4a2a9e",
                borderRadius: 999,
                padding: "8px 22px",
              }}
            >
              {tag}
            </div>
          )}
          <div style={{ fontSize: 24, color: "#8f7ad6" }}>corplabs.co/blog</div>
        </div>
      </div>
    ),
    size
  );
}
