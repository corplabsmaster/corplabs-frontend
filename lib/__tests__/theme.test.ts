import { describe, expect, it, vi } from "vitest";
import { THEME_KEY, themeInitScript } from "@/lib/theme";

/**
 * The pre-paint script is a string, so nothing type-checks it against the
 * toggle that writes the value it reads. These run it the way the browser
 * does, against a stub of the two globals it touches.
 */
function run(stored: string | null | (() => never)) {
  const root = { dataset: {} as Record<string, string> };
  const getItem = vi.fn(() => {
    if (typeof stored === "function") stored();
    return stored;
  });
  const fn = new Function("localStorage", "document", themeInitScript);
  fn({ getItem }, { documentElement: root });
  return { root, getItem };
}

describe("themeInitScript", () => {
  it("reads the same key the toggle writes", () => {
    const { getItem } = run(null);
    expect(getItem).toHaveBeenCalledWith(THEME_KEY);
  });

  it("applies the light theme before React can paint the dark default", () => {
    expect(run("light").root.dataset.theme).toBe("light");
  });

  it("leaves the attribute off for dark, which is the default", () => {
    // Writing data-theme="dark" would work too, but the absence of the
    // attribute is what the CSS treats as dark — keep the two in step.
    expect(run("dark").root.dataset.theme).toBeUndefined();
    expect(run(null).root.dataset.theme).toBeUndefined();
  });

  it("survives storage being unavailable", () => {
    // Safari private mode throws on access rather than returning null; an
    // uncaught throw here would abort the document's first inline script.
    expect(() =>
      run(() => {
        throw new Error("SecurityError");
      })
    ).not.toThrow();
  });
});
