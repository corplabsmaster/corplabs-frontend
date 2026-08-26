import { sendGAEvent } from "@next/third-parties/google";

/**
 * GA4 custom events. Every event name and parameter lives here so the tracking
 * plan is one file rather than strings scattered through components — the same
 * reason copy lives in data/ and logic in lib/.
 *
 * Client-only: import from client components. Nothing is sent when
 * NEXT_PUBLIC_GA_ID is unset, which keeps local and preview runs silent
 * (sendGAEvent otherwise warns to the console on every call).
 *
 * GA4 rules these obey: snake_case names under 40 chars, and parameter values
 * kept short and low-cardinality so they are usable as report dimensions.
 */

const GA_ENABLED = Boolean(process.env.NEXT_PUBLIC_GA_ID);

type EventParams = Record<string, string | number | boolean | undefined>;

function track(name: string, params: EventParams = {}): void {
  if (!GA_ENABLED || typeof window === "undefined") return;

  // Drop undefined so GA4 does not register empty dimensions.
  const clean: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") clean[key] = value;
  }

  sendGAEvent("event", name, clean);
}

/** The four interactive finders, named as they appear in reports. */
export type WizardTool =
  | "problem_router"
  | "corpcode_tier_finder"
  | "corprise_scorecard"
  | "corpsite_plan_selector"
  | "home_mini_finder";

/** An inquiry reached Notion. Mark this one as a key event in GA4. */
export function trackContactSubmit(intent: string): void {
  track("contact_submit", { intent });
}

/**
 * An inquiry failed. Worth tracking: when the Notion integration lost access
 * to the inquiries database, the form failed silently for real visitors.
 */
export function trackContactError(reason: "server" | "network", status?: number): void {
  track("contact_error", { reason, status });
}

/** A finder reached its recommendation. `result` is the tier or answer shown. */
export function trackWizardComplete(tool: WizardTool, result: string): void {
  track("wizard_complete", { tool, result });
}

/** Display currency switched — the signal behind offering USD/EUR/SGD at all. */
export function trackCurrencyChange(currency: string, source: "desktop" | "mobile"): void {
  track("currency_change", { currency, source });
}

/** An apply button on a job description was clicked. */
export function trackApplyClick(role: string, placement: "top" | "bottom"): void {
  track("apply_click", { role, placement });
}

/** The Corpi chat demo was actually driven, not just scrolled past. */
export function trackDemoEngaged(location: "corpi_page" | "home_tabs"): void {
  track("demo_engaged", { location });
}
