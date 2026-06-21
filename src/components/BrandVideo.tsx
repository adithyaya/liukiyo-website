// src/components/BrandVideo.tsx
import video from "../assets/brand-film.mp4";

export default function BrandVideo({ onComplete }: { onComplete: () => void }) {
  return (
    <section className="video-screen">
      <video
        className="brand-video"
        src={video}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
      />

      <button className="skip-button" onClick={onComplete}>
        Skip
      </button>
    </section>
  );
}