import { liveHref } from "@/lib/launch-phase";
/* Individual service pages (template data). Add one entry per service.
   Manufacturer names and "Google" are third-party marks shown as text
   placeholders — swap for official logos with permission. */

export type ServicePage = {
  slug: string;
  eyebrow: string;
  titleLines: string[];
  sub: string;
  heroImage: string;
  heroCard?: { titleLines: string[]; text: string };
  whyEyebrow: string;
  whyTitle: string;
  whyIntro: string;
  benefits: { icon: string; title: string; desc: string }[];
  signsTitle: string;
  signs: string[];
  sideNote: { image: string; text: string };
  processTitle: string;
  processIntro: string;
  process: { n: number; title: string; desc: string }[];
  ctaTitle: string;
  ctaSubtitle: string;

  // Replacement-style sections (optional)
  materialsTitle?: string;
  materialsIntro?: string;
  manufacturers?: string[];
  materials?: { title: string; desc: string; image: string; href: string }[];
  difference?: string[];
  beforeAfter?: { before: string; after: string };
  warranty?: { badge: string; title: string }[];

  // Repair-style sections (optional)
  repairTypesTitle?: string;
  repairTypesIntro?: string;
  repairTypes?: { title: string; desc: string; image: string }[];
  emergency?: { title: string; desc: string };
  costsTitle?: string;
  costsIntro?: string;
  costs?: { label: string; price: string }[];
};

export const SERVICE_REVIEWS = [
  { name: "Sarah M.", city: "Bellevue, WA", initials: "SM", quote: "Skyve made the whole process easy. The crew was professional, on time, and our new roof looks amazing!" },
  { name: "Jason T.", city: "Kirkland, WA", initials: "JT", quote: "Excellent communication and top-notch workmanship. Highly recommend Skyve Roofing!" },
  { name: "Linda P.", city: "Snohomish, WA", initials: "LP", quote: "From the estimate to the final cleanup, everything was perfect. Our home has never looked better." },
];

export const ROOF_REPLACEMENT: ServicePage = {
  slug: "roof-replacement",
  eyebrow: "Roof Replacement",
  titleLines: ["A New Roof.", "Built to Protect.", "Built to Last."],
  sub: "When it's time for a new roof, trust Skyve to deliver superior craftsmanship, premium materials, and a smooth, stress-free experience from start to finish.",
  heroImage: "/images/1568605114967-8130f3a36994.jpg",

  whyEyebrow: "The Smart Investment",
  whyTitle: "Why Replace Your Roof?",
  whyIntro:
    "A roof replacement is one of the most important investments you can make in your home. It protects everything underneath and adds value, efficiency, and peace of mind.",
  benefits: [
    { icon: "home", title: "Protect Your Home", desc: "Prevent leaks, water damage, and costly repairs." },
    { icon: "chart", title: "Increase Home Value", desc: "A new roof delivers one of the highest returns on investment." },
    { icon: "sun", title: "Improve Energy Efficiency", desc: "Modern materials help reduce energy costs year-round." },
    { icon: "star", title: "Enhanced Curb Appeal", desc: "Transform the look of your home with a beautiful new roof." },
  ],

  signsTitle: "Signs It's Time for a New Roof",
  signs: [
    "Roof is 15–25+ years old",
    "Missing, cracked, or curling shingles",
    "Leaks or water stains on ceilings",
    "Granules in gutters or downspouts",
    "Sagging roof deck",
    "Moss or algae growth",
  ],
  sideNote: {
    image: "/images/1632759145351-1d592919f522.jpg",
    text: "Not sure if you need a new roof? Our drone inspection and detailed report will give you clarity and confidence.",
  },

  materialsTitle: "Premium Materials. Proven Performance.",
  materialsIntro:
    "We partner with leading manufacturers to offer the best roofing materials for durability, beauty, and long-term protection.",
  manufacturers: ["CertainTeed", "GAF", "Malarkey", "Owens Corning"],
  materials: [
    { title: "Asphalt Shingles", desc: "Versatile, affordable, and available in a variety of styles and colors.", image: "/images/1568605114967-8130f3a36994.jpg", href: liveHref("/materials/architectural-shingles", "/services") },
    { title: "Designer Shingles", desc: "Thicker, dimensional shingles that deliver enhanced beauty and durability.", image: "/images/1572120360610-d971b9d7767c.jpg", href: liveHref("/materials/luxury-shingles", "/services") },
    { title: "Metal Roofing", desc: "Exceptional longevity, energy efficiency, and modern style.", image: "/images/1576941089067-2de3c901e126.jpg", href: liveHref("/materials/metal-roofing", "/services") },
    { title: "Premium Upgrades", desc: "Underlayment, ventilation, and ice & water protection for maximum performance.", image: "/images/1583608205776-bfd35f0d9f83.jpg", href: liveHref("/estimate/detailed", "/instant-estimate") },
  ],

  processTitle: "Our Roof Replacement Process",
  processIntro: "A proven process designed for quality and peace of mind.",
  process: [
    { n: 1, title: "Inspection", desc: "We start with a detailed inspection and honest recommendations." },
    { n: 2, title: "Estimate", desc: "You receive a clear, detailed estimate with no surprises." },
    { n: 3, title: "Planning", desc: "We help you choose the best materials and schedule your project." },
    { n: 4, title: "Installation", desc: "Our skilled crew installs your new roof with precision and care." },
    { n: 5, title: "Final Inspection", desc: "We ensure everything meets our high standards." },
    { n: 6, title: "Warranty & Support", desc: "Enjoy industry-leading warranties and ongoing support." },
  ],

  difference: [
    "Certified, experienced roofing professionals",
    "Premium materials from trusted brands",
    "Clean, respectful job sites",
    "Industry-leading warranties",
    "5-star rated by homeowners across WA",
  ],
  beforeAfter: {
    before: "/images/1583608205776-bfd35f0d9f83.jpg",
    after: "/images/1568605114967-8130f3a36994.jpg",
  },
  warranty: [
    { badge: "50", title: "50 Year Manufacturer Warranty" },
    { badge: "10", title: "10 Year Workmanship Warranty" },
    { badge: "100%", title: "Satisfaction Guaranteed" },
  ],

  ctaTitle: "Ready for a Roof That Protects What Matters Most?",
  ctaSubtitle: "Get a free estimate today and experience the Skyve difference.",
};

