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
 *
 * The message area is a fixed height that scrolls, not one that grows. Growing
 * was fine in a desktop column and wrong on a phone, where seven bubbles at
 * that width ran past 1,400px and the section ate three screens. A real chat
 * window is a viewport onto a thread anyway, so it also reads truer: new
 * messages scroll into view as they arrive.
 *
 * When the thread finishes it rests, then types, then starts over. The typing
 * beat is the point: an idle indicator that never produces a message is a
 * tease, so here it is what it looks like — the thing that happens just before
 * messages arrive.
 *
 * Two things the loop owes the reader. It stops while the card is off screen,
 * because an animation nobody can see should not be scheduling renders. And it
 * does not run at all under prefers-reduced-motion, which gets the finished
 * thread immediately instead.
 */

const REVEAL_MS = 1100;
/** How long the finished thread sits before the loop restarts it. */
const REST_MS = 4200;
/** Typing beat between the rest and the replay. */
const TYPING_MS = 1500;
export function ChatDemo({
  chat,
  className,
  bodyHeight = "h-[340px] sm:h-[380px]",
  location = "corpi_page",
}: {
  chat: CorpiChat;
  /** Applied to the outer card — e.g. `max-w-sm` on the home tabs. */
  className?: string;
  /** Tailwind height for the message area (taller on /corpi). */
  bodyHeight?: string;
  /** Which surface this instance sits on, reported with demo_engaged. */
  location?: "corpi_page" | "home_tabs";
}) {
  const total = chat.script.length;
  const [shown, setShown] = useState(0);
  const [idleTyping, setIdleTyping] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), {
      rootMargin: "120px",
    });
    io.observe(card);
    return () => io.disconnect();
  }, []);

  // Reduced motion gets the whole thread at once, and no loop.
  useEffect(() => {
    if (reduced) {
      setIdleTyping(false);
      setShown(total);
    }
  }, [reduced, total]);

  // One timer per phase, each cleaned up by its own effect: reveal the next
  // message, or — at the end — rest before the typing beat.
  useEffect(() => {
    if (reduced || !onScreen || idleTyping) return;
    const next = setTimeout(
      () => (shown < total ? setShown(s => s + 1) : setIdleTyping(true)),
      shown < total ? REVEAL_MS : REST_MS
    );
    return () => clearTimeout(next);
  }, [shown, total, reduced, onScreen, idleTyping]);

  useEffect(() => {
    if (!idleTyping || reduced || !onScreen) return;
    const restart = setTimeout(() => {
      setIdleTyping(false);
      setShown(0);
    }, TYPING_MS);
    return () => clearTimeout(restart);
  }, [idleTyping, reduced, onScreen]);

  // The demo autoplays on mount, so only a deliberate Replay counts as
  // engagement — and only the first one, so repeat taps do not inflate it.
  const reported = useRef(false);
  const replay = useCallback(() => {
    setIdleTyping(false);
    setShown(0);
    if (!reported.current) {
      reported.current = true;
      trackDemoEngaged(location);
    }
  }, [location]);

  // Keep the newest message in view as the script plays out — by scrolling the
  // message area itself. scrollIntoView walks up and scrolls every scrollable
  // ancestor, so on the page it kept yanking the reader back to the demo.
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [shown, idleTyping]);

  const visible = chat.script.slice(0, shown);
  const next = chat.script[shown];
  const typing = idleTyping || next?.from === "corpi";

  return (
    <div
      ref={cardRef}
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
      <div ref={bodyRef} className={cn("flex flex-col gap-2.5 overflow-y-auto p-4", bodyHeight)}>
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
