/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { groupBlocks, type NotionBlock, type RichTextItem } from "@/lib/notion-blocks";

/**
 * Renders a Notion page body as the job description. Consecutive list items
 * are grouped into a single <ul>/<ol> so the markup is real lists rather than
 * a run of orphaned <li>s.
 */

function Text({ parts }: { parts?: RichTextItem[] }) {
  return (
    <>
      {(parts ?? []).map((part, i) => {
        const text = part.plain_text ?? "";
        if (!text) return null;
        const a = part.annotations ?? {};

        let node = <>{text}</>;
        if (a.code)
          node = (
            <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-[0.9em] text-brand-200">
              {node}
            </code>
          );
        if (a.bold) node = <strong className="font-semibold text-white">{node}</strong>;
        if (a.italic) node = <em>{node}</em>;
        if (a.strikethrough) node = <s>{node}</s>;
        if (a.underline) node = <u>{node}</u>;
        if (part.href)
          node = (
            <a
              href={part.href}
              target="_blank"
              rel="noreferrer"
              className="text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
            >
              {node}
            </a>
          );

        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}

function Block({ block }: { block: NotionBlock }) {
  switch (block.type) {
    case "paragraph": {
      const parts = block.paragraph?.rich_text ?? [];
      if (parts.length === 0) return null;
      return (
        <p className="mt-4 text-[15px] leading-relaxed text-zinc-200">
          <Text parts={parts} />
        </p>
      );
    }
    case "heading_1":
      return (
        <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-white">
          <Text parts={block.heading_1?.rich_text} />
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-white">
          <Text parts={block.heading_2?.rich_text} />
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="mt-6 font-display text-base font-semibold text-white">
          <Text parts={block.heading_3?.rich_text} />
        </h4>
      );
    case "bulleted_list_item":
    case "numbered_list_item": {
      const payload =
        block.type === "bulleted_list_item" ? block.bulleted_list_item : block.numbered_list_item;
      return (
        <li className="text-[15px] leading-relaxed text-zinc-200 marker:text-brand-400">
          <Text parts={payload?.rich_text} />
          {block.children?.length ? <Blocks blocks={block.children} /> : null}
        </li>
      );
    }
    case "to_do":
      return (
        <li className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-200">
          <span aria-hidden className="text-brand-400">
            {block.to_do?.checked ? "☑" : "☐"}
          </span>
          <span>
            <Text parts={block.to_do?.rich_text} />
          </span>
        </li>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-brand-500 pl-5 text-[15px] italic leading-relaxed text-zinc-300">
          <Text parts={block.quote?.rich_text} />
        </blockquote>
      );
    case "callout":
      return (
        <div className="mt-6 flex gap-3 rounded-xl border border-line bg-surface-raised p-5">
          {block.callout?.icon?.emoji && (
            <span aria-hidden className="text-lg leading-none">
              {block.callout.icon.emoji}
            </span>
          )}
          <div className="text-[15px] leading-relaxed text-zinc-200">
            <Text parts={block.callout?.rich_text} />
          </div>
        </div>
      );
    case "toggle":
      return (
        <details className="mt-4 rounded-xl border border-line bg-surface-raised p-5">
          <summary className="cursor-pointer font-display text-[15px] font-medium text-white">
            <Text parts={block.toggle?.rich_text} />
          </summary>
          {block.children?.length ? <Blocks blocks={block.children} /> : null}
        </details>
      );
    case "code":
      return (
        <pre className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface-raised p-5">
          <code className="font-mono text-[13px] leading-relaxed text-zinc-200">
            {(block.code?.rich_text ?? []).map(t => t.plain_text ?? "").join("")}
          </code>
        </pre>
      );
    case "divider":
      return <hr className="mt-8 border-line" />;
    case "image": {
      const src = block.image?.external?.url ?? block.image?.file?.url;
      if (!src) return null;
      const caption = (block.image?.caption ?? []).map(t => t.plain_text ?? "").join("");
      return (
        <figure className="mt-6">
          <img src={src} alt={caption} className="w-full rounded-xl border border-line" />
          {caption && <figcaption className="mt-2 text-xs text-zinc-500">{caption}</figcaption>}
        </figure>
      );
    }
    case "bookmark": {
      const url = block.bookmark?.url;
      if (!url) return null;
      return (
        <p className="mt-4 text-[15px] leading-relaxed">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-brand-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            {url}
          </a>
        </p>
      );
    }
    default:
      // Unknown block types render as nothing rather than breaking the page.
      return null;
  }
}

export function Blocks({ blocks }: { blocks: NotionBlock[] }) {
  return (
    <>
      {groupBlocks(blocks).map(node => {
        if (node.kind === "block") {
          return <Block key={node.block.id} block={node.block} />;
        }
        const List = node.tag;
        return (
          <List
            key={node.items[0].id}
            className={
              node.tag === "ol"
                ? "mt-4 list-decimal space-y-2 pl-5"
                : node.itemType === "to_do"
                  ? "mt-4 space-y-2"
                  : "mt-4 list-disc space-y-2 pl-5"
            }
          >
            {node.items.map(block => (
              <Block key={block.id} block={block} />
            ))}
          </List>
        );
      })}
    </>
  );
}

export function JobBody({ blocks }: { blocks: NotionBlock[] }) {
  if (blocks.length === 0) {
    return (
      <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">
        The full description for this role is available on request — get in touch and
        we&apos;ll send it over.
      </p>
    );
  }
  return <Blocks blocks={blocks} />;
}
