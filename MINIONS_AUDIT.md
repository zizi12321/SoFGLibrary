# 随从资料库核对记录

## 2026-09-23 范围修订

- Wolf 来源更正为 The Survivor。依据 UAE_Survivor.getStartingTraits -> T_OnlyCompanions.onAcquire，首次取得特质时填充空槽；The Exile 并不提供此能力。
- 当前只收录非神祇限定随从：本体 24 种、Mod 新增 8 种，另列 2 项 Mod 获取途径，共 34 张卡片。
- 移除 Cordyceps 2 项、Ixthus 1 项、Kishi 2 项、Escamrak 5 项、Aberrant Metal 2 项、Alai 3 项、MEKHANE 4 项，共 19 项；明细见 work/minions-audit/excluded-god-minions.json。
- FleshGod_Kernal、Harmony_Stuff 的能力提供与初始化均受 God_Flesh 检查；MEKHANE 的教团与相关人物由 God_MEKHANE 初始化，因此不作为通用内容保留。其余移除项来自对应神的神力、特质或专有设施。
- 三位 Daughter 的事件条件没有神祇检查，继续收录。人物限定但非神祇限定的 Wolf、Mister Edgar、Skeletal Juggernaut 等保留。
- 物品、随从、宗教与教义、非玩家单位使用 CatalogueNavigation，分类沿用 Agent 页的小标题加链接列表形式。本体和各 Mod 同级，没有额外的 Mod 导航层。
- 保留物品稀有度、宗教适用范围、本体单位势力等内部分类；其他资料页内容不删除。
- 神祇详情页不修改，未删除素材文件。

## 首次扫描记录（历史范围，以下数量为移除前）
新增入口：索引页“其他信息”中，紧接物品页。路由：?page=minions。

## 范围与分类

- 游戏本体：当前 DLC 主程序集，加官方 Cordyceps v2.0 可选程序集、coreData 事件。
- 本体 26 种：19 种主程序集固定随从、5 种新增事件随从、2 种 Cordyceps 随从。
- 检查 Workshop 下全部 21 个数字编号目录；采用当前 2.0 子目录，无版本子目录时采用根目录。
- Mod 新增 25 种：23 个具体 Minion 子类与 2 种事件随从。另列 Deep Ones Plus 的 Faceless Servitor、Living Wilds 的 Wolf，两项复用本体随从的获取途径，灰底并链接本页本体条目。
- 合计 51 种随从、53 张卡片。收录人物、神祇限定随从；不收录 Agent 或军队。
- M_EventCustom 是事件模板，按实际 GENERATE_MINION 参数拆成条目；重复的事件版 Skeleton Warrior 合入本体同名条目。

## 依据

- work/minions-audit/inventory.json：所有 Mod 的 Minion 继承链、基础数值方法、图像 getter、创建调用点。
- work/minions-audit/current-dlls.json：本次实际读取 DLL 的 SHA256。Mod 活跃 DLL 与此前完整反编译的 sources.json 哈希逐一核对一致。
- work/minions-audit/events.json：完整遍历所选版本的 JSON、TXT、CS，列出全部创建随从的事件及选项。
- work/minions-audit/records-sources.json：每张条目对应代码类或事件文件。
- work/swwf-audit/dlc/Assets.Code：M_*.cs、Mt_*.cs、Minion、Params、Ch_RecruitMinion、Ch_RecruitOgre、Set_City/ElvenCity/OrcCamp、Sub_WitchCoven/Sewers、HolyOrder_Witches、T_OnlyCompanions、T_MonkeyAttack、Mg_SkeletalServitor、Mg_FacelessServitor、I_PortableSkeleton、EventRuntime、BattleAgents。
- work/cordyceps-audit/v2.0/ShadowsInsectGod.Code：M_Carapace、M_VespidicGuard、P_AssignGuard、UAEN_Haematophage。
- 各 Mod 的具体来源路径及方法见 inventory.json，数值不使用网页旧资料反推。
- 图片按 getIcon / 事件图片键导出；本体 Unity Sprite 由 TextureStore / IconStore 的实际 PPtr 提取。51 个资源映射见 work/minions-audit/asset-manifest.json。

## 特殊情况

