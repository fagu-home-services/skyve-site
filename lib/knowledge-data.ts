/* Knowledge Center page (/learn) — mock content.
   Author avatars use initials placeholders. */

const img = (id: string) => `/images/${id}.jpg`;

export const KC_HERO = {
  eyebrow: "Knowledge Center",
  titleLines: ["Everything You", "Should Know Before", "Hiring a Roofing Company."],
  desc: "Expert guides, real project data, roofing science, homeowner education, calculators, videos and downloadable resources—all in one place.",
  image: img("1600596542815-ffad4c1539a9"),
  popular: ["Roof replacement cost", "Architectural shingles", "Roof leak", "Metal roofing"],
};

export const KC_START = [
  { tag: "Cost Guides", title: "How Much Does a Roof Cost in Washington?", read: "12 min", views: "45K views", image: img("1570129477492-45c003edd2be") },
  { tag: "Replacement", title: "Signs You Need Roof Replacement", read: "9 min", views: "38K views", image: img("1632759145351-1d592919f522") },
  { tag: "Materials", title: "Metal vs Asphalt Roofing: Which Is Right for You?", read: "10 min", views: "29K views", image: img("1576941089067-2de3c901e126") },
  { tag: "Inspections", title: "The Complete Roof Inspection Guide", read: "11 min", views: "22K views", image: img("1564013799919-ab600027ffc6") },
  { tag: "Contractors", title: "Choosing The Right Roofing Contractor", read: "8 min", views: "31K views", image: img("1531971589569-0d9370cbe1e5") },
  { tag: "Insurance", title: "Insurance Claims Explained: A Homeowner's Guide", read: "10 min", views: "27K views", image: img("1558036117-15d82a90b9b1") },
];

export const KC_CATEGORIES = [
  { icon: "home", label: "Roof Replacement", count: "120+ articles", href: "/learn/roof-replacement" },
  { icon: "wrench", label: "Roof Repair", count: "86 articles", href: "/learn/roof-repair" },
  { icon: "search", label: "Roof Inspection", count: "64 articles" },
  { icon: "calendar", label: "Maintenance", count: "58 articles" },
  { icon: "layers", label: "Roofing Materials", count: "93 articles" },
  { icon: "shield", label: "Insurance", count: "37 articles" },
  { icon: "wind", label: "Ventilation", count: "29 articles" },
  { icon: "sun", label: "Skylights", count: "31 articles", href: "/learn/skylights" },
  { icon: "droplet", label: "Gutters", count: "46 articles" },
  { icon: "dollar", label: "Buying & Selling", count: "43 articles" },
  { icon: "hammer", label: "DIY Tips", count: "115 articles" },
  { icon: "users", label: "Contractor Resources", count: "52 articles" },
];

export const KC_TRENDING = [
  { tag: "Lifespan", title: "How Long Does an Asphalt Roof Last?", read: "8 min read", image: img("1570129477492-45c003edd2be") },
  { tag: "Cost", title: "Metal Roofing Cost Guide 2024", read: "9 min read", image: img("1576941089067-2de3c901e126") },
  { tag: "Inspection", title: "What Happens During a Roof Inspection?", read: "7 min read", image: img("1564013799919-ab600027ffc6") },
  { tag: "Maintenance", title: "Can Moss Damage Your Roof?", read: "6 min read", image: img("1572120360610-d971b9d7767c") },
  { tag: "Materials", title: "Architectural vs Luxury Shingles", read: "8 min read", image: img("1531971589569-0d9370cbe1e5") },
  { tag: "Financing", title: "Roof Financing Explained", read: "6 min read", image: img("1600596542815-ffad4c1539a9") },
  { tag: "Storm Damage", title: "How To Spot Storm Damage on Your Roof", read: "7 min read", image: img("1632759145351-1d592919f522") },
];

