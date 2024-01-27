import styles from "./styles.module.css";
import logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ContactHeader } from "./ContactHeader";

import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <ContactHeader />
      <nav className={styles.header}>
        <HamburgerMenu />
        <ul className={styles.menu}>
          <li className={styles.desktopOnly}>Home</li>
          <li>About</li>
          <li>Features</li>
        </ul>
        <Link className={styles.logoContainer} href="/">
          <Image src={logo} width={166} height={29} alt="apolly logo" />
        </Link>
        <div className={styles.logoSpacer}></div>
        <ul className={styles.menu}>
          <li>Screenshot</li>
          <li>Blog</li>
          <li className={`${styles.desktopOnly} ${styles.noMargin}`}>
            <button className={styles.downloadButton}>Download</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
