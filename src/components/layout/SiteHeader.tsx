import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiteContent } from "../../content/siteContent";
import { Logger } from "../../logging/Logger";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  transparent?: boolean;
};

export class SiteHeaderController {
  public static handleNavClick(path: string, closeMenu: () => void): void {
    Logger.info("handleNavClick", `Navigating to page: ${path}`);
    closeMenu();
  }

  public static handleBrandClick(navigate: (path: string) => void): void {
    Logger.info("handleBrandClick", "Navigating to home");
    navigate("/");
  }
}

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((prev) => {
        if (prev !== next) {
          Logger.debug("onScroll", `Header scrolled state -> ${next}`);
        }
        return next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const overVideo = transparent && !scrolled && !menuOpen;

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.headerScrolled : "",
        overVideo ? styles.headerTransparent : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.inner}>
        <NavLink
          to="/"
          className={styles.brand}
          onClick={() => {
            SiteHeaderController.handleBrandClick(navigate);
            closeMenu();
          }}
        >
          <img
            className={styles.brandMark}
            src={SiteContent.logoMarkSrc}
            alt=""
            width={32}
            height={32}
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Specitas</span>
            <span className={styles.brandGroup}>Group</span>
          </span>
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {SiteContent.navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
              onClick={() =>
                SiteHeaderController.handleNavClick(item.path, closeMenu)
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            Logger.info("toggleMenu", `Menu open -> ${!menuOpen}`);
            setMenuOpen((open) => !open);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {SiteContent.navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
              onClick={() =>
                SiteHeaderController.handleNavClick(item.path, closeMenu)
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
