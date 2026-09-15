"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "deaths-games",
  "name": "Death's Games",
  "number": "09",
  "theme": "death-games-theme",
  "assetDir": "deaths-games",
  "background": "godCardsTMP.png",
  "portrait": "god_cards_portrait.png",
  "flavour": "",
  "caption": "抽卡、概率与一次性干预",
  "maxTurns": "500 回合",
  "awaken": "第 800 回合最终封印；无额外苏醒效果",
  "panic": "25%",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限固定为 7。",
  "powerRecovery": "每回合恢复＝51 ÷ 350，约 0.1457。封印不改变神力上限与恢复速度。",
  "core": [
    "用 <CrossReference name=\"Draw Card\" /> 消耗 1 点神力，从随机稀有度池获得一张一次性卡牌；手牌最多保留 7 张。",
    "用 <CrossReference name=\"Redraw\" /> 消耗 2 点神力，弃掉全部手牌，再抽取少一张新卡牌；它使用一套比普通抽牌更窄的抽取池。",
    "卡牌施放不消耗 Power，通常使用一次后从手牌移除；可保存最多 7 张。",
    "使用卡牌获得金币、移动机会、挑战进度，或改变 Ward、Unrest、HP、Profile 与 Menace。",
    "初始 Supplicant 拥有 <CrossReference name=\"Lucky\" />：把卡牌打在人物单位上时有 25% 概率不消耗卡牌；打在地点上的卡牌不享受这项保留。",
    "封印不会解锁新卡牌，也不会改变神力上限或恢复速度；它们只按 15、30、70、200、300、500、800 回合逐步提高 Agent 上限。"
  ],
  "overviewExtra": {
    "title": "抽取概率",
    "text": "Draw Card：Common 共 5 张，每张 14%；Uncommon 共 4 张，每张 5.25%；Rare 共 2 张，每张 4.5%。\nRedraw：Common 共 3 张，每张约 23.33%；Uncommon 共 3 张，每张 7%；Rare 共 2 张，每张 4.5%。",
    "playStyle": "依靠随机手牌进行短促、灵活的干预，用卡牌支持 Agent 的移动、任务与生存。手牌上限和 Redraw 的损耗要求选择保留时机，后期优势主要来自更多 Agent 与卡牌配合。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Draw Card",
        "Redraw"
      ],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 1,
      "progress": 15,
      "agents": 2,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 2,
      "progress": 30,
      "agents": 3,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 3,
      "progress": 70,
      "agents": 3,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 4,
      "progress": 200,
      "agents": 4,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 5,
      "progress": 300,
      "agents": 5,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 6,
      "progress": 500,
      "agents": 6,
      "reward": [],
      "powerRecovery": "7/0.1457"
    },
    {
      "seal": 7,
      "progress": 800,
      "agents": 6,
      "reward": [
        "无特殊苏醒效果"
      ],
      "powerRecovery": "7/0.1457"
    }
  ],
  "powers": [
    {
      "name": "Draw Card",
      "seal": 0,
      "cost": 1,
      "effect": "随机抽取一张卡牌加入手牌，可以重复抽到同名卡牌。Common、Uncommon、Rare 的概率分别为 70%、21%、9%；同一稀有度内等概率。",
      "limit": "可以对任意地点或任意单位施放；当前手牌必须少于 7 张。",
      "icon": "card-card.png"
    },
    {
      "name": "Redraw",
      "seal": 0,
      "cost": 2,
      "effect": "弃掉当前全部卡牌，再抽取与原手牌数量少 1 张的新卡牌。例如有 4 张牌时会弃掉全部 4 张并重新抽 3 张。重抽的 Common 池只有 The Coin、The Hammer、The Horseshoe，Uncommon 池只有 The Open Door、The Storm、The Thief，Rare 池仍为 The Blindfold、The Judge。",
      "limit": "可以对任意地点或任意单位施放；至少要有 2 张卡牌。",
      "icon": "card-card.png"
    }
  ],
  "drawPowers": [
    {
      "name": "Common Card: The Coin",
      "seal": 0,
      "cost": 0,
      "effect": "使目标 人物单位 获得 20 Gold。使用后通常从手牌移除。",
      "limit": "必须指定一名人物单位。",
      "icon": "card-coin.png"
    },
    {
      "name": "Common Card: The Hammer",
      "seal": 0,
      "cost": 0,
      "effect": "使目标正在执行的 Challenge 立即增加 20 点进度。使用后通常从手牌移除。",
      "limit": "必须指定一个正在执行 Challenge 的单位。",
      "icon": "card-hammer.png"
    },
    {
      "name": "Common Card: The Horseshoe",
      "seal": 0,
      "cost": 0,
      "effect": "让目标单位本回合恢复一次移动机会。使用后通常从手牌移除。",
      "limit": "目标单位本回合必须已经移动过。",
      "icon": "card-horseshoe.png"
    },
    {
      "name": "Common Card: The Night",
      "seal": 0,
      "cost": 0,
      "effect": "使目标单位所在地的 Warding 一次性减少 20。使用后通常从手牌移除。",
      "limit": "目标单位所在地的 Warding 必须至少为 10。",
      "icon": "card-night.png"
    },
    {
      "name": "Common Card: The Dagger",
      "seal": 0,
      "cost": 0,
      "effect": "对目标单位造成 2 HP 伤害；如果 HP 降至 0 或以下，目标会死亡。使用后通常从手牌移除。",
      "limit": "必须指定一个单位。",
      "icon": "card-dagger.png"
    },
    {
      "name": "Uncommon Card: The Open Door",
      "seal": 0,
      "cost": 0,
      "effect": "在目标单位所在地添加 Bribed Guards，持续 20 回合，使当地 Security −2。使用后通常从手牌移除。",
      "limit": "必须指定一个单位。",
      "icon": "card-door.png"
    },
    {
      "name": "Uncommon Card: The Storm",
      "seal": 0,
      "cost": 0,
      "effect": "使目标单位 Disrupted 5 回合。使用后通常从手牌移除。",
      "limit": "可以指定任意单位。",
      "icon": "card-storm.png"
    },
    {
      "name": "Uncommon Card: The Thief",
      "seal": 0,
      "cost": 0,
      "effect": "随机摧毁目标人物携带的一件 Item。使用后通常从手牌移除。",
      "limit": "目标必须是携带至少一件 Item 的人物单位。",
      "icon": "card-thief.png"
    },
    {
      "name": "Uncommon Card: The Fist",
      "seal": 0,
      "cost": 0,
      "effect": "使目标单位所在地的 Unrest 一次性增加 30。使用后通常从手牌移除。",
      "limit": "必须指定一个单位。",
      "icon": "card-door.png"
    },
    {
      "name": "Rare Card: The Blindfold",
      "seal": 0,
      "cost": 0,
      "effect": "使目标单位的 Menace −10、Profile −10。使用后通常从手牌移除。",
      "limit": "可以指定任意单位。",
      "icon": "card-blindfold.png"
    },
    {
      "name": "Rare Card: The Judge",
      "seal": 0,
      "cost": 0,
      "effect": "使目标单位的 Menace +10、Profile +10。使用后通常从手牌移除。",
      "limit": "可以指定除 Chosen One 以外的任意单位。",
      "icon": "card-judge.png"
    }
  ],
  "supplicant": {
    "image": "supplicant.png",
    "stats": "Might 2，Lore 2，Intrigue 4，Command 3。",
    "abilities": [
      {
        "name": "Lucky",
        "text": "任何打在该人物单位上的卡牌都有 25% 概率不会从手牌中消耗；打在地点上的卡牌会正常消耗。该特质只有 1 级。"
      }
    ]
  },
  "sections": [
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Bribed Guards",
          "text": "守卫受贿后暂时放松检查，每份修正使 Security −2。",
          "image": "bribed-guards.png",
          "baseGame": true,
          "initialValue": "强度 20。",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Uncommon Card: The Open Door\" /> 每次创建一份独立修正，初始强度 20。"
          }
        },
        {
          "name": "Unrest",
          "text": "Unrest 是游戏本体通用地点修正。当地人口因统治者而愤怒，抗议可能发展为暴乱和暴力起义；它会降低 Security，使 Infiltration 更容易，并向相邻地点传播。贵族会优先执行降低 Unrest 的行动。每 1 点 Unrest 按代码使 Prosperity 受到 −1/200 的影响。达到 300 时触发 Unrest Crisis，当前统治者会被民众处决；处理后强度回落到 150，并清除当地 Lingering Resentment。",
          "id": "unrest-modifier",
          "image": "unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "关闭“统治者特质影响修正”时，每回合 −1；开启时，有统治者的地点每回合减少 Command ×0.5。\n至少一处相邻地点 Unrest >50 时，每回合 +1。\n人类聚居地以外的地点每回合清零。",
            "external": "<CrossReference name=\"Uncommon Card: The Fist\" /> 使用后使当地 Unrest 一次性增加 30。"
          }
        }
      ]
    }
  ],
  "relations": {
    "Draw Card": {
      "effects": [
        {
          "name": "Common Card: The Coin",
          "href": "#entry-common-card-the-coin",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Hammer",
          "href": "#entry-common-card-the-hammer",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Horseshoe",
          "href": "#entry-common-card-the-horseshoe",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Night",
          "href": "#entry-common-card-the-night",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Dagger",
          "href": "#entry-common-card-the-dagger",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Open Door",
          "href": "#entry-uncommon-card-the-open-door",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Storm",
          "href": "#entry-uncommon-card-the-storm",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Thief",
          "href": "#entry-uncommon-card-the-thief",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Fist",
          "href": "#entry-uncommon-card-the-fist",
          "meta": "卡牌神力"
        },
        {
          "name": "Rare Card: The Blindfold",
          "href": "#entry-rare-card-the-blindfold",
          "meta": "卡牌神力"
        },
        {
          "name": "Rare Card: The Judge",
          "href": "#entry-rare-card-the-judge",
          "meta": "卡牌神力"
        }
      ]
    },
    "Redraw": {
      "effects": [
        {
          "name": "Common Card: The Coin",
          "href": "#entry-common-card-the-coin",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Hammer",
          "href": "#entry-common-card-the-hammer",
          "meta": "卡牌神力"
        },
        {
          "name": "Common Card: The Horseshoe",
          "href": "#entry-common-card-the-horseshoe",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Open Door",
          "href": "#entry-uncommon-card-the-open-door",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Storm",
          "href": "#entry-uncommon-card-the-storm",
          "meta": "卡牌神力"
        },
        {
          "name": "Uncommon Card: The Thief",
          "href": "#entry-uncommon-card-the-thief",
          "meta": "卡牌神力"
        },
        {
          "name": "Rare Card: The Blindfold",
          "href": "#entry-rare-card-the-blindfold",
          "meta": "卡牌神力"
        },
        {
          "name": "Rare Card: The Judge",
          "href": "#entry-rare-card-the-judge",
          "meta": "卡牌神力"
        }
      ]
    },
    "Common Card: The Coin": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Common Card: The Hammer": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Common Card: The Horseshoe": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Common Card: The Night": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        }
      ]
    },
    "Common Card: The Dagger": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        }
      ]
    },
    "Uncommon Card: The Open Door": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Bribed Guards",
          "href": "#entry-bribed-guards"
        }
      ]
    },
    "Uncommon Card: The Storm": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Uncommon Card: The Thief": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Uncommon Card: The Fist": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest-modifier",
          "meta": "地点修正"
        }
      ]
    },
    "Rare Card: The Blindfold": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Rare Card: The Judge": {
      "sources": [
        {
          "name": "Draw Card",
          "href": "#entry-draw-card",
          "meta": "神力"
        },
        {
          "name": "Redraw",
          "href": "#entry-redraw",
          "meta": "神力"
        }
      ]
    },
    "Unrest": {
      "sources": [
        {
          "name": "Uncommon Card: The Fist",
          "href": "#entry-uncommon-card-the-fist",
          "meta": "卡牌神力"
        }
      ]
    },
    "Bribed Guards": {
      "sources": [
        {
          "name": "Uncommon Card: The Open Door",
          "href": "#entry-uncommon-card-the-open-door"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function DeathsGamesArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
