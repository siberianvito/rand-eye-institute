import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { IconArrow, IconCheck, IconPhone } from "./Icons";
import { asset } from "@/lib/asset";
import { practice } from "@/lib/data";

const POINTS = [
  "The surface layer of the cornea stays in place, so there is no epithelium to grow back",
  "Approved by the FDA in October 2025, the first epi on cross linking cleared in the United States",
  "Performed here in our own surgical pavilion by Dr. Allison Rand",
] as const;

/**
 * Cross linking is a signature procedure for this practice, so it gets its own
 * band on the home page rather than living only inside the services grid.
 */
export default function CrossLinking() {
  return (
    <section
      id="cross-linking"
      className="scroll-mt-24 border-y border-line bg-surface-tint py-20 lg:py-24"
    >
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line lg:aspect-16/11">
              <Image
                src={asset("/blog/cornea-macro.jpg")}
                alt="The curve of the cornea lit from the side, illustrating the surface layer that epithelium on cross linking leaves intact."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <p className="eyebrow">Keratoconus and cross linking</p>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)]">
                Epioxa: stopping keratoconus
                <span className="brand-text-gradient italic">
                  {" "}
                  without removing the surface.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg text-slate-body">
                Corneal cross linking is what stops a weakening cornea from
                getting worse. Traditional cross linking begins by removing the
                outer layer of the eye, and that recovery is the reason many
                patients put the procedure off. Epioxa leaves that layer intact.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <ul className="mt-8 flex flex-col gap-3.5">
                {POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href="/blog/epioxa-epithelium-on-cross-linking"
                  className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold whitespace-nowrap text-white cursor-pointer"
                >
                  Read about Epioxa
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={practice.phoneHref}
                  className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card px-7 py-4 font-semibold whitespace-nowrap text-ink hover:text-blue-brand cursor-pointer"
                >
                  <IconPhone className="h-5 w-5 text-cyan-brand" />
                  {practice.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
