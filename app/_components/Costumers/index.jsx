import { Carousel } from "./Carousel";
import styles from "./styles.module.css";

export function Costumers() {
  return (
    <section id="costumers" className={styles.container}>
      <h2 className={styles.title}>Our happy costumers</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <Carousel />
    </section>
  );
}
