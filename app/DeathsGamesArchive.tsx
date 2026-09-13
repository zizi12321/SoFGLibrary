"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "deaths-games", name: "Death's Games", number: "09", theme: "death-games-theme", assetDir: "deaths-games", background: "godCardsTMP.png", portrait: "god_cards_portrait.png",
 flavour: "命运在最细微处转弯，帝国的未来由一张张卡牌决定。",
 caption: "抽卡、概率与一次性干预", maxTurns: "常规 500 回合", awaken: "无特殊苏醒效果", panic: "25%", finalAgents: "6", progressLabel: "回合", unlockMethod: "常规回合解锁",
 powerRecovery: "神力恢复固定为 51 / 350，约 0.146 点每回合；神力上限固定为 7，不随封印增加。封印只提高 Agent 上限。",
 specialVictory: "无",
 core: [
  "用 <CrossReference name=\"Draw Card\" /> 消耗 1 点神力，从随机稀有度池获得一张一次性卡牌；手牌最多保留 7 张。",
  "用 <CrossReference name=\"Redraw\" /> 消耗 2 点神力，弃掉全部手牌，再抽取少一张新卡牌；它使用一套比普通抽牌更窄的抽取池。",
  "把卡牌保存到合适的时机：卡牌本身不再消耗神力，真正的资源管理是手牌上限、抽取概率和目标时机。",
  "常见卡牌提供金币、额外移动或挑战进度；不常见卡牌制造安全、骚乱、打断和物品破坏；稀有卡牌则直接改变人物的 Profile 与 Menace。",
  "初始 Supplicant 拥有 <CrossReference name=\"Lucky\" />：把卡牌打在人物单位上时有 25% 概率不消耗卡牌；打在地点上的卡牌不享受这项保留。",
  "封印不会解锁新卡牌，也不会改变神力上限或恢复速度；它们只按 15、30、70、200、300、500、800 回合逐步提高 Agent 上限。",
 ],
 overviewExtra: { title: "抽取概率与源码细节", text: "Draw Card 的抽取流程是：第一次随机数小于 0.7 时进入 Common 池；否则再次随机数小于 0.7 时进入 Uncommon 池；两次都未命中才进入 Rare 池，因此实际概率约为 Common 70%、Uncommon 21%、Rare 9%。Common 池包含 The Coin、The Hammer、The Horseshoe、The Night、The Dagger；Uncommon 池包含 The Open Door、The Storm、The Thief、The Fist；Rare 池包含 The Blindfold、The Judge。该卡池只包含游戏实际加入 Draw Card 与 Redraw 的卡牌。" },
 seals: [
  { seal: 0, progress: 0, agents: 2, reward: ["Draw Card", "Redraw"] },
  { seal: 1, progress: 15, agents: 2, reward: [] },
  { seal: 2, progress: 30, agents: 3, reward: [] },
  { seal: 3, progress: 70, agents: 3, reward: [] },
  { seal: 4, progress: 200, agents: 4, reward: [] },
  { seal: 5, progress: 300, agents: 5, reward: [] },
  { seal: 6, progress: 500, agents: 6, reward: [] },
  { seal: 7, progress: 800, agents: 6, reward: ["无特殊苏醒效果"] },
 ],
 powers: [
  O("Draw Card", 0, 1, "从三档稀有度中随机抽取一张卡牌加入手牌。卡牌只会被抽到一次并保留在手牌中，直到玩家把它打出；手牌达到 7 张后不能继续抽取。普通抽取的实际概率约为 Common 70%、Uncommon 21%、Rare 9%。", "可以对任意地点或任意单位施放；当前手牌必须少于 7 张。", "card-card.png"),
  O("Redraw", 0, 2, "弃掉当前全部卡牌，再抽取与原手牌数量少 1 张的新卡牌。例如有 4 张牌时会弃掉全部 4 张并重新抽 3 张。重抽的 Common 池只有 The Coin、The Hammer、The Horseshoe，Uncommon 池只有 The Open Door、The Storm、The Thief，Rare 池仍为 The Blindfold、The Judge。", "可以对任意地点或任意单位施放；至少要有 2 张卡牌。", "card-card.png"),
  ],
  drawPowers: [
  O("Common Card: The Coin", 0, "0（一次性）", "使目标 UA 获得 20 Gold。使用后通常从手牌移除。", "必须指定一个 UA。", "card-coin.png"),
  O("Common Card: The Hammer", 0, "0（一次性）", "使目标正在执行的 Challenge 立即增加 20 点进度。使用后通常从手牌移除。", "必须指定一个正在执行 Challenge 的单位。", "card-hammer.png"),
  O("Common Card: The Horseshoe", 0, "0（一次性）", "让目标单位本回合恢复一次移动机会。使用后通常从手牌移除。", "目标单位本回合必须已经移动过。", "card-horseshoe.png"),
  O("Common Card: The Night", 0, "0（一次性）", "使目标单位所在地的 Warding 一次性减少 20。使用后通常从手牌移除。", "目标单位所在地的 Warding 必须至少为 10。", "card-night.png"),
  O("Common Card: The Dagger", 0, "0（一次性）", "对目标单位造成 2 HP 伤害；如果 HP 降至 0 或以下，目标会死亡。使用后通常从手牌移除。", "必须指定一个单位。", "card-dagger.png"),
  O("Uncommon Card: The Open Door", 0, "0（一次性）", "在目标单位所在地添加 Bribed Guards，持续 20 回合，使当地 Security −2。使用后通常从手牌移除。", "必须指定一个单位。", "card-door.png"),
  O("Uncommon Card: The Storm", 0, "0（一次性）", "使目标单位 Disrupted 5 回合。使用后通常从手牌移除。", "可以指定任意单位。", "card-storm.png"),
  O("Uncommon Card: The Thief", 0, "0（一次性）", "随机摧毁目标人物携带的一件 Item。使用后通常从手牌移除。", "目标必须是携带至少一件 Item 的人物单位。", "card-thief.png"),
  O("Uncommon Card: The Fist", 0, "0（一次性）", "使目标单位所在地的 Unrest 一次性增加 30。使用后通常从手牌移除。", "必须指定一个单位。", "card-door.png"),
  O("Rare Card: The Blindfold", 0, "0（一次性）", "使目标单位的 Menace −10、Profile −10。使用后通常从手牌移除。", "可以指定任意单位。", "card-blindfold.png"),
  O("Rare Card: The Judge", 0, "0（一次性）", "使目标单位的 Menace +10、Profile +10。使用后通常从手牌移除。", "可以指定除 Chosen One 以外的任意单位。", "card-judge.png"),
  ],
 supplicant: { image: "supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Lucky", "任何打在该人物单位上的卡牌都有 25% 概率不会从手牌中消耗；打在地点上的卡牌会正常消耗。该特质只有 1 级。") ] },
  sections: [
   { id: "location-modifiers", title: "地点修正", items: [
    D("Bribed Guards", "The Open Door 添加的本体地点修正；期间 Security −2。", { image: "bribed-guards.png", baseGame: true, initialValue: "持续 20 回合。", modifierChange: { natural: "每回合倒计时 1，归零后移除。", external: "由本体 The Open Door 卡牌添加。" } }),
    D("Unrest", "Unrest 是游戏本体通用地点修正。当地人口因统治者而愤怒，抗议可能发展为暴乱和暴力起义；它会降低 Security，使 Infiltration 更容易，并向相邻地点传播。贵族会优先执行降低 Unrest 的行动。每 1 点 Unrest 按代码使 Prosperity 受到 −1/200 的影响。达到 300 时触发 Unrest Crisis，当前统治者会被民众处决；处理后强度回落到 150，并清除当地 Lingering Resentment。", { id: "unrest-modifier", image: "unrest.png", baseGame: true, modifierChange: { natural: "若游戏选项 opt_rulerTraitsAffectModifiers 开启，每回合按当地统治者 Command 每点 −0.5；没有当地统治者时不产生这项 Command 变化。若该选项关闭，每回合自然 −1。", external: "<CrossReference name=\"Uncommon Card: The Fist\" /> 使用后使当地 Unrest 一次性增加 30。" } }),
   ] },
 ],
 relations: {
  "Draw Card": { effects: [{ name: "Common Card: The Coin", href: "#entry-common-card-the-coin", meta: "卡牌神力" }, { name: "Common Card: The Hammer", href: "#entry-common-card-the-hammer", meta: "卡牌神力" }, { name: "Common Card: The Horseshoe", href: "#entry-common-card-the-horseshoe", meta: "卡牌神力" }, { name: "Common Card: The Night", href: "#entry-common-card-the-night", meta: "卡牌神力" }, { name: "Common Card: The Dagger", href: "#entry-common-card-the-dagger", meta: "卡牌神力" }, { name: "Uncommon Card: The Open Door", href: "#entry-uncommon-card-the-open-door", meta: "卡牌神力" }, { name: "Uncommon Card: The Storm", href: "#entry-uncommon-card-the-storm", meta: "卡牌神力" }, { name: "Uncommon Card: The Thief", href: "#entry-uncommon-card-the-thief", meta: "卡牌神力" }, { name: "Uncommon Card: The Fist", href: "#entry-uncommon-card-the-fist", meta: "卡牌神力" }, { name: "Rare Card: The Blindfold", href: "#entry-rare-card-the-blindfold", meta: "卡牌神力" }, { name: "Rare Card: The Judge", href: "#entry-rare-card-the-judge", meta: "卡牌神力" }] },
  "Redraw": { effects: [{ name: "Common Card: The Coin", href: "#entry-common-card-the-coin", meta: "卡牌神力" }, { name: "Common Card: The Hammer", href: "#entry-common-card-the-hammer", meta: "卡牌神力" }, { name: "Common Card: The Horseshoe", href: "#entry-common-card-the-horseshoe", meta: "卡牌神力" }, { name: "Uncommon Card: The Open Door", href: "#entry-uncommon-card-the-open-door", meta: "卡牌神力" }, { name: "Uncommon Card: The Storm", href: "#entry-uncommon-card-the-storm", meta: "卡牌神力" }, { name: "Uncommon Card: The Thief", href: "#entry-uncommon-card-the-thief", meta: "卡牌神力" }, { name: "Rare Card: The Blindfold", href: "#entry-rare-card-the-blindfold", meta: "卡牌神力" }, { name: "Rare Card: The Judge", href: "#entry-rare-card-the-judge", meta: "卡牌神力" }] },
  "Common Card: The Coin": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Common Card: The Hammer": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Common Card: The Horseshoe": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Common Card: The Night": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }] },
  "Common Card: The Dagger": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }] },
  "Uncommon Card: The Open Door": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }], effects: [{ name: "Bribed Guards", href: "#entry-bribed-guards" }] },
  "Uncommon Card: The Storm": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Uncommon Card: The Thief": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Uncommon Card: The Fist": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }], effects: [{ name: "Unrest", href: "#entry-unrest-modifier", meta: "地点修正" }] },
  "Rare Card: The Blindfold": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Rare Card: The Judge": { sources: [{ name: "Draw Card", href: "#entry-draw-card", meta: "神力" }, { name: "Redraw", href: "#entry-redraw", meta: "神力" }] },
  "Unrest": { sources: [{ name: "Uncommon Card: The Fist", href: "#entry-uncommon-card-the-fist", meta: "卡牌神力" }] },
  "Bribed Guards": { sources: [{ name: "Uncommon Card: The Open Door", href: "#entry-uncommon-card-the-open-door" }] },
 }
};
const preparedConfig = prepareGodConfig(config);
export default function DeathsGamesArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
