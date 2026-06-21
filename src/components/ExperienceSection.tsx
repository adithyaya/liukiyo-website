import meadow from "../assets/meadow.jpg";

export default function ExperienceSection() {
  return (
    <section id="story" className="paper-grain relative overflow-hidden bg-[#FAF7F2] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-[#B7C8B1]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[580px] pb-12 pl-4 pr-8 pt-5 sm:pl-10 sm:pr-16">
          <div className="rotate-[-3deg] border border-[#C9A18E]/25 bg-[#FDFBF8] p-3 pb-14 shadow-[0_14px_35px_rgba(92,72,61,0.10)]">
            <img src={meadow} alt="Watercolor meadow with delicate blue flowers" className="aspect-[4/3] w-full object-cover object-bottom opacity-90" />
            <p className="mt-4 text-center font-['Caveat'] text-xl text-[#95716B]">where our ideas begin...</p>
          </div>
          <div className="absolute bottom-0 right-0 w-[48%] rotate-6 rounded-sm border border-[#C9A18E]/25 bg-[#F6E6E1] p-5 shadow-[0_10px_25px_rgba(91,72,62,0.09)]">
            <div className="border border-dashed border-[#B88983]/40 px-4 py-6 text-center">
              <span className="font-['Caveat'] text-2xl text-[#9C716B]">a note from the maker</span>
              <p className="mt-2 text-xs leading-5 text-[#786660]">“I hope each piece feels like finding a tiny flower tucked inside an old book.”</p>
            </div>
          </div>
          <span className="absolute left-[35%] top-1 h-6 w-20 -rotate-3 bg-[#D7C0A4]/45" />
        </div>

        <div>
          <p className="font-['Caveat'] text-2xl text-[#A66F70]">our little story</p>
          <h2 className="mt-2 font-['Cormorant_Garamond'] text-5xl font-semibold leading-[0.95] text-[#604D45] sm:text-6xl lg:text-7xl">Crafted by hand, meant to be cherished.</h2>
          <div className="ribbon-divider my-7 h-4 w-40" />
          <div className="space-y-5 text-[15px] leading-8 text-[#786861]">
            <p>Liukiy.o grew from a love of old fabric boxes, cottage gardens, and the quiet magic of making something slowly with your own hands.</p>
            <p>Every pouch, bag, and small accessory begins at our worktable. We choose gentle colours, mix vintage-inspired details, and let the material guide each piece into its own personality.</p>
            <p>There may be a tiny difference in a stitch or flower—and that is the loveliest part. It is the trace of a real pair of hands, making something especially for yours.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["small batches", "hand-finished", "made with care"].map((item) => <span key={item} className="rounded-full border border-[#B7C8B1]/65 bg-[#F0F3EC] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#6E796A]">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
