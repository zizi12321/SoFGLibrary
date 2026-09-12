"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LivingVoidArchive from "./LivingVoidArchive";
import ChandalorArchive from "./ChandalorArchive";
import SheWhoWillFeastArchive from "./SheWhoWillFeastArchive";
import IasturArchive from "./IasturArchive";
import VinervaArchive from "./VinervaArchive";
import GodIndex from "./GodIndex";
import MobileReferenceDialog from "./MobileReferenceDialog";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  ChevronDown,
  CircleDot,
  Droplets,
  Eye,
  Shield,
  PanelLeftClose,
  PanelLeftOpen,
  Skull,
  Swords,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Bloody Handprint、Echoes of Shadow" },
  { seal: 1, turn: 12, agents: 2, reward: "Hateful Spirit" },
  { seal: 2, turn: 24, agents: 3, reward: "Shadow Guardian" },
  { seal: 3, turn: 44, agents: 3, reward: "Blood in the Water" },
  { seal: 4, turn: 72, agents: 4, reward: "Crimson Haze" },
  { seal: 5, turn: 108, agents: 4, reward: "Might Makes Right" },
  { seal: 6, turn: 152, agents: 4, reward: "Unending Bloodshed" },
  { seal: 7, turn: 204, agents: 5, reward: "Distort Soul" },
  { seal: 8, turn: 264, agents: 5, reward: "Echoes of Ruin" },
  { seal: 9, turn: 360, agents: 6, reward: "Engulfing Tide、苏醒" },
];

const powers = [
  {
    seal: 0, name: "Bloody Handprint", cost: 1, icon: "power_bloody_handprint.png",
    effect: "在目标所在地放置 50 点 Misleading Clues。该地点下一次完成挑战时，产生的 Profile 与 Menace 会被转嫁给被标记者，用来嫁祸英雄或侍僧。",
    limit: "目标为英雄或侍僧；标记在其所在地生成。",
  },
  {
    seal: 0, name: "Echoes of Shadow", cost: 0, icon: "power_echoes_of_shadow.png",
    effect: "消耗目标人物 1 层 Bloodstain，使其所在的人类聚居地增加 50% Shadow。血污会转成 Soul-Scar，所以仍计入后期所需的历史杀戮量。",
    limit: "必须位于人类聚居地，并拥有可消耗的 Bloodstain。",
  },
  {
    seal: 1, name: "Hateful Spirit", cost: 2, icon: "power_hateful_spirit.png",
    effect: "在地点放置一个约 10 回合后追猎统治者的怨灵。成功后统治者会更喜欢 Combat 与 Cruelty；净化它的英雄反而会受到极端战争偏好的扭曲。",
    limit: "地点须可被英雄访问；可被 Purge Hateful Spirit 清除。",
  },
  {
    seal: 2, name: "Shadow Guardian", cost: 1, icon: "power_shadow_guardian.png",
    effect: "召唤一个可装备的 Shadow Guardian 随从：4 Attack、2 Defence、5 HP、占用 2 Command，用来强化代理战斗。",
    limit: "目标需要空余随从槽和足够的 Command。",
  },
  {
    seal: 3, name: "Blood in the Water", cost: 1, icon: "power_blood_in_the_water.png",
    effect: "让所有拥有 Bloodstain 的人物降低对指定人物的好感。重复施放可以把普通厌恶推至极端，更容易诱发攻击、宣战或反君主煽动。",
    limit: "直接目标不能是 Chosen One；从其统治地点选择时可能绕过限制。",
  },
  {
    seal: 4, name: "Crimson Haze", cost: 1, icon: "power_crimson_haze.png",
    effect: "消耗 1 层 Bloodstain，使所有己方 Agent 立刻降低 10 Menace，并把各自的最低 Menace 再降低 5，适合全队集中降压。",
    limit: "需要一个拥有可消耗 Bloodstain 的人物。",
  },
  {
    seal: 5, name: "Might Makes Right", cost: 2, icon: "power_might_makes_right.png",
    effect: "让一名 Bloodstained 英雄或侍僧杀死当地统治者并接替其位置；地点同时获得 50 回合的 Frightened Guards，安全降低约 3。",
    limit: "目标必须能合法继位；原统治者没有继承人时存在空引用风险。",
  },
  {
    seal: 6, name: "Unending Bloodshed", cost: 3, icon: "power_unending_bloodshed.png",
    effect: "消耗 2 层 Bloodstain，赋予 The Hunger 与 Latent Vampirism。目标死后会在下一回合以 Vampire 身份于死亡地点复活。",
    limit: "仅英雄、侍僧或统治者；至少 2 层 Bloodstain；不能是 Chosen One。",
  },
  {
    seal: 7, name: "Distort Soul", cost: 4, icon: "power_spirit_distortion.png",
    effect: "利用地点中的 Human Soul 将死者复活为不可控制的 Wight，并可依据资源附带最多两个 Firehusk。Wight 会自行袭击前哨和低 Shadow 地区。",
    limit: "地点需要 Human Soul 等复活条件；生成物不是普通可控 Agent。",
  },
  {
    seal: 8, name: "Echoes of Ruin", cost: 2, icon: "power_echoes_of_ruin.png",
    effect: "消耗 1 层 Bloodstain，使当地环境恶化 15%，相邻地点恶化 7.5%，适合从人口或农业核心区向外扩散长期破坏。",
    limit: "实际要求人类聚居地；选择野外单位可能消耗神力却没有效果。",
  },
  {
    seal: 9, name: "Engulfing Tide", cost: 4, icon: "power_engulfing_tide.png",
    effect: "消耗人物合计 4 层 Bloodstain 与 Soul-Scar，将其转化为 Demon of the Tide，摧毁聚居地、建立 Demonic Nexus，并生成 150 HP 的 Rampaging Demons。",
    limit: "Bloodstain 与 Soul-Scar 合计至少为 4；海洋单位路径可能绕过地点限制。",
  },
];

