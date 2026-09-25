# 事件目录来源核对

当前展示 DLC 2.0 数据，Mod 优先读取 v2.0，否则读取根目录。事件与选项保留英文原名，机制说明使用中文。

## 当前结构与数量

- 通用目录分为任务中事件、其他事件、遗迹事件、事件链；各来源仍独立分栏。
- 共 8 个来源、521 个保留的分支/节点，整理为 431 个主条目。
- 38 组同名变体包含 128 个分支。每组独立成一个子分类，依次展示名称与整体描述、流程图、各分支的选项与效果卡片。
- 同名变体只在同一来源与分类内合组，并统一排在该分类的普通事件之后。事件链节点不套用变体模式，保持节点链接与原卡片结构。
- 遗迹事件包含本体 60 个节点，其中 12 条连续遗迹路线独立分组；其他仅以遗迹为场景的事件仍按实际入口分类。
- Mod 神祇来源的 85 个事件不放入通用事件目录，对应神祇页保留其资料。

| 来源 | 节点数 | 任务中事件 | 其他事件 | 遗迹事件 | 其他事件链节点 |
|---|---:|---:|---:|---:|---:|
| 游戏本体 | 246 | 66 | 82 | 60 | 38 |
| Deep Ones Plus | 7 | 5 | 2 | 0 | 0 |
| Living Wilds | 11 | 0 | 11 | 0 | 0 |
| Covens, Curses & Curios Recast | 3 | 3 | 0 | 0 | 0 |
| Community Library | 10 | 7 | 1 | 0 | 2 |
| Orcs Plus | 5 | 2 | 3 | 0 | 0 |
| Redeemer Agent | 1 | 0 | 1 | 0 | 0 |
| AAEnglishman and Mall's Event Pack - REDUX | 238 | 155 | 38 | 0 | 45 |

## 遗迹覆盖的精简

- Community Library 的 15 个遗迹覆盖定义不再使用独立卡片，包括先前已折叠成简短对比的 3 项。
- 8 条遗迹路线的新增单局首次发现限制，统一在 Community Library 的“遗迹事件”中说明并链接本体节点。
- Catalogue the findings 按遗迹记录最多 3 次，Vinerva 种子特质及 Tempt Ruler 的实际变更也纳入文字说明。
- Mountain Monastery 的内部标记改名、纯英文提示修正、图片前缀修正不在页面单独列出。
- 删除“与原版的区别 · 合并展示”及其数据字段、样式。
- 仍保留 4 个确有其他玩法变化的覆盖条目：Daughter Seer、Chosen One Mentor、Orcs Plus 的两个敬酒版本。对比栏只写实际机制变化。

## 同名变体与流程图

- Victory、Defeat、Mourning 等使用“概述卡 + 流程图卡 + 分支结果卡”，全部为同级折叠卡片。桌面每行四张，概述与流程图各占一格；可用内容宽度不足 1000px 时为两列，不足 600px 时为一列。
- 战斗结算按“对手 → Agent 攻守身份 → 败方状态”绘制流程图。所有分支相同的对手、攻守身份或败方状态仅在入口显示一次；图内只保留真正改变结果的判断。底层分支数据仍可逐叶还原原入口说明。
- 其他变体按实际触发入口分组，先检查共同条件，再检查差异条件，最后显示各分支的候选概率或权重及结果链接。同入口、同条件的候选共用判断节点；Mourning 的哀悼入口和人物关系入口分别显示。
- 主描述根据原始事件叙述概括；各分支保留原有英文选项名、选项条件、概率、数值效果和无法确认的提示。
- 图使用 SVG 箭头、菱形判断、是/否边和终止节点；支持放大查看，实际线路按节点位置计算。图中分别记录代码触发入口、公共条件、差异条件以及实际参与版本选择的概率/权重。只提取解析器格式化后的顶层 AND 公共项，嵌套 OR 整体保留。
- 每个分支共享条件与差异条件重组后，与原表达式的顶层 AND 条款逐一相同；没有把重叠条件误画为互斥的 if/else。
- 连续事件按 SHOW_EVENT 关系保留链式结构；The Auction 的三个直接相接节点归入事件链，未当作并列变体。
- 全部保留节点的条件、选项、结果与图片逐一对照整理前数据，无内容损失。

