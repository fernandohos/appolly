import styles from "./styles.module.css";
import aboutPhone from "@public/about-phone.png";
import { Card } from "./Card";
import Image from "next/image";

const aboutCardInfo = [
  {
    title: "CREATIVE DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    title: "EASY TO USE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    title: "BEST USER EXPERIENCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
];

export function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <div>
        <h2 className={styles.title}>About our app</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={aboutPhone}
            alt="phone with banking app open showing investment charts"
            sizes="386px 526px"
            fill
          />
        </div>
        <div>
          {aboutCardInfo.map((cardInfo) => (
            <Card key={cardInfo.title} {...cardInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
