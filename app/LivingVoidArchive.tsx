"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "living-void",
  "name": "The Living Void",
  "number": "05",
  "theme": "void-theme",
  "assetDir": "living-void",
  "background": "god_background.png",
  "portrait": "god_portrait.png",
  "flavour": "",
  "caption": "虚空侵蚀、真空异常与世界坍缩",
  "maxTurns": "500 回合",
  "awaken": "第 400 回合",
  "panic": "100%",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerRecovery": "每回合恢复 0.035 × 神力上限 × 难度系数²。",
  "core": [
    "在 <CrossReference name=\"Great Wound\" /> 牺牲 Agent 的生命，取得 <CrossReference name=\"Voidstone\" />。",
    "把石头带到渗透至少 50% 的人类聚居地，执行 <CrossReference name=\"Plant Voidstone\" />。",
    "用 <CrossReference name=\"Open Rift\" /> 将 <CrossReference name=\"Hidden Voidstone\" /> 转化为 50% 的 <CrossReference name=\"Hungry Rift\" />。",
    "利用 Devastation、神庙和 <CrossReference name=\"Expand Rift\" /> 推高裂隙，同时压制或破坏 <CrossReference name=\"Reality Anchor\" />。",
    "裂隙达到 300% 后摧毁当地聚居地，形成永久的 <CrossReference name=\"World Rupture\" />。",
    "苏醒后施放 <CrossReference name=\"Vacuum Collapse\" />，从 <CrossReference name=\"Great Wound\" /> 与所有 <CrossReference name=\"World Rupture\" /> 同时向外吞噬地图。"
  ],
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Warp Light"
      ],
      "powerRecovery": "神力上限 1；每回合恢复 0.035 × 难度系数²"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [],
      "powerRecovery": "神力上限 2；每回合恢复 0.07 × 难度系数²"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 3,
      "reward": [
        "Hollow Earth",
        "Shattered Light"
      ],
      "powerRecovery": "神力上限 3；每回合恢复 0.105 × 难度系数²"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [],
      "powerRecovery": "神力上限 4；每回合恢复 0.14 × 难度系数²"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 4,
      "reward": [
        "Open Rift",
        "Stare Deep"
      ],
      "powerRecovery": "神力上限 5；每回合恢复 0.175 × 难度系数²"
    },
    {
      "seal": 5,
      "progress": 110,
      "agents": 4,
      "reward": [],
      "powerRecovery": "神力上限 6；每回合恢复 0.21 × 难度系数²"
    },
    {
      "seal": 6,
      "progress": 150,
      "agents": 5,
      "reward": [
        "Devour Warmth"
      ],
      "powerRecovery": "神力上限 7；每回合恢复 0.245 × 难度系数²"
    },
    {
      "seal": 7,
      "progress": 200,
      "agents": 5,
      "reward": [],
      "powerRecovery": "神力上限 8；每回合恢复 0.28 × 难度系数²"
    },
    {
      "seal": 8,
      "progress": 275,
      "agents": 6,
      "reward": [
        "Seeds of Destruction"
      ],
      "powerRecovery": "神力上限 9；每回合恢复 0.315 × 难度系数²"
    },
    {
      "seal": 9,
      "progress": 400,
      "agents": 6,
      "reward": [
        "Vacuum Collapse",
        "苏醒"
      ],
      "powerRecovery": "神力上限 10；每回合恢复 0.35 × 难度系数²"
    }
  ],
  "powers": [
    {
      "seal": 0,
      "name": "Warp Light",
      "cost": 1,
      "icon": "void_power_invis.png",
      "effect": "让携带 Voidstone 的己方 Agent 在 15 回合内始终保持最低 Profile。重复施放会继续增加 15 回合持续时间。",
      "limit": "只能选择携带至少一枚 Voidstone 的己方 Agent；石头全部离开物品栏时效果会提前结束。"
    },
    {
      "seal": 2,
      "name": "Hollow Earth",
      "cost": 2,
      "icon": "void_power_stonedevastation.png",
      "effect": "使埋有 Hidden Voidstone 的人类聚居地增加 65% Devastation。高 Devastation 会进一步为当地 Hungry Rift 提供被动成长。",
      "limit": "目标必须是人类聚居地，并且已经存在 Hidden Voidstone。"
    },
    {
      "seal": 2,
      "name": "Shattered Light",
      "cost": 2,
      "icon": "void_power_plantedshadow.png",
      "effect": "销毁目标 Agent 物品栏中的全部 Voidstone，每枚为所在地增加 7.5% Shadow；聚居地渗透度会按比例放大效果，完全渗透时提高至每枚 15%。Shadow 最多到 100%。",
      "limit": "目标必须是携带至少一枚 Voidstone 的己方 Agent，而且当前位于任意聚居地。"
    },
    {
      "seal": 4,
      "name": "Open Rift",
      "cost": 3,
      "icon": "void_power_makerift.png",
      "effect": "移除当地 Hidden Voidstone，并建立一个初始强度 50% 的 Hungry Rift。之后可由 Agent 执行 Expand Rift，使其逐步成长为 World Rupture。",
      "limit": "地点必须存在 Hidden Voidstone。"
    },
    {
      "seal": 4,
      "name": "Stare Deep",
      "cost": 2,
      "icon": "void_riftgiveslore.png",
      "effect": "对己方 Agent 使用时获得 25 回合的 +1 Lore；对英雄使用时直接损失 5 Sanity。",
      "limit": "目标必须与 Hungry Rift 位于同一地点。己方 Agent 不能已经拥有同名 Lore 加成；英雄没有这一重复限制。"
    },
    {
      "seal": 6,
      "name": "Devour Warmth",
      "cost": 3,
      "icon": "void_power_ruptureheat.png",
      "effect": "令 World Rupture 在 35 回合内持续吸走本地与所有相邻地点的热量。每回合按各地当前温度的 4% 施加负面温度变化，因此温暖地区降温更快。重复施放会延长持续时间。",
      "limit": "只能选择 World Rupture。"
    },
    {
      "seal": 8,
      "name": "Seeds of Destruction",
      "cost": 5,
      "icon": "void_power_seed.png",
      "effect": "无需 Agent 携带或种下石头，直接在目标地点建立 Hidden Voidstone。",
      "limit": "不能选择 Great Wound、World Rupture 或 Living Void；地点也不能已有 Hidden Voidstone 或 Hungry Rift。"
    },
    {
      "seal": 9,
      "name": "Vacuum Collapse",
      "cost": 10,
      "icon": "void_vacuumcollapse.png",
      "effect": "以 Great Wound 和所有 World Rupture 为中心，把半径内地形永久转化为 Living Void。首次范围半径为 2，此后每次施放增加 2。聚居地会被摧毁，绝大多数非玩家单位会死亡；施放后神力先归零，再按 Great Wound 与 World Rupture 的总数返还，每处 1 点。 范围按水平坐标距离计算，同时覆盖地表与地下。",
      "limit": "只能选择 Great Wound 或 World Rupture；实际效果会同时从世界上的所有此类入口扩散。需要先拥有 10 点神力才能施放。"
    }
  ],
  "supplicant": {
    "image": "void_supp.png",
    "stats": "Might 2　Lore 2　Intrigue 4　Command 3",
    "abilities": [
      {
        "name": "Dimensional Insights",
        "text": "每携带一枚 Voidstone，Supplicant 获得 +1 Lore。石头移出物品栏后加成随即消失。"
      },
      {
        "name": "Entropic Presence",
        "text": "位于人类聚居地时，每回合使当地增加 3% Devastation。"
      },
      {
        "name": "Collapsing Body",
        "text": "死亡时在符合条件的地点生成 Hungry Rift，初始强度为 100% + Agent 等级 × 20%。若地点已有 Hungry Rift 或 Hidden Voidstone，或本身是 Great Wound、World Rupture，则不会生成。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "media": false,
      "items": [
        {
          "seal": 0,
          "name": "Warped Light",
          "text": "把人物的 Profile 变化压到极低，使其实际保持在最低 Profile。基础持续 15 回合，可由 Warp Light 叠加时长；一旦不再携带 Voidstone 便立即移除。"
        },
        {
          "seal": 4,
          "name": "Stared into the Void",
          "text": "由 Stare Deep 赋予己方 Agent，提供 +1 Lore，持续 25 回合；效果存在时不能再次对该 Agent 施放。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Hidden Voidstone",
          "image": "void_stone.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "表示一枚 Voidstone 已被埋入地点；是 Hollow Earth 与 Open Rift 的目标条件。"
        },
        {
          "seal": 4,
          "name": "Hungry Rift",
          "image": "void_riftmodifier.png",
          "initialValue": "<CrossReference name=\"Open Rift\" />：50；<CrossReference name=\"Holy: Open Rift\" />：50，消耗 Hidden Voidstone 时为 100；<CrossReference name=\"Collapsing Body\" />：100 + Agent 等级 × 20。",
          "modifierChange": {
            "natural": "",
            "external": "当地 Devastation 每有 1 点，每回合增加 0.01；该项为 0 且地点为 City Ruins 时，每回合增加 3。\n消耗当地每个 Geomantic Locus 的 10 点强度，每回合增加 10；不足或等于 10 点时移除该 Locus。\n<CrossReference name=\"Expand Rift\" /> 完成时增加 40。\n<CrossReference name=\"Seal Rift\" /> 完成时减少 60，降至 0 时移除。\n<CrossReference name=\"Seekers of the New World\" /> 处于 −1／−2 时，每座同地 Temple 每回合增加 5／10。\n有资金、存在所属势力且不属于黑暗势力的每座 <CrossReference name=\"Reality Anchor\" />：同地每回合减少 5，其他地点每回合减少 0.2。"
          },
          "text": "强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 <CrossReference name=\"World Rupture\" />。Shadow 提高 <CrossReference name=\"Seal Rift\" /> 的复杂度，并降低 <CrossReference name=\"Expand Rift\" /> 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。"
        },
        {
          "seal": 6,
          "name": "Draining Warmth",
          "image": "void_power_ruptureheat.png",
          "initialValue": "70",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Devour Warmth\" /> 每次增加 70，相当于延长 35 回合。"
          },
          "text": "每回合使本地与所有相邻地点领土中的地块，按其当前温度的 4% 降温。"
        },
        {
          "name": "Reality Anchor",
          "image": "void_riftcloser.png",
          "images": [
            "void_riftcloser.png",
            "void_towerraid.png",
            "void_towerdarkened.png"
          ],
          "initialValue": "维护资金 100 Gold；损伤 0。",
          "modifierChange": {
            "natural": "维护资金每回合 −5 Gold，最低为 0。",
            "external": "<CrossReference name=\"Construct Reality Anchor\" /> 建立修正。\n<CrossReference name=\"Pillage Anchor\" /> 取走全部维护资金，并增加执行者 Might × 100 的损伤。\n英雄 <CrossReference name=\"Fund Reality Anchor\" href=\"#entry-hero-fund-reality-anchor\" /> 捐出全部 Gold；统治者 <CrossReference name=\"Fund Reality Anchor\" href=\"#entry-ruler-fund-reality-anchor\" /> 捐出当前 Gold 的一半，向下取整。\n捐款先抵扣损伤，超出部分增加维护资金；捐款恰好等于损伤时，代码会将整笔捐款加入资金并保留损伤。"
          },
          "text": "有资金且所属势力属于非黑暗势力时，压制所有 <CrossReference name=\"Hungry Rift\" />，对同地裂隙作用更强。强度用于标示状态：有资金 300、资金耗尽 200、有损伤 100；压制计算实际检查资金与所属势力。"
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "media": true,
      "items": [
        {
          "name": "Great Wound",
          "image": "void_eldertomb.png",
          "text": "Living Void 的特殊 Elder Tomb，保持 100% Shadow 且不能被摧毁。提供 Nothing from Something，用 Agent 的 2 HP 换取 Voidstone；也是 Vacuum Collapse 的固定扩散起点。"
        },
        {
          "seal": 4,
          "name": "World Rupture",
          "image": "void_worldrupture.png",
          "text": "Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 Nothing from Something，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 Seal Rupture 将其彻底关闭。"
        },
        {
          "seal": 9,
          "name": "Living Void",
          "image": "void_livingvoid.png",
          "text": "Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Voidstone",
          "image": "void_stone.png",
          "text": "不可丢弃的邪恶物品，是一枚微型 Living Void 门户。可提高 Supplicant 的 Lore，作为 Warp Light 与 Shattered Light 的条件，并提供 Something from Nothing 与 Plant Voidstone 两项仪式。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "name": "Seekers of the New World",
          "text": "Living Void 开局时加入每个 Holy Order，只有 0、−1、−2 三档。受 Elder 影响时，教团侍僧会更愿意执行 Holy: Open Rift；每座神庙还会令同地 Hungry Rift 每回合分别增加 5% 或 10%，同时神庙每回合增加 0.1 Menace。"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "media": true,
      "items": [
        {
          "name": "Holy: Open Rift",
          "image": "void_riftmodifier.png",
          "location": "对应 Holy Order 的 Temple 所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 40　Profile: 40　Menace: 0　XP: 60",
          "positiveTags": "Religion",
          "negativeTags": "无",
          "text": "教团侍僧在本教神庙所在地建立 50% Hungry Rift；若当地已有 Hidden Voidstone，则消耗它并把初始强度提高到 100%。完成时增加 10 Profile 与 10 Menace。只有对应 Holy Order 的侍僧可执行，且教义必须处于 Elder 影响状态。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Seal Rift",
          "image": "void_rift_expand.png",
          "location": "有 Hungry Rift 的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 20–40　Profile: 裂隙历史最高强度　Menace: 该值 × 0.2　XP: 36–60",
          "positiveTags": "Danger",
          "negativeTags": "无",
          "text": "英雄削减当地 Hungry Rift 60%；降至 0% 或以下时彻底移除。地点 Shadow 会把复杂度从 20 最多提高到 40。任务显示的 Profile 与 Menace取决于裂隙有史以来达到的最大强度，因此即使裂隙被压低，人类仍会记得它曾经的 Menace。"
        },
        {
          "name": "Fund Reality Anchor",
          "image": "void_riftcloser.png",
          "id": "hero-fund-reality-anchor",
          "location": "有 Reality Anchor 的地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 40　Menace: 0　XP: 3",
          "positiveTags": "无",
          "negativeTags": "Gold",
          "text": "英雄把身上的全部 Gold 交给 Reality Anchor，优先修复损伤，剩余部分成为维护资金；完成时增加 5 Profile。至少需要持有 1 Gold。"
        },
        {
          "name": "Seal Rupture",
          "image": "void_CO_CloseRupture.png",
          "location": "有 World Rupture 的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 100　Menace: 0　Danger: 50　XP: 72",
          "positiveTags": "无",
          "negativeTags": "无",
          "text": "Chosen One 进行的引导任务，完成后彻底关闭 World Rupture，并移除其 Draining Warmth 等裂口附属修正。引导期间可通过远程地术攻击、直接攻击或迫使其撤退来打断。"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "media": true,
      "items": [
        {
          "name": "Something from Nothing",
          "image": "void_stone_heal.png",
          "location": "携带 Voidstone 的 Agent 当前所在地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "消耗一枚 Voidstone，使 Agent 恢复 2 HP，并让其所有现存随从各恢复 2 HP，均不超过最大值。"
        },
        {
          "name": "Plant Voidstone",
          "image": "void_stone.png",
          "location": "渗透度至少 50% 且没有 Hidden Voidstone 或 Hungry Rift 的人类聚居地。",
          "meta": "Intrigue",
          "statLine": "Complexity: 25　Profile: 0　Menace: 0　XP: 42",
          "text": "消耗一枚 Voidstone，建立 Hidden Voidstone；完成时增加 5 Profile、4 Menace。"
        },
        {
          "name": "Nothing from Something",
          "image": "void_stone_get.png",
          "location": "Great Wound 或 World Rupture。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "在 Great Wound 或 World Rupture 牺牲 2 HP，获得一枚 Voidstone。只有当前 HP 大于 2 时才可执行。"
        },
        {
          "seal": 4,
          "name": "Expand Rift",
          "image": "void_rift_expand.png",
          "location": "有 Hungry Rift 的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 0　Menace: 0　XP: 42",
          "text": "使当地 Hungry Rift 增加 40%。完成时基础增加 5 Profile 与 8 Menace；地点 Shadow 会使两者最多降低 35%，最终取整。"
        },
        {
          "name": "Pillage Anchor",
          "image": "void_towerraid.png",
          "location": "有 Reality Anchor 的地点。",
          "meta": "Might",
          "statLine": "Complexity: 20 + 地点安全 × 5　Profile: 0　Menace: 0　XP: 随复杂度",
          "text": "夺走 Reality Anchor 的全部维护资金，并增加执行者 Might × 100 Gold 的设施损伤；完成时增加 6 Profile、12 Menace。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "name": "Construct Reality Anchor",
          "image": "void_riftcloser.png",
          "location": "没有 Reality Anchor 的人类聚居地。",
          "time": "5 回合",
          "text": "完全 Awareness 的人类统治者花费 100 Gold，在没有 Reality Anchor 的聚居地建造一座。世界恐慌、邻近或同地 Hungry Rift、高繁荣和 Alliance 身份会提高 AI 意愿；低繁荣与统治者 Shadow 会降低意愿。",
          "positiveTags": "无",
          "negativeTags": "Gold"
        },
        {
          "name": "Fund Reality Anchor",
          "image": "void_riftcloser.png",
          "id": "ruler-fund-reality-anchor",
          "location": "已有 Reality Anchor 的人类聚居地。",
          "time": "3 回合",
          "text": "完全 Awareness、至少持有 50 Gold 且不属于黑暗势力的当地统治者，把当前 Gold 的 50% 交给 Reality Anchor。世界恐慌、附近裂隙、设施损伤和 Alliance 身份会提高执行意愿。",
          "positiveTags": "无",
          "negativeTags": "Gold"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "Sealed Rift",
          "image": "void_riftclosed.png",
          "text": "英雄彻底消除 Hungry Rift 时显示的结果事件，不再附加额外数值效果。"
        },
        {
          "name": "Matured Rift",
          "image": "void_rupture_fullimage.png",
          "text": "Hungry Rift 达到 300% 并转化为 World Rupture 时显示的结果事件。"
        },
        {
          "name": "Seekers of the New World",
          "image": "void_HO.png",
          "id": "seekers-event",
          "text": "本局第一次由宗教任务开启 Hungry Rift 时显示，记录教团开始以新世界教义协助 Living Void。"
        },
        {
          "name": "Vacuum Collapse",
          "image": "god_background.png",
          "id": "vacuum-collapse-event",
          "text": "每局第一次由 Vacuum Collapse 吞噬人类聚居地时显示；不附加代码之外的额外效果。"
        }
      ]
    }
  ],
  "relations": {
    "Warped Light": {
      "sources": [
        {
          "name": "Warp Light",
          "href": "#entry-warp-light"
        }
      ],
      "effects": [
        {
          "name": "Voidstone",
          "href": "#entry-voidstone",
          "meta": "持续条件"
        }
      ]
    },
    "Stared into the Void": {
      "sources": [
        {
          "name": "Stare Deep",
          "href": "#entry-stare-deep"
        }
      ],
      "effects": []
    },
    "Hidden Voidstone": {
      "sources": [
        {
          "name": "Plant Voidstone",
          "href": "#entry-plant-voidstone"
        },
        {
          "name": "Seeds of Destruction",
          "href": "#entry-seeds-of-destruction"
        }
      ],
      "effects": [
        {
          "name": "Hollow Earth",
          "href": "#entry-hollow-earth"
        },
        {
          "name": "Open Rift",
          "href": "#entry-open-rift"
        }
      ]
    },
    "Hungry Rift": {
      "sources": [
        {
          "name": "Open Rift",
          "href": "#entry-open-rift"
        },
        {
          "name": "Collapsing Body",
          "href": "#entry-collapsing-body"
        },
        {
          "name": "Holy: Open Rift",
          "href": "#entry-holy-open-rift"
        }
      ],
      "effects": [
        {
          "name": "Expand Rift",
          "href": "#entry-expand-rift"
        },
        {
          "name": "Seal Rift",
          "href": "#entry-seal-rift"
        },
        {
          "name": "World Rupture",
          "href": "#entry-world-rupture"
        }
      ]
    },
    "Draining Warmth": {
      "sources": [
        {
          "name": "Devour Warmth",
          "href": "#entry-devour-warmth"
        }
      ],
      "effects": []
    },
    "Reality Anchor": {
      "sources": [
        {
          "name": "Construct Reality Anchor",
          "href": "#entry-construct-reality-anchor"
        }
      ],
      "effects": [
        {
          "name": "Pillage Anchor",
          "href": "#entry-pillage-anchor"
        },
        {
          "name": "Fund Reality Anchor",
          "href": "#entry-hero-fund-reality-anchor",
          "meta": "英雄任务"
        },
        {
          "name": "Fund Reality Anchor",
          "href": "#entry-ruler-fund-reality-anchor",
          "meta": "统治者行动"
        },
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ]
    },
    "Great Wound": {
      "effects": [
        {
          "name": "Nothing from Something",
          "href": "#entry-nothing-from-something"
        },
        {
          "name": "Vacuum Collapse",
          "href": "#entry-vacuum-collapse"
        }
      ]
    },
    "World Rupture": {
      "sources": [
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ],
      "effects": [
        {
          "name": "Nothing from Something",
          "href": "#entry-nothing-from-something"
        },
        {
          "name": "Devour Warmth",
          "href": "#entry-devour-warmth"
        },
        {
          "name": "Vacuum Collapse",
          "href": "#entry-vacuum-collapse"
        },
        {
          "name": "Seal Rupture",
          "href": "#entry-seal-rupture"
        }
      ]
    },
    "Living Void": {
      "sources": [
        {
          "name": "Vacuum Collapse",
          "href": "#entry-vacuum-collapse"
        }
      ],
      "effects": []
    },
    "Voidstone": {
      "sources": [
        {
          "name": "Nothing from Something",
          "href": "#entry-nothing-from-something"
        }
      ],
      "effects": [
        {
          "name": "Something from Nothing",
          "href": "#entry-something-from-nothing"
        },
        {
          "name": "Plant Voidstone",
          "href": "#entry-plant-voidstone"
        },
        {
          "name": "Warp Light",
          "href": "#entry-warp-light"
        },
        {
          "name": "Shattered Light",
          "href": "#entry-shattered-light"
        }
      ]
    },
    "Seekers of the New World": {
      "effects": [
        {
          "name": "Holy: Open Rift",
          "href": "#entry-holy-open-rift"
        },
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ]
    },
    "hero-fund-reality-anchor": {
      "sources": [
        {
          "name": "Reality Anchor",
          "href": "#entry-reality-anchor"
        }
      ],
      "effects": []
    },
    "ruler-fund-reality-anchor": {
      "sources": [
        {
          "name": "Reality Anchor",
          "href": "#entry-reality-anchor"
        }
      ],
      "effects": []
    },
    "Seal Rift": {
      "sources": [
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ],
      "effects": []
    },
    "Seal Rupture": {
      "sources": [
        {
          "name": "World Rupture",
          "href": "#entry-world-rupture"
        }
      ],
      "effects": []
    },
    "Nothing from Something": {
      "sources": [
        {
          "name": "Great Wound",
          "href": "#entry-great-wound"
        },
        {
          "name": "World Rupture",
          "href": "#entry-world-rupture"
        }
      ],
      "effects": [
        {
          "name": "Voidstone",
          "href": "#entry-voidstone"
        }
      ]
    },
    "Something from Nothing": {
      "sources": [
        {
          "name": "Voidstone",
          "href": "#entry-voidstone"
        }
      ],
      "effects": []
    },
    "Plant Voidstone": {
      "sources": [
        {
          "name": "Voidstone",
          "href": "#entry-voidstone"
        }
      ],
      "effects": [
        {
          "name": "Hidden Voidstone",
          "href": "#entry-hidden-voidstone"
        }
      ]
    },
    "Expand Rift": {
      "sources": [
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ],
      "effects": []
    },
    "Pillage Anchor": {
      "sources": [
        {
          "name": "Reality Anchor",
          "href": "#entry-reality-anchor"
        }
      ],
      "effects": []
    },
    "vacuum-collapse-event": {
      "sources": [
        {
          "name": "Vacuum Collapse",
          "href": "#entry-vacuum-collapse",
          "meta": "神力"
        }
      ],
      "effects": []
    },
    "Holy: Open Rift": {
      "sources": [
        {
          "name": "Seekers of the New World",
          "href": "#entry-seekers-of-the-new-world"
        }
      ],
      "effects": [
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ]
    },
    "Warp Light": {
      "effects": [
        {
          "name": "Warped Light",
          "href": "#entry-warped-light"
        }
      ]
    },
    "Open Rift": {
      "effects": [
        {
          "name": "Hungry Rift",
          "href": "#entry-hungry-rift"
        }
      ]
    },
    "Stare Deep": {
      "effects": [
        {
          "name": "Stared into the Void",
          "href": "#entry-stared-into-the-void"
        }
      ]
    },
    "Devour Warmth": {
      "effects": [
        {
          "name": "Draining Warmth",
          "href": "#entry-draining-warmth"
        }
      ]
    },
    "Seeds of Destruction": {
      "effects": [
        {
          "name": "Hidden Voidstone",
          "href": "#entry-hidden-voidstone"
        }
      ]
    },
    "Vacuum Collapse": {
      "effects": [
        {
          "name": "Living Void",
          "href": "#entry-living-void"
        },
        {
          "name": "Vacuum Collapse 事件",
          "href": "#entry-vacuum-collapse-event",
          "meta": "首次吞噬聚居地",
          "text": "每局第一次由 Vacuum Collapse 吞噬人类聚居地时显示。",
          "image": "god_background.png"
        }
      ]
    }
  },
  "specialVictory": "无",
  "overviewExtra": {
    "title": "",
    "text": "没有专属 Holy Order；现有教团加入 Seekers of the New World 教义。Great Wound 取代开局的 the Elder Tomb，裂隙成熟后形成额外的世界吞噬起点。"
  }
};

const preparedConfig = prepareGodConfig(config);
export default function LivingVoidArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
