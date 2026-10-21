import { describe, expect, it } from "vitest";
import { slugify } from "@/lib/jobs";
import {
  bareLink,
  blocksToPlainText,
  firstNotionLink,
  groupBlocks,
  publicHref,
  type NotionBlock,
} from "@/lib/notion-blocks";

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

const FORM_ID = "1eb1f36a70cf80f49e87ef76eaa91a13";
const FORM_PUBLIC = `https://www.notion.so/${FORM_ID}?source=copy_link`;
const FORM_API_HREF = `https://app.notion.com/p/${FORM_ID}`;

describe("publicHref", () => {
  it("keeps the public notion.so URL an author pasted", () => {
    expect(publicHref({ plain_text: FORM_PUBLIC, href: FORM_API_HREF })).toBe(FORM_PUBLIC);
  });

  it("maps app.notion.com and relative page links back to www.notion.so", () => {
    expect(publicHref({ plain_text: "the form", href: FORM_API_HREF })).toBe(
      `https://www.notion.so/${FORM_ID}`
    );
    expect(publicHref({ plain_text: "the form", href: `/${FORM_ID}` })).toBe(
      `https://www.notion.so/${FORM_ID}`
    );
  });

  it("leaves links outside Notion, and public Notion links, untouched", () => {
    expect(publicHref({ plain_text: "x", href: "https://forms.gle/abc" })).toBe(
      "https://forms.gle/abc"
    );
    expect(publicHref({ plain_text: "x", href: "https://corplabs.notion.site/Jobs" })).toBe(
      "https://corplabs.notion.site/Jobs"
    );
    expect(publicHref({ plain_text: "no link" })).toBeUndefined();
  });
});

describe("bareLink", () => {
  it("finds a block that is only a pasted URL", () => {
    expect(bareLink([{ plain_text: FORM_PUBLIC, href: FORM_API_HREF }])).toBe(FORM_PUBLIC);
    expect(bareLink([{ plain_text: " https://forms.gle/abc ", href: "https://forms.gle/abc" }])).toBe(
      "https://forms.gle/abc"
    );
  });

  it("ignores text with words around the link, or a URL that is not linked", () => {
    expect(
      bareLink([{ plain_text: "Apply: " }, { plain_text: FORM_PUBLIC, href: FORM_API_HREF }])
    ).toBeNull();
    expect(bareLink([{ plain_text: "the form", href: FORM_API_HREF }])).toBeNull();
    expect(bareLink([{ plain_text: FORM_PUBLIC }])).toBeNull();
  });
});

describe("firstNotionLink", () => {
  it("returns the first public Notion link, searching nested blocks", () => {
    const blocks: NotionBlock[] = [
      { id: "a", type: "paragraph", paragraph: { rich_text: [{ plain_text: "Intro" }] } },
      {
        id: "b",
        type: "bulleted_list_item",
        bulleted_list_item: {
          rich_text: [{ plain_text: "elsewhere", href: "https://forms.gle/abc" }],
        },
        children: [
          {
            id: "c",
            type: "bulleted_list_item",
            bulleted_list_item: { rich_text: [{ plain_text: FORM_PUBLIC, href: FORM_API_HREF }] },
          },
        ],
      },
    ];
    expect(firstNotionLink(blocks)).toBe(FORM_PUBLIC);
  });

  it("is undefined when the JD links to no Notion page", () => {
    expect(firstNotionLink([])).toBeUndefined();
  });
});
