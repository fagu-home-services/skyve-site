import { liveHref } from "@/lib/launch-phase";
import { COMPANY } from "@/lib/company";
/* City landing page template (/roofing-[city]-wa) — mock content.
   Hero/skyline images are placeholders (swap for real local photos).
   Testimonial avatars use initials. */

const img = (id: string) => `/images/${id}.jpg`;

/* Shared across all city pages */
export const CITY_SERVICES = [
  { icon: "home", title: "Roof Replacement", desc: "High-quality roofing systems built to last.", href: liveHref("/services/roof-replacement", "/services"), image: img("1570129477492-45c003edd2be") },
  { icon: "wrench", title: "Roof Repair", desc: "Fast, reliable repairs for leaks and damage.", href: liveHref("/services/roof-repair", "/services"), image: img("1632759145351-1d592919f522") },
  { icon: "layers", title: "Metal Roofing", desc: "Durable, energy-efficient metal roofing solutions.", href: liveHref("/materials/metal-roofing", "/services"), image: img("1576941089067-2de3c901e126") },
  { icon: "droplet", title: "Gutters", desc: "Protect your home with expert gutter installation.", href: liveHref("/exteriors/gutter-installation", "/services"), image: img("1605276374104-dee2a0ed3cd6") },
  { icon: "sun", title: "Skylights", desc: "Bring natural light in with premium skylights.", href: liveHref("/exteriors/skylight-installation", "/services"), image: img("1600585154340-be6161a56a0c") },
  { icon: "grid", title: "Siding", desc: "Enhance curb appeal and home protection.", href: liveHref("/exteriors/siding-replacement", "/services"), image: img("1605146769289-440113cc3d00") },
];

export const CITY_PROCESS = [
  { n: 1, icon: "calendar", title: "Schedule", desc: "Book your free inspection online or by phone." },
  { n: 2, icon: "search", title: "Inspect", desc: "We inspect your roof and provide honest feedback." },
  { n: 3, icon: "calculator", title: "Estimate", desc: "Get a detailed, transparent estimate – no surprises." },
  { n: 4, icon: "hammer", title: "Build", desc: "Our expert team gets to work with care." },
  { n: 5, icon: "shield", title: "Enjoy", desc: "Enjoy a beautiful, durable roof with peace of mind." },
];

export const CITY_BADGES = [
  { icon: "shield", title: "Licensed", sub: `#${COMPANY.license}` },
  { icon: "badge", title: "Bonded", sub: "& Insured" },
  { icon: "badge", title: "25-Year", sub: "Warranty" },
  { icon: "users", title: "Owner-Led", sub: "Every Job" },
];

export type CityData = {
  slug: string;
  name: string;
  state: string;
  nickname: string;
  tagline: string;
  bannerHeadline: string;
  servicesLabel?: string;
  heroDesc: string;
  heroImage: string;
  bannerImage: string;
  rating: { score: string; count: string };
  stats: { icon: string; value: string; label: string }[];
  proudText: string;
  projects: { neighborhood: string; type: string; rating: string; image: string }[];
  testimonials: { quote: string; name: string; area: string; initials: string }[];
  neighborhoods: string[];
};

export const SEATTLE: CityData = {
  slug: "roofing-seattle-wa",
  name: "Seattle",
  state: "WA",
  nickname: "Emerald City",
  tagline: "Trusted Roofing & Exterior Experts Serving the Emerald City.",
  bannerHeadline: "Local. Trusted. Seattle Proud.",
  servicesLabel: "Roofing Services",
  heroDesc:
    "From modern homes in Capitol Hill to waterfront properties in West Seattle, Skyve delivers premium roofing solutions built to withstand the Pacific Northwest climate.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "320+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Seattle Based" },
  ],
  proudText:
    "We understand Seattle's unique weather and building codes. That's why homeowners across the city trust Skyve for honest recommendations, premium materials, and craftsmanship that lasts.",
  projects: [
    { neighborhood: "Greenwood", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Queen Anne", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "West Seattle", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Capitol Hill", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof and the experience was amazing from start to finish. Highly recommend!", name: "Jessica M.", area: "Ballard, Seattle", initials: "JM" },
    { quote: "Professional, on time, and the quality of work is outstanding. Our new roof looks incredible.", name: "Mark T.", area: "Magnolia, Seattle", initials: "MT" },
    { quote: "They helped us after a big storm and fixed our roof quickly. Great team!", name: "Sarah L.", area: "Leschi, Seattle", initials: "SL" },
  ],
  neighborhoods: ["Ballard", "Queen Anne", "Capitol Hill", "West Seattle", "Magnolia", "Green Lake", "And More"],
};

export const BELLEVUE: CityData = {
  slug: "roofing-bellevue-wa",
  name: "Bellevue",
  state: "WA",
  nickname: "Eastside",
  tagline: "Premium Roofing & Exterior Solutions For Beautiful Homes and Businesses.",
  bannerHeadline: "Bellevue. Sophistication Meets Quality.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve Bellevue with top-quality roofing systems, expert craftsmanship, and exceptional customer care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "280+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Bellevue Based" },
  ],
  proudText:
    "From Clyde Hill to Factoria, we understand Bellevue's building standards and aesthetic. We deliver roofing solutions that complement your home and stand strong against the Northwest weather.",
  projects: [
    { neighborhood: "West Bellevue", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Bridle Trails", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Somerset", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Newport Hills", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve did an amazing job on our new roof. The team was professional, clean, and on time.", name: "Amy T.", area: "West Bellevue", initials: "AT" },
    { quote: "Outstanding quality and attention to detail. Our home looks better than ever!", name: "David R.", area: "Enatai", initials: "DR" },
    { quote: "They walked us through every step and delivered exactly what they promised.", name: "Michelle L.", area: "Factoria", initials: "ML" },
  ],
  neighborhoods: ["West Bellevue", "Bridle Trails", "Enatai", "Somerset", "Factoria", "Newport Hills", "Woodridge", "And More"],
};

