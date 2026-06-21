import BentoSection from "./BentoSection";
import CollectionSection from "./CollectionSection";
import ExperienceSection from "./ExperienceSection";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import Hero from "./Hero";
import JournalSection from "./JournalSection";
import Navbar from "./Navbar";

export default function LiveHomepage() {
  return (
    <main className="overflow-x-clip bg-[#FAF7F2] text-[#604D45]">
      <Navbar />
      <Hero />
      <CollectionSection />
      <ExperienceSection />
      <BentoSection />
      <JournalSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
