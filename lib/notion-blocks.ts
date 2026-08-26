import "server-only";

/**
 * Minimal Notion block fetcher for rendering job descriptions on our own
 * pages. The legacy site did the same thing through its jobs.corplabs.co
 * proxy; keeping the JD on corplabs.co means candidates never leave the site
 * and the role's keywords are indexable.
 *
 * Only the block types that actually appear in our JDs are modelled — anything
 * unknown renders as nothing rather than breaking the page.
 */

const NOTION_VERSION = "2022-06-28";
const NOTION_API = "https://api.notion.com/v1";

/** Notion signs file URLs for ~1 hour, so pages holding them refresh sooner. */
export const JOB_PAGE_REVALIDATE = 1800;

/**
 * Cache tag on every jobs-related Notion fetch. POST /api/revalidate clears it
 * so an edit in Notion can be published immediately instead of waiting out the
 * window — invalidating the pages alone would not help, since they would just
 * re-render against the still-cached Notion response.
 */
export const JOBS_CACHE_TAG = "notion-jobs";

export interface RichTextItem {
  plain_text?: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
  };
}

interface TextPayload {
  rich_text?: RichTextItem[];
}

export interface NotionBlock {
  id: string;
  type: string;
  has_children?: boolean;
  /** populated by getBlocks for the types we recurse into */
  children?: NotionBlock[];
  paragraph?: TextPayload;
  heading_1?: TextPayload;
  heading_2?: TextPayload;
  heading_3?: TextPayload;
  bulleted_list_item?: TextPayload;
  numbered_list_item?: TextPayload;
  quote?: TextPayload;
  to_do?: TextPayload & { checked?: boolean };
  toggle?: TextPayload;
  callout?: TextPayload & { icon?: { emoji?: string } };
  code?: TextPayload & { language?: string };
  image?: {
    caption?: RichTextItem[];
    external?: { url?: string };
    file?: { url?: string };
  };
  bookmark?: { url?: string; caption?: RichTextItem[] };
}

/** Blocks whose children carry meaning we render (nested lists, toggles). */
const RECURSE_INTO = new Set([
  "bulleted_list_item",
  "numbered_list_item",
  "toggle",
  "quote",
  "callout",
]);

const MAX_DEPTH = 3;

async function fetchChildren(
  blockId: string,
  apiKey: string,
  depth: number
): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const url = new URL(`${NOTION_API}/blocks/${blockId}/children`);
    url.searchParams.set("page_size", "100");
    if (cursor) url.searchParams.set("start_cursor", cursor);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
      },
      next: { revalidate: JOB_PAGE_REVALIDATE, tags: [JOBS_CACHE_TAG] },
    });
    if (!res.ok) {
      console.error("Notion blocks fetch failed:", res.status);
      return blocks;
    }

    const data = (await res.json()) as {
      results?: NotionBlock[];
      next_cursor?: string | null;
      has_more?: boolean;
    };
    blocks.push(...(data.results ?? []));
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  if (depth < MAX_DEPTH) {
    await Promise.all(
      blocks
        .filter(b => b.has_children && RECURSE_INTO.has(b.type))
        .map(async b => {
          b.children = await fetchChildren(b.id, apiKey, depth + 1);
        })
    );
  }

  return blocks;
}

/** Every block of a Notion page, nested lists included. [] on any failure. */
export async function getBlocks(pageId: string, apiKey: string): Promise<NotionBlock[]> {
  try {
    return await fetchChildren(pageId, apiKey, 0);
  } catch (err) {
    console.error("Notion blocks fetch errored:", err);
    return [];
  }
}

function textOf(block: NotionBlock): RichTextItem[] {
  const payload = (block as unknown as Record<string, TextPayload | undefined>)[block.type];
  return payload?.rich_text ?? [];
}

/** Flattened plain text — used for meta descriptions and JobPosting JSON-LD. */
export function blocksToPlainText(blocks: NotionBlock[]): string {
  const lines: string[] = [];
  const walk = (list: NotionBlock[]) => {
    for (const block of list) {
      const text = textOf(block)
        .map(t => t.plain_text ?? "")
        .join("")
        .trim();
      if (text) lines.push(text);
      if (block.children?.length) walk(block.children);
    }
  };
  walk(blocks);
  return lines.join("\n");
}

const LIST_TAGS: Record<string, "ul" | "ol"> = {
  bulleted_list_item: "ul",
  numbered_list_item: "ol",
  to_do: "ul",
};

export type RenderNode =
  | { kind: "block"; block: NotionBlock }
  | { kind: "list"; tag: "ul" | "ol"; itemType: string; items: NotionBlock[] };

/**
 * Collapses runs of same-typed list items into single list nodes, so the JD
 * renders real <ul>/<ol> elements instead of a stream of orphaned <li>s.
 */
export function groupBlocks(blocks: NotionBlock[]): RenderNode[] {
  const nodes: RenderNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const tag = LIST_TAGS[blocks[i].type];
    if (!tag) {
      nodes.push({ kind: "block", block: blocks[i] });
      i += 1;
      continue;
    }

    const itemType = blocks[i].type;
    const items: NotionBlock[] = [];
    while (i < blocks.length && blocks[i].type === itemType) {
      items.push(blocks[i]);
      i += 1;
    }
    nodes.push({ kind: "list", tag, itemType, items });
  }

  return nodes;
}
