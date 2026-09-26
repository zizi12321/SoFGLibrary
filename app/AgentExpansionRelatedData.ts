import type { ArmyRecord } from "./ArmyTypes";
import type { CharacterModifier } from "./CharacterModifiersData";
import type { EventSourceGroup } from "./EventTypes";
import type { ModifierSourceGroup } from "./BaseLocationModifiersData";
import { agentRef, banditry, robberBanditry, company, hunger, scandalEvent } from "./AgentExpansionData";

export const agentExpansionEvents: EventSourceGroup[] = [
  {
    id: "3236518418", name: "The Whisperer", records: [{
      source: "3236518418", sourceName: "The Whisperer", eventId: "whisperer.whisperer_lured", type: "INERT", category: "other", chain: null,
      sourceFile: "E:/Steam/steamapps/workshop/content/1741640/3236518418/whisperer_lured.json", condition: "1=1",
      decision: { trigger: "Lure Prey 完成且猎物已同地，或被引诱的猎物抵达 Whisperer 所在地点。", condition: "", selection: "" },
      entry: { id: "event-3236518418-whisperer-whisperer-lured", name: "Ensnared Prey", image: "./agents/mod/whisperer/event_lured.jpg", baseGame: false, meta: "直接触发", eventCategory: "other",
        text: "被低语迷住的猎物在私下接近 Whisperer，任其处置。\n触发方式：" + agentRef("Lure Prey", "whisperer-lure-prey", "花费 25 Psychic Whispers 引诱猎物前来。") + " 完成且猎物已同地，或猎物自动抵达 Whisperer。",
        eventOptions: [
          { name: "Take Refreshment", text: "Whisperer 恢复全部 HP，获得 50 XP；猎物失去 50 XP。" },
          { name: "Devour %Him", text: "Whisperer 恢复全部 HP，获得 150 XP。猎物获得 " + hunger + " 后死亡，可按相应 Death Magic 的条件复生为 Vampire。" },
          { name: "Welcome %Him Home", condition: "猎物是位于普通人类国家境内的英雄，或位于教团领土内的教士；迁居执行时所在地须为人类体系聚居地。", text: "把猎物的家乡改为当前地点，所属势力改为当地国家或教团，并将英雄资助行动转移到新家乡。" },
          { name: "Make %Him Kin", condition: "Whisperer 仍有至少 50 Psychic Whispers，猎物尚无 The Hunger。", text: "额外消耗 50 Psychic Whispers，使猎物获得 " + hunger + "。" },
        ],
      },
    }],
  },
  {
    id: "3237303618", name: "The Courtesan", records: [{
      source: "3237303618", sourceName: "The Courtesan", eventId: "kat.scandalousArrival", type: "INERT", category: "other", chain: null,
      sourceFile: "E:/Steam/steamapps/workshop/content/1741640/3237303618/KatCourtesan.scandalousArrival.json", condition: "1=1",
      decision: { trigger: "带有 Scandal in Motion 的人物正在执行 Rest 时触发，随后移除标记。", condition: "", selection: "" },
      entry: { id: "event-3237303618-kat-scandalousarrival", name: "The Scandal is Sprung", image: "./agents/mod/courtesan/AdvancedScandalPic.jpg", baseGame: false, meta: "直接触发", eventCategory: "other",
        text: "Courtesan 预先布置的流言在受害者休息时爆发，可以利用双方关系与婚姻进一步扩大丑闻。\n触发方式：" + agentRef("Cause Advanced Scandal", "courtesan-advanced-scandal", "消耗目标的 Personal Item 布置丑闻。") + " 留下 Scandal in Motion；目标下次执行 Rest 时触发，随后移除标记。",
        eventOptions: [
          { name: "Subtle Scandal", text: "目标 Menace +1、Profile +5，被打断 1 回合。" },
          { name: "Plain Scandal", condition: "目标对 Courtesan 的好感至少中立。", text: "目标 Menace +4、Profile +15，被打断 3 回合，对 Courtesan 的好感 −1。\n最近的一名合格英雄对目标的好感 −1。\nCourtesan Menace +1、Profile +5。" },
          { name: "Large Scandal", condition: "目标喜欢或爱慕 Courtesan。", text: "目标 Menace +12、Profile +25，被打断 5 回合，对 Courtesan 的好感 −2。\n最近的两名合格英雄与休息所在地统治者对目标的好感各 −1。\nCourtesan Menace +4、Profile +15。" },
          { name: "Lecherous Scandal", condition: "目标喜欢或爱慕 Courtesan，且配偶为女性。", text: "目标 Menace +12、Profile +25，被打断 7 回合，对 Courtesan 的好感 −4。\n最近的两名合格英雄与休息所在地统治者对目标的好感各 −1，配偶对目标的好感 −4。\nCourtesan Menace +4、Profile +15。" },
        ],
      },
    }],
  },
];

