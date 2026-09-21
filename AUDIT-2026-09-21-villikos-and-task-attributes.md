# 2026-09-21：任务属性与 Villikos

## 变更范围

- 现有 24 个神页面仅补任务属性：7 个 Archive 共新增 55 个 meta 字段。
- Aberrant Metal 2、Kalastrophe 5、Lotus Egregore 2、MEKHANE 41、Paradoxis 1、Shadow Counsel 2、The Thing From Beyond 2。
- 现有 64 个统治者行动原本都有 time，已核对执行代码，无须重复添加。
- 优先按 getProgressPerTurnInner 实际使用的属性填写；没有属性加成的固定推进任务保留代码的类型标签。Mekhane 部分任务的 getChallengeType 与实际推进不一致，使用实际推进属性。
- 新增 Villikos, the First Claimant，为第 25 个神页面。独立 VillikosArchive.tsx、局部样式、真实素材、Crown 图标；仅扩展路由、索引和类型。
- 本次无 Git 提交、推送或关机操作。

## 来源与读取范围

模组目录：E:\Steam\steamapps\workshop\content\1741640\3647343379

完整枚举并读取 84 个文件，包括根目录 mod_desc.json、v1.1 与 v2.0 两版 DLL、全部事件定义及全部图片。两版 DLL 均已反编译；每版 67 个 C# 文件（含 AssemblyInfo）。所有 PNG/JPG 均完成解码验证。

反编译与检查记录：
C:\Users\zi123\Documents\Codex\2026-09-12\shadows-of-forbidden-gods-e-steam-2\work\villikos-audit

任务属性检查记录：
C:\Users\zi123\Documents\Codex\2026-09-12\shadows-of-forbidden-gods-e-steam-2\work\task-attributes

主要文件：

- v2.0\FirstClaimant.dll；God_FirstClaimant.cs：封印、13 项神力、Agent 上限、苏醒、Supplicant 特质、教义。
- ConquestGodKernal.cs、Society_FC_DarkEmpire.cs：额外胜利分、兼容处理、帝国管理、事件效果。
- P_FC_*.cs：实际消耗、目标判定与释放效果。
- Pr_FC_Claim.cs、Pr_FC_Conquest.cs、Pr_FC_ImperialLegions.cs、Pr_FC_Monument.cs、Pr_FC_SalttheEarth.cs：地点修正。
- T_FC_Imperial.cs、T_FC_PeasantLord.cs、T_FC_Supp*.cs：人物特质与初始能力。
- UM_FC_*.cs、Task_FC_*.cs：6 类军队、HP、吸收、占领、镇压、政变。
- Rt_FC_AssertClaim.cs、Rt_FC_Bloodline.cs：我方挑战；Ch_FC_OustImperialRuler.cs：英雄任务。
- Act_FC_ClimbRank.cs、Act_FC_KillRivals.cs、Act_FC_PurgeFamily.cs、Act_FC_ReplaceRuler.cs：4 项统治者行动。
- H_Villikos.cs、H_OrcPlus_Villikos.cs：2 项教义。
- loc_saltedEarth.json、p2p_villikos1.json、person_villikos1–4.json：6 个启用事件，13 个原文选项。
- 图片遵循 getGodPortrait、getGodBackground、getSprite、getIconFore、getPortraitForeground 的真实引用。本体图标由 level0 的 IconStore 序列化引用定位并导出，未按名称猜配。

带 DLC 的游戏本体：ShadowsOfForbiddenGods_Data\Managed\Assembly-CSharp.dll；已反编译的 God、Challenge、HolyTenet、IconStore 及通用修正类用于继承值核对。

## 页面收录

- 基础信息与核心玩法、封印（8 行）、神力（13 项）、初始 Agent（3 项能力）。
- 人物特质 2 项；地点修正 14 项（5 独有、9 通用，通用项灰底）。
- 占领聚居地 1 项；军队 6 类，含 HP 公式与固定行动。
- 教义 2 项；挑战 2 项；英雄任务 1 项；统治者行动 4 项（5、5、5、3 回合）。
- 事件 6 项；帝国与起义兼容机制。
- 公共地点修正页已有这 9 个通用修正，无须改写其内容。

## v1.1 与 v2.0 差异（不写入神页面）

- P_FC_LegitimistUprising 与 P_FC_PeasantUprising：v2.0 在标准及 Living Societies 起义路径中新增 Soc_Dwarves 国家构造分支。
- loc_saltedEarth.json：v2.0 在选项效果中显式加入 DESTROY_LOCATION。旧版 SALT_THE_EARTH 处理本身也可能使地点成为废墟，不能据此声称旧版保留城市。
- v2.0 新增 unit_god_dream_villikos.json，但 probability 为 0，且保留 Ophanim 相关未完成内容；不作为正常可触发事件收录。
- 其余事件与图片一致；13 项神力的解锁顺序与消耗一致。页面只采用 v2.0。

## 实现与说明不一致之处

- Claim 的说明提到渗透，validTarget 没有相应渗透限制；新建强度为 1。
- Assert Claim：已有修正直接设置为 100，新建只为 1，未采用说明中的 +25。
- Bannerlord：触发后 valid 只置 true，没有离开高 Claim 地点后清除的逻辑。
- Power-Grab：目标血脉检查对 OfType 返回集合判空，实际不要求其已有 Imperial Blood；是否生成 Royalist Army 则有真正的特质判定。
- Fragile Loyalties 的消息提及 Unrest，cast 未增加，页面不列此效果。
- Imperial Conquests 的被动开战消耗分支依赖从未启用的 isActive，页面不列为正常效果。
- Purge Family 文案提到 Political Instability，执行代码未增加。
- Imperial Green 未重写最大正面等级，继承 HolyTenet 的 2：范围为 −1–2，只有 −1 有本模组效果。
- 其余仅留定义、未接入正常注册/创建路径的神力、行动和仪式没有作为可用条目列出。

## 限定与未知

- 被 Conquest of the Soul 转化的军队继承原单位名称与肖像，没有独立固定图像。
- 占领聚居地保留原名称与外观，没有唯一固定图像。
- god portrait 原始素材为 960×540；在正方形头像区域完整等比显示，不裁切成错误头像。
- 跨模组兼容内容依据本 DLL 中的反射调用分析，未实际同时运行 Living Societies、Living Characters、Living Wilds、Orcs Plus 验证。
- 本次是静态代码/资源核对与网页测试，没有启动游戏进行完整流程实测。

## 验证与访问

- 全部 25 页共 167 条英雄任务、宗教任务、统治者行动：属性/耗时缺失为 0（68 个英雄任务、31 个宗教任务、68 个统治者行动）。
- pnpm exec tsc --noEmit 通过。
- pnpm run build:pages 通过，构建产物同步到 docs。
- 只对 Villikos 做页面检查：1440、1024、390、320 宽度；无横向溢出、失效图片、缺失锚点、重复 ID；手机弹窗与跳转通过。
- 已有神页面未做浏览器回归查看。
- 本地地址：http://127.0.0.1:8765/index.html?god=villikos
