import { Link } from "react-router-dom";
import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./SiteFooter.module.css";

export class SiteFooterController {
  public static logContactClick(): void {
    Logger.info("logContactClick", `Opening mailto: ${SiteContent.contactEmail}`);
  }
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <div className={styles.brand}>
            <img
              className={styles.brandMark}
              src={SiteContent.logoMarkSrc}
              alt=""
              width={48}
              height={48}
            />
            <div className={styles.brandCopy}>
              <strong>Specitas Group</strong>
              <span>{SiteContent.tagline}</span>
            </div>
          </div>
          <a
            href={`mailto:${SiteContent.contactEmail}`}
            className="btn btn--ghost"
            onClick={() => SiteFooterController.logContactClick()}
          >
            {SiteContent.contactEmail}
          </a>
        </div>

        <ul className={styles.companies}>
          {SiteContent.companies.flatMap((company) =>
            company.legalNames.map((legalName) => (
              <li key={legalName}>{legalName}</li>
            )),
          )}
        </ul>

        <div className={styles.meta}>
          <span>
            &copy; {new Date().getFullYear()} Specitas Group. All rights reserved.
          </span>
          <nav aria-label="Footer">
            {SiteContent.navItems.map((item, index) => (
              <span key={item.path}>
                {index > 0 ? " · " : null}
                <Link to={item.path}>{item.label}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
