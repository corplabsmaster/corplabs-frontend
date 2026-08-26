import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendGAEvent = vi.fn();
vi.mock("@next/third-parties/google", () => ({
  sendGAEvent: (...args: unknown[]) => sendGAEvent(...args),
}));

/** GA_ENABLED is read at module load, so each case imports a fresh copy. */
async function loadAnalytics(gaId?: string) {
  vi.resetModules();
  if (gaId) process.env.NEXT_PUBLIC_GA_ID = gaId;
  else delete process.env.NEXT_PUBLIC_GA_ID;
  return import("@/lib/analytics");
}

beforeEach(() => {
  sendGAEvent.mockClear();
  // Tests run in the node environment; without a window the module's
  // server-side guard would short-circuit and every case would pass vacuously.
  vi.stubGlobal("window", {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.NEXT_PUBLIC_GA_ID;
});

describe("analytics", () => {
  it("sends the event name and parameters GA4 will report on", async () => {
    const { trackContactSubmit } = await loadAnalytics("G-TEST");

    trackContactSubmit("Corpi demo");

    expect(sendGAEvent).toHaveBeenCalledWith("event", "contact_submit", {
      intent: "Corpi demo",
    });
  });

  it("stays silent when NEXT_PUBLIC_GA_ID is unset", async () => {
    const { trackContactSubmit } = await loadAnalytics();

    trackContactSubmit("General");

    // Local and preview runs have no GA ID; sendGAEvent would warn on every call.
    expect(sendGAEvent).not.toHaveBeenCalled();
  });

  it("drops undefined and empty values rather than sending blank dimensions", async () => {
    const { trackContactError } = await loadAnalytics("G-TEST");

    trackContactError("network");

    expect(sendGAEvent).toHaveBeenCalledWith("event", "contact_error", {
      reason: "network",
    });
  });

  it("keeps a zero, which is a real value and not a missing one", async () => {
    const { trackContactError } = await loadAnalytics("G-TEST");

    trackContactError("server", 0);

    expect(sendGAEvent).toHaveBeenCalledWith("event", "contact_error", {
      reason: "server",
      status: 0,
    });
  });

  it("names every wizard event consistently for reporting", async () => {
    const { trackWizardComplete } = await loadAnalytics("G-TEST");

    trackWizardComplete("corprise_scorecard", "Growth");

    expect(sendGAEvent).toHaveBeenCalledWith("event", "wizard_complete", {
      tool: "corprise_scorecard",
      result: "Growth",
    });
  });
});
