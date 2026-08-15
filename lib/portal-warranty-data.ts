/* Future Homeowner Portal — Warranty (/portal/warranty). Phase 2.
   Manufacturer names are third-party marks shown as text. */

export const PW_PROTECTION = {
  title: "Your Protection",
  desc: "We back our work and materials with strong warranties so you can have peace of mind.",
};

export const PW_TABS = ["All Warranties", "Manufacturer Warranties", "Workmanship Warranty", "Transfer & Claims"];

export const PW_SUMMARY = {
  title: "Warranty Summary",
  subtitle: "Complete protection for your home.",
  cards: [
    { icon: "badge", tone: "text-ridge", bg: "bg-ridge/12", value: "6", label: "Total Warranties", sub: "Active" },
    { icon: "calendar", tone: "text-success", bg: "bg-success/12", value: "25+", label: "Years of Coverage", sub: "Total Coverage" },
    { icon: "checkcircle", tone: "text-[#7c3aed]", bg: "bg-[#7c3aed]/12", value: "100%", label: "Fully Covered", sub: "Of Project" },
  ],
};

export type Warranty = {
  icon: string;
  type: "Workmanship" | "Manufacturer";
  title: string;
  provider: string;
  desc: string;
  coverage: string;
  start: string;
  end: string;
};

export const PW_WARRANTIES: Warranty[] = [
  {
    icon: "hardhat",
    type: "Workmanship",
    title: "Workmanship Warranty",
    provider: "Skyve Roofing & Exteriors",
    desc: "Covers all labor and installation work performed by our team.",
    coverage: "5 Years",
    start: "Apr 10, 2025",
    end: "Apr 9, 2030",
  },
  {
    icon: "home",
    type: "Manufacturer",
    title: "Roofing Materials Warranty",
    provider: "CertainTeed Landmark® PRO",
    desc: "Covers manufacturing defects in roofing shingles.",
    coverage: "Lifetime Limited",
    start: "Apr 10, 2025",
    end: "Lifetime",
  },
  {
    icon: "layers",
    type: "Manufacturer",
    title: "Underlayment Warranty",
    provider: "CertainTeed RoofRunner®",
    desc: "Protection against manufacturing defects in underlayment material.",
    coverage: "20 Years",
    start: "Apr 10, 2025",
    end: "Apr 9, 2045",
  },
  {
    icon: "wind",
    type: "Manufacturer",
    title: "Ventilation System Warranty",
    provider: "CertainTeed VentSure®",
    desc: "Covers ventilation products and components.",
    coverage: "15 Years",
    start: "Apr 10, 2025",
    end: "Apr 9, 2040",
  },
  {
    icon: "grid",
    type: "Manufacturer",
    title: "Siding Materials Warranty",
    provider: "James Hardie® Fiber Cement",
    desc: "Covers manufacturing defects in siding products.",
    coverage: "30 Years",
    start: "Apr 10, 2025",
    end: "Apr 9, 2055",
  },
  {
    icon: "sun",
    type: "Manufacturer",
    title: "Skylight Warranty",
    provider: "Velux® Skylights",
    desc: "Covers skylight units and flashing systems.",
    coverage: "10 Years",
    start: "Apr 10, 2025",
    end: "Apr 9, 2035",
  },
];

export const PW_RESOURCES = {
  title: "Warranty Resources",
  subtitle: "Helpful information to keep your warranties valid.",
  items: [
    { icon: "gear", title: "Maintenance Guidelines", desc: "Learn how to maintain your home and keep warranties valid.", link: "View Guidelines" },
    { icon: "document", title: "Warranty Registration", desc: "Register your manufacturer warranties online.", link: "Register Now" },
    { icon: "users", title: "Transfer Warranty", desc: "Planning to sell your home? Transfer warranties easily.", link: "Learn More" },
    { icon: "warning", title: "File a Claim", desc: "Need to make a warranty claim? We're here to help.", link: "Start a Claim" },
  ],
};

export const PW_COVERAGE = {
  title: "Coverage Overview",
  centerValue: "25+",
  centerLabel: "Years of Total Coverage",
  // conic segments (approx share of the ring)
  segments: [
    { label: "Manufacturer", value: "20+ yrs", tone: "bg-ridge", color: "var(--color-ridge)", pct: 68 },
    { label: "Workmanship", value: "5 yrs", tone: "bg-sky", color: "var(--color-sky)", pct: 20 },
    { label: "Extended Coverage", value: "Varies", tone: "bg-mist", color: "var(--color-mist)", pct: 12 },
  ],
};

export const PW_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "download", label: "Download All Warranties" },
    { icon: "refresh", label: "Request Warranty Transfer" },
    { icon: "warning", label: "File a Warranty Claim" },
    { icon: "book", label: "View Maintenance Tips" },
    { icon: "message", label: "Contact Support" },
  ],
};

export const PW_HELP = {
  title: "Need Help with a Warranty?",
  desc: "Our team is here to assist you with any warranty questions or claims.",
  button: { label: "Contact Warranty Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};

export const PW_REMINDERS = {
  title: "Important Reminders",
  points: [
    "Keep your documents in a safe place.",
    "Follow recommended maintenance guidelines.",
    "Register manufacturer warranties where required.",
    "Contact us if you have any questions or need service.",
  ],
};
