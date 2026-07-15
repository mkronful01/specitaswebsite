import { SiteContent } from "../../content/siteContent";
import styles from "./PresenceSection.module.css";

export function PresenceSection() {
  const content = SiteContent.presence;

  return (
    <section className="section" aria-labelledby="presence-title">
      <div className="section__inner">
        <div className={`${styles.header} reveal`}>
          <p className="section__label">{content.label}</p>
          <h2 className="section__title" id="presence-title">
            {content.title}
          </h2>
          <p className="section__lead">{content.lead}</p>
        </div>

        <ul className={`${styles.regions} reveal`}>
          {content.regions.map((region) => (
            <li key={region.name} className={styles.region}>
              <span className={styles.name}>{region.name}</span>
              <span className={styles.detail}>{region.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
