import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel";
import { Institutional } from "@/components/Institutional";
import { OuvidoriaTeaser } from "@/components/OuvidoriaTeaser";
import AreasDeAtuacao from "@/components/AreasDeAtuacao";
import Statistics from "@/components/Statistics";
import DonationCTA from "@/components/DonationCTA";
import { Transparency } from "@/components/Transparency";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Carousel />
        <Institutional />
        <OuvidoriaTeaser />
        <AreasDeAtuacao />
        <Statistics />
        <DonationCTA />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}