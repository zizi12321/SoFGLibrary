# 发展型修正核对

范围：地点修正总览。维持原有109项非神祇专属修正；14项发展型修正移至最前，Madness 的6项长期结果保留独立卡片，列在其四张主卡片下方。其余89项保持来源／地点分类。God页面数据不变。

## 分类依据

仅列达到或超过300%时实际执行危机、转化或工程完成的修正。未仅凭canTriggerCrisis或最大强度分类。

| 来源 | 修正 | 实际门槛 | 结算 |
| --- | --- | --- | --- |
| 游戏本体 | Hunger / Famine | >300 | 饥荒毁灭 |
| 游戏本体 | Plague | >=300 | 清零并毁灭 |
| 游戏本体 | Madness | >=300 | 回落150，无已有效果时随机6选1 |
| 游戏本体 | Devastation | >=300 | 毁灭非Ruins聚居地 |
| 游戏本体 | Unrest | >=300 | 回落150、清Resentment，弹出3选项事件 |
| 游戏本体 | Death | >=300 | 每份修正仅一次，生成2只Ghast，不扣Death |
| 游戏本体 | Political Instability | >300 | 尝试国家内战并清零 |
| 游戏本体 | Deep One Cult | >=300 | 转Sanctum，70%人口输送、统治者转Deep One |
| 游戏本体 | Human Outpost | >300 | 建成City/MinorHuman，人口1 |
| Deep Ones Plus | Drowned Prophet Cult | >=300 | 接管地点、杀统治者、生成Horde及3名Breathless |
| Deep Ones Plus | Inundai Cult | >=300 | 首次宫殿/使者；后续成熟Cult输送人口 |
| Living Wilds | Dormant Werewolves | >=300 | 转Werewolf Run |
| Orcs Plus | Great Construction | >=300 | 完成专业化工程 |
| The Surveyor | Surveyor Outpost | >=300 | 资金成Cache、30HP移民，骗局崩溃 |

排除：Orcish Industry仅上限；Cthonians仅传播条件；Coral Statues的迁移阈值实际为150；Coral Mass Cult召唤阈值为100；Lucidity、Psychogenic Illness、Soul Snare、Spirit Tree仅封顶。

## 源码证据

本体：当前带DLC Assembly-CSharp反编译，work/swwf-audit/dlc/Assets.Code下对应Pr类及Settlement.fallIntoRuin、SettlementHuman.fallIntoRuin、Society.triggerCivilWar、Set_DeepOneSanctum、Pr_MadnessEffect、UAEN_Ghast。

Unrest事件：游戏data/coreData/default/modifier_unrest.json（anw.modifierUnrestCrisis）。
- Heads will roll：RULER_DIES。
- Rally the mob to war：非首都且渗透100，RULER_DIES + CITY_REBELS。
- The mob riots：CHANGE_DEVASTATION 100。
- 150回落与清除Lingering Resentment由Pr_Unrest先执行，不能把事件描述的“减半”当作任意输入值减半。
- 并非所有路线都处死统治者。

Mod有效v2.0反编译：work/mod-items-audit/decompiled。
- 2879667447/Wonderblunder_DeepOnes：Pr_Cult_DrownedProphet、Pr_Cult_Inundai、UM_Inundai_Refugees。后者实际显示名是Entranced Crowd。
- Drowned Prophet首次登陆才添加Landing；后续成熟地点只是归属转化。教团路线Horde的HP门槛为H<50；国家路线为H<=100。H来自当前地点遍历到的最后一支UM_HumanArmy，而非被消灭的军队总和。
- 2932110698/LivingWilds：Pr_Nature_WerewolfPopulation、Set_Nature_WolfRun、Sub_Nature_WolfRun。邻接与统治者额外增长都在活跃期分支内；血月当轮设置20回合计时，随后回合增长。
- 3003549759/Orcs_Plus：Pr_Orcs_GreatConstruction。先校验工程条件后检查300；3消耗Caged Manticore，5消耗Shipwreck，6允许地下通行。
- 3700090862/Surveyor：Pr_SurveyorFakeOutpost、UM_SurveyorColonists。虽然canTriggerCrisis为false，turnTick与collectFunds均实际调用300门槛崩溃。

## 实现与验证

- DevelopmentModifiers.ts保存分栏资料与非破坏性提取模型。
- BaseLocationModifiersArchive.tsx前置发展型修正与其导航，隐藏被提取后的空分组。
- 109个原修正ID逐一保留且仅出现一次；新增42张辅助说明卡，共151卡；14项各有介绍和来源、效果、变化方式、300%后效果四张主卡片。
- Madness的6项结果保持独立卡片，旧锚点仍有效；原连带影响卡片的旧锚点重定向至300%后效果。
- 所有Mod栏目明确显示Mod及来源名。
- 补充25个带预览的跨页面引用，核对目标锚点及图片。
- 原修正预览包含正常效果、阈值、事件选项和连带影响；辅助卡不自动引用自己。
- TypeScript及build:pages通过，更新docs。
- 浏览器2240px桌面与390px手机检查通过：4列自适应布局、无横溢出、无缺图、无重复ID、旧锚点展开正常。
- 手机首次点击只开预览；确认后跳转展开目标。同页返回在卡片高度变化后恢复误差小于1px。
