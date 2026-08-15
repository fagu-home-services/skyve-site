/* Share Your Story page (/share-your-story) — mock content.
   Reviewer avatars use initials placeholders. */

export const SHARE_HERO = {
  titleLines: ["Share Your Story.", "Inspire Others."],
  desc: "Your experience can help other homeowners make confident decisions about their homes. Share your story and be part of the Skyve community.",
  image: "/images/1600596542815-ffad4c1539a9.jpg",
  trust: [
    { icon: "message", label: "Help Other Homeowners" },
    { icon: "shield", label: "Showcase Quality & Craftsmanship" },
    { icon: "star", label: "Be Featured on Skyve TV" },
  ],
};

export const SHARE_DIFFERENCE = {
  title: "Your Story Makes a Difference",
  desc: "When you share your experience with Skyve Roofing & Exteriors, you're not just telling your story—you're helping your neighbors and supporting a local business that cares.",
  features: [
    { icon: "camera", title: "Share Your Project", desc: "Tell us about your roofing or exterior project and your experience working with our team." },
    { icon: "message", title: "Inspire Confidence", desc: "Your story helps other homeowners choose the right team for their home." },
    { icon: "film", title: "Featured on Skyve TV", desc: "Selected stories will be featured in our video library and across our channels." },
    { icon: "gift", title: "Exclusive Thank You", desc: "As a thank you, you'll receive an exclusive Skyve gift and recognition." },
  ],
};

export const SHARE_STEPS = ["Project Details", "Your Experience", "Photos & Videos", "Review & Submit"];

export const SHARE_PROJECT_TYPES = [
  { icon: "home", label: "Roof Replacement" },
  { icon: "wrench", label: "Roof Repair" },
  { icon: "droplet", label: "Gutter Installation" },
  { icon: "brush", label: "Exterior Painting" },
  { icon: "more", label: "Other" },
];

export const SHARE_TIPS = [
  { icon: "badge", text: "Be honest and specific about your experience." },
  { icon: "document", text: "Include details about the process, team, and results." },
  { icon: "film", text: "Add photos or videos to help bring your story to life." },
  { icon: "heart", text: "Share how your home looks and feels today." },
];

export const SHARE_REVIEWS = [
  {
    name: "Sarah M.", city: "Kirkland, WA", initials: "SM", rating: 5,
    quote: "Skyve exceeded our expectations from start to finish. The team was professional, on time, and the quality is outstanding.",
  },
  {
    name: "Michael R.", city: "Bellevue, WA", initials: "MR", rating: 4.5,
    quote: "From the inspection to the final cleanup, Skyve made the whole process easy and stress-free. Highly recommend!",
  },
];

export const SHARE_QUESTIONS = {
  title: "Questions?",
  desc: "We're here to help you share your story.",
  phone: "(425) 201-2490",
  phoneHref: "tel:+14252012490",
  email: "stories@skyveroofing.com",
};

export const SHARE_TRUST = [
  { icon: "star", title: "Verified & Trusted", desc: "All stories are verified to ensure authenticity." },
  { icon: "shield", title: "Quality Showcase", desc: "We highlight real results and quality craftsmanship." },
  { icon: "message", title: "Community Driven", desc: "Real stories from real homeowners like you." },
  { icon: "star", title: "Built to Inspire", desc: "Your story today can inspire tomorrow." },
];
