
"use client";

import { useState } from "react";
import { Shield, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { minionSections } from "./MinionsData";
import "./minions.css";

const items = minionSections.flatMap(section => section.items);
const allIds = items.map(item => "entry-" + item.id);
const config: ArchiveRecordConfig = {
  id: "minions", assetDir: "minions", autoLink: false, powers: [],
  sections: [{ id: "minion-records", title: "随从", items }],
};
const baseCount = minionSections.filter(section => section.baseGame).reduce((n, section) => n + section.items.length, 0);

const baseSections = minionSections.filter(section => section.baseGame);
const modSections = minionSections.filter(section => !section.baseGame);
const modNewCount = modSections.flatMap(section => section.items).filter(item => !item.baseGame).length;
const modSharedCount = modSections.flatMap(section => section.items).filter(item => item.baseGame).length;
const navGroups = [
  { name: "游戏本体", entries: baseSections.map(section => ({ href: "#" + section.id, label: section.title.replace(/^游戏本体 · /, "") })) },
  ...modSections.map(section => ({ name: section.title, entries: section.items.map(item => ({ href: "#entry-" + item.id, label: item.name })) })),
];
const collections = [
  { id: "base-minions", name: "游戏本体", sections: minionSections.filter(section => section.baseGame) },
  { id: "mod-minions", name: "Mod", sections: minionSections.filter(section => !section.baseGame) },
];

export default function MinionsArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);
  return <main className={"site-shell base-modifiers-theme minions-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><Shield size={17} /></span><span><b>随从资料库</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label="随从导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>游戏本体与 Mod 随从</h1>
        <p>本体 {baseCount} 种，Mod 新增 {modNewCount} 种，另列 {modSharedCount} 项本体随从的 Mod 获取途径。收录不限定神祇的随从。</p>
        <p>数值依次为 HP、Attack、Defence、Command；HP 为生命上限，Command 为占用量。普通招募需要足够的 Command 容量；超过槽位或剩余容量时需更换现有随从，特殊规则在各条目中说明。</p>
      </header>
      {collections.map(collection => <div id={collection.id} className="minion-collection" key={collection.id}>
        {collection.sections.map(section => <section id={section.id} className="section records-section" key={section.id}>
          <div className="plain-heading"><p className="section-index">{String(minionSections.indexOf(section) + 1).padStart(2, "0")} / {section.baseGame ? "游戏本体" : "随从"} · {section.items.length} 项</p><h2>{section.title.replace(/^游戏本体 · /, "")}</h2></div>
          {section.intro && <p className="minion-group-intro"><RichText config={config} text={section.intro} /></p>}
          <DetailGrid config={config} items={section.items} openEntries={openEntries} onToggle={toggle} />
        </section>)}
      </div>)}
      <footer className="archive-footer"><button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button></footer>
    </div>
  </main>;
}
