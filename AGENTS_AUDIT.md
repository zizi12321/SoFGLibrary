# Agent 资料库：来源与收录核对

## 结果

- 索引页底部“其他信息”新增 Agent。地址：http://127.0.0.1:8765/index.html?page=agents。
- 26 栏：19 种本体 Agent、2 类腐化人物（英雄、Acolyte）、5 种 Mod Agent／可控形态。
- 70 张技能卡、63 张专有挑战卡；70 份原始图片资源。每栏包含基础属性、招募条件、技能与专有挑战。
- 排除 Supplicant、神祇限定 Agent、不能由玩家控制的自主单位、仅存在但没有实际接入的类。
- 页面读取当前 DLC 本体；Mod 有版本目录时采用 2.0，否则采用根目录。未改写既有神祇页面。

## 本体来源

- E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll
- SHA256：42468a86dd6ca90e9090f303343babbdb266fefb63b0654423f63c4808a4fa46。
- 完整反编译目录：C:\Users\zi123\Documents\Codex\2026-09-12\shadows-of-forbidden-gods-e-steam-2\work\swwf-audit\dlc\Assets.Code。
- 招募入口：Overmind.addDefaultElements、PopupAgentCreation.populate、各 UAE_Abs_* 的招募判断和实例化方法。
- 能力与挑战：各 UAE_* 构造、getStartingTraits、相关 T_*、Rt_* 的执行条件与结算。
- 通用属性继承：UA、UAE、UAG、UAA、Person；数值参数对照 data/coreData/default/params.txt。
- 图片从实际游戏资源中的 IconStore／TextureStore Sprite 引用提取；模组图片按 getImg 引用复制。

## Workshop 文件夹逐项检查

| 文件夹 | Mod | 使用版本 | 结果 |
| --- | --- | --- | --- |
| 2866026291 | Ixthus, King of cups | root | Gawain 与 Vestige 属于 Ixthus 的生成链，排除。 |
| 2879207914 | Kishi, God of Bloodshed | root | Demon、Wight 属于 Kishi，排除。 |
| 2879249746 | Living Void God | v2.0 | 没有新增符合范围的 Agent。 |
| 2879251084 | Chandalor the Cursed Bloom God | v2.0 | 没有新增符合范围的 Agent。 |
| 2879667447 | Deep Ones Plus | v2.0 | 收录 The Fisherman、可由 Direct Control 接管的 Drowned Prophet。其余 UA 派生单位不可由玩家控制。 |
| 2900259087 | Flesh God | v2.0 | Flesh Abomination、Parasite 属于 Escamrak，排除。 |
| 2932110698 | Living Wilds | v2.0 | 收录既有可控人物感染后的 Werewolf 形态；野生生物和自主狼人排除。 |
| 2932765110 | Covens, Curses & Curios Recast | v2.0 | Spirit、Pigeon、Toad 为自主单位；未找到不限定神祇的玩家招募入口。 |
| 2968835416 | Community Library | v2.0 | 公共框架，无独立 Agent；招募界面修改见下文。 |
| 2980692812 | Adolia, the Faceless Memory | v2.0 | Adolia 及其衍生代理属于该神，排除。 |
| 2988960487 | KeeperItemMod | root | 物品模组，无独立 Agent。 |
| 3003549759 | Orcs Plus | v2.0 | Orc Elder、Spirit Caller 属于自主单位；虽有控制状态分支，未找到不限定神祇的招募入口。 |
| 3192034838 | Mirror God | v2.0 | 没有新增独立 Agent；神力对已有单位的控制不建立新职业。 |
| 3232578780 | Out of Gods | root | Addict、Representative、Fake Upstart 及衍生单位属于对应神祇的生成或控制链，排除。 |
| 3236779751 | Redeemer Agent | v2.0 | 收录 The Redeemer；其继任 Chosen One 的形态说明写在同栏。 |
| 3261852980 | AAEnglishman and Mall's Event Pack - REDUX | root | 事件包，无新 Agent 类型。 |
| 3320562229 | Aberrant Metal | v2.0 | Factory 及衍生单位属于 Aberrant Metal，排除。 |
| 3383875039 | Alai, God of Webs | root | Embraced、Attendant、Released Agent 属于 Alai，排除。 |
| 3591348120 | MEKHANE The Broken God | v2.0 | 机械教派代理及构造体属于 MEKHANE 的系统；未找到不限定神祇的玩家招募入口。 |
| 3647343379 | Villikos, the First Claimant | v2.0 | 没有新增独立 Agent 类型。 |
| 3700090862 | The Surveyor | root | 收录 The Surveyor。 |

