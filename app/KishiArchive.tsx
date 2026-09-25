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
  "title": "地点",
  "items": [
    {
      "seal": 9,
      "name": "Demonic Nexus",
      "image": "location_demon_stronghold.png",
      "text": "地点保持完全 Shadow，每回合产生 5 Demonic Energy，可招募 Firehusk，也可通过 Distill Demonic Horde 生成恶魔军团。初始防御为 100，但最大防御值为 50。\n\n出现方式\n<CrossReference name=\"Engulfing Tide\" href=\"#entry-engulfing-tide\" meta=\"神力\" text=\"消耗人物合计 4 层 Bloodstain 与 Soul-Scar，将其转化为 Demon of the Tide，摧毁聚居地、建立 Demonic Nexus，并生成 150 HP 的 Rampaging Demons。\" image=\"./kishi/power_engulfing_tide.png\" /> 在目标恶魔所在地创建，固定加入同名兴趣点。\n\n可能配置的兴趣点\n<CrossReference name=\"Demonic Nexus（兴趣点）\" href=\"#entry-location-sub-bloodshed-fortress\" />。\n固定、随机与改建来源见各兴趣点。",
      "id": "demonic-nexus"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-set-bloodshed-fortress",
      "name": "Demonic Nexus",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "demonic-nexus"
          ]
        }
      ]
    }
  ]
},
{
  "id": "points-of-interest",
  "title": "兴趣点",
  "items": [
    {
      "id": "location-sub-bloodshed-fortress",
      "name": "Demonic Nexus（兴趣点）",
      "text": "Kishi 的据点设施。提供野外 Lay Low 和 Firehusk 招募；Demonic Energy 修正另提供军队生产相关挑战。\n\n出现方式\n<CrossReference name=\"Demonic Nexus\" href=\"#entry-demonic-nexus\" /> 地点创建时固定加入。\n\n可出现地点\n<CrossReference name=\"Demonic Nexus\" href=\"#entry-demonic-nexus\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "image": "/locations/mod/bloodshed.power_engulfing_tide.png",
      "baseGame": false
    },
    {
      "id": "god-place-location-sub-bloodshed-fortress--place-task-base-ch-laylowwilderness",
      "name": "Lay Low（野外）",
      "text": "首回合不减少数值；之后每回合降低 Profile、Menace 各 2，不低于人物下限。地点完全渗透时效果翻倍。",
      "image": "/locations/game/layLow.png",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />、<CrossReference name=\"Ancient Ruins\" href=\"?page=points-of-interest#entry-location-sub-ancientruins\" meta=\"兴趣点\" text=\"可供探索的古代遗迹，默认最多探索 5 次。探索带来遗迹事件、物品或危险；同时提供 Hero’s Journey、Guard Ruins、Wait to Explore Ruins 和野外 Lay Low。不能渗透，所在聚居地毁灭后仍可存续。\n\n出现方式\n地图在合格野地随机生成；不是所有名为 Ruins 的地点都拥有此兴趣点。\n\n可出现地点\n野外兴趣点地点、Ruins。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/ancientRuins.png\" target=\"_blank\" />、<CrossReference name=\"Abyssal City\" href=\"?page=points-of-interest#entry-location-sub-deep-city\" meta=\"兴趣点\" text=\"地下海洋人口的载体，提供野外 Lay Low 与 Flee Beneath。不能渗透。\n\n出现方式\n普通 Abyssal City 创建时配置。\n\n可出现地点\nAbyssal City。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/deepOneCity.png\" target=\"_blank\" />、<CrossReference name=\"Sanctum\" href=\"?page=points-of-interest#entry-location-sub-deep-sanctum\" meta=\"兴趣点\" text=\"Deep One Sanctum 固定带有的兴趣点。已经处于渗透状态，不可再渗透；提供野外 Lay Low 与 Propagation。\n\n出现方式\nDeep One Sanctum 创建时配置。\n\n可出现地点\nDeep One Sanctum。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/deepOneSanctum.png\" target=\"_blank\" />、<CrossReference name=\"Coven of Witches\" href=\"?page=points-of-interest#entry-location-sub-witchcoven\" meta=\"兴趣点\" text=\"可渗透的野外女巫据点，防御加成 50。渗透后可利用 Enshadow、Dark Worship 以及 Crow 招募；Menace 增长可能引来人类军队摧毁兴趣点。\n\n出现方式\n采用旧式女巫据点生成方式时放入野外兴趣点地点；宗教模式下的女巫 Temple 是另一种实现。\n\n可出现地点\n野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/coven.png\" target=\"_blank\" />、<CrossReference name=\"Demonic Nexus（兴趣点）\" href=\"#entry-location-sub-bloodshed-fortress\" />、<CrossReference name=\"Abyssal Tower\" href=\"?page=points-of-interest#entry-location-sub-drownedprophet-abyssaltower\" meta=\"兴趣点\" text=\"向周边传播 Shadow 的 Drowned Prophet 据点，允许其强力 Hymn 仪式，并提供拆除塔楼的行动。\n\n出现方式\nBreathless 完成 Build Abyssal Tower 后，在合格人类聚居地增加。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconAbyssalTower.png\" target=\"_blank\" />、<CrossReference name=\"Werewolf Run（兴趣点）\" href=\"?page=points-of-interest#entry-location-sub-nature-wolfrun\" meta=\"兴趣点\" text=\"Blood Moon 期间使相邻地点已有 Werewolf Population 加速增长；提供野外 Lay Low。\n\n出现方式\nWerewolf Run 创建时固定加入。\n\n可出现地点\nWerewolf Run。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/mod/nature.property_werewolfpack.png\" target=\"_blank\" />、<CrossReference name=\"Wreck\" href=\"?page=points-of-interest#entry-location-sub-shipwreck\" meta=\"兴趣点\" text=\"初始 Integrity 为 40 + 两次独立的 0–10 随机整数。未加固时每回合减少 1，降至 0 后移除；若它是 Shipwreck 地点的唯一兴趣点，地点也一并移除。可劫掠财物、修复或摧毁，也提供野外 Lay Low。重复沉船可以增加现有残骸的 Integrity。\n\n出现方式\n海上舰船损失等调用沉船生成入口；地点为空时创建 Shipwreck，否则附加到现有聚居地。\n\n可出现地点\nShipwreck、City、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/mod/CLib.Icon_Shipwreck.png\" target=\"_blank\" />、<CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />",
      "limit": "Profile 或 Menace 高于人物下限。",
      "statLine": "Complexity: 7\nProfile: 30\nMenace: 0\nXP: 16"
    },
    {
      "id": "god-place-location-sub-bloodshed-fortress--place-task-base-ch-recruitminion",
      "name": "Recruit Minion",
      "text": "招募当地配置的随从。不同地点实例提供不同种类，费用和 Command 需求取决于该随从。",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />、<CrossReference name=\"City Palace\" href=\"?page=points-of-interest#entry-location-sub-city\" meta=\"兴趣点\" text=\"城市的政治中心。除 Infiltrate、Enshadow、招募与训练外，按国家首都、Alliance、政治不稳定等条件提供外交、Conclave、Dark Coronation 等任务。\n随从招募：Sellsword 供双方招募；Knight 通常属于英雄招募，Dark Empire 或 Ophanim Theocracy 中转为黑暗阵营招募。统治者 Shadow <50%、Awareness >90% 时，另加入英雄的 Paladin 招募。\n\n出现方式\nCity 创建时固定配置。\n\n可出现地点\nCity。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/cityCentre.png\" target=\"_blank\" />、<CrossReference name=\"Vast Sewers\" href=\"?page=points-of-interest#entry-location-sub-sewers\" meta=\"兴趣点\" text=\"城市地下管网。渗透后可传播 Plague，并招募此处配置的 Vermin。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/sewers.png\" target=\"_blank\" />、<CrossReference name=\"Coven of Witches\" href=\"?page=points-of-interest#entry-location-sub-witchcoven\" meta=\"兴趣点\" text=\"可渗透的野外女巫据点，防御加成 50。渗透后可利用 Enshadow、Dark Worship 以及 Crow 招募；Menace 增长可能引来人类军队摧毁兴趣点。\n\n出现方式\n采用旧式女巫据点生成方式时放入野外兴趣点地点；宗教模式下的女巫 Temple 是另一种实现。\n\n可出现地点\n野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/coven.png\" target=\"_blank\" />、Eternal City、<CrossReference name=\"Demonic Nexus（兴趣点）\" href=\"#entry-location-sub-bloodshed-fortress\" />、<CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />",
      "limit": "满足随从的身份条件、有足够 Gold 与 Command；需要渗透的兴趣点或营地必须已完全渗透。Orc Upstart 对部分兴趣点渗透检查有豁免。",
      "statLine": "Complexity: 由随从的招募时间决定\nProfile: 20\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-sub-bloodshed-fortress",
      "name": "Demonic Nexus（兴趣点）",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "location-sub-bloodshed-fortress"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-bloodshed-fortress--place-task-base-ch-laylowwilderness"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-sub-bloodshed-fortress--place-task-base-ch-recruitminion"
          ]
        }
      ]
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
