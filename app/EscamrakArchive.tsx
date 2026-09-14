"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "escamrak",
  "name": "Escamrak",
  "number": "14",
  "theme": "escamrak-theme",
  "assetDir": "escamrak",
  "background": "god_select.png",
  "portrait": "god_game.png",
  "flavour": "",
  "caption": "Fleshcrafting、活体聚居地与神体重构",
  "maxTurns": "500 回合",
  "awaken": "Escamrak's Body 达到 300",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "传播积分",
  "unlockMethod": "传播 Fleshcrafting 知识；最后一道封印通过建造神体解锁",
  "powerRecovery": "每回合恢复 0.035 × 神力上限 × 难度恢复系数²；表中按系数 1 列示。",
  "specialVictory": "无",
  "core": [
    "用 <CrossReference name=\"Emerging Secrets\" /> 产生 <CrossReference name=\"Escamrak Secret\" />，通过 <CrossReference name=\"Learn Escamrak Secret\" /> 与 <CrossReference name=\"Study Fleshcrafting\" /> 提高魔法等级。",
    "通过 <CrossReference name=\"Teach Fleshcrafting\" /> 使人口开始实践 <CrossReference name=\"Fleshcrafters\" />；新传播的人口计入封印积分。",
    "用 <CrossReference name=\"Distribute Knowledge\" /> 提升人口掌握的等级，强度达到 300 后形成 <CrossReference name=\"Living Settlement\" />。",
    "第八道封印开放 <CrossReference name=\"Merge and Grow\" />，召集 <CrossReference name=\"Summoned Fleshcrafters\" /> 与三级法师建造 <CrossReference name=\"Escamrak's Body\" />。",
    "神体达到 300 后苏醒，以军队形式操控 <CrossReference name=\"Escamrak\" href=\"#entry-escamrak-army\" />，扩散 <CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" />；身体被摧毁后可重新建造。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "Supplicant 开局从四项特殊能力中选择一项，并掌握一级 Mastery of Fleshcrafting。没有专属 Holy Order；普通教团与 Witches Holy Order 加入 Revelry of the Body 教义。"
  },
  "supplicant": {
    "name": "Supplicant",
    "image": "Supplicant.png",
    "stats": "Might 2；Lore 2；Intrigue 4；Command 3；HP 5",
    "abilities": [
      {
        "name": "Tough Scales",
        "text": "Might +1，Defence +2。"
      },
      {
        "name": "Denser Brain Matter",
        "text": "Lore +1。计时从 15 开始，每次归零后的下一次结算增加 1 层 <CrossReference name=\"Fleshcrafting Knowledge\" />，然后重置为 15；知识上限为 6。"
      },
      {
        "name": "Chameleon Skin",
        "text": "Intrigue +1，提供 <CrossReference name=\"Camouflage\" />。"
      },
      {
        "name": "Pheromonal Confidence",
        "text": "Command +1；同地其他己方 Agent 执行挑战时，每回合额外增加 2 进度。"
      }
    ]
  },
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Emerging Secrets"
      ],
      "powerRecovery": "神力上限 1；每回合恢复 0.035 × 难度恢复系数"
    },
    {
      "seal": 1,
      "progress": 20,
      "agents": 2,
      "reward": [
        "Temptations of Flesh"
      ],
      "powerRecovery": "神力上限 2；每回合恢复 0.07 × 难度恢复系数"
    },
    {
      "seal": 2,
      "progress": 60,
      "agents": 3,
      "reward": [],
      "powerRecovery": "神力上限 3；每回合恢复 0.105 × 难度恢复系数"
    },
    {
      "seal": 3,
      "progress": 120,
      "agents": 3,
      "reward": [
        "Endless Regrowth"
      ],
      "powerRecovery": "神力上限 4；每回合恢复 0.14 × 难度恢复系数"
    },
    {
      "seal": 4,
      "progress": 200,
      "agents": 4,
      "reward": [
        "Distribute Knowledge"
      ],
      "powerRecovery": "神力上限 5；每回合恢复 0.175 × 难度恢复系数"
    },
    {
      "seal": 5,
      "progress": 325,
      "agents": 4,
      "reward": [],
      "powerRecovery": "神力上限 6；每回合恢复 0.21 × 难度恢复系数"
    },
    {
      "seal": 6,
      "progress": 475,
      "agents": 5,
      "reward": [
        "Rampage"
      ],
      "powerRecovery": "神力上限 7；每回合恢复 0.245 × 难度恢复系数"
    },
    {
      "seal": 7,
      "progress": 575,
      "agents": 5,
      "reward": [],
      "powerRecovery": "神力上限 8；每回合恢复 0.28 × 难度恢复系数"
    },
    {
      "seal": 8,
      "progress": 700,
      "agents": 6,
      "reward": [
        "Merge and Grow",
        "Escamrak's Body"
      ],
      "powerRecovery": "神力上限 9；每回合恢复 0.315 × 难度恢复系数"
    },
    {
      "seal": 9,
      "progress": 1050,
      "agents": 6,
      "reward": [
        "建造神体至 300；苏醒"
      ],
      "powerRecovery": "神力上限 10；每回合恢复 0.35 × 难度恢复系数",
      "progressText": "神体 300"
    }
  ],
  "powers": [
    {
      "name": "Emerging Secrets",
      "seal": 0,
      "cost": 1,
      "icon": "flesh_secret.png",
      "effect": "创建一个 <CrossReference name=\"Escamrak Secret\" />，允许多次创建。",
      "limit": "目标为 the Elder Tomb，或存在 Fleshcrafters、掌握 Fleshcrafting 的人物单位或统治者的地点。"
    },
    {
      "name": "Temptations of Flesh",
      "seal": 1,
      "cost": 1,
      "icon": "flesh_temptation.png",
      "effect": "永久标记目标，使学习知识和研究 Fleshcrafting 的基础执行意愿增加：人物单位 +60，统治者 +40。",
      "limit": "目标已有 Aware of Fleshcrafting，尚未受该神力诱惑；人物单位须为非玩家控制。"
    },
    {
      "name": "Endless Regrowth",
      "seal": 3,
      "cost": 2,
      "icon": "flesh_regen.png",
      "effect": "赋予 <CrossReference name=\"Endless Regrowth\" href=\"#entry-endless-regrowth-trait\" />，每回合恢复 1 HP；满血后开始累积突变，并加深个人 Shadow。",
      "limit": "非玩家控制的人物单位或统治者；Mastery of Fleshcrafting 至少二级，尚无同名特质。"
    },
    {
      "name": "Distribute Knowledge",
      "seal": 4,
      "cost": 2,
      "icon": "flesh_teachpops.png",
      "effect": "将 Fleshcrafters 的等级提高到当地人物和统治者中的最高 Mastery of Fleshcrafting 等级。一级升二级或二级升三级使当地 Shadow +4%；一级直接升三级使 Shadow +10%。",
      "limit": "Fleshcrafters 等级低于 3，强度达到当前等级 × 100；当地存在掌握更高等级 Fleshcrafting 的人物或统治者。"
    },
    {
      "name": "Rampage",
      "seal": 6,
      "cost": 3,
      "icon": "flesh_army.png",
      "effect": "使 <CrossReference name=\"Flesh Army\" /> 转入黑暗势力并进入狂暴状态，随后自主摧毁 Shadow 低于 75% 的人类聚居地。",
      "limit": "目标为尚未狂暴的 Flesh Army。"
    },
    {
      "name": "Merge and Grow",
      "seal": 8,
      "cost": 3,
      "icon": "flesh_merge.png",
      "effect": "命令人物前往 the Elder Tomb 执行 <CrossReference name=\"Merge into Escamrak\" />。选择 <CrossReference name=\"Living Settlement\" /> 时，将全部人口变为 <CrossReference name=\"Summoned Fleshcrafters\" />，原聚居地沦为废墟。",
      "limit": "Escamrak 尚无肉身；目标为三级 Mastery of Fleshcrafting 人物或统治者，或 Living Settlement。"
    }
  ],
  "sections": [
    {
      "id": "spells",
      "title": "法术",
      "media": true,
      "items": [
        {
          "name": "Fleshcrafting: Enhancement",
          "image": "fleshcraft_modify.png",
          "meta": "Lore",
          "statLine": "Complexity: 3　Profile: 0　Menace: 0　XP: 8",
          "text": "选择 <CrossReference name=\"Hulking Muscles\" />、<CrossReference name=\"Backup Brains\" />、<CrossReference name=\"More Eyes\" /> 或 <CrossReference name=\"Permanent Smile\" />，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。",
          "limit": "Mastery of Fleshcrafting 至少一级。",
          "location": "施法者所在地点。"
        },
        {
          "name": "Fleshcrafting: Craft Minion",
          "image": "flesh_minion1.png",
          "meta": "Lore",
          "statLine": "Complexity: 15　Profile: 0　Menace: 0　XP: 29",
          "text": "一级可制作 <CrossReference name=\"Crafted Beast\" />；二级增加 <CrossReference name=\"Monstrosity\" />、<CrossReference name=\"Warped Crow\" />；三级增加 <CrossReference name=\"Flesh Hulk\" />、<CrossReference name=\"Ravenous Abomination\" />。各自造成的 Menace 见随从条目。非玩家控制的施法者个人 Shadow 增加 2% × 魔法等级。",
          "limit": "Mastery of Fleshcrafting 至少一级；随从占用 Command，必要时替换已有随从。",
          "location": "施法者所在地点。"
        },
        {
          "name": "Fleshcrafting: Reinforce Self",
          "image": "flesh_hp.png",
          "meta": "Lore",
          "statLine": "Complexity: 5　Profile: 0　Menace: 0　XP: 12",
          "text": "最大 HP 和当前 HP 均增加 2，个人 Shadow +5%；完成后移除该法术。",
          "limit": "达到二级 Mastery of Fleshcrafting 后获得，每个人物仅使用一次。",
          "location": "施法者所在地点。"
        },
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "image": "flesh_makeitem.png",
          "meta": "Lore",
          "statLine": "Complexity: 3　Profile: 0　Menace: 0　XP: 8",
          "text": "选择制作 <CrossReference name=\"Writhing Flesh\" />、<CrossReference name=\"Acid Sack\" />、<CrossReference name=\"Bone Sword\" />、<CrossReference name=\"Bone Darts\" /> 或 <CrossReference name=\"Flesh Tome\" />。优先将第一个 HP 大于 1 的随从降至 1 HP；无此随从时，施法者消耗 2 HP。非玩家控制者个人 Shadow +5%。",
          "limit": "Mastery of Fleshcrafting 至少二级，有空物品槽；自身 HP 大于 2，或至少一个随从 HP 大于 1。",
          "location": "施法者所在地点。"
        },
        {
          "name": "Fleshcrafting: Abominize Self",
          "image": "flesh_abominized.png",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 0　Menace: 0　XP: 42",
          "text": "转化为自主行动的 <CrossReference name=\"Abomination\" />，所有基础属性 +1，继承最大 HP 并恢复满血，个人 Shadow 达到 100%，失去灵魂。完成时增加 10 Profile、10 Menace。",
          "limit": "达到三级 Mastery of Fleshcrafting 后获得；玩家 Agent 转化后脱离直接控制。",
          "location": "施法者所在地点。"
        },
        {
          "name": "Fleshcrafting: Grow Horror",
          "image": "flesh_abom_minion_1.png",
          "meta": "Lore",
          "statLine": "Complexity: 80　Profile: 0　Menace: 0　XP: 102",
          "text": "创建 <CrossReference name=\"Carnivorous Plant\" /> 与一个 <CrossReference name=\"Escamrak Secret\" />。完成时增加 10 Profile、10 Menace。",
          "limit": "由 Abomination 持有。",
          "location": "没有 Carnivorous Plant 的人类聚居地。"
        },
        {
          "name": "Fleshcrafting: Construct Titan",
          "image": "flesh_abom_minion_2.png",
          "meta": "Lore",
          "statLine": "Complexity: 80　Profile: 0　Menace: 0　XP: 102",
          "text": "当地人口减少 1，生成 <CrossReference name=\"Horrid Titan\" /> 并留下一个 <CrossReference name=\"Escamrak Secret\" />。完成时增加 10 Profile、20 Menace。",
          "limit": "由 Abomination 持有。",
          "location": "人类聚居地。"
        },
        {
          "name": "Fleshcrafting: Spawn Mind-Shaper",
          "image": "flesh_abom_minion_3.png",
          "meta": "Lore",
          "statLine": "Complexity: 80　Profile: 0　Menace: 0　XP: 102",
          "text": "生成 <CrossReference name=\"Mind-Shaper\" /> 并留下一个 <CrossReference name=\"Escamrak Secret\" />。完成时增加 10 Profile、5 Menace。",
          "limit": "由 Abomination 持有。",
          "location": "人类聚居地。"
        },
        {
          "name": "Fleshcraft: Attack Channeler",
          "image": "flesh_geo_attack.png",
          "meta": "Lore",
          "statLine": "Complexity: 10　Profile: 0　Menace: 0　XP: 21",
          "text": "随机攻击一个正在引导善方任务的单位。伤害为向上取整的“√（Fleshcrafting 等级 × Twisted Locus 强度 × Lore）× 0.15”；伤害逐点由 Arcane Fortress 抵挡或随机分配给人物与随从。人物存活且实际受伤时知晓 Fleshcrafting，Chosen One 以外者对其极端喜欢；HP 降至最大值的 75% 或以下时停止引导。命中后消耗 20 点 Locus 强度，完成时增加 5 Profile、5 Menace。",
          "limit": "Mastery of Fleshcrafting 至少二级，携带 Flesh Tome；另一个地点存在正在引导善方任务的单位。",
          "location": "<CrossReference name=\"Twisted Locus\" />。"
        },
        {
          "name": "Fleshcraft: Grasping Land",
          "image": "flesh_geo_army.png",
          "meta": "Lore",
          "statLine": "Complexity: 300　Profile: 0　Menace: 0　Danger: 120　XP: 276",
          "text": "引导期间，每回合对 <CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" /> 上正在军队战斗中的非 Dark Empire 人类军队造成 8 HP 伤害；多个施法者叠加。每回合消耗 6 点 Twisted Locus 强度。完成时增加 5 Profile。 引导时暴露于魔法攻击。",
          "limit": "Mastery of Fleshcrafting 至少二级，携带 Flesh Tome；Locus 强度至少 10。",
          "location": "<CrossReference name=\"Twisted Locus\" />。"
        },
        {
          "name": "Fleshcraft: Blasphemous Rain",
          "image": "flesh_geo_rainofblood.png",
          "meta": "Lore",
          "statLine": "Complexity: 300　Profile: 0　Menace: 0　Danger: 120　XP: 276",
          "text": "引导期间，每回合使世界地表与地下已有的 <CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" /> 增加 5，地块火山损伤减少 2。每回合消耗 6 点 Twisted Locus 强度。完成时增加 5 Profile、5 Menace。 引导时暴露于魔法攻击。",
          "limit": "Mastery of Fleshcrafting 至少三级，携带 Flesh Tome；Locus 强度至少 10。",
          "location": "<CrossReference name=\"Twisted Locus\" />。"
        }
      ]
    },
    {
      "id": "traits",
      "title": "人物特质",
      "media": false,
      "items": [
        {
          "name": "Aware of Fleshcrafting",
          "text": "知晓 Fleshcrafting 的存在，开放 <CrossReference name=\"Study Fleshcrafting\" />。掌握魔法的人物与当地人口会传播这项认知；己方 Agent 在回合结束时获得，Awareness 大于 0 的人物也会获得。<CrossReference name=\"Temptations of Flesh\" /> 可进一步提高学习意愿。"
        },
        {
          "name": "Fleshcrafting Knowledge",
          "text": "储存学习所得知识，最高 6 层。<CrossReference name=\"Learn Escamrak Secret\" />、<CrossReference name=\"Delve into Library\" /> 及对应统治者行动增加知识；<CrossReference name=\"Study Fleshcrafting\" /> 消耗知识提升 Mastery of Fleshcrafting。"
        },
        {
          "name": "Mastery of Fleshcrafting",
          "text": "魔法掌握程度，最高三级，并免疫老年死亡。一级开放 <CrossReference name=\"Fleshcrafting: Enhancement\" />、<CrossReference name=\"Fleshcrafting: Craft Minion\" />；二级开放 <CrossReference name=\"Fleshcrafting: Reinforce Self\" />、<CrossReference name=\"Fleshcrafting: Sculpt Flesh\" />；三级开放 <CrossReference name=\"Fleshcrafting: Abominize Self\" />。统治者获得相应 Fleshcrafting 行动。\n每回合以 10% 概率向尚不知晓该魔法的当地统治者或人物传播认知，喜欢或厌恶传播者会相应影响对 Fleshcrafting 的偏好。Warlock 招募时也可选择一级掌握。"
        },
        {
          "name": "Hulking Muscles",
          "text": "Might +1，可通过重新施展 Fleshcrafting: Enhancement 更换为其他属性改造。"
        },
        {
          "name": "Backup Brains",
          "text": "Lore +1，可通过重新施展 Fleshcrafting: Enhancement 更换为其他属性改造。"
        },
        {
          "name": "More Eyes",
          "text": "Intrigue +1，可通过重新施展 Fleshcrafting: Enhancement 更换为其他属性改造。"
        },
        {
          "name": "Permanent Smile",
          "text": "Command +1，可通过重新施展 Fleshcrafting: Enhancement 更换为其他属性改造。"
        },
        {
          "name": "Endless Regrowth",
          "text": "受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。\n同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 <CrossReference name=\"Tooth Armor\" />、<CrossReference name=\"Extra Arms\" />、<CrossReference name=\"Cannibalistic Hunger\" />、<CrossReference name=\"Bone Spines\" />、<CrossReference name=\"Pus Growths\" />、<CrossReference name=\"Terrifying Appearance\" />、<CrossReference name=\"Gibbering Mouths\" />、<CrossReference name=\"Second Head\" />、<CrossReference name=\"Extra Organs\" />、<CrossReference name=\"Living Tumors\" />。",
          "id": "endless-regrowth-trait"
        },
        {
          "name": "Tooth Armor",
          "text": "人物单位 Defence +1。"
        },
        {
          "name": "Extra Arms",
          "text": "人物单位 Attack +1。"
        },
        {
          "name": "Cannibalistic Hunger",
          "text": "食人冲动初始 30，此后每回合 +1，提高攻击拥有灵魂的非玩家人物的意愿；统治者可执行 <CrossReference name=\"Cannibalize Staff\" />。杀死拥有灵魂的人物后冲动清零，个人 Shadow +50%、Sanity −15；若极端喜欢死者，则改为 Shadow +100%、Sanity −30，并变为极端厌恶自己。"
        },
        {
          "name": "Bone Spines",
          "text": "战斗开始时直接对敌方人物造成 2 HP 伤害，穿透 Defence。"
        },
        {
          "name": "Pus Growths",
          "text": "每回合使所在地 Plague Immunity 减少 2。"
        },
        {
          "name": "Terrifying Appearance",
          "text": "统治者每回合使当地 Unrest 减少 1。"
        },
        {
          "name": "Gibbering Mouths",
          "text": "每回合使所在地人类聚居地 Madness 增加 1。"
        },
        {
          "name": "Second Head",
          "text": "人物单位 Lore +1；统治者每回合 Gold +2。"
        },
        {
          "name": "Extra Organs",
          "text": "人物单位最大 HP 与当前 HP 各增加 8。"
        },
        {
          "name": "Living Tumors",
          "text": "获得时使当地 Shadow 增加 50%。随后使用所有持有者共享的计数器：先倒数 10 次结算，归零后每次有 5% 概率使所在地 Shadow 再增加 50%，成功后重置倒数。"
        },
        {
          "name": "Will be Infested",
          "text": "由 <CrossReference name=\"Mind-Shaper\" /> 植入。下次执行 Rest 时，个人 Shadow +50%，极端喜欢 Fleshcrafting，并获得 <CrossReference name=\"Aware of Fleshcrafting\" />，随后移除此特质。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Escamrak Secret",
          "image": "flesh_secret.png",
          "text": "提供 <CrossReference name=\"Learn Escamrak Secret\" />、统治者学习行动与两种摧毁知识的任务。允许同地存在多个独立修正。",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Fleshcrafters",
          "image": "fleshcraft.png",
          "text": "等级为 1–3，强度上限为等级 × 100。达到 300 时，聚居地转化为 <CrossReference name=\"Living Settlement\" />。人口会逐渐学会增产、治病、改造劳工和繁衍：对应粮食产出 ×（1 + 1.5 × 等级），一级至三级分别为 ×2.5、×4、×5.5、每回合 Plague −8 × 等级、Prosperity +0.75 且每回合 Madness +0.5、未达到人口或粮食承载上限时每回合人口 +1。\n强度不超过 100 时有机会向相邻非 Alliance 人类聚居地传播一级知识；当地人物也会逐渐知晓 Fleshcrafting。\n只要尚未学会增产或治病，或强度 >100 且尚未学会改造劳工，每回合检查新效果：Famine ≥125 时优先学会增产并减少 200 Famine；Plague ≥125 时学会治病并减少 200 Plague；强度 >100 且 Prosperity <35% 时学会改造劳工；强度 >100 且人口 <5 时学会繁衍。没有触发上述条件时，以 10% 概率从当前允许学习的效果中随机选择。",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度低于等级上限时，每回合增加 1。",
            "external": "低于等级上限时：当地 Shadow 每 1% 每回合增加 0.05；Famine、Plague 每点各增加 0.1，Madness 每点增加 0.05。\n低于等级上限且存在 Deep One Cult 时，每回合增加 2，同时 Deep One Cult 增加 0.5。\n低于等级上限时，统治者对 Fleshcrafting 的偏好等级每回合直接加到强度上，范围 −2 至 +2。\n<CrossReference name=\"Discourage Fleshcraft\" /> 完成时强度 −50，并追加 15 回合抑制；低于等级上限时，每个抑制回合减少 5 ×（1 − 当地 Shadow）。\n强度低于 300 时，Alliance 每回合减少 25；统治者 Awareness ×（1 − 个人 Shadow）× 5 每回合扣除。\n一级且强度低于 300 时，每个相邻 Living Settlement 或三级 Fleshcrafters 地点，每回合使其减少 5 ×（1 − 当地 Shadow）。\n<CrossReference name=\"Distribute Knowledge\" /> 提高等级及对应上限。\n<CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" /> 完成聚居地转化时，将等级设为至少 3、强度设为 300。"
          }
        },
        {
          "name": "Escamrak's Body",
          "image": "flesh_escammodifier_1.png",
          "text": "吸收 <CrossReference name=\"Summoned Fleshcrafters\" />，强度达到 300 时生成可控制的 <CrossReference name=\"Escamrak\" href=\"#entry-escamrak-army\" />；首次完成打破最后一道封印，并在当地创建 200 点 Living Terrain。",
          "initialValue": "首次 50；重建 150。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Summoned Fleshcrafters\" /> 抵达时，每点现有 HP 转换 0.5 强度；重建时基础转换率为 1。\n<CrossReference name=\"Merge into Escamrak\" /> 将首次转换率从 0.5 提高至 1，之后每次再增加 1。"
          }
        },
        {
          "name": "Living Terrain",
          "image": "flesh_god_landcorruption.png",
          "text": "强度达到 300 后向邻地扩散，人类聚居地转化为 <CrossReference name=\"Living Settlement\" />；Orc Camp、Deep One Sanctum 和女巫聚落遭到摧毁。空地或城市废墟会成为 <CrossReference name=\"Twisted Landscape\" />。在地点沦为废墟后保留。",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合增加 3，最高 300。",
            "external": "每个已达到 300 的相邻 Living Terrain，每回合增加 3；不存在该修正时创建。\n<CrossReference name=\"Escamrak\" href=\"#entry-escamrak-army\" /> 停留时，每回合增加 20；无修正时创建。\n同地和相邻 <CrossReference name=\"Twisted Locus\" /> 每回合增加其强度 × 0.5；无修正时创建。\n<CrossReference name=\"Fleshcraft: Blasphemous Rain\" /> 引导期间每回合增加 5。\n<CrossReference name=\"Force Back Flesh\" /> 减少当前强度 ×（0.65 + 执行者 Might × 0.05），最低 0。\n<CrossReference name=\"Scorched Earth\" /> 移除修正；活体地形被军队夷平时也移除。"
          },
          "id": "living-terrain-modifier"
        },
        {
          "name": "Twisted Locus",
          "image": "flesh_god_corruptlocus.png",
          "text": "提供三项 Flesh Geomancy 法术，并向同地与邻地扩散 <CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" />；有火山损伤的地点暂缓扩散。",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度不高于 100 时，每回合增加 5。",
            "external": "<CrossReference name=\"Fleshcraft: Attack Channeler\" /> 命中目标后减少 20。\n<CrossReference name=\"Fleshcraft: Grasping Land\" /> 和 <CrossReference name=\"Fleshcraft: Blasphemous Rain\" /> 引导时每回合各减少 6。"
          }
        },
        {
          "name": "Enhanced Defenders",
          "image": "flesh_ruler_defense.png",
          "text": "每回合使当地现有城防增加 50。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Fleshcraft: Enhance Defenders\" /> 创建；聚居地沦为废墟时移除。"
          }
        },
        {
          "name": "Enhanced Workers",
          "image": "flesh_ruler_worker.png",
          "text": "当地 Prosperity +0.35。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Fleshcraft: Enhance Workers\" /> 创建；聚居地沦为废墟时移除。"
          }
        },
        {
          "name": "Enhanced Merchants",
          "image": "flesh_ruler_trade.png",
          "text": "当地有 Trade Route 时，Prosperity +0.65。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Fleshcraft: Enhance Merchants\" /> 创建；聚居地沦为废墟时移除。"
          }
        },
        {
          "name": "Carnivorous Plant",
          "image": "flesh_abom_minion_1.png",
          "text": "每逢 10 的倍数回合，当地人口 −1，自身 Menace 增加 20；当地 <CrossReference name=\"Escamrak Secret\" /> 少于两个时创建一个。Menace 起始为 20。英雄可执行 <CrossReference name=\"Destroy Carnivorous Plant\" /> 移除它。",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Condemned Rulers",
          "image": "flesh_nomouth.png",
          "text": "每名被囚者每回合使当地 Madness 增加 1。使统治者执行镇压、征税、强化军民、Bind the Will 和 Exploit Populace 的意愿各减少 10。地点沦为废墟后保留。\n代码尝试在二级以上且强度超过 100 的 Fleshcrafters 地点，将暴动杀死的统治者记录于此；常规暴动路径能否满足其击杀者检查条件未找到确证。",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n当地 Shadow 每 1% 使未达等级上限的 <CrossReference name=\"Fleshcrafters\" /> 每回合额外增加 0.05；它也会削弱抑制 Fleshcrafting 的部分减量。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "<CrossReference name=\"Teach Fleshcrafting\" /> 完成时当地增加 2%；同名统治者行动也增加 2%。\n<CrossReference name=\"Distribute Knowledge\" /> 将一级提升到二级、二级提升到三级时增加 4%；一级直接提升到三级时增加 10%。\n<CrossReference name=\"Living Settlement\" /> 建立时达到 100%，此后每回合增加 10%，最高 100%。\n<CrossReference name=\"Living Tumors\" /> 形成时当地增加 50%；此后每经过冷却，再每回合以 5% 概率增加 50%，成功后重新开始 10 回合冷却。"
          },
          "initialValue": ""
        },
        {
          "name": "Madness",
          "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。\n每 1 点 Madness 使未达等级上限的 <CrossReference name=\"Fleshcrafters\" /> 每回合额外增加 0.05。",
          "image": "./iastur/madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Fleshcrafters\" /> 学会改造劳工后，每回合增加 0.5。\n<CrossReference name=\"Condemned Rulers\" /> 每名被囚统治者每回合增加 1。\n<CrossReference name=\"Gibbering Mouths\" /> 持有者在人类聚居地时，每回合增加 1。\n<CrossReference name=\"Fleshcraft: Exploit Populace\" /> 完成时增加 25。\n<CrossReference name=\"Revelry of the Body\" /> 为 −1 时，满足 Death 转化条件的每座 Temple 每回合增加 1。"
          },
          "initialValue": ""
        },
        {
          "name": "Lingering Resentment",
          "text": "居民对统治者残酷惩罚的长期怨恨，每回合使当地 Unrest 增加 2。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Intrigue 衰减：每 1 点 Intrigue 使强度每回合 −1；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −2；未找到游戏内切换入口。",
            "external": "<CrossReference name=\"Fleshcraft: Bind Will\" /> 完成时创建强度 100 的修正。\nUnrest 达到 300 并触发危机时清除。"
          },
          "initialValue": ""
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。",
            "external": "<CrossReference name=\"Lingering Resentment\" /> 每回合增加 2。\n<CrossReference name=\"Madness\" /> 超过 100 时，每回合增加其强度 ÷ 75。\n<CrossReference name=\"Cannibalize Staff\" /> 完成时增加 50。\n<CrossReference name=\"Fleshcraft: Bind Will\" /> 完成时减少 150。\n<CrossReference name=\"Terrifying Appearance\" /> 持有者作为当地统治者时，每回合减少 1。\n苏醒后的 <CrossReference name=\"Living Settlement\" /> 每回合减少 25。"
          },
          "initialValue": ""
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "<CrossReference name=\"Horrid Titan\" /> 停留时每回合增加 3。\n<CrossReference name=\"Scorched Earth\" /> 完成时增加 100。"
          },
          "initialValue": ""
        },
        {
          "name": "Arcane Fortress",
          "text": "保护地点免受魔法攻击，吸收敌对法师造成的部分伤害；地点沦为废墟后仍保留。",
          "image": "./iastur/arcane-fortress.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "<CrossReference name=\"Growing Cocoon\" /> 每回合增加 15；不存在时创建，已有强度至少 100 时停止增加。\n拦截 <CrossReference name=\"Fleshcraft: Attack Channeler\" /> 的一次伤害时减少 10，最低 0。"
          },
          "initialValue": ""
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "media": true,
      "items": [
        {
          "name": "Living Settlement",
          "image": "flesh_city.png",
          "text": "初始完全 Enshadowed，此后每回合恢复 10% Shadow；人口上限 250。城防尚未归零时，每回合恢复最大城防的 10%，最多 20。对当地实施夷平、掠夺或占领的非驻军，每回合受到向下取整的“人口 × 5%”伤害。\n苏醒后加入 Escamrak 的独立社会，每回合 Unrest、Political Agitation、Political Instability 各减少 25。清除 Banditry、Deep One Cult；统治者可 Study Living Settlement。"
        },
        {
          "name": "Twisted Library",
          "image": "flesh_library.png",
          "text": "由 Twist Library 转化普通 Library。每回合有 20% 概率在当地没有 Escamrak Secret 时创建一个；提供 Propagate Knowledge。"
        },
        {
          "name": "Twisted Landscape",
          "image": "flesh_creepland0_sub.png",
          "text": "Living Terrain 侵蚀空地或废墟后形成，可由 Escamrak 改造成下列形态。被夷平时清除 Living Terrain，并留下火山损伤，暂缓再次侵蚀。"
        },
        {
          "name": "Spawning Grounds",
          "image": "flesh_creepland1_sub.png",
          "text": "首次经过 5 回合后生成 Maddened Spawn，设施 Menace +35。之后间隔从 20 开始，每次额外累加 0–4 回合；该间隔由所有同类地点共享。"
        },
        {
          "name": "Impassible Nets",
          "image": "flesh_creepland2_sub.png",
          "text": "每回合对当地军队造成其当前 HP 的 25% 伤害，向下取整且至少 1；Horrid Titan 与 Escamrak 免疫。每次作用使设施 Menace +5。"
        },
        {
          "name": "Growing Cocoon",
          "image": "flesh_creepland3_sub.png",
          "text": "每回合创建或强化 Arcane Fortress，强度增加 15；已有强度至少 100 时停止增加。"
        },
        {
          "name": "Bone Libraries",
          "image": "flesh_creepland4_sub.png",
          "text": "提供 Delve into Library，可将人物的 Fleshcrafting Knowledge 补至 6。"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Writhing Flesh",
          "image": "flesh_I_heal.png",
          "text": "在战斗轮开始时，HP 低于最大值的一半（整数除法），或至少损失 2 HP 时自动消耗，恢复 5 HP，最高恢复至满血。非玩家控制者使用时，若战斗具有图形界面，个人 Shadow +20%、Sanity −5。"
        },
        {
          "name": "Acid Sack",
          "image": "flesh_I_acidsack.png",
          "text": "战斗轮开始时自动消耗，对自身、敌方人物及其全部随从各造成 2 点伤害，先消耗 Defence；自身 HP 最低保留 1。同一次战斗最多使用一个。"
        },
        {
          "name": "Bone Sword",
          "image": "flesh_I_boneweapon.png",
          "text": "Might +2；Menace +5。"
        },
        {
          "name": "Bone Darts",
          "image": "flesh_I_bonedarts.png",
          "text": "Might +1；Intrigue +1。"
        },
        {
          "name": "Flesh Tome",
          "image": "flesh_I_tome.png",
          "text": "Lore +1；Menace +5。在 <CrossReference name=\"Twisted Locus\" /> 提供三项 Flesh Geomancy 法术。"
        }
      ]
    },
    {
      "id": "minions",
      "title": "随从",
      "media": true,
      "items": [
        {
          "name": "Crafted Beast",
          "image": "flesh_minion1.png",
          "text": "一级 Mastery of Fleshcrafting 起可制作。制作时 Menace +0。",
          "stats": "HP 1；Attack 1；Defence 1；Command 1"
        },
        {
          "name": "Monstrosity",
          "image": "flesh_minion2.png",
          "text": "二级起可制作。Regeneration：受伤时每回合恢复 1 HP，最高恢复至满血。制作时 Menace +4。",
          "stats": "HP 2；Attack 2；Defence 2；Command 1"
        },
        {
          "name": "Warped Crow",
          "image": "flesh_minion2_gold.png",
          "text": "二级起可制作。Agile Thief：身处人类聚居地时每回合为主人增加 1 Gold，同队多个不叠加。制作时 Menace +2。",
          "stats": "HP 2；Attack 1；Defence 2；Command 1"
        },
        {
          "name": "Flesh Hulk",
          "image": "flesh_minion3.png",
          "text": "三级可制作。Regeneration：受伤时每回合恢复 6 HP，最高恢复至满血。制作时 Menace +8。",
          "stats": "HP 6；Attack 2；Defence 4；Command 1"
        },
        {
          "name": "Ravenous Abomination",
          "image": "flesh_minion3_glasscannon.png",
          "text": "三级可制作。Regeneration：受伤时每回合恢复 1 HP，最高恢复至满血。制作时 Menace +8。",
          "stats": "HP 2；Attack 8；Defence 2；Command 1"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "media": true,
      "items": [
        {
          "name": "Abomination",
          "image": "flesh_abominized.png",
          "text": "由人物施展 <CrossReference name=\"Fleshcrafting: Abominize Self\" /> 转化，保留姓名，自主行动。个人 Shadow 达到 100%，失去灵魂，极端喜欢 Fleshcrafting。每回合恢复 1 HP。先完善自身属性、随从和物品，再前往尚无 Fleshcrafters 的人类聚居地制造血肉造物。\n被人物击杀时，击杀者损失 5 HP（最低保留 1）并增加 50% 个人 Shadow。",
          "stats": "Might 继承 +1；Lore 继承 +1；Intrigue 继承 +1；Command 继承 +1；HP 继承原最大值，并恢复满血",
          "abilities": [
            {
              "name": "Fleshcrafting",
              "text": "保留 <CrossReference name=\"Fleshcrafting: Enhancement\" />、<CrossReference name=\"Fleshcrafting: Craft Minion\" />、<CrossReference name=\"Fleshcrafting: Sculpt Flesh\" />，未使用过的 <CrossReference name=\"Fleshcrafting: Reinforce Self\" /> 也可继续使用。",
              "id": "abomination-fleshcrafting"
            },
            {
              "name": "Fleshcrafting: Grow Horror",
              "text": "<CrossReference name=\"Fleshcrafting: Grow Horror\" />",
              "id": "abomination-fleshcrafting-grow-horror"
            },
            {
              "name": "Fleshcrafting: Construct Titan",
              "text": "<CrossReference name=\"Fleshcrafting: Construct Titan\" />",
              "id": "abomination-fleshcrafting-construct-titan"
            },
            {
              "name": "Fleshcrafting: Spawn Mind-Shaper",
              "text": "<CrossReference name=\"Fleshcrafting: Spawn Mind-Shaper\" />",
              "id": "abomination-fleshcrafting-spawn-mind-shaper"
            }
          ]
        },
        {
          "name": "Mind-Shaper",
          "image": "flesh_abom_minion_3.png",
          "text": "自主寻找个人 Shadow 未满、尚未极端喜欢 Fleshcrafting 的人物，前往其位于人类聚居地的家乡。存活满 25 回合起，每回合损失 1 HP；找不到目标时消亡。",
          "stats": "Might 1；Lore 2；Intrigue 5；Command 1；HP 5",
          "abilities": [
            {
              "name": "Infest Home Location",
              "text": "执行地点为目标人物的家乡聚居地。完成时为目标添加 <CrossReference name=\"Will be Infested\" />，随后自身死亡。",
              "meta": "Intrigue",
              "statLine": "Complexity: 45　Profile: 0　Menace: 0　XP: 66",
              "id": "mind-shaper-infest-home-location"
            }
          ]
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "media": true,
      "items": [
        {
          "name": "Twist Library",
          "image": "flesh_library_corrupt.png",
          "meta": "Lore",
          "statLine": "Complexity: 30　Profile: 70　Menace: 0　XP: 49",
          "text": "将普通 Library 替换为 Twisted Library；完成时增加 5 Profile、6 Menace。",
          "location": "已渗透的 Library。",
          "limit": "掌握 Fleshcrafting。"
        },
        {
          "name": "Propagate Knowledge",
          "image": "flesh_library_corrupt.png",
          "meta": "Lore",
          "statLine": "Complexity: 40　Profile: 0　Menace: 0　XP: 60",
          "text": "支付 40 Gold，创建最多等于 Fleshcrafting 等级数量的 Escamrak Secret；优先放在本地，再逐个放入尚无该修正的相邻地点。完成时增加 2 Profile、5 Menace。",
          "location": "Twisted Library 所在地点。",
          "limit": "掌握 Fleshcrafting，至少有 40 Gold。"
        },
        {
          "name": "Camouflage",
          "image": "Supp_Hide.png",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "取消追击或干扰此 Agent 的任务并进入隐藏状态；保持隐藏时每回合 Profile、Menace 各减少 1，移动或执行其他行动时结束。",
          "location": "Agent 所在地点。",
          "limit": "具有 Chameleon Skin。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Destroy Escamrak Secret",
          "image": "flesh_secret.png",
          "meta": "Lore",
          "statLine": "Complexity: 60　Profile: 60　Menace: 0　XP: 82",
          "positiveTags": "无",
          "negativeTags": "Fleshcrafting",
          "text": "移除 Escamrak Secret，执行者知晓 Fleshcrafting。",
          "location": "Escamrak Secret 所在地点。",
          "limit": ""
        },
        {
          "name": "Discourage Fleshcraft",
          "image": "flesh_stoplearning.png",
          "meta": "Command",
          "statLine": "Complexity: 20　Profile: 70　Menace: 0　XP: 36",
          "positiveTags": "无",
          "negativeTags": "Fleshcrafting",
          "text": "Fleshcrafters 强度 −50，并增加 15 回合抑制时间；当地统治者知晓 Fleshcrafting，个人 Shadow 低于 50% 时，对 Fleshcrafting 的态度降低一级。完成时增加 5 Profile。",
          "location": "有 Fleshcrafters，且尚未成为 Living Settlement 的地点。",
          "limit": ""
        },
        {
          "name": "Force Back Flesh",
          "image": "flesh_fire_hero.png",
          "meta": "Might",
          "statLine": "Complexity: 30　Profile: 80　Menace: 0　XP: 49",
          "positiveTags": "无",
          "negativeTags": "Fleshcrafting",
          "text": "使 Living Terrain 强度减少当前值 ×（0.65 + Might × 0.05），最低归零；执行者知晓 Fleshcrafting。完成时增加 4 Profile。",
          "location": "Living Terrain 强度低于 300 的地点。",
          "limit": ""
        },
        {
          "name": "Destroy Carnivorous Plant",
          "image": "flesh_abom_minion_1.png",
          "meta": "Might",
          "statLine": "Complexity: 45　Profile: 80　Menace: Carnivorous Plant 当前 Menace　Danger: 7　XP: 66",
          "positiveTags": "Danger、Combat",
          "negativeTags": "Fleshcrafting",
          "text": "移除 Carnivorous Plant。",
          "location": "Carnivorous Plant 所在地点。",
          "limit": ""
        }
      ]
    },
    {
      "id": "shared-tasks",
      "title": "人物学习与仪式",
      "media": true,
      "items": [
        {
          "name": "Learn Escamrak Secret",
          "image": "flesh_secret.png",
          "meta": "Lore",
          "statLine": "Complexity: 10　Profile: 70　Menace: 0　XP: 21",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "玩家 Agent 与自主人物均可执行。消耗 Escamrak Secret，Fleshcrafting Knowledge +1，并知晓 Fleshcrafting；非玩家控制者个人 Shadow +2%。",
          "location": "Escamrak Secret 所在地点。",
          "limit": "知识少于 6 层。"
        },
        {
          "name": "Study Fleshcrafting",
          "image": "fleshcraft.png",
          "meta": "Lore",
          "statLine": "Complexity: 20　Profile: 0　Menace: 0　XP: 36",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "玩家 Agent 与自主人物均可执行。提高一级 Mastery of Fleshcrafting。升至一级实际消耗 1 层知识，升至二、三级实际消耗 2 层；两种知识同时存在时，两类都会按代码扣除。非玩家控制者个人 Shadow 增加 2% × 新等级。",
          "location": "人物所在地点。",
          "limit": "已知晓 Fleshcrafting；升至一、二、三级分别需要 1、2、3 层 Arcane Knowledge 与 Fleshcrafting Knowledge 的合计值。"
        },
        {
          "name": "Teach Fleshcrafting",
          "image": "fleshcraft_teach.png",
          "meta": "Lore",
          "statLine": "Complexity: 40　Profile: 70　Menace: 0　XP: 60",
          "positiveTags": "Cooperation、Fleshcrafting",
          "negativeTags": "Disease",
          "text": "玩家 Agent 与自主人物均可执行。创建一级 Fleshcrafters，当地 Shadow +2%，人口计入封印积分。完成时增加 5 Profile。",
          "location": "非 Alliance 且尚无 Fleshcrafters 的人类聚居地；玩家 Agent 需要完全渗透。",
          "limit": "掌握 Fleshcrafting。"
        },
        {
          "name": "Delve into Library",
          "image": "flesh_secret.png",
          "meta": "Lore",
          "statLine": "Complexity: 10　Profile: 100　Menace: 0　XP: 21",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "玩家 Agent 与自主人物均可执行。将 Fleshcrafting Knowledge 补至 6，并知晓 Fleshcrafting；非玩家控制者每补充一级知识，个人 Shadow +2%。",
          "location": "Bone Libraries 所在地点。",
          "limit": "知识少于 6 层。"
        },
        {
          "name": "Merge into Escamrak",
          "image": "flesh_merge.png",
          "meta": "Might + Lore + Intrigue + Command",
          "statLine": "Complexity: 50　Profile: 0　Menace: 0　XP: 72",
          "positiveTags": "无",
          "negativeTags": "无",
          "text": "牺牲执行者，提高 <CrossReference name=\"Escamrak's Body\" /> 吸收人群的效率：首次由每 HP 转换 0.5 强度提高到 1，之后每次再提高 1。",
          "location": "the Elder Tomb 的 Escamrak's Body。",
          "limit": "Mastery of Fleshcrafting 至少三级。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "name": "Learn Escamrak Secret",
          "image": "flesh_secret.png",
          "time": "3 回合",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "消耗一个 Escamrak Secret，Fleshcrafting Knowledge +1，个人 Shadow +2%。",
          "location": "Escamrak Secret 所在的人类聚居地。",
          "limit": "Fleshcrafting Knowledge 少于 6 层。",
          "id": "ruler-learn-secret"
        },
        {
          "name": "Study Living Settlement",
          "image": "flesh_secret.png",
          "time": "3 回合",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "Fleshcrafting Knowledge +1，个人 Shadow +2%。",
          "location": "Living Settlement。",
          "limit": "Fleshcrafting Knowledge 少于 6 层。"
        },
        {
          "name": "Hire Fleshcraft Tutor",
          "image": "flesh_secret.png",
          "time": "5 回合",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease、Gold",
          "text": "支付 25 Gold，Fleshcrafting Knowledge +1，个人 Shadow +2%。",
          "location": "有 Fleshcrafters 的人类聚居地。",
          "limit": "已知晓 Fleshcrafting；至少 25 Gold，知识少于 6 层。"
        },
        {
          "name": "Study Fleshcrafting",
          "image": "fleshcraft.png",
          "time": "3 回合",
          "positiveTags": "Ambition、Fleshcrafting、Cruelty",
          "negativeTags": "Disease",
          "text": "Mastery of Fleshcrafting 提高一级，个人 Shadow 增加 2% × 新等级。升至一级消耗 1 层知识，升至二、三级实际均消耗 2 层。",
          "location": "统治者所在的人类聚居地。",
          "limit": "已知晓 Fleshcrafting；升至一、二、三级分别要求至少 1、2、3 层 Fleshcrafting Knowledge。",
          "id": "ruler-study-fleshcrafting"
        },
        {
          "name": "Teach Fleshcrafting",
          "image": "fleshcraft_teach.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Cooperation",
          "negativeTags": "Disease",
          "text": "创建一级 Fleshcrafters；所在地 Shadow +2%，当前人口计入封印积分。",
          "location": "尚无 Fleshcrafters 的人类聚居地。",
          "limit": "统治者掌握 Fleshcrafting。",
          "id": "ruler-teach-fleshcrafting"
        },
        {
          "name": "Fleshcraft: Enhance Defenders",
          "image": "flesh_ruler_defense.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Cruelty、Combat、Danger",
          "negativeTags": "无",
          "text": "创建 Enhanced Defenders 与 20 点 Lingering Resentment，个人 Shadow +2%。",
          "location": "尚无 Enhanced Defenders 的人类聚居地。",
          "limit": "统治者掌握 Fleshcrafting。"
        },
        {
          "name": "Fleshcraft: Enhance Workers",
          "image": "flesh_ruler_worker.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Gold、Cruelty",
          "negativeTags": "无",
          "text": "创建 Enhanced Workers 与 20 点 Lingering Resentment，个人 Shadow +2%。",
          "location": "尚无 Enhanced Workers 的人类聚居地。",
          "limit": "统治者掌握 Fleshcrafting。"
        },
        {
          "name": "Fleshcraft: Enhance Merchants",
          "image": "flesh_ruler_trade.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Gold、Cruelty",
          "negativeTags": "无",
          "text": "创建 Enhanced Merchants 与 20 点 Lingering Resentment，个人 Shadow +2%。",
          "location": "有 Trade Route 且尚无 Enhanced Merchants 的人类聚居地。",
          "limit": "统治者掌握 Fleshcrafting。"
        },
        {
          "name": "Fleshcraft: Bind Will",
          "image": "flesh_ruler_bindwill.png",
          "time": "2 回合",
          "positiveTags": "Fleshcrafting、Cruelty",
          "negativeTags": "Discord",
          "text": "当地 Unrest −150，创建 100 点 Lingering Resentment；个人 Shadow +5%。",
          "location": "Unrest 大于 100 的人类聚居地。",
          "limit": "Mastery of Fleshcrafting 至少二级。"
        },
        {
          "name": "Fleshcraft: Exploit Populace",
          "image": "flesh_ruler_gold.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Cruelty、Gold、Madness",
          "negativeTags": "无",
          "text": "统治者获得 250 Gold，当地 Madness +25，创建 30 点 Lingering Resentment；个人 Shadow +5%。",
          "location": "统治者所在的人类聚居地。",
          "limit": "Mastery of Fleshcrafting 至少二级。"
        },
        {
          "name": "Fleshcraft: Aberrant Army",
          "image": "flesh_army.png",
          "time": "5 回合",
          "positiveTags": "Fleshcrafting、Combat",
          "negativeTags": "无",
          "text": "将当地现有驻军替换为 Flesh Army；个人 Shadow +50%。",
          "location": "驻军为空或驻军属于其他军队类型的人类聚居地。",
          "limit": "Mastery of Fleshcrafting 至少三级。"
        },
        {
          "name": "Cannibalize Staff",
          "image": "flesh_cannibal.png",
          "time": "1 回合",
          "positiveTags": "Cruelty",
          "negativeTags": "无",
          "text": "清空食人冲动，个人 Shadow +50%、Sanity −15；当地 Unrest +50，创建 25 点 Lingering Resentment。",
          "location": "统治者所在的人类聚居地。",
          "limit": "具有 Endless Regrowth 的 Cannibalistic Hunger 突变。"
        },
        {
          "name": "Scorched Earth",
          "image": "flesh_fire_ruler.png",
          "time": "1 回合",
          "positiveTags": "无",
          "negativeTags": "Fleshcrafting",
          "text": "移除 Living Terrain，当地 Devastation +100；中心地块火山损伤 +30，其余无地点的领土地块增加 26–30。损伤消退前阻止活体地形再次扩散。",
          "location": "Living Terrain 强度低于 300，且尚未成为 Living Settlement 的人类聚居地。",
          "limit": ""
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "name": "Escamrak",
          "image": "flesh_escammodifier_1.png",
          "text": "可直接控制的神体，每回合恢复 2 HP。在无火山损伤的陆地点，每回合使 <CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" /> 增加 20；尚无该修正时创建。被摧毁后，在 the Elder Tomb 重建 <CrossReference name=\"Escamrak's Body\" />。",
          "id": "escamrak-army",
          "stats": "HP 100；初始满血",
          "abilities": [
            {
              "name": "Reclaim Flesh",
              "text": "执行地点：<CrossReference name=\"Living Settlement\" />。耗时 1 回合，最多吸收 100 人口，每点人口恢复 1 HP，受缺失 HP 限制；人口耗尽时聚居地沦为废墟。完成时 Profile +2、Menace +3。",
              "id": "escamrak-army-reclaim-flesh"
            },
            {
              "name": "Ravage",
              "text": "执行地点：任意地点。耗时 1 回合，对当地与相邻地点的军队各造成 75 HP 伤害；Escamrak、Horrid Titan、Maddened Spawn 免疫。完成时 Profile +5、Menace +15。",
              "id": "escamrak-army-ravage"
            },
            {
              "name": "Corrupt Locus",
              "text": "执行地点：Geomantic Locus。耗时 1 回合，以 <CrossReference name=\"Twisted Locus\" /> 替换原修正。完成时 Profile +5、Menace +10。",
              "id": "escamrak-army-corrupt-locus"
            },
            {
              "name": "Draw Out",
              "text": "执行地点：统治者掌握三级 Mastery of Fleshcrafting 的聚居地。耗时 1 回合，使统治者退位并执行 <CrossReference name=\"Fleshcrafting: Abominize Self\" />。完成时 Profile +2、Menace +8。",
              "id": "escamrak-army-draw-out"
            },
            {
              "name": "Shape the World",
              "text": "执行地点：<CrossReference name=\"Twisted Landscape\" /> 及其变体。耗时 3 回合，可恢复为 Twisted Landscape，或改为 <CrossReference name=\"Spawning Grounds\" />（Menace +10）、<CrossReference name=\"Impassible Nets\" />（+5）、<CrossReference name=\"Growing Cocoon\" />（+0）、<CrossReference name=\"Bone Libraries\" />（+5）。改为 <CrossReference name=\"Living Settlement\" /> 时，自身 HP 降至 1、Menace +20，建立人口为 1 且掌握全部四种改造的聚居地。完成时额外 Profile +5。",
              "id": "escamrak-army-shape-the-world"
            }
          ]
        },
        {
          "name": "Flesh Army",
          "image": "flesh_army.png",
          "text": "由 <CrossReference name=\"Fleshcraft: Aberrant Army\" /> 创建，替换原驻军，每回合恢复 1 HP。<CrossReference name=\"Rampage\" /> 使其进入黑暗势力并自主夷平 Shadow 低于 75% 的人类聚居地；狂暴后保留进入狂暴时的最大 HP。",
          "stats": "初始 HP 5；最大 HP = 向下取整（家乡 Prosperity × 人口 × 1.2），再分别结算 Alliance 与 Military Fervor 的军力加成"
        },
        {
          "name": "Horrid Titan",
          "image": "flesh_abom_minion_2.png",
          "text": "由 <CrossReference name=\"Fleshcrafting: Construct Titan\" /> 创建。自主夷平 Shadow 低于 75% 的人类聚居地；在人类聚居地每回合增加 3 Devastation，并使尚未知晓 Fleshcrafting 的统治者获悉它。",
          "stats": "HP 35；初始满血"
        },
        {
          "name": "Maddened Spawn",
          "image": "flesh_god_army.png",
          "text": "由 <CrossReference name=\"Spawning Grounds\" /> 定期生成，自主夷平 Shadow 低于 75% 的人类聚居地。",
          "stats": "HP 25；初始满血"
        },
        {
          "name": "Summoned Fleshcrafters",
          "image": "flesh_calledcivilians.png",
          "text": "由 <CrossReference name=\"Merge and Grow\" /> 将 Living Settlement 的全部人口转化，自动前往 the Elder Tomb，与 <CrossReference name=\"Escamrak's Body\" /> 融合。",
          "stats": "HP = 转化时聚居地的全部人口；初始满血"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "name": "Revelry of the Body",
          "text": "只有 0 与 −1 两档。处于 −1 时，侍僧获得 Endless Regrowth 并知晓 Fleshcrafting；每座 Temple 在当地存在 Death 时，每回合消耗 10 Death、增加 1 Madness，且人口未达上限时增加 1 人口。\n抵消 Safety in Ignorance 对销毁 Arcane Secret 和 Escamrak Secret 的相应执行意愿加成。"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "media": true,
      "items": [
        {
          "name": "Holy: Destroy Escamrak Secret",
          "image": "flesh_secret.png",
          "meta": "Lore",
          "statLine": "Complexity: 60　Profile: 40　Menace: 0　XP: 82",
          "positiveTags": "Religion",
          "negativeTags": "Fleshcrafting",
          "text": "移除 Escamrak Secret，执行者知晓 Fleshcrafting。",
          "location": "Escamrak Secret 所在地点。",
          "limit": "执行者属于 Holy Order，Safety in Ignorance 教义为非中立状态。"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "The Second Awakening",
          "id": "flesh-fleshgod-awakening2",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 2 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Third Awakening",
          "id": "flesh-fleshgod-awakening3",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 3 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Fourth Awakening",
          "id": "flesh-fleshgod-awakening4",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 4 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Fifth Awakening",
          "id": "flesh-fleshgod-awakening5",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 5 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Sixth Awakening",
          "id": "flesh-fleshgod-awakening6",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 6 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Seventh Awakening",
          "id": "flesh-fleshgod-awakening7",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 7 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Eighth Awakening",
          "id": "flesh-fleshgod-awakening8",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 8 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Ninth Awakening",
          "id": "flesh-fleshgod-awakening9",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 9 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Last Awakening",
          "id": "flesh-fleshgod-awakening-silly1",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 10 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Final Awakening",
          "id": "flesh-fleshgod-awakening-silly2",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 11 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Ultimate Awakening",
          "id": "flesh-fleshgod-awakening-silly3",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 12 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "The Truly Last Awakening",
          "id": "flesh-fleshgod-awakening-silly4",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 13 次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "Yet Another Awakening",
          "id": "flesh-fleshgod-awakening-silly5",
          "image": "flesh_awakeningart.png",
          "text": "模组事件。在第 14 次及以后每次建成神体时由代码直接触发，确认后继续游戏，没有额外数值效果。"
        },
        {
          "name": "Living Settlement",
          "id": "flesh-livingcity-encroached",
          "image": "flesh_city_event.png",
          "text": "模组事件。<CrossReference name=\"Living Terrain\" href=\"#entry-living-terrain-modifier\" /> 完成对人类聚居地的转化时触发。可确认或将镜头移到该地点，没有额外数值效果。"
        },
        {
          "name": "Revelry of the Body",
          "id": "flesh-ho-triggered",
          "image": "flesh_HO_event.png",
          "text": "模组事件。首次启用 <CrossReference name=\"Revelry of the Body\" /> 的有效档位时触发，没有额外数值效果。"
        },
        {
          "name": "Living Settlement",
          "id": "flesh-livingcity",
          "image": "flesh_city_event.png",
          "text": "模组事件。<CrossReference name=\"Fleshcrafters\" /> 达到 300 并形成 <CrossReference name=\"Living Settlement\" /> 时触发。可确认或将镜头移到该地点，没有额外数值效果。"
        }
      ]
    }
  ],
  "relations": {
    "Fleshcrafting: Enhancement": {
      "sources": [
        {
          "name": "Mastery of Fleshcrafting",
          "href": "#entry-mastery-of-fleshcrafting"
        }
      ]
    },
    "Fleshcrafting: Craft Minion": {
      "sources": [
        {
          "name": "Mastery of Fleshcrafting",
          "href": "#entry-mastery-of-fleshcrafting"
        }
      ]
    },
    "Fleshcrafting: Reinforce Self": {
      "sources": [
        {
          "name": "Mastery of Fleshcrafting",
          "href": "#entry-mastery-of-fleshcrafting"
        }
      ]
    },
    "Fleshcrafting: Sculpt Flesh": {
      "sources": [
        {
          "name": "Mastery of Fleshcrafting",
          "href": "#entry-mastery-of-fleshcrafting"
        }
      ]
    },
    "Fleshcrafting: Abominize Self": {
      "sources": [
        {
          "name": "Mastery of Fleshcrafting",
          "href": "#entry-mastery-of-fleshcrafting"
        }
      ]
    },
    "Fleshcrafting: Grow Horror": {
      "sources": [
        {
          "name": "Abomination",
          "href": "#entry-abomination"
        }
      ]
    },
    "Fleshcrafting: Construct Titan": {
      "sources": [
        {
          "name": "Abomination",
          "href": "#entry-abomination"
        }
      ]
    },
    "Fleshcrafting: Spawn Mind-Shaper": {
      "sources": [
        {
          "name": "Abomination",
          "href": "#entry-abomination"
        }
      ]
    },
    "Fleshcraft: Attack Channeler": {
      "sources": [
        {
          "name": "Twisted Locus",
          "href": "#entry-twisted-locus"
        }
      ]
    },
    "Fleshcraft: Grasping Land": {
      "sources": [
        {
          "name": "Twisted Locus",
          "href": "#entry-twisted-locus"
        }
      ]
    },
    "Fleshcraft: Blasphemous Rain": {
      "sources": [
        {
          "name": "Twisted Locus",
          "href": "#entry-twisted-locus"
        }
      ]
    },
    "Enhanced Defenders": {
      "sources": [
        {
          "name": "Fleshcraft: Enhance Defenders",
          "href": "#entry-fleshcraft-enhance-defenders"
        }
      ]
    },
    "Enhanced Workers": {
      "sources": [
        {
          "name": "Fleshcraft: Enhance Workers",
          "href": "#entry-fleshcraft-enhance-workers"
        }
      ]
    },
    "Enhanced Merchants": {
      "sources": [
        {
          "name": "Fleshcraft: Enhance Merchants",
          "href": "#entry-fleshcraft-enhance-merchants"
        }
      ]
    },
    "Escamrak Secret": {
      "sources": [
        {
          "name": "Emerging Secrets",
          "href": "#entry-emerging-secrets"
        },
        {
          "name": "Propagate Knowledge",
          "href": "#entry-propagate-knowledge"
        },
        {
          "name": "Twisted Library",
          "href": "#entry-twisted-library"
        },
        {
          "name": "Carnivorous Plant",
          "href": "#entry-carnivorous-plant"
        },
        {
          "name": "Fleshcrafting: Grow Horror",
          "href": "#entry-fleshcrafting-grow-horror"
        },
        {
          "name": "Fleshcrafting: Construct Titan",
          "href": "#entry-fleshcrafting-construct-titan"
        },
        {
          "name": "Fleshcrafting: Spawn Mind-Shaper",
          "href": "#entry-fleshcrafting-spawn-mind-shaper"
        }
      ]
    },
    "Carnivorous Plant": {
      "sources": [
        {
          "name": "Fleshcrafting: Grow Horror",
          "href": "#entry-fleshcrafting-grow-horror"
        }
      ]
    },
    "Fleshcrafters": {
      "sources": [
        {
          "name": "Teach Fleshcrafting",
          "href": "#entry-teach-fleshcrafting"
        },
        {
          "name": "Distribute Knowledge",
          "href": "#entry-distribute-knowledge"
        }
      ]
    },
    "Escamrak's Body": {
      "sources": [
        {
          "name": "Merge and Grow",
          "href": "#entry-merge-and-grow"
        }
      ]
    },
    "Twisted Library": {
      "sources": [
        {
          "name": "Twist Library",
          "href": "#entry-twist-library"
        }
      ]
    },
    "Writhing Flesh": {
      "sources": [
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "href": "#entry-fleshcrafting-sculpt-flesh"
        }
      ]
    },
    "Acid Sack": {
      "sources": [
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "href": "#entry-fleshcrafting-sculpt-flesh"
        }
      ]
    },
    "Bone Sword": {
      "sources": [
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "href": "#entry-fleshcrafting-sculpt-flesh"
        }
      ]
    },
    "Bone Darts": {
      "sources": [
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "href": "#entry-fleshcrafting-sculpt-flesh"
        }
      ]
    },
    "Flesh Tome": {
      "sources": [
        {
          "name": "Fleshcrafting: Sculpt Flesh",
          "href": "#entry-fleshcrafting-sculpt-flesh"
        }
      ]
    },
    "Crafted Beast": {
      "sources": [
        {
          "name": "Fleshcrafting: Craft Minion",
          "href": "#entry-fleshcrafting-craft-minion"
        }
      ]
    },
    "Monstrosity": {
      "sources": [
        {
          "name": "Fleshcrafting: Craft Minion",
          "href": "#entry-fleshcrafting-craft-minion"
        }
      ]
    },
    "Warped Crow": {
      "sources": [
        {
          "name": "Fleshcrafting: Craft Minion",
          "href": "#entry-fleshcrafting-craft-minion"
        }
      ]
    },
    "Flesh Hulk": {
      "sources": [
        {
          "name": "Fleshcrafting: Craft Minion",
          "href": "#entry-fleshcrafting-craft-minion"
        }
      ]
    },
    "Ravenous Abomination": {
      "sources": [
        {
          "name": "Fleshcrafting: Craft Minion",
          "href": "#entry-fleshcrafting-craft-minion"
        }
      ]
    },
    "Abomination": {
      "sources": [
        {
          "name": "Fleshcrafting: Abominize Self",
          "href": "#entry-fleshcrafting-abominize-self"
        }
      ]
    },
    "Mind-Shaper": {
      "sources": [
        {
          "name": "Fleshcrafting: Spawn Mind-Shaper",
          "href": "#entry-fleshcrafting-spawn-mind-shaper"
        }
      ]
    },
    "Horrid Titan": {
      "sources": [
        {
          "name": "Fleshcrafting: Construct Titan",
          "href": "#entry-fleshcrafting-construct-titan"
        }
      ]
    },
    "Maddened Spawn": {
      "sources": [
        {
          "name": "Spawning Grounds",
          "href": "#entry-spawning-grounds"
        }
      ]
    },
    "Summoned Fleshcrafters": {
      "sources": [
        {
          "name": "Merge and Grow",
          "href": "#entry-merge-and-grow"
        }
      ]
    },
    "Twisted Locus": {
      "sources": [
        {
          "name": "Corrupt Locus",
          "href": "#entry-escamrak-army-corrupt-locus"
        }
      ]
    },
    "Hulking Muscles": {
      "sources": [
        {
          "name": "Fleshcrafting: Enhancement",
          "href": "#entry-fleshcrafting-enhancement"
        }
      ]
    },
    "Backup Brains": {
      "sources": [
        {
          "name": "Fleshcrafting: Enhancement",
          "href": "#entry-fleshcrafting-enhancement"
        }
      ]
    },
    "More Eyes": {
      "sources": [
        {
          "name": "Fleshcrafting: Enhancement",
          "href": "#entry-fleshcrafting-enhancement"
        }
      ]
    },
    "Permanent Smile": {
      "sources": [
        {
          "name": "Fleshcrafting: Enhancement",
          "href": "#entry-fleshcrafting-enhancement"
        }
      ]
    },
    "Tooth Armor": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Extra Arms": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Cannibalistic Hunger": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Bone Spines": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Pus Growths": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Terrifying Appearance": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Gibbering Mouths": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Second Head": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Extra Organs": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Living Tumors": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth-trait"
        }
      ]
    },
    "Endless Regrowth": {
      "sources": [
        {
          "name": "Endless Regrowth",
          "href": "#entry-endless-regrowth"
        },
        {
          "name": "Revelry of the Body",
          "href": "#entry-revelry-of-the-body"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function EscamrakArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
