# 魔法页面核对记录

新增入口：索引「军队」之后、「教义」之前，?page=magic。

## 范围与版本

- 游戏本体使用当前 DLC Assembly-CSharp.dll 的已反编译源码（work/swwf-audit/dlc/Assets.Code）。
- 已逐一核对 21 个 Workshop 数字目录；20 个当前有效 DLL 的 SHA-256 与对应反编译库存一致。优先有效 v2.0 内容，无分版本目录则使用根目录。
- 另检索 Cordyceps 的 v2.0 源码，未增加独立学派或法术。
- 含神祇关联的真正法术（例如 Fleshcrafting、裂隙法术），逐项说明限制；神力不混入魔法卡片。
- Mod 不按来源拆栏，而按学派、等级或无等级体系的载体合并。本体与 Mod 保持不同背景，每项标注来源。

## 收录

| 来源 | 项数 |
| --- | ---: |
| 游戏本体 | 26 |
| Deep Ones Plus | 21 |
| Flesh God / Escamrak | 11 |
| Covens, Curses & Curios Recast | 11 |
| Out of Gods | 3 |
| Orcs Plus | 2 |
| Living Wilds | 1 |
| Aberrant Metal | 1 |
| 合计 | 76 |

6 个体系：Blood Magic、Death Magic、Geomancy、Curseweaving、Fleshcrafting、Abyssal Magic。
本体统计包括 Elder Tomb 的 Arcane Fortress 版本及英雄 Attack Channeller 版本，各自数据不同。
Abyssal Magic 无传统学习等级，以 Locus、Shard、Drowned Prophet 仪式分组。
Curseweaving 的 Soulstone 操作和教义施法独立列在等级项后。

## 按实际实现确认的差异

- Enslave the Dead 上限使用 ch_releaseFromDeathMax，默认 50。
- Fading Memories 的有效 Complexity 为继承值 10；Locus 每回合消耗 1。
- Psychogenic Epidemic 在取得 Curseweaving 时加入，实际有效性检查未要求二级，因此按实际一级入口列出。
- Relentless Tides 的范围与概率按逐地块条件写明，包含前一地形判定失败时可落入后续判定。
- Deep Ones 的部分仪式同时直接修改 charge 和加入 influences，分别核对并说明实际合计。
- Sailor's Scorn 作用于物主个人；定期破坏装备不受沿海位置限制。
- Study Fleshcrafting 的持有门槛与完成扣除分别说明，保留当前代码的双知识池结算行为。
- Soul Transposition 配方在每局初始化时打乱，未虚构固定灵魂配方。
- 持续法术的 Profile / Menace 在开始施法时添加，其他法术在完成时添加。
- Mg_DrownedProphet 是父类，不作独立卡片；Mg_Curse_Wanderlust 无当前正常创建入口，未展示。

## 资源与验证

- 图标经各类 getSprite / getIcon 定位，从 Unity 原资源或实际 Mod 图片导出；61 个来源图像记录于工作目录 asset-manifest.json。
- 动态人物头像的法术明确注明；不以无关图片替代。
- 静态验证：76 项必填信息、131 个被引用图像路径、92 个链接目标记录；无重复 id、未解析的内部锚点、占位文字或转义换行。
- 浏览器：2240px 桌面四列、390px 手机一列；无横向溢出、破图或运行时错误。
- 手机预览弹窗可用，首次点链接不提前展开目标卡片。
- 索引位置、来源背景、全部展开/收起与带锚点直达已检查。
- TypeScript 检查与 build:pages 通过，生成内容已同步到 docs。
- 未提交或推送；未调整其他页面的条目内容。

工作底稿：work/magic-audit/ 下的 inventory、metadata、notes、catalogue、validation、browser-validation 文件。
