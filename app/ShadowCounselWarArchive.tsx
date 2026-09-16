"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "shadow-counsel-war",
  "name": "Shadow Counsel, WAR-MODE",
  "number": "20",
  "theme": "outsiders-theme shadow-counsel-war-theme",
  "assetDir": "out-of-gods",
  "background": "god_background3.jpg",
  "portrait": "god_portrait3.png",
  "flavour": "",
  "caption": "性格操纵、帝国战争与军队支援",
  "maxTurns": "无回合上限",
  "awaken": "完成 Form Great Empire",
  "panic": "100%",
  "finalAgents": "0",
  "progressLabel": "阈值",
  "unlockMethod": "无常规封印推进，建立帝国时直接苏醒",
  "dlc": "必须要 DLC",
  "sourceMod": "Out of Gods",
  "powerCapacity": "神力上限固定为 2。",
  "powerRecovery": "每回合恢复 0.2。保留的 Power 同时提高 Dark Support 的战斗加成。",
  "core": [
    "开局移除全部人物单位，禁用 Chosen One 重生，取消回合上限。后续每回合也会清除新出现的人物单位。",
    "通过十项 Whisper 神力调整统治者的 Ambition、Co-Operation、Combat、Cruelty 和 Gold 偏好，促使国家采取需要的行动。",
    "推动一位君主完成 Form Great Empire。建国后神祇直接苏醒，所有人物 Awareness 设为 100%，帝国进入扩张路线。",
    "通过 Material 提供的 Support Sovereign、Civilian Initiatives、Reconstruction 与 Raise Army Quickly 维持政治、气候和军队状态。",
    "保留 Power，为帝国军队提供 Dark Support；每保留 1 Power，所参与一方的战斗杀伤系数加成增加 20 个百分点。",
    "通过 Dark Crusade 对最近的合适国家宣战，以帝国扩张积累胜利进度。"
  ],
  "overviewExtra": {
    "title": "",
    "text": "地图历史生成前，地下世界认知就设为 100%。开局每个未专精的 Orc Camp 有 1/3 概率改为可以进入地下的专精营地；当地原有的第一份 Deep One Cult 被移除。",
    "playStyle": "完全通过统治者性格与国家行为推动战争。没有人物行动层，神力使用时机与留存 Power 的战场增益构成主要取舍。"
  },
  "specialVictory": "无",
  "specialFailure": "开局启用无尽模式、禁用 Chosen One 重生并持续移除全部人物单位。未找到该模式另设的失败条件。",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "progressText": "开局",
      "agents": 0,
      "powerRecovery": "2/0.2",
      "reward": [
        "Whisper Prideful Temptations",
        "Whisper Prideful Warnings",
        "Whisper Submissive Temptations",
        "Whisper Submissive Warnings",
        "Whisper Bloodthirsty Temptations",
        "Whisper Bloodthirsty Warnings",
        "Whisper Sadistic Temptations",
        "Whisper Sadistic Warnings",
        "Whisper Materialistic Temptations",
        "Whisper Materialistic Warnings"
      ]
    }
  ],
  "powers": [
    {
      "name": "Whisper Prideful Temptations",
      "seal": 0,
      "cost": 1,
      "icon": "crown.png",
      "effect": "将统治者对 Ambition 的偏好提升一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度喜欢该标签，且普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Whisper Prideful Warnings",
      "seal": 0,
      "cost": 1,
      "icon": "abdicate.png",
      "effect": "将统治者对 Ambition 的偏好降低一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度厌恶该标签，且普通厌恶与极度厌恶的总数小于 5。"
    },
    {
      "name": "Whisper Submissive Temptations",
      "seal": 0,
      "cost": 1,
      "icon": "diplomacy.png",
      "effect": "将统治者对 Co-Operation 的偏好提升一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度喜欢该标签，且普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Whisper Submissive Warnings",
      "seal": 0,
      "cost": 1,
      "icon": "war.png",
      "effect": "将统治者对 Co-Operation 的偏好降低一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度厌恶该标签，且普通厌恶与极度厌恶的总数小于 5。"
    },
    {
      "name": "Whisper Bloodthirsty Temptations",
      "seal": 0,
      "cost": 1,
      "icon": "raid.png",
      "effect": "将统治者对 Combat 的偏好提升一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度喜欢该标签，且普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Whisper Bloodthirsty Warnings",
      "seal": 0,
      "cost": 1,
      "icon": "death.png",
      "effect": "将统治者对 Combat 的偏好降低一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度厌恶该标签，且普通厌恶与极度厌恶的总数小于 5。"
    },
    {
      "name": "Whisper Sadistic Temptations",
      "seal": 0,
      "cost": 1,
      "icon": "brutalJustice.png",
      "effect": "将统治者对 Cruelty 的偏好提升一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度喜欢该标签，且普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Whisper Sadistic Warnings",
      "seal": 0,
      "cost": 1,
      "icon": "reduceUnrest.png",
      "effect": "将统治者对 Cruelty 的偏好降低一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度厌恶该标签，且普通厌恶与极度厌恶的总数小于 5。"
    },
    {
      "name": "Whisper Materialistic Temptations",
      "seal": 0,
      "cost": 1,
      "icon": "tax.png",
      "effect": "将统治者对 Gold 的偏好提升一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度喜欢该标签，且普通喜欢与极度喜欢的总数小于 5。"
    },
    {
      "name": "Whisper Materialistic Warnings",
      "seal": 0,
      "cost": 1,
      "icon": "politicalInstability.png",
      "effect": "将统治者对 Gold 的偏好降低一档，并使 Awareness +10 个百分点，最高 100%。偏好依次为极度厌恶、厌恶、中立、喜欢、极度喜欢。",
      "limit": "有统治者的地点，排除 Chosen One；目标尚未极度厌恶该标签，且普通厌恶与极度厌恶的总数小于 5。"
    }
  ],
  "sections": [
    {
      "id": "location-modifiers",
      "title": "地点修正",
      "items": [
        {
          "name": "Material",
          "text": "每回合补至所有聚居地，为人类统治者提供 Support Sovereign、Civilian Initiatives、Reconstruction 和 Raise Army Quickly。",
          "image": "agitate.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          }
        },
        {
          "name": "Devastation",
          "text": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。\n达到 300 时，尚未成为 City Ruins 的聚居地会被摧毁。",
          "image": "./evil-beneath/devastation.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "非教程模式下，每回合强度 −0.5。",
            "external": "Reconstruction 完成时强度 −25。"
          }
        },
        {
          "name": "Political Agitation",
          "text": "地方统治者反对君主的政治活动，推动首都的 Political Instability，增加内战风险。",
          "image": "./kalastrophe/agitate.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "每回合强度 −1。",
            "external": "Support Sovereign 完成时强度 −20。"
          }
        }
      ]
    },
    {
      "id": "armies",
      "title": "军队",
      "items": [
        {
          "name": "Human Army",
          "image": "unit_humanArmy.png",
          "baseGame": true,
          "stats": "初始 HP: 5。最大 HP: ⌊故乡人口 × Prosperity⌋，每回合重算；本体国家与地点加成另计。",
          "text": "Raise Army Quickly 创建一支由所在人类聚居地支持的普通军队。所属国家成为帝国后，其参战一方可受到 Dark Support。"
        }
      ]
    },
    {
      "id": "ruler-actions",
      "title": "统治者行动",
      "items": [
        {
          "name": "Support Sovereign",
          "image": "agitate.png",
          "location": "同时存在 Material 与 Political Agitation 的非首都城市",
          "time": "7 回合",
          "positiveTags": "Co-Operation",
          "negativeTags": "Ambition、Combat、Danger",
          "text": "当地 Political Agitation 强度 −20。"
        },
        {
          "name": "Civilian Initiatives",
          "image": "give.png",
          "location": "Material 所在的人类聚居地",
          "time": "7 回合",
          "positiveTags": "无",
          "negativeTags": "Combat",
          "text": "完成时花费统治者 10 Gold，使当地领土每一格的温度向 0.5 靠近当前差距的 10%，随后刷新地形。",
          "limit": "统治者至少有 10 Gold；当地温度低于 0.49 或高于 0.51。"
        },
        {
          "name": "Reconstruction",
          "image": "humanColony.png",
          "location": "同时存在 Material 与 Devastation 的人类聚居地",
          "time": "7 回合",
          "positiveTags": "无",
          "negativeTags": "Gold、Cruelty",
          "text": "花费统治者 10 Gold，使当地 Devastation 强度 −25。",
          "limit": "统治者至少有 10 Gold。"
        },
        {
          "name": "Raise Army Quickly",
          "image": "humanArmy.png",
          "location": "Material 所在的人类聚居地",
          "time": "7 回合",
          "positiveTags": "Combat",
          "negativeTags": "无",
          "text": "创建一支 Human Army，替换当地支持军队的记录。没有现役支持军队时，执行倾向 +500；已有时 −500。代码没有扣除 Gold。"
        }
      ]
    },
    {
      "id": "national-actions",
      "title": "国家行动",
      "items": [
        {
          "name": "Form Great Empire",
          "image": "darkEmpire.png",
          "location": "符合条件国家的君主",
          "time": "10 回合",
          "positiveTags": "Shadow、Ambition、Cruelty、Combat",
          "negativeTags": "Co-Operation",
          "text": "国家成为帝国，神祇直接苏醒，世界中所有人物的 Awareness 设为 100%。此次建国不执行城市反叛筛选。基础倾向 −200，再加君主 Awareness ×100；偏好标签也参与国家行动评分。",
          "limit": "世界中没有 Dark Empire；国家有君主，且不属于 Alliance、Dark Empire 或神权控制国家。"
        },
        {
          "name": "Dark Crusade",
          "image": "darkEmpire.png",
          "location": "Dark Empire 的君主",
          "time": "1 回合",
          "positiveTags": "Shadow、Ambition、Cruelty、Combat",
          "negativeTags": "Co-Operation",
          "text": "向首都距离最近、君主位于地表且不属于 Alliance 或 Dark Empire 的国家宣战。基础执行倾向为 100；已经处于战争时再减 9999。"
        }
      ]
    },
    {
      "id": "mechanics",
      "title": "相关机制",
      "items": [
        {
          "name": "Dark Support",
          "image": "assaultChanneller.png",
          "text": "有帝国军队参战时，为该军队所在一方设置此战斗效果，并覆盖该方原有战斗效果。增加的杀伤系数＝0.2 × 当前未使用的 Power：0、1、2 Power 分别为 +0、+0.2、+0.4。数值随剩余 Power 动态变化。\n帝国存在带有该国家归属的单位时，世界恐慌的临时增量被设为 100 个百分点。"
        }
      ]
    }
  ],
  "relations": {
    "Material": {
      "effects": [
        {
          "name": "Support Sovereign",
          "href": "#entry-support-sovereign"
        },
        {
          "name": "Civilian Initiatives",
          "href": "#entry-civilian-initiatives"
        },
        {
          "name": "Reconstruction",
          "href": "#entry-reconstruction"
        },
        {
          "name": "Raise Army Quickly",
          "href": "#entry-raise-army-quickly"
        }
      ]
    },
    "Support Sovereign": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Political Agitation",
          "href": "#entry-political-agitation"
        }
      ]
    },
    "Civilian Initiatives": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ]
    },
    "Reconstruction": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Devastation",
          "href": "#entry-devastation"
        }
      ]
    },
    "Raise Army Quickly": {
      "sources": [
        {
          "name": "Material",
          "href": "#entry-material"
        }
      ],
      "effects": [
        {
          "name": "Human Army",
          "href": "#entry-human-army"
        }
      ]
    },
    "Human Army": {
      "sources": [
        {
          "name": "Raise Army Quickly",
          "href": "#entry-raise-army-quickly"
        }
      ],
      "effects": [
        {
          "name": "Dark Support",
          "href": "#entry-dark-support"
        }
      ]
    },
    "Dark Support": {
      "sources": [
        {
          "name": "Human Army",
          "href": "#entry-human-army"
        }
      ]
    },
    "Devastation": {
      "sources": [
        {
          "name": "Reconstruction",
          "href": "#entry-reconstruction"
        }
      ]
    },
    "Political Agitation": {
      "sources": [
        {
          "name": "Support Sovereign",
          "href": "#entry-support-sovereign"
        }
      ]
    },
    "Form Great Empire": {
      "effects": [
        {
          "name": "Dark Crusade",
          "href": "#entry-dark-crusade"
        }
      ]
    },
    "Dark Crusade": {
      "sources": [
        {
          "name": "Form Great Empire",
          "href": "#entry-form-great-empire"
        }
      ]
    }
  },
  "heroMetric": {
    "value": "建国",
    "label": "苏醒条件"
  }
};

const preparedConfig = prepareGodConfig(config);
export default function ShadowCounselWarArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
