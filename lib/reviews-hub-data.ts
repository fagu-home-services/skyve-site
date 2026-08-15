/* Trust & Authority — Reviews hub (/testimonials) */

export const RH_HERO = {
  level: "Level 12",
  section: "Trust & Authority",
  title: "Reviews",
  lead: "Real stories from real homeowners.",
  desc: "We're proud to have earned the trust of thousands of homeowners across Washington through quality workmanship, honest service, and exceptional results.",
  primary: { label: "Leave a Review", href: "#share" },
  secondary: { label: "View Our Projects", href: "/projects" },
  image: "",
  overlayTitle: "Trusted by Homeowners Across Washington",
  overlayStats: [
    { value: "4.8/5", label: "Average Rating", stars: true },
    { value: "2,300+", label: "Verified Reviews" },
    { value: "98%", label: "Would Recommend Skyve" },
    { value: "15+", label: "Years of Proven Excellence" },
  ],
};

export type Platform = {
  name: string;
  monogram: string;
  tone: string; // bg tint for monogram
  fg: string; // monogram text color
  rating?: string;
  ratingValue?: number;
  badge?: string;
  meta: string;
};

export const RH_PLATFORMS: Platform[] = [
  { name: "Google", monogram: "G", tone: "bg-[#4285F4]/12", fg: "text-[#4285F4]", rating: "4.8", ratingValue: 4.8, meta: "1,120 reviews" },
  { name: "Facebook", monogram: "f", tone: "bg-[#1877F2]/12", fg: "text-[#1877F2]", rating: "4.9", ratingValue: 4.9, meta: "620 reviews" },
  { name: "BBB", monogram: "BBB", tone: "bg-[#0b6792]/12", fg: "text-ridge", badge: "A+ Rating", meta: "Accredited Business" },
  { name: "Yelp", monogram: "Y", tone: "bg-[#d32323]/12", fg: "text-[#d32323]", rating: "4.5", ratingValue: 4.5, meta: "156 reviews" },
  { name: "Angi", monogram: "A", tone: "bg-[#ff6153]/14", fg: "text-[#ff6153]", rating: "4.7", ratingValue: 4.7, meta: "98 reviews" },
];

export type Review = {
  title: string;
  date: string;
  rating: number;
  body: string;
  name: string;
  initials: string;
  location: string;
  service: string;
};

export const RH_REVIEWS: Review[] = [
  {
    title: "Exceptional from start to finish!",
    date: "May 15, 2025",
    rating: 5,
    body: "Skyve replaced our roof and gutters and the entire process was amazing. The team was professional, on time, and the quality of work is outstanding.",
    name: "Sarah M.",
    initials: "SM",
    location: "Kirkland, WA",
    service: "Roof Replacement",
  },
  {
    title: "Honest, reliable, and high quality",
    date: "May 8, 2025",
    rating: 5,
    body: "We had multiple quotes and Skyve was the most transparent and honest. They helped us choose the best materials for our home and the results exceeded our expectations.",
    name: "David R.",
    initials: "DR",
    location: "Bellevue, WA",
    service: "Roof Replacement",
  },
  {
    title: "Great communication and spotless job",
    date: "Apr 28, 2025",
    rating: 5,
    body: "The crew was fantastic. They kept us informed every step of the way and cleaned up perfectly after the job was done. Our new roof looks incredible!",
    name: "Jennifer T.",
    initials: "JT",
    location: "Redmond, WA",
    service: "Roof Replacement",
  },
  {
    title: "Highly recommend Skyve!",
    date: "Apr 18, 2025",
    rating: 5,
    body: "From the inspection to the final walkthrough, everything was smooth and stress-free. Our home looks better than ever!",
    name: "Mike L.",
    initials: "ML",
    location: "Sammamish, WA",
    service: "Roof Replacement",
  },
  {
    title: "Professional team, great experience",
    date: "Apr 5, 2025",
    rating: 5,
    body: "The team showed up on time, worked efficiently, and delivered excellent results. I would definitely use Skyve again.",
    name: "Carlos V.",
    initials: "CV",
    location: "Bothell, WA",
    service: "Roof & Gutters",
  },
  {
    title: "Top-notch service!",
    date: "Mar 25, 2025",
    rating: 5,
    body: "Skyve's attention to detail and customer service is unmatched. They made the whole process easy and our new roof is beautiful.",
    name: "Amanda P.",
    initials: "AP",
    location: "Issaquah, WA",
    service: "Roof Replacement",
  },
];

export const RH_SERVICE_FILTER = [
  "All Services",
  "Roof Replacement",
  "Roof Repair",
  "Roof & Gutters",
  "Metal Roofing",
  "Siding",
];

export const RH_LOCATION_FILTER = [
  "All Locations",
  "Kirkland, WA",
  "Bellevue, WA",
  "Redmond, WA",
  "Sammamish, WA",
  "Bothell, WA",
  "Issaquah, WA",
];

export const RH_VIDEO = {
  title: "Video Testimonials",
  thumb: "",
  caption: "See what our customers have to say",
  link: { label: "Watch All Videos", href: "/skyve-tv" },
};

export const RH_SHARE = {
  title: "Share Your Experience",
  desc: "Had a great experience with Skyve? We'd love to hear from you!",
  placeholder: "Write your review here...",
  button: "Submit Your Review",
};

export const RH_WHY = {
  title: "Why Homeowners Trust Skyve",
  points: [
    "Licensed, bonded, and insured",
    "Premium materials and expert installation",
    "Transparent pricing and honest advice",
    "Clean, safe, and respectful crews",
    "Industry-leading warranties",
    "Over 15 years of proven excellence",
  ],
  link: { label: "Learn More About Us", href: "/about" },
};

export const RH_CTA = {
  title: "Ready to Experience the Skyve Difference?",
  desc: "Join thousands of homeowners who trust Skyve for their roofing and exterior needs.",
  points: ["Free inspection & estimate", "No pressure, just honest answers", "Quality you can count on"],
  button: { label: "Get Your Free Estimate", href: "/estimate" },
};
