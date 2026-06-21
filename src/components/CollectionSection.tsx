const collections = [
  { title: "Floral Bags", note: "petal by petal", color: "bg-[#E8CFCB]", rotate: "sm:-rotate-2", shape: "rounded-t-[45%] rounded-b-[1.5rem]" },
  { title: "Vintage Pouches", note: "tiny keepsakes", color: "bg-[#DCC5BC]", rotate: "sm:rotate-2", shape: "rounded-[2rem_2rem_1rem_1rem]" },
  { title: "Crochet Collection", note: "looped by hand", color: "bg-[#E8DFCF]", rotate: "sm:rotate-1", shape: "rounded-t-full rounded-b-[1.25rem]" },
  { title: "Cottage Accessories", note: "for gentle days", color: "bg-[#B7C8B1]", rotate: "sm:-rotate-1", shape: "rounded-[45%_55%_40%_60%]" },
  { title: "Lace Collection", note: "softly detailed", color: "bg-[#F1E7DE]", rotate: "sm:rotate-2", shape: "rounded-[2rem]" },
  { title: "Everyday Soft Essentials", note: "made to be loved", color: "bg-[#C9A18E]", rotate: "sm:-rotate-2", shape: "rounded-[1rem_2.5rem_1rem_2.5rem]" },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="paper-grain bg-[#F3ECE5]/65 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-['Caveat'] text-2xl text-[#A66F70]">from our worktable</p>
          <h2 className="mt-1 font-['Cormorant_Garamond'] text-5xl font-semibold leading-none text-[#604D45] sm:text-6xl lg:text-7xl">Made for your little moments</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#7B6B64]">Small-batch pieces with their own lovely quirks—cut, crocheted, embroidered, and finished in our atelier.</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <article key={item.title} className={`group relative ${item.rotate} border border-[#C9A18E]/25 bg-[#FDFBF8] p-3 pb-6 shadow-[0_10px_25px_rgba(91,72,62,0.08)] transition duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-1.5`}>
              <div className="fabric-folds relative aspect-[5/4] overflow-hidden bg-[#F6EFE9]">
                <div className={`absolute left-1/2 top-1/2 h-[52%] w-[42%] -translate-x-1/2 -translate-y-1/2 border border-white/65 ${item.color} ${item.shape} shadow-[0_12px_22px_rgba(85,67,59,0.09)]`}>
                  <div className="absolute inset-x-[12%] top-[20%] border-t border-dashed border-white/75" />
                  {index % 2 === 0 && <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/65"><span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A86B]" /></div>}
                </div>
                <div className="lace-pattern absolute inset-x-0 bottom-0 h-10 opacity-45" />
              </div>
              <div className="px-3 pt-5 text-center">
                <span className="font-['Caveat'] text-lg text-[#9B716A]">{item.note}</span>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#614F47]">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#88766E]">No two pieces are ever quite the same.</p>
              </div>
              <span className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-2deg] bg-[#D9C3A7]/45" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
