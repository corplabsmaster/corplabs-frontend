"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contactSection as copy } from "@/data/home";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-2 focus:outline-brand-500";

export default function ContactSection() {
  const [intent, setIntent] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"), // honeypot
          intent: copy.intents[intent],
        }),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error ?? "Something went wrong — please email us instead.");
        setStatus("error");
      }
    } catch {
      setError("Network error — please email us instead.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
    >
      <Reveal>
        <p className="mb-4 font-medium text-xs uppercase tracking-[0.08em] text-brand-300">
          {copy.eyebrow}
        </p>
        <h2 className="mb-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
          {copy.title.plain}
          <span className="gradient-text">{copy.title.gradient}</span>
        </h2>
        <p className="mb-8 text-base leading-relaxed text-zinc-200">{copy.lede}</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
              {copy.phoneLabel}
            </p>
            <p className="font-display text-lg font-medium text-white">{copy.phone}</p>
          </div>
          <div>
            <p className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
              {copy.emailLabel}
            </p>
            <a
              href={`mailto:${copy.email}`}
              className="font-display text-lg font-medium text-white hover:text-brand-200"
            >
              {copy.email}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl border border-line bg-surface-raised p-6 sm:p-10">
          {status === "sent" ? (
            <div
              role="status"
              className="flex min-h-[360px] flex-col items-center justify-center gap-3.5 text-center"
            >
              <span className="gradient-border flex h-14 w-14 items-center justify-center rounded-full text-[22px] text-gradient-1">
                ✓
              </span>
              <h3 className="font-display text-2xl font-bold text-white">{copy.success.title}</h3>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-200">{copy.success.body}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-full border border-line px-6 py-2.5 font-display text-xs font-medium uppercase tracking-[0.08em] text-zinc-300 transition-colors hover:border-brand-500"
              >
                {copy.success.again}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4.5">
              <div className="grid gap-4.5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="c-name"
                    className="mb-2 block font-display text-[13px] font-medium text-zinc-300"
                  >
                    Name
                  </label>
                  <input id="c-name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label
                    htmlFor="c-email"
                    className="mb-2 block font-display text-[13px] font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" required placeholder="you@company.co" className={inputClass} />
                </div>
              </div>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />
              <div>
                <p className="mb-2 font-display text-[13px] font-medium text-zinc-300">
                  What&apos;s this about?
                </p>
                <div className="flex flex-wrap gap-2">
                  {copy.intents.map((label, i) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setIntent(i)}
                      className={cn(
                        "rounded-full border px-3.5 py-2 font-display text-[12.5px] transition-colors",
                        intent === i
                          ? "border-brand-500 bg-brand-500 font-medium text-white"
                          : "border-line bg-surface font-light text-zinc-200 hover:border-brand-500/60"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="c-msg"
                  className="mb-2 block font-display text-[13px] font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  rows={4}
                  required
                  placeholder="What are you building?"
                  className={cn(inputClass, "resize-y")}
                />
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-[#FF5C6A]">
                  {error}{" "}
                  <a href={`mailto:${copy.email}`} className="underline underline-offset-4">
                    {copy.email}
                  </a>
                </p>
              )}
              <Button
                type="submit"
                disabled={status === "sending"}
                className="font-display uppercase tracking-[0.08em]"
              >
                {status === "sending" ? "Sending…" : "Send inquiry"}
              </Button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
