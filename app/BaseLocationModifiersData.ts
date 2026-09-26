import type { ArchiveRecordConfig, SectionConfig } from "./GodArchiveTypes";
import { robberBaronModifiers } from "./AgentExpansionRelatedData";

export type ModifierSourceGroup = { id: string; name: string; baseGame: boolean; description?: string; sections: SectionConfig[] };

export const modifierGroups: ModifierSourceGroup[] = [
  {
    "id": "modifiers-base",
    "name": "游戏本体",
    "baseGame": true,
    "sections": [
      {
        "id": "modifiers-base-places-0",
        "title": "共通地点",
        "items": [
          {
            "name": "Soul",
            "id": "soul",
            "baseGame": true,
            "initialValue": "",
            "text": "保存死者灵魂，显示名随物种变化，例如 Human Soul。提供 Secrets of Death、Summon First Daughter、Vampiric Curse 与 Holy: Funeral Rites；死者具有 The Hunger 时另提供 Holy: Promised Return，各行动仍有各自的执行条件。\n每回合使当地 Death 增加 1。地点成为废墟后仍保留；图像使用死者本人的肖像。",
            "modifierChange": {
              "natural": "每回合强度 −1；结算后低于 0.1 时移除。",
              "external": "Secrets of Death 完成时移除。\nVampiric Curse 或 Holy: Promised Return 完成转化时移除。\nHoly: Funeral Rites 完成时移除。"
            },
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "具有灵魂的人物死亡时留下；部分夺魂效果也会在受害者所在地留下灵魂。"
          },
          {
            "name": "Shadow",
            "text": "Shadow 是地点的黑暗侵蚀度，范围为 0–100%。达到 100% 时地点完全 Enshadowed，计入征服区域与胜利进度；当地贵族会获得 Shadow，并不再为威胁进行防御。Shadow 会按地点的流动规则向相邻地点传播，也会逐步传给当地统治者；非 Chosen One Agent 在当地休息时，其个人 Shadow 会向地点值靠拢。",
            "image": "./ophanim/power-shadow.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合从符合地点 Shadow 流动规则的相邻高 Shadow 地点传播。\n传播量受相邻地点 Shadow、Ward、Infiltration 和难度影响。\n最终限制在 0–100%。",
              "external": "<CrossReference name=\"Enshadow\" href=\"?page=points-of-interest#entry-place-task-base-ch-enshadow\" meta=\"挑战\" text=\"提高当地 Shadow，建立能向周边传播黑暗的据点。\" image=\"/locations/game/enshadow.png\" /> 完成时将当地 Shadow 设为 100%。\n<CrossReference name=\"Drive Back Shadow\" href=\"?page=locations#entry-place-task-base-ch-drivebackshadow\" meta=\"英雄任务\" text=\"降低当地 Shadow；相邻人类聚居地中最低的 Shadow 越低，清除效果越强。\" image=\"/locations/game/driveBackShadow.png\" /> 完成时，Shadow 改为当前值与最低 Shadow 人类邻地的平均值；没有更低的合格邻地时不变。\nDeath's Shadow 完成时，每消耗 1 Death 增加 1 个百分点，最高 100%。\nMalign Catch 每回合 +0.15 个百分点，最高 100%。\nDeep One Cult 强度超过 100 时，每回合 +Cult 强度÷1000 个百分点，最高 100%。\nWell of Shadows 增强向邻地的传播，Ward 抑制接收。"
            },
            "id": "shadow",
            "modifierLocations": "具有 Shadow 的地点；自然传播遵循当地的流动规则。",
            "modifierSource": "相邻 Shadow 传播、<CrossReference name=\"Enshadow\" href=\"?page=points-of-interest#entry-place-task-base-ch-enshadow\" meta=\"挑战\" text=\"提高当地 Shadow，建立能向周边传播黑暗的据点。\" image=\"/locations/game/enshadow.png\" />、Well of Shadows、Ghast、Deep One Cult、Malign Catch 及通用事件。"
          },
          {
            "name": "Arcane Fortress",
            "text": "保护正在引导法术的人物，抵挡 Geomancy: Attack Channeler 一类的远程魔法攻击。每点来袭伤害分别判定：强度达到 1 时必定拦截；不足 1 时，拦截率为强度×100%。每次拦截消耗 10 点强度，最低降至 0。未挡住的伤害继续分配给人物或随从。地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/arcaneFortress.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "<CrossReference name=\"Geomancy: Arcane Fortress\" href=\"?page=locations#entry-place-task-base-mg-aranefortresstomb\" meta=\"英雄任务\" text=\"利用墓穴的力量建立 Arcane Fortress，无需 Geomantic Locus。\" image=\"/locations/game/arcaneFortress.png\" /> 增加施法前 Geomantic Locus 的强度数值，结果最高 100。\nthe Elder Tomb 版本的 Arcane <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" /> 增加 100，结果最高 100。\nDeath: Macabre <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" /> 增加施法前 Death 的强度数值，结果最高 100。\nMagical Bulwark：人物正在引导行动且城堡强度低于 50 时，每回合 +5。\n吸收一次魔法攻击的 1 HP 伤害，强度 −10。"
            },
            "id": "arcane-fortress",
            "modifierLocations": "Geomantic Locus、具有 Death 的地点，以及 the Elder Tomb。",
            "modifierSource": "<CrossReference name=\"Geomancy: Arcane Fortress\" href=\"?page=locations#entry-place-task-base-mg-aranefortresstomb\" meta=\"英雄任务\" text=\"利用墓穴的力量建立 Arcane Fortress，无需 Geomantic Locus。\" image=\"/locations/game/arcaneFortress.png\" />、Death: Macabre <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" />；Magical Bulwark 特质。"
          },
          {
            "name": "Devastation",
            "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" /> <CrossReference name=\"Ruins\" href=\"?page=locations#entry-location-set-cityruins\" meta=\"地点\" text=\"聚居地毁灭后留下的地点。会保留原地点的 Shadow，以及允许在毁灭后存续的兴趣点；地点自身不提供 Explore Ruins。\n\n出现方式\n聚居地执行毁灭流程后形成；名称通常为 Ruins of [地点名]。\n\n可能配置的兴趣点\nAncient Ruins、Brother of Sleep、The Entrance、Primal Font。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_minor_ruins.png\" /> 的聚居地会被摧毁。",
            "image": "./location-modifiers/game/raid.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "非教程模式下，每回合强度 −0.5。",
              "external": "Reconstruction Effort 每回合 −4。\nDwarven Engineering 完成时 −25。\n战斗、劫掠和攻击法术按对应行动加入 Devastation。"
            },
            "id": "devastation",
            "modifierLocations": "聚居地与发生战斗、袭击、灾害的地点。",
            "modifierSource": "军队战斗、劫掠、屠城、Geomancy 攻击、事件等。"
          },
          {
            "name": "Death",
            "text": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。",
            "image": "./location-modifiers/game/death.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −0.5。",
              "external": "Soul 每回合 +1。\nPlague 每回合 +1，Plague 超过 100 时改为 +2；<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 不产生此项。\nHunger / Famine 将当次有效人口死亡计入 Death。\n<CrossReference name=\"Catacombs\" href=\"?page=points-of-interest#entry-location-sub-catacombs\" meta=\"兴趣点\" text=\"当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。\n\n出现方式\n普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/catacombs.png\" /> 在本地 Death 低于 200 时，每回合从每个相邻地点各取至多 5。\nDeath: Macabre <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" /> 每次消耗 10。\nGeomancy: Weave Cthonians 消耗本地 Death 与 Geomantic Locus 的较小值。\nDeath's Shadow：每增加 1 个百分点 Shadow 消耗 1。\nDeath: Death's Shadow 消耗当地至多 100，召唤 Ghast。\nHoly: Memorial Service 完成时 −100。\n<CrossReference name=\"Brutal Crackdown\" href=\"?page=locations#entry-place-ruler-base-act-brutalcrackdown\" meta=\"统治者行动\" text=\"Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。\" image=\"/locations/game/brutalJustice.png\" /> 完成时 +5。\n战斗中的伤亡、屠城和献祭增加 Death。"
            },
            "id": "death",
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "人物灵魂消散、人口死亡、战斗与献祭、灾害及通用事件。"
          },
          {
            "name": "Item Cache",
            "text": "储存和转交 Gold 与物品的缓存，最多有三个物品栏位，可通过 Access Cache 取用。Profile 低于 100 时每回合增加 2，使英雄更容易发现缓存。Gold 与物品全部取空后移除；地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/itemCache.png",
            "baseGame": true,
            "id": "item-cache",
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "人物死亡掉落、Drop Item Cache、Taunting Lure 的个人物品及通用事件。",
            "modifierChange": {
              "natural": "",
              "external": "Access Cache 可放入或取出物品与 Gold；取空后移除。"
            }
          },
          {
            "name": "Geomantic Locus",
            "text": "Geomancy 魔法的能量汇聚点，提供多种改变地形、支援或攻击的法术；强度会影响相关法术的威力。地点成为废墟后仍保留，强度归零时也保留。",
            "image": "./location-modifiers/game/geomanticLocus.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "强度低于 100 时每回合 +1；达到或超过 100 后停止自然积累。",
              "external": "<CrossReference name=\"Geomancy: Arcane Fortress\" href=\"?page=locations#entry-place-task-base-mg-aranefortresstomb\" meta=\"英雄任务\" text=\"利用墓穴的力量建立 Arcane Fortress，无需 Geomantic Locus。\" image=\"/locations/game/arcaneFortress.png\" /> 消耗 10。\nGeomancy: Weave Cthonians 消耗 Geomantic Locus 与当地 Death 的较小值。\n其他 Geomancy 法术按施法规则消耗节点强度。\nMagical Conduit：人物所在地节点强度低于 100 时，每回合 +2。"
            },
            "id": "geomantic-locus",
            "modifierLocations": "地图生成的陆地节点、Orc Shaman 建立节点的地点，以及探索遗迹所得节点。",
            "modifierSource": "地图生成、Geomancy 节点建立仪式、遗迹事件。"
          },
          {
            "name": "Misleading Clues",
            "text": "把当地下一项完成时会增加 Menace 的 Agent 行动所产生的 Profile、Menace 转给预先指定的人物，然后消失。设下线索的仪式本身不会触发转嫁。",
            "image": "./location-modifiers/game/clues.png",
            "baseGame": true,
            "id": "misleading-clues",
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Courtier 的 Misleading Clues 仪式。",
            "modifierChange": {
              "natural": "",
              "external": "当地有 Agent 完成会产生 Menace 的行动时消耗这份线索。"
            }
          },
          {
            "name": "Arcane Secret",
            "text": "储存可学习的古代魔法知识，地点成为废墟后仍保留。完成 Learn Secret 会消耗该修正，并使学习者的 Arcane Knowledge 增加一级。若秘密已被转为 Dangerous Knowledge，未受控英雄学习时还会损失 Sanity。",
            "image": "./location-modifiers/game/arcaneSecret.png",
            "baseGame": true,
            "id": "arcane-secret",
            "modifierLocations": "<CrossReference name=\"Library\" href=\"?page=points-of-interest#entry-location-sub-library\" meta=\"兴趣点\" text=\"每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 Weaken Iastur。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/library.png\" />、死亡灵魂研究所在地、实验或事件产生秘密的地点。",
            "modifierSource": "<CrossReference name=\"Library\" href=\"?page=points-of-interest#entry-location-sub-library\" meta=\"兴趣点\" text=\"每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 Weaken Iastur。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/library.png\" /> 产出、Secrets of Death、Medical Experimentation 与通用事件。",
            "modifierChange": {
              "natural": "",
              "external": "Learn Secret、Destroy Arcane Secret 等完成时消耗秘密。\nDangerous Knowledge 将其标记为危险知识，不以强度多少区分。"
            }
          },
          {
            "id": "bound-spell-twisted-space",
            "name": "Bound Spell: Twisted Space",
            "text": "下一个在此结束回合、尚未被打断的非玩家英雄被 Disrupt 5 回合。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Spellbinder 的 Twisted Space 仪式。",
            "modifierChange": {
              "natural": "",
              "external": "命中一个合格英雄后移除。"
            },
            "image": "./location-modifiers/game/purpleWeb.png"
          },
          {
            "id": "bound-spell-lash",
            "name": "Bound Spell: Lash",
            "text": "下一个在此结束回合、尚未被打断的非玩家英雄损失 3 HP，并失去队伍中第一个随从；伤害可致死。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Spellbinder 的 Lash Trap 仪式。",
            "modifierChange": {
              "natural": "",
              "external": "命中一个合格英雄后移除。"
            },
            "image": "./location-modifiers/game/lashTrap.png"
          },
          {
            "id": "bound-spell-infuse-power",
            "name": "Bound Spell: Infuse Power",
            "text": "当地玩家控制的单位执行行动时，每回合额外获得至多 4 点进度，从修正强度等量支付。多名单位依次使用同一份储量。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Spellbinder 的 Infuse Power 仪式。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "",
              "external": "每名受益单位每回合消耗 min(4,剩余整数强度)；储量耗尽后消失。"
            },
            "image": "./location-modifiers/game/infusePower.png"
          },
          {
            "id": "taunting-lure",
            "name": "Taunting Lure",
            "text": "吸引英雄执行 Purge Taunting Lure；英雄完成后留下属于自己的 Personal Item Cache，可用于针对他的 Blood Magic。诱饵的吸引力随存在回合增长。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Blood Magic: Taunting Lure。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "每回合强度 −1；吸引英雄的累计值每回合 +1。",
              "external": "Purge Taunting Lure 完成时移除。"
            },
            "image": "./location-modifiers/game/tauntingLure.png"
          },
          {
            "id": "entangling-web",
            "name": "Entangling Web",
            "text": "下一个在当地处于前往地点或前往行动途中、非玩家控制的英雄被 Disrupt 5 回合。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Webspinner 随从留下蛛网。",
            "modifierChange": {
              "natural": "",
              "external": "命中合格英雄后移除。"
            },
            "image": "./location-modifiers/game/web.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-1",
        "title": "人类聚居地",
        "items": [
          {
            "name": "Hunger / Famine",
            "id": "hunger-famine",
            "image": "./location-modifiers/game/famine.png",
            "baseGame": true,
            "initialValue": "",
            "text": "同一修正在强度低于 100 时显示 Hunger，达到 100 后显示 Famine。Prosperity 修正为 −强度/200；达到 50 后不再提供通常的休息挑战。\n普通模式下，低于 100 时每回合 Unrest +4；100 至不足 200 时每回合 Unrest +16、人口 −2；200 至 300 时每回合 Unrest +4、人口减少 ⌊max(2,人口 × 0.05)⌋；超过 300 时人类类聚居地毁灭。\n人口损失计入 Death，剩余人口最低保留 1；100 至不足 200 时若扣减后人口不大于 0，该次不增加 Death。开启难民且地点允许时，另生成损失人口一半规模的难民，向下取整，包含在本次人口扣减中。",
            "modifierChange": {
              "natural": "令 P 为常规人口结算后的当前人口，F 为当轮本地产粮与进口之和。\nP>F 时，每回合 +min(10,max(5,P−F))。\nP≤F 时，每回合 −max(10,5×(F−P))。",
              "external": ""
            },
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "当地人口超过食物供应时积累。"
          },
          {
            "name": "Plague",
            "text": "疾病每点强度使 Prosperity −0.003。普通人类聚居地中，强度不高于 100 时每回合累计 强度/450 人死亡并增加 1 Death；超过 100 时改为 强度/300 人和 2 Death。整数死亡数结算后保留小数余量；<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 不受到这项人口与 Death 结算。\n每回合增加 ⌊强度/100⌋+1 的 Unrest。强度达到 300 或人口耗尽时摧毁当地聚居地。\nPlague 同时促成 Plague Immunity，抵消后续增长。",
            "image": "./location-modifiers/game/plague.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "默认难度下每回合强度 +2。",
              "external": "<CrossReference name=\"Start Plague\" href=\"?page=points-of-interest#entry-place-task-base-ch-startplague\" meta=\"挑战\" text=\"建立 Plague，降低 Prosperity 与人口，并可能继续向邻地传播。\" image=\"/locations/game/plague.png\" /> 完成时 +100。\nCultivate Disease 完成时 +40。\nTreat Disease 完成时 −60。\n<CrossReference name=\"Holy: Start Plague\" href=\"?page=points-of-interest#entry-place-task-base-ch-h-startplague\" meta=\"宗教任务\" text=\"当地 Plague +50。\" image=\"/locations/game/plague.png\" /> 完成时 +50；Holy: Cure Plague 完成时 −100。\n感染邻地的 Plague 超过 60（邻地有 Quarantine 时须超过 150），且本地低于其一半时，每个感染邻地每回合传入 1。\n<CrossReference name=\"Plague Ships\" href=\"?page=points-of-interest#entry-place-task-base-ch-plagueships\" meta=\"挑战\" text=\"把 Plague 沿贸易路线传给其他 Docks。\" image=\"/locations/game/plague.png\" /> 向同贸易路线上的其他港口加入 20，目标 Plague 须低于 100；当前实现还会在可用性检查时执行该传播。\nPlague Immunity 每有 50 点，每回合 −1，向下取整。\n<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 每回合 −10。\nHealers 正等级时，<CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\n\n可以执行：宫殿、神殿与女巫集会所通用。\n\n可以执行：野外隐匿兴趣点通用。\n\n可以执行：随从招募兴趣点通用。\" image=\"/locations/game/temple.png\" /> 每级每回合 −1；负等级时，在 Plague 低于 150 的 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\n\n可以执行：宫殿、神殿与女巫集会所通用。\n\n可以执行：野外隐匿兴趣点通用。\n\n可以执行：随从招募兴趣点通用。\" image=\"/locations/game/temple.png\" /> 每级每回合 +1。"
            },
            "id": "plague",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "<CrossReference name=\"Start Plague\" href=\"?page=points-of-interest#entry-place-task-base-ch-startplague\" meta=\"挑战\" text=\"建立 Plague，降低 Prosperity 与人口，并可能继续向邻地传播。\" image=\"/locations/game/plague.png\" />、<CrossReference name=\"Holy: Start Plague\" href=\"?page=points-of-interest#entry-place-task-base-ch-h-startplague\" meta=\"宗教任务\" text=\"当地 Plague +50。\" image=\"/locations/game/plague.png\" />、相邻疾病传播、<CrossReference name=\"Plague Ships\" href=\"?page=points-of-interest#entry-place-task-base-ch-plagueships\" meta=\"挑战\" text=\"把 Plague 沿贸易路线传给其他 Docks。\" image=\"/locations/game/plague.png\" />、带病人物及事件。"
          },
          {
            "name": "Well of Shadows",
            "text": "使 Shadow 向相邻低 Shadow 地点额外传播。传播量随两地 Shadow 差值增大，并受接收地点的 Ward 抑制；地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/wellOfShadows.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "<CrossReference name=\"Well of Shadows\" href=\"?page=locations#entry-place-task-base-ch-wellofshadows\" meta=\"挑战\" text=\"建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。\" image=\"/locations/game/wellOfShadows.png\" /> 完成时 +100。"
            },
            "id": "well-of-shadows",
            "modifierLocations": "人类类聚居地；也可由事件在其他地点建立。",
            "modifierSource": "<CrossReference name=\"Well of Shadows\" href=\"?page=locations#entry-place-task-base-ch-wellofshadows\" meta=\"挑战\" text=\"建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。\" image=\"/locations/game/wellOfShadows.png\" /> 挑战与相关事件。"
          },
          {
            "name": "Military Fervour",
            "text": "提高以当地为故乡的 Human Army 最大 HP，倍率为 1 + min(强度,100)/100。",
            "image": "./location-modifiers/game/unit_humanArmy.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "非教程模式下，每回合强度 −2。",
              "external": "<CrossReference name=\"Holy: Military Fervour\" href=\"?page=locations#entry-place-task-base-ch-h-militaryfervour\" meta=\"宗教任务\" text=\"当地 Military Fervour +50，增强军队。\" image=\"/locations/game/war.png\" /> 完成时 +50。\n<CrossReference name=\"Conclave for a Grand Army\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-grandarmy\" meta=\"英雄任务\" text=\"Chosen One 为 Alliance 集结更强的军队。\" image=\"/locations/game/conclave.png\" /> 完成时，为 Alliance 的各个 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" /> +100。"
            },
            "id": "military-fervour",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "<CrossReference name=\"Conclave for a Grand Army\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-grandarmy\" meta=\"英雄任务\" text=\"Chosen One 为 Alliance 集结更强的军队。\" image=\"/locations/game/conclave.png\" />、<CrossReference name=\"Holy: Military Fervour\" href=\"?page=locations#entry-place-task-base-ch-h-militaryfervour\" meta=\"宗教任务\" text=\"当地 Military Fervour +50，增强军队。\" image=\"/locations/game/war.png\" />。"
          },
          {
            "name": "Madness",
            "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。\n达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。",
            "image": "./location-modifiers/game/madness.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "",
              "external": "Cure Madness 完成时 −25。\nDeep One Cult 在当地 Madness 低于 Cult 强度−100 时，每回合 +1.5。\nMalign Catch 在当地 Madness 低于 150 时，每回合 +1。"
            },
            "id": "madness",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Deep One Cult、Malign Catch、疯狂人物造成的影响及通用事件。"
          },
          {
            "name": "Madness Effect: Catatonia",
            "text": "当地 Prosperity −0.75、Security −10，食物产出固定减少 50。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-catatonia",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Madness Effect: Masochism",
            "text": "当地非玩家控制且不是 Chosen One 的人物单位，每回合个人 Shadow 增加 5 个百分点，最高 100%。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-masochism",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Madness Effect: Fascination",
            "text": "每逢 10 的倍数回合，为玩家恢复 1 点 Power，不超过当前上限。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-fascination",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Madness Effect: Psychotics",
            "text": "出现时把当地人口降至原来的 75%，向下取整且最低为 1，并增加 100 Death；持续提供 Security −2。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-psychotics",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Madness Effect: Hypochondria",
            "text": "当地 Prosperity −0.65。出现时添加强度 50 的 Quarantine，并增加 100 Plague Immunity。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-hypochondria",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Madness Effect: Paranoid Delusions",
            "text": "当地 Security +5。每回合使当地除 Chosen One 外的人物单位个人 Shadow 增加 5 个百分点，最高 100%，包括我方 Agent。出现时添加强度 50 的 Banditry。",
            "image": "./location-modifiers/game/madnessUpsidedown.png",
            "baseGame": true,
            "id": "madness-effect-paranoid-delusions",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Madness 达到 300 时的 Madness Crisis；当地尚无任何 Madness Effect 时，六种结果等概率出现。"
          },
          {
            "name": "Lingering Resentment",
            "text": "居民对统治者残酷惩罚的长期怨恨，每回合使当地 Unrest 增加 2。",
            "image": "./location-modifiers/game/unrest.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −当地统治者的 Intrigue；没有统治者时没有这项衰减。",
              "external": "<CrossReference name=\"Brutal Crackdown\" href=\"?page=locations#entry-place-ruler-base-act-brutalcrackdown\" meta=\"统治者行动\" text=\"Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。\" image=\"/locations/game/brutalJustice.png\" /> 完成时建立强度 30 的修正。\nUnrest 达到 300 并触发危机时移除。"
            },
            "id": "lingering-resentment",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "<CrossReference name=\"Brutal Crackdown\" href=\"?page=locations#entry-place-ruler-base-act-brutalcrackdown\" meta=\"统治者行动\" text=\"Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。\" image=\"/locations/game/brutalJustice.png\" /> 统治者行动。"
          },
          {
            "name": "Unrest",
            "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。",
            "image": "./location-modifiers/game/unrest.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "默认按当地统治者的 Command 每点每回合 −0.5；没有统治者时不产生这项衰减。\n若关闭统治者特质影响规则，则每回合固定 −1。\n非人类聚居地每回合将强度清零。",
              "external": "Lingering Resentment 每回合 +2。\nMadness 超过 100 时，每回合 +Madness÷75。\nOrganised Dissent 每回合 +1.2。\nPlague 每回合 +⌊Plague÷100⌋+1。\nHunger / Famine：低于 100 时每回合 +4；100 至不足 200 时 +16；200 至 300 时 +4。\n<CrossReference name=\"Tax Citizens\" href=\"?page=locations#entry-place-ruler-base-act-taxcitizens\" meta=\"统治者行动\" text=\"统治者获得 ⌊45 × Prosperity × 人口/100⌋ Gold；Unrest 增加 20。\" image=\"/locations/game/tax.png\" /> 完成时 +20。\n<CrossReference name=\"Brutal Crackdown\" href=\"?page=locations#entry-place-ruler-base-act-brutalcrackdown\" meta=\"统治者行动\" text=\"Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。\" image=\"/locations/game/brutalJustice.png\" /> 完成时 −40。\n<CrossReference name=\"Reduce Unrest\" href=\"?page=locations#entry-place-ruler-base-act-reduceunrest\" meta=\"统治者行动\" text=\"消耗 10 Gold，Unrest 减少 25。\" image=\"/locations/game/reduceUnrest.png\" /> 完成时 −25。\nFestival 完成时 −20。\n<CrossReference name=\"Sabotage Other Ruler\" href=\"?page=locations#entry-place-ruler-base-act-sabotageotherruler\" meta=\"统治者行动\" text=\"选取本国统治者最厌恶的另一名领主，等概率造成：Political Gridlock、最多损失 100 Gold，或当地 Unrest 增加 100。\" image=\"/locations/game/vendetta.png\" /> 对目标所在地 +100。\nHoly: Explore Tunnels 完成时 +10。\n具有 The Hunger 的统治者完成 Feed 时 +50。"
            },
            "id": "unrest",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "<CrossReference name=\"Tax Citizens\" href=\"?page=locations#entry-place-ruler-base-act-taxcitizens\" meta=\"统治者行动\" text=\"统治者获得 ⌊45 × Prosperity × 人口/100⌋ Gold；Unrest 增加 20。\" image=\"/locations/game/tax.png\" />、<CrossReference name=\"Reduce Unrest\" href=\"?page=locations#entry-place-ruler-base-act-reduceunrest\" meta=\"统治者行动\" text=\"消耗 10 Gold，Unrest 减少 25。\" image=\"/locations/game/reduceUnrest.png\" />、Festival、<CrossReference name=\"Brutal Crackdown\" href=\"?page=locations#entry-place-ruler-base-act-brutalcrackdown\" meta=\"统治者行动\" text=\"Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。\" image=\"/locations/game/brutalJustice.png\" />、政治破坏、Hunger / Famine、Plague、Madness、Lingering Resentment、Organised Dissent 与通用事件。"
          },
          {
            "name": "Bribed Guards",
            "text": "部分守卫被贿赂，暂时降低当地 Security，默认降低 2。",
            "image": "./location-modifiers/game/bribe.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −1，归零后移除。",
              "external": "<CrossReference name=\"Bribe Guards\" href=\"?page=locations#entry-place-task-base-ch-bribeguards\" meta=\"挑战\" text=\"消耗 25 Gold，建立 Bribed Guards，使 Security 降低 2，持续 25 回合。\" image=\"/locations/game/bribe.png\" /> 建立强度 25 的修正。\n每份修正各自到期；相关事件可指定不同持续时间。"
            },
            "id": "bribed-guards",
            "modifierLocations": "可贿赂守卫的人类聚居地；事件也可在其他有守卫的地点建立。",
            "modifierSource": "<CrossReference name=\"Bribe Guards\" href=\"?page=locations#entry-place-task-base-ch-bribeguards\" meta=\"挑战\" text=\"消耗 25 Gold，建立 Bribed Guards，使 Security 降低 2，持续 25 回合。\" image=\"/locations/game/bribe.png\" />、相关事件与疯狂人物行为。"
          },
          {
            "name": "Quarantine",
            "text": "当地 Prosperity −0.1；Plague 向相邻地点传播所需的强度门槛由超过 60 提高到超过 150。",
            "image": "./location-modifiers/game/quarantine.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −1，归零后移除。",
              "external": "<CrossReference name=\"Impose Quarantine\" href=\"?page=locations#entry-place-ruler-base-an-quarantine\" meta=\"统治者行动\" text=\"消耗 25 Gold，给国内已有 Plague 的人类体系聚居地设置强度 25 的 Quarantine。\" image=\"/locations/game/quarantine.png\" /> 在本国存在 Plague 的聚居地建立隔离，强度设为 25。\nMadness Effect: Hypochondria 出现时添加强度 50 的隔离。"
            },
            "id": "quarantine",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "国家的 Quarantine 行动、Madness Effect: Hypochondria。"
          },
          {
            "name": "Plague Immunity",
            "text": "每有 50 点强度，每回合使当地 Plague 减少 1 点，计算时向下取整。",
            "image": "./location-modifiers/game/plagueImmunity.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −2，归零后移除。",
              "external": "当地存在 Plague 时，每回合增加统治者 Lore×1.5；没有统治者时没有这项增加。\nNovel Strain 使本地及相邻地点的强度减半。\nMadness Effect: Hypochondria 出现时 +100。\n<CrossReference name=\"Conclave of the Remedy\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-remedy\" meta=\"英雄任务\" text=\"Chosen One 召集君主分发 Plague 的解药。\" image=\"/locations/game/conclave.png\" /> 为各人类国家的聚居地 +100。"
            },
            "id": "plague-immunity",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Plague 暴露、Madness Effect: Hypochondria、<CrossReference name=\"Conclave of the Remedy\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-remedy\" meta=\"英雄任务\" text=\"Chosen One 召集君主分发 Plague 的解药。\" image=\"/locations/game/conclave.png\" /> 等。"
          },
          {
            "name": "Banditry",
            "text": "当地 Prosperity −0.25，提供 Combat Banditry、Arm Bandits 与 Slaughter Bandits。\nArm Bandits 消耗 20 Gold，使 Combat Banditry 的额外危险至少达到 7。",
            "image": "./location-modifiers/game/banditry.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "强度低于 75 时每回合 +2；达到或超过 75 后停止自然增长。",
              "external": "Madness Effect: Paranoid Delusions 出现时添加强度 50 的 Banditry。\nCombat Banditry 或 Slaughter Bandits 完成时移除。"
            },
            "id": "banditry",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "通用事件；Madness Effect: Paranoid Delusions。"
          },
          {
            "name": "Ward",
            "text": "抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。",
            "image": "./location-modifiers/game/driveBackShadow.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "<CrossReference name=\"Ward Against Shadow\" href=\"?page=locations#entry-place-ruler-base-act-wardagainstshadow\" meta=\"统治者行动\" text=\"Ward 增加 100，阻止 Shadow 向当地传播。\" image=\"/locations/game/driveBackShadow.png\" /> 完成时 +100。\n<CrossReference name=\"Holy: Ward\" href=\"?page=locations#entry-place-task-base-ch-h-ward\" meta=\"宗教任务\" text=\"当地 Ward +100。\" image=\"/locations/game/driveBackShadow.png\" /> 完成时 +100；<CrossReference name=\"Holy: Remove Ward\" href=\"?page=locations#entry-place-task-base-ch-h-removeward\" meta=\"宗教任务\" text=\"当地 Ward −100。\" image=\"/locations/game/driveBackShadow.png\" /> 完成时 −100。\nWeaken Ward 完成时减半。\nCandle Circles：正等级且当地 Ward 低于 75 时，每个 <CrossReference name=\"Temple\" href=\"?page=points-of-interest#entry-location-sub-temple\" meta=\"兴趣点\" text=\"所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、False Miracle、Undermine Religion 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。\n\n出现方式\nHoly: Build Temple 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、野外兴趣点地点。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\n\n可以执行：宫殿、神殿与女巫集会所通用。\n\n可以执行：野外隐匿兴趣点通用。\n\n可以执行：随从招募兴趣点通用。\" image=\"/locations/game/temple.png\" /> 每回合增加等级×0.5；负等级时每回合增加等级×1.5（即扣减）。\nSign of Unwarding 由携带者使当地 Ward 每回合 −2。\nDivine Entity 的 Warding 惩罚为崇拜该实体的每个聚居地 +25。"
            },
            "id": "ward",
            "modifierLocations": "聚居地；主要由统治者、英雄和宗教产生。",
            "modifierSource": "<CrossReference name=\"Ward Against Shadow\" href=\"?page=locations#entry-place-ruler-base-act-wardagainstshadow\" meta=\"统治者行动\" text=\"Ward 增加 100，阻止 Shadow 向当地传播。\" image=\"/locations/game/driveBackShadow.png\" />、<CrossReference name=\"Holy: Ward\" href=\"?page=locations#entry-place-task-base-ch-h-ward\" meta=\"宗教任务\" text=\"当地 Ward +100。\" image=\"/locations/game/driveBackShadow.png\" />、<CrossReference name=\"Redeem Sovereign\" href=\"?page=locations#entry-place-task-base-ch-redeemsovereign\" meta=\"英雄任务\" text=\"清空君主 Shadow，建立 Ward，并驱散周边 Shadow。\" image=\"/locations/game/crown.png\" />、Candle Circles 及通用事件。"
          },
          {
            "name": "Organised Dissent",
            "text": "降低当地 Security 2 点，每回合使 Unrest 增加 1.2；更换统治者时移除。",
            "image": "./location-modifiers/game/organisedDissent.png",
            "baseGame": true,
            "initialValue": "100。",
            "modifierChange": {
              "natural": "每回合强度 −0.2。",
              "external": "<CrossReference name=\"Organise Dissent\" href=\"?page=locations#entry-place-task-base-ch-organisedissent\" meta=\"挑战\" text=\"建立 Organised Dissent，持续降低 Security、增加 Unrest，直到其持续期结束或统治者更换。\" image=\"/locations/game/organisedDissent.png\" /> 创建。"
            },
            "id": "organised-dissent",
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "<CrossReference name=\"Organise Dissent\" href=\"?page=locations#entry-place-task-base-ch-organisedissent\" meta=\"挑战\" text=\"建立 Organised Dissent，持续降低 Security、增加 Unrest，直到其持续期结束或统治者更换。\" image=\"/locations/game/organisedDissent.png\" />。"
          },
          {
            "id": "cult-exposed",
            "name": "Cult Exposed",
            "text": "让英雄能够通过 Root Out Infiltration 清除当地全部渗透；Agent 可通过 Hide Cultists 重新掩护信徒。",
            "baseGame": true,
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "统治者完成 <CrossReference name=\"Expose Cultists\" href=\"?page=locations#entry-place-ruler-base-act-exposecultists\" meta=\"统治者行动\" text=\"创建 Cultists Exposed，使英雄可以调查并逮捕当地渗透者。\" image=\"/locations/game/cultExposed.png\" />。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Hide Cultists 或 Root Out Infiltration 完成时移除。"
            },
            "image": "./location-modifiers/game/cultExposed.png"
          },
          {
            "id": "reconstruction-effort",
            "name": "Reconstruction Effort",
            "text": "每回合使当地 Devastation −4。",
            "baseGame": true,
            "modifierLocations": "人类类聚居地；包括 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />及共享该机制的精灵、矮人聚居地。",
            "modifierSource": "Holy: Charitable Works。",
            "initialValue": "40。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": ""
            },
            "image": "./location-modifiers/game/reconstruction.png"
          },
          {
            "id": "daughter-seer",
            "name": "Daughter Seer",
            "baseGame": true,
            "text": "标出 Daughter Seer 所在地点。玩家 Agent 到达这里后触发 The Seer，可招募她成为随从。",
            "modifierLocations": "The Daughterhood 标记的沙漠人类聚居地。",
            "modifierSource": "The Daughterhood 事件选择 Call her to serve。\n<CrossReference name=\"The Daughterhood\" href=\"?page=events#entry-event-base-anw-seerdaughter\" meta=\"事件\" text=\"回合检查地点时触发。\n\n触发条件\n「Daughter Seer 招募进度」剧情记录 = 0\n并且 回合 大于 50\n并且 地形为 Desertlike\n并且 当地是人类聚居地。\n\n单次候选检查概率：2%。\" image=\"./events/5de3469339eabba0.jpg\" />。",
            "modifierChange": {
              "natural": "",
              "external": "完成相遇与招募后清除对应标记。"
            },
            "image": "./location-modifiers/mod/default.icon_daughterSeer.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-2",
        "title": "沿海聚居地",
        "items": [
          {
            "name": "Malign Catch",
            "text": "每回合使当地 Shadow 增加 0.15 个百分点，最高 100%；Madness 低于 150 时每回合增加 1。\n同样在 Madness 低于 150 时，按 (强度 −100)/0.0075 累积精神侵蚀；累积超过 1 后归零，并使当地统治者 Sanity −1。",
            "image": "./location-modifiers/game/malignCatch.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "",
              "external": "Start Deep Cult 完成时移除，并建立 Deep One Cult。"
            },
            "id": "malign-catch",
            "modifierLocations": "带有已渗透 <CrossReference name=\"Docks\" href=\"?page=points-of-interest#entry-location-sub-docks\" meta=\"兴趣点\" text=\"增加 0.2 Prosperity 影响值，并提供 Malign Catch、Plague Ships 与渗透。\n\n出现方式\n沿海 City 创建时固定配置。\n\n可出现地点\nCity。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/docks.png\" /> 的聚居地。",
            "modifierSource": "<CrossReference name=\"Malign Catch\" href=\"?page=points-of-interest#entry-place-task-base-ch-maligncatch\" meta=\"挑战\" text=\"建立 Malign Catch，逐回合增强 Shadow、Madness，并为发展 Deep One Cult 提供入口。\" image=\"/locations/game/malignCatch.png\" /> 挑战。"
          },
          {
            "name": "Deep One Cult",
            "text": "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n在人类聚居地达到 300 时，将其转为 <CrossReference name=\"Deep One Sanctum\" href=\"?page=locations#entry-location-set-deeponesanctum\" meta=\"地点\" text=\"人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。\n\n出现方式\nDeep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。\n\n可能配置的兴趣点\nSanctum。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_evil_deepOneSanctum.png\" />；70% 人口经 <CrossReference name=\"Sanctum\" href=\"?page=points-of-interest#entry-location-sub-deep-sanctum\" meta=\"兴趣点\" text=\"Deep One Sanctum 固定带有的兴趣点。已经处于渗透状态，不可再渗透；提供野外 Lay Low 与 Propagation。\n\n出现方式\nDeep One Sanctum 创建时配置。\n\n可出现地点\nDeep One Sanctum。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：野外隐匿兴趣点通用。\" image=\"/locations/game/deepOneSanctum.png\" /> 转送至深海城市，统治者转为自主 Deep One。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。\n还提供 Conceal Deep Ones、Human Appearance 与 Call of the Deep 等行动。",
            "image": "./location-modifiers/game/deepOnes.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "非教程模式下，正常游戏中每回合强度 +1。",
              "external": "加速成熟期间，每回合额外 +3。\n当地统治者对 Deep Ones 的偏好等级每级每回合调整 1 点强度：正面为增加，负面为减少。\nFund Deep Ones 消耗 100 Gold，延长 30 回合加速成熟；Empower Deep Ones 消耗 1 Power，延长 20 回合。\nStart Deep Cult 建立强度 1 的教派；Start Deep One Cult 在已有教派时 +25，没有时建立强度 1 的教派。\nDecimate Deep Ones 将强度、Menace、Profile 各减半。\nRemove Deep Ones 移除当地教派，并在其他合格沿海聚居地建立强度 1 的教派（存在可用目的地时）。"
            },
            "id": "deep-one-cult",
            "modifierLocations": "沿海人类聚居地；繁殖行动与事件还可在符合条件的其他地点建立。",
            "modifierSource": "Start Deep Cult、Start Deep One Cult、Abyssal Faith 教义与通用事件。"
          },
          {
            "id": "raided-port",
            "name": "Raided Port",
            "text": "Prosperity −0.3、Security −2，食物产出乘以 0.6。",
            "baseGame": true,
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Raid Port 完成时建立；该行动还立即将当地现有 Defence 减半。",
            "initialValue": "50；未受其他影响时持续约 25 回合。",
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": ""
            },
            "image": "./location-modifiers/game/raidPort.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-3",
        "title": "国家与首都",
        "items": [
          {
            "name": "Orcish Funding",
            "text": "每逢 10 的倍数回合，从资助国每位地方统治者抽取其 Gold 的 20%，分别向下取整。若受资助部落存在强度低于 290 的 Orcish Industry，则将总额平均分配后按 50% 转为各处工业强度，最高 300。没有合适工业地点时不收款。\n资助国或部落消亡、或修正所在地易主时移除。",
            "image": "./location-modifiers/game/agent_warlord.png",
            "initialValue": "",
            "modifierChange": {
              "natural": "",
              "external": "资助国或受资助 Orc 部落消亡，或所在地不再属于资助国时移除。"
            },
            "baseGame": true,
            "id": "orcish-funding",
            "modifierLocations": "资助国首都。",
            "modifierSource": "Orc Warlord 在外国首都执行 Receive Funding。"
          },
          {
            "name": "Political Agitation",
            "text": "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。",
            "image": "./location-modifiers/game/agitate.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Separatist Sentiments 每回合 +2。\n<CrossReference name=\"Agitate Against Sovereign\" href=\"?page=locations#entry-place-ruler-base-act-agitateagainstsovereign\" meta=\"统治者行动\" text=\"Political Agitation 增加 35。\" image=\"/locations/game/agitate.png\" /> 完成时 +35。"
            },
            "id": "political-agitation",
            "modifierLocations": "有统治者的国家聚居地。",
            "modifierSource": "<CrossReference name=\"Agitate Against Sovereign\" href=\"?page=locations#entry-place-ruler-base-act-agitateagainstsovereign\" meta=\"统治者行动\" text=\"Political Agitation 增加 35。\" image=\"/locations/game/agitate.png\" />、Separatist Sentiments 与事件。"
          },
          {
            "name": "Political Instability",
            "text": "国家政局的不稳定程度。强度超过 300 时触发内战，部分贵族及其军队脱离原国家，随后强度清零。",
            "image": "./location-modifiers/game/politicalInstability.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "本国每个 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 的 Political Agitation 各自按强度 ÷15 向上取整，每回合向首都加入对应数值。\n<CrossReference name=\"Mediate Politics\" href=\"?page=points-of-interest#entry-place-task-base-ch-mediatepolitics\" meta=\"英雄任务\" text=\"降低当地 Political Instability。\" image=\"/locations/game/diplomacy.png\" /> 完成时减少 25。"
            },
            "id": "political-instability",
            "modifierLocations": "国家首都。",
            "modifierSource": "本国各地的 Political Agitation。"
          },
          {
            "name": "Separatist Sentiments",
            "text": "地方的分离主义情绪，每回合使当地 Political Agitation 增加 2。地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/separatistSentiments.png",
            "baseGame": true,
            "initialValue": "50。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Separatism 建立强度 50 的修正。\nBorder Tensions 建立强度 50 的修正。"
            },
            "id": "separatist-sentiments",
            "modifierLocations": "国家边境或希望脱离本国的聚居地。",
            "modifierSource": "Separatism、Border Tensions。"
          },
          {
            "id": "conclave",
            "name": "Conclave",
            "text": "代表正在进行的议会。强度低于 1 时议会失败，Chosen One 停止主持，并清除所有关联的 Conclave Opportunity；主持者停止相应任务时修正消失。",
            "baseGame": true,
            "modifierLocations": "Chosen One 主持议会的国家首都。",
            "modifierSource": "<CrossReference name=\"Conclave of Peace\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-peace\" meta=\"英雄任务\" text=\"Chosen One 召集人类君主开会，缓和各国冲突。\" image=\"/locations/game/conclave.png\" />、<CrossReference name=\"Conclave of the Remedy\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-remedy\" meta=\"英雄任务\" text=\"Chosen One 召集君主分发 Plague 的解药。\" image=\"/locations/game/conclave.png\" /> 或 <CrossReference name=\"Conclave for a Grand Army\" href=\"?page=points-of-interest#entry-place-task-base-ch-co-conclave-grandarmy\" meta=\"英雄任务\" text=\"Chosen One 为 Alliance 集结更强的军队。\" image=\"/locations/game/conclave.png\" /> 开始时建立。",
            "initialValue": "100。",
            "modifierChange": {
              "natural": "",
              "external": "我方控制的每个 Conclave Opportunity 每回合 −5。\n英雄控制的每个 Conclave Opportunity 每回合 +2。\n一个未由我方控制的机会地点更换对应统治者时 −50，并将该机会转为我方。\nDisrupt Conclave 完成时 −25。\n议会完成或失败后移除。"
            },
            "image": "./location-modifiers/game/conclave.png"
          },
          {
            "id": "conclave-opportunity",
            "name": "Conclave Opportunity",
            "text": "中立、我方与英雄方三种状态。Undermine Conclave 可使其支持我方，<CrossReference name=\"Support Conclave\" href=\"?page=locations#entry-place-ruler-base-act-supportconclave\" meta=\"统治者行动\" text=\"对应 Conclave 强度增加 25，上限 300，降低被破坏的风险。\" image=\"/locations/game/conclave.png\" /> 可使其支持英雄方。对应统治者被替换或死亡，也会使该机会转向我方。\n我方状态每回合使关联 Conclave −5，英雄方状态每回合 +2；未由我方控制时更换统治者，另立即使 Conclave −50。",
            "baseGame": true,
            "modifierLocations": "议会选中的主持地点及额外选中的至多六个相关统治者所在地。",
            "modifierSource": "议会开始时随 Conclave 成对建立。",
            "modifierChange": {
              "natural": "",
              "external": "Undermine Conclave、<CrossReference name=\"Support Conclave\" href=\"?page=locations#entry-place-ruler-base-act-supportconclave\" meta=\"统治者行动\" text=\"对应 Conclave 强度增加 25，上限 300，降低被破坏的风险。\" image=\"/locations/game/conclave.png\" /> 与统治者的 <CrossReference name=\"Support Conclave\" href=\"?page=locations#entry-place-ruler-base-act-supportconclave\" meta=\"统治者行动\" text=\"对应 Conclave 强度增加 25，上限 300，降低被破坏的风险。\" image=\"/locations/game/conclave.png\" /> 改变归属。\n关联议会结束后移除。"
            },
            "image": "./location-modifiers/game/conclave.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-4",
        "title": "Elven City",
        "items": [
          {
            "name": "Elven Arrogance",
            "text": "精灵对自身优越性的确信，150 为决策中立点。附近威胁会影响其是否愿意介入世界事务；统治者 Shadow 越高，单位 Menace 与世界恐慌造成的下降越弱。",
            "image": "./location-modifiers/game/enshadow.png",
            "baseGame": true,
            "modifierChange": {
              "natural": "每回合增加（150−当前强度）÷50，逐步趋向 150。",
              "external": "四步内每个怪物领地、每支黑暗军队各 −0.5，两项分别最多 −2.5。本国为 Dark Empire 时，军队改为每支 +0.5、最多 +2.5，并停用怪物领地的扣减。\n当地 Famine 每点 −0.05。\n四步内单位 Menace 总和 ×（1−统治者 Shadow）×−0.01，最低 −2.5。\n世界恐慌 ×（1−统治者 Shadow）×−0.1，最低 −2.5。\n四步内非精灵人类聚居地各提供 Unrest÷100÷（0.5+0.5×距离），合计再乘 0.5，最多 +3。\n统治者每级 Cruelty、Ambition 偏好各 +0.5；每级 Cooperation、Human 偏好各 −0.5。"
            },
            "id": "elven-arrogance",
            "modifierLocations": "<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" />。",
            "modifierSource": "精灵城市建立时自动创建。"
          },
          {
            "id": "elven-political-crisis",
            "name": "Elven Political Crisis",
            "text": "精灵城市失去统治者和 Wayfinder 后陷入权力危机。到期时产生新的精灵统治者，恢复当地统治。",
            "baseGame": true,
            "modifierLocations": "<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" />。",
            "modifierSource": "<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 检测到统治者与 Wayfinder 均缺失。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": ""
            },
            "initialValue": "104。",
            "image": "./location-modifiers/game/bribe.png"
          },
          {
            "id": "elven-predictability",
            "name": "Elven Predictability",
            "baseGame": true,
            "text": "当地 Security −2，持续 50 回合。",
            "modifierLocations": "<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" />。",
            "modifierSource": "Elven Predictability 任务中事件选择 Study their patterns。\n<CrossReference name=\"Elven Predictability\" href=\"?page=events#entry-event-base-fog-midch-elvenpredictability\" meta=\"事件\" text=\"玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当地是 Elven Settlement。\n\n抽选权重：1。\" image=\"./events/c2a82ea2cc05faca.jpg\" />。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": ""
            },
            "initialValue": "50。",
            "image": "./location-modifiers/mod/default.icon_elf.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-5",
        "title": "Orc Camp",
        "items": [
          {
            "name": "Orcish Industry",
            "text": "用于支持 Orc 军队；军队 HP 上限依赖故乡及相邻地点的工业总量。",
            "image": "./location-modifiers/game/orcishIndustry.png",
            "initialValue": "",
            "modifierChange": {
              "natural": "强度低于 50 时每回合 +1；达到 51 或以上时每回合 −1。",
              "external": "新 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" /> 建立时 +5。\n<CrossReference name=\"Organise the Horde\" href=\"?page=locations#entry-place-task-base-ch-orcs-organisethehorde\" meta=\"挑战\" text=\"本地 Orcish Industry +50，相邻地点 +25，各自最高 100。\" image=\"/locations/game/orcishIndustry.png\" />：本地 +50，同部落相邻 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" /> 各 +25，均最高 100。\n<CrossReference name=\"Retreat to the Hills\" href=\"?page=locations#entry-place-task-base-ch-orcs-retreattothehills\" meta=\"挑战\" text=\"把部落边境一半 Orcish Industry 转为防御工事，并调动部队防守。\" image=\"/locations/game/orcDefences.png\" /> 把本部落边境据点的工业减半，扣去的数值转为 Orcish Defences。\n<CrossReference name=\"Devastate Orcish Industry\" href=\"?page=locations#entry-place-task-base-ch-orcs-devastateorcishindustry\" meta=\"英雄任务\" text=\"当地 Orcish Industry −35，削弱依靠这里补给的军队。\" image=\"/locations/game/orcishIndustry.png\" /> 完成时 −35。\nRecruit Raiders：从本地及相邻已渗透 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" /> 各消耗至多 25，并至少留下 1；所消耗工业总量的 25% 向下取整，加入 Raiders HP。\nOrcish Funding 按每次拨款加入工业，最高 300。"
            },
            "baseGame": true,
            "id": "orcish-industry",
            "modifierLocations": "<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" />。",
            "modifierSource": "新 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" /> 建立时产生；<CrossReference name=\"Organise the Horde\" href=\"?page=locations#entry-place-task-base-ch-orcs-organisethehorde\" meta=\"挑战\" text=\"本地 Orcish Industry +50，相邻地点 +25，各自最高 100。\" image=\"/locations/game/orcishIndustry.png\" /> 与 Orcish Funding 可继续增加。"
          },
          {
            "id": "orcish-defences",
            "name": "Orcish Defences",
            "text": "增加 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" /> 的防御，Defence 增加修正强度的 50%。",
            "baseGame": true,
            "modifierLocations": "<CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" />，主要为部落边境据点。",
            "modifierSource": "<CrossReference name=\"Retreat to the Hills\" href=\"?page=locations#entry-place-task-base-ch-orcs-retreattothehills\" meta=\"挑战\" text=\"把部落边境一半 Orcish Industry 转为防御工事，并调动部队防守。\" image=\"/locations/game/orcDefences.png\" />。",
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "<CrossReference name=\"Retreat to the Hills\" href=\"?page=locations#entry-place-task-base-ch-orcs-retreattothehills\" meta=\"挑战\" text=\"把部落边境一半 Orcish Industry 转为防御工事，并调动部队防守。\" image=\"/locations/game/orcDefences.png\" /> 把本部落边境据点当前 Orcish Industry 的一半转入防御工事。"
            },
            "image": "./location-modifiers/game/orcDefences.png"
          },
          {
            "id": "orcish-encroachment",
            "name": "Orcish Encroachment",
            "text": "目标国家与其他势力交战、且未与该 Orc 部落交战时，若当地 Devastation ≥20 或 Defence <1，Orc 会夺取地点并建立已渗透 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" />，双方关系降低 30 个百分点。符合条件的居民可逃往本国相邻地点。",
            "baseGame": true,
            "modifierLocations": "邻接 Orc 部落的非 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" />、非 <CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Opportunistic Encroachment\" href=\"?page=locations#entry-place-task-base-ch-orcs-opportunisticencroachment\" meta=\"挑战\" text=\"向相邻合格人类小型聚居地加入 Orcish Encroachment。目标国家卷入战争，且当地 Devastation ＞20 或防御为 0 时，可被部落夺取；会恶化两国关系。\" image=\"/locations/game/orcEncroachment.png\" /> 从合格相邻地点中选择一处建立。",
            "modifierChange": {
              "natural": "",
              "external": "不再邻接该 Orc 部落或目标不再属于合格人类国家时移除；夺取地点后结束。"
            },
            "image": "./location-modifiers/game/orcEncroachment.png"
          },
          {
            "id": "orcish-plunder",
            "name": "Orcish Plunder",
            "text": "储存 Orc 掠夺所得 Gold 与物品，具有三个物品栏。提供 Access Plunder 与 Steal Plunder。",
            "baseGame": true,
            "modifierLocations": "Orc 部落存放战利品的据点。",
            "modifierSource": "Orc Army、Orc Raiders 将掠夺所得带回。",
            "modifierChange": {
              "natural": "",
              "external": "军队带回的 Gold、物品加入储藏。\nAccess Plunder 与 Steal Plunder 取用；物品和 Gold 全部取空后移除。"
            },
            "image": "./location-modifiers/game/mammonsInfluence.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-6",
        "title": "地下与隧道",
        "items": [
          {
            "name": "Tunnels",
            "text": "地表通向对应地下地点的隧道入口，游戏内名称会附上目标地点名。提供 Lead Smugglers to Tunnels 与 Holy: Explore Tunnels，地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/tunnelsBeneath.png",
            "baseGame": true,
            "id": "tunnels",
            "modifierLocations": "具备通向地下连接的地表地点。",
            "modifierSource": "地图生成地表与地下通道时成对建立。"
          },
          {
            "name": "Tunnels Beneath",
            "text": "位于对应地表聚居地下方的隧道，游戏内名称会附上地表地点名。提供 Place Explosives，地点成为废墟后仍保留。",
            "image": "./location-modifiers/game/tunnelsBeneath.png",
            "baseGame": true,
            "id": "tunnels-beneath",
            "modifierLocations": "对应地表聚居地正下方的地下地点。",
            "modifierSource": "地图生成地表与地下通道时成对建立。"
          },
          {
            "id": "cthonians",
            "name": "Cthonians",
            "text": "强度达到 50 且无存活关联军队时，每回合积累 ⌊强度/15⌋ 点繁殖进度；进度超过 100 后清零，生成 2–11 HP 的 Cthonians 军队。\n提供 Drive out Cthonians 与 Cthonians, Rise!。所在地成为废墟后仍保留。",
            "baseGame": true,
            "modifierLocations": "主要分布在地下；也可由事件在相应地点出现。",
            "modifierSource": "地下生成、Geomancy: Weave Cthonians 与相关事件。",
            "modifierChange": {
              "natural": "位于人类类聚居地时每回合 −2。\n有躲藏数量时，每回合转回 2 点强度并扣除 2 点躲藏数量。\n本地强度低于 300 且高于相邻 Cthonians（邻地须超过 20）时，每个符合条件的邻地向本地转移 1。",
              "external": "Geomancy: Weave Cthonians 以消耗的节点/Death 较小值×4 生成总量，每处至多分配 50。\nDrive out Cthonians 清空本地强度及繁殖进度，将原强度分配到本地及同层相邻陆地；已有群落转为躲藏数量，新群落直接取得该份额。"
            },
            "image": "./location-modifiers/game/unit_cthonians.png"
          },
          {
            "id": "evidence",
            "name": "Evidence",
            "text": "提供 Investigate Evidence。未受控英雄调查完成后返回故乡 Report Findings，提高 World Panic 与 Awareness of the Underground；调查本身不消耗 Evidence。",
            "baseGame": true,
            "modifierLocations": "Place Explosives 所在的地下隧道，以及其他留下隐藏罪行证据的地点。",
            "modifierSource": "Place Explosives；通用的黑暗献祭及英雄发现罪行。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "强度低于 200 时每回合 +1.5。",
              "external": ""
            },
            "image": "./location-modifiers/game/evidence.png"
          },
          {
            "id": "explosives",
            "name": "Explosives",
            "text": "提供 Detonate Explosives。完成后同时引爆世界所有 Explosives，摧毁各自上方聚居地，并使人类完全知晓地下世界。",
            "baseGame": true,
            "modifierLocations": "Tunnels Beneath 所在的地下地点。",
            "modifierSource": "Place Explosives 消耗 100 Gold 后建立，同时留下 Evidence。",
            "modifierChange": {
              "natural": "",
              "external": "Detonate Explosives 完成时移除所有炸药。"
            },
            "image": "./location-modifiers/game/explosives.png"
          },
          {
            "id": "smugglers-in-the-tunnels",
            "name": "Smugglers in the Tunnels",
            "text": "Security −1、Prosperity −0.25。提供 Drive out Smugglers，人类对地下的 Awareness 达到 100% 后才能执行。",
            "baseGame": true,
            "modifierLocations": "具有 Tunnels 的地表聚居地。",
            "modifierSource": "Lead Smugglers to Tunnels。",
            "modifierChange": {
              "natural": "",
              "external": "Drive out Smugglers 完成时移除。"
            },
            "image": "./location-modifiers/game/tunnelsBeneath.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-7",
        "title": "荒野与殖民地点",
        "items": [
          {
            "id": "wandering-ogre",
            "name": "Wandering Ogre",
            "text": "提供 Defeat Ogre 与 Recruit Ogre。无人正在讨伐或招募时，每回合有 20% 概率迁向邻近陆地，优先选择适居且无势力控制的地点。",
            "baseGame": true,
            "modifierLocations": "可居住的陆地与其相邻地点。",
            "modifierSource": "Minor Threats 系统随机生成。",
            "modifierChange": {
              "natural": "",
              "external": "被击败或招募后移除。"
            },
            "image": "./location-modifiers/game/ogre.png"
          },
          {
            "id": "wandering-manticore",
            "name": "Wandering Manticore",
            "text": "当地 Prosperity −0.15，提供 Defeat Manticore。无人正在讨伐时，每回合有 20% 概率迁向邻近陆地，偏好温暖、适居且无势力控制的地点。",
            "baseGame": true,
            "modifierLocations": "温暖、偏沙漠的陆地与相邻地区。",
            "modifierSource": "Minor Threats 系统随机生成。",
            "modifierChange": {
              "natural": "",
              "external": "Defeat Manticore 完成时移除。"
            },
            "image": "./location-modifiers/game/manticore.png"
          },
          {
            "id": "human-outpost",
            "name": "Human Outpost",
            "text": "强度超过 300 后发展为 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" /> 或<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />，人口从 1 开始；归属资助国。最高单笔捐助者成为 Founder；若由玩家控制，建成后的聚居地可继承其渗透与 Shadow 影响。",
            "baseGame": true,
            "modifierLocations": "适合殖民、尚无势力占领的陆地或 <CrossReference name=\"Ruins\" href=\"?page=locations#entry-location-set-cityruins\" meta=\"地点\" text=\"聚居地毁灭后留下的地点。会保留原地点的 Shadow，以及允许在毁灭后存续的兴趣点；地点自身不提供 Explore Ruins。\n\n出现方式\n聚居地执行毁灭流程后形成；名称通常为 Ruins of [地点名]。\n\n可能配置的兴趣点\nAncient Ruins、Brother of Sleep、The Entrance、Primal Font。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_minor_ruins.png\" />。",
            "modifierSource": "人类国家扩张、聚居地重建，以及殖民旗帜建立据点。",
            "modifierChange": {
              "natural": "适居度高于人类最低要求时，每回合增加适居度百分比×0.02；否则每回合 −5。\n地下据点额外每回合 +1。",
              "external": "有资金时每回合消耗 min(4,剩余资金)，并增加相同强度。\nFund Outpost 向资金池捐款，Raid Outpost 使强度 −100。\n地点被其他势力占据、成为其他聚居地或资助国灭亡时移除。"
            },
            "image": "./location-modifiers/game/humanColony.png"
          },
          {
            "id": "the-chosen-one-s-mentor",
            "name": "The Chosen One's Mentor",
            "baseGame": true,
            "text": "标出 Chosen One 的导师居所。玩家 Agent 进入后可选择杀害导师，损害 Chosen One 的精神状态；暂时放过后，可再次进入并作出选择。\n同一事件链还会用 Chosen One Mentor 作为标记名称。",
            "modifierLocations": "Chosen One 拜访导师的荒野陆地。",
            "modifierSource": "The chosen one’s mentor 事件发现居所；后续 Spared, for now 保留相遇入口。\n<CrossReference name=\"The chosen one's mentor\" href=\"?page=events#entry-event-base-fog-person-chosen-one-mentor1\" meta=\"事件\" text=\"回合检查存活人物时触发。\n\n触发条件\n「Chosen One 重要人物剧情已开始」剧情记录 = 0\n并且 「导师所在地点已确定」剧情记录 = 0\n并且 当前人物是 Chosen One\n并且 当前人物尚未发疯\n并且 当地没有聚居地\n并且 不满足（当地是海洋）\n并且 回合 大于 50\n并且 回合 小于 350。\n\n单次候选检查概率：100%。\" image=\"./events/2b8b4ef668f465ff.jpg\" />、<CrossReference name=\"The chosen one's mentor resides here\" href=\"?page=events#entry-event-base-fog-move-chosen-one-mentor2\" meta=\"事件\" text=\"玩家 Agent 移动进入地点时触发。\n\n触发条件\n当前人物是玩家控制的 Agent\n并且 「导师所在地点已确定」剧情记录 = 1。\n\n单次候选检查概率：100%。\" />。",
            "modifierChange": {
              "natural": "",
              "external": "杀害导师后结束该居所的事件入口。"
            },
            "image": "./location-modifiers/mod/fog.mentor_icon.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-8",
        "title": "教团圣座",
        "items": [
          {
            "id": "divine-entity-presence",
            "name": "Divine Entity Presence",
            "text": "显示名为 Presence of 对应实体。它连接 Divine Entity 与物质世界；腐化该连接可以影响实体对教团的作用，并开放相应的亵渎行动。",
            "baseGame": true,
            "modifierLocations": "教团的圣座及与其神圣实体联系的宗教地点。",
            "modifierSource": "宗教系统生成教团与 Divine Entity 时建立。",
            "modifierChange": {
              "natural": "",
              "external": "Target Divine Entity 完成时腐化该连接，使玩家能在教团界面流放对应 Divine Entity。"
            },
            "image": "./location-modifiers/game/entityPresence.png"
          }
        ]
      },
      {
        "id": "modifiers-base-places-9",
        "title": "Ancient Ruins",
        "items": [
          {
            "id": "dragon-mountain",
            "name": "Dragon Mountain",
            "baseGame": true,
            "text": "标记已发现龙巢的遗迹。继续 <CrossReference name=\"Explore Ruins\" href=\"?page=locations#entry-place-task-base-ch-exploreruins\" meta=\"共同行动\" text=\"探索遗迹并触发对应遗迹事件，可获得财物、物品，也可能受伤或死亡。\" image=\"/locations/game/exploreRuins.png\" /> 可推进 Dragon 事件链，进入后续探索与遭遇。",
            "modifierLocations": "出现 Dragon 遗迹事件的地点。",
            "modifierSource": "Dragon 遗迹事件选择 Remove the rubble to reach the dragon。\n<CrossReference name=\"Dragon\" href=\"?page=events#entry-event-base-anw-exploreruins-dragon0\" meta=\"事件\" text=\"完成 Explore Ruins 后，在符合条件的遗迹探索事件中抽取。\n\n触发条件\n当地尚未指定遗迹路线\n并且 （遗迹已探索深度 = 0；或者 遗迹已探索深度 = 100748）。\n\n探索抽选权重：1；抽选前另以 100% 通过候选检测。\" image=\"./events/a337c414c00831b2.jpg\" />。",
            "image": "./location-modifiers/mod/foge.dragon.jpg"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-2879667447",
    "name": "Deep Ones Plus",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-2879667447-places-0",
        "title": "人类聚居地",
        "items": [
          {
            "id": "mod-2879667447-tainted-food-supply",
            "name": "Tainted Food Supply",
            "text": "每回合使当地 Plague Immunity −2。位于<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />时，污染会向相邻 <CrossReference name=\"City\" href=\"?page=locations#entry-location-set-city\" meta=\"地点\" text=\"城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。\n\n出现方式\n地图生成或人类殖民完成时建立。固定带有 City Palace；沿海城市另带 Docks，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 Vast Sewers、Market、Library 等概率选择，重复结果直接舍弃。\n\n可能配置的兴趣点\nCity Palace、Docks、Seat of Holy Order、Library、Market、Vast Sewers、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_city_prague.png\" /> 传播：已有污染每回合 +2，新建为 1。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "使用 Strange Meat 污染食物；把 Abyssal Corpse 用作食物。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Strange Meat 污染行动建立强度 25 的修正。\nAbyssal Corpse 供食时，已有污染每回合 +2，新建为 1。\n相邻<CrossReference name=\"小型人类聚居地\" href=\"?page=locations#entry-location-set-minorhuman\" meta=\"地点\" text=\"农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 Raid Periphery，并保留适用的人类聚居地任务。\n\n出现方式\n地图生成或人类殖民完成时建立。Farming Community、Fortress 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 Catacombs。\n\n可能配置的兴趣点\nCatacombs、Holy Site / Desecrated Holy Site、Farming Community / Mushroom Farm、Fortress、Seat of Holy Order、Temple、Cave Fortress、Heart of the Forest。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_farm.png\" />的污染每回合传入 2，新建为 1。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconItemStrangeMeat.png"
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-1",
        "title": "沿海聚居地",
        "items": [
          {
            "id": "mod-2879667447-deep-one-prejudice",
            "name": "Deep One Prejudice",
            "text": "提供 Request Aid Against Deep Ones 与 <CrossReference name=\"Blame Deep Ones\" href=\"?page=locations#entry-place-ruler-2879667447-act-blamedeepones\" meta=\"统治者行动\" text=\"当地 Unrest 减半，世界恐慌临时增加 2 个百分点；加深当地针对 Deep Ones 的偏见。同国内对 Deep Ones 有极端偏好的人物可能改变对领主的好感。\" image=\"/locations/game/deepOnes.png\" />，表现统治者对 Deep Ones 的敌意。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "沿海统治者具有厌恶 Deep Ones 的偏好时自动出现。",
            "modifierChange": {
              "natural": "",
              "external": "统治者失去相应偏好或地点不再满足条件时移除。"
            }
          },
          {
            "id": "mod-2879667447-deep-one-sympathies",
            "name": "Deep One Sympathies",
            "text": "提供 <CrossReference name=\"Support Deep Ones\" href=\"?page=locations#entry-place-ruler-2879667447-act-supportdeepones\" meta=\"统治者行动\" text=\"消耗 50 Gold，为 Deep One Cult 增加 20 回合加速成长，Unrest +30。君主执行时国家 Menace +10，其他领主为 +5；国内人物可能改变好感。\" image=\"/locations/game/deepOnes.png\" />、建立或掩护教派的统治者行动。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "沿海统治者具有喜欢 Deep Ones 的偏好时自动出现。",
            "modifierChange": {
              "natural": "",
              "external": "统治者失去相应偏好或地点不再满足条件时移除。"
            }
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-2",
        "title": "沿海与海洋",
        "items": [
          {
            "id": "mod-2879667447-abyssal-corpse",
            "name": "Abyssal Corpse",
            "text": "生成时立即增加 40 Death。可执行 Scavenge Abyssal Corpse、<CrossReference name=\"Butcher Abyssal Corpse\" href=\"?page=locations#entry-place-ruler-2879667447-act-seamonster-food\" meta=\"统治者行动\" text=\"领主获得 50 Gold，已有 Unrest 减少 10；尸体切换为屠宰用途，提高食物供应并加快腐败。\" image=\"/locations/game/hideInAbyss.png\" /> 与研究行动。\n统治者选择出售后，Prosperity +0.25、食物产出×1.05；选择作为食物后，Prosperity +0.05、食物产出×1.5，并积累 Tainted Food Supply。",
            "modifierLocations": "海怪死亡地点；沿海聚居地也可由 Charm Effect: Storms 产生。",
            "modifierSource": "Kraken、Behemoth、Coral Mass 等海怪死亡；三级 Charm Effect: Storms。",
            "modifierChange": {
              "natural": "每回合强度 −0.5。",
              "external": "统治者命令销毁时，每回合额外 −1。\n统治者命令出售或供食时，每回合额外 −0.5。\nScavenge Abyssal Corpse 与 <CrossReference name=\"Butcher Abyssal Corpse\" href=\"?page=locations#entry-place-ruler-2879667447-act-seamonster-food\" meta=\"统治者行动\" text=\"领主获得 50 Gold，已有 Unrest 减少 10；尸体切换为屠宰用途，提高食物供应并加快腐败。\" image=\"/locations/game/hideInAbyss.png\" /> 执行期间，各每回合 −1.5。\n三级 Charm Effect: Storms 建立强度 100 的尸体。"
            },
            "image": "./location-modifiers/game/hideInAbyss.png"
          },
          {
            "id": "mod-2879667447-buried-charm",
            "name": "Buried Charm",
            "text": "埋藏后等待 4–14 回合；剩余强度高于 5 时开始逐回合随机尝试显现，可能产生 Death、Still Waters、Fog、Prosperous Waters、Apparitions 或 Storms。部分结果还要求当地是人类聚居地、尚未完全渗透或尚未完全 Enshadowed；黑暗势力与普通势力对应的结果也有差异。",
            "modifierLocations": "埋下 Waterlogged Charm 的合格地点。",
            "modifierSource": "Waterlogged Charm 的埋藏行动。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "完成显现时移除，并留下对应 Charm Effect。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconItemWaterloggedCharm.png"
          },
          {
            "id": "mod-2879667447-charm-effect-death",
            "name": "Charm Effect: Death",
            "text": "一级出现时 Death +30；升至二级再 +60；升至三级再 +90。三级存在期间，每回合额外 Death +2。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconCharmDrown.png"
          },
          {
            "id": "mod-2879667447-charm-effect-still-waters",
            "name": "Charm Effect: Still Waters",
            "text": "一级、二级、三级分别使当地食物产出乘以 0.75、0.5、0.25。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconCharmFamine.png"
          },
          {
            "id": "mod-2879667447-charm-effect-fog",
            "name": "Charm Effect: Fog",
            "text": "一级、二级、三级分别使 Security −1、−2、−3。升至三级时，立即将当地现有 Defence 减半，并令以当地为故乡的第一支 Human Army 失去当前 HP 的一半，伤害向下取整。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconCharmFog.png"
          },
          {
            "id": "mod-2879667447-charm-effect-prosperous-waters",
            "name": "Charm Effect: Prosperous Waters",
            "text": "一级、二级、三级分别使食物产出×1.25、×1.5、×1.75，Prosperity +0.25、+0.5、+0.75。\n当前代码中，二级每回合使 Unrest +1，三级 +2；游戏提示中的减少 Unrest 与实际结算相反。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconCharmProsperity.png"
          },
          {
            "id": "mod-2879667447-charm-effect-apparitions",
            "name": "Charm Effect: Apparitions",
            "text": "一级出现时 Shadow +10 个百分点；升至二级再 +15；升至三级再 +20，并生成两个 Ghast。Shadow 最高 100%。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconCharmGhostShip.png"
          },
          {
            "id": "mod-2879667447-charm-effect-storms",
            "name": "Charm Effect: Storms",
            "text": "一级出现时 Devastation +30；升至二级再 +50；升至三级再 +90，并建立强度 100 的 Abyssal Corpse。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Buried Charm 显现。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Boost Charm Effect 消耗 1 Power，使效果提升一级并增加 25 强度，最高三级。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconSinking.png"
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-3",
        "title": "Deep One Sanctum",
        "items": [
          {
            "id": "mod-2879667447-abyssal-locus",
            "name": "Abyssal Locus",
            "text": "为 Abyssal 魔法提供能量，强度上限 100。可召唤 Abyssal Ritualist、深渊军队，制作 Arcane <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" />，并支持圣所相关行动。",
            "modifierLocations": "<CrossReference name=\"Deep One Sanctum\" href=\"?page=locations#entry-location-set-deeponesanctum\" meta=\"地点\" text=\"人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。\n\n出现方式\nDeep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。\n\n可能配置的兴趣点\nSanctum。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_evil_deepOneSanctum.png\" />。",
            "modifierSource": "<CrossReference name=\"Deep One Sanctum\" href=\"?page=locations#entry-location-set-deeponesanctum\" meta=\"地点\" text=\"人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。\n\n出现方式\nDeep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。\n\n可能配置的兴趣点\nSanctum。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_evil_deepOneSanctum.png\" /> 建立后由 Mod 加入。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "低于 100 时，每回合 +0.5；世界每个其他 Abyssal Locus 再使本地每回合 +0.2。",
              "external": "Recharge Abyssal Locus (Elder Power)：消耗 1 Power，强度 +20。\nRecharge Abyssal Locus (Sacrifice)：消耗深海城市 10 人口，强度 +20。\nAbyssal <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" /> 引导期间，每回合 −0.5。\nAbyssal Support、Fading Memories、Geomancy: Relentless Tides 引导期间，各每回合 −1。\nAbyssal: Gifts from the Sea、Abyssal: Arcane Calling、Abyssal: From Whispered Tales、Abyssal: From Uncharted Seas、Abyssal: From the Depths 引导期间，各每回合实际扣除 2（即时扣除 1，另结算 1）。\n<CrossReference name=\"Absorb Abyssal Charge\" href=\"?page=locations#entry-place-task-2879667447-mg-ritualistabsorblocus\" meta=\"共同行动\" text=\"每回合吸收 Abyssal Locus 的 5 强度，为 Ritualist Shard 补充 Abyssal Magic。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconAbyssalLocus.png\" /> 每回合实际扣除 10，同时为 Ritualist Shard 充能 10。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconAbyssalLocus.png"
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-4",
        "title": "深海崇拜与登陆地",
        "items": [
          {
            "id": "mod-2879667447-coral-mass-cult",
            "name": "Coral Mass Cult",
            "text": "强度达到 100 后召唤 200 HP 的 Coral Mass，并将当地化为废墟。其 Menace、Profile 增长为普通 Deep One Cult 对应增长的两倍。\n当前 Focus Cult: Coral Mass 创建它时即设为 100，因此通常在下一次修正结算时触发。\n继承 Deep One Cult 的 Security 修正：−⌊（50+强度）÷100⌋。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Focus Cult: Coral Mass 转换当地 Deep One Cult。",
            "initialValue": "100。",
            "modifierChange": {
              "natural": "",
              "external": "当地 Death 至少为 2 时，每回合消耗 2 Death，强度 +1。\n召唤 Coral Mass 后移除。\nDecimate Deep Ones 将教派强度、Menace、Profile 各减半。\nRemove Deep Ones 移除当地教派，并在其他可用沿海聚居地建立强度 1 的普通 Deep One Cult。"
            },
            "image": "./location-modifiers/game/deepOnes.png"
          },
          {
            "id": "mod-2879667447-drowned-prophet-cult",
            "name": "Drowned Prophet Cult",
            "text": "强度达到 300 后召唤或接引 Drowned Prophet，杀死当地统治者，将地点转为登陆地，并以 Breathless 部队替换守军。\nDrowned Prophet 战败后等待 7–11 回合：强度不超过 150 时回归普通 Deep One Cult；更强的教派可能带来破坏，或把所属教团转向深渊崇拜。\n继承 Deep One Cult 的 Security 修正：−⌊（50+强度）÷100⌋。\nMenace 与 Profile 每回合增长为普通 Deep One Cult 对应数值的两倍。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Focus Cult: Drowned Prophet 转换 Deep One Cult，继承原有强度。",
            "modifierChange": {
              "natural": "每回合强度 +1。",
              "external": "加速成熟期间每回合额外 +3。\n当地 Shadow 每有 1%，每回合 +0.01，Cult 强度低于 300 时生效。\n世界每名存活的 Drowned Prophet 每回合 +1。\n统治者喜欢 Deep Ones 时，每级偏好每回合 +1；厌恶时每级每回合 −2。\nDecimate Deep Ones 将教派强度、Menace、Profile 各减半。\nRemove Deep Ones 移除当地教派，并在其他可用沿海聚居地建立强度 1 的普通 Deep One Cult。\nFund Deep Ones 消耗 100 Gold，延长 30 回合加速成熟；Empower Deep Ones 消耗 1 Power，延长 20 回合。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png"
          },
          {
            "id": "mod-2879667447-inundai-cult",
            "name": "Inundai Cult",
            "text": "强度超过 100 后逐步增加当地 Shadow。首次达到 300 时杀死统治者、抽走 70% 人口并摧毁聚居地，在海上建立 <CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" /> 与 Emissary；其后成熟教派可不断向宫殿输送人口。\n继承 Deep One Cult 的 Security 修正：−⌊（50+强度）÷100⌋。",
            "modifierLocations": "沿海人类类聚居地。",
            "modifierSource": "Focus Cult: Inundai Court 转换 Deep One Cult，继承强度与成熟状态。",
            "modifierChange": {
              "natural": "每回合强度 +1。",
              "external": "加速成熟期间每回合额外 +2。\n当地 Madness 每点每回合 +0.005。\n统治者厌恶 Deep Ones 时，每级每回合 −1。\nInundai Court 被完全驱逐后回归普通 Deep One Cult。\nDecimate Deep Ones 将教派强度、Menace、Profile 各减半。\nRemove Deep Ones 移除当地教派，并在其他可用沿海聚居地建立强度 1 的普通 Deep One Cult。\nFund Deep Ones 消耗 100 Gold，延长 30 回合加速成熟；Empower Deep Ones 消耗 1 Power，延长 20 回合。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaicult.png"
          },
          {
            "id": "mod-2879667447-drowned-prophet-s-landing",
            "name": "Drowned Prophet's Landing",
            "text": "每回合使当地 Unrest −10，提供 Drowned Prophet 相关仪式。每回合从当地教派取至多 5 点强度，为现有 Breathless Horde 恢复相同 HP 并增加相同最大 HP；没有驻军时先建立 Breathless Horde。",
            "modifierLocations": "Drowned Prophet 占据的沿海聚居地。",
            "modifierSource": "Drowned Prophet Cult 成熟后建立的登陆地。",
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png"
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-5",
        "title": "Inundai 影响地点",
        "items": [
          {
            "id": "mod-2879667447-inundai-presence",
            "name": "Inundai Presence",
            "text": "开启与 Inundai Court 的交易、借贷和庇护行动，可被封锁。封锁后停止自身恢复，并使当地 Inundai 恩惠更快消退。\n所有 Inundai Presence 均被封锁后，Court 被逐出世界，Palace 与 Emissary 消失，相应教派退回普通 Deep One Cult。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "Inundai Emissary 建立联系。",
            "modifierChange": {
              "natural": "未被封锁且强度低于 100 时，每回合 +1。",
              "external": "未被封锁时：当地每种 Unrest、Hunger / Famine、Devastation、Deep One Cult 各提供每回合 +1；当地 Shadow 每 1% 另提供 +0.01。\n<CrossReference name=\"Block Inundai Presence\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-blockpresence\" meta=\"统治者行动\" text=\"消耗 100 Gold，封锁当地 Inundai Presence，Inundai Ire +15。全部 Presence 都被封锁后，移除 Inundai 相关人物特质与修正，将其教团转为普通 Deep One Cult，摧毁 Inundai Palace 并移除使者。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaiblocked.png\" /> 将其封锁；恢复联系的行动解除封锁。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaipresence.png"
          },
          {
            "id": "mod-2879667447-coral-statues",
            "name": "Coral Statues",
            "text": "强度最高 300。达到 150 后，每回合把当地 15% 人口送往 <CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" />，向下取整且至少 1 人；也允许 Call to Palace 加速征召。每回合使当地各份 Deep One Cult 增加 雕像强度×0.005。",
            "modifierLocations": "人类类聚居地；通常由 Inundai 交易产生，也可由 Festering Coral 诅咒留下。",
            "modifierSource": "Manifest Coral Statues、<CrossReference name=\"Incomprehensible Rites\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-coralstatue\" meta=\"统治者行动\" text=\"Sanity −3，已有 Coral Statues 强度 +25，已有 Inundai Debt −50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaicoralstatue.png\" />，以及未偿还债务的追索。 Festering Coral 诅咒也可在受害者死亡时产生雕像。",
            "modifierChange": {
              "natural": "每回合强度 −0.5。",
              "external": "当地每点 Madness 每回合 +0.01。\nManifest Coral Statues 完成时 +20，新建时也是 20。\n<CrossReference name=\"Incomprehensible Rites\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-coralstatue\" meta=\"统治者行动\" text=\"Sanity −3，已有 Coral Statues 强度 +25，已有 Inundai Debt −50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaicoralstatue.png\" /> 完成时，已有雕像 +25；新建时为 100。\n<CrossReference name=\"Recollect on Debt\" href=\"?page=locations#entry-place-task-2879667447-ch-inundai-recollect\" meta=\"自主单位任务\" text=\"催收 Inundai Debt，使 Emissary 的 Hunger 减少两倍本次追索额，最低为 0。\n英雄债务被清除，并获得 Call of the Abyss；已有该诅咒则强度 +25，同时 Sanity −5。\n统治者用当地 Madness 抵债。Madness 不足本次追索额时，增加或建立 Coral Statues；尚未疯狂则陷入疯狂，已经疯狂则获得或增强 Call of the Abyss，并损失 Sanity。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaipresence.png\" /> 的未偿债结果为已有雕像 +15，新建时为 100。\nDestroy Statues 完成时扣去当前强度的一半，扣除量向下取整。\nTo the Sea 完成时 −10。\n当地 Inundai Presence 被封锁时，每回合额外 −10。\nFestering Coral 强度至少 100 的受害者死亡时，已有雕像 +50，新建时为 100。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaicoralstatue.png"
          },
          {
            "id": "mod-2879667447-indebted-deeds",
            "name": "Indebted Deeds",
            "text": "每回合使 Unrest 增加 强度×0.15；Prosperity −强度×0.01，固定食物产出修正为 −强度×0.01 后向零取整。",
            "modifierLocations": "Inundai Presence 所在的人类类聚居地。",
            "modifierSource": "Indebted Deeds 行动。",
            "initialValue": "15。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Indebted Deeds 再次完成时 +20。\n当地 Inundai Presence 被封锁时，每回合额外 −20。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundainoble.png"
          },
          {
            "id": "mod-2879667447-writhing-seafood",
            "name": "Writhing Seafood",
            "text": "每回合提供 ⌊强度⌋ 点额外食物，使 Unrest +1，并使当地第一份 Deep One Cult 增加 强度×0.05。",
            "modifierLocations": "Inundai Presence 所在的人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Writhing Food\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-food\" meta=\"统治者行动\" text=\"Writhing Food 强度 +30，Inundai Debt +50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaifood.png\" /> 统治者行动；Ease Famine 英雄任务。",
            "initialValue": "30。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "<CrossReference name=\"Writhing Food\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-food\" meta=\"统治者行动\" text=\"Writhing Food 强度 +30，Inundai Debt +50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaifood.png\" /> 完成时 +30。\nEase Famine：已有修正 +10，新建时为 30。\n当地 Inundai Presence 被封锁时，每回合额外 −10。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaifood.png"
          },
          {
            "id": "mod-2879667447-golden-scales",
            "name": "Golden Scales",
            "text": "Prosperity −强度×0.01。强度达到 100 时，当前代码将食物产出乘数设为 −0.1，可能造成严重粮食短缺。",
            "modifierLocations": "Inundai Presence 所在的人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Golden Scales\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-getwealth\" meta=\"统治者行动\" text=\"领主获得 25+⌊2 × 当地 Golden Scales 强度⌋ Gold；Golden Scales 强度 +25，Inundai Debt +25。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaigold.png\" />：统治者、Agent 或英雄向 Inundai 取金。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "每回合强度 −0.5。",
              "external": "各版本 <CrossReference name=\"Golden Scales\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-getwealth\" meta=\"统治者行动\" text=\"领主获得 25+⌊2 × 当地 Golden Scales 强度⌋ Gold；Golden Scales 强度 +25，Inundai Debt +25。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaigold.png\" /> 完成时 +25。\n当地 Inundai Presence 被封锁时，每回合额外 −10。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaigold.png"
          },
          {
            "id": "mod-2879667447-entranced-population",
            "name": "Entranced Population",
            "text": "当地有 Unrest 时，每回合削减 强度×0.15 的 Unrest，并把实际可吸收的数量转入自身，最高 200。固定食物产出减少 ⌊强度×0.15⌋。\n结算在遇到第一份 Unrest 时停止遍历；此前访问到有效 Madness 时，本修正额外 +0.5；此前访问到的 Deep One Cult 增加 本修正强度×0.05。",
            "modifierLocations": "Inundai Presence 所在的人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Entrance Population\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-unrest\" meta=\"统治者行动\" text=\"当地 Entranced Populace 强度 +25，Inundai Debt +50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaiunrest.png\" /> 统治者行动；Ease Unrest 英雄任务。",
            "initialValue": "25。",
            "modifierChange": {
              "natural": "当地没有 Unrest 时，每回合强度 −2。",
              "external": "吸收 Unrest 时，强度每回合增加 min(Unrest,自身强度×0.15)。\n<CrossReference name=\"Entrance Population\" href=\"?page=locations#entry-place-ruler-2879667447-act-inundai-unrest\" meta=\"统治者行动\" text=\"当地 Entranced Populace 强度 +25，Inundai Debt +50。\" image=\"/locations/mod/Wonderblunder_DeepOnes.iconinundaiunrest.png\" /> 完成时 +25。\nEase Unrest：已有修正 +10，新建时为 25。\n当地 Inundai Presence 被封锁时，每回合额外 −10。"
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaiunrest.png"
          }
        ]
      },
      {
        "id": "modifiers-2879667447-places-6",
        "title": "Inundai Palace",
        "items": [
          {
            "id": "mod-2879667447-global-inundai-presence",
            "name": "Global Inundai Presence",
            "text": "汇总 Inundai Court 在世界中的有效沿海据点，用于 Court 的影响及相关行动。",
            "modifierLocations": "<CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" />。",
            "modifierSource": "<CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" /> 建立时加入。",
            "modifierChange": {
              "natural": "每回合重算为未封锁的沿海 Inundai Presence 数量×10。",
              "external": ""
            },
            "image": "./location-modifiers/mod/Wonderblunder_DeepOnes.iconinundaicult.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-2932110698",
    "name": "Living Wilds",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-2932110698-places-0",
        "title": "人类聚居地",
        "items": [
          {
            "id": "mod-2932110698-destructive-industry",
            "name": "Destructive Industry",
            "text": "每点强度使 Prosperity +0.004，并使当地适居度降低 0.5 个百分点。提供 Sabotage Destructive Industry 与 <CrossReference name=\"End Destructive Industry\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-enddestructiveindustry\" meta=\"统治者行动\" text=\"Destructive Industry 减少 5；当前完成代码没有实际扣除 Gold。\" image=\"/locations/mod/nature.property_destructive_industry.png\" />。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Destructive Industry\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-destructiveindustry\" meta=\"统治者行动\" text=\"领主获得 ⌊45 × Prosperity × 人口/100⌋ Gold，Destructive Industry 增加 5。\" image=\"/locations/mod/nature.property_destructive_industry.png\" /> 统治者行动。",
            "modifierChange": {
              "natural": "所在地失去人类类聚居地后，每回合强度 −1。",
              "external": "<CrossReference name=\"Destructive Industry\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-destructiveindustry\" meta=\"统治者行动\" text=\"领主获得 ⌊45 × Prosperity × 人口/100⌋ Gold，Destructive Industry 增加 5。\" image=\"/locations/mod/nature.property_destructive_industry.png\" /> 完成时 +5。\nSabotage <CrossReference name=\"Destructive Industry\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-destructiveindustry\" meta=\"统治者行动\" text=\"领主获得 ⌊45 × Prosperity × 人口/100⌋ Gold，Destructive Industry 增加 5。\" image=\"/locations/mod/nature.property_destructive_industry.png\" /> 完成时 −25，同时 Devastation +25。\n<CrossReference name=\"End Destructive Industry\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-enddestructiveindustry\" meta=\"统治者行动\" text=\"Destructive Industry 减少 5；当前完成代码没有实际扣除 Gold。\" image=\"/locations/mod/nature.property_destructive_industry.png\" /> 完成时 −5。"
            },
            "image": "./location-modifiers/mod/nature.property_destructive_industry.png"
          },
          {
            "id": "mod-2932110698-stockpiled-food",
            "name": "Stockpiled Food",
            "text": "额外食物产出等于强度四舍五入后的数值。每回合使本地及相邻地点的 Devastation 各 −1。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "Hunt Game；Dryad 治愈地点；英雄击杀 Stag 后运回食物。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Hunt Game 完成时，为狩猎发起地 +10。\nDryad 完成治愈地点时 +25。\n非玩家英雄击杀 Stag 时，为其人类类故乡建立强度 50 的修正。"
            },
            "image": "./location-modifiers/game/give.png"
          },
          {
            "id": "mod-2932110698-dormant-werewolves",
            "name": "Dormant Werewolves",
            "text": "积累本地狼人感染。血月或近期感染激活后，显示为活跃的狼人群体；活跃期间每回合 Menace +3、Profile +2。\n强度达到 300 时，人类聚居地转为 <CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/nature.location_werewolflands.png\" />，完全 Enshadowed。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "<CrossReference name=\"Holy: Seed Lycanthropy\" href=\"?page=locations#entry-place-task-2932110698-ch-h-nature-seedlycanthropy\" meta=\"宗教任务\" text=\"建立初始强度 10 的 Werewolf Population，传播 Lycanthropy。\" image=\"/locations/mod/nature.property_werewolfpack.png\" />、Spread Lycanthropy，以及狼人传播感染。",
            "modifierChange": {
              "natural": "活跃期间每回合强度 +6；血月每 50 回合出现一次，激活期为 20 回合。",
              "external": "<CrossReference name=\"Holy: Seed Lycanthropy\" href=\"?page=locations#entry-place-task-2932110698-ch-h-nature-seedlycanthropy\" meta=\"宗教任务\" text=\"建立初始强度 10 的 Werewolf Population，传播 Lycanthropy。\" image=\"/locations/mod/nature.property_werewolfpack.png\" /> 完成时 +10。\nSpread Lycanthropy 完成时 +10。\n统治者具有 Lycanthropy 时，每回合 +3；每个相邻 <CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/nature.location_werewolflands.png\" /> 每回合 +3。\nPurge Werewolves 完成时 −100，并把群体的 Menace、Profile 减半。"
            },
            "image": "./location-modifiers/mod/nature.property_werewolfpack.png"
          }
        ]
      },
      {
        "id": "modifiers-2932110698-places-1",
        "title": "荒野",
        "items": [
          {
            "id": "mod-2932110698-darkened-wilds",
            "name": "Darkened Wilds",
            "text": "使荒野能够积累与传播 Shadow，并开放 Rest in Wilderness、Cleanse Wilderness 与荒野版本 Well of Shadows。当地生物会逐步受黑暗侵蚀，个人 Shadow 达到 50% 后可能采用黑暗行为。\n每回合，当地 Shadow 从各个黑暗程度更高、且不是 the Elder Tomb 的邻地额外获得两地差值的 2%；该邻地存在 Well of Shadows 时再增加 3 个百分点。上述增量受本地 Ward 抑制，Shadow 最高 100%。\nCleanse Wilderness 可降低当地 Shadow。",
            "modifierLocations": "适用 Living Wilds 规则的荒野地点。",
            "modifierSource": "Living Wilds 在合格荒野初始化；没有聚居地载体时建立 Unoccupied Wilds。",
            "image": "./location-modifiers/mod/nature.property_darkenedwilds.png"
          },
          {
            "id": "mod-2932110698-nature-sanctuary",
            "name": "Nature Sanctuary",
            "text": "适居度增加 15 个百分点。此处是地点修正，区别于产生它的 Nature Sanctuary 聚居地。",
            "modifierLocations": "<CrossReference name=\"Nature Sanctuary\" href=\"?page=locations#entry-location-set-nature-naturesanctuary\" meta=\"地点\" text=\"自然保护地，提高相邻地点宜居度；提供 Despoil Sanctuary，让不友善的执行者破坏保护地。\n\n出现方式\n统治者完成 Nature Sanctuary 行动，在选定野地花费 Gold 建立。\" image=\"/locations/mod/nature.location_sanctuary.png\" /> 影响的周边地点。",
            "modifierSource": "<CrossReference name=\"Nature Sanctuary\" href=\"?page=locations#entry-location-set-nature-naturesanctuary\" meta=\"地点\" text=\"自然保护地，提高相邻地点宜居度；提供 Despoil Sanctuary，让不友善的执行者破坏保护地。\n\n出现方式\n统治者完成 Nature Sanctuary 行动，在选定野地花费 Gold 建立。\" image=\"/locations/mod/nature.location_sanctuary.png\" /> 聚居地向周边地点提供的影响。",
            "modifierChange": {
              "natural": "",
              "external": "来源 Sanctuary 消失，或其自身所在地的适居度低于 15% 时移除。"
            },
            "image": "./location-modifiers/mod/nature.property_sanctuary.png"
          },
          {
            "id": "mod-2932110698-despoiled-sanctuary",
            "name": "Despoiled Sanctuary",
            "text": "留下已被亵渎的标记，使此处不能重新建立 Nature Sanctuary。成为废墟后仍保留。",
            "modifierLocations": "遭到掠夺的 <CrossReference name=\"Nature Sanctuary\" href=\"?page=locations#entry-location-set-nature-naturesanctuary\" meta=\"地点\" text=\"自然保护地，提高相邻地点宜居度；提供 Despoil Sanctuary，让不友善的执行者破坏保护地。\n\n出现方式\n统治者完成 Nature Sanctuary 行动，在选定野地花费 Gold 建立。\" image=\"/locations/mod/nature.location_sanctuary.png\" /> 所在地点。",
            "modifierSource": "<CrossReference name=\"Despoil Sanctuary\" href=\"?page=locations#entry-place-task-2932110698-ch-nature-despoilsanctuary\" meta=\"挑战\" text=\"摧毁 Nature Sanctuary，并阻止重建。\" image=\"/locations/mod/nature.property_destructive_industry.png\" /> 挑战或 <CrossReference name=\"Plunder Sanctuary\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-plundersanctuary\" meta=\"统治者行动\" text=\"移除相邻 Nature Sanctuary，留下强度 100 的 Plundered Sanctuary，领主获得 40 Gold。\" image=\"/locations/game/bribe.png\" /> 统治者行动。",
            "image": "./location-modifiers/mod/nature.property_destructive_industry.png"
          },
          {
            "id": "mod-2932110698-wild-game",
            "name": "Wild Game",
            "text": "提供 Hunt Game。完成后使发起地 Stockpiled Food +10，同时消耗 30 点猎物强度。",
            "modifierLocations": "由附近聚居地发起狩猎的荒野。",
            "modifierSource": "<CrossReference name=\"Organize Hunt\" href=\"?page=locations#entry-place-ruler-2932110698-act-nature-organizehunt\" meta=\"统治者行动\" text=\"消耗 50 Gold，在目标地建立强度 100 的 Wild Game，英雄可狩猎并为领主所在地补充食物；增加 125 狩猎冷却。\" image=\"/locations/mod/nature.property_wildgame.png\" /> 统治者行动。",
            "initialValue": "100。",
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "Hunt Game 完成时 −30。\nDrive Away Game 完成时 −50。\n发起地失效时移除。"
            },
            "image": "./location-modifiers/mod/nature.property_wildgame.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-2932765110",
    "name": "Covens, Curses & Curios Recast",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-2932765110-places-0",
        "title": "共通地点",
        "items": [
          {
            "id": "mod-2932765110-soul-snare",
            "name": "Soul Snare",
            "text": "非玩家控制、具有灵魂且不是 Chosen One 的人物，在当地开始行动且进度为 0 时失去灵魂，获得 Soulless，灵魂作为 Soul 留在当地。",
            "modifierLocations": "施法者所在地点。",
            "modifierSource": "Curseweaving: Soul Snare。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "捕获一名合格人物的灵魂后移除。"
            },
            "image": "./location-modifiers/mod/CovenExpansionRecast.Icon_SoulSnare.png"
          }
        ]
      },
      {
        "id": "modifiers-2932765110-places-1",
        "title": "人类聚居地",
        "items": [
          {
            "id": "mod-2932765110-lucidity",
            "name": "Lucidity",
            "text": "对抗 Psychogenic Illness。每有 50 点，每回合使各份 Psychogenic Illness −1，向下取整；强度上限 300。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "Psychogenic Illness 暴露产生的抵抗力；Raise Lucidity。",
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "第一份 Psychogenic Illness 每回合增加当地统治者 Lore×1.5；额外各份提供前述数值的一半。\nRaise Lucidity 完成时 +15。\nShatter Lucidity 完成时，本地及所有邻地 Lucidity 减半。"
            },
            "image": "./location-modifiers/mod/CovenExpansionRecast.Icon_Lucid.png"
          },
          {
            "id": "mod-2932765110-psychogenic-illness",
            "name": "Psychogenic Illness",
            "text": "以另一种地点修正为症状模板的传染性心因疾病；名称附上模仿的修正。每点强度使 Prosperity −0.003。第一份疾病每回合增加 ⌊强度/100+1⌋ Unrest，额外各份仅提供该数值的一半。\n强度达到 80 后，在当地建立或强化被模仿修正：新建强度为症状上限的 10%，此后每回合补至多 3，最高到症状上限。\n超过 60 时可传入相邻人类聚居地；本地有 Quarantine 时门槛提高到超过 150，目标同类疾病须低于本地的一半。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "Curseweaving 的 Psychogenic Illness 法术；相邻同类疾病传播。",
            "modifierChange": {
              "natural": "默认难度下每回合强度 +2。",
              "external": "Lucidity 每有 50 点，每回合 −1，向下取整。\n符合条件的邻地向本地传入疾病时，已有同类每回合 +1；新建为 1 并追加该轮传播量。\n重复施加同一症状时，叠加强度为新疾病强度的三分之一，并保留较高的症状上限。\nCultivate Psychogenic Illness 完成时 +当地 Madness×0.32。\nTreat Psychogenic Illness 完成时 −60。"
            },
            "image": "./location-modifiers/mod/CovenExpansionRecast.Icon_PsychIllness.png"
          },
          {
            "id": "mod-2932765110-spirit-tree",
            "name": "Spirit Tree",
            "text": "食物产出×2、Prosperity +0.5。所属人类国家可获得 Forest Guardian 军队；关联守护者少于两支时，每 25 回合产生一支，最多同时两支。",
            "modifierLocations": "人类类聚居地。",
            "modifierSource": "持有 Spirit Seed 的人物完成 Plant Spirit Tree，消耗该物品。",
            "image": "./location-modifiers/mod/CovenExpansionRecast.Icon_SpiritTree.png"
          }
        ]
      },
      {
        "id": "modifiers-2932765110-places-2",
        "title": "Catacombs",
        "items": [
          {
            "id": "mod-2932765110-robbed-graves",
            "name": "Robbed Graves",
            "text": "记录被掘开的墓穴，名称还显示下一次 <CrossReference name=\"Exhume Grave\" href=\"?page=points-of-interest#entry-place-task-2932765110-ch-exhumegrave\" meta=\"挑战\" text=\"掘开墓穴，Robbed Graves +35，并产生携带至少 25 Gold 陪葬品的 Soul。\" image=\"/locations/mod/CovenExpansionRecast.Icon_Graveyard.png\" /> 将获得的死者专业。强度超过 99 后禁止继续掘墓；每次掘墓后重新选择下一个专业。",
            "modifierLocations": "带有 <CrossReference name=\"Catacombs\" href=\"?page=points-of-interest#entry-location-sub-catacombs\" meta=\"兴趣点\" text=\"当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。\n\n出现方式\n普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/catacombs.png\" /> 的人类聚居地。",
            "modifierSource": "<CrossReference name=\"Catacombs\" href=\"?page=points-of-interest#entry-location-sub-catacombs\" meta=\"兴趣点\" text=\"当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。\n\n出现方式\n普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/catacombs.png\" /> 初始化此记录；<CrossReference name=\"Exhume Grave\" href=\"?page=points-of-interest#entry-place-task-2932765110-ch-exhumegrave\" meta=\"挑战\" text=\"掘开墓穴，Robbed Graves +35，并产生携带至少 25 Gold 陪葬品的 Soul。\" image=\"/locations/mod/CovenExpansionRecast.Icon_Graveyard.png\" /> 增加强度。",
            "modifierChange": {
              "natural": "",
              "external": "<CrossReference name=\"Exhume Grave\" href=\"?page=points-of-interest#entry-place-task-2932765110-ch-exhumegrave\" meta=\"挑战\" text=\"掘开墓穴，Robbed Graves +35，并产生携带至少 25 Gold 陪葬品的 Soul。\" image=\"/locations/mod/CovenExpansionRecast.Icon_Graveyard.png\" /> 完成时 +35，随后最高限制为 100。\n<CrossReference name=\"Catacombs\" href=\"?page=points-of-interest#entry-location-sub-catacombs\" meta=\"兴趣点\" text=\"当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。\n\n出现方式\n普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/catacombs.png\" /> 消失时移除。"
            },
            "image": "./location-modifiers/mod/CovenExpansionRecast.Icon_Graveyard.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-2968835416",
    "name": "Community Library",
    "baseGame": false,
    "description": "Community Library 还将 Daughter Seer 的事件标记改为可在聚居地毁灭后保留；标记用途与本体相同。",
    "sections": [
      {
        "id": "modifiers-2968835416-places-0",
        "title": "矮人聚居地",
        "items": [
          {
            "id": "mod-2968835416-growing-economy",
            "name": "Growing Economy",
            "text": "Prosperity +0.05。本地每回合额外累计 0.5 人口，同势力相邻人类类聚居地各累计 0.25；整数部分加入人口，小数保留。\n普通聚居地须尚未达到人口上限与食物容量；矮人聚居地采用两者的 80% 门槛。",
            "modifierLocations": "通过 Community <CrossReference name=\"Library\" href=\"?page=points-of-interest#entry-location-sub-library\" meta=\"兴趣点\" text=\"每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 Weaken Iastur。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/library.png\" /> 的殖民建造流程建立的 <CrossReference name=\"Dwarven City\" href=\"?page=locations#entry-location-set-dwarvencity\" meta=\"地点\" text=\"矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 Gold like the Sun。\n\n出现方式\n地图生成的矮人主要据点。反复从 Vast Sewers、Market、Library、Gold Mine 抽取，直至拥有 3 个不同兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\" image=\"/locations/game/loc_major_dwarves.png\" /> 或 <CrossReference name=\"Dwarven Outpost\" href=\"?page=locations#entry-location-set-dwarvenoutpost\" meta=\"地点\" text=\"矮人小型据点。防御上限额外增加 20；提供 Gold like the Sun 与 Raid Periphery。\n\n出现方式\n地图生成的矮人次要据点，从 Vast Sewers、Market、Library、Gold Mine 中随机配置 1 个兴趣点。\n\n可能配置的兴趣点\nGold Mine、Seat of Holy Order、Library、Market、Vast Sewers、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与矮人聚居地通用。\" image=\"/locations/game/loc_minor_dwarves.png\" />。",
            "modifierSource": "矮人殖民部队完成 Build Settlement。",
            "initialValue": "100。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "所在地失去人类类聚居地，或人口达到对应增长门槛时移除。"
            },
            "image": "./location-modifiers/game/market.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-3003549759",
    "name": "Orcs Plus",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-3003549759-places-0",
        "title": "人类聚居地",
        "items": [
          {
            "id": "mod-3003549759-orc-sacrificial-site",
            "name": "Orc Sacrificial Site",
            "text": "提供 Orc Shaman 的 Sacrificial Festival，使献祭地点产生 Death 与 Devastation。",
            "modifierLocations": "遭到破坏的人类类聚居地。",
            "modifierSource": "Orc Shaman 完成 Create Sacrificial Site。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "每回合强度 −2。",
              "external": "Sacrificial Festival 执行期间每回合额外 −2。"
            },
            "image": "./location-modifiers/game/skull.png"
          }
        ]
      },
      {
        "id": "modifiers-3003549759-places-1",
        "title": "Orc Camp",
        "items": [
          {
            "id": "mod-3003549759-great-construction",
            "name": "Great Construction",
            "text": "积累建筑工程进度。达到 300 后把据点专门化为 Orc <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" />、Shaman Camp、Menagerie、Shipyard 或 Mines，取决于发起的工程。\n每点 Gold 对应的进度为 300÷当前总造价；总造价按基本费用及相邻专业化据点重算。",
            "modifierLocations": "参与大型工程的 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" />。",
            "modifierSource": "Orc 大型工程行动；初始投入 10 Gold 对应的工程进度。",
            "modifierChange": {
              "natural": "没有工程资金时，每回合损失 1 Gold 对应的进度。",
              "external": "资金充足时，每回合消耗至多 5 Gold，并增加相应进度。\n新增捐款进入工程资金池。\n条件失效时取消；成功后移除工程。"
            },
            "image": "./location-modifiers/game/humanColony.png"
          },
          {
            "id": "mod-3003549759-caged-manticore",
            "name": "Caged Manticore",
            "text": "为 Menagerie 工程暂时扣留的 Manticore，当地 Prosperity −0.15。",
            "modifierLocations": "正在建造 Menagerie 的 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"/locations/game/loc_evil_orc.png\" />。",
            "modifierSource": "Orc 建造 Menagerie 时捕获并带回 Manticore。",
            "modifierChange": {
              "natural": "",
              "external": "Menagerie 建成后作为工程材料移除。\n工程取消时放回 Wandering Manticore。"
            },
            "image": "./location-modifiers/game/manticore.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-3261852980",
    "name": "AAEnglishman and Mall's Event Pack - REDUX",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-3261852980-places-0",
        "title": "事件目标地点",
        "items": [
          {
            "id": "mod-3261852980-fleeting-servant",
            "name": "Fleeting Servant",
            "text": "提供 Purge Fleeting Servant，吸引英雄前来处理，消耗其时间。地点毁灭时可保留。",
            "baseGame": true,
            "modifierLocations": "无固定地点限制；由相应行动、事件或人物在当地建立。",
            "modifierSource": "Translating the ritual 与 The Alpine witch 事件。\n<CrossReference name=\"Translating the ritual\" href=\"?page=events#entry-event-3261852980-maeredux-midch-translation\" meta=\"事件\" text=\"玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n正在执行 Lore 属性任务\n并且 （回合 大于 （「Translating the ritual · 进度」剧情记录 + 75）；或者 「Translating the ritual · 进度」剧情记录 = 0）。\n\n抽选权重：1。\" image=\"./events/0a05a483093cf121.jpg\" />、<CrossReference name=\"The Alpine witch\" href=\"?page=events#entry-event-3261852980-maeredux-move-alpine-witch\" meta=\"事件\" text=\"玩家 Agent 移动进入地点时触发。\n\n触发条件\n「The Alpine witch · 进度」剧情记录 = 0\n并且 当前单位是 Corrupted Hero\n并且 当地没有聚居地\n并且 （地形为 Highland；或者 地形为 Plains；或者 地形为 Arid；或者 地形为 Drycold；或者 地形为 Grass；或者 地形为 Grass）。\n\n单次候选检查概率：30%。\" image=\"./events/033385c06649a996.jpg\" />。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": "Translating the ritual 选择 What is the worst that could happen?，建立强度 50 的修正。\nThe Alpine witch 选择 Poison this pond，建立强度 100 的修正。\nPurge Fleeting Servant 完成时移除。"
            },
            "image": "./location-modifiers/game/fleetingServant.png"
          },
          {
            "id": "mod-3261852980-a-friend-in-need",
            "name": "A Friend In Need",
            "baseGame": false,
            "text": "标出英雄托付的箱子应送达的地点。获知地址后有 20 回合运送期限；到达、超时或背叛等结果进入相应事件节点。",
            "modifierLocations": "A friend in need 事件链指定的送货地点。",
            "modifierSource": "A letter from a friend in need 揭示交付地址。\n<CrossReference name=\"A letter from a friend in need\" href=\"?page=events#entry-event-3261852980-maeredux-inert-a-friend-in-need-package-2\" meta=\"事件\" text=\"回合检查地点时触发。\n\n触发条件\n当地是人类聚居地\n并且 「递送委托进度」剧情记录 = 2\n并且 「递送委托信件进度」剧情记录 = 1。\n\n单次候选检查概率：100%。\" image=\"./events/8607811f0fa5aeaf.jpg\" />。",
            "modifierChange": {
              "natural": "",
              "external": "交付、失败或结束委托的节点移除此标记。"
            },
            "image": "./location-modifiers/mod/maeRedux.friend_need_icon.png"
          },
          {
            "id": "mod-3261852980-increased-security",
            "name": "Increased Security",
            "baseGame": false,
            "text": "Steal objects of power 的结果：Security +2，持续 15 回合。\nSteal gold 或 Steal gear 的结果：Security +1，持续 35 回合。",
            "modifierLocations": "发生 Helping Hands 的聚居地。",
            "modifierSource": "Helping Hands 系列事件的盗窃选项。\n<CrossReference name=\"Helping Hands\" href=\"?page=events#entry-event-3261852980-maeredux-midch-helpinghands-1\" meta=\"事件\" text=\"玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n（回合 大于 （「Helping Hands · 进度」剧情记录 + 60）；或者 「Helping Hands · 进度」剧情记录 = 0）\n并且 「Helping Hands · 地点」剧情记录 = 0\n并且 （当前人物的种族是 Elf；或者 当前人物的种族是 Orc；或者 当前人物的种族是 Human；或者 当前单位是 The Cursed）。\n\n抽选权重：1。\" image=\"./events/12b4937e1d299e7b.png\" />。",
            "modifierChange": {
              "natural": "每回合强度 −1。",
              "external": ""
            },
            "initialValue": "盗取力量为 15；盗取金币或装备为 35。",
            "image": "./location-modifiers/mod/maeRedux.PlusSec_icon.png"
          },
          {
            "id": "mod-3261852980-ruler-stalked",
            "name": "Ruler Stalked",
            "baseGame": false,
            "text": "守卫被迫围绕统治者安排防护，当地 Security −2。",
            "modifierLocations": "The Suitor 事件链中受害统治者所在的聚居地。",
            "modifierSource": "The Suitor: Access 或 The Suitor: Gifts 的对应结果。\n<CrossReference name=\"The Suitor: Access\" href=\"?page=events#entry-event-3261852980-maeredux-p2p-suitor-roses-access\" meta=\"事件\" text=\"人物关系事件检查时触发。\n\n触发条件\n「Suitor 整体进度」剧情记录 = 2\n并且 「Suitor 骚扰次数」剧情记录 小于 2\n并且 「追求者身份」剧情记录 = 1\n并且 「被追求者身份」剧情记录 = 1\n并且 当前人物是统治者\n并且 两人位于同一地点\n并且 回合 大于 「上次 Suitor 骚扰回合」剧情记录\n并且 当前人物尚未发疯\n并且 人物 Shadow（%） 小于 75。\n\n单次候选检查概率：100%。\" image=\"./events/a618618f37812f1f.jpg\" />、<CrossReference name=\"The Suitor: Gifts\" href=\"?page=events#entry-event-3261852980-maeredux-p2p-suitor-roses-gifts\" meta=\"事件\" text=\"人物关系事件检查时触发。\n\n触发条件\n「Suitor 骚扰次数」剧情记录 小于 2\n并且 「Suitor 整体进度」剧情记录 = 2\n并且 「追求者身份」剧情记录 = 1\n并且 「被追求者身份」剧情记录 = 1\n并且 当前人物是统治者\n并且 当前人物尚未发疯\n并且 回合 大于 （「上次 Suitor 骚扰回合」剧情记录 + 5）\n并且 当前人物尚未发疯\n并且 人物 Shadow（%） 小于 75。\n\n单次候选检查概率：80%。\" image=\"./events/a618618f37812f1f.jpg\" />。",
            "image": "./location-modifiers/mod/maeRedux.rosestalk_icon.jpg"
          }
        ]
      },
      {
        "id": "modifiers-3261852980-places-1",
        "title": "Fortress",
        "items": [
          {
            "id": "mod-3261852980-reduced-security",
            "name": "Reduced Security",
            "baseGame": false,
            "text": "当地 Security −2。当前事件文件的衰减指令带有多余参数，无法匹配修正名称，因此实际不会按预期在 25 回合后到期。",
            "modifierLocations": "具有 <CrossReference name=\"Fortress\" href=\"?page=points-of-interest#entry-location-sub-fort\" meta=\"兴趣点\" text=\"为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。\n\n出现方式\n小型人类聚居地的随机候选。\n\n可出现地点\n小型人类聚居地。\n改建或覆灭后是否保留，还受对应流程限制。\n\n可以执行：可渗透兴趣点通用。\" image=\"/locations/game/fort.png\" /> 的聚居地。",
            "modifierSource": "A look at the … 或 The walls of the … 事件选择 Any notes now will prove valuable later。\n<CrossReference name=\"A look at the %LOCATION_NAME\" href=\"?page=events#entry-event-3261852980-maeredux-midch-fort-suspicious\" meta=\"事件\" text=\"玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n本体的途中事件入口先把事件计时清零，再检查候选；此事件又要求计时等于阈值 4，因此该常规入口无法满足这项条件。\n\n触发条件\n回合 大于 （「A look at the %LOCATION_NAME · 进度」剧情记录 + 250）\n并且 当前人物是玩家控制的 Agent\n并且 当地有 Fort\n并且 任务事件计时 = 任务事件计时阈值。\n\n抽选权重：1。\" image=\"./events/a6f90e2849b4a554.jpg\" />、<CrossReference name=\"The walls of the %LOCATION_NAME\" href=\"?page=events#entry-event-3261852980-maeredux-move-fort-suspicious\" meta=\"事件\" text=\"玩家 Agent 移动进入地点时触发。\n\n触发条件\n回合 大于 （「A look at the %LOCATION_NAME · 进度」剧情记录 + 150）\n并且 当前人物是玩家控制的 Agent\n并且 当地有 Fort\n并且 任务事件计时 = 任务事件计时阈值。\n\n单次候选检查概率：5%。\" image=\"./events/a6f90e2849b4a554.jpg\" />。",
            "image": "./location-modifiers/mod/maeRedux.PlusSec_icon.png"
          }
        ]
      }
    ]
  },
  {
    "id": "modifiers-3700090862",
    "name": "The Surveyor",
    "baseGame": false,
    "sections": [
      {
        "id": "modifiers-3700090862-places-0",
        "title": "殖民据点",
        "items": [
          {
            "id": "mod-3700090862-surveyor-outpost",
            "name": "Surveyor Outpost",
            "text": "Surveyor 设立的虚假殖民工程。强度达到 100 后可通过 Collect Funds 取走资金；达到 300 或据点失效时崩溃，生成 30 HP 的 Dispossessed Colonists，剩余资金成为 Item Cache。\n崩溃使 Surveyor 获得 16 Menace、20 Profile，并损害与投资人的关系。",
            "modifierLocations": "未被占领、可作为殖民据点的陆地或 <CrossReference name=\"Ruins\" href=\"?page=locations#entry-location-set-cityruins\" meta=\"地点\" text=\"聚居地毁灭后留下的地点。会保留原地点的 Shadow，以及允许在毁灭后存续的兴趣点；地点自身不提供 Explore Ruins。\n\n出现方式\n聚居地执行毁灭流程后形成；名称通常为 Ruins of [地点名]。\n\n可能配置的兴趣点\nAncient Ruins、Brother of Sleep、The Entrance、Primal Font。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/game/loc_minor_ruins.png\" />。",
            "modifierSource": "The Surveyor 的建造据点仪式。",
            "initialValue": "50。",
            "modifierChange": {
              "natural": "有资金时每回合消耗至多 4 Gold，强度 +4；无资金时每回合 +8。",
              "external": "Collect Funds 每次取出至多 100 Gold，并使强度增加取出的 Gold 数量。\nLooking Busy 在有资助的回合为 Surveyor 提供 2 Gold，不从工程资金扣除。"
            },
            "image": "./location-modifiers/game/humanColony.png"
          }
        ]
      }
    ]
  }
];

modifierGroups.push(robberBaronModifiers);

export const config: ArchiveRecordConfig = {
  id: "base-location-modifiers", assetDir: "location-modifiers", powers: [],
  sections: modifierGroups.flatMap(group => group.sections),
};
