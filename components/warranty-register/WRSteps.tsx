import { Check } from "lucide-react";
import { WR_STEPS } from "@/lib/warranty-register-data";

export function WRSteps({ active = 1 }: { active?: number }) {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-elevated">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WR_STEPS.map((s) => {
          const done = s.n < active;
          const current = s.n === active;
          return (
            <li key={s.n} className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  done ? "bg-success text-clear" : current ? "bg-ridge text-clear" : "border border-mist bg-clear text-ink-50"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : s.n}
              </span>
              <div>
                <p className={`text-sm font-bold ${current || done ? "text-horizon" : "text-ink-50"}`}>{s.title}</p>
                <p className="text-[11px] text-ink-50">{s.sub}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
