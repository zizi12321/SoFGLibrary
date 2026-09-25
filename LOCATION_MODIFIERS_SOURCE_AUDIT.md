# 地点修正来源与收录审计

日期：2026-09-25。页面路由仍为 ?page=base-location-modifiers，旧条目锚点保留。

## 范围

- 当前带 DLC 的本体；Workshop 全部 21 个数字 ID 目录。Mod 有 v2.0 时使用 v2.0，否则使用根目录。
- 排除玩家神祇专属修正及神祇专属变化；保留非神祇限定的 Agent、NPC、教义、事件与任务产生的修正。
- 不展示内部基类、无实际生成路径的遗留类；动态事件修正按玩家可见名称整理。
- 本体 64 项，7 个 Mod 共 45 项，总计 109 项。来源分别列出，按适用地点分类，每个修正只展示一次。
- 本次核验当前所选版本；未将旧版本差异混写进页面，也不据此声称所有历史版本完全一致。

## 来源清单

| 来源 | Workshop ID | 采用版本 | 收录数 |
| --- | --- | --- | ---: |
| Ixthus, King of cups | 2866026291 | root | 0 |
| Kishi, God of Bloodshed | 2879207914 | root | 0 |
| Living Void God | 2879249746 | v2.0 | 0 |
| Chandalor the Cursed Bloom God | 2879251084 | v2.0 | 0 |
| Deep Ones Plus | 2879667447 | v2.0 | 23 |
| Flesh God | 2900259087 | v2.0 | 0 |
| Living Wilds | 2932110698 | v2.0 | 7 |
| Covens, Curses & Curios Recast | 2932765110 | v2.0 | 5 |
| Community Library | 2968835416 | v2.0 | 1 |
| Adolia, the Faceless Memory | 2980692812 | v2.0 | 0 |
| KeeperItemMod | 2988960487 | root | 0 |
| Orcs Plus | 3003549759 | v2.0 | 3 |
| Mirror God | 3192034838 | v2.0 | 0 |
| Out of Gods | 3232578780 | root | 0 |
| Redeemer Agent | 3236779751 | v2.0 | 0 |
| AAEnglishman and Mall's Event Pack - REDUX | 3261852980 | root | 5 |
| Aberrant Metal | 3320562229 | v2.0 | 0 |
| Alai, God of Webs | 3383875039 | root | 0 |
| MEKHANE The Broken God | 3591348120 | v2.0 | 0 |
| Villikos, the First Claimant | 3647343379 | v2.0 | 0 |
| The Surveyor | 3700090862 | root | 1 |

## 核查依据

- 本体代码：work/swwf-audit/dlc/Assets.Code；检查 Property、继承类、创建路径、turnTick、提供的行动和事件操作。
- Mod 代码路径与 DLL 哈希见工作目录 work/location-modifiers-audit/inventory.json、validation.json。
- 同时检查 standardProperties 枚举、事件运行时和继承生成；未仅依赖构造函数调用计数。
- PrWM_CagedManticore 的父类来自本体程序集，单独纳入。
- 本体 DLL：E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll
- 本体 DLL SHA-256：42468a86dd6ca90e9090f303343babbdb266fefb63b0654423f63c4808a4fa46

## 特殊收录与排除

- Shadow 是引擎地点数值，并非 Property 子类，仍作为通用地点修正保留。
- Madness Effect 六种结果分别列出；Hunger/Famine 与动态名称的同一修正合并。
- Pr_EventCustom 按实际事件整理 Daughter Seer、Dragon Mountain、Elven Predictability、Mentor；Redux 的命名修正分别整理。
- Community Library 的 Daughter Seer 覆灭保留变体用来源说明处理，不另造重复卡。
- Fleeting Servant 在本体只由神祇产生，因此不进入本体分栏；Redux 存在通用事件生成路径，放入该 Mod。
- Deep Ones Plus 的 Inundai、Drowned Prophet 等是 NPC/实体机制，并非玩家神祇专属。
- Orcs Plus 的 Perfection、Explosives Stockpile、Immortal Remains 与 Vinerva 系修正需要神祇教义，排除。
- Chandalor 的 Wicked Curse 生成钩子检查当前神祇；MEKHANE 对应模块有神祇门槛，均排除。

## 数值判定

- 优先实际执行代码，区分自然变化、直接外部变化与对其他修正的效果；没有自然变化时不造空栏。
- Arcane Fortress 的单次伤害吸收判定直接使用 charge，与 tooltip 百分比措辞不同。
- Raided Port 的实际默认强度和衰减对应 25 回合。
- Deep Ones Plus 部分行动同时直接扣值并添加 influence，按两次实际扣减计算。
- Prosperous Waters 高等级实际上增加 Unrest；Coral Statues 对 Cult 的增长方向按代码确认。
- Robbed Graves 没有 tooltip 所述自然衰减实现；Redux Reduced Security 衰减参数名称不匹配，实际不会按标称 25 回合移除。
- 事件 EVENT_MODIFIER_ADJUST_CHARGE 是赋值而非累加。

## 图像和验证

- 87 个图像由实际 getSprite / EventManager 图像引用提取；本体 IconStore/TextureStore 以 Unity 资源指针核实。
- 动态人物肖像不以不相关固定图替代；图像清单见工作目录 asset-manifest.json。
- 109 个唯一卡片 ID、旧锚点、202 个外部引用、内部引用及全部图像文件校验通过。
- 浏览器 QA 覆盖桌面四列、手机侧栏悬浮、手机预览不提前展开、链接分类、跳转返回位置和运行时错误。