所有 21 个数字编号 Mod 文件夹均已覆盖；生效 DLL 的 SHA256 与完整反编译记录逐一相符。工作目录、网页项目不当作 Mod。

## 收录项与具体源类

| 页面条目 | 分组 | 主要源类 | 技能 | 专有挑战 |
| --- | --- | --- | ---: | ---: |
| Heirophant | 游戏本体 | UAE_Hierophant | 0 | 3 |
| Warlock | 游戏本体 | UAE_Warlock | 3 | 0 |
| Warlord | 游戏本体 | UAE_Warlord | 0 | 4 |
| Bandit King | 游戏本体 | UAE_BanditKing | 0 | 0 |
| The Baroness | 游戏本体 | UAE_Baroness | 4 | 2 |
| The Trickster | 游戏本体 | UAE_Trickster | 3 | 3 |
| The Survivor | 游戏本体 | UAE_Survivor | 4 | 0 |
| The Plague Doctor | 游戏本体 | UAE_Doctor | 3 | 3 |
| The Courtier | 游戏本体 | UAE_Courtier | 3 | 4 |
| The Monarch | 游戏本体 | UAE_Monarch | 3 | 4 |
| The Cursed | 游戏本体 | UAE_Cursed | 2 | 0 |
| The Harvester | 游戏本体 | UAE_Harvester | 3 | 1 |
| The Buccaneer | 游戏本体 | UAE_Buccaneer | 3 | 2 |
| The Dissident | 游戏本体 | UAE_Dissident | 3 | 2 |
| The Shaman | 游戏本体 | UAE_Shaman | 4 | 1 |
| The Aristocrat | 游戏本体 | UAE_Aristocrat | 2 | 2 |
| The Spellbinder | 游戏本体 | UAE_Spellbinder | 3 | 3 |
| The Exiled | 游戏本体 | UAE_Exile | 2 | 3 |
| The Seeker | 游戏本体 | UAE_Seeker | 4 | 6 |
| 被腐化的英雄 | 游戏本体 | UAG | 1 | 0 |
| 被腐化的 Acolyte | 游戏本体 | UAA | 1 | 0 |
| The Fisherman | Deep Ones Plus | UAE_Wonderblunder_Fisherman | 4 | 7 |
| Drowned Prophet | Deep Ones Plus | UAEN_DrownedProphet | 2 | 7 |
| Werewolf | Living Wilds | UAEN_Nature_WerewolfInfected | 5 | 1 |
| The Redeemer | Redeemer Agent | UAE_Redeemer | 4 | 1 |
| The Surveyor | The Surveyor | UAE_Surveyor | 4 | 4 |

## 需要区分的实现细节

