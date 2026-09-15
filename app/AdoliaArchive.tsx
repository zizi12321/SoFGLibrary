"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "adolia",
  "name": "Adolia, the Faceless Memory",
  "number": "15",
  "theme": "adolia-theme",
  "assetDir": "adolia",
  "background": "facelessmemory_background.png",
  "portrait": "facelessmemory_portrait.png",
  "flavour": "",
  "caption": "记忆感染、Pareidolia 与化身扩散",
  "maxTurns": "500 回合",
  "awaken": "425 回合",
  "panic": "60%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限。",
  "core": [
    "让可控制的 <CrossReference name=\"Adolia Instance\" /> 接近目标，用 <CrossReference name=\"A Passing Thought\" /> 传播 <CrossReference name=\"Faceless Memory\" />。",
    "通过 <CrossReference name=\"Recollection\" /> 加速感染，<CrossReference name=\"Visual Imprint\" /> 改变对 Adolia 的偏好；<CrossReference name=\"Mind Eater\" /> 吞噬等级并补充神力。",
    "感染强度达到 100 后，人物转为自主 <CrossReference name=\"Adolia\" href=\"#entry-adolia-unit\" />；己方 Agent 可用 <CrossReference name=\"Embrace Adolia\" /> 主动成为可控制化身。",
    "在人类聚居地制造 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />，通过 <CrossReference name=\"Spread Pareidolia\" />、<CrossReference name=\"Rising Panic\" /> 与 <CrossReference name=\"Virulent Spread\" /> 加快增长、扩散。",
    "强度达到 300 后形成 <CrossReference name=\"Subsumed Settlement\" /> 并生成新的化身；<CrossReference name=\"Adolia Swarm\" /> 进一步推动聚居地转化。",
    "后期用 <CrossReference name=\"Conceptual Bleed\" /> 广泛感染人物，再用 <CrossReference name=\"Societal Collapse\" /> 瓦解王国。保留至少一个活动化身，避免额外失败条件。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "所有活动 Adolia 化身都被消灭时会失败；Adolia Swarm 按每 5 HP 计一个化身，至少计一个。Subsumed Settlement 本身不计入该存活计数。模组设置 Arcane Remedy 默认开启，允许 Alliance 制作疗法。",
    "playStyle": "通过记忆感染增殖化身，再用 Pareidolia 将人物侵蚀转成聚居地吞没。多个化身提供持续传播能力，但必须分散保留活动化身，避免被一并清除。"
  },
  "specialVictory": "无",
  "specialFailure": "所有活动 Adolia 化身都被消灭时立即失败。Adolia Swarm 按每 5 HP 计一个化身，至少计一个；Subsumed Settlement 本身不计入存活数量。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "A Passing Thought",
        "Mind Eater"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 10,
      "agents": 3,
      "reward": [
        "Recollection",
        "Visual Imprint"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 40,
      "agents": 3,
      "reward": [],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 90,
      "agents": 4,
      "reward": [
        "Pareidolia",
        "Rising Panic"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 180,
      "agents": 4,
      "reward": [
        "Virulent Spread",
        "Blissful Ignorance"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 270,
      "agents": 5,
      "reward": [],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 350,
      "agents": 5,
      "reward": [
        "Conceptual Bleed"
      ],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 425,
      "agents": 5,
      "reward": [
        "Societal Collapse",
        "苏醒"
      ],
      "powerRecovery": "8/0.28"
    }
  ],
  "powers": [
    {
      "name": "A Passing Thought",
      "seal": 0,
      "cost": 1,
      "icon": "p_icon_passingthought.png",
      "effect": "赋予目标 <CrossReference name=\"Faceless Memory\" />。选择人物单位时，同地所有 Adolia 化身增加 10 Profile、5 Menace；选择地点感染统治者时，仅同地可控制化身增加这些数值。",
      "limit": "同地须有可控制的 Adolia 化身。人物目标为非玩家控制的人物单位，排除 Chosen One 和已持有 Adolia 系特质者；感染统治者须在非黑暗势力的完全渗透聚居地，目标尚无 Faceless Memory。"
    },
    {
      "name": "Mind Eater",
      "seal": 0,
      "cost": 0,
      "icon": "p_icon_mindeater.png",
      "effect": "恢复向下取整的“目标等级 ÷ 2”点 Power，最高达到神力上限。目标等级降为 0，获得持续 25 回合的 <CrossReference name=\"Mind Eater\" href=\"#entry-mind-eater-trait\" />，随机移除一项 Adolia 以外的喜好或厌恶。",
      "limit": "非玩家控制的人物单位，已有 Faceless Memory、等级至少 2，尚无 Mind Eater 特质。"
    },
    {
      "name": "Recollection",
      "seal": 1,
      "cost": 1,
      "icon": "p_icon_recollection.png",
      "effect": "使 <CrossReference name=\"Faceless Memory\" /> 强度翻倍，随机移除一项 Adolia 以外的喜好或厌恶。",
      "limit": "已有 Faceless Memory 的非玩家人物单位或统治者。"
    },
    {
      "name": "Visual Imprint",
      "seal": 1,
      "cost": 2,
      "icon": "p_icon_preference.png",
      "effect": "对 Adolia 的偏好提升一级，最高极端喜欢，影响其治疗感染与主动传播的意愿。",
      "limit": "已有 Faceless Memory 的非玩家人物单位或统治者，尚未极端喜欢 Adolia。"
    },
    {
      "name": "Pareidolia",
      "seal": 3,
      "cost": 2,
      "icon": "icon_pareidolia.png",
      "effect": "创建 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />，逐步侵蚀聚居地；达到 300 时转化为 <CrossReference name=\"Subsumed Settlement\" />。",
      "limit": "完全渗透的人类聚居地或 Elven City，尚无 Pareidolia。"
    },
    {
      "name": "Rising Panic",
      "seal": 3,
      "cost": 2,
      "icon": "p_icon_unrest.png",
      "effect": "将当地全部 <CrossReference name=\"Unrest\" /> 转为等量 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />，后者最高 300，Unrest 清零。",
      "limit": "当地已有 Pareidolia，且 Unrest 大于 0。"
    },
    {
      "name": "Virulent Spread",
      "seal": 4,
      "cost": 3,
      "icon": "p_icon_pareidoliaspread.png",
      "effect": "在所有尚未感染的相邻人类聚居地创建 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />。",
      "limit": "来源地点 Pareidolia 至少 100，且至少有一个可传播的相邻人类聚居地。"
    },
    {
      "name": "Blissful Ignorance",
      "seal": 4,
      "cost": 4,
      "icon": "p_icon_worldpanic.png",
      "effect": "每个强度达到 300 的 Pareidolia，使临时世界恐慌减少 10 个百分点，仍受本体最低世界恐慌限制。",
      "limit": "目标地点有聚居地且 Pareidolia 至少 300。"
    },
    {
      "name": "Conceptual Bleed",
      "seal": 6,
      "cost": 4,
      "icon": "p_icon_concept.png",
      "effect": "选择一项概念标签，使对此有喜好或厌恶、拥有灵魂的非玩家人物单位及统治者感染 <CrossReference name=\"Faceless Memory\" />，排除 Chosen One 与自主邪恶人物。已感染且满足存活、拥有灵魂及非黑暗阵营条件的人物，强度全部翻倍，无须匹配所选标签。",
      "limit": "每项标签只能选择一次，Other 不可选；取消选择退还消耗。目标排除已成为 Adolia 的人物。"
    },
    {
      "name": "Societal Collapse",
      "seal": 7,
      "cost": 5,
      "icon": "p_icon_kingdom.png",
      "effect": "将目标王国已有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 的地点设为 301 并立即结算转化；其余人类聚居地各自独立。王国中尚无 Adolia 系特质的非玩家人物单位感染 <CrossReference name=\"Faceless Memory\" />。",
      "limit": "非黑暗王国首都，Pareidolia 至少 200。"
    }
  ],
  "supplicant": {
    "name": "Supplicant",
    "image": "icon_adolia.png",
    "stats": "Might 2；Lore 2；Intrigue 4；Command 3；HP 5",
    "abilities": [
      {
        "name": "Adolia Instance",
        "text": "开局即为化身，免疫老年死亡，可作为 <CrossReference name=\"A Passing Thought\" /> 的传播媒介。"
      },
      {
        "name": "Intrusive Thought",
        "text": "可选能力：每回合使同地及相邻地点的人物单位 Faceless Memory 强度额外 +1。之后招募或主动转化的可控制化身继承该选择。"
      },
      {
        "name": "Mental Leech",
        "text": "可选能力：每回合从同地感染 Faceless Memory、XP 大于 2 的非玩家人物单位各窃取 2 XP。之后招募或主动转化的可控制化身继承该选择。"
      },
      {
        "name": "Dark Memories",
        "text": "可选能力：每回合使同地英雄与侍僧个人 Shadow +1%，相邻地点英雄与侍僧个人 Shadow +2%，最高 100%。之后招募或主动转化的可控制化身继承该选择。"
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
          "name": "Faceless Memory",
          "text": "感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 <CrossReference name=\"Adolia\" href=\"#entry-adolia-unit\" />。玩家 Agent 的感染固定为 100，可自行决定是否 <CrossReference name=\"Embrace Adolia\" />。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\n<CrossReference name=\"Recollection\" />、<CrossReference name=\"Conceptual Bleed\" />、污染疗法会使强度翻倍；<CrossReference name=\"Intrusive Thought\" /> 与 <CrossReference name=\"Recursive Growth\" /> 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。"
        },
        {
          "name": "Mind Eater",
          "text": "持续 25 回合，将 Might、Lore、Intrigue、Command 的基础贡献各压至 1；其余特质或物品加成仍另行结算。",
          "id": "mind-eater-trait"
        },
        {
          "name": "Arcane Remedy",
          "text": "持续 25 回合，每回合使 Faceless Memory 强度 −2，最低 0；叠加感染自然 +1 后，通常净减少 1。对 Cleansing Ritual、Receive Arcane Remedy、Clear Mind、Buy Local Remedy 的执行意愿各减少 100。",
          "id": "arcane-remedy-trait"
        },
        {
          "name": "Placebo",
          "text": "持续 25 回合，使 Cleansing Ritual 和 Receive Arcane Remedy 的执行意愿各减少 100。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Pareidolia",
          "text": "强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 <CrossReference name=\"Adolia\" href=\"#entry-adolia-unit\" />，留下 <CrossReference name=\"Subsumed Settlement\" />。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 <CrossReference name=\"Pareidolia Crises\" />。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。",
          "id": "pareidolia-modifier",
          "image": "icon_pareidolia.png",
          "initialValue": "由 Pareidolia、Virulent Spread 或 Mass Delusion 创建时为 1。",
          "modifierChange": {
            "natural": "每回合增加 1；已成为 Subsumed Settlement 时固定为 300。",
            "external": "当地 Shadow 达到 100% 时，每回合额外 +1。\n统治者喜欢或极端喜欢 Adolia 时，每回合分别 +1、+2。\n<CrossReference name=\"Spread Pareidolia\" /> 完成时 +60；对应 <CrossReference name=\"Spread Pareidolia\" href=\"#entry-spread-pareidolia-ruler\" /> 统治者行动完成时 +50。\n<CrossReference name=\"Rising Panic\" /> 将全部 Unrest 等量加入，最高 300。\n每个相邻 <CrossReference name=\"Subsumed Settlement\" /> 每回合 +1。\n<CrossReference name=\"Adolia Swarm\" /> 每回合增加向下取整的“HP ÷ 10”；完成 Spreading Pareidolia 时增加 60 + 当前 HP，最高 300。\n<CrossReference name=\"Mass Delusion\" /> 为 −3 时，每座当地 Temple 每回合 +2；每个已有 Pareidolia 的相邻人类聚居地，再为该 Temple 所在地点额外 +1。\n<CrossReference name=\"Combat Pareidolia\" /> 或同名 <CrossReference name=\"Combat Pareidolia\" href=\"#entry-combat-pareidolia-ruler\" /> 统治者行动完成时强度减半。\n未污染的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 每回合使当地 −5、相邻尚未被吞没的地点 −2。\n<CrossReference name=\"Societal Collapse\" /> 将王国内已有修正设为 301 并立即结算。"
          }
        },
        {
          "name": "Arcane Remedy",
          "text": "提供 <CrossReference name=\"Receive Arcane Remedy\" />、<CrossReference name=\"Receive Arcane Remedy Sample\" /> 及对应统治者行动，疗法可以被 <CrossReference name=\"Corrupt Arcane Remedy\" /> 污染。\n未污染时每回合使当地 Pareidolia −5、相邻尚未被吞没地点的 Pareidolia −2。关闭模组设置 Arcane Remedy 后移除。",
          "id": "arcane-remedy-modifier",
          "image": "icon_arcaneremedy.png",
          "initialValue": "Suppress Faceless Memory 创建时为 100；Distribute Arcane Remedy 创建时为 0。",
          "modifierChange": {
            "natural": "强度低于 100 时，每回合增加 5。",
            "external": ""
          }
        },
        {
          "name": "Arcane Remedy (Corrupted)",
          "text": "英雄执行 <CrossReference name=\"Receive Arcane Remedy\" /> 时感染强度翻倍；统治者执行 <CrossReference name=\"Take Arcane Remedy\" /> 时感染翻倍并获得 Placebo。采集的样本也被污染，可通过 <CrossReference name=\"Distribute Arcane Remedy\" /> 扩散。关闭模组设置 Arcane Remedy 后移除。",
          "id": "arcane-remedy-corrupted-modifier",
          "image": "icon_arcaneremedycorrupt.png",
          "initialValue": "污染现有疗法时保留原强度；Distribute Arcane Remedy 创建时为 0。",
          "modifierChange": {
            "natural": "强度低于 100 时，每回合增加 5。",
            "external": ""
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n当地完全 Enshadowed 时，<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 每回合额外增加 1。Dark Memories 改变的是人物 Shadow。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": ""
          },
          "initialValue": ""
        },
        {
          "name": "Madness",
          "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。",
          "image": "./iastur/madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 强度达到 50、100、150 时，分别使当地已有 Madness 每回合增加 1、2、3，采用符合条件的最高档。\n<CrossReference name=\"Pareidolia Crises\" /> 的疯狂结果增加 25。\n<CrossReference name=\"Mass Delusion\" /> 为 −3 时，每座 Temple 每回合增加 0.5。"
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
            "external": "<CrossReference name=\"Madness\" /> 超过 100 时，每回合增加其强度 ÷ 75。\n<CrossReference name=\"Rising Panic\" /> 将当地 Unrest 转为 Pareidolia 后，把 Unrest 清零。\n英雄完成 <CrossReference name=\"Combat Pareidolia\" /> 时，增加减半后 Pareidolia 强度 × 0.3，向下取整。\n统治者完成 <CrossReference name=\"Combat Pareidolia\" href=\"#entry-combat-pareidolia-ruler\" /> 时，增加减半后 Pareidolia 强度 × 0.4，向下取整。\n<CrossReference name=\"Pareidolia Crises\" /> 的骚乱结果对已有且低于 200 的 Unrest 增加 50。"
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
          "name": "Subsumed Settlement",
          "text": "由 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 <CrossReference name=\"An Adolia\" />。",
          "image": "set_adolia.png"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Arcane Remedy Sample",
          "text": "通过 <CrossReference name=\"Receive Arcane Remedy Sample\" /> 取得；<CrossReference name=\"Distribute Arcane Remedy\" /> 消耗样本，在另一个 City 或 Elven City 建立正常疗法。也可执行 <CrossReference name=\"Corrupt Arcane Remedy Sample\" />。关闭 Arcane Remedy 设置后移除。",
          "image": "icon_arcaneremedy.png"
        },
        {
          "name": "Corrupted Arcane Remedy Sample",
          "text": "通过污染样本，或从污染疗法处采集获得。<CrossReference name=\"Distribute Arcane Remedy\" /> 会建立污染疗法。关闭 Arcane Remedy 设置后移除。",
          "image": "icon_arcaneremedycorrupt.png"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "media": true,
      "items": [
        {
          "name": "An Adolia",
          "text": "可从完全渗透的聚居地或 Subsumed Settlement 招募，占用正常 Agent 上限与招募次数。继承 Supplicant 开局所选的 Intrusive Thought、Mental Leech 或 Dark Memories。",
          "image": "icon_adolia.png",
          "stats": "Might 1；Lore 3；Intrigue 3；Command 1；HP 5",
          "abilities": [
            {
              "name": "Adolia Instance",
              "id": "recruited-adolia-instance",
              "text": "免疫老年死亡，可作为 A Passing Thought 的媒介；每回合移除 Mourning。"
            }
          ]
        },
        {
          "name": "Adolia",
          "text": "感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 <CrossReference name=\"Embrace Adolia\" /> 转化的化身可控制。\n世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。",
          "id": "adolia-unit",
          "image": "icon_adolia.png",
          "stats": "Might 继承；Lore 继承；Intrigue 继承；Command 继承；HP 5。聚居地新生成者四项基础数值分别随机为 1–3",
          "abilities": [
            {
              "name": "Adolia Instance",
              "id": "wandering-adolia-instance",
              "text": "免疫老年死亡，每回合移除 Mourning；自主化身的 Attack 修正为负的基础 Might，可控制化身不受该修正。"
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
          "name": "Embrace Adolia",
          "image": "icon_adolia.png",
          "meta": "Other",
          "statLine": "Complexity: 3　Profile: 0　Menace: 0　XP: 8",
          "location": "执行者所在地点。",
          "limit": "持有 Faceless Memory 的己方 Agent。",
          "text": "转化为可控制的 <CrossReference name=\"Adolia\" href=\"#entry-adolia-unit\" />，保留姓名和四项基础属性，HP 重设为 5。原有特质和独有能力清除，获得 Supplicant 开局所选能力。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Combat Pareidolia",
          "image": "icon_pareidolia.png",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 50 + 50 × 世界恐慌　Menace: 向下取整（强度 × 0.2）+ 50 × 世界恐慌；统治者 Awareness 为 0 时再 +10　XP: 42",
          "location": "<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />，且聚居地尚未被吞没。",
          "limit": "执行者对 Adolia 没有正面偏好。",
          "text": "强度减半，再增加向下取整的“减半后强度 × 0.3”点 Unrest。处理前强度大于 100 时，除 Chosen One 外，未感染执行者有 20% 概率获得 Faceless Memory。完成时 Profile +6。",
          "positiveTags": "无",
          "negativeTags": "Adolia、Shadow、Madness、Discord、Disease"
        },
        {
          "name": "Obsess Over Adolia",
          "image": "p_icon_preference.png",
          "meta": "Lore",
          "statLine": "Complexity: 15　Profile: 向下取整（强度 × 0.2）+ 50 × 世界恐慌；统治者 Awareness 为 0 时再 +10　Menace: 0　XP: 29",
          "location": "强度至少 100 的 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />。",
          "limit": "非玩家英雄或侍僧，对 Adolia 的偏好为喜欢。",
          "text": "对 Adolia 的偏好提升为极端喜欢。完成时 Profile +1、Menace +5。",
          "positiveTags": "Adolia",
          "negativeTags": "无"
        },
        {
          "name": "Recursive Growth",
          "image": "p_icon_preference.png",
          "meta": "Lore",
          "statLine": "Complexity: 2　Profile: 0　Menace: 0　XP: 6",
          "location": "人类聚居地。",
          "limit": "已有 Faceless Memory、喜欢 Adolia 的非玩家人物。",
          "text": "自身感染强度 +10；若与已感染英雄或统治者交谈，改为双方各 +20。与未感染对象交谈时有 76% 概率感染对方；英雄交谈对象还被 Disrupted 3 回合。完成时 Profile +15、Menace +10。",
          "positiveTags": "Adolia",
          "negativeTags": "无"
        },
        {
          "name": "Cleansing Ritual",
          "image": "cathedral.png",
          "meta": "Other",
          "statLine": "Complexity: 5　Profile: 50 + 50 × 世界恐慌　Menace: 0　XP: 12",
          "location": "带 Cathedral 的人类聚居地。",
          "limit": "已有 Faceless Memory，Awareness 至少 50%，对 Adolia 无正面偏好。",
          "text": "感染强度减半；Cathedral 已 Desecrated 时改为翻倍。完成时 Profile +5。",
          "positiveTags": "Religion、Cooperation",
          "negativeTags": "Adolia、Gold"
        },
        {
          "name": "Clear Mind",
          "image": "library.png",
          "meta": "Lore",
          "statLine": "Complexity: 40　Profile: 70 + 50 × 世界恐慌　Menace: 0　XP: 60",
          "location": "带 Library 的人类聚居地。",
          "limit": "已感染的英雄，Awareness 至少 50%，对 Adolia 无正面偏好；Lore 至少 4，或为 Mage、Elven Specialist。",
          "text": "感染强度减半；当地完全渗透时改为获得 <CrossReference name=\"Placebo\" />。完成时 Profile +5。",
          "positiveTags": "无",
          "negativeTags": "Adolia"
        },
        {
          "name": "Buy Local Remedy",
          "image": "market.png",
          "meta": "Other",
          "statLine": "Complexity: 5　Profile: 50 + 50 × 世界恐慌　Menace: 0　XP: 12",
          "location": "同时带 Library 与 Market 的人类聚居地。",
          "limit": "已感染，Gold 至少 30，Awareness 至少 50%，对 Adolia 无正面偏好。",
          "text": "消耗 30 Gold，使感染强度减半；当地完全渗透时改为获得 <CrossReference name=\"Placebo\" />。完成时 Profile +5。",
          "positiveTags": "无",
          "negativeTags": "Adolia、Gold"
        },
        {
          "name": "Receive Arcane Remedy",
          "image": "icon_arcaneremedy.png",
          "meta": "Other",
          "statLine": "Complexity: 5　Profile: 90 + 50 × 世界恐慌　Menace: 0　XP: 12",
          "location": "强度至少 100 的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 或其污染版本。",
          "limit": "已有 Faceless Memory，Awareness 至少 50%，对 Adolia 无正面偏好。",
          "text": "正常疗法将感染强度减半，并获得 25 回合的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-trait\" />；污染疗法使感染强度翻倍。完成时 Profile +5。",
          "positiveTags": "Cooperation",
          "negativeTags": "Adolia"
        }
      ]
    },
    {
      "id": "shared-tasks",
      "title": "双方可执行的任务",
      "media": true,
      "items": [
        {
          "name": "Spread Pareidolia",
          "image": "icon_pareidolia.png",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 60 + 2 × 强度　Menace: （300 − 强度）÷ 5　XP: 42",
          "location": "<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />，且聚居地尚未被吞没。",
          "limit": "己方 Agent 可执行；自主人物须极端喜欢 Adolia。同任务的非玩家执行者还受当前化身数量限制。",
          "text": "强度增加 60。完成时 Profile +5、Menace +12。"
        },
        {
          "name": "Corrupt Arcane Remedy",
          "image": "icon_arcaneremedycorrupt.png",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 0　Menace: 0　XP: 72",
          "location": "<CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 所在聚居地。",
          "limit": "Arcane Remedy 选项已启用，疗法尚未被污染，地点 Infiltration 大于 0；己方 Agent 或极端喜欢 Adolia 的人物可执行。",
          "text": "将疗法变为 <CrossReference name=\"Arcane Remedy (Corrupted)\" href=\"#entry-arcane-remedy-corrupted-modifier\" />。完成时 Profile +5、Menace +7。"
        },
        {
          "name": "Receive Arcane Remedy Sample",
          "image": "icon_arcaneremedy.png",
          "meta": "Lore",
          "statLine": "Complexity: 15　Profile: 90 + 50 × 世界恐慌　Menace: 0　XP: 29",
          "location": "强度达到 100 的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 或其污染版本。",
          "limit": "Arcane Remedy 选项已启用，身上没有同类样本。非玩家人物 Awareness 至少 100%；己方 Agent 须处于已污染的疗法地点，或当地 Infiltration 大于 0。",
          "text": "获得 <CrossReference name=\"Arcane Remedy Sample\" />，样本继承所在地疗法的污染状态。完成时 Profile +10。"
        },
        {
          "name": "Distribute Arcane Remedy",
          "image": "icon_arcaneremedy.png",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 90 + 50 × 世界恐慌　Menace: 0　XP: 42",
          "location": "尚无 Arcane Remedy 的 City 或 Elven City。",
          "limit": "携带 Arcane Remedy Sample，双方人物均可执行。",
          "text": "消耗持有的全部同类样本，创建 0 强度的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" />；使用污染样本时创建污染版本。完成时 Profile +10。"
        },
        {
          "name": "Corrupt Arcane Remedy Sample",
          "image": "icon_arcaneremedycorrupt.png",
          "meta": "Lore",
          "statLine": "Complexity: 10　Profile: 0　Menace: 0　XP: 21",
          "location": "持有样本的人物所在地点。",
          "limit": "Arcane Remedy 选项已启用，样本尚未污染；己方 Agent 或喜欢 Adolia 的人物可执行。",
          "text": "把物品改为 <CrossReference name=\"Corrupted Arcane Remedy Sample\" />。完成时 Profile +10、Menace +7。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "name": "Fund Personal Remedy",
          "image": "i_potionOfLesserHealing.png",
          "time": "5 回合",
          "location": "感染 Faceless Memory 的统治者所在聚居地。",
          "limit": "Awareness 至少 50%，Gold 至少 25。",
          "text": "消耗 25 Gold，将自身感染强度减半，向下取整。",
          "positiveTags": "无",
          "negativeTags": "Gold、Adolia"
        },
        {
          "name": "Recursive Growth",
          "image": "p_icon_preference.png",
          "time": "5 回合",
          "location": "感染 Faceless Memory 的统治者所在聚居地。",
          "limit": "喜欢 Adolia。",
          "text": "通常自身感染强度增加 40。若交谈对象是已感染、拥有灵魂的英雄，自身增加 60，对方增加 40；未感染英雄有 24% 概率被感染。",
          "positiveTags": "Cooperation、Adolia",
          "negativeTags": "无",
          "id": "recursive-growth-ruler"
        },
        {
          "name": "Take Arcane Remedy",
          "image": "icon_arcaneremedy.png",
          "time": "5 回合",
          "location": "当地或邻地有 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 的聚居地。",
          "limit": "统治者已感染且强度至少 15，Awareness 至少 50%。",
          "text": "优先使用当地疗法，否则使用第一个相邻疗法。正常疗法使感染强度减半并获得 25 回合 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-trait\" />；污染疗法使其翻倍并获得 <CrossReference name=\"Placebo\" />。",
          "positiveTags": "无",
          "negativeTags": "Adolia"
        },
        {
          "name": "Obtain Arcane Remedy",
          "image": "i_potionOfLesserHealing.png",
          "time": "5 回合",
          "location": "<CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" /> 所在聚居地。",
          "limit": "Arcane Remedy 选项已启用，统治者已感染且 Awareness 至少 50%，没有 Arcane Remedy 人物特质。",
          "text": "感染强度减半，并获得 25 回合 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-trait\" />。",
          "positiveTags": "无",
          "negativeTags": "Gold、Adolia"
        },
        {
          "name": "Combat Pareidolia",
          "image": "icon_pareidolia.png",
          "time": "5 回合",
          "location": "<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 所在聚居地。",
          "limit": "Pareidolia 强度至少 50，统治者 Gold 至少 50。",
          "text": "消耗 50 Gold，使强度减半，再增加向下取整的“减半后强度 × 0.4”点 Unrest。",
          "positiveTags": "无",
          "negativeTags": "Gold、Adolia",
          "id": "combat-pareidolia-ruler"
        },
        {
          "name": "Spread Pareidolia",
          "image": "p_icon_pareidoliaspread.png",
          "time": "5 回合",
          "location": "<CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 所在聚居地。",
          "limit": "统治者极端喜欢 Adolia。",
          "text": "Pareidolia 强度增加 50。",
          "positiveTags": "Adolia",
          "negativeTags": "Gold",
          "id": "spread-pareidolia-ruler"
        }
      ]
    },
    {
      "id": "national-actions",
      "title": "国家行动",
      "media": true,
      "items": [
        {
          "name": "Suppress Faceless Memory",
          "image": "icon_arcaneremedy.png",
          "time": "10 回合",
          "location": "Alliance 首都；无首都时选择其一个领地。",
          "limit": "Arcane Remedy 选项已启用，尚未制成疗法且 Alliance 领土内没有疗法；世界恐慌至少 50%，君主 Awareness 至少 50%。",
          "text": "君主消耗 25 Gold，创建强度为 100 的 <CrossReference name=\"Arcane Remedy\" href=\"#entry-arcane-remedy-modifier\" />。",
          "positiveTags": "Cooperation",
          "negativeTags": "Adolia、Shadow、Discord"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "name": "Adolia Swarm",
          "text": "自主前往已有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 的人类聚居地，促进感染。同地多个 Swarm 会合并，HP 和 Menace 相加。每回合为当地已有 Pareidolia 增加向下取整的“当前 HP ÷ 10”。",
          "image": "icon_adolia.png",
          "stats": "新建 HP = 合并化身数 × 5；初始满血。合并既有 Swarm 时，当前 HP 相加并设为新上限；化身加入现有 Swarm 时，每人使当前 HP 与上限各 +5",
          "abilities": [
            {
              "name": "Spreading Pareidolia",
              "text": "在已有 Pareidolia 的人类聚居地持续 5 回合，前四回合每回合 Menace +2；完成时 Pareidolia 增加 60 + 当前 HP，最高 300。"
            }
          ]
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教教义",
      "media": false,
      "items": [
        {
          "name": "Mass Delusion",
          "text": "",
          "tenetRange": "-3 – 0",
          "tenetLevels": [
            {
              "level": -3,
              "text": "每座 Temple 在当地没有 Pareidolia 时创建强度 1；已有修正时，每回合使当地强度 +2、Temple Menace +0.5，并检查相邻人类聚居地：未感染的地点创建强度 1；每个已感染的相邻地点，再为 Temple 所在地点增加 1 强度。"
            }
          ],
          "meta": "适用于非黑暗信仰，Witches 除外"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "Mass Delirium",
          "image": "event_adolia0.jpg",
          "text": "模组事件。在已有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />、尚未被吞没的聚居地执行任务时，定义概率 10%。",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Feed their delusions",
              "text": "当地 Shadow +50 个百分点；Menace +5；任务进度 −15。"
            },
            {
              "name": "Rob them",
              "text": "Gold +50；Menace +8；任务进度 −10。"
            }
          ]
        },
        {
          "name": "Social Decay",
          "image": "event_adolia3.jpg",
          "text": "模组事件。在已有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" />、尚未被吞没的聚居地执行任务时，定义概率 10%。",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Fan the flames",
              "text": "当地 Unrest +50；Menace +8；Profile +5；任务进度 −15。"
            },
            {
              "name": "Join in the looting",
              "text": "Gold +50；Menace +5；Profile +5；任务进度 −10。"
            },
            {
              "name": "Hide in the chaos",
              "text": "Menace −10；Profile −10；任务进度 −10。"
            }
          ]
        },
        {
          "name": "Confused Vendor",
          "image": "event_adolia6.jpg",
          "text": "模组事件。在人类聚居地已有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 且尚未被吞没时，任务中定义概率 10%。",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Assist them",
              "text": "Menace −10；Profile −5；任务进度 −15。"
            },
            {
              "name": "Take advantage of them",
              "text": "Gold +50；Menace +5；Profile +5；任务进度 −15。"
            },
            {
              "name": "Purchase an item for cheap",
              "text": "66.67%：Gold −30；获得普通物品。\n33.33%：Gold −30；获得稀有物品。",
              "condition": "至少 30 Gold。"
            }
          ]
        },
        {
          "name": "Aftermath",
          "image": "event_adolia9.jpg",
          "text": "模组事件。非 Adolia 化身移动进入 <CrossReference name=\"Subsumed Settlement\" /> 时，定义概率 20%。",
          "eventOptions": [
            {
              "name": "Loot",
              "text": "12.5%：Gold +15。\n12.5%：Gold +30。\n50%：无效果。\n12.5%：获得普通物品。\n12.5%：获得稀有物品。"
            },
            {
              "name": "Rest",
              "text": "Profile −10；HP +5。"
            },
            {
              "name": "Keep moving",
              "text": "无效果。"
            }
          ]
        },
        {
          "name": "A Sighting",
          "image": "event_adolia4.jpg",
          "text": "模组事件。可控制的 Adolia 化身移动经过非 Arctic、非 Desert 的人类聚居地时，定义概率 3%。",
          "eventOptions": [
            {
              "name": "Keep moving",
              "text": "无效果。"
            },
            {
              "name": "Give them a name",
              "text": "当地 Shadow +50 个百分点；Menace +10；Profile +15。"
            },
            {
              "name": "Turn to face them",
              "text": "当地 Madness +100；Menace +10；Profile +15。"
            }
          ]
        },
        {
          "name": "Two Silent Ghosts",
          "image": "event_adolia7.jpg",
          "text": "模组事件。可控制的 Adolia 化身移动经过 City Ruins 或 <CrossReference name=\"Subsumed Settlement\" /> 时，定义概率 5%。",
          "eventOptions": [
            {
              "name": "Far from civilization their presence fades",
              "text": "Menace −10；Profile −15。"
            }
          ]
        },
        {
          "name": "Bewildered Bandits",
          "image": "event_adolia5.jpg",
          "text": "模组事件。非 Adolia 化身移动经过同时有 <CrossReference name=\"Pareidolia\" href=\"#entry-pareidolia-modifier\" /> 与 Banditry、尚未被吞没的地点时，定义概率 10%。",
          "eventOptions": [
            {
              "name": "Give in to their demands",
              "text": "50%：失去全部 Gold。\n50%：无效果。"
            },
            {
              "name": "Manipulate them",
              "text": "25%：HP −4。\n25%：Gold +50。\n50%：无效果。"
            },
            {
              "name": "Try to run",
              "text": "50%：HP −3。\n50%：无效果。"
            }
          ]
        },
        {
          "name": "Something Familiar",
          "image": "event_adolia2.jpg",
          "text": "模组事件。偶数回合，感染 Faceless Memory 的非玩家人物或统治者，定义概率 0.1%。",
          "eventOptions": [
            {
              "name": "A figment",
              "text": "无效果。"
            },
            {
              "name": "Family",
              "text": "个人 Shadow +100 个百分点；变为极端喜欢 Adolia；Power −1。",
              "condition": "当前 Power >0。"
            },
            {
              "name": "Adolia",
              "text": "个人 Shadow +100 个百分点；变为极端喜欢 Adolia；Power −1。",
              "condition": "个人 Shadow >99%。"
            }
          ]
        },
        {
          "name": "Faceless Form",
          "image": "event_adolia1.jpg",
          "text": "模组事件。偶数回合，感染 Faceless Memory 的非玩家人物或统治者，定义概率 0.1%。",
          "eventOptions": [
            {
              "name": "It continues to eat away at %him...",
              "text": "无效果。"
            },
            {
              "name": "...Until there is nothing left",
              "text": "该人物死亡；Power +2。"
            }
          ]
        },
        {
          "name": "Pareidolia Crises",
          "image": "icon_pareidolia.png",
          "text": "模组代码触发。强度为 100–299 的人类聚居地需有统治者；距离上次判定超过 25 回合时，每回合有 5% 概率尝试一次危机。\n可能中断统治者行动并改为 Political Gridlock；已有 Unrest 低于 200 时增加 50；人口至少 4 且 Madness 低于 100 时增加 25 Madness；尚无 Banditry 时创建强度 15。\n饥荒分支使人口减少其 1/4（整数除法），再按减少后人口的 1/4 增加 Death。失金分支要求统治者至少 20 Gold，先移除约半数 Gold，再把剩余 Gold 的一半存入新 Item Cache。"
        }
      ]
    }
  ],
  "relations": {
    "pareidolia-modifier": {
      "sources": [
        {
          "name": "Pareidolia",
          "href": "#entry-pareidolia"
        },
        {
          "name": "Virulent Spread",
          "href": "#entry-virulent-spread"
        },
        {
          "name": "Mass Delusion",
          "href": "#entry-mass-delusion"
        }
      ],
      "effects": [
        {
          "name": "Subsumed Settlement",
          "href": "#entry-subsumed-settlement"
        }
      ]
    },
    "arcane-remedy-modifier": {
      "sources": [
        {
          "name": "Suppress Faceless Memory",
          "href": "#entry-suppress-faceless-memory"
        },
        {
          "name": "Distribute Arcane Remedy",
          "href": "#entry-distribute-arcane-remedy"
        }
      ],
      "effects": [
        {
          "name": "Receive Arcane Remedy",
          "href": "#entry-receive-arcane-remedy"
        },
        {
          "name": "Receive Arcane Remedy Sample",
          "href": "#entry-receive-arcane-remedy-sample"
        }
      ]
    },
    "arcane-remedy-corrupted-modifier": {
      "sources": [
        {
          "name": "Corrupt Arcane Remedy",
          "href": "#entry-corrupt-arcane-remedy"
        },
        {
          "name": "Distribute Arcane Remedy",
          "href": "#entry-distribute-arcane-remedy"
        }
      ],
      "effects": [
        {
          "name": "Corrupted Arcane Remedy Sample",
          "href": "#entry-corrupted-arcane-remedy-sample"
        }
      ]
    },
    "Faceless Memory": {
      "sources": [
        {
          "name": "A Passing Thought",
          "href": "#entry-a-passing-thought"
        },
        {
          "name": "Conceptual Bleed",
          "href": "#entry-conceptual-bleed"
        },
        {
          "name": "Societal Collapse",
          "href": "#entry-societal-collapse"
        },
        {
          "name": "Recursive Growth",
          "href": "#entry-recursive-growth"
        }
      ],
      "effects": []
    },
    "mind-eater-trait": {
      "sources": [
        {
          "name": "Mind Eater",
          "href": "#entry-mind-eater"
        }
      ],
      "effects": []
    },
    "Pareidolia": {
      "effects": [
        {
          "name": "Pareidolia",
          "href": "#entry-pareidolia-modifier"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function AdoliaArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
