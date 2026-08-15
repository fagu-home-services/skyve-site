import {
  Rss,
  LayoutGrid,
  Map,
  FolderOpen,
  Heart,
  Users,
  BarChart3,
  Image as ImageIcon,
  Database,
  Settings,
} from "lucide-react";

const NAV = [
  { label: "Field Reports Feed", icon: Rss, active: true },
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Map View", icon: Map },
  { label: "My Projects", icon: FolderOpen },
  { label: "My Favorites", icon: Heart },
  { label: "Team Activity", icon: Users },
  { label: "Reports & Analytics", icon: BarChart3 },
  { label: "Media Library", icon: ImageIcon },
  { label: "Materials Database", icon: Database },
  { label: "Settings", icon: Settings },
];

export function FieldReportsSidebar() {
  return (
    <aside className="space-y-6">
      <nav className="rounded-2xl border border-mist bg-clear p-3 shadow-card">
        {NAV.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              item.active
                ? "bg-ridge/10 text-ridge"
                : "text-ink-70 hover:bg-mist-soft hover:text-ridge"
            }`}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* App card */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5 shadow-card">
        <p className="text-sm font-bold text-horizon">Follow everything on our app</p>
        <p className="mt-1.5 text-xs text-ink-50">
          Reports, photos, and updates always in the palm of your hand.
        </p>
        <div className="mt-4 space-y-2.5">
          {[
            { top: "Download on the", big: "App Store" },
            { top: "Get it on", big: "Google Play" },
          ].map((b) => (
            <a
              key={b.big}
              href="#"
              className="flex items-center gap-2.5 rounded-lg bg-horizon-deep px-3.5 py-2.5 text-clear transition-colors hover:bg-horizon"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded bg-clear/15 text-[10px] font-bold">
                ▶
              </span>
              <span className="leading-tight">
                <span className="block text-[9px] uppercase tracking-wide text-mist-soft/70">
                  {b.top}
                </span>
                <span className="block text-sm font-semibold">{b.big}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
