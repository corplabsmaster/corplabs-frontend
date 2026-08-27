"use client";

import { useCallback } from "react";
import { THEME_KEY } from "@/lib/theme";
import { cn } from "@/lib/utils";

function apply(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Private mode / storage disabled — the toggle still works for this visit.
  }
}

/**
 * Light/dark switch. Dark is the default everyone sees first; a visitor who
 * picks light keeps it, stored under THEME_KEY and re-applied before paint by
 * the inline script in app/layout.tsx.
 *
 * The button holds no React state on purpose. Which icon shows is decided by
 * CSS on html[data-theme] (see globals.css), so the server and client render
 * the same markup — a stateful version would either mismatch on hydration or
 * flash the wrong icon on every load.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = useCallback(() => {
    apply(document.documentElement.dataset.theme === "light" ? "dark" : "light");
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-line text-zinc-200 transition-colors hover:border-brand-500 hover:text-white",
        className
      )}
    >
      {/* Shown on dark: click for light. */}
      <svg
        className="theme-dark-only"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
        <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2.2v1.9M10 15.9v1.9M2.2 10h1.9M15.9 10h1.9M4.5 4.5l1.35 1.35M14.15 14.15l1.35 1.35M15.5 4.5l-1.35 1.35M5.85 14.15L4.5 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Shown on light: click for dark. */}
      <svg
        className="theme-light-only"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
        <path
          d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
