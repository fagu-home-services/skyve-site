import Link from "next/link";
import { CheckCircle2, ChevronsLeftRight, CalendarDays } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  VENT_ATTIC_BEFORE,
  VENT_ATTIC_AFTER,
  UPGRADE_PROBLEMS,
  UPGRADE_SOLUTIONS,
  VENT_BENEFITS,
  CHECK_BALANCE,
  CHECK_BALANCE_IMAGE,
} from "@/lib/ventilation-data";

export function VentilationBenefitsCheck() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Before / after upgrade */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            Before &amp; After: Ventilation Upgrade
          </h2>
          <div className="relative mt-4 overflow-hidden rounded-xl">
            <div className="grid grid-cols-2">
              <div className="relative">
                <Photo src={VENT_ATTIC_BEFORE} alt="Before" className="aspect-[4/3]" />
                <span className="absolute left-2 top-2 rounded bg-danger px-1.5 py-0.5 text-[8px] font-bold uppercase text-clear">
                  Before
                </span>
              </div>
              <div className="relative">
                <Photo src={VENT_ATTIC_AFTER} alt="After" className="aspect-[4/3]" />
                <span className="absolute right-2 top-2 rounded bg-success px-1.5 py-0.5 text-[8px] font-bold uppercase text-clear">
                  After
                </span>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear text-ridge shadow-card">
              <ChevronsLeftRight className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {UPGRADE_PROBLEMS.map((p, i) => (
              <div key={p} className="contents">
                <span className="flex items-center gap-1.5 text-[11px] text-ink-70">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-ridge" /> {p}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-ink-70">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" /> {UPGRADE_SOLUTIONS[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            Ventilation Benefits
          </h2>
          <ul className="mt-5 space-y-4">
            {VENT_BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-soft">
                  <Icon name={b.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{b.title}</p>
                  <p className="text-xs text-ink-50">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Check & balance */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="font-serif text-lg font-bold text-horizon">
            We Check &amp; Balance
          </h2>
          <ul className="mt-5 space-y-2.5">
            {CHECK_BALANCE.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {c}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            Schedule Inspection <CalendarDays className="h-4 w-4" />
          </Link>
          <Photo
            src={CHECK_BALANCE_IMAGE}
            alt="Attic ventilation inspection"
            className="mt-4 aspect-[16/10] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
