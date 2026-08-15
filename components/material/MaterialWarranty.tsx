import { ShieldCheck, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialWarranty({ data }: { data: MaterialPage }) {
  const { warranty } = data;
  return (
    <section className="bg-mist-soft pb-16 lg:pb-20">
      <div className="container-skyve">
        <div className="grid items-center gap-6 rounded-2xl bg-horizon-deep p-7 text-clear shadow-card lg:grid-cols-[1.4fr_1.6fr_1fr] lg:p-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 shrink-0 text-sky" />
            <div>
              <h2 className="font-serif text-xl font-bold">{warranty.title}</h2>
              <p className="mt-1 text-xs text-sky-soft/70">{warranty.text}</p>
            </div>
          </div>

          <div
            className={`grid gap-3 ${
              warranty.tiers.length >= 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
            }`}
          >
            {warranty.tiers.map((t) => (
              <div key={t.label} className="rounded-lg bg-clear/5 p-3 text-center">
                <p className="font-serif text-base font-extrabold text-clear">{t.years}</p>
                <p className="text-[10px] text-sky-soft/70">{t.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <p className="text-sm font-semibold">Ask About Our Warranty Options</p>
            <a
              href={COMPANY.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2.5 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-clear"
            >
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
