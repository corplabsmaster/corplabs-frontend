import Image from "next/image";
import type { ProjectHero } from "@/lib/portfolio";

/** Which branch HeroMedia renders. Pure so the video-vs-image decision is
 * unit-testable without mounting the component. `ProjectHero` itself
 * guarantees exactly one of heroVideo/heroImage, so unlike a component that
 * took three loose optional props, there's no "empty" case to handle. */
export function heroMediaKind(hero: ProjectHero): "video" | "image" {
  return hero.heroVideo ? "video" : "image";
}

/**
 * Full-width case-study hero: plays the client's own site video when one
 * exists (Montesofa's looping leather shot), otherwise falls back to a large
 * screenshot. Never boxed to the text column's max-width.
 */
export function HeroMedia({ name, hero }: { name: string; hero: ProjectHero }) {
  if (heroMediaKind(hero) === "video") {
    const { heroVideo, heroPoster } = hero as Extract<ProjectHero, { heroVideo: string }>;
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-raised sm:aspect-[21/9]">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  }

  const { heroImage } = hero as Extract<ProjectHero, { heroImage: string }>;
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-raised sm:aspect-[21/9]">
      <Image
        src={heroImage}
        alt={`${name} — full site preview`}
        fill
        sizes="100vw"
        priority
        className="object-cover object-top"
      />
    </div>
  );
}
