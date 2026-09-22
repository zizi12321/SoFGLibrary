"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { agents } from "./AgentsData";
import "./agents.css";

const groups = [...new Set(agents.map(agent => agent.group))];
const entryIds = agents.flatMap(agent => [...agent.skills, ...agent.challenges].map(item => "entry-" + item.id));
const config: ArchiveRecordConfig = {
  id: "agents",
  assetDir: "agents",
  autoLink: false,
  powers: [],
  sections: [
    { id: "agent-records", title: "Agent", items: agents.map(agent => ({
      id: "agent-" + agent.id, name: agent.name, image: agent.image,
      stats: agent.stats, text: agent.recruitment + (agent.note ? "\n" + agent.note : ""),
    })) },
    { id: "agent-skills", title: "技能", items: agents.flatMap(agent => agent.skills) },
    { id: "agent-challenges", title: "挑战", items: agents.flatMap(agent => agent.challenges) },
  ],
};

export default function AgentsArchive({ onReturn }: { onReturn: () => void }) {
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
    <main className={"site-shell base-modifiers-theme agents-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
      <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
      <aside className="sidebar" onClick={onSidebarClick}>
        <div className="sidebar-head">
          <div className="sidebar-brand"><span className="brand-mark"><Users size={17} /></span><span><b>Agent 资料库</b><small>其他信息</small></span></div>
          <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button>
        <div className="sidebar-bulk">
          <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
          <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
        </div>
        <nav className="sidebar-nav agent-catalog-nav" aria-label="Agent 导航">
          {groups.map(group => <div className="agent-nav-group" key={group}>
            <p>{group}</p>
            {agents.filter(agent => agent.group === group).map(agent => <a key={agent.id} href={"#entry-agent-" + agent.id}><b>{agent.name}</b></a>)}
          </div>)}
        </nav>
      </aside>
      <div className="content-shell">
        <header id="top" className="modifier-library-header">
          <h1>Agent</h1>
          <p>游戏本体与 Mod 中不限定神祇的玩家可控 Agent；不收录 Supplicant。每栏列出基础属性、技能、招募条件与专有挑战。</p>
          <p>本体常规招募需要空闲 Agent 名额和 1 招募点。属性为招募完成后的基础值；继承型角色按转化前状态记录。Mod 采用 2.0 版本，没有版本文件夹时采用根目录。</p>
        </header>
        {agents.map((agent, index) => <section id={"entry-agent-" + agent.id} className="section agent-record" key={agent.id}>
          <div className="agent-record-heading">
            {agent.image && <Image className="agent-catalog-portrait" src={agent.image} alt={agent.name} width={112} height={112} />}
            <div><p className="section-index">{String(index + 1).padStart(2, "0")} / {agent.group}</p><h2>{agent.name}</h2></div>
          </div>
          <div className="agent-basics">
            <div><h3>基础属性</h3><p>{agent.stats}</p></div>
            <div><h3>招募条件</h3><p><RichText config={config} text={agent.recruitment} /></p></div>
            {agent.note && <p className="agent-note"><RichText config={config} text={agent.note} /></p>}
          </div>
          <div className="agent-subsection"><h3>技能</h3>
            {agent.skills.length ? <DetailGrid config={config} items={agent.skills} openEntries={openEntries} onToggle={toggle} /> : <p className="agent-empty">无独有的固定能力或可选特质。</p>}
          </div>
          <div className="agent-subsection"><h3>专有挑战</h3>
            {agent.challenges.length ? <DetailGrid config={config} items={agent.challenges} openEntries={openEntries} onToggle={toggle} /> : <p className="agent-empty">无。</p>}
          </div>
        </section>)}
        <footer className="archive-footer"><button className="sidebar-index-link" type="button" onClick={onReturn}>← 返回索引页</button></footer>
      </div>
    </main>
  );
}
