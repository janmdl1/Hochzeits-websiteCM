import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Timeline from "@/components/Timeline";
import Location from "@/components/Location";
import Confirmation from "@/components/Confirmation";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] text-[#2b2723]">
      <Hero />
      <Story />
      <Timeline />
      <Location />
      <Confirmation />
      <Gallery />
      <Gifts />
      <FAQ />

    </main>
  );
}