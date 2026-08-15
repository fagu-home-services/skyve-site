import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { Logo } from "@/components/shared/Logo";
import { PROJECT_TIMELINE, REPORT_SAMPLE } from "@/lib/estimate-data";

function Bars({ rows = 4, className = "" }: { rows?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-mist" />
          <div className="h-2 w-8 rounded-full bg-mist" />
        </div>
      ))}
    </div>
  );
}

export function ProjectTimelineReport() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-14 lg:grid-cols-2">
        {/* Timeline */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Project Timeline
          </h2>
          <p className="mt-2 text-sm text-ink-50">
            A clear timeline so you know what to expect.
          </p>

          <ol className="mt-8">
            {PROJECT_TIMELINE.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                {i < PROJECT_TIMELINE.length - 1 && (
                  <span className="absolute left-5 top-11 h-[calc(100%-1rem)] w-px bg-mist" />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ridge text-clear">
                  <Icon name={step.icon} className="h-4 w-4" />
                </span>
                <div className="pt-0.5">
                  <p className="eyebrow text-accent">{step.day}</p>
                  <h3 className="mt-0.5 text-base font-bold text-horizon">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-ink-50">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Report preview */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            See Exactly What You&apos;ll Receive
          </h2>
          <p className="mt-2 text-sm text-ink-50">
            Professional report with photos, measurements and complete details.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Cover */}
            <div className="overflow-hidden rounded-xl bg-horizon-deep p-5 text-clear shadow-elevated">
              <Logo variant="mono" height={22} />
              <p className="eyebrow mt-5 text-[10px] text-sky">
                {REPORT_SAMPLE.title}
              </p>
              <p className="mt-1 text-xs text-sky-soft/70">
                {REPORT_SAMPLE.address}
              </p>
              <Photo
                src={REPORT_SAMPLE.houseImage}
                alt="Project home"
                className="mt-4 aspect-[16/10] rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between border-t border-clear/10 pt-3 text-[11px] text-sky-soft/70">
                <span>Prepared for {REPORT_SAMPLE.preparedFor}</span>
                <span>{REPORT_SAMPLE.date}</span>
              </div>
            </div>

            {/* Panels */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-50">
                  Aerial Overview
                </p>
                <div className="mt-3 flex gap-3">
                  <Photo
                    src={REPORT_SAMPLE.aerialImage}
                    alt="Aerial overview"
                    className="aspect-square w-24 shrink-0 rounded-md"
                  />
                  <Bars rows={4} className="flex-1" />
                </div>
              </div>

              <div className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-50">
                  Material Breakdown
                </p>
                <Bars rows={5} className="mt-3" />
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            View Sample Report Pages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
