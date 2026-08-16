"use client";

import { useState } from "react";
import { practice, signatureProcedures } from "@/lib/data";
import Reveal from "./Reveal";
import { IconCheck, IconPhone, IconShield } from "./Icons";

/**
 * TODO (pre-launch): replace with the practice's own inbox and confirm the
 * address once from FormSubmit's activation email. Until then submissions
 * will not be delivered.
 */
const FORM_ENDPOINT = "https://formsubmit.co/ajax/YOUR-EMAIL@randeye.com";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-line-strong bg-card px-4 py-3.5 text-ink placeholder:text-grey-brand transition-colors duration-200 focus:border-blue-brand focus:outline-none";

export default function Consult() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="request"
      className="relative scroll-mt-32 overflow-hidden bg-surface py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="iris-a pointer-events-none absolute -top-1/4 -right-[8%] h-[46vw] max-h-[640px] w-[46vw] max-w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.18)_0%,transparent_66%)]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Pitch + practice details */}
          <div>
            <Reveal>
              <p className="eyebrow">Request a consultation</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
                Find out what your
                <span className="brand-text-gradient italic"> eyes can do.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg text-slate-body">
                Your consultation includes a full diagnostic workup and an
                honest recommendation — including when the honest
                recommendation is to wait. There is no obligation and no
                pressure.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <ul className="mt-9 flex flex-col gap-3.5">
                {[
                  "Complete diagnostic mapping of both eyes",
                  "A written price, with insurance verified up front",
                  "Interest-free monthly payment plans available",
                  "You meet the surgeon, not a sales consultant",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Address and hours live in the page header above, so they are
                not repeated here. */}
            <Reveal delay={280}>
              <a
                href={practice.phoneHref}
                className="group mt-12 block rounded-2xl border border-line bg-card px-6 py-6 transition-colors duration-200 hover:border-cyan-brand hover:bg-surface-deep cursor-pointer"
              >
                <p className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
                  Prefer to talk it through?
                </p>
                <p className="mt-2 font-sans text-3xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 group-hover:text-blue-brand">
                  {practice.phone}
                </p>
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={160}>
            <div className="rounded-3xl border border-line bg-card p-7 shadow-lift-lg lg:p-10">
              {status === "sent" ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <div className="brand-gradient grid h-16 w-16 place-items-center rounded-full text-white">
                    <IconCheck className="h-8 w-8" />
                  </div>
                  <h3 className="mt-7 text-3xl">Request received</h3>
                  <p className="mt-3 max-w-sm text-slate-body">
                    A member of our team will call you within one business day
                    to schedule your consultation. If you need us sooner, call{" "}
                    <a
                      href={practice.phoneHref}
                      className="font-semibold text-blue-brand underline underline-offset-4 cursor-pointer"
                    >
                      {practice.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate={false}>
                  <h3 className="text-3xl">Request your consultation</h3>
                  <p className="mt-2 text-[0.95rem] text-slate-body">
                    We reply within one business day.
                  </p>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute h-0 w-0 opacity-0"
                    aria-hidden
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New consultation request — randeye.com"
                  />

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[0.85rem] font-semibold text-ink"
                      >
                        Full name <span className="text-cyan-brand">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[0.85rem] font-semibold text-ink"
                      >
                        Phone <span className="text-cyan-brand">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(954) 000-0000"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[0.85rem] font-semibold text-ink"
                      >
                        Email <span className="text-cyan-brand">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@email.com"
                        className={fieldClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="procedure"
                        className="mb-2 block text-[0.85rem] font-semibold text-ink"
                      >
                        What are you interested in?
                      </label>
                      <select
                        id="procedure"
                        name="procedure"
                        defaultValue=""
                        className={`${fieldClass} cursor-pointer`}
                      >
                        <option value="">I&rsquo;m not sure yet</option>
                        {signatureProcedures.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Comprehensive eye exam">
                          Comprehensive eye exam
                        </option>
                        <option value="Other">Something else</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[0.85rem] font-semibold text-ink"
                      >
                        Anything we should know?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Current prescription, previous eye surgery, or the best time to reach you."
                        className={`${fieldClass} resize-y`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="brand-gradient btn-alive mt-8 w-full rounded-full px-8 py-4.5 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                  >
                    {status === "sending" ? "Sending…" : "Request My Consultation"}
                  </button>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[0.9rem] text-red-700"
                    >
                      Something went wrong sending your request. Please call us
                      at{" "}
                      <a
                        href={practice.phoneHref}
                        className="font-semibold underline underline-offset-4 cursor-pointer"
                      >
                        {practice.phone}
                      </a>{" "}
                      and we will take care of it.
                    </p>
                  )}

                  <p className="mt-5 flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-grey-brand">
                    <IconShield className="mt-0.5 h-4 w-4 shrink-0" />
                    Your information is used only to contact you about your care.
                    Please do not send sensitive medical details through this
                    form.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
