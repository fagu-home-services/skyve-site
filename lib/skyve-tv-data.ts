/* Skyve TV page (/skyve-tv) — mock content.
   YouTube shown as a neutral red play button (no official logo art). */

const img = (id: string) => `/images/${id}.jpg`;

export const catSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const TV_HERO = {
  title: "Skyve TV",
  tagline: "Knowledge. Inspiration. Roofing Excellence.",
  desc: "Skyve TV is your source for expert tips, project showcases, how-to guides, and behind-the-scenes insights from the roofing professionals you can trust.",
  image: img("1600596542815-ffad4c1539a9"),
};

export const TV_STATS = [
  { icon: "film", value: "150+", label: "Videos" },
  { icon: "eye", value: "1.2M+", label: "Views" },
  { icon: "users", value: "12K+", label: "Subscribers" },
  { icon: "list", value: "5", label: "Playlists" },
  { icon: "calendar", value: "Weekly", label: "New Content" },
];

export type Video = {
  title: string;
  desc: string;
  duration: string;
  views: string;
  when: string;
  image: string;
};

export const TV_FEATURED: Video[] = [
  { title: "Complete Roof Replacement Timelapse", desc: "Watch this beautiful transformation from start to finish in just 3 minutes.", duration: "8:45", views: "2.4K views", when: "3 days ago", image: img("1570129477492-45c003edd2be") },
  { title: "Signs You Need a New Roof", desc: "Top 7 warning signs that indicate it's time for a roof replacement.", duration: "6:12", views: "5.1K views", when: "1 week ago", image: img("1632759145351-1d592919f522") },
  { title: "Skylight Installation Process", desc: "Step-by-step look at how we install skylights the right way.", duration: "5:33", views: "1.7K views", when: "2 weeks ago", image: img("1600585154340-be6161a56a0c") },
  { title: "Gutter Guards: Are They Worth It?", desc: "Everything you need to know about gutter guards and how they protect your home.", duration: "4:28", views: "3.2K views", when: "3 weeks ago", image: img("1605276374104-dee2a0ed3cd6") },
];

export const TV_CATEGORIES = [
  { icon: "home", label: "Roof Replacement", count: "32 videos" },
  { icon: "wrench", label: "Roof Repair", count: "18 videos" },
  { icon: "sun", label: "Skylights", count: "12 videos" },
  { icon: "droplet", label: "Gutters", count: "16 videos" },
  { icon: "brush", label: "Exterior", count: "14 videos" },
  { icon: "graduation", label: "Tips & Education", count: "28 videos" },
  { icon: "camera", label: "Behind the Scenes", count: "10 videos" },
];

export const TV_PLAYLISTS = [
  { title: "Project Transformations", count: 24, desc: "Amazing before & after projects from across Washington.", image: img("1564013799919-ab600027ffc6") },
  { title: "How-To & Tips", count: 19, desc: "Expert tips and tutorials to help you protect your home.", image: img("1531971589569-0d9370cbe1e5") },
  { title: "Roofing Materials", count: 15, desc: "Learn about the best materials for your roofing system.", image: img("1576941089067-2de3c901e126") },
  { title: "Customer Stories", count: 11, desc: "Hear from homeowners who trusted Skyve with their homes.", image: img("1558036117-15d82a90b9b1") },
  { title: "Behind the Scenes", count: 9, desc: "See what goes on behind the scenes at Skyve Roofing.", image: img("1580587771525-78b9dba3b914") },
];

export const TV_LATEST: Video[] = [
  { title: "Cedar Shake Roof Replacement", desc: "Full cedar shake removal and new roof installation.", duration: "7:02", views: "892 views", when: "2 days ago", image: img("1572120360610-d971b9d7767c") },
  { title: "TPO Roofing System Installation", desc: "How we install TPO on a flat commercial roof.", duration: "6:45", views: "1.1K views", when: "5 days ago", image: img("1580587771525-78b9dba3b914") },
  { title: "Exterior Painting Transformation", desc: "From faded to flawless. Complete exterior repaint.", duration: "5:18", views: "1.6K views", when: "1 week ago", image: img("1564013799919-ab600027ffc6") },
  { title: "Drone Roof Inspection Explained", desc: "See how we inspect roofs with drone technology.", duration: "3:51", views: "1.3K views", when: "1 week ago", image: img("1632759145351-1d592919f522") },
];
