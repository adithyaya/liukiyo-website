import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import video from "../assets/brand-film.mp4";
import logo from "../assets/logo.png";

export default function BrandVideo({ onComplete }: { onComplete: () => void }) {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeline = gsap
      .timeline()
      .fromTo(logoRef.current, { autoAlpha: 0, y: 8 }, { autoAlpha: 0.86, y: 0, duration: reduceMotion ? 0 : 0.9, ease: "power2.out" })
      .to(logoRef.current, { autoAlpha: 0, duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0.3 : 1.7, ease: "power2.in" });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="botanical-paper relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--angel-mist)] px-5 py-20 sm:px-8 sm:py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--soft-sky-wash)]/35 blur-3xl" />
      <div className="absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-[var(--orinoco)]/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[560px]">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--powder-blue-haze)] bg-[var(--ivory)] p-2 shadow-[var(--shadow-card)] sm:rounded-[2.5rem] sm:p-3">
          <video
            src={video}
            autoPlay
            muted
            playsInline
            onEnded={onComplete}
            className="h-full w-full rounded-[1.5rem] object-cover sm:rounded-[2rem]"
          />

          <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-[12%]">
            <div className="rounded-full border border-[var(--powder-blue-haze)]/50 bg-[var(--ivory)] px-6 py-3">
              <img ref={logoRef} src={logo} alt="" className="h-9 w-auto object-contain opacity-0 sm:h-11" />
            </div>
          </div>

          <div className="lace-pattern pointer-events-none absolute inset-x-3 top-2 h-8 opacity-45 sm:inset-x-4 sm:top-3" />
          <div className="lace-pattern pointer-events-none absolute inset-x-3 bottom-2 h-8 rotate-180 opacity-45 sm:inset-x-4 sm:bottom-3" />
        </div>
        <p className="mt-5 text-center font-['Allura'] text-2xl text-[var(--gold-fusion)] sm:text-3xl">
          a little glimpse into our world
        </p>
      </div>

      <button
        type="button"
        className="fixed right-4 top-4 z-30 cursor-pointer rounded-full border border-[var(--powder-blue-haze)] bg-[var(--ivory)] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4E687E] shadow-[var(--shadow-whisper)] transition hover:bg-white sm:right-6 sm:top-6"
        onClick={onComplete}
      >
        Skip
      </button>
    </section>
  );
}
