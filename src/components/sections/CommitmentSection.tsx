import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import { OfficeLocations } from "./OfficeLocations";
import styles from "./CommitmentSection.module.css";

const pointAccentMap = {
  teal: styles.pointTeal,
  plum: styles.pointPlum,
  gold: styles.pointGold,
} as const;

const channelAccentMap = {
  teal: styles.channelTeal,
  plum: styles.channelPlum,
  gold: styles.channelGold,
  charcoal: styles.channelCharcoal,
} as const;

export class CommitmentSectionController {
  public static handleContactClick(source: string): void {
    Logger.info(
      "handleContactClick",
      `Contact CTA clicked (${source}) -> mailto ${SiteContent.contactEmail}`,
    );
  }

  public static logChannelClick(channelId: string, href?: string): void {
    Logger.info("logChannelClick", `Contact channel clicked: ${channelId}`, {
      href: href ?? "none",
    });
  }

  public static logRender(): void {
    Logger.info("logRender", "Rendering contact commitment section", {
      channels: SiteContent.contact.channels.length,
      heroMark: SiteContent.logoHeroMarkSrc,
    });
  }
}

export function CommitmentSection() {
  CommitmentSectionController.logRender();
  const contact = SiteContent.contact;
  const content = SiteContent.commitment;

  return (
    <>
      <section className={styles.hero} aria-label="Contact introduction">
        <div className={styles.heroInner}>
          <div className={`${styles.heroCopy} reveal`}>
            <p className="section__label">{contact.label}</p>
            <h1 className={styles.heroTitle}>
              {contact.titleBefore}
              <span className="text-accent-gold">{contact.titleAccent}</span>
            </h1>
            <p className={styles.heroLead}>{contact.lead}</p>
          </div>
          <div className={`${styles.heroMarkWrap} reveal`}>
            <img
              className={styles.heroMark}
              src={SiteContent.logoHeroMarkSrc}
              alt="Specitas Group emblem"
              width={520}
              height={520}
            />
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.section}`}
        aria-labelledby="commitment-title"
      >
        <div className="section__inner">
          <div className={`${styles.panel} reveal`}>
            <div className={styles.copy}>
              <p className="section__label">{content.label}</p>
              <h2 className={styles.panelTitle} id="commitment-title">
                Informed decisions. Trusted partnerships.
              </h2>
              <ul className={styles.points}>
                {contact.commitmentPoints.map((point) => (
                  <li
                    key={point.id}
                    className={`${styles.point} ${pointAccentMap[point.accent]}`}
                  >
                    <span className={styles.pointIcon} aria-hidden="true" />
                    <div>
                      <h3 className={styles.pointTitle}>{point.title}</h3>
                      <p className={styles.pointText}>{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.divider} aria-hidden="true">
              <img
                className={styles.dividerMark}
                src={SiteContent.logoMarkSrc}
                alt=""
                width={36}
                height={36}
              />
            </div>

            <div className={styles.closing}>
              <h3 className={styles.closingTitle}>Our Offices</h3>
              <span className={styles.closingRule} aria-hidden="true" />
              <OfficeLocations layout="stack" />
            </div>
          </div>

          <ul className={`${styles.channels} reveal`}>
            {contact.channels.map((channel) => {
              const className = `${styles.channel} ${channelAccentMap[channel.accent]}`;
              const body = (
                <>
                  <span className={styles.channelIcon} aria-hidden="true" />
                  <span className={styles.channelValue}>{channel.value}</span>
                  <span className={styles.channelLabel}>{channel.label}</span>
                </>
              );

              if (channel.href) {
                return (
                  <li key={channel.id}>
                    <a
                      className={className}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      onClick={() =>
                        CommitmentSectionController.logChannelClick(
                          channel.id,
                          channel.href,
                        )
                      }
                    >
                      {body}
                    </a>
                  </li>
                );
              }

              return (
                <li key={channel.id}>
                  <div className={className}>{body}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

