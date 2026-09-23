import type { NonPlayerUnitRecord } from "./NonPlayerUnitTypes";

export const nonPlayerUnits: NonPlayerUnitRecord[] = [
  {
    "id": "warrior",
    "name": "Warrior",
    "group": "人类诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属人类国家",
    "stats": "Might: 2–4　Lore: 1–3　Intrigue: 1–3　Command: 2–4　HP: 6",
    "origin": "人类英雄数量不足时，由游戏在合格的地表城市补充。生成检查每 5 回合进行；出生城市 Shadow 低于 50%。",
    "behavior": "根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。",
    "skills": [
      {
        "id": "warrior-warrior",
        "name": "Warrior",
        "text": "创建时在原人物基础上 Might +1、Command +1，最大 HP +1。新生普通人物对应上列范围；若使用已有人物，则继承其原值后加成。"
      },
      {
        "id": "warrior-hero",
        "name": "Hero",
        "text": "完成任务、探索遗迹与战斗可以获取 XP。普通英雄等级上限为 ⌊3 + 10 × World Panic⌋；这里 World Panic 使用百分比对应的比例计算，例如 50% 时上限为 8。"
      }
    ],
    "tasks": []
  },
  {
    "id": "mage",
    "name": "Mage",
    "group": "人类诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属人类国家",
    "stats": "Might: 1–3　Lore: 3–5　Intrigue: 1–3　Command: 1–3　HP: 5",
    "origin": "人类英雄补充时，优先满足 Mage 配额；默认目标为主要地点数量 ×0.07 后向上取整。",
    "behavior": "根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。 Mage 创建时降低对 Combat 的偏好。",
    "skills": [
      {
        "id": "mage-mastery-of-geomancy",
        "name": "Mastery of Geomancy",
        "text": "初始 Geomancy 1 级，并拥有 1 级 Arcane Knowledge。Lore 在原人物基础上 +2。可学习、研究和施放满足等级及地点要求的 Geomancy。"
      }
    ],
    "tasks": [
      {
        "id": "mage-reforge-the-seal",
        "name": "Reforge The Seal",
        "kind": "英雄任务",
        "text": "完成时重新封印玩家神祇，使玩家失败。",
        "location": "the Elder Tomb；World Panic 至少 75%，自身 Awareness 超过 50%，游戏尚未结束。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 170　Profile: 1000　Menace: 0　XP: 180",
        "positiveTags": "Cooperation",
        "negativeTags": "无",
        "image": "/non-player-units/game/reforgeTheSeal.png"
      }
    ]
  },
  {
    "id": "chosen-one",
    "name": "Chosen One",
    "group": "人类诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "继承原英雄所属势力",
    "stats": "Might: 继承　Lore: 继承　Intrigue: 继承　Command: 继承 + 2 + 2 × 特质等级　HP: 继承",
    "origin": "从未受玩家控制、Shadow 低于 50% 的非 Mage 英雄中选出。可以由不同种族的合格英雄担任；原 Chosen One 死亡后按重生选项决定是否重新选择。",
    "behavior": "保留原英雄类型与行动能力，并可执行下列预言及联合诸国的任务。",
    "skills": [
      {
        "id": "chosen-one-chosen-one",
        "name": "Chosen One",
        "text": "Attack +1、Defence +2；免于自然衰老死亡。每回合个人 Shadow 归零，Menace 归零，并移除 Call of the Abyss、Vampiric Curse、The Hunger。第 10 回合之后 Awareness 保持 100%。\n获得的 XP 翻倍，等级上限为普通英雄上限的两倍。该特质默认等级为 1，此时 Command +4。"
      },
      {
        "id": "chosen-one-prophecy",
        "name": "Prophecy",
        "text": "Redeem Sovereign、Conclave 及 Fulfil the Prophecy 会检查距上次终极行动和上次尝试的间隔：分别须超过 40 和 27 回合；具体是否重置完成冷却由对应行动决定。"
      }
    ],
    "tasks": [
      {
        "id": "chosen-one-hero-s-journey",
        "name": "Hero's Journey",
        "kind": "英雄任务",
        "text": "Chosen One 特质等级 +1。当前默认创建的特质等级为 1，因此通常的新 Chosen One 不满足此项的 0 级条件。",
        "location": "Ancient Ruins；World Panic 至少 25%，Chosen One 特质等级为 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 25　Profile: 1000　Menace: 0　XP: 42",
        "positiveTags": "Ambition",
        "negativeTags": "无",
        "image": "/non-player-units/game/theProphecy.png"
      },
      {
        "id": "chosen-one-build-alliance",
        "name": "Build Alliance",
        "kind": "英雄任务",
        "text": "统治者对 Chosen One 的偏好提高一级，影响其加入 Alliance 的意愿。\n完成时Profile +3。",
        "location": "有统治者的 City／Elven City；统治者 Awareness 至少 50%，且对 Chosen One 的偏好介于中立与喜欢之间。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 50　Profile: 150　Menace: 0　XP: 72",
        "positiveTags": "无",
        "negativeTags": "无",
        "image": "/non-player-units/game/alliance.png"
      },
      {
        "id": "chosen-one-redeem-sovereign",
        "name": "Redeem Sovereign",
        "kind": "英雄任务",
        "text": "君主及首都的 Shadow 归零，当地 Ward +100；相邻同国聚居地 Shadow 减半、Ward +50。君主对执行者偏好提高一级。\n完成时Profile +3。",
        "location": "有君主的国家首都；君主个人 Shadow 超过 50%，国家未成为 Dark Empire 或 Ophanim 控制国家。",
        "meta": "使用属性：Lore + Command",
        "statLine": "Complexity: 100　Profile: 100　Menace: 40 × 地点 Shadow（如 50% 对应 20）　XP: 121",
        "positiveTags": "无",
        "negativeTags": "无",
        "image": "/non-player-units/game/crown.png"
      },
      {
        "id": "chosen-one-conclave-of-peace",
        "name": "Conclave of Peace",
        "kind": "英雄任务",
        "text": "消除至多 14 名存活英雄或统治者的一项人物／家族仇恨，并让另一批合格人物喜欢 Cooperation。两部分共享最多 28 个名额，第一部分未用完的名额可用于第二部分。\n完成时Profile +3。",
        "location": "有人类统治者的 City；Shadow 不超过 50%，World Panic 至少 20%，不在 Dark Empire 或 Ophanim 控制国家。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 32　Profile: 150　Menace: 0　XP: 51",
        "time": "32 回合",
        "positiveTags": "Cooperation",
        "negativeTags": "Discord、Cruelty、Combat、Danger",
        "image": "/non-player-units/game/conclave.png"
      },
      {
        "id": "chosen-one-conclave-of-the-remedy",
        "name": "Conclave of the Remedy",
        "kind": "英雄任务",
        "text": "所有属于人类国家的人类聚居地 Plague Immunity +100。\n完成时Profile +3。",
        "location": "有人类统治者的 City；Shadow 不超过 50%，World Panic 至少 20%，不在 Dark Empire 或 Ophanim 控制国家。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 32　Profile: 150　Menace: 0　XP: 51",
        "time": "32 回合",
        "positiveTags": "Cooperation",
        "negativeTags": "Discord、Cruelty、Combat、Danger",
        "image": "/non-player-units/game/conclave.png"
      },
      {
        "id": "chosen-one-conclave-for-a-grand-army",
        "name": "Conclave for a Grand Army",
        "kind": "英雄任务",
        "text": "所有 Alliance 的 City 获得 100 Military Fervour；已有修正时强度 +100。\n完成时Profile +3。",
        "location": "Alliance 的 City；有统治者，Shadow 不超过 50%，World Panic 至少 20%，当地 Military Fervour 不超过 50。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 32　Profile: 150　Menace: 0　XP: 51",
        "time": "32 回合",
        "positiveTags": "Cooperation",
        "negativeTags": "Discord、Cruelty、Combat、Danger",
        "image": "/non-player-units/game/conclave.png"
      },
      {
        "id": "chosen-one-fulfil-the-prophecy",
        "name": "Fulfil the Prophecy",
        "kind": "英雄任务",
        "text": "完成预言，使玩家失败。",
        "location": "the Elder Tomb；World Panic 至少 80%，游戏尚未结束。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 50　Profile: 1000　Menace: 0　XP: 72",
        "positiveTags": "Ambition",
        "negativeTags": "无",
        "image": "/non-player-units/game/theProphecy.png"
      }
    ]
  },
  {
    "id": "wayfinder",
    "name": "Wayfinder",
    "group": "精灵诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属精灵国家",
    "stats": "Might: 2–4　Lore: 3–5　Intrigue: 1–3　Command: 1–3　HP: 8",
    "origin": "由精灵统治者执行 Recruit Wayfinder；同一国家已有存活 Wayfinder 时不能再次招募。",
    "behavior": "保留英雄的通用行动能力。对精灵领土以外的人类国家地点，攻击、干扰及任务评分都会降低；降低幅度受到家乡 Arrogance 影响。",
    "skills": [
      {
        "id": "wayfinder-elven-specialist",
        "name": "Elven Specialist",
        "text": "在原人物基础上 Might +1、Lore +2、最大 HP +3；默认将对 Elves 的偏好设为中立。"
      }
    ],
    "tasks": [
      {
        "id": "wayfinder-find-ruler",
        "name": "Find Ruler",
        "kind": "英雄任务",
        "text": "创建新的精灵统治者并让其统治当地。",
        "location": "本国没有统治者的 Elven City。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 25　Profile: 100　Menace: 0　XP: 42",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "无",
        "image": "/non-player-units/game/silentAssassin.png"
      }
    ]
  },
  {
    "id": "crystalsmith",
    "name": "Crystalsmith",
    "group": "精灵诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属精灵国家",
    "stats": "Might: 2–4　Lore: 3–5　Intrigue: 1–3　Command: 1–3　HP: 8",
    "origin": "由精灵统治者执行 Recruit Crystalsmith；同一国家已有存活 Crystalsmith 时不能再次招募。",
    "behavior": "保留英雄的通用行动能力。对精灵领土以外的人类国家地点，攻击、干扰及任务评分都会降低；降低幅度受到家乡 Arrogance 影响。",
    "skills": [
      {
        "id": "crystalsmith-elven-specialist",
        "name": "Elven Specialist",
        "text": "在原人物基础上 Might +1、Lore +2、最大 HP +3。可制作、赠送 Elfstone，并出售精灵珠宝筹资。"
      }
    ],
    "tasks": [
      {
        "id": "crystalsmith-craft-elfstone-crystal",
        "name": "Craft Elfstone Crystal",
        "kind": "英雄任务",
        "text": "获得一件 Elfstone Crystal。物品栏满时可替换一件非 Elfstone 物品。若 Secret 属于危险知识，则触发疯狂并移除该 Secret。",
        "location": "可供英雄使用的 Arcane Secret；自身国家未成为 Dark Empire。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 15　Profile: 100　Menace: 0　XP: 29",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "Shadow",
        "image": "/non-player-units/game/i_elfstone.png"
      },
      {
        "id": "crystalsmith-gift-ruler-an-elfstone",
        "name": "Gift Ruler an Elfstone",
        "kind": "英雄任务",
        "text": "将一件 Elfstone 交给当地统治者；对方物品栏满时可替换一件非 Elfstone 物品。",
        "location": "有人类统治者的聚居地；自身持有 Elfstone。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 1　Profile: 100　Menace: 0　XP: 3",
        "time": "1 回合",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "Shadow",
        "image": "/non-player-units/game/i_elfstone.png"
      },
      {
        "id": "crystalsmith-sell-elven-jewellery",
        "name": "Sell Elven Jewellery",
        "kind": "英雄任务",
        "text": "获得 50 Gold。",
        "location": "City；自身国家未成为 Dark Empire。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 5　Profile: 100　Menace: 0　XP: 12",
        "positiveTags": "Gold、Cooperation、Humanity",
        "negativeTags": "无",
        "image": "/non-player-units/game/bribe.png"
      },
      {
        "id": "crystalsmith-gift-elven-ruler-gold",
        "name": "Gift Elven Ruler Gold",
        "kind": "英雄任务",
        "text": "向统治者交出自身 Gold 的一半，向下取整。",
        "location": "有统治者的 Elven City；自身 Gold 超过 75。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 1　Profile: 100　Menace: 0　XP: 3",
        "time": "1 回合",
        "positiveTags": "Elves、Cooperation",
        "negativeTags": "Gold、Ambition",
        "image": "/non-player-units/game/bribe.png"
      }
    ]
  },
  {
    "id": "dwarven-warrior",
    "name": "Dwarven Warrior",
    "group": "矮人诸国",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属矮人国家",
    "stats": "Might: 2–4　Lore: 1–3　Intrigue: 1–3　Command: 2–4　HP: 6",
    "origin": "地下英雄补充检查每 5 回合执行；当世界上的矮人国家英雄少于 3 名时，在一处 Dwarven City 补充 Warrior，并将种族设为 Dwarf。",
    "behavior": "根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。",
    "skills": [
      {
        "id": "dwarven-warrior-dwarven-warrior",
        "name": "Dwarven Warrior",
        "text": "使用 Warrior 的基础属性与战斗成长，人物种族为 Dwarf。矮人英雄死于地下时，会在死亡地点留下 Evidence。"
      }
    ],
    "tasks": []
  },
  {
    "id": "acolyte",
    "name": "Acolyte",
    "group": "Holy Orders",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属 Holy Order",
    "stats": "Might: 1–3　Lore: 2–3　Intrigue: 1–3　Command: 2–3　HP: 5",
    "origin": "教团每逢回合数为 12 的倍数检查增员。低于人数上限且预算足够时，在本教团 Temple 或 Seat 所在地点生成；费用为 200 × 当前 Acolyte 人数，首名为 0。",
    "behavior": "偏好宗教任务，教义等级决定可执行的行动；教团之间的关系、个人偏好和威胁也影响决策。被控制后可以作为玩家 Agent 行动。",
    "skills": [
      {
        "id": "acolyte-holy-service",
        "name": "Holy Service",
        "text": "每回合应用本教团教义对人员的效果。非宗教任务、主动干扰与护卫行动受到额外负向评分。具体任务的可用范围及效果见下列卡片。"
      }
    ],
    "tasks": [
      {
        "id": "acolyte-holy-preach-faith",
        "name": "Holy: Preach Faith",
        "kind": "宗教任务",
        "text": "将当地宗教改为本教团，移除其他教团的宗教设施，并扣除传教费用。有 25% 概率提升一名合格英雄或统治者对本教团的偏好。\n完成时Profile +5。",
        "location": "人类聚居地；不信奉本教团，没有其他教团 Seat，允许传教且有足够传教预算。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 10　Profile: 40　Menace: 0　XP: 21",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "无",
        "image": "/non-player-units/game/temple.png"
      },
      {
        "id": "acolyte-holy-preach-to-ruler",
        "name": "Holy: Preach to Ruler",
        "kind": "宗教任务",
        "text": "消耗 100 Gold。优先提升统治者对本教团的偏好；已达到最高偏好时改为提高其对 Religion 的偏好。\n完成时Profile +5。",
        "location": "有统治者的人类聚居地；自身至少有 100 Gold。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 10　Profile: 40　Menace: 0　XP: 21",
        "positiveTags": "Religion、Ambition",
        "negativeTags": "无",
        "image": "/non-player-units/game/temple.png"
      },
      {
        "id": "acolyte-holy-build-temple",
        "name": "Holy: Build Temple",
        "kind": "宗教任务",
        "text": "建立本教团 Temple。费用为 50 ×（已有 Temple 数量 +1）。",
        "location": "信奉本教团的人类聚居地；有空设施位或可以替换其他教团 Temple，且建造预算足够。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 20　Profile: 60　Menace: 0　XP: 36",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "无",
        "image": "/non-player-units/game/temple.png"
      },
      {
        "id": "acolyte-holy-aware",
        "name": "Holy: Aware",
        "kind": "宗教任务",
        "text": "正等级将统治者 Awareness 设为 100%；负等级设为 0。",
        "location": "信奉本教团、有统治者的人类聚居地；Awareness 教义非 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 60　Menace: 0　XP: 36",
        "positiveTags": "Religion",
        "negativeTags": "无",
        "image": "/non-player-units/game/warnTheWorld.png"
      },
      {
        "id": "acolyte-holy-cure-plague",
        "name": "Holy: Cure Plague",
        "kind": "宗教任务",
        "text": "Plague −100。",
        "location": "信奉本教团、存在 Plague 的人类聚居地；Healers 为正等级。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 40　Menace: 0　XP: 49",
        "positiveTags": "Religion",
        "negativeTags": "Disease",
        "image": "/non-player-units/game/plagueImmunity.png"
      },
      {
        "id": "acolyte-holy-start-plague",
        "name": "Holy: Start Plague",
        "kind": "宗教任务",
        "text": "Plague +50；本教团 Temple 的 Menace +10。\n完成时Profile +10、Menace +10。",
        "location": "本教团 Temple 所在的人类聚居地；Healers 为负等级，Plague 低于 200。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 40　Profile: 40　Menace: 0　XP: 60",
        "positiveTags": "Religion、Disease",
        "negativeTags": "无",
        "image": "/non-player-units/game/plague.png"
      },
      {
        "id": "acolyte-holy-ward",
        "name": "Holy: Ward",
        "kind": "宗教任务",
        "text": "Ward +100。",
        "location": "信奉本教团的人类聚居地；Candles 为正等级，Ward 低于 100。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 40　Menace: 0　XP: 36",
        "positiveTags": "Religion",
        "negativeTags": "Shadow",
        "image": "/non-player-units/game/driveBackShadow.png"
      },
      {
        "id": "acolyte-holy-remove-ward",
        "name": "Holy: Remove Ward",
        "kind": "宗教任务",
        "text": "Ward −100。\n完成时Profile +3、Menace +8。",
        "location": "信奉本教团、存在 Ward 的人类聚居地；Candles 为负等级。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 40　Menace: 0　XP: 49",
        "positiveTags": "Religion、Shadow",
        "negativeTags": "无",
        "image": "/non-player-units/game/driveBackShadow.png"
      },
      {
        "id": "acolyte-holy-prophesy-doom",
        "name": "Holy: Prophesy Doom",
        "kind": "宗教任务",
        "text": "Madness +50。\n完成时Profile +10、Menace +10。",
        "location": "信奉本教团的人类聚居地；Doomsaying 为负等级，Madness 低于 200。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 25　Profile: 40　Menace: 0　XP: 42",
        "positiveTags": "Religion、Madness",
        "negativeTags": "无",
        "image": "/non-player-units/game/madness.png"
      },
      {
        "id": "acolyte-holy-memorial-service",
        "name": "Holy: Memorial Service",
        "kind": "宗教任务",
        "text": "Death −100。",
        "location": "存在 Death 的地点；Funerary Rites 非 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 50　Menace: 0　XP: 36",
        "positiveTags": "Religion",
        "negativeTags": "Undead、Disease",
        "image": "/non-player-units/game/death.png"
      },
      {
        "id": "acolyte-holy-funeral-rites",
        "name": "Holy: Funeral Rites",
        "kind": "宗教任务",
        "text": "移除这份 Human Soul，同时移除存活人物对该死者的 Mourning。",
        "location": "信奉本教团的人类聚居地中的 Human Soul；Funerary Rites 非 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 10　Profile: 60　Menace: 0　XP: 21",
        "positiveTags": "Religion",
        "negativeTags": "Shadow、Undead",
        "image": "/non-player-units/game/consacrate.png"
      },
      {
        "id": "acolyte-holy-charitable-works",
        "name": "Holy: Charitable Works",
        "kind": "宗教任务",
        "text": "建立强度 40 的 Reconstruction Effort。",
        "location": "信奉本教团、没有 Reconstruction Effort 的人类聚居地；Charity 为正等级。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 30　Profile: 50　Menace: 0　XP: 49",
        "positiveTags": "Religion、Cooperation",
        "negativeTags": "Cruelty",
        "image": "/non-player-units/game/reconstruction.png"
      },
      {
        "id": "acolyte-holy-military-fervour",
        "name": "Holy: Military Fervour",
        "kind": "宗教任务",
        "text": "Military Fervour +50。\n完成时Profile +3。",
        "location": "信奉本教团的 City；Crusader Faith 为正等级，Military Fervour 低于 100。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 40　Profile: 40　Menace: 0　XP: 60",
        "positiveTags": "Religion、Combat",
        "negativeTags": "无",
        "image": "/non-player-units/game/war.png"
      },
      {
        "id": "acolyte-holy-destroy-arcane-secret",
        "name": "Holy: Destroy Arcane Secret",
        "kind": "宗教任务",
        "text": "移除这份 Arcane Secret。",
        "location": "Arcane Secret 所在地点；Ignorance 非 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 60　Menace: 0　XP: 49",
        "positiveTags": "Religion",
        "negativeTags": "无",
        "image": "/non-player-units/game/arcaneSecret.png"
      },
      {
        "id": "acolyte-holy-explore-tunnels",
        "name": "Holy: Explore Tunnels",
        "kind": "宗教任务",
        "text": "Unrest +10、Madness +10，聚居地 Shadow +10 个百分点；增加 2 个百分点的地下认知。",
        "location": "任意可执行宗教任务的地点；Explore the Darkness 为负等级。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 40　Menace: 0　XP: 36",
        "positiveTags": "Religion、Madness",
        "negativeTags": "无",
        "image": "/non-player-units/game/tunnelsBeneath.png"
      },
      {
        "id": "acolyte-holy-promised-return",
        "name": "Holy: Promised Return",
        "kind": "宗教任务",
        "text": "将死者转化为 <CrossReference name=\"Vampire\" href=\"#entry-npc-vampire\" />，移除 Human Soul。",
        "location": "生前带 The Hunger 的人物留下的 Human Soul；The Feast 为负等级。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 10　Profile: 60　Menace: 0　XP: 21",
        "positiveTags": "Religion、Undead、Shadow",
        "negativeTags": "无",
        "image": "/non-player-units/game/theHunger.png"
      },
      {
        "id": "acolyte-holy-dark-worship",
        "name": "Holy: Dark Worship",
        "kind": "宗教任务",
        "text": "向外围的人类聚居地分配总计 60 个百分点的 Shadow，先填满较近的层级，再向更远处传播；Temple 的 Menace +10。Faith 超过 50 的地点会阻断传播。\n完成时Profile +4、Menace +12。",
        "location": "本教团 Temple；Dark Worship 为负等级。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 40　Profile: 50　Menace: 0　XP: 60",
        "positiveTags": "Shadow",
        "negativeTags": "无",
        "image": "/non-player-units/game/enshadow.png"
      }
    ]
  },
  {
    "id": "witch",
    "name": "Witch",
    "group": "Witches",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属 Witch Coven",
    "stats": "Might: 1–3　Lore: 2–3　Intrigue: 1–3　Command: 2–3　HP: 5",
    "origin": "Witch Coven 使用 Acolyte 的生成人数与预算规则，在本 Coven 的宗教地点产生。",
    "behavior": "使用 Acolyte 的宗教行动体系，并可执行 Arbormancy。教义与人物偏好决定其帮助还是侵蚀周边聚居地。",
    "skills": [
      {
        "id": "witch-coven",
        "name": "Coven",
        "text": "人物使用 UAA 的基础属性；显示称谓与归属由 Witch Coven 决定。通用行动与 <CrossReference name=\"Acolyte\" href=\"#entry-npc-acolyte\" /> 相同。"
      }
    ],
    "tasks": [
      {
        "id": "witch-holy-arbormancy",
        "name": "Holy: Arbormancy",
        "kind": "宗教任务",
        "text": "将受影响地点各地块的温度向 0.5 调整，单次移动当前差值的 25%。范围为执行地点及所有相邻地点。\n完成时Profile +10。",
        "location": "本 Coven 的宗教设施；Arbormancy 非 0。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 50　Profile: 50　Menace: 0　XP: 72",
        "positiveTags": "无",
        "negativeTags": "无",
        "image": "/non-player-units/game/give.png"
      }
    ]
  },
  {
    "id": "orc-upstart",
    "name": "Orc Upstart",
    "group": "Orc Hordes",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "所属 Orc Horde",
    "stats": "Might: 3　Lore: 1　Intrigue: 1　Command: 1　HP: 5",
    "origin": "Orc Horde 在营地生成，初始携带标识该 Horde 的 Horde Banner。",
    "behavior": "在本 Horde 的 Orc Camp 执行掠夺、休息和补充随从；每回合获得 3 XP，并自主分配技能点。Horde 消亡后自身也会消失。",
    "skills": [
      {
        "id": "orc-upstart-horde-banner",
        "name": "Horde Banner",
        "text": "初始持有本 Horde 的旗帜。可通过击杀后的战利品等方式取得该物品，用于与对应 Horde 交互。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/game/evil_orcUpstart.png"
  },
  {
    "id": "deep-one",
    "name": "Deep One",
    "group": "Deep Ones",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "黑暗势力／Deep Ones",
    "stats": "Might: 继承 +3　Lore: 继承　Intrigue: 继承　Command: 继承　HP: 5",
    "origin": "Call of the Abyss 推动人物完成 Descend into the Sea 或 Descend into the Deep 后转化；成熟的 Deep One Cult 也会使当地统治者转化。",
    "behavior": "先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。",
    "skills": [],
    "tasks": [
      {
        "id": "deep-one-start-deep-one-cult",
        "name": "Start Deep One Cult",
        "kind": "自主行动",
        "text": "创建强度 1 的 Deep One Cult；已有 Cult 时强度 +25。\n完成时Profile +10、Menace +10。",
        "location": "人类聚居地；自主寻路通常选择沿海地点。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 60　Profile: 10　Menace: 0　XP: 82",
        "image": "/non-player-units/game/deepOnes.png"
      }
    ],
    "image": "/non-player-units/game/evil_deepOne.png"
  },
  {
    "id": "ghast",
    "name": "Ghast",
    "group": "Undead",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "黑暗势力",
    "stats": "Might: 6　Lore: 4　Intrigue: 1　Command: 1　HP: 5",
    "origin": "Death 首次达到 300、触发危机时产生两只；Death: Death’s Shadow 也可召唤，召唤数值按下列公式变化。",
    "behavior": "寻找尚未完全 Enshadowed、Ward 很弱且没有 Faith 的人类聚居地，持续进行 Enshadow。",
    "skills": [
      {
        "id": "ghast-death-s-shadow",
        "name": "Death's Shadow",
        "text": "召唤时消耗至多 100 Death。令 A =（实际消耗 Death + 15 × 施法者 Death Mastery）÷10，则 Might = ⌊max(1, A ×0.5)⌋，Lore = ⌊max(1, A ×0.75)⌋，HP = ⌊max(1, A)⌋；Intrigue、Command 仍为 1。"
      }
    ],
    "tasks": [
      {
        "id": "ghast-enshadow",
        "name": "Enshadow",
        "kind": "自主行动",
        "text": "每回合增加 Shadow，基础增幅为 Lore ×0.2 个百分点，再乘 Ward 的剩余穿透比例；Profile +0.5、Menace +1.25。Shadow 达到 100% 时停止。",
        "location": "人类聚居地；引导时 Ward 过强或出现 Faith 会终止。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 32　Profile: 10　Menace: 0　XP: 51",
        "time": "持续引导",
        "image": "/non-player-units/game/enshadow.png"
      }
    ],
    "image": "/non-player-units/game/evil_ghast.png"
  },
  {
    "id": "vampire",
    "name": "Vampire",
    "group": "Undead",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "黑暗势力",
    "stats": "Might: 继承，转化后至少 4　Lore: 继承，转化后至少 4　Intrigue: 继承　Command: 继承　HP: 6",
    "origin": "对生前带 The Hunger 的 Human Soul 施放 Vampiric Curse，或由相应教团执行 Holy: Promised Return。",
    "behavior": "继承死者的人物属性、物品和特质，个人 Shadow 与 Awareness 设为 100%，种族转为 Undead，失去灵魂。自主吸血、侵蚀地点、建立 Well of Shadows、亵渎圣地或施放 Death’s Shadow。",
    "skills": [
      {
        "id": "vampire-the-hunger",
        "name": "The Hunger",
        "text": "转化时保留或补充 The Hunger。饥饿达到 50 时会考虑在当前合格聚居地 Feed；超过 100 时优先寻找可吸血的人类聚居地。"
      },
      {
        "id": "vampire-mastery-of-death",
        "name": "Mastery of Death",
        "text": "转化时获得至少 2 级 Death Mastery；转化函数还会把实际 Might 和 Lore 分别补足到至少 4。"
      },
      {
        "id": "vampire-command-of-vermin",
        "name": "Command of Vermin",
        "text": "每逢世界回合数为 5 的倍数，向空随从栏补充一只 Vermin。"
      }
    ],
    "tasks": []
  },
  {
    "id": "cave-spider",
    "name": "Cave Spider",
    "group": "野生生物",
    "baseGame": true,
    "source": "游戏本体",
    "faction": "无所属国家",
    "stats": "Might: 2　Lore: 1　Intrigue: 1　Command: 1　HP: 5",
    "origin": "游戏每 5 回合检查地下 Cave Spider；地图上没有存活个体时，在地下没有聚居地的陆地尝试补充。",
    "behavior": "攻击同地点的其他人物单位，并寻找相邻地下地点的猎物；空闲时在地下荒野移动。",
    "skills": [
      {
        "id": "cave-spider-regeneration",
        "name": "Regeneration",
        "text": "每逢世界回合数为 5 的倍数，受伤时恢复 1 HP。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/game/evil_caveSpider.png"
  },
  {
    "id": "abyssal-priest",
    "name": "Abyssal Priest",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "stats": "Might: 1　Lore: 4　Intrigue: 2　Command: 1　HP: 5",
    "origin": "在完全渗透、强度至少 50 的 Deep One Cult 执行 Summon Abyssal Priest；Cult 的 Menace +30。启用自动生成选项后，强度至少 100 的 Cult 也可在生成计时满足后按概率产生。",
    "behavior": "自主寻找沿海聚居地传播 Cult 或宣讲。初始 Shadow 为 100%，每回合 Profile +1、Menace +0.5。",
    "skills": [],
    "tasks": [
      {
        "id": "abyssal-priest-create-deep-one-cult",
        "name": "Create Deep One Cult",
        "kind": "自主行动",
        "text": "建立强度 1 的 Deep One Cult，随后自身消失。",
        "location": "尚无 Deep One Cult 的人类聚居地；自主寻路选择沿海地点。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 50　Profile: 0　Menace: 0　XP: 0",
        "image": "/non-player-units/game/deepOnes.png"
      },
      {
        "id": "abyssal-priest-abyssal-sermon",
        "name": "Abyssal Sermon",
        "kind": "自主行动",
        "text": "统治者对 Deep Ones 的偏好提高一级；对当地合格且尚未喜欢 Deep Ones 的人物逐个检查，每名有 5/9 概率提高一级，成功一名后停止。\n完成时Profile +10、Menace +10。",
        "location": "有人类统治者的聚居地。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 10　Menace: 0　XP: 0",
        "image": "/non-player-units/game/deepOnes.png"
      }
    ],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconAbyssalPriest.png"
  },
  {
    "id": "abyssal-ritualist",
    "name": "Abyssal Ritualist",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Deep Ones",
    "stats": "Might: 1　Lore: 4　Intrigue: 1　Command: 1　HP: 5",
    "origin": "在 Abyssal Sanctum 的 Abyssal Locus 强度至少 50、世界 Abyssal City 合计人口至少 5 时执行 Abyssal: Arcane Calling。消耗 5 Deep One 人口，Sanctum 的 Menace +30，引导期间每回合 Locus −1。也可由开启的自动生成选项产生。",
    "behavior": "自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。",
    "skills": [
      {
        "id": "abyssal-ritualist-abyssal-magic",
        "name": "Abyssal Magic",
        "text": "初始持有 Ritualist Shard 与 Abyssal Magic 特质，以 Shard 储存的资源施法；另有 2/19 概率携带 Abyssal Tome、5/19 概率携带 Concealed Dagger。"
      }
    ],
    "tasks": [
      {
        "id": "abyssal-ritualist-absorb-abyssal-charge",
        "name": "Absorb Abyssal Charge",
        "kind": "法术",
        "text": "每回合向 Shard 补充 10 资源，不超过容量；Locus 立即 −5，并另记一笔 −5 的变化，结算后合计 −10。\n完成时Profile +5、Menace +3。",
        "location": "Abyssal Locus 强度超过 5；持有 Ritualist Shard。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 50　Menace: 0　XP: 21",
        "time": "5 回合",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconAbyssalLocus.png"
      },
      {
        "id": "abyssal-ritualist-absorb-madness",
        "name": "Absorb Madness",
        "kind": "法术",
        "text": "每回合向 Shard 补充 10 资源，不超过容量；Madness 立即 −10，并另记一笔 −10 的变化，结算后合计 −20。\n完成时Profile +10、Menace +3。",
        "location": "Madness 超过 2；持有 Ritualist Shard。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 5　Profile: 150　Menace: 20　XP: 12",
        "time": "5 回合",
        "image": "/non-player-units/game/madnessUpsidedown.png"
      },
      {
        "id": "abyssal-ritualist-abyssal-siren-call-ritual",
        "name": "Abyssal Siren Call Ritual",
        "kind": "法术",
        "text": "让当地统治者与合格英雄对 Deep Ones 达到 Obsession；已有厌恶时改为进一步加深厌恶。Chosen One 不受影响。\n消耗 100 Shard 资源。\n完成时Profile +20、Menace +15。",
        "location": "有统治者的地点。 持有 Ritualist Shard，Abyssal Magic 资源至少 100。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 50　Menace: 0　XP: 49",
        "image": "/non-player-units/game/agony.png"
      },
      {
        "id": "abyssal-ritualist-abyssal-circulation-ritual",
        "name": "Abyssal Circulation Ritual",
        "kind": "法术",
        "text": "清空 Cult 的 Menace。先将原值取整，再按当地非 Chosen One 人物数整除，分给施法者以外的合格人物；仅有施法者时由其承担全部。\n消耗 50 Shard 资源。\n完成时Profile +10、Menace +15。",
        "location": "Deep One Cult 的 Menace 超过 10。 持有 Ritualist Shard，Abyssal Magic 资源至少 50。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 100　Menace: 0　XP: 49",
        "image": "/non-player-units/game/agony.png"
      },
      {
        "id": "abyssal-ritualist-abyssal-red-tide-ritual",
        "name": "Abyssal Red Tide Ritual",
        "kind": "法术",
        "text": "人口 −10、Death +10、Cult Menace +30。Cult 强度立即 +30，并另记一笔 +30 的变化，结算后合计 +60。\n消耗 60 Shard 资源。\n完成时Profile +10、Menace +20。",
        "location": "有 Deep One Cult、人口超过 30 的人类聚居地。 持有 Ritualist Shard，Abyssal Magic 资源至少 60。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 50　Menace: 0　XP: 49",
        "image": "/non-player-units/game/agony.png"
      },
      {
        "id": "abyssal-ritualist-abyssal-black-water-ritual",
        "name": "Abyssal Black Water Ritual",
        "kind": "法术",
        "text": "献祭统治者；Cult 获得 30 回合加速成熟，Profile +30。\n消耗 60 Shard 资源。\n完成时Profile +10、Menace +20。",
        "location": "有 Deep One Cult；统治者痴迷或仇恨 Deep Ones。 持有 Ritualist Shard，Abyssal Magic 资源至少 60。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 30　Profile: 50　Menace: 0　XP: 49",
        "image": "/non-player-units/game/agony.png"
      },
      {
        "id": "abyssal-ritualist-call-to-the-drowned",
        "name": "Call to the Drowned",
        "kind": "法术",
        "text": "召唤 ⌊Lore/2⌋ 名 <CrossReference name=\"Drowned Soul\" href=\"#entry-npc-drowned-soul\" /> 护卫施法者。\n完成时Profile +15、Menace +10。",
        "location": "Abyssal Ritualist 所在地点；若持有对应 Memento，会在召唤时消耗。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 10　Menace: 0　XP: 36",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconDrownedSoul.png"
      }
    ],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconAbyssalRitualist.png"
  },
  {
    "id": "drowned-prophet",
    "name": "Drowned Prophet",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Drowned Prophet 教团与所属国家",
    "stats": "Might: 1　Lore: 5　Intrigue: 1　Command: 5　HP: 初始 4；上限 4 + 控制地点数",
    "origin": "Drowned Prophet Cult 达到 300 时出现；持有 Abyssal Tome 的玩家 Agent 也可在 Shadow 100%、有 Deep One Cult 的人类聚居地执行 Summon Drowned Prophet，消耗 Tome。已有竞争实体教派或其已经被击败时受限。",
    "behavior": "默认自主行动，优先施放 Hymn、维持自身国家并防御入侵。Direct Control 可让玩家接管，Relinquish Control 可恢复自主状态。",
    "skills": [
      {
        "id": "drowned-prophet-deep-one-entity",
        "name": "Deep One Entity",
        "text": "属于 Deep One，无灵魂，个人 Shadow 为 100%；带两名 Faceless Servitor。所属势力失去全部领土时死亡。"
      }
    ],
    "tasks": [
      {
        "name": "Declare War",
        "text": "使 Drowned Prophet 的势力向当地人类国家宣战。Dark Empire 不在实际宣战目标内。\n完成时 Profile +15、 Menace +20。",
        "location": "所属势力以外、有国家控制的地点。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 5　Profile: 0　Menace: 0　XP: 12",
        "time": "5 回合",
        "id": "drowned-prophet-0",
        "kind": "自主行动",
        "image": "/non-player-units/game/raze.png"
      },
      {
        "name": "Silent Prayer",
        "text": "Silent Prayers 教义启用且自身 Menace 大于 0 时，自身 Menace −10，所属势力 Menace −1，均不低于 0。",
        "location": "自身势力领土内。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 10　Profile: 50　Menace: 0　XP: 21",
        "id": "drowned-prophet-1",
        "kind": "法术",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png"
      },
      {
        "name": "From the Waters",
        "text": "消耗 1 人口，生成 4 名自主行动的 Breathless。\n完成时 Profile +2、 Menace +3。",
        "location": "自身势力内人口大于 1 的聚居地。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 20　Profile: 60　Menace: 0　XP: 36",
        "id": "drowned-prophet-2",
        "kind": "法术",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png"
      },
      {
        "name": "Gather Breathless",
        "text": "消耗 ⌊人口/2⌋ 人口，生成 HP 为该消耗量两倍的 Breathless Horde。\n完成时 Profile +5、 Menace +5。",
        "location": "自身势力内人口大于 1 的聚居地。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 20　Profile: 60　Menace: 0　XP: 36",
        "id": "drowned-prophet-3",
        "kind": "法术",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconBreathlessHorde.png"
      },
      {
        "name": "Hymn of the Drowned",
        "text": "夺取相邻的合格人类聚居地，杀死当地统治者，并各生成 15 HP 的 Breathless Horde。所属势力 Menace +5。\n完成时 Profile +15、 Menace +7。",
        "location": "自身势力的 Abyssal Tower；已启用第 1 Hymn，且邻接其他势力的人类聚居地。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 40　Profile: 90　Menace: 0　XP: 60",
        "id": "drowned-prophet-4",
        "kind": "法术",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png"
      },
      {
        "name": "Hymn of Transformation",
        "text": "把势力内各合格聚居地的人口设为 ⌊(原人口 −3)/4⌋，将这些数值之和加入一处 Abyssal City；没有可用城市时尝试在海洋创建。施法期间每回合自身 Menace +1.5；完成后所属势力 Menace +10，并允许教团自行生成 Breathless。\n完成时 Profile +40、 Menace +20。",
        "location": "自身势力的 Abyssal Tower；已启用第 2 Hymn，且有合格人口。仅能使用一次。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 50　Profile: 60　Menace: 0　XP: 72",
        "id": "drowned-prophet-5",
        "kind": "法术",
        "image": "/non-player-units/game/deepOneCity.png"
      },
      {
        "name": "Hymn of Swords",
        "text": "在每个非空 Abyssal City 生成 HP 为当地人口三倍的 Breathless Horde，并向符合条件的国家宣战。Dark Empire、Witches 与 Ophanim 的教团不在宣战目标内。\n完成时 Profile +50、 Menace +50。",
        "location": "自身势力的 Abyssal Tower；已启用第 3 Hymn，且世界上有非空 Abyssal City。仅能使用一次。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 25　Profile: 60　Menace: 0　XP: 42",
        "id": "drowned-prophet-6",
        "kind": "法术",
        "image": "/non-player-units/game/war.png"
      }
    ],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png"
  },
  {
    "id": "breathless",
    "name": "Breathless",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Drowned Prophet 所属势力",
    "stats": "Might: 1　Lore: 3　Intrigue: 3　Command: 1　HP: 5",
    "origin": "由 Drowned Prophet 消耗 1 人口召唤 4 名；启用相应 Hymn 后，教团还可自行补充。",
    "behavior": "Undead，无灵魂，个人 Shadow 为 100%。自主建设和拆除 Abyssal Tower，并将人类人口转移到 Abyssal City。",
    "skills": [],
    "tasks": [
      {
        "id": "breathless-construct-abyssal-tower",
        "name": "Construct Abyssal Tower",
        "kind": "自主行动",
        "text": "建造 Abyssal Tower，扩展 Drowned Prophet 的施法网络。\n完成时Profile +15、Menace +10。",
        "location": "本势力人类聚居地；当地没有 Abyssal Tower，也不能紧邻普通 Tower。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 10　Profile: 40　Menace: 10　XP: 21",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconAbyssalTower.png"
      },
      {
        "id": "breathless-drowning-ceremonies",
        "name": "Drowning Ceremonies",
        "kind": "自主行动",
        "text": "转移随机 1–5 人口到 Abyssal City；没有合适城市时尝试在海洋建立。将当地改信 Drowned Prophet。\n完成时Profile +15、Menace +10。",
        "location": "本势力人口超过 6 的人类聚居地；Abyssal Cities 教义为 −1。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 40　Menace: 0　XP: 36",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png"
      },
      {
        "id": "breathless-dismantle-abyssal-tower",
        "name": "Dismantle Abyssal Tower",
        "kind": "自主行动",
        "text": "移除这座 Abyssal Tower。\n完成时Profile +15、Menace +10。",
        "location": "本势力普通 Abyssal Tower；不拆除 Landing，且 Prophet 未在进行其他有效施法。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 10　Profile: 40　Menace: 0　XP: 21",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconAbyssalTower.png"
      }
    ],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png"
  },
  {
    "id": "drowned-soul",
    "name": "Drowned Soul",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "召唤者一方",
    "stats": "Might: 4　Lore: 1　Intrigue: 1　Command: 1　HP: 5",
    "origin": "通过 Call to the Drowned 从 Memento 或 Abyssal Ritualist 召唤。",
    "behavior": "Undead，个人 Shadow 为 100%。每回合传送到存活召唤者的位置并护卫；失去召唤者后转为敌对自主行动，Menace 每回合 +10。",
    "skills": [],
    "tasks": [],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconDrownedSoul.png"
  },
  {
    "id": "inundai-emissary",
    "name": "Inundai Emissary",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Inundai",
    "stats": "Might: 0　Lore: 4　Intrigue: 2　Command: 2　HP: 5",
    "origin": "Inundai Cult 成熟或通过 Abyssal Tome 的召唤产生；Palace 每隔 50 回合按人口条件补充新的 Emissary。",
    "behavior": "个人 Shadow 为 100%，没有灵魂；使用共享 Hunger 驱动对 Cult、Madness 与人口的索取。若所有 Inundai Presence 均被封锁且 Hunger 大于 0，Emissary 将全部死亡。",
    "skills": [
      {
        "id": "inundai-emissary-inundai",
        "name": "Inundai",
        "text": "Hunger 每回合 +0.3；通过吸收 Madness、Cult 强度、Deep One 人口带来的收益及讨债降低。行动也可增加 Hunger，具体见下列卡片。"
      }
    ],
    "tasks": [
      {
        "id": "inundai-emissary-establish-inundai-presence",
        "name": "Establish Inundai Presence",
        "kind": "自主行动",
        "text": "建立 Inundai Presence；Hunger 增加 25 + 2 × 世界已有 Presence 数。\n完成时Menace +2。",
        "location": "没有 Inundai Presence 的沿海人类聚居地。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 1 + 2 × 世界已有 Presence 数　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaicult.png"
      },
      {
        "id": "inundai-emissary-feed-off-madness",
        "name": "Feed Off Madness",
        "kind": "自主行动",
        "text": "每回合 Hunger −10、Madness −1；处理后仍饥饿时 Greed +5。\n完成时Menace +2。",
        "location": "未封锁的 Inundai Presence；Madness 大于 0。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 5　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/game/madnessUpsidedown.png"
      },
      {
        "id": "inundai-emissary-feed-off-deep-ones",
        "name": "Feed Off Deep Ones",
        "kind": "自主行动",
        "text": "每回合 Hunger 减少当地人口数，不扣除人口；处理后仍饥饿时 Greed +2。\n完成时Menace +2。",
        "location": "有人口的 Abyssal City。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaideepone.png"
      },
      {
        "id": "inundai-emissary-feed-on-cult",
        "name": "Feed on Cult",
        "kind": "自主行动",
        "text": "每回合 Hunger −4、Cult 强度 −2。\n完成时Menace +2。",
        "location": "Deep One Cult 强度超过 1。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 4　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaideepone.png"
      },
      {
        "id": "inundai-emissary-intensify-abyssal-call",
        "name": "Intensify Abyssal Call",
        "kind": "自主行动",
        "text": "该统治者的 Call of the Abyss +50；Hunger +25。\n完成时Menace +2。",
        "location": "带 Call of the Abyss 的统治者所在聚居地。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/game/deepOnes.png"
      },
      {
        "id": "inundai-emissary-indebted-deeds",
        "name": "Indebted Deeds",
        "kind": "自主行动",
        "text": "建立 False Courts；已有时强度 +20。Hunger +40。\n完成时Menace +2。",
        "location": "未封锁的 Inundai Presence。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundainoble.png"
      },
      {
        "id": "inundai-emissary-call-to-palace",
        "name": "Call to Palace",
        "kind": "自主行动",
        "text": "移走 max(1, ⌊当前人口 ×30%⌋) 人口，组成 Entranced Crowd 前往 Palace；Hunger +10。",
        "location": "有 Coral Statues 的人类聚居地。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 5　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaicrowd.png"
      },
      {
        "id": "inundai-emissary-attract-deep-ones",
        "name": "Attract Deep Ones",
        "kind": "自主行动",
        "text": "从其他非空 Abyssal City 各移走 max(1, ⌊人口 ×50%⌋)，组成 Entranced Deep Ones；空城化为废墟。Hunger +100，自己的 Profile、Menace 归零。\n完成时Profile +5、Menace +10。",
        "location": "Inundai 的 Palace。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaideepone.png"
      },
      {
        "id": "inundai-emissary-recollect-on-debt",
        "name": "Recollect on Debt",
        "kind": "自主行动",
        "text": "令 R = ⌊债务/2⌋，Hunger 减少 2R 并清除债务。对未支付的统治者可增加 Coral Statues、诱发疯狂及 Call of the Abyss；对欠债英雄增加 25 Call of the Abyss 并减少 5 Sanity。\n完成时Menace +2。",
        "location": "有欠债人物的地点。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 5　Profile: 100　Menace: 0　XP: 0",
        "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundaipresence.png"
      }
    ],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconinundai.png"
  },
  {
    "id": "coraling",
    "name": "Coraling",
    "group": "Deep Ones Plus",
    "baseGame": false,
    "source": "Deep Ones Plus",
    "faction": "Deep Ones／Coral Mass",
    "stats": "Might: 4　Lore: 0　Intrigue: 0　Command: 0　HP: 8",
    "origin": "Coral Mass 每逢世界回合数为 3 的倍数，检查并补充至最多 7 名存活 Coraling。",
    "behavior": "围绕母体及相邻地点活动；每回合当地 Death +8。母体死亡后，自身在下一次自主决策时死亡。个人 Shadow 为 100%，没有灵魂。",
    "skills": [],
    "tasks": [],
    "image": "/non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png"
  },
  {
    "id": "broodmother",
    "name": "Broodmother",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 3–4　Lore: 1　Intrigue: 1　Command: 3–4　HP: 6",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n明亮形态在家园织网，黑暗形态还会侵入人类聚居地织网。",
    "skills": [
      {
        "id": "broodmother-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "broodmother-spider-queen",
        "name": "Spider Queen",
        "text": "初始随从：3 只 Spiderling。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      },
      {
        "id": "broodmother-reclusive-monster-agitated-monster",
        "name": "Reclusive Monster / Agitated Monster",
        "text": "明亮形态织网间隔 50 回合，黑暗形态为 15 回合；在合格地点留下 Web。织网 Profile +8，若在人类聚居地再额外 +7。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/nature.unit_broodmother_dark.png"
  },
  {
    "id": "dryad",
    "name": "Dryad",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 2–3　Lore: 3–4　Intrigue: 1–3　Command: 2–4　HP: 6",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n选择受伤人物及受灾地点提供治疗；黑暗形态同时传播 Shadow。",
    "skills": [
      {
        "id": "dryad-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "dryad-bonds-of-nature",
        "name": "Bonds of Nature",
        "text": "初始随从：1 只 Sprite。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      },
      {
        "id": "dryad-gentle-spirit-vinervite-spirit-heal-hero",
        "name": "Gentle Spirit / Vinervite Spirit — Heal Hero",
        "text": "自主移动到受伤人物处，引导 3 回合，恢复至多 3 HP；黑暗形态还增加 50 个百分点个人 Shadow。引导期间每回合自身 Profile +10。"
      },
      {
        "id": "dryad-gentle-spirit-vinervite-spirit-heal-location",
        "name": "Gentle Spirit / Vinervite Spirit — Heal Location",
        "text": "在人类聚居地引导 10 回合：Devastation −75、Plague −75，并增加 25 Stockpiled Food。黑暗形态在确有 Plague 或 Devastation 被处理时，使地点 Shadow +50 个百分点。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/nature.unit_dryad_dark.png"
  },
  {
    "id": "fairy",
    "name": "Fairy",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 1–2　Lore: 3–4　Intrigue: 3–4　Command: 3–4　HP: 6",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n对人物或统治者施加魅惑。",
    "skills": [
      {
        "id": "fairy-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "fairy-bonds-of-nature",
        "name": "Bonds of Nature",
        "text": "初始随从：2 只 Sprite。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      },
      {
        "id": "fairy-enigmatic-fey-cruel-fey",
        "name": "Enigmatic Fey / Cruel Fey",
        "text": "对人物引导 4 回合，对统治者引导 10 回合；明亮形态提高 Nature 偏好一级，黑暗形态提高一个随机黑暗标签的偏好。完成时 Profile +5。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/nature.unit_fairy_dark.png"
  },
  {
    "id": "great-stag",
    "name": "Great Stag",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 4–6　Lore: 1–3　Intrigue: 1　Command: 1　HP: 8",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n明亮形态在荒野游荡；黑暗形态侵扰外围、破坏 Outpost，并攻击 Destructive Industry。",
    "skills": [
      {
        "id": "great-stag-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "great-stag-bonds-of-nature",
        "name": "Bonds of Nature",
        "text": "初始随从：1 只 Sprite。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      },
      {
        "id": "great-stag-spirit-of-bounty-spirit-of-rage",
        "name": "Spirit of Bounty / Spirit of Rage",
        "text": "明亮形态被非玩家人物杀死时，击杀者家园 Stockpiled Food +50、Shadow −50 个百分点；被玩家单位杀死时，全部玩家 Agent 获得 100 XP。\n黑暗形态被玩家单位杀死时，当地 Shadow +100 个百分点，并增加 100 Well of Shadows。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/nature.unit_stag_dark.png"
  },
  {
    "id": "unicorn",
    "name": "Unicorn",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 3–4　Lore: 3–4　Intrigue: 1–2　Command: 3–4　HP: 6",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n明亮形态为周边人类聚居地施加 Ward；黑暗形态倾向建立 Well of Shadows。",
    "skills": [
      {
        "id": "unicorn-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "unicorn-bonds-of-nature",
        "name": "Bonds of Nature",
        "text": "初始随从：3 只 Sprite。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      }
    ],
    "tasks": [
      {
        "id": "unicorn-place-ward",
        "name": "Place Ward",
        "kind": "自主行动",
        "text": "Ward +100。",
        "location": "没有 Ward 的合格人类聚居地。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 40　Menace: 0　XP: 36",
        "image": "/non-player-units/game/driveBackShadow.png"
      }
    ],
    "image": "/non-player-units/mod/nature.unit_unicorn_dark.png"
  },
  {
    "id": "werewolf-hermit",
    "name": "Werewolf",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "野生生物",
    "stats": "Might: 3–4　Lore: 1–2　Intrigue: 1–2　Command: 3–4　HP: 6",
    "origin": "启用对应生物选项后，世界每 10 回合检查野生生物数量；低于荒野地点数量的 15% 时，尝试在荒野生成一只，优先远离其他生物家园。",
    "behavior": "初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。\n明亮形态驱逐荒野闯入者；黑暗形态袭击荒野及周边的非玩家人物，面对强敌时可先潜行跟踪。",
    "skills": [
      {
        "id": "werewolf-hermit-wilderness-creature",
        "name": "Wilderness Creature",
        "text": "以荒野为家园，在附近寻找行动目标；世界不再有荒野时死亡。"
      },
      {
        "id": "werewolf-hermit-lupine-dominion",
        "name": "Lupine Dominion",
        "text": "初始随从：3 只 Wolf。每逢世界回合数为 5 的倍数，若有空栏且 Command 足够，补充一只对应随从。"
      },
      {
        "id": "werewolf-hermit-territorial-beast",
        "name": "Territorial Beast",
        "text": "明亮形态骚扰不属于野生生物、狼人或 Nature 爱好者的侵入者，忽略 Witch。被骚扰者每回合失去 1 HP；只剩 1 HP 时下一次会死亡，通常会尝试逃往人类聚居地。"
      },
      {
        "id": "werewolf-hermit-infectious-curse",
        "name": "Infectious Curse",
        "text": "黑暗形态可跟踪目标 5 回合后传染 Lycanthropy；传染冷却 60 回合。受到具有传染性的狼人或其随从攻击也可感染。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/nature.unit_werewolf_dark.png"
  },
  {
    "id": "infected-werewolf",
    "name": "Werewolf — Lycanthropy",
    "group": "Living Wilds",
    "baseGame": false,
    "source": "Living Wilds",
    "faction": "继承原人物所属势力",
    "stats": "Might: 继承，兽形至少 3　Lore: 继承　Intrigue: 继承　Command: 继承　HP: 继承；没有原单位的统治者为 5 + 人物等级",
    "origin": "非 Chosen One 人物感染 Lycanthropy 后，于 Blood Moon 变为兽形。默认周期 50 回合、兽形持续 20 回合，可被配置调整。",
    "behavior": "非自愿感染者使用野兽的自主行为；自愿感染的英雄与宗教人员保留对应决策体系。兽形结束后恢复原单位。",
    "skills": [
      {
        "id": "infected-werewolf-feral-might",
        "name": "Feral Might",
        "text": "兽形 Might 至少为 3；携带三只 Wolf，并按 Command 容量每 5 回合向空栏补充一只。"
      },
      {
        "id": "infected-werewolf-infectious-curse",
        "name": "Infectious Curse",
        "text": "战斗伤害可传播 Lycanthropy，传染冷却 60 回合；进入兽形会重置冷却。女巫诅咒来源受限，Chosen One 不会变为狼人。"
      },
      {
        "id": "infected-werewolf-voluntary-transformation",
        "name": "Voluntary Transformation",
        "text": "自愿感染的英雄形态继承四项人物属性。自愿感染的教团人员会重新随机基础值：Might 1–3、Lore 2–3、Intrigue 1–3、Command 2–3，再应用兽形特质；HP 由转化流程恢复为原值。"
      }
    ],
    "tasks": [
      {
        "id": "infected-werewolf-hunt-in-outskirts",
        "name": "Hunt In Outskirts",
        "kind": "自主行动",
        "text": "Werewolf Population +10、Devastation +100、Death +25。\n完成时Profile +10、Menace +25。",
        "location": "Farming Community、Fortress 或 Holy Site；Devastation 低于 150。",
        "meta": "使用属性：Might",
        "statLine": "Complexity: 15　Profile: 10　Menace: 0　XP: 29",
        "image": "/non-player-units/mod/nature.property_werewolfpack_active.png"
      }
    ],
    "image": "/non-player-units/mod/nature.unit_werewolf_m.png"
  },
  {
    "id": "carrier-pigeon",
    "name": "Carrier Pigeon",
    "group": "Covens, Curses & Curios Recast",
    "baseGame": false,
    "source": "Covens, Curses & Curios Recast",
    "faction": "信鸽主人一方",
    "stats": "Might: 1　Lore: 1　Intrigue: 0　Command: 0　HP: 1",
    "origin": "主人拥有 Carrier Pigeon 随从时，选择收件人物并派遣，随后装载物品及 Gold。",
    "behavior": "追踪收件人当前位置，抵达后打开交接界面，再飞回主人处交接余物；若有空随从栏与足够 Command，归队为原信鸽随从，否则被放走。",
    "skills": [],
    "tasks": []
  },
  {
    "id": "toad",
    "name": "Toad",
    "group": "Covens, Curses & Curios Recast",
    "baseGame": false,
    "source": "Covens, Curses & Curios Recast",
    "faction": "继承被诅咒者势力",
    "stats": "Might: 继承 −3　Lore: 继承 −3　Intrigue: 继承 −3　Command: 继承 −3　HP: 5",
    "origin": "Toad Curse 将合格的非玩家英雄或教团人员转为 Toad；Chosen One 不受影响。默认诅咒倒计时为 10 回合。",
    "behavior": "移除原随从，Attack −3；倒计时结束恢复原单位。兽形被杀则人物死亡，可以留下 Human Soul。",
    "skills": [],
    "tasks": [
      {
        "id": "toad-croak",
        "name": "Croak!",
        "kind": "自主行动",
        "text": "无效果。",
        "location": "任意地点。",
        "meta": "使用属性：固定进度",
        "statLine": "Complexity: 10　Profile: 10　Menace: 0　XP: 21",
        "time": "持续执行",
        "image": "/non-player-units/game/enshadow.png"
      }
    ],
    "image": "/non-player-units/mod/CovenExpansionRecast.Icon_FrogCurse.png"
  },
  {
    "id": "orc-elder",
    "name": "Orc Elder",
    "group": "Orcs Plus",
    "baseGame": false,
    "source": "Orcs Plus",
    "faction": "Orc Culture",
    "stats": "Might: 2–3　Lore: 1–3　Intrigue: 1–2　Command: 3–5　HP: 5",
    "origin": "Orc Culture 未达到人员上限时，按生成计时补充：随机 15–25 回合，加上每名已有人员 10 回合。",
    "behavior": "Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。",
    "skills": [
      {
        "id": "orc-elder-revered-elder",
        "name": "Revered Elder",
        "text": "倒计时结束、Command 至少 3 且尚无护卫时，获得 Orc Champion；必要时解散其他随从腾出空间。Champion 的 HP 5、Attack 6、Defence 5、Command 3。"
      }
    ],
    "tasks": [
      {
        "id": "orc-elder-orcish-gift",
        "name": "Orcish Gift",
        "kind": "宗教任务",
        "text": "消耗 20 Gold；所属 Horde Menace −2，提高统治者对 Orcs 与 Gold 的偏好。负面的国家外交关系可向中立改善。\n完成时Profile +5。",
        "location": "有人类统治者的聚居地；自身至少持有 20 Gold。",
        "meta": "使用属性：Intrigue + Command",
        "statLine": "Complexity: 15　Profile: 0　Menace: 0　XP: 29",
        "positiveTags": "Cooperation",
        "negativeTags": "Combat、Cruelty、Danger、Discord、Gold",
        "image": "/non-player-units/game/bribe.png"
      },
      {
        "id": "orc-elder-holy-reprimand-orc-upstart",
        "name": "Holy: Reprimand Orc Upstart",
        "kind": "宗教任务",
        "text": "召回 Orc Upstart，令其休息、恢复 HP，并在约束期间快速减少 Profile 与 Menace。",
        "location": "本族营地的 Great Hall 或 Seat of the Elders；本族 Orc Upstart 过度暴露。",
        "meta": "使用属性：Command",
        "statLine": "Complexity: 2 × Orc Upstart 的 Command；没有 Upstart 时为 10　Profile: 0　Menace: 0　XP: ⌊max(1, 6 × Complexity)^0.75⌋",
        "positiveTags": "Cooperation、Religion、Orcs",
        "negativeTags": "Ambition、Combat、Cruelty、Discord",
        "image": "/non-player-units/mod/OrcsPlus.Icon_GreatHall.png"
      },
      {
        "id": "orc-elder-holy-cleansing-festival",
        "name": "Holy: Cleansing Festival",
        "kind": "宗教任务",
        "text": "每回合以行动进度 P 计算：从相邻地点吸取最多 0.5P 个百分点 Shadow，再净化本地 2.5P 个百分点，并净化相关人物 Shadow。\n自身 Profile +1、Menace −4；Horde Menace −1。",
        "location": "本族 Orc Camp；Shadow Weaving 为正等级，Shadow 超过 5%。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 0　Menace: 0　XP: 36",
        "time": "持续执行",
        "positiveTags": "无",
        "negativeTags": "Shadow",
        "image": "/non-player-units/game/festival.png"
      },
      {
        "id": "orc-elder-holy-dark-festival",
        "name": "Holy: Dark Festival",
        "kind": "宗教任务",
        "text": "每回合以行动进度 P 计算：本地 Shadow +2.5P 个百分点，向 Shadow 更低的相邻地点各扩散最多 0.5P 个百分点，并侵蚀相关人物。\n自身 Profile +1、Menace +2；Horde Menace +0.5。",
        "location": "本族 Orc Camp；Shadow Weaving 为 −2，Shadow 未满。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 0　Menace: 0　XP: 36",
        "time": "持续执行",
        "positiveTags": "Shadow",
        "negativeTags": "无",
        "image": "/non-player-units/game/enshadow.png"
      }
    ],
    "image": "/non-player-units/mod/OrcsPlus.Foreground_OrcElder.png"
  },
  {
    "id": "spirit-caller",
    "name": "Spirit Caller",
    "group": "Orcs Plus",
    "baseGame": false,
    "source": "Orcs Plus",
    "faction": "所属 Orc Horde",
    "stats": "Might: 2–3　Lore: 3–5　Intrigue: 2　Command: 3　HP: 5",
    "origin": "在 Mage Camp 产生。营地没有驻守 Shaman 时，根据配置的补充概率重新生成；地图初始化也会设置。",
    "behavior": "Orc，无灵魂，每回合获得 3 XP；自主研究 Death、收集并使用死亡资源、招募亡灵随从。",
    "skills": [
      {
        "id": "spirit-caller-mastery-of-death",
        "name": "Mastery of Death",
        "text": "初始 Death Mastery 2 级，Arcane Knowledge 0 级；可使用符合地点与等级要求的 Death 法术。"
      }
    ],
    "tasks": [
      {
        "id": "spirit-caller-sacrifice-to-the-earth",
        "name": "Sacrifice to the Earth",
        "kind": "自主行动",
        "text": "建立强度 50 的 Sacrificial Site。\n完成时Profile +4、Menace +12。",
        "location": "Devastation 至少 100、没有 Sacrificial Site 的人类聚居地。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 20　Profile: 10　Menace: 20　XP: 36",
        "image": "/non-player-units/game/harvest.png"
      },
      {
        "id": "spirit-caller-sacrificial-festival",
        "name": "Sacrificial Festival",
        "kind": "自主行动",
        "text": "令 P = max(1, Lore − Security/2)。每回合 Death +P、Devastation +0.35P、Sacrificial Site −2；自身 Profile +1、Menace +2，Horde Menace +0.5。",
        "location": "有 Sacrificial Site 的人类聚居地。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 40　Profile: 0　Menace: 0　XP: 60",
        "time": "持续执行",
        "image": "/non-player-units/game/skull.png"
      },
      {
        "id": "spirit-caller-festival-of-war",
        "name": "Festival of War",
        "kind": "自主行动",
        "text": "根据本地及相邻营地高于 25 的 Industry 产生 Death；每个营地单次最多按 1.7 × 行动进度折算。当前实现只在接近 25 的分支扣减 Industry，其他分支仍会产生 Death。\n自身 Profile 每回合 +0.5、Menace +1.5；Horde Menace +0.25。",
        "location": "本族 Orc Camp；当地 Death 低于 300，本地或相邻营地 Industry 超过 25。",
        "meta": "使用属性：Lore",
        "statLine": "Complexity: 15　Profile: 0　Menace: 0　XP: 29",
        "time": "持续执行",
        "image": "/non-player-units/game/death.png"
      }
    ],
    "image": "/non-player-units/mod/OrcsPlus.Foreground_OrcShaman.png"
  },
  {
    "id": "redeemed",
    "name": "THE REDEEMED",
    "group": "Redeemer Agent",
    "baseGame": false,
    "source": "Redeemer Agent",
    "faction": "继承 The Redeemer 的所属国家",
    "stats": "Might: 继承 +1　Lore: 继承 +1　Intrigue: 继承 +1　Command: 继承 +1，再加 Chosen One 特质　HP: 继承最大 HP，并恢复至满",
    "origin": "现任 Chosen One 死亡、游戏尚未结束、The Redeemer 已存在时，由继任钩子将其转为自主英雄。该钩子检查死者首个特质是否为真正的 Chosen One。",
    "behavior": "脱离玩家控制，保留人物等级、XP、物品、随从及家乡，返还 1 招募点（最多 3）；Shadow 归零，最大 Sanity +5。拥有英雄及 Chosen One 的任务权限。",
    "skills": [
      {
        "id": "redeemed-chosen-one",
        "name": "Chosen One",
        "text": "默认特质 1 级，Command +4、Attack +1、Defence +2；具备 <CrossReference name=\"Chosen One\" href=\"#entry-npc-chosen-one\" /> 的预言与净化能力。"
      },
      {
        "id": "redeemed-unwanted-hero",
        "name": "Unwanted Hero",
        "text": "若原人物带此特质，Menace 每回合回落至最低值。若还保留 Hopeless Future，XP 每回合归零。"
      }
    ],
    "tasks": [],
    "image": "/non-player-units/mod/redeemer.Redeemer_Icon.png"
  }
];
