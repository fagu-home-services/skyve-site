"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, MapPin, Award, ArrowRight, Lock, ClipboardCheck, BadgeCheck } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { HERO_IMAGE } from "@/lib/site-data";

const TRUST = [
  { icon: ShieldCheck, top: "Licensed & Insured", bottom: `WA #${COMPANY.license}` },
  { icon: BadgeCheck, top: `${COMPANY.warrantyYears}-Year Warranty`, bottom: "Workmanship" },
  { icon: ClipboardCheck, top: "Documented Work", bottom: "Photos + Roof Score" },
  { icon: Award, top: `${COMPANY.yearsCombined} Years`, bottom: "Combined experience" },
];

export function Hero() {
  const [addr, setAddr] = useState("");
  const router = useRouter();
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const t = addr.trim();
    router.push(t ? `/instant-estimate/?address=${encodeURIComponent(t)}` : "/instant-estimate/");
  };
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* Background */}
      <div className="absolute inset-0">
        {/* photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Modern Washington home at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/85 to-horizon-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep via-transparent to-horizon-deep/30" />
        {/* dusk glow */}
        <div className="absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-skyve relative grid items-center gap-12 pt-32 pb-20 lg:grid-cols-[1.1fr_minmax(360px,420px)] lg:pt-40 lg:pb-28">
        {/* Left */}
        <div className="text-clear">
          <p className="eyebrow text-sky">Veteran-owned · 20+ years on the roof</p>
          <h1 className="mt-5 font-serif text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
            20+ years on
            <br />
            the roof.
            <br />
            <span className="text-accent">Now working for you.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-sky-soft/90">
            Andre and Fabricio spent two decades building roofs for the big
            companies. Skyve is where they finally do it their way — honest
            pricing, documented work, and a 25-year workmanship warranty.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/instant-estimate/"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Instant Estimate
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-7 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              View Recent Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.top} className="flex items-start gap-2.5">
                <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-clear">{t.top}</p>
                  <p className="text-xs text-sky-soft/70">{t.bottom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estimate card */}
        <div className="rounded-2xl bg-clear p-7 shadow-elevated">
          <h2 className="font-serif text-2xl font-bold text-horizon">
            Get Your Roof Estimate
          </h2>
          <p className="mt-1 text-sm text-ink-50">Fast. Instant estimate. No pressure.</p>

          {/* Steps */}
          <div className="mt-6 flex items-center">
            {[1, 2, 3].map((n, i) => (
              <div key={n} className="flex flex-1 items-center last:flex-none">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    n === 1 ? "bg-ridge text-clear" : "bg-mist text-ink-50"
                  }`}
                >
                  {n}
                </div>
                {i < 2 && <div className="mx-2 h-0.5 flex-1 bg-mist" />}
              </div>
            ))}
          </div>

          <form onSubmit={go} className="mt-6">
            <label htmlFor="hero-address" className="text-sm font-semibold text-ink-90">
              1. Property Address
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-mist bg-mist-soft px-3.5 py-3 focus-within:border-ridge">
              <MapPin className="h-4 w-4 text-ink-50" />
              <input
                id="hero-address"
                type="text"
                value={addr}
                onChange={(e) => setAddr(e.target.value)}
                placeholder="Enter your property address"
                className="w-full bg-transparent text-sm text-ink-90 outline-none placeholder:text-ink-50"
              />
            </div>
            <p className="mt-2 text-xs text-ink-50">
              We&apos;ll use aerial data to measure your roof.
            </p>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-3.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              Next Step <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-50">
            <Lock className="h-3.5 w-3.5" />
            Your information is secure and never shared.
          </p>
        </div>
      </div>
    </section>
  );
}
