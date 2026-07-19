import { useEffect } from "react";
import { SiteContent } from "../../content/siteContent";
import type { OfficeLocation } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./OfficeLocations.module.css";

export class OfficeLocationsController {
  public static logMount(officeCount: number, layout: string): void {
    Logger.info(
      "logMount",
      `Mounted office locations with ${officeCount} office(s)`,
      {
        layout,
        officeIds: SiteContent.offices.map((office) => office.id),
      },
    );
  }

  public static handleTelephoneClick(office: OfficeLocation): void {
    Logger.info(
      "handleTelephoneClick",
      `Telephone link clicked for ${office.name}`,
      { telephoneHref: office.telephoneHref, officeId: office.id },
    );
  }
}

type OfficeLocationsProps = {
  layout?: "grid" | "stack";
};

export function OfficeLocations({ layout = "grid" }: OfficeLocationsProps) {
  const offices = SiteContent.offices;

  useEffect(() => {
    OfficeLocationsController.logMount(offices.length, layout);
  }, [offices.length, layout]);

  return (
    <div
      className={`${styles.offices} ${layout === "stack" ? styles.stack : ""}`}
      aria-label="Office locations"
    >
      {offices.map((office) => (
        <article key={office.id} className={styles.office}>
          <h4 className={styles.name}>{office.name}</h4>
          <address className={styles.address}>
            {office.addressLines.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </address>
          <a
            className={styles.telephone}
            href={office.telephoneHref}
            onClick={() =>
              OfficeLocationsController.handleTelephoneClick(office)
            }
          >
            Tel: {office.telephoneDisplay}
          </a>
        </article>
      ))}
    </div>
  );
}
