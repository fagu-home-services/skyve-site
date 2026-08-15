/* Legal — Revoke Consent (/legal/revoke-consent). Level 13 · Legal.
   Reuses LegalHero; steps + sidebar are custom. */

export const RC_HERO = {
  level: "Level 13",
  section: "Legal",
  title: "Revoke Consent",
  desc: "You have the right to change your mind. If you no longer wish for us to use your information as previously consented, you can revoke your consent at any time.",
  updated: "Last Updated: May 10, 2024",
  image: "",
  overlayTitle: "Your Privacy. Your Choice.",
  overlayDesc: "We make it easy for you to revoke consent and take control of your personal information.",
  overlayBadges: [
    { icon: "shield", title: "Your Right", desc: "You're in control of your data" },
    { icon: "user", title: "Easy Process", desc: "Simple steps to revoke consent" },
    { icon: "lock", title: "Immediate", desc: "We stop using your information" },
    { icon: "shield", title: "Secure", desc: "Your information stays protected" },
  ],
};

export type RCStep = {
  icon: string;
  title: string;
  desc: string;
  button?: { label: string; href: string };
};

export const RC_STEPS: RCStep[] = [
  {
    icon: "document",
    title: "Submit a Request",
    desc: "Fill out our Revoke Consent form or contact us using the information below. Be sure to include your name, email address, and details about your request.",
    button: { label: "Revoke Consent Form", href: "/contact" },
  },
  {
    icon: "user",
    title: "Verify Your Identity",
    desc: "We may need to verify your identity to protect your information. We will confirm your request was made by you.",
  },
  {
    icon: "search",
    title: "Review Your Request",
    desc: "We will review your request and determine what information and communications will be affected by your revocation.",
  },
  {
    icon: "checkcircle",
    title: "Confirm Revocation",
    desc: "We will confirm your revocation and stop using your information for the purposes you previously consented to.",
  },
  {
    icon: "info",
    title: "Important Notes",
    desc: "Revoking consent may affect our ability to provide certain services or send you important updates. We may still use your information when required by law or for legitimate business purposes that do not require consent.",
  },
];

export const RC_AFTER = {
  title: "What Happens After You Revoke Consent?",
  desc: "Once your request is confirmed, we will stop using your information for the purposes you no longer consent to. However, we may retain some information as required by law or for legitimate business purposes.",
};

export const RC_CAN_REVOKE = {
  title: "What You Can Revoke",
  points: [
    "Marketing communications (emails, texts, calls)",
    "Personalized advertising and targeting",
    "Non-essential cookies and tracking",
    "Third-party sharing (where consent was provided)",
    "Promotional offers and updates",
  ],
};

export const RC_HELP = {
  title: "Need Help?",
  desc: "We're here to help you with any questions about revoking consent or your privacy.",
  button: { label: "Contact Us", href: "/contact" },
  phone: "(425) 201-2490",
  email: "privacy@skyveexteriors.com",
};

export const RC_MATTERS = {
  title: "Your Privacy Matters",
  desc: "We respect your choices and are committed to protecting your privacy. You can change your mind at any time.",
  highlight: "Thank you for trusting Skyve.",
};

export const RC_MANAGE = {
  title: "Other Ways to Manage Your Preferences",
  desc: "You can also manage your communication preferences at any time through your account settings or by clicking the unsubscribe link in our emails.",
  button: { label: "Manage Preferences", href: "/contact" },
};

export const RC_CTA = {
  image: "",
  title: "Questions About Your Privacy?",
  desc: "Our team is here to help you understand your rights and manage your information.",
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};

export const RC_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and company updates.",
  perks: ["Roof care tips", "Seasonal maintenance", "Storm alerts", "Exclusive offers"],
};
