"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Fires a Google Ads conversion on page load.
 *
 * It pushes straight to dataLayer rather than waiting for gtag.js, which
 * loads afterInteractive. Queued events are replayed by gtag.js the moment it
 * initialises, so nothing is lost if a visitor lands and leaves quickly.
 */
export default function ConversionEvent({
  sendTo,
  value = 1.0,
  currency = "USD",
}: {
  sendTo: string;
  value?: number;
  currency?: string;
}) {
  const fired = useRef(false);

  useEffect(() => {
    // Strict Mode runs effects twice in development; one conversion only.
    if (fired.current) return;
    fired.current = true;

    window.dataLayer = window.dataLayer || [];
    const gtag = function (...args: unknown[]) {
      // gtag.js reads the arguments object itself, not an array, so push the
      // same shape the official snippet does.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
      void args;
    };
    gtag("event", "conversion", {
      send_to: sendTo,
      value,
      currency,
    });
  }, [sendTo, value, currency]);

  return null;
}
