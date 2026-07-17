import { Link } from "react-router-dom";
import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./AboutHeroSection.module.css";

const accentClassMap = {
  teal: styles.accentTeal,
  plum: styles.accentPlum,
  gold: styles.accentGold,
  slate: styles.accentSlate,
  charcoal: styles.accentCharcoal,
} as const;

export class AboutHeroSectionController {
  public static logDiscoverClick(): void {
    Logger.info("logDiscoverClick", "About us CTA -> Discover Our Group");
  }

  public static logHeroRender(): void {
    Logger.info("logHeroRender", "Rendering About us hero with textured mark", {
      mark: SiteContent.logoTexturedSrc,
      values: SiteContent.homeValues.length,
    });
  }
}

export function AboutHeroSection() {
  AboutHeroSectionController.logHeroRender();
  const hero = SiteContent.aboutHero;

  return (
    <section className={styles.hero} aria-label="About Specitas Group">
      <div className={styles.inner}>
        <div className={`${styles.copy} reveal`}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>{hero.headlinePrimary}</span>
            <span className={`${styles.titleAccent} gradient-shared`}>
              {hero.headlineAccent}
            </span>
          </h1>
          <p className={styles.support}>{hero.support}</p>
          <Link
            className={styles.cta}
            to={hero.primaryCta.path}
            onClick={() => AboutHeroSectionController.logDiscoverClick()}
          >
            <span>{hero.primaryCta.label}</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              ↑
            </span>
          </Link>
        </div>

        <div className={`${styles.markWrap} reveal`}>
          <img
            className={styles.mark}
            src={SiteContent.logoTexturedSrc}
            alt="Specitas Group emblem"
            width={640}
            height={640}
          />
        </div>

        <ul className={`${styles.values} reveal`}>
          {SiteContent.homeValues.map((value) => (
            <li
              key={value.id}
              className={`${styles.value} ${accentClassMap[value.accent]}`}
            >
              <span className={styles.valueIcon} aria-hidden="true" />
              <div>
                <h2 className={styles.valueTitle}>{value.title}</h2>
                <p className={styles.valueText}>{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
