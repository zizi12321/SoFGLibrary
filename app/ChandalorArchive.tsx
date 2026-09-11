"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, CircleDot, Eye, PanelLeftClose, PanelLeftOpen, Shield } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type GodChoice = "kishi" | "living-void" | "chandalor";
type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
type DetailItem = { name: string; text: string; image?: string; images?: string[]; seal?: number; meta?: string; statLine?: string; preferenceText?: string; id?: string };

const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Sense Loneliness、Move On、Growing Bond" },
  { seal: 1, turn: 12, agents: 2, reward: "Ceremony、Forgive and Forget" },
  { seal: 2, turn: 24, agents: 2, reward: "Blood Bond、Vile Curse" },
  { seal: 3, turn: 44, agents: 3, reward: "Curse of Poverty、Heartbreak" },
  { seal: 4, turn: 72, agents: 3, reward: "Curse of Overwhelming Joy、Vile Curse：第二次使用" },
  { seal: 5, turn: 110, agents: 3, reward: "Curse of Obsession、Pacifism" },
  { seal: 6, turn: 150, agents: 4, reward: "" },
  { seal: 7, turn: 200, agents: 4, reward: "Vile Curse：第三次使用" },
  { seal: 8, turn: 275, agents: 4, reward: "" },
  { seal: 9, turn: 375, agents: 5, reward: "Rapture、Stand in Awe、苏醒" },
];

