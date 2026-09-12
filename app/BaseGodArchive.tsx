"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, CircleDot, Eye, PanelLeftClose, PanelLeftOpen, Shield } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type ArchiveGodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "ophanim" | "mammon" | "broken-maker" | "kishi" | "living-void" | "chandalor";
type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
type DetailItem = { name: string; text: string; image?: string; seal?: number; meta?: string; statLine?: string; preferenceText?: string; id?: string; baseGame?: boolean };
type PowerItem = { name: string; seal: number; cost: string | number; icon?: string; effect: string; limit: string; id?: string };
type SealItem = { seal: number; progress: number; agents: number; reward: string[] };
type SectionConfig = { id: string; title: string; items: DetailItem[]; media?: boolean };
type GodConfig = {
  id: "ophanim" | "mammon" | "broken-maker"; name: string; number: string; theme: string; assetDir: string; background: string; portrait: string; supplicant?: string;
  flavour: string; caption: string; unlock: string; maxTurns: string; awaken: string; panic: string; finalAgents: string; progressLabel: string; unlockMethod: string; powerRecovery: string;
  core: string[]; overviewExtra?: { title: string; text: string }; seals: SealItem[]; powers: PowerItem[]; initialAbilities: DetailItem[]; initialStats: string; sections: SectionConfig[];
  relations?: Record<string, { sources?: Relation[]; effects?: Relation[] }>;
};
const O = (name: string, seal: number, cost: string | number, effect: string, limit: string, icon?: string): PowerItem => ({ name, seal, cost, effect, limit, icon });
const D = (name: string, text: string, extra: Partial<DetailItem> = {}): DetailItem => ({ name, text, ...extra });

