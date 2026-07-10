import { NextResponse } from "next/server";

/**
 * Contact-form submissions → Notion database.
 *
 * Setup (see README "Contact form → Notion"):
 * 1. Create an internal integration at notion.so/profile/integrations.
 * 2. Share the "Website Inquiries" database with that integration.
 * 3. Set NOTION_API_KEY and NOTION_INQUIRIES_DB_ID in the environment.
 *
 * Uses Notion's REST API directly — no SDK dependency needed for one call.
 */

const NOTION_VERSION = "2022-06-28";
const MAX_LEN = { name: 200, email: 320, intent: 50, message: 5000 };

// Naive in-memory rate limit (per serverless instance) — enough to blunt
// drive-by spam without adding infrastructure.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
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

export async function POST(request: Request) {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_INQUIRIES_DB_ID;
  if (!apiKey || !dbId) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email us instead." },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions — please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, MAX_LEN.name);
  const email = String(body.email ?? "").trim().slice(0, MAX_LEN.email);
  const intent = String(body.intent ?? "General").trim().slice(0, MAX_LEN.intent);
  const message = String(body.message ?? "").trim().slice(0, MAX_LEN.message);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: dbId },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Intent: { select: { name: intent } },
        Status: { select: { name: "New" } },
        Message: { rich_text: [{ text: { content: message } }] },
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Notion inquiry submission failed:", res.status, detail);
    return NextResponse.json(
      { error: "Something went wrong on our side — please email us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
