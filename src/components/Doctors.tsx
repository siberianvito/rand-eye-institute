import Image from "next/image";
import { asset } from "@/lib/asset";
import { doctors, practice, years } from "@/lib/data";
import Reveal from "./Reveal";

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
              A family practice, in the
              <span className="brand-text-gradient italic"> literal sense.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              The Rand family has led this institute for {years.phrase}.
              You will know your surgeon by name — and they will know your eyes
              by their measurements.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 110}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-lift-lg">
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
                    className="absolute inset-0 bg-linear-to-t from-indigo-brand/45 via-transparent to-transparent to-45%"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl">{doc.name}</h3>
                  <p className="mt-1.5 text-[0.8rem] font-semibold tracking-[0.14em] text-cyan-brand uppercase">
                    {doc.role}
                  </p>
                  <p className="mt-4 text-[0.95rem] text-slate-body">{doc.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