const initialAbilities = [
  ["Hit and Run", "初始 Supplicant 获得 +2 Attack。与英雄或侍僧发生代理战斗后，回合结束时降低 5 Profile 和 5 Menace。"],
  ["Expose Their Weakness", "初始 Supplicant 获得 +2 Attack。亲手杀人时，在死亡地点放置 40 回合的 Frightened Guards，使安全降低 3。"],
  ["Soldier Worship", "首次获得时，从普通英雄中随机选择三人，各赋予 1 层 Bloodstain，并计入初始 Agent 的击杀统计。"],
];

type DetailItem = {
  name: string;
  text: string;
  image?: string;
  images?: string[];
  seal?: number;
  meta?: string;
  statLine?: string;
  preferenceText?: string;
  id?: string;
  links?: { label: string; name: string; href: string; meta?: string; text?: string; image?: string }[];
};

const traits: DetailItem[] = [
  { name: "Bloodstained", text: "记录人物尚未消费的杀戮痕迹，并保留可供神力使用的当前层数。" },
  { name: "Soul-Scarred", text: "记录已经被消费的 Bloodstain。它不能再次支付普通神力，但仍计入历史杀戮总量。" },  { seal: 6, name: "Latent Vampirism", text: "人物死亡后，下一回合在死亡地点复活为 Vampire。" },  { name: "Martyr for War", id: "martyr-for-war-trait", text: "人物死亡时，所在地增加 100 Unrest；附近人物更喜欢 Combat 与 Cruelty，并更厌恶 Cooperation。" },
  { name: "Muddied Trail", text: "回合结束时一次性扣除指定的 Profile 与 Menace 后自行移除；实际数值为各 -5。" },
];

const locationModifiers: DetailItem[] = [
  {
    name: "Bloodstained Lands",
    text: "分为 1 至 5 级，显示地点内人物持有的最高 Bloodstain 层数。人物移动、战斗或血污变化时自动更新。",
  },
  { seal: 1, name: "Hateful Spirit", id: "hateful-spirit-modifier", text: "约 10 回合后影响当地统治者，使其更喜欢 Combat 与 Cruelty。" },
  { name: "Frightened Guards", text: "当地安全降低 3。" },
  { seal: 6, name: "Vampiric Awakening", text: "保存即将复活的人物；下一回合生成对应 Vampire 后自行结束。" },
  { seal: 9, name: "Demonic Energy", text: "每回合增加 5；作为恶魔军队的生命值资源，一次最多消耗 100。" },
];

const locations: DetailItem[] = [
  { seal: 9, name: "Demonic Nexus", image: "location_demon_stronghold.png", text: "地点保持完全 Shadow，每回合产生 5 Demonic Energy，可招募 Firehusk，也可通过 Distill Demonic Horde 生成恶魔军团。初始防御为 100，但最大防御值为 50。" },
];

const minions: DetailItem[] = [
  { seal: 2, name: "Shadow Guardian", id: "shadow-guardian-minion", image: "unit_shadow_guardian.png", text: "4 Attack、2 Defence、5 HP、占用 2 Command。" },
  { seal: 7, name: "Firehusk", image: "unit_demon_minion.png", text: "4 Attack、2 Defence、5 HP、占用 1 Command。" },
];

const autonomousUnits: DetailItem[] = [
  { seal: 7, name: "Wight", text: "不可控制；Might 最低提高到 4，会自主袭击前哨以及 Shadow 较低的地区。" },
  { seal: 9, name: "Demon of the Tide", image: "unit_demon_of_the_tide.png", text: "不可控制；保留原人物并额外获得约 +3 Might，优先召唤军团、招募 Firehusk、支援恶魔军队或袭击人类。" },
];

const armies: DetailItem[] = [
  { seal: 9, name: "Rampaging Demons", image: "unit_demon_army.png", text: "不可控制且不会自然解散，会寻找 Shadow 低于 50% 的人类聚居地并将其夷平。" },
];

