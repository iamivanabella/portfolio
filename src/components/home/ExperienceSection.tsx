import type { TimelineItem } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

type ExperienceSectionProps = {
  timeline: TimelineItem[];
};

export function ExperienceSection({ timeline }: ExperienceSectionProps) {
  return (
    <section id="experience" className="pb-12">
      <SectionEyebrow>Experience</SectionEyebrow>
      <h2 className="text-[46px] font-black tracking-[-0.05em] text-ink">Work Experience</h2>
      <div className="relative mt-8">
        <div className="absolute bottom-3 left-[11px] top-3 hidden w-px bg-[#b8cbff] lg:block" />
        <div className="space-y-10">
          {timeline.map((item, index) => (
            <div
              key={`${item.company}-${item.years}-${index}`}
              className="relative grid gap-4 lg:grid-cols-[150px_280px_1fr] lg:gap-6"
            >
              <div className="relative hidden pl-9 text-[14px] font-bold text-ink lg:block">
                <span className="absolute left-0 top-1 h-[22px] w-[22px] rounded-full border-[5px] border-white bg-blue shadow-sm" />
                {item.years}
              </div>
              <div>
                <p className="text-[15px] font-bold text-muted lg:hidden">{item.years}</p>
                <h3 className="mt-1 text-[30px] font-black tracking-[-0.04em] text-ink">{item.title}</h3>
                <p className="mt-2 text-[18px] font-semibold text-blue">{item.company}</p>
              </div>
              <ul className="space-y-2 pt-1 text-[15px] leading-7 text-text">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-ink" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
