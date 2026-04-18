const navLinks = [
  { href: "#work", label: "Work", active: true },
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(106,11,170,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 font-headline tracking-tight">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-neutral-100">
          OBSIDIAN
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 hover:text-purple-300 transition-colors duration-300"
                  : "text-neutral-400 font-medium hover:text-purple-300 transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2.5 rounded-full border border-tertiary/20 text-secondary font-semibold hover:bg-gradient-to-r hover:from-secondary hover:to-tertiary hover:text-on-secondary transition-all duration-300 active:scale-95">
          Hire Me
        </button>
      </div>
    </nav>
  );
}