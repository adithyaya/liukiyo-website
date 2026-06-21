import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import { LaceDivider } from "./lace/Lace";

const links = [["Collection", "#collection"], ["Atelier", "#story"], ["Journal", "#journal"]];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(menu, { autoAlpha: isOpen ? 1 : 0, y: isOpen ? 0 : -10, pointerEvents: isOpen ? "auto" : "none", duration: reduced ? 0 : .3, ease: "power2.out", overwrite: true });
    return () => { gsap.killTweensOf(menu); };
  }, [isOpen]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="site-navbar botanical-paper mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-[1.25rem] border border-[var(--powder-blue-haze)]/60 bg-[var(--ivory)] px-4 py-3 shadow-[var(--shadow-whisper)] sm:px-6">
        <a href="#home" className="logo flex items-center" aria-label="liukiy.o home"><img src={logo} alt="liukiy.o" className="brand-logo" /></a>
        <div className="hidden flex-1 items-center justify-center gap-5 px-4 md:flex lg:gap-9">{links.map(([label, href]) => <a key={label} href={href} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5C6857] transition-colors hover:text-[var(--gold-fusion)] lg:text-xs">{label}</a>)}</div>
        <a href="#collection" className="hidden shrink-0 rounded-full border border-[var(--powder-blue-haze)] bg-[var(--angel-mist)] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#4E687E] hover:bg-white md:inline-flex">Enter atelier</a>
        <button type="button" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--powder-blue-haze)] bg-[var(--angel-mist)] text-[#4E687E] md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)}>
          <span className="relative h-4 w-5" aria-hidden="true"><span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} /><span className={`absolute left-0 top-[7px] h-px w-5 bg-current ${isOpen ? "opacity-0" : ""}`} /><span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`} /></span>
        </button>
      </nav>
      <LaceDivider className="-mt-2 h-7 max-w-5xl opacity-75" />
      <div ref={menuRef} className="botanical-paper invisible absolute inset-x-3 top-[calc(100%+.35rem)] -translate-y-2 rounded-[1.25rem] border border-[var(--powder-blue-haze)] bg-[var(--ivory)] p-3 opacity-0 shadow-[var(--shadow-card)] md:hidden" aria-hidden={!isOpen}>
        {links.map(([label, href]) => <a key={label} href={href} className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold text-[#5C6857] hover:bg-[var(--angel-mist)]" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>{label}<span className="font-['Allura'] text-xl text-[var(--cool-cerulean)]">↗</span></a>)}
      </div>
    </header>
  );
}
