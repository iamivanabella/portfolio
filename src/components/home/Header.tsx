import { Download, Menu } from "lucide-react";

type HeaderProps = {
  navItems: string[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-2">
      <a href="#home" className="text-[56px] font-black leading-none tracking-[-0.08em] text-ink">
        iA
      </a>
      <nav className="hidden items-center gap-10 lg:flex">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative text-[13px] font-semibold ${
              index === 0 ? "text-ink" : "text-muted"
            }`}
          >
            {item}
            {index === 0 ? (
              <span className="absolute left-1/2 top-8 h-[3px] w-6 -translate-x-1/2 rounded-full bg-blue" />
            ) : null}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden rounded-2xl border border-line px-5 py-3 text-[13px] font-semibold text-muted shadow-sm lg:inline-flex lg:items-center lg:gap-2"
        >
          Download CV
          <Download size={15} />
        </a>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-muted lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
