import "server-only";
import { jobs as staticJobs } from "@/data/home";

/**
 * Job postings pulled live from the "Job Vacancies" Notion database — the
 * modern version of how the legacy Gatsby site sourced its careers section.
 * Post a role in Notion (Status = Open) and it appears on the site within an
 * hour; no deploy needed.
 *
 * Setup (see README): share the Job Vacancies database with the same internal
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

interface NotionPage {
  properties?: {
    Name?: { title?: { plain_text?: string }[] };
    Team?: { select?: { name?: string } };
    Type?: { select?: { name?: string } };
    Location?: { rich_text?: { plain_text?: string }[] };
    Tags?: { multi_select?: { name?: string }[] };
    "Apply URL"?: { url?: string | null };
  };
}

export async function getJobs(): Promise<Job[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_JOBS_DB_ID;
  if (!apiKey || !dbId) return staticJobs;

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Status", select: { equals: "Open" } },
        sorts: [{ property: "Order", direction: "ascending" }],
        page_size: 12,
      }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error("Notion jobs fetch failed:", res.status);
      return staticJobs;
    }

    const data = (await res.json()) as { results?: NotionPage[] };
    const jobs = (data.results ?? [])
      .map((page, i): Job | null => {
        const p = page.properties ?? {};
        const title = p.Name?.title?.map(t => t.plain_text ?? "").join("").trim();
        if (!title) return null;
        return {
          title,
          team: p.Team?.select?.name ?? "Corplabs",
          type: p.Type?.select?.name ?? "Full-time",
          location:
            p.Location?.rich_text?.map(t => t.plain_text ?? "").join("").trim() ||
            "Kuala Lumpur",
          tags: (p.Tags?.multi_select ?? [])
            .map(t => t.name ?? "")
            .filter(Boolean)
            .slice(0, 4),
          href: p["Apply URL"]?.url || FALLBACK_HREF,
          monogram: monogram(title),
          thumb: THUMBS[i % THUMBS.length],
        };
      })
      .filter((j): j is Job => j !== null);

    // An empty board usually means misconfiguration, not zero openings —
    // keep showing something rather than an empty section.
    return jobs.length > 0 ? jobs : staticJobs;
  } catch (err) {
    console.error("Notion jobs fetch errored:", err);
    return staticJobs;
  }
}
