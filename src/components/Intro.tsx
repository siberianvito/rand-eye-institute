import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { CONSULT_PATH, facilityLine, practice, stats, years } from "@/lib/data";
import CountUp from "./CountUp";
import GhlForm from "./GhlForm";
import Reveal from "./Reveal";
import { IconArrow, IconPhone, IconShield, IconStar } from "./Icons";

/**
 * Second section. Deliberately reads as a section rather than a header — no
 * viewport-height padding, a smaller headline, and the page's h1 living here
 * because the film above it carries no text.
 */
export default function Intro() {
  return (
    <section
      id="top"
      className="relative scroll-mt-32 overflow-hidden border-b border-line bg-surface-tint py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="iris-a pointer-events-none absolute -top-1/3 -right-[10%] h-[42vw] max-h-[560px] w-[42vw] max-w-[560px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.22)_0%,transparent_66%)]"
      />

      <div className="shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Pitch */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 text-[0.75rem] font-semibold tracking-[0.16em] text-blue-brand uppercase">
                <IconShield className="h-4 w-4" />
                {years.figure} Years — {practice.tagline}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[clamp(2.25rem,4.4vw,3.5rem)] font-normal">
                The best vision possible.{" "}
                <span className="brand-text-gradient italic">Yours.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-lg text-slate-body">
                South Florida&rsquo;s leader in custom no-flap LASIK, laser
                cataract surgery, and corneal cross-linking — performed by the
                Rand physicians in our own surgical pavilion in{" "}
                {practice.address.city}.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href={CONSULT_PATH}
                  className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[0.95rem] font-semibold whitespace-nowrap text-white sm:px-7 cursor-pointer"
                >
                  Request Your Consultation
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={practice.phoneHref}
                  className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card px-6 py-4 text-[0.95rem] font-semibold whitespace-nowrap text-ink hover:text-blue-brand sm:px-7 cursor-pointer"
                >
                  <IconPhone className="h-5 w-5" />
                  {practice.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex gap-0.5 text-cyan-brand">
                  {Array.from({ length: 5 }, (_, i) => (
                    <IconStar key={i} className="h-4.5 w-4.5" />
                  ))}
                </div>
                <p className="text-[0.95rem] text-slate-body">
                  Trusted by South Florida families for {years.phrase}
                </p>
              </div>
            </Reveal>

            {/* Centred beneath the copy — it reads as a seal there, rather
                than as one more item crowding the trust line. */}
            <Reveal delay={320}>
              <div className="mt-10 flex justify-center lg:mt-12">
                <Image
                  src={asset("/badge-50.png")}
                  alt={`${practice.name} — ${years.figure} Years, ${practice.tagline}`}
                  width={640}
                  height={668}
                  priority
                  className="h-44 w-auto drop-shadow-[0_18px_36px_rgba(10,23,43,0.28)] sm:h-52 lg:h-60"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={160}>
            <div>
              <h2 className="text-2xl">Request a consultation</h2>
              <p className="mt-1.5 text-[0.95rem] text-slate-body">
                We reply within one business day — or call us directly.
              </p>
              <GhlForm
                instance="home"
                minHeight="min-h-[620px]"
                className="mt-5"
              />
            </div>
          </Reveal>
        </div>

        {/* Credibility rail — figures count up as it scrolls into view */}
        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-7">
                <dt className="font-display text-4xl text-blue-brand tabular-nums lg:text-5xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1.5 text-[0.9rem] leading-snug text-slate-body">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-5 text-center text-[0.95rem] text-slate-body">
            {facilityLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
