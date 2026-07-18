import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./CompaniesSection.module.css";

const accentClassMap = {
  teal: styles.teal,
  plum: styles.plum,
  gold: styles.gold,
} as const;

export class CompaniesSectionController {
  public static logCompanyLink(companyName: string, href: string): void {
    Logger.info("logCompanyLink", `Opening company link: ${companyName}`, {
      href,
    });
  }

  public static logRender(): void {
    Logger.info("logRender", "Rendering group companies grid", {
      count: SiteContent.companies.length,
      brands: SiteContent.companies.map((company) => company.brandName),
    });
  }
}

type CompaniesSectionProps = {
  showHeading?: boolean;
};

export function CompaniesSection({ showHeading = true }: CompaniesSectionProps) {
  CompaniesSectionController.logRender();
  const heading = SiteContent.companiesSection;

  return (
    <section className={`section ${styles.section}`} aria-label="Group companies">
      <div className="section__inner">
        {showHeading ? (
          <header className={`${styles.heading} reveal`}>
            <p className="section__label">{heading.label}</p>
            <h2 className={styles.title}>{heading.title}</h2>
            <div className={styles.rule} aria-hidden="true">
              <span className={styles.dotTeal} />
              <span className={styles.dotPlum} />
              <span className={styles.dotGold} />
            </div>
          </header>
        ) : null}

        <div className={`${styles.grid} reveal`}>
          {SiteContent.companies.map((company) => (
            <article
              key={company.id}
              className={`${styles.company} ${accentClassMap[company.accent]}`}
            >
              <div className={styles.logoPanel}>
                <img
                  className={styles.logo}
                  src={company.logoSrc}
                  alt={`${company.brandName} logo`}
                  width={640}
                  height={220}
                />
              </div>

              <div className={styles.copy}>
                {company.entities && company.entities.length > 0 ? (
                  <ul className={styles.entities}>
                    {company.entities.map((entity) => (
                      <li key={`${entity.name}-${entity.region}`}>
                        <h3 className={styles.name}>
                          {entity.name}{" "}
                          <span className={styles.entityRegion}>
                            ({entity.region})
                          </span>
                        </h3>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h3 className={styles.name}>{company.brandName}</h3>
                )}
                <p className={styles.focus}>{company.focus}</p>
                {!company.entities ? (
                  <p className={styles.region}>{company.region}</p>
                ) : null}
                <p className={styles.description}>{company.description}</p>
                {company.href ? (
                  <a
                    className={styles.link}
                    href={company.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      CompaniesSectionController.logCompanyLink(
                        company.brandName,
                        company.href!,
                      )
                    }
                  >
                    <span>Explore Company</span>
                    <span className={styles.linkIcon} aria-hidden="true">
                      ↑
                    </span>
                  </a>
                ) : (
                  <span className={styles.linkMuted}>Part of Specitas Group</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