export const agentExpansionTraits: CharacterModifier[] = [
  { id: "character-whisperer-prey", source: "3236518418", sourceName: "The Whisperer", name: "Prey", category: "common", eligible: "非玩家控制的英雄、教士、统治者与人类军队中的人物；Chosen One 除外。",
    text: "标记 Whisperer 当前唯一的猎物。Whisperer 的 Psychic Whispers 每回合 +1，可用于改变本人的偏好、强迫行动或引诱本人。\n指定时 Whisperer 已有 Mutual Support，则与她同地时，Might、Lore、Intrigue、Command 各 +1。",
    acquisition: agentRef("Prey On [Person]", "whisperer-prey-on", "用 Lore 完成 Complexity 9 的挑战以指定猎物。") + " 完成时获得。",
    duration: "Whisperer 更换猎物、死亡或失去对应联系，或猎物成为 Chosen One、死亡、变为玩家可控人物时解除。解除时仍为非玩家单位的旧猎物，对 Whisperer 的好感降低一级。" },
  { id: "character-courtesan-scandal-in-motion", source: "3237303618", sourceName: "The Courtesan", name: "Scandal in Motion", category: "hero", eligible: "被 Courtesan 用 Personal Item 布置丑闻的人物。",
    text: "下次执行 Rest 时触发 " + scandalEvent + "；可选后果取决于本人对 Courtesan 的好感与配偶性别。",
    acquisition: agentRef("Cause Advanced Scandal", "courtesan-advanced-scandal", "在目标家乡消耗其 Personal Item 布置丑闻。") + " 完成时获得。",
    duration: "保留至下次执行 Rest，触发事件后移除。" },
];

export const robberBaronArmy: ArmyRecord = {
  id: "robber-baron-mercenary-company", name: "Mercenary Company", baseGame: false, group: "The Robber Baron", source: "The Robber Baron", faction: "黑暗势力 · 自主雇佣军",
  image: "./agents/mod/robber-baron/UM_MercenaryCompany1.png",
  hp: "初始当前 HP / 最大 HP = ⌊完成 Assemble Mercenary Company 时当地 Banditry ÷2⌋。\n每回合当地 Banditry 至少 20 时，当前 HP 增加 ⌊Banditry ÷2⌋，当地 Banditry 减半；当前 HP 超过原上限时，上限提升到当前值。\n吸收后最大 HP 超过 120，则分裂为两支军队：双方当前 HP 与上限均为 ⌊分裂前最大 HP ÷2⌋，原有 Menace 均分。",
  stats: "移动: 1　伤害倍率: 1",
  origin: agentRef("Assemble Mercenary Company", "robber-baron-assemble-company", "消耗 100 Gold，要求 Command ≥4、当地 Banditry ≥30。") + " 完成时创建，或由已有佣兵军队分裂产生。",
  behavior: "自主行动，不占 Agent 名额。优先返回诞生地点补充兵力：当前 HP 低于上限 75% 时返乡并执行 Recruit。\n兵力充足时，摧毁当前或前往最近的 Shadow <50% 人类体系聚居地，和平状态也会发动袭击。不会主动加入友军已有的战斗。\n名称与肖像在生成时随机选定，肖像有 20 种。",
  skills: [
    { id: "robber-baron-company-recruit", name: "Recruit", text: "在军队诞生地点持续 5 回合，恢复 ⌊最大 HP ÷5⌋，不超过上限。" },
    { id: "robber-baron-company-banditry", name: "Absorb Banditry", image: "./location-modifiers/game/banditry.png", text: "每回合吸收当地 " + robberBanditry + " 补充兵力；吸收和分裂公式见基础属性。" },
  ],
};

export const robberBaronModifiers: ModifierSourceGroup = {
  id: "modifiers-3446675112", name: "The Robber Baron", baseGame: false,
  sections: [{ id: "modifiers-3446675112-human", title: "人类体系聚居地", items: [{
    id: "robber-baron-banditry", name: "Banditry · The Robber Baron", baseGame: false, image: "./location-modifiers/game/banditry.png",
    text: "对本体 " + banditry + " 的扩展。Robber Baron 拥有 Racketeer 且同地时，每回合获得 3 Gold。该修正也是 " + company + " 的兵力来源。\n启用此 Mod 后，Combat Banditry 的 Complexity 从 10 改为 40，默认基础 XP 为 60；以最后加载的参数覆盖为准。",
    modifierLocations: "人类体系聚居地。",
    modifierSource: agentRef("Establish Banditry", "robber-baron-establish-banditry", "在合格聚居地建立强度 25 的 Banditry。") + "。",
    modifierChange: { natural: "强度低于 75 时每回合 +2，达到或超过 75 后停止自然增长。", external: agentRef("Establish Banditry", "robber-baron-establish-banditry", "在无 Banditry 的聚居地建立强度 25 的 Banditry。") + "：建立强度 25。\nUnderworld Ties：Robber Baron 同地、当地有人类体系聚居地且强度低于 150 时，每回合额外 +4；检查时强度至少 150 则设为 150。\n" + agentRef("Assemble Mercenary Company", "robber-baron-assemble-company", "消耗 100 Gold，将当地一半 Banditry 转为军队。") + "：完成时减半。\nMercenary Company：当地强度至少 20 时，每支同地军队每回合将其减半，吸收相应兵力。\nCombat Banditry 或 Slaughter Bandits：完成时移除。" },
  }] }],
};
