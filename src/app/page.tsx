import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import {
  certs,
  contactItems,
  navItems,
  processItems,
  projects,
  stackGroups,
  techIcons,
  timeline,
} from "@/components/home/data";

export default function Home() {
  return (
    <main className="page-shell overflow-x-hidden">
      <div className="mx-auto max-w-[1280px] px-4 pb-6 pt-5 sm:px-6 lg:px-8">
        <Header navItems={navItems} />
        <HeroSection techIcons={techIcons} />
        <AboutSection />
        <ProcessSection items={processItems} />
        <ProjectsSection projects={projects} />
        <ExperienceSection timeline={timeline} />
        <EducationSection certs={certs} />
        <SkillsSection groups={stackGroups} />
        <ContactSection contactItems={contactItems} />
        <Footer />
      </div>
    </main>
  );
}
