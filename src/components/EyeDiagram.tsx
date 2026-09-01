"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";

/**
 * Annotated cross-section, built as an overlay rather than baked into the
 * artwork: the labels stay real text, so they scale with the reader's text
 * size, are read out by screen readers, and can be translated or corrected
 * without touching the image.
 *
 * `x`/`y` are percentages within the square illustration; the component maps
 * them onto the wider diagram box, which leaves room for labels either side.
 */
const PARTS = [
  {
    id: "cornea",
    name: "Cornea",
    desc: "The clear front window of the eye. It does most of the focusing before light reaches the lens.",
    x: 7, y: 50, side: "left", labelY: 20,
  },
  {
    id: "iris",
    name: "Iris",
    desc: "The coloured ring. It opens and narrows the pupil to control how much light gets in.",
    x: 15, y: 37, side: "left", labelY: 39,
  },
  {
    id: "pupil",
    name: "Pupil",
    desc: "The opening at the centre of the iris. It widens in dim light and shrinks in bright light.",
    x: 23, y: 53, side: "left", labelY: 58,
  },
  {
    id: "lens",
    name: "Lens",
    desc: "Sits behind the iris and fine-tunes focus. When this lens clouds, that is a cataract.",
    x: 31, y: 50, side: "left", labelY: 77,
  },
  {
    id: "sclera",
    name: "Sclera",
    desc: "The tough white outer wall that protects the eye and holds its shape.",
    x: 52, y: 7, side: "right", labelY: 14,
  },
  {
    id: "choroid",
    name: "Choroid",
    desc: "The layer of blood vessels between sclera and retina that supplies it with oxygen.",
    x: 64, y: 13, side: "right", labelY: 31,
  },
  {
    id: "retina",
    name: "Retina",
    desc: "The light-sensitive lining at the back. It converts light into nerve signals.",
    x: 58, y: 33, side: "right", labelY: 48,
  },
  {
    id: "macula",
    name: "Macula",
    desc: "The small central patch of retina responsible for sharp, detailed vision. Macular degeneration affects this.",
    x: 77, y: 48, side: "right", labelY: 65,
  },
  {
    id: "optic-nerve",
    name: "Optic nerve",
    desc: "Carries the signal from the retina to the brain. Glaucoma damages these fibres.",
    x: 89, y: 66, side: "right", labelY: 82,
  },
] as const;

// Where the square illustration sits inside the wider diagram box
const IMG_LEFT = 19;
const IMG_W = 62;
const px = (x: number) => IMG_LEFT + (x * IMG_W) / 100;

export default function EyeDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = PARTS.find((p) => p.id === activeId);

  return (
    <div>
      {/* ---------- Desktop: labels either side of the illustration ---------- */}
      <div className="relative hidden aspect-16/10 w-full lg:block">
        <div className="absolute inset-y-0 left-[19%] w-[62%]">
          <Image
            src={asset("/eye-anatomy.webp")}
            alt="Cutaway illustration of a human eye"
            width={800}
            height={800}
            sizes="620px"
            className="h-full w-full object-contain drop-shadow-[0_18px_36px_rgba(10,23,43,0.14)]"
          />
        </div>

        {/* Leader lines */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {PARTS.map((p) => {
            const on = activeId === p.id;
            const anchorX = p.side === "left" ? IMG_LEFT - 2 : IMG_LEFT + IMG_W + 2;
            return (
              <g key={p.id}>
                <line
                  x1={anchorX}
                  y1={p.labelY}
                  x2={px(p.x)}
                  y2={p.y}
                  stroke={on ? "var(--color-blue-brand)" : "var(--color-line-strong)"}
                  strokeWidth={on ? 1.6 : 1}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
                <circle
                  cx={px(p.x)}
                  cy={p.y}
                  r={on ? 1.1 : 0.7}
                  fill={on ? "var(--color-blue-brand)" : "var(--color-slate-body)"}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}
        </svg>

        {/* Labels */}
        {PARTS.map((p) => {
          const on = activeId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setActiveId(p.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(p.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId(on ? null : p.id)}
              aria-describedby={`eye-part-caption`}
              style={{ top: `${p.labelY}%` }}
              className={`absolute -translate-y-1/2 rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                p.side === "left"
                  ? "right-[83%] text-right"
                  : "left-[83%] text-left"
              } ${
                on
                  ? "bg-blue-brand text-white"
                  : "text-ink hover:bg-card hover:text-blue-brand"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Caption — one place the description appears, so labels stay short */}
      <p
        id="eye-part-caption"
        className="mx-auto mt-4 hidden min-h-[3.25rem] max-w-2xl text-center text-[0.95rem] text-slate-body lg:block"
      >
        {active ? (
          <>
            <span className="font-semibold text-ink">{active.name} — </span>
            {active.desc}
          </>
        ) : (
          "Hover or tap any label to see what that part of the eye does."
        )}
      </p>

      {/* ---------- Mobile: numbered points, then a list ---------- */}
      <div className="lg:hidden">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src={asset("/eye-anatomy.webp")}
            alt="Cutaway illustration of a human eye"
            width={800}
            height={800}
            sizes="90vw"
            className="h-full w-full object-contain"
          />
          {PARTS.map((p, i) => (
            <span
              key={p.id}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className="brand-gradient absolute grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[0.7rem] font-bold text-white shadow-lift"
              aria-hidden
            >
              {i + 1}
            </span>
          ))}
        </div>

        <ol className="mt-8 flex flex-col gap-4">
          {PARTS.map((p, i) => (
            <li key={p.id} className="flex gap-4 border-t border-line pt-4">
              <span className="brand-gradient grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.8rem] font-semibold text-white">
                {i + 1}
              </span>
              <span>
                <span className="block font-semibold text-ink">{p.name}</span>
                <span className="block text-[0.95rem] text-slate-body">
                  {p.desc}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
