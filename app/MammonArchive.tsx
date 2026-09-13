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
 overviewExtra: { title: "山中财富与风险", text: "The Mountain's Wealth 以财富百分比表示，初始为 100%。吞噬人群会恢复财富、增加山的 Menace 和 Profile，同时给更多贸易扩张额度；英雄的 Raid Mountain 每次夺走 10%财富并降低 Menace 10，财富降到 0%会直接击败 Mammon。所有扩张都会提高被英雄发现和袭击的风险。" },
 specialVictory: "Mammon 通过吞噬受影响人口或使用 Devour Sin 吞食战争罪恶推进封印；当最终封印开启时立即获胜。The Mountain 的财富归零则失败。",
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Grow Influence", "Devour Sin", "Call of the Mountain", "Create Shadow Market", "Smuggling"] }, { seal: 1, progress: 15, agents: 2, reward: ["Distraction"] },
  { seal: 2, progress: 30, agents: 3, reward: [] }, { seal: 3, progress: 70, agents: 3, reward: ["Call of Wealth", "Gift from The Mountain"] },
  { seal: 4, progress: 200, agents: 4, reward: ["Plutomania"] }, { seal: 5, progress: 300, agents: 5, reward: ["Danger in The Mountain", "Embrace of Metal"] },
  { seal: 6, progress: 500, agents: 6, reward: ["All is Mine"] }, { seal: 7, progress: 800, agents: 6, reward: ["苏醒", "立刻胜利"] },
 ],
 powers: [
  O("Grow Influence", 0, 0, "沿连接 Mammon 山脉的贸易路线增加一个受影响地点，并消耗已吞食人群换来的扩张额度；每一步都会提高山的 Profile。", "目标必须是贸易路线上的人类聚居地，与已有 Influence 相邻，并且仍有扩张额度。", "grow-influence.png"),
  O("Devour Sin", 0, 0, "在贪婪达到 50% 的进攻战争首都吞噬 100 灵魂，推进封印、恢复山中财富，并留下 Sins Devoured。每个地点只能吞噬一次。", "目标必须是非 Dark Empire 的人类首都；其国家必须主动发动进攻战争，并有至少 50% Greed。", "devour-sin.png"),
  O("Call of the Mountain", 0, 1, "从受影响或邻近受影响的城市召集约 25% 人口，生成不可控制的 Lured Crowd。人群会沿路线前往 The Mountain，英雄可在途中执行 Save Crowd。", "目标为人口至少 10 的人类聚居地，且该地或邻地 Mammon's Influence 达到 90% 以上。", "lured-crowd.png"),
  O("Distraction", 1, 1, "让一个有 40 Gold 的己方 Agent 花掉这笔钱，打断所在地所有非玩家英雄的当前任务，并使其 Disrupted 3 回合。", "目标 Agent 必须有至少 40 Gold，且所在地点或邻地有 Mammon's Influence。", "distraction.png"),
  O("Create Shadow Market", 0, 1, "在已渗透的城市建立 Shadow Market。Agent 可以继续发展它，使地点 Prosperity 下降并增加 Greed；市场会产生 Menace 和 Profile，还能通过贸易路线连接并提高另一地点 Prosperity。", "必须是渗透度大于 0、尚无 Shadow Market 的城市。", "shadow-market.png"),
  O("Smuggling", 0, 1, "把一个 100% 渗透的城市连接到 5 格内尚未连接的 Shadow Market，建立 Smuggling 修正并立即加入 100% Mammon's Influence。", "目标城市必须 100% 渗透，5 格内要有未连接 Shadow Market，且自身没有 Shadow Market 或 Smuggling。", "smuggling.png"),
  O("Call of Wealth", 3, 1, "把附近一部分人口诱导到 Decadence 聚居地，形成带目标地的人群，使其人口重新填充到繁荣中心。", "目标为人口低于最大人口 75% 的人类聚居地，并带有 Decadence。", "refugees.png"),
  O("Plutomania", 4, 3, "让 Decadence 达到 100% 的统治者获得强烈 Gold 喜好，因追逐财富而作出增加 Unrest、引发内战或错误支出的决定。", "目标必须是带有 100% Decadence 的人类聚居地，且存在统治者。", "plutomania.png"),
  O("Gift from The Mountain", 3, 0, "给一个己方 Agent 150 Gold，但从 The Mountain's Wealth 中扣除 10%财富；财富不会低于 1%。", "目标必须是己方 Agent，且山中财富高于 10%。", "gift-from-mountain.png"),
  O("Danger in The Mountain", 5, 3, "让 Raid Mountain 的危险增加 5，最高额外危险为 15。英雄执行 Raid Mountain 时会随机承受 0 到危险值的伤害，触发伤害后危险会降低。", "必须施放在 The Mountain，且施放后危险不会超过 15。", "danger-in-mountain.png"),
  O("Embrace of Metal", 5, 5, "在城市建立 Armoured Populace。修正每回合增长 2%，到 100% 后把约一半人口转成不可控制的 Armoured Populace 军队；军队进攻或夷平时会反过来喂养 Mammon。", "目标必须是尚无 Armoured Populace 修正的人类聚居地。", "embrace-of-metal.png"),
  O("All is Mine", 6, 5, "在 The Mountain 开始最终进食。所有受 Mammon 影响的人类聚居地每回合平均失去 30%人口，封印按被吞食人口推进；山的 Menace 与 Profile 每回合各增加 1。", "必须施放在 The Mountain，且不能重复施放。", "all-is-mine.png"),
 ],

 supplicant: { image: "mammon-supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Priceless Gift", "获得该特质时，从物品池得到一件神器级物品。"), D("Wealth Creator", "身处 Mammon's Influence 内或邻近地点时，每回合获得 3 Gold。"), D("Wealth Begets Wealth", "获得该特质时立即得到 200 Gold。")] },
 sections: [
  { id: "traits", title: "人物特质", items: [D("Plutomania", "由 Mammon's Plutomania 赋予的强烈 Gold 喜好，会让统治者作出高风险的财富决策。")] },
  { id: "location-modifiers", title: "地点修正", items: [D("The Mountain's Wealth", "The Mountain 的财富储备；它还记录可扩张步数、Menace 和 Profile。", { image: "mammon-mountain.png", initialValue: "100%。", modifierChange: { natural: "未找到自然增加/减少规则。", external: "Raid Mountain 每次掠走 10%；财富降到 0%时 Mammon 失败。" } }), D("Mammon's Influence", "地点受 Mammon 影响时，允许使用 Mammon 神力，并提供 Greed / Decadence 的形成条件。", { image: "mammon-influence-icon.png", initialValue: "代码未找到固定初始值；强度达到 100%时生效。", modifierChange: { natural: "未找到自然增加/减少规则。", external: "由 Grow Influence 或 Smuggling 建立或强化；贸易路线断裂或地点易手时消失。" } }), D("Greed", "繁荣度低而受 Mammon 影响时形成。人物渴望财富并嫉妒富裕者；贪婪统治者可能在邻近 Decadence 国家时发动战争。", { image: "greed-icon.png", initialValue: "", modifierChange: { natural: "", external: "" } }), D("Decadence", "繁荣度高而受 Mammon 影响时形成。它把人口变成奢靡、失去人性的财富阶层，是 Call of Wealth 与 Plutomania 的前置。", { image: "decadence-icon.png", initialValue: "", modifierChange: { natural: "", external: "" } }), D("Sins Devoured", "Devour Sin 后留下的记录，表示该地点的贪婪战争罪恶已经被 Mammon 吞食，不能再次作为同一目标。", { image: "all-is-mine.png", initialValue: "", modifierChange: { natural: "", external: "" } }), D("Shadow Market", "游戏本体市场修正，可作为财富重分配网络的连接端。", { initialValue: "代码未找到固定初始值。", modifierChange: { natural: "未找到自然增加/减少规则。", external: "Agent 可发展它以降低 Prosperity、提高 Greed，也可将它连接到另一地点。" } }), D("Smuggling", "本体走私修正，把 100% 渗透城市接入未连接的 Shadow Market，并提供 Mammon's Influence 与 Prosperity。", { initialValue: "", modifierChange: { natural: "", external: "" } }), D("Armoured Populace", "由 Embrace of Metal 生成；达到阈值后把约一半人口转成 Armoured Populace 军队。", { image: "armoured-populace-icon.png", initialValue: "创建时初始值未找到。", modifierChange: { natural: "每回合增长 2%，达到 100%时触发人口转化。", external: "由 Embrace of Metal 生成。" } })] },
  { id: "locations", title: "地点与设施", items: [D("The Mountain", "Mammon 的初始据点，代码上使用 Tomb of Gods 的地点类型并标记为山脉。它承载 The Mountain's Wealth、Raid Mountain 和所有最终进食。", { image: "mammon-mountain.png" }), D("Shadow Market", "由神力建立的城市市场设施，既是降低 Prosperity 和制造 Greed 的起点，也是 Smuggling 的连接端。", { id: "shadow-market-location", image: "shadow-market.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Lured Crowd", "Call of the Mountain 或 Call of Wealth 产生的不可控制人群。它会沿路线前往目标；英雄可执行 Save Crowd 把其中一部分劝回。", { image: "lured-crowd.png" }), D("Armoured Populace", "由城市人口转化而来的不可控制军队，会无视和平直接夷平人类城市；每次战斗或夷平都会为 Mammon 提供额外吞噬进度。", { id: "armoured-populace-unit", image: "all-is-mine.png" })] },
  { id: "armies", title: "军队", items: [D("Armoured Populace Army", "不可控制、不会自然解散的黄金自动人军队。它优先攻击人类聚居地，进攻与夷平都会让 Mammon 吞噬额外灵魂，并推进封印。", { image: "armoured-populace-icon.png", stats: "HP：按转化后的军队规模计算；具体换算值未找到。" })] },
  { id: "religion", title: "宗教与教义", items: [D("Mammon's Influence", "Mammon 没有独立 Holy Order；他的宗教表达为贸易网络、财富诱惑与 Greed / Decadence 的地点循环。受影响统治者会根据繁荣度分化成贪婪或颓败两类，并互相敌视。"), D("Greed 与 Decadence 的人物偏好", "Greedy 统治者会厌恶 Decadent 统治者：如果自己是公爵，会在颓败君主下制造政治动乱；如果两国接壤，可能直接发动战争。Mammon 可以把这种战争转化为 Devour Sin 的资源。", { meta: "宗教与社会机制" })] },
  { id: "hero-tasks", title: "英雄任务", items: [D("Save Crowd", "劝说前往 The Mountain 的 Lured Crowd 返回家园；成功救回的人口数量取决于 Lore 与 Command，剩余人群继续前往山脉。", { location: "Lured Crowd 当前所在的路线地点。", meta: "Command", statLine: "Complexity: 10　Profile: 60　Menace: 50　XP: 21", positiveTags: "Cooperation", negativeTags: "Gold" }), D("Raid Mountain", "进入 The Mountain 掠夺 10%财富，并获得 100 Gold；同时降低山的 Menace 10。若财富归零，Mammon 立即失败。", { location: "The Mountain。", meta: "Might", statLine: "Complexity: 15　Profile: 山的 Profile　Menace: 山的 Menace　Danger: 3　XP: 29", positiveTags: "Danger、Gold", negativeTags: "无" }), D("Investigate Population", "调查并移除 Armoured Populace 修正；任务本身的 Profile 与 Menace 随该修正当前强度变化。", { location: "带有 Armoured Populace 修正的人类聚居地。", meta: "Lore", statLine: "Complexity: 60　Profile: 装甲人口强度　Menace: 装甲人口强度　XP: 84", positiveTags: "Cooperation", negativeTags: "无" })] },
 ],
 relations: { "The Mountain's Wealth": { sources: [{ name: "开局建立", href: "#loop", meta: "Mammon 开局机制" }], effects: [{ name: "Raid Mountain", href: "#entry-raid-mountain" }, { name: "All is Mine", href: "#entry-all-is-mine" }] }, "Mammon's Influence": { sources: [{ name: "Grow Influence", href: "#entry-grow-influence" }, { name: "Smuggling", href: "#entry-smuggling" }], effects: [{ name: "Greed", href: "#entry-greed" }, { name: "Decadence", href: "#entry-decadence" }] } },
};
const preparedConfig = prepareGodConfig(config);
export default function MammonArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
