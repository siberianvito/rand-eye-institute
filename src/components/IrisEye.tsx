/**
 * The living iris.
 *
 * Drawn rather than photographed so it can shift through eye colours, breathe
 * at the pupil, and drift its fibres — an eye practice's own logo motif, alive.
 * Colours come from the `--iris-*` custom properties animated in globals.css,
 * so every layer stays in sync automatically.
 *
 * Decorative only: it carries no meaning a screen reader needs.
 */
const FIBRE_COUNT = 132;
const CENTER = 200;

export default function IrisEye({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden
      focusable="false"
      className={`iris-eye ${className}`}
    >
      <defs>
        {/* Fades out rather than ending on a hard rim — this is a close-up of
            the inside of an eye, not a whole eyeball sitting on the page. */}
        <radialGradient id="iris-body" cx="50%" cy="46%" r="54%">
          <stop offset="0%" stopColor="var(--iris-core)" stopOpacity="0.9" />
          <stop offset="34%" stopColor="var(--iris-mid)" stopOpacity="0.8" />
          <stop offset="68%" stopColor="var(--iris-mid)" stopOpacity="0.5" />
          <stop offset="88%" stopColor="var(--iris-edge)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--iris-edge)" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="iris-halo-grad" cx="50%" cy="50%" r="50%">
          <stop offset="45%" stopColor="var(--iris-core)" stopOpacity="0.32" />
          <stop offset="72%" stopColor="var(--iris-mid)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--iris-mid)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="iris-fibre" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--iris-core)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--iris-edge)" stopOpacity="0.25" />
        </linearGradient>

        <radialGradient id="iris-pupil-grad" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#0a1020" />
          <stop offset="70%" stopColor="#04070f" />
          <stop offset="100%" stopColor="#01030a" />
        </radialGradient>

        {/* Soft outer bloom */}
        <filter id="iris-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Bloom behind everything */}
      <circle
        className="iris-halo"
        cx={CENTER}
        cy={CENTER}
        r="188"
        fill="url(#iris-halo-grad)"
        filter="url(#iris-blur)"
      />

      {/* Iris body */}
      <circle cx={CENTER} cy={CENTER} r="150" fill="url(#iris-body)" />

      {/* Fibres — the striated texture of a real iris */}
      <g className="iris-fibres">
        {Array.from({ length: FIBRE_COUNT }, (_, i) => {
          const angle = (i / FIBRE_COUNT) * Math.PI * 2;
          const inner = i % 4 === 0 ? 60 : 72;
          const outer = i % 3 === 0 ? 148 : i % 2 === 0 ? 132 : 118;
          return (
            <line
              key={i}
              x1={CENTER + Math.cos(angle) * inner}
              y1={CENTER + Math.sin(angle) * inner}
              x2={CENTER + Math.cos(angle) * outer}
              y2={CENTER + Math.sin(angle) * outer}
              stroke="url(#iris-fibre)"
              strokeWidth={i % 3 === 0 ? 1.6 : 1}
              strokeOpacity={i % 2 === 0 ? 0.7 : 0.42}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Collarette — the ridge where the pupil zone meets the iris */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r="74"
        fill="none"
        stroke="var(--iris-core)"
        strokeOpacity="0.5"
        strokeWidth="2.5"
      />
      <circle
        cx={CENTER}
        cy={CENTER}
        r="84"
        fill="none"
        stroke="var(--iris-core)"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* Pupil */}
      <circle
        className="iris-pupil"
        cx={CENTER}
        cy={CENTER}
        r="58"
        fill="url(#iris-pupil-grad)"
      />

      {/* Catchlights — what actually sells it as wet and alive */}
      <ellipse
        cx="152"
        cy="146"
        rx="34"
        ry="24"
        fill="#ffffff"
        opacity="0.4"
        transform="rotate(-28 152 146)"
      />
      <circle cx="246" cy="252" r="12" fill="#ffffff" opacity="0.14" />
      <ellipse
        cx="196"
        cy="286"
        rx="52"
        ry="16"
        fill="var(--iris-core)"
        opacity="0.18"
      />
    </svg>
  );
}
