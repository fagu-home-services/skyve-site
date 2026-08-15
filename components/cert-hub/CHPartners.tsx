import { CH_PARTNERS } from "@/lib/cert-hub-data";

export function CHPartners() {
  return (
    <section className="bg-mist-soft/50 py-9">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Our Manufacturer Partners
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {CH_PARTNERS.map((p) => (
            <span key={p.name} className={`font-serif text-lg font-extrabold ${p.tone}`}>
              {p.name}
              {p.sub && (
                <span className="ml-1 align-middle text-[8px] font-bold uppercase tracking-wide text-ink-50">
                  {p.sub}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
