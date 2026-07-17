import { PageShell } from "../components/layout/PageShell";
import { CommitmentSection } from "../components/sections/CommitmentSection";
import { Logger } from "../logging/Logger";

export class ContactPageController {
  public static logMount(): void {
    Logger.info("logMount", "Contact page mounted with redesigned layout");
  }
}

export function ContactPage() {
  ContactPageController.logMount();

  return (
    <PageShell>
      <CommitmentSection />
    </PageShell>
  );
}
