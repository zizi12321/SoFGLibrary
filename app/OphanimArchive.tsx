"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "ophanim",
  "name": "Ophanim, The Divine Beyond",
  "number": "04",
  "theme": "ophanim-theme",
  "assetDir": "ophanim",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "Faith、Doubt 与神权国家",
  "maxTurns": "500 回合",
  "awaken": "第 400 回合",
  "panic": "75%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限 + Sap Life Force 的额外恢复。\nSap Life Force 为 −1／−2 时，额外恢复 0.02／0.04；表内为尚无额外恢复时的数值。",
  "core": [
    "用 <CrossReference name=\"Start Faith\" /> 在已渗透的人类聚居地建立 <CrossReference name=\"Ophanim's Faith\" />；Supplicant 的 <CrossReference name=\"Duality（shadow / faith）\" /> 在完成渗透时交替增加 Shadow 和 Faith。",
    "当城市或国家首都 Faith 达到 150，用 <CrossReference name=\"Theocracy\" /> 建立 <CrossReference name=\"Ophanim Theocracy\" />；首都与其他城市的 Faith 决定内战分裂。",
    "Faith 达到完美化阈值后触发 <CrossReference name=\"Perfection Achieved\" />，形成 <CrossReference name=\"Perfect City\" />；这与国家是否已经神权化是两种不同状态。",
    "低 Faith 地点可能因高 Faith 邻地出现 <CrossReference name=\"Ophanim's Doubt\" />。用 <CrossReference name=\"Root out Doubters\" />、<CrossReference name=\"Sectarian Violence\" />、<CrossReference name=\"Holy: Inquisition\" /> 或 <CrossReference name=\"Excise Doubt\" /> 处理。",
    "用 <CrossReference name=\"Call to Serve\" /> 为 <CrossReference name=\"Ophanimic Faith\" /> 召集 <CrossReference name=\"Ophanite Acolyte\" />；<CrossReference name=\"Crusade\" /> 指挥神权国家战争，<CrossReference name=\"Empower Slaves\" /> 治疗完美城市军队，<CrossReference name=\"Perfect Servant\" /> 接管家乡已经完美化的英雄。"
  ],
  "overviewExtra": {
    "title": "Faith、Doubt 与完美化",
    "text": "Shadow 会促进 Faith，而 Faith 反过来压低 Shadow。统治者 Awareness 会抑制未神权化国家中的 Faith。\n\n国家神权化提供 Faith 每回合 +3、军队 HP 上限 +25%，并使受控人口计入相应胜利进度；城市完美化则将当地与统治者 Shadow、统治者 Awareness 归零，压低 Unrest 和 Doubt。完美化状态会在 Faith 后来下降时继续保留。",
    "playStyle": "经营 Faith 的增长与传播，把城市信仰转成神权国家和完美城市。扩张同时需要处理 Doubt，再借助国家战争、宗教人物与完美化单位推进胜利。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 1,
      "reward": [
        "Start Faith",
        "Sleepless Labour"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 35,
      "agents": 2,
      "reward": [
        "Peace and Order",
        "Swift of Foot"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 70,
      "agents": 2,
      "reward": [
        "Theocracy",
        "Declare Heretic"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 105,
      "agents": 3,
      "reward": [
        "Call to Serve",
        "Excise Doubt"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 140,
      "agents": 4,
      "reward": [
        "Crusade"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 210,
      "agents": 5,
      "reward": [
        "Empower Slaves"
      ],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 280,
      "agents": 5,
      "reward": [
        "Perfect Servant"
      ],
      "powerRecovery": "7/0.245"
    },
    {
      "seal": 7,
      "progress": 400,
      "agents": 5,
      "reward": [
        "Smite",
        "苏醒"
      ],
      "powerRecovery": "8/0.28"
    }
  ],
  "powers": [
    {
      "name": "Start Faith",
      "seal": 0,
      "cost": 0,
      "effect": "在目标创建强度 1 的 Ophanim's Faith。",
      "limit": "人类聚居地，渗透度大于 0，且没有 Ophanim's Faith。",
      "icon": "start-faith.png"
    },
    {
      "name": "Sleepless Labour",
      "seal": 0,
      "cost": 1,
      "effect": "使目标正在执行的挑战进度立即增加 20，并扣除 2 HP。只增加进度，不直接调用挑战完成效果。",
      "limit": "目标必须正在执行有明确进度的挑战，不能用于休息、无限期任务或引导型法术；Agent HP 必须大于 2。",
      "icon": "sleepless-labour.png"
    },
    {
      "name": "Peace and Order",
      "seal": 1,
      "cost": 2,
      "effect": "当地 Ophanim's Faith 增加 50，Devastation 减少最多 40。Faith 的这次增加不立即封顶，之后在其回合更新中限制到 300。",
      "limit": "已有 Ophanim's Faith 的人类聚居地，Devastation 至少 20。",
      "icon": "peace-and-order.png"
    },
    {
      "name": "Swift of Foot",
      "seal": 1,
      "cost": 1,
      "effect": "把目标本回合已用移动次数减 1；若正在前往某地点，会立即推进一次该移动任务。",
      "limit": "目标必须是本回合已经移动过的己方 Agent。",
      "icon": "swift-of-foot.png"
    },
    {
      "name": "Theocracy",
      "seal": 2,
      "cost": 0,
      "effect": "若首都 Faith 至少 100，原国家转为 Ophanim Theocracy，不足 100 Faith 的城市可能分裂反对；否则由 Faith 至少 100 的城市发起分裂，施放地点所在国家转为神权国家。内战分裂名单实际只统计普通 City。\n控制方临时世界恐慌增加 20 个百分点；其人类聚居地改信 Ophanimic Faith，移除不属于该教团的 Temple 和教团总部。不会直接使所有城市完美化。",
      "limit": "人类或精灵国家的城市或首都，Faith 至少 150；国家不能已经是 Ophanim Theocracy、Dark Empire 或 The Alliance。",
      "icon": "theocracy.png"
    },
    {
      "name": "Declare Heretic",
      "seal": 2,
      "cost": 1,
      "effect": "触发 Infamous 的死亡效果，清零当地及相邻地点统治者的 Awareness，移除当地 Ophanim's Doubt，并杀死目标。最后把临时世界恐慌的变化量除以 2；保留 Festering Doubt。",
      "limit": "拥有 Infamous 的可控制 Agent，所在地或相邻地点至少有一名 Awareness >0 的统治者。",
      "icon": "declare-heretic.png"
    },
    {
      "name": "Call to Serve",
      "seal": 3,
      "cost": 3,
      "effect": "消耗一次招募额度，创建一名 Ophanite Acolyte。它由宗教 AI 自主行动，不直接加入玩家 Agent 名册，也不检查空余 Agent 位。",
      "limit": "采用 Ophanimic Faith 的人类聚居地，且玩家至少还有一次招募额度；不要求当地已有 Temple。",
      "icon": "call-to-serve.png"
    },
    {
      "name": "Excise Doubt",
      "seal": 3,
      "cost": 0,
      "effect": "从所有 Ophanim Theocracy 的闲置人类军队中，选择 floor(当前 HP ÷（2 + 到目标的路径距离）) 最高的一支，命令其前往夷平目标。可以调用其他神权国家的军队，不要求与目标同国。\n没有闲置军队时只显示无法执行的提示；施放本身不会立刻摧毁地点或删除 Doubt。",
      "limit": "存在 Ophanim's Doubt 的人类聚居地，所属国家为 Ophanim Theocracy 或 Dark Empire。不要求 Faith 超过 150。",
      "icon": "excise-doubt.png"
    },
    {
      "name": "Crusade",
      "seal": 4,
      "cost": 0,
      "effect": "所有 Ophanim Theocracy 向目标所属势力宣战。只跳过已经与该目标交战的国家；正在进行其他战争并不阻止宣战。",
      "limit": "目标地点须属于某势力，不能是 Ophanim Theocracy、黑暗公共阵营或中立公共阵营。",
      "icon": "crusade.png"
    },
    {
      "name": "Empower Slaves",
      "seal": 5,
      "cost": 2,
      "effect": "将目标当前 HP 设为 floor((当前 HP + 最大 HP) ÷ 2)，相当于恢复缺失 HP 的一半并向下取整。",
      "limit": "家乡为 Perfect City 的人类军队；不要求它当前就在家乡，也不检查是否受伤。",
      "icon": "unit_ophanim.png"
    },
    {
      "name": "Perfect Servant",
      "seal": 6,
      "cost": 4,
      "effect": "将原英雄标记为可控制，加入玩家 Agent 名册，消耗一次招募额度并清除其当前任务。基础属性、HP、装备和原有特质不被神力重写。",
      "limit": "尚未被控制、没有 Chosen One 特质的英雄；家乡必须是 Perfect City。需要一次招募额度与空余 Agent 位，不要求英雄当前位于家乡。",
      "icon": "perfect-servant.png"
    },
    {
      "name": "Smite",
      "seal": 7,
      "cost": 7,
      "effect": "按目标坐标扫描地表地图：平面坐标距离小于 2 的地块必定命中，距离至少 2 且小于 3 的地块各有 50% 概率命中。受击地点的单位各损失 floor(最大 HP/2)，HP 不足者死亡；聚居地执行毁灭处理。\n每个命中地块获得 floor(65 + 0–24 随机整数 − 5 × 距离) 的火山损伤；距离至少 1 的命中地块还有 2/3 概率变为山地。实际只扫描地表层；选择地下地点时也按其 x/y 坐标打击地表，并不打击地下目标。",
      "limit": "可以对任意地点施放。",
      "icon": "smite.png"
    }
  ],
  "supplicant": {
    "image": "ophanim-supplicant.png",
    "stats": "Might 2　Lore 2　Intrigue 4　Command 3　HP 5 / 5",
    "abilities": [
      {
        "name": "Duality（shadow / faith）",
        "text": "在人类聚居地完成 Infiltrate 后交替触发：第一次增加 30 个百分点 Shadow，下一次创建或增加 20 Faith，此后按完成次数交替。Shadow 上限 100%，Faith 结果上限 300。"
      },
      {
        "name": "Leader of the Faith",
        "text": "每回合为同地点已有的 Ophanim's Faith 增加 2；没有 Faith 时不会创建。"
      },
      {
        "name": "Inquisitor",
        "text": "同地点为人类聚居地且 Ophanim's Doubt 至少 1 时，每回合减少 3 Doubt，并损失 1 人口；人口降至 0 或以下，聚居地毁灭。净变化还取决于当地自然增长、Awareness 与完美化，不固定为 −1。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Infamous",
          "text": "Declare Heretic 会主动结算此特质：其他可控制 Agent 必须同时满足 Profile 与 Menace 均小于牺牲者对应数值的一半，才能把自身这两项各减半。临时世界恐慌变化量减少 牺牲者 Menace/300，下限 −0.5；Declare Heretic 随后还会将该变化量再除以 2。",
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
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n\nShadow 会提升 <CrossReference name=\"Ophanim's Faith\" />；反过来，Ophanim's Faith 也会降低当地 Shadow。",
          "id": "shadow-modifier",
          "image": "power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "<CrossReference name=\"Duality（shadow / faith）\" /> 完成渗透并轮到 Shadow 结果时增加 30 个百分点，上限 100%。\n<CrossReference name=\"Ophanim's Faith\" /> 每回合减少 Faith/500 的 Shadow 内部值，最低 0；换算为界面百分比是 Faith/5 个百分点。\n<CrossReference name=\"Perfect City\" /> 每回合将当地 Shadow 设为 0。\n<CrossReference name=\"A peaceful village shaken by a senseless tragedy\" /> 的 A sign of dark times 选项增加 33 个百分点。"
          },
          "initialValue": ""
        },
        {
          "name": "Ophanim's Faith",
          "text": "影响人类聚居地的信仰强度，压低当地 Shadow；Security 减少 floor((50 + Faith)/100)，例如 Faith 为 50／150／250 时分别减少 1／2／3。\n回合更新时 Faith 超过 299 就归为 300；尚未完美化的聚居地触发 Perfection Achieved。直接增加可在更新前暂时超过 300。它不会直接读取世界恐慌作为增长来源。",
          "image": "start-faith.png",
          "modifierChange": {
            "natural": "当地 Shadow >10% 时每回合 +4；否则，相邻有 Shadow ≥25% 且允许 FULL_FLOW 的聚居地时 +2；再否则，世界平均 Shadow >10% 时 +1。这三项互斥。\n至少一个相邻地点已有 Faith 时，每回合 +1；不按相邻地点数量累加。\n所属国家为 Ophanim Theocracy 时每回合 +3；否则当地统治者每 1% Awareness 使 Faith 每回合 −0.05。\n每项当地 Ophanim's Doubt 使 Faith 每回合 −Doubt/30。\nFaith >100 时，向相邻尚无 Faith、有统治者且 Awareness <50% 的人类聚居地尝试传播；每回合每个符合条件地点成功概率为 min(100%，0.1/(1−邻地Shadow))。成功创建强度 1。\n地点不再是人类聚居地时移除；耗尽后也移除。",
            "external": "<CrossReference name=\"Start Faith\" /> 创建强度 1。\n<CrossReference name=\"Peace and Order\" /> 增加 50。\n<CrossReference name=\"Duality（shadow / faith）\" /> 轮到 Faith 结果时创建或增加 20，上限 300。\n<CrossReference name=\"Leader of the Faith\" /> 同地时每回合 +2。\n<CrossReference name=\"Ophanimic Totem\" /> 每枚每回合增加 2 × 同地可控制 Agent 数。\n<CrossReference name=\"Sectarian Violence\" /> 减少 min(40，清除前 Doubt)。\n<CrossReference name=\"Ophanim Theocracy\" /> 从其他势力夺取地点时，若无 Faith 则创建 50；已有 Faith 不增加。其前哨站发展为聚居地时创建 200 Faith。\n<CrossReference name=\"Holy site discovered in %HEX_NAME\" /> 的 Begin the dig 增加 10。\n<CrossReference name=\"Holy site of %HEX_NAME\" href=\"#entry-holy-site-depth-1\" /> 的 Give back graciously 增加 10。\n<CrossReference name=\"Holy site of %HEX_NAME\" href=\"#entry-holy-site-depth-2\" /> 的 The excavation proceeds 增加 10。\n<CrossReference name=\"Holy site of %HEX_NAME\" href=\"#entry-holy-site-depth-3\" /> 的 They shall all see 增加 30。\n<CrossReference name=\"The holy relic of %HEX_NAME\" /> 的 Brought to light 增加 50。\n<CrossReference name=\"A peaceful village shaken by a senseless tragedy\" /> 的 They need to believe 增加 75。"
          },
          "initialValue": "Start Faith 创建时为 1；其他来源分别按各自规则创建。"
        },
        {
          "name": "Ophanim's Doubt",
          "text": "每项使当地 Ophanim's Faith 每回合减少 Doubt/30。强度超过 100 后会传播，回合更新时最高归为 300。它提供 Root out Doubters、Sectarian Violence 和 Holy: Inquisition。国家神权化和城市完美化对它的影响不同。",
          "image": "ophanim-doubt.png",
          "modifierChange": {
            "natural": "未完美化的人类聚居地每回合 +2；若统治者所属国家未神权化，再按每 1% Awareness 增加 0.05。\nPerfect City 每回合 −25，代替上述自然增长；国家仅神权化时不会得到 −25。\n本地已有 Faith <295、没有 Doubt、且相邻最高 Faith 更高时，全局累积值增加（相邻最高Faith−本地Faith）×0.0001×难度增长系数。超过随机阈值 [0.5,1.5) 后，在当前地点创建 1 Doubt，并清零累积值、重抽阈值。\n强度 >100 时，每回合向相邻已有 Faith <295 且没有 Doubt 的地点各创建 1；不提高已有 Doubt。\n当地没有 Faith 时强度归零；不再是人类聚居地时移除。",
            "external": "<CrossReference name=\"Festering Doubt\" /> 倒计时结束，创建与自身强度相同的 Doubt。\n<CrossReference name=\"Inquisitor\" /> 同地且 Doubt 至少 1 时，每回合 −3，人口 −1。\n<CrossReference name=\"Root out Doubters\" /> 最多减少 60。\n<CrossReference name=\"Sectarian Violence\" /> 最多减少 40。\n<CrossReference name=\"Holy: Inquisition\" /> 最多减少 50。\n<CrossReference name=\"Declare Heretic\" /> 移除目标所在地 Doubt，不移除 Festering Doubt。\n<CrossReference name=\"Ophanim Theocracy\" /> 从其他势力夺取地点时移除该地 Doubt。\n<CrossReference name=\"Holy site of %HEX_NAME\" href=\"#entry-holy-site-depth-1\" /> 的 Give back graciously 减少 5。\n<CrossReference name=\"Holy site of %HEX_NAME\" href=\"#entry-holy-site-depth-3\" /> 的 They shall all see 减少 20。\n<CrossReference name=\"The holy relic of %HEX_NAME\" /> 的 Brought to light 减少 25。\n<CrossReference name=\"The doubtful swarm the holy site\" /> 的 Let them see 减少 15；Words of wisdom 减少 25。"
          },
          "initialValue": ""
        },
        {
          "name": "Festering Doubt",
          "text": "Paranoid Society 为 −1，且当地或两步连接范围内存在 Ophanimic Faith 的 Temple 时，由相邻 Faith 差值触发的新 Doubt 会先显示为 5 回合倒计时。倒计时结束后替换为强度 1 的 Ophanim's Doubt。\n此修正本身的 Prosperity 影响参数为 0。Paranoid Society 使 Temple 的 Prosperity 修正降低 0.15。不能阻止相邻 Doubt 的直接传播。",
          "image": "ophanim-doubt.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "Temple",
          "text": "Holy: Build Temple 建立的教团设施。Ophanimic Faith 的 Temple 为 Paranoid Society 提供两步范围的预警，并承受其 Prosperity 代价；Sap Life Force 也在该设施的回合处理中选择一地扣除人口。Temple 本身不会自动创建 Ophanim's Faith 地点修正。",
          "image": "temple.png",
          "baseGame": true
        },
        {
          "name": "Ancient Ruins",
          "text": "提供 Explore Ruins 的本体设施。Ophanim 的专属圣地探索链可在满足其入口条件的遗迹中出现；通常探索深度 0–5，对应 0–100%。",
          "image": "ancient-ruins.png",
          "baseGame": true
        }
      ]
    },
    {
      "id": "states",
      "title": "国家与城市",
      "items": [
        {
          "name": "Ophanim Theocracy",
          "text": "Theocracy 设立的神权国家，独立于 Perfect City。其地点 Faith 每回合 +3，统治者 Awareness 不再抑制 Faith；其人类军队 HP 上限获得 25% 加成。受控人口计入神权国家的胜利进度。\nCrusade 可令其宣战。夺取其他势力地点时删除当地 Doubt，若无 Faith 则建立强度 50；由所属前哨站发展出的新聚居地获得强度 200 Faith。",
          "image": "theocracy.png",
          "meta": "国家状态"
        },
        {
          "name": "Perfect City",
          "text": "Perfection Achieved 将人类聚居地标记为完美化，不创建独立地点修正。每回合当地 Shadow、统治者 Shadow 与 Awareness 归零，Unrest −25，Doubt −25，并维持 Ophanimic Faith 为当地教团。\nFaith 下降不会撤销这个标记。可成为 Empower Slaves 和 Perfect Servant 的家乡条件；它本身不提供国家军队 +25% HP，也不会自动将整个国家变成 Ophanim Theocracy。",
          "image": "perfect-city.png",
          "meta": "城市状态"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "items": [
        {
          "name": "Ophanimic Totem",
          "text": "每枚由持有者所在地结算：若当地已经有 Ophanim's Faith，每回合增加 2 × 同地点可控制 Agent 的数量；持有者可控制时也计入。没有 Faith 不会创建，多枚独立生效。通过 The holy relic of %HEX_NAME 的 Brought to light 选项获得。",
          "image": "ophanimic-totem.png"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Ophanite Acolyte",
          "text": "Call to Serve 创建的自主宗教人物，使用本体 Acolyte 类。普通教团自动招募 Acolyte 的流程对 Ophanimic Faith 禁用。头像依人物生成，此处展示宗教肖像图池中的一种。",
          "image": "acolyte-example.png",
          "stats": "Might 1–3　Lore 2–3　Intrigue 1–3　Command 2–3　HP 5 / 5",
          "baseGame": true,
          "abilities": [
            {
              "name": "Religious Tasks",
              "text": "按教义偏好自主执行宗教任务，包括 Holy: Build Temple；Inquisitors 为 −1 后可以执行 Holy: Inquisition。"
            },
            {
              "name": "Not Holy Task",
              "text": "非宗教任务通常有 −50 动机；招募随从、升级、休息和仪式等例外不受这条惩罚。"
            }
          ]
        },
        {
          "name": "Perfect Servant",
          "text": "Perfect Servant 神力直接接管原英雄，不生成独立兵种。头像、装备、随从、特质和固定能力均继承原人物；神力不额外增加属性或固定能力。",
          "id": "perfect-servant-unit",
          "stats": "Might 继承　Lore 继承　Intrigue 继承　Command 继承　HP／最大 HP 继承"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Ophanim Army",
          "text": "使用本体人类军队类，实际名称为 Army of 加家乡名称。家乡完美化、所属国家属于黑暗阵营且没有人物领军时使用 Ophanim 军队外观。\n国家神权化提供 25% HP 加成。家乡每项 Military Fervour 还会再乘（1 + min(100,强度)/100）并取整。Empower Slaves 只要求家乡完美化；Crusade 指挥国家宣战，Excise Doubt 调用闲置军队。",
          "image": "unit_ophanim.png",
          "stats": "HP 上限：先取 floor(家乡 Prosperity × Population)，神权国家再乘 1.25 并向下取整；每回合重算。",
          "baseGame": true
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "items": [
        {
          "name": "Ophanimic Faith",
          "text": "开局在 the Elder Tomb 所在地建立的 Holy Order，Supplicant 被指定为先知。Alignment 初始 −3，Temple Builders 与 Preachers 初始 +1；另加入 Paranoid Society、Sap Life Force、Inquisitors，初始均为 0。\n不能使用普通外交，也不会按普通教团的资金流程自动招募 Acolyte；Call to Serve 消耗玩家招募额度补充人手。",
          "id": "ophanim-faith-religion"
        },
        {
          "name": "Paranoid Society",
          "text": "",
          "tenetRange": "-1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Ophanimic Faith 的 Temple 两步范围内，由 Faith 高低差新生的 Doubt 延迟 5 回合，表现为 Festering Doubt。相邻 Doubt 的直接传播仍正常结算。每座对应 Temple 使所在地点 Prosperity 的计算值减少 0.15。"
            }
          ]
        },
        {
          "name": "Sap Life Force",
          "text": "",
          "tenetRange": "-2 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "全局每回合额外恢复 0.02 Power，与 Temple 数量无关。神力未满时，每回合最多由一座 Temple 的所在地承担 2 人口损失；人口低于 2 时聚居地毁灭。神力满时不扣人口；额外神力恢复也在没有 Temple 时生效。"
            },
            {
              "level": -2,
              "text": "全局每回合额外恢复 0.04 Power，与 Temple 数量无关。神力未满时，每回合最多由一座 Temple 的所在地承担 4 人口损失；人口低于 2 时聚居地毁灭。神力满时不扣人口；额外神力恢复也在没有 Temple 时生效。"
            }
          ]
        },
        {
          "name": "Inquisitors",
          "text": "",
          "meta": "宗教任务：Holy: Inquisition",
          "tenetRange": "-1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "允许 Ophanimic Faith 的成员执行 Holy: Inquisition，并为该任务增加 125 执行意愿。"
            }
          ]
        }
      ],
      "media": false
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "items": [
        {
          "name": "Holy: Inquisition",
          "text": "执行者必须属于 Ophanimic Faith，且 Inquisitors 为 −1。清除 X＝min(50，当地 Doubt)，损失 floor(X/4) 人口，增加 X Death；人口归零则毁灭聚居地。完成时 Menace +10。",
          "location": "<CrossReference name=\"Ophanim's Doubt\" /> 所在地点；不要求 Temple 或当地已经属于 Ophanimic Faith。",
          "meta": "Command",
          "statLine": "Complexity: 20　Profile: 50　Menace: 0　XP: 36",
          "positiveTags": "Religion",
          "negativeTags": "无",
          "image": "call-to-serve.png"
        },
        {
          "name": "Holy: Build Temple",
          "text": "建立 Temple，或替换现有异教 Temple。花费教团建庙资金；可控制执行者可以用个人 Gold 补足。成本为 50 ×（该教团现有 Temple 数 +1）。完成时当地渗透度 >50% 或执行者可控制，则新 Temple 已被渗透。",
          "baseGame": true,
          "image": "temple.png",
          "location": "采用执行者所属 Holy Order 的人类聚居地；不能已有同教团 Temple，无可替换 Temple 时设施数须小于 4。",
          "meta": "Command",
          "statLine": "Complexity: 20　Profile: 60　Menace: 0　XP: 36",
          "positiveTags": "Religion、Cooperation",
          "negativeTags": "无"
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "items": [
        {
          "name": "Root out Doubters",
          "text": "清除 X＝min(60，当地 Doubt)。若是人类聚居地，损失 floor(X/5) 人口，增加 X Death；人口低于 0 时毁灭聚居地。完成时 Menace +5。",
          "location": "<CrossReference name=\"Ophanim's Doubt\" /> 所在的人类国家地点，国家为 Ophanim Theocracy 或 Dark Empire。",
          "meta": "Command",
          "statLine": "Complexity: 25　Profile: 50　Menace: 50　XP: 42",
          "image": "excise-doubt.png"
        },
        {
          "name": "Sectarian Violence",
          "text": "清除 X＝min(40，当地 Doubt)，同时 Faith −X、Unrest +X/3。若是人类聚居地，再损失 floor(X/5) 人口、增加 X Death；人口归零则毁灭聚居地。完成时 Menace +15、Profile +10。",
          "location": "<CrossReference name=\"Ophanim's Doubt\" /> 所在的人类国家地点，国家既不是 Ophanim Theocracy 也不是 Dark Empire，且 Faith ≥Doubt。",
          "meta": "Intrigue",
          "statLine": "Complexity: 50　Profile: 50　Menace: 50　XP: 72",
          "image": "theocracy.png"
        },
        {
          "name": "Explore Ruins",
          "text": "本体中立挑战，玩家 Agent 与符合条件的英雄均可执行。玩家完成后按条件选择探索事件；Ophanim 的圣地事件链从这里进入。非玩家英雄使用通用探索结果。",
          "baseGame": true,
          "image": "explore-ruins.png",
          "location": "<CrossReference name=\"Ancient Ruins\" /> 所在地点。",
          "meta": "Other · 中立挑战",
          "statLine": "Complexity: 7　Profile: 50　Menace: 0　XP: 16"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "items": [
        {
          "name": "Perfection Achieved",
          "text": "Ophanim's Faith 回合更新时超过 299，且人类聚居地尚未完美化时触发。",
          "image": "event-perfection.jpg",
          "eventOptions": [
            {
              "name": "This harsh light grants no warmth",
              "text": "建立 Perfect City 状态。"
            },
            {
              "name": "View the perfection [PAN TO LOCATION]",
              "text": "将视角移到目标地点；建立 Perfect City 状态。"
            }
          ]
        },
        {
          "name": "Holy site discovered in %HEX_NAME",
          "text": "Explore Ruins 的专属入口：尚未分配事件链、探索深度为 0，所在地是人类城市或小型聚居地（不包括矮人城市与前哨站），且不是 Arctic、Snow、Dry Cold 或 Tundra。与其他符合条件的探索入口竞争，不保证每处遗迹都出现。\n标题中的 %HEX_NAME 会替换为地点名。",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "Begin the dig",
              "text": "探索深度 +1；当地 Faith +10；此地继续使用圣地探索事件链。"
            }
          ]
        },
        {
          "name": "Holy site of %HEX_NAME",
          "text": "圣地事件链，探索深度 1。",
          "id": "holy-site-depth-1",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "Gold for the cause",
              "text": "探索深度 +1；Gold +25；此地继续使用圣地探索事件链。"
            },
            {
              "name": "Give back graciously",
              "text": "探索深度 +1；已有 Doubt −5；当地 Faith +10；Gold −25；此地继续使用圣地探索事件链。",
              "condition": "至少 25 Gold。"
            }
          ]
        },
        {
          "name": "Holy site of %HEX_NAME",
          "text": "圣地事件链，探索深度 2。",
          "id": "holy-site-depth-2",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "The excavation proceeds",
              "text": "探索深度 +1；当地 Faith +10。"
            }
          ]
        },
        {
          "name": "Holy site of %HEX_NAME",
          "text": "圣地事件链，探索深度 3。",
          "id": "holy-site-depth-3",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "They shall all see",
              "text": "探索深度 +1；已有 Doubt −20；当地 Faith +30。"
            }
          ]
        },
        {
          "name": "The holy relic of %HEX_NAME",
          "text": "圣地事件链，探索深度 4。",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "Brought to light",
              "text": "探索深度 +1；获得 Ophanimic Totem；已有 Doubt −25；当地 Faith +50。"
            }
          ]
        },
        {
          "name": "The doubtful swarm the holy site",
          "text": "圣地事件链在探索深度 1–3、当地已有 Doubt、全局尚未处理本事件时可出现；选择权重为 2，同阶段主事件为 1，只有两者符合时本事件概率为 2/3。",
          "image": "event-holy-site.jpg",
          "eventOptions": [
            {
              "name": "Let them see",
              "text": "Menace +4；已有 Doubt −15；记录本事件已处理；此地继续使用圣地探索事件链。"
            },
            {
              "name": "Turn them away",
              "text": "探索深度 +1；Menace +4；记录本事件已处理；此地继续使用圣地探索事件链。"
            },
            {
              "name": "Words of wisdom",
              "text": "探索深度 +1；已有 Doubt −25；Power −1；记录本事件已处理；此地继续使用圣地探索事件链。",
              "condition": "当前 Power >0。"
            }
          ]
        },
        {
          "name": "A peaceful village shaken by a senseless tragedy",
          "text": "本体共享移动事件，包含 Ophanim 专属选项。地点有 Farms，没有 Devastation 或 Plague，并满足 50<Madness<250，或 25%<统治者 Shadow<68%；无统治者时后项使用地图格黑暗值。全局标记尚未记录时以 1% 概率触发。",
          "image": "event-shaken-village.jpg",
          "baseGame": true,
          "eventOptions": [
            {
              "name": "A sign of dark times",
              "text": "当地 Shadow +33 个百分点；记录当前回合，阻止后续通常再次触发。"
            },
            {
              "name": "They need to believe",
              "text": "当地 Faith +75；记录当前回合，阻止后续通常再次触发。"
            }
          ]
        }
      ]
    }
  ],
  "relations": {
    "Shadow": {
      "sources": [
        {
          "name": "Duality（shadow / faith）",
          "href": "#entry-duality-shadow-faith"
        },
        {
          "name": "A peaceful village shaken by a senseless tragedy",
          "href": "#entry-a-peaceful-village-shaken-by-a-senseless-tragedy"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Ophanim's Faith": {
      "sources": [
        {
          "name": "Start Faith",
          "href": "#entry-start-faith"
        },
        {
          "name": "Peace and Order",
          "href": "#entry-peace-and-order"
        },
        {
          "name": "Duality（shadow / faith）",
          "href": "#entry-duality-shadow-faith"
        },
        {
          "name": "Leader of the Faith",
          "href": "#entry-leader-of-the-faith"
        },
        {
          "name": "Ophanimic Totem",
          "href": "#entry-ophanimic-totem"
        },
        {
          "name": "Ophanim Theocracy",
          "href": "#entry-ophanim-theocracy"
        },
        {
          "name": "Holy site discovered in %HEX_NAME",
          "href": "#entry-holy-site-discovered-in-hex-name"
        },
        {
          "name": "Holy site of %HEX_NAME",
          "href": "#entry-holy-site-depth-1"
        },
        {
          "name": "Holy site of %HEX_NAME",
          "href": "#entry-holy-site-depth-2"
        },
        {
          "name": "Holy site of %HEX_NAME",
          "href": "#entry-holy-site-depth-3"
        },
        {
          "name": "The holy relic of %HEX_NAME",
          "href": "#entry-the-holy-relic-of-hex-name"
        },
        {
          "name": "A peaceful village shaken by a senseless tragedy",
          "href": "#entry-a-peaceful-village-shaken-by-a-senseless-tragedy"
        }
      ],
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow-modifier"
        },
        {
          "name": "Theocracy",
          "href": "#entry-theocracy"
        },
        {
          "name": "Perfection Achieved",
          "href": "#entry-perfection-achieved"
        },
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "Ophanim's Doubt": {
      "sources": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        },
        {
          "name": "Festering Doubt",
          "href": "#entry-festering-doubt"
        }
      ],
      "effects": [
        {
          "name": "Root out Doubters",
          "href": "#entry-root-out-doubters"
        },
        {
          "name": "Sectarian Violence",
          "href": "#entry-sectarian-violence"
        },
        {
          "name": "Holy: Inquisition",
          "href": "#entry-holy-inquisition"
        },
        {
          "name": "Excise Doubt",
          "href": "#entry-excise-doubt"
        }
      ]
    },
    "Festering Doubt": {
      "sources": [
        {
          "name": "Paranoid Society",
          "href": "#entry-paranoid-society"
        },
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "Perfect City": {
      "sources": [
        {
          "name": "Perfection Achieved",
          "href": "#entry-perfection-achieved"
        }
      ],
      "effects": [
        {
          "name": "Empower Slaves",
          "href": "#entry-empower-slaves"
        },
        {
          "name": "Perfect Servant",
          "href": "#entry-perfect-servant"
        }
      ]
    },
    "Ophanim Theocracy": {
      "sources": [
        {
          "name": "Theocracy",
          "href": "#entry-theocracy"
        }
      ],
      "effects": [
        {
          "name": "Crusade",
          "href": "#entry-crusade"
        },
        {
          "name": "Ophanim Army",
          "href": "#entry-ophanim-army"
        },
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Ophanim Army": {
      "sources": [
        {
          "name": "Ophanim Theocracy",
          "href": "#entry-ophanim-theocracy"
        }
      ],
      "effects": [
        {
          "name": "Empower Slaves",
          "href": "#entry-empower-slaves"
        },
        {
          "name": "Excise Doubt",
          "href": "#entry-excise-doubt"
        }
      ]
    },
    "Ophanite Acolyte": {
      "sources": [
        {
          "name": "Call to Serve",
          "href": "#entry-call-to-serve"
        }
      ],
      "effects": [
        {
          "name": "Holy: Build Temple",
          "href": "#entry-holy-build-temple"
        },
        {
          "name": "Holy: Inquisition",
          "href": "#entry-holy-inquisition"
        }
      ]
    },
    "perfect-servant-unit": {
      "sources": [
        {
          "name": "Perfect Servant",
          "href": "#entry-perfect-servant"
        }
      ],
      "effects": []
    },
    "Ophanimic Totem": {
      "sources": [
        {
          "name": "The holy relic of %HEX_NAME",
          "href": "#entry-the-holy-relic-of-hex-name"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Temple": {
      "sources": [
        {
          "name": "Holy: Build Temple",
          "href": "#entry-holy-build-temple"
        }
      ],
      "effects": [
        {
          "name": "Paranoid Society",
          "href": "#entry-paranoid-society"
        },
        {
          "name": "Sap Life Force",
          "href": "#entry-sap-life-force"
        }
      ]
    },
    "Ancient Ruins": {
      "sources": [],
      "effects": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ]
    },
    "Inquisitors": {
      "sources": [],
      "effects": [
        {
          "name": "Holy: Inquisition",
          "href": "#entry-holy-inquisition"
        }
      ]
    },
    "Paranoid Society": {
      "sources": [],
      "effects": [
        {
          "name": "Festering Doubt",
          "href": "#entry-festering-doubt"
        }
      ]
    },
    "Start Faith": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Peace and Order": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Theocracy": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanim Theocracy",
          "href": "#entry-ophanim-theocracy"
        }
      ]
    },
    "Call to Serve": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanite Acolyte",
          "href": "#entry-ophanite-acolyte"
        }
      ]
    },
    "Perfect Servant": {
      "sources": [],
      "effects": [
        {
          "name": "Perfect Servant",
          "href": "#entry-perfect-servant-unit"
        }
      ]
    },
    "Declare Heretic": {
      "sources": [],
      "effects": [
        {
          "name": "Infamous",
          "href": "#entry-infamous"
        },
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "Excise Doubt": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanim Army",
          "href": "#entry-ophanim-army"
        }
      ]
    },
    "Empower Slaves": {
      "sources": [],
      "effects": [
        {
          "name": "Ophanim Army",
          "href": "#entry-ophanim-army"
        }
      ]
    },
    "Root out Doubters": {
      "sources": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "Sectarian Violence": {
      "sources": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        },
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "Holy: Inquisition": {
      "sources": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "Holy: Build Temple": {
      "sources": [
        {
          "name": "Ophanite Acolyte",
          "href": "#entry-ophanite-acolyte"
        }
      ],
      "effects": [
        {
          "name": "Temple",
          "href": "#entry-temple"
        }
      ]
    },
    "Perfection Achieved": {
      "sources": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ],
      "effects": [
        {
          "name": "Perfect City",
          "href": "#entry-perfect-city"
        }
      ]
    },
    "Holy site discovered in %HEX_NAME": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "The holy relic of %HEX_NAME": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        },
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        },
        {
          "name": "Ophanimic Totem",
          "href": "#entry-ophanimic-totem"
        }
      ]
    },
    "The doubtful swarm the holy site": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "holy-site-depth-1": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        },
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    },
    "holy-site-depth-2": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        }
      ]
    },
    "holy-site-depth-3": {
      "sources": [
        {
          "name": "Explore Ruins",
          "href": "#entry-explore-ruins"
        }
      ],
      "effects": [
        {
          "name": "Ophanim's Faith",
          "href": "#entry-ophanim-s-faith"
        },
        {
          "name": "Ophanim's Doubt",
          "href": "#entry-ophanim-s-doubt"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function OphanimArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
