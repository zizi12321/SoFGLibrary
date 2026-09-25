# 地点与兴趣点：源码核对记录

## 范围

- 带 DLC 的本体程序集；Cordyceps 使用官方可选内容的 v2.0。
- 已逐个检查 Workshop 下全部数字编号目录。Mod 使用其有效 2.0 目录；没有版本目录时使用根目录。
- 包括神祇限定内容。地点与兴趣点分开；地点修正不会因名称类似建筑而重分类。
- 常规地图收录 34 个地点、58 个兴趣点、268 项行动。另列 15 个未找到独立正常生成路径的类型。独立教程原型不混入常规地图。

## 程序集与反编译目录

- 本体：`E:/Steam/steamapps/common/Shadows of Forbidden Gods/ShadowsOfForbiddenGods_Data/Managed/Assembly-CSharp.dll`
- SHA256：`42468a86dd6ca90e9090f303343babbdb266fefb63b0654423f63c4808a4fa46`
- 对应反编译：`work/swwf-audit/dlc/Assets.Code`

| 来源 | 地点 | 兴趣点 | 未找到生成路径 | 行动详情 |
|---|---:|---:|---:|---:|
| 游戏本体 | 13 | 24 | 0 | 108 |
| Cordyceps | 1 | 1 | 0 | 3 |
| Ixthus, King of cups | 1 | 2 | 0 | 1 |
| Kishi, God of Bloodshed | 1 | 1 | 0 | 0 |
| Living Void God | 3 | 0 | 0 | 3 |
| Chandalor the Cursed Bloom God | 0 | 0 | 0 | 1 |
| Deep Ones Plus | 2 | 4 | 1 | 17 |
| Flesh God | 2 | 2 | 0 | 5 |
| Living Wilds | 3 | 1 | 0 | 4 |
| Covens, Curses & Curios Recast | 0 | 0 | 0 | 5 |
| Community Library | 1 | 2 | 4 | 3 |
| Adolia, the Faceless Memory | 1 | 1 | 0 | 4 |
| KeeperItemMod | 0 | 0 | 0 | 0 |
| Orcs Plus | 0 | 4 | 0 | 17 |
| Mirror God | 0 | 0 | 0 | 0 |
| Out of Gods | 3 | 0 | 0 | 2 |
| Redeemer Agent | 0 | 0 | 0 | 0 |
| AAEnglishman and Mall's Event Pack - REDUX | 0 | 0 | 0 | 0 |
| Aberrant Metal | 2 | 5 | 1 | 12 |
| Alai, God of Webs | 0 | 0 | 0 | 0 |
| MEKHANE The Broken God | 0 | 11 | 8 | 82 |
| Villikos, the First Claimant | 1 | 0 | 1 | 1 |
| The Surveyor | 0 | 0 | 0 | 0 |

### Cordyceps

- 数据：`E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/optionalData/God_Insect/v2.0`
- 反编译：`work/cordyceps-audit/v2.0`


### Ixthus, King of cups

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2866026291`
- 反编译：`work/batch-audit/ixthus`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2866026291\ShadowsLib.dll`；SHA256 `39169bbad209ceab6c89860e5b67db9de96ca712b601902a0b682cacab1c3900`

### Kishi, God of Bloodshed

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2879207914`
- 反编译：`work/batch-audit/kishi`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2879207914\BloodshedGod.dll`；SHA256 `9763fe3c74d32326add655b1ecbe6cd9d7ac78b0860fb6a3c4f6bdc0a33426b0`

### Living Void God

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0`
- 反编译：`work/batch-audit/void-2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2879249746\v2.0\God_Void.dll`；SHA256 `3b09931b27cc8bd5c644f1eb568fda4962591b8e7a1d7fd003153c1526301978`

### Chandalor the Cursed Bloom God

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2879251084/v2.0`
- 反编译：`work/batch-audit/love-2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2879251084\v2.0\God_Love.dll`；SHA256 `288023223f5df9c6234bc68a408afb93a840dcf5678daf0ce99742bd07bd62d3`

