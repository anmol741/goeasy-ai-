"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_LINK, trackPixel } from "@/lib/site-config";

const NAMESPACE = "30min";

export default function BookingEmbed() {
  const router = useRouter();
  // Cal can emit both bookingSuccessful and bookingSuccessfulV2 for one
  // booking — only count it once.
  const tracked = useRef(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;

      const onBooked = () => {
        if (tracked.current) return;
        tracked.current = true;
        trackPixel("Schedule");
        // Give the pixel request a moment to leave before navigating.
        setTimeout(() => router.push("/thank-you"), 1500);
      };

      cal("on", { action: "bookingSuccessful", callback: onBooked });
      cal("on", { action: "bookingSuccessfulV2", callback: onBooked });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      config={{ overlayCalendar: "true", layout: "month_view" }}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
