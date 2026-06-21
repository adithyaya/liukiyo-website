const panels = Array.from({ length: 6 });

type LuxuryCssDoorProps = {
  isOpen?: boolean;
  onOpen?: () => void;
};

export default function LuxuryCssDoor({
  isOpen = false,
  onOpen,
}: LuxuryCssDoorProps) {
  return (
    <button
      type="button"
      className="group mx-auto block aspect-[1/2.2] w-[min(220px,55vw)] cursor-pointer border-0 bg-transparent p-0 [perspective:1200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-amber-600/60"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Door open" : "Open the door"}
      onClick={onOpen}
    >
      <div
        className={`relative h-full w-full origin-left rounded-[2px] border-[0.5px] border-[#83927E]/35 bg-gradient-to-br from-[#E7EEE3] via-[#CFDDCA] to-[#B7C8B1] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.65),inset_-2px_-2px_5px_rgba(82,98,77,0.08)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] will-change-transform ${
          isOpen
            ? "[transform:rotateY(-82deg)]"
            : "group-hover:[transform:rotateY(-18deg)]"
        }`}
      >
        <div className="pointer-events-none absolute inset-[10px] rounded-[1px] border-[0.5px] border-[#879781]/35 shadow-[inset_0_0_10px_rgba(255,255,255,0.25)]" />

        <div className="absolute inset-x-[23px] inset-y-[30px] grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-4">
          {panels.map((_, index) => (
            <div
              className="relative rounded-[1px] border-[0.5px] border-[#879781]/35 bg-gradient-to-br from-[#FDFBF8]/30 via-[#E9D6D0]/15 to-[#83927E]/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.55),inset_-2px_-2px_4px_rgba(82,98,77,0.06)]"
              key={index}
            >
              <div className="absolute inset-[5px] rounded-[1px] border-[0.5px] border-[#FDFBF8]/35 bg-gradient-to-br from-white/15 to-transparent shadow-[inset_0_0_3px_rgba(255,255,255,0.2)]" />
            </div>
          ))}
        </div>

        <div className="absolute right-[17px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[0.5px] border-amber-800/25 bg-gradient-to-br from-[#F1DCA9] via-[#C8A86B] to-[#95743A] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.6),0_1px_1px_rgba(79,58,21,0.14)]">
          <span className="absolute left-[2px] top-[2px] h-1 w-1 rounded-full bg-white/55" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-white/35 via-[#667361]/15 to-white/25" />
      </div>
    </button>
  );
}