const religions: DetailItem[] = [
  { name: "Martyrs for War", id: "martyrs-for-war-doctrine", text: "教义处于负面影响状态时，教团侍僧获得 Martyr for War；其死亡会增加 100 Unrest，并提高当地人物对 Combat、Cruelty 的喜好、降低对 Cooperation 的喜好。" },
];

const heroTasks: DetailItem[] = [
  {
    name: "Purge Hateful Spirit",
    meta: "Other",
    statLine: "复杂度 3　暴露度 30　威胁度 65　经验 8（标准难度）",
    preferenceText: "厌恶或极端厌恶 Discord 会提高英雄执行任务的意愿；喜欢或极端喜欢 Discord 则会降低意愿。任务位于英雄故乡或亲属统治地，以及 Hateful Spirit 强度较高时，也会更有吸引力。Chosen One 与已经极端喜欢 Combat、同时极端厌恶 Cooperation 的英雄会受到 −200 的执行倾向修正。",
    text: "英雄移除所在地的 Hateful Spirit。Chosen One 不受性格扭曲；其他英雄净化成功后会极端喜欢 Combat、极端厌恶 Cooperation，除非已经拥有其中一项极端偏好。",
  },
];

const challenges: DetailItem[] = [
  {
    seal: 9,
    name: "Distill Demonic Horde",
    meta: "Lore+Command",
    statLine: "复杂度 50　暴露度 25　威胁度 25　经验 72（标准难度）",
    text: "暴露度与威胁度实际读取 Demonic Nexus 当前的 Menace，建立时为 25，之后会随据点 Menace 一起变化。最多消耗 100 Demonic Energy，生成 HP 等于消耗量的 Rampaging Demons；新军队每增加 4 HP，Demonic Nexus 的 Menace 增加 1。",
  },
];

type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };

const powerEffects: Record<string, Relation[]> = {
  "Hateful Spirit": [
    { name: "Hateful Spirit", href: "#entry-hateful-spirit-modifier", meta: "地点修正", text: "约 10 回合后扭曲当地统治者；可被英雄净化。" },
    { name: "Purge Hateful Spirit", href: "#entry-purge-hateful-spirit" },
  ],
  "Shadow Guardian": [
    { name: "Shadow Guardian", href: "#entry-shadow-guardian-minion", meta: "随从", text: "4 Attack、2 Defence、5 HP、占用 2 Command。", image: "unit_shadow_guardian.png" },
  ],
  "Might Makes Right": [{ name: "Frightened Guards", href: "#entry-frightened-guards" }],
  "Unending Bloodshed": [{ name: "Latent Vampirism", href: "#entry-latent-vampirism" }],
  "Distort Soul": [
    { name: "Wight", href: "#entry-wight" },
    { name: "Firehusk", href: "#entry-firehusk" },
  ],
  "Engulfing Tide": [
    { name: "Demon of the Tide", href: "#entry-demon-of-the-tide" },
    { name: "Demonic Nexus", href: "#entry-demonic-nexus" },
    { name: "Rampaging Demons", href: "#entry-rampaging-demons" },
  ],
};

