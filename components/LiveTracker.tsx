"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LiveTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const key = `querystaff-visit-${pathname}`;

    if (sessionStorage.getItem(key)) return;

    fetch("/api/admin/live-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Visiteur arrivé",
      }),
    }).then(() => {
      sessionStorage.setItem(key, "1");
    });
  }, [pathname]);

  return null;
}
