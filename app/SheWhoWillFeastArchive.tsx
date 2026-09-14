"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  id: "she-who-will-feast", name: "She Who Will Feast", number: "01", theme: "feast-theme",
  assetDir: "she-who-will-feast", background: "background.png", portrait: "portrait.png",
  flavour: "", caption: "渗透、Shadow 扩散与苏醒军队",
  maxTurns: "500 回合", awaken: "第 375 回合", panic: "75%", finalAgents: "6",
  progressLabel: "回合", unlockMethod: "常规回合解锁", specialVictory: "无",
  powerRecovery: "神力上限＝已破封印数 + 1。每回合恢复 0.035 × 神力上限 × 难度系数²；表中为难度系数 1。设难度设置为 d：d > 0 时系数为 10/(10+d)，否则为 1−0.1d。",
  core: [
    "让 Supplicant 用 <CrossReference name=\"The Dying Light\" /> 积累 <CrossReference name=\"Shadow\" />；完全渗透聚居地后完成 <CrossReference name=\"Enshadow\" />，并通过 <CrossReference name=\"Conduit\" /> 恢复神力。",
    "用 <CrossReference name=\"Eyes in the Shadows\" /> 渗透尚未开始渗透的聚居地中的一处设施。",
    "在完全渗透的贸易城市施放 <CrossReference name=\"Serpent's Coils\" />，沿贸易路线向人类聚居地传播 <CrossReference name=\"Shadow\" />；当地 Ward 会削弱传播。",
    "用 <CrossReference name=\"Fleeting Servant\" /> 诱使英雄执行 <CrossReference name=\"Purge Fleeting Servant\" />；在高 Shadow 地点用 <CrossReference name=\"Dangers in the Dark\" /> 增加英雄任务和中立挑战的风险。",
    "用 <CrossReference name=\"Cloud Senses\" /> 降低任务进度；用 <CrossReference name=\"Split Shadow\" /> 制造不占用招募名额的 <CrossReference name=\"Shadow Agent\" />。",
    "第 375 回合苏醒，破坏 Elder Tomb 周边地点，并生成 <CrossReference name=\"She Who Will Feast\" /> 军队；必须保护她，死亡会直接导致失败。"
  ],
  overviewExtra: {
    title: "攻略建议",
    // Strategy reference: Fridge Lord, Steam guide 2799248387 (2022-05-03); mechanics checked against current DLC code.
    text: "开局优先经营连接多处地区的城市，不要让 Agent 四散奔波。可以用 Courtier 配合 Supplicant：前者侧重渗透与筹措资源，后者负责完成 Enshadow，先建立一处稳定的扩张中心，再向外推进。\n\n不要让高 Intrigue 的 Agent 一直冒险工作；适时降低 Profile 与 Menace，保住已有等级和能力的人手。局势稳定后，再安排其他 Agent 制造政治矛盾，分散人类的注意力。\n\nSplit Shadow 解锁后，根据当前缺口选择高属性英雄作为目标：缺渗透人手就看 Intrigue，缺施法与黑暗扩张人手就看 Lore。把影子安排在本体附近或安全的黑暗区域，作为额外劳动力。"
  },
  seals: [
    { seal: 0, progress: 0, agents: 2, reward: ["Cloud Senses"] },
    { seal: 1, progress: 12, agents: 2, reward: ["Eyes in the Shadows"] },
    { seal: 2, progress: 24, agents: 3, reward: ["Fleeting Servant"] },
    { seal: 3, progress: 44, agents: 3, reward: ["Dangers in the Dark", "Serpent's Coils"] },
    { seal: 4, progress: 72, agents: 4, reward: ["Split Shadow"] },
    { seal: 5, progress: 108, agents: 4, reward: [] },
    { seal: 6, progress: 152, agents: 4, reward: [] },
    { seal: 7, progress: 204, agents: 5, reward: [] },
    { seal: 8, progress: 264, agents: 5, reward: [] },
    { seal: 9, progress: 375, agents: 6, reward: ["苏醒"] }
  ],
  powers: [
    O("Cloud Senses", 0, 1, "让目标当前执行的任务损失最多 10 点进度，最低降至 0；不改变任务本身的 Complexity。", "目标必须正在执行挑战或英雄任务，不能是 Chosen One；代码不要求目标一定是英雄。", "power-shadow.png"),
    O("Eyes in the Shadows", 1, 2, "直接渗透聚居地中一个尚未渗透且允许渗透的设施；存在多个合法设施时，选择列表中的最后一个。", "目标必须是渗透进度恰好为 0、尚未被视为已渗透的聚居地，并至少有一处合法设施。", "power-shadow.png"),
    O("Fleeting Servant", 2, 3, "添加一份 <CrossReference name=\"Fleeting Servant\" href=\"#entry-fleeting-servant-modifier\" meta=\"地点修正\" />，引诱英雄前来执行 Purge Fleeting Servant；同一地点可存在多份。", "目标必须是地点，没有聚居地或防重复限制。", "power-fleeting-servant.png"),
    O("Dangers in the Dark", 3, 2, "当地每项英雄任务与中立挑战分别增加 7 Danger，邪恶挑战不受影响；重复施放可叠加。\n执行者遭遇危险并结算时，追加的 Danger 有概率逐点减少。", "目标地点 Shadow 必须超过 50%，且至少存在一个挑战。", "power-dangers-in-dark.png"),
    O("Serpent's Coils", 3, 4, "将目标城市关联的全部贸易路线影响时间设置为 25 回合，包括刷新已受影响路线。每条路线每回合使沿途人类聚居地增加 max(0，1 − Ward/100) 个百分点的 Shadow，最高 100%。多条路线可叠加；无 Ward 时每条每回合 +1 个百分点，Ward ≥100 时不增加。不会影响沿途所有非聚居地格子。", "目标必须是 Infiltration 恰好为 100% 的人类城市，并且关联路线中至少有一条尚未受影响。实际判定读取经过该城市的路线列表，不额外检查它是否是路线端点。", "power-serpents-coils.png"),
    O("Split Shadow", 4, 5, "生成可控制的 Shadow Agent，复制目标的 Might、Lore、Intrigue、Command 原始属性，并把其现有特质提供的四维修正分别加上。没有把英雄等级、物品、随从或特质本身复制给影子。", "目标必须是未带 Chosen One 特质的英雄；全图不能已有存活的 Shadow Agent。不检查剩余 Agent 名额。", "shadow-agent.png")
  ],
  supplicant: {
    image: "supplicant.png", stats: "Might 2　Lore 2　Intrigue 4　Command 3　HP 5",
    abilities: [
      D("Conduit", "每次完成 Enshadow 恢复 2 Power，不超过当前上限。"),
      D("The Dying Light", "位于人类聚居地时，每回合增加当地 1 个百分点 Shadow，最高 100%。"),
      D("Martyr for the Dark", "在人类聚居地死亡时，把当地全部设施标记为已渗透。")
    ]
  },
  sections: [
    { id: "location-modifiers", title: "地点修正", items: [
      D("Shadow", "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n\nDangers in the Dark 要求地点 Shadow >50%。Shadow Agent 则在地图格子的黑暗程度达到 50%，或位于本体同地、相邻地点时免于远离本体的损血。", {
        id: "shadow-modifier", image: "power-shadow.png", baseGame: true, initialValue: "",
        modifierChange: {
          natural: "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响，最终限制在 0–100%。",
          external: "Enshadow 完成时把当地设为 100%。\nThe Dying Light 每回合增加 1 个百分点，最高 100%。\nSerpent's Coils 持续期间，每条关联贸易路线每回合使沿途人类聚居地增加 max(0，1 − Ward/100) 个百分点，最高 100%。"
        }
      }),
      D("Fleeting Servant", "本身不改变当地经济、安全或人口，也不会因聚居地沦为废墟而消失。它提供 Profile 30、Menace 50 的 Purge Fleeting Servant，诱使英雄前来清除。", {
        id: "fleeting-servant-modifier", image: "power-fleeting-servant.png", seal: 2, initialValue: "40。",
        modifierChange: { natural: "每回合强度 −1，归零后移除。", external: "<CrossReference name=\"Fleeting Servant\" href=\"#entry-fleeting-servant\" meta=\"神力\" /> 每次创建一份独立修正。\nPurge Fleeting Servant 完成时移除当地列表中的第一份同类修正。" }
      })
    ]},
    { id: "units", title: "特殊人物与自主单位", items: [
      D("Shadow Agent", "由 Split Shadow 创建，名字和家族取自目标英雄，个人 Shadow 为 100%。不复制目标的等级、特质、装备或随从；复制的特质属性加成已经计入四维基础值，不会随本体后续变化持续同步。\n与本体同地或相邻时安全；否则仅当地图格子的纯净度 >50% 时，每回合损失 1 HP，降至 0 时死亡。地图格子的纯净度 ≤50% 时不损血。\n本体死亡不会直接移除影子。影子出现在可控单位列表，但不占用 Enthrallment 招募名额。", {
        seal: 4, image: "shadow-agent.png", stats: "Might 继承　Lore 继承　Intrigue 继承　Command 继承　HP 5"
      })
    ]},
    { id: "hero-tasks", title: "英雄任务", items: [
      D("Purge Fleeting Servant", "完成时移除当地列表中的第一份 Fleeting Servant 修正，不产生额外地点收益；执行者完成后 Profile +5。", {
        image: "power-fleeting-servant.png", location: "存在 <CrossReference name=\"Fleeting Servant\" href=\"#entry-fleeting-servant-modifier\" meta=\"地点修正\" /> 的地点。",
        meta: "Intrigue", statLine: "Complexity: 5　Profile: 30　Menace: 50　XP: 12", positiveTags: "无", negativeTags: "Shadow"
      })
    ]},
    { id: "armies", title: "军队", items: [
      D("She Who Will Feast", "第 9 封印破除后在 Elder Tomb 生成的可控制游荡军队，不会自行解散；死亡立即导致玩家失败。\n苏醒先破坏 Elder Tomb 周围地图格子：以平面坐标欧氏距离判定，距离 <4 必中，4≤距离<5 的格子各有 50% 概率受影响。受影响聚居地沦为废墟，已有单位损失其最大 HP 的一半（向下取整）；代码在扣血后 HP <0 时立即杀死单位。遍历所有地图层，地下对应区域也可能受波及。\n仅在自动模式下自行选择行动：HP 低于最大值 30% 时返巢休整，否则优先焚毁当前有人类聚居地且有归属的地点，再寻敌军或前往交战领土。手动游戏由玩家下令。", {
        seal: 9, image: "army.png",
        stats: "HP：初始 200。每回合累计 1 × 难度系数；累计值每严格超过 1，就扣除 1，并使最大 HP 与当前 HP 各 +1。随后若未满血，再恢复 1 HP。系数为 1 时首回合不触发生长，此后每回合生长 1；更高难度增长更慢。"
      })
    ]},
    { id: "religion", title: "宗教与教义", items: [
      D("Sect of the Serpent", "已有 Holy Order 获得的专属教义，不会另建独立教团。等级范围为 0 至 −1；0 时无效果。\n−1 时，每个该信仰的 Acolyte、每座该信仰的 Temple，每回合各检查同地所有可控人物单位：若其 Menace 高于个人最低值，就使该人物 Menace −1，并让自身 Menace +1。多个 Acolyte 与 Temple 分别处理，可叠加转移；人物达到最低值后不再转移。")
    ]},
  ],
  relations: {
    "Fleeting Servant": { effects: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正", text: "引诱英雄执行 Purge Fleeting Servant；每回合强度 −1。", image: "power-fleeting-servant.png" }] },
    "fleeting-servant-modifier": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant", meta: "神力" }], effects: [{ name: "Purge Fleeting Servant", href: "#entry-purge-fleeting-servant" }] },
    "Serpent's Coils": { effects: [{ name: "Shadow", href: "#entry-shadow-modifier" }] },
    "Split Shadow": { effects: [{ name: "Shadow Agent", href: "#entry-shadow-agent", meta: "可控 Agent" }] },
    "Shadow Agent": { sources: [{ name: "Split Shadow", href: "#entry-split-shadow" }] },
    "She Who Will Feast": { sources: [{ name: "第 9 封印苏醒", href: "#seals", meta: "第 375 回合" }] },
    "Purge Fleeting Servant": { sources: [{ name: "Fleeting Servant", href: "#entry-fleeting-servant-modifier", meta: "地点修正", text: "独立计时的英雄诱饵，提供 Purge Fleeting Servant。" }] }
  }
};

const preparedConfig = prepareGodConfig(config);

export default function SheWhoWillFeastArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
