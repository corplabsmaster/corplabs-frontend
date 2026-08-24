import "server-only";
import { jobs as staticJobs } from "@/data/home";

/**
 * Job postings pulled live from Notion — the modern version of the legacy
 * site's jobs.corplabs.co proxy (which fronted the Notion API for the same
 * purpose). Post a role in Notion (Status = Open) and it appears on the site
 * within an hour; no deploy needed.
 *
 * Works with either jobs board schema:
 *  - the original "Available Job Positions" database (5d1bdd35676d4c7aaa78d0e29a17dcde):
 *    Status (status type, "open"), Team (select), Location (multi-select),
 *    Priority (checkbox); the apply link is each row's public posting page.
 *  - the newer "Job Vacancies" database: Status (select, "Open"), Type,
 *    Location (text), Tags (multi-select), Apply URL, Order.
 *
 * Setup (see README): share the jobs database with the same internal
 * integration as the contact form, then set NOTION_API_KEY and
 * NOTION_JOBS_DB_ID. Until then — or if Notion is unreachable — the section
 * falls back to the static list in data/home.ts, so careers never breaks.
 */

export interface Job {
  team: string;
  title: string;
  thumb: string;
  type: string;
  location: string;
  monogram: string;
  tags: string[];
  href: string;
}

const NOTION_VERSION = "2022-06-28";
const FALLBACK_HREF = "/contact?intent=careers";

/** Card header gradients, cycled by row so the grid stays varied. */
const THUMBS = [
  "linear-gradient(135deg,#220066,#733FFF)",
  "linear-gradient(135deg,#2F027E,#5605FF)",
  "linear-gradient(135deg,#220066,#AA97FF)",
  "linear-gradient(135deg,#3C01A2,#8AD5FF)",
];

/** "Senior Java Backend" -> "SJ"; single word keeps its first two letters. */
function monogram(title: string): string {
  const words = title.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

interface RichText {
  plain_text?: string;
}

interface NotionPage {
  created_time?: string;
  /** set when the row's page is published to the web (corplabs.notion.site) */
  public_url?: string | null;
  properties?: {
    Name?: { title?: RichText[] };
    Team?: { select?: { name?: string } };
    Type?: { select?: { name?: string } };
    // "Job Vacancies" uses rich_text; "Available Job Positions" uses multi_select
    Location?: { rich_text?: RichText[]; multi_select?: { name?: string }[] };
    Tags?: { multi_select?: { name?: string }[] };
    "Apply URL"?: { url?: string | null };
    // select in the new board, status-type in the original board
    Status?: { select?: { name?: string }; status?: { name?: string } };
    Priority?: { checkbox?: boolean };
    Order?: { number?: number | null };
  };
}

const joinText = (parts?: RichText[]) =>
  (parts ?? []).map(t => t.plain_text ?? "").join("").trim();

export async function getJobs(): Promise<Job[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_JOBS_DB_ID;
  if (!apiKey || !dbId) return staticJobs;

  try {
    // No server-side filter/sort: the two boards type "Status" differently
    // (select vs status) and a filter on the wrong type is a 400. Filtering
    // locally keeps one code path that works against either database.
    const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 50 }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error("Notion jobs fetch failed:", res.status);
      return staticJobs;
    }

    const data = (await res.json()) as { results?: NotionPage[] };
    const rows = (data.results ?? [])
      .filter(page => {
        const status = page.properties?.Status;
        const name = (status?.select?.name ?? status?.status?.name ?? "").toLowerCase();
        return name === "open";
      })
      .sort((a, b) => {
        // Priority-flagged roles first, then explicit Order, then newest.
        const prio =
          Number(b.properties?.Priority?.checkbox ?? false) -
          Number(a.properties?.Priority?.checkbox ?? false);
        if (prio !== 0) return prio;
        const orderA = a.properties?.Order?.number ?? Number.MAX_SAFE_INTEGER;
        const orderB = b.properties?.Order?.number ?? Number.MAX_SAFE_INTEGER;
        if (orderA !== orderB) return orderA - orderB;
        return (b.created_time ?? "").localeCompare(a.created_time ?? "");
      });

    const jobs = rows
      .map((page, i): Job | null => {
        const p = page.properties ?? {};
        const title = joinText(p.Name?.title);
        if (!title) return null;
        const location =
          joinText(p.Location?.rich_text) ||
          (p.Location?.multi_select ?? [])
            .map(o => o.name ?? "")
            .filter(Boolean)
            .join(" · ") ||
          "Kuala Lumpur";
        return {
          title,
          team: p.Team?.select?.name ?? "Corplabs",
          type: p.Type?.select?.name ?? "Full-time",
          location,
          tags: (p.Tags?.multi_select ?? [])
            .map(t => t.name ?? "")
            .filter(Boolean)
            .slice(0, 4),
          // Apply URL column wins; otherwise the row's public posting page
          // (corplabs.notion.site/...), matching how the legacy site linked.
          href: p["Apply URL"]?.url || page.public_url || FALLBACK_HREF,
          monogram: monogram(title),
          thumb: THUMBS[i % THUMBS.length],
        };
      })
      .filter((j): j is Job => j !== null)
      .slice(0, 9);

    // An empty board usually means misconfiguration, not zero openings —
    // keep showing something rather than an empty section.
    return jobs.length > 0 ? jobs : staticJobs;
  } catch (err) {
    console.error("Notion jobs fetch errored:", err);
    return staticJobs;
  }
}
