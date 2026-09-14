"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "chandalor",
  "name": "Chandalor, the Cursed Bloom",
  "number": "06",
  "theme": "chandalor-theme",
  "assetDir": "chandalor",
  "background": "god_main.png",
  "portrait": "god_portrait.png",
  "flavour": "",
  "caption": "婚姻网络、家族诅咒与精神干扰",
  "maxTurns": "500 回合",
  "awaken": "第 375 回合",
  "panic": "50%",
  "finalAgents": "5",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerRecovery": "每回合恢复 0.035 × 神力上限 × 难度系数²。",
  "core": [
    "用 <CrossReference name=\"Sense Loneliness\" /> 找出未婚英雄和统治者。",
    "用 <CrossReference name=\"Growing Bond\" /> 提高两人的相互好感。",
    "建立 <CrossReference name=\"Ceremonial Plaza\" />，让英雄或统治者举办 <CrossReference name=\"Wedding Ceremony\" />，把两个家族连接起来。",
    "用 <CrossReference name=\"Vile Curse\" /> 和三种专属诅咒削弱关键家族。",
    "沿婚姻施放 <CrossReference name=\"Blood Bond\" />，把一个家族的诅咒复制给配偶家族。",
    "后期用 <CrossReference name=\"Rapture\" /> 按家族诅咒数打断英雄与统治者，同时让 <CrossReference name=\"Chandalor's Awe\" /> 向全图扩散。"
  ],
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Sense Loneliness",
        "Move On",
        "Growing Bond"
      ],
      "powerRecovery": "神力上限 1；每回合恢复 0.035 × 难度系数²"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [
        "Ceremony",
        "Forgive and Forget"
      ],
      "powerRecovery": "神力上限 2；每回合恢复 0.07 × 难度系数²"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 2,
      "reward": [
        "Blood Bond",
        "Vile Curse"
      ],
      "powerRecovery": "神力上限 3；每回合恢复 0.105 × 难度系数²"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [
        "Curse of Poverty",
        "Heartbreak"
      ],
      "powerRecovery": "神力上限 4；每回合恢复 0.14 × 难度系数²"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 3,
      "reward": [
        "Curse of Overwhelming Joy",
        "<CrossReference name=\"Vile Curse\" href=\"#entry-vile-curse-passive-4\" />"
      ],
      "powerRecovery": "神力上限 5；每回合恢复 0.175 × 难度系数²"
    },
    {
      "seal": 5,
      "progress": 110,
      "agents": 3,
      "reward": [
        "Curse of Obsession",
        "Pacifism"
      ],
      "powerRecovery": "神力上限 6；每回合恢复 0.21 × 难度系数²"
    },
    {
      "seal": 6,
      "progress": 150,
      "agents": 4,
      "reward": [],
      "powerRecovery": "神力上限 7；每回合恢复 0.245 × 难度系数²"
    },
    {
      "seal": 7,
      "progress": 200,
      "agents": 4,
      "reward": [
        "<CrossReference name=\"Vile Curse\" href=\"#entry-vile-curse-passive-7\" />"
      ],
      "powerRecovery": "神力上限 8；每回合恢复 0.28 × 难度系数²"
    },
    {
      "seal": 8,
      "progress": 275,
      "agents": 4,
      "reward": [],
      "powerRecovery": "神力上限 9；每回合恢复 0.315 × 难度系数²"
    },
    {
      "seal": 9,
      "progress": 375,
      "agents": 5,
      "reward": [
        "Rapture",
        "Stand in Awe",
        "苏醒"
      ],
      "powerRecovery": "神力上限 10；每回合恢复 0.35 × 难度系数²"
    }
  ],
  "powers": [
    {
      "seal": 0,
      "name": "Sense Loneliness",
      "cost": 0,
      "icon": "power_lonervision.png",
      "effect": "本身不改变任何数值。选择该神力时，没有配偶的英雄与统治者会显示为合法目标，方便寻找适合安排婚姻的人。",
      "limit": "只能指向没有配偶的英雄或统治者。"
    },
    {
      "seal": 0,
      "name": "Move On",
      "cost": 1,
      "icon": "power_letgo.png",
      "effect": "移除目标与已故配偶之间的婚姻关系，使这名英雄或统治者可以再次结婚。",
      "limit": "目标必须是配偶已经死亡的英雄或统治者。"
    },
    {
      "seal": 0,
      "name": "Growing Bond",
      "cost": 1,
      "icon": "power_growingbond.png",
      "images": [
        "power_growingbond.png",
        "power_growingbond2.png"
      ],
      "effect": "第一次施放标记一名人物；第二次对另一人施放不再消耗神力，并让双方对彼此的个人态度各提高一级。完成后移除标记。",
      "limit": "两次都必须选择英雄或统治者，不能选择 Chosen One；英雄目标不能是玩家可控制的 Agent，第二名目标也不能已经带有同一标记。"
    },
    {
      "seal": 1,
      "name": "Ceremony",
      "cost": 1,
      "icon": "power_ceremony.png",
      "effect": "在聚居地建立 100 点强度的 Ceremonial Plaza。英雄可以前往此处举办 Wedding Ceremony；当地统治者也能用统治者行动结婚。每场婚礼消耗 50 点强度。",
      "limit": "目标必须是尚无 Ceremonial Plaza 的人类或精灵聚居地。"
    },
    {
      "seal": 1,
      "name": "Forgive and Forget",
      "cost": 1,
      "icon": "power_forgiveforget.png",
      "effect": "把正在追杀另一单位的英雄打断 1 回合，并把其对目标的个人厌恶或极端厌恶向友好方向移动一级。",
      "limit": "目标必须正执行攻击其他单位的任务，且不能是 Chosen One。"
    },
    {
      "seal": 2,
      "name": "Blood Bond",
      "cost": 3,
      "icon": "power_bloodbond.png",
      "effect": "把目标家族拥有的每一种诅咒复制到其配偶的家族；配偶家族已经拥有的同类诅咒不会重复添加。",
      "limit": "目标必须是有配偶的英雄或统治者。若两人属于同一家族，施放后不会产生实际变化。"
    },
    {
      "seal": 2,
      "name": "Vile Curse",
      "cost": 2,
      "icon": "curse_base.png",
      "effect": "从 The Howling、Call of the Deep、Wasting Souls、See Through Their Eyes 中选择一种目标家族尚未拥有的本体诅咒，并施加给整个家族。取消选择会返还 2 点神力和本次使用次数。",
      "limit": "初始全局只能使用 1 次；第 4、7 封印分别把上限提高到 2、3 次。只能选择尚未集齐四种本体诅咒的英雄或统治者家族。"
    },
    {
      "seal": 3,
      "name": "Curse of Poverty",
      "cost": 2,
      "icon": "curse_poverty.png",
      "effect": "让目标整个家族获得贫困诅咒。受影响人物每回合损失当前 Gold 的 5%，但至少损失 5 Gold，最低降至 0。",
      "limit": "每局只能使用一次；目标家族不能已经拥有该诅咒。玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不受人物效果影响。"
    },
    {
      "seal": 3,
      "name": "Heartbreak",
      "cost": 2,
      "icon": "power_heartbreak.png",
      "effect": "让正在 Mourning 的英雄或统治者立即损失 10 Sanity。",
      "limit": "目标必须带有 Mourning。"
    },
    {
      "seal": 4,
      "name": "Curse of Overwhelming Joy",
      "cost": 3,
      "icon": "curse_lazy.png",
      "effect": "让目标整个家族受到懈怠诅咒。英雄每回合的挑战进度减少 5，但至少仍有 1；统治者的地方与国家行动各有 50% 概率在该回合少获得 1 点进度。",
      "limit": "每局只能使用一次；目标家族不能已有该诅咒。玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不受人物效果影响。"
    },
    {
      "name": "Vile Curse",
      "id": "vile-curse-passive-4",
      "seal": 4,
      "cost": 0,
      "icon": "curse_base.png",
      "effect": "被动使 Vile Curse 的全局使用次数上限提高至 2。",
      "limit": "随对应封印自动生效。"
    },
    {
      "seal": 5,
      "name": "Curse of Obsession",
      "cost": 4,
      "icon": "curse_menace.png",
      "effect": "让目标整个家族受到执念诅咒。英雄每完成一次挑战额外获得 8 Menace；统治者每回合使所在地增加 1 Unrest。",
      "limit": "每局只能使用一次；目标家族不能已有该诅咒。玩家 Agent 与 Dark Empire 统治者不受人物效果影响。"
    },
    {
      "seal": 5,
      "name": "Pacifism",
      "cost": 4,
      "icon": "power_killarmy.png",
      "effect": "使目标军队放下武器。没有人物领袖的人类军队会立刻解散；由人物领袖代表的精灵军队降至 1 HP。",
      "limit": "只能选择非玩家控制、非黑暗势力的人类或精灵军队；难民、Untamed Dead 与 Ravenous Dead 不可选。"
    },
    {
      "name": "Vile Curse",
      "id": "vile-curse-passive-7",
      "seal": 7,
      "cost": 0,
      "icon": "curse_base.png",
      "effect": "被动使 Vile Curse 的全局使用次数上限提高至 3。",
      "limit": "随对应封印自动生效。"
    },
    {
      "seal": 9,
      "name": "Rapture",
      "cost": 3,
      "icon": "power_rapture.png",
      "effect": "按目标家族拥有的诅咒总数 N，使同家族人物单位 Disrupted N 回合，并把统治者的地方行动改为 N 回合的 Gridlock；首都统治者还会使国家行动 Gridlock N 回合。Chosen One、Deep One 与 Vampire 单位免疫。",
      "limit": "目标为人物单位或有统治者的地点。直接选择人物时，统治者效果要求该人物仍实际统治当地，且所属国家属于非 Dark Empire。"
    },
    {
      "seal": 9,
      "name": "Stand in Awe",
      "cost": 0,
      "icon": "power_standinawe.png",
      "effect": "苏醒时在 the Elder Tomb 创建可传播的 <CrossReference name=\"Chandalor's Awe\" />，向相邻地点扩散。使非黑暗势力的人类或精灵聚居地 Prosperity −0.75、Security −10。",
      "limit": "随第 9 封印与苏醒自动生效，不能主动施放。Dark Empire 不受经济和安全惩罚。"
    }
  ],
  "supplicant": {
    "image": "supplicant.png",
    "stats": "Might 2　Lore 2　Intrigue 4　Command 3",
    "abilities": [
      {
        "name": "Enchanting Presence",
        "text": "把 Supplicant 的 Menace 变化压到极低，使其实际始终保持最低 Menace。"
      },
      {
        "name": "Beguiler",
        "text": "每逢 5 的倍数回合，若有空随从槽，就在第一个空位免费补入一名本体 Sellsword。"
      },
      {
        "name": "Flowered Death",
        "text": "Supplicant 死亡时在所在地留下 100 点 Mystifying Petals；若当地已经存在同类修正则不重复生成。苏醒前不会自行传播。"
      }
    ]
  },
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "media": true,
      "items": [
        {
          "seal": 0,
          "name": "Growing Bond Mark",
          "text": "Growing Bond 第一次施放后留在首名目标身上的临时标记。第二次施放完成双方关系提升后移除；若被标记者死亡，神力会重置为第一阶段。"
        },
        {
          "seal": 3,
          "name": "Poverty",
          "image": "curse_poverty.png",
          "text": "由 Curse of Poverty 对家族成员动态赋予。每回合损失当前 Gold 的 5%，但至少损失 5；玩家 Agent、Deep Ones、Vampires 与 Dark Empire 统治者不会获得它。"
        },
        {
          "seal": 4,
          "name": "Overwhelming Joy",
          "image": "curse_lazy.png",
          "text": "由同名家族诅咒动态赋予。英雄的挑战进度每回合减少 5、最低仍为 1；统治者行动约有一半回合不推进。"
        },
        {
          "seal": 5,
          "name": "Obsession",
          "image": "curse_menace.png",
          "text": "由 Curse of Obsession 动态赋予。英雄完成挑战额外获得 8 Menace；统治者每回合给所在地增加 1 Unrest。"
        }
      ]
    },
    {
      "id": "familyCurses",
      "title": "家族诅咒",
      "media": true,
      "items": [
        {
          "seal": 2,
          "name": "Vile Curse 家族诅咒",
          "id": "family-vile-curse",
          "image": "curse_base.png",
          "text": "在四种本体诅咒中选择一种加入目标 House。家族成员按本体规则承受效果；Blood Bond 可以把它复制到配偶家族。"
        },
        {
          "seal": 3,
          "name": "Curse of Poverty 家族诅咒",
          "id": "family-curse-poverty",
          "image": "curse_poverty.png",
          "text": "存放在 House 上并向符合条件的家族成员动态赋予 Poverty；可以沿婚姻被 Blood Bond 复制。"
        },
        {
          "seal": 4,
          "name": "Curse of Overwhelming Joy 家族诅咒",
          "id": "family-curse-joy",
          "image": "curse_lazy.png",
          "text": "存放在 House 上并向符合条件的家族成员动态赋予 Overwhelming Joy；可以沿婚姻被 Blood Bond 复制。"
        },
        {
          "seal": 5,
          "name": "Curse of Obsession 家族诅咒",
          "id": "family-curse-obsession",
          "image": "curse_menace.png",
          "text": "存放在 House 上并向符合条件的家族成员动态赋予 Obsession；可以沿婚姻被 Blood Bond 复制。"
        },
        {
          "seal": 2,
          "name": "The Howling",
          "id": "base-the-howling",
          "baseGame": true,
          "text": "游戏本体家族诅咒。每回合检查家族成员，并把其最大 Sanity 压到不高于 4，使人物更容易陷入疯狂。"
        },
        {
          "seal": 2,
          "name": "Call of the Deep",
          "id": "base-call-of-the-deep",
          "baseGame": true,
          "text": "游戏本体家族诅咒。为符合条件的家族成员赋予 Call of the Abyss；其强度每两个回合提高 1。英雄与统治者需要不断维持人性，否则会转化为 Deep One Agent；Chosen One 和若干特殊黑暗人物不受影响。"
        },
        {
          "seal": 2,
          "name": "Wasting Souls",
          "id": "base-wasting-souls",
          "baseGame": true,
          "text": "游戏本体家族诅咒。家族成员每回合损失 5 XP；Chosen One 不受影响。"
        },
        {
          "seal": 2,
          "name": "See Through Their Eyes",
          "id": "base-see-through-their-eyes",
          "baseGame": true,
          "text": "游戏本体家族诅咒。为非玩家控制的家族成员赋予 Through their Eyes，使其统治或当前停留的聚居地 Security −2；成为玩家可控制 Agent 时该人物特质会被移除。"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "seal": 1,
          "name": "Ceremonial Plaza",
          "image": "power_ceremony.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −1，归零后移除。",
            "external": "<CrossReference name=\"Ceremony\" /> 创建修正。\n英雄 <CrossReference name=\"Wedding Ceremony\" href=\"#entry-hero-wedding\" /> 完成时强度 −50。\n统治者 <CrossReference name=\"Wedding Ceremony\" href=\"#entry-ruler-wedding\" /> 完成时强度 −50。\n当地聚居地沦为废墟时移除。"
          },
          "text": "英雄可在这里执行 Wedding Ceremony，当地统治者也能举办婚礼。"
        },
        {
          "name": "Mystifying Petals",
          "image": "power_standinawe.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "使非黑暗势力的人类或精灵聚居地 Prosperity −0.5、Security −5。在所在地沦为废墟后保留；苏醒后改以 Chandalor's Awe 的名称与效果显示。"
        },
        {
          "seal": 9,
          "name": "Chandalor's Awe",
          "image": "power_standinawe.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "使非黑暗势力的人类或精灵聚居地 Prosperity −0.75、Security −10。苏醒时生成的修正及其扩散产生的修正，会在创建后的下一回合向尚无同类修正的相邻地点复制一次；在所在地沦为废墟后保留。"
        },
        {
          "name": "Wicked Curse: Failing Crops",
          "image": "ch_witchcurse.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Holy: Wicked Curse\" /> 随机创建；当地沦为废墟时移除。"
          },
          "text": "当地粮食产出只剩正常值的 25%。"
        },
        {
          "name": "Wicked Curse: Misfortune",
          "image": "ch_witchcurse.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Holy: Wicked Curse\" /> 随机创建；当地沦为废墟时移除。"
          },
          "text": "当地 Prosperity −0.5。"
        },
        {
          "name": "Wicked Curse: Obedience",
          "image": "ch_witchcurse.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Holy: Wicked Curse\" /> 随机创建；当地沦为废墟时移除。"
          },
          "text": "当地 Security −4。"
        },
        {
          "name": "Wicked Curse: Unburied Dead",
          "image": "ch_witchcurse.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Holy: Wicked Curse\" /> 随机创建；当地沦为废墟时移除。"
          },
          "text": "当地每回合增加 2.5 Death；强度归零时增加 10 Plague。"
        },
        {
          "name": "Wicked Curse: Outbreak of Anger",
          "image": "ch_witchcurse.png",
          "initialValue": "100",
          "modifierChange": {
            "natural": "每回合强度 −2，归零后移除。",
            "external": "<CrossReference name=\"Holy: Wicked Curse\" /> 随机创建；当地沦为废墟时移除。"
          },
          "text": "当地每回合增加 3 Unrest、3 Political Agitation。"
        }
      ]
    },
    {
      "id": "minions",
      "title": "随从",
      "media": true,
      "items": [
        {
          "name": "Sellsword",
          "baseGame": true,
          "stats": "HP 2；Attack 2；Defence 2；Command 1",
          "text": "本体随从。通常购买价格 15 Gold；Beguiler 每 5 回合检查一次 Supplicant 的随从槽，并免费把一名 Sellsword 放进第一个空位，因此此处不会支付金币。",
          "image": "minion_sellsword.png"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "media": false,
      "items": [
        {
          "name": "Wicked Curses",
          "text": "选择 Chandalor 时，这项新教义会加入所有 Witches Holy Order。它只有 0 与 −1 两档；处于 Elder 影响（−1）时，女巫对 Holy: Wicked Curse 的执行意愿固定增加 75，并在各人类聚居地获得该宗教任务。"
        }
      ]
    },
    {
      "id": "religious-tasks",
      "title": "宗教任务",
      "media": true,
      "items": [
        {
          "name": "Holy: Wicked Curse",
          "image": "ch_witchcurse.png",
          "location": "任意非 Dark Empire 的人类聚居地。",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 100　Menace: 0　XP: 72",
          "positiveTags": "Religion、Cruelty",
          "negativeTags": "无",
          "text": "Witches Holy Order 的成员在任意人类聚居地施加一种随机地点诅咒，完成时增加 5 Profile 与 8 Menace。地点不能已有 Wicked Curse，Dark Empire 统治地不可选。五种结果均以 100 点强度开始、每回合衰减 2，约持续 50 回合。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Wedding Ceremony",
          "id": "hero-wedding",
          "image": "power_ceremony.png",
          "location": "有 Ceremonial Plaza 的聚居地。",
          "meta": "Other",
          "statLine": "Complexity: 3　Profile: 200　Menace: 0　XP: 8",
          "positiveTags": "无",
          "negativeTags": "无",
          "text": "未婚英雄与其极端喜欢、未婚且来自不同家族的人物建立配偶关系，消耗 <CrossReference name=\"Ceremonial Plaza\" /> 的 50 点强度。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "media": true,
      "items": [
        {
          "name": "Wedding Ceremony",
          "id": "ruler-wedding",
          "image": "power_ceremony.png",
          "location": "有 Ceremonial Plaza 的聚居地。",
          "time": "3 回合",
          "positiveTags": "无",
          "negativeTags": "Gold",
          "text": "未婚统治者与其极端喜欢、未婚且来自不同家族的人物建立配偶关系，消耗 <CrossReference name=\"Ceremonial Plaza\" /> 的 50 点强度。"
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "Wicked Curses 觉醒",
          "id": "wicked-curses-event",
          "image": "curse_activateHO.png",
          "text": "本局第一次有女巫在 Wicked Curses 教义处于 Elder 影响时进行回合结算，会显示此事件，告知女巫教团已经开始把诅咒传播到人类聚居地；事件本身不再附加额外数值效果。"
        }
      ]
    }
  ],
  "relations": {
    "Growing Bond Mark": {
      "sources": [
        {
          "name": "Growing Bond",
          "href": "#entry-growing-bond"
        }
      ],
      "effects": []
    },
    "base-the-howling": {
      "sources": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ],
      "effects": []
    },
    "base-call-of-the-deep": {
      "sources": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ],
      "effects": []
    },
    "base-wasting-souls": {
      "sources": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ],
      "effects": []
    },
    "base-see-through-their-eyes": {
      "sources": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ],
      "effects": []
    },
    "Ceremonial Plaza": {
      "sources": [
        {
          "name": "Ceremony",
          "href": "#entry-ceremony"
        }
      ],
      "effects": [
        {
          "name": "Wedding Ceremony",
          "href": "#entry-hero-wedding",
          "meta": "英雄任务"
        },
        {
          "name": "Wedding Ceremony",
          "href": "#entry-ruler-wedding",
          "meta": "统治者行动"
        }
      ]
    },
    "Mystifying Petals": {
      "sources": [
        {
          "name": "Flowered Death",
          "href": "#entry-flowered-death"
        }
      ],
      "effects": []
    },
    "Chandalor's Awe": {
      "sources": [
        {
          "name": "Stand in Awe",
          "href": "#entry-stand-in-awe"
        }
      ],
      "effects": []
    },
    "Sellsword": {
      "sources": [
        {
          "name": "Beguiler",
          "href": "#entry-beguiler"
        }
      ],
      "effects": []
    },
    "Wicked Curses": {
      "effects": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        },
        {
          "name": "Wicked Curses 觉醒",
          "href": "#entry-wicked-curses-event"
        }
      ]
    },
    "hero-wedding": {
      "sources": [
        {
          "name": "Ceremonial Plaza",
          "href": "#entry-ceremonial-plaza"
        }
      ],
      "effects": [
        {
          "name": "Blood Bond",
          "href": "#entry-blood-bond",
          "meta": "婚姻可供神力利用"
        }
      ]
    },
    "ruler-wedding": {
      "sources": [
        {
          "name": "Ceremonial Plaza",
          "href": "#entry-ceremonial-plaza"
        }
      ],
      "effects": [
        {
          "name": "Blood Bond",
          "href": "#entry-blood-bond",
          "meta": "婚姻可供神力利用"
        }
      ]
    },
    "Holy: Wicked Curse": {
      "sources": [
        {
          "name": "Wicked Curses",
          "href": "#entry-wicked-curses"
        }
      ],
      "effects": [
        {
          "name": "Wicked Curse: Failing Crops",
          "href": "#entry-wicked-curse-failing-crops"
        },
        {
          "name": "Wicked Curse: Misfortune",
          "href": "#entry-wicked-curse-misfortune"
        },
        {
          "name": "Wicked Curse: Obedience",
          "href": "#entry-wicked-curse-obedience"
        },
        {
          "name": "Wicked Curse: Unburied Dead",
          "href": "#entry-wicked-curse-unburied-dead"
        },
        {
          "name": "Wicked Curse: Outbreak of Anger",
          "href": "#entry-wicked-curse-outbreak-of-anger"
        }
      ]
    },
    "wicked-curses-event": {
      "sources": [
        {
          "name": "Wicked Curses",
          "href": "#entry-wicked-curses"
        }
      ],
      "effects": []
    },
    "Growing Bond": {
      "effects": [
        {
          "name": "Growing Bond Mark",
          "href": "#entry-growing-bond-mark"
        }
      ]
    },
    "Ceremony": {
      "effects": [
        {
          "name": "Ceremonial Plaza",
          "href": "#entry-ceremonial-plaza"
        }
      ]
    },
    "Blood Bond": {
      "effects": [
        {
          "name": "Vile Curse 家族诅咒",
          "href": "#entry-family-vile-curse"
        },
        {
          "name": "Curse of Poverty 家族诅咒",
          "href": "#entry-family-curse-poverty"
        },
        {
          "name": "Curse of Overwhelming Joy 家族诅咒",
          "href": "#entry-family-curse-joy"
        },
        {
          "name": "Curse of Obsession 家族诅咒",
          "href": "#entry-family-curse-obsession"
        },
        {
          "name": "The Howling",
          "href": "#entry-base-the-howling"
        },
        {
          "name": "Call of the Deep",
          "href": "#entry-base-call-of-the-deep"
        },
        {
          "name": "Wasting Souls",
          "href": "#entry-base-wasting-souls"
        },
        {
          "name": "See Through Their Eyes",
          "href": "#entry-base-see-through-their-eyes"
        }
      ]
    },
    "Vile Curse": {
      "effects": [
        {
          "name": "Vile Curse 家族诅咒",
          "href": "#entry-family-vile-curse"
        },
        {
          "name": "The Howling",
          "href": "#entry-base-the-howling",
          "meta": "本体诅咒"
        },
        {
          "name": "Call of the Deep",
          "href": "#entry-base-call-of-the-deep",
          "meta": "本体诅咒"
        },
        {
          "name": "Wasting Souls",
          "href": "#entry-base-wasting-souls",
          "meta": "本体诅咒"
        },
        {
          "name": "See Through Their Eyes",
          "href": "#entry-base-see-through-their-eyes",
          "meta": "本体诅咒"
        }
      ]
    },
    "Curse of Poverty": {
      "effects": [
        {
          "name": "Curse of Poverty 家族诅咒",
          "href": "#entry-family-curse-poverty"
        },
        {
          "name": "Poverty",
          "href": "#entry-poverty"
        }
      ]
    },
    "Curse of Overwhelming Joy": {
      "effects": [
        {
          "name": "Curse of Overwhelming Joy 家族诅咒",
          "href": "#entry-family-curse-joy"
        },
        {
          "name": "Overwhelming Joy",
          "href": "#entry-overwhelming-joy"
        }
      ]
    },
    "Curse of Obsession": {
      "effects": [
        {
          "name": "Curse of Obsession 家族诅咒",
          "href": "#entry-family-curse-obsession"
        },
        {
          "name": "Obsession",
          "href": "#entry-obsession"
        }
      ]
    },
    "Stand in Awe": {
      "effects": [
        {
          "name": "Chandalor's Awe",
          "href": "#entry-chandalor-s-awe"
        }
      ]
    },
    "Wicked Curse: Failing Crops": {
      "sources": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        }
      ]
    },
    "Wicked Curse: Misfortune": {
      "sources": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        }
      ]
    },
    "Wicked Curse: Obedience": {
      "sources": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        }
      ]
    },
    "Wicked Curse: Unburied Dead": {
      "sources": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        }
      ]
    },
    "Wicked Curse: Outbreak of Anger": {
      "sources": [
        {
          "name": "Holy: Wicked Curse",
          "href": "#entry-holy-wicked-curse"
        }
      ]
    },
    "vile-curse-passive-4": {
      "effects": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ]
    },
    "vile-curse-passive-7": {
      "effects": [
        {
          "name": "Vile Curse",
          "href": "#entry-vile-curse"
        }
      ]
    }
  },
  "specialVictory": "无",
  "overviewExtra": {
    "title": "",
    "text": "以婚姻连接家族，再通过 Blood Bond 传播诅咒，削弱英雄与统治者的行动能力。没有专属 Holy Order；Witches Holy Order 加入 Wicked Curses 教义。"
  }
};

const preparedConfig = prepareGodConfig(config);
export default function ChandalorArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
