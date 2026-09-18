import Image from "next/image";

/** Which branch HeroMedia renders. Pure so the video-vs-image decision is
 * unit-testable without mounting the component. */
export function heroMediaKind(video?: string, image?: string): "video" | "image" | "empty" {
  if (video) return "video";
  if (image) return "image";
  return "empty";
}

/**
 * Full-width case-study hero: plays the client's own site video when one
 * exists (Monte's looping leather shot), otherwise falls back to a large
 * screenshot. Never boxed to the text column's max-width.
 *
 * `PortfolioProject`'s hero fields are a discriminated union (exactly one of
 * `heroVideo`/`heroImage`), so in practice this never hits the "empty" case —
 * but the props here stay plain optionals since this is just a presentational
 * component, not the place to enforce that invariant.
 */
export function HeroMedia({
  name,
  video,
  poster,
  image,
}: {
  name: string;
  video?: string;
  poster?: string;
  image?: string;
}) {
  const kind = heroMediaKind(video, image);

  if (kind === "video") {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-raised sm:aspect-[21/9]">
        <video
          className="h-full w-full object-cover"
          src={video}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-raised sm:aspect-[21/9]">
      {kind === "image" && (
        <Image
          src={image as string}
          alt={`${name} — full site preview`}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      )}
    </div>
  );
}
