import type { ProcessItem } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

type ProcessSectionProps = {
  items: ProcessItem[];
};

export function ProcessSection({ items }: ProcessSectionProps) {
  return (
    <section className="pb-12 text-center">
      <SectionEyebrow>My Approach</SectionEyebrow>
      <h2 className="text-[44px] font-black tracking-[-0.05em] text-ink">How I Work</h2>
      <p className="mx-auto mt-2 max-w-[500px] text-[15px] text-muted">
        A clear process. Thoughtful execution. Results that matter.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map(({ number, title, text, icon: Icon }) => (
          <div key={title} className="rounded-[18px] border border-line bg-white p-6 text-left shadow-sm">
            <div className="mb-5 flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-soft text-blue">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <span className="text-lg font-black tracking-[-0.04em] text-ink">{number}</span>
            </div>
            <h3 className="text-[22px] font-extrabold tracking-[-0.03em] text-ink">{title}</h3>
            <p className="mt-2 text-[14px] leading-7 text-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
