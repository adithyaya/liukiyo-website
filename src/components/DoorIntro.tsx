import { useEffect, useState } from "react";
import LuxuryCssDoor from "./LuxuryCssDoor";

type DoorIntroProps = {
  onComplete?: () => void;
};

export default function DoorIntro(props: DoorIntroProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || !props.onComplete) return;

    const transitionTimer = window.setTimeout(props.onComplete, 800);
    return () => window.clearTimeout(transitionTimer);
  }, [isOpen, props.onComplete]);

  return (
    <section className="paper-grain flex min-h-screen flex-col items-center justify-center bg-[#FAF7F2] px-6 py-10">
      <LuxuryCssDoor isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <p className="mt-6 font-['Caveat'] text-xl text-[#9B7069]">open the little atelier</p>
    </section>
  );
}
