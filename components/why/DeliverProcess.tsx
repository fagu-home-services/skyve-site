import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { DELIVER_STEPS } from "@/lib/why-data";

export function DeliverProcess() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-[300px_1fr]">
        <div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-horizon sm:text-3xl">
            See How We Deliver A Better Roofing Experience
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-50">
            From your first estimate to long-term support, we&apos;re with you
            every step of the way.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
          >
            Our Process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {DELIVER_STEPS.map((step) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                  {step.n}
                </span>
                <Icon name={step.icon} className="h-6 w-6 text-ridge lg:mt-3" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-horizon">{step.title}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-50">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
