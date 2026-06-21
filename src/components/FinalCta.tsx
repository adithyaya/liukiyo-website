export default function FinalCta() {
  return (
    <section id="contact" className="paper-grain bg-[#F4ECE4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="fabric-folds relative mx-auto max-w-6xl overflow-hidden rounded-[2rem_4rem_2rem_4rem] border border-[#C9A18E]/30 bg-[#E9D6D0] px-6 py-20 text-center shadow-[0_15px_40px_rgba(91,72,62,0.08)] sm:px-12 sm:py-28">
        <div className="lace-pattern absolute inset-x-0 top-0 h-16 opacity-55" />
        <div className="lace-pattern absolute inset-x-0 bottom-0 h-16 rotate-180 opacity-55" />
        <div className="absolute left-[8%] top-[25%] h-20 w-10 -rotate-[25deg] rounded-[80%_15%_80%_20%] bg-[#F3E3DF]/65" />
        <div className="absolute bottom-[22%] right-[9%] h-24 w-12 rotate-[30deg] rounded-[80%_15%_80%_20%] bg-[#B7C8B1]/35" />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-['Caveat'] text-2xl text-[#9F6E6B] sm:text-3xl">a little something is waiting...</p>
          <h2 className="mt-3 font-['Cormorant_Garamond'] text-5xl font-semibold leading-[0.92] text-[#604D45] sm:text-7xl">Find the piece that feels like it was made for you.</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#77645E]">Come wander through our handmade collection. Take your time—lovely things are often found slowly.</p>
          <a href="#collection" className="mt-8 inline-block rounded-full border border-[#8E665F]/20 bg-[#A87970] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_8px_18px_rgba(112,76,70,0.11)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#986A64]">Visit our little shop</a>
        </div>
      </div>
    </section>
  );
}
