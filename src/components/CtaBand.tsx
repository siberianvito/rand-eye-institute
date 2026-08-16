import Link from "next/link";
import { CONSULT_PATH, practice } from "@/lib/data";
import Reveal from "./Reveal";
import { IconArrow, IconPhone } from "./Icons";

/**
 * Closes the home page. The form itself lives on /contact now, so this hands
 * the visitor off rather than duplicating it.
 */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-20 text-white lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="iris-a absolute -top-1/2 left-[8%] h-[46vw] max-h-[620px] w-[46vw] max-w-[620px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.32)_0%,transparent_66%)]" />
        <div className="iris-b absolute -bottom-1/2 right-[4%] h-[44vw] max-h-[600px] w-[44vw] max-w-[600px] rounded-full bg-[radial-gradient(circle,rgba(46,49,146,0.55)_0%,transparent_68%)]" />
      </div>

      <div className="shell relative text-center">
        <Reveal>
          <p className="text-[0.75rem] font-semibold tracking-[0.22em] text-cyan-brand uppercase">
            The next step
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2.25rem,4.6vw,3.5rem)] text-white">
            Find out what your
            <span className="brand-text-gradient-dark italic"> eyes can do.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            A full diagnostic workup and an honest recommendation — including
            when the honest recommendation is to wait. No obligation, no
            pressure.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href={CONSULT_PATH}
              className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4.5 text-base font-semibold whitespace-nowrap sm:px-8 text-white [--sweep-delay:0.8s] cursor-pointer"
            >
              Request Your Consultation
              <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={practice.phoneHref}
              className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-8 py-4.5 text-base font-semibold text-white hover:text-cyan-brand cursor-pointer"
            >
              <IconPhone className="h-5 w-5" />
              {practice.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
