/**
 * The site-wide Corpi enquiry widget.
 *
 * Everything the widget says lives here, the same way page copy lives in the
 * other files in this directory.
 */

export interface QuickReply {
  /** Short, low-cardinality id — this is the GA4 dimension value. */
  id: string;
  label: string;
  /** Seeded into the composer when tapped, so the visitor can still edit it. */
  text: string;
}

/**
 * WhatsApp number the widget hands off to, international format, digits only.
 *
 * Deliberately separate from liveDemo.number in data/corpi.ts: that one is the
 * Corpi product demo on /corpi, this one fields general enquiries about
 * Corplabs. They can be the same line or different ones — changing this
 * constant is the only edit needed to point the widget somewhere else.
 */
export const CHAT_NUMBER = "60166727208";

export const chat = {
  /** Sits under the name in the panel header. */
  status: "Corpi · replies in seconds",
  launcherLabel: "Chat with Corpi",
  agentName: "Corpi",
  /**
   * The opening line. It says what the widget actually does, because the
   * handoff has to be honest: Corpi answers on WhatsApp, not in this box, and
   * a visitor who types a question here should know where the reply arrives.
   */
  greeting:
    "Hi! I'm Corpi — the same AI agent Corplabs builds for its clients, answering for Corplabs itself. Tell me what you need and I'll pick it up on WhatsApp.",
  quickReplies: [
    {
      id: "quote",
      label: "Get a quote",
      text: "Hi Corpi, I'd like a quote. Here's what I'm trying to build: ",
    },
    {
      id: "corpi_for_me",
      label: "Corpi for my business",
      text: "Hi Corpi, I want an agent like you on my own WhatsApp number. My business is: ",
    },
    {
      id: "erp",
      label: "ERP / MyInvois",
      text: "Hi Corpi, I need help with Odoo ERP and MyInvois e-invoicing. My situation: ",
    },
    {
      id: "website",
      label: "A website",
      text: "Hi Corpi, I need a website built. What I have in mind: ",
    },
  ] as QuickReply[],
  placeholder: "Type your message…",
  /** Shown while the handoff happens, as a Corpi bubble. */
  handoff: "Got it — opening WhatsApp so I can reply on your number.",
  /**
   * Desktop fallback. wa.me opens WhatsApp Web, which is a QR-code wall for
   * anyone not already signed in there, so the message must not be trapped
   * inside a window they cannot use.
   */
  fallbackLead: "WhatsApp didn't open?",
  fallbackCopy: "Copy the message",
  fallbackCopied: "Copied",
  emailLabel: "email us instead",
  email: "contact@corplabs.co",
};
