"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  CircleDot,
  Droplets,
  Eye,
  Shield,
  Skull,
  Swords,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const seals = [
  { seal: 0, turn: 0, agents: 2, reward: "Bloody Handprint、Echoes of Shadow" },
  { seal: 1, turn: 12, agents: 2, reward: "Hateful Spirit" },
  { seal: 2, turn: 24, agents: 3, reward: "Shadow Guardian" },
  { seal: 3, turn: 44, agents: 3, reward: "Blood in the Water" },
  { seal: 4, turn: 72, agents: 4, reward: "Crimson Haze" },
  { seal: 5, turn: 108, agents: 4, reward: "Might Makes Right" },
  { seal: 6, turn: 152, agents: 4, reward: "Unending Bloodshed" },
  { seal: 7, turn: 204, agents: 5, reward: "Distort Soul" },
  { seal: 8, turn: 264, agents: 5, reward: "Echoes of Ruin" },
  { seal: 9, turn: 360, agents: 6, reward: "Engulfing Tide、苏醒" },
];

const powers = [
  {
    seal: 0, name: "Bloody Handprint", cost: 1, icon: "power_bloody_handprint.png",
    effect: "在目标所在地放置 50 点 Misleading Clues。该地点下一次完成挑战时，产生的 Profile 与 Menace 会被转嫁给被标记者，用来嫁祸英雄或侍僧。",
    limit: "目标为英雄或侍僧；标记在其所在地生成。",
  },
  {
    seal: 0, name: "Echoes of Shadow", cost: 0, icon: "power_echoes_of_shadow.png",
    effect: "消耗目标人物 1 层 Bloodstain，使其所在的人类聚居地增加 50% Shadow。血污会转成 Soul-Scar，所以仍计入后期所需的历史杀戮量。",
    limit: "必须位于人类聚居地，并拥有可消耗的 Bloodstain。",
  },
  {
    seal: 1, name: "Hateful Spirit", cost: 2, icon: "power_hateful_spirit.png",
    effect: "在地点放置一个约 10 回合后追猎统治者的怨灵。成功后统治者会更喜欢 Combat 与 Cruelty；净化它的英雄反而会受到极端战争偏好的扭曲。",
    limit: "地点须可被英雄访问；可被 Purge Hateful Spirit 清除。",
  },
  {
    seal: 2, name: "Shadow Guardian", cost: 1, icon: "power_shadow_guardian.png",
    effect: "召唤一个可装备的 Shadow Guardian 随从：4 Attack、2 Defence、5 HP、占用 2 Command，用来强化代理战斗。",
    limit: "目标需要空余随从槽和足够的 Command。",
  },
  {
    seal: 3, name: "Blood in the Water", cost: 1, icon: "power_blood_in_the_water.png",
    effect: "让所有拥有 Bloodstain 的人物降低对指定人物的好感。重复施放可以把普通厌恶推至极端，更容易诱发攻击、宣战或反君主煽动。",
    limit: "直接目标不能是 Chosen One；从其统治地点选择时可能绕过限制。",
  },
  {
    seal: 4, name: "Crimson Haze", cost: 1, icon: "power_crimson_haze.png",
    effect: "消耗 1 层 Bloodstain，使所有己方 Agent 立刻降低 10 Menace，并把各自的最低 Menace 再降低 5，适合全队集中降压。",
    limit: "需要一个拥有可消耗 Bloodstain 的人物。",
  },
  {
    seal: 5, name: "Might Makes Right", cost: 2, icon: "power_might_makes_right.png",
    effect: "让一名 Bloodstained 英雄或侍僧杀死当地统治者并接替其位置；地点同时获得 50 回合的 Frightened Guards，安全降低约 3。",
    limit: "目标必须能合法继位；原统治者没有继承人时存在空引用风险。",
  },
  {
    seal: 6, name: "Unending Bloodshed", cost: 3, icon: "power_unending_bloodshed.png",
    effect: "消耗 2 层 Bloodstain，赋予 The Hunger 与 Latent Vampirism。目标死后会在下一回合以 Vampire 身份于死亡地点复活。",
    limit: "仅英雄、侍僧或统治者；至少 2 层 Bloodstain；不能是 Chosen One。",
  },
  {
    seal: 7, name: "Distort Soul", cost: 4, icon: "power_spirit_distortion.png",
    effect: "利用地点中的 Human Soul 将死者复活为不可控制的 Wight，并可依据资源附带最多两个 Firehusk。Wight 会自行袭击前哨和低 Shadow 地区。",
    limit: "地点需要 Human Soul 等复活条件；生成物不是普通可控 Agent。",
  },
  {
    seal: 8, name: "Echoes of Ruin", cost: 2, icon: "power_echoes_of_ruin.png",
    effect: "消耗 1 层 Bloodstain，使当地环境恶化 15%，相邻地点恶化 7.5%，适合从人口或农业核心区向外扩散长期破坏。",
    limit: "实际要求人类聚居地；选择野外单位可能消耗神力却没有效果。",
  },
  {
    seal: 9, name: "Engulfing Tide", cost: 4, icon: "power_engulfing_tide.png",
    effect: "消耗人物合计 4 层 Bloodstain 与 Soul-Scar，将其转化为 Demon of the Tide，摧毁聚居地、建立 Demonic Nexus，并生成 150 HP 的 Rampaging Demons。",
    limit: "Bloodstain 与 Soul-Scar 合计至少为 4；海洋单位路径可能绕过地点限制。",
  },
];

