import { ArrowRight } from "lucide-react";

import type { Project } from "./data";
import { ProjectPreview } from "./ProjectPreview";
import { SectionEyebrow } from "./SectionEyebrow";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="pb-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <SectionEyebrow>Featured Work</SectionEyebrow>
        </div>
        <a href="#contact" className="text-[14px] font-bold text-blue">
          See all projects <ArrowRight className="ml-1 inline-block" size={14} />
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-[22px] border border-line bg-white p-4 shadow-sm">
            <ProjectPreview variant={project.variant} />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-[30px] font-black tracking-[-0.04em] text-ink">{project.title}</h3>
              <p className="mt-2 text-[14px] text-muted">{project.stack}</p>
              <p className="mt-3 text-[15px] leading-7 text-text">{project.text}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-blue">
                View Project <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