- The Buccaneer 招募抽象覆盖构造数值，最终是 Might 5、Lore 1、Intrigue 2、Command 4。
- Baroness 的 Vampiric Curse 与 Mistress of the Night 读取地点 Shadow；额外说明其可直接满足 The Hunger’s Promise 的执行者条件。
- Rt_Sacrifice_Beneath 虽存在，但未找到构造调用，The Exiled 实际仅装入另三项仪式，因此不作为可用挑战展示。
- Dark Coronation 属于通用挑战，其 Baroness 类型判断只用于成就；不将其误列为 Baroness 的专有挑战。
- Drowned Prophet 的 Hymn of Transformation 按结算代码把合格聚居地人口设为 (人口−3)/4 的整数部分；页面采用此实现，不采用提示中“转移四分之一人口”的简化描述。
- Drowned Prophet 的 Relinquish Control 当前实际增加 1 招募点；Direct Control 消耗神力而非常规招募点。
- Werewolf 的属性与 HP 由转化前单位继承，Might 另有最低 3；Wilderness Creature 仅在人类聚居地且未执行 Lay Low 时增长 Profile／Menace。
- The Redeemer 继任英雄时四项属性各 +1；其中 Might／Command 来自 Warrior 的构造过程。
- 本体腐化英雄／Acolyte 的招募阈值为 Shadow ≥98% 或 Insanity；本次检查的 Community Library 招募界面改为 ≥99.5% 或 Insanity。页面本体栏保留本体值。
- 通用魔法学派不展开成 Agent 专有挑战。继承英雄、Acolyte 的能力依原人物而定，不伪造统一技能组合。

## 不确定边界

Orc Elder、Spirit Caller、Spirit 等没有找到不限定神祇的实际招募入口，未因继承 UA 或存在控制分支就当作可招募 Agent。未验证任意第三方组合通过其他 Mod 钩子强行赋予控制权的情况。

## 实现与验证

- 新增：app/AgentsArchive.tsx、app/AgentsData.ts、app/AgentCatalogTypes.ts、app/agents.css、public/agents/。
- 集成仅修改 app/GodIndex.tsx、app/page.tsx 和 app/GodArchiveTypes.ts 的页面入口／类型。
- 原有 28 个 Archive 文件及其他未纳入集成修改的 app 文件逐一核对 SHA256，无变化。
- tsc --noEmit --incremental false 和 pnpm run build:pages 通过，构建产物同步至 docs。
- 浏览器验证320、390、760、1024、1440宽度：26个导航目标、133张折叠卡，图片正常、无横向溢出、无运行时异常。
- 手机侧栏浮层、先预览后跳转、跳转后展开卡片、直接带锚点进入页面均通过。

## 2026-09-26：玩法、种族与家族说明

- 当前共 29 个 Agent。统一补齐或整理浅色玩法概述；18 项另有特殊种族、变身类型或家族规则，放在玩法之后换行显示，链接预览也包含身份资料。
- 固定特殊种族：Warlord、Buccaneer、Shaman 为 Orc；Baroness、Harvester、Whisperer 为 Undead；Survivor 为 Monster；Dissident、Exiled 为 Elf；Drowned Prophet 为 Deep One。按各构造函数的 person.species 赋值核对。
- Warlock、Trickster、Courtier 的 UAE_Abstraction.createAgent 使用招募地点的 Society；无可用 Society 时回落到 soc_dark。UA 构造优先使用该势力无单位、无领地的闲置人物，否则 new Person(society)；新人物由 Person 构造从势力家族中分配，沿用人物则保留其家族。
- Redeemer 的 UAE_Abs_Redeemer 使用城市所属 Society；Surveyor 的 UAE_Abs_Surveyor 强制使用招募首都所属 Society。更换 Sponsorship 不重设 house；Redeemer 继任沿用原 Person。
- 被腐化的英雄、Acolyte 只是改变控制状态，保留原种族、家族。Werewolf 感染形态沿用原 Person，未重写 species 或 house；因此介绍狼人形态并注明继承，不写成统一的 Monster 种族。
- Drowned Prophet 出生时 new Person(深海国家或教团)，使用该势力家族；Direct Control 不重新创建人物。
- SG_AgentDark 同样继承 Society 的家族初始化，所以不能把其内部家族记录误写成完全没有 house。页面只额外强调上述真实当地势力/继承关系，不为普通黑暗 Agent 重复列内部默认分配。
- 删除 Agent 介绍中的“具有灵魂”，去除 9 处“可选特质 · 1 级”；能力正文中的掌握等级、等级条件与实际数值不变。
- 本次核对基于 sofglibrary-analysis/base-dlc、deep-ones、living-wilds、redeemer、surveyor、whisperer、courtesan、baron-v2 的源码；新增三项的其余资料见 AUDIT-2026-09-26-agents.md。
