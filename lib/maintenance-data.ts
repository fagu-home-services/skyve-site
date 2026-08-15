/* Roof Maintenance page (/services/roof-maintenance) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

export const MAINTENANCE_HERO_IMAGE = "/images/roof-maintenance-1.webp";

export const HERO_TRUST = [
  "15+ Years Experience",
  "Annual Maintenance Plans",
  "Drone Inspections Available",
];

export const DASHBOARD = {
  address: "1234 Evergreen Lane, Bellevue, WA",
  score: 89,
  condition: "Good Condition",
  stats: [
    { label: "Roof Age", value: "14 Years" },
    { label: "Last Inspection", value: "March 2026" },
    { label: "Next Maintenance", value: "August 2026" },
    { label: "Warranty Status", value: "Active", active: true },
  ],
  note: "Your roof is in good condition. Regular maintenance will help extend its lifespan.",
};

export const WHY_CARDS = [
  { icon: "search", title: "Minor Damage", desc: "Small issues become major repairs." },
  { icon: "droplet", title: "Water Intrusion", desc: "Leaks often begin long before you notice them." },
  { icon: "shield", title: "Warranty Protection", desc: "Many warranties require proper maintenance." },
  { icon: "chart", title: "Roof Lifespan", desc: "Maintenance can add years to your roof." },
] as const;

export const PROCESS_7 = [
  { n: 1, icon: "calendar", title: "Schedule Visit", desc: "Choose a convenient time for your maintenance." },
  { n: 2, icon: "search", title: "Roof Inspection", desc: "Our experts inspect every critical area." },
  { n: 3, icon: "drone", title: "Drone Documentation", desc: "We capture high-resolution images and video." },
  { n: 4, icon: "document", title: "Maintenance Recommendations", desc: "We provide clear recommendations." },
  { n: 5, icon: "wrench", title: "Minor Corrections", desc: "We handle small fixes on the spot." },
  { n: 6, icon: "file", title: "Digital Report", desc: "You receive a detailed report with photos." },
  { n: 7, icon: "chart", title: "Future Monitoring", desc: "We track your roof's health over time." },
] as const;

export const INCLUDED_9 = [
  { icon: "search", title: "Roof Surface Inspection", desc: "We check shingles, seams, penetrations, and surface wear.", image: img("1568605114967-8130f3a36994") },
  { icon: "shield", title: "Flashing Inspection", desc: "We inspect all flashing for cracks, separation, and wear.", image: img("1576941089067-2de3c901e126") },
  { icon: "layers", title: "Pipe Boots", desc: "We check pipe boots for cracks, dryness, and secure seals.", image: img("1632759145351-1d592919f522") },
  { icon: "home", title: "Valleys", desc: "We inspect valleys for damage, debris, and proper water flow.", image: img("1583608205776-bfd35f0d9f83") },
  { icon: "wind", title: "Ridge Ventilation", desc: "We ensure ridge vents are clear and functioning properly.", image: img("1572120360610-d971b9d7767c") },
  { icon: "home", title: "Attic Ventilation", desc: "We check attic airflow to prevent heat and moisture buildup.", image: img("1600585154340-be6161a56a0c") },
  { icon: "droplet", title: "Gutter Inspection", desc: "We inspect gutters and downspouts for clogs, damage, and leaks.", image: img("1605276374104-dee2a0ed3cd6") },
  { icon: "trash", title: "Debris Removal", desc: "We remove leaves, twigs, and debris from roof and gutters.", image: img("1531971589569-0d9370cbe1e5") },
  { icon: "camera", title: "Photo Documentation", desc: "We provide detailed photos of all findings and key areas.", image: img("1558036117-15d82a90b9b1") },
] as const;

export type RiskLevel = "High" | "Medium" | "Low";
export const ISSUES_8: { title: string; risk: RiskLevel; repair: string; image: string }[] = [
  { title: "Cracked Pipe Boots", risk: "High", repair: "$200 - $500", image: img("1632759145351-1d592919f522") },
  { title: "Missing Shingles", risk: "High", repair: "$300 - $1,000", image: img("1568605114967-8130f3a36994") },
  { title: "Loose Flashing", risk: "High", repair: "$350 - $750", image: img("1576941089067-2de3c901e126") },
  { title: "Moss Growth", risk: "Medium", repair: "$500 - $2,000", image: img("1572120360610-d971b9d7767c") },
  { title: "Clogged Gutters", risk: "Medium", repair: "$150 - $500", image: img("1605276374104-dee2a0ed3cd6") },
  { title: "Exposed Fasteners", risk: "Low", repair: "$100 - $300", image: img("1583608205776-bfd35f0d9f83") },
  { title: "Granule Loss", risk: "Medium", repair: "$200 - $500", image: img("1600585154340-be6161a56a0c") },
  { title: "Early Water Intrusion", risk: "High", repair: "$500 - $2,500+", image: img("1570129477492-45c003edd2be") },
];

export const IN_ACTION = [
  { label: "Gutter Cleaning", before: img("1605276374104-dee2a0ed3cd6"), after: img("1583608205776-bfd35f0d9f83") },
  { label: "Moss Removal", before: img("1572120360610-d971b9d7767c"), after: img("1568605114967-8130f3a36994") },
  { label: "Debris Removal", before: img("1531971589569-0d9370cbe1e5"), after: img("1576941089067-2de3c901e126") },
  { label: "Flashing Repair", before: img("1632759145351-1d592919f522"), after: img("1600585154340-be6161a56a0c") },
  { label: "Sealant Renewal", before: img("1583608205776-bfd35f0d9f83"), after: img("1570129477492-45c003edd2be") },
];

export const REPORT = {
  score: 89,
  condition: "Good Condition",
  findings: [
    "Minor granule loss on north slope",
    "Debris in gutter system",
    "Sealant wear around vent pipe",
  ],
  recommendations: ["Clean gutters", "Re-seal pipe boots"],
  nextMaintenance: "Aug 2026",
  photos: [img("1576941089067-2de3c901e126"), img("1632759145351-1d592919f522")],
};

export type MaintenancePlan = {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
  showRating?: boolean;
};

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: "Essential Plan",
    price: "199",
    features: ["Digital Report", "Maintenance Recommendations"],
    popular: false,
    showRating: true,
  },
  {
    name: "Preferred Plan",
    price: "399",
    features: ["2 Inspections Per Year", "Drone Photos", "Priority Scheduling", "Maintenance Tracking"],
    popular: false,
  },
  {
    name: "Skyve Protect+",
    price: "799",
    features: ["Quarterly Monitoring", "Drone Documentation", "Roof Score Tracking", "Warranty Monitoring", "Priority Service", "Emergency Support"],
    popular: true,
  },
];

export const PROOF_REVIEWS = [
  { name: "Chris M.", city: "Seattle, WA", initials: "CM", saved: "$2,300", quote: "Skyve caught a small issue during maintenance that could have led to a major leak. Their attention to detail saved me thousands." },
  { name: "Jennifer L.", city: "Bellevue, WA", initials: "JL", saved: "$1,800", quote: "The maintenance plan gives me peace of mind. I love the detailed reports and photos after each visit." },
  { name: "Mark T.", city: "Kirkland, WA", initials: "MT", saved: "$1,500", quote: "Professional, thorough, and reliable. My roof has never been in better shape thanks to the Skyve team." },
];

export const MAINTENANCE_FAQ = [
  { q: "How often should my roof be inspected?", a: "We recommend a professional maintenance visit at least once a year, and after any major storm, to catch small issues early." },
  { q: "Can maintenance prevent leaks?", a: "Yes. Most leaks start as small, invisible issues. Regular maintenance finds and fixes them before water gets inside." },
  { q: "Does maintenance extend roof life?", a: "Absolutely. Proactive maintenance can add years to your roof by addressing wear before it becomes structural damage." },
  { q: "What's included in a roof maintenance visit?", a: "A full surface, flashing, penetration, and ventilation inspection, minor corrections on the spot, debris removal, and a digital report." },
  { q: "Will maintenance keep my warranty active?", a: "Many manufacturer warranties require documented maintenance. Our reports provide exactly the documentation you need." },
  { q: "How much does roof maintenance cost?", a: "Plans start at $199/year. Our tiered plans scale with the level of monitoring and service you want." },
  { q: "Do you offer maintenance plans?", a: "Yes — Essential, Preferred, and Skyve Protect+ plans, from annual visits to quarterly monitoring with emergency support." },
];

export const FAQ_CTA_TRUST = [
  { icon: "shield", label: "Prevent Problems" },
  { icon: "chart", label: "Extend Roof Life" },
  { icon: "home", label: "Protect Your Home" },
  { icon: "dollar", label: "Save Money" },
] as const;

export const FAQ_CTA_IMAGE = "/images/hero-home-dusk-1.webp";