const powers = [
  { seal: 0, name: "Sense Loneliness", cost: 0, icon: "power_lonervision.png", effect: "本身不改变任何数值。选择该神力时，没有配偶的英雄与统治者会显示为合法目标，方便寻找适合安排婚姻的人。", limit: "只能指向没有配偶的英雄或统治者。" },
  { seal: 0, name: "Move On", cost: 1, icon: "power_letgo.png", effect: "移除目标与已故配偶之间的婚姻关系，使这名英雄或统治者可以再次结婚。", limit: "目标必须是配偶已经死亡的英雄或统治者。" },
  { seal: 0, name: "Growing Bond", cost: 1, icon: "power_growingbond.png", images: ["power_growingbond.png", "power_growingbond2.png"], effect: "第一次施放标记一名人物；第二次对另一人施放不再消耗神力，并让双方对彼此的个人态度各提高一级。完成后移除标记。", limit: "两次都必须选择英雄或统治者，不能选择 Chosen One；英雄目标不能是玩家可控制的 Agent，第二名目标也不能已经带有同一标记。" },
  { seal: 1, name: "Ceremony", cost: 1, icon: "power_ceremony.png", effect: "在聚居地建立 100 点强度的 Ceremonial Plaza。英雄可以前往此处举办 Wedding Ceremony；当地统治者也能用统治者行动结婚。每场婚礼消耗 50 点强度。", limit: "目标必须是尚无 Ceremonial Plaza 的人类或精灵聚居地。" },
  { seal: 1, name: "Forgive and Forget", cost: 1, icon: "power_forgiveforget.png", effect: "把正在追杀另一单位的英雄打断 1 回合，并把其对目标的个人厌恶或极端厌恶向友好方向移动一级。", limit: "目标必须正执行攻击其他单位的任务，且不能是 Chosen One。" },
  { seal: 2, name: "Blood Bond", cost: 3, icon: "power_bloodbond.png", effect: "把目标家族拥有的每一种诅咒复制到其配偶的家族；配偶家族已经拥有的同类诅咒不会重复添加。", limit: "目标必须是有配偶的英雄或统治者。若两人属于同一家族，施放后不会产生实际变化。" },
  { seal: 2, name: "Vile Curse", cost: 2, icon: "curse_base.png", effect: "从 The Howling、Call of the Deep、Wasting Soul、Through Their Eyes 中选择一种目标家族尚未拥有的本体诅咒，并施加给整个家族。取消选择会返还 2 点神力和本次使用次数。", limit: "初始全局只能使用 1 次；第 4、7 封印分别把上限提高到 2、3 次。只能选择尚未集齐四种本体诅咒的英雄或统治者家族。" },
  { seal: 3, name: "Curse of Poverty", cost: 2, icon: "curse_poverty.png", effect: "让目标整个家族获得贫困诅咒。受影响人物每回合损失当前 Gold 的 5%，但至少损失 5 Gold，最低降至 0。", limit: "每局只能使用一次；目标家族不能已经拥有该诅咒。玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不受人物效果影响。" },
  { seal: 3, name: "Heartbreak", cost: 2, icon: "power_heartbreak.png", effect: "让正在 Mourning 的英雄或统治者立即损失 10 Sanity。", limit: "目标必须带有 Mourning。" },
  { seal: 4, name: "Curse of Overwhelming Joy", cost: 3, icon: "curse_lazy.png", effect: "让目标整个家族受到懈怠诅咒。英雄每回合的挑战进度减少 5，但至少仍有 1；统治者的地方与国家行动各有 50% 概率在该回合少获得 1 点进度。", limit: "每局只能使用一次；目标家族不能已有该诅咒。玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不受人物效果影响。" },
  { seal: 4, name: "Vile Curse：第二次使用", cost: 0, icon: "curse_base.png", effect: "被动把 Vile Curse 的全局使用上限从 1 次提高到 2 次。", limit: "随第 4 封印自动生效，不能主动施放。" },
  { seal: 5, name: "Curse of Obsession", cost: 4, icon: "curse_menace.png", effect: "让目标整个家族受到执念诅咒。英雄每完成一次挑战额外获得 8 Menace；统治者每回合使所在地增加 1 Unrest。", limit: "每局只能使用一次；目标家族不能已有该诅咒。玩家 Agent 与 Dark Empire 统治者不受人物效果影响。" },
  { seal: 5, name: "Pacifism", cost: 4, icon: "power_killarmy.png", effect: "使目标军队放下武器。没有人物领袖的人类军队会立刻解散；由人物领袖代表的精灵军队降至 1 HP。", limit: "只能选择非玩家控制、非黑暗势力的人类或精灵军队；难民、Untamed Dead 与 Ravenous Dead 不可选。" },
  { seal: 7, name: "Vile Curse：第三次使用", cost: 0, icon: "curse_base.png", effect: "被动把 Vile Curse 的全局使用上限从 2 次提高到最终的 3 次。", limit: "随第 7 封印自动生效，不能主动施放。" },
  { seal: 9, name: "Rapture", cost: 3, icon: "power_rapture.png", effect: "统计目标家族拥有的诅咒总数 N：同家族英雄被打断 N 回合，统治者的地方行动与国家行动被锁死 N 回合。Chosen One 不受影响。", limit: "只能选择英雄或统治者。对统治者地点施放时会正常处理全家族；直接对英雄单位施放的代码存在变量判断错误，可能无法打断同家族的单位。" },
  { seal: 9, name: "Stand in Awe", cost: 0, icon: "power_standinawe.png", effect: "被动苏醒效果：从 Elder Tomb 开始产生 Chandalor's Awe，并以每回合一层相邻地点的速度向外传播。受影响的非黑暗人类或精灵聚居地失去 0.75 Prosperity 与 10 Security。", limit: "随第 9 封印与苏醒自动生效，不能主动施放。Dark Empire 不受经济和安全惩罚。" },
];

const initialAbilities: [string, string][] = [
  ["Enchanting Presence", "把 Supplicant 的 Menace 变化压到极低，使其实际始终保持最低 Menace。"],
  ["Beguiler", "每逢 5 的倍数回合，若有空随从槽，就在第一个空位免费补入一名本体 Sellsword。"],
  ["Flowered Death", "Supplicant 死亡时在所在地留下 100 点 Mystifying Petals；若当地已经存在同类修正则不重复生成。苏醒前不会自行传播。"],
];

