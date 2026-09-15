"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "kishi",
  "name": "Kishi, the Jagged Tide",
  "number": "04",
  "theme": "kishi-theme",
  "assetDir": "kishi",
  "background": "god_background.jpg",
  "portrait": "god_portrait.png",
  "flavour": "",
  "caption": "Bloodstain、Soul-Scar 与恶魔浪潮",
  "maxTurns": "500 回合",
  "awaken": "第 360 回合",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限。",
  "core": [
    "通过 <CrossReference name=\"Bloodstain\" /> 和 <CrossReference name=\"Soul-Scar\" /> 累积历史杀戮，把血污转化为后续神力与 <CrossReference name=\"Engulfing Tide\" /> 的资源。",
    "用 <CrossReference name=\"Hateful Spirit\" />、<CrossReference name=\"Might Makes Right\" /> 和 <CrossReference name=\"Distort Soul\" /> 扰乱英雄、统治者与地点，再用 <CrossReference name=\"Purge Hateful Spirit\" /> 等任务牵制英雄。",
    "第 9 封印解锁 <CrossReference name=\"Demonic Nexus\" /> 与 <CrossReference name=\"Engulfing Tide\" /> 后，在据点积累 <CrossReference name=\"Demonic Energy\" />，通过 <CrossReference name=\"Distill Demonic Horde\" /> 生成 <CrossReference name=\"Rampaging Demons\" />。",
    "苏醒后，由 <CrossReference name=\"Demon of the Tide\" /> 与 <CrossReference name=\"Rampaging Demons\" /> 自主袭击人类聚居地。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "",
    "playStyle": "把杀戮留下的 Bloodstain 与 Soul-Scar 当作长期资源，借仇恨和附身制造更多冲突。苏醒后将积累的资源转成恶魔能量与自主军势。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Bloody Handprint",
        "Echoes of Shadow"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [
        "Hateful Spirit"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 3,
      "reward": [
        "Shadow Guardian"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [
        "Blood in the Water"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 4,
      "reward": [
        "Crimson Haze"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 108,
      "agents": 4,
      "reward": [
        "Might Makes Right"
      ],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 152,
      "agents": 4,
      "reward": [
        "Unending Bloodshed"
      ],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 204,
      "agents": 5,
      "reward": [
        "Distort Soul"
      ],
      "powerRecovery": "8/0.28"
    },
    {
      "seal": 8,
      "progress": 264,
      "agents": 5,
      "reward": [
        "Echoes of Ruin"
      ],
      "powerRecovery": "9/0.315"
    },
    {
      "seal": 9,
      "progress": 360,
      "agents": 6,
      "reward": [
        "Engulfing Tide",
        "苏醒"
      ],
      "powerRecovery": "10/0.35"
    }
  ],
  "powers": [
    {
      "seal": 0,
      "name": "Bloody Handprint",
      "cost": 1,
      "icon": "power_bloody_handprint.png",
      "effect": "在目标所在地放置 50 点 Misleading Clues。该地点下一次完成挑战时，产生的 Profile 与 Menace 会被转嫁给被标记者，用来嫁祸英雄或侍僧。",
      "limit": "目标为 Chosen One 以外的英雄或侍僧，所在地没有 Misleading Clues。"
    },
    {
      "seal": 0,
      "name": "Echoes of Shadow",
      "cost": 0,
      "icon": "power_echoes_of_shadow.png",
      "effect": "消耗目标人物 1 层 Bloodstain，使其所在的人类聚居地增加 50% Shadow。血污会转成 Soul-Scar，所以仍计入后期所需的历史杀戮量。",
      "limit": "必须位于人类聚居地，并拥有可消耗的 Bloodstain。"
    },
    {
      "seal": 1,
      "name": "Hateful Spirit",
      "cost": 2,
      "icon": "power_hateful_spirit.png",
      "effect": "创建 <CrossReference name=\"Hateful Spirit\" href=\"#entry-hateful-spirit-modifier\" />，倒计时结束时使当地统治者对 Combat 与 Cruelty 的偏好各提高一级。",
      "limit": "目标为人类聚居地；允许重复施放。"
    },
    {
      "seal": 2,
      "name": "Shadow Guardian",
      "cost": 1,
      "icon": "power_shadow_guardian.png",
      "effect": "召唤一个可装备的 Shadow Guardian 随从：5 HP、4 Attack、2 Defence、占用 2 Command，用来强化代理战斗。",
      "limit": "目标需要空余随从槽和足够的 Command。"
    },
    {
      "seal": 3,
      "name": "Blood in the Water",
      "cost": 1,
      "icon": "power_blood_in_the_water.png",
      "effect": "让所有拥有 Bloodstain 的人物降低对指定人物的好感。重复施放可以把普通厌恶推至极端，更容易诱发攻击、宣战或反君主煽动。",
      "limit": "直接目标不能是 Chosen One；从其统治地点选择时可能绕过限制。"
    },
    {
      "seal": 4,
      "name": "Crimson Haze",
      "cost": 1,
      "icon": "power_crimson_haze.png",
      "effect": "消耗 1 层 Bloodstain，使所有己方 Agent 立刻降低 10 Menace，并把各自的最低 Menace 再降低 5，适合全队集中降压。",
      "limit": "需要一个拥有可消耗 Bloodstain 的人物。"
    },
    {
      "seal": 5,
      "name": "Might Makes Right",
      "cost": 2,
      "icon": "power_might_makes_right.png",
      "effect": "消耗 1 层 Bloodstain，使目标杀死当地统治者并接替其位置，同时创建两个 <CrossReference name=\"Frightened Guards\" />，合计降低 6 Security。",
      "limit": "目标为 Chosen One 以外、属于人类聚居地的人物单位，且不属于邪恶 Agent 类型；至少有 1 层 Bloodstain，Bloodstain 与 Soul-Scar 合计达到当地 Security ÷ 3。"
    },
    {
      "seal": 6,
      "name": "Unending Bloodshed",
      "cost": 3,
      "icon": "power_unending_bloodshed.png",
      "effect": "消耗 2 层 Bloodstain，赋予 The Hunger 与 Latent Vampirism。目标死后会在下一回合以 Vampire 身份于死亡地点复活。",
      "limit": "仅英雄、侍僧或统治者；至少 2 层 Bloodstain；不能是 Chosen One。"
    },
    {
      "seal": 7,
      "name": "Distort Soul",
      "cost": 4,
      "icon": "power_spirit_distortion.png",
      "effect": "消耗当地 Human Soul，将死者复活为 <CrossReference name=\"Wight\" />，并附带 1–2 个 <CrossReference name=\"Firehusk\" />；Command 至少为 2 时附带两个。",
      "limit": "目标地点存在 Human Soul。"
    },
    {
      "seal": 8,
      "name": "Echoes of Ruin",
      "cost": 2,
      "icon": "power_echoes_of_ruin.png",
      "effect": "消耗 1 层 Bloodstain。当地领土中，温度至少 0.5 的地块升温 0.15，其余降温 0.15；相邻地点领土按相同规则升温或降温 0.075。",
      "limit": "目标人物或统治者具有 Bloodstain，所在地宜居度大于 0；作用地点需要人类聚居地。直接选择人物时排除 Chosen One。"
    },
    {
      "seal": 9,
      "name": "Engulfing Tide",
      "cost": 4,
      "icon": "power_engulfing_tide.png",
      "effect": "消耗人物合计 4 层 Bloodstain 与 Soul-Scar，将其转化为 Demon of the Tide，摧毁聚居地、建立 Demonic Nexus，并生成 150 HP 的 Rampaging Demons。",
      "limit": "目标人物的 Bloodstain 与 Soul-Scar 合计至少为 4；直接选择人物时排除 Chosen One，选择地点时需要非海洋人类聚居地及当地统治者。"
    }
  ],
  "supplicant": {
    "image": "supplicant.png",
    "stats": "Might 2　Lore 2　Intrigue 4　Command 3",
    "abilities": [
      {
        "name": "Hit and Run",
        "text": "初始 Supplicant 获得 +2 Attack。与英雄或侍僧发生代理战斗后，回合结束时降低 5 Profile 和 5 Menace。"
      },
      {
        "name": "Expose Their Weakness",
        "text": "初始 Supplicant 获得 +2 Attack。亲手杀人时，在死亡地点放置 40 回合的 Frightened Guards，使安全降低 3。"
      },
      {
        "name": "Soldier Worship",
        "text": "首次获得时，从普通英雄中随机选择三人，各赋予 1 层 Bloodstain，并计入初始 Agent 的击杀统计。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Bloodstained",
          "text": "记录人物尚未消费的杀戮痕迹，并保留可供神力使用的当前层数。"
        },
        {
          "name": "Soul-Scarred",
          "text": "记录已经被消费的 Bloodstain。它不能再次支付普通神力，但仍计入历史杀戮总量。"
        },
        {
          "seal": 6,
          "name": "Latent Vampirism",
          "text": "人物死亡后，下一回合在死亡地点复活为 Vampire。"
        },
        {
          "name": "Martyr for War",
          "id": "martyr-for-war-trait",
          "text": "人物死亡时，所在地增加 100 Unrest；附近人物更喜欢 Combat 与 Cruelty，并更厌恶 Cooperation。"
        },
        {
          "name": "Muddied Trail",
          "text": "回合结束时一次性扣除指定的 Profile 与 Menace 后自行移除；实际数值为各 -5。"
        }
      ],
      "media": false
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Bloodstained Lands",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "显示当地统治者和 Chosen One 以外人物单位的最高 Bloodstain 层数，分为 1–5 级；达到 5 层后统一显示第五级。人物离开或层数变化后随之更新。",
          "image": "property_bloodstain.png"
        },
        {
          "seal": 1,
          "name": "Hateful Spirit",
          "id": "hateful-spirit-modifier",
          "initialValue": "10",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后生效并移除。",
            "external": "<CrossReference name=\"Hateful Spirit\" /> 创建独立修正。\n<CrossReference name=\"Purge Hateful Spirit\" /> 完成时移除该修正。"
          },
          "text": "倒计时结束时，使当地统治者对 Combat 与 Cruelty 的偏好各提高一级；已经极端喜欢的项目保持原状。",
          "image": "power_hateful_spirit.png"
        },
        {
          "name": "Frightened Guards",
          "initialValue": "<CrossReference name=\"Expose Their Weakness\" />：40；<CrossReference name=\"Might Makes Right\" />：每个 50。",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Expose Their Weakness\" /> 杀死人类聚居地内的人物时创建一个修正。\n<CrossReference name=\"Might Makes Right\" /> 创建两个独立修正。"
          },
          "text": "每个修正降低当地 3 Security；多个修正的效果叠加。"
        },
        {
          "seal": 6,
          "name": "Vampiric Awakening",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "保存即将复活的人物；下一回合生成对应 Vampire 后自行结束。",
          "image": "power_unending_bloodshed.png"
        },
        {
          "seal": 9,
          "name": "Demonic Energy",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Demonic Nexus\" /> 每回合增加 5。\n<CrossReference name=\"Distill Demonic Horde\" /> 消耗当前强度取整后的数值，最多 100；半整数取最接近的偶数。"
          },
          "text": "供 <CrossReference name=\"Distill Demonic Horde\" /> 生成 <CrossReference name=\"Rampaging Demons\" />，军队初始 HP 等于消耗量。",
          "image": "power_engulfing_tide.png"
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "seal": 9,
          "name": "Demonic Nexus",
          "image": "location_demon_stronghold.png",
          "text": "地点保持完全 Shadow，每回合产生 5 Demonic Energy，可招募 Firehusk，也可通过 Distill Demonic Horde 生成恶魔军团。初始防御为 100，但最大防御值为 50。"
        }
      ]
    },
    {
      "id": "minions",
      "title": "随从",
      "items": [
        {
          "seal": 2,
          "name": "Shadow Guardian",
          "id": "shadow-guardian-minion",
          "image": "unit_shadow_guardian.png",
          "stats": "HP 5；Attack 4；Defence 2；Command 2",
          "text": "可装备的 Shadow Guardian 随从，用于强化代理战斗。"
        },
        {
          "seal": 7,
          "name": "Firehusk",
          "image": "unit_demon_minion.png",
          "stats": "HP 5；Attack 4；Defence 2；Command 1",
          "text": "可从 Demonic Nexus 招募的恶魔随从。"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "seal": 7,
          "name": "Wight",
          "stats": "Might 继承，最低 4；Lore 继承；Intrigue 继承；Command 继承",
          "text": "不可控制，会自主袭击前哨以及 Shadow 较低的地区。"
        },
        {
          "seal": 9,
          "name": "Demon of the Tide",
          "image": "unit_demon_of_the_tide.png",
          "stats": "Might 继承 +3；Lore 继承；Intrigue 继承；Command 继承",
          "text": "不可控制；保留原人物，优先召唤军团、招募 Firehusk、支援恶魔军队或袭击人类。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "seal": 9,
          "name": "Rampaging Demons",
          "image": "unit_demon_army.png",
          "stats": "HP：Engulfing Tide 生成时 150；Distill Demonic Horde 生成时等于消耗的 Demonic Energy（取整，上限 100）",
          "text": "不可控制且不会自然解散，会寻找 Shadow 低于 50% 的人类聚居地并将其夷平。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教教义",
      "items": [
        {
          "name": "Martyrs for War",
          "id": "martyrs-for-war-doctrine",
          "text": "",
          "tenetRange": "-1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Acolyte 获得 Martyr for War。其死亡会增加当地 100 Unrest，并提高当地人物对 Combat、Cruelty 的喜好、降低对 Cooperation 的喜好。"
            }
          ]
        }
      ],
      "media": false
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Purge Hateful Spirit",
          "location": "有 Hateful Spirit 修正的地点。",
          "meta": "Other",
          "statLine": "Complexity: 3　Profile: 30　Menace: 65　XP: 8",
          "positiveTags": "无",
          "negativeTags": "Discord",
          "text": "移除 Hateful Spirit。除 Chosen One 外，执行者对 Combat 的偏好增加两级，对 Cooperation 的偏好降低两级；已经达到对应极端的项目保持原状。",
          "image": "power_hateful_spirit.png"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "items": [
        {
          "seal": 9,
          "name": "Distill Demonic Horde",
          "location": "Demonic Nexus。",
          "meta": "Lore+Command",
          "statLine": "Complexity: 50　Profile: Demonic Nexus 当前 Menace　Menace: Demonic Nexus 当前 Menace　XP: 72",
          "text": "消耗当前 <CrossReference name=\"Demonic Energy\" /> 取整后的数值，最多 100，生成同等 HP 的 <CrossReference name=\"Rampaging Demons\" />。<CrossReference name=\"Demonic Nexus\" /> 的 Menace 增加“军队 HP ÷ 4”取整值；半整数取最接近的偶数。完成后执行者增加 15 Profile、25 Menace。",
          "image": "unit_demon_army.png"
        }
      ]
    },
    {
      "id": "related-mechanics",
      "title": "相关机制",
      "items": [
        {
          "name": "Bloodstain",
          "image": "property_bloodstain.png",
          "meta": "核心资源",
          "text": "尚未被消费的杀戮层数。可由杀人、主动宣战和 Soldier Worship 获得；消费时转化为同量 Soul-Scar。"
        },
        {
          "name": "Soul-Scar",
          "meta": "历史杀戮记录",
          "text": "记录已被消费的 Bloodstain。不能再次支付一般神力，但仍计入 Engulfing Tide 的转化条件。"
        },
        {
          "name": "Violent Omens",
          "text": "随回合推进增加世界恐慌，贡献值＝30% × 当前回合 ÷ 360。第 360 回合贡献 30%，之后仍按该公式继续增加。此机制还会清零因英雄堕落累计的恐慌项。"
        }
      ]
    }
  ],
  "relations": {
    "Bloodstained": {
      "sources": [
        {
          "name": "杀人或主动宣战",
          "href": "#loop",
          "meta": "获得方式",
          "text": "非玩家控制人物杀死有灵魂者时获得；人类统治者主动对另一人类社会宣战时也获得。"
        },
        {
          "name": "Soldier Worship",
          "href": "#entry-soldier-worship"
        }
      ],
      "effects": [
        {
          "name": "Bloodstained Lands",
          "href": "#entry-bloodstained-lands"
        }
      ]
    },
    "Soul-Scarred": {
      "sources": [
        {
          "name": "Bloodstain",
          "href": "#loop"
        }
      ],
      "effects": [
        {
          "name": "Engulfing Tide",
          "href": "#entry-engulfing-tide"
        }
      ]
    },
    "Latent Vampirism": {
      "sources": [
        {
          "name": "Unending Bloodshed",
          "href": "#entry-unending-bloodshed"
        }
      ],
      "effects": [
        {
          "name": "Vampiric Awakening",
          "href": "#entry-vampiric-awakening"
        }
      ]
    },
    "martyr-for-war-trait": {
      "sources": [
        {
          "name": "Martyrs for War",
          "href": "#entry-martyrs-for-war-doctrine",
          "meta": "宗教教义",
          "text": "教义处于负面影响状态时，会给符合条件的教团侍僧赋予该特质。"
        }
      ],
      "effects": []
    },
    "Muddied Trail": {
      "sources": [
        {
          "name": "Hit and Run",
          "href": "#entry-hit-and-run"
        }
      ],
      "effects": []
    },
    "Bloodstained Lands": {
      "sources": [
        {
          "name": "Bloodstain",
          "href": "#loop"
        }
      ],
      "effects": []
    },
    "hateful-spirit-modifier": {
      "sources": [
        {
          "name": "Hateful Spirit",
          "href": "#entry-hateful-spirit"
        }
      ],
      "effects": [
        {
          "name": "Purge Hateful Spirit",
          "href": "#entry-purge-hateful-spirit"
        }
      ]
    },
    "Frightened Guards": {
      "sources": [
        {
          "name": "Expose Their Weakness",
          "href": "#entry-expose-their-weakness"
        },
        {
          "name": "Might Makes Right",
          "href": "#entry-might-makes-right"
        }
      ],
      "effects": []
    },
    "Vampiric Awakening": {
      "sources": [
        {
          "name": "Latent Vampirism",
          "href": "#entry-latent-vampirism"
        }
      ],
      "effects": []
    },
    "Demonic Energy": {
      "sources": [
        {
          "name": "Demonic Nexus",
          "href": "#entry-demonic-nexus"
        }
      ],
      "effects": [
        {
          "name": "Distill Demonic Horde",
          "href": "#entry-distill-demonic-horde"
        }
      ]
    },
    "Demonic Nexus": {
      "sources": [
        {
          "name": "Engulfing Tide",
          "href": "#entry-engulfing-tide"
        }
      ],
      "effects": [
        {
          "name": "Demonic Energy",
          "href": "#entry-demonic-energy"
        },
        {
          "name": "Firehusk",
          "href": "#entry-firehusk"
        },
        {
          "name": "Distill Demonic Horde",
          "href": "#entry-distill-demonic-horde"
        }
      ]
    },
    "shadow-guardian-minion": {
      "sources": [
        {
          "name": "Shadow Guardian",
          "href": "#entry-shadow-guardian"
        }
      ],
      "effects": []
    },
    "Firehusk": {
      "sources": [
        {
          "name": "Distort Soul",
          "href": "#entry-distort-soul"
        },
        {
          "name": "Demonic Nexus",
          "href": "#entry-demonic-nexus"
        }
      ],
      "effects": []
    },
    "Wight": {
      "sources": [
        {
          "name": "Distort Soul",
          "href": "#entry-distort-soul"
        }
      ],
      "effects": []
    },
    "Demon of the Tide": {
      "sources": [
        {
          "name": "Engulfing Tide",
          "href": "#entry-engulfing-tide"
        }
      ],
      "effects": []
    },
    "Rampaging Demons": {
      "sources": [
        {
          "name": "Engulfing Tide",
          "href": "#entry-engulfing-tide"
        },
        {
          "name": "Distill Demonic Horde",
          "href": "#entry-distill-demonic-horde"
        }
      ],
      "effects": []
    },
    "martyrs-for-war-doctrine": {
      "effects": [
        {
          "name": "Martyr for War",
          "href": "#entry-martyr-for-war-trait",
          "meta": "人物特质",
          "text": "侍僧死亡时增加动乱并改变当地人物偏好。"
        }
      ]
    },
    "Purge Hateful Spirit": {
      "sources": [
        {
          "name": "Hateful Spirit",
          "href": "#entry-hateful-spirit-modifier",
          "meta": "地点修正",
          "text": "地点存在该修正时，英雄可以执行净化任务。"
        }
      ],
      "effects": [
        {
          "name": "Hateful Spirit",
          "href": "#entry-hateful-spirit-modifier",
          "meta": "移除目标",
          "text": "完成任务后移除所在地的 Hateful Spirit。"
        }
      ]
    },
    "Distill Demonic Horde": {
      "sources": [
        {
          "name": "Demonic Nexus",
          "href": "#entry-demonic-nexus"
        }
      ],
      "effects": [
        {
          "name": "Rampaging Demons",
          "href": "#entry-rampaging-demons"
        }
      ]
    },
    "Hateful Spirit": {
      "effects": [
        {
          "name": "Hateful Spirit",
          "href": "#entry-hateful-spirit-modifier",
          "meta": "地点修正",
          "text": "约 10 回合后扭曲当地统治者；可被英雄净化。"
        },
        {
          "name": "Purge Hateful Spirit",
          "href": "#entry-purge-hateful-spirit"
        }
      ]
    },
    "Shadow Guardian": {
      "effects": [
        {
          "name": "Shadow Guardian",
          "href": "#entry-shadow-guardian-minion",
          "meta": "随从",
          "text": "5 HP、4 Attack、2 Defence、占用 2 Command。",
          "image": "unit_shadow_guardian.png"
        }
      ]
    },
    "Might Makes Right": {
      "effects": [
        {
          "name": "Frightened Guards",
          "href": "#entry-frightened-guards"
        }
      ]
    },
    "Unending Bloodshed": {
      "effects": [
        {
          "name": "Latent Vampirism",
          "href": "#entry-latent-vampirism"
        }
      ]
    },
    "Distort Soul": {
      "effects": [
        {
          "name": "Wight",
          "href": "#entry-wight"
        },
        {
          "name": "Firehusk",
          "href": "#entry-firehusk"
        }
      ]
    },
    "Engulfing Tide": {
      "effects": [
        {
          "name": "Demon of the Tide",
          "href": "#entry-demon-of-the-tide"
        },
        {
          "name": "Demonic Nexus",
          "href": "#entry-demonic-nexus"
        },
        {
          "name": "Rampaging Demons",
          "href": "#entry-rampaging-demons"
        }
      ]
    },
    "Hit and Run": {
      "effects": [
        {
          "name": "Muddied Trail",
          "href": "#entry-muddied-trail"
        }
      ]
    },
    "Expose Their Weakness": {
      "effects": [
        {
          "name": "Frightened Guards",
          "href": "#entry-frightened-guards"
        }
      ]
    },
    "Soldier Worship": {
      "effects": [
        {
          "name": "Bloodstain",
          "href": "#loop"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function KishiArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
