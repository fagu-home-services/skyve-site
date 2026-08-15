import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RECENT_PROJECTS } from "@/lib/site-data";

export function RecentProjects() {
  return (
    <section className="bg-clear py-16 lg:py-24">
      <div className="container-skyve">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
            Recent Projects
          </h2>
          <Link
            href="/projects"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {RECENT_PROJECTS.map((p) => (
            <Link
              key={p.title + p.city}
              href="/projects"
              className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
            >
              <Photo src={p.image} alt={`${p.title} — ${p.city}`} className="aspect-[4/3]">
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-horizon-deep/80 px-2.5 py-1 text-xs font-medium text-clear backdrop-blur-sm">
                  <MapPin className="h-3 w-3" /> {p.city}
                </span>
              </Photo>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-horizon">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xl font-bold text-ridge">
                  {p.price}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View Project{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
