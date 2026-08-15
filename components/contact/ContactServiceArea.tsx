import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { KING_CITIES, SNO_CITIES, FEATURED_CITIES } from "@/lib/contact-data";
import { liveHref } from "@/lib/launch-phase";

function CityList({ heading, cities }: { heading: string; cities: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-horizon">{heading}</p>
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {cities.map((c) => (
          <li key={c} className="flex items-center gap-1.5 text-xs text-ink-70">
            <MapPin className="h-3 w-3 text-ridge" /> {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactServiceArea() {
  return (
    <section className="bg-[#eef3ee] py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Serving Homeowners Across Washington
        </h2>
        <p className="mt-2 max-w-2xl text-ink-70">
          Proudly serving King &amp; Snohomish County — from Seattle to Everett and every
          community in between.
        </p>

        {/* Featured city cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {FEATURED_CITIES.map((city) => (
            <div
              key={city.name}
              className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
            >
              <Photo src={city.image} alt={city.name} className="aspect-[16/10]" />
              <div className="p-3.5">
                <p className="text-sm font-bold text-horizon">{city.name}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {city.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-mist-soft px-2 py-0.5 text-[9px] font-medium text-ink-70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-end justify-between border-t border-mist pt-2.5">
                  <div>
                    <p className="text-[10px] text-ink-50">Projects</p>
                    <p className="font-mono text-lg font-bold text-horizon">{city.projects}</p>
                  </div>
                  <Link
                    href={liveHref(city.href, "/contact")}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent"
                  >
                    View <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* County city lists */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
          <CityList heading="King County" cities={KING_CITIES} />
          <CityList heading="Snohomish County" cities={SNO_CITIES} />
        </div>
      </div>
    </section>
  );
}
