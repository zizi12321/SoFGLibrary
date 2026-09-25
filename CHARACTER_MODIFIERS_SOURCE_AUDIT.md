# 角色特质来源核验

使用当前带 DLC 本体、官方 Cordyceps 2.0 和各 Workshop Mod 的有效版本；不采用 basegame 或旧版本数值。核对 Trait / MinionTrait 的继承、构造调用、实际回调与事件命令，并补查家族 Curse。

## 收录范围

排除单个玩家 Agent（含 Supplicant）专有技能；仅保留不依赖特定可玩神祇的家族、物品、事件与通用宗教效果；本体和 Mod 的神祇专属技能、祝福、诅咒、感染及专属人物状态均排除。无正常创建入口、废弃实现、测试类和纯内部基类不展示。家族诅咒若只赋予同名人物特质，则合并于该特质。特质不配图。随从类特质和永久保留的条目不展示持续与移除栏目；其他条目仍保留有限时长、消耗和移除条件。

## 条目统计

| 来源 | 条目 |
| --- | ---: |
| 游戏本体 | 47 |
| Ixthus, King of cups | 0 |
| Kishi, God of Bloodshed | 0 |
| Living Void God | 0 |
| Chandalor the Cursed Bloom God | 0 |
| Deep Ones Plus | 19 |
| Flesh God | 0 |
| Living Wilds | 5 |
| Covens, Curses & Curios Recast | 18 |
| Community Library | 1 |
| Adolia, the Faceless Memory | 0 |
| KeeperItemMod | 2 |
| Orcs Plus | 5 |
| Mirror God | 0 |
| Out of Gods | 0 |
| Redeemer Agent | 0 |
| Event Pack Redux | 41 |
| Aberrant Metal | 0 |
| Alai, God of Webs | 0 |
| MEKHANE The Broken God | 0 |
| Villikos, the First Claimant | 0 |
| The Surveyor | 0 |

合计 138 项。已逐项核对 355 个本体与 Mod 特质类，全部有收录映射或明确排除理由；另纳入通用家族诅咒及事件生成的临时状态。神祇相关排除清单见 work/character-modifiers-audit/excluded-god-modifiers.json。

## 数值依据

以 turnTick、onAcquire、挑战 complete、战斗回调及事件 outcomes.effects 为准。特别核对：Ruinous Blade 状态给予受伤者；Strange Meat 为 25 回合、Attack/Might +3 与 HP 上限 −3；Divine Blessing 给予玩家 Agent；Shared Wisdom 为每回合刷新的一回合 Lore 改变。神祇专属内容不在本页展开。

## 核验文件

- work/character-modifiers-audit/inventory.json：类型及调用位置。
- work/character-modifiers-audit/catalogue.cjs：人工整理、临时状态效果提取及页面生成脚本。
- work/character-modifiers-audit/coverage.json：每个特质类的收录映射或排除理由。
- work/events-audit/active.json：当前有效事件定义；临时属性读取命令参数而非叙述文本。
- work/location-modifiers-audit/inventory.json：全部 21 个 Mod 文件夹、有效版本与程序集路径；本轮复核全部 20 个有效 DLL 的 SHA256 与已反编译版本一致，Event Pack Redux 为事件文件。

上述 work 路径位于本任务工作区，不在网页发布目录。普通玩家 Agent 专有能力仍由 Agent 页面承载。
