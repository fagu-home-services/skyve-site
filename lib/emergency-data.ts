/* Emergency Roof Repair page (/services/emergency-roof-repair) — mock content.
   Hero should use a real storm/tarp photo; current image is a placeholder. */

export const EMERGENCY_HERO_IMAGE = "/images/storm-damage-1.webp";

export const CANT_WAIT_CHECKLIST = [
  "Prevent water damage",
  "Protect your home and belongings",
  "Avoid mold and structural issues",
  "Minimize repair costs",
];

export const CANT_WAIT_FEATURES = [
  { icon: "clock", title: "Fast Response", desc: "We respond quickly, day or night." },
  { icon: "shield", title: "Temporary Protection", desc: "We secure your roof and stop the damage." },
  { icon: "camera", title: "Damage Assessment", desc: "We inspect and document the damage." },
  { icon: "document", title: "Long-Term Solution", desc: "We repair it right with quality that lasts." },
] as const;

export const EMERGENCY_SERVICES = [
  { icon: "home", title: "Storm Damage Repair", desc: "High winds, hail, and severe storms can cause serious damage. We're here to help.", image: "/images/1568605114967-8130f3a36994.jpg" },
  { icon: "droplet", title: "Leak Detection & Repair", desc: "Active leaks found? We'll find the source and stop the water fast.", image: "/images/1600585154340-be6161a56a0c.jpg" },
  { icon: "shield", title: "Tarping & Temporary Cover", desc: "We quickly tarp damaged areas to prevent further water intrusion.", image: "/images/1583608205776-bfd35f0d9f83.jpg" },
  { icon: "leaf", title: "Tree Damage Repair", desc: "Fallen or broken tree limbs can crush your roof. We're ready to respond.", image: "/images/1572120360610-d971b9d7767c.jpg" },
  { icon: "home", title: "Structural Damage Repair", desc: "We address damage to the roof structure to ensure your home is safe.", image: "/images/1576941089067-2de3c901e126.jpg" },
  { icon: "file", title: "Insurance Assistance", desc: "We help document damage and work directly with your insurance company.", image: "/images/1632759145351-1d592919f522.jpg" },
] as const;

export const EMERGENCY_PROCESS = [
  { n: 1, icon: "phone", title: "You Call Us", desc: "Contact us 24/7. We're always ready to help." },
  { n: 2, icon: "truck", title: "We Respond Fast", desc: "We dispatch a team immediately." },
  { n: 3, icon: "shield", title: "Secure Your Roof", desc: "We tarp and protect your home from more damage." },
  { n: 4, icon: "search", title: "Inspect & Assess", desc: "We inspect the damage and provide solutions." },
  { n: 5, icon: "hammer", title: "Repair & Restore", desc: "We complete the repair and restore your peace of mind." },
] as const;

export const EMERGENCY_TRUST = [
  { icon: "clock", title: "24/7 Availability", desc: "We're here nights, weekends, and holidays." },
  { icon: "users", title: "Local Team", desc: "Based in WA and ready to respond fast." },
  { icon: "badge", title: "Expert Technicians", desc: "Skilled pros who get the job done right." },
  { icon: "dollar", title: "Upfront Pricing", desc: "Honest, transparent pricing with no surprises." },
  { icon: "shield", title: "Workmanship Warranty", desc: "Quality repairs backed by our warranty." },
] as const;

export const EMERGENCY_REVIEWS = [
  { name: "Michael T.", city: "Bellevue, WA", initials: "MT", quote: "We had a tree fall on our roof during a storm. Skyve was at our house within an hour and had it tarped immediately. Amazing service!" },
  { name: "Jessica R.", city: "Kirkland, WA", initials: "JR", quote: "Called at 11pm with a leak. They answered, came out the same night, and saved our ceilings. Can't thank them enough!" },
  { name: "David L.", city: "Redmond, WA", initials: "DL", quote: "Professional, fast, and trustworthy. They helped with everything, including the insurance claim. Highly recommend." },
];

export const EMERGENCY_CTA_TRUST = [
  { icon: "clock", label: "24/7 Response" },
  { icon: "truck", label: "Fast On-Site Service" },
  { icon: "shield", label: "Protecting Washington Homes" },
] as const;
