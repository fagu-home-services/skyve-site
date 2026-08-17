import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, ClipboardCheck } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
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

        {/* Honest trust — no fabricated Google rating or testimonial (company is new) */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Why homeowners trust Skyve
          </h2>
          <p className="mt-4 text-ink-70">
            We&apos;re a new company built on {COMPANY.yearsCombined} years of roofing experience — no
            inflated review counts. Here&apos;s what backs your roof today:
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-70">
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> Licensed &amp; insured in
              Washington (#{COMPANY.license})
            </li>
            <li className="flex items-start gap-2.5">
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {COMPANY.warrantyYears}-year
              workmanship warranty, in writing
            </li>
            <li className="flex items-start gap-2.5">
              <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> Owner-led — every job
              documented photo by photo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
