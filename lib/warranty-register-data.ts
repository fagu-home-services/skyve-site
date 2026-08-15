/* Warranty Registration wizard (/warranty/register, /warranty/register/type) */

export const WR_STEPS = [
  { n: 1, title: "Warranty Type", sub: "Select your warranty" },
  { n: 2, title: "Property Details", sub: "Tell us about your property" },
  { n: 3, title: "Project Details", sub: "Provide project information" },
  { n: 4, title: "Review & Submit", sub: "Confirm and register" },
];

export const WR_WHY = {
  title: "Why Register Your Warranty?",
  items: [
    { icon: "shield", title: "Full Coverage Protection", desc: "Ensure you get the full benefits of your warranty coverage." },
    { icon: "clock", title: "Faster Support", desc: "Registered warranties receive priority support when you need it." },
    { icon: "checkcircle", title: "Easy Claims Process", desc: "A registered warranty makes the claims process smooth and simple." },
    { icon: "heart", title: "Peace of Mind", desc: "Rest easy knowing your investment is protected for years to come." },
  ],
};

export const WR_NEED = {
  title: "What You'll Need",
  subtitle: "To register your warranty, please have the following information ready:",
  items: [
    "Property address",
    "Installed materials and products",
    "Project completion date",
    "Photos of the completed work (optional)",
    "Contract or invoice (optional)",
    "Proof of purchase for materials (optional)",
  ],
  button: { label: "Get Started", href: "/warranty/register/type" },
  note: "Registration takes less than 5 minutes",
};

export const WR_HELP = {
  title: "Need Help Registering?",
  desc: "Our warranty team is here to help you through the process.",
  initials: "SK",
  phone: "(425) 201-2490",
  phoneHours: "Mon – Fri 7AM – 5PM",
  email: "warranty@skyveexteriors.com",
  emailNote: "We typically reply within 1 business day",
};

export type WarrantyType = {
  icon: string;
  iconBg: string;
  title: string;
  badge?: string;
  desc: string;
  coverage: string;
  type: string;
  provider: string;
};

export const WR_TYPES: WarrantyType[] = [
  {
    icon: "shield", iconBg: "bg-ridge", title: "Manufacturer Warranty", badge: "Most Common",
    desc: "Covers defects in roofing materials from the manufacturer.",
    coverage: "10 – 50 Years", type: "Materials", provider: "Product Manufacturer",
  },
  {
    icon: "hardhat", iconBg: "bg-success", title: "Workmanship Warranty",
    desc: "Covers the quality of installation and workmanship performed by Skyve Roofing & Exteriors.",
    coverage: "2 – 10 Years", type: "Labor", provider: "Skyve Roofing & Exteriors",
  },
  {
    icon: "layers", iconBg: "bg-accent", title: "Extended Warranty",
    desc: "Extended coverage that combines materials and workmanship for added protection.",
    coverage: "Up to 50 Years", type: "Materials & Labor", provider: "Manufacturer + Skyve",
  },
  {
    icon: "grid", iconBg: "bg-[#7c3aed]", title: "System Warranty",
    desc: "Comprehensive coverage for complete roofing systems using approved materials and installation.",
    coverage: "20 – 50 Years", type: "System", provider: "Manufacturer",
  },
  {
    icon: "badge", iconBg: "bg-[#0f766e]", title: "Other / Custom Warranty",
    desc: "Register a different type of warranty or custom agreement.",
    coverage: "Varies", type: "Custom", provider: "Varies",
  },
];
