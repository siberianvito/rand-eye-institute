import { practice } from "@/lib/data";
import GhlForm from "./GhlForm";
import Reveal from "./Reveal";
import { IconCheck, IconPhone } from "./Icons";

export default function Consult() {
  return (
    <section
      id="request"
      className="relative scroll-mt-32 overflow-hidden bg-surface py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="iris-a pointer-events-none absolute -top-1/4 -right-[8%] h-[46vw] max-h-[640px] w-[46vw] max-w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.18)_0%,transparent_66%)]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Pitch + practice details */}
          <div>
            <Reveal>
              <p className="eyebrow">Request a consultation</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
                Find out what your
                <span className="brand-text-gradient italic"> eyes can do.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg text-slate-body">
                Your consultation includes a full diagnostic workup and an
                honest recommendation — including when the honest
                recommendation is to wait. There is no obligation and no
                pressure.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <ul className="mt-9 flex flex-col gap-3.5">
                {[
                  "Complete diagnostic mapping of both eyes",
                  "A written price, with insurance verified up front",
                  "Interest-free monthly payment plans available",
                  "You meet the surgeon, not a sales consultant",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Address and hours live in the page header above, so they are
                not repeated here. */}
            <Reveal delay={280}>
              <a
                href={practice.phoneHref}
                className="group mt-12 block rounded-2xl border border-line bg-card px-6 py-6 transition-colors duration-200 hover:border-cyan-brand hover:bg-surface-deep cursor-pointer"
              >
                <p className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
                  Prefer to talk it through?
                </p>
                <p className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 group-hover:text-blue-brand">
                  {practice.phone}
                </p>
              </a>
            </Reveal>
          </div>

          {/* GoHighLevel form */}
          <Reveal delay={160}>
            <GhlForm instance="contact" className="lg:p-8" />
          </Reveal>
        </div>
      </div>

    </section>
  );
}
