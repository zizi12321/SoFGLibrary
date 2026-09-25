import type { DetailItem } from "./GodArchiveTypes";

// Current DLC base-game combat: BattleAgents, UA, Minion, PopupBattleAgent and rest challenges.
export const minionCombatMechanics: DetailItem[] = [
  {
    "id": "agent-combat-stats",
    "name": "战斗属性",
    "baseGame": true,
    "text": "领队 Attack = max(0, Might + ⌊等级 / 2⌋ + 特质的 Attack 修正 + 物品的 Attack 修正)。这里的 Might 使用已计入特质、物品和随从加成后的当前数值。\n领队 Defence 上限 = max(0, 2 + 特质的 Defence 修正 + 物品的 Defence 修正)。\n随从使用各自的 HP、Attack、Defence。HP 决定存活，Attack 决定一次普通攻击的伤害值，Defence 优先吸收伤害。受伤后的普通攻击仍使用完整 Attack。\nLore、Intrigue 通过对应的特质、物品与特殊能力发挥作用；Command 决定可携带随从的容量。"
  },
  {
    "id": "agent-combat-formation",
    "name": "随从槽位与攻击目标",
    "baseGame": true,
    "text": "每名领队有 3 个随从槽位。普通招募时，随从占用的 Command 总和须符合领队当前 Command 容量；0 Command 的随从仍占 1 个槽位。\n领队的普通攻击优先命中敌方第一格存活随从；第一格为空或随从已死亡时，直接攻击敌方领队。\n随从攻击敌方同一格的存活随从；对应格为空或随从已死亡时，直接攻击敌方领队。因此，即使第一格仍有人保护，第二、三格的空位也会让对应的敌方随从打到领队。\n开战后、第一轮首次出手之前，可用战斗界面的上下按钮调换己方随从。第一格可分别与第二格、第三格交换，借此调整完整阵型。"
  },
  {
    "id": "agent-combat-order",
    "name": "每轮出手顺序",
    "baseGame": true,
    "text": "一次人物交战会在战斗界面连续结算多轮。每轮依次为：\n进攻方领队 → 防守方领队 → 第一格双方随从 → 第二格双方随从 → 第三格双方随从。\n双方都没有存活随从的格子直接跳过。\n领队攻击击杀随从时，立即将其标记为死亡；该随从随后失去本轮出手机会。\n同一格的随从交手时，先处理进攻方，再处理防守方，双方出手后才判定这一格随从的死亡。因此，防守方随从即使被本次对位攻击打到 HP ≤0，通常仍能完成这一次还击。\n领队 HP 降至 0 时立即终止后续攻击并判定战败；特殊特质及战斗结算事件另按其效果处理。"
  },
  {
    "id": "agent-combat-damage",
    "name": "Defence 与伤害结算",
    "baseGame": true,
    "text": "开战时，领队与已有随从的 Defence 补至各自上限。每次受击先消耗剩余 Defence，再扣 HP；消耗后的 Defence 保持到下一次开战，期间可由特殊效果改变。\n一次普通攻击的 HP 损失 = max(0, Attack − 受击前剩余 Defence)。\n受击后 Defence = max(0, 受击前剩余 Defence − Attack)。\n例如：HP 5、Defence 3 的目标遭到 Attack 4 的攻击后，变成 HP 4、Defence 0；再受到 Attack 2 的攻击后，变成 HP 2、Defence 0。\n普通攻击直接命中，按固定 Attack 结算。这次攻击的伤害只作用于当前目标，击杀后的多余伤害舍去；物品与特质可另外产生效果。"
  },
  {
    "id": "agent-combat-effects",
    "name": "物品、随从能力与护卫",
    "baseGame": true,
    "text": "每轮轮到领队出手时，先依物品槽位顺序处理其战斗物品。例如，治疗药剂在满足条件时自动使用；Portable Skeleton 可向空闲或已死亡的随从槽位补入一名 Skeleton Warrior，并消耗该物品。\n随从的攻击特质在其出手时处理。例如 <CrossReference name=\"Giggler\" href=\"#entry-giggler\" /> 的 Madness Attack 即使攻击被 Defence 吸收，也会降低敌方领队 Sanity。\n同地点有正在护送该人物的军队时，战斗开始及该领队每轮出手前，会把空闲或已死亡的随从槽位补为 <CrossReference name=\"Knight\" href=\"#entry-knight\" />。补入的 Knight 为 HP 5、Attack 4，在本场战斗中的初始剩余 Defence 为 0；已有存活随从保留。\n战后按正常 Command 容量整理队伍，超额随从会被遣散。"
  },
  {
    "id": "agent-combat-retreat",
    "name": "逃跑与安全撤退",
    "baseGame": true,
    "text": "第一轮结束前需继续作战。打完第一轮、准备开始第二轮时，可选择 Flee：领队脱离战斗，通常损失全部剩余随从。\n打完第二轮、准备开始第三轮及以后时，可选择 Retreat：保留仍存活的随从脱离战斗。按钮在每轮开始、尚未出手时可用。\n拥有 Flighty 的随从可在 Flee 时保留，例如 <CrossReference name=\"Mister Edgar\" href=\"#entry-mister-edgar\" />。\n撤退者随机移动到一个相邻地点；若没有相邻地点，则留在原地。撤退保留当前 HP，随后按双方身份触发对应的战斗结果事件。"
  },
  {
    "id": "agent-combat-ai",
    "name": "英雄何时撤退",
    "baseGame": true,
    "text": "普通 AI 在每轮结束时检查撤退，依次检查进攻方与防守方。\n战斗评估值 = 当前领队及随从槽位中单位的 HP、剩余 Defence、Attack 之和。\n撤退判断值 = 1.5 × 己方战斗评估值 − 敌方战斗评估值 + 5 × Danger 偏好等级 + 5 × Combat 偏好等级。\n判断值 ≤0 时选择撤退。偏好等级为 −2、−1、0、1、2，分别表示极度厌恶、厌恶、中立、喜欢、极度喜欢；喜欢危险或战斗的人物更愿意坚持。\n黑暗帝国的精灵进攻者会直接选择撤退。具体人物能力或 Mod 可覆盖普通 AI 的判断。"
  },
  {
    "id": "agent-combat-aftermath",
    "name": "战果、战利品与恢复",
    "baseGame": true,
    "text": "击败或逼退领队即可结束交战。随从的阵亡会清空对应槽位；击杀敌方领队后，玩家胜方可在战利品界面取走其物品与 Gold。战斗结果事件还可能追加奖励、惩罚或特殊结局。\n人物和存活随从的剩余 HP 会带出战斗，可通过适合其种类的休息行动或其他治疗效果恢复。\nRest and Resupply：通常耗时 3 回合，完成后领队及合格随从各恢复 2 HP，最多至上限；普通聚居地版本适用于非 Undead、非 Orc 的人物与随从。\nOrc Camp 的休息：通常耗时 3 回合，为非 Undead 的人物与随从各恢复 2 HP。亡灵的专用休息通常耗时 3 回合，为执行者和 Undead 随从各恢复 2 HP；执行者需在家乡。\n再次开战时补满 Defence，HP 则沿用恢复后的实际值。"
  }
];
