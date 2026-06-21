const steps = [
  { number: "one", title: "A little sketch", copy: "Ideas begin as pencil lines, colour notes, and flowers gathered from slow afternoons.", className: "md:col-span-2 md:row-span-2 bg-[#E9D6D0]" },
  { number: "two", title: "Fabric & thread", copy: "Soft materials are paired by hand.", className: "bg-[#E8E1D4]" },
  { number: "three", title: "Cut with care", copy: "Each piece is measured in our tiny studio.", className: "bg-[#DCE5D7]" },
  { number: "four", title: "Slow stitching", copy: "Seams, crochet, and embroidery take their time.", className: "md:col-span-2 bg-[#F1DFDC]" },
  { number: "five", title: "Wrapped like a gift", copy: "A final ribbon, a handwritten note, and your treasure is ready to travel home.", className: "md:col-span-2 bg-[#E5DDD0]" },
];

export default function BentoSection() {
  return (
    <section className="paper-grain bg-[#EFE8DF]/75 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-['Caveat'] text-2xl text-[#A66F70]">from idea to keepsake</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-none text-[#604D45] sm:text-6xl">How a little piece comes to life</h2>
        </div>
        <div className="grid auto-rows-[230px] gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className={`fabric-folds group relative overflow-hidden rounded-[1.5rem_2.5rem_1.5rem_2.5rem] border border-white/55 p-7 shadow-[0_10px_28px_rgba(91,72,62,0.06)] ${step.className}`}>
              <span className="font-['Caveat'] text-xl text-[#9C706B]">{step.number}</span>
              <div className="absolute right-7 top-7 h-10 w-10 rounded-full border border-dashed border-white/75" />
              <div className="absolute inset-x-7 bottom-7">
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#604E47]">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#786760]">{step.copy}</p>
              </div>
              <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full border border-dashed border-white/50 transition-transform duration-700 group-hover:rotate-12" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
