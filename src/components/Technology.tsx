import { technology } from "@/lib/data";
import Reveal from "./Reveal";
import { IconSparkle } from "./Icons";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="iris-a absolute -top-1/3 right-0 h-[52vw] max-h-[720px] w-[52vw] max-w-[720px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.30)_0%,transparent_66%)]" />
        <div className="iris-b absolute -bottom-1/3 -left-[10%] h-[48vw] max-h-[660px] w-[48vw] max-w-[660px] rounded-full bg-[radial-gradient(circle,rgba(46,49,146,0.55)_0%,transparent_68%)]" />
      </div>

      <div className="shell relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[0.75rem] font-semibold tracking-[0.22em] text-cyan-brand uppercase">
              Technology
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)] text-white">
              Precision measured
              <br />
              <span className="brand-text-gradient-dark italic">in microns.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-white/70">
              We adopt a platform when it measurably improves an outcome — not
              because it is new. Each one below is used daily, by surgeons
              trained on it here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/12 bg-white/12 md:grid-cols-2">
          {technology.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 90}>
              <div className="h-full bg-ink px-8 py-9 transition-colors duration-300 hover:bg-ink-soft lg:px-10 lg:py-11">
                <IconSparkle className="h-6 w-6 text-cyan-brand" />
                <h3 className="mt-5 text-2xl text-white">{tech.name}</h3>
                <p className="mt-3 text-white/65">{tech.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
