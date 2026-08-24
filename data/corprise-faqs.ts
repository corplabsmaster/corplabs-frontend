export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Why a subscription instead of a one-off implementation?",
    answer:
      "Because ERP is never finished. A subscription puts the implementation, the hosting, and the ongoing refinements on one line — so improving the system doesn't require a change request and a new PO.",
  },
  {
    question: "Is this real Odoo, or a Corplabs product?",
    answer:
      "It's real Odoo. You get standard Odoo modules, configured and hosted by us, so nothing is locked to a proprietary platform. Your data and configuration are exportable.",
  },
  {
    question: "What happens if we outgrow a tier?",
    answer:
      "You move up a tier mid-cycle and we pro-rate the difference. Module enablement and migration work are included — there's no re-implementation fee.",
  },
  {
    question: "Where is our data hosted?",
    answer:
      "In Malaysia, on infrastructure we manage, with daily backups. On Bespoke we'll host in the region or on-premise if compliance demands it.",
  },
  {
    question: "Do you charge per user?",
    answer:
      "No. Each tier includes a user ceiling and the monthly price doesn't move as you fill it. If you exceed it, you move up a tier — that's the only change.",
  },
  {
    question: "What if we want to leave?",
    answer:
      "Three-month minimum, then month-to-month with 30 days' notice. You leave with a full database export and your Odoo configuration documented.",
  },
];
