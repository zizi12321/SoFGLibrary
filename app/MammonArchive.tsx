"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "mammon",
  "name": "Mammon, Wealth of Man, Spirit of the Mountain",
  "number": "05",
  "theme": "mammon-theme",
  "assetDir": "mammon",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "贸易网络、Greed/Decadence 与吞噬",
  "maxTurns": "500 回合",
  "awaken": "吞噬进度达到最终阈值（基准 800）",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "吞噬进度",
  "unlockMethod": "按累计吞噬进度解锁，不按回合解锁。封印 5–7 的阈值乘以难度增长系数并向下取整；表中为系数 1。",
  "powerCapacity": "神力上限 M＝max(1，floor(0.125 × √(1 + Σ人口×Prosperity)))。Σ 对本地或邻地有 Mammon's Influence 的人类聚居地去重统计；Prosperity 以 100%＝1 计，可超过 1。",
  "powerRecovery": "每回合恢复＝0.035 × M。开局持有 1 Power；破除封印不直接增加上限。",
  "core": [
    "开局建立 <CrossReference name=\"The Mountain\" /> 与 <CrossReference name=\"The Mountain's Wealth\" />，连接山脉的贸易路线获得 <CrossReference name=\"Mammon's Influence\" />。",
    "用 <CrossReference name=\"Call of the Mountain\" /> 召集 <CrossReference name=\"Lured Crowd\" href=\"#entry-lured-crowd-army\" />；人群到山脉后被吞噬，推进封印、恢复财富并增加贸易扩张额度。",
    "用 <CrossReference name=\"Grow Influence\" /> 扩张覆盖范围；<CrossReference name=\"Create Shadow Market\" />、<CrossReference name=\"Expand Shadow Market\" /> 与 <CrossReference name=\"Smuggling\" /> 改变城市 Prosperity，使 <CrossReference name=\"Greed\" /> 或 <CrossReference name=\"Decadence\" /> 形成。",
    "Greed 会促进 <CrossReference name=\"Agitate Against Sovereign\" /> 与 <CrossReference name=\"War: Invasion\" />；符合条件的进攻战争首都可用 <CrossReference name=\"Devour Sin\" />，推进封印并留下 <CrossReference name=\"Sins Devoured\" />。",
    "用 <CrossReference name=\"Embrace of Metal\" /> 形成 <CrossReference name=\"Armoured Populace\" href=\"#entry-armoured-populace-army\" />，或用 <CrossReference name=\"All is Mine\" /> 持续积累吞噬进度。最终封印开启时立即胜利；<CrossReference name=\"Raid Mountain\" /> 将山中财富耗尽则失败。"
  ],
  "overviewExtra": {
    "title": "财富、吞噬与影响范围",
    "text": "吞噬进度是累计值，不会在破封时扣除。人群和 Devour Sin 会调用同一吞噬机制：基准每吞噬 1 人或灵魂增加 1 进度、0.1 格扩张额度；每次恢复的财富向下取整，因此 Armoured Populace 每回合吞噬 2 灵魂不会恢复财富。\n神力上限取决于影响范围内人口与 Prosperity，不取决于山中财富百分比；吞噬人口可能反过来降低神力上限。山中财富的 Menace／Profile 决定 Raid Mountain 对英雄的吸引与可见性。",
    "playStyle": "围绕贸易覆盖、人口和 Prosperity 经营经济，再将人群与罪恶转成吞噬进度。扩张会增加神力潜力，吞噬也会消耗人口，必须同时守住山中财富。"
  },
  "specialVictory": "最终封印开启时立即胜利，默认阈值为累计吞噬进度 800；最终阈值随游戏难度调整。",
  "specialFailure": "The Mountain's Wealth 强度降至 0 时失败。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Grow Influence",
        "Devour Sin",
        "Call of the Mountain",
        "Create Shadow Market",
        "Smuggling"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 1,
      "progress": 15,
      "agents": 2,
      "reward": [
        "Distraction"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 2,
      "progress": 30,
      "agents": 3,
      "reward": [],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 3,
      "progress": 70,
      "agents": 3,
      "reward": [
        "Call of Wealth",
        "Gift from The Mountain"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 4,
      "progress": 200,
      "agents": 4,
      "reward": [
        "Plutomania"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 5,
      "progress": 300,
      "agents": 5,
      "reward": [
        "Danger in The Mountain",
        "Embrace of Metal"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 6,
      "progress": 500,
      "agents": 6,
      "reward": [
        "All is Mine"
      ],
      "powerRecovery": "M/0.035×M"
    },
    {
      "seal": 7,
      "progress": 800,
      "agents": 6,
      "reward": [
        "苏醒",
        "立刻胜利"
      ],
      "powerRecovery": "M/0.035×M"
    }
  ],
  "powers": [
    {
      "name": "Grow Influence",
      "seal": 0,
      "cost": 0,
      "effect": "在目标建立 Mammon's Influence，消耗 1 格扩张额度，并使 The Mountain's Wealth 的 Profile 增加 7。",
      "limit": "目标有贸易路线经过、尚无 Mammon's Influence，且与已有 Influence 相邻；剩余扩张额度至少 1。",
      "icon": "mammon-influence-icon.png"
    },
    {
      "name": "Devour Sin",
      "seal": 0,
      "cost": 0,
      "effect": "吞噬 100 灵魂：基准进度 +100、山中财富 +33 个百分点（上限 100%）、扩张额度 +10 格（乘以难度恢复系数）。不因此增加山的 Menace 或 Profile。留下 Sins Devoured。",
      "limit": "人类聚居地，所在国家的首都，Greed 至少 50%，没有 Sins Devoured；国家不是 Dark Empire，且正在作为进攻方与尚未灭亡的势力交战。",
      "icon": "devour-sin.png"
    },
    {
      "name": "Call of the Mountain",
      "seal": 0,
      "cost": 1,
      "effect": "从目标扣除 floor(人口 × 25%) 人口，生成同等 HP 的 Lured Crowd，前往 The Mountain。途中可吸收额外人口，也可被英雄通过 Save Crowd 救回。",
      "limit": "人口至少 10 的人类聚居地，本地或邻地存在 Mammon's Influence。",
      "icon": "lured-crowd.png"
    },
    {
      "name": "Distraction",
      "seal": 1,
      "cost": 1,
      "effect": "目标花费 40 Gold，使同一地点所有不可控制的 Agent 改为 Disrupted，持续 3 回合。中断它们当前任务，并解除其主动发起的缠斗。",
      "limit": "目标 Agent 必须有至少 40 Gold，且所在地点或邻地有 Mammon's Influence。",
      "icon": "distraction.png"
    },
    {
      "name": "Create Shadow Market",
      "seal": 0,
      "cost": 1,
      "effect": "创建强度 10 的 Shadow Market：给当地 Prosperity 提供 −10 个百分点的修正，并产生随强度、渗透度变化的 Menace 和 Profile；可通过 Expand Shadow Market 发展，通过 Smuggling 连接到另一城市。不会单独建立 Mammon's Influence。",
      "limit": "必须是渗透度大于 0、尚无 Shadow Market 的城市。",
      "icon": "shadow-market.png"
    },
    {
      "name": "Smuggling",
      "seal": 0,
      "cost": 1,
      "effect": "自动选择 5 格内最近的未连接 Shadow Market，建立 Smuggling，并把市场标记为已连接；立即在本地建立 Mammon's Influence。当地 Prosperity 获得与该市场强度等额的百分点加成。无需两地已有贸易路线。",
      "limit": "目标城市必须 100% 渗透，5 格内要有未连接 Shadow Market，且自身没有 Shadow Market 或 Smuggling。",
      "icon": "smuggling.png"
    },
    {
      "name": "Call of Wealth",
      "seal": 3,
      "cost": 1,
      "effect": "从其他 Prosperity <100% 的人类聚居地中，选择（1−Prosperity）×人口÷到目标路径距离最高的一处；没有固定距离上限。扣除其 floor(人口 × 33%)，但不超过目标剩余人口容量，生成前往目标的 Lured Crowd。\n人群抵达后增加目标人口，不直接喂养 Mammon。没有合适来源或可迁移人数不足 1 时，不生成人群。",
      "limit": "目标为人口低于最大人口 75% 的人类聚居地，并带有 Decadence。",
      "icon": "refugees.png"
    },
    {
      "name": "Plutomania",
      "seal": 4,
      "cost": 3,
      "effect": "连续提高统治者的 Gold 偏好 5 次，使其达到最高的极度喜爱等级。通过统治者对 Gold 标签的决策偏好影响其行动。",
      "limit": "目标必须是带有 100% Decadence 的人类聚居地，且存在统治者。",
      "icon": "decadence-icon.png"
    },
    {
      "name": "Gift from The Mountain",
      "seal": 3,
      "cost": 0,
      "effect": "给一个己方 Agent 150 Gold，但从 The Mountain's Wealth 中扣除 10%财富；财富不会低于 1%。",
      "limit": "目标必须是己方 Agent，且山中财富高于 10%。",
      "icon": "gift-from-mountain.png"
    },
    {
      "name": "Danger in The Mountain",
      "seal": 5,
      "cost": 3,
      "effect": "把 Raid Mountain 当前的附加 Danger 增加 5。危险结算会在执行者与随从之间分配伤害，并可能消耗附加 Danger。",
      "limit": "The Mountain，Raid Mountain 当前附加 Danger 不超过 10；施放后不能超过 15。",
      "icon": "danger-in-mountain.png"
    },
    {
      "name": "Embrace of Metal",
      "seal": 5,
      "cost": 5,
      "effect": "创建 Armoured Populace 地点修正，成熟后形成同名自主军队；它在战斗或夷平任务期间每回合为 Mammon 提供 2 灵魂。英雄可在成熟前执行 Investigate Population 移除修正。",
      "limit": "目标必须是尚无 Armoured Populace 修正的人类聚居地。",
      "icon": "armoured-populace-icon.png"
    },
    {
      "name": "All is Mine",
      "seal": 6,
      "cost": 5,
      "effect": "开启持续进食：本地或邻地有 Mammon's Influence 的每个人类聚居地，每回合各有 30% 概率减少 1 人口；每减少 1 人积累 0.15 封印进度，累计满整数部分时计入进度。人口减至 0 时成为废墟。\n山中财富的 Menace 与 Profile 每回合各 +1；这项进食不恢复财富，也不给扩张额度。",
      "limit": "必须施放在 The Mountain，且不能重复施放。",
      "icon": "all-is-mine.png"
    }
  ],
  "supplicant": {
    "image": "mammon-supplicant.png",
    "stats": "Might 2，Lore 2，Intrigue 4，Command 3；HP 5 / 5。",
    "abilities": [
      {
        "name": "Priceless Gift",
        "text": "获得该特质时，从物品池得到一件神器级物品。"
      },
      {
        "name": "Wealth Creator",
        "text": "本地或邻地有 Mammon's Influence 时，每回合获得 3 Gold；多个 Influence 不重复增加收益。"
      },
      {
        "name": "Wealth Begets Wealth",
        "text": "获得该特质时立即得到 200 Gold。"
      }
    ]
  },
  "sections": [
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "The Mountain's Wealth",
          "text": "The Mountain 的财富储备。财富归零会导致 Mammon 失败；同时记录扩张额度、Menace 与 Profile，后两项供 Raid Mountain 使用。财富百分比不决定神力上限。",
          "image": "mammon-influence-icon.png",
          "initialValue": "50%；扩张额度、Menace、Profile 均为 0。",
          "modifierChange": {
            "natural": "财富没有自然增长或衰减。Menace 与 Profile 每回合各衰减当前值的 3%。",
            "external": "<CrossReference name=\"Lured Crowd\" href=\"#entry-lured-crowd-army\" /> 被吞噬：每次财富增加 floor(吞噬进度 × 0.333) 个百分点，上限 100%；Menace 增加 floor(2 × 进度 × 难度增长系数)，Profile 增加 floor(0.6 × 进度 × 难度增长系数)。\n<CrossReference name=\"Devour Sin\" />：基准每次财富 +33 个百分点，上限 100%；不增加山的 Menace／Profile。\n<CrossReference name=\"Armoured Populace\" href=\"#entry-armoured-populace-army\" />：每次吞噬 2 灵魂，floor(2 × 0.333)＝0，不恢复财富。\n上述三种吞噬每 1 进度增加 0.1 × 难度恢复系数格扩张额度。\n<CrossReference name=\"Grow Influence\" />：消耗 1 格扩张额度，Profile +7。\n<CrossReference name=\"Raid Mountain\" />：财富 −10 个百分点、Menace −10，下限均为 0。\n<CrossReference name=\"Gift from The Mountain\" />：财富 −10 个百分点，最低保留 1%。\n<CrossReference name=\"All is Mine\" />：每回合在自然衰减后，使 Menace、Profile 各 +1。"
          }
        },
        {
          "name": "Mammon's Influence",
          "text": "使本地与邻地进入 Mammon 的影响范围，供相关神力、Wealth Creator 与神力上限统计使用。对范围内的普通 City，根据 Prosperity 推动 Greed 或 Decadence。",
          "image": "mammon-influence-icon.png",
          "modifierChange": {
            "natural": "",
            "external": "开局及每回合：以 The Mountain 为端点的贸易路线沿途补建或恢复为 100%。\n<CrossReference name=\"Grow Influence\" />：在选定路线地点创建 100%。\n<CrossReference name=\"Smuggling\" />：在接收城市创建 100%。\n随山脉贸易路线创建的 Influence，在所绑定路线消失时归零；神力直接创建的 Influence 不绑定路线。"
          },
          "initialValue": ""
        },
        {
          "name": "Greed",
          "text": "受 Mammon 影响而缺乏 Prosperity 的城市产生的贪婪。首都 Greed 至少 50% 时，可作为 Devour Sin 的条件。\n本地 Greed 与另一处 Decadence 的乘积会影响行动倾向：国内非首都城市对本国首都的 <CrossReference name=\"Agitate Against Sovereign\" />，倾向增加 Greed × Decadence /100。国与国之间按双方首都数值计算；结果大于 1 时，<CrossReference name=\"War: Invasion\" /> 与 <CrossReference name=\"Worsen Relatioship\" /> 增加相同倾向，<CrossReference name=\"Improve Relations\" /> 则减少。",
          "image": "greed-icon.png",
          "modifierChange": {
            "natural": "失去本地及邻地全部 Mammon's Influence，或所属势力不再是人类／精灵国家时归零；回合检查将超过 100 的强度压回 100。",
            "external": "<CrossReference name=\"Mammon's Influence\" />：Prosperity <95% 且没有 Decadence 时，创建 Greed；已有 Greed 每回合增加 2 × [1 + 5 × (1−Prosperity)]，多个 Influence 不叠加该增长。\nProsperity >105% 时，每回合减少 2 × [1 + 5 × (Prosperity−1)]；需先消退 Greed，之后才能生成 Decadence。\nProsperity 在 95%–105% 时不推动增减；公式中 Prosperity 用 0–1 内部值。"
          },
          "initialValue": ""
        },
        {
          "name": "Decadence",
          "text": "受 Mammon 影响且 Prosperity 较高的城市产生的腐化。存在时允许 Call of Wealth，达到 100% 时允许 Plutomania。\n它使拥有 Greed 的国内领主或外国更倾向于敌对行动，具体按 Greed 与 Decadence 的乘积计算。",
          "image": "decadence-icon.png",
          "modifierChange": {
            "natural": "失去本地及邻地全部 Mammon's Influence，或所属势力不再是人类／精灵国家时归零；回合检查将超过 100 的强度压回 100。",
            "external": "<CrossReference name=\"Mammon's Influence\" />：Prosperity >105% 且没有 Greed 时，创建 Decadence；已有 Decadence 且强度低于 100 时，每个覆盖本地的 Influence 各增加 2 × [1 + 5 × (Prosperity−1)]。这一增长可叠加，与 Greed 不同。\nProsperity <95% 时，每回合减少 2 × [1 + 5 × (1−Prosperity)]，多个 Influence 不叠加减少；需先消退 Decadence，之后才能生成 Greed。\nProsperity 在 95%–105% 时不推动增减；公式中 Prosperity 用 0–1 内部值。"
          },
          "initialValue": ""
        },
        {
          "name": "Sins Devoured",
          "text": "Devour Sin 后留下的固定存在标记，表示该地点所属战争的罪恶已经被 Mammon 吞食，因此同一地点不能再次成为 Devour Sin 的目标。",
          "image": "all-is-mine.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Shadow Market",
          "text": "每 1 强度给所在城市的 Prosperity 提供 −1 个百分点的修正。可通过 Smuggling 把等额的正向 Prosperity 修正提供给另一城市。",
          "id": "shadow-market-modifier",
          "image": "shadow-market.png",
          "initialValue": "Create Shadow Market 创建时为 10。",
          "modifierChange": {
            "natural": "每回合 Menace 增加 0.05 × 强度 × (2 − Infiltration)。\n每回合 Profile 增加 0.02 × 强度 × (2 − Infiltration)。",
            "external": "<CrossReference name=\"Create Shadow Market\" />：创建强度 10。\n<CrossReference name=\"Expand Shadow Market\" />：每次 +25，上限 200。\n<CrossReference name=\"Raid Shadow Market\" />：强度保留当前值的 75%，Menace、Profile 清零。"
          }
        },
        {
          "name": "Smuggling",
          "text": "固定地点修正，名称后显示供货城市。为本地 Prosperity 提供与所连接 Shadow Market 强度等额的正向百分点修正，随市场强度即时变化；自身没有强度增减。\n建立时同时创建 Mammon's Influence；不要求两城之间已有贸易路线。",
          "id": "smuggling-modifier",
          "image": "smuggling.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Armoured Populace",
          "text": "到达成熟阈值后移除自身并生成 Armoured Populace 军队。人类聚居地人口大于 3 时转化一半人口，否则军队 HP 为 10；修正成熟前可被 Investigate Population 移除。",
          "image": "armoured-populace-icon.png",
          "initialValue": "Embrace of Metal 创建时为 1%。",
          "modifierChange": {
            "natural": "每回合 +2；回合检查时已有至少 100 强度则成熟并移除。",
            "external": "<CrossReference name=\"Embrace of Metal\" />：创建强度 1。\n<CrossReference name=\"Investigate Population\" />：完成后直接移除。"
          }
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "The Mountain",
          "text": "Mammon 开局建立的山脉据点，使用它专属的山脉外观，承载 The Mountain's Wealth 与 Raid Mountain。优先选择邻接人类聚居地、便于接入贸易网络的地点；Supplicant 在此出现。",
          "image": "mammon-mountain.png"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Lured Crowd",
          "text": "不可控制的流动军队，不因常规军队解散检查而消失。Call of the Mountain 的人群只在偶数回合沿路径移动一格；同地英雄正在执行 Save Crowd 时暂停。抵达山脉后吞噬其剩余 HP 对应人数。\nCall of Wealth 的人群前往指定 Decadence 聚居地，到达后把剩余 HP 加入人口并解散；这类人群不提供 Save Crowd。\n战斗时造成的伤害倍率为 0.3。\n前往山脉的人群进入受影响、人口 >5 的人类聚居地时，吸收 floor(当地人口 × 25% × 随机数) 人口；随机数在 0–1 之间，低于 1。",
          "id": "lured-crowd-army",
          "image": "lured-crowd.png",
          "stats": "HP / 最大 HP：Call of the Mountain 为 floor(来源人口 × 25%)；Call of Wealth 为 min(floor(来源人口 × 33%)，目标剩余人口容量)。加入人群同时提高 HP 与最大 HP；Save Crowd 只降低当前 HP。"
        },
        {
          "name": "Armoured Populace",
          "text": "不可控制、属于黑暗阵营的流动军队，不因常规军队解散检查而消失。位于人类聚居地时自主执行 Raze Location，并忽略和平关系。\n当前任务为战斗或夷平时，每回合调用吞噬 2 灵魂：基准封印进度 +2、扩张额度 +0.2 格（乘以难度恢复系数）；不增加山的 Menace／Profile，财富恢复向下取整为 0。",
          "id": "armoured-populace-army",
          "image": "armoured-populace-icon.png",
          "stats": "HP / 最大 HP：生成时人口 >3，则为 floor(人口 × 50%)，并扣除等量人口；否则为 10。没有独立固定的 Attack／Defence／Command 属性，战斗使用军队 HP 与通用伤害结算。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Save Crowd",
          "text": "分别计算 Lore ×2×随机数与 Command ×2×另一随机数，取较大值并以人群当前 HP 为上限；按原籍人口占比分配、逐项向下取整，实际救回总数从人群 HP 中扣除，并返还给仍存在的原籍聚居地。\nChosen One 不能执行。完成时执行者 Profile +10；本国人群额外提高倾向 50，外国人群按外交关系 ×40 调整。",
          "location": "<CrossReference name=\"Lured Crowd\" /> 当前所在的路线地点。",
          "meta": "Command",
          "statLine": "Complexity: 10　Profile: 60　Menace: 50　XP: 21",
          "positiveTags": "Cooperation",
          "negativeTags": "Gold",
          "image": "refugees.png"
        },
        {
          "name": "Raid Mountain",
          "text": "山中财富 −10 个百分点、Menace −10，执行者获得 100 Gold、Profile +3；财富归零立即击败 Mammon。\nDanger 初始 3，可由 Danger in The Mountain 提高，伤害结算时可能逐点减少。英雄对 Mammon 的 Awareness 还会增加执行倾向。",
          "location": "<CrossReference name=\"The Mountain\" />。",
          "meta": "Might",
          "statLine": "Complexity: 15　Profile: 山中财富的 Profile　Menace: 山中财富的 Menace　Danger: 当前附加危险（初始 3）　XP: 29",
          "positiveTags": "Danger、Gold",
          "negativeTags": "无",
          "image": "mammon-influence-icon.png"
        },
        {
          "name": "Investigate Population",
          "text": "完成时移除 Armoured Populace 地点修正，阻止它生成军队；执行者 Profile +5。",
          "location": "带有 <CrossReference name=\"Armoured Populace\" /> 修正的人类聚居地。",
          "meta": "Lore",
          "statLine": "Complexity: 60　Profile: Armoured Populace 强度　Menace: Armoured Populace 强度　XP: 82",
          "positiveTags": "Cooperation",
          "negativeTags": "无",
          "image": "armoured-populace-icon.png"
        },
        {
          "name": "Raid Shadow Market",
          "text": "袭击 <CrossReference name=\"Shadow Market\" />，将其当前强度乘以 75%，并把该市场的 Menace 与 Profile 清零；完成时增加 3 Profile。",
          "location": "带有 <CrossReference name=\"Shadow Market\" /> 修正的城市。",
          "meta": "Might",
          "statLine": "Complexity: 25　Profile: Shadow Market 的 Profile　Menace: Shadow Market 的 Menace　XP: 42",
          "positiveTags": "Combat",
          "negativeTags": "Gold",
          "image": "shadow-market.png"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "items": [
        {
          "name": "Expand Shadow Market",
          "text": "Shadow Market 强度 +25，最高 200；完成时执行者 Profile +1、Menace +5。",
          "location": "带有 <CrossReference name=\"Shadow Market\" /> 修正的城市。",
          "meta": "Intrigue + Command",
          "statLine": "Complexity: 40　Profile: 50　Menace: 30　XP: 60",
          "image": "shadow-market.png",
          "limit": "Shadow Market 强度低于 200。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "Agitate Against Sovereign",
          "text": "在本地增加 35 Political Agitation，提高国家政治不稳定程度，可能推动更换君主或内战。\nMammon 的影响：本地 Greed ×首都 Decadence /100 增加行动倾向；统治者每 1% Awareness 使该倾向额外 −0.4。",
          "baseGame": true,
          "image": "agitate.png",
          "location": "普通 City，属于人类／精灵国家，且不是首都；由当地统治者执行。",
          "time": "7 回合",
          "positiveTags": "Ambition",
          "negativeTags": "Cooperation；有君主时另计君主自身标签"
        },
        {
          "name": "War: Invasion",
          "text": "君主向选定势力宣战，随后双方外交关系数值减半。名称后显示目标势力。\nMammon 的影响：本国首都 Greed ×目标首都 Decadence /100 大于 1 时，增加等量行动倾向；君主每 1% Awareness 额外 −0.4。",
          "baseGame": true,
          "image": "devour-sin.png",
          "location": "国家首都，由君主针对可选外交目标执行。",
          "time": "7 回合",
          "positiveTags": "Combat、Danger；目标为人类／精灵国家时另有 Cruel、Ambition",
          "negativeTags": "目标君主的标签；没有君主时使用目标势力标签"
        },
        {
          "name": "Improve Relations",
          "text": "外交关系增加 0.05（5 个百分点），上限 1；名称后显示目标势力。\nMammon 的影响：本国首都 Greed ×目标首都 Decadence /100 大于 1 时，减少等量行动倾向；君主每 1% Awareness 额外 +0.4。",
          "baseGame": true,
          "image": "diplomacy.png",
          "location": "国家首都，由君主针对可选外交目标执行。",
          "time": "7 回合",
          "positiveTags": "Cooperation，以及目标君主的标签；没有君主时使用目标势力标签",
          "negativeTags": "Combat、Cruel、Danger；两国路径距离小于 3 时另有 Ambition"
        },
        {
          "name": "Worsen Relatioship",
          "text": "外交关系减少 0.25（25 个百分点），下限 −1；游戏名称拼写为 Relatioship，后接目标势力。\nMammon 的影响：本国首都 Greed ×目标首都 Decadence /100 大于 1 时，增加等量行动倾向；君主每 1% Awareness 额外 −0.4。",
          "baseGame": true,
          "image": "bad-diplomacy.png",
          "location": "国家首都，由君主针对可选外交目标执行。",
          "time": "5 回合",
          "positiveTags": "Combat、Danger；两国路径距离小于 3 时另有 Ambition",
          "negativeTags": "目标君主的标签；没有君主时使用目标势力标签"
        }
      ]
    }
  ],
  "relations": {
    "The Mountain's Wealth": {
      "sources": [
        {
          "name": "开局建立",
          "href": "#loop"
        }
      ],
      "effects": [
        {
          "name": "Raid Mountain",
          "href": "#entry-raid-mountain"
        },
        {
          "name": "Gift from The Mountain",
          "href": "#entry-gift-from-the-mountain"
        },
        {
          "name": "All is Mine",
          "href": "#entry-all-is-mine"
        }
      ]
    },
    "Mammon's Influence": {
      "sources": [
        {
          "name": "The Mountain",
          "href": "#entry-the-mountain"
        },
        {
          "name": "Grow Influence",
          "href": "#entry-grow-influence"
        },
        {
          "name": "Smuggling",
          "href": "#entry-smuggling"
        }
      ],
      "effects": [
        {
          "name": "Greed",
          "href": "#entry-greed"
        },
        {
          "name": "Decadence",
          "href": "#entry-decadence"
        },
        {
          "name": "Wealth Creator",
          "href": "#entry-wealth-creator"
        },
        {
          "name": "Call of the Mountain",
          "href": "#entry-call-of-the-mountain"
        },
        {
          "name": "Distraction",
          "href": "#entry-distraction"
        }
      ]
    },
    "Greed": {
      "sources": [
        {
          "name": "Mammon's Influence",
          "href": "#entry-mammon-s-influence"
        }
      ],
      "effects": [
        {
          "name": "Devour Sin",
          "href": "#entry-devour-sin"
        },
        {
          "name": "Agitate Against Sovereign",
          "href": "#entry-agitate-against-sovereign"
        },
        {
          "name": "War: Invasion",
          "href": "#entry-war-invasion"
        },
        {
          "name": "Improve Relations",
          "href": "#entry-improve-relations"
        },
        {
          "name": "Worsen Relatioship",
          "href": "#entry-worsen-relatioship"
        }
      ]
    },
    "Decadence": {
      "sources": [
        {
          "name": "Mammon's Influence",
          "href": "#entry-mammon-s-influence"
        }
      ],
      "effects": [
        {
          "name": "Plutomania",
          "href": "#entry-plutomania"
        },
        {
          "name": "Agitate Against Sovereign",
          "href": "#entry-agitate-against-sovereign"
        },
        {
          "name": "War: Invasion",
          "href": "#entry-war-invasion"
        },
        {
          "name": "Improve Relations",
          "href": "#entry-improve-relations"
        },
        {
          "name": "Worsen Relatioship",
          "href": "#entry-worsen-relatioship"
        },
        {
          "name": "Call of Wealth",
          "href": "#entry-call-of-wealth"
        }
      ]
    },
    "shadow-market-modifier": {
      "sources": [
        {
          "name": "Create Shadow Market",
          "href": "#entry-create-shadow-market"
        }
      ],
      "effects": [
        {
          "name": "Expand Shadow Market",
          "href": "#entry-expand-shadow-market"
        },
        {
          "name": "Raid Shadow Market",
          "href": "#entry-raid-shadow-market"
        },
        {
          "name": "Smuggling",
          "href": "#entry-smuggling"
        }
      ]
    },
    "smuggling-modifier": {
      "sources": [
        {
          "name": "Smuggling",
          "href": "#entry-smuggling"
        }
      ],
      "effects": [
        {
          "name": "Mammon's Influence",
          "href": "#entry-mammon-s-influence"
        }
      ]
    },
    "Sins Devoured": {
      "sources": [
        {
          "name": "Devour Sin",
          "href": "#entry-devour-sin"
        }
      ]
    },
    "Armoured Populace": {
      "sources": [
        {
          "name": "Embrace of Metal",
          "href": "#entry-embrace-of-metal"
        }
      ],
      "effects": [
        {
          "name": "Armoured Populace",
          "href": "#entry-armoured-populace-army"
        },
        {
          "name": "Investigate Population",
          "href": "#entry-investigate-population"
        }
      ]
    },
    "lured-crowd-army": {
      "sources": [
        {
          "name": "Call of the Mountain",
          "href": "#entry-call-of-the-mountain"
        },
        {
          "name": "Call of Wealth",
          "href": "#entry-call-of-wealth"
        }
      ],
      "effects": [
        {
          "name": "Save Crowd",
          "href": "#entry-save-crowd"
        },
        {
          "name": "The Mountain's Wealth",
          "href": "#entry-the-mountain-s-wealth"
        }
      ]
    },
    "armoured-populace-army": {
      "sources": [
        {
          "name": "Armoured Populace",
          "href": "#entry-armoured-populace"
        }
      ],
      "effects": [
        {
          "name": "The Mountain's Wealth",
          "href": "#entry-the-mountain-s-wealth"
        }
      ]
    },
    "Create Shadow Market": {
      "effects": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ]
    },
    "Smuggling": {
      "sources": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ],
      "effects": [
        {
          "name": "Smuggling",
          "href": "#entry-smuggling-modifier"
        },
        {
          "name": "Mammon's Influence",
          "href": "#entry-mammon-s-influence"
        }
      ]
    },
    "Grow Influence": {
      "effects": [
        {
          "name": "Mammon's Influence",
          "href": "#entry-mammon-s-influence"
        }
      ]
    },
    "Devour Sin": {
      "sources": [
        {
          "name": "Greed",
          "href": "#entry-greed"
        }
      ],
      "effects": [
        {
          "name": "Sins Devoured",
          "href": "#entry-sins-devoured"
        },
        {
          "name": "The Mountain's Wealth",
          "href": "#entry-the-mountain-s-wealth"
        }
      ]
    },
    "Call of the Mountain": {
      "effects": [
        {
          "name": "Lured Crowd",
          "href": "#entry-lured-crowd-army"
        }
      ]
    },
    "Call of Wealth": {
      "sources": [
        {
          "name": "Decadence",
          "href": "#entry-decadence"
        }
      ],
      "effects": [
        {
          "name": "Lured Crowd",
          "href": "#entry-lured-crowd-army"
        }
      ]
    },
    "Plutomania": {
      "sources": [
        {
          "name": "Decadence",
          "href": "#entry-decadence"
        }
      ]
    },
    "Embrace of Metal": {
      "effects": [
        {
          "name": "Armoured Populace",
          "href": "#entry-armoured-populace"
        }
      ]
    },
    "Danger in The Mountain": {
      "effects": [
        {
          "name": "Raid Mountain",
          "href": "#entry-raid-mountain"
        }
      ]
    },
    "Expand Shadow Market": {
      "sources": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ],
      "effects": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ]
    },
    "Raid Shadow Market": {
      "sources": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ],
      "effects": [
        {
          "name": "Shadow Market",
          "href": "#entry-shadow-market-modifier"
        }
      ]
    },
    "Save Crowd": {
      "sources": [
        {
          "name": "Lured Crowd",
          "href": "#entry-lured-crowd-army"
        }
      ],
      "effects": [
        {
          "name": "Lured Crowd",
          "href": "#entry-lured-crowd-army"
        }
      ]
    },
    "Investigate Population": {
      "sources": [
        {
          "name": "Armoured Populace",
          "href": "#entry-armoured-populace"
        }
      ]
    },
    "Raid Mountain": {
      "sources": [
        {
          "name": "The Mountain's Wealth",
          "href": "#entry-the-mountain-s-wealth"
        }
      ],
      "effects": [
        {
          "name": "The Mountain's Wealth",
          "href": "#entry-the-mountain-s-wealth"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function MammonArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
