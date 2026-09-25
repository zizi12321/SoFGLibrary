"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import "./archive-navigation.css";

type Reveal = (id: string) => void;
type Anchor = { element: HTMLElement; rootId: string; path: number[]; top: number };
type ReadingPosition = { anchors: Anchor[]; openParents: string[]; scrollY: number; url: string; reveal: Reveal };
type Navigation = { remember: (link: HTMLAnchorElement, reveal: Reveal) => void; reset: () => void; cancel: () => void };
const NavigationContext = createContext<Navigation | null>(null);

function anchorFor(element: HTMLElement): Anchor {
  const root = element.closest<HTMLElement>("[id]");
  const path: number[] = [];
  let node: Element = element;
  while (root && node !== root && node.parentElement) {
    path.unshift(Array.from(node.parentElement.children).indexOf(node));
    node = node.parentElement;
  }
  return { element, rootId: root?.id ?? "", path, top: element.getBoundingClientRect().top };
}

function resolveAnchor(anchor: Anchor): HTMLElement | null {
  if (anchor.element.isConnected) return anchor.element;
  let node: Element | null = document.getElementById(anchor.rootId);
  for (const index of anchor.path) node = node?.children[index] ?? null;
  return node instanceof HTMLElement ? node : null;
}

function readingElement(link: HTMLAnchorElement): HTMLElement | null {
  const content = document.querySelector<HTMLElement>(".content-shell");
  if (!content) return null;
  const origin = link.dataset.jumpOrigin;
  const source = origin
    ? document.querySelector<HTMLElement>('[data-reference-origin="' + CSS.escape(origin) + '"]')
    : link;
  if (source && content.contains(source)) return source;

  // Sidebar/portal links are not part of the reading position. Find visible body content.
  const rect = content.getBoundingClientRect();
  const x = Math.min(innerWidth - 24, Math.max(rect.left + 40, rect.left + rect.width * .3));
  for (const y of [80, 150, 240, innerHeight * .5]) {
    const element = document.elementsFromPoint(x, y).find(node => content.contains(node) && !node.closest(".cross-popover"));
    const leaf = element?.closest<HTMLElement>("p, li, h1, h2, h3, h4, button, a");
    if (leaf && content.contains(leaf)) return leaf;
    const container = element?.closest("article, section") ?? element;
    // A gap between columns may hit a large section. Anchor to its nearest visible
    // line/card instead of keeping an offset into the section's changing height.
    const visible = Array.from(container?.querySelectorAll<HTMLElement>("p, li, h1, h2, h3, h4, .expandable-summary") ?? [])
      .filter(node => {
        if (node.closest(".cross-popover")) return false;
        let row = node.closest<HTMLElement>(".expandable-row");
        while (row) {
          if (!row.classList.contains("is-open") && !row.querySelector(":scope > .expandable-summary")?.contains(node)) return false;
          row = row.parentElement?.closest(".expandable-row") ?? null;
        }
        const box = node.getBoundingClientRect();
        return box.height > 0 && box.bottom > 0 && box.top < innerHeight;
      }).sort((a, b) => Math.abs(a.getBoundingClientRect().top - y) - Math.abs(b.getBoundingClientRect().top - y));
    if (visible[0]) return visible[0];
  }
  return Array.from(content.querySelectorAll<HTMLElement>("[id]")).find(element => {
    const box = element.getBoundingClientRect();
    return box.height > 0 && box.top >= 0 && box.top < innerHeight;
  }) ?? content;
}

function snapshot(link: HTMLAnchorElement, reveal: Reveal): ReadingPosition {
  const element = readingElement(link);
  const anchors: Anchor[] = [];
  const openParents: string[] = [];
  let parent: HTMLElement | null = element;
  while (parent && !parent.matches(".content-shell")) {
    if (parent === element || parent.id) anchors.push(anchorFor(parent));
    if (parent.matches(".expandable-row.is-open[id]")) openParents.push(parent.id);
    parent = parent.parentElement;
  }
  return { anchors, openParents, scrollY, url: location.pathname + location.search + location.hash, reveal };
}

export function ArchiveJumpReturnProvider({ children }: { children: ReactNode }) {
  const positions = useRef<ReadingPosition[]>([]);
  const [count, setCount] = useState(0);
  const stopRestoring = useRef<() => void>(() => {});
  const cancel = useCallback(() => stopRestoring.current(), []);
  const reset = useCallback(() => {
    cancel();
    positions.current = [];
    setCount(0);
  }, [cancel]);
  const remember = useCallback((link: HTMLAnchorElement, reveal: Reveal) => {
    cancel();
    positions.current.push(snapshot(link, reveal));
    setCount(positions.current.length);
  }, [cancel]);

  useEffect(() => {
    window.addEventListener("popstate", reset);
    return () => { window.removeEventListener("popstate", reset); cancel(); };
  }, [reset, cancel]);

  const returnToReading = () => {
    cancel();
    const position = positions.current.pop();
    if (!position) return;
    setCount(positions.current.length);
    window.history.replaceState(window.history.state, "", position.url);
    position.openParents.forEach(position.reveal);

    let frame = 0;
    let stopped = false;
    const started = performance.now();
    const html = document.documentElement;
    const previousAnchoring = html.style.overflowAnchor;
    html.style.overflowAnchor = "none";
    const inputEvents = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    const stop = () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      html.style.overflowAnchor = previousAnchoring;
      inputEvents.forEach(name => window.removeEventListener(name, stop, true));
    };
    stopRestoring.current = stop;
    inputEvents.forEach(name => window.addEventListener(name, stop, { capture: true, passive: true }));
    let focused = false;
    const restore = () => {
      if (stopped) return;
      let targetY = position.scrollY;
      for (const anchor of position.anchors) {
        const node = resolveAnchor(anchor);
        if (!node || !node.getClientRects().length || node.getBoundingClientRect().height <= 0) continue;
        // Recompute from the source element, not from the old document height.
        const viewportTop = Math.min(anchor.top, innerHeight - 80);
        targetY = scrollY + node.getBoundingClientRect().top - viewportTop;
        if (!focused && node.matches("a, button, [tabindex]")) {
          node.focus({ preventScroll: true });
          focused = true;
        }
        break;
      }
      const top = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - innerHeight));
      if (Math.abs(scrollY - top) > .5) window.scrollTo({ top, behavior: "instant" });
      // Follow card transitions, font and image reflow; user input always cancels this.
      if (performance.now() - started < 2200) frame = requestAnimationFrame(restore);
      else stop();
    };
    // Let React reopen any source card, including nested parent cards, first.
    frame = requestAnimationFrame(() => { frame = requestAnimationFrame(restore); });
  };

  return <NavigationContext.Provider value={{ remember, reset, cancel }}>
    {children}
    {count > 0 && <button className="archive-jump-return" type="button" onClick={returnToReading} aria-label="返回跳转前的位置" title="返回跳转前的位置">
      <ArrowLeft size={18} aria-hidden="true" /><span>返回</span>
    </button>}
  </NavigationContext.Provider>;
}

export function useJumpReturn() { return useContext(NavigationContext); }
