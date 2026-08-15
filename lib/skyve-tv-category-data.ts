/* Skyve TV Category page (/skyve-tv/[category]) — mock content. */

const img = (id: string) => `/images/${id}.jpg`;

/* Per-category hero blurb; falls back to a generic line. */
export const TV_CAT_BLURBS: Record<string, string> = {
  "roof-replacement":
    "Watch real roof replacement projects from start to finish. See how our team delivers quality, safety, and lasting protection for every home.",
};

export const TV_CAT_HERO_IMAGE = "/images/roof-replacement-3.webp";

export type CatVideo = {
  title: string;
  city: string;
  type: string;
  desc: string;
  rating: string;
  views: string;
  when: string;
  duration: string;
  image: string;
};

export const TV_CATEGORY_VIDEOS: CatVideo[] = [
  { title: "Complete Roof Replacement Timelapse", city: "Kirkland, WA", type: "Full Project", desc: "Watch this beautiful transformation from start to finish in just 3 minutes.", rating: "5.0", views: "24K views", when: "3 days ago", duration: "8:45", image: img("1570129477492-45c003edd2be") },
  { title: "Tear-Off Process Explained", city: "Bellevue, WA", type: "Step-by-Step", desc: "See how we safely remove old shingles and prepare the roof for a perfect installation.", rating: "4.9", views: "18K views", when: "1 week ago", duration: "6:12", image: img("1632759145351-1d592919f522") },
  { title: "Underlayment & Ice Shield Installation", city: "Sammamish, WA", type: "Step-by-Step", desc: "The hidden protection that keeps your home safe from leaks and water damage.", rating: "5.0", views: "12K views", when: "2 weeks ago", duration: "5:33", image: img("1558036117-15d82a90b9b1") },
  { title: "Shingle Installation Process", city: "Redmond, WA", type: "Step-by-Step", desc: "Follow along as our crew installs premium shingles with precision and care.", rating: "4.9", views: "16K views", when: "3 weeks ago", duration: "7:04", image: img("1531971589569-0d9370cbe1e5") },
  { title: "Flashing & Ventilation Details", city: "Kirkland, WA", type: "Step-by-Step", desc: "Small details make a big difference. See how we do it the right way.", rating: "4.8", views: "9.7K views", when: "1 month ago", duration: "4:28", image: img("1576941089067-2de3c901e126") },
  { title: "Finished Roof – Before & After", city: "Bellevue, WA", type: "Before & After", desc: "Another happy homeowner with a roof built to last for decades.", rating: "5.0", views: "22K views", when: "1 month ago", duration: "3:51", image: img("1564013799919-ab600027ffc6") },
  { title: "Full Roof Replacement – Start to Finish", city: "Bothell, WA", type: "Full Project", desc: "Watch the entire process from start to finish in this detailed project recap.", rating: "5.0", views: "31K views", when: "1 month ago", duration: "9:15", image: img("1580587771525-78b9dba3b914") },
  { title: "Job Site Cleanup Process", city: "Kirkland, WA", type: "Behind the Scenes", desc: "We treat your home like our own. See our thorough cleanup in action.", rating: "4.9", views: "11K views", when: "2 months ago", duration: "2:47", image: img("1600596542815-ffad4c1539a9") },
  { title: "High-End Roof Replacement", city: "Mercer Island, WA", type: "Full Project", desc: "A sleek, high-performance roof for a beautiful luxury home.", rating: "5.0", views: "14K views", when: "2 months ago", duration: "6:30", image: img("1572120360610-d971b9d7767c") },
];

export const TV_REFINE = {
  videoType: {
    heading: "Video Type",
    options: ["All Types", "Full Project (Start to Finish)", "Timelapse", "Before & After", "Step-by-Step", "Customer Story"],
    checked: ["All Types"],
  },
  duration: {
    heading: "Duration",
    options: ["All Durations", "Under 2 min", "2 – 5 min", "5 – 10 min", "Over 10 min"],
    checked: ["All Durations"],
  },
  location: {
    heading: "Project Location",
    options: ["All Locations", "Kirkland, WA", "Bellevue, WA", "Redmond, WA", "Sammamish, WA"],
    checked: ["All Locations"],
  },
  sortBy: {
    heading: "Sort By",
    options: ["Most Recent", "Most Popular", "Highest Rated", "Longest", "Shortest"],
    selected: "Most Recent",
  },
};
