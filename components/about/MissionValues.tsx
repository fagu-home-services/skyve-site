import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { MISSION, VALUES, MISSION_IMAGE } from "@/lib/about-data";

export function MissionValues() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-12 lg:grid-cols-2">
        {/* Mission */}
        <div>
          <p className="eyebrow text-ridge">Our Mission</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-horizon sm:text-4xl">
            {MISSION.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-70">
            {MISSION.body}
          </p>
          <Photo
            src={MISSION_IMAGE}
            alt="A Skyve roofing project in Washington"
            className="mt-7 aspect-[16/10] rounded-2xl shadow-card"
          />
        </div>

        {/* Values */}
        <div>
          <p className="eyebrow text-ridge">Our Values</p>
          <ul className="mt-5 space-y-6">
            {VALUES.map((v) => (
              <li key={v.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-soft">
                  <Icon name={v.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-horizon">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-50">
                    {v.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
