import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ContentHub from "@/components/ContentHub";
import Mission from "@/components/Mission";
import Highlights from "@/components/Highlights";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <Highlights />
      <Reviews />
      <ClientLogos />
      <Founders />
      <Cta />
      <Services />
      <ContentHub />
      <Footer />
    </main>
  );
}
