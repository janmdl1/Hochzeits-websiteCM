import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Timeline from "@/components/Timeline";
import Location from "@/components/Location";
import Confirmation from "@/components/Confirmation";
import Gifts from "@/components/Gifts";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] text-[#2b2723]">
      <Hero />
      <Story />
      <Timeline />
      <Location />
      <Confirmation />
      <Gifts />
      <Gallery />
      <FAQ />
      <Footer/>

    </main>
  );
}