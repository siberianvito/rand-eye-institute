import Image from "next/image";
import { asset } from "@/lib/asset";
import { differentiators, practice } from "@/lib/data";
import Reveal from "./Reveal";

export default function WhyRand() {
  return (
    <section
      id="why-rand"
      className="scroll-mt-24 border-y border-line bg-surface-tint py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Why Rand</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
                Four exam rooms at the start.
                <br />
                <span className="brand-text-gradient italic">
                  One of the largest in the country today.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg text-slate-body">
                Dr. William J. Rand opened this practice with one nurse, one
                optometrist, and two receptionists. What has not changed in
                fifty years is the belief that the surgeon who
                recommends a procedure should be the one who performs it —
                and the one who checks on you afterward.
              </p>
            </Reveal>

            <div className="mt-12 flex flex-col">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex gap-6 border-t border-line py-7">
                    <span className="font-display text-2xl text-cyan-brand tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="mt-2 text-slate-body">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line shadow-lift-lg">
                <Image
                  src={asset("/building.jpg")}
                  alt={`The ${practice.name} building on West Sample Road in ${practice.address.city}, Florida`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover"
                />
                {/* Weighted to the lower third so the caption clears AA
                    against the white facade behind it. */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 via-26% to-transparent to-66%"
                />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-3xl text-white">
                    The Rand Surgical Pavilion
                  </p>
                  <p className="mt-2 max-w-md text-[0.95rem] text-white/85">
                    Three floors, a self-contained operating suite, and every
                    stage of your care in one place — state-licensed and Joint
                    Commission certified.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                <div className="bg-card px-6 py-6">
                  <p className="font-display text-4xl text-blue-brand">100+</p>
                  <p className="mt-1 text-[0.9rem] leading-snug text-slate-body">
                    Eye care professionals under one roof
                  </p>
                </div>
                <div className="bg-card px-6 py-6">
                  <p className="font-display text-4xl text-blue-brand">3</p>
                  <p className="mt-1 text-[0.9rem] leading-snug text-slate-body">
                    Floors, including our own surgical pavilion
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
