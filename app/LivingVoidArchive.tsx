"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, CircleDot, Eye, PanelLeftClose, PanelLeftOpen, Shield } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type GodChoice = "kishi" | "living-void";
type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
type DetailItem = { name: string; text: string; image?: string; images?: string[]; seal?: number; meta?: string; statLine?: string; preferenceText?: string; id?: string };

const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Warp Light" },
  { seal: 1, turn: 12, agents: 2, reward: "" },
  { seal: 2, turn: 24, agents: 3, reward: "Hollow Earth、Shattered Light" },
  { seal: 3, turn: 44, agents: 3, reward: "" },
  { seal: 4, turn: 72, agents: 4, reward: "Open Rift、Stare Deep" },
  { seal: 5, turn: 110, agents: 4, reward: "" },
  { seal: 6, turn: 150, agents: 5, reward: "Devour Warmth" },
  { seal: 7, turn: 200, agents: 5, reward: "" },
  { seal: 8, turn: 275, agents: 6, reward: "Seeds of Destruction" },
  { seal: 9, turn: 400, agents: 6, reward: "Vacuum Collapse、苏醒" },
];

const powers = [
  { seal: 0, name: "Warp Light", cost: 1, icon: "void_power_invis.png", effect: "让携带 Voidstone 的己方 Agent 在 15 回合内始终保持最低 Profile。重复施放会继续增加 15 回合持续时间。", limit: "只能选择携带至少一枚 Voidstone 的己方 Agent；石头全部离开物品栏时效果会提前结束。" },
  { seal: 2, name: "Hollow Earth", cost: 2, icon: "void_power_stonedevastation.png", effect: "使埋有 Hidden Voidstone 的人类聚居地增加 65% Devastation。高 Devastation 会进一步为当地 Hungry Rift 提供被动成长。", limit: "目标必须是人类聚居地，并且已经存在 Hidden Voidstone。" },
  { seal: 2, name: "Shattered Light", cost: 2, icon: "void_power_plantedshadow.png", effect: "销毁目标 Agent 物品栏中的全部 Voidstone，每枚为所在地增加 7.5% Shadow；聚居地渗透度会按比例放大效果，完全渗透时提高至每枚 15%。Shadow 最多到 100%。", limit: "目标必须是携带至少一枚 Voidstone 的己方 Agent，而且当前位于任意聚居地。" },
  { seal: 4, name: "Open Rift", cost: 3, icon: "void_power_makerift.png", effect: "移除当地 Hidden Voidstone，并建立一个初始强度 50% 的 Hungry Rift。之后可由 Agent 执行 Expand Rift，使其逐步成长为 World Rupture。", limit: "地点必须存在 Hidden Voidstone。" },
  { seal: 4, name: "Stare Deep", cost: 2, icon: "void_riftgiveslore.png", effect: "对己方 Agent 使用时获得 25 回合的 +1 Lore；对英雄使用时直接损失 5 Sanity。", limit: "目标必须与 Hungry Rift 位于同一地点。己方 Agent 不能已经拥有同名 Lore 加成；英雄没有这一重复限制。" },
  { seal: 6, name: "Devour Warmth", cost: 3, icon: "void_power_ruptureheat.png", effect: "令 World Rupture 在 35 回合内持续吸走本地与所有相邻地点的热量。每回合按各地当前温度的 4% 施加负面温度变化，因此温暖地区降温更快。重复施放会延长持续时间。", limit: "只能选择 World Rupture。" },
  { seal: 8, name: "Seeds of Destruction", cost: 5, icon: "void_power_seed.png", effect: "无需 Agent 携带或种下石头，直接在目标地点建立 Hidden Voidstone。", limit: "不能选择 Great Wound、World Rupture 或 Living Void；地点也不能已有 Hidden Voidstone 或 Hungry Rift。" },
  { seal: 9, name: "Vacuum Collapse", cost: 10, icon: "void_vacuumcollapse.png", effect: "以 Great Wound 和所有 World Rupture 为中心，把半径内地形永久转化为 Living Void。首次范围半径为 2，此后每次施放增加 2。聚居地会被摧毁，绝大多数非玩家单位会死亡；施放后神力先归零，再按 Great Wound 与 World Rupture 的总数返还，每处 1 点。", limit: "只能选择 Great Wound 或 World Rupture；实际效果会同时从世界上的所有此类入口扩散。需要先拥有 10 点神力才能施放。" },
];

