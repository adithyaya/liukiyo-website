import logo from "../assets/logo.png";
import { LaceDivider } from "./lace/Lace";

const links = [["Collection", "#collection"], ["Atelier", "#story"], ["Journal", "#journal"], ["Contact", "#contact"]];

export default function Footer() {
  return <footer className="botanical-paper border-t border-[var(--powder-blue-haze)]/50 bg-[var(--sky-whisper)] px-5 pb-8 pt-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl text-center"><img src={logo} alt="liukiy.o" className="mx-auto h-12 w-auto object-contain" /><p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-fusion)]">Luxury Women&apos;s Accessories</p><LaceDivider className="my-7" /><nav className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer navigation">{links.map(([label, href]) => <a key={label} href={href} className="text-xs uppercase tracking-[0.12em] text-[#5C6857] hover:text-[var(--gold-fusion)]">{label}</a>)}</nav><div className="mt-10 flex flex-col justify-between gap-2 border-t border-[var(--soft-sky-wash)] pt-6 text-[10px] tracking-[0.08em] text-[#748073] sm:flex-row"><p>© 2026 liukiy.o atelier</p><p>Handcrafted in small editions</p></div></div></footer>;
}
