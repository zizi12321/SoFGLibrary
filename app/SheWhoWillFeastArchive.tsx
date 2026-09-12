"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, CircleDot, Eye, PanelLeftClose, PanelLeftOpen, Shield } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type GodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "kishi" | "living-void" | "chandalor";
type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
type DetailItem = { name: string; text: string; image?: string; seal?: number; meta?: string; statLine?: string; preferenceText?: string; id?: string; baseGame?: boolean };

const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Cloud Senses" },
  { seal: 1, turn: 12, agents: 2, reward: "Eyes in the Shadows" },
  { seal: 2, turn: 24, agents: 3, reward: "Fleeting Servant" },
  { seal: 3, turn: 44, agents: 3, reward: "Dangers in the Dark、Serpent's Coils" },
  { seal: 4, turn: 72, agents: 4, reward: "Split Shadow" },
  { seal: 5, turn: 108, agents: 4, reward: "" },
  { seal: 6, turn: 152, agents: 4, reward: "" },
  { seal: 7, turn: 204, agents: 5, reward: "" },
  { seal: 8, turn: 264, agents: 5, reward: "" },
  { seal: 9, turn: 375, agents: 6, reward: "苏醒" },
];

const powers = [
  { seal: 0, name: "Cloud Senses", cost: 1, icon: "power-shadow.png", effect: "让一名正在执行挑战的单位失去最多 10 点当前进度；进度最低降至 0。它适合在英雄即将完成关键任务时争取额外回合。", limit: "只能选择正在执行挑战的单位，不能选择 Chosen One。" },
  { seal: 1, name: "Eyes in the Shadows", cost: 2, icon: "power-shadow.png", effect: "直接渗透目标聚居地内一个尚未渗透、且允许被渗透的设施。若有多个合法设施，代码会选取列表中的最后一个。", limit: "聚居地当前必须没有任何渗透进度，也不能已经完全渗透；当地至少要有一个可以渗透的设施。" },
  { seal: 2, name: "Fleeting Servant", cost: 3, icon: "power-fleeting-servant.png", effect: "在任意地点制造 40 点 Fleeting Servant。修正本身不会伤害当地，但英雄会把它当作具有 30 Profile、50 Menace 的威胁，前来执行 Purge Fleeting Servant，因而浪费行动时间。", limit: "可以选择任意地点；同一地点没有防重复限制，因此可以叠加多个同名修正。" },
  { seal: 3, name: "Dangers in the Dark", cost: 2, icon: "power-dangers-in-dark.png", effect: "令目标地点全部英雄任务与中立挑战各自永久增加 7 Danger。危险分别记录在每个挑战上；邪恶阵营使用的挑战不会被增强。", limit: "目标地点的 Shadow 必须超过 50%，并且至少存在一个挑战。" },
  { seal: 3, name: "Serpent's Coils", cost: 4, icon: "power-serpents-coils.png", effect: "影响以目标城市为起点或终点的贸易路线。接下来 25 回合，每条受影响路线在每回合给沿途所有地点增加 1% Shadow。施放时会刷新该城市关联的全部路线。", limit: "目标必须是 100% 渗透的人类城市，并且至少连接一条当前未受 Serpent's Coils 影响的贸易路线。" },
  { seal: 4, name: "Split Shadow", cost: 5, icon: "shadow-agent.png", effect: "从英雄身上撕下影子，生成一个可控制的 Shadow Agent。它继承本体的等级、四项基础属性以及现有特质带来的属性修正。影子远离本体且不在高 Shadow 地区时，每回合损失 1 HP。", limit: "只能选择非 Chosen One 的英雄；全图同时只能存在一个仍然存活的 Shadow Agent。" },
];

const initialAbilities: [string, string][] = [
  ["Conduit", "Supplicant 每次完成 Enshadow 挑战都会恢复 2 点神力，但不能超过当前神力上限。"],
  ["The Dying Light", "Supplicant 停留在人类聚居地时，每回合自动增加当地 1% Shadow，最高到 100%。"],
  ["Martyr for the Dark", "Supplicant 在人类聚居地死亡时，会立即把当地所有设施全部渗透。"],
];