const initialAbilities: [string, string][] = [
  ["Dimensional Insights", "每携带一枚 Voidstone，Supplicant 获得 +1 Lore。石头移出物品栏后加成随即消失。"],
  ["Entropic Presence", "位于人类聚居地时，每回合使当地增加 3% Devastation。"],
  ["Collapsing Body", "死亡时在符合条件的地点生成 Hungry Rift，初始强度为 100% + Agent 等级 × 20%。若地点已有 Hungry Rift 或 Hidden Voidstone，或本身是 Great Wound、World Rupture，则不会生成。"],
];

const traits: DetailItem[] = [
  { seal: 0, name: "Warped Light", text: "把人物的 Profile 变化压到极低，使其实际保持在最低 Profile。基础持续 15 回合，可由 Warp Light 叠加时长；一旦不再携带 Voidstone 便立即移除。" },
  { seal: 4, name: "Stared into the Void", text: "由 Stare Deep 赋予己方 Agent，提供 +1 Lore，持续 25 回合；效果存在时不能再次对该 Agent 施放。" },
];

const locationModifiers: DetailItem[] = [
  { name: "Hidden Voidstone", image: "void_stone.png", text: "表示一枚 Voidstone 已被埋入地点。它不会自然变化，也会在城市化为废墟后保留；是 Hollow Earth 与 Open Rift 的目标条件。" },
  { seal: 4, name: "Hungry Rift", image: "void_riftmodifier.png", text: "初始通常为 50%。每回合从当地 Devastation 获得少量成长，并会迅速吞噬 Geomantic Locus；达到 300% 时摧毁当地人类聚居地、清除全部地点修正并转化为 World Rupture。英雄可用 Seal Rift 每次削减 60%。" },
  { seal: 6, name: "Draining Warmth", image: "void_power_ruptureheat.png", text: "每回合自身强度下降 2，因此 Devour Warmth 写入 70 点强度等于持续 35 回合；期间本地与相邻地点每回合按当前温度的 4% 降温。" },
  { name: "Reality Anchor", image: "void_riftcloser.png", images: ["void_riftcloser.png", "void_towerraid.png", "void_towerdarkened.png"], text: "人类建造的反制设施。每回合消耗 5 Gold 维护；有资金且不属于黑暗势力的 Anchor 会让所有其他地点的 Hungry Rift 每回合减少 0.2%，若与裂隙同地则改为减少 5%。玩家可掠夺资金并破坏它，英雄与统治者则能出资修复。" },
];

const locations: DetailItem[] = [
  { name: "Great Wound", image: "void_eldertomb.png", text: "Living Void 的特殊 Elder Tomb，保持 100% Shadow 且不能被摧毁。提供 Nothing from Something，用 Agent 的 2 HP 换取 Voidstone；也是 Vacuum Collapse 的固定扩散起点。" },
  { seal: 4, name: "World Rupture", image: "void_worldrupture.png", text: "Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 Nothing from Something，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 Seal Rupture 将其彻底关闭。" },
  { seal: 9, name: "Living Void", image: "void_livingvoid.png", text: "Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。" },
];

