import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./HomeVideoHero.module.css";

export class HomeVideoHeroController {
  public static async startPlayback(video: HTMLVideoElement): Promise<void> {
    Logger.info("startPlayback", "Attempting hero video autoplay on load");
    video.muted = true;
    video.playsInline = true;

    try {
      await video.play();
      Logger.info("startPlayback", "Hero video playback started");
    } catch (error) {
      Logger.warn("startPlayback", "Autoplay blocked or failed", error);
    }
  }

  public static toggleMute(video: HTMLVideoElement, muted: boolean): boolean {
    const nextMuted = !muted;
    video.muted = nextMuted;
    Logger.info("toggleMute", `Video muted -> ${nextMuted}`);
    return nextMuted;
  }

  public static togglePlay(
    video: HTMLVideoElement,
    isPlaying: boolean,
  ): boolean {
    if (isPlaying) {
      video.pause();
      Logger.info("togglePlay", "Video paused");
      return false;
    }

    void video.play();
    Logger.info("togglePlay", "Video resumed");
    return true;
  }
}

export function HomeVideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const { hero } = SiteContent;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      Logger.warn("HomeVideoHero", "Video element ref is null");
      return;
    }

    const onPlaying = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    void HomeVideoHeroController.startPlayback(video);

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Home video">
      <div className={styles.media}>
        <video
          ref={videoRef}
          className={styles.video}
          src={SiteContent.homeVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Specitas Group company film"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.brandBlock}>
          <img
            className={styles.logoMark}
            src={SiteContent.logoMarkSrc}
            alt=""
            width={88}
            height={88}
          />
          <div>
            <div className={styles.wordmarkPrimary}>Specitas</div>
            <div className={styles.wordmarkSecondary}>Group</div>
          </div>
        </div>

        <h1 className={styles.headline}>{hero.headline}</h1>
        <p className={styles.support}>{hero.support}</p>

        <div className={styles.actions}>
          <Link
            className="btn btn--primary"
            to={hero.primaryCta.path}
            onClick={() =>
              Logger.info("handleCta", `Home CTA: ${hero.primaryCta.label}`)
            }
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            className="btn btn--ghost"
            to={hero.secondaryCta.path}
            onClick={() =>
              Logger.info("handleCta", `Home CTA: ${hero.secondaryCta.label}`)
            }
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={() => {
            const video = videoRef.current;
            if (!video) {
              return;
            }
            setPlaying(HomeVideoHeroController.togglePlay(video, playing));
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={() => {
            const video = videoRef.current;
            if (!video) {
              return;
            }
            setMuted(HomeVideoHeroController.toggleMute(video, muted));
          }}
        >
          {muted ? "Sound" : "Mute"}
        </button>
      </div>

      <div className={styles.accentBar} aria-hidden="true" />
    </section>
  );
}
