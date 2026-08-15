import { COMPANY } from "@/lib/company";

const STATS = [
  { n: `${COMPANY.yearsCombined}`, l: "Years combined experience" },
  { n: `${COMPANY.warrantyYears} yr`, l: "Workmanship warranty" },
  { n: "100%", l: "Owner-led projects" },
];

/* "New company, veteran hands" — the honest founder story.
   TODO: replace the placeholder crew photo with a real team photo once taken. */
export function Founders() {
  return (
    <section id="about" className="bg-mist-soft py-16 lg:py-24">
      <div className="container-skyve grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/crew-1.webp"
              alt="Skyve crew at work on a roof"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow text-ridge">Who we are</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-horizon sm:text-4xl">
            Not a franchise. Not a call center. Just two roofers who care.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-70">
            Skyve is owned and run by Andre and Fabricio. Between them, more than
            20 years installing roofs across Washington — for other companies.
            They started Skyve to do it the way they always believed it should be
            done: show up, do it right, document everything, and stand behind it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-70">
            When you call Skyve, you talk to the owners. When your roof gets
            built, an owner is on the job.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl font-extrabold text-horizon">
                  {s.n}
                </p>
                <p className="mt-1 max-w-[9rem] text-sm text-ink-50">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
