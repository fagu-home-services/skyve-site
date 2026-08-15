import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { LI_SAFETY } from "@/lib/licenses-data";

export function LISafety() {
  return (
    <section className="bg-mist-soft/40 py-8">
      <div className="container-skyve">
        <div className="grid items-center gap-6 rounded-2xl border border-mist bg-clear p-4 shadow-card lg:grid-cols-[280px_1fr] lg:p-5">
          <Photo src={LI_SAFETY.image} seed="licenses-safety" alt="Skyve crew working safely on a roof" className="h-40 w-full rounded-xl lg:h-48" />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1.4fr]">
            <div>
              <h2 className="font-serif text-lg font-bold text-horizon">{LI_SAFETY.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-ink-70">{LI_SAFETY.desc}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {LI_SAFETY.features.map((f) => (
                <div key={f.title}>
                  <Icon name={f.icon} className="h-5 w-5 text-ridge" />
                  <p className="mt-2 text-xs font-bold text-horizon">{f.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-ink-50">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