const initialAbilities = [
  ["Hit and Run", "初始 Supplicant 获得 +2 Attack。与英雄或侍僧发生代理战斗后，回合结束时降低 5 Profile 和 5 Menace。"],
  ["Expose Their Weakness", "初始 Supplicant 获得 +2 Attack。亲手杀人时，在死亡地点放置 40 回合的 Frightened Guards，使安全降低 3。"],
  ["Soldier Worship", "首次获得时，从普通英雄中随机选择三人，各赋予 1 层 Bloodstain，并计入初始 Agent 的击杀统计。"],
];

const archive = [
  {
    title: "人物特质", icon: "/kishi/property_bloodstain.png",
    items: [
      ["Bloodstained", "记录尚未消费的杀戮痕迹。杀人、主动宣战或 Soldier Worship 都能制造血污。"],
      ["Soul-Scarred", "记录已经被神力消费的 Bloodstain，仍计入 Engulfing Tide 要求的历史总杀戮量。"],
      ["Latent Vampirism", "第 6 封印后由 Unending Bloodshed 赋予；人物死亡后会以 Vampire 复活。"],
      ["Martyr for War", "教团侍僧死亡时制造 100 Unrest，并改变附近人物对 Combat、Cruelty、Cooperation 的偏好。"],
      ["Muddied Trail", "一次性扣除 Profile 与 Menace 后自行移除；Hit and Run 实际各降低 5。"],
    ],
  },
  {
    title: "地点修正", icon: "/kishi/property_bloodstain_hex5.png",
    items: [
      ["Bloodstained Lands", "以 1 至 5 级显示地点内人物的最高 Bloodstain 层数，是寻找合适施法区域的地图提示。"],
      ["Hateful Spirit", "倒计时结束后扭曲统治者；也可能由净化它的英雄承受极端战争偏好。"],
      ["Frightened Guards", "当地安全降低 3；由 Expose Their Weakness 或 Might Makes Right 产生。"],
      ["Vampiric Awakening", "保存即将复活的人物，下一回合生成对应 Vampire 后自行结束。"],
      ["Demonic Energy", "Demonic Nexus 每回合增加 5；最多一次消耗 100 来蒸馏恶魔军队。"],
    ],
  },
  {
    title: "据点与随从", icon: "/kishi/unit_shadow_guardian.png",
    items: [
      ["Demonic Nexus", "保持完全 Shadow，每回合产出 5 Demonic Energy，并允许招募 Firehusk、蒸馏恶魔军队。"],
      ["Shadow Guardian", "4 Attack、2 Defence、5 HP、占用 2 Command。"],
      ["Firehusk", "4 Attack、2 Defence、5 HP、占用 1 Command；可由 Distort Soul 或 Demonic Nexus 产生。"],
    ],
  },
  {
    title: "自主单位", icon: "/kishi/unit_demon_of_the_tide.png",
    items: [
      ["Wight", "不可控制，Might 至少提高到 4；主动袭击前哨与低 Shadow 地区。"],
      ["Demon of the Tide", "保留原人物并约 +3 Might，优先召军、招募、支援恶魔军队或袭击人类。"],
      ["Rampaging Demons", "不可控制且不会自然解散，会寻找 Shadow 低于 50% 的人类聚居地并将其夷平。"],
    ],
  },
  {
    title: "宗教与挑战", icon: "/kishi/power_hateful_spirit.png",
    items: [
      ["Martyrs for War", "加入每个 Holy Order；负面状态会让教团侍僧成为战争殉道者，死亡时传播动乱和暴力偏好。"],
      ["Purge Hateful Spirit", "英雄任务，任务信息 3/30/65，属性 Other；移除怨灵，但净化者可能遭到性格扭曲。"],
      ["Distill Demonic Horde", "第 9 封印挑战，任务信息 50/25/25，属性 Lore+Command；以 Demonic Energy 生成等量 HP 的恶魔军队。"],
    ],
  },
];

