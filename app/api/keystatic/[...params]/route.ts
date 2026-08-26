import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";

/**
 * In GitHub mode Keystatic throws at *import* time in production when the
 * credentials are missing, which fails the entire build — not just this route.
 * Until the GitHub App is created we answer with a 503 explaining what to set,
 * the same way the Notion routes degrade when unconfigured.
 *
 * Development is deliberately exempt: Keystatic serves its own setup wizard
 * there, and that wizard is the only way to create the GitHub App.
 */
const isConfigured =
  process.env.NODE_ENV === "development" ||
  Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
      process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
      process.env.KEYSTATIC_SECRET
  );

function notConfigured() {
  return new Response(
    "Keystatic is not configured yet. Set KEYSTATIC_GITHUB_CLIENT_ID, " +
      "KEYSTATIC_GITHUB_CLIENT_SECRET and KEYSTATIC_SECRET (see .env.example).",
    { status: 503, headers: { "content-type": "text/plain" } }
  );
}

const handler = isConfigured ? makeRouteHandler({ config: keystaticConfig }) : null;

export const GET = handler?.GET ?? notConfigured;
export const POST = handler?.POST ?? notConfigured;
