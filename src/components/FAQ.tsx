import { faqs, practice } from "@/lib/data";
import Reveal from "./Reveal";
import { IconPlus } from "./Icons";

/**
 * Native <details> accordion — keyboard operable and screen-reader correct
 * with no JavaScript, and it still works if hydration ever fails.
 */
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Straight answers</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
                The questions
                <span className="brand-text-gradient italic">
                  {" "}
                  everyone asks.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-slate-body">
                And if yours is not here, call us. A member of our clinical team
                will answer it — not a call centre.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <a
                href={practice.phoneHref}
                className="mt-6 inline-block font-display text-3xl text-blue-brand transition-colors duration-200 hover:text-indigo-brand cursor-pointer"
              >
                {practice.phone}
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 70}>
                <details className="group border-t border-line last:border-b">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-xl font-medium text-ink transition-colors duration-200 hover:text-blue-brand [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-2xl">{faq.q}</span>
                    <IconPlus className="mt-1.5 h-5 w-5 shrink-0 text-cyan-brand transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="max-w-2xl pb-7 text-slate-body">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