export const KIRKLAND: CityData = {
  slug: "roofing-kirkland-wa",
  name: "Kirkland",
  state: "WA",
  nickname: "Eastside",
  tagline: "Local Roofing Experts. Premium Results.",
  bannerHeadline: "Kirkland. Quality You Can See.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Proudly serving Kirkland neighborhoods with high-quality roofing and exterior services built to last.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "250+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Kirkland Based" },
  ],
  proudText:
    "From waterfront homes to hillside properties, we understand Kirkland's unique architecture and climate. Our roofing systems are designed for beauty, performance, and long-term protection.",
  projects: [
    { neighborhood: "Finn Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Juanita", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Totem Lake", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Bridle Trails", type: "Roof Replacement", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and the quality is outstanding. Our new roof looks incredible!", name: "Jennifer M.", area: "Kirkland, WA", initials: "JM" },
    { quote: "Great communication and attention to detail. I highly recommend Skyve to anyone in Kirkland.", name: "Michael T.", area: "Kirkland, WA", initials: "MT" },
    { quote: "From the estimate to the final cleanup, everything was smooth. The roof looks amazing!", name: "Laura S.", area: "Kirkland, WA", initials: "LS" },
  ],
  neighborhoods: ["Finn Hill", "Juanita", "Bridle Trails", "Totem Lake", "Rose Hill", "Houghton", "Highlands"],
};

export const REDMOND: CityData = {
  slug: "roofing-redmond-wa",
  name: "Redmond",
  state: "WA",
  nickname: "Eastside",
  tagline: "Professional Roofing & Exterior Services You Can Trust.",
  bannerHeadline: "Redmond. Innovation Meets Quality.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors proudly serves Redmond and the Eastside with top-quality roofing solutions built to protect your home and add value.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "240+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Redmond Based" },
  ],
  proudText:
    "From Education Hill to Overlake and Idylwood, we understand Redmond's unique architecture and climate. Our roofing solutions combine advanced materials with expert craftsmanship for maximum performance.",
  projects: [
    { neighborhood: "Education Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Overlake", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Sammamish Valley", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Idylwood", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve did an outstanding job on our roof replacement in Education Hill. The crew was professional and the results are absolutely beautiful.", name: "Jennifer L.", area: "Redmond, WA", initials: "JL" },
    { quote: "Honest, on time, and extremely knowledgeable. Our new metal roof looks amazing!", name: "Michael T.", area: "Overlake, WA", initials: "MT" },
    { quote: "Great communication and attention to detail. Highly recommend Skyve Roofing!", name: "Sarah K.", area: "Redmond, WA", initials: "SK" },
  ],
  neighborhoods: ["Education Hill", "Overlake", "Idylwood", "Avondale", "Bear Creek", "Willows", "& More"],
};

export const SAMMAMISH: CityData = {
  slug: "roofing-sammamish-wa",
  name: "Sammamish",
  state: "WA",
  nickname: "Eastside",
  tagline: "Trusted Roofing & Exterior Specialists. Premium Results.",
  bannerHeadline: "Protecting Sammamish Homes. Enhancing Lives.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Sammamish community with top-quality roofing and exterior services built to last in the Pacific Northwest.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "230+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Sammamish Based" },
  ],
  proudText:
    "From Aster to Monte Verde, we understand Sammamish's high standards and unique homes. Our roofing systems are built for beauty, performance, and long-term protection.",
  projects: [
    { neighborhood: "Aster", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Monterra", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Sahalee", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Eastridge", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve delivered exactly what they promised. Great communication, beautiful results!", name: "Jennifer M.", area: "Sammamish, WA", initials: "JM" },
    { quote: "Professional team, high-quality materials, and they cleaned up everything. Highly recommend!", name: "Mark T.", area: "Sammamish, WA", initials: "MT" },
    { quote: "Our new roof looks amazing and we feel so much better going into winter. Thank you Skyve!", name: "Lisa K.", area: "Sammamish, WA", initials: "LK" },
  ],
  neighborhoods: ["Aster", "Monterra", "Sahalee", "Eastridge", "Beaver Lake", "Pine Lake", "Klahanie", "And More"],
};

export const MERCER_ISLAND: CityData = {
  slug: "roofing-mercer-island-wa",
  name: "Mercer Island",
  state: "WA",
  nickname: "Eastside",
  tagline: "Island Homes. Premium Roofing. Uncompromising Quality.",
  bannerHeadline: "Elevating Mercer Island. One Roof at a Time.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve Mercer Island residents with high-end roofing and exterior solutions built for beauty, performance, and longevity.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Mercer Island Based" },
  ],
  proudText:
    "Mercer Island homes deserve the highest standard of craftsmanship and materials. We deliver roofing systems that enhance beauty, improve performance, and protect what matters most.",
  projects: [
    { neighborhood: "South End", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Island Crest", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "East Mercer Way", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "West Mercer", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve provided top-tier service and the highest quality roof for our home. Truly the best experience.", name: "Brian K.", area: "Mercer Island, WA", initials: "BK" },
    { quote: "Professional, detail-oriented, and on time. Our new roof looks incredible.", name: "Lisa M.", area: "Mercer Island, WA", initials: "LM" },
    { quote: "They respected our home and property like it was their own. Highly recommend Skyve!", name: "Michael T.", area: "Mercer Island, WA", initials: "MT" },
  ],
  neighborhoods: ["Beaux Arts Village", "Newcastle", "Bellevue", "Factoria", "Seward Park", "And More"],
};

