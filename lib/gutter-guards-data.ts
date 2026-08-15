/* Gutter Guards page (/exteriors/gutter-guards) — mock content.
   Manufacturer names shown as text placeholders (no logo art). */
import type { MaterialPage } from "./material-pages";

const img = (id: string) => `/images/${id}.jpg`;

export const GUTTER_GUARDS: MaterialPage = {
  slug: "gutter-guards",
  eyebrow: "Gutter Guards",
  breadcrumbParent: { label: "Exterior Services", href: "/services" },
  titleLines: ["Keep Leaves Out.", "Keep Your Home Safe."],
  sub: "Gutter guards prevent clogs, reduce maintenance, and protect your home from water damage. Enjoy clean, free-flowing gutters all year long.",
  heroImage: img("1605146769289-440113cc3d00"),
  whyCard: {
    title: "Why Install Gutter Guards?",
    items: [
      "Prevent clogs and water overflow",
      "Reduce maintenance and cleaning",
      "Protect your roof, fascia & foundation",
      "Prevent pests and insects",
      "Extend gutter system lifespan",
      "Increase home value",
      "Professional installation",
      "Satisfaction guaranteed",
    ],
  },
  brandsHeading: "We Install Premium Gutter Guards From Trusted Brands",
  brands: ["LeafFilter", "GutterGlove", "RxGutter", "MicroMesh", "Gutter Helmet"],
  features: [
    { icon: "droplet", title: "Clog-Free Gutters", desc: "Keeps leaves, twigs, and debris out while letting water in.", checklist: ["Prevents blockages", "Eliminates overflow", "Protects your home"], image: img("1605146769289-440113cc3d00") },
    { icon: "wrench", title: "Low Maintenance", desc: "Spend less time cleaning and more time enjoying life.", checklist: ["Minimal cleaning", "Saves time & money", "Year-round protection"], image: img("1605276374104-dee2a0ed3cd6") },
    { icon: "shield", title: "Protect Your Home", desc: "Prevents water damage to your roof, walls, siding, and foundation.", checklist: ["No more overflow", "Avoid costly repairs", "Protect your investment"], image: img("1583608205776-bfd35f0d9f83") },
    { icon: "chart", title: "Increase Home Value", desc: "A small upgrade that makes a big impact on value and appeal.", checklist: ["Better curb appeal", "Smart investment", "Peace of mind"], image: img("1564013799919-ab600027ffc6") },
  ],
  typesHeading: "Gutter Guard Styles & Options",
  types: [
    { title: "Micro-Mesh Guards", desc: "Ultra-fine stainless steel mesh blocks even tiny debris.", checklist: ["Small debris protection", "Rust-resistant", "Industry leading"], image: img("1605146769289-440113cc3d00") },
    { title: "Reverse Curve Guards", desc: "Surface tension technology guides water into gutters.", checklist: ["Self-cleaning design", "High water flow", "Great in heavy rain"], image: img("1605276374104-dee2a0ed3cd6") },
    { title: "Foam Inserts", desc: "Affordable foam fits inside your gutters.", checklist: ["Cost-effective", "Easy to install", "Effective protection"], image: img("1583608205776-bfd35f0d9f83") },
    { title: "Brush Guards", desc: "Brush design blocks debris while water flows through.", checklist: ["Heavy debris protection", "Pest deterrent", "Long-lasting"], image: img("1564013799919-ab600027ffc6") },
    { title: "Surface Tension Guards", desc: "Advanced design uses surface tension to direct water in.", checklist: ["Maximum water flow", "Prevents clogs", "Durable materials"], image: img("1600585154340-be6161a56a0c") },
    { title: "Custom Solutions", desc: "We customize the best gutter guard system for your home.", checklist: ["Custom fit", "Multiple materials", "Professional install"], image: img("1572120360610-d971b9d7767c") },
  ],
  colorsHeading: "",
  colors: [],
  comparison: { title: "", columns: [], rows: [] },
  processTitle: "Our Professional Installation Process",
  processIntro: "",
  process: [
    { n: 1, icon: "search", title: "Inspection", desc: "We inspect your gutters and recommend the best guard solution." },
    { n: 2, icon: "ruler", title: "Measure", desc: "We measure for a perfect fit and optimal performance." },
    { n: 3, icon: "wrench", title: "Prepare", desc: "We clean and prep your gutters for installation." },
    { n: 4, icon: "hammer", title: "Install", desc: "We install your gutter guards with precision and care." },
    { n: 5, icon: "shield", title: "Test", desc: "We test water flow and ensure proper installation." },
    { n: 6, icon: "badge", title: "Clean Up", desc: "We leave your home clean and your gutters clog-free." },
  ],
  processImage: img("1605146769289-440113cc3d00"),
  processTagline: "Less Cleaning. More Living.",
  processCardText: "Professional gutter guards keep your gutters flowing freely and your home protected—rain or shine.",
  warranty: { title: "", text: "", tiers: [] },
  projectsHeading: "",
  projects: [],
  review: {
    name: "Jennifer L.",
    city: "Bellevue, WA",
    initials: "JL",
    quote: "Skyve installed gutter guards on our home and it's the best decision we made. No more clogs, no more stress!",
  },
  ctaTitle: "Ready For Clog-Free Gutters?",
  ctaSubtitle: "Protect your home and save time with professional gutter guard installation.",
  ctaTrust: [
    { icon: "badge", label: "No Obligation Estimate" },
    { icon: "zap", label: "Fast & Easy Process" },
    { icon: "shield", label: "Licensed & Insured" },
    { icon: "mappin", label: "Gutter Guard Experts" },
  ],
};

export const GUTTER_GUARDS_ASSURANCE = {
  benefits: {
    title: "Benefits You'll Love",
    items: [
      "No more climbing ladders",
      "Prevent ice dams in winter",
      "Keep pests and insects out",
      "Protect landscaping & foundation",
      "Backed by strong warranties",
    ],
    image: img("1583608205776-bfd35f0d9f83"),
  },
  warranty: {
    title: "Industry-Leading Warranty",
    text: "We stand behind our gutter guard installations.",
    items: [
      "Up to 20 Years Warranty",
      "Workmanship Warranty",
      "Fully Licensed & Insured",
    ],
    footer: "Your satisfaction is our promise.",
  },
  signs: {
    title: "Signs You Need Gutter Guards",
    items: [
      "Gutters clog frequently",
      "Water overflows during rain",
      "Plants growing in gutters",
      "Pests or birds in gutters",
      "You want low maintenance",
    ],
    image: img("1605146769289-440113cc3d00"),
  },
};

export const GUTTER_GUARDS_BEFORE_AFTER = {
  before: { image: img("1605276374104-dee2a0ed3cd6"), label: "Before Guards" },
  after: { image: img("1605146769289-440113cc3d00"), label: "After Guards" },
};