const abilityEffects: Record<string, Relation[]> = {
  "Hit and Run": [{ name: "Muddied Trail", href: "#entry-muddied-trail" }],
  "Expose Their Weakness": [{ name: "Frightened Guards", href: "#entry-frightened-guards" }],
  "Soldier Worship": [{ name: "Bloodstain", href: "#loop" }],
};
const detailRelations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Bloodstained": {
    sources: [
      { name: "杀人或主动宣战", href: "#loop", meta: "获得方式", text: "非玩家控制人物杀死有灵魂者时获得；人类统治者主动对另一人类社会宣战时也获得。" },
      { name: "Soldier Worship", href: "#entry-soldier-worship" },
    ],
    effects: [{ name: "Bloodstained Lands", href: "#entry-bloodstained-lands" }],
  },
  "Soul-Scarred": {
    sources: [{ name: "Bloodstain", href: "#loop" }],
    effects: [{ name: "Engulfing Tide", href: "#entry-engulfing-tide" }],
  },
  "Latent Vampirism": {
    sources: [{ name: "Unending Bloodshed", href: "#entry-unending-bloodshed" }],
    effects: [{ name: "Vampiric Awakening", href: "#entry-vampiric-awakening" }],
  },
  "martyr-for-war-trait": {
    sources: [{ name: "Martyrs for War", href: "#entry-martyrs-for-war-doctrine", meta: "宗教教义", text: "教义处于负面影响状态时，会给符合条件的教团侍僧赋予该特质。" }],
  },
  "Muddied Trail": { sources: [{ name: "Hit and Run", href: "#entry-hit-and-run" }] },
  "Bloodstained Lands": { sources: [{ name: "Bloodstain", href: "#loop" }] },
  "hateful-spirit-modifier": {
    sources: [{ name: "Hateful Spirit", href: "#entry-hateful-spirit" }],
    effects: [{ name: "Purge Hateful Spirit", href: "#entry-purge-hateful-spirit" }],
  },
  "Frightened Guards": {
    sources: [
      { name: "Expose Their Weakness", href: "#entry-expose-their-weakness" },
      { name: "Might Makes Right", href: "#entry-might-makes-right" },
    ],
  },
  "Vampiric Awakening": { sources: [{ name: "Latent Vampirism", href: "#entry-latent-vampirism" }] },
  "Demonic Energy": {
    sources: [{ name: "Demonic Nexus", href: "#entry-demonic-nexus" }],
    effects: [{ name: "Distill Demonic Horde", href: "#entry-distill-demonic-horde" }],
  },
  "Demonic Nexus": {
    sources: [{ name: "Engulfing Tide", href: "#entry-engulfing-tide" }],
    effects: [
      { name: "Demonic Energy", href: "#entry-demonic-energy" },
      { name: "Firehusk", href: "#entry-firehusk" },
      { name: "Distill Demonic Horde", href: "#entry-distill-demonic-horde" },
    ],
  },
  "shadow-guardian-minion": { sources: [{ name: "Shadow Guardian", href: "#entry-shadow-guardian" }] },
  "Firehusk": {
    sources: [
      { name: "Distort Soul", href: "#entry-distort-soul" },
      { name: "Demonic Nexus", href: "#entry-demonic-nexus" },
    ],
  },
  "Wight": { sources: [{ name: "Distort Soul", href: "#entry-distort-soul" }] },
  "Demon of the Tide": { sources: [{ name: "Engulfing Tide", href: "#entry-engulfing-tide" }] },
  "Rampaging Demons": {
    sources: [
      { name: "Engulfing Tide", href: "#entry-engulfing-tide" },
      { name: "Distill Demonic Horde", href: "#entry-distill-demonic-horde" },
    ],
  },
  "martyrs-for-war-doctrine": {
    sources: [{ name: "Kishi", href: "#top", meta: "生效条件", text: "选择 Kishi 后，在历史地图生成完成时加入每个 Holy Order。" }],
    effects: [{ name: "Martyr for War", href: "#entry-martyr-for-war-trait", meta: "人物特质", text: "侍僧死亡时增加动乱并改变当地人物偏好。" }],
  },
  "Purge Hateful Spirit": {
    sources: [{ name: "Hateful Spirit", href: "#entry-hateful-spirit-modifier", meta: "地点修正", text: "地点存在该修正时，英雄可以执行净化任务。" }],
    effects: [{ name: "Hateful Spirit", href: "#entry-hateful-spirit-modifier", meta: "移除目标", text: "完成任务后移除所在地的 Hateful Spirit。" }],
  },
  "Distill Demonic Horde": {
    sources: [{ name: "Demonic Nexus", href: "#entry-demonic-nexus" }],
    effects: [{ name: "Rampaging Demons", href: "#entry-rampaging-demons" }],
  },
};

function RelationGroup({ title, relations }: { title: string; relations?: Relation[] }) {
  if (!relations?.length) return null;
  return (
    <div className="relation-group">
      <b>{title}</b>
      <div>
        {relations.map((relation) => (
          <CrossReference key={`${title}-${relation.name}-${relation.href}`} name={relation.name} href={relation.href} meta={relation.meta} text={relation.text} image={relation.image} />
        ))}
      </div>
    </div>
  );
}

function PowerRelations({ name }: { name: string }) {
  return <RelationGroup title="造成的效果" relations={powerEffects[name]} />;
}
const extraReferences: DetailItem[] = [
  { name: "Bloodstain", image: "property_bloodstain.png", meta: "核心资源", text: "尚未被消费的杀戮层数。可由杀人、主动宣战和 Soldier Worship 获得；消费时转化为同量 Soul-Scar。" },
  { name: "Soul-Scar", meta: "历史杀戮记录", text: "记录已被消费的 Bloodstain。不能再次支付一般神力，但仍计入 Engulfing Tide 的转化条件。" },
  { name: "Supplicant", image: "supplicant.png", meta: "初始 Agent", text: "基础属性为 Might 2、Command 3、Intrigue 4、Lore 2；初始拥有 1 技能点，经验值距离下一等级只差 1 点。" },
];

const allDetailItems = [...traits, ...locationModifiers, ...locations, ...minions, ...autonomousUnits, ...armies, ...religions, ...heroTasks, ...challenges, ...extraReferences];
const referenceNames = Array.from(new Set([...powers.map((item) => item.name), ...initialAbilities.map(([name]) => name), ...allDetailItems.map((item) => item.name)])).sort((a, b) => b.length - a.length);

