import { liveHref } from "@/lib/launch-phase";
/* Contact page (/contact) — mock content. */
import { COMPANY } from "./company";

export const CONTACT_HERO_TRUST = [
  "25-Year Workmanship Warranty",
  "Licensed & Insured",
  "Serving Washington Homeowners",
  "20+ Years Combined Experience",
];

export const CONTACT_INFO = [
  { icon: "phone", title: "Phone", value: COMPANY.phone, sub: "Call or Text" },
  { icon: "mail", title: "Email", value: COMPANY.email, sub: "" },
  { icon: "pin", title: "Service Area", value: "King County &", sub: "Snohomish County" },
  { icon: "clock", title: "Business Hours", value: "Mon–Fri", sub: "8:00 AM – 6:00 PM" },
];

export const CONTACT_METHODS = [
  { icon: "phone", title: "Call Us", value: COMPANY.phone, action: "Call Now", href: COMPANY.phoneHref },
  { icon: "message", title: "Text Us", value: "SMS Support", action: "Send Text", href: COMPANY.phoneHref },
  { icon: "mail", title: "Email Us", value: COMPANY.email, action: "Send Email", href: COMPANY.emailHref },
  { icon: "calendar", title: "Schedule Online", value: "Book Inspection", action: "Schedule", href: liveHref("/services/roof-inspection", "/contact") },
];

export const PROJECT_TYPE_OPTIONS = [
  "Select a project type",
  "Roof Replacement",
  "Roof Repair",
  "Roof Inspection",
  "Metal Roofing",
  "Siding",
  "Other",
];

export const TIMELINE_OPTIONS = [
  "Select timeline",
  "Urgent (within 30 days)",
  "Soon (1–3 months)",
  "Researching (3–6 months)",
  "Just exploring",
];

export const KING_CITIES = [
  "Seattle", "Bellevue", "Kirkland", "Redmond", "Sammamish",
  "Issaquah", "Mercer Island", "Renton", "Kent", "Auburn",
];

export const SNO_CITIES = [
  "Bothell", "Everett", "Lynnwood", "Edmonds", "Mukilteo",
  "Mill Creek", "Monroe", "Snohomish", "Arlington", "Marysville",
];

export const FEATURED_CITY = {
  name: "Bellevue, WA",
  tags: ["Roof Replacement", "Roof Repair", "Inspection"],
  projects: "167",
  image: "/images/1564013799919-ab600027ffc6.jpg",
  href: "/roofing-bellevue-wa",
};

export const FEATURED_CITIES = [
  {
    name: "Seattle, WA",
    tags: ["Roof Replacement", "Repair", "Inspection"],
    projects: "214",
    image: "/images/1570129477492-45c003edd2be.jpg",
    href: "/roofing-seattle-wa",
  },
  {
    name: "Bellevue, WA",
    tags: ["Roof Replacement", "Roof Repair", "Inspection"],
    projects: "167",
    image: "/images/1564013799919-ab600027ffc6.jpg",
    href: "/roofing-bellevue-wa",
  },
  {
    name: "Kirkland, WA",
    tags: ["Roof Replacement", "Metal Roofing", "Gutters"],
    projects: "142",
    image: "/images/1580587771525-78b9dba3b914.jpg",
    href: "/roofing-kirkland-wa",
  },
  {
    name: "Redmond, WA",
    tags: ["Roof Replacement", "Inspection", "Siding"],
    projects: "128",
    image: "/images/1531971589569-0d9370cbe1e5.jpg",
    href: "/roofing-redmond-wa",
  },
  {
    name: "Everett, WA",
    tags: ["Storm Damage", "Roof Repair", "Gutters"],
    projects: "96",
    image: "/images/1600596542815-ffad4c1539a9.jpg",
    href: "/roofing-everett-wa",
  },
];

export const OFFICE = {
  name: "Skyve Roofing & Exteriors",
  address1: "12345 NE 80th St, Suite 101",
  address2: "Kirkland, WA 98033",
  phone: COMPANY.phone,
  email: COMPANY.email,
  hours: "Mon – Fri  8:00 AM – 6:00 PM",
  license: COMPANY.license,
  image: "/images/1600585154340-be6161a56a0c.jpg",
};

export const CONTACT_FAQ = [
  { q: "How quickly can I get an estimate?", a: "Our instant online estimate takes under 60 seconds. For a detailed, locked-in price, we can typically schedule an on-site or drone inspection within a few days." },
  { q: "Do you offer financing?", a: "Yes — we offer flexible financing with low monthly payments and a soft credit check that won't affect your score. See our financing page for options." },
  { q: "Do you offer free inspections?", a: "We offer a free instant estimate online. Our comprehensive drone inspection is a paid service that includes a detailed digital report." },
  { q: "Can I schedule online?", a: "Absolutely. You can book an inspection or estimate online in a few clicks, any time — no phone call required." },
  { q: "Can I text photos of my roof?", a: "Yes. Text photos to our team and we'll take a first look and point you in the right direction." },
  { q: "How long does a roof inspection take?", a: "Most inspections take 45–90 minutes on site. You'll receive your detailed digital report within 24 hours." },
  { q: "What areas do you serve?", a: "We serve King County and Snohomish County, including Seattle, Bellevue, Kirkland, Everett, and surrounding communities." },
  { q: "What roofing brands do you install?", a: "We install top brands including GAF, CertainTeed, and Malarkey, plus standing-seam metal systems — matched to your home and budget." },
];

export const CONTACT_REVIEWS = [
  { name: "Sarah M.", city: "Seattle, WA", initials: "SM", quote: "Skyve was incredibly professional from start to finish. The estimate was detailed, the team was on time, and the roof looks amazing!" },
  { name: "Jason T.", city: "Bellevue, WA", initials: "JT", quote: "The inspection report was the most thorough I've ever seen. They explained everything clearly and helped us choose the best option." },
  { name: "Linda P.", city: "Kirkland, WA", initials: "LP", quote: "Great communication, fair pricing, and high-quality work. I highly recommend Skyve to anyone looking for a new roof." },
];
