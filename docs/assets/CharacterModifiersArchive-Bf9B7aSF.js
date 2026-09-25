import{a as e,b as t,d as n,f as r,h as i,i as a,s as o,t as s,v as c,x as l,y as u}from"./index-D8dGw_Dg.js";var d=l(),f={common:`人物共通`,mobile:`Agent、英雄与教士`,player:`玩家 Agent`,hero:`英雄与教士`,ruler:`统治者`,npc:`自主特殊人物`,minion:`随从`},p=[{id:`character-base-t-statmight`,source:`base`,sourceName:`游戏本体`,name:`Might`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Might 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,levels:`1–5`},{id:`character-base-t-statintrigue`,source:`base`,sourceName:`游戏本体`,name:`Intrigue`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Intrigue 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,levels:`1–5`},{id:`character-base-t-statlore`,source:`base`,sourceName:`游戏本体`,name:`Lore`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Lore 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,levels:`1–5`},{id:`character-base-t-statcommand`,source:`base`,sourceName:`游戏本体`,name:`Command`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Command 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,levels:`1–5`},{id:`character-base-t-arcaneknowledge`,source:`base`,sourceName:`游戏本体`,name:`Arcane Knowledge`,category:`mobile`,eligible:`能够研究魔法的 Agent 与英雄`,text:`作为研习魔法的知识储备；消耗指定数量可提升 <CrossReference name="Mastery of Blood Magic" href="#entry-character-base-t-masteryblood" meta="角色特质" text="1 级：Agony、Taunting Lure。
2 级：Through Their Eyes、The Hunger、Wasting Soul 等诅咒。
3 级：Possession。
各法术仍需满足自身的 Personal Item、目标与执行地点要求。" />、<CrossReference name="Mastery of Death" href="#entry-character-base-t-masterydeath" meta="角色特质" text="1 级：Death’s Shadow、Skeletal Servitor、Macabre Fortress。
2 级：Enslave the Dead、Faceless Servitor、Vampiric Curse。
3 级：Ravenous Dead。
同时拥有 1 级 Geomancy 可使用 Cthonian 相关法术；施法仍需满足各自的 Death、地点等条件。" /> 或 <CrossReference name="Mastery of Geomancy" href="#entry-character-base-t-masterygeomancy" meta="角色特质" text="1 级：Nurture、Tremor、Arcane Fortress、Attack Channeller。
2 级：Bring the Snows、Bountiful Harvest、Support Combat、Volcanic Devastation。
3 级：Death of the Sun。
同时拥有 1 级 Death Magic 可使用 Weave Cthonians、Cthonian Emergence；施法仍需满足各自的 Geomantic Locus、地点等条件。" />。持有后获得相应 Study 仪式。`,acquisition:`Learn Secret、Undertake Research、相关事件；Mage 的起始知识及首次取得 Blood Magic 也会提供知识。`,duration:`知识保留到被 Study 消耗。`},{id:`character-base-t-masteryblood`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Blood Magic`,category:`player`,eligible:`玩家 Agent；部分人物起始拥有`,text:`1 级：Agony、Taunting Lure。
2 级：Through Their Eyes、<CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色特质" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。
持续与移除：Chosen One 会清除此状态。进食将强度清零，特质保留并继续积累饥饿。" />、Wasting Soul 等诅咒。
3 级：Possession。
各法术仍需满足自身的 Personal Item、目标与执行地点要求。`,acquisition:`Study Blood 从无到 1、2、3 级分别消耗 1、2、3 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色特质" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。
持续与移除：知识保留到被 Study 消耗。" />；Warlock 可选择此学派起步。`,levels:`1–3`},{id:`character-base-t-masterydeath`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Death`,category:`mobile`,eligible:`玩家 Agent；Vampire 等具有 Death Magic 的人物`,text:`1 级：Death’s Shadow、Skeletal Servitor、Macabre <CrossReference name="Fortress" href="?page=points-of-interest#entry-location-sub-fort" meta="兴趣点" text="为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。

出现方式
小型人类聚居地的随机候选。

可出现地点
小型人类聚居地。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" />。
2 级：Enslave the Dead、<CrossReference name="Faceless Servitor" href="?page=minions#entry-faceless-servitor" meta="随从" text="无特殊能力。" />、Vampiric Curse。
3 级：Ravenous Dead。
同时拥有 1 级 Geomancy 可使用 Cthonian 相关法术；施法仍需满足各自的 Death、地点等条件。`,acquisition:`Study Death 从无到 1、2、3 级分别消耗 2、3、5 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色特质" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。
持续与移除：知识保留到被 Study 消耗。" />；相关施法者也可能起始拥有。`,levels:`1–3`},{id:`character-base-t-masterygeomancy`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Geomancy`,category:`mobile`,eligible:`玩家 Agent 与 Mage 等施法英雄`,text:`1 级：Nurture、Tremor、Arcane <CrossReference name="Fortress" href="?page=points-of-interest#entry-location-sub-fort" meta="兴趣点" text="为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。

出现方式
小型人类聚居地的随机候选。

可出现地点
小型人类聚居地。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" />、Attack Channeller。
2 级：Bring the Snows、Bountiful Harvest、Support Combat、Volcanic Devastation。
3 级：Death of the Sun。
同时拥有 1 级 Death Magic 可使用 Weave Cthonians、Cthonian Emergence；施法仍需满足各自的 Geomantic Locus、地点等条件。`,acquisition:`Study Geomancy 从无到 1、2、3 级分别消耗 2、3、5 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色特质" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。
持续与移除：知识保留到被 Study 消耗。" />；施法职业可起始拥有。`,levels:`1–3`},{id:`character-base-t-challengebooster`,source:`base`,sourceName:`游戏本体`,name:`Specialist`,category:`hero`,eligible:`英雄；Doctor 起始拥有 Physician，转为玩家控制后仍可保留`,text:`与专长标签匹配的任务进度每回合 +3。战斗开始时，若敌方具有对应标签，Defence +4。
Physician：Disease。
Mediator：Discord。
Exorcist：Undead。
Lightbringer：Shadow。
Orc-slayer：Orc。
Alienist：Madness。`,acquisition:`英雄升级时选择相应专长；Doctor 的 Physician 与此使用同一通用特质。`},{id:`character-base-t-infamous`,source:`base`,sourceName:`游戏本体`,name:`Infamous`,category:`player`,eligible:`玩家 Agent`,text:`被英雄杀死时，其他同时满足「Menace 小于死者一半」和「Profile 小于死者一半」的玩家 Agent，其 Menace 与 Profile 均减半。世界临时恐慌降低死者 Menace/3 个百分点，这类降低累计最多 50 个百分点。`,acquisition:`已经完成起始特质选择，Menace ≥20 且 Profile ≥20 时，可在后续升级选择。
Victory 事件选择 Glory in the victory 也可获得。`},{id:`character-base-t-stealthy`,source:`base`,sourceName:`游戏本体`,name:`Stealthy`,category:`player`,eligible:`玩家 Agent`,text:`每回合 Profile −0.1 × 当前 Intrigue。`,acquisition:`已经完成起始特质选择，Intrigue >2 时，可在后续升级选择。`},{id:`character-base-t-primalwaters`,source:`base`,sourceName:`游戏本体`,name:`Primal Waters`,category:`mobile`,eligible:`满足 <CrossReference name="Drink Primal Waters" href="?page=points-of-interest#entry-place-task-base-ch-drinkprimalwaters" meta="共同行动" text="获得 Primal Waters：Might +2、Lore +2、Intrigue +2、Command +2，持续 40 回合；到期后四项加成一并消失。
玩家控制的 Agent 可以再次饮用，将剩余时间重置为 40 回合；属性加成不叠加。首次获得该特质时，还会清零自上次休息以来的任务计数。" /> 条件的人物`,text:`Might、Intrigue、Lore、Command 各 +2。`,acquisition:`在 <CrossReference name="Primal Font" href="?page=points-of-interest#entry-location-sub-wonder-primalfont" meta="兴趣点" text="以独立 Control 数值争夺的奇观，提供两种 Wrestle for Control 与 Drink Primal Waters。每回合将所在及相邻地块的温度、湿度设为 0.5。防御加成 50，不能渗透，毁灭后仍存续。

出现方式
地图奇观生成器放入野外兴趣点地点。

可出现地点
野外兴趣点地点、Ruins。
改建或覆灭后是否保留，还受对应流程限制。" /> 完成 <CrossReference name="Drink Primal Waters" href="?page=points-of-interest#entry-place-task-base-ch-drinkprimalwaters" meta="共同行动" text="获得 Primal Waters：Might +2、Lore +2、Intrigue +2、Command +2，持续 40 回合；到期后四项加成一并消失。
玩家控制的 Agent 可以再次饮用，将剩余时间重置为 40 回合；属性加成不叠加。首次获得该特质时，还会清零自上次休息以来的任务计数。" />。`,duration:`40 回合；玩家再次饮用刷新到 40 回合，自主人物已有此效果时不会重复饮用。`},{id:`character-base-t-poisoned`,source:`base`,sourceName:`游戏本体`,name:`Poisoned`,category:`mobile`,eligible:`中毒的英雄与 Agent`,text:`生效时 Might、Intrigue、Lore、Command 各 −1。
<CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" /> 留下的毒会等目标下次 Rest 时发作，并额外打断 5 回合。
<CrossReference name="Poisoned Dagger" href="?page=base-items#entry-poisoned-dagger" meta="物品" text="在人物战斗中对敌人造成 HP 伤害时，使其立即进入 Poisoned 状态，持续 5 回合；已中毒的目标额外延长 5 回合。
Poisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。" /> 的中毒直接生效，持续 5 回合；再次命中延长中毒时间。`,acquisition:`<CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" />；<CrossReference name="Poisoned Dagger" href="?page=base-items#entry-poisoned-dagger" meta="物品" text="在人物战斗中对敌人造成 HP 伤害时，使其立即进入 Poisoned 状态，持续 5 回合；已中毒的目标额外延长 5 回合。
Poisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。" /> 的攻击。`,duration:`<CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" /> 发作后持续 25 回合；未发作前不扣倒计时。<CrossReference name="Poisoned Dagger" href="?page=base-items#entry-poisoned-dagger" meta="物品" text="在人物战斗中对敌人造成 HP 伤害时，使其立即进入 Poisoned 状态，持续 5 回合；已中毒的目标额外延长 5 回合。
Poisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。" /> 每次增加 5 回合，倒计时归零移除。`},{id:`character-base-t-paralyzed`,source:`base`,sourceName:`游戏本体`,name:`Paralyzed`,category:`mobile`,eligible:`遭受 Petrifying Gaze 的战斗对手`,text:`Attack、Defence 各 −2；施加时还立即扣除 2 点当前 Defence，最低降到 0。`,acquisition:`与具有 Petrifying Gaze 的人物交战。`,duration:`2 回合；归零移除。`},{id:`character-base-t-possessed`,source:`base`,sourceName:`游戏本体`,name:`Possessed`,category:`hero`,eligible:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 以外的目标英雄等人物`,text:`暂时交给玩家控制，可以利用其身体和声望执行行动；被附身者及可能识破的亲属会仇恨施法者。`,acquisition:`使用目标 Personal Item 完成 Blood Magic: Possession。`,duration:`25 回合；重复施放再增加 25 回合。到期移除并清除正在执行的任务。`},{id:`character-base-t-throughtheireyes`,source:`base`,sourceName:`游戏本体`,name:`Through their Eyes`,category:`common`,eligible:`被施加家族诅咒的英雄与统治者`,text:`其所在或统治地点的 Security −2。`,acquisition:`Blood Magic 的 Through Their Eyes 家族诅咒；相关事件。`,duration:`持续保留；人物成为玩家控制单位后移除。`},{id:`character-base-t-ruinousblade`,source:`base`,sourceName:`游戏本体`,name:`Ruinous Blade`,category:`mobile`,eligible:`被 Ruinous Blade 伤害的人物；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`个人 Shadow 每回合 +2 个百分点。`,acquisition:`Ruinous Blade 对人物造成 HP 伤害后，受伤者获得此状态；相同状态不重复添加。`},{id:`character-base-t-calloftheabyss`,source:`base`,sourceName:`游戏本体`,name:`Call of the Abyss`,category:`common`,eligible:`受诅咒的英雄与统治者`,text:`强度每逢偶数回合 +1。自主人物可用 <CrossReference name="Maintain Humanity" href="?page=locations#entry-place-ruler-base-act-deepone-humanity" meta="统治者行动" text="Call of the Abyss 强度归零，抵抗造成的疲惫增加 3。" /> 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。`,acquisition:`Blood Magic 的 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 家族诅咒；相关事件。`,duration:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会自动清除此状态；其他人物通过专门行动抵抗或完成转化。`},{id:`character-base-t-thehunger`,source:`base`,sourceName:`游戏本体`,name:`The Hunger`,category:`common`,eligible:`英雄、统治者、Vampire 等人物`,text:`饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。`,acquisition:`The Hunger 血魔法、Vampire 与 Feed 的传播及通用事件。`,duration:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会清除此状态。进食将强度清零，特质保留并继续积累饥饿。`},{id:`character-base-t-commandofvermin`,source:`base`,sourceName:`游戏本体`,name:`Command of Vermin`,category:`npc`,eligible:`Vampire；同一能力也被 Baroness 使用`,text:`每逢世界回合数为 5 的倍数时，若有空随从槽，补充一只 <CrossReference name="Vermin" href="?page=minions#entry-vermin" meta="随从" text="无特殊能力。" />（1 HP、1 Attack）。一次仅填一个槽位。`,acquisition:`Vampire 自带。`},{id:`character-base-t-mourning`,source:`base`,sourceName:`游戏本体`,name:`Mourning`,category:`common`,eligible:`失去亲友的英雄与统治者`,text:`记录正在哀悼的死者及杀害者，并使对应 Mourning 事件能够触发；本身不直接改变四项属性。`,acquisition:`亲属或喜欢的人死亡后，由人物关系系统加入。`,duration:`16 回合；每回合 −1，到期移除。`},{id:`character-base-t-chosenone`,source:`base`,sourceName:`游戏本体`,name:`Chosen One`,category:`hero`,eligible:`被选中的英雄`,text:`Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 <CrossReference name="Call of the Abyss" href="#entry-character-base-t-calloftheabyss" meta="角色特质" text="强度每逢偶数回合 +1。自主人物可用 Maintain Humanity 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 Deep One。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。
持续与移除：Chosen One 会自动清除此状态；其他人物通过专门行动抵抗或完成转化。" />、Vampiric Curse 与 <CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色特质" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。
持续与移除：Chosen One 会清除此状态。进食将强度清零，特质保留并继续积累饥饿。" />。`,acquisition:`世界选出 Chosen One 时赋予；通过预言相关任务推进。`,levels:`1–5`},{id:`character-base-t-insane`,source:`base`,sourceName:`游戏本体`,name:`Insane`,category:`common`,eligible:`Sanity 归零的英雄与统治者`,text:`每次发疯恢复 Sanity，同时让 Sanity 上限降低 4，并新增一项符合人物身份的疯狂结果。第 1 层使用轻度结果，第 2–3 层使用中度结果，第 4 层起使用重度结果。
轻度：Tetramania 偏好 Orc、Deep Ones、Undead；Invincibility Complex 更偏好 Danger；Lone Wolf 更厌恶 Cooperation；Paranoia about Comrades 解散随从；Nightmares 休息时 Sanity 每回合 −1；Mild Xenophobia 厌恶附近其他人类国家；Kleptomania 偶尔偷钱并增加 Menace；Conceited 更偏好 Ambition；Violent Outburst 立即 Menace +10。
中度：God Complex 随机更加偏好 Danger、Combat 或 Cruelty；Thanatophobia 更厌恶 Danger 和 Combat；Shaky Hands 使 Might −2；Wandering Mind 使 Lore −2；Confessor 在休息时使同地其他英雄 Sanity 每回合 −1；Tireless 使休息和升级意愿 −200；Unknowable Objectives 为各任务产生 −56 至 +56 的固定意愿修正；Hoarder 使统治者更爱 Gold，资助军队、<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" />、英雄、Outpost 的意愿 −40；Sociopath 将 Cruelty 偏好设为 +2，Cooperation 设为 −1。
重度：Charismatic Doomsayer 在人类聚居地每回合 Madness +5、Unrest +1；Delusions of Grandeur 使君主发动侵略、城市领主叛乱；Patricidal 与 Matricidal 导致攻击或杀害父母。若目标父母是玩家 Agent，发疯者自己死亡；若双方都是单位，则转为攻击任务。
自主人物还可能因疯狂做出贿赂守卫、藏匿金币、增加当地 Unrest 或打断其他英雄等异常举动。玩家控制的 Agent 和 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 不执行这部分自主疯狂行为。
恢复 Sanity 不会自动删除已有疯狂。`,acquisition:`Sanity 降到 0 时，由人物的疯狂判定产生。`},{id:`character-base-mt-clayface`,source:`base`,sourceName:`游戏本体`,name:`Changeling`,category:`minion`,eligible:`Changeling`,text:`完成 Menace 大于 5 的挑战时，将该次完成 Menace 转给一个非 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 的自主英雄；选取偏向较近的英雄。成功找到替罪羊后消耗该随从。`,acquisition:`招募或获得 Changeling 时，该随从自带。`},{id:`character-base-mt-flighty`,source:`base`,sourceName:`游戏本体`,name:`Flighty`,category:`minion`,eligible:`Monkey`,text:`主人撤退时仍能保留下来。`,acquisition:`招募或获得 Monkey 时，该随从自带。`},{id:`character-base-mt-loremaster`,source:`base`,sourceName:`游戏本体`,name:`Loremaster`,category:`minion`,eligible:`Spelltwister`,text:`主人 Lore +1。`,acquisition:`招募或获得 Spelltwister 时，该随从自带。`},{id:`character-base-mt-madnessattack`,source:`base`,sourceName:`游戏本体`,name:`Madness Attack`,category:`minion`,eligible:`<CrossReference name="Giggler" href="?page=minions#entry-giggler" meta="随从" text="Madness Attack：每次攻击使敌方领队 Sanity −1，最低为 0；攻击被 Defence 挡住时仍生效。" />`,text:`每次攻击使对方人物 Sanity −1，最低为 0；攻击被阻挡时仍能生效。`,acquisition:`招募或获得 <CrossReference name="Giggler" href="?page=minions#entry-giggler" meta="随从" text="Madness Attack：每次攻击使敌方领队 Sanity −1，最低为 0；攻击被 Defence 挡住时仍生效。" /> 时，该随从自带。`},{id:`character-base-mt-menacing`,source:`base`,sourceName:`游戏本体`,name:`Menacing`,category:`minion`,eligible:`Ogre`,text:`主人 Menace +10。`,acquisition:`招募或获得 Ogre 时，该随从自带。`},{id:`character-base-mt-stealthy`,source:`base`,sourceName:`游戏本体`,name:`Stealthy`,category:`minion`,eligible:`<CrossReference name="Goblin Infiltrator" href="?page=minions#entry-goblin-infiltrator" meta="随从" text="Stealthy：主人 Intrigue +1、Profile −5。" />`,text:`主人 Profile −5、Intrigue +1。`,acquisition:`招募或获得 <CrossReference name="Goblin Infiltrator" href="?page=minions#entry-goblin-infiltrator" meta="随从" text="Stealthy：主人 Intrigue +1、Profile −5。" /> 时，该随从自带。`},{id:`character-base-mt-summoncrows`,source:`base`,sourceName:`游戏本体`,name:`Summon Crows`,category:`minion`,eligible:`Crow`,text:`主人指挥军队作战时，对敌军施加 <CrossReference name="Murder of Crows" href="#entry-character-2932765110-t-murderofcrows" meta="角色特质" text="每逢第 5 回合，有空槽且至少剩余 1 Command 时，补充一只 Crow（1 HP、2 Attack、1 Command）。
持续与移除：随该教义的授予条件生效。" />，使其 Lethality 降低 20 个百分点。`,acquisition:`招募或获得 Crow 时，该随从自带。`},{id:`character-base-mt-thief`,source:`base`,sourceName:`游戏本体`,name:`Thief`,category:`minion`,eligible:`Monkey`,text:`主人战败撤退时从胜者身上偷取战利品：可用的金币与物品类别等概率选择，金币最多 50；两者都没有时取得 Personal Item。`,acquisition:`招募或获得 Monkey 时，该随从自带。`},{id:`character-base-mt-urbanprowler`,source:`base`,sourceName:`游戏本体`,name:`Urban Prowler`,category:`minion`,eligible:`<CrossReference name="Razor Rat" href="?page=minions#entry-razor-rat" meta="随从" text="Urban Prowler：在 City 每累计停留 10 回合，使当地英雄任务的额外 Danger +1，上限为 1。" />`,text:`在 City 中每逢第 10 回合，使当地正面任务的附加 Danger +1，最多累积到 1。`,acquisition:`招募或获得 <CrossReference name="Razor Rat" href="?page=minions#entry-razor-rat" meta="随从" text="Urban Prowler：在 City 每累计停留 10 回合，使当地英雄任务的额外 Danger +1，上限为 1。" /> 时，该随从自带。`},{id:`character-base-mt-webspinner`,source:`base`,sourceName:`游戏本体`,name:`Webspinner`,category:`minion`,eligible:`Webspinner`,text:`每逢第 17 回合在当地留下蛛网，打断经过的英雄 5 回合。`,acquisition:`招募或获得 Webspinner 时，该随从自带。`},{id:`character-base-mt-wise`,source:`base`,sourceName:`游戏本体`,name:`Wise`,category:`minion`,eligible:`Crow`,text:`主人每回合获得 1.5 XP；小数会累计后结算。`,acquisition:`招募或获得 Crow 时，该随从自带。`},{id:`character-base-temporary-divineentity`,source:`base`,sourceName:`游戏本体`,name:`Divine Blessing`,category:`player`,eligible:`被 Divine Entity 奖励选中的玩家 Agent`,text:`Intrigue、Lore、Command 各 +1。`,acquisition:`满足 Divine Entity 的愿望后，随机奖励选择 Blessing；从尚未持有临时 Command 特质的玩家 Agent 中选取一人。`,duration:`27 回合。`},{id:`character-base-event-injury`,source:`base`,sourceName:`游戏本体`,name:`Injury`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The young of the serpent" href="?page=events#entry-event-base-fog-exploreruins-infil3" meta="事件" text="完成 Explore Ruins 后，在符合条件的遗迹探索事件中抽取。

触发条件
当地遗迹路线为 The Serpent Cult
并且 遗迹已探索深度 = 3
并且 「The serpent cult · 进度」剧情记录 = 0。

探索抽选权重：2；抽选前另以 100% 通过候选检测。" /> · Inconvenient injury：Might −2（30 回合）。`,acquisition:`通过 <CrossReference name="The young of the serpent" href="?page=events#entry-event-base-fog-exploreruins-infil3" meta="事件" text="完成 Explore Ruins 后，在符合条件的遗迹探索事件中抽取。

触发条件
当地遗迹路线为 The Serpent Cult
并且 遗迹已探索深度 = 3
并且 「The serpent cult · 进度」剧情记录 = 0。

探索抽选权重：2；抽选前另以 100% 通过候选检测。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-deadly-dreams`,source:`base`,sourceName:`游戏本体`,name:`Deadly Dreams`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Deadly Dreams" href="?page=events#entry-event-base-fog-midch-hostile-dreams-3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Savage Dreams 已发生」剧情记录 = 1
并且 「已摆脱噩梦」剧情记录 = 0。

抽选权重：1。" /> · The dreams weaken %his body：Might −2（50 回合）；Intrigue −2（50 回合）。
<CrossReference name="Deadly Dreams" href="?page=events#entry-event-base-fog-midch-hostile-dreams-3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Savage Dreams 已发生」剧情记录 = 1
并且 「已摆脱噩梦」剧情记录 = 0。

抽选权重：1。" /> · The dreams weaken %his mind：Lore −2（50 回合）；Command −2（50 回合）。`,acquisition:`通过 <CrossReference name="Deadly Dreams" href="?page=events#entry-event-base-fog-midch-hostile-dreams-3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Savage Dreams 已发生」剧情记录 = 1
并且 「已摆脱噩梦」剧情记录 = 0。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-secrets-of-the-dead`,source:`base`,sourceName:`游戏本体`,name:`Secrets of the dead`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The Lyke Method" href="?page=events#entry-event-base-fog-midch-lyke-method1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物 Lore 大于 3；或者 Death Mastery 等级 大于 0；或者 Blood Mastery 等级 大于 0；或者 Geomancy Mastery 等级 大于 0）
并且 当地 Death 强度 大于 49
并且 （「The Lyke Method · 进度」剧情记录 = 0；或者 回合 大于 「The Lyke Method · 进度」剧情记录）。

抽选权重：2。" /> · Call up the dead（16.67%）：Intrigue +1（35 回合）。
<CrossReference name="The Lyke Method" href="?page=events#entry-event-base-fog-midch-lyke-method1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物 Lore 大于 3；或者 Death Mastery 等级 大于 0；或者 Blood Mastery 等级 大于 0；或者 Geomancy Mastery 等级 大于 0）
并且 当地 Death 强度 大于 49
并且 （「The Lyke Method · 进度」剧情记录 = 0；或者 回合 大于 「The Lyke Method · 进度」剧情记录）。

抽选权重：2。" /> · Call up the dead（16.67%）：Command +1（75 回合）。`,acquisition:`通过 <CrossReference name="The Lyke Method" href="?page=events#entry-event-base-fog-midch-lyke-method1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物 Lore 大于 3；或者 Death Mastery 等级 大于 0；或者 Blood Mastery 等级 大于 0；或者 Geomancy Mastery 等级 大于 0）
并且 当地 Death 强度 大于 49
并且 （「The Lyke Method · 进度」剧情记录 = 0；或者 回合 大于 「The Lyke Method · 进度」剧情记录）。

抽选权重：2。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-dueled-an-orc`,source:`base`,sourceName:`游戏本体`,name:`Dueled an orc`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> · Grant the orc a duel：Command +1（25 回合）。
<CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> · Not %his first duel：Command +1（25 回合）。`,acquisition:`通过 <CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-wounded-in-a-duel`,source:`base`,sourceName:`游戏本体`,name:`Wounded in a duel`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> · Grant the orc a duel：Might −1（25 回合）。
<CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> · Not %his first duel：Might −1（25 回合）。`,acquisition:`通过 <CrossReference name="Orcish aspirant" href="?page=events#entry-event-base-fog-midch-orcish-aspirant" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed；或者 当前单位是 The Warlord）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-couldn-t-handle-the-grott`,source:`base`,sourceName:`游戏本体`,name:`Couldn't handle the grott`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The orcish toast" href="?page=events#entry-event-base-fog-midch-orcish-toast-human" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed）。

抽选权重：1。" /> · Refuse the ''honour''：Command −1（15 回合）。`,acquisition:`通过 <CrossReference name="The orcish toast" href="?page=events#entry-event-base-fog-midch-orcish-toast-human" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当地是 Orc Camp；或者 当地是 Orc Fortress）
并且 （当前单位是 Human；或者 当前单位是 The Cursed）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-apathetic-witness-`,source:`base`,sourceName:`游戏本体`,name:`Apathetic Witness · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Apathetic Witness" href="?page=events#entry-event-base-fog-midch-smoker" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地是人类聚居地
并且 当前单位是 Human。

抽选权重：1。" /> · %He has nothing for her：Intrigue −1（20 回合）。
<CrossReference name="Apathetic Witness" href="?page=events#entry-event-base-fog-midch-smoker" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地是人类聚居地
并且 当前单位是 Human。

抽选权重：1。" /> · A few more coins for her whispers：Intrigue +1（30 回合）。`,acquisition:`通过 <CrossReference name="Apathetic Witness" href="?page=events#entry-event-base-fog-midch-smoker" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地是人类聚居地
并且 当前单位是 Human。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-unscrupulous-supporters-`,source:`base`,sourceName:`游戏本体`,name:`Unscrupulous Supporters · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Unscrupulous Supporters" href="?page=events#entry-event-base-fog-midch-unscrupulous-supporters" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
神力 大于 0
并且 当地是人类聚居地。

抽选权重：1。" /> · Allow it：Intrigue +1（35 回合）。`,acquisition:`通过 <CrossReference name="Unscrupulous Supporters" href="?page=events#entry-event-base-fog-midch-unscrupulous-supporters" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
神力 大于 0
并且 当地是人类聚居地。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-event-spectral-assault-`,source:`base`,sourceName:`游戏本体`,name:`Spectral Assault · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Spectral Assault" href="?page=events#entry-event-base-fog-move-spectral-assault" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
当地 Death 强度 大于 30
并且 当前单位是 Human。

单次候选检查概率：10%。" /> · Withstand their assault：Might −2（50 回合）。`,acquisition:`通过 <CrossReference name="Spectral Assault" href="?page=events#entry-event-base-fog-move-spectral-assault" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
当地 Death 强度 大于 30
并且 当前单位是 Human。

单次候选检查概率：10%。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-base-curse-foreverdying`,source:`base`,sourceName:`游戏本体`,name:`Forever Dying`,category:`common`,eligible:`受诅咒家族的角色与统治者`,text:`角色单位每回合有 5% 概率失去 1 HP，但不会因此低于 1 HP。
统治者每回合有 1% 概率陷入 10 回合 <CrossReference name="Political Gridlock" href="?page=points-of-interest#entry-place-task-base-ch-politicalgridlock" meta="挑战" text="取消当地统治者当前行动，改为浪费 10 回合的 Political Gridlock；若在首都，国家行动也受到影响。" />，替换当前统治行动。`,acquisition:`持有目标的 Personal Item 时执行 Forever Dying。`},{id:`character-base-curse-thehowling`,source:`base`,sourceName:`游戏本体`,name:`The Howling`,category:`common`,eligible:`触发 Harvester 死亡诅咒的凶手家族`,text:`每回合将高于 4 的 Sanity 上限压到 4，使家族成员更容易陷入疯狂。`,acquisition:`具有 Howl: Death’s Curse 的 Harvester 被人物杀死时，凶手家族受到诅咒。`},{id:`character-base-curse-wastingsouls`,source:`base`,sourceName:`游戏本体`,name:`Wasting Souls`,category:`common`,eligible:`受诅咒家族成员；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`每回合失去 5 XP；经验损失可以造成降级，并移除对应升级所得的属性点。`,acquisition:`持有目标的 Personal Item，以 Blood Magic 执行 Wasting Soul。`},{id:`character-2879667447-t-abyssalmagic`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Abyssal Magic`,category:`mobile`,eligible:`持有 Abyssal Shard 的人物；<CrossReference name="Abyssal Ritualist" href="?page=non-player-units#entry-npc-abyssal-ritualist" meta="非玩家单位" text="自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。" />`,text:`显示所有 Abyssal Shard 的当前蓄能与最大蓄能之和。蓄能用于开放、支付更强的 Abyssal Magic；多枚碎片的容量与储量累加。`,acquisition:`取得 Abyssal Shard，或 <CrossReference name="Abyssal Ritualist" href="?page=non-player-units#entry-npc-abyssal-ritualist" meta="非玩家单位" text="自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。" /> 起始拥有。`,duration:`失去全部 Abyssal Shard 后移除。`},{id:`character-2879667447-t-deeponecurse-scorn`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Sailor's Scorn`,category:`common`,eligible:`受诅咒的英雄与统治者`,text:`位于海上或沿海时，每回合 Gold −2。每逢世界回合号除以 10 余 1，销毁物品栏中首个符合条件的 <CrossReference name="War Axe" href="?page=base-items#entry-war-axe" meta="物品" text="Might +2。" />、<CrossReference name="Shield" href="?page=base-items#entry-shield" meta="物品" text="Defence +1。" />、<CrossReference name="Reliable Shield" href="?page=base-items#entry-reliable-shield" meta="物品" text="Defence +2。" />、<CrossReference name="Basic Axe" href="?page=base-items#entry-basic-axe" meta="物品" text="Might +1。" /> 或 <CrossReference name="Flintlock Pistol" href="?page=base-items#entry-flintlock-pistol" meta="物品" text="Attack +1。" />。统治者还会使领地得到同名地点修正。`,acquisition:`Sailor’s Scorn 血魔法。`},{id:`character-2879667447-t-deeponeentity`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Deep One Entity`,category:`npc`,eligible:`<CrossReference name="Drowned Prophet" href="?page=non-player-units#entry-npc-drowned-prophet" meta="非玩家单位" text="默认自主行动，优先施放 Hymn、维持自身国家并防御入侵。Direct Control 可让玩家接管，Relinquish Control 可恢复自主状态。" />、<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色特质" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" /> 等深海实体`,text:`不因衰老死亡；每回合恢复满 Sanity 并设为无灵魂。清除 <CrossReference name="Call of the Abyss" href="#entry-character-base-t-calloftheabyss" meta="角色特质" text="强度每逢偶数回合 +1。自主人物可用 Maintain Humanity 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 Deep One。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。
持续与移除：Chosen One 会自动清除此状态；其他人物通过专门行动抵抗或完成转化。" />、Howl: Death’s Curse、Insane、<CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色特质" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。
持续与移除：Chosen One 会清除此状态。进食将强度清零，特质保留并继续积累饥饿。" />、名称带 Curse 的特质及家族诅咒。`,acquisition:`对应深海实体生成时自带。`},{id:`character-2879667447-t-inundai`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Emissary`,category:`npc`,eligible:`Inundai Emissary`,text:`每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。`,acquisition:`Inundai Emissary 自带。`},{id:`character-2879667447-t-inundai-hunger`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Hunger for Madness`,category:`npc`,eligible:`<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色特质" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" />`,text:`饥饿每回合 +0.3，越高越倾向消耗 Madness。
Establish Presence 增加 25 + 2×世界现存 Inundai Presence 数量的饥饿；吸收 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 人口增加 100。
Recollect 消耗 Madness，每消耗 1 点使饥饿 −2，最低 0。`,acquisition:`<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色特质" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" /> 自带，与单位的饥饿值同步。`},{id:`character-2879667447-t-inundai-agentpayment`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Favor`,category:`player`,eligible:`接受 <CrossReference name="Inundai Patronage" href="#entry-character-2879667447-t-inundai-patronage" meta="角色特质" text="允许请求金币、粮食、压制 Unrest、恢复 Sanity 或报复等援助，每次请求积累 Inundai Debt。
持续与移除：英雄转成非英雄单位时移除。" /> 的 Agent`,text:`每回合 Favor +1。
Drive Word of Mouth、Conceal Deep Ones、Human Appearance、Power Deep Ones、Start Deep Cult、增加 Madness 的对应行动：Favor +向下取整的 Complexity/2。
在 Inundai Presence 地点建造雕像：+20；恢复 Presence：+100。
在该地点执行 <CrossReference name="Raid Periphery" href="?page=locations#entry-place-task-base-ch-raidperiphery" meta="挑战" text="增加当地 Devastation，破坏 Prosperity 与粮食供应。" />、<CrossReference name="Enshadow" href="?page=locations#entry-place-task-base-ch-enshadow" meta="挑战" text="提高当地 Shadow，建立能向周边传播黑暗的据点。" />、Fuel the Fire、<CrossReference name="Malign Catch" href="?page=points-of-interest#entry-place-task-base-ch-maligncatch" meta="挑战" text="建立 Malign Catch，逐回合增强 Shadow、Madness，并为发展 Deep One Cult 提供入口。" />、<CrossReference name="Political Gridlock" href="?page=points-of-interest#entry-place-task-base-ch-politicalgridlock" meta="挑战" text="取消当地统治者当前行动，改为浪费 10 回合的 Political Gridlock；若在首都，国家行动也受到影响。" />、Spread Panic：+Complexity。
其余 Deep Ones <CrossReference name="Propagation" href="?page=points-of-interest#entry-place-task-base-ch-deeponespropagation" meta="挑战" text="吸引相邻已渗透人类聚居地的 20% 人口进入深海城市，并使 Sanctum Menace +10。" />、Call of the Deep、带 Deep Ones 正面标签的行动：+Complexity。
在有 Inundai Presence 的地点消费 Favor 换取援助。`,acquisition:`Agent 接受 <CrossReference name="Inundai Patronage" href="#entry-character-2879667447-t-inundai-patronage" meta="角色特质" text="允许请求金币、粮食、压制 Unrest、恢复 Sanity 或报复等援助，每次请求积累 Inundai Debt。
持续与移除：英雄转成非英雄单位时移除。" />。`,duration:`储存到被援助行动消费。`},{id:`character-2879667447-t-inundai-patronage`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Patronage`,category:`common`,eligible:`接受交易的英雄与统治者`,text:`允许请求金币、粮食、压制 Unrest、恢复 Sanity 或报复等援助，每次请求积累 <CrossReference name="Inundai Debt" href="#entry-character-2879667447-t-inundai-debt" meta="角色特质" text="首次取得 Sanity −2。每逢第 10 回合，正数债务按当前利率计息；在人物故乡或领地开放使者收债行动。
完成 Dangerous Knowledge、Drive Word of Mouth、Conceal Deep Ones 或 Deep Ones Human Appearance，各使债务 −25。统治者另可 Pay Debt 或 Create Madness。
持续与移除：债务随交易、计息与偿付变化；英雄转成非英雄单位时移除。" />。`,acquisition:`Accept Patronage／Take Patronage。`,duration:`英雄转成非英雄单位时移除。`},{id:`character-2879667447-t-inundai-debt`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Debt`,category:`common`,eligible:`向 Inundai 索取援助的英雄与统治者`,text:`首次取得 Sanity −2。每逢第 10 回合，正数债务按当前利率计息；在人物故乡或领地开放使者收债行动。
完成 Dangerous Knowledge、Drive Word of Mouth、Conceal Deep Ones 或 Deep Ones Human Appearance，各使债务 −25。统治者另可 Pay Debt 或 Create Madness。`,acquisition:`接受 Patronage、索取援助，以及对应债务诅咒。`,duration:`债务随交易、计息与偿付变化；英雄转成非英雄单位时移除。`},{id:`character-2879667447-t-inundai-ire`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Ire`,category:`common`,eligible:`破坏 Inundai Presence 或雕像的人物`,text:`使负债的人物更倾向攻击此人。被杀死时，杀手若有 Debt，则 Debt −2×死者 Ire；若有 Favor，则 Favor +2×死者 Ire。`,acquisition:`Block Presence 或 Destroy Statues。`},{id:`character-2879667447-t-inundai-norest`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Manic Energy`,category:`hero`,eligible:`请求休息援助的英雄`,text:`将连续任务疲劳计数持续压到 −10，消除由此产生的 Rest & Resupply 需求。`,acquisition:`Inundai 的 Rest Boost 援助。`,duration:`25 回合。`},{id:`character-2879667447-t-inundai-sanity`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Protection`,category:`ruler`,eligible:`请求 Sanity 援助的统治者`,text:`每回合 Sanity +2，不超过自身上限。`,acquisition:`统治者向 Inundai 请求 Sanity 援助。`,duration:`25 回合。`},{id:`character-2879667447-t-inundai-seabornesecrets`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Seaborne Secrets`,category:`common`,eligible:`请求属性援助的 Agent、英雄与统治者`,text:`Lore +1，Command +1。`,acquisition:`向 Inundai 请求属性强化。`,duration:`25 回合。`},{id:`character-2879667447-t-strangemeat`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Strange Meat Consumption`,category:`player`,eligible:`食用 <CrossReference name="Strange Meat" href="?page=base-items#entry-mod-2879667447-i-strangemeat" meta="物品" text="Eat Strange Meat：消耗物品，25 回合内 Might +3、Attack +3、最大 HP −3；已有该效果时不能重复食用。
Taint Food Supply：在完全渗透的地点消耗物品，建立或增加 25 强度的 Tainted Food Supply，削弱当地及接收当地粮食的城市的 Plague Immunity。" /> 的 Agent`,text:`Attack +3、Might +3，最大 HP −3。首次回合结算应用生命上限降低，并将当前 HP 限制到新上限。`,acquisition:`食用 <CrossReference name="Strange Meat" href="?page=base-items#entry-mod-2879667447-i-strangemeat" meta="物品" text="Eat Strange Meat：消耗物品，25 回合内 Might +3、Attack +3、最大 HP −3；已有该效果时不能重复食用。
Taint Food Supply：在完全渗透的地点消耗物品，建立或增加 25 强度的 Tainted Food Supply，削弱当地及接收当地粮食的城市的 Plague Immunity。" />，完成 Consume <CrossReference name="Strange Meat" href="?page=base-items#entry-mod-2879667447-i-strangemeat" meta="物品" text="Eat Strange Meat：消耗物品，25 回合内 Might +3、Attack +3、最大 HP −3；已有该效果时不能重复食用。
Taint Food Supply：在完全渗透的地点消耗物品，建立或增加 25 强度的 Tainted Food Supply，削弱当地及接收当地粮食的城市的 Plague Immunity。" />。`,duration:`25 回合；到期移除增益，并返还被扣除的 3 点 HP 上限。`},{id:`character-2879667447-temporary-abyssalsupport`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Abyssal Support`,category:`npc`,eligible:`世界上存活的 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />、<CrossReference name="Abyssal Priest" href="?page=non-player-units#entry-npc-abyssal-priest" meta="非玩家单位" text="自主寻找沿海聚居地传播 Cult 或宣讲。初始 Shadow 为 100%，每回合 Profile +1、Menace +0.5。" />、<CrossReference name="Abyssal Ritualist" href="?page=non-player-units#entry-npc-abyssal-ritualist" meta="非玩家单位" text="自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。" />，以及 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 物种角色`,text:`Intrigue +2、Lore +2；某项已有临时属性特质时，不重复添加该项。`,acquisition:`在 <CrossReference name="Deep One Sanctum" href="?page=locations#entry-location-set-deeponesanctum" meta="地点" text="人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。

Temperature
Temperature 不决定圣所的存续与人口承载。圣所接收的转化人口会转送至 Abyssal City，按 Deep Ones 自身的转送规则结算。

Prosperity
此处不使用 Prosperity，城防上限固定为 50。原聚居地留下的兴趣点仍按各自规则提供功能。

出现方式
Deep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。

可能配置的兴趣点
Sanctum。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。" /> 完成 Abyssal Support，效果施加于全世界符合条件的角色。`,duration:`20 回合。`},{id:`character-2879667447-temporary-prayer`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Pray to the Deep · 临时属性`,category:`player`,eligible:`持有 <CrossReference name="Waterlogged Charm" href="?page=base-items#entry-mod-2879667447-i-waterloggedcharm" meta="物品" text="符合条件的非玩家英雄或统治者每回合 Sanity −1；Sanity 恰好降至 0 时获得 Call of the Abyss。已有该特质、极度喜爱 Deep Ones、玩家控制者及自主邪恶 Agent 不受这项侵蚀影响。
Bury Charm：在 Deep One Cult 所在地消耗物品，使加速成熟时间增加 15 回合。
Pray to the Deep：随机产生临时属性加成、HP 损失、Profile 降低、海上宝藏或无效果，部分结果会毁掉 Charm。沿海、海洋及 Deep Ones 势力规模会改变可抽取的结果范围。" /> 并祈祷的 Agent`,text:`祈祷的不同结果会分别给予以下一种变化：
某一属性 +3，持续 10 回合；Might、Intrigue、Lore 的结果另扣 4 HP，Command 的结果不扣 HP，均消耗护符。
某一属性 +2，持续 15 回合；Might、Intrigue、Lore 的结果另扣 2 HP，Command 的结果不扣 HP。
某一属性 +1，持续 20 回合。
Command 与 Intrigue 各 −1，持续 15 回合。
Might −1，持续 15 回合。`,acquisition:`持有 <CrossReference name="Waterlogged Charm" href="?page=base-items#entry-mod-2879667447-i-waterloggedcharm" meta="物品" text="符合条件的非玩家英雄或统治者每回合 Sanity −1；Sanity 恰好降至 0 时获得 Call of the Abyss。已有该特质、极度喜爱 Deep Ones、玩家控制者及自主邪恶 Agent 不受这项侵蚀影响。
Bury Charm：在 Deep One Cult 所在地消耗物品，使加速成熟时间增加 15 回合。
Pray to the Deep：随机产生临时属性加成、HP 损失、Profile 降低、海上宝藏或无效果，部分结果会毁掉 Charm。沿海、海洋及 Deep Ones 势力规模会改变可抽取的结果范围。" />，执行 Pray to the Deep。`,duration:`各结果分别倒计时，到期移除。`},{id:`character-2879667447-event-strange-figure`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Strange Figure`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Around the Corner" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Report the figure（25%）：Command +1（50 回合）。`,acquisition:`通过 <CrossReference name="Around the Corner" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2879667447-event-around-the-corner-`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Around the Corner · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Around the Corner" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Follow（25%）：Intrigue +1（15 回合）。`,acquisition:`通过 <CrossReference name="Around the Corner" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2879667447-event-makeshift-temple-`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Makeshift Temple · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Makeshift Temple" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Investigate the Building（25%）：Intrigue +1（25 回合）。
<CrossReference name="Makeshift Temple" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Channel Arcane Energies（25%）：Lore +1（25 回合）。`,acquisition:`通过 <CrossReference name="Makeshift Temple" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2879667447-event-accused-deep-one`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Accused Deep One`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Accused Deep One" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Talk the crowd down.（25%）：Intrigue +1（25 回合）。
<CrossReference name="Accused Deep One" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Talk the crowd down.（25%）：Lore +1（25 回合）。
<CrossReference name="Accused Deep One" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> · Talk the crowd down.（25%）：Lore +1（25 回合）；Intrigue +1（25 回合）。`,acquisition:`通过 <CrossReference name="Accused Deep One" href="?page=events#entry-event-2879667447-wonderblunder-deepones-deeponepluscult3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
当地 Deep Ones 强度 大于 0
并且 当地 Deep Ones 强度 小于 201。

抽选权重：0.4。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2932110698-t-nature-lycanthropy`,source:`2932110698`,sourceName:`Living Wilds`,name:`Lycanthropy`,category:`common`,eligible:`可感染的 Agent、英雄、教士与统治者`,text:`每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 <CrossReference name="Infectious Curse" href="#entry-character-2932110698-t-nature-werewolfinfectiousness" meta="角色特质" text="本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 Lycanthropy。
持续与移除：成功传播后冷却 60 回合；普通感染者变回人形后移除。" />。变回时移除这些形态能力，保留 HP 和原人物。`,acquisition:`被狼人伤害或完成感染行动；女巫诅咒；Liberation of Beasthood 教义可使教士自愿接受。<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 与亡灵不能正常转化。`,duration:`感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。`},{id:`character-2932110698-t-nature-werewolfinfectiousness`,source:`2932110698`,sourceName:`Living Wilds`,name:`Infectious Curse`,category:`mobile`,eligible:`狼人及处于狼人形态的感染人物`,text:`本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色特质" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。
持续与移除：感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。" />。`,acquisition:`狼人自带；非女巫诅咒造成的 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色特质" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。
持续与移除：感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。" /> 变身时获得。`,duration:`成功传播后冷却 60 回合；普通感染者变回人形后移除。`},{id:`character-2932110698-t-nature-autominions`,source:`2932110698`,sourceName:`Living Wilds`,name:`Bonds of Nature / Lupine Dominion / Spider Queen`,category:`npc`,eligible:`自然生物、狼人，以及进入狼人形态的人物`,text:`每逢第 5 回合，若有空槽且剩余 Command 足够，补充一只对应随从。
Bonds of Nature：<CrossReference name="Dryad" href="?page=non-player-units#entry-npc-dryad" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
选择受伤人物及受灾地点提供治疗；黑暗形态同时传播 Shadow。" />、<CrossReference name="Fairy" href="?page=non-player-units#entry-npc-fairy" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
对人物或统治者施加魅惑。" />、Stag、<CrossReference name="Unicorn" href="?page=non-player-units#entry-npc-unicorn" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态为周边人类聚居地施加 Ward；黑暗形态倾向建立 Well of Shadows。" /> 补充 <CrossReference name="Sprite" href="?page=minions#entry-sprite" meta="随从" text="无特殊能力。" />。
Lupine Dominion：狼人补充 Wolf。
Spider Queen：<CrossReference name="Broodmother" href="?page=non-player-units#entry-npc-broodmother" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态在家园织网，黑暗形态还会侵入人类聚居地织网。" /> 补充 <CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" />。`,acquisition:`对应野生生物自带；<CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色特质" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。
持续与移除：感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。" /> 变身时获得 Lupine Dominion。`,duration:`自然生物长期保留；感染者恢复人形时移除。`},{id:`character-2932110698-t-nature-stagdeath`,source:`2932110698`,sourceName:`Living Wilds`,name:`Spirit of Bounty / Spirit of Rage`,category:`npc`,eligible:`Stag`,text:`Spirit of Bounty：被自主英雄杀死时，杀手故乡获得 50 Stockpiled Food，Shadow −50 个百分点；被玩家 Agent 杀死时，改为全部玩家 Agent 各得 100 XP。
Spirit of Rage：被玩家 Agent 杀死时，死亡地点 Shadow +100 个百分点，并加入或增加 100 强度 <CrossReference name="Well of Shadows" href="?page=locations#entry-place-task-base-ch-wellofshadows" meta="挑战" text="建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。" />。`,acquisition:`Stag 自带，随明暗形态切换。`,duration:`死亡时触发。`},{id:`character-2932110698-mt-nature-poisonbite`,source:`2932110698`,sourceName:`Living Wilds`,name:`Poison Bite`,category:`minion`,eligible:`<CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" />`,text:`攻击穿过目标 Defence 并造成 HP 伤害时，施加 5 回合 Poisoned，使四项属性各 −1；已有中毒时增加 5 回合。`,acquisition:`<CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" /> 自带。`},{id:`character-2932765110-mt-carrierpigeon`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Carrier Pigeon`,category:`minion`,eligible:`Pigeon`,text:`可以派遣运送或取回其他 Agent 的物品和金币。`,acquisition:`取得 Pigeon。`},{id:`character-2932765110-mt-owlnightvision`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`An Eye for Sercrets`,category:`minion`,eligible:`Owl`,text:`主人 Profile −5。主人执行任务、途中事件计数至少 4 且当地 Shadow ≥50% 时，可替换为 Owl 专有事件；选中后分别有 30% 为物品事件、40% 为通道事件、30% 为 Owl Egg 事件，并重置途中事件计数。`,acquisition:`取得 Owl。`},{id:`character-2932765110-t-collectedmind`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Collected Mind`,category:`common`,eligible:`受诅咒的英雄、教士与统治者`,text:`成为 Eldritch Command 的目标：可指定人物任务、统治者行动或君主国家行动；国家行动要求原执行意愿至少 −40。该神力每回合第一次免费，此后逐次增加 1 消耗。`,acquisition:`Curseweaving 的 Collected Mind 家族诅咒。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物时移除。`},{id:`character-2932765110-t-doomedprophetscurse`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Doomed Prophet's Curse`,category:`hero`,eligible:`佩戴 Doomed <CrossReference name="Prophet" href="#entry-character-2968835416-t-prophet" meta="角色特质" text="显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。
持续与移除：教团消失或 Prophet 身份转移后移除该归属；全部失去后移除特质。" />’s Ring 的自主英雄`,text:`获得时 Awareness 设为 100%。完成 Warn the World 时，使当地及相邻聚居地 Shadow 各 +25 个百分点，并抵消对应统治者的常规 Awareness 增长。`,acquisition:`佩戴 Doomed <CrossReference name="Prophet" href="#entry-character-2968835416-t-prophet" meta="角色特质" text="显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。
持续与移除：教团消失或 Prophet 身份转移后移除该归属；全部失去后移除特质。" />’s Ring。`,duration:`失去戒指、成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物时移除。`},{id:`character-2932765110-t-fictitiousbonds`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Fictitious Bonds`,category:`common`,eligible:`通过 Rite of Masks 加入目标家族的人物`,text:`在由所记录家族成员统治的聚居地，Security −1；持有者本人担任该家族统治者时也生效。`,acquisition:`Curseweaving: Rite of Masks。`,duration:`离开所记录家族后移除。`},{id:`character-2932765110-t-flourishing`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Forced Flourishing`,category:`common`,eligible:`受诅咒的人物`,text:`在有人类聚居地的地点，每回合 Population +1。`,acquisition:`Forced Flourishing 家族诅咒。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 后移除。`},{id:`character-2932765110-t-generosity`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Curse of Generosity`,category:`hero`,eligible:`侵入女巫教团的其他教士`,text:`每回合向施咒教团捐出 5 Gold；个人金币不足时会继续向其所属教团资金索取。资助施咒教团的行动意愿 +20。`,acquisition:`女巫对侵入教士执行 Curse Intruding <CrossReference name="Acolyte" href="?page=non-player-units#entry-npc-acolyte" meta="非玩家单位" text="偏好宗教任务，教义等级决定可执行的行动；教团之间的关系、个人偏好和威胁也影响决策。被控制后可以作为玩家 Agent 行动。" />。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" />、受控人物、施咒教团成员、Ophanim 教士或相应 Orc 教士后解除。`},{id:`character-2932765110-t-masterycurseweaving`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Mastery of Curseweaving`,category:`mobile`,eligible:`可研究 Curseweaving 的 Agent 与施法人物`,text:`以 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" /> 中的灵魂施展家族诅咒与灵魂编织。加入 Magic Plague、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" /> 与 1 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色特质" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。
持续与移除：知识保留到被 Study 消耗。" />。`,acquisition:`Study Curseweaving；可选该学派的施法者起始选择。`,levels:`1–3`},{id:`character-2932765110-t-mirror`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Mirrored`,category:`common`,eligible:`被镜像诅咒选中的英雄与统治者`,text:`每回合把全部普通与极端喜恶复制为目标人物的喜恶。`,acquisition:`Mirrored 家族诅咒。`,duration:`失去有效目标、成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或受玩家控制时移除。`},{id:`character-2932765110-t-murderofcrows`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Murder of Crows`,category:`hero`,eligible:`采用 Aviaries 的教士`,text:`每逢第 5 回合，有空槽且至少剩余 1 Command 时，补充一只 Crow（1 HP、2 Attack、1 Command）。`,acquisition:`Aviaries 教义。`,duration:`随该教义的授予条件生效。`},{id:`character-2932765110-t-phthisicalpoisoned`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Disfigured by Phthisical Poison`,category:`hero`,eligible:`被 <CrossReference name="Esoteric Poisons" href="#entry-character-2932765110-t-poisoner" meta="角色特质" text="把 Poison Hero 的普通毒替换为 Phthisical Poison：打断时间翻倍为 10 回合，并造成永久四属性减益。
持续与移除：失去全部对应物品后移除。" /> 下毒的英雄`,text:`下次 Rest 时使四项属性永久各 −已激活层数，并打断 10 回合。重复下毒增加待激活层数，下次休息进一步恶化。`,acquisition:`持有 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" /> 的人物完成 <CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" />。`},{id:`character-2932765110-t-poisoner`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Esoteric Poisons`,category:`player`,eligible:`持有 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" /> 的 Agent`,text:`把 <CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" /> 的普通毒替换为 Phthisical <CrossReference name="Poison" href="?page=base-items#entry-poison" meta="物品" text="执行 Poison Hero 或 Silent Assassination 时，每回合额外增加 7 点挑战进度。使用后保留物品。" />：打断时间翻倍为 10 回合，并造成永久四属性减益。`,acquisition:`携带 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" />。`,duration:`失去全部对应物品后移除。`},{id:`character-2932765110-t-soulless`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Soulless`,category:`common`,eligible:`灵魂被夺取的人物`,text:`个人 Shadow 每回合 +0.3 个百分点，最高 100%。`,acquisition:`Soul Snare；女巫惩罚侵入教士的相应结果。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 后移除。`},{id:`character-2932765110-t-toad`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Toad Form`,category:`common`,eligible:`被变成蟾蜍的英雄、教士与统治者`,text:`Attack、Might、Intrigue、Lore、Command 各 −3；获得时解散全部随从。英雄与教士由 Toad 形态替代；统治者陷入 Gridlock，并开放 Squash Toad。`,acquisition:`Curse of Toad 家族诅咒。`,duration:`家族诅咒默认持续 10 回合；单位形态在对应转化结束后恢复。`},{id:`character-2932765110-t-transmutationmaster`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Weaver of Souls`,category:`player`,eligible:`已掌握 Curseweaving 的 Agent`,text:`Transpose Souls 时可选择保留哪一个灵魂。获得时另给两枚装有随机灵魂的 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" />。`,acquisition:`已有 <CrossReference name="Mastery of Curseweaving" href="#entry-character-2932765110-t-masterycurseweaving" meta="角色特质" text="以 Soulstone 中的灵魂施展家族诅咒与灵魂编织。加入 Magic Plague、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 Soulstone 与 1 Arcane Knowledge。" /> 后，在升级时选择。`},{id:`character-2932765110-t-wanderer`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Insatiable Wanderlust`,category:`hero`,eligible:`受诅咒的自主英雄与教士`,text:`每完成一种任务，该类任务的执行意愿 −50，可累加；每回合恢复 1。另记录攻击、守卫、干扰等重复行为，抑制重复行动。`,acquisition:`Insatiable Wanderlust 家族诅咒；女巫惩罚侵入教士。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物后移除。`},{id:`character-2932765110-temporary-sharedwisdom`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Shared Wisdom · Lore`,category:`mobile`,eligible:`停留在对应教团 Temple 的角色`,text:`Lore 加成为教义等级的相反数：−1/−2/−3 级分别 +1/+2/+3；+1/+2/+3 级分别 −1/−2/−3。`,acquisition:`Shared Wisdom 教义非 0 级，人物停留在该教团的 Temple。`,duration:`每次增减持续 1 回合；仍满足条件时每回合再次赋予。`},{id:`character-2932765110-curse-lycanthropy`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Curse of Lycanthropy`,category:`common`,eligible:`受诅咒家族的角色与统治者；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色特质" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`在同时启用 Living Wilds 时，为合格家族成员施加 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色特质" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。
持续与移除：感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。" />。默认每 50 回合进入 Blood Moon，狼人形态持续 20 回合；女巫诅咒造成的狼人不获得传染他人的 <CrossReference name="Infectious Curse" href="#entry-character-2932110698-t-nature-werewolfinfectiousness" meta="角色特质" text="本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 Lycanthropy。
持续与移除：成功传播后冷却 60 回合；普通感染者变回人形后移除。" />。`,acquisition:`<CrossReference name="Mastery of Curseweaving" href="#entry-character-2932765110-t-masterycurseweaving" meta="角色特质" text="以 Soulstone 中的灵魂施展家族诅咒与灵魂编织。加入 Magic Plague、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 Soulstone 与 1 Arcane Knowledge。" /> 至少 2 级，持有装有 <CrossReference name="Werewolf" href="?page=non-player-units#entry-npc-werewolf-hermit" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态驱逐荒野闯入者；黑暗形态袭击荒野及周边的非玩家人物，面对强敌时可先潜行跟踪。" /> 灵魂的 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" />，完成 Curseweaving: Curse of <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色特质" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。
持续与移除：感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。" />。`},{id:`character-2968835416-t-prophet`,source:`2968835416`,sourceName:`Community Library`,name:`Prophet`,category:`mobile`,eligible:`被指定为教团 Prophet 的人物`,text:`显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。`,acquisition:`成为一个或多个教团的 Prophet。`,duration:`教团消失或 Prophet 身份转移后移除该归属；全部失去后移除特质。`},{id:`character-2988960487-t-cursepotofgreed`,source:`2988960487`,sourceName:`KeeperItemMod`,name:`Pot of Greed Curse`,category:`common`,eligible:`受 <CrossReference name="Pot of Greed" href="?page=base-items#entry-mod-2988960487-patch-i-bagofpoverty" meta="物品" text="交给英雄或统治者后，触发家族范围的 Pot of Greed Curse，并消耗物品。当前持有者对 Gold 的偏好提高两档，受诅咒家族成员每回合损失 2 Gold。" /> 家族诅咒影响的人物`,text:`每回合 Gold −2，最低 0。`,acquisition:`<CrossReference name="Pot of Greed" href="?page=base-items#entry-mod-2988960487-patch-i-bagofpoverty" meta="物品" text="交给英雄或统治者后，触发家族范围的 Pot of Greed Curse，并消耗物品。当前持有者对 Gold 的偏好提高两档，受诅咒家族成员每回合损失 2 Gold。" /> 产生的家族诅咒。`},{id:`character-2988960487-t-statboostpoteffect`,source:`2988960487`,sourceName:`KeeperItemMod`,name:`Potion Stat Boost`,category:`mobile`,eligible:`饮用属性药剂的人物`,text:`Might、Lore、Intrigue 或 Command 中与药剂对应的一项 +2。`,acquisition:`饮用相应 Stat Boost Potion。`,duration:`20 回合。`},{id:`character-3003549759-mt-dockyardbrawler`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Dockyard Brawler`,category:`minion`,eligible:`<CrossReference name="Orc Corsair" href="?page=minions#entry-orc-corsair" meta="随从" text="在海岸或海洋地点 Attack +2，达到 6；在海洋地点另有 Defence +2，达到 4。" />`,text:`每 5 回合若位于有人类聚居地且有 <CrossReference name="Docks" href="?page=points-of-interest#entry-location-sub-docks" meta="兴趣点" text="增加 0.2 Prosperity 影响值，并提供 Malign Catch、Plague Ships 与渗透。

出现方式
沿海 City 创建时固定配置。

可出现地点
City。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" /> 的地点，随机打断一名正在执行任务的敌对人物 1 回合；Lay Low、野外 Lay Low、<CrossReference name="Flee Beneath" href="?page=points-of-interest#entry-place-task-base-ch-fleebeneaththewaves" meta="挑战" text="进入隐藏状态；不移动或开始其他行动时，英雄无法攻击，每回合降低 1 Menace 与 Profile。" /> the Waves 不会被选中。成功后主人 Menace +5，不提高最低 Menace。`,acquisition:`<CrossReference name="Orc Corsair" href="?page=minions#entry-orc-corsair" meta="随从" text="在海岸或海洋地点 Attack +2，达到 6；在海洋地点另有 Defence +2，达到 4。" /> 自带。`},{id:`character-3003549759-t-bloodfeud`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Blood Feud`,category:`mobile`,eligible:`杀死 <CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" /> 或招致该氏族仇恨的人物`,text:`对应 Orc 氏族的军队和 Upstart 永远视其为敌人；开放 End Blood Feud 仪式。`,acquisition:`杀死 <CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" />；Orc 氏族变更等特定行动。`,duration:`通过 End Blood Feud 处理，或持有者死亡。`},{id:`character-3003549759-t-brokenspirit`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Broken Spirit`,category:`common`,eligible:`受家族诅咒的英雄与统治者`,text:`统治者使领地 Security +1。任务或行动每具有一个 Ambition、Combat、Danger 正面标签，执行意愿 −20；Fund Army、Muster、<CrossReference name="Raise Army" href="?page=locations#entry-place-ruler-base-act-raisearmy" meta="统治者行动" text="创建一支 Human Army，成为当地驻军。" /> 不受这项行动意愿惩罚。`,acquisition:`Broken Spirit 家族诅咒。`},{id:`character-3003549759-t-grott`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Orc Grott`,category:`mobile`,eligible:`饮用 Grott 的 Agent、英雄与教士`,text:`Might +1，Command +1。非 Orc 饮用通常还受到 2 HP 伤害；自动续饮也可能因此死亡。`,acquisition:`在 <CrossReference name="Seat of the Elders" href="?page=points-of-interest#entry-location-sub-orcculturecapital" meta="兴趣点" text="Orc 文化中心，提供 Grott 饮用、Drinking Horn 补充、三槽商品市场和 Reprimand Orc Upstart。使用 Ophanim 对应 Perfection 教义时，额外加入 Festival of Perfection。

出现方式
Orcs Plus 为部落文化选择首都，或部落分裂后重建文化中心时加入。

可出现地点
Orc Camp。
改建或覆灭后是否保留，还受对应流程限制。" />、Great Hall 饮用，或使用装满的 <CrossReference name="Drinking Horn" href="?page=base-items#entry-mod-3003549759-i-drinkinghorn" meta="物品" text="装满后可执行 Drink Orc Grott：40 回合内 Might +1、Command +1，重复饮用刷新持续时间。非兽人还会受到 2 HP 伤害，可能因此死亡。
饮用后变为空角杯，可在已渗透的兽人营地通过 Refill Drinking Horns 再次装满；在兽人饮酒挑战中也可装满。" />。`,duration:`40 回合；持有满 <CrossReference name="Drinking Horn" href="?page=base-items#entry-mod-3003549759-i-drinkinghorn" meta="物品" text="装满后可执行 Drink Orc Grott：40 回合内 Might +1、Command +1，重复饮用刷新持续时间。非兽人还会受到 2 HP 伤害，可能因此死亡。
饮用后变为空角杯，可在已渗透的兽人营地通过 Refill Drinking Horns 再次装满；在兽人饮酒挑战中也可装满。" /> 时可在结束后续饮。自主单位药效结束后会解散超出 Command 容量的随从。`},{id:`character-3003549759-t-reveredelder`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Revered Elder`,category:`npc`,eligible:`<CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" />`,text:`杀死该人物会引发其氏族的 <CrossReference name="Blood Feud" href="#entry-character-3003549759-t-bloodfeud" meta="角色特质" text="对应 Orc 氏族的军队和 Upstart 永远视其为敌人；开放 End Blood Feud 仪式。
持续与移除：通过 End Blood Feud 处理，或持有者死亡。" />。没有 <CrossReference name="Orc Champion" href="?page=minions#entry-orc-champion" meta="随从" text="无特殊能力。" /> 时进行补充倒计时；计时器归零并且 Command 上限至少 3 时补充一名 Champion，必要时解散其他随从。Champion 为 5 HP、6 Attack、5 Defence，占 3 Command。`,acquisition:`<CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" /> 自带。`,duration:`补充计时器初始 10；仅在缺少 Champion 时递减，归零后的下一次结算补充并重置。`},{id:`character-3261852980-event-ascended-lore`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Ascended Lore`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The temptation" href="?page=events#entry-event-3261852980-maeredux-midch-arcane-temptation" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The temptation · 进度」剧情记录 + 50）；或者 「The temptation · 进度」剧情记录 = 0）
并且 「已接受 Arcane Temptation」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 （当前人物 Lore 大于 5；或者 Geomancy Mastery 等级 大于 1；或者 Blood Mastery 等级 大于 1；或者 Death Mastery 等级 大于 1）
并且 不满足（当前神祇是 The Broken Maker）
并且 不满足（当前神祇是 Death's Games）。

抽选权重：0.1。" /> · Ascended into might：Lore +2（999 回合）。`,acquisition:`通过 <CrossReference name="The temptation" href="?page=events#entry-event-3261852980-maeredux-midch-arcane-temptation" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The temptation · 进度」剧情记录 + 50）；或者 「The temptation · 进度」剧情记录 = 0）
并且 「已接受 Arcane Temptation」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 （当前人物 Lore 大于 5；或者 Geomancy Mastery 等级 大于 1；或者 Blood Mastery 等级 大于 1；或者 Death Mastery 等级 大于 1）
并且 不满足（当前神祇是 The Broken Maker）
并且 不满足（当前神祇是 Death's Games）。

抽选权重：0.1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-ascended-might`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Ascended Might`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The temptation" href="?page=events#entry-event-3261852980-maeredux-midch-arcane-temptation" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The temptation · 进度」剧情记录 + 50）；或者 「The temptation · 进度」剧情记录 = 0）
并且 「已接受 Arcane Temptation」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 （当前人物 Lore 大于 5；或者 Geomancy Mastery 等级 大于 1；或者 Blood Mastery 等级 大于 1；或者 Death Mastery 等级 大于 1）
并且 不满足（当前神祇是 The Broken Maker）
并且 不满足（当前神祇是 Death's Games）。

抽选权重：0.1。" /> · Ascended into might：Might +1（999 回合）。`,acquisition:`通过 <CrossReference name="The temptation" href="?page=events#entry-event-3261852980-maeredux-midch-arcane-temptation" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The temptation · 进度」剧情记录 + 50）；或者 「The temptation · 进度」剧情记录 = 0）
并且 「已接受 Arcane Temptation」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 （当前人物 Lore 大于 5；或者 Geomancy Mastery 等级 大于 1；或者 Blood Mastery 等级 大于 1；或者 Death Mastery 等级 大于 1）
并且 不满足（当前神祇是 The Broken Maker）
并且 不满足（当前神祇是 Death's Games）。

抽选权重：0.1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-attempted-blackmail-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Attempted Blackmail · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Attempted Blackmail" href="?page=events#entry-event-3261852980-maeredux-midch-attemptedblackmailt1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Intrigue 属性任务
并且 （回合 大于 （「Attempted Blackmail · 进度」剧情记录 + 55）；或者 「Attempted Blackmail · 进度」剧情记录 = 0）
并且 当地是人类聚居地
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）。

抽选权重：1。" /> · Generosity：Intrigue +1（15 回合）。`,acquisition:`通过 <CrossReference name="Attempted Blackmail" href="?page=events#entry-event-3261852980-maeredux-midch-attemptedblackmailt1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Intrigue 属性任务
并且 （回合 大于 （「Attempted Blackmail · 进度」剧情记录 + 55）；或者 「Attempted Blackmail · 进度」剧情记录 = 0）
并且 当地是人类聚居地
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-empowered-by-the-box`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Empowered by the Box`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Box Of Mezathoth" href="?page=events#entry-event-3261852980-maeredux-midch-boxofmezathotht2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Box Of Mezathoth · 进度」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 回合 大于 150
并且 神力 ≠ 神力上限。

抽选权重：0.2。" /> · You need no power：Lore +1（999 回合）。`,acquisition:`通过 <CrossReference name="Box Of Mezathoth" href="?page=events#entry-event-3261852980-maeredux-midch-boxofmezathotht2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Box Of Mezathoth · 进度」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 回合 大于 150
并且 神力 ≠ 神力上限。

抽选权重：0.2。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-peacelily-brain`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Peacelily Brain`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Bored buccaneer" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-peacelilies" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Bored buccaneer · 进度」剧情记录 + 45）；或者 「Bored buccaneer · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer。

抽选权重：0.5。" /> · Partake（66.67%）：Intrigue −1（50 回合）。
<CrossReference name="Bored buccaneer" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-peacelilies" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Bored buccaneer · 进度」剧情记录 + 45）；或者 「Bored buccaneer · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer。

抽选权重：0.5。" /> · Partake（33.33%）：Intrigue −1（50 回合）。`,acquisition:`通过 <CrossReference name="Bored buccaneer" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-peacelilies" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Bored buccaneer · 进度」剧情记录 + 45）；或者 「Bored buccaneer · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer。

抽选权重：0.5。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-peacelily-twitches`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Peacelily Twitches`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Bored buccaneer" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-peacelilies" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Bored buccaneer · 进度」剧情记录 + 45）；或者 「Bored buccaneer · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer。

抽选权重：0.5。" /> · Partake（33.33%）：Might −1（50 回合）。`,acquisition:`通过 <CrossReference name="Bored buccaneer" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-peacelilies" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Bored buccaneer · 进度」剧情记录 + 45）；或者 「Bored buccaneer · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer。

抽选权重：0.5。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-loyal-crew`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Loyal Crew`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Coastal raid" href="?page=events#entry-event-3261852980-maeredux-midchp2p-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 50）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 当地是海洋。

抽选权重：3。" /> · Give them a reward：Might +1（20 回合）。
<CrossReference name="Coastal raid" href="?page=events#entry-event-3261852980-maeredux-midchp2p-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 50）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 当地是海洋。

抽选权重：3。" /> · Give a rousing speech：Might +1（15 回合）。
<CrossReference name="Discontent raid" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 40）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 （当地是海洋；或者 当地有 Docks）。

抽选权重：2。" /> · Give them a reward：Might +1（20 回合）。`,acquisition:`通过 <CrossReference name="Coastal raid" href="?page=events#entry-event-3261852980-maeredux-midchp2p-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 50）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 当地是海洋。

抽选权重：3。" />、<CrossReference name="Discontent raid" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 40）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 （当地是海洋；或者 当地有 Docks）。

抽选权重：2。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-disgruntled-crew`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Disgruntled Crew`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Discontent raid" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 40）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 （当地是海洋；或者 当地有 Docks）。

抽选权重：2。" /> · What they have is what's enough：Might −1（20 回合）。
<CrossReference name="Upstart crewmember" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-upstart" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
任务事件计时 = 任务事件计时阈值
并且 （回合 大于 （「上次船员挑战回合」剧情记录 + 75）；或者 「上次船员挑战回合」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer。

单次候选检查概率：100%。" /> · Order his execution. For mutiny.：Might +1（20 回合）。`,acquisition:`通过 <CrossReference name="Discontent raid" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-raider" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Coastal raid · 进度」剧情记录 + 40）；或者 「Coastal raid · 进度」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer
并且 （正在执行 Raid Port；或者 正在执行 Raid Shipping；或者 正在执行 Might 属性任务）
并且 （当地是海洋；或者 当地有 Docks）。

抽选权重：2。" />、<CrossReference name="Upstart crewmember" href="?page=events#entry-event-3261852980-maeredux-midch-buccaneer-upstart" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
任务事件计时 = 任务事件计时阈值
并且 （回合 大于 （「上次船员挑战回合」剧情记录 + 75）；或者 「上次船员挑战回合」剧情记录 = 0）
并且 「船员不满」剧情记录 大于 0
并且 当前单位是 The Buccaneer。

单次候选检查概率：100%。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-a-burning-tavern-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`A Burning Tavern · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="A Burning Tavern" href="?page=events#entry-event-3261852980-maeredux-midch-burning-tavern" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「A Burning Tavern · 进度」剧情记录 + 50）；或者 「A Burning Tavern · 进度」剧情记录 = 0）
并且 回合 大于 100
并且 人物 Menace 大于 15
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human；或者 当前单位是 The Cursed）。

抽选权重：1。" /> · Save the research material!：Lore +1（20 回合）。`,acquisition:`通过 <CrossReference name="A Burning Tavern" href="?page=events#entry-event-3261852980-maeredux-midch-burning-tavern" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「A Burning Tavern · 进度」剧情记录 + 50）；或者 「A Burning Tavern · 进度」剧情记录 = 0）
并且 回合 大于 100
并且 人物 Menace 大于 15
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human；或者 当前单位是 The Cursed）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-sweet-bribe-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Sweet bribe · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Sweet bribe" href="?page=events#entry-event-3261852980-maeredux-mid-candyman" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物的种族是 Orc；或者 当前人物的种族是 Elf；或者 当前单位是 Human；或者 当前单位是 The Rat King）
并且 （回合 大于 （「Sweet bribe · 进度」剧情记录 + 80）；或者 「Sweet bribe · 进度」剧情记录 = 0）
并且 当地 Plague 强度 小于 50
并且 当地 Devastation 强度 小于 50
并且 当地 Hunger 强度 小于 50。

抽选权重：0.8。" /> · Bribe them with sweets（10%）：Intrigue +1（40 回合）。
<CrossReference name="Sweet bribe" href="?page=events#entry-event-3261852980-maeredux-mid-candyman" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物的种族是 Orc；或者 当前人物的种族是 Elf；或者 当前单位是 Human；或者 当前单位是 The Rat King）
并且 （回合 大于 （「Sweet bribe · 进度」剧情记录 + 80）；或者 「Sweet bribe · 进度」剧情记录 = 0）
并且 当地 Plague 强度 小于 50
并且 当地 Devastation 强度 小于 50
并且 当地 Hunger 强度 小于 50。

抽选权重：0.8。" /> · The children's favourite：Intrigue +1（25 回合）。`,acquisition:`通过 <CrossReference name="Sweet bribe" href="?page=events#entry-event-3261852980-maeredux-mid-candyman" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（当前人物的种族是 Orc；或者 当前人物的种族是 Elf；或者 当前单位是 Human；或者 当前单位是 The Rat King）
并且 （回合 大于 （「Sweet bribe · 进度」剧情记录 + 80）；或者 「Sweet bribe · 进度」剧情记录 = 0）
并且 当地 Plague 强度 小于 50
并且 当地 Devastation 强度 小于 50
并且 当地 Hunger 强度 小于 50。

抽选权重：0.8。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-stolen-intrigue-scroll`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Stolen Intrigue Scroll`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> · Take a gander at it（20%）：Intrigue +3（10 回合）。`,acquisition:`通过 <CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-stolen-lore-scroll`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Stolen Lore Scroll`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> · Take a gander at it（20%）：Lore +3（10 回合）。`,acquisition:`通过 <CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-stolen-scroll`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Stolen Scroll`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> · Take a gander at it（10%）：Intrigue +1（25 回合）；Lore +1（25 回合）。`,acquisition:`通过 <CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-delivered-scroll`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Delivered Scroll`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> · Show diligence：Command +1（20 回合）。`,acquisition:`通过 <CrossReference name="The scroll" href="?page=events#entry-event-3261852980-maeredux-midch-command-scroll" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「The scroll · 进度」剧情记录 + 55）
并且 正在执行 Command 属性任务
并且 当前人物是玩家控制的 Agent
并且 （当前人物的种族是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.6。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-rushed-learning`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Rushed Learning`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Contradictory Texts" href="?page=events#entry-event-3261852980-maeredux-mid-contradictorytexts" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 （回合 大于 （「Contradictory Texts · 进度」剧情记录 + 75）；或者 「Contradictory Texts · 进度」剧情记录 = 0）。

抽选权重：1。" /> · Build further on a false understanding：Lore +2（20 回合）。`,acquisition:`通过 <CrossReference name="Contradictory Texts" href="?page=events#entry-event-3261852980-maeredux-mid-contradictorytexts" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 （回合 大于 （「Contradictory Texts · 进度」剧情记录 + 75）；或者 「Contradictory Texts · 进度」剧情记录 = 0）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-misunderstood-lore`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Misunderstood Lore`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Contradictory Texts" href="?page=events#entry-event-3261852980-maeredux-mid-contradictorytexts" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 （回合 大于 （「Contradictory Texts · 进度」剧情记录 + 75）；或者 「Contradictory Texts · 进度」剧情记录 = 0）。

抽选权重：1。" /> · Build further on a false understanding：Lore −1（45 回合）。`,acquisition:`通过 <CrossReference name="Contradictory Texts" href="?page=events#entry-event-3261852980-maeredux-mid-contradictorytexts" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 （回合 大于 （「Contradictory Texts · 进度」剧情记录 + 75）；或者 「Contradictory Texts · 进度」剧情记录 = 0）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-cube-of-ozathath-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Cube Of Ozathath · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Cube Of Ozathath" href="?page=events#entry-event-3261852980-maeredux-midch-cubeofozathatht1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Cube Of Ozathath · 进度」剧情记录 + 70）；或者 「Cube Of Ozathath · 进度」剧情记录 = 0）
并且 （正在执行 Lore 属性任务；或者 正在执行 Command 属性任务）。

抽选权重：1。" /> · You've no need for this power：Lore +1（25 回合）。`,acquisition:`通过 <CrossReference name="Cube Of Ozathath" href="?page=events#entry-event-3261852980-maeredux-midch-cubeofozathatht1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Cube Of Ozathath · 进度」剧情记录 + 70）；或者 「Cube Of Ozathath · 进度」剧情记录 = 0）
并且 （正在执行 Lore 属性任务；或者 正在执行 Command 属性任务）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-curious-foliage-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Curious Foliage · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Curious Foliage" href="?page=events#entry-event-3261852980-maeredux-midch-curiousfoliaget1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
不满足（当地是人类聚居地）
并且 （回合 大于 （「Curious Foliage · 进度」剧情记录 + 55）；或者 「Curious Foliage · 进度」剧情记录 = 0）
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）。

抽选权重：1。" /> · It's a trap：Might −1（30 回合）。`,acquisition:`通过 <CrossReference name="Curious Foliage" href="?page=events#entry-event-3261852980-maeredux-midch-curiousfoliaget1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
不满足（当地是人类聚居地）
并且 （回合 大于 （「Curious Foliage · 进度」剧情记录 + 55）；或者 「Curious Foliage · 进度」剧情记录 = 0）
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-don-t-you-know-who-i-am-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Don't You Know Who I Am? · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Don't You Know Who I Am?" href="?page=events#entry-event-3261852980-maeredux-mid-dontyouknowwhoiam" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Don't You Know Who I Am? · 进度」剧情记录 + 40）；或者 「Don't You Know Who I Am? · 进度」剧情记录 = 0）
并且 （正在执行 Intrigue 属性任务；或者 正在执行 Lore 属性任务）
并且 当地是人类聚居地
并且 不满足（当前人物的种族是 Orc）。

抽选权重：1。" /> · ''Don't You Know Who I Am?''：Intrigue +1（50 回合）。`,acquisition:`通过 <CrossReference name="Don't You Know Who I Am?" href="?page=events#entry-event-3261852980-maeredux-mid-dontyouknowwhoiam" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Don't You Know Who I Am? · 进度」剧情记录 + 40）；或者 「Don't You Know Who I Am? · 进度」剧情记录 = 0）
并且 （正在执行 Intrigue 属性任务；或者 正在执行 Lore 属性任务）
并且 当地是人类聚居地
并且 不满足（当前人物的种族是 Orc）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-eccentric-old-commander-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Eccentric Old Commander · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Eccentric Old Commander" href="?page=events#entry-event-3261852980-maeredux-mid-eccentric-command" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Commander · 进度」剧情记录 + 45）；或者 「Eccentric Old Commander · 进度」剧情记录 = 0）
并且 正在执行 Command 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> · The noble is skilled...：Might −1（40 回合）。`,acquisition:`通过 <CrossReference name="Eccentric Old Commander" href="?page=events#entry-event-3261852980-maeredux-mid-eccentric-command" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Commander · 进度」剧情记录 + 45）；或者 「Eccentric Old Commander · 进度」剧情记录 = 0）
并且 正在执行 Command 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-eccentric-old-socialite-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Eccentric Old Socialite · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Eccentric Old Socialite" href="?page=events#entry-event-3261852980-maeredux-mid-eccentric-intrigue" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Socialite · 进度」剧情记录 + 55）；或者 「Eccentric Old Socialite · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> · The noble is skilled...：Might −1（40 回合）。`,acquisition:`通过 <CrossReference name="Eccentric Old Socialite" href="?page=events#entry-event-3261852980-maeredux-mid-eccentric-intrigue" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Socialite · 进度」剧情记录 + 55）；或者 「Eccentric Old Socialite · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-eccentric-old-noble-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Eccentric Old Noble · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Eccentric Old Noble" href="?page=events#entry-event-3261852980-aeredux-mid-eccentric-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Noble · 进度」剧情记录 + 55）；或者 「Eccentric Old Noble · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> · The monk is skilled...：Might −1（40 回合）。`,acquisition:`通过 <CrossReference name="Eccentric Old Noble" href="?page=events#entry-event-3261852980-aeredux-mid-eccentric-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Eccentric Old Noble · 进度」剧情记录 + 55）；或者 「Eccentric Old Noble · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 当地是 Metropole
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Duelist）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-interrogation-with-a-vampire-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Interrogation with a vampire · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Interrogation with a vampire" href="?page=events#entry-event-3261852980-maeredux-mid-hypnoticgaze" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「Interrogation with a vampire · 进度」剧情记录 + 90）
并且 （正在执行 Intrigue 属性任务；或者 正在执行 Lore 属性任务）
并且 当地 Shadow（%） 大于 30
并且 当地有 Library
并且 （当前人物的种族是 Orc；或者 当前人物的种族是 Elf；或者 当前单位是 Human）
并且 不满足（当前单位是 The Baroness）
并且 不满足（当前单位是 The Whisperer）。

抽选权重：1。" /> · Your servant is too weak：Intrigue −1（15 回合）。`,acquisition:`通过 <CrossReference name="Interrogation with a vampire" href="?page=events#entry-event-3261852980-maeredux-mid-hypnoticgaze" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「Interrogation with a vampire · 进度」剧情记录 + 90）
并且 （正在执行 Intrigue 属性任务；或者 正在执行 Lore 属性任务）
并且 当地 Shadow（%） 大于 30
并且 当地有 Library
并且 （当前人物的种族是 Orc；或者 当前人物的种族是 Elf；或者 当前单位是 Human）
并且 不满足（当前单位是 The Baroness）
并且 不满足（当前单位是 The Whisperer）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-let-us-in-let-us-in-let-us-in-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`LET US IN LET US IN LET US IN · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="LET US IN LET US IN LET US IN" href="?page=events#entry-event-3261852980-maeredux-mid-pleaseletusin" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「LET US IN LET US IN LET US IN · 进度」剧情记录 + 66）；或者 「LET US IN LET US IN LET US IN · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 不满足（当地是 Elven Settlement）
并且 人物 Shadow（%） 大于 25
并且 人物 Shadow（%） 小于 75
并且 （当前单位是 Human；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Elf）
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> · Let them in（30%）：Lore −2（15 回合）。`,acquisition:`通过 <CrossReference name="LET US IN LET US IN LET US IN" href="?page=events#entry-event-3261852980-maeredux-mid-pleaseletusin" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「LET US IN LET US IN LET US IN · 进度」剧情记录 + 66）；或者 「LET US IN LET US IN LET US IN · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 不满足（当地是 Elven Settlement）
并且 人物 Shadow（%） 大于 25
并且 人物 Shadow（%） 小于 75
并且 （当前单位是 Human；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Elf）
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-old-folk-s-rambles-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Old Folk's Rambles · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Old Folk's Rambles" href="?page=events#entry-event-3261852980-maeredux-mid-oldramblers" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Old Folk's Rambles · 进度」剧情记录 + 50）；或者 「Old Folk's Rambles · 进度」剧情记录 = 0）
并且 不满足（正在执行 Might 属性任务）
并且 不满足（当前单位是 The Harvester）。

抽选权重：1。" /> · Let them ramble（20%）：Intrigue +2（13 回合）。
<CrossReference name="Old Folk's Rambles" href="?page=events#entry-event-3261852980-maeredux-mid-oldramblers" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Old Folk's Rambles · 进度」剧情记录 + 50）；或者 「Old Folk's Rambles · 进度」剧情记录 = 0）
并且 不满足（正在执行 Might 属性任务）
并且 不满足（当前单位是 The Harvester）。

抽选权重：1。" /> · Let them ramble（18%）：Command +1（30 回合）。
<CrossReference name="Old Folk's Rambles" href="?page=events#entry-event-3261852980-maeredux-mid-oldramblers" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Old Folk's Rambles · 进度」剧情记录 + 50）；或者 「Old Folk's Rambles · 进度」剧情记录 = 0）
并且 不满足（正在执行 Might 属性任务）
并且 不满足（当前单位是 The Harvester）。

抽选权重：1。" /> · Let them ramble（2%）：Intrigue −1（30 回合）。`,acquisition:`通过 <CrossReference name="Old Folk's Rambles" href="?page=events#entry-event-3261852980-maeredux-mid-oldramblers" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Old Folk's Rambles · 进度」剧情记录 + 50）；或者 「Old Folk's Rambles · 进度」剧情记录 = 0）
并且 不满足（正在执行 Might 属性任务）
并且 不满足（当前单位是 The Harvester）。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-opportunity-cost`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Opportunity Cost`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-command" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度」剧情记录 = 0
并且 正在执行 Command 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" /> · Quick benefit for the cause：Command −1（80 回合）。
<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-intrigue" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 2」剧情记录 = 0
并且 正在执行 Intrigue 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" /> · Quick benefit for the cause：Intrigue −1（80 回合）。
<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 3」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.001。" /> · Quick benefit for the cause：Lore −1（80 回合）。
<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-might" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 4」剧情记录 = 0
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" /> · Quick benefit for the cause：Might −1（80 回合）。`,acquisition:`通过 <CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-command" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度」剧情记录 = 0
并且 正在执行 Command 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" />、<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-intrigue" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 2」剧情记录 = 0
并且 正在执行 Intrigue 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" />、<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 3」剧情记录 = 0
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.001。" />、<CrossReference name="Opportunity cost" href="?page=events#entry-event-3261852980-maeredux-midch-opportunity-might" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「Opportunity cost · 进度 4」剧情记录 = 0
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 （当前单位是 Human；或者 当前人物的种族是 Elf；或者 当前人物的种族是 Orc）。

抽选权重：0.25。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-arm-wrestler`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Arm Wrestler`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="A Rowdy Tavern" href="?page=events#entry-event-3261852980-maeredux-midch-rowdytavern" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「A Rowdy Tavern · 进度」剧情记录 + 30）；或者 「A Rowdy Tavern · 进度」剧情记录 = 0）
并且 当地是人类聚居地
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）
并且 当地 Shadow（%） 小于 50
并且 当地 Unrest 强度 小于 150
并且 当地 Plague 强度 小于 150
并且 当地 Hunger 强度 小于 150。

抽选权重：1。" /> · 'Arm wrestling sounds fun!'：Might +1（20 回合）。`,acquisition:`通过 <CrossReference name="A Rowdy Tavern" href="?page=events#entry-event-3261852980-maeredux-midch-rowdytavern" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「A Rowdy Tavern · 进度」剧情记录 + 30）；或者 「A Rowdy Tavern · 进度」剧情记录 = 0）
并且 当地是人类聚居地
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）
并且 当地 Shadow（%） 小于 50
并且 当地 Unrest 强度 小于 150
并且 当地 Plague 强度 小于 150
并且 当地 Hunger 强度 小于 150。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-shadow-stalker-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Shadow Stalker · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Shadow Stalker" href="?page=events#entry-event-3261852980-maeredux-midch-shadowstalkt3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「Shadow Stalker · 进度」剧情记录 + 75）
并且 回合 大于 265
并且 当地 Shadow（%） 大于 49
并且 正在执行 Lore 属性任务
并且 当前单位 HP 大于 3
并且 （Death Mastery 等级 ≠ 0；或者 Blood Mastery 等级 ≠ 0；或者 Geomancy Mastery 等级 ≠ 0）
并且 神力 大于 0。

抽选权重：1。" /> · End them：Intrigue +1（50 回合）。`,acquisition:`通过 <CrossReference name="Shadow Stalker" href="?page=events#entry-event-3261852980-maeredux-midch-shadowstalkt3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
回合 大于 （「Shadow Stalker · 进度」剧情记录 + 75）
并且 回合 大于 265
并且 当地 Shadow（%） 大于 49
并且 正在执行 Lore 属性任务
并且 当前单位 HP 大于 3
并且 （Death Mastery 等级 ≠ 0；或者 Blood Mastery 等级 ≠ 0；或者 Geomancy Mastery 等级 ≠ 0）
并且 神力 大于 0。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-the-sting-set-up-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`The Sting: Set up · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The Sting: Set up" href="?page=events#entry-event-3261852980-maeredux-midch-sting-t3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The Sting: Unlucky · 进度」剧情记录 + 35）；或者 「The Sting: Unlucky · 进度」剧情记录 = 0）
并且 回合 大于 375
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）
并且 当地是人类聚居地。

抽选权重：1。" /> · ...unless %he's found badly injured：Might −1（30 回合）。`,acquisition:`通过 <CrossReference name="The Sting: Set up" href="?page=events#entry-event-3261852980-maeredux-midch-sting-t3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The Sting: Unlucky · 进度」剧情记录 + 35）；或者 「The Sting: Unlucky · 进度」剧情记录 = 0）
并且 回合 大于 375
并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human）
并且 当地是人类聚居地。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-sharpened-knives`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Sharpened Knives`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Sharpening knives" href="?page=events#entry-event-3261852980-maeredux-midch-strength-maintenance" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Sharpening Knives 记录」剧情记录 + 75）；或者 「Sharpening Knives 记录」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> · Preparation for later：Might +1（12 回合）。`,acquisition:`通过 <CrossReference name="Sharpening knives" href="?page=events#entry-event-3261852980-maeredux-midch-strength-maintenance" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Sharpening Knives 记录」剧情记录 + 75）；或者 「Sharpening Knives 记录」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-sharpened-weapons`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Sharpened Weapons`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Sharpening knives" href="?page=events#entry-event-3261852980-maeredux-midch-strength-maintenance" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Sharpening Knives 记录」剧情记录 + 75）；或者 「Sharpening Knives 记录」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> · Might as well sharpen all the weapons：Might +2（12 回合）。`,acquisition:`通过 <CrossReference name="Sharpening knives" href="?page=events#entry-event-3261852980-maeredux-midch-strength-maintenance" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Sharpening Knives 记录」剧情记录 + 75）；或者 「Sharpening Knives 记录」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.5。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-strong-stomach-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Strong stomach · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Strong stomach" href="?page=events#entry-event-3261852980-maeredux-midch-strong-stomach" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Strong stomach · 进度」剧情记录 + 155）；或者 「Strong stomach · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 当前单位 HP 大于 3。

抽选权重：0.8。" /> · %He has a strong stomach for this unpleasantry：Lore +1（40 回合）。`,acquisition:`通过 <CrossReference name="Strong stomach" href="?page=events#entry-event-3261852980-maeredux-midch-strong-stomach" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Strong stomach · 进度」剧情记录 + 155）；或者 「Strong stomach · 进度」剧情记录 = 0）
并且 正在执行 Lore 属性任务
并且 当地是人类聚居地
并且 不满足（当前单位是 The Harvester）
并且 不满足（当前单位是 The Cursed）
并且 当前单位 HP 大于 3。

抽选权重：0.8。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-stumbling-into-lore-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Stumbling into lore · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Stumbling into lore" href="?page=events#entry-event-3261852980-maeredux-midch-stumbling-into-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Stumbling into lore · 进度」剧情记录 + 75）；或者 「Stumbling into lore · 进度」剧情记录 = 0）
并且 正在执行 Lay Low
并且 （Geomancy Mastery 等级 大于 0；或者 Blood Mastery 等级 大于 0；或者 Death Mastery 等级 大于 0）。

抽选权重：0.1。" /> · Far too curious（10%）：Lore +1（25 回合）。`,acquisition:`通过 <CrossReference name="Stumbling into lore" href="?page=events#entry-event-3261852980-maeredux-midch-stumbling-into-lore" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Stumbling into lore · 进度」剧情记录 + 75）；或者 「Stumbling into lore · 进度」剧情记录 = 0）
并且 正在执行 Lay Low
并且 （Geomancy Mastery 等级 大于 0；或者 Blood Mastery 等级 大于 0；或者 Death Mastery 等级 大于 0）。

抽选权重：0.1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-the-turncoat-and-the-hidden-path-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`The turncoat and the hidden path · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 小于 200
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" /> · Pay him. Again.：Intrigue +1（25 回合）。
<CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 大于 150
并且 回合 小于 400
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" /> · Pay him. Again.：Intrigue +1（35 回合）。
<CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 大于 375
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" /> · Pay him. Again.：Intrigue +1（50 回合）。`,acquisition:`通过 <CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 小于 200
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" />、<CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 大于 150
并且 回合 小于 400
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" />、<CrossReference name="The turncoat and the hidden path" href="?page=events#entry-event-3261852980-maeredux-mid-turncoatnoble-t3" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「The turncoat and the hidden path · 进度」剧情记录 + 50）；或者 「The turncoat and the hidden path · 进度」剧情记录 = 0）
并且 正在执行 Intrigue 属性任务
并且 回合 大于 375
并且 人物金币 大于 24
并且 当地是人类聚居地。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-uncomplicated-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Uncomplicated · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Uncomplicated" href="?page=events#entry-event-3261852980-maeredux-midch-uncomplicated" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Uncomplicated · 进度」剧情记录 + 65）；或者 「Uncomplicated · 进度」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 当前人物的种族是 Orc。

抽选权重：1。" /> · Uncomplicate %his spine：Might +1（20 回合）。`,acquisition:`通过 <CrossReference name="Uncomplicated" href="?page=events#entry-event-3261852980-maeredux-midch-uncomplicated" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
（回合 大于 （「Uncomplicated · 进度」剧情记录 + 65）；或者 「Uncomplicated · 进度」剧情记录 = 0）
并且 正在执行 Might 属性任务
并且 当地是人类聚居地
并且 当前人物的种族是 Orc。

抽选权重：1。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-weird-dreams-i-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Weird Dreams I · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Weird Dreams I" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 「Weird Dreams I · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.02。" /> · Jump after it：Lore +1（25 回合）。
<CrossReference name="Weird Dreams I" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 「Weird Dreams I · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.02。" /> · Forget about it：Lore −1（10 回合）。`,acquisition:`通过 <CrossReference name="Weird Dreams I" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-1" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 「Weird Dreams I · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.02。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-weird-dreams-ii-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Weird Dreams II · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Weird Dreams II" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 人物 Menace 大于 13
并且 「Weird Dreams II · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.01。" /> · %He must answer（45%）：Might +2（25 回合）。`,acquisition:`通过 <CrossReference name="Weird Dreams II" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-2" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 人物 Menace 大于 13
并且 「Weird Dreams II · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.01。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-weird-dreams-v-`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Weird Dreams V · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Weird Dreams V" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-5" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 「Weird Dreams V · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.001。" /> · %He remembers the fear：Might −1（55 回合）。`,acquisition:`通过 <CrossReference name="Weird Dreams V" href="?page=events#entry-event-3261852980-maeredux-mid-weirddreams-5" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
正在执行 Lore 属性任务
并且 「Weird Dreams V · 进度」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）。

抽选权重：0.001。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-wisdom-of-the-pool`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Wisdom of the pool`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The Alpine witch" href="?page=events#entry-event-3261852980-maeredux-move-alpine-witch" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
「The Alpine witch · 进度」剧情记录 = 0
并且 当前单位是 Corrupted Hero
并且 当地没有聚居地
并且 （地形为 Highland；或者 地形为 Plains；或者 地形为 Arid；或者 地形为 Drycold；或者 地形为 Grass；或者 地形为 Grass）。

单次候选检查概率：30%。" /> · Gaze into the whirlpool of ages：Intrigue +1（100 回合）；Lore +1（100 回合）。`,acquisition:`通过 <CrossReference name="The Alpine witch" href="?page=events#entry-event-3261852980-maeredux-move-alpine-witch" meta="事件" text="玩家 Agent 移动进入地点时触发。

触发条件
「The Alpine witch · 进度」剧情记录 = 0
并且 当前单位是 Corrupted Hero
并且 当地没有聚居地
并且 （地形为 Highland；或者 地形为 Plains；或者 地形为 Arid；或者 地形为 Drycold；或者 地形为 Grass；或者 地形为 Grass）。

单次候选检查概率：30%。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-duel-loser`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Duel Loser`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="Duelist and the ruler" href="?page=events#entry-event-3261852980-maeredux-p2p-midch-ruler-vs-duelist" meta="事件" text="人物关系事件检查时触发。

触发条件
当前单位是 The Duelist
并且 任务事件计时 = 任务事件计时阈值
并且 「Duelist and the ruler · 进度」剧情记录 = 0
并且 当前人物是玩家控制的 Agent
并且 另一人物是统治者
并且 另一人物 Might 大于 3
并且 当地是人类聚居地
并且 两人位于同一地点。

单次候选检查概率：100%。" /> · Take the fall：Might −1（30 回合）；Command −1（30 回合）；Intrigue −1（30 回合）。
<CrossReference name="Dueling a ruler" href="?page=events#entry-event-3261852980-maeredux-p2p-midch-ruler-vs-duel-any" meta="事件" text="人物关系事件检查时触发。

触发条件
不满足（当前单位是 The Duelist）
并且 （当前单位是 The Warlord；或者 当前单位是 The Buccaneer；或者 当前单位是 The Redeemer；或者 当前人物 Might 大于 4；或者 当前单位是 Sir Gawain）
并且 任务事件计时 = 任务事件计时阈值
并且 「Dueling a ruler · 进度」剧情记录 = 0
并且 当前人物是玩家控制的 Agent
并且 另一人物是统治者
并且 另一人物 Might 大于 3
并且 当地是人类聚居地
并且 两人位于同一地点。

单次候选检查概率：100%。" /> · Take the fall：Might −1（15 回合）；Command −1（15 回合）；Intrigue −1（15 回合）。`,acquisition:`通过 <CrossReference name="Duelist and the ruler" href="?page=events#entry-event-3261852980-maeredux-p2p-midch-ruler-vs-duelist" meta="事件" text="人物关系事件检查时触发。

触发条件
当前单位是 The Duelist
并且 任务事件计时 = 任务事件计时阈值
并且 「Duelist and the ruler · 进度」剧情记录 = 0
并且 当前人物是玩家控制的 Agent
并且 另一人物是统治者
并且 另一人物 Might 大于 3
并且 当地是人类聚居地
并且 两人位于同一地点。

单次候选检查概率：100%。" />、<CrossReference name="Dueling a ruler" href="?page=events#entry-event-3261852980-maeredux-p2p-midch-ruler-vs-duel-any" meta="事件" text="人物关系事件检查时触发。

触发条件
不满足（当前单位是 The Duelist）
并且 （当前单位是 The Warlord；或者 当前单位是 The Buccaneer；或者 当前单位是 The Redeemer；或者 当前人物 Might 大于 4；或者 当前单位是 Sir Gawain）
并且 任务事件计时 = 任务事件计时阈值
并且 「Dueling a ruler · 进度」剧情记录 = 0
并且 当前人物是玩家控制的 Agent
并且 另一人物是统治者
并且 另一人物 Might 大于 3
并且 当地是人类聚居地
并且 两人位于同一地点。

单次候选检查概率：100%。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-nobleconnections`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Noble Connections`,category:`player`,eligible:`满足事件条件的 Human、Elf 或 Orc 玩家 Agent`,text:`在 City 执行行动时 Security −1。`,acquisition:`Noble Connections 事件选择 Hand the social climber the ladder。事件要求当地有对该人物持正面态度的统治者、Agent 的 Menace <20，且本局尚未通过此事件获得。`}],m=t(),h=Array.from(new Set(p.map(e=>e.source))).map(e=>({id:e,name:p.find(t=>t.source===e).sourceName,groups:Object.entries(f).map(([t,n])=>({id:`characters-`+e+`-`+t,name:n,items:p.filter(n=>n.source===e&&n.category===t)})).filter(e=>e.items.length)})),g={id:`character-modifiers`,assetDir:``,autoLink:!1,powers:[],sections:h.flatMap(e=>e.groups.map(e=>({id:e.id,title:`角色特质`,items:e.items})))},_=p.map(e=>`entry-`+e.id),v=h.map(e=>({name:e.name,entries:e.groups.map(e=>({href:`#`+e.id,label:e.name}))})),y=p.filter(e=>e.source===`base`).length;function b(){let{sidebarHidden:t,setSidebarHidden:l,closeMobileSidebar:f,onSidebarClick:b}=u(),[x,S]=(0,d.useState)(new Set),C=e=>S(t=>new Set(t).add(e)),w=e=>S(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),T=o(C);return(0,m.jsxs)(`main`,{className:`site-shell base-modifiers-theme character-modifiers-theme`+(t?` sidebar-hidden`:``),onClick:T,children:[(0,m.jsx)(c,{hidden:t,onClose:f}),(0,m.jsxs)(`aside`,{className:`sidebar`,onClick:b,children:[(0,m.jsxs)(`div`,{className:`sidebar-head`,children:[(0,m.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,m.jsx)(`span`,{className:`brand-mark`,children:(0,m.jsx)(i,{size:17})}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`b`,{children:`角色特质`}),(0,m.jsx)(`small`,{children:`其他信息`})]})]}),(0,m.jsx)(`button`,{className:`sidebar-toggle`,type:`button`,"aria-expanded":!t,"aria-label":t?`展开侧边栏`:`收起侧边栏`,onClick:()=>l(e=>!e),children:t?(0,m.jsx)(n,{size:17}):(0,m.jsx)(r,{size:17})})]}),(0,m.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`}),(0,m.jsxs)(`div`,{className:`sidebar-bulk`,children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>S(new Set(_)),children:`全部展开`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>S(new Set),children:`全部收起`})]}),(0,m.jsx)(s,{groups:v,label:`角色特质导航`})]}),(0,m.jsxs)(`div`,{className:`content-shell`,children:[(0,m.jsxs)(`header`,{id:`top`,className:`modifier-library-header`,children:[(0,m.jsx)(`h1`,{children:`角色特质`}),(0,m.jsxs)(`p`,{children:[`本体 `,y,` 项，Mod `,p.length-y,` 项。收录人物的可学习能力、特质、诅咒、临时状态及随从能力，按能够获得它们的单位类别分类。`]}),(0,m.jsx)(`p`,{children:`不收录神祇相关特质及单个玩家 Agent 独有的能力。各 Mod 分别列出，使用当前有效版本。`})]}),h.map((t,n)=>(0,m.jsxs)(`section`,{className:`section character-source`,id:`character-source-`+t.id,children:[(0,m.jsxs)(`div`,{className:`plain-heading`,children:[(0,m.jsxs)(`p`,{className:`section-index`,children:[String(n+1).padStart(2,`0`),` / `,t.id===`base`?`游戏本体`:`Mod`]}),(0,m.jsx)(`h2`,{children:t.name})]}),t.groups.map(t=>(0,m.jsxs)(`div`,{className:`character-category`,id:t.id,children:[(0,m.jsxs)(`h3`,{children:[t.name,(0,m.jsx)(`small`,{children:t.items.length})]}),(0,m.jsx)(`div`,{className:`expandable-table`,children:t.items.map(t=>{let n=`entry-`+t.id;return(0,m.jsxs)(a,{config:g,entryId:n,name:t.name,open:x.has(n),onToggle:w,children:[t.levels&&(0,m.jsxs)(`small`,{className:`tenet-range`,children:[`等级范围：`,t.levels]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`适用人物`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(e,{config:g,text:t.eligible,exclude:t.name})})]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`作用`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(e,{config:g,text:t.text,exclude:t.name})})]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`获取方式`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(e,{config:g,text:t.acquisition,exclude:t.name})})]}),t.duration&&(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`持续与移除`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(e,{config:g,text:t.duration,exclude:t.name})})]})]},n)})})]},t.id))]},t.id)),(0,m.jsx)(`footer`,{className:`archive-footer`,children:(0,m.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`})})]})]})}export{b as default};