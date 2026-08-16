import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { practice, stats, years } from "@/lib/data";
import IrisEye from "./IrisEye";
import Reveal from "./Reveal";
import { IconArrow, IconPhone, IconShield, IconStar } from "./Icons";

/** Ambient brand blooms behind the hero, plus the animated iris. */
function IrisField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft brand blooms */}
      <div className="iris-a absolute -top-[28%] -right-[12%] h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.34)_0%,rgba(0,160,224,0)_62%)]" />
      <div className="iris-b absolute -bottom-[34%] -left-[16%] h-[64vw] max-h-[820px] w-[64vw] max-w-[820px] rounded-full bg-[radial-gradient(circle,rgba(46,49,146,0.26)_0%,rgba(46,49,146,0)_64%)]" />
      <div className="iris-c absolute top-[6%] left-[46%] h-[38vw] max-h-[520px] w-[38vw] max-w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,102,179,0.22)_0%,rgba(0,102,179,0)_66%)]" />

      {/* The living iris — a close-up of the inside of an eye, running off the
          right edge and dissolving into the page rather than sitting on it. */}
      <IrisEye className="absolute top-1/2 left-[92%] hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-60 saturate-[0.8] [mask-image:radial-gradient(circle,#000_46%,transparent_72%)] lg:block xl:h-[860px] xl:w-[860px]" />

      {/* Fade the field into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface" />
    </div>
  );
}

export default function Hero() {
  return (
    // Top padding clears the fixed brand bar + nav strip.
    <section
      id="top"
      className="relative isolate overflow-hidden bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-20 lg:pt-52 lg:pb-28"
    >
      <IrisField />

      <div className="shell relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-start lg:gap-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/70 px-4 py-2 text-[0.78rem] font-semibold tracking-[0.16em] text-blue-brand uppercase backdrop-blur">
              <IconShield className="h-4 w-4" />
              {years.figure} Years — Excellence in Ophthalmology
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-[clamp(3rem,7.4vw,5.75rem)] font-normal">
              The best vision
              <br />
              possible.{" "}
              <span className="brand-text-gradient italic">Yours.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg text-slate-body lg:text-xl">
              South Florida&rsquo;s leader in custom no-flap LASIK, laser
              cataract surgery, and corneal cross-linking — performed by the
              Rand physicians in our own surgical pavilion in{" "}
              {practice.address.city}.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4.5 text-base font-semibold text-white cursor-pointer"
              >
                Request Your Consultation
                <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={practice.phoneHref}
                className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card/80 px-8 py-4.5 text-base font-semibold text-ink backdrop-blur hover:text-blue-brand cursor-pointer"
              >
                <IconPhone className="h-5 w-5" />
                {practice.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex items-center gap-3.5">
              <div className="flex gap-0.5 text-cyan-brand">
                {Array.from({ length: 5 }, (_, i) => (
                  <IconStar key={i} className="h-4.5 w-4.5" />
                ))}
              </div>
              <p className="text-[0.95rem] text-slate-body">
                Trusted by South Florida families for over 50 years
              </p>
            </div>
          </Reveal>
        </div>

        {/* Anniversary medallion — pulled in beside the headline, and inboard
            of the iris rings so the two marks never stack. */}
        <Reveal
          delay={300}
          className="mt-14 flex justify-center lg:mt-0 lg:justify-start lg:self-center"
        >
          <Image
            src={asset("/badge-50.png")}
            alt="Rand Eye Institute — 50 Years, Excellence in Ophthalmology"
            width={862}
            height={900}
            priority
            className="h-44 w-auto drop-shadow-[0_22px_44px_rgba(10,23,43,0.34)] sm:h-52 lg:h-60 xl:h-72"
          />
        </Reveal>

        {/* Credibility rail */}
        <Reveal delay={420} className="lg:col-span-2">
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/85 px-6 py-7 backdrop-blur">
                <dt className="font-display text-4xl text-blue-brand lg:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[0.9rem] leading-snug text-slate-body">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
