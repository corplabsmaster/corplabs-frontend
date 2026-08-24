"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CURRENCY_COOKIE,
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  isCurrency,
  type Currency,
} from "@/lib/currency";

interface CurrencyContextValue {
  currency: Currency;
  /** true once the client has resolved geo/stored preference (post-hydration) */
  ready: boolean;
  setCurrency: (next: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Deterministic initial value so SSR and first client render agree (no
  // hydration mismatch). The stored/geo preference is applied in the effect.
  const [currency, setCurrencyState] = useState<Currency>(DEFAULT_CURRENCY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let resolved: Currency = DEFAULT_CURRENCY;
    try {
      const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (isCurrency(stored)) {
        resolved = stored; // manual choice always wins
      } else {
        const geo = readCookie(CURRENCY_COOKIE); // set by edge middleware
        if (isCurrency(geo)) resolved = geo;
      }
    } catch {
      // storage unavailable (private mode etc.) — keep the default
    }
    setCurrencyState(resolved);
    setReady(true);
  }, []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    try {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, next);
      document.cookie = `${CURRENCY_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // ignore persistence failures
    }
  }, []);

  const value = useMemo(
    () => ({ currency, ready, setCurrency }),
    [currency, ready, setCurrency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
