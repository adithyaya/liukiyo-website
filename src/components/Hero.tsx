import logo from "../assets/logo.png";
import meadow from "../assets/storybook-meadow.webp";
import { LaceDivider, LaceFrame } from "./lace/Lace";

export default function Hero() {
  return (
    <section id="home" className="botanical-paper relative min-h-screen overflow-hidden bg-[var(--sky-whisper)] px-5 sm:px-8 lg:px-12">
      <div className="sky-wash absolute inset-0" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 pb-24 pt-32 text-center xl:grid-cols-[0.9fr_1.1fr] xl:text-left">
        <div className="mx-auto flex max-w-3xl flex-col items-center xl:mx-0 xl:items-start">
          <img src={logo} alt="liukiy.o" className="h-auto w-[min(70vw,360px)] object-contain" />
          <p className="mt-7 font-['Allura'] text-3xl text-[var(--cool-cerulean)]">nature, lacework & timeless beauty</p>
          <h1 className="mt-2 font-['Cormorant_Garamond'] text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-[var(--ink)]">
            Luxury Women&apos;s <span className="italic text-[var(--cool-cerulean)]">Accessories</span>
          </h1>
          <LaceDivider className="my-6 max-w-md" />
          <p className="max-w-xl font-['EB_Garamond'] text-lg leading-8 text-[#5C6857]">
            Handcrafted pieces inspired by garden mornings, heirloom embroidery, and the quiet romance of things made slowly.
          </p>
          <a href="#collection" className="mt-8 rounded-full border border-[var(--cool-cerulean)] bg-[var(--angel-mist)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E687E] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--baby-blue-cloud)]">
            Explore Collection
          </a>
        </div>

        <LaceFrame className="mx-auto aspect-[5/4] w-full max-w-2xl">
          <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-[var(--baby-blue-cloud)]">
            <img src={meadow} alt="Watercolor botanical meadow" className="absolute inset-0 h-full w-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-white/20" />
            <div className="absolute bottom-[13%] left-1/2 h-[13%] w-[68%] -translate-x-1/2 rounded-[50%] bg-[#5D6A45]/10 blur-lg" />
            <div className="featured-bag absolute bottom-[18%] left-1/2 h-[48%] w-[42%] -translate-x-1/2 rounded-b-[2.5rem] rounded-t-[4rem] border border-[#8EB1D1]/45 bg-[#F7FBFE]/90 shadow-[0_22px_45px_rgba(65,82,96,0.12)]">
              <div className="absolute -top-[20%] left-[16%] h-[34%] w-[68%] rounded-t-full border-2 border-b-0 border-[#8EB1D1]/55" />
              <div className="absolute inset-x-[12%] top-[18%] border-t border-dashed border-[#8EB1D1]/55" />
              <div className="botanical-stitch absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2" />
            </div>
          </div>
        </LaceFrame>
      </div>
      <LaceDivider className="absolute inset-x-5 bottom-3" />
    </section>
  );
}
