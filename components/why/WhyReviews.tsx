import { GoogleReviews } from "@/components/shared/GoogleReviews";

/* Honest reputation block for /why-skyve — reuses the shared honest component.
   No fabricated testimonials or rating (the company is new). */
export function WhyReviews() {
  return <GoogleReviews title="We'd rather earn your trust than fake it" />;
}
