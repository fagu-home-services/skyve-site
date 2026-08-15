/* Roof Certifications page (/services/roof-certifications) — mock content.
   All organization / manufacturer names are third-party marks shown as text
   placeholders (no logo art). Swap for official badges with permission. */

const img = (id: string) => `/images/${id}.jpg`;

export const CERTS_HERO_IMAGE = "/images/crew-3.webp";

export const VERIFY_CARD = {
  title: "Quality You Can Verify",
  text: "Every certification we earn represents our promise to deliver the highest level of workmanship, safety, and professionalism on every project.",
};

export const INDUSTRY_CERTS = [
  { short: "NRCA", name: "National Roofing Contractors Association", status: "Membership" },
  { short: "BBB", name: "Better Business Bureau", status: "A+ Rating" },
  { short: "KSA", name: "Kelly Shingle Association", status: "Member" },
  { short: "WSRCA", name: "WA State Roofing Contractors Association", status: "Member" },
  { short: "SHIBA", name: "Snohomish County Home Builders Association", status: "Member" },
  { short: "OSHA", name: "Occupational Safety & Health Administration", status: "Compliant" },
];

export const MANUFACTURER_CERTS = [
  { short: "GAF", tier: "Master Elite® Contractor", desc: "The top 2% of roofing contractors in North America." },
  { short: "CertainTeed", tier: "Select ShingleMaster™ Certified", desc: "Specialized knowledge for CertainTeed roofing systems." },
  { short: "Malarkey", tier: "Certified Residential Contractor", desc: "Certified for installation of Malarkey roofing products." },
  { short: "IKO", tier: "ShieldPRO™ Plus Contractor", desc: "Extended warranty options for IKO roofing systems." },
  { short: "Owens Corning", tier: "Preferred® Contractor", desc: "Certified installer of Owens Corning roofing systems." },
  { short: "Versico", tier: "Authorized Contractor", desc: "Certified for Versico roofing solutions." },
];

export const WHY_CERTS = [
  { icon: "badge", title: "Proven Expertise", desc: "Our certifications mean we have the training and knowledge to do the job right." },
  { icon: "shield", title: "Higher Standards", desc: "We follow strict industry standards for quality, safety, and performance." },
  { icon: "document", title: "Extended Warranties", desc: "Many certifications allow us to offer stronger manufacturer warranties." },
  { icon: "home", title: "Peace of Mind", desc: "You can trust that your home is in the hands of qualified professionals." },
  { icon: "graduation", title: "Ongoing Training", desc: "We invest in continuous education to stay ahead of industry innovations." },
  { icon: "users", title: "Accountability", desc: "Certifications hold us accountable to the highest level of service and integrity." },
] as const;

export const LICENSED_CARD = {
  title: "Fully Licensed & Insured",
  text: "Skyve Roofing & Exteriors is fully licensed, bonded, and insured for your protection.",
  items: [
    "Washington State Licensed",
    "General Liability Insurance",
    "Workers' Compensation",
    "Bonded for Your Protection",
  ],
  note: "We're happy to provide copies of our certifications upon request.",
};

export const CERTS_ACTION_CHECKLIST = [
  "Ongoing safety training & compliance",
  "Advanced product installation training",
  "Regular manufacturer updates",
  "Industry best practices & innovations",
  "Commitment to excellence on every project",
];

export const CERTS_ACTION_CARDS = [
  { title: "Continuous Education", desc: "Our team participates in ongoing training to enhance skills and knowledge.", image: img("1600585154340-be6161a56a0c") },
  { title: "Best Installation Practices", desc: "We follow manufacturer guidelines to ensure maximum performance and warranty protection.", image: img("1632759145351-1d592919f522") },
  { title: "Quality That Lasts", desc: "Our certifications ensure we use proven methods and premium materials.", image: img("1576941089067-2de3c901e126") },
];

export const CERTS_REVIEWS = [
  { name: "John D.", city: "Bellevue, WA", initials: "JD", quote: "Skyve is a GAF Master Elite contractor, and it shows. The quality, professionalism, and attention to detail were outstanding." },
  { name: "Sarah M.", city: "Bothell, WA", initials: "SM", quote: "Their certifications gave us confidence from the start. Our new roof looks amazing and came with a great warranty." },
  { name: "Thomas R.", city: "Seattle, WA", initials: "TR", quote: "You can tell this company invests in training and quality. Highly recommend the Skyve team!" },
];

export const CERTS_CTA_TRUST = [
  { icon: "badge", label: "No Obligation Estimate" },
  { icon: "shield", label: "Licensed & Insured" },
  { icon: "star", label: "Workmanship Guaranteed" },
] as const;

export const CERTS_CTA_IMAGE = "/images/hero-home-dusk-3.webp";