const ophanim: GodConfig = {
 id: "ophanim", name: "Ophanim, The Divine Beyond", number: "04", theme: "ophanim-theme", assetDir: "ophanim", background: "background.png", portrait: "portrait.png", supplicant: "unit_ophanim.png",
 flavour: "Ophanim 是披着神圣光辉的完美主义神祇。它用 Faith 把恐惧中的人类纳入秩序，再把 Faith 推到极限，将城市改造成没有自由意志的神权机器。",
 caption: "Faith、Doubt 与神权国家", unlock: "先用 She Who Will Feast 获胜", maxTurns: "常规 500 回合", awaken: "第 400 回合", panic: "75%", finalAgents: "5", progressLabel: "回合", unlockMethod: "常规回合解锁",
 powerRecovery: "常规恢复：0.035 ×（已破封印数 + 1）× 难度缩放；Sap Lifeforce 处于 −1 / −2 时，源码额外增加 0.02 / 0.04 神力每回合（即参数增益 +2% / +4%）。神力未满时，每座对应神庙还会使所在城市每回合减少 2 / 4 人口。",
 core: [
  "用 <CrossReference name=\"Start Faith\" /> 在有渗透的城市建立 <CrossReference name=\"Ophanim's Faith\" />，并利用阴影、邻近 Faith 与恐慌让信仰扩张。",
  "让 Faith 超过 150% 后用 <CrossReference name=\"Theocracy\" /> 接管国家；受控国家会让 Faith 增长更快，并可被组织成对外发动战争的工具。",
  "Faith 达到 300% 会把城市变成完美神权城市，压制自由意志和动乱；但邻近的低 Faith 人口会看见这种变化并积累 <CrossReference name=\"Ophanim's Doubt\" />。",
  "用 <CrossReference name=\"Root out Doubters\" />、<CrossReference name=\"Sectarian Violence\" /> 或 Holy Order 的 <CrossReference name=\"Holy: Inquisition\" /> 清除 Doubt；放任 Doubt 达到 100% 会向邻地蔓延。",
  "用 <CrossReference name=\"Crusade\" />、<CrossReference name=\"Empower Slaves\" /> 和 <CrossReference name=\"Perfect Servant\" /> 把完美城市与 Faith 转化成军力和新 Agent。",
 ],
 overviewExtra: { title: "Faith 与 Doubt 的循环", text: "Faith 会降低所在地 Shadow，并从阴影威胁、邻近 Faith 和神权控制中获得增长；Ruler Awareness、Doubters 和低 Faith 邻城会拖慢它。高 Faith 城市让相邻低 Faith 人口看到自己的未来，逐步生成 Doubt；Doubt 降低 Faith，达到 100% 后向邻地传播。" },
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
  O("Excise Doubt", 3, 0, "命令一个受控国家的军队夷平 Faith 超过 150% 的目标城市，以彻底移除 Doubt。代价是牺牲整座城市的人口和领地。", "目标必须是 Ophanim 控制国家中 Faith 超过 150% 的人类城市，并且有可用、没有当前请求的军队。", "ophanim-doubt.png"),
  O("Crusade", 4, 0, "让所有已经转化为 Ophanim 神权国家的社会向目标国家宣战；已经在战争中的国家不会重复宣战。", "必须目标为一个社会。", "crusade.png"),
  O("Empower Slaves", 5, 2, "治疗一支来自完美城市的 Ophanim 人类军队，恢复其缺失 HP 的 50%。", "目标必须是来自已完美城市的军队。", "unit_ophanim.png"),
  O("Perfect Servant", 6, 4, "把完美城市中的英雄直接接管为 Agent。它消耗 recruitment point，并把英雄纳入 Ophanim 的 Agent 名额。", "目标必须是完美城市中的英雄，需要 recruitment point 和空余 Agent 位。", "perfect-city.png"),
  O("Smite", 7, 7, "从天空降下 Holy Fire，彻底摧毁目标城市，并可能连带摧毁三格内的其他地点。", "可以对任意地点施放。", "smite.png"),
 ],
 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Duality（shadow / faith）", "完成 Infiltrate 时交替产生两种结果：一回合给当地增加 30% Shadow，下一回合给 Ophanim's Faith 增加 20%；之后继续交替。"), D("Leader of the Faith", "与 Ophanim's Faith 同处一地时，每回合额外推动 Faith 增长 2%。"), D("Inquisitor", "与 Ophanim's Doubt 同处一地时，每回合降低 Doubt 3%，抵消其通常增长后的净变化约为 −1%；代价是每回合损失 1 人口，人口耗尽会毁灭城市。")],

 sections: [
  { id: "traits", title: "人物特质", items: [D("Preacher", "完成 Infiltrate 时自动建立或强化 Ophanim's Faith，初始增加 20% Faith。")] },
  { id: "location-modifiers", title: "地点修正", items: [D("Ophanim's Faith", "人口逐渐信仰 Ophanim。Faith 会因阴影威胁、邻近 Faith、神权控制而增长；它降低当地 Shadow，并在超过 300% 时触发城市完美化。Faith 同时降低安全，且与 Doubt 互相拉扯。", { image: "start-faith.png" }), D("Ophanim's Doubt", "由低 Faith 人口目睹邻近完美城市而产生。它降低 Faith，超过 100% 后会向邻地传播；必须用 Root out Doubters、Sectarian Violence 或 Inquisition 清除。", { image: "ophanim-doubt.png" }), D("Festering Doubt", "Paranoid Society 教义下的延迟状态。它会先存在 5 回合，之后才转成真正的 Ophanim's Doubt；期间仍会带来繁荣度惩罚。", { image: "ophanim-doubt.png" }), D("Perfect City", "Faith 达到 300% 后的完美城市状态：消灭自由意志、压制 Unrest，并成为 Ophanim 军队与 Perfect Servant 的来源。", { image: "perfect-city.png" })] },
  { id: "locations", title: "地点与设施", items: [D("Ophanim's Holy Order", "Ophanim 开局在 Tomb of Gods 建立的 Holy Order，名称为 Ophanim's Faith。它不使用普通外交，能建立 Temple、召集 Acolyte，并通过教义把 Faith 变成社会控制力。", { image: "call-to-serve.png" }), D("Ophanim Theocracy", "Theocracy 接管后形成的国家形态。Faith 增长更快，可以接受 Crusade 命令，并将完美城市的军队变成 Ophanim 的战争工具。", { image: "theocracy.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Ophanite Acolyte", "Call to Serve 召集的宗教 Agent，可以建造 Temple，并根据 Ophanim 教义自动执行宗教任务。", { image: "unit_ophanim.png" }), D("Perfect Servant", "来自 Perfect City 的英雄型 Agent；它不是独立兵种，而是通过 Perfect Servant 神力把原英雄转化为玩家 Agent。", { id: "perfect-servant-unit", image: "perfect-city.png" })] },
  { id: "armies", title: "军队", items: [D("Ophanim Army", "来自 Perfect City 的军队。Empower Slaves 可以治疗它；Crusade 会让 Ophanim 控制的国家主动对外宣战，军队因此成为 Faith 扩张和清除 Doubt 的主要工具。", { image: "sleepless-labour.png" })] },
  { id: "religion", title: "宗教与教义", items: [D("Ophanim's Faith", "该 Holy Order 开局预设 Temple Builders 与 Preachers 为正向，Alignment 为 −3，并插入三项特殊教义：Paranoid Society、Sap Lifeforce、Inquisitors。它信仰玩家神祇，不能使用普通外交。", { id: "ophanim-faith-religion" }), D("Paranoid Society", "影响 Faith 与 Doubt 的传播逻辑；当状态为负时，Temple 附近更容易把新 Doubt 延迟为 Festering Doubt。"), D("Sap Lifeforce", "源码状态为 −1 或 −2 时，每回合神力恢复分别额外增加 0.02 或 0.04；只要神力未满，每座对应神庙的城市每回合减少 2 或 4 人口，人口不足 2 时城市会直接陷入废墟。"), D("Inquisitors", "决定 Holy: Inquisition 是否可用；Elder 对齐状态允许 Acolyte 以宗教任务清除 Doubt，但会制造人口损失与 Death。", { meta: "宗教任务：Holy: Inquisition" })] },
  { id: "challenges", title: "挑战", items: [D("Root out Doubters", "在 Ophanim 控制的社会中把 Doubt 降低最多 60%，但每清除 5 点 Doubt 会损失约 1 人口，并增加 Death。完成时额外增加 5 Menace。", { meta: "Command", statLine: "任务信息：复杂度 25　暴露度 50　危险 50　经验 42", preferenceText: "厌恶 Cruelty 或 Discord 的英雄不愿执行；这是带有清洗性质的任务。" }), D("Sectarian Violence", "在 Ophanim 未控制的社会中把 Doubt 降低最多 40%，同时减少同量 Faith，按比例增加 Unrest 和 Death；完成时增加 15 Menace、10 Profile。", { meta: "Intrigue", statLine: "任务信息：复杂度 50　暴露度 50　危险 50　经验 72", preferenceText: "厌恶 Cruelty 或 Discord 的英雄更不愿执行；它会把当地信仰冲突升级成暴力。" }), D("Holy: Inquisition", "Ophanim Holy Order 成员可最多降低 50 Doubt；每清除 4 点 Doubt 会损失约 1 人口并增加 Death。", { meta: "Religion / Command", statLine: "任务信息：复杂度 20　暴露度 50　危险 0　经验 31", preferenceText: "只有 Inquisitors 教义处于 Elder 对齐状态的 Holy Order 成员可以执行。" })] }
 ],
 relations: { "Ophanim's Faith": { sources: [{ name: "Start Faith", href: "#entry-start-faith" }], effects: [{ name: "Theocracy", href: "#entry-theocracy" }, { name: "Perfect City", href: "#entry-perfect-city" }] }, "Ophanim's Doubt": { sources: [{ name: "Faith 与 Doubt 的循环", href: "#loop" }], effects: [{ name: "Root out Doubters", href: "#entry-root-out-doubters" }, { name: "Sectarian Violence", href: "#entry-sectarian-violence" }, { name: "Holy: Inquisition", href: "#entry-holy-inquisition" }] } },
};

