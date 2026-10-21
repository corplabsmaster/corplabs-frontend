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
        role="Tech Developer Intern"
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

    const html = renderToStaticMarkup(<JobBody blocks={[link]} role="Tech Developer Intern" />);

    expect(html).toContain("<strong");
    expect(html).toContain('href="https://forms.gle/bTBX7mbrKhBECykJ9"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  // What the Notion API returns for a pasted form URL: the text is the public
  // notion.so address, the href a workspace-only app.notion.com one.
  const FORM_PUBLIC = "https://www.notion.so/1eb1f36a70cf80f49e87ef76eaa91a13?source=copy_link";
  const FORM_API_HREF = "https://app.notion.com/p/1eb1f36a70cf80f49e87ef76eaa91a13";
  const formItem = (type: "bulleted_list_item" | "paragraph"): NotionBlock => ({
    id: `form-${type}`,
    type,
    [type]: { rich_text: [{ plain_text: FORM_PUBLIC, href: FORM_API_HREF }] },
  });

  it.each(["bulleted_list_item", "paragraph"] as const)(
    "turns a %s that is only a pasted URL into the application-form button",
    type => {
      const html = renderToStaticMarkup(
        <JobBody blocks={[formItem(type)]} role="Growth Marketing Intern" />
      );

      expect(html).toContain("Fill in the application form");
      expect(html).toContain(`href="${FORM_PUBLIC.replace("&", "&amp;")}"`);
      expect(html).toContain('target="_blank"');
      expect(html).toContain('rel="noopener noreferrer"');
      // The raw address is no longer shown as text.
      expect(html).not.toContain(`>${FORM_PUBLIC}<`);
    }
  );

  it("never links to the workspace-only app.notion.com address", () => {
    const inline: NotionBlock = {
      id: "p2",
      type: "paragraph",
      paragraph: {
        rich_text: [
          { plain_text: "Apply via " },
          { plain_text: "our form", href: FORM_API_HREF },
        ],
      },
    };

    const html = renderToStaticMarkup(
      <JobBody blocks={[formItem("bulleted_list_item"), inline]} role="Growth Marketing Intern" />
    );

    expect(html).not.toContain("app.notion.com");
    // Link text that is not a URL keeps its words, pointed at www.notion.so.
    expect(html).toContain('href="https://www.notion.so/1eb1f36a70cf80f49e87ef76eaa91a13"');
    expect(html).toContain("our form");
  });

  it("ignores block types it does not model instead of breaking", () => {
    const html = renderToStaticMarkup(
      <JobBody
        role="Tech Developer Intern"
        blocks={[block("t", "table_of_contents"), block("p", "paragraph", "Still here.")]}
      />
    );

    expect(html).toContain("Still here.");
  });

  it("shows a graceful message when the page body is empty", () => {
    const html = renderToStaticMarkup(<JobBody blocks={[]} role="Tech Developer Intern" />);
    expect(html).toContain("available on request");
  });
});
