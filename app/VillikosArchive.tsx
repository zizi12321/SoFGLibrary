"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "villikos",
  "name": "Villikos, the First Claimant",
  "number": "25",
  "theme": "villikos-theme",
  "assetDir": "villikos",
  "background": "villikos_background.png",
  "portrait": "villikos_portrait.png",
  "flavour": "",
  "caption": "Claim 扩散、Imperial Blood 与帝国征服",
  "maxTurns": "500 回合",
  "awaken": "第 390 回合",
  "panic": "75%",
  "initialAgents": "2",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerRecovery": "每回合神力恢复 = 神力上限 ×0.035×难度系数。",
  "core": [
    "开局在 the Elder Tomb 存在满强度 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />。通过 <CrossReference name=\"Claim\" href=\"#entry-p-fc-claim\" /> 神力与 <CrossReference name=\"Assert Claim\" href=\"#entry-rt-fc-assertclaim\" /> 扩展据点，利用 <CrossReference name=\"Grim Herald\" href=\"#entry-grim-herald\" /> 为更多聚居地积累 Claim。",
    "用 <CrossReference name=\"Imperial Blood\" href=\"#entry-p-fc-imperiallineage\" /> 或 <CrossReference name=\"By Imperial Blood\" href=\"#entry-rt-fc-bloodline\" /> 腐化统治者，借助其 <CrossReference name=\"Climb the Ladder\" href=\"#entry-act-fc-climbrank\" /> 与 <CrossReference name=\"Install Imperial Ruler\" href=\"#entry-act-fc-replaceruler\" /> 扩散帝国血脉。",
    "<CrossReference name=\"From Above\" href=\"#entry-p-fc-politicalagitation\" /> 与 <CrossReference name=\"From Below\" href=\"#entry-p-fc-unrest\" /> 准备政治动荡；通过 <CrossReference name=\"Power-Grab\" href=\"#entry-p-fc-legitimistuprising\" />、<CrossReference name=\"Upheaval\" href=\"#entry-p-fc-peasantuprising\" /> 分裂国家，产生 <CrossReference name=\"Royalist Army\" href=\"#entry-um-fc-legitimists\" /> 和 <CrossReference name=\"Peasant Army\" href=\"#entry-um-fc-peasantarmy\" />。",
    "以 <CrossReference name=\"Imperial Legions\" href=\"#entry-p-fc-legions\" />、<CrossReference name=\"Imperial Conquests\" href=\"#entry-p-fc-imperialemperors\" /> 与 <CrossReference name=\"Monuments of Triumph\" href=\"#entry-p-fc-monuments\" /> 支援带 Imperial Blood 的统治者战争，用 <CrossReference name=\"Will to Surrender\" href=\"#entry-p-fc-lowerdefense\" /> 削弱防御。",
    "苏醒后指挥 <CrossReference name=\"The First Claimant\" href=\"#entry-um-fc-villikos\" /> 征服聚居地，建立 <CrossReference name=\"Empire of Villikos\" href=\"#entry-empire-of-villikos\" />；利用 <CrossReference name=\"Conquest of the Soul\" href=\"#entry-p-fc-convertarmies\" /> 和 <CrossReference name=\"True Claimants\" href=\"#entry-p-fc-firstclaimant\" /> 扩张军势，同时保护神体。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "",
    "playStyle": "先通过统治者野心、领地分裂与代理人战争削弱世界，再以苏醒军队直接吞并。Claim 是施法与扩张的基础；把 Imperial Blood 送上王位，往往比单纯摧毁一个地点更有价值。"
  },
  "specialVictory": "Empire of Villikos 内的人口占世界人口的百分比，每 1 个百分点额外贡献 2.5 胜利分；这项贡献可与常规胜利进度合并。",
  "specialFailure": "The First Claimant 死亡时立即失败。",
  "supplicant": {
    "name": "The Supplicant",
    "image": "icon_supplicant.png",
    "stats": "Might: 2；Lore: 2；Intrigue: 4；Command: 3",
    "abilities": [
      {
        "name": "Grim Herald",
        "id": "grim-herald",
        "text": "在人类类聚居地完成非 Other 类型的挑战时，<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> +25；尚无 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 时先创建强度 1 的修正。"
      },
      {
        "name": "Bannerlord",
        "id": "bannerlord",
        "text": "在 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 达到 100 的地点触发 Might、Lore、Intrigue、Command 各 +1。当前实现只会启用加成，没有离开后将其关闭的逻辑。"
      },
      {
        "name": "Chosen Heir",
        "id": "chosen-heir",
        "text": "选择该能力后，新获得 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的人物会把对现存 Supplicant 的偏好至少提高到 1。"
      }
    ]
  },
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "powerRecovery": "1/0.035",
      "reward": [
        "<CrossReference name=\"Claim\" href=\"#entry-p-fc-claim\" />"
      ]
    },
    {
      "seal": 1,
      "progress": 10,
      "agents": 2,
      "powerRecovery": "2/0.07",
      "reward": [
        "<CrossReference name=\"Imperial Blood\" href=\"#entry-p-fc-imperiallineage\" />"
      ]
    },
    {
      "seal": 2,
      "progress": 30,
      "agents": 3,
      "powerRecovery": "3/0.105",
      "reward": [
        "<CrossReference name=\"From Above\" href=\"#entry-p-fc-politicalagitation\" />",
        "<CrossReference name=\"From Below\" href=\"#entry-p-fc-unrest\" />"
      ]
    },
    {
      "seal": 3,
      "progress": 90,
      "agents": 3,
      "powerRecovery": "4/0.14",
      "reward": [
        "<CrossReference name=\"Upheaval\" href=\"#entry-p-fc-peasantuprising\" />",
        "<CrossReference name=\"Power-Grab\" href=\"#entry-p-fc-legitimistuprising\" />"
      ]
    },
    {
      "seal": 4,
      "progress": 150,
      "agents": 4,
      "powerRecovery": "5/0.175",
      "reward": [
        "<CrossReference name=\"Will to Surrender\" href=\"#entry-p-fc-lowerdefense\" />",
        "<CrossReference name=\"Fragile Loyalties\" href=\"#entry-p-fc-rulerbetrayal\" />"
      ]
    },
    {
      "seal": 5,
      "progress": 210,
      "agents": 4,
      "powerRecovery": "6/0.21",
      "reward": [
        "<CrossReference name=\"Imperial Legions\" href=\"#entry-p-fc-legions\" />",
        "<CrossReference name=\"Imperial Conquests\" href=\"#entry-p-fc-imperialemperors\" />"
      ]
    },
    {
      "seal": 6,
      "progress": 290,
      "agents": 5,
      "powerRecovery": "7/0.245",
      "reward": [
        "<CrossReference name=\"Monuments of Triumph\" href=\"#entry-p-fc-monuments\" />"
      ]
    },
    {
      "seal": 7,
      "progress": 390,
      "agents": 6,
      "powerRecovery": "8/0.28",
      "reward": [
        "<CrossReference name=\"Conquest of the Soul\" href=\"#entry-p-fc-convertarmies\" />",
        "<CrossReference name=\"True Claimants\" href=\"#entry-p-fc-firstclaimant\" />",
        "<CrossReference name=\"The First Claimant\" href=\"#entry-um-fc-villikos\" /> 苏醒"
      ]
    }
  ],
  "powers": [
    {
      "id": "p-fc-claim",
      "name": "Claim",
      "seal": 0,
      "cost": 1,
      "icon": "icon_claim.png",
      "effect": "在人类类聚居地创建 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />，强度为 1。",
      "limit": "目标尚无 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />。"
    },
    {
      "id": "p-fc-imperiallineage",
      "name": "Imperial Blood",
      "seal": 1,
      "cost": 1,
      "icon": "icon_powerBlood.png",
      "effect": "赋予人物 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />，立即使 Ambition 偏好达到 2，并开启其腐化与扩张行为。",
      "limit": "统治者所在地或英雄故乡的 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 1；人物没有 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />，Awareness 低于 100%。神力不能指定现任君主或 Chosen One。"
    },
    {
      "id": "p-fc-politicalagitation",
      "name": "From Above",
      "seal": 2,
      "cost": 1,
      "icon": "icon_powerAgitation.png",
      "effect": "Political Agitation 增加当地 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 强度的整数部分。",
      "limit": "非首都的 City，<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 1。"
    },
    {
      "id": "p-fc-unrest",
      "name": "From Below",
      "seal": 2,
      "cost": 1,
      "icon": "icon_powerUnrest.png",
      "effect": "本地及相邻人类类聚居地 Unrest 各增加 30。",
      "limit": "本地为人类类聚居地，<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 1。"
    },
    {
      "id": "p-fc-peasantuprising",
      "name": "Upheaval",
      "seal": 3,
      "cost": 2,
      "icon": "icon_powerUpheaval.png",
      "effect": "使目标地区与同国相邻的村落、至多一座较大聚居地脱离原国家，发动起义。卷入地点的 Unrest 被清空，转为 Peasant Army；标准分支的初始 HP 为消耗前 Unrest 的一半，向下取整。新起义君主获得 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />。\n受影响的原驻军转投新国家时 HP 减半；形成军队的地点额外增加 min(初始 HP /10 向下取整,30) Death。",
      "limit": "目标为 小型聚居地（如村落），<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 1，Unrest 至少为 30。"
    },
    {
      "id": "p-fc-legitimistuprising",
      "name": "Power-Grab",
      "seal": 3,
      "cost": 2,
      "icon": "icon_legitimistPower.png",
      "effect": "同国所有有统治者且 Political Agitation 至少为 50 的地点参与分裂，同一家族尽量归入同一新国家，并带走相邻的同国小型聚居地。\n只有起义前已带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的统治者会把本地 Political Agitation 清零并生成等量 HP 的 Royalist Army。新国家的君主随后获得 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />。",
      "limit": "非首都的人类类聚居地，有统治者，<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 1，Political Agitation 至少为 50。"
    },
    {
      "id": "p-fc-lowerdefense",
      "name": "Will to Surrender",
      "seal": 4,
      "cost": 1,
      "icon": "icon_powerDefence.png",
      "effect": "当地 Defence 减少 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 强度的整数部分。",
      "limit": "所在地具有至少 1 点 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />；实际效果需要聚居地。"
    },
    {
      "id": "p-fc-rulerbetrayal",
      "name": "Fragile Loyalties",
      "seal": 4,
      "cost": 2,
      "icon": "icon_powerbetray.png",
      "effect": "目标统治者及其领地改投正在交战、且君主带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的第一个合格国家；故乡为该地点的军队随之转投。相邻同国小型聚居地各有 40% 概率跟随。",
      "limit": "<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 至少为 100；目标带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 且不是君主；地点为 City 或已有驻军；本国正在与合格帝国交战。"
    },
    {
      "id": "p-fc-legions",
      "name": "Imperial Legions",
      "seal": 5,
      "cost": 2,
      "icon": "icon_legionPower.png",
      "effect": "创建 Imperial Legions 地点修正，把现有驻军改为 Imperial Legion，保留当前 HP；以后符合条件的新驻军也会转换。",
      "limit": "当地统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />，尚无该修正；地点为 City 或能够执行 Raise Army／Fund Army。已有驻军不能是 Imperial Legion 或带人物身份的军队。"
    },
    {
      "id": "p-fc-imperialemperors",
      "name": "Imperial Conquests",
      "seal": 5,
      "cost": 2,
      "icon": "icon_powerRegent.png",
      "effect": "建立 Target of Conquest，吸引带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主进攻其所属国家。帝国夺取目标后，首都 Military Fervour +30。",
      "limit": "有国家归属的人类类聚居地，尚无 Target of Conquest。"
    },
    {
      "id": "p-fc-monuments",
      "name": "Monuments of Triumph",
      "seal": 6,
      "cost": 3,
      "icon": "icon_powerMegaprojects.png",
      "effect": "创建 Monument of Triumph，初始强度 10；通过征服积累强度，持续支持国内 Military Fervour。",
      "limit": "首都统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />，尚无 Monument of Triumph。"
    },
    {
      "id": "p-fc-convertarmies",
      "name": "Conquest of the Soul",
      "seal": 7,
      "cost": 2,
      "icon": "icon_convertPower.png",
      "effect": "把目标 Human Army 转换为 Empire of Villikos 的自主军队，继承当前 HP，并以此作为 HP 上限。",
      "limit": "目标不属于 Empire of Villikos，且与 The First Claimant 或 True Claimant 位于同一地点。"
    },
    {
      "id": "p-fc-firstclaimant",
      "name": "True Claimants",
      "seal": 7,
      "cost": 3,
      "icon": "icon_legionClaimant.png",
      "effect": "杀死带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主，在 the Elder Tomb 生成 True Claimant；初始 HP 为其原国家领地数 ×20。原国家各 City 或重要地点的 Political Instability 增加 min(领地数 ×20,150)。",
      "limit": "目标为仍在位的君主并带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />；生成军队还需要 the Elder Tomb 与已建立的 Empire of Villikos。"
    }
  ],
  "sections": [
{
      "id": "traits",
      "title": "人物特质",
      "media": false,
      "items": [
        {
          "id": "t-fc-imperial",
          "name": "Imperial Blood",
          "text": "Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> +5；尚无 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 的所在地创建强度 1。"
        },
        {
          "id": "t-fc-peasantlord",
          "name": "Peasant Lord",
          "text": "Upheaval 创建平民统治者时赋予的身份特质；没有额外属性或实际启用的主动能力。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "id": "pr-fc-claim",
          "name": "Claim",
          "text": "提供多项神力的施放条件。强度范围为 0–100，达到 100 时 Security −2，并向尚无 Claim、且统治者 Awareness 未达 100% 的相邻地点播种强度 1 的 Claim。\nClaim 也会提高带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主对该国领土的战争倾向，首都的贡献按两倍计算。",
          "image": "icon_claim.png",
          "initialValue": "1；the Elder Tomb 开局为 100。",
          "modifierChange": {
            "natural": "每回合基础 +1；当地 Shadow 每 1 个百分点额外 +0.01；Unrest 额外贡献 min(Unrest/100,1)。\n统治者 Awareness 为 100% 且个人 Shadow 未满时，每回合另 −3。",
            "external": "<CrossReference name=\"Claim\" href=\"#entry-p-fc-claim\" /> 创建强度 1。\n<CrossReference name=\"Assert Claim\" href=\"#entry-rt-fc-assertclaim\" /> 对已有修正直接设为 100；尚无时创建强度 1。\nGrim Herald 完成符合条件的挑战后 +25。\n<CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 持有者完成非 Other 任务后 +5；尚无时创建强度 1。\nHoly Claims 为 −1 时，每座该教团 Temple 每回合 +1；尚无时创建强度 1。\nEmpire of Villikos 的领地每回合 +10；尚无时创建强度 1。\nTrue Claimant 正在占领、夷平或掠夺地点时，每回合 +1；尚无时创建强度 1。\n<CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 对统治者进行腐化检查时，若所在地没有 Claim，则创建强度 1。"
          }
        },
        {
          "id": "pr-fc-conquest",
          "name": "Target of Conquest",
          "text": "每个目标地点使 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 君主对其所属国家的宣战倾向 +50，累计最高 +250。带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主夺取该地点后，首都 Military Fervour +30，并移除本修正。",
          "image": "icon_powerRegent.png",
          "initialValue": "50",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "Imperial Conquests 创建。"
          }
        },
        {
          "id": "pr-fc-imperiallegions",
          "name": "Imperial Legions",
          "text": "当地统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 时，把新出现的普通驻军转换为 Imperial Legion，并继承原军队当前 HP。保留在 Empire of Villikos 占领聚居地时，没有驻军便每回合有 30% 概率生成 10 HP 的 Imperial Legion。\n驻军 <CrossReference name=\"Attempting coup\" href=\"#entry-legion-coup\" /> 失败死亡时，本修正随之移除。",
          "image": "icon_legionPower.png",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "id": "pr-fc-monument",
          "name": "Monument of Triumph",
          "text": "有效时，使同国 City 及有驻军的聚居地获得 Military Fervour：当其强度低于纪念碑强度时每回合 +3；尚无时创建强度 3。\n地点失去首都地位或统治者失去 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 时变为 Monument of Triumph (Ruined)，停止支援；条件恢复后重新启用。",
          "image": "icon_powerMegaprojects.png",
          "initialValue": "10",
          "modifierChange": {
            "natural": "有效、处于战争中且不属于 Alliance 时，每条上一回合攻占地点的国家记录使强度 +10，最高 100。\n废弃后的后续回合每回合 −2。",
            "external": "Monuments of Triumph 创建。"
          }
        },
        {
          "id": "pr-fc-salttheearth",
          "name": "Salted Earth",
          "text": "所在领地内的 Habitability 减少 强度 ×0.015，最低为 0；地图表现会移除森林。",
          "image": "icon_habitability.png",
          "initialValue": "200",
          "modifierChange": {
            "natural": "每回合 −1。",
            "external": "<CrossReference name=\"Salted Earth\" href=\"#entry-event-loc-saltedearth\" /> 事件选择 Nothing shall grow here 创建强度 200；已有修正则额外 +200。"
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。\n当地 Shadow 每增加 1 个百分点，<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 每回合额外 +0.01。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "True Likeness 选择 %He is someone else now. 时，所在地 +50 个百分点。"
          },
          "id": "base-shadow",
          "initialValue": ""
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。\nUnrest 为 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 提供每回合 min(Unrest/100,1) 的额外增长。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。",
            "external": "From Below 使本地与相邻人类类聚居地各 +30。\nUpheaval 清空卷入地点的 Unrest。\n年龄小于 10 的 Peasant Army 每回合吸收 min(⌊Unrest⌋×2,100)。\nDeal with Rivals 使首都 +50。\nVillikos 占领的聚居地每回合 −5。\n<CrossReference name=\"Subjugating population\" href=\"#entry-legion-subjugate\" /> 执行期间每回合 −5。\n<CrossReference name=\"Attempting coup\" href=\"#entry-legion-coup\" /> 成功后 +30。"
          },
          "id": "base-unrest",
          "initialValue": ""
        },
        {
          "name": "Military Fervour",
          "text": "提高以当地为故乡的 Human Army 最大 HP，倍率为 1 + min(强度,100)/100。\n同样用于放大 Imperial Legion 的 HP 上限。",
          "image": "./out-of-gods/unit_humanArmy.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −2。",
            "external": "Target of Conquest 被帝国夺取后，首都 +30。\n有效 Monument of Triumph 在本项强度低于纪念碑强度时每回合 +3；尚无时创建强度 3。"
          },
          "id": "base-military-fervour",
          "initialValue": ""
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。",
          "image": "./kalastrophe/agitate.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "From Above 增加当地 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 强度的整数部分。\nPower-Grab 生成 Royalist Army 时清零。\nDeal with Rivals 在目标地点 −100。\nVillikos 占领的聚居地每回合 −5。"
          },
          "id": "base-political-agitation",
          "initialValue": ""
        },
        {
          "name": "Political Instability",
          "text": "国家政局的不稳定程度。强度超过 300 时触发内战，部分贵族及其军队脱离原国家，随后强度清零。",
          "image": "./kalastrophe/politicalInstability.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "Install Imperial Ruler 在首都 +50。\nTrue Claimants 使原国家的 City 与重要地点增加 min(原国家领地数×20,150)。"
          },
          "id": "base-political-instability",
          "initialValue": ""
        },
        {
          "name": "Madness",
          "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。",
          "image": "./iastur/madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "True Likeness 选择 %He is right. 时 +50。\n带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的疯狂君主使国内地点每回合 +0.5。"
          },
          "id": "base-madness",
          "initialValue": ""
        },
        {
          "name": "Death",
          "text": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。",
          "image": "./kalastrophe/death.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −0.5。",
            "external": "Upheaval 在形成 Peasant Army 的地点增加 min(初始军队 HP/10 向下取整,30)。\nVillikos 占领的聚居地每压制一项 Unrest、Lingering Resentment 或 Political Agitation，每回合 +3。\n<CrossReference name=\"Subjugating population\" href=\"#entry-legion-subjugate\" /> 执行期间每回合 +3。"
          },
          "id": "base-death",
          "initialValue": ""
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "Conquer 与 Imperial Legion 的城市接管行动每回合 +3。\nImperial Legion 围城掠夺时 +30。\nVillikos 占领的聚居地每压制一项 Unrest、Lingering Resentment 或 Political Agitation，每回合 +0.5。\n<CrossReference name=\"Attempting coup\" href=\"#entry-legion-coup\" /> 执行期间，军队扣除损耗后仍存活则每回合 +3。"
          },
          "id": "base-devastation",
          "initialValue": ""
        },
        {
          "name": "Lingering Resentment",
          "text": "居民对统治者残酷惩罚的长期怨恨，每回合使当地 Unrest 增加 2。",
          "image": "./vinerva/unrest.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认按当地统治者的 Intrigue 衰减：每 1 点 Intrigue 使强度每回合 −1；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −2；未找到游戏内切换入口。",
            "external": "Villikos 占领的聚居地每回合 −5。\n<CrossReference name=\"Subjugating population\" href=\"#entry-legion-subjugate\" /> 执行期间每回合 −5。"
          },
          "id": "base-lingering-resentment",
          "initialValue": ""
        }
      ]
    },
{
  "id": "locations",
  "title": "地点",
  "items": [
    {
      "id": "occupied-settlement",
      "name": "Villikos 占领的聚居地",
      "text": "Empire of Villikos 接管人类类聚居地时，处决原统治者，清除继承人，并保留原地点名称、外观、人口、Shadow 和附属设施。该聚居地没有统治者或普通挑战；Defence 上限 50，每回合恢复 1。\nUnrest、Lingering Resentment、Political Agitation 每存在一项，每回合使该项强度 −5，并分别产生 Death +3、Devastation +0.5。\n\n出现方式\nEmpire of Villikos 接管人类体系聚居地时替换；保留原有兴趣点及其可执行任务，但地点自己的普通任务列表为空。"
    },
    {
      "id": "place-hook-3647343379-0",
      "name": "聚居地的 Villikos 应对",
      "text": "使用 Villikos 时加入驱逐帝国统治者的任务。\n\n对应地点 / 兴趣点\n<CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_city_prague.png\" target=\"_blank\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_farm.png\" target=\"_blank\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_elves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_major_dwarves.png\" target=\"_blank\" />、<CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\" image=\"/locations/game/loc_minor_dwarves.png\" target=\"_blank\" />",
      "baseGame": false,
      "image": "/locations/game/loc_city_prague.png"
    },
    {
      "id": "god-place-place-hook-3647343379-0--place-task-3647343379-ch-fc-oustimperialruler",
      "name": "Oust Imperial Ruler",
      "text": "刺杀带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的地方统治者。没有该特质的继承人会被设为 100% Awareness；否则创建新的完全 Aware 统治者。",
      "location": "尚未完全 Infiltrated、统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的人类类聚居地。",
      "limit": "执行者为 Alliance 的非受控英雄，Awareness 为 100%；目标不能是君主。",
      "meta": "Intrigue",
      "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
      "image": "base-brutalAssassination.png",
      "positiveTags": "无",
      "negativeTags": "无"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-location-set-fc-tower",
      "name": "Villikos 占领的聚居地",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "occupied-settlement"
          ]
        }
      ]
    },
    {
      "id": "god-place-place-hook-3647343379-0",
      "name": "聚居地的 Villikos 应对",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-3647343379-0"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-place-hook-3647343379-0--place-task-3647343379-ch-fc-oustimperialruler"
          ]
        }
      ],
      "image": "/locations/game/loc_city_prague.png"
    }
  ]
},
{
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "id": "um-fc-villikos",
          "name": "The First Claimant",
          "text": "第 390 回合在 the Elder Tomb 苏醒的可控军队。非战斗回合恢复 2 HP；在战斗中未满 HP 时，可吸收合格敌军当前 HP 的 25%，向下取整。逐个候选以 60% 概率判定，成功一个即停止，恢复不超过上限。\n敌军须属于其他非黑暗势力、不是 Imperial Legion，且吸收后仍超过 5 HP。神体防守时要求敌军 HP ≥ ⌊自身 HP/2⌋，进攻时要求敌军 HP > ⌊自身 HP/2⌋。神体死亡立即失败。",
          "stats": "HP 上限: 10 ×（1 + Empire of Villikos 领地数 + 所有 Dark Empire 领地数）；苏醒完成时 HP 补满。",
          "image": "icon_villikos.png",
          "abilities": [
            {
              "name": "Conquer",
              "text": "在其他国家的聚居地发动征服。每回合 Defence −（⌊军队 HP/5⌋+1），Devastation +3；防御归零时接管。夺取人类类聚居地后恢复 min(人口,50) HP，最高不超过上限。",
              "location": "不属于 Empire of Villikos、且由国家控制的聚居地。",
              "image": "icon_claim.png"
            }
          ]
        },
        {
          "id": "um-fc-villikosclaimant",
          "name": "True Claimant",
          "text": "True Claimants 产生的自主军队，显示名按顺序为 Second Claimant、Third Claimant 等。自动进攻与接管人类类聚居地；非战斗回合恢复 2 HP，战斗吸收规则与 The First Claimant 相同，但逐个合格敌军的成功概率为 40%。\n占领时采用 Conquer 的防御伤害与恢复规则；对非人类聚居地会选择夷平。",
          "stats": "初始 HP / HP 上限: 被转化君主原国家的领地数 ×20。",
          "image": "icon_villikosClaimant.png",
          "abilities": []
        },
        {
          "id": "um-fc-humanlegion",
          "name": "Imperial Legion",
          "text": "Imperial Legions 把当地驻军转换而来，名称使用故乡名加 Legion。攻占 City 时杀死原统治者，安插带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的新统治者，并恢复 min(人口,50) HP。\n围城地点的 Defence 不高于上限一半，且故乡的 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 统治者不足 200 Gold 时，有 30% 概率掠夺：统治者获得 ⌊50×当地 Prosperity⌋ Gold（人类类聚居地的 Prosperity 大于 0 时；其他情形为 50），当地 Devastation +30。\n若故乡统治者不再带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />，返乡待命后可发动政变；正在进攻 The First Claimant 或 True Claimant，且与其距离小于 max(1,⌊对方 HP/10⌋) 时会转投其势力。失去故乡归属或统治者时，每回合 HP −5；隶属 Empire of Villikos 时豁免该损耗。",
          "stats": "初始 HP: 继承原军队当前值；故乡有 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 时，HP 上限 = ⌊（人口 + ⌊<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />/2⌋）×（1 + min(Military Fervour,100)/100）⌋。",
          "image": "icon_legion.png",
          "abilities": [
            {
              "id": "legion-capture",
              "name": "Capturing location",
              "text": "夺取 City 时使用专门的占领行动：每回合 Defence −（⌊HP/5⌋+1），Devastation +3。成功后杀死原统治者，安插带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的统治者，并恢复 min(人口,50) HP，最高不超过上限。",
              "location": "正在攻占的敌国 City。"
            },
            {
              "id": "legion-subjugate",
              "name": "Subjugating population",
              "text": "连续 4 次处理，每次使 Unrest −5、已有 Lingering Resentment −5、Death +3；第 5 次结束行动。地点没有 Unrest、成为废墟、转为敌对领地，或当地统治者失去 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 时中止。",
              "location": "帝国军队 AI 可在 Unrest 超过 25 的所在地选择执行。"
            },
            {
              "id": "legion-coup",
              "name": "Attempting coup",
              "text": "每次先损失 10+2×已进行回合数 HP；仍存活则造成 Devastation +3，Defence −（⌊剩余 HP/5⌋+1）。防御归零时杀死原统治者，任命带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的新统治者，并使 Unrest +30。\n若军队先耗尽 HP，则死亡并移除当地 <CrossReference name=\"Imperial Legions\" href=\"#entry-pr-fc-imperiallegions\" /> 修正。",
              "location": "军队返回故乡待命，而当地统治者不再带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 时自动发动。"
            }
          ]
        },
        {
          "id": "um-fc-legitimists",
          "name": "Royalist Army",
          "text": "Power-Grab 产生的自主内战军队。战争结束后立即解散。",
          "stats": "初始 HP / HP 上限: 起义时消耗的 Political Agitation 整数值；HP 后续超过上限时，上限随之提高。",
          "image": "icon_legitimist.png",
          "abilities": []
        },
        {
          "id": "um-fc-peasantarmy",
          "name": "Peasant Army",
          "text": "Upheaval 产生的自主起义军。年龄从 1 开始，每回合增加 1；年龄小于 10 时吸收当地 Unrest，吸收量为 min(⌊Unrest⌋×2,100)，并减少同量 Unrest。\n维持兵力的阈值初始为 50，每次增加本回合吸收量；未吸收到 Unrest 时重置为 50。HP 低于新阈值时，增加 吸收量 + min(吸收量,50)。\n基础损耗为 1 + round(max(HP−阈值,0)/20)。回合开始时，若 HP 未超过上回合记录且未在战斗，先扣一次；吸收与和平损耗处理后，HP 若仍未增加，再扣一次基础损耗，年龄超过 10 时这次额外扣 ⌊(年龄−10)×1.5⌋。和平时期另扣 10+年龄 HP。",
          "stats": "初始 HP / HP 上限: 标准 Upheaval 分支为 ⌊当地原 Unrest/2⌋；后续 HP 超过上限时同步提高上限。",
          "image": "base-banditry.png",
          "abilities": []
        },
        {
          "id": "um-fc-converted",
          "name": "被 Conquest of the Soul 转化的军队",
          "text": "保留原军队名称与肖像，转投 Empire of Villikos 并自主行动。每回合损失 min(3,⌊当前 HP×0.01⌋) HP。",
          "stats": "初始 HP / HP 上限: 原军队转换时的当前 HP。",
          "abilities": []
        }
      ]
    },
{
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "id": "h-villikos",
          "name": "Holy Claims",
          "text": "",
          "tenetRange": "−1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "每座该教团 Temple 每回合使所在地点 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> +1；尚无 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 时创建强度 1 的修正。"
            }
          ]
        },
        {
          "id": "h-orcplus-villikos",
          "name": "Imperial Green",
          "text": "仅在加载 Orcs Plus 且对应 Orc Holy Order 存在时提供。",
          "tenetRange": "−1 – 2",
          "tenetLevels": [
            {
              "level": -1,
              "text": "教团所属 Orc Camp 计入帝国胜利人口：普通营地折算 15，有专业化的营地折算 40，按每个折算人口 ×250/世界人口增加胜利分。"
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
          "id": "rt-fc-assertclaim",
          "name": "Assert Claim",
          "text": "已有 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 时直接设为 100；没有时创建强度 1。",
          "location": "存在部分 Infiltration 的非黑暗国家人类类聚居地。",
          "limit": "我方可控 Agent；<CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 未满。",
          "meta": "Command",
          "statLine": "Complexity: 40\nProfile: 0\nMenace: 0\nXP: 60",
          "image": "icon_claim.png"
        },
        {
          "id": "rt-fc-bloodline",
          "name": "By Imperial Blood",
          "text": "赋予当地统治者 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />；此仪式允许作用于君主。",
          "location": "完全 Infiltrated、存在 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" /> 的非黑暗国家人类类聚居地。",
          "limit": "我方可控 Agent；统治者 Awareness 低于 100%，没有 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />。",
          "meta": "Lore",
          "statLine": "Complexity: 40\nProfile: 0\nMenace: 0\nXP: 60",
          "image": "icon_powerBlood.png"
        }
      ]
    },
{
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "id": "ch-fc-oustimperialruler",
          "name": "Oust Imperial Ruler",
          "text": "刺杀带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的地方统治者。没有该特质的继承人会被设为 100% Awareness；否则创建新的完全 Aware 统治者。",
          "location": "尚未完全 Infiltrated、统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的人类类聚居地。",
          "limit": "执行者为 Alliance 的非受控英雄，Awareness 为 100%；目标不能是君主。",
          "meta": "Intrigue",
          "statLine": "Complexity: 30\nProfile: 50\nMenace: 0\nXP: 49",
          "image": "base-brutalAssassination.png",
          "positiveTags": "无",
          "negativeTags": "无"
        }
      ]
    },
{
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "id": "act-fc-climbrank",
          "name": "Climb the Ladder",
          "text": "消耗 150 Gold，杀死同国相邻、非首都 City 的统治者，并取代其位置。",
          "location": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的地方统治者所在的小型聚居地",
          "limit": "自己不是君主；原聚居地不是 City，且没有驻军；有合格邻城，距上次执行至少 50 回合。",
          "time": "5 回合",
          "positiveTags": "Ambition、Danger",
          "negativeTags": "Cooperation、Discord",
          "image": "base-silentAssassin.png"
        },
        {
          "id": "act-fc-killrivals",
          "name": "Deal with Rivals",
          "text": "消耗 200 Gold，刺杀本国一位所在地点具有 Political Agitation 的地方统治者；首都 Unrest +50，目标地点 Political Agitation −100。",
          "location": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主所在首都",
          "limit": "未加载 Living Characters；有合格对象，距上次执行至少 50 回合。",
          "time": "5 回合",
          "positiveTags": "Danger",
          "negativeTags": "Cooperation",
          "image": "base-silentAssassin.png"
        },
        {
          "id": "act-fc-purgefamily",
          "name": "Purge Family",
          "text": "消耗 100 Gold，对同族、不带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的家族成员（有领地的统治者，或未成为单位的人物）逐一判定：随机整数 0–9 不大于 min(君主 Intrigue,5) 时杀死，否则赋予 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />。",
          "location": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主所在首都",
          "limit": "有合格家族成员，距上次执行至少 50 回合。",
          "time": "5 回合",
          "positiveTags": "Cooperation、Cruel、Combat",
          "negativeTags": "无",
          "image": "base-death.png"
        },
        {
          "id": "act-fc-replaceruler",
          "name": "Install Imperial Ruler",
          "text": "消耗 100 Gold，替换本国一座非首都 City 中不带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的统治者，新统治者带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 并喜好君主。原统治者转为游荡 Warrior，且对君主的偏好降低；首都 Political Instability +50。",
          "location": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主所在首都",
          "limit": "有可替换的地方统治者，距上次执行至少 50 回合。",
          "time": "3 回合",
          "positiveTags": "Discord、Cooperation",
          "negativeTags": "无",
          "image": "base-agitate.png"
        }
      ]
    },
{
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "id": "event-loc-saltedearth",
          "name": "Salted Earth",
          "text": "Imperial Legion 攻下已被残酷君主列为报复目标的敌国城市时，有 6% 概率弹出。该城市不能已有 <CrossReference name=\"Salted Earth\" href=\"#entry-pr-fc-salttheearth\" />；触发后清空本次报复目标记录。",
          "image": "0_salttheEarth.jpg",
          "eventOptions": [
            {
              "name": "Nothing shall grow here",
              "text": "神力 +1；摧毁当前聚居地并创建强度 200 的 <CrossReference name=\"Salted Earth\" href=\"#entry-pr-fc-salttheearth\" />。"
            },
            {
              "name": "Their feelings ease",
              "text": "无效果。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "event-p2p-villikos1",
          "name": "A Petty Imitation",
          "text": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的地方统治者与同国君主发生冲突。偶数回合、人物关系事件满足条件时，概率字段为 0.005。",
          "image": "0_event1.jpg",
          "eventOptions": [
            {
              "name": "It is humiliating.",
              "text": "双方对彼此的偏好各降低一级。"
            },
            {
              "name": "%He is not the imitator...",
              "text": "消耗 1 神力，使当前城市叛乱。",
              "condition": "当前地点不是首都，神力大于 0。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "event-person-villikos1",
          "name": "Idle Delusions",
          "text": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" />、尚未疯狂的统治者陷入统治世界的妄想。偶数回合，概率字段为 0.005。",
          "image": "0_event3.jpg",
          "eventOptions": [
            {
              "name": "But %he is constrained to one throne.",
              "text": "无效果。"
            },
            {
              "name": "It is all within reach.",
              "text": "消耗 1 神力，人物 Sanity −100。",
              "condition": "神力大于 0。"
            },
            {
              "name": "It is not %his to take.",
              "text": "人物死亡，神力 +1。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "event-person-villikos2",
          "name": "Lonely at the Top",
          "text": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主在权力顶峰感到孤立。偶数回合，概率字段为 0.005。",
          "image": "0_event2.jpg",
          "eventOptions": [
            {
              "name": "Cursed to rule alone.",
              "text": "无效果。"
            },
            {
              "name": "This is what %he always wanted.",
              "text": "消耗 1 神力，人物 Shadow 增加 50 个百分点。",
              "condition": "人物尚未完全 Enshadowed，神力大于 0。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "event-person-villikos3",
          "name": "True Likeness",
          "text": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的统治者无法认出自己的肖像。偶数回合，概率字段为 0.005。",
          "image": "0_event4.jpg",
          "eventOptions": [
            {
              "name": "Are they blind!?",
              "text": "无效果。"
            },
            {
              "name": "%He is someone else now.",
              "text": "消耗 1 神力，所在地 Shadow 增加 50 个百分点。",
              "condition": "神力大于 0。"
            },
            {
              "name": "%He is right.",
              "text": "消耗 1 神力，所在地 Madness +50。",
              "condition": "神力大于 0。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "event-person-villikos4",
          "name": "Crown Jewels",
          "text": "带 <CrossReference name=\"Imperial Blood\" href=\"#entry-t-fc-imperial\" /> 的君主取得前任的珠宝。神力恰为 0 的偶数回合，概率字段为 0.001。",
          "image": "0_event5.jpg",
          "eventOptions": [
            {
              "name": "This will do nicely.",
              "text": "神力 +1。"
            }
          ],
          "eventCategory": "other"
        }
      ]
    },
{
      "id": "mechanics",
      "title": "相关机制",
      "media": false,
      "items": [
        {
          "id": "empire-of-villikos",
          "name": "Empire of Villikos",
          "text": "苏醒时建立的黑暗帝国，以 the Elder Tomb 为首都。The First Claimant、True Claimant 和转化军队为其扩张；接管的聚居地采用专门的无统治者管理形式。\n额外胜利分 = 帝国内人类类聚居地人口 / 世界人口 ×250。领地每回合提高 <CrossReference name=\"Claim\" href=\"#entry-pr-fc-claim\" />，数量也提高 The First Claimant 的 HP 上限。"
        },
        {
          "id": "living-societies-uprisings",
          "name": "Living Societies 起义兼容",
          "text": "加载 Living Societies 后，Upheaval 和 Power-Grab 使用单独的国家生成分支。Upheaval 在枚举新国家领地时累计 Unrest，逐地点把累计值减半后作为 Peasant Army HP，因此不能把标准分支的逐地点公式直接套用到该兼容模式。"
        }
      ]
    }
],
  "relations": {
    "p-fc-claim": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "pr-fc-claim": {
      "sources": [
        {
          "name": "Claim",
          "href": "#entry-p-fc-claim"
        },
        {
          "name": "Assert Claim",
          "href": "#entry-rt-fc-assertclaim"
        },
        {
          "name": "Grim Herald",
          "href": "#entry-grim-herald"
        },
        {
          "name": "Holy Claims",
          "href": "#entry-h-villikos"
        },
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        },
        {
          "name": "Empire of Villikos",
          "href": "#entry-empire-of-villikos"
        },
        {
          "name": "True Claimant",
          "href": "#entry-um-fc-villikosclaimant"
        }
      ]
    },
    "rt-fc-assertclaim": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "grim-herald": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "h-villikos": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "t-fc-imperial": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ],
      "sources": [
        {
          "name": "Imperial Blood",
          "href": "#entry-p-fc-imperiallineage"
        },
        {
          "name": "By Imperial Blood",
          "href": "#entry-rt-fc-bloodline"
        },
        {
          "name": "Upheaval",
          "href": "#entry-p-fc-peasantuprising"
        },
        {
          "name": "Power-Grab",
          "href": "#entry-p-fc-legitimistuprising"
        },
        {
          "name": "Install Imperial Ruler",
          "href": "#entry-act-fc-replaceruler"
        },
        {
          "name": "Purge Family",
          "href": "#entry-act-fc-purgefamily"
        }
      ]
    },
    "p-fc-imperiallineage": {
      "effects": [
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        }
      ]
    },
    "rt-fc-bloodline": {
      "effects": [
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        }
      ]
    },
    "p-fc-peasantuprising": {
      "effects": [
        {
          "name": "Peasant Army",
          "href": "#entry-um-fc-peasantarmy"
        },
        {
          "name": "Peasant Lord",
          "href": "#entry-t-fc-peasantlord"
        },
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        },
        {
          "name": "Death",
          "href": "#entry-base-death"
        }
      ]
    },
    "um-fc-peasantarmy": {
      "sources": [
        {
          "name": "Upheaval",
          "href": "#entry-p-fc-peasantuprising"
        }
      ]
    },
    "p-fc-legitimistuprising": {
      "effects": [
        {
          "name": "Royalist Army",
          "href": "#entry-um-fc-legitimists"
        },
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        }
      ]
    },
    "um-fc-legitimists": {
      "sources": [
        {
          "name": "Power-Grab",
          "href": "#entry-p-fc-legitimistuprising"
        }
      ]
    },
    "p-fc-legions": {
      "effects": [
        {
          "name": "Imperial Legions",
          "href": "#entry-pr-fc-imperiallegions"
        }
      ]
    },
    "pr-fc-imperiallegions": {
      "sources": [
        {
          "name": "Imperial Legions",
          "href": "#entry-p-fc-legions"
        }
      ],
      "effects": [
        {
          "name": "Imperial Legion",
          "href": "#entry-um-fc-humanlegion"
        }
      ]
    },
    "um-fc-humanlegion": {
      "sources": [
        {
          "name": "Imperial Legions",
          "href": "#entry-pr-fc-imperiallegions"
        }
      ]
    },
    "p-fc-imperialemperors": {
      "effects": [
        {
          "name": "Target of Conquest",
          "href": "#entry-pr-fc-conquest"
        }
      ]
    },
    "pr-fc-conquest": {
      "sources": [
        {
          "name": "Imperial Conquests",
          "href": "#entry-p-fc-imperialemperors"
        }
      ],
      "effects": [
        {
          "name": "Military Fervour",
          "href": "#entry-base-military-fervour"
        }
      ]
    },
    "base-military-fervour": {
      "sources": [
        {
          "name": "Target of Conquest",
          "href": "#entry-pr-fc-conquest"
        },
        {
          "name": "Monument of Triumph",
          "href": "#entry-pr-fc-monument"
        }
      ]
    },
    "p-fc-monuments": {
      "effects": [
        {
          "name": "Monument of Triumph",
          "href": "#entry-pr-fc-monument"
        }
      ]
    },
    "pr-fc-monument": {
      "sources": [
        {
          "name": "Monuments of Triumph",
          "href": "#entry-p-fc-monuments"
        }
      ],
      "effects": [
        {
          "name": "Military Fervour",
          "href": "#entry-base-military-fervour"
        }
      ]
    },
    "p-fc-firstclaimant": {
      "effects": [
        {
          "name": "True Claimant",
          "href": "#entry-um-fc-villikosclaimant"
        },
        {
          "name": "Political Instability",
          "href": "#entry-base-political-instability"
        }
      ]
    },
    "um-fc-villikosclaimant": {
      "sources": [
        {
          "name": "True Claimants",
          "href": "#entry-p-fc-firstclaimant"
        }
      ],
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "p-fc-convertarmies": {
      "effects": [
        {
          "name": "被 Conquest of the Soul 转化的军队",
          "href": "#entry-um-fc-converted"
        }
      ]
    },
    "um-fc-converted": {
      "sources": [
        {
          "name": "Conquest of the Soul",
          "href": "#entry-p-fc-convertarmies"
        }
      ]
    },
    "event-loc-saltedearth": {
      "effects": [
        {
          "name": "Salted Earth",
          "href": "#entry-pr-fc-salttheearth"
        }
      ]
    },
    "pr-fc-salttheearth": {
      "sources": [
        {
          "name": "Salted Earth",
          "href": "#entry-event-loc-saltedearth"
        }
      ]
    },
    "p-fc-unrest": {
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-base-unrest"
        }
      ]
    },
    "base-unrest": {
      "sources": [
        {
          "name": "From Below",
          "href": "#entry-p-fc-unrest"
        },
        {
          "name": "Deal with Rivals",
          "href": "#entry-act-fc-killrivals"
        }
      ]
    },
    "p-fc-politicalagitation": {
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-base-political-agitation"
        }
      ]
    },
    "base-political-agitation": {
      "sources": [
        {
          "name": "From Above",
          "href": "#entry-p-fc-politicalagitation"
        }
      ]
    },
    "empire-of-villikos": {
      "effects": [
        {
          "name": "Claim",
          "href": "#entry-pr-fc-claim"
        }
      ]
    },
    "t-fc-peasantlord": {
      "sources": [
        {
          "name": "Upheaval",
          "href": "#entry-p-fc-peasantuprising"
        }
      ]
    },
    "act-fc-replaceruler": {
      "effects": [
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        },
        {
          "name": "Political Instability",
          "href": "#entry-base-political-instability"
        }
      ]
    },
    "act-fc-purgefamily": {
      "effects": [
        {
          "name": "Imperial Blood",
          "href": "#entry-t-fc-imperial"
        }
      ]
    },
    "event-person-villikos3": {
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-base-shadow"
        },
        {
          "name": "Madness",
          "href": "#entry-base-madness"
        }
      ]
    },
    "base-shadow": {
      "sources": [
        {
          "name": "True Likeness",
          "href": "#entry-event-person-villikos3"
        }
      ]
    },
    "base-madness": {
      "sources": [
        {
          "name": "True Likeness",
          "href": "#entry-event-person-villikos3"
        }
      ]
    },
    "base-political-instability": {
      "sources": [
        {
          "name": "True Claimants",
          "href": "#entry-p-fc-firstclaimant"
        },
        {
          "name": "Install Imperial Ruler",
          "href": "#entry-act-fc-replaceruler"
        }
      ]
    },
    "act-fc-killrivals": {
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-base-unrest"
        }
      ]
    },
    "base-death": {
      "sources": [
        {
          "name": "Upheaval",
          "href": "#entry-p-fc-peasantuprising"
        },
        {
          "name": "Villikos 占领的聚居地",
          "href": "#entry-occupied-settlement"
        }
      ]
    },
    "occupied-settlement": {
      "effects": [
        {
          "name": "Death",
          "href": "#entry-base-death"
        },
        {
          "name": "Devastation",
          "href": "#entry-base-devastation"
        }
      ]
    },
    "base-devastation": {
      "sources": [
        {
          "name": "Villikos 占领的聚居地",
          "href": "#entry-occupied-settlement"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function VillikosArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
