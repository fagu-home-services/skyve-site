import { Globe, RefreshCcw, LayoutDashboard, Box, TrendingUp, Users, Leaf } from "lucide-react";
import { IP_HIGHLIGHTS } from "@/lib/investors-data";

const ICON = { globe: Globe, refresh: RefreshCcw, dashboard: LayoutDashboard, box: Box, trend: TrendingUp, users: Users, leaf: Leaf } as const;

export function IPHighlights() {
  return (
    <section className="bg-mist-soft/40 py-10">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">Investment Highlights</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {IP_HIGHLIGHTS.map((h) => {
            const I = ICON[h.icon as keyof typeof ICON] ?? Globe;
            return (
              <div key={h.title} className="rounded-xl border border-mist bg-clear p-4 text-center shadow-card">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft">
                  <I className="h-5 w-5 text-ridge" />
                </span>
                <p className="mt-3 text-xs font-bold text-horizon">{h.title}</p>
                <p className="mt-1 text-[10px] leading-snug text-ink-50">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
