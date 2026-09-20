import { describe, expect, it } from "vitest";
import { getAllProjects, getProject } from "@/lib/portfolio";

/**
 * content/portfolio/*.yaml is hand-edited (either directly, or through the
 * Keystatic admin at /keystatic) — the admin form's `validation.isRequired`
 * only runs when a save goes through that form, never when reading the
 * files back. This is the only thing that actually re-checks a real project
 * would render correctly: catches a blank/dropped field before it ships as
 * an empty fact-box row or a silently-missing screenshot, not after.
 */
describe("getAllProjects", () => {
  it("returns every project with all required fields populated", async () => {
    const projects = await getAllProjects();
    expect(projects.length).toBeGreaterThan(0);

    for (const project of projects) {
      const where = `project "${project.slug}"`;

      for (const field of [
        "name",
        "industry",
        "companyType",
        "summary",
        "intro",
        "challenge",
        "solution",
        "liveUrl",
        "cardImage",
      ] as const) {
        expect(project[field], `${where}: ${field} should be non-empty`).toBeTruthy();
      }

      expect(["corpi", "corpcode", "corprise", "corpsite"], `${where}: pillar`).toContain(
        project.pillar
      );
      expect(["build", "revamp"], `${where}: kind`).toContain(project.kind);

      expect(project.stack.length, `${where}: stack should have at least one row`).toBeGreaterThan(0);
      for (const row of project.stack) {
        expect(row.label, `${where}: a stack row's label`).toBeTruthy();
        expect(row.value, `${where}: a stack row's value`).toBeTruthy();
      }

      for (const tag of project.stackTags) {
        expect(tag, `${where}: a stackTags entry`).toBeTruthy();
      }

      expect(project.screenshots.length, `${where}: screenshots`).toBeGreaterThan(0);
      for (const shot of project.screenshots) {
        expect(shot.src, `${where}: a screenshot's src`).toBeTruthy();
        expect(["desktop", "tablet", "mobile"], `${where}: a screenshot's device`).toContain(
          shot.device
        );
      }

      // Exactly one hero medium — never both, never neither.
      const hasVideo = Boolean(project.heroVideo);
      const hasImage = Boolean(project.heroImage);
      expect(hasVideo !== hasImage, `${where}: exactly one of heroVideo/heroImage`).toBe(true);
    }
  });

  it("has no two screenshots (within one project) sharing a src", async () => {
    const projects = await getAllProjects();
    for (const project of projects) {
      const seen = new Set(project.screenshots.map(s => s.src));
      expect(seen.size, `project "${project.slug}": duplicate screenshot src`).toBe(
        project.screenshots.length
      );
    }
  });
});

describe("getProject", () => {
  it("returns null for a slug that doesn't exist", async () => {
    expect(await getProject("not-a-real-project")).toBeNull();
  });
});
