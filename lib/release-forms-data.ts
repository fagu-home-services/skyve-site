/* Legal — Release Forms (/legal/release-forms). Level 13 · Legal.
   Reuses LegalHero for the hero; forms body is custom. */

export const RF_HERO = {
  level: "Level 13",
  section: "Legal",
  title: "Release Forms",
  desc: "For your protection and ours. These release forms help ensure safe, professional project execution and compliance with legal requirements.",
  updated: "Last Updated: May 10, 2024",
  image: "",
  overlayTitle: "Safety. Respect. Protection.",
  overlayDesc:
    "Our release forms are designed to protect your property, our team, and everyone involved in your project.",
  overlayBadges: [
    { icon: "shield", title: "Protects Everyone", desc: "Ensures safety and accountability" },
    { icon: "document", title: "Clear Agreements", desc: "Everyone knows what to expect" },
    { icon: "shield", title: "Legally Compliant", desc: "Meets industry standards" },
    { icon: "lock", title: "Your Information", desc: "Handled securely and responsibly" },
  ],
};

export type ReleaseForm = {
  icon: string;
  title: string;
  desc: string;
  signer: string;
};

export const RF_FORMS: ReleaseForm[] = [
  {
    icon: "document",
    title: "Photo & Video Release Form",
    desc: "Grants permission for Skyve Roofing & Exteriors to take and use photos or videos of your property for marketing and promotional purposes.",
    signer: "All homeowners",
  },
  {
    icon: "home",
    title: "Property Access Authorization",
    desc: "Authorizes our team to access your property for inspections, measurements, installations, and other necessary services.",
    signer: "All homeowners",
  },
  {
    icon: "warning",
    title: "Liability Waiver",
    desc: "Acknowledges and assumes risks associated with roofing and exterior projects and releases Skyve Roofing & Exteriors from certain liabilities.",
    signer: "All homeowners",
  },
  {
    icon: "hardhat",
    title: "Ladder & Equipment Release",
    desc: "Discloses the use of ladders and equipment on your property and releases Skyve Roofing & Exteriors from liability for potential damages.",
    signer: "All homeowners",
  },
  {
    icon: "drone",
    title: "Drone Usage Consent",
    desc: "Grants permission to use drone technology to capture images and data for inspections, estimates, and project documentation.",
    signer: "All homeowners",
  },
];

export const RF_SECURE = {
  title: "Your Information is Secure",
  desc: "Completed forms are stored securely and used only for the purpose of your project. We respect your privacy and never share your information without your consent.",
};

export const RF_WHY = {
  title: "Why We Use Release Forms",
  points: [
    "Protects your property and our team",
    "Ensures clear communication and expectations",
    "Helps prevent misunderstandings",
    "Required for industry compliance",
    "Allows us to deliver the best experience",
  ],
};

export const RF_QUESTIONS = {
  title: "Questions About Our Forms?",
  desc: "We're here to help. Reach out to our team if you have any questions about which forms you need.",
  button: { label: "Contact Us", href: "/contact" },
  phone: "(425) 201-2490",
};

export const RF_HOW = {
  title: "How It Works",
  steps: [
    { title: "Choose the forms you need", desc: "Review the forms and download the ones that apply to your project." },
    { title: "Complete and Sign", desc: "Fill out the required information and sign where indicated." },
    { title: "Submit to Our Team", desc: "Upload the completed forms or email them to us." },
    { title: "We're Ready to Start", desc: "Once we have your forms, we can move forward with confidence." },
  ],
};

export const RF_CUSTOM = {
  title: "Need a Custom Release Form?",
  desc: "Some projects may require additional agreements or custom terms. Contact us and we'll help you create the right documentation.",
  button: { label: "Request a Custom Form", href: "/contact" },
};

export const RF_CTA = {
  image: "",
  title: "Ready to Start Your Project?",
  desc: "Once your forms are complete, our team will take care of the rest. Professional service you can count on.",
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};

export const RF_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and company updates.",
  perks: ["Roof care tips", "Seasonal maintenance", "Storm alerts", "Exclusive offers"],
};
