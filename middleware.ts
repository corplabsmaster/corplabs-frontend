import { NextResponse, type NextRequest } from "next/server";
import { CURRENCY_COOKIE } from "@/lib/currency";

/**
 * Geo default for the display currency: Malaysian visitors see MYR, everyone
 * else sees USD. Runs at the edge and only SETS a cookie the client reads — it
 * never rewrites the response, so statically prerendered pages stay static. A
 * manual choice (localStorage) always overrides this on the client.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (!request.cookies.has(CURRENCY_COOKIE)) {
    const country =
      request.headers.get("x-vercel-ip-country") ??
      // @ts-expect-error `geo` is populated on Vercel's edge runtime
      request.geo?.country ??
      "";
    const currency = country === "MY" ? "MYR" : "USD";
    response.cookies.set(CURRENCY_COOKIE, currency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  // Run on page routes only — skip API, Next internals, and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)"],
};
