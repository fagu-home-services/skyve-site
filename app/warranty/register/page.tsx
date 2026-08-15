import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone, Mail } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { WRHero } from "@/components/warranty-register/WRHero";
import { WRSteps } from "@/components/warranty-register/WRSteps";
import { WR_WHY, WR_NEED, WR_HELP } from "@/lib/warranty-register-data";

export const metadata: Metadata = {
  title: "Register Your Warranty | Skyve Roofing & Exteriors",
  description:
    "Register your Skyve warranty to protect your investment and ensure full coverage and support. Registration takes less than 5 minutes.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Warranty", href: "/warranty" },
  { label: "Register" },
];

export default function WarrantyRegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <WRHero
          title="Register Your Warranty"
          desc="Registering your warranty helps protect your investment and ensures you receive full coverage and support."
          crumbs={CRUMBS}
        />

        <section className="bg-clear py-10 lg:py-14">
          <div className="container-skyve space-y-10">
            {/* Steps */}
            <div className="-mt-16 lg:-mt-20">
              <WRSteps active={1} />
            </div>

            {/* Why register */}
            <div>
              <h2 className="text-center font-serif text-2xl font-bold text-horizon">{WR_WHY.title}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {WR_WHY.items.map((it) => (
                  <div key={it.title} className="rounded-2xl border border-mist bg-clear p-5 text-center shadow-card">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft">
                      <Icon name={it.icon} className="h-6 w-6 text-ridge" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-horizon">{it.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-70">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What you'll need */}
            <div className="rounded-2xl border border-mist bg-mist-soft/40 p-6 lg:p-8">
              <h2 className="text-center font-serif text-xl font-bold text-horizon">{WR_NEED.title}</h2>
              <p className="mx-auto mt-1 max-w-xl text-center text-sm text-ink-70">{WR_NEED.subtitle}</p>
              <div className="mx-auto mt-6 grid max-w-2xl gap-x-10 gap-y-3 sm:grid-cols-2">
                {WR_NEED.items.map((n) => (
                  <div key={n} className="flex items-start gap-2.5 text-sm text-ink-70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {n}
                  </div>
                ))}
              </div>
              <div className="mt-7 text-center">
                <Link href={WR_NEED.button.href} className="inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
                  {WR_NEED.button.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-xs text-ink-50">{WR_NEED.note}</p>
              </div>
            </div>

            {/* Need help */}
            <div className="grid items-center gap-6 rounded-2xl bg-horizon-deep p-6 text-clear lg:grid-cols-[1.4fr_1fr_1fr] lg:p-8">
              <div className="flex items-center gap-4">
                <AvatarPlaceholder initials={WR_HELP.initials} className="h-12 w-12 shrink-0 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-clear">{WR_HELP.title}</p>
                  <p className="mt-0.5 text-xs text-mist-soft/80">{WR_HELP.desc}</p>
                </div>
              </div>
              <a href={`tel:${WR_HELP.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-sky" />
                <span>
                  <span className="block text-sm font-semibold text-clear">{WR_HELP.phone}</span>
                  <span className="block text-[11px] text-mist-soft/70">{WR_HELP.phoneHours}</span>
                </span>
              </a>
              <a href={`mailto:${WR_HELP.email}`} className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-sky" />
                <span>
                  <span className="block text-sm font-semibold text-clear">{WR_HELP.email}</span>
                  <span className="block text-[11px] text-mist-soft/70">{WR_HELP.emailNote}</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