const traits: DetailItem[] = [
  { seal: 0, name: "Growing Bond Mark", text: "Growing Bond 第一次施放后留在首名目标身上的临时标记。第二次施放完成双方关系提升后移除；若被标记者死亡，神力会重置为第一阶段。" },
  { seal: 3, name: "Poverty", image: "curse_poverty.png", text: "由 Curse of Poverty 对家族成员动态赋予。每回合损失当前 Gold 的 5%，但至少损失 5；玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不会获得它。" },
  { seal: 4, name: "Overwhelming Joy", image: "curse_lazy.png", text: "由同名家族诅咒动态赋予。英雄的挑战进度每回合减少 5、最低仍为 1；统治者行动约有一半回合不推进。" },
  { seal: 5, name: "Obsession", image: "curse_menace.png", text: "由 Curse of Obsession 动态赋予。英雄完成挑战额外获得 8 Menace；统治者每回合给所在地增加 1 Unrest。" },
];

const familyCurses: DetailItem[] = [
  { seal: 2, name: "Vile Curse 家族诅咒", id: "family-vile-curse", image: "curse_base.png", text: "在四种本体诅咒中选择一种加入目标 House。家族成员按本体规则承受效果；Blood Bond 可以把它复制到配偶家族。" },
  { seal: 3, name: "Curse of Poverty 家族诅咒", id: "family-curse-poverty", image: "curse_poverty.png", text: "存放在 House 上并向符合条件的家族成员动态赋予 Poverty；可以沿婚姻被 Blood Bond 复制。" },
  { seal: 4, name: "Curse of Overwhelming Joy 家族诅咒", id: "family-curse-joy", image: "curse_lazy.png", text: "存放在 House 上并向符合条件的家族成员动态赋予 Overwhelming Joy；可以沿婚姻被 Blood Bond 复制。" },
  { seal: 5, name: "Curse of Obsession 家族诅咒", id: "family-curse-obsession", image: "curse_menace.png", text: "存放在 House 上并向符合条件的家族成员动态赋予 Obsession；可以沿婚姻被 Blood Bond 复制。" },
];

const locationModifiers: DetailItem[] = [
  { seal: 1, name: "Ceremonial Plaza", image: "power_ceremony.png", text: "由 Ceremony 建立，初始强度 100，每回合自然下降 1。英雄可在这里执行 Wedding Ceremony，当地统治者也能举办婚礼；每次消耗 50 点强度，城市沦为废墟时消失。" },
  { name: "Mystifying Petals", image: "power_standinawe.png", text: "由 Flowered Death 在 Supplicant 死亡地点留下。苏醒前不扩散；在非黑暗的人类或精灵聚居地造成每回合 −0.5 Prosperity 与 −5 Security，并会在城市成为废墟后保留。" },
  { seal: 9, name: "Chandalor's Awe", image: "power_standinawe.png", text: "苏醒后从 Elder Tomb 开始，每一处修正只在创建后的下一回合向全部相邻地点复制一次，因此波纹每回合向外推进一层。在非黑暗的人类或精灵聚居地造成每回合 −0.75 Prosperity 与 −10 Security。" },
  { name: "Wicked Curse: Failing Crops", image: "ch_witchcurse.png", text: "由 Holy: Wicked Curse 随机产生，约持续 50 回合；当地粮食产出只剩正常值的 25%。有 Farms 时抽中权重从 10 提高到 50。" },
  { name: "Wicked Curse: Misfortune", image: "ch_witchcurse.png", text: "由 Holy: Wicked Curse 随机产生，约持续 50 回合；每回合施加 −0.5 Prosperity。城市地点抽中权重从 10 提高到 50。" },
  { name: "Wicked Curse: Obedience", image: "ch_witchcurse.png", text: "由 Holy: Wicked Curse 随机产生，约持续 50 回合；当地 Security −4。基础权重为 10，并按未渗透比例降低，最低为 1，因此渗透越高越不容易抽中。" },
  { name: "Wicked Curse: Unburied Dead", image: "ch_witchcurse.png", text: "由 Holy: Wicked Curse 随机产生，约持续 50 回合；每回合增加 2.5 Death，结束时再增加 10 Plague。有 Catacombs 时抽中权重从 10 提高到 50。" },
  { name: "Wicked Curse: Outbreak of Anger", image: "ch_witchcurse.png", text: "由 Holy: Wicked Curse 随机产生，约持续 50 回合；每回合同时增加 3 Unrest 与 3 Political Agitation。城市地点抽中权重从 10 提高到 50。" },
];

