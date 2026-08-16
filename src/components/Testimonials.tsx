import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";
import { IconStar } from "./Icons";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-surface-tint py-24 lg:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Patient stories</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              The morning
              <span className="brand-text-gradient italic"> everything changed.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.quote} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-card p-8 shadow-lift lg:p-9">
                <div className="flex gap-0.5 text-cyan-brand">
                  {Array.from({ length: 5 }, (_, s) => (
                    <IconStar key={s} className="h-4.5 w-4.5" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-6 text-[0.9rem]">
                  <span className="brand-gradient h-9 w-1 rounded-full" />
                  <span>
                    <span className="block font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="block text-grey-brand">{item.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