### Deep Ones Plus

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2879667447/v2.0`
- 反编译：`work/mod-items-audit/decompiled/2879667447`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2879667447\v2.0\WonderblundrDeepOnes.dll`；SHA256 `5d4ce15e5b1e0396b28c93f7ccbe2745f8f69f2daafca0f8e889ffb4ff29789c`

### Flesh God

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0`
- 反编译：`work/batch-audit/flesh-2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2900259087\v2.0\God_Flesh.dll`；SHA256 `629b842853fbf921dc2dfdd834ee05540665971e337f3c6b19da5ebe6d2cda9a`

### Living Wilds

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2932110698/v2.0`
- 反编译：`work/mod-items-audit/decompiled/2932110698`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2932110698\v2.0\LivingWilds.dll`；SHA256 `c28a223d0d20f314592f8c63ea54cede79696e0436196350d229ee4542473749`

### Covens, Curses & Curios Recast

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2932765110/v2.0`
- 反编译：`work/mod-items-audit/decompiled/2932765110`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2932765110\v2.0\CovenExpansionRecast.dll`；SHA256 `6a3ecf1bc79bb7dcc7610da01e605e097579f3b64223d6312ac0147edaa6ed16`

### Community Library

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2968835416/v2.0`
- 反编译：`work/mod-items-audit/decompiled/2968835416`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2968835416\v2.0\CommunityLib.dll`；SHA256 `47fb231e2ca1874d0c04e1760041a4a06730b2e8c2ef2afc071653b46295a859`

### Adolia, the Faceless Memory

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0`
- 反编译：`work/batch-audit/adolia-2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2980692812\v2.0\FacelessMemory.dll`；SHA256 `c8217271fc24fa6b69a0ae97749d44bb265cb10b42994b8994c503c799d360d1`

### KeeperItemMod

- 数据：`E:/Steam/steamapps/workshop/content/1741640/2988960487`
- 反编译：`work/mod-items-audit/decompiled/2988960487`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\2988960487\SOFGKeeperItemRebalanceAndAdditions.dll`；SHA256 `e7a97e2c0ee75d91789b8033f95802f5a89a786b6114231a6a732e147f684ff1`

### Orcs Plus

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3003549759/v2.0`
- 反编译：`work/mod-items-audit/decompiled/3003549759`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3003549759\v2.0\Orcs Plus.dll`；SHA256 `60aac8b11c03b8df5f818e66ab6c1ad9247d2584d15d142b44ae06e342adc3d0`

### Mirror God

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0`
- 反编译：`work/mirror-audit/v2.0`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3192034838\v2.0\God_Mirror.dll`；SHA256 `b0d7d0a647cc36fbea03e02476c7bb97aba431a16c0d931b058280dba22eeb8d`

### Out of Gods

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3232578780`
- 反编译：`work/outsiders-audit/decompiled`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3232578780\ShadowsOutsiderGod.dll`；SHA256 `a4acfdb4ecf43ffb85fdc1d0e8ba8cfdc5ccbe98418f96b8b2e7cb4b59266c69`

### Redeemer Agent

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3236779751/v2.0`
- 反编译：`work/mod-items-audit/decompiled/3236779751`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3236779751\v2.0\ModJam_Redeemer.dll`；SHA256 `f552ca305b2de28d22f8576ad93c40945edadae5be34d928f79f0cc68ccfffc3`

### AAEnglishman and Mall's Event Pack - REDUX

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3261852980`
- 反编译：


### Aberrant Metal

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0`
- 反编译：`work/aberrant-metal-audit/v2.0`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3320562229\v2.0\ProductionGod.dll`；SHA256 `b055f65394f28d2953801f652ce229ae7f19b66575fd10247f1d06ff0fa42625`

