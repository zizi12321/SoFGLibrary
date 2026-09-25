"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "mekhane",
  "name": "MEKHANE, the Broken God",
  "number": "24",
  "theme": "mekhane-theme",
  "assetDir": "mekhane",
  "background": "mekhane_background.png",
  "portrait": "mekhane_portrait.png",
  "flavour": "",
  "caption": "组件制造、三支教派与神体重组",
  "maxTurns": "500 回合",
  "awaken": "现存 5 件 Divine Machine（已用于神体的组件也计入）",
  "panic": "70%",
  "initialAgents": "0；首次 Congregate 后为 2",
  "finalAgents": "5",
  "progressLabel": "组件阈值",
  "unlockMethod": "制造并保有指定数量的 Mechanism、Relics 与 Divine Machines。",
  "powerRecovery": "每回合恢复 = 神力上限 ×0.035×难度系数 + Mekhanite Unity 的有效等级 ×0.03。\nArtificial Power 启用时自然恢复为 0；Activation 后每回合恢复 1。",
  "powerCapacity": "神力上限 = 已解封数 +1；Activation 后为 50。",
  "core": [
    "开局没有初始 Agent。先用 <CrossReference name=\"Congregate\" href=\"#entry-p-mek-congregate\" /> 建立 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />，出现 <CrossReference name=\"The Supplicant\" href=\"#entry-uae-supplicant\" /> 与首名 <CrossReference name=\"Mekhanite Acolyte\" href=\"#entry-ua-mek-acolyte\" />；用 <CrossReference name=\"Reveal Fragments\" href=\"#entry-p-mek-unearthfragment\" /> 揭示 <CrossReference name=\"Unearthed Fragments\" href=\"#entry-pr-mek-resourceunearthed\" />，采集 <CrossReference name=\"Piece\" href=\"#entry-i-mek-piece\" />。",
    "在 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" /> 把 <CrossReference name=\"Piece\" href=\"#entry-i-mek-piece\" /> 组装为 <CrossReference name=\"Mechanism\" href=\"#entry-i-mek-mechanism\" />，再制造 <CrossReference name=\"Relic\" href=\"#entry-i-mek-relic\" />；现存组件推进封印。用 <CrossReference name=\"Prioritize\" href=\"#entry-p-mek-prioritize\" /> 引导自主运输，并用 <CrossReference name=\"Hidden Works\" href=\"#entry-p-mek-hiddenworks\" />、<CrossReference name=\"Divert Attention\" href=\"#entry-ch-divertattention\" /> 控制 Profile。",
    "<CrossReference name=\"Towers of Change\" href=\"#entry-p-mek-towerofchange\" /> 培育 <CrossReference name=\"Metalsmith\" href=\"#entry-uae-mek-smith\" />；<CrossReference name=\"Standardization\" href=\"#entry-p-mek-spreadorthodoxy\" /> 建立 <CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />，制造 <CrossReference name=\"Clockwork Mechanism\" href=\"#entry-i-mek-cogworkmechanism\" />、<CrossReference name=\"Cogwork Relic\" href=\"#entry-i-mek-cogworkrelic\" /> 与 <CrossReference name=\"Gatherer\" href=\"#entry-ua-mek-automaton\" />、<CrossReference name=\"Sentinel\" href=\"#entry-ua-mek-automaton-sentinel\" /> 与 <CrossReference name=\"Speaker\" href=\"#entry-ua-mek-automaton-speaker\" />；<CrossReference name=\"Apotheosis\" href=\"#entry-p-mek-spreadmaxwellism\" /> 建立 <CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />，制造 <CrossReference name=\"Arcane Relic\" href=\"#entry-i-mek-arcanerelic\" /> 并扩展 <CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />。",
    "组合三类 <CrossReference name=\"Relic\" href=\"#entry-i-mek-relic\" /> 制造 <CrossReference name=\"Divine Machine\" href=\"#entry-i-mek-divinemachine\" />。使用 <CrossReference name=\"Begin Construction\" href=\"#entry-p-mek-body\" /> 放置神体，以 <CrossReference name=\"Build MEKHANE\" href=\"#entry-ch-mek-buildmek-tier3\" /> 投入组件，同时防备 <CrossReference name=\"Destroy MEKHANE\" href=\"#entry-ch-mek-damagemek\" />；完成度达到 100% 后使用 <CrossReference name=\"Activation\" href=\"#entry-p-mek-reassembleform\" /> 获胜。",
    "<CrossReference name=\"The Other Half\" href=\"#entry-event-sarkic\" /> 与 <CrossReference name=\"A Foundation\" href=\"#entry-event-foundation\" /> 可开启额外敌对路线。前者需要阻止 <CrossReference name=\"Sarkic Ascension\" href=\"#entry-ch-mek-sarkic-victory\" />，后者需要阻止 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中的 <CrossReference name=\"Reforge Seals\" href=\"#entry-ch-mek-vaultseal\" />。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "",
    "playStyle": "围绕资源生产与自主教派协作展开。玩家安排仓库、专业化设施和组件物流，把基础收集逐步转成高阶制造；扩张越快，越需要处理 Profile、英雄调查和可选敌对势力。"
  },
  "specialVictory": "MEKHANE's Body 建造完成度达到 100%，施放 Activation 立即获胜。",
  "specialFailure": "MEKHANE's Body 完整度归零。\n开启 Sarkics 后，Ascension Ritual 达到 100。\n开启 Foundation 后，Chosen One 在 Containment Vault 完成 Reforge Seals。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "progressText": "开局",
      "agents": "0 → 2",
      "powerRecovery": "1/0.035",
      "reward": [
        "<CrossReference name=\"Acolyte Assistance\" href=\"#entry-p-mek-acolytebehavior\" />",
        "<CrossReference name=\"Reveal Fragments\" href=\"#entry-p-mek-unearthfragment\" />",
        "<CrossReference name=\"Congregate\" href=\"#entry-p-mek-congregate\" />",
        "<CrossReference name=\"Prioritize\" href=\"#entry-p-mek-prioritize\" />"
      ]
    },
    {
      "seal": 1,
      "progress": 1,
      "progressText": "1 Mechanism",
      "agents": 3,
      "powerRecovery": "2/0.07",
      "reward": [
        "<CrossReference name=\"Hidden Works\" href=\"#entry-p-mek-hiddenworks\" />",
        "<CrossReference name=\"Divine Assembly\" href=\"#entry-p-mek-divineassembly\" />"
      ]
    },
    {
      "seal": 2,
      "progress": 2,
      "progressText": "1 Relic",
      "agents": 3,
      "powerRecovery": "3/0.105",
      "reward": [
        "<CrossReference name=\"Regenerating Metals\" href=\"#entry-p-mek-boostunearthedfragments\" />",
        "<CrossReference name=\"Towers of Change\" href=\"#entry-p-mek-towerofchange\" />"
      ]
    },
    {
      "seal": 3,
      "progress": 3,
      "progressText": "3 Relics",
      "agents": 4,
      "powerRecovery": "4/0.14",
      "reward": [
        "<CrossReference name=\"Fractured Faith\" href=\"#entry-p-mek-minorsect\" />",
        "<CrossReference name=\"Standardization\" href=\"#entry-p-mek-spreadorthodoxy\" />"
      ]
    },
    {
      "seal": 4,
      "progress": 4,
      "progressText": "6 Relics",
      "agents": 4,
      "powerRecovery": "5/0.175",
      "reward": [
        "<CrossReference name=\"Apotheosis\" href=\"#entry-p-mek-spreadmaxwellism\" />"
      ]
    },
    {
      "seal": 5,
      "progress": 5,
      "progressText": "12 Relics",
      "agents": 4,
      "powerRecovery": "6/0.21",
      "reward": [
        "<CrossReference name=\"The Builder\" href=\"#entry-p-mek-builder\" />",
        "<CrossReference name=\"Fragmented Following\" href=\"#entry-p-mek-exiles\" />"
      ]
    },
    {
      "seal": 6,
      "progress": 6,
      "progressText": "1 Divine Machine",
      "agents": 5,
      "powerRecovery": "7/0.245",
      "reward": [
        "<CrossReference name=\"Begin Construction\" href=\"#entry-p-mek-body\" />"
      ]
    },
    {
      "seal": 7,
      "progress": 7,
      "progressText": "5 Divine Machines",
      "agents": 5,
      "powerRecovery": "8/0.28",
      "reward": [
        "<CrossReference name=\"Activation\" href=\"#entry-p-mek-reassembleform\" />"
      ]
    }
  ],
  "powers": [
    {
      "name": "Acolyte Assistance",
      "id": "p-mek-acolytebehavior",
      "seal": 0,
      "cost": 0,
      "icon": "icon_itembasicmechanism.png",
      "effect": "切换普通 Mekhanite Acolyte 是否自动使用收集到的 Pieces 组装组件。关闭时，他们只收集并把组件存入 Congregation；默认开启。",
      "limit": "任意地点。"
    },
    {
      "name": "Reveal Fragments",
      "id": "p-mek-unearthfragment",
      "seal": 0,
      "cost": "1+",
      "icon": "icon_powerunearth.png",
      "effect": "创建 Unearthed Fragments 和一份 Divine Schema。实际费用为已揭示的 Unearthed Fragments 数量 +1，最低 1；启用 Artificial Power 且尚未揭示任何碎片时，首次免费。",
      "limit": "陆地 Ancient Ruins；当地没有 Unearthed Fragments、Sarkic Tomb 或 Congregation。启用 MEKHANE’s Forge 时不提供本神力。"
    },
    {
      "name": "Congregate",
      "id": "p-mek-congregate",
      "seal": 0,
      "cost": "0–1",
      "icon": "icon_subcongregation.png",
      "effect": "建立 Congregation，并产生一名普通 Acolyte。第一次同时建立 Church of the Broken God、生成 The Supplicant，将 Agent 上限从 0 提高到 2；首次免费，此后每次消耗 1。\n当地可渗透设施全部完成渗透，普通 Temple 被移除，已有 Minor Sect 被移除。Congregation 数量上限为 2 + 已解封数，并受相应教义增加。",
      "limit": "人类类聚居地；当地没有 Congregation、其他教团的 Seat、Mekhanite Exiles、Unearthed Fragments 或 MEKHANE's Body。第一次还排除 City、Elven City、名称含 Dwarven 的聚居地及提供 Gold like the Sun 的地点；之后要求 Infiltration 100% 且未达到数量上限。"
    },
    {
      "name": "Prioritize",
      "id": "p-mek-prioritize",
      "seal": 0,
      "cost": 0,
      "icon": "icon_powerpriority.png",
      "effect": "将一处 Congregation 标为 Priority，吸引自主 Acolyte 在此存放和组装组件；移除其他地点的 Priority。再次对同一地点施放可取消。",
      "limit": "有 Congregation 的地点。"
    },
    {
      "name": "Hidden Works",
      "id": "p-mek-hiddenworks",
      "seal": 1,
      "cost": 2,
      "icon": "icon_powerhiddenworks.png",
      "effect": "将 Congregation 的当前 Profile 和最低 Profile 分别减半，均向下取整。",
      "limit": "人类类聚居地中的 Congregation，当前 Profile 至少 2。"
    },
    {
      "name": "Divine Assembly",
      "id": "p-mek-divineassembly",
      "seal": 1,
      "cost": 2,
      "icon": "icon_powerdivineassembly.png",
      "effect": "把目标 Congregation 库存中的 Pieces 按每 2 件合成 1 件 Mechanism，处理所有完整配对，余下单件保留；不增加 Congregation 的 Profile。\n尚未解锁 The Clockworks 时，使其解锁回合提前 50。",
      "limit": "Congregation 库存至少有 2 件 Pieces。"
    },
    {
      "name": "Regenerating Metals",
      "id": "p-mek-boostunearthedfragments",
      "seal": 2,
      "cost": 2,
      "icon": "icon_powerregeneratingmetal.png",
      "effect": "创建 Regenerating Metals，使当地 Unearthed Fragments 每回合额外恢复 5，持续 25 回合。",
      "limit": "有 Unearthed Fragments，且尚无 Regenerating Metals。"
    },
    {
      "name": "Towers of Change",
      "id": "p-mek-towerofchange",
      "seal": 2,
      "cost": 2,
      "icon": "icon_tower.png",
      "effect": "把 Congregation 改为 Citadel，保留库存、Profile 与最低 Profile。以此为故乡的普通 Acolyte 转为 Metalsmith，改为提供教派增益；Citadel 支持向普通 Acolyte 分发 Divine Schema。\n尚未解锁 The Clockworks 时，使其解锁回合提前 10。",
      "limit": "尚未专业化的 Congregation。"
    },
    {
      "name": "Fractured Faith",
      "id": "p-mek-minorsect",
      "seal": 3,
      "cost": 2,
      "icon": "icon_minorsect.png",
      "effect": "创建 Minor Sect，以逐步积累的 Profile 分散已觉醒英雄对主要 Congregation 的调查。",
      "limit": "陆地上的人类类聚居地，Infiltration 或 Shadow 大于 0；当地没有 Congregation 或 Minor Sect。"
    },
    {
      "name": "Standardization",
      "id": "p-mek-spreadorthodoxy",
      "seal": 3,
      "cost": 2,
      "icon": "icon_subforge.png",
      "effect": "把 Congregation 改为 Forge，保留库存、Profile 与最低 Profile，以生产 Cogwork Components 与 Automatons 为主。相关 Acolyte 转为 Orthodox Legate。\n首次建立 Cogwork Orthodoxy；缺少有效 Council of Patriarchs 时在目标创建 Council。尚未解锁 Mechanical Choir 时，使其解锁回合提前 10。",
      "limit": "尚未专业化的 Congregation。"
    },
    {
      "name": "Apotheosis",
      "id": "p-mek-spreadmaxwellism",
      "seal": 4,
      "cost": 2,
      "icon": "icon_subrelay.png",
      "effect": "把 Congregation 改为 Maxwellist Relay，保留库存、Profile 与最低 Profile，以 Arcane Components、Constructs 和 Maxwellist 法术为主。相关 Acolyte 转为 Living Saint。\n首次建立 Maxwellism，并创建主 Maxwellist Noosphere。",
      "limit": "尚未专业化的 Congregation。"
    },
    {
      "name": "The Builder",
      "id": "p-mek-builder",
      "seal": 5,
      "cost": 2,
      "icon": "icon_powerbuilder.png",
      "effect": "赋予 The Builder，使目标成为 Church of the Broken God 的 Prophet，并获得专属物品与 Unified Church 等仪式；可在任意类型 Congregation 制作 Cogwork Components 和 Arcane Components。",
      "limit": "可控制的人物 Agent，尚无 The Builder，也没有 Biomechanical。只能施放一次。"
    },
    {
      "name": "Fragmented Following",
      "id": "p-mek-exiles",
      "seal": 5,
      "cost": 2,
      "icon": "icon_subexiles.png",
      "effect": "建立 Mekhanite Exiles，移除当地 Minor Sect 及普通 Temple。Exile 通过实验制造灾害并干扰其他地点。",
      "limit": "Minor Sect 强度至少 50 的地点。"
    },
    {
      "name": "Begin Construction",
      "id": "p-mek-body",
      "seal": 6,
      "cost": 1,
      "icon": "icon_powermekhane.png",
      "effect": "建立 MEKHANE's Body 与对应设施，开始重组神体。此后英雄可以直接损伤神体，神体被摧毁会导致特殊失败。",
      "limit": "地表陆地，不能属于普通人类国家。已有聚居地时，其显示名称须与地点原名相同；只能施放一次。"
    },
    {
      "name": "Activation",
      "id": "p-mek-reassembleform",
      "seal": 7,
      "cost": 8,
      "icon": "icon_poweractivate.png",
      "effect": "立即达成特殊胜利，并将 MEKHANE 标记为已激活。继续游戏时神力上限变为 50，每回合恢复 1。 消耗等于当前神力上限。",
      "limit": "MEKHANE's Body 完成度至少 100%。"
    }
  ],
  "powerGroups": [
    {
      "id": "anomalous-powers",
      "title": "异常神力",
      "powers": [
        {
          "name": "Clockwork Virus",
          "id": "p-mek-clockworkvirus",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scpclockworkvirus.png",
          "effect": "创建 Clockwork Virus，并解锁 Free from Flesh 与 Rusting Metal。 神力消耗等于施放时的神力上限。",
          "limit": "通过 Clockwork Virus 的特殊解锁条件获得；目标存在 Plague。只能施放一次。"
        },
        {
          "name": "Free from Flesh",
          "id": "p-mek-virusinfect",
          "seal": -1,
          "cost": 2,
          "icon": "icon_scpclockworkvirusp2.png",
          "effect": "赋予目标 Clockwork Virus 感染特质，随感染增强抑制其行动；达到转化门槛后成为自主 Basic Automaton。",
          "limit": "先施放 Clockwork Virus。目标是非 Chosen One 的英雄或教士，尚未感染，也不属于 Mekhanite 自主单位；所在地有正强度 Clockwork Virus，或同地另有人物已感染。"
        },
        {
          "name": "Rusting Metal",
          "id": "p-mek-virusfragments",
          "seal": -1,
          "cost": 2,
          "icon": "icon_scpclockworkvirusp1.png",
          "effect": "世界上所有 Clockwork Virus 强度增加 50，分别受各自上限限制。",
          "limit": "先施放 Clockwork Virus；任意地点。"
        },
        {
          "name": "A Machine",
          "id": "p-mek-machine",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scpamachine.png",
          "effect": "创建 A Machine，并解锁 Call of A Machine 与 Endless Noise。 神力消耗等于施放时的神力上限。",
          "limit": "通过 A Machine 的特殊解锁条件获得；目标有 Unearthed Fragments。只能施放一次。"
        },
        {
          "name": "Call of A Machine",
          "id": "p-mek-machineeffect",
          "seal": -1,
          "cost": 2,
          "icon": "icon_scpamachinepower1.png",
          "effect": "为目标赋予强度 50 的 Machine Effect；已有该特质时强度增加 30。受影响人物会倾向于扩大 A Machine，以缓解自身影响。",
          "limit": "先施放 A Machine。自主英雄或教士，排除 Chosen One、Mekhanite 自主单位与 Sarkic 自主人物；所在地 Shadow 至少 30%，或有 A Machine；现存 A Machine 的强度须均至少 25。"
        },
        {
          "name": "Endless Noise",
          "id": "p-mek-machineenshadow",
          "seal": -1,
          "cost": 2,
          "icon": "icon_scpamachinepower2.png",
          "effect": "消耗目标 A Machine 的 100 点强度，使全世界拥有 Machine Effect 的非受控、非 Chosen One 人物获得 50 个百分点个人 Shadow，最高 100%。",
          "limit": "先施放 A Machine；目标 A Machine 强度至少 100，且世界存在拥有 Machine Effect 的人物。"
        },
        {
          "name": "The Clockworks",
          "id": "p-mek-clockworks",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scpclockworks.png",
          "effect": "在 Congregation 创建 The Clockworks，开放 Fine 与 Very Fine 批量加工挑战。每件实际产物使 Congregation Profile +2。神力消耗等于当前神力上限。",
          "limit": "通过 The Clockworks 的特殊解锁条件获得；人类类聚居地中的 Congregation。只能施放一次。"
        },
        {
          "name": "Mechanical Choir",
          "id": "p-mek-mechanicalchoir",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scpmechanicalchoir.png",
          "effect": "生成可控制的 Mechanical Choir，提供消耗 Divine Schema 的范围支援与攻击能力。 神力消耗等于施放时的神力上限。",
          "limit": "通过 Mechanical Choir 的特殊解锁条件获得；有 Cogwork Orthodox 设施的人类类聚居地。只能施放一次。"
        },
        {
          "name": "Rotbolt",
          "id": "p-mek-rotbolt",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scprotbolt.png",
          "effect": "创建 Rotbolt，并解锁 Accelerated Frequency 与 Biological Transfer。 神力消耗等于施放时的神力上限。",
          "limit": "通过 Rotbolt 的特殊解锁条件获得；有 Unearthed Fragments。只能施放一次。"
        },
        {
          "name": "Accelerated Frequency",
          "id": "p-mek-rotboltspread",
          "seal": -1,
          "cost": 2,
          "icon": "icon_scprotboltgrow.png",
          "effect": "使目标 Rotbolt 强度翻倍。",
          "limit": "先施放 Rotbolt；目标 Rotbolt 强度低于 100。"
        },
        {
          "name": "Biological Transfer",
          "id": "p-mek-rotboltconsume",
          "seal": -1,
          "cost": 3,
          "icon": "icon_scprotboltconsume.png",
          "effect": "赋予 Rotbolt Transformation，逐步损伤目标 HP；目标死在陆地时可留下新的 Rotbolt。",
          "limit": "先施放 Rotbolt。目标人物尚无 Rotbolt Transformation，所在地 Rotbolt 强度至少 100。"
        },
        {
          "name": "Ancient Colossus",
          "id": "p-mek-colossus",
          "seal": -1,
          "cost": "1–8",
          "icon": "icon_scpcolossus.png",
          "effect": "生成可控制的 Colossus，初始 HP 为 800，具有可切换的武装模式。 神力消耗等于施放时的神力上限。",
          "limit": "通过 Ancient Colossus 的特殊解锁条件获得；人类类聚居地中的 Congregation。只能施放一次。"
        }
      ]
    }
  ],
  "sections": [
{
      "id": "traits",
      "title": "人物特质",
      "media": false,
      "items": [
        {
          "name": "Mekhanite",
          "id": "t-mekhanite",
          "text": "参与机械教派，获得图纸、制造与传播行动。"
        },
        {
          "name": "Divine Schema",
          "id": "t-mek-divineschema",
          "text": "人物持有的图纸资源，用于改造、治疗、建立设施和支援行动。"
        },
        {
          "name": "The Builder",
          "id": "t-mek-builder",
          "text": "Command +3，成为教团 Prophet，获得 Bumaro’s Warhammer 与专属仪式。"
        },
        {
          "name": "Biomechanical",
          "id": "t-mek-biomechanical",
          "text": "机械化身份；Clockwork Virus 完成转化时赋予，部分敌对任务因此排除该人物。"
        },
        {
          "name": "Clockwork Virus Infection",
          "id": "t-mek-clockworkvirus",
          "text": "每回合感染强度 +2；完全 Enshadowed 的非受控人物额外 +2。达到 100 后转化为自主 Gatherer，沿用原人物。受控感染者获得 Spread Clockwork Virus 仪式。"
        },
        {
          "name": "Machine Effect",
          "id": "t-mek-machine",
          "text": "受 A Machine 吸引。Grow the Machine 会减半影响，并提高个人 Shadow。"
        },
        {
          "name": "Rotbolt Transformation",
          "id": "t-mek-rotbolt",
          "text": "每 2 回合损失 1 HP。死在陆地时，若已有 Rotbolt 则增加人物 HP 上限 ×3 的强度，否则创建新的 Rotbolt。"
        },
        {
          "name": "Data Blackout",
          "id": "t-mek-maxwellist-awareness",
          "text": "持续 30 回合，压低 Awareness；重复施法刷新持续时间。"
        },
        {
          "name": "Artificial Limbs",
          "id": "t-mek-augmentbasicmight",
          "text": "Might +1。"
        },
        {
          "name": "Arcane Engravings",
          "id": "t-mek-augmentbasiclore",
          "text": "Lore +1。"
        },
        {
          "name": "Muffled Joints",
          "id": "t-mek-augmentbasicintrigue",
          "text": "Intrigue +1。"
        },
        {
          "name": "Amplified Voice Box",
          "id": "t-mek-augmentbasiccommand",
          "text": "Command +1。"
        },
        {
          "name": "Hidden Blades",
          "id": "t-mek-augmentbasicattack",
          "text": "Attack +3。"
        },
        {
          "name": "Metal Skin",
          "id": "t-mek-augmentbasicdefense",
          "text": "Defence +3。"
        },
        {
          "name": "Magnetic Implants",
          "id": "t-mek-augmentbasicscavenge",
          "text": "采集组件时有 30% 概率找到 Mechanism。"
        },
        {
          "name": "Blackpowder Implements",
          "id": "t-mek-augmentcogworkattack",
          "text": "战斗开始时，对敌方人物造成 3 伤害。"
        },
        {
          "name": "Mechanical Heart",
          "id": "t-mek-augmentcogworkhealth",
          "text": "每 2 回合恢复 1 HP。"
        },
        {
          "name": "Clockwork Mind",
          "id": "t-mek-augmentcogworkmind",
          "text": "每回合获得 5 XP。"
        },
        {
          "name": "Augmentation: Scoped Eyes",
          "id": "t-mek-augmentcogworksecurity",
          "text": "所在聚居地 Security −1。"
        },
        {
          "name": "Iron Lungs",
          "id": "t-mek-augmentcogworkspeedboost",
          "text": "每回合第一次移动不消耗移动点。"
        },
        {
          "name": "Electrified Generators",
          "id": "t-mek-augmentarcaneattack",
          "text": "战斗开始时对敌方随从造成 3 伤害。"
        },
        {
          "name": "Arcane Infusion",
          "id": "t-mek-augmentarcanefortress",
          "text": "引导魔法时，当地 Arcane Fortress 每回合强度 +2。"
        },
        {
          "name": "Identity Recalibrators",
          "id": "t-mek-augmentarcanemenace",
          "text": "最低 Menace 变为 0。"
        },
        {
          "name": "Internal Calculator",
          "id": "t-mek-augmentarcanesecret",
          "text": "每 50 回合获得 1 Arcane Knowledge。"
        },
        {
          "name": "Noosphere Connection",
          "id": "t-mek-augment-maxwellistconnection",
          "text": "允许建立 Maxwellist Connection。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Unearthed Fragments",
          "id": "pr-mek-resourceunearthed",
          "text": "可通过 Scavenge for Fragment 取得 Piece。耗尽后进入 Exhausted 状态，恢复到 30 才重新开放采集。强度至少 10 且当地没有 Divine Schema 时，每回合有 2% 概率生成一份。\n位于人类聚居地且统治者是 Mekhanite 时，提供 1.2 的 Prosperity 影响。",
          "initialValue": "100",
          "modifierChange": {
            "natural": "当地没有 A Machine 且强度低于 100 时，每回合 +0.5。",
            "external": "Reveal Fragments 创建。\nScavenge for Fragment 执行期间每回合 −2；Organized Excavations 生效时改为 −1。\nRegenerating Metals 每回合 +5。\nA Machine 每回合 −5。"
          },
          "image": "icon_powerunearth.png"
        },
        {
          "name": "Regenerating Metals",
          "id": "pr-mek-resourceboost",
          "text": "加速当地 Unearthed Fragments 的再生。",
          "initialValue": "25",
          "modifierChange": {
            "natural": "每回合 −1；归零移除。",
            "external": "Regenerating Metals 神力创建。\nBless Fragments 创建。"
          },
          "image": "icon_powerregeneratingmetal.png"
        },
        {
          "name": "Divine Schema",
          "id": "pr-mek-schema",
          "text": "Mekhanite 通过 Obtain Divine Schema 将这里的图纸转为人物持有的 Divine Schema，可用于强化或相关挑战。未觉醒英雄会把它视作 Arcane Secret，但学习结果改为 Awareness。",
          "modifierChange": {
            "natural": "",
            "external": "Reveal Fragments 创建。\nUnearthed Fragments 满足条件时生成。\nMaterial Past 在 Ancient Ruins 定期生成。\nObtain Divine Schema 完成后移除。"
          },
          "image": "icon_schema.png"
        },
        {
          "name": "MEKHANE's Body",
          "id": "pr-mek-body",
          "text": "神体完整度与建造完成度分别计算。Build MEKHANE 每消耗一件 Divine Machine，增加 10% 建造完成度；达到 100% 后可使用 Activation 获胜。\n建造完成度达到 20%、60%、80%、100% 时，世界恐慌各提高 5 个百分点。神体完整度归零会导致失败。",
          "initialValue": "完整度 100；建造完成度 0%",
          "modifierChange": {
            "natural": "",
            "external": "Begin Construction 创建。\nDestroy MEKHANE 每次减少 10 完整度。\nBuild MEKHANE 每次消耗 1 Divine Machine，提高建造完成度 10 个百分点。"
          },
          "image": "icon_mekhane.png"
        },
        {
          "name": "Minor Sect",
          "id": "pr-mek-minorsect",
          "text": "小型教派拥有独立的 Profile，用于吸引英雄调查；强度上限 300。Profile 每回合 +1，最高 100。当地出现 Congregation 后移除。\nTheological Drift 生效且强度至少 100 时，每 10 回合进行一次 40% 概率的扩散检查，向合格邻近聚居地建立新 Minor Sect。",
          "initialValue": "强度 10；Profile 20",
          "modifierChange": {
            "natural": "强度低于 300 时，每回合增加已解封数 ×0.5。",
            "external": "统治者对 Mekhanites 的偏好等级，每回合按该值增减。\nAugmented Population 每回合增加其强度 ×0.1。\nSarkic Population 每回合减少其强度 ×0.1。\nRed Death 每回合 −2。\nFractured Faith 创建。\nFragmented Following、Congregate 移除。\nGrow Sect 每次 +30。\nDisperse Minor Sect 每次 −50；未能彻底移除时，强度重置为 1、Profile 归零。"
          },
          "image": "icon_minorsect.png"
        },
        {
          "name": "Augmented Population",
          "id": "pr-mek-augmentpops",
          "text": "人口逐渐接受机械改造，推动统治者皈依，并降低组建 Mekhanite Army 的费用。\n强度至少 10 且统治者对 Mekhanites 的偏好不为 0 时，每回合产生 Unrest（2 − 强度 ×0.05）与 Death（3 − 强度 ×0.03）；达到 100 时额外减少 Unrest 5。达到 100 后可使当地归属 Church of the Broken God；Mass Appeal 生效时向 Shadow 至少 50% 的邻近人类聚居地扩散。",
          "modifierChange": {
            "natural": "每回合增加已解封数 ×0.1，上限 100。",
            "external": "统治者的 Mekhanites 偏好等级按其数值增减；疯狂统治者额外 +1，Sarkic 统治者额外 −1。\n位于 Alliance 内时每回合 −2。\nClockwork Virus 每回合 +1。\nSpeaker's Sermon 每回合 +2，并在不存在时创建。\nTechnotheistic Parasite 每回合 −5。\nActivation 生效后每回合 +20。"
          },
          "image": "icon_augmentationadv.png"
        },
        {
          "name": "Tower of Change",
          "id": "pr-mek-towerofchange",
          "text": "为 Citadel 配置 Metalsmith，优先选择以此为故乡的普通 Acolyte。达到上限时，所有未专业化的 Mekhanite Acolyte 获得 1 Divine Schema，然后本修正回到 1。",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合增加 max(0, 已解封数 −1) ×0.5。",
            "external": "Towers of Change 建立 Citadel 时创建；失去 Congregation 后移除。"
          },
          "image": "icon_tower.png"
        },
        {
          "name": "Mekhanite Smithing",
          "id": "pr-mek-smithboost",
          "text": "当地组装挑战的 Complexity 减半，XP 奖励倍率提高为 2。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合 −1，归零移除。",
            "external": "Mekhanite Smithing 挑战创建。"
          },
          "image": "icon_brokenChurchSmithing.png"
        },
        {
          "name": "Armed Congregation",
          "id": "pr-mek-smithdanger",
          "text": "英雄针对 Congregation 的调查任务 Danger +10。Militant Following 生效且英雄正在破坏神体时，有概率耗尽本修正并派出 Mekhanite Zealot 攻击该英雄。",
          "modifierChange": {
            "natural": "每回合 −1，归零移除。",
            "external": "Arm Congregation 创建或延长。\nLocal Armories 在 Fortress 中提供。\n派出 Mekhanite Zealot 时归零；失去 Congregation 后移除。"
          },
          "image": "icon_brokenChurchDanger.png"
        },
        {
          "name": "Mechanical Hymns",
          "id": "pr-mek-smithprayer",
          "text": "为 Church of the Broken God 每回合提供 1 Elder Influence。",
          "initialValue": "25",
          "modifierChange": {
            "natural": "每回合 −1，归零移除。",
            "external": "Mechanical Hymns 挑战创建。\nHidden Shrines 在 Holy Site 中提供。\n失去 Congregation 后移除。"
          },
          "image": "icon_brokenchurchshadow.png"
        },
        {
          "name": "Sentinel Presence",
          "id": "pr-mek-sentineldanger",
          "text": "延长英雄针对 Forge 的破坏任务 Complexity。",
          "modifierChange": {
            "natural": "",
            "external": "Sentinel 驻守时提供；失去所关联的 Congregation 后移除。"
          },
          "image": "icon_automaton_sentry.png"
        },
        {
          "name": "Speaker's Sermon",
          "id": "pr-mek-speakersermon",
          "text": "促进当地 Augmented Population，并提高统治者皈依 Mekhanites 的行动倾向。",
          "initialValue": "30",
          "modifierChange": {
            "natural": "每回合 −1，归零移除。",
            "external": "Speaker's Sermon 挑战创建。"
          },
          "image": "icon_orthodoxsermon.png"
        },
        {
          "name": "Maxwellist Connection",
          "id": "pr-mek-connection",
          "text": "把当地人口接入 Noosphere，供 Intelligence 通过 Harvest Information 收集 Piece。\n正常创建时直接处于强度上限；只有强度处于 0 与上限之间时才运行恢复检查。",
          "modifierChange": {
            "natural": "",
            "external": "有相邻 Maxwellist Connection 时，每回合按相邻数量增加；Noosphere 强度至少 100 时，额外增加其强度除以 100 的整数部分。\n无 Infiltration 或没有相邻 Connection 时，当前实现每回合 +5。\nHarvest Information 每次 −50。"
          },
          "image": "iconmekspell6.png"
        },
        {
          "name": "Noosphere",
          "id": "pr-mek-maxwellistwan",
          "text": "供 Maxwellist 法术使用的共享意识。强度上限取决于接入 Maxwellist Connection 的人口；每 200 接入人口降低 1 Arcane Components 的组装材料费用，最低 1。",
          "modifierChange": {
            "natural": "每回合 +1，受接入人口决定的上限限制。",
            "external": "每件现存 Relic、Arcane Relic、Divine Machine 每回合分别 +1。\n每处 Maxwellist Relay 每回合 +1。\nNoosphere 法术消耗其强度；各法术的具体费用见法术条目。\nMaxwellist 库存内的每件 Relic、Arcane Relic、Divine Machine，每回合各额外 +1；该库存非空时，每处 Maxwellist Hub 再提供 +1。\nSignal: Repeating 每回合增加现存连接数量。\nRepeating Signal 每回合增加已解封数。"
          },
          "image": "icon_maxwellistnoosphere.png"
        },
        {
          "name": "Council of Patriarchs",
          "id": "pr-mek-orthodoxcouncil",
          "text": "Cogwork Orthodoxy 的中枢。每 100 强度降低 1 Cogwork Components 的组装材料费用，最低 1；同时影响 Orthodox Legate 属性。\n每回合为各 Forge 增加 min(强度 ×0.015, 4) Production。迁移或破坏导致 Disarray 时暂停这些支援，25 回合后重整。",
          "modifierChange": {
            "natural": "正常状态每回合 +0.5；Disarray 状态在强度大于 1 且低于上限时每回合 −2。",
            "external": "当地储存的每件 Relic，每回合 +1。\n每件现存 Cogwork Relic，每回合 +1；每件 Divine Machine，每回合 +5。\nProduction: Smelt Gold 达到 100 的每处 Forge，每回合 +1。"
          },
          "image": "icon_orthodoxcouncil.png"
        },
        {
          "name": "Production",
          "id": "pr-mek-forgeproduction",
          "text": "Orthodox Forge 的生产进度。Idle 达到 100 后提供 1 Elder Influence；Smelt Metal 产出 1 Piece；Cogwork Military 为 Mekhanite Army 增加 15 额外 HP 上限；Automaton Repairs 为 Automatons 和 Legates 恢复 2 HP。这些产出后归零。\nAutomatons 达到 100 后使相应组装 Complexity 减半；Smelt Gold 达到 100 后为 Council of Patriarchs 提供持续增长。",
          "initialValue": "0",
          "modifierChange": {
            "natural": "Idle、Smelt Metal、Cogwork Military 每回合 +1；Automatons +0.5；Smelt Gold +2；Automaton Repairs +3。",
            "external": "Council of Patriarchs 每回合增加 min(其强度 ×0.015, 4)。\n位于 Unified Church 帝国时每回合 +0.5。\nBoost Production 使当前强度翻倍。\nSabotage Forge Production 每次 −25。"
          },
          "image": "icon_orthodoxrepair.png"
        },
        {
          "name": "The Clockworks",
          "id": "pr-mek-clockworks",
          "text": "通过 Fine 与 Very Fine 挑战批量加工库存组件。每件产物使 Congregation Profile +2；Congregation 消失时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "image": "icon_scpclockworks.png"
        },
        {
          "name": "Clockwork Virus",
          "id": "pr-mek-clockworkvirus",
          "text": "强度达到 100 后向邻近人类聚居地传播。没有 Augmented Population 时，每回合累计损失人口：强度低于 100 时按强度 /450，达到 100 后按强度 /300，累计至整数才扣除，并留下 Clockwork Death；人口耗尽会使地点毁灭。",
          "modifierChange": {
            "natural": "每回合增加 0.1 + 已解封数 ×0.1。",
            "external": "当地有正强度 Plague 时，每回合 +3，并使 Plague −3。\n有 Quarantine 且本修正强度大于 3 时，每回合 −2。\nAugmented Population 每回合增加其强度 ×0.01。\nRusting Metal 一次性 +50，最高达到本修正上限。\nPropagate Clockwork Virus 每次 +30。\nCombat Clockwork Virus 每次 −15。\nBanish Clockwork Virus 每次 −100。\nQuarantine Clockwork Virus 每次 −90。\nSpread Clockwork Virus 在所在地播种。"
          },
          "image": "icon_scpclockworkvirus.png"
        },
        {
          "name": "Clockwork Death",
          "id": "pr-mek-clockworkvirusdead",
          "text": "计作 Death，可被消耗 Death 的机制利用。达到 300 时触发一次 Death 危机并生成 2 Ghasts。",
          "modifierChange": {
            "natural": "每回合 −0.1。",
            "external": "Clockwork Virus 未达到 100 时每回合 +1；达到 100 后每回合 +2；首次产生时为 2。\nBlood and Iron 每次 −25。\nQuarantine Clockwork Virus 每次 +30。"
          },
          "image": "icon_scpclockworkvirusp1.png"
        },
        {
          "name": "A Machine",
          "id": "pr-mek-machine",
          "text": "每回合使当地 Shadow 增加 1 个百分点；强度达到 50、100、200 时，分别提高到 2、3、4 个百分点。达到 50 后，相邻聚居地 Shadow 每回合增加 1 个百分点。",
          "initialValue": "1",
          "modifierChange": {
            "natural": "没有可吞噬的 Unearthed Fragments 时，每回合减少 4 − 已解封数 ×0.5。",
            "external": "Unearthed Fragments 有剩余强度时，每回合增加 2 + 已解封数，并使其强度 −5。\nGrow the Machine 完成时 +30。\nThrow Self In 献祭执行者提高强度。\nEndless Noise 一次性 −100。\nDestroy A Machine 每次 −50；结果小于 0 时移除。"
          },
          "image": "icon_scpamachine.png"
        },
        {
          "name": "Rotbolt",
          "id": "pr-mek-rotbolt",
          "text": "降低非 Mekhanite 地点的 Habitability；达到上限一半后，向所有相邻陆地传播。拥有 Augmented Population 或 Congregation 的地点视作 Mekhanite 地点。",
          "modifierChange": {
            "natural": "每回合增加已解封数 ×0.1。",
            "external": "当地 Unearthed Fragments 强度大于 0 时，每回合额外增加 1 + 已解封数 ×0.5。\nAccelerated Frequency 将强度翻倍。\nSpread Rotbolt 在强度低于 100 时，每回合增加执行者 Lore。\nCombat Local Rotbolt Spread 每次 −50。\nCombat Global Rotbolt Spread 每回合减少执行者 Lore。\n带 Rotbolt Transformation 的人物死在陆地时，已有 Rotbolt 增加人物 HP 上限 ×3；不存在则创建。"
          },
          "image": "icon_scprotbolt.png"
        },
        {
          "name": "Vault Research",
          "id": "pr-mek-vault",
          "text": "Containment Vault 收容 Relics 并研究 Mekhanites。Foundation 生效时，达到 300 可供 Chosen One 执行 Reforge Seals，造成特殊失败。\nMekhanite 统治者接管或 Mekhanite 国家占领后，Vault 被拆除，库存 Relics 以 Item Cache 释放。",
          "modifierChange": {
            "natural": "",
            "external": "每件收容物品每回合 +0.5，上限 300。\nRaid Vault 完成后重置为 1。\nContain Relics 增加库存，从而提高研究速度。"
          },
          "image": "icon_vault.png"
        },
        {
          "name": "Technotheistic Parasite",
          "id": "pr-mek-technovirus",
          "text": "侵害机械改造人口的寄生体。达到 100 后向相邻人类聚居地传播，并损失人口、产生 Death；人口耗尽可毁灭地点。",
          "modifierChange": {
            "natural": "每回合增加 2 − 已解封数 ×0.2。",
            "external": "Augmented Population 每回合增加其强度 ×0.05，同时自身强度 −5。\n无 Augmented Population 时每回合 −2。\nQuarantine 存在且本修正强度大于 3 时，每回合 −2。\n强度至少 100 且当地归属 Church of the Broken God 时，每回合 +0.5。"
          },
          "image": "icon_placeholder.png"
        },
        {
          "name": "Ascension Ritual",
          "id": "pr-mek-sarkic-victory",
          "text": "Grand Karcist 的登神仪式进度。达到 100 时 Sarkics 获胜，玩家立即失败。",
          "modifierChange": {
            "natural": "强度大于 1 时每回合 −1。",
            "external": "Unearth Adytom 创建。\nSarkic Ascension 执行期间每回合增加 Grand Karcist 的 Lore。"
          },
          "image": "icon_sarkicspell1.png"
        },
        {
          "name": "Priority",
          "id": "pr-mek-priority",
          "text": "为自主 Mekhanite 标记组件存放与组装的优先地点。",
          "modifierChange": {
            "natural": "",
            "external": "Prioritize 在当地创建，同时移除其他地点的 Priority；再次施放可取消。"
          },
          "image": "icon_powerpriority.png"
        },
        {
          "name": "Signal",
          "id": "pr-mek-relaysignal",
          "text": "Maxwellist Relay 的广播。激活后 Relay 每回合 Profile +0.2。Fractal 达到 100 时使所有连接地点的 Mekhanite Profile −20；Repeating 每回合为 Noosphere 增加现存连接数量的强度。达到触发阈值的信号归零并继续下一轮。",
          "initialValue": "0",
          "modifierChange": {
            "natural": "Fractal 每回合 +5。",
            "external": "Signal: Fractal、Signal: Repeating 切换模式；Stop the Signal 停止。\nBoost Relay Signal 增加强度 30。\nSabotage Relay Signal 减少强度 100。"
          },
          "image": "icon_powermaxwellist.png"
        },
        {
          "name": "Security Breach",
          "id": "pr-mek-maxwellist-security",
          "text": "当地 Security −5。",
          "initialValue": "30",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Security Breach 法术创建或刷新到 30。"
          },
          "image": "iconmekspell9.png"
        },
        {
          "name": "Magnetic Trap",
          "id": "pr-mek-maxwellisttrap",
          "text": "每回合使当地敌对军队损失 max(1, ⌊Noosphere 接入人口 /20⌋) HP。豁免我方受控军队、Dark Empire、Mekhanite 国家与教团。",
          "modifierChange": {
            "natural": "",
            "external": "Magnetic Disturbance 创建；已有陷阱增加 20 + Noosphere 接入人口的强度。\n每伤害一支军队消耗 10 强度。\n失去 Noosphere 或当地 Infiltration 归零时移除。"
          },
          "image": "iconmekspell7.png"
        },
        {
          "name": "Recent Investigations",
          "id": "pr-mek-hero-exposed",
          "text": "当地 Congregation 每回合增加 0.5 Profile。",
          "initialValue": "25",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Investigate Mekhanites、Investigate Council、统治者 Investigate Congregation 创建。"
          },
          "image": "base-clues.png"
        },
        {
          "name": "Reallocated Resources",
          "id": "pr-mek-reallocate",
          "text": "当地 Prosperity 影响 −0.75。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Reallocate Resources 创建。"
          },
          "image": "base-i_bagOfPoverty.png"
        },
        {
          "name": "Sterilized Land",
          "id": "pr-mek-enviro",
          "text": "每回合有 40% 概率给予统治者 1 Divine Schema。有 Devastation 且低于 90 时每回合增加 1.5；没有时创建强度 1 的 Devastation。",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Sterilize Land 创建。"
          },
          "image": "icon_sterilizedland.png"
        },
        {
          "name": "Mekhanite Infighting",
          "id": "pr-mek-infighting",
          "text": "位于 Mekhanite Kingdom 首都。强度超过 300 后触发教派内战；首都迁移后移除。",
          "modifierChange": {
            "natural": "每回合 +5。",
            "external": "国家处于战争时每回合 −15。\nUnified Church 或 Dark Empire 每回合 −25，并跳过其他常规增长；Activation 后额外 −25。\n境内每处 Minor Sect 每回合 +1；存在 Exile Community 时额外增加 Minor Sect 数量 ×2。\n每个与其他教派并存的分支增加 3×(1−本分支设施数 ×0.1)。\n国土超过 5 处时，每回合额外增加超过部分的数量。"
          },
          "image": "icon_zealot.png"
        },
        {
          "name": "Klavigar Tomb",
          "id": "pr-mek-sarkictomb",
          "text": "Sarkic 的 Insights 采集地，也供 Grand Karcist 搜寻 Adytom。",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合 +0.5。Desecrated 时改为每回合 −2，并暂停其他增长。",
            "external": "每名 Karcist 每回合 +1，每名 Grand Karcist 每回合 +10。\nFind Insights 执行时每回合 −2。\nDesecrate Sarkic Tomb 使其停产；Cleanse Klavigar Tomb 解除亵渎。"
          },
          "image": "icon_subsarkictomb.png"
        },
        {
          "name": "Sarkic Population",
          "id": "pr-mek-sarkic-pops",
          "text": "达到 100 时使统治者皈依 Sarkic，并在 Expanding Cults 生效时向合格相邻聚居地扩散。每回合增加强度 ×0.03 的 Plague Immunity。\n强度至少 10 且统治者对 Sarkics 的偏好非零时，每回合产生 Unrest（2−强度 ×0.05）与 Death（3−强度 ×0.03）。",
          "modifierChange": {
            "natural": "每回合 +1，再减去 min(已解封数 ×0.1,0.5)。",
            "external": "Alliance 每回合 −2。\nSarkic Temple 每回合 +0.5。\n统治者 Sarkics 偏好等级按数值增减；Mekhanite 统治者额外 −1。\nMinor Sect、Augmented Population 各使其每回合 −0.5。\nRed Death、Plague 各使其每回合 +1。\nKarcist's Sermon 每回合 +2，并可创建该修正。"
          },
          "image": "icon_sarkicpop.png"
        },
        {
          "name": "Karcist's Sermon",
          "id": "pr-mek-sarkicsermon",
          "text": "向当地居民传播 Sarkicism，推进 Sarkic Population。",
          "initialValue": "30",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Karcist's Sermon 任务创建。"
          },
          "image": "icon_sarkicsermon.png"
        },
        {
          "name": "Red Death",
          "id": "pr-mek-sarkic-reddeath",
          "text": "不受 Plague Immunity 阻挡。当地没有 Sarkic Temple 且强度至少 50 时，每回合损失 1 人口和 1 防御；人口耗尽后毁灭地点。强度达到上限时，每 10 回合生成一支 30 HP 的 Raging Flesh。",
          "modifierChange": {
            "natural": "",
            "external": "没有 Sarkic Temple 时，每回合增加 min(当地人口,10)，并产生 5 Death。\nDeath 每回合使其 +1，自身被消耗 2。\nPlague 每回合转化 3 强度给 Red Death。\nQuarantine 在 Red Death 大于 3 时每回合 −2。\nClockwork Virus、Rotbolt、A Machine 分别每回合减少其自身强度 ×0.2；Augmented Population 减少其强度 ×0.1。\nActivation 影响范围内每回合 −25。\n生成 Raging Flesh 时 −30。\nQuarantine Red Death 一次性 −90；Banish Red Death −500。"
          },
          "image": "icon_sarkic_fleshthathates.png"
        },
        {
          "id": "pr-mek-maxwellist-repeatingsignal",
          "name": "Repeating Signal",
          "text": "每回合为所有 Noosphere 增加已解封数的强度，同时当地 Relay Profile +0.1。",
          "image": "icon_powermaxwellist.png",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Repeating Signal 挑战创建。"
          },
          "initialValue": "30"
        },
        {
          "id": "base-devastation",
          "name": "Devastation",
          "baseGame": true,
          "image": "base-raid.png",
          "text": "战争与破坏留下的损伤。Prosperity 影响为 −强度 /200，粮食产量乘以 max(0.1,1−强度 /200)；达到 300 时毁灭聚居地。",
          "modifierChange": {
            "natural": "每回合 −0.5。",
            "external": "Rampaging Experiment 每回合 +30。\nSterilized Land 在已有 Devastation 低于 90 时每回合 +1.5；不存在时创建强度 1。\nInstill Order 每次 −25。"
          }
        }
      ]
    },
{
  "id": "locations",
  "title": "地点",
  "items": [
    {
      "id": "place-hook-3591348120-2",
      "name": "聚居地中的 MEKHANE 行动",
      "text": "使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。",
      "baseGame": false
    },
    {
      "name": "Raise Suspicion",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-hero-raisesuspicion",
      "meta": "Command",
      "text": "降低统治者对 Mekhanites 的偏好 1 级。",
      "location": "有人类统治者的聚居地",
      "limit": "英雄厌恶 Mekhanites、个人 Shadow 未满；统治者 Awareness 100%。",
      "statLine": "Complexity: 20\nProfile: 60 + 已解封数 ×20\nMenace: 0\nXP: 36",
      "positiveTags": "Cooperation",
      "negativeTags": "Mekhanites、Religion",
      "image": "base-vendetta.png"
    },
    {
      "name": "Combat Global Rotbolt Spread",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-hero-shrinkrotbolt",
      "meta": "Lore",
      "text": "持续施法期间，每回合使所有陆地 Rotbolt 减少施法者 Lore，同时消耗 2 Geomantic Locus，执行者 Profile +2。",
      "location": "Geomantic Locus",
      "limit": "非 Mekhanite、个人 Shadow 未满，Geomancy 至少 2；当地 Locus 强度大于 0。",
      "statLine": "Complexity: 10\nProfile: 0\nMenace: 0\nXP: 21",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "icon_scprotbolt.png"
    },
    {
      "name": "Establish Connection",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-maxwellist-connection",
      "text": "建立 Maxwellist Connection。",
      "location": "与 <CrossReference name=\"Maxwellist Connection\" href=\"#entry-pr-mek-connection\" /> 修正或下列兴趣点所在地点相邻的陆地：<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" />。",
      "limit": "我方 Agent 或 Living Saint，拥有 Noosphere Connection；目标聚居地完全渗透且尚无连接。",
      "statLine": "Complexity: 15\nProfile: 100\nMenace: 0\nXP: 29",
      "image": "iconmekspell6.png"
    },
    {
      "name": "Establish Congregation",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-buildcongregation",
      "text": "消耗 10 Divine Schema 建立 Mekhanite Congregation。",
      "location": "可渗透的人类聚居地",
      "limit": "我方 Agent；当地合格且未达到 Congregation 上限。",
      "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Holy Transmission",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-increasemekpreference",
      "text": "消耗 Divine Schema，使当地统治者皈依 Mekhanites；统治者 Shadow 与 Word of Mouth 降低费用。",
      "location": "有统治者的人类聚居地",
      "limit": "持有足够 Divine Schema。",
      "statLine": "Complexity: 50\nProfile: 90\nMenace: 0\nXP: 72",
      "image": "icon_wordofmouth.png"
    },
    {
      "name": "Impart Mekhanite Knowledge",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-rulerschema",
      "text": "把 Divine Schema 转交当地统治者。",
      "location": "Mekhanite 统治者所在聚居地",
      "limit": "携带足够 Divine Schema。",
      "statLine": "Complexity: 20\nProfile: 90\nMenace: 0\nXP: 36",
      "image": "icon_wordofmouth.png"
    },
    {
      "name": "Mechanical Salvage",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-ruintopiece",
      "text": "从废墟中取得 1 Piece。",
      "location": "City Ruins",
      "limit": "Mechanical Salvage 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 50\nProfile: 500\nMenace: 0\nXP: 72",
      "image": "icon_powerunearth_orange.png"
    },
    {
      "name": "Blood and Iron",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-deathtopiece",
      "text": "消耗 25 Death，得到 1 Piece。",
      "location": "Death 或 <CrossReference name=\"Clockwork Death\" href=\"#entry-pr-mek-clockworkvirusdead\" /> 至少 25 的地点",
      "limit": "Blood and Iron 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_red.png"
    },
    {
      "name": "Impossible Geometry",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-madnesstopiece",
      "text": "消耗 15 Madness，得到 1 Piece。",
      "location": "Madness 至少 15 的地点",
      "limit": "Impossible Geometry 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_pink.png"
    },
    {
      "name": "Abyssal Ores",
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-deeponestopiececult",
      "text": "Deep One Cult 强度 +15，并取得 1 Piece。",
      "location": "Deep One Cult",
      "limit": "Abyssal Ore 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_green.png"
    },
    {
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-infiltrate",
      "name": "Maxwellist Infiltration",
      "text": "使当地一个兴趣点进入已渗透状态。",
      "image": "/locations/game/infiltrate.png",
      "meta": "Intrigue",
      "baseGame": false,
      "location": "使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。",
      "limit": "仅 Maxwellist Infiltrator。",
      "statLine": "Complexity: 50 + 25 × Security\nProfile: 200\nMenace: 20\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-infiltrateawareness",
      "name": "Maxwellist Disinformation",
      "text": "将当地统治者 Awareness 设为 0%，持续 30 回合。",
      "image": "/locations/game/infiltrate.png",
      "meta": "Intrigue",
      "baseGame": false,
      "location": "使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。",
      "limit": "仅 Maxwellist Infiltrator；当地渗透度 ≥50%。",
      "statLine": "Complexity: 50 + 25 × Security；当地完全渗透时减半\nProfile: 200\nMenace: 20\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-place-hook-3591348120-2--place-task-3591348120-ch-locitopiece",
      "name": "Harvest Information",
      "text": "消耗 30 Geomantic Locus，以 Piece 填满物品栏空位。",
      "image": "/locations/mod/God_MEKHANE.iconmekspell3.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "Geomantic Locus 至少 30 的地点",
      "limit": "仅 Intelligence。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21"
    },
    {
      "id": "place-hook-3591348120-3",
      "name": "人类聚居地的 Mekhanite 宣讲",
      "text": "使用 MEKHANE 时加入 Speaker 的宣讲行动。\n\n对应地点 / 兴趣点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "name": "Speaker's Sermon",
      "id": "god-place-place-hook-3591348120-3--place-task-3591348120-ch-mek-increasemekpreferencespeaker",
      "meta": "Other",
      "text": "创建 Speaker's Sermon，按当地人口获得最多 3 Divine Schema。",
      "location": "有统治者的人类聚居地",
      "limit": "仅 Speaker。",
      "statLine": "Complexity: max(5, 30 − 统治者 Shadow 百分点 ×0.25)\nProfile: 50\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "icon_orthodoxsermon.png"
    },
    {
      "id": "place-hook-3591348120-4",
      "name": "城市的 Containment Vault 建造",
      "text": "使用 MEKHANE 且启用 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 挑战选项时加入；执行者须符合英雄建造条件。\n\n对应地点 / 兴趣点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "id": "god-place-place-hook-3591348120-4--place-task-3591348120-ch-mek-vault-hero-create",
      "name": "Create Containment Vault",
      "text": "使用携带的 Relic 建立 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />，并将它存入。",
      "image": "/locations/mod/God_MEKHANE.icon_vault.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />",
      "limit": "世界恐慌 ≥25%，Alliance 存在；执行者携带 Relic。",
      "statLine": "Complexity: 30\nProfile: 90 + 世界恐慌 / 4\nMenace: 0\nXP: 49",
      "positiveTags": "无",
      "negativeTags": "Shadow、Mekhanites"
    },
    {
      "id": "place-hook-3591348120-5",
      "name": "Orc Camp 的 MEKHANE 转化",
      "text": "使用 MEKHANE，具有对应 Orc 教义，且营地有 Orcish Industry 时加入。\n\n对应地点 / 兴趣点\n<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/loc_evil_orc.png"
    },
    {
      "name": "Orcish Tools",
      "id": "god-place-place-hook-3591348120-5--place-task-3591348120-ch-industrytopiece",
      "text": "Orcish Industry +10，并得到 1 Piece。",
      "location": "已渗透 Orc Camp，Orcish Industry 至少 10",
      "limit": "Orcish Tools 生效；物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_yellow.png"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-place-hook-3591348120-2",
      "name": "聚居地中的 MEKHANE 行动",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-2"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-hero-raisesuspicion",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-hero-shrinkrotbolt"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-maxwellist-connection",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-buildcongregation",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-increasemekpreference",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-rulerschema",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-ruintopiece",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-deathtopiece",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-madnesstopiece",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-deeponestopiececult"
          ]
        },
        {
          "title": "自主单位任务",
          "entryIds": [
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-infiltrate",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-mek-infiltrateawareness",
            "god-place-place-hook-3591348120-2--place-task-3591348120-ch-locitopiece"
          ]
        }
      ]
    },
    {
      "id": "god-place-place-hook-3591348120-3",
      "name": "人类聚居地的 Mekhanite 宣讲",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-3"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-place-hook-3591348120-3--place-task-3591348120-ch-mek-increasemekpreferencespeaker"
          ]
        }
      ],
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "id": "god-place-place-hook-3591348120-4",
      "name": "城市的 Containment Vault 建造",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-4"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-place-hook-3591348120-4--place-task-3591348120-ch-mek-vault-hero-create"
          ]
        }
      ],
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "id": "god-place-place-hook-3591348120-5",
      "name": "Orc Camp 的 MEKHANE 转化",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-5"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-place-hook-3591348120-5--place-task-3591348120-ch-industrytopiece"
          ]
        }
      ],
      "image": "/locations/game/loc_evil_orc.png"
    }
  ]
},
{
  "id": "points-of-interest",
  "title": "兴趣点",
  "items": [
    {
      "name": "Mekhanite Congregation",
      "id": "sub-mek-congregation",
      "text": "组件仓库与基础组装场所。具有独立 Profile 与最低 Profile；组装、调查和隐藏行动会改变它们。可专业化为 Citadel、Forge 或 Maxwellist Relay。\n\n出现方式\n<CrossReference name=\"Congregate\" href=\"#entry-p-mek-congregate\" meta=\"神力\" text=\"建立 Congregation，并产生一名普通 Acolyte。第一次同时建立 Church of the Broken God、生成 The Supplicant，将 Agent 上限从 0 提高到 2；首次免费，此后每次消耗 1。\n当地可渗透设施全部完成渗透，普通 Temple 被移除，已有 Minor Sect 被移除。Congregation 数量上限为 2 + 已解封数，并受相应教义增加。\" image=\"./mekhane/icon_subcongregation.png\" /> 神力或 Build Congregation 建立。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />、<CrossReference name=\"除Abyssal外通用\" href=\"#god-place-mekhane-common-non-abyssal\" meta=\"共用行动\" text=\"除 Abyssal Congregation 外的共用挑战与英雄任务；普通组装两项仅限 Congregation、Orcish Congregation 和 Citadel。\" />。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Hide Mekhanites",
      "id": "god-place-location-sub-mek-congregation--ruler-act-mek-convertbasehidecongregation",
      "text": "消耗 3 Divine Schema，使 Congregation Profile −25。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "统治者喜好 Mekhanites，当前 Profile 高于最低值；不在 Mekhanite Kingdom 内。",
      "time": "10 回合",
      "positiveTags": "Mekhanites",
      "negativeTags": "Gold",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Dismantle Congregation",
      "id": "god-place-location-sub-mek-congregation--ruler-act-mek-awaredestroycongregation",
      "text": "消耗 100 Gold，拆除 Congregation。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 100，对 Mekhanites 的偏好不高于 0，Congregation Profile 至少 50。",
      "time": "15 回合",
      "positiveTags": "Combat",
      "negativeTags": "Gold、Mekhanites",
      "image": "icon_powerfalseimage.png"
    },
    {
      "name": "Expose Congregation",
      "id": "god-place-location-sub-mek-congregation--ruler-act-mek-awareexposecongregation",
      "text": "消耗 150 Gold，当前 Profile −20，最低 Profile +10。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 150，对 Mekhanites 的偏好不高于 0，当前 Profile 高于最低值。",
      "time": "10 回合",
      "positiveTags": "Combat",
      "negativeTags": "Gold、Mekhanites、Shadow"
    },
    {
      "name": "Investigate Congregation",
      "id": "god-place-location-sub-mek-congregation--ruler-act-mek-awareinvestigatecongregation",
      "text": "消耗 100 Gold，创建 Recent Investigations。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 100，世界恐慌至少 10%，Congregation Profile 至少 5，对 Mekhanites 的偏好不高于 0；没有正在进行的调查修正。",
      "time": "10 回合",
      "positiveTags": "无",
      "negativeTags": "Mekhanites"
    },
    {
      "name": "Abyssal Congregation",
      "id": "sub-mek-congregationabyssal",
      "text": "Abyssal Ore 达到最高 Elder Influence 后在 Abyssal City 中建立。用于保存组件，不累积 Profile。\n\n出现方式\nAbyssal Ore 最高 Elder Influence 下，在合格 <CrossReference name=\"Abyssal City\" href=\"?page=locations#entry-location-set-deeponeabyssalcity\" meta=\"地点\" text=\"地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。\n\n出现方式\nDeep One Sanctum 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。\n\n可能配置的兴趣点\nAbyssal Armory、Abyssal Cathedral、Abyssal City。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_evil_deepOneCity.png\" target=\"_blank\" /> 中生成。\n\n可出现地点\n<CrossReference name=\"Abyssal City\" href=\"?page=locations#entry-location-set-deeponeabyssalcity\" meta=\"地点\" text=\"地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。\n\n出现方式\nDeep One Sanctum 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。\n\n可能配置的兴趣点\nAbyssal Armory、Abyssal Cathedral、Abyssal City。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_evil_deepOneCity.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Orcish Congregation",
      "id": "sub-mek-congregationorc",
      "text": "Orcish Tools 达到最高 Elder Influence 后，在已渗透 Orc Fortress 中建立；库存 Relics 强化当地防御与军队。\n\n出现方式\n<CrossReference name=\"Orcish Tools\" href=\"#entry-ch-industrytopiece\" /> 最高 Elder Influence 下，在合格、已渗透的 Orc <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" /> 中生成。\n\n可出现地点\n<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />、<CrossReference name=\"除Abyssal外通用\" href=\"#god-place-mekhane-common-non-abyssal\" meta=\"共用行动\" text=\"除 Abyssal Congregation 外的共用挑战与英雄任务；普通组装两项仅限 Congregation、Orcish Congregation 和 Citadel。\" />。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Orcish Tools",
      "id": "god-place-location-sub-mek-congregationorc--place-task-3591348120-ch-industrytopiece",
      "text": "Orcish Industry +10，并得到 1 Piece。",
      "location": "已渗透 Orc Camp，Orcish Industry 至少 10",
      "limit": "Orcish Tools 生效；物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_yellow.png"
    },
    {
      "name": "Citadel",
      "id": "sub-mek-congregationtower",
      "text": "由 Towers of Change 建立，保留库存与 Profile。Tower of Change 培育 Metalsmith，并向普通 Acolyte 分发 Divine Schema。\n\n出现方式\n<CrossReference name=\"Towers of Change\" href=\"#entry-p-mek-towerofchange\" meta=\"神力\" text=\"把 Congregation 改为 Citadel，保留库存、Profile 与最低 Profile。以此为故乡的普通 Acolyte 转为 Metalsmith，改为提供教派增益；Citadel 支持向普通 Acolyte 分发 Divine Schema。\n尚未解锁 The Clockworks 时，使其解锁回合提前 10。\" image=\"./mekhane/icon_tower.png\" /> 替换已有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />、<CrossReference name=\"除Abyssal外通用\" href=\"#god-place-mekhane-common-non-abyssal\" meta=\"共用行动\" text=\"除 Abyssal Congregation 外的共用挑战与英雄任务；普通组装两项仅限 Congregation、Orcish Congregation 和 Citadel。\" />。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Exile Community",
      "id": "sub-mek-exiles",
      "text": "由 Fragmented Following 建立。Exile 在此实验，制造 Unorthodox Piece 和具有自主破坏能力的实验体。\n\n出现方式\n<CrossReference name=\"Fragmented Following\" href=\"#entry-p-mek-exiles\" meta=\"神力\" text=\"建立 Mekhanite Exiles，移除当地 Minor Sect 及普通 Temple。Exile 通过实验制造灾害并干扰其他地点。\" image=\"./mekhane/icon_subexiles.png\" /> 在合格地点建立。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "image": "icon_subexiles.png"
    },
    {
      "name": "Unorthodox Experiment",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exileexperiment",
      "meta": "Lore",
      "text": "尝试产生 Unorthodox Piece，供实验组装使用。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "仅 Mekhanite Exile。",
      "statLine": "Complexity: 10\nProfile: 50\nMenace: 0\nXP: 21",
      "positiveTags": "Shadow、Discord",
      "negativeTags": "无",
      "image": "icon_subexiles.png"
    },
    {
      "name": "Experiment with Cogworks",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assembledevastation",
      "text": "消耗 3 Unorthodox Piece，制造 Rampaging Experiment；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment.png"
    },
    {
      "name": "Experiment with the Arcane",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assemblemadness",
      "text": "消耗 3 Unorthodox Piece，制造 Maddening Machine；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment3.png"
    },
    {
      "name": "Experiment with Shadow",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assembleshadow",
      "text": "消耗 3 Unorthodox Piece，制造 False Image；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment2.png"
    },
    {
      "name": "Investigate Exiles",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-hero-investigateexile",
      "meta": "Intrigue",
      "text": "Profile +25；有 5% 概率使英雄对 Mekhanites 的偏好降低。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "Awareness 超过 50%，设施 Profile 低于 50。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 0\nXP: 42",
      "positiveTags": "无",
      "negativeTags": "Mekhanites、Discord、Religion",
      "image": "icon_minorsect.png"
    },
    {
      "name": "Raid Exiles",
      "id": "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-hero-raidexile",
      "meta": "Intrigue",
      "text": "Profile 超过 100 时进行摧毁判定，成功后移除设施并重置当地 Shadow 与 Infiltration；未摧毁时 Profile +25。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "个人 Shadow 未满，设施 Profile 至少 50。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 0\nXP: 42",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites、Discord、Religion",
      "image": "icon_minorsect.png"
    },
    {
      "name": "Orthodox Forge",
      "id": "sub-mek-forge",
      "text": "由 Standardization 建立的 Cogwork Orthodoxy 制造中心，开放 Clockwork Mechanism、Cogwork Relic 与 Automatons，并具有 Production。\n\n出现方式\n<CrossReference name=\"Standardization\" href=\"#entry-p-mek-spreadorthodoxy\" meta=\"神力\" text=\"把 Congregation 改为 Forge，保留库存、Profile 与最低 Profile，以生产 Cogwork Components 与 Automatons 为主。相关 Acolyte 转为 Orthodox Legate。\n首次建立 Cogwork Orthodoxy；缺少有效 Council of Patriarchs 时在目标创建 Council。尚未解锁 Mechanical Choir 时，使其解锁回合提前 10。\" image=\"./mekhane/icon_subforge.png\" /> 替换已有 Congregation。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />、<CrossReference name=\"除Abyssal外通用\" href=\"#god-place-mekhane-common-non-abyssal\" meta=\"共用行动\" text=\"除 Abyssal Congregation 外的共用挑战与英雄任务；普通组装两项仅限 Congregation、Orcish Congregation 和 Citadel。\" />。\n其中 Assemble Mechanism、Assemble Relic 由本据点的 Cogwork 组装行动替代。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Assemble Cogwork Mechanism",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkmechanism",
      "text": "3 Piece 合成 1 Clockwork Mechanism；Congregation Profile +4。Council of Patriarchs 可降低材料费用。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemcogworkmechanism.png"
    },
    {
      "name": "Gild Basic Mechanism",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkmechanismconversion",
      "text": "将 1 Mechanism 转为 1 Clockwork Mechanism，另支付 Gold；Congregation Profile +3。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料与 Gold 足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemcogworkmechanism.png"
    },
    {
      "name": "Assemble Cogwork Relic",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkrelic",
      "text": "3 Clockwork Mechanism 合成 1 Cogwork Relic；Congregation Profile +10，并获得 Divine Schema。Council of Patriarchs 可降低材料费用。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 0\nXP: 49",
      "image": "icon_itemcogworkrelic.png"
    },
    {
      "name": "Assemble Gatherer",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-basic",
      "text": "组装 Gatherer。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Gatherer 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton.png"
    },
    {
      "name": "Assemble Sentinel",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-sentinel",
      "text": "组装 Sentinel。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Sentinel 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton_sentry.png"
    },
    {
      "name": "Assemble Speaker",
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-speaker",
      "text": "组装 Speaker。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Speaker 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton_speaker.png"
    },
    {
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-councilschema",
      "name": "Centralized Knowledge",
      "text": "花费 Gold 获得 1 Divine Schema。",
      "image": "/locations/mod/God_MEKHANE.icon_orthodoxschema.png",
      "meta": "固定进度",
      "baseGame": false,
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "玩家人物，携带足够 Gold。",
      "statLine": "Complexity: 5\nProfile: 40\nMenace: 5\nXP: 12"
    },
    {
      "id": "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-councilhide",
      "name": "Relocate Council",
      "text": "消耗 Divine Schema，把 Council of Patriarchs 及其库存搬到这里。",
      "image": "/locations/mod/God_MEKHANE.icon_orthodoxdistract.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "玩家人物；Council 当前不在此地，且有足够 Divine Schema。",
      "statLine": "Complexity: 30\nProfile: 40\nMenace: 5\nXP: 49"
    },
    {
      "id": "location-sub-mek-mekhane",
      "name": "MEKHANE’s Body",
      "text": "MEKHANE 的建造地点，只接受 Divine Machines 推进重建。兴趣点自身不提供挑战；交付由携带组件的人物仪式处理。\n\n出现方式\n<CrossReference name=\"Begin Construction\" href=\"#entry-p-mek-body\" meta=\"神力\" text=\"建立 MEKHANE's Body 与对应设施，开始重组神体。此后英雄可以直接损伤神体，神体被摧毁会导致特殊失败。\" image=\"./mekhane/icon_powermekhane.png\" /> 放在合格地点；空地先创建野外兴趣点载体并清除默认遗迹。\n\n可出现地点\n<CrossReference name=\"野外兴趣点地点\" href=\"?page=locations#entry-location-set-minorother\" meta=\"地点\" text=\"用于承载遗迹、奇观与女巫据点。普通构造时带 Ancient Ruins；若用于生成奇观或女巫据点，生成器会清除这份默认遗迹后放入实际兴趣点。\n\n出现方式\n未占用的非海洋地点可生成 Ancient Ruins；地图生成器另选址安放奇观与女巫据点。\n\n可能配置的兴趣点\nAncient Ruins、Temple、Heart of the Forest、Coven of Witches、Brother of Sleep、The Entrance、Primal Font。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_minor_castle.png\" target=\"_blank\" />、<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。",
      "image": "/locations/mod/God_MEKHANE.icon_mekhane.png",
      "baseGame": false
    },
    {
      "name": "Maxwellist Relay",
      "id": "sub-mek-relay",
      "text": "由 Apotheosis 建立，开放 Arcane Components 与 Constructs，并通过 Signal 支援连接网络。\n\n出现方式\n<CrossReference name=\"Apotheosis\" href=\"#entry-p-mek-spreadmaxwellism\" meta=\"神力\" text=\"把 Congregation 改为 Maxwellist Relay，保留库存、Profile 与最低 Profile，以 Arcane Components、Constructs 和 Maxwellist 法术为主。相关 Acolyte 转为 Living Saint。\n首次建立 Maxwellism，并创建主 Maxwellist Noosphere。\" image=\"./mekhane/icon_subrelay.png\" /> 替换已有 Congregation。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：<CrossReference name=\"通用\" href=\"#god-place-mekhane-common\" meta=\"共用行动\" text=\"六种据点共用的组件储存、取出及祈祷行动。\" />、<CrossReference name=\"除Abyssal外通用\" href=\"#god-place-mekhane-common-non-abyssal\" meta=\"共用行动\" text=\"除 Abyssal Congregation 外的共用挑战与英雄任务；普通组装两项仅限 Congregation、Orcish Congregation 和 Citadel。\" />。\n其中 Assemble Mechanism、Assemble Relic 由本据点的 Arcane 组装行动替代。",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Assemble Arcane Mechanism",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanemechanism",
      "text": "3 Piece 合成 1 Arcane Mechanism；Congregation Profile +4。Noosphere 可降低材料费用。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemarcanemechanism.png"
    },
    {
      "name": "Defragment Basic Mechanism",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanemechanismconversion",
      "text": "1 Mechanism 转为 1 Arcane Mechanism；Congregation Profile +3。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemarcanemechanism.png"
    },
    {
      "name": "Assemble Arcane Relic",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanerelic",
      "text": "3 Arcane Mechanism 合成 1 Arcane Relic；Congregation Profile +10，并获得 Divine Schema。Noosphere 可降低材料费用。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 0\nXP: 49",
      "image": "icon_itemarcanerelic.png"
    },
    {
      "name": "Calculate Secret",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanesecret",
      "text": "消耗 3 Divine Schema，获得 1 Arcane Knowledge。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "持有足够 Divine Schema。",
      "statLine": "Complexity: 40\nProfile: 0\nMenace: 0\nXP: 60",
      "image": "iconmekspell2.png"
    },
    {
      "name": "Assemble Infiltrator",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-mek-maxwellist-infiltrator",
      "text": "组装 Infiltrator。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Infiltrator 数)。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Living Saint；材料足够。",
      "statLine": "Complexity: 30\nProfile: 200\nMenace: 5\nXP: 49",
      "image": "icon_construct_infiltrator.png"
    },
    {
      "name": "Assemble Intelligence",
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-mek-maxwellist-intelligence",
      "text": "组装自主 Intelligence。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Intelligence 数)。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Living Saint；材料足够。",
      "statLine": "Complexity: 40\nProfile: 20\nMenace: 0\nXP: 60",
      "image": "icon_construct_intelligence.png"
    },
    {
      "id": "god-place-location-sub-mek-relay--place-task-3591348120-ch-transferarcanerelics",
      "name": "Transfer Arcane Relics",
      "text": "把其他 Congregation 库存中的 Arcane Relics 转移到此 Relay。",
      "image": "/locations/mod/God_MEKHANE.icon_itemarcanerelic.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "玩家控制的 Mekhanite。",
      "statLine": "Complexity: 10\nProfile: 90\nMenace: 0\nXP: 21"
    },
    {
      "name": "Flesh That Hates",
      "id": "sub-mek-sarkicfleshthathates",
      "text": "Unleash the Red Death 建立的活体设施，产生 Red Death，并能孕育 Raging Flesh。\n\n出现方式\n<CrossReference name=\"Unleash the Red Death\" href=\"#entry-ch-mek-sarkicreddeath\" /> 建立，后可由 Raging Flesh 在合格聚居地传播。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "image": "icon_sarkic_fleshthathates.png"
    },
    {
      "name": "Unleash the Red Death",
      "id": "god-place-location-sub-mek-sarkicfleshthathates--place-task-3591348120-ch-mek-sarkicreddeath",
      "meta": "Command",
      "text": "消耗 20 Sarkic Insights，向世界释放 The Flesh That Hates 和 Red Death。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist，Deathless Empire 已成立且此前没有释放。",
      "statLine": "Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)\nProfile: 200\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_fleshthathates.png"
    },
    {
      "name": "Sarkic Temple",
      "id": "sub-mek-sarkictemple",
      "text": "Sarkic 自主人物的活动中心，提供晋升、研究与扩张任务。具有独立 Profile；可通过调查与曝光再进行摧毁。\n\n出现方式\nSarkic 初始据点、建殿行动、宗教扩张与 Ritual Power 扩展流程均可建立。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "image": "icon_sarkicpresence.png"
    },
    {
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicheroinvestigate",
      "name": "Investigate Sarkics",
      "text": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。",
      "image": "/locations/game/clues.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 0\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "positiveTags": "Danger",
      "negativeTags": "Disease、Sarkics"
    },
    {
      "name": "Investigate Sarkics",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicagentinvestigate",
      "text": "Sarkic Temple Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 0\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-clues.png"
    },
    {
      "name": "Expose Sarkics",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicagentexpose",
      "text": "Temple Profile +30。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent；Profile 低于 100。",
      "statLine": "Complexity: 40\nProfile: 90 + 已解封数 ×20 + Sarkic Temple Profile\nMenace: 0\nXP: 60",
      "image": "icon_sarkicspell2.png"
    },
    {
      "name": "Destroy Sarkic Temple",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicdestroytemple",
      "text": "摧毁 Sarkic Temple。",
      "location": "Profile 达到 100 的 <CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Killing Blows 生效；Mekhanite，排除 Automaton。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 90\nMenace: 0\nDanger: 30\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-war.png"
    },
    {
      "name": "Divert Attention",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkichidetemple",
      "meta": "Intrigue",
      "text": "消耗 3 Sarkic Insights，Temple Profile −15。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Sarkic 人物；Counter-Infiltration 会阻止降低 Profile。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkichide.png"
    },
    {
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicconvertsecrets",
      "name": "Imbue Knowledge",
      "text": "消耗 Sarkic Insights，增加 Sarkic 教团的 Human Influence。",
      "image": "/locations/mod/God_MEKHANE.icon_sarkic1.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "执行者信奉 Sarkicism；影响力尚未达到修改教义所需数值，相关教义允许使用。",
      "statLine": "Complexity: 15\nProfile: 50\nMenace: 0\nXP: 29",
      "positiveTags": "Sarkics",
      "negativeTags": "无"
    },
    {
      "name": "Karcist Ascension",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkickarcist",
      "meta": "Lore",
      "text": "使选定的 Sarkic Cultist 晋升为 Karcist；Temple Profile +10。消耗 Sarkic Insights：当前没有 Karcist 时为 1，否则为现存 Karcist 数 ×10。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Karcist Ascension 生效；仅教团选定的继任者，Insights 足够。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicKarcist.png"
    },
    {
      "name": "Mutate",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicmutate",
      "meta": "Lore",
      "text": "消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Applied Mutations 生效，已有突变总等级低于人物等级。",
      "statLine": "Complexity: 10\nProfile: 200\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicpop.png"
    },
    {
      "name": "Sarkic Initiation",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicrecruit",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，招募 Sarkic Cultist。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Karcist。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_acolyte1sf.png"
    },
    {
      "name": "Recruit Sarkic Initiate Minion",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkic-recruitminion",
      "meta": "Command",
      "text": "消耗 3 Sarkic Insights，招募 Sarkic Initiate 随从。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Sarkic 人物。",
      "statLine": "Complexity: 3\nProfile: 90\nMenace: 0\nXP: 8",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_cultist.png"
    },
    {
      "name": "Convert Ruler",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicpreference",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，使统治者皈依 Sarkic。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> 或 <CrossReference name=\"Sarkic Population\" href=\"#entry-pr-mek-sarkic-pops\" />",
      "limit": "Sarkic 人物，目标符合转化条件。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicconvert.png"
    },
    {
      "name": "Karcist's Sermon",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicsermon",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，创建 Karcist's Sermon。",
      "location": "有统治者的人类聚居地",
      "limit": "Karcist；目标不在 Alliance，且尚未完全渗透或完全 Enshadowed。",
      "statLine": "Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)\nProfile: 200\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicsermon.png"
    },
    {
      "name": "Unleash the Red Death",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicreddeath",
      "meta": "Command",
      "text": "消耗 20 Sarkic Insights，向世界释放 The Flesh That Hates 和 Red Death。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist，Deathless Empire 已成立且此前没有释放。",
      "statLine": "Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)\nProfile: 200\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_fleshthathates.png"
    },
    {
      "name": "Root Out Infiltration",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkic-security",
      "meta": "Intrigue",
      "text": "消耗 10 Sarkic Insights，清除当地 Infiltration。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> 或 <CrossReference name=\"Sarkic Population\" href=\"#entry-pr-mek-sarkic-pops\" />",
      "limit": "Karcist；地点已有渗透。",
      "statLine": "Complexity: 25\nProfile: 500\nMenace: 0\nXP: 42",
      "positiveTags": "Sarkics",
      "negativeTags": "Mekhanites",
      "image": "icon_sarkicshadow.png"
    },
    {
      "name": "Form Deathless Empire",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicempire",
      "meta": "Command",
      "text": "建立 Deathless Empire，吸纳 Sarkic 地区并可能引起内战。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist。",
      "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicempire.png"
    },
    {
      "name": "Grand Karcist Ascension",
      "id": "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicgrandkarcist",
      "meta": "Command",
      "text": "使 Karcist 晋升为 Grand Karcist。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist 教义生效，尚无已选定的最高领袖。需要至少 15 Sarkic Insights；完成函数没有扣除该资源。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "base-deepOnes.png"
    },
    {
      "name": "Containment Vault",
      "id": "sub-mek-vault",
      "text": "英雄把夺取的 Relics 送来收容，推动 Vault Research；Foundation 启用后可发展为重新封印 MEKHANE 的威胁。\n\n出现方式\n由知情统治者、携带 Relic 的英雄或 MEKHANE 的对应开局选项建立；主要位于合格国家的首都。\n\n可出现地点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />。\n改建或覆灭后是否保留，还受对应流程限制。",
      "image": "icon_vault.png"
    },
    {
      "name": "Contain Relics",
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-hero-storerelics",
      "meta": "Other",
      "text": "把携带的 Relics 放入 Vault，增加其研究速度。",
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "英雄携带可收容的 Relic。",
      "statLine": "Complexity: 3\nProfile: 90 + 世界恐慌百分点 ×0.25\nMenace: 0\nXP: 8",
      "positiveTags": "无",
      "negativeTags": "Mekhanites",
      "image": "icon_vault.png"
    },
    {
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-hero-learn",
      "name": "Study Enemy",
      "text": "获得 Specialist: Mekhanite。",
      "image": "/locations/mod/God_MEKHANE.icon_brokenchurchshadow.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "世界恐慌 ≥50%；执行者 Awareness ≥50%，不是 Mekhanite 或 Biomechanical，尚无该特质。",
      "statLine": "Complexity: 3\nProfile: 90 + 世界恐慌 / 4\nMenace: 0\nXP: 8",
      "positiveTags": "Co-Operation",
      "negativeTags": "Shadow、Mekhanites"
    },
    {
      "name": "Raid Vault",
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-raid",
      "text": "夺回库存中的 Relics，并将 Vault Research 重置为 1。",
      "location": "已渗透的 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Mekhanite，排除 Automaton；物品栏有空位。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 90\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-raid.png"
    },
    {
      "id": "god-place-location-sub-mek-vault--place-task-base-ch-infiltrate",
      "name": "Infiltrate",
      "text": "渗透一个兴趣点，解锁依赖它的行动。",
      "image": "/locations/game/infiltrate.png",
      "meta": "Intrigue",
      "baseGame": true,
      "location": "<CrossReference name=\"Catacombs\" href=\"?page=points-of-interest#entry-location-sub-catacombs\" meta=\"兴趣点\" text=\"当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。\n\n出现方式\n普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/catacombs.png\" target=\"_blank\" />、<CrossReference name=\"Holy Site / Desecrated Holy Site\" href=\"?page=points-of-interest#entry-location-sub-cathedral\" meta=\"兴趣点\" text=\"未被亵渎时提供 Consecrate、Desecrate Holy Site 与 Cleanse Own Soul；仍可提供适用的 Blasphemous Rituals。\n被亵渎后每回合增加当地 Shadow 1%，最高 100%。Dark Empire 会使其进入亵渎状态；Ophanim 控制会解除该状态；亵渎的圣所在 Alliance 中每回合增加 2 Menace。\n\n出现方式\n小型人类聚居地的随机候选；附近已有 Holy Site 时，不加入新地点的候选池。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/cathedral.png\" target=\"_blank\" />、<CrossReference name=\"City Palace\" href=\"?page=points-of-interest#entry-location-sub-city\" meta=\"兴趣点\" text=\"城市的政治中心。除 Infiltrate、Enshadow、招募与训练外，按国家首都、Alliance、政治不稳定等条件提供外交、Conclave、Dark Coronation 等任务。\n随从招募：Sellsword 供双方招募；Knight 通常属于英雄招募，Dark Empire 或 Ophanim Theocracy 中转为黑暗阵营招募。统治者 Shadow <50%、Awareness >90% 时，另加入英雄的 Paladin 招募。\n\n出现方式\nCity 创建时固定配置。\n\n可出现地点\nCity。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/cityCentre.png\" target=\"_blank\" />、<CrossReference name=\"Docks\" href=\"?page=points-of-interest#entry-location-sub-docks\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，并提供 Malign Catch、Plague Ships 与渗透。\n\n出现方式\n沿海 City 创建时固定配置。\n\n可出现地点\nCity。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/docks.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=points-of-interest#entry-location-sub-elvencity\" meta=\"兴趣点\" text=\"精灵城市的中心兴趣点，提供渗透与训练，以及符合首都、国际关系和政治不稳定条件的外交任务。\n\n出现方式\nElven City 创建时固定配置。\n\n可出现地点\nElven City。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/cityCentre.png\" target=\"_blank\" />、<CrossReference name=\"Farming Community / Mushroom Farm\" href=\"?page=points-of-interest#entry-location-sub-farms\" meta=\"兴趣点\" text=\"粮食生成倍率为 2。位于地下时名称变为 Mushroom Farm；还可渗透。\n\n出现方式\n小型人类聚居地的随机候选；Escamrak 创建部分 Living Settlement 时也会加入。\n\n可出现地点\n小型人类聚居地、Living Settlement。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/farms.png\" target=\"_blank\" />、<CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" />、<CrossReference name=\"Gold Mine\" href=\"?page=points-of-interest#entry-location-sub-goldmine\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，并每回合给当地统治者 1 Gold。\n\n出现方式\n矮人城市或据点的随机候选。\n\n可出现地点\nDwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/orcMines.png\" target=\"_blank\" />、<CrossReference name=\"Seat of Holy Order\" href=\"?page=points-of-interest#entry-location-sub-holyordercapital\" meta=\"兴趣点\" text=\"教团的权力中心。继承 Temple 的任务，额外提供 Enshadow 与满足教义条件的 The Hunger’s Promise。为当地提供 2 Security 加成。\n\n出现方式\n地图生成教团时安放，通常替换所在地第一个兴趣点；该地点也成为教团的政治据点。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/holyOrderSeat.png\" target=\"_blank\" />、<CrossReference name=\"Library\" href=\"?page=points-of-interest#entry-location-sub-library\" meta=\"兴趣点\" text=\"每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 Weaken Iastur。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/library.png\" target=\"_blank\" />、<CrossReference name=\"Market\" href=\"?page=points-of-interest#entry-location-sub-market\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，配置 3 个商品购买槽。商品由 Buy Item 的刷新逻辑决定，Prosperity 影响物品品质；渗透后可 Force Restock。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/market.png\" target=\"_blank\" />、<CrossReference name=\"Vast Sewers\" href=\"?page=points-of-interest#entry-location-sub-sewers\" meta=\"兴趣点\" text=\"城市地下管网。渗透后可传播 Plague，并招募此处配置的 Vermin。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/sewers.png\" target=\"_blank\" />、<CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/temple.png\" target=\"_blank\" />、<CrossReference name=\"Cave Fortress\" href=\"?page=points-of-interest#entry-location-sub-undergroundfort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限。\n\n出现方式\n人类向地下建立殖民据点时配置；该流程最多保留规定数量的其他兴趣点后加入本堡垒。\n\n可出现地点\nCity、小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" />、<CrossReference name=\"Coven of Witches\" href=\"?page=points-of-interest#entry-location-sub-witchcoven\" meta=\"兴趣点\" text=\"可渗透的野外女巫据点，防御加成 50。渗透后可利用 Enshadow、Dark Worship 以及 Crow 招募；Menace 增长可能引来人类军队摧毁兴趣点。\n\n出现方式\n采用旧式女巫据点生成方式时放入野外兴趣点地点；宗教模式下的女巫 Temple 是另一种实现。\n\n可出现地点\n野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/coven.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Fortress\" href=\"?page=points-of-interest#entry-location-sub-dwarffortress\" meta=\"兴趣点\" text=\"Community Library 为矮人殖民引入的堡垒，沿用 Fortress 的渗透与防御能力。\n\n出现方式\nTask_BuildSettlement 的矮人建立据点流程配置。\n\n可出现地点\nDwarven City。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/fort.png\" target=\"_blank\" />、<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "兴趣点尚未渗透；<CrossReference name=\"City Palace\" href=\"?page=points-of-interest#entry-location-sub-city\" meta=\"兴趣点\" text=\"城市的政治中心。除 Infiltrate、Enshadow、招募与训练外，按国家首都、Alliance、政治不稳定等条件提供外交、Conclave、Dark Coronation 等任务。\n随从招募：Sellsword 供双方招募；Knight 通常属于英雄招募，Dark Empire 或 Ophanim Theocracy 中转为黑暗阵营招募。统治者 Shadow <50%、Awareness >90% 时，另加入英雄的 Paladin 招募。\n\n出现方式\nCity 创建时固定配置。\n\n可出现地点\nCity。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/cityCentre.png\" target=\"_blank\" /> 必须最后渗透，先完成当地其他可渗透兴趣点。所选 Alliance 规则可能禁止在联盟领地渗透。",
      "statLine": "Complexity: 50 + 25 × Security\nProfile: 30\nMenace: 20\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recoverarcanerelics",
      "name": "Recover Arcane Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Arcane Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itemarcanerelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recovercogworkrelics",
      "name": "Recover Cogwork Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Cogwork Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itemcogworkrelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recoverrelics",
      "name": "Recover Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Basic Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itembasicrelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "place-hook-3591348120-0",
      "name": "Ancient Ruins 的 MEKHANE 扩展",
      "text": "使用 MEKHANE 时提供资源发掘；启用对应 Sarkic 开局选项时另提供 Sarkic Tomb 入口。\n\n对应地点 / 兴趣点\n<CrossReference name=\"Ancient Ruins\" href=\"?page=points-of-interest#entry-location-sub-ancientruins\" meta=\"兴趣点\" text=\"可供探索的古代遗迹，默认最多探索 5 次。探索带来遗迹事件、物品或危险；同时提供 Hero’s Journey、Guard Ruins、Wait to Explore Ruins 和野外 Lay Low。不能渗透，所在聚居地毁灭后仍可存续。\n\n出现方式\n地图在合格野地随机生成；不是所有名为 Ruins 的地点都拥有此兴趣点。\n\n可出现地点\n野外兴趣点地点、Ruins。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/ancientRuins.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/ancientRuins.png"
    },
    {
      "name": "Unearth Klavigar's Tomb",
      "id": "god-place-place-hook-3591348120-0--place-task-3591348120-ch-mek-sarkictomb",
      "meta": "Intrigue",
      "text": "建立 Klavigar Tomb。基础费用为现存墓穴数 ×10 Insights，再加 ⌊当地 Infiltration 百分点 /20⌋。",
      "location": "Ancient Ruins",
      "limit": "Karcist；世界墓穴少于 4，地点尚未完全渗透且无冲突设施。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_subsarkictomb.png"
    },
    {
      "name": "Reveal Fragments",
      "id": "god-place-place-hook-3591348120-0--place-task-3591348120-ch-mek-createresourceunearth",
      "text": "消耗 10 Divine Schema，建立 Unearthed Fragments。",
      "location": "Ancient Ruins",
      "limit": "我方 Agent；当地没有碎片。",
      "statLine": "Complexity: 10\nProfile: 90\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth.png"
    },
    {
      "id": "place-hook-3591348120-1",
      "name": "Market 的 MEKHANE 商品",
      "text": "使用 MEKHANE 时，在 <CrossReference name=\"Market\" href=\"?page=points-of-interest#entry-location-sub-market\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，配置 3 个商品购买槽。商品由 Buy Item 的刷新逻辑决定，Prosperity 影响物品品质；渗透后可 Force Restock。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/market.png\" target=\"_blank\" /> 或名称为 Grand Bazaar 的兴趣点所在地点加入。\n\n对应地点 / 兴趣点\n<CrossReference name=\"Market\" href=\"?page=points-of-interest#entry-location-sub-market\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，配置 3 个商品购买槽。商品由 Buy Item 的刷新逻辑决定，Prosperity 影响物品品质；渗透后可 Force Restock。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/market.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/market.png"
    },
    {
      "name": "Buy Pieces",
      "id": "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buypieces",
      "text": "支付 15 Gold，最多购买 3 Piece。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections ≤−1。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicpiece.png"
    },
    {
      "name": "Buy Mechanisms",
      "id": "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buymechanisms",
      "text": "支付 30 Gold，最多购买 3 Mechanism。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections ≤−2。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicmechanism.png"
    },
    {
      "name": "Buy Relic",
      "id": "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buyrelic",
      "text": "支付 90 Gold，购买 1 Relic。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections 为 −3。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicrelic.png"
    },
    {
      "name": "Store All Components",
      "id": "god-place-mekhane-common--ch-storecomponentsall",
      "text": "将携带的所有组件存入当地库存。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "携带至少 1 件组件。",
      "statLine": "Complexity: 1\nProfile: 100；Priority 地点为 500\nMenace: 0\nXP: 3",
      "image": "iconstore1.png"
    },
    {
      "name": "Store Specific Components",
      "id": "god-place-mekhane-common--ch-storecomponent",
      "text": "选择一种组件存入当地库存。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "携带组件。",
      "statLine": "Complexity: 1\nProfile: 100；Priority 地点为 500\nMenace: 0\nXP: 3",
      "image": "iconstore1.png"
    },
    {
      "name": "Take Mekhanite Component",
      "id": "god-place-mekhane-common--ch-takecomponent",
      "text": "选择库存中的组件领取，数量受人物物品栏空位限制。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "物品栏有空位。",
      "statLine": "Complexity: 1\nProfile: 100\nMenace: 0\nXP: 3",
      "image": "iconstore2.png"
    },
    {
      "name": "Mekhanite Prayer",
      "id": "god-place-mekhane-common--ch-mek-prayer",
      "text": "消耗 1 Divine Schema，教团 Elder Influence +10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "Mekhanite，持有 Divine Schema。",
      "statLine": "Complexity: 20\nProfile: 50\nMenace: 5\nXP: 36",
      "image": "base-basicPrayer.png"
    },
    {
      "name": "Mechanical Hymns",
      "id": "god-place-mekhane-common--ch-mek-smithboostelder",
      "text": "消耗 2 Divine Schema，创建 Mechanical Hymns；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 15\nProfile: 90\nMenace: 0\nXP: 29",
      "image": "icon_brokenchurchshadow.png"
    },
    {
      "name": "Divert Attention",
      "id": "god-place-mekhane-common-non-abyssal--ch-divertattention",
      "text": "Congregation Profile −20。Underground Networks 每级额外减少 10；−3 时另获得 1 Divine Schema。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "执行者是 Mekhanite、Speaker，或喜好 Mekhanites。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Assemble Mechanism",
      "id": "god-place-mekhane-common-non-abyssal--ch-assemblemechanism",
      "text": "3 Piece 合成 1 Mechanism；Congregation Profile +2。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21",
      "image": "icon_itembasicmechanism.png"
    },
    {
      "name": "Assemble Relic",
      "id": "god-place-mekhane-common-non-abyssal--ch-assemblerelic",
      "text": "3 Mechanism 合成 1 Relic；Congregation Profile +10，并获得 Divine Schema。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 5\nXP: 49",
      "image": "icon_itembasicrelic.png"
    },
    {
      "name": "Assemble Divine Machine",
      "id": "god-place-mekhane-common-non-abyssal--ch-assembledivinemachine",
      "text": "各消耗 1 Relic、Cogwork Relic、Arcane Relic，组装 1 Divine Machine；Congregation Profile +15。优先使用携带的材料，缺少部分可从库存补足。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "三类材料齐备。",
      "statLine": "Complexity: 50\nProfile: 8\nMenace: 5\nXP: 72",
      "image": "icon_divinemachine.png"
    },
    {
      "name": "Recruit Zealot Minion",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-recruitzealot",
      "text": "消耗 Divine Schema，招募 Mekhanite Zealot 随从。Militant Following 调整费用与随从属性。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "拥有足够 Divine Schema 与 Command 空间。",
      "statLine": "Complexity: 3\nProfile: 90\nMenace: 0\nXP: 8",
      "image": "icon_acolyte_zealot.png"
    },
    {
      "name": "Mekhanite Smithing",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-smithboostmodifier",
      "text": "消耗 3 Divine Schema，创建 Mekhanite Smithing；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 30\nProfile: 90\nMenace: 0\nXP: 49",
      "image": "icon_brokenChurchSmithing.png"
    },
    {
      "name": "Arm Congregation",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-smithdanger",
      "text": "消耗 3 Divine Schema，创建 Armed Congregation；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 30\nProfile: 90\nMenace: 0\nXP: 49",
      "image": "icon_brokenChurchDanger.png"
    },
    {
      "name": "Expose Mekhanites",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-exposecongregation",
      "meta": "Command",
      "text": "当前 Profile −20，最低 Profile +10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "Awareness 100%，个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。",
      "statLine": "Complexity: 20；Sentinel Presence 生效时 40\nProfile: 20 + Congregation Profile\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 36；加强后为 60",
      "positiveTags": "Cooperation",
      "negativeTags": "Mekhanites",
      "image": "icon_powerfalseimage.png"
    },
    {
      "name": "Investigate Mekhanites",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-investigatemekhanites",
      "meta": "Command",
      "text": "创建 Recent Investigations，持续提高 Congregation Profile。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "非 Mekhanite；个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。",
      "statLine": "Complexity: 40；Sentinel Presence 生效时 80\nProfile: 40 + Congregation Profile\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 60；加强后为 102",
      "positiveTags": "Danger",
      "negativeTags": "Mekhanites、Shadow",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Steal Relics",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-raidcongregation",
      "meta": "Might",
      "text": "偷走最多 3 件 Relic；对非 Relic 组件逐件进行 4/9 概率的销毁判定。Congregation Profile −15；当地 Armed Congregation 强度 −10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "英雄有物品栏空位，满足任务的觉醒与 Shadow 限制。",
      "statLine": "Complexity: 30；Sentinel Presence 生效时 60\nProfile: 50 + 已解封数 ×10\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 49；加强后为 82",
      "positiveTags": "Danger",
      "negativeTags": "Mekhanites、Shadow、Combat",
      "image": "base-raid.png"
    },
    {
      "name": "Destroy Relics",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-destroyrelic",
      "meta": "Might",
      "text": "对 Relic 逐件进行 4/9 概率的销毁判定，最多处理 3 件。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "Awareness 100%、个人 Shadow 未满、对 Mekhanites 偏好不高于 0 的英雄，或 Sarkic 人物。",
      "statLine": "Complexity: 30；Sentinel Presence 生效时 60\nProfile: Congregation Profile\nMenace: 0\nXP: 49；加强后为 82",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites",
      "image": "base-raid.png"
    },
    {
      "name": "Destroy Components",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-raidcongregation-destroycomponents",
      "meta": "Might",
      "text": "尝试销毁最多 10 件组件，每件判定成功率 4/9；也会拿走可携带的 Relic。Congregation Profile −5。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "非 Mekhanite 英雄。",
      "statLine": "Complexity: 20；Sentinel Presence 生效时 40\nProfile: 50 + 已解封数 ×10\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 36；加强后为 60",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites、Shadow",
      "image": "base-raid.png"
    },
    {
      "name": "Convert",
      "id": "god-place-mekhane-common-non-abyssal--ch-mek-hero-convert",
      "meta": "Command",
      "text": "使执行者成为 Mekhanite；人物继续自主行动。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "尚未皈依且喜好 Mekhanites。",
      "statLine": "Complexity: 20\nProfile: 50\nMenace: 0\nXP: 36",
      "positiveTags": "Cooperation、Mekhanites、Religion",
      "negativeTags": "无",
      "image": "icon_subcongregation.png"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-mekhane-common",
      "name": "通用",
      "blocks": [
        {
          "title": "挑战",
          "entryIds": [
            "god-place-mekhane-common--ch-storecomponentsall",
            "god-place-mekhane-common--ch-storecomponent",
            "god-place-mekhane-common--ch-takecomponent",
            "god-place-mekhane-common--ch-mek-prayer",
            "god-place-mekhane-common--ch-mek-smithboostelder"
          ]
        }
      ]
    },
    {
      "id": "god-place-mekhane-common-non-abyssal",
      "name": "除Abyssal外通用",
      "blocks": [
        {
          "title": "挑战",
          "entryIds": [
            "god-place-mekhane-common-non-abyssal--ch-divertattention",
            "god-place-mekhane-common-non-abyssal--ch-assemblemechanism",
            "god-place-mekhane-common-non-abyssal--ch-assemblerelic",
            "god-place-mekhane-common-non-abyssal--ch-assembledivinemachine",
            "god-place-mekhane-common-non-abyssal--ch-mek-recruitzealot",
            "god-place-mekhane-common-non-abyssal--ch-mek-smithboostmodifier",
            "god-place-mekhane-common-non-abyssal--ch-mek-smithdanger"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-exposecongregation",
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-investigatemekhanites",
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-raidcongregation",
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-destroyrelic",
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-raidcongregation-destroycomponents",
            "god-place-mekhane-common-non-abyssal--ch-mek-hero-convert"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-congregation",
      "name": "Mekhanite Congregation",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-congregation"
          ]
        },
        {
          "title": "统治者行动",
          "entryIds": [
            "god-place-location-sub-mek-congregation--ruler-act-mek-convertbasehidecongregation",
            "god-place-location-sub-mek-congregation--ruler-act-mek-awaredestroycongregation",
            "god-place-location-sub-mek-congregation--ruler-act-mek-awareexposecongregation",
            "god-place-location-sub-mek-congregation--ruler-act-mek-awareinvestigatecongregation"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-congregationabyssal",
      "name": "Abyssal Congregation",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-congregationabyssal"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-congregationorc",
      "name": "Orcish Congregation",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-congregationorc"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-congregationorc--place-task-3591348120-ch-industrytopiece"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-congregationtower",
      "name": "Citadel",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-congregationtower"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-exiles",
      "name": "Exile Community",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-exiles"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exileexperiment"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assembledevastation",
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assemblemadness",
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-exile-assembleshadow"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-hero-investigateexile",
            "god-place-location-sub-mek-exiles--place-task-3591348120-ch-mek-hero-raidexile"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-forge",
      "name": "Orthodox Forge",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-forge"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkmechanism",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkmechanismconversion",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-assemblecogworkrelic",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-basic",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-sentinel",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-automaton-speaker",
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-councilschema"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-sub-mek-forge--place-task-3591348120-ch-mek-councilhide"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-mekhane",
      "name": "MEKHANE’s Body",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "location-sub-mek-mekhane"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-relay",
      "name": "Maxwellist Relay",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-relay"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanemechanism",
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanemechanismconversion",
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanerelic",
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-assemblearcanesecret",
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-mek-maxwellist-infiltrator",
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-mek-maxwellist-intelligence"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-sub-mek-relay--place-task-3591348120-ch-transferarcanerelics"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-sarkicfleshthathates",
      "name": "Flesh That Hates",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-sarkicfleshthathates"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-location-sub-mek-sarkicfleshthathates--place-task-3591348120-ch-mek-sarkicreddeath"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-sarkictemple",
      "name": "Sarkic Temple",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-sarkictemple"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicheroinvestigate"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicagentinvestigate",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicagentexpose",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicdestroytemple"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkichidetemple",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicconvertsecrets",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkickarcist",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicmutate",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicrecruit",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkic-recruitminion",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicpreference",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicsermon",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicreddeath",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkic-security",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicempire",
            "god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicgrandkarcist"
          ]
        }
      ]
    },
    {
      "id": "god-place-location-sub-mek-vault",
      "name": "Containment Vault",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "sub-mek-vault"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-hero-storerelics",
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-hero-learn"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-raid",
            "god-place-location-sub-mek-vault--place-task-base-ch-infiltrate"
          ]
        },
        {
          "title": "共同行动",
          "entryIds": [
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recoverarcanerelics",
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recovercogworkrelics",
            "god-place-location-sub-mek-vault--place-task-3591348120-ch-mek-vault-recoverrelics"
          ]
        }
      ]
    },
    {
      "id": "god-place-place-hook-3591348120-0",
      "name": "Ancient Ruins 的 MEKHANE 扩展",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-0"
          ]
        },
        {
          "title": "宗教任务",
          "entryIds": [
            "god-place-place-hook-3591348120-0--place-task-3591348120-ch-mek-sarkictomb"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-place-hook-3591348120-0--place-task-3591348120-ch-mek-createresourceunearth"
          ]
        }
      ],
      "image": "/locations/game/ancientRuins.png"
    },
    {
      "id": "god-place-place-hook-3591348120-1",
      "name": "Market 的 MEKHANE 商品",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3591348120-1"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buypieces",
            "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buymechanisms",
            "god-place-place-hook-3591348120-1--place-task-3591348120-ch-buyrelic"
          ]
        }
      ],
      "image": "/locations/game/market.png"
    }
  ]
},
{
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Piece",
          "id": "i-mek-piece",
          "text": "最基础的组件。通过 Scavenge for Fragment、生产与其他采集挑战获得，用于组装 Mechanism。",
          "image": "icon_itembasicpiece.png"
        },
        {
          "name": "Mechanism",
          "id": "i-mek-mechanism",
          "text": "由 3 Piece 组装；Divine Assembly 神力只需要 2 Piece。可继续合成 Relic。",
          "image": "icon_itembasicmechanism.png"
        },
        {
          "name": "Clockwork Mechanism",
          "id": "i-mek-cogworkmechanism",
          "text": "在 Cogwork Orthodoxy 设施内由 Piece 组装，或转换 Mechanism；用于 Cogwork Relic 与 Automatons。",
          "image": "icon_itemcogworkmechanism.png"
        },
        {
          "name": "Arcane Mechanism",
          "id": "i-mek-arcanemechanism",
          "text": "在 Maxwellist 设施内组装，或转换 Mechanism；用于 Arcane Relic、Constructs 与部分法术。",
          "image": "icon_itemarcanemechanism.png"
        },
        {
          "name": "Relic",
          "id": "i-mek-relic",
          "text": "Command +2。基础制造路线的 Relic，计入封印进度，也是 Divine Machine 的材料。",
          "image": "icon_itembasicrelic.png"
        },
        {
          "name": "Cogwork Relic",
          "id": "i-mek-cogworkrelic",
          "text": "Intrigue +1，Command +1。计入封印进度，并增强 Cogwork Orthodoxy。",
          "image": "icon_itemcogworkrelic.png"
        },
        {
          "name": "Arcane Relic",
          "id": "i-mek-arcanerelic",
          "text": "Lore +1，Command +1。计入封印进度，并增强 Noosphere。",
          "image": "icon_itemarcanerelic.png"
        },
        {
          "name": "Divine Machine",
          "id": "i-mek-divinemachine",
          "text": "由三类 Relic 各 1 件组装；计入后两个封印，并可用于 Build MEKHANE。",
          "image": "icon_divinemachine.png"
        },
        {
          "name": "Unorthodox Piece",
          "id": "i-mek-exilepiece",
          "text": "Mekhanite Exile 的实验材料，作为 Mechanism 的衍生物，也用于制造三类实验体。",
          "image": "icon_itemexilepiece.png"
        },
        {
          "name": "Bumaro's Warhammer",
          "id": "i-mek-hammer",
          "text": "Attack +5，提供 Drive Back 仪式；由 The Builder 授予。",
          "image": "icon_itemhammer.png"
        }
      ]
    },
{
      "id": "minions",
      "title": "随从",
      "media": true,
      "items": [
        {
          "name": "Mekhanite Zealot",
          "id": "m-mek-zealot",
          "text": "拥有 Zealous。",
          "stats": "HP: 5；Attack: 2 + Militant Following 有效等级；Defence: 2 + Militant Following 有效等级；Command: 1",
          "image": "icon_acolyte_zealot.png"
        },
        {
          "name": "Clockwork Monstrosity",
          "id": "m-mek-monstrosity",
          "text": "拥有 Menacing。",
          "stats": "HP: 10；Attack: 4；Defence: 3；Command: 3",
          "image": "icon_placeholder.png"
        },
        {
          "name": "Sarkic Initiate",
          "id": "m-mek-sarkic-cultist",
          "text": "拥有 Zealous；由 Recruit Sarkic Initiate Minion 招募。",
          "stats": "HP: 5；Attack: 3；Defence: 3；Command: 1",
          "image": "icon_sarkic_cultist.png"
        }
      ]
    },
{
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "name": "Mekhanite Army",
          "id": "um-mek-mekhanitearmy",
          "text": "由 Augment Military 创建。普通军队基础 HP 上限记为 B：以所在地人口 × Prosperity 向下取整，再应用 Alliance、Military Fervour 与种族修正。",
          "stats": "HP 上限: B + 现存 Relic 数 ×2 + Production 提供的额外 HP；初始 HP: 继承原军队，或上限的一半。",
          "image": "icon_acolyte_zealot.png"
        },
        {
          "name": "Clockwork Army",
          "id": "um-mek-mekhanitearmyweak",
          "text": "Rush Clockwork Soldiers 创建；不能自然恢复，战争结束后解散，统治者获得等于剩余 HP 的 Gold。",
          "stats": "HP: 30。",
          "image": "icon_army_artificial.png"
        },
        {
          "name": "Mekhanite Colossus",
          "id": "um-mek-colossus",
          "text": "由 Ancient Colossus 产生的可控军队。可切换普通、攻城和精确攻击模式。",
          "stats": "HP: 800。",
          "image": "icon_scpcolossus.png"
        },
        {
          "name": "Sarkic Army",
          "id": "um-mek-sarkicarmy",
          "text": "Sarkic 国家军队；强度随教派人物数量增长。",
          "stats": "HP 上限: B + 现存 Sarkic Cultist 数 ×2 + 额外军力。",
          "image": "icon_acolyte_zealotS.png"
        },
        {
          "name": "Sarkic Halkost",
          "id": "um-mek-sarkicarmyundead",
          "text": "Raise Halkosts 消耗一半当地 Death 召唤。位于 Clockwork Virus 或 Rotbolt 时，每回合分别损失 min(该修正强度整数部分,10) HP。",
          "stats": "初始及上限 HP: ⌊召唤前 Death 强度 ×1.5⌋。",
          "image": "icon_sarkic_halkost.png"
        },
        {
          "name": "Raging Flesh",
          "id": "um-mek-sarkicfleshthathates",
          "text": "Red Death 孕育的自主军队，在合格地点传播 The Flesh That Hates；Clockwork Virus 与 Rotbolt 每回合分别造成最高 10 HP 伤害。",
          "stats": "初始及上限 HP: 30。",
          "image": "icon_sarkic_fleshthathates.png"
        },
        {
          "name": "Sarkics",
          "id": "um-mek-sarkicweak",
          "text": "战时临时起义军，和平后解散。",
          "stats": "常规初始 HP: 30；战争动员时 HP: 当地人口 + ⌊Sarkic Population 强度 ×0.5⌋。",
          "image": "icon_sarkic_cultist.png"
        }
      ]
    },
{
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "name": "Church of the Broken God",
          "id": "holyorder-mekhane",
          "text": "首次 Congregate 建立。教团围绕 Congregation 扩张，自主 Acolyte 收集和制造组件。每 30 回合，若 Acolyte 少于 Congregation 数量则补充一人。\n每回合自然获得的 Elder Influence 为 0.5 + 已投入的 Elder 教义等级总和 ×0.5，最高 5；每次推进教义会提高后续影响需求。"
        },
        {
          "name": "Acquired Knowledge",
          "id": "h-mek-assembly",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "完成 Relic 组装时额外获得 1 Divine Schema。"
            }
          ]
        },
        {
          "name": "Corrupt Influence",
          "id": "h-mek-bribe",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "非首都、非 Mekhanite Kingdom、非 Dark Empire 内的 Congregation，每回合使当地 Political Agitation +2，并在回合数为 5 的倍数时增加 1 Profile。"
            }
          ]
        },
        {
          "name": "Mekhanite Unity",
          "id": "h-mek-citystates",
          "text": "",
          "tenetRange": "−5 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "每回合神力恢复 +0.03。"
            },
            {
              "level": -2,
              "text": "每回合神力恢复 +0.06。"
            },
            {
              "level": -3,
              "text": "每回合神力恢复 +0.09。"
            },
            {
              "level": -4,
              "text": "每回合神力恢复 +0.12。"
            },
            {
              "level": -5,
              "text": "每回合神力恢复 +0.15。"
            }
          ]
        },
        {
          "name": "Growing Faith",
          "id": "h-mek-congregationnum",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Congregation 数量上限 +1。"
            },
            {
              "level": -2,
              "text": "上限 +2。"
            },
            {
              "level": -3,
              "text": "上限 +3。"
            }
          ]
        },
        {
          "name": "Word of Mouth",
          "id": "h-mek-conversion",
          "text": "",
          "tenetRange": "−2 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Holy Transmission 的 Divine Schema 费用 −2，最低 1。"
            },
            {
              "level": -2,
              "text": "费用 −4，最低 1。"
            }
          ]
        },
        {
          "name": "Local Armories",
          "id": "h-mek-danger",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Fortress 中的 Congregation 自动提供 Armed Congregation。"
            }
          ]
        },
        {
          "name": "Blood and Iron",
          "id": "h-mek-death",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 Blood and Iron，将 Death 转为 Piece。"
            }
          ]
        },
        {
          "name": "Abyssal Ore",
          "id": "h-mek-deepones",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 <CrossReference name=\"Abyssal Ores\" href=\"#entry-ch-deeponestopiececult\" />，帮助 Deep One Cult 换取 Piece；该任务执行意愿 +10。"
            },
            {
              "level": -2,
              "text": "保留 <CrossReference name=\"Abyssal Ores\" href=\"#entry-ch-deeponestopiececult\" />，帮助 Deep One Cult 换取 Piece；该任务执行意愿 +20。"
            },
            {
              "level": -3,
              "text": "保留 Deep One Cult 中的 <CrossReference name=\"Abyssal Ores\" href=\"#entry-ch-deeponestopiececult\" />，执行意愿 +30。\n在 Abyssal City 创建 Abyssal Congregation，并在已有渗透的 Orc Fortress 创建 Orcish Congregation。"
            }
          ]
        },
        {
          "name": "Mechanical Salvage",
          "id": "h-mek-devastation",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 Mechanical Salvage，在 City Ruins 采集 Piece。"
            }
          ]
        },
        {
          "name": "Rural Isolation",
          "id": "h-mek-farms",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Farming Community 中的 Congregation 每回合 Profile −0.1。"
            }
          ]
        },
        {
          "name": "Syncretic Theology",
          "id": "h-mek-holyorder",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "位于其他教团领地内的 Congregation 为该教团提供 2 Elder Influence。"
            }
          ]
        },
        {
          "name": "Hidden Shrines",
          "id": "h-mek-holysites",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Holy Site 中的 Congregation 自动提供 Mechanical Hymns。"
            }
          ]
        },
        {
          "name": "Impossible Geometry",
          "id": "h-mek-madness",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 Impossible Geometry，把 Madness 转为 Piece。"
            }
          ]
        },
        {
          "name": "Broken Truths",
          "id": "h-mek-madnesspops",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -3,
              "text": "Madness 至少 100 的聚居地开始产生 Augmented Population。"
            }
          ]
        },
        {
          "name": "Black Market Connections",
          "id": "h-mek-market",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 Buy Pieces。"
            },
            {
              "level": -2,
              "text": "额外开放 Buy Mechanisms。"
            },
            {
              "level": -3,
              "text": "额外开放 Buy Relic；Mekhanite 人物单位每回合 +1 Gold。"
            }
          ]
        },
        {
          "name": "Mass Appeal",
          "id": "h-mek-masspop",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Augmented Population 达到 100 后，向 Shadow 至少 50% 的邻近人类聚居地扩散。"
            }
          ]
        },
        {
          "name": "Distractions by Design",
          "id": "h-mek-minordisrupt",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "英雄消灭 Minor Sect 后 Disrupted 3 回合。"
            }
          ]
        },
        {
          "name": "Entrenched Ideas",
          "id": "h-mek-minorsects",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Disperse Minor Sect 的 Complexity 增加 20。"
            },
            {
              "level": -2,
              "text": "增加 40。"
            },
            {
              "level": -3,
              "text": "增加 60。"
            }
          ]
        },
        {
          "name": "Theological Drift",
          "id": "h-mek-minorsectspread",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Minor Sect 强度至少 100 时，每 10 回合有 40% 概率向合格邻地扩散。"
            }
          ]
        },
        {
          "name": "National Ambitions",
          "id": "h-mek-national",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "建立 Mekhanite Kingdom、发动 Mekhanite Uprising 的教义执行意愿加成均为 +10；Augment Military 的执行意愿 +5，Rush Clockwork Soldiers 的执行意愿 −5。"
            },
            {
              "level": -2,
              "text": "建立 Mekhanite Kingdom、发动 Mekhanite Uprising 的教义执行意愿加成均为 +20；Augment Military 的执行意愿 +10，Rush Clockwork Soldiers 的执行意愿 −10。"
            },
            {
              "level": -3,
              "text": "建立 Mekhanite Kingdom、发动 Mekhanite Uprising 的教义执行意愿加成均为 +30；Augment Military 的执行意愿 +15，Rush Clockwork Soldiers 的执行意愿 −15。\n满足其他条件的 Mekhanite Kingdom 可通过 Join Mekhanite Empire 加入已建立的 Unified Church。"
            }
          ]
        },
        {
          "name": "Orcish Tools",
          "id": "h-mek-orc",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "开放 <CrossReference name=\"Orcish Tools\" href=\"#entry-ch-industrytopiece\" />，增加 Orcish Industry 换取 Piece；该任务执行意愿 +10。"
            },
            {
              "level": -2,
              "text": "保留 <CrossReference name=\"Orcish Tools\" href=\"#entry-ch-industrytopiece\" />，增加 Orcish Industry 换取 Piece；该任务执行意愿 +20。"
            },
            {
              "level": -3,
              "text": "保留 <CrossReference name=\"Orcish Tools\" href=\"#entry-ch-industrytopiece\" />，该任务执行意愿 +30。\n在 Abyssal City 创建 Abyssal Congregation，并在已有渗透的 Orc Fortress 创建 Orcish Congregation。"
            }
          ]
        },
        {
          "name": "Hostile Utilities",
          "id": "h-mek-profile",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Mekhanite 杀死非 Mekhanite 英雄时，最近 Congregation Profile −10。"
            },
            {
              "level": -2,
              "text": "Profile −20。"
            },
            {
              "level": -3,
              "text": "Profile −30。"
            }
          ]
        },
        {
          "name": "Reality Refactoring",
          "id": "h-mek-relicprofile",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "一处 Congregation 组装 Relic 后，其他 Congregation Profile −10。"
            },
            {
              "level": -2,
              "text": "其他 Congregation Profile −20。"
            },
            {
              "level": -3,
              "text": "其他 Congregation Profile −30。"
            }
          ]
        },
        {
          "name": "Material Past",
          "id": "h-mek-schema",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "每 10 回合在合格 Ancient Ruins 生成缺失的 Divine Schema。"
            }
          ]
        },
        {
          "name": "Underground Networks",
          "id": "h-mek-schemahide",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Divert Attention 额外减少 10 Profile。"
            },
            {
              "level": -2,
              "text": "额外减少 20 Profile。"
            },
            {
              "level": -3,
              "text": "额外减少 30 Profile，并给予执行者 1 Divine Schema。"
            }
          ]
        },
        {
          "name": "Obsidian Parts",
          "id": "h-mek-shadow",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "人物携带的三类 Relic 每回合 Shadow 传播系数 +0.011，三类 Mechanism +0.0011。"
            },
            {
              "level": -2,
              "text": "对应系数分别 +0.022 与 +0.0022。"
            },
            {
              "level": -3,
              "text": "对应系数分别 +0.033 与 +0.0033。"
            }
          ]
        },
        {
          "name": "Inherent Tinkerers",
          "id": "h-mek-specialist",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -3,
              "text": "我方 Mekhanite Agent 获得 Specialist: Mekhanites。"
            }
          ]
        },
        {
          "name": "Organized Excavations",
          "id": "h-mek-unearth",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Scavenge for Fragment 对 Unearthed Fragments 的每回合消耗从 2 降为 1。"
            }
          ]
        },
        {
          "name": "Maddening Metals",
          "id": "h-mek-unearthmadness",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Unearthed Fragments 每回合为本地增加 1 Madness。"
            },
            {
              "level": -2,
              "text": "Unearthed Fragments 每回合为本地增加 1 Madness。"
            },
            {
              "level": -3,
              "text": "Unearthed Fragments 每回合为本地及相邻人类聚居地各增加 1 Madness。"
            }
          ]
        },
        {
          "name": "Dark Minerals",
          "id": "h-mek-unearthshadow",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Unearthed Fragments 每回合使聚居地 Shadow +0.5 个百分点；未设聚居地时使地块 Purity −0.05，最低 0。"
            }
          ]
        },
        {
          "name": "Militant Following",
          "id": "h-mek-zealots",
          "text": "",
          "tenetRange": "−3 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Mekhanite Zealot 的 Attack、Defence 各 +1（均为 3）；Recruit Zealot Minion 的费用降至 2 Divine Schema。"
            },
            {
              "level": -2,
              "text": "Mekhanite Zealot 的 Attack、Defence 各 +2（均为 4）；Recruit Zealot Minion 的费用降至 1 Divine Schema。"
            },
            {
              "level": -3,
              "text": "Mekhanite Zealot 的 Attack、Defence 各 +3（均为 5）；Recruit Zealot Minion 的费用降至 1 Divine Schema。"
            }
          ]
        },
        {
          "name": "Sarkic Cult",
          "id": "holyorder-sarkic",
          "text": "通过 The Other Half 开启。自主积累 Sarkic Insights 与 Human Influence，逐步解锁扩张、晋升和登神。玩家可通过渗透、调查、杀死其人物等取得 Elder Influence，启用反制教义。\n杀死普通 Sarkic Cultist、Karcist、Grand Karcist 分别提供 10、50、1000 Elder Influence，同时提高其对我方的敌意。"
        },
        {
          "name": "I. Applied Mutations",
          "id": "h-mek-sarkic1",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "允许消耗 Sarkic Insights 取得或升级 Sarkic Mutation。"
            }
          ]
        },
        {
          "name": "II. Karcist Ascension",
          "id": "h-mek-sarkic2",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "开放 Karcist Ascension。"
            }
          ]
        },
        {
          "name": "III. Expanding Cults",
          "id": "h-mek-sarkic3",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "Sarkic Population 达到 100 后可向相邻地区扩散。"
            }
          ]
        },
        {
          "name": "IV. Sarkic Kingdoms",
          "id": "h-mek-sarkic4",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "允许建立 Sarkic Kingdom。"
            }
          ]
        },
        {
          "name": "V. Grand Karcist",
          "id": "h-mek-sarkic5",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "开放 Grand Karcist 晋升。"
            }
          ]
        },
        {
          "name": "VI. God-Eater",
          "id": "h-mek-sarkic6",
          "text": "",
          "tenetRange": "0 – 1",
          "tenetLevels": [
            {
              "level": 1,
              "text": "允许 Sarkic Ascension，成功即导致玩家失败。"
            }
          ]
        },
        {
          "name": "I. Know Your Enemy",
          "id": "h-mek-sarkiccounter1",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Sarkic 人物行动开始积累 Profile 与 Menace。"
            }
          ]
        },
        {
          "name": "II. Killing Blows",
          "id": "h-mek-sarkiccounter2",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "我方可摧毁 Profile 达到 100 的 Sarkic Temple。"
            }
          ]
        },
        {
          "name": "III. Counter-Infiltration",
          "id": "h-mek-sarkiccounter3",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Sarkic Temple 无法再降低 Profile。"
            }
          ]
        },
        {
          "name": "IV. Weakened Enemies",
          "id": "h-mek-sarkiccounter4",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Sarkic 人物 Attack、Defence 各 −5。"
            }
          ]
        },
        {
          "name": "V. Termination",
          "id": "h-mek-sarkiccounter5",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "阻止 Grand Karcist 执行 Sarkic Ascension。"
            }
          ]
        }
      ]
    },
{
      "id": "units",
      "title": "特殊人物与自主单位",
      "media": true,
      "items": [
        {
          "name": "The Supplicant",
          "id": "uae-supplicant",
          "text": "首次 Congregate 时出现的可控 Agent。开局第 0 回合没有初始 Agent。",
          "stats": "Might: 2；Lore: 2；Intrigue: 4；Command: 3",
          "abilities": [
            {
              "name": "Rusting Soul",
              "text": "每次组装任意一类 Relic，当地 Shadow 增加 15 个百分点，最高 100%。",
              "id": "uae-supplicant-ability-0"
            },
            {
              "name": "Innovative Means",
              "text": "组装基础 Mechanism 或 Relic 的组件费用减少 1。",
              "id": "uae-supplicant-ability-1"
            },
            {
              "name": "Holy Mechanic",
              "text": "每次组装 Relic 恢复 1 神力。",
              "id": "uae-supplicant-ability-2"
            }
          ],
          "image": "icon_meksupplicant.png"
        },
        {
          "name": "Mekhanite Acolyte",
          "id": "ua-mek-acolyte",
          "text": "自主收集、存放与组装组件。Acolyte Assistance 可切换其组装行为。",
          "stats": "Might: 1；Lore: 2–3；Intrigue: 2；Command: 2–3",
          "abilities": []
        },
        {
          "name": "Metalsmith",
          "id": "uae-mek-smith",
          "text": "由 Citadel 培育的专业化 Acolyte，免费执行相关维护挑战。转化时保留人物身份和物品，基础属性按 Acolyte 构造重新设置，再增加 1 Command。",
          "stats": "Might: 1；Lore: 2–3；Intrigue: 2；Command: 3–4",
          "abilities": [
            {
              "name": "Mekhanite Smithing",
              "text": "提供 Mekhanite Smithing。",
              "id": "uae-mek-smith-ability-0"
            },
            {
              "name": "Arm Congregation",
              "text": "提供 Armed Congregation。",
              "id": "uae-mek-smith-ability-1"
            },
            {
              "name": "Mechanical Hymns",
              "text": "提供 Mechanical Hymns。",
              "id": "uae-mek-smith-ability-2"
            }
          ],
          "image": "icon_acolyte_pilgrim.png"
        },
        {
          "name": "Orthodox Legate",
          "id": "uae-mek-legate",
          "text": "Cogwork Orthodoxy 的自主制造者。每回合按 Council of Patriarchs 强度重新计算属性。n 为 Council 强度 /50 向下取整，再限制在 1–5。",
          "stats": "Might: n+1；Lore: n+2；Intrigue: max(1,n−1)；Command: n+2",
          "abilities": [],
          "image": "icon_patriarch.png"
        },
        {
          "name": "Living Saint",
          "id": "uae-mek-maxwellist",
          "text": "Maxwellist 的自主执行者。每回合按 Noosphere 强度重新计算属性。n 为 Noosphere 强度 /50 向下取整，再限制在 1–5。",
          "stats": "Might: max(1,n−1)；Lore: n+2；Intrigue: n+1；Command: n+2",
          "abilities": [
            {
              "name": "Noosphere Connection",
              "text": "可以建立 Maxwellist Connection。",
              "id": "uae-mek-maxwellist-ability-0"
            }
          ],
          "image": "icon_livingsaint.png"
        },
        {
          "name": "Gatherer",
          "id": "ua-mek-automaton",
          "text": "组装产生的自主机械单位；收集组件时可填满物品栏。Clockwork Virus 转化人物时沿用原人物，基础属性继承。",
          "stats": "Might: 0；Lore: 2；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [
            {
              "name": "Gatherer",
              "text": "专职收集与运送组件。",
              "id": "ua-mek-automaton-ability-0"
            }
          ],
          "image": "icon_automaton.png"
        },
        {
          "name": "Sentinel",
          "id": "ua-mek-automaton-sentinel",
          "text": "保护 Cogwork Orthodoxy 的机械单位，驻守设施提供 Sentinel Presence。",
          "stats": "Might: 5；Lore: 0；Intrigue: 0；Command: 0；HP: 15",
          "abilities": [],
          "image": "icon_automaton_sentry.png"
        },
        {
          "name": "Speaker",
          "id": "ua-mek-automaton-speaker",
          "text": "自主传播信仰，Speaker's Sermon 推动 Augmented Population。",
          "stats": "Might: 0；Lore: 0；Intrigue: 4；Command: 4；HP: 10",
          "abilities": [
            {
              "name": "Speaker's Sermon",
              "text": "免费创建传播修正，并获取 Divine Schema。",
              "id": "ua-mek-automaton-speaker-ability-0"
            }
          ],
          "image": "icon_automaton_speaker.png"
        },
        {
          "name": "Intelligence",
          "id": "ua-mek-construct",
          "text": "自主收集网络与魔法资源的 Maxwellist Construct；不能获得 XP。",
          "stats": "Might: 0；Lore: 3；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [
            {
              "name": "Noosphere Connection",
              "text": "建立 Maxwellist Connection。",
              "id": "ua-mek-construct-ability-0"
            },
            {
              "name": "Harvest Information",
              "text": "消耗连接强度获得 Piece。",
              "id": "ua-mek-construct-ability-1"
            }
          ],
          "image": "icon_construct_intelligence.png"
        },
        {
          "name": "Infiltrator",
          "id": "ua-mek-maxwellist-infiltrator",
          "text": "自主执行渗透与误导的 Maxwellist Construct。",
          "stats": "Might: 0；Lore: 0；Intrigue: 5；Command: 0；HP: 10",
          "abilities": [],
          "image": "icon_construct_infiltrator.png"
        },
        {
          "name": "Mekhanite Exile",
          "id": "ua-mek-exile",
          "text": "自主进行实验和破坏。完成带 Discord 或 Shadow 正面标签的行动时，有 20% 概率获得 Unorthodox Piece。随机拥有 Hidden Blades 或 Metal Skin。",
          "stats": "Might: 4；Lore: 2；Intrigue: 4；Command: 1",
          "abilities": [],
          "image": "icon_exile.png"
        },
        {
          "name": "Rampaging Experiment",
          "id": "ua-mek-exile-experimentdevastation",
          "text": "在非黑暗人类国家聚居地每回合增加 30 Devastation，自身 Profile 与 Menace 各 +5。",
          "stats": "Might: 0；Lore: 2；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [],
          "image": "icon_exileExperiment.png"
        },
        {
          "name": "Maddening Machine",
          "id": "ua-mek-exile-experimentmadness",
          "text": "在非黑暗人类国家聚居地每回合增加 30 Madness，自身 Profile 与 Menace 各 +5。",
          "stats": "Might: 0；Lore: 2；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [],
          "image": "icon_exileExperiment3.png"
        },
        {
          "name": "False Image",
          "id": "ua-mek-exile-experimentshadow",
          "text": "在聚居地每回合增加 15 个百分点 Shadow，自身 Profile 与 Menace 各 +5。",
          "stats": "Might: 0；Lore: 2；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [],
          "image": "icon_exileExperiment2.png"
        },
        {
          "name": "Mekhanite Zealot",
          "id": "ua-mek-zealot",
          "text": "由 Armed Congregation 的保护机制派出，攻击正在摧毁 MEKHANE's Body 的英雄。",
          "stats": "Might: 4；Lore: 2；Intrigue: 4；Command: 2",
          "abilities": [],
          "image": "icon_acolyte_zealot.png"
        },
        {
          "name": "Mechanical Choir",
          "id": "uae-mek-mechanicalchoir",
          "text": "异常神力产生的可控机械 Agent。",
          "stats": "Might: 0；Lore: 2；Intrigue: 0；Command: 0；HP: 10",
          "abilities": [
            {
              "name": "Divine Connection",
              "text": "每 10 回合获得 1 Divine Schema。",
              "id": "uae-mek-mechanicalchoir-ability-0"
            },
            {
              "name": "Automated Songs",
              "text": "消耗 5 Divine Schema，恢复 2 神力。",
              "id": "uae-mek-mechanicalchoir-ability-1"
            },
            {
              "name": "Shrill Sound",
              "text": "本地敌对英雄损失 4 HP，相邻地点损失 2 HP；两者当前任务进度都清零。",
              "id": "uae-mek-mechanicalchoir-ability-2"
            },
            {
              "name": "Hidden Harmony",
              "text": "消耗 3 Divine Schema，其他 Mekhanite 人物 Profile −30，所有 Congregation Profile −40。",
              "id": "uae-mek-mechanicalchoir-ability-3"
            },
            {
              "name": "Broken Song",
              "text": "消耗 5 Divine Schema，所有教团 Elder Influence +100，不超过各自上限。",
              "id": "uae-mek-mechanicalchoir-ability-4"
            }
          ],
          "image": "icon_scpmechanicalchoir.png"
        },
        {
          "name": "Sarkic Cultist",
          "id": "uaen-mek-sarkic",
          "text": "The Other Half 开启后的敌对自主人物；积累 Sarkic Insights，发展教团并追求晋升。",
          "stats": "Might: 4；Lore: 3；Intrigue: 3；Command: 2",
          "abilities": []
        },
        {
          "name": "Karcist",
          "id": "uaen-mek-sarkickarcist",
          "text": "Sarkic 的专业化领袖。构造基础值为 6/4/3/2；Karcist Ascension 完成时另加 Might +3、Lore +1。",
          "stats": "Might: 9；Lore: 5；Intrigue: 3；Command: 2",
          "abilities": [],
          "image": "icon_sarkicKarcist.png"
        },
        {
          "name": "Grand Karcist",
          "id": "uaen-mek-sarkicgrandkarcist",
          "text": "敌对教派的最高领袖，可建立 Deathless Empire、寻访 Adytom、进行 Sarkic Ascension，或释放 Red Death。晋升后的属性如下。",
          "stats": "Might: 10；Lore: 6；Intrigue: 3；Command: 2",
          "abilities": [],
          "image": "icon_sarkicGrandKarcist.png"
        }
      ]
    },
{
  "id": "challenges",
  "title": "挑战",
  "media": true,
  "items": [
    {
      "name": "Scavenge for Fragment",
      "id": "ch-scavengepiece",
      "text": "获得 1 Piece；Mekhanite Exile 获得 Unorthodox Piece。执行期间每回合消耗地点强度 2；Organized Excavations 生效时消耗减半。",
      "location": "<CrossReference name=\"Unearthed Fragments\" href=\"#entry-pr-mek-resourceunearthed\" />",
      "limit": "Mekhanite 或 Automaton；物品栏有空位，碎片未耗尽。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth.png"
    },
    {
      "name": "Assemble Mechanism",
      "id": "ch-assemblemechanism",
      "text": "3 Piece 合成 1 Mechanism；Congregation Profile +2。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21",
      "image": "icon_itembasicmechanism.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Assemble Relic",
      "id": "ch-assemblerelic",
      "text": "3 Mechanism 合成 1 Relic；Congregation Profile +10，并获得 Divine Schema。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 5\nXP: 49",
      "image": "icon_itembasicrelic.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Assemble Cogwork Mechanism",
      "id": "ch-assemblecogworkmechanism",
      "text": "3 Piece 合成 1 Clockwork Mechanism；Congregation Profile +4。Council of Patriarchs 可降低材料费用。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemcogworkmechanism.png"
    },
    {
      "name": "Gild Basic Mechanism",
      "id": "ch-assemblecogworkmechanismconversion",
      "text": "将 1 Mechanism 转为 1 Clockwork Mechanism，另支付 Gold；Congregation Profile +3。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料与 Gold 足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemcogworkmechanism.png"
    },
    {
      "name": "Assemble Cogwork Relic",
      "id": "ch-assemblecogworkrelic",
      "text": "3 Clockwork Mechanism 合成 1 Cogwork Relic；Congregation Profile +10，并获得 Divine Schema。Council of Patriarchs 可降低材料费用。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 0\nXP: 49",
      "image": "icon_itemcogworkrelic.png"
    },
    {
      "name": "Assemble Arcane Mechanism",
      "id": "ch-assemblearcanemechanism",
      "text": "3 Piece 合成 1 Arcane Mechanism；Congregation Profile +4。Noosphere 可降低材料费用。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemarcanemechanism.png"
    },
    {
      "name": "Defragment Basic Mechanism",
      "id": "ch-assemblearcanemechanismconversion",
      "text": "1 Mechanism 转为 1 Arcane Mechanism；Congregation Profile +3。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 20\nProfile: 100\nMenace: 0\nXP: 36",
      "image": "icon_itemarcanemechanism.png"
    },
    {
      "name": "Assemble Arcane Relic",
      "id": "ch-assemblearcanerelic",
      "text": "3 Arcane Mechanism 合成 1 Arcane Relic；Congregation Profile +10，并获得 Divine Schema。Noosphere 可降低材料费用。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "材料足够。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 0\nXP: 49",
      "image": "icon_itemarcanerelic.png"
    },
    {
      "name": "Assemble Divine Machine",
      "id": "ch-assembledivinemachine",
      "text": "各消耗 1 Relic、Cogwork Relic、Arcane Relic，组装 1 Divine Machine；Congregation Profile +15。优先使用携带的材料，缺少部分可从库存补足。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "三类材料齐备。",
      "statLine": "Complexity: 50\nProfile: 8\nMenace: 5\nXP: 72",
      "image": "icon_divinemachine.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Calculate Secret",
      "id": "ch-assemblearcanesecret",
      "text": "消耗 3 Divine Schema，获得 1 Arcane Knowledge。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "持有足够 Divine Schema。",
      "statLine": "Complexity: 40\nProfile: 0\nMenace: 0\nXP: 60",
      "image": "iconmekspell2.png"
    },
    {
      "name": "Store All Components",
      "id": "ch-storecomponentsall",
      "text": "将携带的所有组件存入当地库存。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "携带至少 1 件组件。",
      "statLine": "Complexity: 1\nProfile: 100；Priority 地点为 500\nMenace: 0\nXP: 3",
      "image": "iconstore1.png",
      "locationGroup": "通用"
    },
    {
      "name": "Store Specific Components",
      "id": "ch-storecomponent",
      "text": "选择一种组件存入当地库存。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "携带组件。",
      "statLine": "Complexity: 1\nProfile: 100；Priority 地点为 500\nMenace: 0\nXP: 3",
      "image": "iconstore1.png",
      "locationGroup": "通用"
    },
    {
      "name": "Take Mekhanite Component",
      "id": "ch-takecomponent",
      "text": "选择库存中的组件领取，数量受人物物品栏空位限制。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "物品栏有空位。",
      "statLine": "Complexity: 1\nProfile: 100\nMenace: 0\nXP: 3",
      "image": "iconstore2.png",
      "locationGroup": "通用"
    },
    {
      "name": "Divert Attention",
      "id": "ch-divertattention",
      "text": "Congregation Profile −20。Underground Networks 每级额外减少 10；−3 时另获得 1 Divine Schema。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "执行者是 Mekhanite、Speaker，或喜好 Mekhanites。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "image": "icon_powerhiddenworks.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Bless Fragments",
      "id": "ch-mek-blesspiece",
      "text": "消耗 2 Divine Schema，创建持续 25 回合的 Regenerating Metals。",
      "location": "<CrossReference name=\"Unearthed Fragments\" href=\"#entry-pr-mek-resourceunearthed\" />",
      "limit": "持有足够 Divine Schema。",
      "statLine": "Complexity: 30\nProfile: 100\nMenace: 0\nXP: 49",
      "image": "icon_powerregeneratingmetal.png"
    },
    {
      "name": "Establish Congregation",
      "id": "ch-mek-buildcongregation",
      "text": "消耗 10 Divine Schema 建立 Mekhanite Congregation。",
      "location": "可渗透的人类聚居地",
      "limit": "我方 Agent；当地合格且未达到 Congregation 上限。",
      "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
      "image": "icon_subcongregation.png"
    },
    {
      "name": "Reveal Fragments",
      "id": "ch-mek-createresourceunearth",
      "text": "消耗 10 Divine Schema，建立 Unearthed Fragments。",
      "location": "Ancient Ruins",
      "limit": "我方 Agent；当地没有碎片。",
      "statLine": "Complexity: 10\nProfile: 90\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth.png"
    },
    {
      "name": "Build MEKHANE +10%",
      "id": "ch-mek-buildmek-tier3",
      "text": "消耗携带的 1 Divine Machine，使建造完成度 +10%。",
      "location": "<CrossReference name=\"MEKHANE's Body\" href=\"#entry-pr-mek-body\" />",
      "limit": "持有 Divine Machine。",
      "statLine": "Complexity: 75\nProfile: 100\nMenace: 0\nXP: 97",
      "image": "icon_divinemachine.png"
    },
    {
      "name": "Guard MEKHANE",
      "id": "ch-mek-guardmek",
      "text": "永久留下一个随从，为 Destroy MEKHANE 增加 Danger。",
      "location": "<CrossReference name=\"MEKHANE's Body\" href=\"#entry-pr-mek-body\" />",
      "limit": "至少带有一个随从。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_mekhane.png"
    },
    {
      "name": "Mekhanite Prayer",
      "id": "ch-mek-prayer",
      "text": "消耗 1 Divine Schema，教团 Elder Influence +10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "Mekhanite，持有 Divine Schema。",
      "statLine": "Complexity: 20\nProfile: 50\nMenace: 5\nXP: 36",
      "image": "base-basicPrayer.png",
      "locationGroup": "通用"
    },
    {
      "name": "Recruit Zealot Minion",
      "id": "ch-mek-recruitzealot",
      "text": "消耗 Divine Schema，招募 Mekhanite Zealot 随从。Militant Following 调整费用与随从属性。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "拥有足够 Divine Schema 与 Command 空间。",
      "statLine": "Complexity: 3\nProfile: 90\nMenace: 0\nXP: 8",
      "image": "icon_acolyte_zealot.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Gain Attention to Sect",
      "id": "ch-mek-gainattentionminor",
      "text": "Minor Sect Profile +15。",
      "location": "<CrossReference name=\"Minor Sect\" href=\"#entry-pr-mek-minorsect\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 25\nProfile: 0\nMenace: 0\nXP: 42",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Grow Sect",
      "id": "ch-mek-growsect",
      "text": "Minor Sect 强度 +30。",
      "location": "<CrossReference name=\"Minor Sect\" href=\"#entry-pr-mek-minorsect\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 30\nProfile: 0\nMenace: 0\nXP: 49",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Boost Production",
      "id": "ch-mek-boostproduction",
      "text": "Production 强度翻倍，最高 100。翻倍结果超过 100 时会立即处理一次生产，并令 Forge Profile +10。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite。",
      "statLine": "Complexity: 15\nProfile: 0\nMenace: 0\nXP: 29",
      "image": "icon_orthodoxboostproduction.png"
    },
    {
      "name": "Boost Relay Signal",
      "id": "ch-mek-boostsignal",
      "text": "Signal 强度 +30。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的 <CrossReference name=\"Signal\" href=\"#entry-pr-mek-relaysignal\" />",
      "limit": "有可用 Signal。",
      "statLine": "Complexity: 15\nProfile: 0\nMenace: 0\nXP: 29",
      "image": "icon_subrelay.png"
    },
    {
      "name": "Impart Mekhanite Knowledge",
      "id": "ch-mek-rulerschema",
      "text": "把 Divine Schema 转交当地统治者。",
      "location": "Mekhanite 统治者所在聚居地",
      "limit": "携带足够 Divine Schema。",
      "statLine": "Complexity: 20\nProfile: 90\nMenace: 0\nXP: 36",
      "image": "icon_wordofmouth.png"
    },
    {
      "name": "Holy Transmission",
      "id": "ch-mek-increasemekpreference",
      "text": "消耗 Divine Schema，使当地统治者皈依 Mekhanites；统治者 Shadow 与 Word of Mouth 降低费用。",
      "location": "有统治者的人类聚居地",
      "limit": "持有足够 Divine Schema。",
      "statLine": "Complexity: 50\nProfile: 90\nMenace: 0\nXP: 72",
      "image": "icon_wordofmouth.png"
    },
    {
      "name": "Obtain Divine Schema",
      "id": "ch-mek-schemastudy",
      "text": "取得 1 Divine Schema 并移除当地图纸；未皈依的英雄执行时获得 Awareness。",
      "location": "<CrossReference name=\"Divine Schema\" href=\"#entry-pr-mek-schema\" />",
      "limit": "Sarkic 人物不能执行；自主 Mekhanite 需等待图纸出现 15 回合。",
      "statLine": "Complexity: 30\nProfile: 70\nMenace: 0\nXP: 49",
      "image": "icon_schema.png"
    },
    {
      "name": "Buy Pieces",
      "id": "ch-buypieces",
      "text": "支付 15 Gold，最多购买 3 Piece。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections ≤−1。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicpiece.png"
    },
    {
      "name": "Buy Mechanisms",
      "id": "ch-buymechanisms",
      "text": "支付 30 Gold，最多购买 3 Mechanism。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections ≤−2。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicmechanism.png"
    },
    {
      "name": "Buy Relic",
      "id": "ch-buyrelic",
      "text": "支付 90 Gold，购买 1 Relic。",
      "location": "已渗透 Market 或 Grand Bazaar",
      "limit": "Mekhanite，物品栏有空位；Black Market Connections 为 −3。",
      "statLine": "Complexity: 3\nProfile: 500\nMenace: 0\nXP: 8",
      "image": "icon_itembasicrelic.png"
    },
    {
      "name": "Blood and Iron",
      "id": "ch-deathtopiece",
      "text": "消耗 25 Death，得到 1 Piece。",
      "location": "Death 或 <CrossReference name=\"Clockwork Death\" href=\"#entry-pr-mek-clockworkvirusdead\" /> 至少 25 的地点",
      "limit": "Blood and Iron 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_red.png"
    },
    {
      "name": "Impossible Geometry",
      "id": "ch-madnesstopiece",
      "text": "消耗 15 Madness，得到 1 Piece。",
      "location": "Madness 至少 15 的地点",
      "limit": "Impossible Geometry 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_pink.png"
    },
    {
      "name": "Mechanical Salvage",
      "id": "ch-ruintopiece",
      "text": "从废墟中取得 1 Piece。",
      "location": "City Ruins",
      "limit": "Mechanical Salvage 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 50\nProfile: 500\nMenace: 0\nXP: 72",
      "image": "icon_powerunearth_orange.png"
    },
    {
      "name": "Orcish Tools",
      "id": "ch-industrytopiece",
      "text": "Orcish Industry +10，并得到 1 Piece。",
      "location": "已渗透 Orc Camp，Orcish Industry 至少 10",
      "limit": "Orcish Tools 生效；物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_yellow.png"
    },
    {
      "name": "Abyssal Ores",
      "id": "ch-deeponestopiececult",
      "text": "Deep One Cult 强度 +15，并取得 1 Piece。",
      "location": "Deep One Cult",
      "limit": "Abyssal Ore 生效；Mekhanite 或 Automaton，物品栏有空位。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21",
      "image": "icon_powerunearth_green.png"
    },
    {
      "name": "Assemble Gatherer",
      "id": "ch-mek-automaton-basic",
      "text": "组装 Gatherer。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Gatherer 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton.png"
    },
    {
      "name": "Assemble Sentinel",
      "id": "ch-mek-automaton-sentinel",
      "text": "组装 Sentinel。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Sentinel 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton_sentry.png"
    },
    {
      "name": "Assemble Speaker",
      "id": "ch-mek-automaton-speaker",
      "text": "组装 Speaker。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Speaker 数)。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "我方 Agent 或 Orthodox Legate；材料足够。",
      "statLine": "Complexity: 30；Automatons 生产达到 100 时为 15\nProfile: 90\nMenace: 5\nXP: 49；生产加成为 29",
      "image": "icon_automaton_speaker.png"
    },
    {
      "name": "Assemble Infiltrator",
      "id": "ch-mek-maxwellist-infiltrator",
      "text": "组装 Infiltrator。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Infiltrator 数)。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Living Saint；材料足够。",
      "statLine": "Complexity: 30\nProfile: 200\nMenace: 5\nXP: 49",
      "image": "icon_construct_infiltrator.png"
    },
    {
      "name": "Assemble Intelligence",
      "id": "ch-mek-maxwellist-intelligence",
      "text": "组装自主 Intelligence。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Intelligence 数)。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Living Saint；材料足够。",
      "statLine": "Complexity: 40\nProfile: 20\nMenace: 0\nXP: 60",
      "image": "icon_construct_intelligence.png"
    },
    {
      "name": "Establish Connection",
      "id": "ch-mek-maxwellist-connection",
      "text": "建立 Maxwellist Connection。",
      "location": "与 <CrossReference name=\"Maxwellist Connection\" href=\"#entry-pr-mek-connection\" /> 修正或下列兴趣点所在地点相邻的陆地：<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" />。",
      "limit": "我方 Agent 或 Living Saint，拥有 Noosphere Connection；目标聚居地完全渗透且尚无连接。",
      "statLine": "Complexity: 15\nProfile: 100\nMenace: 0\nXP: 29",
      "image": "iconmekspell6.png"
    },
    {
      "name": "Clockworks: Fine",
      "id": "ch-mek-clockworksfine",
      "text": "批量加工库存 Piece；每件产物增加 2 Congregation Profile。普通设施产出 Mechanism，Maxwellist 设施产出 Arcane Mechanism。\nOrthodox 分支先以 Piece 是否足够判断，但实际产量读取库存 Mechanism 数；因此其显示说明与执行结果存在差异。",
      "location": "<CrossReference name=\"The Clockworks\" href=\"#entry-pr-mek-clockworks\" />",
      "limit": "Mekhanite；Congregation 库存中有组件。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_scpclockworks.png"
    },
    {
      "name": "Clockworks: Very Fine",
      "id": "ch-mek-clockworksveryfine",
      "text": "批量把已有 Mechanism 升级为对应 Relic，并处理 Piece 到 Mechanism 的加工。默认每 3 件低阶组件产出 1 件高阶组件，每件实际产物使 Congregation Profile +2。",
      "location": "<CrossReference name=\"The Clockworks\" href=\"#entry-pr-mek-clockworks\" />",
      "limit": "Mekhanite；Congregation 库存中有组件。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_scpclockworks.png"
    },
    {
      "name": "Mechanical Hymns",
      "id": "ch-mek-smithboostelder",
      "text": "消耗 2 Divine Schema，创建 Mechanical Hymns；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" />、<CrossReference name=\"Abyssal Congregation\" href=\"#entry-sub-mek-congregationabyssal\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 15\nProfile: 90\nMenace: 0\nXP: 29",
      "image": "icon_brokenchurchshadow.png",
      "locationGroup": "通用"
    },
    {
      "name": "Mekhanite Smithing",
      "id": "ch-mek-smithboostmodifier",
      "text": "消耗 3 Divine Schema，创建 Mekhanite Smithing；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 30\nProfile: 90\nMenace: 0\nXP: 49",
      "image": "icon_brokenChurchSmithing.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Arm Congregation",
      "id": "ch-mek-smithdanger",
      "text": "消耗 3 Divine Schema，创建 Armed Congregation；Metalsmith 免费。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "我方 Agent 或 Metalsmith。",
      "statLine": "Complexity: 30\nProfile: 90\nMenace: 0\nXP: 49",
      "image": "icon_brokenChurchDanger.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Experiment with Cogworks",
      "id": "ch-mek-exile-assembledevastation",
      "text": "消耗 3 Unorthodox Piece，制造 Rampaging Experiment；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment.png"
    },
    {
      "name": "Experiment with the Arcane",
      "id": "ch-mek-exile-assemblemadness",
      "text": "消耗 3 Unorthodox Piece，制造 Maddening Machine；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment3.png"
    },
    {
      "name": "Experiment with Shadow",
      "id": "ch-mek-exile-assembleshadow",
      "text": "消耗 3 Unorthodox Piece，制造 False Image；设施 Profile +10。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "我方 Agent 或 Mekhanite Exile；携带材料。",
      "statLine": "Complexity: 25\nProfile: 100\nMenace: 0\nXP: 42",
      "image": "icon_exileExperiment2.png"
    },
    {
      "name": "Augment",
      "id": "rt-mek-augment",
      "text": "消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。",
      "location": "执行者所在地",
      "limit": "我方 Agent，持有足够 Divine Schema。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21",
      "image": "icon_augmentationadv.png"
    },
    {
      "name": "Unified Church",
      "id": "rt-mek-mekempire",
      "text": "建立 Unified Church 帝国。Dark Empire 和平转化；其他国家不支持 Mekhanites 的领主可能发动内战。",
      "location": "Mekhanite Kingdom 或 Dark Empire 中，有统治者且拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的聚居地。",
      "limit": "The Builder；仅可使用一次。",
      "statLine": "Complexity: 50\nProfile: 0\nMenace: 0\nXP: 72",
      "image": "icon_mekhaneempire.png"
    },
    {
      "name": "Mekhanite Revolution",
      "id": "rt-mek-militancy",
      "text": "建立 Mekhanite Kingdom，可能引起内战。",
      "location": "<CrossReference name=\"Augmented Population\" href=\"#entry-pr-mek-augmentpops\" /> 至少 50 的人类国家聚居地",
      "limit": "The Builder；目标不是 Dark Empire 或既有 Mekhanite 国家。",
      "statLine": "Complexity: 20\nProfile: 0\nMenace: 0\nXP: 36",
      "image": "icon_zealot.png"
    },
    {
      "name": "Gather Relics",
      "id": "rt-mek-gainrelics",
      "text": "从 Congregation 库存中收集 Relic、Cogwork Relic、Arcane Relic 各 1 件，用于制作 Divine Machine。",
      "location": "The Builder 所在地",
      "limit": "The Builder，物品栏有空位且世界库存中有材料。",
      "statLine": "Complexity: 20\nProfile: 0\nMenace: 0\nXP: 36",
      "image": "iconstore2.png"
    },
    {
      "name": "Mekhanite Crusade",
      "id": "rt-mek-war",
      "text": "使 Unified Church 向目标国家宣战，帝国内贵族皈依 Mekhanites。",
      "location": "Unified Church 以外的人类或精灵聚居地",
      "limit": "The Builder；Unified Church 已建立。",
      "statLine": "Complexity: 10\nProfile: 0\nMenace: 50\nXP: 21",
      "image": "base-war.png"
    },
    {
      "name": "Drive Back",
      "id": "rt-mek-scatter",
      "text": "驱退本地非 Mekhanite 单位。",
      "location": "Bumaro's Warhammer 持有者所在地",
      "limit": "持有 Bumaro’s Warhammer；冷却 5 回合。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_itemhammer.png"
    },
    {
      "name": "Propagate Clockwork Virus",
      "id": "ch-mek-growclockworkvirus",
      "text": "强度 +30。",
      "location": "<CrossReference name=\"Clockwork Virus\" href=\"#entry-pr-mek-clockworkvirus\" />",
      "limit": "我方 Agent 或 Mekhanite。",
      "statLine": "Complexity: 40\nProfile: 0\nMenace: 0\nXP: 60",
      "image": "icon_scpclockworkvirus.png"
    },
    {
      "name": "Spread Rotbolt",
      "id": "ch-mek-growrotbolt",
      "text": "持续施法时，强度低于 100 的 Rotbolt 每回合增加执行者 Lore；执行者每回合 Menace +2。",
      "location": "<CrossReference name=\"Rotbolt\" href=\"#entry-pr-mek-rotbolt\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 10\nProfile: 0\nMenace: 0\nXP: 21",
      "image": "base-deepOnes.png"
    },
    {
      "name": "Grow the Machine",
      "id": "ch-mek-growmachine",
      "text": "完成时强度 +30。执行者已有 Machine Effect 时，该特质强度减半，并增加个人 Shadow 15 个百分点。交付组件界面的额外转化结果未找到可靠生效路径。",
      "location": "<CrossReference name=\"A Machine\" href=\"#entry-pr-mek-machine\" />",
      "limit": "我方 Agent，或受 Machine Effect 影响的自主英雄。",
      "statLine": "Complexity: 5\nProfile: 50 + A Machine 强度\nMenace: 0\nXP: 12",
      "image": "icon_scpamachine.png"
    },
    {
      "name": "Raid Vault",
      "id": "ch-mek-vault-raid",
      "text": "夺回库存中的 Relics，并将 Vault Research 重置为 1。",
      "location": "已渗透的 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Mekhanite，排除 Automaton；物品栏有空位。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 90\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-raid.png"
    },
    {
      "name": "Desecrate Sarkic Tomb",
      "id": "ch-mek-sarkictomb-desecrate",
      "text": "使墓穴进入 Desecrated 状态，失去强度并停止产出 Sarkic Insights。",
      "location": "<CrossReference name=\"Klavigar Tomb\" href=\"#entry-pr-mek-sarkictomb\" />",
      "limit": "Mekhanite 或 Awareness 100% 的人物，排除 Sarkic。",
      "statLine": "Complexity: 50\nProfile: 100\nMenace: 0\nXP: 72",
      "image": "icon_subsarkictomb.png"
    },
    {
      "name": "Banish Red Death",
      "id": "ch-mek-co-destroyreddeath",
      "text": "强度 −500；降到 0 以下时移除，并清除 The Flesh That Hates。",
      "location": "<CrossReference name=\"Red Death\" href=\"#entry-pr-mek-sarkic-reddeath\" />",
      "limit": "我方 Agent 或 Chosen One。",
      "statLine": "Complexity: 30\nProfile: 0\nMenace: 0\nXP: 49",
      "image": "base-reforgeTheSeal.png"
    },
    {
      "name": "Expose Sarkics",
      "id": "ch-mek-sarkicagentexpose",
      "text": "Temple Profile +30。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent；Profile 低于 100。",
      "statLine": "Complexity: 40\nProfile: 90 + 已解封数 ×20 + Sarkic Temple Profile\nMenace: 0\nXP: 60",
      "image": "icon_sarkicspell2.png"
    },
    {
      "name": "Investigate Sarkics",
      "id": "ch-mek-sarkicagentinvestigate",
      "text": "Sarkic Temple Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 0\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-clues.png"
    },
    {
      "name": "Destroy Sarkic Temple",
      "id": "ch-mek-sarkicdestroytemple",
      "text": "摧毁 Sarkic Temple。",
      "location": "Profile 达到 100 的 <CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Killing Blows 生效；Mekhanite，排除 Automaton。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 90\nMenace: 0\nDanger: 30\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "image": "base-war.png"
    },
    {
      "name": "Production: Automatons",
      "id": "ch-mek-productionautomaton",
      "text": "切换为 Automatons；Production 每回合 +0.5，达到 100 后相应组装 Complexity 减半。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_orthodoxautomaton.png"
    },
    {
      "name": "Production: Smelt Gold",
      "id": "ch-mek-productionxp",
      "text": "切换为 Smelt Gold；Production 每回合 +2，满额后持续支援 Council of Patriarchs。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_orthodoxgold.png"
    },
    {
      "name": "Production: Automaton Repairs",
      "id": "ch-mek-productionrepair",
      "text": "切换为 Automaton Repairs；Production 每回合 +3，满额后为机械单位及 Legates 恢复 2 HP。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_orthodoxrepair.png"
    },
    {
      "name": "Production: Smelt Metal",
      "id": "ch-mek-productionsmelt",
      "text": "切换为 Smelt Metal；Production 每回合 +1，满额后生产 1 Piece。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_orthodoxpiece.png"
    },
    {
      "name": "Production: Cogwork Military",
      "id": "ch-mek-productioncogwork",
      "text": "切换为 Cogwork Military；Production 每回合 +1，满额后增加 Mekhanite Army 的 15 额外 HP 上限。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_orthodoxdanger.png"
    },
    {
      "name": "Production: Idle",
      "id": "ch-mek-productionstop",
      "text": "切换为 Idle；Production 每回合 +1，满额后产生 1 Elder Influence。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_subforge.png"
    },
    {
      "name": "Signal: Repeating",
      "id": "ch-mek-signalbuff",
      "text": "切换为 Repeating；每回合为 Noosphere 增加现存连接数量的强度。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的 <CrossReference name=\"Signal\" href=\"#entry-pr-mek-relaysignal\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_powermaxwellist.png"
    },
    {
      "name": "Signal: Fractal",
      "id": "ch-mek-signalprofile",
      "text": "切换为 Fractal；Signal 每回合 +5，满额后连接地点的 Mekhanite Profile −20。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的 <CrossReference name=\"Signal\" href=\"#entry-pr-mek-relaysignal\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_powermaxwellist.png"
    },
    {
      "name": "Stop the Signal",
      "id": "ch-mek-signalstop",
      "text": "停止当前 Signal。",
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的 <CrossReference name=\"Signal\" href=\"#entry-pr-mek-relaysignal\" />",
      "limit": "Mekhanite；当前未处于该模式。",
      "statLine": "Complexity: 1\nProfile: 0\nMenace: 0\nXP: 3",
      "image": "icon_powermaxwellist.png"
    },
    {
      "id": "ch-mek-signalrepeating",
      "name": "Repeating Signal",
      "text": "创建持续 30 回合的 Repeating Signal。",
      "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
      "limit": "Mekhanite；Noosphere 未达到上限。",
      "statLine": "Complexity: 20\nProfile: 0\nMenace: 0\nXP: 36",
      "image": "icon_powermaxwellist.png"
    },
    {
      "id": "ch-mek-sacrificeself",
      "name": "Throw Self In",
      "image": "base-brutalAssassination.png",
      "text": "执行者死亡，A Machine 的当前强度与强度上限各增加 100。",
      "location": "<CrossReference name=\"A Machine\" href=\"#entry-pr-mek-machine\" />",
      "limit": "我方可控 Agent 可以执行；带有 Machine Effect 的其他人物也可以执行，但 Chosen One 除外。",
      "statLine": "Complexity: 10\nProfile: 200\nMenace: 0\nXP: 21"
    },
    {
      "id": "place-task-3591348120-ch-mek-councilschema",
      "name": "Centralized Knowledge",
      "text": "花费 Gold 获得 1 Divine Schema。",
      "image": "/locations/mod/God_MEKHANE.icon_orthodoxschema.png",
      "meta": "固定进度",
      "baseGame": false,
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "玩家人物，携带足够 Gold。",
      "statLine": "Complexity: 5\nProfile: 40\nMenace: 5\nXP: 12"
    }
  ]
},
{
  "id": "hero-tasks",
  "title": "英雄任务",
  "media": true,
  "items": [
    {
      "name": "Destroy MEKHANE",
      "id": "ch-mek-damagemek",
      "meta": "Might",
      "text": "神体完整度 −10；归零造成玩家失败。",
      "location": "<CrossReference name=\"MEKHANE's Body\" href=\"#entry-pr-mek-body\" />",
      "limit": "英雄可执行。",
      "statLine": "Complexity: 30\nProfile: 世界恐慌百分点 + 神体完成度百分点\nMenace: 神体完成度百分点 ×2\nDanger: 神体驻守随从提供\nXP: 49",
      "positiveTags": "Ambition",
      "negativeTags": "Shadow、Discord、Mekhanites",
      "image": "icon_powerfalseimage.png"
    },
    {
      "name": "Investigate Mekhanites",
      "id": "ch-mek-hero-investigatemekhanites",
      "meta": "Command",
      "text": "创建 Recent Investigations，持续提高 Congregation Profile。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "非 Mekhanite；个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。",
      "statLine": "Complexity: 40；Sentinel Presence 生效时 80\nProfile: 40 + Congregation Profile\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 60；加强后为 102",
      "positiveTags": "Danger",
      "negativeTags": "Mekhanites、Shadow",
      "image": "icon_powerhiddenworks.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Expose Mekhanites",
      "id": "ch-mek-hero-exposecongregation",
      "meta": "Command",
      "text": "当前 Profile −20，最低 Profile +10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "Awareness 100%，个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。",
      "statLine": "Complexity: 20；Sentinel Presence 生效时 40\nProfile: 20 + Congregation Profile\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 36；加强后为 60",
      "positiveTags": "Cooperation",
      "negativeTags": "Mekhanites",
      "image": "icon_powerfalseimage.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Steal Relics",
      "id": "ch-mek-hero-raidcongregation",
      "meta": "Might",
      "text": "偷走最多 3 件 Relic；对非 Relic 组件逐件进行 4/9 概率的销毁判定。Congregation Profile −15；当地 Armed Congregation 强度 −10。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "英雄有物品栏空位，满足任务的觉醒与 Shadow 限制。",
      "statLine": "Complexity: 30；Sentinel Presence 生效时 60\nProfile: 50 + 已解封数 ×10\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 49；加强后为 82",
      "positiveTags": "Danger",
      "negativeTags": "Mekhanites、Shadow、Combat",
      "image": "base-raid.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Destroy Components",
      "id": "ch-mek-hero-raidcongregation-destroycomponents",
      "meta": "Might",
      "text": "尝试销毁最多 10 件组件，每件判定成功率 4/9；也会拿走可携带的 Relic。Congregation Profile −5。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "非 Mekhanite 英雄。",
      "statLine": "Complexity: 20；Sentinel Presence 生效时 40\nProfile: 50 + 已解封数 ×10\nMenace: 0\nDanger: Armed Congregation +10；Augmented Population 达到 100 时 +5\nXP: 36；加强后为 60",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites、Shadow",
      "image": "base-raid.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Destroy Relics",
      "id": "ch-mek-hero-destroyrelic",
      "meta": "Might",
      "text": "对 Relic 逐件进行 4/9 概率的销毁判定，最多处理 3 件。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "Awareness 100%、个人 Shadow 未满、对 Mekhanites 偏好不高于 0 的英雄，或 Sarkic 人物。",
      "statLine": "Complexity: 30；Sentinel Presence 生效时 60\nProfile: Congregation Profile\nMenace: 0\nXP: 49；加强后为 82",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites",
      "image": "base-raid.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Convert",
      "id": "ch-mek-hero-convert",
      "meta": "Command",
      "text": "使执行者成为 Mekhanite；人物继续自主行动。",
      "location": "<CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Orcish Congregation\" href=\"#entry-sub-mek-congregationorc\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "尚未皈依且喜好 Mekhanites。",
      "statLine": "Complexity: 20\nProfile: 50\nMenace: 0\nXP: 36",
      "positiveTags": "Cooperation、Mekhanites、Religion",
      "negativeTags": "无",
      "image": "icon_subcongregation.png",
      "locationGroup": "除Abyssal外通用"
    },
    {
      "name": "Disperse Minor Sect",
      "id": "ch-mek-hero-disperseminor",
      "meta": "Command",
      "text": "强度 −50；结果不大于 0 且英雄 Awareness 至少 50% 时移除教派。其他情况下教派强度变为 1，Profile 归零。Distractions 生效时，成功移除会令英雄 Disrupted 3 回合。",
      "location": "<CrossReference name=\"Minor Sect\" href=\"#entry-pr-mek-minorsect\" />",
      "limit": "非 Mekhanite 英雄。",
      "statLine": "Complexity: 50 + Entrenched Doctrine 的有效等级 ×20\nProfile: Minor Sect Profile\nMenace: 世界恐慌百分点 ×0.4\nXP: 随 Complexity 计算",
      "positiveTags": "Combat",
      "negativeTags": "Mekhanites",
      "image": "icon_minorsect.png"
    },
    {
      "name": "Investigate Exiles",
      "id": "ch-mek-hero-investigateexile",
      "meta": "Intrigue",
      "text": "Profile +25；有 5% 概率使英雄对 Mekhanites 的偏好降低。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "Awareness 超过 50%，设施 Profile 低于 50。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 0\nXP: 42",
      "positiveTags": "无",
      "negativeTags": "Mekhanites、Discord、Religion",
      "image": "icon_minorsect.png"
    },
    {
      "name": "Raid Exiles",
      "id": "ch-mek-hero-raidexile",
      "meta": "Intrigue",
      "text": "Profile 超过 100 时进行摧毁判定，成功后移除设施并重置当地 Shadow 与 Infiltration；未摧毁时 Profile +25。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "个人 Shadow 未满，设施 Profile 至少 50。",
      "statLine": "Complexity: 25\nProfile: 50\nMenace: 0\nXP: 42",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites、Discord、Religion",
      "image": "icon_minorsect.png"
    },
    {
      "name": "Raise Suspicion",
      "id": "ch-mek-hero-raisesuspicion",
      "meta": "Command",
      "text": "降低统治者对 Mekhanites 的偏好 1 级。",
      "location": "有人类统治者的聚居地",
      "limit": "英雄厌恶 Mekhanites、个人 Shadow 未满；统治者 Awareness 100%。",
      "statLine": "Complexity: 20\nProfile: 60 + 已解封数 ×20\nMenace: 0\nXP: 36",
      "positiveTags": "Cooperation",
      "negativeTags": "Mekhanites、Religion",
      "image": "base-vendetta.png"
    },
    {
      "name": "Sabotage Forge Production",
      "id": "ch-mek-hero-sabotageproduction",
      "meta": "Might",
      "text": "Production 强度 −25。",
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 的 <CrossReference name=\"Production\" href=\"#entry-pr-mek-forgeproduction\" />",
      "limit": "Awareness 100%，对 Mekhanites 偏好不高于 0。",
      "statLine": "Complexity: 15\nProfile: 30 + 世界恐慌百分点 ×0.25\nMenace: 0\nXP: 29",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Mekhanites",
      "image": "icon_orthodoxdissaray.png"
    },
    {
      "name": "Combat Global Rotbolt Spread",
      "id": "ch-mek-hero-shrinkrotbolt",
      "meta": "Lore",
      "text": "持续施法期间，每回合使所有陆地 Rotbolt 减少施法者 Lore，同时消耗 2 Geomantic Locus，执行者 Profile +2。",
      "location": "Geomantic Locus",
      "limit": "非 Mekhanite、个人 Shadow 未满，Geomancy 至少 2；当地 Locus 强度大于 0。",
      "statLine": "Complexity: 10\nProfile: 0\nMenace: 0\nXP: 21",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "icon_scprotbolt.png"
    },
    {
      "name": "Combat Local Rotbolt Spread",
      "id": "ch-mek-hero-shrinkrotboltlocal",
      "meta": "Lore",
      "text": "强度 −50。",
      "location": "<CrossReference name=\"Rotbolt\" href=\"#entry-pr-mek-rotbolt\" />",
      "limit": "非 Mekhanite、个人 Shadow 未满，Geomancy 至少 1。",
      "statLine": "Complexity: 10\nProfile: 0\nMenace: 0\nXP: 21",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "icon_scprotbolt.png"
    },
    {
      "name": "Banish Clockwork Virus",
      "id": "ch-mek-co-destroyclockworkvirus",
      "meta": "Lore",
      "text": "强度 −100；结果小于 0 时移除。",
      "location": "<CrossReference name=\"Clockwork Virus\" href=\"#entry-pr-mek-clockworkvirus\" />",
      "limit": "仅 Chosen One。",
      "statLine": "Complexity: 30\nProfile: 0\nMenace: 0\nXP: 49",
      "positiveTags": "无",
      "negativeTags": "Disease、Mekhanites",
      "image": "base-reforgeTheSeal.png"
    },
    {
      "name": "Destroy A Machine",
      "id": "ch-mek-co-destroymachine",
      "meta": "Lore",
      "text": "强度 −50；结果小于 0 时移除，并停用相关后续神力。",
      "location": "<CrossReference name=\"A Machine\" href=\"#entry-pr-mek-machine\" />",
      "limit": "仅 Chosen One。",
      "statLine": "Complexity: 30\nProfile: 0\nMenace: 0\nXP: 49",
      "positiveTags": "Combat、Danger",
      "negativeTags": "Shadow、Madness、Mekhanites",
      "image": "base-reforgeTheSeal.png"
    },
    {
      "name": "Combat Clockwork Virus",
      "id": "ch-mek-shrinkclockworkvirus",
      "meta": "Lore",
      "text": "强度 −15。",
      "location": "<CrossReference name=\"Clockwork Virus\" href=\"#entry-pr-mek-clockworkvirus\" />",
      "limit": "除 Chosen One 外的人物均可执行；英雄会自主选择。",
      "statLine": "Complexity: 40\nProfile: 50\nMenace: 0\nXP: 60",
      "positiveTags": "无",
      "negativeTags": "Disease、Mekhanites",
      "image": "icon_scpclockworkvirus.png"
    },
    {
      "name": "Contain Relics",
      "id": "ch-mek-vault-hero-storerelics",
      "meta": "Other",
      "text": "把携带的 Relics 放入 Vault，增加其研究速度。",
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "英雄携带可收容的 Relic。",
      "statLine": "Complexity: 3\nProfile: 90 + 世界恐慌百分点 ×0.25\nMenace: 0\nXP: 8",
      "positiveTags": "无",
      "negativeTags": "Mekhanites",
      "image": "icon_vault.png"
    },
    {
      "name": "Reforge Seals",
      "id": "ch-mek-vaultseal",
      "meta": "Lore",
      "text": "重新封印 MEKHANE，玩家立即失败。",
      "location": "<CrossReference name=\"Vault Research\" href=\"#entry-pr-mek-vault\" /> 至少 300 的 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "仅 Chosen One；Foundation 路线已开启。",
      "statLine": "Complexity: 75\nProfile: 90 + 世界恐慌百分点 ×0.25\nMenace: 0\nXP: 97",
      "positiveTags": "Cooperation",
      "negativeTags": "Shadow",
      "image": "base-reforgeTheSeal.png"
    },
    {
      "id": "place-task-3591348120-ch-mek-sarkicheroinvestigate",
      "name": "Investigate Sarkics",
      "text": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。",
      "image": "/locations/game/clues.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "我方 Agent。",
      "statLine": "Complexity: 10 + 当地 Security ×5\nProfile: 0\nMenace: 0\nXP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋",
      "positiveTags": "Danger",
      "negativeTags": "Disease、Sarkics"
    },
    {
      "id": "place-task-3591348120-ch-mek-vault-hero-learn",
      "name": "Study Enemy",
      "text": "获得 Specialist: Mekhanite。",
      "image": "/locations/mod/God_MEKHANE.icon_brokenchurchshadow.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "世界恐慌 ≥50%；执行者 Awareness ≥50%，不是 Mekhanite 或 Biomechanical，尚无该特质。",
      "statLine": "Complexity: 3\nProfile: 90 + 世界恐慌 / 4\nMenace: 0\nXP: 8",
      "positiveTags": "Co-Operation",
      "negativeTags": "Shadow、Mekhanites"
    },
    {
      "id": "place-task-3591348120-ch-mek-vault-hero-create",
      "name": "Create Containment Vault",
      "text": "使用携带的 Relic 建立 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />，并将它存入。",
      "image": "/locations/mod/God_MEKHANE.icon_vault.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />",
      "limit": "世界恐慌 ≥25%，Alliance 存在；执行者携带 Relic。",
      "statLine": "Complexity: 30\nProfile: 90 + 世界恐慌 / 4\nMenace: 0\nXP: 49",
      "positiveTags": "无",
      "negativeTags": "Shadow、Mekhanites"
    }
  ]
},
{
  "id": "ruler-actions",
  "title": "统治者行动",
  "media": true,
  "items": [
    {
      "name": "Study Mekhanite Texts",
      "id": "act-mek-convertbasestudy",
      "text": "消耗 30 Gold，获得 1 + 当地储存的三类 Relic 总数的 Divine Schema。",
      "location": "Mekhanite 统治者的聚居地",
      "limit": "统治者是 Mekhanite。",
      "time": "5 回合",
      "positiveTags": "Ambition",
      "negativeTags": "无",
      "image": "icon_schema.png"
    },
    {
      "name": "Self-Augment",
      "id": "act-mek-convertbaseaugment",
      "text": "消耗 3 Divine Schema，使最低的一项基础属性 +1；平手时依次选择 Command、Intrigue、Might、Lore。记录一次 Augmentation。",
      "location": "Mekhanite 统治者的聚居地",
      "limit": "拥有足够图纸。",
      "time": "5 回合",
      "positiveTags": "Ambition",
      "negativeTags": "Discord",
      "image": "icon_augmentationadv.png"
    },
    {
      "name": "Augment Military",
      "id": "act-mek-convertarmy",
      "text": "把现有军队转为 Mekhanite Army，或建立新军队。费用为 max(1, ⌊(100 − Augmented Population 强度) /10⌋) Divine Schema。原军队 HP 大于 1 时继承，否则以新军队一半 HP 开始。",
      "location": "<CrossReference name=\"Augmented Population\" href=\"#entry-pr-mek-augmentpops\" />",
      "limit": "Mekhanite 统治者；现有军队尚未机械化。",
      "time": "5 回合",
      "positiveTags": "Combat",
      "negativeTags": "无",
      "image": "icon_acolyte_zealot.png"
    },
    {
      "name": "Augment Population",
      "id": "act-mek-convertbasedarkactionaugmentpop",
      "text": "消耗 3 Divine Schema，建立 Augmented Population，并使当地宗教归属 Church of the Broken God。",
      "location": "Shadow 100% 的聚居地",
      "limit": "尚无 Augmented Population。",
      "time": "5 回合",
      "positiveTags": "Mekhanites",
      "negativeTags": "Discord",
      "image": "icon_augmentationadv.png"
    },
    {
      "name": "Sterilize Land",
      "id": "act-mek-convertbasedarkactiondestroyenviro",
      "text": "实际扣除 100 Divine Schema 和 100 Gold，创建 Sterilized Land，并给本地地形增加 20 火山破坏。",
      "location": "统治者的聚居地",
      "limit": "尚无 Sterilized Land，资源足够。",
      "time": "10 回合",
      "positiveTags": "Mekhanites、Madness、Discord",
      "negativeTags": "Cooperation、Gold",
      "image": "icon_sterilizedland.png"
    },
    {
      "name": "Reallocate Resources",
      "id": "act-mek-convertbasedarkactiondonate",
      "text": "消耗 3 Divine Schema，为一处 Congregation 增添 Piece，并创建 Reallocated Resources；优先选择 Priority。若当地属于其他教团，Unrest +30。",
      "location": "统治者的聚居地",
      "limit": "喜好 Mekhanites，存在可接受组件的 Congregation。",
      "time": "5 回合",
      "positiveTags": "Cooperation",
      "negativeTags": "Discord"
    },
    {
      "name": "Mekhanite Gold / Digital Gold / Synthesize Gold",
      "id": "act-mek-convertbasegold",
      "text": "消耗 3 Divine Schema，获得 ⌊Prosperity ×45×当地对应 Relic 数⌋ Gold。普通 Congregation 使用 Relic，Forge 使用 Cogwork Relic，Relay 使用 Arcane Relic。",
      "location": "统治者的聚居地",
      "limit": "统治者喜好 Mekhanites。",
      "time": "5 回合",
      "positiveTags": "Mekhanites、Gold",
      "negativeTags": "无",
      "image": "icon_powerorthodox.png"
    },
    {
      "name": "Hide Mekhanites",
      "id": "act-mek-convertbasehidecongregation",
      "text": "消耗 3 Divine Schema，使 Congregation Profile −25。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "统治者喜好 Mekhanites，当前 Profile 高于最低值；不在 Mekhanite Kingdom 内。",
      "time": "10 回合",
      "positiveTags": "Mekhanites",
      "negativeTags": "Gold",
      "image": "icon_powerhiddenworks.png"
    },
    {
      "name": "Holy Transmission",
      "id": "act-mek-convertbaseincreasepreference",
      "text": "消耗 3 Divine Schema，随机使一个同国相邻统治者对 Mekhanites 的偏好 +1。",
      "location": "Mekhanite 统治者的聚居地",
      "limit": "邻近候选人的偏好不高于 0，Awareness 低于 50%。",
      "time": "5 回合",
      "positiveTags": "Shadow、Cooperation、Religion",
      "negativeTags": "无",
      "image": "icon_wordofmouth.png"
    },
    {
      "name": "Instill Order",
      "id": "act-mek-convertbaseunrest",
      "text": "消耗 3 Divine Schema，Unrest −25、Devastation −25。",
      "location": "有 Unrest 或 <CrossReference name=\"Devastation\" href=\"#entry-base-devastation\" /> 的聚居地",
      "limit": "至少一个目标修正具有正强度。",
      "time": "5 回合",
      "positiveTags": "Mekhanites、Cooperation",
      "negativeTags": "Discord",
      "image": "icon_brokenchurchshadow.png"
    },
    {
      "name": "Rush Clockwork Soldiers",
      "id": "act-mek-convertbuildweakarmy",
      "text": "消耗 100 Gold，组建 30 HP 的 Clockwork Army。",
      "location": "战争中的 Mekhanite Kingdom 或 Dark Empire",
      "limit": "统治者资源足够。",
      "time": "2 回合",
      "positiveTags": "Combat、Cooperation",
      "negativeTags": "无",
      "image": "icon_army_artificial.png"
    },
    {
      "name": "Dismantle Congregation",
      "id": "act-mek-awaredestroycongregation",
      "text": "消耗 100 Gold，拆除 Congregation。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 100，对 Mekhanites 的偏好不高于 0，Congregation Profile 至少 50。",
      "time": "15 回合",
      "positiveTags": "Combat",
      "negativeTags": "Gold、Mekhanites",
      "image": "icon_powerfalseimage.png"
    },
    {
      "name": "Expose Congregation",
      "id": "act-mek-awareexposecongregation",
      "text": "消耗 150 Gold，当前 Profile −20，最低 Profile +10。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 150，对 Mekhanites 的偏好不高于 0，当前 Profile 高于最低值。",
      "time": "10 回合",
      "positiveTags": "Combat",
      "negativeTags": "Gold、Mekhanites、Shadow"
    },
    {
      "name": "Investigate Congregation",
      "id": "act-mek-awareinvestigatecongregation",
      "text": "消耗 100 Gold，创建 Recent Investigations。",
      "location": "拥有 <CrossReference name=\"Mekhanite Congregation\" href=\"#entry-sub-mek-congregation\" />、<CrossReference name=\"Citadel\" href=\"#entry-sub-mek-congregationtower\" />、<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" />、<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 的人类体系聚居地。",
      "limit": "Gold 超过 100，世界恐慌至少 10%，Congregation Profile 至少 5，对 Mekhanites 的偏好不高于 0；没有正在进行的调查修正。",
      "time": "10 回合",
      "positiveTags": "无",
      "negativeTags": "Mekhanites"
    },
    {
      "name": "Construct Vault",
      "id": "act-mek-awarevaultbuild",
      "text": "消耗 200 Gold，建立 Containment Vault。",
      "location": "Alliance 内的 City 或 Elven City",
      "limit": "Awareness 100%，Gold 超过 200，对 Mekhanites 的偏好不高于 0；世界尚无 Vault。",
      "time": "5 回合",
      "positiveTags": "无",
      "negativeTags": "Mekhanites、Shadow",
      "image": "icon_vault.png"
    },
    {
      "name": "Quarantine Clockwork Virus",
      "id": "act-mek-awareclockworkviruspanic",
      "text": "Clockwork Virus −90，最低 0；Clockwork Death +30，创建强度 30 的 Quarantine，并使世界恐慌临时增加 5 个百分点。",
      "location": "<CrossReference name=\"Clockwork Virus\" href=\"#entry-pr-mek-clockworkvirus\" /> 至少 100 的聚居地",
      "limit": "由当地统治者执行。",
      "time": "5 回合",
      "positiveTags": "Cruel",
      "negativeTags": "Disease、Mekhanites",
      "image": "icon_scpclockworkvirus.png"
    },
    {
      "name": "Quarantine Red Death",
      "id": "act-mek-awarereddeathpanic",
      "text": "Red Death −90，增加 Death，并实施 Quarantine。",
      "location": "<CrossReference name=\"Red Death\" href=\"#entry-pr-mek-sarkic-reddeath\" /> 至少 100 的聚居地",
      "limit": "由当地统治者执行。",
      "time": "5 回合",
      "positiveTags": "Cruel",
      "negativeTags": "Disease、Sarkics",
      "image": "icon_sarkic_fleshthathates.png"
    }
  ]
},
{
  "id": "religious-tasks",
  "title": "宗教任务",
  "media": true,
  "items": [
    {
      "name": "Speaker's Sermon",
      "id": "ch-mek-increasemekpreferencespeaker",
      "meta": "Other",
      "text": "创建 Speaker's Sermon，按当地人口获得最多 3 Divine Schema。",
      "location": "有统治者的人类聚居地",
      "limit": "仅 Speaker。",
      "statLine": "Complexity: max(5, 30 − 统治者 Shadow 百分点 ×0.25)\nProfile: 50\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "icon_orthodoxsermon.png"
    },
    {
      "name": "Harvest Information",
      "id": "ch-librarytopiece",
      "meta": "Lore",
      "text": "消耗连接强度 50，收集最多 3 Piece。",
      "location": "<CrossReference name=\"Maxwellist Connection\" href=\"#entry-pr-mek-connection\" /> 至少 50 的地点",
      "limit": "仅 Intelligence；物品栏有空位。",
      "statLine": "Complexity: 15\nProfile: 100\nMenace: 0\nXP: 29",
      "positiveTags": "Mekhanites",
      "negativeTags": "无",
      "image": "iconmekspell3.png"
    },
    {
      "name": "Unorthodox Experiment",
      "id": "ch-mek-exileexperiment",
      "meta": "Lore",
      "text": "尝试产生 Unorthodox Piece，供实验组装使用。",
      "location": "<CrossReference name=\"Exile Community\" href=\"#entry-sub-mek-exiles\" />",
      "limit": "仅 Mekhanite Exile。",
      "statLine": "Complexity: 10\nProfile: 50\nMenace: 0\nXP: 21",
      "positiveTags": "Shadow、Discord",
      "negativeTags": "无",
      "image": "icon_subexiles.png"
    },
    {
      "name": "Gain Insight",
      "id": "ch-mek-sarkic-study",
      "meta": "Lore",
      "text": "消耗知识地点修正，获得 Sarkic Insights。",
      "location": "Arcane Secret 或 Sarkic Insight",
      "limit": "Sarkic 人物，持有 Insights 少于 30。",
      "statLine": "Complexity: 20\nProfile: 500\nMenace: 0\nXP: 36",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_secretsarkic.png"
    },
    {
      "name": "Find Insights",
      "id": "ch-mek-sarkictomb-gather",
      "meta": "Lore",
      "text": "取得 Sarkic Insights，执行期间墓穴每回合强度 −2。",
      "location": "<CrossReference name=\"Klavigar Tomb\" href=\"#entry-pr-mek-sarkictomb\" />",
      "limit": "Sarkic 人物，持有 Insights 少于 30；墓穴未被亵渎。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_subsarkictomb.png"
    },
    {
      "name": "Cleanse Klavigar's Tomb",
      "id": "ch-mek-sarkictomb-cleanse",
      "meta": "Lore",
      "text": "消耗 25 Sarkic Insights，解除亵渎，恢复采集与增长。",
      "location": "Desecrated 状态的 <CrossReference name=\"Klavigar Tomb\" href=\"#entry-pr-mek-sarkictomb\" />",
      "limit": "Sarkic 人物。",
      "statLine": "Complexity: 50\nProfile: 100\nMenace: 0\nXP: 72",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_subsarkictomb.png"
    },
    {
      "name": "Unearth Klavigar's Tomb",
      "id": "ch-mek-sarkictomb",
      "meta": "Intrigue",
      "text": "建立 Klavigar Tomb。基础费用为现存墓穴数 ×10 Insights，再加 ⌊当地 Infiltration 百分点 /20⌋。",
      "location": "Ancient Ruins",
      "limit": "Karcist；世界墓穴少于 4，地点尚未完全渗透且无冲突设施。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_subsarkictomb.png"
    },
    {
      "name": "Mutate",
      "id": "ch-mek-sarkicmutate",
      "meta": "Lore",
      "text": "消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Applied Mutations 生效，已有突变总等级低于人物等级。",
      "statLine": "Complexity: 10\nProfile: 200\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicpop.png"
    },
    {
      "name": "Karcist Ascension",
      "id": "ch-mek-sarkickarcist",
      "meta": "Lore",
      "text": "使选定的 Sarkic Cultist 晋升为 Karcist；Temple Profile +10。消耗 Sarkic Insights：当前没有 Karcist 时为 1，否则为现存 Karcist 数 ×10。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Karcist Ascension 生效；仅教团选定的继任者，Insights 足够。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicKarcist.png"
    },
    {
      "name": "Grand Karcist Ascension",
      "id": "ch-mek-sarkicgrandkarcist",
      "meta": "Command",
      "text": "使 Karcist 晋升为 Grand Karcist。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist 教义生效，尚无已选定的最高领袖。需要至少 15 Sarkic Insights；完成函数没有扣除该资源。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "base-deepOnes.png"
    },
    {
      "name": "Karcist's Sermon",
      "id": "ch-mek-sarkicsermon",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，创建 Karcist's Sermon。",
      "location": "有统治者的人类聚居地",
      "limit": "Karcist；目标不在 Alliance，且尚未完全渗透或完全 Enshadowed。",
      "statLine": "Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)\nProfile: 200\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicsermon.png"
    },
    {
      "name": "Convert Ruler",
      "id": "ch-mek-sarkicpreference",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，使统治者皈依 Sarkic。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> 或 <CrossReference name=\"Sarkic Population\" href=\"#entry-pr-mek-sarkic-pops\" />",
      "limit": "Sarkic 人物，目标符合转化条件。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicconvert.png"
    },
    {
      "name": "Sarkic Initiation",
      "id": "ch-mek-sarkicrecruit",
      "meta": "Command",
      "text": "消耗 5 Sarkic Insights，招募 Sarkic Cultist。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Karcist。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_acolyte1sf.png"
    },
    {
      "name": "Recruit Sarkic Initiate Minion",
      "id": "ch-mek-sarkic-recruitminion",
      "meta": "Command",
      "text": "消耗 3 Sarkic Insights，招募 Sarkic Initiate 随从。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Sarkic 人物。",
      "statLine": "Complexity: 3\nProfile: 90\nMenace: 0\nXP: 8",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_cultist.png"
    },
    {
      "name": "Root Out Infiltration",
      "id": "ch-mek-sarkic-security",
      "meta": "Intrigue",
      "text": "消耗 10 Sarkic Insights，清除当地 Infiltration。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" /> 或 <CrossReference name=\"Sarkic Population\" href=\"#entry-pr-mek-sarkic-pops\" />",
      "limit": "Karcist；地点已有渗透。",
      "statLine": "Complexity: 25\nProfile: 500\nMenace: 0\nXP: 42",
      "positiveTags": "Sarkics",
      "negativeTags": "Mekhanites",
      "image": "icon_sarkicshadow.png"
    },
    {
      "name": "Divert Attention",
      "id": "ch-mek-sarkichidetemple",
      "meta": "Intrigue",
      "text": "消耗 3 Sarkic Insights，Temple Profile −15。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Sarkic 人物；Counter-Infiltration 会阻止降低 Profile。",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkichide.png"
    },
    {
      "name": "Form Deathless Empire",
      "id": "ch-mek-sarkicempire",
      "meta": "Command",
      "text": "建立 Deathless Empire，吸纳 Sarkic 地区并可能引起内战。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist。",
      "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicempire.png"
    },
    {
      "name": "Raise Halkosts",
      "id": "ch-mek-sarkicarmyundead",
      "meta": "Lore",
      "text": "消耗 5 Sarkic Insights，召唤 HP 为 ⌊Death ×1.5⌋ 的 Sarkic Halkost，并消耗一半 Death。",
      "location": "有 Death 的 <CrossReference name=\"Sarkic Population\" href=\"#entry-pr-mek-sarkic-pops\" />",
      "limit": "Karcist，Deathless Empire 已存在。",
      "statLine": "Complexity: max(5, Death ×0.1)\nProfile: 50\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_halkost.png"
    },
    {
      "name": "Unearth Adytom",
      "id": "ch-mek-sarkicadytom",
      "meta": "Other",
      "text": "消耗 10 Sarkic Insights，寻找 Adytom。通常每次成功率 30%；此前失败次数达到现存墓穴数 −1 时必定成功，创建 Ascension Ritual 并触发 Adytom 事件。",
      "location": "<CrossReference name=\"Klavigar Tomb\" href=\"#entry-pr-mek-sarkictomb\" />",
      "limit": "Grand Karcist。",
      "statLine": "Complexity: 10\nProfile: 500\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "base-deepOnes.png"
    },
    {
      "name": "Sarkic Ascension",
      "id": "ch-mek-sarkic-victory",
      "meta": "Other",
      "text": "启动时消耗 15 Sarkic Insights。持续执行时，每回合增加 Grand Karcist 的 Lore 的仪式强度；达到 100 后 Sarkics 获胜，玩家失败。",
      "location": "<CrossReference name=\"Ascension Ritual\" href=\"#entry-pr-mek-sarkic-victory\" />",
      "limit": "Grand Karcist；God-Eater 生效，Termination 未生效；启动需满足 15 Insights 的资源要求。",
      "statLine": "Complexity: 10\nProfile: 1000\nMenace: 0\nXP: 21",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkicspell1.png"
    },
    {
      "name": "Unleash the Red Death",
      "id": "ch-mek-sarkicreddeath",
      "meta": "Command",
      "text": "消耗 20 Sarkic Insights，向世界释放 The Flesh That Hates 和 Red Death。",
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "Grand Karcist，Deathless Empire 已成立且此前没有释放。",
      "statLine": "Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)\nProfile: 200\nMenace: 0\nXP: 随 Complexity 计算",
      "positiveTags": "Sarkics",
      "negativeTags": "无",
      "image": "icon_sarkic_fleshthathates.png"
    },
    {
      "id": "place-task-3591348120-ch-mek-sarkicconvertsecrets",
      "name": "Imbue Knowledge",
      "text": "消耗 Sarkic Insights，增加 Sarkic 教团的 Human Influence。",
      "image": "/locations/mod/God_MEKHANE.icon_sarkic1.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Sarkic Temple\" href=\"#entry-sub-mek-sarkictemple\" />",
      "limit": "执行者信奉 Sarkicism；影响力尚未达到修改教义所需数值，相关教义允许使用。",
      "statLine": "Complexity: 15\nProfile: 50\nMenace: 0\nXP: 29",
      "positiveTags": "Sarkics",
      "negativeTags": "无"
    }
  ]
},
{
      "id": "spells",
      "title": "法术",
      "media": true,
      "items": [
        {
          "name": "Maxwellist Fortress",
          "id": "ch-mek-maxwellist-fortress",
          "text": "消耗 1 Arcane Mechanism，使已有 Arcane Fortress 增加强度 25 + Noosphere 接入人口。\n从无到有创建 Arcane Fortress 的生效结果未确认。",
          "location": "<CrossReference name=\"Maxwellist Connection\" href=\"#entry-pr-mek-connection\" />",
          "limit": "我方 Agent，携带材料。",
          "statLine": "Complexity: 15\nProfile: 0\nMenace: 0\nXP: 29",
          "image": "base-arcaneFortress.png"
        },
        {
          "name": "Noosphere: Data Blackout",
          "id": "ch-mek-maxwellist-awareness",
          "text": "使所有拥有 Awareness 的人物获得持续 30 回合的 Data Blackout，期间 Awareness 归零；已有特质刷新为 30 回合。至少影响一人时消耗 500 Noosphere 强度。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint，拥有 Divine Schema 特质；Noosphere 强度至少 500。",
          "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
          "image": "iconmekspell5.png"
        },
        {
          "name": "Noosphere: Backup Copy",
          "id": "ch-mek-maxwellist-backup",
          "text": "消耗 500 Noosphere 强度，从已死亡的本体独特 Agent 中选择一人创建备份；每种 Agent 只能复制一次，备份不能获得 XP 或 Arcane Knowledge。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint；Noosphere 强度至少 500，有合格死亡对象。",
          "statLine": "Complexity: 20\nProfile: 0\nMenace: 0\nXP: 36",
          "image": "iconmekspell1.png"
        },
        {
          "name": "Noosphere: Information Overload",
          "id": "ch-mek-maxwellist-disrupt",
          "text": "消耗 300 Noosphere 强度，使所有 Maxwellist Connection 地点上的敌对英雄 Disrupted；持续回合数为现存连接数量，最低 1，覆盖已有打断时长。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint，拥有 Divine Schema 特质；Noosphere 强度至少 300。",
          "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
          "image": "iconmekspell8.png"
        },
        {
          "name": "Noosphere: Memetic Reduction",
          "id": "ch-mek-maxwellist-reduceminprofile",
          "text": "消耗 300 Noosphere 强度，所有 Congregation 的最低 Profile −20，最低 0。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint，拥有 Divine Schema 特质；Noosphere 强度至少 300。",
          "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
          "image": "iconmekspell3.png"
        },
        {
          "name": "Noosphere: Security Breach",
          "id": "ch-mek-maxwellist-security",
          "text": "消耗 500 Noosphere 强度，为全部人类聚居地添加 Security Breach；已有修正刷新为 30。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint，拥有 Divine Schema 特质；Noosphere 强度至少 500。",
          "statLine": "Complexity: 50\nProfile: 50\nMenace: 0\nXP: 72",
          "image": "iconmekspell9.png"
        },
        {
          "name": "Noosphere: Magnetic Disturbance",
          "id": "ch-mek-maxwellist-weakenarmy",
          "text": "消耗 100 Noosphere 强度，在全部 Maxwellist Connection 地点建立 Magnetic Trap；已有陷阱增加 20 + Noosphere 接入人口的强度。",
          "location": "<CrossReference name=\"Noosphere\" href=\"#entry-pr-mek-maxwellistwan\" />",
          "limit": "我方 Agent 或 Living Saint，拥有 Divine Schema 特质；Noosphere 强度至少 100。",
          "statLine": "Complexity: 5\nProfile: 50\nMenace: 0\nXP: 12",
          "image": "iconmekspell7.png"
        }
      ]
    },
{
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "The Other Half",
          "id": "event-sarkic",
          "text": "第 10 回合出现；选择是否让 Sarkics 加入本局。",
          "image": "event_Sarkic.jpg",
          "eventOptions": [
            {
              "name": "Something stirs within them.",
              "text": "创建 Sarkic Cult 与其敌对发展路线。"
            },
            {
              "name": "They pass through history.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "name": "A Foundation",
          "id": "event-foundation",
          "text": "Alliance 成立后出现一次，选择是否启用 Foundation 的收容与重新封印路线。",
          "image": "event_Foundation.jpg",
          "eventOptions": [
            {
              "name": "A new threat emerges.",
              "text": "启用 Foundation；Containment Vault 可帮助 Chosen One 重新封印 MEKHANE。"
            },
            {
              "name": "They pass through history.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "name": "Adytom",
          "id": "event-adytom",
          "text": "Grand Karcist 成功 Unearth Adytom 后触发，警告 Ascension Ritual 已经出现。",
          "image": "event_adytom.jpg",
          "eventOptions": [
            {
              "name": "They are on the threshold of victory.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "tasks"
        }
      ]
    },
{
      "id": "mechanics",
      "title": "相关机制",
      "media": false,
      "items": [
        {
          "name": "组件统计",
          "id": "component-count",
          "text": "封印检查现存组件，包括 Congregation 库存与合格存活人物携带的组件。前期检查 Mechanism，再检查三类 Relic 总和；第六、七封印检查 Divine Machine。已投入 MEKHANE's Body 的 Divine Machine 按建造完成度每 10 个百分点折算 1 件，因此建造消耗仍计入后期进度。"
        },
        {
          "name": "异常神力的出现",
          "id": "anomaly-unlocks",
          "text": "The Clockworks 初始解锁日期为第 400 回合，其余五种异常为第 500 回合。游戏只在第 450 回合前检查解锁，因此通常必须通过行动把日期提前。日期提前到当前回合或之前后获得神力。\n下列挑战造成的提前量只计入我方可控制人物的完成记录；人物创建和世界每回合统计另行计算。"
        },
        {
          "name": "The Clockworks — 出现条件",
          "id": "unlock-0",
          "text": "创建 Acolyte 或 Automaton：提前 50；创建 Orthodox Legate 或 Living Saint：另提前 100。\n完成机械教派制造与支援挑战：提前 20；Production: Smelt Metal：提前 50。\nDivine Assembly：提前 50；Towers of Change：提前 10。"
        },
        {
          "name": "Clockwork Virus — 出现条件",
          "id": "unlock-1",
          "text": "创建 Plague Doctor：提前 250。\nStart Plague：提前 50；Plague Ships、Cultivate Disease、Novel Strain：提前 25。\n每回合再提前 ⌊世界 Plague 强度总和 /50⌋。"
        },
        {
          "name": "A Machine — 出现条件",
          "id": "unlock-2",
          "text": "创建 Baroness 或 Monarch：提前 250；尚未解锁 Ancient Colossus 时创建 Monarch 或 First Daughter，另使 A Machine 提前 100。\nDesecrate、Dark Coronation：提前 50；Enshadow、Well of Shadows：提前 30；Dark Worship：提前 15。\n每回合按完全 Enshadowed 地点数继续提前。"
        },
        {
          "name": "Mechanical Choir — 出现条件",
          "id": "unlock-3",
          "text": "创建 Orthodox Legate：提前 100；创建 Automaton：提前 50。\n组装 Clockwork Mechanism、Mekhanite Prayer：提前 25。\nBlasphemous Rituals、Desecrate、Target Divine Entity、组装 Gatherer：提前 50。\n组装 Sentinel、Speaker、Cogwork Relic：提前 100。\nProduction: Automatons：提前 30；Standardization：提前 10。"
        },
        {
          "name": "Rotbolt — 出现条件",
          "id": "unlock-4",
          "text": "Study Geomancy：提前 75；Tremor、Volcano：提前 100；Bring the Snows：提前 30；Death of the Sun：提前 50。"
        },
        {
          "name": "Ancient Colossus — 出现条件",
          "id": "unlock-5",
          "text": "建立 Dark Empire 或 Unified Church：提前 100。\nCommand Battle 的进攻或防御行动：提前 10。\nDark Crusade、Dark Coronation：提前 50；Make an Example：提前 20。"
        },
        {
          "name": "可选配置",
          "id": "optional-config",
          "text": "以下配置默认关闭。\nEstablished Faith：预先建立随机 Congregation。\nMEKHANE’s Forge：预置一处 Unearthed Fragments，并禁用继续揭示碎片。\nArtificial Power：停用自然神力恢复，转由制造 Relic 等方式补充。\nOne Tool：Agent 上限限制为 1。\nLingering Evidence：提高最低 Profile。"
        }
      ]
    },
{
  "id": "common-actions",
  "title": "共同行动",
  "items": [
    {
      "id": "place-task-3591348120-ch-mek-councilhide",
      "name": "Relocate Council",
      "text": "消耗 Divine Schema，把 Council of Patriarchs 及其库存搬到这里。",
      "image": "/locations/mod/God_MEKHANE.icon_orthodoxdistract.png",
      "meta": "Command",
      "baseGame": false,
      "location": "<CrossReference name=\"Orthodox Forge\" href=\"#entry-sub-mek-forge\" /> 所在地点。",
      "limit": "玩家人物；Council 当前不在此地，且有足够 Divine Schema。",
      "statLine": "Complexity: 30\nProfile: 40\nMenace: 5\nXP: 49"
    },
    {
      "id": "place-task-3591348120-ch-transferarcanerelics",
      "name": "Transfer Arcane Relics",
      "text": "把其他 Congregation 库存中的 Arcane Relics 转移到此 Relay。",
      "image": "/locations/mod/God_MEKHANE.icon_itemarcanerelic.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "<CrossReference name=\"Maxwellist Relay\" href=\"#entry-sub-mek-relay\" /> 所在地点。",
      "limit": "玩家控制的 Mekhanite。",
      "statLine": "Complexity: 10\nProfile: 90\nMenace: 0\nXP: 21"
    },
    {
      "id": "place-task-3591348120-ch-mek-vault-recoverarcanerelics",
      "name": "Recover Arcane Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Arcane Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itemarcanerelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "place-task-3591348120-ch-mek-vault-recovercogworkrelics",
      "name": "Recover Cogwork Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Cogwork Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itemcogworkrelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "place-task-3591348120-ch-mek-vault-recoverrelics",
      "name": "Recover Relics",
      "text": "从 <CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" /> 中取走最多 3 件 Basic Relics。",
      "image": "/locations/mod/God_MEKHANE.icon_itembasicrelic.png",
      "meta": "Might",
      "baseGame": false,
      "location": "<CrossReference name=\"Containment Vault\" href=\"#entry-sub-mek-vault\" />",
      "limit": "Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。",
      "statLine": "Complexity: 10 + 10 × Security\nProfile: 90\nMenace: 0\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    }
  ]
},
{
  "id": "autonomous-tasks",
  "title": "自主单位任务",
  "items": [
    {
      "id": "place-task-3591348120-ch-mek-infiltrate",
      "name": "Maxwellist Infiltration",
      "text": "使当地一个兴趣点进入已渗透状态。",
      "image": "/locations/game/infiltrate.png",
      "meta": "Intrigue",
      "baseGame": false,
      "location": "使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。",
      "limit": "仅 Maxwellist Infiltrator。",
      "statLine": "Complexity: 50 + 25 × Security\nProfile: 200\nMenace: 20\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "place-task-3591348120-ch-mek-infiltrateawareness",
      "name": "Maxwellist Disinformation",
      "text": "将当地统治者 Awareness 设为 0%，持续 30 回合。",
      "image": "/locations/game/infiltrate.png",
      "meta": "Intrigue",
      "baseGame": false,
      "location": "使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。",
      "limit": "仅 Maxwellist Infiltrator；当地渗透度 ≥50%。",
      "statLine": "Complexity: 50 + 25 × Security；当地完全渗透时减半\nProfile: 200\nMenace: 20\nXP: ⌊max(1, 6 × Complexity)^0.75⌋"
    },
    {
      "id": "ch-locitopiece",
      "name": "Harvest Information",
      "text": "消耗 30 Geomantic Locus，以 Piece 填满物品栏空位。",
      "image": "/locations/mod/God_MEKHANE.iconmekspell3.png",
      "meta": "Lore",
      "baseGame": false,
      "location": "Geomantic Locus 至少 30 的地点",
      "limit": "仅 Intelligence。",
      "statLine": "Complexity: 10\nProfile: 100\nMenace: 0\nXP: 21"
    }
  ]
}
],
  "relations": {
    "Reveal Fragments": {
      "effects": [
        {
          "name": "Unearthed Fragments",
          "href": "#entry-pr-mek-resourceunearthed"
        },
        {
          "name": "Divine Schema",
          "href": "#entry-pr-mek-schema"
        }
      ]
    },
    "pr-mek-resourceunearthed": {
      "sources": [
        {
          "name": "Reveal Fragments",
          "href": "#entry-p-mek-unearthfragment"
        },
        {
          "name": "Reveal Fragments",
          "href": "#entry-ch-mek-createresourceunearth"
        }
      ],
      "effects": [
        {
          "name": "Divine Schema",
          "href": "#entry-pr-mek-schema"
        }
      ]
    },
    "pr-mek-schema": {
      "sources": [
        {
          "name": "Reveal Fragments",
          "href": "#entry-p-mek-unearthfragment"
        },
        {
          "name": "Unearthed Fragments",
          "href": "#entry-pr-mek-resourceunearthed"
        }
      ]
    },
    "Congregate": {
      "effects": [
        {
          "name": "The Supplicant",
          "href": "#entry-uae-supplicant"
        },
        {
          "name": "Mekhanite Acolyte",
          "href": "#entry-ua-mek-acolyte"
        },
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        }
      ]
    },
    "uae-supplicant": {
      "sources": [
        {
          "name": "Congregate",
          "href": "#entry-p-mek-congregate"
        }
      ]
    },
    "ua-mek-acolyte": {
      "sources": [
        {
          "name": "Congregate",
          "href": "#entry-p-mek-congregate"
        },
        {
          "name": "Church of the Broken God",
          "href": "#entry-holyorder-mekhane"
        }
      ]
    },
    "sub-mek-congregation": {
      "sources": [
        {
          "name": "Congregate",
          "href": "#entry-p-mek-congregate"
        },
        {
          "name": "Establish Congregation",
          "href": "#entry-ch-mek-buildcongregation"
        }
      ],
      "effects": [
        {
          "name": "Armed Congregation",
          "href": "#entry-pr-mek-smithdanger"
        },
        {
          "name": "Mechanical Hymns",
          "href": "#entry-pr-mek-smithprayer"
        },
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        },
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        },
        {
          "name": "Clockwork Mechanism",
          "href": "#entry-i-mek-cogworkmechanism"
        },
        {
          "name": "Arcane Mechanism",
          "href": "#entry-i-mek-arcanemechanism"
        },
        {
          "name": "Relic",
          "href": "#entry-i-mek-relic"
        },
        {
          "name": "Cogwork Relic",
          "href": "#entry-i-mek-cogworkrelic"
        },
        {
          "name": "Arcane Relic",
          "href": "#entry-i-mek-arcanerelic"
        },
        {
          "name": "Divine Machine",
          "href": "#entry-i-mek-divinemachine"
        }
      ]
    },
    "Prioritize": {
      "effects": [
        {
          "name": "Priority",
          "href": "#entry-pr-mek-priority"
        }
      ]
    },
    "pr-mek-priority": {
      "sources": [
        {
          "name": "Prioritize",
          "href": "#entry-p-mek-prioritize"
        }
      ]
    },
    "Divine Assembly": {
      "effects": [
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "i-mek-mechanism": {
      "sources": [
        {
          "name": "Divine Assembly",
          "href": "#entry-p-mek-divineassembly"
        },
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Magnetic Implants",
          "href": "#entry-t-mek-augmentbasicscavenge"
        },
        {
          "name": "Assemble Mechanism",
          "href": "#entry-ch-assemblemechanism"
        },
        {
          "name": "Buy Mechanisms",
          "href": "#entry-ch-buymechanisms"
        },
        {
          "name": "Clockworks: Fine",
          "href": "#entry-ch-mek-clockworksfine"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "Regenerating Metals": {
      "effects": [
        {
          "name": "Regenerating Metals",
          "href": "#entry-pr-mek-resourceboost"
        }
      ]
    },
    "pr-mek-resourceboost": {
      "sources": [
        {
          "name": "Regenerating Metals",
          "href": "#entry-p-mek-boostunearthedfragments"
        },
        {
          "name": "Bless Fragments",
          "href": "#entry-ch-mek-blesspiece"
        }
      ]
    },
    "Towers of Change": {
      "effects": [
        {
          "name": "Citadel",
          "href": "#entry-sub-mek-congregationtower"
        }
      ]
    },
    "sub-mek-congregationtower": {
      "sources": [
        {
          "name": "Towers of Change",
          "href": "#entry-p-mek-towerofchange"
        }
      ],
      "effects": [
        {
          "name": "Tower of Change",
          "href": "#entry-pr-mek-towerofchange"
        }
      ]
    },
    "Fractured Faith": {
      "effects": [
        {
          "name": "Minor Sect",
          "href": "#entry-pr-mek-minorsect"
        }
      ]
    },
    "pr-mek-minorsect": {
      "sources": [
        {
          "name": "Fractured Faith",
          "href": "#entry-p-mek-minorsect"
        }
      ]
    },
    "Standardization": {
      "effects": [
        {
          "name": "Council of Patriarchs",
          "href": "#entry-pr-mek-orthodoxcouncil"
        },
        {
          "name": "Orthodox Forge",
          "href": "#entry-sub-mek-forge"
        }
      ]
    },
    "pr-mek-orthodoxcouncil": {
      "sources": [
        {
          "name": "Standardization",
          "href": "#entry-p-mek-spreadorthodoxy"
        }
      ]
    },
    "sub-mek-forge": {
      "sources": [
        {
          "name": "Standardization",
          "href": "#entry-p-mek-spreadorthodoxy"
        }
      ],
      "effects": [
        {
          "name": "Production",
          "href": "#entry-pr-mek-forgeproduction"
        },
        {
          "name": "Sentinel Presence",
          "href": "#entry-pr-mek-sentineldanger"
        }
      ]
    },
    "Apotheosis": {
      "effects": [
        {
          "name": "Noosphere",
          "href": "#entry-pr-mek-maxwellistwan"
        },
        {
          "name": "Maxwellist Relay",
          "href": "#entry-sub-mek-relay"
        }
      ]
    },
    "pr-mek-maxwellistwan": {
      "sources": [
        {
          "name": "Apotheosis",
          "href": "#entry-p-mek-spreadmaxwellism"
        },
        {
          "name": "Repeating Signal",
          "href": "#entry-pr-mek-maxwellist-repeatingsignal"
        }
      ]
    },
    "sub-mek-relay": {
      "sources": [
        {
          "name": "Apotheosis",
          "href": "#entry-p-mek-spreadmaxwellism"
        }
      ]
    },
    "Fragmented Following": {
      "effects": [
        {
          "name": "Exile Community",
          "href": "#entry-sub-mek-exiles"
        }
      ]
    },
    "sub-mek-exiles": {
      "sources": [
        {
          "name": "Fragmented Following",
          "href": "#entry-p-mek-exiles"
        }
      ],
      "effects": [
        {
          "name": "Mekhanite Exile",
          "href": "#entry-ua-mek-exile"
        }
      ]
    },
    "Begin Construction": {
      "effects": [
        {
          "name": "MEKHANE's Body",
          "href": "#entry-pr-mek-body"
        }
      ]
    },
    "pr-mek-body": {
      "sources": [
        {
          "name": "Begin Construction",
          "href": "#entry-p-mek-body"
        }
      ],
      "effects": [
        {
          "name": "Augmented Population",
          "href": "#entry-pr-mek-augmentpops"
        }
      ]
    },
    "Clockwork Virus": {
      "effects": [
        {
          "name": "Clockwork Virus",
          "href": "#entry-pr-mek-clockworkvirus"
        },
        {
          "name": "Free from Flesh",
          "href": "#entry-p-mek-virusinfect"
        },
        {
          "name": "Rusting Metal",
          "href": "#entry-p-mek-virusfragments"
        }
      ]
    },
    "pr-mek-clockworkvirus": {
      "sources": [
        {
          "name": "Clockwork Virus",
          "href": "#entry-p-mek-clockworkvirus"
        }
      ],
      "effects": [
        {
          "name": "Clockwork Death",
          "href": "#entry-pr-mek-clockworkvirusdead"
        }
      ]
    },
    "Free from Flesh": {
      "sources": [
        {
          "name": "Clockwork Virus",
          "href": "#entry-p-mek-clockworkvirus"
        }
      ]
    },
    "Rusting Metal": {
      "sources": [
        {
          "name": "Clockwork Virus",
          "href": "#entry-p-mek-clockworkvirus"
        }
      ]
    },
    "A Machine": {
      "effects": [
        {
          "name": "A Machine",
          "href": "#entry-pr-mek-machine"
        },
        {
          "name": "Call of A Machine",
          "href": "#entry-p-mek-machineeffect"
        },
        {
          "name": "Endless Noise",
          "href": "#entry-p-mek-machineenshadow"
        }
      ]
    },
    "pr-mek-machine": {
      "sources": [
        {
          "name": "A Machine",
          "href": "#entry-p-mek-machine"
        }
      ]
    },
    "Call of A Machine": {
      "sources": [
        {
          "name": "A Machine",
          "href": "#entry-p-mek-machine"
        }
      ]
    },
    "Endless Noise": {
      "sources": [
        {
          "name": "A Machine",
          "href": "#entry-p-mek-machine"
        }
      ]
    },
    "The Clockworks": {
      "effects": [
        {
          "name": "The Clockworks",
          "href": "#entry-pr-mek-clockworks"
        }
      ]
    },
    "pr-mek-clockworks": {
      "sources": [
        {
          "name": "The Clockworks",
          "href": "#entry-p-mek-clockworks"
        }
      ]
    },
    "Mechanical Choir": {
      "effects": [
        {
          "name": "Mechanical Choir",
          "href": "#entry-uae-mek-mechanicalchoir"
        }
      ]
    },
    "uae-mek-mechanicalchoir": {
      "sources": [
        {
          "name": "Mechanical Choir",
          "href": "#entry-p-mek-mechanicalchoir"
        }
      ]
    },
    "Rotbolt": {
      "effects": [
        {
          "name": "Rotbolt",
          "href": "#entry-pr-mek-rotbolt"
        },
        {
          "name": "Accelerated Frequency",
          "href": "#entry-p-mek-rotboltspread"
        },
        {
          "name": "Biological Transfer",
          "href": "#entry-p-mek-rotboltconsume"
        }
      ]
    },
    "pr-mek-rotbolt": {
      "sources": [
        {
          "name": "Rotbolt",
          "href": "#entry-p-mek-rotbolt"
        },
        {
          "name": "Rotbolt Transformation",
          "href": "#entry-t-mek-rotbolt"
        }
      ]
    },
    "Accelerated Frequency": {
      "sources": [
        {
          "name": "Rotbolt",
          "href": "#entry-p-mek-rotbolt"
        }
      ]
    },
    "Biological Transfer": {
      "sources": [
        {
          "name": "Rotbolt",
          "href": "#entry-p-mek-rotbolt"
        }
      ]
    },
    "Ancient Colossus": {
      "effects": [
        {
          "name": "Mekhanite Colossus",
          "href": "#entry-um-mek-colossus"
        }
      ]
    },
    "um-mek-colossus": {
      "sources": [
        {
          "name": "Ancient Colossus",
          "href": "#entry-p-mek-colossus"
        },
        {
          "name": "Production",
          "href": "#entry-pr-mek-forgeproduction"
        }
      ]
    },
    "pr-mek-augmentpops": {
      "sources": [
        {
          "name": "MEKHANE's Body",
          "href": "#entry-pr-mek-body"
        },
        {
          "name": "Speaker's Sermon",
          "href": "#entry-pr-mek-speakersermon"
        },
        {
          "name": "Augment Population",
          "href": "#entry-act-mek-convertbasedarkactionaugmentpop"
        }
      ]
    },
    "pr-mek-towerofchange": {
      "effects": [
        {
          "name": "Metalsmith",
          "href": "#entry-uae-mek-smith"
        }
      ],
      "sources": [
        {
          "name": "Citadel",
          "href": "#entry-sub-mek-congregationtower"
        }
      ]
    },
    "uae-mek-smith": {
      "sources": [
        {
          "name": "Tower of Change",
          "href": "#entry-pr-mek-towerofchange"
        }
      ]
    },
    "pr-mek-smithdanger": {
      "effects": [
        {
          "name": "Mekhanite Zealot",
          "href": "#entry-ua-mek-zealot"
        }
      ],
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Arm Congregation",
          "href": "#entry-ch-mek-smithdanger"
        }
      ]
    },
    "ua-mek-zealot": {
      "sources": [
        {
          "name": "Armed Congregation",
          "href": "#entry-pr-mek-smithdanger"
        }
      ]
    },
    "pr-mek-speakersermon": {
      "effects": [
        {
          "name": "Augmented Population",
          "href": "#entry-pr-mek-augmentpops"
        }
      ],
      "sources": [
        {
          "name": "Speaker's Sermon",
          "href": "#entry-ch-mek-increasemekpreferencespeaker"
        }
      ]
    },
    "pr-mek-forgeproduction": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        },
        {
          "name": "Cogwork Relic",
          "href": "#entry-i-mek-cogworkrelic"
        },
        {
          "name": "Mekhanite Colossus",
          "href": "#entry-um-mek-colossus"
        }
      ],
      "sources": [
        {
          "name": "Orthodox Forge",
          "href": "#entry-sub-mek-forge"
        }
      ]
    },
    "i-mek-piece": {
      "sources": [
        {
          "name": "Production",
          "href": "#entry-pr-mek-forgeproduction"
        },
        {
          "name": "Signal",
          "href": "#entry-pr-mek-relaysignal"
        },
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Mekhanite",
          "href": "#entry-t-mekhanite"
        },
        {
          "name": "Buy Pieces",
          "href": "#entry-ch-buypieces"
        },
        {
          "name": "Harvest Information",
          "href": "#entry-ch-librarytopiece"
        },
        {
          "name": "Harvest Information",
          "href": "#entry-ch-locitopiece"
        },
        {
          "name": "Reallocate Resources",
          "href": "#entry-act-mek-convertbasedarkactiondonate"
        }
      ]
    },
    "i-mek-cogworkrelic": {
      "sources": [
        {
          "name": "Production",
          "href": "#entry-pr-mek-forgeproduction"
        },
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Cogwork Relic",
          "href": "#entry-ch-assemblecogworkrelic"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "pr-mek-clockworkvirusdead": {
      "sources": [
        {
          "name": "Clockwork Virus",
          "href": "#entry-pr-mek-clockworkvirus"
        },
        {
          "name": "Quarantine Clockwork Virus",
          "href": "#entry-act-mek-awareclockworkviruspanic"
        }
      ]
    },
    "pr-mek-relaysignal": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "pr-mek-sarkicsermon": {
      "effects": [
        {
          "name": "Sarkic Population",
          "href": "#entry-pr-mek-sarkic-pops"
        }
      ],
      "sources": [
        {
          "name": "Karcist's Sermon",
          "href": "#entry-ch-mek-sarkicsermon"
        }
      ]
    },
    "pr-mek-sarkic-pops": {
      "sources": [
        {
          "name": "Karcist's Sermon",
          "href": "#entry-pr-mek-sarkicsermon"
        }
      ]
    },
    "pr-mek-sarkic-reddeath": {
      "effects": [
        {
          "name": "Raging Flesh",
          "href": "#entry-um-mek-sarkicfleshthathates"
        }
      ],
      "sources": [
        {
          "name": "Flesh That Hates",
          "href": "#entry-sub-mek-sarkicfleshthathates"
        }
      ]
    },
    "um-mek-sarkicfleshthathates": {
      "sources": [
        {
          "name": "Red Death",
          "href": "#entry-pr-mek-sarkic-reddeath"
        }
      ],
      "effects": [
        {
          "name": "Flesh That Hates",
          "href": "#entry-sub-mek-sarkicfleshthathates"
        }
      ]
    },
    "pr-mek-smithprayer": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Mechanical Hymns",
          "href": "#entry-ch-mek-smithboostelder"
        }
      ]
    },
    "i-mek-cogworkmechanism": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Cogwork Mechanism",
          "href": "#entry-ch-assemblecogworkmechanism"
        },
        {
          "name": "Gild Basic Mechanism",
          "href": "#entry-ch-assemblecogworkmechanismconversion"
        },
        {
          "name": "Clockworks: Fine",
          "href": "#entry-ch-mek-clockworksfine"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "i-mek-arcanemechanism": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Arcane Mechanism",
          "href": "#entry-ch-assemblearcanemechanism"
        },
        {
          "name": "Defragment Basic Mechanism",
          "href": "#entry-ch-assemblearcanemechanismconversion"
        },
        {
          "name": "Clockworks: Fine",
          "href": "#entry-ch-mek-clockworksfine"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "i-mek-relic": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Relic",
          "href": "#entry-ch-assemblerelic"
        },
        {
          "name": "Buy Relic",
          "href": "#entry-ch-buyrelic"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "i-mek-arcanerelic": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Arcane Relic",
          "href": "#entry-ch-assemblearcanerelic"
        },
        {
          "name": "Clockworks: Very Fine",
          "href": "#entry-ch-mek-clockworksveryfine"
        }
      ]
    },
    "i-mek-divinemachine": {
      "sources": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        },
        {
          "name": "Assemble Divine Machine",
          "href": "#entry-ch-assembledivinemachine"
        }
      ]
    },
    "pr-mek-sentineldanger": {
      "sources": [
        {
          "name": "Orthodox Forge",
          "href": "#entry-sub-mek-forge"
        }
      ]
    },
    "ua-mek-exile": {
      "sources": [
        {
          "name": "Exile Community",
          "href": "#entry-sub-mek-exiles"
        }
      ]
    },
    "sub-mek-vault": {
      "effects": [
        {
          "name": "Vault Research",
          "href": "#entry-pr-mek-vault"
        }
      ],
      "sources": [
        {
          "name": "Construct Vault",
          "href": "#entry-act-mek-awarevaultbuild"
        }
      ]
    },
    "pr-mek-vault": {
      "sources": [
        {
          "name": "Containment Vault",
          "href": "#entry-sub-mek-vault"
        }
      ]
    },
    "sub-mek-sarkictemple": {
      "effects": [
        {
          "name": "Sarkic Cultist",
          "href": "#entry-uaen-mek-sarkic"
        }
      ],
      "sources": [
        {
          "name": "Sarkic Cult",
          "href": "#entry-holyorder-sarkic"
        }
      ]
    },
    "uaen-mek-sarkic": {
      "sources": [
        {
          "name": "Sarkic Temple",
          "href": "#entry-sub-mek-sarkictemple"
        },
        {
          "name": "Sarkic Initiation",
          "href": "#entry-ch-mek-sarkicrecruit"
        },
        {
          "name": "Sarkic Cult",
          "href": "#entry-holyorder-sarkic"
        }
      ]
    },
    "sub-mek-sarkicfleshthathates": {
      "effects": [
        {
          "name": "Red Death",
          "href": "#entry-pr-mek-sarkic-reddeath"
        }
      ],
      "sources": [
        {
          "name": "Raging Flesh",
          "href": "#entry-um-mek-sarkicfleshthathates"
        },
        {
          "name": "Unleash the Red Death",
          "href": "#entry-ch-mek-sarkicreddeath"
        }
      ]
    },
    "uaen-mek-sarkickarcist": {
      "effects": [
        {
          "name": "Sarkic Initiate",
          "href": "#entry-m-mek-sarkic-cultist"
        }
      ],
      "sources": [
        {
          "name": "Karcist Ascension",
          "href": "#entry-ch-mek-sarkickarcist"
        }
      ]
    },
    "m-mek-sarkic-cultist": {
      "sources": [
        {
          "name": "Karcist",
          "href": "#entry-uaen-mek-sarkickarcist"
        },
        {
          "name": "Recruit Sarkic Initiate Minion",
          "href": "#entry-ch-mek-sarkic-recruitminion"
        }
      ]
    },
    "t-mekhanite": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "t-mek-builder": {
      "effects": [
        {
          "name": "Bumaro's Warhammer",
          "href": "#entry-i-mek-hammer"
        }
      ]
    },
    "i-mek-hammer": {
      "sources": [
        {
          "name": "The Builder",
          "href": "#entry-t-mek-builder"
        }
      ]
    },
    "t-mek-rotbolt": {
      "effects": [
        {
          "name": "Rotbolt",
          "href": "#entry-pr-mek-rotbolt"
        }
      ]
    },
    "t-mek-augmentbasicscavenge": {
      "effects": [
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "ch-assemblemechanism": {
      "effects": [
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "ch-assemblerelic": {
      "effects": [
        {
          "name": "Relic",
          "href": "#entry-i-mek-relic"
        }
      ]
    },
    "ch-assemblecogworkmechanism": {
      "effects": [
        {
          "name": "Clockwork Mechanism",
          "href": "#entry-i-mek-cogworkmechanism"
        }
      ]
    },
    "ch-assemblecogworkmechanismconversion": {
      "effects": [
        {
          "name": "Clockwork Mechanism",
          "href": "#entry-i-mek-cogworkmechanism"
        }
      ]
    },
    "ch-assemblecogworkrelic": {
      "effects": [
        {
          "name": "Cogwork Relic",
          "href": "#entry-i-mek-cogworkrelic"
        }
      ]
    },
    "ch-assemblearcanemechanism": {
      "effects": [
        {
          "name": "Arcane Mechanism",
          "href": "#entry-i-mek-arcanemechanism"
        }
      ]
    },
    "ch-assemblearcanemechanismconversion": {
      "effects": [
        {
          "name": "Arcane Mechanism",
          "href": "#entry-i-mek-arcanemechanism"
        }
      ]
    },
    "ch-assemblearcanerelic": {
      "effects": [
        {
          "name": "Arcane Relic",
          "href": "#entry-i-mek-arcanerelic"
        }
      ]
    },
    "ch-assembledivinemachine": {
      "effects": [
        {
          "name": "Divine Machine",
          "href": "#entry-i-mek-divinemachine"
        }
      ]
    },
    "ch-mek-blesspiece": {
      "effects": [
        {
          "name": "Regenerating Metals",
          "href": "#entry-pr-mek-resourceboost"
        }
      ]
    },
    "ch-mek-buildcongregation": {
      "effects": [
        {
          "name": "Mekhanite Congregation",
          "href": "#entry-sub-mek-congregation"
        }
      ]
    },
    "ch-mek-createresourceunearth": {
      "effects": [
        {
          "name": "Unearthed Fragments",
          "href": "#entry-pr-mek-resourceunearthed"
        }
      ]
    },
    "ch-mek-recruitzealot": {
      "effects": [
        {
          "name": "Mekhanite Zealot",
          "href": "#entry-m-mek-zealot"
        }
      ]
    },
    "m-mek-zealot": {
      "sources": [
        {
          "name": "Recruit Zealot Minion",
          "href": "#entry-ch-mek-recruitzealot"
        }
      ]
    },
    "ch-mek-increasemekpreferencespeaker": {
      "effects": [
        {
          "name": "Speaker's Sermon",
          "href": "#entry-pr-mek-speakersermon"
        }
      ]
    },
    "ch-buypieces": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "ch-buymechanisms": {
      "effects": [
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "ch-buyrelic": {
      "effects": [
        {
          "name": "Relic",
          "href": "#entry-i-mek-relic"
        }
      ]
    },
    "ch-librarytopiece": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "ch-locitopiece": {
      "effects": [
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "ch-mek-automaton-basic": {
      "effects": [
        {
          "name": "Gatherer",
          "href": "#entry-ua-mek-automaton"
        }
      ]
    },
    "ua-mek-automaton": {
      "sources": [
        {
          "name": "Assemble Gatherer",
          "href": "#entry-ch-mek-automaton-basic"
        }
      ]
    },
    "ch-mek-automaton-sentinel": {
      "effects": [
        {
          "name": "Sentinel",
          "href": "#entry-ua-mek-automaton-sentinel"
        }
      ]
    },
    "ua-mek-automaton-sentinel": {
      "sources": [
        {
          "name": "Assemble Sentinel",
          "href": "#entry-ch-mek-automaton-sentinel"
        }
      ]
    },
    "ch-mek-automaton-speaker": {
      "effects": [
        {
          "name": "Speaker",
          "href": "#entry-ua-mek-automaton-speaker"
        }
      ]
    },
    "ua-mek-automaton-speaker": {
      "sources": [
        {
          "name": "Assemble Speaker",
          "href": "#entry-ch-mek-automaton-speaker"
        }
      ]
    },
    "ch-mek-maxwellist-infiltrator": {
      "effects": [
        {
          "name": "Infiltrator",
          "href": "#entry-ua-mek-maxwellist-infiltrator"
        }
      ]
    },
    "ua-mek-maxwellist-infiltrator": {
      "sources": [
        {
          "name": "Assemble Infiltrator",
          "href": "#entry-ch-mek-maxwellist-infiltrator"
        }
      ]
    },
    "ch-mek-maxwellist-intelligence": {
      "effects": [
        {
          "name": "Intelligence",
          "href": "#entry-ua-mek-construct"
        }
      ]
    },
    "ua-mek-construct": {
      "sources": [
        {
          "name": "Assemble Intelligence",
          "href": "#entry-ch-mek-maxwellist-intelligence"
        }
      ]
    },
    "ch-mek-maxwellist-connection": {
      "effects": [
        {
          "name": "Maxwellist Connection",
          "href": "#entry-pr-mek-connection"
        }
      ]
    },
    "pr-mek-connection": {
      "sources": [
        {
          "name": "Establish Connection",
          "href": "#entry-ch-mek-maxwellist-connection"
        }
      ]
    },
    "ch-mek-maxwellist-security": {
      "effects": [
        {
          "name": "Security Breach",
          "href": "#entry-pr-mek-maxwellist-security"
        }
      ]
    },
    "pr-mek-maxwellist-security": {
      "sources": [
        {
          "name": "Noosphere: Security Breach",
          "href": "#entry-ch-mek-maxwellist-security"
        }
      ]
    },
    "ch-mek-maxwellist-weakenarmy": {
      "effects": [
        {
          "name": "Magnetic Trap",
          "href": "#entry-pr-mek-maxwellisttrap"
        }
      ]
    },
    "pr-mek-maxwellisttrap": {
      "sources": [
        {
          "name": "Noosphere: Magnetic Disturbance",
          "href": "#entry-ch-mek-maxwellist-weakenarmy"
        }
      ]
    },
    "ch-mek-clockworksfine": {
      "effects": [
        {
          "name": "Clockwork Mechanism",
          "href": "#entry-i-mek-cogworkmechanism"
        },
        {
          "name": "Arcane Mechanism",
          "href": "#entry-i-mek-arcanemechanism"
        },
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "ch-mek-clockworksveryfine": {
      "effects": [
        {
          "name": "Cogwork Relic",
          "href": "#entry-i-mek-cogworkrelic"
        },
        {
          "name": "Arcane Relic",
          "href": "#entry-i-mek-arcanerelic"
        },
        {
          "name": "Clockwork Mechanism",
          "href": "#entry-i-mek-cogworkmechanism"
        },
        {
          "name": "Arcane Mechanism",
          "href": "#entry-i-mek-arcanemechanism"
        },
        {
          "name": "Relic",
          "href": "#entry-i-mek-relic"
        },
        {
          "name": "Mechanism",
          "href": "#entry-i-mek-mechanism"
        }
      ]
    },
    "ch-mek-smithboostelder": {
      "effects": [
        {
          "name": "Mechanical Hymns",
          "href": "#entry-pr-mek-smithprayer"
        }
      ]
    },
    "ch-mek-smithboostmodifier": {
      "effects": [
        {
          "name": "Mekhanite Smithing",
          "href": "#entry-pr-mek-smithboost"
        }
      ]
    },
    "pr-mek-smithboost": {
      "sources": [
        {
          "name": "Mekhanite Smithing",
          "href": "#entry-ch-mek-smithboostmodifier"
        }
      ]
    },
    "ch-mek-smithdanger": {
      "effects": [
        {
          "name": "Armed Congregation",
          "href": "#entry-pr-mek-smithdanger"
        }
      ]
    },
    "ch-mek-exileexperiment": {
      "effects": [
        {
          "name": "Unorthodox Piece",
          "href": "#entry-i-mek-exilepiece"
        }
      ]
    },
    "i-mek-exilepiece": {
      "sources": [
        {
          "name": "Unorthodox Experiment",
          "href": "#entry-ch-mek-exileexperiment"
        }
      ]
    },
    "ch-mek-exile-assembledevastation": {
      "effects": [
        {
          "name": "Rampaging Experiment",
          "href": "#entry-ua-mek-exile-experimentdevastation"
        }
      ]
    },
    "ua-mek-exile-experimentdevastation": {
      "sources": [
        {
          "name": "Experiment with Cogworks",
          "href": "#entry-ch-mek-exile-assembledevastation"
        }
      ]
    },
    "ch-mek-exile-assemblemadness": {
      "effects": [
        {
          "name": "Maddening Machine",
          "href": "#entry-ua-mek-exile-experimentmadness"
        }
      ]
    },
    "ua-mek-exile-experimentmadness": {
      "sources": [
        {
          "name": "Experiment with the Arcane",
          "href": "#entry-ch-mek-exile-assemblemadness"
        }
      ]
    },
    "ch-mek-exile-assembleshadow": {
      "effects": [
        {
          "name": "False Image",
          "href": "#entry-ua-mek-exile-experimentshadow"
        }
      ]
    },
    "ua-mek-exile-experimentshadow": {
      "sources": [
        {
          "name": "Experiment with Shadow",
          "href": "#entry-ch-mek-exile-assembleshadow"
        }
      ]
    },
    "rt-mek-militancy": {
      "effects": [
        {
          "name": "Mekhanite Army",
          "href": "#entry-um-mek-mekhanitearmy"
        }
      ]
    },
    "um-mek-mekhanitearmy": {
      "sources": [
        {
          "name": "Mekhanite Revolution",
          "href": "#entry-rt-mek-militancy"
        },
        {
          "name": "Augment Military",
          "href": "#entry-act-mek-convertarmy"
        }
      ]
    },
    "ch-mek-hero-investigatemekhanites": {
      "effects": [
        {
          "name": "Recent Investigations",
          "href": "#entry-pr-mek-hero-exposed"
        }
      ]
    },
    "pr-mek-hero-exposed": {
      "sources": [
        {
          "name": "Investigate Mekhanites",
          "href": "#entry-ch-mek-hero-investigatemekhanites"
        },
        {
          "name": "Investigate Congregation",
          "href": "#entry-act-mek-awareinvestigatecongregation"
        }
      ]
    },
    "ch-mek-sarkictomb": {
      "effects": [
        {
          "name": "Klavigar Tomb",
          "href": "#entry-pr-mek-sarkictomb"
        }
      ]
    },
    "pr-mek-sarkictomb": {
      "sources": [
        {
          "name": "Unearth Klavigar's Tomb",
          "href": "#entry-ch-mek-sarkictomb"
        }
      ]
    },
    "ch-mek-sarkickarcist": {
      "effects": [
        {
          "name": "Karcist",
          "href": "#entry-uaen-mek-sarkickarcist"
        }
      ]
    },
    "ch-mek-sarkicgrandkarcist": {
      "effects": [
        {
          "name": "Grand Karcist",
          "href": "#entry-uaen-mek-sarkicgrandkarcist"
        }
      ]
    },
    "uaen-mek-sarkicgrandkarcist": {
      "sources": [
        {
          "name": "Grand Karcist Ascension",
          "href": "#entry-ch-mek-sarkicgrandkarcist"
        },
        {
          "name": "Sarkic Cult",
          "href": "#entry-holyorder-sarkic"
        }
      ]
    },
    "ch-mek-sarkicsermon": {
      "effects": [
        {
          "name": "Karcist's Sermon",
          "href": "#entry-pr-mek-sarkicsermon"
        }
      ]
    },
    "ch-mek-sarkicrecruit": {
      "effects": [
        {
          "name": "Sarkic Cultist",
          "href": "#entry-uaen-mek-sarkic"
        }
      ]
    },
    "ch-mek-sarkic-recruitminion": {
      "effects": [
        {
          "name": "Sarkic Initiate",
          "href": "#entry-m-mek-sarkic-cultist"
        }
      ]
    },
    "ch-mek-sarkicarmyundead": {
      "effects": [
        {
          "name": "Sarkic Halkost",
          "href": "#entry-um-mek-sarkicarmyundead"
        }
      ]
    },
    "um-mek-sarkicarmyundead": {
      "sources": [
        {
          "name": "Raise Halkosts",
          "href": "#entry-ch-mek-sarkicarmyundead"
        }
      ]
    },
    "ch-mek-sarkicadytom": {
      "effects": [
        {
          "name": "Ascension Ritual",
          "href": "#entry-pr-mek-sarkic-victory"
        }
      ]
    },
    "pr-mek-sarkic-victory": {
      "sources": [
        {
          "name": "Unearth Adytom",
          "href": "#entry-ch-mek-sarkicadytom"
        }
      ]
    },
    "ch-mek-sarkicreddeath": {
      "effects": [
        {
          "name": "Flesh That Hates",
          "href": "#entry-sub-mek-sarkicfleshthathates"
        }
      ]
    },
    "act-mek-convertarmy": {
      "effects": [
        {
          "name": "Mekhanite Army",
          "href": "#entry-um-mek-mekhanitearmy"
        }
      ]
    },
    "act-mek-convertbasedarkactionaugmentpop": {
      "effects": [
        {
          "name": "Augmented Population",
          "href": "#entry-pr-mek-augmentpops"
        }
      ]
    },
    "act-mek-convertbasedarkactiondestroyenviro": {
      "effects": [
        {
          "name": "Sterilized Land",
          "href": "#entry-pr-mek-enviro"
        }
      ]
    },
    "pr-mek-enviro": {
      "sources": [
        {
          "name": "Sterilize Land",
          "href": "#entry-act-mek-convertbasedarkactiondestroyenviro"
        }
      ]
    },
    "act-mek-convertbasedarkactiondonate": {
      "effects": [
        {
          "name": "Reallocated Resources",
          "href": "#entry-pr-mek-reallocate"
        },
        {
          "name": "Piece",
          "href": "#entry-i-mek-piece"
        }
      ]
    },
    "pr-mek-reallocate": {
      "sources": [
        {
          "name": "Reallocate Resources",
          "href": "#entry-act-mek-convertbasedarkactiondonate"
        }
      ]
    },
    "act-mek-convertbuildweakarmy": {
      "effects": [
        {
          "name": "Clockwork Army",
          "href": "#entry-um-mek-mekhanitearmyweak"
        }
      ]
    },
    "um-mek-mekhanitearmyweak": {
      "sources": [
        {
          "name": "Rush Clockwork Soldiers",
          "href": "#entry-act-mek-convertbuildweakarmy"
        }
      ]
    },
    "act-mek-awareinvestigatecongregation": {
      "effects": [
        {
          "name": "Recent Investigations",
          "href": "#entry-pr-mek-hero-exposed"
        }
      ]
    },
    "act-mek-awarevaultbuild": {
      "effects": [
        {
          "name": "Containment Vault",
          "href": "#entry-sub-mek-vault"
        }
      ]
    },
    "act-mek-awareclockworkviruspanic": {
      "effects": [
        {
          "name": "Clockwork Death",
          "href": "#entry-pr-mek-clockworkvirusdead"
        }
      ]
    },
    "holyorder-mekhane": {
      "effects": [
        {
          "name": "Mekhanite Acolyte",
          "href": "#entry-ua-mek-acolyte"
        }
      ]
    },
    "holyorder-sarkic": {
      "effects": [
        {
          "name": "Sarkic Cultist",
          "href": "#entry-uaen-mek-sarkic"
        },
        {
          "name": "Sarkic Temple",
          "href": "#entry-sub-mek-sarkictemple"
        },
        {
          "name": "Grand Karcist",
          "href": "#entry-uaen-mek-sarkicgrandkarcist"
        }
      ]
    },
    "ch-mek-signalrepeating": {
      "effects": [
        {
          "name": "Repeating Signal",
          "href": "#entry-pr-mek-maxwellist-repeatingsignal"
        }
      ]
    },
    "pr-mek-maxwellist-repeatingsignal": {
      "sources": [
        {
          "name": "Repeating Signal",
          "href": "#entry-ch-mek-signalrepeating"
        }
      ],
      "effects": [
        {
          "name": "Noosphere",
          "href": "#entry-pr-mek-maxwellistwan"
        }
      ]
    },
    "ch-mek-sacrificeself": {
      "sources": [
        {
          "name": "A Machine",
          "href": "#entry-pr-mek-machine"
        }
      ],
      "effects": [
        {
          "name": "A Machine",
          "href": "#entry-pr-mek-machine"
        }
      ]
    }
  },
  "heroMetric": {
    "value": "5",
    "label": "Divine Machines 苏醒"
  }
};

const preparedConfig = prepareGodConfig(config);
export default function MekhaneArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
