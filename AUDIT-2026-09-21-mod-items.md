# 物品资料库：工坊全目录检查

日期：2026-09-21

## 范围与结果

- 检查 E:/Steam/steamapps/workshop/content/1741640 下全部 21 个数字编号 mod 目录，包括 DLL 类清单、物品继承链、相关获取调用、事件/配置、图片资源及可用旧版物品类。
- 有 v2.0 的使用 v2.0；未分版本的使用根目录。未执行 mod DLL。
- 10 个 mod 定义物品，共收录 77 个 mod 条目；其余 11 个不建立空分类。
- 找到 60 个继承 Item 的类，其中 MEKHANE 的两个是实现基类，不作为可持有物品展示。58 个具体物品类型，加 Adolia 的一个不同状态、KeeperItemMod 对 18 个本体物品的改版，共 77 项。
- 保留原本 39 个本体条目，页面共 116 项、15 个分类。状态/改版单独计条目，不冒充新的独立物品类型。

## 分类清单

| 工坊目录 | mod 名称 | 页面版本 | mod 条目数 |
|---|---|---|---:|
| 2866026291 | Ixthus, King of cups | root | 1 |
| 2879207914 | Kishi, God of Bloodshed | root | — |
| 2879249746 | Living Void God | v2.0 | 1 |
| 2879251084 | Chandalor the Cursed Bloom God | v2.0 | — |
| 2879667447 | Deep Ones Plus | v2.0 | 8 |
| 2900259087 | Flesh God | v2.0 | 5 |
| 2932110698 | Living Wilds | v2.0 | — |
| 2932765110 | Covens, Curses & Curios Recast | v2.0 | 13 |
| 2968835416 | Community Library | v2.0 | 2 |
| 2980692812 | Adolia, the Faceless Memory | v2.0 | 2 |
| 2988960487 | KeeperItemMod | root | 27 |
| 3003549759 | Orcs Plus | v2.0 | 7 |
| 3192034838 | Mirror God | v2.0 | — |
| 3232578780 | Out of Gods | root | — |
| 3236779751 | Redeemer Agent | v2.0 | — |
| 3261852980 | AAEnglishman and Mall's Event Pack - REDUX | root | — |
| 3320562229 | Aberrant Metal | v2.0 | — |
| 3383875039 | Alai, God of Webs | root | — |
| 3591348120 | MEKHANE The Broken God | v2.0 | 11 |
| 3647343379 | Villikos, the First Claimant | v2.0 | — |
| 3700090862 | The Surveyor | root | — |

无新增物品的目录仍检查了类继承与调用；例如 The Surveyor 的 ItemFromSurveyorOutpost 是交易界面而非 Item，事件包的剧情物件也未当成物品栏道具收录。

## 获取方式去重

- 普通、稀有、神器通用物品的共享途径各自抽至模块顶部“获取方式”。
- Flesh God、KeeperItemMod、Orcs Plus 保留分类共通的获取说明；Deep Ones Plus、Covens 的分组途径已移回各物品。
- 根据追加要求，仅覆盖部分物品的途径直接写入各自卡片；不再在分类顶部列“适用于”名单。个别价格与配方也留在卡片。
- 物品卡片保留独有获取方式。无独有内容时不渲染空获取方式栏。
- 合计 6 个分类获取方式板块、76 个带单独获取方式的卡片；共有 52 处物品适用途径从分组说明移回卡片。

## 未确认、未启用及实现异常

- Deep Ones Plus / Flotsam：存在物品类，未找到实例化或获得途径；页面标明未启用、获取方式未找到。
- MEKHANE / Mekhanite Glass Shard：有物品效果代码，但未找到正常获得途径；页面标明未启用、获取方式未找到。
- Community Library / Blank Test Item、Potion of Perfect Healing：测试物品，只有测试命令途径；未写成常规掉落。
- Covens / Doomed Prophet’s Ring：触发条件对 owner.unit 的空值判断与后续访问互相矛盾；正常触发未能确认，页面区分设计效果与代码问题。
- Covens / Razor Icon：Rats Theft 未找到完成效果实现，不能确认说明声称的偷取效果；确定实现的 Might 和 Danger 作用照录。
- 所有未确认的获得或作用均未用猜测补齐。

## 旧版本检查

页面仅写选定当前版本，不混入下列版本比较。

