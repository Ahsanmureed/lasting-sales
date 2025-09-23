"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { gtag, fbPixel } from "@/lib/analytics";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    gtag.pageview(url);
    fbPixel.pageview();
  }, [pathname, searchParams]);

  return null;
}
