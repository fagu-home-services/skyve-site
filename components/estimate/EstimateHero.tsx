import { Check } from "lucide-react";

const BADGES = ["No Obligation", "100% Free", "Private & Secure"];

function BlueprintRoof() {
  return (
    <svg
      viewBox="0 0 560 380"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      <g
        stroke="var(--color-sky)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.75"
      >
        {/* faint grid */}
        <g stroke="var(--color-sky)" strokeWidth="0.5" opacity="0.18">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 52} y1="20" x2={40 + i * 52} y2="360" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="20" y1={40 + i * 50} x2="540" y2={40 + i * 50} />
          ))}
        </g>

        {/* roof plan (isometric hip roof) */}
        <polygon points="280,70 470,180 280,290 90,180" opacity="0.9" />
        <polygon points="280,70 470,180 280,180" fill="var(--color-ridge)" fillOpacity="0.15" />
        <polygon points="280,70 90,180 280,180" fill="var(--color-sky)" fillOpacity="0.08" />
        {/* ridge + hips */}
        <line x1="280" y1="70" x2="280" y2="290" strokeDasharray="2 6" opacity="0.5" />
        <line x1="90" y1="180" x2="470" y2="180" strokeDasharray="2 6" opacity="0.5" />
        <line x1="200" y1="125" x2="360" y2="235" opacity="0.55" />
        <line x1="360" y1="125" x2="200" y2="235" opacity="0.55" />

        {/* dimension lines */}
        <g stroke="var(--color-accent)" opacity="0.85">
          <line x1="90" y1="315" x2="280" y2="315" />
          <line x1="90" y1="308" x2="90" y2="322" />
          <line x1="280" y1="308" x2="280" y2="322" />
          <line x1="500" y1="180" x2="500" y2="290" />
          <line x1="493" y1="180" x2="507" y2="180" />
          <line x1="493" y1="290" x2="507" y2="290" />
        </g>
      </g>
      {/* dimension labels */}
      <text x="170" y="338" fill="var(--color-accent)" fontSize="13" fontFamily="var(--font-mono)">
        42 ft
      </text>
      <text x="512" y="240" fill="var(--color-accent)" fontSize="13" fontFamily="var(--font-mono)">
        28 ft
      </text>
      {/* node dots */}
      {[
        [280, 70],
        [470, 180],
        [280, 290],
        [90, 180],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="var(--color-sky)" />
      ))}
    </svg>
  );
}

export function EstimateHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      <div className="absolute inset-0 bg-gradient-to-br from-horizon via-horizon-deep to-horizon-deep" />
      <div className="absolute -left-32 bottom-0 h-[420px] w-[520px] rounded-full bg-ridge/20 blur-3xl" />

      <div className="container-skyve relative grid items-center gap-8 pt-28 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32 lg:pb-16">
        <div className="text-clear">
          <p className="eyebrow text-sky">Instant Estimate</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Get Your Roof Estimate In About A Minute
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-sky-soft/90">
            Our system uses aerial measurements and local pricing data to give you
            a fast, approximate estimate — confirmed on a free on-site inspection.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {BADGES.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ridge">
                  <Check className="h-3 w-3 text-clear" />
                </span>
                <span className="text-sm font-medium text-clear">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden h-[300px] lg:block">
          <BlueprintRoof />
        </div>
      </div>
    </section>
  );
}
