import { SiteContent } from "../../content/siteContent";
import styles from "./WhySection.module.css";

export function WhySection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="why-title"
    >
      <div className="section__inner">
        <div className={`${styles.header} reveal`}>
          <p className="section__label">Why Specitas Group</p>
          <h2 className="section__title" id="why-title">
            Built for better project outcomes
          </h2>
        </div>

        <ul className={`${styles.list} reveal`}>
          {SiteContent.whyItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
