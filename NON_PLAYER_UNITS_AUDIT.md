# 非玩家单位核查记录

本次来源：当前 DLC 本体程序集对应的反编译代码、全部 21 个数字 Workshop 目录的 DLL／文本资源，以及实际 Sprite 引用。对已有反编译结果重新核对活动 DLL 的 SHA-256；优先 v2.0，没有版本文件夹时使用根目录。

## 收录与分栏

- 本体 13 栏，按势力分栏；Mod 19 栏，5 个 Mod 各自单独成栏，不再细分势力。
- 同一类型的感染形态合并记录；Chosen One 为英雄身份，Wayfinder 与 Crystalsmith 共用精灵英雄类但分别列栏。
- 依据实际类继承排除 UM 军队体系；Refugees、Entranced Crowd、Entranced Deep Ones、Dwarven Settlers、Dispossessed Colonists 即使不直接作战，也不在此页收录。
- Drowned Prophet、Inundai Emissary 虽继承 UAE，默认 isCommanded=false，属于可由玩家接管的自主单位。

## Mod 扫描结果

### Ixthus, King of cups — 2866026291

Gawain、Human Vestige 及军队仅由 Ixthus 体系产生。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2866026291\ShadowsLib.dll

### Kishi, God of Bloodshed — 2879207914

Demon、Wight 为 Kishi 专属；Demonic Army 为军队。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2879207914\BloodshedGod.dll

### Living Void God — 2879249746

没有新增 Unit 子类。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2879249746\v2.0\God_Void.dll

### Chandalor the Cursed Bloom God — 2879251084

没有新增 Unit 子类。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2879251084\v2.0\God_Love.dll

### Deep Ones Plus — 2879667447

收录 7 栏。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2879667447\v2.0\WonderblundrDeepOnes.dll

### Flesh God — 2900259087

新增自主单位的生成与 Escamrak 体系绑定，其余为军队。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2900259087\v2.0\God_Flesh.dll

### Living Wilds — 2932110698

收录 7 栏。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2932110698\v2.0\LivingWilds.dll

### Covens, Curses & Curios Recast — 2932765110

收录 2 栏。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2932765110\v2.0\CovenExpansionRecast.dll

### Community Library — 2968835416

Dwarven Settlers 继承 UM_Refugees，属于 UM 军队体系，排除；探索事件复用本体 Ghast。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2968835416\v2.0\CommunityLib.dll

### Adolia, the Faceless Memory — 2980692812

Memory 人物／Agent 及军队均为 Adolia 体系。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2980692812\v2.0\FacelessMemory.dll

### KeeperItemMod — 2988960487

物品 Mod，没有新增 Unit 子类。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\2988960487\SOFGKeeperItemRebalanceAndAdditions.dll

### Orcs Plus — 3003549759

收录 2 栏。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3003549759\v2.0\Orcs Plus.dll

### Mirror God — 3192034838

没有新增 Unit 子类。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3192034838\v2.0\God_Mirror.dll

### Out of Gods — 3232578780

DeepOne/Vampire 变体和 Sleeper Cells 来自 The Thing From Beyond；Tindalos 来自 Paradoxis。其余为玩家 Agent 或军队。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3232578780\ShadowsOutsiderGod.dll

### Redeemer Agent — 3236779751

收录 1 栏。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3236779751\v2.0\ModJam_Redeemer.dll

### AAEnglishman and Mall's Event Pack - REDUX — 3261852980

事件 Safety in trickery 使用 CREATE_ORC_UPSTART 生成本体 Orc Upstart，没有新增单位类型；不重复建立单位栏。

活动版本：root；活动 DLL：无 DLL

### Aberrant Metal — 3320562229

Factory/Miner/Recycler/Repoman 属于 Aberrant Metal，其余为军队。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3320562229\v2.0\ProductionGod.dll

### Alai, God of Webs — 3383875039

Embraced、Attendant、Released Agent 等均在 Alai 的神祇机制中产生。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3383875039\WebGod.dll

### MEKHANE The Broken God — 3591348120

MEKHANE 与 Sarkic 人物／单位的生成受神祇机制限制，其余为玩家 Agent 或军队。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3591348120\v2.0\MEKHANE.dll

### Villikos, the First Claimant — 3647343379

新增 Unit 子类均为 Villikos 相关军队。

活动版本：v2.0；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3647343379\v2.0\FirstClaimant.dll

### The Surveyor — 3700090862

