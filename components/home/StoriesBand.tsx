import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { STORY_PROJECTS } from "@/lib/site-data";

export function StoriesBand() {
  return (
    <section className="bg-horizon-deep py-16 lg:py-24">
      <div className="container-skyve grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="text-clear">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Real Roofs. Real Stories.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-sky-soft/80">
            See real projects, real numbers, and real results from homeowners
            across Washington.
          </p>
          <Link
            href="/field-reports"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            Explore Field Reports <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STORY_PROJECTS.map((p) => (
            <Link
              key={p.title + p.city}
              href={p.href}
              className="group relative overflow-hidden rounded-xl shadow-elevated"
            >
              <Photo src={p.image} alt={`${p.title} — ${p.city}`} className="aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep/90 via-horizon-deep/20 to-transparent" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-clear/15 px-2.5 py-1 text-xs font-medium text-clear backdrop-blur-sm">
                  <MapPin className="h-3 w-3" /> {p.city}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-base font-bold text-clear">
                    {p.title}
                  </h3>
                  <p className="font-mono text-lg font-bold text-sky">{p.price}</p>
                </div>
              </Photo>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
