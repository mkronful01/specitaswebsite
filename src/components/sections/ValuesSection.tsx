import { SiteContent } from "../../content/siteContent";
import styles from "./ValuesSection.module.css";

const accentClassMap = {
  teal: styles.teal,
  plum: styles.plum,
  gold: styles.gold,
  slate: styles.slate,
  charcoal: styles.charcoal,
} as const;

export function ValuesSection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="values-title"
    >
      <div className="section__inner">
        <div className={`${styles.header} reveal`}>
          <p className="section__label">Our Core Values</p>
          <h2 className="section__title" id="values-title">
            The principles behind every engagement
          </h2>
        </div>

        <ul className={`${styles.list} reveal`}>
          {SiteContent.values.map((value) => (
            <li key={value.id} className={styles.item}>
              <h3 className={styles.title}>
                <span
                  className={`${styles.accent} ${accentClassMap[value.accent]}`}
                  aria-hidden="true"
                />
                {value.title}
              </h3>
              <p className={styles.description}>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
