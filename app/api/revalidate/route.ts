import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { JOBS_CACHE_TAG } from "@/lib/notion-blocks";

/**
 * Publish a Notion jobs edit immediately instead of waiting out the 30-minute
 * window. Bookmark it and open it after editing the board:
 *
 *   https://corplabs.co/api/revalidate?secret=YOUR_SECRET
 *
 * Clears the JOBS_CACHE_TAG data cache, which also drops the cached renders of
 * /, /careers and every /careers/<slug> that depended on it, so the next
 * request rebuilds them from fresh Notion data. Nothing is deleted and no
 * deploy happens — a wrong secret or a missing one simply changes nothing.
 *
 * GET (so a browser visit works) and POST (for scripts) do the same thing.
 * Requires REVALIDATE_SECRET; see .env.example.
 */

// Naive in-memory rate limit (per serverless instance), mirroring the contact
// route. Refreshing is cheap but it does hit Notion, so cap the stampede.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 20;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

/** Length-independent compare, so a wrong secret leaks nothing by timing. */
function secretMatches(given: string, expected: string): boolean {
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

async function handle(request: Request) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { error: "Revalidation is not configured. Set REVALIDATE_SECRET." },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many refreshes — try again later." }, { status: 429 });
  }

  const given =
    new URL(request.url).searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret") ??
    "";
  if (!secretMatches(given, expected)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  // { expire: 0 } rather than a named profile like "max": those keep serving
  // the stale entry while it refreshes behind the scenes, which is the very
  // wait this endpoint exists to skip. Expiring outright makes the next
  // request rebuild from Notion.
  revalidateTag(JOBS_CACHE_TAG, { expire: 0 });

  return NextResponse.json({
    revalidated: true,
    tag: JOBS_CACHE_TAG,
    message:
      "Jobs refreshed. The careers pages will show the latest Notion data on the next visit.",
  });
}

export const GET = handle;
export const POST = handle;
