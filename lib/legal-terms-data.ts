/* Legal — Terms of Service (/legal/terms). Level 13 · Legal.
   Reuses the LegalHero + LegalContent template (see legal-privacy-data). */

import type { LegalSection } from "@/lib/legal-privacy-data";

export const TERMS_HERO = {
  level: "Level 13",
  section: "Legal",
  title: "Terms of Service",
  desc: "These Terms of Service govern your access to and use of the Skyve Roofing & Exteriors website and services. By using our website or services, you agree to these terms.",
  updated: "Last Updated: May 10, 2024",
  image: "",
  overlayTitle: "Clear Terms. Strong Relationships.",
  overlayDesc:
    "We believe in transparency and respect. These terms help us provide you with the best possible experience while protecting both you and our business.",
  overlayBadges: [
    { icon: "shield", title: "Fair", desc: "Clear and fair terms for everyone" },
    { icon: "handshake", title: "Reliable", desc: "Built on trust and professionalism" },
    { icon: "document", title: "Transparent", desc: "No hidden terms or surprises" },
    { icon: "scale", title: "Compliant", desc: "We follow all applicable laws" },
  ],
};

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    icon: "user",
    title: "Acceptance of Terms",
    text: "By accessing or using the Skyve Roofing & Exteriors website, services, or any content, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website or services.",
  },
  {
    id: "services",
    icon: "document",
    title: "Services",
    text: "Skyve Roofing & Exteriors provides roofing and exterior services, including inspections, estimates, installations, repairs, and related services. All services are subject to availability, scheduling, and applicable agreements.",
  },
  {
    id: "use-of-website",
    icon: "edit",
    title: "Use of Our Website",
    text: "You agree to use our website for lawful purposes only. You may not:",
    bullets: [
      "Use the site for any illegal or unauthorized purpose",
      "Copy, reproduce, or distribute our content without permission",
      "Attempt to interfere with the website's security",
      "Upload harmful or malicious content",
    ],
  },
  {
    id: "estimates-and-quotes",
    icon: "document",
    title: "Estimates and Quotes",
    text: "Estimates provided by Skyve Roofing & Exteriors are based on the information available at the time of evaluation. Final pricing may vary based on project scope, materials, and unforeseen conditions identified during the project.",
  },
  {
    id: "agreements-and-payments",
    icon: "edit",
    title: "Agreements and Payments",
    text: "All projects are subject to a written agreement. Payment terms, deposits, and financing options (if applicable) will be outlined in your contract. Failure to make payments as agreed may result in service delays or additional fees.",
  },
  {
    id: "warranties",
    icon: "shield",
    title: "Warranties",
    inlineLink: {
      before:
        "We stand behind our work and the materials we use. Warranty details are provided in writing and may vary by manufacturer and service type. See our ",
      label: "Warranty Center",
      href: "/warranty",
      after: " for more information.",
    },
  },
  {
    id: "customer-responsibilities",
    icon: "user",
    title: "Customer Responsibilities",
    text: "You agree to provide accurate information, ensure access to the work area, and communicate any concerns promptly. You are responsible for any decisions made based on our estimates or recommendations.",
  },
  {
    id: "third-party-services",
    icon: "link",
    title: "Third-Party Services",
    text: "We may use trusted third-party vendors or tools to provide our services (e.g., payment processors, mapping services). We are not responsible for the availability or actions of those third parties.",
  },
  {
    id: "limitation-of-liability",
    icon: "warning",
    title: "Limitation of Liability",
    text: "To the fullest extent permitted by law, Skyve Roofing & Exteriors is not liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.",
  },
  {
    id: "indemnification",
    icon: "hammer",
    title: "Indemnification",
    text: "You agree to indemnify and hold harmless Skyve Roofing & Exteriors, its employees, and affiliates from any claims, damages, or expenses arising from your use of our website or services.",
  },
  {
    id: "changes-to-terms",
    icon: "edit",
    title: "Changes to These Terms",
    text: 'We may update these Terms of Service from time to time. Changes will be posted on this page with the updated "Last Updated" date. Continued use of our services constitutes acceptance.',
  },
  {
    id: "contact-us",
    icon: "message",
    title: "Contact Us",
    text: "If you have any questions about these Terms of Service, please contact us.",
    contact: {
      email: "info@skyveexteriors.com",
      phone: "(425) 201-2490",
      addressLines: ["Skyve Roofing & Exteriors", "Kirkland, WA 98033"],
    },
  },
];

export const TERMS_QUESTIONS = {
  title: "Questions About These Terms?",
  desc: "We're here to help. Reach out to our team with any questions about our Terms of Service.",
  button: { label: "Contact Us", href: "/contact" },
  phone: "(425) 201-2490",
};

export const TERMS_COMMITMENT = {
  title: "Our Commitment",
  desc: "We are committed to providing high-quality services with honesty, integrity, and respect. These terms help us maintain that commitment with every client.",
  highlight: "Thank you for trusting Skyve.",
};

export const TERMS_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and special offers.",
  perks: ["Roof care tips", "Seasonal maintenance", "Storm alerts", "Exclusive offers"],
};