- Mekhanite Firebrand：存在完整定义，未找到正常游戏创建/招募入口，获取方式明确写“未找到”。
- Thunderbird：事件使用 CovenExpansion.thunderBird.png，但当前 Mod 声明前缀为 CovenExpansionRecast；M_EventCustom.getIcon 查不到键时回退到 IconStore.dice。使用真实备用骰子图，未擅用候选图片代替。
- Puppet：HP 与肖像继承人物；没有唯一固定头像，不编造头像。Loyal Attendant 的文字提示与构造实际 HP 有差别，页面采用实际构造与 getMaxHP。
- Orc Corsair：Attack 在海岸或海洋 +2，Defence 仅在海洋 +2。
- Mekhanite Zealot：Attack / Defence 与 Militant Following 等级联动；招募使用 Divine Schema，Sarkic Initiate 使用 Sarkic Insights。
- Emanation 与 Embodiment 在获得对应特质时就进行补充；Embodiment 不检查 Command，满槽可替换 Sellsword / Knight。
- Only Companions / Attack Monkey 在首次获得时添加，turnTick 不补充。Mister Edgar 偷窃的实际钩子仅在其主人撤退时触发。
- Spiderling 的 Poison Bite 持续时间来自当前 Params.item_poisonedDaggerDur = 5。

## Mod 扫描清单

| ID | Mod | 采用版本 | 独有代码随从 | 新增事件随从 |
| --- | --- | --- | ---: | ---: |
| 2866026291 | Ixthus, King of cups | root | 1 | 0 |
| 2879207914 | Kishi, God of Bloodshed | root | 2 | 0 |
| 2879249746 | Living Void God | v2.0 | 0 | 0 |
| 2879251084 | Chandalor the Cursed Bloom God | v2.0 | 0 | 0 |
| 2879667447 | Deep Ones Plus | v2.0 | 0 | 0 |
| 2900259087 | Flesh God | v2.0 | 5 | 0 |
| 2932110698 | Living Wilds | v2.0 | 2 | 0 |
| 2932765110 | Covens, Curses & Curios Recast | v2.0 | 2 | 1 |
| 2968835416 | Community Library | v2.0 | 0 | 0 |
| 2980692812 | Adolia, the Faceless Memory | v2.0 | 0 | 0 |
| 2988960487 | KeeperItemMod | root | 0 | 0 |
| 3003549759 | Orcs Plus | v2.0 | 2 | 0 |
| 3192034838 | Mirror God | v2.0 | 0 | 0 |
| 3232578780 | Out of Gods | root | 0 | 0 |
| 3236779751 | Redeemer Agent | v2.0 | 0 | 0 |
| 3261852980 | AAEnglishman and Mall's Event Pack - REDUX | root | 0 | 1 |
| 3320562229 | Aberrant Metal | v2.0 | 2 | 0 |
| 3383875039 | Alai, God of Webs | root | 3 | 0 |
| 3591348120 | MEKHANE The Broken God | v2.0 | 4 | 0 |
| 3647343379 | Villikos, the First Claimant | v2.0 | 0 | 0 |
| 3700090862 | The Surveyor | root | 0 | 0 |

## 修改与验证

- 新增 app/MinionsArchive.tsx、app/MinionsData.ts、app/minions.css、public/minions。
- 现有 app 文件只修改 GodIndex.tsx、GodArchiveTypes.ts、page.tsx 的新入口/路由；其余现有页面与公共渲染器的 SHA256 均保持不变。
- 每项分别列出 HP / Attack / Defence / Command、功能、获取方式。英文名称保留，正文分行。
- 复用已有折叠卡片、浮层侧栏、移动端预览；侧栏按本体类别与 Mod 分组跳转。
- TypeScript 检查与 pnpm run build:pages 通过，产物同步至 docs。
- 320、390、760、1024、1440 五种宽度的 53 张卡片全部展开后无横向溢出、缺图或失效锚点。
- 验证手机侧栏不挤压正文；预览类别为“随从”；点击预览链接不会提前展开目标，点击前往按钮才展开跳转。验证 deep link 与 Puppet 动态数值换行。
- 浏览器结果：work/minions-audit/verification.json。

本地查看：http://127.0.0.1:8765/index.html?page=minions
