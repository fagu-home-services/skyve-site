/* Future Homeowner Portal — Documents redesign (/portal/documents). Phase 2.
   Powered by Verascor. Replaces the earlier simpler Documents page. */

export const DOC_TABS = [
  "All Documents",
  "Project Documents",
  "Warranties",
  "Inspection Reports",
  "Maintenance Records",
  "Financial",
];

export const DOC_QUICK = [
  { icon: "folder", tone: "text-ridge", label: "Project Documents", count: 24 },
  { icon: "shield", tone: "text-success", label: "Warranties", count: 6 },
  { icon: "search", tone: "text-[#7c3aed]", label: "Inspection Reports", count: 12 },
  { icon: "wrench", tone: "text-accent", label: "Maintenance Records", count: 8 },
  { icon: "dollar", tone: "text-success", label: "Financial Documents", count: 7 },
];

export type DocFolder = { name: string; count: number; updated: string };
export const DOC_FOLDERS: DocFolder[] = [
  { name: "01 - Project Documents", count: 24, updated: "May 15, 2025" },
  { name: "02 - Warranties", count: 6, updated: "May 14, 2025" },
  { name: "03 - Inspection Reports", count: 12, updated: "May 5, 2025" },
  { name: "04 - Maintenance Records", count: 8, updated: "Apr 28, 2025" },
  { name: "05 - Financial & Payments", count: 7, updated: "Apr 20, 2025" },
  { name: "06 - Plans & Drawings", count: 15, updated: "Apr 15, 2025" },
  { name: "07 - Permits & Approvals", count: 5, updated: "Apr 10, 2025" },
  { name: "08 - Insurance Documents", count: 4, updated: "Apr 5, 2025" },
];

export const DOC_CATEGORY_TONE: Record<string, string> = {
  Warranty: "bg-success/12 text-success",
  "Inspection Report": "bg-[#7c3aed]/12 text-[#7c3aed]",
  "Project Document": "bg-ridge/12 text-ridge",
  "Maintenance Record": "bg-accent/15 text-accent",
  "Financial Document": "bg-success/12 text-success",
  Permit: "bg-warning/15 text-warning",
  "Plans & Drawings": "bg-sky/25 text-ridge",
  "Insurance Document": "bg-ridge/12 text-ridge",
};

export type RecentDoc = { name: string; category: string; uploaded: string; size: string; by: string };
export const DOC_RECENT: RecentDoc[] = [
  { name: "Roof Warranty Certificate", category: "Warranty", uploaded: "May 15, 2025", size: "1.2 MB", by: "Skyve Team" },
  { name: "Roof Installation Report", category: "Inspection Report", uploaded: "May 5, 2025", size: "3.4 MB", by: "Skyve Inspector" },
  { name: "Material Specifications", category: "Project Document", uploaded: "Apr 28, 2025", size: "2.1 MB", by: "Skyve Team" },
  { name: "Maintenance Checklist", category: "Maintenance Record", uploaded: "Apr 20, 2025", size: "1.1 MB", by: "Skyve Pro Team" },
  { name: "Payment Receipt - Final", category: "Financial Document", uploaded: "Apr 18, 2025", size: "589 KB", by: "Skyve Team" },
  { name: "Building Permit", category: "Permit", uploaded: "Apr 10, 2025", size: "875 KB", by: "Skyve Team" },
  { name: "Architectural Drawings", category: "Plans & Drawings", uploaded: "Apr 5, 2025", size: "5.6 MB", by: "Skyve Team" },
  { name: "Home Insurance Policy", category: "Insurance Document", uploaded: "Mar 28, 2025", size: "2.3 MB", by: "Homeowner" },
];

export const DOC_STORAGE = {
  title: "Storage Usage",
  usedPct: 24,
  used: "2.4 GB",
  of: "of 10 GB used",
};

export const DOC_CATEGORIES = {
  title: "Document Categories",
  items: [
    { icon: "folder", tone: "text-ridge", label: "Project Documents", count: 24 },
    { icon: "shield", tone: "text-success", label: "Warranties", count: 6 },
    { icon: "search", tone: "text-[#7c3aed]", label: "Inspection Reports", count: 12 },
    { icon: "wrench", tone: "text-accent", label: "Maintenance Records", count: 8 },
    { icon: "dollar", tone: "text-success", label: "Financial Documents", count: 7 },
    { icon: "layers", tone: "text-[#7c3aed]", label: "Plans & Drawings", count: 15 },
    { icon: "checkcircle", tone: "text-warning", label: "Permits & Approvals", count: 5 },
    { icon: "shield", tone: "text-ridge", label: "Insurance Documents", count: 4 },
  ],
};

export const DOC_RECENTLY_UPLOADED = {
  title: "Recently Uploaded",
  items: [
    { name: "Roof Warranty Certificate", date: "May 15, 2025", tone: "text-danger" },
    { name: "Roof Installation Report", date: "May 5, 2025", tone: "text-ridge" },
    { name: "Maintenance Checklist", date: "Apr 28, 2025", tone: "text-success" },
    { name: "Payment Receipt - Final", date: "Apr 18, 2025", tone: "text-success" },
    { name: "Building Permit", date: "Apr 10, 2025", tone: "text-warning" },
  ],
};

export const DOC_ACTIONS = {
  title: "Document Actions",
  items: [
    { icon: "upload", label: "Upload Document" },
    { icon: "folder", label: "Create New Folder" },
    { icon: "document", label: "Request Document" },
    { icon: "download", label: "Bulk Download" },
    { icon: "gear", label: "Document Settings" },
  ],
};

export const DOC_HELP = {
  title: "Need Help?",
  desc: "Can't find a document or have questions?",
  button: { label: "Contact Support Team", href: "/contact" },
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
};

export const DOC_SECURE = {
  title: "Your documents are safe and secure.",
  desc: "All documents are encrypted and stored securely in your Verascor account.",
  button: { label: "Learn More About Security", href: "#" },
};
