# 军队资料页核查记录

## 范围

扫描当前 DLC 本体、官方 Cordyceps，以及 Workshop 下全部 21 个数字目录。已逆向 DLL 与当前有效 DLL 的 SHA-256 逐一匹配；优先 v2.0，无版本子目录时使用根目录。军队以继承 UM 为分类依据，并检查事件生成的 UM_Custom。

本体通用军队 16 个条目；5 个 Mod 共 20 个条目。不同种族常备军与受控／失控亡灵形态分列。另有 3 个通用军队机制卡片、23 个能力卡片。

按本轮追加要求，收录 Mod 对原版神祇的限定扩展：Orcs Plus 的 Mammon 雇佣军、Ophanim 的 Perfect Horde 与 Perfect Raiders。原版神祇自带军队及各 Mod 神祇自身限定军队仍排除。

## 各来源

- 游戏本体：16 条。
- Deep Ones Plus：10 条。
- Covens, Curses & Curios Recast：1 条。
- Community Library：1 条。
- Orcs Plus：7 条。
- The Surveyor：1 条。

## 无法确认与实现差异

- Festering Barnacle、Coral Crab：存在定义和提示，但未找到创建调用或召唤行动；分别为 50、150 HP，移动为 0，页面明确未找到生成途径。
- Inundai Court：存在定义，没有找到创建调用；HP 取构造参数，具体生成值未找到。
- Shoggoth 的提示写 5 个地点，实际创建逻辑为 5–6 个节段，每段 80 HP。
- Dwarven City 军队的计算返回值含 +15，但每回合只将字段翻倍，未把 +15 写回上限；页面区分地图生成与回合重算。
- First Daughter 的召唤条件没有要求选择 Iastur；按通用军队收录。HP 为 20 + 同地所有人物的 Daughter 随从数 ×60。
- Coral Mass Cult 构造直接设为 100，转换入口没有下调；达到该阈值创建 200 HP Coral Mass。
- From Below 实际选取首个合格目标；Consume Prey 实际扣除目标 Might 与随从 Attack，而非提示中的人物 Attack。
- Pirate Trade Route 的统治者 Gold 扣除存在先取整到 0 再相乘的实现，页面明确会清空金库。
- Perfect Raiders 的生成当前 HP 为上限的三分之一，普通 Raiders 为五分之一；Perfect Coordination 伤害加成 25%。

## 来源文件

本次工作目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2

- 游戏参数：E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/coreData/default/params.txt
- 本体军队与战斗：work/swwf-audit/dlc/Assets.Code/UM*.cs、BattleArmy.cs、Task_Recruit.cs、Task_CaptureLocation.cs、Task_RazeLocation.cs。
- 本体事件解释器：work/swwf-audit/dlc/Assets.Code/EventRuntime.cs。
- Dragon 事件：E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/coreData/exploration/dragon_1.json。
- 实际图片：Unity TextureStore / IconStore 引用解析及各 Mod 有效版本图片；见 work/armies-audit/asset-manifest.json。

