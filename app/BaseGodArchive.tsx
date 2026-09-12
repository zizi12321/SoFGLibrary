"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Eye, PanelLeftClose, PanelLeftOpen, Shield } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";
import { GodMark } from "../components/GodMark";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type ArchiveGodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps" | "kishi" | "living-void" | "chandalor";
type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
type DetailItem = { name: string; text: string; image?: string; seal?: number; meta?: string; statLine?: string; location?: string; preferenceText?: string; limit?: string; id?: string; baseGame?: boolean };
type PowerItem = { name: string; seal: number; cost: string | number; icon?: string; effect: string; limit: string; id?: string };
type SealItem = { seal: number; progress: number; agents: number; reward: string[] };
type SectionConfig = { id: string; title: string; items: DetailItem[]; media?: boolean };
type GodConfig = {
  id: "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps"; name: string; number: string; theme: string; assetDir: string; background: string; portrait: string; supplicant?: string;
  flavour: string; caption: string; maxTurns: string; awaken: string; panic: string; finalAgents: string; progressLabel: string; unlockMethod: string; powerRecovery: string;
  core: string[]; overviewExtra?: { title: string; text: string }; specialVictory?: string; seals: SealItem[]; powers: PowerItem[]; initialAbilities: DetailItem[]; initialStats: string; drawCards?: SectionConfig; sections: SectionConfig[];
  relations?: Record<string, { sources?: Relation[]; effects?: Relation[] }>;
};
const O = (name: string, seal: number, cost: string | number, effect: string, limit: string, icon?: string): PowerItem => ({ name, seal, cost, effect, limit, icon });
const D = (name: string, text: string, extra: Partial<DetailItem> = {}): DetailItem => ({ name, text, ...extra });

