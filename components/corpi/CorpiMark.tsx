import { cn } from "@/lib/utils";

/**
 * Corpi's mark.
 *
 * A placeholder standing in for the real thing: the Corpi microsite is not
 * reachable from this environment, so rather than invent an identity this
 * formalises the treatment the site was already using in two hand-rolled
 * copies — the violet disc with a C that heads both chat surfaces.
 *
 * Swapping in the real logo is one edit here. Replace the <span> body with an
 * <img src="/corpi-logo.svg" /> (or an inline SVG) and every surface below
 * picks it up: the floating launcher, the widget header, the demo header, the
 * /corpi hero and the homepage product tab.
 */
export function CorpiMark({ px = 36, className }: { px?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex flex-none select-none items-center justify-center rounded-full bg-brand-500 font-display font-semibold leading-none text-on-brand",
        className
      )}
      style={{ width: px, height: px, fontSize: Math.round(px * 0.46) }}
    >
      C
    </span>
  );
}

/**
 * Mark plus wordmark, for places that introduce Corpi as a product rather than
 * as the voice in a chat window.
 */
export function CorpiLockup({
  px = 34,
  className,
  tagline,
}: {
  px?: number;
  className?: string;
  tagline?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <CorpiMark px={px} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tight text-white"
          style={{ fontSize: Math.round(px * 0.62) }}
        >
          Corpi
        </span>
        {tagline && (
          <span className="mt-1 font-display text-[10.5px] font-medium uppercase tracking-[0.14em] text-brand-300">
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
}
