import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Features } from "@components/Features";
import { AppInterfaces } from "@components/AppInterfaces";
import { DownloadApp } from "@components/DownloadApp";
import { Tutorial } from "@components/Tutorial";
import { Team } from "@components/Team";
import { Costumers } from "@components/Costumers";
import { Blog } from "@components/Blog";
import { ContactCard } from "@components/ContactCard";

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
      <Costumers />
      <Blog />
      <ContactCard />
    </main>
  );
}
