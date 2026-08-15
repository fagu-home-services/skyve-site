/* Storm Damage Repair page (/services/storm-damage-repair) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

export const STORM_HERO_IMAGE = "/images/storm-damage-1.webp";

export const SEVERE_RESPONSE = {
  title: "Severe Weather Response",
  items: ["24/7 Emergency Service", "Rapid Damage Assessment", "Tarp & Protect", "Full Restoration"],
  note: "We're here when storms hit. Day or night.",
};

export const STORM_BENEFITS = [
  { icon: "clock", title: "Rapid Response", desc: "We respond quickly to prevent further damage." },
  { icon: "search", title: "Damage Assessment", desc: "Thorough inspection to uncover all storm damage." },
  { icon: "shield", title: "Tarp & Protect", desc: "We secure your roof to protect your home." },
  { icon: "hammer", title: "Expert Repairs", desc: "High-quality repairs built to last." },
  { icon: "file", title: "Insurance Support", desc: "We help you file and maximize your claim." },
  { icon: "badge", title: "Peace of Mind", desc: "We restore your roof and your peace of mind." },
] as const;

export const STORM_DAMAGE_TYPES = [
  { label: "Missing or lifted shingles", image: img("1568605114967-8130f3a36994") },
  { label: "Hail damage", image: img("1576941089067-2de3c901e126") },
  { label: "Fallen tree limbs", image: img("1572120360610-d971b9d7767c") },
  { label: "Damaged flashing", image: img("1583608205776-bfd35f0d9f83") },
  { label: "Granule loss", image: img("1600585154340-be6161a56a0c") },
  { label: "Water intrusion", image: img("1531971589569-0d9370cbe1e5") },
];

export const STORM_EMERGENCY_TRUST = [
  { icon: "clock", label: "Available Day or Night" },
  { icon: "zap", label: "Fast Response Times" },
  { icon: "shield", label: "We Work with All Insurance" },
] as const;

export const STORM_PROCESS = [
  { n: 1, title: "Emergency Contact", desc: "Call or request service online. We respond quickly." },
  { n: 2, title: "Damage Assessment", desc: "We inspect your roof and identify all damage." },
  { n: 3, title: "Tarp & Protect", desc: "We secure your roof to stop leaks and protect your home." },
  { n: 4, title: "Detailed Report", desc: "We document the damage with photos and notes." },
  { n: 5, title: "Repairs & Restoration", desc: "We complete high-quality repairs to restore your roof." },
  { n: 6, title: "Final Inspection", desc: "We ensure everything is done right." },
] as const;

export const STORM_SERVICES = [
  { icon: "home", title: "Shingle Replacement", desc: "Replace missing or damaged shingles." },
  { icon: "shield", title: "Flashing Repair", desc: "Fix damaged or dislodged flashing." },
  { icon: "shield", title: "Tarping Services", desc: "Temporary protection until repairs are made." },
  { icon: "droplet", title: "Leak Repair", desc: "Stop leaks and prevent further damage." },
  { icon: "home", title: "Structural Repair", desc: "Repair damaged decking or roof structure." },
  { icon: "droplet", title: "Gutter Repair", desc: "Fix damaged or detached gutters." },
  { icon: "grid", title: "Siding & Trim Repair", desc: "Restore damaged siding and exterior trim." },
  { icon: "sun", title: "Skylight Repair", desc: "Repair or replace damaged skylights." },
] as const;

export const INSURANCE_CLAIM = {
  title: "We Help With Your Insurance Claim",
  text: "Our team works directly with your insurance company to make the process simple and stress-free.",
  checklist: [
    "Detailed inspection & documentation",
    "Photo & video evidence",
    "Claim assistance & support",
    "Meet with adjusters",
    "Ensure fair & accurate settlements",
  ],
  reportImage: img("1568605114967-8130f3a36994"),
};

export const STORM_BEFORE_AFTER = [
  { label: "Wind Damage", before: img("1568605114967-8130f3a36994"), after: img("1570129477492-45c003edd2be") },
  { label: "Hail Damage", before: img("1576941089067-2de3c901e126"), after: img("1600585154340-be6161a56a0c") },
  { label: "Fallen Tree", before: img("1572120360610-d971b9d7767c"), after: img("1568605114967-8130f3a36994") },
  { label: "Granule Loss", before: img("1583608205776-bfd35f0d9f83"), after: img("1576941089067-2de3c901e126") },
  { label: "Flashing Damage", before: img("1531971589569-0d9370cbe1e5"), after: img("1583608205776-bfd35f0d9f83") },
];

export const STORM_REVIEWS = [
  { name: "Michael T.", city: "Seattle, WA", initials: "MT", quote: "A tree fell on our roof during a storm. Skyve came out the same day, tarped our roof, and handled the entire insurance claim. Excellent service!" },
  { name: "Jessica R.", city: "Bellevue, WA", initials: "JR", quote: "They found damage we didn't even know about. The team was professional, fast, and made a stressful situation so much easier." },
  { name: "David L.", city: "Kirkland, WA", initials: "DL", quote: "Skyve worked directly with our insurance company and got our roof repaired quickly. Highly recommend!" },
];

export const STORM_FAQ = [
  { q: "What should I do after a storm damages my roof?", a: "Stay safe, document what you can from the ground, and call us right away. We'll tarp the roof and start the assessment." },
  { q: "Do you offer emergency roof repair?", a: "Yes — we offer 24/7 emergency response to tarp and secure your roof and prevent further damage." },
  { q: "Will my insurance cover storm damage?", a: "Most homeowner policies cover sudden storm damage. We document everything and work directly with your insurer." },
  { q: "How long does the repair process take?", a: "Emergency tarping is same-day; full restoration timing depends on damage and claim approval, usually 1–3 weeks." },
  { q: "What if I have a leak after a storm?", a: "Call immediately. We prioritize active leaks to protect your home's interior and stop water intrusion fast." },
];

export const STORM_CTA_IMAGE = "/images/storm-damage-2.webp";
