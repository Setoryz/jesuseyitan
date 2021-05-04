import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <span className={styles.tag}> &lt;</span>
            <span className={styles.logo__name}>Odukoya Jesuseyitan</span>
            <span className={styles.tag}>/&gt;</span>
          </a>
        </Link>

        <input className={styles.menu__btn} type="checkbox" id="menu-btn" />
        <label className={styles.menu__icon} htmlFor="menu-btn">
          <span className={styles.nav__icon}></span>
        </label>

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {navPaths.map(({ path, text }) => (
              <li key={path}>
                <Link href={path}>
                  <a className={asPath === path ? styles.active : ""}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const navPaths = [
  { path: "/", text: "Welcome" },
  { path: "/WhatIDo", text: "Skills" },
  { path: "/Portfolio", text: "Projects" },
  { path: "/Contact", text: "Contact Me" },
];

export default Header;
