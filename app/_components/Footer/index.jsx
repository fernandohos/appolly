import Image from "next/image";
import styles from "./styles.module.css";
import facebook from "@public/facebook.svg";
import instagram from "@public/instagram.svg";
import twitter from "@public/twitter.svg";
import youtube from "@public/youtube.svg";
import logo from "@public/logo.svg";
import plane from "@public/plane.svg";

export function Footer() {
  return (
    <footer className={styles.container}>
    <div className={styles.contentWrapper}>
      <div className={styles.logoContainer}>
        <Image src={logo} width={150} alt="appolly logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank">
            <Image src={facebook} width={25} height={25} alt="facebook icon" />
          </a>
          <span />
          <a href="https://instagram.com" target="_blank">
            <Image
              src={instagram}
              width={25}
              height={25}
              alt="instagram icon"
            />
          </a>
          <span />
          <a href="https://twitter.com" target="_blank">
            <Image src={twitter} width={25} height={25} alt="twitter icon" />
          </a>
          <span />
          <a href="https://youtube.com" target="_blank">
            <Image src={youtube} width={25} height={25} alt="youtube icon" />
          </a>
        </div>
      </div>
      <div className={styles.quickLink}>
        <h4>Quick Link</h4>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#features">
            <li>Features</li>
          </a>
          <a href="#screenshots">
            <li>Screenshots</li>
          </a>
          <a href="#blog">
            <li>Blog</li>
          </a>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h4>Newsletter</h4>
        <p>Subscribe our newsletter to get our latest update & news</p>
        <form>
          <input type="email" name="" id="" />
          <button type="submit">
            <Image src={plane} width={25} height={25} alt="plane icon" />
          </button>
        </form>
      </div>
      </div>

      <div className={styles.copyright}>
        <hr />
        <p><span>©</span> Copyright 2021 .Ojjomedia. All Right Reserved.</p>
      </div>
    </footer>
  );
}
