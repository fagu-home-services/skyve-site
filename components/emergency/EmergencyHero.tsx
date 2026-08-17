import Link from "next/link";
import { Phone, ArrowRight, Clock, ShieldCheck, Award } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { EMERGENCY_HERO_IMAGE } from "@/lib/emergency-data";

export function EmergencyHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={EMERGENCY_HERO_IMAGE}
        alt="Emergency roof repair after a storm"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      {/* 24/7 badge */}
      <div className="absolute right-8 top-1/2 hidden h-32 w-32 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-clear/40 text-center text-clear lg:flex">
        <span className="font-serif text-3xl font-extrabold">24/7</span>
        <span className="mt-1 text-[9px] uppercase tracking-wider text-sky-soft/80">
          We&apos;re Here
          <br />
          When You Need Us
        </span>
      </div>

      <div className="container-skyve relative pt-24 pb-12 lg:pt-28">
        <div className="pb-5">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Emergency Roof Repair" },
            ]}
          />
        </div>

        <div className="max-w-xl text-clear">
          <p className="eyebrow text-accent">Emergency Roof Repair</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Emergency Roof Repair When You Need Us Most.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Storm damage, sudden leaks, fallen trees – roofing emergencies
            can&apos;t wait. Skyve is ready 24/7 to protect your home and prevent
            further damage.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Request Emergency Service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" /> 24/7 Emergency Response
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsCombined} Years Combined
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <Award className="h-3.5 w-3.5 text-success" /> 25-Year Warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
