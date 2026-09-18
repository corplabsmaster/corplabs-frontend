import Image from "next/image";

export type DeviceKind = "desktop" | "tablet" | "mobile";

/** Matches the grid-thumbnail widths in ScreenshotGallery's `widthByDevice`.
 * Callers rendering at a different size (e.g. the lightbox) pass their own `sizes`. */
const defaultSizes: Record<DeviceKind, string> = {
  desktop: "(min-width: 640px) 360px, 280px",
  tablet: "(min-width: 640px) 192px, 160px",
  mobile: "(min-width: 640px) 160px, 128px",
};

/**
 * Wraps a screenshot in a device chrome (browser bar, tablet or phone
 * bezel) so the gallery reads as "the site on real devices" rather than a
 * loose pile of screenshots. Bezel colors are fixed, not theme tokens —
 * a physical device doesn't flip to light mode with the page around it.
 */
export function DeviceFrame({
  device,
  src,
  alt,
  sizes = defaultSizes[device],
  priority,
}: {
  device: DeviceKind;
  src: string;
  alt: string;
  /** Defaults to this device's grid-thumbnail width; override for other contexts (e.g. the lightbox). */
  sizes?: string;
  priority?: boolean;
}) {
  if (device === "desktop") {
    return (
      <div className="overflow-hidden rounded-lg border border-black/40 bg-[#1c1c1e] shadow-lg">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4d]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4d]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4d]" />
        </div>
        <div className="relative aspect-[16/10] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  if (device === "tablet") {
    return (
      <div className="rounded-[20px] border-[7px] border-[#1c1c1e] bg-[#1c1c1e] shadow-lg">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[13px] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full rounded-[28px] border-[7px] border-[#1c1c1e] bg-[#1c1c1e] shadow-lg">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[20px] bg-black">
        <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-[#1c1c1e]" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
