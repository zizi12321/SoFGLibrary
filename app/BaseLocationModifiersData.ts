import { D, type ArchiveRecordConfig } from "./GodArchiveTypes";

// Curated shared mechanics only. Do not copy god-specific effects or creation sources here.
export const config: ArchiveRecordConfig = {
  id: "base-location-modifiers", assetDir: "base-location-modifiers", powers: [],
  sections: [{ id: "location-modifiers", title: "地点修正", items: [
    D("Shadow", "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。", {
      image: "./ophanim/power-shadow.png", baseGame: true,
      modifierChange: { natural: "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。", external: "" }
    }),
    D("Madness", "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。", {
      image: "./iastur/madness.png", baseGame: true,
      modifierChange: { natural: "", external: "Cure Madness 完成时减少 25。" }
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
      modifierChange: { natural: "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。", external: "Lingering Resentment 每回合增加 2。\nMadness 超过 100 时，每回合增加 Madness 强度 ÷ 75。" }
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
    D("Banditry", "当地 Prosperity −0.25。", {
      image: "./cordyceps/banditry.png", baseGame: true,
      modifierChange: { natural: "强度低于 75 时每回合 +2；达到或超过 75 后停止自然增长。", external: "Madness Effect: Paranoid Delusions 出现时添加一份强度为 50 的 Banditry。" }
    })
  ] }]
};
