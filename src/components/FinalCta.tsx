import { LaceFrame, LaceSection } from "./lace/Lace";

export default function FinalCta() {
  return (
    <LaceSection id="contact" className="bg-[var(--soft-sky-wash)] px-5 py-32 sm:px-8 lg:px-12">
      <LaceFrame className="mx-auto max-w-6xl bg-[var(--sky-whisper)]">
        <div className="mx-auto max-w-3xl py-8 text-center sm:py-14">
          <p className="font-['Allura'] text-3xl text-[var(--gold-fusion)]">an invitation from the atelier</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-[0.94] text-[var(--ink)] sm:text-7xl">Find the piece that feels written for you.</h2>
          <p className="mx-auto mt-6 max-w-xl font-['EB_Garamond'] text-lg leading-8 text-[#5D695B]">Discover a collection shaped by lace, gardens, and the enduring pleasure of owning something made by hand.</p>
          <a href="#collection" className="mt-8 inline-block rounded-full border border-[var(--cool-cerulean)] bg-[var(--baby-blue-cloud)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4E687E] transition hover:bg-white">Enter the collection</a>
        </div>
      </LaceFrame>
    </LaceSection>
  );
}
