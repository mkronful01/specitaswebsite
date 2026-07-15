import { SiteContent } from "../../content/siteContent";
import styles from "./WhoWeAreSection.module.css";

export function WhoWeAreSection() {
  const content = SiteContent.whoWeAre;
  const bodyParagraphs = content.paragraphs.slice(1);

  return (
    <section className="section" aria-label="Who we are details">
      <div className="section__inner">
        <div className={`${styles.layout} reveal`}>
          <div className={styles.copy}>
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="section__lead">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className={styles.benefits}>
            {content.benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                <span className={styles.dot} aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
