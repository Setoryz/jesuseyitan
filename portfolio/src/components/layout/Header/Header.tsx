import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <span className={styles.tag}> &lt;</span>
          <span className={styles.logo__name}>Odukoya Jesuseyitan</span>
          <span className={styles.tag}>/&gt;</span>
        </a>
      </Link>
      {/* 
      <input className={styles.menu__btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu__icon} htmlFor="menu-btn">
        <span className={styles.nav__icon}></span>
      </label>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </nav>
     */}
    </header>
  );
};

export default Header;
