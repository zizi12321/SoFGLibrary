"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

/** Open and scroll only after a real navigation, never while previewing a link. */
export function useArchiveNavigation(revealEntry: (id: string) => void) {
  const revealRef = useRef(revealEntry);
  revealRef.current = revealEntry;
  const [destination, setDestination] = useState<{ id: string } | null>(null);

  const navigate = useCallback((hash: string) => {
    let id: string;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    if (!id || !document.getElementById(id)) return;
    if (id.startsWith("entry-")) revealRef.current(id);
    setDestination({ id });
  }, []);

  useEffect(() => {
    const openHash = () => navigate(window.location.hash);
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, [navigate]);

  useEffect(() => {
    if (!destination) return;
    let cancelled = false;
    let frame = 0;
    // React must commit the opened card (including parent cards) before scrolling.
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        document.getElementById(destination.id)?.scrollIntoView({ block: "start", behavior: "instant" });
      });
    });
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, [destination]);

  return (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const hash = link.getAttribute("href")!;
    let id: string;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    if (!id || !document.getElementById(id)) return;
    event.preventDefault();
    if (window.location.hash !== hash) window.history.pushState(null, "", hash);
    navigate(hash);
  };
}
