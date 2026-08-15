/* Gutter Installation page (/exteriors/gutter-installation) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const GUTTER_INSTALLATION: MaterialPage = {
  slug: "gutter-installation",
  eyebrow: "Gutter Installation",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Protect Your Home", "From Water Damage."],
  sub: "Professional gutter installation that directs water away from your home, protects your foundation, and prevents costly damage. Built with premium materials for years of reliable performance.",
  heroImage: img("1605276374104-dee2a0ed3cd6"),
  whyCard: {
    title: "Why Install New Gutters?",
    items: [
      "Protect your foundation",
      "Prevent basement flooding",
      "Avoid roof and fascia damage",
      "Reduce soil erosion",
      "Increase property value",
      "Low maintenance solutions",
      "Professional installation",
      "Satisfaction guaranteed",
    ],
  },
  brandsHeading: "We Install Premium Gutters From Trusted Brands",
  brands: ["LeafFilter", "Amerimax", "CertainTeed", "K-Style", "Rainway"],
  features: [
    { icon: "shield", title: "Protect Your Home", desc: "Properly installed gutters move water away from your home and foundation.", checklist: ["Prevent water damage", "Protect siding & fascia", "Prevent foundation issues"], image: img("1605276374104-dee2a0ed3cd6") },
    { icon: "badge", title: "Built To Last", desc: "We use premium materials and professional installation techniques.", checklist: ["High-quality materials", "Strong & durable", "Built for all weather"], image: img("1605146769289-440113cc3d00") },
    { icon: "layers", title: "Custom Solutions", desc: "Tailored gutter systems designed for your home's needs.", checklist: ["Custom sizing", "Multiple styles", "Many color options"], image: img("1564013799919-ab600027ffc6") },
    { icon: "chart", title: "Increase Home Value", desc: "A reliable gutter system enhances curb appeal and protects value.", checklist: ["Better appearance", "Long-term protection", "Smart investment"], image: img("1583608205776-bfd35f0d9f83") },
  ],
  typesHeading: "Gutter Styles & Options",
  types: [
    { title: "K-Style Gutters", desc: "Our most popular option with a decorative front that resembles crown molding.", checklist: ["High capacity", "Attractive design", "Multiple colors"], image: img("1605276374104-dee2a0ed3cd6") },
    { title: "Half-Round Gutters", desc: "Classic rounded design for a timeless look.", checklist: ["Traditional style", "Self-cleaning design", "Copper & aluminum"], image: img("1583608205776-bfd35f0d9f83") },
    { title: "Box Gutters", desc: "Built into the roofline for a seamless, modern appearance.", checklist: ["High capacity", "Hidden installation", "Custom built"], image: img("1600585154340-be6161a56a0c") },
    { title: "Downspouts", desc: "Direct water safely from your gutters to the ground.", checklist: ["Multiple sizes", "Many color options", "Secure connections"], image: img("1605146769289-440113cc3d00") },
    { title: "Gutter Guards", desc: "Keep leaves and debris out while water flows through.", checklist: ["Reduce cleaning", "Prevent clogs", "Multiple guard types"], image: img("1572120360610-d971b9d7767c") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: { title: "", columns: [], rows: [] },
  processTitle: "Our Gutter Installation Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Inspection & Measurement", desc: "We inspect your roofline and take precise measurements." },
    { n: 2, icon: "chart", title: "Custom Planning", desc: "We design the right system for your home and needs." },
    { n: 3, icon: "hammer", title: "Professional Installation", desc: "Our team installs your gutters with precision and care." },
    { n: 4, icon: "shield", title: "Secure & Seal", desc: "We ensure everything is properly pitched and sealed." },
    { n: 5, icon: "badge", title: "Final Inspection", desc: "We test the system and ensure proper water flow." },
    { n: 6, icon: "trash", title: "Clean Up", desc: "We clean the area and leave your home spotless." },
  ],
  processImage: img("1583608205776-bfd35f0d9f83"),
  processTagline: "Quality Gutters. Expert Installation. Long-Term Protection.",
  processCardText: "We stand behind our work with top-tier materials and expert craftsmanship.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "Recent Gutter Installation Projects",
  projects: [img("1605276374104-dee2a0ed3cd6"), img("1605146769289-440113cc3d00"), img("1564013799919-ab600027ffc6")],
  review: {
    name: "Michael R.",
    city: "Kirkland, WA",
    initials: "MR",
    quote: "Skyve installed new gutters on our entire home and the difference is incredible. Professional team, great quality, and very easy to work with!",
  },
  ctaTitle: "Ready To Protect Your Home?",
  ctaSubtitle: "Get a free estimate and let's install the perfect gutter system for your home.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "mappin", label: "Gutter Installation Experts" },
  ],
};

export const GUTTER_MATERIALS = [
  { name: "Aluminum", desc: "Lightweight, rust-free and affordable.", hex: "#c4c8cb" },
  { name: "Steel", desc: "Extra strength and durability.", hex: "#8a8d8f" },
  { name: "Copper", desc: "Premium look that ages beautifully.", hex: "#a86a3d" },
  { name: '5" & 6" Sizes', desc: "Choose the right size for your home.", hex: "#26282b" },
];

export const GUTTER_COLORS = [
  { name: "White", hex: "#f4f4f2" },
  { name: "Almond", hex: "#e6d9bf" },
  { name: "Brown", hex: "#4a3b2f" },
  { name: "Gray", hex: "#8a8d8f" },
  { name: "Black", hex: "#26282b" },
];

export const GUTTER_WHY = [
  { icon: "badge", title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured." },
  { icon: "users", title: "Experienced Team", desc: "15+ years of exterior expertise." },
  { icon: "shield", title: "Top-Quality Materials", desc: "We use the best products available." },
  { icon: "badge", title: "Workmanship Warranty", desc: "We stand behind our installations." },
  { icon: "dollar", title: "Fair & Transparent", desc: "Honest pricing with no hidden fees." },
  { icon: "star", title: "5-Star Service", desc: "Highly rated by homeowners." },
];

export const GUTTER_DIFFERENCE = [
  { feature: "Premium Materials", others: "cross" as const },
  { feature: "Custom Designs", others: "dash" as const },
  { feature: "Professional Installation", others: "dash" as const },
  { feature: "Gutter Guards Options", others: "dash" as const },
  { feature: "Warranties", others: "dash" as const },
  { feature: "Clean & Respectful", others: "dash" as const },
  { feature: "Local & Reliable", others: "dash" as const },
];
