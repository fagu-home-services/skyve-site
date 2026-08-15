/* Roof Leak Repair page (/services/roof-leak-repair) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

export const LEAK_HERO_IMAGE = "/images/roof-leak-1.webp";

export const RAPID_RESPONSE = {
  title: "Rapid Leak Response",
  items: ["Same-Day Inspections", "Accurate Leak Detection", "Permanent Repairs", "Prevent Further Damage"],
  note: "We stop leaks fast and protect what matters most.",
};

export const LEAK_BENEFITS = [
  { icon: "droplet", title: "Stop Water Damage", desc: "Prevent costly interior damage to your home." },
  { icon: "search", title: "Accurate Detection", desc: "We find the root cause, not just the symptoms." },
  { icon: "wrench", title: "Lasting Repairs", desc: "Quality repairs that stand the test of time." },
  { icon: "home", title: "Protect Your Investment", desc: "Prevent bigger problems and higher costs." },
  { icon: "shield", title: "Peace of Mind", desc: "We stand behind our work and warranties." },
] as const;

export const LEAK_SIGNS = [
  { label: "Water stains on ceilings or walls", image: img("1600585154340-be6161a56a0c") },
  { label: "Dripping or water in the attic", image: img("1531971589569-0d9370cbe1e5") },
  { label: "Mold or musty odors", image: img("1583608205776-bfd35f0d9f83") },
  { label: "Damaged or missing shingles", image: img("1568605114967-8130f3a36994") },
  { label: "Peeling paint or bubbling drywall", image: img("1600596542815-ffad4c1539a9") },
  { label: "Higher energy bills", image: img("1570129477492-45c003edd2be") },
];

export const LEAK_PROCESS = [
  { n: 1, title: "Schedule Inspection", desc: "We respond quickly and schedule a convenient time to inspect." },
  { n: 2, title: "Leak Detection", desc: "We use advanced tools to find the exact source of the leak." },
  { n: 3, title: "Assessment", desc: "We assess the damage and explain the best solution." },
  { n: 4, title: "Repair", desc: "We make the necessary repairs using high-quality materials." },
  { n: 5, title: "Test & Verify", desc: "We test the area to ensure the leak is completely stopped." },
  { n: 6, title: "Report & Warranty", desc: "You receive a detailed report and our workmanship warranty." },
] as const;

export const LEAK_METHODS = [
  { title: "Moisture Mapping", desc: "Pinpoints hidden moisture under roofing materials.", image: img("1600585154340-be6161a56a0c") },
  { title: "Infrared Scanning", desc: "Detects temperature differences caused by leaks.", image: img("1576941089067-2de3c901e126") },
  { title: "Drone Inspection", desc: "Safely inspect hard-to-reach areas from above.", image: img("1568605114967-8130f3a36994") },
  { title: "Water Testing", desc: "Confirms the exact source of the water intrusion.", image: img("1632759145351-1d592919f522") },
];

export const LEAK_SERVICES = [
  "Shingle replacement",
  "Chimney flashing repair",
  "Flashing repair",
  "Valley repair",
  "Vent pipe repair",
  "Flat roof leak repair",
  "Skylight leak repair",
  "Emergency tarp service",
];

export const LEAK_BEFORE_AFTER = [
  { label: "Damaged Flashing", before: img("1583608205776-bfd35f0d9f83"), after: img("1568605114967-8130f3a36994") },
  { label: "Missing Shingles", before: img("1572120360610-d971b9d7767c"), after: img("1576941089067-2de3c901e126") },
  { label: "Leaky Vent Pipe", before: img("1632759145351-1d592919f522"), after: img("1600585154340-be6161a56a0c") },
  { label: "Roof Valley Leak", before: img("1531971589569-0d9370cbe1e5"), after: img("1570129477492-45c003edd2be") },
];

export const LEAK_REVIEWS = [
  { name: "Sarah M.", city: "Bellevue, WA", initials: "SM", quote: "Skyve found a leak that two other companies couldn't find. They fixed it fast and saved our ceilings. Highly recommend!" },
  { name: "James T.", city: "Kirkland, WA", initials: "JT", quote: "Professional, quick response, and the leak has been completely resolved. Great communication throughout." },
  { name: "Linda P.", city: "Redmond, WA", initials: "LP", quote: "They came out same day when we had a leak during a storm. True professionals who care about their customers." },
];

export const LEAK_CTA_IMAGE = "/images/roof-repair-1.webp";
