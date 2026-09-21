"use client";

import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { useArchiveNavigation } from "./useArchiveNavigation";

import { useState } from "react";
import { BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { DetailGrid } from "./BaseGodArchive";
import { config } from "./BaseLocationModifiersData";

const entries = config.sections[0].items;
const entryId = (name: string) => "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const allIds = entries.map(item => entryId(item.name));

export default function BaseLocationModifiersArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);
  return (
    <main className={"site-shell base-modifiers-theme" + (sidebarHidden ? " sidebar-hidden" : "")}
      onClick={onArchiveClick}>
      <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} /><aside className="sidebar" onClick={onSidebarClick}>
        <div className="sidebar-head">
          <div className="sidebar-brand"><span className="brand-mark"><BookOpen size={17} /></span><span><b>游戏本体地点修正</b><small>其他信息</small></span></div>
          <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button>
        <div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div>
      </aside>
      <div className="content-shell">
        <header id="top" className="modifier-library-header"><h1>游戏本体地点修正</h1><p>收录 {entries.length} 项通用地点修正及其通用效果。</p></header>
        <section id="location-modifiers" className="section records-section">
          <DetailGrid config={config} items={entries} openEntries={openEntries} onToggle={toggle} />
        </section>
        <footer className="archive-footer"><button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button></footer>
      </div>
    </main>
  );
}
