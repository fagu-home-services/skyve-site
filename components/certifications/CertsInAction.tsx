import { CheckCircle2 } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { CERTS_ACTION_CHECKLIST, CERTS_ACTION_CARDS } from "@/lib/certifications-data";

export function CertsInAction() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          {/* Copy + checklist */}
          <div>
            <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
              Certifications in Action
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">
              Our team completes ongoing training and certification programs to stay
              at the forefront of roofing technology and best practices.
            </p>
            <ul className="mt-5 space-y-2.5">
              {CERTS_ACTION_CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Image cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {CERTS_ACTION_CARDS.map((card) => (
              <div key={card.title} className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card">
                <Photo src={card.image} alt={card.title} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold text-horizon">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-snug text-ink-50">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
