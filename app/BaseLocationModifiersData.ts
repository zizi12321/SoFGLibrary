import { D, type ArchiveRecordConfig } from "./GodArchiveTypes";

// Curated shared mechanics only. Do not copy god-specific effects or creation sources here.
export const config: ArchiveRecordConfig = {
  id: "base-location-modifiers", assetDir: "base-location-modifiers", powers: [],
  sections: [{ id: "location-modifiers", title: "地点修正", items: [
    {"name":"Soul","id":"soul","baseGame":true,"initialValue":"","text":"保存死者灵魂，显示名随物种变化，例如 Human Soul。提供 <CrossReference name=\"Secrets of Death\" />、Summon First Daughter、Vampiric Curse 与 Holy: Funeral Rites；死者具有 The Hunger 时另提供 Holy: Promised Return，各行动仍有各自的执行条件。\n每回合使当地 Death 增加 1。地点成为废墟后仍保留；图像使用死者本人的肖像。","modifierChange":{"natural":"每回合强度 −1；结算后低于 0.1 时移除。","external":"<CrossReference name=\"Secrets of Death\" /> 完成时移除。\nVampiric Curse 或 Holy: Promised Return 完成转化时移除。\nHoly: Funeral Rites 完成时移除。"}},
    {"name":"Hunger / Famine","id":"hunger-famine","image":"./aberrant-metal/famine.png","baseGame":true,"initialValue":"","text":"同一修正在强度低于 100 时显示 Hunger，达到 100 后显示 Famine。Prosperity 修正为 −强度/200；达到 50 后不再提供通常的休息挑战。\n普通模式下，低于 100 时每回合 Unrest +4；100 至不足 200 时每回合 Unrest +16、人口 −2；200 至 300 时每回合 Unrest +4、人口减少 ⌊max(2,人口 × 0.05)⌋；超过 300 时人类类聚居地毁灭。\n人口损失计入 Death，剩余人口最低保留 1；100 至不足 200 时若扣减后人口不大于 0，该次不增加 Death。开启难民且地点允许时，另生成损失人口一半规模的难民，向下取整，包含在本次人口扣减中。","modifierChange":{"natural":"令 P 为常规人口结算后的当前人口，F 为当轮本地产粮与进口之和。\nP>F 时，每回合 +min(10,max(5,P−F))。\nP≤F 时，每回合 −max(10,5×(F−P))。","external":""}},

    D("Plague", "疾病降低 Prosperity，每点强度造成 −0.003。强度不高于 100 时，累计每回合 强度/450 人死亡并增加 1 Death；超过 100 时改为 强度/300 人和 2 Death。整数死亡数结算后保留小数余量。达到 300 时摧毁聚居地。\n每回合增加 ⌊强度/100⌋+1 的 Unrest。超过传播门槛后，向疾病强度低于自身一半的相邻人类聚居地每回合传播 1；Quarantine 提高传播门槛。", {
      image: "./out-of-gods/plague.png", baseGame: true,
      modifierChange: { natural: "默认难度下每回合强度 +2。", external: "Plague Immunity 每有 50 点，使 Plague 每回合 −1，向下取整。\nElven City 与已经完成神权接管的聚居地每回合 −10。" }
    }),
    D("Well of Shadows", "使 Shadow 向相邻低 Shadow 地点额外传播。传播量随两地 Shadow 差值增大，并受接收地点的 Ward 抑制；地点成为废墟后仍保留。", {
      image: "./out-of-gods/wellOfShadows.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −2。", external: "" }
    }),
    D("Military Fervour", "提高以当地为故乡的 Human Army 最大 HP，倍率为 1 + min(强度,100)/100。", {
      image: "./out-of-gods/unit_humanArmy.png", baseGame: true,
      modifierChange: { natural: "非教程模式下，每回合强度 −2。", external: "" }
    }),
    D("Malign Catch", "每回合使当地 Shadow 增加 0.15 个百分点，最高 100%；Madness 低于 150 时每回合增加 1。\n同样在 Madness 低于 150 时，按 (强度 −100)/0.0075 累积精神侵蚀；累积超过 1 后归零，并使当地统治者 Sanity −1。", {
      image: "./out-of-gods/malignCatch.png", baseGame: true,
      modifierChange: { natural: "", external: "" }
    }),
    {"name":"Orcish Funding","text":"每逢 10 的倍数回合，从资助国每位地方统治者抽取其 Gold 的 20%，分别向下取整。若受资助部落存在强度低于 290 的 Orcish Industry，则将总额平均分配后按 50% 转为各处工业强度，最高 300。没有合适工业地点时不收款。\n资助国或部落消亡、或修正所在地易主时移除。","image":"./out-of-gods/agent_warlord.png","initialValue":"","modifierChange":{"natural":"","external":""},"baseGame":true},
    {"name":"Orcish Industry","text":"用于支持 Orc 军队；军队 HP 上限依赖故乡及相邻地点的工业总量。","image":"./out-of-gods/orcishIndustry.png","initialValue":"","modifierChange":{"natural":"强度低于 50 时每回合 +1；达到 51 或以上时每回合 −1。","external":""},"baseGame":true},
    D("Shadow", "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。", {
      image: "./ophanim/power-shadow.png", baseGame: true,
      modifierChange: { natural: "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。", external: "Deep One Cult 强度超过 100 时，每回合增加 Cult 强度 ÷ 1000 个百分点，最高 100%。" }
    }),
    D("Madness", "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。", {
      image: "./iastur/madness.png", baseGame: true,
      modifierChange: { natural: "", external: "Cure Madness 完成时减少 25。\nDeep One Cult 在当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5。" }
    }),
    D("Madness Effect: Catatonia", "当地 Prosperity −0.75、Security −10，食物产出固定减少 50。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Madness Effect: Masochism", "当地非玩家控制且不是 Chosen One 的人物单位，每回合个人 Shadow 增加 5 个百分点，最高 100%。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Madness Effect: Fascination", "每逢 10 的倍数回合，为玩家恢复 1 点 Power，不超过当前上限。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Madness Effect: Psychotics", "出现时把当地人口降至原来的 75%，向下取整且最低为 1，并增加 100 Death；持续提供 Security −2。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Madness Effect: Hypochondria", "当地 Prosperity −0.65。出现时添加强度 50 的 Quarantine，并增加 100 Plague Immunity。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Madness Effect: Paranoid Delusions", "当地 Security +5。每回合使当地除 Chosen One 外的人物单位个人 Shadow 增加 5 个百分点，最高 100%，包括我方 Agent。出现时添加强度 50 的 Banditry。", { image: "./cordyceps/madness-effect.png", baseGame: true }),
    D("Arcane Fortress", "保护地点免受魔法攻击，吸收敌对法师造成的部分伤害；地点沦为废墟后仍保留。", {
      image: "./iastur/arcane-fortress.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −2。", external: "" }
    }),
    D("Lingering Resentment", "居民对统治者残酷惩罚的长期怨恨，每回合使当地 Unrest 增加 2。", {
      image: "./vinerva/unrest.png", baseGame: true,
      modifierChange: { natural: "默认按当地统治者的 Intrigue 衰减：每 1 点 Intrigue 使强度每回合 −1；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −2；未找到游戏内切换入口。", external: "Unrest 达到 300 并触发危机时，清除当地 Lingering Resentment。" }
    }),
    D("Devastation", "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。", {
      image: "./evil-beneath/devastation.png", baseGame: true,
      modifierChange: { natural: "非教程模式下，每回合强度 −0.5。", external: "" }
    }),
    D("Unrest", "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。", {
      image: "./vinerva/unrest.png", baseGame: true,
      modifierChange: { natural: "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。", external: "Lingering Resentment 每回合增加 2。\nMadness 超过 100 时，每回合增加 Madness 强度 ÷ 75。\nOrganised Dissent 每回合增加 1.2。" }
    }),
    D("Bribed Guards", "部分守卫被贿赂，暂时降低当地 Security，默认降低 2。", {
      image: "./deaths-games/bribed-guards.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −1，归零后移除。", external: "" }
    }),
    D("Quarantine", "当地 Prosperity −0.1，并提高 Plague 向相邻地点传播的强度门槛。", {
      image: "./cordyceps/quarantine.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −1，归零后移除。", external: "Madness Effect: Hypochondria 出现时添加一份强度为 50 的 Quarantine。" }
    }),
    D("Plague Immunity", "每有 50 点强度，每回合使当地 Plague 减少 1 点，计算时向下取整。", {
      image: "./cordyceps/plague-immunity.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −2，归零后移除。", external: "Madness Effect: Hypochondria 出现时增加 100。" }
    }),
    D("Banditry", "当地 Prosperity −0.25，提供 Combat Banditry、Arm Bandits 与 Slaughter Bandits。", {
      image: "./cordyceps/banditry.png", baseGame: true,
      modifierChange: { natural: "强度低于 75 时每回合 +2；达到或超过 75 后停止自然增长。", external: "Madness Effect: Paranoid Delusions 出现时添加一份强度为 50 的 Banditry。\nCombat Banditry 或 Slaughter Bandits 完成时移除。" }
    }),
    D("Death", "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。", {
      image: "./kalastrophe/death.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −0.5。", external: "Catacombs 在本地 Death 低于 200 时，每回合从每个相邻地点各取至多 5 点汇入。" }
    }),
    D("Political Agitation", "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。", {
      image: "./kalastrophe/agitate.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −1。", external: "Separatist Sentiments 每回合增加 2。" }
    }),
    D("Political Instability", "国家政局的不稳定程度。强度超过 300 时触发内战，部分贵族及其军队脱离原国家，随后强度清零。", {
      image: "./kalastrophe/politicalInstability.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −1。", external: "本国每个 City、Elven City 的 Political Agitation 各自按强度 ÷15 向上取整，每回合向首都加入对应数值。\nMediate Politics 完成时减少 25。" }
    }),
    D("Elven Arrogance", "精灵对自身优越性的确信，150 为决策中立点。附近威胁会影响其是否愿意介入世界事务；统治者 Shadow 越高，单位 Menace 与世界恐慌造成的下降越弱。", {
      image: "./kalastrophe/enshadow.png", baseGame: true,
      modifierChange: { natural: "每回合增加（150−当前强度）÷50，逐步趋向 150。", external: "四步内每个怪物领地、每支黑暗军队各 −0.5，两项分别最多 −2.5。本国为 Dark Empire 时，军队改为每支 +0.5、最多 +2.5，并停用怪物领地的扣减。\n当地 Famine 每点 −0.05。\n四步内单位 Menace 总和 ×（1−统治者 Shadow）×−0.01，最低 −2.5。\n世界恐慌 ×（1−统治者 Shadow）×−0.1，最低 −2.5。\n四步内非精灵人类聚居地各提供 Unrest÷100÷（0.5+0.5×距离），合计再乘 0.5，最多 +3。\n统治者每级 Cruelty、Ambition 偏好各 +0.5；每级 Cooperation、Human 偏好各 −0.5。" }
    }),
    D("Ward", "抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。", {
      image: "./kalastrophe/driveBackShadow.png", baseGame: true,
      modifierChange: { natural: "每回合强度 −2。", external: "" }
    }),
    D("Deep One Cult", "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n在人类聚居地达到 300 时，将其转为 Deep One Sanctum；70% 人口经 Sanctum 转送至深海城市，统治者转为自主 Deep One。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。", {
      image: "./kalastrophe/deepOnes.png", baseGame: true,
      modifierChange: { natural: "非教程模式下，正常游戏中每回合强度 +1。", external: "加速成熟期间，每回合额外 +3。\n当地统治者对 Deep Ones 的偏好等级每级每回合调整 1 点强度：正面为增加，负面为减少。" }
    }),
    D("Item Cache", "储存和转交 Gold 与物品的缓存，最多有三个物品栏位，可通过 Access Cache 取用。Profile 低于 100 时每回合增加 2，使英雄更容易发现缓存。Gold 与物品全部取空后移除；地点成为废墟后仍保留。", {
      image: "./kalastrophe/itemCache.png", baseGame: true
    }),
    D("Geomantic Locus", "Geomancy 魔法的能量汇聚点，提供多种改变地形、支援或攻击的法术；强度会影响相关法术的威力。地点成为废墟后仍保留，强度归零时也保留。", {
      image: "./kalastrophe/geomanticLocus.png", baseGame: true,
      modifierChange: { natural: "强度低于 100 时每回合 +1；达到或超过 100 后停止自然积累。", external: "" }
    }),
    D("Tunnels", "地表通向对应地下地点的隧道入口，游戏内名称会附上目标地点名。提供 Lead Smugglers to Tunnels 与 Holy: Explore Tunnels，地点成为废墟后仍保留。", {
      image: "./kalastrophe/tunnelsBeneath.png", baseGame: true
    }),
    D("Tunnels Beneath", "位于对应地表聚居地下方的隧道，游戏内名称会附上地表地点名。提供 Place Explosives，地点成为废墟后仍保留。", {
      image: "./kalastrophe/tunnelsBeneath.png", baseGame: true
    }),
    D("Organised Dissent", "降低当地 Security 2 点，每回合使 Unrest 增加 1.2；更换统治者时移除。", {
      image: "./kalastrophe/organisedDissent.png", baseGame: true, initialValue: "100。",
      modifierChange: { natural: "每回合强度 −0.2。", external: "Organise Dissent 创建。" }
    }),
    D("Separatist Sentiments", "地方的分离主义情绪，每回合使当地 Political Agitation 增加 2。地点成为废墟后仍保留。", {
      image: "./kalastrophe/separatistSentiments.png", baseGame: true, initialValue: "50。",
      modifierChange: { natural: "每回合强度 −1。", external: "Separatism 创建。" }
    }),
    D("Misleading Clues", "把当地下一项完成时会增加 Menace 的 Agent 行动所产生的 Profile、Menace 转给预先指定的人物，然后消失。设下线索的仪式本身不会触发转嫁。", {
      image: "./kalastrophe/clues.png", baseGame: true
    }),
    D("Arcane Secret", "储存可学习的古代魔法知识，地点成为废墟后仍保留。完成 Learn Secret 会消耗该修正，并使学习者的 Arcane Knowledge 增加一级。若秘密已被转为 Dangerous Knowledge，未受控英雄学习时还会损失 Sanity。", {
      image: "./kalastrophe/arcaneSecret.png", baseGame: true
    })
  ] }]
};
