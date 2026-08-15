import { Check } from "lucide-react";
import { WIZARD_STEPS } from "@/lib/estimate-data";

export function StepIndicator({ active = 1 }: { active?: number }) {
  return (
    <div className="border-b border-mist bg-clear">
      <div className="container-skyve overflow-x-auto py-6">
        <ol className="flex min-w-[640px] items-center">
          {WIZARD_STEPS.map((label, i) => {
            const n = i + 1;
            const state =
              n < active ? "done" : n === active ? "active" : "todo";
            return (
              <li
                key={label}
                className={`flex items-center ${i < WIZARD_STEPS.length - 1 ? "flex-1" : ""}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      state === "active"
                        ? "bg-ridge text-clear ring-4 ring-ridge/15"
                        : state === "done"
                          ? "bg-ridge text-clear"
                          : "bg-mist text-ink-50"
                    }`}
                  >
                    {state === "done" ? <Check className="h-4 w-4" /> : n}
                  </span>
                  <span
                    className={`whitespace-nowrap text-xs font-medium ${
                      state === "todo" ? "text-ink-50" : "text-horizon"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < WIZARD_STEPS.length - 1 && (
                  <div
                    className={`mx-3 mb-6 h-0.5 flex-1 ${
                      n < active ? "bg-ridge" : "bg-mist"
                    }`}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
