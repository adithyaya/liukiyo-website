import video from "../assets/brand-film.mp4";

export default function BrandVideo({ onComplete }: { onComplete: () => void }) {
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