export const BOTHELL: CityData = {
  slug: "roofing-bothell-wa",
  name: "Bothell",
  state: "WA",
  nickname: "Eastside",
  tagline: "Local Experts. Premium Roofing. Built to Last.",
  bannerHeadline: "Protecting Bothell Homes. Building Trust.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Bothell community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "200+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Bothell Based" },
  ],
  proudText:
    "From Canyon Park to North Creek, we understand Bothell's unique homes and weather. Our roofing systems are built for the Pacific Northwest climate and designed to deliver long-term performance.",
  projects: [
    { neighborhood: "North Creek", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Canyon Park", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Downtown Bothell", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Queensgate", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and the quality is outstanding. Our new roof looks incredible!", name: "Sarah L.", area: "Bothell, WA", initials: "SL" },
    { quote: "Great communication and attention to detail. I highly recommend Skyve Roofing!", name: "Mark T.", area: "Bothell, WA", initials: "MT" },
    { quote: "From estimate to final cleanup, everything was smooth. The team truly cares.", name: "Jennifer R.", area: "Bothell, WA", initials: "JR" },
  ],
  neighborhoods: ["North Creek", "Canyon Park", "Queensgate", "Downtown Bothell", "Maltby", "Woodinville", "And More"],
};

export const LYNNWOOD: CityData = {
  slug: "roofing-lynnwood-wa",
  name: "Lynnwood",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Quality Roofing. Honest Service. Built for the Northwest.",
  bannerHeadline: "Built for Lynnwood. Backed by Experience.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve Lynnwood and surrounding communities with expert roofing and exterior solutions built to last in the Pacific Northwest.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Lynnwood Based" },
  ],
  proudText:
    "From Alderwood to Martha Lake, we understand Lynnwood's unique homes and weather. Our roofing systems are engineered for durability, beauty, and long-term performance.",
  projects: [
    { neighborhood: "Alderwood Manor", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Martha Lake", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Cedar Valley", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Damson Woods", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve Roofing replaced our roof quickly and the quality is outstanding. The crew was professional and respectful of our home.", name: "Amanda R.", area: "Lynnwood, WA", initials: "AR" },
    { quote: "Honest estimate, great communication, and the final result looks amazing. Highly recommend Skyve Roofing!", name: "Jason T.", area: "Lynnwood, WA", initials: "JT" },
    { quote: "They know the Lynnwood area and what our homes need. The team went above and beyond.", name: "Melissa K.", area: "Lynnwood, WA", initials: "MK" },
  ],
  neighborhoods: ["Alderwood Manor", "Martha Lake", "Cedar Valley", "Mill Creek", "North Lynnwood", "Picnic Point", "And More"],
};

export const EVERETT: CityData = {
  slug: "roofing-everett-wa",
  name: "Everett",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the Pacific Northwest.",
  bannerHeadline: "Protecting Everett Homes. Weathering Everything.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Everett community with professional roofing and exterior services delivering quality, durability, and peace of mind.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "230+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Everett Based" },
  ],
  proudText:
    "From heavy rain to coastal winds, Everett homes face unique challenges. Our roofing systems are built to withstand the elements and provide long-term protection for your home and family.",
  projects: [
    { neighborhood: "Rucker Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Silver Lake", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Paine Field", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Riverside", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve did an amazing job on our new roof. The team was professional, clean, and efficient. Highly recommended!", name: "Karen L.", area: "Everett, WA", initials: "KL" },
    { quote: "Honest estimate, great communication, and top-quality materials. Our roof looks fantastic!", name: "David M.", area: "Everett, WA", initials: "DM" },
    { quote: "They finished on time and the cleanup was perfect. You can tell they take pride in their work.", name: "Melissa T.", area: "Everett, WA", initials: "MT" },
  ],
  neighborhoods: ["Mill Creek", "Marysville", "Mukilteo", "Snohomish", "Lake Stevens", "And More"],
};

export const RENTON: CityData = {
  slug: "roofing-renton-wa",
  name: "Renton",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Renton Homes. Building Value.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Renton community with professional roofing and exterior services delivering lasting quality and peace of mind.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Renton Based" },
  ],
  proudText:
    "From Kennydale to Fairwood, Renton homes face unique weather and environmental conditions. Our roofing systems are built to perform, protect, and add value for years to come.",
  projects: [
    { neighborhood: "Cedar River", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Kennydale", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Fairwood", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Maplewood", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof quickly and the crew was amazing. Great communication from start to finish.", name: "Lisa M.", area: "Renton, WA", initials: "LM" },
    { quote: "Honest estimate, quality materials, and a warranty we can count on. Highly recommend Skyve Roofing!", name: "Mark T.", area: "Renton, WA", initials: "MT" },
    { quote: "Our new roof looks great and handled the last storm perfectly. Very professional team.", name: "David R.", area: "Renton, WA", initials: "DR" },
  ],
  neighborhoods: ["Kennydale", "Fairwood", "Maplewood", "Highlands", "Benson Hill", "And More"],
};

