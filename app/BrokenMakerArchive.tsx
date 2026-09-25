"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "broken-maker",
  "name": "The Broken Maker",
  "number": "06",
  "theme": "broken-maker-theme",
  "assetDir": "broken-maker",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "家族诅咒、世代轮回与借用神力",
  "maxTurns": "500 回合",
  "awaken": "第 300 回合",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限。\nEternity 重置本世封印进度与已破封印数。",
  "core": [
  "开局没有初始 Agent。对有家族的单位施加 <CrossReference name=\"Maker's Curse: Sword\" />、<CrossReference name=\"Maker's Curse: Eye\" />、<CrossReference name=\"Maker's Curse: Midnight\" /> 或 <CrossReference name=\"Maker's Curse: Traitor\" />，为其整个 House 留下诅咒。",
  "培养 Sword、Eye 与 Midnight，再用 <CrossReference name=\"Create Agent\" /> 或 <CrossReference name=\"Create Agent Masterfully\" /> 将现有英雄、宗教人物转为 <CrossReference name=\"Cursed Agent\" />，获得属性和对应 Blessing。",
  "用 <CrossReference name=\"Twist Flesh\" /> 调整 Agent 的基础属性，用 <CrossReference name=\"Venom in the veins\" /> 中断带家族诅咒的人物任务。",
  "用 <CrossReference name=\"Cultists in Waiting\" /> 留下 <CrossReference name=\"Cult in Waiting\" />，或用 <CrossReference name=\"Bury Power\" /> 留下 <CrossReference name=\"Buried Power\" />，为当前与后续世代储备条件。",
  "使用 <CrossReference name=\"Eternity\" /> 推进世代，在目标地点建立 <CrossReference name=\"the Elder Tomb\" href=\"?page=locations#entry-location-set-tombofgods\" meta=\"地点\" text=\"玩家神祇的起始据点，初始 Shadow 为 100%，并向外传播。提供 Reforge The Seal、Fulfil the Prophecy 与 Geomancy: Arcane Fortress；实际能否执行取决于执行者及苏醒状态。\" image=\"/locations/game/loc_evil_tomb.png\" target=\"_blank\" />，重新开放本世已用的家族诅咒神力，并获得 <CrossReference name=\"Borrowed Powers\" />。胜利后睡眠会累积 <CrossReference name=\"Humanity's Adaptation\" />。",
  "第 300 回合打开第 6 封印，苏醒并解锁 <CrossReference name=\"Intrinsic Lifespan\" />。游戏开局启用无尽模式，可在结束一世后继续世代更替。"
],
  "overviewExtra": {
    "title": "Eternity 的世代更替",
    "text": "四种家族诅咒分别每世可施放一次，Create Agent Masterfully 每世可使用一次；House 及其剩余诅咒可延续到后代。Eternity 以 50 轮年度模拟推进世界：每轮人物年龄 +1，地图回合计数额外 +52，并执行一次正常回合更新。结束后重新开始计算本世封印进度。\n睡眠清理可控制单位和邪恶 Agent、旧 Elder Tomb，并恢复多种社会与地点状态。Buried Power 保留；Cult in Waiting 随其所绑定的聚居地存续。已招募的独特 Agent 会休整一世，在再下一世返回招募池。",
    "playStyle": "以家族和世代为经营尺度，先培育诅咒，再把合适的人物转为 Agent。能跨世代保留部分布置，并通过 Eternity 重组世界，适合长期培养和反复规划。"
  },
  "specialVictory": "无",
  "specialFailure": "开局启用无尽模式，免除最大回合数带来的失败。存在 Elder Tomb 时，英雄完成 Reforge the Seals 或 Chosen One 完成 Fulfil the Prophecy 仍会导致失败。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Create Agent",
        "Create Agent Masterfully",
        "Maker's Curse: Sword",
        "Maker's Curse: Eye",
        "Maker's Curse: Midnight",
        "Maker's Curse: Traitor",
        "Twist Flesh"
      ],
      "powerRecovery": "1/0.035"
    },
    {
      "seal": 1,
      "progress": 27,
      "agents": 3,
      "reward": [
        "Venom in the veins"
      ],
      "powerRecovery": "2/0.07"
    },
    {
      "seal": 2,
      "progress": 49,
      "agents": 4,
      "reward": [
        "Cultists in Waiting"
      ],
      "powerRecovery": "3/0.105"
    },
    {
      "seal": 3,
      "progress": 127,
      "agents": 4,
      "reward": [
        "Bury Power"
      ],
      "powerRecovery": "4/0.14"
    },
    {
      "seal": 4,
      "progress": 201,
      "agents": 5,
      "reward": [
        "Eternity"
      ],
      "powerRecovery": "5/0.175"
    },
    {
      "seal": 5,
      "progress": 257,
      "agents": 6,
      "reward": [],
      "powerRecovery": "6/0.21"
    },
    {
      "seal": 6,
      "progress": 300,
      "agents": 6,
      "reward": [
        "Intrinsic Lifespan",
        "苏醒"
      ],
      "powerRecovery": "7/0.245"
    }
  ],
  "powers": [
    {
      "name": "Create Agent",
      "seal": 0,
      "cost": 0,
      "effect": "消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。\n现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。",
      "limit": "至少 1 次招募额度，目标家族带 Maker's Curse。选择现有单位时，须有空余 Agent 位，目标为不可控制的英雄或宗教等人物，排除 Chosen One 及 Ghast、Cave Spider 等特殊邪恶自主人物。选择地点统治者的分支只检查招募额度和家族诅咒。",
      "icon": "create-agent.png"
    },
    {
      "name": "Create Agent Masterfully",
      "seal": 0,
      "cost": 0,
      "effect": "消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。\n现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。",
      "limit": "至少 1 次招募额度，目标家族带 Maker's Curse。选择现有单位时，须有空余 Agent 位，目标为不可控制的英雄或宗教等人物，排除 Chosen One 及 Ghast、Cave Spider 等特殊邪恶自主人物。选择地点统治者的分支只检查招募额度和家族诅咒。每世只能使用一次。",
      "icon": "create-agent.png"
    },
    {
      "name": "Maker's Curse: Sword",
      "seal": 0,
      "cost": 0,
      "effect": "为目标 House 添加强度 0 的 Sword 诅咒。家族成员被人物或有个人身份的单位杀死时强度 +1；Create Agent 按强度增加 Might，强度大于 0 时授予 Blessing of the Sword。",
      "limit": "选择有个人身份与 House 的单位，排除 Ghast、Cave Spider 等特殊邪恶自主人物。每世限用一次。目标 House 没有 Sword 诅咒。",
      "icon": "curse-sword.png"
    },
    {
      "name": "Maker's Curse: Eye",
      "seal": 0,
      "cost": 0,
      "effect": "为目标 House 添加强度 0 的 Eye 诅咒。家族成员每次触发疯狂加深时强度 +1；Create Agent 按强度增加 Lore，并授予 Blessing of the Eye。",
      "limit": "选择有个人身份与 House 的单位，排除 Ghast、Cave Spider 等特殊邪恶自主人物。每世限用一次。目标 House 没有 Eye 诅咒。",
      "icon": "curse-eye.png"
    },
    {
      "name": "Maker's Curse: Midnight",
      "seal": 0,
      "cost": 0,
      "effect": "为目标 House 添加强度 0 的 Midnight 诅咒。家族成员在不可控制状态下首次触发个人 Shadow 达到 100% 的通知时，强度 +1；Create Agent 增加 min(5，强度) Intrigue，并授予 Blessing of Midnight。",
      "limit": "选择有个人身份与 House 的单位，排除 Ghast、Cave Spider 等特殊邪恶自主人物。每世限用一次。目标 House 没有 Sword 诅咒。",
      "icon": "curse-midnight.png"
    },
    {
      "name": "Maker's Curse: Traitor",
      "seal": 0,
      "cost": 0,
      "effect": "向目标家族添加 Traitor 诅咒。游戏说明：家族成员被腐化为 Agent 时增强诅咒。当前 DLL 中对应的计数增长实现未找到。\n创建 Agent 时，每点现有强度增加 1 Command；强度大于 0 时获得 <CrossReference name=\"Blessing of the Traitor\" />。",
      "limit": "选择有个人身份与 House 的单位，排除 Ghast、Cave Spider 等特殊邪恶自主人物。每世限用一次。目标 House 没有 Eye 诅咒。",
      "icon": "curse-traitor.png"
    },
    {
      "name": "Twist Flesh",
      "seal": 0,
      "cost": 1,
      "effect": "随机从其他基础值高于 1 的属性中减去 1 点，永久加到当前挑战所用属性，并扣除 1 HP。可转移属性耗尽时退还 1 Power，HP 保持不变。",
      "limit": "可控制 Agent，HP >1，正在执行以 Might、Lore、Intrigue 或 Command 为类型的挑战。",
      "icon": "twist-flesh.png"
    },
    {
      "name": "Venom in the veins",
      "seal": 1,
      "cost": 2,
      "effect": "将目标当前任务替换为 Disrupted，持续 5 回合。",
      "limit": "有个人身份的单位，家族至少有一种诅咒；家族祝福不计入。排除 Chosen One。",
      "icon": "eternity.png"
    },
    {
      "name": "Cultists in Waiting",
      "seal": 2,
      "cost": 1,
      "effect": "建立 Cult in Waiting，使当地 Security −1，随创建时绑定的聚居地持续存在；聚居地被替换或摧毁后移除。",
      "limit": "目标必须是人类或精灵聚居地，渗透度大于 0，且当地尚无 Cult in Waiting。",
      "icon": "cultists-in-waiting.png"
    },
    {
      "name": "Bury Power",
      "seal": 3,
      "cost": 3,
      "effect": "在目标新增一项 Buried Power，可通过 Release Buried Power 取回 3 Power，上限受当前神力上限限制。同地可多次埋藏，储备可跨世代保留。",
      "limit": "可以对任意地点施放。",
      "icon": "bury-power.png"
    },
    {
      "name": "Eternity",
      "seal": 4,
      "cost": 0,
      "effect": "进行 50 轮年度模拟，在目标建立 the Elder Tomb，重置封印进度、已破封印数、苏醒状态与世界恐慌。每轮增加人物年龄、促进人口与聚居地恢复，并进行世界更新。\n清理现有可控单位及邪恶 Agent，移除旧 Elder Tomb；清理 Plague、Death、Unrest、Misleading Clues、Madness 及其长期效果、Famine、Devastation、Lingering Resentment。宗教 Alignment 设为 +2，负值教义回到中立。\n胜利后睡眠累积 Humanity's Adaptation；提前睡眠或失败后睡眠清空适应记录。结束后重置四种诅咒神力的本世次数，开放下一次 Create Agent Masterfully，并重新抽取 Borrowed Powers。",
      "limit": "非海洋的空地点或城市废墟。",
      "icon": "eternity.png"
    },
    {
      "name": "Intrinsic Lifespan",
      "seal": 6,
      "cost": 4,
      "effect": "使目标 Agent 的 Might、Lore、Intrigue、Command 各增加 2，并附加 52 回合寿命倒计时；倒计时归零时该 Agent 死亡。",
      "limit": "目标必须是 commandable Agent，且不能已经有 Intrinsic Lifespan。",
      "icon": "intrinsic-lifespan.png"
    }
  ],
  "sections": [
{
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Blessing of the Sword",
          "text": "持有者杀死英雄，且自己位于人类／精灵国家领土时，增加 20 Menace，并尝试让所在地国家爆发内战。"
        },
        {
          "name": "Blessing of the Eye",
          "text": "每回合使持有者 Menace 减少 0.05 × 授予时的 Eye 强度；使用 Create Agent Masterfully 时按减半后的强度计算。"
        },
        {
          "name": "Blessing of Midnight",
          "text": "每回合使持有者 Profile 减少 0.05 × 授予时的 Midnight 强度；使用 Create Agent Masterfully 时按减半后的强度计算。"
        },
        {
          "name": "Blessing of the Traitor",
          "text": "使所在地安全降低 3；该 Blessing 的等级上限为 1。"
        },
        {
          "name": "Intrinsic Lifespan",
          "text": "Might、Lore、Intrigue、Command 各 +2；每回合扣减剩余寿命，52 回合倒计时耗尽时死亡。",
          "id": "intrinsic-lifespan-trait",
          "seal": 6
        }
      ],
      "media": false
    },
{
      "id": "house-blessings",
      "title": "家族祝福",
      "items": [
        {
          "name": "Blessing: Iron Willed",
          "text": "家族成员每回合将 Sanity 上限设为 24；原本处于满值时，当前 Sanity 同时变为 24。"
        },
        {
          "name": "Blessing: Silvertongued",
          "text": "家族成员担任聚居地统治者时，当地 Unrest 每回合 −1。"
        },
        {
          "name": "Blessing: Healers",
          "text": "家族成员担任聚居地统治者时，当地 Plague 每回合 −1。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Cult in Waiting",
          "text": "使所在地 Security −1。持续绑定创建时的聚居地，聚居地被替换或摧毁时移除；单纯更换统治者或所属国家时保留。",
          "image": "cultists-in-waiting.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Buried Power",
          "text": "提供 Release Buried Power，完成后取回 3 Power 并移除对应的一项储备。可以同地叠放，并保留至后续世代。",
          "image": "bury-power.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        }
      ]
    },
{
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Cursed Agent",
          "text": "由 Create Agent 或 Create Agent Masterfully 转化现有英雄或宗教人物而来，保留原姓名、肖像、等级、物品、随从和特质，获得玩家控制权。神力给予的四维增量按家族诅咒强度计算；Masterfully 先将强度减半并向下取整。",
          "stats": "Might：继承 + Sword 强度；Lore：继承 + Eye 强度；Intrigue：继承 + min(5，Midnight 强度)；Command：继承 + Traitor 强度；HP / 最大 HP：继承。"
        },
        {
          "name": "Warrior",
          "text": "对统治者使用 Create Agent 或 Create Agent Masterfully 后，以原人物生成的自主英雄，继承姓名、家族、物品和特质；扣除相应招募额度。",
          "id": "ruler-warrior",
          "baseGame": true,
          "stats": "Might：继承 + Sword 强度 +1；Lore：继承 + Eye 强度；Intrigue：继承 + min(5，Midnight 强度)；Command：继承 + Traitor 强度 +1；HP 6 / 6。Masterfully 使用减半取整后的强度。"
        },
        {
          "name": "Cursed House Hero",
          "text": "本体补充英雄时，优先检查各诅咒神力最近登记的 House。该家族的不可控英雄与统治者合计少于 2 人时，可补充一名自主 Warrior；优先在登记地点或该家族统治者所在地出现，必要时改选其他国家地点。姓名与肖像随人物生成。",
          "stats": "Might 2–4，Lore 1–3，Intrigue 1–3，Command 2–4；HP 6 / 6。"
        }
      ]
    },
{
      "id": "related-mechanics",
      "title": "其他机制",
      "items": [
        {
          "name": "Humanity's Adaptation",
          "text": "胜利后使用 Eternity，按本世胜利类型累积适应记录：Shadow、Madness、Empire、Ruin、Winter、Deep Ones 分别对应下列六项。若此时黑暗阵营军队总 HP 至少 300，额外累积 Orc／Undead 适应。\n每层 Shadow 或 Madness 适应：各随机抽取人物 7 次，对应偏好降低一级。\n每层 Empire 或 Ruin 适应：各随机抽取人物 7 次，分别提高 Cooperation 或 Combat 偏好一级。\nWinter 适应：所有法师已有的 Geomancy Mastery 增加累计层数，上限 3；Magical Arms Race 设为 3。\n每层 Deep Ones 适应：随机抽取人物 7 次，降低 Deep Ones 偏好一级。\n每层 Orc／Undead 适应：随机抽取人物 5 次，符合 Orc 偏好条件者同时降低 Orc、Undead 偏好一级。抽样可能重复或落空。\n存在适应记录时，随机抽取一名人物，为尚无下列祝福的 House 随机赋予 Blessing: Iron Willed、Blessing: Silvertongued 或 Blessing: Healers；本次难度增长系数乘 1.05。适应记录清空时，难度增长系数恢复到开局值。"
        },
        {
          "name": "Borrowed Powers",
          "text": "每次 Eternity 结束后，从 16 个槽位无放回抽取 2 个。所有借用神力在本世从 0 封印可用，沿用各自的 Power 消耗；下一次睡眠开始时移除。\n槽位 0：<CrossReference name=\"Eyes in the Shadows\" href=\"./index.html?god=she-who-will-feast#entry-eyes-in-the-shadows\" meta=\"She Who Will Feast · 神力\" text=\"消耗：2 Power。效果：渗透目标内最后一个符合条件的未渗透设施。 释放限制：聚居地渗透度为 0，尚未完全渗透，并有可渗透设施。\" image=\"./she-who-will-feast/power-shadow.png\" />。\n槽位 1：<CrossReference name=\"Cloud Senses\" href=\"./index.html?god=she-who-will-feast#entry-cloud-senses\" meta=\"She Who Will Feast · 神力\" text=\"消耗：1 Power。效果：当前任务进度减少最多 10，最低为 0。 释放限制：正在执行挑战的单位，排除 Chosen One。\" image=\"./she-who-will-feast/power-shadow.png\" />。\n槽位 2：<CrossReference name=\"Split Shadow\" href=\"./index.html?god=she-who-will-feast#entry-split-shadow\" meta=\"She Who Will Feast · 神力\" text=\"消耗：5 Power。效果：生成可控制的 Shadow Agent，复制目标四维属性的当前值，随后依自身规则活动。 释放限制：目标为无 Chosen One 特质的英雄，当前没有存活的 Shadow Agent。\" image=\"./she-who-will-feast/shadow-agent.png\" />。\n槽位 3：<CrossReference name=\"Fleeting Servant\" href=\"./index.html?god=she-who-will-feast#entry-fleeting-servant\" meta=\"She Who Will Feast · 神力\" text=\"消耗：3 Power。效果：新增强度 40 的 Fleeting Servant，提供供英雄净化的任务。 释放限制：任意地点。\" image=\"./she-who-will-feast/power-fleeting-servant.png\" />。\n槽位 4：<CrossReference name=\"The Devil Finds Work...\" href=\"./index.html?god=iastur#entry-the-devil-finds-work\" meta=\"Iastur, The Laughing King · 神力\" text=\"消耗：1 Power。效果：由玩家选择一个标签，增加目标的普通厌恶。 释放限制：无 Chosen One 特质的人物单位，或疯狂的统治者；普通与极度厌恶合计少于 5。\" image=\"./iastur/power-preference.png\" />。\n槽位 5：<CrossReference name=\"...For Idle Hands\" href=\"./index.html?god=iastur#entry-for-idle-hands\" meta=\"Iastur, The Laughing King · 神力\" text=\"消耗：1 Power。效果：由玩家选择一个标签，增加目标的普通喜好。 释放限制：无 Chosen One 特质的人物单位，或疯狂的统治者；普通与极度喜好合计少于 7。\" image=\"./iastur/power-preference.png\" />。\n槽位 6：<CrossReference name=\"Incoherent Thoughts\" href=\"./index.html?god=iastur#entry-incoherent-thoughts\" meta=\"Iastur, The Laughing King · 神力\" text=\"消耗：3 Power。效果：以 3 回合 Disrupted 替换当前任务。 释放限制：正在执行挑战的人物单位，排除 Chosen One。\" image=\"./iastur/power-incoherent.png\" />。\n槽位 7–8：<CrossReference name=\"Sleepless Labour\" href=\"./index.html?god=ophanim#entry-sleepless-labour\" meta=\"Ophanim, The Divine Beyond · 神力\" text=\"消耗：1 Power。效果：当前挑战进度 +20，HP −2。 释放限制：可控 Agent，HP >2，执行具有四维属性类型、可结束且非引导的挑战。\" image=\"./ophanim/sleepless-labour.png\" />。\n槽位 9：<CrossReference name=\"Embrace of Metal\" href=\"./index.html?god=mammon#entry-embrace-of-metal\" meta=\"Mammon, Wealth of Man, Spirit of the Mountain · 神力\" text=\"消耗：5 Power。效果：建立 Armoured Populace，成熟后生成自主军队。 释放限制：人类聚居地，尚无 Armoured Populace 修正。\" image=\"./mammon/armoured-populace-icon.png\" />。\n槽位 10–11：<CrossReference name=\"Serpentine Vines\" href=\"./index.html?god=vinerva#entry-serpentine-vines\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：3 Power。效果：当地各项英雄任务与中立挑战的附加 Danger 设为 8。 释放限制：任意地点。\" image=\"./vinerva/serpentine-vines.png\" />。\n槽位 12：<CrossReference name=\"Grove of Dragonflower\" href=\"./index.html?god=vinerva#entry-grove-of-dragonflower\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：1 Power。效果：建立 Temptation of Might，提供 Gift of Might。 释放限制：陆地，可重复建立。\" image=\"./vinerva/grove-dragonflower.png\" />。\n槽位 13–15：从下列两组各抽一项：\n第一组：<CrossReference name=\"Grove of Golden Roses\" href=\"./index.html?god=vinerva#entry-grove-of-golden-roses\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：1 Power。效果：建立 Temptation of Gold，提供 Harvest for Gold。 释放限制：尚无同类修正的人类聚居地。\" image=\"./vinerva/grove-golden-roses.png\" />、<CrossReference name=\"Grove of Leper's Succor\" href=\"./index.html?god=vinerva#entry-grove-of-leper-s-succor\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：2 Power。效果：建立 Temptation of Health，提供 Accept Gift of Health。 释放限制：尚无同类修正的人类聚居地。\" image=\"./vinerva/grove-lepers-succor.png\" />、<CrossReference name=\"Grove of Nectar\" href=\"./index.html?god=vinerva#entry-grove-of-nectar\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：1 Power。效果：建立 Temptation of Nectar，提供 Accept Gift of Nectar。 释放限制：尚无同类修正的人类聚居地。\" image=\"./vinerva/grove-nectar.png\" />、<CrossReference name=\"Grove of Peace Lillies\" href=\"./index.html?god=vinerva#entry-grove-of-peace-lillies\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：2 Power。效果：建立 Temptation of Peace，提供 Accept Gift of Peace。 释放限制：尚无同类修正的人类聚居地。\" image=\"./vinerva/grove-peace-lillies.png\" />、<CrossReference name=\"Grove of Salvation\" href=\"./index.html?god=vinerva#entry-grove-of-salvation\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：2 Power。效果：建立 Temptation of Salvation，提供 Gift of Salvation。 释放限制：陆地，可重复建立。\" image=\"./vinerva/grove-salvation.png\" />。\n第二组：<CrossReference name=\"Black Forest\" href=\"./index.html?god=vinerva#entry-black-forest\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：0 Power。效果：消耗 Vinerva's Gift，以每点增加 1 个百分点的比例提高统治者 Shadow，上限 100%。 释放限制：人类聚居地，有统治者和 Vinerva's Gift，统治者 Shadow <100%。\" image=\"./vinerva/black-forest.png\" />、<CrossReference name=\"Choking Spores\" href=\"./index.html?god=vinerva#entry-choking-spores\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：3 Power。效果：在目标及尚无同类修正的邻地添加 Choking Spores，每项 Prosperity 修正 −0.25；保留 Vinerva's Gift。 释放限制：人类聚居地，有统治者及至少 50 Vinerva's Gift；已有 Choking Spores 的排除检查受修正遍历顺序影响。\" image=\"./vinerva/choking-spores.png\" />、<CrossReference name=\"Neurotoxins\" href=\"./index.html?god=vinerva#entry-neurotoxins\" meta=\"Vinerva, the Dark Goddess · 神力\" text=\"消耗：1 Power。效果：消耗最多 150 Vinerva's Gift，每点增加 2 Madness，一次最多增加 300。 释放限制：人类聚居地，有统治者与 Vinerva's Gift。\" image=\"./vinerva/neurotoxins.png\" />。\n同一次睡眠内两组各自无放回抽取；一世合计获得 2–4 项神力。相同神力占用多个槽位，因此 Sleepless Labour、Serpentine Vines 可能重复出现。\n借用时 Vinerva 神力按这里列出的目标条件施放，范围覆盖全图。"
        }
      ]
    },
{
      "id": "challenges",
      "title": "挑战",
      "items": [
        {
          "name": "Release Buried Power",
          "text": "完成后获得 3 Power，最多恢复至当前神力上限；移除对应的一项 Buried Power。完成时 Profile、Menace 均增加 0。",
          "image": "bury-power.png",
          "location": "<CrossReference name=\"Buried Power\" /> 所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 3　Menace: 3　XP: 72"
        }
      ]
    }
],
  "relations": {
  "Create Agent": {
    "effects": [
      {
        "name": "Cursed Agent",
        "href": "#entry-cursed-agent"
      },
      {
        "name": "Warrior",
        "href": "#entry-ruler-warrior"
      },
      {
        "name": "Blessing of the Sword",
        "href": "#entry-blessing-of-the-sword"
      },
      {
        "name": "Blessing of the Eye",
        "href": "#entry-blessing-of-the-eye"
      },
      {
        "name": "Blessing of Midnight",
        "href": "#entry-blessing-of-midnight"
      },
      {
        "name": "Blessing of the Traitor",
        "href": "#entry-blessing-of-the-traitor"
      }
    ]
  },
  "Create Agent Masterfully": {
    "effects": [
      {
        "name": "Cursed Agent",
        "href": "#entry-cursed-agent"
      },
      {
        "name": "Warrior",
        "href": "#entry-ruler-warrior"
      },
      {
        "name": "Blessing of the Sword",
        "href": "#entry-blessing-of-the-sword"
      },
      {
        "name": "Blessing of the Eye",
        "href": "#entry-blessing-of-the-eye"
      },
      {
        "name": "Blessing of Midnight",
        "href": "#entry-blessing-of-midnight"
      },
      {
        "name": "Blessing of the Traitor",
        "href": "#entry-blessing-of-the-traitor"
      }
    ]
  },
  "Maker's Curse: Sword": {
    "effects": [
      {
        "name": "Blessing of the Sword",
        "href": "#entry-blessing-of-the-sword"
      }
    ]
  },
  "Maker's Curse: Eye": {
    "effects": [
      {
        "name": "Blessing of the Eye",
        "href": "#entry-blessing-of-the-eye"
      }
    ]
  },
  "Maker's Curse: Midnight": {
    "effects": [
      {
        "name": "Blessing of Midnight",
        "href": "#entry-blessing-of-midnight"
      }
    ]
  },
  "Maker's Curse: Traitor": {
    "effects": [
      {
        "name": "Blessing of the Traitor",
        "href": "#entry-blessing-of-the-traitor"
      }
    ]
  },
  "Cultists in Waiting": {
    "effects": [
      {
        "name": "Cult in Waiting",
        "href": "#entry-cult-in-waiting"
      }
    ]
  },
  "Bury Power": {
    "effects": [
      {
        "name": "Buried Power",
        "href": "#entry-buried-power"
      }
    ]
  },
  "Eternity": {
    "effects": [
      {
        "name": "the Elder Tomb",
        "href": "?page=locations#entry-location-set-tombofgods",
        "meta": "地点",
        "text": "玩家神祇的起始据点，初始 Shadow 为 100%，并向外传播。提供 Reforge The Seal、Fulfil the Prophecy 与 Geomancy: Arcane Fortress；实际能否执行取决于执行者及苏醒状态。",
        "image": "/locations/game/loc_evil_tomb.png",
        "target": "_blank"
      },
      {
        "name": "Humanity's Adaptation",
        "href": "#entry-humanity-s-adaptation"
      },
      {
        "name": "Borrowed Powers",
        "href": "#entry-borrowed-powers"
      }
    ]
  },
  "Intrinsic Lifespan": {
    "effects": [
      {
        "name": "Intrinsic Lifespan",
        "href": "#entry-intrinsic-lifespan-trait"
      }
    ]
  },
  "Cult in Waiting": {
    "sources": [
      {
        "name": "Cultists in Waiting",
        "href": "#entry-cultists-in-waiting"
      }
    ]
  },
  "Buried Power": {
    "sources": [
      {
        "name": "Bury Power",
        "href": "#entry-bury-power"
      }
    ],
    "effects": [
      {
        "name": "Release Buried Power",
        "href": "#entry-release-buried-power"
      }
    ]
  },
  "Humanity's Adaptation": {
    "sources": [
      {
        "name": "Eternity",
        "href": "#entry-eternity"
      }
    ],
    "effects": [
      {
        "name": "Blessing: Iron Willed",
        "href": "#entry-blessing-iron-willed"
      },
      {
        "name": "Blessing: Silvertongued",
        "href": "#entry-blessing-silvertongued"
      },
      {
        "name": "Blessing: Healers",
        "href": "#entry-blessing-healers"
      }
    ]
  },
  "Borrowed Powers": {
    "sources": [
      {
        "name": "Eternity",
        "href": "#entry-eternity"
      }
    ]
  },
  "Blessing of the Sword": {
    "sources": [
      {
        "name": "Maker's Curse: Sword",
        "href": "#entry-maker-s-curse-sword"
      }
    ]
  },
  "Blessing of the Eye": {
    "sources": [
      {
        "name": "Maker's Curse: Eye",
        "href": "#entry-maker-s-curse-eye"
      }
    ]
  },
  "Blessing of Midnight": {
    "sources": [
      {
        "name": "Maker's Curse: Midnight",
        "href": "#entry-maker-s-curse-midnight"
      }
    ]
  },
  "Blessing of the Traitor": {
    "sources": [
      {
        "name": "Maker's Curse: Traitor",
        "href": "#entry-maker-s-curse-traitor"
      }
    ]
  },
  "Cursed Agent": {
    "sources": [
      {
        "name": "Create Agent",
        "href": "#entry-create-agent"
      },
      {
        "name": "Create Agent Masterfully",
        "href": "#entry-create-agent-masterfully"
      }
    ]
  },
  "elder-tomb-location": {
    "sources": [
      {
        "name": "Eternity",
        "href": "#entry-eternity"
      }
    ]
  },
  "ruler-warrior": {
    "sources": [
      {
        "name": "Create Agent",
        "href": "#entry-create-agent"
      },
      {
        "name": "Create Agent Masterfully",
        "href": "#entry-create-agent-masterfully"
      }
    ]
  },
  "intrinsic-lifespan-trait": {
    "sources": [
      {
        "name": "Intrinsic Lifespan",
        "href": "#entry-intrinsic-lifespan"
      }
    ]
  },
  "Blessing: Iron Willed": {
    "sources": [
      {
        "name": "Humanity's Adaptation",
        "href": "#entry-humanity-s-adaptation"
      }
    ]
  },
  "Blessing: Silvertongued": {
    "sources": [
      {
        "name": "Humanity's Adaptation",
        "href": "#entry-humanity-s-adaptation"
      }
    ]
  },
  "Blessing: Healers": {
    "sources": [
      {
        "name": "Humanity's Adaptation",
        "href": "#entry-humanity-s-adaptation"
      }
    ]
  }
}
};

const preparedConfig = prepareGodConfig(config);
export default function BrokenMakerArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
