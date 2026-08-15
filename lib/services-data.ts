import { liveHref } from "@/lib/launch-phase";
/* Services Overview / Service Hub (/services) — mock content. */

export const SERVICES_HERO_IMAGE = "/images/hero-home-dusk-1.webp";

export type HubService = {
  label: string;
  href: string;
  icon: string;
  image: string;
  desc: string;
};

export const HUB_SERVICES: HubService[] = [
  { label: "Roof Replacement", href: "/services/roof-replacement", icon: "home", image: "/images/1568605114967-8130f3a36994.jpg", desc: "Complete roof replacement using industry-leading materials and expert installation for long-lasting protection." },
  { label: "Roof Repair", href: liveHref("/services/roof-repair", "/services"), icon: "wrench", image: "/images/1632759145351-1d592919f522.jpg", desc: "Fast, reliable roof repairs for leaks, damage, and wear to extend the life of your roof." },
  { label: "Roof Inspection", href: liveHref("/services/roof-inspection", "/contact"), icon: "drone", image: "/images/1572120360610-d971b9d7767c.jpg", desc: "Thorough roof inspections with drone technology and detailed reporting you can trust." },
  { label: "Metal Roofing", href: liveHref("/materials/metal-roofing", "/services"), icon: "layers", image: "/images/1576941089067-2de3c901e126.jpg", desc: "Durable, energy-efficient metal roofing built to withstand the elements and enhance your home's value." },
  { label: "Skylights", href: "/exteriors/skylight-installation", icon: "sun", image: "/images/1600585154340-be6161a56a0c.jpg", desc: "Bring natural light into your home with professional skylight installation and replacement." },
  { label: "Gutters", href: liveHref("/exteriors/gutter-installation", "/services"), icon: "droplet", image: "/images/1605276374104-dee2a0ed3cd6.jpg", desc: "Custom gutter systems that protect your home from water damage, all year long." },
  { label: "Siding", href: liveHref("/exteriors/siding-replacement", "/services"), icon: "grid", image: "/images/1605146769289-440113cc3d00.jpg", desc: "High-quality siding options that improve curb appeal, efficiency, and protection." },
  { label: "Exterior Painting", href: liveHref("/exteriors/exterior-painting", "/services"), icon: "brush", image: "/images/1502005229762-cf1b2da7c5d6.jpg", desc: "Professional exterior painting that refreshes your home and protects surfaces for years to come." },
];

export const SERVICES_WHY = [
  { icon: "shield", title: "Licensed & Insured", desc: "Full protection and peace of mind on every project." },
  { icon: "badge", title: "Certified Experts", desc: "Top certifications and continuous training." },
  { icon: "star", title: "Quality Materials", desc: "We use only the best materials in the industry." },
  { icon: "shield", title: "Industry-Leading Warranty", desc: "Strong warranties that stand behind our work." },
  { icon: "message", title: "5-Star Rated", desc: "Hundreds of happy customers across WA." },
] as const;
