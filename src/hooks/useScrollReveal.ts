import { useEffect, useRef } from "react";
import { Logger } from "../logging/Logger";

export class ScrollRevealObserver {
  public static observe(
    elements: Element[],
    onVisible: (element: Element) => void,
  ): IntersectionObserver {
    Logger.debug("observe", `Attaching observer to ${elements.length} elements`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          Logger.debug("observe", "Element entered viewport", {
            id: (entry.target as HTMLElement).id || entry.target.className,
          });
          onVisible(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return observer;
  }
}

export function useScrollReveal<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      Logger.warn("useScrollReveal", "Container ref is null");
      return;
    }

    const targets = Array.from(container.querySelectorAll(".reveal"));
    if (targets.length === 0) {
      Logger.debug("useScrollReveal", "No reveal targets found");
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      Logger.info("useScrollReveal", "Reduced motion enabled; revealing immediately");
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = ScrollRevealObserver.observe(targets, (element) => {
      element.classList.add("is-visible");
    });

    return () => {
      Logger.debug("useScrollReveal", "Disconnecting scroll reveal observer");
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
