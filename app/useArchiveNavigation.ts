"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

import { useJumpReturn } from "./ArchiveJumpReturn";

/** Open and scroll only after a real navigation, never while previewing a link. */
export function useArchiveNavigation(revealEntry: (id: string) => void, aliases?: Readonly<Record<string, string>>) {
  const { remember, reset, cancel } = useJumpReturn() ?? {};
  useEffect(() => () => reset?.(), [reset]);
  const aliasesRef = useRef(aliases);
  aliasesRef.current = aliases;
  const revealRef = useRef(revealEntry);
  revealRef.current = revealEntry;
  const [destination, setDestination] = useState<{ id: string } | null>(null);

  const navigate = useCallback((hash: string) => {
    let id: string;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const canonical = aliasesRef.current?.[id];
    if (canonical) {
      id = canonical;
      window.history.replaceState(null, "", "#" + id);
    }
    if (!id || !document.getElementById(id)) return;
    if (id.startsWith("entry-")) revealRef.current(id);
    setDestination({ id });
  }, []);

  useEffect(() => {
    const openHash = () => { cancel?.(); navigate(window.location.hash); };
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, [navigate, cancel]);

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
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
    const hash = url.hash;
    let id: string;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    if (!id || !document.getElementById(aliasesRef.current?.[id] ?? id)) return;
    event.preventDefault();
    remember?.(link, id => revealRef.current(id));
    if (window.location.hash !== hash) window.history.pushState(null, "", hash);
    navigate(hash);
  };
}
