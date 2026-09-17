import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Project preview tile. Renders the screenshot when `image` is set; falls
 * back to a gradient-bordered initial tile otherwise (DS: gradient border is
 * a signature accent, used sparingly — this is one of its sanctioned spots).
 */
export function PortfolioThumb({
  image,
  name,
  className,
}: {
  image?: string;
  name: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={cn("relative aspect-video overflow-hidden rounded-xl", className)}>
        <Image
          src={image}
          alt={`${name} — preview`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "gradient-border flex aspect-video items-center justify-center rounded-xl",
        className
      )}
      aria-hidden
    >
      <span className="gradient-text font-display text-3xl font-bold tracking-tight">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}
