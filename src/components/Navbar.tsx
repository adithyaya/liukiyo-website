const links = [
  ["Home", "#home"],
  ["Collections", "#collection"],
  ["Our Story", "#story"],
  ["Little Notes", "#journal"],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="paper-grain mx-auto flex max-w-7xl items-center justify-between rounded-[1.25rem] border border-[#C9A18E]/30 bg-[#FDFBF8]/90 px-4 py-3 shadow-[0_7px_25px_rgba(94,75,65,0.07)] backdrop-blur-md sm:px-6">
        <a href="#home" className="relative font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[0.04em] text-[#665148] sm:text-3xl">
          Liukiy<span className="text-[#B47F7B]">.o</span>
          <span className="absolute -bottom-1 left-1/2 h-px w-8 -translate-x-1/2 bg-[#C8A86B]/55" />
        </a>
        <div className="hidden items-center gap-7 xl:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-xs font-medium text-[#76645D] transition-colors duration-300 hover:text-[#A46F6D]">
              {label}
            </a>
          ))}
        </div>
        <a href="#collection" className="rounded-full border border-[#B7C8B1]/70 bg-[#EDF1E9] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#657260] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5EDE1] sm:px-5">
          Visit the atelier
        </a>
      </nav>
    </header>
  );
}
