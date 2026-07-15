import { SiteContent } from "../../content/siteContent";
import styles from "./VisionMissionSection.module.css";

export function VisionMissionSection() {
  const { vision, mission } = SiteContent.visionMission;

  return (
    <section className="section section--tight" aria-label="Vision and Mission">
      <div className="section__inner">
        <div className={`${styles.grid} reveal`}>
          <article className={`${styles.block} ${styles.vision}`}>
            <p className="section__label">{vision.label}</p>
            <p className={styles.text}>{vision.text}</p>
          </article>
          <article className={`${styles.block} ${styles.mission}`}>
            <p className="section__label">{mission.label}</p>
            <p className={styles.text}>{mission.text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