const mechanics: DetailItem[] = [
  { name: "Shadow", id: "mechanic-shadow", baseGame: true, text: "游戏本体的核心胜利资源。聚居地的 Shadow 会缓慢向相邻地点传播，并计入征服与胜利进度。She Who Will Feast 能用 The Dying Light 和 Serpent's Coils 扩散它；超过 50% 后可维持 Shadow Agent，并允许 Dangers in the Dark 施放。" },
  { name: "Infiltration", id: "mechanic-infiltration", baseGame: true, text: "游戏本体的地点渗透系统。渗透设施可以为 Agent 打开行动入口，并让 Shadow 更容易流入。Eyes in the Shadows 可直接拿下一个设施；Serpent's Coils 则要求整座城市达到 100% 渗透。" },
  { name: "Trade Route", id: "mechanic-trade-route", baseGame: true, text: "游戏本体在城市之间建立的贸易路线。Serpent's Coils 从一座完全渗透的端点城市影响其关联路线，并沿路线覆盖的每个地点逐回合传播 Shadow。" },
  { name: "Challenge Danger", id: "mechanic-danger", baseGame: true, text: "挑战的危险值决定执行者在任务过程中遭遇负面结果的风险。Dangers in the Dark 会给一个地点内每项英雄或中立挑战分别增加 7 点附加 Danger，并且不会自然衰减。" },
];

const locationModifiers: DetailItem[] = [
  { seal: 2, name: "Fleeting Servant", id: "fleeting-servant-modifier", image: "power-fleeting-servant.png", text: "由同名神力创建，初始强度 40，每回合自然下降 1。它本身没有经济、安全或人口效果，也不会因城市化为废墟而消失；主要作用是以 30 Profile 与 50 Menace 吸引英雄前来净化。" },
];

const specialUnits: DetailItem[] = [
  { seal: 4, name: "Shadow Agent", image: "shadow-agent.png", text: "由 Split Shadow 创建的可控制 Agent，继承目标英雄的名字、家族、等级、四项基础属性及特质属性修正。它与本体位于同一地点或相邻地点时安全；位于 Shadow 超过 50% 的地点也安全，否则每回合损失 1 HP。即使本体死亡，影子仍会存在。它不占用 Enthrallment，但会计入可控制单位与 Agent 上限。" },
];

const armies: DetailItem[] = [
  { seal: 9, name: "She Who Will Feast", image: "army.png", text: "第 9 封印破除后，在 Elder Tomb 出生的可控制游荡军队，初始 200 HP，不会自行解散。标准难度下每回合最大 HP 与当前 HP 各增加 1；若受伤，同一回合还会再恢复 1 HP。她死亡会立即导致玩家失败。自动模式下会攻击敌军、焚毁交战中的人类聚居地，生命低于 30% 时返回出生地休整。" },
];

const heroTasks: DetailItem[] = [
  { name: "Purge Fleeting Servant", image: "power-fleeting-servant.png", meta: "Intrigue", statLine: "复杂度 5　暴露度 30　威胁度 50　经验 12（标准难度）", preferenceText: "任务带有 Shadow 负面标签：厌恶或极端厌恶 Shadow 的英雄更愿意处理它；喜欢 Shadow 的英雄意愿降低。除此之外没有专属固定意愿加值。", text: "英雄清除所在地的一项 Fleeting Servant 修正。完成任务本身只移除诱饵，不会产生额外地点收益。" },
];

