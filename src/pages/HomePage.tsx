import { PageShell } from "../components/layout/PageShell";
import { HomeVideoHero } from "../components/video/HomeVideoHero";
import { Logger } from "../logging/Logger";

export class HomePageController {
  public static logMount(): void {
    Logger.info("logMount", "Home page mounted with video hero");
  }
}

export function HomePage() {
  HomePageController.logMount();

  return (
    <PageShell transparentHeader hideFooter>
      <HomeVideoHero />
    </PageShell>
  );
}
