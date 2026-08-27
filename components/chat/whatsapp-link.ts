import { CHAT_NUMBER } from "@/data/chat";

/**
 * Builds the wa.me handoff.
 *
 * The visitor's own words go first — what lands in the sales thread should read
 * as their message, not as a form submission. The page they wrote from is
 * appended because whoever picks up the thread otherwise has no idea whether
 * they were reading about ERP or about websites, and asking costs a reply.
 */
export function chatHandoffUrl(message: string, page: string): string {
  const trimmed = message.trim();
  const context = page && page !== "/" ? `\n\n(from corplabs.co${page})` : "\n\n(from corplabs.co)";
  return `https://wa.me/${CHAT_NUMBER}?text=${encodeURIComponent(trimmed + context)}`;
}
