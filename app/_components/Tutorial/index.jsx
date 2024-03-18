"use client";

import { PlayButton } from "./PlayButton";
import styles from "./styles.module.css";
import { useVideoPlayer } from "@hooks/useVideoPlayer";
import { motion } from "framer-motion";

export function Tutorial() {
  const {
    videoRef,
    progressBarRef,
    togglePlayPause,
    handleTimeUpdate,
    handleProgressBarClick,
    isVideoPlaying,
  } = useVideoPlayer();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          how to use app perfectly
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </motion.p>
      </div>
      <div className={styles.tutorial}>
        <video muted ref={videoRef} onTimeUpdate={handleTimeUpdate}>
          <source src="/app-tutorial.mp4" type="video/mp4" />
        </video>
        <PlayButton onClick={togglePlayPause} isVideoPlaying={isVideoPlaying} />
        <div className={styles.progressBar} onClick={handleProgressBarClick}>
          <span ref={progressBarRef}></span>
        </div>
      </div>
    </section>
  );
}
