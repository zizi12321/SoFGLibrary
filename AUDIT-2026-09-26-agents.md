# 新增 Agent 核对记录（2026-09-26）

## 数据范围

恢复仓库 https://github.com/zizi12321/SoFGLibrary.git，起点 d1941e3。按既有 Agent、事件、军队、地点修正、角色特质、物品及随从页面结构增补；不改神祇页面与通用布局。

| Mod | Workshop ID | 有效内容 |
| --- | --- | --- |
| The Whisperer | 3236518418 | 根目录 |
| The Courtesan | 3237303618 | 根目录 |
| The Robber Baron | 3446675112 | v2.0 |

读取上述三个目录中的 DLL、说明、配置、参数和事件；图片按代码实际引用核对。使用 DLC 主程序 Assembly-CSharp.dll 核对继承值、挑战完成结算、招募流程、军队回合及事件命令。AAEnglishman and Mall's Event Pack REDUX（3261852980）提供另一些身份选项，Community Library（2968835416/v2.0）的 ModCore 注册 is_agent_whisperer / is_agent_courtesan，以实际加载类型识别。

## 版本核对

Robber Baron 根目录、v1.1、v2.0 的 CrimeBaron.dll 相同，SHA-256：
095BD739EB99D011281184D165343818EC38B632C75A65F8020F41B6E89BD73A

三份 params.txt 均设置 ch_combatbanditry_complexity: 40。当前本体该参数为 10；启用 Mod 后覆盖为 40，其他 Mod 再覆盖时遵循加载顺序。页面采用 v2.0；版本差异结论仅在此记录和交付说明中报告。

## 实现

- Agent 页：3 个 Agent，12 张技能/资源卡，14 张行动卡。基础属性、招募地点与限制、使用属性、Complexity、Profile、Menace、XP、完成效果、执行地点、具体公式均列出。
- 事件页：Ensnared Prey 与 The Scandal is Sprung，共 8 个选项，保留英文名称。确定发生的效果不显示抽选权重或 100%。
- Agent 事件栏：复用两项新事件；关联事件包的 14 项身份事件、选项及剧情后续，共 16 张卡。来源分别显示，原事件资料保持唯一。
- 角色特质页：Prey、Scandal in Motion；更新本体 The Hunger 的新增获得方式。Agent 自己的独有特质只在 Agent 页，不重复归入角色特质。
- 军队页：Mercenary Company，含初始 HP、吸收 Banditry、提升 HP 上限、分裂、AI 与 Recruit。
- 地点修正页：Robber Baron 对 Banditry 的扩展；保留原版数值，并列自然增长、建立、额外增长、减半、移除、Combat Banditry 参数覆盖。
- 物品页：Personal Item 的 Beguile 获得方式与 Cause Advanced Scandal 用途。
- 随从页：Ex-Mercenary 的三名 Sellsword，以及 Enchanting Words 免费招募既有本体/Mod 随从的途径。
- 复制 9 张实际 Mod 资源：三个 Agent 头像、Whisperer 三项行动图标、两个事件图像、一张佣兵示例肖像。佣兵实际随机使用 20 种肖像。动态目标/随从头像的行动明确说明，不虚构固定图标。
- 不添加新的独立物品、随从种类、地点、兴趣点、魔法或神祇页面：三份有效 DLL 无对应新增类型。

## 关键源码依据及文案差异

### The Whisperer

UAE_Whisperer / UAE_Abs_Whisperer：Undead、无灵魂、唯一招募与基础属性；加入本体 Rt_Vamp_Rest、T_VampiricCurse。继承的 HP=5；Vampiric Curse 在当地 Shadow ≥50% 时 Defence +4。

T_Whisperer_PsychicWhispers / T_Whisperer_Prey：仅一个猎物，资源每回合 +1；猎物死亡、成为可控人物或联系失效时清理。Mutual Support 的猎物侧标记在指定猎物时写入。Rt_Whisperer_PreyOn.validFor 对好感使用人物原始索引而非人物偏好标签（index + 10000），页面提示当前检查与限制文案的差别。

Rt_Whisperer_CommandPrey / ReshapePrey 与 Sel2 系列：25 资源在确认时消耗，取消不消耗；行动动机门槛 −40；同类任务取最高动机；排除进食。Sel2_Whisperer_IncreaseOpinion 直接清除既有态度并设 Like，并非逐级上调。

