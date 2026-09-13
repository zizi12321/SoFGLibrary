"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "mammon", name: "Mammon, Wealth of Man, Spirit of the Mountain", number: "05", theme: "mammon-theme", assetDir: "mammon", background: "background.png", portrait: "portrait.png", 
 flavour: "",
 caption: "贸易网络、Greed/Decadence 与吞噬", maxTurns: "常规 500 回合", awaken: "吞噬进度达到 800", panic: "75%", finalAgents: "6", progressLabel: "吞噬进度", unlockMethod: "不按回合解锁：吞噬人群或用 Devour Sin 吞噬罪恶",
 powerRecovery: "神力上限 = max(1，⌊0.125 × √(1 + Σ(人口 × Prosperity))⌋)。Σ 统计拥有 Mammon's Influence 或与其相邻的人类聚居地；神力恢复 = 0.035 × 神力上限 × 难度缩放。",
 core: [
  "开局在贸易网络旁建立 <CrossReference name=\"The Mountain's Wealth\" />，并让与山相连的贸易路线带上 <CrossReference name=\"Mammon's Influence\" />。",
  "用 <CrossReference name=\"Call of the Mountain\" /> 把人群变成前往山脉的 Lured Crowd；人群抵达后会被吞食，推进封印并恢复山中财富。",
  "沿贸易路线用 <CrossReference name=\"Grow Influence\" /> 扩张，令繁荣高的地点形成 Decadence，繁荣低的地点形成 Greed；两者都会改变统治者的行为。",
  "利用贪婪国家发动的进攻战争，在首都使用 <CrossReference name=\"Devour Sin\" /> 一次吞噬 100 灵魂；这既推进封印，也在山中留下 Sins Devoured。",
  "封印 6 后可用 <CrossReference name=\"All is Mine\" /> 让受影响城市持续失去人口，以加速最终封印进度；它只是推进手段，最终封印开启才会触发胜利。",
 ],
 overviewExtra: { title: "山中财富与风险", text: "The Mountain's Wealth 以财富百分比表示，初始为 50%。吞噬人群会恢复财富、增加山的 Menace 和 Profile，同时给更多贸易扩张额度；英雄的 Raid Mountain 每次夺走 10%财富并降低 Menace 10，财富降到 0%会直接击败 Mammon。所有扩张都会提高被英雄发现和袭击的风险。" },
 specialVictory: "Mammon 通过吞噬受影响人口或使用 Devour Sin 吞食战争罪恶推进封印；当最终封印开启时立即获胜。The Mountain 的财富归零则失败。",
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Grow Influence", "Devour Sin", "Call of the Mountain", "Create Shadow Market", "Smuggling"] }, { seal: 1, progress: 15, agents: 2, reward: ["Distraction"] },
  { seal: 2, progress: 30, agents: 3, reward: [] }, { seal: 3, progress: 70, agents: 3, reward: ["Call of Wealth", "Gift from The Mountain"] },
  { seal: 4, progress: 200, agents: 4, reward: ["Plutomania"] }, { seal: 5, progress: 300, agents: 5, reward: ["Danger in The Mountain", "Embrace of Metal"] },
  { seal: 6, progress: 500, agents: 6, reward: ["All is Mine"] }, { seal: 7, progress: 800, agents: 6, reward: ["苏醒", "立刻胜利"] },
 ],
 powers: [
  O("Grow Influence", 0, 0, "沿连接 Mammon 山脉的贸易路线增加一个受影响地点，并消耗已吞食人群换来的扩张额度；每一步都会提高山的 Profile。", "目标必须是贸易路线上的人类聚居地，与已有 Influence 相邻，并且仍有扩张额度。", "grow-influence.png"),
  O("Devour Sin", 0, 0, "在 Greed 达到 50% 的进攻战争首都吞噬 100 灵魂，推进封印、恢复山中财富，并留下 Sins Devoured。每个地点只能吞噬一次。", "目标必须是非 Dark Empire 的人类首都；其国家必须主动发动进攻战争，并有至少 50% Greed。", "devour-sin.png"),
  O("Call of the Mountain", 0, 1, "从受影响或邻近受影响的城市召集约 25% 人口，生成不可控制的 Lured Crowd。人群会沿路线前往 The Mountain，英雄可在途中执行 Save Crowd。", "目标为人口至少 10 的人类聚居地，且该地或邻地 Mammon's Influence 达到 90% 以上。", "lured-crowd.png"),
  O("Distraction", 1, 1, "让一个有 40 Gold 的己方 Agent 花掉这笔钱，打断所在地所有非玩家英雄的当前任务，并使其 Disrupted 3 回合。", "目标 Agent 必须有至少 40 Gold，且所在地点或邻地有 Mammon's Influence。", "distraction.png"),
  O("Create Shadow Market", 0, 1, "在已渗透的城市建立 Shadow Market。Agent 可以继续发展它，使地点 Prosperity 下降并增加 Greed；市场会产生 Menace 和 Profile，还能通过贸易路线连接并提高另一地点 Prosperity。", "必须是渗透度大于 0、尚无 Shadow Market 的城市。", "shadow-market.png"),
  O("Smuggling", 0, 1, "把一个 100% 渗透的城市连接到 5 格内尚未连接的 Shadow Market，建立 Smuggling 修正并立即加入 100% Mammon's Influence。", "目标城市必须 100% 渗透，5 格内要有未连接 Shadow Market，且自身没有 Shadow Market 或 Smuggling。", "smuggling.png"),
  O("Call of Wealth", 3, 1, "把附近一部分人口诱导到 Decadence 聚居地，形成带目标地的人群，使其人口重新填充到繁荣中心。", "目标为人口低于最大人口 75% 的人类聚居地，并带有 Decadence。", "refugees.png"),
  O("Plutomania", 4, 3, "对 Decadence 达到 100% 的人类聚居地统治者使用后，使其获得 Plutomania 人物特质，并将其 Gold 偏好提高 5 级；这会使统治者更容易作出增加 Unrest、引发内战或错误支出的财富决策。", "目标必须是带有 100% Decadence 的人类聚居地，且存在统治者。", "plutomania.png"),
  O("Gift from The Mountain", 3, 0, "给一个己方 Agent 150 Gold，但从 The Mountain's Wealth 中扣除 10%财富；财富不会低于 1%。", "目标必须是己方 Agent，且山中财富高于 10%。", "gift-from-mountain.png"),
  O("Danger in The Mountain", 5, 3, "让 Raid Mountain 的危险增加 5，最高额外危险为 15。英雄执行 Raid Mountain 时会随机承受 0 到危险值的伤害，触发伤害后危险会降低。", "必须施放在 The Mountain，且施放后危险不会超过 15。", "danger-in-mountain.png"),
  O("Embrace of Metal", 5, 5, "在城市建立 Armoured Populace。修正每回合增长 2%，到 100% 后把约一半人口转成不可控制的 Armoured Populace 军队；军队进攻或夷平时会反过来喂养 Mammon。", "目标必须是尚无 Armoured Populace 修正的人类聚居地。", "embrace-of-metal.png"),
  O("All is Mine", 6, 5, "在 The Mountain 开始最终进食。所有受 Mammon 影响的人类聚居地每回合平均失去 30%人口，封印按被吞食人口推进；山的 Menace 与 Profile 每回合各增加 1。", "必须施放在 The Mountain，且不能重复施放。", "all-is-mine.png"),
 ],

 supplicant: { image: "mammon-supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Priceless Gift", "获得该特质时，从物品池得到一件神器级物品。"), D("Wealth Creator", "身处 Mammon's Influence 内或邻近地点时，每回合获得 3 Gold。"), D("Wealth Begets Wealth", "获得该特质时立即得到 200 Gold。")] },
 sections: [
  { id: "traits", title: "人物特质", items: [D("Plutomania", "由 <CrossReference name=\"Plutomania\" /> 神力施加给 Decadence 达到 100% 的聚居地统治者。它使该统治者的 Gold 偏好提高 5 级，更容易作出增加 Unrest、引发内战或错误支出的财富决策。", { id: "plutomania-trait", image: "plutomania.png" })] },
  { id: "location-modifiers", title: "地点修正", items: [
   D("The Mountain's Wealth", "The Mountain 的财富储备，初始为 50%。它还记录 Mammon 可扩张的贸易地点数量，以及山的 Menace 和 Profile。财富归零会直接导致 Mammon 失败。", { image: "mammon-mountain.png", initialValue: "50%。", modifierChange: { natural: "每回合 Menace 和 Profile 各按当前值的 3% 衰减。", external: "吞噬 Lured Crowd：每吞噬 1 点最多恢复 0.333%财富，上限 100%。\nDevour Sin：每吞噬 1 点最多恢复 0.333%财富，上限 100%。\nRaid Mountain：每次 −10%财富，并使 Menace −10。\nGift from The Mountain：每次 −10%财富，最低保留 1%。\nAll is Mine：期间每回合使 Menace 和 Profile 各 +1。" } }),
   D("Mammon's Influence", "Mammon's Influence 存在时，该地点及其相邻地点受 Mammon 影响，可以使用对应神力，并根据 Prosperity 生成 Greed 或 Decadence。", { image: "mammon-influence-icon.png", modifierChange: { natural: "", external: "Grow Influence 和 Smuggling 将其建立为 100%。与之绑定的贸易路线从地图移除时，绑定的 Influence 归零；Influence 存在时，每回合作用于本地及相邻地点。" } }),
   D("Greed", "繁荣度较低且处于 Mammon's Influence 作用范围内的 Society 会形成 Greed。它代表对 Gold 的饥渴和对富裕者的嫉妒；Greedy 统治者会厌恶 Decadent 统治者，并可能制造政治动乱或发动战争。", { image: "greed-icon.png", modifierChange: { natural: "每回合由本地或相邻的 Mammon's Influence 根据 Prosperity 调整。Prosperity 低于 95%时，Greed 按 2 × (1 + (1 − Prosperity) × 5) 增加；Prosperity 高于 105%时反向减少。强度上限为 100%；没有 Mammon's Influence 或地点不属于 Society 时归零。", external: "Mammon's Influence 在低 Prosperity 地点创建 Greed，并在高 Prosperity 变化时改为减少已有 Greed；同一地点不能同时靠本机制新建 Greed 和 Decadence。" } }),
   D("Decadence", "繁荣度较高且处于 Mammon's Influence 作用范围内的 Society 会形成 Decadence。它代表被财富腐化、失去人性，是 Call of Wealth 与 Plutomania 的前置条件。", { image: "decadence-icon.png", modifierChange: { natural: "每回合由本地或相邻的 Mammon's Influence 根据 Prosperity 调整。Prosperity 高于 105%时，Decadence 按 2 × ((Prosperity − 1) × 5 + 1) 增加；Prosperity 低于 95%时反向减少。强度上限为 100%；没有 Mammon's Influence 或地点不属于 Society 时归零。", external: "Mammon's Influence 在高 Prosperity 地点创建 Decadence，并在低 Prosperity 变化时改为减少已有 Decadence；同一地点不能同时靠本机制新建 Greed 和 Decadence。" } }),
   D("Sins Devoured", "Devour Sin 后留下的固定存在标记，表示该地点所属战争的罪恶已经被 Mammon 吞食，因此同一地点不能再次成为 Devour Sin 的目标。", { image: "all-is-mine.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
   D("Shadow Market", "这是地点修正，不是地点设施。每 1 点强度使所在地点的 Prosperity 降低 1 个百分点；它还会随着强度和地点 Infiltration 产生 Menace 与 Profile，并作为 Smuggling 的连接端。", { id: "shadow-market-modifier", image: "shadow-market.png", initialValue: "Create Shadow Market 创建时为 10。", modifierChange: { natural: "每回合 Menace 增加 0.05 × 强度 × (2 − Infiltration)。\n每回合 Profile 增加 0.02 × 强度 × (2 − Infiltration)。", external: "Create Shadow Market 设置强度为 10。\nExpand Shadow Market 每次 +25，最高 200。\nRaid Shadow Market 将强度乘以 75%，并把 Menace 与 Profile 清零。\nSmuggling 只把市场标记为已连接，不改变强度。" } }),
   D("Smuggling", "这是固定的地点修正，不是地点设施。它把 100% Infiltration 的城市连接到一个未连接的 Shadow Market，按该市场当前强度等额提高本地 Prosperity，并在本地建立 100% Mammon's Influence。", { id: "smuggling-modifier", image: "smuggling.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
   D("Armoured Populace", "由 Embrace of Metal 生成的地点修正。达到 100%后移除自身，并把当地人口转化为不可控制的 Armoured Populace 军队；如果当地人口不超过 3，则军队 HP 固定为 10。", { image: "armoured-populace-icon.png", initialValue: "Embrace of Metal 创建时为 1%。", modifierChange: { natural: "每回合 +2，达到 100%后触发转化。", external: "Embrace of Metal 创建该修正；Investigate Population 完成时移除该修正。" } })
  ] },
  { id: "locations", title: "地点与设施", items: [D("The Mountain", "Mammon 的初始据点。代码以 Set_TombOfGods 创建该地点并将其标记为山脉；它承载 The Mountain's Wealth、Raid Mountain 和所有最终进食。", { image: "mammon-mountain.png" })] },
  { id: "armies", title: "军队", items: [
   D("Lured Crowd", "Call of the Mountain 或 Call of Wealth 产生的不可控制、不会自然解散的流动军队。它会前往 The Mountain 或 Call of Wealth 指定的 Decadence 地点；英雄可以执行 Save Crowd，把部分人口劝回原地点。该军队没有代码定义的独立 Attack、Defence 或 Command 数值，且受到 0.3 倍伤害倍率。", { id: "lured-crowd-army", image: "lured-crowd.png", stats: "HP：Call of the Mountain 为来源聚居地人口的 25%（向下取整）；Call of Wealth 为被抽取聚居地人口的 33%（向下取整），但不会超过目标地点的剩余人口容量。前往 The Mountain 的过程中还会从符合条件的人类聚居地吸收最多约 25%人口，直接增加 HP。" }),
   D("Armoured Populace", "由 Armoured Populace 修正转化而来的不可控制、不会自然解散的流动军队。它会无视和平，自动执行 Raze Location，且在战斗或夷平过程中每回合让 Mammon 吞噬 2 点灵魂。该军队没有代码定义的独立 Attack、Defence 或 Command 数值。", { id: "armoured-populace-army", image: "armoured-populace-icon.png", stats: "HP：地点人口大于 3 时为转化前人口的 50%（向下取整），并从地点人口中扣除同样数量；人口不超过 3 时固定为 10。Attack、Defence、Command：代码中未定义该军队的独立固定数值。" })
  ] },
  { id: "religion", title: "宗教与教义", items: [D("Mammon's Influence", "Mammon 没有 Holy Order。其宗教与社会机制由贸易路线、Mammon's Influence、Greed、Decadence 和对财富的争夺组成；Greed 与 Decadence 是地点修正，不是宗教偏好。")] },
  { id: "hero-tasks", title: "英雄任务", items: [
   D("Save Crowd", "劝说前往 The Mountain 的 Lured Crowd 返回家园；成功救回的人口数量取决于 Lore 与 Command，剩余人群继续前往山脉。", { location: "<CrossReference name=\"Lured Crowd\" /> 当前所在的路线地点。", meta: "Command", statLine: "Complexity: 10　Profile: 60　Menace: 0　XP: 21", positiveTags: "Cooperation", negativeTags: "Gold", image: "refugees.png" }),
   D("Raid Mountain", "进入 The Mountain 掠夺 10%财富，并获得 100 Gold；同时降低山的 Menace 10。若财富归零，Mammon 立即失败。", { location: "<CrossReference name=\"The Mountain\" />。", meta: "Might", statLine: "Complexity: 15　Profile: The Mountain 的 Profile　Menace: The Mountain 的 Menace　Danger: 3　XP: 29", positiveTags: "Danger、Gold", negativeTags: "无", image: "mammon-influence-icon.png" }),
   D("Investigate Population", "调查并移除 <CrossReference name=\"Armoured Populace\" /> 修正；完成时移除该修正，并使它此前显示的 Profile 与 Menace 影响结束。", { location: "带有 <CrossReference name=\"Armoured Populace\" /> 修正的人类聚居地。", meta: "Lore", statLine: "Complexity: 60　Profile: Armoured Populace 强度　Menace: Armoured Populace 强度　XP: 82", positiveTags: "Cooperation", negativeTags: "无", image: "armoured-populace-icon.png" }),
   D("Raid Shadow Market", "袭击 <CrossReference name=\"Shadow Market\" />，将其当前强度乘以 75%，并把该市场的 Menace 与 Profile 清零；完成时增加 3 Profile。", { location: "带有 <CrossReference name=\"Shadow Market\" /> 修正的城市。", meta: "Might", statLine: "Complexity: 25　Profile: Shadow Market 的 Profile　Menace: Shadow Market 的 Menace　XP: 42", positiveTags: "Combat", negativeTags: "Gold", image: "shadow-market.png" })
  ] },
  { id: "challenges", title: "挑战", items: [
   D("Expand Shadow Market", "发展 <CrossReference name=\"Shadow Market\" />，每次把强度提高 25；强度越高，降低 Prosperity、产生 Menace 和 Profile 的幅度越大。完成时额外增加 5 Menace。", { location: "带有 <CrossReference name=\"Shadow Market\" /> 修正的城市。", meta: "Intrigue", statLine: "Complexity: 40　Profile: 50　Menace: 30　XP: 60", image: "shadow-market.png" })
  ] }
 ],
 relations: {
  "The Mountain's Wealth": { sources: [{ name: "开局建立", href: "#loop", meta: "Mammon 开局机制" }], effects: [{ name: "Raid Mountain", href: "#entry-raid-mountain" }, { name: "Gift from The Mountain", href: "#entry-gift-from-the-mountain" }, { name: "All is Mine", href: "#entry-all-is-mine" }] },
  "Mammon's Influence": { sources: [{ name: "Grow Influence", href: "#entry-grow-influence" }, { name: "Smuggling", href: "#entry-smuggling" }], effects: [{ name: "Greed", href: "#entry-greed" }, { name: "Decadence", href: "#entry-decadence" }] },
  "Plutomania": { effects: [{ name: "Plutomania（人物特质）", href: "#entry-plutomania-trait", meta: "人物特质" }] },
  "plutomania-trait": { sources: [{ name: "Plutomania", href: "#entry-plutomania", meta: "神力" }] },
  "Shadow Market": { sources: [{ name: "Create Shadow Market", href: "#entry-create-shadow-market", meta: "神力" }], effects: [{ name: "Expand Shadow Market", href: "#entry-expand-shadow-market", meta: "挑战" }, { name: "Raid Shadow Market", href: "#entry-raid-shadow-market", meta: "英雄任务" }, { name: "Smuggling", href: "#entry-smuggling", meta: "神力" }] },
  "shadow-market-modifier": { sources: [{ name: "Create Shadow Market", href: "#entry-create-shadow-market", meta: "神力" }], effects: [{ name: "Expand Shadow Market", href: "#entry-expand-shadow-market", meta: "挑战" }, { name: "Raid Shadow Market", href: "#entry-raid-shadow-market", meta: "英雄任务" }, { name: "Smuggling", href: "#entry-smuggling", meta: "神力" }] },
  "Smuggling": { effects: [{ name: "Smuggling（地点修正）", href: "#entry-smuggling-modifier", meta: "地点修正" }] },
  "smuggling-modifier": { sources: [{ name: "Smuggling", href: "#entry-smuggling", meta: "神力" }], effects: [{ name: "Mammon's Influence", href: "#entry-mammon-s-influence", meta: "地点修正" }] },
  "Greed": { sources: [{ name: "Mammon's Influence", href: "#entry-mammon-s-influence", meta: "地点修正" }], effects: [{ name: "Devour Sin", href: "#entry-devour-sin", meta: "神力" }] },
  "Decadence": { sources: [{ name: "Mammon's Influence", href: "#entry-mammon-s-influence", meta: "地点修正" }], effects: [{ name: "Call of Wealth", href: "#entry-call-of-wealth", meta: "神力" }, { name: "Plutomania", href: "#entry-plutomania", meta: "神力" }] },
  "Sins Devoured": { sources: [{ name: "Devour Sin", href: "#entry-devour-sin", meta: "神力" }] },
  "Armoured Populace": { sources: [{ name: "Embrace of Metal", href: "#entry-embrace-of-metal", meta: "神力" }], effects: [{ name: "Armoured Populace", href: "#entry-armoured-populace-army", meta: "军队" }, { name: "Investigate Population", href: "#entry-investigate-population", meta: "英雄任务" }] },
  "lured-crowd-army": { sources: [{ name: "Call of the Mountain", href: "#entry-call-of-the-mountain", meta: "神力" }, { name: "Call of Wealth", href: "#entry-call-of-wealth", meta: "神力" }], effects: [{ name: "Save Crowd", href: "#entry-save-crowd", meta: "英雄任务" }] },
  "armoured-populace-army": { sources: [{ name: "Armoured Populace", href: "#entry-armoured-populace", meta: "地点修正" }], effects: [{ name: "All is Mine", href: "#entry-all-is-mine", meta: "神力" }] },
 },
};
const preparedConfig = prepareGodConfig(config);
export default function MammonArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
