import { PageShell } from "../components/layout/PageShell";
import { CompaniesSection } from "../components/sections/CompaniesSection";
import { Logger } from "../logging/Logger";

export class CompaniesPageController {
  public static logMount(): void {
    Logger.info("logMount", "Companies page mounted with redesigned layout");
  }
}

export function CompaniesPage() {
  CompaniesPageController.logMount();

  return (
    <PageShell>
      <CompaniesSection />
    </PageShell>
  );
}
