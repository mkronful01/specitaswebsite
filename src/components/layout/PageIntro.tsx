import styles from "./PageIntro.module.css";

type PageIntroProps = {
  label: string;
  title: string;
  lead?: string;
};

export function PageIntro({ label, title, lead }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <div className={styles.inner}>
        <p className="section__label">{label}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
    </header>
  );
}
