import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { JobBody } from "@/components/careers/JobBody";
import type { NotionBlock } from "@/lib/notion-blocks";

function block(id: string, type: string, text?: string): NotionBlock {
  const b: NotionBlock = { id, type };
  if (text !== undefined) {
    (b as unknown as Record<string, unknown>)[type] = { rich_text: [{ plain_text: text }] };
  }
  return b;
}

describe("JobBody", () => {
  it("renders a JD as headings and real lists", () => {
    const html = renderToStaticMarkup(
      <JobBody
        blocks={[
          block("h1", "heading_1", "Responsibilities"),
          block("b1", "bulleted_list_item", "Design and develop applications"),
          block("b2", "bulleted_list_item", "Write testable code"),
          block("h2", "heading_2", "Requirements"),
          block("n1", "numbered_list_item", "3+ years experience"),
        ]}
      />
    );

    expect(html).toContain("Responsibilities");
    expect(html).toContain("Design and develop applications");
    // One <ul> holding both bullets, not two.
    expect(html.match(/<ul/g)).toHaveLength(1);
    expect(html.match(/<li/g)).toHaveLength(3);
    expect(html).toContain("<ol");
  });

  it("renders links and bold text from rich-text annotations", () => {
    const link: NotionBlock = {
      id: "p1",
      type: "paragraph",
      paragraph: {
        rich_text: [
          { plain_text: "Apply here: " , annotations: { bold: true } },
          { plain_text: "the form", href: "https://forms.gle/bTBX7mbrKhBECykJ9" },
        ],
      },
    };

    const html = renderToStaticMarkup(<JobBody blocks={[link]} />);

    expect(html).toContain("<strong");
    expect(html).toContain('href="https://forms.gle/bTBX7mbrKhBECykJ9"');
    expect(html).toContain('rel="noreferrer"');
  });

  it("ignores block types it does not model instead of breaking", () => {
    const html = renderToStaticMarkup(
      <JobBody
        blocks={[block("t", "table_of_contents"), block("p", "paragraph", "Still here.")]}
      />
    );

    expect(html).toContain("Still here.");
  });

  it("shows a graceful message when the page body is empty", () => {
    const html = renderToStaticMarkup(<JobBody blocks={[]} />);
    expect(html).toContain("available on request");
  });
});
