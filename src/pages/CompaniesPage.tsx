import { PageIntro } from "../components/layout/PageIntro";
import { PageShell } from "../components/layout/PageShell";
import { CompaniesSection } from "../components/sections/CompaniesSection";

export function CompaniesPage() {
  return (
    <PageShell>
      <PageIntro
        label="Our Group Companies"
        title="Specialist brands under Specitas"
        lead="C&B Consult delivers specification consultancy and technical support. Business & Beyond delivers business consultancy. Two specialist identities. One group."
      />
      <CompaniesSection />
    </PageShell>
  );
}
