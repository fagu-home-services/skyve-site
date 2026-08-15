import Link from "next/link";
import { MessagesSquare, ArrowRight, Phone } from "lucide-react";
import { FTC_CTA } from "@/lib/ftc-data";

export function FTCCTA() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve">
        <div className="grid items-center gap-6 rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[auto_1fr_auto] lg:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-clear/15">
            <MessagesSquare className="h-6 w-6 text-sky" />
          </span>
          <div>
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{FTC_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{FTC_CTA.desc}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={FTC_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {FTC_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="flex items-center gap-2 text-sm text-mist-soft/80">
              <Phone className="h-4 w-4 text-sky" /> or call{" "}
              <span className="font-semibold text-clear">{FTC_CTA.phone}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
