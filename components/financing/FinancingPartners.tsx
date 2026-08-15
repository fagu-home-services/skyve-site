import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FINANCING_PARTNERS } from "@/lib/financing-data";

export function FinancingPartners() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Financing Partners You Can Trust
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {FINANCING_PARTNERS.map((name) => (
            <span
              key={name}
              className="font-serif text-xl font-bold tracking-tight text-ink-50 transition-colors hover:text-horizon"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            Learn more about our financing partners <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
