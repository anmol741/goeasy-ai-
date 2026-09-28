"use client";

import { useEffect } from "react";
import { trackPixel } from "@/lib/site-config";

// Site-wide pixel listeners. One delegated click handler covers every tel:
// link, including ones rendered by server components.
export default function PixelEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (target?.closest?.('a[href^="tel:"]')) {
        trackPixel("Contact");
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