export const ISSAQUAH: CityData = {
  slug: "roofing-issaquah-wa",
  name: "Issaquah",
  state: "WA",
  nickname: "Eastside",
  tagline: "Expert Roofing. Exceptional Results. Built for the Eastside.",
  bannerHeadline: "Protecting Issaquah Homes. Adding Lasting Value.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Issaquah community with premium roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "220+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Issaquah Based" },
  ],
  proudText:
    "From Talus to Klahanie, Issaquah homes deserve roofing systems designed for beauty, performance, and durability. We use the best materials and expert craftsmanship to protect what matters most.",
  projects: [
    { neighborhood: "Talus", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Klahanie", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Tiburon", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Mirrormont", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve provided great communication and the quality was outstanding. Our new roof looks incredible!", name: "Jennifer L.", area: "Issaquah, WA", initials: "JL" },
    { quote: "Professional team, quality materials, and they finished on time. Highly recommend Skyve Roofing!", name: "Brian T.", area: "Issaquah, WA", initials: "BT" },
    { quote: "They treated our home like their own. We couldn't be happier with the results!", name: "Melissa K.", area: "Issaquah, WA", initials: "MK" },
  ],
  neighborhoods: ["Talus", "Klahanie", "Tiburon", "Mirrormont", "Cougar Mountain", "Highlands", "And More"],
};

export const AUBURN: CityData = {
  slug: "roofing-auburn-wa",
  name: "Auburn",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Auburn Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Auburn community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "220+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Auburn Based" },
  ],
  proudText:
    "From Lea Hill to Lakeland Hills, Auburn homes deserve roofing systems that stand strong against the elements. We use premium materials and expert craftsmanship to deliver long-term protection and peace of mind.",
  projects: [
    { neighborhood: "Lea Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Lakeland Hills", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "West Hill", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Brannan", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve exceeded our expectations on our roof replacement. The team was professional, punctual, and the results are excellent!", name: "Nicole P.", area: "Auburn, WA", initials: "NP" },
    { quote: "Great communication, fair pricing, and high-quality workmanship. Highly recommend Skyve Roofing!", name: "James R.", area: "Auburn, WA", initials: "JR" },
    { quote: "They handled everything from start to finish with care. Our new roof looks amazing!", name: "Melissa T.", area: "Auburn, WA", initials: "MT" },
  ],
  neighborhoods: ["Lea Hill", "Lakeland Hills", "West Hill", "Brannan", "South Auburn", "Pacific", "And More"],
};

export const KENT: CityData = {
  slug: "roofing-kent-wa",
  name: "Kent",
  state: "WA",
  nickname: "South King County",
  tagline: "Trusted Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Kent Homes. Built to Last.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Kent community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Kent Based" },
  ],
  proudText:
    "From historic neighborhoods to new developments, Kent homes deserve roofing systems that stand strong against the elements. We provide expert craftsmanship and premium materials to protect your home and your investment.",
  projects: [
    { neighborhood: "East Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Panorama City", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "West Hill", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
    { neighborhood: "Lake Meridian", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
  ],
  testimonials: [
    { quote: "Skyve did an amazing job on our roof replacement. The crew was professional, punctual, and the results are perfect!", name: "Sarah T.", area: "Kent, WA", initials: "ST" },
    { quote: "Honest estimate, fair pricing, and excellent communication. Highly recommend Skyve Roofing!", name: "James L.", area: "Kent, WA", initials: "JL" },
    { quote: "They treated our home like their own and the cleanup was spotless. We love our new roof!", name: "Melissa R.", area: "Kent, WA", initials: "MR" },
  ],
  neighborhoods: ["Auburn", "Des Moines", "Federal Way", "Covington", "Maple Valley", "And More"],
};

export const FEDERAL_WAY: CityData = {
  slug: "roofing-federal-way-wa",
  name: "Federal Way",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Federal Way Homes. Built to Last.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Federal Way community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Federal Way Based" },
  ],
  proudText:
    "From Twin Lakes to Dash Point, Federal Way homes face diverse weather and unique roofing challenges. Our roofing systems are built with premium materials and expert craftsmanship to deliver long-term performance and peace of mind.",
  projects: [
    { neighborhood: "Twin Lakes", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Dash Point", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Lake Grove", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Federal Way Center", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve did an outstanding job on our roof. The crew was professional, on time, and the results look amazing!", name: "Jennifer L.", area: "Federal Way, WA", initials: "JL" },
    { quote: "Honest pricing, great communication, and top-quality materials. Highly recommend Skyve Roofing!", name: "Marco T.", area: "Federal Way, WA", initials: "MT" },
    { quote: "They handled everything from inspection to cleanup. Our new roof gives us total peace of mind.", name: "Melissa R.", area: "Federal Way, WA", initials: "MR" },
  ],
  neighborhoods: ["Twin Lakes", "Dash Point", "Lake Grove", "Lakeland North", "Mirrormont", "West Campus", "And More"],
};

export const BURIEN: CityData = {
  slug: "roofing-burien-wa",
  name: "Burien",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Burien Homes. Performance You Can Count On.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Burien community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Burien Based" },
  ],
  proudText:
    "From Tudor to modern builds, Burien homes deserve roofing systems that stand up to the elements. We use premium materials and expert craftsmanship to deliver long-term protection and value for your home.",
  projects: [
    { neighborhood: "Seahurst", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Gregory Heights", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Three Tree Point", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Boulevard Park", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof after a windstorm. The team was responsive, professional, and the results are excellent!", name: "Karen M.", area: "Burien, WA", initials: "KM" },
    { quote: "Honest pricing, quality materials, and the crew left our property spotless. Highly recommend Skyve Roofing!", name: "James R.", area: "Burien, WA", initials: "JR" },
    { quote: "They made the whole process easy from inspection to cleanup. Our new roof looks fantastic!", name: "Melissa T.", area: "Burien, WA", initials: "MT" },
  ],
  neighborhoods: ["Seahurst", "Gregory Heights", "Three Tree Point", "Boulevard Park", "Normandy Park", "And More"],
};

