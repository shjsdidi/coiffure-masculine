import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