const items: DetailItem[] = [
  { name: "Voidstone", image: "void_stone.png", text: "不可丢弃的邪恶物品，是一枚微型 Living Void 门户。可提高 Supplicant 的 Lore，作为 Warp Light 与 Shattered Light 的条件，并提供 Something from Nothing 与 Plant Voidstone 两项仪式。" },
];
const challenges: DetailItem[] = [
  { name: "Something from Nothing", image: "void_stone_heal.png", meta: "Other", statLine: "复杂度 1　暴露度 0　威胁度 0　经验 3（标准难度）", text: "消耗一枚 Voidstone，使 Agent 恢复 2 HP，并让其所有现存随从各恢复 2 HP，均不超过最大值。" },
  { name: "Plant Voidstone", image: "void_stone.png", meta: "Intrigue", statLine: "复杂度 25　暴露度 0　威胁度 0　经验 42（标准难度）", text: "消耗一枚 Voidstone，在当地建立 Hidden Voidstone；完成时获得 5 Profile 与 4 Menace。要求位于渗透度至少 50% 的人类聚居地，且当地没有 Hidden Voidstone 或 Hungry Rift。" },

  { name: "Nothing from Something", image: "void_stone_get.png", meta: "Other", statLine: "复杂度 1　暴露度 0　威胁度 0　经验 3（标准难度）", text: "在 Great Wound 或 World Rupture 牺牲 2 HP，获得一枚 Voidstone。只有当前 HP 大于 2 时才可执行。" },
  { seal: 4, name: "Expand Rift", image: "void_rift_expand.png", meta: "Lore", statLine: "复杂度 25　暴露度 0　威胁度 0　经验 42（标准难度）", text: "使当地 Hungry Rift 增加 40%。完成时基础增加 5 Profile 与 8 Menace；地点 Shadow 会使两者最多降低 35%，最终取整。" },
  { name: "Pillage Anchor", image: "void_towerraid.png", meta: "Might", statLine: "复杂度 20 + 地点安全 × 5　暴露度 0　威胁度 0　经验 36 起（标准难度）", text: "夺走 Reality Anchor 的全部维护资金，并造成 Agent 当前 Might × 100 Gold 的设施损伤，使其停止压制裂隙；完成时增加 6 Profile 与 12 Menace。" },
];

const heroTasks: DetailItem[] = [
  { name: "Seal Rift", image: "void_rift_expand.png", meta: "Lore", statLine: "复杂度 20–40　暴露度为裂隙历史最高强度　威胁度为该值的 20%　经验 36–60（标准难度）", preferenceText: "喜欢或极端喜欢 Danger 会提高执行意愿，厌恶 Danger 则会降低。英雄 Awareness 与世界恐慌越高，意愿越强；Lore 不高于 2 时，只保留约四分之一的任务吸引力。人物 Shadow 会进一步压低意愿。", text: "英雄削减当地 Hungry Rift 60%；降至 0% 或以下时彻底移除。地点 Shadow 会把复杂度从 20 最多提高到 40。任务显示的暴露度与威胁度取决于裂隙有史以来达到的最大强度，因此即使裂隙被压低，人类仍会记得它曾经的威胁。" },
  { name: "Fund Reality Anchor", image: "void_riftcloser.png", id: "hero-fund-reality-anchor", meta: "Other", statLine: "复杂度 1　暴露度 40　威胁度 0　经验 3（标准难度）", preferenceText: "厌恶或极端厌恶 Gold 会提高执行意愿，喜欢 Gold 则会降低。世界恐慌与设施受损会提高意愿；若英雄持有的 Gold 不多于设施现有资金，意愿降低 100；设施属于黑暗势力时再降低 100。人物 Shadow 会按比例削弱仍为正数的意愿。", text: "英雄把身上的全部 Gold 交给 Reality Anchor，优先修复损伤，剩余部分成为维护资金；完成时增加 5 Profile。至少需要持有 1 Gold。" },
  { name: "Seal Rupture", image: "void_CO_CloseRupture.png", meta: "Lore", statLine: "复杂度 50　暴露度 100　威胁度 0　经验 72（标准难度）", preferenceText: "没有直接关联的喜好或厌恶标签。该任务只允许冷却完毕的 Chosen One 执行；世界恐慌、附近未被 Shadow 覆盖的人类聚居地和 World Rupture 数量都会提高意愿。世界上达到 8 个裂口时获得极高优先级，但第 9 封印破除后执行意愿会被强制清零。", text: "Chosen One 进行的引导任务，完成后彻底关闭 World Rupture，并移除其 Draining Warmth 等裂口附属修正。引导期间可通过远程地术攻击、直接攻击或迫使其撤退来打断。" },
];

const religions: DetailItem[] = [
  { name: "Seekers of the New World", text: "Living Void 开局时加入每个 Holy Order，只有 0、−1、−2 三档。受 Elder 影响时，教团侍僧会更愿意执行 Holy: Open Rift；每座神庙还会令同地 Hungry Rift 每回合分别增加 5% 或 10%，同时神庙每回合增加 0.1 Menace。" },
];

