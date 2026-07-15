import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Logger } from "../../logging/Logger";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  children: ReactNode;
  transparentHeader?: boolean;
  hideFooter?: boolean;
};

export class PageShellController {
  public static logPageView(pathname: string): void {
    Logger.info("logPageView", `Route mounted: ${pathname}`);
  }

  public static scrollToTop(): void {
    Logger.debug("scrollToTop", "Resetting scroll position for new page");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export function PageShell({
  children,
  transparentHeader = false,
  hideFooter = false,
}: PageShellProps) {
  const location = useLocation();
  const contentRef = useScrollReveal<HTMLElement>();

  useEffect(() => {
    PageShellController.logPageView(location.pathname);
    PageShellController.scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader transparent={transparentHeader} />
      <main id="main" ref={contentRef}>
        {children}
      </main>
      {hideFooter ? null : <SiteFooter />}
    </>
  );
}
