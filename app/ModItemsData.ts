import type { ItemCategory } from "./ItemCatalogTypes";

// Current installed workshop DLLs; see AUDIT-2026-09-21-mod-items.md.
export const modItemSections: ItemCategory[] = [
  {
    "id": "mod-items-2866026291",
    "title": "Ixthus, King of cups",
    "media": true,
    "items": [
      {
        "name": "Holy Grail",
        "text": "持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。\nSell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。",
        "acquisition": "在 the Elder Tomb 完成 Quest for the Grail 获得；Seek the Grail 会引导英雄前往该地点。\nAgent 获得 Stolen Waters 特质时，物品栏前两格各放入一个 Holy Grail。",
        "id": "mod-2866026291-i-holygrail",
        "image": "./mod-items/2866026291/grail_item_0.png"
      }
    ]
  },
  {
    "id": "mod-items-2879249746",
    "title": "Living Void God",
    "media": true,
    "items": [
      {
        "name": "Voidstone",
        "text": "Something from Nothing：消耗一枚，使持有者与全部随从各恢复 2 HP，最高至各自上限。\nPlant Voidstone：在人类聚居地渗透率至少 50%、且没有 Hungry Rift 或 Hidden Voidstone 时，消耗物品建立 Hidden Voidstone。\n持有者若具有 Dimensional Insights，每枚提供 Lore +1；携带它也可满足 Warp Light 与 Shattered Light 的施放条件。",
        "acquisition": "在 Living Void 所在地执行 Nothing from Something：需要 HP > 2，消耗 2 HP，取得一枚。",
        "id": "mod-2879249746-i-voidstone",
        "image": "./mod-items/2879249746/void_stone.png"
      }
    ]
  },
  {
    "id": "mod-items-2879667447",
    "title": "Deep Ones Plus",
    "media": true,
    "items": [
      {
        "name": "Abyssal Tome",
        "text": "允许持有者建立 Deep One Cult，并进行 Prophet、Inundai 等相关深海仪式。\n非玩家控制、且非 Chosen One 的持有者，每 12 回合提高一档对 Deep Ones 的偏好，直至极度喜爱。",
        "acquisition": "Abyssal Ritualist 生成时有 2/19 概率携带。\n同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Physician 或 Alienist 的灵魂炼成。\n在 Abyssal Locus 执行 Abyssal: Gifts from the Sea，或由玩家 Agent 执行 Scavenge Abyssal Corpse，每次完成有 10% 概率获得本物品。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。",
        "id": "mod-2879667447-i-abyssaltome",
        "image": "./mod-items/2879667447/iconItemAbyssalTome.png"
      },
      {
        "name": "Drowned Memento",
        "text": "提供 Necromancy: Call to the Drowned：持有者须有 Mastery of Death 至少 1 级，在与聚居地或废墟直接相邻的海洋地点施法。消耗物品，召唤数量等于 Lore/2 向下取整的 Drowned Souls 保护施法者；施法者死亡后，它们会攻击附近人物。",
        "acquisition": "同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Mediator 的灵魂炼成。\n在 Abyssal Locus 执行 Abyssal: Gifts from the Sea，或由玩家 Agent 执行 Scavenge Abyssal Corpse，每次完成有 10% 概率获得本物品。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。\nAround the Corner 与 Makeshift Temple 事件的深海物品奖励可能得到本物品。",
        "id": "mod-2879667447-i-drownedmemento",
        "image": "./mod-items/2879667447/iconItemDrownedMemento.png"
      },
      {
        "name": "Flotsam",
        "text": "无效果。代码提供了可显示的物品名称和图片，但没有属性加成或可用仪式。",
        "acquisition": "未找到正常游戏中的生成或发放入口。",
        "id": "mod-2879667447-i-flotsam",
        "meta": "未启用物品",
        "image": "./mod-items/2879667447/iconItemAbyssalTome.png"
      },
      {
        "name": "Mesmerizing Shell",
        "text": "同一人持续持有 10 回合后，人物单位被 Disrupted 5 回合；统治者则被迫执行 Political Gridlock。触发后移除一枚 Shell，更换持有者会重置计时。\nDeep One 与 Abyssal Priest 单位不受此效果影响。",
        "acquisition": "英雄执行 Scavenge Abyssal Corpse 时，也有 10% 概率取得。\n同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Exorcist 的灵魂炼成。\n在 Abyssal Locus 执行 Abyssal: Gifts from the Sea，或由玩家 Agent 执行 Scavenge Abyssal Corpse，每次完成有 10% 概率获得本物品。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。\nAround the Corner 与 Makeshift Temple 事件的深海物品奖励可能得到本物品。",
        "id": "mod-2879667447-i-mesmerizingshell",
        "image": "./mod-items/2879667447/iconItemMesmerizingShell.png"
      },
      {
        "name": "Ritualist Shard",
        "text": "储存 100 点 Abyssal Magic，初始充满，每回合恢复 1，最高 100。持有者取得 Abyssal Magic，供相关仪式消耗；Absorb Abyssal Charge 与 Absorb Madness 可补充储量。\nAbyssal Siren Call Ritual 消耗 100，改变当地统治者及英雄对 Deep Ones 的偏好。\nAbyssal Circulation Ritual 消耗 50，清空当地 Deep One Cult 的 Menace，并将其转移给当地人物。\nAbyssal Red Tide Ritual 消耗 60，牺牲 10 人口推动 Cult；Abyssal Black Water Ritual 消耗 60，牺牲统治者，使 Cult 加速成熟 30 回合。",
        "acquisition": "Abyssal Ritualist 必定携带一枚。\n同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Lightbringer 的灵魂炼成。\n在 Abyssal Locus 执行 Abyssal: Gifts from the Sea，或由玩家 Agent 执行 Scavenge Abyssal Corpse，每次完成有 10% 概率获得本物品。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。",
        "id": "mod-2879667447-i-ritualistshard",
        "image": "./mod-items/2879667447/iconItemRitualistShard.png"
      },
      {
        "name": "Shimmering Scales",
        "text": "可在 Market 执行 Sell Shimmering Scales：消耗物品，获得 20 Gold；该 Market 已被渗透时获得 40 Gold。",
        "acquisition": "The Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。\nAround the Corner 与 Makeshift Temple 事件的深海物品奖励可能得到本物品。",
        "id": "mod-2879667447-i-shimmeringscales",
        "image": "./mod-items/2879667447/iconItemShimmeringScales.png"
      },
      {
        "name": "Strange Meat",
        "text": "Eat Strange Meat：消耗物品，25 回合内 Might +3、Attack +3、最大 HP −3；已有该效果时不能重复食用。\nTaint Food Supply：在完全渗透的地点消耗物品，建立或增加 25 强度的 Tainted Food Supply，削弱当地及接收当地粮食的城市的 Plague Immunity。",
        "acquisition": "在 Abyssal Corpse 处完成 Butcher Abyssal Corpse。\n同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Mage 的灵魂炼成。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。\nAround the Corner 与 Makeshift Temple 事件的深海物品奖励可能得到本物品。",
        "id": "mod-2879667447-i-strangemeat",
        "image": "./mod-items/2879667447/iconItemStrangeMeat.png"
      },
      {
        "name": "Waterlogged Charm",
        "text": "符合条件的非玩家英雄或统治者每回合 Sanity −1；Sanity 恰好降至 0 时获得 Call of the Abyss。已有该特质、极度喜爱 Deep Ones、玩家控制者及自主邪恶 Agent 不受这项侵蚀影响。\nBury Charm：在 Deep One Cult 所在地消耗物品，使加速成熟时间增加 15 回合。\nPray to the Deep：随机产生临时属性加成、HP 损失、Profile 降低、海上宝藏或无效果，部分结果会毁掉 Charm。沿海、海洋及 Deep Ones 势力规模会改变可抽取的结果范围。",
        "acquisition": "英雄执行 Scavenge Abyssal Corpse 时，也有 10% 概率取得。\n同时启用 Coven 的 Curseweaving 时，可用 Deep One Specialist + Orc Slayer 的灵魂炼成。\n在 Abyssal Locus 执行 Abyssal: Gifts from the Sea，或由玩家 Agent 执行 Scavenge Abyssal Corpse，每次完成有 10% 概率获得本物品。\nThe Fisherman 具有 Gifts from the Sea 时，完成 Reel Them In 有 30% 概率额外抽取物品，可能得到本物品。",
        "id": "mod-2879667447-i-waterloggedcharm",
        "image": "./mod-items/2879667447/iconItemWaterloggedCharm.png"
      }
    ]
  },
  {
    "id": "mod-items-2900259087",
    "title": "Flesh God",
    "media": true,
    "items": [
      {
        "name": "Writhing Flesh",
        "text": "在战斗轮开始时，HP 低于最大值的一半（整数除法），或至少损失 2 HP 时自动消耗，恢复 5 HP，最高至满血。\n非玩家控制者使用时，图形战斗分支还会使个人 Shadow +20%、Sanity −5。",
        "acquisition": "",
        "id": "mod-2900259087-i-flesh2-healer",
        "image": "./mod-items/2900259087/flesh_I_heal.png"
      },
      {
        "name": "Acid Sack",
        "text": "战斗轮开始时自动消耗，对自身、敌方人物及其全部随从各造成 2 点伤害，先消耗 Defence；自身 HP 最低保留 1。同一次战斗最多使用一个。",
        "acquisition": "",
        "id": "mod-2900259087-i-flesh2-acidsack",
        "image": "./mod-items/2900259087/flesh_I_acidsack.png"
      },
      {
        "name": "Bone Sword",
        "text": "Might +2；Menace +5。",
        "acquisition": "",
        "id": "mod-2900259087-i-flesh2-bonesword",
        "image": "./mod-items/2900259087/flesh_I_boneweapon.png"
      },
      {
        "name": "Bone Darts",
        "text": "Might +1；Intrigue +1。",
        "acquisition": "",
        "id": "mod-2900259087-i-flesh2-bonedarts",
        "image": "./mod-items/2900259087/flesh_I_bonedarts.png"
      },
      {
        "name": "Flesh Tome",
        "text": "Lore +1；Menace +5。Escamrak 苏醒后，持有者可在 Twisted Locus 使用 Flesh Geomancy 法术。",
        "acquisition": "",
        "id": "mod-2900259087-i-flesh2-fleshtome",
        "image": "./mod-items/2900259087/flesh_I_tome.png"
      }
    ],
    "acquisition": "Fleshcrafting 至少 2 级且有空物品格时，执行 Fleshcrafting: Sculpt Flesh 并选择该物品。若有 HP > 1 的随从，将一名随从降至 1 HP；否则需要自身 HP > 2，并消耗 2 HP。"
  },
  {
    "id": "mod-items-2932765110",
    "title": "Covens, Curses & Curios Recast",
    "media": true,
    "items": [
      {
        "name": "Chronobauble",
        "text": "每回合使持有者全部特质额外执行一次回合效果，既会加快有益特质，也会加快不利特质与持续时间的变化。\n持有者每次生日额外增加 1 岁。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Orc Slayer 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由神器物品池的 mod 奖励分支抽到；没有同时启用 KeeperItemMod 与 LivingSocieties 时，也会加入稀有池的 mod 奖励分支。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-chronobauble",
        "image": "./mod-items/2932765110/Fore_ChronoBauble.png"
      },
      {
        "name": "Transposing Scroll",
        "text": "Read Transposing Scroll 显示灵魂炼成配方；持有时，Transpose Soul(s) 的每回合进度额外 +1，并显示所选灵魂对应的产物。\n提供 Soul Search，帮助寻找所需灵魂。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 执行 Buy Transposing Scroll，花费 5 Gold。",
        "id": "mod-2932765110-i-craftlist",
        "image": "./mod-items/2932765110/Fore_List.png"
      },
      {
        "name": "Banner of Barberous Dominion",
        "text": "Command +3。\nCall Orc Hordes 持续将不在战斗中的 Orc Army 引向施法者所在地；进度超过 1.9 后，每 5 Command 还可让新被召集的军队额外移动一格。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Mediator 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由神器物品池的 mod 奖励分支抽到；没有同时启用 KeeperItemMod 与 LivingSocieties 时，也会加入稀有池的 mod 奖励分支。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-dominionbanner",
        "image": "./mod-items/2932765110/Icon_DominionBanner.png"
      },
      {
        "name": "Doomed Prophet's Ring",
        "text": "设计效果是让持有者的 Warn the World 转为传播 Shadow，并抵消当地及邻地统治者获得的 Awareness；Chosen One 免疫。\n当前 DLL 的授予条件存在空值判断错误：有单位的持有者不会获得该诅咒，没有单位时又会访问空单位。因此正常携带能否实现上述效果，无法确认。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Lightbringer 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由稀有物品池的 mod 奖励分支抽到。\n已渗透的 Catacombs 中执行 Exhume Grave，也可能从生成的遗骸中取得。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-doomedprophetring",
        "image": "./mod-items/2932765110/Fore_ProphetRing.png"
      },
      {
        "name": "Madcap Boots",
        "text": "每回合提供 2 次额外移动机会。\n有人正追击持有者时，靴子会寻找最近的追击者，自动向其移动并用尽可用移动次数；因此会干扰逃跑。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Alienist 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由稀有物品池的 mod 奖励分支抽到。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-madboots",
        "image": "./mod-items/2932765110/Fore_MadBoots.png"
      },
      {
        "name": "The Panacea",
        "text": "人物单位每回合恢复 1 HP，最高至满血；Sanity 低于上限时每回合恢复 1。四项基础属性的临时负面效果会被转为等量、等剩余时间的正面效果。\n统治者持有时，每回合清零当地 Unrest、Political Instability、Famine、Plague、Madness 与 Devastation。\nEmploy Panacea 可在有统治者的聚居地清零这些修正；每清除 10 强度，使用者 Menace −1、Profile +1，物品保留。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Mediator + Exorcist 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由神器物品池的 mod 奖励分支抽到；没有同时启用 KeeperItemMod 与 LivingSocieties 时，也会加入稀有池的 mod 奖励分支。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-panacea",
        "image": "./mod-items/2932765110/Fore_Panacea.png"
      },
      {
        "name": "Razor Icon",
        "text": "Might +2。\n玩家人物持有时可增强己方在 City 或 Dwarven City、具有 Urban Prowler 特质的 Razor Rat；该特质强度至少 3 时触发并清零，使当地非邪恶任务的 Danger 增加 6，受 Danger 上限判定约束。\n提供 Rats Theft，简介声称可窃取受伤人物的全部 Gold 与 Personal Item；但该仪式没有完成时的窃取代码，实际效果未找到。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Mediator + Lightbringer 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由神器物品池的 mod 奖励分支抽到；没有同时启用 KeeperItemMod 与 LivingSocieties 时，也会加入稀有池的 mod 奖励分支。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-raticon",
        "image": "./mod-items/2932765110/Fore_RazorTrophy.png"
      },
      {
        "name": "Wreath of Manifest",
        "text": "先在国家首都执行 Organize Mass Settlement，记录要扩张的国家。\n之后在适居性合格的空地或废墟执行 Mass Settlement，消耗 Wreath，在该地点及三步以内的合格地点建立快速发展的 Human Outpost。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Mediator + Orc Slayer 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由神器物品池的 mod 奖励分支抽到；没有同时启用 KeeperItemMod 与 LivingSocieties 时，也会加入稀有池的 mod 奖励分支。\n已渗透的 Catacombs 中执行 Exhume Grave，也可能从生成的遗骸中取得。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-settlerswreath",
        "image": "./mod-items/2932765110/Fore_SettlersWreath.png"
      },
      {
        "name": "Soulstone",
        "text": "空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。\n启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。\n与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 执行 Buy Soulstone，花费 15 Gold。\n首次取得相应 Curseweaving 等级时会发放；炼成消耗的是其中的灵魂，空石可再次使用。\n与 Deep Ones Plus 联用时，单个 Deep One Specialist 灵魂也可炼成 Soulstone。",
        "id": "mod-2932765110-i-soulstone",
        "image": "./mod-items/2932765110/Fore_Soulstone_Inactive.png"
      },
      {
        "name": "Spirit Cage",
        "text": "可容纳一个 Spirit。装有 Spirit 时，它随持有者旅行，不能自行远离笼子。\nSpirit 正在 Haunt、持有者是非玩家且非 Chosen One 的人物单位时，每回合 Sanity −1；归零后发疯，Spirit 的 Menace 增加 0.4。Spirit 死亡后变为空笼。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Exorcist 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。 炼成时生成与笼子绑定的 Spirit。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-spiritcage",
        "image": "./mod-items/2932765110/Fore_SpiritCage_Full.png"
      },
      {
        "name": "Spirit Tree Seed",
        "text": "在人类聚居地执行 Plant Spirit Tree，消耗种子，建立 300 强度的 Spirit Tree。\nSpirit Tree 提供 2 倍粮食产出与 +0.5 Prosperity 影响；当其守卫少于 2 支时，每 25 回合生成一支 Forest Guardian 军队。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Mediator + Mage 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由稀有物品池的 mod 奖励分支抽到。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-spiritseed",
        "image": "./mod-items/2932765110/Fore_Seed.png"
      },
      {
        "name": "Secrets of Life and Death",
        "text": "书中从八项条件中随机选定前三项，须按顺序满足：当地 Death ≥ 100、持有者死亡、Madness ≥ 100、有 Fallen Human、Unrest ≥ 150、聚居地 Prosperity ≤ 10.4%、处于 Deep One Sanctum、处于 City Ruins。\n完成后变为 Satiated Tome of Secrets，提供 Lore +2；常规封印神祇的封印进度增加 50，其余神祇在当地获得 3 Arcane Secrets。\n未完成时，实际代码的 Lore 加成为 0；物品简介中的 +1 与实现不一致。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Physician + Mage 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由稀有物品池的 mod 奖励分支抽到。\n已渗透的 Catacombs 中执行 Exhume Grave，也可能从生成的遗骸中取得。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-tomeofsecrets",
        "image": "./mod-items/2932765110/Icon_CursedTome.png"
      },
      {
        "name": "Phthisical Vial",
        "text": "Intrigue +2，持有期间获得 Esoteric Poisons。\n通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。",
        "acquisition": "启用 Curseweaving 后，在 Witches Coven 或女巫教团的 Temple 使用装有 Mediator + Alienist 灵魂的 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />，执行 Transpose Souls 炼成；消耗灵魂，保留空 <CrossReference name=\"Soulstone\" href=\"#entry-mod-2932765110-i-soulstone\" />。\n启用 Findable Artifact Items 时，可由稀有物品池的 mod 奖励分支抽到。\n已渗透的 Catacombs 中执行 Exhume Grave，也可能从生成的遗骸中取得。\n拥有 Transmutation Master 时，炼成可保留其中一条灵魂。",
        "id": "mod-2932765110-i-toxicvial",
        "image": "./mod-items/2932765110/Icon_ToxicVial.png"
      }
    ]
  },
  {
    "id": "mod-items-2968835416",
    "title": "Community Library",
    "media": true,
    "items": [
      {
        "name": "Blank Test Item",
        "text": "无效果。开发测试用的空物品。",
        "acquisition": "调试控制台的 testitem 或 testitem blank 命令，向当前选中人物发放。正常游戏获取方式未找到。",
        "id": "mod-2968835416-i-testitem-blank",
        "meta": "测试物品",
        "image": "./mod-items/game/standardBack.png"
      },
      {
        "name": "Potion of Perfect Healing",
        "text": "持有者死亡时自动消耗，拦截死亡并触发复活事件；用于测试死亡拦截机制。",
        "acquisition": "调试控制台的 testitem nodeath 命令，向当前选中人物发放。正常游戏获取方式未找到。",
        "id": "mod-2968835416-i-test-deathsave",
        "meta": "测试物品",
        "image": "./mod-items/game/i_potionOfHealing.png"
      }
    ]
  },
  {
    "id": "mod-items-2980692812",
    "title": "Adolia, the Faceless Memory",
    "media": true,
    "items": [
      {
        "name": "Arcane Remedy Sample",
        "text": "Distribute Arcane Remedy：在合格的 City 或 Elven City 消耗样本，建立尚待发展至 100% 的 Arcane Remedy，供感染者接受疗法。\n玩家 Agent 可执行 Corrupt Arcane Remedy Sample 将其污染。关闭 Arcane Remedy 设置后，样本被移除。",
        "acquisition": "在强度达到 100% 的正常 Arcane Remedy 处执行 Receive Arcane Remedy Sample。玩家 Agent 还需要当地 Infiltration > 0。",
        "id": "mod-2980692812-i-memory-arcanememory",
        "image": "./mod-items/2980692812/icon_arcaneremedy.png"
      },
      {
        "name": "Corrupted Arcane Remedy Sample",
        "text": "Distribute Arcane Remedy：在合格的 City 或 Elven City 消耗样本，建立被污染的 Arcane Remedy，其疗法会推动 Faceless Memory 的感染。\n关闭 Arcane Remedy 设置后，样本被移除。",
        "acquisition": "执行 Corrupt <CrossReference name=\"Arcane Remedy Sample\" href=\"#entry-mod-2980692812-i-memory-arcanememory\" /> 污染已有样本；或在强度达到 100% 的被污染 Arcane Remedy 处执行 Receive <CrossReference name=\"Arcane Remedy Sample\" href=\"#entry-mod-2980692812-i-memory-arcanememory\" />。",
        "id": "mod-2980692812-corrupted-remedy",
        "image": "./mod-items/2980692812/icon_arcaneremedycorrupt.png"
      }
    ]
  },
  {
    "id": "mod-items-2988960487",
    "title": "KeeperItemMod",
    "media": true,
    "items": [
      {
        "name": "Circlet of Lordship",
        "text": "Command +2。",
        "acquisition": "",
        "id": "mod-2988960487-i-commandcirclet",
        "image": "./mod-items/2988960487/CommandCirclet.png",
        "meta": "稀有物品池"
      },
      {
        "name": "Tailored Clothes",
        "text": "Command +1。",
        "acquisition": "",
        "id": "mod-2988960487-i-commandshirt",
        "image": "./mod-items/2988960487/CommandShirt.png",
        "meta": "普通物品池"
      },
      {
        "name": "Scroll of Lore",
        "text": "Lore +1。",
        "acquisition": "",
        "id": "mod-2988960487-i-lorescroll",
        "image": "./mod-items/2988960487/LoreScroll.png",
        "meta": "普通物品池"
      },
      {
        "name": "Candlelit Staff",
        "text": "Lore +2。",
        "acquisition": "",
        "id": "mod-2988960487-i-lorestaff",
        "image": "./mod-items/2988960487/LoreStaff.png",
        "meta": "稀有物品池"
      },
      {
        "name": "Phial of Bull's Brawn",
        "text": "执行对应 Drink 仪式，消耗药剂，20 回合内 Might +2。重复饮用同类药剂会刷新为 20 回合，不叠加数值。",
        "acquisition": "",
        "id": "mod-2988960487-i-p-mightpot",
        "image": "./mod-items/2988960487/MightPotion.png",
        "meta": "普通物品池"
      },
      {
        "name": "Phial of Raven's Insight",
        "text": "执行对应 Drink 仪式，消耗药剂，20 回合内 Lore +2。重复饮用同类药剂会刷新为 20 回合，不叠加数值。",
        "acquisition": "",
        "id": "mod-2988960487-i-p-lorepot",
        "image": "./mod-items/2988960487/LorePotion.png",
        "meta": "普通物品池"
      },
      {
        "name": "Phial of Serpent's Guile",
        "text": "执行对应 Drink 仪式，消耗药剂，20 回合内 Intrigue +2。重复饮用同类药剂会刷新为 20 回合，不叠加数值。",
        "acquisition": "",
        "id": "mod-2988960487-i-p-intriguepot",
        "image": "./mod-items/2988960487/IntriguePotion.png",
        "meta": "普通物品池"
      },
      {
        "name": "Phial of Lion's Glory",
        "text": "执行对应 Drink 仪式，消耗药剂，20 回合内 Command +2。重复饮用同类药剂会刷新为 20 回合，不叠加数值。",
        "acquisition": "",
        "id": "mod-2988960487-i-p-commandpot",
        "image": "./mod-items/2988960487/CommandPotion.png",
        "meta": "普通物品池"
      },
      {
        "name": "Ricardo's Railgun",
        "text": "Might +1。\nShoot Ricardo’s Railgun：由玩家直接控制的 Agent 花费 1 回合，选择世界上正在引导法术的目标并消耗武器。总计 8 点伤害逐点随机分配给目标及其随从，Arcane Fortress 可以吸收伤害；目标存活但 HP 降至上限的 75% 或以下时，会停止引导。\n存在可选目标时，执行者 Profile +10、Menace +10；打开选择后取消射击，仍会增加这两项数值。",
        "acquisition": "",
        "id": "mod-2988960487-i-sniperrifle",
        "image": "./mod-items/2988960487/SniperRifle.png",
        "meta": "稀有物品池"
      },
      {
        "name": "Bag of Boundless Wealth",
        "id": "mod-2988960487-patch-i-bagofboundlesswealth",
        "text": "持有者每回合获得 3 Gold。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Bag of Boundless Wealth\" href=\"#entry-bag-of-boundless-wealth\" /> · 神器物品池",
        "baseGame": true,
        "image": "./base-items/bribe.png"
      },
      {
        "name": "Pot of Greed",
        "id": "mod-2988960487-patch-i-bagofpoverty",
        "text": "交给英雄或统治者后，触发家族范围的 Pot of Greed Curse，并消耗物品。当前持有者对 Gold 的偏好提高两档，受诅咒家族成员每回合损失 2 Gold。",
        "acquisition": "在 Market 上架后，执行 Buy Item From Market，花费 70 Gold 购买。",
        "meta": "本体物品修改 · <CrossReference name=\"Jar of Poverty\" href=\"#entry-jar-of-poverty\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./mod-items/2988960487/PotOfGreed.png"
      },
      {
        "name": "Boots of Wealth",
        "id": "mod-2988960487-patch-i-bootsofwealth",
        "text": "每次移动，持有者获得 2 Gold。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Boots of Wealth\" href=\"#entry-boots-of-wealth\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_bootsOfGold.png"
      },
      {
        "name": "Hidden Blade",
        "id": "mod-2988960487-patch-i-concealeddagger",
        "text": "Intrigue +1。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Concealed Dagger\" href=\"#entry-concealed-dagger\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_concealedDagger.png"
      },
      {
        "name": "Dark Stone",
        "id": "mod-2988960487-patch-i-darkstone",
        "text": "持有者位于人类、精灵或矮人聚居地时，每回合使当地 Shadow 增加 1 个百分点，最高 100%。\n此 mod 将其设为特殊物品等级，但仍保留在自己的稀有物品池中。",
        "acquisition": "在 Market 上架后，执行 Buy Item From Market，花费 70 Gold 购买。",
        "meta": "本体物品修改 · <CrossReference name=\"Dark Stone\" href=\"#entry-dark-stone\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./base-items/i_darkStone.png"
      },
      {
        "name": "Deathstone",
        "id": "mod-2988960487-patch-i-deathstone",
        "text": "持有者死亡时，玩家获得 5 神力，最多恢复至当前神力上限。\n此 mod 将其设为特殊物品等级，但仍保留在自己的稀有物品池中。",
        "acquisition": "在 Market 上架后，执行 Buy Item From Market，花费 70 Gold 购买。",
        "meta": "本体物品修改 · <CrossReference name=\"Deathstone\" href=\"#entry-deathstone\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./base-items/i_deathstone.png"
      },
      {
        "name": "Exquisite Mask",
        "id": "mod-2988960487-patch-i-exquisitemask",
        "text": "每回合 Menace −0.35；Profile 低于 100 时增加 0.5。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Exquisite Mask\" href=\"#entry-exquisite-mask\" /> · 神器物品池",
        "baseGame": true,
        "image": "./base-items/i_exquisiteMask.png"
      },
      {
        "name": "Flintlock Pistol",
        "id": "mod-2988960487-patch-i-flintlock",
        "text": "战斗轮开始时自动消耗。对敌方第一名随从造成 5 HP 伤害；没有随从时，对敌方人物造成 3 HP 伤害。该伤害直接扣除 HP。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Flintlock Pistol\" href=\"#entry-flintlock-pistol\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_flintlock.png"
      },
      {
        "name": "Plain Ring",
        "id": "mod-2988960487-patch-i-forgettablering",
        "text": "每回合 Menace −0.35。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Forgettable Ring\" href=\"#entry-forgettable-ring\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_forgettableRing.png"
      },
      {
        "name": "Masterwork Sword",
        "id": "mod-2988960487-patch-i-plainaxe",
        "text": "Might +1。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Basic Axe\" href=\"#entry-basic-axe\" /> · 普通物品池",
        "baseGame": true,
        "image": "./mod-items/2988960487/MasterworkSword.png"
      },
      {
        "name": "Poisoned Dagger",
        "id": "mod-2988960487-patch-i-poisoneddagger",
        "text": "Intrigue +1。\n在人物战斗中对敌人造成 HP 伤害时，使其立即进入 Poisoned 状态，持续 5 回合；已中毒的目标额外延长 5 回合。\nPoisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Poisoned Dagger\" href=\"#entry-poisoned-dagger\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./base-items/i_poisonedDagger.png"
      },
      {
        "name": "Potion of Healing",
        "id": "mod-2988960487-patch-i-potionofhealing",
        "text": "战斗回合开始时，若持有者仍存活，并且 HP 低于最大 HP 的一半（整数除法），或已损失至少 3 HP，则自动消耗药水，实际恢复 3 HP，最多恢复至 HP 上限。\n游戏提示及战斗日志写着恢复 5 HP；当前执行代码使用 <CrossReference name=\"Potion of Lesser Healing\" href=\"#entry-mod-2988960487-patch-i-potionoflesserhealing\" /> 的恢复参数，因此实际数值为 3。\n可在战斗外花费 1 回合饮用：先治疗持有者，剩余治疗量依次分配给随从，并清零连续执行任务而未休息的计数，消耗药剂。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Potion of Healing\" href=\"#entry-potion-of-healing\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./mod-items/2988960487/GreaterHealingPotion.png"
      },
      {
        "name": "Potion of Lesser Healing",
        "id": "mod-2988960487-patch-i-potionoflesserhealing",
        "text": "战斗回合开始时，若持有者仍存活，并且 HP 低于最大 HP 的一半（整数除法），或已损失至少 3 HP，则自动消耗药水，恢复 3 HP，最多恢复至 HP 上限。\n可在战斗外花费 1 回合饮用：先治疗持有者，剩余治疗量依次分配给随从，并清零连续执行任务而未休息的计数，消耗药剂。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Potion of Lesser Healing\" href=\"#entry-potion-of-lesser-healing\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_potionOfLesserHealing.png"
      },
      {
        "name": "Enchanted Shield",
        "id": "mod-2988960487-patch-i-reliableshield",
        "text": "Defence +3。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Reliable Shield\" href=\"#entry-reliable-shield\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./base-items/i_reliableShield.png"
      },
      {
        "name": "Poisoned Potion of Healing",
        "id": "mod-2988960487-patch-i-ruinedpotionofhealing",
        "text": "战斗回合开始时，若 HP 低于最大 HP 的一半（整数除法），或已损失至少 2 HP，则自动消耗药水，造成 2 HP 伤害，最低保留 1 HP。\n游戏说明使用了数值 3；当前实际扣除参数为 2。\n也可在战斗外花费 1 回合饮用，损失 2 HP，最低保留 1 HP，并消耗物品。",
        "acquisition": "启用 KeeperItemMod 后，原有 Ruined Potion of HP 自动采用此版本。通过 Sabotage Medicine 将治疗药剂破坏后获得。",
        "meta": "本体物品修改 · <CrossReference name=\"Ruined Potion of HP\" href=\"#entry-ruined-potion-of-hp\" />",
        "baseGame": true,
        "image": "./base-items/i_ruinedPotionOfHealing.png"
      },
      {
        "name": "Plate Armor",
        "id": "mod-2988960487-patch-i-shield",
        "text": "Defence +2。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Shield\" href=\"#entry-shield\" /> · 普通物品池",
        "baseGame": true,
        "image": "./mod-items/2988960487/FullPlate.png"
      },
      {
        "name": "Heavy Cloak",
        "id": "mod-2988960487-patch-i-unassuminghood",
        "text": "每回合 Profile −0.5。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"Unassuming Hood\" href=\"#entry-unassuming-hood\" /> · 普通物品池",
        "baseGame": true,
        "image": "./base-items/i_unassumingHood.png"
      },
      {
        "name": "Enchanted Axe",
        "id": "mod-2988960487-patch-i-waraxe",
        "text": "Might +2。",
        "acquisition": "",
        "meta": "本体物品修改 · <CrossReference name=\"War Axe\" href=\"#entry-war-axe\" /> · 稀有物品池",
        "baseGame": true,
        "image": "./mod-items/2988960487/EnchantedAxe.png"
      }
    ],
    "acquisition": "本组普通、稀有、神器物品分别加入或保留在 KeeperItemMod 的对应物品池，可从相应奖励与 Market 库存取得。其他 mod 的物品池扩展也可能参与抽取。\n\nBuy Item From Market：普通物品 35 Gold，稀有物品 70 Gold，神器 105 Gold。\n\n市场补货根据当地 Prosperity 与随机值决定物品池，Prosperity 超过 100% 后有机会出现稀有物品，超过 150% 后有机会出现神器。\n\n标为“本体物品修改”的条目，是启用该 mod 后原物品采用的版本。"
  },
  {
    "id": "mod-items-3003549759",
    "title": "Orcs Plus",
    "media": true,
    "items": [
      {
        "name": "Gourd of Blood",
        "text": "每 5 回合恢复持有者 1 HP；持有者满血时，改为给第一名受伤随从恢复 1 HP。同一持有者的被动治疗只计算第一枚。\nEat Gourd of Blood：消耗物品，恢复至满 HP。持有者死亡时，也会自动消耗一枚并触发 Escaped death 复活事件。\n每回合最多吸收当地 5 Death；累计吸收 300 后生成另一枚。当地没有 Death 时，已积累的生长进度每回合减少 0.5。",
        "acquisition": "已有 Gourd of Blood 吸收足够 Death 后也会繁殖。\n属于三件兽人神器之一，上架价格 105 Gold。",
        "id": "mod-3003549759-i-bloodgourd",
        "image": "./mod-items/3003549759/Foreground_BloodGourd.png"
      },
      {
        "name": "Drinking Horn",
        "text": "装满后可执行 Drink Orc Grott：40 回合内 Might +1、Command +1，重复饮用刷新持续时间。非兽人还会受到 2 HP 伤害，可能因此死亡。\n饮用后变为空角杯，可在已渗透的兽人营地通过 Refill Drinking Horns 再次装满；在兽人饮酒挑战中也可装满。",
        "acquisition": "购买时为空，可在已渗透的兽人营地重新装满。\n属于四件兽人稀有物品之一，上架价格 70 Gold。",
        "id": "mod-3003549759-i-drinkinghorn",
        "image": "./mod-items/3003549759/Foreground_DrinkingHorn_Full.png"
      },
      {
        "name": "Idol of Madness",
        "text": "攻击另一名人物时，目标 Sanity −1，降至 0 或以下会发疯；击杀有家乡地点的人物单位时，其存活近亲 Sanity −5。\n执行正面标签带有 Madness 的挑战或任务，每回合进度 +3。同一持有者的相同偶像不重复提供这些攻击与进度效果。",
        "acquisition": "属于三件兽人神器之一，上架价格 105 Gold。",
        "id": "mod-3003549759-i-idolofmadness",
        "image": "./mod-items/3003549759/Foreground_MadnessIdol.png"
      },
      {
        "name": "Orc Headdress",
        "text": "完成正面或负面标签带有 Orc 的挑战或任务时，额外获得 20% XP，向上取整。\n在 Orc Camp 时，将持有者 Profile 压至其最低值。",
        "acquisition": "属于四件兽人稀有物品之一，上架价格 70 Gold。",
        "id": "mod-3003549759-i-orcheaddress",
        "image": "./mod-items/3003549759/Foreground_OrcHeaddress.png"
      },
      {
        "name": "Orc Shaman's Staff",
        "text": "Lore +1。使用该 mod 指定的 Geomancy 法术时，每回合进度 +3，包括 Tremor、Volcano、Bring the Snows、Death of the Sun、Nurture、Bountiful Harvest、Geomantic Support、Arcane Fortress 与 Assault Channeller。相同法杖的施法进度加成只计算一份。",
        "acquisition": "属于三件兽人神器之一，上架价格 105 Gold。",
        "id": "mod-3003549759-i-shamanstaff",
        "image": "./mod-items/3003549759/Foreground_ShamanStaff.png"
      },
      {
        "name": "Snakeskin Armour",
        "text": "在人物战斗中，持有者自身受到的攻击伤害减少 1；随从不共享该减伤。携带多件时仍只减 1。",
        "acquisition": "属于四件兽人稀有物品之一，上架价格 70 Gold。",
        "id": "mod-3003549759-i-snakeskinarmour",
        "image": "./mod-items/3003549759/Foreground_SnakeskinArmour.png"
      },
      {
        "name": "Orc Spirit Caller's Staff",
        "text": "Lore +1。所在地 Death 至少 50 时，额外 Attack +1、Defence +1。",
        "acquisition": "属于四件兽人稀有物品之一，上架价格 70 Gold。",
        "id": "mod-3003549759-i-spiritcallerstaff",
        "image": "./mod-items/3003549759/Foreground_SpiritCallerStaff.png"
      }
    ],
    "acquisition": "在兽人 Seat of the Elders 或 Great Hall 执行 Buy item from Horde。\n较高的 Orcish Industry 会提高刷出高级物品的机会。"
  },
  {
    "id": "mod-items-3591348120",
    "title": "MEKHANE The Broken God",
    "media": true,
    "items": [
      {
        "name": "Piece",
        "text": "基础组件，用于组装 Mechanism，以及 Congregation 的建设与生产。\n持有时，每回合使所在地 Shadow 增加 0.00033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.00011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "通过 Scavenge for Fragment 等采集挑战、Forge 的生产及 Congregation 库存取得。\nBlack Market Connections 至少 −1 时，可在完全渗透的 Market 花费 15 Gold 执行 Buy Pieces，购买最多 3 枚。",
        "id": "mod-3591348120-i-mek-piece",
        "image": "./mod-items/3591348120/icon_itembasicpiece.png"
      },
      {
        "name": "Mechanism",
        "text": "可继续组装 Relic，也供其他制造、建设及仪式消耗。\n持有时，每回合使所在地 Shadow 增加 0.0033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.0011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在 Congregation 执行 Assemble Mechanism，默认消耗 3 Piece；Divine Assembly 神力消耗 2 Piece。\nBlack Market Connections 至少 −2 时，可在完全渗透的 Market 花费 30 Gold 执行 Buy Mechanisms，购买最多 3 件。",
        "id": "mod-3591348120-i-mek-mechanism",
        "image": "./mod-items/3591348120/icon_itembasicmechanism.png"
      },
      {
        "name": "Clockwork Mechanism",
        "text": "用于组装 <CrossReference name=\"Cogwork Relic\" href=\"#entry-mod-3591348120-i-mek-cogworkrelic\" />、在 Forge 制造 Automatons 及相关建设。\n持有时，每回合使所在地 Shadow 增加 0.0033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.0011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在允许 Cogwork 制造的 Congregation 执行 Assemble Cogwork Mechanism，默认消耗 3 Piece；或执行 Gild Basic Mechanism，转换一个 Mechanism。",
        "id": "mod-3591348120-i-mek-cogworkmechanism",
        "image": "./mod-items/3591348120/icon_itemcogworkmechanism.png"
      },
      {
        "name": "Arcane Mechanism",
        "text": "用于组装 <CrossReference name=\"Arcane Relic\" href=\"#entry-mod-3591348120-i-mek-arcanerelic\" />、制造 Constructs，以及在 Maxwellist Connections 施展对应法术。\n持有时，每回合使所在地 Shadow 增加 0.0033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.0011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在允许 Maxwellist 制造的 Congregation 执行 Assemble Arcane Mechanism，默认消耗 3 Piece；或执行 Defragment Basic Mechanism，转换一个 Mechanism。",
        "id": "mod-3591348120-i-mek-arcanemechanism",
        "image": "./mod-items/3591348120/icon_itemarcanemechanism.png"
      },
      {
        "name": "Relic",
        "text": "Command +2。计入 MEKHANE 的封印进度，也是组装 <CrossReference name=\"Divine Machine\" href=\"#entry-mod-3591348120-i-mek-divinemachine\" /> 的材料。\n持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在 Congregation 执行 Assemble Relic，默认消耗 3 Mechanism；也可从教团库存、Lost Relics 或 Vault 的回收行动中取得。\nBlack Market Connections 至少 −3 时，可在完全渗透的 Market 花费 90 Gold 执行 Buy Relic。",
        "id": "mod-3591348120-i-mek-relic",
        "image": "./mod-items/3591348120/icon_itembasicrelic.png"
      },
      {
        "name": "Cogwork Relic",
        "text": "Intrigue +1；Command +1。计入封印进度，供 Cogwork Orthodoxy 的生产及 <CrossReference name=\"Divine Machine\" href=\"#entry-mod-3591348120-i-mek-divinemachine\" /> 的组装使用。\n持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在允许 Cogwork 制造的 Congregation 执行 Assemble Cogwork Relic，默认消耗 3 <CrossReference name=\"Clockwork Mechanism\" href=\"#entry-mod-3591348120-i-mek-cogworkmechanism\" />；也可从教团库存、Lost Relics 或 Vault 的回收行动中取得。",
        "id": "mod-3591348120-i-mek-cogworkrelic",
        "image": "./mod-items/3591348120/icon_itemcogworkrelic.png"
      },
      {
        "name": "Arcane Relic",
        "text": "Lore +1；Command +1。计入封印进度，供 Noosphere、相关制造及 <CrossReference name=\"Divine Machine\" href=\"#entry-mod-3591348120-i-mek-divinemachine\" /> 的组装使用。\n持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在允许 Maxwellist 制造的 Congregation 执行 Assemble Arcane Relic，默认消耗 3 <CrossReference name=\"Arcane Mechanism\" href=\"#entry-mod-3591348120-i-mek-arcanemechanism\" />；也可从教团库存、Lost Relics 或 Vault 的回收行动中取得。",
        "id": "mod-3591348120-i-mek-arcanerelic",
        "image": "./mod-items/3591348120/icon_itemarcanerelic.png"
      },
      {
        "name": "Divine Machine",
        "text": "最高级组件，计入后期封印进度，并用于最终 Build MEKHANE。\n持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "在 Congregation 执行 Assemble Divine Machine，消耗 Relic、<CrossReference name=\"Cogwork Relic\" href=\"#entry-mod-3591348120-i-mek-cogworkrelic\" />、<CrossReference name=\"Arcane Relic\" href=\"#entry-mod-3591348120-i-mek-arcanerelic\" /> 各一件。材料可来自人物物品栏或教团库存；至少一件材料来自人物物品栏时，成品放入人物物品栏，否则存入教团。",
        "id": "mod-3591348120-i-mek-divinemachine",
        "image": "./mod-items/3591348120/icon_divinemachine.png"
      },
      {
        "name": "Unorthodox Piece",
        "text": "作为 Mechanism 的衍生物，可参与基础制造；Mekhanite Exile 还可消耗 3 件执行 Experiment with Cogworks、Experiment with the Arcane 或 Experiment with Shadow，制造对应 Mekhanite Experiment。\n持有时，每回合使所在地 Shadow 增加 0.0033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.0011 个百分点，最高至 100%。多件组件分别计算。",
        "acquisition": "Mekhanite Exile 在所属 Sect 执行 Unorthodox Experiment 时可能得到；其采集流程也可产生该物品。",
        "id": "mod-3591348120-i-mek-exilepiece",
        "image": "./mod-items/3591348120/icon_itemexilepiece.png"
      },
      {
        "name": "Bumaro's Warhammer",
        "text": "Attack +5。提供 Drive Back，使当地非 Mekhanite 的人物退散，冷却 5 回合。",
        "acquisition": "由 The Builder 特质授予。",
        "id": "mod-3591348120-i-mek-hammer",
        "image": "./mod-items/3591348120/icon_itemhammer.png"
      },
      {
        "name": "Mekhanite Glass Shard",
        "text": "进入非玩家人物或统治者的物品栏后开始计时，每经过 20 个非干扰回合触发一次 Disrupted；首次持续 3 回合，之后每次持续时间翻倍。\n累计处于干扰状态的第 1、26、51……回合各恢复 1 神力，不超过上限。交给玩家控制的人物后，感染标记、下一次干扰时长与间隔计时会重置。",
        "acquisition": "未找到正常游戏中的生成、奖励或制造入口。",
        "id": "mod-3591348120-i-mekscp-glassshard",
        "meta": "未启用物品",
        "image": "./mod-items/game/ophanimSleeplessLabour.png"
      }
    ]
  }
];
