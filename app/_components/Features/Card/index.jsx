import styles from "./styles.module.css";
import Image from "next/image";

export function Card({ icon, title, description, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image src={icon} width={40} height={40} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
