"use client";

import { cn } from "@/lib/utils";

/** Thin gradient progress bar for the step wizards. */
export function WizardProgress({
  label,
  current,
  total,
  pct,
}: {
  label: string;
  current: number;
  total: number;
  pct: number;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
          {label} {current} of {total}
        </span>
        <span className="text-xs text-zinc-500">{pct}% complete</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
      >
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** A single selectable option row (radio- or checkbox-style). */
export function ChoiceOption({
  label,
  selected,
  onSelect,
  multi = false,
  name,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
  name: string;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors",
        selected
          ? "border-brand-500 bg-brand-600/15 text-white"
          : "border-line bg-surface text-zinc-300 hover:border-brand-500/60"
      )}
    >
      <input
        type={multi ? "checkbox" : "radio"}
        name={name}
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "flex h-4 w-4 flex-shrink-0 items-center justify-center border-2",
          multi ? "rounded" : "rounded-full",
          selected ? "border-brand-300" : "border-zinc-600"
        )}
      >
        {selected && (
          <span
            className={cn("bg-brand-300", multi ? "h-2 w-2 rounded-[1px]" : "h-2 w-2 rounded-full")}
          />
        )}
      </span>
      <span className="text-sm leading-snug">{label}</span>
    </label>
  );
}
