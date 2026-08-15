import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RATING } from "@/lib/why-data";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialProjectsReviews({ data }: { data: MaterialPage }) {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Projects */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            {data.projectsHeading}
          </h2>
          <div
            className={`mt-5 grid gap-3 ${
              data.projects.length >= 5
                ? "grid-cols-5"
                : data.projects.length === 4
                  ? "grid-cols-4"
                  : "grid-cols-3"
            }`}
          >
            {data.projects.map((p, i) => (
              <Photo key={i} src={p} alt="Project" className="aspect-[4/3] rounded-lg shadow-card" />
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            View More Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Review */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            {data.reviewsHeading ?? "What Homeowners Are Saying"}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-[160px_1fr]">
            <div className="flex flex-col items-center justify-center rounded-xl border border-mist bg-mist-soft/60 p-4 text-center">
              <span className="font-serif text-base font-bold text-ridge">Google</span>
              <p className="mt-1 font-serif text-3xl font-extrabold text-horizon">{RATING.score}</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-ink-50">{RATING.reviews}</p>
              <Link href="#" className="mt-1.5 text-[11px] font-semibold text-ridge hover:text-accent">
                View All Reviews on Google →
              </Link>
            </div>
            <figure className="flex flex-col justify-center rounded-xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                  {data.review.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{data.review.name}</p>
                  <p className="text-xs text-ink-50">{data.review.city}</p>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-2 text-sm leading-relaxed text-ink-70">
                {data.review.quote}
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
