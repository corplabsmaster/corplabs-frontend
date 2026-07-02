export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Is Corprise an Odoo Partner?",
    answer:
      "Corprise is built on Odoo Community by Corplabs Sdn Bhd. We are not an official Odoo Gold or Silver partner — that is deliberate. Partner status requires revenue commitments that we believe push implementation costs up for SMEs. Odoo® is a registered trademark of Odoo S.A.",
  },
  {
    question: "What's actually included in the monthly subscription?",
    answer:
      "Managed Odoo hosting on a dedicated Malaysian VPS, MyInvois e-Invoice integration, discovery workshop, team training, and a fixed number of refinement hours per month (2 to 24 depending on tier). Everything you need to go live and keep improving, in one predictable invoice.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Four to eight weeks for Starter through Scale tiers. Week 1 is discovery, weeks 2–7 are configuration, data migration, and training, and week 8 is go-live. Bespoke timelines depend on scope.",
  },
  {
    question: "What about MyInvois / LHDN e-Invoicing?",
    answer:
      "MyInvois integration is included in every tier — submission, validation, TIN lookup, consolidated e-invoice support, and archival. We handle the LHDN onboarding with you and stay current as the mandate phases expand through 2026.",
  },
  {
    question: "Do I own my data and my Odoo instance?",
    answer:
      "Yes. Your Odoo database runs on infrastructure dedicated to you. If you ever leave, we hand over the full database, your custom configurations, and documentation. No hostage customisations, no exit fees.",
  },
  {
    question: "Is there a contract lock-in?",
    answer:
      "Three months minimum to protect the implementation investment, then you're month-to-month. Cancel with 30 days notice any time after.",
  },
  {
    question: "How does this compare to an Odoo Gold Partner?",
    answer:
      "Gold partners are excellent for enterprises that need deep customisation and have budget for RM 80k–300k implementations plus hourly billing afterwards. Corprise is built for SMEs who want the same ERP with predictable subscription pricing, pre-built Malaysian workflows, and implementation in weeks instead of quarters.",
  },
  {
    question: "Can I upgrade, downgrade, or change tiers?",
    answer:
      "Yes. Use the scorecard any time to re-evaluate, or just email us. Upgrades activate on your next billing cycle with the new modules added to your instance. Downgrades require 30 days notice.",
  },
  {
    question: "What AI features are included?",
    answer:
      "Every tier includes Corpi — our Claude-powered assistant that handles WhatsApp enquiries, drafts invoices, summarises reports, and answers your team's questions about their own Odoo data. Higher tiers get more Corpi usage and custom workflows.",
  },
  {
    question: "What happens after the first 8 weeks?",
    answer:
      "Your subscription continues and your monthly refinement hours reset. Use them for new reports, workflow tweaks, new module rollouts, or training new staff. That's how Corprise keeps delivering value past go-live — the work compounds.",
  },
];
