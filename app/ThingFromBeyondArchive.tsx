"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "thing-from-beyond",
  "name": "The Thing From Beyond, Interdimensional Parasite",
  "number": "17",
  "theme": "outsiders-theme thing-from-beyond-theme",
  "assetDir": "out-of-gods",
  "background": "god_background.jpg",
  "portrait": "god_portrait.png",
  "flavour": "",
  "caption": "现实裂隙、魔法仪式与残存邪恶势力",
  "maxTurns": "500 回合",
  "awaken": "累计裂隙进度达到 2240",
  "panic": "75%",
  "finalAgents": "5",
  "progressLabel": "阈值",
  "unlockMethod": "裂隙每回合累积进度，达到阈值后解锁",
  "dlc": "必须要 DLC",
  "sourceMod": "Out of Gods",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.1 × 神力上限 × 难度系数。所有神力共用每回合一次的施放限制。",
  "core": [
    "开局位于 Accident Site，已有永久 Greater Rift；每份 Greater Rift 与 Lesser Rift 每回合各贡献 1 点封印进度。",
    "让 Supplicant 利用 Experiment Survivor 的 Mastery of Geomancy 与 Arcane Knowledge，或在 Vast Collection 执行 Public Study，为开启更多裂隙准备魔法等级。",
    "用 Geomancy: Borehole 消耗 Geomantic Locus，或用 Death: Deathgate 消耗 Death。引导时积累 Lesser Rift，完成时摧毁当地聚居地并留下 Greater Rift。",
    "利用 Blood Magic: Discorporation，以人物的 Personal Item 为媒介杀死目标，在其所在地留下 Lesser Rift。",
    "每回合只施放一项神力：Manifest Virus、Manifest Parasite 与 Manifest Insect 用于长期破坏，Manifest Serpent、Manifest Hound 用于处理人物威胁。",
    "世界恐慌超过 25%、50%、75% 后，Agent 上限依次提高为 3、4、5，并触发 Deep One、Sleeper Cells、Vampire 的活动。",
    "提高神力容量后，用 Manifest Replicant 补充人物，或用 Manifest Abomination 制造自主破坏军队；累计 2240 点裂隙进度即可苏醒获胜。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "八项神力在封印 0 全部列出，实际可施放范围受当前 Power 上限限制。Agent 上限取决于本局已经达到的恐慌阶段，恐慌回落后不会随之减少。",
    "playStyle": "在魔法普及、各类设施已获得额外防护或产出的世界里，通过仪式扩大现实裂隙。封印推进与世界恐慌分别控制 Power 和 Agent 容量，需要同时经营。"
  },
  "specialVictory": "打破第 8 道封印并苏醒时立即胜利。",
  "specialFailure": "Accident Site 上的 Reforge The Seal 或 Fulfil the Prophecy 被完成时，沿用本体失败判定。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": "2–5",
      "powerRecovery": "1/0.1",
      "reward": [
        "Manifest Virus",
        "Manifest Parasite",
        "Manifest Insect",
        "Manifest Serpent",
        "Manifest Bird",
        "Manifest Hound",
        "Manifest Replicant",
        "Manifest Abomination"
      ]
    },
    {
      "seal": 1,
      "progress": 40,
      "agents": "2–5",
      "powerRecovery": "2/0.2",
      "reward": []
    },
    {
      "seal": 2,
      "progress": 120,
      "agents": "2–5",
      "powerRecovery": "3/0.3",
      "reward": []
    },
    {
      "seal": 3,
      "progress": 240,
      "agents": "2–5",
      "powerRecovery": "4/0.4",
      "reward": []
    },
    {
      "seal": 4,
      "progress": 400,
      "agents": "2–5",
      "powerRecovery": "5/0.5",
      "reward": []
    },
    {
      "seal": 5,
      "progress": 600,
      "agents": "2–5",
      "powerRecovery": "6/0.6",
      "reward": []
    },
    {
      "seal": 6,
      "progress": 840,
      "agents": "2–5",
      "powerRecovery": "7/0.7",
      "reward": []
    },
    {
      "seal": 7,
      "progress": 1120,
      "agents": "2–5",
      "powerRecovery": "8/0.8",
      "reward": []
    },
    {
      "seal": 8,
      "progress": 2240,
      "agents": "2–5",
      "powerRecovery": "9/0.9",
      "reward": [
        "苏醒并立即胜利"
      ]
    }
  ],
  "powers": [
    {
      "name": "Manifest Virus",
      "seal": 0,
      "cost": 1,
      "icon": "blackForest.png",
      "effect": "在目标建立强度 1 的 Crop Blight。",
      "limit": "含 Farms 的聚居地，且尚无 Crop Blight；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Parasite",
      "seal": 0,
      "cost": 2,
      "icon": "weakenWard.png",
      "effect": "已有 Plague 时强度 +10，并把 Plague Immunity 乘以施放前 Plague/(施放前 Plague +10)。没有 Plague 时建立强度 10 的 Plague，并把已有 Plague Immunity 清零。",
      "limit": "任意聚居地；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Insect",
      "seal": 0,
      "cost": 3,
      "icon": "purpleWeb.png",
      "effect": "在目标建立强度 1 的 Droning Swarm。",
      "limit": "聚居地，且尚无 Droning Swarm；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Serpent",
      "seal": 0,
      "cost": 4,
      "icon": "serpentsCoils.png",
      "effect": "杀死人类聚居地的当前统治者，并清除其统治记录。",
      "limit": "有统治者的聚居地；本回合尚未施放其他神力。实际击杀分支针对人类类聚居地。"
    },
    {
      "name": "Manifest Bird",
      "seal": 0,
      "cost": 5,
      "icon": "murder_of_crows.png",
      "effect": "在目标建立强度 1 的 Feathered Spies，侦察完成后降低当地 Security 5。",
      "limit": "聚居地，且尚无 Feathered Spies；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Hound",
      "seal": 0,
      "cost": 6,
      "icon": "fleetingServant.png",
      "effect": "打断目标 1 回合，将 Awareness 设为 100%。英雄有随从时，击杀槽位顺序从后往前找到的第一个随从；否则造成 3 HP 伤害，可致死。",
      "limit": "存活的人物单位，当地没有正在保护它的护卫；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Replicant",
      "seal": 0,
      "cost": 7,
      "icon": "agent_shadow.png",
      "effect": "在目标创建 Replicant，占用 Agent 名额但不消耗招募点。",
      "limit": "任意地点，存在空余 Agent 名额；本回合尚未施放其他神力。"
    },
    {
      "name": "Manifest Abomination",
      "seal": 0,
      "cost": 8,
      "icon": "lashTrap.png",
      "effect": "在目标创建 HP 40 的 Abomination。",
      "limit": "任意地点；本回合尚未施放其他神力。"
    }
  ],
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Uncanny",
          "text": "Replicant 每回合 Profile +1，并拥有 Geomancy: Borehole、Death: Deathgate、Blood Magic: Discorporation。"
        },
        {
          "name": "Natural Weapons",
          "text": "Might +3。"
        },
        {
          "name": "Pheromones",
          "text": "Intrigue +2，Command +2。"
        },
        {
          "name": "Facial Plasticity",
          "text": "赋予 Remodelling。"
        },
        {
          "name": "The Hunger",
          "baseGame": true,
          "text": "强度初始为 0，每回合 +3，赋予 Feed。Vampire 的 AI 在强度至少 50 时优先在合适地点觅食，超过 100 时寻找低 Shadow 的人类聚居地。"
        },
        {
          "name": "Command of Vermin",
          "baseGame": true,
          "text": "每逢 5 的倍数回合，在第一个空随从槽位补充一只 Vermin。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Greater Rift",
          "text": "每份裂隙每回合为封印进度贡献 1。永久保留，地点沦为废墟后仍存在。",
          "image": "wastingSoul.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Lesser Rift",
          "text": "每份裂隙每回合为封印进度贡献 1。地点沦为废墟后仍存在。",
          "image": "wastingSoul.png",
          "initialValue": "由创建方式决定：引导仪式通常为施法者 Lore；Blood Magic: Discorporation 为 50。",
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "Geomancy: Borehole 引导时，每回合增加施法者 Lore。\nDeath: Deathgate 引导时，对强度低于 121 的现存裂隙增加施法者 Lore；没有合适裂隙时新建一份。\nBlood Magic: Discorporation 创建一份强度 50 的裂隙。\n两种引导仪式完成时移除当地第一份 Lesser Rift。"
          }
        },
        {
          "name": "Crop Blight",
          "text": "食物产出乘数＝1 − 强度 ×0.005，强度稳定到 100 时产出减半。",
          "image": "giftAccepted.png",
          "initialValue": "1",
          "modifierChange": {
            "natural": "强度低于 100 时，每回合增加当前强度的 50%；高于 100 时，在修正结算中回落到 100。",
            "external": "Manifest Virus 创建。"
          }
        },
        {
          "name": "Droning Swarm",
          "text": "当地 Madness 低于 125 时，每回合增加当前虫群强度/150；当地尚无 Madness 时先建立一份强度 1 的 Madness。",
          "image": "insect_homingInstinct.png",
          "initialValue": "1",
          "modifierChange": {
            "natural": "强度低于 100 时，每回合增加当前强度的 50%；高于 100 时在结算中回落到 100。",
            "external": "Manifest Insect 创建。"
          }
        },
        {
          "name": "Feathered Spies",
          "text": "侦察状态完成后，持续使当地 Security −5。",
          "image": "minion_crow.png",
          "initialValue": "1",
          "modifierChange": {
            "natural": "强度不高于 99 时每回合 +5；下一次检查到强度超过 100 时，将其设为 100，并开启 Security −5 的效果。",
            "external": "Manifest Bird 创建。"
          }
        },
        {
          "name": "Burial Rites",
          "text": "当地已有 Death 时，每回合额外减少 0.5；当地存在被亵渎的 Holy Site 时改为每回合增加 0.5。开局放置于含 Catacombs 的地点。",
          "image": "secretsOfDeath.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Pilgrims",
          "text": "开局放置于 Holy Site 所在地点，并额外建立 Ward。未被亵渎时，为强度低于 100 的现存 Ward 每回合 +3；被亵渎后改为同样补充现存 Well of Shadows。",
          "image": "temple.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Visitor Logs",
          "text": "Security +1。开局放置于含城市中心的地点。",
          "image": "gridlock.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Pervasive Mutations",
          "text": "开局放置于 Docks 所在地点，提供 Trawling。每当当地统治者更换，会使新统治者对 Deep Ones 的偏好降低一档。",
          "image": "unit_tentacle.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Soil Enrichment",
          "text": "食物产出乘数为 1.5。开局放置于 Farms 所在地点。",
          "image": "give.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Liquid Stone",
          "text": "开局放置于 Fort 所在地点。当现有 Defence 高于上限的 25% 且尚未满时，每回合恢复 0.02 Defence。",
          "image": "geomanticSupport.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Miracles",
          "text": "开局放置于普通 Temple 与宗教首都所在地点；当地每个 Temple 每回合给所属宗教增加 1 储备，宗教首都设施增加 2 储备。",
          "image": "basicPrayer.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Curses",
          "text": "开局放置于女巫教团的 Temple 所在地点；当地每个 Temple 每回合给所属宗教增加 1 储备。",
          "image": "agony.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Vast Collection",
          "text": "开局放置于 Library 所在地点，提供 Public Study。",
          "image": "library.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Transmutation",
          "text": "当地统治者每回合获得 1 Gold。开局放置于 Market 所在地点。",
          "image": "mammonsInfluence.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Alchemical Waste",
          "text": "开局放置于 Sewers 所在地点。使相关 Sewers 渗透、Start Plague、Recruit Vermin 的额外 Danger 分别至少为 5、7、2。\n我方人物正在当地执行这三种行动之一时，每回合独立有 10% 概率发生事故：优先击杀最后一个非空槽位的随从，没有随从则损失 1 HP，可致死。",
          "image": "ophanimRootOutDissent.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Lingering Corruption",
          "text": "开局放置于 Witch Coven 与 Ancient Ruins 所在地点，并把当地 Shadow 设为 25%。之后当地 Shadow 低于 25% 时，每回合增加 1 个百分点。",
          "image": "eternitySleep.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Decorative Crystals",
          "text": "开局放置于 Elven City。代码只按当地 Shadow 消耗水晶自身的强度；未找到对应扣减当地 Shadow 的语句，因此页面不将其列为净化来源。",
          "image": "i_elfstone.png",
          "initialValue": "300",
          "modifierChange": {
            "natural": "每回合减少当地 Shadow 的百分点数，最多扣至 0。",
            "external": ""
          }
        },
        {
          "name": "Madness",
          "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。",
          "image": "./iastur/madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "Droning Swarm 在当地 Madness 低于 125 时，每回合增加虫群强度/150；没有该修正时创建强度 1。\nMalign Catch 在当地 Madness 低于 150 时，每回合 +1。\nDeep One Cult 在当地 Madness 低于 Cult 强度 −100 时，每回合 +1.5。"
          }
        },
        {
          "name": "Shadow",
          "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。",
          "image": "./ophanim/power-shadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
            "external": "开局将 Witch Coven 与 Ancient Ruins 的地点 Shadow 设为 25%。\nLingering Corruption 在 Shadow 低于 25% 时每回合 +1 个百分点。\nSleeper Cells 出现时将所在地 Shadow 至少提高至 25%，之后通过其仪式继续侵蚀。\nMalign Catch 每回合 +0.15 个百分点。\nDeep One Cult 强度超过 100 时，每回合增加 Cult 强度/1000 个百分点。\nFeed 完成时使当地 Shadow +50 个百分点，最高 100%。"
          }
        },
        {
          "name": "Death",
          "text": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。",
          "image": "./kalastrophe/death.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −0.5。",
            "external": "Burial Rites 通常每回合额外 −0.5；当地有被亵渎的 Holy Site 时改为 +0.5。\nDeath: Deathgate 引导时，每回合消耗施法者 Lore；完成时移除当地第一份 Death。\nPlague 在强度不高于 100 时每回合 +1，超过 100 时每回合 +2。"
          }
        },
        {
          "name": "Geomantic Locus",
          "text": "Geomancy 魔法的能量汇聚点，提供多种改变地形、支援或攻击的法术；强度会影响相关法术的威力。地点成为废墟后仍保留，强度归零时也保留。",
          "image": "./kalastrophe/geomanticLocus.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "强度低于 100 时每回合 +1；达到或超过 100 后停止自然积累。",
            "external": "Geomancy: Borehole 引导时每回合消耗 Lore/2，完成时移除当地第一份 Geomantic Locus。"
          }
        },
        {
          "name": "Ward",
          "text": "抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。",
          "image": "./kalastrophe/driveBackShadow.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "开局每处 Holy Site 新建强度 100 的 Ward。\n未被亵渎的 Holy Site 上，Pilgrims 对低于 100 的现存 Ward 每回合 +3。"
          }
        },
        {
          "name": "Well of Shadows",
          "text": "使 Shadow 向相邻低 Shadow 地点额外传播。传播量随两地 Shadow 差值增大，并受接收地点的 Ward 抑制；地点成为废墟后仍保留。",
          "image": "./out-of-gods/wellOfShadows.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "被亵渎的 Holy Site 上，Pilgrims 对低于 100 的现存 Well of Shadows 每回合 +3。"
          }
        },
        {
          "name": "Plague",
          "text": "疾病降低 Prosperity，每点强度造成 −0.003。强度不高于 100 时，累计每回合 强度/450 人死亡并增加 1 Death；超过 100 时改为 强度/300 人和 2 Death。整数死亡数结算后保留小数余量。达到 300 时摧毁聚居地。\n每回合增加 ⌊强度/100⌋+1 的 Unrest。超过传播门槛后，向疾病强度低于自身一半的相邻人类聚居地每回合传播 1；Quarantine 提高传播门槛。",
          "image": "./out-of-gods/plague.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "默认难度下每回合强度 +2。",
            "external": "Manifest Parasite 创建强度 10，已有时 +10。"
          }
        },
        {
          "name": "Plague Immunity",
          "text": "每有 50 点强度，每回合使当地 Plague 减少 1 点，计算时向下取整。",
          "image": "./cordyceps/plague-immunity.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "Manifest Parasite 对既有 Plague 施放时，强度乘以施放前 Plague/(施放前 Plague +10)；新建 Plague 时清零。\n有 Plague 时，默认每回合增加统治者 Lore ×1.5。"
          }
        },
        {
          "name": "Deep One Cult",
          "text": "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n在人类聚居地达到 300 时，将其转为 Deep One Sanctum；70% 人口经 Sanctum 转送至深海城市，统治者转为自主 Deep One。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。",
          "image": "./kalastrophe/deepOnes.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，正常游戏中每回合强度 +1。",
            "external": "Deep One 自主繁殖产生并经营该修正。"
          }
        },
        {
          "name": "Malign Catch",
          "text": "每回合使当地 Shadow 增加 0.15 个百分点，最高 100%；Madness 低于 150 时每回合增加 1。\n同样在 Madness 低于 150 时，按 (强度 −100)/0.0075 累积精神侵蚀；累积超过 1 后归零，并使当地统治者 Sanity −1。",
          "image": "./out-of-gods/malignCatch.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "Trawling 完成时把强度设为 −1，随后移除。"
          }
        },
        {
          "name": "Arcane Fortress",
          "text": "保护 Accident Site，吸收敌对法术的部分伤害；英雄更愿意在受到保护的地点引导终极任务。",
          "image": "./iastur/arcane-fortress.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "每回合强度 −2。",
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
          "name": "Accident Site",
          "image": "loc_minor_ruins.png",
          "text": "替代初始 the Elder Tomb，地点 Shadow 设为 0，并放置一份 Greater Rift。提供 Reforge The Seal、Fulfil the Prophecy 与本体 Arcane Fortress 法术；普通摧毁回调为空。"
        }
      ]
    },
    {
      "id": "items",
      "title": "物品",
      "items": [
        {
          "name": "Personal Item",
          "image": "i_personalItem.png",
          "baseGame": true,
          "text": "绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。"
        }
      ]
    },
    {
      "id": "minions",
      "title": "随从",
      "items": [
        {
          "name": "Vermin",
          "image": "minion_vermin.png",
          "baseGame": true,
          "stats": "HP: 1 / Attack: 1 / Defence: 0 / Command: 1",
          "text": "Command of Vermin 周期性生成的本体随从。"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Replicant",
          "image": "agent_shadow.png",
          "stats": "Might: 1+3 / Lore: 1 / Intrigue: 1+2 / Command: 1+2 / HP: 5",
          "text": "Manifest Replicant 创建的可控人物。基础四维均为 1，加成来自 Natural Weapons 与 Pheromones。实际人物肖像从男性肖像库随机选取；这里使用该神力的原始图标。",
          "abilities": [
            {
              "name": "Uncanny",
              "id": "replicant-uncanny",
              "text": "每回合 Profile +1，附带三种开裂隙仪式。"
            },
            {
              "name": "Facial Plasticity",
              "id": "replicant-facial-plasticity",
              "text": "可执行 Remodelling，将 Profile 重设为最低值并随机更换肖像。"
            }
          ]
        },
        {
          "name": "Deep One",
          "image": "evil_deepOne.png",
          "stats": "Might: 4–6 / Lore: 1–3 / Intrigue: 1–3 / Command: 1–3 / HP: 5",
          "text": "世界恐慌首次超过 25% 后，在非地下海洋地点逐个进行每回合 5% 概率检查，总共最多出现 3 个。自主前往沿海聚居地建立 Deep One Cult，并帮助已有教团掩饰活动。其创建时 Might 比随机人物基础值增加 3。"
        },
        {
          "name": "Sleeper Cells",
          "image": "agent_supplicantSnake.png",
          "stats": "Might: 3 / Lore: 3 / Intrigue: 1 / Command: 1 / HP: 3",
          "text": "世界恐慌首次超过 50% 后，在非地下聚居地逐个进行每回合 10% 概率检查，总共最多出现 10 个。出现时将所在地 Shadow 至少提高到 25%；随后自主寻找未完全侵蚀的人类聚居地执行黑暗传播仪式。"
        },
        {
          "name": "Vampire",
          "stats": "Might: 1–3 / Lore: 至少 4 / Intrigue: 1–3 / Command: 1–3 / HP: 至少 6",
          "text": "世界恐慌首次超过 75% 后，最多在两个非地下、含城市中心的人类聚居地爆发。每次杀死当地现有单位、摧毁聚居地，再生成 3 名 Vampire 与一支 Ravenous Dead。\n具备 The Hunger、Mastery of Death 1 与 Command of Vermin；自主觅食、休息和传播 Shadow。头像沿用新建人物的肖像，没有固定的专属头像。",
          "abilities": [
            {
              "name": "The Hunger",
              "id": "vampire-hunger",
              "text": "强度每回合 +3，通过 Feed 觅食。",
              "baseGame": true
            },
            {
              "name": "Command of Vermin",
              "id": "vampire-vermin",
              "text": "每逢 5 的倍数回合补充一只 Vermin，须有空槽位。",
              "baseGame": true
            },
            {
              "name": "Feed",
              "text": "将 The Hunger 强度清零并恢复满 HP；个人与地点 Shadow 各增加 50 个百分点，最高 100%；人物 Menace +8。",
              "image": "theHunger.png",
              "location": "人类聚居地",
              "statLine": "Complexity: 1 / Profile: 10 / Menace: 0 / XP: 3",
              "baseGame": true,
              "limit": "自主人物，The Hunger 大于 0；地点 Shadow 已为 100% 时，还要求饥饿强度至少 150。"
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
          "name": "Public Study",
          "text": "提高 Arcane Knowledge 1 级；不消耗地点的 Arcane Secret。玩家控制的人物与法师英雄均可执行。",
          "image": "fascinate.png",
          "location": "Vast Collection",
          "statLine": "Complexity: 100 / Profile: 70 / Menace: 0 / XP: 121"
        },
        {
          "name": "Remodelling",
          "text": "将 Profile 设为 0，再受人物最低 Profile 限制；Replicant 随机更换男性肖像。",
          "image": "tauntingLure.png",
          "location": "拥有 Facial Plasticity 的人物当前位置",
          "statLine": "Complexity: 1 / Profile: 0 / Menace: 0 / XP: 3"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Reforge The Seal",
          "text": "完成后使玩家失败。引导风险为 50。",
          "image": "reforgeTheSeal.png",
          "location": "Accident Site",
          "statLine": "Complexity: 170 / Profile: 1000 / Menace: 0 / XP: 180",
          "baseGame": true,
          "positiveTags": "Co-Operation",
          "negativeTags": "无",
          "limit": "法师英雄，个人 Awareness 超过 50%；世界恐慌至少 75%，游戏尚未结束。"
        },
        {
          "name": "Fulfil the Prophecy",
          "text": "Chosen One 完成后使玩家失败。引导风险为 50。",
          "image": "theProphecy.png",
          "location": "Accident Site",
          "statLine": "Complexity: 50 / Profile: 1000 / Menace: 0 / XP: 72",
          "baseGame": true,
          "positiveTags": "Ambition",
          "negativeTags": "无",
          "limit": "仅 Chosen One，世界恐慌至少 80%；距上次终极任务完成超过 40 回合、距上次尝试超过 27 回合。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "Trawling",
          "image": "deepOnes.png",
          "location": "同时存在 Pervasive Mutations 与 Malign Catch 的人类聚居地",
          "time": "10 回合",
          "positiveTags": "无",
          "negativeTags": "Deep Ones、Madness、Shadow",
          "text": "花费统治者 10 Gold，将当地 Malign Catch 的强度设为 −1，随后移除。执行倾向随当地 Madness 强度增加。",
          "limit": "统治者至少拥有 10 Gold。"
        }
      ]
    },
    {
      "id": "spells",
      "title": "法术",
      "items": [
        {
          "name": "Geomancy: Borehole",
          "text": "引导时每回合消耗 Geomantic Locus 的 Lore/2 强度，并给 Lesser Rift 增加 Lore 强度。完成时摧毁聚居地，移除第一份 Geomantic Locus、Human Outpost 和 Lesser Rift，创建永久 Greater Rift。\n爆炸依次对施法者以外的当地单位造成 ⌊最大 HP/2⌋ 伤害；循环遇到第一个因此死亡的单位后停止。引导风险随已达到的恐慌阶段为 0、50、120、160。",
          "image": "dangerInTheDark.png",
          "location": "施法者当前的 Geomantic Locus",
          "statLine": "Complexity: 150 / Profile: 10 / Menace: 40 / XP: 164",
          "limit": "Mastery of Geomancy 至少 2，Geomantic Locus 强度超过 1；目标检查还会拒绝先被枚举到的 Greater Rift。施法过程中需要持续供能。"
        },
        {
          "name": "Death: Deathgate",
          "text": "引导时每回合消耗 Lore 点 Death，并给强度低于 121 的 Lesser Rift 增加 Lore；没有合适裂隙时创建一份。完成时摧毁聚居地，移除当地第一份 Death、Human Outpost 和 Lesser Rift，创建永久 Greater Rift。\n爆炸的单位伤害及遇到首个死亡即停止的行为与 Geomancy: Borehole 相同。引导风险在初始、恐慌超过 25%、超过 50% 的阶段分别为 50、120、160。",
          "image": "harvest.png",
          "location": "施法者当前存在 Death 的地点",
          "statLine": "Complexity: 150 / Profile: 10 / Menace: 40 / XP: 164",
          "limit": "Mastery of Death 至少 2，Death 强度超过 1；完整施法需要持续供能。"
        },
        {
          "name": "Blood Magic: Discorporation",
          "text": "消耗物品栏中第一个有效目标的 Personal Item，杀死对应人物，在死者当前位置新增强度 50 的 Lesser Rift。",
          "image": "brutalAssassination.png",
          "location": "Greater Rift",
          "statLine": "Complexity: 75 / Profile: 5 / Menace: 20 / XP: 97",
          "limit": "Mastery of Blood 至少 2；持有某个存活人物单位的 Personal Item，排除 Chosen One。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Abomination",
          "image": "dragon.png",
          "stats": "HP: 40 / 最大 HP: 40；固定值。",
          "text": "不受直接控制的游荡军队，无视和平状态摧毁当前聚居地。当前地点没有可摧毁目标时，寻找最近的聚居地，寻路目标排除 Accident Site 与 City Ruins。不会因失去所属领土而自动解散。"
        },
        {
          "name": "Ravenous Dead",
          "image": "unit_ravenousDead.png",
          "baseGame": true,
          "stats": "初始 HP 与最大 HP＝爆发地点被摧毁前的人口。",
          "text": "Vampire 爆发时产生的本体自主亡灵军队。摧毁聚居地时吸收人口增长；最大 HP 超过 200 时分裂为两支。未在摧毁有人口的地点时，最大 HP 每回合 −2，并把当前 HP 压至新的上限。"
        }
      ]
    }
  ],
  "relations": {
    "Manifest Virus": {
      "effects": [
        {
          "name": "Crop Blight",
          "href": "#entry-crop-blight"
        }
      ]
    },
    "Crop Blight": {
      "sources": [
        {
          "name": "Manifest Virus",
          "href": "#entry-manifest-virus"
        }
      ]
    },
    "Manifest Parasite": {
      "effects": [
        {
          "name": "Plague",
          "href": "#entry-plague"
        },
        {
          "name": "Plague Immunity",
          "href": "#entry-plague-immunity"
        }
      ]
    },
    "Plague": {
      "sources": [
        {
          "name": "Manifest Parasite",
          "href": "#entry-manifest-parasite"
        }
      ]
    },
    "Plague Immunity": {
      "sources": [
        {
          "name": "Manifest Parasite",
          "href": "#entry-manifest-parasite"
        }
      ]
    },
    "Manifest Insect": {
      "effects": [
        {
          "name": "Droning Swarm",
          "href": "#entry-droning-swarm"
        }
      ]
    },
    "Droning Swarm": {
      "sources": [
        {
          "name": "Manifest Insect",
          "href": "#entry-manifest-insect"
        }
      ],
      "effects": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    },
    "Madness": {
      "sources": [
        {
          "name": "Droning Swarm",
          "href": "#entry-droning-swarm"
        }
      ]
    },
    "Manifest Bird": {
      "effects": [
        {
          "name": "Feathered Spies",
          "href": "#entry-feathered-spies"
        }
      ]
    },
    "Feathered Spies": {
      "sources": [
        {
          "name": "Manifest Bird",
          "href": "#entry-manifest-bird"
        }
      ]
    },
    "Manifest Replicant": {
      "effects": [
        {
          "name": "Replicant",
          "href": "#entry-replicant"
        }
      ]
    },
    "Replicant": {
      "sources": [
        {
          "name": "Manifest Replicant",
          "href": "#entry-manifest-replicant"
        }
      ]
    },
    "Manifest Abomination": {
      "effects": [
        {
          "name": "Abomination",
          "href": "#entry-abomination"
        }
      ]
    },
    "Abomination": {
      "sources": [
        {
          "name": "Manifest Abomination",
          "href": "#entry-manifest-abomination"
        }
      ]
    },
    "Accident Site": {
      "effects": [
        {
          "name": "Greater Rift",
          "href": "#entry-greater-rift"
        }
      ]
    },
    "Greater Rift": {
      "sources": [
        {
          "name": "Accident Site",
          "href": "#entry-accident-site"
        },
        {
          "name": "Geomancy: Borehole",
          "href": "#entry-geomancy-borehole"
        },
        {
          "name": "Death: Deathgate",
          "href": "#entry-death-deathgate"
        }
      ]
    },
    "Geomancy: Borehole": {
      "effects": [
        {
          "name": "Greater Rift",
          "href": "#entry-greater-rift"
        },
        {
          "name": "Lesser Rift",
          "href": "#entry-lesser-rift"
        }
      ]
    },
    "Death: Deathgate": {
      "effects": [
        {
          "name": "Greater Rift",
          "href": "#entry-greater-rift"
        },
        {
          "name": "Lesser Rift",
          "href": "#entry-lesser-rift"
        }
      ]
    },
    "Lesser Rift": {
      "sources": [
        {
          "name": "Geomancy: Borehole",
          "href": "#entry-geomancy-borehole"
        },
        {
          "name": "Death: Deathgate",
          "href": "#entry-death-deathgate"
        },
        {
          "name": "Blood Magic: Discorporation",
          "href": "#entry-blood-magic-discorporation"
        }
      ]
    },
    "Blood Magic: Discorporation": {
      "effects": [
        {
          "name": "Lesser Rift",
          "href": "#entry-lesser-rift"
        }
      ],
      "sources": [
        {
          "name": "Personal Item",
          "href": "#entry-personal-item"
        }
      ]
    },
    "Vast Collection": {
      "effects": [
        {
          "name": "Public Study",
          "href": "#entry-public-study"
        }
      ]
    },
    "Public Study": {
      "sources": [
        {
          "name": "Vast Collection",
          "href": "#entry-vast-collection"
        }
      ]
    },
    "Facial Plasticity": {
      "effects": [
        {
          "name": "Remodelling",
          "href": "#entry-remodelling"
        }
      ]
    },
    "Remodelling": {
      "sources": [
        {
          "name": "Facial Plasticity",
          "href": "#entry-facial-plasticity"
        }
      ]
    },
    "Pervasive Mutations": {
      "effects": [
        {
          "name": "Trawling",
          "href": "#entry-trawling"
        }
      ]
    },
    "Trawling": {
      "sources": [
        {
          "name": "Pervasive Mutations",
          "href": "#entry-pervasive-mutations"
        }
      ],
      "effects": [
        {
          "name": "Malign Catch",
          "href": "#entry-malign-catch"
        }
      ]
    },
    "Malign Catch": {
      "sources": [
        {
          "name": "Trawling",
          "href": "#entry-trawling"
        }
      ]
    },
    "Burial Rites": {
      "effects": [
        {
          "name": "Death",
          "href": "#entry-death"
        }
      ]
    },
    "Death": {
      "sources": [
        {
          "name": "Burial Rites",
          "href": "#entry-burial-rites"
        }
      ]
    },
    "Pilgrims": {
      "effects": [
        {
          "name": "Ward",
          "href": "#entry-ward"
        },
        {
          "name": "Well of Shadows",
          "href": "#entry-well-of-shadows"
        }
      ]
    },
    "Ward": {
      "sources": [
        {
          "name": "Pilgrims",
          "href": "#entry-pilgrims"
        }
      ]
    },
    "Well of Shadows": {
      "sources": [
        {
          "name": "Pilgrims",
          "href": "#entry-pilgrims"
        }
      ]
    },
    "Lingering Corruption": {
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "Shadow": {
      "sources": [
        {
          "name": "Lingering Corruption",
          "href": "#entry-lingering-corruption"
        },
        {
          "name": "Feed",
          "href": "#entry-feed"
        }
      ]
    },
    "Deep One": {
      "effects": [
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ]
    },
    "Deep One Cult": {
      "sources": [
        {
          "name": "Deep One",
          "href": "#entry-deep-one"
        }
      ]
    },
    "Vampire": {
      "effects": [
        {
          "name": "Ravenous Dead",
          "href": "#entry-ravenous-dead"
        }
      ]
    },
    "Ravenous Dead": {
      "sources": [
        {
          "name": "Vampire",
          "href": "#entry-vampire"
        }
      ]
    },
    "Command of Vermin": {
      "effects": [
        {
          "name": "Vermin",
          "href": "#entry-vermin"
        }
      ]
    },
    "Vermin": {
      "sources": [
        {
          "name": "Command of Vermin",
          "href": "#entry-command-of-vermin"
        }
      ]
    },
    "Feed": {
      "effects": [
        {
          "name": "Shadow",
          "href": "#entry-shadow"
        }
      ]
    },
    "Personal Item": {
      "effects": [
        {
          "name": "Blood Magic: Discorporation",
          "href": "#entry-blood-magic-discorporation"
        }
      ]
    }
  },
  "heroMetric": {
    "value": "2240",
    "label": "裂隙进度"
  },
  "initialAgents": "2",
  "supplicant": {
    "image": "agent_warlock.png",
    "stats": "Might: 1 / Lore: 3 / Intrigue: 2 / Command: 2 / HP: 5",
    "abilities": [
      {
        "name": "Experiment Survivor",
        "text": "获得 Mastery of Geomancy 1、Arcane Knowledge 1，以及 Geomancy: Borehole、Death: Deathgate、Blood Magic: Discorporation 三项仪式。取得该特质时，对每个未受控制的人物独立进行 1/3 概率检查；若其已有 Mastery of Geomancy，将其等级设为 2。"
      },
      {
        "name": "Mastery of Geomancy",
        "text": "开局等级 1，开放对应等级的 Geomancy 魔法。",
        "baseGame": true
      },
      {
        "name": "Arcane Knowledge",
        "text": "开局等级 1，可用来提高魔法学派的掌握等级。",
        "baseGame": true
      }
    ]
  }
};

const preparedConfig = prepareGodConfig(config);
export default function ThingFromBeyondArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
