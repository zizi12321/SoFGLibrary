"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "broken-maker", name: "The Broken Maker", number: "06", theme: "broken-maker-theme", assetDir: "broken-maker", background: "background.png", portrait: "portrait.png", 
 flavour: "创造血肉的神本身却是不完整的。The Broken Maker 不断雕刻血脉、毁灭旧世界、等待下一代在废墟上重生，再把上一轮积累的诅咒提炼成新的 Agent。",
 caption: "家族诅咒、世代轮回与借用神力", maxTurns: "常规 500 回合", awaken: "第 300 回合", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
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


 sections: [
  { id: "traits", title: "人物特质", items: [D("Blessing of the Sword", "来自 Maker's Curse: Sword。转化后的 Agent 在杀死英雄时会触发家族内战，并额外增加 20 Menace。"), D("Blessing of the Eye", "来自 Maker's Curse: Eye。按诅咒等级每回合降低 0.05 Menace。"), D("Blessing of Midnight", "来自 Maker's Curse: Midnight。按诅咒等级每回合降低 0.05 Profile。"), D("Blessing of the Traitor", "来自 Maker's Curse: Traitor。诅咒等级大于 0 时使所在地安全降低 3。"), D("Intrinsic Lifespan", "让 Agent 四项属性各增加 2，但附加 52 回合寿命倒计时，归零后人物死亡。", { seal: 5 })] },
  { id: "location-modifiers", title: "地点修正", items: [D("Cult in Waiting", "Cultists in Waiting 留下的永久修正，使聚居地安全降低 1；地点改换归属后消失。", { image: "cultists-in-waiting.png", initialValue: "", modifierChange: { natural: "", external: "" } }), D("Elder Tomb", "Eternity 建立的轮回据点。它是下一世的出生地点，也是睡眠期间记录人类适应、清理世界与借用其他神力的核心。", { id: "elder-tomb-modifier", image: "eternity.png", initialValue: "", modifierChange: { natural: "", external: "" } })] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "空的非海洋地点可以被 Eternity 改造成 Elder Tomb。睡眠结束后 The Broken Maker 会在墓穴附近重建，并把上一世保留下来的适应转化为新的对策。", { id: "elder-tomb-location", image: "eternity.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [D("Cursed Agent", "Create Agent 把携带 Maker's Curse 的英雄、侍僧或统治者转成玩家 Agent；四种诅咒等级分别转为 Might、Lore、Intrigue、Command。", { image: "create-agent.png" }), D("Cross-generation Agent", "Eternity 睡眠会清理旧 Agent，但会依据记录的适应、埋藏神力与随机借用神力生成下一世的全新 Agent。") ] },

  { id: "religion", title: "宗教与教义", items: [D("人类适应", "每次以胜利结束 Eternity 睡眠都会记录人类针对当前神力的适应；下一世会把这些记录变成对应的抗性或行为变化。提前睡眠或在本世被击败会清除适应。"), D("家族祝福", "四种 Maker's Curse 被消耗创建 Agent 时，会留下 Blessing。祝福不再继续累积诅咒，但会持续改变 Menace、Profile、安全或英雄死亡后的政治局势。") ] },
  { id: "challenges", title: "本体相关任务", items: [D("Temptation of Eternity", "这是游戏本体的中立精灵挑战，不是 The Broken Maker 专属神力。普通精灵可以执行；Dark Empire 的精灵也会自动执行，用来增加 Elven Arrogance。", { location: "精灵聚居地（普通精灵或 Dark Empire 精灵）。", meta: "Lore / 本体机制", statLine: "Complexity: 50　Profile: 140　Menace: 0　XP: 72", })] }
 ],
 relations: { "Maker's Curse: Sword": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" }, { name: "Create Agent", href: "#entry-create-agent" }] }, "Maker's Curse: Eye": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" }] }, "Maker's Curse: Midnight": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" }] }, "Maker's Curse: Traitor": { sources: [{ name: "Eternity", href: "#entry-eternity" }], effects: [{ name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" }] } },
};
const preparedConfig = prepareGodConfig(config);
export default function BrokenMakerArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
