import{_ as e,a as t,b as n,d as r,f as i,h as a,i as o,s,t as c,v as l,y as u}from"./index-DNC2ofhH.js";var d=n(),f={common:`人物共通`,mobile:`Agent、英雄与教士`,player:`玩家 Agent`,hero:`英雄与教士`,ruler:`统治者`,npc:`自主特殊人物`,minion:`随从`},p=[{id:`character-base-t-statmight`,source:`base`,sourceName:`游戏本体`,name:`Might`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Might 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–5`},{id:`character-base-t-statintrigue`,source:`base`,sourceName:`游戏本体`,name:`Intrigue`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Intrigue 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–5`},{id:`character-base-t-statlore`,source:`base`,sourceName:`游戏本体`,name:`Lore`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Lore 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–5`},{id:`character-base-t-statcommand`,source:`base`,sourceName:`游戏本体`,name:`Command`,category:`mobile`,eligible:`可升级的 Agent 与英雄`,text:`Command 每级 +1，合计 +1 至 +5。`,acquisition:`升级时选择对应的属性特质。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–5`},{id:`character-base-t-arcaneknowledge`,source:`base`,sourceName:`游戏本体`,name:`Arcane Knowledge`,category:`mobile`,eligible:`能够研究魔法的 Agent 与英雄`,text:`作为研习魔法的知识储备；消耗指定数量可提升 <CrossReference name="Mastery of Blood Magic" href="#entry-character-base-t-masteryblood" meta="角色修正" text="1 级：Agony、Taunting Lure。
2 级：Through Their Eyes、The Hunger、Wasting Soul 等诅咒。
3 级：Possession。
各法术仍需满足自身的 Personal Item、目标与执行地点要求。" />、<CrossReference name="Mastery of Death" href="#entry-character-base-t-masterydeath" meta="角色修正" text="1 级：Death’s Shadow、Skeletal Servitor、Macabre Fortress。
2 级：Enslave the Dead、Faceless Servitor、Vampiric Curse。
3 级：Ravenous Dead。
同时拥有 1 级 Geomancy 可使用 Cthonian 相关法术；施法仍需满足各自的 Death、地点等条件。" /> 或 <CrossReference name="Mastery of Geomancy" href="#entry-character-base-t-masterygeomancy" meta="角色修正" text="1 级：Nurture、Tremor、Arcane Fortress、Attack Channeller。
2 级：Bring the Snows、Bountiful Harvest、Support Combat、Volcanic Devastation。
3 级：Death of the Sun。
同时拥有 1 级 Death Magic 可使用 Weave Cthonians、Cthonian Emergence；施法仍需满足各自的 Geomantic Locus、地点等条件。" />。持有后获得相应 Study 仪式。`,acquisition:`Learn Secret、Undertake Research、相关事件；Mage 的起始知识及首次取得 Blood Magic 也会提供知识。`,duration:`知识保留到被 Study 消耗。`},{id:`character-base-t-masteryblood`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Blood Magic`,category:`player`,eligible:`玩家 Agent；部分人物起始拥有`,text:`1 级：Agony、Taunting Lure。
2 级：Through Their Eyes、<CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色修正" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。" />、Wasting Soul 等诅咒。
3 级：Possession。
各法术仍需满足自身的 <CrossReference name="Personal Item" href="?god=thing-from-beyond#entry-personal-item" meta="物品" text="绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。" />、目标与执行地点要求。`,acquisition:`Study Blood 从无到 1、2、3 级分别消耗 1、2、3 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色修正" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。" />；Warlock 可选择此学派起步。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–3`},{id:`character-base-t-masterydeath`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Death`,category:`mobile`,eligible:`玩家 Agent；Vampire 等具有 <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" /> Magic 的人物`,text:`1 级：<CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" />’s Shadow、Skeletal Servitor、Macabre <CrossReference name="Fortress" href="?page=points-of-interest#entry-location-sub-fort" meta="兴趣点" text="为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。

出现方式
小型人类聚居地的随机候选。

可出现地点
小型人类聚居地。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" />。
2 级：Enslave the Dead、<CrossReference name="Faceless Servitor" href="?page=minions#entry-faceless-servitor" meta="随从" text="无特殊能力。" />、Vampiric Curse。
3 级：<CrossReference name="Ravenous Dead" href="?god=thing-from-beyond#entry-ravenous-dead" meta="军队" text="Vampire 爆发时产生的本体自主亡灵军队。摧毁聚居地时吸收人口增长；最大 HP 超过 200 时分裂为两支。未在摧毁有人口的地点时，最大 HP 每回合 −2，并把当前 HP 压至新的上限。" />。
同时拥有 1 级 Geomancy 可使用 Cthonian 相关法术；施法仍需满足各自的 <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" />、地点等条件。`,acquisition:`Study <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" /> 从无到 1、2、3 级分别消耗 2、3、5 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色修正" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。" />；相关施法者也可能起始拥有。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–3`},{id:`character-base-t-masterygeomancy`,source:`base`,sourceName:`游戏本体`,name:`Mastery of Geomancy`,category:`mobile`,eligible:`玩家 Agent 与 Mage 等施法英雄`,text:`1 级：Nurture、Tremor、<CrossReference name="Arcane Fortress" href="?god=escamrak#entry-arcane-fortress" meta="地点修正" text="保护地点免受魔法攻击，吸收敌对法师造成的部分伤害；地点沦为废墟后仍保留。" />、Attack Channeller。
2 级：Bring the Snows、Bountiful Harvest、Support Combat、Volcanic <CrossReference name="Devastation" href="?god=aberrant-metal#entry-devastation" meta="地点修正" text="战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。
达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。" />。
3 级：<CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" /> of the Sun。
同时拥有 1 级 <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" /> Magic 可使用 Weave Cthonians、Cthonian Emergence；施法仍需满足各自的 <CrossReference name="Geomantic Locus" href="?god=kalastrophe#entry-geomantic-locus" meta="地点修正" text="Geomancy 法术的施放地点与能量来源。Hungry Earth 将 Death 运往世界上当前强度最高的 Locus 所在地点。" />、地点等条件。`,acquisition:`Study Geomancy 从无到 1、2、3 级分别消耗 2、3、5 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色修正" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。" />；施法职业可起始拥有。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–3`},{id:`character-base-t-challengebooster`,source:`base`,sourceName:`游戏本体`,name:`Specialist`,category:`hero`,eligible:`英雄；Doctor 起始拥有 Physician，转为玩家控制后仍可保留`,text:`与专长标签匹配的任务进度每回合 +3。战斗开始时，若敌方具有对应标签，Defence +4。
Physician：Disease。
Mediator：Discord。
Exorcist：Undead。
Lightbringer：Shadow。
Orc-slayer：Orc。
Alienist：<CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" />。`,acquisition:`英雄升级时选择相应专长；Doctor 的 Physician 与此使用同一通用特质。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-infamous`,source:`base`,sourceName:`游戏本体`,name:`Infamous`,category:`player`,eligible:`玩家 Agent`,text:`被英雄杀死时，其他同时满足「Menace 小于死者一半」和「Profile 小于死者一半」的玩家 Agent，其 Menace 与 Profile 均减半。世界临时恐慌降低死者 Menace/3 个百分点，这类降低累计最多 50 个百分点。`,acquisition:`已经完成起始特质选择，Menace ≥20 且 Profile ≥20 时，可在后续升级选择。
<CrossReference name="Victory" href="?god=alai#entry-web-devour-attacking" meta="事件" text="随着进攻者的打击，精神蛛丝抽向防守者。蛛网将其悬起，使其无法反抗，灵魂在 Alai 面前被撕开。伤势本应致命，但初生女神仍来得及把自己织入伤口，让对方不知不觉成为她的一部分。" /> 事件选择 Glory in the victory 也可获得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-stealthy`,source:`base`,sourceName:`游戏本体`,name:`Stealthy`,category:`player`,eligible:`玩家 Agent`,text:`每回合 Profile −0.1 × 当前 Intrigue。`,acquisition:`已经完成起始特质选择，Intrigue >2 时，可在后续升级选择。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-primalwaters`,source:`base`,sourceName:`游戏本体`,name:`Primal Waters`,category:`mobile`,eligible:`满足 <CrossReference name="Drink Primal Waters" href="?page=points-of-interest#entry-place-task-base-ch-drinkprimalwaters" meta="共同行动" text="获得 Primal Waters：Might +2、Lore +2、Intrigue +2、Command +2，持续 40 回合；到期后四项加成一并消失。
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
Poisoned 持续期间，Might、Lore、Intrigue、Command 各 −1。匕首可重复触发。" /> 每次增加 5 回合，倒计时归零移除。`},{id:`character-base-t-paralyzed`,source:`base`,sourceName:`游戏本体`,name:`Paralyzed`,category:`mobile`,eligible:`遭受 Petrifying Gaze 的战斗对手`,text:`Attack、Defence 各 −2；施加时还立即扣除 2 点当前 Defence，最低降到 0。`,acquisition:`与具有 Petrifying Gaze 的人物交战。`,duration:`2 回合；归零移除。`},{id:`character-base-t-possessed`,source:`base`,sourceName:`游戏本体`,name:`Possessed`,category:`hero`,eligible:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 以外的目标英雄等人物`,text:`暂时交给玩家控制，可以利用其身体和声望执行行动；被附身者及可能识破的亲属会仇恨施法者。`,acquisition:`使用目标 <CrossReference name="Personal Item" href="?god=thing-from-beyond#entry-personal-item" meta="物品" text="绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。" /> 完成 Blood Magic: Possession。`,duration:`25 回合；重复施放再增加 25 回合。到期移除并清除正在执行的任务。`},{id:`character-base-t-throughtheireyes`,source:`base`,sourceName:`游戏本体`,name:`Through their Eyes`,category:`common`,eligible:`被施加家族诅咒的英雄与统治者`,text:`其所在或统治地点的 Security −2。`,acquisition:`Blood Magic 的 Through Their Eyes 家族诅咒；相关事件。`,duration:`持续保留；人物成为玩家控制单位后移除。`},{id:`character-base-t-ruinousblade`,source:`base`,sourceName:`游戏本体`,name:`Ruinous Blade`,category:`mobile`,eligible:`被 Ruinous Blade 伤害的人物；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`个人 Shadow 每回合 +2 个百分点。`,acquisition:`Ruinous Blade 对人物造成 HP 伤害后，受伤者获得此状态；相同状态不重复添加。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-calloftheabyss`,source:`base`,sourceName:`游戏本体`,name:`Call of the Abyss`,category:`common`,eligible:`受诅咒的英雄与统治者`,text:`强度每逢偶数回合 +1。自主人物可用 <CrossReference name="Maintain Humanity" href="?page=locations#entry-place-ruler-base-act-deepone-humanity" meta="统治者行动" text="Call of the Abyss 强度归零，抵抗造成的疲惫增加 3。" /> 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。`,acquisition:`Blood Magic 的 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 家族诅咒；相关事件。`,duration:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会自动清除此状态；其他人物通过专门行动抵抗或完成转化。`},{id:`character-base-t-thehunger`,source:`base`,sourceName:`游戏本体`,name:`The Hunger`,category:`common`,eligible:`英雄、统治者、Vampire 等人物`,text:`饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，<CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> +50。`,acquisition:`The Hunger 血魔法、The Feast 教义、Vampire 与 Feed 的传播及相关事件。`,duration:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会清除此状态。进食将强度清零，特质保留并继续积累饥饿。`},{id:`character-base-t-commandofvermin`,source:`base`,sourceName:`游戏本体`,name:`Command of Vermin`,category:`npc`,eligible:`Vampire；同一能力也被 Baroness 使用`,text:`每逢世界回合数为 5 的倍数时，若有空随从槽，补充一只 <CrossReference name="Vermin" href="?page=minions#entry-vermin" meta="随从" text="无特殊能力。" />（1 HP、1 Attack）。一次仅填一个槽位。`,acquisition:`Vampire 自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-mourning`,source:`base`,sourceName:`游戏本体`,name:`Mourning`,category:`common`,eligible:`失去亲友的英雄与统治者`,text:`记录正在哀悼的死者及杀害者，并使对应 Mourning 事件能够触发；本身不直接改变四项属性。`,acquisition:`亲属或喜欢的人死亡后，由人物关系系统加入。`,duration:`16 回合；每回合 −1，到期移除。`},{id:`character-base-t-intrinsiclifespan`,source:`base`,sourceName:`游戏本体`,name:`Intrinsic Lifespan`,category:`player`,eligible:`The Broken Maker 选中的 Agent`,text:`Might、Intrigue、Lore、Command 各 +2。`,acquisition:`The Broken Maker 的 Intrinsic Lifespan 神力。`,duration:`52 回合；倒计时归零时人物死亡。`},{id:`character-base-t-vinervamight`,source:`base`,sourceName:`游戏本体`,name:`Vinerva's Gift of Might`,category:`hero`,eligible:`饮用 <CrossReference name="Gift of Might" href="?god=vinerva#entry-gift-of-might" meta="英雄任务" text="非 Chosen One 英雄可执行，允许多人同时进行。获得或加深 Vinerva's Gift of Might，不直接扣除 Sanity。成瘾和需要对付强敌会提高动机，Awareness 会降低动机；没有额外的世界恐慌惩罚。Tempting Pheromones 增加接受动机。" /> 的英雄`,text:`第 1–7 次服用的 Might 加成为 +4、+3、+2、+2、+1、+1、0；继续服用变为 −1。药效结束后 Might −1。随着服用次数增加，英雄更倾向再次获取。`,acquisition:`在 Vinerva 的 <CrossReference name="Gift of Might" href="?god=vinerva#entry-gift-of-might" meta="英雄任务" text="非 Chosen One 英雄可执行，允许多人同时进行。获得或加深 Vinerva's Gift of Might，不直接扣除 Sanity。成瘾和需要对付强敌会提高动机，Awareness 会降低动机；没有额外的世界恐慌惩罚。Tempting Pheromones 增加接受动机。" /> 地点完成对应英雄任务。`,duration:`每次饮用将药效刷新为 22 回合；药效结束后保留 −1 Might 及服用次数。`},{id:`character-base-t-chosenone`,source:`base`,sourceName:`游戏本体`,name:`Chosen One`,category:`hero`,eligible:`被选中的英雄`,text:`Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 <CrossReference name="Call of the Abyss" href="#entry-character-base-t-calloftheabyss" meta="角色修正" text="强度每逢偶数回合 +1。自主人物可用 Maintain Humanity 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 Deep One。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。" />、Vampiric Curse 与 <CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色修正" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。" />。`,acquisition:`世界选出 Chosen One 时赋予；通过预言相关任务推进。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–5`},{id:`character-base-t-insane`,source:`base`,sourceName:`游戏本体`,name:`Insane`,category:`common`,eligible:`Sanity 归零的英雄与统治者`,text:`每次发疯恢复 Sanity，同时让 Sanity 上限降低 4，并新增一项符合人物身份的疯狂结果。第 1 层使用轻度结果，第 2–3 层使用中度结果，第 4 层起使用重度结果。
轻度：Tetramania 偏好 Orc、Deep Ones、Undead；Invincibility Complex 更偏好 Danger；Lone Wolf 更厌恶 Cooperation；<CrossReference name="Paranoia" href="#entry-character-3192034838-t-paranoia" meta="角色修正" text="每回合把当前及最低 Profile 设为 0、当前及最低 Menace 设为 100。持续 20 回合，结束时还原首次施放前记录的四个值；重复施放只延长时间。" /> about Comrades 解散随从；Nightmares 休息时 Sanity 每回合 −1；Mild Xenophobia 厌恶附近其他人类国家；Kleptomania 偶尔偷钱并增加 Menace；Conceited 更偏好 Ambition；Violent Outburst 立即 Menace +10。
中度：God Complex 随机更加偏好 Danger、Combat 或 Cruelty；Thanatophobia 更厌恶 Danger 和 Combat；Shaky Hands 使 Might −2；Wandering Mind 使 Lore −2；Confessor 在休息时使同地其他英雄 Sanity 每回合 −1；Tireless 使休息和升级意愿 −200；Unknowable Objectives 为各任务产生 −56 至 +56 的固定意愿修正；Hoarder 使统治者更爱 Gold，资助军队、<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" />、英雄、Outpost 的意愿 −40；Sociopath 将 Cruelty 偏好设为 +2，Cooperation 设为 −1。
重度：Charismatic Doomsayer 在人类聚居地每回合 <CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" /> +5、<CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> +1；Delusions of Grandeur 使君主发动侵略、城市领主叛乱；Patricidal 与 Matricidal 导致攻击或杀害父母。若目标父母是玩家 Agent，发疯者自己死亡；若双方都是单位，则转为攻击任务。
自主人物还可能因疯狂做出贿赂守卫、藏匿金币、增加当地 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 或打断其他英雄等异常举动。玩家控制的 Agent 和 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 不执行这部分自主疯狂行为。`,acquisition:`Sanity 降到 0 时，由人物的疯狂判定产生。`,duration:`已取得的结果持续保留；恢复 Sanity 不会自动删除已有疯狂。`},{id:`character-base-mt-clayface`,source:`base`,sourceName:`游戏本体`,name:`Changeling`,category:`minion`,eligible:`Changeling`,text:`完成 Menace 大于 5 的挑战时，将该次完成 Menace 转给一个非 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 的自主英雄；选取偏向较近的英雄。成功找到替罪羊后消耗该随从。`,acquisition:`招募或获得 Changeling 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-flighty`,source:`base`,sourceName:`游戏本体`,name:`Flighty`,category:`minion`,eligible:`Monkey`,text:`主人撤退时仍能保留下来。`,acquisition:`招募或获得 Monkey 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-loremaster`,source:`base`,sourceName:`游戏本体`,name:`Loremaster`,category:`minion`,eligible:`Spelltwister`,text:`主人 Lore +1。`,acquisition:`招募或获得 Spelltwister 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-madnessattack`,source:`base`,sourceName:`游戏本体`,name:`Madness Attack`,category:`minion`,eligible:`<CrossReference name="Giggler" href="?page=minions#entry-giggler" meta="随从" text="Madness Attack：每次攻击使敌方领队 Sanity −1，最低为 0；攻击被 Defence 挡住时仍生效。" />`,text:`每次攻击使对方人物 Sanity −1，最低为 0；攻击被阻挡时仍能生效。`,acquisition:`招募或获得 <CrossReference name="Giggler" href="?page=minions#entry-giggler" meta="随从" text="Madness Attack：每次攻击使敌方领队 Sanity −1，最低为 0；攻击被 Defence 挡住时仍生效。" /> 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-menacing`,source:`base`,sourceName:`游戏本体`,name:`Menacing`,category:`minion`,eligible:`Ogre`,text:`主人 Menace +10。`,acquisition:`招募或获得 Ogre 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-stealthy`,source:`base`,sourceName:`游戏本体`,name:`Stealthy`,category:`minion`,eligible:`<CrossReference name="Goblin Infiltrator" href="?page=minions#entry-goblin-infiltrator" meta="随从" text="Stealthy：主人 Intrigue +1、Profile −5。" />`,text:`主人 Profile −5、Intrigue +1。`,acquisition:`招募或获得 <CrossReference name="Goblin Infiltrator" href="?page=minions#entry-goblin-infiltrator" meta="随从" text="Stealthy：主人 Intrigue +1、Profile −5。" /> 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-summoncrows`,source:`base`,sourceName:`游戏本体`,name:`Summon Crows`,category:`minion`,eligible:`Crow`,text:`主人指挥军队作战时，对敌军施加 <CrossReference name="Murder of Crows" href="#entry-character-2932765110-t-murderofcrows" meta="角色修正" text="每逢第 5 回合，有空槽且至少剩余 1 Command 时，补充一只 Crow（1 HP、2 Attack、1 Command）。" />，使其 Lethality 降低 20 个百分点。`,acquisition:`招募或获得 Crow 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-thief`,source:`base`,sourceName:`游戏本体`,name:`Thief`,category:`minion`,eligible:`Monkey`,text:`主人战败撤退时从胜者身上偷取战利品：可用的金币与物品类别等概率选择，金币最多 50；两者都没有时取得 <CrossReference name="Personal Item" href="?god=thing-from-beyond#entry-personal-item" meta="物品" text="绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。" />。`,acquisition:`招募或获得 Monkey 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-urbanprowler`,source:`base`,sourceName:`游戏本体`,name:`Urban Prowler`,category:`minion`,eligible:`<CrossReference name="Razor Rat" href="?page=minions#entry-razor-rat" meta="随从" text="Urban Prowler：在 City 每累计停留 10 回合，使当地英雄任务的额外 Danger +1，上限为 1。" />`,text:`在 City 中每逢第 10 回合，使当地正面任务的附加 Danger +1，最多累积到 1。`,acquisition:`招募或获得 <CrossReference name="Razor Rat" href="?page=minions#entry-razor-rat" meta="随从" text="Urban Prowler：在 City 每累计停留 10 回合，使当地英雄任务的额外 Danger +1，上限为 1。" /> 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-webspinner`,source:`base`,sourceName:`游戏本体`,name:`Webspinner`,category:`minion`,eligible:`Webspinner`,text:`每逢第 17 回合在当地留下蛛网，打断经过的英雄 5 回合。`,acquisition:`招募或获得 Webspinner 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-mt-wise`,source:`base`,sourceName:`游戏本体`,name:`Wise`,category:`minion`,eligible:`Crow`,text:`主人每回合获得 1.5 XP；小数会累计后结算。`,acquisition:`招募或获得 Crow 时，该随从自带。`,duration:`随随从存在而生效。`},{id:`character-base-t-et-eye`,source:`base`,sourceName:`游戏本体`,name:`Blessing of the Eye`,category:`mobile`,eligible:`The Broken Maker 转化的角色；包括受控 Agent 与由统治者转成的 <CrossReference name="Warrior" href="?page=non-player-units#entry-npc-warrior" meta="非玩家单位" text="根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。" />`,text:`每回合 Menace −0.05×祝福等级。`,acquisition:`家族具有对应 Maker's Curse 后，使用 <CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 或 <CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" />。属性加成与祝福等级按该次消耗或减半后的诅咒强度计算。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–100`},{id:`character-base-t-et-midnight`,source:`base`,sourceName:`游戏本体`,name:`Blessing of Midnight`,category:`mobile`,eligible:`The Broken Maker 转化的角色；包括受控 Agent 与由统治者转成的 <CrossReference name="Warrior" href="?page=non-player-units#entry-npc-warrior" meta="非玩家单位" text="根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。" />`,text:`每回合 Profile −0.05×祝福等级。`,acquisition:`家族具有对应 Maker's Curse 后，使用 <CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 或 <CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" />。属性加成与祝福等级按该次消耗或减半后的诅咒强度计算。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–100`},{id:`character-base-t-et-sword`,source:`base`,sourceName:`游戏本体`,name:`Blessing of the Sword`,category:`mobile`,eligible:`The Broken Maker 转化的角色；包括受控 Agent 与由统治者转成的 <CrossReference name="Warrior" href="?page=non-player-units#entry-npc-warrior" meta="非玩家单位" text="根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。" />`,text:`杀死英雄时，若当地属于人类国家，Menace +20，并使该国家在满足条件时爆发内战。`,acquisition:`家族具有对应 Maker's Curse 后，使用 <CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 或 <CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" />。属性加成与祝福等级按该次消耗或减半后的诅咒强度计算。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-et-traitor`,source:`base`,sourceName:`游戏本体`,name:`Blessing of the Traitor`,category:`mobile`,eligible:`The Broken Maker 转化的角色；包括受控 Agent 与由统治者转成的 <CrossReference name="Warrior" href="?page=non-player-units#entry-npc-warrior" meta="非玩家单位" text="根据可见威胁、距离、个人喜恶、国家关系和完成收益自主选择任务，也会攻击或干扰暴露的邪恶人物、招募随从及休息。升级、物品和人物特质会继续改变属性。" />`,text:`执行受 Security 影响的行动时，Security −3。`,acquisition:`家族具有对应 Maker's Curse 后，使用 <CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 或 <CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" />。属性加成与祝福等级按该次消耗或减半后的诅咒强度计算。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-base-t-infection`,source:`base`,sourceName:`游戏本体`,name:`Cordyceps Infection`,category:`common`,eligible:`感染的人类 Agent、英雄与统治者；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`感染成熟度每回合 +2，上限 100。感染者位于非精灵的人类聚居地时，<CrossReference name="Infected Populace" href="?god=cordyceps#entry-infected-populace" meta="地点修正" text="表示人口的感染百分比，最高 100%。感染人口是 Drone 收割的对象，并提供 Infect Populace 和 Treat Populace；达到相应感染程度还可使用 Disrupted Neurology、Targeted Infection 与 Internal Maturation。强度降至 0 仍保留，聚居地沦为废墟时移除。" /> 每回合 +2。
每回合分别对同地合格人类角色尝试传染，概率为成熟度/100 × 2.5%；目标须 Awareness <100%，且不是 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或敌对自主怪物。统治者 <CrossReference name="Raise Army" href="?page=locations#entry-place-ruler-base-act-raisearmy" meta="统治者行动" text="创建一支 Human Army，成为当地驻军。" /> 的执行倾向减少当前成熟度。
成熟度达到 100 的英雄可被 Cordyceps 转化为 <CrossReference name="Drone" href="?god=cordyceps#entry-drone" meta="特殊人物与自主单位" text="由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。
设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。
探索时须 I &gt; 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。" />。`,acquisition:`Cordyceps 的 Infect、<CrossReference name="Infect Ruler" href="?god=cordyceps#entry-god-place-place-hook-cordyceps-0--place-task-cordyceps-ch-infectruler" meta="地点" text="给当地统治者添加 Cordyceps Infection；不检查其 Awareness。完成时自身 Menace +10、Profile +2。" />、<CrossReference name="Targeted Infection" href="?god=cordyceps#entry-god-place-place-hook-cordyceps-0--place-task-cordyceps-ch-targettedinfection" meta="地点" text="感染以当地为家乡的所有英雄与教徒，不要求他们此刻在场；Chosen One 除外。完成时自身 Menace +10、Profile +2。" />，受感染人口和人物间传播。`,duration:`持续保留；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会自动移除此状态。转化与清除感染的对应行动按各自规则处理。`},{id:`character-base-temporary-divineentity`,source:`base`,sourceName:`游戏本体`,name:`Divine Blessing`,category:`player`,eligible:`被 Divine Entity 奖励选中的玩家 Agent`,text:`Intrigue、Lore、Command 各 +1。`,acquisition:`满足 Divine Entity 的愿望后，随机奖励选择 Blessing；从尚未持有临时 Command 特质的玩家 Agent 中选取一人。`,duration:`27 回合。`},{id:`character-base-event-injury`,source:`base`,sourceName:`游戏本体`,name:`Injury`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The young of the serpent" href="?page=events#entry-event-base-fog-exploreruins-infil3" meta="事件" text="完成 Explore Ruins 后，在符合条件的遗迹探索事件中抽取。

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
统治者每回合有 1% 概率陷入 10 回合 <CrossReference name="Political Gridlock" href="?page=points-of-interest#entry-place-task-base-ch-politicalgridlock" meta="挑战" text="取消当地统治者当前行动，改为浪费 10 回合的 Political Gridlock；若在首都，国家行动也受到影响。" />，替换当前统治行动。`,acquisition:`持有目标的 <CrossReference name="Personal Item" href="?god=thing-from-beyond#entry-personal-item" meta="物品" text="绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。" /> 时执行 Forever Dying。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-curse-thehowling`,source:`base`,sourceName:`游戏本体`,name:`The Howling`,category:`common`,eligible:`触发 Harvester 死亡诅咒的凶手家族`,text:`每回合将高于 4 的 Sanity 上限压到 4，使家族成员更容易陷入疯狂。`,acquisition:`具有 Howl: <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" />’s Curse 的 Harvester 被人物杀死时，凶手家族受到诅咒。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-curse-wastingsouls`,source:`base`,sourceName:`游戏本体`,name:`Wasting Souls`,category:`common`,eligible:`受诅咒家族成员；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`每回合失去 5 XP；经验损失可以造成降级，并移除对应升级所得的属性点。`,acquisition:`持有目标的 <CrossReference name="Personal Item" href="?god=thing-from-beyond#entry-personal-item" meta="物品" text="绑定特定人物的私人物品，本身没有数值加成。作为施法媒介，可供 Blood Magic: Discorporation 定位对应人物。" />，以 Blood Magic 执行 Wasting Soul。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-cursebless-healers`,source:`base`,sourceName:`游戏本体`,name:`Blessing: Healers`,category:`ruler`,eligible:`获得祝福家族中的统治者`,text:`家族成员担任统治者时，当地 <CrossReference name="Plague" href="?god=alai#entry-plague" meta="地点修正" text="Prosperity 减少当前数值×0.003。普通人类类聚居地内，数值不高于 100 时按每回合数值÷450 累积人口死亡并增加 1 Death；超过 100 改为数值÷300 和 2 Death。整数人口损失结算后保留小数余量。
达到 300 时摧毁聚居地；每回合使 Unrest 增加 ⌊数值÷100⌋+1。超过 60 后可向疾病低于自身一半的相邻人类类聚居地传播，有 Quarantine 时传播门槛为 140。
Beckoning Hands 根据其数值计算离去人口。" /> 每回合 −1。`,acquisition:`The Broken Maker 跨世重启时，世界形成应对措施后可能随机选中尚无此类祝福的家族；三种家族祝福等概率抽取。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-cursebless-ironwilled`,source:`base`,sourceName:`游戏本体`,name:`Blessing: Iron Willed`,category:`common`,eligible:`获得祝福的家族成员`,text:`每回合将 Sanity 上限设为 24；若结算前 Sanity 已满，同时将当前 Sanity 设为 24。`,acquisition:`The Broken Maker 跨世重启时，世界形成应对措施后可能随机选中尚无此类祝福的家族；三种家族祝福等概率抽取。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-cursebless-silvertongued`,source:`base`,sourceName:`游戏本体`,name:`Blessing: Silvertongued`,category:`ruler`,eligible:`获得祝福家族中的统治者`,text:`家族成员担任统治者时，当地 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 每回合 −1。`,acquisition:`The Broken Maker 跨世重启时，世界形成应对措施后可能随机选中尚无此类祝福的家族；三种家族祝福等概率抽取。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-base-curse-eeye`,source:`base`,sourceName:`游戏本体`,name:`Maker's Curse: Eye`,category:`common`,eligible:`被 The Broken Maker 诅咒的家族成员`,text:`家族成员每次加深疯狂，诅咒强度 +1。<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 按消耗的强度增加 Lore，并给予 <CrossReference name="Blessing of the Eye" href="#entry-character-base-t-et-eye" meta="角色修正" text="每回合 Menace −0.05×祝福等级。" />。`,acquisition:`对家族成员施放同名 Maker’s Curse 神力。`,duration:`<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 移除家族的 Maker’s Curse；<CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" /> 将各项强度减半并向下取整，保留剩余诅咒。`},{id:`character-base-curse-emidnight`,source:`base`,sourceName:`游戏本体`,name:`Maker's Curse: Midnight`,category:`common`,eligible:`被 The Broken Maker 诅咒的家族成员`,text:`家族成员首次在不可控制状态下触发 Shadow 达到 100% 的通知时，强度 +1。<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 增加 min(5，强度) Intrigue，并给予 <CrossReference name="Blessing of Midnight" href="#entry-character-base-t-et-midnight" meta="角色修正" text="每回合 Profile −0.05×祝福等级。" />。`,acquisition:`对家族成员施放同名 Maker’s Curse 神力。`,duration:`<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 移除家族的 Maker’s Curse；<CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" /> 将各项强度减半并向下取整，保留剩余诅咒。`},{id:`character-base-curse-esword`,source:`base`,sourceName:`游戏本体`,name:`Maker's Curse: Sword`,category:`common`,eligible:`被 The Broken Maker 诅咒的家族成员`,text:`家族成员被人物，或具有人物身份的单位杀死时，强度 +1。<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 按强度增加 Might；强度大于 0 时给予 <CrossReference name="Blessing of the Sword" href="#entry-character-base-t-et-sword" meta="角色修正" text="杀死英雄时，若当地属于人类国家，Menace +20，并使该国家在满足条件时爆发内战。" />。`,acquisition:`对家族成员施放同名 Maker’s Curse 神力。`,duration:`<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 移除家族的 Maker’s Curse；<CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" /> 将各项强度减半并向下取整，保留剩余诅咒。`},{id:`character-base-curse-etraitor`,source:`base`,sourceName:`游戏本体`,name:`Maker's Curse: Traitor`,category:`common`,eligible:`被 The Broken Maker 诅咒的家族成员`,text:`<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 按现有诅咒强度增加 Command；强度大于 0 时给予 <CrossReference name="Blessing of the Traitor" href="#entry-character-base-t-et-traitor" meta="角色修正" text="执行受 Security 影响的行动时，Security −3。" />。游戏提示以家族成员转为 Agent 累积强度，但当前版本未实现这一步增长。`,acquisition:`对家族成员施放同名 Maker’s Curse 神力。`,duration:`<CrossReference name="Create Agent" href="?god=broken-maker#entry-create-agent" meta="神力" text="消耗 1 次招募额度，并移除目标 House 的全部 Maker's Curse。按 Sword／Eye／Midnight／Traitor 强度分别增加 Might／Lore／Intrigue／Command，Intrigue 最多增加 5；获得相应 Blessing。
现有英雄或宗教人物保留原单位并获得控制权。对统治者施放时，移除其统治者职位，以原人物生成一名自主 Warrior；其 Might、Command 额外各 +1，HP 为 6。" /> 移除家族的 Maker’s Curse；<CrossReference name="Create Agent Masterfully" href="?god=broken-maker#entry-create-agent-masterfully" meta="神力" text="消耗 1 次招募额度。目标 House 的每项 Maker's Curse 先减半并向下取整，按减半后的强度给予属性和 Blessing，诅咒以剩余强度继续保留。
现有英雄或宗教人物获得控制权；统治者转为自主 Warrior，Might、Command 额外各 +1，HP 为 6。Sword、Traitor 强度大于 0 时授予对应 Blessing；Eye、Midnight 强度为 0 时也授予。" /> 将各项强度减半并向下取整，保留剩余诅咒。`},{id:`character-2866026291-t-grailtempt`,source:`2866026291`,sourceName:`Ixthus, King of cups`,name:`Grails Temptation`,category:`common`,eligible:`<CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" /> 持有者`,text:`标记人物携带 <CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" />，使饮用及诱惑相关机制能够识别持有者；本身没有属性加成。`,acquisition:`取得 <CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" /> 后由物品加入。`,duration:`失去全部 <CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" /> 后移除。`},{id:`character-2866026291-t-immortaldeath`,source:`2866026291`,sourceName:`Ixthus, King of cups`,name:`Cursed Immortality`,category:`common`,eligible:`饮用 <CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" /> 的 Agent、英雄与统治者`,text:`每逢世界回合数为 3 的倍数时强度 +1；当地 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> >75 时额外 +1，Prosperity <70% 时额外 +1。每次死亡强度 +40，并留下可复生的 <CrossReference name="Immortal Body" href="?god=ixthus#entry-immortal-body" meta="地点修正" text="显示死者姓名；复苏达到 100 后在此恢复生命并移除身体，恢复满 HP，Profile 减半。可控制人物仍需要空余 Agent 位。绑定后停止复苏。" />；非玩家人物尸体初始 95，玩家单位尸体初始 20。死亡不增加英雄死亡恐慌，<CrossReference name="Infamous" href="#entry-character-base-t-infamous" meta="角色修正" text="被英雄杀死时，其他同时满足「Menace 小于死者一半」和「Profile 小于死者一半」的玩家 Agent，其 Menace 与 Profile 均减半。世界临时恐慌降低死者 Menace/3 个百分点，这类降低累计最多 50 个百分点。" /> 不生效。
统治者强度 >30 时当地 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 每回合 +2，>50 时再 +2。提供 <CrossReference name="Embrace Eternity" href="?god=ixthus#entry-embrace-eternity" meta="英雄任务" text="拥有 Cursed Immortality 的自主人物可执行此任务。完成后转化为同名且不可控制的 Dread Knight；原人物带有 The Hunger 时，转化为吸血分支。" /> 与 <CrossReference name="Constitute Eternal City" href="?god=ixthus#entry-constitute-eternal-city" meta="统治者行动" text="增加 Eternal City 计数，触发 Eternal City 模组事件，使原 settlement fallIntoRuin，并替换为 Eternal City。" /> 等接受永生的行动。`,acquisition:`饮用 <CrossReference name="Holy Grail" href="?page=base-items#entry-mod-2866026291-i-holygrail" meta="物品" text="持有者可执行 To Eternal Life!，消耗 Holy Grail，获得 Cursed Immortality；非精灵统治者持有时也会获得同名统治者行动。人物死亡后留下 Immortal Body，待其复苏进度达到 100 时复活；永生人物的死亡不增加英雄死亡造成的世界恐慌，Infamous 不生效。
Sell Grail 将物品交给当地统治者，取得其现有 Gold，最多 100。精灵没有饮用仪式。" />；Ixthus 的加速永生神力也能推进该状态。`,duration:`没有倒计时；接受永生可进一步转化，遗体被绑定会阻止复生。`},{id:`character-2866026291-t-immortalhungerdeath`,source:`2866026291`,sourceName:`Ixthus, King of cups`,name:`Immortal Hunger`,category:`npc`,eligible:`Vampiric <CrossReference name="Knight" href="?page=minions#entry-knight" meta="随从" text="无特殊能力。" />`,text:`在人类聚居地每回合 Shadow +1.5 个百分点，受伤时恢复 1 HP。作为进攻者开战时，使防守人物获得 <CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色修正" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。" />。死亡留下强度 20 的 <CrossReference name="Immortal Body" href="?god=ixthus#entry-immortal-body" meta="地点修正" text="显示死者姓名；复苏达到 100 后在此恢复生命并移除身体，恢复满 HP，Profile 减半。可控制人物仍需要空余 Agent 位。绑定后停止复苏。" />。`,acquisition:`拥有永生的人物转化为 Vampiric <CrossReference name="Knight" href="?page=minions#entry-knight" meta="随从" text="无特殊能力。" /> 时获得。`,duration:`持续保留；遗体未被绑定时可复生。`},{id:`character-2866026291-t-immortalknightdeath`,source:`2866026291`,sourceName:`Ixthus, King of cups`,name:`Embraced Immortality`,category:`npc`,eligible:`<CrossReference name="Dread Knight" href="?god=ixthus#entry-dread-knight" meta="特殊人物与自主单位" text="不可控制的自主单位，会旅行、袭击人物，使用下列能力掠夺并强化自身。" />`,text:`在人类聚居地（Crypt 除外）每回合 <CrossReference name="Devastation" href="?god=aberrant-metal#entry-devastation" meta="地点修正" text="战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。
达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。" /> +3，受伤时恢复 1 HP。死亡留下强度 20 的 <CrossReference name="Immortal Body" href="?god=ixthus#entry-immortal-body" meta="地点修正" text="显示死者姓名；复苏达到 100 后在此恢复生命并移除身体，恢复满 HP，Profile 减半。可控制人物仍需要空余 Agent 位。绑定后停止复苏。" />。`,acquisition:`拥有永生的人物接受永生并转化为 <CrossReference name="Dread Knight" href="?god=ixthus#entry-dread-knight" meta="特殊人物与自主单位" text="不可控制的自主单位，会旅行、袭击人物，使用下列能力掠夺并强化自身。" />。`,duration:`持续保留；遗体未被绑定时可复生。`},{id:`character-2879207914-t-bloodstain`,source:`2879207914`,sourceName:`Kishi, God of Bloodshed`,name:`Bloodstained`,category:`common`,eligible:`杀死人物或被神力赋予血痕的人物`,text:`用于支付 Kishi 神力。杀死人物获得 1 层；死者 Bloodstained >1 时还继承其血痕，已有 <CrossReference name="Soul-Scarred" href="#entry-character-2879207914-t-bloodshed-soulscar" meta="角色修正" text="记录已消耗的 Bloodstain；仍计入历史杀戮总量，可被要求历史杀戮的神力识别。" /> 也会被继承。持有者移动时同步更新地点的 <CrossReference name="Bloodstain" href="?god=kishi#entry-bloodstain" meta="相关机制" text="尚未被消费的杀戮层数。可由杀人、主动宣战和 Soldier Worship 获得；消费时转化为同量 Soul-Scar。" /> Present。`,acquisition:`人物杀戮与 Kishi 的相关神力。`,duration:`被神力消耗的血痕转为 <CrossReference name="Soul-Scarred" href="#entry-character-2879207914-t-bloodshed-soulscar" meta="角色修正" text="记录已消耗的 Bloodstain；仍计入历史杀戮总量，可被要求历史杀戮的神力识别。" />；现存层数归零时移除 Bloodstained。`},{id:`character-2879207914-t-bloodshed-soulscar`,source:`2879207914`,sourceName:`Kishi, God of Bloodshed`,name:`Soul-Scarred`,category:`common`,eligible:`血痕已被消耗的人物`,text:`记录已消耗的 <CrossReference name="Bloodstain" href="?god=kishi#entry-bloodstain" meta="相关机制" text="尚未被消费的杀戮层数。可由杀人、主动宣战和 Soldier Worship 获得；消费时转化为同量 Soul-Scar。" />；仍计入历史杀戮总量，可被要求历史杀戮的神力识别。`,acquisition:`消耗 <CrossReference name="Bloodstained" href="#entry-character-2879207914-t-bloodstain" meta="角色修正" text="用于支付 Kishi 神力。杀死人物获得 1 层；死者 Bloodstained &gt;1 时还继承其血痕，已有 Soul-Scarred 也会被继承。持有者移动时同步更新地点的 Bloodstain Present。" /> 时，按实际消耗数量转入；击杀具有此状态的人物也会继承。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879207914-t-bloodshed-latentvampirism`,source:`2879207914`,sourceName:`Kishi, God of Bloodshed`,name:`Latent Vampirism`,category:`common`,eligible:`Kishi 选中的人物`,text:`人物死亡后，下一回合在死亡地点复活为 Vampire。`,acquisition:`<CrossReference name="Unending Bloodshed" href="?god=kishi#entry-unending-bloodshed" meta="神力" text="消耗 2 层 Bloodstain，赋予 The Hunger 与 Latent Vampirism。目标死后会在下一回合以 Vampire 身份于死亡地点复活。" /> 神力。`,duration:`死亡触发；下一回合复活为 Vampire。`},{id:`character-2879207914-t-bloodshed-martyrforwar`,source:`2879207914`,sourceName:`Kishi, God of Bloodshed`,name:`Martyr for War`,category:`hero`,eligible:`采用相应教义的教士`,text:`人物死亡时，所在地增加 100 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" />；附近人物更喜欢 Combat 与 Cruelty，并更厌恶 Cooperation。`,acquisition:`Martyr for War 教义。`,duration:`死亡时结算。`},{id:`character-2879207914-t-bloodshed-menacerefund`,source:`2879207914`,sourceName:`Kishi, God of Bloodshed`,name:`Muddied Trail`,category:`player`,eligible:`Kishi 的 Agent`,text:`回合结束时一次性扣除指定的 Profile 与 Menace 后自行移除；实际数值为各 -5。`,acquisition:`完成满足 Kishi 返还条件的行动时加入。`,duration:`回合结束结算后移除。`},{id:`character-2879249746-t-voidinvisible`,source:`2879249746`,sourceName:`Living Void God`,name:`Warped Light`,category:`player`,eligible:`携带 <CrossReference name="Voidstone" href="?page=base-items#entry-mod-2879249746-i-voidstone" meta="物品" text="Something from Nothing：消耗一枚，使持有者与全部随从各恢复 2 HP，最高至各自上限。
Plant Voidstone：在人类聚居地渗透率至少 50%、且没有 Hungry Rift 或 Hidden Voidstone 时，消耗物品建立 Hidden Voidstone。
持有者若具有 Dimensional Insights，每枚提供 Lore +1；携带它也可满足 Warp Light 与 Shattered Light 的施放条件。" /> 的 Agent`,text:`将 Profile 压到最低值。`,acquisition:`<CrossReference name="Living Void" href="?god=living-void#entry-living-void" meta="地点" text="Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。

出现方式
Vacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。" /> 的 Warped Light 神力。`,duration:`15 回合；失去全部 <CrossReference name="Voidstone" href="?page=base-items#entry-mod-2879249746-i-voidstone" meta="物品" text="Something from Nothing：消耗一枚，使持有者与全部随从各恢复 2 HP，最高至各自上限。
Plant Voidstone：在人类聚居地渗透率至少 50%、且没有 Hungry Rift 或 Hidden Voidstone 时，消耗物品建立 Hidden Voidstone。
持有者若具有 Dimensional Insights，每枚提供 Lore +1；携带它也可满足 Warp Light 与 Shattered Light 的施放条件。" /> 时提前移除。`},{id:`character-2879249746-temporary-staredintovoid`,source:`2879249746`,sourceName:`Living Void God`,name:`Stared into the Void`,category:`player`,eligible:`<CrossReference name="Hungry Rift" href="?god=living-void#entry-hungry-rift" meta="地点修正" text="强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。" /> 所在地的 Agent`,text:`Lore +1。`,acquisition:`<CrossReference name="Living Void" href="?god=living-void#entry-living-void" meta="地点" text="Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。

出现方式
Vacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。" /> 的 <CrossReference name="Stare Deep" href="?god=living-void#entry-stare-deep" meta="神力" text="对己方 Agent 使用时获得 25 回合的 +1 Lore；对英雄使用时直接损失 5 Sanity。" /> 神力，或在 <CrossReference name="Hungry Rift" href="?god=living-void#entry-hungry-rift" meta="地点修正" text="强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。" /> 执行 <CrossReference name="Stare Deep" href="?god=living-void#entry-stare-deep" meta="神力" text="对己方 Agent 使用时获得 25 回合的 +1 Lore；对英雄使用时直接损失 5 Sanity。" />。`,duration:`25 回合；已有同名增益时不能再次取得。`},{id:`character-2879249746-event-a-glimpse-of-the-greater-things-`,source:`2879249746`,sourceName:`Living Void God`,name:`A Glimpse Of The Greater Things · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`A Glimpse Of The Greater Things · The Final Fate Of The World, The True Form Of The Cosmos：Lore +1（999 回合）。`,acquisition:`通过 A Glimpse Of The Greater Things 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2879251084-t-curselazy`,source:`2879251084`,sourceName:`Chandalor the Cursed Bloom God`,name:`Curse of Overwhelming Joy`,category:`common`,eligible:`受诅咒家族的英雄与统治者`,text:`人物执行任务时每回合进度 −5，最低保留 1。统治者和君主行动每回合有 50% 概率少推进 1 回合。`,acquisition:`Chandalor 的对应家族诅咒。`,duration:`没有固定倒计时；成为玩家控制单位、<CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />、Vampire 或 <CrossReference name="Dark Empire" href="?god=kalastrophe#entry-dark-empire-ritual" meta="挑战" text="把国家转为 Dark Empire。城内统治者个人 Shadow 和地点 Shadow 均低于 90% 的 City 将叛乱；国家退出 Alliance。" /> 人物后解除。`},{id:`character-2879251084-t-cursemenace`,source:`2879251084`,sourceName:`Chandalor the Cursed Bloom God`,name:`Curse of Obsession`,category:`common`,eligible:`受诅咒家族的英雄与统治者`,text:`单位每完成一个任务 Menace +8；统治者使当地 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 每回合 +1。`,acquisition:`Chandalor 的对应家族诅咒。`,duration:`没有固定倒计时；成为玩家控制单位、<CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />、Vampire 或 <CrossReference name="Dark Empire" href="?god=kalastrophe#entry-dark-empire-ritual" meta="挑战" text="把国家转为 Dark Empire。城内统治者个人 Shadow 和地点 Shadow 均低于 90% 的 City 将叛乱；国家退出 Alliance。" /> 人物后解除。`},{id:`character-2879251084-t-cursepoverty`,source:`2879251084`,sourceName:`Chandalor the Cursed Bloom God`,name:`Curse of Poverty`,category:`common`,eligible:`受诅咒家族的人物`,text:`每回合失去当前 Gold 的 5%，最少失去 5 Gold；金币最低归零。`,acquisition:`Chandalor 的对应家族诅咒。`,duration:`没有固定倒计时；成为玩家控制单位、<CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" />、Vampire 或 <CrossReference name="Dark Empire" href="?god=kalastrophe#entry-dark-empire-ritual" meta="挑战" text="把国家转为 Dark Empire。城内统治者个人 Shadow 和地点 Shadow 均低于 90% 的 City 将叛乱；国家退出 Alliance。" /> 人物后解除。`},{id:`character-2879251084-t-growingbondmark`,source:`2879251084`,sourceName:`Chandalor the Cursed Bloom God`,name:`Growing Bond`,category:`common`,eligible:`Growing Bond 选中的人物`,text:`标记配对目标，供后续 Growing Bond 将其对另一人物的偏好提高。`,acquisition:`Chandalor 的 Growing Bond。`,duration:`由配对神力使用。`},{id:`character-2879667447-t-abyssalmagic`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Abyssal Magic`,category:`mobile`,eligible:`持有 Abyssal Shard 的人物；<CrossReference name="Abyssal Ritualist" href="?page=non-player-units#entry-npc-abyssal-ritualist" meta="非玩家单位" text="自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。" />`,text:`显示所有 Abyssal Shard 的当前蓄能与最大蓄能之和。蓄能用于开放、支付更强的 Abyssal Magic；多枚碎片的容量与储量累加。`,acquisition:`取得 Abyssal Shard，或 <CrossReference name="Abyssal Ritualist" href="?page=non-player-units#entry-npc-abyssal-ritualist" meta="非玩家单位" text="自主补充法术资源、促进或掩护 Cult，并保护深潜者据点；抵达地点后先停留，再选择施法。个人 Shadow 为 100%。" /> 起始拥有。`,duration:`失去全部 Abyssal Shard 后移除。`},{id:`character-2879667447-t-deeponecurse-scorn`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Sailor's Scorn`,category:`common`,eligible:`受诅咒的英雄与统治者`,text:`位于海上或沿海时，每回合 Gold −2。每逢世界回合号除以 10 余 1，销毁物品栏中首个符合条件的 <CrossReference name="War Axe" href="?page=base-items#entry-war-axe" meta="物品" text="Might +2。" />、<CrossReference name="Shield" href="?page=base-items#entry-shield" meta="物品" text="Defence +1。" />、<CrossReference name="Reliable Shield" href="?page=base-items#entry-reliable-shield" meta="物品" text="Defence +2。" />、<CrossReference name="Basic Axe" href="?page=base-items#entry-basic-axe" meta="物品" text="Might +1。" /> 或 <CrossReference name="Flintlock Pistol" href="?page=base-items#entry-flintlock-pistol" meta="物品" text="Attack +1。" />。统治者还会使领地得到同名地点修正。`,acquisition:`Sailor’s Scorn 血魔法。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879667447-t-deeponeentity`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Deep One Entity`,category:`npc`,eligible:`<CrossReference name="Drowned Prophet" href="?page=non-player-units#entry-npc-drowned-prophet" meta="非玩家单位" text="默认自主行动，优先施放 Hymn、维持自身国家并防御入侵。Direct Control 可让玩家接管，Relinquish Control 可恢复自主状态。" />、<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色修正" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" /> 等深海实体`,text:`不因衰老死亡；每回合恢复满 Sanity 并设为无灵魂。清除 <CrossReference name="Call of the Abyss" href="#entry-character-base-t-calloftheabyss" meta="角色修正" text="强度每逢偶数回合 +1。自主人物可用 Maintain Humanity 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 Deep One。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。" />、Howl: <CrossReference name="Death" href="?god=aberrant-metal#entry-death" meta="地点修正" text="地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。
正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。" />’s Curse、Insane、<CrossReference name="The Hunger" href="#entry-character-base-t-thehunger" meta="角色修正" text="饥饿强度每回合 +3，推动人物执行 Feed。
单位完成 Feed 时强度归零，恢复全部 HP，个人与当地 Shadow 各 +50 个百分点，Menace +8；消耗当地人口。Vampire 的进食还可能将饥饿传给合格的当地英雄或统治者。
统治者的 Feed 消耗 1 回合，强度归零，个人与当地 Shadow 各 +50 个百分点，Unrest +50。" />、名称带 Curse 的特质及家族诅咒。`,acquisition:`对应深海实体生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879667447-t-inundai`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Emissary`,category:`npc`,eligible:`Inundai Emissary`,text:`每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。`,acquisition:`Inundai Emissary 自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879667447-t-inundai-hunger`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Hunger for Madness`,category:`npc`,eligible:`<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色修正" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" />`,text:`饥饿每回合 +0.3，越高越倾向消耗 <CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" />。
Establish Presence 增加 25 + 2×世界现存 Inundai Presence 数量的饥饿；吸收 <CrossReference name="Deep One" href="?page=non-player-units#entry-npc-deep-one" meta="非玩家单位" text="先向海洋移动，随后能够两栖移动；寻找沿海人类聚居地建立 Cult，并在既有 Cult 暴露时降低其 Profile 或 Menace。初始个人 Shadow 为 100%。" /> 人口增加 100。
Recollect 消耗 <CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" />，每消耗 1 点使饥饿 −2，最低 0。`,acquisition:`<CrossReference name="Inundai Emissary" href="#entry-character-2879667447-t-inundai" meta="角色修正" text="每回合将正数 Profile 与 Menace 清到 0，不因衰老死亡。全部 Inundai Presence 被封锁或摧毁后，失去在世界中存在的联系。" /> 自带，与单位的饥饿值同步。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879667447-t-inundai-agentpayment`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Favor`,category:`player`,eligible:`接受 <CrossReference name="Inundai Patronage" href="#entry-character-2879667447-t-inundai-patronage" meta="角色修正" text="允许请求金币、粮食、压制 Unrest、恢复 Sanity 或报复等援助，每次请求积累 Inundai Debt。" /> 的 Agent`,text:`每回合 Favor +1。
<CrossReference name="Drive Word of Mouth" href="?god=iastur#entry-drive-word-of-mouth" meta="挑战" text="完成时使当地 Madness +25，执行者 Profile +10、Menace +10。" />、Conceal Deep Ones、Human Appearance、Power Deep Ones、Start Deep Cult、增加 <CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" /> 的对应行动：Favor +向下取整的 Complexity/2。
在 Inundai Presence 地点建造雕像：+20；恢复 Presence：+100。
在该地点执行 <CrossReference name="Raid Periphery" href="?page=locations#entry-place-task-base-ch-raidperiphery" meta="挑战" text="增加当地 Devastation，破坏 Prosperity 与粮食供应。" />、<CrossReference name="Enshadow" href="?page=locations#entry-place-task-base-ch-enshadow" meta="挑战" text="提高当地 Shadow，建立能向周边传播黑暗的据点。" />、<CrossReference name="Fuel the Fire" href="?god=kalastrophe#entry-fuel-the-fire" meta="挑战" text="对当地 Unrest 的各项正向增量分别乘 10 并向上取整，合计增加至多 100 点 Unrest。" />、<CrossReference name="Malign Catch" href="?page=points-of-interest#entry-place-task-base-ch-maligncatch" meta="挑战" text="建立 Malign Catch，逐回合增强 Shadow、Madness，并为发展 Deep One Cult 提供入口。" />、<CrossReference name="Political Gridlock" href="?page=points-of-interest#entry-place-task-base-ch-politicalgridlock" meta="挑战" text="取消当地统治者当前行动，改为浪费 10 回合的 Political Gridlock；若在首都，国家行动也受到影响。" />、<CrossReference name="Spread Panic" href="?god=kalastrophe#entry-spread-panic" meta="挑战" text="增加 Unrest，数值为 min（Plague÷3，100）。" />：+Complexity。
其余 Deep Ones <CrossReference name="Propagation" href="?page=points-of-interest#entry-place-task-base-ch-deeponespropagation" meta="挑战" text="吸引相邻已渗透人类聚居地的 20% 人口进入深海城市，并使 Sanctum Menace +10。" />、<CrossReference name="Call of the Deep" href="?god=chandalor#entry-base-call-of-the-deep" meta="家族诅咒" text="游戏本体家族诅咒。为符合条件的家族成员赋予 Call of the Abyss；其强度每两个回合提高 1。英雄与统治者需要不断维持人性，否则会转化为 Deep One Agent；Chosen One 和若干特殊黑暗人物不受影响。" />、带 Deep Ones 正面标签的行动：+Complexity。
在有 Inundai Presence 的地点消费 Favor 换取援助。`,acquisition:`Agent 接受 <CrossReference name="Inundai Patronage" href="#entry-character-2879667447-t-inundai-patronage" meta="角色修正" text="允许请求金币、粮食、压制 Unrest、恢复 Sanity 或报复等援助，每次请求积累 Inundai Debt。" />。`,duration:`储存到被援助行动消费。`},{id:`character-2879667447-t-inundai-patronage`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Patronage`,category:`common`,eligible:`接受交易的英雄与统治者`,text:`允许请求金币、粮食、压制 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" />、恢复 Sanity 或报复等援助，每次请求积累 <CrossReference name="Inundai Debt" href="#entry-character-2879667447-t-inundai-debt" meta="角色修正" text="首次取得 Sanity −2。每逢第 10 回合，正数债务按当前利率计息；在人物故乡或领地开放使者收债行动。
完成 Dangerous Knowledge、Drive Word of Mouth、Conceal Deep Ones 或 Deep Ones Human Appearance，各使债务 −25。统治者另可 Pay Debt 或 Create Madness。" />。`,acquisition:`Accept Patronage／Take Patronage。`,duration:`英雄转成非英雄单位时移除。`},{id:`character-2879667447-t-inundai-debt`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Debt`,category:`common`,eligible:`向 Inundai 索取援助的英雄与统治者`,text:`首次取得 Sanity −2。每逢第 10 回合，正数债务按当前利率计息；在人物故乡或领地开放使者收债行动。
完成 Dangerous Knowledge、<CrossReference name="Drive Word of Mouth" href="?god=iastur#entry-drive-word-of-mouth" meta="挑战" text="完成时使当地 Madness +25，执行者 Profile +10、Menace +10。" />、Conceal Deep Ones 或 Deep Ones Human Appearance，各使债务 −25。统治者另可 Pay Debt 或 Create <CrossReference name="Madness" href="?god=adolia#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" />。`,acquisition:`接受 Patronage、索取援助，以及对应债务诅咒。`,duration:`债务随交易、计息与偿付变化；英雄转成非英雄单位时移除。`},{id:`character-2879667447-t-inundai-ire`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Ire`,category:`common`,eligible:`破坏 Inundai Presence 或雕像的人物`,text:`使负债的人物更倾向攻击此人。被杀死时，杀手若有 Debt，则 Debt −2×死者 Ire；若有 Favor，则 Favor +2×死者 Ire。`,acquisition:`Block Presence 或 Destroy Statues。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2879667447-t-inundai-norest`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Manic Energy`,category:`hero`,eligible:`请求休息援助的英雄`,text:`将连续任务疲劳计数持续压到 −10，消除由此产生的 Rest & Resupply 需求。`,acquisition:`Inundai 的 Rest Boost 援助。`,duration:`25 回合。`},{id:`character-2879667447-t-inundai-sanity`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Inundai Protection`,category:`ruler`,eligible:`请求 Sanity 援助的统治者`,text:`每回合 Sanity +2，不超过自身上限。`,acquisition:`统治者向 Inundai 请求 Sanity 援助。`,duration:`25 回合。`},{id:`character-2879667447-t-inundai-seabornesecrets`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Seaborne Secrets`,category:`common`,eligible:`请求属性援助的 Agent、英雄与统治者`,text:`Lore +1，Command +1。`,acquisition:`向 Inundai 请求属性强化。`,duration:`25 回合。`},{id:`character-2879667447-t-strangemeat`,source:`2879667447`,sourceName:`Deep Ones Plus`,name:`Strange Meat Consumption`,category:`player`,eligible:`食用 <CrossReference name="Strange Meat" href="?page=base-items#entry-mod-2879667447-i-strangemeat" meta="物品" text="Eat Strange Meat：消耗物品，25 回合内 Might +3、Attack +3、最大 HP −3；已有该效果时不能重复食用。
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

抽选权重：0.4。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-2900259087-t-awareofflesh`,source:`2900259087`,sourceName:`Flesh God`,name:`Aware of Fleshcrafting`,category:`common`,eligible:`知晓 Fleshcrafting 的 Agent、英雄与统治者`,text:`知晓 Fleshcrafting 的存在，开放 <CrossReference name="Study Fleshcrafting" href="?god=escamrak#entry-study-fleshcrafting" meta="人物学习与仪式" text="玩家 Agent 与自主人物均可执行。提高一级 Mastery of Fleshcrafting。升至一级实际消耗 1 层知识，升至二、三级实际消耗 2 层；两种知识同时存在时，两类都会按代码扣除。非玩家控制者个人 Shadow 增加 2% × 新等级。" />。掌握魔法的人物与当地人口会传播这项认知；己方 Agent 在回合结束时获得，Awareness 大于 0 的人物也会获得。<CrossReference name="Temptations of Flesh" href="?god=escamrak#entry-temptations-of-flesh" meta="神力" text="永久标记目标，使学习知识和研究 Fleshcrafting 的基础执行意愿增加：人物单位 +60，统治者 +40。" /> 可进一步提高学习意愿。`,acquisition:`接触掌握 Fleshcrafting 的人物、受影响的人口与地点，或执行学习相关行动。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-t-fleshknowledge`,source:`2900259087`,sourceName:`Flesh God`,name:`Fleshcrafting Knowledge`,category:`common`,eligible:`学习 Fleshcrafting 的人物`,text:`储存学习所得知识，最高 6 层。<CrossReference name="Learn Escamrak Secret" href="?god=escamrak#entry-learn-escamrak-secret" meta="人物学习与仪式" text="玩家 Agent 与自主人物均可执行。消耗 Escamrak Secret，Fleshcrafting Knowledge +1，并知晓 Fleshcrafting；非玩家控制者个人 Shadow +2%。" />、<CrossReference name="Delve into Library" href="?god=escamrak#entry-god-place-location-sub-livingterrain--place-task-2900259087-ch-bonelibrarylearn" meta="兴趣点" text="玩家 Agent 与自主人物均可执行。将 Fleshcrafting Knowledge 补至 6，并知晓 Fleshcrafting；非玩家控制者每补充一级知识，个人 Shadow +2%。" /> 及对应统治者行动增加知识；<CrossReference name="Study Fleshcrafting" href="?god=escamrak#entry-study-fleshcrafting" meta="人物学习与仪式" text="玩家 Agent 与自主人物均可执行。提高一级 Mastery of Fleshcrafting。升至一级实际消耗 1 层知识，升至二、三级实际消耗 2 层；两种知识同时存在时，两类都会按代码扣除。非玩家控制者个人 Shadow 增加 2% × 新等级。" /> 消耗知识提升 <CrossReference name="Mastery of Fleshcrafting" href="#entry-character-2900259087-t-masteryflesh" meta="角色修正" text="魔法掌握程度，最高三级，并免疫老年死亡。一级开放 Fleshcrafting: Enhancement、Fleshcrafting: Craft Minion；二级开放 Fleshcrafting: Reinforce Self、Fleshcrafting: Sculpt Flesh；三级开放 Fleshcrafting: Abominize Self。统治者获得相应 Fleshcrafting 行动。
每回合以 10% 概率向尚不知晓该魔法的当地统治者或人物传播认知，喜欢或厌恶传播者会相应影响对 Fleshcrafting 的偏好。Warlock 招募时也可选择一级掌握。" />。`,acquisition:`<CrossReference name="Learn Escamrak Secret" href="?god=escamrak#entry-learn-escamrak-secret" meta="人物学习与仪式" text="玩家 Agent 与自主人物均可执行。消耗 Escamrak Secret，Fleshcrafting Knowledge +1，并知晓 Fleshcrafting；非玩家控制者个人 Shadow +2%。" />、<CrossReference name="Delve into Library" href="?god=escamrak#entry-god-place-location-sub-livingterrain--place-task-2900259087-ch-bonelibrarylearn" meta="兴趣点" text="玩家 Agent 与自主人物均可执行。将 Fleshcrafting Knowledge 补至 6，并知晓 Fleshcrafting；非玩家控制者每补充一级知识，个人 Shadow +2%。" />、对应统治者学习行动。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-t-masteryflesh`,source:`2900259087`,sourceName:`Flesh God`,name:`Mastery of Fleshcrafting`,category:`common`,eligible:`学习 Fleshcrafting 的 Agent、英雄与统治者`,text:`魔法掌握程度，最高三级，并免疫老年死亡。一级开放 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" />、<CrossReference name="Fleshcrafting: Craft Minion" href="?god=escamrak#entry-fleshcrafting-craft-minion" meta="法术" text="一级可制作 Crafted Beast；二级增加 Monstrosity、Warped Crow；三级增加 Flesh Hulk、Ravenous Abomination。各自造成的 Menace 见随从条目。非玩家控制的施法者个人 Shadow 增加 2% × 魔法等级。" />；二级开放 <CrossReference name="Fleshcrafting: Reinforce Self" href="?god=escamrak#entry-fleshcrafting-reinforce-self" meta="法术" text="最大 HP 和当前 HP 均增加 2，个人 Shadow +5%；完成后移除该法术。" />、<CrossReference name="Fleshcrafting: Sculpt Flesh" href="?god=escamrak#entry-fleshcrafting-sculpt-flesh" meta="法术" text="选择制作 Writhing Flesh、Acid Sack、Bone Sword、Bone Darts 或 Flesh Tome。优先将第一个 HP 大于 1 的随从降至 1 HP；无此随从时，施法者消耗 2 HP。非玩家控制者个人 Shadow +5%。" />；三级开放 <CrossReference name="Fleshcrafting: Abominize Self" href="?god=escamrak#entry-fleshcrafting-abominize-self" meta="法术" text="转化为自主行动的 Abomination，所有基础属性 +1，继承最大 HP 并恢复满血，个人 Shadow 达到 100%，失去灵魂。完成时增加 10 Profile、10 Menace。" />。统治者获得相应 Fleshcrafting 行动。
每回合以 10% 概率向尚不知晓该魔法的当地统治者或人物传播认知，喜欢或厌恶传播者会相应影响对 Fleshcrafting 的偏好。Warlock 招募时也可选择一级掌握。`,acquisition:`<CrossReference name="Study Fleshcrafting" href="?god=escamrak#entry-study-fleshcrafting" meta="人物学习与仪式" text="玩家 Agent 与自主人物均可执行。提高一级 Mastery of Fleshcrafting。升至一级实际消耗 1 层知识，升至二、三级实际消耗 2 层；两种知识同时存在时，两类都会按代码扣除。非玩家控制者个人 Shadow 增加 2% × 新等级。" /> 消耗 <CrossReference name="Fleshcrafting Knowledge" href="#entry-character-2900259087-t-fleshknowledge" meta="角色修正" text="储存学习所得知识，最高 6 层。Learn Escamrak Secret、Delve into Library 及对应统治者行动增加知识；Study Fleshcrafting 消耗知识提升 Mastery of Fleshcrafting。" />；Warlock 也可选择此学派。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-t-horrorregen`,source:`2900259087`,sourceName:`Flesh God`,name:`Endless Regrowth`,category:`common`,eligible:`<CrossReference name="Escamrak" href="?god=escamrak#entry-escamrak-army" meta="军队" text="可直接控制的神体，每回合恢复 2 HP。在无火山损伤的陆地点，每回合使 Living Terrain 增加 20；尚无该修正时创建。被摧毁后，在 the Elder Tomb 重建 Escamrak's Body。" /> 选中的人物及受教义影响的教士`,text:`受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 <CrossReference name="Tooth Armor" href="#entry-character-2900259087-horrormutation-0" meta="角色修正" text="人物单位 Defence +1。" />、<CrossReference name="Extra Arms" href="#entry-character-2900259087-horrormutation-1" meta="角色修正" text="人物单位 Attack +1。" />、<CrossReference name="Cannibalistic Hunger" href="#entry-character-2900259087-horrormutation-2" meta="角色修正" text="食人冲动初始 30，此后每回合 +1，提高攻击拥有灵魂的非玩家人物的意愿；统治者可执行 Cannibalize Staff。杀死拥有灵魂的人物后冲动清零，个人 Shadow +50%、Sanity −15；若极端喜欢死者，则改为 Shadow +100%、Sanity −30，并变为极端厌恶自己。" />、<CrossReference name="Bone Spines" href="#entry-character-2900259087-horrormutation-3" meta="角色修正" text="战斗开始时直接对敌方人物造成 2 HP 伤害，穿透 Defence。" />、<CrossReference name="Pus Growths" href="#entry-character-2900259087-horrormutation-4" meta="角色修正" text="每回合使所在地 Plague Immunity 减少 2。" />、<CrossReference name="Terrifying Appearance" href="#entry-character-2900259087-horrormutation-5" meta="角色修正" text="统治者每回合使当地 Unrest 减少 1。" />、<CrossReference name="Gibbering Mouths" href="#entry-character-2900259087-horrormutation-6" meta="角色修正" text="每回合使所在地人类聚居地 Madness 增加 1。" />、<CrossReference name="Second Head" href="#entry-character-2900259087-horrormutation-7" meta="角色修正" text="人物单位 Lore +1；统治者每回合 Gold +2。" />、<CrossReference name="Extra Organs" href="#entry-character-2900259087-horrormutation-8" meta="角色修正" text="人物单位最大 HP 与当前 HP 各增加 8。" />、<CrossReference name="Living Tumors" href="#entry-character-2900259087-horrormutation-9" meta="角色修正" text="获得时使当地 Shadow 增加 50%。随后使用所有持有者共享的计数器：先倒数 10 次结算，归零后每次有 5% 概率使所在地 Shadow 再增加 50%，成功后重置倒数。" />。`,acquisition:`Endless Regrowth 神力；对应 Fleshcrafting 教义。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-t-parasite-infest`,source:`2900259087`,sourceName:`Flesh God`,name:`Will be Infested`,category:`hero`,eligible:`被 <CrossReference name="Mind-Shaper" href="?god=escamrak#entry-mind-shaper" meta="特殊人物与自主单位" text="自主寻找个人 Shadow 未满、尚未极端喜欢 Fleshcrafting 的人物，前往其位于人类聚居地的家乡。存活满 25 回合起，每回合损失 1 HP；找不到目标时消亡。" /> 植入寄生物的人物`,text:`由 <CrossReference name="Mind-Shaper" href="?god=escamrak#entry-mind-shaper" meta="特殊人物与自主单位" text="自主寻找个人 Shadow 未满、尚未极端喜欢 Fleshcrafting 的人物，前往其位于人类聚居地的家乡。存活满 25 回合起，每回合损失 1 HP；找不到目标时消亡。" /> 植入。下次执行 Rest 时，个人 Shadow +50%，极端喜欢 Fleshcrafting，并获得 <CrossReference name="Aware of Fleshcrafting" href="#entry-character-2900259087-t-awareofflesh" meta="角色修正" text="知晓 Fleshcrafting 的存在，开放 Study Fleshcrafting。掌握魔法的人物与当地人口会传播这项认知；己方 Agent 在回合结束时获得，Awareness 大于 0 的人物也会获得。Temptations of Flesh 可进一步提高学习意愿。" />，随后移除此特质。`,acquisition:`<CrossReference name="Mind-Shaper" href="?god=escamrak#entry-mind-shaper" meta="特殊人物与自主单位" text="自主寻找个人 Shadow 未满、尚未极端喜欢 Fleshcrafting 的人物，前往其位于人类聚居地的家乡。存活满 25 回合起，每回合损失 1 HP；找不到目标时消亡。" /> 完成 Infest。`,duration:`下次 Rest 触发后移除。`},{id:`character-2900259087-t-flesh-statbonus`,source:`2900259087`,sourceName:`Flesh God`,name:`Hulking Muscles`,category:`common`,eligible:`接受 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 的人物`,text:`Might +1，可通过重新施展 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 更换为其他属性改造。`,acquisition:`完成 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" />，选择该改造。`,duration:`长期保留；再次选择其他属性改造时替换。`},{id:`character-2900259087-flesh-statbonus-1`,source:`2900259087`,sourceName:`Flesh God`,name:`Backup Brains`,category:`common`,eligible:`接受 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 的人物`,text:`Lore +1，可通过重新施展 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 更换为其他属性改造。`,acquisition:`完成 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" />，选择该改造。`,duration:`长期保留；再次选择其他属性改造时替换。`},{id:`character-2900259087-flesh-statbonus-2`,source:`2900259087`,sourceName:`Flesh God`,name:`More Eyes`,category:`common`,eligible:`接受 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 的人物`,text:`Intrigue +1，可通过重新施展 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 更换为其他属性改造。`,acquisition:`完成 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" />，选择该改造。`,duration:`长期保留；再次选择其他属性改造时替换。`},{id:`character-2900259087-flesh-statbonus-3`,source:`2900259087`,sourceName:`Flesh God`,name:`Permanent Smile`,category:`common`,eligible:`接受 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 的人物`,text:`Command +1，可通过重新施展 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" /> 更换为其他属性改造。`,acquisition:`完成 <CrossReference name="Fleshcrafting: Enhancement" href="?god=escamrak#entry-fleshcrafting-enhancement" meta="法术" text="选择 Hulking Muscles、Backup Brains、More Eyes 或 Permanent Smile，使对应属性永久 +1；重新施法可更换选择。非玩家控制的施法者个人 Shadow +2%。" />，选择该改造。`,duration:`长期保留；再次选择其他属性改造时替换。`},{id:`character-2900259087-horrormutation-0`,source:`2900259087`,sourceName:`Flesh God`,name:`Tooth Armor`,category:`common`,eligible:`符合该突变条件的人物`,text:`人物单位 Defence +1。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-1`,source:`2900259087`,sourceName:`Flesh God`,name:`Extra Arms`,category:`common`,eligible:`符合该突变条件的人物`,text:`人物单位 Attack +1。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-2`,source:`2900259087`,sourceName:`Flesh God`,name:`Cannibalistic Hunger`,category:`common`,eligible:`符合该突变条件的人物`,text:`食人冲动初始 30，此后每回合 +1，提高攻击拥有灵魂的非玩家人物的意愿；统治者可执行 <CrossReference name="Cannibalize Staff" href="?god=escamrak#entry-cannibalize-staff" meta="统治者行动" text="清空食人冲动，个人 Shadow +50%、Sanity −15；当地 Unrest +50，创建 25 点 Lingering Resentment。" />。杀死拥有灵魂的人物后冲动清零，个人 Shadow +50%、Sanity −15；若极端喜欢死者，则改为 Shadow +100%、Sanity −30，并变为极端厌恶自己。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-3`,source:`2900259087`,sourceName:`Flesh God`,name:`Bone Spines`,category:`common`,eligible:`符合该突变条件的人物`,text:`战斗开始时直接对敌方人物造成 2 HP 伤害，穿透 Defence。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-4`,source:`2900259087`,sourceName:`Flesh God`,name:`Pus Growths`,category:`common`,eligible:`符合该突变条件的人物`,text:`每回合使所在地 <CrossReference name="Plague Immunity" href="?god=thing-from-beyond#entry-plague-immunity" meta="地点修正" text="每有 50 点强度，每回合使当地 Plague 减少 1 点，计算时向下取整。" /> 减少 2。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-5`,source:`2900259087`,sourceName:`Flesh God`,name:`Terrifying Appearance`,category:`ruler`,eligible:`统治者`,text:`统治者每回合使当地 <CrossReference name="Unrest" href="?god=escamrak#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 减少 1。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-6`,source:`2900259087`,sourceName:`Flesh God`,name:`Gibbering Mouths`,category:`common`,eligible:`符合该突变条件的人物`,text:`每回合使所在地人类聚居地 <CrossReference name="Madness" href="?god=escamrak#entry-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。
每 1 点 Madness 使未达等级上限的 Fleshcrafters 每回合额外增加 0.05。" /> 增加 1。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-7`,source:`2900259087`,sourceName:`Flesh God`,name:`Second Head`,category:`common`,eligible:`符合该突变条件的人物`,text:`人物单位 Lore +1；统治者每回合 Gold +2。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-8`,source:`2900259087`,sourceName:`Flesh God`,name:`Extra Organs`,category:`common`,eligible:`符合该突变条件的人物`,text:`人物单位最大 HP 与当前 HP 各增加 8。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-horrormutation-9`,source:`2900259087`,sourceName:`Flesh God`,name:`Living Tumors`,category:`common`,eligible:`符合该突变条件的人物`,text:`获得时使当地 Shadow 增加 50%。随后使用所有持有者共享的计数器：先倒数 10 次结算，归零后每次有 5% 概率使所在地 Shadow 再增加 50%，成功后重置倒数。`,acquisition:`<CrossReference name="Endless Regrowth" href="#entry-character-2900259087-t-horrorregen" meta="角色修正" text="受伤时每回合恢复 1 HP。结算前已满血的人物或统治者，每回合随机累积 0 或 1 点突变进度；达到 12 时清零并获得一个尚未拥有、适合该人物的随机突变，等级 +1，最高 6 级。
同样在无需治疗时，非玩家控制人物每回合增加“0.5% × 等级”的个人 Shadow；每次获得突变还失去 10 Sanity。突变包括 Tooth Armor、Extra Arms、Cannibalistic Hunger、Bone Spines、Pus Growths、Terrifying Appearance、Gibbering Mouths、Second Head、Extra Organs、Living Tumors。" /> 达到 12 点突变进度时，从适用且未拥有的突变中取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2900259087-mt-minionfleshregen`,source:`2900259087`,sourceName:`Flesh God`,name:`Regeneration`,category:`minion`,eligible:`具有再生能力的 Fleshcrafting 随从`,text:`每回合恢复 HP，不超过上限。
<CrossReference name="Monstrosity" href="?god=escamrak#entry-monstrosity" meta="随从" text="二级起可制作。Regeneration：受伤时每回合恢复 1 HP，最高恢复至满血。制作时 Menace +4。" />：1。
<CrossReference name="Flesh Hulk" href="?god=escamrak#entry-flesh-hulk" meta="随从" text="三级可制作。Regeneration：受伤时每回合恢复 6 HP，最高恢复至满血。制作时 Menace +8。" />：6。
<CrossReference name="Ravenous Abomination" href="?god=escamrak#entry-ravenous-abomination" meta="随从" text="三级可制作。Regeneration：受伤时每回合恢复 1 HP，最高恢复至满血。制作时 Menace +8。" />：1。`,acquisition:`<CrossReference name="Fleshcrafting: Craft Minion" href="?god=escamrak#entry-fleshcrafting-craft-minion" meta="法术" text="一级可制作 Crafted Beast；二级增加 Monstrosity、Warped Crow；三级增加 Flesh Hulk、Ravenous Abomination。各自造成的 Menace 见随从条目。非玩家控制的施法者个人 Shadow 增加 2% × 魔法等级。" /> 制造相应随从。`,duration:`随随从存在而生效。`},{id:`character-2900259087-mt-miniongoldsteal`,source:`2900259087`,sourceName:`Flesh God`,name:`Agile Thief`,category:`minion`,eligible:`<CrossReference name="Warped Crow" href="?god=escamrak#entry-warped-crow" meta="随从" text="二级起可制作。Agile Thief：身处人类聚居地时每回合为主人增加 1 Gold，同队多个不叠加。制作时 Menace +2。" />`,text:`主人位于人类聚居地时，每回合 Gold +1。携带多只具有此能力的随从仍只结算一次。`,acquisition:`<CrossReference name="Fleshcrafting: Craft Minion" href="?god=escamrak#entry-fleshcrafting-craft-minion" meta="法术" text="一级可制作 Crafted Beast；二级增加 Monstrosity、Warped Crow；三级增加 Flesh Hulk、Ravenous Abomination。各自造成的 Menace 见随从条目。非玩家控制的施法者个人 Shadow 增加 2% × 魔法等级。" /> 制造 <CrossReference name="Warped Crow" href="?god=escamrak#entry-warped-crow" meta="随从" text="二级起可制作。Agile Thief：身处人类聚居地时每回合为主人增加 1 Gold，同队多个不叠加。制作时 Menace +2。" />。`,duration:`随随从存在而生效。`},{id:`character-2932110698-t-nature-lycanthropy`,source:`2932110698`,sourceName:`Living Wilds`,name:`Lycanthropy`,category:`common`,eligible:`可感染的 Agent、英雄、教士与统治者`,text:`每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 <CrossReference name="Infectious Curse" href="#entry-character-2932110698-t-nature-werewolfinfectiousness" meta="角色修正" text="本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 Lycanthropy。" />。变回时移除这些形态能力，保留 HP 和原人物。`,acquisition:`被狼人伤害或完成感染行动；女巫诅咒；Liberation of Beasthood 教义可使教士自愿接受。<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 与亡灵不能正常转化。`,duration:`感染长期保留；每轮变身 20 回合，特定选择可以永久保持狼人形态。`},{id:`character-2932110698-t-nature-werewolfinfectiousness`,source:`2932110698`,sourceName:`Living Wilds`,name:`Infectious Curse`,category:`mobile`,eligible:`狼人及处于狼人形态的感染人物`,text:`本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色修正" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。" />。`,acquisition:`狼人自带；非女巫诅咒造成的 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色修正" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。" /> 变身时获得。`,duration:`成功传播后冷却 60 回合；普通感染者变回人形后移除。`},{id:`character-2932110698-t-nature-autominions`,source:`2932110698`,sourceName:`Living Wilds`,name:`Bonds of Nature / Lupine Dominion / Spider Queen`,category:`npc`,eligible:`自然生物、狼人，以及进入狼人形态的人物`,text:`每逢第 5 回合，若有空槽且剩余 Command 足够，补充一只对应随从。
Bonds of Nature：<CrossReference name="Dryad" href="?page=non-player-units#entry-npc-dryad" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
选择受伤人物及受灾地点提供治疗；黑暗形态同时传播 Shadow。" />、<CrossReference name="Fairy" href="?page=non-player-units#entry-npc-fairy" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
对人物或统治者施加魅惑。" />、Stag、<CrossReference name="Unicorn" href="?page=non-player-units#entry-npc-unicorn" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态为周边人类聚居地施加 Ward；黑暗形态倾向建立 Well of Shadows。" /> 补充 <CrossReference name="Sprite" href="?page=minions#entry-sprite" meta="随从" text="无特殊能力。" />。
Lupine Dominion：狼人补充 Wolf。
Spider Queen：<CrossReference name="Broodmother" href="?page=non-player-units#entry-npc-broodmother" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态在家园织网，黑暗形态还会侵入人类聚居地织网。" /> 补充 <CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" />。`,acquisition:`对应野生生物自带；<CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色修正" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。" /> 变身时获得 Lupine Dominion。`,duration:`自然生物长期保留；感染者恢复人形时移除。`},{id:`character-2932110698-t-nature-stagdeath`,source:`2932110698`,sourceName:`Living Wilds`,name:`Spirit of Bounty / Spirit of Rage`,category:`npc`,eligible:`Stag`,text:`Spirit of Bounty：被自主英雄杀死时，杀手故乡获得 50 Stockpiled Food，Shadow −50 个百分点；被玩家 Agent 杀死时，改为全部玩家 Agent 各得 100 XP。
Spirit of Rage：被玩家 Agent 杀死时，死亡地点 Shadow +100 个百分点，并加入或增加 100 强度 <CrossReference name="Well of Shadows" href="?page=locations#entry-place-task-base-ch-wellofshadows" meta="挑战" text="建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。" />。`,acquisition:`Stag 自带，随明暗形态切换。`,duration:`死亡时触发。`},{id:`character-2932110698-mt-nature-poisonbite`,source:`2932110698`,sourceName:`Living Wilds`,name:`Poison Bite`,category:`minion`,eligible:`<CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" />`,text:`攻击穿过目标 Defence 并造成 HP 伤害时，施加 5 回合 Poisoned，使四项属性各 −1；已有中毒时增加 5 回合。`,acquisition:`<CrossReference name="Spiderling" href="?page=minions#entry-spiderling" meta="随从" text="Poison Bite：攻击穿过敌方领队 Defence 时，使其 Poisoned；Might、Lore、Intrigue、Command 各 −1，持续 5 回合，已有中毒可延长。" /> 自带。`,duration:`随从攻击时触发；毒持续 5 回合，可延长。`},{id:`character-2932765110-mt-carrierpigeon`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Carrier Pigeon`,category:`minion`,eligible:`Pigeon`,text:`可以派遣运送或取回其他 Agent 的物品和金币。`,acquisition:`取得 Pigeon。`,duration:`随随从存在而生效。`},{id:`character-2932765110-mt-owlnightvision`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`An Eye for Sercrets`,category:`minion`,eligible:`Owl`,text:`主人 Profile −5。主人执行任务、途中事件计数至少 4 且当地 Shadow ≥50% 时，可替换为 Owl 专有事件；选中后分别有 30% 为物品事件、40% 为通道事件、30% 为 Owl Egg 事件，并重置途中事件计数。`,acquisition:`取得 Owl。`,duration:`随随从存在而生效。`},{id:`character-2932765110-t-collectedmind`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Collected Mind`,category:`common`,eligible:`受诅咒的英雄、教士与统治者`,text:`成为 Eldritch Command 的目标：可指定人物任务、统治者行动或君主国家行动；国家行动要求原执行意愿至少 −40。该神力每回合第一次免费，此后逐次增加 1 消耗。`,acquisition:`Curseweaving 的 Collected Mind 家族诅咒。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物时移除。`},{id:`character-2932765110-t-doomedprophetscurse`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Doomed Prophet's Curse`,category:`hero`,eligible:`佩戴 <CrossReference name="Doomed" href="#entry-character-3192034838-t-doomcountdown" meta="角色修正" text="每回合倒计时 −1，10 回合后摧毁持有者所在聚居地、移除当地 Human Outpost，然后杀死持有者。重复施放会添加独立倒计时。" /> <CrossReference name="Prophet" href="#entry-character-2968835416-t-prophet" meta="角色修正" text="显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。" />’s Ring 的自主英雄`,text:`获得时 Awareness 设为 100%。完成 Warn the World 时，使当地及相邻聚居地 Shadow 各 +25 个百分点，并抵消对应统治者的常规 Awareness 增长。`,acquisition:`佩戴 <CrossReference name="Doomed" href="#entry-character-3192034838-t-doomcountdown" meta="角色修正" text="每回合倒计时 −1，10 回合后摧毁持有者所在聚居地、移除当地 Human Outpost，然后杀死持有者。重复施放会添加独立倒计时。" /> <CrossReference name="Prophet" href="#entry-character-2968835416-t-prophet" meta="角色修正" text="显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。" />’s Ring。`,duration:`失去戒指、成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物时移除。`},{id:`character-2932765110-t-fictitiousbonds`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Fictitious Bonds`,category:`common`,eligible:`通过 Rite of Masks 加入目标家族的人物`,text:`在由所记录家族成员统治的聚居地，Security −1；持有者本人担任该家族统治者时也生效。`,acquisition:`Curseweaving: Rite of Masks。`,duration:`离开所记录家族后移除。`},{id:`character-2932765110-t-flourishing`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Forced Flourishing`,category:`common`,eligible:`受诅咒的人物`,text:`在有人类聚居地的地点，每回合 Population +1。`,acquisition:`Forced Flourishing 家族诅咒。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 后移除。`},{id:`character-2932765110-t-generosity`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Curse of Generosity`,category:`hero`,eligible:`侵入女巫教团的其他教士`,text:`每回合向施咒教团捐出 5 Gold；个人金币不足时会继续向其所属教团资金索取。资助施咒教团的行动意愿 +20。`,acquisition:`女巫对侵入教士执行 Curse Intruding <CrossReference name="Acolyte" href="?page=non-player-units#entry-npc-acolyte" meta="非玩家单位" text="偏好宗教任务，教义等级决定可执行的行动；教团之间的关系、个人偏好和威胁也影响决策。被控制后可以作为玩家 Agent 行动。" />。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" />、受控人物、施咒教团成员、Ophanim 教士或相应 Orc 教士后解除。`},{id:`character-2932765110-t-masterycurseweaving`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Mastery of Curseweaving`,category:`mobile`,eligible:`可研究 Curseweaving 的 Agent 与施法人物`,text:`以 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" /> 中的灵魂施展家族诅咒与灵魂编织。加入 Magic <CrossReference name="Plague" href="?god=alai#entry-plague" meta="地点修正" text="Prosperity 减少当前数值×0.003。普通人类类聚居地内，数值不高于 100 时按每回合数值÷450 累积人口死亡并增加 1 Death；超过 100 改为数值÷300 和 2 Death。整数人口损失结算后保留小数余量。
达到 300 时摧毁聚居地；每回合使 Unrest 增加 ⌊数值÷100⌋+1。超过 60 后可向疾病低于自身一半的相邻人类类聚居地传播，有 Quarantine 时传播门槛为 140。
Beckoning Hands 根据其数值计算离去人口。" />、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" /> 与 1 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色修正" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。" />。`,acquisition:`Study Curseweaving；可选该学派的施法者起始选择。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–3`},{id:`character-2932765110-t-mirror`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Mirrored`,category:`common`,eligible:`被镜像诅咒选中的英雄与统治者`,text:`每回合把全部普通与极端喜恶复制为目标人物的喜恶。`,acquisition:`Mirrored 家族诅咒。`,duration:`失去有效目标、成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或受玩家控制时移除。`},{id:`character-2932765110-t-murderofcrows`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Murder of Crows`,category:`hero`,eligible:`采用 Aviaries 的教士`,text:`每逢第 5 回合，有空槽且至少剩余 1 Command 时，补充一只 Crow（1 HP、2 Attack、1 Command）。`,acquisition:`Aviaries 教义。`,duration:`随该教义的授予条件生效。`},{id:`character-2932765110-t-phthisicalpoisoned`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Disfigured by Phthisical Poison`,category:`hero`,eligible:`被 <CrossReference name="Esoteric Poisons" href="#entry-character-2932765110-t-poisoner" meta="角色修正" text="把 Poison Hero 的普通毒替换为 Phthisical Poison：打断时间翻倍为 10 回合，并造成永久四属性减益。" /> 下毒的英雄`,text:`下次 Rest 时使四项属性永久各 −已激活层数，并打断 10 回合。重复下毒增加待激活层数，下次休息进一步恶化。`,acquisition:`持有 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" /> 的人物完成 <CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" />。`,duration:`永久属性损伤；没有自然倒计时。`},{id:`character-2932765110-t-poisoner`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Esoteric Poisons`,category:`player`,eligible:`持有 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" /> 的 Agent`,text:`把 <CrossReference name="Poison Hero" href="?page=locations#entry-place-task-base-ch-poisonhero" meta="挑战" text="目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。" /> 的普通毒替换为 Phthisical <CrossReference name="Poison" href="?page=base-items#entry-poison" meta="物品" text="执行 Poison Hero 或 Silent Assassination 时，每回合额外增加 7 点挑战进度。使用后保留物品。" />：打断时间翻倍为 10 回合，并造成永久四属性减益。`,acquisition:`携带 <CrossReference name="Phthisical Vial" href="?page=base-items#entry-mod-2932765110-i-toxicvial" meta="物品" text="Intrigue +2，持有期间获得 Esoteric Poisons。
通过 Poison Hero 投毒后，目标在下次休息时受到双倍时长的 Disrupted，并永久降低 Might、Lore、Intrigue、Command 各 1；反复投毒可以增加这项永久惩罚。" />。`,duration:`失去全部对应物品后移除。`},{id:`character-2932765110-t-soulless`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Soulless`,category:`common`,eligible:`灵魂被夺取的人物`,text:`个人 Shadow 每回合 +0.3 个百分点，最高 100%。`,acquisition:`Soul Snare；女巫惩罚侵入教士的相应结果。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 后移除。`},{id:`character-2932765110-t-toad`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Toad Form`,category:`common`,eligible:`被变成蟾蜍的英雄、教士与统治者`,text:`Attack、Might、Intrigue、Lore、Command 各 −3；获得时解散全部随从。英雄与教士由 Toad 形态替代；统治者陷入 Gridlock，并开放 Squash Toad。`,acquisition:`Curse of Toad 家族诅咒。`,duration:`家族诅咒默认持续 10 回合；单位形态在对应转化结束后恢复。`},{id:`character-2932765110-t-transmutationmaster`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Weaver of Souls`,category:`player`,eligible:`已掌握 Curseweaving 的 Agent`,text:`Transpose Souls 时可选择保留哪一个灵魂。获得时另给两枚装有随机灵魂的 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" />。`,acquisition:`已有 <CrossReference name="Mastery of Curseweaving" href="#entry-character-2932765110-t-masterycurseweaving" meta="角色修正" text="以 Soulstone 中的灵魂施展家族诅咒与灵魂编织。加入 Magic Plague、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 Soulstone 与 1 Arcane Knowledge。" /> 后，在升级时选择。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2932765110-t-wanderer`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Insatiable Wanderlust`,category:`hero`,eligible:`受诅咒的自主英雄与教士`,text:`每完成一种任务，该类任务的执行意愿 −50，可累加；每回合恢复 1。另记录攻击、守卫、干扰等重复行为，抑制重复行动。`,acquisition:`Insatiable Wanderlust 家族诅咒；女巫惩罚侵入教士。`,duration:`成为 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 或玩家控制人物后移除。`},{id:`character-2932765110-temporary-sharedwisdom`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Shared Wisdom · Lore`,category:`mobile`,eligible:`停留在对应教团 Temple 的角色`,text:`Lore 加成为教义等级的相反数：−1/−2/−3 级分别 +1/+2/+3；+1/+2/+3 级分别 −1/−2/−3。`,acquisition:`Shared Wisdom 教义非 0 级，人物停留在该教团的 Temple。`,duration:`每次增减持续 1 回合；仍满足条件时每回合再次赋予。`},{id:`character-2932765110-curse-lycanthropy`,source:`2932765110`,sourceName:`Covens, Curses & Curios Recast`,name:`Curse of Lycanthropy`,category:`common`,eligible:`受诅咒家族的角色与统治者；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外`,text:`在同时启用 Living Wilds 时，为合格家族成员施加 <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色修正" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。" />。默认每 50 回合进入 Blood Moon，狼人形态持续 20 回合；女巫诅咒造成的狼人不获得传染他人的 <CrossReference name="Infectious Curse" href="#entry-character-2932110698-t-nature-werewolfinfectiousness" meta="角色修正" text="本人或随从在战斗中对符合条件的人物造成 HP 伤害，可传播 Lycanthropy。" />。`,acquisition:`<CrossReference name="Mastery of Curseweaving" href="#entry-character-2932765110-t-masterycurseweaving" meta="角色修正" text="以 Soulstone 中的灵魂施展家族诅咒与灵魂编织。加入 Magic Plague、Soul Trap 和 Study Curseweaving；抵达有 Fallen Human 的地点时增加对应 Capture Soul。
首次直接取得正等级时，获得一枚 Soulstone 与 1 Arcane Knowledge。" /> 至少 2 级，持有装有 <CrossReference name="Werewolf" href="?page=non-player-units#entry-npc-werewolf-hermit" meta="非玩家单位" text="初始 Shadow 取出生地点值，低于 50% 为明亮形态，达到 50% 为黑暗形态。在荒野时每回合向地点 Shadow 靠拢，最多变化 5 个百分点；达到 100% 后停止这种自然变化。没有灵魂，属于 Critter。
明亮形态驱逐荒野闯入者；黑暗形态袭击荒野及周边的非玩家人物，面对强敌时可先潜行跟踪。" /> 灵魂的 <CrossReference name="Soulstone" href="?page=base-items#entry-mod-2932765110-i-soulstone" meta="物品" text="空石用于 Capture Soul，将当地 Fallen Human 的灵魂与剩余强度储存在物品中。可按灵魂的职业选择其类型；Release Soul 将其放回所在地。
启用 Curseweaving 时，已捕获的灵魂可用于 Transpose Soul(s) 炼成物品，也可施展 Rite of Masks 及多种诅咒；黑暗阵营和怪物灵魂不适用诅咒。两个不同职业的灵魂可以组合炼成更高级的物品。
与 Living Wilds 同时启用时，还支持相关 Werewolf 灵魂与诅咒。" />，完成 Curseweaving: Curse of <CrossReference name="Lycanthropy" href="#entry-character-2932110698-t-nature-lycanthropy" meta="角色修正" text="每逢 Blood Moon（默认每 50 回合）进入狼人形态，默认持续 20 回合。通常会转为自主狩猎；自愿接受的英雄和教士保留正常活动倾向。
狼人形态获得 Feral Might，使基础属性与特质合计 Might 至少为 3；获得 Lupine Dominion，定期补充 Wolf。非自愿变形者还获得 Wilderness Creature，在人类聚居地每回合 Profile、Menace 各 +1，Lay Low 期间不增加。
非女巫诅咒造成的感染，在狼人形态还具有 Infectious Curse。变回时移除这些形态能力，保留 HP 和原人物。" />。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-2968835416-t-carryingprey`,source:`2968835416`,sourceName:`Community Library`,name:`Carrying Prey`,category:`npc`,eligible:`Cordyceps <CrossReference name="Drone" href="?god=cordyceps#entry-drone" meta="特殊人物与自主单位" text="由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。
设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。
探索时须 I &gt; 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。" />`,text:`显示 <CrossReference name="Drone" href="?god=cordyceps#entry-drone" meta="特殊人物与自主单位" text="由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。
设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。
探索时须 I &gt; 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。" /> 当前携带的 Prey 数量；送回 Hive 后作为虫群成长与封印推进的资源。`,acquisition:`Community <CrossReference name="Library" href="?page=points-of-interest#entry-location-sub-library" meta="兴趣点" text="每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。
执行地点：Library
Lore
Complexity: 5
Profile: 1000
Menace: 150
XP: 12
执行条件：携带已经封印的 Laughing Tome；Library 未渗透，当前神祇为 Iastur。&quot; image=&quot;/locations/game/i_laughingTomeBound.png&quot; /&gt;。

出现方式
城市与矮人据点的随机候选。

可出现地点
City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" /> 为 Cordyceps <CrossReference name="Drone" href="?god=cordyceps#entry-drone" meta="特殊人物与自主单位" text="由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。
设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。
探索时须 I &gt; 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。" /> 补充状态展示。`,duration:`与 <CrossReference name="Drone" href="?god=cordyceps#entry-drone" meta="特殊人物与自主单位" text="由 Infested Drone 或 Synchronised Infestation 转化的人物，变为自主收割单位，不再受玩家直接指挥。保留原人物的属性、物品与特质，但清空喜好和厌恶；原单位的随从不会转移，HP 按新单位初始化为 5。
设聚居地人口为 P、Infected Populace 强度为 I，每次收割人数 N = max(1，向下取整(min(20，max(2，向下取整(P ÷ 3))) × I ÷ 100))。人口减少 N，Drone 携带人数增加 N，自身 Menace +7、Profile +4；人口归零则地点沦为废墟。
探索时须 I &gt; 5，气味寻猎时须 I ≥ 1。到达 Hive 后，携带人数等量转入 Larval Mass 并推进封印。" /> 的实际 Prey 数同步。`},{id:`character-2968835416-t-prophet`,source:`2968835416`,sourceName:`Community Library`,name:`Prophet`,category:`mobile`,eligible:`被指定为教团 Prophet 的人物`,text:`显示其作为 Prophet 的教团归属，可同时记录多个教团。实际宗教影响权限由对应教团的 Prophet 身份提供。`,acquisition:`成为一个或多个教团的 Prophet。`,duration:`教团消失或 Prophet 身份转移后移除该归属；全部失去后移除特质。`},{id:`character-2968835416-t-vinervaseed`,source:`2968835416`,sourceName:`Community Library`,name:`Vinerva's Seed`,category:`player`,eligible:`持有 Vinerva 种子的 Agent`,text:`种子转为人物携带的数量；开放 Tempt Ruler，诱惑偏好 Ambition、Cruelty 或 Gold 的统治者。`,acquisition:`Community <CrossReference name="Library" href="?page=points-of-interest#entry-location-sub-library" meta="兴趣点" text="每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。
执行地点：Library
Lore
Complexity: 5
Profile: 1000
Menace: 150
XP: 12
执行条件：携带已经封印的 Laughing Tome；Library 未渗透，当前神祇为 Iastur。&quot; image=&quot;/locations/game/i_laughingTomeBound.png&quot; /&gt;。

出现方式
城市与矮人据点的随机候选。

可出现地点
City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" /> 将 Vinerva 种子以特质资源管理。`,duration:`消耗至 0 时移除，并撤去 Tempt Ruler。`},{id:`character-2980692812-t-memory-facelessmemoryinfection`,source:`2980692812`,sourceName:`Adolia, the Faceless Memory`,name:`Faceless Memory`,category:`common`,eligible:`受 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 感染、神力或治疗影响的人物`,text:`感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" />。玩家 Agent 的感染固定为 100，可自行决定是否 <CrossReference name="Embrace Adolia" href="?god=adolia#entry-embrace-adolia" meta="挑战" text="转化为可控制的 Adolia，保留姓名和四项基础属性，HP 重设为 5。原有特质和独有能力清除，获得 Supplicant 开局所选能力。" />。<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会在特质结算时摆脱感染。
强度至少 25 且为 12 的倍数时，40% 概率移除一项 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 的人物 Sanity −8，单位额外 Disrupted 3 回合。
<CrossReference name="Recollection" href="?god=adolia#entry-recollection" meta="神力" text="使 Faceless Memory 强度翻倍，随机移除一项 Adolia 以外的喜好或厌恶。" />、<CrossReference name="Conceptual Bleed" href="?god=adolia#entry-conceptual-bleed" meta="神力" text="选择一项概念标签，使对此有喜好或厌恶、拥有灵魂的非玩家人物单位及统治者感染 Faceless Memory，排除 Chosen One 与自主邪恶人物。已感染且满足存活、拥有灵魂及非黑暗阵营条件的人物，强度全部翻倍，无须匹配所选标签。" />、污染疗法会使强度翻倍；Intrusive Thought 与 <CrossReference name="Recursive Growth" href="?god=adolia#entry-recursive-growth" meta="英雄任务" text="自身感染强度 +10；若与已感染英雄或统治者交谈，改为双方各 +20。与未感染对象交谈时有 76% 概率感染对方；英雄交谈对象还被 Disrupted 3 回合。完成时 Profile +15、Menace +10。" /> 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。`,acquisition:`<CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 感染地点、Intrusive Thought、<CrossReference name="Conceptual Bleed" href="?god=adolia#entry-conceptual-bleed" meta="神力" text="选择一项概念标签，使对此有喜好或厌恶、拥有灵魂的非玩家人物单位及统治者感染 Faceless Memory，排除 Chosen One 与自主邪恶人物。已感染且满足存活、拥有灵魂及非黑暗阵营条件的人物，强度全部翻倍，无须匹配所选标签。" /> 与相关感染行动。`,duration:`<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 会摆脱感染；其他人物通过治疗压低感染，达到门槛后转化。`},{id:`character-2980692812-t-memory-mindeater`,source:`2980692812`,sourceName:`Adolia, the Faceless Memory`,name:`Mind Eater`,category:`common`,eligible:`受 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 感染、神力或治疗影响的人物`,text:`持续 25 回合，将 Might、Lore、Intrigue、Command 的基础贡献各压至 1；其余特质或物品加成仍另行结算。`,acquisition:`Mind Eater 神力。`,duration:`25 回合。`},{id:`character-2980692812-t-memory-arcaneremedy`,source:`2980692812`,sourceName:`Adolia, the Faceless Memory`,name:`Arcane Remedy`,category:`common`,eligible:`受 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 感染、神力或治疗影响的人物`,text:`持续 25 回合，每回合使 <CrossReference name="Faceless Memory" href="#entry-character-2980692812-t-memory-facelessmemoryinfection" meta="角色修正" text="感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。
强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。
Recollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。" /> 强度 −2，最低 0；叠加感染自然 +1 后，通常净减少 1。对 <CrossReference name="Cleansing Ritual" href="?god=adolia#entry-god-place-place-hook-2980692812-0--place-task-2980692812-ch-memory-shrinktraitholy" meta="兴趣点" text="感染强度减半；Cathedral 已 Desecrated 时改为翻倍。完成时 Profile +5。" />、<CrossReference name="Receive Arcane Remedy" href="?god=adolia#entry-receive-arcane-remedy" meta="英雄任务" text="正常疗法将感染强度减半，并获得 25 回合的 Arcane Remedy；污染疗法使感染强度翻倍。完成时 Profile +5。" />、<CrossReference name="Clear Mind" href="?god=adolia#entry-god-place-place-hook-2980692812-1--place-task-2980692812-ch-memory-shrinktraitlibrary" meta="兴趣点" text="感染强度减半；当地完全渗透时改为获得 Placebo。完成时 Profile +5。" />、<CrossReference name="Buy Local Remedy" href="?god=adolia#entry-god-place-place-hook-2980692812-1--place-task-2980692812-ch-memory-shrinktraitmarket" meta="兴趣点" text="消耗 30 Gold，使感染强度减半；当地完全渗透时改为获得 Placebo。完成时 Profile +5。" /> 的执行意愿各减少 100。`,acquisition:`<CrossReference name="Receive Arcane Remedy" href="?god=adolia#entry-receive-arcane-remedy" meta="英雄任务" text="正常疗法将感染强度减半，并获得 25 回合的 Arcane Remedy；污染疗法使感染强度翻倍。完成时 Profile +5。" />、<CrossReference name="Clear Mind" href="?god=adolia#entry-god-place-place-hook-2980692812-1--place-task-2980692812-ch-memory-shrinktraitlibrary" meta="兴趣点" text="感染强度减半；当地完全渗透时改为获得 Placebo。完成时 Profile +5。" /> 与正常治疗行动。`,duration:`25 回合。`},{id:`character-2980692812-t-memory-placebo`,source:`2980692812`,sourceName:`Adolia, the Faceless Memory`,name:`Placebo`,category:`common`,eligible:`受 <CrossReference name="Adolia" href="?god=adolia#entry-adolia-unit" meta="特殊人物与自主单位" text="感染达到 100 的人物会转化，保留姓名及四项基础数值，清除原有特质，失去灵魂、个人 Shadow 达到 100%。自主化身极端喜欢 Adolia、喜欢 Shadow，游走并执行传播任务；通过 Embrace Adolia 转化的化身可控制。
世界化身计数至少 10，或当地已有 Adolia Swarm 时，同地至少四个此类化身可合并为军队。" /> 感染、神力或治疗影响的人物`,text:`持续 25 回合，使 <CrossReference name="Cleansing Ritual" href="?god=adolia#entry-god-place-place-hook-2980692812-0--place-task-2980692812-ch-memory-shrinktraitholy" meta="兴趣点" text="感染强度减半；Cathedral 已 Desecrated 时改为翻倍。完成时 Profile +5。" /> 和 <CrossReference name="Receive Arcane Remedy" href="?god=adolia#entry-receive-arcane-remedy" meta="英雄任务" text="正常疗法将感染强度减半，并获得 25 回合的 Arcane Remedy；污染疗法使感染强度翻倍。完成时 Profile +5。" /> 的执行意愿各减少 100。`,acquisition:`被污染的购买疗法或治疗行动。`,duration:`25 回合。`},{id:`character-2988960487-t-cursepotofgreed`,source:`2988960487`,sourceName:`KeeperItemMod`,name:`Pot of Greed Curse`,category:`common`,eligible:`受 <CrossReference name="Pot of Greed" href="?page=base-items#entry-mod-2988960487-patch-i-bagofpoverty" meta="物品" text="交给英雄或统治者后，触发家族范围的 Pot of Greed Curse，并消耗物品。当前持有者对 Gold 的偏好提高两档，受诅咒家族成员每回合损失 2 Gold。" /> 家族诅咒影响的人物`,text:`每回合 Gold −2，最低 0。`,acquisition:`<CrossReference name="Pot of Greed" href="?page=base-items#entry-mod-2988960487-patch-i-bagofpoverty" meta="物品" text="交给英雄或统治者后，触发家族范围的 Pot of Greed Curse，并消耗物品。当前持有者对 Gold 的偏好提高两档，受诅咒家族成员每回合损失 2 Gold。" /> 产生的家族诅咒。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-2988960487-t-statboostpoteffect`,source:`2988960487`,sourceName:`KeeperItemMod`,name:`Potion Stat Boost`,category:`mobile`,eligible:`饮用属性药剂的人物`,text:`Might、Lore、Intrigue 或 Command 中与药剂对应的一项 +2。`,acquisition:`饮用相应 Stat Boost Potion。`,duration:`20 回合。`},{id:`character-3003549759-mt-dockyardbrawler`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Dockyard Brawler`,category:`minion`,eligible:`<CrossReference name="Orc Corsair" href="?page=minions#entry-orc-corsair" meta="随从" text="在海岸或海洋地点 Attack +2，达到 6；在海洋地点另有 Defence +2，达到 4。" />`,text:`每 5 回合若位于有人类聚居地且有 <CrossReference name="Docks" href="?page=points-of-interest#entry-location-sub-docks" meta="兴趣点" text="增加 0.2 Prosperity 影响值，并提供 Malign Catch、Plague Ships 与渗透。

出现方式
沿海 City 创建时固定配置。

可出现地点
City。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" /> 的地点，随机打断一名正在执行任务的敌对人物 1 回合；Lay Low、野外 Lay Low、<CrossReference name="Flee Beneath" href="?page=points-of-interest#entry-place-task-base-ch-fleebeneaththewaves" meta="挑战" text="进入隐藏状态；不移动或开始其他行动时，英雄无法攻击，每回合降低 1 Menace 与 Profile。" /> the Waves 不会被选中。成功后主人 Menace +5，不提高最低 Menace。`,acquisition:`<CrossReference name="Orc Corsair" href="?page=minions#entry-orc-corsair" meta="随从" text="在海岸或海洋地点 Attack +2，达到 6；在海洋地点另有 Defence +2，达到 4。" /> 自带。`,duration:`随随从存在而生效。`},{id:`character-3003549759-t-bloodfeud`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Blood Feud`,category:`mobile`,eligible:`杀死 <CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" /> 或招致该氏族仇恨的人物`,text:`对应 Orc 氏族的军队和 Upstart 永远视其为敌人；开放 End Blood Feud 仪式。`,acquisition:`杀死 <CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" />；Orc 氏族变更等特定行动。`,duration:`通过 End Blood Feud 处理，或持有者死亡。`},{id:`character-3003549759-t-brokenspirit`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Broken Spirit`,category:`common`,eligible:`受家族诅咒的英雄与统治者`,text:`统治者使领地 Security +1。任务或行动每具有一个 Ambition、Combat、Danger 正面标签，执行意愿 −20；Fund Army、Muster、<CrossReference name="Raise Army" href="?page=locations#entry-place-ruler-base-act-raisearmy" meta="统治者行动" text="创建一支 Human Army，成为当地驻军。" /> 不受这项行动意愿惩罚。`,acquisition:`Broken Spirit 家族诅咒。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3003549759-t-grott`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Orc Grott`,category:`mobile`,eligible:`饮用 Grott 的 Agent、英雄与教士`,text:`Might +1，Command +1。非 Orc 饮用通常还受到 2 HP 伤害；自动续饮也可能因此死亡。`,acquisition:`在 <CrossReference name="Seat of the Elders" href="?page=points-of-interest#entry-location-sub-orcculturecapital" meta="兴趣点" text="Orc 文化中心，提供 Grott 饮用、Drinking Horn 补充、三槽商品市场和 Reprimand Orc Upstart。使用 Ophanim 对应 Perfection 教义时，额外加入 Festival of Perfection。

出现方式
Orcs Plus 为部落文化选择首都，或部落分裂后重建文化中心时加入。

可出现地点
Orc Camp。
改建或覆灭后是否保留，还受对应流程限制。" />、Great Hall 饮用，或使用装满的 <CrossReference name="Drinking Horn" href="?page=base-items#entry-mod-3003549759-i-drinkinghorn" meta="物品" text="装满后可执行 Drink Orc Grott：40 回合内 Might +1、Command +1，重复饮用刷新持续时间。非兽人还会受到 2 HP 伤害，可能因此死亡。
饮用后变为空角杯，可在已渗透的兽人营地通过 Refill Drinking Horns 再次装满；在兽人饮酒挑战中也可装满。" />。`,duration:`40 回合；持有满 <CrossReference name="Drinking Horn" href="?page=base-items#entry-mod-3003549759-i-drinkinghorn" meta="物品" text="装满后可执行 Drink Orc Grott：40 回合内 Might +1、Command +1，重复饮用刷新持续时间。非兽人还会受到 2 HP 伤害，可能因此死亡。
饮用后变为空角杯，可在已渗透的兽人营地通过 Refill Drinking Horns 再次装满；在兽人饮酒挑战中也可装满。" /> 时可在结束后续饮。自主单位药效结束后会解散超出 Command 容量的随从。`},{id:`character-3003549759-t-reveredelder`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Revered Elder`,category:`npc`,eligible:`<CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" />`,text:`杀死该人物会引发其氏族的 <CrossReference name="Blood Feud" href="#entry-character-3003549759-t-bloodfeud" meta="角色修正" text="对应 Orc 氏族的军队和 Upstart 永远视其为敌人；开放 End Blood Feud 仪式。" />。没有 <CrossReference name="Orc Champion" href="?page=minions#entry-orc-champion" meta="随从" text="无特殊能力。" /> 时进行补充倒计时；计时器归零并且 Command 上限至少 3 时补充一名 Champion，必要时解散其他随从。Champion 为 5 HP、6 Attack、5 Defence，占 3 Command。`,acquisition:`<CrossReference name="Orc Elder" href="?page=non-player-units#entry-npc-orc-elder" meta="非玩家单位" text="Orc，无灵魂；每回合获得 3 XP。自主维护本族营地、外交、宗教活动，并约束过度暴露的 Orc Upstart。" /> 自带。`,duration:`补充计时器初始 10；仅在缺少 Champion 时递减，归零后的下一次结算补充并重置。`},{id:`character-3003549759-t-et-glory`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Blessing of Glory`,category:`player`,eligible:`由 The Broken Maker 从受 Curse of Glory 诅咒家族转化的 Agent`,text:`Might +当前等级。杀死结算时 Might 高于自己的角色单位时，等级 +1，上限 100。`,acquisition:`用 The Broken Maker 的造人神力转化具有 Curse of Glory 的家族成员。`,duration:`持续保留；没有固定回合倒计时。`,levels:`1–100`},{id:`character-3003549759-curse-eglory`,source:`3003549759`,sourceName:`Orcs Plus`,name:`Maker's Curse: Glory`,category:`common`,eligible:`受 The Broken Maker 诅咒的 Orc 家族成员`,text:`家族成员被人物，或具有人物身份的单位杀死时，诅咒强度 +1。创建 Agent 时会得到 <CrossReference name="Blessing of Glory" href="#entry-character-3003549759-t-et-glory" meta="角色修正" text="Might +当前等级。杀死结算时 Might 高于自己的角色单位时，等级 +1，上限 100。" />，之后可通过击杀更强的角色提升 Might。`,acquisition:`The Broken Maker 对 Orc 家族使用 Maker’s Curse: Glory。`,duration:`作用于同一家族的成员，家族诅咒或祝福保留期间持续生效。`},{id:`character-3192034838-t-bloodlust`,source:`3192034838`,sourceName:`Mirror God`,name:`Bloodlust`,category:`hero`,eligible:`Kalastrophe 选中的英雄`,text:`攻击人物时，抵消“对手过于危险”带来的效用惩罚，因而更可能主动攻击强敌。持续 20 回合，每回合倒计时 −1；重复施放延长 20 回合。`,acquisition:`Bloodlust 神力。`,duration:`20 回合；重复施放延长 20 回合。`},{id:`character-3192034838-t-paranoia`,source:`3192034838`,sourceName:`Mirror God`,name:`Paranoia`,category:`hero`,eligible:`Kalastrophe 选中的英雄`,text:`每回合把当前及最低 Profile 设为 0、当前及最低 Menace 设为 100。持续 20 回合，结束时还原首次施放前记录的四个值；重复施放只延长时间。`,acquisition:`Paranoia 神力。`,duration:`20 回合；重复施放只延长时间。`},{id:`character-3192034838-t-seedofchaos`,source:`3192034838`,sourceName:`Mirror God`,name:`Seed of Chaos`,category:`common`,eligible:`Kalastrophe 选中的人物`,text:`记录施加时的 Insane 等级。后续回合发现等级上升时，先在当前等级 ≤3 时追加一次疯狂，再在更新后的等级 ≤4 时追加一次；随后移除此特质。最多额外触发两次，并有一次回合检查的延迟。`,acquisition:`Seed of Chaos 神力。`,duration:`检测到新的疯狂层数、追加疯狂后移除。`},{id:`character-3192034838-t-doomcountdown`,source:`3192034838`,sourceName:`Mirror God`,name:`Doomed`,category:`mobile`,eligible:`End 神力选中的人物`,text:`每回合倒计时 −1，10 回合后摧毁持有者所在聚居地、移除当地 Human Outpost，然后杀死持有者。重复施放会添加独立倒计时。`,acquisition:`对应毁灭倒计时神力。`,duration:`10 回合后毁灭所在地并死亡；重复施放分别计时。`},{id:`character-3192034838-t-fastruins`,source:`3192034838`,sourceName:`Mirror God`,name:`Tomb Sense`,category:`player`,eligible:`Kalastrophe 选中的 Agent`,text:`执行 <CrossReference name="Explore Ruins" href="?god=kalastrophe#entry-explore-ruins" meta="挑战" text="完成一次遗迹探索并按本体探索事件决定所得与风险。Tomb Sense 每回合额外提供 3 进度；我方在 Shadow &gt;50% 的地点还获得本体额外 1 进度。" /> 时，每回合额外增加 3 进度。没有持续时间限制。`,acquisition:`Tomb Sense 神力。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3232578780-t-pawn`,source:`3232578780`,sourceName:`Out of Gods`,name:`Potential Pawn / Pawn`,category:`common`,eligible:`Shadow Counsel 选中的英雄、<CrossReference name="Orc Upstart" href="?page=non-player-units#entry-npc-orc-upstart" meta="非玩家单位" text="在本 Horde 的 Orc Camp 执行掠夺、休息和补充随从；每回合获得 3 XP，并自主分配技能点。Horde 消亡后自身也会消失。" /> 与统治者`,text:`每回合 Shadow +10 个百分点，Awareness +5 个百分点。检查时 Shadow 已超过 90% 后转为完整 Pawn：英雄交给玩家控制，统治者每回合渗透领地全部可渗透兴趣点，并可被相关神力操纵。
每回合开始若 Awareness =100% 且 Shadow <50%，人物挣脱成为 <CrossReference name="Forsaken" href="#entry-character-3232578780-t-forsaken" meta="角色修正" text="作为被放弃的身份标记，排除后续 Pawn 操纵。挣脱控制还会使人物极端厌恶 Shadow；统治者的普通喜恶被清空，领地已渗透设施恢复未渗透。" />；统治者还会撤销领地渗透。`,acquisition:`Ensnare 神力。`,duration:`维持到挣脱控制或被 Forsake；转化过程没有单独倒计时。`},{id:`character-3232578780-t-forsaken`,source:`3232578780`,sourceName:`Out of Gods`,name:`Forsaken`,category:`common`,eligible:`被 Shadow Counsel 放弃或自行挣脱的 Pawn`,text:`作为被放弃的身份标记，排除后续 Pawn 操纵。挣脱控制还会使人物极端厌恶 Shadow；统治者的普通喜恶被清空，领地已渗透设施恢复未渗透。`,acquisition:`Forsake；Pawn 在 Awareness =100%、Shadow <50% 时挣脱。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3232578780-t-reflexes`,source:`3232578780`,sourceName:`Out of Gods`,name:`Heightened Reflexes / Exhausted Reflexes`,category:`player`,eligible:`被 Paradoxis 加速的 Agent`,text:`<CrossReference name="Heightened Reflexes" href="?god=paradoxis#entry-heightened-reflexes" meta="人物特质" text="获得时增加 50 Defence。下一次特质回合结算时变为 Exhausted Reflexes，失去 Defence 加成；该特质继续保留，因此同一人物无法再次接受 Temporal Blueshift 3: Hasten。" /> 状态 Defence +50。`,acquisition:`Blue Shift 神力的对应强化。`,duration:`到下一次回合结算改为 Exhausted Reflexes，失去加成。`},{id:`character-3261852980-event-ascended-lore`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Ascended Lore`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="The temptation" href="?page=events#entry-event-3261852980-maeredux-midch-arcane-temptation" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

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

单次候选检查概率：100%。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-glimpse-of-the-beyond`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Glimpse of the Beyond`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-iastur" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · The first, the great game, the mad creator, the Laughing King（25%）：Might +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-iastur" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · The first, the great game, the mad creator, the Laughing King（25%）：Lore +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-iastur" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · The first, the great game, the mad creator, the Laughing King（25%）：Intrigue +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-iastur" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · The first, the great game, the mad creator, the Laughing King（25%）：Command +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-ophanim" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · HOLY IS THE LORD OF HOSTS, PRAISE HIM!：Command +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-snake" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · The true god, glorious and eternal Wyrm：Might +1（999 回合）。
<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-vinerva" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> · Nature Herself, the garden of life.：Intrigue +1（999 回合）。`,acquisition:`通过 <CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-iastur" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" />、<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-ophanim" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" />、<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-snake" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" />、<CrossReference name="A Glimpse Of The Greater Things" href="?page=events#entry-event-3261852980-maeredux-god-dream-vinerva" meta="事件" text="玩家 Agent 执行任务期间，在途中事件检查中抽取。

触发条件
「A Glimpse Of The Greater Things · 进度 2」剧情记录 = 0
并且 不满足（当前单位是 The Harvester）
并且 正在执行 Lore 属性任务
并且 回合 小于 375
并且 （当前神祇是 She Who Will Feast；或者 当前神祇是 Iastur；或者 当前神祇是 Ophanim；或者 当前神祇是 Vinerva；或者 当前神祇是 Mammon）。

抽选权重：0.05。" /> 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`},{id:`character-3261852980-event-nobleconnections`,source:`3261852980`,sourceName:`Event Pack Redux`,name:`Noble Connections`,category:`player`,eligible:`满足事件条件的 Human、Elf 或 Orc 玩家 Agent`,text:`在 City 执行行动时 Security −1。`,acquisition:`Noble Connections 事件选择 Hand the social climber the ladder。事件要求当地有对该人物持正面态度的统治者、Agent 的 Menace <20，且本局尚未通过此事件获得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3320562229-t-factory-construct`,source:`3320562229`,sourceName:`Aberrant Metal`,name:`Aberrant Construct`,category:`npc`,eligible:`<CrossReference name="Aberrant Miner" href="?god=aberrant-metal#entry-aberrant-miner" meta="特殊人物与自主单位" text="由 Repurposed Structures 组装的自主单位。具有 Aberrant Construct 与 Mining Unit；所属核心消失时死亡。HP 上限每回合随出生地 Core Efficiency 更新，上限提高不自动恢复 HP。
倾向到有 Eldritch Smog 的地点执行 Mining Protocol；也能休息恢复。" />、Recycler、Repomen`,text:`标记由 <CrossReference name="Production Core" href="?god=aberrant-metal#entry-production-core" meta="兴趣点" text="替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。
所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。
提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。

出现方式
Begin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。
改建或覆灭后是否保留，还受对应流程限制。" /> 维持的构造体，HP 上限随其出生地 <CrossReference name="Core Efficiency" href="?god=aberrant-metal#entry-core-efficiency" meta="地点修正" text="决定 Production Core 的产量：每回合 1 + ⌊强度/25⌋ Units。人类类城市的上限等于人口，Deep One Abyssal City 的上限等于其人口整数部分。
Orc Fortress 的上限为 ⌊当地 Orcish Industry × 0.35 × 难度倍率 × Orc 强度设置⌋ × (1 + 合格相邻 Orc Camp 数)；合格邻地需要有 Orcish Industry。代码按当地工业值重复计入各邻地。" /> 变化。`,acquisition:`对应 Aberrant Construct 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3320562229-t-factory-gatherer`,source:`3320562229`,sourceName:`Aberrant Metal`,name:`Mining Unit`,category:`npc`,eligible:`<CrossReference name="Aberrant Miner" href="?god=aberrant-metal#entry-aberrant-miner" meta="特殊人物与自主单位" text="由 Repurposed Structures 组装的自主单位。具有 Aberrant Construct 与 Mining Unit；所属核心消失时死亡。HP 上限每回合随出生地 Core Efficiency 更新，上限提高不自动恢复 HP。
倾向到有 Eldritch Smog 的地点执行 Mining Protocol；也能休息恢复。" />`,text:`采矿职责标记：建立与维护 <CrossReference name="Aberrant Mining" href="?god=aberrant-metal#entry-aberrant-mining-modifier" meta="地点修正" text="每回合产出 max(1,⌊强度/25⌋) Units。Habitability 减少 强度 × 0.002。每回合对领地地块以 40% 概率增加 5 点地形破坏，并使普通人类类聚居地 Devastation +2。上限 100，废墟中仍保留。" />，支持出生地 <CrossReference name="Production Core" href="?god=aberrant-metal#entry-production-core" meta="兴趣点" text="替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。
所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。
提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。

出现方式
Begin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。
改建或覆灭后是否保留，还受对应流程限制。" /> 的 Efficiency。`,acquisition:`对应 <CrossReference name="Aberrant Construct" href="#entry-character-3320562229-t-factory-construct" meta="角色修正" text="标记由 Production Core 维持的构造体，HP 上限随其出生地 Core Efficiency 变化。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3320562229-t-factory-recycler`,source:`3320562229`,sourceName:`Aberrant Metal`,name:`Recycling Unit`,category:`npc`,eligible:`<CrossReference name="Aberrant Recycler" href="?god=aberrant-metal#entry-aberrant-recycler" meta="特殊人物与自主单位" text="由 Biometallic Mass 组装的自主单位。具有 Aberrant Construct 与 Recycling Unit；所属核心消失时死亡。HP 上限每回合更新，上限提高不自动恢复 HP。
执行 Recycling Protocol 建立或维护污染回收场；当地 Death 越高，执行倾向越高。" />`,text:`回收职责标记：在 <CrossReference name="Aberrant Mining" href="?god=aberrant-metal#entry-aberrant-mining-modifier" meta="地点修正" text="每回合产出 max(1,⌊强度/25⌋) Units。Habitability 减少 强度 × 0.002。每回合对领地地块以 40% 概率增加 5 点地形破坏，并使普通人类类聚居地 Devastation +2。上限 100，废墟中仍保留。" /> 地点建立与维护 <CrossReference name="Aberrant Recycling" href="?god=aberrant-metal#entry-aberrant-recycling-modifier" meta="地点修正" text="每回合产出 1 Unit，Habitability 减少 强度 × 0.004。每回合生成 Eldritch Smog，并使普通人类类聚居地 Devastation +0.2。上限 100，废墟中仍保留。" />，继续产生 <CrossReference name="Eldritch Smog" href="?god=aberrant-metal#entry-eldritch-smog" meta="地点修正" text="烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。
普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。" />。`,acquisition:`对应 <CrossReference name="Aberrant Construct" href="#entry-character-3320562229-t-factory-construct" meta="角色修正" text="标记由 Production Core 维持的构造体，HP 上限随其出生地 Core Efficiency 变化。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3320562229-t-factory-repo`,source:`3320562229`,sourceName:`Aberrant Metal`,name:`Reposession Unit`,category:`npc`,eligible:`<CrossReference name="Aberrant Repomen" href="?god=aberrant-metal#entry-aberrant-repomen" meta="特殊人物与自主单位" text="由 Churning Machinery 组装的自主单位。具有 Aberrant Construct 与 Reposession Unit；所属核心消失时死亡。HP 上限每回合更新，上限提高不自动恢复 HP。
到有 Shadow 且没有 Core Efficiency 的人类类聚居地搬运人口。" />`,text:`人口转运职责标记：从其他聚居地带走人口，送回自身 <CrossReference name="Production Core" href="?god=aberrant-metal#entry-production-core" meta="兴趣点" text="替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。
所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。
提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。

出现方式
Begin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。
改建或覆灭后是否保留，还受对应流程限制。" />。`,acquisition:`对应 <CrossReference name="Aberrant Construct" href="#entry-character-3320562229-t-factory-construct" meta="角色修正" text="标记由 Production Core 维持的构造体，HP 上限随其出生地 Core Efficiency 变化。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3320562229-mt-factorygod-laborer`,source:`3320562229`,sourceName:`Aberrant Metal`,name:`Aberrant Labor`,category:`minion`,eligible:`<CrossReference name="Aberrant Laborer" href="?god=aberrant-metal#entry-aberrant-laborer" meta="随从" text="Recruit Laborer 免费招募。" />`,text:`当地 <CrossReference name="Eldritch Smog" href="?god=aberrant-metal#entry-eldritch-smog" meta="地点修正" text="烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。
普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。" /> ≥50 时，主人执行非 <CrossReference name="Other" href="?page=minions#entry-other" meta="随从" text="无特殊能力。" /> 属性任务的进度每回合额外 +1。`,acquisition:`<CrossReference name="Aberrant Laborer" href="?god=aberrant-metal#entry-aberrant-laborer" meta="随从" text="Recruit Laborer 免费招募。" /> 自带。`,duration:`随随从存在而生效。`},{id:`character-3383875039-t-web-devoured`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Devoured`,category:`common`,eligible:`加入 the Devoured 的人物`,text:`成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 <CrossReference name="Devoured Court" href="?god=alai#entry-devoured-court" meta="地点修正" text="Security −2，提供 Exorcise Devoured。Devoured 统治者缺失、退出该家族，或地点不再是人类类聚居地时移除；聚居地毁灭时也移除。" />，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 <CrossReference name="Ensnare" href="?god=alai#entry-ensnare" meta="机制" />，<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 除外；持有的每名 <CrossReference name="Devoured Puppet" href="?god=alai#entry-devoured-puppet" meta="随从" text="名称为 Puppet 加人物名，肖像沿用原人物。通过 Ensnare 收服时，保留目标当前 HP；战斗后选择复活为 Puppet 时恢复满血，Loyal Attendant 也以满血加入。
作为随从时 Attack 固定为 3，原人物的能力与装备保留供释放后使用。解散或通过 Release 释放时，存活人物返回地图；Puppet 在战斗中死亡后，若仍有灵魂，会在主人最后所在地点留下 Soul。" /> 都可通过 <CrossReference name="Release" href="?god=alai#entry-release-puppet" meta="机制" /> 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。`,acquisition:`Devour、继承家族或相关转化事件。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-broodmentality`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Brood Mentality`,category:`common`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的人物`,text:`获得时，对自身家族的偏好提高一级。通过 the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的家族诅咒获得时，提高的是对 the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的偏好。`,acquisition:`选择 Brood Mentality 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-predatoryinstinct`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Predatory Instinct`,category:`common`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的人物`,text:`攻击其他家族人物的意愿 +30，保护他们的意愿 −30。挑战、统治者行动和国家行动若有利于其他家族，执行意愿 −30；否则，若不利于其他家族，执行意愿 +30。每次行动至多应用一次这项修正。`,acquisition:`选择 Predatory Instinct 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-psychicempathy`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Psychic Empathy`,category:`ruler`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的统治者`,text:`作为统治者时，每回合使领地已有 <CrossReference name="Unrest" href="?god=alai#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。
Beckoning Hands 根据其强度计算离去人口。" />、<CrossReference name="Devastation" href="?god=alai#entry-devastation" meta="地点修正" text="Prosperity 减少当前数值÷200；食物乘数为 max(0.1,1−当前数值÷200)。达到 300 时，非教程下摧毁尚非 City Ruins 的聚居地。Beckoning Hands 读取它计算离去人口。" /> 各减少 2 点；若本国君主也是 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" />，已有 <CrossReference name="Political Agitation" href="?god=alai#entry-political-agitation" meta="地点修正" text="地方统治者反对君主的政治活动，推动首都 Political Instability 并增加内战风险。" /> 也减少 2 点。`,acquisition:`选择 Psychic Empathy 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-calltoslumber`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Call to Slumber`,category:`hero`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的自主英雄与教士`,text:`Rest & Resupply 中，由连续完成挑战数产生的休息意愿提高至 3 倍，故乡原有的双倍加成照常生效。拥有该能力的人物休息时，每回合 Power +0.02，最高恢复至神力上限。`,acquisition:`选择 Call to Slumber 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-rebirthvenom`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Rebirth Venom`,category:`hero`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的自主英雄与教士`,text:`选择 Rebirth Venom 后，自主行动的 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 在战斗中杀死另一名自主行动、尚未加入 the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的英雄或教士时，可通过对应事件使其满血复活并加入 the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" />。复活后，双方对彼此的偏好各提高一级。`,acquisition:`选择 Rebirth Venom 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-parallelthoughts`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Parallel Thoughts`,category:`common`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的人物`,text:`同地有另一名 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 人物，或当地另有一名 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 统治者时，Might、Lore、Intrigue、Command 各 +1。加成以地图上的人物和当地统治者为判定对象，多名同伴提供的加成相同。`,acquisition:`选择 Parallel Thoughts 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-restitchingsinews`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Restitching Sinews`,category:`mobile`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的人物单位`,text:`人物单位每回合恢复 1 HP，最高至自身上限。选择 Restitching Sinews 后，<CrossReference name="Devoured Puppet" href="?god=alai#entry-devoured-puppet" meta="随从" text="名称为 Puppet 加人物名，肖像沿用原人物。通过 Ensnare 收服时，保留目标当前 HP；战斗后选择复活为 Puppet 时恢复满血，Loyal Attendant 也以满血加入。
作为随从时 Attack 固定为 3，原人物的能力与装备保留供释放后使用。解散或通过 Release 释放时，存活人物返回地图；Puppet 在战斗中死亡后，若仍有灵魂，会在主人最后所在地点留下 Soul。" /> 也每回合恢复 1 HP；释放时沿用恢复后的 HP。`,acquisition:`选择 Restitching Sinews 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-nightmareweaving`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Nightmare Weaving`,category:`common`,eligible:`the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的人物`,text:`每回合使所在地已有 <CrossReference name="Unrest" href="?god=alai#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。
Beckoning Hands 根据其强度计算离去人口。" />、<CrossReference name="Plague" href="?god=alai#entry-plague" meta="地点修正" text="Prosperity 减少当前数值×0.003。普通人类类聚居地内，数值不高于 100 时按每回合数值÷450 累积人口死亡并增加 1 Death；超过 100 改为数值÷300 和 2 Death。整数人口损失结算后保留小数余量。
达到 300 时摧毁聚居地；每回合使 Unrest 增加 ⌊数值÷100⌋+1。超过 60 后可向疾病低于自身一半的相邻人类类聚居地传播，有 Quarantine 时传播门槛为 140。
Beckoning Hands 根据其数值计算离去人口。" />、<CrossReference name="Devastation" href="?god=alai#entry-devastation" meta="地点修正" text="Prosperity 减少当前数值÷200；食物乘数为 max(0.1,1−当前数值÷200)。达到 300 时，非教程下摧毁尚非 City Ruins 的聚居地。Beckoning Hands 读取它计算离去人口。" /> 各增加 1 点强度。`,acquisition:`选择 Nightmare Weaving 后，由家族诅咒赋予。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-opensoul`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Open Soul`,category:`common`,eligible:`<CrossReference name="Share Soul" href="?god=alai#entry-share-soul" meta="神力" text="首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。" /> 首次选中的人物`,text:`<CrossReference name="Share Soul" href="?god=alai#entry-share-soul" meta="神力" text="首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。" /> 的待配对状态。再次选择同一人物可取消；选择另一名符合条件的人物后，双方获得 <CrossReference name="Shared Soul" href="#entry-character-3383875039-t-web-sharedsoul" meta="角色修正" text="双方共享较高的基础 Might、Lore、Intrigue、Command，以及升级获得的对应属性加成；较低者补足至较高者的数值。物品和 Parallel Thoughts 等其他加成仍各自结算。共享不受距离影响，一方死亡后另一方失去 Shared Soul。" />，开始共享较高的四项基础属性。`,acquisition:`<CrossReference name="Share Soul" href="?god=alai#entry-share-soul" meta="神力" text="首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。" />。`,duration:`再次选择同一人物取消；完成配对时转为 <CrossReference name="Shared Soul" href="#entry-character-3383875039-t-web-sharedsoul" meta="角色修正" text="双方共享较高的基础 Might、Lore、Intrigue、Command，以及升级获得的对应属性加成；较低者补足至较高者的数值。物品和 Parallel Thoughts 等其他加成仍各自结算。共享不受距离影响，一方死亡后另一方失去 Shared Soul。" />。`},{id:`character-3383875039-t-web-sharedsoul`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Shared Soul`,category:`common`,eligible:`<CrossReference name="Share Soul" href="?god=alai#entry-share-soul" meta="神力" text="首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。" /> 配对的两个人物`,text:`双方共享较高的基础 Might、Lore、Intrigue、Command，以及升级获得的对应属性加成；较低者补足至较高者的数值。物品和 <CrossReference name="Parallel Thoughts" href="#entry-character-3383875039-t-web-parallelthoughts" meta="角色修正" text="同地有另一名 Devoured 人物，或当地另有一名 Devoured 统治者时，Might、Lore、Intrigue、Command 各 +1。加成以地图上的人物和当地统治者为判定对象，多名同伴提供的加成相同。" /> 等其他加成仍各自结算。共享不受距离影响，一方死亡后另一方失去 Shared Soul。`,acquisition:`<CrossReference name="Share Soul" href="?god=alai#entry-share-soul" meta="神力" text="首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。" /> 完成配对。`,duration:`一方死亡后，另一方失去 Shared Soul。`},{id:`character-3383875039-t-web-releasedgrasp`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Released Grasp`,category:`hero`,eligible:`被释放为自主英雄或教士的原 Agent`,text:`人物作为自主行动的英雄或教士时，每回合 Profile、Menace 各降低 1.5，最低 0，并可降低相应最低值。重新受控后此效果结束。
<CrossReference name="Release Grasp" href="?god=alai#entry-release-grasp" meta="神力" text="解除控制并清空任务，将 Agent 放回自主行动；专属 Agent 会转为英雄。赋予 Released Grasp，自主行动期间每回合 Profile、Menace 各减少 1.5，最低为 0，并可降低两项下限。通常清空 Shadow；已选 Smothering Hands 时保留 Shadow。重新控制后移除 Released Grasp。当地有 Nexus，或目标侍僧所属教团的 Sacred Inspiration 等级不高于 0 时，施放后返还 1 Power。" /> 通常还会清空个人 Shadow；选择 <CrossReference name="Smothering Hands" href="?god=alai#entry-smothering-hands" meta="神力" text="将目标人物 Shadow 设为 100%。选定本项后，Release Grasp 永久不再清除被释放人物的 Shadow。" /> 时则保留。`,acquisition:`<CrossReference name="Release Grasp" href="?god=alai#entry-release-grasp" meta="神力" text="解除控制并清空任务，将 Agent 放回自主行动；专属 Agent 会转为英雄。赋予 Released Grasp，自主行动期间每回合 Profile、Menace 各减少 1.5，最低为 0，并可降低两项下限。通常清空 Shadow；已选 Smothering Hands 时保留 Shadow。重新控制后移除 Released Grasp。当地有 Nexus，或目标侍僧所属教团的 Sacred Inspiration 等级不高于 0 时，施放后返还 1 Power。" />。`,duration:`重新被玩家控制后结束。`},{id:`character-3383875039-t-web-suppressedtrait`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`X: …`,category:`hero`,eligible:`<CrossReference name="Released Agent" href="?god=alai#entry-released-agent" meta="特殊人物与自主单位" text="原 Agent 经 Release Grasp 释放后，以英雄身份自主行动，保留姓名、肖像、四项基础属性、等级和物品。当前 HP、HP 上限、随从、Profile、Menace 及其最低值均沿用原人物状态。
重新控制时，恢复原 Agent 的专属能力，并带回释放期间的 HP、随从与 Profile、Menace 变化。释放期间可使用 Drop Item Cache 及 Devoured 提供的仪式，部分原有能力暂时受到压制。" />`,text:`<CrossReference name="Released Agent" href="?god=alai#entry-released-agent" meta="特殊人物与自主单位" text="原 Agent 经 Release Grasp 释放后，以英雄身份自主行动，保留姓名、肖像、四项基础属性、等级和物品。当前 HP、HP 上限、随从、Profile、Menace 及其最低值均沿用原人物状态。
重新控制时，恢复原 Agent 的专属能力，并带回释放期间的 HP、随从与 Profile、Menace 变化。释放期间可使用 Drop Item Cache 及 Devoured 提供的仪式，部分原有能力暂时受到压制。" /> 暂时压制部分原有能力，重新受控后恢复其先前状态。可被压制的能力包括 Howl: <CrossReference name="Madness" href="?god=alai#entry-madness" meta="地点修正" text="普通疯狂使 Prosperity 减少当前数值×0.003；超过 100 后增加 Unrest 并侵蚀统治者 Sanity。达到 300 时回落到 150；当地符合条件且没有 Madness Effect 时，产生一种本体疯狂后效。
Carrying Hands 向没有疯狂的目标转移时会产生普通疯狂；目标已有 Alai's Madness 时增加专属疯狂。Soul Tangle 可将普通疯狂转换为专属版本。" />、Howl: Sin、Dark Aristocracy、They Will Obey、Epidemiologist、Mortician、Pickpocket Primate、Duality、Inquisitor、Leader of the Faith、Preacher、The Dying Light、The Setting Sun、Maddening Tongues。`,acquisition:`<CrossReference name="Release Grasp" href="?god=alai#entry-release-grasp" meta="神力" text="解除控制并清空任务，将 Agent 放回自主行动；专属 Agent 会转为英雄。赋予 Released Grasp，自主行动期间每回合 Profile、Menace 各减少 1.5，最低为 0，并可降低两项下限。通常清空 Shadow；已选 Smothering Hands 时保留 Shadow。重新控制后移除 Released Grasp。当地有 Nexus，或目标侍僧所属教团的 Sacred Inspiration 等级不高于 0 时，施放后返还 1 Power。" /> 暂时压制不适用于释放形态的原有能力。`,duration:`重新被玩家控制后恢复原有特质。`},{id:`character-3383875039-t-web-alaisembraced`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Alai's Chosen`,category:`npc`,eligible:`Alai’s <CrossReference name="Embraced" href="?god=alai#entry-embraced" meta="特殊人物与自主单位" text="由 Awaken Crusader、Awaken Emissary、Awaken Enchanter 或 Awaken Weaver 转化 Devoured 英雄、教士，或已有人物单位的统治者。所选形态决定所有 Embraced 的称号和行动：Crusader 制造 Ravagers；Emissary 将领地纳入或创立 Dark Empire；Enchanter / Enchantress 清除 Awareness；Weaver 使其他人物加入 the Devoured。
转化时保留人物的基础四维、等级、物品与大部分能力，HP 重设为 5/5，Profile 设为 20，Menace 从 0 开始，随从重新由 Alai's Chosen 补充。转化后成为无灵魂的 Monster，个人 Shadow 为 100%，自主行动。原有 Lycanthropy 与 Feral Might 相关特质会在人物转化时移除。" />`,text:`首次获得时，立即尝试生成最多三名 <CrossReference name="Emanation" href="?god=alai#entry-emanation" meta="随从" text="由 Alai's Chosen 生成，三种外观的战斗数值相同。" />。之后每逢全局回合号为 5 的倍数，尝试补充一名。每次需要空随从槽，且剩余 Command 至少为 1。三种 <CrossReference name="Emanation" href="?god=alai#entry-emanation" meta="随从" text="由 Alai's Chosen 生成，三种外观的战斗数值相同。" /> 外观的战斗数值相同。`,acquisition:`成为 Alai’s <CrossReference name="Embraced" href="?god=alai#entry-embraced" meta="特殊人物与自主单位" text="由 Awaken Crusader、Awaken Emissary、Awaken Enchanter 或 Awaken Weaver 转化 Devoured 英雄、教士，或已有人物单位的统治者。所选形态决定所有 Embraced 的称号和行动：Crusader 制造 Ravagers；Emissary 将领地纳入或创立 Dark Empire；Enchanter / Enchantress 清除 Awareness；Weaver 使其他人物加入 the Devoured。
转化时保留人物的基础四维、等级、物品与大部分能力，HP 重设为 5/5，Profile 设为 20，Menace 从 0 开始，随从重新由 Alai's Chosen 补充。转化后成为无灵魂的 Monster，个人 Shadow 为 100%，自主行动。原有 Lycanthropy 与 Feral Might 相关特质会在人物转化时移除。" />。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-oblivion`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Oblivion`,category:`common`,eligible:`受 Enchanting 影响的英雄、教士或统治者`,text:`Warn the World 的执行意愿 −50。教士所属教团的 Awareness 教义等级不低于 0 时，传播 Awareness 的意愿也降低 50。作为君主时，组建 Alliance 的意愿降低 50；其他全局抑制效果优先生效时，按对应效果结算。
<CrossReference name="Enchanting" href="?god=alai#entry-enchanting" meta="机制" /> 完成时会清空相关人物的 Awareness，并授予此能力，持续降低后续传播意愿。`,acquisition:`Enchanting 完成后取得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-remade`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Other's Touch`,category:`hero`,eligible:`<CrossReference name="the Remade" href="?god=alai#entry-the-remade" meta="特殊人物与自主单位" text="特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。
全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。" />`,text:`<CrossReference name="the Remade" href="?god=alai#entry-the-remade" meta="特殊人物与自主单位" text="特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。
全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。" /> 攻击 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 人物的意愿 +100；同时属于 Alliance 且符合条件时，还可增加 20。被其在战斗中击败的 <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 英雄、教士或 Agent，可通过对应事件满血复活、清空个人 Shadow、解除控制并恢复先前家族；<CrossReference name="Embraced" href="?god=alai#entry-embraced" meta="特殊人物与自主单位" text="由 Awaken Crusader、Awaken Emissary、Awaken Enchanter 或 Awaken Weaver 转化 Devoured 英雄、教士，或已有人物单位的统治者。所选形态决定所有 Embraced 的称号和行动：Crusader 制造 Ravagers；Emissary 将领地纳入或创立 Dark Empire；Enchanter / Enchantress 清除 Awareness；Weaver 使其他人物加入 the Devoured。
转化时保留人物的基础四维、等级、物品与大部分能力，HP 重设为 5/5，Profile 设为 20，Menace 从 0 开始，随从重新由 Alai's Chosen 补充。转化后成为无灵魂的 Monster，个人 Shadow 为 100%，自主行动。原有 Lycanthropy 与 Feral Might 相关特质会在人物转化时移除。" /> 除外。`,acquisition:`相关反制剧情使人物转化为 <CrossReference name="the Remade" href="?god=alai#entry-the-remade" meta="特殊人物与自主单位" text="特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。
全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。" />。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3383875039-t-web-acceleratedprophecy`,source:`3383875039`,sourceName:`Alai, God of Webs`,name:`Accelerated Prophecy`,category:`hero`,eligible:`<CrossReference name="the Remade" href="?god=alai#entry-the-remade" meta="特殊人物与自主单位" text="特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。
全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。" /> 与相应阶段的 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" />`,text:`获得时连续尝试补充三名 <CrossReference name="Embodiment" href="?god=alai#entry-embodiment" meta="随从" text="由 Accelerated Prophecy 生成，随相应剧情阶段的 Chosen One 与 the Remade 出现。补充时优先空随从槽，满员时替换最后一名 Sellsword 或 Knight。生成无需预留 Command 容量，每名 Embodiment 的 Command 消耗为 1。" />，之后每逢全局回合号为 5 的倍数尝试补充一名。每次优先填入首个空随从槽，满员时替换最后一名 <CrossReference name="Sellsword" href="?page=minions#entry-sellsword" meta="随从" text="无特殊能力。" /> 或 <CrossReference name="Knight" href="?page=minions#entry-knight" meta="随从" text="无特殊能力。" />。补充无需预留 Command 容量。
<CrossReference name="the Remade" href="?god=alai#entry-the-remade" meta="特殊人物与自主单位" text="特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。
全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。" /> 以及相应剧情阶段的 <CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 可获得此能力。英雄或教士被 Devour 后，会失去此能力及已有 <CrossReference name="Embodiment" href="?god=alai#entry-embodiment" meta="随从" text="由 Accelerated Prophecy 生成，随相应剧情阶段的 Chosen One 与 the Remade 出现。补充时优先空随从槽，满员时替换最后一名 Sellsword 或 Knight。生成无需预留 Command 容量，每名 Embodiment 的 Command 消耗为 1。" />。`,acquisition:`反制 the <CrossReference name="Devoured" href="#entry-character-3383875039-t-web-devoured" meta="角色修正" text="成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。
受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。" /> 的剧情推进。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-mt-firebrand`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Firebrand`,category:`minion`,eligible:`Firebrand`,text:`主人 Command +1。`,acquisition:`Firebrand 自带。`,duration:`随随从存在而生效。`},{id:`character-3591348120-mt-zealous`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Zealous`,category:`minion`,eligible:`<CrossReference name="Firebrand" href="#entry-character-3591348120-mt-firebrand" meta="角色修正" text="主人 Command +1。" />、Zealot、<CrossReference name="Sarkic Cultist" href="?god=mekhane#entry-uaen-mek-sarkic" meta="特殊人物与自主单位" text="The Other Half 开启后的敌对自主人物；积累 Sarkic Insights，发展教团并追求晋升。" />`,text:`主人撤退时仍可保留该随从。`,acquisition:`对应随从自带。`,duration:`随随从存在而生效。`},{id:`character-3591348120-t-mekhanite`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Mekhanite`,category:`common`,eligible:`改信 MEKHANE 的英雄、教士、Agent 与统治者`,text:`获得机械教派身份、<CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" /> 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic <CrossReference name="Piece" href="?page=base-items#entry-mod-3591348120-i-mek-piece" meta="物品" text="基础组件，用于组装 Mechanism，以及 Congregation 的建设与生产。
持有时，每回合使所在地 Shadow 增加 0.00033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.00011 个百分点，最高至 100%。多件组件分别计算。" />。制造 <CrossReference name="Relic" href="?page=base-items#entry-mod-3591348120-i-mek-relic" meta="物品" text="Command +2。计入 MEKHANE 的封印进度，也是组装 Divine Machine 的材料。
持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。" /> 会取得 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 <CrossReference name="Political Agitation" href="?god=aberrant-metal#entry-political-agitation" meta="地点修正" text="地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。" /> +100。`,acquisition:`改信、Invite Mekhanites、机械教派的传播，以及对应机械单位生成。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-divineschema`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Divine Schema`,category:`common`,eligible:`<CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 人物与统治者`,text:`用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" />。MEKHANE 完成激活后，每回合 +1。`,acquisition:`研究 Schema、制造 <CrossReference name="Relic" href="?page=base-items#entry-mod-3591348120-i-mek-relic" meta="物品" text="Command +2。计入 MEKHANE 的封印进度，也是组装 Divine Machine 的材料。
持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。" />、对应 Sermon、Council 与统治者研究行动。`,duration:`随获得和消费增减，最低 0。`},{id:`character-3591348120-t-mek-biomechanical`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Automaton`,category:`npc`,eligible:`<CrossReference name="Gatherer" href="#entry-character-3591348120-t-mek-automatonbasic" meta="角色修正" text="采集组件完成时填满全部空物品槽，并把组件送回据点储存。" />、<CrossReference name="Sentinel" href="#entry-character-3591348120-t-mek-sentinel" meta="角色修正" text="Defence +5。守卫 Forge 时提供 Sentinel Presence，增加敌对行动 Complexity；主动开战自动结算后，幸存 Sentinel 打断 5 回合、幸存防守方打断 3 回合。" />、<CrossReference name="Speaker" href="#entry-character-3591348120-t-mek-speaker" meta="角色修正" text="降低 Forge Profile、劝诱统治者和支援 Augmented Population；完成 Divert Attention 时 Divine Schema +1。" /> 等机械化人物`,text:`不因衰老死亡，设为无灵魂并改为机械化物种；每回合 XP 清零、等级固定 1、可用技能点清零。`,acquisition:`<CrossReference name="Clockwork Virus" href="#entry-character-3591348120-t-mek-clockworkvirus" meta="角色修正" text="强度每回合 +2；完全 Enshadowed 的非玩家人物额外 +2。自主单位强度恰为 90 时打断 10 回合，达到 100 后转为 Gatherer。玩家感染者取得 Spread Clockwork Virus。
除休息外的普通任务意愿 −向下取整的强度/3；自我献祭意愿增加强度/2。" /> 完成机械化；对应 Automaton 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-builder`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`The Builder`,category:`player`,eligible:`MEKHANE 指定的 Agent`,text:`Command +3，获得 Bumaro’s Warhammer；开放 <CrossReference name="Unified Church" href="?god=mekhane#entry-rt-mek-mekempire" meta="挑战" text="建立 Unified Church 帝国。Dark Empire 和平转化；其他国家不支持 Mekhanites 的领主可能发动内战。" />、Militancy 及召集遗物和战争相关仪式，可在 Congregation 制造 Cogwork 与 <CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> 组件。`,acquisition:`The Builder 神力。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-clockworkvirus`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Clockwork Virus`,category:`common`,eligible:`被感染的人物`,text:`强度每回合 +2；完全 Enshadowed 的非玩家人物额外 +2。自主单位强度恰为 90 时打断 10 回合，达到 100 后转为 <CrossReference name="Gatherer" href="#entry-character-3591348120-t-mek-automatonbasic" meta="角色修正" text="采集组件完成时填满全部空物品槽，并把组件送回据点储存。" />。玩家感染者取得 Spread Clockwork Virus。
除休息外的普通任务意愿 −向下取整的强度/3；自我献祭意愿增加强度/2。`,acquisition:`Clockwork Virus 神力；主动感染和病毒传播。`,duration:`持续增长至转化。`},{id:`character-3591348120-t-mek-machine`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Machine Effect`,category:`hero`,eligible:`受到 <CrossReference name="A Machine" href="?god=mekhane#entry-p-mek-machine" meta="神力" text="创建 A Machine，并解锁 Call of A Machine 与 Endless Noise。 神力消耗等于施放时的神力上限。" /> 呼唤的人物`,text:`当地 Shadow 分别超过 25%、50%、75% 时，每个门槛使强度每回合 +1；个人 Shadow =100% 再 +1，否则每回合 −1。
完全 Enshadowed、尚未疯狂且与 <CrossReference name="A Machine" href="?god=mekhane#entry-p-mek-machine" meta="神力" text="创建 A Machine，并解锁 Call of A Machine 与 Endless Noise。 神力消耗等于施放时的神力上限。" /> 同地时，Sanity 每回合 −1。提高 <CrossReference name="Grow the Machine" href="?god=mekhane#entry-ch-mek-growmachine" meta="挑战" text="完成时强度 +30。执行者已有 Machine Effect 时，该特质强度减半，并增加个人 Shadow 15 个百分点。交付组件界面的额外转化结果未找到可靠生效路径。" /> 与献祭意愿；<CrossReference name="Chosen One" href="#entry-character-base-t-chosenone" meta="角色修正" text="Command +2 +2×等级，Attack +1，Defence +2；不因衰老死亡。每回合清零 Shadow 与 Menace，第 10 回合后将 Awareness 设为 100%。清除 Call of the Abyss、Vampiric Curse 与 The Hunger。" /> 则更倾向摧毁机器。`,acquisition:`<CrossReference name="A Machine" href="?god=mekhane#entry-p-mek-machine" meta="神力" text="创建 A Machine，并解锁 Call of A Machine 与 Endless Noise。 神力消耗等于施放时的神力上限。" /> 地点或 Machine Effect 神力。`,duration:`强度降到 0 时解除；<CrossReference name="Grow the Machine" href="?god=mekhane#entry-ch-mek-growmachine" meta="挑战" text="完成时强度 +30。执行者已有 Machine Effect 时，该特质强度减半，并增加个人 Shadow 15 个百分点。交付组件界面的额外转化结果未找到可靠生效路径。" /> 将其减半，摧毁 <CrossReference name="A Machine" href="?god=mekhane#entry-p-mek-machine" meta="神力" text="创建 A Machine，并解锁 Call of A Machine 与 Endless Noise。 神力消耗等于施放时的神力上限。" /> 也可解除。`},{id:`character-3591348120-t-mek-maxwellist-awareness`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Data Blackout`,category:`common`,eligible:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> 行动选中的人物`,text:`Awareness 持续压为 0，保存第一次施加前的数值。`,acquisition:`<CrossReference name="Infiltrator" href="#entry-character-3591348120-t-mek-infiltrator" meta="角色修正" text="使单位执行自动渗透与压低统治者 Awareness 的专门行为。" /> 的 Awareness 干预或 <CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> 对应行动。`,duration:`30 回合；重复施加刷新时间，到期恢复原 Awareness。`},{id:`character-3591348120-t-mek-rotbolt`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Rotbolt Transformation`,category:`mobile`,eligible:`被 <CrossReference name="Rotbolt" href="?god=mekhane#entry-p-mek-rotbolt" meta="神力" text="创建 Rotbolt，并解锁 Accelerated Frequency 与 Biological Transfer。 神力消耗等于施放时的神力上限。" /> Transformation 选中的人物`,text:`每逢偶数回合 HP −1，Rest 意愿 −30。死亡于陆地时，已有 <CrossReference name="Rotbolt" href="?god=mekhane#entry-p-mek-rotbolt" meta="神力" text="创建 Rotbolt，并解锁 Accelerated Frequency 与 Biological Transfer。 神力消耗等于施放时的神力上限。" /> 的强度 +HP 上限×3；没有时创建 <CrossReference name="Rotbolt" href="?god=mekhane#entry-p-mek-rotbolt" meta="神力" text="创建 Rotbolt，并解锁 Accelerated Frequency 与 Biological Transfer。 神力消耗等于施放时的神力上限。" />。`,acquisition:`<CrossReference name="Rotbolt" href="?god=mekhane#entry-p-mek-rotbolt" meta="神力" text="创建 Rotbolt，并解锁 Accelerated Frequency 与 Biological Transfer。 神力消耗等于施放时的神力上限。" /> Consume 神力。`,duration:`持续至人物死亡。`},{id:`character-3591348120-t-mek-augmentbasicmight`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Artificial Limbs`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`Might +1。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasiclore`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Arcane Engravings`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`Lore +1。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasicintrigue`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Muffled Joints`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`Intrigue +1。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasiccommand`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Amplified Voice Box`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`Command +1。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasicattack`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Hidden Blades`,category:`mobile`,eligible:`接受改造的 Agent，以及起始配有此改造的 <CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 人物`,text:`Attack +3。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasicdefense`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Metal Skin`,category:`mobile`,eligible:`接受改造的 Agent，以及起始配有此改造的 <CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 人物`,text:`Defence +3。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentbasicscavenge`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Magnetic Implants`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`Scavenge 完成时，有 30% 概率在空物品槽加入一枚 Basic <CrossReference name="Mechanism" href="?page=base-items#entry-mod-3591348120-i-mek-mechanism" meta="物品" text="可继续组装 Relic，也供其他制造、建设及仪式消耗。
持有时，每回合使所在地 Shadow 增加 0.0033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.0011 个百分点，最高至 100%。多件组件分别计算。" />；同时免疫老年死亡。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentcogworkattack`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Blackpowder Implements`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`战斗开始时，敌方有 Defence 才结算 3 点伤害：先扣 Defence，不足部分扣 HP。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentcogworkhealth`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Mechanical Heart`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`受伤时每 2 回合恢复 1 HP；首次获得 Profile +10。满血时重置治疗计时。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentcogworkmind`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Clockwork Mind`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`每回合获得 5 XP。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentcogworkspeedboost`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Iron Lungs`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`每回合第一次移动返还 1 点已消耗移动。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentarcaneattack`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Electrified Generators`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`战斗开始时，敌方人物直接 HP −3。敌方随从在自身 Defence >0 时结算 3 点伤害，先扣 Defence，不足部分扣 HP。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentarcanefortress`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Arcane Infusion`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`执行引导任务时，当地 <CrossReference name="Arcane Fortress" href="?god=escamrak#entry-arcane-fortress" meta="地点修正" text="保护地点免受魔法攻击，吸收敌对法师造成的部分伤害；地点沦为废墟后仍保留。" /> 每回合强度 +2。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentarcanemenace`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Identity Recalibrators`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`每回合将最低 Menace 清到 0。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentarcanesecret`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Internal Calculator`,category:`player`,eligible:`能够执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 的人物`,text:`每 50 回合获得 1 <CrossReference name="Arcane Knowledge" href="#entry-character-base-t-arcaneknowledge" meta="角色修正" text="作为研习魔法的知识储备；消耗指定数量可提升 Mastery of Blood Magic、Mastery of Death 或 Mastery of Geomancy。持有后获得相应 Study 仪式。" />。`,acquisition:`执行 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 并选择此项改造。消耗 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />：首次 1，之后每多一项改造再增加 1。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentcogworksecurity`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Augmentation: Scoped Eyes`,category:`hero`,eligible:`获得随机机械改造的 <CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 单位`,text:`所在地 Security −1。`,acquisition:`<CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 单位生成时的随机改造。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-augmentruler`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Augmentations / Mutations`,category:`ruler`,eligible:`<CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 或 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 统治者`,text:`记录统治者已完成的自我改造次数；<CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 版本显示为 Mutations。后续研究与改造行动会读取此层数调整执行倾向。每次改造本身增加的属性直接计入人物基础属性。`,acquisition:`完成统治者 <CrossReference name="Augment" href="?god=mekhane#entry-rt-mek-augment" meta="挑战" text="消耗 Divine Schema 选择一项 Augmentation；费用随已有 Augmentation 数量增加。" /> 或 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> <CrossReference name="Mutate" href="?god=mekhane#entry-god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicmutate" meta="兴趣点" text="消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。" /> 行动。`,duration:`每次对应改造增加层数，长期保留。`},{id:`character-3591348120-t-mek-augment-maxwellistconnection`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Noosphere Connection`,category:`npc`,eligible:`<CrossReference name="Maxwellist Intelligence" href="#entry-character-3591348120-t-mek-intelligence" meta="角色修正" text="从 Library 与 Geomantic Locus 获得 Divine Schema，转为 Arcane Mechanisms。无灵魂、免疫衰老；XP 与技能点保持 0，等级固定为转化时的等级。" />；<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Agent 也使用相同特质`,text:`允许在已渗透地点建立 <CrossReference name="Maxwellist Connection" href="?god=mekhane#entry-pr-mek-connection" meta="地点修正" text="把当地人口接入 Noosphere，供 Intelligence 通过 Harvest Information 收集 Piece。
正常创建时直接处于强度上限；只有强度处于 0 与上限之间时才运行恢复检查。" />。`,acquisition:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Construct 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-allegiancemaxwellist`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Maxwellist`,category:`common`,eligible:`Maxwellist 据点关联人物`,text:`记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。`,acquisition:`与 Maxwellist Hub 的人物归属流程关联。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-allegianceorthodox`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Cogwork Orthodox`,category:`common`,eligible:`Cogwork Orthodox 据点关联人物与 Legate`,text:`记录 Cogwork Orthodox 教派归属；当前完成 Cogwork 制造的特质回调没有额外奖励结算。`,acquisition:`<CrossReference name="Orthodox Forge" href="?god=mekhane#entry-sub-mek-forge" meta="兴趣点" text="由 Standardization 建立的 Cogwork Orthodoxy 制造中心，开放 Clockwork Mechanism、Cogwork Relic 与 Automatons，并具有 Production。

出现方式
Standardization 替换已有 Congregation。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：通用、除Abyssal外通用。
其中 Assemble Mechanism、Assemble Relic 由本据点的 Cogwork 组装行动替代。" />、Council 及 Legate 的生成和归属流程。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-automatonbasic`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Gatherer`,category:`npc`,eligible:`Gatherer`,text:`采集组件完成时填满全部空物品槽，并把组件送回据点储存。`,acquisition:`Gatherer 生成或病毒转化时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-exile`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Exile`,category:`npc`,eligible:`<CrossReference name="Mekhanite Exile" href="?god=mekhane#entry-ua-mek-exile" meta="特殊人物与自主单位" text="自主进行实验和破坏。完成带 Discord 或 Shadow 正面标签的行动时，有 20% 概率获得 Unorthodox Piece。随机拥有 Hidden Blades 或 Metal Skin。" />`,text:`通过造成 <CrossReference name="Unrest" href="?god=aberrant-metal#entry-unrest" meta="地点修正" text="居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。
达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。" /> 的挑战，以及在 Exile Sect 完成 Experiment，获取 Unorthodox Pieces。`,acquisition:`<CrossReference name="Mekhanite Exile" href="?god=mekhane#entry-ua-mek-exile" meta="特殊人物与自主单位" text="自主进行实验和破坏。完成带 Discord 或 Shadow 正面标签的行动时，有 20% 概率获得 Unorthodox Piece。随机拥有 Hidden Blades 或 Metal Skin。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-hero-raider`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Mercenary Task Force`,category:`hero`,eligible:`统治者雇佣的 Congregation Raider`,text:`突袭 Congregation 并窃取 <CrossReference name="Relic" href="?page=base-items#entry-mod-3591348120-i-mek-relic" meta="物品" text="Command +2。计入 MEKHANE 的封印进度，也是组装 Divine Machine 的材料。
持有时，每回合使所在地 Shadow 增加 0.033 个百分点；MEKHANE 的 Shadow 教义每降低一级，再增加 0.011 个百分点，最高至 100%。多件组件分别计算。" />；完成突袭后更倾向存入、出售或研究遗物（意愿 +100），随后休息并结束委托。`,acquisition:`统治者雇佣突袭机械教派的行动。`,duration:`委托结束后解散。`},{id:`character-3591348120-t-mek-infiltrator`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Infiltrator`,category:`npc`,eligible:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Infiltrator`,text:`使单位执行自动渗透与压低统治者 Awareness 的专门行为。`,acquisition:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Infiltrator 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-intelligence`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Maxwellist Intelligence`,category:`npc`,eligible:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Construct 与被上传的人物`,text:`从 <CrossReference name="Library" href="?page=points-of-interest#entry-location-sub-library" meta="兴趣点" text="每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。
执行地点：Library
Lore
Complexity: 5
Profile: 1000
Menace: 150
XP: 12
执行条件：携带已经封印的 Laughing Tome；Library 未渗透，当前神祇为 Iastur。&quot; image=&quot;/locations/game/i_laughingTomeBound.png&quot; /&gt;。

出现方式
城市与矮人据点的随机候选。

可出现地点
City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：可渗透兴趣点通用。" /> 与 <CrossReference name="Geomantic Locus" href="?god=kalastrophe#entry-geomantic-locus" meta="地点修正" text="Geomancy 法术的施放地点与能量来源。Hungry Earth 将 Death 运往世界上当前强度最高的 Locus 所在地点。" /> 获得 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" />，转为 Arcane Mechanisms。无灵魂、免疫衰老；XP 与技能点保持 0，等级固定为转化时的等级。`,acquisition:`<CrossReference name="Maxwellist" href="#entry-character-3591348120-t-mek-allegiancemaxwellist" meta="角色修正" text="记录 Maxwellist 教派归属；当前完成制造的特质回调没有额外奖励结算。" /> Construct 生成；Rebirth 上传人物。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-limit`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Limited Purpose`,category:`npc`,eligible:`临时招募的 <CrossReference name="Mekhanite Acolyte" href="?god=mekhane#entry-ua-mek-acolyte" meta="特殊人物与自主单位" text="自主收集、存放与组装组件。Acolyte Assistance 可切换其组装行为。" /> 与 Zealot`,text:`仅在执行挑战的回合扣除剩余服务时间。耗尽后优先储存携带组件，再执行 Rest 并解散。`,acquisition:`临时招募或 Zealot 地点生成。`,duration:`默认累计执行 25 回合挑战后进入退场流程，移动不扣。`},{id:`character-3591348120-t-mek-rulerorthodoxpatriarch`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Orthodox Patriarch`,category:`ruler`,eligible:`<CrossReference name="Orthodox Forge" href="?god=mekhane#entry-sub-mek-forge" meta="兴趣点" text="由 Standardization 建立的 Cogwork Orthodoxy 制造中心，开放 Clockwork Mechanism、Cogwork Relic 与 Automatons，并具有 Production。

出现方式
Standardization 替换已有 Congregation。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：通用、除Abyssal外通用。
其中 Assemble Mechanism、Assemble Relic 由本据点的 Cogwork 组装行动替代。" /> 的 Patriarch；同类特质也供 Patriarch Agent 使用`,text:`免疫衰老，转为机械化人物，支撑 Council 与 Forge 的宗教秩序；死亡会使关联 Council 陷入 Disarray。若作为人物单位存在，每逢第 10 回合 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" /> +1。`,acquisition:`<CrossReference name="Orthodox Forge" href="?god=mekhane#entry-sub-mek-forge" meta="兴趣点" text="由 Standardization 建立的 Cogwork Orthodoxy 制造中心，开放 Clockwork Mechanism、Cogwork Relic 与 Automatons，并具有 Production。

出现方式
Standardization 替换已有 Congregation。

可出现地点
City、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。
改建或覆灭后是否保留，还受对应流程限制。

可以执行：通用、除Abyssal外通用。
其中 Assemble Mechanism、Assemble Relic 由本据点的 Cogwork 组装行动替代。" /> 生成 Patriarch。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sentinel`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Sentinel`,category:`npc`,eligible:`Sentinel`,text:`Defence +5。守卫 Forge 时提供 <CrossReference name="Sentinel Presence" href="?god=mekhane#entry-pr-mek-sentineldanger" meta="地点修正" text="延长英雄针对 Forge 的破坏任务 Complexity。" />，增加敌对行动 Complexity；主动开战自动结算后，幸存 Sentinel 打断 5 回合、幸存防守方打断 3 回合。`,acquisition:`Sentinel 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-speaker`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Speaker`,category:`npc`,eligible:`Speaker`,text:`降低 Forge Profile、劝诱统治者和支援 <CrossReference name="Augmented Population" href="?god=mekhane#entry-pr-mek-augmentpops" meta="地点修正" text="人口逐渐接受机械改造，推动统治者皈依，并降低组建 Mekhanite Army 的费用。
强度至少 10 且统治者对 Mekhanites 的偏好不为 0 时，每回合产生 Unrest（2 − 强度 ×0.05）与 Death（3 − 强度 ×0.03）；达到 100 时额外减少 Unrest 5。达到 100 后可使当地归属 Church of the Broken God；Mass Appeal 生效时向 Shadow 至少 50% 的邻近人类聚居地扩散。" />；完成 <CrossReference name="Divert Attention" href="?god=mekhane#entry-god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkichidetemple" meta="兴趣点" text="消耗 3 Sarkic Insights，Temple Profile −15。" /> 时 <CrossReference name="Divine Schema" href="#entry-character-3591348120-t-mek-divineschema" meta="角色修正" text="用于机械改造、治疗、建立设施及支援的知识资源；玩家单位取得后开放 Augment。MEKHANE 完成激活后，每回合 +1。" /> +1。`,acquisition:`Speaker 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-sarkic`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Sarkic`,category:`common`,eligible:`Sarkic 英雄、教士与统治者`,text:`免疫衰老，取得时清空 Shadow、获得 <CrossReference name="Sarkic Insights" href="#entry-character-3591348120-t-sarkic-secrets" meta="角色修正" text="用于突变和教派行动的知识资源；完成 Learn Secret 时额外取得 1。" />，并等概率得到 <CrossReference name="Clawed Hands" href="#entry-character-3591348120-t-mek-sarkic-mutationattack" meta="角色修正" text="Attack +2+等级；首次获得等级为 0。" /> 或 <CrossReference name="Armored Skin" href="#entry-character-3591348120-t-mek-sarkic-mutationdefense" meta="角色修正" text="Defence +2+等级；首次获得等级为 0。" />。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 <CrossReference name="Mekhanite" href="#entry-character-3591348120-t-mekhanite" meta="角色修正" text="获得机械教派身份、Divine Schema 和对应制造、传播、统治行动；不因衰老死亡，设为无灵魂。MEKHANE 完成激活后，Might、Lore、Intrigue、Command 各 +5。
教义还能提供专长、每回合 Gold +1、改变相关喜恶、为援助 Deep Ones 的行动提供 Basic Piece。制造 Relic 会取得 Divine Schema。
Alliance 君主每逢第 4 回合可被揭穿身份，一次性使其他城市 Political Agitation +100。" /> 的好感。统治者开放研究与突变行动。
<CrossReference name="I. Applied Mutations" href="?god=mekhane#entry-h-mek-sarkic1" meta="宗教与教义" /> 尚未启用时，回合结算清零 Profile 与 Menace。<CrossReference name="IV. Weakened Enemies" href="?god=mekhane#entry-h-mek-sarkiccounter4" meta="宗教与教义" /> 启用时，Attack、Defence 各 −5。`,acquisition:`改信 Sarkic、人口与教士传播，或 Sarkic 单位生成。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-sarkic-secrets`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Sarkic Insights`,category:`common`,eligible:`<CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 人物与统治者`,text:`用于突变和教派行动的知识资源；完成 Learn Secret 时额外取得 1。`,acquisition:`研究 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" />、探索其墓地、统治者研究及 <CrossReference name="Growing Knowledge" href="#entry-character-3591348120-t-mek-sarkic-mutationinsights" meta="角色修正" text="每 5 回合获得 1 Sarkic Insight。" />。`,duration:`获得和消费时增减，最低 0。`},{id:`character-3591348120-t-sarkic-truth`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Sarkic Truth`,category:`mobile`,eligible:`合成高阶真理的 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 人物`,text:`高阶 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 资源，用于进一步突变与特殊行动。`,acquisition:`将 <CrossReference name="Sarkic Insights" href="#entry-character-3591348120-t-sarkic-secrets" meta="角色修正" text="用于突变和教派行动的知识资源；完成 Learn Secret 时额外取得 1。" /> 合成为 Truth 的对应行动。`,duration:`储存到被消费。`},{id:`character-3591348120-t-sarkic-grandkarcist`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Grand Karcist`,category:`npc`,eligible:`Grand <CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`免疫衰老；主导世界范围的 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 传播及最终仪式。完成 Study <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 时，已有 <CrossReference name="Sarkic Insights" href="#entry-character-3591348120-t-sarkic-secrets" meta="角色修正" text="用于突变和教派行动的知识资源；完成 Learn Secret 时额外取得 1。" /> 额外 +1。`,acquisition:`Grand <CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-sarkic-karcist`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Karcist`,category:`npc`,eligible:`Karcist`,text:`免疫衰老；取得 <CrossReference name="Growing Knowledge" href="#entry-character-3591348120-t-mek-sarkic-mutationinsights" meta="角色修正" text="每 5 回合获得 1 Sarkic Insight。" />，并等概率获得 Regeneration、<CrossReference name="Blood Absorbtion" href="#entry-character-3591348120-t-mek-sarkic-mutationhpkill" meta="角色修正" text="战斗死亡事件回调结算时恢复满 HP，通常随击杀对手触发。" />、<CrossReference name="Anti-Memetic Pheromones" href="#entry-character-3591348120-t-mek-sarkic-mutationprofilemenace" meta="角色修正" text="每回合 Profile、Menace 各减少同地其他有人物身份的单位数量。" />、<CrossReference name="Retractive Wings" href="#entry-character-3591348120-t-mek-sarkic-mutationspeed" meta="角色修正" text="每回合首次移动后，将已用移动点清零。" /> 或 <CrossReference name="Adaptive Defenses" href="#entry-character-3591348120-t-mek-sarkic-mutationdefenseminions" meta="角色修正" text="实际提高 Attack，数值等于自身随从中最高的当前 Defence。" /> 之一。完成 Study <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 时，已有 <CrossReference name="Sarkic Insights" href="#entry-character-3591348120-t-sarkic-secrets" meta="角色修正" text="用于突变和教派行动的知识资源；完成 Learn Secret 时额外取得 1。" /> 额外 +1。`,acquisition:`Karcist 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationattack`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Clawed Hands`,category:`mobile`,eligible:`<CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 人物`,text:`Attack +2+等级；首次获得等级为 0。`,acquisition:`首次改信 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 或执行 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> <CrossReference name="Mutate" href="?god=mekhane#entry-god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicmutate" meta="兴趣点" text="消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。" />。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationdefense`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Armored Skin`,category:`mobile`,eligible:`<CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 人物`,text:`Defence +2+等级；首次获得等级为 0。`,acquisition:`首次改信 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 或执行 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> <CrossReference name="Mutate" href="?god=mekhane#entry-god-place-location-sub-mek-sarkictemple--place-task-3591348120-ch-mek-sarkicmutate" meta="兴趣点" text="消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。" />。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationhp`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Regeneration`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`每逢偶数回合恢复 1 HP，不超过上限。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时的随机突变。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationhpkill`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Blood Absorbtion`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`战斗死亡事件回调结算时恢复满 HP，通常随击杀对手触发。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时的随机突变。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationprofilemenace`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Anti-Memetic Pheromones`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`每回合 Profile、Menace 各减少同地其他有人物身份的单位数量。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时的随机突变。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationspeed`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Retractive Wings`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`每回合首次移动后，将已用移动点清零。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时的随机突变。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationdefenseminions`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Adaptive Defenses`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`实际提高 Attack，数值等于自身随从中最高的当前 Defence。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时的随机突变。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-t-mek-sarkic-mutationinsights`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Growing Knowledge`,category:`npc`,eligible:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" />`,text:`每 5 回合获得 1 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> Insight。`,acquisition:`<CrossReference name="Karcist" href="#entry-character-3591348120-t-sarkic-karcist" meta="角色修正" text="免疫衰老；取得 Growing Knowledge，并等概率获得 Regeneration、Blood Absorbtion、Anti-Memetic Pheromones、Retractive Wings 或 Adaptive Defenses 之一。完成 Study Sarkic 时，已有 Sarkic Insights 额外 +1。" /> 生成时自带。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3591348120-temporary-sarkicstatboost`,source:`3591348120`,sourceName:`MEKHANE The Broken God`,name:`Sarkic Prayer · Might`,category:`mobile`,eligible:`执行 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> Prayer 的 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> 角色`,text:`Might +1。`,acquisition:`在提供该行动的 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> Locus 完成 <CrossReference name="Sarkic" href="#entry-character-3591348120-t-sarkic" meta="角色修正" text="免疫衰老，取得时清空 Shadow、获得 Sarkic Insights，并等概率得到 Clawed Hands 或 Armored Skin。此后每回合 Shadow −10 个百分点，提高对 Sarkic 的偏好并降低对 Mekhanite 的好感。统治者开放研究与突变行动。
I. Applied Mutations 尚未启用时，回合结算清零 Profile 与 Menace。IV. Weakened Enemies 启用时，Attack、Defence 各 −5。" /> Prayer。`,duration:`25 回合。`},{id:`character-3647343379-t-fc-imperial`,source:`3647343379`,sourceName:`Villikos, the First Claimant`,name:`Imperial Blood`,category:`common`,eligible:`Villikos 帝国血脉的英雄与统治者`,text:`Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。
持有者完成非 <CrossReference name="Other" href="?page=minions#entry-other" meta="随从" text="无特殊能力。" /> 类型任务时，已有 <CrossReference name="Claim" href="?god=villikos#entry-p-fc-claim" meta="神力" text="在人类类聚居地创建 Claim，强度为 1。" /> +5；尚无 <CrossReference name="Claim" href="?god=villikos#entry-p-fc-claim" meta="神力" text="在人类类聚居地创建 Claim，强度为 1。" /> 时创建强度 1 的修正。精灵英雄执行 <CrossReference name="Find Ruler" href="?page=locations#entry-place-task-base-ch-elf-findruler" meta="英雄任务" text="为尚无统治者的 Elven City 找到新统治者。" /> 任命的新统治者也获得 Imperial Blood；执行 Craft <CrossReference name="Elfstone" href="?page=base-items#entry-elfstone" meta="物品" text="初始容量为 200，物品名称中的括号显示剩余容量。
持有者的 Shadow 大于 0 且不超过 99% 时，每回合吸收最多 5 个百分点，受当前 Shadow 和剩余容量限制；每吸收 1 个百分点消耗 1 容量，消耗量向上取整。世界回合数为 3 的倍数时，另消耗 1 容量。容量耗尽后破碎。
持有者可执行 Corrupt Elfstone，将其转为 Corrupted Elfstone。" /> 后，携带的未腐化 <CrossReference name="Elfstone" href="?page=base-items#entry-elfstone" meta="物品" text="初始容量为 200，物品名称中的括号显示剩余容量。
持有者的 Shadow 大于 0 且不超过 99% 时，每回合吸收最多 5 个百分点，受当前 Shadow 和剩余容量限制；每吸收 1 个百分点消耗 1 容量，消耗量向上取整。世界回合数为 3 的倍数时，另消耗 1 容量。容量耗尽后破碎。
持有者可执行 Corrupt Elfstone，将其转为 Corrupted Elfstone。" /> 全部转为腐化。
成为疯狂君主时，国内地点 <CrossReference name="Madness" href="?god=villikos#entry-base-madness" meta="地点修正" text="每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。
达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。" /> 每回合 +0.5；具有 <CrossReference name="Call of the Abyss" href="#entry-character-base-t-calloftheabyss" meta="角色修正" text="强度每逢偶数回合 +1。自主人物可用 Maintain Humanity 将强度清零，但增加 3 Exhaustion；强度大于 0 时可执行 Descend into the Sea，转化为自主 Deep One。玩家 Agent 接受转化后不再受玩家控制，并释放一个 Agent 名额。" /> 时，已有 <CrossReference name="Deep One Cult" href="?god=aberrant-metal#entry-deep-one-cult" meta="地点修正" text="在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。
在人类聚居地达到 300 时，将其转为 Deep One Sanctum；70% 人口经 Sanctum 转送至深海城市，统治者转为自主 Deep One。
令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。" /> 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 
统治者首次腐化检查也会在没有 <CrossReference name="Claim" href="?god=villikos#entry-p-fc-claim" meta="神力" text="在人类类聚居地创建 Claim，强度为 1。" /> 的所在地创建强度 1。`,acquisition:`Imperial Lineage、家族继承、安插统治者、血脉仪式与帝国叛乱等流程。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3647343379-t-fc-peasantlord`,source:`3647343379`,sourceName:`Villikos, the First Claimant`,name:`Peasant Lord`,category:`ruler`,eligible:`<CrossReference name="Upheaval" href="?god=villikos#entry-p-fc-peasantuprising" meta="神力" text="使目标地区与同国相邻的村落、至多一座较大聚居地脱离原国家，发动起义。卷入地点的 Unrest 被清空，转为 Peasant Army；标准分支的初始 HP 为消耗前 Unrest 的一半，向下取整。新起义君主获得 Imperial Blood。
受影响的原驻军转投新国家时 HP 减半；形成军队的地点额外增加 min(初始 HP /10 向下取整,30) Death。" /> 新建的平民领主`,text:`<CrossReference name="Upheaval" href="?god=villikos#entry-p-fc-peasantuprising" meta="神力" text="使目标地区与同国相邻的村落、至多一座较大聚居地脱离原国家，发动起义。卷入地点的 Unrest 被清空，转为 Peasant Army；标准分支的初始 HP 为消耗前 Unrest 的一半，向下取整。新起义君主获得 Imperial Blood。
受影响的原驻军转投新国家时 HP 减半；形成军队的地点额外增加 min(初始 HP /10 向下取整,30) Death。" /> 创建平民统治者时赋予的身份特质；没有额外属性或实际启用的主动能力。`,acquisition:`<CrossReference name="Upheaval" href="?god=villikos#entry-p-fc-peasantuprising" meta="神力" text="使目标地区与同国相邻的村落、至多一座较大聚居地脱离原国家，发动起义。卷入地点的 Unrest 被清空，转为 Peasant Army；标准分支的初始 HP 为消耗前 Unrest 的一半，向下取整。新起义君主获得 Imperial Blood。
受影响的原驻军转投新国家时 HP 减半；形成军队的地点额外增加 min(初始 HP /10 向下取整,30) Death。" /> 创建平民统治者时获得。`,duration:`持续保留；没有固定回合倒计时。`},{id:`character-3647343379-event-a-glimpse-of-the-greater-things-`,source:`3647343379`,sourceName:`Villikos, the First Claimant`,name:`A Glimpse Of The Greater Things · 临时属性`,category:`mobile`,eligible:`对应事件及选项指定的角色`,text:`A Glimpse Of The Greater Things · The Final Fate Of The World, The True Form Of The Cosmos：Lore +1（999 回合）。`,acquisition:`通过 A Glimpse Of The Greater Things 的对应选项获得。`,duration:`各项从获得时分别倒计时，持续回合见上；到期移除对应属性变化。`}],m=u(),h=Array.from(new Set(p.map(e=>e.source))).map(e=>({id:e,name:p.find(t=>t.source===e).sourceName,groups:Object.entries(f).map(([t,n])=>({id:`characters-`+e+`-`+t,name:n,items:p.filter(n=>n.source===e&&n.category===t)})).filter(e=>e.items.length)})),g={id:`character-modifiers`,assetDir:``,autoLink:!1,powers:[],sections:h.flatMap(e=>e.groups.map(e=>({id:e.id,title:`角色修正`,items:e.items})))},_=p.map(e=>`entry-`+e.id),v=h.map(e=>({name:e.name,entries:e.groups.map(e=>({href:`#`+e.id,label:e.name}))})),y=p.filter(e=>e.source===`base`).length;function b(){let{sidebarHidden:n,setSidebarHidden:u,closeMobileSidebar:f,onSidebarClick:b}=l(),[x,S]=(0,d.useState)(new Set),C=e=>S(t=>new Set(t).add(e)),w=e=>S(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),T=s(C);return(0,m.jsxs)(`main`,{className:`site-shell base-modifiers-theme character-modifiers-theme`+(n?` sidebar-hidden`:``),onClick:T,children:[(0,m.jsx)(e,{hidden:n,onClose:f}),(0,m.jsxs)(`aside`,{className:`sidebar`,onClick:b,children:[(0,m.jsxs)(`div`,{className:`sidebar-head`,children:[(0,m.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,m.jsx)(`span`,{className:`brand-mark`,children:(0,m.jsx)(a,{size:17})}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`b`,{children:`角色修正`}),(0,m.jsx)(`small`,{children:`其他信息`})]})]}),(0,m.jsx)(`button`,{className:`sidebar-toggle`,type:`button`,"aria-expanded":!n,"aria-label":n?`展开侧边栏`:`收起侧边栏`,onClick:()=>u(e=>!e),children:n?(0,m.jsx)(r,{size:17}):(0,m.jsx)(i,{size:17})})]}),(0,m.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`}),(0,m.jsxs)(`div`,{className:`sidebar-bulk`,children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>S(new Set(_)),children:`全部展开`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>S(new Set),children:`全部收起`})]}),(0,m.jsx)(c,{groups:v,label:`角色修正导航`})]}),(0,m.jsxs)(`div`,{className:`content-shell`,children:[(0,m.jsxs)(`header`,{id:`top`,className:`modifier-library-header`,children:[(0,m.jsx)(`h1`,{children:`角色修正`}),(0,m.jsxs)(`p`,{children:[`本体 `,y,` 项，Mod `,p.length-y,` 项。收录人物的可学习能力、特质、诅咒、临时状态及随从能力，按能够获得它们的单位类别分类。`]}),(0,m.jsx)(`p`,{children:`不收录单个玩家 Agent 独有的能力；神力、物品、事件或教义可以赋予其他人物的修正仍收录。各 Mod 分别列出，使用当前有效版本。`})]}),h.map((e,n)=>(0,m.jsxs)(`section`,{className:`section character-source`,id:`character-source-`+e.id,children:[(0,m.jsxs)(`div`,{className:`plain-heading`,children:[(0,m.jsxs)(`p`,{className:`section-index`,children:[String(n+1).padStart(2,`0`),` / `,e.id===`base`?`游戏本体`:`Mod`]}),(0,m.jsx)(`h2`,{children:e.name})]}),e.groups.map(e=>(0,m.jsxs)(`div`,{className:`character-category`,id:e.id,children:[(0,m.jsxs)(`h3`,{children:[e.name,(0,m.jsx)(`small`,{children:e.items.length})]}),(0,m.jsx)(`div`,{className:`expandable-table`,children:e.items.map(e=>{let n=`entry-`+e.id;return(0,m.jsxs)(o,{config:g,entryId:n,name:e.name,open:x.has(n),onToggle:w,children:[e.levels&&(0,m.jsxs)(`small`,{className:`tenet-range`,children:[`等级范围：`,e.levels]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`适用人物`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(t,{config:g,text:e.eligible,exclude:e.name})})]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`作用`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(t,{config:g,text:e.text,exclude:e.name})})]}),(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`获取方式`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(t,{config:g,text:e.acquisition,exclude:e.name})})]}),e.duration&&(0,m.jsxs)(`div`,{className:`expanded-section`,children:[(0,m.jsx)(`h4`,{children:`持续与移除`}),(0,m.jsx)(`p`,{children:(0,m.jsx)(t,{config:g,text:e.duration,exclude:e.name})})]})]},n)})})]},e.id))]},e.id)),(0,m.jsx)(`footer`,{className:`archive-footer`,children:(0,m.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`})})]})]})}export{b as default};