import { redirect } from "next/navigation";

/* The estimator was promoted to /instant-estimate (the QR destination). Keep
   this path working by redirecting to the canonical one. */
export default function RoofEstimateRedirect() {
  redirect("/instant-estimate/");
}
