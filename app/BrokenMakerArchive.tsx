"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

function borrowedPowerRef(name: string, href: string, source: string, text: string, image: string) {
  return "<CrossReference name=\"" + name + "\" href=\"" + href + "\" meta=\"" + source + " · 神力\" text=\"" + text + "\" image=\"" + image + "\" />";
}

const config: GodConfig = {
 id: "broken-maker", name: "The Broken Maker", number: "06", theme: "broken-maker-theme", assetDir: "broken-maker", background: "background.png", portrait: "portrait.png", 
 flavour: "创造血肉的神本身却是不完整的。The Broken Maker 不断雕刻血脉、毁灭旧世界、等待下一代在废墟上重生，再把上一轮积累的诅咒提炼成新的 Agent。",
 caption: "家族诅咒、世代轮回与借用神力", maxTurns: "500 回合", awaken: "常规回合达到 300", panic: "75%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
  powerRecovery: "神力上限 = 已破封印数 + 1；每回合恢复 = 0.035 × 神力上限 × 难度缩放。使用 Eternity 后，封印进度与已破封印数都会在新一世重置。",
 core: [
  "每一世分别使用 <CrossReference name=\"Maker's Curse: Sword\" />、<CrossReference name=\"Maker's Curse: Eye\" />、<CrossReference name=\"Maker's Curse: Midnight\" /> 与 <CrossReference name=\"Maker's Curse: Traitor\" /> 诅咒 House。",
  "让这些家族通过战斗死亡、疯狂、100% Shadow 或被转化为 Agent 来培养对应诅咒，再用 <CrossReference name=\"Create Agent\" /> 将诅咒等级转成 Agent 的属性与 Blessing。",
  "<CrossReference name=\"Create Agent Masterfully\" /> 会按整数除法把每种诅咒等级减半，但保留诅咒本身；<CrossReference name=\"Twist Flesh\" /> 则可以把己方 Agent 的属性临时转给正在执行的 challenge。",
  "封印解锁后，可以用 <CrossReference name=\"Venom in the veins\" /> 干扰带有家族诅咒的英雄，用 <CrossReference name=\"Cultists in Waiting\" /> 降低渗透聚居地的安全，或用 <CrossReference name=\"Bury Power\" /> 留下 <CrossReference name=\"Buried Power\" />。",
  "用 <CrossReference name=\"Eternity\" /> 让世界睡眠 50 年，在目标地点建立 <CrossReference name=\"Elder Tomb\" />，清理本世的大部分世界状态，并为下一世重新准备 Agent 与临时借来的神力。",
  "最后一枚封印在第 300 回合解锁后苏醒；The Broken Maker 没有额外的特殊胜利条件。",
 ],
  overviewExtra: { title: "Eternity 的实际流程", text: "Eternity 的源码会删除现有的 commandable Agent 与 UAE 单位，清除多种地点修正和社会状态，把地图回合推进 52 回合，重置 sealProgress 与 sealsBroken，并在目标地点建立 Elder Tomb。若本世已经胜利，下一世会记录对应的 Humanity's Adaptation；若提前睡眠或本世失败，则清空这些记录。睡眠结束后 sleepCycle 增加，四种家族诅咒神力可以再次使用，并从本体定义的 16 个候选槽位中随机抽取 2 次临时神力。" },
  specialVictory: "无",
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Create Agent", "Create Agent Masterfully", "Maker's Curse: Sword", "Maker's Curse: Eye", "Maker's Curse: Midnight", "Maker's Curse: Traitor", "Twist Flesh"] },
  { seal: 1, progress: 27, agents: 3, reward: ["Venom in the veins"] }, { seal: 2, progress: 49, agents: 4, reward: ["Cultists in Waiting"] },
  { seal: 3, progress: 127, agents: 4, reward: ["Bury Power"] }, { seal: 4, progress: 201, agents: 5, reward: ["Eternity"] },
  { seal: 5, progress: 257, agents: 6, reward: ["Intrinsic Lifespan"] }, { seal: 6, progress: 300, agents: 6, reward: ["苏醒"] },
 ],
 powers: [
  O("Create Agent", 0, 0, "消耗目标 House 当前拥有的全部 Maker's Curse。Sword 等级转为 Might，Eye 等级转为 Lore，Midnight 等级转为 Intrigue（最多 5 点），Traitor 等级转为 Command；对应诅咒会留下相应的 Blessing。单位目标会成为 commandable Agent；统治者目标会被替换为 UAG_Warrior。", "单位目标必须是带有 Maker's Curse 的非 commandable UA，不能是 UAEN 或 Chosen One；地点目标必须有来自带诅咒 House 的统治者，并且 Agent 上限不能已满。", "create-agent.png"),
  O("Create Agent Masterfully", 0, 0, "执行与 Create Agent 相同的转化，但每种诅咒等级会先进行整数除法再转化；被减半的诅咒不会被移除，因此之后仍可继续培养。Eye 与 Midnight 会留下对应 Blessing，即使整数除法后的等级为 0。", "目标条件与 Create Agent 相同；每个 sleepCycle 只能使用一次，Eternity 睡眠后重置使用状态。", "create-agent.png"),
  O("Maker's Curse: Sword", 0, 0, "为一个 House 添加 Sword 诅咒。该 House 的成员在战斗中死亡或被刺杀时，Sword 等级增加；转化为 Agent 时，每级增加 1 Might，并在等级大于 0 时留下 Blessing of the Sword。", "每次 Eternity 睡眠周期只能选择一个 House 使用一次；目标 House 不能已经有 Sword 诅咒。", "curse-sword.png"),
  O("Maker's Curse: Eye", 0, 0, "为一个 House 添加 Eye 诅咒。该 House 的成员每获得一级疯狂时，Eye 等级增加；转化为 Agent 时，每级增加 1 Lore，并留下 Blessing of the Eye。", "每次 Eternity 睡眠周期只能选择一个 House 使用一次；目标 House 不能已经有 Eye 诅咒。", "curse-eye.png"),
  O("Maker's Curse: Midnight", 0, 0, "为一个 House 添加 Midnight 诅咒。该 House 的成员达到 100% Shadow 时，Midnight 等级增加；转化为 Agent 时，每级增加 1 Intrigue，最多计算 5 级，并留下 Blessing of Midnight。", "每次 Eternity 睡眠周期只能选择一个 House 使用一次；当前源码的目标检查以 House 是否已有 Sword 诅咒作为排除条件。", "curse-midnight.png"),
  O("Maker's Curse: Traitor", 0, 0, "为一个 House 添加 Traitor 诅咒。该 House 的成员被转化为 Agent 时，Traitor 等级增加；转化出的 Agent 每级增加 1 Command，并在等级大于 0 时留下 Blessing of the Traitor。", "每次 Eternity 睡眠周期只能选择一个 House 使用一次；当前源码的目标检查以 House 是否已有 Eye 诅咒作为排除条件。", "curse-traitor.png"),
  O("Twist Flesh", 0, 1, "把正在执行非中性 challenge 的己方 Agent 的 1 点属性转移到该 challenge 所需的属性，并扣除 1 HP。被扣除的属性会从其他仍高于 1 的属性中随机选择。", "目标必须是 commandable Agent，正在执行有明确属性类型的 challenge，且 HP 大于 1；如果没有可降低到 1 的其他属性，神力会退还。", "twist-flesh.png"),
  O("Venom in the veins", 1, 2, "使带有任意 Maker's Curse 的英雄进入 Disrupted 状态 5 回合。", "不能选择 Chosen One；目标英雄的 House 必须有 Maker's Curse，Blessing 不算作诅咒。", "venom-in-veins.png"),
  O("Cultists in Waiting", 2, 1, "在一个已被渗透的人类或精灵聚居地建立 Cult in Waiting，使当地安全降低 1。该修正会持续到聚居地改换归属。", "目标必须是人类或精灵聚居地，渗透度大于 0，且当地尚无 Cult in Waiting。", "cultists-in-waiting.png"),
  O("Bury Power", 3, 3, "在目标地点建立固定的 Buried Power。该地点之后会出现 Release Buried Power challenge，完成后可取回 3 点神力，取回的上限仍受当前神力上限限制。", "可以对任意地点施放。", "bury-power.png"),
  O("Eternity", 4, 0, "让世界睡眠 50 年，并在目标地点建立 Elder Tomb。若本世已经胜利，睡眠会记录 Humanity's Adaptation；若提前睡眠或本世失败，则清除适应。睡眠会清理现有 commandable Agent 与 UAE、重置 sealProgress 和 sealsBroken、清理多种世界状态，并在下一世借用其他神的临时神力。", "目标必须是非海洋且没有 settlement 的地点，或已有 Set_CityRuins 的地点。", "eternity.png"),
  O("Intrinsic Lifespan", 5, 4, "使目标 Agent 的 Might、Lore、Intrigue、Command 各增加 2，并附加 52 回合寿命倒计时；倒计时归零时该 Agent 死亡。", "目标必须是 commandable Agent，且不能已经有 Intrinsic Lifespan。", "intrinsic-lifespan.png"),
 ],


 sections: [
  { id: "traits", title: "人物特质", items: [
    D("Blessing of the Sword", "带有该 Blessing 的 Agent 杀死英雄时，会在其所在 Society 触发内战，并使该 Agent 增加 20 Menace。"),
    D("Blessing of the Eye", "按该 Agent 的 Eye 诅咒等级，每回合使其 Menace 降低 0.05。"),
    D("Blessing of Midnight", "按该 Agent 的 Midnight 诅咒等级，每回合使其 Profile 降低 0.05。"),
    D("Blessing of the Traitor", "使所在地安全降低 3；该 Blessing 的等级上限为 1。"),
    D("Intrinsic Lifespan", "使 Agent 的四项属性各增加 2，并附加 52 回合寿命倒计时；倒计时归零后人物死亡。", { id: "intrinsic-lifespan-trait", seal: 5 }),
  ] },
  { id: "location-modifiers", title: "地点修正", items: [
    D("Cult in Waiting", "Cultists in Waiting 留下的固定地点修正，使聚居地安全降低 1；地点改换归属后修正消失。", { image: "cultists-in-waiting.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
    D("Buried Power", "Bury Power 留下的固定地点修正。地点上存在一个 Release Buried Power challenge；挑战完成后取回 3 点神力并移除该修正。", { image: "bury-power.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
  ] },
  { id: "locations", title: "地点与设施", items: [D("Elder Tomb", "Eternity 在选定的非海洋空地点或 Set_CityRuins 上建立的 settlement。", { id: "elder-tomb-location", image: "eternity.png" })] },
  { id: "units", title: "特殊人物与自主单位", items: [
    D("Cursed Agent", "Create Agent 或 Create Agent Masterfully 把携带 Maker's Curse 的非 commandable UA 转为玩家可控制的 Agent；如果目标是统治者，则会移除统治者并在该地点创建 UAG_Warrior。", { image: "create-agent.png", stats: "Might：继承 + Sword 诅咒等级；Lore：继承 + Eye 诅咒等级；Intrigue：继承 + min(5, Midnight 诅咒等级)；Command：继承 + Traitor 诅咒等级。" }),
    D("Cursed House Hero", "ManagerUnit 会在非 commandable UAG 数量不足时调用 God_Eternity.spawnHero()。对每个 cursed House，当该家族对应的非 commandable UAG 与其统治者数量合计不足 2 时，源码会在该家族统治者所在地点或随机 Society 中创建一个 UAG_Warrior；Human city 还会为其加入 Act_FundHero。它是自主英雄，不是玩家 Agent。", { stats: "Might 2，Lore 1，Intrigue 1，Command 2；HP 6。" }),
  ] },

  { id: "related-mechanics", title: "其他机制", items: [
    D("Humanity's Adaptation", "Eternity 在本世已经胜利时，会根据 victoryMode 记录人类对上一世威胁的适应：Shadow 会降低随机人物的 Shadow 偏好，Madness 会降低 Madness 偏好，Cooperation 与 Combat 会提高对应偏好，Deep Ones 会降低 Deep Ones 偏好，Orc/Undead 会降低两者偏好；魔法军备竞赛会提高法师的 Mastery。每次成功记录适应还会使后续难度增长倍率提高 5%；没有胜利响应时则恢复到起始难度倍率。"),
    D("Borrowed Powers", "每次 Eternity 睡眠结束后，从 16 个候选槽位中不重复随机抽取 2 次。槽位 0–3 是 She Who Will Feast 的 " +
      borrowedPowerRef("Eyes in the Shadows", "./index.html?god=she-who-will-feast#entry-eyes-in-the-shadows", "She Who Will Feast", "直接渗透目标聚居地内一个尚未渗透且允许被渗透的设施。", "./she-who-will-feast/power-shadow.png") + "、" +
      borrowedPowerRef("Cloud Senses", "./index.html?god=she-who-will-feast#entry-cloud-senses", "She Who Will Feast", "让一名正在执行挑战的单位失去最多 10 点当前进度，进度最低降至 0。", "./she-who-will-feast/power-shadow.png") + "、" +
      borrowedPowerRef("Split Shadow", "./index.html?god=she-who-will-feast#entry-split-shadow", "She Who Will Feast", "从非 Chosen One 英雄身上生成可控制的 Shadow Agent，继承其等级、基础属性和特质修正。", "./she-who-will-feast/shadow-agent.png") + "、" +
      borrowedPowerRef("Fleeting Servant", "./index.html?god=she-who-will-feast#entry-fleeting-servant", "She Who Will Feast", "在任意地点制造 40 点 Fleeting Servant，吸引英雄执行 Purge Fleeting Servant。", "./she-who-will-feast/power-fleeting-servant.png") + "；槽位 4–6 是 Iastur 的 " +
      borrowedPowerRef("The Devil Finds Work...", "./index.html?god=iastur#entry-the-devil-finds-work", "Iastur", "让目标英雄新增一项普通厌恶，改变其选择任务、攻击目标和承担风险的意愿。", "./iastur/power-preference.png") + "、" +
      borrowedPowerRef("...For Idle Hands", "./index.html?god=iastur#entry-for-idle-hands", "Iastur", "让目标英雄新增一项普通喜好，推动其偏向对应任务或行为。", "./iastur/power-preference.png") + "、" +
      borrowedPowerRef("Incoherent Thoughts", "./index.html?god=iastur#entry-incoherent-thoughts", "Iastur", "取消目标当前挑战，并使其进入 Disrupted 状态 3 回合。", "./iastur/power-incoherent.png") + "；槽位 7–8 都是 Ophanim 的 " +
      borrowedPowerRef("Sleepless Labour", "./index.html?god=ophanim#entry-sleepless-labour", "Ophanim", "让正在执行数值型挑战的己方 Agent 立即获得 20 点进度，但承受 2 HP 伤害。", "./ophanim/sleepless-labour.png") + "；槽位 9 是 Mammon 的 " +
      borrowedPowerRef("Embrace of Metal", "./index.html?god=mammon#entry-embrace-of-metal", "Mammon", "在城市建立 Armoured Populace，强度达到 100% 后把部分人口转化为不可控制的军队。", "./mammon/embrace-of-metal.png") + "；槽位 10–11 都是 Vinerva 的 " +
      borrowedPowerRef("Serpentine Vines", "./index.html?god=vinerva#entry-serpentine-vines", "Vinerva", "把目标地点所有英雄任务和中立挑战的 Danger 分别设为 8。", "./vinerva/serpentine-vines.png") + "；槽位 12 是 Vinerva 的 " +
      borrowedPowerRef("Tempt Might", "./index.html?god=vinerva#entry-grove-of-dragonflower", "Vinerva", "建立 Temptation of Might，为英雄提供 Gift of Might。", "./vinerva/grove-dragonflower.png") + "；槽位 13–15 每次会从 " +
      borrowedPowerRef("Tempt Gold", "./index.html?god=vinerva#entry-grove-of-golden-roses", "Vinerva", "建立 Temptation of Gold，为统治者提供 Harvest for Gold。", "./vinerva/grove-golden-roses.png") + "、" +
      borrowedPowerRef("Tempt Health", "./index.html?god=vinerva#entry-grove-of-leper-s-succor", "Vinerva", "建立 Temptation of Health，为统治者提供 Use Leper's Succor。", "./vinerva/grove-lepers-succor.png") + "、" +
      borrowedPowerRef("Tempt Nectar", "./index.html?god=vinerva#entry-grove-of-nectar", "Vinerva", "建立 Temptation of Nectar，为统治者提供 Harvest Nectar。", "./vinerva/grove-nectar.png") + "、" +
      borrowedPowerRef("Tempt Peace Lily", "./index.html?god=vinerva#entry-grove-of-peace-lillies", "Vinerva", "建立 Temptation of Peace，为统治者提供 Drink Peace Lily。", "./vinerva/grove-peace-lillies.png") + "、" +
      borrowedPowerRef("Tempt Salvation", "./index.html?god=vinerva#entry-grove-of-salvation", "Vinerva", "建立 Temptation of Salvation，为英雄提供 Gift of Salvation。", "./vinerva/grove-salvation.png") + " 中抽一项，并从 " +
      borrowedPowerRef("Black Forest", "./index.html?god=vinerva#entry-black-forest", "Vinerva", "消耗 Vinerva's Gift，把带有礼物的统治者 Shadow 提高同等数量，最高到 100%。", "./vinerva/heart-of-forest.png") + "、" +
      borrowedPowerRef("Choking Spores", "./index.html?god=vinerva#entry-choking-spores", "Vinerva", "在目标聚居地及相邻地点放置 Choking Spores，使每个地点的 Prosperity 降低 25%。", "./vinerva/choking-spores.png") + "、" +
      borrowedPowerRef("Neurotoxins", "./index.html?god=vinerva#entry-neurotoxins", "Vinerva", "把 Vinerva's Gift 转化为 Madness：每消耗 1 点 Gift 增加 2 点 Madness，最多推到 300。", "./vinerva/neurotoxins.png") + " 中抽一项，因此一次抽取可能加入两项临时神力。所有临时神力会在下一次睡眠开始时移除。"),
    D("Holy Order", "The Broken Maker 没有 Holy Order；其跨世代机制由 House 诅咒、Blessing、Agent 转化与 Humanity's Adaptation 构成。"),
  ] },
  { id: "challenges", title: "挑战", items: [
    D("Release Buried Power", "完成后获得 3 点神力；神力不会超过当前上限，并移除所在地点的 Buried Power。该 challenge 的源码 isGoodTernary() 为 -1，因此按挑战归档；任意 UA 都满足 validFor。", { image: "bury-power.png", location: "<CrossReference name=\"Buried Power\" /> 所在地点。", meta: "Lore", statLine: "Complexity: 50　Profile: 3　Menace: 3　XP: 72", positiveTags: "", negativeTags: "" }),
  ] }
 ],
 relations: {
  "Create Agent": { effects: [
    { name: "Cursed Agent", href: "#entry-cursed-agent" },
    { name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" },
    { name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" },
    { name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" },
    { name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" },
  ] },
  "Create Agent Masterfully": { effects: [
    { name: "Cursed Agent", href: "#entry-cursed-agent" },
    { name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" },
    { name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" },
    { name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" },
    { name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" },
  ] },
  "Maker's Curse: Sword": { effects: [{ name: "Blessing of the Sword", href: "#entry-blessing-of-the-sword" }] },
  "Maker's Curse: Eye": { effects: [{ name: "Blessing of the Eye", href: "#entry-blessing-of-the-eye" }] },
  "Maker's Curse: Midnight": { effects: [{ name: "Blessing of Midnight", href: "#entry-blessing-of-midnight" }] },
  "Maker's Curse: Traitor": { effects: [{ name: "Blessing of the Traitor", href: "#entry-blessing-of-the-traitor" }] },
  "Cultists in Waiting": { effects: [{ name: "Cult in Waiting", href: "#entry-cult-in-waiting" }] },
  "Bury Power": { effects: [{ name: "Buried Power", href: "#entry-buried-power" }] },
  "Eternity": { effects: [
    { name: "Elder Tomb", href: "#entry-elder-tomb-location" },
    { name: "Humanity's Adaptation", href: "#entry-humanity-s-adaptation" },
    { name: "Borrowed Powers", href: "#entry-borrowed-powers" },
  ] },
  "Intrinsic Lifespan": { effects: [{ name: "Intrinsic Lifespan", href: "#entry-intrinsic-lifespan-trait" }] },
  "Cult in Waiting": { sources: [{ name: "Cultists in Waiting", href: "#entry-cultists-in-waiting" }] },
  "Buried Power": {
    sources: [{ name: "Bury Power", href: "#entry-bury-power" }],
    effects: [{ name: "Release Buried Power", href: "#entry-release-buried-power" }],
  },
  "Elder Tomb": { sources: [{ name: "Eternity", href: "#entry-eternity" }] },
  "Humanity's Adaptation": { sources: [{ name: "Eternity", href: "#entry-eternity" }] },
  "Borrowed Powers": { sources: [{ name: "Eternity", href: "#entry-eternity" }] },
  "Blessing of the Sword": { sources: [{ name: "Maker's Curse: Sword", href: "#entry-maker-s-curse-sword" }] },
  "Blessing of the Eye": { sources: [{ name: "Maker's Curse: Eye", href: "#entry-maker-s-curse-eye" }] },
  "Blessing of Midnight": { sources: [{ name: "Maker's Curse: Midnight", href: "#entry-maker-s-curse-midnight" }] },
  "Blessing of the Traitor": { sources: [{ name: "Maker's Curse: Traitor", href: "#entry-maker-s-curse-traitor" }] },
  "Cursed Agent": { sources: [
    { name: "Create Agent", href: "#entry-create-agent" },
    { name: "Create Agent Masterfully", href: "#entry-create-agent-masterfully" },
  ] },
 },
};
const preparedConfig = prepareGodConfig(config);
export default function BrokenMakerArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