Dispossessed Colonists 继承 UM，排除；The Surveyor 为玩家 Agent。

活动版本：root；活动 DLL：E:\Steam\steamapps\workshop\content\1741640\3700090862\TheSurveyor.dll

## 排除与实现差异

- Covens 的 UAE_Spirit 在 Spirit Cage 相关代码中只构造局部对象，未找到把它放入世界或写回物品的有效生成路径，因此不列为可出现的单位。
- Living Wilds 的 UAEN_Nature_Critter 是各生物的实现基类，没有单独生成路径。
- Deep Ones Plus 的 To the Sea 执行者检查始终返回 false，未列为可用行动。
- Drowned Soul 声称的定期损耗分支使用 2 == turn % 2，不会成立；页面不将其记为实际衰减。
- Ritualist 的资源吸收、Red Tide 同时直接修改 charge 并登记 influence；页面明确两笔变化。
- Living Wilds 的随机数上界不包含在内；使用实际 3–4 等范围，而非把上界也算进去。
- Stag 的明亮形态死亡奖励落在击杀者家乡，不是 Stag 家乡。
- Orcs Plus 的 Festival of War 实际执行者是 Spirit Caller；每回合 Profile +0.5、Menace +1.5、Horde Menace +0.25。Industry 扣除存在仅在边界分支执行的差异，页面按实现描述。
- The Redeemer 继任的显示名为 THE REDEEMED；Warrior 构造使 Might、Command 各 +1，继任函数另加 Lore、Intrigue 各 +1。
- Community Library 的探索事件复用本体 Ghast，事件包复用本体 Orc Upstart；没有独立单位类型。

## 来源定位

反编译工作目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2

