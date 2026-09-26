import type { AgentRecord } from "./AgentCatalogTypes";

// Source audit: AUDIT-2026-09-26-agents.md
export const ref = (name: string, page: string, id: string, text: string, meta: string, image?: string) =>
  `<CrossReference name="${name}" href="?page=${page}#entry-${id}" meta="${meta}" text="${text}"${image ? ` image="${image}"` : ""} />`;
const local = (name: string, id: string) => `<CrossReference name="${name}" href="#entry-${id}" />`;
export const agentRef = (name: string, id: string, text: string) => ref(name, "agents", id, text, "挑战");
export const banditry = ref("Banditry", "base-location-modifiers", "banditry", "当地 Prosperity −0.25。强度低于 75 时每回合 +2；Combat Banditry 或 Slaughter Bandits 完成时移除。", "地点修正", "./location-modifiers/game/banditry.png");
export const robberBanditry = ref("Banditry", "base-location-modifiers", "robber-baron-banditry", "本体匪患；Robber Baron 可建立强度 25 的 Banditry，凭 Underworld Ties 每回合额外增长 4，或将一半强度转为佣兵军队。启用 Mod 后 Combat Banditry 的 Complexity 为 40。", "地点修正", "./location-modifiers/game/banditry.png");
export const hunger = ref("The Hunger", "character-modifiers", "character-base-t-thehunger", "饥饿强度每回合 +3，推动人物执行 Feed；具有此特质的死者可供相应吸血鬼复生仪式使用。", "角色特质");
export const personalItem = ref("Personal Item", "base-items", "personal-item-of-person", "绑定原主人的私人物品，可用于针对原主人的 Blood Magic、丑闻及伪造线索。", "物品", "./base-items/i_personalItem.png");
export const sellsword = ref("Sellsword", "minions", "sellsword", "HP: 2 · Attack: 2 · Defence: 2 · Command: 1。", "随从", "./minions/game/minion_sellsword.png");
export const company = ref("Mercenary Company", "armies", "army-robber-baron-mercenary-company", "初始 HP / 最大 HP = ⌊当地 Banditry ÷2⌋。自主袭击 Shadow 低于 50% 的人类体系聚居地；可吸收 Banditry 补员，最大 HP 超过 120 时分裂。", "军队", "./agents/mod/robber-baron/UM_MercenaryCompany1.png");
export const preyEvent = ref("Ensnared Prey", "events", "event-3236518418-whisperer-whisperer-lured", "猎物抵达 Whisperer 后，可选择恢复 HP 并汲取 XP、吞噬、迁居，或额外花费 50 Psychic Whispers 施加 The Hunger。", "其他事件", "./agents/mod/whisperer/event_lured.jpg");
export const scandalEvent = ref("The Scandal is Sprung", "events", "event-3237303618-kat-scandalousarrival", "目标下次执行 Rest 时触发；按其对 Courtesan 的好感与婚姻状态选择丑闻强度。", "其他事件", "./agents/mod/courtesan/AdvancedScandalPic.jpg");
const follow = "开始时与目标同地；执行期间会跟随移动至相邻地点。无法继续跟上时行动中止；进行中好感变化不会自行中止行动。";
const xpFormula = "默认难度下，基础 XP = ⌊max(1, 6×Complexity)^0.75⌋。";

