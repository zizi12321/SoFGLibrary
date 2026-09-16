# Aberrant Metal 源码核对记录 — 2026-09-16

## 范围与页面

- 来源 mod：Aberrant Metal，作者 Wonderblundr，Workshop 3320562229。
- 页面使用 v2.0/ProductionGod.dll、该目录全部六份事件 JSON、mod_config.json、mod_desc.json 和原始图像。
- v1.1 全部同名文件、DLL 的所有方法与 v2.0 对比；包内没有其他版本。
- 已读取根目录清单；完整文件名、长度与 SHA-256 清单保存在本任务 work/aberrant-metal-audit/source-inventory.json。
- 页面：app/AberrantMetalArchive.tsx；单个有序 GodConfig。入口、索引与 Factory 图标已接入；既有21个神的Archive未改动。
- 模组50张原图复制到 public/aberrant-metal，另从本体Unity序列化Sprite指针提取10个本体图像。没有生成替代素材。
- 本体地点修正页新增 Hunger / Famine，仅通用机制；专属工厂减量仅写在神祇页。

## 来源文件

模组根目录：E:/Steam/steamapps/workshop/content/1741640/3320562229

反编译输出：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/aberrant-metal-audit/v2.0/ProductionGod 与 v1.1/ProductionGod。

关键文件：
- God_FactoryGod.cs：注册神力与封印、阶段产量计数、Agent上限、苏醒。
- FactoryGodKernal.cs：地图挂钩、配置开关、地形与污染、事件变量、统治者行动注册。
- 全部13个P_Factory_*.cs：12项正式神力，及未注册的Drill。
- 全部Pr_Factory_*.cs、Sub_Factory*.cs、Settlement_Factory.cs、Settlement_MobileFactory.cs：修正、设施、城市转化。
- 全部UAEN_Factory*.cs、UM_Factory*.cs、M_FactoryGod*.cs、Mt_FactoryGod_Laborer.cs、T_Factory*.cs、Rt_Factory*.cs、BE_Factory_Smog.cs：人物、随从、军队、协议、模式与战斗效果。
- 全部Ch_Factory*.cs、Act_Factory*.cs、Mg_Factory_SmogCold.cs、H_FactoryGod.cs：执行者、任务数值、行动时间、法术和教义。
- 六份事件：loc_factorycrowd、loc_factorysettlement、mid_factorycore1/2、mid_factorysmog1/2。
- 游戏主程序 Assembly-CSharp.dll、BaseGame/…/Assembly-CSharp.dll；本体 God、Map、Overmind、Challenge、Action、Unit、Person、UAE_Supplicant、UM_OrcArmy、UM_HumanArmy、UM_LuredCrowd、BattleArmy、Pr_Famine、SettlementHuman、Property、Location 等。
- data/coreData/default/params.txt：恢复0.035，工业系数0.35，Under Smog系数0.2，封印任务复杂度170/2，Ash Fall降温0.18与引导危险160。
- 本体Unity level0的IconStore、TextureStore与其Sprite实际引用。

## 页面模块

- 人物特质：4项。
- 地点修正：22项。
- 地点与设施：7项。
- 随从：2项。
- 特殊人物与自主单位：3项。
- 挑战：9项。
- 英雄任务：2项。
- 统治者行动：1项。
- 军队：4项。
- 法术：1项。
- 宗教与教义：1项。
- 事件：6项。
- 机制：1项。
- 神力：12项；封印0–9共10行；Supplicant为三选一能力；自主协议与军队模式放在所属单位的abilities。
- 默认难度下Power上限1–10、恢复0.035–0.35；封印门槛逐阶段为10、100、250、500、750、1000、1500、2000、4000。

## v1.1 与 v2.0 的差异（只在本记录与交付说明中报告）

