/* Future Homeowner Portal — Messages (/portal/messages). Phase 2. */

export const MSG_SELECTOR = {
  name: "Johnson Residence",
  address: "1234 Evergreen Lane, Kirkland, WA",
};

export const MSG_PROMO = {
  title: "Need help?",
  desc: "We're here to help you every step of the way.",
  button: { label: "Contact Support", href: "/contact" },
};

export const MSG_TABS = [
  { label: "Conversations" },
  { label: "Unread (3)" },
  { label: "Archived" },
];

export type Conversation = {
  initials?: string;
  icon?: string;
  iconBg?: string;
  name: string;
  role: string;
  time: string;
  preview: string;
  unread?: number;
  active?: boolean;
};

export const MSG_CONVERSATIONS: Conversation[] = [
  { initials: "MA", name: "Mike Anderson", role: "Project Manager", time: "9:15 AM", preview: "The tear off is complete and we've started installing the underlayment.", unread: 2, active: true },
  { icon: "users", iconBg: "bg-ridge", name: "Skyve Roofing Team", role: "General", time: "8:30 AM", preview: "Daily update: Crew will be on-site tomorrow at 7:00 AM.", unread: 1 },
  { initials: "AD", name: "Ashley Davis", role: "Project Coordinator", time: "Yesterday", preview: "Here is the updated schedule for the remainder of the project." },
  { icon: "dollar", iconBg: "bg-success", name: "Billing Team", role: "Payments & Financing", time: "May 8", preview: "Your next payment of $2,500 is scheduled for May 15, 2025." },
  { icon: "shield", iconBg: "bg-[#7c3aed]", name: "Warranty Department", role: "Warranty Support", time: "May 6", preview: "Thank you! Your warranty has been successfully activated." },
  { initials: "MS", name: "Mark Stevens", role: "Sales Representative", time: "May 5", preview: "Just checking in — let me know if you have any questions!" },
];

export type Msg = { text: string; time: string; sent?: boolean; reaction?: string; read?: boolean; photos?: number };
export type MsgGroup = { date: string; messages: Msg[] };

export const MSG_THREAD = {
  name: "Mike Anderson",
  role: "Project Manager",
  initials: "MA",
  groups: [
    {
      date: "May 12, 2025",
      messages: [
        { text: "Good morning, Alex!", time: "8:01 AM" },
        { text: "The tear off is complete and we've started installing the underlayment.", time: "8:02 AM" },
        { text: "Everything is going according to plan. I'll send more photos later today.", time: "8:02 AM", reaction: "❤️ 1" },
        { text: "Great to hear! Thank you for the update. Looking forward to seeing the progress photos.", time: "8:05 AM", sent: true, read: true },
        { text: "You're welcome! Talk soon.", time: "8:06 AM" },
      ],
    },
    {
      date: "May 13, 2025",
      messages: [
        { text: "Here are the photos from today's progress.", time: "9:15 AM" },
        { text: "", time: "9:13 AM", photos: 6 },
        { text: "Looks great! Thanks for the update.", time: "9:18 AM", sent: true, read: true },
      ],
    },
  ] as MsgGroup[],
};

export const MSG_DETAILS = {
  title: "Conversation Details",
  name: "Mike Anderson",
  role: "Project Manager",
  initials: "MA",
  contactTitle: "Contact Information",
  contact: [
    { icon: "phone", value: "(425) 555-0198" },
    { icon: "message", value: "mike.anderson@skyveexteriors.com" },
    { icon: "clock", value: "Mon - Fri 7AM - 5PM PT" },
  ],
  meta: [
    { label: "Project Role", value: "Project Manager" },
    { label: "On Site", value: "Yes" },
    { label: "Team", value: "Installation Crew" },
  ],
};

export const MSG_ATTACHMENTS = {
  title: "Shared Attachments",
  items: [
    { name: "Project Schedule Update.pdf", meta: "May 8, 2025 · PDF", tone: "text-danger" },
    { name: "Permit Approval.pdf", meta: "May 9, 2025 · PDF", tone: "text-danger" },
    { name: "Material Delivery.jpg", meta: "May 10, 2025 · JPG", tone: "text-ridge" },
    { name: "Roof Progress - Day 1.jpg", meta: "May 12, 2025 · JPG", tone: "text-ridge" },
    { name: "Roof Progress - Day 2.jpg", meta: "May 13, 2025 · JPG", tone: "text-ridge" },
  ],
};

export const MSG_QUICK_ACTIONS = {
  title: "Quick Actions",
  items: [
    { icon: "phone", label: "Schedule a Call" },
    { icon: "calendar", label: "Request an Update" },
    { icon: "upload", label: "Send a Document", full: true },
  ],
};

export const MSG_OFFICE = {
  title: "Office Contact",
  desc: "Need immediate assistance? Contact our office.",
  phone: "(425) 201-2490",
  hours: "Mon - Fri 7AM - 5PM PT",
  button: "Call Now",
};

export const MSG_TRUST = [
  { icon: "bell", title: "Stay Informed", desc: "We'll keep you updated every step of the way." },
  { icon: "message", title: "Fast Response", desc: "Our team typically responds within 1 business hour." },
  { icon: "folder", title: "All In One Place", desc: "All your project communication organized for you." },
];
