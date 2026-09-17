/**
 * Multi-currency display for indicative pricing.
 *
 * Prices across the site are authored in Malaysian Ringgit ("RM 30,000",
 * "RM 1,000 – 5,000 / month", "from RM 1,500 setup + RM 300–800/mo"). We keep
 * MYR as the single source of truth and convert on the client for display, so
 * an overseas visitor sees familiar numbers. Conversions are INDICATIVE — every
 * project is quoted and invoiced in MYR — and use fixed reference rates so the
 * marketing pages stay static (no FX API, no moving numbers).
 *
 * To refresh the rates, edit `RATES` and bump `RATES_UPDATED`.
 */

export type Currency = "USD" | "MYR" | "EUR" | "SGD";

export const DEFAULT_CURRENCY: Currency = "USD";

/** The cookie the edge middleware sets from the visitor's country. */
export const CURRENCY_COOKIE = "cl_currency";
/** localStorage key holding a manual override (always wins over geo). */
export const CURRENCY_STORAGE_KEY = "cl_currency_choice";

export interface CurrencyMeta {
  code: Currency;
  label: string;
  /** value of 1 MYR in this currency (MYR is the base = 1) */
  perMyr: number;
}

/** Fixed indicative reference rates. 1 unit ≈ the MYR shown in the comment. */
export const RATES_UPDATED = "2026-08";

export const CURRENCIES: Record<Currency, CurrencyMeta> = {
  USD: { code: "USD", label: "US Dollar", perMyr: 1 / 4.7 }, // 1 USD ≈ RM 4.70
  MYR: { code: "MYR", label: "Malaysian Ringgit", perMyr: 1 },
  EUR: { code: "EUR", label: "Euro", perMyr: 1 / 5.05 }, // 1 EUR ≈ RM 5.05
  SGD: { code: "SGD", label: "Singapore Dollar", perMyr: 1 / 3.5 }, // 1 SGD ≈ RM 3.50
};

export const CURRENCY_ORDER: Currency[] = ["USD", "MYR", "EUR", "SGD"];

export function isCurrency(value: unknown): value is Currency {
  return typeof value === "string" && value in CURRENCIES;
}

/** Display prefix used in front of an amount (mirrors the authored "RM"). */
function prefix(currency: Currency): string {
  return currency; // "USD 6,400", "RM 30,000" — code prefix, always unambiguous
}

/**
 * Convert a MYR amount to `currency`, rounded to 2 significant figures so
 * indicative prices read cleanly (RM 30,000 → USD 6,400, not USD 6,383).
 */
export function convertAmount(myr: number, currency: Currency): number {
  if (currency === "MYR") return myr;
  const value = myr * CURRENCIES[currency].perMyr;
  if (value === 0) return 0;
  return Number(value.toPrecision(2));
}

const PRICE_TOKEN =
  /RM\s*([\d,]+)(?:(\s*[–-]\s*)([\d,]+))?(\+)?/g;

const parseNum = (s: string) => Number(s.replace(/,/g, ""));
const group = (n: number) => n.toLocaleString("en-US");

/**
 * Reformat a MYR price string into `currency`. Every "RM <n>" token (including
 * ranges like "RM 300–800" and "RM 1,000 – 5,000", and "RM 300,000+") is
 * converted; all surrounding text (setup, /mo, ·, "from", etc.) is preserved.
 * Returns the string unchanged for MYR.
 */
export function formatPrice(rmString: string, currency: Currency): string {
  if (currency === "MYR") return rmString;
  return rmString.replace(
    PRICE_TOKEN,
    (_match, first: string, sep?: string, second?: string, plus?: string) => {
      const a = group(convertAmount(parseNum(first), currency));
      if (second != null) {
        const b = group(convertAmount(parseNum(second), currency));
        return `${prefix(currency)} ${a}${sep ?? "–"}${b}${plus ?? ""}`;
      }
      return `${prefix(currency)} ${a}${plus ?? ""}`;
    }
  );
}