export const SEATAC: CityData = {
  slug: "roofing-seatac-wa",
  name: "SeaTac",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting SeaTac Homes. Quality That Soars.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the SeaTac community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "SeaTac Based" },
  ],
  proudText:
    "From Angle Lake to Des Moines Memorial Drive, SeaTac homes face unique weather challenges. Our roofing systems are built to perform in every season, delivering long-lasting protection and value for your home.",
  projects: [
    { neighborhood: "Angle Lake", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Des Moines Memorial", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "SeaTac Heights", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Bow Lake", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional from start to finish. They kept us informed and our new roof looks amazing. Highly recommend!", name: "Melissa R.", area: "SeaTac, WA", initials: "MR" },
    { quote: "Great pricing, excellent communication, and the crew was on time every day. We're very happy with our new roof!", name: "James T.", area: "SeaTac, WA", initials: "JT" },
    { quote: "They handled permits and cleanup perfectly. Our roof is beautiful and built to last.", name: "David K.", area: "SeaTac, WA", initials: "DK" },
  ],
  neighborhoods: ["Angle Lake", "Des Moines", "Normandy Park", "Tukwila", "Burien", "Kent", "And More"],
};

export const TUKWILA: CityData = {
  slug: "roofing-tukwila-wa",
  name: "Tukwila",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Tukwila Homes. Built to Last.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Tukwila community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Tukwila Based" },
  ],
  proudText:
    "From residential neighborhoods near Foster Golf Links to commercial buildings along the Seattle-Tacoma corridor, Tukwila properties trust Skyve for expert roofing systems that deliver long-term performance and peace of mind.",
  projects: [
    { neighborhood: "Foster Golf Links", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Riverton", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Tukwila Park", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Southcenter Area", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve repaired our roof after a big storm. The crew was on time, professional, and left everything spotless.", name: "Jessica M.", area: "Tukwila, WA", initials: "JM" },
    { quote: "From the first inspection to the final cleanup, the process was smooth and the quality is excellent.", name: "Robert T.", area: "Tukwila, WA", initials: "RT" },
    { quote: "Honest pricing, great communication and a roof that looks amazing. Highly recommend Skyve!", name: "Amanda L.", area: "Tukwila, WA", initials: "AL" },
  ],
  neighborhoods: ["Tukwila", "SeaTac", "Burien", "Renton", "Kent", "Des Moines", "And More"],
};

export const NEWCASTLE: CityData = {
  slug: "roofing-newcastle-wa",
  name: "Newcastle",
  state: "WA",
  nickname: "South King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Newcastle Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Newcastle community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Newcastle Based" },
  ],
  proudText:
    "Newcastle is known for its beautiful views and custom homes. We build roofing systems that stand strong against the elements while enhancing the beauty and value of your home. Premium materials, expert craftsmanship, and local care you can count on.",
  projects: [
    { neighborhood: "Newcastle Golf Club Area", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Lake Boren View", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Newcastle Highlands", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Coal Creek Parkway", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve did an amazing job on our roof. The team was professional, on time, and the new roof looks incredible.", name: "Lisa H.", area: "Newcastle, WA", initials: "LH" },
    { quote: "Great communication, fair pricing, and high-quality workmanship. Highly recommend Skyve Roofing!", name: "Mark T.", area: "Newcastle, WA", initials: "MT" },
    { quote: "They handled everything from start to finish with care. Our roof looks fantastic!", name: "Rachel P.", area: "Newcastle, WA", initials: "RP" },
  ],
  neighborhoods: ["Newcastle", "Bellevue", "Renton", "Issaquah", "Kent", "Tukwila", "SeaTac", "And More"],
};

export const WOODINVILLE: CityData = {
  slug: "roofing-woodinville-wa",
  name: "Woodinville",
  state: "WA",
  nickname: "Eastside",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Woodinville Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Woodinville community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Woodinville Based" },
  ],
  proudText:
    "From Hollywood Hill to Cottage Lake, Woodinville homes deserve roofing systems designed to withstand our Northwest weather. We use premium materials and expert craftsmanship to deliver long-term performance and peace of mind.",
  projects: [
    { neighborhood: "Hollywood Hill", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Cottage Lake", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Woodin Creek", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Leota", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional from start to finish. The crew was on time, worked hard, and our new roof looks amazing!", name: "Karen S.", area: "Woodinville, WA", initials: "KS" },
    { quote: "Excellent communication, fair pricing, and top-quality work. Highly recommend Skyve Roofing!", name: "Jason M.", area: "Woodinville, WA", initials: "JM" },
    { quote: "Our roof was replaced quickly and cleanly. The team respected our property and did a fantastic job.", name: "Michelle T.", area: "Woodinville, WA", initials: "MT" },
  ],
  neighborhoods: ["Woodinville", "Kirkland", "Redmond", "Bellevue", "Duvall", "Bothell", "Kenmore", "And More"],
};