const mammon: GodConfig = {
 id: "mammon", name: "Mammon, Wealth of Man, Spirit of the Mountain", number: "05", theme: "mammon-theme", assetDir: "mammon", background: "background.png", portrait: "portrait.png", supplicant: "portrait.png",
 flavour: "Mammon 是由繁荣庆典中的贪婪与嫉妒诞生的山之灵。它沿贸易路线传播影响，把人口变成财富，把财富变成罪恶，最后连自己的信徒也一并吞食。",
 caption: "贸易网络、贪婪与吞噬", unlock: "先用 She Who Will Feast 获胜", maxTurns: "常规 500 回合", awaken: "吞噬进度达到 800", panic: "75%", finalAgents: "6", progressLabel: "吞噬进度", unlockMethod: "不按回合解锁：吞噬人群或用 Devour Sin 吞噬罪恶",
 powerRecovery: "神力上限和恢复随 Mammon's Influence 覆盖的人口与繁荣度动态增加；公式核心是受影响人口 × Prosperity 的平方根再乘 0.125。",
 core: [
  "开局在贸易网络旁建立 <CrossReference name=\"The Mountain's Wealth\" />，并让与山相连的贸易路线带上 <CrossReference name=\"Mammon's Influence\" />。",
  "用 <CrossReference name=\"Call of the Mountain\" /> 把人群变成前往山脉的 Lured Crowd；人群抵达后会被吞食，推进封印并恢复山中财富。",
  "沿贸易路线用 <CrossReference name=\"Grow Influence\" /> 扩张，令繁荣高的地点形成 Decadence，繁荣低的地点形成 Greed；两者都会改变统治者的行为。",
  "利用贪婪国家发动的进攻战争，在首都使用 <CrossReference name=\"Devour Sin\" /> 一次吞噬 100 灵魂；这既推进封印，也在山中留下 Sins Devoured。",
  "封印 6 后用 <CrossReference name=\"All is Mine\" /> 开始最终进食：所有受影响城市每回合失去人口，封印随之推进，直到胜利或山中财富被英雄掠夺殆尽。",
 ],
 overviewExtra: { title: "山中财富与风险", text: "The Mountain's Wealth 以财富百分比表示，初始为 100%。吞噬人群会恢复财富、增加山的 Menace 和 Profile，同时给更多贸易扩张额度；英雄的 Raid Mountain 每次夺走 10%财富并降低 Menace 10，财富降到 0%会直接击败 Mammon。所有扩张都会提高被英雄发现和袭击的风险。" },
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Grow Influence", "Devour Sin", "Call of the Mountain", "Create Shadow Market", "Smuggling"] }, { seal: 1, progress: 15, agents: 2, reward: ["Distraction"] },
  { seal: 2, progress: 30, agents: 3, reward: [] }, { seal: 3, progress: 70, agents: 3, reward: ["Call of Wealth", "Gift from The Mountain"] },
  { seal: 4, progress: 200, agents: 4, reward: ["Plutomania"] }, { seal: 5, progress: 300, agents: 5, reward: ["Danger in The Mountain", "Embrace of Metal"] },
  { seal: 6, progress: 500, agents: 6, reward: ["All is Mine"] }, { seal: 7, progress: 800, agents: 6, reward: ["苏醒"] },
 ],
 powers: [
  O("Grow Influence", 0, 0, "沿连接 Mammon 山脉的贸易路线增加一个受影响地点，并消耗已吞食人群换来的扩张额度；每一步都会提高山的 Profile。", "目标必须是贸易路线上的人类聚居地，与已有 Influence 相邻，并且仍有扩张额度。", "grow-influence.png"),
  O("Devour Sin", 0, 0, "在贪婪达到 50% 的进攻战争首都吞噬 100 灵魂，推进封印、恢复山中财富，并留下 Sins Devoured。每个地点只能吞噬一次。", "目标必须是非 Dark Empire 的人类首都；其国家必须主动发动进攻战争，并有至少 50% Greed。", "devour-sin.png"),
  O("Call of the Mountain", 0, 1, "从受影响或邻近受影响的城市召集约 25% 人口，生成不可控制的 Lured Crowd。人群会沿路线前往 The Mountain，英雄可在途中执行 Save Crowd。", "目标为人口至少 10 的人类聚居地，且该地或邻地 Mammon's Influence 达到 90% 以上。", "grow-influence.png"),
  O("Distraction", 1, 1, "让一个有 40 Gold 的己方 Agent 花掉这笔钱，打断所在地所有非玩家英雄的当前任务，并使其 Disrupted 3 回合。", "目标 Agent 必须有至少 40 Gold，且所在地点或邻地有 Mammon's Influence。", "distraction.png"),
  O("Create Shadow Market", 0, 1, "在已渗透的城市建立 Shadow Market。Agent 可以继续发展它，使地点 Prosperity 下降并增加 Greed；市场会产生 Menace 和 Profile，还能通过贸易路线连接并提高另一地点 Prosperity。", "必须是渗透度大于 0、尚无 Shadow Market 的城市。", "shadow-market.png"),
  O("Smuggling", 0, 1, "把一个 100% 渗透的城市连接到 5 格内尚未连接的 Shadow Market，建立 Smuggling 修正并立即加入 100% Mammon's Influence。", "目标城市必须 100% 渗透，5 格内要有未连接 Shadow Market，且自身没有 Shadow Market 或 Smuggling。", "smuggling.png"),
  O("Call of Wealth", 3, 1, "把附近一部分人口诱导到 Decadence 聚居地，形成带目标地的人群，使其人口重新填充到繁荣中心。", "目标为人口低于最大人口 75% 的人类聚居地，并带有 Decadence。", "all-is-mine.png"),
  O("Plutomania", 4, 3, "让 Decadence 达到 100% 的统治者获得强烈 Gold 喜好，因追逐财富而作出增加 Unrest、引发内战或错误支出的决定。", "目标必须是带有 100% Decadence 的人类聚居地，且存在统治者。", "plutomania.png"),
  O("Gift from The Mountain", 3, 0, "给一个己方 Agent 150 Gold，但从 The Mountain's Wealth 中扣除 10%财富；财富不会低于 1%。", "目标必须是己方 Agent，且山中财富高于 10%。", "gift-from-mountain.png"),
  O("Danger in The Mountain", 5, 3, "让 Raid Mountain 的危险增加 5，最高额外危险为 15。英雄执行 Raid Mountain 时会随机承受 0 到危险值的伤害，触发伤害后危险会降低。", "必须施放在 The Mountain，且施放后危险不会超过 15。", "danger-in-mountain.png"),
  O("Embrace of Metal", 5, 5, "在城市建立 Armoured Populace。修正每回合增长 2%，到 100% 后把约一半人口转成不可控制的 Armoured Populace 军队；军队进攻或夷平时会反过来喂养 Mammon。", "目标必须是尚无 Armoured Populace 修正的人类聚居地。", "embrace-of-metal.png"),
  O("All is Mine", 6, 5, "在 The Mountain 开始最终进食。所有受 Mammon 影响的人类聚居地每回合平均失去 30%人口，封印按被吞食人口推进；山的 Menace 与 Profile 每回合各增加 1。", "必须施放在 The Mountain，且不能重复施放。", "all-is-mine.png"),
 ],

 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。",
 initialAbilities: [D("Priceless Gift", "获得该特质时，从物品池得到一件神器级物品。"), D("Wealth Creator", "身处 Mammon's Influence 内或邻近地点时，每回合获得 3 Gold。"), D("Wealth Begets Wealth", "获得该特质时立即得到 200 Gold。")],
 sections: [
  { id: "traits", title: "人物特质", items: [D("Plutomania", "由 Mammon's Plutomania 赋予的强烈 Gold 喜好，会让统治者作出高风险的财富决策。", { baseGame: true })] },
  { id: "location-modifiers", title: "地点修正", items: [D("The Mountain's Wealth", "The Mountain 的财富储备，初始 100%。英雄 Raid Mountain 每次掠走 10%；财富降到 0%会使 Mammon 失败。它还记录可扩张步数、Menace 和 Profile。", { image: "grow-influence.png" }), D("Mammon's Influence", "强度达到 100%时，本地及邻地均受 Mammon 影响，允许使用 Mammon 神力并让 Greed / Decadence 增长。贸易路线断裂或地点易手时会消失。", { image: "grow-influence.png", baseGame: true }), D("Greed", "繁荣度低而受 Mammon 影响时形成。人物渴望财富并嫉妒富裕者；贪婪统治者可能在邻近 Decadence 国家时发动战争。", { image: "shadow-market.png", baseGame: true }), D("Decadence", "繁荣度高而受 Mammon 影响时形成。它把人口变成奢靡、失去人性的财富阶层，是 Call of Wealth 与 Plutomania 的前置。", { image: "grow-influence.png", baseGame: true }), D("Sins Devoured", "Devour Sin 后留下的记录，表示该地点的贪婪战争罪恶已经被 Mammon 吞食，不能再次作为同一目标。", { image: "all-is-mine.png" }), D("Shadow Market", "本体市场修正。Agent 可发展它以降低 Prosperity、提高 Greed，并将其连接到另一地点来重分配财富。", { baseGame: true }), D("Smuggling", "本体走私修正。它把 100% 渗透城市接入未连接的 Shadow Market，并持续提供 Mammon's Influence 与 Prosperity。", { baseGame: true }), D("Armoured Populace", "由 Embrace of Metal 生成，修正每回合增长 2%，到 100%时把约一半人口转成 Armoured Populace 军队。", { image: "all-is-mine.png" })] },
  { id: "locations", title: "地点与设施", items: [D("The Mountain", "Mammon 的初始据点，代码上使用 Tomb of Gods 的地点类型并标记为山脉。它承载 The Mountain's Wealth、Raid Mountain 和所有最终进食。", { image: "grow-influence.png" }), D("Shadow Market", "由神力建立的城市市场设施，既是降低 Prosperity 和制造 Greed 的起点，也是 Smuggling 的连接端。", { id: "shadow-market-location", image: "shadow-market.png", baseGame: true })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Lured Crowd", "Call of the Mountain 或 Call of Wealth 产生的不可控制人群。它会沿路线前往目标；英雄可执行 Save Crowd 把其中一部分劝回。", { image: "all-is-mine.png" }), D("Armoured Populace", "由城市人口转化而来的不可控制军队，会无视和平直接夷平人类城市；每次战斗或夷平都会为 Mammon 提供额外吞噬进度。", { id: "armoured-populace-unit", image: "all-is-mine.png" })] },
  { id: "armies", title: "军队", items: [D("Armoured Populace Army", "不可控制、不会自然解散的黄金自动人军队。它优先攻击人类聚居地，进攻与夷平都会让 Mammon 吞噬额外灵魂，并推进封印。", { image: "all-is-mine.png" })] },
  { id: "religion", title: "宗教与教义", items: [D("Mammon's Influence", "Mammon 没有独立 Holy Order；他的宗教表达为贸易网络、财富诱惑与 Greed / Decadence 的地点循环。受影响统治者会根据繁荣度分化成贪婪或颓败两类，并互相敌视。"), D("Greed 与 Decadence 的人物偏好", "Greedy 统治者会厌恶 Decadent 统治者：如果自己是公爵，会在颓败君主下制造政治动乱；如果两国接壤，可能直接发动战争。Mammon 可以把这种战争转化为 Devour Sin 的资源。", { meta: "宗教与社会机制" })] },
  { id: "hero-tasks", title: "英雄任务", items: [D("Save Crowd", "劝说前往 The Mountain 的 Lured Crowd 返回家园；成功救回的人口数量取决于 Command 与 Lore，剩余人群继续前往山脉。", { meta: "Command", statLine: "任务信息：复杂度 10　暴露度 60　危险 50　经验 22", preferenceText: "喜欢 Cooperation、厌恶 Gold 的英雄更愿意执行；喜欢 Gold 的英雄会被任务目标吸引较少。" }), D("Raid Mountain", "进入 The Mountain 掠夺 10%财富，并获得 100 Gold；同时降低山的 Menace 10。若财富归零，Mammon 立即失败。", { meta: "Might", statLine: "任务信息：复杂度 15　暴露度＝山的 Profile　危险＝山的 Menace + 3　经验 28", preferenceText: "喜欢 Gold 或喜欢危险的英雄更愿意执行；Mammon 的 Menace 不会像普通 Menace 那样因英雄 Shadow 而自然降低。" })] },
  { id: "challenges", title: "挑战", items: [D("Investigate Population", "调查并移除 Armoured Populace 修正；任务本身的暴露度与危险随该修正当前强度变化。", { meta: "Lore", statLine: "挑战信息：复杂度 60　暴露度＝装甲人口强度　危险＝装甲人口强度　经验 84", preferenceText: "喜欢 Cooperation 的英雄更愿意调查这种威胁。" })] }
 ],
 relations: { "The Mountain's Wealth": { sources: [{ name: "开局建立", href: "#loop", meta: "Mammon 开局机制" }], effects: [{ name: "Raid Mountain", href: "#entry-raid-mountain" }, { name: "All is Mine", href: "#entry-all-is-mine" }] }, "Mammon's Influence": { sources: [{ name: "Grow Influence", href: "#entry-grow-influence" }, { name: "Smuggling", href: "#entry-smuggling" }], effects: [{ name: "Greed", href: "#entry-greed" }, { name: "Decadence", href: "#entry-decadence" }] } },
};

const brokenMaker: GodConfig = {
 id: "broken-maker", name: "The Broken Maker", number: "06", theme: "broken-maker-theme", assetDir: "broken-maker", background: "background.png", portrait: "background.png", supplicant: "agent_supplicantUnder.png",
 flavour: "创造血肉的神本身却是不完整的。The Broken Maker 不断雕刻血脉、毁灭旧世界、等待下一代在废墟上重生，再把上一轮积累的诅咒提炼成新的 Agent。",
 caption: "家族诅咒、跨世代轮回与借用神力", unlock: "先用 She Who Will Feast 获胜", maxTurns: "常规 500 回合", awaken: "第 300 回合", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
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
  O("Twist Flesh", 0, 1, "把一个正在执行非中立挑战的 Agent 的一点属性转移到该挑战所需的属性上，用另一项属性支付这次强化。", "目标必须正在执行有明确属性类型的挑战，且 HP 大于 1。", "eternity.png"),
  O("Venom in the veins", 1, 2, "令拥有任意家族诅咒的非 Chosen One 英雄 Disrupted 5 回合。", "不能选择 Chosen One；目标英雄的 House 必须有 Maker's Curse，Blessing 不算。", "venom-in-veins.png"),
  O("Cultists in Waiting", 2, 1, "在已渗透的人类或精灵聚居地留下 Cult in Waiting，使安全永久降低 1；地点更换归属后修正会消失。", "目标必须是渗透度大于 0 且尚无该修正的人类或精灵聚居地。", "eternity.png"),
  O("Bury Power", 3, 3, "把一部分当前神力埋入地点，之后由 Agent 取回，可跨越当前轮回保留到下一世。", "可以对任意地点施放。", "eternity.png"),
  O("Eternity", 4, 0, "让世界沉睡 50 年并把 Elder Tomb 放到空的非海洋地点。胜利后睡眠会记录人类适应；提前睡眠或被击败则清除适应。睡眠还会清理现有 Agent、重置世界，并随机借来其他神的临时神力。", "必须目标为空的非海洋地点，或允许建立 Tomb 的废墟地点。", "eternity.png"),
  O("Intrinsic Lifespan", 5, 4, "给 Agent 的四项属性各增加 2，但附加 52 回合倒计时；倒计时归零后 Agent 会死亡。", "目标必须是 Agent，且不能重复施加。", "eternity.png"),
 ],


 initialStats: "Might 2，Command 3，Intrigue 4，Lore 2；初始技能点 1，距离下一次升级还差 1 点经验。The Broken Maker 开局 Supplicant 没有额外人物特质。",
 initialAbilities: [],
 sections: [
  { id: "traits", title: "人物特质", items: [D("Blessing of the Sword", "来自 Maker's Curse: Sword。转化后的 Agent 在杀死英雄时会触发家族内战，并额外增加 20 Menace。"), D("Blessing of the Eye", "来自 Maker's Curse: Eye。按诅咒等级每回合降低 0.05 Menace。"), D("Blessing of Midnight", "来自 Maker's Curse: Midnight。按诅咒等级每回合降低 0.05 Profile。"), D("Blessing of the Traitor", "来自 Maker's Curse: Traitor。诅咒等级大于 0 时使所在地安全降低 3。"), D("Intrinsic Lifespan", "让 Agent 四项属性各增加 2，但附加 52 回合寿命倒计时，归零后人物死亡。", { seal: 5 })] },
  { id: "location-modifiers", title: "地点修正", items: [D("Cult in Waiting", "Cultists in Waiting 留下的永久修正，使聚居地安全降低 1；地点改换归属后消失。", { image: "eternity.png" }), D("Elder Tomb", "Eternity 建立的轮回据点。它是下一世的出生地点，也是睡眠期间记录人类适应、清理世界与借用其他神力的核心。", { id: "elder-tomb-modifier", image: "eternity.png" })] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "空的非海洋地点可以被 Eternity 改造成 Elder Tomb。睡眠结束后 The Broken Maker 会在墓穴附近重建，并把上一世保留下来的适应转化为新的对策。", { id: "elder-tomb-location", image: "eternity.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Cursed Agent", "Create Agent 把携带 Maker's Curse 的英雄、侍僧或统治者转成玩家 Agent；四种诅咒等级分别转为 Might、Lore、Intrigue、Command。", { image: "create-agent.png" }), D("Cross-generation Agent", "Eternity 睡眠会清理旧 Agent，但会依据记录的适应、埋藏神力与随机借用神力生成下一世的全新 Agent。") ] },

  { id: "religion", title: "宗教与教义", items: [D("人类适应", "每次以胜利结束 Eternity 睡眠都会记录人类针对当前神力的适应；下一世会把这些记录变成对应的抗性或行为变化。提前睡眠或在本世被击败会清除适应。"), D("家族祝福", "四种 Maker's Curse 被消耗创建 Agent 时，会留下 Blessing。祝福不再继续累积诅咒，但会持续改变 Menace、Profile、安全或英雄死亡后的政治局势。") ] },
  { id: "challenges", title: "本体相关任务", items: [D("Temptation of Eternity", "这是游戏本体的中立精灵挑战，不是 The Broken Maker 专属神力。普通精灵可以执行；Dark Empire 的精灵也会自动执行，用来增加 Elven Arrogance。", { meta: "Lore / 本体机制", statLine: "任务信息：复杂度 50　暴露度 140　危险 0　经验按难度计算", preferenceText: "偏好 Lore 的精灵更容易执行；Dark Empire 的精灵会自动执行，不属于玩家可直接控制的挑战。" })] }
 ],
 relations: { "Maker's Curse: Sword": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" }, { name: "Create Agent", href: "#entry-create-agent" }] }, "Maker's Curse: Eye": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" }] }, "Maker's Curse: Midnight": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" }] }, "Maker's Curse: Traitor": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" }] } },
};