- army-human-army → work\swwf-audit\dlc\Assets.Code\UM_HumanArmy.cs (UM_HumanArmy)
- human-army-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-elven-army → work\swwf-audit\dlc\Assets.Code\UM_HumanArmy.cs (UM_HumanArmy)
- elven-army-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-dwarven-army → work\swwf-audit\dlc\Assets.Code\UM_HumanArmy.cs (UM_HumanArmy)
- dwarven-army-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-cavalry-escort → work\swwf-audit\dlc\Assets.Code\UM_CavalryEscort.cs (UM_CavalryEscort)
- army-orc-army → work\swwf-audit\dlc\Assets.Code\UM_OrcArmy.cs (UM_OrcArmy)
- orc-army-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-orc-spelltwisters → work\swwf-audit\dlc\Assets.Code\UM_OrcArmy.cs (UM_OrcArmy)
- orc-spelltwisters-orc-magics → work\swwf-audit\dlc\Assets.Code\BE_OrcMagics.cs (BE_OrcMagics)
- army-orc-raiders → work\swwf-audit\dlc\Assets.Code\UM_OrcRaiders.cs (UM_OrcRaiders)
- orc-raiders-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-refugees → work\swwf-audit\dlc\Assets.Code\UM_Refugees.cs (UM_Refugees)
- army-cthonians → work\swwf-audit\dlc\Assets.Code\UM_Cthonians.cs (UM_Cthonians)
- army-deep-one-raiders → work\swwf-audit\dlc\Assets.Code\UM_DeepOnes.cs (UM_DeepOnes)
- army-first-daughter → work\swwf-audit\dlc\Assets.Code\UM_FirstDaughter.cs (UM_FirstDaughter)
- army-untamed-dead → work\swwf-audit\dlc\Assets.Code\UM_UntamedDead.cs (UM_UntamedDead)
- army-enslaved-dead → work\swwf-audit\dlc\Assets.Code\UM_UntamedDead.cs (UM_UntamedDead)
- army-ravenous-dead → work\swwf-audit\dlc\Assets.Code\UM_RavenousDead.cs (UM_RavenousDead)
- army-shoggoth → work\swwf-audit\dlc\Assets.Code\UM_Shoggoth.cs (UM_Shoggoth)
- army-dragon → work\swwf-audit\dlc\Assets.Code\UM_Custom.cs (UM_Custom)
- army-abyssal-behemoth → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_AbyssalBehemoth.cs (UM_AbyssalBehemoth)
- abyssal-behemoth-from-below → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_BehemothConsume.cs (Ch_BehemothConsume)
- abyssal-behemoth-feed-on-city → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_BehemothFeed.cs (Ch_BehemothFeed)
- army-kraken → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_AbyssalKraken.cs (UM_AbyssalKraken)
- kraken-ensnare → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_KrakenEnsnare.cs (Ch_KrakenEnsnare)
- kraken-consume-prey → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_KrakenConsume.cs (Ch_KrakenConsume)
- kraken-feed-on-city → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Ch_KrakenFeed.cs (Ch_KrakenFeed)
- army-trench-crawlers → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_AbyssalCrawlers.cs (UM_AbyssalCrawlers)
- army-breathless-horde → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_BreathlessHorde.cs (UM_BreathlessHorde)
- army-coral-mass → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_CoralMass.cs (UM_CoralMass)
- coral-mass-consume-death → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Rt_CoralMassFeed.cs (Rt_CoralMassFeed)
- coral-mass-maddening-aura → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\Rt_CoralMassMadness.cs (Rt_CoralMassMadness)
- army-festering-barnacle → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_CoralMassBarnacle.cs (UM_CoralMassBarnacle)
- army-coral-crab → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_CoralMassCrab.cs (UM_CoralMassCrab)
- army-inundai-court → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_Inundai.cs (UM_Inundai)
- army-entranced-crowd → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_Inundai_Refugees.cs (UM_Inundai_Refugees)
- army-entranced-deep-ones → work\mod-items-audit\decompiled\2879667447\Wonderblunder_DeepOnes\UM_Inundai_RefugeesDeepOnes.cs (UM_Inundai_RefugeesDeepOnes)
- army-forest-guardians → work\mod-items-audit\decompiled\2932765110\CovenExpansionRecast\UM_ForestArmy.cs (UM_ForestArmy)
- forest-guardians-recruit → work\swwf-audit\dlc\Assets.Code\Task_Recruit.cs (Task_Recruit)
- army-dwarven-settlers → work\mod-items-audit\decompiled\2968835416\CommunityLib\UM_DwarvenSettlers.cs (UM_DwarvenSettlers)
- army-bestial-horde → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_OrcBeastArmy.cs (UM_OrcBeastArmy)
- bestial-horde-devouring-population → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Task_DevourLocation.cs (Task_DevourLocation)
- bestial-horde-ambush → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Task_DevourArmy.cs (Task_DevourArmy)
- army-orc-corsairs → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_OrcCorsair.cs (UM_OrcCorsair)
- orc-corsairs-pirate-trade-route → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Rt_Orcs_PirateTrade.cs (Rt_Orcs_PirateTrade)
- orc-corsairs-pillage-settlement → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\Rt_Orcs_PillageSettlement.cs (Rt_Orcs_PillageSettlement)
- army-orc-rabble → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_OrcRabble.cs (UM_OrcRabble)
- army-avenging-warriors → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_VengenceHorde.cs (UM_VengenceHorde)
- army-mercenaries → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_Mercenary.cs (UM_Mercenary)
- army-perfect-horde → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_PerfectHorde.cs (UM_PerfectHorde)
- perfect-horde-perfect-formation → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\BE_OrcPerfection.cs (BE_OrcPerfection)
- army-perfect-raiders → work\mod-items-audit\decompiled\3003549759\Orcs_Plus\UM_PerfectRaiders.cs (UM_PerfectRaiders)
- army-dispossessed-colonists → work\mod-items-audit\decompiled\3700090862\Surveyor\UM_SurveyorColonists.cs (UM_SurveyorColonists)