const ophanim: GodConfig = {
 id: "ophanim", name: "Ophanim, The Divine Beyond", number: "04", theme: "ophanim-theme", assetDir: "ophanim", background: "background.png", portrait: "portrait.png", supplicant: "ophanim-supplicant.png",
 flavour: "Ophanim 是披着神圣光辉的完美主义神祇。它用 Faith 把恐惧中的人类纳入秩序，再把 Faith 推到极限，将城市改造成没有自由意志的神权机器。",
 caption: "Faith、Doubt 与神权国家", maxTurns: "常规 500 回合", awaken: "第 400 回合", panic: "75%", finalAgents: "5", progressLabel: "回合", unlockMethod: "常规回合解锁",
 powerRecovery: "常规恢复：0.035 ×（已破封印数 + 1）× 难度缩放；Sap Lifeforce 处于 −1 / −2 时，源码额外增加 0.02 / 0.04 神力每回合（即参数增益 +2% / +4%）。神力未满时，每座对应神庙还会使所在城市每回合减少 2 / 4 人口。",
 core: [
  "用 <CrossReference name=\"Start Faith\" /> 在有渗透的城市建立 <CrossReference name=\"Ophanim's Faith\" />，并利用阴影、邻近 Faith 与恐慌让信仰扩张。",
  "让 Faith 超过 150% 后用 <CrossReference name=\"Theocracy\" /> 接管国家；受控国家会让 Faith 增长更快，并可被组织成对外发动战争的工具。",
  "Faith 达到 300% 会把城市变成完美神权城市，压制自由意志和动乱；但邻近的低 Faith 人口会看见这种变化并积累 <CrossReference name=\"Ophanim's Doubt\" />。",
  "用 <CrossReference name=\"Root out Doubters\" />、<CrossReference name=\"Sectarian Violence\" /> 或 Holy Order 的 <CrossReference name=\"Holy: Inquisition\" /> 清除 Doubt；放任 Doubt 达到 100% 会向邻地蔓延。",
  "用 <CrossReference name=\"Crusade\" />、<CrossReference name=\"Empower Slaves\" /> 和 <CrossReference name=\"Perfect Servant\" /> 把完美城市与 Faith 转化成军力和新 Agent。",
 ],
 overviewExtra: { title: "Faith 与 Doubt 的循环", text: "Faith 会降低所在地 Shadow，并从阴影带来的 Menace、邻近 Faith 和神权控制中获得增长；Ruler Awareness、Doubters 和低 Faith 邻城会拖慢它。高 Faith 城市让相邻低 Faith 人口看到自己的未来，逐步生成 Doubt；Doubt 降低 Faith，达到 100% 后向邻地传播。" },
 seals: [
  { seal: 0, progress: 0, agents: 1, reward: ["Start Faith", "Sleepless Labour"] }, { seal: 1, progress: 35, agents: 2, reward: ["Peace and Order", "Swift of Foot"] },
  { seal: 2, progress: 70, agents: 2, reward: ["Theocracy", "Declare Heretic"] }, { seal: 3, progress: 105, agents: 3, reward: ["Call to Serve", "Excise Doubt"] },
  { seal: 4, progress: 140, agents: 4, reward: ["Crusade"] }, { seal: 5, progress: 210, agents: 5, reward: ["Empower Slaves"] },
  { seal: 6, progress: 280, agents: 5, reward: ["Perfect Servant"] }, { seal: 7, progress: 400, agents: 5, reward: ["Smite", "苏醒"] },
 ],
 powers: [
  O("Start Faith", 0, 0, "在有渗透的人类聚居地建立 1% Ophanim's Faith。Faith 会在回合结算中继续增长，并开始影响当地 Shadow 与安全。", "必须是人类聚居地，且渗透度大于 0%。", "start-faith.png"),
  O("Sleepless Labour", 0, 1, "让一名正在执行数值型挑战的己方 Agent 立即获得 20 点进度，但承受 2 HP 伤害；升级回合会正常治疗。", "目标必须正在执行有明确进度的挑战，不能用于休息、无限期任务或引导型法术；Agent HP 必须大于 2。", "sleepless-labour.png"),
  O("Peace and Order", 1, 2, "让已有 Faith 增加 50%，同时最多修复 40% Devastation。它用战争后的秩序恢复把人口重新纳入 Ophanim 的信仰。", "地点必须已有 Ophanim's Faith，且 Devastation 大于 20%。", "peace-and-order.png"),
  O("Swift of Foot", 1, 1, "让一个已经移动过的己方 Agent 再移动一次。", "目标必须是本回合已经移动过的己方 Agent。", "swift-of-foot.png"),
  O("Theocracy", 2, 0, "让 Faithful 在城市中起事并接管国家。Faith 低于 100% 的地点会反对；接管后 Faith 增长更快，并会增加 20% 临时世界恐慌。", "目标是 Faith 超过 150% 的人类或精灵城市，且其国家尚未被 Ophanim 接管；不能目标为 The Alliance。", "theocracy.png"),
  O("Declare Heretic", 2, 1, "杀死带有 Infamous 的 Agent，移除当地及邻近城市统治者的 Awareness，并清除目标地点的 Doubt；同时减半临时世界恐慌。", "目标必须是 Infamous Agent，且目标或相邻地点存在 Awareness 大于 0 的统治者。", "declare-heretic.png"),
  O("Call to Serve", 3, 3, "在 Ophanim Holy Order 的城市中召集一名 Acolyte。新 Acolyte 可以建造 Temple，并按照教义自动执行宗教任务。", "必须目标为拥有 Ophanim Holy Order 且仍有 recruitment point 的人类聚居地。", "call-to-serve.png"),
  O("Excise Doubt", 3, 0, "命令一个受控国家的军队夷平 Faith 超过 150% 的目标城市，以彻底移除 Doubt。代价是牺牲整座城市的人口和领地。", "目标必须是 Ophanim 控制国家中 Faith 超过 150% 的人类城市，并且有可用、没有当前请求的军队。", "excise-doubt.png"),
  O("Crusade", 4, 0, "让所有已经转化为 Ophanim 神权国家的社会向目标国家宣战；已经在战争中的国家不会重复宣战。", "必须目标为一个社会。", "crusade.png"),
  O("Empower Slaves", 5, 2, "治疗一支来自完美城市的 Ophanim 人类军队，恢复其缺失 HP 的 50%。", "目标必须是来自已完美城市的军队。", "unit_ophanim.png"),
  O("Perfect Servant", 6, 4, "把完美城市中的英雄直接接管为 Agent。它消耗 recruitment point，并把英雄纳入 Ophanim 的 Agent 名额。", "目标必须是完美城市中的英雄，需要 recruitment point 和空余 Agent 位。", "perfect-servant.png"),
  O("Smite", 7, 7, "从天空降下 Holy Fire，彻底摧毁目标城市，并可能连带摧毁三格内的其他地点。", "可以对任意地点施放。", "smite.png"),
 ],
 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Duality（shadow / faith）", "完成 Infiltrate 时交替产生两种结果：一回合给当地增加 30% Shadow，下一回合给 Ophanim's Faith 增加 20%；之后继续交替。"), D("Leader of the Faith", "与 Ophanim's Faith 同处一地时，每回合额外推动 Faith 增长 2%。"), D("Inquisitor", "与 Ophanim's Doubt 同处一地时，每回合降低 Doubt 3%，抵消其通常增长后的净变化约为 −1%；代价是每回合损失 1 人口，人口耗尽会毁灭城市。")],

 sections: [
  { id: "traits", title: "人物特质", items: [D("Preacher", "完成 Infiltrate 时自动建立或强化 Ophanim's Faith，初始增加 20% Faith。")] },
  { id: "location-modifiers", title: "地点修正", items: [D("Ophanim's Faith", "人口逐渐信仰 Ophanim。Faith 会因阴影带来的 Menace、邻近 Faith、神权控制而增长；它降低当地 Shadow，并在超过 300% 时触发城市完美化。Faith 同时降低安全，且与 Doubt 互相拉扯。", { image: "start-faith.png" }), D("Ophanim's Doubt", "由低 Faith 人口目睹邻近完美城市而产生。它降低 Faith，超过 100% 后会向邻地传播；必须用 Root out Doubters、Sectarian Violence 或 Inquisition 清除。", { image: "ophanim-doubt.png" }), D("Festering Doubt", "Paranoid Society 教义下的延迟状态。它会先存在 5 回合，之后才转成真正的 Ophanim's Doubt；期间仍会带来繁荣度惩罚。", { image: "ophanim-doubt.png" }), D("Perfect City", "Faith 达到 300% 后的完美城市状态：消灭自由意志、压制 Unrest，并成为 Ophanim 军队与 Perfect Servant 的来源。", { image: "perfect-city.png" })] },
  { id: "locations", title: "地点与设施", items: [D("Ophanim's Holy Order", "Ophanim 开局在 Tomb of Gods 建立的 Holy Order，名称为 Ophanim's Faith。它不使用普通外交，能建立 Temple、召集 Acolyte，并通过教义把 Faith 变成社会控制力。", { image: "holy-ophanim.png" }), D("Ophanim Theocracy", "Theocracy 接管后形成的国家形态。Faith 增长更快，可以接受 Crusade 命令，并将完美城市的军队变成 Ophanim 的战争工具。", { image: "theocracy.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Ophanite Acolyte", "Call to Serve 召集的宗教 Agent，可以建造 Temple，并根据 Ophanim 教义自动执行宗教任务。", { image: "ophanim-supplicant.png" }), D("Perfect Servant", "来自 Perfect City 的英雄型 Agent；它不是独立兵种，而是通过 Perfect Servant 神力把原英雄转化为玩家 Agent。", { id: "perfect-servant-unit", image: "perfect-servant.png" })] },
  { id: "armies", title: "军队", items: [D("Ophanim Army", "来自 Perfect City 的军队。Empower Slaves 可以治疗它；Crusade 会让 Ophanim 控制的国家主动对外宣战，军队因此成为 Faith 扩张和清除 Doubt 的主要工具。", { image: "unit_ophanim.png" })] },
  { id: "religion", title: "宗教与教义", items: [D("Ophanim's Faith", "该 Holy Order 开局预设 Temple Builders 与 Preachers 为正向，Alignment 为 −3，并插入三项特殊教义：Paranoid Society、Sap Lifeforce、Inquisitors。它信仰玩家神祇，不能使用普通外交。", { id: "ophanim-faith-religion" }), D("Paranoid Society", "影响 Faith 与 Doubt 的传播逻辑；当状态为负时，Temple 附近更容易把新 Doubt 延迟为 Festering Doubt。"), D("Sap Lifeforce", "源码状态为 −1 或 −2 时，每回合神力恢复分别额外增加 0.02 或 0.04；只要神力未满，每座对应神庙的城市每回合减少 2 或 4 人口，人口不足 2 时城市会直接陷入废墟。"), D("Inquisitors", "决定 Holy: Inquisition 是否可用；Elder 对齐状态允许 Acolyte 以宗教任务清除 Doubt，但会制造人口损失与 Death。", { meta: "宗教任务：Holy: Inquisition" })] },
  { id: "religious-tasks", title: "宗教任务", items: [D("Holy: Inquisition", "Ophanim Holy Order 成员可最多降低 50 Doubt；每清除 4 点 Doubt 会损失约 1 人口并增加 Death。", { location: "Ophanim Holy Order 的 Temple 所在人类聚居地。", meta: "Command / Lore", statLine: "Complexity: 20　Profile: 50　Menace: 0　XP: 36", preferenceText: "只有 Inquisitors 教义处于 Elder 对齐状态的 Holy Order 成员可以执行。" })] },
  { id: "challenges", title: "挑战", items: [D("Root out Doubters", "在 Ophanim 控制的社会中把 Doubt 降低最多 60%，但每清除 5 点 Doubt 会损失约 1 人口，并增加 Death。完成时额外增加 5 Menace。", { location: "Ophanim 控制社会内、存在 Doubt 的人类聚居地。", meta: "Command", statLine: "Complexity: 25　Profile: 50　Menace: 50　XP: 42", preferenceText: "厌恶 Cruelty 或 Discord 的英雄不愿执行；这是带有清洗性质的任务。" }), D("Sectarian Violence", "在 Ophanim 未控制的社会中把 Doubt 降低最多 40%，同时减少同量 Faith，按比例增加 Unrest 和 Death；完成时增加 15 Menace、10 Profile。", { location: "Ophanim 尚未控制、存在 Doubt 的人类聚居地。", meta: "Intrigue", statLine: "Complexity: 50　Profile: 50　Menace: 50　XP: 72", preferenceText: "厌恶 Cruelty 或 Discord 的英雄更不愿执行；它会把当地信仰冲突升级成暴力。" })] }
 ],
 relations: { "Ophanim's Faith": { sources: [{ name: "Start Faith", href: "#entry-start-faith" }], effects: [{ name: "Theocracy", href: "#entry-theocracy" }, { name: "Perfect City", href: "#entry-perfect-city" }] }, "Ophanim's Doubt": { sources: [{ name: "Faith 与 Doubt 的循环", href: "#loop" }], effects: [{ name: "Root out Doubters", href: "#entry-root-out-doubters" }, { name: "Sectarian Violence", href: "#entry-sectarian-violence" }, { name: "Holy: Inquisition", href: "#entry-holy-inquisition" }] } },
};

const mammon: GodConfig = {
 id: "mammon", name: "Mammon, Wealth of Man, Spirit of the Mountain", number: "05", theme: "mammon-theme", assetDir: "mammon", background: "background.png", portrait: "portrait.png", supplicant: "mammon-supplicant.png",
 flavour: "",
 caption: "贸易网络、贪婪与吞噬", maxTurns: "常规 500 回合", awaken: "吞噬进度达到 800", panic: "75%", finalAgents: "6", progressLabel: "吞噬进度", unlockMethod: "不按回合解锁：吞噬人群或用 Devour Sin 吞噬罪恶",
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

 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Priceless Gift", "获得该特质时，从物品池得到一件神器级物品。"), D("Wealth Creator", "身处 Mammon's Influence 内或邻近地点时，每回合获得 3 Gold。"), D("Wealth Begets Wealth", "获得该特质时立即得到 200 Gold。")],
 sections: [
  { id: "traits", title: "人物特质", items: [D("Plutomania", "由 Mammon's Plutomania 赋予的强烈 Gold 喜好，会让统治者作出高风险的财富决策。")] },
  { id: "location-modifiers", title: "地点修正", items: [D("The Mountain's Wealth", "The Mountain 的财富储备，初始 100%。英雄 Raid Mountain 每次掠走 10%；财富降到 0%会使 Mammon 失败。它还记录可扩张步数、Menace 和 Profile。", { image: "mammon-mountain.png" }), D("Mammon's Influence", "强度达到 100%时，本地及邻地均受 Mammon 影响，允许使用 Mammon 神力并让 Greed / Decadence 增长。贸易路线断裂或地点易手时会消失。", { image: "mammon-influence-icon.png" }), D("Greed", "繁荣度低而受 Mammon 影响时形成。人物渴望财富并嫉妒富裕者；贪婪统治者可能在邻近 Decadence 国家时发动战争。", { image: "greed-icon.png" }), D("Decadence", "繁荣度高而受 Mammon 影响时形成。它把人口变成奢靡、失去人性的财富阶层，是 Call of Wealth 与 Plutomania 的前置。", { image: "decadence-icon.png" }), D("Sins Devoured", "Devour Sin 后留下的记录，表示该地点的贪婪战争罪恶已经被 Mammon 吞食，不能再次作为同一目标。", { image: "all-is-mine.png" }), D("Shadow Market", "本体市场修正。Agent 可发展它以降低 Prosperity、提高 Greed，并将其连接到另一地点来重分配财富。"), D("Smuggling", "本体走私修正。它把 100% 渗透城市接入未连接的 Shadow Market，并持续提供 Mammon's Influence 与 Prosperity。"), D("Armoured Populace", "由 Embrace of Metal 生成，修正每回合增长 2%，到 100%时把约一半人口转成 Armoured Populace 军队。", { image: "armoured-populace-icon.png" })] },
  { id: "locations", title: "地点与设施", items: [D("The Mountain", "Mammon 的初始据点，代码上使用 Tomb of Gods 的地点类型并标记为山脉。它承载 The Mountain's Wealth、Raid Mountain 和所有最终进食。", { image: "mammon-mountain.png" }), D("Shadow Market", "由神力建立的城市市场设施，既是降低 Prosperity 和制造 Greed 的起点，也是 Smuggling 的连接端。", { id: "shadow-market-location", image: "shadow-market.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Lured Crowd", "Call of the Mountain 或 Call of Wealth 产生的不可控制人群。它会沿路线前往目标；英雄可执行 Save Crowd 把其中一部分劝回。", { image: "lured-crowd.png" }), D("Armoured Populace", "由城市人口转化而来的不可控制军队，会无视和平直接夷平人类城市；每次战斗或夷平都会为 Mammon 提供额外吞噬进度。", { id: "armoured-populace-unit", image: "all-is-mine.png" })] },
  { id: "armies", title: "军队", items: [D("Armoured Populace Army", "不可控制、不会自然解散的黄金自动人军队。它优先攻击人类聚居地，进攻与夷平都会让 Mammon 吞噬额外灵魂，并推进封印。", { image: "armoured-populace-icon.png" })] },
  { id: "religion", title: "宗教与教义", items: [D("Mammon's Influence", "Mammon 没有独立 Holy Order；他的宗教表达为贸易网络、财富诱惑与 Greed / Decadence 的地点循环。受影响统治者会根据繁荣度分化成贪婪或颓败两类，并互相敌视。"), D("Greed 与 Decadence 的人物偏好", "Greedy 统治者会厌恶 Decadent 统治者：如果自己是公爵，会在颓败君主下制造政治动乱；如果两国接壤，可能直接发动战争。Mammon 可以把这种战争转化为 Devour Sin 的资源。", { meta: "宗教与社会机制" })] },
  { id: "hero-tasks", title: "英雄任务", items: [D("Save Crowd", "劝说前往 The Mountain 的 Lured Crowd 返回家园；成功救回的人口数量取决于 Command 与 Lore，剩余人群继续前往山脉。", { location: "Lured Crowd 当前所在的路线地点。", meta: "Command", statLine: "Complexity: 10　Profile: 60　Menace: 50　XP: 21", preferenceText: "喜欢 Cooperation、厌恶 Gold 的英雄更愿意执行；喜欢 Gold 的英雄会被任务目标吸引较少。" }), D("Raid Mountain", "进入 The Mountain 掠夺 10%财富，并获得 100 Gold；同时降低山的 Menace 10。若财富归零，Mammon 立即失败。", { location: "The Mountain。", meta: "Might", statLine: "Complexity: 15　Profile: 山的 Profile　Menace: 山的 Menace　Danger: 3　XP: 29", preferenceText: "喜欢 Gold 或喜欢危险的英雄更愿意执行；Mammon 的 Menace 不会像普通 Menace 那样因英雄 Shadow 而自然降低。" }), D("Investigate Population", "调查并移除 Armoured Populace 修正；任务本身的 Profile 与 Menace 随该修正当前强度变化。", { location: "带有 Armoured Populace 修正的人类聚居地。", meta: "Lore", statLine: "Complexity: 60　Profile: 装甲人口强度　Menace: 装甲人口强度　XP: 84", preferenceText: "喜欢 Cooperation 的英雄更愿意调查这种 Menace。" })] },
 ],
 relations: { "The Mountain's Wealth": { sources: [{ name: "开局建立", href: "#loop", meta: "Mammon 开局机制" }], effects: [{ name: "Raid Mountain", href: "#entry-raid-mountain" }, { name: "All is Mine", href: "#entry-all-is-mine" }] }, "Mammon's Influence": { sources: [{ name: "Grow Influence", href: "#entry-grow-influence" }, { name: "Smuggling", href: "#entry-smuggling" }], effects: [{ name: "Greed", href: "#entry-greed" }, { name: "Decadence", href: "#entry-decadence" }] } },
};

const brokenMaker: GodConfig = {
 id: "broken-maker", name: "The Broken Maker", number: "06", theme: "broken-maker-theme", assetDir: "broken-maker", background: "background.png", portrait: "portrait.png", supplicant: "broken-maker-supplicant.png",
 flavour: "创造血肉的神本身却是不完整的。The Broken Maker 不断雕刻血脉、毁灭旧世界、等待下一代在废墟上重生，再把上一轮积累的诅咒提炼成新的 Agent。",
 caption: "家族诅咒、跨世代轮回与借用神力", maxTurns: "常规 500 回合", awaken: "第 300 回合", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
 powerRecovery: "常规恢复：0.035 ×（已破封印数 + 1）× 难度缩放；Eternity 睡眠会保留或重置人类适应，同时重新抽取可借用的其他神力。",
 core: [
  "每一世用四种 <CrossReference name=\"Maker's Curse: Sword\" />、<CrossReference name=\"Maker's Curse: Eye\" />、<CrossReference name=\"Maker's Curse: Midnight\" /> 与 <CrossReference name=\"Maker's Curse: Traitor\" /> 诅咒培养家族。",
  "用 <CrossReference name=\"Create Agent\" /> 把带有诅咒的英雄、Acolyte 或统治者改造成 Agent；诅咒等级会转成对应属性，并留下可持续的 Blessing 特质。",
  "用 <CrossReference name=\"Eternity\" /> 让世界进入 50 年睡眠。胜利后的睡眠会让人类针对上一种胜利适应，失败或提前睡眠则会清空这些适应。",
  "睡眠会清理世界、重置社会并把上一轮 Agent 放入跨世代缓冲区；下一世可继续利用家族血脉，或等待暂时无法使用的独特 Agent 回归。",
  "每次睡眠还会从 She Who Will Feast、Iastur、Ophanim、Mammon 与 Vinerva 的神力中随机借来一组临时能力，形成每一世不同的工具箱。",
 ],
 overviewExtra: { title: "睡眠、适应与诅咒", text: "Eternity 不是普通终局按钮：它把 Elder Tomb 放到新地点，清除现有 Agent 和大部分世界状态，保留家族诅咒及跨世代 Agent 缓冲。若上一局已经胜利，responses 会记录 Shadow、Madness、Empire、Ruin、Winter、Deep Ones 或大型黑暗军队等适应方向；下一世这些适应会增强人类。" },
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Create Agent", "Create Agent Masterfully", "Maker's Curse: Sword", "Maker's Curse: Eye", "Maker's Curse: Midnight", "Maker's Curse: Traitor", "Twist Flesh"] },
  { seal: 1, progress: 27, agents: 3, reward: ["Venom in the veins"] }, { seal: 2, progress: 49, agents: 4, reward: ["Cultists in Waiting"] },
  { seal: 3, progress: 127, agents: 4, reward: ["Bury Power"] }, { seal: 4, progress: 201, agents: 5, reward: ["Eternity"] },
  { seal: 5, progress: 257, agents: 6, reward: ["Intrinsic Lifespan"] }, { seal: 6, progress: 300, agents: 6, reward: ["苏醒"] },
 ],
 powers: [
  O("Create Agent", 0, 0, "选择带有至少一种 Maker's Curse 的英雄、Acolyte 或统治者，把他改造成 Agent。四种诅咒等级分别转为 Might、Lore、Intrigue、Command，并在等级大于 0 时给予对应 Blessing。", "目标必须属于带 Maker's Curse 的 House；英雄、Acolyte 或有统治者的地点均可。", "create-agent.png"),
  O("Create Agent Masterfully", 0, 0, "与 Create Agent 相同，但只消耗每种诅咒一半等级，诅咒不会完全移除；每次睡眠周期只能使用一次。", "目标必须属于带 Maker's Curse 的 House；每次 Eternity 睡眠后才能再次使用。", "create-agent.png"),
  O("Maker's Curse: Sword", 0, 0, "诅咒一个 House。该家族成员被战斗或刺杀杀死时，Sword 等级增加；转化出的 Agent 每级获得 +1 Might，并得到会在杀死英雄时触发内战、增加 20 Menace 的 Blessing of the Sword。", "每次使用 Eternity 后只能选择一个 House 使用一次。", "curse-sword.png"),
  O("Maker's Curse: Eye", 0, 0, "诅咒一个 House。该家族成员每获得一级疯狂时，Eye 等级增加；转化出的 Agent 每级获得 +1 Lore，并得到按等级每回合降低 0.05 Menace 的 Blessing of the Eye。", "每次使用 Eternity 后只能选择一个 House 使用一次。", "curse-eye.png"),
  O("Maker's Curse: Midnight", 0, 0, "诅咒一个 House。该家族成员达到 100% Shadow 时，Midnight 等级增加；转化出的 Agent 每级获得 +1 Intrigue（最多 5），并得到按等级每回合降低 0.05 Profile 的 Blessing of Midnight。", "每次使用 Eternity 后只能选择一个 House 使用一次。", "curse-midnight.png"),
  O("Maker's Curse: Traitor", 0, 0, "诅咒一个 House。该家族成员被腐化为 Agent 时，Traitor 等级增加；转化出的 Agent 每级获得 +1 Command，并在等级大于 0 时得到让当地安全 −3 的 Blessing of the Traitor。", "每次使用 Eternity 后只能选择一个 House 使用一次。", "curse-traitor.png"),
  O("Twist Flesh", 0, 1, "把一个正在执行非中立挑战的 Agent 的一点属性转移到该挑战所需的属性上，用另一项属性支付这次强化。", "目标必须正在执行有明确属性类型的挑战，且 HP 大于 1。", "twist-flesh.png"),
  O("Venom in the veins", 1, 2, "令拥有任意家族诅咒的非 Chosen One 英雄 Disrupted 5 回合。", "不能选择 Chosen One；目标英雄的 House 必须有 Maker's Curse，Blessing 不算。", "eternity.png"),
  O("Cultists in Waiting", 2, 1, "在已渗透的人类或精灵聚居地留下 Cult in Waiting，使安全永久降低 1；地点更换归属后修正会消失。", "目标必须是渗透度大于 0 且尚无该修正的人类或精灵聚居地。", "cultists-in-waiting.png"),
  O("Bury Power", 3, 3, "把一部分当前神力埋入地点，之后由 Agent 取回，可跨越当前轮回保留到下一世。", "可以对任意地点施放。", "bury-power.png"),
  O("Eternity", 4, 0, "让世界沉睡 50 年并把 Elder Tomb 放到空的非海洋地点。胜利后睡眠会记录人类适应；提前睡眠或被击败则清除适应。睡眠还会清理现有 Agent、重置世界，并随机借来其他神的临时神力。", "必须目标为空的非海洋地点，或允许建立 Tomb 的废墟地点。", "eternity.png"),
  O("Intrinsic Lifespan", 5, 4, "给 Agent 的四项属性各增加 2，但附加 52 回合倒计时；倒计时归零后 Agent 会死亡。", "目标必须是 Agent，且不能重复施加。", "intrinsic-lifespan.png"),
 ],


 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。The Broken Maker 开局 Supplicant 没有额外人物特质。",
 initialAbilities: [],
 sections: [
  { id: "traits", title: "人物特质", items: [D("Blessing of the Sword", "来自 Maker's Curse: Sword。转化后的 Agent 在杀死英雄时会触发家族内战，并额外增加 20 Menace。"), D("Blessing of the Eye", "来自 Maker's Curse: Eye。按诅咒等级每回合降低 0.05 Menace。"), D("Blessing of Midnight", "来自 Maker's Curse: Midnight。按诅咒等级每回合降低 0.05 Profile。"), D("Blessing of the Traitor", "来自 Maker's Curse: Traitor。诅咒等级大于 0 时使所在地安全降低 3。"), D("Intrinsic Lifespan", "让 Agent 四项属性各增加 2，但附加 52 回合寿命倒计时，归零后人物死亡。", { seal: 5 })] },
  { id: "location-modifiers", title: "地点修正", items: [D("Cult in Waiting", "Cultists in Waiting 留下的永久修正，使聚居地安全降低 1；地点改换归属后消失。", { image: "cultists-in-waiting.png" }), D("Elder Tomb", "Eternity 建立的轮回据点。它是下一世的出生地点，也是睡眠期间记录人类适应、清理世界与借用其他神力的核心。", { id: "elder-tomb-modifier", image: "eternity.png" })] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "空的非海洋地点可以被 Eternity 改造成 Elder Tomb。睡眠结束后 The Broken Maker 会在墓穴附近重建，并把上一世保留下来的适应转化为新的对策。", { id: "elder-tomb-location", image: "eternity.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Cursed Agent", "Create Agent 把携带 Maker's Curse 的英雄、侍僧或统治者转成玩家 Agent；四种诅咒等级分别转为 Might、Lore、Intrigue、Command。", { image: "create-agent.png" }), D("Cross-generation Agent", "Eternity 睡眠会清理旧 Agent，但会依据记录的适应、埋藏神力与随机借用神力生成下一世的全新 Agent。") ] },

  { id: "religion", title: "宗教与教义", items: [D("人类适应", "每次以胜利结束 Eternity 睡眠都会记录人类针对当前神力的适应；下一世会把这些记录变成对应的抗性或行为变化。提前睡眠或在本世被击败会清除适应。"), D("家族祝福", "四种 Maker's Curse 被消耗创建 Agent 时，会留下 Blessing。祝福不再继续累积诅咒，但会持续改变 Menace、Profile、安全或英雄死亡后的政治局势。") ] },
  { id: "challenges", title: "本体相关任务", items: [D("Temptation of Eternity", "这是游戏本体的中立精灵挑战，不是 The Broken Maker 专属神力。普通精灵可以执行；Dark Empire 的精灵也会自动执行，用来增加 Elven Arrogance。", { location: "精灵聚居地（普通精灵或 Dark Empire 精灵）。", meta: "Lore / 本体机制", statLine: "Complexity: 50　Profile: 140　Menace: 0　XP: 72", preferenceText: "偏好 Lore 的精灵更容易执行；Dark Empire 的精灵会自动执行，不属于玩家可直接控制的挑战。" })] }
 ],
 relations: { "Maker's Curse: Sword": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" }, { name: "Create Agent", href: "#entry-create-agent" }] }, "Maker's Curse: Eye": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" }] }, "Maker's Curse: Midnight": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" }] }, "Maker's Curse: Traitor": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" }] } },
};

const evilBeneath: GodConfig = {
 id: "evil-beneath", name: "The Evil Beneath", number: "07", theme: "evil-beneath-theme", assetDir: "evil-beneath", background: "background.png", portrait: "portrait.png", supplicant: "supplicant.png",
 flavour: "地底深处正在孕育某种噩梦。它比王国更庞大，以触手穿行洞穴与隧道，寻找可以吞噬、继续生长的血肉。",
 caption: "地下触手、吞食与地表决战", maxTurns: "常规 500 回合", awaken: "吞噬进度达到 450", panic: "75%", finalAgents: "6", progressLabel: "吞噬进度", unlockMethod: "不按回合解锁：吞食 Feast for the God-Thing、Devour Knowledge 或 Devour Worshipper",
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
 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Red Herring（Active）", "自动移除 Supplicant 所在地点的一个 Evidence；触发后进入 100 回合冷却。"), D("Creature of the Dark", "位于地下时四项属性各获得 +1。"), D("Tunnel Dweller", "位于连接不同地图层级的地点（例如地表与地下交界）时四项属性各获得 +1。" )],
 sections: [
  { id: "world-mechanics", title: "世界机制", items: [D("Awareness of the Underground", "全局 0%–100% 的地下发现度。英雄跨层移动、调查 Evidence、报告发现，以及多个地下神力都会提高它；达到 100% 后，人类可以不受地图层级限制地追踪地下单位。The Evil Beneath 没有独立 Holy Order；苏醒时地下意识会被直接设为 100%。", { baseGame: true })] },
  { id: "location-modifiers", title: "地点修正", items: [D("Feast for the God-Thing", "由尸体和扭曲灵魂组成的食物储备。它每回合缓慢衰减；心脏在所在地会自动吞食，其他地点必须让触手经过并在 Retract Tentacle 时收回。", { image: "mouth-heart.png" }), D("Evidence", "Grow、Vile Secretions 或其他地下事件留下的线索。Evidence 会缓慢增加自身 Profile 和 Menace；英雄会执行 Investigate Evidence，完成后回到本国报告，使世界恐慌增加 5%、地下意识增加 15%。", { image: "evidence.png" })] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "开局在地下建立的本体墓穴地点。它是 The Creature's Heart、Supplicant 和初始触手的生成点；其地点类型仍是游戏本体的 Elder Tomb。", { image: "elder-tomb.png", baseGame: true, id: "elder-tomb-location" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("The Creature's Heart", "地下神躯的核心，初始最大 HP 为 1000、开局 HP 为 1。吞食 Feast 会恢复 HP；苏醒后每回合增加 2 Menace，并会主动夷平所在的人类聚居地。它被杀死会立即导致玩家失败。", { image: "mouth-heart.png" }), D("Tentacle Segment", "由 God Megafauna 生成的不可控制地下军队单位，基础最大 HP 为 10。每条触手由多个 Segment 串联，末端 Segment 可被 Retract Tentacle 收回；苏醒后每回合增加 1 Menace。", { image: "tentacle.png" }), D("God Megafauna", "承载心脏、触手和地下地图细胞的巨型生物容器；Grow 会向它添加新的触手路径，Retract Tentacle 会移除整条路径。", { image: "tentacle.png" })] },
  { id: "armies", title: "军队", items: [D("Tentacle Segment Army", "每个触手段都是一支不可控制的 The Dark 军队。它们会在地表聚居地自动执行夷平；Defend the Heart 可让它们主动与所在地的人形军队交战。", { image: "tentacle.png" }), D("Surface Response", "苏醒后地表军队会主动向地下进攻；心脏和触手不能被命令撤退，必须利用触手战斗、Sinkholes 和地形把围剿部队逐一消灭。", { baseGame: true })] },
  { id: "hero-tasks", title: "英雄任务", items: [D("Investigate Evidence", "英雄在 Evidence 地点进行 Lore 挑战。完成后会开始 Report Findings；只要英雄活着回到本国，世界恐慌增加 5%，地下意识增加 15%。", { location: "有 Evidence 地点修正的地点。", meta: "Lore / 本体机制", statLine: "Complexity: 25　Profile: Evidence 当前值　Menace: 0　XP: 42", preferenceText: "会主动追查线索的英雄更可能执行；完成后必须安全回国报告，单纯完成调查不会立刻把地下意识推满。", image: "evidence.png" }),
    D("Report Findings", "调查 Evidence 后生成的返回任务。英雄需要回到自己的本国；到达后增加 5%世界恐慌并使地下意识增加 15%。如果英雄在途中死亡，报告不会发生，但死亡地点可能留下新的 Evidence。", { location: "执行者所属国家的聚居地；这是从 Evidence 地点返回本国的任务。", meta: "本体任务", statLine: "Complexity: 移动距离　Profile: Evidence 当前值　Menace: 0　XP: 按移动距离计算", preferenceText: "这是 Investigate Evidence 的后续任务，不是 The Evil Beneath 可直接控制的任务。" })] }
 ],
 relations: {
  "Feast for the God-Thing": { sources: [{ name: "Bring the Food", href: "#entry-bring-the-food" }, { name: "Drag Bodies Under", href: "#entry-drag-bodies-under" }], effects: [{ name: "Retract Tentacle", href: "#entry-retract-tentacle" }] },
  "Evidence": { sources: [{ name: "Grow", href: "#entry-grow" }, { name: "Vile Secretions", href: "#entry-vile-secretions" }], effects: [{ name: "Investigate Evidence", href: "#entry-investigate-evidence" }] },
  "The Creature's Heart": { sources: [{ name: "开局建立", href: "#loop", meta: "开局机制" }], effects: [{ name: "Grow", href: "#entry-grow" }, { name: "Drag Down City", href: "#entry-drag-down-city" }] },
  "Awareness of the Underground": { sources: [{ name: "苏醒", href: "#seals", meta: "最终封印" }], effects: [{ name: "Report Findings", href: "#entry-report-findings" }] }
 }
};

const deathsGames: GodConfig = {
 id: "deaths-games", name: "Death's Games", number: "08", theme: "death-games-theme", assetDir: "deaths-games", background: "godCardsTMP.png", portrait: "god_cards_portrait.png", supplicant: "supplicant.png",
 flavour: "命运在最细微处转弯，帝国的未来由一张张卡牌决定。",
 caption: "抽卡、概率与一次性干预", maxTurns: "常规 500 回合", awaken: "无特殊苏醒效果", panic: "25%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
 powerRecovery: "神力恢复固定为 51 / 350，约 0.146 点每回合；神力上限固定为 7，不随封印增加。封印只提高 Agent 上限。",
 specialVictory: "无",
 core: [
  "用 <CrossReference name=\"Draw Card\" /> 消耗 1 点神力，从随机稀有度池获得一张一次性卡牌；手牌最多保留 7 张。",
  "用 <CrossReference name=\"Redraw\" /> 消耗 2 点神力，弃掉全部手牌，再抽取少一张新卡牌；它使用一套比普通抽牌更窄的抽取池。",
  "把卡牌保存到合适的时机：卡牌本身不再消耗神力，真正的资源管理是手牌上限、抽取概率和目标时机。",
  "常见卡牌提供金币、额外移动或挑战进度；不常见卡牌制造安全、骚乱、打断和物品破坏；稀有卡牌则直接改变人物的 Profile 与 Menace。",
  "初始 Supplicant 拥有 <CrossReference name=\"Lucky\" />：把卡牌打在人物单位上时有 25% 概率不消耗卡牌；打在地点上的卡牌不享受这项保留。",
  "封印不会解锁新卡牌，也不会改变神力上限或恢复速度；它们只按 15、30、70、200、300、500、800 回合逐步提高 Agent 上限。",
 ],
 overviewExtra: { title: "抽取概率与源码细节", text: "Draw Card 的抽取流程是：第一次随机数小于 0.7 时进入 Common 池；否则再次随机数小于 0.7 时进入 Uncommon 池；两次都未命中才进入 Rare 池，因此实际概率约为 Common 70%、Uncommon 21%、Rare 9%。Common 池包含 The Coin、The Hammer、The Horseshoe、The Night、The Dagger；Uncommon 池包含 The Open Door、The Storm、The Thief、The Fist；Rare 池包含 The Blindfold、The Judge。该卡池只包含游戏实际加入 Draw Card 与 Redraw 的卡牌。" },
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Draw Card", "Redraw"] },
  { seal: 1, progress: 15, agents: 2, reward: [] },
  { seal: 2, progress: 30, agents: 3, reward: [] },
  { seal: 3, progress: 70, agents: 3, reward: [] },
  { seal: 4, progress: 200, agents: 4, reward: [] },
  { seal: 5, progress: 300, agents: 5, reward: [] },
  { seal: 6, progress: 500, agents: 6, reward: [] },
  { seal: 7, progress: 800, agents: 6, reward: ["无特殊苏醒效果"] },
 ],
 powers: [
  O("Draw Card", 0, 1, "从三档稀有度中随机抽取一张卡牌加入手牌。卡牌只会被抽到一次并保留在手牌中，直到玩家把它打出；手牌达到 7 张后不能继续抽取。普通抽取的实际概率约为 Common 70%、Uncommon 21%、Rare 9%。", "可以对任意地点或任意单位施放；当前手牌必须少于 7 张。", "card-card.png"),
  O("Redraw", 0, 2, "弃掉当前全部卡牌，再抽取与原手牌数量少 1 张的新卡牌。例如有 4 张牌时会弃掉全部 4 张并重新抽 3 张。重抽的 Common 池只有 The Coin、The Hammer、The Horseshoe，Uncommon 池只有 The Open Door、The Storm、The Thief，Rare 池仍为 The Blindfold、The Judge。", "可以对任意地点或任意单位施放；至少要有 2 张卡牌。", "card-card.png"),
 ],
 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Lucky", "任何打在该人物单位上的卡牌都有 25% 概率不会从手牌中消耗；打在地点上的卡牌会正常消耗。该特质只有 1 级。")],
 drawCards: { id: "draw-cards", title: "抽取卡牌", items: [
  D("Common Card: The Coin", "给目标人物单位增加 20 Gold。", { meta: "普通卡牌 · 抽取概率约 14%", image: "card-coin.png" , limit: "必须指定人物单位（UA）；不能对地点或其他类型单位使用。" }),
  D("Common Card: The Dagger", "对目标单位造成 2 点 HP 伤害；如果伤害使 HP 降到 0 或以下，立即杀死目标。", { meta: "普通卡牌 · 抽取概率约 14%", image: "card-dagger.png" , limit: "必须指定任意单位。" }),
  D("Common Card: The Hammer", "让目标单位立即获得 20 点挑战进度，不改变挑战类型。", { meta: "普通卡牌 · 抽取概率约 14%", image: "card-hammer.png" , limit: "必须指定正在执行挑战的单位。" }),
  D("Common Card: The Horseshoe", "让目标单位再获得一次移动机会。源码通过减少其已用移动次数实现。", { meta: "普通卡牌 · 抽取概率约 14%", image: "card-horseshoe.png" , limit: "必须指定本回合已经移动过的单位。" }),
  D("Common Card: The Night", "把目标所在地点的 Warding 一次性降低 20%。", { meta: "普通卡牌 · 抽取概率约 14%", image: "card-night.png" , limit: "必须指定所在地点 Warding 至少为 10% 的单位。" }),
  D("Uncommon Card: The Open Door", "在目标所在地添加 Bribed Guards 20 回合，使 Security 降低 2。", { meta: "不常见卡牌 · 抽取概率约 5%", image: "card-door.png" , limit: "可以指定任意单位；效果施加在其所在地点。" }),
  D("Uncommon Card: The Fist", "使目标所在地点的 Unrest 增加 30。源码中该卡使用了与 Open Door 相同的卡牌图标引用。", { meta: "不常见卡牌 · 抽取概率约 5%", image: "card-door.png" , limit: "可以指定任意单位；效果施加在其所在地点。" }),
  D("Uncommon Card: The Storm", "令目标单位进入 Disrupted 状态 5 回合，在此期间不能采取行动。", { meta: "不常见卡牌 · 抽取概率约 5%", image: "card-storm.png" , limit: "可以指定任意单位。" }),
  D("Uncommon Card: The Thief", "随机摧毁目标人物携带的一件物品；每件物品被选中的概率相同。", { meta: "不常见卡牌 · 抽取概率约 5%", image: "card-thief.png" , limit: "必须指定携带至少一件物品的人物单位。" }),
  D("Rare Card: The Blindfold", "使目标单位的 Menace 与 Profile 各降低 10。", { meta: "稀有卡牌 · 抽取概率约 4.5%", image: "card-blindfold.png" , limit: "可以指定任意单位。" }),
  D("Rare Card: The Judge", "使目标单位的 Menace 与 Profile 各增加 10。", { meta: "稀有卡牌 · 抽取概率约 4.5%", image: "card-judge.png" , limit: "可以指定任意单位，但不能指定 Chosen One。" }),
 ] },
 sections: [
  { id: "location-modifiers", title: "地点修正", items: [
   D("Bribed Guards", "The Open Door 添加的本体地点修正。持续 20 回合，每回合倒计时 1；期间 Security −2。", { baseGame: true }),
  ] },
 ],
 relations: {
  "Draw Card": { effects: [{ name: "抽取卡牌", href: "#draw-cards", meta: "卡牌模块" }] },
  "Redraw": { effects: [{ name: "抽取卡牌", href: "#draw-cards", meta: "卡牌模块" }] },
  "Uncommon Card: The Open Door": { effects: [{ name: "Bribed Guards", href: "#entry-bribed-guards" }] },
  "Bribed Guards": { sources: [{ name: "Uncommon Card: The Open Door", href: "#entry-uncommon-card-the-open-door" }] },
 }
};
const cordyceps: GodConfig = {
 id: "cordyceps", name: "Cordyceps Hive Mind", number: "09", theme: "cordyceps-theme", assetDir: "cordyceps", background: "god_background.jpg", portrait: "god_portrait.png", supplicant: "unit_insect_supplicant.png",
 flavour: "Cordyceps Hive Mind 是由真菌孢子连接成的虫群意识：先感染人物与人口，再让成熟感染体变成 Hive 或 Drone，把被麻痹的人口收割成 Larval Mass，最终释放 Vespidic Swarm。",
 caption: "感染、Hive、Larval Mass 与虫群军队", maxTurns: "常规 500 回合", awaken: "Larval Mass 收集量达到 200", panic: "25%", finalAgents: "5", progressLabel: "Larval Mass", unlockMethod: "通过感染人口并由 Drone 带回 Hive，积累 Larval Mass", powerRecovery: "神力上限 = 已破封印数 + 1；神力恢复 = 0.035 × 神力上限 × 难度缩放。",
 core: [
  "感染阶段：让 rulers、heroes、agents 和 human population 获得 Cordyceps Infection；感染可在同一地点的人类之间传播，100% Awareness 的人物会防止感染。对 Cordyceps 玩家而言，ModCore 会在每回合结束把所有可控制 Agent 的感染成熟度维持在 100%，新创建的 Agent 也会在生成时直接获得 100%；初始 Supplicant 由 God_Insect.onStart 同样赋予 100%。因此可控制 Agent 不需要从 0% 逐步积累感染，主要作用是把感染继续传播给英雄、统治者和人口。",
  "成熟感染体可以被 <CrossReference name=\"Start Hive\" /> 变成 Hive，或用 <CrossReference name=\"Infested Drone\" /> 转化为 Drone；玩家 Agent 会在回合结束时被保持为 100% 感染。",
  "在聚居地执行 <CrossReference name=\"Infect Populace\" />、<CrossReference name=\"Targeted Infection\" /> 等挑战，让 Infected Populace 增长；Drones 把麻痹人口带回 Hive，转化为 Larval Mass 并推进封印。",
  "把 Larval Mass 用于 <CrossReference name=\"Arthropod Drone\" />、<CrossReference name=\"Assign Guard\" />，或一次性用于 <CrossReference name=\"Vespidic Swarm\" />；感染的 rulers 不会重建被摧毁的军队。",
  "用 <CrossReference name=\"Airborne Spores\" /> 扩散感染，再用 <CrossReference name=\"Internal Maturation\" /> 或 Vespidic Swarm 摧毁人口与人类王国。"
 ],
 overviewExtra: { title: "感染、Hive 与收割", text: "感染成熟度上限为 100%；感染会影响人物判断，并向同地点的人类与人口传播。Hive 提供 Larval Mass 与 Home/Feeding Pheromone；两种 Pheromone 每回合衰减 7.5%。每次收割会增加 7 Menace、4 Profile，并把收割量计入封印进度。Hive 的 Airborne Spores 会让两格内的人类聚居地每回合增加 1% Infected Populace，Hive Spire 每回合增加 1 Menace。" },
 specialVictory: "无",
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Start Hive", "Motor Function Takeover", "Infested Drone", "Arthropod Drone", "Homing Instinct"] },
  { seal: 1, progress: 10, agents: 3, reward: ["Assign Guard", "Disrupted Neurology"] },
  { seal: 2, progress: 20, agents: 3, reward: ["Haematophage", "Remove Hive"] },
  { seal: 3, progress: 40, agents: 4, reward: ["Vespidic Swarm", "Vespid Swarm Target"] },
  { seal: 4, progress: 100, agents: 5, reward: ["Airborne Spores", "Synchronised Infestation"] },
  { seal: 5, progress: 200, agents: 5, reward: ["Paranoid Hysteria", "Internal Maturation", "苏醒"] }
 ],
 powers: [
  O("Start Hive", 0, 0, "把拥有 100% Cordyceps Infection 的 hero 或 agent 变成 Hive；原人物死亡，地点获得 Hive Spire 与 Larval Mass，并生成一架 Drone。", "目标必须是成熟感染的 hero 或 agent，且地点为空或只有城市废墟。", "fungalHive.png"),
  O("Motor Function Takeover", 0, 1, "让最近的成熟感染英雄移动到目标地点，便于把他转成 Hive。", "目标必须是空的非海洋地点。", "insect-motor-function-takeover.png"),
  O("Infested Drone", 0, 0, "把 100% 感染的 hero、acolyte 或 agent 转化为 Drone。Drone 会寻找感染人口、把人口带回最近的 Hive，并增加世界恐慌。", "目标必须是 100% 感染的 hero、acolyte 或 agent；必须已有 Hive，不能目标为 Drone。", "agent-insect-drone.png"),
  O("Arthropod Drone", 0, 0, "消耗 Hive 的 10 点 Larval Mass，生成一架巨型节肢动物 Drone。它会探索并沿 Feeding Pheromone 寻找感染人口，收割后返回 Hive。", "目标地点必须有超过 10% 的 Larval Mass。", "agent-insect-drone-arthopod.png"),
  O("Homing Instinct", 0, 0, "引导一架 Drone 返回最近的 Hive，停止无效探索或纠正错误方向。", "目标必须是一架 Drone。", "insect-homing-instinct.png"),
  O("Assign Guard", 1, 1, "消耗 5% Larval Mass，为 Drone 或 Agent 生成一名 Vespidic Guard。它可以超过正常 Command 上限，降低英雄袭击风险。", "目标必须是正在寻找猎物或返回 Hive 的 Drone。", "insect-larval-mass.png"),
  O("Disrupted Neurology", 1, 1, "使当地守卫失去判断力，Security −1，持续 25 回合且可以叠加。", "目标必须是 Infected Populace 大于 25% 的人类聚居地。", "insect-disrupted-neurology.png"),
  O("Haematophage", 2, 3, "生成专门骚扰英雄的 Haematophage。它攻击靠近其领地的英雄后会撤退，让英雄需要治疗并增加世界恐慌；经过约 14 回合后会逐步生成 Carapace。", "可以对任意地点施放。", "agent-insect-haematophage.png"),
  O("Remove Hive", 2, 0, "移除一个 Hive，让 Drone 从更靠近猎物的新 Hive 开始运作。", "目标必须是有 Hive 的地点。", "fungalHive_Grey.png"),
  O("Vespidic Swarm", 3, 0, "消耗地点全部 Larval Mass，按消耗量生成一支 Vespidic Swarm；Larval Mass 越多，军队强度越高。", "目标地点必须有超过 10% 的 Larval Mass。", "unit-insect-vespid.png"),
  O("Vespid Swarm Target", 3, 0, "命令所有 Vespidic Swarm 立即停止当前任务并前往指定地点；之后它们完成其他任务也会继续靠近该目标。", "目标必须是一个地点。", "insect-swarm-target.png"),
  O("Airborne Spores", 4, 2, "让一个 Hive 感染所在地的 heroes 与 acolytes，并使两格内的人类聚居地每回合增加 1% Infected Populace；Hive 每回合增加 1 Menace。不能影响精灵。", "目标必须是有 Hive 的地点。", "fungalHive_Red.png"),
  O("Synchronised Infestation", 4, 0, "把所有不受你控制、且已达到 100% 感染的 heroes 与 acolytes 转成 Drones；每个英雄转化都会带来 Fallen Hero 恐慌。", "必须已有 Hive；不能目标为 Drone。", "agent-insect-drone.png"),
  O("Paranoid Hysteria", 5, 2, "让 100% 感染的 hero 或 acolyte 获得 10 Menace，并在当地施加 Paranoid Hysteria 或 Hypochondria；临时世界恐慌增加 1%。", "目标必须是人类聚居地中 100% 感染的 hero 或 acolyte，Infected Populace 不得高于 50%，且不能是 Chosen One。", "insect-paranoia.png"),
  O("Internal Maturation", 5, 3, "让感染人口内部爆出 <CrossReference name=\"Vespidic Swarm\" href=\"#entry-vespidic-swarm-army\" meta=\"军队\" />，按人口与感染程度生成军队，同时移除人口与防御，严重时把地点变成废墟。", "目标必须是 Infected Populace 大于 50% 的人类聚居地。", "ParasiteWithin.png")
 ],
 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("The Scent of Prey", "如果该 Agent 位于带有 Infected Populace 的地点，它会向周围区域释放 Feeding Pheromone，吸引 Drones 前来收割感染人口。", { image: "insect-pheromone-feed.png" }), D("Cordyceps Infection (100%)", "这是 Cordyceps 的 Agent 初始化规则：所有现存可控制 Agent 在回合结束时都会被源码维持为 100% 感染，新创建的 Agent 也会在生成时直接获得 100%；初始 Supplicant 还会由 God_Insect.onStart 单独赋予该特质。感染可在人类（不包括精灵）之间传播，影响 heroes、rulers 和人口；达到 100% 的英雄可以被转化为 Drone，并会压制人物判断。", { image: "insect-infected-populace.png" })],
 sections: [
  { id: "traits", title: "人物特质", items: [D("Cordyceps Infection", "感染可在人类（不包括精灵）之间传播，影响 heroes、rulers 和人口；人物达到 100% 感染后可以被转化为 Drone。感染会压制人物判断，100% Awareness 的人物会防止感染。对 Cordyceps 玩家来说，所有可控制 Agent 的成熟度由 ModCore 在每回合结束维持为 100%，新创建的 Agent 也会在生成时获得 100%；所以这项特质对玩家 Agent 不是从 0% 开始的普通感染，而是自带成熟感染状态。", { image: "insect-infected-populace.png" })] },
  { id: "location-modifiers", title: "地点修正", items: [
    D("Infected Populace", "感染人口为 0–100%。感染人口可以通过 Infect Populace 增加、Treat Populace 减少，也会被 Drones 带走转化成 Larval Mass；达到 100% 后可对当地 home heroes 与 acolytes 执行 Targeted Infection。", { image: "insect-infected-populace.png" }),
    D("Larval Mass", "Hive 中储存的幼虫质量。Arthropod Drone 每次消耗 10；Assign Guard 消耗 5；Vespidic Swarm 消耗全部；英雄可执行 Destroy Larva 破坏约三分之一。", { image: "insect-larval-mass.png" }),
    D("Pheromone: Feeding", "Drones 寻找猎物时沿此修正前进；由 The Scent of Prey 和 Hive 机制产生，每回合衰减 7.5%，强度上限为 300。", { image: "insect-pheromone-feed.png" }),
    D("Pheromone: Home", "Drones 返回 Hive 时沿此修正回家；每回合衰减 7.5%，强度上限为 300。", { image: "insect-pheromone-home.png" }),
    D("Disrupted Neurology", "Security −1，持续 25 回合且可以叠加；由 Disrupted Neurology 神力添加。", { id: "disrupted-neurology-modifier", image: "insect-disrupted-neurology.png" })
  ]},
  { id: "locations", title: "地点与设施", items: [
    D("Hive", "Start Hive 会把成熟感染的 hero 或 agent 变成 Hive。地点被设置为已渗透并保留当前 Shadow，同时加入 Larval Mass 和 Hive Spire；Airborne Spores 开启时会感染 Hive 内人物并向两格内人类聚居地扩散。", { image: "fungalHive.png" }),
    D("Hive Spire", "Hive 的设施，Airborne Spores 开启时每回合增加 1 Menace；地点图标会在普通真菌与红色孢子状态之间切换。", { image: "fungalHive.png" })
  ]},
  { id: "minions", title: "随从", items: [
    D("Vespidic Guard", "Attack 4、Defence 3、HP 3、Command 1。Assign Guard 从 Larval Mass 消耗 5% 生成；可被 Drone 或 Agent 持有，并且允许超过正常 Command 上限。", { image: "unit-insect-vespid.png" }),
    D("Carapace", "Attack 0、Defence 2、HP 1、Command 0。Haematophage 经过约 14 回合会逐步生成，用来提高防守能力。", { image: "insect-carapace.png" })
  ]},
  { id: "units", title: "特殊人物与自主单位", items: [
    D("Arthropodic Drone", "自主单位；沿 Feeding Pheromone 搜索感染人口，收割后沿 Home Pheromone 返回 Hive，消耗人口并推进 Larval Mass；每次收割增加 7 Menace、4 Profile。", { image: "agent-insect-drone-arthopod.png" }),
    D("Haematophage", "自主骚扰单位；攻击靠近其领地的英雄后会撤退，使英雄需要治疗并增加世界恐慌；会慢慢生成 Carapace，若出生在 Hive 可配 Guard 进行更频繁攻击。", { image: "agent-insect-haematophage.png" }),
    D("Late-Stage Infection Victim", "可由感染相关机制生成的自主单位，拥有 100% 感染、The Scent of Prey；基础属性 Might 3、Command 2、Intrigue 3、Lore 2。", { image: "agent-insect-late-stage.png" })
  ]},
  { id: "armies", title: "军队", items: [D("Vespidic Swarm", "由 Vespidic Swarm 或 Internal Maturation 生成；消耗 Larval Mass 后以消耗量作为军队强度，能够半自动移动、攻城和夷平人类地点；可用 Vespid Swarm Target 统一指定目标。", { id: "vespidic-swarm-army", image: "unit-insect-vespid.png" })] },
  { id: "religion", title: "宗教与教义", items: [
    D("Insectine Devotion", "该自定义教义会被加入每个 Holy Order。拥有本教神庙的地点中，Refugees 会被迫前往最近的 Hive 并被吞食；影响降到 −2 时，同一信仰的所有聚居地都会执行这一行为。" ),
  ]},
  { id: "hero-tasks", title: "英雄任务", items: [
    D("Treat Populace", "把 Infected Populace 降低 50%，完成时移除该地点修正。", { location: "有人类人口且带有 <CrossReference name=\"Infected Populace\" /> 的聚居地。", meta: "Intrigue / Lore", statLine: "Complexity: 25　Profile: 50　Menace: 当前感染度的一半　XP: 42", preferenceText: "任务带有 Disease 与 Insect 负面标签；厌恶疾病和昆虫的英雄更愿意治疗。", image: "insect-infected-populace.png" }),
    D("Remove Vector", "在世界恐慌升高时刺杀当地的人类 ruler，阻止其继续传播感染；如果存在 heir，用未感染 heir 接替。", { location: "有未感染人类 ruler 的人类聚居地。", meta: "Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 0　XP: 36", preferenceText: "任务带 Insect、Disease、Cooperation 负面标签，以及 Cruel、Danger、Discord 正面标签；高 Awareness 英雄不愿执行，世界恐慌越高越可能执行。", image: "agent-insect-late-stage.png" }),
    D("Destroy Larva", "从 Hive 的 Larval Mass 移除约三分之一（至少 1），降低虫群资源。Awareness 较高、Shadow 较低的英雄会在世界恐慌高时主动执行。", { location: "有 Hive 与 <CrossReference name=\"Larval Mass\" /> 的地点。", meta: "Might", statLine: "Complexity: 15　Profile: 50　Menace: 当前 Larval Mass　XP: 29", preferenceText: "任务带 Disease、Insect 负面标签和 Danger 正面标签；偏好危险且厌恶疾病、昆虫的英雄更愿意执行。", image: "fungalHive_Grey.png" }),
  ]},
  { id: "challenges", title: "挑战", items: [
    D("Infect Populace", "在感染人口地点把 Infected Populace 增加 25%，最高 100%。完成后额外增加 8 Menace、2 Profile。", { location: "有人类人口的人类聚居地。", meta: "Intrigue / Lore", statLine: "Complexity: 25　Profile: 50　Menace: 50　XP: 42", preferenceText: "任务带有 Insect 与 Disease 标签；喜欢这些标签的英雄更愿意传播感染，厌恶者会降低执行意愿。", image: "insect-infected-populace.png" }),
    D("Targeted Infection", "让该地点作为 home 的所有 heroes 与 acolytes 获得 Cordyceps Infection，Chosen One 除外。", { location: "<CrossReference name=\"Infected Populace\" /> 达到 100% 的人类聚居地。", meta: "Intrigue / Lore", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36", preferenceText: "任务带有 Insect 与 Disease 标签；喜欢感染相关标签者更愿意执行。", image: "agent-insect-late-stage.png" }),
    D("Infect Ruler", "给已完全渗透地点的 ruler 添加 Cordyceps Infection。", { location: "已完全渗透、且有未感染 ruler 的人类聚居地。", meta: "Intrigue / Lore", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36", preferenceText: "任务带有 Insect 与 Disease 标签；喜欢感染相关标签者更愿意执行。", image: "insect-infected-populace.png" }),

  ]},
  { id: "events", title: "事件", items: [
    D("The buzzing of wings", "Cordyceps 初始 Agent 相关事件。条件是事件变量 ANW_INSECT_AGENT_1=0 且当前 Agent 属于 Cordyceps；选项有 70% 权重把变量改为 −1。", { meta: "事件", image: "eyes_0.png" }),
    D("Fear and Paranoia", "世界恐慌超过 20% 后，模组会在 Tomb of Gods 发出一次警告：有 Awareness 的人类会减少外出，并更可能当场杀死 Drones。", { meta: "全局警告", image: "insect-paranoia.png" }),
    D("Combat with Drone", "Agent 与 Drone 发生战斗后触发的本体事件；只有一个 “They are Irrelevant” 选项，不产生额外效果。", { meta: "本体事件", image: "agent-insect-drone-arthopod.png" })
  ]}
 ],
 relations: {
  "Start Hive": { effects: [{ name: "Hive", href: "#entry-hive" }] },
  "Infested Drone": { effects: [{ name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }] },
  "Arthropod Drone": { effects: [{ name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }, { name: "Larval Mass", href: "#entry-larval-mass" }] },
  "Assign Guard": { effects: [{ name: "Vespidic Guard", href: "#entry-vespidic-guard" }, { name: "Larval Mass", href: "#entry-larval-mass" }] },
  "Remove Hive": { effects: [{ name: "Hive", href: "#entry-hive" }] },
  "Airborne Spores": { effects: [{ name: "Infected Populace", href: "#entry-infected-populace" }, { name: "Hive Spire", href: "#entry-hive-spire" }] },
  "Vespidic Swarm": { effects: [{ name: "Vespidic Swarm", href: "#entry-vespidic-swarm-army" }, { name: "Larval Mass", href: "#entry-larval-mass" }] },
  "Internal Maturation": { effects: [{ name: "Vespidic Swarm", href: "#entry-vespidic-swarm-army" }] },
  "Disrupted Neurology": { effects: [{ name: "Disrupted Neurology", href: "#entry-disrupted-neurology-modifier" }] },
  "The Scent of Prey": { effects: [{ name: "Pheromone: Feeding", href: "#entry-pheromone-feeding" }] },
  "Infect Populace": { effects: [{ name: "Infected Populace", href: "#entry-infected-populace" }] },
  "Treat Populace": { effects: [{ name: "Infected Populace", href: "#entry-infected-populace" }] },
  "Targeted Infection": { effects: [{ name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }] },
  "Infect Ruler": { effects: [{ name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }] },
  "Destroy Larva": { effects: [{ name: "Larval Mass", href: "#entry-larval-mass" }] },
  "Hive": { sources: [{ name: "Start Hive", href: "#entry-start-hive" }], effects: [{ name: "Airborne Spores", href: "#entry-airborne-spores" }, { name: "Remove Hive", href: "#entry-remove-hive" }, { name: "Hive Spire", href: "#entry-hive-spire" }] },
  "Larval Mass": { sources: [{ name: "Arthropod Drone", href: "#entry-arthropod-drone" }], effects: [{ name: "Assign Guard", href: "#entry-assign-guard" }, { name: "Vespidic Swarm", href: "#entry-vespidic-swarm" }, { name: "Destroy Larva", href: "#entry-destroy-larva" }] },
  "Infected Populace": { sources: [{ name: "Infect Populace", href: "#entry-infect-populace" }, { name: "Airborne Spores", href: "#entry-airborne-spores" }], effects: [{ name: "Targeted Infection", href: "#entry-targeted-infection" }, { name: "Treat Populace", href: "#entry-treat-populace" }] },
  "Cordyceps Infection": { sources: [{ name: "Targeted Infection", href: "#entry-targeted-infection" }, { name: "Infect Ruler", href: "#entry-infect-ruler" }], effects: [{ name: "Infested Drone", href: "#entry-infested-drone" }, { name: "Start Hive", href: "#entry-start-hive" }] }
 }
};
const configs = { ophanim, mammon, "broken-maker": brokenMaker, "evil-beneath": evilBeneath, "deaths-games": deathsGames, cordyceps } as const;

function disambiguateConfigEntries(config: GodConfig) {
 const seen = new Map<string, number>();
 [...config.powers, ...config.initialAbilities, ...(config.drawCards?.items ?? []), ...config.sections.flatMap(section => section.items)].forEach(item => {
  const base = item.id ? "entry-" + item.id : anchorFor(item.name);
  const count = seen.get(base) ?? 0;
  if (count > 0 && !item.id) item.id = base.replace(/^entry-/, "") + "-" + (count + 1);
  seen.set(base, count + 1);
 });
}
Object.values(configs).forEach(disambiguateConfigEntries);

function anchorFor(name: string) {
 return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function allEntries(config: GodConfig) {
 return [...config.powers, ...config.initialAbilities, ...(config.drawCards?.items ?? []), ...config.sections.flatMap(section => section.items)];
}
function entryFor(config: GodConfig, name: string) {
 return allEntries(config).find(item => item.name === name);
}
function imageFor(config: GodConfig, image?: string) {
 const cacheBust = config.id === "deaths-games" ? "?v=2" : "";
 return image ? "./" + config.assetDir + "/" + image + cacheBust : undefined;
}

function CrossReference({ config, name, href, meta, text, image }: { config: GodConfig; name: string; href?: string; meta?: string; text?: string; image?: string }) {
 const [mobileOpen, setMobileOpen] = useState(false);
 const entry = entryFor(config, name);
 const relation = config.relations?.[name];
 const relationLink = relation?.effects?.[0]?.href ?? relation?.sources?.[0]?.href;
 const resolvedHref = href ?? (entry ? "#" + anchorFor(entry.name) : relationLink ?? "#");
 const resolvedText = text ?? (entry && "effect" in entry ? entry.effect : entry?.text) ?? relation?.effects?.[0]?.text ?? relation?.sources?.[0]?.text ?? "";
 const resolvedMeta = meta ?? (entry && "effect" in entry ? "神力" : entry ? "相关机制" : "相关机制");
 const resolvedImage = imageFor(config, image ?? (entry && "icon" in entry ? entry.icon : entry?.image));
 if (!entry && !relation && !href && !text) return <>{name}</>;
 return <><a className="cross-reference" href={resolvedHref} onClick={event => { if (window.matchMedia("(hover: none), (pointer: coarse)").matches) { event.preventDefault(); setMobileOpen(true); } }}><span className="cross-label">{name}</span><span className="cross-popover" role="tooltip">{resolvedImage && <span className="cross-image"><Image src={resolvedImage} alt="" fill sizes="72px" /></span>}<span className="cross-copy"><small>{resolvedMeta}</small><b>{name}</b><span>{resolvedText}</span><em>点击跳转至详情</em></span></span></a><MobileReferenceDialog open={mobileOpen} onClose={() => setMobileOpen(false)} name={name} meta={resolvedMeta} text={resolvedText} href={resolvedHref} imageSrc={resolvedImage} /></>;
}

function renderPlain(config: GodConfig, text: string, exclude?: string): ReactNode[] {
 const names = allEntries(config).map(item => item.name).filter(name => name !== exclude).sort((a, b) => b.length - a.length);
 if (!names.length) return [text];
 const pattern = new RegExp("(" + names.map(name => name.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")).join("|") + ")", "g");
 return text.split(pattern).map((part, index) => names.includes(part) ? <CrossReference key={part + "-" + index} config={config} name={part} /> : part);
}
function RichText({ config, text, exclude }: { config: GodConfig; text: string; exclude?: string }) {
 const marker = /<CrossReference name="([^"]+)"(?: href="([^"]+)")?(?: meta="([^"]+)")?\s*\/>/g;
 const nodes: ReactNode[] = [];
 let cursor = 0;
 let match: RegExpExecArray | null;
 while ((match = marker.exec(text))) {
   if (match.index > cursor) nodes.push(...renderPlain(config, text.slice(cursor, match.index), exclude));
   nodes.push(<CrossReference key={"marker-" + match.index} config={config} name={match[1]} href={match[2]} meta={match[3]} />);
   cursor = marker.lastIndex;
 }
 if (cursor < text.length) nodes.push(...renderPlain(config, text.slice(cursor), exclude));
 return <>{nodes}</>;
}

function ExpandableRow({ config, entryId, name, seal, cost, image, baseGame = false, open, onToggle, children }: { config: GodConfig; entryId: string; name: string; seal?: number; cost?: number | string; image?: string; baseGame?: boolean; open: boolean; onToggle: (id: string) => void; children: ReactNode }) {
 return <article className={"expandable-row " + (baseGame ? "base-game-entry " : "") + (open ? "is-open" : "")} id={entryId}><button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>{seal !== undefined && <span className="summary-seal">{seal}</span>}{image && <span className="summary-image"><Image src={imageFor(config, image)!} alt="" fill sizes="56px" /></span>}<span className="summary-name">{name}</span><ChevronDown className="summary-chevron" size={16} />{cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}</button><div className="expandable-content"><div className="expandable-inner">{children}</div></div></article>;
}
function RelationGroup({ config, title, items }: { config: GodConfig; title: string; items?: Relation[] }) {
 if (!items?.length) return null;
 return <div className="relation-group"><h4>{title}</h4><div className="relation-links">{items.map(item => <CrossReference key={title + "-" + item.name} config={config} name={item.name} href={item.href} meta={item.meta} text={item.text} image={item.image} />)}</div></div>;
}

function DetailGrid({ config, items, openEntries, onToggle }: { config: GodConfig; items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void }) {
 return <div className="expandable-table">{items.map(item => { const id = item.id ? "entry-" + item.id : anchorFor(item.name); return <ExpandableRow key={id} config={config} entryId={id} name={item.name} seal={item.seal} image={item.image} baseGame={item.baseGame} open={openEntries.has(id)} onToggle={onToggle}>{item.meta && <div className="expanded-meta">{item.meta}</div>}{item.location && <div className="task-location"><b>执行地点</b><RichText config={config} text={item.location} exclude={item.name} /></div>}{item.statLine && <div className="task-stat-line">{item.statLine}</div>}{item.limit ? <><div className="expanded-section"><h4>具体效果</h4><p><RichText config={config} text={item.text} exclude={item.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText config={config} text={item.limit} exclude={item.name} /></p></div></> : <p><RichText config={config} text={item.text} exclude={item.name} /></p>}{item.preferenceText && <div className="preference-note"><b>执行倾向</b><p><RichText config={config} text={item.preferenceText} exclude={item.name} /></p></div>}<RelationGroup config={config} title="来源" items={config.relations?.[item.name]?.sources} /><RelationGroup config={config} title="造成的效果" items={config.relations?.[item.name]?.effects} /></ExpandableRow>; })}</div>;
}

function RecordSection({ config, section, index, openEntries, onToggle }: { config: GodConfig; section: SectionConfig; index: string; openEntries: Set<string>; onToggle: (id: string) => void }) {
 if (!section.items.length) return null;
 return <section id={section.id} className="section records-section"><div className="plain-heading"><p className="section-index">{index} / {section.title}</p><h2>{section.title}</h2></div><DetailGrid config={config} items={section.items} openEntries={openEntries} onToggle={onToggle} /></section>;
}

function GodArchive({ config, onGodChange }: { config: GodConfig; onGodChange: (god: ArchiveGodChoice) => void }) {
 const root = useRef<HTMLElement>(null);
 const [sidebarHidden, setSidebarHidden] = useState(false);
 const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
 const details = allEntries(config);
 const allIds = details.map(item => item.id ? "entry-" + item.id : anchorFor(item.name));
 const toggle = (id: string) => setOpenEntries(current => { const next = new Set(current); next.has(id) ? next.delete(id) : next.add(id); return next; });
 useGSAP(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.from(".hero-line", { yPercent: 115, duration: 1.05, ease: "power4.out" }); gsap.from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.2, ease: "power3.out" }); gsap.utils.toArray<HTMLElement>(".reveal-image").forEach(el => gsap.fromTo(el, { scale: 1.08, opacity: .2 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 92%", end: "bottom 58%", scrub: .8 } })); }, { scope: root });
 const hasAgent = config.id !== "broken-maker"; const agentIndex = config.drawCards ? "05" : "04"; const sectionStart = config.drawCards ? (hasAgent ? 6 : 5) : (hasAgent ? 5 : 4); const nav: string[][] = [["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印与 Agent 上限"], ["03", "powers", "神力"], ...(config.drawCards ? [["04", "draw-cards", "抽取卡牌"]] : []), ...(hasAgent ? [[agentIndex, "agent", "初始 Agent 能力"]] : []), ...config.sections.filter(section => section.items.length).map((section, index) => [String(index + sectionStart).padStart(2, "0"), section.id, section.title])];
 return <main ref={root} className={"site-shell " + config.theme + (sidebarHidden ? " sidebar-hidden" : "")} onClickCapture={event => { const a = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (a) setOpenEntries(current => new Set(current).add(a.getAttribute("href")!.slice(1))); }}><aside className="sidebar"><div className="sidebar-head"><div className="sidebar-brand god-switcher"><span className="brand-mark"><GodMark god={config.id} /></span><label><select value={config.id} onChange={event => onGodChange(event.target.value as ArchiveGodChoice)} aria-label="切换神祇"><option value="she-who-will-feast">SHE WHO WILL FEAST</option><option value="iastur">IASTUR</option><option value="vinerva">VINERVA</option><option value="ophanim">OPHANIM</option><option value="mammon">MAMMON</option><option value="broken-maker">THE BROKEN MAKER</option><option value="evil-beneath">THE EVIL BENEATH</option><option value="deaths-games">DEATH'S GAMES</option><option value="cordyceps">CORDYCEPS</option><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option><option value="chandalor">CHANDALOR</option></select><small>神祇资料库</small></label></div><button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden(value => !value)}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><button className="sidebar-index-link" type="button" onClick={() => onGodChange("index")}>← 返回神祇索引</button><nav className="sidebar-nav">{nav.map(([index, id, label]) => <a href={"#" + id} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside><div className="content-shell"><header id="top" className="hero"><div className="hero-backdrop"><Image src={imageFor(config, config.background)!} alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 {config.number}</span><span>{config.caption}</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">{config.name}</span></span></h1></div><div className="hero-facts"><div><b>{config.awaken.replace(/[^0-9]/g, "") || "—"}</b><span>{config.progressLabel === "吞噬进度" ? "封印阈值" : "回合苏醒"}</span></div><div><b>{config.finalAgents}</b><span>最终 Agent 上限</span></div><div><b>{config.panic}</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src={imageFor(config, config.portrait)!} alt={config.name + " 神祇立绘"} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div></div></header><section id="loop" className="section overview-section"><div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div><div className="overview-layout"><article className="overview-main"><h3>核心玩法</h3><ol className="core-sequence">{config.core.map((line, index) => <li key={index}><span>{String(index + 1).padStart(2, "0")}</span><p><RichText config={config} text={line} /></p></li>)}</ol>{config.overviewExtra && <div className="overview-subsection"><h3>{config.overviewExtra.title}</h3><p><RichText config={config} text={config.overviewExtra.text} /></p></div>}</article><aside className="basic-facts"><h3>基础信息</h3><dl><div><dt>封印解锁</dt><dd>{config.unlockMethod}</dd></div><div><dt>最大回合数</dt><dd>{config.maxTurns}</dd></div><div><dt>苏醒</dt><dd>{config.awaken}</dd></div><div><dt>苏醒时世界恐慌</dt><dd>{config.panic}</dd></div><div><dt>初始 Agent 上限</dt><dd>{config.seals[0]?.agents}</dd></div><div><dt>最终 Agent 上限</dt><dd>{config.finalAgents}</dd></div>{config.id === "broken-maker" && <div><dt>初始 Agent</dt><dd>没有初始 Agent</dd></div>}</dl><div className="special-victory"><h3>特殊胜利</h3><p>{config.specialVictory ?? "无"}</p></div></aside></div></section><section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印</p><h2>封印、阈值与 Agent 上限</h2></div></div><div className="seal-table"><div className="seal-head"><span>封印</span><span>{config.progressLabel}</span><span>Agent</span><span>神力/恢复</span><span>本阶段内容</span></div>{config.seals.map(item => <div className="seal-row" key={item.seal}><span className="seal-number">{item.seal}</span><span className="turn">{item.progress}</span><span className="agent-count">{item.agents}</span><span className="power-gain">{config.id === "mammon" ? "动态 / 动态" : config.id === "deaths-games" ? "7 / 0.146" : config.id === "evil-beneath" ? `${Math.max(3, item.seal + 1)} / ${(0.035 * Math.max(3, item.seal + 1)).toFixed(3)}` : `${item.seal + 1} / ${(0.035 * (item.seal + 1)).toFixed(3)}`}</span><span className="seal-reward">{item.reward.map((reward, index) => <span className="seal-reference-item" key={reward}><RichText config={config} text={reward} />{index < item.reward.length - 1 && <i>、</i>}</span>)}</span></div>)}</div><div className="seal-formula"><b>神力恢复</b><span>{config.powerRecovery}</span></div></section><section id="powers" className="section powers-section records-section"><div className="plain-heading"><p className="section-index">03 / 神力</p><h2>神力</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{config.powers.map(power => { const id = power.id ? "entry-" + power.id : anchorFor(power.name); return <ExpandableRow key={id} config={config} entryId={id} name={power.name} seal={power.seal} cost={power.cost} image={power.icon} open={openEntries.has(id)} onToggle={toggle}><div className="expanded-section"><h4>具体效果</h4><p><RichText config={config} text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText config={config} text={power.limit} exclude={power.name} /></p></div><RelationGroup config={config} title="造成的效果" items={config.relations?.[power.name]?.effects} /></ExpandableRow>; })}</div></section>{config.drawCards && <RecordSection config={config} section={config.drawCards} index="04" openEntries={openEntries} onToggle={toggle} />}{config.id !== "broken-maker" && <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">{agentIndex} / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow config={config} entryId={anchorFor("Supplicant")} name="Supplicant" image={config.supplicant} open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggle}><p className="agent-stat-line"><b>基础属性：</b>{config.initialStats}</p>{config.initialAbilities.length ? <div className="ability-list">{config.initialAbilities.map((ability, index) => <div className="ability" id={anchorFor(ability.name)} key={ability.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{ability.name}</h4><p><RichText config={config} text={ability.text} exclude={ability.name} /></p></div></div>)}</div> : <p>没有额外的初始 Agent 能力。</p>}</ExpandableRow></div></section>}{config.sections.map((section, index) => <RecordSection config={config} section={section} index={String(index + sectionStart).padStart(2, "0")} openEntries={openEntries} onToggle={toggle} key={section.id} />)}<footer className="archive-footer"><button type="button" className="sidebar-index-link" onClick={() => onGodChange("index")}>← 返回神祇索引</button></footer></div></main>;
}
export function OphanimArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={ophanim} onGodChange={onGodChange} />; }
export function MammonArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={mammon} onGodChange={onGodChange} />; }
export function BrokenMakerArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={brokenMaker} onGodChange={onGodChange} />; }
export function EvilBeneathArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={evilBeneath} onGodChange={onGodChange} />; }
export function DeathsGamesArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={deathsGames} onGodChange={onGodChange} />; }

export function CordycepsArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={cordyceps} onGodChange={onGodChange} />; }
