# Alai 核查记录（2026-09-16）

## 数据来源

- 原始目录：E:/Steam/steamapps/workshop/content/1741640/3383875039。
- mod_desc.json：显示名 Alai, God of Webs，作者 Ben W.；DLL 内实际神名为 Alai, the Strings That Bind。
- WebGod.dll 完整反编译为 107 个 C# 文件，核对 God_Web、Kernel_Web、HarmonyPatches、全部神力、选择器、特质、诅咒、地点修正、单位、任务、教义；0Harmony.dll 为依赖库。
- 原目录共 71 个文件：55 张图片、14 个 JSON（13 个事件与 mod_desc）及 2 个 DLL。全部枚举、哈希；图片全部解码检查。
- 游戏本体的继承行为来自当前带 DLC 的 Assets.Code 反编译结果，参数来自 data/coreData/default/params.txt。
- 新增 nurture、theProphecy 图片从当前游戏实际 IconStore 引用提取；动态人物肖像不以其他图像冒充。

## 版本

原目录没有 2.0 或其他版本子目录，页面使用根目录。mod_desc 声明支持 1.1 和 2.0，但只有一套 DLL/事件/图片，无法比较两个独立版本，也不据此推断在两版游戏中的运行表现完全相同。

## 页面内容

- 页面：app/AlaiArchive.tsx，单个 GodConfig。
- 神力：27 项；封印 2/3/5/7/9 各展开四个互斥选择，非占位神力。
- 初始 Agent：属性与 3 项初始能力。
- 人物特质：17 项。
- 家族诅咒：9 项。
- 地点修正：23 项。
- 随从：3 项。
- 特殊人物与自主单位：4 项。
- 挑战：4 项。
- 英雄任务：2 项。
- 自主人物任务：5 项。
- 军队：3 项。
- 军队任务：2 项。
- 宗教与教义：1 项。
- 事件：13 项。
- 索引与详情名称/caption一致；Network 主题图标；原图完整包含于方形头像区域。
- 新引入的通用 Soul 已加入“游戏本体地点修正”，不含 Alai 专属来源。

## 关键核实

- 解封回合：0、12、24、44、72、108、152、204、264、330。最大500回合，330回合苏醒，苏醒恐慌70%。
- Agent上限：2/2/2/3/3/3/3/4/4/4；神力上限=封印+1。
- 神力恢复=0.035×神力上限×难度系数+0.075；表格仅显示难度1的数值。
- 初始3项神力；6个 Modal 类仅为选择占位，未重复收录。
- 四个 Awaken 地点目标通过有效性检查后，施放仍要求统治者已有地图人物单位；普通城主可能扣费并锁定选项却未生成 Embraced。
- Release Grasp 的宗教退费条件包含教义0，Pull the Strings 的宗教招募要求教义−1；教义模块只展示有效负等级。
- Alai’s Madness 覆盖普通 Madness 的回合效果；六种专属后效仍继承部分本体静态惩罚，按实际继承逐项列出。
- An Exchange 文本声称增加世界恐慌，执行分支没有相应增量；按实际执行结果展示。
- 特殊胜利要求三次吞噬 Chosen One 后继续事件路线；A Million Crystallized Lives 的两个选项前都已经生效英雄AI抑制。
- 事件选项保留英文原名，效果与正文分开；无数值效果的选项写“无效果”。

## 未确认与未收录

- Psychic Daze 与 Possessed 实现存在，但没有找到授予入口，未作为可获得内容列入页面。
- 动态人物、Puppet、Soul 的固定统一肖像未找到；它们实际沿用关联人物肖像，未编造固定图片。
- 独立版本差异无法确认，原因见版本节。
- 其余详细源码定位、文案/执行差异保存于 work/alai-audit/source-review.json；原始文件哈希见 source-inventory.json。

## 验证与查看

运行 TypeScript 检查及 pnpm run build:pages；成功后同步 pages-dist 到 docs。
数据/图片/跳转/手机与桌面检查结果：work/alai-audit/data-verification.json、ui-verification.json。
本地页面：http://127.0.0.1:8765/index.html?god=alai
