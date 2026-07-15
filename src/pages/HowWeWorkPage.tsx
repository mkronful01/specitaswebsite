import { PageIntro } from "../components/layout/PageIntro";
import { PageShell } from "../components/layout/PageShell";
import { HowWeWorkSection } from "../components/sections/HowWeWorkSection";
import { SiteContent } from "../content/siteContent";

export function HowWeWorkPage() {
  const content = SiteContent.howWeWork;

  return (
    <PageShell>
      <PageIntro
        label={content.label}
        title={content.title}
        lead={content.lead}
      />
      <HowWeWorkSection />
    </PageShell>
  );
}
