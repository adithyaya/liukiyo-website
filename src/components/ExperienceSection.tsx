import meadow from "../assets/meadow.jpg";
import { LaceDivider, LaceFrame, LaceSection } from "./lace/Lace";

export default function ExperienceSection() {
  return (
    <LaceSection id="story" className="botanical-paper bg-[var(--sky-whisper)] px-5 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <LaceFrame className="mx-auto aspect-[4/3] w-full max-w-xl">
          <img src={meadow} alt="Watercolor meadow where Liukiy.o finds inspiration" className="h-full w-full rounded-2xl object-cover object-bottom opacity-90" />
        </LaceFrame>
        <div>
          <p className="font-['Allura'] text-3xl text-[var(--gold-fusion)]">inside the atelier</p>
          <h2 className="mt-1 font-['Cormorant_Garamond'] text-5xl font-semibold leading-[0.95] text-[var(--ink)] sm:text-7xl">Crafted with the patience of embroidery.</h2>
          <LaceDivider className="my-6 max-w-lg" />
          <div className="space-y-5 font-['EB_Garamond'] text-lg leading-8 text-[#5D695B]">
            <p>Liukiy.o begins with garden studies, powder-blue cloth, and the enduring romance of Victorian lacework.</p>
            <p>Each piece is cut, stitched, and finished by hand. Variations are welcomed as the signature of a real maker—not hidden as imperfections.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Small editions", "Hand-finished", "Botanical inspiration"].map((item) => <span key={item} className="rounded-full border border-[var(--powder-blue-haze)] bg-white/65 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--bronzetone)]">{item}</span>)}
          </div>
        </div>
      </div>
    </LaceSection>
  );
}
