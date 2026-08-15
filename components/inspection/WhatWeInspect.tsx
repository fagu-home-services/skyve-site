import Link from "next/link";
import { CheckCircle2, CalendarDays, ArrowRight, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  WHAT_WE_INSPECT,
  INSPECTION_REPORT_IMAGE,
  INSPECTION_REPORT_OVERLAY,
  INSPECTION_OPTIONS,
} from "@/lib/inspection-data";

export function WhatWeInspect() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Checklist */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">What We Inspect</h2>
          <p className="mt-1 text-sm text-ink-50">
            Our comprehensive inspection covers every critical area of your roofing
            system.
          </p>
          <ul className="mt-4 space-y-2.5">
            {WHAT_WE_INSPECT.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            Schedule an Inspection <CalendarDays className="h-4 w-4" />
          </Link>
        </div>

        {/* Photo + report overlay */}
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          <Photo src={INSPECTION_REPORT_IMAGE} alt="Aerial roof view" className="h-full min-h-72" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-horizon-deep to-transparent p-5 pt-16">
            <div className="flex items-start gap-3 text-clear">
              <FileText className="mt-0.5 h-6 w-6 shrink-0 text-sky" />
              <div>
                <p className="text-sm font-bold">{INSPECTION_REPORT_OVERLAY.title}</p>
                <p className="mt-1 text-xs leading-snug text-sky-soft/80">
                  {INSPECTION_REPORT_OVERLAY.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div>
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-lg font-bold text-horizon">
              Roof Inspection Options
            </h2>
            <ul className="mt-4 space-y-4">
              {INSPECTION_OPTIONS.map((o) => (
                <li key={o.title} className="flex items-center gap-3 border-t border-mist pt-4 first:border-t-0 first:pt-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={o.icon} className="h-5 w-5 text-ridge" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-horizon">{o.title}</p>
                    <p className="text-xs text-ink-50">{o.desc}</p>
                  </div>
                  <span className="font-mono text-sm font-bold text-ridge">{o.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-horizon-deep p-5 text-clear">
            <div>
              <p className="text-sm font-bold">Have Insurance Concerns?</p>
              <p className="mt-1 text-xs text-sky-soft/70">
                We provide detailed inspection reports to support your insurance
                claims.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-clear/10 px-4 py-2.5 text-xs font-semibold text-clear transition-colors hover:bg-clear/20"
            >
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
