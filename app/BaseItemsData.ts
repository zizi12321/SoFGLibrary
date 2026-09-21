import type { ArchiveRecordConfig, DetailItem } from "./GodArchiveTypes";
import type { ItemCategory } from "./ItemCatalogTypes";

// Current DLC Assembly-CSharp. Category-wide acquisition routes belong to their category.
export const items: DetailItem[] = [
  {
    "name": "Bag of Boundless Wealth",
    "text": "持有者每回合获得 2 Gold。",
    "acquisition": "地图生成时，每位城市初始统治者有 1% 概率抽到此物品；可完成 Rob Treasury，从其物品栏中取走。英雄探索遗迹也可能获得，可通过盗窃或战利品取得。",
    "image": "bribe.png",
    "baseGame": true
  },
  {
    "name": "Banner of [Horde]",
    "text": "名称随对应兽人部落变化。持有旗帜后，可在该部落营地执行 Subjugate，将其渗透至 100%。\nWarpath：令对应部落对持有者所在地的目标国家或另一兽人部落宣战，消耗旗帜。\nCease War：终止对应部落作为进攻方发起的战争，保留旗帜。\nUnite the Hordes：持有至少两个不同部落的旗帜，且所选部落与另一部落均未交战时，可将所持旗帜对应部落的土地和单位并入所选部落。",
    "acquisition": "Orc Upstart 生成时携带其部落旗帜；击杀后可从战利品取得。\nOrcish challenger 事件中，A fair match 要求 Might ≥ 4 或执行者为 Warlord，损失 5 HP 后获得旗帜；A ''fair'' match 要求 Might ≥ 2 且 Intrigue ≥ 4，损失 2 HP 后获得旗帜。",
    "image": "i_orcishBanner.png",
    "baseGame": true
  },
  {
    "name": "Basic Axe",
    "text": "Might +1。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_basicAxe.png",
    "baseGame": true
  },
  {
    "name": "Boots of the Scholar",
    "text": "每次从一个地点移动到另一个地点，持有者获得 3 XP。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_bootsOfXP.png",
    "baseGame": true
  },
  {
    "name": "Boots of Wealth",
    "text": "每次从一个地点移动到另一个地点，持有者获得 1 Gold。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_bootsOfGold.png",
    "baseGame": true
  },
  {
    "name": "Concealed Dagger",
    "text": "Might +1，Intrigue +1。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_concealedDagger.png",
    "baseGame": true
  },
  {
    "name": "Corrupted Elfstone",
    "text": "使持有者每回合 Shadow 增加 2 个百分点；达到 100% 时破碎。\n玩家控制的 Agent 与敌对势力的邪恶 Agent 免受此效果。",
    "acquisition": "持有 <CrossReference name=\"Elfstone\" /> 时完成 Corrupt Elfstone，原物品就地转为腐化状态。",
    "image": "i_corruptedElfstone.png",
    "baseGame": true
  },
  {
    "name": "Dark Stone",
    "text": "持有者位于人类、精灵或矮人聚居地时，每回合使当地 Shadow 增加 1 个百分点，最高 100%。",
    "acquisition": "",
    "image": "i_darkStone.png",
    "baseGame": true
  },
  {
    "name": "Deathstone",
    "text": "持有者死亡时，玩家获得 5 神力，最多恢复至当前神力上限。",
    "acquisition": "",
    "image": "i_deathstone.png",
    "baseGame": true
  },
  {
    "name": "Dwarven Crown Jewels",
    "text": "属于原国家的矮人持有时安全无事。\n其他人物持有时，每回合累计 1 点，另有 50% 概率再累计 1 点。累计达到 14 后清零，原国家所有人物对持有者的喜好降低一级，逐渐转为厌恶；由此产生的人际敌意可能影响后续行动。",
    "acquisition": "地图生成时，矮人国家的君主初始持有。\n在其所在地完成 Rob Treasury，从统治者物品栏取走；通常要求当地 Infiltration 达到 100%。",
    "image": "i_dwarvenJewels.png",
    "baseGame": true
  },
  {
    "name": "Elfstone",
    "text": "初始容量为 200，物品名称中的括号显示剩余容量。\n持有者的 Shadow 大于 0 且不超过 99% 时，每回合吸收最多 5 个百分点，受当前 Shadow 和剩余容量限制；每吸收 1 个百分点消耗 1 容量，消耗量向上取整。世界回合数为 3 的倍数时，另消耗 1 容量。容量耗尽后破碎。\n持有者可执行 Corrupt Elfstone，将其转为 <CrossReference name=\"Corrupted Elfstone\" />。",
    "acquisition": "Crystalsmith 在已归属某国的 Arcane Secret 处执行 Craft Elfstone Crystal 制造；若该秘密含有危险知识，则制造失败、秘密被毁，制造者陷入疯狂。\n其他精灵可通过 Receive Elfstone Crystal 领取；Crystalsmith 也会通过 Gift Ruler an Elfstone 把它交给统治者。\n玩家可从持有者处盗取，或在击杀持有者后的战利品界面取得。",
    "image": "i_elfstone.png",
    "baseGame": true
  },
  {
    "name": "Exquisite Mask",
    "text": "持有时，计算人物的 Profile 时乘以 0.33，Menace 乘以 1.25。",
    "acquisition": "地图生成时，每位城市初始统治者有 1% 概率抽到此物品；可完成 Rob Treasury，从其物品栏中取走。英雄探索遗迹也可能获得，可通过盗窃或战利品取得。",
    "image": "i_exquisiteMask.png",
    "baseGame": true
  },
  {
    "name": "Flintlock Pistol",
    "text": "Attack +1。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_flintlock.png",
    "baseGame": true
  },
  {
    "name": "Forgettable Ring",
    "text": "持有时，计算人物的 Profile 时减少 5。",
    "acquisition": "",
    "image": "i_forgettableRing.png",
    "baseGame": true
  },
  {
    "name": "Hood of Shadows",
    "text": "依据持有者所在地的 Shadow，降低当地 Security 对持有者的影响：\nShadow > 10%：Security −1。\nShadow > 33%：Security −2。\nShadow > 66%：Security −3。\n取满足条件的最高一档。",
    "acquisition": "",
    "image": "i_hoodOfShadows.png",
    "baseGame": true
  },
  {
    "name": "Jar of Poverty",
    "text": "持有者每回合失去 2 Gold，最低降至 0。\n英雄获得其他普通、稀有或神器物品时，会保留此物品，普通补充物品的逻辑无法将它替换掉。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_bagOfPoverty.png",
    "baseGame": true
  },
  {
    "name": "Laughing Tome",
    "text": "非玩家控制的人物持有时，每回合 Sanity −1；游戏提示的“每 2 回合”与当前执行代码不同。持有者降至 0 Sanity、达到最高疯狂等级、失去人物单位及统治者身份，或死亡时，书会离开物品栏，在当地成为 Laughing King's Tome。\n封印达到 5 后，由非玩家控制的人物携带时，还会每回合使当地 Madness 增加 3。\n持有者可执行 Place Tome，将书放到当地，转为传播 Madness 的地点修正；玩家控制的 Agent 携带时免受逐回合负面效果。",
    "acquisition": "Iastur 的 Supplicant 开局携带。\n在 Laughing King's Tome (Asleep) 所在地完成 Collect Tome 可取回；在 the Elder Tomb 完成 Summon Tome 可召回书，但由其他人物持有的封印状态会阻止召回，英雄正在执行 Bind Tome 时也无法开始召回。\n取得 <CrossReference name=\"Laughing Tome (Bound)\" /> 后，完成 Unbind Tome 恢复此状态。",
    "image": "i_laughingTome.png",
    "baseGame": true
  },
  {
    "name": "Laughing Tome (Bound)",
    "text": "封印状态暂停降低 Sanity 和随身增加 Madness 的效果，提供 Unbind Tome，完成后恢复为 <CrossReference name=\"Laughing Tome\" />。\n由非玩家控制的人物携带累计 28 回合后，书离开物品栏，在当地形成 Laughing King's Tome (Asleep)。玩家控制的 Agent 携带时暂停这一计时。持有者死亡时，书会在当地重新化为活跃的 Laughing King's Tome。",
    "acquisition": "英雄在 Laughing King's Tome 所在地完成 Bind Tome 后，获得封印状态的书。\n玩家可从持有者处盗取，再通过 Unbind Tome 解封。",
    "image": "i_laughingTomeBound.png",
    "baseGame": true
  },
  {
    "name": "Manticore Trophy",
    "text": "Might +1，Command +1；同一人物持有多个时，仅一件生效。\n也是在已渗透、尚未专业化的兽人营地执行 Build Menagerie 的所需物品，建造后保留奖杯。",
    "acquisition": "在 Wandering Manticore 所在地完成 Defeat Manticore，移除该地点修正并获得奖杯。",
    "image": "manticore.png",
    "baseGame": true
  },
  {
    "name": "Ophanimic Totem",
    "text": "持有者所在地已有 Ophanim's Faith 时，每回合按当地玩家控制的 Agent 数量增加 Faith，每名 Agent 增加 2 点；持有者符合条件时也计入。",
    "acquisition": "Ophanim 的人类 Agent 在非极地、非冰雪、非干冷、非苔原地形探索尚未开发的遗迹时，可触发 Holy site discovered in %HEX_NAME；选择 Begin the dig 开始信仰遗迹事件链。\n探索至深度 4，触发 The holy relic of %HEX_NAME；选择 Brought to light 获得。\n该选项同时使当地 Faith +50、Doubt −25。",
    "image": "i_ophanimicTotem.png",
    "baseGame": true
  },
  {
    "name": "Outpost Flag",
    "text": "旗帜记录购买地所属国家。携带后可执行 Found Outpost，消耗旗帜并建立属于该国家的 Human Outpost，随后逐渐成长为聚居地。\n建立地点须为无国家控制、没有现存前哨的陆地；当地为空地或城市废墟，Habitability 至少 10%。",
    "acquisition": "在有 City 设施的聚居地完成 Fund Colonisation，花费 300 Gold。\n要求 Menace < 10，或当地属于 Dark Empire / Ophanim Theocracy。",
    "image": "wrestleForControl.png",
    "baseGame": true
  },
  {
    "name": "Page from the Tome",
    "text": "由非玩家控制的人物持有时，每回合 Sanity −1；降至 0 时触发一次疯狂，并移除此物品。玩家控制的 Agent 持有时免受这一效果。",
    "acquisition": "",
    "image": "i_pageFromTome.png",
    "baseGame": true
  },
  {
    "name": "Personal Item of [Person]",
    "text": "物品与原主人绑定，名称显示其姓名。可用于针对该人物的阴谋与仪式。\n持有者拥有 Blood Magic 时，可通过物品使用 Blood Magic: Agony、Blood Magic: Wasting Soul、Blood Magic: Through their Eyes、Blood Magic: Possession、Blood Magic: The Hunger；各法术仍需满足各自的掌握等级等条件。\n也可用于制造丑闻、伪造线索等需要原主人私人物品的行动。",
    "acquisition": "Courtier 的 Steal Ruler's Item：在已有渗透且有统治者的聚居地，取得当地统治者的私人物品。\nCourtier 或 Trickster 的 Steal Hero's Item：在已有渗透、且作为英雄家乡的聚居地，随机取得一位当地出身人物的私人物品。\n英雄完成 Purge Taunting Lure 后会把自己的私人物品留在当地 Item Cache，可执行取出缓存物品的挑战获得。\n随从 Monkey 的 Thief 在撤退战斗结束时也可能取得对手的私人物品。",
    "image": "i_personalItem.png",
    "baseGame": true
  },
  {
    "name": "Poison",
    "text": "执行 Poison Hero 或 Silent Assassination 时，每回合额外增加 7 点挑战进度。使用后保留物品。",
    "acquisition": "",
    "image": "i_poison.png",
    "baseGame": true
  },
  {
    "name": "Poisoned Dagger",
    "text": "在人物战斗中对敌人造成 HP 伤害时，使其立即进入 Poisoned 状态，持续 5 回合；已中毒的目标额外延长 5 回合。\nPoisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。",
    "acquisition": "",
    "image": "i_poisonedDagger.png",
    "baseGame": true
  },
  {
    "name": "Portable Skeleton",
    "text": "人物战斗的回合开始时，若有空随从槽，或某个随从已死亡，自动消耗此物品并在该槽召唤 Skeleton Warrior。\nSkeleton Warrior：HP: 5 · Attack: 3 · Defence: 0 · Command: 1。",
    "acquisition": "",
    "image": "minion_skeleton.png",
    "baseGame": true
  },
  {
    "name": "Potion of Healing",
    "text": "战斗回合开始时，若持有者仍存活，并且 HP 低于最大 HP 的一半（整数除法），或已损失至少 3 HP，则自动消耗药水，实际恢复 3 HP，最多恢复至 HP 上限。\n游戏提示及战斗日志写着恢复 5 HP；当前执行代码使用 <CrossReference name=\"Potion of Lesser Healing\" /> 的恢复参数，因此实际数值为 3。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_potionOfLesserHealing.png",
    "baseGame": true
  },
  {
    "name": "Potion of Lesser Healing",
    "text": "战斗回合开始时，若持有者仍存活，并且 HP 低于最大 HP 的一半（整数除法），或已损失至少 3 HP，则自动消耗药水，恢复 3 HP，最多恢复至 HP 上限。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_potionOfLesserHealing.png",
    "baseGame": true
  },
  {
    "name": "Reliable Shield",
    "text": "Defence +2。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_reliableShield.png",
    "baseGame": true
  },
  {
    "name": "Ruined Potion of HP",
    "text": "战斗回合开始时，若 HP 低于最大 HP 的一半（整数除法），或已损失至少 2 HP，则自动消耗药水，造成 2 HP 伤害，最低保留 1 HP。\n游戏说明使用了数值 3；当前实际扣除参数为 2。",
    "acquisition": "Trickster 完成 Snake Oil 后生成，并卖给当地一位非玩家控制、至少拥有 15 Gold 且有空物品槽的英雄；英雄支付 15 Gold。\n玩家可从获得药水的英雄处盗取，或在战斗后获取其剩余物品。",
    "image": "i_ruinedPotionOfHealing.png",
    "baseGame": true
  },
  {
    "name": "Sacrificial Dagger",
    "text": "持有者一方在人物战斗中杀死人物或随从时，玩家获得 1 神力，最多恢复至当前神力上限。",
    "acquisition": "",
    "image": "i_sacrificialDagger.png",
    "baseGame": true
  },
  {
    "name": "Shield",
    "text": "Defence +1。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_shield.png",
    "baseGame": true
  },
  {
    "name": "Sign of Unwarding",
    "text": "每回合使持有者所在地的 Ward 强度减少 2。",
    "acquisition": "",
    "image": "i_signOfUnwarding.png",
    "baseGame": true
  },
  {
    "name": "Skeleton Key",
    "text": "持有者执行受 Security 影响的行动时，所在地的 Security 对其降低 1。",
    "acquisition": "",
    "image": "i_skeletonKey.png",
    "baseGame": true
  },
  {
    "name": "Student's Manual",
    "text": "获得 XP 时，额外增加本次数量的 20%，额外部分向下取整。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_studentManual.png",
    "baseGame": true
  },
  {
    "name": "The Ruinous Blade",
    "text": "在人物战斗中对目标造成 HP 伤害时，施加 Ruinous Blade 特质，此后该人物每回合 Shadow 增加 2 个百分点，最高 100%。Chosen One 免疫。\n目标已有该特质时跳过触发。物品可成功施加 2 次，次数用尽后消失；已经施加的特质继续生效。",
    "acquisition": "",
    "image": "i_ruinousBlade.png",
    "baseGame": true
  },
  {
    "name": "Unassuming Hood",
    "text": "持有时，计算人物的 Menace 时减少 5。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_unassumingHood.png",
    "baseGame": true
  },
  {
    "name": "Vinerva Seed",
    "text": "携带者所在陆地可成为 Heart of the Forest 的施法目标，从而在现有森林之心范围外建立新的森林之心。神力施放后消耗当地人物携带的一颗种子。",
    "acquisition": "在已有 Heart of the Forest 的地点完成 Harvest Seed，耗时 1 回合，获得一颗种子。",
    "image": "i_vinervaSeed.png",
    "baseGame": true
  },
  {
    "name": "War Axe",
    "text": "Might +2。",
    "acquisition": "英雄探索遗迹也可能获得，之后可通过盗窃或战斗后的战利品界面取走。",
    "image": "i_warAxe.png",
    "baseGame": true
  }
];

