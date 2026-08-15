/* Future Homeowner Portal — Selections (/portal/selections). Phase 2.
   Manufacturer names shown as text (IP-safe). */

export const SEL_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const SEL_TABS = ["Roofing", "Siding", "Gutters", "Skylights", "Deck", "Exterior Colors", "Interior (Optional)"];

export type Selection = { swatch: string; category: string; product: string; detail: string };
export const SEL_ROOFING: Selection[] = [
  { swatch: "#6b5c4a", category: "Shingle Style", product: "CertainTeed Landmark PRO", detail: "Color: Weathered Wood" },
  { swatch: "#3a3128", category: "Ridge Cap", product: "CertainTeed Shadow Ridge", detail: "Color: Weathered Wood" },
  { swatch: "#2a2622", category: "Underlayment", product: "RoofRunner Synthetic", detail: "High Performance Underlayment" },
  { swatch: "#4a4038", category: "Ventilation", product: "CertainTeed Intake & Exhaust Vent", detail: "Balanced Ventilation System" },
  { swatch: "#3d2f22", category: "Drip Edge", product: "Aluminum Drip Edge", detail: "Color: Dark Bronze" },
  { swatch: "#332619", category: "Flashing", product: "Aluminum Flashing", detail: "Color: Dark Bronze" },
];

export const SEL_OTHER = {
  title: "Other Roofing Details",
  items: [
    { label: "Nails", value: "Ring Shank Nails (Corrosion Resistant)" },
    { label: "Pipe Boots", value: "Ultimate Pipe Flashing" },
    { label: "Sealant", value: "Premium Roofing Sealant" },
  ],
};

export const SEL_NOTE = {
  title: "Need to make a change?",
  desc: "You can request changes to your selections at any time.",
  button: { label: "Request a Change", href: "/contact" },
};

export const SEL_PREVIEW = {
  title: "How It Will Look",
  subtitle: "A preview of your selected materials on your home.",
  note: "Colors may vary slightly from final installation.",
};

export const SEL_SUMMARY = {
  title: "Selections Summary",
  rows: [
    { icon: "grid", label: "Total Selections", value: "6" },
    { icon: "dollar", label: "Total Value", value: "$24,800" },
    { icon: "shield", label: "Material Warranty", value: "Lifetime Limited" },
    { icon: "badge", label: "Workmanship Warranty", value: "10 Years" },
    { icon: "calendar", label: "Last Updated", value: "May 5, 2025" },
  ],
  button: { label: "View Estimate", href: "/portal/documents" },
};

export const SEL_PALETTE = {
  title: "Color Palette",
  subtitle: "Visual overview of your selections.",
  items: [
    { label: "Primary Color", value: "Weathered Wood", swatch: "#6b5c4a" },
    { label: "Trim / Metals", value: "Dark Bronze", swatch: "#3d2f22" },
    { label: "Accent (If Applicable)", value: "Not Selected", swatch: "#e5e5e5", empty: true },
  ],
  button: { label: "View on Home", href: "#" },
};

export const SEL_RESOURCES = {
  title: "Helpful Resources",
  items: [
    { label: "Understanding Shingle Options", href: "/learn/shingles" },
    { label: "Roofing Color Guide", href: "#" },
    { label: "Warranty Information", href: "/portal/warranty" },
    { label: "Care & Maintenance Tips", href: "/portal/maintenance" },
  ],
};
