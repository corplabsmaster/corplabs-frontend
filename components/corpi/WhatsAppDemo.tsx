"use client";

import { liveDemo, type DemoStarter } from "@/data/corpi";
import { trackWhatsAppDemo } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Opens WhatsApp with the starter message already typed.
 *
 * wa.me is the documented cross-platform entry point: it hands off to the
 * installed app on mobile and to WhatsApp Web on desktop, so there is nothing
 * to detect or fall back to on our side.
 */
export function starterHref(starter: DemoStarter): string {
  return `https://wa.me/${liveDemo.number}?text=${encodeURIComponent(starter.text)}`;
}

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.2 15.03l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 4.06c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.2.87 2.35.99 2.51.12.16 1.7 2.7 4.19 3.68 2.07.82 2.5.66 2.95.62.45-.04 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.33-.74-1.82-.19-.47-.39-.41-.54-.42h-.46Z" />
    </svg>
  );
}

/**
 * The live demo: three openers in three languages, each opening a real
 * conversation with the agent on Corplabs' own number.
 *
 * The language choice is the point. The page claims Corpi answers in whatever
 * language it is written to — tapping "Bahasa Malaysia" lets a visitor test
 * that rather than believe it, and tells us which language they reached for.
 */
export function WhatsAppDemo({
  placement,
  className,
}: {
  /** Where on the page this instance sits, reported with the event. */
  placement: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {liveDemo.starters.map(starter => (
        <a
          key={starter.id}
          href={starterHref(starter)}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackWhatsAppDemo(starter.id, placement)}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/60 bg-brand-500/10 px-4 py-2.5 font-display text-[13px] font-medium text-white transition-colors hover:border-brand-500 hover:bg-brand-500/20"
        >
          <WhatsAppMark className="h-4 w-4 text-hiterra" />
          {starter.label}
        </a>
      ))}
    </div>
  );
}

/** Single-button variant for the closing CTA, styled like the other buttons. */
export function WhatsAppDemoButton({
  starterId,
  label,
  placement,
  className,
}: {
  starterId: string;
  label: string;
  placement: string;
  className?: string;
}) {
  const starter = liveDemo.starters.find(s => s.id === starterId) ?? liveDemo.starters[0];
  return (
    <a
      href={starterHref(starter)}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsAppDemo(starter.id, placement)}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 font-display text-sm font-medium text-on-brand transition-colors hover:bg-brand-600",
        className
      )}
    >
      <WhatsAppMark className="h-[18px] w-[18px]" />
      {label}
    </a>
  );
}
