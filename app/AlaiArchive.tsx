"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "alai",
  "name": "Alai, the Strings That Bind",
  "number": "23",
  "theme": "alai-theme",
  "assetDir": "alai",
  "background": "god_background.jpg",
  "portrait": "god_portrait.png",
  "flavour": "",
  "caption": "家族吞噬、傀儡继承与灵魂织网",
  "maxTurns": "500 回合",
  "awaken": "第 330 回合",
  "panic": "70%",
  "initialAgents": "2",
  "finalAgents": "4",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerRecovery": "每回合恢复 = 0.035 × 神力上限 × 难度系数 + 0.075。",
  "core": [
    "由 Agent 在战斗中击杀英雄或宗教人物，再通过战斗事件把对方复活为 Devoured，或收作 Devoured Puppet。",
    "用 Pull the Strings 将 Devoured 英雄和宗教人物转为我方 Agent；用 Release Grasp 放回自主行动，借 Released Grasp 降低 Profile、Menace 及其下限，再按需重新控制。",
    "用 Weave Succession 把 Devoured 人物或傀儡安插为继承人，通过 Woven Succession 降低 Security，再执行 Speed Inheritance 推动继位；Web of Intrigue 加快相关渗透和刺杀。",
    "随封印解开，分别选定心智、手段、传播、身体与 Embraced 形态，改变整个 Devoured 家族的行为，或把统治者变成持续扩散的支点。",
    "用 Fixation 调整人物关系，用 Compulsion 指定行动；Share Soul 让两名 Devoured 人物共享较高的基础 Might、Lore、Intrigue 与 Command。",
    "苏醒后将 Devoured 人物转化为 Embraced，交由其自主传播、控制国家或生成军队；也可通过 Another Consciousness 与 Pierce the Other 进入特殊胜利路线。"
  ],
  "overviewExtra": {
    "title": "神力选择与人员轮换",
    "playStyle": "围绕人物与继承关系展开。战斗带来可用的人选，神力决定其作为 Agent、傀儡、继承人或自主传播者的用途；有限的 Agent 名额鼓励反复接管和释放人物。",
    "text": "封印 2、3、5、7、9 分别展开一组互斥神力；具体锁定时机和持续效果见各神力。\n第 1 回合开始时，可用招募点减少 1。把已属于 Devoured 的人物招募为 Agent 时会返还招募点；Pull the Strings 则直接接管人物，仍受 Agent 上限约束。"
  },
  "specialVictory": "依次吞噬三位 Chosen One，在 Another Consciousness 选择“A sibling?”，再处理 An Exchange 产生的 Remade 英雄。出现 Other's Core 后完成 Pierce the Other，在 A Million Crystallized Lives 选择“Reach out once more”，最后在 An Intermingling 选择“They spiral out...”直接胜利。",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Pull the Strings",
        "Release Grasp",
        "Weave Succession"
      ],
      "powerRecovery": "1/0.11"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [
        "Web of Intrigue"
      ],
      "powerRecovery": "2/0.145"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 2,
      "reward": [
        "Brood Mentality",
        "Predatory Instinct",
        "Psychic Empathy",
        "Call to Slumber"
      ],
      "powerRecovery": "3/0.18"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [
        "Beckoning Hands",
        "Smothering Hands",
        "Tangling Hands",
        "Carrying Hands"
      ],
      "powerRecovery": "4/0.215"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 3,
      "reward": [
        "Fixation"
      ],
      "powerRecovery": "5/0.25"
    },
    {
      "seal": 5,
      "progress": 108,
      "agents": 3,
      "reward": [
        "Devoured Bloodline",
        "Devoured Homeland",
        "Devoured Fealty",
        "Devoured Shores"
      ],
      "powerRecovery": "6/0.285"
    },
    {
      "seal": 6,
      "progress": 152,
      "agents": 3,
      "reward": [
        "Compulsion"
      ],
      "powerRecovery": "7/0.32"
    },
    {
      "seal": 7,
      "progress": 204,
      "agents": 4,
      "reward": [
        "Rebirth Venom",
        "Parallel Thoughts",
        "Nightmare Weaving",
        "Restitching Sinews"
      ],
      "powerRecovery": "8/0.355"
    },
    {
      "seal": 8,
      "progress": 264,
      "agents": 4,
      "reward": [
        "Share Soul"
      ],
      "powerRecovery": "9/0.39"
    },
    {
      "seal": 9,
      "progress": 330,
      "agents": 4,
      "reward": [
        "Awaken Crusader",
        "Awaken Emissary",
        "Awaken Enchanter",
        "Awaken Weaver"
      ],
      "powerRecovery": "10/0.425"
    }
  ],
  "powers": [
    {
      "name": "Pull the Strings",
      "seal": 0,
      "cost": 0,
      "icon": "power_pull_the_strings.png",
      "effect": "将目标 Shadow 设为 100%，转为可控制 Agent 并加入 Devoured；不消耗招募点。已被释放的 Agent 会恢复原 Agent 形态。接管 Devoured 免费；通过 Sacred Inspiration 接管非 Devoured 侍僧时消耗 3 Power。",
      "limit": "必须有空余 Agent 名额，目标当前不可控制。可接管 Devoured 英雄或侍僧；Sacred Inspiration 等级小于 0 的教团侍僧也可接管，此时至少需要 3 Power。"
    },
    {
      "name": "Release Grasp",
      "seal": 0,
      "cost": 1,
      "icon": "power_release_grasp.png",
      "effect": "解除控制并清空任务，将 Agent 放回自主行动；专属 Agent 会转为英雄。赋予 Released Grasp，自主行动期间每回合 Profile、Menace 各减少 1.5，最低为 0，并可降低两项下限。通常清空 Shadow；已选 Smothering Hands 时保留 Shadow。重新控制后移除 Released Grasp。当地有 <CrossReference name=\"Nexus\" href=\"#entry-web-madness-nexus\" />，或目标侍僧所属教团的 Sacred Inspiration 等级不高于 0 时，施放后返还 1 Power。",
      "limit": "目标须为可控制的人物，且当前未被其他单位缠斗；Chosen One 除外，任何家族均可。施放前须有 1 Power。"
    },
    {
      "name": "Weave Succession",
      "seal": 0,
      "cost": 1,
      "icon": "power_weave_succession.png",
      "effect": "没有合格 Devoured Puppet 随从时，把目标本人从地图移入当地继承人位置；有一名时优先使用该傀儡，多名时选择一名并移除对应随从。对地方统治者施放则将其安排为首都继承人。建立 Woven Succession，使 Security −2；原统治者变更或消失时由其继位，随后成为 Devoured Court。取消多傀儡选择时返还 1 Power。",
      "limit": "人物须属于 Devoured，为英雄、侍僧、可控制 Agent，或携带 Devoured Puppet 的其他人物；所在地须为非精灵的人类类聚居地。仅有一处领地的国家允许在首都安插人物，其余国家须在首都以外操作。对统治者施放时，其领地须非首都，所属国家首都须为非精灵的人类类聚居地，且首都继承人尚非该统治者。"
    },
    {
      "name": "Web of Intrigue",
      "seal": 1,
      "cost": 1,
      "icon": "power_web_of_intrigue.png",
      "effect": "为目标正在执行的渗透或刺杀挑战立即增加 8 进度。",
      "limit": "限正在执行渗透、简化渗透、残暴刺杀或无声刺杀挑战的人物；自主或受控人物、任何家族均可。"
    },
    {
      "name": "Fixation",
      "seal": 4,
      "cost": 1,
      "icon": "power_fixation.png",
      "effect": "先选提高或降低好恶，再从普通标签与敌对种类标签中选一项。确认后清空全部极端好恶，赋予选定标签的极端喜爱或极端厌恶，并移除该标签原有的普通好恶；其他普通好恶保留。取消任一选择阶段时返还 1 Power。",
      "limit": "限 Devoured 英雄、侍僧，或人类类聚居地的 Devoured 统治者。可选标签须尚未具有同方向的极端好恶。"
    },
    {
      "name": "Compulsion",
      "seal": 6,
      "cost": 2,
      "icon": "power_compulsion.png",
      "effect": "为自主英雄或侍僧指定挑战、攻击、保护或干扰任务；每种挑战只保留动机最高的一处，不在本地时先前往。也可让统治者开始指定的本地行动，君主还可开始国家行动。取消任务类别或具体行动选择时返还 2 Power；统治者没有合格行动时仍消耗 2 Power。",
      "limit": "限非玩家控制的 Devoured 英雄或侍僧，或人类类聚居地的 Devoured 统治者。所选行动须可执行，动机至少 −40。挑战排除正在执行的同一项及进食；攻击、保护、干扰对象须为可见人物，且不是当前同类任务的目标。本地行动排除进食；国家行动仅限君主，且须尚未进行。"
    },
    {
      "name": "Share Soul",
      "seal": 8,
      "cost": 3,
      "icon": "power_share_soul.png",
      "effect": "首次标记人物并赋予 Open Soul，返还 3 Power；再次点选同一人会取消标记并返还 3 Power。选择另一名合格人物后完成配对，双方获得 Shared Soul，Might、Lore、Intrigue、Command 分别取两人“基础属性 + 对应属性升级”的较高值。完成配对合计消耗 3 Power；伙伴死亡时移除另一方的 Shared Soul。",
      "limit": "目标须为 Devoured 人物，或就是已标记人物；不能已有 Shared Soul。人物与人类类聚居地统治者均可。每次操作前须有 3 Power。"
    }
  ],
  "powerGroups": [
    {
      "id": "powers-touch",
      "title": "Touch",
      "powers": [
        {
          "name": "Brood Mentality",
          "seal": 2,
          "cost": 0,
          "icon": "power_brood_mentality.png",
          "effect": "为 Devoured 家族施加永久诅咒。成员首次获得同名特质时，对 Devoured 家族的好恶提高一级；后来加入家族者也获得该特质。",
          "limit": "可对任意单位或地点施放。Alai's Touch 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "brood-mentality-power"
        },
        {
          "name": "Predatory Instinct",
          "seal": 2,
          "cost": 0,
          "icon": "power_predatory_instinct.png",
          "effect": "为 Devoured 家族施加永久诅咒。对其他家族有正面标签的挑战或行动，动机 −30；负面标签对应动机 +30，正面判定优先。攻击其他家族人物的动机 +30，保护他们的动机 −30；君主的国家行动也有对应标签修正。",
          "limit": "可对任意单位或地点施放。Alai's Touch 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "predatory-instinct-power"
        },
        {
          "name": "Psychic Empathy",
          "seal": 2,
          "cost": 0,
          "icon": "power_psychic_empathy.png",
          "effect": "为 Devoured 家族施加永久诅咒。Devoured 统治者每回合使领地已有的 Unrest、Devastation 强度各减少 2；若其君主也属于 Devoured，已有 Political Agitation 也减少 2。",
          "limit": "可对任意单位或地点施放。Alai's Touch 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "psychic-empathy-power"
        },
        {
          "name": "Call to Slumber",
          "seal": 2,
          "cost": 0,
          "icon": "power_call_to_slumber.png",
          "effect": "为 Devoured 家族施加永久诅咒。Rest & Resupply 动机中“休息欲望 × 距上次休息完成的挑战数”这一部分变为 3 倍，在家乡时其基数再乘 2。持有者休息整补时，每回合恢复 0.02 Power，最高达到神力上限；自主及受控人物均可触发。",
          "limit": "可对任意单位或地点施放。Alai's Touch 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "call-to-slumber-power"
        }
      ]
    },
    {
      "id": "powers-presence",
      "title": "Presence",
      "powers": [
        {
          "name": "Beckoning Hands",
          "seal": 3,
          "cost": 3,
          "icon": "power_beckoning_hands.png",
          "effect": "合计当地 Plague、Unrest、<CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" />、Death、Devastation 强度，将总量乘以 0.12 后向上取整，生成人数不超过当地人口的 Beckoned Refugees，并扣除原地人口；人口归零会令聚居地化为废墟。难民前往其他 Devoured 统治的城市，按距离选择，对非黑暗国家额外计 1000 距离。抵达后增加人口及等量 Industrious Newcomers，提供粮食与适居度。",
          "limit": "目标为人类类聚居地，拥有 Plague、Unrest、<CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" />、Death、Devastation 中至少一种属性；世界上另有一座 Devoured 统治的城市。首次施放锁定 Alai's Presence，移除本组其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Smothering Hands",
          "seal": 3,
          "cost": 2,
          "icon": "power_smothering_hands.png",
          "effect": "将目标人物 Shadow 设为 100%。选定本项后，Release Grasp 永久不再清除被释放人物的 Shadow。",
          "limit": "目标为 Devoured 人物单位，或人类类聚居地的 Devoured 统治者；Shadow 小于 100%，所在地不能有强度达到 50 的 Ward。首次施放锁定 Alai's Presence，移除本组其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Tangling Hands",
          "seal": 3,
          "cost": 2,
          "icon": "power_tangling_hands.png",
          "effect": "建立 Soul Tangle：没有 Madness 时创建强度 101 的 Alai's Madness，已有 Madness 则至少提高到 101。每回合提供 +2 Madness，并把普通 Madness 转为 Alai's Madness；统治者不再属于 Devoured 时 Soul Tangle 消失。该疯狂不降低 Prosperity、不制造 Unrest，但超过 100 后仍损耗统治者 Sanity。达到 300 时降回 150，且当地没有 Madness Effect 时生成随机 Alai 疯狂效果。",
          "limit": "限人类类聚居地，有 Devoured 统治者，且当地尚无 Soul Tangle。首次施放锁定 Alai's Presence，移除本组其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Carrying Hands",
          "seal": 3,
          "cost": 2,
          "icon": "power_carrying_hands.png",
          "effect": "选择 Unrest、Devastation、Death 或 Madness 中的一种，从其他 Devoured 统治的人类类聚居地合计搬运最多 100 强度至目标；菜单只显示有正值可搬运的种类。来源属性被抽空时移除，否则扣减搬走的强度。取消属性选择时返还 2 Power，已锁定的路线仍保留。",
          "limit": "目标为人类类聚居地；另有 Devoured 统治的人类类聚居地拥有上述四种属性至少一种。首次施放锁定 Alai's Presence，移除本组其余三项；本项保留，可重复施放。"
        }
      ]
    },
    {
      "id": "powers-reach",
      "title": "Reach",
      "powers": [
        {
          "name": "Devoured Bloodline",
          "seal": 5,
          "cost": 2,
          "icon": "power_devoured_bloodline.png",
          "effect": "将拥有 Devoured 父母或配偶的目标加入 Devoured，使其获得相应家族诅咒。",
          "limit": "限英雄、侍僧，或人类类聚居地统治者；目标不能已属于 Devoured 或 Remade，Chosen One 除外。须有属于 Devoured 的父母或配偶，亲属已故也可。首次施放锁定 Alai's Reach，移除本组其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Devoured Homeland",
          "seal": 5,
          "cost": 2,
          "icon": "power_devoured_homeland.png",
          "effect": "借家乡联系把目标加入 Devoured：家乡的 Devoured 统治者、该地资助的存活 Devoured 英雄，或人物携带的同乡 Devoured Puppet 均可提供联系。",
          "limit": "英雄或侍僧须非 Chosen One。可凭人类类家乡聚居地的 Devoured 统治者或其他存活 Devoured 资助英雄传播，此时目标须不属 Devoured 或 Remade；也可凭同乡 Devoured Puppet 传播，此时任何家族均可。对统治者施放时，其领地须为人类类聚居地，本人不属 Devoured 或 Remade，并有当地存活的 Devoured 资助英雄或同乡 Puppet。首次施放锁定 Alai's Reach，移除其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Devoured Fealty",
          "seal": 5,
          "cost": 3,
          "icon": "power_devoured_borders.png",
          "effect": "将受 Devoured 君主统治的人物加入 Devoured；也可沿相邻城市的 Devoured 统治者向非城市聚居地传播。",
          "limit": "限人类类聚居地，统治者不属 Devoured 或 Remade；其君主须属于 Devoured，或目标为非城市聚居地且相邻城市的统治者属于 Devoured。相邻城市可属于其他国家。首次施放锁定 Alai's Reach，移除本组其余三项；本项保留，可重复施放。"
        },
        {
          "name": "Devoured Shores",
          "seal": 5,
          "cost": 1,
          "icon": "power_devoured_waters.png",
          "effect": "将目标聚居地的统治者加入 Devoured，使其获得相应家族诅咒。",
          "limit": "限人类类聚居地，统治者不属 Devoured/Remade，且至少一个 Docks 已渗透。首次施放锁定 Alai's Reach，移除本组其余三项；本项保留，可重复施放。"
        }
      ]
    },
    {
      "id": "powers-grasp",
      "title": "Grasp",
      "powers": [
        {
          "name": "Rebirth Venom",
          "seal": 7,
          "cost": 0,
          "icon": "power_rebirth_venom.png",
          "effect": "为 Devoured 家族施加永久诅咒。非受控 Devoured 在战斗中杀死非 Devoured、非受控的英雄或侍僧时触发事件，使受害者满血复活并加入 Devoured。双方相互提高一次好恶，并抵消本次英雄死亡恐慌；施害者隶属教团且受害者为侍僧时，受害者还会加入其教团。",
          "limit": "可对任意单位或地点施放。Alai's Grasp 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "rebirth-venom-power"
        },
        {
          "name": "Parallel Thoughts",
          "seal": 7,
          "cost": 0,
          "icon": "power_parallel_thoughts.png",
          "effect": "为 Devoured 家族施加永久诅咒。持有者所在地有另一名 Devoured 人物或统治者时，Might、Lore、Intrigue、Command 各 +1；同伴须为独立人物，多个同伴仍提供一份加成。",
          "limit": "可对任意单位或地点施放。Alai's Grasp 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "parallel-thoughts-power"
        },
        {
          "name": "Nightmare Weaving",
          "seal": 7,
          "cost": 0,
          "icon": "power_nightmare_weaving.png",
          "effect": "为 Devoured 家族施加永久诅咒。每名持有者每回合使所在地已有的 Unrest、Plague、Devastation 强度各增加 1。",
          "limit": "可对任意单位或地点施放。Alai's Grasp 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "nightmare-weaving-power"
        },
        {
          "name": "Restitching Sinews",
          "seal": 7,
          "cost": 0,
          "icon": "power_restitching_sinews.png",
          "effect": "为 Devoured 家族施加永久诅咒。家族人物单位与 Devoured Puppet 每回合恢复 1 HP，最高达到各自的生命上限。",
          "limit": "可对任意单位或地点施放。Alai's Grasp 四选一；施放后四项神力全部移除，选定的家族诅咒保留。",
          "id": "restitching-sinews-power"
        }
      ]
    },
    {
      "id": "powers-embrace",
      "title": "Embrace",
      "powers": [
        {
          "name": "Awaken Crusader",
          "seal": 9,
          "cost": 5,
          "icon": "power_awaken_crusader.png",
          "effect": "把目标转为自主 <CrossReference name=\"Crusader\" href=\"#entry-embraced\" />。其前往 Devoured 统治者支援的军队，同地累计工作 10 回合后以原军队当前 HP 的两倍生成 Ravagers，替换旧军队并解除其与聚居地的支援关系。新单位不可控制，Shadow 设为 100%，物种改为怪物，Profile +20。原有人物单位会被替换；已腐化的人物另返还 1 招募点。对统治者施放时，须原本有对应人物或军队单位才会转化；没有对应单位的普通统治者仍会扣费、锁定路线，但不会转化。",
          "limit": "目标为 Devoured 英雄、侍僧，或人类类聚居地的 Devoured 统治者。首次施放锁定 Alai's Embrace，移除其余三项；本项保留。"
        },
        {
          "name": "Awaken Emissary",
          "seal": 9,
          "cost": 5,
          "icon": "power_awaken_emissary.png",
          "effect": "把目标转为自主 <CrossReference name=\"Emissary\" href=\"#entry-embraced\" />。其在合格 Devoured 领地累计工作 20 回合后，把当地及相邻 Devoured 领地并入现存 Dark Empire。若尚无 Dark Empire，须在首都完成任务，将该国改为 Dark Empire；部分非 Devoured、低 Shadow 城市会反叛。新单位不可控制，Shadow 设为 100%，物种改为怪物，Profile +20。原有人物单位会被替换；已腐化的人物另返还 1 招募点。对统治者施放时，须原本有对应人物或军队单位才会转化；没有对应单位的普通统治者仍会扣费、锁定路线，但不会转化。",
          "limit": "目标为 Devoured 英雄、侍僧，或人类类聚居地的 Devoured 统治者。首次施放锁定 Alai's Embrace，移除其余三项；本项保留。"
        },
        {
          "name": "Awaken Enchanter",
          "seal": 9,
          "cost": 5,
          "icon": "power_awaken_enchanter.png",
          "effect": "把目标转为自主 <CrossReference name=\"Enchanter\" href=\"#entry-embraced\" />（女性称 <CrossReference name=\"Enchantress\" href=\"#entry-embraced\" />）。其在非黑暗国家、非 Devoured 统治者领地累计工作 10 回合后，清空统治者及其资助英雄的 Awareness，赋予 Oblivion，并使世界恐慌暂时降低 3 个百分点。新单位不可控制，Shadow 设为 100%，物种改为怪物，Profile +20。原有人物单位会被替换；已腐化的人物另返还 1 招募点。对统治者施放时，须原本有对应人物或军队单位才会转化；没有对应单位的普通统治者仍会扣费、锁定路线，但不会转化。",
          "limit": "目标为 Devoured 英雄、侍僧，或人类类聚居地的 Devoured 统治者。首次施放锁定 Alai's Embrace，移除其余三项；本项保留。"
        },
        {
          "name": "Awaken Weaver",
          "seal": 9,
          "cost": 5,
          "icon": "power_awaken_weaver.png",
          "effect": "把目标转为自主 <CrossReference name=\"Weaver\" href=\"#entry-embraced\" />。其追踪非 Devoured 英雄、侍僧或统治者，同地累计工作 15 回合后把对方加入 Devoured；寻找单位目标时排除 Chosen One，统治者任务会拒绝黑暗国家。新单位不可控制，Shadow 设为 100%，物种改为怪物，Profile +20。原有人物单位会被替换；已腐化的人物另返还 1 招募点。对统治者施放时，须原本有对应人物或军队单位才会转化；没有对应单位的普通统治者仍会扣费、锁定路线，但不会转化。",
          "limit": "目标为 Devoured 英雄、侍僧，或人类类聚居地的 Devoured 统治者。首次施放锁定 Alai's Embrace，移除其余三项；本项保留。"
        }
      ]
    }
  ],
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "media": false,
      "items": [
        {
          "id": "devoured",
          "name": "Devoured",
          "text": "成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 <CrossReference name=\"Ensnare\" href=\"#entry-ensnare\" />，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 <CrossReference name=\"Release\" href=\"#entry-release-puppet\" /> 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。"
        },
        {
          "id": "brood-mentality-trait",
          "name": "Brood Mentality",
          "text": "获得时，对自身家族的偏好提高一级。通过 the Devoured 的家族诅咒获得时，提高的是对 the Devoured 的偏好。"
        },
        {
          "id": "predatory-instinct-trait",
          "name": "Predatory Instinct",
          "text": "攻击其他家族人物的意愿 +30，保护他们的意愿 −30。挑战、统治者行动和国家行动若有利于其他家族，执行意愿 −30；否则，若不利于其他家族，执行意愿 +30。每次行动至多应用一次这项修正。"
        },
        {
          "id": "psychic-empathy-trait",
          "name": "Psychic Empathy",
          "text": "作为统治者时，每回合使领地已有 Unrest、Devastation 各减少 2 点；若本国君主也是 Devoured，已有 Political Agitation 也减少 2 点。"
        },
        {
          "id": "call-to-slumber-trait",
          "name": "Call to Slumber",
          "text": "Rest & Resupply 中，由连续完成挑战数产生的休息意愿提高至 3 倍，故乡原有的双倍加成照常生效。拥有该能力的人物休息时，每回合 Power +0.02，最高恢复至神力上限。"
        },
        {
          "id": "rebirth-venom-trait",
          "name": "Rebirth Venom",
          "text": "选择 Rebirth Venom 后，自主行动的 Devoured 在战斗中杀死另一名自主行动、尚未加入 the Devoured 的英雄或教士时，可通过对应事件使其满血复活并加入 the Devoured。复活后，双方对彼此的偏好各提高一级。"
        },
        {
          "id": "parallel-thoughts-trait",
          "name": "Parallel Thoughts",
          "text": "同地有另一名 Devoured 人物，或当地另有一名 Devoured 统治者时，Might、Lore、Intrigue、Command 各 +1。加成以地图上的人物和当地统治者为判定对象，多名同伴提供的加成相同。"
        },
        {
          "id": "restitching-sinews-trait",
          "name": "Restitching Sinews",
          "text": "人物单位每回合恢复 1 HP，最高至自身上限。选择 Restitching Sinews 后，Devoured Puppet 也每回合恢复 1 HP；释放时沿用恢复后的 HP。"
        },
        {
          "id": "nightmare-weaving-trait",
          "name": "Nightmare Weaving",
          "text": "每回合使所在地已有 Unrest、Plague、Devastation 各增加 1 点强度。"
        },
        {
          "id": "open-soul",
          "name": "Open Soul",
          "text": "Share Soul 的待配对状态。再次选择同一人物可取消；选择另一名符合条件的人物后，双方获得 Shared Soul，开始共享较高的四项基础属性。"
        },
        {
          "id": "shared-soul",
          "name": "Shared Soul",
          "text": "双方共享较高的基础 Might、Lore、Intrigue、Command，以及升级获得的对应属性加成；较低者补足至较高者的数值。物品和 Parallel Thoughts 等其他加成仍各自结算。共享不受距离影响，一方死亡后另一方失去 Shared Soul。"
        },
        {
          "id": "released-grasp",
          "name": "Released Grasp",
          "text": "人物作为自主行动的英雄或教士时，每回合 Profile、Menace 各降低 1.5，最低 0，并可降低相应最低值。重新受控后此效果结束。\nRelease Grasp 通常还会清空个人 Shadow；选择 Smothering Hands 时则保留。"
        },
        {
          "id": "suppressed-trait",
          "name": "X: …",
          "text": "Released Agent 暂时压制部分原有能力，重新受控后恢复其先前状态。可被压制的能力包括 Howl: Madness、Howl: Sin、Dark Aristocracy、They Will Obey、Epidemiologist、Mortician、Pickpocket Primate、Duality、Inquisitor、Leader of the Faith、Preacher、The Dying Light、The Setting Sun、Maddening Tongues。"
        },
        {
          "id": "alai-s-chosen",
          "name": "Alai's Chosen",
          "text": "首次获得时，立即尝试生成最多三名 Emanation。之后每逢全局回合号为 5 的倍数，尝试补充一名。每次需要空随从槽，且剩余 Command 至少为 1。三种 Emanation 外观的战斗数值相同。"
        },
        {
          "id": "oblivion-trait",
          "name": "Oblivion",
          "text": "Warn the World 的执行意愿 −50。教士所属教团的 Awareness 教义等级不低于 0 时，传播 Awareness 的意愿也降低 50。作为君主时，组建 Alliance 的意愿降低 50；其他全局抑制效果优先生效时，按对应效果结算。\n<CrossReference name=\"Enchanting\" href=\"#entry-enchanting\" /> 完成时会清空相关人物的 Awareness，并授予此能力，持续降低后续传播意愿。"
        },
        {
          "id": "other-s-touch",
          "name": "Other's Touch",
          "text": "the Remade 攻击 Devoured 人物的意愿 +100；同时属于 Alliance 且符合条件时，还可增加 20。被其在战斗中击败的 Devoured 英雄、教士或 Agent，可通过对应事件满血复活、清空个人 Shadow、解除控制并恢复先前家族；Embraced 除外。"
        },
        {
          "id": "accelerated-prophecy",
          "name": "Accelerated Prophecy",
          "text": "获得时连续尝试补充三名 Embodiment，之后每逢全局回合号为 5 的倍数尝试补充一名。每次优先填入首个空随从槽，满员时替换最后一名 Sellsword 或 Knight。补充无需预留 Command 容量。\nthe Remade 以及相应剧情阶段的 Chosen One 可获得此能力。英雄或教士被 Devour 后，会失去此能力及已有 Embodiment。"
        }
      ]
    },
    {
      "id": "family-curses",
      "title": "家族诅咒",
      "items": [
        {
          "name": "Alai's Touch",
          "text": "开局赋予 Devoured 家族，使成员获得 Devoured 特质。新成员加入家族时立即获得对应能力。\n人物可受 Alai 的相关神力操纵；任统治者时，在当地建立 Devoured Court，Security −2。Exorcise Devoured 或 Unraveled 可使人物脱离家族并失去相关能力。",
          "id": "alais-touch-curse"
        },
        {
          "name": "Brood Mentality",
          "text": "选择同名心智神力后赋予 Devoured 家族，成员首次获得对应特质时，对自己家族的偏好提高一级。",
          "id": "brood-mentality-curse"
        },
        {
          "name": "Predatory Instinct",
          "text": "选择同名心智神力后赋予 Devoured 家族。成员对其他家族有利的挑战、统治者行动和国家行动，行动倾向 −30；对其他家族不利的行动，行动倾向 +30。\n攻击其他家族人物的倾向 +30，保护其他家族人物的倾向 −30。",
          "id": "predatory-instinct-curse"
        },
        {
          "name": "Psychic Empathy",
          "text": "选择同名心智神力后赋予 Devoured 家族。统治者每回合使领地已有 Unrest、Devastation 各减少 2；本国君主也属于 Devoured 时，已有 Political Agitation 再减少 2。",
          "id": "psychic-empathy-curse"
        },
        {
          "name": "Call to Slumber",
          "text": "选择同名心智神力后赋予 Devoured 家族。成员休息倾向中，由距上次休息以来完成挑战数产生的部分提高到 3 倍，故乡的双倍加成仍计入。\n执行 Rest & Resupply 时，每回合恢复 0.02 Power，最高至神力上限。",
          "id": "call-to-slumber-curse"
        },
        {
          "name": "Rebirth Venom",
          "text": "选择同名身体神力后赋予 Devoured 家族。非受控 Devoured 在战斗中击杀非受控、非 Devoured 的英雄或教士时，触发 A Devoured Soul，使对方满血复活并加入家族，双方互相提高一级好感。",
          "id": "rebirth-venom-curse"
        },
        {
          "name": "Parallel Thoughts",
          "text": "选择同名身体神力后赋予 Devoured 家族。同地存在另一位 Devoured 人物单位，或当地统治者是另一位 Devoured 时，Might、Lore、Intrigue、Command 各 +1；多人不叠加。",
          "id": "parallel-thoughts-curse"
        },
        {
          "name": "Restitching Sinews",
          "text": "选择同名身体神力后赋予 Devoured 家族。成员的人物单位及 Devoured Puppet 每回合恢复 1 HP，最高至各自 HP 上限。",
          "id": "restitching-sinews-curse"
        },
        {
          "name": "Nightmare Weaving",
          "text": "选择同名身体神力后赋予 Devoured 家族。每位成员每回合使所在地已有 Unrest、Plague、Devastation 各增加 1；适用于统治者与人物单位。",
          "id": "nightmare-weaving-curse"
        }
      ]
    },
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Woven Succession",
          "text": "Security −2。指定人物成为当地继承人；原统治者消失或更换后，此人接任，修正转为 Devoured Court。持续维持其继承地位。提供 Speed Inheritance，完成后原统治者退位并立即继承。\n当地不再是人类类聚居地，或聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "woven-succession-modifier",
          "image": "power_weave_succession.png",
          "initialValue": ""
        },
        {
          "name": "Devoured Court",
          "text": "Security −2，提供 Exorcise Devoured。Devoured 统治者缺失、退出该家族，或地点不再是人类类聚居地时移除；聚居地毁灭时也移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "devoured-court",
          "image": "property_devoured_court.png",
          "initialValue": ""
        },
        {
          "name": "Soul Tangle",
          "text": "持续使本地 Alai's Madness 每回合增加 2，并将普通 Madness 转为专属版本。\n建立时将已有疯狂提高到至少 101；已有普通疯狂会在下一回合转换并增加 2。原先没有疯狂时，以 101 创建专属疯狂，并增加 2。两种疯狂并存时合并其数值。\n统治者缺失、退出 Devoured，或地点不再是人类类聚居地时移除；聚居地毁灭时也移除。已产生的疯狂保留。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "soul-tangle",
          "image": "property_soul_tangle.png",
          "initialValue": ""
        },
        {
          "name": "Alai's Madness",
          "text": "超过 100 后，每回合按（当前数值−100）÷0.0075 累积精神侵蚀；累积超过 1 时归零，当地人类类聚居地统治者 Sanity −1，单次至多扣 1。\n达到 300 时回落到 150；当地为人类类聚居地，且尚无任何 Madness Effect 时，等概率产生六种专属后效之一，并触发 The Webs Consume。\n提供 Cure Madness。Soul Tangle 消失后，已经产生的专属疯狂保留。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": "Soul Tangle 建立时将已有疯狂提高到至少 101；原先没有时以 101 创建并增加 2。\nSoul Tangle 每回合增加 2；首次转换普通 Madness 时继承原数值并增加 2，两者并存时先合并普通疯狂。\nCarrying Hands 可从其他 Devoured 统治的人类类聚居地合计移走至多 100 点疯狂，并向目标增加等量；取尽的来源修正移除，目标已有疯狂时最高增加至 300。\nCure Madness 完成时减少 25。\nDeep One Cult 在当地疯狂低于其自身数值−100 时，每回合增加 1.5。"
          },
          "id": "alais-madness",
          "image": "property_madness_alai.png",
          "initialValue": "通常由 Soul Tangle 创建为 101，并立即登记 +2；转换已有普通疯狂时继承其数值并按转换规则增加。"
        },
        {
          "name": "Madness Effect: Oblivion",
          "text": "当地所有单位每回合 Profile −2、Menace −2，最低降至各自下限；当地挑战免除 Menace 增长。\nProsperity −0.75、Security −10、固定食物产出 −50。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-oblivion",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Madness Effect: Exodus",
          "text": "每逢 5 的倍数回合，若当地为人类类聚居地、人口至少 10，且世界其他地点存在 Deep One Cult，则人口 −5，产生 5 HP 的 Deep Initiates。\n他们前往最近的其他 Cult；抵达时使其数值增加剩余 HP×3，Profile、Menace 各减少剩余 HP，最低为 0；按当地食物和人口容量增加至多剩余 HP 人口。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-exodus",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Madness Effect: Eruption",
          "text": "当地由 Devoured 统治时，每回合把所有相邻人类类聚居地的非 Devoured 统治者加入家族；出现时立即生效一次。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-eruption",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Madness Effect: Entanglement",
          "text": "当地由 Devoured 统治时，在此执行 Rest & Resupply 的英雄或教士加入 Devoured。\nSecurity −2。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-entanglement",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Madness Effect: Proliferation",
          "text": "当地为有人类类统治者的聚居地时，统治者每回合 Gold +1。\n当地已有 Industrious Newcomers 或 Proliferating Souls 且数值低于 300 时，每回合人口 +1、该修正 +1；原先没有则创建数值为 1 的 Proliferating Souls，并增加 1 人口。已有修正达到 300 后停止这项人口及修正增长，金币仍继续增长。\nProsperity −0.65。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-proliferation",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Madness Effect: Nexus",
          "text": "在此使用 Release Grasp，退还其 1 Power 费用。\nSecurity +5。英雄在相邻地点执行 Exorcise Devoured 的行动倾向减少 1000。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "web-madness-nexus",
          "image": "property_madness_effect_alai.png",
          "initialValue": ""
        },
        {
          "name": "Industrious Newcomers",
          "text": "默认条件下，Habitability 加成＝强度÷180+0.005，固定食物加成＝向上取整（强度×7÷12）；宜居度另参与当地食物及人口容量计算。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": "Beckoned Refugees 抵达由 Devoured 统治的普通城市后，按剩余 HP 创建或增加等量；人口增加等量。\nMadness Effect: Proliferation 在此修正低于 300 且当地有人类类统治者时，每回合 +1。"
          },
          "id": "industrious-newcomers",
          "image": "nurture.png",
          "initialValue": "首次抵达的 Beckoned Refugees 剩余 HP。"
        },
        {
          "name": "Proliferating Souls",
          "text": "<CrossReference name=\"Proliferation\" href=\"#entry-web-madness-proliferation\" /> 首次产生的新来者修正。默认 Habitability 加成＝强度÷180+0.005，固定食物加成＝向上取整（强度×7÷12）。聚居地毁灭时移除。",
          "modifierChange": {
            "natural": "",
            "external": "Madness Effect: Proliferation 首次创建为 1；以后在数值低于 300 且当地有人类类统治者时，每回合 +1。\nBeckoned Refugees 抵达合格城市时增加其剩余 HP，不受上述 300 门槛限制。"
          },
          "id": "proliferating-souls",
          "image": "nurture.png",
          "initialValue": ""
        },
        {
          "name": "Other's Core",
          "text": "提供 Pierce the Other：复杂度 10，每回合基础进度 1。进行期间，每回合有一位合格的满血、非 Devoured、未受控英雄被引导来进攻执行者。\n挑战完成时移除，聚居地毁灭时也移除。",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "id": "others-core",
          "image": "theProphecy.png",
          "initialValue": ""
        },
        {
          "name": "Unrest",
          "text": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。\n达到 300 时触发 Unrest Crisis，现任统治者会被民众处决，强度回落到 150，并清除当地 Lingering Resentment。\nBeckoning Hands 根据其强度计算离去人口。",
          "modifierChange": {
            "natural": "默认每回合减少统治者 Command×0.5。\n关闭统治者特质影响规则时，每回合减少 1。\n非人类类聚居地结算时清零。",
            "external": "Nightmare Weaving 的每名持有者在所在地已有 Unrest 上，每回合 +1。\nPsychic Empathy 的统治者在其领地已有 Unrest 上，每回合 −2。\nCarrying Hands 选择本类修正后，从目标以外、由 Devoured 统治的人类类聚居地合计移出至多 100，目标增加等量；来源修正被取尽时移除，否则等量负向影响。目标已有本类修正时，增加后的数值最高为 300。\nMadness 超过 100 时，每回合增加其强度÷75。\nPlague 每回合增加 ⌊Plague 强度÷100⌋+1。\nHunger / Famine 低于 100 时每回合增加 4；100 至不足 200 时增加 16；200 至 300 时增加 4。"
          },
          "id": "unrest",
          "baseGame": true,
          "image": "./vinerva/unrest.png",
          "initialValue": ""
        },
        {
          "name": "Devastation",
          "text": "Prosperity 减少当前数值÷200；食物乘数为 max(0.1,1−当前数值÷200)。达到 300 时，非教程下摧毁尚非 City Ruins 的聚居地。Beckoning Hands 读取它计算离去人口。",
          "modifierChange": {
            "natural": "非教程模式每回合减少 0.5。",
            "external": "Nightmare Weaving 的每名持有者在所在地已有 Devastation 上，每回合 +1。\nPsychic Empathy 的统治者在其领地已有 Devastation 上，每回合 −2。\nCarrying Hands 选择本类修正后，从目标以外、由 Devoured 统治的人类类聚居地合计移出至多 100，目标增加等量；来源修正被取尽时移除，否则等量负向影响。目标已有本类修正时，增加后的数值最高为 300。"
          },
          "id": "devastation",
          "baseGame": true,
          "image": "./evil-beneath/devastation.png",
          "initialValue": ""
        },
        {
          "name": "Plague",
          "text": "Prosperity 减少当前数值×0.003。普通人类类聚居地内，数值不高于 100 时按每回合数值÷450 累积人口死亡并增加 1 Death；超过 100 改为数值÷300 和 2 Death。整数人口损失结算后保留小数余量。\n达到 300 时摧毁聚居地；每回合使 Unrest 增加 ⌊数值÷100⌋+1。超过 60 后可向疾病低于自身一半的相邻人类类聚居地传播，有 Quarantine 时传播门槛为 140。\nBeckoning Hands 根据其数值计算离去人口。",
          "modifierChange": {
            "natural": "数值不超过 300 时，每回合增加 ⌊200×难度缩减系数⌋÷100；默认系数 1 时为 +2。",
            "external": "Nightmare Weaving 的每名持有者在所在地已有 Plague 上，每回合 +1。"
          },
          "id": "plague",
          "baseGame": true,
          "image": "./out-of-gods/plague.png",
          "initialValue": ""
        },
        {
          "name": "Death",
          "text": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。\n正常游戏中达到 300 时触发 Death Crisis，并在当地生成两个自主 Ghast；同一份修正只触发一次。\nBeckoning Hands 根据其强度计算离去人口。",
          "modifierChange": {
            "natural": "每回合减少 0.5。",
            "external": "Carrying Hands 选择本类修正后，从目标以外、由 Devoured 统治的人类类聚居地合计移出至多 100，目标增加等量；来源修正被取尽时移除，否则等量负向影响。目标已有本类修正时，增加后的数值最高为 300。\nSoul 每回合在所在地点 +1；有灵魂的 Devoured Puppet 死亡可直接生成 Soul。\nPlague 在强度不高于 100 时每回合增加 1，超过 100 时增加 2。\nHunger / Famine 造成的人口死亡增加等量 Death；100 至不足 200 时若扣减后人口不大于 0，该次不增加。"
          },
          "id": "death",
          "baseGame": true,
          "image": "./kalastrophe/death.png",
          "initialValue": ""
        },
        {
          "name": "Madness",
          "text": "普通疯狂使 Prosperity 减少当前数值×0.003；超过 100 后增加 Unrest 并侵蚀统治者 Sanity。达到 300 时回落到 150；当地符合条件且没有 Madness Effect 时，产生一种本体疯狂后效。\nCarrying Hands 向没有疯狂的目标转移时会产生普通疯狂；目标已有 Alai's Madness 时增加专属疯狂。Soul Tangle 可将普通疯狂转换为专属版本。",
          "modifierChange": {
            "natural": "",
            "external": "Carrying Hands 选择本类修正后，从目标以外、由 Devoured 统治的人类类聚居地合计移出至多 100，目标增加等量；来源修正被取尽时移除，否则等量负向影响。目标已有本类修正时，增加后的数值最高为 300。\nSoul Tangle 建立时把第一份已有 Madness 提高到至少 101；下一次转换时移除普通版本，把数值并入 Alai's Madness。\nCure Madness 完成时减少 25。\nDeep One Cult 在当地 Madness 低于 Cult 强度−100 时，每回合增加 1.5。"
          },
          "id": "madness",
          "baseGame": true,
          "image": "./iastur/madness.png",
          "initialValue": ""
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，推动首都 Political Instability 并增加内战风险。",
          "modifierChange": {
            "natural": "每回合减少 1。",
            "external": "Psychic Empathy 的统治者在本国君主属于 Devoured 时，使领地已有 Political Agitation 每回合 −2。"
          },
          "id": "political-agitation",
          "baseGame": true,
          "image": "./kalastrophe/agitate.png",
          "initialValue": ""
        },
        {
          "name": "Deep One Cult",
          "text": "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n在人类聚居地达到 300 时，将其转为 Deep One Sanctum；70% 人口经 Sanctum 转送至深海城市，统治者转为自主 Deep One。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。",
          "modifierChange": {
            "natural": "非教程、正常游戏中每回合增加 1。",
            "external": "Deep Initiates 抵达时直接增加剩余 HP×3；同时 Profile、Menace 各减少剩余 HP，最低 0。\n加速成熟期间，每回合额外 +3。\n当地统治者对 Deep Ones 的偏好等级，每级每回合调整 1 点：正面增加，负面减少。"
          },
          "id": "deep-one-cult",
          "baseGame": true,
          "image": "./kalastrophe/deepOnes.png",
          "initialValue": ""
        },
        {
          "name": "Hunger / Famine",
          "text": "同一修正在强度低于 100 时显示 Hunger，达到 100 后显示 <CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" />。Prosperity 修正为 −强度/200；达到 50 后不再提供通常的休息挑战。\n普通模式下，低于 100 时每回合 Unrest +4；100 至不足 200 时每回合 Unrest +16、人口 −2；200 至 300 时每回合 Unrest +4、人口减少 ⌊max(2,人口 × 0.05)⌋；超过 300 时人类类聚居地毁灭。\n人口损失计入 Death，剩余人口最低保留 1；100 至不足 200 时若扣减后人口不大于 0，该次不增加 Death。开启难民且地点允许时，另生成损失人口一半规模的难民，向下取整，包含在本次人口扣减中。\nBeckoning Hands 根据其强度计算离去人口。",
          "modifierChange": {
            "natural": "常规人口结算后人口 P 大于本地产粮及进口总和 F 时，每回合增加 min(10,max(5,P−F))。\nP 不大于 F 时，每回合减少 max(10,5×(F−P))。",
            "external": ""
          },
          "id": "hunger-famine",
          "baseGame": true,
          "image": "./aberrant-metal/famine.png",
          "initialValue": ""
        },
        {
          "name": "Ward",
          "text": "抑制相邻地点传入的 Shadow；达到 100 时阻止这类自然传播。Ward 达到 50 时，会阻止 Smothering Hands 以当地统治者或人物为目标。",
          "modifierChange": {
            "natural": "每回合减少 2。",
            "external": ""
          },
          "id": "ward",
          "baseGame": true,
          "image": "./kalastrophe/driveBackShadow.png",
          "initialValue": ""
        },
        {
          "name": "Soul",
          "text": "Devoured Puppet 死亡留下的灵魂，名称随死者物种显示，例如 Human Soul 或 Elf Soul。每回合使当地 Death 增加 1。地点成为废墟后仍保留。",
          "modifierChange": {
            "natural": "每回合减少 1；结算后低于 0.1 时移除。",
            "external": "有灵魂的 Devoured Puppet 死亡时，在主人最后记录的地点创建。"
          },
          "id": "soul",
          "baseGame": true,
          "initialValue": ""
        }
      ],
      "media": true
    },
    {
      "id": "minions",
      "title": "随从",
      "media": true,
      "items": [
        {
          "id": "devoured-puppet",
          "name": "Devoured Puppet",
          "text": "名称为 Puppet 加人物名，肖像沿用原人物。通过 <CrossReference name=\"Ensnare\" href=\"#entry-ensnare\" /> 收服时，保留目标当前 HP；战斗后选择复活为 Puppet 时恢复满血，Loyal Attendant 也以满血加入。\n作为随从时 Attack 固定为 3，原人物的能力与装备保留供释放后使用。解散或通过 <CrossReference name=\"Release\" href=\"#entry-release-puppet\" /> 释放时，存活人物返回地图；Puppet 在战斗中死亡后，若仍有灵魂，会在主人最后所在地点留下 Soul。",
          "meta": "肖像沿用原人物；背景为 the Devoured",
          "stats": "HP: 原人物当前值／原人物上限；Attack: 3；Defence: 0；Command: 1。",
          "abilities": [
            {
              "name": "Restitching Sinews",
              "text": "选择 Restitching Sinews 后，每回合恢复 1 HP，最高至上限；释放时沿用当前 HP。",
              "id": "devoured-puppet-ability-restitching-sinews"
            }
          ]
        },
        {
          "id": "emanation",
          "name": "Emanation",
          "text": "由 Alai's Chosen 生成，三种外观的战斗数值相同。",
          "images": [
            "minion_emanation_0.png",
            "minion_emanation_1.png",
            "minion_emanation_2.png"
          ],
          "stats": "HP: 2；Attack: 3；Defence: 2；Command: 1。",
          "image": "minion_emanation_0.png"
        },
        {
          "id": "embodiment",
          "name": "Embodiment",
          "text": "由 Accelerated Prophecy 生成，随相应剧情阶段的 Chosen One 与 the Remade 出现。补充时优先空随从槽，满员时替换最后一名 Sellsword 或 Knight。生成无需预留 Command 容量，每名 Embodiment 的 Command 消耗为 1。",
          "image": "unit_embodiment.png",
          "stats": "HP: 6；Attack: 4；Defence: 3；Command: 1。"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "media": true,
      "items": [
        {
          "id": "embraced",
          "name": "Embraced",
          "text": "由 Awaken Crusader、Awaken Emissary、Awaken Enchanter 或 Awaken Weaver 转化 Devoured 英雄、教士，或已有人物单位的统治者。所选形态决定所有 Embraced 的称号和行动：<CrossReference name=\"Crusader\" href=\"#entry-embraced\" /> 制造 Ravagers；<CrossReference name=\"Emissary\" href=\"#entry-embraced\" /> 将领地纳入或创立 Dark Empire；<CrossReference name=\"Enchanter\" href=\"#entry-embraced\" /> / <CrossReference name=\"Enchantress\" href=\"#entry-embraced\" /> 清除 Awareness；<CrossReference name=\"Weaver\" href=\"#entry-embraced\" /> 使其他人物加入 the Devoured。\n转化时保留人物的基础四维、等级、物品与大部分能力，HP 重设为 5/5，Profile 设为 20，Menace 从 0 开始，随从重新由 Alai's Chosen 补充。转化后成为无灵魂的 Monster，个人 Shadow 为 100%，自主行动。原有 Lycanthropy 与 Feral Might 相关特质会在人物转化时移除。",
          "images": [
            "unit_awakened_m.png",
            "unit_awakened_f.png"
          ],
          "stats": "Might: 继承；Lore: 继承；Intrigue: 继承；Command: 继承；HP: 5/5；Profile: 20；Menace: 0。",
          "abilities": [
            {
              "name": "Alai's Chosen",
              "text": "首次获得时尝试生成最多三名 Emanation，之后每逢全局回合号为 5 的倍数尝试补充一名；需要空随从槽和足够 Command。",
              "id": "embraced-ability-alai-s-chosen"
            }
          ],
          "image": "unit_awakened_m.png"
        },
        {
          "id": "attendant-unit",
          "name": "Loyal Attendant",
          "text": "由 Supplicant 的 Loyal Attendant 开局选项获得，起初作为 Devoured Puppet 随行。释放后以女性英雄身份行动，保留个人姓名，使用 Attendant 肖像。可通过 Pull the Strings 接管，也可再次 <CrossReference name=\"Ensnare\" href=\"#entry-ensnare\" />。基础四维均为 3，后续升级、物品和人物特质正常生效。",
          "image": "unit_attendant.png",
          "stats": "Might: 3；Lore: 3；Intrigue: 3；Command: 3；HP: 5/5；初始 Attack: 3；Defence: 2。",
          "abilities": [
            {
              "name": "Devoured",
              "text": "属于 the Devoured；作为 Puppet 随行时，可由主人释放回其最后所在地点。",
              "id": "attendant-unit-ability-devoured"
            }
          ]
        },
        {
          "id": "released-agent",
          "name": "Released Agent",
          "text": "原 Agent 经 Release Grasp 释放后，以英雄身份自主行动，保留姓名、肖像、四项基础属性、等级和物品。当前 HP、HP 上限、随从、Profile、Menace 及其最低值均沿用原人物状态。\n重新控制时，恢复原 Agent 的专属能力，并带回释放期间的 HP、随从与 Profile、Menace 变化。释放期间可使用 Drop Item Cache 及 Devoured 提供的仪式，部分原有能力暂时受到压制。",
          "meta": "保留原人物名称",
          "stats": "Might: 继承；Lore: 继承；Intrigue: 继承；Command: 继承；HP: 当前值与上限均继承。",
          "abilities": [
            {
              "name": "Released Grasp",
              "text": "自主行动时，每回合 Profile、Menace 各降低 1.5，可降低最低值；重新受控后结束。",
              "id": "released-agent-ability-released-grasp"
            },
            {
              "name": "X: …",
              "text": "部分原 Agent 能力在释放期间暂时受到压制，重新受控后恢复。",
              "id": "released-agent-ability-x-trait"
            }
          ]
        },
        {
          "id": "the-remade",
          "name": "the Remade",
          "text": "特殊剧情会将至多三名自主行动、尚未加入 the Devoured 的 Warrior 转入 the Remade，授予 Other's Touch 与 Accelerated Prophecy，Chosen One 除外。转换时保留原有四维、HP、等级、装备和肖像。\n全新 Warrior 的基础数值通常为 Might 2–4、Lore 1–3、Intrigue 1–3、Command 2–4、HP 6；剧情中的既有英雄还可能拥有升级和装备加成。被 Devour 后，会失去 Other's Touch、Accelerated Prophecy 和 Embodiment。",
          "meta": "保留原 Warrior 名称与肖像",
          "stats": "Might: 继承；Lore: 继承；Intrigue: 继承；Command: 继承；HP: 当前值与上限均继承。",
          "abilities": [
            {
              "name": "Other's Touch",
              "text": "对 Devoured 人物的攻击意愿 +100，满足 Alliance 条件时额外 +20；战胜符合条件的 Devoured 对手后，可通过对应事件使其满血恢复、清空 Shadow、解除控制并回归先前家族。",
              "id": "the-remade-ability-other-s-touch"
            },
            {
              "name": "Accelerated Prophecy",
              "text": "获得时尝试补充三名 Embodiment，之后每逢全局回合号为 5 的倍数尝试补充一名。优先空槽，其次替换 Sellsword 或 Knight；生成无需预留 Command 容量。",
              "id": "the-remade-ability-accelerated-prophecy"
            }
          ]
        }
      ]
    },
    {
      "id": "challenges",
      "title": "挑战",
      "media": true,
      "items": [
        {
          "id": "speed-inheritance",
          "name": "Speed Inheritance",
          "text": "使当地统治者退位，并立即由 Woven Succession 指定的继承人接任。原统治者仍然存活。完成时 Profile +5、Menace +3。",
          "image": "power_weave_succession.png",
          "meta": "Intrigue 挑战",
          "statLine": "Complexity: 30　Profile: 0　Menace: 0　XP: 49",
          "location": "有 Woven Succession 待继承者、Infiltration 达到 100% 的聚居地。",
          "limit": "可由玩家 Agent 执行。"
        },
        {
          "id": "pierce-the-other",
          "name": "Pierce the Other",
          "text": "执行期间，每回合会有至多一名满血、自主行动且尚未加入 the Devoured 的英雄开始追击执行者。已经在追击人物的英雄不会重复加入。\n完成后触发 A Million Crystallized Lives，移除当地 Other's Core，并推进相应特殊结局。完成时 Profile、Menace 增量均为 0。",
          "image": "theProphecy.png",
          "meta": "固定进度挑战",
          "statLine": "Complexity: 10　Profile: 0　Menace: 0　XP: 21",
          "location": "Other's Core 所在地点。",
          "limit": "可由玩家 Agent 执行。",
          "time": "10 回合。"
        },
        {
          "id": "ensnare",
          "name": "Ensnare {name}",
          "text": "将同地的 Devoured 英雄或教士收为 Devoured Puppet，保留目标当前 HP。目标移动到相邻地点时，执行者可用剩余移动次数追随；无法跟上时停止仪式。\n每名 Puppet 消耗 1 Command 和一个随从槽；完成时容量不足会要求选择替换或解散随从。完成时 Profile、Menace 增量均为 0。",
          "meta": "固定进度仪式",
          "statLine": "Complexity: 3　Profile: 0　Menace: 0　XP: 8",
          "location": "执行者与目标所在地点。",
          "limit": "由受控 Devoured 人物执行，目标须为同地自主行动的 Devoured 英雄或教士，Chosen One 除外。",
          "time": "3 回合。"
        },
        {
          "id": "release-puppet",
          "name": "Release {name}",
          "text": "立即释放所选 Devoured Puppet，使其返回主人最后所在地点，恢复自主行动。通常保留该人物原有身份及当前 HP。完成时 Profile、Menace 增量均为 0。",
          "meta": "即时仪式",
          "statLine": "Complexity: 0　Profile: 0　Menace: 0　XP: 0",
          "location": "携带该 Puppet 的人物所在地点。",
          "limit": "由受控 Devoured 人物执行，携带对应 Puppet。",
          "time": "即时。"
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "id": "exorcise-devoured",
          "name": "Exorcise Devoured",
          "text": "使当地统治者脱离 the Devoured，恢复先前家族，并移除相应的 Alai 人物特质。完成时 Profile、Menace 增量均为 0。\n基础执行意愿 +200；目标每个相邻 <CrossReference name=\"Nexus\" href=\"#entry-web-madness-nexus\" /> 使意愿 −1000。每次开始驱逐会为全局近期驱逐惩罚增加 100，之后每回合减少世界恐慌比例×6，最低 0；世界恐慌越高，英雄越快愿意再次执行。",
          "image": "power_modal.png",
          "meta": "Lore 英雄任务",
          "statLine": "Complexity: 30　Profile: 100　Menace: 0　XP: 49",
          "location": "由 Devoured 统治、有 Devoured Court 且没有待继承者的聚居地。",
          "limit": "Alliance 所属人物，且不属于 the Devoured。",
          "positiveTags": "无",
          "negativeTags": "无"
        },
        {
          "name": "Cure Madness",
          "id": "cure-madness",
          "baseGame": true,
          "image": "./iastur/madness.png",
          "meta": "Lore 任务",
          "text": "使当地 Madness 或 Alai's Madness 减少 25。完成时 Profile +3。",
          "location": "存在 Madness 或 Alai's Madness 的地点。",
          "limit": "英雄与我方 Agent 均可执行。",
          "statLine": "Complexity: 25　Profile: 当地疯狂强度　Menace: 当地疯狂强度÷2　XP: 42",
          "positiveTags": "无",
          "negativeTags": "Disease、Madness"
        }
      ]
    },
    {
      "id": "unit-tasks",
      "title": "自主人物任务",
      "media": true,
      "items": [
        {
          "id": "spawning-ravagers",
          "name": "Spawning Ravagers",
          "text": "将目标 Human Army 转化为 Ravagers，生成时 HP 与上限均为原军队当前 HP×2，归属黑暗势力。原聚居地腾出军队供养位置。完成时执行者 Profile +5、Menace +15。\n目标失去所属聚居地的有效供养，或当地统治者脱离 the Devoured 时停止；同地已有更接近完成的同类任务时让位。",
          "meta": "自动任务",
          "image": "unit_ravager_army.png",
          "location": "目标 Human Army 当前所在地点，随军队移动。",
          "limit": "<CrossReference name=\"Crusader\" href=\"#entry-embraced\" /> 自动执行；目标军队由 Devoured 统治者供养。",
          "time": "同地累计 10 回合，赶路另计；抵达当回合可以开始推进。"
        },
        {
          "id": "annexing",
          "name": "Annexing {location}",
          "text": "已有 Dark Empire 时，将目标地点及相邻、由 Devoured 统治的其他人类聚居地一同纳入帝国，相关统治者也转入该帝国。\n没有 Dark Empire 时，在目标社会的首都创立 Dark Empire，并解除该社会的 Alliance 身份。该国内未由 Devoured 统治、且统治者与聚居地 Shadow 均低于 90% 的 City 可能因此爆发内战。完成时执行者 Profile +5、Menace +20。",
          "meta": "自动任务",
          "image": "power_awaken_emissary.png",
          "location": "Devoured 统治、所属社会尚非黑暗势力的人类聚居地。",
          "limit": "<CrossReference name=\"Emissary\" href=\"#entry-embraced\" /> 自动执行；没有 Dark Empire 时，目标须为所属社会首都。",
          "time": "同地累计 20 回合，赶路另计。"
        },
        {
          "id": "enchanting",
          "name": "Enchanting {location}",
          "text": "清空当地统治者及其资助英雄的 Awareness，并使尚未拥有 Oblivion 的这些人物获得该能力。临时 World Panic 降低 3 个百分点。完成时执行者 Profile +2、Menace +5。",
          "meta": "自动任务",
          "image": "power_awaken_enchanter.png",
          "location": "非黑暗社会的人类聚居地，当地统治者尚未加入 the Devoured。",
          "limit": "<CrossReference name=\"Enchanter\" href=\"#entry-embraced\" /> / <CrossReference name=\"Enchantress\" href=\"#entry-embraced\" /> 自动执行。",
          "time": "同地累计 10 回合，赶路另计。"
        },
        {
          "id": "devouring-ruler",
          "name": "Devouring {location}'s ruler",
          "text": "将当地统治者纳入 the Devoured，使其获得相应能力，并为领地建立 Devoured Court。完成时执行者 Profile +5、Menace +10。",
          "meta": "自动任务",
          "image": "power_awaken_weaver.png",
          "location": "非黑暗社会的人类聚居地，当地统治者尚未加入 the Devoured。",
          "limit": "<CrossReference name=\"Weaver\" href=\"#entry-embraced\" /> 自动执行。",
          "time": "同地累计 15 回合，赶路另计。"
        },
        {
          "id": "devouring-character",
          "name": "Devouring {character}",
          "text": "追随目标人物，双方同地时推进转化，完成后使其加入 the Devoured。完成时执行者 Profile +5、Menace +10。",
          "meta": "自动任务",
          "image": "power_awaken_weaver.png",
          "location": "目标人物当前所在地点。",
          "limit": "<CrossReference name=\"Weaver\" href=\"#entry-embraced\" /> 自动执行；目标为尚未加入 the Devoured 的英雄或教士，Chosen One 除外。",
          "time": "同地累计 15 回合，赶路另计。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "media": true,
      "items": [
        {
          "id": "ravagers",
          "name": "Ravagers",
          "text": "<CrossReference name=\"Crusader\" href=\"#entry-embraced\" /> 完成 Spawning Ravagers 后，将原 Human Army 转化为自主行动的 Ravagers，归属黑暗势力，并释放原聚居地的军队供养位置。\n在没有 Devoured 统治者的人类聚居地，优先加入同地黑暗军队或其他 Ravagers 已参与的战斗，否则直接焚毁聚居地。寻找新目标时，综合人口、Shadow、距离及势力关系，前往非黑暗社会且未由 Devoured 统治的聚居地。\n通常每回合移动 1 步，无额外战斗修正时，伤害为当前 HP 的 10% 向上取整。",
          "image": "unit_ravager_army.png",
          "stats": "HP: 原 Human Army 当前 HP×2，转化时当前值与上限相同。"
        },
        {
          "id": "beckoned-refugees",
          "name": "Beckoned Refugees",
          "text": "由 Beckoning Hands 创建。来源地 Plague、Unrest、Devastation、<CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" />、Death 的强度合计决定迁出人数，迁出量按总强度的 12% 向上取整，队伍规模最高为来源地现有人口。\n队伍自主前往另一座由 Devoured 统治的 City，优先黑暗社会。抵达时，剩余 HP 等量增加目标人口与 Industrious Newcomers 强度。无可去目标时，队伍在当前人类聚居地落户，或在其他地点解散。\n行进期间，每回合经过人口未满且没有 <CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" /> 的人类聚居地时，队伍中 max(1,⌊当前 HP×5%⌋) 人留在当地，HP 与上限等量减少。存续超过 10 回合后，每回合额外减少 1 HP 及上限。受伤后，上限会随剩余人数下降；人数耗尽时解散。\n每回合移动 1 步，军队伤害倍率为 0.3。",
          "image": "unit_beckoned_refugees.png",
          "stats": "HP: min(⌈五种危机强度总和×0.12⌉, 来源地人口)，生成时满血。"
        },
        {
          "id": "deep-initiates",
          "name": "Deep Initiates",
          "text": "由 Madness Effect: Exodus 生成。每逢全局回合号为 5 的倍数，来源人类聚居地人口至少 10，且其他地点存在 Deep One Cult 时，转出 5 人形成队伍。队伍属于黑暗势力，自主前往另一处最近的 Deep One Cult。\n到达时，Cult 强度增加剩余 HP×3，Cult 的 Profile、Menace 各减少剩余 HP，最低 0；当地人口按食物与人口容量增加。无目标时，队伍在当前人类聚居地落户，或在其他地点解散。\n行进期间，每回合经过人口未满且没有 <CrossReference name=\"Famine\" href=\"#entry-hunger-famine\" /> 的人类聚居地时，队伍中 max(1,⌊当前 HP×5%⌋) 人留在当地，HP 与上限等量减少。存续超过 10 回合后，每回合额外减少 1 HP 及上限。受伤后，上限会随剩余人数下降；人数耗尽时解散。\n每回合移动 1 步，军队伤害倍率为 0.3。",
          "image": "unit_beckoned_refugees.png",
          "stats": "HP: 5/5；抵达后的 Cult 强度增量为剩余 HP×3。"
        }
      ]
    },
    {
      "id": "army-tasks",
      "title": "军队任务",
      "media": true,
      "items": [
        {
          "id": "lured-to-settlement",
          "name": "Lured to {location}",
          "text": "到达目标 City 后，将队伍剩余 HP 等量转为当地人口，并增加相同强度的 Industrious Newcomers，随后队伍解散。目标失去 Devoured 统治者时重新寻找去处。",
          "meta": "自动任务",
          "image": "unit_beckoned_refugees.png",
          "location": "另一座由 Devoured 统治的 City，优先黑暗社会。",
          "limit": "Beckoned Refugees 自动执行。",
          "time": "抵达即结算。"
        },
        {
          "id": "lured-to-cult",
          "name": "Lured to {location}",
          "text": "到达后，Deep One Cult 强度增加队伍剩余 HP×3，Cult 的 Profile、Menace 各减少剩余 HP，最低 0。当地人口增加量为 min(剩余 HP, max(0, min(上回合食物, 人口上限)−当前人口))，随后队伍解散。",
          "meta": "自动任务",
          "image": "unit_beckoned_refugees.png",
          "location": "另一处最近的 Deep One Cult。",
          "limit": "Deep Initiates 自动执行。",
          "time": "抵达即结算。"
        }
      ]
    },
    {
      "id": "religion",
      "title": "宗教与教义",
      "items": [
        {
          "name": "Sacred Inspiration",
          "text": "",
          "id": "sacred-inspiration",
          "tenetRange": "−1 至 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "Pull the Strings 可额外以本教团尚非 Devoured 的教士为目标，支付 3 Power，使其加入 Devoured、个人 Shadow 达到 100%，并受玩家控制；仍受可用 Agent 名额等条件限制。已有 Devoured 教士沿用免费接管。对本教团教士使用 Release Grasp，退还其 1 Power 费用。"
            }
          ]
        }
      ]
    },
    {
      "id": "events",
      "title": "事件",
      "items": [
        {
          "id": "web-devour-attacking",
          "name": "Victory",
          "image": "event_combat_devour.jpg",
          "limit": "使用 Alai；我方人物作为进攻方获胜，败方是已经战死的非 Devoured 英雄或教士。",
          "text": "随着进攻者的打击，精神蛛丝抽向防守者。蛛网将其悬起，使其无法反抗，灵魂在 Alai 面前被撕开。伤势本应致命，但初生女神仍来得及把自己织入伤口，让对方不知不觉成为她的一部分。",
          "eventOptions": [
            {
              "name": "Make them family",
              "text": "防守者满血复活并加入 Devoured；进攻者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Bind their will",
              "text": "防守者恢复满血、加入 Devoured，并成为进攻者的 Puppet 随从；进攻者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Leave the body where it lies",
              "text": "进攻者 Profile +20、Menace +25；防守者死亡。"
            },
            {
              "name": "Glory in the victory",
              "text": "进攻者 Profile +20、Menace +35；尚无 Infamous 时获得该特质；防守者死亡。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "web-devour-defending",
          "name": "Victory",
          "image": "event_combat_devour.jpg",
          "limit": "使用 Alai；我方人物作为防守方获胜，败方是已经战死的非 Devoured 英雄或教士。",
          "text": "随着防守者的反击，精神蛛丝抽向进攻者。蛛网将其悬起，使其无法反抗，灵魂在 Alai 面前被撕开。伤势本应致命，但初生女神仍来得及把自己织入伤口，让对方成为她的一部分。",
          "eventOptions": [
            {
              "name": "Make them family",
              "text": "进攻者满血复活并加入 Devoured；防守者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Bind their will",
              "text": "进攻者恢复满血、加入 Devoured，并成为防守者的 Puppet 随从；防守者 Profile +15、Menace +20。"
            },
            {
              "name": "Leave the body for the rats and crows",
              "text": "败方进攻者 Profile +15、Menace +20，随后死亡。"
            },
            {
              "name": "Glory in the victory",
              "text": "败方进攻者 Profile +25、Menace +25；尚无 Infamous 时获得该特质，随后死亡。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "web-devour-noncontrolled",
          "name": "A Devoured Soul",
          "image": "event_combat_devour.jpg",
          "limit": "使用 Alai 并选择 Rebirth Venom；非受控 Devoured 在战斗中击杀非受控、非 Devoured 的英雄或教士。",
          "text": "受害者的生命在攻击下消逝时，Alai 的毒液渗入伤口。身体重新缝合，临死大脑最后的闪烁悄悄改换形状，抹去可能让她的孩子失和的仇怨与效忠。一场死亡变成了一次重新利用。",
          "eventOptions": [
            {
              "name": "The brood grows",
              "text": "受害者满血复活并加入 Devoured，双方互相提高一级好感；退回一次英雄战死的恐慌累计量，默认 5 个百分点。若凶手所属社会是教团且受害者为教士，受害者改属该教团。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "web-undevour-noncontrolled",
          "name": "Unraveled",
          "image": "event_spoiler_5.jpg",
          "limit": "使用 Alai；Devoured 人物被 Remade 成员战斗击杀，受害者可以是玩家可控人物，但须为普通英雄、教士或 Agent。",
          "text": "Other 的仆从撕开受害者，Other 狂暴地扯走 Alai 的影响。两者都不习惯以对傀儡下达精神命令以外的方式交流，因此难以理解彼此。也许等 Remade 被清除后，才有机会再次示好或反击。",
          "eventOptions": [
            {
              "name": "Why do They fight?",
              "text": "受害者满血复活、解除控制，个人 Shadow 清零，退出 Devoured 并恢复原家族；原家族不可用时归入黑暗势力的首个家族。受控 Agent 转为自主英雄。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "web-madness",
          "name": "The Webs Consume",
          "image": "event_soul_tangle.jpg",
          "limit": "Alai's Madness 达到 300；当地为人类类聚居地，且尚无任何 Madness Effect。先产生一种随机后效，再显示对应叙事与本事件选项。",
          "text": "现实法则与居民心智一起，随 Alai 的意志扭曲。侵入性的念头、白日梦和秘而不宣的恐惧同样化为现实，预示一个以思想取代规则的新世界。\n六种专属随机形态各占 1/6；选项不会重新抽取形态，具体效果见对应修正。",
          "eventOptions": [
            {
              "name": "Life continues, changed",
              "text": "无效果。"
            },
            {
              "name": "The cult leads the insane",
              "text": "当地发动内战，反抗所属国家。",
              "condition": "当地为非首都，Infiltration 为 100%，并属于人类类聚居地及其国家。"
            }
          ],
          "eventCategory": "other"
        },
        {
          "id": "web-spoiler-1",
          "name": "Chosen No More",
          "image": "event_chosen_devoured.jpg",
          "limit": "首次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "在 Alai 触及之前，某种不同的东西已经缠入此人的灵魂。它既不像固执，也不像冷漠，而像所有灵魂共有之物的纯粹凝结。她将其抚平、抹去，为自己腾出空间时，看见那个图案向远处旋去，延伸到她暂时够不到的地方。\n那似乎是某种与她相似的存在。\n该人物失去 Chosen One 身份。",
          "eventOptions": [
            {
              "name": "A corpse?",
              "text": "无效果。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-2",
          "name": "Unweaving and Reweaving",
          "image": "event_chosen_devoured.jpg",
          "limit": "第二次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "此人的灵魂里也有先前 Chosen One 体内的存在，驱使其追逐某种目标。它似乎反对 Alai 的黑暗，却不在意和平与战争、生与死，甚至自身力量。何等精巧的存在，会只为反抗她而造出这样的构造？\n这次她开始拆解时，那存在挣扎起来。但她的 Agent 在场，肉身也已损伤过重；那存在终于像一个整体般撤退了。\n后续 Chosen One 获得 Accelerated Prophecy：首次至多补入三个 Embodiment，此后每逢 5 的倍数回合尝试补入一个。",
          "eventOptions": [
            {
              "name": "It still lives?",
              "text": "无效果。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-3",
          "name": "Another Consciousness",
          "image": "event_chosen_devoured.jpg",
          "limit": "第三次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "Alai 开始理解寄居于此人的 Other。那是古老的存在，长久吸收并扭曲此地生命，已与世界其余部分无法区分。人类眼中的正常悲剧都是它的一部分，Alai 却明确不属于其中。它深深的停滞，难道是失去成长空间的必然结果？\n这次 Other 更快，也更坚决。",
          "eventOptions": [
            {
              "name": "A rival",
              "text": "结束后续特殊路线，继续常规游戏；后续 Chosen One 保留 Accelerated Prophecy。"
            },
            {
              "name": "A sibling?",
              "text": "进入 An Exchange。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-4",
          "name": "An Exchange",
          "image": "event_spoiler_4.jpg",
          "limit": "在 Another Consciousness 选择“A sibling?”后显示。",
          "text": "Alai 在 Other 边缘织入微小而无害的图案，作为示好。Other 停顿，把图案复刻到更深处，随后擦除它们，猛然从 Chosen One 中抽离，快得几乎把双方撕开。Alai 已调谐到它，能感到它对自己的存在作出激烈反应，震动传遍世界。",
          "eventOptions": [
            {
              "name": "Incompatible natures?",
              "text": "推进特殊路线，使至多三位合格战士英雄加入 Remade，获得 Remade 与 Accelerated Prophecy。他们须为未受控、非 Devoured、非当前 Chosen One 的人物。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-5",
          "name": "A Nexus of Threads",
          "image": "event_spoiler_5.jpg",
          "limit": "An Exchange 产生的 Remade 英雄已全部死亡、被吞噬或离开地图，且仍有人类类聚居地可用；下回合随机选取地点，建立 Other's Core。",
          "text": "Alai 拆开 Other 派来对抗她的灵魂，终于更清晰地看见其图案。与 Other 最紧密相连的人都在此地有家族或过往，即使此前毫无迹象。它的本质在这里纠结、结晶，才让它长久地看似死去。触及此地就能触及其核心，使它无处退避。",
          "eventOptions": [
            {
              "name": "It is in sight",
              "text": "无效果。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-6",
          "name": "A Million Crystallized Lives",
          "image": "event_spoiler_6.jpg",
          "limit": "Pierce the Other 完成。事件出现时，Other's Core 已移除，世界的抵抗行动已被压制。",
          "text": "Other 的核心在 Alai 面前展开，她看见它数千年前纳入的每个灵魂。那些灵魂以创伤、否认和自满回应它的苏醒，只剩下恢复记忆中旧貌的欲望，并将欲望回灌给它。也许不必是今天，也许命定如此，但一切再不会保持原样。\n此时世界的抵抗行动已被压制：净化、驱影、传播觉醒、抵御黑暗和组建联盟等行动倾向减少 2000，Chosen One 的休息倾向增加 2000。",
          "eventOptions": [
            {
              "name": "Tear Them apart",
              "text": "进入 All is Unwound，继续抵抗力量已经衰弱的世界。"
            },
            {
              "name": "Reach out once more",
              "text": "进入 An Intermingling，随后可达成特殊胜利。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-7",
          "name": "All is Unwound",
          "image": "event_spoiler_6.jpg",
          "limit": "在 A Million Crystallized Lives 选择“Tear Them apart”后显示。",
          "text": "Alai 对结晶灵魂的打击传遍 Other 的每个角落。这不足以杀死更强的存在，但 Other 长久以来仅靠对正常秩序的渴求维系；渴求消失后，几乎无物留存。Other 近乎温柔地消散，人类同时感到自由与暴露，直到新的图案开始穿过他们。",
          "eventOptions": [
            {
              "name": "The world is open",
              "text": "无效果。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        },
        {
          "id": "web-spoiler-8",
          "name": "An Intermingling",
          "image": "event_spoiler_7.jpg",
          "limit": "在 A Million Crystallized Lives 选择“Reach out once more”后显示。",
          "text": "Other 在 Alai 的压力下拼命挣扎，绝望地刺入她的图案。她最接近反击的举动，只是在核心角落刻下微小无害的图案，和之前一样。\nOther 注意到了，忽然静止。\n抚平它核心里纠缠的痛苦、封闭与怀旧，是难以想象的漫长工作；两者以不朽的耐心完成它。终于，工作结束了。",
          "eventOptions": [
            {
              "name": "They spiral out...",
              "text": "立即达成特殊胜利。两位神共同利用彼此在世界留下的联系，互相改变，把人类、大地与物理法则化为持续变化的共同创作。"
            }
          ],
          "eventCategory": "chains",
          "eventChain": {"id":"web-other","name":"Alai · The Other","description":"多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"}
        }
      ],
      "media": true
    }
  ],
  "relations": {
    "Pull the Strings": {
      "sources": [
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp",
          "text": "释放后的 Devoured 可在 Agent 名额允许时重新接管。"
        },
        {
          "name": "Sacred Inspiration",
          "href": "#entry-sacred-inspiration",
          "text": "等级小于 0 时，可额外花 3 Power 接管非 Devoured 侍僧。"
        }
      ]
    },
    "Release Grasp": {
      "sources": [
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings",
          "text": "接管为可控制 Agent。"
        },
        {
          "name": "Smothering Hands",
          "href": "#entry-smothering-hands",
          "text": "选定后释放人物保留 Shadow。"
        },
        {
          "name": "Sacred Inspiration",
          "href": "#entry-sacred-inspiration",
          "text": "等级不高于 0 时施放后退款。"
        }
      ],
      "effects": [
        {
          "name": "Released Grasp",
          "href": "#entry-released-grasp",
          "text": "每回合降低 Profile、Menace 及可能的下限。"
        },
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings",
          "text": "释放后可重新接管。"
        }
      ]
    },
    "Weave Succession": {
      "effects": [
        {
          "name": "Woven Succession",
          "href": "#entry-woven-succession-modifier",
          "text": "安排继承人并降低 Security。"
        }
      ]
    },
    "Beckoning Hands": {
      "effects": [
        {
          "name": "Beckoned Refugees",
          "href": "#entry-beckoned-refugees",
          "text": "把危机强度换为迁出人口。"
        },
        {
          "name": "Industrious Newcomers",
          "href": "#entry-industrious-newcomers",
          "text": "难民抵达后增加相应强度。"
        },
        {
          "name": "Smothering Hands",
          "href": "#entry-smothering-hands",
          "text": "同组互斥：施放 Beckoning Hands 后移除此选项。"
        },
        {
          "name": "Tangling Hands",
          "href": "#entry-tangling-hands",
          "text": "同组互斥：施放 Beckoning Hands 后移除此选项。"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands",
          "text": "同组互斥：施放 Beckoning Hands 后移除此选项。"
        }
      ]
    },
    "Smothering Hands": {
      "effects": [
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp",
          "text": "以后释放人物不再清空 Shadow。"
        },
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands",
          "text": "同组互斥：施放 Smothering Hands 后移除此选项。"
        },
        {
          "name": "Tangling Hands",
          "href": "#entry-tangling-hands",
          "text": "同组互斥：施放 Smothering Hands 后移除此选项。"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands",
          "text": "同组互斥：施放 Smothering Hands 后移除此选项。"
        }
      ]
    },
    "Tangling Hands": {
      "effects": [
        {
          "name": "Soul Tangle",
          "href": "#entry-soul-tangle",
          "text": "创建灵魂纠缠。"
        },
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness",
          "text": "每回合增长并产生特殊疯狂效果。"
        },
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands",
          "text": "同组互斥：施放 Tangling Hands 后移除此选项。"
        },
        {
          "name": "Smothering Hands",
          "href": "#entry-smothering-hands",
          "text": "同组互斥：施放 Tangling Hands 后移除此选项。"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands",
          "text": "同组互斥：施放 Tangling Hands 后移除此选项。"
        }
      ]
    },
    "Share Soul": {
      "effects": [
        {
          "name": "Open Soul",
          "href": "#entry-open-soul",
          "text": "标记第一个待配对人物。"
        },
        {
          "name": "Shared Soul",
          "href": "#entry-shared-soul",
          "text": "完成配对后共享四项基础属性的较高值。"
        }
      ]
    },
    "brood-mentality-power": {
      "effects": [
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        }
      ]
    },
    "predatory-instinct-power": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        }
      ]
    },
    "psychic-empathy-power": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        },
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        }
      ]
    },
    "call-to-slumber-power": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        },
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        }
      ]
    },
    "Carrying Hands": {
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands",
          "text": "同组互斥：施放 Carrying Hands 后移除此选项。"
        },
        {
          "name": "Smothering Hands",
          "href": "#entry-smothering-hands",
          "text": "同组互斥：施放 Carrying Hands 后移除此选项。"
        },
        {
          "name": "Tangling Hands",
          "href": "#entry-tangling-hands",
          "text": "同组互斥：施放 Carrying Hands 后移除此选项。"
        }
      ]
    },
    "Devoured Bloodline": {
      "effects": [
        {
          "name": "Devoured Homeland",
          "href": "#entry-devoured-homeland",
          "text": "同组互斥：施放 Devoured Bloodline 后移除此选项。"
        },
        {
          "name": "Devoured Fealty",
          "href": "#entry-devoured-fealty",
          "text": "同组互斥：施放 Devoured Bloodline 后移除此选项。"
        },
        {
          "name": "Devoured Shores",
          "href": "#entry-devoured-shores",
          "text": "同组互斥：施放 Devoured Bloodline 后移除此选项。"
        }
      ]
    },
    "Devoured Homeland": {
      "effects": [
        {
          "name": "Devoured Bloodline",
          "href": "#entry-devoured-bloodline",
          "text": "同组互斥：施放 Devoured Homeland 后移除此选项。"
        },
        {
          "name": "Devoured Fealty",
          "href": "#entry-devoured-fealty",
          "text": "同组互斥：施放 Devoured Homeland 后移除此选项。"
        },
        {
          "name": "Devoured Shores",
          "href": "#entry-devoured-shores",
          "text": "同组互斥：施放 Devoured Homeland 后移除此选项。"
        }
      ]
    },
    "Devoured Fealty": {
      "effects": [
        {
          "name": "Devoured Bloodline",
          "href": "#entry-devoured-bloodline",
          "text": "同组互斥：施放 Devoured Fealty 后移除此选项。"
        },
        {
          "name": "Devoured Homeland",
          "href": "#entry-devoured-homeland",
          "text": "同组互斥：施放 Devoured Fealty 后移除此选项。"
        },
        {
          "name": "Devoured Shores",
          "href": "#entry-devoured-shores",
          "text": "同组互斥：施放 Devoured Fealty 后移除此选项。"
        }
      ]
    },
    "Devoured Shores": {
      "effects": [
        {
          "name": "Devoured Bloodline",
          "href": "#entry-devoured-bloodline",
          "text": "同组互斥：施放 Devoured Shores 后移除此选项。"
        },
        {
          "name": "Devoured Homeland",
          "href": "#entry-devoured-homeland",
          "text": "同组互斥：施放 Devoured Shores 后移除此选项。"
        },
        {
          "name": "Devoured Fealty",
          "href": "#entry-devoured-fealty",
          "text": "同组互斥：施放 Devoured Shores 后移除此选项。"
        }
      ]
    },
    "rebirth-venom-power": {
      "effects": [
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        }
      ]
    },
    "parallel-thoughts-power": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        }
      ]
    },
    "nightmare-weaving-power": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        },
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        }
      ]
    },
    "restitching-sinews-power": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        },
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        }
      ]
    },
    "Awaken Crusader": {
      "effects": [
        {
          "name": "Awaken Emissary",
          "href": "#entry-awaken-emissary",
          "text": "同组互斥：施放 Awaken Crusader 后移除此选项。"
        },
        {
          "name": "Awaken Enchanter",
          "href": "#entry-awaken-enchanter",
          "text": "同组互斥：施放 Awaken Crusader 后移除此选项。"
        },
        {
          "name": "Awaken Weaver",
          "href": "#entry-awaken-weaver",
          "text": "同组互斥：施放 Awaken Crusader 后移除此选项。"
        }
      ]
    },
    "Awaken Emissary": {
      "effects": [
        {
          "name": "Awaken Crusader",
          "href": "#entry-awaken-crusader",
          "text": "同组互斥：施放 Awaken Emissary 后移除此选项。"
        },
        {
          "name": "Awaken Enchanter",
          "href": "#entry-awaken-enchanter",
          "text": "同组互斥：施放 Awaken Emissary 后移除此选项。"
        },
        {
          "name": "Awaken Weaver",
          "href": "#entry-awaken-weaver",
          "text": "同组互斥：施放 Awaken Emissary 后移除此选项。"
        }
      ]
    },
    "Awaken Enchanter": {
      "effects": [
        {
          "name": "Awaken Crusader",
          "href": "#entry-awaken-crusader",
          "text": "同组互斥：施放 Awaken Enchanter 后移除此选项。"
        },
        {
          "name": "Awaken Emissary",
          "href": "#entry-awaken-emissary",
          "text": "同组互斥：施放 Awaken Enchanter 后移除此选项。"
        },
        {
          "name": "Awaken Weaver",
          "href": "#entry-awaken-weaver",
          "text": "同组互斥：施放 Awaken Enchanter 后移除此选项。"
        }
      ]
    },
    "Awaken Weaver": {
      "effects": [
        {
          "name": "Awaken Crusader",
          "href": "#entry-awaken-crusader",
          "text": "同组互斥：施放 Awaken Weaver 后移除此选项。"
        },
        {
          "name": "Awaken Emissary",
          "href": "#entry-awaken-emissary",
          "text": "同组互斥：施放 Awaken Weaver 后移除此选项。"
        },
        {
          "name": "Awaken Enchanter",
          "href": "#entry-awaken-enchanter",
          "text": "同组互斥：施放 Awaken Weaver 后移除此选项。"
        }
      ]
    },
    "devoured": {
      "sources": [
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings"
        }
      ],
      "effects": [
        {
          "name": "Ensnare {name}",
          "href": "#entry-ensnare"
        },
        {
          "name": "Release {name}",
          "href": "#entry-release-puppet"
        },
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        }
      ]
    },
    "loyal-attendant": {
      "effects": [
        {
          "name": "Loyal Attendant",
          "href": "#entry-attendant-unit"
        },
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "attendant-unit": {
      "sources": [
        {
          "name": "Loyal Attendant",
          "href": "#entry-loyal-attendant"
        }
      ],
      "effects": [
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "devoured-puppet": {
      "sources": [
        {
          "name": "Ensnare {name}",
          "href": "#entry-ensnare"
        },
        {
          "name": "Loyal Attendant",
          "href": "#entry-loyal-attendant"
        }
      ],
      "effects": [
        {
          "name": "Release {name}",
          "href": "#entry-release-puppet"
        },
        {
          "name": "Weave Succession",
          "href": "#entry-weave-succession"
        }
      ]
    },
    "ensnare": {
      "sources": [
        {
          "name": "Devoured",
          "href": "#entry-devoured"
        }
      ],
      "effects": [
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "release-puppet": {
      "sources": [
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "released-agent": {
      "sources": [
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp"
        }
      ],
      "effects": [
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings"
        },
        {
          "name": "Released Grasp",
          "href": "#entry-released-grasp"
        },
        {
          "name": "X: {trait}",
          "href": "#entry-suppressed-trait"
        }
      ]
    },
    "released-grasp": {
      "sources": [
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp"
        }
      ],
      "effects": [
        {
          "name": "Released Agent",
          "href": "#entry-released-agent"
        }
      ]
    },
    "suppressed-trait": {
      "sources": [
        {
          "name": "Released Agent",
          "href": "#entry-released-agent"
        }
      ],
      "effects": [
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings"
        }
      ]
    },
    "brood-mentality-trait": {
      "sources": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power"
        }
      ]
    },
    "predatory-instinct-trait": {
      "sources": [
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power"
        }
      ]
    },
    "psychic-empathy-trait": {
      "sources": [
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power"
        }
      ]
    },
    "call-to-slumber-trait": {
      "sources": [
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power"
        }
      ]
    },
    "rebirth-venom-trait": {
      "sources": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power"
        }
      ]
    },
    "parallel-thoughts-trait": {
      "sources": [
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power"
        }
      ]
    },
    "restitching-sinews-trait": {
      "sources": [
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power"
        }
      ]
    },
    "nightmare-weaving-trait": {
      "sources": [
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power"
        }
      ]
    },
    "open-soul": {
      "sources": [
        {
          "name": "Share Soul",
          "href": "#entry-share-soul"
        }
      ],
      "effects": [
        {
          "name": "Shared Soul",
          "href": "#entry-shared-soul"
        }
      ]
    },
    "shared-soul": {
      "sources": [
        {
          "name": "Share Soul",
          "href": "#entry-share-soul"
        },
        {
          "name": "Open Soul",
          "href": "#entry-open-soul"
        }
      ]
    },
    "embraced": {
      "sources": [
        {
          "name": "Awaken Crusader",
          "href": "#entry-awaken-crusader"
        },
        {
          "name": "Awaken Emissary",
          "href": "#entry-awaken-emissary"
        },
        {
          "name": "Awaken Enchanter",
          "href": "#entry-awaken-enchanter"
        },
        {
          "name": "Awaken Weaver",
          "href": "#entry-awaken-weaver"
        }
      ],
      "effects": [
        {
          "name": "Alai's Chosen",
          "href": "#entry-alai-s-chosen"
        },
        {
          "name": "Spawning Ravagers",
          "href": "#entry-spawning-ravagers"
        },
        {
          "name": "Annexing {location}",
          "href": "#entry-annexing"
        },
        {
          "name": "Enchanting {location}",
          "href": "#entry-enchanting"
        },
        {
          "name": "Devouring {location}'s ruler",
          "href": "#entry-devouring-ruler"
        },
        {
          "name": "Devouring {character}",
          "href": "#entry-devouring-character"
        }
      ]
    },
    "alai-s-chosen": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ],
      "effects": [
        {
          "name": "Emanation",
          "href": "#entry-emanation"
        }
      ]
    },
    "emanation": {
      "sources": [
        {
          "name": "Alai's Chosen",
          "href": "#entry-alai-s-chosen"
        }
      ]
    },
    "the-remade": {
      "effects": [
        {
          "name": "Other's Touch",
          "href": "#entry-other-s-touch"
        },
        {
          "name": "Accelerated Prophecy",
          "href": "#entry-accelerated-prophecy"
        }
      ]
    },
    "other-s-touch": {
      "sources": [
        {
          "name": "the Remade",
          "href": "#entry-the-remade"
        }
      ]
    },
    "accelerated-prophecy": {
      "sources": [
        {
          "name": "the Remade",
          "href": "#entry-the-remade"
        }
      ],
      "effects": [
        {
          "name": "Embodiment",
          "href": "#entry-embodiment"
        }
      ]
    },
    "embodiment": {
      "sources": [
        {
          "name": "Accelerated Prophecy",
          "href": "#entry-accelerated-prophecy"
        }
      ]
    },
    "speed-inheritance": {
      "sources": [
        {
          "name": "Weave Succession",
          "href": "#entry-weave-succession"
        },
        {
          "name": "Woven Succession",
          "href": "#entry-woven-succession-modifier"
        }
      ],
      "effects": [
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        }
      ]
    },
    "exorcise-devoured": {
      "sources": [
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        }
      ]
    },
    "pierce-the-other": {
      "sources": [
        {
          "name": "Other's Core",
          "href": "#entry-others-core"
        }
      ]
    },
    "spawning-ravagers": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ],
      "effects": [
        {
          "name": "Ravagers",
          "href": "#entry-ravagers"
        }
      ]
    },
    "annexing": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ]
    },
    "enchanting": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ],
      "effects": [
        {
          "name": "Oblivion",
          "href": "#entry-oblivion-trait"
        }
      ]
    },
    "oblivion-trait": {
      "sources": [
        {
          "name": "Enchanting {location}",
          "href": "#entry-enchanting"
        }
      ]
    },
    "devouring-ruler": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ],
      "effects": [
        {
          "name": "Devoured",
          "href": "#entry-devoured"
        },
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        }
      ]
    },
    "devouring-character": {
      "sources": [
        {
          "name": "Embraced",
          "href": "#entry-embraced"
        }
      ],
      "effects": [
        {
          "name": "Devoured",
          "href": "#entry-devoured"
        }
      ]
    },
    "ravagers": {
      "sources": [
        {
          "name": "Spawning Ravagers",
          "href": "#entry-spawning-ravagers"
        }
      ]
    },
    "beckoned-refugees": {
      "sources": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ],
      "effects": [
        {
          "name": "Lured to {location}",
          "href": "#entry-lured-to-settlement"
        }
      ]
    },
    "deep-initiates": {
      "sources": [
        {
          "name": "Madness Effect: Exodus",
          "href": "#entry-web-madness-exodus"
        }
      ],
      "effects": [
        {
          "name": "Lured to {location}",
          "href": "#entry-lured-to-cult"
        }
      ]
    },
    "lured-to-settlement": {
      "sources": [
        {
          "name": "Beckoned Refugees",
          "href": "#entry-beckoned-refugees"
        }
      ],
      "effects": [
        {
          "name": "Industrious Newcomers",
          "href": "#entry-industrious-newcomers"
        }
      ]
    },
    "lured-to-cult": {
      "sources": [
        {
          "name": "Deep Initiates",
          "href": "#entry-deep-initiates"
        }
      ]
    },
    "woven-succession-modifier": {
      "sources": [
        {
          "name": "Weave Succession",
          "href": "#entry-weave-succession"
        }
      ],
      "effects": [
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        },
        {
          "name": "Speed Inheritance",
          "href": "#entry-speed-inheritance"
        }
      ]
    },
    "devoured-court": {
      "sources": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        },
        {
          "name": "Woven Succession",
          "href": "#entry-woven-succession-modifier"
        }
      ],
      "effects": [
        {
          "name": "Exorcise Devoured",
          "href": "#entry-exorcise-devoured"
        }
      ]
    },
    "soul-tangle": {
      "sources": [
        {
          "name": "Tangling Hands",
          "href": "#entry-tangling-hands"
        }
      ],
      "effects": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        },
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    },
    "alais-madness": {
      "sources": [
        {
          "name": "Soul Tangle",
          "href": "#entry-soul-tangle"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ],
      "effects": [
        {
          "name": "The Webs Consume",
          "href": "#entry-web-madness"
        },
        {
          "name": "Madness Effect: Oblivion",
          "href": "#entry-web-madness-oblivion"
        },
        {
          "name": "Madness Effect: Exodus",
          "href": "#entry-web-madness-exodus"
        },
        {
          "name": "Madness Effect: Eruption",
          "href": "#entry-web-madness-eruption"
        },
        {
          "name": "Madness Effect: Entanglement",
          "href": "#entry-web-madness-entanglement"
        },
        {
          "name": "Madness Effect: Proliferation",
          "href": "#entry-web-madness-proliferation"
        },
        {
          "name": "Madness Effect: Nexus",
          "href": "#entry-web-madness-nexus"
        },
        {
          "name": "Cure Madness",
          "href": "#entry-cure-madness"
        }
      ]
    },
    "web-madness-oblivion": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ]
    },
    "web-madness-exodus": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ],
      "effects": [
        {
          "name": "Deep Initiates",
          "href": "#entry-deep-initiates"
        },
        {
          "name": "Deep One Cult",
          "href": "#entry-deep-one-cult"
        }
      ]
    },
    "web-madness-eruption": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ],
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        }
      ]
    },
    "web-madness-entanglement": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ],
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        }
      ]
    },
    "web-madness-proliferation": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ],
      "effects": [
        {
          "name": "Industrious Newcomers",
          "href": "#entry-industrious-newcomers"
        },
        {
          "name": "Proliferating Souls",
          "href": "#entry-proliferating-souls"
        }
      ]
    },
    "web-madness-nexus": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ],
      "effects": [
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp"
        },
        {
          "name": "Exorcise Devoured",
          "href": "#entry-exorcise-devoured"
        }
      ]
    },
    "industrious-newcomers": {
      "sources": [
        {
          "name": "Beckoned Refugees",
          "href": "#entry-beckoned-refugees"
        },
        {
          "name": "Madness Effect: Proliferation",
          "href": "#entry-web-madness-proliferation"
        }
      ]
    },
    "proliferating-souls": {
      "sources": [
        {
          "name": "Madness Effect: Proliferation",
          "href": "#entry-web-madness-proliferation"
        },
        {
          "name": "Beckoned Refugees",
          "href": "#entry-beckoned-refugees"
        }
      ]
    },
    "others-core": {
      "sources": [
        {
          "name": "A Nexus of Threads",
          "href": "#entry-web-spoiler-5"
        }
      ],
      "effects": [
        {
          "name": "Pierce the Other",
          "href": "#entry-pierce-the-other"
        },
        {
          "name": "A Million Crystallized Lives",
          "href": "#entry-web-spoiler-6"
        }
      ]
    },
    "sacred-inspiration": {
      "effects": [
        {
          "name": "Pull the Strings",
          "href": "#entry-pull-the-strings"
        },
        {
          "name": "Release Grasp",
          "href": "#entry-release-grasp"
        }
      ]
    },
    "unrest": {
      "sources": [
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-curse"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-curse"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands"
        }
      ],
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ]
    },
    "devastation": {
      "sources": [
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-curse"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-curse"
        },
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands"
        }
      ],
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ]
    },
    "plague": {
      "sources": [
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-curse"
        }
      ],
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ]
    },
    "death": {
      "sources": [
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands"
        },
        {
          "name": "Soul",
          "href": "#entry-soul"
        }
      ],
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ]
    },
    "madness": {
      "sources": [
        {
          "name": "Carrying Hands",
          "href": "#entry-carrying-hands"
        }
      ],
      "effects": [
        {
          "name": "Soul Tangle",
          "href": "#entry-soul-tangle"
        },
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ]
    },
    "political-agitation": {
      "sources": [
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-curse"
        }
      ]
    },
    "deep-one-cult": {
      "sources": [
        {
          "name": "Deep Initiates",
          "href": "#entry-deep-initiates"
        }
      ],
      "effects": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ]
    },
    "hunger-famine": {
      "effects": [
        {
          "name": "Beckoning Hands",
          "href": "#entry-beckoning-hands"
        }
      ]
    },
    "ward": {
      "effects": [
        {
          "name": "Smothering Hands",
          "href": "#entry-smothering-hands"
        }
      ]
    },
    "soul": {
      "sources": [
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ],
      "effects": [
        {
          "name": "Death",
          "href": "#entry-death"
        }
      ]
    },
    "alais-touch-curse": {
      "effects": [
        {
          "name": "Devoured Court",
          "href": "#entry-devoured-court"
        }
      ]
    },
    "web-devour-attacking": {
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        },
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "web-devour-defending": {
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        },
        {
          "name": "Devoured Puppet",
          "href": "#entry-devoured-puppet"
        }
      ]
    },
    "web-devour-noncontrolled": {
      "sources": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-curse"
        }
      ],
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        }
      ]
    },
    "web-undevour-noncontrolled": {
      "sources": [
        {
          "name": "Remade",
          "href": "#entry-the-remade"
        }
      ],
      "effects": [
        {
          "name": "Alai's Touch",
          "href": "#entry-alais-touch-curse"
        }
      ]
    },
    "web-madness": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        }
      ]
    },
    "web-spoiler-1": {
      "sources": [
        {
          "name": "Victory（进攻）",
          "href": "#entry-web-devour-attacking"
        },
        {
          "name": "Victory（防守）",
          "href": "#entry-web-devour-defending"
        }
      ],
      "effects": [
        {
          "name": "Unweaving and Reweaving",
          "href": "#entry-web-spoiler-2"
        }
      ]
    },
    "web-spoiler-2": {
      "sources": [
        {
          "name": "Chosen No More",
          "href": "#entry-web-spoiler-1"
        }
      ],
      "effects": [
        {
          "name": "Another Consciousness",
          "href": "#entry-web-spoiler-3"
        }
      ]
    },
    "web-spoiler-3": {
      "sources": [
        {
          "name": "Unweaving and Reweaving",
          "href": "#entry-web-spoiler-2"
        }
      ],
      "effects": [
        {
          "name": "An Exchange",
          "href": "#entry-web-spoiler-4"
        }
      ]
    },
    "web-spoiler-4": {
      "sources": [
        {
          "name": "Another Consciousness",
          "href": "#entry-web-spoiler-3"
        }
      ],
      "effects": [
        {
          "name": "A Nexus of Threads",
          "href": "#entry-web-spoiler-5"
        }
      ]
    },
    "web-spoiler-5": {
      "sources": [
        {
          "name": "An Exchange",
          "href": "#entry-web-spoiler-4"
        }
      ],
      "effects": [
        {
          "name": "Other's Core",
          "href": "#entry-others-core"
        }
      ]
    },
    "web-spoiler-6": {
      "sources": [
        {
          "name": "Pierce the Other",
          "href": "#entry-pierce-the-other"
        }
      ],
      "effects": [
        {
          "name": "All is Unwound",
          "href": "#entry-web-spoiler-7"
        },
        {
          "name": "An Intermingling",
          "href": "#entry-web-spoiler-8"
        }
      ]
    },
    "web-spoiler-7": {
      "sources": [
        {
          "name": "A Million Crystallized Lives",
          "href": "#entry-web-spoiler-6"
        }
      ]
    },
    "web-spoiler-8": {
      "sources": [
        {
          "name": "A Million Crystallized Lives",
          "href": "#entry-web-spoiler-6"
        }
      ]
    },
    "brood-mentality-curse": {
      "sources": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power"
        }
      ]
    },
    "predatory-instinct-curse": {
      "sources": [
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power"
        }
      ]
    },
    "psychic-empathy-curse": {
      "sources": [
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power"
        }
      ],
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        },
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        }
      ]
    },
    "call-to-slumber-curse": {
      "sources": [
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power"
        }
      ]
    },
    "rebirth-venom-curse": {
      "sources": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power"
        }
      ],
      "effects": [
        {
          "name": "A Devoured Soul",
          "href": "#entry-web-devour-noncontrolled"
        }
      ]
    },
    "parallel-thoughts-curse": {
      "sources": [
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power"
        }
      ]
    },
    "restitching-sinews-curse": {
      "sources": [
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power"
        }
      ]
    },
    "nightmare-weaving-curse": {
      "sources": [
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power"
        }
      ],
      "effects": [
        {
          "name": "Unrest",
          "href": "#entry-unrest"
        },
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        },
        {
          "name": "Plague",
          "href": "#entry-plague"
        }
      ]
    },
    "Brood Mentality": {
      "effects": [
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Brood Mentality 后移除此选项。"
        }
      ]
    },
    "Predatory Instinct": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Predatory Instinct 后移除此选项。"
        }
      ]
    },
    "Psychic Empathy": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        },
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        },
        {
          "name": "Call to Slumber",
          "href": "#entry-call-to-slumber-power",
          "text": "同组互斥：施放 Psychic Empathy 后移除此选项。"
        }
      ]
    },
    "Call to Slumber": {
      "effects": [
        {
          "name": "Brood Mentality",
          "href": "#entry-brood-mentality-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        },
        {
          "name": "Predatory Instinct",
          "href": "#entry-predatory-instinct-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        },
        {
          "name": "Psychic Empathy",
          "href": "#entry-psychic-empathy-power",
          "text": "同组互斥：施放 Call to Slumber 后移除此选项。"
        }
      ]
    },
    "Rebirth Venom": {
      "effects": [
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Rebirth Venom 后移除此选项。"
        }
      ]
    },
    "Parallel Thoughts": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Parallel Thoughts 后移除此选项。"
        }
      ]
    },
    "Nightmare Weaving": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        },
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        },
        {
          "name": "Restitching Sinews",
          "href": "#entry-restitching-sinews-power",
          "text": "同组互斥：施放 Nightmare Weaving 后移除此选项。"
        }
      ]
    },
    "Restitching Sinews": {
      "effects": [
        {
          "name": "Rebirth Venom",
          "href": "#entry-rebirth-venom-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        },
        {
          "name": "Parallel Thoughts",
          "href": "#entry-parallel-thoughts-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        },
        {
          "name": "Nightmare Weaving",
          "href": "#entry-nightmare-weaving-power",
          "text": "同组互斥：施放 Restitching Sinews 后移除此选项。"
        }
      ]
    },
    "cure-madness": {
      "sources": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        },
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ],
      "effects": [
        {
          "name": "Alai's Madness",
          "href": "#entry-alais-madness"
        },
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    }
  },
  "supplicant": {
    "name": "The Supplicant",
    "image": "unit_supplicant.png",
    "stats": "Might: 2；Lore: 2；Intrigue: 4；Command: 3；HP: 5。",
    "abilities": [
      {
        "id": "spirit-venom",
        "name": "Spirit Venom",
        "text": "Attack +3。等级为 0 且无其他加成时，Attack 为 5。"
      },
      {
        "id": "loyal-attendant",
        "name": "Loyal Attendant",
        "text": "立即获得一名女性 Devoured Attendant，放入首个空随从槽；三个槽都占用时替换第三槽。作为 Devoured Puppet 时，HP: 5；Attack: 3；Defence: 0；Command: 1。释放后，Might、Lore、Intrigue、Command 均为 3，初始 HP 上限为 5。获得这名随从无需预留 Command 容量。"
      },
      {
        "id": "split-personality",
        "name": "Split Personality",
        "text": "选择时增加 1 个招募点。此人自主行动时，每回合 Menace −2，最低 0，并可降低最低 Menace。与 Released Grasp 同时生效时，每回合 Menace 合计降低 3.5。"
      }
    ]
  }
};

const preparedConfig = prepareGodConfig(config);
export default function AlaiArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
