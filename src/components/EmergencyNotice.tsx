import { IconAlert, IconPhone } from "./Icons";
import { practice } from "@/lib/data";

/** Sits beside the form so it is read before anyone starts typing. */
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
        This form is not for emergencies. If you are having an eye emergency,
        please call us at the number below.
      </p>

      <a
        href={practice.phoneHref}
        className="mt-3 inline-flex items-center gap-2.5 font-sans text-2xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 hover:text-blue-brand lg:text-3xl cursor-pointer"
      >
        <IconPhone className="h-5.5 w-5.5 text-cyan-brand" />
        {practice.phone}
      </a>
    </aside>
  );
}
