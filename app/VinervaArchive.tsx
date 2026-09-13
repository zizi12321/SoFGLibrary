"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, DetailItem, GodConfig, Relation } from "./GodArchiveTypes";
function anchorFor(name: string) { return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/, ""); }


const config: GodConfig = (() => {
const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Heart of the Forest、Grove of Golden Roses" },
  { seal: 1, turn: 12, agents: 2, reward: "Grove of Salvation、Black Forest" },
  { seal: 2, turn: 24, agents: 3, reward: "Grove of Nectar、Grove of Peace Lillies" },
  { seal: 3, turn: 44, agents: 3, reward: "Choking Spores、Grove of Leper's Succor" },
  { seal: 4, turn: 72, agents: 4, reward: "Grove of Dragonflower" },
  { seal: 5, turn: 110, agents: 4, reward: "Neurotoxins、Pheromones" },
  { seal: 6, turn: 150, agents: 4, reward: "Serpentine Vines" },
  { seal: 7, turn: 200, agents: 5, reward: "Manifestation" },
  { seal: 8, turn: 300, agents: 5, reward: "" },
  { seal: 9, turn: 420, agents: 5, reward: "Wilderness Spirits、苏醒" },
];
const powers = [
  { seal: 0, name: "Heart of the Forest", cost: "动态", icon: "heart-of-forest.png", effect: "在土地上建立一个 Heart of the Forest。第一次施放消耗 0；之后按已使用次数逐步增加，公式为 min(4, max(1, floor(使用次数 ÷ 2)))。它既是 Vinerva 的据点，也是所有其他神力的施放中心。若执行者携带 Vinerva Seed，施放时会消耗种子并在新地点建立据点。", limit: "必须施放在陆地；没有已有据点时可任意选址，之后需要位于现有 Heart of the Forest 的 3 格范围内，或由携带种子的 Agent 把网络延伸到新地点。" },
  { seal: 0, name: "Grove of Golden Roses", cost: 1, icon: "grove-golden-roses.png", effect: "在聚居地建立 Temptation of Gold。当地统治者会得到一个可以把死刑犯或债务人换成财富的行动；执行后统治者获得 75 Gold，同时地点获得 25 Lingering Resentment，并把 Vinerva's Gift 增加 50。花园强度减少 50。", limit: "只能放在人类聚居地，且该地不能已有同名 Grove；目标必须处于任一 Heart of the Forest 的 3 格范围内。" },
  { seal: 1, name: "Grove of Salvation", cost: 2, icon: "grove-salvation.png", effect: "在地点留下 Temptation of Salvation。英雄可执行 Gift of Salvation，把自己的 Shadow 降低一半，但损失 8 Sanity；任务的吸引力会随自身 Shadow 增加，却会被 Awareness 与世界恐慌压低。", limit: "只能施放在 Heart of the Forest 3 格内的陆地。" },
  { seal: 1, name: "Black Forest", cost: 0, icon: "heart-of-forest.png", effect: "把带有 Vinerva's Gift 的统治者 Shadow 提高同等数量，并以 100% Shadow 为上限；消耗对应的 Gift。每次使用还会给最近的 Heart of the Forest 增加 15 Menace。", limit: "目标必须是有统治者的人类聚居地，地点带有 Vinerva's Gift，且统治者 Shadow 尚未达到 100%；Gift 必须位于 Heart 的 3 格范围内。" },
  { seal: 2, name: "Grove of Nectar", cost: 1, icon: "grove-nectar.png", effect: "建立 Temptation of Nectar。统治者可让当地 Gift of Nectar 生效：把饥荒降到 1%，并使食物产出提高 200%（总计为原来的 3 倍，另加 50 平坦食物）；代价是 Vinerva's Gift 增加 125，花园强度减少 50。", limit: "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。" },
  { seal: 2, name: "Grove of Peace Lillies", cost: 2, icon: "grove-peace-lillies.png", effect: "建立 Temptation of Peace。统治者可让当地 Unrest 降到 1，并获得短期的安抚效果；代价是 Vinerva's Gift 增加 75，花园强度减少 25。", limit: "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。" },
  { seal: 3, name: "Choking Spores", cost: 3, icon: "choking-spores.png", effect: "在目标聚居地及其周围地点放置 Choking Spores。每个地点的 Prosperity 降低 25%，从而连带降低金钱和军事产出；不消耗 Vinerva's Gift，但会给最近 Heart 增加 15 Menace。", limit: "目标必须有至少 50 点 Vinerva's Gift，位于 Heart 的 3 格范围内，且目标没有已有 Choking Spores。" },
  { seal: 3, name: "Grove of Leper's Succor", cost: 2, icon: "grove-lepers-succor.png", effect: "建立 Temptation of Health。统治者可把地点 Plague 降到 1；代价是 Vinerva's Gift 增加 45，花园强度减少 50。", limit: "只能放在人类聚居地，且不能已有同名 Grove；目标须在 Heart 的 3 格范围内。" },
  { seal: 4, name: "Grove of Dragonflower", cost: 1, icon: "grove-dragonflower.png", effect: "建立 Temptation of Might。英雄可执行 Gift of Might，获得 Vinerva's Gift of Might：第一次食用在 22 回合内提供 +4 Might，重复食用会刷新持续时间并提高等级，增益会逐级衰减；没有剩余增益时特质会变成 −1 Might，并持续制造成瘾倾向。", limit: "可施放在 Heart 的 3 格范围内的任意陆地。" },
  { seal: 5, name: "Neurotoxins", cost: 1, icon: "neurotoxins.png", effect: "把 Vinerva's Gift 转化为 Madness：每消耗 1 点 Gift 增加 2 点 Madness，最多把地点推到 300 Madness；消耗掉的 Gift 不会恢复。每次施放给最近 Heart 增加 15 Menace。", limit: "只能对 Heart 的 3 格范围内、带有 Vinerva's Gift 的人类聚居地施放。" },
  { seal: 5, name: "Pheromones", cost: 3, icon: "pheromones.png", effect: "在土地上生成 100 点 Tempting Pheromones。它每回合衰减 3；在强度 100 时，让当地所有 Vinerva 礼物的接受动机额外提高 25，可通过重复施放叠加。", limit: "必须在 Heart 的 3 格范围内施放在陆地上。" },
  { seal: 6, name: "Serpentine Vines", cost: 3, icon: "serpentine-vines.png", effect: "把目标地点所有英雄任务和中立挑战的 危险分别设为 8；每项任务独立记录这个危险值。施放后最近 Heart 增加 10 Menace。", limit: "必须在 Heart 的 3 格范围内；可以对任意地点施放。" },
  { seal: 7, name: "Manifestation", cost: 1, icon: "manifestation.png", effect: "让一个已经被 Vinerva's Gift 充分侵蚀的聚居地转化为 Manifestation，摧毁原有人类 settlement，并额外计入 Vinerva 的胜利分。新地点会带有一个 Heart of the Forest，随后逐渐把周边地块变成森林。", limit: "只能选择 Heart 的 3 格范围内、拥有至少 125 点 Vinerva's Gift 的人类聚居地。" },
  { seal: 9, name: "Wilderness Spirits", cost: 3, icon: "wilderness-spirits.png", effect: "在空地点生成一支 50 HP、不可控制的 Wilderness Spirits 军队。它会主动寻找附近 Shadow 低于 50% 的人类聚居地并夷平，经过的领地每回合有 25% 概率转为森林；最近 Heart 增加 30 Menace。", limit: "必须在 Heart 的 3 格范围内的空地点施放。" },
];

const traits: DetailItem[] = [{ name: "Vinerva's Gift of Might", image: "grove-dragonflower.png", text: "英雄食用 Dragonflower 后获得的成瘾特质，最多 5 级。每次食用在 22 回合内提供递减的 Might：第 1 级 +4，随后为 +3、+2、+2、+1、+1；持续时间耗尽后改为 −1 Might。再次食用会刷新 22 回合并提高等级，因此它同时是短期战斗强化和会把英雄反复吸回花园的长期牵引。" }];
const locationModifiers: DetailItem[] = [
  { name: "Vinerva's Gift", image: "gift.png", modifierChange: { natural: "", external: "<CrossReference name=\"Grove of Golden Roses\" /> 对应的统治者行动完成时增加 50。\n<CrossReference name=\"Grove of Nectar\" /> 对应的统治者行动完成时增加 125。\n<CrossReference name=\"Grove of Peace Lillies\" /> 对应的统治者行动完成时增加 75。\n<CrossReference name=\"Grove of Leper's Succor\" /> 对应的统治者行动完成时增加 45。\n<CrossReference name=\"Holy: Cultivate Her Gifts\" /> 完成后，按 Dark Gaia 教义等级每回合增加 1，持续 20 回合。\n<CrossReference name=\"Black Forest\" /> 消耗达到 100% Shadow 所需的 Gift；Gift 不足时消耗全部剩余 Gift。\n<CrossReference name=\"Neurotoxins\" /> 每消耗 1 点 Gift 增加 2 点 Madness，最多消耗 150 点 Gift。\n<CrossReference name=\"Manifestation\" /> 转化地点时把 Gift 清零。" }, text: "统治者接受任一 Grove 的好处后留下的地点修正；是 Manifestation 与 Neurotoxins 的燃料，也会被 Black Forest 等神力消耗。地点会提供 Cultivate Her Gifts 宗教任务。" },
  { name: "Temptation of Gold", image: "grove-golden-roses.png", initialValue: "创建时强度 100。", modifierChange: { natural: "", external: "<CrossReference name=\"Grove of Golden Roses\" /> 对应的统治者行动完成时强度 −50。" }, text: "Golden Roses 留下的地点修正，给统治者提供 Harvest for Gold 行动。" },
  { name: "Temptation of Salvation", image: "grove-salvation.png", initialValue: "创建时强度 100。", modifierChange: { natural: "", external: "" }, text: "黄色花朵留下的地点修正，为英雄提供 Gift of Salvation。它能把执行者 Shadow 减半，但会造成 8 Sanity 伤害；Chosen One 不能执行。" },
  { name: "Temptation of Nectar", image: "grove-nectar.png", initialValue: "创建时强度 100。", modifierChange: { natural: "", external: "<CrossReference name=\"Grove of Nectar\" /> 对应的统治者行动完成时强度 −50。" }, text: "Nectar Grove 留下的地点修正，为统治者提供 Harvest Nectar 行动。行动把饥荒压到 1%，提高食物产出并增加 Vinerva's Gift。" },
  { name: "Temptation of Peace", image: "grove-peace-lillies.png", initialValue: "创建时强度 100。", modifierChange: { natural: "", external: "<CrossReference name=\"Grove of Peace Lillies\" /> 对应的统治者行动完成时强度 −25。" }, text: "Peace Lily 留下的地点修正，为统治者提供 Drink Peace Lily 行动，把 Unrest 降到 1，并增加 Vinerva's Gift。" },
  { name: "Temptation of Health", image: "grove-lepers-succor.png", initialValue: "创建时强度 75。", modifierChange: { natural: "", external: "<CrossReference name=\"Grove of Leper's Succor\" /> 对应的统治者行动完成时强度 −50。" }, text: "Leper's Succor 留下的地点修正，为统治者提供 Use Leper's Succor 行动，把 Plague 降到 1，并增加 Vinerva's Gift。" },
  { name: "Temptation of Might", image: "grove-dragonflower.png", initialValue: "创建时强度 100。", modifierChange: { natural: "", external: "" }, text: "Dragonflower 留下的地点修正，为英雄提供 Gift of Might。" },
  { name: "Tempting Pheromones", image: "pheromones.png", initialValue: "创建时强度 100。", modifierChange: { natural: "每回合强度 −3。", external: "<CrossReference name=\"Pheromones\" /> 创建并叠加。" }, text: "它提高当地所有 Vinerva 礼物的接受动机；强度 100 时额外提供 25 点动机。" },
  { name: "Madness", image: "madness.png", baseGame: true, modifierChange: { natural: "", external: "<CrossReference name=\"Stories Told In Dreams\" /> 一次性增加 50。\n<CrossReference name=\"Laughing King's Tome\" /> 与 <CrossReference name=\"Hysterical Tome\" /> 在人类聚居地每回合各增加 3。\n<CrossReference name=\"Maddening Tongues\" /> 在人类聚居地每回合增加 1。\n<CrossReference name=\"Everyone Shall Play\" /> 使未封印 Tome 被非玩家人物携带时每回合额外增加 3，并使 <CrossReference name=\"Laughing King's Tome\" /> 向相邻人类聚居地每回合增加 1。\n<CrossReference name=\"Neurotoxins\" /> 每消耗 1 点 Vinerva's Gift 增加 2 点，最多把地点推到 300。\n<CrossReference name=\"Cure Madness\" /> 完成时减少 25。\n达到 300 时触发一次 <CrossReference name=\"Madness Crisis\" />，强度回落到 150。" }, text: "游戏本体地点修正。每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。Madness 达到 300 时触发一次随机 <CrossReference name=\"Madness Crisis\" />，留下六种长期效果之一，然后强度回落到 150。" },
  { name: "Lingering Resentment", image: "unrest.png", baseGame: true, initialValue: "完成 <CrossReference name=\"Harvest for Gold\" /> 后创建强度 25。", modifierChange: { natural: "本体默认按当地统治者的 Intrigue 衰减：每 1 点 Intrigue 使强度每回合 −1；没有当地统治者时不会产生这项衰减。源码还保留关闭该规则时每回合固定 −2 的分支，但未找到游戏内切换入口。", external: "<CrossReference name=\"Harvest for Gold\" /> 完成时创建强度 25。" }, text: "游戏本体地点修正。完成 <CrossReference name=\"Harvest for Gold\" /> 后，地点留下 25 点 Lingering Resentment；它每回合增加 2 Unrest，并会自动衰减。" },
  { name: "Choking Spores", id: "choking-spores-modifier", image: "choking-spores.png", initialValue: "创建时强度 50。", modifierChange: { natural: "每回合强度 −1。", external: "<CrossReference name=\"Choking Spores\" /> 在目标地点及其相邻地点各创建一项；目标地点需要至少 50 点 Vinerva's Gift。" }, text: "毒雾修正，把 Prosperity 降低 25%，因此同时压低当地经济和军事能力，但不会直接杀伤人口。" },
  { name: "Gift of Nectar", image: "grove-nectar.png", initialValue: "创建时强度 50。", modifierChange: { natural: "每回合强度 −1.25。", external: "<CrossReference name=\"Harvest Nectar\" /> 完成时留下该短期修正。" }, text: "短期地点修正：食物产出提高 200%，并额外提供 50 平坦食物。" },
];const locations: DetailItem[] = [
  { name: "Heart of the Forest", id: "heart-location", image: "heart-location.png", text: "Vinerva 的核心据点。它允许使用半径 3 格内的专属神力，自身防御加成 50；地点可被人类国家派军队摧毁，并带有 Harvest Seed 挑战。每个 Heart 的存在都连接着同一个全球根系网络。" },
  { name: "Manifestation", id: "manifestation-location", image: "manifestation-location.png", seal: 7, text: "Manifestation 取代被献祭的人类聚居地，不再属于人类阵营。它每回合向周围传播森林地形，并自带新的 Heart of the Forest，因而可以把一次礼物转化为新的扩张节点。" },
];
const items: DetailItem[] = [{ name: "Vinerva Seed", image: "seed.png", text: "Harvest Seed 挑战的产物。携带它的 Agent 可以把 Heart of the Forest 神力带到新的地点；施放成功后种子被消耗，并在新地点建立 Heart。它是突破现有根系 3 格范围、重新铺开网络的主要方式。" }];
const armies: DetailItem[] = [{ name: "Wilderness Spirit", image: "wilderness-spirits.png", seal: 9, stats: "HP 50", text: "Wilderness Spirits 生成的不可控制游荡军队，不会自行解散。它优先攻击最近、Shadow 低于 50% 的人类聚居地；到达后执行无视和平的夷平，并在每回合把自己所在领地的一部分改成森林。" }];
const challenges: DetailItem[] = [{ name: "Harvest Seed", image: "seed.png", location: "Heart of the Forest。", meta: "Other", statLine: "Complexity: 1　Profile: 20　Menace: 0　XP: 3", text: "在 Heart of the Forest 收获一枚 Vinerva Seed。任务没有额外限制，完成后把种子放入执行者的物品栏；执行者有空物品槽时会更愿意选择它。" }];
const heroTasks: DetailItem[] = [
  { name: "Gift of Salvation", image: "grove-salvation.png", location: "Grove of Salvation。", meta: "Other", statLine: "Complexity: 1　Profile: 30　Menace: 0　XP: 3", positiveTags: "无", negativeTags: "Shadow", text: "英雄把自身 Shadow 降低一半，但付出 8 Sanity。Chosen One 不能执行。" },
  { name: "Gift of Might", image: "grove-dragonflower.png", location: "Grove of Dragonflower。", meta: "Other", statLine: "Complexity: 1　Profile: 40　Menace: 0　XP: 3", positiveTags: "Combat、Ambition", negativeTags: "无", text: "英雄获得或升级 Vinerva's Gift of Might。重复执行会延长当前增益并提高成瘾等级，Chosen One 不能执行。" },
];
const rulerActions: DetailItem[] = [
  { name: "Harvest for Gold", image: "grove-golden-roses.png", location: "有 Temptation of Gold 的地点。", meta: "统治者行动", time: "5 回合", positiveTags: "Gold、Cruel", negativeTags: "无", text: "在 Temptation of Gold 上执行：统治者获得 75 Gold，地点新增 25 Lingering Resentment，并让 Vinerva's Gift 增加 50；Golden Roses 的强度减少 50。" },
  { name: "Harvest Nectar", image: "grove-nectar.png", location: "有 Temptation of Nectar 的地点。", meta: "统治者行动", time: "1 回合", positiveTags: "无", negativeTags: "无", text: "在 Temptation of Nectar 上执行：把当地饥荒降到 1%，临时让食物产出提高 200%并增加 50 平坦食物，Vinerva's Gift 增加 125，Nectar 强度减少 50。" },
  { name: "Drink Peace Lily", image: "grove-peace-lillies.png", location: "有 Temptation of Peace 的地点。", meta: "统治者行动", time: "1 回合", positiveTags: "无", negativeTags: "Discord", text: "在 Temptation of Peace 上执行：把当地 Unrest 降到 1，Vinerva's Gift 增加 75，Peace Lily 强度减少 25。它只是短期平息，不会消除长期政治后果。" },
  { name: "Use Leper's Succor", image: "grove-lepers-succor.png", location: "有 Temptation of Health 的地点。", meta: "统治者行动", time: "1 回合", positiveTags: "无", negativeTags: "Disease", text: "在 Temptation of Health 上执行：把当地 Plague 降到 1，Vinerva's Gift 增加 45，Leper's Succor 强度减少 50。" },
];
const religion: DetailItem[] = [{ name: "A Darker Nature", meta: "Witches 专属教义", text: "Vinerva 在场时，Witches Holy Order 会额外获得 A Darker Nature。它最多向 Elder 侧发展到 0、向人类侧发展到 −2；状态越负，Cultivate Her Gifts 的收益越高。教义让女巫把 Vinerva's Gift 变成持续增长的燃料。" }];
const religiousTasks: DetailItem[] = [{ name: "Holy: Cultivate Her Gifts", image: "manifestation.png", location: "有 Vinerva's Gift 的地点，并且有对应 Witches Holy Order。", meta: "Lore", statLine: "Complexity: 30　Profile: 40　Menace: 0　XP: 49", positiveTags: "Religion", negativeTags: "无", text: "在有 Vinerva's Gift 的地点进行 20 回合的培养。完成后按教义等级让 Gift 每回合额外增加 1%×等级，持续 20 回合；一次只能有一个培养任务。" }];
const events: DetailItem[] = [{ name: "Vinerva Gift Accepted", image: "gift.png", text: "统治者第一次接受任一 Vinerva 礼物时弹出的本体事件。它只负责提示地点已经留下 Vinerva's Gift，真正的数值变化由相应的统治者行动完成。" }];

const relations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = {
  "Vinerva's Gift": { sources: [{ name: "Grove of Golden Roses", href: "#entry-grove-of-golden-roses" }, { name: "Grove of Nectar", href: "#entry-grove-of-nectar" }, { name: "Grove of Peace Lillies", href: "#entry-grove-of-peace-lillies" }, { name: "Grove of Leper's Succor", href: "#entry-grove-of-leper-s-succor" }, { name: "Holy: Cultivate Her Gifts", href: "#entry-holy-cultivate-her-gifts" }], effects: [{ name: "Black Forest", href: "#entry-black-forest" }, { name: "Neurotoxins", href: "#entry-neurotoxins" }, { name: "Manifestation", href: "#entry-manifestation" }] },
  "Temptation of Gold": { sources: [{ name: "Grove of Golden Roses", href: "#entry-grove-of-golden-roses", meta: "神力" }], effects: [{ name: "Harvest for Gold", href: "#entry-harvest-for-gold", meta: "统治者行动" }] },
  "Temptation of Salvation": { sources: [{ name: "Grove of Salvation", href: "#entry-grove-of-salvation", meta: "神力" }], effects: [{ name: "Gift of Salvation", href: "#entry-gift-of-salvation", meta: "英雄任务" }] },
  "Temptation of Nectar": { sources: [{ name: "Grove of Nectar", href: "#entry-grove-of-nectar", meta: "神力" }], effects: [{ name: "Harvest Nectar", href: "#entry-harvest-nectar", meta: "统治者行动" }] },
  "Temptation of Peace": { sources: [{ name: "Grove of Peace Lillies", href: "#entry-grove-of-peace-lillies", meta: "神力" }], effects: [{ name: "Drink Peace Lily", href: "#entry-drink-peace-lily", meta: "统治者行动" }] },
  "Temptation of Health": { sources: [{ name: "Grove of Leper's Succor", href: "#entry-grove-of-leper-s-succor", meta: "神力" }], effects: [{ name: "Use Leper's Succor", href: "#entry-use-leper-s-succor", meta: "统治者行动" }] },
  "Temptation of Might": { sources: [{ name: "Grove of Dragonflower", href: "#entry-grove-of-dragonflower", meta: "神力" }], effects: [{ name: "Gift of Might", href: "#entry-gift-of-might", meta: "英雄任务" }] },
  "Tempting Pheromones": { sources: [{ name: "Pheromones", href: "#entry-pheromones", meta: "神力" }], effects: [{ name: "Harvest for Gold", href: "#entry-harvest-for-gold", meta: "统治者行动" }, { name: "Harvest Nectar", href: "#entry-harvest-nectar", meta: "统治者行动" }, { name: "Drink Peace Lily", href: "#entry-drink-peace-lily", meta: "统治者行动" }, { name: "Use Leper's Succor", href: "#entry-use-leper-s-succor", meta: "统治者行动" }, { name: "Gift of Salvation", href: "#entry-gift-of-salvation", meta: "英雄任务" }, { name: "Gift of Might", href: "#entry-gift-of-might", meta: "英雄任务" }] },

  "choking-spores-modifier": { sources: [{ name: "Choking Spores", href: "#entry-choking-spores", meta: "神力" }] },  "Gift of Nectar": { sources: [{ name: "Harvest Nectar", href: "#entry-harvest-nectar", meta: "统治者行动" }] },  "Heart of the Forest": { sources: [{ name: "Heart of the Forest", href: "#entry-heart-of-the-forest", meta: "封印 0 · 神力" }], effects: [{ name: "Harvest Seed", href: "#entry-harvest-seed" }] },
  "Vinerva Seed": { sources: [{ name: "Harvest Seed", href: "#entry-harvest-seed" }], effects: [{ name: "Heart of the Forest", href: "#entry-heart-of-the-forest" }] },
  "Vinerva's Gift of Might": { sources: [{ name: "Gift of Might", href: "#entry-gift-of-might" }], effects: [{ name: "Gift of Might", href: "#entry-gift-of-might" }] },
  "Wilderness Spirit": { sources: [{ name: "Wilderness Spirits", href: "#entry-wilderness-spirits" }] },
  "Vinerva Gift Accepted": { sources: [{ name: "Vinerva's Gift", href: "#entry-vinerva-s-gift" }] },
  "Madness": { sources: [{ name: "Neurotoxins", href: "#entry-neurotoxins", meta: "神力" }] },
  "Lingering Resentment": { sources: [{ name: "Harvest for Gold", href: "#entry-harvest-for-gold", meta: "统治者行动" }] },
};
const powerEffects: Record<string, Relation[]> = { "Heart of the Forest": [{ name: "Heart of the Forest", href: "#entry-heart-location", meta: "地点与设施" }], "Grove of Golden Roses": [{ name: "Temptation of Gold", href: "#entry-temptation-of-gold", meta: "地点修正" }, { name: "Harvest for Gold", href: "#entry-harvest-for-gold", meta: "统治者行动" }], "Grove of Salvation": [{ name: "Temptation of Salvation", href: "#entry-temptation-of-salvation", meta: "地点修正" }, { name: "Gift of Salvation", href: "#entry-gift-of-salvation", meta: "英雄任务" }], "Grove of Nectar": [{ name: "Temptation of Nectar", href: "#entry-temptation-of-nectar", meta: "地点修正" }, { name: "Harvest Nectar", href: "#entry-harvest-nectar", meta: "统治者行动" }], "Grove of Peace Lillies": [{ name: "Temptation of Peace", href: "#entry-temptation-of-peace", meta: "地点修正" }, { name: "Drink Peace Lily", href: "#entry-drink-peace-lily", meta: "统治者行动" }], "Choking Spores": [{ name: "Choking Spores", href: "#entry-choking-spores-modifier", meta: "地点修正" }], "Grove of Leper's Succor": [{ name: "Temptation of Health", href: "#entry-temptation-of-health", meta: "地点修正" }, { name: "Use Leper's Succor", href: "#entry-use-leper-s-succor", meta: "统治者行动" }], "Grove of Dragonflower": [{ name: "Temptation of Might", href: "#entry-temptation-of-might", meta: "地点修正" }, { name: "Gift of Might", href: "#entry-gift-of-might", meta: "英雄任务" }], "Black Forest": [{ name: "Vinerva's Gift", href: "#entry-vinerva-s-gift", meta: "地点修正" }], "Neurotoxins": [{ name: "Vinerva's Gift", href: "#entry-vinerva-s-gift", meta: "地点修正" }, { name: "Madness", href: "#entry-madness", meta: "地点修正" }], "Pheromones": [{ name: "Tempting Pheromones", href: "#entry-tempting-pheromones", meta: "地点修正" }], "Serpentine Vines": [{ name: "Challenge Danger", href: "#loop", meta: "本体挑战危险" }], "Manifestation": [{ name: "Manifestation", href: "#entry-manifestation-location", meta: "地点与设施" }], "Wilderness Spirits": [{ name: "Wilderness Spirit", href: "#entry-wilderness-spirit", meta: "军队" }] };
const configRelations: Record<string, { sources?: Relation[]; effects?: Relation[] }> = Object.fromEntries(Array.from(new Set([...Object.keys(relations), ...Object.keys(powerEffects)])).map(name => [name, { ...(relations[name] ?? {}), effects: [...(relations[name]?.effects ?? []), ...(powerEffects[name] ?? [])] }]));
return {
  id: "vinerva", name: "Vinerva, the Dark Goddess", number: "03", theme: "vinerva-theme", assetDir: "vinerva", background: "background.png", portrait: "portrait.png",
  flavour: "",
  caption: "森林之心、诱惑馈赠与自然军势",
  maxTurns: "常规 500 回合", awaken: "第 420 回合", panic: "50%", finalAgents: "5", progressLabel: "回合", unlockMethod: "常规回合解锁", powerRecovery: "0.035 ×（已破封印数 + 1）× 难度缩放。",
  core: [
  "用 <CrossReference name=\"Heart of the Forest\" /> 建立据点与根系网络，保证其他神力始终在 3 格范围内有施放中心。",
  "先放置 <CrossReference name=\"Grove of Golden Roses\" />、<CrossReference name=\"Grove of Nectar\" />、<CrossReference name=\"Grove of Peace Lillies\" /> 或 <CrossReference name=\"Grove of Leper's Succor\" />，向人类提供解决问题的礼物。",
  "等统治者执行对应行动，累积 <CrossReference name=\"Vinerva's Gift\" />；英雄则会被 <CrossReference name=\"Gift of Salvation\" /> 和 <CrossReference name=\"Gift of Might\" /> 任务吸引。",
  "用 <CrossReference name=\"Black Forest\" />、<CrossReference name=\"Neurotoxins\" /> 和 <CrossReference name=\"Choking Spores\" /> 把礼物转成 Shadow、Madness 和经济衰败；用 <CrossReference name=\"Pheromones\" /> 提高接受意愿。",
  "用 <CrossReference name=\"Vinerva Seed\" /> 让 Agent 迁移根系，或把高 Gift 的聚居地转化为 <CrossReference name=\"Manifestation\" />。",
  "最后用 <CrossReference name=\"Wilderness Spirits\" /> 制造不可控制的自然军势，清理剩余的人类据点。",  ],
  overviewExtra: { title: "Gift 与森林网络", text: "<CrossReference name=\"Vinerva's Gift\" /> 由统治者接受 Grove 的馈赠后产生，是 <CrossReference name=\"Black Forest\" />、<CrossReference name=\"Neurotoxins\" /> 和 <CrossReference name=\"Manifestation\" /> 的消耗资源。<CrossReference name=\"Heart of the Forest\" /> 建立 3 格范围内的施法网络；<CrossReference name=\"Vinerva Seed\" /> 可以把新的 Heart 带到网络之外，继续扩张森林。" },
  seals: seals.map(item => ({ seal: item.seal, progress: item.turn, agents: item.agents, reward: item.reward ? item.reward.split("、") : [] })),
  powers,

  sections: [
  { id: "traits", title: "人物特质", media: true, items: traits },
  { id: "location-modifiers", title: "地点修正", media: true, items: locationModifiers },
  { id: "locations", title: "地点与设施", media: true, items: locations },
  { id: "items", title: "物品", media: true, items: items },
  { id: "armies", title: "军队", media: true, items: armies },
  { id: "challenges", title: "挑战", media: true, items: challenges },
  { id: "hero-tasks", title: "英雄任务", media: true, items: heroTasks },
  { id: "ruler-actions", title: "统治者行动", media: true, items: rulerActions },
  { id: "religion", title: "宗教与教义", media: false, items: religion },
  { id: "religious-tasks", title: "宗教任务", media: true, items: religiousTasks },
  { id: "events", title: "事件", media: true, items: events },  ],
  relations: configRelations,
};
})();

const preparedConfig = prepareGodConfig(config);

export default function vinervaArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
