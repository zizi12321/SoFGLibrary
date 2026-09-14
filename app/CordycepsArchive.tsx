"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  id: "cordyceps", name: "Cordyceps Hive Mind", number: "08", theme: "cordyceps-theme",
  assetDir: "cordyceps", background: "god_background.jpg", portrait: "god_portrait.png",
  flavour: "通过感染人物与人口建立 Hive，由 Drone 运回猎物积累幼虫并破除封印，最后孵化 Vespidic Swarm。",
  caption: "感染、Hive、Larval Mass 与虫群军队",
  maxTurns: "500 回合", awaken: "Drone 累计送回 200 人后苏醒", panic: "25%", finalAgents: "5",
  progressLabel: "累计送回人口",
  unlockMethod: "Drone 将收割人口送回 Hive，累计送回数量达到对应阈值后解锁",
  powerRecovery: "神力上限 = 已破封印数 + 1；每回合恢复 0.035 × 神力上限 × 难度缩放。表内列出难度缩放为 1 时的恢复量。",
  specialVictory: "无",
  core: [
    "Supplicant 开局具有成熟的 Cordyceps Infection 和 The Scent of Prey。把感染带进人类聚居地，再用 Infect Ruler 与 Infect Populace 扩大感染。",
    "用 Start Hive 把成熟感染者变成 Hive，同时生成 Arthropodic Drone；也可以先用 Motor Function Takeover 把成熟感染的英雄引到适合建巢的无人地点。",
    "通过 Infested Drone 转化感染者，或用 Arthropod Drone 消耗 Larval Mass 孵化收割单位。Drone 与 Arthropodic Drone 根据 Pheromone: Feeding 寻找猎物，再沿 Pheromone: Home 返巢。",
    "送回 Hive 的猎物按人数增加 Larval Mass，并永久推进封印。花费幼虫不会倒退封印；Insectine Devotion 引来的 Refugees 只增加幼虫储量。",
    "用 Vespidic Swarm 孵化军队，再以 Vespid Swarm Target 指定活动区域。Airborne Spores 持续扩散 Infected Populace，Internal Maturation 则直接从感染人口中生成军队。"
  ],
  overviewExtra: {
    title: "收割与封印",
    text: "探索、寻猎和返巢中的 Drone 会避开驻有 Human Army 且当地 Shadow 低于 50% 的聚居地；这项限制是移动时的检查。感染会降低统治者执行征兵行动的意愿，降低量等于感染成熟度，最高为 100。\n封印依据累计送回人口，阈值依次为 10、20、40、100、200；不是 Hive 当前的 Larval Mass，也不是每阶段重新累计。"
  },
  seals: [
    { seal: 0, progress: 0, agents: 2, reward: ["Start Hive", "Motor Function Takeover", "Infested Drone", "Arthropod Drone", "Homing Instinct"] },
    { seal: 1, progress: 10, agents: 3, reward: ["Assign Guard", "Disrupted Neurology"] },
    { seal: 2, progress: 20, agents: 3, reward: ["Haematophage", "Remove Hive"] },
    { seal: 3, progress: 40, agents: 4, reward: ["Vespidic Swarm", "Vespid Swarm Target"] },
    { seal: 4, progress: 100, agents: 5, reward: ["Airborne Spores", "Synchronised Infestation"] },
    { seal: 5, progress: 200, agents: 5, reward: ["Paranoid Hysteria", "Internal Maturation", "苏醒"] }
  ],
  powers: [
    O("Start Hive", 0, 0, "杀死目标，在当地建立 Hive、Hive Spire 和 Larval Mass，并生成一只 Arthropodic Drone。", "目标必须是 Cordyceps Infection 成熟度达到 100% 的人物单位；所在地须为非海洋、无势力占领，且没有聚居地或仅有城市废墟。", "fungalHive.png"),
    O("Motor Function Takeover", 0, 1, "让距离最近、尚未到达目标地点的成熟感染英雄或教徒放下当前任务，前往指定地点。抵达后可用 Start Hive 建巢。", "目标须为非海洋、无势力占领的空地或城市废墟；地图上须有感染成熟度达到 100% 的非我方人物，且不能是自主怪物。", "insect-motor-function-takeover.png"),
    O("Infested Drone", 0, 0, "把目标转化为 Drone，保留原人物并令其前往最近的 Hive，随后自主收割。转化英雄或教徒会增加 5% Fallen Hero 世界恐慌；转化我方 Agent 不触发这项恐慌。", "目标须为感染成熟度达到 100% 的英雄、教徒或 Agent；地图上至少有一个 Hive。不能对 Drone、Haematophage 等自主怪物施放。", "agent-insect-drone.png"),
    O("Arthropod Drone", 0, 0, "消耗当地 10 点 Larval Mass，生成一只 Arthropodic Drone，自主寻找感染人口并将猎物送回 Hive。", "目标地点的 Larval Mass 必须严格大于 10。", "agent-insect-drone-arthopod.png"),
    O("Homing Instinct", 0, 0, "替换目标当前任务，令其直接前往最近的 Hive；若已没有 Hive，则不会安排移动。", "目标必须是 Drone 或 Arthropodic Drone。", "insect-homing-instinct.png"),
    O("Assign Guard", 1, 1, "消耗当地 5 点 Larval Mass，在目标的第一个空随从槽放入 Vespidic Guard，可以超过正常 Command 上限。", "目标须为 Drone、Arthropodic Drone 或可控制的 Agent；当地 Larval Mass 至少为 5，且目标有空随从槽。", "insect-larval-mass.png"),
    O("Disrupted Neurology", 1, 1, "添加一份持续 25 回合的 <CrossReference name=\"Disrupted Neurology\" href=\"#entry-disrupted-neurology-modifier\" meta=\"地点修正\" text=\"每份使 Security −1，持续 25 回合；多份效果叠加。\" />，使 Security −1。重复施放会新增独立修正，效果叠加。", "目标须为人类聚居地，且 Infected Populace 至少为 25%。", "insect-disrupted-neurology.png"),
    O("Haematophage", 2, 3, "生成一只 <CrossReference name=\"Haematophage\" href=\"#entry-haematophage-unit\" meta=\"自主单位\" text=\"在出生地周围骚扰满血英雄，受伤后返乡恢复，每 14 回合在空槽生成 Carapace。\" />，以出生地为活动中心骚扰英雄。", "可以对任意地点施放。", "agent-insect-haematophage.png"),
    O("Remove Hive", 2, 0, "移除当地 Hive 及其势力归属；同时降低附近的 Pheromone: Home。当地 Larval Mass 不由本神力直接删除。", "目标地点必须有 Hive。", "fungalHive_Grey.png"),
    O("Vespidic Swarm", 3, 0, "消耗当地全部 Larval Mass，生成一支 <CrossReference name=\"Vespidic Swarm\" href=\"#entry-vespidic-swarm-army\" meta=\"军队\" text=\"初始 HP 和最大 HP 均等于消耗幼虫量向下取整。可用 Vespid Swarm Target 指定活动区域。\" />，初始 HP 和最大 HP 均等于消耗的 Larval Mass 向下取整。", "目标地点的 Larval Mass 必须严格大于 10。", "unit-insect-vespid.png"),
    O("Vespid Swarm Target", 3, 0, "令全部 <CrossReference name=\"Vespidic Swarm\" href=\"#entry-vespidic-swarm-army\" meta=\"军队\" text=\"自主军队，会夷平目标区域的人类聚居地并支援附近虫群战斗。\" /> 停止当前任务并前往指定地点；之后自主选择该目标两格范围内的人类聚居地进行破坏。", "目标必须是地点。", "insect-swarm-target.png"),
    O("Airborne Spores", 4, 2, "使 Hive 永久开启空气传播：感染巢内尚未感染的人类人物，并向两格内的非精灵人类聚居地传播 Infected Populace；Hive Spire 此后每回合 Menace +1。", "目标必须是尚未开启空气传播的 Hive。", "fungalHive_Red.png"),
    O("Synchronised Infestation", 4, 0, "同时将地图上全部成熟感染、非我方的英雄和教徒转化为 Drone，并令它们前往最近的 Hive。每转化一名英雄或教徒，增加 5% Fallen Hero 世界恐慌。", "施放时须选中一名感染成熟度达到 100% 的人物，且地图上至少有一个 Hive；不能以 Drone、Haematophage 等自主怪物为目标。", "agent-insect-drone.png"),
    O("Paranoid Hysteria", 5, 2, "目标 Menace +10，临时世界恐慌 +1%；在当地等概率添加 Madness Effect: Hypochondria 或 Madness Effect: Paranoid Delusions。", "目标必须是位于人类聚居地、感染成熟度达到 100% 的人物，不能是 Chosen One；当地 Infected Populace 不得超过 50%，没有该修正也可施放。", "insect-paranoia.png"),
    O("Internal Maturation", 5, 3, "令感染者体内的虫群成熟，生成一支 <CrossReference name=\"Vespidic Swarm\" href=\"#entry-vespidic-swarm-army\" meta=\"军队\" text=\"初始 HP = 向下取整(min(50，施放前人口 × 感染百分比))；最大 HP 与初始 HP 相同。\" />。军队 HP = 向下取整(min(50，施放前人口 × 感染百分比))，当地人口和防御同时减少相同数值；人口归零则地点沦为废墟。", "目标须为人类聚居地，且 Infected Populace 至少为 50%。", "ParasiteWithin.png")
  ],
  supplicant: {
    image: "unit_insect_supplicant.png",
    stats: "Might 2；Lore 2；Intrigue 4；Command 3。",
    abilities: [
      D("The Scent of Prey", "在带有 Infected Populace 的人类聚居地停留时，向当地及四格内地点释放 Pheromone: Feeding，吸引 Drone 前来收割。具体增加量列于该修正的变化方式。"),
      D("Cordyceps Infection", "Supplicant 开局成熟度为 100%，我方可控制 Agent 每回合结束也会保持 100%。其他感染者成熟度每回合 +2，最高 100%；具有 Chosen One 特质的人物会自动移除感染。\n感染者在非精灵人类聚居地每回合传播 Infected Populace，并尝试感染同地点的人类统治者、英雄与教徒；对每名对象的每回合传播概率为 2.5% × 成熟度百分比。自然传播不感染 Awareness 达到 100% 的对象；Infect Ruler、Targeted Infection 和 Airborne Spores 没有这项 Awareness 限制。Drone、Arthropodic Drone 与 Haematophage 不执行这种自然传播。\n统治者的征兵行动意愿降低量等于成熟度，最高降低 100；这是行动评分惩罚。成熟感染人物可以用于 Start Hive、Infested Drone 或 Synchronised Infestation。")
    ]
  },
  sections: [
    { id: "location-modifiers", title: "地点修正", items: [
      D("Infected Populace", "表示人口的感染百分比，最高 100%。感染人口是 Drone 收割的对象，并提供 Infect Populace 和 Treat Populace；达到相应感染程度还可使用 Disrupted Neurology、Targeted Infection 与 Internal Maturation。强度降至 0 仍保留，聚居地沦为废墟时移除。", {
        image: "agent-insect-late-stage.png", initialValue: "",
        modifierChange: { natural: "", external: "Cordyceps Infection：每名能自然传播的感染者在非精灵人类聚居地每回合 +2 个百分点。\nAirborne Spores：每个已开启孢子传播的 Hive 向两格内非精灵人类聚居地每回合 +1 个百分点，可叠加。\nInfect Populace：完成时 +25 个百分点，最高 100%。\nTreat Populace：完成时 −50 个百分点，最低 0%，不会删除修正。\nDrone 与 Arthropodic Drone：设收割人数为 N，探索时 −N 个百分点；沿气味寻猎时 −N × (1 − 当前感染百分比) 个百分点，最低 0%。具体人数公式见单位说明。\nInternal Maturation：直接减少人口，不直接扣减感染百分比；若造成地点沦为废墟，则移除此修正。" }
      }),
      D("Larval Mass", "Hive 储存的幼虫资源，用于 Arthropod Drone、Assign Guard 与 Vespidic Swarm。数值可以超过 100；储量与封印进度分别记录，使用幼虫不会倒退封印。归零时保留。", {
        image: "insect-larval-mass.png", initialValue: "新建 Hive 时为 0；若当地已经有幼虫资源，则保留原值。",
        modifierChange: { natural: "", external: "Drone 与 Arthropodic Drone：在 Hive 卸下猎物时，按送回人数等量增加，同时推进封印。\nInsectine Devotion：受教义驱使的 Refugees 到达 Hive 后，增加 4 × 当时难民 HP，难民随后消失；这项收入不推进封印。\nArthropod Drone：每次 −10。\nAssign Guard：每次 −5。\nVespidic Swarm：清空当地储量。\nDestroy Larva：完成时减少 max(1，向下取整(当前储量 × 0.33))。" }
      }),
      D("Pheromone: Feeding", "引导 Drone 与 Arthropodic Drone 寻找感染人口。两者在 Hive 的寻路决策中，若当地强度大于 1，则有 80% 概率进入气味寻猎，否则探索；释放时强度最高为 300。", {
        image: "insect-pheromone-feed.png", initialValue: "",
        modifierChange: { natural: "每回合自然减少当前强度的 7.5%。", external: "The Scent of Prey：在有人口 P、感染强度 I 的人类聚居地，每回合向距离 d ≤ 4 的地点增加 I × 0.005 × P ÷ (1 + d)，最高 300。\nDrone 与 Arthropodic Drone 返巢：设携带人数 N、返巢任务已经执行的次数 s（本次从 1 开始），在移动前的地点增加 10 × √N ÷ (s + 5)，最高 300。\nDrone 与 Arthropodic Drone 沿气味或随机移动抵达 Hive 时，再在巢内增加 5 × N ÷ (s + 6)，最高 300。" }
      }),
      D("Pheromone: Home", "引导 Drone 与 Arthropodic Drone 返巢，倾向选择气味较强的相邻地点；没有更强的气味时会随机移动。释放时强度最高为 300。", {
        image: "insect-pheromone-home.png", initialValue: "",
        modifierChange: { natural: "每回合自然减少当前强度的 7.5%。", external: "Drone 与 Arthropodic Drone 探索或寻猎：设当前任务已经执行的次数为 s（本次从 1 开始），在移动前的地点增加 60 ÷ (s + 5)，最高 300。\nRemove Hive：将被移除 Hive 当地的强度清零；距离为 d = 1、2、3、4 的地点分别保留原强度的 (3 + d) ÷ 8，即 50%、62.5%、75%、87.5%。" }
      }),
      D("Disrupted Neurology", "每份修正使当地 Security −1，多份修正分别计时且效果叠加。", {
        id: "disrupted-neurology-modifier", image: "insect-disrupted-neurology.png", initialValue: "25。",
        modifierChange: { natural: "每回合 −1；归零或聚居地沦为废墟时移除。", external: "<CrossReference name=\"Disrupted Neurology\" href=\"#entry-disrupted-neurology\" meta=\"神力\" />：每次施放添加一份强度为 25 的独立修正，不延长已有修正。" }
      }),
      D("Madness Effect: Hypochondria", "当地 Prosperity −0.65。出现时添加 Quarantine，并增加 Plague Immunity。这两项本体防疫机制针对 Plague，不会治疗 Cordyceps Infection 或降低 Infected Populace。", {
        image: "madness-effect.png", baseGame: true, initialValue: "", modifierChange: { natural: "", external: "" }
      }),
      D("Madness Effect: Paranoid Delusions", "当地 Security +5；每回合使当地除 Chosen One 外的人物单位个人 Shadow +5 个百分点，最高 100%，包括我方 Agent。出现时添加 Banditry。", {
        image: "madness-effect.png", baseGame: true, initialValue: "", modifierChange: { natural: "", external: "" }
      }),
    ]},
    { id: "locations", title: "地点与设施", items: [
      D("Hive", "由 Start Hive 建立的虫巢聚居地。保留当地原有 Shadow，并处于已渗透状态；内含 Hive Spire 与 Larval Mass。Drone 和 Arthropodic Drone 在这里卸下猎物并重新出发。Airborne Spores 可永久开启巢内感染和两格范围内的人口感染传播，地图图标随之变红。", { image: "loc_minor_fungus.png" }),
      D("Hive Spire", "Hive 内的设施。开启 Airborne Spores 后每回合 Menace +1；未开启时没有这项增加。", { image: "fungalHive.png" })
    ]},
    { id: "minions", title: "随从", items: [
      D("Vespidic Guard", "由 Assign Guard 生成，占用一个随从槽。神力施放时不检查 Command 容量，因此可以超出通常上限。", { image: "unit-insect-vespid.png", stats: "HP 3；Attack 4；Defence 3；Command 1。" }),
      D("Carapace", "由 Haematophage 每 14 回合在第一个空随从槽生成一个；没有空槽时跳过当次生成。", { image: "insect-carapace.png", stats: "HP 1；Attack 0；Defence 2；Command 0。" })
    ]},
    { id: "units", title: "特殊人物与自主单位", items: [
      D("Drone", "由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。\n设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。\n探索时须 I > 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。", {
        image: "agent-insect-drone.png", stats: "Might 继承；Lore 继承；Intrigue 继承；Command 继承；HP 5。",
        abilities: [D("Explore", "随机探索并留下 Pheromone: Home；探索任务执行超过 8 次后改为返巢。探索、寻猎和气味返巢时，均避开驻有 Human Army 且当地 Shadow 低于 50% 的相邻聚居地。", { id: "drone-explore" }), D("Seeking Prey", "沿 Pheromone: Feeding 寻找感染人口，途中留下 Pheromone: Home；收割后改为返巢。", { id: "drone-seeking-prey" }), D("Return to Hive", "沿 Pheromone: Home 返巢，并留下 Pheromone: Feeding；任务执行超过 12 次后，改用安全路线前往最近的 Hive。", { id: "drone-return-to-hive" }), D("Cordyceps Infection", "保留感染特质，但不再执行其自然感染传播。", { id: "drone-infection" })]
      }),
      D("Arthropodic Drone", "由 Start Hive 免费生成，或用 Arthropod Drone 消耗幼虫孵化。收割人数、感染度变化、气味释放和返巢行为与 Drone 相同。新建人物的四项基础属性各自随机为 1–3；若游戏复用已有的非唯一人物，则继承该人物现有属性，因此没有统一的固定四维数值。", {
        image: "agent-insect-drone-arthopod.png", stats: "Might 1–3／复用时继承；Lore 1–3／复用时继承；Intrigue 1–3／复用时继承；Command 1–3／复用时继承；HP 5。",
        abilities: [D("Explore", "与 Drone 相同，随机探索并释放 Pheromone: Home，采用相同的守军回避规则。", { id: "arthropod-explore" }), D("Seeking Prey", "与 Drone 相同，沿 Pheromone: Feeding 寻找并收割感染人口。", { id: "arthropod-seeking-prey" }), D("Return to Hive", "与 Drone 相同，返回 Hive 卸下猎物并释放 Pheromone: Feeding；可使用 Homing Instinct 召回。", { id: "arthropod-return-to-hive" })]
      }),
      D("Haematophage", "由同名神力生成的自主骚扰单位，出生地点为其活动中心。只选择距离出生地少于 4 格、当前满血的非我方英雄；若自身首个随从槽为空，还要求目标自身攻击与首个随从攻击之和低于自身 HP。战斗采用立即撤退判定，攻击结束后自身 Menace +10、Profile +10。\n新建人物的四项基础属性各自随机为 1–3；若复用非唯一人物，则继承其现有属性。虽然神力描述建议为它使用 Assign Guard，但实际施放条件不接纳非可控 Haematophage，不能依赖这条描述配护卫。", {
        id: "haematophage-unit", image: "agent-insect-haematophage.png", stats: "Might 1–3／复用时继承；Lore 1–3／复用时继承；Intrigue 1–3／复用时继承；Command 1–3／复用时继承；HP 5。",
        abilities: [D("Carapace", "每 14 回合在第一个空随从槽生成一个 Carapace。", { id: "haematophage-carapace" }), D("Slow Healing", "受伤后返回出生地点，恢复任务每执行 3 回合回复 1 HP，直到满血。", { id: "haematophage-healing" })]
      }),
      D("Late-Stage Infection Victim", "可招募、可直接控制的 Agent。招募地点须为带有正值 Infected Populace 的人类聚居地，并需要可用的 Agent 名额与招募次数。初始经验距离下次升级只差 1。", {
        image: "agent-insect-late-stage.png", stats: "Might 3；Lore 2；Intrigue 3；Command 2；HP 5。",
        abilities: [D("Cordyceps Infection", "初始感染成熟度为 100%。", { id: "victim-infection" }), D("The Scent of Prey", "在带有 Infected Populace 的人类聚居地停留时，向周围释放 Pheromone: Feeding。", { id: "victim-scent-of-prey" })]
      })
    ]},
    { id: "challenges", title: "挑战", items: [
      D("Infect Populace", "Infected Populace +25 个百分点，最高 100%；完成时自身 Menace +8、Profile +2。", {
        location: "带有 Infected Populace 且强度低于 100% 的人类聚居地。",
        meta: "Lore + Intrigue", statLine: "Complexity: 25　Profile: 50　Menace: 50　XP: 42", image: "insect-infected-populace.png"
      }),
      D("Targeted Infection", "感染以当地为家乡的所有英雄与教徒，不要求他们此刻在场；Chosen One 除外。完成时自身 Menace +10、Profile +2。", {
        location: "Infected Populace 强度大于 99% 的人类聚居地，且至少有一名以此为家乡的存活未感染人物。",
        meta: "Lore + Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36", image: "agent-insect-late-stage.png"
      }),
      D("Infect Ruler", "给当地统治者添加 Cordyceps Infection；不检查其 Awareness。完成时自身 Menace +10、Profile +2。", {
        location: "渗透率达到 100%、且有未感染统治者的人类聚居地。",
        meta: "Lore + Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36", image: "insect-infected-populace.png"
      })
    ]},
    { id: "hero-tasks", title: "英雄任务", items: [
      D("Treat Populace", "使 Infected Populace 减少 50 个百分点，最低为 0%；不会删除修正。执行者 Awareness 必须大于 0。", {
        location: "Infected Populace 强度大于 10% 的地点。",
        meta: "Lore + Intrigue", statLine: "Complexity: 25　Profile: 50　Menace: 当前感染强度 × 0.5　XP: 42",
        positiveTags: "无", negativeTags: "Cordyceps、Disease", image: "plague-immunity.png"
      }),
      D("Remove Vector", "杀死感染的统治者，让继任机制接手。执行者 Awareness 必须大于 90%；世界恐慌越高，英雄越倾向采取这项极端措施。完成时自身 Menace +10、Profile +20。", {
        location: "统治者具有 Cordyceps Infection，且有未感染继承人的人类聚居地；不要求渗透。",
        meta: "Lore + Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 0　XP: 36",
        positiveTags: "Cruel、Danger、Discord", negativeTags: "Cordyceps、Disease、Cooperation", image: "agent-insect-late-stage.png"
      }),
      D("Destroy Larva", "减少 max(1，向下取整(当前 Larval Mass × 0.33)) 点幼虫。英雄 Awareness 与世界恐慌越高、个人 Shadow 越低，越倾向执行。", {
        location: "Larval Mass 至少为 3 的地点。",
        meta: "Might", statLine: "Complexity: 15　Profile: 50　Menace: 当前 Larval Mass　XP: 29",
        positiveTags: "Danger", negativeTags: "Disease、Cordyceps", image: "fungalHive_Grey.png"
      })
    ]},
    { id: "armies", title: "军队", items: [
      D("Vespidic Swarm", "自主虫群军队，可以通过 Vespid Swarm Target 改变活动目标。优先支援五格内最近的虫群战斗；若身处人类聚居地，则忽略和平状态并夷平当地；否则寻找指定目标两格内的人类聚居地，没有合适目标时在指定地点附近移动。\n使用本体军队战斗规则，没有独立的固定 Attack 或额外伤害倍率，也没有专属的自动补员能力。", {
        id: "vespidic-swarm-army", image: "unit-insect-vespid.png",
        stats: "HP／最大 HP：Vespidic Swarm 神力生成时 = 消耗的 Larval Mass 向下取整；Internal Maturation 生成时 = 向下取整(min(50，施放前人口 × 感染百分比))。前一种生成方式没有 35 HP 上限。"
      }),
      D("Refugees", "本体难民单位。受到 Insectine Devotion 影响后会前往 Hive；抵达时按剩余 HP 转化为 Larval Mass 并消失，不推进封印。转化前仍可能因正常难民规则吸收安置或流失人数。", {
        image: "refugees.png", baseGame: true, stats: "HP：生成时的难民人数；进入 Hive 时每剩余 1 HP 提供 4 点 Larval Mass。"
      })
    ]},
    { id: "religion", title: "宗教与教义", items: [
      D("Insectine Devotion", "加入现有各 Holy Order 的自定义教义，没有独立创建的专属 Holy Order。\n0：没有引导难民的效果。\n−1：位于该教神庙所在地的 Refugees 被驱使前往 Hive。\n−2：效果扩展至所有信奉该教的人类聚居地。\n难民抵达 Hive 时，按当时 HP × 4 增加 Larval Mass，随后消失；这不会推进封印。")
    ]},
    { id: "events", title: "事件", items: [
      D("The buzzing of wings", "模组人物事件，适用于 Drone、Arthropodic Drone 与 Late-Stage Infection Victim。全局标记尚为 0 时可以触发，唯一选项将其设为 −1，阻止再次触发；没有额外资源效果。该选项只有一个结果，因此文件中的 0.7 权重不代表仅有 70% 成功率。", { meta: "模组事件", image: "event-buzzing.jpg" }),
      D("Fear and Paranoia", "模组在世界恐慌首次超过 20% 时，于 the Elder Tomb 发出一次提示：有 Awareness 的人物更不愿前往外部势力的地点。提示本身没有选项或额外数值效果；相关行动意愿惩罚随 Awareness 与世界恐慌增加。", { meta: "模组全局提示" }),
      D("Combat with Drone", "模组战斗事件：我方 Agent 主动攻击 Drone 或 Arthropodic Drone，随后战败死亡时使用。唯一选项 They are Irrelevant 没有额外效果；事件使用本体插图，但定义来自本模组。", { meta: "模组事件", image: "event-drone-combat.jpg" })
    ]}
  ],
  relations: {
    "Start Hive": { effects: [{ name: "Hive", href: "#entry-hive" }, { name: "Hive Spire", href: "#entry-hive-spire" }, { name: "Larval Mass", href: "#entry-larval-mass" }, { name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }] },
    "Infested Drone": { effects: [{ name: "Drone", href: "#entry-drone" }] },
    "Synchronised Infestation": { effects: [{ name: "Drone", href: "#entry-drone" }] },
    "Arthropod Drone": { effects: [{ name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }] },
    "Assign Guard": { effects: [{ name: "Vespidic Guard", href: "#entry-vespidic-guard" }] },
    "Haematophage": { effects: [{ name: "Haematophage", href: "#entry-haematophage-unit", meta: "自主单位", text: "自主骚扰英雄的单位，HP 5；每 14 回合生成一个 Carapace，受伤后返乡缓慢恢复。", image: "agent-insect-haematophage.png" }] },
    "haematophage-unit": { sources: [{ name: "Haematophage", href: "#entry-haematophage" }], effects: [{ name: "Carapace", href: "#entry-carapace" }] },
    "Vespidic Swarm": { effects: [{ name: "Vespidic Swarm", href: "#entry-vespidic-swarm-army", meta: "军队", text: "HP 等于消耗幼虫量向下取整，自主夷平指定区域的人类聚居地。", image: "unit-insect-vespid.png" }] },
    "Internal Maturation": { effects: [{ name: "Vespidic Swarm", href: "#entry-vespidic-swarm-army", meta: "军队", text: "HP = 向下取整(min(50，施放前人口 × 感染百分比))。", image: "unit-insect-vespid.png" }] },
    "vespidic-swarm-army": { sources: [{ name: "Vespidic Swarm", href: "#entry-vespidic-swarm" }, { name: "Internal Maturation", href: "#entry-internal-maturation" }] },
    "Airborne Spores": { effects: [{ name: "Hive", href: "#entry-hive" }, { name: "Infected Populace", href: "#entry-infected-populace" }, { name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }] },
    "Disrupted Neurology": { effects: [{ name: "Disrupted Neurology", href: "#entry-disrupted-neurology-modifier", meta: "地点修正", text: "每份使 Security −1，持续 25 回合，可以叠加。" }] },
    "disrupted-neurology-modifier": { sources: [{ name: "Disrupted Neurology", href: "#entry-disrupted-neurology" }] },
    "Paranoid Hysteria": { effects: [{ name: "Madness Effect: Hypochondria", href: "#entry-madness-effect-hypochondria" }, { name: "Madness Effect: Paranoid Delusions", href: "#entry-madness-effect-paranoid-delusions" }] },
    "Madness Effect: Hypochondria": { sources: [{ name: "Paranoid Hysteria", href: "#entry-paranoid-hysteria" }] },
    "Madness Effect: Paranoid Delusions": { sources: [{ name: "Paranoid Hysteria", href: "#entry-paranoid-hysteria" }] },
    "Infected Populace": { sources: [{ name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }, { name: "Airborne Spores", href: "#entry-airborne-spores" }, { name: "Infect Populace", href: "#entry-infect-populace" }], effects: [{ name: "Infect Populace", href: "#entry-infect-populace" }, { name: "Treat Populace", href: "#entry-treat-populace" }, { name: "Targeted Infection", href: "#entry-targeted-infection" }, { name: "Late-Stage Infection Victim", href: "#entry-late-stage-infection-victim" }] },
    "Larval Mass": { sources: [{ name: "Drone", href: "#entry-drone" }, { name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }, { name: "Insectine Devotion", href: "#entry-insectine-devotion" }], effects: [{ name: "Arthropod Drone", href: "#entry-arthropod-drone" }, { name: "Assign Guard", href: "#entry-assign-guard" }, { name: "Vespidic Swarm", href: "#entry-vespidic-swarm" }, { name: "Destroy Larva", href: "#entry-destroy-larva" }] },
    "Pheromone: Feeding": { sources: [{ name: "The Scent of Prey", href: "#entry-the-scent-of-prey" }, { name: "Drone", href: "#entry-drone" }, { name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }] },
    "Pheromone: Home": { sources: [{ name: "Drone", href: "#entry-drone" }, { name: "Arthropodic Drone", href: "#entry-arthropodic-drone" }] },
    "Hive": { sources: [{ name: "Start Hive", href: "#entry-start-hive" }], effects: [{ name: "Larval Mass", href: "#entry-larval-mass" }, { name: "Hive Spire", href: "#entry-hive-spire" }] },
    "Hive Spire": { sources: [{ name: "Start Hive", href: "#entry-start-hive" }, { name: "Airborne Spores", href: "#entry-airborne-spores" }] },
    "Vespidic Guard": { sources: [{ name: "Assign Guard", href: "#entry-assign-guard" }] },
    "Carapace": { sources: [{ name: "Haematophage", href: "#entry-haematophage-unit", meta: "自主单位", text: "每 14 回合在第一个空随从槽生成一个 Carapace。" }] },
    "Drone": { sources: [{ name: "Infested Drone", href: "#entry-infested-drone" }, { name: "Synchronised Infestation", href: "#entry-synchronised-infestation" }], effects: [{ name: "Larval Mass", href: "#entry-larval-mass" }, { name: "Pheromone: Home", href: "#entry-pheromone-home" }, { name: "Pheromone: Feeding", href: "#entry-pheromone-feeding" }] },
    "Arthropodic Drone": { sources: [{ name: "Start Hive", href: "#entry-start-hive" }, { name: "Arthropod Drone", href: "#entry-arthropod-drone" }] },
    "Infect Populace": { effects: [{ name: "Infected Populace", href: "#entry-infected-populace" }] },
    "Treat Populace": { effects: [{ name: "Infected Populace", href: "#entry-infected-populace" }] },
    "Infect Ruler": { effects: [{ name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }] },
    "Targeted Infection": { effects: [{ name: "Cordyceps Infection", href: "#entry-cordyceps-infection" }] },
    "Destroy Larva": { effects: [{ name: "Larval Mass", href: "#entry-larval-mass" }] },
    "Insectine Devotion": { effects: [{ name: "Refugees", href: "#entry-refugees" }, { name: "Larval Mass", href: "#entry-larval-mass" }] }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function CordycepsArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
