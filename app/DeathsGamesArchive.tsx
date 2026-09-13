"use client";

import { GodArchive } from "./BaseGodArchive";
import { D, O, prepareGodConfig } from "./GodArchiveTypes";
import type { ArchiveGodChoice, GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
 id: "deaths-games", name: "Death's Games", number: "08", theme: "death-games-theme", assetDir: "deaths-games", background: "godCardsTMP.png", portrait: "god_cards_portrait.png", 
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
 supplicant: { image: "supplicant.png", stats: "Might 2，Lore 2，Intrigue 4，Command 3。", abilities: [D("Lucky", "任何打在该人物单位上的卡牌都有 25% 概率不会从手牌中消耗；打在地点上的卡牌会正常消耗。该特质只有 1 级。") ] },
 sections: [
  { id: "location-modifiers", title: "地点修正", items: [
   D("Bribed Guards", "The Open Door 添加的本体地点修正；期间 Security −2。", { baseGame: true, initialValue: "持续 20 回合。", modifierChange: { natural: "每回合倒计时 1，归零后移除。", external: "由本体 The Open Door 卡牌添加。" } }),
  ] },
 ],
 relations: {
  "Draw Card": { effects: [{ name: "抽取卡牌", href: "#draw-cards", meta: "卡牌模块" }] },
  "Redraw": { effects: [{ name: "抽取卡牌", href: "#draw-cards", meta: "卡牌模块" }] },
  "Uncommon Card: The Open Door": { effects: [{ name: "Bribed Guards", href: "#entry-bribed-guards" }] },
  "Bribed Guards": { sources: [{ name: "Uncommon Card: The Open Door", href: "#entry-uncommon-card-the-open-door" }] },
 }
};
const preparedConfig = prepareGodConfig(config);
export default function DeathsGamesArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
 return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
