import styles from "./styles.module.css";
import Image from "next/image";
import email from "@public/email.svg";
import phone from "@public/phone.svg";

export function ContactCard() {
  return (
    <address className={styles.container}>
      <a href="mail:Contact@appolly.com" className={styles.cardSection}>
        <div className={styles.iconWrapper}>
          <Image src={email} width={30} height={30} alt="email icon" />
        </div>
        <p>Contact@appolly.com</p>
      </a>
      <span />
      <a href="tel:(480) 555-0103" className={styles.cardSection}>
        <div className={styles.iconWrapper}>
          <Image src={phone} width={30} height={30} alt="phone icon" />
        </div>
        <p>(480) 555-0103</p>
      </a>
    </address>
  );
}
