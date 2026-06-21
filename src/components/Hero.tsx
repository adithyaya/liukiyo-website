function TinyFlower({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-full rounded-full bg-[#E8CFCB]" />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-full -translate-y-1/2 rounded-full bg-[#E8CFCB]" />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#E8CFCB]" />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#E8CFCB]" />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A86B]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="paper-grain relative min-h-screen overflow-hidden bg-[#FAF7F2] px-5 sm:px-8 xl:px-12">
      <div className="watercolor-wash absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#E8CFCB]/35 blur-3xl" />
      <div className="watercolor-wash absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#B7C8B1]/25 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 py-28 text-center sm:py-32 xl:grid xl:grid-cols-[1fr_0.85fr] xl:gap-16 xl:text-left">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center xl:mx-0 xl:max-w-[760px] xl:items-start">
          <p className="font-['Caveat'] text-2xl text-[#A66F70] sm:text-3xl">made slowly, kept dearly</p>
          <h1 className="mt-3 max-w-[900px] font-['Cormorant_Garamond'] text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-[#5E4A43] xl:max-w-[760px]">
            Small treasures for <span className="italic text-[#B98282]">gentle souls.</span>
          </h1>
          <div className="relative mx-auto my-8 h-px w-40 bg-[#E8D8D0] xl:mx-0">
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C8A86B]/55 bg-[#FAF7F2]" />
          </div>
          <p className="mx-auto max-w-2xl text-[15px] leading-7 text-[#786861] sm:text-base sm:leading-8 xl:mx-0">
            Feminine accessories shaped, stitched, and finished by hand—each one carrying the warmth of slow craft and the charm of something truly one of a kind.
          </p>
          <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row xl:items-start">
            <a href="#collection" className="w-full rounded-full border border-[#A87970]/25 bg-[#C99E96] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFFDFC] shadow-[0_8px_18px_rgba(119,82,76,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#BD8F88] sm:w-auto">See what we make</a>
            <a href="#story" className="w-full rounded-full border border-[#B7C8B1] bg-[#FDFBF8]/75 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#687263] transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto">Meet the maker</a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[1/0.94] w-full max-w-md xl:max-w-lg">
          <div className="absolute inset-[4%] rotate-2 rounded-[2rem_3rem_2.2rem_3.4rem] border border-[#C9A18E]/25 bg-[#FDFBF8]/85 shadow-[0_20px_55px_rgba(95,75,64,0.09)]" />
          <div className="fabric-folds absolute inset-[9%] -rotate-2 overflow-hidden rounded-[3rem_2rem_3.5rem_2.2rem] border border-white bg-[#E9D6D0]">
            <div className="lace-pattern absolute inset-x-0 top-0 h-[22%] opacity-60" />
            <div className="absolute bottom-[13%] left-[12%] h-[16%] w-[76%] rounded-[50%] bg-[#92776C]/10 blur-md" />

            <div className="absolute bottom-[18%] left-[18%] h-[42%] w-[30%] -rotate-6 rounded-b-[2rem] rounded-t-[3.4rem] border border-[#A98278]/25 bg-gradient-to-br from-[#F8E7E2] via-[#E8CFCB] to-[#D9B6B0] shadow-[0_16px_28px_rgba(102,75,69,0.10)]">
              <div className="absolute inset-x-[13%] top-[18%] border-t border-dashed border-[#A98278]/45" />
              <div className="absolute left-1/2 top-[28%] h-[38%] w-[44%] -translate-x-1/2 rounded-[50%_50%_45%_45%] border border-[#B48880]/45" />
              <TinyFlower className="left-1/2 top-[43%] h-8 w-8 -translate-x-1/2" />
            </div>

            <div className="absolute bottom-[17%] right-[14%] h-[34%] w-[34%] rotate-6 rounded-[2rem_2rem_1rem_1rem] border border-[#7E9278]/20 bg-gradient-to-br from-[#E9EFE5] to-[#B7C8B1] shadow-[0_16px_28px_rgba(77,91,72,0.09)]">
              <div className="absolute -top-[19%] left-[15%] h-[30%] w-[70%] rounded-t-full border-2 border-b-0 border-[#84947E]/40" />
              <div className="absolute inset-x-0 top-[18%] border-t border-dashed border-white/60" />
              <p className="absolute inset-x-0 top-[42%] text-center font-['Caveat'] text-xl text-[#697B64]">little joys</p>
            </div>

            <div className="absolute left-[10%] top-[22%] h-20 w-9 -rotate-[35deg] rounded-[80%_15%_80%_20%] bg-[#F3E3DF]/80" />
            <div className="absolute right-[10%] top-[17%] h-16 w-7 rotate-[25deg] rounded-[80%_15%_80%_20%] bg-[#D5DFCF]" />
            <TinyFlower className="right-[22%] top-[18%] h-8 w-8" />
            <TinyFlower className="left-[22%] top-[13%] h-7 w-7 scale-75" />
            <div className="absolute bottom-[8%] left-[38%] h-px w-[29%] rotate-6 border-t border-dashed border-[#947A70]/45" />
          </div>
          <div className="absolute bottom-[2%] right-[3%] rotate-[-5deg] rounded-sm border border-[#C8A86B]/30 bg-[#FFFDF9] px-5 py-3 font-['Caveat'] text-xl text-[#9B7069] shadow-[0_5px_14px_rgba(91,71,63,0.08)]">handmade with love ♡</div>
        </div>
      </div>
    </section>
  );
}
