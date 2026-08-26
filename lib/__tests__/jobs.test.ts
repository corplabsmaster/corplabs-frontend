import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getJobs } from "@/lib/jobs";

/**
 * Exercises the Notion mapping against a stubbed API, shaped like the real
 * "Available Job Positions" board: Status is a status-type property, Location
 * is multi_select, Priority is a checkbox, and there is no Apply URL column.
 */

function row(
  id: string,
  name: string,
  status: string,
  extra: Record<string, unknown> = {}
) {
  return {
    id,
    created_time: "2024-02-20T02:37:56.000Z",
    properties: {
      Name: { title: [{ plain_text: name }] },
      Status: { status: { name: status } },
      Team: { select: { name: "Engineering" } },
      Location: { multi_select: [{ name: "Malaysia" }] },
      Priority: { checkbox: false },
      "Job Posted": { created_time: "2024-02-20T02:37:56.000Z" },
      ...extra,
    },
  };
}

function stubNotion(results: unknown[]) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok: true, json: async () => ({ results }) }))
  );
}

beforeEach(() => {
  process.env.NOTION_API_KEY = "secret_test";
  process.env.NOTION_JOBS_DB_ID = "db_test";
});

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.NOTION_API_KEY;
  delete process.env.NOTION_JOBS_DB_ID;
});

describe("getJobs", () => {
  it("keeps only open roles and links each to its own JD page", async () => {
    stubNotion([
      row("aaa", "Senior Java Backend", "open"),
      row("bbb", "Senior IOS Developer", "closed"),
      row("ccc", "Frontend Development Intern", "draft"),
    ]);

    const jobs = await getJobs();

    expect(jobs).toHaveLength(1);
    expect(jobs[0]).toMatchObject({
      title: "Senior Java Backend",
      slug: "senior-java-backend",
      href: "/careers/senior-java-backend",
      pageId: "aaa",
      location: "Malaysia",
      postedAt: "2024-02-20T02:37:56.000Z",
    });
  });

  it("matches Status case-insensitively across both board schemas", async () => {
    stubNotion([
      row("aaa", "Status Type Board", "open"),
      {
        id: "bbb",
        created_time: "2024-01-01T00:00:00.000Z",
        properties: {
          Name: { title: [{ plain_text: "Select Board" }] },
          Status: { select: { name: "Open" } },
        },
      },
    ]);

    const titles = (await getJobs()).map(j => j.title);
    expect(titles).toEqual(expect.arrayContaining(["Status Type Board", "Select Board"]));
  });

  it("gives duplicate titles distinct slugs so both roles resolve", async () => {
    stubNotion([
      row("1111aaaa2222bbbb", "Senior Java Developer", "open"),
      row("3333cccc4444dddd", "Senior Java Developer", "open"),
    ]);

    const jobs = await getJobs();
    const slugs = jobs.map(j => j.slug);

    expect(jobs).toHaveLength(2);
    expect(slugs[0]).toBe("senior-java-developer");
    expect(new Set(slugs).size).toBe(2);
    expect(jobs[1].href).toBe(`/careers/${slugs[1]}`);
  });

  it("reads Job Posted whether it is a created_time or a plain date", async () => {
    stubNotion([
      row("aaa", "Created Time Board", "open"),
      {
        id: "bbb",
        created_time: "2020-01-01T00:00:00.000Z",
        properties: {
          Name: { title: [{ plain_text: "Date Board" }] },
          Status: { status: { name: "open" } },
          "Job Posted": { date: { start: "2026-08-19" } },
        },
      },
    ]);

    const byTitle = Object.fromEntries((await getJobs()).map(j => [j.title, j.postedAt]));
    expect(byTitle["Created Time Board"]).toBe("2024-02-20T02:37:56.000Z");
    expect(byTitle["Date Board"]).toBe("2026-08-19");
  });

  it("picks up an Apply URL column when the board has one", async () => {
    stubNotion([
      row("aaa", "Product Manager", "open", {
        "Apply URL": { url: "https://forms.gle/bTBX7mbrKhBECykJ9" },
      }),
    ]);

    const [job] = await getJobs();
    expect(job.applyUrl).toBe("https://forms.gle/bTBX7mbrKhBECykJ9");
    // The card still opens our own JD page; Apply URL is the button there.
    expect(job.href).toBe("/careers/product-manager");
  });

  it("sorts priority roles first", async () => {
    stubNotion([
      row("aaa", "Ordinary Role", "open"),
      row("bbb", "Urgent Role", "open", { Priority: { checkbox: true } }),
    ]);

    expect((await getJobs()).map(j => j.title)).toEqual(["Urgent Role", "Ordinary Role"]);
  });

  it("falls back to the static list when Notion fails", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 401 })));

    const jobs = await getJobs();
    expect(jobs.length).toBeGreaterThan(0);
    // Static fallback roles have no Notion page, so no JD route.
    expect(jobs.every(j => j.slug === undefined)).toBe(true);
  });

  it("falls back rather than showing an empty careers section", async () => {
    stubNotion([row("aaa", "Closed Role", "closed")]);

    const jobs = await getJobs();
    expect(jobs.length).toBeGreaterThan(0);
    expect(jobs.every(j => j.slug === undefined)).toBe(true);
  });
});
