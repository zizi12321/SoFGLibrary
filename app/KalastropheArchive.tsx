"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "kalastrophe",
  "name": "Kalastrophe, the Shifting Calamity",
  "number": "16",
  "theme": "kalastrophe-theme",
  "assetDir": "kalastrophe",
  "background": "God_Select.png",
  "portrait": "God_Ingame.png",
  "flavour": "",
  "caption": "神力定制、英雄腐化与灾厄组合",
  "maxTurns": "500 回合",
  "awaken": "375 回合",
  "panic": "65%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限。",
  "core": [
    "开局通过 Supplicant 为 <CrossReference name=\"A Power to Hasten\" /> 选择一种属性，然后将 Might、Lore、Intrigue、Command 的总和分配至 11，最后从 <CrossReference name=\"Shared Fate\" />、<CrossReference name=\"Imitator\" />、<CrossReference name=\"Reflections of Divinity\" /> 中选择一项能力。",
    "封印 1 后，寻找正在进行专长相关行动的英雄，用 <CrossReference name=\"Dark Reflection\" /> 将其变为<CrossReference name=\"腐化英雄\" href=\"#entry-corrupted-hero\" />。保留招募点与 Agent 空位，并准备随现有 Agent 数量增加的施法费用。",
    "封印 2 用 <CrossReference name=\"A Power to Assist\" /> 读取人物专长；封印 4 用 <CrossReference name=\"A Power to Interfere\" /> 读取人物性格。根据地图上可用的目标选择具体神力，使用 <CrossReference name=\"Retrain\" /> 调整腐化英雄的属性。",
    "封印 3 起，<CrossReference name=\"A Power to Reveal\" /> 开始记录我方完成的相关挑战。围绕骚乱、政治、宗教、强盗或遗迹积累次数，分别解锁 <CrossReference name=\"Seethe\" />、<CrossReference name=\"Lost Faith\" />、<CrossReference name=\"Elder Traditions\" />、<CrossReference name=\"Bandit Raid\" /> 与 <CrossReference name=\"Sixth Sense\" />。",
    "封印 6 通过 <CrossReference name=\"A Power to Terrorize\" /> 选择终盘干预方向；需要调整组合时，用 <CrossReference name=\"Shifting Fate\" /> 重选封印 0、2、4、6 的可变神力。",
    "苏醒后，<CrossReference name=\"A Power to End\" /> 随最高胜利分数来源自动切换。可以强化 <CrossReference name=\"Shadow\" />、<CrossReference name=\"Madness\" />、Dark Empire 军队、人口毁灭或 <CrossReference name=\"Deep One Cult\" /> 路线。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "常规 Agent 招募名单在开局和每回合开始时清空。Reflections of Divinity 的候选池取决于本局加载的神祇；其具体两项结果随机决定。",
    "playStyle": "先围绕地图上的英雄和危机构建神力组合，再用腐化英雄执行针对性的行动。可选分支多，但每组同时保留一种；中途重选和行动解锁让同一局能够调整发展方向。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 1,
      "reward": [
        "A Power to Hasten"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [
        "Dark Reflection"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 2,
      "reward": [
        "A Power to Assist"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 40,
      "agents": 3,
      "reward": [
        "A Power to Reveal"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 80,
      "agents": 3,
      "reward": [
        "A Power to Interfere",
        "Retrain"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 125,
      "agents": 3,
      "reward": [],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 175,
      "agents": 4,
      "reward": [
        "Shifting Fate",
        "A Power to Terrorize"
      ],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 225,
      "agents": 4,
      "reward": [],
      "powerRecovery": "8/0.28"
    },
    {
      "seal": 8,
      "progress": 300,
      "agents": 4,
      "reward": [],
      "powerRecovery": "9/0.315"
    },
    {
      "seal": 9,
      "progress": 375,
      "agents": 5,
      "reward": [
        "A Power to End",
        "苏醒"
      ],
      "powerRecovery": "10/0.35"
    }
  ],
  "powers": [
    {
      "name": "A Power to Hasten",
      "seal": 0,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "在 Supplicant 的开局选择中，将此神力定为四种属性加速神力之一。",
      "limit": "先完成 Supplicant 的属性方向选择。四个结果为 <CrossReference name=\"Ancient Power\" />、<CrossReference name=\"Ancient Knowledge\" />、<CrossReference name=\"Ancient Secrets\" />、<CrossReference name=\"Ancient Influence\" />。"
    },
    {
      "name": "Dark Reflection",
      "seal": 1,
      "cost": "当前 Agent 数量",
      "icon": "Power_1_Corrupt.png",
      "effect": "将英雄转为<CrossReference name=\"腐化英雄\" href=\"#entry-corrupted-hero\" />，个人 Shadow 设为 100%，中止当前行动，消耗 1 个招募点并占用 Agent 名额。Power 消耗等于施法前 Agent 名单中所有人物单位的数量，包含 Supplicant。",
      "limit": "目标为未受控的英雄，排除 Chosen One；须有空余 Agent 名额和至少 1 个招募点。英雄正在执行的任务正面或负面标签须匹配其任一专长，或其正在追击的人物目标的正面标签匹配该专长。"
    },
    {
      "name": "A Power to Assist",
      "seal": 2,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。",
      "limit": "任意持有专长特质的人物单位。支持 Disease、Discord、Undead、Shadow、Orc、Deep Ones、Human、Elf、Dwarf、Cthonian 十类。"
    },
    {
      "name": "A Power to Reveal",
      "seal": 3,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "被动开启五条行动计数，达标后额外解锁 <CrossReference name=\"Seethe\" />、<CrossReference name=\"Lost Faith\" />、<CrossReference name=\"Elder Traditions\" />、<CrossReference name=\"Bandit Raid\" />、<CrossReference name=\"Sixth Sense\" />。各条计数独立，详细要求见各神力。",
      "limit": "封印 3 起，仅统计由可控制人物完成的指定挑战；此前完成的行动不追溯计入。被动神力，无需施放。"
    },
    {
      "name": "A Power to Interfere",
      "seal": 4,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。",
      "limit": "目标为人物单位或地点中的统治者。Cruelty、Combat、Ambition、Cooperation、Danger、Gold、Madness、Religion 至少一项偏好不为中立，正面和负面偏好均可提供分支。"
    },
    {
      "name": "Retrain",
      "seal": 4,
      "cost": 2,
      "icon": "Power_4_Retrain.png",
      "effect": "当前挑战对应的基础属性 +1，并由玩家从另一项属性扣除 1。",
      "limit": "目标为受控英雄或受控 Acolyte，正在执行 Might、Lore、Intrigue 或 Command 类挑战；当前所用属性小于 4，且至少另一项属性大于 1。检查值包含属性加成。"
    },
    {
      "name": "Shifting Fate",
      "seal": 6,
      "cost": 3,
      "icon": "Power_6_Redo.png",
      "effect": "选择已定型的 <CrossReference name=\"A Power to Hasten\" />、<CrossReference name=\"A Power to Assist\" />、<CrossReference name=\"A Power to Interfere\" /> 或 <CrossReference name=\"A Power to Terrorize\" />，将其重置后重新选择。封印 0 神力立即弹出四种属性选项，其余恢复为待选择状态。没有可重置项时返还费用。",
      "limit": "任意地点或单位。"
    },
    {
      "name": "A Power to Terrorize",
      "seal": 6,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "根据目标开启分支预览：the Elder Tomb 对应 <CrossReference name=\"Collapse Ward\" />；City Ruins 对应 <CrossReference name=\"Spread the Flames\" />；英雄对应 <CrossReference name=\"Recurring Pain\" />；上下层 Tunnels 对应 <CrossReference name=\"Implode\" />。确认后替换此神力。",
      "limit": "目标为 the Elder Tomb、City Ruins、英雄，或带地上／地下 Tunnels 的地点。同地兼具条件时优先 the Elder Tomb，其次 City Ruins，最后 Tunnels。"
    },
    {
      "name": "A Power to End",
      "seal": 9,
      "cost": 0,
      "icon": "Power_0_Blank.png",
      "effect": "苏醒后依据当前最高胜利分数来源，自动切换为 <CrossReference name=\"Darkened Surrender\" />、<CrossReference name=\"Shared Delusions\" />、<CrossReference name=\"Damnable Fervor\" />、<CrossReference name=\"Doom\" /> 或 <CrossReference name=\"Parasitic Integration\" />。疯狂与“疯狂且 Enshadowed”两类分数合并参与比较；并列时通常保留先检查的类别。",
      "limit": "实际可施放的形态、费用和目标随分数来源变化，见对应分支。"
    }
  ],
  "powerGroups": [
    {
      "id": "powers-hasten",
      "title": "Hasten",
      "powers": [
        {
          "name": "Ancient Power",
          "seal": 0,
          "cost": 1,
          "icon": "Power_0_Might.png",
          "effect": "目标当前挑战的进度立即增加 15。",
          "limit": "已通过 <CrossReference name=\"A Power to Hasten\" /> 选择本分支（Might）。目标须为正在执行 Might 类挑战的可控制 Agent；引导式行动和无限时长行动不适用。"
        },
        {
          "name": "Ancient Knowledge",
          "seal": 0,
          "cost": 1,
          "icon": "Power_0_Lore.png",
          "effect": "目标当前挑战的进度立即增加 15。",
          "limit": "已通过 <CrossReference name=\"A Power to Hasten\" /> 选择本分支（Lore）。目标须为正在执行 Lore 类挑战的可控制 Agent；引导式行动和无限时长行动不适用。"
        },
        {
          "name": "Ancient Secrets",
          "seal": 0,
          "cost": 1,
          "icon": "Power_0_Intrigue.png",
          "effect": "目标当前挑战的进度立即增加 15。",
          "limit": "已通过 <CrossReference name=\"A Power to Hasten\" /> 选择本分支（Intrigue）。目标须为正在执行 Intrigue 类挑战的可控制 Agent；引导式行动和无限时长行动不适用。"
        },
        {
          "name": "Ancient Influence",
          "seal": 0,
          "cost": 1,
          "icon": "Power_0_Command.png",
          "effect": "目标当前挑战的进度立即增加 15。",
          "limit": "已通过 <CrossReference name=\"A Power to Hasten\" /> 选择本分支（Command）。目标须为正在执行 Command 类挑战的可控制 Agent；引导式行动和无限时长行动不适用。"
        }
      ]
    },
    {
      "id": "powers-assist",
      "title": "Assist",
      "powers": [
        {
          "name": "Intellectual Refutation",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Disease.png",
          "effect": "统治者基础 Lore −1，使其更难积累 Plague Immunity。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Disease）。目标为有统治者且其基础 Lore >1 的人类类聚居地。"
        },
        {
          "name": "Break Bonds",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Discord.png",
          "effect": "清除目标对人物、社会和家族的所有 Like、Love，改为中立；原有厌恶保留。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Discord）。目标为未受控的人物单位或聚居地统治者，并至少有一项对人物、社会或家族的正面偏好。"
        },
        {
          "name": "Gather the Dead",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Undead.png",
          "effect": "清空距目标 1–2 步地点的 <CrossReference name=\"Death\" /> 强度，并向目标集中其中至多 150 点；超出接收上限的部分消失。目标原有 Death 保留。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Undead）。目标为拥有已渗透 <CrossReference name=\"Catacombs\" /> 的人类类聚居地。"
        },
        {
          "name": "Defile",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Shadow.png",
          "effect": "把 <CrossReference name=\"Holy Site\" /> 的 Consecrate 行动替换为不可执行的 <CrossReference name=\"Shattered Beliefs\" />。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Shadow）。目标为带 Holy Site 的人类类聚居地，且其 Consecrate 尚未被本神力替换。"
        },
        {
          "name": "Orcish Diplomacy",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Orc.png",
          "effect": "所属 Orc Horde 的社会 Menace −50，最低 0；各邻国对该部落的关系 +35 个百分点，最高 100%。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Orc）。目标为由 Orc Horde 控制的 <CrossReference name=\"Orc Camp\" />。"
        },
        {
          "name": "Blacken Water",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_DeepOne.png",
          "effect": "添加 <CrossReference name=\"Blackening Waters\" />，持续吸收邻接聚居地的 Shadow，并压低 Sanctum 的 Menace。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Deep Ones）。目标为 <CrossReference name=\"Deep One Sanctum\" />。"
        },
        {
          "name": "Fickle Hearts",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Human.png",
          "effect": "把目标对 Elf 或 Dwarf 的偏好降低一级；从尚未厌恶的种族中选择，两者均符合时等概率随机。该方式最低降至 Dislike。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Human）。目标为未受控的人类人物单位，或人类统治者所在的聚居地；至少对 Elf、Dwarf 之一仍为中立或正面偏好。"
        },
        {
          "name": "Deaf Ears",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Elf.png",
          "effect": "添加 <CrossReference name=\"Enduring Arrogance\" />，持续约 50 回合，防止 <CrossReference name=\"Elven Arrogance\" /> 低于持续期间已达到的强度。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Elf）。目标为尚无 Enduring Arrogance 的 Elven City。"
        },
        {
          "name": "Shadowed Dwellings",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Dwarf.png",
          "effect": "将目标人物的 Gold 清零。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Dwarf）。目标为未受控的矮人人物单位，或矮人统治者所在的人类类聚居地。"
        },
        {
          "name": "Hungry Earth",
          "seal": 2,
          "cost": 2,
          "icon": "Power_3_Cthonian.png",
          "effect": "把目标至多 100 点 <CrossReference name=\"Death\" /> 转移到世界上强度最高的 <CrossReference name=\"Geomantic Locus\" /> 所在地点；并列时取地图列表中最后一个。未找到 Locus 时返还 2 Power。",
          "limit": "已通过 <CrossReference name=\"A Power to Assist\" /> 选择本分支（专长标签 Cthonian）。目标已有 Death，且本地没有 Geomantic Locus。"
        }
      ]
    },
    {
      "id": "powers-reveal",
      "title": "Reveal",
      "powers": [
        {
          "name": "Seethe",
          "seal": 3,
          "cost": 2,
          "icon": "Power_U_Unrest.png",
          "effect": "把当地所有善方或中立行动的额外 Danger 改为 max（原额外 Danger +⌊<CrossReference name=\"Unrest\" />÷8⌋，25）。因此首次通常至少达到 25，重复施放还能继续累加。",
          "limit": "<CrossReference name=\"A Power to Reveal\" /> 开启后，我方累计完成 4 次 <CrossReference name=\"Fuel the Fire\" />、<CrossReference name=\"Spread Panic\" /> 或 <CrossReference name=\"Organise Dissent\" /> 后解锁；目标地点 Unrest 至少 20。"
        },
        {
          "name": "Lost Faith",
          "seal": 3,
          "cost": 2,
          "icon": "Power_U_Politics.png",
          "effect": "当地正在进行 Political Gridlock 时，其行动进度 −1；若这里是首都且国家也在 Gridlock，国家进度同样 −1。已有 <CrossReference name=\"Political Agitation\" /> +50；已有 <CrossReference name=\"Political Instability\" /> 时，<CrossReference name=\"Mediate Politics\" /> 的额外 Danger +8。对首都施放还使所属国家与各邻国的关系下降 35 个百分点，最低 −100%。",
          "limit": "<CrossReference name=\"A Power to Reveal\" /> 开启后，我方累计完成 4 次 <CrossReference name=\"Political Gridlock\" href=\"#entry-political-gridlock-challenge\" /> 或 <CrossReference name=\"Inflame Tensions\" /> 后解锁。目标为人类类聚居地，包含 Elf、Dwarf。"
        },
        {
          "name": "Elder Traditions",
          "seal": 3,
          "cost": 2,
          "icon": "Power_U_Religion.png",
          "effect": "当地每座 Temple 或 Holy Order Seat 所属宗教的 Human Influence −100，最低 0。",
          "limit": "<CrossReference name=\"A Power to Reveal\" /> 开启后，我方累计完成 4 次 <CrossReference name=\"False Miracle\" />、<CrossReference name=\"Influence Holy Order\" />、<CrossReference name=\"Fund Holy Order\" /> 或 <CrossReference name=\"Dark Worship\" /> 后解锁；完成一次 <CrossReference name=\"The Hunger's Promise\" /> 也可直接达标。目标为带 Temple、Holy Order Seat 或 Witch Coven 的相应聚居地；仅有 Witch Coven 而无 Temple／Seat 时，施法代码未实现扣减。"
        },
        {
          "name": "Bandit Raid",
          "seal": 3,
          "cost": 2,
          "icon": "Power_U_Bandit.png",
          "effect": "<CrossReference name=\"Banditry\" /> +50、<CrossReference name=\"Devastation\" /> +25、<CrossReference name=\"Death\" /> +5。在人类类聚居地还增加 Shadow，并生成 <CrossReference name=\"Item Cache\" />：令 n＝⌊当地 <CrossReference name=\"Combat Banditry\" /> 的额外 Danger ÷7⌋，Shadow 增加 10 +5n 个百分点；缓存 Gold＝向零取整［人口 ×（Prosperity −0.25）×（1+n）］。",
          "limit": "<CrossReference name=\"A Power to Reveal\" /> 开启后，我方完成一次 <CrossReference name=\"Arm Bandits\" /> 或 <CrossReference name=\"Slaughter Bandits\" /> 后解锁。目标地点有 Banditry。"
        },
        {
          "name": "Sixth Sense",
          "seal": 3,
          "cost": 1,
          "icon": "Power_U_Ruins.png",
          "effect": "赋予 <CrossReference name=\"Tomb Sense\" />，使探索 Ancient Ruins 时每回合额外增加 3 进度。",
          "limit": "<CrossReference name=\"A Power to Reveal\" /> 开启后，我方累计完成 3 次 <CrossReference name=\"Explore Ruins\" /> 或 <CrossReference name=\"Guard Ruins\" /> 后解锁。目标为尚无 Tomb Sense 的可控制人物单位。"
        }
      ]
    },
    {
      "id": "powers-interfere",
      "title": "Interfere",
      "powers": [
        {
          "name": "Death to Tyrants",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Cruelty.png",
          "effect": "所属国家除首都以外的每个 City 增加 35 点 <CrossReference name=\"Political Agitation\" />。没有符合条件的城市时返还 3 Power。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Cruelty）。目标为首都，统治者对 Cruelty 的偏好必须为正。"
        },
        {
          "name": "Bloodlust",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Combat.png",
          "effect": "赋予持续 20 回合的 <CrossReference name=\"Bloodlust\" href=\"#entry-bloodlust-trait\" />，重复施放使剩余时间再增加 20 回合。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Combat）。目标为未受控的英雄或 Acolyte，排除 Chosen One。"
        },
        {
          "name": "Embolden",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Ambition.png",
          "effect": "使英雄立即转向其效用最高、正面标签含 Ambition 的可用任务；统治者改做对应的地方行动，首都还会检查国家行动。中断原行动并重置相应进度；未找到目标行动或已在进行目标行动时，按对应分支返还费用。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Ambition）。英雄须未受控且不是 Chosen One；地点目标须有统治者，实际切换地方／国家行动需属于 Society 的人类类聚居地。"
        },
        {
          "name": "Greener Pastures",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Cooperation.png",
          "effect": "移除聚居地，将全部人口变为 <CrossReference name=\"Refugees\" />。若原统治者没有人物单位，则使其成为<CrossReference name=\"流亡统治者\" href=\"#entry-displaced-ruler\" />。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Cooperation）。目标为渗透至少 99%、没有 City Palace 的人类类聚居地，排除矮人国家；实际执行需要当地属于 Society。"
        },
        {
          "name": "Paranoia",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Danger.png",
          "effect": "赋予 <CrossReference name=\"Paranoia\" href=\"#entry-paranoia-trait\" />，持续 20 回合；重复施放延长 20 回合。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Danger）。目标为英雄或邪恶 Agent，排除 Chosen One。"
        },
        {
          "name": "Hidden Hoard",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Gold.png",
          "effect": "创建强度 300 的 <CrossReference name=\"Hidden Hoard\" href=\"#entry-hidden-hoard-modifier\" />，吸引英雄执行 <CrossReference name=\"Pillage Hoard\" />。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Gold）。目标地点尚无 Hidden Hoard。"
        },
        {
          "name": "Seed of Chaos",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Madness.png",
          "effect": "赋予 <CrossReference name=\"Seed of Chaos\" href=\"#entry-seed-of-chaos-trait\" />，使下次疯狂等级上升后最多追加两次疯狂。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Madness）。目标为尚无该特质的统治者，或未受控的英雄、Acolyte。"
        },
        {
          "name": "Profane Rituals",
          "seal": 4,
          "cost": 3,
          "icon": "Power_4_Religion.png",
          "effect": "将所在地聚居地化为废墟，并把当前 Power 补至上限。",
          "limit": "已通过 <CrossReference name=\"A Power to Interfere\" /> 选择本分支（性格标签 Religion）。目标必须是带 <CrossReference name=\"Desecrated Holy Site\" /> 的小型人类聚居地。"
        }
      ]
    },
    {
      "id": "powers-terrorize",
      "title": "Terrorize",
      "powers": [
        {
          "name": "Collapse Ward",
          "seal": 6,
          "cost": 3,
          "icon": "Power_8_Shadow.png",
          "effect": "移除当地 <CrossReference name=\"Ward\" />。",
          "limit": "已通过 <CrossReference name=\"A Power to Terrorize\" /> 选择本分支（the Elder Tomb）。目标有 Ward。"
        },
        {
          "name": "Spread the Flames",
          "seal": 6,
          "cost": 2,
          "icon": "Power_8_Destruction.png",
          "effect": "当地 <CrossReference name=\"Devastation\" /> 立即 +100。施放后强度达到 300 且仍有聚居地时，摧毁该聚居地，并向每个相邻的人类类聚居地各加入“当前强度 −300”点 Devastation。",
          "limit": "已通过 <CrossReference name=\"A Power to Terrorize\" /> 选择本分支（City Ruins）。目标地点已有 Devastation。"
        },
        {
          "name": "Recurring Pain",
          "seal": 6,
          "cost": 3,
          "icon": "Power_8_Fallen.png",
          "effect": "世界上所有仍存活且带 <CrossReference name=\"Mourning\" /> 的人物失去 2 Sanity；若该哀悼记录了凶手，则改为失去 3 Sanity。每人只检查第一项 Mourning。",
          "limit": "已通过 <CrossReference name=\"A Power to Terrorize\" /> 选择本分支（英雄）。任意地点或单位。"
        },
        {
          "name": "Implode",
          "seal": 6,
          "cost": 1,
          "icon": "Power_8_Underground.png",
          "effect": "摧毁当地聚居地，使地表出现火山破坏痕迹，并将 Awareness of the Underground 推至 100%。",
          "limit": "已通过 <CrossReference name=\"A Power to Terrorize\" /> 选择本分支（带 Tunnels 的地点）。目标为带 <CrossReference name=\"Tunnels\" href=\"#entry-tunnels-above\" /> 的地表地点。"
        }
      ]
    },
    {
      "id": "powers-end",
      "title": "End",
      "powers": [
        {
          "name": "Darkened Surrender",
          "seal": 9,
          "cost": 3,
          "icon": "Power_9_Shadow.png",
          "effect": "将目标聚居地及其统治者的 <CrossReference name=\"Shadow\" /> 设为 100%。",
          "limit": "当前最高胜利分数来源须为Dark Empire 以外的 Enshadowed 人口。目标为 Shadow 至少 50% 的人类类聚居地。"
        },
        {
          "name": "Shared Delusions",
          "seal": 9,
          "cost": 3,
          "icon": "Power_9_Madness.png",
          "effect": "给目标所在地点增加 <CrossReference name=\"Madness\" />，数值为 50 +50 × 目标第一项 Insane 特质的等级。等级 1–5 对应增加 100–300 点。",
          "limit": "当前最高胜利分数来源须为疯狂人物分数。目标为带 Insane 特质的人物单位，或其统治者带该特质的人类类聚居地。"
        },
        {
          "name": "Damnable Fervor",
          "seal": 9,
          "cost": 6,
          "icon": "Power_9_DE.png",
          "effect": "把 Dark Empire 所属全部 <CrossReference name=\"Human Army\" /> 的当前 HP 恢复为各自 HP 上限。",
          "limit": "当前最高胜利分数来源须为Dark Empire 人口。任意地点或单位。"
        },
        {
          "name": "Doom",
          "seal": 9,
          "cost": 3,
          "icon": "Power_9_Destruction.png",
          "effect": "赋予目标 <CrossReference name=\"Doomed\" />。10 回合倒计时结束后，目标死亡，并摧毁其当时所在的聚居地、移除当地 Human Outpost。",
          "limit": "当前最高胜利分数来源须为人口损失。目标为可控制的人物单位。"
        },
        {
          "name": "Parasitic Integration",
          "seal": 9,
          "cost": 3,
          "icon": "Power_9_DO.png",
          "effect": "将 <CrossReference name=\"Deep One Cult\" /> 的 Profile、Menace 清零，把加速成熟剩余时间设为 999999 回合，并立刻生成一个自主 <CrossReference name=\"Deep One\" />。",
          "limit": "当前最高胜利分数来源须为Deep One Cities 人口。目标地点有 Deep One Cult。"
        }
      ]
    }
  ],
  "supplicant": {
    "name": "Supplicant",
    "image": "Supplicant.png",
    "stats": "Might 1、Lore 1、Intrigue 1、Command 1；HP 5。开局依次分配 7 点属性，使总和达到 11；这一阶段每项最多 4。",
    "abilities": [
      {
        "name": "Shared Fate",
        "text": "持有者被人物杀死时，对凶手直接造成 10 HP 伤害，绕过 Defence；伤害致命时杀死凶手。死亡钩子还会尝试将该能力随机转移给现有 Agent。代码在无凶手的死亡分支仍访问凶手对象，因此这种情况下能否顺利转移未确认。"
      },
      {
        "name": "Imitator",
        "text": "从以下十个组合中选择一项；关闭选择窗口会随机选择一个。\nHeirophant: Gospels：<CrossReference name=\"Preach Gospel of Cowardice\" />、<CrossReference name=\"Preach Gospel of Violence\" />、<CrossReference name=\"Preach Gospel of Envy\" />。\nWarlock: Magical Headstart：<CrossReference name=\"Arcane Knowledge\" /> 等级 2。\nWarlord: Orcish Commands：<CrossReference name=\"Claim Territory\" />、<CrossReference name=\"Commandeer Ships\" />、<CrossReference name=\"Orc Funding\" />。\nCourtier: Escalate to Vendetta：<CrossReference name=\"Escalate to Vendetta\" />。\nTrickster: Misleading Clues：<CrossReference name=\"Misleading Clues\" href=\"#entry-misleading-clues-ritual\" />、<CrossReference name=\"Steal Hero's Item\" />。\nDissident: Separatism：<CrossReference name=\"Separatism\" />。\nAristocrat: Crisis Votes：<CrossReference name=\"Crisis Vote: Plague\" />、<CrossReference name=\"Crisis Vote: Famine\" />。\nMonarch: Dark Empire：<CrossReference name=\"Dark Empire\" href=\"#entry-dark-empire-ritual\" />、<CrossReference name=\"Dark Crusade\" />、<CrossReference name=\"Welcome Defeat\" />、<CrossReference name=\"Make an Example\" />。\nPlague Doctor: Medical Experimentation：<CrossReference name=\"Medical Experimentation\" />。\nHarvester: Death Curse：<CrossReference name=\"Death Curse\" />。"
      },
      {
        "name": "Reflections of Divinity",
        "text": "从本局加载神祇的 Supplicant 可选特质池中，随机获得两项；抽取后从候选列表移除已抽对象，再抽第二项。候选池排除自身以及一项 Duality；选择完成后移除此选择特质。具体结果受已加载模组影响，未找到固定的两项组合。"
      },
      {
        "name": "Arcane Knowledge",
        "baseGame": true,
        "text": "通过 Imitator 的 Warlock: Magical Headstart 获得等级 2。作为学习 Geomancy、Death、Blood 魔法的知识储备，并添加相应学习仪式。"
      },
      {
        "name": "Death Curse",
        "baseGame": true,
        "text": "通过 Imitator 的 Harvester: Death Curse 获得。被人物杀死后，为凶手家族加入诅咒，把家族成员的 Sanity 上限压至 4。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Bloodlust",
          "id": "bloodlust-trait",
          "text": "攻击人物时，抵消“对手过于危险”带来的效用惩罚，因而更可能主动攻击强敌。持续 20 回合，每回合倒计时 −1；重复施放延长 20 回合。"
        },
        {
          "name": "Paranoia",
          "id": "paranoia-trait",
          "text": "每回合把当前及最低 Profile 设为 0、当前及最低 Menace 设为 100。持续 20 回合，结束时还原首次施放前记录的四个值；重复施放只延长时间。"
        },
        {
          "name": "Seed of Chaos",
          "id": "seed-of-chaos-trait",
          "text": "记录施加时的 Insane 等级。后续回合发现等级上升时，先在当前等级 ≤3 时追加一次疯狂，再在更新后的等级 ≤4 时追加一次；随后移除此特质。最多额外触发两次，并有一次回合检查的延迟。"
        },
        {
          "name": "Doomed",
          "text": "每回合倒计时 −1，10 回合后摧毁持有者所在聚居地、移除当地 Human Outpost，然后杀死持有者。重复施放会添加独立倒计时。"
        },
        {
          "name": "Tomb Sense",
          "text": "执行 <CrossReference name=\"Explore Ruins\" /> 时，每回合额外增加 3 进度。没有持续时间限制。"
        },
        {
          "name": "Mourning",
          "baseGame": true,
          "text": "人物因亲友死亡而哀悼，并记录凶手及是否已被利用。<CrossReference name=\"Recurring Pain\" /> 根据是否记录凶手，分别扣除 2 或 3 Sanity；<CrossReference name=\"Escalate to Vendetta\" /> 可利用尚未被利用的跨家族谋杀记录。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Blackening Waters",
          "text": "在 Deep One Sanctum 中运作：每回合令相邻人类类聚居地的 <CrossReference name=\"Shadow\" /> 减少 10 个百分点，最低 0；若扣减后低于 50%，当地统治者个人 Shadow 也减少 10 个百分点。只要存在这类邻接聚居地，Sanctum 设施的 Menace 就减少 0.5，最低 0。地点成为废墟时移除。",
          "image": "Power_3_DeepOne.png",
          "initialValue": "60。",
          "modifierChange": {
            "natural": "每回合强度 −3。",
            "external": "<CrossReference name=\"Blacken Water\" /> 每次添加一份新修正。"
          },
          "baseGame": false
        },
        {
          "name": "Enduring Arrogance",
          "text": "记录当地 <CrossReference name=\"Elven Arrogance\" /> 的强度，每回合把低于记录值的强度拉回，并更新记录。持续期间上涨的强度也会成为新的下限。地点成为废墟时移除。",
          "image": "Power_3_Elf.png",
          "initialValue": "100。",
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −2。",
            "external": "<CrossReference name=\"Deaf Ears\" /> 创建。"
          },
          "baseGame": false
        },
        {
          "name": "Hidden Hoard",
          "text": "提供 <CrossReference name=\"Pillage Hoard\" />，让英雄反复花时间搜掠。初始 Profile 20、吸引力 30；每次搜掠分别增加 10、5。地点成为废墟后仍保留。",
          "image": "Power_4_Gold.png",
          "initialValue": "300。",
          "modifierChange": {
            "natural": "每回合强度 −3。",
            "external": "<CrossReference name=\"Hidden Hoard\" /> 创建。\n<CrossReference name=\"Pillage Hoard\" /> 完成时强度 −50。"
          },
          "baseGame": false,
          "id": "hidden-hoard-modifier"
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n本页可用 <CrossReference name=\"Bandit Raid\" /> 推高地点 Shadow，或用 <CrossReference name=\"Darkened Surrender\" /> 完成侵蚀；<CrossReference name=\"Blackening Waters\" /> 会抽走邻地 Shadow。",
          "image": "enshadow.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合按地点流动规则，从相邻高 Shadow 地点传播；传播量受 Ward、Infiltration 与难度影响，最终限制在 0–100%。",
            "external": "<CrossReference name=\"Bandit Raid\" /> 增加 10 +5×⌊Combat Banditry 额外 Danger÷7⌋ 个百分点。\n<CrossReference name=\"Darkened Surrender\" /> 将地点 Shadow 设为 100%。\n<CrossReference name=\"Blackening Waters\" /> 每份每回合使相邻人类类聚居地 Shadow −10 个百分点。\n<CrossReference name=\"Deep One Cult\" /> 强度超过 100 时，每回合增加 0.1%×Cult 强度÷100。\n<CrossReference name=\"Dark Worship\" /> 使本地 +25 个百分点，并向相连地区分配总计至多 150 个百分点。\n<CrossReference name=\"Desecrated Holy Site\" /> 每回合增加 1 个百分点。"
          },
          "baseGame": true
        },
        {
          "name": "Madness",
          "text": "每 1 点强度使 Prosperity −0.003。超过 100 后，每回合使 <CrossReference name=\"Unrest\" /> 增加强度÷75，并逐步侵蚀当地统治者的 Sanity。达到 300 时强度回落到 150；若当地为人类类聚居地且尚无 Madness Effect，则触发本体 Madness Crisis，留下六种长期效果之一。\n<CrossReference name=\"Shared Delusions\" /> 可把人物的疯狂转化为地点 Madness。",
          "image": "madness.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Shared Delusions\" /> 增加 50 +50×目标 Insane 等级。\n<CrossReference name=\"Deep One Cult\" /> 在当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5。"
          },
          "baseGame": true
        },
        {
          "name": "Devastation",
          "text": "暴力与战争造成的地点破坏。每 1 点强度使 Prosperity −0.005；食物产出乘数为 max（0.1，1−强度÷200）。达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "raid.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "<CrossReference name=\"Bandit Raid\" /> 增加 25。\n<CrossReference name=\"Spread the Flames\" /> 增加 100；施放时摧毁聚居地后，向每个相邻人类类聚居地各加入超出 300 的部分。"
          },
          "baseGame": true
        },
        {
          "name": "Death",
          "text": "地点积累的死亡力量，可供亡灵与 Death 魔法使用；地点成为废墟后仍保留。正常游戏中达到 300 时，触发一次本体死亡危机；同一份修正仅触发一次。",
          "image": "death.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −0.5。",
            "external": "<CrossReference name=\"Gather the Dead\" /> 清空距目标 1–2 步地点的 Death，目标接收至多 150。\n<CrossReference name=\"Hungry Earth\" /> 从目标向最强 Geomantic Locus 所在地点转移至多 100。\n<CrossReference name=\"Bandit Raid\" /> 增加 5。\n<CrossReference name=\"Catacombs\" /> 在本地 Death <200 时，每回合从每个邻地各取至多 5 点汇入。"
          },
          "baseGame": true
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满。每 1 点强度使 Prosperity −0.005；当地达到 100 时 Security −4。相邻地点达到 100 也会降低本地 Security，其中已渗透的相邻地点影响更大。达到 300 时触发 Unrest Crisis，民众处决当前统治者，强度回落到 150，并清除 Lingering Resentment。",
          "image": "unrest.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "默认每回合按统治者 Command 每点 −0.5；无统治者时无此衰减。若关闭统治者特质影响规则则固定 −1。\n非人类类聚居地每回合清零。",
            "external": "<CrossReference name=\"Fuel the Fire\" /> 按各正向变化量的 10 倍分别向上取整后相加，最多 +100。\n<CrossReference name=\"Spread Panic\" /> 增加 Plague÷3，最多 100。\n<CrossReference name=\"Organised Dissent\" /> 每回合 +1.2。\n<CrossReference name=\"Madness\" /> 超过 100 时，每回合增加 Madness÷75。\n<CrossReference name=\"Make an Example\" /> 清零本地及相邻地点的 Unrest。\n<CrossReference name=\"Crisis Vote: Famine\" /> 的另一方获胜时，将四步内 Unrest 减半。"
          },
          "baseGame": true
        },
        {
          "name": "Banditry",
          "text": "当地 Prosperity −0.25，提供 <CrossReference name=\"Combat Banditry\" />、<CrossReference name=\"Arm Bandits\" /> 与 <CrossReference name=\"Slaughter Bandits\" />。其 Combat Banditry 的额外 Danger 决定 <CrossReference name=\"Bandit Raid\" /> 的 Shadow 和 Gold 倍率。",
          "image": "banditry.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度低于 75 时每回合 +2；达到或超过 75 后停止自然增长。",
            "external": "<CrossReference name=\"Bandit Raid\" /> 增加 50。\n<CrossReference name=\"Combat Banditry\" /> 或 <CrossReference name=\"Slaughter Bandits\" /> 完成时移除。"
          },
          "baseGame": true
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，会推动首都的 <CrossReference name=\"Political Instability\" />，增加内战风险。",
          "image": "agitate.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "<CrossReference name=\"Death to Tyrants\" /> 使目标国家非首都 City 各 +35。\n<CrossReference name=\"Lost Faith\" /> 使已有修正 +50。\n<CrossReference name=\"Separatist Sentiments\" /> 每回合 +2。\n<CrossReference name=\"Make an Example\" /> 清零 Dark Empire 全境的 Political Agitation。"
          },
          "baseGame": true
        },
        {
          "name": "Political Instability",
          "text": "由各地 <CrossReference name=\"Political Agitation\" /> 推动的国家不稳定程度。强度超过 300 时触发内战并清零。存在此修正时，<CrossReference name=\"Lost Faith\" /> 会使 <CrossReference name=\"Mediate Politics\" /> 的额外 Danger +8。",
          "image": "politicalInstability.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "<CrossReference name=\"Mediate Politics\" /> 完成时 −25。"
          },
          "baseGame": true
        },
        {
          "name": "Elven Arrogance",
          "text": "精灵对自身优越性的确信，150 为决策中立点。当地及周边威胁会影响其高低；统治者 Shadow 越高，单位 Menace 与世界恐慌带来的下降越弱。<CrossReference name=\"Enduring Arrogance\" /> 会把强度拉回持续期间记录的最高值。",
          "image": "enshadow.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合增加（150−当前强度）÷50。",
            "external": "<CrossReference name=\"Enduring Arrogance\" /> 每回合将低于记录值的强度恢复，并更新记录。\n四步内每个怪物领地、每支黑暗军队通常各 −0.5，两项各自最多 −2.5；若本国为 Dark Empire，则军队一项改为每支 +0.5、最多 +2.5。\n本地 Famine 每点 −0.05。\n四步内单位 Menace 总和 ×（1−统治者 Shadow）×−0.01，最低 −2.5。\n世界恐慌 ×（1−统治者 Shadow）×−0.1，最低 −2.5。\n四步内非精灵人类聚居地各提供 Unrest÷100÷（0.5+0.5×距离），合计再乘 0.5，最多 +3。\n统治者每级 Cruelty、Ambition 偏好各 +0.5；每级 Cooperation、Human 偏好各 −0.5。"
          },
          "baseGame": true
        },
        {
          "name": "Ward",
          "text": "抑制相邻地点传入的 <CrossReference name=\"Shadow\" />；强度 100 时阻止这类自然传播。",
          "image": "driveBackShadow.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "<CrossReference name=\"Collapse Ward\" /> 直接移除。"
          },
          "baseGame": true
        },
        {
          "name": "Deep One Cult",
          "text": "强度超过 100 后向地点提供 <CrossReference name=\"Shadow\" />；当 Madness 低于“Cult 强度 −100”时向当地提供 <CrossReference name=\"Madness\" />。强度达到 300 后使聚居地转为 <CrossReference name=\"Deep One Sanctum\" />；人类人口的 70% 经 Sanctum 转送至深海城市，统治者可变成自主 <CrossReference name=\"Deep One\" />。Security 修正为 −⌊（50+强度）÷100⌋。\nProfile 和 Menace 平时会继续增长；<CrossReference name=\"Parasitic Integration\" /> 可以清零两者并长期加速成熟。",
          "image": "deepOnes.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "通常每回合强度 +1。",
            "external": "<CrossReference name=\"Parasitic Integration\" /> 将加速成熟时间设为 999999 回合，其间每回合额外 +3。\n当地统治者对 Deep Ones 的偏好等级每级每回合调整 1 点强度，正面为增加、负面为减少。\n<CrossReference name=\"Start Deep One Cult\" href=\"#entry-deep-one-start-cult\" /> 创建 Cult；完成时若已有 Cult，则 +25。"
          },
          "baseGame": true
        },
        {
          "name": "Item Cache",
          "text": "储存 Gold 与物品，供 <CrossReference name=\"Access Cache\" /> 取用；<CrossReference name=\"Bandit Raid\" /> 创建的缓存 Gold 见该神力公式。Profile 每回合 +2，最高 100；内容全部取空后移除。",
          "image": "itemCache.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true
        },
        {
          "name": "Geomantic Locus",
          "text": "Geomancy 法术的施放地点与能量来源。<CrossReference name=\"Hungry Earth\" /> 将 Death 运往世界上当前强度最高的 Locus 所在地点。",
          "image": "geomanticLocus.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "强度低于 100 时每回合 +1。",
            "external": ""
          },
          "baseGame": true
        },
        {
          "name": "Tunnels",
          "text": "地表通向地下对应地点的隧道修正。可用于 A Power to Terrorize 的地下分支预览，并满足 Implode 的施放条件。",
          "image": "tunnelsBeneath.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true,
          "id": "tunnels-above"
        },
        {
          "name": "Tunnels Beneath",
          "text": "地下对应位置的隧道修正。可用于 A Power to Terrorize 的地下分支预览。",
          "image": "tunnelsBeneath.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true
        },
        {
          "name": "Organised Dissent",
          "text": "降低当地 Security 2 点，并向 <CrossReference name=\"Unrest\" /> 提供持续增加。统治者更换时移除。",
          "image": "organisedDissent.png",
          "initialValue": "100。",
          "modifierChange": {
            "natural": "每回合强度 −0.2。",
            "external": "<CrossReference name=\"Organise Dissent\" /> 创建。"
          },
          "baseGame": true
        },
        {
          "name": "Separatist Sentiments",
          "text": "向当地 <CrossReference name=\"Political Agitation\" /> 提供每回合 +2。",
          "image": "separatistSentiments.png",
          "initialValue": "50。",
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "<CrossReference name=\"Separatism\" /> 创建。"
          },
          "baseGame": true
        },
        {
          "name": "Misleading Clues",
          "text": "将下一项完成时会增加 Menace 的 Agent 行动所产生的 Profile、Menace 转给预先指定的人物，然后消失。设下线索的仪式本身不触发转嫁。",
          "image": "clues.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true,
          "id": "misleading-clues-modifier"
        },
        {
          "name": "Arcane Secret",
          "text": "提供魔法知识。<CrossReference name=\"Medical Experimentation\" /> 创建的这一份限制为玩家 Agent 使用，地点成为废墟后仍保留。",
          "image": "arcaneSecret.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "baseGame": true
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "Catacombs",
          "image": "catacombs.png",
          "baseGame": true,
          "text": "本体设施。本地 <CrossReference name=\"Death\" /> 低于 200 时，每回合从每个相邻地点各取至多 5 点 Death 汇入。渗透后可作为 <CrossReference name=\"Gather the Dead\" /> 的目标。"
        },
        {
          "name": "Holy Site",
          "image": "cathedral.png",
          "baseGame": true,
          "text": "本体设施，提供 Consecrate 等防御 Shadow 的行动。<CrossReference name=\"Defile\" /> 可将其 Consecrate 替换为 <CrossReference name=\"Shattered Beliefs\" />。"
        },
        {
          "name": "Desecrated Holy Site",
          "image": "desecreatedCathedral.png",
          "baseGame": true,
          "text": "已遭亵渎的 Holy Site，每回合使当地 <CrossReference name=\"Shadow\" /> 增加 1 个百分点。位于小型人类聚居地时，可以用于 <CrossReference name=\"Profane Rituals\" />。"
        },
        {
          "name": "Orc Camp",
          "baseGame": true,
          "text": "Orc Horde 的营地。<CrossReference name=\"Orcish Diplomacy\" /> 通过营地影响整个部落的社会 Menace 和邻国关系；<CrossReference name=\"Claim Territory\" /> 可以建立新营地。"
        },
        {
          "name": "Deep One Sanctum",
          "image": "loc_evil_deepOneSanctum.png",
          "baseGame": true,
          "text": "<CrossReference name=\"Deep One Cult\" /> 成熟后的地面聚居地，Shadow 为 100%，采用 FULL_FLOW，最高 Defence 为 50。转化的人口经 Sanctum 转送至海中的 Deep One 城市。<CrossReference name=\"Blacken Water\" /> 可在此创建 <CrossReference name=\"Blackening Waters\" />。"
        },
        {
          "name": "Ancient Ruins",
          "image": "ancientRuins.png",
          "baseGame": true,
          "text": "提供 <CrossReference name=\"Explore Ruins\" /> 与 <CrossReference name=\"Guard Ruins\" />。前者探索进度未满时可反复执行；两种行动在封印 3 后累计完成 3 次可解锁 <CrossReference name=\"Sixth Sense\" />。"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "腐化英雄",
          "baseGame": true,
          "stats": "Might 继承、Lore 继承、Intrigue 继承、Command 继承；HP 与 HP 上限继承。",
          "text": "由 <CrossReference name=\"Dark Reflection\" /> 直接接管原英雄，保留姓名、物品和已有能力，个人 Shadow 设为 100%，占用 Agent 名额。可以用 <CrossReference name=\"Retrain\" /> 调整基础属性。",
          "id": "corrupted-hero"
        },
        {
          "name": "流亡统治者",
          "baseGame": true,
          "stats": "Might 继承 +1、Lore 继承、Intrigue 继承、Command 继承 +1；初始 HP 6，HP 上限 6。",
          "text": "<CrossReference name=\"Greener Pastures\" /> 移除聚居地时，原统治者若尚无人物单位，会以原人物创建 Warrior，失去领地并成为自主英雄。",
          "id": "displaced-ruler"
        },
        {
          "name": "Deep One",
          "image": "evil_deepOne.png",
          "baseGame": true,
          "stats": "Might 4–6、Lore 1–3、Intrigue 1–3、Command 1–3；初始 HP 5，HP 上限 5。由原统治者转化时四项属性依次为：继承 +3、继承、继承、继承。",
          "text": "<CrossReference name=\"Parasitic Integration\" /> 直接生成，或由成熟 <CrossReference name=\"Deep One Cult\" /> 转化原统治者产生。个人 Shadow 为 100%，自主行动，不占用 Agent 名额。先前往海洋取得水陆通行能力，再寻找沿海聚居地传播和维护 Cult。",
          "abilities": [
            {
              "name": "Start Deep One Cult",
              "id": "deep-one-start-cult",
              "baseGame": true,
              "image": "deepOnes.png",
              "text": "在人类类聚居地创建强度 1 的 Deep One Cult；若完成时已有 Cult，则增加 25。",
              "statLine": "Complexity: 60　Profile: 10　Menace: 0　XP: 82",
              "location": "人类类聚居地；由自主 Deep One 执行。"
            },
            {
              "name": "Human Appearance",
              "id": "deep-one-human-appearance",
              "baseGame": true,
              "image": "deepOnes.png",
              "text": "将 Deep One Cult 的 Menace 减少 25，最低 0。自主 Deep One 在沿海 Cult 的 Menace >25 且该行动未被占用时优先执行。",
              "statLine": "Complexity: 25　Profile: 50　Menace: Cult 当前 Menace　XP: 42",
              "location": "带 Deep One Cult 的地点。"
            },
            {
              "name": "Conceal Deep Ones",
              "id": "deep-one-conceal",
              "baseGame": true,
              "image": "deepOnes.png",
              "text": "将 Deep One Cult 的 Profile 减少 25，最低 0。自主 Deep One 在沿海 Cult 的 Profile >25 且该行动未被占用时执行。",
              "statLine": "Complexity: 25　Profile: 50　Menace: Cult 当前 Menace　XP: 42",
              "location": "带 Deep One Cult 的地点。"
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
          "name": "Refugees",
          "image": "unit_refugees.png",
          "baseGame": true,
          "stats": "HP／初始 HP 上限＝Greener Pastures 移除聚居地时的全部人口。",
          "text": "由 <CrossReference name=\"Greener Pastures\" /> 生成，自主迁往可容纳人口的安全聚居地，保留出发地 Shadow。可安置地点每回合接收 max（1，⌊当前 HP×5%⌋）人口，并扣除同量 HP 和上限；存续超过 10 回合后，每回合另损失 1 HP 和上限。军队伤害倍率为 0.3。"
        },
        {
          "name": "Human Army",
          "image": "unit_humanArmy.png",
          "baseGame": true,
          "stats": "Dark Empire 人类军队的 HP 上限＝⌊驻地人口×Prosperity⌋；若驻地有 Military Fervour，再乘 1+min（强度，100）÷100 并向下取整。当前 HP 由军队现有兵力决定。",
          "text": "本体人类军队。<CrossReference name=\"Damnable Fervor\" /> 将 Dark Empire 所属这一类军队恢复到其当前 HP 上限。<CrossReference name=\"Welcome Defeat\" /> 会把目标地点供养的军队当前 HP 减半，向下取整。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "items": [
        {
          "name": "Induction",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "在本宗教 Temple 所在地点执行 Rest and Resupply 的未受控英雄，每回合个人 Shadow +8 个百分点，最高 100%。该检查包含 Chosen One。"
            }
          ]
        }
      ]
    },
    {
      "id": "mechanisms",
      "title": "相关机制",
      "items": [
        {
          "name": "Shattered Beliefs",
          "image": "consacrate.png",
          "text": "由 <CrossReference name=\"Defile\" /> 替换 Holy Site 的 Consecrate 行动。其地点和执行者有效性均为 false，因此无法执行；已存在的 Ward 不会随替换一同消失。"
        },
        {
          "name": "神力选择与重置",
          "text": "封印 0 的四种神力、封印 2 的十种神力、封印 4 的八种神力、封印 6 的四种神力各自共用一个位置，每组同时保留一种。<CrossReference name=\"Shifting Fate\" /> 可以重置这四组。五项行动解锁神力为独立追加，不占用这些位置。封印 9 的五种形态则由胜利分数自动切换。",
          "id": "power-customization"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "items": [
        {
          "name": "A Power to Assist",
          "id": "selection-event-2",
          "image": "God_Select.png",
          "text": "使用 <CrossReference name=\"A Power to Assist\" /> 并选定候选后，由模组主动打开的神力确认事件。可确认的结果：\n<CrossReference name=\"Intellectual Refutation\" />\n<CrossReference name=\"Break Bonds\" />\n<CrossReference name=\"Gather the Dead\" />\n<CrossReference name=\"Defile\" />\n<CrossReference name=\"Orcish Diplomacy\" />\n<CrossReference name=\"Blacken Water\" />\n<CrossReference name=\"Fickle Hearts\" />\n<CrossReference name=\"Deaf Ears\" />\n<CrossReference name=\"Shadowed Dwellings\" />\n<CrossReference name=\"Hungry Earth\" />",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将对应位置替换为当前预览的神力，具体效果见上方对应卡片。"
            },
            {
              "name": "Never mind",
              "text": "取消这次选择，保留待选择状态。无效果。"
            }
          ]
        },
        {
          "name": "A Power to Interfere",
          "id": "selection-event-4",
          "image": "God_Select.png",
          "text": "使用 <CrossReference name=\"A Power to Interfere\" /> 并选定候选后，由模组主动打开的神力确认事件。可确认的结果：\n<CrossReference name=\"Death to Tyrants\" />\n<CrossReference name=\"Bloodlust\" />\n<CrossReference name=\"Embolden\" />\n<CrossReference name=\"Greener Pastures\" />\n<CrossReference name=\"Paranoia\" />\n<CrossReference name=\"Hidden Hoard\" />\n<CrossReference name=\"Seed of Chaos\" />\n<CrossReference name=\"Profane Rituals\" />",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将对应位置替换为当前预览的神力，具体效果见上方对应卡片。"
            },
            {
              "name": "Never mind",
              "text": "取消这次选择，保留待选择状态。无效果。"
            }
          ]
        },
        {
          "name": "A Power to Terrorize",
          "id": "selection-event-6",
          "image": "God_Select.png",
          "text": "使用 <CrossReference name=\"A Power to Terrorize\" /> 并选定候选后，由模组主动打开的神力确认事件。可确认的结果：\n<CrossReference name=\"Collapse Ward\" />\n<CrossReference name=\"Spread the Flames\" />\n<CrossReference name=\"Recurring Pain\" />\n<CrossReference name=\"Implode\" />",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将对应位置替换为当前预览的神力，具体效果见上方对应卡片。"
            },
            {
              "name": "Never mind",
              "text": "取消这次选择，保留待选择状态。无效果。"
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
          "name": "Preach Gospel of Cowardice",
          "text": "统治者对 Ambition、Danger 的偏好各降低一级。",
          "location": "完全渗透且有统治者的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。两项偏好均未达到负面。",
          "image": "preachSin.png",
          "baseGame": true,
          "statLine": "Complexity: 40　Profile: 0　Menace: 50　XP: 60"
        },
        {
          "name": "Preach Gospel of Violence",
          "text": "统治者对 Combat、Cruelty 的偏好各提高一级。",
          "location": "完全渗透且有统治者的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。两项偏好均未达到正面。",
          "image": "preachSin.png",
          "baseGame": true,
          "statLine": "Complexity: 40　Profile: 0　Menace: 50　XP: 60"
        },
        {
          "name": "Preach Gospel of Envy",
          "text": "统治者对 Ambition 的偏好提高一级、对 Cooperation 的偏好降低一级。",
          "location": "完全渗透且有统治者的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。Ambition 偏好不为正，Cooperation 偏好不为负。",
          "image": "preachSin.png",
          "baseGame": true,
          "statLine": "Complexity: 40　Profile: 0　Menace: 50　XP: 60"
        },
        {
          "name": "Claim Territory",
          "text": "把当地改为已渗透的 <CrossReference name=\"Orc Camp\" />，归执行者所属势力；原有设施保留。",
          "location": "空地、City Ruins，或只含 Ancient Ruins 的小型地点。",
          "limit": "须通过 Imitator 获得对应仪式。地点须非海洋，适居度达到默认 5% 的兽人门槛；所属势力无领地，或邻接其领地，或地点沿海且该势力有已配船的 Shipyard。此仪式按执行者原所属势力建营，Imitator 本身不改变势力。",
          "image": "orcDefences.png",
          "baseGame": true,
          "statLine": "Complexity: 45　Profile: 30　Menace: 10　XP: 66"
        },
        {
          "name": "Commandeer Ships",
          "text": "随机把世界上一座兽人的空 Shipyard 配上船只。",
          "location": "带 Docks 的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。世界上须有兽人空 Shipyard。",
          "image": "docks.png",
          "baseGame": true,
          "statLine": "Complexity: 45　Profile: 15　Menace: 10　XP: 66"
        },
        {
          "name": "Orc Funding",
          "text": "符合身份条件时建立对兽人部落的资助：每 10 回合收取 Dark Empire 统治者 Gold 的 20%，按 50% 比率投入 Orc Industry。",
          "location": "Dark Empire 的领地。",
          "limit": "须通过 Imitator 获得对应仪式。执行者所属势力须有已配船的兽人 Shipyard，且尚未受资助。实际创建资助还检查执行者所属势力为 Orc Horde；Imitator 没有为 Supplicant 设置这种身份，单独选择该组合不足以启用资助。",
          "image": "mammonsInfluence.png",
          "baseGame": true,
          "statLine": "Complexity: 50　Profile: 20　Menace: 10　XP: 72"
        },
        {
          "name": "Escalate to Vendetta",
          "text": "把哀悼者家族中所有在世成员对凶手家族的偏好降低两级，并将该哀悼记录标为已利用。",
          "location": "有尚未利用的 <CrossReference name=\"Mourning\" /> 人物所在地点。",
          "limit": "须通过 Imitator 获得对应仪式。哀悼须由不同家族的人物杀害亲友产生；目标在完成时仍需留在当地。",
          "image": "vendetta.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 10　Menace: 20　XP: 3"
        },
        {
          "name": "Misleading Clues",
          "text": "消耗一件合格 Personal Item，添加指向其原主的 <CrossReference name=\"Misleading Clues\" href=\"#entry-misleading-clues-modifier\" />。",
          "location": "执行者当前地点。",
          "limit": "须通过 Imitator 获得对应仪式。持有原主仍为人物单位的 Personal Item。",
          "image": "clues.png",
          "baseGame": true,
          "id": "misleading-clues-ritual",
          "statLine": "Complexity: 30　Profile: 10　Menace: 20　XP: 49"
        },
        {
          "name": "Steal Hero's Item",
          "text": "从以此地为家的合格人物中随机取得一件 Personal Item，可用于 Misleading Clues。",
          "location": "渗透大于 0，且至少是一位未受控英雄家乡的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。",
          "image": "i_personalItem.png",
          "baseGame": true,
          "statLine": "Complexity: 20 +5×当地 Security　Profile: 25　Menace: 25　XP: ⌊(6×Complexity)^0.75⌋"
        },
        {
          "name": "Separatism",
          "text": "添加 <CrossReference name=\"Separatist Sentiments\" />。",
          "location": "完全渗透、距离所属国家首都超过 4 步的 City。",
          "limit": "须通过 Imitator 获得对应仪式。",
          "image": "separatistSentiments.png",
          "baseGame": true,
          "statLine": "Complexity: 60　Profile: 10　Menace: 20　XP: 82"
        },
        {
          "name": "Crisis Vote: Plague",
          "text": "投票在开始时立即打开。Cure Infected 获胜时，四步内 Plague 减半；Protect Uninfected 获胜时，无 Plague 的人类类聚居地增加 50 Plague Immunity。败方至多四名统治者各降低一级对胜方至多四人的偏好。票数相同时前者获胜。",
          "location": "有统治者的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。当地 Plague ≥50；四步内另有至少三个带统治者且 Plague >50 的人类或精灵 City。 每项投票独立冷却 32 回合。",
          "image": "plague.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 0"
        },
        {
          "name": "Crisis Vote: Famine",
          "text": "投票在开始时立即打开。Cure Famine 获胜时，四步内 Famine 清零；另一方获胜时，四步内 <CrossReference name=\"Unrest\" /> 减半。败方至多四名统治者各降低一级对胜方至多四人的偏好。票数相同时前者获胜。",
          "location": "有统治者的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。当前实现检查当地 Plague ≥50；四步内另有至少三个带统治者且 Famine >10 的人类或精灵 City。 每项投票独立冷却 32 回合。",
          "image": "famine.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 0"
        },
        {
          "name": "Dark Empire",
          "text": "把国家转为 Dark Empire。城内统治者个人 Shadow 和地点 Shadow 均低于 90% 的 City 将叛乱；国家退出 Alliance。",
          "location": "Shadow 为 100% 的国家首都。",
          "limit": "须通过 Imitator 获得对应仪式。世界上尚无 Dark Empire，目标不属于 Holy Order。",
          "image": "darkEmpire.png",
          "baseGame": true,
          "id": "dark-empire-ritual",
          "statLine": "Complexity: 50　Profile: 0　Menace: 50　XP: 72"
        },
        {
          "name": "Dark Crusade",
          "text": "使 Dark Empire 向目标国家宣战。",
          "location": "由 Dark Empire 以外国家控制的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。世界上已有 Dark Empire。",
          "image": "war.png",
          "baseGame": true,
          "statLine": "Complexity: 10　Profile: 0　Menace: 50　XP: 21"
        },
        {
          "name": "Welcome Defeat",
          "text": "将当地 Defence 清零，并把所有以此地为家的军队当前 HP 减半，向下取整。",
          "location": "Shadow 为 100%、属于 Society 的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。",
          "image": "brokenWalls.png",
          "baseGame": true,
          "statLine": "Complexity: 5　Profile: 0　Menace: 50　XP: 12"
        },
        {
          "name": "Make an Example",
          "text": "处决当地统治者，清零当地及相邻地点的 <CrossReference name=\"Unrest\" />，并清零 Dark Empire 全境的 <CrossReference name=\"Political Agitation\" />。",
          "location": "Dark Empire 内有统治者的地点。",
          "limit": "须通过 Imitator 获得对应仪式。当地 Unrest ≥50，或 Political Agitation >0。",
          "image": "brutalJustice.png",
          "baseGame": true,
          "statLine": "Complexity: 20　Profile: 10　Menace: 20　XP: 36"
        },
        {
          "name": "Medical Experimentation",
          "text": "添加一份只供玩家 Agent 使用的 <CrossReference name=\"Arcane Secret\" />。",
          "location": "Plague 至少 75 的人类类聚居地。",
          "limit": "须通过 Imitator 获得对应仪式。",
          "image": "medicalExperimentation.png",
          "baseGame": true,
          "statLine": "Complexity: 70　Profile: 10　Menace: 20　XP: 92"
        },
        {
          "name": "Fuel the Fire",
          "text": "对当地 <CrossReference name=\"Unrest\" /> 的各项正向增量分别乘 10 并向上取整，合计增加至多 100 点 Unrest。",
          "location": "<CrossReference name=\"Unrest\" /> 至少有一项正向变化来源的地点。",
          "limit": "",
          "image": "unrest.png",
          "baseGame": true,
          "statLine": "Complexity: 25　Profile: Unrest÷2　Menace: Unrest−75　XP: 42"
        },
        {
          "name": "Spread Panic",
          "text": "增加 <CrossReference name=\"Unrest\" />，数值为 min（Plague÷3，100）。",
          "location": "存在 Plague 的地点。",
          "limit": "",
          "image": "spreadPanic.png",
          "baseGame": true,
          "statLine": "Complexity: 25　Profile: 30　Menace: Unrest−75　XP: 42"
        },
        {
          "name": "Organise Dissent",
          "text": "添加强度 100 的 <CrossReference name=\"Organised Dissent\" />。",
          "location": "有统治者且存在 Lingering Resentment，或 <CrossReference name=\"Unrest\" /> 至少 100 的地点。",
          "limit": "当地尚无 Organised Dissent。",
          "image": "organisedDissent.png",
          "baseGame": true,
          "statLine": "Complexity: 25　Profile: 40　Menace: 50　XP: 42"
        },
        {
          "name": "Political Gridlock",
          "text": "取消当地当前行动，开始持续 10 回合的 Political Gridlock。若当地是首都，也同样冻结国家行动。",
          "location": "完全渗透的聚居地。",
          "limit": "",
          "image": "gridlock.png",
          "baseGame": true,
          "id": "political-gridlock-challenge",
          "statLine": "Complexity: 20　Profile: 50　Menace: 30　XP: 36"
        },
        {
          "name": "Inflame Tensions",
          "text": "使所属国家与各相邻国家的外交关系下降 35 个百分点，最低 −100%。",
          "location": "已渗透的 City Palace 或精灵城市对应设施。",
          "limit": "",
          "image": "badDiplomacy.png",
          "baseGame": true,
          "statLine": "Complexity: 30　Profile: 国家领地数×5　Menace: 国家最高外交紧张度×100　XP: 49"
        },
        {
          "name": "False Miracle",
          "text": "消耗 2 Power，增加 Elder Influence：min（200，⌊800÷max（1，信徒统治者数+2×Temple 数+Acolyte 数）^0.75⌋），最终不超过宗教影响力阈值。",
          "location": "Temple、Holy Order Seat 等提供该行动的宗教设施。",
          "limit": "整个执行期间须保有至少 2 Power。",
          "image": "falseMiracle.png",
          "baseGame": true,
          "statLine": "Complexity: 30　Profile: 0　Menace: 0　XP: 49"
        },
        {
          "name": "The Hunger's Promise",
          "text": "向该宗教添加 The Feast 教义，使其可以发展 The Hunger 和吸血鬼机制。",
          "location": "已渗透、尚未添加 The Feast 的 Holy Order Seat。",
          "limit": "执行者或该宗教至少一位 Acolyte 持有 The Hunger。",
          "image": "theHunger.png",
          "baseGame": true,
          "statLine": "Complexity: 35　Profile: 50　Menace: 200　XP: 55"
        },
        {
          "name": "Dark Worship",
          "text": "本地 <CrossReference name=\"Shadow\" /> +25 个百分点，并沿相连地区向外分配总计至多 150 个百分点；所用设施 Menace +20。",
          "location": "完全渗透聚居地中的 Witch Coven；或满足教义条件的 Temple。",
          "limit": "Temple 版本另需 Dark Worship 教义等级为负。两个本体实现均计入 Elder Traditions 的解锁次数。",
          "image": "enshadow.png",
          "baseGame": true,
          "statLine": "Complexity: 25　Profile: 40　Menace: 45；传播已无可达目标时为 −50　XP: 42"
        },
        {
          "name": "Arm Bandits",
          "text": "消耗 20 Gold，将当地 <CrossReference name=\"Combat Banditry\" /> 的额外 Danger 提高至至少 7。",
          "location": "<CrossReference name=\"Banditry\" /> 所在地点。",
          "limit": "执行者至少有 20 Gold。",
          "image": "banditry.png",
          "baseGame": true,
          "statLine": "Complexity: 8　Profile: Banditry 强度　Menace: 50　XP: 18"
        },
        {
          "name": "Slaughter Bandits",
          "text": "移除当地 <CrossReference name=\"Banditry\" />。",
          "location": "<CrossReference name=\"Banditry\" /> 所在地点。",
          "limit": "",
          "image": "banditry.png",
          "baseGame": true,
          "statLine": "Complexity: 10　Profile: Banditry 强度　Menace: 50　Danger: 2　XP: 21"
        },
        {
          "name": "Explore Ruins",
          "text": "完成一次遗迹探索并按本体探索事件决定所得与风险。<CrossReference name=\"Tomb Sense\" /> 每回合额外提供 3 进度；我方在 Shadow >50% 的地点还获得本体额外 1 进度。",
          "location": "<CrossReference name=\"Ancient Ruins\" />。",
          "limit": "遗迹仍有未完成的探索次数。本体中英雄也可执行；此处收录我方用于解锁 Sixth Sense 的行动。",
          "image": "exploreRuins.png",
          "baseGame": true,
          "statLine": "Complexity: 7　Profile: 50　Menace: 0　XP: 16"
        },
        {
          "name": "Guard Ruins",
          "text": "留下一个随从；探索的额外 Danger 增加 max（1，⌊(随从当前 HP+Attack+最大 Defence)÷2⌋）。",
          "location": "<CrossReference name=\"Ancient Ruins\" />。",
          "limit": "须有随从，且已有探索 Danger <5。",
          "image": "exploreRuins.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3"
        },
        {
          "name": "Access Cache",
          "text": "打开 <CrossReference name=\"Item Cache\" />，取放 Gold 与物品。英雄也可搜取其中的全部内容。",
          "location": "<CrossReference name=\"Item Cache\" /> 所在地点。",
          "limit": "",
          "image": "itemCache.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 缓存当前 Profile　Menace: 0　XP: 3"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Pillage Hoard",
          "meta": "Other",
          "text": "取得 35 Gold，使 <CrossReference name=\"Hidden Hoard\" href=\"#entry-hidden-hoard-modifier\" /> 的强度 −50、Profile +10、吸引力 +5。可反复执行，并允许多人同时进行。",
          "location": "<CrossReference name=\"Hidden Hoard\" href=\"#entry-hidden-hoard-modifier\" /> 所在地点。",
          "limit": "",
          "image": "Power_4_Gold.png",
          "baseGame": false,
          "statLine": "Complexity: 5　Profile: 20 +10×已搜掠次数　Menace: 30 +5×已搜掠次数　XP: 12",
          "positiveTags": "Gold",
          "negativeTags": "无"
        },
        {
          "name": "Combat Banditry",
          "meta": "Might",
          "text": "移除当地 <CrossReference name=\"Banditry\" />。<CrossReference name=\"Arm Bandits\" /> 可将其额外 Danger 提至至少 7；<CrossReference name=\"Seethe\" /> 可进一步累加。",
          "location": "<CrossReference name=\"Banditry\" /> 所在地点。",
          "limit": "",
          "image": "banditry.png",
          "baseGame": true,
          "statLine": "Complexity: 10　Profile: Banditry 强度　Menace: 50　Danger: 2 +当前额外 Danger　XP: 21",
          "positiveTags": "Combat、Cruelty、Danger",
          "negativeTags": "无"
        },
        {
          "name": "Mediate Politics",
          "meta": "Command",
          "text": "<CrossReference name=\"Political Instability\" /> −25。<CrossReference name=\"Lost Faith\" /> 在当地有该修正时使本任务额外 Danger +8；<CrossReference name=\"Seethe\" /> 也会增加额外 Danger。",
          "location": "City Palace 或精灵城市对应设施。",
          "limit": "",
          "image": "diplomacy.png",
          "baseGame": true,
          "statLine": "Complexity: 15　Profile: Political Instability÷2　Menace: Political Instability÷2　XP: 29",
          "positiveTags": "Cooperation",
          "negativeTags": "Combat、Danger、Discord"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "items": [
        {
          "name": "Influence Holy Order",
          "meta": "Lore + Command",
          "text": "我方完成时增加 Elder Influence，增量为 min（100，⌊700÷max（1，信徒统治者数+2×Temple 数+Acolyte 数）^0.75⌋），不超过阈值。未受控且个人 Shadow <66% 的执行者改为增加 Human Influence。",
          "location": "提供此行动的宗教设施。",
          "limit": "",
          "image": "basicPrayer.png",
          "baseGame": true,
          "statLine": "Complexity: 60　Profile: 30　Menace: 0　XP: 82",
          "positiveTags": "无",
          "negativeTags": "Cruelty、Discord"
        },
        {
          "name": "Fund Holy Order",
          "meta": "Other",
          "text": "游戏名称为 Fund 后接具体宗教名。捐献 Gold 增加该宗教储备，并按捐款的一半向上取整增加影响力；玩家增加 Elder Influence，未受控执行者增加 Human Influence，均不超过阈值。",
          "location": "提供此行动的宗教设施。",
          "limit": "执行者至少有 1 Gold。",
          "image": "bribe.png",
          "baseGame": true,
          "statLine": "Complexity: 1　Profile: 40　Menace: 0　XP: 3",
          "positiveTags": "Religion、Cooperation",
          "negativeTags": "Gold"
        }
      ]
    }
  ],
  "relations": {
    "Ancient Power": {
      "sources": [
        {
          "name": "A Power to Hasten",
          "href": "#entry-a-power-to-hasten"
        }
      ]
    },
    "Ancient Knowledge": {
      "sources": [
        {
          "name": "A Power to Hasten",
          "href": "#entry-a-power-to-hasten"
        }
      ]
    },
    "Ancient Secrets": {
      "sources": [
        {
          "name": "A Power to Hasten",
          "href": "#entry-a-power-to-hasten"
        }
      ]
    },
    "Ancient Influence": {
      "sources": [
        {
          "name": "A Power to Hasten",
          "href": "#entry-a-power-to-hasten"
        }
      ]
    },
    "Dark Reflection": {
      "effects": [
        {
          "name": "腐化英雄",
          "href": "#entry-corrupted-hero"
        }
      ]
    },
    "Intellectual Refutation": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ]
    },
    "Break Bonds": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ]
    },
    "Gather the Dead": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ],
      "effects": [
        {
          "name": "Death",
          "href": "#entry-death"
        }
      ]
    },
    "Defile": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ],
      "effects": [
        {
          "name": "Shattered Beliefs",
          "href": "#entry-shattered-beliefs"
        }
      ]
    },
    "Orcish Diplomacy": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ]
    },
    "Blacken Water": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ],
      "effects": [
        {
          "name": "Blackening Waters",
          "href": "#entry-blackening-waters"
        }
      ]
    },
    "Fickle Hearts": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ]
    },
    "Deaf Ears": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ],
      "effects": [
        {
          "name": "Enduring Arrogance",
          "href": "#entry-enduring-arrogance"
        }
      ]
    },
    "Shadowed Dwellings": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ]
    },
    "Hungry Earth": {
      "sources": [
        {
          "name": "A Power to Assist",
          "href": "#entry-a-power-to-assist"
        }
      ],
      "effects": [
        {
          "name": "Death",
          "href": "#entry-death"
        }
      ]
    },
    "Death to Tyrants": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        }
      ]
    },
    "Bloodlust": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Bloodlust",
          "href": "#entry-bloodlust-trait"
        }
      ]
    },
    "Embolden": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ]
    },
    "Greener Pastures": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Refugees",
          "href": "#entry-refugees"
        },
        {
          "name": "流亡统治者",
          "href": "#entry-displaced-ruler"
        }
      ]
    },
    "Paranoia": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Paranoia",
          "href": "#entry-paranoia-trait"
        }
      ]
    },
    "Hidden Hoard": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Hidden Hoard",
          "href": "#entry-hidden-hoard-modifier"
        }
      ]
    },
    "Seed of Chaos": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ],
      "effects": [
        {
          "name": "Seed of Chaos",
          "href": "#entry-seed-of-chaos-trait"
        }
      ]
    },
    "Profane Rituals": {
      "sources": [
        {
          "name": "A Power to Interfere",
          "href": "#entry-a-power-to-interfere"
        }
      ]
    },
    "Collapse Ward": {
      "sources": [
        {
          "name": "A Power to Terrorize",
          "href": "#entry-a-power-to-terrorize"
        }
      ],
      "effects": [
        {
          "name": "Ward",
          "href": "#entry-ward"
        }
      ]
    },
    "Spread the Flames": {
      "sources": [
        {
          "name": "A Power to Terrorize",
          "href": "#entry-a-power-to-terrorize"
        }
      ],
      "effects": [
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Recurring Pain": {
      "sources": [
        {
          "name": "A Power to Terrorize",
          "href": "#entry-a-power-to-terrorize"
        }
      ]
    },
    "Implode": {
      "sources": [
        {
          "name": "A Power to Terrorize",
          "href": "#entry-a-power-to-terrorize"
        }
      ]
    },
    "Darkened Surrender": {
      "sources": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "Shared Delusions": {
      "sources": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ],
      "effects": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    },
    "Damnable Fervor": {
      "sources": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ],
      "effects": [
        {
          "name": "Human Army",
          "href": "#entry-human-army"
        }
      ]
    },
    "Doom": {
      "sources": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ],
      "effects": [
        {
          "name": "Doomed",
          "href": "#entry-doomed"
        }
      ]
    },
    "Parasitic Integration": {
      "sources": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ],
      "effects": [
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        },
        {
          "name": "Deep One",
          "href": "#entry-deep-one"
        }
      ]
    },
    "Seethe": {
      "sources": [
        {
          "name": "A Power to Reveal",
          "href": "#entry-a-power-to-reveal"
        }
      ]
    },
    "Lost Faith": {
      "sources": [
        {
          "name": "A Power to Reveal",
          "href": "#entry-a-power-to-reveal"
        }
      ],
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        },
        {
          "name": "Mediate Politics",
          "href": "#entry-mediate-politics"
        }
      ]
    },
    "Elder Traditions": {
      "sources": [
        {
          "name": "A Power to Reveal",
          "href": "#entry-a-power-to-reveal"
        }
      ]
    },
    "Bandit Raid": {
      "sources": [
        {
          "name": "A Power to Reveal",
          "href": "#entry-a-power-to-reveal"
        }
      ],
      "effects": [
        {
          "name": "Banditry",
          "href": "#entry-banditry"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        },
        {
          "name": "Death",
          "href": "#entry-death"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Item Cache",
          "href": "#entry-item-cache"
        }
      ]
    },
    "Sixth Sense": {
      "sources": [
        {
          "name": "A Power to Reveal",
          "href": "#entry-a-power-to-reveal"
        }
      ],
      "effects": [
        {
          "name": "Tomb Sense",
          "href": "#entry-tomb-sense"
        }
      ]
    },
    "bloodlust-trait": {
      "sources": [
        {
          "name": "Bloodlust",
          "href": "#entry-bloodlust"
        }
      ]
    },
    "paranoia-trait": {
      "sources": [
        {
          "name": "Paranoia",
          "href": "#entry-paranoia"
        }
      ]
    },
    "seed-of-chaos-trait": {
      "sources": [
        {
          "name": "Seed of Chaos",
          "href": "#entry-seed-of-chaos"
        }
      ]
    },
    "Doomed": {
      "sources": [
        {
          "name": "Doom",
          "href": "#entry-doom"
        }
      ]
    },
    "Tomb Sense": {
      "sources": [
        {
          "name": "Sixth Sense",
          "href": "#entry-sixth-sense"
        }
      ]
    },
    "Blackening Waters": {
      "sources": [
        {
          "name": "Blacken Water",
          "href": "#entry-blacken-water"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "Enduring Arrogance": {
      "sources": [
        {
          "name": "Deaf Ears",
          "href": "#entry-deaf-ears"
        }
      ],
      "effects": [
        {
          "name": "Elven Arrogance",
          "href": "#entry-elven-arrogance"
        }
      ]
    },
    "hidden-hoard-modifier": {
      "sources": [
        {
          "name": "Hidden Hoard",
          "href": "#entry-hidden-hoard"
        }
      ],
      "effects": [
        {
          "name": "Pillage Hoard",
          "href": "#entry-pillage-hoard"
        }
      ]
    },
    "Shadow": {
      "sources": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        },
        {
          "name": "Darkened Surrender",
          "href": "#entry-darkened-surrender"
        },
        {
          "name": "Dark Worship",
          "href": "#entry-dark-worship"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ],
      "effects": [
        {
          "name": "A Power to End",
          "href": "#entry-a-power-to-end"
        }
      ]
    },
    "Madness": {
      "sources": [
        {
          "name": "Shared Delusions",
          "href": "#entry-shared-delusions"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ],
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        },
        {
          "name": "Spread the Flames",
          "href": "#entry-spread-the-flames"
        }
      ]
    },
    "Death": {
      "sources": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        },
        {
          "name": "Gather the Dead",
          "href": "#entry-gather-the-dead"
        },
        {
          "name": "Hungry Earth",
          "href": "#entry-hungry-earth"
        }
      ]
    },
    "Banditry": {
      "sources": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        }
      ],
      "effects": [
        {
          "name": "Arm Bandits",
          "href": "#entry-arm-bandits"
        },
        {
          "name": "Slaughter Bandits",
          "href": "#entry-slaughter-bandits"
        },
        {
          "name": "Combat Banditry",
          "href": "#entry-combat-banditry"
        }
      ]
    },
    "Political Agitation": {
      "sources": [
        {
          "name": "Death to Tyrants",
          "href": "#entry-death-to-tyrants"
        },
        {
          "name": "Lost Faith",
          "href": "#entry-lost-faith"
        },
        {
          "name": "Separatist Sentiments",
          "href": "#entry-separatist-sentiments"
        }
      ],
      "effects": [
        {
          "name": "Political Instability",
          "href": "#entry-political-instability"
        }
      ]
    },
    "Deep One Cult": {
      "sources": [
        {
          "name": "Parasitic Integration",
          "href": "#entry-parasitic-integration"
        }
      ],
      "effects": [
        {
          "name": "Deep One Sanctum",
          "href": "#entry-deep-one-sanctum"
        },
        {
          "name": "Deep One",
          "href": "#entry-deep-one"
        },
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        },
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    },
    "Item Cache": {
      "sources": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        }
      ],
      "effects": [
        {
          "name": "Access Cache",
          "href": "#entry-access-cache"
        }
      ]
    },
    "Organised Dissent": {
      "sources": [
        {
          "name": "Organise Dissent",
          "href": "#entry-organise-dissent"
        }
      ],
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        }
      ]
    },
    "Separatist Sentiments": {
      "sources": [
        {
          "name": "Separatism",
          "href": "#entry-separatism"
        }
      ],
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        }
      ]
    },
    "misleading-clues-modifier": {
      "sources": [
        {
          "name": "Misleading Clues",
          "href": "#entry-misleading-clues-ritual"
        }
      ]
    },
    "Arcane Secret": {
      "sources": [
        {
          "name": "Medical Experimentation",
          "href": "#entry-medical-experimentation"
        }
      ]
    },
    "corrupted-hero": {
      "sources": [
        {
          "name": "Dark Reflection",
          "href": "#entry-dark-reflection"
        }
      ]
    },
    "displaced-ruler": {
      "sources": [
        {
          "name": "Greener Pastures",
          "href": "#entry-greener-pastures"
        }
      ]
    },
    "Deep One": {
      "sources": [
        {
          "name": "Parasitic Integration",
          "href": "#entry-parasitic-integration"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ],
      "effects": [
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ]
    },
    "Refugees": {
      "sources": [
        {
          "name": "Greener Pastures",
          "href": "#entry-greener-pastures"
        }
      ]
    },
    "Human Army": {
      "sources": [
        {
          "name": "Damnable Fervor",
          "href": "#entry-damnable-fervor"
        }
      ]
    },
    "A Power to Assist": {
      "effects": [
        {
          "name": "Intellectual Refutation",
          "href": "#entry-intellectual-refutation"
        },
        {
          "name": "Break Bonds",
          "href": "#entry-break-bonds"
        },
        {
          "name": "Gather the Dead",
          "href": "#entry-gather-the-dead"
        },
        {
          "name": "Defile",
          "href": "#entry-defile"
        },
        {
          "name": "Orcish Diplomacy",
          "href": "#entry-orcish-diplomacy"
        },
        {
          "name": "Blacken Water",
          "href": "#entry-blacken-water"
        },
        {
          "name": "Fickle Hearts",
          "href": "#entry-fickle-hearts"
        },
        {
          "name": "Deaf Ears",
          "href": "#entry-deaf-ears"
        },
        {
          "name": "Shadowed Dwellings",
          "href": "#entry-shadowed-dwellings"
        },
        {
          "name": "Hungry Earth",
          "href": "#entry-hungry-earth"
        }
      ]
    },
    "A Power to Interfere": {
      "effects": [
        {
          "name": "Death to Tyrants",
          "href": "#entry-death-to-tyrants"
        },
        {
          "name": "Bloodlust",
          "href": "#entry-bloodlust"
        },
        {
          "name": "Embolden",
          "href": "#entry-embolden"
        },
        {
          "name": "Greener Pastures",
          "href": "#entry-greener-pastures"
        },
        {
          "name": "Paranoia",
          "href": "#entry-paranoia"
        },
        {
          "name": "Hidden Hoard",
          "href": "#entry-hidden-hoard"
        },
        {
          "name": "Seed of Chaos",
          "href": "#entry-seed-of-chaos"
        },
        {
          "name": "Profane Rituals",
          "href": "#entry-profane-rituals"
        }
      ]
    },
    "A Power to Terrorize": {
      "effects": [
        {
          "name": "Collapse Ward",
          "href": "#entry-collapse-ward"
        },
        {
          "name": "Spread the Flames",
          "href": "#entry-spread-the-flames"
        },
        {
          "name": "Recurring Pain",
          "href": "#entry-recurring-pain"
        },
        {
          "name": "Implode",
          "href": "#entry-implode"
        }
      ]
    },
    "Preach Gospel of Cowardice": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Preach Gospel of Violence": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Preach Gospel of Envy": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Claim Territory": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Commandeer Ships": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Orc Funding": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Escalate to Vendetta": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "misleading-clues-ritual": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Steal Hero's Item": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Separatism": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Crisis Vote: Plague": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Crisis Vote: Famine": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "dark-empire-ritual": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Dark Crusade": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Welcome Defeat": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Make an Example": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Medical Experimentation": {
      "sources": [
        {
          "name": "Imitator",
          "href": "#entry-imitator"
        }
      ]
    },
    "Fuel the Fire": {
      "effects": [
        {
          "name": "Seethe",
          "href": "#entry-seethe"
        }
      ]
    },
    "Spread Panic": {
      "effects": [
        {
          "name": "Seethe",
          "href": "#entry-seethe"
        }
      ]
    },
    "Organise Dissent": {
      "effects": [
        {
          "name": "Seethe",
          "href": "#entry-seethe"
        }
      ]
    },
    "political-gridlock-challenge": {
      "effects": [
        {
          "name": "Lost Faith",
          "href": "#entry-lost-faith"
        }
      ]
    },
    "Inflame Tensions": {
      "effects": [
        {
          "name": "Lost Faith",
          "href": "#entry-lost-faith"
        }
      ]
    },
    "False Miracle": {
      "effects": [
        {
          "name": "Elder Traditions",
          "href": "#entry-elder-traditions"
        }
      ]
    },
    "The Hunger's Promise": {
      "effects": [
        {
          "name": "Elder Traditions",
          "href": "#entry-elder-traditions"
        }
      ]
    },
    "Dark Worship": {
      "effects": [
        {
          "name": "Elder Traditions",
          "href": "#entry-elder-traditions"
        }
      ]
    },
    "Arm Bandits": {
      "effects": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        }
      ]
    },
    "Slaughter Bandits": {
      "effects": [
        {
          "name": "Bandit Raid",
          "href": "#entry-bandit-raid"
        }
      ]
    },
    "Explore Ruins": {
      "effects": [
        {
          "name": "Sixth Sense",
          "href": "#entry-sixth-sense"
        }
      ]
    },
    "Guard Ruins": {
      "effects": [
        {
          "name": "Sixth Sense",
          "href": "#entry-sixth-sense"
        }
      ]
    },
    "Pillage Hoard": {
      "sources": [
        {
          "name": "Hidden Hoard",
          "href": "#entry-hidden-hoard-modifier"
        }
      ],
      "effects": [
        {
          "name": "Hidden Hoard",
          "href": "#entry-hidden-hoard-modifier"
        }
      ]
    },
    "Influence Holy Order": {
      "effects": [
        {
          "name": "Elder Traditions",
          "href": "#entry-elder-traditions"
        }
      ]
    },
    "Fund Holy Order": {
      "effects": [
        {
          "name": "Elder Traditions",
          "href": "#entry-elder-traditions"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function KalastropheArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
