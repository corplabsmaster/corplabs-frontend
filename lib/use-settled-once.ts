"use client";

import { useEffect, useRef } from "react";

/**
 * Reports a live-updating tool once, after the user stops changing it.
 *
 * The problem router and the two tier finders have no "submit" step — the
 * recommendation re-resolves on every click. Firing per click would count one
 * visitor as a dozen completions, so this waits for things to settle and
 * reports a single time per mount.
 *
 * `watch` must be what the user *changes* (their answers), not what the tool
 * *shows*. Watching the result would silently miss anyone whose clicks happen
 * to land on the same recommendation they started with — which is common when
 * the default answers already point at a middle tier.
 *
 * `report` is re-read every render, so it always closes over current values
 * even though the effect only depends on `watch`.
 *
 * The first render is skipped deliberately: these tools render a default
 * selection, and a default nobody chose is not a result.
 */
export function useSettledOnce(
  watch: string | number,
  report: () => void,
  delayMs = 2500
): void {
  const skipFirst = useRef(true);
  const alreadySent = useRef(false);
  const latest = useRef(report);
  latest.current = report;

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }
    if (alreadySent.current) return;

    const timer = setTimeout(() => {
      alreadySent.current = true;
      latest.current();
    }, delayMs);

    return () => clearTimeout(timer);
  }, [watch, delayMs]);
}