- 本体/Orcs Plus 的 The orcish toast、On the hunt、Opportunity cost、Witness in the field、Weird Dreams III 共 6 组互斥条件版本，从分流图与版本预览去除抽选权重；保留源数据及真正会竞争的重叠候选权重。
- 依据 Task_PerformChallenge.triggerMidChallengeEvent：MIDCHALLENGE 在全部符合条件的途中事件中按 probability 加权；互斥版本之间并非加权抽签。EventRuntime 的单位类型、种族、任务属性判定和对应 JSON 确认这些分流条件。
- 放大图链接委托到原卡片的引用组件，避免关闭放大图时销毁手机预览状态；Esc、关闭按钮、焦点返回与手机确认跳转均已验证。

## 来源与执行依据

- 本体事件：data/coreData 的直接子目录；官方 Cordyceps：data/optionalData/God_Insect/v2.0。
- 检查 Workshop 全部 21 个数字 ID Mod 文件夹；17 个包含事件定义。初始读取有效定义 631 个，另有 37 个当前加载器不扫描的嵌套旧定义被排除。
- 本体反编译：work/swwf-audit/dlc/Assets.Code。重点核对 EventManager、EventRuntime、EventParser、EventContext、EventData、PopupEvent、Task_PerformChallenge、Person、Ch_ExploreRuins。
- Ch_ExploreRuins.complete 按 INERT + ID 含 exploreRuins_ 取得候选，再检查条件和概率、按权重选择；遗迹路线的关联后续同放在该路线。
- Community Library：v2.0/OVERRIDE_*.json 与对应本体 JSON 逐字段比较；ModCore.cs 的修正叠加、种子命令，以及 Rt_TemptRuler.cs 的直接调用作为说明依据。
- Orcs Plus：ModCore.cs 的 DRINK_GROTT / GAIN_GROTT 与 T_Grott.cs；时长读取当前 Params.ch_primalWatersDur = 40。
- MIDCHALLENGE 使用候选权重，普通事件使用候选概率；探索同时有候选概率与权重。页面不把权重冒充触发百分比。
- 选项结果按实际 weight 归一化；环境记录先写入，再依次执行效果。未知命令会中断后续执行。

## 去重与旧链接

- The Entrance 的 10 种同效果幻象合成 1 张卡片，保留不同插图，注明游戏仍选择不同叙述。
- War in Heaven 的相同旧兼容定义合并至当前有效入口。
- 25 个移除/合并前的旧锚点仍有效；Community Library 遗迹旧链接转到文字说明，其余转到规范节点。
- 同名变体原节点锚点完全保留。真实跳转才展开对应分支及概述/流程卡；手机预览不会提前改变展开状态。

## 未确认与源文件异常

- anw.vengeance 的直接触发入口未找到，页面保留明确提示。
- 未找到 SHIFT_P1_TO_P2_RELATION 和带尾随空格的 PLACE_ARCANE_SECRET_PLAYER_ONLY 指令实现。
- 部分条件字段未注册、部分表达式含解析器未读取的后段；沿用现有明确提示。
- 部分 MIDCHALLENGE 又要求已被清零的事件计时达到阈值，常规入口无法满足；Noble natured friendship 的部分计时方向错误也保留说明。
- Deep Ones Plus 将部分奖励写入环境字段而未找到读取结算路径，实际效果未确认。
- Wonderblunder_DeepOnes.fisherman_debug 指定的 captain.jpg 未找到，不使用无关替代素材。

## 实现与验证

- 页面/数据：app/EventsArchive.tsx、app/EventsData.ts、app/EventTypes.ts。
- 变体：app/EventVariants.tsx、app/EventVariantModel.ts、app/EventFamilyDescriptions.ts、app/EventDecisionModel.ts、app/EventDecisionFlow.tsx；局部样式 app/event-variants.css。
- 共用神祇页面内容未改写；只扩展分类标签以支持事件目录的“遗迹事件”，并导出已有折叠卡片组件供复用。
- TypeScript 检查通过；pnpm run build:pages 成功并同步至 docs。
- 浏览器检查 320、390、760、1024、1440、1920 宽度，597 张实际折叠卡片全部展开时无横向溢出、重复 DOM ID、坏链接或运行时错误。
- 267 个不同图片地址均可读取；38 个变体子分类、521 个原节点、25 个旧锚点均验证。
- 原事件链中出现变体子分类的数量为 0；手机预览与确认后跳转通过。
- 自动检查：work/events-audit/check-variants.cjs、verify-variants.mjs、verify-flowchart.mjs；结果：invariants-variants.json、verification-variants.json、verification-flowchart.json。
- 本地查看：http://127.0.0.1:8765/index.html?page=events。

## Mod 读取路径与反编译目录

