import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./CompaniesSection.module.css";

const accentClassMap = {
  teal: styles.teal,
  plum: styles.plum,
} as const;

export class CompaniesSectionController {
  public static logCompanyLink(companyName: string, href: string): void {
    Logger.info("logCompanyLink", `Opening company link: ${companyName}`, {
      href,
    });
  }
}

export function CompaniesSection() {
  return (
    <section className="section" aria-label="Group companies">
      <div className="section__inner">
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
                <p className={styles.focus}>{company.focus}</p>
                <ul className={styles.legalList}>
                  {company.legalNames.map((legalName) => (
                    <li key={legalName} className={styles.legalName}>
                      {legalName}
                    </li>
                  ))}
                </ul>
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
                    Visit website
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
