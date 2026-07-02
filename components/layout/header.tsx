import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="" width={28} height={28} />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
