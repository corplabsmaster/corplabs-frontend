"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { chatHandoffUrl } from "@/components/chat/whatsapp-link";
import { chat, type QuickReply } from "@/data/chat";
import { trackChatFallback, trackChatOpen, trackChatSend } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Site-wide Corpi enquiry widget.
 *
 * It looks like a chat and behaves like one up to the point of sending, then
 * hands the thread to WhatsApp with the visitor's message already typed. That
 * split is deliberate: the reply has to arrive somewhere the visitor still has
 * it tomorrow, and a thread on their phone does that where a browser tab does
 * not. It also means no public LLM endpoint on the marketing site.
 *
 * What it will not do is invent an answer. Corpi greets, acknowledges, and says
 * where the reply is coming from; anything else would be pretending to answer a
 * question nobody has read yet.
 */

const DRAFT_KEY = "cl_chat_draft";

type Bubble = { from: "corpi" | "visitor"; text: string };

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.2 15.03l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 4.06c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.2.87 2.35.99 2.51.12.16 1.7 2.7 4.19 3.68 2.07.82 2.5.66 2.95.62.45-.04 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.33-.74-1.82-.19-.47-.39-.41-.54-.42h-.46Z" />
    </svg>
  );
}

function TypingDots() {
  return (
    <span className="flex gap-1 self-start rounded-[14px_14px_14px_4px] bg-surface-overlay px-4 py-3">
      {[0, 0.2, 0.4].map(delay => (
        <span
          key={delay}
          className="h-1.5 w-1.5 rounded-full bg-zinc-300"
          style={{ animation: `pulse-dot 1s ${delay}s infinite` }}
        />
      ))}
    </span>
  );
}

