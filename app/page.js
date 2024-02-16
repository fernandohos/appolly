import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Features } from "@components/Features";
import { AppInterfaces } from "@components/AppInterfaces";
import { DownloadApp } from "@components/DownloadApp";
import { Tutorial } from "@components/Tutorial";
import { Team } from "@components/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <AppInterfaces />
      <DownloadApp />
      <Tutorial />
      <Team />
      hello world
    </main>
  );
}
