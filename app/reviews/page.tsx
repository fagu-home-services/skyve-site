import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Award, ClipboardCheck, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Skyve Roofing & Exteriors is a new company built on 20+ years of roofing experience. We're earning our reputation one roof at a time — no inflated review counts, verified on Google as we complete work across King & Snohomish County.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Reviews", href: "" },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    desc: `Washington license #${COMPANY.license}, fully insured on every job — the first thing to check on any roofer.`,
  },
  {
    icon: Award,
    title: `${COMPANY.warrantyYears}-year workmanship warranty`,
    desc: "Backed in writing. If our work ever fails, we come back and make it right — the guarantee that matters most while our reviews are still growing.",
  },
  {
    icon: ClipboardCheck,
    title: "Owner-led, documented work",
    desc: "The owners are on the roof, and every job is documented photo by photo — a permanent record you keep.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-horizon-deep pt-20 lg:pt-24">
          <div className="container-skyve flex flex-wrap items-center gap-1.5 py-3 text-xs text-mist-soft/70">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-clear">{c.label}</Link>
                ) : (
                  <span className="text-clear">{c.label}</span>
                )}
                {i < CRUMBS.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        </div>

        {/* Honest reputation hero */}
        <section className="bg-horizon-deep pb-16 text-clear lg:pb-24">
          <div className="container-skyve max-w-3xl">
            <p className="eyebrow text-accent">New name. Not new to roofing.</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] sm:text-5xl">
              We&apos;d rather earn your trust than fake it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist-soft/90">
              Skyve is a new company, so we won&apos;t pretend to have hundreds of reviews. What we
              have is more than {COMPANY.yearsCombined} years of roofs behind us and one promise: do
              your job so well you&apos;ll <em>want</em> to tell your neighbors. As we complete work
              across {COMPANY.serviceArea}, verified reviews will live right here — real names, real
              homes, nothing inflated.
            </p>
            <p className="mt-4 text-sm text-mist-soft/60">
              Our Google Business profile is currently being verified.
            </p>
          </div>
        </section>

        {/* What backs the work today */}
        <section className="bg-clear py-16 lg:py-24">
          <div className="container-skyve">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-ridge">What backs your roof today</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
                Proof you can check right now
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {TRUST.map((t) => (
                <div key={t.title} className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft">
                    <t.icon className="h-6 w-6 text-ridge" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-horizon">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-70">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-mist-soft py-16 lg:py-20">
          <div className="container-skyve max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
              Be one of our first reviews
            </h2>
            <p className="mt-4 text-ink-70">
              Get an honest, itemized estimate — no pressure. If we earn your business, we&apos;ll
              earn your review the right way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate/instant"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
              >
                Get My Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-7 py-3.5 text-sm font-semibold text-horizon transition-colors hover:border-ridge"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
