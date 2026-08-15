import Link from "next/link";
import { MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { OPEN_POSITIONS, JOIN_CHECKLIST, EOE_NOTE } from "@/lib/careers-data";

export function OpenPositions() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Open Positions
          </h2>
          <p className="text-sm text-ink-50">
            Don&apos;t see the right role?{" "}
            <Link href="#" className="font-semibold text-ridge hover:text-accent">
              Send us your resume!
            </Link>
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Job list */}
          <div>
            <div className="space-y-4">
              {OPEN_POSITIONS.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col gap-4 rounded-xl border border-mist bg-clear p-5 shadow-card sm:flex-row sm:items-center"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={job.icon} className="h-5 w-5 text-ridge" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-horizon">{job.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-50">{job.desc}</p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-1 text-xs text-ink-70 sm:w-32">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-ridge" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-ridge" /> {job.type}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-6 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
              >
                View All Open Positions
              </Link>
            </div>
          </div>

          {/* Join card */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h3 className="font-serif text-lg font-bold text-horizon">
              Ready to Join Our Team?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-50">
              We&apos;re always looking for talented, motivated people who share
              our values and take pride in their work.
            </p>
            <ul className="mt-5 space-y-2.5">
              {JOIN_CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-70">
                  <Check className="h-4 w-4 shrink-0 text-ridge" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5 rounded-lg bg-mist-soft p-4">
              <p className="text-xs font-bold text-horizon">Equal Opportunity Employer</p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-50">{EOE_NOTE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