export const REPAIR_REVIEWS = [
  { name: "Sarah M.", city: "Bellevue, WA", initials: "SM", quote: "Skyve fixed a persistent leak that two other companies couldn't find. Fast, honest, and professional!" },
  { name: "James T.", city: "Kirkland, WA", initials: "JT", quote: "After a big storm, they came out the same day and had my roof repaired quickly. Great team!" },
  { name: "Linda P.", city: "Redmond, WA", initials: "LP", quote: "Fair pricing, great communication, and quality work. I highly recommend Skyve!" },
];

export const ROOF_REPAIR: ServicePage = {
  slug: "roof-repair",
  eyebrow: "Roof Repair",
  titleLines: ["Fast. Reliable.", "Roof Repair You", "Can Count On."],
  sub: "From minor leaks to storm damage, we quickly identify the problem and deliver lasting repairs that protect your home and your peace of mind.",
  heroImage: "/images/1632759145351-1d592919f522.jpg",
  heroCard: {
    titleLines: ["Small Problem Today.", "Big Damage Tomorrow."],
    text: "Addressing issues early saves money and prevents bigger problems down the road.",
  },

  whyEyebrow: "Keep Your Roof Strong",
  whyTitle: "Don't Wait. Repair Now.",
  whyIntro:
    "Even small roofing issues can lead to costly damage if left unchecked. Our expert team finds the source of the problem and fixes it right the first time.",
  benefits: [
    { icon: "droplet", title: "Stop Leaks", desc: "Prevent water damage, mold, and structural issues." },
    { icon: "shield", title: "Prevent Bigger Problems", desc: "Fixing issues early avoids costly repairs later." },
    { icon: "home", title: "Protect Your Home", desc: "Keep your home safe, dry, and energy efficient." },
    { icon: "dollar", title: "Save Money", desc: "Targeted repairs cost significantly less than replacement." },
  ],

  signsTitle: "Common Roof Problems We Fix",
  signs: [
    "Roof leaks and water intrusion",
    "Missing, cracked, or curled shingles",
    "Storm and wind damage",
    "Flashing and sealant issues",
    "Granule loss and wear",
    "Sagging or soft spots",
    "Damaged vents and roof components",
  ],
  sideNote: {
    image: "/images/1583608205776-bfd35f0d9f83.jpg",
    text: "Not sure what's causing the problem? Our thorough inspection will identify the issue and provide a clear, honest solution — it starts with an inspection.",
  },

  repairTypesTitle: "Quality Repairs. Lasting Results.",
  repairTypesIntro:
    "Our skilled technicians use premium materials and proven techniques to restore your roof's strength and performance.",
  repairTypes: [
    { title: "Leak Repair", desc: "We locate and stop leaks fast to prevent water damage.", image: "/images/1632759145351-1d592919f522.jpg" },
    { title: "Shingle Replacement", desc: "Replace missing, cracked, or damaged shingles to restore protection.", image: "/images/1568605114967-8130f3a36994.jpg" },
    { title: "Flashing Repair", desc: "Fix damaged flashing around chimneys, vents, and skylights.", image: "/images/1572120360610-d971b9d7767c.jpg" },
    { title: "Storm Damage Repair", desc: "Prompt repairs after wind or hail storms to protect your home.", image: "/images/1576941089067-2de3c901e126.jpg" },
    { title: "Roof Component Repair", desc: "We repair vents, pipe boots, ridge caps, and other roof components.", image: "/images/1583608205776-bfd35f0d9f83.jpg" },
  ],
  emergency: {
    title: "Emergency Repairs Available",
    desc: "We offer same-day emergency repairs for active leaks and storm damage.",
  },

  processTitle: "Our Roof Repair Process",
  processIntro: "A simple, transparent process from start to finish.",
  process: [
    { n: 1, title: "Inspection", desc: "We inspect your roof and identify the root cause of the issue." },
    { n: 2, title: "Assessment", desc: "You receive a clear explanation and upfront repair estimate." },
    { n: 3, title: "Repair", desc: "Our team completes the repair using quality materials." },
    { n: 4, title: "Final Check", desc: "We ensure everything is fixed and your roof is protected." },
    { n: 5, title: "Warranty", desc: "We stand behind our work with industry-leading warranties." },
  ],
  costsTitle: "Typical Roof Repair Costs",
  costsIntro: "Every roof is different. Here are some common examples.",
  costs: [
    { label: "Minor Leak Repair", price: "$300 - $750" },
    { label: "Shingle Replacement (per sq.)", price: "$150 - $350" },
    { label: "Flashing Repair", price: "$250 - $650" },
    { label: "Storm Damage Repair", price: "$750 - $2,500+" },
  ],

  ctaTitle: "Have a Roof Problem? We're Here to Help.",
  ctaSubtitle: "Get a free inspection and honest recommendations from our experts.",
};
