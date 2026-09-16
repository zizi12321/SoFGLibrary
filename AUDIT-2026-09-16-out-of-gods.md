# Out of Gods 五页核对记录

## 来源与版本

- 原 mod：E:/Steam/steamapps/workshop/content/1741640/3232578780
- mod_desc.json：displayedName 为 Out of Gods，作者 Flinch，prefix 为 outs，versionsSupported 为 2.0。
- 根目录共 29 个文件：1 个 DLL、1 个 JSON、27 个原始图片。没有 2.0 子目录、其他版本目录、事件定义文件或额外配置。
- 程序集：ShadowsOutsiderGod.dll，233984 bytes，AssemblyVersion 1.0.0.0。
- SHA-256：A4ACFDB4ECF43FFB85FDC1D0E8BA8CFDC5CCBE98418F96B8B2E7CB4B59266C69。
- 使用当前带 DLC 游戏 Assembly-CSharp.dll 解析程序集依赖。程序集版本号与游戏版本号是两个独立字段。
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/outsiders-audit/resolved/ShadowsOutsiderGod；核对 125 个 C# 源文件。
- DLC 兼容性字段按用户要求统一标注“必须要 DLC”。未运行无 DLC 游戏进行兼容性实验。
- 此目录只有一个程序集版本，未找到可用于差异比较的另一个版本。页面采用根目录版本。

## 注册与页面

ModCore.getGods 注册 God_Outsider、God_Paradoxis、God_Museconventional、God_Muse、God_Lotus，按该顺序新增五个独立 GodConfig 页面。

| 神祇 | 文件 | 独立神力数 | 其他模块 |
| --- | --- | ---: | --- |
| The Thing From Beyond, Interdimensional Parasite | ThingFromBeyondArchive.tsx | 8 | 人物特质、地点修正、地点与设施、物品、随从、特殊人物与自主单位、挑战、英雄任务、统治者行动、法术、军队 |
| Paradoxis, Closer of Loops | ParadoxisArchive.tsx | 7 | 人物特质、地点与设施、特殊人物与自主单位、英雄任务、军队、相关机制 |
| Shadow Counsel, Fickle Muse, Dark Advisor | ShadowCounselArchive.tsx | 6 | 人物特质、地点修正、地点与设施、特殊人物与自主单位、英雄任务、统治者行动、国家行动、军队 |
| Shadow Counsel, WAR-MODE | ShadowCounselWarArchive.tsx | 10 | 地点修正、军队、统治者行动、国家行动、相关机制 |
| Lotus Egregore, Collective blissful apathy | LotusEgregoreArchive.tsx | 9 | 地点修正、特殊人物与自主单位、英雄任务、军队、相关机制 |

总计 40 项独立神力。Lotus 的 Check Coffers 在 setup 中重复注册，页面只保留一张。所有已注册神力的 powerLevelReqs 均为 0；实际施放仍受 Power 容量、Coffers、目标及每回合限制约束。

## 关键依据

- 封印、容量、恢复、初始单位：五个 God_* 的 setup/getSealLevels/getAgentCaps/getMaxPower/getPowerPerTurn/onStart/turnTick 与本体 God、Overmind。
- 目标和效果：逐项读取 P_* 的 validTarget、cast；不以 getDesc/getRestrictionText 单独作判定。
- 任务类别：核对 validFor、isGoodTernary、npcOnly、AI 调用及可控状态。Public Study 可由玩家人物与法师英雄执行，列入挑战并说明；Burn Lotus Field 和 Shut down operation 列入英雄任务；Act_* 和 AN_* 分列统治者行动、国家行动。
- 任务参数：实际 getComplexity/getProfile/getMenace，以及本体 Challenge 的默认经验公式；默认为难度 1，不显示 Danger: 0。
- 统治者行动耗时：本体 Action 默认 7 回合；国家行动使用各 AN_* 的覆写值。
- 三项裂隙仪式 Rti_Borehole/Rti_Deathgate/Rti_Martyrdom 单列法术；Remodelling 列入挑战。
- 地点修正：Pr_* 与相关 God.turnTick、P.cast、Action.complete 的实际赋值；每个直接来源分行。
- 单位、军队、随从：UAE_*、UAEN_*、UM_* 及本体 Unit、Person、UM_OrcRaiders、UM_HumanArmy、Minion_Vermin 等。固定属性与继承项分开描述。
- 本体通用修正页新增 Plague、Well of Shadows、Military Fervour、Malign Catch、Orcish Funding、Orcish Industry；仅保留通用作用，现共 36 项。
- 图片：四套背景/肖像及 mod 图标使用原文件；本体图标由 IconStore/TextureStore 的序列化指针定位后提取 Sprite，没有按名称猜选近似图片。Shadow Counsel 两模式共用 DLL 指定的第三套肖像。
- 原有其他 16 位神祇的数据文件未修改；共享模板只增加可选来源 mod、初始上限/标题指标覆写及本体能力灰底支持。