export const KC_FIELD_REPORTS = [
  { city: "Kirkland, WA", left: { label: "Cedar Shake", desc: "Estimate project cost and water infiltration." }, right: { label: "Solution Applied", desc: "Full cedar removal and architectural shingles." }, pages: "80 pages", image: img("1570129477492-45c003edd2be") },
  { city: "Bellevue, WA", left: { label: "Problem Found", desc: "Old roof reaching end of lifespan. Poor insulation." }, right: { label: "Solution Applied", desc: "Standing seam metal with improved ventilation." }, pages: "80 pages", image: img("1576941089067-2de3c901e126") },
  { city: "Redmond, WA", left: { label: "Material Used", desc: "Full repair, new underlayment and shingles." }, right: { label: "Material Used", desc: "Full repair, new underlayment and matched trim." }, pages: "80 pages", image: img("1564013799919-ab600027ffc6") },
  { city: "Sammamish, WA", left: { label: "Problem Found", desc: "Ponding water and membrane failure." }, right: { label: "Solution Applied", desc: "New TPO flat roof system with tapered insulation." }, pages: "20 pages", image: img("1580587771525-78b9dba3b914") },
];

export const KC_TV = {
  featured: { title: "The Complete Roof Replacement Process", image: img("1632759145351-1d592919f522") },
  videos: [
    { title: "Common Roof Problems", duration: "8:21", image: img("1572120360610-d971b9d7767c") },
    { title: "Drone Roof Inspections", duration: "6:45", image: img("1632759145351-1d592919f522") },
    { title: "Roofing Materials Explained", duration: "9:15", image: img("1576941089067-2de3c901e126") },
    { title: "Customer Success Story", duration: "7:28", image: img("1564013799919-ab600027ffc6") },
  ],
  topics: ["Roof Replacement", "Roof Repairs", "Drone Inspections", "Materials", "Customer Stories", "Behind The Scenes"],
};

export const KC_TOOLS = [
  { icon: "calculator", title: "Roof Cost Calculator", desc: "Estimate project costs in seconds.", meta: "24 pages", href: "/calculators/roof-cost" },
  { icon: "clock", title: "Roof Lifespan Calculator", desc: "Find out how years are left. (PDF).", meta: "6 pages" },
  { icon: "ruler", title: "Roof Pitch Calculator", desc: "Calculate roof pitch instantly.", meta: "18 pages" },
  { icon: "wind", title: "Ventilation Calculator", desc: "Calculate proper ventilation needs.", meta: "18 pages" },
  { icon: "layers", title: "Material Comparison Tool", desc: "Compare materials side by side.", meta: "12 pages" },
  { icon: "shield", title: "Warranty Comparison", desc: "Compare roofing warranties.", meta: "20 pages" },
];

export const KC_DOWNLOADS = [
  { title: "Roof Buyer's Guide", desc: "Everything you need to know before buying a roof." },
  { title: "Roof Inspection Checklist", desc: "Professional inspection checklist (PDF)." },
  { title: "Insurance Claim Guide", desc: "Step-by-step guide to maximize your claim." },
  { title: "Annual Maintenance Guide", desc: "Keep your roof in top condition year-round." },
  { title: "Roof Replacement Timeline", desc: "What to expect from start to finish." },
  { title: "Warranty Handbook", desc: "Understand roofing warranties and coverage." },
];

export const KC_AUTHORS = [
  { name: "Fabricio Silva", initials: "FS", role: "Founder & CEO · Roofing Specialist", desc: "15+ years in roofing. Thousands of projects across WA." },
  { name: "Project Managers Team", initials: "PM", role: "Project Managers", desc: "Oversee projects from start to finish with excellence." },
  { name: "Certified Inspectors Team", initials: "CI", role: "Certified Inspectors", desc: "Certified experts providing accurate inspections." },
  { name: "Guest Experts Network", initials: "GE", role: "Guest Experts", desc: "Industry leaders contributing valuable insights." },
];

export const KC_NEWSLETTER = {
  title: "Stay Ahead Of Roofing Problems.",
  desc: "Receive homeowner guides, maintenance reminders, storm alerts, seasonal tips and exclusive educational content.",
  perks: ["Expert tips & guides", "Seasonal maintenance reminders", "Storm alerts & safety tips", "New articles & videos"],
};
