"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, CircleDot } from "lucide-react";

type GodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "kishi" | "living-void" | "chandalor";
const gods = [
  { id: "she-who-will-feast", name: "She Who Will Feast", type: "游戏本体", image: "/she-who-will-feast/portrait.png", focus: "渗透、Shadow 扩散与苏醒军队", awaken: "375" },
  { id: "iastur", name: "Iastur, The Laughing King", type: "游戏本体", image: "/iastur/portrait.png", focus: "Laughing Tome、Madness 与性格操纵", awaken: "360" },
  { id: "vinerva", name: "Vinerva", type: "游戏本体", image: "/vinerva/portrait.png", focus: "森林之心、诱惑馈赠与自然军势", awaken: "420" },
  { id: "kishi", name: "Kishi", type: "模组神祇", image: "/kishi/god_portrait.png", focus: "Bloodstain、Soul-Scar 与恶魔浪潮", awaken: "360" },
  { id: "living-void", name: "Living Void", type: "模组神祇", image: "/living-void/god_portrait.png", focus: "虚空侵蚀、真空异常与世界坍缩", awaken: "400" },
  { id: "chandalor", name: "Chandalor, the Cursed Bloom", type: "模组神祇", image: "/chandalor/god_portrait.png", focus: "婚姻网络、家族诅咒与精神干扰", awaken: "375" },
] as const;
export default function GodIndex({ onSelect }: { onSelect: (god: GodChoice) => void }) {
  return <main className="archive-index"><header className="index-header"><div className="index-brand"><CircleDot size={18}/><span>Shadows of Forbidden Gods</span></div><p>神祇资料库</p><h1>选择神祇</h1><div className="index-intro"><BookOpen size={18}/><span>基于游戏本体程序集、模组 DLL、事件定义与原始美术素材整理。每个页面均可查看封印、神力、Agent、单位、地点修正、任务与相关机制。</span></div></header><section className="god-index-grid" aria-label="神祇列表">{gods.map((god,index)=><button type="button" className="god-index-card" key={god.id} onClick={()=>onSelect(god.id)}><span className="god-index-number">{String(index+1).padStart(2,"0")}</span><span className="god-index-image"><Image src={god.image} alt="" fill sizes="(max-width: 760px) 60vw, 240px"/></span><span className="god-index-copy"><small>{god.type}</small><b>{god.name}</b><span>{god.focus}</span><em>苏醒回合：{god.awaken}</em></span><ArrowUpRight className="god-index-arrow" size={20}/></button>)}</section><footer className="index-footer">当前共收录 {gods.length} 位神祇</footer></main>;
}