const religiousTasks: DetailItem[] = [
  { name: "Holy: Open Rift", image: "void_riftmodifier.png", meta: "Lore", statLine: "复杂度 40　暴露度 40　威胁度 0　经验 60（标准难度）", preferenceText: "喜欢或极端喜欢 Religion 会提高侍僧执行意愿，厌恶 Religion 则会降低。Seekers of the New World 为 −1 时额外增加 50 意愿，为 −2 时增加 100。", text: "教团侍僧在本教神庙所在地建立 50% Hungry Rift；若当地已有 Hidden Voidstone，则消耗它并把初始强度提高到 100%。完成时增加 10 Profile 与 10 Menace。只有对应 Holy Order 的侍僧可执行，且教义必须处于 Elder 影响状态。" },
];

const rulerActions: DetailItem[] = [
  { name: "Construct Reality Anchor", image: "void_riftcloser.png", text: "完全 Awareness 的人类统治者花费 100 Gold、耗时 5 回合，在没有 Reality Anchor 的聚居地建造一座。世界恐慌、邻近或同地 Hungry Rift、高繁荣和 Alliance 身份会提高 AI 意愿；低繁荣与统治者 Shadow 会降低意愿。" },
  { name: "Fund Reality Anchor", image: "void_riftcloser.png", id: "ruler-fund-reality-anchor", text: "完全 Awareness、至少持有 50 Gold 且不属于黑暗势力的当地统治者，耗时 3 回合，把当前 Gold 的 50% 交给 Reality Anchor。世界恐慌、附近裂隙、设施损伤和 Alliance 身份会提高执行意愿。" },
];

const events: DetailItem[] = [
  { name: "Sealed Rift", image: "void_riftclosed.png", text: "英雄彻底消除 Hungry Rift 时显示的结果事件，不再附加额外数值效果。" },
  { name: "Matured Rift", image: "void_rupture_fullimage.png", text: "Hungry Rift 达到 300% 并转化为 World Rupture 时显示的结果事件。" },
  { name: "Seekers of the New World", image: "void_HO.png", id: "seekers-event", text: "本局第一次由宗教任务开启 Hungry Rift 时显示，记录教团开始以新世界教义协助 Living Void。" },
  { name: "Vacuum Collapse", image: "god_background.png", id: "vacuum-collapse-event", text: "每局第一次由 Vacuum Collapse 吞噬人类聚居地时显示；不附加代码之外的额外效果。" },
];


const detailCollections = [traits, locationModifiers, locations, items, challenges, heroTasks, religions, religiousTasks, rulerActions, events];
const allDetails = detailCollections.flat();
const referenceNames = Array.from(new Set([...powers.map((p) => p.name), ...initialAbilities.map(([n]) => n), ...allDetails.map((d) => d.name)])).sort((a, b) => b.length - a.length);
function anchorFor(name: string) { return `entry-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`; }
function refFor(name: string) {
  const power = powers.find((item) => item.name === name);
  if (power) return { name, image: power.icon, meta: `封印 ${power.seal} · 消耗 ${power.cost}`, text: power.effect, href: `#${anchorFor(name)}` };
  const ability = initialAbilities.find(([n]) => n === name);
  if (ability) return { name, image: "void_supp.png", meta: "初始 Agent 能力", text: ability[1], href: `#${anchorFor(name)}` };
  const detail = allDetails.find((item) => item.name === name);
  if (!detail) return null;
  return { name, image: detail.image ?? detail.images?.[0], meta: detail.meta ?? (detail.seal !== undefined ? `封印 ${detail.seal}` : "机制说明"), text: detail.text, href: `#${detail.id ? `entry-${detail.id}` : anchorFor(name)}` };
}
function CrossReference({ name, href, meta, text, image }: { name: string; href?: string; meta?: string; text?: string; image?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reference = refFor(name);
  if (!reference && !text) return <>{name}</>;
  const resolved = { name, href: href ?? reference?.href ?? "#", meta: meta ?? reference?.meta ?? "机制说明", text: text ?? reference?.text ?? "", image: image ?? reference?.image };
  const imageSrc = resolved.image ? `/living-void/${resolved.image}` : undefined;
  return <>
    <a className="cross-reference" href={resolved.href} onClick={(event) => {
      if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
        event.preventDefault();
        setMobileOpen(true);
      }
    }}>
      <span className="cross-label">{name}</span>
      <span className="cross-popover" role="tooltip">{imageSrc && <span className="cross-image"><Image src={imageSrc} alt="" fill sizes="72px" /></span>}<span className="cross-copy"><small>{resolved.meta}</small><b>{resolved.name}</b><span>{resolved.text}</span><em>点击跳转至详情</em></span></span>
    </a>
    <MobileReferenceDialog open={mobileOpen} onClose={() => setMobileOpen(false)} name={resolved.name} meta={resolved.meta} text={resolved.text} href={resolved.href} imageSrc={imageSrc} />
  </>;
}
function RichText({ text, exclude }: { text: string; exclude?: string }) {
  const names = referenceNames.filter((name) => name !== exclude);
  const escaped = names.map((name) => name.replace(/[-/\^$*+?.()|[\]{}]/g, "\\$&"));
  const parts = escaped.length ? text.split(new RegExp(`(${escaped.join("|")})`, "g")) : [text];
  return <>{parts.map((part, index) => names.includes(part) ? <CrossReference name={part} key={`${part}-${index}`} /> : part)}</>;
}
function ExpandableRow({ entryId, name, seal, cost, image, open, onToggle, children }: { entryId: string; name: string; seal?: number; cost?: number; image?: string; open: boolean; onToggle: (id: string) => void; children: ReactNode }) {
  return <article className={`expandable-row ${open ? "is-open" : ""}`} id={entryId}><button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>{seal !== undefined && <span className="summary-seal">{seal}</span>}{image && <span className="summary-image"><Image src={`/living-void/${image}`} alt="" fill sizes="56px" /></span>}<span className="summary-name">{name}</span><ChevronDown className="summary-chevron" size={16} />{cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}</button><div className="expandable-content"><div className="expandable-inner">{children}</div></div></article>;
}

