import { SiteContent } from "../../content/siteContent";
import styles from "./WhoWeAreSection.module.css";

export function WhoWeAreSection() {
  const content = SiteContent.whoWeAre;

  return (
    <section className="section" aria-labelledby="who-we-are-title">
      <div className="section__inner">
        <header className={`${styles.header} reveal`}>
          <p className="section__label">{content.label}</p>
          <h2 className="section__title" id="who-we-are-title">
            {content.title}
          </h2>
        </header>
        <div className={`${styles.layout} reveal`}>
          <div className={styles.copy}>
            {content.paragraphs.map((paragraph) => (
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
