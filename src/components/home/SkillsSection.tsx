import { SectionEyebrow } from "./SectionEyebrow";

type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id="skills" className="pb-12">
      <SectionEyebrow>Skills &amp; Tools</SectionEyebrow>
      <h2 className="text-[46px] font-black tracking-[-0.05em] text-ink">My Tech Stack</h2>
      <div className="mt-7 grid gap-6 xl:grid-cols-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-[18px] font-extrabold text-ink">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white px-4 py-2 text-[14px] font-medium text-muted shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