const relations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Warped Light": { sources: [{ name: "Warp Light", href: "#entry-warp-light" }], effects: [{ name: "Voidstone", href: "#entry-voidstone", meta: "持续条件" }] },
  "Stared into the Void": { sources: [{ name: "Stare Deep", href: "#entry-stare-deep" }] },
  "Hidden Voidstone": { sources: [{ name: "Plant Voidstone", href: "#entry-plant-voidstone" }, { name: "Seeds of Destruction", href: "#entry-seeds-of-destruction" }], effects: [{ name: "Hollow Earth", href: "#entry-hollow-earth" }, { name: "Open Rift", href: "#entry-open-rift" }] },
  "Hungry Rift": { sources: [{ name: "Open Rift", href: "#entry-open-rift" }, { name: "Collapsing Body", href: "#entry-collapsing-body" }, { name: "Holy: Open Rift", href: "#entry-holy-open-rift" }], effects: [{ name: "Expand Rift", href: "#entry-expand-rift" }, { name: "Seal Rift", href: "#entry-seal-rift" }, { name: "World Rupture", href: "#entry-world-rupture" }] },
  "Draining Warmth": { sources: [{ name: "Devour Warmth", href: "#entry-devour-warmth" }] },
  "Reality Anchor": { sources: [{ name: "Construct Reality Anchor", href: "#entry-construct-reality-anchor" }], effects: [{ name: "Pillage Anchor", href: "#entry-pillage-anchor" }, { name: "Fund Reality Anchor", href: "#entry-hero-fund-reality-anchor", meta: "英雄任务" }, { name: "Fund Reality Anchor", href: "#entry-ruler-fund-reality-anchor", meta: "统治者行动" }] },
  "Great Wound": { effects: [{ name: "Nothing from Something", href: "#entry-nothing-from-something" }, { name: "Vacuum Collapse", href: "#entry-vacuum-collapse" }] },
  "World Rupture": { sources: [{ name: "Hungry Rift", href: "#entry-hungry-rift" }], effects: [{ name: "Nothing from Something", href: "#entry-nothing-from-something" }, { name: "Devour Warmth", href: "#entry-devour-warmth" }, { name: "Vacuum Collapse", href: "#entry-vacuum-collapse" }, { name: "Seal Rupture", href: "#entry-seal-rupture" }] },
  "Living Void": { sources: [{ name: "Vacuum Collapse", href: "#entry-vacuum-collapse" }] },
  "Voidstone": { sources: [{ name: "Nothing from Something", href: "#entry-nothing-from-something" }], effects: [{ name: "Something from Nothing", href: "#entry-something-from-nothing" }, { name: "Plant Voidstone", href: "#entry-plant-voidstone" }, { name: "Warp Light", href: "#entry-warp-light" }, { name: "Shattered Light", href: "#entry-shattered-light" }] },
  "Seekers of the New World": { effects: [{ name: "Holy: Open Rift", href: "#entry-holy-open-rift" }, { name: "Hungry Rift", href: "#entry-hungry-rift" }] },
  "hero-fund-reality-anchor": { sources: [{ name: "Reality Anchor", href: "#entry-reality-anchor" }] },
  "ruler-fund-reality-anchor": { sources: [{ name: "Reality Anchor", href: "#entry-reality-anchor" }] },
  "Seal Rift": { sources: [{ name: "Hungry Rift", href: "#entry-hungry-rift" }] },
  "Seal Rupture": { sources: [{ name: "World Rupture", href: "#entry-world-rupture" }] },
  "Nothing from Something": { sources: [{ name: "Great Wound", href: "#entry-great-wound" }, { name: "World Rupture", href: "#entry-world-rupture" }], effects: [{ name: "Voidstone", href: "#entry-voidstone" }] },
  "Something from Nothing": { sources: [{ name: "Voidstone", href: "#entry-voidstone" }] },
  "Plant Voidstone": { sources: [{ name: "Voidstone", href: "#entry-voidstone" }], effects: [{ name: "Hidden Voidstone", href: "#entry-hidden-voidstone" }] },
  "Expand Rift": { sources: [{ name: "Hungry Rift", href: "#entry-hungry-rift" }] },
  "Pillage Anchor": { sources: [{ name: "Reality Anchor", href: "#entry-reality-anchor" }] },
  "Holy: Open Rift": { sources: [{ name: "Seekers of the New World", href: "#entry-seekers-of-the-new-world" }], effects: [{ name: "Hungry Rift", href: "#entry-hungry-rift" }] },
};
const powerEffects: Record<string, Relation[]> = {
  "Warp Light": [{ name: "Warped Light", href: "#entry-warped-light" }], "Open Rift": [{ name: "Hungry Rift", href: "#entry-hungry-rift" }], "Stare Deep": [{ name: "Stared into the Void", href: "#entry-stared-into-the-void" }], "Devour Warmth": [{ name: "Draining Warmth", href: "#entry-draining-warmth" }], "Seeds of Destruction": [{ name: "Hidden Voidstone", href: "#entry-hidden-voidstone" }], "Vacuum Collapse": [{ name: "Living Void", href: "#entry-living-void" }],
};
function RelationGroup({ title, items }: { title: string; items?: Relation[] }) { if (!items?.length) return null; return <div className="relation-group"><b>{title}</b><div>{items.map((item) => <CrossReference key={`${title}-${item.href}`} {...item} />)}</div></div>; }
function DetailGrid({ items, openEntries, onToggle, media = true }: { items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void; media?: boolean }) {
  return <div className="expandable-table">{items.map((item) => { const entryId = item.id ? `entry-${item.id}` : anchorFor(item.name); const rel = relations[item.id ?? item.name]; return <ExpandableRow key={entryId} entryId={entryId} name={item.name} seal={item.seal} image={media ? item.image ?? item.images?.[0] : undefined} open={openEntries.has(entryId)} onToggle={onToggle}>{item.meta && <div className="expanded-meta">{item.meta}</div>}{item.statLine && <div className="task-stat-line">{item.statLine}</div>}<p><RichText text={item.text} exclude={item.name} /></p>{item.preferenceText && <div className="preference-note"><b>执行倾向</b><p><RichText text={item.preferenceText} exclude={item.name} /></p></div>}<RelationGroup title="来源" items={rel?.sources} /><RelationGroup title="造成的效果" items={rel?.effects} /></ExpandableRow>; })}</div>;
}
export default function LivingVoidArchive({ onGodChange }: { onGodChange: (god: GodChoice) => void }) {
  const root = useRef<HTMLElement>(null);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const allExpandableIds = [...powers.map((power) => anchorFor(power.name)), anchorFor("Supplicant"), ...detailCollections.flat().map((item) => item.id ? `entry-${item.id}` : anchorFor(item.name))];
  const toggleEntry = (id: string) => setOpenEntries((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".hero-line", { yPercent: 115, duration: 1.05, ease: "power4.out" });
    gsap.from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.35, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => gsap.fromTo(element, { scale: 1.08, opacity: .2 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 92%", end: "bottom 58%", scrub: .8 } }));
  }, { scope: root });
  const nav = [["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印与 Agent 上限"], ["03", "powers", "神力"], ["04", "agent", "初始 Agent 能力"], ["05", "traits", "人物特质"], ["06", "location-modifiers", "地点修正"], ["07", "locations", "地点与设施"], ["08", "items", "物品"], ["09", "religion", "宗教与教义"], ["10", "religious-tasks", "宗教任务"], ["11", "hero-tasks", "英雄任务"], ["12", "challenges", "挑战"], ["13", "ruler-actions", "统治者行动"], ["14", "events", "事件"]];
  return <main ref={root} className={`site-shell void-theme ${sidebarHidden ? "sidebar-hidden" : ""}`} onClickCapture={(event) => { const anchor = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (anchor) setOpenEntries((current) => new Set(current).add(anchor.getAttribute("href")!.slice(1))); }}>
    <aside className="sidebar"><div className="sidebar-head"><div className="sidebar-brand god-switcher"><span className="brand-mark"><CircleDot size={17} /></span><label><select value="living-void" onChange={(event) => onGodChange(event.target.value as GodChoice)} aria-label="切换神祇"><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option></select><small>神祇资料库</small></label></div><button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden((value) => !value)} aria-label={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"} title={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><nav className="sidebar-nav" aria-label="页面目录">{nav.map(([index, id, label]) => <a href={`#${id}`} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allExpandableIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside>
    <div className="content-shell">
      <header id="top" className="hero"><div className="hero-backdrop"><Image src="/living-void/god_background.png" alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 02</span><span>Living Void God</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">The Living Void</span></span></h1></div><div className="hero-facts"><div><b>400</b><span>回合苏醒</span></div><div><b>6</b><span>最终 Agent 上限</span></div><div><b>100%</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src="/living-void/god_portrait.png" alt="The Living Void 神祇立绘" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="portrait-caption"><span>以裂隙建立降临锚点</span><span>常规回合解锁</span></div></div></header>
      <section id="loop" className="section overview-section"><div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div><div className="overview-layout"><article className="overview-main"><h3>核心玩法循环</h3><ol className="core-sequence">
        <li><span>01</span><p>在 <CrossReference name="Great Wound" /> 牺牲 Agent 的生命，取得 <CrossReference name="Voidstone" />。</p></li>
        <li><span>02</span><p>把石头带到渗透至少 50% 的人类聚居地，执行 <CrossReference name="Plant Voidstone" />。</p></li>
        <li><span>03</span><p>用 <CrossReference name="Open Rift" /> 将 <CrossReference name="Hidden Voidstone" /> 转化为 50% 的 <CrossReference name="Hungry Rift" />。</p></li>
        <li><span>04</span><p>利用 Devastation、神庙和 <CrossReference name="Expand Rift" /> 推高裂隙，同时压制或破坏 <CrossReference name="Reality Anchor" />。</p></li>
        <li><span>05</span><p>裂隙达到 300% 后摧毁当地聚居地，形成永久的 <CrossReference name="World Rupture" />。</p></li>
        <li><span>06</span><p>苏醒后施放 <CrossReference name="Vacuum Collapse" />，从 Great Wound 与所有 World Rupture 同时向外吞噬地图。</p></li>
      </ol><div className="overview-subsection"><h3>Hungry Rift 的成长与反制</h3><ul className="source-list"><li>当地每 1% Devastation 每回合约提供 0.01% 裂隙成长；城市废墟按 300% Devastation 计算。</li><li>Geomantic Locus 每回合被吞噬 10 点，作为裂隙成长的另一来源。</li><li>受 Elder 影响的神庙每回合提供 5% 或 10% 成长。</li><li>正常运作的远方 Reality Anchor 每座削减 0.2%；与裂隙同地时削减 5%。</li><li>英雄执行 Seal Rift，每次削减 60%，地点 Shadow 会拖慢任务并降低扩张时的暴露。</li></ul></div><div className="overview-subsection"><h3>苏醒后的扩散</h3><p>Vacuum Collapse 首次覆盖各入口周围半径 2 的范围，以后每次增加 2。多建 World Rupture 不但增加同时扩散的起点，也会提高施放后的神力返还；但 World Rupture 仍可能被 Chosen One 关闭。</p></div></article><aside className="basic-facts"><h3>基础信息</h3><dl><div><dt>封印解锁方式</dt><dd>常规回合解锁</dd></div><div><dt>最大回合数</dt><dd>常规 500 回合</dd></div><div><dt>苏醒回合</dt><dd>第 400 回合</dd></div><div><dt>苏醒时世界恐慌</dt><dd>100%</dd></div><div><dt>初始 Agent 上限</dt><dd>2</dd></div><div><dt>最终 Agent 上限</dt><dd>6</dd></div></dl><div className="omen-info"><h3>玩法重点</h3><p>前期重点是运输和埋藏 Voidstone；中期集中把少量裂隙推到 300%，避免被英雄逐个封闭；后期用多个固定入口提高 Vacuum Collapse 的覆盖面和返还效率。</p></div></aside></div></section>
      <section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印进度</p><h2>封印、解锁回合与 Agent 上限</h2></div></div><div className="seal-table"><div className="seal-head"><span>封印</span><span>回合</span><span>Agent</span><span>每回合神力</span><span>本阶段内容</span></div>{seals.map((item) => <div className="seal-row" key={item.seal}><span className="seal-number">{item.seal}</span><span className="turn">{item.turn}</span><span className="agent-count">{item.agents}</span><span className="power-gain">{(0.035 * (item.seal + 1)).toFixed(3)}</span><span className="seal-reward">{item.reward ? item.reward.split("、").map((reward, index) => <span className="seal-reference-item" key={reward}>{reward === "苏醒" ? reward : <CrossReference name={reward} />}{index < item.reward.split("、").length - 1 && <i>、</i>}</span>) : null}</span></div>)}</div><div className="seal-formula"><b>神力恢复公式</b><code>0.035 ×（已破封印数 + 1）× 难度缩放</code><span>表中按难度缩放为 1 计算。Living Void 没有覆写本体神力恢复规则。</span></div></section>      <section id="powers" className="section powers-section records-section"><div className="powers-intro plain-heading"><p className="section-index">03 / 神力</p><h2>神力</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{powers.map((power) => { const id=anchorFor(power.name); return <ExpandableRow key={id} entryId={id} name={power.name} seal={power.seal} cost={power.cost} image={power.icon} open={openEntries.has(id)} onToggle={toggleEntry}><div className="expanded-section"><h4>具体效果</h4><p><RichText text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText text={power.limit} exclude={power.name} /></p></div><RelationGroup title="造成的效果" items={powerEffects[power.name]} /></ExpandableRow>; })}</div></section>
      <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">04 / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow entryId={anchorFor("Supplicant")} name="Supplicant" image="void_supp.png" open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggleEntry}><p className="agent-stat-line"><b>基础属性：</b>Might 2　Command 3　Intrigue 4　Lore 2　初始技能点 1　初始经验距离升级差 1 点</p><div className="ability-list">{initialAbilities.map(([name, text], index) => <div className="ability" id={anchorFor(name)} key={name}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{name}</h4><p><RichText text={text} exclude={name} /></p></div></div>)}</div></ExpandableRow></div></section>
      <RecordSection id="traits" index="05" title="人物特质"><DetailGrid items={traits} media={false} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="location-modifiers" index="06" title="地点修正"><DetailGrid items={locationModifiers} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="locations" index="07" title="地点与设施"><DetailGrid items={locations} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="items" index="08" title="物品"><DetailGrid items={items} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="religion" index="09" title="宗教与教义"><DetailGrid items={religions} media={false} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="religious-tasks" index="10" title="宗教任务"><DetailGrid items={religiousTasks} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="hero-tasks" index="11" title="英雄任务"><DetailGrid items={heroTasks} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="challenges" index="12" title="挑战"><DetailGrid items={challenges} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="ruler-actions" index="13" title="统治者行动"><DetailGrid items={rulerActions} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="events" index="14" title="事件"><DetailGrid items={events} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <footer><div><CircleDot size={20} />The Living Void</div><p>基于 Living Void 2.0 模组 DLL、事件定义与原始美术素材整理。</p><span>Shadows of Forbidden Gods · Mod Archive</span></footer>
    </div>
  </main>;
}
function RecordSection({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) { return <section id={id} className="section records-section"><div className="plain-heading"><p className="section-index">{index} / {title}</p><h2>{title}</h2></div>{children}</section>; }