import { CircleUserRound } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="pb-12">
      <div className="rounded-[22px] border border-line bg-white px-6 py-6 shadow-sm sm:px-8 sm:py-8">
        <div className="grid items-center gap-6 md:grid-cols-[180px_1fr]">
          <div className="flex justify-center">
            <div className="flex h-[110px] w-[110px] items-center justify-center rounded-[18px] border border-[#d8e5ff] bg-[#fbfcff] text-blue">
              <CircleUserRound size={44} strokeWidth={1.5} />
            </div>
          </div>
          <div className="max-w-[760px]">
            <h2 className="text-[34px] font-extrabold tracking-[-0.04em] text-ink">About Me</h2>
            <p className="mt-3 text-[16px] leading-8 text-text">
              My work spans the full delivery cycle - from translating Figma and Photoshop designs
              into Elementor pages to building PHP and MySQL workflows, Moodle plugins, and
              production fixes. I focus on practical solutions that are maintainable, responsive,
              and ready for real users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
