import Link from "next/link";
import { pillars, site } from "@/data/site";

const socials = [
  { label: "Twitter", href: site.social.twitter },
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Facebook", href: site.social.facebook },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-raised">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-400">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Products</p>
          <ul className="mt-3 space-y-2">
            {pillars.map(p => (
              <li key={p.id}>
                <Link
                  href={p.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {p.name} — {p.tagline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Company</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-zinc-400 hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-zinc-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-zinc-400 hover:text-white">
                Privacy policy
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-500 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