export const SHORELINE: CityData = {
  slug: "roofing-shoreline-wa",
  name: "Shoreline",
  state: "WA",
  nickname: "North King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Shoreline Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Shoreline community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Shoreline Based" },
  ],
  proudText:
    "From Richmond Beach to Echo Lake, Shoreline homes face unique weather challenges. Our roofing systems are built to perform in every season, delivering long-lasting protection and value for your home.",
  projects: [
    { neighborhood: "Richmond Beach", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Echo Lake", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Hillwood", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Briarcrest", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve delivered excellent service from start to finish. Our new roof looks amazing and gives us peace of mind.", name: "Lisa M.", area: "Shoreline, WA", initials: "LM" },
    { quote: "Honest pricing, great communication, and top-quality workmanship. Highly recommend Skyve Roofing!", name: "David R.", area: "Shoreline, WA", initials: "DR" },
    { quote: "The crew was professional and efficient. They cleaned up perfectly. Our roof is beautiful and built to last.", name: "Michelle T.", area: "Shoreline, WA", initials: "MT" },
  ],
  neighborhoods: ["Shoreline", "Lake Forest Park", "Kenmore", "Bothell", "Mountlake Terrace", "Edmonds", "And More"],
};

export const EDMONDS: CityData = {
  slug: "roofing-edmonds-wa",
  name: "Edmonds",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Edmonds Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Edmonds community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Edmonds Based" },
  ],
  proudText:
    "From the waterfront to the hillside neighborhoods, Edmonds homes face unique weather challenges from salt air, rain, and seasonal storms. Skyve delivers roofing systems built to perform, with premium materials, expert workmanship, and local care you can trust.",
  projects: [
    { neighborhood: "Esperance", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Edmonds Bowl", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Firdale Village", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Westgate", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof after years of salt air damage. The team was on time, professional, and the quality is incredible.", name: "Lisa M.", area: "Edmonds, WA", initials: "LM" },
    { quote: "Honest pricing, great communication, and excellent workmanship. Highly recommend Skyve Roofing!", name: "Mark T.", area: "Edmonds, WA", initials: "MT" },
    { quote: "They cleaned up perfectly and treated our home like their own. Our roof looks amazing and we feel protected.", name: "Jennifer P.", area: "Edmonds, WA", initials: "JP" },
  ],
  neighborhoods: ["Edmonds", "Lynnwood", "Shoreline", "Mountlake Terrace", "Bothell", "Woodway", "Mukilteo", "And More"],
};

export const KENMORE: CityData = {
  slug: "roofing-kenmore-wa",
  name: "Kenmore",
  state: "WA",
  nickname: "North King County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Kenmore Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Kenmore community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Kenmore Based" },
  ],
  proudText:
    "From waterfront properties along the Sammamish River to quiet neighborhoods near Saint Edward State Park, Kenmore homes deserve roofing systems built to perform in every season. We deliver premium craftsmanship and local care you can count on.",
  projects: [
    { neighborhood: "Rhododendron Park", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Sammamish River", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Kenmore Highlands", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Moorlands", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof quickly and the quality is outstanding. The team was professional and left our property spotless.", name: "Amanda R.", area: "Kenmore, WA", initials: "AR" },
    { quote: "Honest pricing, great communication, and fantastic workmanship. Highly recommend Skyve Roofing!", name: "Brian T.", area: "Kenmore, WA", initials: "BT" },
    { quote: "They handled everything from start to finish. Our new roof looks amazing and we feel protected for years to come.", name: "Michelle L.", area: "Kenmore, WA", initials: "ML" },
  ],
  neighborhoods: ["Kenmore", "Bothell", "Woodinville", "Shoreline", "Lake Forest Park", "Kirkland", "And More"],
};

export const MUKILTEO: CityData = {
  slug: "roofing-mukilteo-wa",
  name: "Mukilteo",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Mukilteo Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Mukilteo community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Mukilteo Based" },
  ],
  proudText:
    "From waterfront properties to hillside neighborhoods, Mukilteo homes face unique weather conditions from salt air, rain, and seasonal storms. We use premium materials and expert craftsmanship to deliver long-lasting protection and value for your home.",
  projects: [
    { neighborhood: "Mukilteo Lighthouse View", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Harbour Pointe", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Mukilteo Waterfront", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Fairway View", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve did an amazing job on our roof! They were professional, on time, and the quality is outstanding.", name: "Sarah M.", area: "Mukilteo, WA", initials: "SM" },
    { quote: "Honest pricing, great communication, and top-quality workmanship. Highly recommend Skyve Roofing!", name: "James T.", area: "Mukilteo, WA", initials: "JT" },
    { quote: "Our new roof looks incredible and the crew was respectful and efficient. Couldn't be happier!", name: "Lisa R.", area: "Mukilteo, WA", initials: "LR" },
  ],
  neighborhoods: ["Mukilteo", "Everett", "Lynnwood", "Mill Creek", "Edmonds", "Bothell", "Snohomish", "And More"],
};

export const MILL_CREEK: CityData = {
  slug: "roofing-mill-creek-wa",
  name: "Mill Creek",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Mill Creek Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Mill Creek community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Mill Creek Based" },
  ],
  proudText:
    "From Mill Creek Town Center to The Highlands, our team understands the unique needs of local homes. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "The Highlands", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Mill Creek Country Club", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Silver Lake", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Alderwood Manor", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional from start to finish. They kept us informed and our new roof looks amazing!", name: "Jason K.", area: "Mill Creek, WA", initials: "JK" },
    { quote: "Great communication, fair pricing, and high-quality workmanship. Highly recommend Skyve Roofing!", name: "Melissa T.", area: "Mill Creek, WA", initials: "MT" },
    { quote: "The crew was on time, respectful, and cleaned up perfectly. Our roof is beautiful and built to last.", name: "Brian W.", area: "Mill Creek, WA", initials: "BW" },
  ],
  neighborhoods: ["Mill Creek", "Bothell", "Lynnwood", "Everett", "Mukilteo", "Edmonds", "Snohomish", "And More"],
};