function anchorFor(name: string) {
  return `entry-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function getReference(name: string) {
  const power = powers.find((item) => item.name === name);
  if (power) return { name, image: power.icon, meta: `封印 ${power.seal} · 消耗 ${power.cost}`, text: power.effect, href: `#${anchorFor(name)}` };
  const ability = initialAbilities.find(([abilityName]) => abilityName === name);
  if (ability) return { name, image: "supplicant.png", meta: "初始 Agent 能力", text: ability[1], href: `#${anchorFor(name)}` };
  const detail = allDetailItems.find((item) => item.name === name);
  if (!detail) return null;
  return {
    name,
    image: detail.image ?? detail.images?.[detail.images.length - 1],
    meta: detail.meta ?? (detail.seal !== undefined ? `封印 ${detail.seal}` : "机制说明"),
    text: detail.text,
    href: name === "Bloodstain" || name === "Soul-Scar" ? "#loop" : name === "Supplicant" ? "#agent" : `#${anchorFor(name)}`,
  };
}

function CrossReference({
  name,
  href,
  meta,
  text,
  image,
}: {
  name: string;
  href?: string;
  meta?: string;
  text?: string;
  image?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reference = getReference(name);
  if (!reference && !text) return <>{name}</>;
  const resolved = {
    name,
    href: href ?? reference?.href ?? "#",
    meta: meta ?? reference?.meta ?? "机制说明",
    text: text ?? reference?.text ?? "",
    image: image ?? reference?.image,
  };
  const imageSrc = resolved.image ? `/kishi/${resolved.image}` : undefined;
  return (
    <>
      <a
        className="cross-reference"
        href={resolved.href}
        onClick={(event) => {
          if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
            event.preventDefault();
            setMobileOpen(true);
          }
        }}
      >
        <span className="cross-label">{name}</span>
        <span className="cross-popover" role="tooltip">
          {imageSrc && <span className="cross-image"><Image src={imageSrc} alt="" fill sizes="72px" /></span>}
          <span className="cross-copy">
            <small>{resolved.meta}</small>
            <b>{resolved.name}</b>
            <span>{resolved.text}</span>
            <em>点击跳转至详情</em>
          </span>
        </span>
      </a>
      <MobileReferenceDialog open={mobileOpen} onClose={() => setMobileOpen(false)} name={resolved.name} meta={resolved.meta} text={resolved.text} href={resolved.href} imageSrc={imageSrc} />
    </>
  );
}
function RichText({ text, exclude }: { text: string; exclude?: string }) {
  const names = referenceNames.filter((name) => name !== exclude);
  const escaped = names.map((name) => name.replace(/[-/\^$*+?.()|[\]{}]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return <>{parts.map((part, index) => names.includes(part) ? <CrossReference name={part} key={`${part}-${index}`} /> : part)}</>;
}

function ExpandableRow({
  entryId,
  name,
  seal,
  cost,
  image,
  open,
  onToggle,
  children,
}: {
  entryId: string;
  name: string;
  seal?: number;
  cost?: number;
  image?: string;
  open: boolean;
  onToggle: (entryId: string) => void;
  children: ReactNode;
}) {
  return (
    <article className={`expandable-row ${open ? "is-open" : ""}`} id={entryId}>
      <button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>
        {seal !== undefined && <span className="summary-seal">{seal}</span>}
        {image && <span className="summary-image"><Image src={`/kishi/${image}`} alt="" fill sizes="56px" /></span>}
        <span className="summary-name">{name}</span>
        <ChevronDown className="summary-chevron" size={16} />
        {cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}
      </button>
      <div className="expandable-content">
        <div className="expandable-inner">{children}</div>
      </div>
    </article>
  );
}

function DetailGrid({
  items,
  media = true,
  openEntries,
  onToggle,
}: {
  items: DetailItem[];
  media?: boolean;
  openEntries: Set<string>;
  onToggle: (entryId: string) => void;
}) {
  return (
    <div className="expandable-table">
      {items.map((item) => {
        const entryId = item.id ? `entry-${item.id}` : anchorFor(item.name);
        const image = media ? (item.image ?? item.images?.[item.images.length - 1]) : undefined;
        const relations = detailRelations[item.id ?? item.name];
        return (
          <ExpandableRow
            key={entryId}
            entryId={entryId}
            name={item.name}
            seal={item.seal}
            image={image}
            open={openEntries.has(entryId)}
            onToggle={onToggle}
          >
            {item.meta && <div className="expanded-meta">{item.meta}</div>}
            {item.statLine && <div className="task-stat-line">{item.statLine}</div>}
            <p><RichText text={item.text} exclude={item.name} /></p>
            {item.preferenceText && (
              <div className="preference-note">
                <b>英雄执行倾向</b>
                <p><RichText text={item.preferenceText} exclude={item.name} /></p>
              </div>
            )}
            <RelationGroup title="来源" relations={relations?.sources} />
            <RelationGroup title="造成的效果" relations={relations?.effects} />
          </ExpandableRow>
        );
      })}
    </div>
  );
}
const bloodSources = [
  "非玩家控制人物杀死有灵魂的人。",
  "杀人者通常继承死者已有的 Bloodstain 与 Soul-Scar。",
  "人类国家主动宣战时，进攻方统治者获得一层。",
  "Soldier Worship 会给三名随机英雄各一层。",
  "正式开始前会清除历史模拟阶段意外积累的血污。",
];

type GodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "kishi" | "living-void" | "chandalor";

export default function GodArchive() {
  const [god, setGod] = useState<GodChoice>("index");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("god") as GodChoice | null;
    if (requested && ["she-who-will-feast", "iastur", "vinerva", "kishi", "living-void", "chandalor"].includes(requested)) setGod(requested);
  }, []);
  const switchGod = (nextGod: GodChoice) => {
    setGod(nextGod);
    const url = nextGod === "index" ? window.location.pathname : `${window.location.pathname}?god=${nextGod}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  if (god === "index") return <GodIndex onSelect={switchGod} />;
  if (god === "she-who-will-feast") return <SheWhoWillFeastArchive onGodChange={switchGod} />;
  if (god === "iastur") return <IasturArchive onGodChange={switchGod} />;
  if (god === "vinerva") return <VinervaArchive onGodChange={switchGod} />;
  if (god === "living-void") return <LivingVoidArchive onGodChange={switchGod} />;
  if (god === "chandalor") return <ChandalorArchive onGodChange={switchGod} />;
  return <KishiArchive onGodChange={switchGod} />;
}

function KishiArchive({ onGodChange }: { onGodChange: (god: GodChoice) => void }) {
  const root = useRef<HTMLElement>(null);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const allExpandableIds = [
    ...powers.map((power) => anchorFor(power.name)),
    anchorFor("Supplicant"),
    ...[traits, locationModifiers, locations, minions, autonomousUnits, armies, religions, heroTasks, challenges]
      .flat()
      .map((item) => item.id ? `entry-${item.id}` : anchorFor(item.name)),
  ];

  const toggleEntry = (entryId: string) => {
    setOpenEntries((current) => {
      const next = new Set(current);
      if (next.has(entryId)) next.delete(entryId);
      else next.add(entryId);
      return next;
    });
  };

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(".hero-line", {
      yPercent: 115,
      duration: 1.05,
      stagger: 0.12,
      ease: "power4.out",
    });

    gsap.from(".hero-portrait", {
      scale: 1.08,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => {
      gsap.fromTo(element,
        { scale: 1.12, opacity: 0.18 },
        {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: element, start: "top 92%", end: "bottom 58%", scrub: 0.8 },
        }
      );
    });
  }, { scope: root });

  return (
    <main ref={root} className={`site-shell ${sidebarHidden ? "sidebar-hidden" : ""}`} onClickCapture={(event) => { const anchor = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (anchor) setOpenEntries((current) => new Set(current).add(anchor.getAttribute("href")!.slice(1))); }}>
      <aside className="sidebar">
        <div className="sidebar-head">
          <div className="sidebar-brand god-switcher">
            <span className="brand-mark"><Droplets size={17} /></span>
            <label>
              <select value="kishi" onChange={(event) => onGodChange(event.target.value as GodChoice)} aria-label="切换神祇"><option value="she-who-will-feast">SHE WHO WILL FEAST</option><option value="iastur">IASTUR</option><option value="vinerva">VINERVA</option><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option><option value="chandalor">CHANDALOR</option></select>
              <small>神祇资料库</small>
            </label>
          </div>
          <button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden((value) => !value)} aria-label={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"} title={sidebarHidden ? "展开侧边栏" : "暂时隐藏侧边栏"}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <button className="sidebar-index-link" type="button" onClick={() => onGodChange("index")}>← 返回神祇索引</button><nav className="sidebar-nav" aria-label="页面目录">
          <a href="#top"><span>00</span><b>概览</b></a>
          <a href="#loop"><span>01</span><b>基础信息与核心玩法</b></a>
          <a href="#seals"><span>02</span><b>封印与 Agent 上限</b></a>
          <a href="#powers"><span>03</span><b>神力</b></a>
          <a href="#agent"><span>04</span><b>初始 Agent 能力</b></a>
          <a href="#traits"><span>05</span><b>人物特质</b></a>
          <a href="#location-modifiers"><span>06</span><b>地点修正</b></a>
          <a href="#locations"><span>07</span><b>地点与设施</b></a>
          <a href="#minions"><span>08</span><b>随从</b></a>
          <a href="#units"><span>09</span><b>特殊人物与自主单位</b></a>
          <a href="#armies"><span>10</span><b>军队</b></a>
          <a href="#religion"><span>11</span><b>宗教与教义</b></a>
          <a href="#hero-tasks"><span>12</span><b>英雄任务</b></a>
          <a href="#challenges"><span>13</span><b>挑战</b></a>
</nav>
        <div className="sidebar-bulk">
          <button type="button" onClick={() => setOpenEntries(new Set(allExpandableIds))}>全部展开</button>
          <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
        </div>
        <p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p>
      </aside>
      <div className="content-shell">

      <header id="top" className="hero">
        <div className="hero-backdrop">
          <Image src="/kishi/god_background.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span>神祇档案 04</span><span>God of Bloodshed</span></p>
          <div className="hero-title-wrap">
            <h1>
              <span className="title-mask"><span className="hero-line">Kishi, the Jagged Tide</span></span>
            </h1>
          </div>
          <div className="hero-facts">
            <div><b>360</b><span>回合苏醒</span></div>
            <div><b>6</b><span>最终 Agent 上限</span></div>
            <div><b>75%</b><span>苏醒时世界恐慌</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-frame hero-portrait reveal-image">
            <Image src="/kishi/god_portrait.png" alt="Kishi 神祇立绘" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="portrait-caption">
            <span>以血污扩张影响</span>
            <span>常规回合解锁</span>
          </div>
        </div>
      </header>

      <section id="loop" className="section overview-section">
        <div className="plain-heading overview-heading">
          <p className="section-index">01 / 基础信息与核心玩法</p>
          <h2>基础信息与核心玩法</h2>
        </div>

        <div className="overview-layout">
          <article className="overview-main">
            <h3>核心玩法</h3>
            <ol className="core-sequence">
              <li><span>01</span><p>诱导英雄杀人，或让人类统治者主动宣战。</p></li>
              <li><span>02</span><p>相关人物获得 <CrossReference name="Bloodstain" />。</p></li>
              <li><span>03</span><p>消费 <CrossReference name="Bloodstain" /> 使用强化能力，已消费的层数转化为 <CrossReference name="Soul-Scar" />。</p></li>
              <li><span>04</span><p>使用 <CrossReference name="Engulfing Tide" /> 将历史杀戮量足够高的人物转化为 <CrossReference name="Demon of the Tide" />。</p></li>
              <li><span>05</span><p>摧毁所在地并建立 <CrossReference name="Demonic Nexus" />。</p></li>
              <li><span>06</span><p>据点每回合产生 <CrossReference name="Demonic Energy" />，并通过 <CrossReference name="Distill Demonic Horde" /> 生成 <CrossReference name="Rampaging Demons" />。</p></li>
            </ol>

            <div className="overview-subsection">
              <h3><CrossReference name="Bloodstain" /> 的主要获得方式</h3>
              <div className="blood-stages" aria-label="Bloodstained Lands 的五个显示等级">
                {["property_bloodstain_hex.png", "property_bloodstain_hex2.png", "property_bloodstain_hex3.png", "property_bloodstain_hex4.png", "property_bloodstain_hex5.png"].map((file, index) => (
                  <span key={file}>
                    <Image src={`/kishi/${file}`} alt={`Bloodstain ${index + 1} 级`} width={52} height={52} />
                    <small>{index + 1} 级</small>
                  </span>
                ))}
              </div>
              <ul className="source-list">
                <li>非玩家控制人物杀死有灵魂的人。</li>
                <li>杀人者通常继承死者已有的 <CrossReference name="Bloodstain" /> 与 <CrossReference name="Soul-Scar" />。</li>
                <li>人类国家主动宣战时，进攻方统治者获得一层。</li>
                <li>初始 Agent 的 <CrossReference name="Soldier Worship" /> 会给三名随机英雄各一层。</li>
                <li>正式开始前会清除历史模拟阶段意外积累的 <CrossReference name="Bloodstain" />。</li>
              </ul>
            </div>

            <div className="overview-subsection">
              <h3><CrossReference name="Bloodstain" /> 与 <CrossReference name="Soul-Scar" /></h3>
              <p>消耗 <CrossReference name="Bloodstain" /> 时，会生成同等数量的 <CrossReference name="Soul-Scar" />。因此早期使用 <CrossReference name="Echoes of Shadow" />、<CrossReference name="Crimson Haze" /> 等能力，不会降低 <CrossReference name="Engulfing Tide" /> 所要求的历史总杀戮量。</p>

              <div className="omen-info">
                <h3>Violent Omens</h3>
                <p>Kishi 会把英雄死亡带来的常规恐慌清零，改为每回合显示 Violent Omens。</p>
                <code>30 × 当前回合 ÷ 360</code>
                <p>第 360 回合为 30；第 500 回合约为 41.67。源码虽然计算了 30 的封顶值，但没有把封顶结果写回。</p>
              </div>
            </div>

          </article>

          <aside className="basic-facts">
            <h3>基础信息</h3>
            <dl>
              <div><dt>封印解锁方式</dt><dd>常规回合解锁</dd></div>
              <div><dt>最大回合数</dt><dd>常规 500 回合</dd></div>
              <div><dt>苏醒回合</dt><dd>第 360 回合</dd></div>
              <div><dt>苏醒时世界恐慌</dt><dd>75%</dd></div>
              <div><dt>初始 Agent 上限</dt><dd>2</dd></div>
              <div><dt>最终 Agent 上限</dt><dd>6</dd></div>
            </dl>
            <div className="special-victory">
              <h3>特殊胜利</h3>
              <p>无</p>
            </div>
          </aside>
        </div>
      </section>
      <section id="seals" className="section seals-section">
        <div className="section-heading row-heading">
          <div>
            <p className="section-index">02 / 封印进度</p>
            <h2>封印、解锁回合与 Agent 上限</h2>
          </div>
        </div>
        <div className="seal-table">
          <div className="seal-head"><span>封印</span><span>回合</span><span>Agent</span><span>每回合神力</span><span>本阶段内容</span></div>
          {seals.map((item) => (
            <div className="seal-row" key={item.seal}>
              <span className="seal-number">{item.seal}</span>
              <span className="turn">{item.turn}</span>
              <span className="agent-count">{item.agents}</span>
              <span className="power-gain">{(0.035 * (item.seal + 1)).toFixed(3)}</span>
              <span className="seal-reward">
                {item.reward.split("、").map((reward, index) => (
                  <span className="seal-reference-item" key={reward}>
                    {reward === "苏醒" ? reward : <CrossReference name={reward} />}
                    {index < item.reward.split("、").length - 1 && <i>、</i>}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className="seal-formula">
          <b>神力恢复公式</b>
          <code>0.035 ×（已破封印数 + 1）× 难度缩放</code>
          <span>表中数值按难度缩放为 1 计算。Kishi 没有覆写该方法，使用游戏本体默认恢复规则。</span>
        </div>      </section>

      <section id="powers" className="section powers-section records-section">
        <div className="powers-intro plain-heading">
          <p className="section-index">03 / 神力</p>
          <h2>神力</h2>
          <div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div>
        </div>
        <div className="expandable-table powers-table">
          {powers.map((power) => {
            const entryId = anchorFor(power.name);
            return (
              <ExpandableRow
                key={power.name}
                entryId={entryId}
                name={power.name}
                seal={power.seal}
                cost={power.cost}
                image={power.icon}
                open={openEntries.has(entryId)}
                onToggle={toggleEntry}
              >
                <div className="expanded-section">
                  <h4>具体效果</h4>
                  <p><RichText text={power.effect} exclude={power.name} /></p>
                </div>
                <div className="expanded-section">
                  <h4>释放限制</h4>
                  <p><RichText text={power.limit} exclude={power.name} /></p>
                </div>
                <PowerRelations name={power.name} />
              </ExpandableRow>
            );
          })}
        </div>
      </section>

      <section id="agent" className="section records-section agent-record">
        <div className="plain-heading">
          <p className="section-index">04 / 初始 Agent 能力</p>
          <h2>初始 Agent 能力</h2>
        </div>
        <div className="expandable-table">
          <ExpandableRow
            entryId={anchorFor("Supplicant")}
            name="Supplicant"
            image="supplicant.png"
            open={openEntries.has(anchorFor("Supplicant"))}
            onToggle={toggleEntry}
          >
            <p className="agent-stat-line"><b>基础属性：</b>Might 2　Command 3　Intrigue 4　Lore 2　初始技能点 1　初始经验距离升级差 1 点</p>
            <div className="ability-list">
              {initialAbilities.map(([name, description], index) => (
                <div className="ability" id={anchorFor(name)} key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{name}</h4><p><RichText text={description} exclude={name} /></p><RelationGroup title="造成的效果" relations={abilityEffects[name]} /></div>
                </div>
              ))}
            </div>
          </ExpandableRow>
        </div>
      </section>      <section id="traits" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">05 / 人物特质</p>
          <h2>人物特质</h2>
        </div>
        <DetailGrid items={traits} media={false} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="location-modifiers" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">06 / 地点修正</p>
          <h2>地点修正</h2>
        </div>
        <DetailGrid items={locationModifiers} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="locations" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">07 / 地点与设施</p>
          <h2>地点与设施</h2>
        </div>
        <DetailGrid items={locations} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="minions" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">08 / 随从</p>
          <h2>随从</h2>
        </div>
        <DetailGrid items={minions} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="units" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">09 / 特殊人物与自主单位</p>
          <h2>特殊人物与自主单位</h2>
        </div>
        <DetailGrid items={autonomousUnits} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="armies" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">10 / 军队</p>
          <h2>军队</h2>
        </div>
        <DetailGrid items={armies} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="religion" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">11 / 宗教与教义</p>
          <h2>宗教与教义</h2>
        </div>
        <DetailGrid items={religions} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="hero-tasks" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">12 / 英雄任务</p>
          <h2>英雄任务</h2>
        </div>
        <DetailGrid items={heroTasks} openEntries={openEntries} onToggle={toggleEntry} />
      </section>

      <section id="challenges" className="section records-section">
        <div className="plain-heading">
          <p className="section-index">13 / 挑战</p>
          <h2>挑战</h2>
        </div>
        <DetailGrid items={challenges} openEntries={openEntries} onToggle={toggleEntry} />
      </section>
      <footer>
        <div><Skull size={20} />Kishi, the Jagged Tide</div>
        <p>基于模组 DLL 反编译结果与原始美术素材整理。机制文本以当前分析版本为准。</p>
        <span>Shadows of Forbidden Gods · Mod Archive</span>
      </footer>
      </div>
    </main>
  );
}
