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
    name: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Culture", href: "/#about-strip" },
      { label: "Career", href: "/#careers" },
    ],
  },
  {
    name: "Products",
    links: pillars.map(p => ({ label: p.name, href: p.href })),
  },
  {
    name: "Resources",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Our Process", href: "/#process" },
      { label: "HiTerra", href: "/#flagship" },
    ],
  },
  {
    name: "Contact",
    links: [
      { label: "016-672 7208", href: "/contact" },
      { label: "contact@corplabs.co", href: "mailto:contact@corplabs.co" },
      { label: "Inquiry", href: "/#contact" },
    ],
  },
];

/** Deep-violet footer (DS: footer sits on primary-950, not black). */
export default function Footer() {
  return (
    <footer className="bg-brand-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-6 pt-14 sm:px-6 lg:grid-cols-[1fr_3fr]">
        <div>
          <img src="/logo-neg.png" alt={site.name} className="mb-5 block h-9 w-auto" />
          <div className="flex gap-4">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <img src={s.icon} alt="" className="h-[22px] w-[22px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {columns.map(col => (
            <div key={col.name}>
              <h4 className="mb-3.5 font-display text-[13px] font-semibold text-white">
                {col.name}
              </h4>
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
        <Link href="/privacy" className="transition-colors hover:text-brand-200">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
