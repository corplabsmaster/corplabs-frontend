"use client";

import { useEffect, useRef, useState } from "react";
import { useCurrency } from "@/components/currency/currency-context";
import { CURRENCIES, CURRENCY_ORDER } from "@/lib/currency";
import { cn } from "@/lib/utils";

/**
 * Full-width one-tap currency selector for the mobile menu — no nested
 * dropdown, thumb-sized targets.
 */
export function CurrencySegments({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <div className={cn(className)}>
      <div
        role="radiogroup"
        aria-label="Display currency"
        className="grid grid-cols-4 gap-1 rounded-full border border-line bg-surface-raised p-1"
      >
        {CURRENCY_ORDER.map(code => {
          const active = code === currency;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setCurrency(code)}
              className={cn(
                "min-h-11 rounded-full font-mono text-[13px] transition-colors",
                active
                  ? "bg-brand-500 font-medium text-white"
                  : "text-zinc-200 active:bg-surface"
              )}
            >
              {code}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-center text-[11px] leading-snug text-zinc-500">
        Prices are indicative — projects are invoiced in MYR.
      </p>
    </div>
  );
}

/**
 * Compact currency selector. Prices are indicative and invoiced in MYR — the
 * switcher exists to signal that Corplabs takes overseas work.
 */
export function CurrencySwitcher({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Currency: ${currency}. Change display currency`}
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[12px] text-zinc-200 transition-colors hover:border-brand-500 hover:text-white"
      >
        <span>{currency}</span>
        <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden className={cn("transition-transform", open && "rotate-180")}>
          <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Display currency"
          className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-line bg-surface-raised py-1 shadow-2xl"
        >
          {CURRENCY_ORDER.map(code => {
            const active = code === currency;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-3.5 py-2 text-left text-[13px] transition-colors hover:bg-surface",
                    active ? "text-brand-300" : "text-zinc-200"
                  )}
                >
                  <span>
                    <span className="font-mono">{code}</span>
                    <span className="ml-2 text-zinc-500">{CURRENCIES[code].label}</span>
                  </span>
                  {active && (
                    <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden>
                      <path d="M3 7.5 6 10.5 11 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
          <li className="mt-1 border-t border-line px-3.5 py-2 text-[11px] leading-snug text-zinc-500">
            Indicative — projects are invoiced in MYR.
          </li>
        </ul>
      )}
    </div>
  );
}
