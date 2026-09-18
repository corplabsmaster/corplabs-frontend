import Image from "next/image";

/**
 * Full-width case-study hero: plays the client's own site video when one
 * exists (Monte's looping leather shot), otherwise falls back to a large
 * screenshot. Never boxed to the text column's max-width.
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
  if (video) {
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
      {image && (
        <Image
          src={image}
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
