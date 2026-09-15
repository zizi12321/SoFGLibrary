"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "evil-beneath",
  "name": "The Evil Beneath",
  "number": "07",
  "theme": "evil-beneath-theme",
  "assetDir": "evil-beneath",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "地下触手、吞食、地下意识与地表决战",
  "maxTurns": "500 回合",
  "awaken": "吞噬进度达到 450",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "吞噬进度",
  "unlockMethod": "吞噬进度达到对应封印阈值",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × max(3，神力上限)。苏醒时神力补满。",
  "core": [
    "开局在地下寻找没有 Society、没有 Settlement、非海洋且靠近人类聚居地的位置，建立 <CrossReference name=\"the Elder Tomb\" />；那里生成 <CrossReference name=\"The Creature's Heart\" />（最大 HP 1000，开局 HP 1）、Supplicant，并从周边地下位置随机生成最多四条初始触手。",
    "用 <CrossReference name=\"Grow\" /> 从心脏向新的地下地点延伸触手；路径上的每个触手段都是 <CrossReference name=\"Tentacle Segment\" />，终点会留下 <CrossReference name=\"Evidence\" />。",
    "让地表产生 Death，再用 <CrossReference name=\"Bring the Food\" /> 或 <CrossReference name=\"Drag Bodies Under\" /> 把尸体转成 <CrossReference name=\"Feast for the God-Thing\" />，送到触手或心脏旁。",
    "用 <CrossReference name=\"Retract Tentacle\" /> 收回一条触手；沿线的 Tentacle Segment 会吞食 Feast，食物恢复心脏 HP，并按完整点数累计吞噬进度。",
    "吞噬进度达到对应封印阈值后解锁下一阶段。<CrossReference name=\"Devour Knowledge\" /> 和 <CrossReference name=\"Devour Worshipper\" /> 会直接推进吞噬进度；破封后 Grow 的最大距离随已破封印数增加。",
    "达到最终阈值后苏醒：Awareness of the Underground 变为 100%，心脏和触手每回合增加 Menace，地表军队会主动向地下进攻；必须在心脏被摧毁前清除围剿。"
  ],
  "overviewExtra": {
    "title": "地下意识",
    "text": "Awareness of the Underground 是 0%–100% 的地下发现度。Bring the Food、Drag Bodies Under、Devastate、Sinkholes、Grab Ship、Withdraw Agent 与 Drag Down City 会直接提高它；Report Findings 提高 15%。苏醒时提高到 100%。",
    "playStyle": "在地下经营触手与食物运输，把地表死亡转成心脏生命和封印进度。行动越激烈越容易暴露，后期需要从隐蔽收割转向保护心脏、应对地表围剿。"
  },
  "specialVictory": "无",
  "specialFailure": "The Creature's Heart 被摧毁时立即失败。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Retract Tentacle",
        "Bring the Food",
        "Drag Bodies Under",
        "Devour Knowledge",
        "Devour Worshipper"
      ],
      "powerRecovery": "1/0.105"
    },
    {
      "seal": 1,
      "progress": 15,
      "agents": 2,
      "reward": [
        "Grow",
        "Vile Secretions"
      ],
      "powerRecovery": "2/0.105"
    },
    {
      "seal": 2,
      "progress": 30,
      "agents": 3,
      "reward": [
        "Strength from Below",
        "Withdraw Agent"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 70,
      "agents": 3,
      "reward": [
        "Devastate"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 200,
      "agents": 4,
      "reward": [
        "Sinkholes"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 300,
      "agents": 5,
      "reward": [
        "Grab Ship",
        "Defend the Heart"
      ],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 450,
      "agents": 6,
      "reward": [
        "Drag Down City",
        "苏醒"
      ],
      "powerRecovery": "7/0.245"
    }
  ],
  "powers": [
    {
      "name": "Retract Tentacle",
      "seal": 0,
      "cost": 0,
      "effect": "收回一条触手。沿线每个 <CrossReference name=\"Tentacle Segment\" /> 会吞食所在地全部 <CrossReference name=\"Feast for the God-Thing\" />；食物恢复 <CrossReference name=\"The Creature's Heart\" /> 的 HP，并按完整点数累计吞噬进度，随后解散这条触手。",
      "limit": "目标必须是某条触手末端的 Tentacle Segment 军队单位。",
      "icon": "tentacle.png"
    },
    {
      "name": "Bring the Food",
      "seal": 0,
      "cost": 1,
      "effect": "把目标所在地全部 Death 转为地下触手或心脏所在地的 <CrossReference name=\"Feast for the God-Thing\" />。接收点按地图遍历顺序选取第一个地下触手或心脏；每一地点路径步增加 1% Awareness of the Underground 与 1%临时世界恐慌。",
      "limit": "可控制 Agent，所在地有聚居地且 Infiltration >0。地图上需要地下触手或心脏才能实际接收食物。",
      "icon": "bring-the-food.png"
    },
    {
      "name": "Drag Bodies Under",
      "seal": 0,
      "cost": 1,
      "effect": "把目标全部 Death 转成 <CrossReference name=\"Feast for the God-Thing\" />，优先送到范围内的心脏，否则选择触手；增加 1% Awareness of the Underground。心脏在回合更新时自动吞食；触手上的食物由 <CrossReference name=\"Retract Tentacle\" /> 吞食。",
      "limit": "目标地点必须有至少 1 点 Death，与地下触手或心脏的地图直线距离小于 4。",
      "icon": "tentacle.png"
    },
    {
      "name": "Devour Knowledge",
      "seal": 0,
      "cost": 1,
      "effect": "吞噬进度增加目标人物等级与 Arcane Knowledge 等级之和的 10 倍。Arcane Knowledge 等级清零，并扣除 10000 XP，触发相应降级。",
      "limit": "可控制的人物单位，包括已被控制的英雄或 Acolyte。",
      "icon": "devour-knowledge.png"
    },
    {
      "name": "Devour Worshipper",
      "seal": 0,
      "cost": 1,
      "effect": "杀死一名己方 Agent、英雄或 Acolyte，并把其等级与 Arcane Knowledge 等级之和的 20 倍加入吞噬进度；目标的 Arcane Knowledge 也会被清空。",
      "limit": "可控制的人物单位，包括已被控制的英雄或 Acolyte。",
      "icon": "devour-worshipper.png"
    },
    {
      "name": "Grow",
      "seal": 1,
      "cost": 1,
      "effect": "从心脏延伸一条触手，沿途生成独立的 <CrossReference name=\"Tentacle Segment\" />；心脏损失 floor(心脏到终点的地图直线距离 ×2) HP，并在终点创建强度 25 的 <CrossReference name=\"Evidence\" />。",
      "limit": "地下地点，没有触手或心脏；到核心的地点路径步数不超过已破封印数 +1。心脏当前 HP 必须严格大于直线距离 ×2。",
      "icon": "tentacle.png"
    },
    {
      "name": "Vile Secretions",
      "seal": 1,
      "cost": 1,
      "effect": "目标 Plague 增加 100，并在最近的地下触手或心脏地点创建强度 25 的 <CrossReference name=\"Evidence\" />。",
      "limit": "人类聚居地，排除精灵城市；当前 Plague ≤100；与地下触手或心脏的地图直线距离小于 4。",
      "icon": "vile-secretions.png"
    },
    {
      "name": "Strength from Below",
      "seal": 2,
      "cost": 2,
      "effect": "让一名正在执行 Might 挑战的己方 Agent 立即获得 20 点挑战进度。",
      "limit": "正在执行非引导、有限时长 Might 挑战的可控制 Agent，HP >2；与地下触手或心脏的地图直线距离小于 4。",
      "icon": "strength-from-below.png"
    },
    {
      "name": "Withdraw Agent",
      "seal": 2,
      "cost": 1,
      "effect": "把一名地表己方 Agent 拉到最近的触手或心脏旁，使其开始隐藏，所有正在追击他的英雄都会丢失目标；同时增加 2% Awareness of the Underground。",
      "limit": "目标必须是地表己方 commandable Agent，与地下触手或心脏的地图直线距离小于 4。",
      "icon": "withdraw-agent.png"
    },
    {
      "name": "Devastate",
      "seal": 3,
      "cost": 2,
      "effect": "使目标聚居地额外增加 50% Devastation 与 25% Unrest，同时增加 5% Awareness of the Underground 和 1%临时世界恐慌。",
      "limit": "目标必须是人类聚居地，与地下触手或心脏的地图直线距离小于 4。",
      "icon": "devastate.png"
    },
    {
      "name": "Sinkholes",
      "seal": 4,
      "cost": 2,
      "effect": "目标地点及两条地点连接范围内，所有尚未参战的军队都进入 Disrupted 5 回合，包括己方军队；增加 2% Awareness of the Underground。",
      "limit": "目标地点必与地下触手或心脏的地图直线距离小于 4。",
      "icon": "geomantic-support.png"
    },
    {
      "name": "Grab Ship",
      "seal": 5,
      "cost": 3,
      "effect": "把海上的任意单位（包括军队）拖入深处并直接消灭，额外增加 5%世界恐慌和 5% Awareness of the Underground。",
      "limit": "目标必须是海上单位，与地下触手或心脏的地图直线距离小于 4。",
      "icon": "grab-ship.png"
    },
    {
      "name": "Defend the Heart",
      "seal": 5,
      "cost": 0,
      "effect": "命令一条触手与所在地所有人形军队（Dark Empire 除外）开战；若已有战斗，则把这些军队加入战斗。",
      "limit": "目标必须是 Tentacle Segment 军队单位。",
      "icon": "defend-the-heart.png"
    },
    {
      "name": "Drag Down City",
      "seal": 6,
      "cost": 4,
      "effect": "把整个人类聚居地拖入地下，摧毁地点并杀死全部居民；额外增加 5%世界恐慌和 20% Awareness of the Underground。",
      "limit": "目标必须是人类聚居地，与地下触手或心脏的地图直线距离小于 4。",
      "icon": "drag-down-city.png"
    }
  ],
  "supplicant": {
    "image": "supplicant.png",
    "stats": "Might 2，Lore 2，Intrigue 4，Command 3。",
    "abilities": [
      {
        "name": "Red Herring (Active)",
        "text": "自动移除 Supplicant 所在地点的一个 Evidence；触发后进入 100 回合冷却。"
      },
      {
        "name": "Creature of the Dark",
        "text": "位于地下时 Might、Lore、Intrigue、Command 各获得 +1。"
      },
      {
        "name": "Tunnel Dweller",
        "text": "位于连接不同地图层级的地点（例如地下与地表交界）时 Might、Lore、Intrigue、Command 各获得 +1。"
      }
    ]
  },
  "sections": [
    {
      "id": "world-mechanics",
      "title": "世界机制",
      "items": [
        {
          "name": "Awareness of the Underground",
          "text": "全局 0%–100% 的地下发现度。它由 The Evil Beneath 的神力、Evidence 调查和 Report Findings 推进；达到 100% 时地下意识完全暴露。",
          "baseGame": true
        },
        {
          "name": "Surface Response",
          "text": "苏醒后心脏持续积累 Menace，触手继承心脏的 Menace；地表军队会向地下进攻。",
          "baseGame": false
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Feast for the God-Thing",
          "text": "由尸体和扭曲灵魂组成的食物储备，供触手和 The Creature's Heart 吞食。",
          "image": "mouth-heart.png",
          "modifierChange": {
            "natural": "每回合强度 −1。若所在地有 The Creature's Heart，则由心脏吞食并清空该修正。",
            "external": "Bring the Food 或 Drag Bodies Under 把 Death 转为该修正；Retract Tentacle 收回触手时吞食沿线储备。"
          }
        },
        {
          "name": "Devastation",
          "text": "战争、战斗及其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；Food 产出乘数为 max(0.1，1 − 强度/200)。达到 300 时，仍然存在的聚居地会成为废墟。",
          "image": "devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −0.5（教学模式除外）。",
            "external": "<CrossReference name=\"Devastate\" /> 增加 50。"
          }
        },
        {
          "name": "Unrest",
          "text": "游戏本体地点修正。居民因反对统治者而不满；强度达到 100% 时，当地 Security −4，每个相邻地点的 Unrest 达到 100% 时再额外 −1 Security；若这些相邻地点存在 Infiltration，每个还会再额外 −1 Security。每 1 点强度使当地 Prosperity 减少 0.005。Unrest 达到 300% 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150%；非人类聚居地不会保留该修正。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "若未启用“统治者特质影响修正”，每回合减少 1；启用后则按当地统治者 Command × 0.5 每回合减少。\n若相邻地点的 Unrest 超过 50%，本地点每回合增加 1。\n非 SettlementHuman 地点每回合将其清零。",
            "external": "<CrossReference name=\"Devastate\" /> 使目标聚居地增加 25。"
          }
        },
        {
          "name": "Evidence",
          "text": "地下事件留下的线索。英雄可以执行 Investigate Evidence；该英雄任务完成后会生成 Report Findings。",
          "image": "evidence.png",
          "initialValue": "由 Grow 或 Vile Secretions 创建时为 25。",
          "modifierChange": {
            "natural": "当强度低于 200 时，每回合强度 +1.5；该强度同时作为地点的 Profile 与 Menace。",
            "external": "<CrossReference name=\"Grow\" /> 在终点创建强度 25 的线索。\n<CrossReference name=\"Vile Secretions\" /> 在最近的地下触手或心脏地点创建强度 25 的线索。\n<CrossReference name=\"Red Herring (Active)\" /> 自动移除所在地点的一份线索，冷却 100 回合。"
          }
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "the Elder Tomb",
          "text": "开局在地下建立的本体墓穴地点。它是 The Creature's Heart、Supplicant 和初始触手的生成点。",
          "image": "elder-tomb.png",
          "baseGame": true,
          "id": "elder-tomb-location"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "The Creature's Heart",
          "text": "地下神躯的核心，是 The Evil Beneath 的失败条件：心脏死亡会立即判定 Humanity 已摧毁地下心脏并击败玩家。它不可控制；如果当前位置是地表人类聚居地，会自动执行 Raze Location。苏醒后每回合增加 2 Menace。",
          "image": "mouth-heart.png",
          "stats": "HP：上限 1000，开局 1；地图回合数为 7 的倍数时恢复 1，最高 1000。每次吞食恢复 floor(食物强度) HP。"
        },
        {
          "name": "Tentacle Segment",
          "text": "沿触手路径生成的自主军队。位于人类聚居地时会尝试夷平该地点。每回合先将 Menace 设为心脏的 Menace，苏醒后额外增加 1。同一条触手可由末端执行 <CrossReference name=\"Retract Tentacle\" />，一并撤回所有段。",
          "image": "tentacle.png",
          "stats": "HP 10/10；每一段分别承受伤害。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Investigate Evidence",
          "text": "完成调查的自主英雄会自动执行 <CrossReference name=\"Report Findings\" />，返回家乡报告。",
          "location": "<CrossReference name=\"Evidence\" /> 所在的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: Evidence 当前强度　Menace: Evidence 当前强度　XP: 42",
          "positiveTags": "无",
          "negativeTags": "无",
          "image": "evidence.png",
          "limit": "Awareness of the Underground 小于 100%。"
        }
      ]
    },
    {
      "id": "automatic-tasks",
      "title": "自动任务",
      "items": [
        {
          "name": "Report Findings",
          "text": "调查完成后自动返回家乡；到达后世界恐慌增加 5%，Awareness of the Underground 增加 15%，任务结束。途中死亡或无法找到路径时无法完成报告。",
          "location": "执行者的家乡地点。",
          "time": "按可达路径移动至 homeLocation；具体回合数取决于路径和单位移动力。",
          "meta": "自动返回任务",
          "image": "evidence.png"
        }
      ]
    }
  ],
  "relations": {
    "Feast for the God-Thing": {
      "sources": [
        {
          "name": "Bring the Food",
          "href": "#entry-bring-the-food",
          "meta": "神力"
        },
        {
          "name": "Drag Bodies Under",
          "href": "#entry-drag-bodies-under",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Retract Tentacle",
          "href": "#entry-retract-tentacle",
          "meta": "神力"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Devastate",
          "href": "#entry-devastate",
          "meta": "神力"
        }
      ]
    },
    "Unrest": {
      "sources": [
        {
          "name": "Devastate",
          "href": "#entry-devastate",
          "meta": "神力"
        }
      ]
    },
    "Evidence": {
      "sources": [
        {
          "name": "Grow",
          "href": "#entry-grow",
          "meta": "神力"
        },
        {
          "name": "Vile Secretions",
          "href": "#entry-vile-secretions",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Investigate Evidence",
          "href": "#entry-investigate-evidence",
          "meta": "英雄任务"
        }
      ]
    },
    "The Creature's Heart": {
      "sources": [
        {
          "name": "开局建立",
          "href": "#loop",
          "meta": "开局机制"
        }
      ],
      "effects": [
        {
          "name": "Grow",
          "href": "#entry-grow",
          "meta": "神力"
        },
        {
          "name": "Retract Tentacle",
          "href": "#entry-retract-tentacle",
          "meta": "神力"
        },
        {
          "name": "Drag Down City",
          "href": "#entry-drag-down-city",
          "meta": "神力"
        }
      ]
    },
    "Awareness of the Underground": {
      "sources": [
        {
          "name": "Bring the Food",
          "href": "#entry-bring-the-food"
        },
        {
          "name": "Drag Bodies Under",
          "href": "#entry-drag-bodies-under"
        },
        {
          "name": "Devastate",
          "href": "#entry-devastate"
        },
        {
          "name": "Sinkholes",
          "href": "#entry-sinkholes"
        },
        {
          "name": "Grab Ship",
          "href": "#entry-grab-ship"
        },
        {
          "name": "Withdraw Agent",
          "href": "#entry-withdraw-agent"
        },
        {
          "name": "Drag Down City",
          "href": "#entry-drag-down-city"
        },
        {
          "name": "Report Findings",
          "href": "#entry-report-findings"
        }
      ]
    },
    "Report Findings": {
      "sources": [
        {
          "name": "Investigate Evidence",
          "href": "#entry-investigate-evidence",
          "meta": "英雄任务"
        }
      ],
      "effects": [
        {
          "name": "Awareness of the Underground",
          "href": "#entry-awareness-of-the-underground",
          "meta": "世界机制"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function EvilBeneathArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