export const additionalAgents: AgentRecord[] = [
  {
    id: "whisperer", name: "The Whisperer", group: "The Whisperer",
    image: "./agents/mod/whisperer/unit_whisperer.png",
    stats: "Might: 2　Lore: 3　Intrigue: 3　Command: 2　HP: 5",
    recruitment: "唯一招募；在人类国家所属的人类体系聚居地招募，需要空闲 Agent 名额并消耗 1 招募点。",
    note: "标记一名猎物后积累 Psychic Whispers，用于远程改变偏好、命令行动或诱其前来。",
    identity: "种族为 Undead。",
    skills: [
      { id: "whisperer-vampiric-curse", name: "Vampiric Curse", meta: "固定特质", text: "当地 Shadow 至少 50% 时，战斗初始 Defence +4。" },
      { id: "whisperer-psychic-whispers", name: "Psychic Whispers", meta: "猎物资源", text: "完成 " + local("Prey On [Person]", "whisperer-prey-on") + " 后从 0 开始，每回合 +1，无距离要求，也没有强度上限。\nCommand Prey、Reshape Prey 每次确认选择后消耗 25；Lure Prey 完成时消耗 25；事件中 Make %Him Kin 再消耗 50。\n更换猎物会清空原有积累；猎物死亡或变为玩家可控人物后解除联系。" },
      { id: "whisperer-confidante", name: "Confidante", meta: "可选特质", text: "每次指定新猎物时，使新猎物对 Whisperer 的好感提高一级。" },
      { id: "whisperer-mutual-support", name: "Mutual Support", meta: "可选特质", text: "Whisperer 与猎物同地时，双方 Might、Lore、Intrigue、Command 各 +1。猎物一侧的加成在指定猎物时写入；取得此特质后新指定的猎物会获得该加成。" },
      { id: "whisperer-enchanting-words", name: "Enchanting Words", meta: "可选特质", text: "在当地原有的付费随从招募中，为玩家可用的种类增加 " + local("Enthrall [Minion]", "whisperer-enthrall-minion") + "，免除 Gold 消耗；仍须满足渗透、随从自身条件与 Command 要求。" },
    ],
    challenges: [
      { id: "whisperer-command-prey", name: "Command Prey", image: "./agents/mod/whisperer/challenge_command_prey.png", meta: "使用属性：Lore；即时选择", time: "立即执行", statLine: "Complexity: 0　Profile: 0　Menace: 0　XP: 0", location: "任意地点；已有猎物，Psychic Whispers 至少 25。", text: "确认行动后消耗 25 Psychic Whispers，更改猎物当前任务。取消选择不消耗。\n人物单位：可选 Perform Quest、Attack Character、Guard Character、Disrupt Character；行动动机须至少 −40，同类任务只列动机最高的一处。Whisperer 自身始终加入可护卫目标。\n统治者：可选其合法的本地行动；国家君主还可选择国家行动，均要求动机至少 −40。\n进食行动不在可选列表中；被命令者仍需正常前往地点、执行并完成行动。" },
      { id: "whisperer-reshape-prey", name: "Reshape Prey", image: "./agents/mod/whisperer/challenge_reshape_prey.png", meta: "使用属性：Lore；即时选择", time: "立即执行", statLine: "Complexity: 0　Profile: 0　Menace: 0　XP: 0", location: "任意地点；已有猎物，Psychic Whispers 至少 25。", text: "确认后消耗 25 Psychic Whispers，修改猎物对概念、种族或 Whisperer 的偏好。\nImprove Opinion：将该项直接设为 Like，并清除原有喜欢或厌恶；已 Like 或 Love 的项目不再列出。\nWorsen Opinion：将该项降低一级；已 Dislike 或 Hate 的项目不再列出。\n取消选择不消耗。" },
      { id: "whisperer-lure-prey", name: "Lure Prey", image: "./agents/mod/whisperer/challenge_call_prey.png", meta: "使用属性：Lore", statLine: "Complexity: 3　Profile: 0　Menace: 0　XP: 8", location: "任意地点；已有猎物，Psychic Whispers 至少 25，猎物当前未在被引诱途中。", text: "完成时消耗 25 Psychic Whispers，Profile +2、Menace +5。\n猎物已同地时立即触发 " + preyEvent + "；否则自动向 Whisperer 移动，到达后触发事件。\n异地统治者会先退位并转为 Warrior；正在领军的人物会离开军队，再前来会面。" },
      { id: "whisperer-prey-on", name: "Prey On [Person]", meta: "使用属性：Lore", statLine: "Complexity: 9　Profile: 0　Menace: 0　XP: 19", location: "与目标同地；可选非玩家控制的英雄、教士、人类军队中的人物，或当地未在活动单位中任职的统治者。排除 Chosen One 与当前猎物；针对统治者时要求当地完全渗透。", text: "将目标设为唯一猎物，为其施加 " + ref("Prey", "character-modifiers", "character-whisperer-prey", "被 Whisperer 标记的猎物；对应的 Psychic Whispers 每回合 +1，可被用于操控。", "角色特质") + "，Psychic Whispers 重置为 0。旧猎物若仍为非玩家单位，对 Whisperer 的好感降低一级。\n完成时 Profile +4。执行期间可跟随目标移动一格，无法跟上则中止。图标使用目标本人的肖像。\n界面要求目标对 Whisperer 的态度至少中立；当前代码的好感检查使用了人物原始索引，存在未正确识别该好感的情况。" },
      { id: "whisperer-enthrall-minion", name: "Enthrall [Minion]", meta: "使用属性：固定进度，每回合 1", statLine: "Complexity: 对应随从招募时间　Profile: 0　Menace: 0　XP: 按 Complexity 计算", location: "当地存在玩家可用、Gold 价格大于 0 的随从招募；拥有 Enchanting Words，满足对应渗透和随从自身要求，Command 至少等于该随从的消耗。", text: "免费取得对应随从，属性和能力与原种类相同；超过随从栏位或总 Command 时需解雇已有随从。图标随对应随从变化。\n本体招募每回合进度 1，Complexity 等于该随从招募时间。" + xpFormula },
      { id: "whisperer-rest-in-grave", name: "Rest in Grave", image: "./agents/game/restAndRearm.png", baseGame: true, meta: "使用属性：固定进度，每回合 1", time: "3 回合", statLine: "Complexity: 3　Profile: 20　Menace: 0　XP: 8", location: "自己的家乡。", text: "恢复自身与所有 Undead 随从各 2 HP，不超过各自上限。" },
    ],
  },
  {
    id: "courtesan", name: "The Courtesan", group: "The Courtesan", image: "./agents/mod/courtesan/Courtesan2b.png",
    stats: "Might: 3　Lore: 1　Intrigue: 4　Command: 2　HP: 5",
    recruitment: "唯一招募；在 City 招募，需要空闲 Agent 名额并消耗 1 招募点。",
    note: "通过陪同行动建立好感，再使人物 Enshadowed 或取得其私人物品，策划休息时爆发的丑闻。",
    skills: [
      { id: "courtesan-alluring-manipulator", name: "Alluring Manipulator", meta: "固定特质", text: "移动或回合刷新时，根据同地非玩家人物对自己的态度提供陪同行动：中立提供 Accompany，喜欢或爱慕提供 Enshadow 与 Beguile。可作用于英雄及合格教士；排除邪恶 Agent。\n" + follow },
      { id: "courtesan-dark-influence", name: "Dark Influence", meta: "可选特质", text: "每回合同地非玩家控制的英雄、教士个人 Shadow +1 个百分点，最高 100%；排除 Chosen One 与自主邪恶人物。" },
      { id: "courtesan-traveling-model", name: "Traveling Model", meta: "可选特质", text: "每次移动获得 3 Gold，包括陪同行动中的跟随移动。" },
      { id: "courtesan-twist-of-fate", name: "Twist of Fate", meta: "可选特质", text: "取得时使当前 Chosen One 对自己的好感提高 4 级，最多达到 Love。取得时若没有 Chosen One，不产生效果。" },
    ],
    challenges: [
      { id: "courtesan-accompany", name: "Accompany [Person]", meta: "使用属性：Intrigue + ⌊Might/2⌋ + ⌊Lore/2⌋ + ⌊Command/2⌋，总进度最低 1", statLine: "Complexity: 见下方公式　Profile: 0　Menace: 0　XP: ⌊基础 XP ×2/3⌋", location: "与对 Courtesan 态度中立的合格人物同地。", text: "完成后目标对 Courtesan 的好感提高一级，自身 Profile +6。\nComplexity = max(1, 90 −15×目标对 Cooperation 的偏好 −10×对 Human 的偏好 −⌊0.45×个人 Shadow 百分数⌋ −7×目标等级 + Chosen One 额外 90)。偏好取 −2 至 +2。\n" + xpFormula + "\n" + follow + "图标使用目标本人的肖像。" },
      { id: "courtesan-enshadow", name: "Enshadow [Person]", image: "./locations/game/enshadow.png", meta: "使用属性：Lore + ⌊Might/2⌋ + ⌊Intrigue/2⌋ + ⌊Command/2⌋，总进度最低 1", statLine: "Complexity: 见下方公式　Profile: 0　Menace: 0　XP: ⌊基础 XP ×2/3⌋", location: "与喜欢或爱慕 Courtesan 的合格人物同地；目标为 Chosen One 时无法执行。", text: "完成后将目标个人 Shadow 设为 100%，自身 Profile +2、Menace +5。\nComplexity = max(1, ⌊(125 −⌊1.2×目标个人 Shadow 百分数⌋ −10×目标等级)×偏好倍率⌋)。对 Shadow 的偏好从 Hate、Dislike、Neutral、Like 至 Love，倍率依次为 4、2、1、0.5、0.25。\n" + xpFormula + "\n" + follow },
      { id: "courtesan-beguile", name: "Beguile [Person]", image: "./agents/game/i_personalItem.png", meta: "使用属性：Intrigue + ⌊Might/2⌋ + ⌊Lore/2⌋ + ⌊Command/2⌋，总进度最低 1", statLine: "Complexity: 见下方公式　Profile: 0　Menace: 0　XP: ⌊基础 XP ×2/3⌋", location: "与喜欢或爱慕 Courtesan 的合格人物同地；可对 Chosen One 执行。", text: "取得目标的 " + personalItem + "，自身 Menace +1。\nComplexity = max(1, 48 −⌊0.18×目标个人 Shadow 百分数⌋ −7×目标等级 + Chosen One 额外 30)。\n" + xpFormula + "\n" + follow },
      { id: "courtesan-advanced-scandal", name: "Cause Advanced Scandal", image: "./agents/game/i_personalItem.png", meta: "使用属性：Intrigue", statLine: "Complexity: 5　Profile: 5　Menace: 12　XP: 12", location: "目标的家乡，人类体系聚居地；Infiltration >0% 或地点 Shadow >50%。携带目标的 Personal Item，且该目标没有待触发的 Scandal in Motion。", text: "消耗第一件符合条件的 Personal Item，给其主人施加 " + ref("Scandal in Motion", "character-modifiers", "character-courtesan-scandal-in-motion", "下次开始 Rest 时触发 The Scandal is Sprung，结算后移除此标记。", "角色特质") + "；完成时 Profile +1。\n目标下次执行 Rest 时触发 " + scandalEvent + "，按好感与婚姻状态选择效果。" },
    ],
  },
  {
    id: "robber-baron", name: "The Robber Baron", group: "The Robber Baron", image: "./agents/mod/robber-baron/UAE_TheRobberBaron.png",
    stats: "Might: 3　Lore: 1　Intrigue: 3　Command: 3　HP: 7",
    recruitment: "唯一招募；在具有 Banditry，或 Unrest 至少 50 的 City 招募，需要空闲 Agent 名额并消耗 1 招募点。",
    note: "通过走私与敲诈筹资，腐化统治者，建立匪患并将其转化为自主行动的佣兵军队。",
    skills: [
      { id: "robber-baron-underworld-ties", name: "Underworld Ties", meta: "可选特质", text: "在人类体系聚居地且当地已有 " + robberBanditry + " 时：强度低于 150，每回合额外 +4，自身 Menace +0.5；结算此特质时强度至少 150，则将其设为 150。\nBanditry 低于 75 时，原有的自然增长 +2 仍会叠加。" },
      { id: "robber-baron-racketeer", name: "Racketeer", meta: "可选特质", text: "身处已有 Banditry 的人类体系聚居地时，每回合获得 3 Gold。" },
      { id: "robber-baron-ex-mercenary", name: "Ex-Mercenary", meta: "可选特质", text: "取得时立即获得 75 Gold 和 3 名 " + sellsword + "。" },
    ],
    challenges: [
      { id: "robber-baron-smuggle", name: "Smuggle", image: "./agents/game/i_ruinedPotionOfHealing.png", meta: "使用属性：Intrigue", statLine: "Complexity: 20 +10×Security　Profile: 0　Menace: 3　XP: 按 Complexity 计算", location: "Infiltration >0% 的人类体系聚居地。", text: "获得随机 20–40 Gold，各整数等概率；City 额外 +20，即 40–60 Gold。\n完成时 Profile +2、Menace +7。\n" + xpFormula },
      { id: "robber-baron-corrupt-ruler", name: "Corrupt Ruler", image: "./locations/game/tax.png", meta: "使用属性：Intrigue", statLine: "Complexity: 50 +25×Security，再按偏好减半　Profile: 3　Menace: 12　XP: 按 Complexity 计算", location: "有人类种族统治者的人类体系聚居地；其个人 Shadow <50%，对 Gold 的偏好至少中立，自身至少持有 50 Gold。", text: "向统治者支付 50 Gold，使其个人 Shadow +50 个百分点；33.33% 概率使其对 Robber Baron 的好感提高一级。\n统治者喜欢或爱慕 Gold 时 Complexity 减半并向下取整；喜欢或爱慕 Shadow 时再减半并向下取整。\n完成时 Profile +3、Menace +12。\n" + xpFormula },
      { id: "robber-baron-establish-banditry", name: "Establish Banditry", image: "./location-modifiers/game/banditry.png", meta: "使用属性：Command", statLine: "Complexity: 40　Profile: 3　Menace: 7　XP: 60", location: "尚无 Banditry 的人类体系聚居地；当地 Unrest ≥25、Famine ≥25、Shadow ≥25%，满足任意一项。", text: "建立强度 25 的 " + robberBanditry + "。\n完成时 Profile +3、Menace +7。" },
      { id: "robber-baron-assemble-company", name: "Assemble Mercenary Company", image: "./locations/game/raid.png", meta: "使用属性：Command", statLine: "Complexity: 100　Profile: 20　Menace: 20　XP: 121", location: "当地 Banditry 至少 30；自身 Command 至少 4、Gold 至少 100。", text: "消耗 100 Gold，以完成时当地 Banditry 的一半建立 " + company + "：初始 HP 与最大 HP 均为 ⌊Banditry ÷2⌋，当地 Banditry 减半。\n完成时 Profile +20、Menace +20。军队自主行动，不占 Agent 名额。" },
    ],
  },
];
