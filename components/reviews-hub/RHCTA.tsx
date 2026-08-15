import Link from "next/link";
import { MessageSquareQuote, Check, ArrowRight } from "lucide-react";
import { RH_CTA } from "@/lib/reviews-hub-data";

export function RHCTA() {
  return (
    <section className="bg-clear pb-14">
      <div className="container-skyve">
        <div className="grid items-center gap-6 rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[auto_1.3fr_1fr_auto] lg:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-clear/15">
            <MessageSquareQuote className="h-6 w-6 text-sky" />
          </span>
          <div>
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{RH_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{RH_CTA.desc}</p>
          </div>
          <ul className="space-y-2">
            {RH_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <div>
            <Link
              href={RH_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {RH_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
