"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "vinerva",
  "name": "Vinerva, the Dark Goddess",
  "number": "03",
  "theme": "vinerva-theme",
  "assetDir": "vinerva",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "森林之心、诱惑馈赠与自然军势",
  "maxTurns": "500 回合",
  "awaken": "第 420 回合",
  "panic": "50%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerRecovery": "神力上限＝已破封印数 + 1。每回合恢复 0.035 × 神力上限 × 难度恢复系数²；世界初始化与神力恢复各应用一次难度系数。表中按难度系数 1 列示。",
  "core": [
    "用 <CrossReference name=\"Heart of the Forest\" /> 建立据点与根系网络，保证其他神力始终在 3 格范围内有施放中心。",
    "先放置 <CrossReference name=\"Grove of Golden Roses\" />、<CrossReference name=\"Grove of Nectar\" />、<CrossReference name=\"Grove of Peace Lillies\" /> 或 <CrossReference name=\"Grove of Leper's Succor\" />，向人类提供解决问题的礼物。",
    "等统治者执行对应行动，累积 <CrossReference name=\"Vinerva's Gift\" />；英雄则会被 <CrossReference name=\"Gift of Salvation\" /> 和 <CrossReference name=\"Gift of Might\" /> 任务吸引。",
    "用 <CrossReference name=\"Black Forest\" />、<CrossReference name=\"Neurotoxins\" /> 和 <CrossReference name=\"Choking Spores\" /> 把礼物转成 Shadow、Madness 和经济衰败；用 <CrossReference name=\"Pheromones\" /> 提高接受意愿。",
    "用 <CrossReference name=\"Vinerva Seed\" /> 让 Agent 迁移根系，或把高 Gift 的聚居地转化为 <CrossReference name=\"Manifestation\" />。",
    "最后用 <CrossReference name=\"Wilderness Spirits\" /> 制造不可控制的自然军势，清理剩余的人类据点。"
  ],
  "overviewExtra": {
    "title": "Gift 与森林网络",
    "text": "Vinerva 没有初始 Agent，也不会按通常开局放置 Elder Tomb；开局提供 3 次招募额度，但同时在场的 Agent 仍受封印上限限制。\n\n<CrossReference name=\"Vinerva's Gift\" /> 是统治者接受馈赠后留下的地点资源，换任统治者不会主动将它清除。<CrossReference name=\"Heart of the Forest\" href=\"#entry-heart-location\" /> 是据点设施，可以依附现有聚居地；有害神力增加最近 Heart 的 Menace，使人类国家更可能派军队摧毁它。下列神力的 Menace 数值均以难度系数 1 为准，实际取 floor(基础值 × 难度增长系数)。"
  },
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Heart of the Forest",
        "Grove of Golden Roses"
      ],
      "powerRecovery": "1 / 0.035"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [
        "Grove of Salvation",
        "Black Forest"
      ],
      "powerRecovery": "2 / 0.07"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 3,
      "reward": [
        "Grove of Nectar",
        "Grove of Peace Lillies"
      ],
      "powerRecovery": "3 / 0.105"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [
        "Choking Spores",
        "Grove of Leper's Succor"
      ],
      "powerRecovery": "4 / 0.14"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 4,
      "reward": [
        "Grove of Dragonflower"
      ],
      "powerRecovery": "5 / 0.175"
    },
    {
      "seal": 5,
      "progress": 110,
      "agents": 4,
      "reward": [
        "Neurotoxins",
        "Pheromones"
      ],
      "powerRecovery": "6 / 0.21"
    },
    {
      "seal": 6,
      "progress": 150,
      "agents": 4,
      "reward": [
        "Serpentine Vines"
      ],
      "powerRecovery": "7 / 0.245"
    },
    {
      "seal": 7,
      "progress": 200,
      "agents": 5,
      "reward": [
        "Manifestation"
      ],
      "powerRecovery": "8 / 0.28"
    },
    {
      "seal": 8,
      "progress": 300,
      "agents": 5,
      "reward": [],
      "powerRecovery": "9 / 0.315"
    },
    {
      "seal": 9,
      "progress": 420,
      "agents": 5,
      "reward": [
        "Wilderness Spirits",
        "苏醒"
      ],
      "powerRecovery": "10 / 0.35"
    }
  ],
  "powers": [
    {
      "seal": 0,
      "name": "Heart of the Forest",
      "cost": "动态",
      "icon": "heart-of-forest.png",
      "effect": "建立 <CrossReference name=\"Heart of the Forest\" href=\"#entry-heart-location\" />；空地点会先生成容纳设施的据点。首次消耗 0，之后消耗 min(4, max(1, floor(N/2))) Power，N 为此前未消耗种子的施放次数。不用种子时依次为 0、1、1、1、2、2、3、3、4，此后为 4。\n当地任一人物携有 Vinerva Seed 时会消耗找到的第一枚种子，并且该次不增加 N；即使地点本来就在范围内也会消耗种子。已有 5 个设施的地点可以被选中，但实际不会加入新的 Heart。",
      "limit": "陆地，不能已有 Heart of the Forest。当前没有 Heart 时可自由选址；否则须在现有 Heart 的 3 步路径范围内，或当地有人物携有 Vinerva Seed。"
    },
    {
      "seal": 0,
      "name": "Grove of Golden Roses",
      "cost": 1,
      "icon": "grove-golden-roses.png",
      "effect": "建立 Temptation of Gold，向统治者提供 Accept Gift of Gold：获得 75 Gold，创建 Lingering Resentment，并增加 Vinerva's Gift。",
      "limit": "只能放在人类聚居地，且该地不能已有同名 Grove；目标必须处于任一 Heart of the Forest 的 3 格范围内。"
    },
    {
      "seal": 1,
      "name": "Grove of Salvation",
      "cost": 2,
      "icon": "grove-salvation.png",
      "effect": "建立 Temptation of Salvation，提供 Gift of Salvation：执行者 Shadow 减半，Sanity 减少 8。可在同一地点重复建立，执行任务不消耗花园。",
      "limit": "只能施放在 Heart of the Forest 3 格内的陆地。"
    },
    {
      "seal": 1,
      "name": "Black Forest",
      "cost": 0,
      "icon": "black-forest.png",
      "effect": "把带有 Vinerva's Gift 的统治者 Shadow 提高同等数量，并以 100% Shadow 为上限；消耗对应的 Gift。每次使用还会给最近的 Heart of the Forest 增加 15 Menace。",
      "limit": "有统治者的人类聚居地，存在 Vinerva's Gift，统治者 Shadow 低于 100%。有 Heart of the Forest 时须在其 3 步路径范围内；当前没有 Heart 时不检查距离。"
    },
    {
      "seal": 2,
      "name": "Grove of Nectar",
      "cost": 1,
      "icon": "grove-nectar.png",
      "effect": "建立 Temptation of Nectar，提供 Accept Gift of Nectar：把已有 Famine 设为 1，并留下 Gift of Nectar、增加 Vinerva's Gift。Gift of Nectar 在食物结算时将当前产量乘 2 后加 50。",
      "limit": "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。"
    },
    {
      "seal": 2,
      "name": "Grove of Peace Lillies",
      "cost": 2,
      "icon": "grove-peace-lillies.png",
      "effect": "建立 Temptation of Peace，提供 Accept Gift of Peace：把已有 Unrest 设为 1，并增加 Vinerva's Gift。没有额外的持续安抚修正。",
      "limit": "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。"
    },
    {
      "seal": 3,
      "name": "Choking Spores",
      "cost": 3,
      "icon": "choking-spores.png",
      "effect": "在目标创建一项 <CrossReference name=\"Choking Spores\" href=\"#entry-choking-spores-modifier\" />，并在每个尚无此修正的相邻地点创建一项。每项使 Prosperity 的计算值减少 0.25。不消耗 Vinerva's Gift；最近 Heart of the Forest 增加 15 Menace。",
      "limit": "有统治者的人类聚居地，Vinerva's Gift 至少 50。有 Heart of the Forest 时须在其 3 步路径范围内；当前没有 Heart 时不检查距离。目标已有 Choking Spores 的拒绝检查会受修正排列顺序影响：若先找到 Gift 就提前结束检查，因此部分情况下仍可重复施放；相邻地点则始终跳过已有修正。"
    },
    {
      "seal": 3,
      "name": "Grove of Leper's Succor",
      "cost": 2,
      "icon": "grove-lepers-succor.png",
      "effect": "建立 Temptation of Health，提供 Accept Gift of Health：把已有 Plague 设为 1，并增加 Vinerva's Gift。",
      "limit": "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。"
    },
    {
      "seal": 4,
      "name": "Grove of Dragonflower",
      "cost": 1,
      "icon": "grove-dragonflower.png",
      "effect": "建立 Temptation of Might，提供 Gift of Might，使英雄获得或加深 Vinerva's Gift of Might。每次食用刷新 22 回合持续时间；强化幅度由累计食用次数决定。可重复建立，执行任务不消耗花园。",
      "limit": "可施放在 Heart 的 3 格范围内的任意陆地。"
    },
    {
      "seal": 5,
      "name": "Neurotoxins",
      "cost": 1,
      "icon": "neurotoxins.png",
      "effect": "消耗 X＝min(150，现有 Vinerva's Gift) 点 Gift，增加 2X 点 Madness，最终 Madness 上限 300。消耗量不按已有 Madness 调减，超过上限的部分会浪费；例如已有 250 Madness 时，仍可能消耗 150 Gift 而只增加 50 Madness。最近 Heart of the Forest 增加 15 Menace。",
      "limit": "有统治者的人类聚居地，存在 Vinerva's Gift。有 Heart of the Forest 时须在其 3 步路径范围内；当前没有 Heart 时不检查距离。"
    },
    {
      "seal": 5,
      "name": "Pheromones",
      "cost": 3,
      "icon": "pheromones.png",
      "effect": "新增一项强度 100 的 Tempting Pheromones。每项独立衰减，接受六种馈赠的行动动机按所有该修正的强度合计 × 0.25 增加；重复施放新增一项。",
      "limit": "必须在 Heart 的 3 格范围内施放在陆地上。"
    },
    {
      "seal": 6,
      "name": "Serpentine Vines",
      "cost": 3,
      "icon": "serpentine-vines.png",
      "effect": "将当地每项英雄任务和中立挑战的额外 Danger 设为 8，邪恶挑战不受影响。原有固有 Danger 另计；重复施放覆盖额外值，不叠加 8。危险被执行者遭遇并结算后，额外值有概率逐点减少。最近 Heart of the Forest 增加 10 Menace。",
      "limit": "可以选择任意地点。有 Heart of the Forest 时须在其 3 步路径范围内；当前没有 Heart 时不检查距离。"
    },
    {
      "seal": 7,
      "name": "Manifestation",
      "cost": 1,
      "icon": "manifestation.png",
      "effect": "清空当地 Vinerva's Gift，摧毁原人类聚居地并替换为 <CrossReference name=\"Manifestation\" href=\"#entry-manifestation-location\" />；保留原废墟中幸存的设施，新增 Heart of the Forest，并清除地点所属国家。除摧毁聚居地的分数外，每个 Manifestation 额外计 3 点胜利分。",
      "limit": "有统治者的人类聚居地，Vinerva's Gift 至少 125。有 Heart of the Forest 时须在其 3 步路径范围内；当前没有 Heart 时不检查距离。"
    },
    {
      "seal": 9,
      "name": "Wilderness Spirits",
      "cost": 3,
      "icon": "wilderness-spirits.png",
      "effect": "生成一支不可控制的 Wilderness Spirit，初始与最大 HP 固定为 50。它主动夷平 Shadow 低于 50% 的人类聚居地，并在每回合把所在领地全部变成森林。最近 Heart of the Forest 增加 30 Menace。",
      "limit": "陆地，且不属于人类国家 Society；不要求没有聚居地或单位。目标须在任一 Heart of the Forest 的 3 步路径范围内。"
    }
  ],
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "media": true,
      "items": [
        {
          "name": "Vinerva's Gift of Might",
          "image": "grove-dragonflower.png",
          "text": "Gift of Might 首次执行建立等级 1，此后每次直接加 1，并将持续时间重置为 22 回合。持续时间内，等级 1–7 的 Might 加成依次为 +4、+3、+2、+2、+1、+1、0，等级 8 及以上为 −1；持续时间耗尽也变为 −1。虽然特质声明最大等级 5，重复食用的代码没有使用该限制。\n接受动机中的成瘾项为 min(250，40 + 5 × 等级)，剩余强化回合每回合压低动机 7。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Vinerva's Gift",
          "image": "gift.png",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Accept Gift of Gold\" /> 完成时增加 50，上限 300。\n<CrossReference name=\"Accept Gift of Nectar\" /> 完成时增加 125，上限 300。\n<CrossReference name=\"Accept Gift of Peace\" /> 完成时增加 75，上限 300。\n<CrossReference name=\"Accept Gift of Health\" /> 完成时增加 45，上限 300。\n<CrossReference name=\"Holy: Cultivate Her Gifts\" /> 完成后，按 A Darker Nature 的 −1／−2 状态每回合增加 1／2，持续 20 回合；这条增长本身不检查 300 上限。\n<CrossReference name=\"Black Forest\" /> 每补充 1 个百分点统治者 Shadow 消耗 1，最多补到 100%；不足时用尽。\n<CrossReference name=\"Neurotoxins\" /> 每次消耗 min(150，现有强度)，不按 Madness 的剩余空间减少消耗。\n<CrossReference name=\"Manifestation\" /> 将强度清零。"
          },
          "text": "统治者接受馈赠后留下的地点资源，用于 Black Forest、Neurotoxins、Choking Spores 与 Manifestation。当地提供 Holy: Cultivate Her Gifts。",
          "initialValue": ""
        },
        {
          "name": "Temptation of Gold",
          "image": "grove-golden-roses.png",
          "initialValue": "创建时强度 100。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Accept Gift of Gold\" /> 完成时强度 −50；耗尽后移除。"
          },
          "text": "为当地统治者提供 Accept Gift of Gold 行动。"
        },
        {
          "name": "Temptation of Salvation",
          "image": "grove-salvation.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "提供 Gift of Salvation 英雄任务。任务可以反复执行，不消耗此修正。"
        },
        {
          "name": "Temptation of Nectar",
          "image": "grove-nectar.png",
          "initialValue": "创建时强度 100。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Accept Gift of Nectar\" /> 完成时强度 −50；耗尽后移除。"
          },
          "text": "为当地统治者提供 Accept Gift of Nectar 行动。"
        },
        {
          "name": "Temptation of Peace",
          "image": "grove-peace-lillies.png",
          "initialValue": "创建时强度 75。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Accept Gift of Peace\" /> 完成时强度 −25；耗尽后移除。"
          },
          "text": "为当地统治者提供 Accept Gift of Peace 行动。"
        },
        {
          "name": "Temptation of Health",
          "image": "grove-lepers-succor.png",
          "initialValue": "创建时强度 75。",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Accept Gift of Health\" /> 完成时强度 −50；耗尽后移除。"
          },
          "text": "为当地统治者提供 Accept Gift of Health 行动。"
        },
        {
          "name": "Temptation of Might",
          "image": "grove-dragonflower.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "提供 Gift of Might 英雄任务。任务可以反复执行，不消耗此修正。"
        },
        {
          "name": "Tempting Pheromones",
          "image": "pheromones.png",
          "initialValue": "创建时强度 100。",
          "modifierChange": {
            "natural": "每项每回合强度 −3；耗尽后移除。",
            "external": "<CrossReference name=\"Pheromones\" /> 每次新增一项强度 100 的修正，各项动机加成相加。"
          },
          "text": "六种馈赠的接受动机增加当地全部 Tempting Pheromones 强度之和 × 0.25；单项强度 100 时增加 25。"
        },
        {
          "name": "Madness",
          "image": "madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Neurotoxins\" /> 每消耗 1 点 Vinerva's Gift 增加 2，单次最多消耗 150，最终 Madness 上限 300。"
          },
          "text": "每 1 点强度使 Prosperity 的计算值减少 0.003。强度超过 100 时，每回合增加 强度/75 点 Unrest；并累积统治者的 Sanity 损失。\n达到 300 时强度回落到 150；若是人类聚居地且尚无长期疯狂效果，则随机留下六种长期效果之一。Neurotoxins 可消耗 Vinerva's Gift 快速提高当地 Madness。",
          "initialValue": ""
        },
        {
          "name": "Lingering Resentment",
          "image": "unrest.png",
          "baseGame": true,
          "initialValue": "完成 <CrossReference name=\"Accept Gift of Gold\" /> 后创建强度 25。",
          "modifierChange": {
            "natural": "每回合减少当地统治者的 Intrigue 数值；没有统治者时不因这条规则衰减。",
            "external": "<CrossReference name=\"Accept Gift of Gold\" /> 每次新增一项强度 25 的修正，独立产生 Unrest 并衰减。"
          },
          "text": "地点经历统治者的残酷行为后留下的怨恨。每项每回合为当地增加 2 Unrest；本页中的直接来源是 Accept Gift of Gold，多次接受可产生多项怨恨。"
        },
        {
          "name": "Choking Spores",
          "id": "choking-spores-modifier",
          "image": "choking-spores.png",
          "initialValue": "创建时强度 50。",
          "modifierChange": {
            "natural": "每项每回合强度 −1；耗尽后移除。",
            "external": "<CrossReference name=\"Choking Spores\" /> 在目标新增一项强度 50，并在尚无此修正的相邻地点各新增一项强度 50。"
          },
          "text": "每项使当地 Prosperity 的计算值减少 0.25，间接影响经济和军事产出；效果不随剩余强度按比例缩小，也不会直接造成伤亡。"
        },
        {
          "name": "Gift of Nectar",
          "image": "grove-nectar.png",
          "initialValue": "创建时强度 50。",
          "modifierChange": {
            "natural": "每项每回合强度 −1.25；耗尽后移除。",
            "external": "<CrossReference name=\"Accept Gift of Nectar\" /> 每次新增一项强度 50 的修正。"
          },
          "text": "食物结算经过每项 Gift of Nectar 时，将当时的产量乘 2，再加 50；多项依次结算。不会因剩余强度下降而削弱加成。"
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "media": true,
      "items": [
        {
          "name": "Heart of the Forest",
          "id": "heart-location",
          "image": "heart-location.png",
          "text": "神力的施放中心，是可依附现有聚居地的设施。提供 Harvest Seed，防御加成 50，不能被渗透；Menace 增长可能引来国家军队摧毁设施。\n每回合以自身为起点随机行走最多 3 步陆地相邻地点，再将选中地点领地内的每个地块独立以 25% 概率设为森林。"
        },
        {
          "name": "Manifestation",
          "id": "manifestation-location",
          "image": "manifestation-location.png",
          "seal": 7,
          "text": "由神力替换原人类聚居地形成，不属于任何国家，自带 Heart of the Forest。每个额外贡献 3 点胜利分。\n自身与 Heart 各自执行一次最多 3 步的随机森林扩展。普通毁灭处理只移除无法在废墟幸存的设施，不把 Manifestation 本身替换为废墟。"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Vinerva Seed",
          "image": "seed.png",
          "text": "通过 Harvest Seed 获得。人物携种子到目标地点后，对地点施放 Heart of the Forest 即可越过现有据点的距离限制；施放会消耗当地找到的第一枚种子。代码不限定持有者必须是玩家 Agent，也不允许直接对单位施放此神力。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "name": "Wilderness Spirit",
          "image": "wilderness-spirits.png",
          "seal": 9,
          "stats": "HP 50 / 50（召唤时固定；不按人口、军力或难度缩放）",
          "text": "属于黑暗阵营、不可控制的游荡军队；不自行解散，也没有额外的专属伤害倍率。每回合把所在地点领地全部设为森林并刷新地形。\n所在地点若是 Shadow <50% 的人类聚居地，便执行无视和平状态的夷平；否则前往路径距离最近的符合条件地点，同距离随机选择。"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "media": true,
      "items": [
        {
          "name": "Harvest Seed",
          "image": "seed.png",
          "location": "<CrossReference name=\"Heart of the Forest\" href=\"#entry-heart-location\" /> 所在地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 20　Menace: 0　XP: 3",
          "text": "完成后获得一枚 Vinerva Seed。没有额外的执行者限制。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Gift of Salvation",
          "image": "grove-salvation.png",
          "location": "<CrossReference name=\"Temptation of Salvation\" /> 所在地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 30　Menace: 0　XP: 3",
          "positiveTags": "无",
          "negativeTags": "Shadow",
          "text": "有个人 Shadow 的非 Chosen One 英雄可执行。完成后个人 Shadow 减半，Sanity −8，最低为 0。其净化动机为 200 × Shadow × (1 − Shadow²)；Awareness 与世界恐慌分别带来 −100 × Awareness 与 −75 × 世界恐慌，Tempting Pheromones 另加动机。"
        },
        {
          "name": "Gift of Might",
          "image": "grove-salvation.png",
          "location": "<CrossReference name=\"Temptation of Might\" /> 所在地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 40　Menace: 0　XP: 3",
          "positiveTags": "Combat、Ambition",
          "negativeTags": "无",
          "text": "非 Chosen One 英雄可执行，允许多人同时进行。获得或加深 Vinerva's Gift of Might，不直接扣除 Sanity。成瘾和需要对付强敌会提高动机，Awareness 会降低动机；没有额外的世界恐慌惩罚。Tempting Pheromones 增加接受动机。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "name": "Accept Gift of Gold",
          "image": "grove-golden-roses.png",
          "location": "有 Temptation of Gold 的地点。",
          "meta": "统治者行动",
          "time": "5 回合",
          "positiveTags": "Gold、Cruel",
          "negativeTags": "无",
          "text": "统治者获得 75 Gold；Vinerva's Gift 增加 50、上限 300；新增一项强度 25 的 Lingering Resentment，Temptation of Gold 强度 −50。"
        },
        {
          "name": "Accept Gift of Nectar",
          "image": "grove-nectar.png",
          "location": "有 Temptation of Nectar 的地点。",
          "meta": "统治者行动",
          "time": "1 回合",
          "positiveTags": "无",
          "negativeTags": "无",
          "text": "把已有 Famine 设为 1；新增一项 Gift of Nectar；Vinerva's Gift 增加 125、上限 300，Temptation of Nectar 强度 −50。"
        },
        {
          "name": "Accept Gift of Peace",
          "image": "grove-peace-lillies.png",
          "location": "有 Temptation of Peace 的地点。",
          "meta": "统治者行动",
          "time": "1 回合",
          "positiveTags": "无",
          "negativeTags": "Discord",
          "text": "把已有 Unrest 设为 1；Vinerva's Gift 增加 75、上限 300，Temptation of Peace 强度 −25。不会删除 Lingering Resentment，也不会留下额外的安抚效果。"
        },
        {
          "name": "Accept Gift of Health",
          "image": "grove-lepers-succor.png",
          "location": "有 Temptation of Health 的地点。",
          "meta": "统治者行动",
          "time": "1 回合",
          "positiveTags": "无",
          "negativeTags": "Disease",
          "text": "把已有 Plague 设为 1；Vinerva's Gift 增加 45、上限 300，Temptation of Health 强度 −50。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "name": "A Darker Nature",
          "meta": "Witches 专属教义",
          "text": "Vinerva 在场时，Witches Holy Order 增加此教义。状态可为 0、−1、−2；负值是 Elder 方向。状态 −1／−2 时，Holy: Cultivate Her Gifts 完成后的增长分别为每回合 1／2，持续 20 回合；教义还分别为该任务增加 50／100 动机。"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "media": true,
      "items": [
        {
          "name": "Holy: Cultivate Her Gifts",
          "image": "manifestation.png",
          "location": "<CrossReference name=\"Vinerva's Gift\" /> 所在地点；当前不能处于培养持续期。",
          "meta": "Lore",
          "statLine": "Complexity: 30　Profile: 40　Menace: 0　XP: 49",
          "positiveTags": "Religion",
          "negativeTags": "无",
          "text": "仅所属阵营为 Witches Holy Order、且 A Darker Nature 非中立的执行者可完成。完成后才开始持续 20 回合的培养。每回合增长 1／2，对应完成时教义状态 −1／−2；完成时 Profile +5、Menace +10。"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "Vinerva's Gift Accepted",
          "image": "event-gift-accepted.jpg",
          "text": "由四个 Accept Gift 行动直接弹出的本体提示事件。Accept Gift of Gold 只在创建新的 Vinerva's Gift 时触发，另三个行动每次完成都会尝试触发。\nTheir fate is sealed. 不改变数值；Let us see [CENTRE VIEW ON TARGET]. 仅将视角移到目标地点。礼物的实际效果由行动代码结算。"
        }
      ]
    }
  ],
  "relations": {
    "Vinerva's Gift": {
      "sources": [
        {
          "name": "Accept Gift of Gold",
          "href": "#entry-accept-gift-of-gold"
        },
        {
          "name": "Accept Gift of Nectar",
          "href": "#entry-accept-gift-of-nectar"
        },
        {
          "name": "Accept Gift of Peace",
          "href": "#entry-accept-gift-of-peace"
        },
        {
          "name": "Accept Gift of Health",
          "href": "#entry-accept-gift-of-health"
        },
        {
          "name": "Holy: Cultivate Her Gifts",
          "href": "#entry-holy-cultivate-her-gifts"
        }
      ],
      "effects": [
        {
          "name": "Black Forest",
          "href": "#entry-black-forest"
        },
        {
          "name": "Neurotoxins",
          "href": "#entry-neurotoxins"
        },
        {
          "name": "Choking Spores",
          "href": "#entry-choking-spores"
        },
        {
          "name": "Manifestation",
          "href": "#entry-manifestation"
        },
        {
          "name": "Holy: Cultivate Her Gifts",
          "href": "#entry-holy-cultivate-her-gifts"
        }
      ]
    },
    "Temptation of Gold": {
      "sources": [
        {
          "name": "Grove of Golden Roses",
          "href": "#entry-grove-of-golden-roses",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Accept Gift of Gold",
          "href": "#entry-accept-gift-of-gold",
          "meta": "统治者行动"
        }
      ]
    },
    "Temptation of Salvation": {
      "sources": [
        {
          "name": "Grove of Salvation",
          "href": "#entry-grove-of-salvation",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Gift of Salvation",
          "href": "#entry-gift-of-salvation",
          "meta": "英雄任务"
        }
      ]
    },
    "Temptation of Nectar": {
      "sources": [
        {
          "name": "Grove of Nectar",
          "href": "#entry-grove-of-nectar",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Accept Gift of Nectar",
          "href": "#entry-accept-gift-of-nectar",
          "meta": "统治者行动"
        }
      ]
    },
    "Temptation of Peace": {
      "sources": [
        {
          "name": "Grove of Peace Lillies",
          "href": "#entry-grove-of-peace-lillies",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Accept Gift of Peace",
          "href": "#entry-accept-gift-of-peace",
          "meta": "统治者行动"
        }
      ]
    },
    "Temptation of Health": {
      "sources": [
        {
          "name": "Grove of Leper's Succor",
          "href": "#entry-grove-of-leper-s-succor",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Accept Gift of Health",
          "href": "#entry-accept-gift-of-health",
          "meta": "统治者行动"
        }
      ]
    },
    "Temptation of Might": {
      "sources": [
        {
          "name": "Grove of Dragonflower",
          "href": "#entry-grove-of-dragonflower",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Gift of Might",
          "href": "#entry-gift-of-might",
          "meta": "英雄任务"
        }
      ]
    },
    "Tempting Pheromones": {
      "sources": [
        {
          "name": "Pheromones",
          "href": "#entry-pheromones",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Accept Gift of Gold",
          "href": "#entry-accept-gift-of-gold",
          "meta": "统治者行动"
        },
        {
          "name": "Accept Gift of Nectar",
          "href": "#entry-accept-gift-of-nectar",
          "meta": "统治者行动"
        },
        {
          "name": "Accept Gift of Peace",
          "href": "#entry-accept-gift-of-peace",
          "meta": "统治者行动"
        },
        {
          "name": "Accept Gift of Health",
          "href": "#entry-accept-gift-of-health",
          "meta": "统治者行动"
        },
        {
          "name": "Gift of Salvation",
          "href": "#entry-gift-of-salvation",
          "meta": "英雄任务"
        },
        {
          "name": "Gift of Might",
          "href": "#entry-gift-of-might",
          "meta": "英雄任务"
        }
      ]
    },
    "choking-spores-modifier": {
      "sources": [
        {
          "name": "Choking Spores",
          "href": "#entry-choking-spores",
          "meta": "神力"
        }
      ],
      "effects": []
    },
    "Gift of Nectar": {
      "sources": [
        {
          "name": "Accept Gift of Nectar",
          "href": "#entry-accept-gift-of-nectar",
          "meta": "统治者行动"
        }
      ],
      "effects": []
    },
    "Heart of the Forest": {
      "effects": [
        {
          "name": "Heart of the Forest",
          "href": "#entry-heart-location"
        }
      ]
    },
    "Vinerva Seed": {
      "sources": [
        {
          "name": "Harvest Seed",
          "href": "#entry-harvest-seed"
        }
      ],
      "effects": [
        {
          "name": "Heart of the Forest",
          "href": "#entry-heart-of-the-forest"
        }
      ]
    },
    "Vinerva's Gift of Might": {
      "sources": [
        {
          "name": "Gift of Might",
          "href": "#entry-gift-of-might"
        }
      ],
      "effects": [
        {
          "name": "Gift of Might",
          "href": "#entry-gift-of-might"
        }
      ]
    },
    "Wilderness Spirit": {
      "sources": [
        {
          "name": "Wilderness Spirits",
          "href": "#entry-wilderness-spirits"
        }
      ],
      "effects": []
    },
    "Vinerva's Gift Accepted": {
      "sources": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        }
      ],
      "effects": []
    },
    "Madness": {
      "sources": [
        {
          "name": "Neurotoxins",
          "href": "#entry-neurotoxins",
          "meta": "神力"
        }
      ],
      "effects": []
    },
    "Lingering Resentment": {
      "sources": [
        {
          "name": "Accept Gift of Gold",
          "href": "#entry-accept-gift-of-gold",
          "meta": "统治者行动"
        }
      ],
      "effects": []
    },
    "Grove of Golden Roses": {
      "effects": [
        {
          "name": "Temptation of Gold",
          "href": "#entry-temptation-of-gold",
          "meta": "地点修正"
        },
        {
          "name": "Accept Gift of Gold",
          "href": "#entry-accept-gift-of-gold",
          "meta": "统治者行动"
        }
      ]
    },
    "Grove of Salvation": {
      "effects": [
        {
          "name": "Temptation of Salvation",
          "href": "#entry-temptation-of-salvation",
          "meta": "地点修正"
        },
        {
          "name": "Gift of Salvation",
          "href": "#entry-gift-of-salvation",
          "meta": "英雄任务"
        }
      ]
    },
    "Grove of Nectar": {
      "effects": [
        {
          "name": "Temptation of Nectar",
          "href": "#entry-temptation-of-nectar",
          "meta": "地点修正"
        },
        {
          "name": "Accept Gift of Nectar",
          "href": "#entry-accept-gift-of-nectar",
          "meta": "统治者行动"
        }
      ]
    },
    "Grove of Peace Lillies": {
      "effects": [
        {
          "name": "Temptation of Peace",
          "href": "#entry-temptation-of-peace",
          "meta": "地点修正"
        },
        {
          "name": "Accept Gift of Peace",
          "href": "#entry-accept-gift-of-peace",
          "meta": "统治者行动"
        }
      ]
    },
    "Choking Spores": {
      "effects": [
        {
          "name": "Choking Spores",
          "href": "#entry-choking-spores-modifier",
          "meta": "地点修正"
        }
      ]
    },
    "Grove of Leper's Succor": {
      "effects": [
        {
          "name": "Temptation of Health",
          "href": "#entry-temptation-of-health",
          "meta": "地点修正"
        },
        {
          "name": "Accept Gift of Health",
          "href": "#entry-accept-gift-of-health",
          "meta": "统治者行动"
        }
      ]
    },
    "Grove of Dragonflower": {
      "effects": [
        {
          "name": "Temptation of Might",
          "href": "#entry-temptation-of-might",
          "meta": "地点修正"
        },
        {
          "name": "Gift of Might",
          "href": "#entry-gift-of-might",
          "meta": "英雄任务"
        }
      ]
    },
    "Black Forest": {
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift",
          "meta": "地点修正"
        }
      ]
    },
    "Neurotoxins": {
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift",
          "meta": "地点修正"
        },
        {
          "name": "Madness",
          "href": "#entry-madness",
          "meta": "地点修正"
        }
      ]
    },
    "Pheromones": {
      "effects": [
        {
          "name": "Tempting Pheromones",
          "href": "#entry-tempting-pheromones",
          "meta": "地点修正"
        }
      ]
    },
    "Serpentine Vines": {},
    "Manifestation": {
      "effects": [
        {
          "name": "Manifestation",
          "href": "#entry-manifestation-location",
          "meta": "地点与设施"
        }
      ]
    },
    "Wilderness Spirits": {
      "effects": [
        {
          "name": "Wilderness Spirit",
          "href": "#entry-wilderness-spirit",
          "meta": "军队"
        }
      ]
    },
    "heart-location": {
      "sources": [
        {
          "name": "Heart of the Forest",
          "href": "#entry-heart-of-the-forest"
        },
        {
          "name": "Manifestation",
          "href": "#entry-manifestation"
        }
      ],
      "effects": [
        {
          "name": "Harvest Seed",
          "href": "#entry-harvest-seed"
        }
      ]
    },
    "manifestation-location": {
      "sources": [
        {
          "name": "Manifestation",
          "href": "#entry-manifestation"
        }
      ],
      "effects": [
        {
          "name": "Heart of the Forest",
          "href": "#entry-heart-location"
        }
      ]
    },
    "Accept Gift of Gold": {
      "sources": [
        {
          "name": "Temptation of Gold",
          "href": "#entry-temptation-of-gold"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        },
        {
          "name": "Lingering Resentment",
          "href": "#entry-lingering-resentment"
        }
      ]
    },
    "Accept Gift of Nectar": {
      "sources": [
        {
          "name": "Temptation of Nectar",
          "href": "#entry-temptation-of-nectar"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        },
        {
          "name": "Gift of Nectar",
          "href": "#entry-gift-of-nectar"
        }
      ]
    },
    "Accept Gift of Peace": {
      "sources": [
        {
          "name": "Temptation of Peace",
          "href": "#entry-temptation-of-peace"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        }
      ]
    },
    "Accept Gift of Health": {
      "sources": [
        {
          "name": "Temptation of Health",
          "href": "#entry-temptation-of-health"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        }
      ]
    },
    "Gift of Salvation": {
      "sources": [
        {
          "name": "Temptation of Salvation",
          "href": "#entry-temptation-of-salvation"
        }
      ]
    },
    "Gift of Might": {
      "sources": [
        {
          "name": "Temptation of Might",
          "href": "#entry-temptation-of-might"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift of Might",
          "href": "#entry-vinerva-s-gift-of-might"
        }
      ]
    },
    "Holy: Cultivate Her Gifts": {
      "sources": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        },
        {
          "name": "A Darker Nature",
          "href": "#entry-a-darker-nature"
        }
      ],
      "effects": [
        {
          "name": "Vinerva's Gift",
          "href": "#entry-vinerva-s-gift"
        }
      ]
    }
  },
  "specialVictory": "无"
};

const preparedConfig = prepareGodConfig(config);

export default function VinervaArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
