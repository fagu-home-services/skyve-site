import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, ArrowRight, Award, ShieldCheck, Clock, Ruler, FileText, CheckCircle2, MapPin,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";

/* Paid-traffic landing page. Deliberately has NO site navigation: the only
   ways out are the estimate CTA, the phone, and the legal links. Every CTA
   points to /estimate/instant, where the lead form lives.
   noindex: ad landing pages shouldn't compete with the real site in search. */
export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Skyve Roofing" template
  title: { absolute: "Free Roof Estimate in 60 Seconds | Skyve Roofing & Exteriors" },
  description:
    "Get a free, itemized roof estimate in under 60 seconds — measured from aerial data, priced with real local project history. Serving King & Snohomish County, WA.",
  robots: { index: false, follow: false },
};

const CTA = "/estimate/instant";

const TRUST = [
  { icon: Award, label: `${COMPANY.warrantyYears}-year warranty`, sub: "Workmanship" },
  { icon: ShieldCheck, label: "Licensed & insured", sub: `Lic. ${COMPANY.license}` },
  { icon: Clock, label: `${COMPANY.yearsCombined} years`, sub: "combined experience" },
  { icon: MapPin, label: COMPANY.serviceArea, sub: "Washington" },
];

const STEPS = [
  { n: 1, icon: MapPin, title: "Enter your address", desc: "No site visit needed to get started — just your address." },
  { n: 2, icon: Ruler, title: "We measure from the air", desc: "Aerial imagery gives us your exact roof size and pitch." },
  { n: 3, icon: FileText, title: "Get an itemized estimate", desc: "Real local pricing, line by line. No hidden fees, no pressure." },
];

const INCLUDED = [
  "Exact roof measurements from aerial data",
  "Line-by-line pricing — materials and labor separated",
  "Options at multiple investment levels",
  "A real human follow-up within 1 business day",
];

const FAQ = [
  { q: "Is the estimate really free?", a: "Yes. There's no cost and no obligation. You get the numbers and decide what to do with them." },
  { q: "Do I have to be home?", a: "No. We start from aerial measurements of your address, so nothing is scheduled until you want it." },
  { q: "How fast do I hear back?", a: "You'll get your estimate started immediately, and a member of our team follows up within one business day." },
  { q: "What areas do you serve?", a: `We serve ${COMPANY.serviceAreaLong}.` },
];

