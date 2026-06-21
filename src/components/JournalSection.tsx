import { LaceCard, LaceDivider } from "./lace/Lace";

const notes = [
  ["Botanical Notes", "Choosing flowers that feel like memories", "Faded petals, blue cornflowers, and the garden references behind our embroidery."],
  ["Atelier Journal", "Inside the powder-blue fabric cupboard", "A study of linen, cotton, lace, and the gentle art of pairing texture."],
  ["Maker's Letter", "Why handmade will always matter", "On beautiful variation, slower days, and the human trace in cherished objects."],
];

export default function JournalSection() {
  return (
    <section id="journal" className="botanical-paper bg-[var(--angel-mist)] px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center"><p className="font-['Allura'] text-3xl text-[var(--gold-fusion)]">the liukiy.o journal</p><h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[var(--ink)] sm:text-7xl">Stories, studies & small details</h2><LaceDivider className="mt-5" /></header>
        <div className="grid gap-7 lg:grid-cols-3">
          {notes.map(([category, title, copy], index) => (
            <LaceCard key={title} className="min-h-[420px]">
              <article className="flex h-full flex-col text-center">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-fusion)]">{category}</span>
                <div className="relative mx-auto my-8 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--powder-blue-haze)] bg-[var(--baby-blue-cloud)]">
                  <span className="font-['Cormorant_Garamond'] text-5xl italic text-white">0{index + 1}</span><div className="botanical-stitch absolute inset-7" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold leading-tight text-[var(--ink)]">{title}</h3>
                <p className="mt-4 font-['EB_Garamond'] text-base leading-6 text-[#657063]">{copy}</p>
                <a href="#journal" className="mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--bronzetone)]">Read journal</a>
              </article>
            </LaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
