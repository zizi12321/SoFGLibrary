"use client";

import { BookOpen, Building2, MapPin, Shield, ShieldAlert, Skull, Sparkles, Swords } from "lucide-react";
import { GodArchive } from "./BaseGodArchive";
import { D, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, DetailItem, GodConfig, Relation } from "./GodArchiveTypes";

function anchorFor(name: string) {
  return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/, "");
}
const config: GodConfig = (() => {
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
    effect: "召唤一个可装备的 Shadow Guardian 随从：5 HP、4 Attack、2 Defence、占用 2 Command，用来强化代理战斗。",
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

const supplicantAbilities = [
  ["Hit and Run", "初始 Supplicant 获得 +2 Attack。与英雄或侍僧发生代理战斗后，回合结束时降低 5 Profile 和 5 Menace。"],
  ["Expose Their Weakness", "初始 Supplicant 获得 +2 Attack。亲手杀人时，在死亡地点放置 40 回合的 Frightened Guards，使安全降低 3。"],
  ["Soldier Worship", "首次获得时，从普通英雄中随机选择三人，各赋予 1 层 Bloodstain，并计入初始 Agent 的击杀统计。"],
];

const traits: DetailItem[] = [
  { name: "Bloodstained", text: "记录人物尚未消费的杀戮痕迹，并保留可供神力使用的当前层数。" },
  { name: "Soul-Scarred", text: "记录已经被消费的 Bloodstain。它不能再次支付普通神力，但仍计入历史杀戮总量。" },  { seal: 6, name: "Latent Vampirism", text: "人物死亡后，下一回合在死亡地点复活为 Vampire。" },  { name: "Martyr for War", id: "martyr-for-war-trait", text: "人物死亡时，所在地增加 100 Unrest；附近人物更喜欢 Combat 与 Cruelty，并更厌恶 Cooperation。" },
  { name: "Muddied Trail", text: "回合结束时一次性扣除指定的 Profile 与 Menace 后自行移除；实际数值为各 -5。" },
];

const locationModifiers: DetailItem[] = [
  {
    name: "Bloodstained Lands",
    initialValue: "由当前人物的最高 Bloodstain 层数动态计算；代码未给固定初始数值。", modifierChange: { natural: "人物移动、战斗或 Bloodstain 变化时自动更新。", external: "地点内人物持有的最高 Bloodstain 层数决定 1 至 5 级。" }, text: "分为 1 至 5 级，显示地点内人物持有的最高 Bloodstain 层数。",
  },
  { seal: 1, name: "Hateful Spirit", id: "hateful-spirit-modifier", initialValue: "创建时固定强度：未找到。", modifierChange: { natural: "约 10 回合后影响当地统治者；自然衰减规则未找到。", external: "由 Hateful Spirit 神力创建；可由 Purge Hateful Spirit 清除。" }, text: "约 10 回合后影响当地统治者，使其更喜欢 Combat 与 Cruelty。" },
  { name: "Frightened Guards", initialValue: "Expose Their Weakness 创建时持续 40 回合；Might Makes Right 创建时持续 50 回合。", modifierChange: { natural: "每回合倒计时 1，归零后移除。", external: "由 Expose Their Weakness 或 Might Makes Right 添加。" }, text: "当地安全降低 3。" },
  { seal: 6, name: "Vampiric Awakening", initialValue: "", modifierChange: { natural: "", external: "" }, text: "保存即将复活的人物；下一回合生成对应 Vampire 后自行结束。" },
  { seal: 9, name: "Demonic Energy", initialValue: "未找到。", modifierChange: { natural: "每回合增加 5。", external: "由 Demonic Nexus 产生；Distill Demonic Horde 每次最多消耗 100。" }, text: "作为恶魔军队的生命值资源，一次最多消耗 100。" },
];

const locations: DetailItem[] = [
  { seal: 9, name: "Demonic Nexus", image: "location_demon_stronghold.png", text: "地点保持完全 Shadow，每回合产生 5 Demonic Energy，可招募 Firehusk，也可通过 Distill Demonic Horde 生成恶魔军团。初始防御为 100，但最大防御值为 50。" },
];

const minions: DetailItem[] = [
  { seal: 2, name: "Shadow Guardian", id: "shadow-guardian-minion", image: "unit_shadow_guardian.png", stats: "HP 5；Attack 4；Defence 2；Command 2", text: "可装备的 Shadow Guardian 随从，用于强化代理战斗。" },
  { seal: 7, name: "Firehusk", image: "unit_demon_minion.png", stats: "HP 5；Attack 4；Defence 2；Command 1", text: "可从 Demonic Nexus 招募的恶魔随从。" },
];

const autonomousUnits: DetailItem[] = [
  { seal: 7, name: "Wight", stats: "Might 4（最低值）", text: "不可控制，会自主袭击前哨以及 Shadow 较低的地区。" },
  { seal: 9, name: "Demon of the Tide", image: "unit_demon_of_the_tide.png", stats: "Might 继承 +3；Lore 继承；Intrigue 继承；Command 继承", text: "不可控制；保留原人物，优先召唤军团、招募 Firehusk、支援恶魔军队或袭击人类。" },
];

const armies: DetailItem[] = [
  { seal: 9, name: "Rampaging Demons", image: "unit_demon_army.png", stats: "HP：按 Distill Demonic Horde 消耗的 Demonic Energy 计算", text: "不可控制且不会自然解散，会寻找 Shadow 低于 50% 的人类聚居地并将其夷平。" },
];

const religions: DetailItem[] = [
  { name: "Martyrs for War", id: "martyrs-for-war-doctrine", text: "教义处于负面影响状态时，教团侍僧获得 Martyr for War；其死亡会增加 100 Unrest，并提高当地人物对 Combat、Cruelty 的喜好、降低对 Cooperation 的喜好。" },
];

const heroTasks: DetailItem[] = [
  {
    name: "Purge Hateful Spirit",
    location: "有 Hateful Spirit 修正的地点。",
    meta: "Other",
    statLine: "Complexity: 3　Profile: 30　Menace: 65　XP: 8",
    positiveTags: "无", negativeTags: "Discord",
    text: "英雄移除所在地的 Hateful Spirit。Chosen One 不受性格扭曲；其他英雄净化成功后会极端喜欢 Combat、极端厌恶 Cooperation，除非已经拥有其中一项极端偏好。",
  },
];

const challenges: DetailItem[] = [
  {
    seal: 9,
    name: "Distill Demonic Horde",
    location: "Demonic Nexus。",
    meta: "Lore+Command",
    statLine: "Complexity: 50　Profile: Demonic Nexus 当前 Menace　Menace: Demonic Nexus 当前 Menace　XP: 72",
    text: "Profile 与危险实际读取 Demonic Nexus 当前的 Menace，建立时为 25，之后会随据点 Menace 一起变化。最多消耗 100 Demonic Energy，生成 HP 等于消耗量的 Rampaging Demons；新军队每增加 4 HP，Demonic Nexus 的 Menace 增加 1。",
  },
];

const powerEffects: Record<string, Relation[]> = {
  "Hateful Spirit": [
    { name: "Hateful Spirit", href: "#entry-hateful-spirit-modifier", meta: "地点修正", text: "约 10 回合后扭曲当地统治者；可被英雄净化。" },
    { name: "Purge Hateful Spirit", href: "#entry-purge-hateful-spirit" },
  ],
  "Shadow Guardian": [
    { name: "Shadow Guardian", href: "#entry-shadow-guardian-minion", meta: "随从", text: "5 HP、4 Attack、2 Defence、占用 2 Command。", image: "unit_shadow_guardian.png" },
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


const extraReferences: DetailItem[] = [
  { name: "Bloodstain", image: "property_bloodstain.png", meta: "核心资源", text: "尚未被消费的杀戮层数。可由杀人、主动宣战和 Soldier Worship 获得；消费时转化为同量 Soul-Scar。" },
  { name: "Soul-Scar", meta: "历史杀戮记录", text: "记录已被消费的 Bloodstain。不能再次支付一般神力，但仍计入 Engulfing Tide 的转化条件。" },
  { name: "Supplicant", image: "supplicant.png", meta: "初始 Agent", text: "基础属性为 Might 2、Lore 2、Intrigue 4、Command 3。" },
];


const configRelations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = Object.fromEntries(
  Array.from(new Set([...Object.keys(detailRelations), ...Object.keys(powerEffects), ...Object.keys(abilityEffects)])).map(name => [name, {
    ...(detailRelations[name] ?? {}),
    effects: [...(detailRelations[name]?.effects ?? []), ...(powerEffects[name] ?? []), ...(abilityEffects[name] ?? [])],
  }]),
);
return {
  id: "kishi",
  name: "Kishi, the Jagged Tide",
  number: "04",
  theme: "kishi-theme",
  assetDir: "kishi",
  background: "god_background.jpg",
  portrait: "god_portrait.png",
  flavour: "",
  caption: "Bloodstain、Soul-Scar 与恶魔浪潮",
  maxTurns: "常规 500 回合",
  awaken: "第 360 回合",
  panic: "75%",
  finalAgents: "6",
  progressLabel: "回合",
  unlockMethod: "常规回合解锁",
  powerRecovery: "0.035 ×（已破封印数 + 1）× 难度缩放。",
  core: [
    "通过 <CrossReference name=\"Bloodstain\" /> 和 <CrossReference name=\"Soul-Scar\" /> 累积历史杀戮，把血污转化为后续神力与 <CrossReference name=\"Engulfing Tide\" /> 的资源。",
    "用 <CrossReference name=\"Hateful Spirit\" />、<CrossReference name=\"Might Makes Right\" /> 和 <CrossReference name=\"Distort Soul\" /> 扰乱英雄、统治者与地点，再用 <CrossReference name=\"Purge Hateful Spirit\" /> 等任务牵制英雄。",
    "第 9 封印解锁 <CrossReference name=\"Demonic Nexus\" /> 与 <CrossReference name=\"Engulfing Tide\" /> 后，在据点积累 <CrossReference name=\"Demonic Energy\" />，通过 <CrossReference name=\"Distill Demonic Horde\" /> 生成 <CrossReference name=\"Rampaging Demons\" />。",
    "第 9 封印于第 360 回合苏醒，控制 <CrossReference name=\"Rampaging Demons\" /> 以外的恶魔浪潮，并把 Shadow 较低的人类聚居地夷平。",
  ],
  seals: seals.map(item => ({ seal: item.seal, progress: item.turn, agents: item.agents, reward: item.reward ? item.reward.split("、") : [] })),
  powers,
  supplicant: {
    image: "supplicant.png",
    stats: "Might 2　Lore 2　Intrigue 4　Command 3",
    abilities: supplicantAbilities.map(([name, text]) => ({ name, text })),
  },
  sections: [
    { id: "traits", title: "人物特质", icon: <Sparkles size={16} />, items: traits },
    { id: "location-modifiers", title: "地点修正", icon: <MapPin size={16} />, items: locationModifiers },
    { id: "locations", title: "地点与设施", icon: <Building2 size={16} />, items: locations },
    { id: "minions", title: "随从", icon: <Shield size={16} />, items: minions },
    { id: "units", title: "特殊人物与自主单位", icon: <Swords size={16} />, items: autonomousUnits },
    { id: "armies", title: "军队", icon: <Skull size={16} />, items: armies },
    { id: "religion", title: "宗教与教义", icon: <BookOpen size={16} />, items: religions },
    { id: "hero-tasks", title: "英雄任务", icon: <Swords size={16} />, items: heroTasks },
    { id: "challenges", title: "挑战", icon: <ShieldAlert size={16} />, items: challenges },
    { id: "related-mechanics", title: "相关机制", icon: <BookOpen size={16} />, items: extraReferences.filter(item => item.name !== "Supplicant") },
  ],
  relations: configRelations,
};
})();

const preparedConfig = prepareGodConfig(config);

export default function KishiArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
