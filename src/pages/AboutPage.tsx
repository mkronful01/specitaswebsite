import { PageShell } from "../components/layout/PageShell";
import { AboutHeroSection } from "../components/sections/AboutHeroSection";
import { PresenceSection } from "../components/sections/PresenceSection";
import { VisionMissionSection } from "../components/sections/VisionMissionSection";
import { WhoWeAreSection } from "../components/sections/WhoWeAreSection";
import { WhySection } from "../components/sections/WhySection";
import { Logger } from "../logging/Logger";

export class AboutPageController {
  public static logMount(): void {
    Logger.info("logMount", "About us page mounted with reference layout");
  }
}

export function AboutPage() {
  AboutPageController.logMount();

  return (
    <PageShell>
      <AboutHeroSection />
      <WhoWeAreSection />
      <VisionMissionSection />
      <WhySection />
      <PresenceSection />
    </PageShell>
  );
}
