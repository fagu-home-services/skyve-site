import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { STORM_SERVICES, INSURANCE_CLAIM } from "@/lib/storm-data";

export function StormServicesInsurance() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Services */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Storm Damage Repair Services
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STORM_SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-horizon">{s.title}</h3>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance claim */}
        <div className="grid gap-6 rounded-2xl border border-mist bg-clear p-6 shadow-card sm:grid-cols-[1.2fr_1fr] lg:p-7">
          <div>
            <h2 className="font-serif text-xl font-bold text-horizon">
              {INSURANCE_CLAIM.title}
            </h2>
            <p className="mt-2 text-sm text-ink-70">{INSURANCE_CLAIM.text}</p>
            <ul className="mt-4 space-y-2.5">
              {INSURANCE_CLAIM.checklist.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
            >
              Learn More About Our Claim Process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Report mock */}
          <div className="rounded-xl bg-horizon-deep p-2 shadow-elevated">
            <div className="rounded-lg bg-clear p-3">
              <p className="text-[9px] font-bold uppercase tracking-wider text-ink-50">
                Storm Damage Report
              </p>
              <Photo src={INSURANCE_CLAIM.reportImage} alt="Report" className="mt-2 aspect-[16/9] rounded" />
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ridge" />
                    <span className="h-1.5 flex-1 rounded-full bg-mist" />
                    <span className="h-1.5 w-6 rounded-full bg-mist" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