const minions: DetailItem[] = [
  { name: "Sellsword", text: "本体随从。Beguiler 每 5 回合检查一次 Supplicant 的随从槽，并免费把一名 Sellsword 放进第一个空位。" },
];

const religions: DetailItem[] = [
  { name: "Wicked Curses", text: "选择 Chandalor 时，这项新教义会加入所有 Witches Holy Order。它只有 0 与 −1 两档；处于 Elder 影响（−1）时，女巫对 Holy: Wicked Curse 的执行意愿固定增加 75，并在各人类聚居地获得该宗教任务。" },
];

const heroTasks: DetailItem[] = [
  { name: "Wedding Ceremony", id: "hero-wedding", image: "power_ceremony.png", meta: "Other", statLine: "复杂度 3　暴露度 200　威胁度 0　经验 8（标准难度）", preferenceText: "没有性格喜好或厌恶标签。代码按人际关系计算吸引力：有合适对象时给 +60 或 +120；但“双方相爱”的分支误读了发起者自己的极端喜欢列表，实际只要英雄极端喜欢一名未婚、不同家族的对象，就很容易得到 +120。", text: "未婚英雄在 Ceremonial Plaza 举办婚礼，与其极端喜欢的未婚、不同家族人物建立配偶关系，并消耗广场 50 点强度。文本声称对方也必须喜欢英雄，但源码的极端喜欢判断并未可靠验证对方态度。" },
];

const religiousTasks: DetailItem[] = [
  { name: "Holy: Wicked Curse", image: "ch_witchcurse.png", meta: "Lore", statLine: "复杂度 50　暴露度 100　威胁度 0　经验 72（标准难度）", preferenceText: "喜欢或极端喜欢 Religion、Cruelty 会提高执行意愿，厌恶这两项则会降低；Wicked Curses 教义处于 −1 时另加 75。", text: "Witches Holy Order 的成员在任意人类聚居地施加一种随机地点诅咒，完成时增加 5 Profile 与 8 Menace。地点不能已有 Wicked Curse，Dark Empire 统治地不可选。五种结果均以 100 点强度开始、每回合衰减 2，约持续 50 回合。" },
];

const rulerActions: DetailItem[] = [
  { name: "Wedding Ceremony", id: "ruler-wedding", image: "power_ceremony.png", text: "当地未婚统治者花费 3 回合，在所在地的 Ceremonial Plaza 与其极端喜欢的未婚、不同家族人物结婚，并消耗 50 点广场强度。行动没有正面性格标签，负面标签为 Gold：厌恶 Gold 的统治者更愿意执行，喜欢 Gold 的统治者更不愿意。关系判断与英雄版共享同一处互相喜欢判定问题。" },
];

const events: DetailItem[] = [
  { name: "Wicked Curses 觉醒", id: "wicked-curses-event", image: "curse_activateHO.png", text: "本局第一次有女巫在 Wicked Curses 教义处于 Elder 影响时进行回合结算，会显示此事件，告知女巫教团已经开始把诅咒传播到人类聚居地；事件本身不再附加额外数值效果。" },
];

