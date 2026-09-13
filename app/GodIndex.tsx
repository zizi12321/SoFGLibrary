"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, CircleDot } from "lucide-react";

type GodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "cordyceps" | "deaths-games" | "ixthus" | "kishi" | "living-void" | "chandalor";
const gods = [
  { id: "she-who-will-feast", name: "She Who Will Feast", type: "游戏本体", image: "./she-who-will-feast/portrait.png", focus: "渗透、Shadow 扩散与苏醒军队" },
  { id: "iastur", name: "Iastur, The Laughing King", type: "游戏本体", image: "./iastur/portrait.png", focus: "Laughing Tome、Madness 与性格操纵" },
  { id: "vinerva", name: "Vinerva", type: "游戏本体", image: "./vinerva/portrait.png", focus: "森林之心、诱惑馈赠与自然军势" },
  { id: "ophanim", name: "Ophanim, The Divine Beyond", type: "游戏本体", image: "./ophanim/portrait.png", focus: "Faith、Doubt 与神权国家" },
  { id: "mammon", name: "Mammon, Wealth of Man, Spirit of the Mountain", type: "游戏本体", image: "./mammon/portrait.png", focus: "贸易网络、Greed/Decadence 与吞噬" },
  { id: "broken-maker", name: "The Broken Maker", type: "游戏本体", image: "./broken-maker/portrait.png", focus: "家族诅咒、世代轮回与借用神力" },
  { id: "evil-beneath", name: "The Evil Beneath", type: "游戏本体", image: "./evil-beneath/portrait.png", focus: "地下触手、吞食、地下意识与地表决战" },
  { id: "cordyceps", name: "Cordyceps Hive Mind", type: "游戏本体", image: "./cordyceps/god_portrait.png", focus: "感染、Hive、Larval Mass 与虫群军队" },
  { id: "deaths-games", name: "Death's Games", type: "游戏本体", image: "./deaths-games/godCardsTMP.png", focus: "抽卡、概率与一次性干预" },
  { id: "ixthus", name: "Ixthus, King of Cups", type: "模组神祇", image: "./ixthus/kingOfCups_Portrait.png", focus: "Holy Grail、永生、英雄与统治者的死亡" },
  { id: "kishi", name: "Kishi", type: "模组神祇", image: "./kishi/god_portrait.png", focus: "Bloodstain、Soul-Scar 与恶魔浪潮" },
  { id: "living-void", name: "Living Void", type: "模组神祇", image: "./living-void/god_portrait.png", focus: "虚空侵蚀、真空异常与世界坍缩" },
  { id: "chandalor", name: "Chandalor, the Cursed Bloom", type: "模组神祇", image: "./chandalor/god_portrait.png", focus: "婚姻网络、家族诅咒与精神干扰" },
] as const;

export default function GodIndex({ onSelect }: { onSelect: (god: GodChoice) => void }) {
  const baseGods = gods.filter((god) => god.type === "游戏本体");
  const modGods = gods.filter((god) => god.type === "模组神祇");
  const renderCard = (god: (typeof gods)[number]) => {
    const index = gods.findIndex((item) => item.id === god.id);
    return <button type="button" className="god-index-card" key={god.id} onClick={() => onSelect(god.id)}><span className="god-index-number">{String(index + 1).padStart(2, "0")}</span><span className="god-index-image"><Image src={god.image} alt="" fill sizes="(max-width: 760px) 60vw, (max-width: 1180px) 45vw, 240px" /></span><span className="god-index-copy"><small>{god.type}</small><b>{god.name}</b><span>{god.focus}</span></span><ArrowUpRight className="god-index-arrow" size={20} /></button>;
  };
  return <main className="archive-index"><header className="index-header"><div className="index-brand"><CircleDot size={18} /><span>Shadows of Forbidden Gods</span></div><p>神祇资料库</p><h1>选择神祇</h1><div className="index-intro"><BookOpen size={18} /><span>基于游戏本体程序集、模组 DLL、事件定义与原始美术素材整理。每个页面均可查看封印、神力、Agent、单位、地点修正、任务与相关机制。</span></div></header><section className="god-index-group" aria-labelledby="base-gods-heading"><div className="index-group-heading"><p>游戏本体</p><h2 id="base-gods-heading">游戏本体</h2><span>9 位神祇</span></div><div className="god-index-grid">{baseGods.map(renderCard)}</div></section><section className="god-index-group" aria-labelledby="mod-gods-heading"><div className="index-group-heading"><p>Mod</p><h2 id="mod-gods-heading">Mod 神祇</h2><span>4 位神祇</span></div><div className="god-index-grid">{modGods.map(renderCard)}</div></section><footer className="index-footer">当前共收录 {gods.length} 位神祇</footer></main>;
}