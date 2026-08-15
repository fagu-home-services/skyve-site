import Link from "next/link";
import { Phone, ArrowRight, Zap } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import { STORM_DAMAGE_TYPES, STORM_EMERGENCY_TRUST } from "@/lib/storm-data";

export function StormDamageTypes() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Damage types */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Storms Can Cause Hidden Damage
          </h2>
          <p className="mt-2 max-w-lg text-sm text-ink-50">
            High winds, heavy rain, hail, and falling debris can cause significant
            damage to your roof—often hidden from view.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STORM_DAMAGE_TYPES.map((d) => (
              <div key={d.label}>
                <Photo src={d.image} alt={d.label} className="aspect-square rounded-lg" />
                <p className="mt-2 text-center text-[11px] font-medium leading-snug text-horizon">
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency 24/7 card */}
        <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <h3 className="font-serif text-xl font-bold">
            Emergency Roof Repair Available 24/7
          </h3>
          <p className="mt-3 text-sm text-sky-soft/80">
            If your roof has been damaged by a storm, call us immediately. We&apos;ll
            secure your home and prevent further damage.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/40 px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-clear/10"
            >
              Request Service Online <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-clear/10 pt-5 text-xs font-medium text-sky-soft/80">
            {STORM_EMERGENCY_TRUST.map((t) => (
              <span key={t.label} className="flex items-center gap-1.5">
                {t.icon === "zap" ? (
                  <Zap className="h-4 w-4 text-sky" />
                ) : (
                  <Icon name={t.icon} className="h-4 w-4 text-sky" />
                )}
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
