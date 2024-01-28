import styles from "./styles.module.css";
import Image from "next/image";
import checkIcon from "@public/check.svg";

export function Card({ title, description }) {
  return (
    <div className={styles.container}>
      <div>
        <Image src={checkIcon} alt="check icon" width={30} height={30} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
