"use client";

import { TeamCard } from "./TeamCard";
import styles from "./styles.module.css";
import carlaPhoto from "@public/carla.png";
import craigPhoto from "@public/craig.png";
import jocelynPhoto from "@public/jocelyn.png";
import { motion } from "framer-motion";

const teamPeopleInfo = [
  {
    name: "Carla Press",
    photoUrl: carlaPhoto,
    profession: "App developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    },
  },
  {
    name: "Craig Gouse",
    photoUrl: craigPhoto,
    profession: "UI/UX designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    },
  },
  {
    name: "Jocelyn septimus",
    photoUrl: jocelynPhoto,
    profession: "Website developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    },
  },
];

export function Team() {
  return (
    <section className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our reative team
      </motion.h2>
      <motion.p
        className={styles.description}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </motion.p>
      <div className={styles.cardsContainer}>
        {teamPeopleInfo.map((info) => (
          <TeamCard key={info.name} {...info} />
        ))}
      </div>
    </section>
  );
}
