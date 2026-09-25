# 地点 Temperature / Prosperity 核查

日期：2026-09-25。范围为“地点”页面当前展示的 17 个地点介绍：本体 11 个、Mod 6 个。未重新引入已移往神祇页面的限定地点，也未把 Mod 规则写进本体说明。

## 页面实现

- LocationEnvironmentData.ts 保存每种地点的独立说明。
- LocationPageModel.ts 在地点原有简介之后插入 Temperature / Prosperity 两段；保留原有出现方式、兴趣点、共用行动和跳转。
- 两项数值均不适用的特殊地点明确指出其实际依赖的独立数值。
- “地点修正”来源与分类标题复用 plain-heading / section-index，删除上一版自行定义的标题字号。

## 本体依据

代码位于 work/swwf-audit/dlc/Assets.Code。

| 内容 | 依据 |
| --- | --- |
| Temperature 以百分数显示、50% 为温和中心 | UILeftLocation.setTo / smallDescDescs、Hex.getTemperature |
| 地表温度决定适居度，沿海修正、地下基础适居度固定 50% | Hex.getHabilitability |
| 人类适居度最低 15%、人口和粮食公式 | SettlementHuman.statsTurnTick / stats_population / getFoodGenerated / getMaxPopulation、Params |
| 人口超过承载上限每回合 -5；粮食不足积累 Hunger | SettlementHuman.stats_population |
| 城市与矮人城市接收同势力邻接小型聚居地剩余粮食 | SettlementHuman.recomputeFoodImported |
| City 的人口系数 180；其他人类体系为 90；小型聚居地封顶 40 | SettlementHuman.getMaxPopulation |
| 矮人城市人口上限翻倍，矮人两种据点城防 +20 | Set_DwarvenCity / Set_DwarvenOutpost |
| 矮人与精灵人口在承载、粮食各自 80% 以下才增长 | 对应类 stats_population |
| 精灵城市局部调温，40% / 60% 门槛与临时温差限值 | Set_ElvenCity.geoStabilisation、Params.socialGroup_elfClimateHeal |
| 城防由人口 × Prosperity 计算 | SettlementHuman.getMaxDefence |
| 常规军队基础 HP；矮人城市军队翻倍 | UM_HumanArmy.recomputeMaxHP |
| 税收系数 45，按人口 / 100 计算 | Act_TaxCitizens.complete、Params.act_tax_citizens_goldPerProsperity |
| 稀有商品补货概率为 prosperity - 1 | Ch_BuyItem.restock |
| Orc 夷平 / Raiders 掠夺金钱按目标人口与繁荣度计算 | UM_OrcArmy.turnTickInner、UM_OrcRaiders |
| Orc 默认适居度门槛 5%，低于门槛放弃领地 | SG_Orc.turnTick / canSettle、Params.orc_habRequirement |
| Deep Ones 人口转送、扩散与固定 50 城防 | Set_DeepOneSanctum / Set_DeepOneAbyssalCity |
| 其他特殊地点不继承 SettlementHuman 的人口与繁荣度经济 | Settlement、Set_CityRuins、Set_MinorOther、Set_TombOfGods |

公式采用界面百分数的数学含义，例如 50% 直接参与乘法；未加入“数值按 0–1 计”的说明。默认地下适居度 50% 时，基础产粮 39、Dwarven City 人口上限 88、Dwarven Outpost 上限 40。

矮人军队的重算函数会返回“翻倍后的最大 HP +15”，但每回合调用忽略返回值，只保留字段的翻倍结果；因此地点说明仅写持续生效的翻倍规则，不把返回值的 +15 当成常驻加成。

## Mod 依据

采用当前 v2.0 目录中的程序集：

- Deep Ones Plus：Set_Inundai_Palace、Set_SunkenRuins。前者人口生成 Emissary，不执行人类气候/繁荣度经济；后者保留 Infrastructure。
- Living Wilds：Set_Nature_NatureSanctuary、Pr_Nature_NatureSanctuary、Kernel_Nature.hexHabitability。保护区邻地适居度 +15 个百分点，来源保护区适居度低于 15% 时移除邻地加成。
- Living Wilds：Set_Nature_WolfRun.getDefence。防御为 Habitability ×100。
- Living Wilds：Set_Nature_UnoccupiedWilderness。防御为 0，无人类人口/繁荣度经济。
- Community Library：Set_Shipwreck 继承 Set_CityRuins；使用打捞兴趣点规则。

Mod 反编译位置：work/mod-items-audit/decompiled/2879667447、2932110698、2968835416。
