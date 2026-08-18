"use client";

/* Wraps the working estimator with supporting marketing sections that only show
 * on the landing (address) step — once the customer starts measuring, they get
 * out of the way. The sections are passed in as children (rendered on the
 * server) so they stay server components. */

import { useState } from "react";
import { RoofEstimator } from "./RoofEstimator";

export function InstantEstimateShell({ children }: { children: React.ReactNode }) {
  const [landing, setLanding] = useState(true);
  return (
    <>
      <RoofEstimator onLanding={setLanding} />
      {landing && children}
    </>
  );
}
