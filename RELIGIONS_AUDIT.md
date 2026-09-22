# 宗教与教义：来源与范围核对

日期：2026-09-22。页面采用当前 DLC 本体；Mod 使用 2.0 目录，无版本分目录时使用根目录。这里只记录本次新增页，不修改已有神祇页。

## 收录结果

- Holy Order · 通用教义：18 项。
- Holy Order · 条件加入：1 项。
- Witches · 附加教义：2 项。
- Deep Ones Plus · Children of the Drowned：8 项。
- Living Wilds · 狼人信仰：1 项。
- Covens, Curses & Curios Recast · Witches：5 项。
- Orcs Plus · Orc 文化：5 项。

共 40 项教义，100 段有效等级说明。本体 21 项，4 个 Mod 共 19 项；不显示 0 级或无效等级，不使用头像。

## 本体来源

- 当前 DLL：E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll
- SHA-256：42468a86dd6ca90e9090f303343babbdb266fefb63b0654423f63c4808a4fa46
- 反编译目录：work/swwf-audit/dlc/Assets.Code。
- 参数：E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/coreData/default/params.txt。
- 入口：HolyOrder 构造函数、HolyOrder_Witches、Ch_HungersPromise、UIE_HolyTenet。
- 实际效果：各 H_* 的 turnTick/addUtility，与 Ch_H_*、Sub_Temple、HolyOrder.turnTick/locationStolen、AN_*、Act_*、Pr_MilitaryFervor、Pr_Reconstruction 等调用链交叉核对。
- 普通教团 18 项、条件加入 The Feast 1 项、Witches 附加 2 项。神祇独有 Sect of the Serpent、Maddening Insight、Indulgences、A Darker Nature 及 Ophanim 三项独有教义排除。

## 全部 Workshop Mod 检查

枚举 Workshop 的全部 21 个数字目录，与源文件清单逐项匹配；当前使用的 DLL SHA-256 全部与既有反编译清单一致。另扫描 603 个配置、事件及文本文件，检查教义/教团相关入口。源码扫描包含 HolyTenet/HolyOrder 的间接继承、new/tenets.Add、Harmony 补丁与 Mod 配置。

| Workshop ID | Mod | 使用版本 | 结果 |
| --- | --- | --- | --- |
| 2866026291 | Ixthus, King of cups | root | 仅有 Ixthus 专属教义，排除。 |
| 2879207914 | Kishi, God of Bloodshed | root | 仅有 Kishi 专属教义，排除。 |
| 2879249746 | Living Void God | v2.0 | 仅有 Living Void 专属教义，排除。 |
| 2879251084 | Chandalor the Cursed Bloom God | v2.0 | 仅有 Chandalor 专属教义，排除。 |
| 2879667447 | Deep Ones Plus | v2.0 | 收录 8 项。Direct Control 类未被实例化或加入教团，排除。 |
| 2900259087 | Flesh God | v2.0 | Fleshcrafting 教义由 Escamrak 专属入口添加，排除。 |
| 2932110698 | Living Wilds | v2.0 | 收录 Liberation of Beasthood，核对 The Moon’s Gift 的 Seat/Coven 入口。 |
| 2932765110 | Covens, Curses & Curios Recast | v2.0 | 收录 5 项。Soulweavers 未找到实际加入教团的入口，排除。 |
| 2968835416 | Community Library | v2.0 | 共享接口与工具，无独立可选教义。 |
| 2980692812 | Adolia, the Faceless Memory | v2.0 | 仅有 Adolia 专属教义，排除。 |
| 2988960487 | KeeperItemMod | root | 物品替换系统，无新增可选教义。 |
| 3003549759 | Orcs Plus | v2.0 | 收录 4 项固定通用教义及通用回退 Shadow Warriors；其余映射到特定神祇，排除。 |
| 3192034838 | Mirror God | v2.0 | 仅有 Kalastrophe 专属教义，排除。 |
| 3232578780 | Out of Gods | root | 未发现独立通用教义。 |
| 3236779751 | Redeemer Agent | v2.0 | Agent 模组，未发现独立通用教义。 |
| 3261852980 | AAEnglishman and Mall's Event Pack - REDUX | root | 事件包引用现有宗教状态，未新增可选教义。 |
| 3320562229 | Aberrant Metal | v2.0 | 仅有 Aberrant Metal 专属教义，排除。 |
| 3383875039 | Alai, God of Webs | root | 仅有 Alai 专属教义，排除。 |
| 3591348120 | MEKHANE The Broken God | v2.0 | MEKHANE 与 Sarkic 的教团生成依赖 God_MEKHANE；44 个相关教义类均属该神体系，排除。 |
| 3647343379 | Villikos, the First Claimant | v2.0 | 主教义与 Orcs Plus 集成教义均限定 Villikos，排除。 |
| 3700090862 | The Surveyor | root | Agent 模组，未发现独立通用教义。 |

