import Link from "next/link";
import { Phone, MessageSquare, Mail, CalendarDays } from "lucide-react";
import { CONTACT_METHODS } from "@/lib/contact-data";

const ICON = {
  phone: Phone,
  message: MessageSquare,
  mail: Mail,
  calendar: CalendarDays,
} as const;

export function ContactMethods() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Choose The Way That&apos;s Easiest For You
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_METHODS.map((m) => {
            const I = ICON[m.icon as keyof typeof ICON];
            return (
              <div
                key={m.title}
                className="rounded-xl border border-mist bg-clear p-6 text-center shadow-card"
              >
                <I className="mx-auto h-8 w-8 text-ridge" />
                <h3 className="mt-4 text-base font-bold text-horizon">{m.title}</h3>
                <p className="mt-1 text-sm text-ridge">{m.value}</p>
                <Link
                  href={m.href}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
                >
                  {m.action}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
