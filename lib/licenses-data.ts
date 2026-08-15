/* Trust & Authority — Licenses & Insurance (/licenses-insurance).
   Government seals / municipal marks are third-party and rendered as neutral
   icons (no official emblem art). License/policy numbers are illustrative. */

export const LI_HERO = {
  level: "Level 12",
  section: "Trust & Authority",
  title: "Licenses & Insurance",
  desc: "We are fully licensed and insured for your protection and peace of mind. Safety, compliance, and quality are at the core of everything we do.",
  features: [
    { icon: "shield", title: "Legally Licensed", desc: "We meet all state and local requirements" },
    { icon: "users", title: "Fully Insured", desc: "Comprehensive coverage to protect your property" },
    { icon: "document", title: "Your Protection", desc: "We follow strict safety and industry standards" },
  ],
  image: "",
  overlayTitle: "Your Home. Our Responsibility.",
  overlayDesc:
    "Our licenses and insurance reflect our commitment to professionalism, safety, and delivering exceptional results you can trust.",
  overlayStats: [
    { value: "100%", label: "Licensed" },
    { value: "$2M+", label: "Insurance Coverage" },
    { value: "0", label: "Claims Impacting Customers" },
    { value: "15+", label: "Years of Safe Operations" },
  ],
};

export type License = {
  icon: string;
  name: string;
  sub?: string; // e.g. "General Contractor"
  number: string;
  issued: string;
  expires: string;
  status: string;
};

export const LI_LICENSES: License[] = [
  {
    icon: "landmark",
    name: "Washington State Contractor License",
    sub: "General Contractor",
    number: "License #: SKYVERER™835Q",
    issued: "08/15/2022",
    expires: "08/15/2026",
    status: "Active",
  },
  {
    icon: "building",
    name: "City of Kirkland Business License",
    number: "License #: BUS-210982",
    issued: "01/12/2023",
    expires: "12/31/2025",
    status: "Active",
  },
  {
    icon: "landmark",
    name: "King County Business License",
    number: "License #: KCBL-2023-44567",
    issued: "01/05/2023",
    expires: "12/31/2025",
    status: "Active",
  },
  {
    icon: "badge",
    name: "Washington State L&I Registered",
    number: "Account #: 601-234-567",
    issued: "02/20/2022",
    expires: "02/20/2026",
    status: "Active",
  },
  {
    icon: "building",
    name: "City of Redmond Business License",
    number: "License #: RED-BUS-33455",
    issued: "03/10/2023",
    expires: "12/31/2025",
    status: "Active",
  },
];

export type Insurance = {
  icon: string;
  name: string;
  desc: string;
  coverageLabel: string;
  coverage: string;
  policy: string;
  expires: string;
  status: string;
};

export const LI_INSURANCE: Insurance[] = [
  {
    icon: "shield",
    name: "General Liability Insurance",
    desc: "Covers bodily injury, property damage, and personal injury.",
    coverageLabel: "Coverage Amount",
    coverage: "$2,000,000",
    policy: "Policy #: GL-2024-5589",
    expires: "04/15/2026",
    status: "Active",
  },
  {
    icon: "briefcase",
    name: "Workers' Compensation",
    desc: "Provides coverage for medical expenses and lost wages for our employees.",
    coverageLabel: "Coverage Amount",
    coverage: "Statutory Limits",
    policy: "Policy #: WC-2024-5588",
    expires: "04/15/2026",
    status: "Active",
  },
  {
    icon: "home",
    name: "Commercial Auto Insurance",
    desc: "Covers our vehicles and equipment used in our operations.",
    coverageLabel: "Coverage Amount",
    coverage: "$1,000,000",
    policy: "Policy #: CA-2024-7788",
    expires: "04/15/2026",
    status: "Active",
  },
  {
    icon: "umbrella",
    name: "Umbrella Liability Insurance",
    desc: "Provides additional liability protection beyond our primary policies.",
    coverageLabel: "Coverage Amount",
    coverage: "$3,000,000",
    policy: "Policy #: UMB-2024-3386",
    expires: "04/15/2026",
    status: "Active",
  },
];

export const LI_QUESTIONS = {
  title: "Have Questions?",
  desc: "We're happy to provide a certificate of insurance (COI) upon request.",
  points: ["Certificates available 24/7", "Fast response", "Trusted and transparent"],
  button: "Request Certificate",
  callLabel: "Call us directly",
  phone: "(425) 201-2490",
};

export const LI_SAFETY = {
  image: "",
  title: "Committed to Safety. Committed to You.",
  desc: "At Skyve Roofing & Exteriors, we maintain the highest standards in licensing, insurance, and safety practices. Our team is trained, our equipment is maintained, and your home is in good hands.",
  features: [
    { icon: "shield", title: "Safety First", desc: "We prioritize jobsite safety for our team and your family." },
    { icon: "document", title: "Code Compliant", desc: "We follow all local building codes and regulations." },
    { icon: "badge", title: "Quality Guaranteed", desc: "Licensed, insured, and committed to exceptional workmanship." },
  ],
};

export const LI_CTA = {
  title: "Work with a Licensed, Insured, and Trusted Roofing Contractor",
  desc: "Your home deserves protection from a company that's qualified and committed to doing the job right.",
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};
