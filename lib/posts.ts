import "server-only";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

/** Server-side access to the Keystatic blog content (content/posts/*). */

export interface PostMeta {
  slug: string;
  title: string;
  publishedDate: string;
  excerpt: string;
  tags: string[];
  author: string;
  readingMinutes: number;
}

const reader = createReader(process.cwd(), keystaticConfig);

const WORDS_PER_MINUTE = 220;

function countWords(node: unknown): number {
  if (node == null) return 0;
  if (typeof node === "string") return node.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(node)) return node.reduce((sum: number, child) => sum + countWords(child), 0);
  if (typeof node === "object") {
    const record = node as Record<string, unknown>;
    return countWords(record.children) + countWords(record.attributes ? (record.attributes as Record<string, unknown>).content : undefined);
  }
  return 0;
}

/** Published posts, newest first. Drafts are excluded. */
export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await reader.collections.posts.all();
  const posts = await Promise.all(
    entries
      .filter(entry => !entry.entry.draft)
      .map(async entry => {
        const content = await entry.entry.content();
        const words = countWords(content.node);
        return {
          slug: entry.slug,
          title: entry.entry.title,
          publishedDate: entry.entry.publishedDate ?? "1970-01-01",
          excerpt: entry.entry.excerpt,
          tags: [...entry.entry.tags],
          author: entry.entry.author,
          readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        };
      })
  );
  return posts.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

/** One post with its renderable Markdoc node, or null. Drafts return null. */
export async function getPost(slug: string) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry || entry.draft) return null;
  const content = await entry.content();
  const words = countWords(content.node);
  return {
    slug,
    title: entry.title,
    publishedDate: entry.publishedDate ?? "1970-01-01",
    excerpt: entry.excerpt,
    tags: [...entry.tags],
    author: entry.author,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    node: content.node,
  };
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
