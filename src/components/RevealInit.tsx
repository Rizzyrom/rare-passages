"use client";

import { useEffect } from "react";

// Progressive scroll reveals. Elements opt in with data-reveal.
// The `has-reveal` class gates the hidden state so nothing disappears
// without JavaScript, and prefers-reduced-motion is honored in CSS.
export function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("has-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const observeAll = () => {
      document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((el) => observer.observe(el));
    };
    observeAll();

    // Catch client-side navigations rendering new [data-reveal] nodes.
    // Scan only when nodes were actually added, batched to one pass per frame.
    let scheduled = false;
    const mutations = new MutationObserver((records) => {
      if (scheduled) return;
      if (!records.some((r) => r.addedNodes.length > 0)) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        observeAll();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
