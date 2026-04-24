import { ArrowRight, Mail } from "lucide-react";

import { HeroComposite } from "./HeroComposite";

type TechIcon = {
  name: string;
  src: string;
  className: string;
};

type HeroSectionProps = {
  techIcons: TechIcon[];
};

export function HeroSection({ techIcons }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="grid items-center gap-10 pb-12 pt-8 lg:grid-cols-[1.02fr_1.25fr] lg:pb-16 lg:pt-10"
    >
      <div className="max-w-[520px]">
        <div className="mb-5 inline-flex rounded-full bg-soft px-4 py-2 text-sm font-bold text-blue">
          Hello, I&apos;m
        </div>
        <h1 className="text-balance text-[58px] font-black leading-[0.92] tracking-[-0.05em] text-ink sm:text-[74px] lg:text-[88px]">
          John Ivan Abella
        </h1>
        <p className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-ink">
          Software Engineer <span className="text-blue">| Full-Stack Developer</span>
        </p>
        <p className="mt-6 max-w-[500px] text-[17px] leading-9 text-text sm:text-[18px]">
          Backend-leaning full-stack developer with 4+ years of experience across PHP, MySQL,
          Moodle, WordPress, deployments, production debugging, and Linux-hosted platform support.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-2xl bg-blue px-7 py-4 text-[15px] font-bold text-white shadow-[0_14px_28px_rgba(37,99,255,0.28)]"
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-2xl border border-line bg-white px-7 py-4 text-[15px] font-bold text-ink shadow-sm"
          >
            Get In Touch
            <Mail size={16} />
          </a>
        </div>
        <div className="mt-10">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-muted">Tech I Work With</p>
          <div className="mt-5 flex flex-wrap items-center gap-8 text-ink">
            {techIcons.map((item) => (
              <div
                key={item.name}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className={`${item.className} object-contain`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <HeroComposite />
    </section>
  );
}
