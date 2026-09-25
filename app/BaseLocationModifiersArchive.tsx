"use client";

import { useState } from "react";
import { BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { DetailGrid, ExpandableRow, RichText } from "./BaseGodArchive";
import { modifierGroups } from "./BaseLocationModifiersData";
import { config, developmentAliases, developmentArticles, developmentCardIds, remainingModifierGroups } from "./DevelopmentModifiers";
import "./location-modifiers.css";

const entries = config.sections.flatMap(section => section.items);
const allIds = [...new Set([...entries.map(item => "entry-" + item.id), ...developmentCardIds])];
const navGroups = [
  { name: "发展型修正", entries: developmentArticles.map(article => ({
    href: "#" + article.id,
    label: article.entry.name + (article.source.baseGame ? "" : " · " + article.source.name),
  })) },
  ...remainingModifierGroups.map(group => ({
    name: group.name,
    entries: group.sections.map(section => ({ href: "#" + section.id, label: section.title })),
  })),
];

export default function BaseLocationModifiersArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal, developmentAliases);

  return <main className={"site-shell base-modifiers-theme modifier-catalogue" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><BookOpen size={17} /></span><span><b>地点修正</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label="地点修正分类导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>地点修正</h1>
        <p>本体 {modifierGroups[0].sections.reduce((count, section) => count + section.items.length, 0)} 项，Mod {entries.filter(item => item.id?.startsWith("mod-")).length} 项。发展型修正列于最前，其余按来源与适用地点分类；同一修正只收录一次。</p>
        <p>不收录神祇专属修正；本体条目仅介绍本体通用效果，Mod 条目标明来源。</p>
      </header>
      <span id="location-modifiers" className="modifier-legacy-anchor" />
      <div id="development-modifiers" className="modifier-source modifier-development">
        <header className="modifier-source-heading plain-heading">
          <p className="section-index">01 / 本体 9 项 · Mod 5 项</p>
          <h2>发展型修正</h2>
          <p>在 300% 阈值触发危机、转化或完成建设的修正。每项依次分为介绍和来源、效果、变化方式、300%后效果；Madness 的六种长期结果另列。</p>
        </header>
        {developmentArticles.map(article => {
          // Auxiliary cards belong to the same modifier; do not auto-link their parent back to itself.
          const articleConfig = { ...config, sections: config.sections.map(section => ({
            ...section, items: section.items.filter(item => item.id !== article.entry.id),
          })) };
          return <section id={article.id} className="section records-section modifier-location-group modifier-development-article" key={article.id}>
            <div className="plain-heading">
              <p className="section-index">{article.source.baseGame ? "游戏本体" : "Mod · " + article.source.name}</p>
              <h2>{article.entry.name}</h2>
            </div>
            <div className="expandable-table development-cards">
              {article.cards.map(card => {
                const id = "entry-" + card.id;
                const render = (text: string) => <RichText config={articleConfig} text={text} exclude={article.entry.name} />;
                return <ExpandableRow key={id} config={articleConfig} entryId={id} name={card.name} image={card.image} baseGame={card.baseGame} open={openEntries.has(id)} onToggle={toggle}>
                  {card.meta && <div className="expanded-meta">{card.meta}</div>}
                  {card.modifierLocations && <div className="modifier-applicability"><b>适用地点</b>{render(card.modifierLocations)}</div>}
                  {card.initialValue && !/未找到/.test(card.initialValue) && <div className="detail-stat-line"><b>初始值：</b>{render(card.initialValue)}</div>}
                  {card.text && <p>{render(card.text)}</p>}
                  {card.modifierSource && <div className="expanded-section modifier-source-text"><h4>来源</h4><p>{render(card.modifierSource)}</p></div>}
                  {card.modifierChange?.natural && <p>{render(card.modifierChange.natural)}</p>}
                  {card.modifierChange?.external && <p>{render(card.modifierChange.external)}</p>}
                  {card.eventOptions?.length ? <div className="event-options"><h4>事件选项</h4><ol>{card.eventOptions.map((option, index) => <li key={index}>
                    <h5>{option.name}</h5>
                    {option.condition && <p className="option-condition"><b>条件：</b>{render(option.condition)}</p>}
                    <p>{render(option.text)}</p>
                  </li>)}</ol></div> : null}
                </ExpandableRow>;
              })}
            </div>
            {article.related.length > 0 && <div className="modifier-development-results">
              <h3>六种长期效果</h3>
              <DetailGrid config={config} items={article.related} openEntries={openEntries} onToggle={toggle} />
            </div>}
          </section>;
        })}
      </div>
      {remainingModifierGroups.map((group, index) => <div id={group.id} className="modifier-source" key={group.id}>
        <header className="modifier-source-heading plain-heading">
          <p className="section-index">{String(index + 2).padStart(2, "0")} / {group.baseGame ? "游戏本体" : "Mod"} · {group.sections.reduce((count, section) => count + section.items.length, 0)} 项</p>
          <h2>{group.name}</h2>
          {group.description && <p><RichText config={config} text={group.description} /></p>}
        </header>
        {group.sections.map(section => <section id={section.id} className="section records-section modifier-location-group" key={section.id}>
          <div className="plain-heading"><p className="section-index">{group.name} · {section.items.length} 项</p><h2>{section.title}</h2></div>
          <DetailGrid config={config} items={section.items} openEntries={openEntries} onToggle={toggle} />
        </section>)}
      </div>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