## 已确认的文案与实现差异

- Unified Faith 的教义描述写 100，但 Pr_Cult_DrownedProphet.maxCharge 实际为 300；页面使用 300。
- 3rd Hymn 的教义提示使用另一个名称，实际任务 getName 为 Hymn of Swords；页面使用实际任务名。
- Hymn of Transformation 对源聚居地直接赋值为 floor((人口−3)/4)，并把这个结果加入 Abyssal City；页面按赋值行为记录。
- Hymn of Swords 以人口计算军队 HP；当前实现保留源城市人口。
- Aviaries 文案写 Raven，T_MurderOfCrows 实际 new M_Crow；页面记录 Crow（HP 1 / Attack 2 / Defence 0 / Command 1）。
- Initiation Rites 的文案称每回合额外 4 Gold，代码 Math.Min(cash+4,cash) 保持原值；页面仅记录实际生效的人数上限及资金不变。
- Banishment 同时影响 Complexity 和额外 Danger，已按等级逐项计算。
- Orc Intolerance 除敌意筛选，还影响 Steal Plunder 的固有 Danger（+2 为四分之一、+1 为一半、−1 为两倍、−2 为三倍）。
- Orc Intolerance 的 +2 势力判断含 OR 条件，对通常的人类国家也成立，页面保留实际覆盖范围。
- Orc Expansionism 在 Mage Camp 评分中有一项只写入理由、没有累加到返回值的计算；未把这项记为实际收益。
- 未找到 Direct Control 与 Soulweavers 的实例化/加入教团入口；DLL 中存在类不等于可选，未收录。
- MEKHANE 的 Sarkic 虽是敌对宗教，生成入口仍依赖该神，未当作通用宗教收录。

## Mod 实现交叉核对

- Deep Ones Plus：HolyOrder_DrownedProphet.establishInitialTenentSpread；H_DrownedProphet_*；Ch_DrownedProphet_Banish、Mg_DrownedProphet_*、Ch_BreathlessDeepOnes、Act_EmbraceDrownedProphet、Pr_Cult_DrownedProphet。
- Living Wilds：Kernel_Nature.placeMoonsGift/processHolyChallenges、Ch_Nature_MoonsGift、H_Nature_LiberationOfBeasthood、Ch_H_Nature_*、狼人感染与自主行动逻辑。
- Covens：CovensCore.afterMapGenAfterHistorical 与 Unique Coven Tenets 配置；H_SharedKnowledge、H_OutcastShelters、H_Aviaries、H_Curseweavers、H_Initiation；Ch_H_CurseIntrudingAcolyte 与相应特质。
- Orcs Plus：HolyOrder_Orcs、ModData 神祇映射与默认回退、H_Orcs_*、AgentAIs、HarmonyPatches、ModCore.isHostileAlignment 及军队战斗伤害调用。

## 逐条来源

