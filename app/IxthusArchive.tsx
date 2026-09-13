"use client";

import { BookOpen, Crown, ShieldAlert, Swords } from "lucide-react";
import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";
const config: GodConfig = {
 id: "ixthus", name: "Ixthus, King of Cups", number: "10", theme: "ixthus-theme", assetDir: "ixthus", background: "kingOfCups_God.png", portrait: "kingOfCups_Portrait.png", 
 flavour: "", caption: "Holy Grail、永生、英雄与统治者的死亡", maxTurns: "常规 500 回合", awaken: "第 370 回合", panic: "50%", finalAgents: "5", progressLabel: "回合", unlockMethod: "常规回合解锁", dlc: "不兼容 DLC",
 powerRecovery: "神力上限 = 已破封印数 + 1；神力恢复 = 0.035 × 神力上限 × 难度缩放。",
 core: [
  "用 <CrossReference name=\"Summon Gawain\" /> 多次召唤 <CrossReference name=\"Sir Gawain\" />。随着解封增加，Sir Gawain 的 Might 会逐步提高；死亡后会留下可供再次召唤的身体。",
  "用 <CrossReference name=\"To Seek the Grail\" /> 在 infiltration 大于 0% 的人类聚居地建立 <CrossReference name=\"Whispers of Eternal Life\" />，让英雄执行 <CrossReference name=\"Seek the Grail\" /> 与 <CrossReference name=\"Quest for the Grail\" />，取得 <CrossReference name=\"Holy Grail\" />。",
  "用 <CrossReference name=\"Eternal Gift\" /> 转交 Holy Grail，或让持有 Holy Grail 的人物执行 <CrossReference name=\"To Eternal Life!\" />；饮用后会获得 <CrossReference name=\"Cursed Immortality (0)\" />，非指挥单位之后还可能转化为 <CrossReference name=\"Dread Knight\" />。",
  "让 ruler 在 <CrossReference name=\"Eternal City\" /> 中执行 <CrossReference name=\"Constitute Eternal City\" />、<CrossReference name=\"Construct Eternal Palace\" />、<CrossReference name=\"Eternal Dark Worship\" />、<CrossReference name=\"Dust to dust\" /> 与 <CrossReference name=\"Construct City Walls\" />，逐步把城市转为传播 Shadow 与破坏环境的据点。",
  "用 <CrossReference name=\"Festering Hatred\" />、<CrossReference name=\"Rest nor Recourse\" />、<CrossReference name=\"Quicken the Sands\" />、<CrossReference name=\"Grim Desertion\" /> 和 <CrossReference name=\"Echoing Ruin\" /> 扩大动乱、补给崩溃、时间加速、部队损失与城市毁灭。",
 ],
 overviewExtra: { title: "永生链条", text: "mod 的代码链条是 Holy Grail → immortal character → 死亡与复生 → Immortal Body / Dread Knight；ruler 还可以把自己的城市改造成 Eternal City。神力是在 God_KingofCups.setup(map) 初始化时注册的，不能用未初始化对象的反射结果判断 Ixthus 的初始神力。" },
 specialVictory: "无",
 seals: [
  { seal: 0, progress: 0, agents: 1, reward: ["To Seek the Grail", "Summon Gawain", "Festering Hatred"] },
  { seal: 1, progress: 30, agents: 2, reward: ["Trials and Tribulations"] },
  { seal: 2, progress: 73, agents: 2, reward: ["Eternal Gift"] },
  { seal: 3, progress: 105, agents: 3, reward: [] },
  { seal: 4, progress: 150, agents: 4, reward: ["Rest nor Recourse", "Quicken the Sands"] },
  { seal: 5, progress: 200, agents: 4, reward: ["Grim Desertion"] },
  { seal: 6, progress: 265, agents: 5, reward: [] },
  { seal: 7, progress: 370, agents: 5, reward: ["Echoing Ruin", "苏醒"] },
 ],
 powers: [
  O("To Seek the Grail", 0, "动态", "在目标地点建立 charge=100 的 <CrossReference name=\"Whispers of Eternal Life\" />。消耗按全图 charge>0 的 Whispers 数量 N 动态计算：floor((N + 1) / 2)。因此 N=0 时消耗 0，N=1–2 时消耗 1，N=3–4 时消耗 2，之后每增加两处有效 Whispers，消耗增加 1。", "必须目标为人类聚居地，infiltration > 0%，目标地点不能已有 Whispers，且 3 格内不能已有其他 Whispers。", "grail_0.png"),
  O("Summon Gawain", 0, "动态", "以目标地点的 <CrossReference name=\"Gawain's Immortal Body\" /> 为锚点召唤 <CrossReference name=\"Sir Gawain\" />。代码遍历全图 charge>0 的 Gawain's Immortal Body：charge<100 时消耗为 floor(100 / charge)，charge≥100 时消耗为 0；没有有效身体时 getCost 保持 1。召唤会移除目标身体。", "目标地点必须有 charge>5 的 Gawain's Immortal Body。", "gawain_0.png"),
  O("Festering Hatred", 0, 1, "移除目标地点全部 Unrest，创建数值为原 Unrest 两倍的 Lingering Resentment。", "必须目标为人类聚居地，且地点存在 charge>0 的 Unrest。", "crown_0.png"),
  O("Trials and Tribulations", 1, 1, "创建 charge=4 的 <CrossReference name=\"Trials and Tribulations\" href=\"#entry-trials-and-tribulations-modifier\" meta=\"地点修正\" />，并立即让地点现有的善性或中性任务的 added Danger 各增加 4；地点上的 <CrossReference name=\"Construct Hazards\" /> 还会继续增加危险。", "目标必须是人类聚居地，且没有现存的 Trials and Tribulations 地点修正。", "Trials_0.png"),
  O("Eternal Gift", 2, 1, "使携带 Holy Grail 的 hero 或 ruler 把它交给同地点的另一名人物，并让双方互相产生 liking。", "必须目标为携带 Holy Grail 的 hero 或 ruler；接收者必须与其处于同一地点。", "Gift_0.png"),
  O("Rest nor Recourse", 4, 2, "在目标地点及其邻地引发 riot，创建 <CrossReference name=\"Ruined Supplies\" />，使这些地点的休息与 resupply Danger 增加 12；当地 heroes 受伤并进入 Disrupted 3 回合。", "目标必须是人类聚居地，Unrest > 50% 或其 ruler 持有 Holy Grail，且不能已有 Ruined Supplies。", "frenzy_0.png"),
  O("Quicken the Sands", 4, 2, "创建持续 35 回合的 <CrossReference name=\"Quickened Sands\" />，使目标地点所有地点修正的正向增长影响翻倍；Ixthus 的 turnTick 还会每回合向该修正加入 Slow Calm -1。", "目标地点 infiltration > 0%，且没有 charge>0 的 Quickened Sands。", "hourglass.png"),
  O("Grim Desertion", 5, 2, "使由 immortal ruler 控制或携带 Holy Grail 的人类军队失去一半部队；同地点的敌对军队会获得这些失去的部队。", "必须目标为由 immortal ruler 控制或携带 Holy Grail 的人类军队。", "flee_0.png"),
  O("Echoing Ruin", 7, 6, "摧毁 Prosperity < 31% 的目标 settlement；由该效果摧毁 settlement 时，还会连锁摧毁相邻且 Prosperity < 31% 的人类 settlement。", "必须目标为 Prosperity < 31% 的 settlement。", "ruin_0.png"),
 ],
 supplicant: { image: "fallensup.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Crest of the Phoenix", "获得后使所有属性提高 2，持续 30 回合；每次 Agent 复活都会刷新持续时间，并把属性提高量再增加 1。"), D("Stolen Waters", "第一次获得时立即得到两个 Holy Grail，可直接用于永生相关行动。"), D("Remorse", "与 Immortal Body 处于同一地点时，每回合向该身体加入名为 Remorse、数值为 3 的影响；它会参与身体的复苏进度计算。")] },
 sections: [
  { id: "traits", title: "人物特质", items: [
    D("Grails Temptation", "标记人物是否携带 Holy Grail；它本身不提供额外属性。", { image: "grail_item_0.png", id: "grails-temptation-trait" }),
    D("Cursed Immortality (0)", "人物死亡后会复生，死亡不增加世界恐慌；每次死亡都会使 strength 增加 40，并继续推动其最终放弃人性。人物每 3 个地图回合增加 1 strength；如果是 ruler，地点 Unrest > 75% 或 Prosperity < 70% 时还会额外增加 strength。不能从 Infamous 获益。", { image: "Fallen_0.png" }),
    D("Immortal Hunger", "人物在 human settlement 中每回合使地点 Shadow 增加 0.015，并在受伤时恢复 1 HP；战斗开始时会把本体 <CrossReference name=\"The Hunger\" /> 加到防守方。死亡后会留下 charge=20 的 Immortal Body；若身体未被绑定，之后可以复生。", { image: "Fallen_0.png" }),
    D("Embraced Immortality", "人物在 human settlement 中每回合使当地标准 Devastation 增加 3，并恢复 1 HP；死亡后会留下 charge=20 的 Immortal Body，未被绑定时可以复生。", { image: "Fallen_0.png" }),
    D("Gawain's Immortality (0)", "Sir Gawain 身上的 trait。它的 charge 初始为 Might×3；每次 Gawain 死亡会使 charge 增加 40，并在死亡地点没有同类身体时留下 charge=20 的 Gawain's Immortal Body。", { image: "gawain_0.png" }),
    D("The Hunger", "本体人物特质。强度每回合按本体参数 mg_theHungerGainPerTurn 增加；非 Chosen One 的非 commandable UA 在 human settlement 中可执行 Feed，完成后清零强度、恢复 HP、增加人物 Shadow、地点 Shadow 和 Menace。Immortal Hunger 在战斗开始时会把它赋给防守方。吸血类单位还可能在冲突中把 The Hunger 传给同地另一名人物。mg_theHungerGainPerTurn、个人 Shadow、地点 Shadow 与 Menace 的具体参数值未找到。", { baseGame: true }),
  ]},
  { id: "location-modifiers", title: "地点修正", items: [
    D("Grails Temptation", "ruler 持有 Holy Grail 时，其所在地点会生成这个地点属性并提供 To Eternal Life!。", { image: "grail_item_0.png", id: "grails-temptation-modifier", initialValue: "代码未找到固定初始 charge。", modifierChange: { natural: "代码说明诱惑值会受 Unrest 与 Prosperity 影响；具体计算式未找到。", external: "非精灵 ruler 持有 Holy Grail 时建立；失去 Holy Grail 或不再满足条件时 charge 归零。" } }),
    D("Whispers of Eternal Life", "由 To Seek the Grail 建立。它提供 Seek the Grail、Fund Quest for Grail 与 Holy: Fund Quest for Grail。", { image: "grail_0.png", initialValue: "charge=100；Profile=10；menaceCap=40。", modifierChange: { natural: "每回合 Menace 增加 3。", external: "相邻人类地点的 infiltration × 5 增加 Profile；相邻地点的 Shadow × 10 增加 menaceCap。" } }),
    D("Waters of Eternal Life", "onStart(map) 会在 Elder Tomb 写入的地点属性；Quest for the Grail 在这里完成后从该地点取得 Holy Grail。它不是一件单独可见的地图物品。", { image: "grail_0.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
    D("Immortal Body", "人物死亡后留下的通用复生身体，显示名称会随目标人物变化；固定名称未找到。它的复苏速度会受 charge、是否绑定、地点 Shadow 与 infiltration 影响，commandable immortal 还会等待 Agent 空位。", { meta: "动态名称；代码未提供固定字符串", image: "gawain_0.png" }),
    D("Trials and Tribulations", "由神力创建的地点修正。", { image: "Trials_0.png", id: "trials-and-tribulations-modifier", initialValue: "charge=4。", modifierChange: { natural: "每回合按地点任务当前的 added Danger 调整 charge。", external: "Construct Hazards 会继续提高任务 Danger，并可能同步提高该修正的 charge。" } }),
    D("Ruined Supplies", "由 Rest nor Recourse 创建的地点修正；它使人物不能在此休息或 resupply，不触发地点危机，地点毁坏时不会保留。", { image: "Trials_0.png", initialValue: "", modifierChange: { natural: "", external: "" } }),
    D("Quickened Sands", "由 Quicken the Sands 创建的地点修正；它把地点修正的正向增长影响翻倍，并可触发地点危机。", { image: "hourglass.png", initialValue: "持续 35 回合；初始 charge 未找到。", modifierChange: { natural: "持续时间结束后移除。", external: "由 Quicken the Sands 创建，并向该修正加入 Slow Calm -1。" } }),
    D("Gawain's Immortal Body", "onStart(map) 会在 Elder Tomb 写入它。Summon Gawain 会消耗身体并召回 Sir Gawain。", { image: "gawain_0.png", initialValue: "Elder Tomb 中初始 charge=100；Sir Gawain 死亡地点新建身体时 charge=20。", modifierChange: { natural: "6<charge<100 时每回合加入 Slow return to life +2；charge≤6 时改为 Gawain lives -20。", external: "Sir Gawain 死亡时可创建 charge=20；Remorse 另加 3；Summon Gawain 要求 charge>5，并在施放时移除该属性。" } }),
  ]},
  { id: "locations", title: "地点与设施", items: [
    D("Eternal City", "由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 Eternal Palace 与 Crypt Depths，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。", { image: "crypt_loc.png" }),
    D("Eternal Palace", "Eternal City 的权力中心；Eternal Dark Worship 与 Dust to dust 会从这里向外影响地点，并各自增加其 menace 15。", { image: "crypt_palace.png" }),
    D("Crypt Depths", "Eternal City 的地下设施；代码将其作为独立 Subsettlement 创建。", { image: "crypt_small.jpg" }),
  ]},
  { id: "items", title: "物品", icon: <BookOpen size={16} />, items: [
    D("Holy Grail", "Holy Grail 是从 <CrossReference name=\"Quest for the Grail\" /> 或 <CrossReference name=\"Stolen Waters\" /> 获得的物品。I_HolyGrail 代码确认：持有者会获得 Grails Temptation，非精灵 ruler 持有时地点会提供 <CrossReference name=\"To Eternal Life!\" />；它不是地点修正。", { image: "grail_item_0.png" }),
  ]},
  { id: "minions", title: "随从", items: [
    D("Husk", "由 mod 的 M_Husk 提供的随从。GoldCost 30；受伤时每回合恢复 1 HP。", { image: "husk_0.png", stats: "HP 7；Attack 3；Defence 2；Command 2" }),
  ]},
  { id: "units", title: "特殊人物与自主单位", items: [
    D("Sir Gawain", "Summon Gawain 生成的可控制单位，每次召唤完全重置所有属性。Might 实际公式为 floor((sealsBroken + 1) / 2) + 4，因此 1–2 封印为 5、3–4 封印为 6、5–6 封印为 7、7 封印及以上为 8。能够存活3 * Might的时间，每3回合Might会同步-1。", { image: "gawain_0.png", stats: "Might 4（0 封印）；Lore 4；Intrigue 1；Command 6；HP 8/8；Shadow 100%" }),
    D("Dread Knight", "UAEN_humanVestige 生成的不可控制单位，会自动旅行、杀人、偷窃和掠夺。", { image: "Fallen_0.png", stats: "Might 继承 +2；Lore 继承（The Hunger 时 +2）；Intrigue 继承 +2；Command 未找到。", abilities: [D("The Hunger", "原单位带有 The Hunger 时，Dread Knight 保留吸血分支。" )] }),
    D("Eternal City Walls", "保护 Eternal City 的自主防御单位。Construct City Walls 在没有城墙时按 ruler 的 Gold/3 创建生命值，已有城墙时会按 Gold/3 增加最大 HP、按 Gold/8 增加当前 HP；行动完成后 ruler Gold 减半。", { image: "walls_0.png", meta: "自主防御设施" }),

  ]},
  { id: "religion", title: "宗教与教义", items: [
    D("Patrons of the Grail", "Patrons of the Grail 是 Ixthus 在 onStart(map) 中加入现有 Holy Order 的 HolyTenet；代码没有创建 Ixthus 专属 Holy Order。符合条件的 Acolyte 会为 Whispers of Eternal Life 提供资金，普通资金来自其 Gold，Holy 分支使用 preaching reserves。"),
  ]},
  { id: "hero-tasks", title: "英雄任务", icon: <Swords size={16} />, items: [
    D("Seek the Grail", "英雄从 Whispers of Eternal Life 启程寻找 Waters of Eternal Life；完成后会被转到 Elder Tomb 的 Quest for the Grail。", { location: "Whispers of Eternal Life 所在地点。", meta: "Command", statLine: "Complexity: 6　Profile: 当前 Whispers of Eternal Life 的 Profile　Menace: 当前 Whispers of Eternal Life 的 Menace　XP: 14", positiveTags: "Ambition、Gold、Danger", negativeTags: "无", image: "grail_0.png" }),
    D("Quest for the Grail", "英雄在 Elder Tomb 执行任务；完成后把一个 Holy Grail 放入自己的物品栏。", { location: "Elder Tomb。", meta: "Might", statLine: "Complexity: 12　Profile: 0　Menace: 0　Danger: 7　XP: 24", positiveTags: "Ambition、Gold、Danger", negativeTags: "无", image: "grail_0.png" }),
    D("Bind Immortal Body", "绑定目标 Immortal Body，把其 caged 设为 true；被绑定的身体不能自然复生，直到有执行者完成 Empower Immortal 解除绑定。完成后 Profile +5、Menace 0。", { location: "未被绑定的 Immortal Body 所在地点。", meta: "Lore", statLine: "Complexity: 20　Profile: 目标单位当前 inner_profile　Menace: 目标单位当前 inner_menace ÷ 2　XP: 36", positiveTags: "无", negativeTags: "无", image: "gawain_0.png" }),
  ]},
  { id: "ruler-actions", title: "统治者行动", icon: <Crown size={16} />, items: [
    D("To Eternal Life!", "持有 Holy Grail 的非精灵 ruler 饮用 Grail；完成后移除其第一件 Holy Grail，赋予 Cursed Immortality，并触发 To Immortality! 模组事件。", { location: "持有 Holy Grail 的非精灵 ruler 所在的人类聚居地。", meta: "统治者行动", time: "未找到。", image: "drinkGrailFull.png" }),
    D("Constitute Eternal City", "增加 Eternal City 计数，触发 Eternal City 模组事件，使原 settlement fallIntoRuin，并替换为 Eternal City。", { location: "有 ruler 的人类聚居地。", meta: "统治者行动", time: "3 回合", image: "crypt_loc.png" }),
    D("Construct Eternal Palace", "花费 150 Gold，在 Eternal City 中建立 Eternal Palace。", { location: "尚未有 Eternal Palace 的 Eternal City。", meta: "统治者行动", time: "8 回合", statLine: "消耗：150 Gold", limit: "ruler 必须拥有超过 149 Gold。", image: "crypt_palace.png" }),
    D("Eternal Dark Worship", "从 Eternal Palace 向最多 60% Shadow 的目标地点传播 Shadow，并使 Eternal Palace 的 menace 增加 15。", { location: "有 Eternal Palace 的 Eternal City。", meta: "统治者行动", time: "10 回合", image: "crypt_0.jpg" }),
    D("Dust to dust", "从 Eternal City 改变 climate 与 temperature，使 desert 扩张，并使 Eternal Palace 的 menace 增加 15。", { location: "有 Eternal Palace 的 Eternal City。", meta: "统治者行动", time: "10 回合", image: "hourglass.png" }),
    D("Construct City Walls", "创建或强化 Eternal City Walls，消耗 ruler 一半 Gold。", { location: "Eternal City。", meta: "统治者行动", time: "8 回合", limit: "ruler 必须拥有超过 99 Gold。", image: "walls_0.png" }),
  ]},
  { id: "religious-tasks", title: "宗教任务", icon: <BookOpen size={16} />, items: [
    D("Holy: Fund Quest for Grail", "Holy Order 成员从 preaching reserves 捐出 50 Gold，增加 Whispers of Eternal Life 对应 Grail 任务的资金；代码中的有效条件是 reserves > 49 且任务资金不超过 149。", { location: "Whispers of Eternal Life 所在地点，且执行者必须属于该地点的 Holy Order。", meta: "Lore", statLine: "Complexity: 1　Profile: 当前 Grail 任务 Profile + 40　Menace: 0　XP: 3", limit: "执行者必须属于该 settlement 的 Holy Order，并有超过 49 preaching reserves；Grail 任务资金必须不超过 149。", image: "grail_0.png" }),
  ]},
  { id: "challenges", title: "挑战", icon: <ShieldAlert size={16} />, items: [
    D("Fund Quest for Grail", "执行者用 Gold 为 Grail 任务提供资金，最多按一次 50 Gold 的交易处理；它会降低执行者的 Gold，并增加任务资金。", { location: "Whispers of Eternal Life 所在地点。", meta: "Command", statLine: "Complexity: 1　Profile: 0　Menace: 0　XP: 3", limit: "执行者必须至少有 1 Gold。", image: "grail_0.png" }),
    D("Fund Eternal City", "执行者用 Gold 为 Eternal City 的 ruler 提供资金，最多按一次 50 Gold 的交易处理；资金交给城主后可用于城市设施。", { location: "Eternal City。", meta: "Command", statLine: "Complexity: 1　Profile: 0　Menace: 0　XP: 3", limit: "执行者必须至少有 1 Gold。", image: "crypt_loc.png" }),
    D("Empower Immortal", "解除 Immortal Body 的 caged 绑定，使其 charge 增加 25；完成时消耗 1 点神力。", { location: "Immortal Body 所在地点。", meta: "Lore", statLine: "Complexity: 15　Profile: 0　Menace: 0　XP: 29", limit: "执行者必须至少有 1 点神力。", image: "gawain_0.png" }),
    D("Construct Hazards", "对地点现有的每个善性或中性任务按其当前 added Danger 计算整数增量：4 ÷ (1 + added Danger ÷ 10)。它会把这些任务的 Danger 继续推高；若 Trials and Tribulations 的 charge 过低且新 Danger 尚未超过 charge+6，还会把该地点修正的 charge 调整到新 Danger。", { location: "已有 <CrossReference name=\"Trials and Tribulations\" href=\"#entry-trials-and-tribulations-modifier\" meta=\"地点修正\" /> 的地点。", meta: "Might + Command", statLine: "Complexity: 20　Profile: 10　Menace: 30　XP: 36", image: "Trials_0.png" }),    D("Embrace Eternity", "由非 commandable immortal Unit 自动执行的 Lore challenge，不是玩家主动施放的挑战。完成后移除原单位，生成同名且不可控制的 Dread Knight；原单位若带 The Hunger，会进入吸血分支。", { location: "非 commandable immortal Unit 所在地点。", meta: "自主挑战", statLine: "Complexity: 6　Profile: 10　Menace: 0　XP: 14", image: "Fallen_0.png" }),
  ]},
  { id: "events", title: "事件", items: [
    D("Eternal City", "模组事件；JSON 的 choices、effects 与 environment 均为空，实际城市转化机制来自 Constitute Eternal City 的 DLL 代码。", { meta: "模组事件 · other_become_eternal.json", image: "city_collapse.png", id: "eternal-city-event" }),
    D("To Immortality!", "模组事件；JSON 的 choices、effects 与 environment 均为空，实际效果由 To Eternal Life! 的 DLL 代码执行：移除 Holy Grail、赋予 Cursed Immortality。", { meta: "模组事件 · other_drink_grail_ruler.json", image: "drinkGrailFull.png", id: "to-immortality-event" }),
  ]},
 ],
 relations: {
  "To Seek the Grail": { effects: [{ name: "Whispers of Eternal Life", href: "#entry-whispers-of-eternal-life" }] },
  "Summon Gawain": { effects: [{ name: "Sir Gawain", href: "#entry-sir-gawain" }, { name: "Gawain's Immortal Body", href: "#entry-gawain-s-immortal-body" }] },
  "Festering Hatred": { effects: [] },
  "Eternal Gift": { effects: [{ name: "Holy Grail", href: "#entry-holy-grail" }] },
  "Rest nor Recourse": { effects: [{ name: "Ruined Supplies", href: "#entry-ruined-supplies" }] },
  "Quicken the Sands": { effects: [{ name: "Quickened Sands", href: "#entry-quickened-sands" }] },
  "Echoing Ruin": { effects: [{ name: "Eternal City", href: "#entry-eternal-city" }] },
  "Grails Temptation": { sources: [{ name: "Holy Grail", href: "#entry-holy-grail", meta: "物品" }], effects: [{ name: "To Eternal Life!", href: "#entry-to-eternal-life" }] },
  "Immortal Hunger": { effects: [{ name: "The Hunger", href: "#entry-the-hunger" }] },
  "Embraced Immortality": { sources: [{ name: "Embrace Eternity", href: "#entry-embrace-eternity" }] },
  "Cursed Immortality (0)": { sources: [{ name: "To Eternal Life!", href: "#entry-to-eternal-life" }] },
  "Whispers of Eternal Life": { sources: [{ name: "To Seek the Grail", href: "#entry-to-seek-the-grail" }], effects: [{ name: "Seek the Grail", href: "#entry-seek-the-grail" }] },
  "Waters of Eternal Life": { effects: [{ name: "Quest for the Grail", href: "#entry-quest-for-the-grail" }] },
  "Immortal Body": { effects: [{ name: "Bind Immortal Body", href: "#entry-bind-immortal-body" }, { name: "Empower Immortal", href: "#entry-empower-immortal" }] },
  "Trials and Tribulations": { sources: [{ name: "Trials and Tribulations", href: "#entry-trials-and-tribulations", meta: "神力" }], effects: [{ name: "Trials and Tribulations", href: "#entry-trials-and-tribulations-modifier", meta: "地点修正" }] },
  "Ruined Supplies": { sources: [{ name: "Rest nor Recourse", href: "#entry-rest-nor-recourse", meta: "神力" }] },
  "Quickened Sands": { sources: [{ name: "Quicken the Sands", href: "#entry-quicken-the-sands", meta: "神力" }] },
  "Gawain's Immortality (0)": { sources: [{ name: "Sir Gawain", href: "#entry-sir-gawain" }], effects: [{ name: "Gawain's Immortal Body", href: "#entry-gawain-s-immortal-body" }] },
 }
};

const preparedConfig = prepareGodConfig(config);

export default function IxthusArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
