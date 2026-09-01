"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { CONSULT_PATH, visionConditions } from "@/lib/data";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

/**
 * Drag-to-compare vision simulator.
 *
 * The visitor picks a condition and pulls their own sight back into focus.
 * Each simulation is an approximation applied as CSS filters and overlays to
 * the "before" layer — illustrative, not diagnostic, and labelled as such.
 *
 * Keyboard and screen-reader users get the same control through a real range
 * input rather than a mouse-only affordance.
 */
export default function ClarityReveal() {
  const [pos, setPos] = useState(38);
  const [conditionId, setConditionId] = useState<string>(visionConditions[0].id);
  const frameRef = useRef<HTMLDivElement>(null);

  const condition =
    visionConditions.find((c) => c.id === conditionId) ?? visionConditions[0];

  const setFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  /**
   * Tracking lives on the window rather than on pointer capture: capture
   * drops the drag the moment the cursor leaves the frame, and it throws
   * outright for synthetic pointer ids.
   */
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setFromClientX(e.clientX);
      const onMove = (ev: PointerEvent) => setFromClientX(ev.clientX);
      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    },
    [setFromClientX],
  );

  return (
    <section id="vision" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">See it for yourself</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              What you see
              <span className="brand-text-gradient italic"> matters.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              Choose a condition, then drag to move between how it can look and
              a corrected view. For many of our patients this is not a
              metaphor — it is the week of their procedure.
            </p>
          </Reveal>
        </div>

        {/* Condition picker */}
        <Reveal delay={200}>
          <div
            role="group"
            aria-label="Choose a vision condition to simulate"
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {visionConditions.map((c) => {
              const active = c.id === conditionId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setConditionId(c.id)}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2.5 text-[0.9rem] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "brand-gradient border-transparent text-white shadow-glow"
                      : "border-line-strong bg-card text-ink hover:border-blue-brand hover:text-blue-brand"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <figure className="mt-8">
            <div
              ref={frameRef}
              onPointerDown={onPointerDown}
              className="relative aspect-[16/9] w-full touch-none overflow-hidden rounded-3xl border border-line bg-surface-deep shadow-lift-lg select-none cursor-ew-resize"
            >
              {/* Corrected vision — the base layer */}
              <Image
                src={asset("/flowers.jpg")}
                alt="A sunlit meadow of orange poppies, blue cornflowers and pink cosmos in sharp, vivid focus"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />

              {/* Affected vision — clipped to the left of the handle */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                aria-hidden
              >
                <Image
                  key={condition.id}
                  src={asset("/flowers.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className={`object-cover transition-all duration-500 ${condition.filter}`}
                />
                {condition.overlay && (
                  <div className={`absolute inset-0 ${condition.overlay}`} />
                )}
              </div>

              <span
                className={`absolute top-5 left-5 rounded-full bg-ink/75 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur transition-opacity duration-300 ${
                  pos > 22 ? "opacity-100" : "opacity-0"
                }`}
              >
                {condition.label}
              </span>
              <span
                className={`absolute top-5 right-5 rounded-full bg-blue-brand/85 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur transition-opacity duration-300 ${
                  pos < 84 ? "opacity-100" : "opacity-0"
                }`}
              >
                Corrected
              </span>

              {/* Handle */}
              <div
                className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]"
                style={{ left: `${pos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/25 backdrop-blur-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 drop-shadow"
                    aria-hidden
                  >
                    <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* The same control, reachable by keyboard */}
            <label className="mt-6 block">
              <span className="sr-only">
                Compare {condition.label} vision with corrected vision
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(pos)}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-valuetext={`${Math.round(pos)}% ${condition.label} view shown`}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-deep accent-blue-brand"
              />
            </label>

            <figcaption className="mx-auto mt-6 max-w-2xl text-center">
              <p className="text-slate-body">{condition.caption}</p>
              <p className="mt-3 text-[0.85rem] text-grey-brand">
                An illustrative simulation, not a diagnosis. How a condition
                affects your sight — and what can be done about it — is
                determined by an examination.
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 text-center">
            <Link
              href={CONSULT_PATH}
              className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[0.95rem] font-semibold whitespace-nowrap text-white sm:px-7 [--sweep-delay:1.2s] cursor-pointer"
            >
              Request Appointment
              <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
