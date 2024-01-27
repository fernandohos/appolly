import Image from "next/image";
import styles from "./styles.module.css";
import googlePlayDownload from "@public/google-play-download.svg";
import appStoreDownload from "@public/app-store-download.svg";
import heroPhoneImage from "@public/hero-phone.png";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.leftContentContainer}>
          <div className={styles.squaredBorder}></div>
          <div className={styles.leftContent}>
            <h1>A Great app makes your life better</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p className={styles.downloadApp}>Download App Now</p>
            <div className={styles.downloadButtons}>
              <a
                href="https://play.google.com/store/apps/details?id=com.github.android&hl=en&gl=US"
                target="_blank"
              >
                <Image
                  src={googlePlayDownload}
                  alt="google play download button"
                  fill
                  sizes="200px 65px"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/github/id1477376905"
                target="_blank"
              >
                <Image
                  src={appStoreDownload}
                  alt="app store download button"
                  fill
                  sizes="200px 65px"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.phoneImage}>
          <Image
            src={heroPhoneImage}
            alt="phone with app open showing recent transactions"
            fill
            sizes="248px 500px"
          />
        </div>
      </div>
    </div>
  );
}
