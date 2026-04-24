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
              I&apos;m a software engineer focused on practical delivery across Moodle and
              WordPress ecosystems. My work centers on backend-heavy implementation, plugin
              customization, deployments, debugging live issues, and keeping production systems
              stable through upgrades, maintenance, and clear technical handoffs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
