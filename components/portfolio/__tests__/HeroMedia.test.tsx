import { describe, expect, it } from "vitest";
import { heroMediaKind } from "@/components/portfolio/HeroMedia";
import type { ProjectHero } from "@/lib/portfolio";

describe("heroMediaKind", () => {
  it("is video when heroVideo is set", () => {
    const hero: ProjectHero = { heroVideo: "hero.mp4", heroPoster: "hero.jpg" };
    expect(heroMediaKind(hero)).toBe("video");
  });

  it("is image when only heroImage is set", () => {
    const hero: ProjectHero = { heroImage: "hero.jpg" };
    expect(heroMediaKind(hero)).toBe("image");
  });
});
