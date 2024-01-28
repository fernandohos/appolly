import styles from "./page.module.css";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { About } from "./_components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      hello world
    </main>
  );
}
