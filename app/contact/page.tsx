import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactServiceArea } from "@/components/contact/ContactServiceArea";
import { ContactOffice } from "@/components/contact/ContactOffice";
import { ContactReviews } from "@/components/contact/ContactReviews";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CONTACT_FAQ } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk about your roof. Call, text, or email Skyve Roofing & Exteriors, or send a message for an estimate, inspection, or repair. Serving King & Snohomish County.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
        <ContactMethods />
        <ContactServiceArea />
        <ContactOffice />
        <FaqAccordion items={CONTACT_FAQ} />
        <ContactReviews />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
