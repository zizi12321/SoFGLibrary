# 全部 15 神祇的页面规范更新

> 后续调整：已按最新要求取消前中后期分组和整体流程，恢复连续编号；保留玩法风格，删除 SWWF 攻略建议。统一胜利/失败标题字号、修复 Cordyceps 等长基础信息的列宽；神力恢复最多四位小数；事件无效果选项统一为“无效果”。下文保留初次批量更新记录。

本轮保留原有额外信息，在其上方新增玩法风格，并补充整体流程。仅删除明确要求清理的教团重复说明；Kishi 的 Violent Omens 移至已有的“相关机制”。

## 修改统计

| 项目 | 完成内容 |
| --- | --- |
| 神祇页面 | 15 页，每页仍为独立且按模块顺序排列的 GodConfig |
| 核心玩法 | 45 个阶段，按前期、中期、后期分点展示 |
| 玩法风格、整体流程 | 各 15 份；流程支持名称悬浮与跳转 |
| 额外信息 | 14 页保留实质内容；Kishi 的原机制说明下移，不补写空泛内容 |
| 封印 | 130 行；统一标题和五列表头，窗口宽度不超过 1180px 时隐藏第五列 |
| 神力 | 上限/每回合恢复；按默认难度列数值，恢复公式置于表下；删除难度说明和平方上标 |
| 宗教教义 | 13 项教义、17 个有效档位；先列等级范围，再逐段显示有效等级 |
| 事件 | 43 个有选择的事件，共 71 个独立选项，条件与结果分别展示 |
| 头像 | 清除 9 项人物特质的图片配置；宗教教义与人物特质的悬浮提示也禁用头像 |
| 特殊失败 | 15 页新增位置；有特殊条件时写明，否则显示“无” |
| 索引名称 | 校正 Vinerva、Kishi、The Living Void；全部 15 个名称与详情一致 |

无选项的自动提示、代码危机和 Ixthus 的空 choices 事件没有硬补选项。

## 各神重点

- She Who Will Feast：删除难度系数解释；保留原攻略建议；写明苏醒军队死亡导致失败。
- Iastur：保留 Tome 与 Madness 补充说明；封印表显示两档 Tome 恢复值；事件选项单列。
- Vinerva：保留 Gift 与根系说明；A Darker Nature 拆为 −1、−2；礼物提示选项单列。
- Ophanim：保留真实的 Ophanimic Faith 教团；三项教义分级；圣地事件链等选项独立展示。
- Mammon：表下先列动态上限 M，再列恢复公式；胜利与山中财富归零失败分开。
- The Broken Maker：保留世代更替细节；说明无尽模式免除回合上限失败，但不免除英雄封印与预言导致的失败。
- The Evil Beneath：保留地下意识说明；写明心脏被摧毁导致失败。
- Death's Games：保留抽取概率、11 张卡牌及封印模块；神力固定 7/0.145714…。
- Cordyceps：保留收割与封印说明；Insectine Devotion 两档分列；两个可选择事件拆出选项。
- Ixthus：保留永生与复苏说明；Patrons of the Grail 增补 −1 的 +60 宗教任务执行意愿。
- Kishi：Violent Omens 放入已有“相关机制”，额外信息不再重复；索引使用完整名称。
- The Living Void：保留 Great Wound 与世界吞噬说明；明确取石挑战名称为 Nothing from Something，消耗 2 HP；教义与四个提示事件分项。
- Chandalor：保留婚姻与家族诅咒说明；Wicked Curses 有效档位和提示选项单列。
- Escamrak：保留初始能力说明和“神体 300”阈值；保持法术模块；神体毁灭后可重建。
- Adolia：保留化身计数与 Arcane Remedy 说明；Mass Delusion 仅展示 −3；九个选择事件拆出 26 个选项。

## 源码核对的重要结论

Iastur 的 Ch_BindIastur 虽仍存在于 DLL，却未在当前 DLC 挂载。Sub_Library 实际创建 Ch_WeakenIastur，结果为清空神力或增加可控人物的 Profile、Menace，不是直接致死。因此页面特殊失败显示“无”，没有收录旧灵魂致死机制。

The Broken Maker 的 God_Eternity 开启 opt_endless；Overmind 仅用此设置跳过回合上限失败。Set_TombOfGods 挂载的 Reforge the Seals 和 Fulfil the Prophecy 仍可调用失败结算。

没有发现这 15 神的现用代码禁用某一种通用胜利计分方式，或完全免除所有失败方式；没有补写这样的限制或免疫。

## 主要核对文件

- 本体 DLC 反编译：work/swwf-audit/dlc/Assets.Code 下的 Overmind、God、World、God_Eternity、Pr_Iastur、Sub_Library、Ch_WeakenIastur、Ch_BindIastur、Set_TombOfGods、Ch_ReforgeTheSeals、Ch_FulfillTheProphecy。
- 模组教义：H_expeditionPatrons、H_Bloodshed_MartyrForWar、H_VoidOrder、H_Memory；Kishi 恐慌来自 Kernel_Bloodshed.populatingWorldPanicReasons。
- 本体事件：游戏 data/coreData 的 modifier_ophanim、vinerva_giftAccepted、midchP2P_story_time、move_village_shook 和 faith_ruins 系列 JSON。
- Cordyceps 当前文件：data/optionalData/God_Insect/v2.0/world_insectAgent.json、combat_drone.json。
- 模组事件：2879249746、2879251084、2900259087、2980692812 各自 v2.0 目录下的事件 JSON。

反编译和测试工作目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work。
本轮完整事件文件清单见 standards-audit/event-sources.json。

## 验证与部署

- TypeScript 无错误；pnpm run build:pages 成功。
- pages-dist 已同步到 docs。
- 15 页分别检查 1440、1024、390、320 像素宽度；无横向溢出、失效本页锚点、重复 ID、损坏图片或原始标签泄漏。
- 窄屏四列、桌面五列；人物特质和宗教教义无头像；移动弹窗与跳转通过检查。
- 构建仍有单个 JavaScript 包超过 500 kB 的体积提醒，不影响构建成功。
- 本地预览：http://127.0.0.1:8765/index.html 。服务使用 Python http.server，绑定 127.0.0.1，根目录为项目 docs。
- 本轮未推送 GitHub，未执行关机。