### Alai, God of Webs

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3383875039`
- 反编译：`work/alai-audit/decompiled`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3383875039\WebGod.dll`；SHA256 `1a0681bd8b4b3243e8e5bbb0d9f615ffa73ba9a7e604fc8146aca2854842825e`

### MEKHANE The Broken God

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0`
- 反编译：`work/mekhane-audit/v2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3591348120\v2.0\MEKHANE.dll`；SHA256 `7a20ab215611aa45534128bc70d2c4f2672b81883f271615a3d63383560b0e6e`

### Villikos, the First Claimant

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0`
- 反编译：`work/villikos-audit/v2`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3647343379\v2.0\FirstClaimant.dll`；SHA256 `d7af7501289b4d0201aef356c5d81d806289e3b983ca720a6552170149f3e0b1`

### The Surveyor

- 数据：`E:/Steam/steamapps/workshop/content/1741640/3700090862`
- 反编译：`work/mod-items-audit/decompiled/3700090862`
- DLL：`E:\Steam\steamapps\workshop\content\1741640\3700090862\TheSurveyor.dll`；SHA256 `1d7ac87afd823014db7f7ce2bb4acfad340a7186b28abeb980364527d424c556`

## 关系与任务判定

- 入口总表核对 Location.populateStandardChallenges；分别分析地点、兴趣点、地点修正和 Mod 注入的来源。
- 任务列表处理继承、Clear、重新赋值、Remove、条件性追加，不能只搜索构造器中的 new Challenge。
- 类别同时检查 isGoodTernary、valid、UA 版本的 validFor，以及执行者是否可由玩家控制；没有把类名前缀当作唯一依据。Drowned Prophet 能受玩家指挥，Breathless、Inundai Emissary、Repoman、Maxwellist Infiltrator 等另核对实际控制权。
- 数值来自相应方法与 Params；动态数值保留公式，XP 使用当前本体算法。Danger 为 0 不显示。
- 相同任务多处提供时复用详情。招募类保留各设施具体随从和条件；任务图像若由目标头像、当前商品或随从动态返回，不编造固定图片。
- 采用原始 IconStore / TextureStore Sprite 和 EventManager.getImg 指定的 Mod 图像。导出核对清单：work/locations-audit/asset-manifest.json。

## 关键核对结果

- Ruins 是毁灭后的地点；Ancient Ruins 才提供探索。Temple 与 Holy Site 分开。
- City、Minor Human、矮人据点的固定与随机兴趣点分别记录；新旧兴趣点保留方式按创建/转化路径区分。
- Eternal City 只返回自己的挑战列表；四项统治者行动分别为 8、8、10、10 回合，链接 Ixthus 详情。
- Twisted Library 返回 Propagate Knowledge；没有重新套用普通 Library 的任务。
- Abyssal Armory 实现是 1 人口换 1 HP；以代码而非旧提示文本为准。
- Adolia 的 Market 应对入口注入处检查的是 Library 变量；新页明确指出这一实际条件。
- Festival of War 由 Orc Shaman 执行，逐回合 Profile +0.5、Menace +1.5，部落 Menace +0.25。
- Defile 替换 Holy Site 的 Consecrate 对象，关闭该任务；不创建新兴趣点。
- Oozing Pustules 具有名称与图像，未找到独立逐回合效果或任务。
- Community Library 框架类型及部分 MEKHANE 内部类型的正常生成路径未找到，单列说明。

## 实现与验证

- 新页面：app/LocationsArchive.tsx；数据：app/LocationsData.ts；局部样式：app/locations.css。
- 存量文件仅修改页面路由、索引入口与页面类型；已有神祇和目录正文保持不变（以开始本轮时的文件 SHA256 比较）。
- 新入口：index.html?page=locations。沿用现有侧边栏、折叠卡、引用分类与手机确认跳转机制。
- 审核和页面测试脚本、生成依据在当前工作目录的 work/locations-audit/。数值与锚点检查无缺项；页面构建与手机/桌面结果写入该目录验证文件。
