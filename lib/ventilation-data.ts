/* Roof Ventilation page (/services/roof-ventilation) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

export const VENT_HERO_IMAGE = "/images/roof-ventilation-1.webp";

export const WHY_VENTILATION = {
  title: "Why Ventilation Matters",
  items: [
    "Prevents heat & moisture buildup",
    "Extends roof life up to 30%",
    "Improves indoor comfort",
    "Reduces energy costs",
    "Prevents mold & rot",
  ],
};

export const TEMP_COMPARISON = {
  poor: "158°F",
  proper: "98°F",
  note: "Measured on a 95°F day",
};

export const VENT_PROBLEMS = [
  { icon: "thermometer", title: "Heat Buildup", desc: "Extreme attic heat shortens shingle life." },
  { icon: "droplet", title: "Moisture & Condensation", desc: "Leads to mold, rot, and structural damage." },
  { icon: "snow", title: "Ice Dams", desc: "Improper airflow causes ice dam formation." },
  { icon: "zap", title: "Higher Energy Bills", desc: "Hot attics increase cooling costs by up to 20%." },
  { icon: "clock", title: "Shorter Roof Lifespan", desc: "Can reduce roof life by 10–15 years." },
  { icon: "home", title: "Healthier Home", desc: "Better air quality and comfort year-round." },
] as const;

export const VENT_SYSTEMS = [
  { title: "Ridge Vents", desc: "Continuous ventilation along the roof peak.", image: img("1568605114967-8130f3a36994") },
  { title: "Soffit Vents", desc: "Allow cool air to enter at the lowest point.", image: img("1605276374104-dee2a0ed3cd6") },
  { title: "Gable Vents", desc: "Exhaust hot air from attic space.", image: img("1583608205776-bfd35f0d9f83") },
  { title: "Powered Attic Fans", desc: "Actively remove hot air and moisture.", image: img("1600585154340-be6161a56a0c") },
  { title: "Turbine Vents", desc: "Natural wind-driven ventilation.", image: img("1632759145351-1d592919f522") },
  { title: "Box Vents", desc: "Ideal for shingle roofs.", image: img("1576941089067-2de3c901e126") },
];

export const VENT_STATS = [
  { icon: "home", value: "30%", label: "Longer Roof Life" },
  { icon: "zap", value: "15–20%", label: "Lower Energy Bills" },
  { icon: "droplet", value: "50%", label: "Less Moisture" },
  { icon: "badge", value: "100%", label: "Peace of Mind" },
] as const;

export const VENT_ATTIC_BEFORE = img("1600585154340-be6161a56a0c");
export const VENT_ATTIC_AFTER = img("1568605114967-8130f3a36994");

export const VENT_PROCESS = [
  { n: 1, title: "Inspection", desc: "We assess your attic and roof ventilation." },
  { n: 2, title: "Airflow Analysis", desc: "Identify heat & moisture problem areas." },
  { n: 3, title: "System Design", desc: "We recommend the best ventilation solution." },
  { n: 4, title: "Professional Installation", desc: "Expert installation for optimal airflow." },
  { n: 5, title: "Airflow Testing", desc: "Verify balanced intake and exhaust." },
  { n: 6, title: "Documentation", desc: "Photos & report of work performed." },
  { n: 7, title: "Future Protection", desc: "Better comfort, lower costs, longer roof life." },
] as const;

export const UPGRADE_PROBLEMS = [
  "Hot attic temperatures",
  "Excess moisture",
  "Higher energy bills",
  "Premature roof aging",
];
export const UPGRADE_SOLUTIONS = [
  "Balanced airflow",
  "Lower temperatures",
  "Energy savings",
  "Extended roof life",
];

export const VENT_BENEFITS = [
  { icon: "thermometer", title: "Regulates attic temperature", desc: "Keeps your home cooler in summer." },
  { icon: "droplet", title: "Prevents moisture buildup", desc: "Protects against mold, rot & mildew." },
  { icon: "shield", title: "Extends roof lifespan", desc: "Adds up to 30% more life to your roof." },
  { icon: "home", title: "Improves comfort", desc: "Better indoor air quality year-round." },
  { icon: "dollar", title: "Saves on energy bills", desc: "Reduce cooling costs up to 20%." },
] as const;

export const CHECK_BALANCE = [
  "Intake vents (soffit, eave, fascia)",
  "Exhaust vents (ridge, gable, fan)",
  "Ventilation ratio calculations",
  "Attic insulation & airflow",
  "Blockages & airflow restrictions",
  "Moisture & condensation issues",
];
export const CHECK_BALANCE_IMAGE = "/images/attic-1.webp";

export const VENT_REVIEWS = [
  { name: "Amanda R.", city: "Bellevue, WA", initials: "AR", badge: "Saved $1,200+ on energy", quote: "Skyve improved our attic ventilation and the difference is incredible. Our home is cooler and our roof stays healthy." },
  { name: "Michael T.", city: "Seattle, WA", initials: "MT", badge: "Saved $850+ annually", quote: "Professional team, detailed inspection, and explained everything clearly. Highly recommend Skyve!" },
  { name: "David L.", city: "Kirkland, WA", initials: "DL", badge: "Excellent Service", quote: "The ventilation upgrade made our attic stay dry and our roof is in great shape for years to come." },
];

export const VENT_FAQ = [
  { q: "How do I know if my roof has bad ventilation?", a: "Signs include a hot attic, high energy bills, moisture or mold in the attic, and premature shingle wear. A free inspection confirms it." },
  { q: "What is the ideal ventilation ratio?", a: "The common standard is 1 sq. ft. of ventilation per 300 sq. ft. of attic space, balanced between intake and exhaust." },
  { q: "Will better ventilation lower my energy bills?", a: "Yes — proper airflow can reduce cooling costs by up to 20% by keeping your attic and home cooler in summer." },
  { q: "What types of vents are best for my roof?", a: "It depends on your roof. A balanced ridge-and-soffit system is ideal for most homes; we design the right mix for yours." },
  { q: "How long does installation take?", a: "Most ventilation upgrades are completed in a single day, depending on the system and roof size." },
];

export const VENT_CTA_TRUST = [
  { icon: "badge", label: "No Obligation" },
  { icon: "search", label: "Free Inspection" },
  { icon: "star", label: "Expert Recommendations" },
  { icon: "shield", label: "Longer Roof Life" },
] as const;

export const VENT_CTA_IMAGE = "/images/roof-ventilation-2.webp";
