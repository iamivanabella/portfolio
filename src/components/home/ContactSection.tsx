import { Send } from "lucide-react";

import type { ContactItem } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

type ContactSectionProps = {
  contactItems: ContactItem[];
};

export function ContactSection({ contactItems }: ContactSectionProps) {
  return (
    <section id="contact" className="pb-5">
      <div className="rounded-[26px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionEyebrow>Let&apos;s Connect</SectionEyebrow>
            <h2 className="max-w-[480px] text-[44px] font-black leading-[1.02] tracking-[-0.05em] text-ink">
              Need Moodle, WordPress, or PHP work shipped reliably? Let&apos;s talk.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: ItemIcon, label }) => (
                <div key={label} className="flex items-center gap-3 text-[15px] text-text">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-blue">
                    <ItemIcon size={18} />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="h-12 rounded-xl border border-line px-4 text-[14px] outline-none transition focus:border-blue"
                placeholder="Your Name"
              />
              <input
                className="h-12 rounded-xl border border-line px-4 text-[14px] outline-none transition focus:border-blue"
                placeholder="Your Email"
              />
            </div>
            <input
              className="h-12 w-full rounded-xl border border-line px-4 text-[14px] outline-none transition focus:border-blue"
              placeholder="Subject"
            />
            <textarea
              className="min-h-[138px] w-full rounded-xl border border-line px-4 py-3 text-[14px] outline-none transition focus:border-blue"
              placeholder="Your Message"
            />
            <button className="inline-flex items-center gap-3 rounded-2xl bg-blue px-8 py-4 text-[15px] font-bold text-white shadow-[0_14px_28px_rgba(37,99,255,0.28)]">
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
