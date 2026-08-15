/* Roof Inspection page (/services/roof-inspection) — mock content. */

export const INSPECTION_HERO_IMAGE = "/images/roof-inspection-1.webp";
export const INSPECTION_REPORT_IMAGE = "/images/roof-inspection-2.webp";

export const INSPECTION_RECOMMENDED = {
  title: "Recommended Annually",
  text: "We recommend a roof inspection at least once a year, and after any major storm.",
};

export const INSPECTION_BENEFITS = [
  { icon: "badge", title: "Prevent Costly Repairs", desc: "Catch small issues early before they become major problems." },
  { icon: "home", title: "Extend Roof Lifespan", desc: "Regular inspections help maximize the life and performance of your roof." },
  { icon: "shield", title: "Protect Your Investment", desc: "Ensure your home is protected with a safe, durable, and reliable roof." },
  { icon: "document", title: "Insurance & Warranty", desc: "Documented inspections support insurance claims and warranty coverage." },
  { icon: "search", title: "Buy or Sell with Confidence", desc: "A roof inspection provides peace of mind during real estate transactions." },
] as const;

export const WHAT_WE_INSPECT = [
  "Shingles or roofing material condition",
  "Flashing around chimneys, vents, and skylights",
  "Roof penetrations and sealants",
  "Gutters, downspouts, and drainage",
  "Attic ventilation and insulation",
  "Signs of leaks or water intrusion",
  "Structural components and decking",
  "Mold, moss, or algae growth",
  "Storm damage and impact marks",
];

export const INSPECTION_REPORT_OVERLAY = {
  title: "Detailed Report Included",
  text: "You'll receive a photo-documented report with our findings and recommendations.",
};

export const INSPECTION_OPTIONS = [
  { icon: "home", title: "Standard Roof Inspection", desc: "Perfect for annual checkups and peace of mind.", price: "FREE" },
  { icon: "search", title: "Pre-Listing Inspection", desc: "Ideal for sellers who want to get ahead of the process.", price: "$199" },
  { icon: "cloud", title: "Post-Storm Inspection", desc: "We check for hidden damage after severe weather.", price: "FREE" },
] as const;

export const INSPECTION_PROCESS = [
  { n: 1, icon: "calendar", title: "Schedule", desc: "Choose a convenient time for your inspection." },
  { n: 2, icon: "home", title: "On-Site Inspection", desc: "We thoroughly inspect your roof and all key components." },
  { n: 3, icon: "camera", title: "Document", desc: "We take detailed photos and notes of our findings." },
  { n: 4, icon: "document", title: "Report", desc: "You receive a clear, easy-to-understand inspection report." },
  { n: 5, icon: "message", title: "Review", desc: "We walk you through our findings and answer questions." },
  { n: 6, icon: "shield", title: "Recommendations", desc: "Get honest recommendations for next steps." },
] as const;

export const WHY_MATTER = {
  title: "Why Regular Roof Inspections Matter",
  intro: "Northwest weather can be tough on your roof. Regular inspections help you stay ahead of potential issues.",
  checklist: [
    "Heavy rain and wind can cause hidden damage",
    "Moss and algae can degrade roofing materials",
    "Small leaks can lead to costly interior damage",
    "Early detection saves you time and money",
  ],
};

export const INSPECTION_STATS = [
  { icon: "clock", value: "60+", label: "Minutes", sub: "Average inspection time" },
  { icon: "camera", value: "30+", label: "Photos", sub: "Included in every report" },
  { icon: "home", value: "100%", label: "Thorough", sub: "No detail overlooked" },
  { icon: "shield", value: "15+", label: "Years", sub: "Protecting WA Homes" },
] as const;

export const INSPECTION_REVIEWS = [
  { name: "John D.", city: "Bellevue, WA", initials: "JD", quote: "The inspection was incredibly thorough and the report was easy to understand. Highly recommend Skyve!" },
  { name: "Melissa K.", city: "Kirkland, WA", initials: "MK", quote: "They found a small leak we didn't even know about. Saved us from a much bigger problem down the road." },
  { name: "David L.", city: "Redmond, WA", initials: "DL", quote: "Professional, on time, and very detailed. I trust Skyve to keep our home protected." },
];
