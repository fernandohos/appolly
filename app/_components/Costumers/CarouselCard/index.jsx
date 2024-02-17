import Image from "next/image";
import styles from "./styles.module.css";

export function CarouselCard({ name, profession, description, photoUrl }) {
  return (
    <swiper-slide className={styles.swiperSlide}>
      <div className={styles.slide}>
        <Image src={photoUrl} width={80} height={80} alt={`${name} photo`} />
        <p className={styles.name}>{name}</p>
        <p className={styles.profession}>{profession}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </swiper-slide>
  );
}