- 未发现只存在于所检查旧 DLL、而当前版本缺失的额外物品类。
- Covens 的 Razor Icon：v1.1 的相关 Danger 作用仅检查 Set_City；v2.0 增加 Set_DwarvenCity。
- Deep Ones Plus 的 Waterlogged Charm：较早版本说明笼统表示影响当地；v1.1/v2.0 明确描述 Deep One Cult 增长。这是说明差别。
- 比较范围为可用旧 DLL 的物品类、其名称/效果/数值/仪式等相关方法；不据此声称全部 mod 机制跨版本相同。

## 实现与验证

- 新增 app/ModItemsData.ts、app/ItemCatalogTypes.ts。
- 更新 app/BaseItemsData.ts 的公共获取方式组织、app/BaseItemsArchive.tsx 的分类导航与公共文字板块。
- 索引入口改名“游戏本体与 Mod 物品”；侧边栏按分类跳转，不为每件物品塞入导航。
- 复用已有物品功能、折叠、链接预览和移动弹窗。修复首次直达物品 hash 时，卡片展开尚未提交导致定位过早的问题。
- 共用渲染器仅导出 RichText 和调整物品获取方式空值渲染；不改神祇配置。
- 图像从 mod 资源及本体对应 Sprite 提取；清单见 assets.json、game-assets.json。
- TypeScript 检查、pnpm run build:pages 成功；构建资源同步到 docs，并逐文件核对 SHA-256。
- 在 1440、1024、390、320 像素宽度核验：116 卡片、无横向溢出、无失效图片、无重复锚点、无缺失目标、无空获取方式栏。
- 15 个分类跳转、手机直达链接、引用弹窗和跳转通过；浏览器运行时无异常。
- 本次开始时的源码快照比较：27 份文件完全不变；仅以下已有快照文件发生预期修改：BaseGodArchive.tsx、BaseItemsArchive.tsx、BaseItemsData.ts。
- 未提交或推送 Git；保留用户已有改动。

## 审计资料

- 工作目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit
- inventory.json：全目录清单、版本及配置；sources.json：当前 DLL 与 SHA-256。
- items-source.json：60 个 Item 继承类及引用；legacy.json 与 legacy/：旧版物品检查。
- records.json：初始逐项整理记录；共享获取方式抽取后的最终数据以项目 TypeScript 为准。
- assets.json、game-assets.json：图像来源。
- before.json：任务开始源码快照；ui-verification-specific.json：本次调整后的浏览器检查结果。
- 本体引用代码：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/swwf-audit/dlc/Assets.Code
- 本体 DLL：E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll

## 当前 mod 源文件

### 2866026291 · Ixthus, King of cups

- DLL：E:\Steam\steamapps\workshop\content\1741640\2866026291\ShadowsLib.dll
  - SHA-256：39169bbad209ceab6c89860e5b67db9de96ca712b601902a0b682cacab1c3900
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/ixthus

### 2879207914 · Kishi, God of Bloodshed

- DLL：E:\Steam\steamapps\workshop\content\1741640\2879207914\BloodshedGod.dll
  - SHA-256：9763fe3c74d32326add655b1ecbe6cd9d7ac78b0860fb6a3c4f6bdc0a33426b0
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/kishi

### 2879249746 · Living Void God

- DLL：E:\Steam\steamapps\workshop\content\1741640\2879249746\v2.0\God_Void.dll
  - SHA-256：3b09931b27cc8bd5c644f1eb568fda4962591b8e7a1d7fd003153c1526301978
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/void-2

### 2879251084 · Chandalor the Cursed Bloom God

- DLL：E:\Steam\steamapps\workshop\content\1741640\2879251084\v2.0\God_Love.dll
  - SHA-256：288023223f5df9c6234bc68a408afb93a840dcf5678daf0ce99742bd07bd62d3
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/love-2

### 2879667447 · Deep Ones Plus

- DLL：E:\Steam\steamapps\workshop\content\1741640\2879667447\v2.0\WonderblundrDeepOnes.dll
  - SHA-256：5d4ce15e5b1e0396b28c93f7ccbe2745f8f69f2daafca0f8e889ffb4ff29789c
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/2879667447

### 2900259087 · Flesh God

- DLL：E:\Steam\steamapps\workshop\content\1741640\2900259087\v2.0\God_Flesh.dll
  - SHA-256：629b842853fbf921dc2dfdd834ee05540665971e337f3c6b19da5ebe6d2cda9a
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/flesh-2

### 2932110698 · Living Wilds

- DLL：E:\Steam\steamapps\workshop\content\1741640\2932110698\v2.0\LivingWilds.dll
  - SHA-256：c28a223d0d20f314592f8c63ea54cede79696e0436196350d229ee4542473749
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/2932110698

