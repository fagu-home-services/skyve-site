import { GoogleReviews } from "@/components/shared/GoogleReviews";

/* Honest reputation block for /contact — reuses the shared honest component.
   No fabricated Google rating or testimonials (the company is new). */
export function ContactReviews() {
  return <GoogleReviews title="We'd rather earn your trust than fake it" />;
}
