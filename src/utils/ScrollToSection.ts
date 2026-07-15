import { Logger } from "../logging/Logger";

export class ScrollToSection {
  public static scroll(sectionId: string): void {
    Logger.info("scroll", `Navigating to section: ${sectionId}`);

    const target = document.getElementById(sectionId);
    if (!target) {
      Logger.warn("scroll", `Section not found: ${sectionId}`);
      return;
    }

    const headerOffset = 72;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    Logger.debug("scroll", `Scrolling to offset ${offsetPosition}`, {
      sectionId,
      elementPosition,
      headerOffset,
    });

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
