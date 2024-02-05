import styles from "./styles.module.css";
import { Carousel } from "./Carousel";


export function AppInterfaces() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>CHECkOUT OUR APP INTERFACE LOOK</h1>
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
