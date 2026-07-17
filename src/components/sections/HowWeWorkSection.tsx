import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./HowWeWorkSection.module.css";

const benefitAccentMap = {
  teal: styles.benefitTeal,
  plum: styles.benefitPlum,
  indigo: styles.benefitIndigo,
  gold: styles.benefitGold,
} as const;

export class HowWeWorkSectionController {
  public static logRender(): void {
    const content = SiteContent.howWeWork;
    Logger.info("logRender", "Rendering How We Work section", {
      technicalLogo: content.pillars[0].logoSrc,
      businessLogo: content.pillars[1].logoSrc,
      centerMark: SiteContent.logoFullSrc,
      benefits: content.benefits.length,
    });
  }
}

export function HowWeWorkSection() {
  HowWeWorkSectionController.logRender();
  const content = SiteContent.howWeWork;
  const [technical, business] = content.pillars;

  return (
    <section className={`section ${styles.wrap}`} aria-label="How we work">
      <div className="section__inner">
        <header className={`${styles.intro} reveal`}>
          <p className="section__label">{content.label}</p>
          <h2 className={styles.title}>
            {content.titleBefore}
            <span className="text-accent-gold">{content.titleAccent}</span>
          </h2>
          <p className={styles.lead}>{content.lead}</p>
        </header>

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
            <div className={`${styles.pillarBadge} ${styles.badgeTeal}`} aria-hidden="true" />
            <h3 className={`${styles.pillarTitle} text-accent-teal`}>
              {technical.title}
            </h3>
            <p className={styles.pillarText}>{technical.text}</p>
          </article>

          <div className={styles.linkLeft} aria-hidden="true">
            <span className={styles.linkLine} />
            <span className={styles.linkDot} />
          </div>

          <div className={styles.center}>
            <div className={styles.centerDisk}>
              <img
                className={styles.centerMark}
                src={SiteContent.logoFullSrc}
                alt="Specitas Group"
                width={144}
                height={116}
              />
              <p className={styles.centerLabel}>Coordinated through Specitas</p>
            </div>
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
            <div className={`${styles.pillarBadge} ${styles.badgePlum}`} aria-hidden="true" />
            <h3 className={`${styles.pillarTitle} text-accent-plum`}>
              {business.title}
            </h3>
            <p className={styles.pillarText}>{business.text}</p>
          </article>
        </div>

        <div className={`${styles.story} reveal`}>
          <div className={styles.storyIcon} aria-hidden="true" />
          <div className={styles.storyCopy}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className={`${styles.benefits} reveal`}>
          {content.benefits.map((benefit, index) => (
            <li
              key={benefit.id}
              className={`${styles.benefit} ${benefitAccentMap[benefit.accent]}`}
            >
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.benefitIcon} aria-hidden="true" />
              <div className={styles.benefitCopy}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
