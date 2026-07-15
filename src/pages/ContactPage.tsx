import { PageIntro } from "../components/layout/PageIntro";
import { PageShell } from "../components/layout/PageShell";
import { CommitmentSection } from "../components/sections/CommitmentSection";
import { SiteContent } from "../content/siteContent";

export function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        label="Contact"
        title={SiteContent.commitment.closingTitle}
        lead={SiteContent.commitment.closingLead}
      />
      <CommitmentSection />
    </PageShell>
  );
}
