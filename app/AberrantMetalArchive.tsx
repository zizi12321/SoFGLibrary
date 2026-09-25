"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "aberrant-metal",
  "name": "Aberrant Metal",
  "number": "22",
  "theme": "aberrant-metal-theme",
  "assetDir": "aberrant-metal",
  "background": "factory_background.png",
  "portrait": "factory_portrait.png",
  "flavour": "",
  "caption": "生产核心、工业污染与活体工厂",
  "maxTurns": "500 回合",
  "awaken": "4000 阈值",
  "panic": "75%",
  "initialAgents": "2",
  "finalAgents": "6",
  "heroMetric": {
    "value": "4000",
    "label": "阈值苏醒"
  },
  "progressLabel": "阶段生产量",
  "unlockMethod": "按当前阶段生产的 Units 解锁；每次解封后计数清零。",
  "powerRecovery": "每回合恢复 = 0.035 × 神力上限 × 难度系数。",
  "supplicant": {
    "name": "The Supplicant",
    "image": "icon_labor4.png",
    "stats": "Might: 2 / Lore: 2 / Intrigue: 4 / Command: 3 / HP: 5",
    "abilities": [
      {
        "name": "Accursed Foreman",
        "text": "持有者在 Production Core 所在地点时，使该核心当回合 Units 产量翻倍。"
      },
      {
        "name": "Chief Engineer",
        "text": "完成 Infiltrate 后，若当地是 City 或 Dwarven City，且没有 Production Core 或 Ruined Core，则把可渗透兴趣点列表的最后一个替换为 Production Core。持有者每回合 Menace +0.1。"
      },
      {
        "name": "Polluting Presence",
        "text": "所在地 Shadow 大于 0 时，每回合产生 Shadow × 3 的 Eldritch Smog。"
      }
    ]
  },
  "core": [
    "先完成渗透，再用 Begin Production 把兴趣点改造成 Production Core；选择 Chief Engineer 的 Supplicant 也能在完成渗透时自动建立核心。",
    "用 Shadow 提高 Core Efficiency 的自然增长，用 Overdrive 加速。Production Core 每回合生产的 Units 用于打破当前封印；达标后计数清零，再开始下一阶段。",
    "用 Hostile Takeover、Resource Allocation 与 Eldritch Promotion 继续替换兴趣点，分别组装 Aberrant Miner、Aberrant Recycler 与 Aberrant Repomen，扩大采矿、排污并搬运人口。",
    "完成聚居地的设施转化后形成 Aberrant Factory，人口由工厂维持，并生成 Aberrant Laborers 防御；同时留意英雄执行 Banish Production Core。",
    "借 Eldritch Smog 与 Contaminated Waters 扩散污染，用 Smog-Bound 指定传播路线；Ash Fall 按烟雾覆盖程度使地表降温。",
    "最终解锁 Mobile Factories，把完整转化的工厂变为可控制军队，用 Mode: Integrate Workforce 吸收人口，或用 Mode: Strip Mining 开采地形并恢复神力。"
  ],
  "overviewExtra": {
    "title": "生产与封印",
    "playStyle": "以渗透和设施改造建立生产据点，通过污染、资源回收和自主单位扩大产能。工厂能保住人口，但生产核心也会成为英雄的攻击目标。",
    "text": "Units 是封印进度使用的产量。Production Core、Aberrant Mining 与 Aberrant Recycling 的产出，在神祇每回合结算时汇入当前阶段计数；同一地点有 Core Efficiency 时只统计核心产出，且该地点必须仍有聚居地。每回合最多解开一道封印，超出当前阈值的产量随计数一起清零。\nBlood is Fuel 与 Blood for Units 只修改即时进度字段，未写入阶段累计量；该值会在神祇下一次结算时被覆盖。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Begin Production"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 10,
      "agents": 2,
      "reward": [
        "Overdrive",
        "Shrouded Eyes"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 100,
      "agents": 3,
      "reward": [
        "Blood is Fuel",
        "Help Wanted"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 250,
      "agents": 3,
      "reward": [
        "Choking Hazard",
        "Hostile Takeover"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 500,
      "agents": 4,
      "reward": [
        "Resource Allocation",
        "Eldritch Promotion"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 750,
      "agents": 4,
      "reward": [
        "Smog-Bound"
      ],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 1000,
      "agents": 4,
      "reward": [],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 1500,
      "agents": 5,
      "reward": [
        "Acid Rain"
      ],
      "powerRecovery": "8/0.28"
    },
    {
      "seal": 8,
      "progress": 2000,
      "agents": 5,
      "reward": [],
      "powerRecovery": "9/0.315"
    },
    {
      "seal": 9,
      "progress": 4000,
      "agents": 6,
      "reward": [
        "Mobile Factories",
        "苏醒"
      ],
      "powerRecovery": "10/0.35"
    }
  ],
  "powers": [
    {
      "name": "Begin Production",
      "seal": 0,
      "cost": 1,
      "icon": "icon_power_coreb.png",
      "effect": "选择一处合格兴趣点，将其替换为 Production Core，并建立 Core Efficiency。Orc Fortress 与 Deep One Abyssal City 使用对应的核心形式。",
      "limit": "限 City、Dwarven City、Orc Fortress 或 Deep One Abyssal City；不能已有 Production Core 或 Ruined Core。人类类城市需要至少一个已渗透的可渗透兴趣点；Orc Fortress 需要完全渗透，Deep One Abyssal City 无渗透要求。"
    },
    {
      "name": "Overdrive",
      "seal": 1,
      "cost": 1,
      "icon": "icon_power_overdrive2.png",
      "effect": "Core Efficiency 翻倍，最高达到该核心当前上限。",
      "limit": "地点有 Production Core，且 Core Efficiency 低于上限。"
    },
    {
      "name": "Shrouded Eyes",
      "seal": 1,
      "cost": 1,
      "icon": "icon_power_profile.png",
      "effect": "建立 <CrossReference name=\"Shrouded Eyes\" href=\"#entry-shrouded-eyes-modifier\" />，暂时降低当地 Security。",
      "limit": "限人类类聚居地，且没有 <CrossReference name=\"Shrouded Eyes\" href=\"#entry-shrouded-eyes-modifier\" />。"
    },
    {
      "name": "Blood is Fuel",
      "seal": 2,
      "cost": 1,
      "icon": "icon_power_blood2.png",
      "effect": "牺牲当地 ⌊人口 × 25%⌋ 人；每名牺牲者使 Shadow 增加 2 个百分点、Death 增加 1。沉睡时还将即时封印进度增加相同数值；这部分未计入阶段累计量，下一次神祇结算会覆盖。",
      "limit": "地点有 Production Core，属于人类类聚居地，人口至少 4。"
    },
    {
      "name": "Help Wanted",
      "seal": 2,
      "cost": 1,
      "icon": "icon_power_crowd.png",
      "effect": "从相邻、没有 Core Efficiency 的人类类聚居地召集 Lured Crowd。每处人数为 max(1,⌊人口 × 0.66 × Shadow⌋)，按剩余接收空间截取；相邻地点立即扣除对应人口。普通城市最多填补人口上限的空缺，Aberrant Factory 每次最多召集 50 人。",
      "limit": "目标有 Production Core，为人类类聚居地且不是 Mobile Factory；普通城市人口必须低于上限。"
    },
    {
      "name": "Choking Hazard",
      "seal": 3,
      "cost": 1,
      "icon": "icon_power_smog.png",
      "effect": "将 ⌊Core Efficiency / 2⌋ 加入 Eldritch Smog，随后将 Core Efficiency 清零。",
      "limit": "目标有 Production Core。"
    },
    {
      "name": "Hostile Takeover",
      "seal": 3,
      "cost": 2,
      "icon": "icon_power_subsettlement1b.png",
      "effect": "选择兴趣点，替换为 Repurposed Structures。",
      "limit": "目标有 Production Core 和可替换兴趣点；普通兴趣点必须已渗透。同类设施、Production Core 与 Ruined Core 不可选。仍有合格普通兴趣点时，不能先替换城市主体。"
    },
    {
      "name": "Resource Allocation",
      "seal": 4,
      "cost": 2,
      "icon": "icon_power_subsettlement2b.png",
      "effect": "选择兴趣点，替换为 Biometallic Mass。",
      "limit": "目标有 Production Core 和可替换兴趣点；普通兴趣点必须已渗透。同类设施、Production Core 与 Ruined Core 不可选。仍有合格普通兴趣点时，不能先替换城市主体。"
    },
    {
      "name": "Eldritch Promotion",
      "seal": 4,
      "cost": 2,
      "icon": "icon_power_subsettlement3.png",
      "effect": "选择兴趣点，替换为 Churning Machinery。",
      "limit": "目标有 Production Core 和可替换兴趣点；普通兴趣点必须已渗透。同类设施、Production Core 与 Ruined Core 不可选。仍有合格普通兴趣点时，不能先替换城市主体。"
    },
    {
      "name": "Smog-Bound",
      "seal": 5,
      "cost": 2,
      "icon": "icon_power_smogbound.png",
      "effect": "在目标建立 Smog-Bound (End)，从烟雾最多且烟雾大于 0 的核心建立 Smog-Bound (Start) 并指定连接路径。沿途烟雾改为朝终点输送，并免受明亮环境与 Ward 的消散。再次指定同一目标会把两端强度重设为 100；更换目标会替换旧路线。",
      "limit": "已有核心记录时，目标 Eldritch Smog 必须低于 50。实际建立路线还需要一个有正值烟雾的 Production Core。"
    },
    {
      "name": "Acid Rain",
      "seal": 7,
      "cost": 3,
      "icon": "icon_power_acidrain.png",
      "effect": "把当地 Eldritch Smog 替换为 <CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" />，继承原强度，伤害当地单位并破坏地形。",
      "limit": "目标有 Eldritch Smog，且尚未变为 <CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" />。"
    },
    {
      "name": "Mobile Factories",
      "seal": 9,
      "cost": 3,
      "icon": "icon_power_walkingcity.png",
      "effect": "将 Aberrant Factory 转为 Mobile Factory，军队初始 HP 等于工厂人口 × 2。原采集单位与驻防军被清除，原址保留与其关联的 Mobile Factory 驻地。",
      "limit": "目标为 Aberrant Factory，Shadow 与 Infiltration 均为 100%，并有 Production Core。"
    }
  ],
  "sections": [
{
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Aberrant Construct",
          "text": "标记由工厂维持的构造体。HP 上限与出生地 Core Efficiency 关联，具体值见对应单位。"
        },
        {
          "name": "Mining Unit",
          "text": "Aberrant Miner 的固定特质，标记其采矿职责。"
        },
        {
          "name": "Recycling Unit",
          "text": "Aberrant Recycler 的固定特质，标记其建立和维护 Aberrant Recycling 的职责。"
        },
        {
          "name": "Reposession Unit",
          "text": "Aberrant Repomen 的固定特质，标记其人口转运职责。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Core Efficiency",
          "text": "决定 Production Core 的产量：每回合 1 + ⌊强度/25⌋ Units。人类类城市的上限等于人口，Deep One Abyssal City 的上限等于其人口整数部分。\nOrc Fortress 的上限为 ⌊当地 Orcish Industry × 0.35 × 难度倍率 × Orc 强度设置⌋ × (1 + 合格相邻 Orc Camp 数)；合格邻地需要有 Orcish Industry。代码按当地工业值重复计入各邻地。",
          "image": "icon_power_coreb.png",
          "initialValue": "1。",
          "modifierChange": {
            "natural": "低于上限时，每回合 +1+⌊Shadow/25%⌋。\n超过上限时，每回合 −max(1,超出量 × 0.05)。",
            "external": "Begin Production、Chief Engineer 与 Reestablish Core 建立 Production Core 时创建。\nOverdrive 将强度翻倍，最高到上限。\nChoking Hazard 将强度清零。\nBoost Productivity 完成时增加执行者 Might × 5。\nMining Protocol 完成时使执行者出生地增加 ⌊任务地点 Shadow × 10⌋。\nThe Smokestack 的“Lead a mob to it.”选项增加 20。\nBanish Production Core 完成时移除。"
          }
        },
        {
          "name": "Eldritch Smog",
          "text": "烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。",
          "image": "icon_power_smog.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "低于 100 且不在 Smog-Bound 路线上时，每回合 −max(0,0.5−Shadow)。\n普通传播向较低烟雾的每个邻地转移 min((强度−25)×0.15/邻地总数,1)。向指定路线输送时上限改为 5；路线内部的前向转移量为 min((强度−10)×0.5/邻地总数,5)。转出地扣除相同数值。",
            "external": "Production Core 每回合增加 Core Efficiency × 0.03；深海核心改为生成 Contaminated Waters。\nRepurposed Structures 与 Churning Machinery 每座每回合增加 Core Efficiency × 0.01。\nBiometallic Mass 每座每回合增加 Core Efficiency × 0.02。\nOrc Fortress 的 Core Efficiency 使本地及相邻、带 Orcish Industry 的 Orc Camp 每回合增加“核心所在地工业强度 × 0.005”。\nAberrant Factory 每回合使已经存在的烟雾增加 5。\nChoking Hazard 增加 ⌊Core Efficiency/2⌋。\nBoost Eldritch Smog 完成时增加执行者 Lore × 10。\nPolluting Presence 在持有者所在地每回合增加 Shadow × 3。\nAberrant Recycling 每回合增加 min(2,其强度 × 0.1)。\nContaminated Waters 在地表达到 100 后，每回合增加其强度 × 0.01。\nHoly Fumes 的 −1 等级使每座 Temple 每回合增加所属教团 Elder Influence × 0.1。\nRuined Core 每回合减少 max(10,100−废墟消退进度 × 0.1)。\nNature Ritual 在本地和相邻地点每回合减少 ⌊max(1,仪式强度/10)⌋。\nWard 在烟雾低于 100 且不在指定路线时，每回合减少 Ward 强度 × 0.01。\n<CrossReference name=\"Acid Rain\" /> 将该修正替换并继承强度。\nMobile Factory 每回合在所在地增加 max(⌊当前 HP/4⌋,5)。\nSmog-Born 摧毁人类类聚居地时，已有烟雾增加 N=⌊Prosperity × 人口 × 0.1⌋；没有时先创建为 N，再加入 N 的增长。"
          }
        },
        {
          "name": "Acid Rain",
          "text": "每回合对当地符合条件的军队造成 ⌊max(1,强度/8)⌋ HP 伤害，对其他人物单位造成 ⌊max(1,强度/50)⌋ HP 伤害。玩家可控单位、自主邪恶人物、Aberrant Laborers、Mobile Factory、Chosen One 与 Undead 人物免疫。\n每回合有 40% 概率对领地内各地块施加 ⌊max(1,强度/2)⌋ 地形破坏；普通人类类聚居地额外增加该数值一半的 Devastation，向下取整。英雄在此执行任务的倾向减少当前强度。\n继承 Eldritch Smog 的 Shadow 与区域纯净度结算；代码也会先执行烟雾传播，再处理酸雨自身效果。",
          "image": "icon_power_acidrain.png",
          "initialValue": "继承转化前 Eldritch Smog 的强度。",
          "modifierChange": {
            "natural": "每回合额外 −max(2,强度 × 0.14)，归零后移除。\n低于 100 且不在 Smog-Bound 路线时，另受明亮环境的 −max(0,0.5−Shadow) 消散。",
            "external": "<CrossReference name=\"Acid Rain\" /> 神力将 Eldritch Smog 转化为本修正。\n结算时清除所有正向强度影响。\nNature Ritual 在本地与相邻地点每回合减少 ⌊max(1,仪式强度/10)⌋。\nWard 在低于 100 且不在指定路线时，每回合减少 Ward 强度 × 0.01。\nRuined Core 每回合减少 max(10,100−废墟消退进度 × 0.1)。"
          },
          "id": "acid-rain-modifier"
        },
        {
          "name": "Contaminated Waters",
          "text": "上限 300。沿海地点 Shadow 低于 50% 时，Habitability 减少 min(强度 × 0.001,沿海宜居加成)。在人类类聚居地，或任意达到 100 强度的地点，每回合使 Deep One Cult 增加 min(2,强度/75)。\n地表达到 100 后，每回合生成或增加 Eldritch Smog。废墟与强度归零后仍保留。",
          "image": "icon_contaminatedwater.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合 −max(0,0.5−Shadow)。\n达到 50 后向海域或沿海邻地传播：对已有且较弱的污染，转移 min((强度−50)×0.5/邻地总数,5,邻地总数)。新建污染时先以 min((强度−50)×0.5/邻地总数,邻地总数) 设置强度，再添加等量增长；来源地只扣除一次。代码还尝试向地下同坐标海域传播。",
            "external": "Deep One Abyssal City 中的 Core Efficiency 每回合增加其强度 × 0.1；首次创建时使用 × 0.03。\nContaminate Waters 完成时增加执行者 Lore × 10。\nNature Ritual 在本地和相邻地点每回合减少 ⌊max(1,仪式强度/10)⌋。"
          }
        },
        {
          "name": "Aberrant Mining",
          "text": "每回合产出 max(1,⌊强度/25⌋) Units。Habitability 减少 强度 × 0.002。每回合对领地地块以 40% 概率增加 5 点地形破坏，并使普通人类类聚居地 Devastation +2。上限 100，废墟中仍保留。",
          "image": "icon_aberrantmine.png",
          "initialValue": "15。",
          "modifierChange": {
            "natural": "Shadow 为 0 时，每回合 −5；Shadow 大于 0 且不超过 50% 时，每回合变化为 Shadow−0.6。",
            "external": "Mining Protocol 完成时建立；已有时增加 10，最高 100。\nShadow 超过 50% 且强度低于 100 时，Eldritch Smog 每回合使强度 +min(5,烟雾强度 × 0.1)。"
          },
          "id": "aberrant-mining-modifier"
        },
        {
          "name": "Aberrant Recycling",
          "text": "每回合产出 1 Unit，Habitability 减少 强度 × 0.004。每回合生成 Eldritch Smog，并使普通人类类聚居地 Devastation +0.2。上限 100，废墟中仍保留。",
          "image": "icon_aberrantrecycle.png",
          "initialValue": "15。",
          "modifierChange": {
            "natural": "Shadow 为 0 时，每回合 −5；Shadow 大于 0 且不超过 50% 时，每回合变化为 Shadow−0.6。",
            "external": "Recycling Protocol 完成时建立；已有时增加 5，最高 100。\nShadow 超过 50% 且强度低于 100 时，Aberrant Mining 每回合使强度 +min(5,采矿强度 × 0.1)。"
          },
          "id": "aberrant-recycling-modifier"
        },
        {
          "name": "Smog-born",
          "text": "使当地 Orc 军队适应工业污染。达到 100 后，把当地支持的 Orc Army 转为 Smog-born Orc Army，继承当前 HP；没有军队时，在回合数为 8 的倍数时生成。达到 100 的地点也保护邻近陆地，使其宜居度至少满足 Orc 的要求。",
          "image": "icon_labor_orc.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": "Orc Fortress 的 Core Efficiency 创建本修正。\n低于 100 时，Eldritch Smog 每回合使强度 +min(5,烟雾强度 × 0.05)，最高 100。"
          }
        },
        {
          "name": "Shrouded Eyes",
          "text": "当地 Security −2。",
          "image": "icon_power_profile.png",
          "initialValue": "30。",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "<CrossReference name=\"Shrouded Eyes\" /> 神力创建。"
          },
          "id": "shrouded-eyes-modifier"
        },
        {
          "name": "Smog-Bound (Start)",
          "text": "标记当前指定烟雾路线的起点。移除时清空起点与路线记录。",
          "image": "icon_power_smogbound.png",
          "initialValue": "100。",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Smog-Bound 在选定的核心建立；重复指定同一终点时重设为 100，更换路线时替换旧标记。"
          }
        },
        {
          "name": "Smog-Bound (End)",
          "text": "标记当前指定烟雾路线的终点。移除时清空终点与路线记录。",
          "image": "icon_power_smogbound.png",
          "initialValue": "100。",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "当地 Eldritch Smog 每回合使强度额外减少 烟雾强度 × 0.15。\nSmog-Bound 创建；重复指定同一终点时重设为 100，更换路线时替换旧标记。"
          }
        },
        {
          "name": "Nature Ritual",
          "text": "清除本地与相邻地点的 Eldritch Smog、<CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" /> 和 Contaminated Waters。可以通过 Corrupt Ritual 使其失效。",
          "image": "icon_elvencleanse.png",
          "initialValue": "200。",
          "modifierChange": {
            "natural": "每回合 −1；当地 Shadow 达到 100% 时额外 −2。",
            "external": "Clear Eldritch Contamination 完成时创建；已有时增加 200，最高 200。\nOasis of Blue 的“Weaken the ritual”选项有 60% 概率减少 100。\nCorrupt Ritual 转化为 Corrupted Nature Ritual。"
          },
          "id": "nature-ritual-modifier"
        },
        {
          "name": "Corrupted Nature Ritual",
          "text": "停止清除烟雾与水域污染，但仍占用当地仪式位置。",
          "image": "icon_elvencleansecorrupt.png",
          "initialValue": "继承 Nature Ritual 的当前强度。",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Corrupt Ritual 完成后转化。\nOasis of Blue 的“Weaken the ritual”选项有 60% 概率减少 100。"
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n在此神的生产体系中，Shadow 提高 Core Efficiency 的增长，保护污染修正并供 Aberrant Miner 采集；烟雾又会促进 Shadow。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "Eldritch Smog 与 <CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" /> 每回合随机增加 0 至 0.05 × 强度 个百分点。\nBlood is Fuel 每牺牲 1 人增加 2 个百分点。\nWandering Labor 的“Despair comes over them.”选项增加 100 个百分点。\nBanish Production Core 完成时，将普通人类类城市的地点 Shadow 归零。\nDeep One Cult 超过 100 时，每回合增加其强度/1000 个百分点。"
          }
        },
        {
          "name": "Death",
          "text": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。",
          "image": "./kalastrophe/death.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −0.5。",
            "external": "Blood is Fuel 每牺牲 1 人增加 1。\nHunger / Famine 在强度 100 至不足 200 时通常每回合增加 2；强度 200 至 300 时增加当次扣减的人口数。"
          }
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "Aberrant Mining 每回合使普通人类类聚居地增加 2。\nAberrant Recycling 每回合使普通人类类聚居地增加 0.2。\nMining Protocol 完成时使普通人类类聚居地增加 10。\nRecycling Protocol 完成时增加 10。\n<CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" /> 每回合增加 ⌊⌊max(1,酸雨强度/2)⌋/2⌋，限普通人类类聚居地。\nMode: Strip Mining 每次模式动作使普通人类类聚居地增加 50。"
          }
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。",
            "external": "Wandering Labor 的“Their fists clench.”选项增加 200。\nThe Smokestack 的“\"Investigate\" it.”选项减少 30；“Lead a mob to it.”选项增加 40。\nUnnatural Clouds 的“Spread rumors of black magic.”选项增加 30。\nOasis of Blue 的“Spread fear”选项增加 50。\nAberrant Factory 每回合减少 5。\nHunger / Famine 每回合增加 4；强度处于 100 至不足 200 时额外增加 12。"
          }
        },
        {
          "name": "Ward",
          "text": "抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。",
          "image": "./kalastrophe/driveBackShadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "Production Core 每回合减少 2。\nOasis of Blue 的“Seek the wards”选项减少 50。"
          }
        },
        {
          "name": "Orcish Industry",
          "text": "用于支持 Orc 军队；军队 HP 上限依赖故乡及相邻地点的工业总量。",
          "image": "./out-of-gods/orcishIndustry.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度低于 50 时每回合 +1；达到 51 或以上时每回合 −1。",
            "external": "当地或相邻 Orc Camp 存在 Core Efficiency 时，对应核心使工业“向默认值增加”的增长量翻倍，“向默认值减少”的衰减量减半。多个核心可以叠加处理。"
          },
          "baseGame": true
        },
        {
          "name": "Deep One Cult",
          "text": "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n在人类聚居地达到 300 时，将其转为 Deep One Sanctum；70% 人口经 Sanctum 转送至深海城市，统治者转为自主 Deep One。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。",
          "image": "./kalastrophe/deepOnes.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，正常游戏中每回合强度 +1。",
            "external": "Contaminated Waters 在人类类聚居地，或自身达到 100 的任意地点，每回合增加 min(2,污染强度/75)。"
          }
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。",
          "image": "./kalastrophe/agitate.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "Aberrant Factory 每回合直接移除。"
          }
        },
        {
          "name": "Military Fervour",
          "text": "提高以当地为故乡的 Human Army 最大 HP，倍率为 1 + min(强度,100)/100。",
          "image": "./out-of-gods/unit_humanArmy.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −2。",
            "external": ""
          }
        },
        {
          "name": "Hunger / Famine",
          "id": "hunger-famine",
          "image": "./aberrant-metal/famine.png",
          "baseGame": true,
          "initialValue": "",
          "text": "同一修正在强度低于 100 时显示 Hunger，达到 100 后显示 Famine。Prosperity 修正为 −强度/200；达到 50 后不再提供通常的休息挑战。\n普通模式下，低于 100 时每回合 Unrest +4；100 至不足 200 时每回合 Unrest +16、人口 −2；200 至 300 时每回合 Unrest +4、人口减少 ⌊max(2,人口 × 0.05)⌋；超过 300 时人类类聚居地毁灭。\n人口损失计入 Death，剩余人口最低保留 1；100 至不足 200 时若扣减后人口不大于 0，该次不增加 Death。开启难民且地点允许时，另生成损失人口一半规模的难民，向下取整，包含在本次人口扣减中。",
          "modifierChange": {
            "natural": "令 P 为常规人口结算后的当前人口，F 为当轮本地产粮与进口之和。\nP>F 时，每回合 +min(10,max(5,P−F))。\nP≤F 时，每回合 −max(10,5×(F−P))。",
            "external": "Aberrant Factory 停止常规食物供需的人口结算，并每回合减少该修正 5。"
          }
        }
      ]
    },
{
  "id": "locations",
  "title": "地点",
  "items": [
    {
      "name": "Aberrant Factory",
      "image": "icon_settlementfactory.png",
      "text": "城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\n<CrossReference name=\"Production Core\" href=\"#entry-production-core\" /> 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\n<CrossReference name=\"Repurposed Structures\" href=\"#entry-repurposed-structures\" />、<CrossReference name=\"Production Core\" href=\"#entry-production-core\" />、<CrossReference name=\"Ruined Core\" href=\"#entry-ruined-core\" />、<CrossReference name=\"Biometallic Mass\" href=\"#entry-biometallic-mass\" />、<CrossReference name=\"Churning Machinery\" href=\"#entry-churning-machinery\" />。\n固定、随机与改建来源见各兴趣点。",
      "id": "aberrant-factory"
    },
    {
      "id": "god-place-location-settlement-factory--place-hook-3320562229-1",
      "name": "Aberrant Factory 的额外行动",
      "text": "使用 Aberrant Metal 时，工厂聚居地增加归入 Dark Empire 与 <CrossReference name=\"Ash Fall\" href=\"#entry-place-task-3320562229-mg-factory-smogcold\" /> 入口。\n\n对应地点 / 兴趣点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "baseGame": false
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-rest",
      "name": "Rest and Resupply",
      "text": "恢复人物以及非 Undead、非 Orc 随从的 HP。",
      "image": "/locations/game/restAndRearm.png",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、Subsumed Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者不能带 Undead 或 Orc 标签；地点 Unrest <100、Famine <50。非玩家英雄在高 Ophanim’s Faith 地点另受限制。",
      "statLine": "Complexity: 3\nProfile: 20\nMenace: 0\nXP: 8"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-warntheworld",
      "name": "Warn The World",
      "text": "提高当地及邻近统治者的 Awareness。",
      "image": "/locations/game/warnTheWorld.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者 Awareness 必须为 100%；当地统治者尚未完全觉醒，且不属于 Dark Empire、Ophanim Theocracy 或正在被 Ophanim 接管的聚居地。",
      "statLine": "Complexity: 3\nProfile: 60\nMenace: 0\nXP: 8",
      "positiveTags": "Co-Operation",
      "negativeTags": "Danger"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-drivebackshadow",
      "name": "Drive Back Shadow",
      "text": "降低当地 Shadow；相邻人类聚居地中最低的 Shadow 越低，清除效果越强。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地 Shadow > 5%；执行者 Shadow < 50%。",
      "statLine": "Complexity: 40\nProfile: 60\nMenace: 0\nXP: 60",
      "positiveTags": "无",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-savehero",
      "name": "Save Hero",
      "text": "减少目标英雄的 Shadow。",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标为当地故乡英雄，Shadow >20% 且 <100%，仍存活且未被玩家控制；执行者不能是目标本人，Shadow ≤80%。",
      "statLine": "Complexity: 20\nProfile: 70\nMenace: 0\nXP: 36",
      "positiveTags": "无",
      "negativeTags": "Shadow、Gold、Cruelty"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-elf-giveruleelfstone",
      "name": "Gift Ruler an Elfstone",
      "text": "把携带的 Elfstone 交给当地统治者。",
      "image": "/locations/game/i_elfstone.png",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅 Elven Artificer，且携带 Elfstone。",
      "statLine": "Complexity: 1\nProfile: 100\nMenace: 0\nXP: 3",
      "positiveTags": "Religion、Co-Operation",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-sabotageruler",
      "name": "Sabotage Ruler",
      "text": "随机破坏当地统治者的事务。",
      "image": "/locations/game/vendetta.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "地点属于国家，且存在统治者。",
      "statLine": "Complexity: 30\nProfile: 30\nMenace: 0\nXP: 49",
      "positiveTags": "Cruelty",
      "negativeTags": "Co-Operation"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-assassinateenshadowedruler",
      "name": "Assassinate Enshadowed Ruler",
      "text": "Alliance 英雄刺杀受 Shadow 侵蚀的统治者。",
      "image": "/locations/game/silentAssassin.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于 Alliance；目标 Shadow >20%，且目标国家不是 Dark Empire 或 Ophanim Theocracy。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Cruelty、Danger",
      "negativeTags": "Co-Operation、Shadow"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-redeemruler",
      "name": "Redeem Ruler",
      "text": "当地统治者 Shadow 减半。",
      "image": "/locations/game/consacrate.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地属于 Alliance 且有统治者；执行者 Shadow <95%。",
      "statLine": "Complexity: 50\nProfile: 40\nMenace: 200 × 统治者 Shadow / 100\nXP: 72",
      "positiveTags": "无",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-redeemsovereign",
      "name": "Redeem Sovereign",
      "text": "清空君主 Shadow，建立 Ward，并驱散周边 Shadow。",
      "image": "/locations/game/crown.png",
      "meta": "Lore + Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "由 Chosen One 在合格国家首都执行；君主 Shadow >50%，国家不是 Dark Empire 或 Ophanim Theocracy，并且特殊行动冷却已结束。",
      "statLine": "Complexity: 100\nProfile: 100\nMenace: 40 × 当地 Shadow / 100\nXP: 121",
      "positiveTags": "无",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-poisonhero",
      "name": "Poison Hero",
      "text": "目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标以这里为故乡；地点渗透度 >0%，目标没有 Poisoned。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 40\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-ransackpossessions",
      "name": "Ransack Possessions",
      "text": "打开目标人物的物品与 Gold 转移界面，可拿取或塞入物品；目标会对执行者结怨。",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标以这里为故乡；地点渗透度 ≥50%，距离上次使用至少 100 回合。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 40\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-wellofshadows",
      "name": "Well of Shadows",
      "text": "建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。",
      "image": "/locations/game/wellOfShadows.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地 Shadow ≥10%，Well of Shadows <100。",
      "statLine": "Complexity: 40\nProfile: 40\nMenace: 30 × 相邻合格人类地点的正向 Shadow 差值之和 / 100；差值为 0 时 -50\nXP: 60"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-bribeguards",
      "name": "Bribe Guards",
      "text": "消耗 25 Gold，建立 Bribed Guards，使 Security 降低 2，持续 25 回合。",
      "image": "/locations/game/bribe.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "没有 Bribed Guards，且执行者有足够 Gold。",
      "statLine": "Complexity: 2\nProfile: 60\nMenace: 0\nXP: 6"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-assassinatesilent",
      "name": "Silent Assassination",
      "text": "暗杀当地统治者，由继承人接替；相较 <CrossReference name=\"Brutal Assassination\" href=\"?page=locations#entry-place-task-base-ch-assassinatebrutal\" meta=\"挑战\" text=\"杀死当地统治者，由继承人接替；提高执行者的 Profile 与 Menace。\n执行地点：City、Dwarven City、Dwarven Outpost、Elven City、小型人类聚居地、Living Settlement、Aberrant Factory、Mobile Factory（驻地）\nMight\nComplexity: 50 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋\n执行条件：当地有统治者。\" image=\"/locations/game/brutalAssassination.png\" target=\"_blank\" />，暴露更低。",
      "image": "/locations/game/silentAssassin.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者，渗透度为 100%。",
      "statLine": "Complexity: 30 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-assassinatebrutal",
      "name": "Brutal Assassination",
      "text": "杀死当地统治者，由继承人接替；提高执行者的 Profile 与 Menace。",
      "image": "/locations/game/brutalAssassination.png",
      "meta": "Might",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者。",
      "statLine": "Complexity: 50 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-accessvault",
      "name": "Access Vault",
      "text": "打开统治者的物品与 Gold 转移界面，可拿取财物或放入物品。",
      "image": "/locations/game/accessVault.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者且渗透度为 100%；Dark Empire 或 Ophanim Theocracy 走专门放行分支。",
      "statLine": "Complexity: 20 + 8 × Security；Dark Empire / Ophanim Theocracy 为 1\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-accessvaultlimited",
      "name": "Subtle Thievery",
      "text": "打开统治者财物界面，本次最多取得 35 Gold。",
      "image": "/locations/game/accessVault.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者，渗透度为 100%。",
      "statLine": "Complexity: 10 + 4 × Security\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-organisedissent",
      "name": "Organise Dissent",
      "text": "建立 Organised Dissent，持续降低 Security、增加 Unrest，直到其持续期结束或统治者更换。",
      "image": "/locations/game/organisedDissent.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者、没有 Organised Dissent，并且有 Lingering Resentment，或 Unrest ≥100。",
      "statLine": "Complexity: 25\nProfile: 40\nMenace: 50\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-3320562229-mg-factory-smogcold",
      "name": "Ash Fall",
      "text": "引导期间，每回合使全部地表格子的临时温度偏移减少 0.18 × min(1,S) × S，世界恐慌临时增量增加 max(0.01,0.005 × S)。引导达到 150 进度后结束，完成时没有额外效果。\nS 为缓存的烟雾覆盖值：各烟雾地点所属地块按 min(1,烟雾强度 × 0.05) 加总，再除以地图平面地块总数。引导开始时产生 Profile 与 Menace，另有 160 点 Channelling Danger。",
      "image": "/locations/mod/Factory_God.icon_power_ashfall.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "Geomancy 至少 2，S 大于 0。",
      "statLine": "Complexity: 150\nProfile: 50\nMenace: 0\nXP: 164"
    },
    {
      "name": "Integrate into Dark Empire",
      "text": "把工厂及其支持的军队划入现存 Dark Empire。",
      "image": "darkCrown.png",
      "location": "Aberrant Factory",
      "statLine": "Complexity: 25 / Profile: 0 / Menace: 0 / XP: 42",
      "limit": "玩家可控 Agent；Dark Empire 已建立，目标尚未归属它。",
      "id": "god-place-location-settlement-factory--place-task-3320562229-ch-factorygod-joinde"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-preach",
      "name": "Holy: Preach Faith",
      "text": "将当地信仰改为执行者所属教团。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于 Holy Order，与当地信仰不同；教团允许传教，并有足够传教资金。Ophanim 教团要求当地 Faith 达到门槛；其他教团不能覆盖其接管地。不得在其他教团的权力中心传教。",
      "statLine": "Complexity: 10\nProfile: 40\nMenace: 0\nXP: 21",
      "positiveTags": "Religion、Co-Operation",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-buildtemple",
      "name": "Holy: Build Temple",
      "text": "在本教团信仰覆盖的聚居地建立 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />；可替换其他教团的 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团；教团资金加玩家控制人物可支付的 Gold 足以支付建殿费用。不能已有本教团 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />；新增时还要有兴趣点容量。",
      "statLine": "Complexity: 20\nProfile: 60\nMenace: 0\nXP: 36",
      "positiveTags": "Religion、Cooperation",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-preachtoruler",
      "name": "Holy: Preach to Ruler",
      "text": "消耗 100 Gold，使统治者更喜欢本教团或 Religion，并降低对其他教团的偏好。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于教团，统治者的相关偏好仍有提高空间。",
      "statLine": "Complexity: 10\nProfile: 40\nMenace: 0\nXP: 21",
      "positiveTags": "Religion、Ambition",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-ward",
      "name": "Holy: Ward",
      "text": "当地 Ward +100。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Candle Circles >0，Ward <100。",
      "statLine": "Complexity: 20\nProfile: 40\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-removeward",
      "name": "Holy: Remove Ward",
      "text": "当地 Ward −100。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Candle Circles <0，当地 Ward >0。",
      "statLine": "Complexity: 30\nProfile: 40\nMenace: 0\nXP: 49",
      "positiveTags": "Religion、Shadow",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-abyssalfaith",
      "name": "Holy: Abyssal Faith",
      "text": "按 Abyssal Faith 的倾向，使当地统治者更喜欢或更厌恶 Deep Ones。",
      "image": "/locations/game/deepOnes.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团；Abyssal Faith 非中立，统治者的对应偏好仍可改变。",
      "statLine": "Complexity: 20\nProfile: 40\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-aware",
      "name": "Holy: Aware",
      "text": "按 Aware of Elder Powers 的倾向，提高或降低当地统治者 Awareness。",
      "image": "/locations/game/warnTheWorld.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅 Acolyte；属于当地教团，教义非中立，统治者 Awareness 仍有对应变化空间。",
      "statLine": "Complexity: 20\nProfile: 60\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-doomsay",
      "name": "Holy: Prophesy Doom",
      "text": "当地 Madness +50。",
      "image": "/locations/game/madness.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅本地教团的 Acolyte，Prophets of Doom <0，Madness <200。",
      "statLine": "Complexity: 25\nProfile: 40\nMenace: 0\nXP: 42",
      "positiveTags": "Religion、Madness",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-factory--place-task-base-ch-h-militaryfervour",
      "name": "Holy: Military Fervour",
      "text": "当地 Military Fervour +50，增强军队。",
      "image": "/locations/game/war.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Crusader Faith >0；仅限 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />，且 Military Fervour <100。",
      "statLine": "Complexity: 40\nProfile: 40\nMenace: 0\nXP: 60",
      "positiveTags": "Religion、Combat",
      "negativeTags": "无"
    },
    {
      "name": "Mobile Factory（驻地）",
      "id": "mobile-factory-settlement",
      "image": "icon_settlementmobilefactory.png",
      "text": "Mobile Factory 所关联的聚居地形式，继承工厂的人口维持与烟雾效果。防御上限为 人口+100；军队死亡会使驻地毁灭，驻地毁灭也会杀死关联军队。军队每回合按自身 HP 更新这里的人口。\n\n出现方式\nWalking <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" /> 将 <CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" /> 转为可移动军队及其配套驻地。\n\n可能配置的兴趣点\n<CrossReference name=\"Repurposed Structures\" href=\"#entry-repurposed-structures\" />、<CrossReference name=\"Production Core\" href=\"#entry-production-core\" />、<CrossReference name=\"Ruined Core\" href=\"#entry-ruined-core\" />、<CrossReference name=\"Biometallic Mass\" href=\"#entry-biometallic-mass\" />、<CrossReference name=\"Churning Machinery\" href=\"#entry-churning-machinery\" />。\n固定、随机与改建来源见各兴趣点。"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-hook-3320562229-1",
      "name": "Aberrant Factory 的额外行动",
      "text": "使用 Aberrant Metal 时，工厂聚居地增加归入 Dark Empire 与 <CrossReference name=\"Ash Fall\" href=\"#entry-place-task-3320562229-mg-factory-smogcold\" /> 入口。\n\n对应地点 / 兴趣点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "baseGame": false
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-rest",
      "name": "Rest and Resupply",
      "text": "恢复人物以及非 Undead、非 Orc 随从的 HP。",
      "image": "/locations/game/restAndRearm.png",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、Subsumed Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者不能带 Undead 或 Orc 标签；地点 Unrest <100、Famine <50。非玩家英雄在高 Ophanim’s Faith 地点另受限制。",
      "statLine": "Complexity: 3\nProfile: 20\nMenace: 0\nXP: 8"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-warntheworld",
      "name": "Warn The World",
      "text": "提高当地及邻近统治者的 Awareness。",
      "image": "/locations/game/warnTheWorld.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者 Awareness 必须为 100%；当地统治者尚未完全觉醒，且不属于 Dark Empire、Ophanim Theocracy 或正在被 Ophanim 接管的聚居地。",
      "statLine": "Complexity: 3\nProfile: 60\nMenace: 0\nXP: 8",
      "positiveTags": "Co-Operation",
      "negativeTags": "Danger"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-drivebackshadow",
      "name": "Drive Back Shadow",
      "text": "降低当地 Shadow；相邻人类聚居地中最低的 Shadow 越低，清除效果越强。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地 Shadow > 5%；执行者 Shadow < 50%。",
      "statLine": "Complexity: 40\nProfile: 60\nMenace: 0\nXP: 60",
      "positiveTags": "无",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-savehero",
      "name": "Save Hero",
      "text": "减少目标英雄的 Shadow。",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标为当地故乡英雄，Shadow >20% 且 <100%，仍存活且未被玩家控制；执行者不能是目标本人，Shadow ≤80%。",
      "statLine": "Complexity: 20\nProfile: 70\nMenace: 0\nXP: 36",
      "positiveTags": "无",
      "negativeTags": "Shadow、Gold、Cruelty"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-elf-giveruleelfstone",
      "name": "Gift Ruler an Elfstone",
      "text": "把携带的 Elfstone 交给当地统治者。",
      "image": "/locations/game/i_elfstone.png",
      "meta": "固定进度",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅 Elven Artificer，且携带 Elfstone。",
      "statLine": "Complexity: 1\nProfile: 100\nMenace: 0\nXP: 3",
      "positiveTags": "Religion、Co-Operation",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-sabotageruler",
      "name": "Sabotage Ruler",
      "text": "随机破坏当地统治者的事务。",
      "image": "/locations/game/vendetta.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "地点属于国家，且存在统治者。",
      "statLine": "Complexity: 30\nProfile: 30\nMenace: 0\nXP: 49",
      "positiveTags": "Cruelty",
      "negativeTags": "Co-Operation"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinateenshadowedruler",
      "name": "Assassinate Enshadowed Ruler",
      "text": "Alliance 英雄刺杀受 Shadow 侵蚀的统治者。",
      "image": "/locations/game/silentAssassin.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于 Alliance；目标 Shadow >20%，且目标国家不是 Dark Empire 或 Ophanim Theocracy。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Cruelty、Danger",
      "negativeTags": "Co-Operation、Shadow"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-redeemruler",
      "name": "Redeem Ruler",
      "text": "当地统治者 Shadow 减半。",
      "image": "/locations/game/consacrate.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地属于 Alliance 且有统治者；执行者 Shadow <95%。",
      "statLine": "Complexity: 50\nProfile: 40\nMenace: 200 × 统治者 Shadow / 100\nXP: 72",
      "positiveTags": "无",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-redeemsovereign",
      "name": "Redeem Sovereign",
      "text": "清空君主 Shadow，建立 Ward，并驱散周边 Shadow。",
      "image": "/locations/game/crown.png",
      "meta": "Lore + Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "由 Chosen One 在合格国家首都执行；君主 Shadow >50%，国家不是 Dark Empire 或 Ophanim Theocracy，并且特殊行动冷却已结束。",
      "statLine": "Complexity: 100\nProfile: 100\nMenace: 40 × 当地 Shadow / 100\nXP: 121",
      "positiveTags": "无",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-poisonhero",
      "name": "Poison Hero",
      "text": "目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标以这里为故乡；地点渗透度 >0%，目标没有 Poisoned。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 40\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-ransackpossessions",
      "name": "Ransack Possessions",
      "text": "打开目标人物的物品与 Gold 转移界面，可拿取或塞入物品；目标会对执行者结怨。",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "目标以这里为故乡；地点渗透度 ≥50%，距离上次使用至少 100 回合。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 40\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-wellofshadows",
      "name": "Well of Shadows",
      "text": "建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。",
      "image": "/locations/game/wellOfShadows.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地 Shadow ≥10%，Well of Shadows <100。",
      "statLine": "Complexity: 40\nProfile: 40\nMenace: 30 × 相邻合格人类地点的正向 Shadow 差值之和 / 100；差值为 0 时 -50\nXP: 60"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-bribeguards",
      "name": "Bribe Guards",
      "text": "消耗 25 Gold，建立 Bribed Guards，使 Security 降低 2，持续 25 回合。",
      "image": "/locations/game/bribe.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "没有 Bribed Guards，且执行者有足够 Gold。",
      "statLine": "Complexity: 2\nProfile: 60\nMenace: 0\nXP: 6"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinatesilent",
      "name": "Silent Assassination",
      "text": "暗杀当地统治者，由继承人接替；相较 <CrossReference name=\"Brutal Assassination\" href=\"?page=locations#entry-place-task-base-ch-assassinatebrutal\" meta=\"挑战\" text=\"杀死当地统治者，由继承人接替；提高执行者的 Profile 与 Menace。\n执行地点：City、Dwarven City、Dwarven Outpost、Elven City、小型人类聚居地、Living Settlement、Aberrant Factory、Mobile Factory（驻地）\nMight\nComplexity: 50 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋\n执行条件：当地有统治者。\" image=\"/locations/game/brutalAssassination.png\" target=\"_blank\" />，暴露更低。",
      "image": "/locations/game/silentAssassin.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者，渗透度为 100%。",
      "statLine": "Complexity: 30 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinatebrutal",
      "name": "Brutal Assassination",
      "text": "杀死当地统治者，由继承人接替；提高执行者的 Profile 与 Menace。",
      "image": "/locations/game/brutalAssassination.png",
      "meta": "Might",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者。",
      "statLine": "Complexity: 50 + 5 × Security\nProfile: 50\nMenace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-accessvault",
      "name": "Access Vault",
      "text": "打开统治者的物品与 Gold 转移界面，可拿取财物或放入物品。",
      "image": "/locations/game/accessVault.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者且渗透度为 100%；Dark Empire 或 Ophanim Theocracy 走专门放行分支。",
      "statLine": "Complexity: 20 + 8 × Security；Dark Empire / Ophanim Theocracy 为 1\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-accessvaultlimited",
      "name": "Subtle Thievery",
      "text": "打开统治者财物界面，本次最多取得 35 Gold。",
      "image": "/locations/game/accessVault.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者，渗透度为 100%。",
      "statLine": "Complexity: 10 + 4 × Security\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-organisedissent",
      "name": "Organise Dissent",
      "text": "建立 Organised Dissent，持续降低 Security、增加 Unrest，直到其持续期结束或统治者更换。",
      "image": "/locations/game/organisedDissent.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "当地有统治者、没有 Organised Dissent，并且有 Lingering Resentment，或 Unrest ≥100。",
      "statLine": "Complexity: 25\nProfile: 40\nMenace: 50\nXP: 42"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-3320562229-mg-factory-smogcold",
      "name": "Ash Fall",
      "text": "引导期间，每回合使全部地表格子的临时温度偏移减少 0.18 × min(1,S) × S，世界恐慌临时增量增加 max(0.01,0.005 × S)。引导达到 150 进度后结束，完成时没有额外效果。\nS 为缓存的烟雾覆盖值：各烟雾地点所属地块按 min(1,烟雾强度 × 0.05) 加总，再除以地图平面地块总数。引导开始时产生 Profile 与 Menace，另有 160 点 Channelling Danger。",
      "image": "/locations/mod/Factory_God.icon_power_ashfall.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "Geomancy 至少 2，S 大于 0。",
      "statLine": "Complexity: 150\nProfile: 50\nMenace: 0\nXP: 164"
    },
    {
      "name": "Integrate into Dark Empire",
      "text": "把工厂及其支持的军队划入现存 Dark Empire。",
      "image": "darkCrown.png",
      "location": "Aberrant Factory",
      "statLine": "Complexity: 25 / Profile: 0 / Menace: 0 / XP: 42",
      "limit": "玩家可控 Agent；Dark Empire 已建立，目标尚未归属它。",
      "id": "god-place-location-settlement-mobilefactory--place-task-3320562229-ch-factorygod-joinde"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-preach",
      "name": "Holy: Preach Faith",
      "text": "将当地信仰改为执行者所属教团。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于 Holy Order，与当地信仰不同；教团允许传教，并有足够传教资金。Ophanim 教团要求当地 Faith 达到门槛；其他教团不能覆盖其接管地。不得在其他教团的权力中心传教。",
      "statLine": "Complexity: 10\nProfile: 40\nMenace: 0\nXP: 21",
      "positiveTags": "Religion、Co-Operation",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-buildtemple",
      "name": "Holy: Build Temple",
      "text": "在本教团信仰覆盖的聚居地建立 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />；可替换其他教团的 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团；教团资金加玩家控制人物可支付的 Gold 足以支付建殿费用。不能已有本教团 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />；新增时还要有兴趣点容量。",
      "statLine": "Complexity: 20\nProfile: 60\nMenace: 0\nXP: 36",
      "positiveTags": "Religion、Cooperation",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-preachtoruler",
      "name": "Holy: Preach to Ruler",
      "text": "消耗 100 Gold，使统治者更喜欢本教团或 Religion，并降低对其他教团的偏好。",
      "image": "/locations/game/temple.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于教团，统治者的相关偏好仍有提高空间。",
      "statLine": "Complexity: 10\nProfile: 40\nMenace: 0\nXP: 21",
      "positiveTags": "Religion、Ambition",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-ward",
      "name": "Holy: Ward",
      "text": "当地 Ward +100。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Candle Circles >0，Ward <100。",
      "statLine": "Complexity: 20\nProfile: 40\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "Shadow"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-removeward",
      "name": "Holy: Remove Ward",
      "text": "当地 Ward −100。",
      "image": "/locations/game/driveBackShadow.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Candle Circles <0，当地 Ward >0。",
      "statLine": "Complexity: 30\nProfile: 40\nMenace: 0\nXP: 49",
      "positiveTags": "Religion、Shadow",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-abyssalfaith",
      "name": "Holy: Abyssal Faith",
      "text": "按 Abyssal Faith 的倾向，使当地统治者更喜欢或更厌恶 Deep Ones。",
      "image": "/locations/game/deepOnes.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团；Abyssal Faith 非中立，统治者的对应偏好仍可改变。",
      "statLine": "Complexity: 20\nProfile: 40\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-aware",
      "name": "Holy: Aware",
      "text": "按 Aware of Elder Powers 的倾向，提高或降低当地统治者 Awareness。",
      "image": "/locations/game/warnTheWorld.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅 Acolyte；属于当地教团，教义非中立，统治者 Awareness 仍有对应变化空间。",
      "statLine": "Complexity: 20\nProfile: 60\nMenace: 0\nXP: 36",
      "positiveTags": "Religion",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-doomsay",
      "name": "Holy: Prophesy Doom",
      "text": "当地 Madness +50。",
      "image": "/locations/game/madness.png",
      "meta": "Lore",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "仅本地教团的 Acolyte，Prophets of Doom <0，Madness <200。",
      "statLine": "Complexity: 25\nProfile: 40\nMenace: 0\nXP: 42",
      "positiveTags": "Religion、Madness",
      "negativeTags": "无"
    },
    {
      "id": "god-place-location-settlement-mobilefactory--place-task-base-ch-h-militaryfervour",
      "name": "Holy: Military Fervour",
      "text": "当地 Military Fervour +50，增强军队。",
      "image": "/locations/game/war.png",
      "meta": "Command",
      "baseGame": true,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、Living Settlement、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "执行者属于当地教团，Crusader Faith >0；仅限 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />，且 Military Fervour <100。",
      "statLine": "Complexity: 40\nProfile: 40\nMenace: 0\nXP: 60",
      "positiveTags": "Religion、Combat",
      "negativeTags": "无"
    },
    {
      "id": "place-hook-3320562229-0",
      "name": "人类聚居地的人口回收",
      "text": "使用 Aberrant Metal 且当地仍有人口时加入；只供 Aberrant Repoman 使用。\n\n对应地点 / 兴趣点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "id": "god-place-place-hook-3320562229-0--place-task-3320562229-ch-factory-stealpops",
      "name": "Reposession Protocol",
      "text": "把等同于当前 HP 的人口转移到 Aberrant Repoman 的故乡 <CrossReference name=\"Production Core\" href=\"#entry-production-core\" />；当地 Shadow 越高，完成越快。",
      "image": "/locations/game/unit_luredCrowd.png",
      "meta": "固定进度",
      "baseGame": false,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />",
      "limit": "仅 Aberrant Repoman；当地 Shadow >0%，没有 Core Efficiency。",
      "statLine": "Complexity: min(25, 向下取整(500 / 当地 Shadow))\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-settlement-factory",
      "name": "Aberrant Factory",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "aberrant-factory"
          ]
        },
        {
          "title": "条件性行动入口",
          "entryIds": [
            "god-place-location-settlement-factory--place-hook-3320562229-1"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-settlement-factory--place-task-base-ch-rest"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-settlement-factory--place-task-base-ch-warntheworld",
            "god-place-location-settlement-factory--place-task-base-ch-drivebackshadow",
            "god-place-location-settlement-factory--place-task-base-ch-savehero",
            "god-place-location-settlement-factory--place-task-base-ch-elf-giveruleelfstone",
            "god-place-location-settlement-factory--place-task-base-ch-sabotageruler",
            "god-place-location-settlement-factory--place-task-base-ch-assassinateenshadowedruler",
            "god-place-location-settlement-factory--place-task-base-ch-redeemruler",
            "god-place-location-settlement-factory--place-task-base-ch-redeemsovereign"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-settlement-factory--place-task-base-ch-poisonhero",
            "god-place-location-settlement-factory--place-task-base-ch-ransackpossessions",
            "god-place-location-settlement-factory--place-task-base-ch-wellofshadows",
            "god-place-location-settlement-factory--place-task-base-ch-bribeguards",
            "god-place-location-settlement-factory--place-task-base-ch-assassinatesilent",
            "god-place-location-settlement-factory--place-task-base-ch-assassinatebrutal",
            "god-place-location-settlement-factory--place-task-base-ch-accessvault",
            "god-place-location-settlement-factory--place-task-base-ch-accessvaultlimited",
            "god-place-location-settlement-factory--place-task-base-ch-organisedissent",
            "god-place-location-settlement-factory--place-task-3320562229-mg-factory-smogcold",
            "god-place-location-settlement-factory--place-task-3320562229-ch-factorygod-joinde"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-location-settlement-factory--place-task-base-ch-h-preach",
            "god-place-location-settlement-factory--place-task-base-ch-h-buildtemple",
            "god-place-location-settlement-factory--place-task-base-ch-h-preachtoruler",
            "god-place-location-settlement-factory--place-task-base-ch-h-ward",
            "god-place-location-settlement-factory--place-task-base-ch-h-removeward",
            "god-place-location-settlement-factory--place-task-base-ch-h-abyssalfaith",
            "god-place-location-settlement-factory--place-task-base-ch-h-aware",
            "god-place-location-settlement-factory--place-task-base-ch-h-doomsay",
            "god-place-location-settlement-factory--place-task-base-ch-h-militaryfervour"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-settlement-mobilefactory",
      "name": "Mobile Factory（驻地）",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "mobile-factory-settlement"
          ]
        },
        {
          "title": "条件性行动入口",
          "entryIds": [
            "god-place-location-settlement-mobilefactory--place-hook-3320562229-1"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-settlement-mobilefactory--place-task-base-ch-rest"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-settlement-mobilefactory--place-task-base-ch-warntheworld",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-drivebackshadow",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-savehero",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-elf-giveruleelfstone",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-sabotageruler",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinateenshadowedruler",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-redeemruler",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-redeemsovereign"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-settlement-mobilefactory--place-task-base-ch-poisonhero",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-ransackpossessions",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-wellofshadows",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-bribeguards",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinatesilent",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-assassinatebrutal",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-accessvault",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-accessvaultlimited",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-organisedissent",
            "god-place-location-settlement-mobilefactory--place-task-3320562229-mg-factory-smogcold",
            "god-place-location-settlement-mobilefactory--place-task-3320562229-ch-factorygod-joinde"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-preach",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-buildtemple",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-preachtoruler",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-ward",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-removeward",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-abyssalfaith",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-aware",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-doomsay",
            "god-place-location-settlement-mobilefactory--place-task-base-ch-h-militaryfervour"
          ]
        }
      ]
    },
    {
      "id": "god-place-place-hook-3320562229-0",
      "name": "人类聚居地的人口回收",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3320562229-0"
          ]
        },
        {
          "title": "自主单位任务",
          "entryIds": [
            "god-place-place-hook-3320562229-0--place-task-3320562229-ch-factory-stealpops"
          ]
        }
      ],
      "image": "/locations/game/loc_city_prague.png"
    }
  ]
},
{
  "id": "points-of-interest",
  "title": "兴趣点",
  "items": [
    {
      "name": "Repurposed Structures",
      "image": "icon_power_subsettlement1b.png",
      "text": "Prosperity −0.2，Banish Production Core 的 Danger +4。每回合使 Eldritch Smog 增加 Core Efficiency × 0.01。\n没有存活的配属 Aberrant Miner 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Miner 并清零。每座设施各维护一个；被另一种工厂设施替换时，配属单位解散。\n\n出现方式\n<CrossReference name=\"Hostile Takeover\" href=\"#entry-hostile-takeover\" meta=\"神力\" text=\"选择兴趣点，替换为 Repurposed Structures。\" image=\"./aberrant-metal/icon_power_subsettlement1b.png\" /> 替换目标兴趣点，保留被替换设施的记录。\n\n可出现地点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />、<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "id": "repurposed-structures"
    },
    {
      "name": "Banish Production Core",
      "meta": "Lore",
      "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
      "image": "reforgeTheSeal.png",
      "location": "Production Core",
      "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
      "positiveTags": "Cooperation",
      "negativeTags": "邪恶势力、Shadow、Danger",
      "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。",
      "id": "god-place-location-sub-factory-festeringmetal--place-task-3320562229-ch-factorygod-reforgeseals"
    },
    {
      "name": "Production Core",
      "image": "icon_power_coreb.png",
      "text": "替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\n<CrossReference name=\"Begin Production\" href=\"#entry-begin-production\" meta=\"神力\" text=\"选择一处合格兴趣点，将其替换为 Production Core，并建立 Core Efficiency。Orc Fortress 与 Deep One Abyssal City 使用对应的核心形式。\" image=\"./aberrant-metal/icon_power_coreb.png\" /> 替换合格兴趣点或在深海据点增加；<CrossReference name=\"Reestablish Core\" href=\"#entry-reestablish-core\" /> 可重建 <CrossReference name=\"Ruined Core\" href=\"#entry-ruined-core\" />；相应特质完成挑战也能建立核心。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />、<CrossReference name=\"Abyssal City\" href=\"?page=locations#entry-location-set-deeponeabyssalcity\" meta=\"地点\" text=\"地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。\n\n出现方式\nDeep One Sanctum 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。\n\n可能配置的兴趣点\nAbyssal Armory、Abyssal Cathedral、Abyssal City。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_evil_deepOneCity.png\" target=\"_blank\" />、<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "id": "production-core"
    },
    {
      "name": "Banish Production Core",
      "meta": "Lore",
      "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
      "image": "reforgeTheSeal.png",
      "location": "Production Core",
      "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
      "positiveTags": "Cooperation",
      "negativeTags": "邪恶势力、Shadow、Danger",
      "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-reforgeseals"
    },
    {
      "name": "Reestablish Core",
      "text": "用新的 Production Core 替换废墟，Core Efficiency 为 1。",
      "image": "icon_power_coreb.png",
      "location": "Ruined Core",
      "statLine": "Complexity: 75 / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: 97",
      "limit": "玩家可控 Agent；废墟消退进度低于 50。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-reestablishcore"
    },
    {
      "name": "Recruit Laborer",
      "text": "免费招募一个 Aberrant Laborer；可由多人同时执行。",
      "image": "icon_labor1.png",
      "location": "人类类聚居地的 Production Core",
      "statLine": "Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6",
      "limit": "玩家可控 Agent；完成时按 Command 容量处理随从。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-recruitlaborer"
    },
    {
      "name": "Recruit Smog-Born",
      "text": "免费招募一个 Smog-Born Orc；不消耗 Smog-born。可由多人同时执行。",
      "image": "icon_labor_orc.png",
      "location": "Orc Camp 的 Production Core",
      "statLine": "Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6",
      "limit": "玩家可控 Agent；当地 Smog-born 达到 100。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-recruitorc"
    },
    {
      "name": "Boost Productivity",
      "text": "扣除执行者等同 Might 的 HP，可导致死亡；Core Efficiency 增加 Might × 5。",
      "image": "icon_power_overdrive2.png",
      "location": "Production Core",
      "statLine": "Complexity: 30 / Profile: 0 / Menace: 2 / XP: 49",
      "limit": "玩家可控 Agent，Might 至少 1，Core Efficiency 低于当前上限。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-boostproductivity"
    },
    {
      "name": "Boost Eldritch Smog",
      "text": "扣除执行者等同 Lore 的 HP，可导致死亡；Eldritch Smog 增加 Lore × 10。",
      "image": "icon_power_smog.png",
      "location": "Production Core",
      "statLine": "Complexity: 30 / Profile: 4 / Menace: 4 / XP: 49",
      "limit": "玩家可控 Agent，Lore 至少 1；已有 Eldritch Smog 且强度低于 300。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-boostsmog"
    },
    {
      "name": "Blood for Units",
      "text": "牺牲执行者，将当前 HP × 20 加入即时封印进度。这项数值未写入阶段累计量，会被同回合后续的神祇结算覆盖；死亡仍会发生。",
      "image": "icon_power_blood2.png",
      "location": "Production Core",
      "statLine": "Complexity: 5 / Profile: 0 / Menace: 2 / XP: 12",
      "limit": "玩家可控 Agent，神祇尚未苏醒。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-createunits"
    },
    {
      "name": "Contaminate Waters",
      "text": "扣除执行者等同 Lore 的 HP，可导致死亡；Contaminated Waters 增加 Lore × 10，没有时创建。",
      "image": "icon_contaminatedwater.png",
      "location": "沿海或海域的 Production Core",
      "statLine": "Complexity: 30 / Profile: 4 / Menace: 6 / XP: 49",
      "limit": "玩家可控 Agent；Contaminated Waters 不存在或低于 300。",
      "id": "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-contaminate"
    },
    {
      "name": "Ruined Core",
      "image": "icon_power_subsettlement1.png",
      "text": "Banish Production Core 留下的核心废墟，阻止 Begin Production 再次建立核心。提供 Clear Ruined Core 与 Reestablish Core。\n废墟消退进度从 0 开始，每回合 +2−Shadow；达到 100 后还原原兴趣点，无原兴趣点则移除。期间每回合使 Eldritch Smog 减少 max(10,100−消退进度 × 0.1)。\n\n出现方式\n<CrossReference name=\"Banish Production Core\" href=\"#entry-banish-production-core\" /> 替换原 <CrossReference name=\"Production Core\" href=\"#entry-production-core\" /> 后留下。\n\n可出现地点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />、<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />、<CrossReference name=\"Abyssal City\" href=\"?page=locations#entry-location-set-deeponeabyssalcity\" meta=\"地点\" text=\"地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。\n\n出现方式\nDeep One Sanctum 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。\n\n可能配置的兴趣点\nAbyssal Armory、Abyssal Cathedral、Abyssal City。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_evil_deepOneCity.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "id": "ruined-core"
    },
    {
      "name": "Banish Production Core",
      "meta": "Lore",
      "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
      "image": "reforgeTheSeal.png",
      "location": "Production Core",
      "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
      "positiveTags": "Cooperation",
      "negativeTags": "邪恶势力、Shadow、Danger",
      "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。",
      "id": "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-reforgeseals"
    },
    {
      "name": "Clear Ruined Core",
      "meta": "Lore",
      "text": "英雄与玩家 Agent 均可执行。废墟消退进度增加 Lore × 10；达到 100 后立即清除废墟并恢复原兴趣点。\n经验在完成后按变化后的 Complexity 计算，为 ⌊(6 × Complexity)^0.75⌋。",
      "image": "icon_power_subsettlement1.png",
      "location": "Ruined Core",
      "statLine": "Complexity: max(50,100−消退进度) / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: ⌊(6 × 完成后 Complexity)^0.75⌋",
      "positiveTags": "Danger",
      "negativeTags": "无",
      "id": "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-clearruins"
    },
    {
      "name": "Reestablish Core",
      "text": "用新的 Production Core 替换废墟，Core Efficiency 为 1。",
      "image": "icon_power_coreb.png",
      "location": "Ruined Core",
      "statLine": "Complexity: 75 / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: 97",
      "limit": "玩家可控 Agent；废墟消退进度低于 50。",
      "id": "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-reestablishcore"
    },
    {
      "name": "Biometallic Mass",
      "image": "icon_power_subsettlement2b.png",
      "text": "Prosperity −0.2，Banish Production Core 的 Danger +4。每回合使 Eldritch Smog 增加 Core Efficiency × 0.02。\n没有存活的配属 Aberrant Recycler 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Recycler 并清零。每座设施各维护一个。\n食物乘数为 max(1,0.05 × 记录的 Core Efficiency)。记录值在 Aberrant Recycler 缺失或死亡时更新，其存活期间保留最近一次数值。\n\n出现方式\n<CrossReference name=\"Resource Allocation\" href=\"#entry-resource-allocation\" meta=\"神力\" text=\"选择兴趣点，替换为 Biometallic Mass。\" image=\"./aberrant-metal/icon_power_subsettlement2b.png\" /> 替换目标兴趣点，保留被替换设施的记录。\n\n可出现地点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />、<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "id": "biometallic-mass"
    },
    {
      "name": "Banish Production Core",
      "meta": "Lore",
      "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
      "image": "reforgeTheSeal.png",
      "location": "Production Core",
      "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
      "positiveTags": "Cooperation",
      "negativeTags": "邪恶势力、Shadow、Danger",
      "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。",
      "id": "god-place-location-sub-factory-recycler--place-task-3320562229-ch-factorygod-reforgeseals"
    },
    {
      "name": "Churning Machinery",
      "image": "icon_power_subsettlement3.png",
      "text": "Prosperity −0.2，Banish Production Core 的 Danger +10。每回合使 Eldritch Smog 增加 Core Efficiency × 0.01。\n没有存活的配属 Aberrant Repomen 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Repomen 并清零。每座设施各维护一个。\n\n出现方式\n<CrossReference name=\"Eldritch Promotion\" href=\"#entry-eldritch-promotion\" meta=\"神力\" text=\"选择兴趣点，替换为 Churning Machinery。\" image=\"./aberrant-metal/icon_power_subsettlement3.png\" /> 替换目标兴趣点，保留被替换设施的记录。\n\n可出现地点\n<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />、<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "id": "churning-machinery"
    },
    {
      "name": "Banish Production Core",
      "meta": "Lore",
      "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
      "image": "reforgeTheSeal.png",
      "location": "Production Core",
      "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
      "positiveTags": "Cooperation",
      "negativeTags": "邪恶势力、Shadow、Danger",
      "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。",
      "id": "god-place-location-sub-factory-repo--place-task-3320562229-ch-factorygod-reforgeseals"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-sub-factory-festeringmetal",
      "name": "Repurposed Structures",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "repurposed-structures"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-factory-festeringmetal--place-task-3320562229-ch-factorygod-reforgeseals"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-factory-productioncore",
      "name": "Production Core",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "production-core"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-reforgeseals"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-reestablishcore",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-recruitlaborer",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-recruitorc",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-boostproductivity",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-boostsmog",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-createunits",
            "god-place-location-sub-factory-productioncore--place-task-3320562229-ch-factorygod-contaminate"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-factory-productioncoredestroyed",
      "name": "Ruined Core",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "ruined-core"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-reforgeseals",
            "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-clearruins"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-factory-productioncoredestroyed--place-task-3320562229-ch-factorygod-reestablishcore"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-factory-recycler",
      "name": "Biometallic Mass",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "biometallic-mass"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-factory-recycler--place-task-3320562229-ch-factorygod-reforgeseals"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-factory-repo",
      "name": "Churning Machinery",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "churning-machinery"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-factory-repo--place-task-3320562229-ch-factorygod-reforgeseals"
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
          "name": "Aberrant Laborer",
          "image": "icon_labor1.png",
          "stats": "HP: 2 / Attack: 1 / Defence: 1 / Command: 1",
          "text": "Recruit Laborer 免费招募。",
          "abilities": [
            {
              "name": "Aberrant Labor",
              "text": "当地 Eldritch Smog 至少 50 时，每个劳工使主人正在进行的非 OTHER 类型挑战每回合额外推进 1。"
            }
          ]
        },
        {
          "name": "Smog-Born Orc",
          "image": "icon_labor_orc.png",
          "stats": "HP: 5 / Attack: 3 / Defence: 5 / Command: 2",
          "text": "Recruit Smog-Born 免费招募。"
        }
      ]
    },
{
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Aberrant Miner",
          "image": "icon_labor1a.png",
          "stats": "Might: 随机 1–3 / Lore: 随机 1–3 / Intrigue: 随机 1–3 / Command: 随机 1–3 / HP: max(1,⌊出生地 Core Efficiency/10⌋)",
          "text": "由 Repurposed Structures 组装的自主单位。具有 Aberrant Construct 与 Mining Unit；所属核心消失时死亡。HP 上限每回合随出生地 Core Efficiency 更新，上限提高不自动恢复 HP。\n倾向到有 Eldritch Smog 的地点执行 Mining Protocol；也能休息恢复。",
          "abilities": [
            {
              "name": "Mining Protocol",
              "image": "icon_aberrantmine.png",
              "location": "带 Eldritch Smog 的非海域地点，不能是 City",
              "statLine": "Complexity: Shadow≤0 时 25，否则 min(25,⌊5/Shadow⌋) / Profile: Shadow≥50% 时 0，否则 3 / Menace: Shadow≥50% 时 2，否则 6 / XP: ⌊(6 × Complexity)^0.75⌋",
              "text": "仅此单位执行。完成时使出生地 Core Efficiency 增加 ⌊当前地点 Shadow × 10⌋。\n创建强度 15 的 Aberrant Mining；已有时增加 10，最高 100。当地是普通人类类聚居地时 Devastation +10。"
            }
          ]
        },
        {
          "name": "Aberrant Recycler",
          "image": "icon_labor2.png",
          "stats": "Might: 随机 1–3 / Lore: 随机 1–3 / Intrigue: 随机 1–3 / Command: 随机 1–3 / HP: 初始 10；随后上限 max(1,⌊出生地 Core Efficiency/10⌋)",
          "text": "由 Biometallic Mass 组装的自主单位。具有 Aberrant Construct 与 Recycling Unit；所属核心消失时死亡。HP 上限每回合更新，上限提高不自动恢复 HP。\n执行 Recycling Protocol 建立或维护污染回收场；当地 Death 越高，执行倾向越高。",
          "abilities": [
            {
              "name": "Recycling Protocol",
              "image": "icon_aberrantrecycle.png",
              "location": "由 Aberrant Mining 或 Smog-born 提供；不能是海域或 City",
              "statLine": "Complexity: Shadow≤0 时 25，否则 min(25,⌊5/Shadow⌋) / Profile: Shadow≥50% 时 0，否则 3 / Menace: Shadow≥50% 时 2，否则 6 / XP: ⌊(6 × Complexity)^0.75⌋",
              "text": "仅此单位执行。完成时 Devastation +10；创建强度 15 的 Aberrant Recycling，已有时增加 5，最高 100。"
            }
          ]
        },
        {
          "name": "Aberrant Repomen",
          "image": "icon_labor3.png",
          "stats": "Might: 随机 1–3 / Lore: 随机 1–3 / Intrigue: 随机 1–3 / Command: 随机 1–3 / HP: max(1,⌊出生地 Core Efficiency/10⌋)",
          "text": "由 Churning Machinery 组装的自主单位。具有 Aberrant Construct 与 Reposession Unit；所属核心消失时死亡。HP 上限每回合更新，上限提高不自动恢复 HP。\n到有 Shadow 且没有 Core Efficiency 的人类类聚居地搬运人口。",
          "abilities": [
            {
              "name": "Reposession Protocol",
              "image": "unit_luredCrowd.png",
              "location": "Shadow 大于 0、没有 Core Efficiency 的人类类聚居地",
              "statLine": "Complexity: Shadow≤0 时 25，否则 min(25,⌊5/Shadow⌋) / Profile: Shadow≥50% 时 0，否则 3 / Menace: Shadow≥50% 时 2，否则 6 / XP: ⌊(6 × Complexity)^0.75⌋",
              "text": "仅此单位执行。把 min(当前 HP,目标人口) 人转移到出生地的人类类聚居地。目标人口清空时毁灭当地；目标 Shadow 低于 50% 时，世界恐慌临时增加 当前 HP × 0.01。"
            }
          ]
        }
      ]
    },
{
  "id": "challenges",
  "title": "挑战",
  "items": [
    {
      "name": "Boost Productivity",
      "text": "扣除执行者等同 Might 的 HP，可导致死亡；Core Efficiency 增加 Might × 5。",
      "image": "icon_power_overdrive2.png",
      "location": "Production Core",
      "statLine": "Complexity: 30 / Profile: 0 / Menace: 2 / XP: 49",
      "limit": "玩家可控 Agent，Might 至少 1，Core Efficiency 低于当前上限。"
    },
    {
      "name": "Blood for Units",
      "text": "牺牲执行者，将当前 HP × 20 加入即时封印进度。这项数值未写入阶段累计量，会被同回合后续的神祇结算覆盖；死亡仍会发生。",
      "image": "icon_power_blood2.png",
      "location": "Production Core",
      "statLine": "Complexity: 5 / Profile: 0 / Menace: 2 / XP: 12",
      "limit": "玩家可控 Agent，神祇尚未苏醒。"
    },
    {
      "name": "Boost Eldritch Smog",
      "text": "扣除执行者等同 Lore 的 HP，可导致死亡；Eldritch Smog 增加 Lore × 10。",
      "image": "icon_power_smog.png",
      "location": "Production Core",
      "statLine": "Complexity: 30 / Profile: 4 / Menace: 4 / XP: 49",
      "limit": "玩家可控 Agent，Lore 至少 1；已有 Eldritch Smog 且强度低于 300。"
    },
    {
      "name": "Contaminate Waters",
      "text": "扣除执行者等同 Lore 的 HP，可导致死亡；Contaminated Waters 增加 Lore × 10，没有时创建。",
      "image": "icon_contaminatedwater.png",
      "location": "沿海或海域的 Production Core",
      "statLine": "Complexity: 30 / Profile: 4 / Menace: 6 / XP: 49",
      "limit": "玩家可控 Agent；Contaminated Waters 不存在或低于 300。"
    },
    {
      "name": "Integrate into Dark Empire",
      "text": "把工厂及其支持的军队划入现存 Dark Empire。",
      "image": "darkCrown.png",
      "location": "Aberrant Factory",
      "statLine": "Complexity: 25 / Profile: 0 / Menace: 0 / XP: 42",
      "limit": "玩家可控 Agent；Dark Empire 已建立，目标尚未归属它。"
    },
    {
      "name": "Recruit Laborer",
      "text": "免费招募一个 Aberrant Laborer；可由多人同时执行。",
      "image": "icon_labor1.png",
      "location": "人类类聚居地的 Production Core",
      "statLine": "Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6",
      "limit": "玩家可控 Agent；完成时按 Command 容量处理随从。"
    },
    {
      "name": "Recruit Smog-Born",
      "text": "免费招募一个 Smog-Born Orc；不消耗 Smog-born。可由多人同时执行。",
      "image": "icon_labor_orc.png",
      "location": "Orc Camp 的 Production Core",
      "statLine": "Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6",
      "limit": "玩家可控 Agent；当地 Smog-born 达到 100。"
    },
    {
      "name": "Reestablish Core",
      "text": "用新的 Production Core 替换废墟，Core Efficiency 为 1。",
      "image": "icon_power_coreb.png",
      "location": "Ruined Core",
      "statLine": "Complexity: 75 / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: 97",
      "limit": "玩家可控 Agent；废墟消退进度低于 50。"
    },
    {
      "name": "Corrupt Ritual",
      "text": "将 Nature Ritual 变为 Corrupted Nature Ritual，保留强度并停止净化。",
      "image": "icon_elvencleansecorrupt.png",
      "location": "Nature Ritual",
      "statLine": "Complexity: 50 / Profile: 4 / Menace: 4 / XP: 72",
      "limit": "仪式未腐化，聚居地 Infiltration 达到 100%。"
    },
    {
      "id": "place-task-3320562229-mg-factory-smogcold",
      "name": "Ash Fall",
      "text": "引导期间，每回合使全部地表格子的临时温度偏移减少 0.18 × min(1,S) × S，世界恐慌临时增量增加 max(0.01,0.005 × S)。引导达到 150 进度后结束，完成时没有额外效果。\nS 为缓存的烟雾覆盖值：各烟雾地点所属地块按 min(1,烟雾强度 × 0.05) 加总，再除以地图平面地块总数。引导开始时产生 Profile 与 Menace，另有 160 点 Channelling Danger。",
      "image": "/locations/mod/Factory_God.icon_power_ashfall.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Aberrant Factory\" href=\"#entry-aberrant-factory\" />、<CrossReference name=\"Mobile Factory（驻地）\" href=\"#entry-mobile-factory-settlement\" />",
      "limit": "Geomancy 至少 2，S 大于 0。",
      "statLine": "Complexity: 150\nProfile: 50\nMenace: 0\nXP: 164"
    }
  ]
},
{
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Banish Production Core",
          "meta": "Lore",
          "text": "移除 Production Core 与 Core Efficiency。普通地点留下 Ruined Core；已经成为 Aberrant Factory 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。\n即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。\nDanger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，Orc Camp 额外加入本地与相邻 Orc Camp 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。",
          "image": "reforgeTheSeal.png",
          "location": "Production Core",
          "statLine": "Complexity: 85 / Profile: 0 / Menace: 0 / Danger: 10 + 设施、军队及地点加成 / XP: 107",
          "positiveTags": "Cooperation",
          "negativeTags": "邪恶势力、Shadow、Danger",
          "limit": "执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。"
        },
        {
          "name": "Clear Ruined Core",
          "meta": "Lore",
          "text": "英雄与玩家 Agent 均可执行。废墟消退进度增加 Lore × 10；达到 100 后立即清除废墟并恢复原兴趣点。\n经验在完成后按变化后的 Complexity 计算，为 ⌊(6 × Complexity)^0.75⌋。",
          "image": "icon_power_subsettlement1.png",
          "location": "Ruined Core",
          "statLine": "Complexity: max(50,100−消退进度) / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: ⌊(6 × 完成后 Complexity)^0.75⌋",
          "positiveTags": "Danger",
          "negativeTags": "无"
        }
      ]
    },
{
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "Clear Eldritch Contamination",
          "image": "icon_elvencleanse.png",
          "location": "Elven City",
          "time": "7 回合",
          "positiveTags": "无",
          "negativeTags": "Gold、Shadow",
          "text": "统治者消耗 20 Gold，使 Nature Ritual 增加 200，最高 200；没有时创建强度 200 的仪式。",
          "limit": "Elven Nature Rituals 配置开启；统治者 Shadow 低于 100%，不属于 Dark Empire；本地或邻地有 Eldritch Smog 或 Contaminated Waters；当地没有已腐化的仪式；Gold 至少 20。"
        }
      ]
    },
{
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Aberrant Laborers",
          "image": "icon_labor1.png",
          "stats": "HP: 初始 5；上限 ⌊人口 + Core Efficiency × 0.5⌋，再乘 Military Fervour 倍率并向下取整。",
          "text": "游戏显示为“出生地简称 Laborers”。由 Aberrant Factory 生成，Dark Empire 的 Production Core 也会替换当地原驻防军。由 AI 控制，防御出生地，并把正在执行 Banish Production Core 的英雄视为敌人。\n所在地有 Eldritch Smog 时赋予己方 Under Smog。出生地核心消失时解散。"
        },
        {
          "name": "Smog-Born",
          "id": "smog-born-army",
          "image": "icon_labor_orc.png",
          "stats": "HP: 转化时继承原军队；新建时 5。上限 max(10,⌊故乡工业 × k⌋ + 各相邻地点的⌊工业 × k⌋之和)，k = 0.35 × 难度倍率 × Orc 强度设置。",
          "text": "游戏显示为“Smog-Born of 阵营名称”。当地 Smog-born 达到 100 后转化或生成，继续由 Orc 军队 AI 控制。\n所在地有 Eldritch Smog 时赋予己方 Under Smog。摧毁人类类聚居地时令 N=⌊Prosperity × 人口 × 0.1⌋：已有烟雾增加 N；没有时先设为 N，再添加 N 的增长。"
        },
        {
          "name": "Mobile Factory",
          "image": "icon_power_walkingcity.png",
          "stats": "HP: 初始为工厂人口 × 2；当前 HP 下降时，驻地人口改为 ⌊HP/2⌋，上限随之更新为人口 × 2。",
          "text": "可直接控制的军队，名称附出生地简称及当前模式。每回合在当前位置产生 max(⌊HP/4⌋,5) Eldritch Smog；在烟雾中作战时赋予己方 Under Smog。\nMode: Integrate Workforce 与 Mode: Strip Mining 完成切换时立即执行一次模式动作，军队回合末再执行一次；此后每回合执行一次。",
          "abilities": [
            {
              "name": "Mode: Integrate Workforce",
              "image": "unit_luredCrowd.png",
              "location": "军队当前位置",
              "statLine": "Complexity: 1 / Profile: 0 / Menace: 0 / XP: 3",
              "text": "切换为吸收人口模式。每次动作从当地人类类聚居地扣除至多 10 人，人口清空则毁城；军队当前 HP 与上限固定各 +20，Menace +1，即使实际吸收人数少于 10。",
              "limit": "当前未处于该模式。"
            },
            {
              "name": "Mode: Strip Mining",
              "image": "icon_aberrantmine.png",
              "location": "军队当前位置",
              "statLine": "Complexity: 1 / Profile: 0 / Menace: 0 / XP: 3",
              "text": "切换为采矿模式。每次动作造成 100 点区域地形破坏，普通人类类聚居地 Devastation +50，军队 Menace +5。首次完成 10 次模式动作后恢复 1 Power，此后每 3 次恢复 1，最高到神力上限。",
              "limit": "当前未处于该模式。"
            },
            {
              "name": "Mode: None",
              "image": "icon_power_walkingcity.png",
              "location": "军队当前位置",
              "statLine": "Complexity: 1 / Profile: 0 / Menace: 0 / XP: 3",
              "text": "停止当前模式，仍照常产生烟雾。",
              "limit": "当前处于吸收人口或采矿模式。"
            }
          ]
        },
        {
          "name": "Lured Crowd",
          "image": "unit_luredCrowd.png",
          "baseGame": true,
          "stats": "HP: 等于本次召集人数。",
          "text": "Help Wanted 使用的本体运输型军队。自动前往目标核心所在地，将存活人数加入目标人口，随后消失。 到达时按人类类聚居地判断，不重新检查核心与人口容量；目标已经毁灭时，人群死亡。自身军队伤害倍率为 0.3。"
        }
      ]
    },
{
      "id": "spells",
      "title": "法术",
      "items": [
        {
          "name": "Ash Fall",
          "text": "引导期间，每回合使全部地表格子的临时温度偏移减少 0.18 × min(1,S) × S，世界恐慌临时增量增加 max(0.01,0.005 × S)。引导达到 150 进度后结束，完成时没有额外效果。\nS 为缓存的烟雾覆盖值：各烟雾地点所属地块按 min(1,烟雾强度 × 0.05) 加总，再除以地图平面地块总数。引导开始时产生 Profile 与 Menace，另有 160 点 Channelling Danger。",
          "image": "icon_power_ashfall.png",
          "location": "Aberrant Factory，包括 Mobile Factory 驻地",
          "statLine": "Complexity: 150 / Profile: 10 / Menace: 35 / XP: 164",
          "limit": "Geomancy 至少 2，S 大于 0。"
        }
      ]
    },
{
      "id": "religion",
      "title": "宗教与教义",
      "items": [
        {
          "name": "Holy Fumes",
          "text": "适用于非邪恶教团及 Witches。",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "每座 Temple 每回合产生 所属教团当前 Elder Influence 点数 × 0.1 的 Eldritch Smog，并增加该 Temple 的 Menace 0.1。"
            }
          ]
        }
      ]
    },
{
      "id": "events",
      "title": "事件",
      "items": [
        {
          "name": "Wandering Labor",
          "image": "image_factoryevent1.jpg",
          "text": "地点事件：使用此神，人类类聚居地的 Eldritch Smog 超过 20，或相邻地点烟雾总量超过 40；回合数为 12 的倍数。事件定义概率为 0.1。",
          "eventOptions": [
            {
              "name": "They look on, helpless.",
              "text": "无效果。"
            },
            {
              "name": "Their fists clench.",
              "text": "消耗 1 Power；Unrest +200。",
              "condition": "Power > 0。"
            },
            {
              "name": "Despair comes over them.",
              "text": "消耗 1 Power；Shadow +100 个百分点，最高 100%。",
              "condition": "Power > 0。"
            },
            {
              "name": "Your power grows.",
              "text": "Power +1。",
              "condition": "当地 Shadow 为 100%。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "name": "Aberrant Factory",
          "image": "image_factorysettlement.jpg",
          "text": "Production Core 完成人类类聚居地转化时强制触发，告知工厂已经形成。",
          "eventOptions": [
            {
              "name": "Another factory, another anchor in this world",
              "text": "无效果。"
            }
          ],
          "id": "aberrant-factory-event",
          "eventCategory": "other"
        },
        {
          "name": "An Extra Chimney",
          "image": "image_factoryevent5.jpg",
          "text": "任务进行中事件：当地为带 Production Core 的人类类聚居地，尚未成为 Aberrant Factory。",
          "eventOptions": [
            {
              "name": "Continue on.",
              "text": "无效果。"
            },
            {
              "name": "A reminder to %him.",
              "text": "三种结果各占 1/3：任务进度 +20、HP −3；进度 +15、HP −2；进度 +10、HP −1。"
            },
            {
              "name": "A new tool.",
              "text": "任务进度 −10；25% 概率无额外物品，25% 获得一件 Uncommon 物品，50% 获得一件 Common 物品。",
              "condition": "Command 至少 3。"
            },
            {
              "name": "A place to hide.",
              "text": "Profile −20，任务进度 −15。"
            }
          ],
          "eventCategory": "tasks"
        },
        {
          "name": "The Smokestack",
          "image": "image_factoryevent3.jpg",
          "text": "任务进行中事件：当地为带 Production Core 的人类类聚居地，尚未成为 Aberrant Factory。",
          "eventOptions": [
            {
              "name": "Say nothing.",
              "text": "无效果。"
            },
            {
              "name": "\"Investigate\" it.",
              "text": "任务进度 −10，Menace −15，Profile +5，Unrest −30。",
              "condition": "Intrigue 至少 3。"
            },
            {
              "name": "Lead a mob to it.",
              "text": "任务进度 −10，Menace +5，Profile +10，Unrest +40，Core Efficiency +20。",
              "condition": "Command 至少 3。"
            }
          ],
          "eventCategory": "tasks"
        },
        {
          "name": "Unnatural Clouds",
          "image": "image_factoryevent2.jpg",
          "text": "任务进行中事件：当地为尚未成为 Aberrant Factory 的人类类聚居地，Eldritch Smog 大于 10 且小于 200。",
          "eventOptions": [
            {
              "name": "Continue on.",
              "text": "无效果。"
            },
            {
              "name": "Spread rumors of black magic.",
              "text": "任务进度 −15，Menace +10，Unrest +30。"
            },
            {
              "name": "Ease their fears.",
              "text": "任务进度 −15；75% 概率 Menace −10，25% 无额外效果。"
            },
            {
              "name": "Swindle them.",
              "text": "任务进度 −15；50% 概率 Menace +10，50% 概率 Gold +15、Menace −10。"
            }
          ],
          "eventCategory": "tasks"
        },
        {
          "name": "Oasis of Blue",
          "image": "image_factoryevent4.jpg",
          "text": "任务进行中事件：当地 Eldritch Smog 小于 50，存在正值 Ward 或 Nature Ritual，且相邻地点烟雾总量超过 24。",
          "eventOptions": [
            {
              "name": "The skies remain untouched",
              "text": "无效果。"
            },
            {
              "name": "Seek the wards",
              "text": "任务进度 −20，Menace +10，Ward −50。",
              "condition": "Lore 至少 3，当地有正值 Ward。"
            },
            {
              "name": "Weaken the ritual",
              "text": "任务进度 −20，Menace +10；60% 概率 Nature Ritual −100，40% 无额外效果。",
              "condition": "Lore 至少 4，当地有正值 Nature Ritual。"
            },
            {
              "name": "Spread fear",
              "text": "任务进度 −10，Menace +10，Unrest +50。"
            }
          ],
          "eventCategory": "tasks"
        }
      ]
    },
{
      "id": "mechanisms",
      "title": "机制",
      "items": [
        {
          "name": "Under Smog",
          "image": "icon_power_smog.png",
          "text": "Aberrant Laborers、Smog-Born 与 Mobile Factory 在存在 Eldritch Smog 或 <CrossReference name=\"Acid Rain\" href=\"#entry-acid-rain-modifier\" /> 的地点进入军队战斗时，为所在一方设置此战斗效果。该方军队造成的伤害提高 20%；同侧多个来源不叠加，覆盖该侧原战斗效果。"
        }
      ]
    },
{
  "id": "autonomous-tasks",
  "title": "自主单位任务",
  "items": [
    {
      "id": "place-task-3320562229-ch-factory-stealpops",
      "name": "Reposession Protocol",
      "text": "把等同于当前 HP 的人口转移到 Aberrant Repoman 的故乡 <CrossReference name=\"Production Core\" href=\"#entry-production-core\" />；当地 Shadow 越高，完成越快。",
      "image": "/locations/game/unit_luredCrowd.png",
      "meta": "固定进度",
      "baseGame": false,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />",
      "limit": "仅 Aberrant Repoman；当地 Shadow >0%，没有 Core Efficiency。",
      "statLine": "Complexity: min(25, 向下取整(500 / 当地 Shadow))\nProfile: 50\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    }
  ]
}
],
  "relations": {
    "Begin Production": {
      "effects": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ]
    },
    "Production Core": {
      "sources": [
        {
          "name": "Begin Production",
          "href": "#entry-begin-production"
        },
        {
          "name": "Chief Engineer",
          "href": "#entry-chief-engineer"
        },
        {
          "name": "Reestablish Core",
          "href": "#entry-reestablish-core"
        },
        {
          "name": "Accursed Foreman",
          "href": "#entry-accursed-foreman"
        }
      ],
      "effects": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Contaminated Waters",
          "href": "#entry-contaminated-waters"
        },
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        },
        {
          "name": "Aberrant Laborers",
          "href": "#entry-aberrant-laborers"
        },
        {
          "name": "Ward",
          "href": "#entry-ward"
        },
        {
          "name": "Banish Production Core",
          "href": "#entry-banish-production-core"
        },
        {
          "name": "Boost Productivity",
          "href": "#entry-boost-productivity"
        },
        {
          "name": "Boost Eldritch Smog",
          "href": "#entry-boost-eldritch-smog"
        },
        {
          "name": "Blood for Units",
          "href": "#entry-blood-for-units"
        },
        {
          "name": "Contaminate Waters",
          "href": "#entry-contaminate-waters"
        },
        {
          "name": "Recruit Laborer",
          "href": "#entry-recruit-laborer"
        },
        {
          "name": "Recruit Smog-Born",
          "href": "#entry-recruit-smog-born"
        }
      ]
    },
    "Chief Engineer": {
      "effects": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ]
    },
    "Reestablish Core": {
      "effects": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "sources": [
        {
          "name": "Ruined Core",
          "href": "#entry-ruined-core"
        }
      ]
    },
    "Core Efficiency": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Overdrive",
          "href": "#entry-overdrive"
        },
        {
          "name": "Choking Hazard",
          "href": "#entry-choking-hazard"
        },
        {
          "name": "Boost Productivity",
          "href": "#entry-boost-productivity"
        },
        {
          "name": "Mining Protocol",
          "href": "#entry-mining-protocol"
        },
        {
          "name": "Banish Production Core",
          "href": "#entry-banish-production-core"
        },
        {
          "name": "The Smokestack",
          "href": "#entry-the-smokestack"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ],
      "effects": [
        {
          "name": "Smog-born",
          "href": "#entry-smog-born"
        },
        {
          "name": "Orcish Industry",
          "href": "#entry-orcish-industry"
        },
        {
          "name": "Aberrant Miner",
          "href": "#entry-aberrant-miner"
        },
        {
          "name": "Aberrant Recycler",
          "href": "#entry-aberrant-recycler"
        },
        {
          "name": "Aberrant Repomen",
          "href": "#entry-aberrant-repomen"
        },
        {
          "name": "Aberrant Laborers",
          "href": "#entry-aberrant-laborers"
        }
      ]
    },
    "Eldritch Smog": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Choking Hazard",
          "href": "#entry-choking-hazard"
        },
        {
          "name": "Repurposed Structures",
          "href": "#entry-repurposed-structures"
        },
        {
          "name": "Biometallic Mass",
          "href": "#entry-biometallic-mass"
        },
        {
          "name": "Churning Machinery",
          "href": "#entry-churning-machinery"
        },
        {
          "name": "Boost Eldritch Smog",
          "href": "#entry-boost-eldritch-smog"
        },
        {
          "name": "Polluting Presence",
          "href": "#entry-polluting-presence"
        },
        {
          "name": "Contaminated Waters",
          "href": "#entry-contaminated-waters"
        },
        {
          "name": "Aberrant Recycling",
          "href": "#entry-aberrant-recycling-modifier"
        },
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        },
        {
          "name": "Ruined Core",
          "href": "#entry-ruined-core"
        },
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        },
        {
          "name": "Mobile Factory",
          "href": "#entry-mobile-factory"
        },
        {
          "name": "Smog-Born",
          "href": "#entry-smog-born-army"
        },
        {
          "name": "Holy Fumes",
          "href": "#entry-holy-fumes"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Mining Protocol",
          "href": "#entry-mining-protocol"
        },
        {
          "name": "Under Smog",
          "href": "#entry-under-smog"
        }
      ]
    },
    "Contaminated Waters": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Contaminate Waters",
          "href": "#entry-contaminate-waters"
        },
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ]
    },
    "Aberrant Factory": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Laborers",
          "href": "#entry-aberrant-laborers"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        },
        {
          "name": "Hunger / Famine",
          "href": "#entry-hunger-famine"
        },
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        },
        {
          "name": "Ash Fall",
          "href": "#entry-ash-fall"
        },
        {
          "name": "Integrate into Dark Empire",
          "href": "#entry-integrate-into-dark-empire"
        },
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory-event"
        }
      ]
    },
    "Aberrant Laborers": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ],
      "effects": [
        {
          "name": "Under Smog",
          "href": "#entry-under-smog"
        }
      ]
    },
    "Ward": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Oasis of Blue",
          "href": "#entry-oasis-of-blue"
        }
      ]
    },
    "Banish Production Core": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Ruined Core",
          "href": "#entry-ruined-core"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "Boost Productivity": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ]
    },
    "Boost Eldritch Smog": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Blood for Units": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ]
    },
    "Contaminate Waters": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Contaminated Waters",
          "href": "#entry-contaminated-waters"
        }
      ]
    },
    "Recruit Laborer": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Laborer",
          "href": "#entry-aberrant-laborer"
        }
      ]
    },
    "Recruit Smog-Born": {
      "sources": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        },
        {
          "name": "Smog-born",
          "href": "#entry-smog-born"
        }
      ],
      "effects": [
        {
          "name": "Smog-Born Orc",
          "href": "#entry-smog-born-orc"
        }
      ]
    },
    "Accursed Foreman": {
      "effects": [
        {
          "name": "Production Core",
          "href": "#entry-production-core"
        }
      ]
    },
    "Overdrive": {
      "effects": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ]
    },
    "Shrouded Eyes": {
      "effects": [
        {
          "name": "Shrouded Eyes",
          "href": "#entry-shrouded-eyes-modifier"
        }
      ]
    },
    "shrouded-eyes-modifier": {
      "sources": [
        {
          "name": "Shrouded Eyes",
          "href": "#entry-shrouded-eyes"
        }
      ]
    },
    "Blood is Fuel": {
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Death",
          "href": "#entry-death"
        }
      ]
    },
    "Shadow": {
      "sources": [
        {
          "name": "Blood is Fuel",
          "href": "#entry-blood-is-fuel"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain-modifier"
        },
        {
          "name": "Banish Production Core",
          "href": "#entry-banish-production-core"
        },
        {
          "name": "Wandering Labor",
          "href": "#entry-wandering-labor"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ],
      "effects": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ]
    },
    "Death": {
      "sources": [
        {
          "name": "Blood is Fuel",
          "href": "#entry-blood-is-fuel"
        },
        {
          "name": "Hunger / Famine",
          "href": "#entry-hunger-famine"
        }
      ]
    },
    "Help Wanted": {
      "effects": [
        {
          "name": "Lured Crowd",
          "href": "#entry-lured-crowd"
        }
      ]
    },
    "Lured Crowd": {
      "sources": [
        {
          "name": "Help Wanted",
          "href": "#entry-help-wanted"
        }
      ]
    },
    "Choking Hazard": {
      "effects": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Hostile Takeover": {
      "effects": [
        {
          "name": "Repurposed Structures",
          "href": "#entry-repurposed-structures"
        }
      ]
    },
    "Repurposed Structures": {
      "sources": [
        {
          "name": "Hostile Takeover",
          "href": "#entry-hostile-takeover"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Miner",
          "href": "#entry-aberrant-miner"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Resource Allocation": {
      "effects": [
        {
          "name": "Biometallic Mass",
          "href": "#entry-biometallic-mass"
        }
      ]
    },
    "Biometallic Mass": {
      "sources": [
        {
          "name": "Resource Allocation",
          "href": "#entry-resource-allocation"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Recycler",
          "href": "#entry-aberrant-recycler"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Eldritch Promotion": {
      "effects": [
        {
          "name": "Churning Machinery",
          "href": "#entry-churning-machinery"
        }
      ]
    },
    "Churning Machinery": {
      "sources": [
        {
          "name": "Eldritch Promotion",
          "href": "#entry-eldritch-promotion"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Repomen",
          "href": "#entry-aberrant-repomen"
        },
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Aberrant Miner": {
      "sources": [
        {
          "name": "Repurposed Structures",
          "href": "#entry-repurposed-structures"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Construct",
          "href": "#entry-aberrant-construct"
        },
        {
          "name": "Mining Unit",
          "href": "#entry-mining-unit"
        }
      ]
    },
    "Aberrant Recycler": {
      "sources": [
        {
          "name": "Biometallic Mass",
          "href": "#entry-biometallic-mass"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Construct",
          "href": "#entry-aberrant-construct"
        },
        {
          "name": "Recycling Unit",
          "href": "#entry-recycling-unit"
        }
      ]
    },
    "Aberrant Repomen": {
      "sources": [
        {
          "name": "Churning Machinery",
          "href": "#entry-churning-machinery"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Construct",
          "href": "#entry-aberrant-construct"
        },
        {
          "name": "Reposession Unit",
          "href": "#entry-reposession-unit"
        }
      ]
    },
    "Smog-Bound": {
      "effects": [
        {
          "name": "Smog-Bound (Start)",
          "href": "#entry-smog-bound-start"
        },
        {
          "name": "Smog-Bound (End)",
          "href": "#entry-smog-bound-end"
        }
      ]
    },
    "Smog-Bound (Start)": {
      "sources": [
        {
          "name": "Smog-Bound",
          "href": "#entry-smog-bound"
        }
      ]
    },
    "Smog-Bound (End)": {
      "sources": [
        {
          "name": "Smog-Bound",
          "href": "#entry-smog-bound"
        }
      ]
    },
    "Acid Rain": {
      "effects": [
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain-modifier"
        }
      ]
    },
    "acid-rain-modifier": {
      "sources": [
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain"
        },
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        },
        {
          "name": "Under Smog",
          "href": "#entry-under-smog"
        }
      ]
    },
    "Mobile Factories": {
      "effects": [
        {
          "name": "Mobile Factory",
          "href": "#entry-mobile-factory"
        },
        {
          "name": "Mobile Factory（驻地）",
          "href": "#entry-mobile-factory-settlement"
        }
      ]
    },
    "Mobile Factory": {
      "sources": [
        {
          "name": "Mobile Factories",
          "href": "#entry-mobile-factories"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Under Smog",
          "href": "#entry-under-smog"
        }
      ]
    },
    "mobile-factory-settlement": {
      "sources": [
        {
          "name": "Mobile Factories",
          "href": "#entry-mobile-factories"
        }
      ]
    },
    "Polluting Presence": {
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Smog-born": {
      "sources": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ],
      "effects": [
        {
          "name": "Smog-Born",
          "href": "#entry-smog-born-army"
        },
        {
          "name": "Recruit Smog-Born",
          "href": "#entry-recruit-smog-born"
        },
        {
          "name": "Recycling Protocol",
          "href": "#entry-recycling-protocol"
        }
      ]
    },
    "Orcish Industry": {
      "sources": [
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ]
    },
    "Mining Protocol": {
      "sources": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ],
      "effects": [
        {
          "name": "Aberrant Mining",
          "href": "#entry-aberrant-mining-modifier"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Under Smog": {
      "sources": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain-modifier"
        },
        {
          "name": "Mobile Factory",
          "href": "#entry-mobile-factory"
        },
        {
          "name": "Smog-Born",
          "href": "#entry-smog-born-army"
        },
        {
          "name": "Aberrant Laborers",
          "href": "#entry-aberrant-laborers"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain-modifier"
        },
        {
          "name": "Mining Protocol",
          "href": "#entry-mining-protocol"
        },
        {
          "name": "Recycling Protocol",
          "href": "#entry-recycling-protocol"
        },
        {
          "name": "Aberrant Mining",
          "href": "#entry-aberrant-mining-modifier"
        },
        {
          "name": "Aberrant Recycling",
          "href": "#entry-aberrant-recycling-modifier"
        },
        {
          "name": "Mode: Strip Mining",
          "href": "#entry-mode-strip-mining"
        }
      ]
    },
    "Deep One Cult": {
      "sources": [
        {
          "name": "Contaminated Waters",
          "href": "#entry-contaminated-waters"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "aberrant-mining-modifier": {
      "sources": [
        {
          "name": "Mining Protocol",
          "href": "#entry-mining-protocol"
        }
      ],
      "effects": [
        {
          "name": "Recycling Protocol",
          "href": "#entry-recycling-protocol"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Recycling Protocol": {
      "effects": [
        {
          "name": "Aberrant Recycling",
          "href": "#entry-aberrant-recycling-modifier"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ],
      "sources": [
        {
          "name": "Aberrant Mining",
          "href": "#entry-aberrant-mining-modifier"
        },
        {
          "name": "Smog-born",
          "href": "#entry-smog-born"
        }
      ]
    },
    "aberrant-recycling-modifier": {
      "sources": [
        {
          "name": "Recycling Protocol",
          "href": "#entry-recycling-protocol"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "smog-born-army": {
      "sources": [
        {
          "name": "Smog-born",
          "href": "#entry-smog-born"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Under Smog",
          "href": "#entry-under-smog"
        }
      ]
    },
    "Clear Eldritch Contamination": {
      "effects": [
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        }
      ]
    },
    "nature-ritual-modifier": {
      "sources": [
        {
          "name": "Clear Eldritch Contamination",
          "href": "#entry-clear-eldritch-contamination"
        },
        {
          "name": "Oasis of Blue",
          "href": "#entry-oasis-of-blue"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Acid Rain",
          "href": "#entry-acid-rain-modifier"
        },
        {
          "name": "Contaminated Waters",
          "href": "#entry-contaminated-waters"
        },
        {
          "name": "Corrupt Ritual",
          "href": "#entry-corrupt-ritual"
        }
      ]
    },
    "Corrupt Ritual": {
      "sources": [
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        }
      ],
      "effects": [
        {
          "name": "Corrupted Nature Ritual",
          "href": "#entry-corrupted-nature-ritual"
        }
      ]
    },
    "Corrupted Nature Ritual": {
      "sources": [
        {
          "name": "Corrupt Ritual",
          "href": "#entry-corrupt-ritual"
        },
        {
          "name": "Oasis of Blue",
          "href": "#entry-oasis-of-blue"
        }
      ]
    },
    "Ruined Core": {
      "sources": [
        {
          "name": "Banish Production Core",
          "href": "#entry-banish-production-core"
        }
      ],
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        },
        {
          "name": "Clear Ruined Core",
          "href": "#entry-clear-ruined-core"
        },
        {
          "name": "Reestablish Core",
          "href": "#entry-reestablish-core"
        }
      ]
    },
    "Clear Ruined Core": {
      "sources": [
        {
          "name": "Ruined Core",
          "href": "#entry-ruined-core"
        }
      ]
    },
    "Unrest": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        },
        {
          "name": "Wandering Labor",
          "href": "#entry-wandering-labor"
        },
        {
          "name": "The Smokestack",
          "href": "#entry-the-smokestack"
        },
        {
          "name": "Unnatural Clouds",
          "href": "#entry-unnatural-clouds"
        },
        {
          "name": "Oasis of Blue",
          "href": "#entry-oasis-of-blue"
        },
        {
          "name": "Hunger / Famine",
          "href": "#entry-hunger-famine"
        }
      ]
    },
    "hunger-famine": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        }
      ],
      "effects": [
        {
          "name": "Death",
          "href": "#entry-death"
        },
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "Political Agitation": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        }
      ]
    },
    "Ash Fall": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        }
      ]
    },
    "Integrate into Dark Empire": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        }
      ]
    },
    "Aberrant Laborer": {
      "sources": [
        {
          "name": "Recruit Laborer",
          "href": "#entry-recruit-laborer"
        }
      ]
    },
    "Smog-Born Orc": {
      "sources": [
        {
          "name": "Recruit Smog-Born",
          "href": "#entry-recruit-smog-born"
        }
      ]
    },
    "Mode: Strip Mining": {
      "effects": [
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Holy Fumes": {
      "effects": [
        {
          "name": "Eldritch Smog",
          "href": "#entry-eldritch-smog"
        }
      ]
    },
    "Wandering Labor": {
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "The Smokestack": {
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        },
        {
          "name": "Core Efficiency",
          "href": "#entry-core-efficiency"
        }
      ]
    },
    "Unnatural Clouds": {
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "Oasis of Blue": {
      "effects": [
        {
          "name": "Ward",
          "href": "#entry-ward"
        },
        {
          "name": "Nature Ritual",
          "href": "#entry-nature-ritual-modifier"
        },
        {
          "name": "Corrupted Nature Ritual",
          "href": "#entry-corrupted-nature-ritual"
        },
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "aberrant-factory-event": {
      "sources": [
        {
          "name": "Aberrant Factory",
          "href": "#entry-aberrant-factory"
        }
      ]
    },
    "Aberrant Construct": {
      "sources": [
        {
          "name": "Aberrant Miner",
          "href": "#entry-aberrant-miner"
        },
        {
          "name": "Aberrant Recycler",
          "href": "#entry-aberrant-recycler"
        },
        {
          "name": "Aberrant Repomen",
          "href": "#entry-aberrant-repomen"
        }
      ]
    },
    "Mining Unit": {
      "sources": [
        {
          "name": "Aberrant Miner",
          "href": "#entry-aberrant-miner"
        }
      ]
    },
    "Recycling Unit": {
      "sources": [
        {
          "name": "Aberrant Recycler",
          "href": "#entry-aberrant-recycler"
        }
      ]
    },
    "Reposession Unit": {
      "sources": [
        {
          "name": "Aberrant Repomen",
          "href": "#entry-aberrant-repomen"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function AberrantMetalArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
