"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "cordyceps", name: "Cordyceps Hive Mind", number: "08", theme: "cordyceps-theme", assetDir: "cordyceps", background: "god_background.jpg", portrait: "god_portrait.png", 
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
 supplicant: { image: "unit_insect_supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("The Scent of Prey", "如果该 Agent 位于带有 Infected Populace 的地点，它会向周围区域释放 Feeding Pheromone，吸引 Drones 前来收割感染人口。", { image: "insect-pheromone-feed.png" }), D("Cordyceps Infection (100%)", "这是 Cordyceps 的 Agent 初始化规则：所有现存可控制 Agent 在回合结束时都会被源码维持为 100% 感染，新创建的 Agent 也会在生成时直接获得 100%；初始 Supplicant 还会由 God_Insect.onStart 单独赋予该特质。感染可在人类（不包括精灵）之间传播，影响 heroes、rulers 和人口；达到 100% 的英雄可以被转化为 Drone，并会压制人物判断。", { image: "insect-infected-populace.png" })] },
 sections: [
  { id: "traits", title: "人物特质", items: [D("Cordyceps Infection", "感染可在人类（不包括精灵）之间传播，影响 heroes、rulers 和人口；人物达到 100% 感染后可以被转化为 Drone。感染会压制人物判断，100% Awareness 的人物会防止感染。对 Cordyceps 玩家来说，所有可控制 Agent 的成熟度由 ModCore 在每回合结束维持为 100%，新创建的 Agent 也会在生成时获得 100%；所以这项特质对玩家 Agent 不是从 0% 开始的普通感染，而是自带成熟感染状态。", { image: "insect-infected-populace.png" })] },
  { id: "location-modifiers", title: "地点修正", items: [
    D("Infected Populace", "感染人口为 0–100%。达到 100% 后可对当地 home heroes 与 acolytes 执行 Targeted Infection。", { image: "insect-infected-populace.png", initialValue: "具体初始值未找到；范围为 0–100%。", modifierChange: { natural: "未找到自然增加/减少规则。", external: "Infect Populace 增加；Treat Populace 减少；Drones 可将感染人口带走并转化成 Larval Mass。" } }),
    D("Larval Mass", "Hive 中储存的幼虫质量。", { image: "insect-larval-mass.png", initialValue: "具体初始值未找到。", modifierChange: { natural: "未找到自然增加规则。", external: "Arthropod Drone 每次消耗 10；Assign Guard 消耗 5；Vespidic Swarm 消耗全部；Destroy Larva 约破坏三分之一。" } }),
    D("Pheromone: Feeding", "Drones 寻找猎物时沿此修正前进。", { image: "insect-pheromone-feed.png", initialValue: "强度上限 300；具体初始值未找到。", modifierChange: { natural: "每回合衰减 7.5%。", external: "由 The Scent of Prey 和 Hive 机制产生。" } }),
    D("Pheromone: Home", "Drones 返回 Hive 时沿此修正回家。", { image: "insect-pheromone-home.png", initialValue: "强度上限 300；具体初始值未找到。", modifierChange: { natural: "每回合衰减 7.5%。", external: "由 Drones 返回 Hive 的路径机制产生。" } }),
    D("Disrupted Neurology", "Security −1。", { id: "disrupted-neurology-modifier", image: "insect-disrupted-neurology.png", initialValue: "持续 25 回合。", modifierChange: { natural: "每回合倒计时 1，归零后移除。", external: "由 Disrupted Neurology 神力添加；可以叠加。" } })
  ]},
  { id: "locations", title: "地点与设施", items: [
    D("Hive", "Start Hive 会把成熟感染的 hero 或 agent 变成 Hive。地点被设置为已渗透并保留当前 Shadow，同时加入 Larval Mass 和 Hive Spire；Airborne Spores 开启时会感染 Hive 内人物并向两格内人类聚居地扩散。", { image: "fungalHive.png" }),
    D("Hive Spire", "Hive 的设施，Airborne Spores 开启时每回合增加 1 Menace；地点图标会在普通真菌与红色孢子状态之间切换。", { image: "fungalHive.png" })
  ]},
  { id: "minions", title: "随从", items: [
    D("Vespidic Guard", "Assign Guard 从 Larval Mass 消耗 5% 生成；可被 Drone 或 Agent 持有，并且允许超过正常 Command 上限。", { image: "unit-insect-vespid.png", stats: "HP 3；Attack 4；Defence 3；Command 1" }),
    D("Carapace", "Haematophage 经过约 14 回合会逐步生成，用来提高防守能力。", { image: "insect-carapace.png", stats: "HP 1；Attack 0；Defence 2；Command 0" })
  ]},
  { id: "units", title: "特殊人物与自主单位", items: [
    D("Arthropodic Drone", "自主单位；沿 Feeding Pheromone 搜索感染人口，收割后沿 Home Pheromone 返回 Hive，消耗人口并推进 Larval Mass；每次收割增加 7 Menace、4 Profile。", { image: "agent-insect-drone-arthopod.png" }),
    D("Haematophage", "自主骚扰单位；攻击靠近其领地的英雄后会撤退，使英雄需要治疗并增加世界恐慌；会慢慢生成 Carapace，若出生在 Hive 可配 Guard 进行更频繁攻击。", { image: "agent-insect-haematophage.png" }),
    D("Late-Stage Infection Victim", "可由感染相关机制生成的自主单位。", { image: "agent-insect-late-stage.png", stats: "Might 3；Lore 2；Intrigue 3；Command 2", abilities: [D("Cordyceps Infection (100%)", "固定拥有 100% 感染。"), D("The Scent of Prey", "固定拥有 The Scent of Prey。" )] })
  ]},
  { id: "armies", title: "军队", items: [D("Vespidic Swarm", "由 Vespidic Swarm 或 Internal Maturation 生成；能够半自动移动、攻城和夷平人类地点；可用 Vespid Swarm Target 统一指定目标。", { id: "vespidic-swarm-army", image: "unit-insect-vespid.png", stats: "HP：按生成时消耗的 Larval Mass 数量计算。" })] },
  { id: "religion", title: "宗教与教义", items: [
    D("Insectine Devotion", "该自定义教义会被加入每个 Holy Order。拥有本教神庙的地点中，Refugees 会被迫前往最近的 Hive 并被吞食；影响降到 −2 时，同一信仰的所有聚居地都会执行这一行为。" ),
  ]},
  { id: "hero-tasks", title: "英雄任务", items: [
    D("Treat Populace", "把 Infected Populace 降低 50%，完成时移除该地点修正。", { location: "有人类人口且带有 <CrossReference name=\"Infected Populace\" /> 的聚居地。", meta: "Lore / Intrigue", statLine: "Complexity: 25　Profile: 50　Menace: 当前感染度的一半　XP: 42", positiveTags: "无", negativeTags: "Disease、Insect", image: "insect-infected-populace.png" }),
    D("Remove Vector", "在世界恐慌升高时刺杀当地的人类 ruler，阻止其继续传播感染；如果存在 heir，用未感染 heir 接替。", { location: "有未感染人类 ruler 的人类聚居地。", meta: "Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 0　XP: 36", positiveTags: "Cruel、Danger、Discord", negativeTags: "Insect、Disease、Cooperation", image: "agent-insect-late-stage.png" }),
    D("Destroy Larva", "从 Hive 的 Larval Mass 移除约三分之一（至少 1），降低虫群资源。Awareness 较高、Shadow 较低的英雄会在世界恐慌高时主动执行。", { location: "有 Hive 与 <CrossReference name=\"Larval Mass\" /> 的地点。", meta: "Might", statLine: "Complexity: 15　Profile: 50　Menace: 当前 Larval Mass　XP: 29", positiveTags: "Danger", negativeTags: "Disease、Insect", image: "fungalHive_Grey.png" }),
  ]},
  { id: "challenges", title: "挑战", items: [
    D("Infect Populace", "在感染人口地点把 Infected Populace 增加 25%，最高 100%。完成后额外增加 8 Menace、2 Profile。", { location: "有人类人口的人类聚居地。", meta: "Lore / Intrigue", statLine: "Complexity: 25　Profile: 50　Menace: 50　XP: 42",  image: "insect-infected-populace.png" }),
    D("Targeted Infection", "让该地点作为 home 的所有 heroes 与 acolytes 获得 Cordyceps Infection，Chosen One 除外。", { location: "<CrossReference name=\"Infected Populace\" /> 达到 100% 的人类聚居地。", meta: "Lore / Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36",  image: "agent-insect-late-stage.png" }),
    D("Infect Ruler", "给已完全渗透地点的 ruler 添加 Cordyceps Infection。", { location: "已完全渗透、且有未感染 ruler 的人类聚居地。", meta: "Lore / Intrigue", statLine: "Complexity: 20　Profile: 50　Menace: 50　XP: 36",  image: "insect-infected-populace.png" }),

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
const preparedConfig = prepareGodConfig(config);
export default function CordycepsArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
