"use client";

import styles from "./styles.module.css";
import googlePlayButton from "@public/google-play-download.svg";
import appStoreButton from "@public/app-store-download.svg";
import downloadIcon from "@public/download.svg";
import likeIcon from "@public/like.svg";
import starIcon from "@public/star.svg";
import floatingPhonesImage from "@public/two-floating-phones.png";
import { motion } from "framer-motion";
import Image from "next/image";

export function DownloadApp() {
  return (
    <section className={styles.container}>
      <div>
        <motion.h2
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Download App now
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </motion.p>
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
          <motion.div
            className={styles.card}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Image src={downloadIcon} alt="download icon" />
            <p>59865</p>
            <p>DOWNLOAD</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image src={likeIcon} alt="like icon" />
            <p>29852</p>
            <p>LIKE</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image src={starIcon} alt="star icon" />
            <p>1500</p>
            <p>5 star rating</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.imageContainer}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={floatingPhonesImage}
          alt="two floating phones with banking app open"
          fill
          sizes="516px 480px"
        />
      </motion.div>
    </section>
  );
}
