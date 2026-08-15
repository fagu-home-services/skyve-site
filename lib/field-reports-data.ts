/* Field Reports Feed page (/field-reports) — mock content.
   Brand/manufacturer names shown as plain text (no logo art). */

const img = (id: string) => `/images/${id}.jpg`;

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const FIELD_REPORTS_HERO = {
  eyebrow: "Skyve Stories Ecosystem",
  title: "Field Reports Feed",
  subtitle: "A live list of every project.",
  desc: "Follow every project completed by Skyve Roofing & Exteriors in real time. See how we turn every detail into quality, safety, and satisfaction for our customers.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: [
    { value: "1,258", label: "Projects Completed" },
    { value: "15+", label: "Cities Served" },
    { value: "98%", label: "Customer Rating" },
    { value: "15+", label: "Years Experience" },
  ],
  card: {
    title: "Real Projects. Real Results. Total Transparency.",
    items: [
      "Real field photos",
      "Detailed reports",
      "Materials used",
      "Project location",
      "Customer rating",
    ],
  },
};

export type FieldReport = {
  city: string;
  address: string;
  propertyType: string;
  size: string;
  service: string;
  status: string;
  rating: string;
  client: string;
  date: string;
  crew: string;
  materials: string;
  photos: number;
  reports: number;
  likes: number;
  image: string;
};

export const FIELD_REPORTS: FieldReport[] = [
  {
    city: "Kirkland, WA", address: "1234 Evergreen Lane", propertyType: "Residential", size: "5,200 ft",
    service: "Roof Replacement", status: "Completed", rating: "5.0", client: "Sarah M.",
    date: "May 20, 2024", crew: "Crew Alpha", materials: "CertainTeed Landmark PRO",
    photos: 32, reports: 1, likes: 12, image: img("1570129477492-45c003edd2be"),
  },
  {
    city: "Bellevue, WA", address: "5678 Lakeview Dr", propertyType: "Residential", size: "3,800 ft",
    service: "Metal Roofing", status: "Completed", rating: "4.9", client: "James T.",
    date: "May 18, 2024", crew: "Crew Bravo", materials: "Standing Seam Metal",
    photos: 28, reports: 1, likes: 9, image: img("1576941089067-2de3c901e126"),
  },
  {
    city: "Sammamish, WA", address: "8910 228th Ave SE", propertyType: "Residential", size: "4,600 ft",
    service: "Roof Replacement", status: "Completed", rating: "5.0", client: "Michael R.",
    date: "May 15, 2024", crew: "Crew Alpha", materials: "Cedar Shake",
    photos: 41, reports: 1, likes: 15, image: img("1572120360610-d971b9d7767c"),
  },
  {
    city: "Redmond, WA", address: "1350 Education Hill Rd", propertyType: "Commercial", size: "12,000 ft",
    service: "TPO Roofing", status: "Completed", rating: "4.8", client: "Redmond Office Park",
    date: "May 12, 2024", crew: "Crew Charlie", materials: "TPO 60mil",
    photos: 36, reports: 2, likes: 7, image: img("1632759145351-1d592919f522"),
  },
  {
    city: "Bothell, WA", address: "20415 98th Ave NE", propertyType: "Residential", size: "2,900 ft",
    service: "Exterior Siding", status: "Completed", rating: "5.0", client: "Lisa K.",
    date: "May 10, 2024", crew: "Crew Delta", materials: "James Hardie Fiber Cement",
    photos: 22, reports: 1, likes: 6, image: img("1605146769289-440113cc3d00"),
  },
  {
    city: "Mercer Island, WA", address: "3001 78th Ave SE", propertyType: "Residential", size: "3,600 ft",
    service: "Skylight Replacement", status: "Completed", rating: "4.9", client: "David L.",
    date: "May 8, 2024", crew: "Crew Bravo", materials: "Velux Skylight",
    photos: 18, reports: 1, likes: 5, image: img("1600585154340-be6161a56a0c"),
  },
];

export const FR_FILTERS = [
  {
    heading: "Service Type",
    options: [
      "All Services", "Roof Replacement", "Roof Repair", "Metal Roofing",
      "TPO / Flat Roofing", "Gutter Installation", "Gutter Guards", "Siding",
      "Deck Construction", "Skylight Installation", "Other",
    ],
    checked: ["All Services"],
  },
  {
    heading: "Status",
    options: ["All", "Completed", "In Progress", "In Inspection", "Scheduled"],
    checked: ["All"],
  },
  {
    heading: "City",
    options: [
      "All Cities", "Kirkland", "Bellevue", "Redmond", "Sammamish",
      "Bothell", "Mercer Island", "Lynnwood", "Other Cities",
    ],
    checked: ["All Cities"],
  },
  {
    heading: "Period",
    options: ["All Periods", "Last 7 days", "Last 30 days", "Last 3 months", "Last 12 months"],
    checked: ["All Periods"],
  },
];

export const FR_RATING_FILTER = {
  heading: "Rating",
  options: [
    { label: "All Ratings", stars: 0 },
    { label: "5 Stars", stars: 5 },
    { label: "4+ Stars", stars: 4 },
    { label: "3+ Stars", stars: 3 },
    { label: "2+ Stars", stars: 2 },
    { label: "1+ Stars", stars: 1 },
  ],
  checked: ["All Ratings"],
};

export const FR_CTA = {
  title: "Want to see your project here?",
  desc: "Become a Skyve customer and have your project documented with professional reports and high-quality photos.",
  features: [
    { icon: "document", title: "Detailed Reports", desc: "Every project documented with precision." },
    { icon: "camera", title: "Real Photos", desc: "Real before, during, and after images." },
    { icon: "users", title: "Total Transparency", desc: "Full tracking of every stage." },
    { icon: "badge", title: "Guaranteed Quality", desc: "Premium materials and expert workmanship." },
  ],
};
