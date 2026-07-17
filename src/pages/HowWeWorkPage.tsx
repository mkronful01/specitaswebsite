import { PageShell } from "../components/layout/PageShell";
import { HowWeWorkSection } from "../components/sections/HowWeWorkSection";
import { Logger } from "../logging/Logger";

export class HowWeWorkPageController {
  public static logMount(): void {
    Logger.info("logMount", "How We Work page mounted with redesigned layout");
  }
}

export function HowWeWorkPage() {
  HowWeWorkPageController.logMount();

  return (
    <PageShell>
      <HowWeWorkSection />
    </PageShell>
  );
}
