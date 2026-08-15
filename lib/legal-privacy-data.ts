/* Legal — Privacy Policy (/legal/privacy). Level 13 · Legal.
   Data-driven so Terms/License/Warranty legal pages can reuse the template. */

export type LegalSection = {
  id: string;
  icon: string;
  title: string;
  text?: string;
  introLine?: string;
  bullets?: string[];
  link?: { label: string; href: string };
  inlineLink?: { before: string; label: string; href: string; after: string };
  contact?: { email: string; phone: string; addressLines: string[] };
};

export const PRIVACY_HERO = {
  level: "Level 13",
  section: "Legal",
  title: "Privacy Policy",
  desc: "At Skyve Roofing & Exteriors, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website or use our services.",
  updated: "Last Updated: May 10, 2024",
  image: "",
  overlayTitle: "Your Privacy. Our Priority.",
  overlayDesc: "We follow industry best practices to keep your information safe and secure.",
  overlayBadges: [
    { icon: "shield", title: "Secure", desc: "Your data is protected" },
    { icon: "eye", title: "Transparent", desc: "We are clear about our practices" },
    { icon: "user", title: "Your Choice", desc: "You control your information" },
    { icon: "badge", title: "Compliant", desc: "We follow legal requirements" },
  ],
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    icon: "user",
    title: "Information We Collect",
    text: "We collect information you provide directly to us, such as when you fill out forms, request an estimate, schedule a service, or contact us. This may include:",
    bullets: [
      "Name, email address, phone number",
      "Property address",
      "Project details and preferences",
      "Any other information you choose to provide",
    ],
  },
  {
    id: "how-we-use-your-information",
    icon: "document",
    title: "How We Use Your Information",
    introLine: "We use your information to:",
    bullets: [
      "Provide, operate, and improve our services",
      "Respond to your inquiries and requests",
      "Send you service updates and important notices",
      "Enhance your experience on our website",
    ],
  },
  {
    id: "information-sharing",
    icon: "users",
    title: "Information Sharing",
    text: "We do not sell your personal information. We may share your information only in the following situations:",
    bullets: [
      "With trusted service providers who assist in our operations (e.g., scheduling, payments, marketing)",
      "When required by law or to protect our legal rights",
      "In connection with a business transfer (e.g., merger or acquisition)",
    ],
  },
  {
    id: "cookies-tracking",
    icon: "cookie",
    title: "Cookies & Tracking Technologies",
    text: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.",
    link: { label: "Learn more in our Cookie Policy", href: "#" },
  },
  {
    id: "data-security",
    icon: "shield",
    title: "Data Security",
    text: "We implement industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.",
  },
  {
    id: "your-rights-choices",
    icon: "user",
    title: "Your Rights & Choices",
    introLine: "You have the right to:",
    bullets: [
      "Access the personal information we have about you",
      "Request corrections to inaccurate information",
      "Request deletion of your information",
      "Opt out of marketing communications at any time",
    ],
  },
  {
    id: "third-party-links",
    icon: "link",
    title: "Third-Party Links",
    text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.",
  },
  {
    id: "childrens-privacy",
    icon: "users",
    title: "Children's Privacy",
    text: "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    id: "changes-to-policy",
    icon: "edit",
    title: "Changes to This Policy",
    text: 'We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new "Last Updated" date.',
  },
  {
    id: "contact-us",
    icon: "message",
    title: "Contact Us",
    text: "If you have any questions about this Privacy Policy or how your information is handled, please contact us.",
    contact: {
      email: "privacy@skyveexteriors.com",
      phone: "(425) 201-2490",
      addressLines: ["Skyve Roofing & Exteriors", "Kirkland, WA 98033"],
    },
  },
];

export const PRIVACY_QUESTIONS = {
  title: "Questions About Your Privacy?",
  desc: "We're here to help. Reach out to our team with any privacy-related questions.",
  button: { label: "Contact Us", href: "/contact" },
  phone: "(425) 201-2490",
};

export const PRIVACY_COMMITMENT = {
  title: "Our Commitment",
  desc: "Your trust is important to us. We are committed to protecting your personal information and being transparent about our privacy practices.",
  highlight: "Your privacy is always our priority.",
};

export const PRIVACY_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and company updates.",
  perks: ["Roof care tips", "Seasonal maintenance", "Storm alerts", "Exclusive offers"],
};
