import { PageShell } from "../components/layout/PageShell";
import { CareersSection } from "../components/sections/CareersSection";
import { Logger } from "../logging/Logger";

export class CareersPageController {
  public static logMount(): void {
    Logger.info("logMount", "Careers page mounted");
  }
}

export function CareersPage() {
  CareersPageController.logMount();

  return (
    <PageShell>
      <CareersSection />
    </PageShell>
  );
}
