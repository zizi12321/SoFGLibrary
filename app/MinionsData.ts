import type { DetailItem } from "./GodArchiveTypes";

export type MinionSection = { id: string; title: string; baseGame: boolean; intro?: string; items: DetailItem[] };
export const minionSections: MinionSection[] = [
  {
    "id": "base-settlements",
    "title": "游戏本体 · 聚居地招募",
    "baseGame": true,
    "items": [
      {
        "id": "sellsword",
        "name": "Sellsword",
        "image": "/minions/game/minion_sellsword.png",
        "stats": "HP: 2 · Attack: 2 · Defence: 2 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "在人类 City 执行 Recruit Sellsword，支付 15 Gold，耗时 2 回合。"
      },
      {
        "id": "knight",
        "name": "Knight",
        "image": "/minions/game/minion_knight.png",
        "stats": "HP: 5 · Attack: 4 · Defence: 2 · Command: 2",
        "text": "无特殊能力。",
        "acquisition": "在人类 City 执行 Recruit Knight，支付 40 Gold，耗时 2 回合。"
      },
      {
        "id": "paladin",
        "name": "Paladin",
        "image": "/minions/game/minion_paladin.png",
        "stats": "HP: 7 · Attack: 5 · Defence: 4 · Command: 2",
        "text": "无特殊能力。",
        "acquisition": "在人类 City 执行 Recruit Paladin，支付 120 Gold，耗时 2 回合。当地统治者的 Shadow 必须低于 50%、Awareness 高于 90%。"
      },
      {
        "id": "elven-warbear",
        "name": "Elven Warbear",
        "image": "/minions/game/minion_elvenWarbear.png",
        "stats": "HP: 2 · Attack: 2 · Defence: 3 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "在 Elven City 执行 Recruit Elven Warbear，无 Gold 消耗，耗时 2 回合；执行者必须是 Elf。"
      },
      {
        "id": "crow",
        "name": "Crow",
        "image": "/minions/game/minion_crow.png",
        "stats": "HP: 1 · Attack: 2 · Defence: 0 · Command: 1",
        "text": "Wise：主人每回合累计获得 1.5 XP，小数部分累积后结算。\nSummon Crows：主人指挥军队作战时，在敌方施加 Murder of Crows，使敌军的杀伤倍率减少 0.2；会替换敌方当前战斗效果。",
        "acquisition": "在已渗透的 Coven of Witches 或 Witches 的 Temple 执行 Recruit Crow，支付 35 Gold，耗时 1 回合。"
      },
      {
        "id": "vermin",
        "name": "Vermin",
        "image": "/minions/game/minion_vermin.png",
        "stats": "HP: 1 · Attack: 1 · Defence: 0 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "在已渗透的 Vast Sewers 执行 Recruit Vermin，无 Gold 消耗，耗时 1 回合。\nCommand of Vermin 每逢世界回合数为 5 的倍数时，在主人空闲随从槽位召来 Vermin。"
      }
    ]
  },
  {
    "id": "base-orcs",
    "title": "游戏本体 · Orc 随从",
    "baseGame": true,
    "intro": "下列常规招募要求足够的 Command 容量。除 Goblin 外，需要营地完全渗透；Orc Upstart 不受这项渗透限制。",
    "items": [
      {
        "id": "goblin",
        "name": "Goblin",
        "image": "/minions/game/minion_goblin.png",
        "stats": "HP: 2 · Attack: 1 · Defence: 1 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "在 Orc Camp 执行 Recruit Goblin，支付 10 Gold，耗时 2 回合。"
      },
      {
        "id": "orc-warrior",
        "name": "Orc Warrior",
        "image": "/minions/game/minion_orcWarrior.png",
        "stats": "HP: 4 · Attack: 5 · Defence: 3 · Command: 2",
        "text": "无特殊能力。",
        "acquisition": "在 Orc Camp 执行 Recruit Orc Warrior，支付 30 Gold，耗时 2 回合。"
      },
      {
        "id": "orc-spelltwister",
        "name": "Orc Spelltwister",
        "image": "/minions/game/unit_magicOrc.png",
        "stats": "HP: 3 · Attack: 1 · Defence: 3 · Command: 2",
        "text": "Loremaster：主人 Lore +1。",
        "acquisition": "在 Mage Camp 执行 Recruit Orc Spelltwister，支付 75 Gold，耗时 2 回合。"
      },
      {
        "id": "goblin-infiltrator",
        "name": "Goblin Infiltrator",
        "image": "/minions/game/minion_goblinInfiltrator.png",
        "stats": "HP: 2 · Attack: 1 · Defence: 1 · Command: 2",
        "text": "Stealthy：主人 Intrigue +1、Profile −5。",
        "acquisition": "在 Menagerie 执行 Recruit Goblin Infiltrator，支付 50 Gold，耗时 2 回合。"
      },
      {
        "id": "webspinner",
        "name": "Webspinner",
        "image": "/minions/game/minion_webspinner.png",
        "stats": "HP: 3 · Attack: 2 · Defence: 2 · Command: 2",
        "text": "Webspinner：每积累 17 回合，在所在地点生成 Entangling Web。下一名正在移动或前往任务的非玩家英雄会被困 5 回合，随后该蛛网消失。",
        "acquisition": "在 Menagerie 执行 Recruit Webspinner，支付 75 Gold，耗时 2 回合。"
      },
      {
        "id": "razor-rat",
        "name": "Razor Rat",
        "image": "/minions/game/minion_razorRat.png",
        "stats": "HP: 1 · Attack: 3 · Defence: 0 · Command: 1",
        "text": "Urban Prowler：在 City 每累计停留 10 回合，使当地英雄任务的额外 Danger +1，上限为 1。",
        "acquisition": "在 Menagerie 执行 Recruit Razor Rat，支付 50 Gold，耗时 1 回合。"
      },
      {
        "id": "giggler",
        "name": "Giggler",
        "image": "/minions/game/minion_giggler.png",
        "stats": "HP: 2 · Attack: 2 · Defence: 3 · Command: 2",
        "text": "Madness Attack：每次攻击使敌方领队 Sanity −1，最低为 0；攻击被 Defence 挡住时仍生效。",
        "acquisition": "在 Menagerie 执行 Recruit Giggler，支付 35 Gold，耗时 2 回合。"
      },
      {
        "id": "changeling",
        "name": "Changeling",
        "image": "/minions/game/minion_changeling.png",
        "stats": "HP: 4 · Attack: 3 · Defence: 1 · Command: 1",
        "text": "替主人转嫁一次挑战完成时的 Menace：完成奖励大于 5 Menace 时，挑选一名合格的非 Chosen One 英雄承担整份完成 Menace，随后消耗 Changeling。寻找目标受距离与随机值影响；未找到合格英雄时不消耗。",
        "acquisition": "在 Menagerie 执行 Recruit Changeling，支付 50 Gold，耗时 2 回合。"
      }
    ]
  },
  {
    "id": "base-special",
    "title": "游戏本体 · 特殊招募与人物能力",
    "baseGame": true,
    "items": [
      {
        "id": "ogre",
        "name": "Ogre",
        "image": "/minions/game/minion_ogre.png",
        "stats": "HP: 10 · Attack: 4 · Defence: 3 · Command: 3",
        "text": "Menacing：主人 Menace +10。",
        "acquisition": "在 Wandering Ogre 所在地点执行 Conscript Ogre，要求 Command 容量至少为 3，无 Gold 消耗。\nComplexity: 50，按 Might 与 Command 推进；完成后移除当地 Wandering Ogre。"
      },
      {
        "id": "wolf",
        "name": "Wolf",
        "image": "/minions/game/minion_wolf.png",
        "stats": "HP: 2 · Attack: 2 · Defence: 2 · Command: 0",
        "text": "无特殊能力。",
        "acquisition": "The Survivor 获得 Only Companions 时，一次性补满空闲随从槽位，三只分别名为 Frost、Storm、Fang。"
      },
      {
        "id": "mister-edgar",
        "name": "Mister Edgar",
        "image": "/minions/game/minion_monkey.png",
        "stats": "HP: 1 · Attack: 3 · Defence: 3 · Command: 1",
        "text": "Flighty：撤退时不会被牺牲。\nThief：主人撤退结算时可从对手身上偷走物品或至多 50 Gold；对方没有可偷物品与 Gold 时，取得其 Personal Item。",
        "acquisition": "The Trickster 获得 Attack Monkey 时，在第一个空闲随从槽位添加 Mister Edgar。"
      },
      {
        "id": "skeleton-warrior",
        "name": "Skeleton Warrior",
        "image": "/minions/game/minion_skeleton.png",
        "stats": "HP: 5 · Attack: 3 · Defence: 0 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "执行 Death: Skeletal Servitor，要求 Death Mastery 1，消耗当地 20 Death，召唤 1 名。\nThe Baroness 的 Eternal Servitude 在家乡补满空闲随从槽位，并恢复已有 Skeleton Warrior 的 HP。\nPortable Skeleton 在战斗中向空闲或已死亡的随从槽位部署 1 名，随后消耗物品。\n探索 buried army 事件链至深度 4，选择 Just take a few along，可得到 3 名相同数值的事件版 Skeleton Warrior。"
      },
      {
        "id": "faceless-servitor",
        "name": "Faceless Servitor",
        "image": "/minions/game/minion_faceless.png",
        "stats": "HP: 8 · Attack: 2 · Defence: 4 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "执行 Death: Faceless Servitor，要求 Death Mastery 2，消耗当地 30 Death，召唤 1 名。"
      }
    ]
  },
  {
    "id": "base-events",
    "title": "游戏本体 · 事件随从",
    "baseGame": true,
    "items": [
      {
        "id": "wretched-poor",
        "name": "Wretched Poor",
        "image": "/minions/events/fog.sewer_recruit_icon.png",
        "stats": "HP: 1 · Attack: 1 · Defence: 1 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "在有 Vast Sewers 的人类地点执行挑战时，可能触发 The underclass 事件；执行者没有随从且持有超过 10 Gold，排除 The Monarch 与 The Courtier。\nPeruse the penniless：支付 25 Gold，75% 获得 3 名，25% 获得 1 名。\nOne of theirs：The Dissident 可免费获得 3 名，同时挑战进度 +20、当地 Unrest +50。"
      },
      {
        "id": "skeletal-juggernaut",
        "name": "Skeletal Juggernaut",
        "image": "/minions/events/fog.skeletal_jugger.jpg",
        "stats": "HP: 7 · Attack: 3 · Defence: 4 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "The Baroness 遇到 Skeleton Warriors 事件时，选择 Queen of the undead，有 40% 概率获得 1 名。\n事件要求当地 Death >50、不是 City 或 Town，且聚居地 Defences <15。"
      },
      {
        "id": "daughter-vass",
        "name": "Daughter: Vass",
        "image": "/minions/events/default.icon_daughterSeer.png",
        "stats": "HP: 2 · Attack: 3 · Defence: 4 · Command: 0",
        "text": "携带至少一位 Daughter 的 Agent 到有 Human Soul 的干燥地形，可进行 Summon First Daughter。Daughter 数量会增强召来的 The First Daughter；随从本身没有额外战斗特质。",
        "acquisition": "推进 The Seer 事件链，找到 Daughter Seer 后选择 The First Daughter Calls。"
      },
      {
        "id": "daughter-chathoa",
        "name": "Daughter: Chathoa",
        "image": "/minions/events/default.icon_daughter_shadow.png",
        "stats": "HP: 2 · Attack: 3 · Defence: 4 · Command: 0",
        "text": "携带至少一位 Daughter 的 Agent 到有 Human Soul 的干燥地形，可进行 Summon First Daughter。Daughter 数量会增强召来的 The First Daughter；随从本身没有额外战斗特质。",
        "acquisition": "推进 Daughter Incense 事件链；在标记的古代遗迹人类地点达到 Shadow >90% 后，选择 The First Daughter Calls。"
      },
      {
        "id": "daughter-thila",
        "name": "Daughter: Thila",
        "image": "/minions/events/default.icon_daughter_sword.png",
        "stats": "HP: 2 · Attack: 3 · Defence: 4 · Command: 0",
        "text": "携带至少一位 Daughter 的 Agent 到有 Human Soul 的干燥地形，可进行 Summon First Daughter。Daughter 数量会增强召来的 The First Daughter；随从本身没有额外战斗特质。",
        "acquisition": "推进 Daughter Sword 事件链，在 Daughterhood 事件选择 The First Daughter Calls。"
      }
    ]
  },
  {
    "id": "mod-deepones",
    "title": "Deep Ones Plus",
    "baseGame": false,
    "items": [
      {
        "id": "deep-ones-faceless-servitor",
        "name": "Faceless Servitor",
        "image": "/minions/game/minion_faceless.png",
        "stats": "HP: 8 · Attack: 2 · Defence: 4 · Command: 1",
        "text": "<CrossReference name=\"Faceless Servitor\" href=\"#entry-faceless-servitor\" /> 的本体数值与效果。",
        "acquisition": "Drowned Prophet 生成时携带 2 名。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "mod-wilds",
    "title": "Living Wilds",
    "baseGame": false,
    "items": [
      {
        "id": "spiderling",
        "name": "Spiderling",
        "image": "/minions/mod/nature.unit_minion_spiderling.png",
        "stats": "HP: 2 · Attack: 4 · Defence: 0 · Command: 1",
        "text": "Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。",
        "acquisition": "Broodmother 生成时携带 3 名；Broodmother 的 Spider Queen 特质每 5 回合补充空闲槽位。未找到玩家直接招募此随从的挑战。"
      },
      {
        "id": "sprite",
        "name": "Sprite",
        "image": "/minions/mod/nature.unit_minion_sprite.png",
        "stats": "HP: 1 · Attack: 2 · Defence: 1 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "Dryad、Fairy、Great Stag、Unicorn 分别初带 1、2、1、3 名；Bonds of Nature 每 5 回合在满足空槽与 Command 条件时补充。未找到玩家直接招募此随从的挑战。"
      },
      {
        "id": "living-wilds-wolf",
        "name": "Wolf",
        "image": "/minions/game/minion_wolf.png",
        "stats": "HP: 2 · Attack: 2 · Defence: 2 · Command: 0",
        "text": "<CrossReference name=\"Wolf\" href=\"#entry-wolf\" /> 的本体数值与效果。",
        "acquisition": "Living Wilds 的 Hermit、Lycanthrope 初始携带 3 只；Lupine Dominion 可继续补充空闲槽位。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "mod-covens",
    "title": "Covens, Curses & Curios Recast",
    "baseGame": false,
    "intro": "Aviaries 教义为 −1 时，Witches 的 Temple 提供下列两种招募。招募需要渗透该 Temple；Orc Upstart 豁免这项渗透要求。",
    "items": [
      {
        "id": "owl",
        "name": "Owl",
        "image": "/minions/mod/CovenExpansionRecast.Icon_Owl.png",
        "stats": "HP: 1 · Attack: 3 · Defence: 0 · Command: 1",
        "text": "An Eye for Sercrets：主人 Profile −5。在 Shadow ≥50% 的地点执行挑战、事件计时至少 4 回合时，有机会用特殊事件替换途中事件；概率随 Shadow 提高。可能找到物品、秘密通道，或触发能得到 <CrossReference name=\"Thunderbird\" href=\"#entry-thunderbird\" /> 的 Clutch of Eggs。",
        "acquisition": "在符合 Aviaries 条件的 Temple 执行 Recruit Owl，支付 25 Gold，耗时 1 回合。"
      },
      {
        "id": "carrier-pigeon",
        "name": "Carrier Pigeon",
        "image": "/minions/mod/CovenExpansionRecast.Icon_Pigeon.png",
        "stats": "HP: 1 · Attack: 1 · Defence: 0 · Command: 1",
        "text": "Carrier Pigeon：提供 Send Carrier Pigeon，把物品或 Gold 交给信鸽，送到另一名我方 Agent 处交易，完成后返回。送出期间离开随从栏。",
        "acquisition": "在符合 Aviaries 条件的 Temple 执行 Recruit Carrier Pigeon，支付 15 Gold，耗时 1 回合。"
      },
      {
        "id": "thunderbird",
        "name": "Thunderbird",
        "image": "/minions/game/dice.png",
        "stats": "HP: 3 · Attack: 9 · Defence: 2 · Command: 1",
        "text": "无特殊能力。\n当前版本的事件图片键不匹配，游戏会使用备用骰子图标。",
        "acquisition": "携带 <CrossReference name=\"Owl\" href=\"#entry-owl\" /> 触发 Clutch of Eggs，选择 Subjugate the Parent，消耗 1 Power 获得 1 名。"
      }
    ]
  },
  {
    "id": "mod-orcs",
    "title": "Orcs Plus",
    "baseGame": false,
    "items": [
      {
        "id": "orc-champion",
        "name": "Orc Champion",
        "image": "/minions/mod/OrcsPlus.Foreground_OrcChampion.png",
        "stats": "HP: 5 · Attack: 6 · Defence: 5 · Command: 3",
        "text": "无特殊能力。",
        "acquisition": "在已完全渗透、已经专精且没有 Temple 的 Orc Camp 执行 Build Great Hall，支付 60 Gold。完成后 Command 容量达到 3 时获得 1 名。\nRevered Elder 会自动补充其 Orc Champion 随从。"
      },
      {
        "id": "orc-corsair",
        "name": "Orc Corsair",
        "image": "/minions/mod/OrcsPlus.Foreground_OrcCorsair.png",
        "stats": "HP: 4 · Attack: 4（海岸或海洋 6） · Defence: 2（海洋 4） · Command: 2",
        "text": "在海岸或海洋地点 Attack +2，达到 6；在海洋地点另有 Defence +2，达到 4。",
        "acquisition": "在已完全渗透的 Orc Shipyard 执行 Recruit Orc Corsair，支付 30 Gold，耗时 2 回合。Orc Upstart 豁免渗透要求。"
      }
    ]
  },
  {
    "id": "mod-events",
    "title": "AAEnglishman and Mall's Event Pack - REDUX",
    "baseGame": false,
    "items": [
      {
        "id": "other",
        "name": "Other",
        "image": "/minions/events/maeRedux.icon_shadowcreature.png",
        "stats": "HP: 6 · Attack: 6 · Defence: 6 · Command: 1",
        "text": "无特殊能力。",
        "acquisition": "第 150 回合后，在 Shadow ≥30% 的地点执行挑战时，可能触发 Other Creatures。选择 A darker will 获得 1 名；要求 Lore 至少为 4，或执行者是 The Monarch。"
      }
    ]
  }
];
