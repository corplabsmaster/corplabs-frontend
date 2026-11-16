import { describe, expect, it } from "vitest";
import { getAllPosts, getPost, toPostVideo } from "@/lib/posts";

describe("toPostVideo", () => {
  it("is null when the frontmatter has no video (the reader returns empty fields)", () => {
    expect(toPostVideo(undefined)).toBeNull();
    expect(toPostVideo({ src: "", poster: "", duration: null })).toBeNull();
    expect(toPostVideo({ src: "   ", poster: "/p.jpg", duration: 30 })).toBeNull();
  });

  it("keeps src, poster and a positive integer duration", () => {
    expect(toPostVideo({ src: "/v.mp4", poster: "/p.jpg", duration: 30 })).toEqual({
      src: "/v.mp4",
      poster: "/p.jpg",
      duration: 30,
    });
    expect(toPostVideo({ src: "/v.mp4", poster: null, duration: 0 })).toEqual({
      src: "/v.mp4",
      poster: "",
      duration: null,
    });
  });
});

/**
 * Re-reads every real post through Keystatic, so a `video` block that points at
 * a file that was never added fails here rather than as a broken player.
 */
describe("post videos", () => {
  it("every post reads, and any video points at files that exist in public/", async () => {
    const { existsSync } = await import("node:fs");
    const path = await import("node:path");
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(0);

    for (const meta of posts) {
      const post = await getPost(meta.slug);
      expect(post, meta.slug).not.toBeNull();
      if (!post?.video) continue;
      for (const file of [post.video.src, post.video.poster]) {
        if (!file.startsWith("/")) continue;
        expect(existsSync(path.join(process.cwd(), "public", file)), `${meta.slug}: ${file}`).toBe(true);
      }
    }
  });
});
