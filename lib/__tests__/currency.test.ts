import { describe, expect, it } from "vitest";
import { convertAmount, formatPrice } from "@/lib/currency";

describe("convertAmount", () => {
  it("returns MYR unchanged", () => {
    expect(convertAmount(30000, "MYR")).toBe(30000);
  });

  it("rounds to 2 significant figures", () => {
    expect(convertAmount(30000, "USD")).toBe(6400); // 30000/4.7 = 6383 -> 6400
    expect(convertAmount(300000, "USD")).toBe(64000);
    expect(convertAmount(300, "USD")).toBe(64);
  });

  it("handles each currency", () => {
    expect(convertAmount(5050, "EUR")).toBe(1000); // 5050/5.05 = 1000
    expect(convertAmount(3500, "SGD")).toBe(1000); // 3500/3.5 = 1000
  });
});

describe("formatPrice", () => {
  it("leaves MYR untouched", () => {
    expect(formatPrice("from RM 30,000", "MYR")).toBe("from RM 30,000");
  });

  it("converts a single token and keeps surrounding text", () => {
    expect(formatPrice("from RM 30,000", "USD")).toBe("from USD 6,400");
    expect(formatPrice("RM 100 /mo", "USD")).toBe("USD 21 /mo");
  });

  it("converts spaced ranges", () => {
    expect(formatPrice("RM 1,000 – 5,000 / month", "USD")).toBe(
      "USD 210 – 1,100 / month"
    );
  });

  it("converts tight en-dash ranges", () => {
    expect(formatPrice("from RM 1,500 setup + RM 300–800/mo", "USD")).toBe(
      "from USD 320 setup + USD 64–170/mo"
    );
  });

  it("preserves a trailing plus", () => {
    expect(formatPrice("RM 300,000+", "USD")).toBe("USD 64,000+");
  });

  it("converts multiple independent tokens", () => {
    expect(
      formatPrice("from RM 30,000 · discovery from RM 5,000", "USD")
    ).toBe("from USD 6,400 · discovery from USD 1,100");
  });

  it("does not touch non-price numbers", () => {
    expect(formatPrice("up to 3 users · RM 2,000", "USD")).toBe(
      "up to 3 users · USD 430"
    );
  });
});
