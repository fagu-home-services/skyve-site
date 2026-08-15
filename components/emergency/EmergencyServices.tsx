import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { EMERGENCY_SERVICES } from "@/lib/emergency-data";

export function EmergencyServices() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Emergency Roofing Services We Provide
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {EMERGENCY_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
            >
              <div className="relative">
                <Photo src={s.image} alt={s.title} className="aspect-[16/10]" />
                <span className="absolute bottom-0 left-4 flex h-9 w-9 translate-y-1/2 items-center justify-center rounded-lg bg-accent shadow-card">
                  <Icon name={s.icon} className="h-4 w-4 text-clear" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-6">
                <h3 className="text-sm font-bold text-horizon">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-snug text-ink-50">
                  {s.desc}
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge transition-colors hover:text-accent"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
