import Image from "next/image";
import { asset } from "@/lib/asset";
import { practice } from "@/lib/data";

/**
 * Header lockup: the real brand icon beside a live-text wordmark.
 *
 * The supplied logo.png is a single flat plate with a grey keyline and grey
 * type — it cannot sit on a dark bar without showing its box. Setting the
 * wordmark as text keeps it crisp at any size, lets it invert cleanly, and
 * matches the wide-tracked serif of the printed mark.
 */
export default function Wordmark({
  compact = false,
  /** Drops the lettering on narrow screens, where the row also has to carry
      the phone number, the CTA and the menu button. */
  iconOnlyOnMobile = false,
  className = "",
}: {
  compact?: boolean;
  iconOnlyOnMobile?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center ${compact ? "gap-3" : "gap-4"} ${className}`}>
      <Image
        src={asset("/brand-icon.png")}
        alt=""
        width={256}
        height={256}
        priority
        className={`w-auto shrink-0 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          compact ? "h-9" : "h-10 sm:h-14 lg:h-17"
        }`}
      />
      <span className={`flex-col ${iconOnlyOnMobile ? "hidden sm:flex" : "flex"}`}>
        <span
          className={`font-display leading-none whitespace-nowrap text-white transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            compact
              ? "text-[1.05rem] tracking-[0.2em]"
              : "text-[0.92rem] tracking-[0.15em] sm:text-[1.5rem] sm:tracking-[0.22em] lg:text-[2.15rem] lg:tracking-[0.24em]"
          }`}
        >
          RAND EYE INSTITUTE
        </span>
        <span
          className={`font-sans font-medium whitespace-nowrap text-cyan-brand/85 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            compact
              ? "mt-0.5 text-[0.5rem] tracking-[0.24em]"
              : "mt-1 text-[0.45rem] tracking-[0.18em] sm:mt-1.5 sm:text-[0.58rem] sm:tracking-[0.26em] lg:text-[0.72rem] lg:tracking-[0.3em]"
          }`}
        >
          {practice.tagline.toUpperCase()}
          <sup className="ml-0.5">®</sup>
        </span>
      </span>
      <span className="sr-only">{practice.name} — home</span>
    </span>
  );
}
