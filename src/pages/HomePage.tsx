import { PageShell } from "../components/layout/PageShell";
import { HomeVideoHero } from "../components/video/HomeVideoHero";

export function HomePage() {
  return (
    <PageShell transparentHeader hideFooter>
      <HomeVideoHero />
    </PageShell>
  );
}
