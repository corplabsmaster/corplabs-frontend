"use client";

import { useCurrency } from "@/components/currency/currency-context";
import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";

/**
 * Renders a MYR-authored price string (e.g. "from RM 30,000 · discovery from
 * RM 5,000") in the visitor's selected currency. A client island so static
 * pages can embed it directly. Use ONLY for Corplabs' own pricing — never for
 * illustrative numbers like the Corpi demo chat.
 */
export function Price({ rm, className }: { rm: string; className?: string }) {
  const { currency } = useCurrency();
  const text = formatPrice(rm, currency);
  // suppressHydrationWarning: after mount the effect may switch currency
  // (geo/stored preference); the text updates then, which is expected.
  return (
    <span className={cn(className)} suppressHydrationWarning>
      {text}
    </span>
  );
}
