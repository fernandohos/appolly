import styles from "./page.module.css";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Features } from "@components/Features";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      hello world
    </main>
  );
}
