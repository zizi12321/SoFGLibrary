"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "ophanim", name: "Ophanim, The Divine Beyond", number: "04", theme: "ophanim-theme", assetDir: "ophanim", background: "background.png", portrait: "portrait.png", 
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
 supplicant: { image: "ophanim-supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Duality（shadow / faith）", "完成 Infiltrate 时交替产生两种结果：一回合给当地增加 30% Shadow，下一回合给 Ophanim's Faith 增加 20%；之后继续交替。"), D("Leader of the Faith", "与 Ophanim's Faith 同处一地时，每回合额外推动 Faith 增长 2%。"), D("Inquisitor", "与 Ophanim's Doubt 同处一地时，每回合降低 Doubt 3%，抵消其通常增长后的净变化约为 −1%；代价是每回合损失 1 人口，人口耗尽会毁灭城市。")] },
 sections: [
  { id: "traits", title: "人物特质", items: [D("Preacher", "完成 Infiltrate 时自动建立或强化 Ophanim's Faith，初始增加 20% Faith。")] },
  { id: "location-modifiers", title: "地点修正", items: [D("Ophanim's Faith", "人口逐渐信仰 Ophanim；它降低当地 Shadow 与安全，并与 Doubt 互相拉扯。", { image: "start-faith.png", initialValue: "代码未找到固定初始值。", modifierChange: { natural: "Faith 因阴影带来的 Menace、邻近 Faith 与神权控制而增长；超过 300%时触发城市完美化。", external: "Preacher 可建立或强化 Faith；Doubt 会对 Faith 产生反向影响。" } }), D("Ophanim's Doubt", "由低 Faith 人口目睹邻近完美城市而产生；它降低 Faith，必须用 Root out Doubters、Sectarian Violence 或 Inquisition 清除。", { image: "ophanim-doubt.png", initialValue: "代码未找到固定初始值。", modifierChange: { natural: "超过 100%后向邻地传播。", external: "由低 Faith 人口目睹邻近 Perfect City 产生；Root out Doubters、Sectarian Violence 或 Inquisition 可清除。" } }), D("Festering Doubt", "Paranoid Society 教义下的延迟状态；期间仍会带来繁荣度惩罚。", { image: "ophanim-doubt.png", initialValue: "持续 5 回合。", modifierChange: { natural: "5 回合后转成 Ophanim's Doubt。", external: "由 Paranoid Society 教义下的 Doubt 生成逻辑产生。" } }), D("Perfect City", "Faith 达到 300% 后的完美城市状态：消灭自由意志、压制 Unrest，并成为 Ophanim 军队与 Perfect Servant 的来源。", { image: "perfect-city.png", initialValue: "", modifierChange: { natural: "", external: "" } })] },
  { id: "locations", title: "地点与设施", items: [D("Ophanim's Holy Order", "Ophanim 开局在 Tomb of Gods 建立的 Holy Order，名称为 Ophanim's Faith。它不使用普通外交，能建立 Temple、召集 Acolyte，并通过教义把 Faith 变成社会控制力。", { image: "holy-ophanim.png" }), D("Ophanim Theocracy", "Theocracy 接管后形成的国家形态。Faith 增长更快，可以接受 Crusade 命令，并将完美城市的军队变成 Ophanim 的战争工具。", { image: "theocracy.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Ophanite Acolyte", "Call to Serve 召集的宗教 Agent，可以建造 Temple，并根据 Ophanim 教义自动执行宗教任务。", { image: "ophanim-supplicant.png" }), D("Perfect Servant", "来自 Perfect City 的英雄型 Agent；它不是独立兵种，而是通过 Perfect Servant 神力把原英雄转化为玩家 Agent。", { id: "perfect-servant-unit", image: "perfect-servant.png" })] },
  { id: "armies", title: "军队", items: [D("Ophanim Army", "来自 Perfect City 的军队。Empower Slaves 可以治疗它；Crusade 会让 Ophanim 控制的国家主动对外宣战，军队因此成为 Faith 扩张和清除 Doubt 的主要工具。", { image: "unit_ophanim.png", stats: "HP：未找到。" })] },
  { id: "religion", title: "宗教与教义", items: [D("Ophanim's Faith", "该 Holy Order 开局预设 Temple Builders 与 Preachers 为正向，Alignment 为 −3，并插入三项特殊教义：Paranoid Society、Sap Lifeforce、Inquisitors。它信仰玩家神祇，不能使用普通外交。", { id: "ophanim-faith-religion" }), D("Paranoid Society", "影响 Faith 与 Doubt 的传播逻辑；当状态为负时，Temple 附近更容易把新 Doubt 延迟为 Festering Doubt。"), D("Sap Lifeforce", "源码状态为 −1 或 −2 时，每回合神力恢复分别额外增加 0.02 或 0.04；只要神力未满，每座对应神庙的城市每回合减少 2 或 4 人口，人口不足 2 时城市会直接陷入废墟。"), D("Inquisitors", "决定 Holy: Inquisition 是否可用；Elder 对齐状态允许 Acolyte 以宗教任务清除 Doubt，但会制造人口损失与 Death。", { meta: "宗教任务：Holy: Inquisition" })] },
  { id: "religious-tasks", title: "宗教任务", items: [D("Holy: Inquisition", "Ophanim Holy Order 成员可最多降低 50 Doubt；每清除 4 点 Doubt 会损失约 1 人口并增加 Death。", { location: "Ophanim Holy Order 的 Temple 所在人类聚居地。", meta: "Lore / Command", statLine: "Complexity: 20　Profile: 50　Menace: 0　XP: 36", positiveTags: "Religion", negativeTags: "无" })] },
  { id: "challenges", title: "挑战", items: [D("Root out Doubters", "在 Ophanim 控制的社会中把 Doubt 降低最多 60%，但每清除 5 点 Doubt 会损失约 1 人口，并增加 Death。完成时额外增加 5 Menace。", { location: "Ophanim 控制社会内、存在 Doubt 的人类聚居地。", meta: "Command", statLine: "Complexity: 25　Profile: 50　Menace: 50　XP: 42", }), D("Sectarian Violence", "在 Ophanim 未控制的社会中把 Doubt 降低最多 40%，同时减少同量 Faith，按比例增加 Unrest 和 Death；完成时增加 15 Menace、10 Profile。", { location: "Ophanim 尚未控制、存在 Doubt 的人类聚居地。", meta: "Intrigue", statLine: "Complexity: 50　Profile: 50　Menace: 50　XP: 72", })] }
 ],
 relations: { "Ophanim's Faith": { sources: [{ name: "Start Faith", href: "#entry-start-faith" }], effects: [{ name: "Theocracy", href: "#entry-theocracy" }, { name: "Perfect City", href: "#entry-perfect-city" }] }, "Ophanim's Doubt": { sources: [{ name: "Faith 与 Doubt 的循环", href: "#loop" }], effects: [{ name: "Root out Doubters", href: "#entry-root-out-doubters" }, { name: "Sectarian Violence", href: "#entry-sectarian-violence" }, { name: "Holy: Inquisition", href: "#entry-holy-inquisition" }] } },
};
const preparedConfig = prepareGodConfig(config);
export default function OphanimArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
