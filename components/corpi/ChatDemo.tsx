"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CorpiMark } from "@/components/corpi/CorpiMark";
import type { CorpiChat } from "@/data/corpi";
import { trackDemoEngaged } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Replayable Corpi WhatsApp chat simulation. Single player used by both the
 * home-page product tabs (compact, `max-w-sm`) and the /corpi hero (taller,
 * fills its column). Remount with a `key` to restart the animation.
 */
export function ChatDemo({
  chat,
  className,
  bodyMinHeight = "min-h-[360px]",
  location = "corpi_page",
}: {
  chat: CorpiChat;
  /** Applied to the outer card — e.g. `max-w-sm` on the home tabs. */
  className?: string;
  /** Tailwind min-height for the message area (taller on /corpi). */
  bodyMinHeight?: string;
  /** Which surface this instance sits on, reported with demo_engaged. */
  location?: "corpi_page" | "home_tabs";
}) {
  const [shown, setShown] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    setShown(0);
    timer.current = setInterval(() => {
      setShown((s) => {
        if (s >= chat.script.length) {
          if (timer.current) clearInterval(timer.current);
          return s;
        }
        return s + 1;
      });
    }, 1100);
  }, [chat.script.length]);

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [start]);

  // The demo autoplays on mount, so only a deliberate Replay counts as
  // engagement — and only the first one, so repeat taps do not inflate it.
  const reported = useRef(false);
  const replay = useCallback(() => {
    start();
    if (!reported.current) {
      reported.current = true;
      trackDemoEngaged(location);
    }
  }, [start, location]);

  const visible = chat.script.slice(0, shown);
  const next = chat.script[shown];
  const typing = next?.from === "corpi";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-brand-950 px-4 py-3.5">
        <CorpiMark px={36} />
        <div className="flex-1">
          <p className="font-display text-sm font-semibold text-white">{chat.shopName}</p>
          <p className="text-[11px] text-gradient-1">{chat.status}</p>
        </div>
        <button
          type="button"
          onClick={replay}
          className="rounded-full border border-line px-3 py-1.5 font-display text-[11px] tracking-wide text-zinc-300 transition-colors hover:border-brand-500"
        >
          Replay
        </button>
      </div>
      <div className={cn("flex flex-col gap-2.5 p-4", bodyMinHeight)}>
        {visible.map((m, i) =>
          m.from === "system" ? (
            <p
              key={i}
              className="self-center px-1 py-2 font-mono text-[10.5px] tracking-wide text-gradient-1 [animation:msg-in_.3s_ease-out]"
            >
              {m.text}
            </p>
          ) : (
            <p
              key={i}
              className={cn(
                "max-w-[82%] px-3.5 py-2.5 text-[13.5px] leading-relaxed [animation:msg-in_.3s_ease-out]",
                m.from === "corpi"
                  ? "self-end rounded-[14px_14px_4px_14px] border border-brand-700 bg-brand-800 text-on-brand"
                  : "self-start rounded-[14px_14px_14px_4px] border border-line bg-surface text-white"
              )}
            >
              {m.text}
            </p>
          )
        )}
        {typing && (
          <span className="flex gap-1 self-end rounded-[14px_14px_4px_14px] bg-brand-800 px-4 py-3">
            {[0, 0.2, 0.4].map((delay) => (
              <span
                key={delay}
                className="h-1.5 w-1.5 rounded-full bg-on-brand"
                style={{ animation: `pulse-dot 1s ${delay}s infinite` }}
              />
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