export const config: ArchiveRecordConfig & { sections: ItemCategory[] } = {
  id: "base-items", assetDir: "base-items", powers: [], autoLink: false,
  sections: [
    { id: "common-items", title: "普通通用物品", acquisition: "本组对应普通物品池的 10 件物品，每件在该池中的抽取概率为 1/10。\n\nMarket 的 Buy Item From Market：该物品上架后，花费 35 Gold 购买。市场初始库存来自普通物品池，售出后重新抽取。\n\nMerchant of Antiquities：Buy a trinket 花费 20 Gold，必定抽取普通物品；另外两个购买选项也可能抽到普通物品。\n\nExplore Ruins：普通遗迹事件中的 Caution is warranted 有 25% 概率抽取普通物品，Reach Out 的宝库奖励也可能抽到。", items: items.filter(item => ["Basic Axe","Boots of the Scholar","Boots of Wealth","Concealed Dagger","Flintlock Pistol","Forgettable Ring","Potion of Lesser Healing","Shield","Sign of Unwarding","Unassuming Hood"].includes(item.name)) },
    { id: "rare-items", title: "稀有通用物品", acquisition: "本组对应稀有物品池的 12 件物品，每件在该池中的抽取概率为 1/12。\n\nMarket 的 Buy Item From Market：聚居地 Prosperity 超过 100% 时，补货有概率使用稀有物品池；概率等于超过 100% 的百分点，达到 200% 后必定使用该池。上架后仍花费 35 Gold 购买。\n\nMerchant of Antiquities：Buy a potentially rare item 花费 30 Gold，有 1/3 概率抽取稀有物品；Buy an inscrutable item 的稀有物品结果概率为 20%，该结果花费 40 Gold。\n\nExplore Ruins：普通遗迹事件中的 Greed shall bear fruit 有 25% 概率抽取稀有物品，Reach Out 的宝库奖励也可能抽到。", items: items.filter(item => ["Dark Stone","Deathstone","Jar of Poverty","Page from the Tome","Poison","Poisoned Dagger","Portable Skeleton","Potion of Healing","Reliable Shield","Skeleton Key","Student's Manual","War Axe"].includes(item.name)) },
    { id: "artefact-items", title: "神器通用物品", acquisition: "本组对应神器物品池的 5 件物品，每件在该池中的抽取概率为 1/5。\n\nExplore Ruins：普通遗迹的宝物事件中，A gift from the past 必定抽取一件神器；Reach Out 的宝库奖励也可能抽到。\n\nMerchant of Antiquities：Buy an inscrutable item 有 20% 概率抽取神器，该结果花费 40 Gold。\n\nMammon 的 Agent 取得 Priceless Gift 特质时，立即从神器物品池抽取一件物品。", items: items.filter(item => ["Bag of Boundless Wealth","Exquisite Mask","Hood of Shadows","Sacrificial Dagger","The Ruinous Blade"].includes(item.name)) },
    { id: "other-items", title: "其他通用物品", items: items.filter(item => ["Banner of [Horde]","Corrupted Elfstone","Dwarven Crown Jewels","Elfstone","Manticore Trophy","Outpost Flag","Personal Item of [Person]","Ruined Potion of HP"].includes(item.name)) },
    { id: "deity-items", title: "神祇专有物品", items: items.filter(item => ["Laughing Tome","Laughing Tome (Bound)","Ophanimic Totem","Vinerva Seed"].includes(item.name)) },
  ],
};
