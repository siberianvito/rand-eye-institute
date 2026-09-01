import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import {
  IconArrow,
  IconCheck,
  IconDroplet,
  IconEye,
  IconPulse,
  IconScan,
  IconShield,
  IconSparkle,
} from "./Icons";

const icons = {
  comprehensive: IconEye,
  cataract: IconScan,
  lasik: IconSparkle,
  "cross-linking": IconShield,
  "dry-eye": IconDroplet,
  retina: IconPulse,
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
              Complete eye care.
              <br />
              <span className="brand-text-gradient italic">
                A tailored approach.
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((proc, i) => {
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


                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-2 text-[0.95rem] font-semibold text-blue-brand transition-colors duration-200 hover:text-indigo-brand cursor-pointer"
                  >
                    See if you&rsquo;re a candidate
                    <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Anatomy explainer */}
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Understand your eye</p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-4 text-[clamp(2rem,3.6vw,2.85rem)]">
                How sight
                <span className="brand-text-gradient italic"> actually works.</span>
              </h3>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-slate-body">
                Almost every condition we treat comes down to one of these four
                steps going wrong. Knowing which one it is makes the rest of this
                site — and your own diagnosis — much easier to follow.
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
                className="brand-gradient btn-alive mt-9 inline-block rounded-full px-7 py-3.5 text-[0.95rem] font-semibold whitespace-nowrap text-white [--sweep-delay:2.4s] cursor-pointer"
              >
                Request Appointment
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="flex justify-center lg:sticky lg:top-32">
              <Image
                src={asset("/eye-anatomy.webp")}
                alt="Cutaway illustration of a human eye showing the cornea and lens at the front, the coloured iris around the pupil, and the retina lining the back of the eye where the optic nerve leaves it."
                width={800}
                height={800}
                sizes="(max-width: 1024px) 90vw, 560px"
                className="h-auto w-full max-w-[560px] drop-shadow-[0_22px_44px_rgba(10,23,43,0.16)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
