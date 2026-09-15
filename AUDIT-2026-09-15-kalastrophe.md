# Kalastrophe, the Shifting Calamity 源码核查

核查日期：2026-09-15。页面采用 v2.0；版本差异仅记录在此，不进入详情页。

## 源文件范围

模组目录：E:/Steam/steamapps/workshop/content/1741640/3192034838
完整文件清单及 SHA-256：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mirror-audit/source-inventory.json
共 145 个文件：根目录 mod_desc.json；v1.1、v2.0 各 72 个文件（1 DLL、47 PNG、22 事件 JSON、2 TXT）。逐项比较，只有 God_Mirror.dll 不同；所有图片、事件、文字文件完全相同。
两版 DLL 均已反编译；God_Mirror 命名空间各 37 个 C# 文件。反编译目录：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/mirror-audit/v1.1/God_Mirror 与 v2.0/God_Mirror。
本体机制核对当前 DLC 反编译代码：C:/Users/zi123/Documents/Codex/2026-09-12/shadows-of-forbidden-gods-e-steam-2/work/swwf-audit/dlc/Assets.Code。使用 God、Params、Overmind、Map、Person、UA/UAG/UAEN_DeepOne、UM_HumanArmy/UM_Refugees，以及页面涉及的 Property、Challenge、Ritual、设施类。
God_Select.png 对应背景；God_Ingame.png 对应游戏内神祇头像，原图为宽图，详情页使用完整 contain 的正方形容器；Supplicant.png 为初始 Agent。另从当前游戏 Unity 资源的 IconStore、TextureStore 实际字段提取 48 张被引用的本体图像。
custom variables for event modding.txt 为 Drowned Prophet/Fisherman 的遗留说明；本 DLL 未注册其中相关事件变量，未纳入页面。

## v1.1 → v2.0 的实际差异

去除反编译注释与空白后，变化类：P_2_Initial.cs、P_4_Initial.cs、P_6_Initial.cs、Sel_Power2Specialty.cs。

- A Power to Assist 的 Dwarf、Cthonian 专长入口及目标校验在 v2.0 接通，能够选择 Shadowed Dwellings、Hungry Earth。旧版虽已有名称、部分实现及 JSON，但正常选择/目标路径不完整。
- Fickle Hearts 在 v2.0 可降低对 Elf 或 Dwarf 的偏好，从尚未厌恶的种族中选择；旧版仅 Elf，而且统治者中立偏好分支不会真正扣减。
- Greener Pastures 在 v2.0 额外排除矮人国家。
- A Power to Terrorize 在 v2.0 接通上下层 Tunnels 选择和 Implode 的施法实现；旧版保留显示文字，但入口和执行逻辑不完整。
- 封印回合、Agent 上限、其他已实现神力、特质、独有修正、教义未发现两版行为差异。

## 关键核查结果

- God_Mirror.setup：0–9 封印回合依次为 0/12/24/40/80/125/175/225/300/375；Agent 上限 1/2/2/3/3/3/4/4/4/5。最大回合 500，苏醒恐慌 65%。继承本体神力上限 seals+1、每回合恢复 0.035×上限（默认难度）。
- Kernel_MirrorGod、T_Supp_*：初始 Supplicant 四属性各 1、HP 5；依次选初始加速方向、分配到总和 11（每项至多 4）、选 Shared Fate/Imitator/Reflections of Divinity。常规招募名单开局及每回合清空，Dark Reflection 接管英雄，消耗一个招募点和施法前 Agent 数量对应的 Power。
- P_3_Unlocks：计数从封印 3 开始；骚乱 4 次、政治 4 次、宗教 4 次（The Hunger's Promise 一次可直接达标）、强盗 1 次、遗迹 3 次。仅统计可控制人物完成的指定行动。
- P_U_Unrest：Seethe 使用 Math.Max(oldDanger+floor(Unrest/8),25)，25 是下限；可能超过 25。
- Pr_HiddenHoard/Ch_PillageHoard：强度 300，每回合 −3；每次搜刮给 35 Gold、强度固定 −50、Profile +10、吸引力 +5。
- Pr_DOShadowSuck：初始强度 60、每回合 −3；邻接人类类地点 Shadow 每回合 −10 个百分点，下降后低于 50% 时当地统治者同减；存在对应邻地就压低 Sanctum Menace 0.5，即使邻地 Shadow 已为零。
- Pr_ElvenLock：初始强度 100、非教程每回合 −2，维持持续期间达到的最高 Elven Arrogance。
- T_SeedOfChaos：记录疯狂等级并在下一次上升后最多追加两次 goInsane；事件 JSON 提到添加地点 Madness，但该特质与施法没有直接添加该修正。页面使用实际实现。
- P_U_Religion：只有 Temple、Holy Order Seat 被施法循环处理；单独 Witch Coven 虽通过目标校验，未实现 Human Influence 扣减。
- Imitator 的本体仪式继续受自身执行条件约束；获得 Orc Funding 不会把 Supplicant 所属社会转为 Orc Horde。Crisis Vote: Famine 当前本体代码对发起地点检查的是 Plague≥50，而邻地检查 Famine>10。
- H_MirrorTenet：Induction 的 −1 等级使本教 Temple 中休息的未受控英雄每回合个人 Shadow +8 个百分点；包含 Chosen One。
- 22 个 INERT JSON 是主动触发的选择确认事件，按三个神力位置汇为三张事件卡；确认/取消各自独立列出。

## 未确认项与边界

- Shared Fate 无凶手死亡时仍访问 killer.map；源码显示存在空引用风险，但本轮没有启动游戏验证其异常传播及最终转移状态，页面明确写未确认。
- Reflections of Divinity 的候选池由本局已加载神祇决定，未找到固定两项组合；页面写随机规则，不编造固定奖励。
- 腐化英雄/流亡统治者外貌取决于实际人物，无固定通用头像；未用无关素材替代。Orc Camp 的外观依实际营地状态，未猜选固定图片。

## 页面与验证

新增 app/KalastropheArchive.tsx：单个 GodConfig，作为索引第 16 位。包括 45 张神力记录（包含互斥分支、待选择形态和被动说明，不表示同时拥有 45 项），Supplicant 及能力、6 特质、22 地点修正、6 地点/设施、3 人物/自主单位、2 军队、30 挑战、3 英雄任务、2 宗教任务、1 教义、2 机制、3 组事件。
仅为新神扩展路由、类型、GodMark、索引和作用域样式；未改写现有 15 位神的资料。没有 Git push 或关机操作。
数据检查：133 条含嵌套能力的条目无重复锚点，图片均存在，引用均可解析，没有跨神链接；来源/效果正常渲染且没有自引用。
界面检查：1440/1024/390/320 宽度无横向溢出；移动端四列封印，桌面五列；表头与表体四五列分割线同色；神力列左对齐；变化方式保留换行。SWWF、Adolia 同样通过四种宽度回归检查。
交互检查：桌面悬浮卡片含图像和说明，手机弹窗与中文条目的跳转正常；索引名称/说明一致；无运行时异常、坏图或缺失链接。
TypeScript 检查通过；pnpm run build:pages 构建通过，产物已同步 docs。构建仅提示现有单包超过 500 kB，不影响本地使用。
本地预览：http://127.0.0.1:8765/index.html?god=kalastrophe