const detailCollections = [mechanics, locationModifiers, specialUnits, armies, heroTasks];
const allDetails = detailCollections.flat();
const referenceNames = Array.from(new Set([...powers.map((item) => item.name), ...initialAbilities.map(([name]) => name), ...allDetails.map((item) => item.name)])).sort((a, b) => b.length - a.length);
function anchorFor(name: string) { return `entry-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`; }
function refFor(name: string) {
  const power = powers.find((item) => item.name === name);
  if (power) return { name, image: power.icon, meta: `封印 ${power.seal} · 消耗 ${power.cost}`, text: power.effect, href: `#${anchorFor(name)}` };
  const ability = initialAbilities.find(([abilityName]) => abilityName === name);
  if (ability) return { name, image: "supplicant.png", meta: "初始 Agent 能力", text: ability[1], href: `#${anchorFor(name)}` };
  const detail = allDetails.find((item) => item.name === name);
  if (!detail) return null;
  return { name, image: detail.image, meta: detail.meta ?? (detail.seal !== undefined ? `封印 ${detail.seal}` : "本体机制"), text: detail.text, href: `#${detail.id ? `entry-${detail.id}` : anchorFor(name)}` };
}
function CrossReference({ name, href, meta, text, image }: { name: string; href?: string; meta?: string; text?: string; image?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reference = refFor(name);
  if (!reference && !text) return <>{name}</>;
  const resolved = { name, href: href ?? reference?.href ?? "#", meta: meta ?? reference?.meta ?? "机制说明", text: text ?? reference?.text ?? "", image: image ?? reference?.image };
  const imageSrc = resolved.image ? `/she-who-will-feast/${resolved.image}` : undefined;
  return <><a className="cross-reference" href={resolved.href} onClick={(event) => { if (window.matchMedia("(hover: none), (pointer: coarse)").matches) { event.preventDefault(); setMobileOpen(true); } }}><span className="cross-label">{name}</span><span className="cross-popover" role="tooltip">{imageSrc && <span className="cross-image"><Image src={imageSrc} alt="" fill sizes="72px" /></span>}<span className="cross-copy"><small>{resolved.meta}</small><b>{resolved.name}</b><span>{resolved.text}</span><em>点击跳转至详情</em></span></span></a><MobileReferenceDialog open={mobileOpen} onClose={() => setMobileOpen(false)} name={resolved.name} meta={resolved.meta} text={resolved.text} href={resolved.href} imageSrc={imageSrc} /></>;
}
function RichText({ text, exclude }: { text: string; exclude?: string }) {
  const names = referenceNames.filter((name) => name !== exclude);
  const escaped = names.map((name) => name.replace(/[-/^$*+?.()|[\]{}]/g, "\\$&"));
  const parts = escaped.length ? text.split(new RegExp(`(${escaped.join("|")})`, "g")) : [text];
  return <>{parts.map((part, index) => names.includes(part) ? <CrossReference name={part} key={`${part}-${index}`} /> : part)}</>;
}
function ExpandableRow({ entryId, name, seal, cost, image, baseGame = false, open, onToggle, children }: { entryId: string; name: string; seal?: number; cost?: number; image?: string; baseGame?: boolean; open: boolean; onToggle: (id: string) => void; children: ReactNode }) {
  return <article className={`expandable-row ${baseGame ? "base-game-entry" : ""} ${open ? "is-open" : ""}`} id={entryId}><button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>{seal !== undefined && <span className="summary-seal">{seal}</span>}{image && <span className="summary-image"><Image src={`/she-who-will-feast/${image}`} alt="" fill sizes="56px" /></span>}<span className="summary-name">{name}</span><ChevronDown className="summary-chevron" size={16} />{cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}</button><div className="expandable-content"><div className="expandable-inner">{children}</div></div></article>;
}
const relations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Fleeting Servant": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant", meta: "封印 2 · 神力" }], effects: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正" }, { name: "Purge Fleeting Servant", href: "#entry-purge-fleeting-servant", meta: "英雄任务" }] },
  "Shadow Agent": { sources: [{ name: "Split Shadow", href: "#entry-split-shadow" }] },
  "She Who Will Feast": { sources: [{ name: "第 9 封印苏醒", href: "#seals", meta: "第 375 回合" }] },
  "Purge Fleeting Servant": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正" }] },
};
const powerEffects: Record<string, Relation[]> = {
  "Eyes in the Shadows": [{ name: "Infiltration", href: "#entry-mechanic-infiltration" }],
  "Fleeting Servant": [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正" }, { name: "Purge Fleeting Servant", href: "#entry-purge-fleeting-servant", meta: "英雄任务" }],
  "Dangers in the Dark": [{ name: "Challenge Danger", href: "#entry-mechanic-danger" }],
  "Serpent's Coils": [{ name: "Trade Route", href: "#entry-mechanic-trade-route" }, { name: "Shadow", href: "#entry-mechanic-shadow" }],
  "Split Shadow": [{ name: "Shadow Agent", href: "#entry-shadow-agent" }],
};
function RelationGroup({ title, items }: { title: string; items?: Relation[] }) { if (!items?.length) return null; return <div className="relation-group"><b>{title}</b><div>{items.map((item) => <CrossReference key={`${title}-${item.href}`} {...item} />)}</div></div>; }
function DetailGrid({ items, openEntries, onToggle, media = true }: { items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void; media?: boolean }) {
  return <div className="expandable-table">{items.map((item) => { const entryId = item.id ? `entry-${item.id}` : anchorFor(item.name); const rel = relations[item.name]; return <ExpandableRow key={entryId} entryId={entryId} name={item.name} seal={item.seal} image={media ? item.image : undefined} baseGame={item.baseGame} open={openEntries.has(entryId)} onToggle={onToggle}>{item.meta && <div className="expanded-meta">{item.meta}</div>}{item.statLine && <div className="task-stat-line">{item.statLine}</div>}<p><RichText text={item.text} exclude={item.name} /></p>{item.preferenceText && <div className="preference-note"><b>执行倾向</b><p><RichText text={item.preferenceText} exclude={item.name} /></p></div>}<RelationGroup title="来源" items={rel?.sources} /><RelationGroup title="造成的效果" items={rel?.effects} /></ExpandableRow>; })}</div>;
}
function RecordSection({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) { return <section id={id} className="section records-section"><div className="plain-heading"><p className="section-index">{index} / {title}</p><h2>{title}</h2></div>{children}</section>; }

export default function SheWhoWillFeastArchive({ onGodChange }: { onGodChange: (god: GodChoice) => void }) {
  const root = useRef<HTMLElement>(null);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const allExpandableIds = [...powers.map((item) => anchorFor(item.name)), anchorFor("Supplicant"), ...allDetails.map((item) => item.id ? `entry-${item.id}` : anchorFor(item.name))];
  const toggleEntry = (id: string) => setOpenEntries((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  useGSAP(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.from(".hero-line", { yPercent: 115, duration: 1.05, ease: "power4.out" }); gsap.from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.35, ease: "power3.out" }); gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => gsap.fromTo(element, { scale: 1.08, opacity: .2 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 92%", end: "bottom 58%", scrub: .8 } })); }, { scope: root });
  const nav = [["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印与 Agent 上限"], ["03", "powers", "神力"], ["04", "agent", "初始 Agent 能力"], ["05", "mechanics", "相关本体机制"], ["06", "location-modifiers", "地点修正"], ["07", "special-units", "特殊人物与自主单位"], ["08", "armies", "军队"], ["09", "hero-tasks", "英雄任务"]];
  return <main ref={root} className={`site-shell feast-theme ${sidebarHidden ? "sidebar-hidden" : ""}`} onClickCapture={(event) => { const anchor = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (anchor) setOpenEntries((current) => new Set(current).add(anchor.getAttribute("href")!.slice(1))); }}>
    <aside className="sidebar"><div className="sidebar-head"><div className="sidebar-brand god-switcher"><span className="brand-mark"><CircleDot size={17} /></span><label><select value="she-who-will-feast" onChange={(event) => onGodChange(event.target.value as GodChoice)} aria-label="切换神祇"><option value="she-who-will-feast">SHE WHO WILL FEAST</option><option value="iastur">IASTUR</option><option value="vinerva">VINERVA</option><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option><option value="chandalor">CHANDALOR</option></select><small>神祇资料库</small></label></div><button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden((value) => !value)} aria-label={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"} title={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><button className="sidebar-index-link" type="button" onClick={() => onGodChange("index")}>← 返回神祇索引</button><nav className="sidebar-nav" aria-label="页面目录">{nav.map(([index, id, label]) => <a href={`#${id}`} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allExpandableIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside>
    <div className="content-shell">
      <header id="top" className="hero"><div className="hero-backdrop"><Image src="/she-who-will-feast/background.png" alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 01</span><span>Base Game Elder God</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">She Who Will Feast</span></span></h1></div><div className="hero-facts"><div><b>375</b><span>回合苏醒</span></div><div><b>6</b><span>最终 Agent 上限</span></div><div><b>75%</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src="/she-who-will-feast/portrait.png" alt="She Who Will Feast 神祇立绘" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="portrait-caption"><span>渗透与 Shadow 扩散</span><span>常规回合解锁</span></div></div></header>
      <section id="loop" className="section overview-section"><div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div><div className="overview-layout"><article className="overview-main"><h3>核心玩法</h3><ol className="core-sequence"><li><span>01</span><p>让 Supplicant 通过 <CrossReference name="The Dying Light" /> 与常规 Enshadow 挑战建立 <CrossReference name="Shadow" />；完成 Enshadow 还能借 <CrossReference name="Conduit" /> 回收神力。</p></li><li><span>02</span><p>用 <CrossReference name="Eyes in the Shadows" /> 抢先取得关键设施的 <CrossReference name="Infiltration" />，逐步把核心城市完全渗透。</p></li><li><span>03</span><p>在完全渗透的贸易城市施放 <CrossReference name="Serpent's Coils" />，让 <CrossReference name="Shadow" /> 沿 <CrossReference name="Trade Route" /> 跨地区传播。</p></li><li><span>04</span><p>在高 Shadow 区域使用 <CrossReference name="Dangers in the Dark" /> 提高英雄任务风险，并用 <CrossReference name="Fleeting Servant" /> 把英雄引到无关地点。</p></li><li><span>05</span><p>用 <CrossReference name="Cloud Senses" /> 打退关键任务进度；用 <CrossReference name="Split Shadow" /> 从英雄身上制造额外可控 Agent。</p></li><li><span>06</span><p>第 375 回合苏醒后，直接控制军队形态的 <CrossReference name="She Who Will Feast" /> 摧毁已经被战争、瘟疫或饥荒削弱的国家。</p></li></ol><div className="overview-subsection"><h3>苏醒与出生灾变</h3><p>第 9 封印破除时，她会从 Elder Tomb 所在地出生。墓穴周围约 4 至 5 格范围发生火山灾变：范围内聚居地直接化为废墟，单位损失一半最大生命，外围地块往往隆起为山地，并获得按距离递减的火山破坏。她以 200 HP 起步并持续成长，但一旦被杀，游戏立即失败。</p></div><div className="overview-subsection"><h3>玩法重点</h3><p>她没有需要额外维护的专属资源，强项是把通用的 Shadow 与渗透路线做得更快、更安全。前期优先控制交通枢纽；中期一边用诱饵拖住英雄，一边让贸易路线传播 Shadow；苏醒后避免立刻撞上完整的人类主力，先吞并弱国并依靠每回合成长扩大优势。</p></div></article><aside className="basic-facts"><h3>基础信息</h3><dl><div><dt>封印解锁方式</dt><dd>常规回合解锁</dd></div><div><dt>最大回合数</dt><dd>常规 500 回合</dd></div><div><dt>苏醒</dt><dd>第 375 回合，世界恐慌 75%</dd></div><div><dt>初始 Agent 上限</dt><dd>2</dd></div><div><dt>最终 Agent 上限</dt><dd>6</dd></div></dl><div className="special-victory"><h3>特殊胜利</h3><p>无</p></div></aside></div></section>
      <section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印进度</p><h2>封印、解锁回合与 Agent 上限</h2></div></div><div className="seal-table"><div className="seal-head"><span>封印</span><span>回合</span><span>Agent</span><span>每回合神力</span><span>本阶段内容</span></div>{seals.map((item) => <div className="seal-row" key={item.seal}><span className="seal-number">{item.seal}</span><span className="turn">{item.turn}</span><span className="agent-count">{item.agents}</span><span className="power-gain">{(0.035 * (item.seal + 1)).toFixed(3)}</span><span className="seal-reward">{item.reward ? item.reward.split("、").map((reward, index) => <span className="seal-reference-item" key={reward}>{reward === "苏醒" ? reward : <CrossReference name={reward} />}{index < item.reward.split("、").length - 1 && <i>、</i>}</span>) : null}</span></div>)}</div><div className="seal-formula"><b>神力恢复公式</b><code>0.035 ×（已破封印数 + 1）× 难度缩放</code><span>表中按难度缩放为 1 计算。破封后的神力上限从 1 逐步提高到 10。</span></div></section>
      <section id="powers" className="section powers-section records-section"><div className="powers-intro plain-heading"><p className="section-index">03 / 神力</p><h2>神力</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{powers.map((power) => { const id = anchorFor(power.name); return <ExpandableRow key={id} entryId={id} name={power.name} seal={power.seal} cost={power.cost} image={power.icon} open={openEntries.has(id)} onToggle={toggleEntry}><div className="expanded-section"><h4>具体效果</h4><p><RichText text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText text={power.limit} exclude={power.name} /></p></div><RelationGroup title="造成的效果" items={powerEffects[power.name]} /></ExpandableRow>; })}</div></section>
      <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">04 / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow entryId={anchorFor("Supplicant")} name="Supplicant" image="supplicant.png" open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggleEntry}><p className="agent-stat-line"><b>基础属性：</b>Might 2　Command 3　Intrigue 4　Lore 2　初始技能点 1　初始经验距离升级差 1 点</p><div className="ability-list">{initialAbilities.map(([name, text], index) => <div className="ability" id={anchorFor(name)} key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{name}</h4><p><RichText text={text} exclude={name} /></p></div></div>)}</div></ExpandableRow></div></section>
      <RecordSection id="mechanics" index="05" title="相关本体机制"><DetailGrid items={mechanics} media={false} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="location-modifiers" index="06" title="地点修正"><DetailGrid items={locationModifiers} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="special-units" index="07" title="特殊人物与自主单位"><DetailGrid items={specialUnits} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="armies" index="08" title="军队"><DetailGrid items={armies} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="hero-tasks" index="09" title="英雄任务"><DetailGrid items={heroTasks} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <footer><div><CircleDot size={20} />She Who Will Feast</div><p>基于 Shadows of Forbidden Gods 本体程序集与原始美术资源整理。</p><span>Shadows of Forbidden Gods · God Archive</span></footer>
    </div>
  </main>;
}