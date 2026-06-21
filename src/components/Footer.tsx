import logo from "../assets/logo.png";

const links = [["Collection", "#collection"], ["About", "#story"], ["Journal", "#journal"], ["Contact", "#contact"]];

export default function Footer() {
  return (
    <footer className="paper-grain border-t border-[#C9A18E]/25 bg-[#FAF7F2] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <img src={logo} alt="liukiy.o" className="mx-auto h-12 w-auto object-contain" />
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8C786F]">Luxury Women&apos;s Accessories</p>
        <p className="mt-3 font-['Caveat'] text-xl text-[#9A746D]">handmade for gentle souls</p>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-xs text-[#796860] transition-colors hover:text-[#A46F6D]">{label}</a>
          ))}
        </nav>

        <div className="ribbon-divider mx-auto my-10 h-4 w-44" />
        <div className="flex flex-col justify-between gap-2 text-[10px] tracking-[0.08em] text-[#9B8A82] sm:flex-row sm:text-left">
          <p>© 2026 liukiy.o handmade atelier</p>
          <p>Each piece is beautifully, happily unique ♡</p>
        </div>
      </div>
    </footer>
  );
}
