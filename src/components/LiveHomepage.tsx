import BentoSection from "./BentoSection";
import CollectionSection from "./CollectionSection";
import ExperienceSection from "./ExperienceSection";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import Hero from "./Hero";
import JournalSection from "./JournalSection";
import Navbar from "./Navbar";
import { liukiyoTheme } from "../theme/liukiyoTheme";

export default function LiveHomepage() {
  return (
    <main className="overflow-x-clip" style={{ backgroundColor: liukiyoTheme.colors.skyWhisper, color: liukiyoTheme.colors.ink }}>
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
