import { redirect } from "next/navigation";

/* /estimate is the entry point for the primary CTA ("Get Free Estimate").
   Send it to the instant estimate flow (the new measure → configure funnel). */
export default function EstimatePage() {
  redirect("/instant-estimate/");
}