## 全目录覆盖

- 游戏本体（base，DLC）：12 / 19 个军队类收录；UM_ArmouredPopulace、UM_Iastur、UM_LuredCrowd、UM_MonsterHeart、UM_SheWhoWillFeast、UM_Tentacle、UM_WildernessSpirits
- Cordyceps（cordyceps，v2.0）：0 / 1 个军队类收录；UM_Vespidic_Swarm
- Ixthus, King of cups（2866026291，root）：0 / 1 个军队类收录；UM_armyTraps
- Kishi, God of Bloodshed（2879207914，root）：0 / 1 个军队类收录；UM_Bloodshed_DemonicArmy
- Living Void God（2879249746，v2.0）：未定义新的 UM 军队类。
- Chandalor the Cursed Bloom God（2879251084，v2.0）：未定义新的 UM 军队类。
- Deep Ones Plus（2879667447，v2.0）：10 / 10 个军队类收录；
- Flesh God（2900259087，v2.0）：0 / 5 个军队类收录；UM_AbomMilitary、UM_CalledFleshcrafters、UM_Escamrak、UM_FleshArmy、UM_SpawningGrounds
- Living Wilds（2932110698，v2.0）：未定义新的 UM 军队类。
- Covens, Curses & Curios Recast（2932765110，v2.0）：1 / 1 个军队类收录；
- Community Library（2968835416，v2.0）：1 / 1 个军队类收录；
- Adolia, the Faceless Memory（2980692812，v2.0）：0 / 1 个军队类收录；UM_Memory_Adolia
- KeeperItemMod（2988960487，root）：未定义新的 UM 军队类。
- Orcs Plus（3003549759，v2.0）：7 / 7 个军队类收录；
- Mirror God（3192034838，v2.0）：未定义新的 UM 军队类。
- Out of Gods（3232578780，root）：0 / 3 个军队类收录；UM_Abomination、UM_LotusMilitia、UM_Mercenaries
- Redeemer Agent（3236779751，v2.0）：未定义新的 UM 军队类。
- AAEnglishman and Mall's Event Pack - REDUX（3261852980，root）：未定义新的 UM 军队类。
- Aberrant Metal（3320562229，v2.0）：0 / 3 个军队类收录；UM_Factory_Laborers、UM_Factory_OrcArmy、UM_Factory_WalkingCity
- Alai, God of Webs（3383875039，root）：0 / 3 个军队类收录；UM_Web_BeckonedRefugees、UM_Web_DeepInitiates、UM_Web_RavagerArmy
- MEKHANE The Broken God（3591348120，v2.0）：0 / 12 个军队类收录；UM_Mek_ClockworkVirusInfected、UM_Mek_Colossus、UM_Mek_FleshBeast、UM_Mek_MekhaniteArmy、UM_Mek_MekhaniteArmyCogwork、UM_Mek_MekhaniteArmyMaxwellist、UM_Mek_MekhaniteArmyWeak、UM_Mek_SarkicArmy、UM_Mek_SarkicArmyUndead、UM_Mek_SarkicFleshThatHates、UM_Mek_SarkicWeak、UM_Mek_Zealots
- Villikos, the First Claimant（3647343379，v2.0）：0 / 6 个军队类收录；UM_FC_Converted、UM_FC_HumanLegion、UM_FC_Legitimists、UM_FC_PeasantArmy、UM_FC_Villikos、UM_FC_VillikosClaimant
- The Surveyor（3700090862，root）：1 / 1 个军队类收录；

未定义独立类的事件军队另外扫描 CREATE_CUSTOM_ARMY：有效本体事件中找到 Dragon，Mod JSON 未发现新增。

## 验证

- TypeScript 检查、pnpm run build:pages 成功，pages-dist 已同步 docs。
- 320 / 390 / 760 / 1024 / 1440 宽度检查通过；36 条目、26 卡片均可渲染，无破图或横向溢出。
- 手机侧边栏浮动，预览不触发提前跳转／展开；确认跳转与直接锚点访问通过。
- 图片检查了桌面、手机、引用预览及 Orcs Plus 扩展。
- 修改前快照核对：既有 app 文件仅改动 GodArchiveTypes.ts、GodIndex.tsx、page.tsx；未修改既有神祇或其他资料页内容。
- 未提交或推送 Git。
