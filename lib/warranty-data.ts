import { liveHref } from "@/lib/launch-phase";
/* Trust & Authority — Warranty Center (/warranty).
   Manufacturer names are third-party marks rendered as plain text wordmarks. */

export const WC_HERO = {
  level: "Level 12",
  section: "Trust & Authority",
  title: "Warranty Center",
  desc: "We stand behind our work and the premium materials we use. Explore your warranty coverage, register your project, and get the support you need.",
  features: [
    { icon: "shield", title: "Strong Protection", desc: "Industry-leading coverage for materials & labor" },
    { icon: "document", title: "Easy Access", desc: "Find, register, and manage your warranties" },
    { icon: "message", title: "We're Here to Help", desc: "Fast warranty support when you need it" },
  ],
  image: "",
  overlayTitle: "Built to Last. Backed by the Best.",
  overlayDesc:
    "Our workmanship and the materials we install are backed by industry-leading warranties for total peace of mind.",
  overlayStats: [
    { value: "10–50", label: "Year Coverage Options" },
    { value: "100%", label: "Workmanship Warranty" },
    { value: "Premium", label: "Manufacturer Warranties" },
    { value: "Fast", label: "Claim Support" },
  ],
};

export type WarrantyType = {
  icon: string;
  title: string;
  desc: string;
  points: string[];
  href: string;
};

export const WC_TYPES: WarrantyType[] = [
  {
    icon: "shield",
    title: "Workmanship Warranty",
    desc: "We guarantee our installation for the life of your roof. If a workmanship issue arises, we will make it right.",
    points: ["Lifetime coverage", "Transferable", "No prorated periods"],
    href: liveHref("/warranty/register/type", "/contact"),
  },
  {
    icon: "layers",
    title: "Manufacturer Warranty",
    desc: "Premium materials from industry leaders come with long-term manufacturer protection.",
    points: ["10 to 50 year options", "Full system coverage", "Non-prorated options available"],
    href: liveHref("/warranty/register/type", "/contact"),
  },
  {
    icon: "wind",
    title: "Wind & Storm Warranty",
    desc: "Enhanced coverage for high-wind and severe weather events to protect your investment.",
    points: ["Up to 130 mph wind coverage", "Storm damage protection", "Upgrade options available"],
    href: liveHref("/warranty/register/type", "/contact"),
  },
  {
    icon: "shield",
    title: "Extended Warranty",
    desc: "Add even more protection with extended coverage options for extra peace of mind.",
    points: ["Extended term options", "Additional coverage benefits", "Customizable plans"],
    href: liveHref("/warranty/register/type", "/contact"),
  },
];

export const WC_REGISTER = {
  title: "Register Your Warranty",
  desc: "Registering your warranty helps us serve you better and ensures you receive all the benefits you're entitled to.",
  image: "",
  points: [
    { icon: "shield", label: "Keep your coverage active" },
    { icon: "document", label: "Simplify future claims" },
    { icon: "badge", label: "Receive important updates" },
    { icon: "home", label: "Increase home value" },
  ],
  button: { label: "Register Your Project", href: liveHref("/warranty/register", "/contact") },
};

export const WC_CHECK = {
  title: "Check Your Warranty",
  desc: "Already registered? Access your warranty information, documents, and coverage details anytime.",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter your email",
  idLabel: "Project or Warranty ID",
  idPlaceholder: "Enter your project or warranty ID",
  helpLink: "Where can I find my ID?",
  button: "View My Warranty",
};

export const WC_PARTNERS = [
  { name: "CertainTeed", sub: "SAINT-GOBAIN", tone: "text-[#0b6792]", coverage: "50 Year Limited Warranty" },
  { name: "GAF", tone: "text-[#d32323]", coverage: "Golden Pledge® Warranty", note: "Up to 50 Years" },
  { name: "Malarkey", sub: "Roofing Products", tone: "text-[#2e7d32]", coverage: "Up to 50 Year Warranty" },
  { name: "Owens Corning", tone: "text-[#d32323]", coverage: "Preferred Protection", note: "Up to 50 Years" },
  { name: "IKO", tone: "text-horizon", coverage: "IKO ROOFPRO®", note: "Up to 40 Years" },
  { name: "VELUX", tone: "text-[#d32323]", coverage: "Skylight Warranty", note: "Up to 10 Years" },
];

export const WC_CTA = {
  image: "",
  title: "Our Commitment. Your Confidence.",
  desc: "We use the best materials, follow the highest standards, and back every project with comprehensive warranties you can count on.",
  points: [
    { icon: "shield", label: "Quality Materials" },
    { icon: "badge", label: "Expert Installation" },
    { icon: "clock", label: "Long-Term Protection" },
  ],
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};

export const WC_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and warranty information.",
  perks: ["Warranty tips", "Seasonal maintenance", "Product updates", "Storm alerts"],
};
