// src/components/LivingScene.tsx
export default function LivingScene() {
  return (
    <div className="living-scene">
      <div className="sky-glow" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="mist mist-one" />
      <div className="mist mist-two" />

      <div className="sun-orb" />

      <div className="petals">
        {Array.from({ length: 26 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      <div className="grass grass-back" />
      <div className="grass grass-mid" />
      <div className="grass grass-front" />

      <div className="vignette" />
    </div>
  );
}