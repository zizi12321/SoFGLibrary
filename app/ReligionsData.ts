import type { ReligionGroup } from "./ReligionCatalogTypes";

export const religionGroups: ReligionGroup[] = [
  {
    "id": "holy-order",
    "title": "Holy Order · 通用教义",
    "description": "普通教团的通用教义池。开启教义子集选项时，每个教团可能只保留其中一部分；Alignment Status 与结构性教义保留。教团中 Acolyte 的实际行动还取决于地点条件、经费和其他行动的吸引力。",
    "items": [
      {
        "id": "holy-order-alignment-status",
        "name": "Alignment Status",
        "baseGame": true,
        "tenetRange": "-3 ～ 3",
        "text": "决定非结构性教义可以降到多低。要把其他教义降到 −1、−2 或 −3，Alignment Status 必须先达到相应负等级；正等级期间无法把其他非结构性教义降为负值。Temple Builders、Preachers、Dogmatic 属于结构性教义。\n负等级同时持续增加本教团 Acolyte 的个人 Shadow，上限 100%。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "其他非结构性教义最低可降至 −1；Acolyte 每回合增加 1 个百分点 Shadow。"
          },
          {
            "level": -2,
            "text": "其他非结构性教义最低可降至 −2；Acolyte 每回合增加 2 个百分点 Shadow。"
          },
          {
            "level": -3,
            "text": "其他非结构性教义最低可降至 −3；Acolyte 每回合增加 3 个百分点 Shadow。"
          }
        ]
      },
      {
        "id": "holy-order-temple-builders",
        "name": "Temple Builders",
        "baseGame": true,
        "tenetRange": "0 ～ 3",
        "text": "控制建造 Temple 的资金份额与行动优先级。每回合划入建造经费的金额为：教团收入 × 本教义等级 ÷（2 + Temple Builders 等级 + Preachers 等级），向下取整。\nHoly: Build Temple 在信仰本教团的人类聚居地执行；需要设施空间，或替换异教 Temple。建造费用为 50 ×（现有 Temple 数 + 1），可控执行者可用自身 Gold 补足教团经费。\n每名已在建造或前往建造的同教团 Acolyte 使该教义的行动评分减少 50；没有 Temple 时额外增加 100。在 City 中，上述评分再乘 1.25。",
        "tenetLevels": [
          {
            "level": 3,
            "text": "建造资金分配权重为 3；Holy: Build Temple 基础行动倾向增加 150。"
          },
          {
            "level": 2,
            "text": "建造资金分配权重为 2；Holy: Build Temple 基础行动倾向增加 100。"
          },
          {
            "level": 1,
            "text": "建造资金分配权重为 1；Holy: Build Temple 基础行动倾向增加 50。"
          }
        ]
      },
      {
        "id": "holy-order-preachers",
        "name": "Preachers",
        "baseGame": true,
        "tenetRange": "0 ～ 3",
        "text": "控制传教资金份额，并允许 Acolyte 执行 Holy: Preach Faith。每回合划入传教经费的金额为：教团收入 × 本教义等级 ÷（2 + Temple Builders 等级 + Preachers 等级），向下取整。\nHoly: Preach Faith 在尚未信仰本教团的人类聚居地执行，将其转为本教团信仰并移除当地异教 Temple。费用为 10 × max（0，信仰本教团的聚居地数 − 5）的 0.75 次方，向下取整；可控执行者可以自身 Gold 补足经费。其他教团的 Seat，以及由 Ophanim 掌控的地点，有额外保护。\n每名已在传教或前往传教的同教团 Acolyte，使本教义的行动评分减少 50。",
        "tenetLevels": [
          {
            "level": 3,
            "text": "传教资金分配权重为 3；Holy: Preach Faith 基础行动倾向增加 120。"
          },
          {
            "level": 2,
            "text": "传教资金分配权重为 2；Holy: Preach Faith 基础行动倾向增加 80。"
          },
          {
            "level": 1,
            "text": "传教资金分配权重为 1；Holy: Preach Faith 基础行动倾向增加 40。"
          }
        ]
      },
      {
        "id": "holy-order-dogmatic",
        "name": "Dogmatic",
        "baseGame": true,
        "tenetRange": "0 ～ 3",
        "text": "提高修改教义所需的 Elder Influence 与 Human Influence。两种影响力的原有门槛均乘以（1 + 本教义等级）。",
        "tenetLevels": [
          {
            "level": 3,
            "text": "两种影响力的需求均为原来的 4 倍。"
          },
          {
            "level": 2,
            "text": "两种影响力的需求均为原来的 3 倍。"
          },
          {
            "level": 1,
            "text": "两种影响力的需求均为原来的 2 倍。"
          }
        ]
      },
      {
        "id": "holy-order-crusader-faith",
        "name": "Crusader Faith",
        "baseGame": true,
        "tenetRange": "0 ～ 1",
        "text": "让 Acolyte 在信仰本教团的 City 执行 Holy: Military Fervour；当地 Military Fervour 低于 100 时可执行。",
        "tenetLevels": [
          {
            "level": 1,
            "text": "任务完成时 Military Fervour 增加 50。该修正按强度百分比提高以此地为家乡的人类军队的最大 HP，最多提高 100%；非教程中每回合衰减 2。Acolyte 执行该任务的倾向增加 0.6 ×（100 − 当地 Military Fervour）。"
          }
        ]
      },
      {
        "id": "holy-order-intransigent-faith",
        "name": "Intransigent Faith",
        "baseGame": true,
        "tenetRange": "-2 ～ 1",
        "text": "影响教团成员对异教人物的敌意、信徒统治者的外交倾向，以及争夺信仰地区时的教团关系。下列外交修正作用于信仰不同教团的对象。\n争夺信仰地区时，受损教团与传教者教团的关系若高于本等级阈值，就减少 0.05；关系最低为 −1。",
        "tenetLevels": [
          {
            "level": 1,
            "text": "对异教人物的攻击倾向加成为 0。统治者改善关系倾向增加 25，恶化关系与反对异教君主的倾向各减少 25。指定本教团为国教的倾向减少 10。信仰争端的关系阈值为 −0.6。"
          },
          {
            "level": -1,
            "text": "对异教人物的攻击倾向增加 24；异教国家间战争倾向增加 10。恶化关系与反对异教君主的倾向各增加 25，改善关系倾向减少 25；指定本教团为国教的倾向增加 10。信仰争端的关系阈值为 −0.2。"
          },
          {
            "level": -2,
            "text": "对异教人物的攻击倾向增加 36；异教国家间战争倾向增加 20。恶化关系与反对异教君主的倾向各增加 50，改善关系倾向减少 50；指定本教团为国教的倾向增加 20。信仰争端的关系阈值为 0。"
          }
        ]
      },
      {
        "id": "holy-order-abyssal-faith",
        "name": "Abyssal Faith",
        "baseGame": true,
        "tenetRange": "-3 ～ 1",
        "text": "通过 Holy: Abyssal Faith 改变信仰本教团的人类聚居地统治者对 Deep Ones 的态度。每次完成改变一级：正等级向厌恶方向调整，最低 Dislike；负等级向喜欢方向调整，最高 Like。",
        "tenetLevels": [
          {
            "level": 1,
            "text": "降低统治者对 Deep Ones 的偏好；该行动倾向增加 30。"
          },
          {
            "level": -1,
            "text": "提高统治者对 Deep Ones 的偏好；该行动倾向增加 30。掩护 Deep One Cult、维持其人类外观的行动倾向增加 65。"
          },
          {
            "level": -2,
            "text": "提高统治者对 Deep Ones 的偏好；该行动倾向增加 60。掩护 Deep One Cult、维持其人类外观的行动倾向增加 80。"
          },
          {
            "level": -3,
            "text": "提高统治者对 Deep Ones 的偏好；该行动倾向增加 90。掩护 Deep One Cult、维持其人类外观的行动倾向增加 95。沿海 Temple 每回合检查所在地，缺少 Deep One Cult 时建立一个。"
          }
        ]
      },
      {
        "id": "holy-order-awareness-of-elder-powers",
        "name": "Awareness of Elder Powers",
        "baseGame": true,
        "tenetRange": "-2 ～ 2",
        "text": "改变 Acolyte 自身的 Awareness，并允许其在信仰本教团、拥有统治者的人类聚居地执行 Holy: Aware。正等级将统治者的 Awareness 提升至 100%，负等级将其清为 0%；已达到目标值时该任务不可执行。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "Acolyte 每回合被设为 100% Awareness；进一步提高向统治者传播 Awareness 的行动权重。"
          },
          {
            "level": 1,
            "text": "Acolyte 每回合被设为 100% Awareness；倾向向统治者传播 Awareness。"
          },
          {
            "level": -1,
            "text": "除 Chosen One 外，Acolyte 每回合被设为 0% Awareness。移除统治者 Awareness 的行动倾向按其当前 Awareness 计算，最高增加 30。"
          },
          {
            "level": -2,
            "text": "除 Chosen One 外，Acolyte 每回合被设为 0% Awareness。移除统治者 Awareness 的行动倾向按其当前 Awareness 计算，最高增加 60。"
          }
        ]
      },
      {
        "id": "holy-order-healers",
        "name": "Healers",
        "baseGame": true,
        "tenetRange": "-2 ～ 2",
        "text": "同时影响 Temple 所在地的 Immunity 和 Acolyte 对 Plague 的行动。\nHoly: Cure Plague 在信仰本教团且有 Plague 的聚居地执行，完成时 Plague 减少 100。Holy: Start Plague 在本教团 Temple 所在地、Plague 低于 200 时执行，完成时 Plague 增加 50、Temple Menace 增加 10。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "Temple 所在地 Immunity 每回合增加 4，当前达到 100 后停止增加。治疗 Plague 的行动倾向增加当地 Plague。"
          },
          {
            "level": 1,
            "text": "Temple 所在地 Immunity 每回合增加 3，当前达到 100 后停止增加。治疗 Plague 的行动倾向增加 0.5 × 当地 Plague。"
          },
          {
            "level": -1,
            "text": "Temple 所在地 Immunity 每回合减少 1。传播 Plague 的行动倾向增加 0.35 ×（200 − 当地 Plague）。"
          },
          {
            "level": -2,
            "text": "Temple 所在地 Immunity 每回合减少 2。传播 Plague 的行动倾向增加 0.7 ×（200 − 当地 Plague）。"
          }
        ]
      },
      {
        "id": "holy-order-candle-circles",
        "name": "Candle Circles",
        "baseGame": true,
        "tenetRange": "-2 ～ 2",
        "text": "Temple 持续改变所在地的 Ward。Acolyte 还可在信仰本教团的聚居地执行 Holy: Ward 或 Holy: Remove Ward：前者要求 Ward 低于 100，完成时增加 100；后者要求存在 Ward，完成时减少 100。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "Temple 每回合增加 1 Ward，当前达到 75 后停止增加。Holy: Ward 行动倾向增加 100 − Ward。"
          },
          {
            "level": 1,
            "text": "Temple 每回合增加 0.5 Ward，当前达到 75 后停止增加。Holy: Ward 行动倾向增加 0.5 ×（100 − Ward）。"
          },
          {
            "level": -1,
            "text": "Temple 每回合减少 1.5 Ward。Holy: Remove Ward 行动倾向增加 0.5 × Ward。"
          },
          {
            "level": -2,
            "text": "Temple 每回合减少 3 Ward。Holy: Remove Ward 行动倾向增加 Ward。"
          }
        ]
      },
      {
        "id": "holy-order-funerary-rites",
        "name": "Funerary Rites",
        "baseGame": true,
        "tenetRange": "0 ～ 2",
        "text": "允许 Acolyte 为死者与死难地点举行仪式。Holy: Funeral Rites 在信仰本教团、存在 Human Soul 的人类聚居地执行：送走该灵魂，并移除其他人物因该死者产生的 Mourning。Holy: Memorial Service 在有 Death 的地点执行，完成时 Death 减少 100。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "Holy: Funeral Rites 的行动倾向增加 100；Holy: Memorial Service 增加当地 Death。"
          },
          {
            "level": 1,
            "text": "Holy: Funeral Rites 的行动倾向增加 50；Holy: Memorial Service 增加 0.5 × 当地 Death。"
          }
        ]
      },
      {
        "id": "holy-order-dark-worship",
        "name": "Dark Worship",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "负等级使本教团 Temple 提供玩家可用的 Dark Worship，执行时需要地点完全 Infiltrated。完成后当地 Shadow 增加 25 个百分点，再向周边人类聚居地分配合计 150 个百分点 Shadow，Temple Menace 增加 20。\nAcolyte 的 Holy: Dark Worship 在本教团 Temple 举行，完成时向周边分配合计 60 个百分点 Shadow，并使 Temple Menace 增加 10；传播绕过 Ophanim’s Faith 超过 50 的地点。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "开启 Temple 的 Dark Worship，并满足 Acolyte 执行 Holy: Dark Worship 的教义条件。"
          },
          {
            "level": -2,
            "text": "保留上述效果；Acolyte 执行 Holy: Dark Worship 的行动倾向额外增加 80。"
          }
        ]
      },
      {
        "id": "holy-order-prophets-of-doom",
        "name": "Prophets of Doom",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "允许 Acolyte 在信仰本教团、Madness 低于 200 的人类聚居地执行 Holy: Prophesy Doom，完成时 Madness 增加 50。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "行动倾向增加 50 − 0.5 ×（当地 Unrest + Madness）。"
          },
          {
            "level": -2,
            "text": "行动倾向增加 100 − 0.5 ×（当地 Unrest + Madness）。"
          }
        ]
      },
      {
        "id": "holy-order-safety-in-ignorance",
        "name": "Safety in Ignorance",
        "baseGame": true,
        "tenetRange": "0 ～ 2",
        "text": "鼓励 Acolyte 销毁 Arcane Secret，并敌视学习魔法的人物。Holy: Destroy Arcane Secret 可以在本教团疆域之外执行。\n攻击魔法使用者的额外倾向按其 Geomancy、Death Magic、Blood Magic 的等级总和计算，最低为 0。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "销毁 Arcane Secret 的行动倾向增加 150。攻击魔法使用者的倾向增加 max（0，50 × 魔法等级总和 − 10）。"
          },
          {
            "level": 1,
            "text": "销毁 Arcane Secret 的行动倾向增加 75。攻击魔法使用者的倾向增加 max（0，25 × 魔法等级总和 − 10）。"
          }
        ]
      },
      {
        "id": "holy-order-charitable-works",
        "name": "Charitable Works",
        "baseGame": true,
        "tenetRange": "0 ～ 2",
        "text": "允许 Acolyte 在信仰本教团、尚无 Reconstruction Effort 的聚居地执行 Holy: Charitable Works。完成时建立强度 40 的 Reconstruction Effort；它每回合强度减少 1，同时使当地 Devastation 减少 4。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "行动倾向增加当地 Devastation。"
          },
          {
            "level": 1,
            "text": "行动倾向增加 0.5 × 当地 Devastation。"
          }
        ]
      },
      {
        "id": "holy-order-music-of-the-outer-spheres",
        "name": "Music of the Outer Spheres",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "位于人类聚居地的每座本教团 Temple 都会持续产生神力，同时积累 Madness 与 Temple Menace。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "每座 Temple 每回合提供 0.05 神力、当地 Madness 增加 1、Temple Menace 增加 0.2。"
          },
          {
            "level": -2,
            "text": "每座 Temple 每回合提供 0.1 神力、当地 Madness 增加 2、Temple Menace 增加 0.2。"
          }
        ]
      },
      {
        "id": "holy-order-xenophobic-condemnation",
        "name": "Xenophobic Condemnation",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "信仰本教团的统治者观察当地挑战的完成结果。如果挑战带有正数的完成 Menace，且执行者与统治者属于不同种族，统治者对执行者种族的偏好下降一级。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "种族偏好逐次下降，最低达到 Dislike。"
          },
          {
            "level": -2,
            "text": "种族偏好逐次下降，最低达到 Hate。"
          }
        ]
      },
      {
        "id": "holy-order-explore-the-darkness",
        "name": "Explore the Darkness",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "允许 Acolyte 在通往地下的 Tunnels 执行 Holy: Explore Tunnels。完成时所在地 Unrest 与 Madness 各增加 10；若所在地为人类聚居地，Shadow 增加 10 个百分点；世界对地下的认知增加 2 个百分点。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "Holy: Explore Tunnels 的行动倾向增加 30。"
          },
          {
            "level": -2,
            "text": "Holy: Explore Tunnels 的行动倾向增加 60。"
          }
        ]
      }
    ]
  },
  {
    "id": "conditional",
    "title": "Holy Order · 条件加入",
    "description": "通过特定挑战添加到教团的通用教义。添加后仍受 <CrossReference name=\"Alignment Status\" href=\"#entry-holy-order-alignment-status\" /> 的负等级限制。",
    "items": [
      {
        "id": "conditional-the-feast",
        "name": "The Feast",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "通过 The Hunger’s Promise 加入教团：在已渗透的 Seat 执行，教团尚未拥有 The Feast；执行者为 The Baroness、执行者拥有 The Hunger，或该教团已有拥有 The Hunger 的 Acolyte，满足其一即可。\n负等级使 Acolyte 获得 The Hunger。授予该特质时，若 The Baroness 在场上的单位列表中，会将她设为教团 Prophet。拥有 The Hunger 的死者留下 Human Soul 后，Acolyte 可通过 Holy: Promised Return 将其复活为自主行动的 Vampire。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "每座 Temple 每回合使当地 Death 增加 1、Temple Menace 增加 0.3；Holy: Promised Return 行动倾向增加 60。"
          },
          {
            "level": -2,
            "text": "每座 Temple 每回合使当地 Death 增加 2、Temple Menace 增加 0.6；Holy: Promised Return 行动倾向增加 120。"
          }
        ]
      }
    ]
  },
  {
    "id": "witches",
    "title": "Witches · 附加教义",
    "description": "Witches 在通用 Holy Order 教义之外拥有以下两项。效果作用于对应 Coven 及其成员。",
    "items": [
      {
        "id": "witches-arbormancy",
        "name": "Arbormancy",
        "baseGame": true,
        "tenetRange": "0 ～ 2",
        "text": "允许本教团成员在自己的 Coven 执行 Holy: Arbormancy，影响所在地及相邻地点所属地块。每次完成让这些地块的当前温度向适宜值 0.5 靠近 25%，用于改善农业条件。\n该教义还参与 Plague 行动评分：在其他教义已允许执行相应任务时，正等级额外偏向治病、抑制传播。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "温度调整幅度相同；温度改善与 Famine 收益的行动权重为 2 倍。治疗 Plague 的额外倾向为 Plague，传播 Plague 的额外倾向为 −0.7 ×（200 − Plague）。"
          },
          {
            "level": 1,
            "text": "开启 Holy: Arbormancy，以 1 倍权重评估温度改善和 Famine 带来的收益。治疗 Plague 的额外倾向为 0.5 × Plague，传播 Plague 的额外倾向为 −0.35 ×（200 − Plague）。"
          }
        ]
      },
      {
        "id": "witches-human-sacrifice",
        "name": "Human Sacrifice",
        "baseGame": true,
        "tenetRange": "-2 ～ 0",
        "text": "本教团的 Coven 持续进行献祭，在当地积累 Death。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "每处 Coven 每回合 Death 增加 1.5，Temple Menace 增加 0.6。"
          },
          {
            "level": -2,
            "text": "每处 Coven 每回合 Death 增加 3，Temple Menace 增加 0.6。"
          }
        ]
      }
    ]
  },
  {
    "id": "drowned",
    "title": "Deep Ones Plus · Children of the Drowned",
    "description": "Drowned Prophet 建立的独立教团使用这组教义，并保留 <CrossReference name=\"Alignment Status\" href=\"#entry-holy-order-alignment-status\" />。Banishment 初始为 3，1st Hymn 初始为 −1，其余教义初始为 0；建立教团时移除普通教团的其他教义。",
    "items": [
      {
        "id": "drowned-banishment",
        "name": "Banishment",
        "baseGame": false,
        "tenetRange": "-3 ～ 3",
        "text": "改变英雄任务 Banish Drowned Prophet 的 Complexity 与额外 Danger。该任务完成后消灭 Drowned Prophet，继而导致其统治瓦解。\nComplexity = 30 ×（|等级 − 3| + 1）；额外 Danger = 3 ×（3 − 等级）。",
        "tenetLevels": [
          {
            "level": 3,
            "text": "Complexity: 30。"
          },
          {
            "level": 2,
            "text": "Complexity: 60；额外 Danger: 3。"
          },
          {
            "level": 1,
            "text": "Complexity: 90；额外 Danger: 6。"
          },
          {
            "level": -1,
            "text": "Complexity: 150；额外 Danger: 12。"
          },
          {
            "level": -2,
            "text": "Complexity: 180；额外 Danger: 15。"
          },
          {
            "level": -3,
            "text": "Complexity: 210；额外 Danger: 18。"
          }
        ]
      },
      {
        "id": "drowned-1st-hymn",
        "name": "1st Hymn",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "允许 Drowned Prophet 在自己势力的 Abyssal Tower 演唱 Hymn of the Drowned。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "完成时将相邻、尚未归属本势力的人类聚居地纳入控制，杀死其统治者，并在每个被接收的地点生成 15 HP 的 Breathless Horde。势力 Menace 增加 5。"
          }
        ]
      },
      {
        "id": "drowned-2nd-hymn",
        "name": "2nd Hymn",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "允许 Drowned Prophet 在自己势力的 Abyssal Tower 演唱一次 Hymn of Transformation。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "完成时处理本势力人口超过 3 的人类聚居地：把人口改为向下取整的（原人口 − 3）÷ 4，并把这些计算结果汇入 Abyssal City；缺少合适城市时尝试建立。开启 Breathless 的后续招募。施行期间 Drowned Prophet 每回合增加 1.5 Menace，完成时势力 Menace 增加 10。"
          }
        ]
      },
      {
        "id": "drowned-3rd-hymn",
        "name": "3rd Hymn",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "允许 Drowned Prophet 在自己势力的 Abyssal Tower 演唱一次 Hymn of Swords；需要存在有人口的 Abyssal City。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "从每座海洋 Abyssal City 召出 Breathless Horde，HP 为该城人口的 3 倍并向下取整，城市人口保留。向人类国家发动不会超时结束的战争；排除 Dark Empire、Witches 和 Ophanim 教团。\n随后，信仰该教团的统治者可执行 Mass Drownings，耗时 5 回合，消耗随机 1–3 人口并生成 20 HP 的 Breathless Horde，同时增加所消耗人口数 × 10 的 Death。没有统治者、也未启用由 Drowned Prophet 统治选项的领地，会在军队总量允许时自动尝试同类献祭；人口耗尽后聚居地成为废墟。"
          }
        ]
      },
      {
        "id": "drowned-silent-prayers",
        "name": "Silent Prayers",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "调整 Drowned Prophet 的 Silent Prayer 效果。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "Silent Prayer 完成且 Drowned Prophet 当前 Menace 大于 0 时，其 Menace 减少 10，教团 Menace 减少 1；两者最低为 0。"
          }
        ]
      },
      {
        "id": "drowned-of-the-willing",
        "name": "Of the Willing",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "为存在 Deep One Sympathies 的地点提供统治者行动 Embrace Drowned Prophet，执行时间为 10 回合。需要现存 Drowned Prophet，且当地已经信仰其教团，或统治者对 Deep Ones 达到 Obsessed。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "行动完成后地点加入 Drowned Prophet 的势力，杀死当地统治者，清除相应的 Cult 与 Deep One Sympathies，并生成 15 HP 的 Breathless Horde；世界恐慌增加 2 个百分点。"
          }
        ]
      },
      {
        "id": "drowned-to-the-sea",
        "name": "To the Sea",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "允许 Breathless 在 Drowned Prophet 控制的人类聚居地执行 Drowning Ceremonies；人口必须超过 6。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "每次完成转移随机 1–5 人口至 Abyssal City，缺少合适城市时尝试建立；同时将当地信仰转为 Children of the Drowned。"
          }
        ]
      },
      {
        "id": "drowned-unified-faith",
        "name": "Unified Faith",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "将现存普通 Deep One Cult 改为 Drowned Prophet Cult；已经属于 Drowned Prophet、Inundai 或 Coral Mass 的 Cult 保持原状。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "下一次教团聚居地更新时转换全部合格 Cult，继承各自的 Profile 与 Menace，强度按新 Cult 初始化。处理完毕后本教义自动回到 0。Drowned Prophet Cult 达到 300 强度时使地点归属 Drowned Prophet。"
          }
        ]
      }
    ]
  },
  {
    "id": "living-wilds",
    "title": "Living Wilds · 狼人信仰",
    "description": "通过 The Moon’s Gift 为现有 Holy Order 添加的通用教义，同样可以用于 Witches。",
    "items": [
      {
        "id": "living-wilds-liberation-of-beasthood",
        "name": "Liberation of Beasthood",
        "baseGame": false,
        "tenetRange": "-3 ～ 0",
        "text": "The Moon’s Gift 位于普通教团的 Seat，或位于 Witches 的 Coven。执行者是 Werewolf，或目标教团已有 Werewolf Acolyte 时可执行；该教团必须尚未拥有此教义。\n负等级使合格 Acolyte 自愿感染 Lycanthropy，并能以狼人形态维持教团行动。狼人教团成员可在信仰本教团的聚居地执行 Holy: Seed Lycanthropy，建立强度 10、Profile 20、Menace 20 的 Werewolf Population；当地已有该修正时无法再次播种。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "Holy: Seed Lycanthropy 的行动倾向增加 40；Conceal Werewolves 的倾向增加 0.5 × 当地 Werewolf Population 的 Menace。"
          },
          {
            "level": -2,
            "text": "Holy: Seed Lycanthropy 的行动倾向增加 80；Conceal Werewolves 的倾向增加当地 Werewolf Population 的 Menace。"
          },
          {
            "level": -3,
            "text": "Holy: Seed Lycanthropy 的行动倾向增加 120；Conceal Werewolves 的倾向增加 1.5 × 当地 Werewolf Population 的 Menace。额外在有 Temple 的本教团聚居地开放 Holy: Infect Ruler，让狼人教团成员感染符合感染条件的统治者，该任务的行动倾向增加 120。"
          }
        ]
      }
    ]
  },
  {
    "id": "covens",
    "title": "Covens, Curses & Curios Recast · Witches",
    "description": "开启 Mod 选项 Unique Coven Tenets 时，在地图生成后给每个 Witches 教团添加以下五项；该选项默认开启。原有 <CrossReference name=\"Dogmatic\" href=\"#entry-holy-order-dogmatic\" /> 保留。",
    "items": [
      {
        "id": "covens-shared-wisdom",
        "name": "Shared Wisdom",
        "baseGame": false,
        "tenetRange": "-2 ～ 3",
        "text": "本教团 Temple 每回合为所在地所有拥有人物数据的单位施加 1 回合的临时 Lore 调整，留在当地会持续刷新；玩家 Agent、英雄与 Acolyte 都可受到影响。",
        "tenetLevels": [
          {
            "level": 3,
            "text": "Lore −3。"
          },
          {
            "level": 2,
            "text": "Lore −2。"
          },
          {
            "level": 1,
            "text": "Lore −1。"
          },
          {
            "level": -1,
            "text": "Lore +1。"
          },
          {
            "level": -2,
            "text": "Lore +2。"
          }
        ]
      },
      {
        "id": "covens-outcast-shelters",
        "name": "Outcast Shelters",
        "baseGame": false,
        "tenetRange": "-2 ～ 0",
        "text": "在信仰本教团的聚居地为自主行动的外来者掩饰行踪。受益对象包括 Human、Elf、Dwarf 之外的种族，以及自主邪恶人物；玩家可控单位不属于受益对象。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "每回合 Profile 减少 0.8、Menace 减少 0.3。"
          },
          {
            "level": -2,
            "text": "每回合 Profile 减少 1.6、Menace 减少 0.6。"
          }
        ]
      },
      {
        "id": "covens-aviaries",
        "name": "Aviaries",
        "baseGame": false,
        "tenetRange": "-1 ～ 0",
        "text": "扩大本教团 Coven 的鸟类随从来源。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "Temple 增加购买 Pigeon 与 Owl 的挑战；本教团 Acolyte 获得 Murder of Crows，在每 5 回合的检查时，若有空随从位且 Command 尚未用满，就生成一只 Crow。Crow 的 HP 为 1、Attack 为 2、Defence 为 0、Command 消耗为 1。"
          }
        ]
      },
      {
        "id": "covens-curseweavers",
        "name": "Curseweavers",
        "baseGame": false,
        "tenetRange": "-2 ～ 0",
        "text": "在信仰本教团的聚居地开放 Holy: Curse Intruder，供本教团成员诅咒当地停留或执行任务的异教 Acolyte。排除玩家可控者、Ophanim 教团与 Orc 文化成员。每次完成后当地该行动冷却 10 回合。\n按目标已持有的指定诅咒数量依次施加 Curse of Generosity、Soulless、Through their Eyes、Insatiable Wanderlust：Curse of Generosity 每回合尝试向施咒教团转移 5 Gold，自身不足时会向所属教团取款；Soulless 每回合增加 0.3 个百分点 Shadow；Through their Eyes 使其统治或停留地点的 Security 减少 2；Insatiable Wanderlust 降低反复选择同类行动的倾向。第二步还要求目标拥有灵魂。两个负等级使用相同的诅咒序列。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "Holy: Curse Intruder 行动倾向增加 50。"
          },
          {
            "level": -2,
            "text": "Holy: Curse Intruder 行动倾向增加 100。"
          }
        ]
      },
      {
        "id": "covens-initiation-rites",
        "name": "Initiation Rites",
        "baseGame": false,
        "tenetRange": "0 ～ 6",
        "text": "增加本教团可维持的 Acolyte 数量。达到普通上限 5 后，若仍有现存 Acolyte、招募经费足够，额外招募检查每回合执行一次。\n当前 DLL 的额外招募资金计算结果保持原值，因此此教义带来的有效变化是人数上限。",
        "tenetLevels": [
          {
            "level": 6,
            "text": "Acolyte 上限增加 6，默认上限为 11。"
          },
          {
            "level": 5,
            "text": "Acolyte 上限增加 5，默认上限为 10。"
          },
          {
            "level": 4,
            "text": "Acolyte 上限增加 4，默认上限为 9。"
          },
          {
            "level": 3,
            "text": "Acolyte 上限增加 3，默认上限为 8。"
          },
          {
            "level": 2,
            "text": "Acolyte 上限增加 2，默认上限为 7。"
          },
          {
            "level": 1,
            "text": "Acolyte 上限增加 1，默认上限为 6。"
          }
        ]
      }
    ]
  },
  {
    "id": "orcs",
    "title": "Orcs Plus · Orc 文化",
    "description": "Orcs Plus 为 Orc 势力建立独立文化。下列四项为各文化的通用教义，另收录没有神祇专属映射时采用的 Shadow Warriors。文化还使用 <CrossReference name=\"Alignment Status\" href=\"#entry-holy-order-alignment-status\" /> 与 <CrossReference name=\"Dogmatic\" href=\"#entry-holy-order-dogmatic\" />；对 Acolyte 的效果按单位类型判断，Orc Elder 的行动由其专用逻辑控制。",
    "items": [
      {
        "id": "orcs-intolerance",
        "name": "Intolerance",
        "baseGame": false,
        "tenetRange": "-2 ～ 2",
        "text": "控制 Orc Elder、Orc Shaman 及军队对外来者的敌意。对正在攻击本方的敌人、存在 Blood Feud 的目标，以及战争中的对象，还会经过独立的防卫与敌对判断。",
        "tenetLevels": [
          {
            "level": 2,
            "text": "保留对和平非黑暗人物的宽容，并让军队的一般敌意筛选跳过非玩家可控的非黑暗单位。Steal Plunder 的固有 Danger 变为四分之一，整数除法取整。势力级筛选也趋于容忍人类；当前实现中的条件覆盖通常的人类国家，包括仅带一种特殊统治标记的 Dark Empire 或 Ophanim 国家。"
          },
          {
            "level": 1,
            "text": "Orc Elder 与 Orc Shaman 通常放过来自和平、非黑暗社会的自主人物，仍敌视玩家可控人物与黑暗社会成员。Steal Plunder 的固有 Danger 减半，整数除法取整。"
          },
          {
            "level": -1,
            "text": "Orc Elder 与 Orc Shaman 通常放过玩家 Agent，以及来自和平、非 Orc 黑暗社会的人物；军队的一般敌意筛选也跳过玩家可控单位。Steal Plunder 的固有 Danger 变为 2 倍。"
          },
          {
            "level": -2,
            "text": "保留 −1 的人物宽容，并在势力级一般敌意筛选中放过黑暗势力、Dark Empire 与 Ophanim 控制的国家；其他 Orc 势力仍会被视为外部竞争者。Steal Plunder 的固有 Danger 变为 3 倍。"
          }
        ]
      },
      {
        "id": "orcs-shadow-weaving",
        "name": "Shadow Weaving",
        "baseGame": false,
        "tenetRange": "-2 ～ 1",
        "text": "调整 Orc Camp 的 Shadow 流动政策与 Orc Elder 可执行的宗教仪式。负等级允许营地接收并向外传播 Shadow；非负等级只允许接收。\n仪式中的数值按实际推进量结算：Dark Festival 每点推进在当地生成 2.5 个百分点 Shadow，并尝试向 Shadow 更低的相邻地点各转移 0.5 个百分点；Cleansing Festival 每点推进从周边拉入 0.5 个百分点，再从当地净化 2.5 个百分点。人物的个人 Shadow 也随仪式调整。",
        "tenetLevels": [
          {
            "level": 1,
            "text": "允许本文化 Orc Elder 在当地 Shadow 超过 5% 的本方 Orc Camp 执行 Holy: Cleansing Festival；施行期间自身每回合 Profile +1、Menace −4，Orc 势力 Menace −1。"
          },
          {
            "level": -1,
            "text": "Orc Camp 采用完整的 Shadow 流动规则，允许向外传播。"
          },
          {
            "level": -2,
            "text": "保留完整传播，额外允许 Orc Elder 在 Shadow 低于 100% 的本方 Orc Camp 执行 Holy: Dark Festival；施行期间自身每回合 Profile +1、Menace +2，Orc 势力 Menace +0.5。Spirit Caller 也可主动考虑 Death’s Shadow，执行时仍需合适的 Death 资源。"
          }
        ]
      },
      {
        "id": "orcs-industrious",
        "name": "Industrious",
        "baseGame": false,
        "tenetRange": "-2 ～ 0",
        "text": "使 Orc Elder 倾向于在本方 Orc Camp 执行 Organise the Horde。完成时当地 Orcish Industry 增加 50，相邻同势力 Orc Camp 各增加 25，上限均为 100；所在地地块的森林也会被清除。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "在 Industry 低于 50 的营地开展组织建设，行动倾向增加 50 − 当前 Industry。"
          },
          {
            "level": -2,
            "text": "建设目标提高到 100，行动倾向增加 100 − 当前 Industry。"
          }
        ]
      },
      {
        "id": "orcs-expansionism",
        "name": "Expansionism",
        "baseGame": false,
        "tenetRange": "-2 ～ 1",
        "text": "改变 Orc 势力选择扩张行动时，因既有领土规模而承受的组织惩罚。数值作用于行动选择评分。",
        "tenetLevels": [
          {
            "level": 1,
            "text": "领土规模惩罚加倍，每个现有地点使扩张评分减少 10。"
          },
          {
            "level": -1,
            "text": "领土规模惩罚减半，每个现有地点使扩张评分减少 2.5。"
          },
          {
            "level": -2,
            "text": "抵消领土规模惩罚，并允许自主 Orc 军队在满足建营条件的地点执行 Build Orc Camp。"
          }
        ]
      },
      {
        "id": "orcs-shadow-warriors",
        "name": "Shadow Warriors",
        "baseGame": false,
        "tenetRange": "-2 ～ 0",
        "text": "当玩家神祇没有登记对应的 Orc 专属教义时，Orc 文化采用此项默认教义。效果作用于有有效家乡的 Orc 军队，也包括仍关联该文化的 Orc 雇佣军。\n每次伤害计算使用家乡的 Shadow：达到 50% 提供 1 点，达到 100% 再提供 1 点，另按家乡 Shadow 的百分比概率提供 1 点；因此满 Shadow 时为 3 点。",
        "tenetLevels": [
          {
            "level": -1,
            "text": "按上述规则提高军队造成的伤害。"
          },
          {
            "level": -2,
            "text": "保留伤害提高，同时按相同规则减免受到的伤害；结算后的伤害最低为 1。"
          }
        ]
      }
    ]
  }
];
