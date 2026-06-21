const links = [["Collections", "#collection"], ["Our Story", "#story"], ["Little Notes", "#journal"], ["Say Hello", "#contact"]];

export default function Footer() {
  return (
    <footer className="paper-grain border-t border-[#C9A18E]/25 bg-[#FAF7F2] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#604D45]">Liukiy<span className="text-[#A77573]">.o</span></p>
            <p className="mt-2 font-['Caveat'] text-xl text-[#9A746D]">handmade for gentle souls</p>
          </div>
          <div className="sm:text-center">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C786F]">Wander around</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {links.map(([label, href]) => <a key={label} href={href} className="text-xs text-[#796860] transition-colors hover:text-[#A46F6D]">{label}</a>)}
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C786F]">Made in tiny batches</p>
            <p className="mt-3 text-xs leading-6 text-[#82716A]">With fabric, flowers, thread,<br />and a whole lot of care.</p>
          </div>
        </div>
        <div className="ribbon-divider mx-auto my-10 h-4 w-44" />
        <div className="flex flex-col justify-between gap-2 text-center text-[10px] tracking-[0.08em] text-[#9B8A82] sm:flex-row sm:text-left">
          <p>© 2026 Liukiy.o handmade atelier</p><p>Each piece is beautifully, happily unique ♡</p>
        </div>
      </div>
    </footer>
  );
}
