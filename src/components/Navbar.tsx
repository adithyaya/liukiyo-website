import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  ["Home", "#home"],
  ["Collections", "#collection"],
  ["Our Story", "#story"],
  ["Little Notes", "#journal"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.to(menu, {
      autoAlpha: isOpen ? 1 : 0,
      y: isOpen ? 0 : -12,
      scaleY: isOpen ? 1 : 0.96,
      pointerEvents: isOpen ? "auto" : "none",
      duration: reduceMotion ? 0 : isOpen ? 0.38 : 0.24,
      ease: isOpen ? "power3.out" : "power2.in",
      transformOrigin: "top center",
      overwrite: true,
    });

    return () => {
      gsap.killTweensOf(menu);
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeAtDesktop = () => {
      if (desktopQuery.matches) setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeAtDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeAtDesktop);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="site-navbar paper-grain mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-[1.25rem] border border-[#C9A18E]/30 bg-[#FDFBF8]/90 px-4 py-3 shadow-[0_7px_25px_rgba(94,75,65,0.07)] backdrop-blur-md sm:px-6">
        <a href="#home" className="logo relative font-['Cormorant_Garamond'] text-[1.7rem] font-semibold leading-none tracking-[0.04em] text-[#665148] sm:text-3xl">
          Liukiy<span className="text-[#B47F7B]">.o</span>
          <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#C8A86B]/55" />
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 px-4 md:flex lg:gap-7 lg:px-6">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="whitespace-nowrap text-[10px] font-semibold text-[#76645D] transition-colors duration-300 hover:text-[#A46F6D] lg:text-xs lg:font-medium">
              {label}
            </a>
          ))}
        </div>

        <a href="#collection" className="hidden shrink-0 rounded-full border border-[#B7C8B1]/70 bg-[#EDF1E9] px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#657260] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5EDE1] md:inline-flex lg:px-5 lg:text-[10px] lg:tracking-[0.14em]">
          Visit the atelier
        </a>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A18E]/35 bg-white/45 text-[#6D5850] transition-colors hover:bg-white/75 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className="paper-grain invisible absolute inset-x-3 top-[calc(100%+0.5rem)] -translate-y-3 rounded-[1.25rem] border border-[#C9A18E]/30 bg-[#FDFBF8]/95 p-3 opacity-0 shadow-[0_16px_40px_rgba(94,75,65,0.10)] backdrop-blur-xl md:hidden"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold text-[#705D56] transition-colors hover:bg-[#E9D6D0]/35 hover:text-[#A46F6D]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {label}<span className="font-['Caveat'] text-lg text-[#B98282]">↗</span>
            </a>
          ))}
          <a href="#collection" className="mt-2 flex min-h-12 items-center justify-center rounded-xl border border-[#B7C8B1]/65 bg-[#EDF1E9] px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#657260]" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>
            Visit the atelier
          </a>
        </div>
      </div>
    </header>
  );
}