function CtaButton({ children = "Get My Free Estimate", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Link
      href={CTA}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-base font-bold text-clear shadow-card transition-colors hover:bg-accent-hover ${className}`}
    >
      {children} <ArrowRight className="h-5 w-5" />
    </Link>
  );
}

export default function FreeEstimateLanding() {
  return (
    <>
      {/* Minimal header — logo, phone, CTA. No navigation. */}
      <header className="sticky top-0 z-30 border-b border-mist bg-clear/95 backdrop-blur">
        <div className="container-skyve flex h-[68px] items-center justify-between gap-4">
          <Logo variant="color" height={32} />
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 text-sm font-bold text-ridge transition-colors hover:text-accent sm:inline-flex"
            >
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
            <Link
              href={CTA}
              className="rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-clear transition-colors hover:bg-accent-hover"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-horizon-deep text-clear">
          <Photo
            seed="lp-hero"
            alt="Modern Washington home at dusk"
            priority
            className="absolute inset-0 h-full w-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/55" />
          <div className="container-skyve relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="eyebrow text-accent">Free · No obligation</p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.08] sm:text-5xl">
                Your roof estimate.
                <br />
                In under 60 seconds.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-mist-soft/85">
                Skip the sales visit. Enter your address and we&apos;ll measure your roof from aerial
                data and send an itemized estimate built on real local project history.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton />
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-clear/30 px-6 py-4 text-base font-semibold text-clear transition-colors hover:border-clear hover:bg-clear/10"
                >
                  <Phone className="h-5 w-5" /> {COMPANY.phone}
                </a>
              </div>
              <p className="mt-4 text-sm text-mist-soft/70">
                No cost · No pressure · Response within 1 business day
              </p>
            </div>

            {/* Trust card */}
            <div className="rounded-2xl border border-clear/15 bg-clear/[0.07] p-6 backdrop-blur-sm lg:ml-auto lg:max-w-sm">
              <p className="text-sm font-bold text-clear">Why homeowners pick Skyve</p>
              <ul className="mt-4 space-y-3">
                {INCLUDED.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-mist-soft/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 border-t border-clear/15 pt-4 text-sm text-mist-soft/85">
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
                <span>Licensed &amp; insured · {COMPANY.warrantyYears}-year workmanship warranty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-mist bg-mist-soft">
          <div className="container-skyve grid grid-cols-2 gap-6 py-7 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <t.icon className="h-5 w-5 text-ridge" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-horizon">{t.label}</p>
                  <p className="truncate text-xs text-ink-50">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-clear py-16 lg:py-20">
          <div className="container-skyve">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-ridge">How it works</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
                Three steps. No sales visit.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ridge/10">
                      <s.icon className="h-5 w-5 text-ridge" />
                    </span>
                    <span className="font-mono text-sm font-bold text-accent">0{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-horizon">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-70">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <CtaButton>Start My Free Estimate</CtaButton>
            </div>
          </div>
        </section>

        {/* Recent work */}
        <section className="bg-mist-soft py-16 lg:py-20">
          <div className="container-skyve">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-ridge">Recent work</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
                The work we do across {COMPANY.serviceArea}
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {["Roof Replacement", "Metal Roofing", "Siding & Gutters"].map((label) => (
                <div key={label} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
                  <Photo seed={`lp-${label}`} alt={label} className="aspect-[4/3]" />
                  <p className="px-5 py-4 text-sm font-bold text-horizon">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why trust a new company (honest — no fabricated reviews) */}
        <section className="bg-clear py-16 lg:py-20">
          <div className="container-skyve">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-ridge">Why homeowners trust us</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
                A new company, built on {COMPANY.yearsCombined} years of roofs
              </h2>
              <p className="mt-4 text-ink-70">
                We won&apos;t show you inflated review counts. What we bring is two decades of hands-on
                experience, licensed and insured work, and a warranty in writing.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "Licensed & insured", d: `Washington license #${COMPANY.license}, fully insured on every job.` },
                { icon: Award, t: `${COMPANY.warrantyYears}-year workmanship warranty`, d: "Backed in writing. If our work fails, we come back and make it right." },
                { icon: CheckCircle2, t: "Owner-led, documented work", d: "The owners are on the roof, and every job is documented photo by photo." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
                  <c.icon className="h-7 w-7 text-ridge" />
                  <p className="mt-4 font-serif text-lg font-bold text-horizon">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-70">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist-soft py-16 lg:py-20">
          <div className="container-skyve max-w-3xl">
            <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
              Questions, answered
            </h2>
            <dl className="mt-10 space-y-4">
              {FAQ.map((f) => (
                <div key={f.q} className="rounded-xl border border-mist bg-clear p-6 shadow-card">
                  <dt className="font-bold text-horizon">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-70">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-horizon-deep py-16 text-clear lg:py-20">
          <Photo seed="lp-cta" alt="" className="absolute inset-0 h-full w-full opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/60" />
          <div className="container-skyve relative text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              See your number before anyone knocks on your door.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist-soft/85">
              Free, itemized, and built from real local project data. It takes about a minute.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaButton />
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-clear/30 px-6 py-4 text-base font-semibold text-clear transition-colors hover:border-clear hover:bg-clear/10"
              >
                <Phone className="h-5 w-5" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer — legal links only (required by ad platforms) */}
      <footer className="bg-horizon py-8 text-clear">
        <div className="container-skyve flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <Logo variant="mono" height={26} />
            <p className="mt-2 text-xs text-mist-soft/70">
              {COMPANY.name} · Lic. {COMPANY.license} · {COMPANY.serviceAreaLong}
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs text-mist-soft/70">
            <a href={COMPANY.phoneHref} className="font-semibold text-clear hover:text-accent">
              {COMPANY.phone}
            </a>
            <Link href="/legal/privacy" className="hover:text-clear">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-clear">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
