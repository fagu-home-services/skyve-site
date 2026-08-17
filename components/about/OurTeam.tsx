import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";

/* Honest, owner-led team. No fabricated employees. Andre + Fabricio are the two
   owners; swap in real photos/last names when available. */
const OWNERS = [
  {
    name: "Andre",
    initials: "A",
    role: "Co-Owner",
    desc: "Over a decade on the roof. Leads the crews and the craftsmanship on every job.",
  },
  {
    name: "Fabricio",
    initials: "F",
    role: "Co-Owner",
    desc: "Over a decade in roofing and construction. Handles estimates, customers, and getting it right.",
  },
];

export function OurTeam() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="eyebrow text-ridge">Owner-led</p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-horizon sm:text-4xl">
            The people behind every roof
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-ink-70">
            Skyve isn&apos;t a franchise or a call center. It&apos;s owned and run by two roofers with
            20+ years of combined experience — backed by experienced local crews. When you call
            Skyve, you talk to an owner. When your roof gets built, an owner is on the job.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {OWNERS.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-xl border border-mist bg-clear p-5 shadow-card"
              >
                <AvatarPlaceholder initials={m.initials} className="h-16 w-16 shrink-0 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-horizon">{m.name}</p>
                  <p className="text-xs font-medium text-ridge">{m.role}</p>
                  <p className="mt-1 text-xs leading-snug text-ink-50">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
