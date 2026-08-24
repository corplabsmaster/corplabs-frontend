import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides from the Corplabs team — MyInvois e-invoicing, Odoo ERP, WhatsApp AI agents, and building software for Southeast Asian businesses.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Notes from the <span className="gradient-text">workshop.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-200">
            Practical writing on the things we build with every week — e-invoicing
            compliance, ERP that doesn&apos;t bankrupt you, and AI that answers your
            WhatsApp. No fluff, no gate.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6">
        {posts.length === 0 ? (
          <p className="text-zinc-400">No posts yet — check back soon.</p>
        ) : (
          <div className="flex flex-col divide-y divide-white/[0.08]">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i, 4) * 0.06}>
                <article className="py-8 first:pt-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-500">
                      <time dateTime={post.publishedDate}>
                        {formatPostDate(post.publishedDate)}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-200 sm:text-[28px]">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-zinc-200">
                      {post.excerpt}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full border border-line px-2.5 py-1 font-display text-[11px] font-medium text-brand-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
