import { redirect } from "next/navigation";

/* The instant estimator was rebuilt at /instant-estimate (measure → structures →
   qualify → contact → configure → price). This old path is kept as a redirect so
   every existing CTA and data link lands on the current funnel. */
export default function InstantEstimateRedirect() {
  redirect("/instant-estimate/");
}
