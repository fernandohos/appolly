"use client";

import styles from "./styles.module.css";
import { FeaturesGrid } from "./FeaturesGrid";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className={styles.container}>
      <div>
        <div>
          <motion.h2
            className={styles.title}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            APP FEATURES
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </motion.p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
