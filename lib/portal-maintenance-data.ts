/* Future Homeowner Portal — Maintenance (/portal/maintenance). Phase 2. */

export const PM_SCORE = {
  title: "Maintenance Score",
  score: 92,
  rating: "Excellent",
  note: "Great job! You're keeping your home in top shape.",
};

export const PM_TABS = ["Overview", "Maintenance Schedule", "Service History", "Tips & Guides", "Recommended Providers"];

export const PM_OVERVIEW = {
  title: "Your Maintenance Overview",
  subtitle: "Regular maintenance extends the life of your exterior and protects your investment.",
  stats: [
    { icon: "calendar", tone: "text-ridge", value: "May 20, 2025", label: "Next Maintenance", sub: "In 15 days" },
    { icon: "checkcircle", tone: "text-success", value: "3", label: "Completed", sub: "This Year" },
    { icon: "clock", tone: "text-ridge", value: "4", label: "Upcoming", sub: "Next 12 Months" },
    { icon: "shield", tone: "text-success", value: "0", label: "Overdue", sub: "Great job!" },
  ],
};

export type MaintTask = {
  title: string;
  desc: string;
  badge: string;
  badgeTone: string;
  date: string;
  countdown: string;
};

export const PM_UPCOMING: MaintTask[] = [
  {
    title: "Roof Inspection",
    desc: "Check for loose, damaged, or missing shingles and signs of wear.",
    badge: "Recommended",
    badgeTone: "bg-ridge/12 text-ridge",
    date: "May 20, 2025",
    countdown: "In 15 days",
  },
  {
    title: "Clean Gutters & Downspouts",
    desc: "Remove leaves and debris to ensure proper water drainage.",
    badge: "Recommended",
    badgeTone: "bg-ridge/12 text-ridge",
    date: "Jun 15, 2025",
    countdown: "In 41 days",
  },
  {
    title: "Siding Wash",
    desc: "Gentle wash to remove dirt, mold, and mildew from exterior surfaces.",
    badge: "Seasonal",
    badgeTone: "bg-success/12 text-success",
    date: "Jul 10, 2025",
    countdown: "In 66 days",
  },
  {
    title: "Sealant & Caulking Check",
    desc: "Inspect and replace any cracked or deteriorated caulking and sealants.",
    badge: "Annual",
    badgeTone: "bg-[#7c3aed]/12 text-[#7c3aed]",
    date: "Aug 20, 2025",
    countdown: "In 107 days",
  },
];

export const PM_TIPS = {
  title: "Maintenance Tips & Guides",
  subtitle: "Helpful tips to keep your home looking its best.",
  items: [
    { title: "How Often Should You Inspect Your Roof?", desc: "Learn the recommended inspection frequency." },
    { title: "The Importance of Clean Gutters", desc: "Clogged gutters can lead to expensive damage." },
    { title: "Best Practices for Siding Maintenance", desc: "Keep your siding beautiful and long-lasting." },
    { title: "Attic Ventilation: What You Need to Know", desc: "Proper ventilation protects your home year-round." },
  ],
};

export const PM_BOTTOM = {
  title: "Stay Ahead of Problems. Save Money.",
  desc: "Regular maintenance helps prevent costly repairs and keeps your home looking its best for years to come.",
  button: { label: "Schedule a Maintenance Check", href: "/contact" },
};

export const PM_REMINDERS = {
  title: "Maintenance Reminders",
  items: [
    { label: "Email Reminders", on: true },
    { label: "SMS Reminders", on: true },
    { label: "Seasonal Tips", on: true },
  ],
};

export const PM_SEASONAL = {
  title: "Seasonal Checklist",
  items: [
    { icon: "leaf", tone: "text-success", bg: "bg-success/12", season: "Spring", desc: "Inspect roof, clean gutters, check for winter damage." },
    { icon: "sun", tone: "text-warning", bg: "bg-warning/15", season: "Summer", desc: "Check ventilation, windows, and exterior sealants." },
    { icon: "leaf", tone: "text-accent", bg: "bg-accent/12", season: "Fall", desc: "Clean gutters, trim trees, prepare for rain." },
    { icon: "snow", tone: "text-ridge", bg: "bg-ridge/12", season: "Winter", desc: "Check attic insulation, prevent ice dams." },
  ],
};

export const PM_HELP = {
  title: "Need Help?",
  desc: "We're here to help with your maintenance needs.",
  button: { label: "Contact Maintenance Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};

export const PM_PROVIDERS = {
  title: "Recommended Providers",
  items: [
    { initials: "SC", name: "Skyve Care Team", role: "Roof & Exterior Specialists", rating: "5.0" },
    { initials: "EG", name: "Evergreen Gutter Pros", role: "Gutter Cleaning", rating: "4.9" },
    { initials: "PN", name: "PNW Soft Wash", role: "Exterior Cleaning", rating: "4.8" },
  ],
};
