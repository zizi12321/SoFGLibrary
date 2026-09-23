import type { ArmyRecord } from "./ArmyTypes";
import type { DetailItem } from "./GodArchiveTypes";

export const armies: ArmyRecord[] = [
  {
    "id": "human-army",
    "name": "Army of [Home]",
    "baseGame": true,
    "group": "人类诸国",
    "source": "游戏本体",
    "faction": "人类诸国",
    "image": "/armies/game/unit_humanArmy.png",
    "hp": "Raise Army 新募军队的当前 HP 为 5；地图生成的军队按计算兵力配置；最大 HP 每回合按本营人口与 Prosperity 重算：⌊人口 × Prosperity⌋。\nAlliance 军队再乘 1 + 0.25 × 难度增长系数并向下取整；本营 Military Fervor 再乘 1 + min(100, 强度) / 100 并向下取整。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "地图生成时配置，或由聚居地统治者完成 Raise Army 创建；本营负责供养军队。",
    "behavior": "由所属国家控制。会拦截敌军，并按战争类型占领或摧毁敌方聚居地；当前 HP 低于上限 30% 时优先回营补充兵力。 本营易手或不再是人类体系聚居地时解散。",
    "skills": [
      {
        "id": "human-army-recruit",
        "name": "Recruit",
        "text": "在本营执行 Recruit，持续 5 回合后恢复 ⌊最大 HP / 5⌋，不超过上限。",
        "baseGame": true
      },
      {
        "id": "human-army-patrol",
        "name": "Patrol",
        "text": "军队闲置、所属国家为普通非黑暗国家、本营仍属本国且 Shadow 低于 50%、驻地为未完全渗透的普通人类聚居地时，对当地正在执行挑战、Menace ≥ 40 且 Profile ≥ 30 的人物每回合造成 1 HP 伤害。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "elven-army",
    "name": "Army of [Home] — Elven",
    "baseGame": true,
    "group": "精灵",
    "source": "游戏本体",
    "faction": "精灵",
    "image": "/armies/game/unit_elfArmy.png",
    "hp": "Raise Army 新募军队的当前 HP 为 5；地图生成的军队按计算兵力配置；最大 HP 每回合按本营人口与 Prosperity 重算：⌊人口 × Prosperity⌋。\nAlliance 军队再乘 1 + 0.25 × 难度增长系数并向下取整；本营 Military Fervor 再乘 1 + min(100, 强度) / 100 并向下取整。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "由 Elven City 供养，使用通用常备军机制。",
    "behavior": "由所属国家控制。会拦截敌军，并按战争类型占领或摧毁敌方聚居地；当前 HP 低于上限 30% 时优先回营补充兵力。 本营易手或不再是人类体系聚居地时解散。",
    "skills": [
      {
        "id": "elven-army-recruit",
        "name": "Recruit",
        "text": "在本营执行 Recruit，持续 5 回合后恢复 ⌊最大 HP / 5⌋，不超过上限。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "dwarven-army",
    "name": "Army of [Home] — Dwarven",
    "baseGame": true,
    "group": "矮人",
    "source": "游戏本体",
    "faction": "矮人",
    "image": "/armies/game/unit_dwarfArmy.png",
    "hp": "Raise Army 新募军队的当前 HP 为 5；地图生成的军队按计算兵力配置；最大 HP 每回合按本营人口与 Prosperity 重算：⌊人口 × Prosperity⌋。\nAlliance 军队再乘 1 + 0.25 × 难度增长系数并向下取整；本营 Military Fervor 再乘 1 + min(100, 强度) / 100 并向下取整。\nDwarven City 供养的军队，在上述计算后将最大 HP 翻倍。\n地图生成阶段的计算返回值另加 15，回合重算则只保留翻倍后的上限；这 15 点不作为常驻上限加成。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "由 Dwarven City 供养，使用通用常备军机制。",
    "behavior": "由所属国家控制。会拦截敌军，并按战争类型占领或摧毁敌方聚居地；当前 HP 低于上限 30% 时优先回营补充兵力。 本营易手或不再是人类体系聚居地时解散。",
    "skills": [
      {
        "id": "dwarven-army-recruit",
        "name": "Recruit",
        "text": "在本营执行 Recruit，持续 5 回合后恢复 ⌊最大 HP / 5⌋，不超过上限。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "cavalry-escort",
    "name": "Cavalry Escort",
    "baseGame": true,
    "group": "人类诸国",
    "source": "游戏本体",
    "faction": "人类诸国",
    "image": "/armies/game/unit_cav.png",
    "hp": "当前 HP / 最大 HP：5 / 5。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "统治者完成 Hunt [Agent] 行动，命令英雄追杀目标时派出。",
    "behavior": "随被指派的英雄移动并支援其追杀。英雄死亡，或结束带护卫的追杀且没有正在交战时，护卫解散。",
    "skills": []
  },
  {
    "id": "orc-army",
    "name": "Orc Army of [Horde]",
    "baseGame": true,
    "group": "Orcs",
    "source": "游戏本体",
    "faction": "Orcs",
    "image": "/armies/game/unit_orc.png",
    "hp": "初建时当前 HP 为 5。最大 HP 为本营及相邻地点各自的 ⌊Orcish Industry × 0.35 × 难度缩减系数 × Orc Strength 设置倍率⌋ 之和，最低 10；本营丢失时上限为 10。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Fortress 或 Mage Camp 的军队生成与重建机制、Muster 军事行动创建。军队缺失后，营地重建计时超过 24 回合时补充。",
    "behavior": "由所属 Orc 部落控制，攻击交战势力并摧毁聚居地；HP 低于上限 30% 时回营补充。",
    "skills": [
      {
        "id": "orc-army-recruit",
        "name": "Recruit",
        "text": "在本营执行 Recruit，持续 5 回合后恢复 ⌊最大 HP / 5⌋，不超过上限。",
        "baseGame": true
      },
      {
        "id": "orc-army-plunder",
        "name": "Plunder",
        "text": "摧毁人类聚居地期间，每回合将 ⌊0.1 × Prosperity × 人口⌋ Gold 加入部落主堡的 Orc Plunder。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "orc-spelltwisters",
    "name": "Orc Spelltwisters",
    "baseGame": true,
    "group": "Orcs",
    "source": "游戏本体",
    "faction": "Orcs",
    "image": "/armies/game/unit_magicOrc.png",
    "hp": "初建时当前 HP 为 5。最大 HP 为本营及相邻地点各自的 ⌊Orcish Industry × 0.35 × 难度缩减系数 × Orc Strength 设置倍率⌋ 之和，最低 10；本营丢失时上限为 10。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "由 Mage Camp 供养的 Orc 常备军。",
    "behavior": "沿用 Orc 常备军的移动、补充与劫掠行为。",
    "skills": [
      {
        "id": "orc-spelltwisters-orc-magics",
        "name": "Orc Magics",
        "text": "进入军队战斗后，为本方设置 Orc Magics，使该方军队伤害提高 20%。",
        "image": "/armies/game/unit_magicOrc.png",
        "baseGame": true
      }
    ]
  },
  {
    "id": "orc-raiders",
    "name": "[Commander]'s Raiders",
    "baseGame": true,
    "group": "Orcs",
    "source": "游戏本体",
    "faction": "Orcs",
    "image": "/armies/game/agent_warlord.png",
    "hp": "最大 HP：5 + 7 × 指挥者的基础 Command。\n创建时当前 HP：max(1, ⌊最大 HP / 5⌋)。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "The Warlord 在 Orc 领地完成 Raiding Party 后，将自身转为军队。",
    "behavior": "玩家直接控制，仍占用一个 Agent 名额；可移动、攻击、摧毁聚居地、补充兵力及解散。解散后恢复原 Agent，累积的 Menace 会带回人物。",
    "skills": [
      {
        "id": "orc-raiders-recruit",
        "name": "Recruit",
        "text": "在本营执行 Recruit，持续 5 回合后恢复 ⌊最大 HP / 5⌋，不超过上限。",
        "baseGame": true
      },
      {
        "id": "orc-raiders-plunder",
        "name": "Plunder",
        "text": "摧毁人类聚居地期间，每回合将 ⌊0.33 × Prosperity × 人口⌋ Gold 加入部落主堡的 Orc Plunder。",
        "baseGame": true
      }
    ]
  },
  {
    "id": "refugees",
    "name": "Refugees",
    "baseGame": true,
    "group": "流民",
    "source": "游戏本体",
    "faction": "流民",
    "image": "/armies/game/unit_refugees.png",
    "hp": "HP 表示剩余人数，生成时当前值与上限相同。\n聚居地被摧毁：⌊剩余人口 / 2⌋；Famine：⌊本次饥荒损失人口 / 2⌋；Orcish Encroachment：本次迁出人口数。",
    "stats": "移动: 1　伤害倍率: 0.3",
    "origin": "开启 Refugees 后，符合条件的人类聚居地因摧毁、Famine 或 Orcish Encroachment 产生。",
    "behavior": "自主寻找有食物盈余、没有 Famine 的聚居地，倾向原属国家。每回合在有空余居住容量且无 Famine 的聚居地安置 max(1, ⌊当前 HP × 5%⌋) 人，同量减少 HP 和上限。\n生成超过 10 回合后，每回合再损失 1 HP 与上限。相同国家的难民在同地且合计上限低于 100 时可以合并；人数耗尽后消失。",
    "skills": []
  },
  {
    "id": "cthonians",
    "name": "Cthonians",
    "baseGame": true,
    "group": "Cthonians",
    "source": "游戏本体",
    "faction": "Cthonians",
    "image": "/armies/game/unit_cthonians.png",
    "hp": "生成时当前 HP / 最大 HP：随机 2–11 / 相同值。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Cthonians 地点修正强度 ≥ 50、没有存活的关联军队时，每回合积累 ⌊强度 / 15⌋ 生成进度；进度超过 100 后产生一支军队并重置。",
    "behavior": "自主摧毁 Shadow 低于 75% 的人类聚居地。通常寻找地下目标；Geomancy: Cthonian Emergence 生效后可以寻找地表目标。",
    "skills": []
  },
  {
    "id": "deep-one-raiders",
    "name": "Deep One Raiders",
    "baseGame": true,
    "group": "Deep Ones",
    "source": "游戏本体",
    "faction": "Deep Ones",
    "image": "/armies/game/evil_deepOne.png",
    "hp": "新军队 HP = ⌊min(Abyssal City 人口, 7)⌋。\nDeep One Armory 每次处理一座有至少 1 人口的 Abyssal City 时，向最近且当前 HP < 100 的同类军队补充最多 7 HP；消耗等量城市人口。补充超出原上限时，同步提高上限。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Deep One Armory 将 Abyssal City 人口转成兵力；没有当前 HP < 100 的同类军队时，在 Armory 所在地点建立新军队。",
    "behavior": "自主摧毁所在地点 Shadow 低于 75% 的人类聚居地；Deeps Ones Rise Up 生效后会继续寻找新的聚居地。",
    "skills": []
  },
  {
    "id": "first-daughter",
    "name": "First Daughter",
    "baseGame": true,
    "group": "沙漠",
    "source": "游戏本体",
    "faction": "沙漠",
    "image": "/armies/game/unit_firstDaughter.png",
    "hp": "初始 HP / 最大 HP：20 + 60 × 召唤地点所有人物携带的 Daughter 随从总数。\n每回合恢复 1 HP，最多恢复至上限。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "携带至少一个 Daughter 随从，在 ARID 或 DESERT 的 Human Soul 地点完成 Summon First Daughter，并在随后事件中召唤。每局只能召唤一次。",
    "behavior": "玩家控制，只能在沙漠移动。每回合使自身及相邻地点所有地块温度 +0.03，直至达到或超过 1；自身与邻接地点每有一个合格的人类聚居地，增加 1.5 Menace。",
    "skills": []
  },
  {
    "id": "untamed-dead",
    "name": "Untamed Dead",
    "baseGame": true,
    "group": "Undead",
    "source": "游戏本体",
    "faction": "Undead",
    "image": "/armies/game/unit_untamedDead.png",
    "hp": "Released from Death 生成时：⌊min(当地 Death, 50)⌋ HP，并消耗等量 Death。\n最大 HP 每回合 −2，最低 0。当前 HP 低于或等于新上限时会补到上限；超过上限时按通用超额 HP 衰减规则下降。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "在有 Death 的地点施放 Released from Death；部分本体事件也能直接生成。",
    "behavior": "不受玩家直接指挥，自主摧毁附近人类聚居地，直到耗尽或被消灭。",
    "skills": []
  },
  {
    "id": "enslaved-dead",
    "name": "Enslaved Dead",
    "baseGame": true,
    "group": "Undead",
    "source": "游戏本体",
    "faction": "Undead",
    "image": "/armies/game/unit_untamedDead.png",
    "hp": "初始 HP = ⌊min(当地 Death, 50)⌋，消耗等量 Death；衰减和 HP 调整与 <CrossReference name=\"Untamed Dead\" href=\"#entry-army-untamed-dead\" /> 相同。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "施放 Enslave the Dead 后产生，召唤者成为主人。",
    "behavior": "自动追随主人，并攻击所在地点的人类聚居地；主人死亡后转为 <CrossReference name=\"Untamed Dead\" href=\"#entry-army-untamed-dead\" />。",
    "skills": []
  },
  {
    "id": "ravenous-dead",
    "name": "Ravenous Dead",
    "baseGame": true,
    "group": "Undead",
    "source": "游戏本体",
    "faction": "Undead",
    "image": "/armies/game/unit_ravenousDead.png",
    "hp": "初始 HP = ⌊min(当地 Death, 150)⌋，消耗等量 Death。\n无任务且当地 Death > 0 时，每回合消耗 7 Death、恢复 7 HP，必要时提高最大 HP。最大 HP 超过 200 时均分为两支，当前值都设为分割后的上限。\n未满足进食条件时，最大 HP 每回合 −2，并将超出上限的当前 HP 降至上限。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "施放 Ravenous Dead 法术；部分本体事件也能直接生成。",
    "behavior": "自主摧毁未充分 Enshadowed 的人类聚居地，摧毁后利用当地 Death 增长与分裂。",
    "skills": []
  },
  {
    "id": "shoggoth",
    "name": "Shoggoth",
    "baseGame": true,
    "group": "异怪",
    "source": "游戏本体",
    "faction": "异怪",
    "image": "/armies/game/shoggoth.png",
    "hp": "每个军队节段初始 HP / 最大 HP：80 / 80；各节段独立受伤。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "The Seeker 解开全部 Secrets 后完成 Birth the Abomination，牺牲自己并召唤。",
    "behavior": "玩家控制。移动一个节段时，其他节段会联动靠近并占据相邻空位。实际创建 5–6 个节段：当前地点加最多 5 个邻接地点，少于 5 个时在原地点补足。",
    "skills": []
  },
  {
    "id": "dragon",
    "name": "Dragon",
    "baseGame": true,
    "group": "异怪",
    "source": "游戏本体",
    "faction": "异怪",
    "image": "/armies/events/foge.dragon.jpg",
    "hp": "当前 HP / 最大 HP：120 / 120。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "探索 Dragon Mountain 对应遗迹，进入 Dragon 事件。\nHire the Dragon：支付 120 Gold，生成由玩家控制的 Dragon。\nMadden：人物损失 10 HP，生成自主游荡的 Dragon；遗迹留下 100 Gold 的缓存。",
    "behavior": "雇佣形态可直接指挥；Madden 形态自主游荡，攻击人类聚居地。两种选项都移除 Dragon Mountain 并完成遗迹探索。",
    "skills": []
  },
  {
    "id": "abyssal-behemoth",
    "name": "Abyssal Behemoth",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconBehemoth.png",
    "hp": "初始 HP / 最大 HP：50 / 50；临时 HP 最多 100。\n当前 HP 超过 50 时，每逢偶数回合损失 1 HP，上限跟随当前值；降至 50 或以下后，上限恢复为 50。\nThe Fisherman 的 Feed Behemoth 可用 Haul 增加 HP：Haul ≤100 时消耗全部并增加等量 HP；Haul >100 时消耗 100，并将当前值和上限设为 100。超额部分在军队回合检查时限制为 100。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Lore ≥ 3 的施法者完成 Abyssal: From Whispered Tales；所在 Abyssal Locus 强度须高于 30，生成位置为可用的 Abyssal City。",
    "behavior": "玩家控制，可直接在海洋与陆地活动。被击杀后，若在沿海或邻接沿海的海洋地点，会留下强度 100 的 Behemoth’s Corpse。",
    "skills": [
      {
        "id": "abyssal-behemoth-from-below",
        "name": "From Below",
        "text": "吞食当前地点一支合格的人类常备军，自己损失 ⌊目标当前 HP / 2⌋，目标立即死亡。实际按地点单位顺序选取首个合格目标。",
        "location": "海洋地点",
        "time": "1 回合",
        "statLine": "Complexity: 1.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/raze.png",
        "limit": "自身 HP 必须大于 ⌊目标当前 HP / 2⌋。"
      },
      {
        "id": "abyssal-behemoth-feed-on-city",
        "name": "Feed on City",
        "text": "消耗 15 人口，恢复 30 HP，最多恢复到 50。",
        "location": "Abyssal City",
        "time": "3 回合",
        "statLine": "Complexity: 3.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/deepOneCity.png",
        "limit": "城市人口 > 15；自身 HP < 50。"
      }
    ]
  },
  {
    "id": "kraken",
    "name": "Kraken",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconKraken.png",
    "hp": "初始 HP / 最大 HP：30 / 30。\nThe Fisherman 的 Feed Kraken 可用 Haul 恢复 HP：Haul 不超过最大 HP 时消耗全部并恢复等量 HP；超过时消耗相当于最大 HP 的 Haul，直接补满。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Lore ≥ 3 的施法者完成 Abyssal: From Uncharted Seas；所在 Abyssal Locus 强度须高于 30，生成位置为可用的 Abyssal City。",
    "behavior": "玩家控制，可直接在海洋与陆地活动。Ensnare 冷却每回合 −1；海上或沿海死亡可在沿海留下强度 100 的 Kraken’s Corpse。",
    "skills": [
      {
        "id": "kraken-ensnare",
        "name": "Ensnare",
        "text": "使同地全部非玩家、非 Chosen One 的人物 Disrupted 3 回合，Ensnare 冷却增加 5。",
        "location": "海洋或沿海地点",
        "time": "1 回合",
        "statLine": "Complexity: 1.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/hideInAbyss.png",
        "limit": "存在合格人物；冷却为 0。"
      },
      {
        "id": "kraken-consume-prey",
        "name": "Consume Prey",
        "text": "吞食一个处于 Disrupted 的非玩家人物并杀死其随从，优先选择人物 Attack 与随从 Attack 合计最低者。实际扣除自身 HP = 目标 Might + 随从 Attack 之和；Ensnare 冷却 +1。",
        "location": "海洋或沿海地点",
        "time": "1 回合",
        "statLine": "Complexity: 1.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/raze.png",
        "limit": "目标不能是 Chosen One。"
      },
      {
        "id": "kraken-feed-on-city",
        "name": "Feed on City",
        "text": "消耗 10 人口，恢复 15 HP，不超过上限。",
        "location": "Abyssal City",
        "time": "3 回合",
        "statLine": "Complexity: 3.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/deepOneCity.png",
        "limit": "城市人口 > 10；自身 HP 未满。"
      }
    ]
  },
  {
    "id": "trench-crawlers",
    "name": "Trench Crawlers",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconTrenchCrawler.png",
    "hp": "初始 HP / 最大 HP：50 / 50。\n每回合若当地 Madness ≥ 20，消耗 20、恢复 5 HP，必要时提高上限；否则在既非海洋也非沿海的地点损失 1 HP。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Lore ≥ 3 的施法者完成 Abyssal: From the Depths，在可用的 Abyssal City 生成。Abyssal Locus 存在时要求强度 > 30；在 Abyssal City 执行可绕过该强度检查。",
    "behavior": "自主行动。所在人类聚居地人口 > 10 时，每回合带走 3 人，家园 Abyssal City 人口 +3，关联 Sanctum 的 Menace +3。",
    "skills": []
  },
  {
    "id": "breathless-horde",
    "name": "Breathless Horde",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Drowned Prophet",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconBreathlessHorde.png",
    "hp": "出现来源决定初始 HP 与上限：\n接受 Drowned Prophet 或转化相邻聚居地：15。\n统治者创建军队：20。\nGather Armies：2 × ⌊聚居地人口 / 2⌋，消耗 ⌊人口 / 2⌋。\nAbyssal Crusade：⌊合格 Abyssal City 人口 × 3⌋。\nDrowned Prophet Cult 成军：取同地遍历到的最后一支人类常备军的最大 HP；没有或低于 50 时取 50，否则翻倍。\n受伤后，上限随当前 HP 降低。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Drowned Prophet Cult、其统治者行动与法术生成，隶属 Drowned Prophet 的教团或国家。",
    "behavior": "自主追击敌军和征服目标，采用持续进攻模式。关联 Drowned Prophet 消失时，军队解体。",
    "skills": []
  },
  {
    "id": "coral-mass",
    "name": "Coral Mass",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconBehemoth.png",
    "hp": "初始 HP / 最大 HP：200 / 200。\n执行 Consume Death 时，每回合消耗最多 10 Death，每 1 Death 恢复 2 HP；超过上限时提高上限。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Coral Mass Cult 强度达到 100 时生成，并将当地聚居地化为废墟。当前构造函数直接将该修正设为 100，因此未被其他代码下调时会在后续检查中生成。",
    "behavior": "玩家控制。每逢第 3 的倍数回合，在存活 Coralings 少于 7 时生成一个 Coraling。陆地死亡或海上邻近沿海时，留下强度 500 的尸体修正。",
    "skills": [
      {
        "id": "coral-mass-consume-death",
        "name": "Consume Death",
        "text": "持续期间按上方 HP 规则吸收当地 Death。",
        "location": "存在 Death 的地点",
        "time": "10 回合",
        "statLine": "Complexity: 10.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/death.png",
        "limit": "当前 HP 低于上限。"
      },
      {
        "id": "coral-mass-maddening-aura",
        "name": "Maddening Aura",
        "text": "消耗 100 HP，使当前和相邻地点各增加 100 Madness，范围内非玩家英雄与冒险者各损失 8 Sanity。",
        "location": "当前地点及相邻地点",
        "time": "3 回合",
        "statLine": "Complexity: 3.0　Profile: 0.0　Menace: 0.0　XP: 0",
        "image": "/armies/game/madness.png",
        "limit": "当前 HP ≥ 100。"
      }
    ]
  },
  {
    "id": "festering-barnacle",
    "name": "Festering Barnacle",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Coral Mass",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconBreathless.png",
    "hp": "当前 HP / 最大 HP：50 / 50。",
    "stats": "移动: 0　伤害倍率: 1",
    "origin": "未找到生成途径。当前 DLL 定义了该军队，Coral Mass 提示提及召唤，但未找到创建调用或对应召唤行动。",
    "behavior": "定义为与 Coral Mass 关联的自主军队。当前类未实现进食或支援逻辑。关联 Coral Mass 死亡时随之死亡。",
    "skills": []
  },
  {
    "id": "coral-crab",
    "name": "Coral Crab",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Coral Mass",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconBreathless.png",
    "hp": "当前 HP / 最大 HP：150 / 150。",
    "stats": "移动: 0　伤害倍率: 1",
    "origin": "未找到生成途径。当前 DLL 定义了该军队，Coral Mass 提示提及召唤，但未找到创建调用或对应召唤行动。",
    "behavior": "定义为与 Coral Mass 关联的自主军队。当前类未实现吞食 Barnacle 或英雄的逻辑。关联 Coral Mass 死亡时随之死亡。",
    "skills": []
  },
  {
    "id": "inundai-court",
    "name": "Inundai Court",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Inundai",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconinundaiemissary.png",
    "hp": "HP 由创建参数传入；未找到实际生成值。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "未找到生成途径。当前 DLL 存在该定义，但未找到创建调用。",
    "behavior": "定义为自主军队；未找到独立的行动逻辑。",
    "skills": []
  },
  {
    "id": "entranced-crowd",
    "name": "Entranced Crowd",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Inundai",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconinundaicrowd.png",
    "hp": "HP 等于被带走的人口。\nCall to Palace：max(1, ⌊聚居地人口 × 30%⌋)。\nInundai Cult 的迁出效果：max(1, ⌊聚居地人口 × 15%⌋)。\n受伤时上限随当前 HP 下降。",
    "stats": "移动: 1　伤害倍率: 0.3",
    "origin": "Inundai Emissary 或已为 Inundai 服务的 Agent 完成 Call to Palace；Inundai Cult 也会产生。",
    "behavior": "自主前往指定 Inundai Palace。抵达后将剩余 HP 等量转为目标聚居地人口，随后消失；途中不采用普通 Refugees 的年龄衰减与沿途安置规则。",
    "skills": []
  },
  {
    "id": "entranced-deep-ones",
    "name": "Entranced Deep Ones",
    "baseGame": false,
    "group": "Deep Ones Plus",
    "source": "Deep Ones Plus",
    "faction": "Inundai",
    "image": "/armies/mod/Wonderblunder_DeepOnes.iconinundaideepone.png",
    "hp": "每座来源 Abyssal City 生成的 HP = max(1, ⌊该城市人口 × 50%⌋)，来源城市减少等量人口；受伤后上限同步降低。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "完成 Attract Deep Ones，使其他有居民的海洋 Abyssal City 各派出一队。",
    "behavior": "自主前往指定地点，抵达后将剩余 HP 等量转为当地人类聚居地或 Abyssal City 的人口，随后消失。",
    "skills": []
  },
  {
    "id": "forest-guardians",
    "name": "Forest Guardians of [Home]",
    "baseGame": false,
    "group": "Covens, Curses & Curios Recast",
    "source": "Covens, Curses & Curios Recast",
    "faction": "Spirit Tree 所属国家",
    "image": "/armies/game/vinervaSpiritOfWild.png",
    "hp": "初始 HP / 最大 HP：50 / 50。\nSpirit Tree 存续时上限为 50；来源树消失后，每回合把上限设为 min(当前 HP, 50) − 5，逐步衰减直至解散。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Spirit Tree 位于有人类聚居地、所属国家有效的地点时，每 25 回合补充一支，目标维持 2 支存活军队。",
    "behavior": "采用常备军的自主战斗、回营与补充行为。来源树被移除后，军队逐渐消散。",
    "skills": [
      {
        "id": "forest-guardians-recruit",
        "name": "Recruit",
        "text": "在本营持续 5 回合，恢复 ⌊最大 HP / 5⌋，不超过上限。"
      }
    ]
  },
  {
    "id": "dwarven-settlers",
    "name": "Dwarven Settlers",
    "baseGame": false,
    "group": "Community Library",
    "source": "Community Library",
    "faction": "矮人",
    "image": "/armies/mod/CLib.Foreground_DwarvenSettlers.jpg",
    "hp": "初始 HP = max(10, 四舍五入〔来源人口 ×25%，恰好为 .5 时取最近偶数〕)，来源聚居地减少同量人口。\n当前 HP 降低时，上限同步降低。",
    "stats": "移动: 1　伤害倍率: 0.3",
    "origin": "Community Library 启用矮人扩张或要塞选项。来源聚居地人口 > 20，并满足人口达到容量 70% 或食物不足；存在合格的邻接扩张地。",
    "behavior": "准备 1 回合后前往目标，抵达后建设 10 回合，将剩余 HP 作为新聚居地人口。根据目标建立 Dwarven City、Dwarven Outpost 或地表 Dwarf Fortress。\n建设任务失效、无路径等原因导致闲置后，转为普通 <CrossReference name=\"Refugees\" href=\"#entry-army-refugees\" />。",
    "skills": []
  },
  {
    "id": "bestial-horde",
    "name": "Bestial Horde",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs",
    "image": "/armies/mod/OrcsPlus.Icon_ArmouredBeast.png",
    "hp": "正常营地重建时当前 HP 为 5；Blood Money 等来源会另外补充兵力。\n最大 HP = max(8, ⌊本营及同部落相邻地点的 Orcish Industry 总和 × 0.35 × 难度缩减系数 × Orc Strength 设置倍率 × 0.75 × (1 + 本营 Perfection 强度 / 1200)⌋)。\n没有 Perfection 时该额外倍率为 1；本营丢失时上限为 8。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "由兽栏专精的 Orc Camp 生成或重建，Blood Money 也能在对应营地恢复该军队。",
    "behavior": "自主觅敌，HP 低于上限 30% 时回营。攻击人类聚居地使用 Devouring Population；加入已有战斗时可触发伏击。",
    "skills": [
      {
        "id": "bestial-horde-devouring-population",
        "name": "Devouring Population",
        "text": "每回合 Devastation +12、防御减少 ⌊当前 HP / 10⌋ +1，并吞食 max(⌊人口 × 10%⌋, 2) 人；每人产生 2 Death、恢复 2 HP。防御耗尽或人口归零时毁掉聚居地。末次还会吞食本可形成难民的剩余人口一半。"
      },
      {
        "id": "bestial-horde-ambush",
        "name": "Ambush",
        "text": "加入已有友军的战斗时，对每支敌军造成一次额外伤害；基础值为 ⌈该敌军当前 HP × 10%⌉，再应用对应战斗修正。此时遇到 Refugees 会直接吞食，每 1 HP 难民转为 2 HP 自身兵力与 2 Death。"
      }
    ]
  },
  {
    "id": "orc-corsairs",
    "name": "Orc Corsairs",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs",
    "image": "/armies/mod/OrcsPlus.Icon_OrcCorsair.png",
    "hp": "正常营地重建时当前 HP 为 5；Blood Money 等来源会另外补充兵力。\n最大 HP = max(5, ⌊本营及同部落相邻地点的 Orcish Industry 总和 × 0.35 × 难度缩减系数 × Orc Strength 设置倍率 × 0.5 × (1 + 本营 Perfection 强度 / 1200)⌋)。\n没有 Perfection 时该额外倍率为 1；本营丢失时上限为 5。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "由造船专精的 Orc Camp 生成或重建；Blood Money 也能在对应营地恢复该军队。",
    "behavior": "自主海上劫掠，可直接跨海移动，袭击贸易路线和沿海聚居地。摧毁聚居地时每回合取得 ⌊0.15 × Prosperity × 人口⌋ Gold，存入本营 Orc Plunder。",
    "skills": [
      {
        "id": "orc-corsairs-pirate-trade-route",
        "name": "Pirate Trade Route",
        "text": "劫掠经过当前位置、冷却为 0 且至少一端属于敌对阵营的贸易路线。每条路线冷却设为 16；各端点人类聚居地贡献其 Prosperity ×50 Gold，并按统治者 Gold 的 20% 向上取整计入战利品。\n当前实现随后将这些统治者的 Gold 乘以 ⌊0.8⌋，因此清空其金库。每条受袭路线有 10% 概率生成 Shipwreck。\n完成时 Profile +15、Menace +15。",
        "location": "有合格贸易路线经过的地点",
        "image": "/armies/game/raidShipping.png",
        "statLine": "Complexity: 30　Profile: 0　Menace: 0　XP: 49",
        "meta": "使用属性：当前 HP",
        "time": "兵力不变时为 ⌈30 / max(1, ⌊当前 HP / 5⌋)⌉ 回合"
      },
      {
        "id": "orc-corsairs-pillage-settlement",
        "name": "Pillage Settlement",
        "text": "从邻接敌对聚居地中挑选 Prosperity 最高者，增加 100 Devastation；取得 ⌈Prosperity × 100⌉ Gold，另加统治者 Gold 的 20% 向上取整。战利品存入本营 Orc Plunder；目标有 Docks 时有 10% 概率生成 Shipwreck。\n完成时 Profile +10、Menace +10。",
        "location": "邻接敌对人类聚居地的海洋地点",
        "image": "/armies/game/raidPort.png",
        "limit": "至少一个合格邻接聚居地的 Devastation 低于 150。",
        "statLine": "Complexity: 30　Profile: 0　Menace: 0　XP: 49",
        "meta": "使用属性：当前 HP",
        "time": "兵力不变时为 ⌈30 / max(1, ⌊当前 HP / 5⌋)⌉ 回合"
      }
    ]
  },
  {
    "id": "orc-rabble",
    "name": "Orc Rabble",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs",
    "image": "/armies/game/unit_orc.png",
    "hp": "初始 HP = ⌈所在营地 Orcish Industry × (1 + 当地 Perfection / 1200)⌉；没有 Perfection 时额外倍率为 1。\n每回合 HP −2，上限同步设为当前 HP；耗尽后解散。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "持有支持 Rouse the Horde 的旗帜物品，在 Orc Camp 完成该仪式；营地随即荒废。",
    "behavior": "由 Orc 部落自主控制。摧毁聚居地时沿用 Orc 常备军劫掠规则；所属部落灭亡时解散。",
    "skills": []
  },
  {
    "id": "avenging-warriors",
    "name": "Avenging Warriors",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs",
    "image": "/armies/game/minion_orcWarrior.png",
    "hp": "当前 HP / 最大 HP：7 / 7。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Orc 人物执行复仇任务，回到合格营地召集护卫后生成。",
    "behavior": "跟随复仇者追杀 Blood Feud 目标；护送者死亡或结束带护卫追杀且没有交战时解散。",
    "skills": []
  },
  {
    "id": "mercenaries",
    "name": "Mercenary Company",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs · Mammon 扩展",
    "image": "/armies/game/unit_humanArmy.png",
    "hp": "Clients of Mammon −1：基础兵力 75；−2：基础兵力 125。\n按雇佣来源统治者喜恶、阵营关系调整，再乘来源首都 Prosperity；最终 HP = max(10, ⌊调整后兵力⌋)。Orc 来源不乘 Prosperity。当前 HP 与上限相同。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Mammon 限定的 Mod 扩展。Orc 教义 Clients of Mammon 为 −1 或 −2，执行 Hire Mercinaries from [Nation]，耗时 10 回合；分别支付 250 或 150 Gold，与来源势力不能处于战争。",
    "behavior": "先前往雇主领土再为其作战。基础服役期 25 回合，抵达加入雇主后计时；合同结束或雇主覆灭时返回来源势力。来源与雇主开战则解散。\n名称与肖像随来源为人类、精灵、矮人、Orcs、Dark Empire 或 Perfect 势力变化。 HP 低于上限 30% 时，会返回来源势力补充；Orc 来源需在该势力营地补充。合同结束后返回来源领土解散。",
    "skills": [
      {
        "id": "mercenaries-contract-terms",
        "name": "Contract Terms",
        "text": "来源为人类国家时：统治者厌恶 Gold 或 Orcs，兵力 −25；否则喜爱 Gold 时 −5、极度喜爱时 −10，喜爱 Orcs 时兵力 +25 且服役 +5 回合，极度喜爱时 +50 且服役 +10 回合。\nOrc 雇主 Alignment <1 且来源为 Dark Empire 或 Ophanim 国家时，兵力 +25、服役 +5；Alignment ≥1 时兵力 −25。\n来源为 Orc 部落时，双方 Alignment 正负相反使兵力 −25；来源为 Perfect 社会再加 25 兵力与 5 回合。"
      }
    ]
  },
  {
    "id": "perfect-horde",
    "name": "Perfect Horde",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs · Ophanim 扩展",
    "image": "/armies/mod/OrcsPlus.Icon_PerfectHorde.png",
    "hp": "最大 HP = max(12, ⌊本营及同部落相邻地点的 Orcish Industry 总和 × 0.35 × 难度缩减系数 × Orc Strength 设置倍率 × 1.2 × (1 + 本营 Perfection 强度 / 1200)⌋)。\n没有 Perfection 时该额外倍率为 1；本营丢失时上限为 12。\n转化时保留原军队 HP 比例：当前 HP = ⌈新上限 × 原当前 HP / 原上限⌉。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Ophanim 限定的 Mod 扩展。Orc 教义 Perfection 为 −2、本营 Perfection ≥300，对该营的 Orc 军队使用 Perfect Horde 神力。",
    "behavior": "由所属 Orc 部落控制。摧毁聚居地期间的 Gold 收益为普通 Orc 军队两倍：⌊0.2 × Prosperity × 人口⌋。",
    "skills": [
      {
        "id": "perfect-horde-perfect-formation",
        "name": "Perfect Coordination",
        "text": "参加军队战斗时，为本方设置 Perfect Coordination，使该方军队伤害提高 25%。",
        "image": "/armies/game/ophanimLight.png"
      }
    ]
  },
  {
    "id": "perfect-raiders",
    "name": "[Commander]'s Perfect Raiders",
    "baseGame": false,
    "group": "Orcs Plus",
    "source": "Orcs Plus",
    "faction": "Orcs · Ophanim 扩展",
    "image": "/armies/mod/OrcsPlus.Icon_PerfectHorde.png",
    "hp": "最大 HP：2 × (5 + 7 × 指挥者基础 Command)。\n创建时当前 HP：max(1, ⌊最大 HP / 3⌋)。",
    "stats": "移动: 1　伤害倍率: 1",
    "origin": "Ophanim 限定的 Mod 扩展。部落教义 Perfection 为 −2，已经成为 Perfect 社会，且集结地 Perfection ≥300 时，完成 Raiding Party 生成该形态。",
    "behavior": "玩家直接控制，仍占用 Agent 名额；继承 Raiders 的补充、解散与人物恢复机制。",
    "skills": []
  },
  {
    "id": "dispossessed-colonists",
    "name": "Dispossessed Colonists",
    "baseGame": false,
    "group": "The Surveyor",
    "source": "The Surveyor",
    "faction": "原资助国家",
    "image": "/armies/game/unit_refugees.png",
    "hp": "当前 HP / 最大 HP：30 / 30；受伤后上限随当前值下降。",
    "stats": "移动: 1　伤害倍率: 0.3",
    "origin": "Surveyor Outpost 达到 300 崩溃阈值，或因地点、资助关系等条件失效而倒闭时生成。",
    "behavior": "先返回创建时记录的本国首都，之后寻找本国聚居地。停留在本国 City 时，每回合 Unrest +3、Famine +3，自身 HP −2；停留在本国其他聚居地时，Banditry +3，HP −4。耗尽后解散。",
    "skills": []
  }
];

export const armyMechanics: DetailItem[] = [
  {
    "id": "army-combat",
    "name": "军队战斗",
    "baseGame": true,
    "text": "军队用当前 HP 表示现存兵力。基础单次伤害为 ⌈当前 HP × 10% × 伤害倍率 × 指挥优势倍率 × 战斗效果倍率⌉；双方先分别计算，再统一结算伤害。多支军队会打乱顺序后分配目标。\n指挥优势 = 双方参与指挥的人物 Command 差 × 0.075，范围 −2 至 +2；有优势的一方伤害乘 1 + 优势绝对值。军队自带指挥者与执行指挥任务的人物均计入。\n本页“伤害倍率”记录军队自身倍率；Orc Magics、Perfect Coordination 等另作为战斗效果乘算。"
  },
  {
    "id": "army-siege",
    "name": "占领与摧毁",
    "baseGame": true,
    "text": "占领与摧毁每回合削减地点防御 ⌊当前 HP / 5⌋ +1。占领每回合产生 3 Devastation，攻破后变更地点归属；摧毁每回合产生 8 Devastation，攻破后将聚居地变为废墟。\n聚居地防御本身不会在这两个任务中直接反击扣除军队 HP；守军通过军队战斗拦截。特殊吞食行动使用自身规则。"
  },
  {
    "id": "army-replenishment",
    "name": "补充与超额 HP",
    "baseGame": true,
    "text": "普通 Recruit 持续 5 回合，完成后恢复 ⌊最大 HP / 5⌋，最多恢复至上限。是否会主动回营、能否执行补充，由具体军队决定。\n当前 HP 高于上限时，通用结算使其下降到 max(最大 HP, ⌊当前 HP × 97%⌋)。有独立 HP 调整的军队，同时按自己的回合规则处理。"
  }
];