const configs = { ophanim, mammon, "broken-maker": brokenMaker } as const;

function disambiguateConfigEntries(config: GodConfig) {
 const seen = new Map<string, number>();
 [...config.powers, ...config.initialAbilities, ...config.sections.flatMap(section => section.items)].forEach(item => {
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
 return [...config.powers, ...config.initialAbilities, ...config.sections.flatMap(section => section.items)];
}
function entryFor(config: GodConfig, name: string) {
 return allEntries(config).find(item => item.name === name);
}
function imageFor(config: GodConfig, image?: string) {
 return image ? "/" + config.assetDir + "/" + image : undefined;
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
 const marker = /<CrossReference name="([^"]+)"\s*\/>/g;
 const nodes: ReactNode[] = [];
 let cursor = 0;
 let match: RegExpExecArray | null;
 while ((match = marker.exec(text))) {
   if (match.index > cursor) nodes.push(...renderPlain(config, text.slice(cursor, match.index), exclude));
   nodes.push(<CrossReference key={"marker-" + match.index} config={config} name={match[1]} />);
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
 return <div className="expandable-table">{items.map(item => { const id = item.id ? "entry-" + item.id : anchorFor(item.name); return <ExpandableRow key={id} config={config} entryId={id} name={item.name} seal={item.seal} image={item.image} baseGame={item.baseGame} open={openEntries.has(id)} onToggle={onToggle}>{item.meta && <div className="expanded-meta">{item.meta}</div>}{item.statLine && <div className="task-stat-line">{item.statLine}</div>}<p><RichText config={config} text={item.text} exclude={item.name} /></p>{item.preferenceText && <div className="preference-note"><b>执行倾向</b><p><RichText config={config} text={item.preferenceText} exclude={item.name} /></p></div>}<RelationGroup config={config} title="来源" items={config.relations?.[item.name]?.sources} /><RelationGroup config={config} title="造成的效果" items={config.relations?.[item.name]?.effects} /></ExpandableRow>; })}</div>;
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
 const nav: string[][] = [["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印与 Agent 上限"], ["03", "powers", "神力"], ...(config.id !== "broken-maker" ? [["04", "agent", "初始 Agent 能力"]] : []), ...config.sections.filter(section => section.items.length).map((section, index) => [String(index + (config.id === "broken-maker" ? 4 : 5)).padStart(2, "0"), section.id, section.title])];
 return <main ref={root} className={"site-shell " + config.theme + (sidebarHidden ? " sidebar-hidden" : "")} onClickCapture={event => { const a = (event.target as HTMLElement).closest('a[href^="#entry-"]'); if (a) setOpenEntries(current => new Set(current).add(a.getAttribute("href")!.slice(1))); }}><aside className="sidebar"><div className="sidebar-head"><div className="sidebar-brand god-switcher"><span className="brand-mark"><CircleDot size={17} /></span><label><select value={config.id} onChange={event => onGodChange(event.target.value as ArchiveGodChoice)} aria-label="切换神祇"><option value="she-who-will-feast">SHE WHO WILL FEAST</option><option value="iastur">IASTUR</option><option value="vinerva">VINERVA</option><option value="ophanim">OPHANIM</option><option value="mammon">MAMMON</option><option value="broken-maker">THE BROKEN MAKER</option><option value="kishi">KISHI</option><option value="living-void">LIVING VOID</option><option value="chandalor">CHANDALOR</option></select><small>神祇资料库</small></label></div><button className="sidebar-toggle" type="button" onClick={() => setSidebarHidden(value => !value)}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><button className="sidebar-index-link" type="button" onClick={() => onGodChange("index")}>← 返回神祇索引</button><nav className="sidebar-nav">{nav.map(([index, id, label]) => <a href={"#" + id} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside><div className="content-shell"><header id="top" className="hero"><div className="hero-backdrop"><Image src={imageFor(config, config.background)!} alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 {config.number}</span><span>{config.caption}</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">{config.name}</span></span></h1></div><p className="hero-flavour">{config.flavour}</p><div className="hero-facts"><div><b>{config.awaken.replace(/[^0-9]/g, "") || "—"}</b><span>{config.progressLabel === "吞噬进度" ? "封印阈值" : "回合苏醒"}</span></div><div><b>{config.finalAgents}</b><span>最终 Agent 上限</span></div><div><b>{config.panic}</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src={imageFor(config, config.portrait)!} alt={config.name + " 神祇立绘"} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="portrait-caption"><span>{config.caption}</span><span>{config.unlock}</span></div></div></header><section id="loop" className="section overview-section"><div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div><div className="overview-layout"><article className="overview-main"><h3>核心玩法</h3><ol className="core-sequence">{config.core.map((line, index) => <li key={index}><span>{String(index + 1).padStart(2, "0")}</span><p><RichText config={config} text={line} /></p></li>)}</ol>{config.overviewExtra && <div className="overview-subsection"><h3>{config.overviewExtra.title}</h3><p><RichText config={config} text={config.overviewExtra.text} /></p></div>}</article><aside className="basic-facts"><h3>基础信息</h3><dl><div><dt>解锁方式</dt><dd>{config.unlock}</dd></div><div><dt>封印解锁</dt><dd>{config.unlockMethod}</dd></div><div><dt>最大回合数</dt><dd>{config.maxTurns}</dd></div><div><dt>苏醒</dt><dd>{config.awaken}</dd></div><div><dt>苏醒时世界恐慌</dt><dd>{config.panic}</dd></div><div><dt>初始 Agent 上限</dt><dd>{config.seals[0]?.agents}</dd></div><div><dt>最终 Agent 上限</dt><dd>{config.finalAgents}</dd></div></dl><div className="special-victory"><h3>特殊胜利</h3><p>无</p></div></aside></div></section><section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印</p><h2>封印、阈值与 Agent 上限</h2></div></div><div className="seal-table"><div className="seal-head"><span>封印</span><span>{config.progressLabel}</span><span>Agent</span><span>每回合神力</span><span>本阶段内容</span></div>{config.seals.map(item => <div className="seal-row" key={item.seal}><span className="seal-number">{item.seal}</span><span className="turn">{item.progress}</span><span className="agent-count">{item.agents}</span><span className="power-gain">{config.id === "mammon" ? "动态" : (0.035 * (item.seal + 1)).toFixed(3)}</span><span className="seal-reward">{item.reward.map((reward, index) => <span className="seal-reference-item" key={reward}><RichText config={config} text={reward} />{index < item.reward.length - 1 && <i>、</i>}</span>)}</span></div>)}</div><div className="seal-formula"><b>神力恢复</b><span>{config.powerRecovery}</span></div></section><section id="powers" className="section powers-section records-section"><div className="plain-heading"><p className="section-index">03 / 神力</p><h2>神力</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{config.powers.map(power => { const id = power.id ? "entry-" + power.id : anchorFor(power.name); return <ExpandableRow key={id} config={config} entryId={id} name={power.name} seal={power.seal} cost={power.cost} image={power.icon} open={openEntries.has(id)} onToggle={toggle}><div className="expanded-section"><h4>具体效果</h4><p><RichText config={config} text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText config={config} text={power.limit} exclude={power.name} /></p></div><RelationGroup config={config} title="造成的效果" items={config.relations?.[power.name]?.effects} /></ExpandableRow>; })}</div></section>{config.id !== "broken-maker" && <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">04 / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow config={config} entryId={anchorFor("Supplicant")} name="Supplicant" image={config.supplicant} open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggle}><p className="agent-stat-line"><b>基础属性：</b>{config.initialStats}</p>{config.initialAbilities.length ? <div className="ability-list">{config.initialAbilities.map((ability, index) => <div className="ability" id={anchorFor(ability.name)} key={ability.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{ability.name}</h4><p><RichText config={config} text={ability.text} exclude={ability.name} /></p></div></div>)}</div> : <p>没有额外的初始 Agent 能力。</p>}</ExpandableRow></div></section>}{config.sections.map((section, index) => <RecordSection config={config} section={section} index={String(index + (config.id === "broken-maker" ? 4 : 5)).padStart(2, "0")} openEntries={openEntries} onToggle={toggle} key={section.id} />)}<footer className="archive-footer"><button type="button" className="sidebar-index-link" onClick={() => onGodChange("index")}>← 返回神祇索引</button></footer></div></main>;
}
export function OphanimArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={ophanim} onGodChange={onGodChange} />; }
export function MammonArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={mammon} onGodChange={onGodChange} />; }
export function BrokenMakerArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) { return <GodArchive config={brokenMaker} onGodChange={onGodChange} />; }
