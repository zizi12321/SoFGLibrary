# 游戏本体物品核查 · 2026-09-21

## 范围

采用当前含 DLC 的本体 Assembly-CSharp.dll，共 37 个具体 Item 子类；Elfstone / Corrupted Elfstone、Laughing Tome / Laughing Tome (Bound) 分列，页面共 39 项。未纳入工坊模组物品；已检查随游戏提供的 Cordyceps v2.0 程序集，无额外 Item 子类。

程序集：E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll

SHA-256：42468a86dd6ca90e9090f303343babbdb266fefb63b0654423f63c4808a4fa46

## 数据与图标来源

- work/swwf-audit/dlc/Assets.Code 下的反编译代码。
- 游戏 data/coreData/default/params.txt：物品参数，与当前 Params.cs 核对一致。
- Item.cs：三个随机物品池，数量分别为 10、12、5，池内等概率。
- Ch_BuyItem.cs / Sub_Market.cs：初始库存、35 Gold 价格、Prosperity 补货公式。
- Ch_ExploreRuins.cs / EventRuntime.cs：玩家探索走事件，AI 探索走独立随机逻辑。
- data/coreData/exploration/explore_generic2.json、explore_generic3.json、explore_generic7.json；default/midch_trader.json、fog/midch_merchant_of_antiquities.json：随机奖励及商人选项。
- exploration/faith_ruins_4.json：Ophanimic Totem；fog/midch_orcish_challenger.json：旗帜获取。
- Person.gainItem：未腐化的非玩家人物拒收常规邪恶物品，LEVEL_NODROP 除外；页面未把被拒收的物品列为普通初始统治者或英雄的可用掉落来源。
- Map.placeInitialRulers：5% 概率尝试神器池，其中中立神器每件实际抽中概率为 1%；邪恶神器会被普通统治者拒收。
- God_Mammon / T_PricelessGifts：Priceless Gift 抽取神器。
- SG_Orc、Ch_Elf_*、Ch_DefeatManticore、Ch_BuyOutpostFlag、Rti_FoundOutpost、Rt_SnakeOil、Rt_StealHerosItem、Rt_StealRulerItem、Mt_Thief、Ch_PurgeTauntingLure、Ch_HarvestSeed：特殊来源。
- Ch_AccessVault、UA.playerTriesToRob、BattleAgents：盗取和战后转移。
- God_LaughingKing、I_LaughingTome、Ch_CollectTome、Ch_BindTome、Ch_SummonLaughingTome、Rti_DropTome、Rti_UnbindTome：Tome 的开局与状态转换。
- 图标按各物品 getIconFore 引用，从 level0 中的 IconStore / TextureStore 指针追到实际 Sprite，导出至 public/base-items。共 38 张原图；两种恢复药水在游戏内共享同一图标。

## 提示与执行差异

- Potion of Healing：提示/日志 5 HP，但 onCombatRound 实际引用 item_potionOfLesserHealingEffect，恢复 3 HP；触发门槛也按 3 HP。
- Ruined Potion of HP：说明引用 3 HP，执行实际扣 2 HP，保留至少 1 HP。
- Laughing Tome：提示每 2 回合减 1 Sanity，turnTick 实际每回合减 1；页面明确标注。
- Concealed Dagger：物品 getLevel 与池位置不同；获取方式严格按 Item.getItemFromPool1，未按等级推断。
- Forcibly Summon Tome 仅找到类定义，没有实际注册入口，未作为可用获取途径。
- 兽人 Victory 事件选项效果列表为空；旗帜来自原持有者的战利品。Orcish challenger 则明确调用 GIVE_ORC_BANNER。

## 逐项源文件