Rt_Whisperer_LurePrey / Task_Whisperer_Lured：完成扣 25；异地统治者退位成为 Warrior；领军人物离队。抵达后调用 whisperer.whisperer_lured。Kernel_Whisperer 的 WHISPERER_FEED / DEVOUR / RESETTLE / INFECT 决定事件真实效果。

Rt_Whisperer_EnthrallMinion：只包裹玩家可用且 Gold>0 的原始招募，保留渗透、Command 与种类限制；招募免费，图片和时间随原类型。

Rt_Whisperer_BloodOffering、T_Whisperer_BeingDevoured、Task_Whisperer_BeingDevoured 虽有定义，但有效构造、注册、事件未连接可达入口；不作为可用内容收录。

### The Courtesan

UAE_Abs_Courtesan、UAE_Courtesan、T_AlluringManipulator：Might 3 / Lore 1 / Intrigue 4 / Command 2 / HP 5；City 唯一招募。陪同目标按 UA 检查，不只限英雄。跟随失败停止，执行中好感变化不重新检查入口。

Rt_Accompany、Rt_ShadowAccompany、Rt_ScandalousAccompany：按真实属性组合、整数截断、Shadow 与好感计算 Complexity；采用百分数等价系数 0.45、1.2、0.18 表达。XP 为基础值的整数 2/3。

Rt_AdvancedScandal / T_Scandalous / Kernel_KatCourtesan / KatCourtesan.scandalousArrival.json：消耗合格 Personal Item；目标执行 Rest 时触发，并非必须到家或休息完成。四级丑闻实际效果逐项列出，最近英雄的筛选及关系变化与原命令一致。

事件包 Graveyard Shift 对 Courtesan 的 Unsuited for this kind of hardship 描述写 Profile +3，但 effects 为空；不写成真实数值收益/损失。

### The Robber Baron

UAE_CrimeBaron / UAE_Abs_CrimeBaron：City 且有 Banditry 或 Unrest≥50；Might 3 / Lore 1 / Intrigue 3 / Command 3 / HP 7。
T_UnderworldTies：低于 150 时 Banditry+4、Menace+0.5；检查时≥150 则设 150。不是所有 Banditry 的全局上限；本体低于 75 的 +2 仍叠加。
T_Racketeer 每回合 +3 Gold；T_ExMercenary 取得时 +75 Gold、三名原版 Sellsword。

Corrupt Ruler 说明写 25%，实际 Next(3)==0，即 33.33% 提升好感；页面采用实际值。支付 50 Gold 给统治者，个人 Shadow +50 个百分点；偏好减半按整数顺序计算。
Smuggle 为 Next(20,41)，20–40，各整数等概率；City 额外 +20。
Assemble Mercenary Company 花费 100 Gold，要求 Command≥4、Banditry≥30；HP 与最大 HP=floor(Banditry/2)，当地 Banditry 减半。

UM_MercenaryCompany 每回合吸收 Banditry≥20 的一半；最大 HP>120 时分成两支 floor(maxHP/2) 的满血军队。任务结算期间 Unit.turnTick 提前 return，不会每回合重置 Recruit；Task_Recruit 实际 5 回合恢复 floor(maxHP/5)。不占 Agent 名额、自主选择目标、不自动解散。

### Event Pack 条件边界

Whisperer 的 Bartering For Assassin Access、Witness in the house of coin、A Rowdy Tavern：虽然专属选项存在，外层要求 Human/Elf/Orc 等种族，普通 Undead Whisperer 不满足；沿用 Agent 页现有规则保留且标注通常不可达。
仅排除 Whisperer 的 Interrogation with a vampire 不作为专属事件收录。
Bartering For Access 与 Noble natured friendship 的计时入口异常，以及后者后续等待比较方向，沿用已核对事件目录的说明，不宣称当前正常可触发。

## 验证

scripts/check-agent-expansions.mjs 验证数量、必需属性、事件选项关联、图片、跨页锚点、真实换行、相关目录集成。使用 Node 24 执行；原 Node 18 不满足项目依赖要求。

另外执行 TypeScript 无缓存类型检查、GitHub Pages 静态构建及桌面/手机浏览器定向检查。编译产物更新到 docs；没有推送远端，也未执行游戏内实机回合测试。
