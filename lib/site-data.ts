/* Mock content for the homepage. Replace with Supabase / CMS data later. */

/** Local image library (curated Unsplash, mock-first). */
const img = (id: string) => `/images/${id}.jpg`;

export const HERO_IMAGE = "/images/hero-home-dusk-1.webp";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/* NAV — Launch v1 surface only. Phase-2 sections (Resources/Knowledge,
   Skyve Stories, Ambassadors, Pro Partner, portal, etc.) are intentionally
   omitted from nav for the initial launch; re-add in Phase 2.
   See LAUNCH_V1_PATHS in lib/launch-phase.ts. */
export const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    label: "Cities",
    href: "/service-area",
    children: [
      { label: "Seattle", href: "/roofing-seattle-wa" },
      { label: "Bellevue", href: "/roofing-bellevue-wa" },
      { label: "Kirkland", href: "/roofing-kirkland-wa" },
      { label: "Redmond", href: "/roofing-redmond-wa" },
      { label: "View All Cities", href: "/service-area" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Why Skyve", href: "/why-skyve" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PROCESS_STEPS = [
  { title: "Estimate", desc: "Get instant pricing in under 60 seconds.", icon: "calculator" },
  { title: "Inspection", desc: "We inspect with drones and experts.", icon: "drone" },
  { title: "Proposal", desc: "You get a detailed, transparent proposal.", icon: "document" },
  { title: "Installation", desc: "Professional crews. On time. On budget.", icon: "hammer" },
  { title: "Monitoring", desc: "Long-term support and warranty care.", icon: "shield" },
] as const;

export const WHY_CARDS = [
  {
    title: "20+ Years of Experience",
    desc: "The people quoting your job have installed hundreds of roofs — not a commissioned salesperson reading a script.",
    icon: "users",
  },
  {
    title: "Every Job Documented",
    desc: "Photos, materials, warranty and a Roof Score you keep for life — a permanent record most contractors don't offer.",
    icon: "document",
  },
  {
    title: "Transparent, Itemized Pricing",
    desc: "You see exactly what you pay for — labor, materials, plywood, tear-off. No mystery line items, no bait-and-switch.",
    icon: "dollar",
  },
  {
    title: "25-Year Workmanship Warranty",
    desc: "Backed in writing. If our work ever fails, we come back and make it right.",
    icon: "shield",
  },
] as const;

export type Service = {
  label: string;
  href: string;
  icon: string;
  image: string;
};

export const SERVICES: Service[] = [
  { label: "Roof Replacement", href: "/services/roof-replacement", icon: "home", image: img("1448630360428-65456885c650") },
  { label: "Roof Repair", href: "/services/roof-repair", icon: "wrench", image: img("1632759145351-1d592919f522") },
  { label: "Metal Roofing", href: "/materials/metal-roofing", icon: "layers", image: img("1576941089067-2de3c901e126") },
  { label: "Cedar Shake", href: "/materials/cedar-shake-roofing", icon: "leaf", image: img("1572120360610-d971b9d7767c") },
  { label: "Roof Cleaning", href: "/services/roof-cleaning", icon: "droplet", image: img("1583608205776-bfd35f0d9f83") },
  { label: "Skylights", href: "/exteriors/skylight-installation", icon: "sun", image: img("1600585154340-be6161a56a0c") },
  { label: "Gutters", href: "/exteriors/gutter-installation", icon: "ruler", image: img("1605276374104-dee2a0ed3cd6") },
  { label: "Siding", href: "/exteriors/siding-replacement", icon: "grid", image: img("1605146769289-440113cc3d00") },
  { label: "Exterior Painting", href: "/exteriors/exterior-painting", icon: "brush", image: img("1502005229762-cf1b2da7c5d6") },
];

export type Project = {
  city: string;
  title: string;
  price: string;
  href: string;
  image: string;
};

export const RECENT_PROJECTS: Project[] = [
  { city: "Kirkland, WA", title: "Roof Replacement", price: "$28,450", href: "/field-reports/roof-replacement-kirkland", image: img("1570129477492-45c003edd2be") },
  { city: "Bellevue, WA", title: "Metal Roofing", price: "$34,760", href: "/field-reports/metal-roofing-bellevue", image: img("1564013799919-ab600027ffc6") },
  { city: "Redmond, WA", title: "Roof Replacement", price: "$26,900", href: "/field-reports/roof-replacement-redmond", image: img("1531971589569-0d9370cbe1e5") },
  { city: "Sammamish, WA", title: "Cedar Shake", price: "$41,250", href: "/field-reports/cedar-shake-sammamish", image: img("1558036117-15d82a90b9b1") },
  { city: "Bothell, WA", title: "Roof & Siding", price: "$38,700", href: "/field-reports/roof-siding-bothell", image: img("1580587771525-78b9dba3b914") },
];

export const STORY_PROJECTS: Project[] = [
  { city: "Mercer Island, WA", title: "Standing Seam Metal", price: "$36,500", href: "/field-reports/standing-seam-mercer-island", image: img("1518780664697-55e3ad937233") },
  { city: "Issaquah, WA", title: "Roof Replacement", price: "$27,150", href: "/field-reports/roof-replacement-issaquah", image: img("1512917774080-9991f1c4c750") },
  { city: "Everett, WA", title: "Storm Damage Repair", price: "$18,200", href: "/field-reports/storm-damage-everett", image: img("1632759145351-1d592919f522") },
  { city: "Everett, WA", title: "Roof & Gutters", price: "$24,800", href: "/field-reports/roof-gutters-everett", image: img("1600596542815-ffad4c1539a9") },
];

export type Review = {
  name: string;
  city: string;
  quote: string;
};

export const REVIEWS: Review[] = [
  { name: "Jason M.", city: "Kirkland, WA", quote: "Skyve made the whole process stress-free. The estimate was spot on and the crew was incredible." },
  { name: "Sarah T.", city: "Bellevue, WA", quote: "The drone inspection gave me confidence I was getting exactly what I needed." },
  { name: "Mark R.", city: "Redmond, WA", quote: "Professional, honest, and the quality of the work is second to none." },
  { name: "Emily K.", city: "Bothell, WA", quote: "They handled our insurance claim and got our roof replaced fast." },
];

export type Article = {
  title: string;
  category: string;
  href: string;
  image: string;
};

export const ARTICLES: Article[] = [
  { title: "How Much Does a New Roof Cost in Seattle?", category: "Cost", href: "/learn/roof-replacement", image: img("1564013799919-ab600027ffc6") },
  { title: "How Long Does a Roof Last in Washington?", category: "Roofing 101", href: "/learn/roof-replacement", image: img("1583608205776-bfd35f0d9f83") },
  { title: "Metal vs Asphalt Shingles: Which is Better?", category: "Comparison", href: "/learn/metal-roofing", image: img("1576941089067-2de3c901e126") },
  { title: "Roof Insurance Claims Guide for Homeowners", category: "Insurance", href: "/learn/storm-damage", image: img("1632759145351-1d592919f522") },
  { title: "Roof Ventilation: Why It Matters", category: "Roofing 101", href: "/learn/homeowner", image: img("1580587771525-78b9dba3b914") },
  { title: "Skylight Installation & Replacement Guide", category: "Skylights", href: "/learn/skylights", image: img("1512917774080-9991f1c4c750") },
];

/* Service-area map dots — rough relative positions (% of panel), not geographically exact. */
export type MapCity = { name: string; x: number; y: number; county: "king" | "snohomish" };

export const MAP_CITIES: MapCity[] = [
  { name: "Everett", x: 58, y: 14, county: "snohomish" },
  { name: "Lynnwood", x: 44, y: 26, county: "snohomish" },
  { name: "Edmonds", x: 33, y: 30, county: "snohomish" },
  { name: "Monroe", x: 78, y: 24, county: "snohomish" },
  { name: "Snohomish", x: 70, y: 33, county: "snohomish" },
  { name: "Shoreline", x: 36, y: 42, county: "king" },
  { name: "Bothell", x: 52, y: 38, county: "king" },
  { name: "Redmond", x: 66, y: 48, county: "king" },
  { name: "Kirkland", x: 52, y: 50, county: "king" },
  { name: "Seattle", x: 34, y: 56, county: "king" },
  { name: "Bellevue", x: 52, y: 60, county: "king" },
  { name: "Sammamish", x: 70, y: 58, county: "king" },
  { name: "Issaquah", x: 72, y: 68, county: "king" },
  { name: "Renton", x: 48, y: 72, county: "king" },
  { name: "Kent", x: 46, y: 84, county: "king" },
];

/* Only released pages (see LAUNCH_PATHS in lib/launch-phase.ts). As pages are
   reviewed and released, add them back here in the matching column. */
export const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "All Services", href: "/services" },
      { label: "Service Area", href: "/service-area" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Get Instant Estimate", href: "/estimate/instant" },
      { label: "Financing", href: "/financing" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Skyve", href: "/about" },
      { label: "Why Skyve", href: "/why-skyve" },
      { label: "Projects", href: "/projects" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Licenses & Insurance", href: "/licenses-insurance" },
      { label: "Warranty", href: "/warranty" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
];
