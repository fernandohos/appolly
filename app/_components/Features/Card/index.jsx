import styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export function Card({ icon, title, description, className }) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Image src={icon} width={40} height={40} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
