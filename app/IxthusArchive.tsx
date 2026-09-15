"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "ixthus",
  "name": "Ixthus, King of Cups",
  "number": "10",
  "theme": "ixthus-theme",
  "assetDir": "ixthus",
  "background": "kingOfCups_God.png",
  "portrait": "kingOfCups_Portrait.png",
  "flavour": "",
  "caption": "Holy Grail、永生、英雄与统治者的死亡",
  "maxTurns": "500 回合",
  "awaken": "第 370 回合",
  "panic": "50%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "dlc": "不兼容 DLC",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限。",
  "core": [
    "用 <CrossReference name=\"Summon Gawain\" /> 多次召唤 <CrossReference name=\"Sir Gawain\" />。随着解封增加，Sir Gawain 的 Might 会逐步提高；死亡后会留下可供再次召唤的身体。",
    "用 <CrossReference name=\"To Seek the Grail\" /> 在 infiltration 大于 0% 的人类聚居地建立 <CrossReference name=\"Whispers of Eternal Life\" />，让英雄执行 <CrossReference name=\"Seek the Grail\" /> 与 <CrossReference name=\"Quest for the Grail\" />，取得 <CrossReference name=\"Holy Grail\" />。",
    "用 <CrossReference name=\"Eternal Gift\" /> 转交 Holy Grail，或让持有 Holy Grail 的人物执行 <CrossReference name=\"To Eternal Life!\" />；饮用后会获得 <CrossReference name=\"Cursed Immortality (0)\" />，非指挥单位之后还可能转化为 <CrossReference name=\"Dread Knight\" />。",
    "让 ruler 在 <CrossReference name=\"Eternal City\" /> 中执行 <CrossReference name=\"Constitute Eternal City\" />、<CrossReference name=\"Construct Eternal Palace\" />、<CrossReference name=\"Eternal Dark Worship\" />、<CrossReference name=\"Dust to dust\" /> 与 <CrossReference name=\"Construct City Walls\" />，逐步把城市转为传播 Shadow 与破坏环境的据点。",
    "用 <CrossReference name=\"Festering Hatred\" />、<CrossReference name=\"Rest nor Recourse\" />、<CrossReference name=\"Quicken the Sands\" />、<CrossReference name=\"Grim Desertion\" /> 和 <CrossReference name=\"Echoing Ruin\" /> 扩大动乱、补给崩溃、时间加速、部队损失与城市毁灭。"
  ],
  "overviewExtra": {
    "title": "永生与复苏",
    "text": "Holy Grail 赋予 Cursed Immortality。人物死亡后留下 Immortal Body，复苏进度达到 100 时恢复；英雄逐渐转为 Dread Knight，统治者可以建立 Eternal City。\n开局在 the Elder Tomb 创建 Waters of Eternal Life 与 Gawain's Immortal Body。",
    "playStyle": "以 Holy Grail 诱导英雄与统治者追求永生，再利用复苏、Dread Knight 和 Eternal City 改变世界。既要安排寻杯路径，也要经营永生人物与城市带来的长期影响。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 1,
      "reward": [
        "To Seek the Grail",
        "Summon Gawain",
        "Festering Hatred"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 30,
      "agents": 2,
      "reward": [
        "Trials and Tribulations"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 73,
      "agents": 2,
      "reward": [
        "Eternal Gift"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 105,
      "agents": 3,
      "reward": [],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 150,
      "agents": 4,
      "reward": [
        "Rest nor Recourse",
        "Quicken the Sands"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 200,
      "agents": 4,
      "reward": [
        "Grim Desertion"
      ],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 265,
      "agents": 5,
      "reward": [],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 370,
      "agents": 5,
      "reward": [
        "Echoing Ruin",
        "苏醒"
      ],
      "powerRecovery": "8/0.28"
    }
  ],
  "powers": [
    {
      "name": "To Seek the Grail",
      "seal": 0,
      "cost": "动态",
      "effect": "在目标地点建立 强度 100 的 <CrossReference name=\"Whispers of Eternal Life\" />。消耗按全图 强度大于 0 的 Whispers 数量 N 动态计算：floor((N + 1) / 2)。因此 N=0 时消耗 0，N=1–2 时消耗 1，N=3–4 时消耗 2，之后每增加两处有效 Whispers，消耗增加 1。",
      "limit": "必须目标为人类聚居地，infiltration > 0%，目标地点不能已有 Whispers，且 3 格内不能已有其他 Whispers。",
      "icon": "grail_0.png"
    },
    {
      "name": "Summon Gawain",
      "seal": 0,
      "cost": "动态",
      "effect": "以目标地点的 <CrossReference name=\"Gawain's Immortal Body\" /> 为锚点召唤 <CrossReference name=\"Sir Gawain\" />。代码遍历全图 强度大于 0 的 Gawain's Immortal Body：强度 <100 时消耗为 floor(100 ÷ 强度)，强度 ≥100 时消耗为 0；没有有效身体时 默认消耗为 1。召唤会移除目标身体。",
      "limit": "目标地点必须有 charge>5 的 Gawain's Immortal Body。",
      "icon": "gawain_0.png"
    },
    {
      "name": "Festering Hatred",
      "seal": 0,
      "cost": 1,
      "effect": "移除目标地点全部 Unrest，创建数值为原 Unrest 两倍的 Lingering Resentment。",
      "limit": "必须目标为人类聚居地，且地点存在 charge>0 的 Unrest。",
      "icon": "crown_0.png"
    },
    {
      "name": "Trials and Tribulations",
      "seal": 1,
      "cost": 1,
      "effect": "创建 charge=4 的 <CrossReference name=\"Trials and Tribulations\" href=\"#entry-trials-and-tribulations-modifier\" meta=\"地点修正\" />，并立即让地点现有的善性或中性任务的 added Danger 各增加 4；地点上的 <CrossReference name=\"Construct Hazards\" /> 还会继续增加危险。",
      "limit": "可选地点；人类聚居地中不能已有同名地点修正。",
      "icon": "Trials_0.png"
    },
    {
      "name": "Eternal Gift",
      "seal": 2,
      "cost": 1,
      "effect": "使携带 Holy Grail 的 hero 或 ruler 把它交给同地点的另一名人物，并让双方互相产生 liking。",
      "limit": "持有 Holy Grail 的自主人物单位或人类聚居地统治者；接收者须在同一地点，单位候选排除军队、Chosen One 与赠送者本人。",
      "icon": "Gift_0.png"
    },
    {
      "name": "Rest nor Recourse",
      "seal": 4,
      "cost": 2,
      "effect": "目标地点的休息挑战 added Danger +12，所有相邻地点的休息挑战 added Danger +100。本地与邻地的自主人物单位各损失 2 HP（最低保留 1），进入 Disrupted 3 回合并停止主动交战。仅在目标地点创建 <CrossReference name=\"Ruined Supplies\" />。",
      "limit": "目标必须是人类聚居地，Unrest > 50% 或其 ruler 持有 Holy Grail，且不能已有 Ruined Supplies。",
      "icon": "frenzy_0.png"
    },
    {
      "name": "Quicken the Sands",
      "seal": 4,
      "cost": 2,
      "effect": "在目标地点创建强度 35 的 <CrossReference name=\"Quickened Sands\" />，将当地地点修正的每项正向增长影响翻倍。",
      "limit": "Infiltration >0 的人类聚居地，没有有效的 Quickened Sands。",
      "icon": "hourglass.png"
    },
    {
      "name": "Grim Desertion",
      "seal": 5,
      "cost": 2,
      "effect": "目标当前 HP 减半并向下取整；同地点敌对军队按代码顺序接收转移的兵力。",
      "limit": "人类军队，其家乡统治者具有 Cursed Immortality 或 Grails Temptation。",
      "icon": "flee_0.png"
    },
    {
      "name": "Echoing Ruin",
      "seal": 7,
      "cost": 6,
      "effect": "摧毁目标人类聚居地，并递归摧毁相邻 Prosperity ≤31% 的人类聚居地；Eternal City 保留。受影响地点及领地的临时温度变化设为 +1。",
      "limit": "Prosperity <31% 的人类聚居地。",
      "icon": "ruin_0.png"
    }
  ],
  "supplicant": {
    "image": "fallensup.png",
    "stats": "Might 2，Lore 2，Intrigue 4，Command 3。",
    "abilities": [
      {
        "name": "Crest of the Phoenix",
        "text": "获得后使所有属性提高 2，持续 30 回合；每次 Agent 复活都会刷新持续时间，并把属性提高量再增加 1。"
      },
      {
        "name": "Stolen Waters",
        "text": "第一次获得时立即得到两个 Holy Grail，可直接用于永生相关行动。"
      },
      {
        "name": "Remorse",
        "text": "与 Immortal Body 处于同一地点时，每回合向该身体加入名为 Remorse、数值为 3 的影响；它会参与身体的复苏进度计算。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Grails Temptation",
          "text": "标记人物是否携带 Holy Grail；它本身不提供额外属性。",
          "id": "grails-temptation-trait"
        },
        {
          "name": "Cursed Immortality (0)",
          "text": "每逢 3 的倍数回合，强度 +1；所在地 Unrest >75 时额外 +1，Prosperity <70% 时额外 +1。每次死亡强度 +40，并留下 Immortal Body。自主人物可以执行 Embrace Eternity；统治者可以执行 Constitute Eternal City。死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。"
        },
        {
          "name": "Immortal Hunger",
          "text": "人物在 human settlement 中每回合使地点 Shadow 增加 0.015，并在受伤时恢复 1 HP；战斗开始时会把本体 <CrossReference name=\"The Hunger\" /> 加到防守方。死亡后会留下 charge=20 的 Immortal Body；若身体未被绑定，之后可以复生。"
        },
        {
          "name": "Embraced Immortality",
          "text": "人物在 human settlement 中每回合使当地标准 Devastation 增加 3，并恢复 1 HP；死亡后会留下 charge=20 的 Immortal Body，未被绑定时可以复生。"
        },
        {
          "name": "Gawain's Immortality (0)",
          "text": "Sir Gawain 身上的 trait。它的 charge 初始为 Might×3；每次 Gawain 死亡会使 charge 增加 40，并在死亡地点没有同类身体时留下 charge=20 的 Gawain's Immortal Body。"
        },
        {
          "name": "The Hunger",
          "text": "人物每回合饥饿强度 +3；Feed 完成后清零强度、恢复满 HP、个人及地点 Shadow 各 +50%、Menace +8。Chosen One 免疫。Immortal Hunger 在主动战斗时使防守者感染该特质。",
          "baseGame": true
        }
      ],
      "media": false
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Grails Temptation",
          "text": "持有 Holy Grail 的非精灵统治者所在地点提供 <CrossReference name=\"To Eternal Life!\" href=\"#entry-to-eternal-life\" />。统治者失去圣杯后该修正移除；Unrest 与 Prosperity 影响饮用行动的执行意愿。",
          "image": "grail_item_0.png",
          "id": "grails-temptation-modifier",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Whispers of Eternal Life",
          "text": "提供 <CrossReference name=\"Seek the Grail\" />、<CrossReference name=\"Fund Quest for Grail\" /> 与 <CrossReference name=\"Holy: Fund Quest for Grail\" />。任务 Profile＝10 + 相邻人类聚居地 Infiltration 之和 ×5；Menace 每回合 +3，上限＝40 + 相邻人类聚居地 Shadow 之和 ×10（比例按 0–1 代入）。",
          "image": "grail_0.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Waters of Eternal Life",
          "text": "开局位于 the Elder Tomb，提供 <CrossReference name=\"Quest for the Grail\" />；完成任务取得 <CrossReference name=\"Holy Grail\" />。",
          "image": "grail_0.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Immortal Body",
          "text": "显示死者姓名；复苏达到 100 后在此恢复生命并移除身体，恢复满 HP，Profile 减半。可控制人物仍需要空余 Agent 位。绑定后停止复苏。",
          "meta": "动态名称；代码未提供固定字符串",
          "image": "gawain_0.png",
          "initialValue": "Cursed Immortality：可控制人物死亡时为 20，自主人物为 95；Dread Knight 死亡时为 20。",
          "modifierChange": {
            "natural": "未绑定且 15<强度<100：每回合 +2 +2×Shadow；有聚居地时额外 +2×Infiltration。\n强度≤15 时每回合 −20。\n可控制人物没有空余 Agent 位时暂停增长，并将超过 50 的强度压至 50。",
            "external": "<CrossReference name=\"Remorse\" /> 每回合额外 +3。\n<CrossReference name=\"Bind Immortal Body\" /> 绑定身体。\n<CrossReference name=\"Empower Immortal\" /> 解除绑定。"
          }
        },
        {
          "name": "Trials and Tribulations",
          "text": "持续为善性或中性任务补足 added Danger：每回合选择第一项低于修正强度的任务，将其 added Danger 设为修正强度。提供 <CrossReference name=\"Construct Hazards\" />。",
          "image": "Trials_0.png",
          "id": "trials-and-tribulations-modifier",
          "initialValue": "charge=4。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Construct Hazards\" /> 使每项善性或中性任务的 added Danger 增加 floor(4 ÷(1 + floor(原 added Danger ÷10)))；新值高于修正强度且差值小于 6 时，同步提高修正强度。"
          }
        },
        {
          "name": "Ruined Supplies",
          "text": "<CrossReference name=\"Rest nor Recourse\" /> 在目标地点留下的补给破坏标记；施放时增加当地及邻地休息挑战的危险。",
          "image": "Trials_0.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Quickened Sands",
          "text": "由 Quicken the Sands 创建的地点修正；它把地点修正的正向增长影响翻倍，并可触发地点危机。",
          "image": "hourglass.png",
          "initialValue": "强度 35。",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": ""
          }
        },
        {
          "name": "Gawain's Immortal Body",
          "text": "开局位于 the Elder Tomb。<CrossReference name=\"Summon Gawain\" /> 消耗身体，召回 <CrossReference name=\"Sir Gawain\" />。",
          "image": "gawain_0.png",
          "initialValue": "Elder Tomb 中初始 charge=100；Sir Gawain 死亡地点新建身体时 charge=20。",
          "modifierChange": {
            "natural": "6<charge<100 时每回合加入 Slow return to life +2；charge≤6 时改为 Gawain lives -20。",
            "external": "Sir Gawain 死亡时可创建 charge=20；Remorse 另加 3；Summon Gawain 要求 charge>5，并在施放时移除该属性。"
          }
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "Eternal City",
          "text": "由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 Eternal Palace 与 Crypt Depths，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。",
          "image": "crypt_loc.png"
        },
        {
          "name": "Eternal Palace",
          "text": "Eternal City 的权力中心；Eternal Dark Worship 与 Dust to dust 会从这里向外影响地点，并各自增加其 menace 15。",
          "image": "crypt_palace.png"
        },
        {
          "name": "Crypt Depths",
          "text": "Eternal City 的地下设施；代码将其作为独立 Subsettlement 创建。",
          "image": "crypt_small.jpg"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "items": [
        {
          "name": "Holy Grail",
          "text": "由 <CrossReference name=\"Quest for the Grail\" /> 或 <CrossReference name=\"Stolen Waters\" /> 获得。持有者获得 Grails Temptation；非精灵统治者持有时，所在地提供饮用行动。",
          "image": "grail_item_0.png"
        }
      ]
    },
    {
      "id": "minions",
      "title": "随从",
      "items": [
        {
          "name": "Husk",
          "text": "由 mod 的 M_Husk 提供的随从。GoldCost 30；受伤时每回合恢复 1 HP。",
          "image": "husk_0.png",
          "stats": "HP 7；Attack 3；Defence 2；Command 2"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Sir Gawain",
          "text": "Summon Gawain 生成的可控制单位，每次召唤重置属性。初始 Might＝floor((已破封印数 +1) ÷2) +4：0 封印为 4、1–2 封印为 5、3–4 封印为 6、5–6 封印为 7、7 封印为 8。每 3 回合 Might 减少 1，归零时死亡。",
          "image": "gawain_0.png",
          "stats": "Might 4（0 封印）；Lore 4；Intrigue 1；Command 6；HP 8/8；Shadow 100%",
          "abilities": [
            {
              "name": "Gawain's Immortality",
              "text": "每 3 回合基础 Might −1，降至 0 时死亡；死亡留下 Gawain's Immortal Body。",
              "id": "sir-gawain-gawain-s-immortality"
            }
          ]
        },
        {
          "name": "Dread Knight",
          "text": "不可控制的自主单位，会旅行、袭击人物，使用下列能力掠夺并强化自身。",
          "image": "Fallen_0.png",
          "stats": "Might 继承 +2；Lore 继承（吸血分支 +2）；Intrigue 继承 +2；Command 继承；HP 上限继承 +1。",
          "abilities": [
            {
              "name": "Embraced Immortality",
              "text": "普通分支：在 Eternal City 以外的人类聚居地每回合增加 3 Devastation，并在受伤时恢复 1 HP。死亡后留下 Immortal Body。",
              "id": "dread-knight-embraced-immortality"
            },
            {
              "name": "Immortal Hunger",
              "text": "吸血分支：在人类聚居地每回合增加 1.5% Shadow，并在受伤时恢复 1 HP；主动战斗时使防守者感染 The Hunger。死亡后留下 Immortal Body。",
              "id": "dread-knight-immortal-hunger"
            },
            {
              "name": "Spread Shadow",
              "image": "enshadow.png",
              "text": "使当地 Shadow 增加 40%，最高 100%。完成时 Profile +5、Menace +15。",
              "location": "所在人类聚居地。",
              "statLine": "Complexity: 30　Profile: 5　Menace: 15　XP: 49",
              "id": "dread-knight-spread-shadow"
            },
            {
              "name": "Senseless Destruction",
              "image": "enshadow.png",
              "text": "使当地 Devastation 增加 100。完成时 Profile +10、Menace +25。",
              "location": "所在人类聚居地。",
              "statLine": "Complexity: max(30，城防 ÷2.5)　Profile: 10　Menace: 25　XP: 随 Complexity",
              "id": "dread-knight-senseless-destruction"
            },
            {
              "name": "Harvest Soul",
              "image": "enshadow.png",
              "text": "消耗当地 Human Soul。基础 Might 不高于最大 HP 的一半时，Might +1；否则最大 HP +1。完成时 Profile +7、Menace +9。",
              "location": "存在有效 Human Soul 的地点。",
              "statLine": "Complexity: 6　Profile: 10　Menace: 0　XP: 14",
              "id": "dread-knight-harvest-soul"
            },
            {
              "name": "Ruthless Plunder",
              "image": "enshadow.png",
              "text": "当地 Unrest +30，取得统治者 Gold 的一半并向下取整；统治者剩余 Gold 少于 24 时再全部取走。完成时 Profile +7、Menace +7。",
              "location": "所在人类聚居地。",
              "statLine": "Complexity: 22　Profile: 10　Menace: 0　XP: 38",
              "id": "dread-knight-ruthless-plunder"
            },
            {
              "name": "Visit Eternal City",
              "image": "enshadow.png",
              "text": "以 Gold ÷35 向下取整得到购物额度；额度大于 1 时，先补入空随从槽的 Husk，再为物品空位抽取装备或消耗品，每次减少一个额度。最后把全部现有 Gold 交给城主。",
              "location": "Eternal City。",
              "statLine": "Complexity: 3　Profile: 10　Menace: 0　XP: 8",
              "id": "dread-knight-visit-eternal-city"
            }
          ]
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Eternal City Walls",
          "text": "自主防御军队，拦截所在地其他军队并参与战斗。城墙全部被摧毁后，当地军队可继续破坏 Eternal Palace。",
          "image": "walls_0.png",
          "meta": "自主防御设施",
          "stats": "新建 HP＝floor(统治者 Gold ÷3)；强化时最大 HP +floor(Gold ÷3)，当前 HP +floor(Gold ÷8)。受伤时每回合恢复 2 HP。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教教义",
      "items": [
        {
          "name": "Patrons of the Grail",
          "text": "",
          "tenetRange": "-1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Acolyte 执行 Holy: Fund Quest for Grail 的意愿 +60。该行动从 preaching reserves 捐出 50 Gold，为 Whispers of Eternal Life 的寻杯任务提供资金。"
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
          "name": "Seek the Grail",
          "text": "英雄从 Whispers of Eternal Life 启程寻找 Waters of Eternal Life；完成后会被转到 the Elder Tomb 的 Quest for the Grail。",
          "location": "Whispers of Eternal Life 所在地点。",
          "meta": "Command",
          "statLine": "Complexity: 6　Profile: 当前 Whispers of Eternal Life 的 Profile　Menace: 当前 Whispers of Eternal Life 的 Menace　XP: 14",
          "positiveTags": "Ambition、Gold、Danger",
          "negativeTags": "无",
          "image": "grail_0.png"
        },
        {
          "name": "Quest for the Grail",
          "text": "英雄在 the Elder Tomb 执行任务；完成后把一个 Holy Grail 放入自己的物品栏。",
          "location": "Elder Tomb。",
          "meta": "Might",
          "statLine": "Complexity: 12　Profile: 0　Menace: 0　Danger: 7　XP: 24",
          "positiveTags": "Ambition、Gold、Danger",
          "negativeTags": "无",
          "image": "grail_0.png"
        },
        {
          "name": "Bind Immortal Body",
          "text": "绑定目标 Immortal Body，把其 caged 设为 true；被绑定的身体不能自然复生，直到有执行者完成 Empower Immortal 解除绑定。完成后 Profile +5、Menace 0。",
          "location": "未被绑定的 Immortal Body 所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 20　Profile: 目标单位当前 inner_profile　Menace: 目标单位当前 inner_menace ÷ 2　XP: 36",
          "positiveTags": "无",
          "negativeTags": "无",
          "image": "gawain_0.png"
        },
        {
          "name": "Embrace Eternity",
          "text": "拥有 Cursed Immortality 的自主人物可执行此任务。完成后转化为同名且不可控制的 Dread Knight；原人物带有 The Hunger 时，转化为吸血分支。",
          "location": "拥有正强度 Cursed Immortality 的自主人物所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 6　Profile: 10　Menace: 0　XP: 14",
          "image": "enshadow.png",
          "positiveTags": "Ambition、Cruelty、Combat、Danger",
          "negativeTags": "Cooperation"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "To Eternal Life!",
          "text": "持有 Holy Grail 的非精灵 ruler 饮用 Grail；完成后移除其第一件 Holy Grail，赋予 Cursed Immortality，并触发 To Immortality! 模组事件。",
          "location": "持有 Holy Grail 的非精灵 ruler 所在的人类聚居地。",
          "meta": "统治者行动",
          "time": "3 回合",
          "image": "grail_0.png",
          "positiveTags": "Ambition、Danger",
          "negativeTags": "无"
        },
        {
          "name": "Constitute Eternal City",
          "text": "增加 Eternal City 计数，触发 Eternal City 模组事件，使原 settlement fallIntoRuin，并替换为 Eternal City。",
          "location": "有 ruler 的人类聚居地。",
          "meta": "统治者行动",
          "time": "3 回合",
          "image": "crypt_loc.png",
          "positiveTags": "Ambition、Danger",
          "negativeTags": "无"
        },
        {
          "name": "Construct Eternal Palace",
          "text": "花费 150 Gold，在 Eternal City 中建立 Eternal Palace。",
          "location": "尚未有 Eternal Palace 的 Eternal City。",
          "meta": "统治者行动",
          "time": "8 回合",
          "statLine": "消耗：150 Gold",
          "limit": "ruler 必须拥有超过 149 Gold。",
          "image": "crypt_palace.png",
          "positiveTags": "无",
          "negativeTags": "无"
        },
        {
          "name": "Eternal Dark Worship",
          "text": "从 Eternal Palace 向最多 60% Shadow 的目标地点传播 Shadow，并使 Eternal Palace 的 menace 增加 15。",
          "location": "有 Eternal Palace 的 Eternal City。",
          "meta": "统治者行动",
          "time": "10 回合",
          "image": "crypt_0.jpg",
          "positiveTags": "Shadow",
          "negativeTags": "无"
        },
        {
          "name": "Dust to dust",
          "text": "从 Eternal City 改变 climate 与 temperature，使 desert 扩张，并使 Eternal Palace 的 menace 增加 15。",
          "location": "有 Eternal Palace 的 Eternal City。",
          "meta": "统治者行动",
          "time": "10 回合",
          "image": "hourglass.png",
          "positiveTags": "Cruelty",
          "negativeTags": "无"
        },
        {
          "name": "Construct City Walls",
          "text": "创建或强化 Eternal City Walls，消耗 ruler 一半 Gold。",
          "location": "Eternal City。",
          "meta": "统治者行动",
          "time": "8 回合",
          "limit": "ruler 必须拥有超过 99 Gold。",
          "image": "walls_0.png",
          "positiveTags": "Combat",
          "negativeTags": "无"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "items": [
        {
          "name": "Holy: Fund Quest for Grail",
          "text": "Holy Order 成员从 preaching reserves 捐出 50 Gold，增加 Whispers of Eternal Life 对应 Grail 任务的资金；代码中的有效条件是 reserves > 49 且任务资金不超过 149。",
          "location": "Whispers of Eternal Life 所在地点，且执行者必须属于该地点的 Holy Order。",
          "meta": "Lore",
          "statLine": "Complexity: 1　Profile: 当前 Grail 任务 Profile + 40　Menace: 0　XP: 3",
          "limit": "执行者必须属于该 settlement 的 Holy Order，并有超过 49 preaching reserves；Grail 任务资金必须不超过 149。",
          "image": "grail_0.png"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "items": [
        {
          "name": "Fund Quest for Grail",
          "text": "执行者用 Gold 为 Grail 任务提供资金，最多按一次 50 Gold 的交易处理；它会降低执行者的 Gold，并增加任务资金。",
          "location": "Whispers of Eternal Life 所在地点。",
          "meta": "Command",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "limit": "执行者必须至少有 1 Gold。",
          "image": "grail_0.png"
        },
        {
          "name": "Fund Eternal City",
          "text": "执行者用 Gold 为 Eternal City 的 ruler 提供资金，最多按一次 50 Gold 的交易处理；资金交给城主后可用于城市设施。",
          "location": "Eternal City。",
          "meta": "Command",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "limit": "执行者必须至少有 1 Gold。",
          "image": "crypt_loc.png"
        },
        {
          "name": "Empower Immortal",
          "text": "解除 Immortal Body 的 caged 绑定，使其 charge 增加 25；完成时消耗 1 点神力。",
          "location": "Immortal Body 所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 15　Profile: 0　Menace: 0　XP: 29",
          "limit": "执行者必须至少有 1 点神力。",
          "image": "gawain_0.png"
        },
        {
          "name": "Construct Hazards",
          "text": "对地点现有的每个善性或中性任务按其当前 added Danger 计算整数增量：4 ÷ (1 + added Danger ÷ 10)。它会把这些任务的 Danger 继续推高；若 Trials and Tribulations 的 charge 过低且新 Danger 尚未超过 charge+6，还会把该地点修正的 charge 调整到新 Danger。",
          "location": "已有 <CrossReference name=\"Trials and Tribulations\" href=\"#entry-trials-and-tribulations-modifier\" meta=\"地点修正\" /> 的地点。",
          "meta": "Might + Command",
          "statLine": "Complexity: 20　Profile: 10　Menace: 30　XP: 36",
          "image": "Trials_0.png"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "items": [
        {
          "name": "Eternal City",
          "text": "模组事件；JSON 的 choices、effects 与 environment 均为空，实际城市转化机制来自 Constitute Eternal City 的 DLL 代码。",
          "meta": "模组事件 · other_become_eternal.json",
          "image": "city_collapse.png",
          "id": "eternal-city-event"
        },
        {
          "name": "To Immortality!",
          "text": "模组事件；JSON 的 choices、effects 与 environment 均为空，实际效果由 To Eternal Life! 的 DLL 代码执行：移除 Holy Grail、赋予 Cursed Immortality。",
          "meta": "模组事件 · other_drink_grail_ruler.json",
          "image": "drinkGrailFull.png",
          "id": "to-immortality-event"
        }
      ]
    }
  ],
  "relations": {
    "To Seek the Grail": {
      "effects": [
        {
          "name": "Whispers of Eternal Life",
          "href": "#entry-whispers-of-eternal-life"
        }
      ]
    },
    "Summon Gawain": {
      "effects": [
        {
          "name": "Sir Gawain",
          "href": "#entry-sir-gawain"
        },
        {
          "name": "Gawain's Immortal Body",
          "href": "#entry-gawain-s-immortal-body"
        }
      ]
    },
    "Festering Hatred": {
      "effects": []
    },
    "Eternal Gift": {
      "effects": [
        {
          "name": "Holy Grail",
          "href": "#entry-holy-grail"
        }
      ]
    },
    "Rest nor Recourse": {
      "effects": [
        {
          "name": "Ruined Supplies",
          "href": "#entry-ruined-supplies"
        }
      ]
    },
    "Quicken the Sands": {
      "effects": [
        {
          "name": "Quickened Sands",
          "href": "#entry-quickened-sands"
        }
      ]
    },
    "Echoing Ruin": {
      "effects": [
        {
          "name": "Eternal City",
          "href": "#entry-eternal-city"
        }
      ]
    },
    "Grails Temptation": {
      "sources": [
        {
          "name": "Holy Grail",
          "href": "#entry-holy-grail",
          "meta": "物品"
        }
      ],
      "effects": [
        {
          "name": "To Eternal Life!",
          "href": "#entry-to-eternal-life"
        }
      ]
    },
    "Immortal Hunger": {
      "effects": [
        {
          "name": "The Hunger",
          "href": "#entry-the-hunger"
        }
      ]
    },
    "Embraced Immortality": {
      "sources": [
        {
          "name": "Embrace Eternity",
          "href": "#entry-embrace-eternity"
        }
      ]
    },
    "Cursed Immortality (0)": {
      "sources": [
        {
          "name": "To Eternal Life!",
          "href": "#entry-to-eternal-life"
        }
      ]
    },
    "Whispers of Eternal Life": {
      "sources": [
        {
          "name": "To Seek the Grail",
          "href": "#entry-to-seek-the-grail"
        }
      ],
      "effects": [
        {
          "name": "Seek the Grail",
          "href": "#entry-seek-the-grail"
        }
      ]
    },
    "Waters of Eternal Life": {
      "effects": [
        {
          "name": "Quest for the Grail",
          "href": "#entry-quest-for-the-grail"
        }
      ]
    },
    "Immortal Body": {
      "effects": [
        {
          "name": "Bind Immortal Body",
          "href": "#entry-bind-immortal-body"
        },
        {
          "name": "Empower Immortal",
          "href": "#entry-empower-immortal"
        }
      ]
    },
    "Trials and Tribulations": {
      "sources": [
        {
          "name": "Trials and Tribulations",
          "href": "#entry-trials-and-tribulations",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Trials and Tribulations",
          "href": "#entry-trials-and-tribulations-modifier",
          "meta": "地点修正"
        }
      ]
    },
    "Ruined Supplies": {
      "sources": [
        {
          "name": "Rest nor Recourse",
          "href": "#entry-rest-nor-recourse"
        }
      ]
    },
    "Quickened Sands": {
      "sources": [
        {
          "name": "Quicken the Sands",
          "href": "#entry-quicken-the-sands"
        }
      ]
    },
    "Gawain's Immortality (0)": {
      "sources": [
        {
          "name": "Sir Gawain",
          "href": "#entry-sir-gawain"
        }
      ],
      "effects": [
        {
          "name": "Gawain's Immortal Body",
          "href": "#entry-gawain-s-immortal-body"
        }
      ]
    },
    "trials-and-tribulations-modifier": {
      "sources": [
        {
          "name": "Trials and Tribulations",
          "href": "#entry-trials-and-tribulations"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function IxthusArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