## 描述与实现差异、潜在异常

1. The Thing From Beyond：八项神力均在封印 0 注册，但初始 Power 上限为 1；神力消耗由 1 至 8，封印提高容量。每回合共用一次施放机会。
2. Liquid Stone：说明文案写恢复 2 Defence，实际 addDefence 参数为 0.02；页面填写代码值。
3. Decorative Crystals：扣减的是修正自身强度，未找到同步降低地点 Shadow 的代码，因此不作为 Shadow 净化来源。
4. Manifest Serpent：目标检查仅检查人物存在，实际处决分支还检查 SettlementHuman；页面分别写出目标与生效条件。
5. Blood Magic: Discorporation 的 Lesser Rift 查重使用新实例的对象比较，通常会新增独立修正。Borehole/Deathgate 的范围伤害循环在出现第一名死亡者后停止；按实际行为描述。
6. Paradoxis：Temporal Redshift 2: Pause 销毁首个非空物品槽，而非随机物品。Temporal Blueshift 3: Hasten 留下衰退后的特质，阻止重复施放。
7. Paradoxis 在累计时间衰变 750 时失败；开局启用 endless，getMaxTurns 的名义 500 不会造成回合超时。
8. Shadow Counsel 的 Awareness 增幅使用缓存的 chargelevel；The Curse 首次结算前为 0，意味着增幅 100 个百分点，随后按最近结算强度计算。
9. WAR-MODE 开局启用 endless、移除全部人物单位并在以后持续清理；建立 Great Empire 时直接 awaken，常规封印不推进。
10. Lotus：Hire Agent 的目标检查没有核验空余 Agent 名额；Hire Specialist 将招募点设为 1，下一回合恢复 -1。
11. Lotus 的 Scale Up Distribution 按正常 20 点步进最高达到 280；出口存量提示的数量与实际出口计算使用的字段存在差异。
12. Lotus Users 断供时降低修正强度，但未同步降低 userscount，后续需求与显示百分比可能偏离。
13. Lotus getAgentCaps 仅有一个值 5，却有回合 500 的单个封印。本体按 sealsBroken 索引容量，进入下一阶段有越界风险。第 500 回合之后的实机结果未确认，页面明确标注。
14. DLL 中未找到注册或创建入口的 P_Shadowup/P_Shadowdown/P_ShadowyWhispers、Act_CentralisePower/Act_DecentralisePower、AN_Capitulate、Pr_Liquidity、UM_LotusMilitia 未作为可用内容收录。

## 验证

- TypeScript 无输出类型检查通过。
- pnpm run build:pages 构建通过，产物同步至 docs；存在既有大包体积警告，不影响构建。
- 全部 21 位神祇检查 1440/1024/390/320 四种宽度：无横向溢出、坏图、重复 id 或失效页内锚点；封印桌面五列、窄屏四列。
- 五页来源 mod 与 DLC 文本、索引名称/caption 一致性、桌面悬浮图文、手机弹窗跳转通过检查。
- 通用修正页 36 项、分行、返回索引、手机跳转通过检查。
- 这是源码分析与网页测试；未声称对上述所有游戏机制完成实机游玩验证。

## 原目录文件清单

- addict.png — 72466 bytes
- apparition.png — 15410 bytes
- brokendoll.png — 16423 bytes
- caravan.png — 116898 bytes
- god_background.jpg — 3694952 bytes
- god_background2.jpg — 686827 bytes
- god_background3.jpg — 260044 bytes
- god_background4.jpg — 479511 bytes
- god_portrait.png — 405819 bytes
- god_portrait2.png — 154076 bytes
- god_portrait3.png — 32327 bytes
- god_portrait4.png — 120994 bytes
- hand.png — 15051 bytes
- lesserpuppeteer.png — 17323 bytes
- lotus.png — 71445 bytes
- mod_desc.json — 188 bytes
- plantation.png — 131619 bytes
- puppeteer.png — 18797 bytes
- ShadowsOutsiderGod.dll — 233984 bytes
- tea.png — 68217 bytes
- time1.png — 36780 bytes
- time2.png — 26083 bytes
- time3.png — 34987 bytes
- time4.png — 25438 bytes
- time5.png — 25728 bytes
- time6.png — 20147 bytes
- time7.png — 26258 bytes
- tindalos.png — 70391 bytes
- whispers.png — 11066 bytes
