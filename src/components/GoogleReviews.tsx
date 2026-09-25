import { IconStar } from "./Icons";
import { practice } from "@/lib/data";

/**
 * Renders nothing until the practice's real Google rating is in data.ts. A
 * star rating is a factual claim, so it does not get placeholder numbers.
 */
export default function GoogleReviews({
  className = "",
}: {
  className?: string;
}) {
  const google = practice.google;
  if (!google) return null;

  const filled = Math.round(google.rating);

  return (
    <a
      href={google.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 rounded-2xl border border-line bg-card px-6 py-5 transition-colors duration-200 hover:border-cyan-brand cursor-pointer ${className}`}
    >
      <span className="flex flex-col">
        <span className="flex items-center gap-2">
          <span className="font-sans text-2xl font-bold tracking-tight text-ink tabular-nums">
            {google.rating.toFixed(1)}
          </span>
          <span className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <IconStar
                key={i}
                className={`h-4.5 w-4.5 ${
                  i < filled ? "text-gold" : "text-line-strong"
                }`}
              />
            ))}
          </span>
        </span>
        <span className="mt-1 text-[0.9rem] text-slate-body">
          {google.count} Google reviews for {practice.name}
        </span>
      </span>

      <span className="ml-auto shrink-0 text-[0.9rem] font-semibold text-blue-brand">
        Read them
      </span>
    </a>
  );
}
