"use client";

import { BlogCard } from "./BlogCard";
import styles from "./styles.module.css";
import article1 from "@public/article1.png";
import article2 from "@public/article2.png";
import article3 from "@public/article3.png";
import { motion } from "framer-motion";

const blogArticles = [
  {
    image: article1,
    title: "The Snap Pixel: How It Works and How to Install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    articleUrl: "/",
  },
  {
    image: article2,
    title: "Global Partner Solutions: A Partnership of Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    articleUrl: "/",
  },
  {
    image: article3,
    title: "2021: An opportunity for Snapchatters to start fresh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    articleUrl: "/",
  },
];

export function Blog() {
  return (
    <section id="blog" className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        OUR RECENT BLOG
      </motion.h2>
      <motion.p
        className={styles.description}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </motion.p>
      <div className={styles.articlesContainer}>
        {blogArticles.map((article) => (
          <BlogCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}
