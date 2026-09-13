"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "evil-beneath", name: "The Evil Beneath", number: "07", theme: "evil-beneath-theme", assetDir: "evil-beneath", background: "background.png", portrait: "portrait.png", 
 flavour: "地底深处正在孕育某种噩梦。它比王国更庞大，以触手穿行洞穴与隧道，寻找可以吞噬、继续生长的血肉。",
 caption: "地下触手、吞食、地下意识与地表决战", maxTurns: "常规 500 回合", awaken: "吞噬进度达到 450", panic: "75%", finalAgents: "6", progressLabel: "吞噬进度", unlockMethod: "不按回合解锁：吞食 Feast for the God-Thing、Devour Knowledge 或 Devour Worshipper",
 powerRecovery: "神力上限 = max(3，已破封印数 + 1)；神力恢复 = 0.035 × 神力上限 × 难度缩放。苏醒时神力直接补满，并把 Awareness of the Underground 设为 100%。",
 specialVictory: "无",
 core: [
  "开局在地下选择无社会、靠近人类聚居地的位置建立 <CrossReference name=\"Elder Tomb\" />，生成 <CrossReference name=\"The Creature's Heart\" />，并向周围伸出最多四条初始触手。",
  "先用 <CrossReference name=\"Grow\" /> 把触手延伸到新的地下地点；触手经过的位置会留下 <CrossReference name=\"Evidence\" />，终点还会被英雄调查。",
  "让地表产生 Death，再用 <CrossReference name=\"Bring the Food\" /> 或 <CrossReference name=\"Drag Bodies Under\" /> 把尸体集中到触手或心脏旁，转成 <CrossReference name=\"Feast for the God-Thing\" />。",
  "用 <CrossReference name=\"Retract Tentacle\" /> 收回一条触手，吞食沿线所有 Feast；食物转成心脏 HP，并按整数累计推进封印。",
  "破封后触手可延伸得更远，心脏 HP 还能支持更多触手；中后期用 <CrossReference name=\"Devastate\" />、<CrossReference name=\"Grab Ship\" /> 和 <CrossReference name=\"Drag Down City\" /> 把破坏扩展到地表。",
  "最终苏醒时地下意识立即显露，心脏与所有触手每回合增加 Menace，地表军队会主动下来围剿；必须在心脏被摧毁前清除人类威胁。",
 ],
 overviewExtra: { title: "地下意识与发现度", text: "Awareness of the Underground 是全局 0%–100% 的发现度。神力带来的 Awareness 增长会让英雄逐渐发现地下路径；Evidence 被调查并由英雄活着报告后还会额外增加 15%。苏醒时直接变为 100%，人类不再受地下地图隔离限制。" },
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Retract Tentacle", "Bring the Food", "Drag Bodies Under", "Devour Knowledge", "Devour Worshipper"] },
  { seal: 1, progress: 15, agents: 2, reward: ["Grow", "Vile Secretions"] },
  { seal: 2, progress: 30, agents: 3, reward: ["Strength from Below", "Withdraw Agent"] },
  { seal: 3, progress: 70, agents: 3, reward: ["Devastate"] },
  { seal: 4, progress: 200, agents: 4, reward: ["Sinkholes"] },
  { seal: 5, progress: 300, agents: 5, reward: ["Grab Ship", "Defend the Heart"] },
  { seal: 6, progress: 450, agents: 6, reward: ["Drag Down City", "苏醒"] },
 ],
 powers: [
  O("Retract Tentacle", 0, 0, "收回一条触手。沿线每个 Tentacle Segment 会吞食所在地全部 Feast for the God-Thing；每点食物增加心脏 HP，并按整数推进吞噬进度，随后解散这条触手。", "目标必须是某条触手末端的 Tentacle Segment 军队单位。", "tentacle.png"),
  O("Bring the Food", 0, 1, "从己方 Agent 所在、已渗透的地表地点搬走全部 Death，送到最近的触手或心脏并转成 Feast for the God-Thing。Agent 与触手相距每格都会额外增加 1%地下意识和临时世界恐慌。", "必须对位于已渗透地点的己方 Agent 施放。", "bring-the-food.png"),
  O("Drag Bodies Under", 0, 1, "从有至少 1% Death 的地点抓走全部尸体，送到最近触手或心脏旁，转成 Feast for the God-Thing；同时增加 1%地下意识。之后仍需 Retract Tentacle 才会真正吞食。", "目标地点必须有至少 1% Death，且处在触手或心脏 4 格内。", "tentacle.png"),
  O("Devour Knowledge", 0, 1, "吞食一名受控 Agent、英雄或 Acolyte 的经验与 Arcane Knowledge。封印进度增加其等级与 Arcane Knowledge 等级之和的 10 倍，同时清空全部等级、知识和经验。", "目标必须是你控制的 Agent、英雄或 Acolyte。", "devour-knowledge.png"),
  O("Devour Worshipper", 0, 1, "杀死一名受控 Agent、英雄或 Acolyte，并把其等级与 Arcane Knowledge 等级之和的 20 倍加入封印进度；Arcane Knowledge 也会被清空。", "目标必须是你控制的 Agent、英雄或 Acolyte；目标会死亡，不能撤回。", "devour-worshipper.png"),
  O("Grow", 1, 1, "从心脏向目标地点生长一条新触手。目标地点不能已有触手或心脏；每个地下格的距离消耗心脏 2 HP，并在终点留下 Evidence。触手可用来搬运食物、施放其他地下神力和攻击军队。", "目标必须是地下、没有触手的地点；最大距离为已破封印数 + 1 格，并且心脏 HP 足够支付距离成本。", "tentacle.png"),
  O("Vile Secretions", 1, 1, "在靠近触手或心脏的人类地表聚居地直接施加 100% Plague，并在触手所在地增加 1 Evidence；英雄调查该 Evidence 时会继续提高地下意识。", "目标必须是地表人类聚居地，不得是精灵城市；瘟疫不能已经超过 100%，地点必须在触手或心脏 4 格内。", "vile-secretions.png"),
  O("Strength from Below", 2, 2, "让一名正在执行 Might 挑战的 Agent 立即获得 20 点挑战进度。它不改变挑战类型，也不能用于休息、无限时任务或持续施法。", "目标必须是正在执行明确 Might 挑战的己方 Agent；施放地点须在触手或心脏 4 格内。", "strength-from-below.png"),
  O("Withdraw Agent", 2, 1, "把一名地表 Agent 拉到最近的触手或心脏旁，使其开始隐藏，所有正在追击他的英雄都会丢失目标；同时增加 2%地下意识。", "目标必须是地表己方 Agent，施放地点须在触手或心脏 4 格内。", "withdraw-agent.png"),
  O("Devastate", 3, 2, "使目标聚居地额外增加 50% Devastation 与 25% Unrest，同时增加 5%地下意识和 1%临时世界恐慌。", "目标必须是地表人类聚居地，且在触手或心脏 4 格内。", "devastate.png"),
  O("Sinkholes", 4, 2, "使目标附近最多两条连接内、尚未参战的军队 Disrupted 5 回合。不会影响属于 The Dark 的军队或军队型单位，但会影响 Dark Empire 与兽人军队；并增加 2%地下意识。", "目标地点必须位于触手或心脏 4 格内，并且至少能找到可受影响的军队。", "geomantic-support.png"),
  O("Grab Ship", 5, 3, "把海上的任意单位（包括军队）拖入深处并直接消灭，额外增加 5%世界恐慌和 5%地下意识。", "目标必须是海上单位，且在触手或心脏 4 格内。", "grab-ship.png"),
  O("Defend the Heart", 5, 0, "命令一条触手与所在地所有人形军队（Dark Empire 除外）开战；若已有战斗，则把这些军队加入战斗。它本身不消耗神力。", "目标必须是 Tentacle Segment 军队单位。", "defend-the-heart.png"),
  O("Drag Down City", 6, 4, "把整个人类聚居地拖入地下，摧毁地点并杀死全部居民；额外增加 5%世界恐慌和 20%地下意识。", "目标必须是地表人类聚居地，且在触手或心脏 4 格内。", "drag-down-city.png"),
 ],
 supplicant: { image: "supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Red Herring（Active）", "自动移除 Supplicant 所在地点的一个 Evidence；触发后进入 100 回合冷却。"), D("Creature of the Dark", "位于地下时四项属性各获得 +1。"), D("Tunnel Dweller", "位于连接不同地图层级的地点（例如地表与地下交界）时四项属性各获得 +1。" )] },
 sections: [
  { id: "world-mechanics", title: "世界机制", items: [D("Awareness of the Underground", "全局 0%–100% 的地下发现度。英雄跨层移动、调查 Evidence、报告发现，以及多个地下神力都会提高它；达到 100% 后，人类可以不受地图层级限制地追踪地下单位。The Evil Beneath 没有独立 Holy Order；苏醒时地下意识会被直接设为 100%。", { baseGame: true })] },
  { id: "location-modifiers", title: "地点修正", items: [D("Feast for the God-Thing", "由尸体和扭曲灵魂组成的食物储备。心脏在所在地会自动吞食，其他地点必须让触手经过并在 Retract Tentacle 时收回。", { image: "mouth-heart.png", initialValue: "具体初始值未找到。", modifierChange: { natural: "每回合缓慢衰减。", external: "由 Bring the Food、Drag Bodies Under 等机制提供；心脏在所在地自动吞食，Retract Tentacle 可收回其他地点的储备。" } }), D("Evidence", "地下事件留下的线索；英雄会执行 Investigate Evidence，完成后回到本国报告，使世界恐慌增加 5%、地下意识增加 15%。", { image: "evidence.png", initialValue: "具体初始值未找到。", modifierChange: { natural: "缓慢增加自身 Profile 和 Menace。", external: "由 Grow、Vile Secretions 或其他地下事件留下。" } })] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "开局在地下建立的本体墓穴地点。它是 The Creature's Heart、Supplicant 和初始触手的生成点；其地点类型仍是游戏本体的 Elder Tomb。", { image: "elder-tomb.png", baseGame: true, id: "elder-tomb-location" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("The Creature's Heart", "地下神躯的核心。吞食 Feast 会恢复 HP；苏醒后每回合增加 2 Menace，并会主动夷平所在的人类聚居地。它被杀死会立即导致玩家失败。", { image: "mouth-heart.png", stats: "最大 HP 1000；开局 HP 1" }), D("Tentacle Segment", "由 God Megafauna 生成的不可控制地下军队单位。每条触手由多个 Segment 串联，末端 Segment 可被 Retract Tentacle 收回；苏醒后每回合增加 1 Menace。", { image: "tentacle.png", stats: "最大 HP 10" }), D("God Megafauna", "承载心脏、触手和地下地图细胞的巨型生物容器；Grow 会向它添加新的触手路径，Retract Tentacle 会移除整条路径。", { image: "tentacle.png" })] },
  { id: "armies", title: "军队", items: [D("Tentacle Segment Army", "每个触手段都是一支不可控制的 The Dark 军队。它们会在地表聚居地自动执行夷平；Defend the Heart 可让它们主动与所在地的人形军队交战。", { image: "tentacle.png", stats: "HP：每个 Tentacle Segment 最大 10。" }), D("Surface Response", "苏醒后地表军队会主动向地下进攻；心脏和触手不能被命令撤退，必须利用触手战斗、Sinkholes 和地形把围剿部队逐一消灭。", { baseGame: true, stats: "HP：不适用；这是地表响应机制，不是单独军队单位。" })] },
  { id: "hero-tasks", title: "英雄任务", items: [D("Investigate Evidence", "英雄在 Evidence 地点进行 Lore 挑战。完成后会开始 Report Findings；只要英雄活着回到本国，世界恐慌增加 5%，地下意识增加 15%。", { location: "有 Evidence 地点修正的地点。", meta: "Lore / 本体机制", statLine: "Complexity: 25　Profile: Evidence 当前值　Menace: 0　XP: 42", positiveTags: "无", negativeTags: "无", image: "evidence.png" }),
    D("Report Findings", "调查 Evidence 后生成的返回任务。英雄需要回到自己的本国；到达后增加 5%世界恐慌并使地下意识增加 15%。如果英雄在途中死亡，报告不会发生，但死亡地点可能留下新的 Evidence。", { location: "执行者所属国家的聚居地；这是从 Evidence 地点返回本国的任务。", meta: "本体任务", statLine: "Complexity: 移动距离　Profile: Evidence 当前值　Menace: 0　XP: 按移动距离计算", positiveTags: "未找到", negativeTags: "未找到" })] }
 ],
 relations: {
  "Feast for the God-Thing": { sources: [{ name: "Bring the Food", href: "#entry-bring-the-food" }, { name: "Drag Bodies Under", href: "#entry-drag-bodies-under" }], effects: [{ name: "Retract Tentacle", href: "#entry-retract-tentacle" }] },
  "Evidence": { sources: [{ name: "Grow", href: "#entry-grow" }, { name: "Vile Secretions", href: "#entry-vile-secretions" }], effects: [{ name: "Investigate Evidence", href: "#entry-investigate-evidence" }] },
  "The Creature's Heart": { sources: [{ name: "开局建立", href: "#loop", meta: "开局机制" }], effects: [{ name: "Grow", href: "#entry-grow" }, { name: "Drag Down City", href: "#entry-drag-down-city" }] },
  "Awareness of the Underground": { sources: [{ name: "苏醒", href: "#seals", meta: "最终封印" }], effects: [{ name: "Report Findings", href: "#entry-report-findings" }] }
 }
};
const preparedConfig = prepareGodConfig(config);
export default function EvilBeneathArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
