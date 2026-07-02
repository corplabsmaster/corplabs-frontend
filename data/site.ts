/**
 * Site-wide data: brand, navigation, the four product pillars, and
 * social/contact details. Page-specific content lives in the other
 * files in this directory.
 */

export const site = {
  name: "Corplabs",
  tagline: "Idea to Reality",
  description:
    "Corplabs turns ideas into working software. Four pillars: Corpi (AI WhatsApp agents), Corpcode (custom software builds), Corprise (subscription-priced ERP), and Corpsite (websites). One team, one playbook.",
  url: "https://corplabs.co",
  phone: "+6583937108",
  social: {
    twitter: "https://twitter.com/coprlabs_co",
    instagram: "https://www.instagram.com/corplabs_co/",
    linkedin: "https://www.linkedin.com/company/corplabsco",
    facebook: "https://www.facebook.com/corplabs.co/",
  },
} as const;

export interface Pillar {
  id: string;
  name: string;
  href: string;
  tagline: string;
  blurb: string;
}

export const pillars: Pillar[] = [
  {
    id: "corpi",
    name: "Corpi",
    href: "/corpi",
    tagline: "AI WhatsApp sales agents",
    blurb:
      "A done-for-you AI agent on your WhatsApp number. Captures leads 24/7, replies in BM, English, and Chinese, and files everything into your CRM.",
  },
  {
    id: "corpcode",
    name: "Corpcode",
    href: "/corpcode",
    tagline: "Custom software builds",
    blurb:
      "From internal tools to full ERPs — we design, build, and maintain the systems off-the-shelf software can't touch.",
  },
  {
    id: "corprise",
    name: "Corprise",
    href: "/corprise",
    tagline: "Subscription-priced Odoo ERP",
    blurb:
      "Odoo ERP for Malaysian SMEs on one monthly subscription — implementation, hosting, MyInvois compliance, and refinements included.",
  },
  {
    id: "corpsite",
    name: "Corpsite",
    href: "/corpsite",
    tagline: "Websites that ship in days",
    blurb:
      "Tiered website packages from a one-page Spark to a full Suite — designed, built, and maintained by the same team behind everything else.",
  },
];

export const nav = [
  { label: "Solutions", href: "/solutions" },
  ...pillars.map(p => ({ label: p.name, href: p.href })),
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
