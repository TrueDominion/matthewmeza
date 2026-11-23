"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Starts scroll-triggered reveals as they enter the viewport. Re-arms on each page. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal="scroll"]:not(.is-inview)');
    if (!("IntersectionObserver" in window)) {
      for (const el of els) el.classList.add("is-inview");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
