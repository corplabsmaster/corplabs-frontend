import Markdoc from "@markdoc/markdoc";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

/** Markdoc → styled HTML. Long-form typography tuned to the design system. */
const components = {};
const renderOptions = {
  nodes: {},
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const renderable = Markdoc.transform(post.node, renderOptions);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: post.author, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-20 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <Link
          href="/blog"
          className="font-display text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
        >
          ← All posts
        </Link>
        <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-white sm:text-[40px]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-500">
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedDate}>{formatPostDate(post.publishedDate)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
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
      </header>

      <div className="prose-blog mt-10">
        {Markdoc.renderers.react(renderable, React, { components })}
      </div>

      <footer className="mt-14 rounded-2xl border border-line bg-surface-raised p-7 sm:p-9">
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
          Building something like this?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-200">
          We design, build, and maintain software for businesses across Southeast
          Asia — and overseas. Discovery calls are free.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/contact" size="sm" className="font-display uppercase tracking-[0.08em]">
            Talk to us
          </Button>
          <Button href="/solutions" size="sm" variant="secondary" className="font-display uppercase tracking-[0.08em]">
            See what we build
          </Button>
        </div>
      </footer>
    </article>
  );
}
