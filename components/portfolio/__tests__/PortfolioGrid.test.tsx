import { describe, expect, it } from "vitest";
import { filterProjects } from "@/components/portfolio/PortfolioGrid";
import { projects } from "@/data/portfolio";

describe("filterProjects", () => {
  it("returns every project for \"all\"", () => {
    expect(filterProjects("all")).toHaveLength(projects.length);
  });

  it("returns only projects tagged with the given pillar", () => {
    const result = filterProjects("corpsite");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.pillar === "corpsite")).toBe(true);
  });

  it("returns an empty array for a pillar with no projects yet", () => {
    expect(filterProjects("corpi")).toEqual([]);
  });
});