const detailCollections = [traits, familyCurses, locationModifiers, minions, religions, heroTasks, religiousTasks, rulerActions, events];
const allDetails = detailCollections.flat();
const referenceNames = Array.from(new Set([...powers.map((p) => p.name), ...initialAbilities.map(([n]) => n), ...allDetails.map((d) => d.name)])).sort((a, b) => b.length - a.length);
function anchorFor(name: string) { return `entry-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`; }
function refFor(name: string) {
  const power = powers.find((item) => item.name === name);
  if (power) return { name, image: power.icon, meta: `封印 ${power.seal} · 消耗 ${power.cost}`, text: power.effect, href: `#${anchorFor(name)}` };
  const ability = initialAbilities.find(([n]) => n === name);
  if (ability) return { name, image: "supplicant.png", meta: "初始 Agent 能力", text: ability[1], href: `#${anchorFor(name)}` };
  const detail = allDetails.find((item) => item.name === name);
  if (!detail) return null;
  return { name, image: detail.image ?? detail.images?.[0], meta: detail.meta ?? (detail.seal !== undefined ? `封印 ${detail.seal}` : "机制说明"), text: detail.text, href: `#${detail.id ? `entry-${detail.id}` : anchorFor(name)}` };
}
function CrossReference({ name, href, meta, text, image }: { name: string; href?: string; meta?: string; text?: string; image?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reference = refFor(name);
  if (!reference && !text) return <>{name}</>;
  const resolved = { name, href: href ?? reference?.href ?? "#", meta: meta ?? reference?.meta ?? "机制说明", text: text ?? reference?.text ?? "", image: image ?? reference?.image };
  const imageSrc = resolved.image ? `/chandalor/${resolved.image}` : undefined;
  return <><a className="cross-reference" href={resolved.href} onClick={(event) => { if (window.matchMedia("(hover: none), (pointer: coarse)").matches) { event.preventDefault(); setMobileOpen(true); } }}><span className="cross-label">{name}</span><span className="cross-popover" role="tooltip">{imageSrc && <span className="cross-image"><Image src={imageSrc} alt="" fill sizes="72px" /></span>}<span className="cross-copy"><small>{resolved.meta}</small><b>{resolved.name}</b><span>{resolved.text}</span><em>点击跳转至详情</em></span></span></a><MobileReferenceDialog open={mobileOpen} onClose={() => setMobileOpen(false)} name={resolved.name} meta={resolved.meta} text={resolved.text} href={resolved.href} imageSrc={imageSrc} /></>;
}
function RichText({ text, exclude }: { text: string; exclude?: string }) {
  const names = referenceNames.filter((name) => name !== exclude);
  const escaped = names.map((name) => name.replace(/[-/^$*+?.()|[\]{}]/g, "\\$&"));
  const parts = escaped.length ? text.split(new RegExp(`(${escaped.join("|")})`, "g")) : [text];
  return <>{parts.map((part, index) => names.includes(part) ? <CrossReference name={part} key={`${part}-${index}`} /> : part)}</>;
}
function ExpandableRow({ entryId, name, seal, cost, image, open, onToggle, children }: { entryId: string; name: string; seal?: number; cost?: number; image?: string; open: boolean; onToggle: (id: string) => void; children: ReactNode }) {
  return <article className={`expandable-row ${open ? "is-open" : ""}`} id={entryId}><button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>{seal !== undefined && <span className="summary-seal">{seal}</span>}{image && <span className="summary-image"><Image src={`/chandalor/${image}`} alt="" fill sizes="56px" /></span>}<span className="summary-name">{name}</span><ChevronDown className="summary-chevron" size={16} />{cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}</button><div className="expandable-content"><div className="expandable-inner">{children}</div></div></article>;
}

const relations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Growing Bond Mark": { sources: [{ name: "Growing Bond", href: "#entry-growing-bond" }] },
  "Ceremonial Plaza": { sources: [{ name: "Ceremony", href: "#entry-ceremony" }], effects: [{ name: "Wedding Ceremony", href: "#entry-hero-wedding", meta: "英雄任务" }, { name: "Wedding Ceremony", href: "#entry-ruler-wedding", meta: "统治者行动" }] },
  "Mystifying Petals": { sources: [{ name: "Flowered Death", href: "#entry-flowered-death" }] },
  "Chandalor's Awe": { sources: [{ name: "Stand in Awe", href: "#entry-stand-in-awe" }] },
  "Sellsword": { sources: [{ name: "Beguiler", href: "#entry-beguiler" }] },
  "Wicked Curses": { effects: [{ name: "Holy: Wicked Curse", href: "#entry-holy-wicked-curse" }, { name: "Wicked Curses 觉醒", href: "#entry-wicked-curses-event" }] },
  "hero-wedding": { sources: [{ name: "Ceremonial Plaza", href: "#entry-ceremonial-plaza" }], effects: [{ name: "Blood Bond", href: "#entry-blood-bond", meta: "婚姻可供神力利用" }] },
  "ruler-wedding": { sources: [{ name: "Ceremonial Plaza", href: "#entry-ceremonial-plaza" }], effects: [{ name: "Blood Bond", href: "#entry-blood-bond", meta: "婚姻可供神力利用" }] },
  "Holy: Wicked Curse": { sources: [{ name: "Wicked Curses", href: "#entry-wicked-curses" }], effects: locationModifiers.filter((item) => item.name.startsWith("Wicked Curse:")).map((item) => ({ name: item.name, href: `#${anchorFor(item.name)}` })) },
  "wicked-curses-event": { sources: [{ name: "Wicked Curses", href: "#entry-wicked-curses" }] },
};
const powerEffects: Record<string, Relation[]> = {
  "Growing Bond": [{ name: "Growing Bond Mark", href: "#entry-growing-bond-mark" }],
  "Ceremony": [{ name: "Ceremonial Plaza", href: "#entry-ceremonial-plaza" }],
  "Blood Bond": familyCurses.map((item) => ({ name: item.name, href: `#entry-${item.id}` })),
  "Vile Curse": [{ name: "Vile Curse 家族诅咒", href: "#entry-family-vile-curse" }],
  "Curse of Poverty": [{ name: "Curse of Poverty 家族诅咒", href: "#entry-family-curse-poverty" }, { name: "Poverty", href: "#entry-poverty" }],
  "Curse of Overwhelming Joy": [{ name: "Curse of Overwhelming Joy 家族诅咒", href: "#entry-family-curse-joy" }, { name: "Overwhelming Joy", href: "#entry-overwhelming-joy" }],
  "Curse of Obsession": [{ name: "Curse of Obsession 家族诅咒", href: "#entry-family-curse-obsession" }, { name: "Obsession", href: "#entry-obsession" }],
  "Stand in Awe": [{ name: "Chandalor's Awe", href: "#entry-chandalor-s-awe" }],
};
function RelationGroup({ title, items }: { title: string; items?: Relation[] }) { if (!items?.length) return null; return <div className="relation-group"><b>{title}</b><div>{items.map((item) => <CrossReference key={`${title}-${item.href}`} {...item} />)}</div></div>; }
function DetailGrid({ items, openEntries, onToggle, media = true }: { items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void; media?: boolean }) {
  return <div className="expandable-table">{items.map((item) => { const entryId = item.id ? `entry-${item.id}` : anchorFor(item.name); const rel = relations[item.id ?? item.name]; return <ExpandableRow key={entryId} entryId={entryId} name={item.name} seal={item.seal} image={media ? item.image ?? item.images?.[0] : undefined} open={openEntries.has(entryId)} onToggle={onToggle}>{item.meta && <div className="expanded-meta">{item.meta}</div>}{item.statLine && <div className="task-stat-line">{item.statLine}</div>}<p><RichText text={item.text} exclude={item.name} /></p>{item.preferenceText && <div className="preference-note"><b>执行倾向</b><p><RichText text={item.preferenceText} exclude={item.name} /></p></div>}<RelationGroup title="来源" items={rel?.sources} /><RelationGroup title="造成的效果" items={rel?.effects} /></ExpandableRow>; })}</div>;
}
function RecordSection({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) { return <section id={id} className="section records-section"><div className="plain-heading"><p className="section-index">{index} / {title}</p><h2>{title}</h2></div>{children}</section>; }

export default function ChandalorArchive({ onGodChange }: { onGodChange: (god: GodChoice) => void }) {
  const root = useRef<HTMLElement>(null);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const allExpandableIds = [...powers.map((power) => anchorFor(power.name)), anchorFor("Supplicant"), ...detailCollections.flat().map((item) => item.id ? `entry-${item.id}` : anchorFor(item.name))];
  const toggleEntry = (id: string) => setOpenEntries((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  useGSAP(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.from(".hero-line", { yPercent: 115, duration: 1.05, ease: "power4.out" }); gsap.from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.35, ease: "power3.out" }); gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => gsap.fromTo(element, { scale: 1.08, opacity: .2 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 92%", end: "bottom 58%", scrub: .8 } })); }, { scope: root });
  const nav = [["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印与 Agent 上限"], ["03", "powers", "神力"], ["04", "agent", "初始 Agent 能力"], ["05", "traits", "人物特质"], ["06", "family-curses", "家族诅咒"], ["07", "location-modifiers", "地点修正"], ["08", "minions", "随从"], ["09", "religion", "宗教与教义"], ["10", "religious-tasks", "宗教任务"], ["11", "hero-tasks", "英雄任务"], ["12", "ruler-actions", "统治者行动"], ["13", "events", "事件"]];
  return <main ref={root} className={`site-shell chandalor-theme ${sidebarHidden ? "sidebar-hidden" : ""}`} onClickCapture={(event) => { const anchor = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (anchor) setOpenEntries((current) => new Set(current).add(anchor.getAttribute("href")!.slice(1))); }}>
    <aside className="sidebar"><div className="sidebar-head"><div className="sidebar-brand god-switcher"><span className="brand-mark"><CircleDot size={17} /></span><label><select value="chandalor" onChange={(event) => onGodChange(event.target.value as GodChoice)} aria-label="切换神祇"><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option><option value="chandalor">CHANDALOR</option></select><small>神祇资料库</small></label></div><button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden((value) => !value)} aria-label={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"} title={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><nav className="sidebar-nav" aria-label="页面目录">{nav.map(([index, id, label]) => <a href={`#${id}`} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allExpandableIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside>
    <div className="content-shell">
      <header id="top" className="hero"><div className="hero-backdrop"><Image src="/chandalor/god_main.png" alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 03</span><span>Cursed Bloom God</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">Chandalor, the Cursed Bloom</span></span></h1></div><div className="hero-facts"><div><b>375</b><span>回合苏醒</span></div><div><b>5</b><span>最终 Agent 上限</span></div><div><b>50%</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src="/chandalor/god_portrait.png" alt="Chandalor 神祇立绘" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="portrait-caption"><span>联结家族并传播诅咒</span><span>常规回合解锁</span></div></div></header>
      <section id="loop" className="section overview-section"><div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div><div className="overview-layout"><article className="overview-main"><h3>核心玩法循环</h3><ol className="core-sequence"><li><span>01</span><p>用 <CrossReference name="Sense Loneliness" /> 找出未婚英雄和统治者。</p></li><li><span>02</span><p>用 <CrossReference name="Growing Bond" /> 提高两人的相互好感。</p></li><li><span>03</span><p>建立 <CrossReference name="Ceremonial Plaza" />，让英雄或统治者举办 <CrossReference name="Wedding Ceremony" href="#entry-hero-wedding" meta="英雄任务" />，把两个家族连接起来。</p></li><li><span>04</span><p>用 <CrossReference name="Vile Curse" /> 和三种专属诅咒削弱关键家族。</p></li><li><span>05</span><p>沿婚姻施放 <CrossReference name="Blood Bond" />，把一个家族的全部诅咒复制给配偶家族。</p></li><li><span>06</span><p>后期用 <CrossReference name="Rapture" /> 按家族诅咒数打断英雄与统治者，同时让 <CrossReference name="Chandalor's Awe" /> 向全图扩散。</p></li></ol><div className="overview-subsection"><h3>婚姻与诅咒传播</h3><ul className="source-list"><li>Growing Bond 每次完整施放让两人对彼此的个人态度各提高一级。</li><li>Wedding Ceremony 会把不同 House 的两人正式设为配偶，每次消耗 Ceremonial Plaza 50 点强度。</li><li>Blood Bond 只单向复制：从被选中人物的 House 复制到其配偶的 House；需要时可反向再施放。</li><li>Vile Curse 最多使用三次，三种专属家族诅咒则各只能施放一次。</li><li>诅咒存放在 House 上，新成员会按家族状态获得对应人物特质。</li></ul></div><div className="overview-subsection"><h3>干扰而非直接终局</h3><p>Chandalor 的神力主要让英雄变慢、变得显眼、失去财富或被整族打断，并不会单独提供胜利条件。Agent 仍需完成正常的黑暗胜利路线；神力负责拆散人类的应对节奏。</p></div></article><aside className="basic-facts"><h3>基础信息</h3><dl><div><dt>封印解锁方式</dt><dd>常规回合解锁</dd></div><div><dt>最大回合数</dt><dd>常规 500 回合</dd></div><div><dt>苏醒回合</dt><dd>第 375 回合</dd></div><div><dt>苏醒时世界恐慌</dt><dd>50%</dd></div><div><dt>初始 Agent 上限</dt><dd>2</dd></div><div><dt>最终 Agent 上限</dt><dd>5</dd></div></dl><div className="omen-info"><h3>玩法重点</h3><p>前期先制造稳定婚姻链，再把有限次数的家族诅咒投到连接度高的 House；中期用 Blood Bond 扩散，后期用 Rapture 把累计诅咒转化为整族停摆。</p></div></aside></div></section>
      <section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印进度</p><h2>封印、解锁回合与 Agent 上限</h2></div></div><div className="seal-table"><div className="seal-head"><span>封印</span><span>回合</span><span>Agent</span><span>每回合神力</span><span>本阶段内容</span></div>{seals.map((item) => <div className="seal-row" key={item.seal}><span className="seal-number">{item.seal}</span><span className="turn">{item.turn}</span><span className="agent-count">{item.agents}</span><span className="power-gain">{(0.035 * (item.seal + 1)).toFixed(3)}</span><span className="seal-reward">{item.reward ? item.reward.split("、").map((reward, index) => <span className="seal-reference-item" key={reward}>{reward === "苏醒" ? reward : <CrossReference name={reward} />}{index < item.reward.split("、").length - 1 && <i>、</i>}</span>) : null}</span></div>)}</div><div className="seal-formula"><b>神力恢复公式</b><code>0.035 ×（已破封印数 + 1）× 难度缩放</code><span>表中按难度缩放为 1 计算。Chandalor 没有覆写本体神力恢复规则。</span></div></section>
      <section id="powers" className="section powers-section records-section"><div className="powers-intro plain-heading"><p className="section-index">03 / 神力</p><h2>神力</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{powers.map((power) => { const id=anchorFor(power.name); return <ExpandableRow key={id} entryId={id} name={power.name} seal={power.seal} cost={power.cost} image={power.icon} open={openEntries.has(id)} onToggle={toggleEntry}><div className="expanded-section"><h4>具体效果</h4><p><RichText text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText text={power.limit} exclude={power.name} /></p></div><RelationGroup title="造成的效果" items={powerEffects[power.name]} /></ExpandableRow>; })}</div></section>
      <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">04 / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow entryId={anchorFor("Supplicant")} name="Supplicant" image="supplicant.png" open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggleEntry}><p className="agent-stat-line"><b>基础属性：</b>Might 2　Command 3　Intrigue 4　Lore 2　初始技能点 1　初始经验距离升级差 1 点</p><div className="ability-list">{initialAbilities.map(([name, text], index) => <div className="ability" id={anchorFor(name)} key={name}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{name}</h4><p><RichText text={text} exclude={name} /></p></div></div>)}</div></ExpandableRow></div></section>
      <RecordSection id="traits" index="05" title="人物特质"><DetailGrid items={traits} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="family-curses" index="06" title="家族诅咒"><DetailGrid items={familyCurses} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="location-modifiers" index="07" title="地点修正"><DetailGrid items={locationModifiers} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="minions" index="08" title="随从"><DetailGrid items={minions} media={false} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="religion" index="09" title="宗教与教义"><DetailGrid items={religions} media={false} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="religious-tasks" index="10" title="宗教任务"><DetailGrid items={religiousTasks} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="hero-tasks" index="11" title="英雄任务"><DetailGrid items={heroTasks} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="ruler-actions" index="12" title="统治者行动"><DetailGrid items={rulerActions} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <RecordSection id="events" index="13" title="事件"><DetailGrid items={events} openEntries={openEntries} onToggle={toggleEntry} /></RecordSection>
      <footer><div><CircleDot size={20} />Chandalor, the Cursed Bloom</div><p>基于 Chandalor 2.0 模组 DLL、事件定义与原始美术素材整理。</p><span>Shadows of Forbidden Gods · Mod Archive</span></footer>
    </div>
  </main>;
}