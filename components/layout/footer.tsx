/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { pillars, site } from "@/data/site";
import { dunsLine } from "@/data/home";

const socials = [
  { label: "Facebook", href: site.social.facebook, icon: "/icons/fb-icon.svg" },
  { label: "Instagram", href: site.social.instagram, icon: "/icons/ig-icon.svg" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "/icons/linkedin-icon.svg" },
];

const columns = [
  {
    name: "Solutions",
    links: pillars.map(p => ({ label: p.name, href: p.href })),
  },
  {
    name: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Career", href: "/careers" },
      { label: "HiTerra", href: "/#flagship" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    name: "Services",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Our services", href: "/#services" },
      { label: "Our process", href: "/#process" },
      { label: "Solutions", href: "/solutions" },
    ],
  },
  {
    name: "Contact",
    links: [
      { label: "016-672 7208", href: "/contact" },
      { label: "contact@corplabs.co", href: "mailto:contact@corplabs.co" },
      { label: "Send an inquiry", href: "/#contact" },
    ],
  },
];

/** Deep-violet footer (DS: footer sits on primary-950, not black). */
export default function Footer() {
  return (
    <footer className="bg-brand-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-6 pt-14 sm:px-6 lg:grid-cols-[1fr_3fr]">
        <div>
          {/*
            * The mark, not logo-neg.png: that file is an opaque 600x600 export
            * whose navy background drew a visible square against the footer in
            * both themes. Two SVG variants, swapped by CSS like the header's.
            */}
          <div className="mb-5 flex items-center gap-2.5">
            <img src="/logo.svg" alt="" className="theme-dark-only h-9 w-9" />
            <img src="/logo-light.svg" alt="" className="theme-light-only h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              {site.name}
            </span>
          </div>
          <div className="flex gap-4">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {/* Pale lavender glyphs, drawn for the dark footer. The network's
                    name is the image's alt rather than an aria-label on the link:
                    same accessible name, and crawlers read alt as anchor text. */}
                <img src={s.icon} alt={s.label} className="theme-ink-icon h-[22px] w-[22px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {columns.map(col => (
            <div key={col.name}>
              {/* h2: these head the footer's own sections. As h4 they skipped
                  two levels under whatever the page's last h2 happened to be. */}
              <h2 className="mb-3.5 font-display text-[13px] font-semibold text-white">
                {col.name}
              </h2>
              {col.links.map(l =>
                l.href.includes(":") ? (
                  <a
                    key={l.label}
                    href={l.href}
                    className="mb-2 block text-[13px] text-zinc-200 transition-colors hover:text-brand-200"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="mb-2 block text-[13px] text-zinc-200 transition-colors hover:text-brand-200"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 border-t border-white/10 px-4 py-5 text-xs text-zinc-200 sm:flex-row sm:px-6">
        <span>
          {dunsLine} · © {new Date().getFullYear()} {site.name} — All rights reserved
        </span>
        <span className="flex gap-4">
          <Link href="/privacy" className="transition-colors hover:text-brand-200">
            Privacy Policy
          </Link>
          <span className="text-zinc-400">Kuala Lumpur, Malaysia</span>
        </span>
      </div>
    </footer>
  );
}
