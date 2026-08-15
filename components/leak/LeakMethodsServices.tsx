import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { LEAK_METHODS, LEAK_SERVICES } from "@/lib/leak-data";

export function LeakMethodsServices() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Methods */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Advanced Leak Detection Methods
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEAK_METHODS.map((m) => (
              <div
                key={m.title}
                className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
              >
                <Photo src={m.image} alt={m.title} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold text-horizon">{m.title}</h3>
                  <p className="mt-1.5 text-xs leading-snug text-ink-50">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
          <h2 className="font-serif text-xl font-bold text-horizon">
            Leak Repair Services
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {LEAK_SERVICES.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" />
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-ridge/30 px-4 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            View All Repair Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
