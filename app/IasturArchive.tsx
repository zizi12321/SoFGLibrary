"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, DetailItem, GodConfig, Relation } from "./GodArchiveTypes";
function anchorFor(name: string) { return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/, ""); }


const config: GodConfig = (() => {
const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Let's see what this game brings" }, { seal: 1, turn: 12, agents: 2, reward: "" },
  { seal: 2, turn: 24, agents: 3, reward: "The Devil Finds Work..." }, { seal: 3, turn: 44, agents: 3, reward: "...For Idle Hands、It's All Just a Game" },
  { seal: 4, turn: 72, agents: 4, reward: "Stories Told In Dreams、Fascinate" }, { seal: 5, turn: 108, agents: 4, reward: "Everyone Shall Play" },
  { seal: 6, turn: 152, agents: 4, reward: "Incoherent Thoughts" }, { seal: 7, turn: 204, agents: 5, reward: "Hysterical Tome" },
  { seal: 8, turn: 264, agents: 5, reward: "" }, { seal: 9, turn: 360, agents: 6, reward: "Warp Reality、苏醒" },
];
const powers = [
  { seal: 0, name: "Let's see what this game brings", cost: "动态", icon: "power-game.png", effect: "直接渗透目标聚居地内一个尚未渗透且允许渗透的设施；若有多个合法设施，选择列表中的最后一个。消耗会随破封数量增加：0–2 封为 1，3–4 封为 2，5–6 封为 3，7–8 封为 4，9 封为 5。", limit: "目标必须是当前渗透进度恰好为 0 的聚居地，并至少有一个可渗透设施。" },
  { seal: 2, name: "The Devil Finds Work...", cost: 1, icon: "power-preference.png", effect: "从全部普通性格标签与敌对势力标签中选择一项，让目标新增一项普通厌恶。它会改变英雄选择任务、攻击目标和承担风险的意愿。", limit: "可选择非 Chosen One 的英雄；统治者必须已经疯狂。目标的普通厌恶与极端厌恶合计必须少于 5。" },
  { seal: 3, name: "...For Idle Hands", cost: 1, icon: "power-preference.png", effect: "从全部普通性格标签与敌对势力标签中选择一项，让目标新增一项普通喜好，用来推动其偏向对应任务或行为。", limit: "可选择非 Chosen One 的英雄；统治者必须已经疯狂。目标的普通喜好与极端喜好合计必须少于 7。" },
  { seal: 3, name: "It's All Just a Game", cost: 3, icon: "power-just-a-game.png", effect: "立即令一名正在攻击其他单位的英雄损失 14 Sanity，最低降至 0。达到 0 后会由本体疯狂系统处理其精神崩溃。", limit: "目标必须是正在前往攻击另一单位的英雄；代码没有额外排除 Chosen One。" },
  { seal: 4, name: "Stories Told In Dreams", cost: 3, icon: "madness.png", effect: "立即给目标地点增加 50 点 Madness，可直接越过 100 点的统治者精神侵蚀阈值，或推动地点接近 300 点危机。", limit: "只能选择人类聚居地。" },
  { seal: 4, name: "Fascinate", cost: 3, icon: "power-fascinate.png", effect: "把目标所有普通喜好转为极端喜好，并把所有普通厌恶转为极端厌恶；原有极端倾向保留。此后其任务与攻击决策会更强烈地受性格驱动。", limit: "目标必须是携带 Laughing Tome 的人物，可以是英雄或统治者；无论 Tome 是否已被封印都可施放。" },
  { seal: 5, name: "Everyone Shall Play", cost: 0, icon: "laughing-tome.png", effect: "被动强化 Laughing Tome。未封印的 Tome 被非玩家人物携带时，每回合给其所在地增加 3 Madness；Tome 作为地点修正时，除当地每回合增加 3 Madness 外，还会给相邻每个人类聚居地增加 1 Madness。", limit: "被动神力，解锁后自动生效，不会出现在主动施法列表中。" },
  { seal: 6, name: "Incoherent Thoughts", cost: 3, icon: "power-incoherent.png", effect: "取消目标当前挑战，并令其陷入 3 回合 Disrupted，在此期间无法采取行动。", limit: "只能选择正在执行挑战的单位，不能选择 Chosen One。" },
  { seal: 7, name: "Hysterical Tome", cost: 5, icon: "hysterical-tome.png", effect: "把作为地点修正的 Laughing Tome 移到另一处人类聚居地，并在原地点留下 100 点 Hysterical Tome。优先从比原地点距离 Elder Tomb 更远的城市随机选择；若没有，再从全部人类聚居地随机选择。", limit: "只能选择当前存在 Laughing King's Tome 地点修正的地点。" },
  { seal: 9, name: "Warp Reality", cost: 1, icon: "arcane-fortress.png", effect: "给 Elder Tomb 增加 25 点 Arcane Fortress，最高 100。该修正每回合衰减 2，因此一次施放可提供约 13 回合的魔法防护。", limit: "只能对 Elder Tomb 施放。" },
];
const supplicantAbilities: [string, string][] = [
  ["Protector of the Tome", "Supplicant 携带 Laughing Tome 时获得 +2 Might 与 +2 Defence；书离开物品栏后加成消失。"],
  ["Maddening Tongues", "Supplicant 位于人类聚居地时，每回合给当地增加 1 Madness。"],
  ["Favourite Toy", "每局一次：Supplicant 死亡后会在 Elder Tomb 等待复活，并把 Profile 与 Menace 重置到最低值；其全部物品和随从会丢失，正在追杀他的单位也会停止。"],
];
const items: DetailItem[] = [
  { name: "Laughing Tome", image: "laughing-tome.png", text: "开局位于 Supplicant 第一个物品槽。玩家 Agent 携带时不会受精神伤害；非玩家控制的英雄或统治者携带未封印版本时，代码实际每回合损失 1 Sanity。持有者发疯、死亡或失去英雄/统治者身份后，Tome 会转化为所在地的 Laughing King's Tome 修正。Tome 正在影响凡人时，Iastur 的神力恢复从常规值的 0.5 倍提高到 1.5 倍。" },
  { name: "Laughing Tome (Bound)", image: "bound-tome.png", text: "英雄完成 Bind Tome 后获得的封印状态。它停止造成 Sanity 与 Madness，但能在未渗透的 Library 执行 Weaken Iastur。非玩家持有超过 27 回合后，书会逃走并在所在地变为休眠修正；玩家 Agent 抢到后可以执行 Unbind Tome。" },
];
const locationModifiers: DetailItem[] = [
  { name: "Laughing King's Tome", image: "laughing-tome.png", initialValue: "", modifierChange: { natural: "", external: "" }, text: "由 Place Tome、未封印 Tome 的持有者发疯或死亡产生；英雄可以在这里 Bind Tome。它会在符合条件的地点持续造成 Madness。" },
  { name: "Laughing King's Tome (Asleep)", image: "laughing-tome.png", initialValue: "", modifierChange: { natural: "", external: "" }, text: "Bound Tome 被持有过久或被 Weaken Iastur 消耗后留下的休眠状态，不再传播 Madness。玩家 Agent 可用 Collect Tome 取回，也可从 Elder Tomb 使用 Summon Tome。" },
  { seal: 7, name: "Hysterical Tome", id: "hysterical-tome-modifier", image: "hysterical-tome.png", initialValue: "", modifierChange: { natural: "", external: "" }, text: "由同名神力留在旧地点；它会在当地持续造成 Madness，英雄可执行 Dispel Hysterical Tome 清除。" },
  { name: "Madness", image: "madness.png", baseGame: true, modifierChange: { natural: "", external: "<CrossReference name=\"Stories Told In Dreams\" /> 一次性增加 50。\n<CrossReference name=\"Laughing King's Tome\" /> 与 <CrossReference name=\"Hysterical Tome\" href=\"#entry-hysterical-tome-modifier\" /> 在人类聚居地每回合各增加 3。\n<CrossReference name=\"Maddening Tongues\" /> 在人类聚居地每回合增加 1。\n<CrossReference name=\"Everyone Shall Play\" /> 使未封印 Tome 被非玩家人物携带时每回合额外增加 3，并使 <CrossReference name=\"Laughing King's Tome\" /> 向相邻人类聚居地每回合增加 1。\n<CrossReference name=\"Cure Madness\" /> 完成时减少 25。" }, text: "游戏本体地点修正。每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。Madness 达到 300 时触发一次随机 <CrossReference name=\"Madness Crisis\" />，留下六种长期效果之一，然后强度回落到 150。" },
  { seal: 9, name: "Iastur's Soul", image: "iastur-soul.png", initialValue: "", modifierChange: { natural: "", external: "" }, text: "苏醒后出现在 Elder Tomb，并提供 Waves of Madness。" },
  { seal: 9, name: "Arcane Fortress", image: "arcane-fortress.png", baseGame: true, initialValue: "Warp Reality 每次增加 25；最高 100。", modifierChange: { natural: "每回合衰减 2。", external: "由 Warp Reality 在 Elder Tomb 创建或补充" }, text: "游戏本体防御修正，可吸收敌对法师的魔法攻击。" },
];
const madnessEffects: DetailItem[] = [
  { name: "Madness Effect: Catatonia", image: "madness.png", baseGame: true, text: "Madness Crisis 的六种随机结果之一。当地 −0.75 Prosperity、−10 Security，并固定减少 50 点食物产出。" },
  { name: "Madness Effect: Masochism", image: "madness.png", baseGame: true, text: "非玩家控制且不是 Chosen One 的英雄停留当地时，每回合增加 5% Shadow。" },
  { name: "Madness Effect: Fascination", image: "madness.png", baseGame: true, text: "每逢 10 的倍数回合为玩家恢复 1 点神力，不超过当前上限。" },
  { name: "Madness Effect: Psychotics", image: "madness.png", baseGame: true, text: "出现时立刻把当地人口降至原来的 75%（最低 1），增加 100 Death；持续提供 −2 Security。" },
  { name: "Madness Effect: Hypochondria", image: "madness.png", baseGame: true, text: "出现时建立 50 Quarantine 与 100 Plague Immunity，并持续造成 −0.65 Prosperity。" },
  { name: "Madness Effect: Paranoid Delusions", image: "madness.png", baseGame: true, text: "出现时建立 50 Banditry，持续提供 +5 Security；当地所有非 Chosen One 英雄每回合增加 5% Shadow，包括玩家 Agent。" },
];
const challenges: DetailItem[] = [
  { name: "Place Tome", image: "laughing-tome.png", location: "携带未封印 Laughing Tome 的 Agent 当前所在地点；源码未限制为人类聚居地。", meta: "Other", statLine: "Complexity: 1　Profile: 0　Menace: 0　XP: 3", text: "携带未封印 Laughing Tome 的 Agent 把书放到所在地，生成 Laughing King's Tome。完成时额外获得 5 Profile 与 10 Menace。" },
  { name: "Collect Tome", image: "laughing-tome.png", location: "Laughing King's Tome (Asleep) 所在地点。", meta: "Other", statLine: "Complexity: 1　Profile: 0　Menace: 0　XP: 3", text: "从 Laughing King's Tome (Asleep) 所在地取回一册未封印 Laughing Tome，并移除世界上其余 Tome 状态。完成时增加 3 Profile 与 10 Menace。" },
  { name: "Summon Tome", image: "laughing-tome.png", location: "Elder Tomb。", meta: "Other", statLine: "Complexity: 1　Profile: 0　Menace: 0　XP: 3", text: "在 Elder Tomb 召回遗失、休眠或被非玩家人物持有的未封印 Tome。有人正在 Bind Tome 时不能开始；若英雄已经持有 Bound Tome，任务会失败并提示必须盗取或杀死持有者。完成取回时增加 3 Profile 与 10 Menace。" },
  { name: "Unbind Tome", image: "bound-tome.png", location: "携带 Laughing Tome (Bound) 的玩家 Agent 当前所在地点。", meta: "Lore", statLine: "Complexity: 50　Profile: 0　Menace: 0　XP: 72", text: "玩家 Agent 携带 Bound Tome 时解除封印，使其重新传播 Madness。完成时增加 3 Profile 与 5 Menace。" },
  { seal: 9, name: "Waves of Madness", image: "iastur-soul.png", location: "Elder Tomb。", meta: "Lore", statLine: "Complexity: 50　Profile: 1000　Menace: 25　Danger: 160　XP: 72", text: "在 Elder Tomb 持续引导，要求执行者携带未封印 Laughing Tome。完成后按到施法者的距离排序，使最近约 5% 的未疯狂英雄与统治者直接降到 0 Sanity 并发疯；不影响玩家单位、由游戏系统控制且不能作为普通玩家单位操纵的特殊自主单位（例如 Ghast、Cave Spider、Vampire、Orc Upstart、Deep One）与已疯狂人物。完成时增加 40 Profile 与 40 Menace。" },
];
const heroTasks: DetailItem[] = [
  { name: "Bind Tome", image: "bound-tome.png", location: "有 Laughing King's Tome 的地点。", meta: "Other", statLine: "Complexity: 5　Profile: Madness ÷ 1.25　Menace: Madness ÷ 1.5　XP: 12", positiveTags: "无", negativeTags: "Madness", text: "英雄在 Laughing King's Tome 所在地封印并拾取它，得到 Laughing Tome (Bound)，停止该地点继续传播 Madness。" },
  { name: "Weaken Iastur", image: "bound-tome.png", location: "尚未渗透的 Library。", meta: "Lore", statLine: "Complexity: 5　Profile: 1000　Menace: 150　XP: 12", positiveTags: "无", negativeTags: "Madness", text: "消耗英雄携带的 Bound Tome。若 Iastur 当前神力高于上限一半，则把神力清零；否则所有玩家可控制 Agent 各增加 5 Profile 与 5 Menace。之后在英雄所在地留下 Laughing King's Tome (Asleep) 修正。" },
  { name: "Dispel Hysterical Tome", image: "hysterical-tome.png", location: "有 Hysterical Tome 修正的地点。", meta: "Lore", statLine: "Complexity: 10　Profile: 50　Menace: 50　XP: 21", positiveTags: "无", negativeTags: "Madness", text: "移除所在地的一项 Hysterical Tome，停止其继续增加 Madness。完成时额外增加 5 Profile。" },
  { name: "Cure Madness", image: "madness.png", location: "有 Madness 居地。", meta: "Lore", baseGame: true, statLine: "Complexity: 25　Profile: 当前 Madness　Menace: 当前 Madness ÷ 2　XP: 42", positiveTags: "无", negativeTags: "Disease、Madness", text: "把所在地 Madness 降低 25 点。完成时额外增加 3 Profile；地点越疯狂，任务展示的 Profile 与 Menace越高。" },
];
const events: DetailItem[] = [{ name: "Madness Crisis", image: "madness.png", baseGame: true, text: "任一人类聚居地的 Madness 达到 300 时触发。Madness 立即降回 150，并在 Catatonia、Masochism、Fascination、Psychotics、Hypochondria、Paranoid Delusions 中等概率选择一种长期地点效果；同一地点已经有 Madness Effect 时不会再次生成。" }];

const relations:Record<string,{sources?:Relation[];effects?:Relation[]}>={"Laughing King's Tome":{sources:[{name:"Place Tome",href:"#entry-place-tome"}],effects:[{name:"Bind Tome",href:"#entry-bind-tome"}]},"Laughing King's Tome (Asleep)":{sources:[{name:"Weaken Iastur",href:"#entry-weaken-iastur"}],effects:[{name:"Collect Tome",href:"#entry-collect-tome"}]},"Hysterical Tome":{sources:[{name:"Hysterical Tome",href:"#entry-hysterical-tome",meta:"封印 7 · 神力"}],effects:[{name:"Dispel Hysterical Tome",href:"#entry-dispel-hysterical-tome"}]},"Iastur's Soul":{sources:[{name:"第 9 封印苏醒",href:"#seals",meta:"第 360 回合"}],effects:[{name:"Waves of Madness",href:"#entry-waves-of-madness"}]},"Arcane Fortress":{sources:[{name:"Warp Reality",href:"#entry-warp-reality"}]},"Madness Crisis":{sources:[{name:"Madness",href:"#entry-madness"}],effects:madnessEffects.map(x=>({name:x.name,href:`#${anchorFor(x.name)}`}))}};
for(const effect of madnessEffects)relations[effect.name]={sources:[{name:"Madness Crisis",href:"#entry-madness-crisis"}]};
const powerEffects:Record<string,Relation[]>={"Let's see what this game brings":[{name:"Infiltration",href:"#loop",meta:"本体渗透系统"}],"Stories Told In Dreams":[{name:"Madness",href:"#entry-madness"}],"Everyone Shall Play":[{name:"Laughing Tome",href:"#entry-laughing-tome"},{name:"Laughing King's Tome",href:"#entry-laughing-king-s-tome"}],"Hysterical Tome":[{name:"Hysterical Tome",href:"#entry-hysterical-tome-modifier",meta:"地点修正"}],"Warp Reality":[{name:"Arcane Fortress",href:"#entry-arcane-fortress"}]};
const configRelations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = Object.fromEntries(Array.from(new Set([...Object.keys(relations), ...Object.keys(powerEffects)])).map(name => [name, { ...(relations[name] ?? {}), effects: [...(relations[name]?.effects ?? []), ...(powerEffects[name] ?? [])] }]));
return {
  id: "iastur", name: "Iastur, The Laughing King", number: "02", theme: "iastur-theme", assetDir: "iastur", background: "background.png", portrait: "portrait.png",
  flavour: "",
  caption: "Laughing Tome、Madness 与性格操纵",
  maxTurns: "常规 500 回合", awaken: "第 360 回合", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁", powerRecovery: "Tome 状态会覆盖本体恢复：Bound/Asleep 为 0.5 倍，UnBound 或地点修正影响凡人时为 1.5 倍。",
  core: [
  "Supplicant 开局携带 <CrossReference name=\"Laughing Tome\" />，并依靠 <CrossReference name=\"Protector of the Tome\" /> 获得战斗加成。",
  "用 <CrossReference name=\"Place Tome\" /> 把书放进人类聚居地，让 <CrossReference修正的人类聚 name=\"Laughing King's Tome\" /> 持续累积 <CrossReference name=\"Madness\" />。",
  "根据 Tome 的状态改变神力恢复，再用喜好与厌恶神力重写英雄和统治者的决策。",
  "英雄可能用 <CrossReference name=\"Bind Tome\" /> 封印书；抢回后执行 <CrossReference name=\"Unbind Tome\" />，或从 Elder Tomb 使用 <CrossReference name=\"Summon Tome\" />。",
  "第 5 封印的 <CrossReference name=\"Everyone Shall Play\" /> 让 Madness 波及邻城；第 7 封印用 <CrossReference name=\"Hysterical Tome\" /> 留下额外污染源。",
  "苏醒后由携书 Agent 在 Elder Tomb 引导 <CrossReference name=\"Waves of Madness\" />，使有效英雄与统治者陷入疯狂。",  ],
  seals: seals.map(item => ({ seal: item.seal, progress: item.turn, agents: item.agents, reward: item.reward ? item.reward.split("、") : [] })),
  powers,
  supplicant: { image: "supplicant.png", stats: "Might 2　Lore 2　Intrigue 4　Command 3", abilities: supplicantAbilities.map(([name, text]) => ({ name, text })) },
  sections: [
  { id: "items", title: "物品", media: true, items: items },
  { id: "location-modifiers", title: "地点修正", media: true, items: locationModifiers },
  { id: "madness-effects", title: "疯狂危机效果", media: true, items: madnessEffects },
  { id: "challenges", title: "挑战", media: true, items: challenges },
  { id: "hero-tasks", title: "英雄任务", media: true, items: heroTasks },
  { id: "events", title: "事件", media: true, items: events },  ],
  relations: configRelations,
};
})();

const preparedConfig = prepareGodConfig(config);

export default function iasturArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
