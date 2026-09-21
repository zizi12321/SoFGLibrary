"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";

const mobileQuery = "(max-width: 760px)";

export function useArchiveSidebar() {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const syncViewport = () => {
      setMobile(media.matches);
      setSidebarHidden(media.matches);
    };
    syncViewport();
    media.addEventListener("change", syncViewport);
    return () => media.removeEventListener("change", syncViewport);
  }, []);

  const closeMobileSidebar = useCallback(() => {
    if (window.matchMedia(mobileQuery).matches) setSidebarHidden(true);
  }, []);

  useEffect(() => {
    if (!mobile || sidebarHidden) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSidebarHidden(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobile, sidebarHidden]);

  const onSidebarClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) closeMobileSidebar();
  };

  return { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick };
}

export function SidebarBackdrop({ hidden, onClose }: { hidden: boolean; onClose: () => void }) {
  return hidden ? null : <button className="mobile-sidebar-backdrop" type="button" tabIndex={-1} onClick={onClose} aria-label="关闭侧边栏" />;
}
