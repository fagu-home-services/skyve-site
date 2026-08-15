/* Customer Stories Feed page (/reviews) — mock content.
   Reviewer avatars use initials placeholders (swap for real photos with consent). */

const img = (id: string) => `/images/${id}.jpg`;

export const storySlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const STORIES_HERO = {
  eyebrow: "Customer Stories",
  titleLines: ["Real Stories.", "Real Results."],
  desc: "See how homeowners across Washington trust Skyve Roofing & Exteriors to protect what matters most.",
  image: img("1600596542815-ffad4c1539a9"),
  stats: [
    { icon: "star", value: "4.9", label: "Average Rating" },
    { icon: "message", value: "700+", label: "Reviews" },
    { icon: "home", value: "1,200+", label: "Happy Customers" },
    { icon: "shield", value: "15+", label: "Years of Trust" },
  ],
  card: {
    title: "Why Customers Choose Skyve",
    items: [
      "Top-quality workmanship",
      "Honest communication",
      "Premium materials",
      "Clean & respectful crews",
      "On-time, on-budget",
      "Backed by strong warranties",
    ],
  },
};

export const STORY_CATEGORIES = [
  "All Stories", "Roof Replacement", "Roof Repair", "Metal Roofing",
  "Gutter Installation", "Exterior Painting", "Siding", "Skylights",
  "Decks", "Commercial",
];

export const STORY_YEARS = ["All Years", "2024", "2023", "2022", "2021"];
export const STORY_CITIES = [
  "All Cities", "Kirkland", "Bellevue", "Redmond", "Sammamish",
  "Bothell", "Issaquah", "Renton", "Mercer Island", "Lynnwood",
];

export type Story = {
  title: string;
  city: string;
  quote: string;
  name: string;
  initials: string;
  date: string;
  tag: string;
  rating: string;
  image: string;
};

export const STORIES: Story[] = [
  {
    title: "Complete Roof Replacement", city: "Kirkland, WA",
    quote: "From the first inspection to the final cleanup, Skyve exceeded our expectations. The team was professional, on time, and the quality is outstanding.",
    name: "Sarah M.", initials: "SM", date: "May 20, 2024", tag: "Roof Replacement", rating: "5.0",
    image: img("1570129477492-45c003edd2be"),
  },
  {
    title: "Metal Roof Upgrade", city: "Bellevue, WA",
    quote: "We love our new metal roof! It looks incredible and we know it will last for decades. The crew was amazing—highly recommend Skyve.",
    name: "Michael R.", initials: "MR", date: "May 18, 2024", tag: "Metal Roofing", rating: "5.0",
    image: img("1576941089067-2de3c901e126"),
  },
  {
    title: "Gutter Installation", city: "Redmond, WA",
    quote: "The new gutters work perfectly and the installation was fast and clean. Great communication throughout the entire process.",
    name: "Jennifer L.", initials: "JL", date: "May 15, 2024", tag: "Gutter Installation", rating: "5.0",
    image: img("1605276374104-dee2a0ed3cd6"),
  },
  {
    title: "Roof Repair After Storm", city: "Sammamish, WA",
    quote: "Skyve responded quickly after the storm and fixed the damage the same week. Honest, fair price, and excellent workmanship.",
    name: "David K.", initials: "DK", date: "May 12, 2024", tag: "Roof Repair", rating: "5.0",
    image: img("1632759145351-1d592919f522"),
  },
  {
    title: "Exterior Painting", city: "Bothell, WA",
    quote: "Our home looks brand new! The painting team paid attention to every detail and were so respectful of our property.",
    name: "Emily T.", initials: "ET", date: "May 10, 2024", tag: "Exterior Painting", rating: "5.0",
    image: img("1564013799919-ab600027ffc6"),
  },
  {
    title: "New Composite Deck", city: "Issaquah, WA",
    quote: "We spend so much time on our new deck—it's beautiful and built with great quality. Skyve made the whole process easy.",
    name: "Jason P.", initials: "JP", date: "May 8, 2024", tag: "Deck Construction", rating: "5.0",
    image: img("1558036117-15d82a90b9b1"),
  },
  {
    title: "TPO Roofing System", city: "Renton, WA",
    quote: "Skyve installed our TPO roof on schedule and on budget. Very professional team and the quality is top-notch.",
    name: "Mark D.", initials: "MD", date: "May 5, 2024", tag: "TPO Roofing", rating: "5.0",
    image: img("1580587771525-78b9dba3b914"),
  },
  {
    title: "Skylight Replacement", city: "Mercer Island, WA",
    quote: "The new skylights brought so much natural light into our home. Installation was perfect with zero leaks. Highly recommend!",
    name: "Lisa H.", initials: "LH", date: "May 3, 2024", tag: "Skylight Replacement", rating: "5.0",
    image: img("1600585154340-be6161a56a0c"),
  },
  {
    title: "Siding Replacement", city: "Lynnwood, WA",
    quote: "Our old siding was falling apart. Skyve helped us choose the best option and the results are stunning.",
    name: "Brian W.", initials: "BW", date: "April 30, 2024", tag: "Siding", rating: "5.0",
    image: img("1605146769289-440113cc3d00"),
  },
];

export const STORIES_TRUST = [
  { icon: "shield", title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your peace of mind." },
  { icon: "badge", title: "Top-Rated Service", desc: "Hundreds of 5-star reviews from satisfied homeowners across Washington." },
  { icon: "star", title: "Quality Materials", desc: "We use only premium materials from trusted brands." },
  { icon: "users", title: "Experienced Team", desc: "15+ years of experience delivering exceptional results." },
  { icon: "shield", title: "Strong Warranties", desc: "Industry-leading warranties backed by our commitment to quality." },
];
