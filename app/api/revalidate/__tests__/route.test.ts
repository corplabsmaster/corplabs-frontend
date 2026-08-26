import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/** next/cache needs a Next request context; the route's own logic does not. */
const revalidateTag = vi.fn();
vi.mock("next/cache", () => ({ revalidateTag: (tag: string) => revalidateTag(tag) }));

const { GET } = await import("@/app/api/revalidate/route");

const call = (url: string) => GET(new Request(url));

beforeEach(() => {
  revalidateTag.mockClear();
  process.env.REVALIDATE_SECRET = "s3cret-token";
});

afterEach(() => {
  delete process.env.REVALIDATE_SECRET;
});

describe("GET /api/revalidate", () => {
  it("refreshes the jobs cache when the secret matches", async () => {
    const res = await call("https://corplabs.co/api/revalidate?secret=s3cret-token");

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toMatchObject({ revalidated: true });
    expect(revalidateTag).toHaveBeenCalledWith("notion-jobs");
  });

  it("rejects a wrong secret without touching the cache", async () => {
    const res = await call("https://corplabs.co/api/revalidate?secret=wrong-token");

    expect(res.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects a missing secret", async () => {
    const res = await call("https://corplabs.co/api/revalidate");

    expect(res.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects a prefix of the real secret", async () => {
    const res = await call("https://corplabs.co/api/revalidate?secret=s3cret");

    expect(res.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("accepts the secret from a header, for scripts", async () => {
    const res = await GET(
      new Request("https://corplabs.co/api/revalidate", {
        headers: { "x-revalidate-secret": "s3cret-token" },
      })
    );

    expect(res.status).toBe(200);
    expect(revalidateTag).toHaveBeenCalledWith("notion-jobs");
  });

  it("refuses to run at all when REVALIDATE_SECRET is unset", async () => {
    delete process.env.REVALIDATE_SECRET;

    // Note the secret in the query: an unconfigured deployment must not be
    // refreshable by anyone who simply guesses the parameter.
    const res = await call("https://corplabs.co/api/revalidate?secret=anything");

    expect(res.status).toBe(503);
    expect(revalidateTag).not.toHaveBeenCalled();
  });
});