| 页面条目 | 类 | 反编译文件 |
| --- | --- | --- |
| Alignment Status | H_Alignment | work/swwf-audit/dlc/Assets.Code/H_Alignment.cs |
| Temple Builders | H_TempleBuilders | work/swwf-audit/dlc/Assets.Code/H_TempleBuilders.cs |
| Preachers | H_Preachers | work/swwf-audit/dlc/Assets.Code/H_Preachers.cs |
| Dogmatic | H_Dogmantic | work/swwf-audit/dlc/Assets.Code/H_Dogmantic.cs |
| Crusader Faith | H_CrusaderFaith | work/swwf-audit/dlc/Assets.Code/H_CrusaderFaith.cs |
| Intransigent Faith | H_IntransigentFaith | work/swwf-audit/dlc/Assets.Code/H_IntransigentFaith.cs |
| Abyssal Faith | H_AbyssalFaith | work/swwf-audit/dlc/Assets.Code/H_AbyssalFaith.cs |
| Awareness of Elder Powers | H_AwarenessOfElderPowers | work/swwf-audit/dlc/Assets.Code/H_AwarenessOfElderPowers.cs |
| Healers | H_Healers | work/swwf-audit/dlc/Assets.Code/H_Healers.cs |
| Candle Circles | H_CandleCircles | work/swwf-audit/dlc/Assets.Code/H_CandleCircles.cs |
| Funerary Rites | H_FuneraryRites | work/swwf-audit/dlc/Assets.Code/H_FuneraryRites.cs |
| Dark Worship | H_DarkWorship | work/swwf-audit/dlc/Assets.Code/H_DarkWorship.cs |
| Prophets of Doom | H_Doomsayers | work/swwf-audit/dlc/Assets.Code/H_Doomsayers.cs |
| Safety in Ignorance | H_SafetyInIgnorance | work/swwf-audit/dlc/Assets.Code/H_SafetyInIgnorance.cs |
| Charitable Works | H_CharitableWorks | work/swwf-audit/dlc/Assets.Code/H_CharitableWorks.cs |
| Music of the Outer Spheres | H_MusicOfTheOuterSpheres | work/swwf-audit/dlc/Assets.Code/H_MusicOfTheOuterSpheres.cs |
| Xenophobic Condemnation | H_XenophobicCondemnation | work/swwf-audit/dlc/Assets.Code/H_XenophobicCondemnation.cs |
| Explore the Darkness | H_Explore | work/swwf-audit/dlc/Assets.Code/H_Explore.cs |
| The Feast | H_TheFeast | work/swwf-audit/dlc/Assets.Code/H_TheFeast.cs |
| Arbormancy | H_W_Arboramancy | work/swwf-audit/dlc/Assets.Code/H_W_Arboramancy.cs |
| Human Sacrifice | H_W_HumanSacrifice | work/swwf-audit/dlc/Assets.Code/H_W_HumanSacrifice.cs |
| Banishment | H_DrownedProphet_Banish | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Banish.cs |
| 1st Hymn | H_DrownedProphet_Hymn1 | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Hymn1.cs |
| 2nd Hymn | H_DrownedProphet_Hymn2 | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Hymn2.cs |
| 3rd Hymn | H_DrownedProphet_Hymn3 | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Hymn3.cs |
| Silent Prayers | H_DrownedProphet_Prayer | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Prayer.cs |
| Of the Willing | H_DrownedProphet_Annex | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Annex.cs |
| To the Sea | H_DrownedProphet_AbyssalCities | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_AbyssalCities.cs |
| Unified Faith | H_DrownedProphet_Cults | work/mod-items-audit/decompiled/2879667447/Wonderblunder_DeepOnes/H_DrownedProphet_Cults.cs |
| Liberation of Beasthood | H_Nature_LiberationOfBeasthood | work/mod-items-audit/decompiled/2932110698/LivingWilds/H_Nature_LiberationOfBeasthood.cs |
| Shared Wisdom | H_SharedKnowledge | work/mod-items-audit/decompiled/2932765110/CovenExpansionRecast/H_SharedKnowledge.cs |
| Outcast Shelters | H_OutcastShelters | work/mod-items-audit/decompiled/2932765110/CovenExpansionRecast/H_OutcastShelters.cs |
| Aviaries | H_Aviaries | work/mod-items-audit/decompiled/2932765110/CovenExpansionRecast/H_Aviaries.cs |
| Curseweavers | H_Curseweavers | work/mod-items-audit/decompiled/2932765110/CovenExpansionRecast/H_Curseweavers.cs |
| Initiation Rites | H_Initiation | work/mod-items-audit/decompiled/2932765110/CovenExpansionRecast/H_Initiation.cs |
| Intolerance | H_Orcs_Intolerance | work/mod-items-audit/decompiled/3003549759/Orcs_Plus/H_Orcs_Intolerance.cs |
| Shadow Weaving | H_Orcs_ShadowWeaving | work/mod-items-audit/decompiled/3003549759/Orcs_Plus/H_Orcs_ShadowWeaving.cs |
| Industrious | H_Orcs_Industrious | work/mod-items-audit/decompiled/3003549759/Orcs_Plus/H_Orcs_Industrious.cs |
| Expansionism | H_Orcs_Expansionism | work/mod-items-audit/decompiled/3003549759/Orcs_Plus/H_Orcs_Expansionism.cs |
| Shadow Warriors | H_Orcs_ShadowWarriors | work/mod-items-audit/decompiled/3003549759/Orcs_Plus/H_Orcs_ShadowWarriors.cs |

## 页面变更与验证

- 新增 ReligionsArchive.tsx、ReligionsData.ts、ReligionCatalogTypes.ts、religions.css。
- 现有 app 文件仅改动 GodArchiveTypes.ts、GodIndex.tsx、page.tsx；其他既有文件与操作前 SHA-256 一致。
- 索引末尾新增入口，路由 ?page=religions，侧边栏为 7 个分组跳转。
- 复用现有折叠、悬浮侧边栏、链接预览和确认后跳转逻辑。
- 浏览器检查 320/390/760/1024/1440 宽度，全部 40 张卡片展开无横向溢出、无图片、无 0 级段落、无 undefined。
- 手机侧边栏展开不改变正文宽度；链接预览不提前展开卡片；点击前往后展开目标；预览分类显示宗教教义。
- TypeScript 检查与 pnpm run build:pages 成功，构建产物同步到 docs。
- 本地地址：http://127.0.0.1:8765/index.html?page=religions。
- 不推送 Git。

详细扫描证据保存在工作目录 work/religions-audit：inventory.json、entries.json、resource-scan.json、verification.json。
