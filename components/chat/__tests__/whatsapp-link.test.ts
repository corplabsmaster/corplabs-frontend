import { describe, expect, it } from "vitest";
import { chatHandoffUrl } from "@/components/chat/whatsapp-link";
import { CHAT_NUMBER } from "@/data/chat";

function text(url: string) {
  return new URL(url).searchParams.get("text") ?? "";
}

describe("chatHandoffUrl", () => {
  it("sends the visitor's words first, with the page appended", () => {
    const url = chatHandoffUrl("I need an ERP", "/corprise");

    expect(new URL(url).pathname).toBe(`/${CHAT_NUMBER}`);
    expect(text(url)).toBe("I need an ERP\n\n(from corplabs.co/corprise)");
  });

  it("does not append a bare slash for the homepage", () => {
    expect(text(chatHandoffUrl("hello", "/"))).toBe("hello\n\n(from corplabs.co)");
    expect(text(chatHandoffUrl("hello", ""))).toBe("hello\n\n(from corplabs.co)");
  });

  it("trims the draft so stray whitespace does not open the thread", () => {
    expect(text(chatHandoffUrl("  hi  ", "/about"))).toBe("hi\n\n(from corplabs.co/about)");
  });

  it("encodes newlines and non-Latin text", () => {
    // Raw newlines in a query string truncate the message in some clients, and
    // the widget is offered to visitors writing BM and Chinese.
    const url = chatHandoffUrl("你好\nCorpi", "/corpi");
    expect(url).not.toContain("\n");
    expect(url).not.toContain("你好");
    expect(text(url)).toBe("你好\nCorpi\n\n(from corplabs.co/corpi)");
  });

  it("keeps the number in the digits-only form wa.me requires", () => {
    expect(CHAT_NUMBER).toMatch(/^\d{8,15}$/);
  });
});
