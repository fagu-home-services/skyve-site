import Link from "next/link";
import { Plus, Phone } from "lucide-react";
import { ESTIMATE_FAQ } from "@/lib/estimate-data";

type Item = { q: string; a: string };

function FaqItem({ item }: { item: Item }) {
  return (
    <details className="group rounded-xl border border-mist bg-clear px-5 open:shadow-card">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-horizon marker:hidden">
        {item.q}
        <Plus className="h-4 w-4 shrink-0 text-ridge transition-transform duration-200 group-open:rotate-45" />
      </summary>
      <p className="pb-4 text-sm leading-relaxed text-ink-70">{item.a}</p>
    </details>
  );
}

export function EstimateFAQ() {
  const left = ESTIMATE_FAQ.filter((_, i) => i % 2 === 0);
  const right = ESTIMATE_FAQ.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-2 text-sm text-ink-50">
              We&apos;re here to help you make the best decision for your home.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-ridge/30 bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            <Phone className="h-4 w-4" /> Schedule a Call
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            {left.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
          <div className="space-y-4">
            {right.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
