import { describe, expect, it } from "vitest";
import { starterHref } from "@/components/corpi/WhatsAppDemo";
import { finalCta, liveDemo } from "@/data/corpi";

describe("WhatsApp live demo", () => {
  it("builds a wa.me link with the message prefilled", () => {
    const starter = liveDemo.starters.find(s => s.id === "en_pricing")!;
    const url = new URL(starterHref(starter));

    expect(url.origin + url.pathname).toBe(`https://wa.me/${liveDemo.number}`);
    expect(url.searchParams.get("text")).toBe(starter.text);
  });

  it("encodes non-Latin openers", () => {
    // The Chinese starter is the whole point of offering three languages; an
    // unencoded one would arrive mangled or drop the message entirely.
    const starter = liveDemo.starters.find(s => s.id === "zh_explain")!;
    const href = starterHref(starter);

    expect(href).not.toContain("你好");
    expect(new URL(href).searchParams.get("text")).toBe(starter.text);
  });

  it("keeps the number in the digits-only form wa.me requires", () => {
    // A leading + or spaces here yields a link that opens WhatsApp on an empty
    // chat rather than ours, which looks like the demo is simply broken.
    expect(liveDemo.number).toMatch(/^\d{8,15}$/);
  });

  it("points the closing CTA at a starter that exists", () => {
    // WhatsAppDemoButton falls back to the first starter on a bad id, so a typo
    // would quietly send visitors a different opener than intended.
    expect(liveDemo.starters.map(s => s.id)).toContain(finalCta.primaryCta.starterId);
  });

  it("gives every starter a unique, report-friendly id", () => {
    const ids = liveDemo.starters.map(s => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9_]{1,24}$/);
  });
});
