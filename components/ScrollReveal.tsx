"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Reproduces the original site's scroll-reveal: elements with class "reveal" fade in
// when they enter the viewport. Re-scans on every route change (client-side nav).
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => {
      el.classList.remove("in");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
