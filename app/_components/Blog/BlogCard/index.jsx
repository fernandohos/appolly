import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export function BlogCard({ image, title, description, articleUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} fill sizes="370px 228px" alt={`${title} banner`} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Link href={articleUrl} className={styles.articleLink}>READ MORE</Link>
    </div>
  );
}
