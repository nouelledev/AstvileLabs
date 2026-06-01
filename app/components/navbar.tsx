const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/12 bg-[#101010]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="text-base font-medium tracking-[0.08em] text-white transition hover:text-[#d6ff6b]"
        >
          AstvileLabs
        </a>
        <div className="flex items-center gap-5 text-sm text-white/62 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
