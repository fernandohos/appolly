"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

export function HamburgerMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    setIsMenuOpened((prev) => !prev);
    console.log(isMenuOpened);
  }

  return (
    <div>
      <button
        className={styles.hamburgerMenu}
        onClick={toggleMenu}
        type="button"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isMenuOpened && (
        <div className={styles.menu}>
          <button onClick={toggleMenu} type="button">
            <div></div>
            <div></div>
          </button>
          <nav>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#features">FEATURES</a></li>
              <li><a href="#interface">SCREENSHOT</a></li>
              <li><a href="#blog">BLOG</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
