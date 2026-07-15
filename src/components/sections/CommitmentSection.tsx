import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./CommitmentSection.module.css";

export class CommitmentSectionController {
  public static handleContactClick(): void {
    Logger.info(
      "handleContactClick",
      `Contact CTA clicked -> mailto ${SiteContent.contactEmail}`,
    );
  }
}

export function CommitmentSection() {
  const content = SiteContent.commitment;

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="commitment-title"
    >
      <div className="section__inner">
        <div className={`${styles.layout} reveal`}>
          <div className={styles.copy}>
            <p className="section__label">{content.label}</p>
            <h2 className="section__title" id="commitment-title">
              Informed decisions. Trusted partnerships.
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="section__lead">
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.closing}>
            <h3 className={styles.closingTitle}>{content.closingTitle}</h3>
            <p className="section__lead">{content.closingLead}</p>
            <div className={styles.actions}>
              <a
                className="btn btn--primary"
                href={`mailto:${SiteContent.contactEmail}`}
                onClick={() => CommitmentSectionController.handleContactClick()}
              >
                Get in Touch
              </a>
              <a
                className="btn btn--light"
                href={`mailto:${SiteContent.contactEmail}?subject=Specitas%20Group%20Enquiry`}
                onClick={() => CommitmentSectionController.handleContactClick()}
              >
                Email Specitas Group
              </a>
            </div>
            <p className={styles.tagline}>{SiteContent.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
