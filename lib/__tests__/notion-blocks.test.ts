import { describe, expect, it } from "vitest";
import { slugify } from "@/lib/jobs";
import { blocksToPlainText, groupBlocks, type NotionBlock } from "@/lib/notion-blocks";

/** Shorthand for a text-bearing block in Notion's shape. */
function block(id: string, type: string, text?: string): NotionBlock {
  const b: NotionBlock = { id, type };
  if (text !== undefined) {
    (b as unknown as Record<string, unknown>)[type] = { rich_text: [{ plain_text: text }] };
  }
  return b;
}

describe("groupBlocks", () => {
  it("collapses a run of bullets into one list", () => {
    const nodes = groupBlocks([
      block("h", "heading_1", "Responsibilities"),
      block("a", "bulleted_list_item", "Design systems"),
      block("b", "bulleted_list_item", "Write tests"),
      block("p", "paragraph", "And so on."),
    ]);

    expect(nodes).toHaveLength(3);
    expect(nodes[0]).toMatchObject({ kind: "block" });
    expect(nodes[1]).toMatchObject({ kind: "list", tag: "ul" });
    expect(nodes[1].kind === "list" && nodes[1].items).toHaveLength(2);
    expect(nodes[2]).toMatchObject({ kind: "block" });
  });

  it("does not merge adjacent lists of different types", () => {
    const nodes = groupBlocks([
      block("a", "bulleted_list_item", "one"),
      block("b", "numbered_list_item", "two"),
    ]);

    expect(nodes).toHaveLength(2);
    expect(nodes[0]).toMatchObject({ kind: "list", tag: "ul" });
    expect(nodes[1]).toMatchObject({ kind: "list", tag: "ol" });
  });

  it("starts a new list when a paragraph interrupts the run", () => {
    const nodes = groupBlocks([
      block("a", "bulleted_list_item", "one"),
      block("p", "paragraph", "aside"),
      block("b", "bulleted_list_item", "two"),
    ]);

    expect(nodes.map(n => n.kind)).toEqual(["list", "block", "list"]);
  });

  it("returns nothing for an empty page", () => {
    expect(groupBlocks([])).toEqual([]);
  });
});

describe("blocksToPlainText", () => {
  it("flattens headings, paragraphs and bullets in order", () => {
    const text = blocksToPlainText([
      block("h", "heading_1", "Qualifications"),
      block("a", "bulleted_list_item", "3+ years experience"),
      block("p", "paragraph", "Remote role"),
    ]);

    expect(text).toBe("Qualifications\n3+ years experience\nRemote role");
  });

  it("includes nested children", () => {
    const parent = block("a", "bulleted_list_item", "Parent");
    parent.children = [block("b", "bulleted_list_item", "Child")];

    expect(blocksToPlainText([parent])).toBe("Parent\nChild");
  });

  it("skips blocks with no text, such as dividers", () => {
    expect(blocksToPlainText([{ id: "d", type: "divider" }])).toBe("");
  });
});

describe("slugify", () => {
  it("makes a URL-safe slug from a role title", () => {
    expect(slugify("Senior Java Backend")).toBe("senior-java-backend");
  });

  it("collapses punctuation rather than leaving it in the path", () => {
    expect(slugify("Senior NodeJS Full Stack Engineer(Backend Heavy)")).toBe(
      "senior-nodejs-full-stack-engineer-backend-heavy"
    );
    expect(slugify("Multimedia Designer(Part-time)")).toBe("multimedia-designer-part-time");
  });

  it("leaves no leading or trailing separators", () => {
    expect(slugify("  Product Manager  ")).toBe("product-manager");
  });
});
