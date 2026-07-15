import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./HowWeWorkSection.module.css";

export function HowWeWorkSection() {
  const content = SiteContent.howWeWork;
  const [technical, business] = content.pillars;

  Logger.info("HowWeWorkSection", "Rendering with logo sources", {
    technicalLogo: technical.logoSrc,
    businessLogo: business.logoSrc,
    centerMark: SiteContent.logoFullSrc,
  });

  return (
    <section className={`section ${styles.wrap}`} aria-label="How we work">
      <div className="section__inner">
        <div className={`${styles.stage} reveal`}>
          <article className={styles.pillar}>
            <div className={styles.logoWrap}>
              <img
                className={styles.logo}
                src={technical.logoSrc}
                alt={`${technical.brand} logo`}
                width={420}
                height={150}
              />
            </div>
            <h2 className={styles.pillarTitle}>{technical.title}</h2>
            <p className={styles.pillarText}>{technical.text}</p>
          </article>

          <div className={styles.linkLeft} aria-hidden="true">
            <span className={styles.linkLine} />
            <span className={styles.linkDot} />
          </div>

          <div className={styles.center}>
            <img
              className={styles.centerMark}
              src={SiteContent.logoFullSrc}
              alt="Specitas Group"
              width={144}
              height={116}
            />
            <p className={styles.centerLabel}>Coordinated through Specitas</p>
          </div>

          <div className={styles.linkRight} aria-hidden="true">
            <span className={styles.linkDot} />
            <span className={styles.linkLine} />
          </div>

          <article className={styles.pillar}>
            <div className={styles.logoWrap}>
              <img
                className={styles.logo}
                src={business.logoSrc}
                alt={`${business.brand} logo`}
                width={420}
                height={150}
              />
            </div>
            <h2 className={styles.pillarTitle}>{business.title}</h2>
            <p className={styles.pillarText}>{business.text}</p>
          </article>
        </div>

        <div className={`${styles.story} reveal`}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)} className="section__lead">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className={`${styles.benefits} reveal`}>
          {content.benefits.map((benefit, index) => (
            <li key={benefit} className={styles.benefit}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
