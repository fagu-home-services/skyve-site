import Link from "next/link";
import { ChevronRight, Phone, ArrowRight, MapPin } from "lucide-react";
import { Photo, resolveImg } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { COMPANY } from "@/lib/company";
import {
  CITY_SERVICES, CITY_PROCESS, CITY_BADGES, type CityData,
} from "@/lib/city-data";

export function CityPage({ city }: { city: CityData }) {
  // Honest stats (no fabricated rating / "2,000+ roofs" / "15+ years").
  const cityStats = [
    { icon: "shield", value: "Licensed", label: "& Insured" },
    { icon: "badge", value: `${COMPANY.warrantyYears}-Year`, label: "Workmanship Warranty" },
    { icon: "home", value: COMPANY.yearsCombined, label: "Years Combined" },
    { icon: "users", value: "Owner-Led", label: "Every Project" },
    { icon: "mappin", value: "Local", label: `${city.name} Area` },
  ];
  const trustPoints = [
    { icon: "shield", t: "Licensed & insured", d: `WA license #${COMPANY.license}` },
    { icon: "badge", t: `${COMPANY.warrantyYears}-year workmanship warranty`, d: "Backed in writing" },
    { icon: "users", t: "Owner-led & documented", d: "Photos on every job" },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            <Link href="/" className="hover:text-clear">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/service-area" className="hover:text-clear">Cities</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-clear">{city.name}, {city.state}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-horizon-deep text-clear">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resolveImg(city.heroImage, `${city.name} home`)} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/70 to-horizon-deep/20" />
          </div>
          <div className="container-skyve relative py-12 lg:py-16">
            <div className="max-w-xl">
              <p className="eyebrow text-accent">Roofing Company In</p>
              <h1 className="mt-2 font-serif text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
                {city.name}, {city.state}
              </h1>
              <p className="mt-3 text-lg font-semibold text-clear">{city.tagline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-soft/80">{city.heroDesc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/instant-estimate/" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
                  Get Free Roof Estimate <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-clear/25 px-6 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10">
                  <Phone className="h-4 w-4" /> Call {COMPANY.phone}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist-soft/85">
                <span className="font-semibold text-clear">Licensed &amp; Insured</span>
                <span className="text-mist-soft/40">·</span>
                <span>{COMPANY.warrantyYears}-Year Warranty</span>
                <span className="text-mist-soft/40">·</span>
                <span>{COMPANY.yearsCombined} years combined</span>
              </div>
            </div>
          </div>

          {/* Stats bar (honest) */}
          <div className="relative border-t border-clear/10">
            <div className="container-skyve grid grid-cols-2 gap-6 py-6 sm:grid-cols-3 lg:grid-cols-5">
              {cityStats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clear/10">
                    <Icon name={s.icon} className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-clear">{s.value}</p>
                    <p className="text-[11px] text-mist-soft/60">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-clear py-16 lg:py-20">
          <div className="container-skyve">
            <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
              {city.servicesLabel ?? "Roofing Services"} <span className="text-ridge">in {city.name}</span>
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {CITY_SERVICES.map((s) => (
                <div key={s.title} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
                  <div className="relative">
                    <Photo src={s.image} alt={s.title} className="aspect-[16/10]" />
                    <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-horizon-deep/85">
                      <Icon name={s.icon} className="h-4 w-4 text-clear" />
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-horizon">{s.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-ink-50">{s.desc}</p>
                    <Link href={s.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Local trusted banner */}
        <section className="bg-clear pb-16">
          <div className="container-skyve">
            <div className="grid overflow-hidden rounded-2xl bg-horizon-deep text-clear lg:grid-cols-[280px_1fr]">
              <Photo src={city.bannerImage} alt={`${city.name} skyline`} className="hidden h-full min-h-48 lg:block" />
              <div className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="font-serif text-xl font-bold">{city.bannerHeadline}</h2>
                  <p className="mt-2 max-w-lg text-sm text-mist-soft/75">{city.proudText}</p>
                </div>
                <div className="flex flex-wrap gap-6">
                  {CITY_BADGES.map((b) => (
                    <div key={b.title} className="text-center">
                      <Icon name={b.icon} className="mx-auto h-7 w-7 text-accent" />
                      <p className="mt-1.5 text-xs font-bold uppercase text-clear">{b.title}</p>
                      <p className="text-[10px] text-mist-soft/60">{b.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-mist-soft/40 py-16 lg:py-20">
          <div className="container-skyve">
            <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
              Our Simple <span className="text-ridge">5-Step</span> Process
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {CITY_PROCESS.map((p) => (
                  <div key={p.n} className="text-center">
                    <div className="relative mx-auto w-fit">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mist bg-clear shadow-card">
                        <Icon name={p.icon} className="h-5 w-5 text-ridge" />
                      </span>
                      <span className="absolute -top-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                        {p.n}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xs font-bold text-horizon">{p.title}</h3>
                    <p className="mt-1 text-[10px] leading-snug text-ink-50">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-elevated">
                <h3 className="font-serif text-lg font-bold">Ready to Protect Your {city.name} Home?</h3>
                <p className="mt-1 text-sm text-mist-soft/70">Get a free, no-obligation roof estimate today.</p>
                <Link href="/instant-estimate/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                  Get Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={COMPANY.phoneHref} className="mt-4 flex items-center gap-2 text-sm font-semibold text-sky hover:text-clear">
                  <Phone className="h-4 w-4" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services available locally (gallery — no fabricated completed-job ratings) */}
        <section className="bg-clear py-16 lg:py-20">
          <div className="container-skyve">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
                Roofing Work <span className="text-ridge">in {city.name}</span>
              </h2>
              <Link href="/services" className="hidden items-center gap-1 text-sm font-semibold text-ridge hover:text-accent sm:inline-flex">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {city.projects.map((p) => (
                <article key={p.neighborhood} className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
                  <Photo src={p.image} alt={p.type} className="aspect-[16/10]" />
                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-ridge">{p.neighborhood} area</p>
                    <h3 className="mt-1 text-sm font-bold text-horizon">{p.type}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reputation (honest — no fabricated testimonials/rating) */}
        <section className="bg-clear pb-16">
          <div className="container-skyve">
            <div className="rounded-2xl bg-horizon-deep p-8 text-clear lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                <div>
                  <p className="eyebrow text-accent">New name. Not new to roofing.</p>
                  <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                    Why {city.name} homeowners can trust Skyve
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-soft/85">
                    We&apos;re a new company built on {COMPANY.yearsCombined} years of roofing
                    experience. We won&apos;t show inflated review counts — verified reviews will
                    appear as we complete work, and our Google profile is being verified. Here&apos;s
                    what backs your roof today.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {trustPoints.map((tp) => (
                      <div key={tp.t} className="rounded-xl bg-clear/5 p-4 ring-1 ring-clear/10">
                        <Icon name={tp.icon} className="h-6 w-6 text-accent" />
                        <p className="mt-2 text-sm font-bold text-clear">{tp.t}</p>
                        <p className="mt-0.5 text-xs text-mist-soft/60">{tp.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center rounded-xl bg-clear/5 p-6 ring-1 ring-clear/10">
                  <h3 className="font-serif text-lg font-bold">Be one of our first reviews</h3>
                  <p className="mt-1 text-sm text-mist-soft/70">
                    Get an honest, itemized estimate — no pressure.
                  </p>
                  <Link href="/instant-estimate/" className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                    Get Free Estimate <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods bar */}
        <section className="bg-ridge py-6 text-clear">
          <div className="container-skyve flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clear/15">
                <MapPin className="h-5 w-5 text-clear" />
              </span>
              <div>
                <p className="text-sm font-bold">Proudly Serving All {city.name} Neighborhoods</p>
                <p className="text-xs text-sky-soft/90">{city.neighborhoods.join(" • ")}</p>
              </div>
            </div>
            <Link href="/service-area" className="inline-flex items-center gap-2 rounded-lg bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-mist-soft">
              <MapPin className="h-4 w-4" /> Check Service Map
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