const bloodSources = [
  "非玩家控制人物杀死有灵魂的人。",
  "杀人者通常继承死者已有的 Bloodstain 与 Soul-Scar。",
  "人类国家主动宣战时，进攻方统治者获得一层。",
  "Soldier Worship 会给三名随机英雄各一层。",
  "正式开始前会清除历史模拟阶段意外积累的血污。",
];

export default function KishiArchive() {
  const root = useRef<HTMLElement>(null);
  const powersSection = useRef<HTMLElement>(null);
  const powersIntro = useRef<HTMLDivElement>(null);
  const [activeArchive, setActiveArchive] = useState(0);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(".hero-line", {
      yPercent: 115,
      duration: 1.05,
      stagger: 0.12,
      ease: "power4.out",
    });

    gsap.from(".hero-portrait", {
      scale: 1.08,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => {
      gsap.fromTo(element,
        { scale: 1.12, opacity: 0.18 },
        {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: element, start: "top 92%", end: "bottom 58%", scrub: 0.8 },
        }
      );
    });

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
      if (!powersSection.current || !powersIntro.current) return;
      ScrollTrigger.create({
        trigger: powersSection.current,
        start: "top 88px",
        end: "bottom bottom",
        pin: powersIntro.current,
        pinSpacing: false,
      });
    });

    return () => media.revert();
  }, { scope: root });

  return (
    <main ref={root} className="site-shell">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top">
          <span className="brand-mark"><Droplets size={17} /></span>
          <span>KISHI / 血潮档案</span>
        </a>
        <div className="nav-links">
          <a href="#loop">玩法</a>
          <a href="#seals">封印</a>
          <a href="#powers">神力</a>
          <a href="#archive">万象</a>
        </div>
        <a className="nav-action" href="#powers">查看神力 <ArrowDown size={15} /></a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-backdrop">
          <Image src="/kishi/god_background.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span>神祇档案 01</span><span>God of Bloodshed</span></p>
          <div className="hero-title-wrap">
            <h1>
              <span className="title-mask"><span className="hero-line">Kishi,</span></span>
              <span className="title-mask"><span className="hero-line title-red">the Jagged Tide</span></span>
            </h1>
          </div>
          <p className="hero-deck">
            杀戮不是终点，而是一种可以被积累、消费，再重新铸成恶魔军团的资源。
          </p>
          <div className="hero-facts">
            <div><b>360</b><span>回合苏醒</span></div>
            <div><b>6</b><span>最终 Agent 上限</span></div>
            <div><b>75%</b><span>苏醒时世界恐慌</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-frame hero-portrait reveal-image">
            <Image src="/kishi/god_portrait.png" alt="Kishi 神祇立绘" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="portrait-caption">
            <span>以血污扩张影响</span>
            <span>常规回合解锁</span>
          </div>
        </div>
      </header>

      <section className="ticker" aria-label="核心术语">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group} aria-hidden={group === 1}>
              {["BLOODSTAIN", "SOUL-SCAR", "DEMONIC NEXUS", "VIOLENT OMENS"].map((term, index) => (
                <span key={term}><Image src="/kishi/property_bloodstain.png" alt="" width={42} height={42} />{term}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="loop" className="section loop-section">
        <div className="section-heading">
          <p className="section-index">01 / 核心玩法</p>
          <h2>从一滴血，<br />养出一场末日。</h2>
        </div>

        <div className="loop-grid">
          <article className="bento bento-flow">
            <p className="card-kicker">完整循环</p>
            <div className="flow-list">
              {[
                "诱导英雄杀人／统治者宣战",
                "人物获得 Bloodstain",
                "消耗 Bloodstain 使用强化能力",
                "血污转化为 Soul-Scar",
                "高累计人物变成 Demon of the Tide",
                "所在地变成 Demonic Nexus",
                "持续产能并生成恶魔军团",
              ].map((step, index) => (
                <div className="flow-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                  {index < 6 && <ChevronRight size={18} />}
                </div>
              ))}
            </div>
          </article>

          <article className="bento bento-blood">
            <div className="blood-art reveal-image">
              <Image src="/kishi/property_bloodstain.png" alt="Bloodstain 图标" width={150} height={150} />
            </div>
            <p className="card-kicker">Bloodstain 的主要来源</p>
            <div className="blood-stages" aria-label="Bloodstained Lands 地点修正的五个阶段">
              {["property_bloodstain_hex.png", "property_bloodstain_hex2.png", "property_bloodstain_hex3.png", "property_bloodstain_hex4.png", "property_bloodstain_hex5.png"].map((file, index) => (
                <span key={file}>
                  <Image src={`/kishi/${file}`} alt={`Bloodstain ${index + 1} 级`} width={52} height={52} />
                  <small>{index + 1} 级</small>
                </span>
              ))}
            </div>
            <ul>{bloodSources.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>

          <article className="bento bento-scar">
            <CircleDot />
            <h3>消费并不清零历史</h3>
            <p>每消耗一层 Bloodstain，就会形成同等数量的 Soul-Scar。早期施法不会降低 Engulfing Tide 所要求的“历史总杀戮量”。</p>
          </article>

          <article className="bento metric-card">
            <span>封印规则</span><b>常规回合解锁</b><small>最大回合数为常规 500 回合</small>
          </article>
          <article className="bento metric-card omen-card">
            <span>Violent Omens</span><b>30 × 当前回合 ÷ 360</b><small>源码的 30 点封顶未真正写回；第 500 回合约 41.67。</small>
          </article>
        </div>
      </section>

      <section id="seals" className="section seals-section">
        <div className="section-heading row-heading">
          <div>
            <p className="section-index">02 / 封印进度</p>
            <h2>三百六十回合的<br />血色刻度。</h2>
          </div>
          <p>第 0 封印即有两项神力。此后每次破封既扩大神力目录，也逐步把 Agent 上限从 2 推到 6。</p>
        </div>
        <div className="seal-table">
          <div className="seal-head"><span>封印</span><span>回合</span><span>Agent</span><span>本阶段内容</span></div>
          {seals.map((item) => (
            <div className="seal-row" key={item.seal}>
              <span className="seal-number">{item.seal}</span>
              <span className="turn">{item.turn}</span>
              <span className="agent-count">{item.agents}</span>
              <span className="seal-reward">{item.reward}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="powers" ref={powersSection} className="section powers-section">
        <div ref={powersIntro} className="powers-intro">
          <p className="section-index">03 / 神力</p>
          <h2>把杀戮<br />变成工具。</h2>
          <p>消耗显示的是神力点数。每张卡同时记录解锁封印、具体效果与真正决定能否释放的限制。</p>
          <div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div>
        </div>
        <div className="powers-list">
          {powers.map((power, index) => (
            <article className="power-card" key={power.name}>
              <div className="power-image reveal-image">
                <Image src={`/kishi/${power.icon}`} alt={`${power.name} 神力图标`} fill sizes="144px" />
              </div>
              <div className="power-copy">
                <div className="power-meta">
                  <span>封印 {power.seal}</span>
                  <span>消耗 {power.cost}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{power.name}</h3>
                <p>{power.effect}</p>
                <div className="power-limit"><Shield size={16} /><span>{power.limit}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section agent-section">
        <div className="agent-portrait reveal-image">
          <Image src="/kishi/supplicant.png" alt="Kishi 的初始 Supplicant" fill sizes="(max-width: 800px) 100vw, 42vw" />
        </div>
        <div className="agent-copy">
          <p className="section-index">04 / 初始 Agent 能力</p>
          <h2>Supplicant<br />不是旁观者。</h2>
          <p className="agent-lead">三项升级都把初始侍从推向主动制造血污的前线：更强的战斗、更低的暴露成本，以及开局即注入世界的三枚血种。</p>
          <div className="ability-list">
            {initialAbilities.map(([name, description], index) => (
              <div className="ability" key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{name}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="section archive-section">
        <div className="section-heading archive-heading">
          <p className="section-index">05 / 万象档案</p>
          <h2>血潮留下的 <span className="inline-art"><Image src="/kishi/unit_demon_army.png" alt="恶魔军团" fill sizes="96px" /></span> 一切。</h2>
          <p>人物特质、地点修正、设施、随从、自主单位、宗教与挑战，都在这里汇入同一套后果链。</p>
        </div>
        <div className="accordion">
          {archive.map((group, index) => (
            <article
              key={group.title}
              className={`accordion-panel ${activeArchive === index ? "is-active" : ""}`}
              onClick={() => setActiveArchive(index)}
            >
              <button type="button" onClick={() => setActiveArchive(index)} aria-expanded={activeArchive === index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{group.title}</b>
                <ArrowUpRight size={18} />
              </button>
              <div className="accordion-content">
                <div className="archive-icon reveal-image"><Image src={group.icon} alt="" fill sizes="160px" /></div>
                <div className="archive-items">
                  {group.items.map(([name, text]) => (
                    <div key={name}><h3>{name}</h3><p>{text}</p></div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section terminal-section">
        <div className="terminal-visual reveal-image">
          <Image src="/kishi/location_demon_stronghold.png" alt="Demonic Nexus" fill sizes="(max-width: 800px) 100vw, 40vw" />
        </div>
        <div className="terminal-copy">
          <p className="section-index">终局设施</p>
          <h2>Demonic Nexus</h2>
          <p>Engulfing Tide 摧毁聚居地后建立的恶魔据点。它让地点保持完全 Shadow，每回合产生 5 Demonic Energy，并把能量蒸馏成不会自然解散的 Rampaging Demons。</p>
          <div className="terminal-stats">
            <span><b>5</b>每回合能量</span>
            <span><b>100</b>单次最大消耗</span>
            <span><b>150</b>初生军团 HP</span>
          </div>
          <a href="#top">回到档案顶部 <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <footer>
        <div><Skull size={20} />Kishi, the Jagged Tide</div>
        <p>基于模组 DLL 反编译结果与原始美术素材整理。机制文本以当前分析版本为准。</p>
        <span>Shadows of Forbidden Gods · Mod Archive</span>
      </footer>
    </main>
  );
}
