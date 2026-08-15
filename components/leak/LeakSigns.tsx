import Link from "next/link";
import { Check, ArrowRight, Phone, Bell, Home } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import { LEAK_SIGNS } from "@/lib/leak-data";

export function LeakSigns() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        {/* Signs */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
          <h2 className="text-center font-serif text-xl font-bold text-horizon sm:text-2xl">
            Common Signs You May Have a Roof Leak
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {LEAK_SIGNS.map((s) => (
              <div key={s.label}>
                <div className="relative overflow-hidden rounded-lg">
                  <Photo src={s.image} alt={s.label} className="aspect-square" />
                  <span className="absolute -bottom-2 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-accent shadow-card">
                    <Check className="h-3.5 w-3.5 text-clear" />
                  </span>
                </div>
                <p className="mt-3 text-center text-[11px] font-medium leading-snug text-horizon">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl bg-mist-soft p-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Home className="h-8 w-8 shrink-0 text-ridge" />
              <div>
                <p className="text-sm font-bold text-horizon">
                  Not sure if you have a leak?
                </p>
                <p className="text-xs text-ink-50">
                  Our experts can inspect your roof and identify hidden leaks before
                  they cause major damage.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
            >
              Schedule Inspection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Emergency card */}
        <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <Bell className="h-8 w-8 text-accent" />
          <h3 className="mt-4 font-serif text-xl font-bold">
            Emergency Leak Repair Available
          </h3>
          <p className="mt-3 text-sm text-sky-soft/85">Leaky roof? We&apos;re on our way.</p>
          <p className="mt-2 text-sm text-sky-soft/70">
            Our team responds quickly to protect your home from further damage.
          </p>
          <a
            href={COMPANY.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center gap-1 text-sm font-semibold text-clear hover:text-sky"
          >
            Or Request Service Online <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
