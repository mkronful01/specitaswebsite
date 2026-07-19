import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./CareersSection.module.css";

export class CareersSectionController {
  public static logRender(): void {
    Logger.info("logRender", "Rendering Careers section", {
      portalUrl: SiteContent.careersPortalUrl,
      points: SiteContent.careers.points.length,
    });
  }

  public static handlePortalClick(): void {
    Logger.info(
      "handlePortalClick",
      `Careers portal CTA clicked -> ${SiteContent.careersPortalUrl}`,
    );
  }
}

export function CareersSection() {
  CareersSectionController.logRender();
  const content = SiteContent.careers;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="careers-title">
      <div className="section__inner">
        <div className={`${styles.panel} reveal`}>
          <div className={styles.copy}>
            <p className="section__label">{content.label}</p>
            <h1 className={styles.title} id="careers-title">
              {content.titleBefore}
              <span className="text-accent-gold">{content.titleAccent}</span>
            </h1>
            <p className={styles.lead}>{content.lead}</p>

            <a
              className="btn btn--primary"
              href={SiteContent.careersPortalUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => CareersSectionController.handlePortalClick()}
            >
              {content.ctaLabel}
            </a>

            <p className={styles.portalHint}>
              Opens{" "}
              <a
                className={styles.portalLink}
                href={SiteContent.careersPortalUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => CareersSectionController.handlePortalClick()}
              >
                {content.portalDisplay}
              </a>
            </p>
          </div>

          <ul className={styles.points}>
            {content.points.map((point) => (
              <li key={point.id} className={styles.point}>
                <h2 className={styles.pointTitle}>{point.title}</h2>
                <p className={styles.pointText}>{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
