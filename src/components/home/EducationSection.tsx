import type { CertItem } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

type EducationSectionProps = {
  certs: CertItem[];
};

export function EducationSection({ certs }: EducationSectionProps) {
  return (
    <section id="education" className="pb-12">
      <div className="grid gap-5 xl:grid-cols-4">
        {certs.map(({ title, org, year, icon: Icon }) => (
          <article key={title} className="rounded-[20px] border border-line bg-white p-5 shadow-sm">
            <SectionEyebrow>{title.includes("Bachelor") ? "Education" : "Highlights"}</SectionEyebrow>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-soft text-blue">
              <Icon size={28} strokeWidth={1.7} />
            </div>
            <h3 className="text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-ink">{title}</h3>
            <p className="mt-3 text-[16px] text-muted">{org}</p>
            <p className="mt-1 text-[16px] text-muted">{year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