- Cordyceps：E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/optionalData/God_Insect/v2.0；反编译：work/cordyceps-audit/v2.0。
- Ixthus, King of cups：E:/Steam/steamapps/workshop/content/1741640/2866026291；反编译：work/batch-audit/ixthus。
- Kishi, God of Bloodshed：E:/Steam/steamapps/workshop/content/1741640/2879207914；反编译：work/batch-audit/kishi。
- Living Void God：E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0；反编译：work/batch-audit/void-2。
- Chandalor the Cursed Bloom God：E:/Steam/steamapps/workshop/content/1741640/2879251084/v2.0；反编译：work/batch-audit/love-2。
- Deep Ones Plus：E:/Steam/steamapps/workshop/content/1741640/2879667447/v2.0；反编译：work/mod-items-audit/decompiled/2879667447。
- Flesh God：E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0；反编译：work/batch-audit/flesh-2。
- Living Wilds：E:/Steam/steamapps/workshop/content/1741640/2932110698/v2.0；反编译：work/mod-items-audit/decompiled/2932110698。
- Covens, Curses & Curios Recast：E:/Steam/steamapps/workshop/content/1741640/2932765110/v2.0；反编译：work/mod-items-audit/decompiled/2932765110。
- Community Library：E:/Steam/steamapps/workshop/content/1741640/2968835416/v2.0；反编译：work/mod-items-audit/decompiled/2968835416。
- Adolia, the Faceless Memory：E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0；反编译：work/batch-audit/adolia-2。
- KeeperItemMod：E:/Steam/steamapps/workshop/content/1741640/2988960487；反编译：work/mod-items-audit/decompiled/2988960487。
- Orcs Plus：E:/Steam/steamapps/workshop/content/1741640/3003549759/v2.0；反编译：work/mod-items-audit/decompiled/3003549759。
- Mirror God：E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0；反编译：work/mirror-audit/v2.0。
- Out of Gods：E:/Steam/steamapps/workshop/content/1741640/3232578780；反编译：work/outsiders-audit/decompiled。
- Redeemer Agent：E:/Steam/steamapps/workshop/content/1741640/3236779751/v2.0；反编译：work/mod-items-audit/decompiled/3236779751。
- AAEnglishman and Mall's Event Pack - REDUX：E:/Steam/steamapps/workshop/content/1741640/3261852980；反编译：。
- Aberrant Metal：E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0；反编译：work/aberrant-metal-audit/v2.0。
- Alai, God of Webs：E:/Steam/steamapps/workshop/content/1741640/3383875039；反编译：work/alai-audit/decompiled。
- MEKHANE The Broken God：E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0；反编译：work/mekhane-audit/v2。
- Villikos, the First Claimant：E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0；反编译：work/villikos-audit/v2。
- The Surveyor：E:/Steam/steamapps/workshop/content/1741640/3700090862；反编译：work/mod-items-audit/decompiled/3700090862。

## 排除的未加载旧定义

- anw.friendE101：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101.json
- anw.friendE101M：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101m.json
- anw.friendE101MD：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101md.json
- anw.friendE1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e1a.json
- anw.friendE201：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e201.json
- anw.friendE202：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e202.json
- anw.friendE2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e2a.json
- anw.friendEm1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_em1.json
- anw.locButcher：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\location_butcher.json
- anw.moveCathedral1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_cathedral.json
- anw.moveCathedral2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_cathedral_2.json
- anw.moveDesertCity：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_desertCity.json
- anw.moveEmptyDesert：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_emptyDesert.json
- anw.moveEmptySnow：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_emptySnow.json
- anw.moveRuins：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_ruins.json
- anw.moveShadowVillage：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_shadowVillage.json
- anw.moveTown1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town.json
- anw.moveTown2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town2.json
- anw.moveTownMist：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town_mist.json
- anw.locPyro：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_0.json
- anw.locPyro1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_1.json
- anw.locPyro2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_2.json
- anw.locPyro2b：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_2b.json
- anw.locPyro3：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_3.json
- anw.locPyroE：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_e.json
- anw.twins01：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_01.json
- anw.twins02：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_02.json
- anw.twins03：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_03.json
- anw.twinsEnd：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_End.json
- anw.twinsR01：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R01.json
- anw.twinsR02：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R02.json
- anw.twinsR03：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R03.json
- anw.twinsR04：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R04.json
- anw.shadowProgress20：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\world_shadowProgress20.json
- anw.shadowProgress50：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\world_shadowProgress50.json
- fog.midchP2P_much_incommon：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\fog\rm\midchP2P_much_incommon.json
- fog.P2P_NPCver_much_incommon：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\fog\rm\P2P_NPCver_much_incommon.json

## 2026-09-25：剧情状态用途与简化流程图

