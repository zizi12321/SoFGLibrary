"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, DetailItem, GodConfig, Relation } from "./GodArchiveTypes";
function anchorFor(name: string) { return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/, ""); }


const config: GodConfig = (() => {
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
  { seal: 1, name: "Eyes in the Shadows", cost: 2, icon: "power-shadow.png", effect: "直接渗透目标聚居地内一个尚未渗透、且允许被渗透的设施。若有多个合法设施，选取列表中的最后一个。", limit: "聚居地当前必须没有任何渗透进度；至少要有一个可以渗透的设施。" },
  { seal: 2, name: "Fleeting Servant", cost: 3, icon: "power-fleeting-servant.png", effect: "在任意地点制造 40 点 Fleeting Servant。修正本身不会伤害当地，但英雄会把它当作具有 30 Profile、50 Menace 的 Menace，前来执行 Purge Fleeting Servant，因而浪费行动时间。", limit: "可以选择任意地点；同一地点没有防重复限制，因此可以叠加多个同名修正。" },
  { seal: 3, name: "Dangers in the Dark", cost: 2, icon: "power-dangers-in-dark.png", effect: "令目标地点全部英雄任务与中立挑战各自永久增加 7 危险。危险分别记录在每个挑战上；邪恶阵营使用的挑战不会被增强。", limit: "目标地点的 Shadow 必须超过 50%，并且至少存在一个挑战。" },
  { seal: 3, name: "Serpent's Coils", cost: 4, icon: "power-serpents-coils.png", effect: "影响以目标城市为起点或终点的贸易路线。接下来 25 回合，每条受影响路线在每回合给沿途所有地点增加 1% Shadow。施放时会刷新该城市关联的全部路线。", limit: "目标必须是 100% 渗透的人类城市，并且至少连接一条当前未受 Serpent's Coils 影响的贸易路线。" },
  { seal: 4, name: "Split Shadow", cost: 5, icon: "shadow-agent.png", effect: "从英雄身上撕下影子，生成一个可控制的 Shadow Agent。它继承本体的等级、四项基础属性以及现有特质带来的属性修正。影子远离本体且不在高 Shadow 地区时，每回合损失 1 HP。", limit: "只能选择非 Chosen One 的英雄；全图同时只能存在一个仍然存活的 Shadow Agent。" },
];

const supplicantAbilities: [string, string][] = [
  ["Conduit", "Supplicant 每次完成 Enshadow 挑战都会恢复 2 点神力，但不能超过当前神力上限。"],
  ["The Dying Light", "Supplicant 停留在人类聚居地时，每回合自动增加当地 1% Shadow，最高到 100%。"],
  ["Martyr for the Dark", "Supplicant 在人类聚居地死亡时，会立即把当地所有设施全部渗透。"],
];

const locationModifiers: DetailItem[] = [
  { name: "Shadow", id: "shadow-modifier", image: "power-shadow.png", baseGame: true, modifierChange: { natural: "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。", external: "<CrossReference name=\"The Dying Light\" /> 每回合增加 1% Shadow。\n<CrossReference name=\"Serpent's Coils\" /> 使贸易路线沿线地点每回合增加 1% Shadow。" }, text: "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n\nShadow 超过 50% 时，<CrossReference name=\"Shadow Agent\" /> 可以在当地保持安全，<CrossReference name=\"Dangers in the Dark\" /> 也要求当地达到这一阈值。Supplicant 的 <CrossReference name=\"The Dying Light\" /> 和神力 <CrossReference name=\"Serpent's Coils\" /> 会主动增加 Shadow。" },
  { seal: 2, name: "Fleeting Servant", id: "fleeting-servant-modifier", image: "power-fleeting-servant.png", initialValue: "强度 40。", modifierChange: { natural: "每回合自然下降 1。", external: "由同名神力创建；英雄完成 Purge Fleeting Servant 后移除。" }, text: "由同名神力创建。它本身没有经济、安全或人口效果，也不会因城市化为废墟而消失；主要作用是以 30 Profile 与 50 Menace 吸引英雄前来净化。" },
];

const specialUnits: DetailItem[] = [
  { seal: 4, name: "Shadow Agent", image: "shadow-agent.png", stats: "继承目标英雄的等级、四项基础属性及特质属性修正", text: "由 Split Shadow 创建的可控制 Agent，继承目标英雄的名字、家族和等级。它与本体位于同一地点或相邻地点时安全；位于 Shadow 超过 50% 的地点也安全，否则每回合损失 1 HP。即使本体死亡，影子仍会存在。它不占用 Enthrallment，但会计入可控制单位与 Agent 上限。" },
];

const armies: DetailItem[] = [
  { seal: 9, name: "She Who Will Feast", image: "army.png", stats: "HP：初始 200；每回合最大 HP 与当前 HP 各增加 1；受伤时同回合额外恢复 1。", text: "第 9 封印破除后，在 Elder Tomb 出生的可控制游荡军队，不会自行解散。她死亡会立即导致玩家失败。自动模式下会攻击敌军、焚毁交战中的人类聚居地，生命低于 30% 时返回出生地休整。" },
];

const heroTasks: DetailItem[] = [
  { name: "Purge Fleeting Servant", image: "power-fleeting-servant.png", location: "有 Fleeting Servant 修正的地点。", meta: "Intrigue", statLine: "Complexity: 5　Profile: 30　Menace: 50　XP: 12", positiveTags: "无", negativeTags: "Shadow", text: "英雄清除所在地的一项 Fleeting Servant 修正。完成任务本身只移除诱饵，不会产生额外地点收益。" },
];

const relations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Fleeting Servant": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant", meta: "封印 2 · 神力" }] },
  "Shadow Agent": { sources: [{ name: "Split Shadow", href: "#entry-split-shadow" }] },
  "She Who Will Feast": { sources: [{ name: "第 9 封印苏醒", href: "#seals", meta: "第 375 回合" }] },
  "Purge Fleeting Servant": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正" }] },
};
const powerEffects: Record<string, Relation[]> = {
  "Fleeting Servant": [{ name: "Purge Fleeting Servant", href: "#entry-purge-fleeting-servant", meta: "英雄任务" }],
  "Serpent's Coils": [{ name: "Shadow", href: "#entry-shadow-modifier", meta: "地点修正" }],
  "Split Shadow": [{ name: "Shadow Agent", href: "#entry-shadow-agent", meta: "自主单位" }],
};
const configRelations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = Object.fromEntries(Array.from(new Set([...Object.keys(relations), ...Object.keys(powerEffects)])).map(name => [name, { ...(relations[name] ?? {}), effects: [...(relations[name]?.effects ?? []), ...(powerEffects[name] ?? [])] }]));
return {
  id: "she-who-will-feast", name: "She Who Will Feast", number: "01", theme: "feast-theme", assetDir: "she-who-will-feast", background: "background.png", portrait: "portrait.png",
  flavour: "",
  caption: "渗透、Shadow 扩散与苏醒军队",
  maxTurns: "常规 500 回合", awaken: "第 375 回合", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁", powerRecovery: "0.035 ×（已破封印数 + 1）× 难度缩放。",
  core: [
  "让 Supplicant 通过 <CrossReference name=\"The Dying Light\" /> 与常规 Enshadow 挑战建立 <CrossReference name=\"Shadow\" />；或借 <CrossReference name=\"Conduit\" /> 完成 Enshadow 回收神力。",
  "用 <CrossReference name=\"Eyes in the Shadows\" /> 取得关键设施，逐步把核心城市完全渗透。",
  "在完全渗透的贸易城市施放 <CrossReference name=\"Serpent's Coils\" />，让 <CrossReference name=\"Shadow\" /> 沿贸易路线跨地区传播。",
  "在高 Shadow 区域使用 <CrossReference name=\"Dangers in the Dark\" /> 提高英雄任务风险，并用 <CrossReference name=\"Fleeting Servant\" /> 把英雄引到无关地点。",
  "用 <CrossReference name=\"Cloud Senses\" /> 打退关键任务进度；用 <CrossReference name=\"Split Shadow\" /> 从英雄身上制造额外可控 Agent。",
  "第 375 回合苏醒后，直接控制 <CrossReference name=\"She Who Will Feast\" /> 军队，摧毁已经被战争、瘟疫或饥荒削弱的国家。",  ],
  seals: seals.map(item => ({ seal: item.seal, progress: item.turn, agents: item.agents, reward: item.reward ? item.reward.split("、") : [] })),
  powers,
  supplicant: { image: "supplicant.png", stats: "Might 2　Lore 2　Intrigue 4　Command 3", abilities: supplicantAbilities.map(([name, text]) => ({ name, text })) },
  sections: [
  { id: "location-modifiers", title: "地点修正", media: true, items: locationModifiers },
  { id: "units", title: "特殊人物与自主单位", media: true, items: specialUnits },
  { id: "armies", title: "军队", media: true, items: armies },
  { id: "hero-tasks", title: "英雄任务", media: true, items: heroTasks },  ],
  relations: configRelations,
};
})();

const preparedConfig = prepareGodConfig(config);

export default function shewhowillfeastArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
