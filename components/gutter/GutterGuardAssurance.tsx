import { ShieldCheck, Check } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { GUTTER_GUARDS_ASSURANCE } from "@/lib/gutter-guards-data";

const { benefits, warranty, signs } = GUTTER_GUARDS_ASSURANCE;

function ChecklistCard({
  title,
  items,
  image,
  alt,
}: {
  title: string;
  items: string[];
  image: string;
  alt: string;
}) {
  return (
    <div className="grid gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 shadow-card sm:grid-cols-2">
      <div>
        <h3 className="font-serif text-lg font-bold text-horizon">{title}</h3>
        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <Photo src={image} alt={alt} className="h-full min-h-40 rounded-xl" />
    </div>
  );
}

export function GutterGuardAssurance() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.25fr_1fr_1.25fr]">
        <ChecklistCard title={benefits.title} items={benefits.items} image={benefits.image} alt="Home protected by gutter guards" />

        {/* Warranty */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 shrink-0 text-sky" />
            <div>
              <h3 className="font-serif text-lg font-bold">{warranty.title}</h3>
              <p className="mt-1 text-xs text-sky-soft/70">{warranty.text}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5">
            {warranty.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-accent" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-clear/10 pt-4 text-xs text-sky-soft/70">
            {warranty.footer}
          </p>
        </div>

        <ChecklistCard title={signs.title} items={signs.items} image={signs.image} alt="Clogged gutter that needs guards" />
      </div>
    </section>
  );
}
