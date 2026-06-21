import { LaceDivider } from "./lace/Lace";

const steps = [
  ["I", "Botanical study", "A flower, leaf, or antique textile begins the visual story."],
  ["II", "Material pairing", "Mist-blue cloth meets ivory thread and softly aged accents."],
  ["III", "Slow construction", "Every seam and embroidered detail is given time."],
  ["IV", "The final flourish", "A lace edge, a small ribbon, and a maker's careful inspection."],
];

export default function BentoSection() {
  return (
    <section className="bg-[var(--baby-blue-cloud)] px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-['Allura'] text-3xl text-[var(--gold-fusion)]">the making ritual</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[var(--ink)] sm:text-6xl">From garden thought to keepsake</h2>
          <LaceDivider className="mt-5" />
        </header>
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white bg-white md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, copy]) => (
            <article key={title} className="botanical-paper relative min-h-72 bg-[var(--sky-whisper)] p-8 text-center">
              <span className="font-['Cormorant_Garamond'] text-3xl italic text-[var(--cool-cerulean)]">{number}</span>
              <div className="botanical-stitch mx-auto my-6 h-12 w-12" />
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-3 font-['EB_Garamond'] text-base leading-6 text-[#657063]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
