import Image from "next/image";
import styles from "./styles.module.css";
import facebookIcon from "@public/facebook.svg";
import instagramIcon from "@public/instagram.svg";
import twitterIcon from "@public/twitter.svg";
import youtubeIcon from "@public/youtube.svg";


export function TeamCard({
  name,
  photoUrl,
  profession,
  description,
  socialMedia,
}) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.photo}
        src={photoUrl}
        alt={`${name} photo`}
        width={180}
        height={180}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.profession}>{profession}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.socialMedia}>
        <a href={socialMedia.facebook}>
          <Image
            src={facebookIcon}
            alt="facebook icon"
            width={30}
            height={30}
          />
        </a>
        <span />
        <a href={socialMedia.instagram}>
          <Image
            src={instagramIcon}
            alt="instagram icon"
            width={30}
            height={30}
          />
        </a>
        <span />
        <a href={socialMedia.twitter}>
          <Image src={twitterIcon} alt="twitter icon" width={30} height={30} />
        </a>
        <span />
        <a href={socialMedia.youtube}>
          <Image src={youtubeIcon} alt="youtube icon" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
