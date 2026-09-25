import { IconAlert, IconPhone } from "./Icons";
import { practice } from "@/lib/data";

/**
 * Nobody should be typing a form message while their retina is detaching.
 * This sits above the form and in the page header so it is read before
 * anyone starts filling anything in.
 */
export default function EmergencyNotice({
  className = "",
}: {
  className?: string;
}) {
  return (
    <aside
      role="note"
      aria-label="Emergency notice"
      className={`overflow-hidden rounded-2xl border border-gold-deep/40 border-l-4 border-l-gold-deep bg-card px-6 py-5 shadow-lift ${className}`}
    >
      <p className="flex items-center gap-2.5 text-[0.82rem] font-semibold tracking-[0.14em] text-gold-deep uppercase">
        <IconAlert className="h-5 w-5 shrink-0" />
        Having an eye emergency?
      </p>

      <p className="mt-3 leading-relaxed text-ink">
        <strong className="font-semibold">Do not use this form.</strong> If you
        have sudden vision loss, a sudden shower of floaters or flashes, a
        shadow or curtain across your vision, severe eye pain, chemical
        exposure or an eye injury, call the office now and tell us it is
        urgent.
      </p>

      <a
        href={practice.phoneHref}
        className="mt-4 inline-flex items-center gap-2.5 font-sans text-2xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 hover:text-blue-brand lg:text-3xl cursor-pointer"
      >
        <IconPhone className="h-5.5 w-5.5 text-cyan-brand" />
        {practice.phone}
      </a>

      <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-body">
        Outside office hours, or if you cannot reach us, call 911 or go to the
        nearest emergency room. Messages sent through this website are not
        monitored around the clock.
      </p>
    </aside>
  );
}