- Bag of Boundless Wealth — I_BagOfBoundlessWealth.cs；图标 bribe.png
- Banner of [Horde] — I_HordeBanner.cs；图标 i_orcishBanner.png
- Basic Axe — I_PlainAxe.cs；图标 i_basicAxe.png
- Boots of the Scholar — I_BootsOfXP.cs；图标 i_bootsOfXP.png
- Boots of Wealth — I_BootsOfWealth.cs；图标 i_bootsOfGold.png
- Concealed Dagger — I_ConcealedDagger.cs；图标 i_concealedDagger.png
- Corrupted Elfstone — I_Elfstone.cs；图标 i_corruptedElfstone.png
- Dark Stone — I_DarkStone.cs；图标 i_darkStone.png
- Deathstone — I_Deathstone.cs；图标 i_deathstone.png
- Dwarven Crown Jewels — I_DwarvenCrownJewels.cs；图标 i_dwarvenJewels.png
- Elfstone — I_Elfstone.cs；图标 i_elfstone.png
- Exquisite Mask — I_ExquisiteMask.cs；图标 i_exquisiteMask.png
- Flintlock Pistol — I_Flintlock.cs；图标 i_flintlock.png
- Forgettable Ring — I_ForgettableRing.cs；图标 i_forgettableRing.png
- Hood of Shadows — I_HoodOfShadows.cs；图标 i_hoodOfShadows.png
- Jar of Poverty — I_BagOfPoverty.cs；图标 i_bagOfPoverty.png
- Laughing Tome — I_LaughingTome.cs；图标 i_laughingTome.png
- Laughing Tome (Bound) — I_LaughingTome.cs；图标 i_laughingTomeBound.png
- Manticore Trophy — I_ManticoreTrophy.cs；图标 manticore.png
- Ophanimic Totem — I_OphanimicTotem.cs；图标 i_ophanimicTotem.png
- Outpost Flag — I_OutpostFlag.cs；图标 wrestleForControl.png
- Page from the Tome — I_PageFromTome.cs；图标 i_pageFromTome.png
- Personal Item of [Person] — I_PersonalItem.cs；图标 i_personalItem.png
- Poison — I_Poison.cs；图标 i_poison.png
- Poisoned Dagger — I_PoisonedDagger.cs；图标 i_poisonedDagger.png
- Portable Skeleton — I_PortableSkeleton.cs；图标 minion_skeleton.png
- Potion of Healing — I_PotionOfHealing.cs；图标 i_potionOfLesserHealing.png
- Potion of Lesser Healing — I_PotionOfLesserHealing.cs；图标 i_potionOfLesserHealing.png
- Reliable Shield — I_ReliableShield.cs；图标 i_reliableShield.png
- Ruined Potion of HP — I_RuinedPotionOfHealing.cs；图标 i_ruinedPotionOfHealing.png
- Sacrificial Dagger — I_SacrificialDagger.cs；图标 i_sacrificialDagger.png
- Shield — I_Shield.cs；图标 i_shield.png
- Sign of Unwarding — I_SignOfUnwarding.cs；图标 i_signOfUnwarding.png
- Skeleton Key — I_SkeletonKey.cs；图标 i_skeletonKey.png
- Student's Manual — I_StudentsManual.cs；图标 i_studentManual.png
- The Ruinous Blade — I_RuinousBlade.cs；图标 i_ruinousBlade.png
- Unassuming Hood — I_UnassumingHood.cs；图标 i_unassumingHood.png
- Vinerva Seed — I_VinervaSeed.cs；图标 i_vinervaSeed.png
- War Axe — I_WarAxe.cs；图标 i_warAxe.png

## 实现与验证

- 新增 BaseItemsData.ts / BaseItemsArchive.tsx，路由 ?page=base-items；索引页其他信息新增入口。
- DetailItem 新增可选 acquisition 字段；仅填写该字段的物品卡显示分开的功能/获取方式，现有条目显示分支保持不变。
- 37 类覆盖完整、39 项均有说明和获取方式、所有图标文件存在；无字面量反斜杠换行和 undefined。
- 本轮前的 27 个已有独立 Archive / 地点修正数据文件逐字保持不变。

### 已完成验证

- pnpm exec tsc --noEmit --incremental false 通过。
- pnpm run build:pages 通过，产物已同步 docs；仅有现有体量导致的 bundle 大小提示。
- 新页在 1440、1024、390、320 像素下检查：39 张卡、39 个功能栏、39 个获取方式栏；无坏图、无丢失锚点、无横向溢出、无控制台异常。
- 手机资料弹窗、跳转后自动展开、直接 hash 打开、返回索引与索引新入口均通过。
- 本轮只检查新物品页面与索引入口，没有更改已有神祇的数据。

## 用户追加分类

按实际物品池分为：普通通用物品 10 项、稀有通用物品 12 项、神器通用物品 5 项；其他通用物品 8 项、神祇专有物品 4 项（37 类物品，含两种变化状态共 39 项）。

- 神祇专有：Laughing Tome 与其 Bound 状态（Iastur）、Vinerva Seed（Vinerva）、Ophanimic Totem（Ophanim）。
- Ophanimic Totem 虽然末端奖励事件没有神祇条件，但入口 faith_ruins_0.json 明确要求 god_is_ophanim；已补齐其获取条件。
- Page from the Tome 属于稀有通用池；Concealed Dagger 属于普通通用池。分类以实际池来源为准。
- 每组独立模块；全部展开、收起和锚点覆盖全部五组。原有物品锚点保持不变。
