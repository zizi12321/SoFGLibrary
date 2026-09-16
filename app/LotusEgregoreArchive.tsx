"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "lotus-egregore",
  "name": "Lotus Egregore, Collective blissful apathy",
  "number": "21",
  "theme": "outsiders-theme lotus-egregore-theme",
  "assetDir": "out-of-gods",
  "background": "god_background4.jpg",
  "portrait": "god_portrait4.png",
  "flavour": "",
  "caption": "Lotus 种植、供货网络与金库经营",
  "maxTurns": "500 回合",
  "awaken": "第 500 回合",
  "panic": "75%",
  "finalAgents": "5",
  "progressLabel": "阈值",
  "unlockMethod": "常规回合解锁",
  "dlc": "必须要 DLC",
  "sourceMod": "Out of Gods",
  "powerCapacity": "神力上限固定为 0。",
  "powerRecovery": "每回合恢复 0。所有神力的 Power 消耗为 0；部分操作花费独立金库 Coffers。",
  "core": [
    "开局从第一处地表 Farms 起步：已有 Lotus Plantation、Lotus Supply 和一名 Associate，Coffers 为 50 Gold。",
    "用 Scale Up Operation 增加种植规模；优先维持 Lotus Supply，使人口逐渐形成 Lotus Users，并提供金币与 Shadow。",
    "在已渗透的 Docks 或 Market 建立 Lotus Export Stockpile，把本国产量分配到其他国家的 Lotus Supply。",
    "用 Scale Up Distribution 与 Scale Down Distribution 调整各地点分货权重；供应不足会使 Lotus Users 戒断，增加 Unrest 并改变 Shadow。",
    "用 Hire Agent 扩充 Associate，或用 Hire Specialist 临时开放一次常规招募。需要军队时，Hire Mercenaries 提供短期可控兵力。",
    "保护生产地与出口点，阻止 Burn Lotus Field 与 Shut down operation。可以提前 Scale Down Operation 收回资金，但英雄已经执行清理时无法缩减。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "初始 Associate 只会在找到第一处地表 Farms 时生成。常规招募点被持续压至 −1，Hire Specialist 将其临时设为 1；需要在下一回合前使用。\n名义 Agent 上限为 5；Hire Agent 的目标检查只检查金库，没有检查空余 Agent 名额。第 500 回合后 Agent 上限数组缺少下一阶段，后续行为未确认。",
    "playStyle": "依靠种植规模、国内分配与跨国出口滚动经营。扩张带来金库收入和 Shadow，但占用粮食、累积暴露风险；供货中断会迅速反噬既有用户。"
  },
  "specialVictory": "无",
  "specialFailure": "无独立失败条件。第 500 回合的占位封印没有胜利效果；此后会触发本体回合上限判定。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 5,
      "powerRecovery": "0/0",
      "reward": [
        "Check Coffers",
        "Business Expenses",
        "Hire Agent",
        "Hire Specialist",
        "Hire Mercenaries",
        "Scale Up Operation",
        "Scale Down Operation",
        "Scale Up Distribution",
        "Scale Down Distribution"
      ]
    },
    {
      "seal": 1,
      "progress": 500,
      "agents": "未定义",
      "powerRecovery": "0/0",
      "reward": [
        "占位封印；没有额外神力或胜利效果"
      ]
    }
  ],
  "powers": [
    {
      "name": "Check Coffers",
      "seal": 0,
      "cost": 0,
      "icon": "gridlock.png",
      "effect": "显示当前 Coffers 余额与本回合收入。",
      "limit": "只供查看，无法施放。"
    },
    {
      "name": "Business Expenses",
      "seal": 0,
      "cost": 0,
      "icon": "tax.png",
      "effect": "从 Coffers 转出 50 Gold 给目标人物。",
      "limit": "属于我方 Agent 类别的人物单位，包含同类自主邪恶单位；Coffers 至少 50 Gold。"
    },
    {
      "name": "Hire Agent",
      "seal": 0,
      "cost": 0,
      "icon": "agitate.png",
      "effect": "从 Coffers 支出 200 Gold，在目标地点创建 Associate。",
      "limit": "任意地点；Coffers 至少 200 Gold。此神力的目标检查未核验 Agent 空位。"
    },
    {
      "name": "Hire Specialist",
      "seal": 0,
      "cost": 0,
      "icon": "diplomacy.png",
      "effect": "从 Coffers 支出 300 Gold，把可用招募点设为 1。下一回合将重新设为 −1。",
      "limit": "任意地点；Coffers 至少 300 Gold。"
    },
    {
      "name": "Hire Mercenaries",
      "seal": 0,
      "cost": 0,
      "icon": "muster.png",
      "effect": "从 Coffers 支出 300 Gold，创建一支 Mercenaries，合约为 5 回合。",
      "limit": "任意地点；Coffers 至少 300 Gold，世界中没有另一支 Mercenaries。"
    },
    {
      "name": "Scale Up Operation",
      "seal": 0,
      "cost": 0,
      "icon": "quarantine.png",
      "effect": "从 Coffers 支出 50 Gold。根据设施建立强度 20 的 Lotus Plantation、Lotus Garden 或 Lotus Export Stockpile；已有对应修正时强度 +20，并标记本回合已调整。",
      "limit": "人类聚居地有已渗透的 Farms、Docks、Market，或已渗透且被亵渎的 Holy Site。Coffers 至少 50 Gold；已有经营修正须强度不高于 80、本回合未调整，且当地无人正在执行 Burn Lotus Field 或 Shut down operation。"
    },
    {
      "name": "Scale Down Operation",
      "seal": 0,
      "cost": 0,
      "icon": "reduceUnrest.png",
      "effect": "经营修正强度 −20，最低 0，并向 Coffers 返还 50 Gold。本回合标记为已调整；零强度的生产或出口修正仍保留。",
      "limit": "当地有强度至少 20、尚未在本回合调整的 Lotus Plantation、Lotus Export Stockpile 或已腐化的 Lotus Garden；当地有设施，且无人正在执行 Burn Lotus Field 或 Shut down operation。"
    },
    {
      "name": "Scale Up Distribution",
      "seal": 0,
      "cost": 0,
      "icon": "death.png",
      "effect": "建立强度 20 的 Lotus Supply，或使已有修正强度 +20。不花费 Coffers。",
      "limit": "人类聚居地；已有 Lotus Supply 强度必须小于 280。按每次 +20 的正常路径最高达到 280。"
    },
    {
      "name": "Scale Down Distribution",
      "seal": 0,
      "cost": 0,
      "icon": "unrest.png",
      "effect": "Lotus Supply 强度 −20；降至 0 时移除。不花费或返还 Coffers。",
      "limit": "人类聚居地，Lotus Supply 强度至少 20。"
    }
  ],
  "sections": [
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Lotus Plantation",
          "text": "把部分粮食生产转为 Lotus。食物产出乘数为 1 − 强度/200；Lotus 产量见供货规则。\n每回合 Profile 与 Menace 各增加 25 × 世界恐慌 × (1.5 − Infiltration) × (1.5 − Shadow) × 强度/100；三个比例均按 0–1 计算。强度为 0 时停产并停止新增 Profile、Menace，但已累积值保留。",
          "image": "plantation.png",
          "initialValue": "20",
          "modifierChange": {
            "natural": "",
            "external": "开局在第一处地表 Farms 建立强度 20。\nScale Up Operation 建立强度 20，已有时 +20。\nScale Down Operation 强度 −20，最低 0。\nBurn Lotus Field 移除该修正。"
          }
        },
        {
          "name": "Lotus Garden",
          "text": "地表 Holy Site 开局拥有的小型花园，食物产出乘数为 1 − 强度/200。Holy Site 被亵渎后，花园进入腐化状态，按 Lotus Plantation 的公式生产并累积 Profile、Menace，同时提供 Burn Lotus Field。",
          "image": "lotus.png",
          "initialValue": "20",
          "modifierChange": {
            "natural": "",
            "external": "开局在地表 Holy Site 建立强度 20。\nScale Up Operation 建立强度 20，已有时 +20。\nScale Down Operation 强度 −20，最低 0。\nBurn Lotus Field 移除该修正。"
          }
        },
        {
          "name": "Lotus Export Stockpile",
          "text": "决定本国 Lotus 用于出口的比例。被查封后名称变为 Closed Export Stockpile，停止出口并隐藏清理任务。\n每回合 Profile 与 Menace 各增加 25 × 世界恐慌 × (1.5 − Infiltration) × (1.5 − Shadow) × 强度/100；三个比例均按 0–1 计算。查封本身只设置关闭状态，因此强度大于 0 时这两项暴露值仍继续增加。",
          "image": "market.png",
          "initialValue": "20",
          "modifierChange": {
            "natural": "",
            "external": "Scale Up Operation 建立强度 20，已有时 +20。\nScale Down Operation 强度 −20，最低 0。\nShut down operation 设为关闭，保留强度。"
          }
        },
        {
          "name": "Lotus Supply",
          "text": "强度是分配 Lotus 的相对权重，实际获配数量每回合重新计算。国内供货与各国出口累加；已有供应不等于足以满足 Lotus Users。修正可在地点沦为废墟后保留。",
          "image": "caravan.png",
          "initialValue": "20",
          "modifierChange": {
            "natural": "",
            "external": "开局在初始 Farms 建立强度 20。\nScale Up Distribution 建立强度 20，已有时 +20。\nScale Down Distribution 强度 −20，归零后移除。"
          }
        },
        {
          "name": "Lotus Users",
          "text": "强度代表使用 Lotus 的人口百分比，Prosperity 减少 强度/200。供应足够时收入为实际用户数/15 Gold，并压低 Unrest、增加 Shadow；供应不足时收入按供货数量计算，戒断会提高 Unrest。\n代码另外记录用户人数：断供时扣减修正强度，但没有同步减少这份人数记录，因此后续需求和界面百分比可能不一致。",
          "image": "tea.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": "Lotus Supply 第一次收到正数供货时建立用户群。\n供货量与当地人口均不低于已记录用户数时，用户人数每回合翻倍，但不超过人口与供货量；强度改为用户数/人口 ×100。\n供货不足时，强度每回合减少 5 ×（已记录用户数 − 供货量）/人口。\n没有 Lotus Supply 时，强度每回合减少 5 × 已记录用户数/上次记录人口。"
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "Lotus Users 供应充足时，每回合增加其强度/35 个百分点。\n供货不足但仍有 Lotus Supply 时，每回合先减少（用户数 − 供货量）/人口 个百分点，再增加 Lotus Users 强度/35 个百分点。\n没有 Lotus Supply 时，每回合减少用户数/上次记录人口 个百分点。"
          }
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。",
            "external": "Lotus Users 供货充足时，每回合减少该次结算前强度/10。\n供货不足时，每回合增加 20 ×（用户数 − 供货量）/人口，并减少 10 × 供货量/人口。\n没有 Lotus Supply 时，每回合增加 20 × 用户数/上次记录人口。"
          }
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "Burn Lotus Field 完成时增加被烧毁花园或种植园强度的 2 倍。"
          }
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Associate",
          "image": "addict.png",
          "stats": "Might: 2 / Lore: 2 / Intrigue: 2 / Command: 2 / HP: 5",
          "text": "Hire Agent 创建的通用可控人物；与开局 Associate 使用相同属性，没有专属能力或预设特质。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Burn Lotus Field",
          "text": "移除对应 Lotus Plantation 或 Lotus Garden，并增加其强度 2 倍的 Devastation。Profile 与 Menace 取目标修正已经累积的值。",
          "image": "ophanimRootOutDissent.png",
          "location": "Lotus Plantation，或 Holy Site 已被亵渎的 Lotus Garden",
          "statLine": "Complexity: 25 / Profile: 目标累积值 / Menace: 目标累积值 / XP: 42",
          "positiveTags": "Combat",
          "negativeTags": "Shadow",
          "limit": "执行者个人 Shadow 未达到 100%。"
        },
        {
          "name": "Shut down operation",
          "text": "将出口点永久设为 Closed Export Stockpile，停止出口。保留修正及其强度；Profile 与 Menace 取该修正已累积的值。",
          "image": "gridlock.png",
          "location": "尚未关闭的 Lotus Export Stockpile",
          "statLine": "Complexity: 25 / Profile: 目标累积值 / Menace: 目标累积值 / XP: 42",
          "positiveTags": "Combat",
          "negativeTags": "Shadow",
          "limit": "执行者个人 Shadow 未达到 100%。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Mercenaries",
          "image": "unit_humanArmy.png",
          "stats": "HP: 30 / 最大 HP: 30；固定值。",
          "text": "可直接控制的游荡军队，不因所属国家失去领土而解散。每次神祇回合结算扣除 1 回合合约，5 次后解散。单位类保留了自动摧毁当前聚居地的 AI 行为。"
        }
      ]
    },
    {
      "id": "mechanics",
      "title": "相关机制",
      "items": [
        {
          "name": "Coffers",
          "image": "tax.png",
          "text": "独立于 Power 与人物金币的共享金库，开局 50 Gold。Lotus Users 按实际满足的需求贡献收入：供应充足时为用户数/15，供应不足时为供货量/15。\nScale Up Operation 支出 50；Scale Down Operation 返还 50；Business Expenses 支出 50；Hire Agent 支出 200；Hire Specialist 与 Hire Mercenaries 各支出 300。Scale Up Distribution 与 Scale Down Distribution 免费。"
        },
        {
          "name": "供货规则",
          "id": "lotus-distribution",
          "text": "单处基础产能＝12 + ⌈0.1 +（宜居度 −0.15）×75⌉。产量＝基础产能 × 经营修正强度/100；有 Farms 时再乘 2，每份 Devastation 再乘 max(0.1,1 − 强度/200)。腐化的 Lotus Garden 使用同一公式。\n按国家合计产量。代码取遍历顺序中最后一个未关闭 Lotus Export Stockpile 的强度作为出口百分比，上限 100；其余产量按本国 Lotus Supply 强度比例分配。出口量按所有外国 Lotus Supply 的强度比例分配。\n同一国家有多个出口点时，代码没有把它们的强度相加；出口点提示中的数量也可能与实际分配量不一致。"
        }
      ]
    }
  ],
  "relations": {
    "Hire Agent": {
      "effects": [
        {
          "name": "Associate",
          "href": "#entry-associate"
        }
      ],
      "sources": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        }
      ]
    },
    "Associate": {
      "sources": [
        {
          "name": "Hire Agent",
          "href": "#entry-hire-agent"
        }
      ]
    },
    "Hire Mercenaries": {
      "effects": [
        {
          "name": "Mercenaries",
          "href": "#entry-mercenaries"
        }
      ],
      "sources": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        }
      ]
    },
    "Mercenaries": {
      "sources": [
        {
          "name": "Hire Mercenaries",
          "href": "#entry-hire-mercenaries"
        }
      ]
    },
    "Scale Up Operation": {
      "effects": [
        {
          "name": "Lotus Plantation",
          "href": "#entry-lotus-plantation"
        },
        {
          "name": "Lotus Garden",
          "href": "#entry-lotus-garden"
        },
        {
          "name": "Lotus Export Stockpile",
          "href": "#entry-lotus-export-stockpile"
        }
      ],
      "sources": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        }
      ]
    },
    "Scale Down Operation": {
      "effects": [
        {
          "name": "Lotus Plantation",
          "href": "#entry-lotus-plantation"
        },
        {
          "name": "Lotus Garden",
          "href": "#entry-lotus-garden"
        },
        {
          "name": "Lotus Export Stockpile",
          "href": "#entry-lotus-export-stockpile"
        }
      ]
    },
    "Lotus Plantation": {
      "sources": [
        {
          "name": "Scale Up Operation",
          "href": "#entry-scale-up-operation"
        },
        {
          "name": "Scale Down Operation",
          "href": "#entry-scale-down-operation"
        }
      ],
      "effects": [
        {
          "name": "Burn Lotus Field",
          "href": "#entry-burn-lotus-field"
        }
      ]
    },
    "Lotus Garden": {
      "sources": [
        {
          "name": "Scale Up Operation",
          "href": "#entry-scale-up-operation"
        },
        {
          "name": "Scale Down Operation",
          "href": "#entry-scale-down-operation"
        }
      ],
      "effects": [
        {
          "name": "Burn Lotus Field",
          "href": "#entry-burn-lotus-field"
        }
      ]
    },
    "Lotus Export Stockpile": {
      "sources": [
        {
          "name": "Scale Up Operation",
          "href": "#entry-scale-up-operation"
        },
        {
          "name": "Scale Down Operation",
          "href": "#entry-scale-down-operation"
        }
      ],
      "effects": [
        {
          "name": "Shut down operation",
          "href": "#entry-shut-down-operation"
        }
      ]
    },
    "Scale Up Distribution": {
      "effects": [
        {
          "name": "Lotus Supply",
          "href": "#entry-lotus-supply"
        }
      ]
    },
    "Scale Down Distribution": {
      "effects": [
        {
          "name": "Lotus Supply",
          "href": "#entry-lotus-supply"
        }
      ]
    },
    "Lotus Supply": {
      "sources": [
        {
          "name": "Scale Up Distribution",
          "href": "#entry-scale-up-distribution"
        },
        {
          "name": "Scale Down Distribution",
          "href": "#entry-scale-down-distribution"
        }
      ],
      "effects": [
        {
          "name": "Lotus Users",
          "href": "#entry-lotus-users"
        }
      ]
    },
    "Lotus Users": {
      "sources": [
        {
          "name": "Lotus Supply",
          "href": "#entry-lotus-supply"
        }
      ],
      "effects": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "Coffers": {
      "sources": [
        {
          "name": "Lotus Users",
          "href": "#entry-lotus-users"
        }
      ],
      "effects": [
        {
          "name": "Hire Agent",
          "href": "#entry-hire-agent"
        },
        {
          "name": "Hire Specialist",
          "href": "#entry-hire-specialist"
        },
        {
          "name": "Hire Mercenaries",
          "href": "#entry-hire-mercenaries"
        },
        {
          "name": "Scale Up Operation",
          "href": "#entry-scale-up-operation"
        },
        {
          "name": "Business Expenses",
          "href": "#entry-business-expenses"
        }
      ]
    },
    "Shadow": {
      "sources": [
        {
          "name": "Lotus Users",
          "href": "#entry-lotus-users"
        }
      ]
    },
    "Unrest": {
      "sources": [
        {
          "name": "Lotus Users",
          "href": "#entry-lotus-users"
        }
      ]
    },
    "Burn Lotus Field": {
      "sources": [
        {
          "name": "Lotus Plantation",
          "href": "#entry-lotus-plantation"
        },
        {
          "name": "Lotus Garden",
          "href": "#entry-lotus-garden"
        }
      ],
      "effects": [
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Burn Lotus Field",
          "href": "#entry-burn-lotus-field"
        }
      ]
    },
    "Shut down operation": {
      "sources": [
        {
          "name": "Lotus Export Stockpile",
          "href": "#entry-lotus-export-stockpile"
        }
      ]
    },
    "Hire Specialist": {
      "sources": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        }
      ]
    },
    "Business Expenses": {
      "sources": [
        {
          "name": "Coffers",
          "href": "#entry-coffers"
        }
      ]
    }
  },
  "supplicant": {
    "name": "Associate",
    "image": "addict.png",
    "stats": "Might: 2 / Lore: 2 / Intrigue: 2 / Command: 2 / HP: 5",
    "abilities": []
  }
};

const preparedConfig = prepareGodConfig(config);
export default function LotusEgregoreArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
