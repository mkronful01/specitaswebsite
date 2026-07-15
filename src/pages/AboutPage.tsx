import { PageIntro } from "../components/layout/PageIntro";
import { PageShell } from "../components/layout/PageShell";
import { PresenceSection } from "../components/sections/PresenceSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { VisionMissionSection } from "../components/sections/VisionMissionSection";
import { WhoWeAreSection } from "../components/sections/WhoWeAreSection";
import { WhySection } from "../components/sections/WhySection";
import { SiteContent } from "../content/siteContent";

export function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        label={SiteContent.whoWeAre.label}
        title={SiteContent.whoWeAre.title}
        lead={SiteContent.whoWeAre.paragraphs[0]}
      />
      <WhoWeAreSection />
      <VisionMissionSection />
      <ValuesSection />
      <WhySection />
      <PresenceSection />
    </PageShell>
  );
}
