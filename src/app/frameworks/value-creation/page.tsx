import type { Metadata } from "next";
import { ValueFramework } from "@/components/frameworks/ValueFramework";

const description =
  "How the finance function creates value: analysis, planning and control acting through four decision areas.";

export const metadata: Metadata = {
  title: "Value Creation Framework",
  description,
  alternates: { canonical: "/frameworks/value-creation/" },
  openGraph: { url: "/frameworks/value-creation/", title: "Value Creation Framework", description },
};

export default function ValueCreationPage() {
  return (
    <div className="container framework-page">
      <header className="section-head section-head--center">
        <p className="eyebrow eyebrow--center">Framework / Corporate finance</p>
        <h1>How finance creates value</h1>
        <p className="lede">
          The goal sets the test. Three functions act through four decisions. The market keeps
          score, and the score feeds the next round of analysis.
        </p>
        <p className="fine">
          Adapted from Johns Hopkins Carey Business School EMBA coursework, translated for hospital
          finance.
        </p>
      </header>
      <ValueFramework />
    </div>
  );
}
