import { MessageSquare } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PORTAL_STATS } from "@/lib/portal-data";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">{children}</div>;
}

export function PFStats() {
  const s = PORTAL_STATS;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Progress + sparkline */}
      <Card>
        <p className="text-xs text-ink-50">{s.progress.label}</p>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="font-serif text-3xl font-bold text-horizon">{s.progress.value}%</span>
          <span className="text-xs font-semibold text-success">{s.progress.status}</span>
        </div>
        <svg viewBox="0 0 200 48" className="mt-3 h-12 w-full" preserveAspectRatio="none">
          <polyline
            points="0,42 25,38 50,40 75,30 100,32 125,22 150,24 175,14 200,8"
            fill="none"
            stroke="var(--color-ridge)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a href="#" className="mt-1 inline-block text-xs font-semibold text-ridge hover:text-accent">View Timeline →</a>
      </Card>

      {/* Next milestone */}
      <Card>
        <p className="text-xs text-ink-50">{s.milestone.label}</p>
        <div className="mt-2 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
            <Icon name="home" className="h-4 w-4 text-ridge" />
          </span>
          <span className="text-base font-bold text-horizon">{s.milestone.title}</span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-ridge">
          <span className="h-1.5 w-1.5 rounded-full bg-ridge" /> {s.milestone.status}
        </p>
        <p className="mt-1 text-[11px] text-ink-50">{s.milestone.expected}</p>
        <a href="#" className="mt-2 inline-block text-xs font-semibold text-ridge hover:text-accent">See All Milestones →</a>
      </Card>

      {/* Payments */}
      <Card>
        <p className="flex items-center gap-1.5 text-xs text-ink-50">
          <Icon name="wallet" className="h-3.5 w-3.5" /> {s.payments.label}
        </p>
        <p className="mt-1 font-serif text-3xl font-bold text-horizon">{s.payments.amount}</p>
        <p className="text-xs text-ink-50">{s.payments.of}</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-success" style={{ width: `${s.payments.pct}%` }} />
        </div>
        <a href="#" className="mt-2 inline-block text-xs font-semibold text-ridge hover:text-accent">View Payments →</a>
      </Card>

      {/* Messages */}
      <Card>
        <p className="flex items-center gap-1.5 text-xs text-ink-50">
          <Icon name="message" className="h-3.5 w-3.5" /> {s.messages.label}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-serif text-3xl font-bold text-horizon">{s.messages.count}</span>
          <MessageSquare className="h-8 w-8 text-sky" />
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {s.messages.note}
        </p>
        <a href="#" className="mt-2 inline-block text-xs font-semibold text-ridge hover:text-accent">Go to Messages →</a>
      </Card>
    </div>
  );
}
