import Image from "next/image";
import { asset } from "@/lib/asset";
import { doctors, practice, years } from "@/lib/data";
import Reveal from "./Reveal";
import { IconCheck } from "./Icons";

export default function Doctors() {
  return (
    <section id="physicians" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">The physicians</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              Family owned
              <span className="brand-text-gradient italic"> and operated.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              The Rand family has led this institute for {years.phrase}. You
              will know your surgeon by name — and they will know your eyes by
              their measurements.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-lift-lg">
                <div className="relative aspect-4/5 overflow-hidden bg-indigo-brand">
                  <Image
                    src={asset(doc.photo)}
                    alt={`${doc.name}, ${doc.role} at ${practice.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  {/* Ties the navy studio backdrop into the brand gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-indigo-brand/70 via-indigo-brand/10 to-transparent to-45%"
                  />
                  <p className="absolute inset-x-0 bottom-0 p-5 font-display text-[1.05rem] leading-snug text-white italic">
                    &ldquo;{doc.quote}&rdquo;
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{doc.name}</h3>
                  <p className="mt-1.5 text-[0.8rem] font-semibold tracking-[0.14em] text-cyan-brand uppercase">
                    {doc.kicker}
                  </p>
                  <p className="mt-2.5 text-[0.95rem] font-medium text-ink-soft">
                    {doc.role}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                    {doc.credentials.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2.5 text-[0.9rem] text-slate-body"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-brand" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                      Areas of focus
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {doc.focus.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-line bg-surface-tint px-2.5 py-1 text-[0.72rem] font-medium text-ink-soft"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