export function ChatWidget() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [thread, setThread] = useState<Bubble[]>([]);
  const [typing, setTyping] = useState(false);
  const [sent, setSent] = useState<{ url: string; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sendRef = useRef<HTMLAnchorElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openedOnce = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Restore an unsent draft — someone who half-typed a question and navigated
  // away has already told us what they want.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DRAFT_KEY);
      if (saved) setDraft(saved);
    } catch {
      // Storage unavailable; the widget works, it just forgets.
    }
  }, []);

  useEffect(() => {
    try {
      if (draft) window.localStorage.setItem(DRAFT_KEY, draft);
      else window.localStorage.removeItem(DRAFT_KEY);
    } catch {
      // Ignored, as above.
    }
  }, [draft]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const openPanel = useCallback(() => {
    setOpen(true);
    if (!openedOnce.current) {
      openedOnce.current = true;
      trackChatOpen(pathname);
      setTyping(true);
      later(() => {
        setTyping(false);
        setThread([{ from: "corpi", text: chat.greeting }]);
      }, 700);
    }
    later(() => inputRef.current?.focus(), 260);
  }, [later, pathname]);

  // Escape closes, and focus returns to the launcher rather than the page top.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [thread, typing, sent]);

  /**
   * Runs on the send anchor's own click, so the browser performs the handoff as
   * an ordinary link navigation. window.open would have been the obvious way to
   * do this and the wrong one: it is what popup blockers exist to stop, and it
   * breaks cmd-click and middle-click.
   */
  const send = useCallback(
    (intent: string) => {
      const message = draft.trim();
      if (!message) return;

      setThread(t => [...t, { from: "visitor", text: message }]);
      setDraft("");
      setTyping(true);
      trackChatSend(intent, pathname);

      later(() => {
        setTyping(false);
        setThread(t => [...t, { from: "corpi", text: chat.handoff }]);
        setSent({ url: chatHandoffUrl(message, pathname), text: message });
      }, 800);
    },
    [draft, later, pathname]
  );

  const applyQuickReply = useCallback((q: QuickReply) => {
    setDraft(q.text);
    inputRef.current?.focus();
    // Caret to the end so they continue the sentence rather than overwrite it.
    later(() => {
      const el = inputRef.current;
      if (el) el.setSelectionRange(el.value.length, el.value.length);
    }, 0);
  }, [later]);

  const copyMessage = useCallback(async () => {
    if (!sent) return;
    try {
      await navigator.clipboard.writeText(sent.text);
      setCopied(true);
      trackChatFallback("copy");
      later(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked; the message is still visible in the thread above.
    }
  }, [later, sent]);

  const ready = draft.trim().length > 0;
  const showQuickReplies = thread.length === 1 && !sent;

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openPanel())}
        aria-expanded={open}
        aria-controls="corpi-chat-panel"
        aria-label={open ? "Close chat" : chat.launcherLabel}
        className={cn(
          "fixed bottom-5 right-5 z-[60] flex h-14 items-center gap-2.5 rounded-full bg-brand-500 pl-4 pr-5 font-display text-sm font-medium text-on-brand shadow-[0_10px_40px_rgba(86,5,255,0.45)] transition-all hover:bg-brand-600 sm:bottom-6 sm:right-6",
          open && "w-14 justify-center px-0"
        )}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <WhatsAppMark className="h-6 w-6" />
            <span className="hidden sm:inline">{chat.launcherLabel}</span>
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          id="corpi-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-label={`Chat with ${chat.agentName}`}
          className="fixed bottom-24 right-3 z-[60] flex max-h-[min(560px,calc(100dvh-8rem))] w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-2xl sm:right-6 sm:w-[380px]"
        >
          <div className="flex items-center gap-3 border-b border-line bg-brand-950 px-4 py-3.5">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-500 font-display text-sm font-semibold text-on-brand">
              C
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold text-white">{chat.agentName}</p>
              <p className="truncate text-[11px] text-gradient-1">{chat.status}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto p-4">
            {thread.map((m, i) => (
              <p
                key={i}
                className={cn(
                  "max-w-[85%] whitespace-pre-wrap px-3.5 py-2.5 text-[13.5px] leading-relaxed [animation:msg-in_.3s_ease-out]",
                  m.from === "visitor"
                    ? "self-end rounded-[14px_14px_4px_14px] border border-brand-700 bg-brand-800 text-on-brand"
                    : "self-start rounded-[14px_14px_14px_4px] border border-line bg-surface text-white"
                )}
              >
                {m.text}
              </p>
            ))}
            {typing && <TypingDots />}

            {showQuickReplies && (
              <div className="mt-1 flex flex-wrap gap-2">
                {chat.quickReplies.map(q => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => applyQuickReply(q)}
                    className="rounded-full border border-brand-500/60 bg-brand-500/10 px-3 py-1.5 font-display text-[12.5px] text-white transition-colors hover:border-brand-500 hover:bg-brand-500/20"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {sent && (
              <div className="mt-1 rounded-xl border border-line bg-surface p-3 text-[12px] leading-relaxed text-zinc-200">
                <span className="text-zinc-400">{chat.fallbackLead}</span>{" "}
                <button
                  type="button"
                  onClick={copyMessage}
                  className="font-medium text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {copied ? chat.fallbackCopied : chat.fallbackCopy}
                </button>{" "}
                <span className="text-zinc-400">or</span>{" "}
                <a
                  href={`mailto:${chat.email}?body=${encodeURIComponent(sent.text)}`}
                  onClick={() => trackChatFallback("email")}
                  className="font-medium text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {chat.emailLabel}
                </a>
                <span className="text-zinc-400">.</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              // Click the anchor rather than calling send(): the navigation has
              // to come from the link itself for the new tab to open.
              sendRef.current?.click();
            }}
            className="flex items-end gap-2 border-t border-line p-3"
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => {
                // Enter sends, Shift+Enter breaks the line — WhatsApp's own rule.
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendRef.current?.click();
                }
              }}
              placeholder={chat.placeholder}
              aria-label={chat.placeholder}
              className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-line bg-surface px-3.5 py-3 text-[13.5px] leading-snug text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-brand-500"
            />
            <a
              ref={sendRef}
              href={ready ? chatHandoffUrl(draft, pathname) : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!ready}
              onClick={e => {
                if (!ready) {
                  e.preventDefault();
                  return;
                }
                send("typed");
              }}
              aria-label="Send on WhatsApp"
              className={cn(
                "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500 text-on-brand transition-colors hover:bg-brand-600",
                !ready && "pointer-events-none opacity-40"
              )}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M3 10.2 16.5 4l-4.3 12.6-2.5-5.3L3 10.2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </form>
        </div>
      )}
    </>
  );
}