- 两版各82个模组源码类，没有新增/删除；84个反编译文件中75个一致，8个CS及1个工程文件不同。809个方法中10个IL实现不同。
- 六份事件、描述文件、原有40张PNG和6张JPG完全相同。
- v2.0增加4张Dwarven Siphon图；改动DLL和配置文件。
- Begin Production与Chief Engineer支持Dwarven City。
- 配置增加默认开启的Dwarven Siphons，并在矮人城市注册Harvest Aberrant Metal；但valid所有分支均false，建造链仍不可达。
- Maintain Siphon的valid由恒false改为有条件可用，但正常建造入口仍被上条阻断。
- 污染统计、区域破坏与烟雾区域按所在地层处理；Ash Fall只直接修改地表层。
- Contaminated Waters仅在地表达到100后产生Smog；额外传播步骤判空层与实际读取的地下层不一致，存在索引错误风险。
- v2.0依赖Set_DwarvenCity、Hex.z与三维Map.grid；旧BaseGame程序集缺少这些接口。未找到Steam DLC所有权检查或明确付费DLC声明，不能据此直接写“必须购买DLC”。

## 实现与提示文本不一致 / 未接通内容

- Blood is Fuel与Blood for Units只写sealProgress，没有写totalUnits。God.turnTick先重算当前阶段，瞬时增量会被覆盖。Blood for Units实际×20 HP，文案×10。
- Banish Production Core的即时进度扣减同样被覆盖；核心被毁与失去未来产出仍有效。
- Smog-Bound实际初值/刷新100，终点额外按0.15×Smog衰减；提示写50回合。
- Banish Production Core的Danger由固有5加方法内基础5构成，基础实际10，再叠加设施/军队/特殊地点。
- Clear Ruined Core实际增加10×Lore消退，消息写5×Lore。
- Holy Fumes按当前Elder Influence点数×0.1产烟，而非Alignment等级。
- Ash Fall消耗的是执行回合与引导进度，没有消耗Smog的代码；完成无额外效果。
- Mobile Factory初始HP为人口×2。采集不足10人仍固定+20HP；模式切换完成回合会执行两次模式动作；采矿首次10次，随后3次恢复1Power。
- 核心在Orc Fortress的Efficiency上限重复使用本地Industry计入每个合格邻地；Smog-Born军队则使用各地点实际Industry。
- Biometallic Mass的食物倍率使用缓存Efficiency，Recycler存活时不刷新该缓存。
- 新建部分污染时既设置初值又加等量influence；对应具体实现已在条目中注明。
- Begin Production的选项文字排序与候选对象列表未同步，可能显示名与实际替换目标错位。
- Core位置列表不清空，重复记录可能影响依赖列表的AI选择；没有改写游戏代码。
- 构造体Person反向绑定、Repomen的lastLoc更新存在实现问题；不据未注册代码推断额外能力。

未作为正常页面功能收录：
- Drill（P_Factory_Mine）：没有加入powers。
- Harvest Aberrant Metal→Dwarven Siphon→Sabotage Siphon→Sabotaged Siphon→Maintain Siphon/爆炸：正常建造入口恒false；外部创建或遗留存档若已有属性，后续定义可能运行。
- Clear Aberrant Metal：未发现行动注册。
- Rebuild Self、Processing：未加入单位rituals；满血后也没有自动结束实现。
- Destroyed Core、Ruined Gatherer、Pr_Factory_Influence：未找到正常实例化路径。核心废墟实际使用Sub_Factory_ProductionCoreDestroyed设施，不是前述闲置Property。
- Gatherer为父类；未发现独立生成。

## 事件按实际表达式

- An Extra Chimney：Command>2；工具结果25%无、25%Uncommon、50%Common。
- Unnatural Clouds：谣言进度−15；兜售失败Menace+10。
- Oasis of Blue：寻找防护两个结果的实际数值相同；削弱Nature Ritual实际60%减少100。
- 六个事件全部选项与条件已拆开；无额外作用统一“无效果”。

## 验证

- TypeScript --noEmit通过。
- pnpm run build:pages成功；Vite仅报告bundle较大的非阻断警告。
- 输出同步docs；本地HTTP服务只绑定127.0.0.1:8765，目录为docs。
- 22个神 × 1440/1024/390/320四个宽度的回归检查通过：无横向溢出、坏图、断链、重复id、原始CrossReference文本；封印宽屏5列、窄屏4列。
- 新页悬浮说明、图像、手机弹窗和展开跳转通过；索引名与caption一致。
- 通用修正页37项：四宽度、无逐卡导航、弹窗跳转、无坏图与神祇专属信息泄漏检查通过。
- 未进行游戏内开局实测；本文与页面按本地DLL实际实现及本体调用链整理。
- 没有推送GitHub。

本地预览：http://127.0.0.1:8765/index.html?god=aberrant-metal
