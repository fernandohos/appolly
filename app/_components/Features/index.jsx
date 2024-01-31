import styles from "./styles.module.css";
import { FeaturesGrid } from "./FeaturesGrid";

export function Features() {
  return (
    <section id="features" className={styles.container}>
      <div>
        <div>
          <h2 className={styles.title}>APP FEATURES</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