- npc-warrior → work\swwf-audit\dlc\Assets.Code\UAG_Warrior.cs (UAG_Warrior)
- warrior-warrior → work\swwf-audit\dlc\Assets.Code\UAG_Warrior.cs (UAG_Warrior)
- warrior-hero → work\swwf-audit\dlc\Assets.Code\ManagerAwareness.cs (ManagerAwareness)
- npc-mage → work\swwf-audit\dlc\Assets.Code\UAG_Mage.cs (UAG_Mage)
- mage-mastery-of-geomancy → work\swwf-audit\dlc\Assets.Code\T_MasteryGeomancy.cs (T_MasteryGeomancy)
- mage-reforge-the-seal → work\swwf-audit\dlc\Assets.Code\Ch_ReforgeTheSeals.cs (Ch_ReforgeTheSeals)
- npc-chosen-one → work\swwf-audit\dlc\Assets.Code\UAG_Warrior.cs (UAG_Warrior)
- chosen-one-chosen-one → work\swwf-audit\dlc\Assets.Code\T_ChosenOne.cs (T_ChosenOne)
- chosen-one-prophecy → work\swwf-audit\dlc\Assets.Code\T_ChosenOne.cs (T_ChosenOne)
- chosen-one-hero-s-journey → work\swwf-audit\dlc\Assets.Code\Ch_ProphecyStep.cs (Ch_ProphecyStep)
- chosen-one-build-alliance → work\swwf-audit\dlc\Assets.Code\Ch_CO_BuildAlliance.cs (Ch_CO_BuildAlliance)
- chosen-one-redeem-sovereign → work\swwf-audit\dlc\Assets.Code\Ch_RedeemSovereign.cs (Ch_RedeemSovereign)
- chosen-one-conclave-of-peace → work\swwf-audit\dlc\Assets.Code\Ch_CO_Conclave_Peace.cs (Ch_CO_Conclave_Peace)
- chosen-one-conclave-of-the-remedy → work\swwf-audit\dlc\Assets.Code\Ch_CO_Conclave_Remedy.cs (Ch_CO_Conclave_Remedy)
- chosen-one-conclave-for-a-grand-army → work\swwf-audit\dlc\Assets.Code\Ch_CO_Conclave_GrandArmy.cs (Ch_CO_Conclave_GrandArmy)
- chosen-one-fulfil-the-prophecy → work\swwf-audit\dlc\Assets.Code\Ch_FulfillTheProphecy.cs (Ch_FulfillTheProphecy)
- npc-wayfinder → work\swwf-audit\dlc\Assets.Code\UAG_ElfSpecialist.cs (UAG_ElfSpecialist)
- wayfinder-elven-specialist → work\swwf-audit\dlc\Assets.Code\UAG_ElfSpecialist.cs (UAG_ElfSpecialist)
- wayfinder-find-ruler → work\swwf-audit\dlc\Assets.Code\Ch_Elf_FindRuler.cs (Ch_Elf_FindRuler)
- npc-crystalsmith → work\swwf-audit\dlc\Assets.Code\UAG_ElfSpecialist.cs (UAG_ElfSpecialist)
- crystalsmith-elven-specialist → work\swwf-audit\dlc\Assets.Code\UAG_ElfSpecialist.cs (UAG_ElfSpecialist)
- crystalsmith-craft-elfstone-crystal → work\swwf-audit\dlc\Assets.Code\Ch_Elf_CraftElfstone.cs (Ch_Elf_CraftElfstone)
- crystalsmith-gift-ruler-an-elfstone → work\swwf-audit\dlc\Assets.Code\Ch_Elf_GiveRuleElfstone.cs (Ch_Elf_GiveRuleElfstone)
- crystalsmith-sell-elven-jewellery → work\swwf-audit\dlc\Assets.Code\Ch_Elf_SellJewellery.cs (Ch_Elf_SellJewellery)
- crystalsmith-gift-elven-ruler-gold → work\swwf-audit\dlc\Assets.Code\Ch_Elf_GiveRuleGold.cs (Ch_Elf_GiveRuleGold)
- npc-dwarven-warrior → work\swwf-audit\dlc\Assets.Code\UAG_Warrior.cs (UAG_Warrior)
- dwarven-warrior-dwarven-warrior → work\swwf-audit\dlc\Assets.Code\UAG.cs (UAG)
- npc-acolyte → work\swwf-audit\dlc\Assets.Code\UAA.cs (UAA)
- acolyte-holy-service → work\swwf-audit\dlc\Assets.Code\UAA.cs (UAA)
- acolyte-holy-preach-faith → work\swwf-audit\dlc\Assets.Code\Ch_H_Preach.cs (Ch_H_Preach)
- acolyte-holy-preach-to-ruler → work\swwf-audit\dlc\Assets.Code\Ch_H_PreachToRuler.cs (Ch_H_PreachToRuler)
- acolyte-holy-build-temple → work\swwf-audit\dlc\Assets.Code\Ch_H_BuildTemple.cs (Ch_H_BuildTemple)
- acolyte-holy-aware → work\swwf-audit\dlc\Assets.Code\Ch_H_Aware.cs (Ch_H_Aware)
- acolyte-holy-cure-plague → work\swwf-audit\dlc\Assets.Code\Ch_H_CurePlague.cs (Ch_H_CurePlague)
- acolyte-holy-start-plague → work\swwf-audit\dlc\Assets.Code\Ch_H_StartPlague.cs (Ch_H_StartPlague)
- acolyte-holy-ward → work\swwf-audit\dlc\Assets.Code\Ch_H_Ward.cs (Ch_H_Ward)
- acolyte-holy-remove-ward → work\swwf-audit\dlc\Assets.Code\Ch_H_RemoveWard.cs (Ch_H_RemoveWard)
- acolyte-holy-prophesy-doom → work\swwf-audit\dlc\Assets.Code\Ch_H_Doomsay.cs (Ch_H_Doomsay)
- acolyte-holy-memorial-service → work\swwf-audit\dlc\Assets.Code\Ch_H_MemorialService.cs (Ch_H_MemorialService)
- acolyte-holy-funeral-rites → work\swwf-audit\dlc\Assets.Code\Ch_H_Funeral.cs (Ch_H_Funeral)
- acolyte-holy-charitable-works → work\swwf-audit\dlc\Assets.Code\Ch_H_Reconstruction.cs (Ch_H_Reconstruction)
- acolyte-holy-military-fervour → work\swwf-audit\dlc\Assets.Code\Ch_H_MilitaryFervour.cs (Ch_H_MilitaryFervour)
- acolyte-holy-destroy-arcane-secret → work\swwf-audit\dlc\Assets.Code\Ch_H_DestroyArcaneSecret.cs (Ch_H_DestroyArcaneSecret)
- acolyte-holy-explore-tunnels → work\swwf-audit\dlc\Assets.Code\Ch_H_ExploreTunnels.cs (Ch_H_ExploreTunnels)
- acolyte-holy-promised-return → work\swwf-audit\dlc\Assets.Code\Ch_H_Vampire.cs (Ch_H_Vampire)
- acolyte-holy-dark-worship → work\swwf-audit\dlc\Assets.Code\Ch_H_DarkWorshipAtTemple.cs (Ch_H_DarkWorshipAtTemple)
- npc-witch → work\swwf-audit\dlc\Assets.Code\UAA.cs (UAA)
- witch-coven → work\swwf-audit\dlc\Assets.Code\HolyOrder_Witches.cs (HolyOrder_Witches)
- witch-holy-arbormancy → work\swwf-audit\dlc\Assets.Code\Ch_H_W_Arbormancy.cs (Ch_H_W_Arbormancy)
- npc-orc-upstart → work\swwf-audit\dlc\Assets.Code\UAEN_OrcUpstart.cs (UAEN_OrcUpstart)
- orc-upstart-horde-banner → work\swwf-audit\dlc\Assets.Code\SG_Orc.cs (SG_Orc)
- npc-deep-one → work\swwf-audit\dlc\Assets.Code\UAEN_DeepOne.cs (UAEN_DeepOne)
- deep-one-start-deep-one-cult → work\swwf-audit\dlc\Assets.Code\Rt_DeepOneReproduce.cs (Rt_DeepOneReproduce)
- npc-ghast → work\swwf-audit\dlc\Assets.Code\UAEN_Ghast.cs (UAEN_Ghast)
- ghast-death-s-shadow → work\swwf-audit\dlc\Assets.Code\Mg_DeathsShadow.cs (Mg_DeathsShadow)
- ghast-enshadow → work\swwf-audit\dlc\Assets.Code\Rt_GhastEnshadow.cs (Rt_GhastEnshadow)
- npc-vampire → work\swwf-audit\dlc\Assets.Code\UAEN_Vampire.cs (UAEN_Vampire)
- vampire-the-hunger → work\swwf-audit\dlc\Assets.Code\UAEN_Vampire.cs (UAEN_Vampire)
- vampire-mastery-of-death → work\swwf-audit\dlc\Assets.Code\UAEN_Vampire.cs (UAEN_Vampire)
- vampire-command-of-vermin → work\swwf-audit\dlc\Assets.Code\T_CommandOfVermin.cs (T_CommandOfVermin)
- npc-cave-spider → work\swwf-audit\dlc\Assets.Code\UAEN_CaveSpider.cs (UAEN_CaveSpider)
- cave-spider-regeneration → work\swwf-audit\dlc\Assets.Code\UAEN_CaveSpider.cs (UAEN_CaveSpider)
- npc-abyssal-priest → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_AbyssalPriest.cs (UAEN_AbyssalPriest)
- abyssal-priest-create-deep-one-cult → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Rt_AbyssalPriestCreateDeepOneCult.cs (Rt_AbyssalPriestCreateDeepOneCult)
- abyssal-priest-abyssal-sermon → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Rt_AbyssalPriestPreach.cs (Rt_AbyssalPriestPreach)
- npc-abyssal-ritualist → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_AbyssalRitualist.cs (UAEN_AbyssalRitualist)
- abyssal-ritualist-abyssal-magic → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_AbyssalRitualist.cs (UAEN_AbyssalRitualist)
- abyssal-ritualist-absorb-abyssal-charge → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistAbsorbLocus.cs (Mg_RitualistAbsorbLocus)
- abyssal-ritualist-absorb-madness → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistAbsorbMadness.cs (Mg_RitualistAbsorbMadness)
- abyssal-ritualist-abyssal-siren-call-ritual → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistCreateObsession.cs (Mg_RitualistCreateObsession)
- abyssal-ritualist-abyssal-circulation-ritual → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistDisperseMenace.cs (Mg_RitualistDisperseMenace)
- abyssal-ritualist-abyssal-red-tide-ritual → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistSacrificePops.cs (Mg_RitualistSacrificePops)
- abyssal-ritualist-abyssal-black-water-ritual → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_RitualistSacrificeRuler.cs (Mg_RitualistSacrificeRuler)
- abyssal-ritualist-call-to-the-drowned → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_SummonDrowned.cs (Mg_SummonDrowned)
- npc-drowned-prophet → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_DrownedProphet.cs (UAEN_DrownedProphet)
- drowned-prophet-deep-one-entity → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_DrownedProphet.cs (UAEN_DrownedProphet)
- drowned-prophet-0 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Rt_DrownedProphetDeclareWar.cs (Rt_DrownedProphetDeclareWar)
- drowned-prophet-1 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetIdle.cs (Mg_DrownedProphetIdle)
- drowned-prophet-2 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetSummonBreathless.cs (Mg_DrownedProphetSummonBreathless)
- drowned-prophet-3 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetGatherArmies.cs (Mg_DrownedProphetGatherArmies)
- drowned-prophet-4 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetConvert.cs (Mg_DrownedProphetConvert)
- drowned-prophet-5 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetCreateDeepOnes.cs (Mg_DrownedProphetCreateDeepOnes)
- drowned-prophet-6 → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Mg_DrownedProphetAbyssalCrusade.cs (Mg_DrownedProphetAbyssalCrusade)
- npc-breathless → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_DrownedProphet_Breathless.cs (UAEN_DrownedProphet_Breathless)
- breathless-construct-abyssal-tower → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_BreathlessAbyssalTower.cs (Ch_BreathlessAbyssalTower)
- breathless-drowning-ceremonies → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_BreathlessDeepOnes.cs (Ch_BreathlessDeepOnes)
- breathless-dismantle-abyssal-tower → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_BreathlessDismantleAbyssalTower.cs (Ch_BreathlessDismantleAbyssalTower)
- npc-drowned-soul → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_DrownedSoul.cs (UAEN_DrownedSoul)
- npc-inundai-emissary → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_Inundai_Emissary.cs (UAEN_Inundai_Emissary)
- inundai-emissary-inundai → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAEN_Inundai_Emissary.cs (UAEN_Inundai_Emissary)
- inundai-emissary-establish-inundai-presence → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_EstablishPresence.cs (Ch_Inundai_EstablishPresence)
- inundai-emissary-feed-off-madness → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_FeedOffMadness.cs (Ch_Inundai_FeedOffMadness)
- inundai-emissary-feed-off-deep-ones → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_FeedOffDeepOnes.cs (Ch_Inundai_FeedOffDeepOnes)
- inundai-emissary-feed-on-cult → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_FeedonCult.cs (Ch_Inundai_FeedonCult)
- inundai-emissary-intensify-abyssal-call → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_BoostCall.cs (Ch_Inundai_BoostCall)
- inundai-emissary-indebted-deeds → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_FalseCourt.cs (Ch_Inundai_FalseCourt)
- inundai-emissary-call-to-palace → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_Pops.cs (Ch_Inundai_Pops)
- inundai-emissary-attract-deep-ones → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_DeepOnePops.cs (Ch_Inundai_DeepOnePops)
- inundai-emissary-recollect-on-debt → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_Inundai_Recollect.cs (Ch_Inundai_Recollect)
- npc-coraling → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UAN_CoralMassCoraling.cs (UAN_CoralMassCoraling)
- npc-broodmother → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Broodmother.cs (UAEN_Nature_Broodmother)
- broodmother-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- broodmother-spider-queen → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- broodmother-reclusive-monster-agitated-monster → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Broodmother.cs (UAEN_Nature_Broodmother)
- npc-dryad → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Dryad.cs (UAEN_Nature_Dryad)
- dryad-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- dryad-bonds-of-nature → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- dryad-gentle-spirit-vinervite-spirit-heal-hero → work\mod-items-audit\decompiled\2932110698\LivingWilds\Task_Nature_DryadHealHero.cs (Task_Nature_DryadHealHero)
- dryad-gentle-spirit-vinervite-spirit-heal-location → work\mod-items-audit\decompiled\2932110698\LivingWilds\Task_Nature_DryadHealLocation.cs (Task_Nature_DryadHealLocation)
- npc-fairy → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Fairy.cs (UAEN_Nature_Fairy)
- fairy-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- fairy-bonds-of-nature → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- fairy-enigmatic-fey-cruel-fey → work\mod-items-audit\decompiled\2932110698\LivingWilds\Task_Nature_FairyCharmUnit.cs (Task_Nature_FairyCharmUnit)
- npc-great-stag → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Stag.cs (UAEN_Nature_Stag)
- great-stag-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- great-stag-bonds-of-nature → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- great-stag-spirit-of-bounty-spirit-of-rage → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_StagDeath.cs (T_Nature_StagDeath)
- npc-unicorn → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Unicorn.cs (UAEN_Nature_Unicorn)
- unicorn-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- unicorn-bonds-of-nature → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- unicorn-place-ward → work\mod-items-audit\decompiled\2932110698\LivingWilds\Rt_Nature_PlaceWard.cs (Rt_Nature_PlaceWard)
- npc-werewolf-hermit → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Werewolf.cs (UAEN_Nature_Werewolf)
- werewolf-hermit-wilderness-creature → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Critter.cs (UAEN_Nature_Critter)
- werewolf-hermit-lupine-dominion → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_AutoMinions.cs (T_Nature_AutoMinions)
- werewolf-hermit-territorial-beast → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_Werewolf.cs (UAEN_Nature_Werewolf)
- werewolf-hermit-infectious-curse → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_WerewolfInfectiousness.cs (T_Nature_WerewolfInfectiousness)
- npc-infected-werewolf → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAEN_Nature_WerewolfInfected.cs (UAEN_Nature_WerewolfInfected)
- infected-werewolf-feral-might → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_MinimumMight.cs (T_Nature_MinimumMight)
- infected-werewolf-infectious-curse → work\mod-items-audit\decompiled\2932110698\LivingWilds\T_Nature_WerewolfInfectiousness.cs (T_Nature_WerewolfInfectiousness)
- infected-werewolf-voluntary-transformation → work\mod-items-audit\decompiled\2932110698\LivingWilds\UAA_Nature_WerewolfInfected.cs (UAA_Nature_WerewolfInfected)
- infected-werewolf-hunt-in-outskirts → work\mod-items-audit\decompiled\2932110698\LivingWilds\Rt_Nature_SpreadLycanthropy.cs (Rt_Nature_SpreadLycanthropy)
- npc-carrier-pigeon → work\mod-items-audit\decompiled\2932765110\CovenExpansionRecast\UAEN_Pigeon.cs (UAEN_Pigeon)
- npc-toad → work\mod-items-audit\decompiled\2932765110\CovenExpansionRecast\UAEN_Toad.cs (UAEN_Toad)
- toad-croak → work\mod-items-audit\decompiled\2932765110\CovenExpansionRecast\Rt_Croak.cs (Rt_Croak)
- npc-orc-elder → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UAEN_OrcElder.cs (UAEN_OrcElder)
- orc-elder-revered-elder → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UAEN_OrcElder.cs (UAEN_OrcElder)
- orc-elder-orcish-gift → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Rt_H_Orcs_GiftGold.cs (Rt_H_Orcs_GiftGold)
- orc-elder-holy-reprimand-orc-upstart → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Ch_H_Orcs_ReprimandUpstart.cs (Ch_H_Orcs_ReprimandUpstart)
- orc-elder-holy-cleansing-festival → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Ch_H_Orcs_CleansingFestival.cs (Ch_H_Orcs_CleansingFestival)
- orc-elder-holy-dark-festival → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Ch_H_Orcs_DarkFestival.cs (Ch_H_Orcs_DarkFestival)
- npc-spirit-caller → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UAEN_OrcShaman.cs (UAEN_OrcShaman)
- spirit-caller-mastery-of-death → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UAEN_OrcShaman.cs (UAEN_OrcShaman)
- spirit-caller-sacrifice-to-the-earth → work\swwf-audit\dlc\Assets.Code\Rt_Sacrifice_Beneath.cs (Rt_Sacrifice_Beneath)
- spirit-caller-sacrificial-festival → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Ch_Orcs_DeathFestival.cs (Ch_Orcs_DeathFestival)
- spirit-caller-festival-of-war → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Ch_Orcs_WarFestival.cs (Ch_Orcs_WarFestival)
- npc-redeemed → work\mod-items-audit\decompiled\3236779751\ModJam_Redeemer\UAG_Redeemer.cs (UAG_Redeemer)
- redeemed-chosen-one → work\mod-items-audit\decompiled\3236779751\ModJam_Redeemer\T_FalseChosenOne.cs (T_FalseChosenOne)
- redeemed-unwanted-hero → work\mod-items-audit\decompiled\3236779751\ModJam_Redeemer\UAG_Redeemer.cs (UAG_Redeemer)

## 验证

- TypeScript 无错误；pnpm run build:pages 成功；pages-dist 同步到 docs。
- 320 / 390 / 760 / 1024 / 1440 宽度均无横向滚动、破图或卡片溢出；116 个能力／行动卡片可展开。
- 手机侧边栏浮动；预览时不打开目标；确认后定位；直接带锚点访问能够展开。
- 与修改前快照对比，既有 app 文件仅变更：GodArchiveTypes.ts、GodIndex.tsx、page.tsx。所有既有神祇和资料页的数据、渲染文件未改动。
- 不提交、不推送。
