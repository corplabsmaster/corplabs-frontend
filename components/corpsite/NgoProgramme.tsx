import { Button } from "@/components/ui/button";
import { ngoBand } from "@/data/corpsite";

/** NGO programme band — free Spark-tier builds for registered non-profits. */
export default function NgoProgramme() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface-raised p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
      <div>
        <span className="inline-block rounded-full border border-brand-600 bg-brand-600/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-200">
          {ngoBand.badge}
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {ngoBand.heading}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-200">{ngoBand.lede}</p>
      </div>
      <Button href={ngoBand.cta.href} variant="secondary" className="flex-none self-start">
        {ngoBand.cta.label}
      </Button>
    </div>
  );
}
