import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-5 px-1 pb-2 pt-6 text-[13px] text-muted sm:flex-row">
      <p>Â© 2026 John Ivan Abella. All rights reserved.</p>
      <a href="#home" className="text-[56px] font-black leading-none tracking-[-0.08em] text-ink">
        iA
      </a>
      <div className="flex items-center gap-4">
        <p>Built with Next.js &amp; Tailwind CSS</p>
        <a
          href="#home"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white shadow-[0_12px_24px_rgba(37,99,255,0.28)]"
        >
          <ArrowRight size={16} className="-rotate-90" />
        </a>
      </div>
    </footer>
  );
}
