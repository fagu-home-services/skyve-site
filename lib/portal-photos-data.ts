/* Future Homeowner Portal — Photos (/portal/photos). Phase 2. */

export const PP_TABS = ["All Photos", "By Stage", "By Date", "360° Drone", "Before & After"];

export const PP_TOTAL = 356;

export type PhotoCard = { label: string; count: number };
export type PhotoGroup = { date: string; total: number; cards: PhotoCard[] };

export const PP_GROUPS: PhotoGroup[] = [
  {
    date: "Today - May 15, 2025",
    total: 12,
    cards: [
      { label: "Roof Installation Progress", count: 12 },
      { label: "Exterior Siding", count: 8 },
      { label: "Window Installation", count: 10 },
      { label: "Interior Framing", count: 15 },
    ],
  },
  {
    date: "May 10, 2025",
    total: 18,
    cards: [
      { label: "Roof Underlayment", count: 10 },
      { label: "Deck Framing", count: 8 },
      { label: "Plumbing Rough-In", count: 12 },
      { label: "Electrical Rough-In", count: 14 },
    ],
  },
  {
    date: "May 9, 2025",
    total: 16,
    cards: [
      { label: "Permit Posted", count: 2 },
      { label: "Site Preparation", count: 8 },
      { label: "Foundation", count: 12 },
      { label: "Material Delivery", count: 6 },
    ],
  },
  {
    date: "April 28, 2025",
    total: 22,
    cards: [
      { label: "Demolition", count: 10 },
      { label: "Before Photos", count: 6 },
      { label: "Site Survey", count: 4 },
      { label: "Aerial View", count: 2 },
    ],
  },
];

export const PP_STORAGE = {
  title: "Photo Storage",
  usedPct: 24,
  used: "2.4 GB",
  of: "of 10 GB used",
};

export const PP_ALBUMS = {
  title: "Photo Albums",
  items: [
    { icon: "home", label: "Roof Installation", count: 56, tone: "text-ridge" },
    { icon: "layers", label: "Siding & Exterior", count: 48, tone: "text-[#7c3aed]" },
    { icon: "grid", label: "Windows & Doors", count: 32, tone: "text-success" },
    { icon: "hammer", label: "Framing", count: 72, tone: "text-warning" },
    { icon: "droplet", label: "Plumbing", count: 28, tone: "text-ridge" },
    { icon: "zap", label: "Electrical", count: 34, tone: "text-accent" },
    { icon: "home", label: "Interior", count: 52, tone: "text-[#7c3aed]" },
    { icon: "chart", label: "Site & Progress", count: 34, tone: "text-success" },
  ],
};

export const PP_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "upload", label: "Upload Photos" },
    { icon: "folder", label: "Create Album" },
    { icon: "camera", label: "Request Photos" },
    { icon: "download", label: "Download Selected" },
    { icon: "share", label: "Share Album" },
    { icon: "eye", label: "360° Viewer" },
  ],
};

export const PP_TIPS = {
  title: "Photo Tips",
  intro: "Good photos help keep your project on track.",
  points: [
    "Take photos in good lighting",
    "Capture wide & close-up shots",
    "Include details and context",
    "Upload regularly",
  ],
  link: { label: "Learn More", href: "#" },
};

export const PP_HELP = {
  title: "Need Help?",
  desc: "Can't find your photos? Our team is here to help.",
  button: { label: "Contact Us", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};

export const PP_BOTTOM = {
  title: "Every Photo. Every Detail. Your Peace of Mind.",
  desc: "We document every step of your project so you can see the progress and know your home is in good hands.",
  button: { label: "Request Photos", href: "/contact" },
};