export const SNOHOMISH: CityData = {
  slug: "roofing-snohomish-wa",
  name: "Snohomish",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South King County.",
  bannerHeadline: "Protecting Snohomish Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Snohomish community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Snohomish Based" },
  ],
  proudText:
    "From historic downtown Snohomish to the rolling farmlands and riverside neighborhoods, Snohomish homes face unique weather challenges. Our roofing systems are built to perform in every season, using premium materials and expert craftsmanship you can count on.",
  projects: [
    { neighborhood: "Downtown Snohomish", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Riverside", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Frying Pan Farm", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Pioneer Trail", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and the quality of work exceeded our expectations. Our new roof looks amazing!", name: "Jessica M.", area: "Snohomish, WA", initials: "JM" },
    { quote: "Honest pricing, great communication, and a smooth process from start to finish. Highly recommend Skyve Roofing!", name: "David R.", area: "Snohomish, WA", initials: "DR" },
    { quote: "They worked with care and kept our property clean every day. We feel confident our home is protected.", name: "Michelle T.", area: "Snohomish, WA", initials: "MT" },
  ],
  neighborhoods: ["Snohomish", "Lake Stevens", "Monroe", "Maltby", "Cathcart", "Duvall", "Sultan", "And More"],
};

export const LAKE_STEVENS: CityData = {
  slug: "roofing-lake-stevens-wa",
  name: "Lake Stevens",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Lake Stevens Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Lake Stevens community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Lake Stevens Based" },
  ],
  proudText:
    "From lakeside properties to growing neighborhoods, Lake Stevens homes face unique weather challenges year-round. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "North Cove", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Cavalero Hills", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Lake Stevens Heights", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Machias Ridge", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve did an outstanding job on our roof. Professional, clean, and finished on time. Highly recommend their team!", name: "Sarah B.", area: "Lake Stevens, WA", initials: "SB" },
    { quote: "Great communication, fair pricing, and amazing results. Our new roof looks fantastic!", name: "Michael R.", area: "Lake Stevens, WA", initials: "MR" },
    { quote: "They treated our home like their own and made the whole process easy from start to finish.", name: "Amanda T.", area: "Lake Stevens, WA", initials: "AT" },
  ],
  neighborhoods: ["Lake Stevens", "Everett", "Snohomish", "Marysville", "Granite Falls", "Arlington", "And More"],
};

export const MARYSVILLE: CityData = {
  slug: "roofing-marysville-wa",
  name: "Marysville",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Marysville Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Marysville community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Marysville Based" },
  ],
  proudText:
    "From established neighborhoods to new developments, Marysville homes face unique weather challenges. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind—season after season.",
  projects: [
    { neighborhood: "Getchell", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Paine Field", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "North Marysville", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Quil Ceda Village", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and kept us informed every step of the way. Our roof looks amazing!", name: "Kevin W.", area: "Marysville, WA", initials: "KW" },
    { quote: "Honest pricing, excellent communication, and top-notch workmanship. Highly recommend Skyve Roofing!", name: "Jessica L.", area: "Marysville, WA", initials: "JL" },
    { quote: "They handled everything from start to finish. Clean job site and a beautiful new roof!", name: "Mark D.", area: "Marysville, WA", initials: "MD" },
  ],
  neighborhoods: ["Marysville", "Everett", "Lake Stevens", "Arlington", "Smokey Point", "Tulalip", "And More"],
};

export const STANWOOD: CityData = {
  slug: "roofing-stanwood-wa",
  name: "Stanwood",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Stanwood Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Stanwood community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Stanwood Based" },
  ],
  proudText:
    "From rural properties to growing neighborhoods, Stanwood homes face unique Pacific Northwest challenges. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "Rural Stanwood", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Warm Beach", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Twin Creeks", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Kayak Point", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and the quality of work exceeded our expectations. Our roof looks amazing!", name: "Teresa M.", area: "Stanwood, WA", initials: "TM" },
    { quote: "Honest pricing, great communication, and excellent craftsmanship. Highly recommend Skyve Roofing!", name: "John D.", area: "Stanwood, WA", initials: "JD" },
    { quote: "They treated our home like their own and made the whole process easy from start to finish.", name: "Amanda K.", area: "Stanwood, WA", initials: "AK" },
  ],
  neighborhoods: ["Stanwood", "Camano Island", "Warm Beach", "Kayak Point", "Twin Creeks", "And More"],
};

export const ARLINGTON: CityData = {
  slug: "roofing-arlington-wa",
  name: "Arlington",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Arlington Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Arlington community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Arlington Based" },
  ],
  proudText:
    "From the scenic Stillaguamish River to the growing neighborhoods across Arlington, WA, we understand the unique roofing challenges of our area. We use premium materials and proven systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "Gleneagle", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Arlington Heights", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "North Lakewood", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Lake Goodwin", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve provided excellent service from start to finish. Our new roof looks amazing and the crew was fantastic!", name: "Jennifer L.", area: "Arlington, WA", initials: "JL" },
    { quote: "Honest pricing, great communication, and high-quality workmanship. Highly recommend Skyve Roofing!", name: "Michael T.", area: "Arlington, WA", initials: "MT" },
    { quote: "They were on time, respectful, and cleaned up every day. Our roof is beautiful and built to last.", name: "Sarah K.", area: "Arlington, WA", initials: "SK" },
  ],
  neighborhoods: ["Arlington", "Smokey Point", "North Marysville", "Lakewood", "Bryant", "Silvana", "And More"],
};

