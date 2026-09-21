"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "paradoxis",
  "name": "Paradoxis, Closer of Loops",
  "number": "18",
  "theme": "outsiders-theme paradoxis-theme",
  "assetDir": "out-of-gods",
  "background": "god_background2.jpg",
  "portrait": "god_portrait2.png",
  "flavour": "",
  "caption": "时间衰变、时间干预与闭合时间环",
  "maxTurns": "无回合上限",
  "awaken": "时间衰变达到 750 时失败",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "阈值",
  "unlockMethod": "累计时间衰变达到阈值",
  "dlc": "必须要 DLC",
  "sourceMod": "Out of Gods",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "Temporal Whiteshifting 开启时每回合恢复 0；关闭时每回合恢复 0.5。",
  "core": [
    "开局位于 Temporal Rift Site，使用具备 Cthonian Cultist 的 Supplicant 布置局势。Refugees 会从此处出发前往 Chosen One 的故乡。",
    "管理 Temporal Whiteshifting：开启时不恢复 Power，时间衰变每回合增加 1；关闭时恢复 0.5 Power，衰变每回合增加 2。",
    "用 Temporal Blueshift 1: Speed 加速人物，或用 Temporal Blueshift 2: Skip 补给金币；Temporal Blueshift 3: Hasten 提供短暂防护。每次施放都会额外推进时间衰变。",
    "用 Temporal Redshift 1: Slow、Temporal Redshift 2: Pause 和 Temporal Redshift 3: Stop 延缓干扰目标，为 Chosen One 留出完成任务的时间。",
    "时间衰变达到 300 后出现 Tindalosian Hound，达到 700 后开始持续入侵；保护 Chosen One 和替其挡下攻击的护卫。",
    "把世界恐慌推至 80% 以上，让 Chosen One 在时间衰变达到 750 前完成 Close Loop。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "开局地下世界认知设为 100%。普通 Agent 招募仍可使用；时间衰变封印只提高 Power 与 Agent 上限，七项神力均从封印 0 列出。",
    "playStyle": "以有限的时间衰变预算换取干预机会，同时扶持通常需要阻止的 Chosen One。Power 的恢复、加速和控制神力都在消耗倒计时余量。"
  },
  "specialVictory": "Chosen One 在 Temporal Rift Site 完成 Close Loop，立即胜利。常规胜利进度额外扣除 500 分。",
  "specialFailure": "时间衰变达到 750、打破第 4 道封印时立即失败。开局启用无尽模式，取消回合超时失败。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "powerRecovery": "1/0–0.5",
      "reward": [
        "Temporal Blueshift 1: Speed",
        "Temporal Blueshift 2: Skip",
        "Temporal Blueshift 3: Hasten",
        "Temporal Whiteshifting",
        "Temporal Redshift 1: Slow",
        "Temporal Redshift 2: Pause",
        "Temporal Redshift 3: Stop"
      ]
    },
    {
      "seal": 1,
      "progress": 100,
      "agents": 3,
      "powerRecovery": "2/0–0.5",
      "reward": []
    },
    {
      "seal": 2,
      "progress": 300,
      "agents": 4,
      "powerRecovery": "3/0–0.5",
      "reward": [
        "一次 Tindalosian Hound 入侵"
      ]
    },
    {
      "seal": 3,
      "progress": 700,
      "agents": 5,
      "powerRecovery": "4/0–0.5",
      "reward": [
        "持续 Tindalosian Hound 入侵"
      ]
    },
    {
      "seal": 4,
      "progress": 750,
      "agents": 6,
      "powerRecovery": "5/0–0.5",
      "reward": [
        "立即失败"
      ]
    }
  ],
  "powers": [
    {
      "name": "Temporal Blueshift 1: Speed",
      "seal": 0,
      "cost": 1,
      "icon": "time3.png",
      "effect": "使目标额外行动一次：未受控制的人物再执行一次完整回合；我方人物恢复移动次数，正在执行挑战时额外结算一次进度。时间衰变 +1。",
      "limit": "存活的人物单位，排除 Chosen One 与 Tindalosian Hound。"
    },
    {
      "name": "Temporal Blueshift 2: Skip",
      "seal": 0,
      "cost": 2,
      "icon": "time2.png",
      "effect": "目标获得 50 Gold；时间衰变 +6。",
      "limit": "存活的人物单位，排除 Chosen One 与 Tindalosian Hound。"
    },
    {
      "name": "Temporal Blueshift 3: Hasten",
      "seal": 0,
      "cost": 3,
      "icon": "time1.png",
      "effect": "赋予 Heightened Reflexes；时间衰变 +15。",
      "limit": "存活的人物单位，排除 Chosen One 与 Tindalosian Hound；目标不能已有 Heightened Reflexes 或其衰退状态 Exhausted Reflexes。"
    },
    {
      "name": "Temporal Whiteshifting",
      "seal": 0,
      "cost": 0,
      "icon": "time4.png",
      "effect": "切换时间保护。开启时每回合时间衰变 +1、恢复 0 Power；关闭时每回合时间衰变 +2、恢复 0.5 Power。开局处于开启状态。",
      "limit": "任意地点。"
    },
    {
      "name": "Temporal Redshift 1: Slow",
      "seal": 0,
      "cost": 1,
      "icon": "time5.png",
      "effect": "目标当前挑战的已完成进度 −5，最低为 0；时间衰变 +1。",
      "limit": "正在执行挑战的存活人物单位，排除 Chosen One 与 Tindalosian Hound。"
    },
    {
      "name": "Temporal Redshift 2: Pause",
      "seal": 0,
      "cost": 2,
      "icon": "time6.png",
      "effect": "销毁目标物品栏中第一个非空槽位的物品；时间衰变 +6。",
      "limit": "至少持有一件物品的存活人物单位，排除 Chosen One 与 Tindalosian Hound。"
    },
    {
      "name": "Temporal Redshift 3: Stop",
      "seal": 0,
      "cost": 3,
      "icon": "time7.png",
      "effect": "将目标当前行动替换为持续 15 回合的 Disrupted；时间衰变 +15。",
      "limit": "存活的人物单位，排除 Chosen One 与 Tindalosian Hound。"
    }
  ],
  "sections": [
    {
      "id": "traits",
      "title": "人物特质",
      "items": [
        {
          "name": "Heightened Reflexes",
          "text": "获得时增加 50 Defence。下一次特质回合结算时变为 Exhausted Reflexes，失去 Defence 加成；该特质继续保留，因此同一人物无法再次接受 Temporal Blueshift 3: Hasten。"
        }
      ]
    },
    {
      "id": "locations",
      "title": "地点与设施",
      "items": [
        {
          "name": "Temporal Rift Site",
          "image": "loc_evil_tomb.png",
          "text": "初始位置，替代 the Elder Tomb，Shadow 为 0；提供 Close Loop。地点的摧毁回调为空，因此不会被普通摧毁操作改为废墟。"
        }
      ]
    },
    {
      "id": "units",
      "title": "特殊人物与自主单位",
      "items": [
        {
          "name": "Tindalosian Hound",
          "image": "tindalos.png",
          "stats": "Might: 5 / Lore: 1 / Intrigue: 1 / Command: 1 / HP: 5",
          "text": "自主怪物，Profile 40、Menace 75。出现后持续追踪 Chosen One；与其同地时会优先攻击正在保护他的护卫。",
          "abilities": [
            {
              "name": "Hunting",
              "id": "hound-hunting",
              "text": "向 Chosen One 当前所在地点移动，抵达后发起人物战斗；护卫可拦截攻击。"
            }
          ]
        }
      ]
    },
    {
      "id": "hero-tasks",
      "title": "英雄任务",
      "items": [
        {
          "name": "Close Loop",
          "meta": "Lore",
          "text": "Chosen One 完成后立即触发特殊胜利。引导期间风险为 50。世界恐慌与常规胜利进度越高，执行意愿越强。",
          "image": "theProphecy.png",
          "location": "Temporal Rift Site",
          "statLine": "Complexity: 50 / Profile: 1000 / Menace: 0 / XP: 72",
          "positiveTags": "Ambition",
          "negativeTags": "无",
          "limit": "仅 Chosen One；世界恐慌至少 80%，地图历史生成已结束。距上次终极任务完成超过 40 回合、距上次尝试超过 27 回合；已经在执行该任务时可继续。"
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Refugees",
          "baseGame": true,
          "image": "unit_refugees.png",
          "stats": "HP: 50；最大 HP: 50，随人口减少而下降。",
          "text": "开局在 Temporal Rift Site 生成，所属国家与目的地取自 Chosen One 的故乡。抵达有剩余人口容量且无 Famine 的人类聚居地后，每回合安置当前人数的 5%，向下取整且至少 1 人；存在超过 10 回合后，每回合额外损失 1 人。军队伤害倍率为 0.3。"
        }
      ]
    },
    {
      "id": "mechanics",
      "title": "相关机制",
      "items": [
        {
          "name": "时间衰变",
          "id": "temporal-decay",
          "text": "累计阈值为 100、300、700、750，破封印后进度不清零。自然推进由 Temporal Whiteshifting 决定；每次蓝移或红移分别额外增加 1、6、15。每次增加进度最多触发一次破封印。\n封印恰为 2 时，对地点逐个进行 1% 概率检查，直到生成第一只 Tindalosian Hound 为止。封印恰为 3 时，每回合每个地点都有 1% 概率生成猎犬；进入该阶段并不保证立即生成。"
        }
      ]
    }
  ],
  "relations": {
    "Temporal Blueshift 3: Hasten": {
      "effects": [
        {
          "name": "Heightened Reflexes",
          "href": "#entry-heightened-reflexes"
        }
      ]
    },
    "Heightened Reflexes": {
      "sources": [
        {
          "name": "Temporal Blueshift 3: Hasten",
          "href": "#entry-temporal-blueshift-3-hasten"
        }
      ]
    },
    "Temporal Rift Site": {
      "effects": [
        {
          "name": "Close Loop",
          "href": "#entry-close-loop"
        }
      ]
    },
    "Close Loop": {
      "sources": [
        {
          "name": "Temporal Rift Site",
          "href": "#entry-temporal-rift-site"
        }
      ]
    },
    "Tindalosian Hound": {
      "sources": [
        {
          "name": "时间衰变",
          "href": "#entry-temporal-decay"
        }
      ]
    }
  },
  "heroMetric": {
    "value": "750",
    "label": "时间衰变上限"
  },
  "supplicant": {
    "image": "paradoxis-supplicant.png",
    "stats": "Might: 2 / Lore: 3 / Intrigue: 3 / Command: 2 / HP: 5",
    "abilities": [
      {
        "name": "Cthonian Cultist",
        "text": "赋予 Mastery of Death 1 与 Mastery of Geomancy 1。"
      },
      {
        "name": "Mastery of Death",
        "text": "开局等级 1，开放对应等级的 Death 魔法。",
        "baseGame": true
      },
      {
        "name": "Mastery of Geomancy",
        "text": "开局等级 1，开放对应等级的 Geomancy 魔法。",
        "baseGame": true
      }
    ]
  }
};

const preparedConfig = prepareGodConfig(config);
export default function ParadoxisArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
