"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  id: "evil-beneath",
  name: "The Evil Beneath",
  number: "07",
  theme: "evil-beneath-theme",
  assetDir: "evil-beneath",
  background: "background.png",
  portrait: "portrait.png",
  flavour: "地底深处正在孕育某种噩梦。它比王国更庞大，以触手穿行洞穴与隧道，寻找可以吞噬、继续生长的血肉。",
  caption: "地下触手、吞食、地下意识与地表决战",
  maxTurns: "常规 500 回合",
  awaken: "吞噬进度达到 450",
  panic: "75%",
  finalAgents: "6",
  progressLabel: "吞噬进度",
  unlockMethod: "吞噬进度达到对应封印阈值",
  powerRecovery: "神力上限 = 已破封印数 + 1；每回合恢复 = 0.035 × max(3，神力上限) × 难度缩放。苏醒时神力补至当前上限，并将 Awareness of the Underground 设为 100%。",
  specialVictory: "无",
  core: [
    "开局在地下寻找没有 Society、没有 Settlement、非海洋且靠近人类聚居地的位置，建立 <CrossReference name=\"Elder Tomb\" />；那里生成 <CrossReference name=\"The Creature's Heart\" />（最大 HP 1000，开局 HP 1）、Supplicant，并从周边地下位置随机生成最多四条初始触手。",
    "用 <CrossReference name=\"Grow\" /> 从心脏向新的地下地点延伸触手；路径上的每个触手段都是 <CrossReference name=\"Tentacle Segment\" />，终点会留下 <CrossReference name=\"Evidence\" />。",
    "让地表产生 Death，再用 <CrossReference name=\"Bring the Food\" /> 或 <CrossReference name=\"Drag Bodies Under\" /> 把尸体转成 <CrossReference name=\"Feast for the God-Thing\" />，送到触手或心脏旁。",
    "用 <CrossReference name=\"Retract Tentacle\" /> 收回一条触手；沿线的 Tentacle Segment 会吞食 Feast，食物恢复心脏 HP，并按完整点数累计吞噬进度。",
    "吞噬进度达到对应封印阈值后解锁下一阶段。<CrossReference name=\"Devour Knowledge\" /> 和 <CrossReference name=\"Devour Worshipper\" /> 会直接推进吞噬进度；破封后 Grow 的最大距离随已破封印数增加。",
    "达到最终阈值后苏醒：Awareness of the Underground 变为 100%，心脏和触手每回合增加 Menace，地表军队会主动向地下进攻；必须在心脏被摧毁前清除围剿。",
  ],
  overviewExtra: {
    title: "地下意识与 Holy Order",
    text: "Awareness of the Underground 是 0%–100% 的全局发现度。Drag Bodies Under、Vile Secretions、Devastate、Sinkholes、Grab Ship、Withdraw Agent 等神力会按各自数值提高它；英雄完成 Investigate Evidence 后，Report Findings 到达所属社会还会提高 15% Awareness，并增加 5%世界恐慌。苏醒时直接提高到 100%。The Evil Beneath 没有 Holy Order。",
  },
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
    O("Retract Tentacle", 0, 0, "收回一条触手。沿线每个 <CrossReference name=\"Tentacle Segment\" /> 会吞食所在地全部 <CrossReference name=\"Feast for the God-Thing\" />；食物恢复 <CrossReference name=\"The Creature's Heart\" /> 的 HP，并按完整点数累计吞噬进度，随后解散这条触手。", "目标必须是某条触手末端的 Tentacle Segment 军队单位。", "tentacle.png"),
    O("Bring the Food", 0, 1, "从己方 Agent 所在、已 Infiltration 的地表地点搬走全部 Death，送到最近的 Tentacle Segment 并转成 Feast for the God-Thing。Agent 与触手相距的每个地点步都会额外增加 1% Awareness of the Underground 和 1%临时世界恐慌。", "目标必须是己方 commandable Agent，且 Agent 所在地的 Infiltration 大于 0%；地图上必须已有可接收食物的触手。", "bring-the-food.png"),
    O("Drag Bodies Under", 0, 1, "从目标地点抓走全部 Death，送到最近的 Tentacle Segment 或 The Creature's Heart，转成 Feast for the God-Thing；同时增加 1% Awareness of the Underground。食物到达触手时，之后仍需 Retract Tentacle 才会吞食。", "目标地点必须有至少 1 点 Death，且位于触手或心脏 4 格内。", "tentacle.png"),
    O("Devour Knowledge", 0, 1, "吞食一名己方 Agent、英雄或 Acolyte 的等级与 Arcane Knowledge。吞噬进度增加两者等级之和的 10 倍，并清空目标的等级、Arcane Knowledge 和经验。", "目标必须是己方 commandable Agent、英雄或 Acolyte；目标不会保留等级和 Arcane Knowledge。", "devour-knowledge.png"),
    O("Devour Worshipper", 0, 1, "杀死一名己方 Agent、英雄或 Acolyte，并把其等级与 Arcane Knowledge 等级之和的 20 倍加入吞噬进度；目标的 Arcane Knowledge 也会被清空。", "目标必须是己方 commandable Agent、英雄或 Acolyte；目标会死亡，不能撤回。", "devour-worshipper.png"),
    O("Grow", 1, 1, "从心脏向目标地点生长一条新触手。每个地下格的距离消耗心脏 2 HP，并在终点留下 25 强度的 <CrossReference name=\"Evidence\" />；触手可以搬运食物、施放其他地下神力和攻击军队。", "目标必须是地下、没有触手或心脏的地点；最大步行距离为已破封印数 + 1 格，并且心脏 HP 必须足够支付距离成本。", "tentacle.png"),
    O("Vile Secretions", 1, 1, "在目标聚居地施加 100% Plague，并在一条触手所在地创建 25 强度的 Evidence；英雄调查该 Evidence 后会继续提高 Awareness of the Underground。", "目标必须是地表的人类聚居地，不得是精灵城市；当地 Plague 不能已经达到 100%，且聚居地在触手或心脏 4 格内。", "vile-secretions.png"),
    O("Strength from Below", 2, 2, "让一名正在执行 Might 挑战的己方 Agent 立即获得 20 点挑战进度。", "目标必须是正在执行明确 Might 挑战的己方 commandable Agent；挑战不能是引导型或无限期挑战，且执行地点须在触手或心脏 4 格内。", "strength-from-below.png"),
    O("Withdraw Agent", 2, 1, "把一名地表己方 Agent 拉到最近的触手或心脏旁，使其开始隐藏，所有正在追击他的英雄都会丢失目标；同时增加 2% Awareness of the Underground。", "目标必须是地表己方 commandable Agent，且目标地点在触手或心脏 4 格内。", "withdraw-agent.png"),
    O("Devastate", 3, 2, "使目标聚居地额外增加 50% Devastation 与 25% Unrest，同时增加 5% Awareness of the Underground 和 1%临时世界恐慌。", "目标必须是地表人类聚居地，且位于触手或心脏 4 格内。", "devastate.png"),
    O("Sinkholes", 4, 2, "使目标地点起最多两条连接内、尚未参战的军队 Disrupted 5 回合。不会影响属于 The Dark 的军队或军队型单位，但会影响 Dark Empire 与兽人军队；同时增加 2% Awareness of the Underground。", "目标地点必须位于触手或心脏 4 格内。", "geomantic-support.png"),
    O("Grab Ship", 5, 3, "把海上的任意单位（包括军队）拖入深处并直接消灭，额外增加 5%世界恐慌和 5% Awareness of the Underground。", "目标必须是海上单位，且在触手或心脏 4 格内。", "grab-ship.png"),
    O("Defend the Heart", 5, 0, "命令一条触手与所在地所有人形军队（Dark Empire 除外）开战；若已有战斗，则把这些军队加入战斗。", "目标必须是 Tentacle Segment 军队单位。", "defend-the-heart.png"),
    O("Drag Down City", 6, 4, "把整个人类聚居地拖入地下，摧毁地点并杀死全部居民；额外增加 5%世界恐慌和 20% Awareness of the Underground。", "目标必须是地表人类聚居地，且位于触手或心脏 4 格内。", "drag-down-city.png"),
  ],
  supplicant: {
    image: "supplicant.png",
    stats: "Might 2，Lore 2，Intrigue 4，Command 3。",
    abilities: [
      D("Red Herring（Active）", "自动移除 Supplicant 所在地点的一个 Evidence；触发后进入 100 回合冷却。"),
      D("Creature of the Dark", "位于地下时 Might、Lore、Intrigue、Command 各获得 +1。"),
      D("Tunnel Dweller", "位于连接不同地图层级的地点（例如地下与地表交界）时 Might、Lore、Intrigue、Command 各获得 +1。"),
    ],
  },
  sections: [
    {
      id: "world-mechanics",
      title: "世界机制",
      items: [
        D("Awareness of the Underground", "全局 0%–100% 的地下发现度。它由 The Evil Beneath 的神力、Evidence 调查和 Report Findings 推进；达到 100% 时地下意识完全暴露。", { baseGame: true }),
        D("Surface Response", "The Evil Beneath 苏醒后，心脏与触手会持续增加 Menace，地表军队会主动向地下进攻；这是苏醒后的本体追杀机制，不是单独的军队单位。", { baseGame: true }),
      ],
    },
    {
      id: "location-modifiers",
      title: "地点修正",
      items: [
        D("Feast for the God-Thing", "由尸体和扭曲灵魂组成的食物储备，供触手和 The Creature's Heart 吞食。", { image: "mouth-heart.png", modifierChange: { natural: "每回合强度 −1。若所在地有 The Creature's Heart，则由心脏吞食并清空该修正。", external: "Bring the Food 或 Drag Bodies Under 把 Death 转为该修正；Retract Tentacle 收回触手时吞食沿线储备。" } }),
        D("Devastation", "游戏本体地点修正。战争、战斗或其他暴力会使地点遭受破坏。每 1 点强度使当地 Prosperity 减少 0.005，并使 Food 产出乘数按 1 − 强度/200 降低，最低为 0.1；每回合还会使当地单位受到 −0.5 的 Slow Healing 影响。达到 300% 时，尚未是 City Ruins 的聚居地会被摧毁。", { image: "devastation.png", baseGame: true, modifierChange: { external: "<CrossReference name=\"Devastate\" /> 使目标聚居地增加 50。" } }),
        D("Unrest", "游戏本体地点修正。居民因反对统治者而不满；强度达到 100% 时，当地 Security −4，每个相邻地点的 Unrest 达到 100% 时再额外 −1 Security；若这些相邻地点存在 Infiltration，每个还会再额外 −1 Security。每 1 点强度使当地 Prosperity 减少 0.005。Unrest 达到 300% 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150%；非人类聚居地不会保留该修正。", { image: "./vinerva/unrest.png", baseGame: true, modifierChange: { natural: "若未启用“统治者特质影响修正”，每回合减少 1；启用后则按当地统治者 Command × 0.5 每回合减少。\n若相邻地点的 Unrest 超过 50%，本地点每回合增加 1。\n非 SettlementHuman 地点每回合将其清零。", external: "<CrossReference name=\"Devastate\" /> 使目标聚居地增加 25。" } }),
        D("Evidence", "地下事件留下的线索。英雄可以执行 Investigate Evidence；该英雄任务完成后会生成 Report Findings。", { image: "evidence.png", initialValue: "由 Grow 或 Vile Secretions 创建时为 25。", modifierChange: { natural: "当强度低于 200 时，每回合强度 +1.5；该强度同时作为地点的 Profile 与 Menace。", external: "Grow 在触手终点创建 25 强度。\nVile Secretions 在一条触手所在地创建 25 强度。" } }),
      ],
    },
    {
      id: "locations",
      title: "地点与设施",
      items: [
        D("Elder Tomb", "开局在地下建立的本体墓穴地点。它是 The Creature's Heart、Supplicant 和初始触手的生成点。", { image: "elder-tomb.png", baseGame: true, id: "elder-tomb-location" }),
      ],
    },
    {
      id: "armies",
      title: "军队",
      items: [
        D("The Creature's Heart", "地下神躯的核心，是 The Evil Beneath 的失败条件：心脏死亡会立即判定 Humanity 已摧毁地下心脏并击败玩家。它不可控制；如果当前位置是地表人类聚居地，会自动执行 Raze Location。苏醒后每回合增加 2 Menace。", { image: "mouth-heart.png", stats: "HP：最大 1000；开局 1；每 7 回合 +1，最高恢复到 1000。Attack、Defence、Command：未找到独立固定数值。" }),
        D("Tentacle Segment", "触手路径上的不可控制地下军队单位。每个触手段属于一条触手；末端触手段可以作为 Retract Tentacle 的目标。它在地表人类聚居地会自动执行 Raze Location，苏醒后每回合增加 1 Menace；同一条触手的多个 Segment 共同构成一支军队。", { image: "tentacle.png", stats: "HP：每个 Segment 最大 10；军队 HP 为该触手所有 Segment 的 HP 总和。Attack、Defence、Command：代码中未定义该军队的独立固定数值。" }),
      ],
    },
    {
      id: "hero-tasks",
      title: "英雄任务",
      items: [
        D("Investigate Evidence", "在 Evidence 地点调查线索。完成后会自动生成 Report Findings；英雄只有活着回到所属社会，才会提高 Awareness of the Underground 和世界恐慌。", { location: "<CrossReference name=\"Evidence\" /> 所在的地点。", meta: "Lore", statLine: "Complexity: 25　Profile: Evidence 当前强度　Menace: Evidence 当前强度　XP: 42", positiveTags: "无", negativeTags: "无", image: "evidence.png" }),
      ],
    },
    {
      id: "automatic-tasks",
      title: "自动任务",
      items: [
        D("Report Findings", "Investigate Evidence 完成后自动生成的返回 Task。执行者到达自己的 homeLocation 后，世界恐慌增加 5%，Awareness of the Underground 增加 15%，随后任务结束；途中死亡或无法找到路径时不会触发报告效果。它不是 Challenge，Task_ReportFindings 和 Task 基类中都没有 Complexity、Profile、Menace、Danger、XP 这五项数值。", { location: "执行者所属社会的 homeLocation（本国聚居地）。", time: "按可达路径移动至 homeLocation；具体回合数取决于路径和单位移动力。", meta: "自动返回任务", image: "evidence.png" }),
      ],
    },
  ],
  relations: {
    "Feast for the God-Thing": { sources: [{ name: "Bring the Food", href: "#entry-bring-the-food", meta: "神力" }, { name: "Drag Bodies Under", href: "#entry-drag-bodies-under", meta: "神力" }], effects: [{ name: "Retract Tentacle", href: "#entry-retract-tentacle", meta: "神力" }] },
    "Devastation": { sources: [{ name: "Devastate", href: "#entry-devastate", meta: "神力" }] },
    "Unrest": { sources: [{ name: "Devastate", href: "#entry-devastate", meta: "神力" }] },
    "Evidence": { sources: [{ name: "Grow", href: "#entry-grow", meta: "神力" }, { name: "Vile Secretions", href: "#entry-vile-secretions", meta: "神力" }], effects: [{ name: "Investigate Evidence", href: "#entry-investigate-evidence", meta: "英雄任务" }] },
    "The Creature's Heart": { sources: [{ name: "开局建立", href: "#loop", meta: "开局机制" }], effects: [{ name: "Grow", href: "#entry-grow", meta: "神力" }, { name: "Retract Tentacle", href: "#entry-retract-tentacle", meta: "神力" }, { name: "Drag Down City", href: "#entry-drag-down-city", meta: "神力" }] },
    "Awareness of the Underground": { sources: [{ name: "Drag Bodies Under", href: "#entry-drag-bodies-under", meta: "神力" }, { name: "Vile Secretions", href: "#entry-vile-secretions", meta: "神力" }, { name: "Devastate", href: "#entry-devastate", meta: "神力" }, { name: "Sinkholes", href: "#entry-sinkholes", meta: "神力" }, { name: "Grab Ship", href: "#entry-grab-ship", meta: "神力" }, { name: "Withdraw Agent", href: "#entry-withdraw-agent", meta: "神力" }], effects: [{ name: "Report Findings", href: "#entry-report-findings", meta: "自动任务" }] },
    "Report Findings": { sources: [{ name: "Investigate Evidence", href: "#entry-investigate-evidence", meta: "英雄任务" }], effects: [{ name: "Awareness of the Underground", href: "#entry-awareness-of-the-underground", meta: "世界机制" }] },
  },
};

const preparedConfig = prepareGodConfig(config);

export default function EvilBeneathArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
