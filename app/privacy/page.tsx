import type { Metadata } from "next";
import { privacyPolicy } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Corplabs Privacy Policy — learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight text-white">
        {privacyPolicy.title}
      </h1>
      {privacyPolicy.sections.map(section => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-white">
            {section.heading}
          </h2>
          {section.paragraphs?.map(p => (
            <p key={p} className="mt-4 leading-relaxed text-zinc-400">
              {p}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
              {section.bullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <p className="mt-12 text-sm text-zinc-500">
        Last updated: {privacyPolicy.lastUpdated}
      </p>
    </div>
  );
}
