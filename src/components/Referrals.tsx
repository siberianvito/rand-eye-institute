import Link from "next/link";
import Reveal from "./Reveal";
import { IconArrow, IconPhone, IconStethoscope } from "./Icons";
import { practice } from "@/lib/data";

/**
 * Aside for referring physicians — deliberately compact and understated. The
 * audience is professional, so it sits between the patient-facing sections
 * rather than competing with them.
 */
export default function Referrals() {
  return (
    <section id="referrals" className="scroll-mt-24 bg-surface py-16 lg:py-20">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-135 from-[#16304f] via-[#0d1f38] to-[#050d1c] px-8 py-10 text-white lg:px-14 lg:py-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="iris-a absolute -top-1/2 right-[6%] h-[34vw] max-h-[420px] w-[34vw] max-w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.30)_0%,transparent_66%)]" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="max-w-xl">
                <p className="flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.22em] text-cyan-brand uppercase">
                  <IconStethoscope className="h-4.5 w-4.5" />
                  For referring physicians
                </p>
                <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.75rem)] text-white">
                  Refer a patient.
                  <span className="brand-text-gradient-dark italic">
                    {" "}
                    They come back to you.
                  </span>
                </h2>
                <p className="mt-4 text-white/70">
                  Send the patient and the question. They are seen by a Rand
                  physician, treated in our own surgical pavilion, and returned
                  to your care with a written report — we do not take over
                  their routine care.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/referrals"
                  className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold whitespace-nowrap text-white [--sweep-delay:2.2s] cursor-pointer"
                >
                  Send a referral
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={practice.phoneHref}
                  className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-7 py-4 text-base font-semibold whitespace-nowrap text-white hover:text-cyan-brand cursor-pointer"
                >
                  <IconPhone className="h-5 w-5" />
                  {practice.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
