import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PROMISE_CARDS } from "@/lib/why-data";

export function FiveReasons() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <p className="eyebrow text-ridge">Our Promise</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Five Reasons Homeowners Choose Skyve
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PROMISE_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl border border-mist bg-clear p-6 text-center shadow-card"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={card.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-4 text-base font-bold text-horizon">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-50">
                {card.desc}
              </p>
              <Link
                href={card.cta.href}
                className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
              >
                {card.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
