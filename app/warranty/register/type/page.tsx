import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Icon } from "@/components/shared/Icon";
import { WRHero } from "@/components/warranty-register/WRHero";
import { WRSteps } from "@/components/warranty-register/WRSteps";
import { WR_TYPES } from "@/lib/warranty-register-data";

export const metadata: Metadata = {
  title: "Select Warranty Type — Register Your Warranty | Skyve Roofing & Exteriors",
  description:
    "Choose the type of warranty you would like to register — manufacturer, workmanship, extended, system, or a custom warranty agreement.",
};

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Warranty", href: "/warranty" },
  { label: "Register", href: "/warranty/register" },
  { label: "Warranty Type" },
];

export default function WarrantyTypePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <WRHero
          title="Select Warranty Type"
          desc="Choose the type of warranty you would like to register."
          crumbs={CRUMBS}
        />

        <section className="bg-clear py-10 lg:py-14">
          <div className="container-skyve space-y-8">
            <div className="-mt-16 lg:-mt-20">
              <WRSteps active={1} />
            </div>

            {/* Warranty type cards */}
            <div className="space-y-4">
              {WR_TYPES.map((t, i) => (
                <button
                  key={t.title}
                  type="button"
                  className={`flex w-full items-center gap-5 rounded-2xl border bg-clear p-5 text-left shadow-card transition-colors hover:border-ridge ${i === 0 ? "border-ridge ring-1 ring-ridge/20" : "border-mist"}`}
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${t.iconBg} text-clear`}>
                    <Icon name={t.icon} className="h-7 w-7" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-horizon">{t.title}</h3>
                      {t.badge && <span className="rounded-full bg-ridge/12 px-2.5 py-0.5 text-[10px] font-semibold text-ridge">{t.badge}</span>}
                    </div>
                    <p className="mt-1 text-sm text-ink-70">{t.desc}</p>
                  </div>
                  <ul className="hidden shrink-0 space-y-1 text-xs text-ink-70 sm:block">
                    <li><span className="text-ink-50">Coverage:</span> <span className="font-semibold text-horizon">{t.coverage}</span></li>
                    <li><span className="text-ink-50">Coverage Type:</span> <span className="font-semibold text-horizon">{t.type}</span></li>
                    <li><span className="text-ink-50">Provider:</span> <span className="font-semibold text-horizon">{t.provider}</span></li>
                  </ul>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ridge text-ridge">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between">
              <Link href="/warranty/register" className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-5 py-2.5 text-sm font-semibold text-horizon transition-colors hover:border-ridge">
                <ArrowLeft className="h-4 w-4" /> Back
              </Link>
              <Link href="/warranty/register" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
                Next: Property Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
