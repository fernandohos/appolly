import emailIcon from "@public/email.svg";
import phoneIcon from "@public/phone.svg";
import facebookIcon from "@public/facebook.svg";
import instagramIcon from "@public/instagram.svg";
import youtubeIcon from "@public/youtube.svg";
import twitterIcon from "@public/twitter.svg";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export function ContactHeader() {
  return (
    <address className={styles.contact}>
    <div className={styles.contactLeft}>
      <a
        className={styles.contactInfo}
        href="mailto:contact@appolly.com"
        tabIndex={0}
      >
        <Image src={emailIcon} alt="email icon" width={20} height={20} />
        <p>Contact@appolly.com</p>
      </a>
      <a className={styles.contactInfo} href="tel:4805550103" tabIndex={0}>
        <Image src={phoneIcon} alt="phone icon" width={20} height={20} />
        <p>&#40;480&#41; 555-0103</p>
      </a>
    </div>
    <div className={styles.contactRight}>
      <Link href="https://facebook.com" className={styles.socialMedia}>
        <Image
          src={facebookIcon}
          alt="Facebook Icon"
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://instagram.com" className={styles.socialMedia}>
        <Image
          src={instagramIcon}
          alt="Instagram Icon"
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://youtube.com" className={styles.socialMedia}>
        <Image
          src={twitterIcon}
          alt="Youtube Icon"
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://twitter.com" className={styles.socialMedia}>
        <Image
          src={youtubeIcon}
          alt="Twitter Icon"
          width={20}
          height={20}
        />
      </Link>
    </div>
  </address>
  )
}