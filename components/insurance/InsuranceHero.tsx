import Link from "next/link";
import { ArrowRight, Play, Star, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { INSURANCE_HERO_IMAGE, WORK_FOR_YOU } from "@/lib/insurance-data";

const FIELDS = ["Full Name", "Phone Number", "Email Address", "Property Address"];

export function InsuranceHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={INSURANCE_HERO_IMAGE}
        alt="Insurance claims assistance for roof damage"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative grid items-center gap-10 pt-24 pb-14 lg:grid-cols-[1fr_minmax(420px,520px)] lg:pt-28">
        {/* Left */}
        <div className="text-clear">
          <div className="pb-5">
            <Breadcrumb
              variant="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Insurance Claims Assistance" },
              ]}
            />
          </div>
          <p className="eyebrow text-sky">Insurance Claims Assistance</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            We Handle the Claim. You Get the Coverage.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Filing an insurance claim can be stressful and confusing. We make it
            simple and help you get the coverage you deserve.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Help With My Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              How It Works <Play className="h-4 w-4" />
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
            <span className="text-sky-soft/80">Insurance Claim Experts</span>
          </div>
        </div>

        {/* Card: checklist + form */}
        <div className="grid gap-0 overflow-hidden rounded-2xl bg-clear shadow-elevated sm:grid-cols-2">
          <div className="bg-mist-soft p-6">
            <p className="font-serif text-sm font-bold leading-snug text-horizon">
              {WORK_FOR_YOU.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {WORK_FOR_YOU.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-ink-70">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6">
            <p className="text-sm font-bold text-horizon">Claim Support Form</p>
            <div className="mt-4 space-y-2.5">
              {FIELDS.map((f) => (
                <input
                  key={f}
                  type="text"
                  placeholder={f}
                  className="w-full rounded-lg border border-mist bg-mist-soft px-3 py-2 text-xs text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
                />
              ))}
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                Get Claim Support <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[10px] text-ink-50">
                Free consultation. No obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
