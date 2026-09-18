import { describe, expect, it } from "vitest";
import { heroMediaKind } from "@/components/portfolio/HeroMedia";

describe("heroMediaKind", () => {
  it("prefers video when both are somehow set", () => {
    expect(heroMediaKind("hero.mp4", "hero.jpg")).toBe("video");
  });

  it("falls back to image when there's no video", () => {
    expect(heroMediaKind(undefined, "hero.jpg")).toBe("image");
  });

  it("is empty when neither is set", () => {
    expect(heroMediaKind(undefined, undefined)).toBe("empty");
  });
});
