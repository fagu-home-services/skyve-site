import Link from "next/link";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { MAINTENANCE_HERO_IMAGE, HERO_TRUST, DASHBOARD } from "@/lib/maintenance-data";

export function MaintenanceHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MAINTENANCE_HERO_IMAGE}
        alt="Roof maintenance program"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative grid items-center gap-10 pt-24 pb-14 lg:grid-cols-[1fr_minmax(340px,440px)] lg:pt-28">
        {/* Left */}
        <div className="text-clear">
          <div className="pb-5">
            <Breadcrumb
              variant="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Roof Maintenance" },
              ]}
            />
          </div>
          <p className="eyebrow text-sky">Roof Maintenance Program</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Protect Your Roof Before Problems Start.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Regular maintenance helps extend roof life, prevent expensive repairs,
            and protect your investment year after year.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Schedule Maintenance Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              View Maintenance Plans
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-success text-success" />
                ))}
              </span>
              {COMPANY.rating} ({COMPANY.reviewCount} Reviews)
            </span>
            {HERO_TRUST.map((t) => (
              <span key={t} className="text-sky-soft/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Roof Health Dashboard */}
        <div className="rounded-2xl bg-clear p-6 shadow-elevated">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-serif text-lg font-bold text-horizon">
              Roof Health Dashboard
            </h2>
            <Link href="#" className="text-xs font-semibold text-ridge hover:text-accent">
              View Full Report →
            </Link>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-50">
            <MapPin className="h-3.5 w-3.5 text-ridge" /> {DASHBOARD.address}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="row-span-2 flex flex-col justify-center rounded-xl bg-mist-soft p-4">
              <p className="text-[11px] text-ink-50">Roof Score</p>
              <p className="font-serif text-4xl font-extrabold text-success">
                {DASHBOARD.score}
                <span className="text-lg text-ink-50">/100</span>
              </p>
              <p className="mt-1 text-xs font-semibold text-success">
                {DASHBOARD.condition}
              </p>
            </div>
            {DASHBOARD.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-mist p-3">
                <p className="text-[10px] text-ink-50">{s.label}</p>
                <p className="mt-0.5 flex items-center gap-1 text-sm font-bold text-horizon">
                  {s.active && <span className="h-2 w-2 rounded-full bg-success" />}
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-lg bg-mist-soft/70 p-3 text-xs leading-relaxed text-ink-70">
            {DASHBOARD.note}
          </p>
        </div>
      </div>
    </section>
  );
}
