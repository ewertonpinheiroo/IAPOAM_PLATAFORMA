// app/page.tsx (ou page principal.txt)
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AreasDeAtuacao } from "@/components/AreasDeAtuacao";
import { Projects } from "@/components/Projects";
import { Statistics } from "@/components/Statistics";
import { DonationCTA } from "@/components/DonationCTA";
import { Transparency } from "@/components/Transparency";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06100F]">
      <Header />
      <main>
        <Hero />
        <About />
        <AreasDeAtuacao />
        <Projects />
        <Statistics />
        <DonationCTA />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}