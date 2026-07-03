import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Corplabs — tell us what you're building and we'll come back with a written scope and a fixed quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-brand-600/25 blur-3xl"
      />
      <Reveal className="mx-auto max-w-4xl px-4 pt-24 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {contact.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">{contact.lede}</p>
        <p className="mt-4 text-sm text-zinc-500">
          Prefer email?{" "}
          <a href={`mailto:${contact.email}`} className="text-brand-300 hover:text-white">
            {contact.email}
          </a>{" "}
          · WhatsApp{" "}
          <a href={`tel:${site.phone}`} className="text-brand-300 hover:text-white">
            {site.phone}
          </a>
        </p>
      </Reveal>

      <div className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <iframe
            src={contact.formEmbedUrl}
            title="Corplabs enquiry form"
            className="h-[115vh] w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
