import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Features } from "@components/Features";
import { AppInterfaces } from "@components/AppInterfaces";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <AppInterfaces />
      hello world
    </main>
  );
}
