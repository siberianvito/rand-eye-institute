"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { useCallback, useRef, useState } from "react";
import Reveal from "./Reveal";

/**
 * Drag-to-compare clarity slider. The emotional pitch of the whole site:
 * the visitor physically pulls their own vision back into focus.
 *
 * Keyboard and screen-reader users get the same control through a real
 * range input rather than a mouse-only affordance.
 */
export default function ClarityReveal() {
  const [pos, setPos] = useState(38);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
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
    <section className="bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">The difference</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              This is what we
              <span className="brand-text-gradient italic"> give back.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              Drag to move between a cataract-clouded world and a corrected one.
              For most of our patients, this is not a metaphor — it is the week
              of their procedure.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <figure className="mt-14">
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
                priority={false}
              />

              {/* Uncorrected vision — clipped to the left of the handle.
                  Blur plus the yellow-grey cast and lost saturation that
                  actually characterise a cataract, not blur alone. */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                aria-hidden
              >
                <Image
                  src={asset("/flowers.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="scale-105 object-cover blur-[9px] brightness-[0.9] saturate-[0.5] sepia-[0.3] contrast-[0.88]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(190,180,150,0.34)_0%,rgba(120,120,120,0.22)_70%)]" />
              </div>

              {/* Labels */}
              <span
                className={`absolute top-5 left-5 rounded-full bg-ink/70 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur transition-opacity duration-300 ${
                  pos > 16 ? "opacity-100" : "opacity-0"
                }`}
              >
                Before
              </span>
              <span
                className={`absolute top-5 right-5 rounded-full bg-blue-brand/85 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur transition-opacity duration-300 ${
                  pos < 84 ? "opacity-100" : "opacity-0"
                }`}
              >
                After
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

            {/* Accessible control — the same slider, reachable by keyboard */}
            <label className="mt-6 block">
              <span className="sr-only">
                Compare clouded and corrected vision
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(pos)}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-valuetext={`${Math.round(pos)}% clouded vision shown`}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-deep accent-blue-brand"
              />
            </label>

            <figcaption className="mt-5 text-center text-[0.9rem] text-grey-brand">
              Illustrative simulation of cataract-clouded vision. Individual
              results vary — your consultation determines what is achievable for
              your eyes.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
