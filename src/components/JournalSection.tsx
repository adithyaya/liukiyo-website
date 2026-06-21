const notes = [
  { date: "June 12", title: "Choosing flowers that feel like memories", copy: "A small guide to faded roses, tiny blue blooms, and the colours that make our hearts soften.", color: "bg-[#E8CFCB]", rotate: "sm:-rotate-2" },
  { date: "May 28", title: "Inside the fabric cupboard", copy: "Linen scraps, old lace, cotton ribbon, and all the lovely beginnings waiting on our shelves.", color: "bg-[#DDE6D8]", rotate: "sm:rotate-1" },
  { date: "May 06", title: "Why handmade will always matter", copy: "On happy imperfections, slower days, and keeping the human touch in the things we carry.", color: "bg-[#E9DDD1]", rotate: "sm:-rotate-1" },
];

export default function JournalSection() {
  return (
    <section id="journal" className="paper-grain bg-[#FAF7F2] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-['Caveat'] text-2xl text-[#A66F70]">letters from the worktable</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#604D45] sm:text-6xl">Little notes & stories</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {notes.map((note, index) => (
            <article key={note.title} className={`group ${note.rotate} border border-[#C9A18E]/25 bg-[#FDFBF8] p-3 pb-7 shadow-[0_10px_28px_rgba(91,72,62,0.08)] transition duration-500 hover:rotate-0 hover:-translate-y-1`}>
              <div className={`fabric-folds relative aspect-[4/3] overflow-hidden ${note.color}`}>
                <div className="absolute left-1/2 top-1/2 h-[60%] w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-6 border border-white/60 bg-white/20" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Caveat'] text-6xl text-white/75">0{index + 1}</span>
                <div className="lace-pattern absolute inset-x-0 bottom-0 h-11 opacity-50" />
              </div>
              <div className="px-4 pt-6">
                <p className="font-['Caveat'] text-lg text-[#A1746D]">{note.date}</p>
                <h3 className="mt-1 font-['Cormorant_Garamond'] text-3xl font-semibold leading-tight text-[#604D45]">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7B6B64]">{note.copy}</p>
                <span className="mt-5 inline-block border-b border-dashed border-[#A87970]/45 pb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9B6F69]">Read the note</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