- 对照 EventContext.updateEnvironment/readEnvironment/writeEnvironment、EventParser、EventRuntime，以及实际加载的事件与选项条件，追踪目录中 280 个字段的 1141 处写入。
- 更新 851 个选项的状态说明：一次性标记、共享次数上限、剧情阶段、人物/地点资格、种子数量、冷却和时间窗口；引用具体后续节点并保留原锚点。
- 不将状态条件通过写成必定触发；仍需其他条件及对应事件入口。严格大于的等待按最早可满足回合说明，例如超过 15 回合即选择后第 16 回合起。
- 比较方向错误、字段大小写不一致、未解析条件与本局/地点作用域不一致按源码标注；没有据此伪造正常冷却。
- 未找到后续用途的字段：ANW_FIRST_DAUGHTER、FOG_DREAMS3、WEIGHT_OF_THE_TASK、MAEREDUX_NOBLE_CONNECTIONS_EARNED、MAE_GVW_1。
- Deep Ones Plus 的奖励字段仍保留未找到实际结算路径的提示；未把字段写入等同于收到奖励。
- 同条件随机分支合并为一个结果框。途中事件的权重只换算为该框内的相对概率；其他事件继续使用候选检查概率，不冒充整局触发概率。
- 去除成立/是/否/排除/结束的冗余判断节点。放大图在可用宽度至少 900px 时每行最多三分支；战斗图展平后使用同一布局。
- 本次不改动神祇页面。事件目录仍为 521 个原节点、38 个同名分类、597 张折叠卡；普通事件在同名分类之前，事件链保持原结构。
- check-state-semantics.cjs 核对了 2404 行非状态效果文本未丢失、选项名称和条件不变、新增链接全部指向保留节点。check-variants.cjs 核对全部判定项和原图不变。
- TypeScript 与 build:pages 通过；320/390/760/1024/1440/1920 宽度下无横向溢出、坏锚点、重复 ID 或运行时错误；手机先预览后跳转通过。
- docs 与 pages-dist 的 1687 个构建文件逐个 SHA-256 校验一致。
- 本轮数据脚本：work/events-audit/flag-semantics.cjs；核对结果：verification-state-semantics.json、verification-variants.json、verification-flowchart.json。

## 2026-09-25：候选重叠与单结果框

- 流程图内只有一个候选时不显示抽选权重；独立的候选检查概率仍保留。
- The Alchemists：Human 同时满足 anw.mid_alchemist 与 fog.midch_alchemists，两个候选的组内概率各 50%；非 Human 只保留前者。
- Merchant of Antiquities、Watched、A light in the dark 同样按无附加条件的候选与较窄候选重叠分组。
- 另对 Sandstorm、The audacity!、Helping Hands、Potential Benefactor、Slow Learning、The turncoat and the hidden path 的地形、回合、冷却及双修正条件逐项分区；单独场景明确列出全部同时有效的候选。
- Source guard：app/EventSelectionCases.ts 保留每项原始 condition；源条件变化时不沿用未经重新核对的情形表。
- EventRuntime.cs：is_agent_human 要求受玩家控制且人物种族为 map.species_human；is_desertlike 覆盖 DESERT/DRY/ARID，不是独立地形。
- 5887 组源条件等价性检查通过；10 组重叠事件已校正。原事件卡片、选项与条件未改写，仅流程图重复列出在不同条件下仍有效的候选。
- 浏览器确认 Human 框为两个 50%、非 Human 框无权重；手机端先预览再跳转保持不变。
- 检查：check-selection-overlap.cjs、verify-selection.mjs；结果：verification-selection-overlap.json、verification-selection-ui.json。

## 2026-09-25：系列引用、语义名称与进入条件

- 覆盖同来源、同分类、同名系列全部成员的相同计数/等待限制，合并为“事件名 系列事件”链接；子集仍列具体语义分支。同名但来源不同或独立事件链不合并。
- 为系列整体卡增加配置预览对象；手机点击先展示系列说明，确认后展开并跳转。
- 38 组同名事件、128 个原分支全部使用语义名称；条件型按神祇、人物、地形或回合命名，同条件的不同叙事按实际叙述或选项区分。
- 分支卡上方列进入条件；重叠候选复用已经核对的 selectionRoutes，相对概率明确为抽中本系列后的组内分配。
- 521 个原节点、597 张卡和原选项数不变。2404 行非状态效果及全部选项名称/条件保留；5887 组源条件等价测试通过。
- 浏览器核对 320–1920 宽度、4 卡布局、放大图 3 分支布局、系列预览、手机确认跳转。
- Agent 页新增的事件使用相同数据；参见 AGENT_EVENTS_SOURCE_AUDIT.md。
