 "use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LiveTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const key = `querystaff-visit-${pathname}`;

    if (sessionStorage.getItem(key)) return;

    const userAgent = navigator.userAgent;

    const browser =
      userAgent.includes("Chrome") ? "Chrome" :
      userAgent.includes("Safari") ? "Safari" :
      userAgent.includes("Firefox") ? "Firefox" :
      userAgent.includes("Edg") ? "Edge" :
      "Autre";

    const device = /Mobi|Android|iPhone|iPad/i.test(userAgent)
      ? "Mobile"
      : "Ordinateur";

    fetch("/api/admin/live-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Visiteur arrivé",
        page: pathname,
        browser,
        device,
      }),
    }).then(() => {
      sessionStorage.setItem(key, "1");
    });
  }, [pathname]);

  return null;
}