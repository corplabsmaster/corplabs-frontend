"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const capsuleNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Corpi", href: "/corpi", isNew: true },
  { label: "Corpcode", href: "/corpcode" },
  { label: "Corprise", href: "/corprise" },
  { label: "Corpsite", href: "/corpsite" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-5 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="" width={28} height={28} />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <div className="flex-1" />

        {/* Capsule nav (DS signature) */}
        <nav className="hidden items-center gap-6 rounded-full border-[1.5px] border-brand-600 bg-surface-raised px-7 py-2.5 lg:flex">
          {capsuleNav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 font-display text-sm transition-colors hover:text-brand-200",
                pathname === item.href ? "font-medium text-brand-300" : "font-light text-white"
              )}
            >
              {item.label}
              {item.isNew && (
                <span className="rounded-full bg-[#424DE2] px-2 py-0.5 font-display text-[10px] font-semibold text-white">
                  New
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 font-display text-xs font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-600"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-300 hover:text-white lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-4 py-4 sm:px-6 lg:hidden">
          <ul className="space-y-1">
            {[...capsuleNav, { label: "Contact", href: "/contact", isNew: false }].map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 font-display text-sm transition-colors hover:bg-surface-raised hover:text-white",
                    pathname === item.href ? "text-brand-300" : "text-zinc-300"
                  )}
                >
                  {item.label}
                  {item.isNew && (
                    <span className="rounded-full bg-[#424DE2] px-2 py-0.5 text-[10px] font-semibold text-white">
                      New
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
