/** /privacy — policy copy, structured for simple prose rendering. */

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  trailing?: string;
}

export const privacyPolicy: { title: string; lastUpdated: string; sections: PolicySection[] } = {
  title: "Privacy Policy",
  lastUpdated: "2 July 2026",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "Corplabs ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: ["We collect information that you provide directly to us, including:"],
      bullets: [
        "Contact information (name, email address, phone number)",
        "Company information",
        "Usage data and analytics",
        "Communication preferences",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Provide and maintain our services",
        "Respond to your inquiries and requests",
        "Send you technical notices and updates",
        "Improve our services and user experience",
        "Comply with legal obligations",
      ],
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: ["You have the right to:"],
      bullets: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Object to processing of your information",
        "Withdraw consent",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy Policy, please contact us at: privacy@corplabs.com",
      ],
    },
  ],
};
