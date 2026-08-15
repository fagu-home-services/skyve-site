import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { LI_CTA } from "@/lib/licenses-data";

export function LICTA() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve">
        <div className="grid items-center gap-6 rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[auto_1fr_auto] lg:p-10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-clear/15">
            <ShieldCheck className="h-7 w-7 text-sky" />
          </span>
          <div>
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{LI_CTA.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-mist-soft/80">{LI_CTA.desc}</p>
          </div>
          <div className="text-center">
            <Link
              href={LI_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {LI_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-mist-soft/70">or call {LI_CTA.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
