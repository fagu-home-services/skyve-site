import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact-data";
import { ServiceAreaMap, MAP_LINK } from "./ServiceAreaMap";
import { liveHref } from "@/lib/launch-phase";

const INFO_ICON = { phone: Phone, mail: Mail, pin: MapPin, clock: Clock } as const;

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist-soft to-clear pt-24 pb-16 lg:pt-28">
      <div className="container-skyve relative grid items-stretch gap-10 lg:grid-cols-[1fr_1.05fr]">
        {/* Left */}
        <div>
          <p className="eyebrow text-ridge">Contact Skyve</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] text-horizon sm:text-5xl">
            Let&apos;s Talk About Your Roof.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-70">
            Whether you need an estimate, inspection, repair, or just have
            questions, our team is ready to help.
          </p>

          {/* trust row */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-ink-70">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-accent" /> 25-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-ridge" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-ridge" /> Serving Washington Homeowners
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-ridge" /> 20+ Years Combined
            </span>
          </div>

          {/* info cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CONTACT_INFO.map((c) => {
              const I = INFO_ICON[c.icon as keyof typeof INFO_ICON];
              return (
                <div key={c.title} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                  <I className="h-5 w-5 text-ridge" />
                  <p className="mt-2 text-xs font-semibold text-horizon">{c.title}</p>
                  <p className="mt-1 text-xs font-medium text-ridge">{c.value}</p>
                  {c.sub && <p className="text-[11px] text-ink-50">{c.sub}</p>}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
            >
              Send Us a Message <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={liveHref("/services/roof-inspection", "/contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
            >
              <CalendarDays className="h-4 w-4" /> Schedule Inspection
            </Link>
          </div>
        </div>

        {/* Service-area map */}
        <ServiceAreaMap className="min-h-[440px] rounded-2xl border border-mist shadow-elevated lg:min-h-full">
          {/* Coverage badge */}
          <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-xl bg-clear/95 px-4 py-3 shadow-elevated backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-ridge">
              Service Area
            </p>
            <p className="mt-0.5 font-serif text-lg font-bold text-horizon">
              King &amp; Snohomish County
            </p>
            <p className="text-[11px] text-ink-50">20+ cities across the Puget Sound</p>
          </div>

          {/* Open in Google Maps */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-lg bg-clear/95 px-3.5 py-2 text-xs font-semibold text-ridge shadow-elevated backdrop-blur-sm transition-colors hover:text-accent"
          >
            Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </ServiceAreaMap>
      </div>
    </section>
  );
}
