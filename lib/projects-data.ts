/* Marketing — Projects / Our Work (/projects) */

export const PRJ_HERO = {
  title: "Projects",
  desc: "Explore our recent roofing and exterior projects across Washington State.",
  image: "",
  stats: [
    { icon: "badge", value: "450+", label: "Projects Completed" },
    { icon: "clock", value: "15+", label: "Years Experience" },
    { icon: "star", value: "4.9", label: "Client Rating", star: true },
    { icon: "shield", value: "2", label: "Year Workmanship Warranty" },
  ],
};

export const PRJ_TABS = ["All Projects", "Roof Replacement", "Roof Repair", "Metal Roofing", "Gutters", "Siding", "Skylights", "Decks"];

export const PRJ_FILTERS = {
  services: ["All Services", "Roofing", "Gutters", "Siding", "Skylights", "Decks", "Exterior Painting"],
  locations: ["All Locations", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Sammamish, WA", "Mercer Island, WA", "Issaquah, WA"],
  materials: ["All Materials", "Asphalt Shingles", "Metal", "Hardie Board", "Velux Skylights", "Composite"],
};

export type Project = {
  category: string;
  tab: string;
  tone: string;
  title: string;
  location: string;
  desc: string;
  material: string;
  size?: string;
  completed: string;
};

export const PRJ_PROJECTS: Project[] = [
  { category: "Roof Replacement", tab: "Roof Replacement", tone: "bg-ridge/12 text-ridge", title: "Cedar Shake Replacement", location: "Kirkland, WA", desc: "Full roof replacement with premium CertainTeed Landmark shingles in Weathered Wood.", material: "Asphalt Shingles", size: "3,200 sq ft", completed: "May 2024" },
  { category: "Metal Roofing", tab: "Metal Roofing", tone: "bg-accent/15 text-accent", title: "Standing Seam Metal Roof", location: "Bellevue, WA", desc: "Premium standing seam metal roof installation in charcoal gray.", material: "Metal", size: "2,800 sq ft", completed: "Apr 2024" },
  { category: "Roof & Gutters", tab: "Gutters", tone: "bg-ridge/12 text-ridge", title: "Roof & Gutter System", location: "Redmond, WA", desc: "Complete roof replacement and seamless gutter system installation.", material: "Asphalt Shingles", size: "2,100 sq ft", completed: "Mar 2024" },
  { category: "Siding Installation", tab: "Siding", tone: "bg-accent/15 text-accent", title: "James Hardie Siding", location: "Sammamish, WA", desc: "James Hardie fiber cement siding installation with trim and fascia.", material: "Hardie Board", size: "2,600 sq ft", completed: "Feb 2024" },
  { category: "Skylight Installation", tab: "Skylights", tone: "bg-ridge/12 text-ridge", title: "Skylight Installation", location: "Mercer Island, WA", desc: "Three Velux skylights installed for natural light and ventilation.", material: "Velux Skylights", completed: "Jan 2024" },
  { category: "Gutter Installation", tab: "Gutters", tone: "bg-success/12 text-success", title: "Seamless Gutter System", location: "Redmond, WA", desc: "Custom seamless aluminum gutters with leaf guard protection.", material: "Aluminum", completed: "Dec 2023" },
  { category: "Deck Installation", tab: "Decks", tone: "bg-accent/15 text-accent", title: "Composite Deck Build", location: "Issaquah, WA", desc: "New composite deck build with railing and integrated lighting.", material: "Composite", size: "480 sq ft", completed: "Nov 2023" },
  { category: "Roof Replacement", tab: "Roof Replacement", tone: "bg-ridge/12 text-ridge", title: "Asphalt Shingle Replacement", location: "Kirkland, WA", desc: "Architectural asphalt shingle replacement with upgraded ventilation.", material: "Asphalt Shingles", size: "2,400 sq ft", completed: "Oct 2023" },
];
