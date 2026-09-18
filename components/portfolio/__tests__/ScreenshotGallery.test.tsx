import { describe, expect, it } from "vitest";
import { cycleIndex } from "@/components/portfolio/ScreenshotGallery";

describe("cycleIndex", () => {
  it("steps forward within bounds", () => {
    expect(cycleIndex(0, 1, 3)).toBe(1);
    expect(cycleIndex(1, 1, 3)).toBe(2);
  });

  it("wraps forward past the last index", () => {
    expect(cycleIndex(2, 1, 3)).toBe(0);
  });

  it("steps backward within bounds", () => {
    expect(cycleIndex(2, -1, 3)).toBe(1);
  });

  it("wraps backward past the first index", () => {
    expect(cycleIndex(0, -1, 3)).toBe(2);
  });

  it("returns the only index when length is 1", () => {
    expect(cycleIndex(0, 1, 1)).toBe(0);
    expect(cycleIndex(0, -1, 1)).toBe(0);
  });
});
