import Link from "next/link";
import { Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { OFFICE } from "@/lib/contact-data";

const MAP_QUERY = encodeURIComponent(
  `${OFFICE.name}, ${OFFICE.address1}, ${OFFICE.address2}`,
);
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=13&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export function ContactOffice() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Office photo */}
        <Photo
          src={OFFICE.image}
          alt="Skyve Roofing local office and crew van"
          className="aspect-[16/11] rounded-2xl shadow-card"
        />

        {/* Details + mini map */}
        <div className="grid gap-6 rounded-2xl border border-mist bg-clear p-7 shadow-card sm:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ridge">
              Our Local Office
            </p>
            <h2 className="mt-2 font-serif text-xl font-bold text-horizon">
              {OFFICE.name}
            </h2>
            <p className="mt-2 text-sm text-ink-70">
              {OFFICE.address1}
              <br />
              {OFFICE.address2}
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-ink-70">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-ridge" /> {OFFICE.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-ridge" /> {OFFICE.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-ridge" /> {OFFICE.hours}
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-ridge" /> License # {OFFICE.license}
              </li>
              <li className="flex items-center gap-2.5 text-ink-50">
                <ShieldCheck className="h-4 w-4 text-ridge" /> Fully Licensed, Bonded &amp; Insured
              </li>
            </ul>
          </div>

          {/* Real map */}
          <div className="flex flex-col">
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-xl border border-mist bg-mist-soft">
              <iframe
                title={`Map of ${OFFICE.name}`}
                src={MAP_EMBED}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Address overlay */}
              <div className="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[80%] rounded-lg bg-clear/95 px-3 py-2 text-[11px] leading-snug text-ink-70 shadow-card backdrop-blur-sm">
                <span className="block font-bold text-horizon">{OFFICE.name}</span>
                {OFFICE.address1}
                <br />
                {OFFICE.address2}
              </div>
            </div>
            <Link
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-1 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
