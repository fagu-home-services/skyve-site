import Link from "next/link";
import { Phone, CalendarDays, Star, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { LEAK_HERO_IMAGE, RAPID_RESPONSE } from "@/lib/leak-data";

export function LeakHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LEAK_HERO_IMAGE}
        alt="Roof leak repair specialist at work"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      {/* Rapid response card */}
      <div className="absolute right-6 top-1/2 hidden w-64 -translate-y-1/2 rounded-2xl bg-horizon-deep/85 p-6 text-clear shadow-elevated backdrop-blur-sm lg:block">
        <Clock className="h-7 w-7 text-sky" />
        <p className="mt-4 font-serif text-lg font-bold">{RAPID_RESPONSE.title}</p>
        <ul className="mt-3 space-y-2">
          {RAPID_RESPONSE.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-sky-soft/90">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky" /> {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-clear/10 pt-3 text-xs leading-relaxed text-sky-soft/70">
          {RAPID_RESPONSE.note}
        </p>
      </div>

      <div className="container-skyve relative pt-24 pb-12 lg:pt-28">
        <div className="pb-5">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Roof Leak Repair" },
            ]}
          />
        </div>

        <div className="max-w-xl text-clear">
          <p className="eyebrow text-sky">Roof Leak Repair</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Find It. Fix It. Protect Your Home.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Fast, accurate leak detection and lasting repairs to stop water damage
            at the source.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
            </a>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Schedule Leak Inspection <CalendarDays className="h-4 w-4" />
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
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsExperience} Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky" /> Licensed &amp; Insured
            </span>
            <span className="text-sky-soft/80">Emergency Service Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
