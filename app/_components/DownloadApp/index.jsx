import styles from "./styles.module.css";
import googlePlayButton from "@public/google-play-download.svg";
import appStoreButton from "@public/app-store-download.svg";
import downloadIcon from "@public/download.svg";
import likeIcon from "@public/like.svg";
import starIcon from "@public/star.svg";
import floatingPhonesImage from "@public/two-floating-phones.png";
import Image from "next/image";

export function DownloadApp() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>Download App now</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div className={styles.downloadButtons}>
          <a
            href="https://play.google.com/store/apps/details?id=com.github.android&hl=en&gl=US"
            target="_blank"
          >
            <Image
              src={googlePlayButton}
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
              src={appStoreButton}
              alt="app store download button"
              fill
              sizes="200px 65px"
            />
          </a>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image src={downloadIcon} alt="download icon" />
            <p>59865</p>
            <p>DOWNLOAD</p>
          </div>
          <div className={styles.card}>
            <Image src={likeIcon} alt="like icon" />
            <p>29852</p>
            <p>LIKE</p>
          </div>
          <div className={styles.card}>
            <Image src={starIcon} alt="star icon" />
            <p>1500</p>
            <p>5 star rating</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={floatingPhonesImage}
          alt="two floating phones with banking app open"
          fill
          sizes="516px 480px"
        />
      </div>
    </section>
  );
}
