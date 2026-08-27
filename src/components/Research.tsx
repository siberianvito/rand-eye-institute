import Link from "next/link";
import { CONSULT_PATH, clinicalTrials, practice } from "@/lib/data";
import Reveal from "./Reveal";
import { IconArrow, IconCheck, IconDroplet, IconFlask, IconPhone, IconPulse } from "./Icons";

const icons = {
  "wet-amd": IconPulse,
  "dry-amd": IconFlask,
  "dry-eye": IconDroplet,
} as const;

export default function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-24 border-y border-line bg-surface py-24 lg:py-32"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Clinical research</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              Treatments that are not
              <br />
              <span className="brand-text-gradient italic">
                standard care yet.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              We take part in clinical studies so our patients can reach newer
              treatments years before they are widely available. Below are areas
              we are currently running trials in.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {clinicalTrials.map((trial, i) => {
            const Icon = icons[trial.id];
            return (
              <Reveal key={trial.id} delay={i * 110}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-card p-8 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-lift-lg lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-cyan-brand/40 bg-surface-tint px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-blue-brand uppercase">
                      Enrolling
                    </span>
                  </div>

                  <p className="mt-7 text-[0.78rem] font-semibold tracking-[0.16em] text-cyan-brand uppercase">
                    {trial.kicker}
                  </p>
                  <h3 className="mt-2.5 text-3xl">{trial.name}</h3>

                  <p className="mt-4 text-slate-body">{trial.summary}</p>

                  <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-7">
                    {trial.involves.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[0.95rem] text-ink-soft"
                      >
                        <IconCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-brand" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={CONSULT_PATH}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.95rem] font-semibold text-blue-brand transition-colors duration-200 hover:text-indigo-brand cursor-pointer"
                  >
                    Ask if you qualify
                    <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* What taking part actually means — the honest version */}
        <Reveal delay={140}>
          <div className="mt-12 grid gap-8 rounded-3xl border border-line bg-surface-tint p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">
            <div>
              <h3 className="text-3xl">Before you consider a study</h3>
              <p className="mt-4 text-slate-body">
                Taking part is entirely voluntary, and choosing not to will
                never change the care you receive here. Whether you are eligible
                is decided at a screening visit, not over the phone — every study
                has strict criteria, and most people who ask will not qualify
                for a given trial. A study treatment is being investigated
                precisely because its benefit is not yet proven, so no outcome
                can be promised. Your study doctor will walk you through the
                risks, what is involved and your right to withdraw at any time
                before you consent to anything.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-line bg-card p-7">
              <p className="text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                Ask about a study
              </p>
              <a
                href={practice.phoneHref}
                className="inline-flex items-center gap-2.5 font-sans text-3xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 hover:text-blue-brand cursor-pointer"
              >
                <IconPhone className="h-6 w-6 text-cyan-brand" />
                {practice.phone}
              </a>
              <p className="text-[0.95rem] text-slate-body">
                Tell our team which condition you are asking about and we will
                book you with the right physician.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
