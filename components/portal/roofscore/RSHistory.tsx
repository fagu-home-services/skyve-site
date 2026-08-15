import { FileText, ArrowRight, ArrowUp } from "lucide-react";
import { RS_HISTORY } from "@/lib/portal-roofscore-data";

export function RSHistory() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="text-sm font-bold text-horizon">{RS_HISTORY.title}</h2>
      <p className="text-xs text-ink-50">{RS_HISTORY.subtitle}</p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-mist text-[11px] uppercase tracking-wide text-ink-50">
              <th className="py-2.5 pr-4 font-semibold">Date</th>
              <th className="py-2.5 pr-4 font-semibold">Score</th>
              <th className="py-2.5 pr-4 font-semibold">Change</th>
              <th className="py-2.5 pr-4 font-semibold">Inspection Type</th>
              <th className="py-2.5 pr-4 font-semibold">Inspector</th>
              <th className="py-2.5 font-semibold">Report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mist">
            {RS_HISTORY.rows.map((r) => (
              <tr key={r.date}>
                <td className="py-3 pr-4 text-ink-70">{r.date}</td>
                <td className="py-3 pr-4 font-bold text-horizon">{r.score}</td>
                <td className="py-3 pr-4">
                  {r.change && r.change !== "—" ? (
                    <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-success">
                      <ArrowUp className="h-3 w-3" />{r.change}
                    </span>
                  ) : (
                    <span className="text-xs text-ink-50">—</span>
                  )}
                </td>
                <td className="py-3 pr-4 text-ink-70">{r.type}</td>
                <td className="py-3 pr-4 text-ink-70">{r.inspector}</td>
                <td className="py-3">
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-ridge hover:text-accent">
                    <FileText className="h-3.5 w-3.5 text-danger" /> View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ridge hover:text-accent">
          View All Reports <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
