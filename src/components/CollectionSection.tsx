import { LaceCard, LaceDivider } from "./lace/Lace";

const collections = [
  { title: "Floral Bags", note: "embroidered in bloom", tone: "#C9DEEF", shape: "rounded-b-[2rem] rounded-t-[3rem]" },
  { title: "Vintage Pouches", note: "small heirloom treasures", tone: "#E6F1FA", shape: "rounded-[2.5rem_2.5rem_1rem_1rem]" },
  { title: "Crochet Collection", note: "looped patiently by hand", tone: "#D8DDA8", shape: "rounded-t-full rounded-b-[1.75rem]" },
  { title: "Cottage Accessories", note: "for quiet garden days", tone: "#F0F7FD", shape: "rounded-[40%_60%_45%_55%]" },
  { title: "Lace Collection", note: "delicate as stationery", tone: "#FDFBF7", shape: "rounded-[2rem]" },
  { title: "Soft Essentials", note: "everyday, made beautiful", tone: "#AFCBE3", shape: "rounded-[1.5rem_3rem_1.5rem_3rem]" },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="botanical-paper bg-[var(--angel-mist)] px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-['Allura'] text-3xl text-[var(--gold-fusion)]">the embroidered collection</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-none text-[var(--ink)] sm:text-7xl">Made like an invitation to beauty</h2>
          <LaceDivider className="mt-6" />
        </header>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <LaceCard key={item.title} className="group min-h-[440px] transition duration-500 hover:-translate-y-1">
              <div className="flex h-full flex-col items-center text-center">
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-fusion)]">Collection 0{index + 1}</span>
                <div className="relative my-8 h-44 w-full overflow-hidden rounded-[1.5rem] bg-[var(--sky-whisper)]">
                  <div className={`absolute left-1/2 top-1/2 h-[62%] w-[42%] -translate-x-1/2 -translate-y-1/2 border border-white/80 shadow-[0_14px_28px_rgba(72,91,106,0.09)] ${item.shape}`} style={{ backgroundColor: item.tone }}>
                    <div className="absolute inset-x-[12%] top-[20%] border-t border-dashed border-[#8EB1D1]/55" />
                    <div className="botanical-stitch absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <p className="font-['Allura'] text-2xl text-[var(--cool-cerulean)]">{item.note}</p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 font-['EB_Garamond'] text-base leading-6 text-[#657063]">Hand-finished details, composed in small and thoughtful editions.</p>
                <a href="#contact" className="mt-auto pt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--bronzetone)]">Explore</a>
              </div>
            </LaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
