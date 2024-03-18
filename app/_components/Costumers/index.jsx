"use client";

import { Carousel } from "./Carousel";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export function Costumers() {
  return (
    <section id="costumers" className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our happy costumers
      </motion.h2>
      <motion.p
        className={styles.description}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </motion.p>
      <Carousel />
    </section>
  );
}
