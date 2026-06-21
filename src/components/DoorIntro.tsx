import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import storybookMeadow from "../assets/storybook-meadow.webp";
import whiteDoor from "../assets/white-door.webp";

type DoorIntroProps = {
  onComplete?: () => void;
};

const particles = Array.from({ length: 20 });

export default function DoorIntro({ onComplete }: DoorIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const sceneRef = useRef<HTMLElement>(null);
  const landscapeRef = useRef<HTMLImageElement>(null);
  const doorRef = useRef<HTMLImageElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const transitionTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.fromTo(scene, { autoAlpha: 0 }, { autoAlpha: 1, duration: reduceMotion ? 0 : 1.2, ease: "power2.out" });
      gsap.fromTo(
        ".storybook-door",
        { autoAlpha: 0, y: 28, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: reduceMotion ? 0 : 1.5, delay: reduceMotion ? 0 : 0.25, ease: "power3.out" },
      );

      if (!reduceMotion) {
        gsap.to(landscapeRef.current, { scale: 1.035, xPercent: 0.5, duration: 13, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".cloud-wisp-one", { xPercent: 24, duration: 19, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".cloud-wisp-two", { xPercent: -18, duration: 24, repeat: -1, yoyo: true, ease: "sine.inOut" });

        gsap.utils.toArray<HTMLElement>(".entrance-pollen").forEach((particle, index) => {
          gsap.to(particle, {
            x: 14 + (index % 4) * 7,
            y: -35 - (index % 5) * 10,
            autoAlpha: 0.15 + (index % 3) * 0.16,
            duration: 4.5 + (index % 6) * 0.65,
            delay: (index % 7) * -0.7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, scene);

    return () => {
      transitionTimelineRef.current?.kill();
      context.revert();
    };
  }, []);

  const openDoor = () => {
    if (isOpening) return;
    setIsOpening(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.killTweensOf(landscapeRef.current);

    transitionTimelineRef.current = gsap
      .timeline({ onComplete })
      .to(".entrance-caption", { autoAlpha: 0, y: 8, duration: reduceMotion ? 0 : 0.3 })
      .to(bloomRef.current, { autoAlpha: 1, scale: 1.5, duration: reduceMotion ? 0 : 1.1, ease: "power2.out" }, "<")
      .to(doorRef.current, { rotateY: -76, scale: 1.09, x: -8, duration: reduceMotion ? 0 : 1.35, ease: "power3.inOut" }, "<")
      .to(landscapeRef.current, { scale: 1.1, duration: reduceMotion ? 0 : 1.55, ease: "power2.inOut" }, "<")
      .to(transitionRef.current, { autoAlpha: 1, duration: reduceMotion ? 0 : 0.8, ease: "power2.inOut" }, reduceMotion ? ">" : "-=0.45");
  };

  return (
    <section ref={sceneRef} className="storybook-entrance invisible relative min-h-screen overflow-hidden">
      <img ref={landscapeRef} src={storybookMeadow} alt="" className="storybook-landscape absolute inset-0 h-full w-full object-cover" />
      <div className="storybook-paper pointer-events-none absolute inset-0" />
      <div className="cloud-wisp cloud-wisp-one pointer-events-none absolute left-[5%] top-[13%]" />
      <div className="cloud-wisp cloud-wisp-two pointer-events-none absolute right-[8%] top-[24%]" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((_, index) => (
          <span
            className="entrance-pollen absolute h-1 w-1 rounded-full bg-[#FFF8D8]/85 shadow-[0_0_8px_rgba(255,248,216,0.8)]"
            key={index}
            style={{ left: `${5 + ((index * 17) % 91)}%`, top: `${19 + ((index * 23) % 70)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-5 pb-[5vh] pt-10 sm:pb-[4vh]">
        <button
          type="button"
          className="storybook-door group relative h-[min(70vh,720px)] aspect-[811/1939] cursor-pointer border-0 bg-transparent p-0 [perspective:1400px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#C8A86B]/70"
          aria-label="Open the white cottage door"
          disabled={isOpening}
          onClick={openDoor}
        >
          <div ref={bloomRef} className="portal-bloom pointer-events-none invisible absolute inset-[-18%] opacity-0" />
          <div className="pointer-events-none absolute -bottom-2 left-1/2 h-8 w-[86%] -translate-x-1/2 rounded-[50%] bg-[#65705A]/15 blur-lg" />
          <img
            ref={doorRef}
            src={whiteDoor}
            alt="Hand-painted warm ivory cottage door with antique brass details"
            className="h-full w-full origin-left object-contain drop-shadow-[0_12px_16px_rgba(75,62,51,0.15)] [transform-style:preserve-3d] will-change-transform group-hover:drop-shadow-[0_14px_22px_rgba(75,62,51,0.19)]"
          />
        </button>
        <p className="entrance-caption mt-2 font-['Caveat'] text-xl text-[#7E655C] drop-shadow-[0_1px_0_rgba(255,255,255,0.7)] sm:text-2xl">
          open the little atelier
        </p>
      </div>

      <div ref={transitionRef} className="pointer-events-none invisible absolute inset-0 z-30 bg-[#FFFDF8] opacity-0" />
    </section>
  );
}
