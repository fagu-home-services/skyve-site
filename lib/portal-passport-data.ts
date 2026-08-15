/* Future Homeowner Portal — Property Passport (/portal/property-passport). Phase 2.
   Powered by Verascor (flagship "OS for Home Records" product). */

export const PP_HEADER = {
  status: "Active Project",
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA 98033",
  image: "",
  specs: [
    { label: "Year Built", value: "2008" },
    { label: "Home Type", value: "Single Family" },
    { label: "Living Area", value: "2,450 sq ft" },
    { label: "Lot Size", value: "8,712 sq ft" },
    { label: "Climate Zone", value: "Marine (4C)" },
  ],
  passportId: "VP-24-6F8A-JRS1",
  created: "May 15, 2025",
};

export const PP_TABS = ["Overview", "Systems", "Documents", "Photos", "History", "Maintenance", "Warranty", "Reports"];

export const PP_OVERVIEW = {
  title: "Home Overview",
  subtitle: "Your Property Passport includes verified information about your home, its systems, maintenance, and more.",
  cards: [
    { icon: "checkcircle", tone: "text-success", title: "Verascor Score", value: "87", sub: "Excellent", link: "View Score Details" },
    { icon: "home", tone: "text-success", title: "Roof Health", value: "Good", sub: "Next Inspection May 20, 2025", link: "View Roof Details" },
    { icon: "wrench", tone: "text-ridge", title: "Maintenance", value: "On Track", sub: "4 Tasks Upcoming", link: "View Schedule" },
    { icon: "shield", tone: "text-ridge", title: "Warranties", value: "Active", sub: "6 Warranties Total Coverage", link: "View Warranties" },
  ],
};

export const PP_SYSTEMS = {
  title: "Systems at a Glance",
  subtitle: "Overview of the major systems and components in your home.",
  items: [
    { icon: "home", label: "Roofing System", status: "Good" },
    { icon: "droplet", label: "Gutters & Drainage", status: "Good" },
    { icon: "grid", label: "Exterior Siding", status: "Good" },
    { icon: "wind", label: "HVAC System", status: "Good" },
    { icon: "droplet", label: "Plumbing System", status: "Good" },
    { icon: "zap", label: "Electrical System", status: "Good" },
    { icon: "grid", label: "Windows & Doors", status: "Good" },
    { icon: "layers", label: "Attic & Insulation", status: "Good" },
  ],
};

export const PP_INCLUDES = {
  title: "Your Passport Includes",
  subtitle: "Everything you need to know about your home, organized and verified.",
  items: [
    { icon: "shield", title: "Verified Information", desc: "Accurate, verified data about your home." },
    { icon: "clock", title: "Complete History", desc: "Full record of inspections, maintenance, and updates." },
    { icon: "folder", title: "Important Documents", desc: "All documents & warranties in one secure place." },
    { icon: "camera", title: "High Quality Photos", desc: "Photos of your home's condition over time." },
    { icon: "chart", title: "Smart Insights", desc: "AI-powered insights and recommendations." },
  ],
};

export type Activity = { icon: string; title: string; desc: string; date: string; link: string };
export const PP_ACTIVITY = {
  title: "Recent Activity",
  items: [
    { icon: "search", title: "Roof Maintenance Inspection completed", desc: "Your roof inspection was completed by Skyve Inspector.", date: "May 5, 2025", link: "View Report" },
    { icon: "wrench", title: "Maintenance task completed", desc: "Clean gutters & downspouts", date: "Apr 28, 2025", link: "View Details" },
    { icon: "document", title: "Document uploaded", desc: "Roof Warranty Certificate", date: "Apr 20, 2025", link: "View Document" },
    { icon: "chart", title: "New recommendation", desc: "Consider attic re-insulation to improve energy efficiency.", date: "Apr 15, 2025", link: "View Recommendation" },
  ] as Activity[],
};

export const PP_BAND = {
  title: "One Home. One Record. Total Peace of Mind.",
  desc: "Your Property Passport is always up to date, giving you confidence and adding value to your home.",
};

export const PP_SCORE = {
  title: "Verascor Score",
  score: 87,
  rating: "Excellent",
  note: "Your home is in excellent condition. Keep up the great work!",
  button: { label: "View Score Details", href: "/portal/roof-score" },
};

export const PP_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "edit", label: "Update Home Information" },
    { icon: "upload", label: "Upload Document" },
    { icon: "calendar", label: "Schedule Inspection" },
    { icon: "warning", label: "Report an Issue" },
    { icon: "share", label: "Share Passport" },
  ],
};

export const PP_SUMMARY = {
  title: "Property Summary",
  rows: [
    { label: "Year Built", value: "2008" },
    { label: "Home Type", value: "Single Family" },
    { label: "Roof Type", value: "Asphalt Shingle" },
    { label: "Roof Age", value: "3 Years" },
    { label: "Heating System", value: "Forced Air" },
    { label: "Cooling System", value: "Central AC" },
    { label: "Water Heater", value: "Tankless" },
    { label: "Foundation", value: "Concrete" },
  ],
};

export const PP_CHECKLIST = {
  title: "Document Checklist",
  items: [
    { label: "Property Deed", status: "Uploaded" },
    { label: "Roof Warranty", status: "Uploaded" },
    { label: "Inspection Report", status: "Uploaded" },
    { label: "Maintenance Records", status: "Uploaded" },
    { label: "HVAC Manual", status: "Pending" },
    { label: "Appliance Receipts", status: "Pending" },
  ],
};

export const PP_SHARE = {
  title: "Share Your Passport",
  desc: "Easily share your home information with family, contractors, or agents.",
  button: { label: "Share Passport", href: "#" },
  note: "Secure. Private. You control access.",
};
