"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "shadow-counsel",
  "name": "Shadow Counsel, Fickle Muse, Dark Advisor",
  "number": "19",
  "theme": "outsiders-theme shadow-counsel-theme",
  "assetDir": "out-of-gods",
  "background": "god_background3.jpg",
  "portrait": "god_portrait3.png",
  "flavour": "",
  "caption": "Pawn 操控、战争维持与统治者干预",
  "maxTurns": "500 回合",
  "awaken": "第 1 回合",
  "panic": "0%",
  "finalAgents": "0",
  "progressLabel": "阈值",
  "unlockMethod": "常规回合解锁",
  "dlc": "必须要 DLC",
  "sourceMod": "Out of Gods",
  "powerCapacity": "神力上限固定为 2。",
  "powerRecovery": "每回合恢复＝0.2 − 0.05 × 当前 Pawn 数量。0、1、2、3、4 名 Pawn 分别恢复 0.2、0.15、0.1、0.05、0。Potential Pawn 也计入。",
  "core": [
    "开局在 Destroyed Coven 留下 The Curse。没有初始 Agent，常规 Agent 上限为 0，通过 Choose New Pawn 改为控制世界上已有的人物。",
    "选取英雄、Orc Upstart 或人类统治者作为 Potential Pawn。其个人 Shadow 每回合增加 10 个百分点，达到完全侵蚀状态后发挥 Pawn 效果。",
    "用英雄 Pawn 执行行动；用统治者 Pawn 自动渗透当地可渗透设施，再通过 Puppeteer (encourage) 与 Puppeteer (discourage) 调整决策偏好。",
    "保持人类君主之间的战争，使 The Curse 抵消自然衰减；必要时用 Apparition 打断威胁，用 Tormenting Whispers 清空统治者的 Sanity。",
    "防止法师在 Destroyed Coven 完成 Weaken The Curse；用 Discard Pawn 腾出名额时，要承担其成为 Forsaken 的后果。",
    "通过被操纵的君主推动 Form Dark Empire，再借 Dark Crusade 继续扩张；Eldritch Research 和 Militia Training 也能帮助地方发展。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "最多同时拥有 4 名 Pawn，包括仍在转化的 Potential Pawn。Pawn 名额与普通 Agent 上限分开计数。",
    "playStyle": "借现有人物间接干预世界。有限的 Pawn 名额同时占用神力恢复能力，需要在英雄执行力、统治者控制和战争延续之间取舍。"
  },
  "specialVictory": "无",
  "specialFailure": "The Curse 强度降至 0 或以下时失败。Destroyed Coven 仍提供 Fulfil the Prophecy，Chosen One 完成后也会结束游戏。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 0,
      "powerRecovery": "2/0–0.2",
      "reward": [
        "Choose New Pawn",
        "Discard Pawn",
        "Tormenting Whispers",
        "Apparition",
        "Puppeteer (encourage)",
        "Puppeteer (discourage)"
      ]
    },
    {
      "seal": 1,
      "progress": 1,
      "agents": 0,
      "powerRecovery": "2/0–0.2",
      "reward": [
        "苏醒"
      ]
    }
  ],
  "powers": [
    {
      "name": "Choose New Pawn",
      "seal": 0,
      "cost": 1,
      "icon": "hand.png",
      "effect": "为人物添加 Potential Pawn；其个人 Shadow 每回合 +10 个百分点、Awareness +5 个百分点，均最高 100%。完全侵蚀后的英雄可直接控制；统治者会渗透当地所有可渗透设施。每名 Pawn 使每回合 Power 恢复减少 0.05。",
      "limit": "当前 Pawn 少于 4。目标为非 Elf 的人物单位，或人类聚居地的非 Elf 统治者；Awareness 低于 100%，不能是 Chosen One、Forsaken 或已有对应 Pawn 特质者。"
    },
    {
      "name": "Discard Pawn",
      "seal": 0,
      "cost": 0,
      "icon": "brokendoll.png",
      "effect": "移除 Pawn 特质并释放名额，赋予 Forsaken，增加对 Shadow 的极度厌恶。统治者的普通喜好与厌恶列表会被清空，并撤销当地可渗透设施的渗透状态；已执行的行动通常继续。",
      "limit": "目标为 Pawn 人物或其统治地点；排除 Dark Empire 君主及 Orc Raiders。"
    },
    {
      "name": "Tormenting Whispers",
      "seal": 0,
      "cost": 1,
      "icon": "whispers.png",
      "effect": "将统治者 Sanity 设为 0。Awareness 增幅由 The Curse 最近一次回合结算时的强度决定：100 − 20 ×（⌊强度/100⌋ + 1）个百分点，Awareness 最高 100%。强度上限 300，对应最小增幅 20 个百分点。\nThe Curse 尚未进行首次回合结算时，增幅为 100 个百分点。",
      "limit": "目标地点有非 Elf 统治者，其 Shadow、Awareness 均未达到 100%；不能是 Chosen One 或 Forsaken。"
    },
    {
      "name": "Apparition",
      "seal": 0,
      "cost": 1,
      "icon": "apparition.png",
      "effect": "把目标当前行动替换为 1 回合 Disrupted。Awareness 增幅与 Tormenting Whispers 相同，随 The Curse 强度提高而降低。",
      "limit": "人物单位，排除 Elf 与 Chosen One，Awareness 未达到 100%。"
    },
    {
      "name": "Puppeteer (encourage)",
      "seal": 0,
      "cost": 0,
      "icon": "lesserpuppeteer.png",
      "effect": "选择一个标签，将该标签的四类偏好状态清除后设为普通喜欢。",
      "limit": "个人 Shadow 为 100% 的统治者 Pawn；普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Puppeteer (discourage)",
      "seal": 0,
      "cost": 0,
      "icon": "puppeteer.png",
      "effect": "选择一个标签，将该标签的四类偏好状态清除后设为普通厌恶。",
      "limit": "个人 Shadow 为 100% 的统治者 Pawn；普通厌恶与极度厌恶的总数小于 5。"
    }
  ],
  "sections": [
{
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Potential Pawn",
          "text": "英雄与统治者的转化状态。个人 Shadow 每回合 +10 个百分点，Awareness 每回合 +5 个百分点，最高 100%；转化完成后名称变为 Pawn。若回合结算开始时 Awareness 为 100% 且 Shadow 低于 50%，则挣脱控制并成为 Forsaken。"
        },
        {
          "name": "Pawn",
          "text": "英雄可直接控制。Orc Upstart 转为保留原人物的 Warlord。统治者在每次特质结算时渗透当地所有可渗透设施，并成为 Puppeteer (encourage) 与 Puppeteer (discourage) 的目标。"
        },
        {
          "name": "Forsaken",
          "text": "Choose New Pawn 与 Tormenting Whispers 会排除此人物。被放弃或挣脱的统治者会清空普通喜好与厌恶，并撤销当地设施的渗透；人物额外获得对 Shadow 的极度厌恶。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "The Curse",
          "text": "强度上限 300。强度决定 Apparition 与 Tormenting Whispers 增加的 Awareness；强度为 0 或以下时触发特殊失败。",
          "image": "devourKnowledge.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −0.5。",
            "external": "每场双方国家君主均为 Human 的战争，每回合强度 +1.5。\nWeaken The Curse 完成时强度 −150。"
          }
        },
        {
          "name": "Material",
          "text": "为当地统治者提供 Support Sovereign、Eldritch Research、Civilian Initiatives、Reconstruction 和 Militia Training；具体可用性取决于各行动条件。每回合补至有统治者的地表人类聚居地，排除 Elf 国家。",
          "image": "agitate.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "Reconstruction 完成时强度 −25。"
          }
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。",
          "image": "./kalastrophe/agitate.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "Support Sovereign 完成时强度 −20。"
          }
        },
        {
          "name": "Well of Shadows",
          "text": "使 Shadow 向相邻低 Shadow 地点额外传播。传播量随两地 Shadow 差值增大，并受接收地点的 Ward 抑制；地点成为废墟后仍保留。",
          "image": "./out-of-gods/wellOfShadows.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "Eldritch Research 完成时强度 +100。"
          }
        },
        {
          "name": "Military Fervour",
          "text": "提高以当地为故乡的 Human Army 最大 HP，倍率为 1 + min(强度,100)/100。",
          "image": "unit_humanArmy.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "非教程模式下每回合强度 −2。",
            "external": "Militia Training 完成时强度 +50。"
          },
          "baseGame": true
        },
        {
          "name": "Arcane Fortress",
          "text": "保护 Destroyed Coven，降低英雄引导终极任务时受到的威胁，并吸收攻击法术的部分伤害。",
          "image": "./iastur/arcane-fortress.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": ""
          },
          "baseGame": true
        },
        {
          "name": "Orcish Funding",
          "text": "每逢 10 的倍数回合，从资助国每位地方统治者抽取其 Gold 的 20%，分别向下取整。若受资助部落存在强度低于 290 的 Orcish Industry，则将总额平均分配后按 50% 转为各处工业强度，最高 300。没有合适工业地点时不收款。\n资助国或部落消亡、或修正所在地易主时移除。",
          "image": "agent_warlord.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true
        },
        {
          "name": "Orcish Industry",
          "text": "用于支持 Orc 军队；军队 HP 上限依赖故乡及相邻地点的工业总量。",
          "image": "orcishIndustry.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度低于 50 时每回合 +1；达到 51 或以上时每回合 −1。",
            "external": "Orcish Funding 每 10 回合按资助国提供的 Gold 增加工业，具体分配见其说明。"
          },
          "baseGame": true
        }
      ]
    },
{
  "id": "locations",
  "title": "地点",
  "items": [
    {
      "name": "Destroyed Coven",
      "image": "loc_evil_coven.png",
      "text": "开局选择邻近人类聚居地的空地建立，并清除该处其他修正，放置 The Curse。提供 Weaken The Curse、Fulfil the Prophecy 与 Arcane Fortress；普通摧毁回调为空。\n\n出现方式\nThe Shadow Counsel 开局在选定的邻近人类聚居地的空地点建立。",
      "id": "destroyed-coven"
    },
    {
      "name": "Weaken The Curse",
      "meta": "Lore",
      "text": "使 The Curse 强度 −150。引导风险为 50；施法者的 Awareness 与世界恐慌越高，通常越愿意执行。",
      "image": "reforgeTheSeal.png",
      "location": "Destroyed Coven",
      "statLine": "Complexity: 170 / Profile: 1000 / Menace: 0 / XP: 180",
      "positiveTags": "Co-Operation",
      "negativeTags": "无",
      "limit": "法师英雄，个人 Awareness 超过 50%；世界恐慌至少 75%，游戏尚未结束。",
      "id": "god-place-location-set-fallencoven--place-task-3232578780-ch-weakencurse"
    },
    {
      "name": "Fulfil the Prophecy",
      "meta": "Lore",
      "text": "Chosen One 完成后使玩家失败。",
      "image": "theProphecy.png",
      "location": "Destroyed Coven",
      "statLine": "Complexity: 50 / Profile: 1000 / Menace: 0 / XP: 72",
      "baseGame": true,
      "positiveTags": "Ambition",
      "negativeTags": "无",
      "limit": "仅 Chosen One，世界恐慌至少 80%；沿用本体终极任务的冷却与引导要求。",
      "id": "god-place-location-set-fallencoven--place-task-base-ch-fulfilltheprophecy"
    },
    {
      "id": "god-place-location-set-fallencoven--place-task-base-mg-aranefortresstomb",
      "name": "Geomancy: Arcane Fortress",
      "text": "利用墓穴的力量建立 Arcane <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" />，无需 Geomantic Locus。",
      "image": "/locations/game/arcaneFortress.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"Destroyed Coven\" href=\"#entry-destroyed-coven\" />。",
      "limit": "当地 Arcane <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" /> <100；Geomancy ≥1，或执行者为 Chosen One。",
      "statLine": "Complexity: 50\nProfile: 100\nMenace: 0\nXP: 72",
      "positiveTags": "无",
      "negativeTags": "无"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-set-fallencoven",
      "name": "Destroyed Coven",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "destroyed-coven"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-set-fallencoven--place-task-3232578780-ch-weakencurse",
            "god-place-location-set-fallencoven--place-task-base-ch-fulfilltheprophecy",
            "god-place-location-set-fallencoven--place-task-base-mg-aranefortresstomb"
          ]
        }
      ]
    }
  ]
},
{
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "英雄 Pawn",
          "id": "hero-pawn",
          "stats": "Might: 继承 / Lore: 继承 / Intrigue: 继承 / Command: 继承 / HP: 继承",
          "text": "原英雄保留人物、特质、物品、肖像和单位身份；Pawn 特质提供控制权。"
        },
        {
          "name": "Warlord",
          "image": "evil_orcUpstart.png",
          "stats": "Might: 继承 / Lore: 继承 / Intrigue: 继承 / Command: 继承 / HP: 继承",
          "text": "Orc Upstart 完全转化后的可控单位。保留原人物、HP 上限、当前 HP、Profile 与 Menace，持续重置所属部落的 Upstart 积累值。",
          "abilities": [
            {
              "name": "Claim Territory",
              "text": "把地点转为已渗透的 Orc Camp，并纳入当前部落；原地点已有的设施保留。",
              "image": "./kalastrophe/orcDefences.png",
              "location": "Warlord 所在的空地、City Ruins 或只含 Ancient Ruins 的地点",
              "statLine": "Complexity: 45 / Profile: 30 / Menace: 10 / XP: 66",
              "baseGame": true,
              "limit": "非海洋且宜居度至少为 5% × Orc 宜居度选项倍率。当地邻接部落领地；或沿海且本部落有可用 Shipyard；或部落已经失去全部领地。"
            },
            {
              "name": "Raiding Party",
              "text": "将 Warlord 暂时转为可控制的 Orc Raiders 军队，初始 HP 为其最大 HP 的五分之一，至少 1。",
              "image": "unit_orc.png",
              "location": "完全渗透的 Orc Camp",
              "statLine": "Complexity: 16 / Profile: 30 / Menace: 0 / XP: 30",
              "baseGame": true,
              "limit": "当地属于 Orc 部落，且没有人物正在前往攻击此 Warlord。"
            },
            {
              "name": "Commandeer Ships",
              "text": "将随机一处空 Orc Shipyard 改为拥有船只的 Shipyard，使沿海殖民成为可能。",
              "image": "./kalastrophe/docks.png",
              "location": "有 Docks 的人类聚居地",
              "statLine": "Complexity: 45 / Profile: 15 / Menace: 10 / XP: 66",
              "baseGame": true,
              "limit": "世界中至少有一处空 Orc Shipyard。"
            },
            {
              "name": "Orc Funding",
              "text": "在当前帝国地点建立 Orcish Funding，为本部落定期增加 Orcish Industry。",
              "image": "mammonsInfluence.png",
              "location": "Dark Empire 的领土",
              "statLine": "Complexity: 50 / Profile: 20 / Menace: 10 / XP: 72",
              "baseGame": true,
              "limit": "本部落拥有可用 Shipyard，且尚未有针对本部落的 Orc Funding。"
            }
          ]
        }
      ]
    },
{
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Weaken The Curse",
          "meta": "Lore",
          "text": "使 The Curse 强度 −150。引导风险为 50；施法者的 Awareness 与世界恐慌越高，通常越愿意执行。",
          "image": "reforgeTheSeal.png",
          "location": "Destroyed Coven",
          "statLine": "Complexity: 170 / Profile: 1000 / Menace: 0 / XP: 180",
          "positiveTags": "Co-Operation",
          "negativeTags": "无",
          "limit": "法师英雄，个人 Awareness 超过 50%；世界恐慌至少 75%，游戏尚未结束。"
        },
        {
          "name": "Fulfil the Prophecy",
          "meta": "Lore",
          "text": "Chosen One 完成后使玩家失败。",
          "image": "theProphecy.png",
          "location": "Destroyed Coven",
          "statLine": "Complexity: 50 / Profile: 1000 / Menace: 0 / XP: 72",
          "baseGame": true,
          "positiveTags": "Ambition",
          "negativeTags": "无",
          "limit": "仅 Chosen One，世界恐慌至少 80%；沿用本体终极任务的冷却与引导要求。"
        }
      ]
    },
{
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "Support Sovereign",
          "image": "agitate.png",
          "location": "同时存在 Material 与 Political Agitation 的非首都城市",
          "time": "7 回合",
          "positiveTags": "Co-Operation",
          "negativeTags": "Ambition、Combat、Danger",
          "text": "当地 Political Agitation 强度 −20。"
        },
        {
          "name": "Eldritch Research",
          "image": "assaultChanneller.png",
          "location": "Material 所在的人类聚居地",
          "time": "7 回合",
          "positiveTags": "Shadow",
          "negativeTags": "无",
          "text": "当地 Well of Shadows 强度 +100。",
          "limit": "统治者个人 Shadow 超过 50%。"
        },
        {
          "name": "Civilian Initiatives",
          "image": "give.png",
          "location": "Material 所在的人类聚居地",
          "time": "7 回合",
          "positiveTags": "无",
          "negativeTags": "Combat",
          "text": "完成时花费统治者 10 Gold，使当地领土每一格的温度向 0.5 靠近当前差距的 10%，随后刷新地形。",
          "limit": "统治者至少有 10 Gold；当地温度低于 0.49 或高于 0.51。"
        },
        {
          "name": "Reconstruction",
          "image": "humanColony.png",
          "location": "同时存在 Material 与 Devastation 的人类聚居地",
          "time": "7 回合",
          "positiveTags": "无",
          "negativeTags": "Gold、Cruelty",
          "text": "花费统治者 10 Gold，使当地 Devastation 强度 −25。",
          "limit": "统治者至少有 10 Gold。"
        },
        {
          "name": "Militia Training",
          "image": "muster.png",
          "location": "Material 所在的人类聚居地",
          "time": "7 回合",
          "positiveTags": "Combat",
          "negativeTags": "Gold",
          "text": "花费统治者 10 Gold，当地 Military Fervour 强度 +50。",
          "limit": "当地 Defence 已满，统治者至少有 10 Gold。"
        }
      ]
    },
{
      "id": "national-actions",
      "title": "国家行动",
      "items": [
        {
          "name": "Form Dark Empire",
          "image": "darkEmpire.png",
          "location": "符合条件国家的君主",
          "time": "20 回合",
          "positiveTags": "Shadow、Ambition、Cruelty、Combat",
          "negativeTags": "Co-Operation",
          "text": "将国家变为 Dark Empire。所属城市中，统治者和地点 Shadow 都低于 90% 的城市会发动内战。\n实际执行倾向还受 Pawn 特质在人物特质列表中的位置影响：位于 Pawn 特质之前的每个其他特质都会额外扣除 9999；因此出现该行动并不保证君主会采用。",
          "limit": "世界中没有 Dark Empire；君主个人 Shadow 至少 90%；国家不属于 Alliance、Dark Empire 或神权控制国家。"
        },
        {
          "name": "Dark Crusade",
          "image": "darkEmpire.png",
          "location": "Dark Empire 的君主",
          "time": "1 回合",
          "positiveTags": "Shadow、Ambition、Cruelty、Combat",
          "negativeTags": "Co-Operation",
          "text": "向首都距离最近、君主位于地表且不属于 Alliance 或 Dark Empire 的国家宣战。基础执行倾向为 100；已经处于战争时再减 9999。"
        }
      ]
    },
{
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Orc Raiders",
          "baseGame": true,
          "image": "unit_orc.png",
          "stats": "初始 HP: max(1,⌊最大 HP/5⌋)；最大 HP: 5 + 7 × 人物基础 Command，不计特质加成。",
          "text": "Raiding Party 使 Warlord 转为可控军队，人物藏在军队中并保留原有属性。Discard Pawn 无法直接选取这一形态。"
        }
      ]
    }
],
  "relations": {
    "Choose New Pawn": {
      "effects": [
        {
          "name": "Potential Pawn",
          "href": "#entry-potential-pawn"
        }
      ]
    },
    "Potential Pawn": {
      "sources": [
        {
          "name": "Choose New Pawn",
          "href": "#entry-choose-new-pawn"
        }
      ],
      "effects": [
        {
          "name": "Pawn",
          "href": "#entry-pawn"
        }
      ]
    },
    "Pawn": {
      "sources": [
        {
          "name": "Potential Pawn",
          "href": "#entry-potential-pawn"
        }
      ]
    },
    "Discard Pawn": {
      "effects": [
        {
          "name": "Forsaken",
          "href": "#entry-forsaken"
        }
      ]
    },
    "Forsaken": {
      "sources": [
        {
          "name": "Discard Pawn",
          "href": "#entry-discard-pawn"
        }
      ]
    },
    "Destroyed Coven": {
      "effects": [
        {
          "name": "The Curse",
          "href": "#entry-the-curse"
        }
      ]
    },
    "The Curse": {
      "sources": [
        {
          "name": "Destroyed Coven",
          "href": "#entry-destroyed-coven"
        },
        {
          "name": "Weaken The Curse",
          "href": "#entry-weaken-the-curse"
        }
      ],
      "effects": [
        {
          "name": "Apparition",
          "href": "#entry-apparition"
        },
        {
          "name": "Tormenting Whispers",
          "href": "#entry-tormenting-whispers"
        },
        {
          "name": "Weaken The Curse",
          "href": "#entry-weaken-the-curse"
        }
      ]
    },
    "Apparition": {
      "sources": [
        {
          "name": "The Curse",
          "href": "#entry-the-curse"
        }
      ]
    },
    "Tormenting Whispers": {
      "sources": [
        {
          "name": "The Curse",
          "href": "#entry-the-curse"
        }
      ]
    },
    "Weaken The Curse": {
      "sources": [
        {
          "name": "The Curse",
          "href": "#entry-the-curse"
        }
      ],
      "effects": [
        {
          "name": "The Curse",
          "href": "#entry-the-curse"
        }
      ]
    },
    "Material": {
      "effects": [
        {
          "name": "Support Sovereign",
          "href": "#entry-support-sovereign"
        },
        {
          "name": "Eldritch Research",
          "href": "#entry-eldritch-research"
        },
        {
          "name": "Civilian Initiatives",
          "href": "#entry-civilian-initiatives"
        },
        {
          "name": "Reconstruction",
          "href": "#entry-reconstruction"
        },
        {
          "name": "Militia Training",
          "href": "#entry-militia-training"
        }
      ]
    },
    "Support Sovereign": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        }
      ]
    },
    "Eldritch Research": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Well of Shadows",
          "href": "#entry-well-of-shadows"
        }
      ]
    },
    "Civilian Initiatives": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ]
    },
    "Reconstruction": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Militia Training": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Military Fervour",
          "href": "#entry-military-fervour"
        }
      ]
    },
    "Political Agitation": {
      "sources": [
        {
          "name": "Support Sovereign",
          "href": "#entry-support-sovereign"
        }
      ]
    },
    "Well of Shadows": {
      "sources": [
        {
          "name": "Eldritch Research",
          "href": "#entry-eldritch-research"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Reconstruction",
          "href": "#entry-reconstruction"
        }
      ]
    },
    "Military Fervour": {
      "sources": [
        {
          "name": "Militia Training",
          "href": "#entry-militia-training"
        }
      ]
    },
    "Raiding Party": {
      "effects": [
        {
          "name": "Orc Raiders",
          "href": "#entry-orc-raiders"
        }
      ]
    },
    "Orc Raiders": {
      "sources": [
        {
          "name": "Raiding Party",
          "href": "#entry-raiding-party"
        }
      ]
    },
    "Orc Funding": {
      "effects": [
        {
          "name": "Orcish Funding",
          "href": "#entry-orcish-funding"
        }
      ]
    },
    "Orcish Funding": {
      "sources": [
        {
          "name": "Orc Funding",
          "href": "#entry-orc-funding"
        }
      ],
      "effects": [
        {
          "name": "Orcish Industry",
          "href": "#entry-orcish-industry"
        }
      ]
    },
    "Orcish Industry": {
      "sources": [
        {
          "name": "Orcish Funding",
          "href": "#entry-orcish-funding"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function ShadowCounselArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