### 2932765110 · Covens, Curses & Curios Recast

- DLL：E:\Steam\steamapps\workshop\content\1741640\2932765110\v2.0\CovenExpansionRecast.dll
  - SHA-256：6a3ecf1bc79bb7dcc7610da01e605e097579f3b64223d6312ac0147edaa6ed16
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/2932765110

### 2968835416 · Community Library

- DLL：E:\Steam\steamapps\workshop\content\1741640\2968835416\v2.0\CommunityLib.dll
  - SHA-256：47fb231e2ca1874d0c04e1760041a4a06730b2e8c2ef2afc071653b46295a859
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/2968835416

### 2980692812 · Adolia, the Faceless Memory

- DLL：E:\Steam\steamapps\workshop\content\1741640\2980692812\v2.0\FacelessMemory.dll
  - SHA-256：c8217271fc24fa6b69a0ae97749d44bb265cb10b42994b8994c503c799d360d1
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/batch-audit/adolia-2

### 2988960487 · KeeperItemMod

- DLL：E:\Steam\steamapps\workshop\content\1741640\2988960487\SOFGKeeperItemRebalanceAndAdditions.dll
  - SHA-256：e7a97e2c0ee75d91789b8033f95802f5a89a786b6114231a6a732e147f684ff1
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/2988960487

### 3003549759 · Orcs Plus

- DLL：E:\Steam\steamapps\workshop\content\1741640\3003549759\v2.0\Orcs Plus.dll
  - SHA-256：60aac8b11c03b8df5f818e66ab6c1ad9247d2584d15d142b44ae06e342adc3d0
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/3003549759

### 3192034838 · Mirror God

- DLL：E:\Steam\steamapps\workshop\content\1741640\3192034838\v2.0\God_Mirror.dll
  - SHA-256：b0d7d0a647cc36fbea03e02476c7bb97aba431a16c0d931b058280dba22eeb8d
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mirror-audit/v2.0

### 3232578780 · Out of Gods

- DLL：E:\Steam\steamapps\workshop\content\1741640\3232578780\ShadowsOutsiderGod.dll
  - SHA-256：a4acfdb4ecf43ffb85fdc1d0e8ba8cfdc5ccbe98418f96b8b2e7cb4b59266c69
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/outsiders-audit/decompiled

### 3236779751 · Redeemer Agent

- DLL：E:\Steam\steamapps\workshop\content\1741640\3236779751\v2.0\ModJam_Redeemer.dll
  - SHA-256：f552ca305b2de28d22f8576ad93c40945edadae5be34d928f79f0cc68ccfffc3
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/3236779751

### 3261852980 · AAEnglishman and Mall's Event Pack - REDUX

- 未发现 DLL；检查事件与配置。


### 3320562229 · Aberrant Metal

- DLL：E:\Steam\steamapps\workshop\content\1741640\3320562229\v2.0\ProductionGod.dll
  - SHA-256：b055f65394f28d2953801f652ce229ae7f19b66575fd10247f1d06ff0fa42625
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/aberrant-metal-audit/v2.0

### 3383875039 · Alai, God of Webs

- DLL：E:\Steam\steamapps\workshop\content\1741640\3383875039\WebGod.dll
  - SHA-256：1a0681bd8b4b3243e8e5bbb0d9f615ffa73ba9a7e604fc8146aca2854842825e
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/alai-audit/decompiled

### 3591348120 · MEKHANE The Broken God

- DLL：E:\Steam\steamapps\workshop\content\1741640\3591348120\v2.0\MEKHANE.dll
  - SHA-256：7a20ab215611aa45534128bc70d2c4f2672b81883f271615a3d63383560b0e6e
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mekhane-audit/v2

### 3647343379 · Villikos, the First Claimant

- DLL：E:\Steam\steamapps\workshop\content\1741640\3647343379\v2.0\FirstClaimant.dll
  - SHA-256：d7af7501289b4d0201aef356c5d81d806289e3b983ca720a6552170149f3e0b1
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/villikos-audit/v2

### 3700090862 · The Surveyor

- DLL：E:\Steam\steamapps\workshop\content\1741640\3700090862\TheSurveyor.dll
  - SHA-256：1d7ac87afd823014db7f7ce2bb4acfad340a7186b28abeb980364527d424c556
- 反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mod-items-audit/decompiled/3700090862

## 本地页面

http://127.0.0.1:8765/index.html?page=base-items
