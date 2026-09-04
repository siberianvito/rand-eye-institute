import type { Metadata } from "next";
import Link from "next/link";
import GhlForm, { REFERRAL_FORM_ID } from "@/components/GhlForm";
import Reveal from "@/components/Reveal";
import { IconArrow, IconCheck, IconPhone, IconShield } from "@/components/Icons";
import { practice, years } from "@/lib/data";

export const metadata: Metadata = {
  title: "Physician Referrals",
  description: `Refer a patient to ${practice.name} in ${practice.address.city}, FL. Send the referral online or call ${practice.phone}.`,
  alternates: { canonical: "/referrals" },
  openGraph: {
    title: "Physician Referrals | Rand Eye Institute",
    description:
      "Refer a patient for surgical or medical eye care. Your patient comes back to you.",
    url: "/referrals",
  },
};

const COMMITMENTS = [
  "Prompt scheduling — urgent cases seen quickly",
  "A written report back to you after the visit",
  "Your patient returns to your practice for routine care",
  "Direct physician-to-physician contact when you need it",
] as const;

export default function ReferralsPage() {
  return (
    <>
      {/* Page header — clears the fixed brand bar + nav strip. */}
      <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-16 lg:pt-52 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="iris-a absolute -top-[40%] -right-[10%] h-[56vw] max-h-[760px] w-[56vw] max-w-[760px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.28)_0%,transparent_64%)]" />
        </div>

        <div className="shell relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[0.85rem] text-slate-body">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-blue-brand cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2 text-grey-brand">/</span>
              <span className="text-ink">Physician Referrals</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-normal">
              Physician
              <span className="brand-text-gradient italic"> referrals.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg text-slate-body lg:text-xl">
              Send us the patient and the question. They are seen by one of the
              Rand physicians, treated in our own surgical pavilion, and
              returned to your care with a written report.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={practice.phoneHref}
                className="brand-gradient btn-alive inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4.5 text-base font-semibold whitespace-nowrap text-white sm:px-8 cursor-pointer"
              >
                <IconPhone className="h-5 w-5" />
                {practice.phone}
              </a>
              <a
                href="#referral-form"
                className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card/80 px-8 py-4.5 text-base font-semibold text-ink backdrop-blur hover:text-blue-brand cursor-pointer"
              >
                Send a referral
                <IconArrow className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitments + form */}
      <section
        id="referral-form"
        className="relative scroll-mt-32 overflow-hidden bg-surface py-20 lg:py-24"
      >
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">What you can expect</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)]">
                  Your patient
                  <span className="brand-text-gradient italic"> comes back to you.</span>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 text-lg text-slate-body">
                  We are a referral practice, not a competitor. A patient sent
                  here for cataract surgery, a retinal problem or a corneal
                  question is treated for that and returned — we do not take
                  over their routine care.
                </p>
              </Reveal>

              <Reveal delay={210}>
                <ul className="mt-9 flex flex-col gap-3.5">
                  {COMMITMENTS.map((point) => (
                    <li key={point} className="flex gap-3 text-ink-soft">
                      <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={280}>
                <a
                  href={practice.phoneHref}
                  className="group mt-12 block rounded-2xl border border-line bg-card px-6 py-6 transition-colors duration-200 hover:border-cyan-brand hover:bg-surface-deep cursor-pointer"
                >
                  <p className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                    <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
                    Urgent referral?
                  </p>
                  <p className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 group-hover:text-blue-brand">
                    {practice.phone}
                  </p>
                  <p className="mt-2 text-[0.95rem] text-slate-body">
                    Ask for the referral coordinator and we will arrange the
                    visit while you are on the line.
                  </p>
                </a>
              </Reveal>

              <Reveal delay={330}>
                <p className="mt-8 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-grey-brand">
                  <IconShield className="mt-0.5 h-4 w-4 shrink-0" />
                  Please send only what is needed to schedule and triage. Full
                  records can follow through your usual secure channel.
                </p>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <GhlForm
                instance="referral"
                formId={REFERRAL_FORM_ID}
                title="Physician referral form — Rand Eye Institute"
                formName="Physician Referral"
                note="Submitted referrals reach our referral coordinator directly. Please do not attach full medical records here."
                className="lg:p-8"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-t border-line bg-surface-tint py-16 lg:py-20">
        <div className="shell">
          <h2 className="text-center text-3xl">
            Where your patient is going
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {[
              [years.figure, "Years of surgical expertise"],
              ["35", "Years of Joint Commission accreditation"],
              ["4", "Surgical suites on site"],
              ["1", "Building, from consult to recovery"],
            ].map(([value, label]) => (
              <div key={label} className="bg-card px-6 py-7">
                <dt className="font-display text-4xl text-blue-brand tabular-nums lg:text-5xl">
                  {value}
                </dt>
                <dd className="mt-1.5 text-[0.9rem] leading-snug text-slate-body">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
