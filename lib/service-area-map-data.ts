import { liveHref } from "@/lib/launch-phase";
/* Trust & Authority — Service Area Map (redesign of /service-area) */

export const SAM_HERO = {
  level: "Level 12",
  section: "Trust & Authority",
  title: "Service Area Map",
  desc: "Proudly serving homeowners across King & Snohomish Counties. Tap a city to learn more about our services in your area or request an estimate.",
  features: [
    { icon: "mappin", title: "Local Experts", desc: "We know the local climate, building codes, and homes." },
    { icon: "shield", title: "Fast Response", desc: "Crews near you for faster service." },
    { icon: "badge", title: "Trusted Service", desc: "Thousands of satisfied homeowners." },
  ],
  image: "",
  overlayTitle: "Your Neighbor. Your Roofer.",
  overlayDesc: "We're right here in your community—ready to help with roofing, exterior, and more.",
  overlayStats: [
    { value: "50+", label: "Cities Served" },
    { value: "2", label: "Counties Covered" },
    { value: "15+", label: "Years in the Region" },
    { value: "100%", label: "Local Commitment" },
  ],
};

export type AreaCity = { name: string; slug: string };

export const SAM_COUNTIES: { label: string; cities: AreaCity[] }[] = [
  {
    label: "King County",
    cities: [
      { name: "Seattle", slug: "roofing-seattle-wa" },
      { name: "Bellevue", slug: "roofing-bellevue-wa" },
      { name: "Kirkland", slug: "roofing-kirkland-wa" },
      { name: "Redmond", slug: "roofing-redmond-wa" },
      { name: "Sammamish", slug: "roofing-sammamish-wa" },
      { name: "Issaquah", slug: "roofing-issaquah-wa" },
      { name: "Bothell", slug: "roofing-bothell-wa" },
      { name: "Renton", slug: "roofing-renton-wa" },
      { name: "Mercer Island", slug: "roofing-mercer-island-wa" },
      { name: "Shoreline", slug: "roofing-shoreline-wa" },
      { name: "Woodinville", slug: "roofing-woodinville-wa" },
      { name: "Kenmore", slug: "roofing-kenmore-wa" },
      { name: "Newcastle", slug: "roofing-newcastle-wa" },
      { name: "Auburn", slug: "roofing-auburn-wa" },
      { name: "Kent", slug: "roofing-kent-wa" },
      { name: "Federal Way", slug: "roofing-federal-way-wa" },
      { name: "Burien", slug: "roofing-burien-wa" },
      { name: "SeaTac", slug: "roofing-seatac-wa" },
      { name: "Tukwila", slug: "roofing-tukwila-wa" },
    ],
  },
  {
    label: "Snohomish County",
    cities: [
      { name: "Everett", slug: "roofing-everett-wa" },
      { name: "Lynnwood", slug: "roofing-lynnwood-wa" },
      { name: "Edmonds", slug: "roofing-edmonds-wa" },
      { name: "Mukilteo", slug: "roofing-mukilteo-wa" },
      { name: "Mill Creek", slug: "roofing-mill-creek-wa" },
      { name: "Snohomish", slug: "roofing-snohomish-wa" },
      { name: "Lake Stevens", slug: "roofing-lake-stevens-wa" },
      { name: "Marysville", slug: "roofing-marysville-wa" },
      { name: "Stanwood", slug: "roofing-stanwood-wa" },
      { name: "Arlington", slug: "roofing-arlington-wa" },
      { name: "Monroe", slug: "roofing-monroe-wa" },
      { name: "Brier", slug: "roofing-brier-wa" },
      { name: "Mountlake Terrace", slug: "roofing-mountlake-terrace-wa" },
    ],
  },
];

export const SAM_NOCITY = {
  title: "Don't See Your City?",
  desc: "We may still be able to help! Contact us to confirm service availability in your area.",
  button: { label: "Check My Address", href: "/contact" },
};

export const SAM_OFFER = {
  title: "What We Offer In Your Area",
  items: [
    { icon: "home", title: "Roof Replacement", desc: "Asphalt, Metal, Tile, Cedar & More", href: "/services/roof-replacement" },
    { icon: "wrench", title: "Roof Repair", desc: "Leaks, Damage, Storm Repair", href: liveHref("/services/roof-repair", "/services") },
    { icon: "droplet", title: "Gutters", desc: "Installation, Repair & Cleaning", href: liveHref("/exteriors/gutter-installation", "/services") },
    { icon: "layers", title: "Siding", desc: "Repair & Replacement, All Materials", href: liveHref("/exteriors/siding-replacement", "/services") },
    { icon: "brush", title: "Exterior Services", desc: "Painting, Decking, Windows & More", href: liveHref("/exteriors/exterior-painting", "/services") },
    { icon: "badge", title: "Roof Maintenance", desc: "Inspections, Cleaning & Tune-Ups", href: liveHref("/services/roof-maintenance", "/services") },
  ],
};

export const SAM_CTA = {
  title: "Ready to Get Started?",
  desc: "Get a free inspection and estimate from your local roofing experts.",
  button: { label: "Get Your Free Estimate", href: "/estimate" },
  phone: "(425) 201-2490",
};

export const SAM_NEWSLETTER = {
  title: "Stay Informed. Protect Your Home.",
  desc: "Get expert tips, seasonal reminders, and special offers.",
  perks: ["Roof care tips", "Seasonal maintenance", "Storm alerts", "Exclusive offers"],
};