export const MONROE: CityData = {
  slug: "roofing-monroe-wa",
  name: "Monroe",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Monroe Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Monroe community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Monroe Based" },
  ],
  proudText:
    "From historic downtown to new neighborhoods and rural properties, Monroe homes face unique weather challenges. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "Downtown Monroe", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Fryelands", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Monroe Country Estate", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Woods Creek", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof quickly and professionally. The team was respectful, clean, and the results are beautiful!", name: "Lisa M.", area: "Monroe, WA", initials: "LM" },
    { quote: "Honest pricing, great communication, and excellent craftsmanship. Highly recommend Skyve Roofing!", name: "Jason T.", area: "Monroe, WA", initials: "JT" },
    { quote: "From the first call to final cleanup, they exceeded our expectations. Our new roof looks amazing!", name: "Brian K.", area: "Monroe, WA", initials: "BK" },
  ],
  neighborhoods: ["Monroe", "Sultan", "Gold Bar", "Woods Creek", "Startup", "And More"],
};

export const BRIER: CityData = {
  slug: "roofing-brier-wa",
  name: "Brier",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Brier Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Brier community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Brier Based" },
  ],
  proudText:
    "From quiet neighborhoods to family homes, Brier, WA faces Pacific Northwest weather year-round. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "Brierwood Farms", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Morningview", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Brier Creek", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Madrona Park", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve replaced our roof and the experience was excellent from start to finish. The crew was professional and respectful.", name: "Jennifer K.", area: "Brier, WA", initials: "JK" },
    { quote: "Honest pricing, great communication, and top-notch craftsmanship. Highly recommend Skyve Roofing!", name: "David R.", area: "Brier, WA", initials: "DR" },
    { quote: "They were on time, cleaned up every day, and our new roof looks incredible. Thank you!", name: "Melissa T.", area: "Brier, WA", initials: "MT" },
  ],
  neighborhoods: ["Brier", "Lynnwood", "Mountlake Terrace", "Shoreline", "Edmonds", "Bothell", "And More"],
};

export const MOUNTLAKE_TERRACE: CityData = {
  slug: "roofing-mountlake-terrace-wa",
  name: "Mountlake Terrace",
  state: "WA",
  nickname: "Snohomish County",
  tagline: "Reliable Roofing. Local Experts. Built for the South Snohomish County.",
  bannerHeadline: "Protecting Mountlake Terrace Homes. Quality That Lasts.",
  servicesLabel: "Roofing & Exterior Services",
  heroDesc:
    "Skyve Roofing & Exteriors is proud to serve the Mountlake Terrace community with professional roofing and exterior services delivering unmatched quality and care.",
  heroImage: img("1600596542815-ffad4c1539a9"),
  bannerImage: img("1600596542815-ffad4c1539a9"),
  rating: { score: "5.0", count: "210+ Reviews" },
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "home", value: "2,000+", label: "Roofs Installed" },
    { icon: "star", value: "5-Star", label: "Rated Company" },
    { icon: "badge", value: "Licensed, Bonded", label: "& Insured" },
    { icon: "users", value: "Local Team", label: "Mountlake Terrace Based" },
  ],
  proudText:
    "From convenient city living to quiet neighborhoods, Mountlake Terrace homes face unique weather and maintenance challenges. We use premium materials and proven roofing systems to deliver long-lasting protection, expert craftsmanship, and peace of mind.",
  projects: [
    { neighborhood: "Brierwood", type: "Roof Replacement", rating: "5.0", image: img("1570129477492-45c003edd2be") },
    { neighborhood: "Terrace View", type: "Roof Repair", rating: "5.0", image: img("1632759145351-1d592919f522") },
    { neighborhood: "Forest Crest", type: "Metal Roofing", rating: "5.0", image: img("1576941089067-2de3c901e126") },
    { neighborhood: "Lake Ballinger", type: "Roof & Gutter System", rating: "5.0", image: img("1605276374104-dee2a0ed3cd6") },
  ],
  testimonials: [
    { quote: "Skyve was professional, on time, and extremely clean. Our new roof looks amazing!", name: "Rachel T.", area: "Mountlake Terrace, WA", initials: "RT" },
    { quote: "Honest pricing, great communication, and high-quality workmanship. Highly recommend Skyve Roofing!", name: "Mark D.", area: "Mountlake Terrace, WA", initials: "MD" },
    { quote: "They handled everything from start to finish. The crew was respectful and the results are fantastic.", name: "Lisa P.", area: "Mountlake Terrace, WA", initials: "LP" },
  ],
  neighborhoods: ["Shoreline", "Edmonds", "Bothell", "Lynnwood", "Brier", "Lake Forest Park", "And More"],
};

/* Registry of all built city pages — drives /service-area and menus. */
export const CITIES: CityData[] = [
  SEATTLE, BELLEVUE, KIRKLAND, REDMOND, SAMMAMISH, MERCER_ISLAND, ISSAQUAH,
  BOTHELL, LYNNWOOD, EVERETT, RENTON, AUBURN, KENT, FEDERAL_WAY, BURIEN,
  SEATAC, TUKWILA, NEWCASTLE, WOODINVILLE, SHORELINE, EDMONDS, KENMORE, MUKILTEO,
  MILL_CREEK, SNOHOMISH, LAKE_STEVENS, MARYSVILLE, STANWOOD, ARLINGTON, MONROE,
  BRIER, MOUNTLAKE_TERRACE,
];
