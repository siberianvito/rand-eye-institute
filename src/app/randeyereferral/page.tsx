import type { Metadata } from "next";
import GhlForm, { REFERRAL_FORM_ID } from "@/components/GhlForm";
import Wordmark from "@/components/Wordmark";
import { IconCheck, IconPhone, IconShield } from "@/components/Icons";
import { practice, years } from "@/lib/data";

/**
 * Unlisted, and deliberately a dead end. Nothing on the site links here, and
 * nothing here links anywhere: no header, no footer, no sticky call button,
 * and the numbers are plain text rather than links. The form is the only
 * thing on the page a referring office can act on.
 *
 * noindex keeps it out of search. It is left out of robots.txt on purpose,
 * because a Disallow line would advertise the path and would stop crawlers
 * reading the noindex that does the actual work.
 */
export const metadata: Metadata = {
  title: "Physician Referrals",
  description: `Refer a patient to ${practice.name} in ${practice.address.city}, FL.`,
  alternates: { canonical: "/randeyereferral" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const COMMITMENTS = [
  "Prompt scheduling — urgent cases seen quickly",
  "A written report back to you after the visit",
  "Your patient returns to your practice for routine care",
  "Direct physician-to-physician contact when you need it",
] as const;

export default function ReferralFormPage() {
  return (
    <main id="main">
      {/* Masthead. The wordmark is not a link: this page goes nowhere. */}
      <header className="bg-linear-135 from-[#16304f] via-[#0d1f38] to-[#050d1c]">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-5 lg:py-6">
          <Wordmark compact />
          <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-cyan-brand/80 uppercase">
            Physician referral form
          </p>
        </div>
      </header>

      <section className="relative border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface py-14 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="iris-a absolute -top-[40%] -right-[10%] h-[56vw] max-h-[760px] w-[56vw] max-w-[760px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.28)_0%,transparent_64%)]" />
        </div>

        <div className="shell relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <h1 className="text-[clamp(2.25rem,4.6vw,3.5rem)] leading-[1.05] font-normal">
                Physician
                <span className="brand-text-gradient italic"> referrals.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-body lg:text-xl">
                Send us the patient and the question. They are seen by one of
                the Rand physicians, treated in our own surgical pavilion, and
                returned to your care with a written report.
              </p>

              <div className="mt-12 border-t border-line pt-10">
                <p className="eyebrow">What you can expect</p>
                <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)]">
                  Your patient
                  <span className="brand-text-gradient italic">
                    {" "}
                    comes back to you.
                  </span>
                </h2>
                <p className="mt-6 text-lg text-slate-body">
                  We are a referral practice, not a competitor. A patient sent
                  here for cataract surgery, a retinal problem or a corneal
                  question is treated for that and returned — we do not take
                  over their routine care.
                </p>

                <ul className="mt-9 flex flex-col gap-3.5">
                  {COMMITMENTS.map((point) => (
                    <li key={point} className="flex gap-3 text-ink-soft">
                      <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 rounded-2xl border border-line bg-card px-6 py-6">
                  <p className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                    <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
                    Urgent referral?
                  </p>
                  <p className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink tabular-nums">
                    {practice.phone}
                  </p>
                  <p className="mt-2 text-[0.95rem] text-slate-body">
                    Ask for the referral coordinator and we will arrange the
                    visit while you are on the line.
                  </p>
                </div>

                <p className="mt-8 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-grey-brand">
                  <IconShield className="mt-0.5 h-4 w-4 shrink-0" />
                  Please send only what is needed to schedule and triage. Full
                  records can follow through your usual secure channel.
                </p>
              </div>
            </div>

            <div>
              <GhlForm
                instance="referral"
                formId={REFERRAL_FORM_ID}
                title="Physician referral form — Rand Eye Institute"
                formName="Physician Referral"
                note="Submitted referrals reach our referral coordinator directly. Please do not attach full medical records here."
                className="lg:p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plain-text colophon. No links. */}
      <footer className="bg-ink py-10 text-white/60">
        <div className="shell flex flex-col gap-2 text-[0.9rem]">
          <p className="text-white">
            {practice.name} · {practice.tagline}
          </p>
          <p>
            {practice.address.street}, {practice.address.city},{" "}
            {practice.address.state} {practice.address.zip} · {practice.phone}
          </p>
          <p className="text-[0.82rem] text-white/45">
            Serving South Florida for {years.phrase}.
          </p>
        </div>
      </footer>
    </main>
  );
}
