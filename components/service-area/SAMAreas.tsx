"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { SAM_COUNTIES } from "@/lib/service-area-map-data";
import { liveHref } from "@/lib/launch-phase";

export function SAMAreas() {
  const [active, setActive] = useState(0);
  const cities = SAM_COUNTIES[active].cities;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-mist bg-clear p-6 shadow-card">
      <h2 className="font-serif text-lg font-bold text-horizon">We Serve These Areas</h2>

      {/* Tabs */}
      <div className="mt-4 flex border-b border-mist">
        {SAM_COUNTIES.map((c, i) => (
          <button
            key={c.label}
            type="button"
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === i
                ? "border-ridge text-ridge"
                : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* City list */}
      <ul className="mt-2 max-h-80 flex-1 space-y-0.5 overflow-y-auto pr-1">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={liveHref(`/${city.slug}`, "/contact")}
              className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-mist-soft/60"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-ridge" />
                <span className="text-sm font-semibold text-horizon group-hover:text-ridge">{city.name}</span>
              </span>
              <ChevronRight className="h-4 w-4 text-ink-50 group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/service-area"
        className="mt-4 inline-flex items-center gap-1.5 border-t border-mist pt-4 text-sm font-semibold text-ridge hover:text-accent"
      >
        View All Cities (25+) <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
