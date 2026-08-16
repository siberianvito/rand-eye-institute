import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { additionalServices, signatureProcedures } from "@/lib/data";
import Reveal from "./Reveal";
import { IconArrow, IconCheck, IconClock, IconEye, IconScan, IconShield } from "./Icons";

const icons = {
  lasik: IconEye,
  cataract: IconScan,
  "cross-linking": IconShield,
} as const;

export default function Procedures() {
  return (
    <section
      id="procedures"
      className="scroll-mt-24 border-y border-line bg-surface-tint py-24 lg:py-32"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">What we do best</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              Three procedures.
              <br />
              <span className="brand-text-gradient italic">
                A lifetime of clarity.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              Every eye is different, which is why we never start with the
              procedure. We start with your measurements, your health, and how
              you actually use your vision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {signatureProcedures.map((proc, i) => {
            const Icon = icons[proc.id];
            return (
              <Reveal key={proc.id} delay={i * 110}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-card p-8 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-lift-lg lg:p-9">
                  <div className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>

                  <p className="mt-7 text-[0.78rem] font-semibold tracking-[0.16em] text-cyan-brand uppercase">
                    {proc.kicker}
                  </p>
                  <h3 className="mt-2.5 text-3xl">{proc.name}</h3>

                  <p className="mt-4 text-slate-body">{proc.summary}</p>

                  <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-7">
                    {proc.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.95rem] text-ink-soft">
                        <IconCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-brand" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-7 text-[0.85rem] text-grey-brand">
                    <span className="inline-flex items-center gap-1.5">
                      <IconClock className="h-4 w-4" />
                      {proc.duration}
                    </span>
                    <span>{proc.recovery}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-blue-brand transition-colors duration-200 hover:text-indigo-brand cursor-pointer"
                  >
                    See if you&rsquo;re a candidate
                    <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Full scope of care */}
        <Reveal delay={120}>
          <div className="mt-20 rounded-3xl border border-line bg-card p-8 lg:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-3xl">Comprehensive eye care, all in one building</h3>
              <p className="text-[0.95rem] text-grey-brand">
                Over 100 professionals on staff
              </p>
            </div>

            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service) => (
                <li key={service.name} className="border-t border-line pt-5">
                  <p className="font-semibold text-ink">{service.name}</p>
                  <p className="mt-1.5 text-[0.95rem] text-slate-body">
                    {service.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Anatomy explainer */}
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow">Understand your eye</p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-4 text-[clamp(2rem,3.6vw,2.85rem)]">
                The most advanced
                <span className="brand-text-gradient italic"> custom LASIK.</span>
              </h3>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-slate-body">
                Before you decide anything, it helps to see what we are actually
                working on. This is how the eye focuses light — and where custom
                LASIK makes its correction.
              </p>
            </Reveal>

            {/* The graphic carries this in pixels; repeating it as text keeps
                it available to screen readers and to search. */}
            <Reveal delay={210}>
              <ol className="mt-8 flex flex-col gap-4">
                {[
                  ["Light enters the eye", "Light passes through the cornea."],
                  ["Focus", "The cornea and lens focus it onto the retina."],
                  ["Conversion", "The retina turns light into electrical signals."],
                  ["Brain signal", "The optic nerve carries them to the brain."],
                ].map(([step, detail], i) => (
                  <li key={step} className="flex gap-4 border-t border-line pt-4">
                    <span className="brand-gradient grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.8rem] font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{step}</span>
                      <span className="block text-[0.95rem] text-slate-body">
                        {detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={280}>
              <Link
                href="/contact"
                className="brand-gradient btn-alive mt-9 inline-block rounded-full px-7 py-3.5 text-[0.95rem] font-semibold text-white [--sweep-delay:2.4s] cursor-pointer"
              >
                Ask if LASIK is right for you
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Image
              src={asset("/eye-anatomy.jpg")}
              alt="Anatomy of the eye: the cornea, iris, pupil and lens at the front, and the sclera, choroid, retina, fovea and optic nerve at the back. Below, how vision works in four steps — light enters through the cornea, the cornea and lens focus it on the retina, the retina converts it to electrical signals, and the optic nerve carries those signals to the brain. Rand Eye Institute uses WaveScan topography to map the cornea and Iris Registration to track eye movement during surgery."
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 700px"
              className="w-full rounded-3xl border border-line shadow-lift-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
