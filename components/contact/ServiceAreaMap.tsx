import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { FEATURED_CITIES } from "@/lib/contact-data";
import { liveHref } from "@/lib/launch-phase";

/* Real map centered near the King / Snohomish county line so the whole
   service region (Seattle → Everett) is visible. No API key required.
   The iframe is a static backdrop (pointer-events disabled) so the city
   markers stay aligned to where each city sits on the map. */
const MAP_EMBED = "https://maps.google.com/maps?q=Bothell,+WA&z=10&output=embed";
export const MAP_LINK = "https://www.google.com/maps/place/Bothell,+WA";

/* Approximate on-map position of each city (% of the map panel).
   Directionally matched to real geography: Everett N, Seattle SW,
   Bellevue S-center, Kirkland mid-left, Redmond mid-right. */
const CITY_POS: Record<string, { top: string; left: string }> = {
  "Everett, WA": { top: "28%", left: "55%" },
  "Kirkland, WA": { top: "52%", left: "41%" },
  "Redmond, WA": { top: "54%", left: "69%" },
  "Bellevue, WA": { top: "74%", left: "54%" },
  "Seattle, WA": { top: "76%", left: "27%" },
};

export function ServiceAreaMap({
  className = "",
  interactive = true,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        title="Skyve Roofing service area map"
        src={MAP_EMBED}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* City house markers */}
      {FEATURED_CITIES.map((city) => {
        const pos = CITY_POS[city.name];
        if (!pos) return null;

        const marker = (
          <>
            <div className="w-[132px] overflow-hidden rounded-xl border border-clear bg-clear shadow-elevated ring-1 ring-horizon/10 transition-transform group-hover:-translate-y-0.5 sm:w-[150px]">
              <Photo src={city.image} alt={city.name} className="aspect-[16/9]" />
              <div className="flex items-center justify-between px-2.5 py-2">
                <div className="leading-tight">
                  <p className="text-xs font-bold text-horizon group-hover:text-ridge">
                    {city.name}
                  </p>
                  <p className="text-[10px] text-ink-50">{city.projects} projects</p>
                </div>
                {interactive && (
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-50 group-hover:text-accent" />
                )}
              </div>
            </div>
            {/* Pin */}
            <span className="-mt-px h-3 w-3 rotate-45 rounded-[2px] border-b border-r border-clear bg-clear shadow-card" />
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-clear" />
          </>
        );

        const posClass =
          "group absolute z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center";

        return interactive ? (
          <Link
            key={city.name}
            href={liveHref(city.href, "/contact")}
            style={{ top: pos.top, left: pos.left }}
            className={`${posClass} pointer-events-auto`}
          >
            {marker}
          </Link>
        ) : (
          <div
            key={city.name}
            style={{ top: pos.top, left: pos.left }}
            className={`${posClass} pointer-events-none`}
          >
            {marker}
          </div>
        );
      })}

      {children}
    </div>
  );
}
