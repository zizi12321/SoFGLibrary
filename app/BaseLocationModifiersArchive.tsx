"use client";

import { useEffect, useState } from "react";
import { BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { DetailGrid } from "./BaseGodArchive";
import { config } from "./BaseLocationModifiersData";

const entries = config.sections[0].items;
const entryId = (name: string) => "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const allIds = entries.map(item => entryId(item.name));

export default function BaseLocationModifiersArchive({ onReturn }: { onReturn: () => void }) {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  useEffect(() => {
    const openHash = () => {
      const id = window.location.hash.slice(1);
      if (allIds.includes(id)) setOpenEntries(current => new Set(current).add(id));
    };
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, []);
  return (
    <main className={"site-shell base-modifiers-theme" + (sidebarHidden ? " sidebar-hidden" : "")}
      onClickCapture={event => {
        const link = (event.target as HTMLElement).closest('a[href^="#entry-"]');
        if (link) reveal(link.getAttribute("href")!.slice(1));
      }}>
      <aside className="sidebar">
        <div className="sidebar-head">
          <div className="sidebar-brand"><span className="brand-mark"><BookOpen size={17} /></span><span><b>游戏本体地点修正</b><small>其他信息</small></span></div>
          <button className="sidebar-toggle" type="button" aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button>
        <nav className="sidebar-nav">{entries.map((item, index) => <a href={"#" + entryId(item.name)} key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.name}</b></a>)}</nav>
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
