import type { SectionConfig } from "./GodArchiveTypes";
export const locationRulerGroups: { id: string; sections: SectionConfig[] }[] = [
  {
    "id": "places-2879667447",
    "sections": [
      {
        "id": "places-2879667447-ruler-actions",
        "title": "统治者行动",
        "items": [
          {
            "id": "place-ruler-2879667447-act-blamedeepones",
            "name": "Blame Deep Ones",
            "text": "当地 Unrest 减半，世界恐慌临时增加 2 个百分点；加深当地针对 Deep Ones 的偏见。同国内对 Deep Ones 有极端偏好的人物可能改变对领主的好感。",
            "limit": "由 Deep One Prejudice 提供。Unrest ≥25，且当地有 Deep One Cult；或已有 Sanctum 且深海人口胜利占比至少 35%。",
            "time": "5 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Cruel",
            "negativeTags": "Deepones、Combat、Danger",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-requestaidagainstdeepones",
            "name": "Request Help Against Deep Ones",
            "text": "当地 Deep One Cult 的 Menace 增加 30，使其更容易成为英雄的目标。对 Deep Ones 极端痴迷的国内人物可能降低对领主的好感。",
            "limit": "当地有 Deep One Prejudice 与 Deep One Cult。",
            "time": "10 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Cooperation",
            "negativeTags": "Deepones、Danger",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-wipeoutdeeponecult",
            "name": "Destroy Deep One Cult",
            "text": "移除当地 Deep One Cult，Devastation 增加其强度的一半。君主执行时国家 Menace 减少 20；国内人物可能依照对 Deep Ones 的偏好改变好感。",
            "limit": "Mod 设置允许毁灭教团，且当地有 Deep One Cult。",
            "time": "10 回合",
            "image": "/locations/game/raze.png",
            "baseGame": false,
            "positiveTags": "Combat、Cruel",
            "negativeTags": "Deepones、Cooperation",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-supportdeepones",
            "name": "Support Deep Ones",
            "text": "消耗 50 Gold，为 Deep One Cult 增加 20 回合加速成长，Unrest +30。君主执行时国家 Menace +10，其他领主为 +5；国内人物可能改变好感。",
            "limit": "有 Deep One Sympathies 与 Deep One Cult，Gold ≥50。",
            "time": "5 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Deepones、Danger",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-establishdeeponecult",
            "name": "Create Deep One Cult",
            "text": "建立强度 1 的 Deep One Cult，Unrest +50，已有 Inundai Debt 减少 100。君主执行时国家 Menace +15，其他领主为 +5。完成代码没有扣除 Gold。",
            "limit": "沿海地点有 Deep One Sympathies，尚无 Deep One Cult；领主极端喜欢 Deep Ones，Gold ≥100。",
            "time": "10 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Deepones、Religion",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-concealdeepones",
            "name": "Downplay Deep Ones",
            "text": "Deep One Cult 的 Menace −30，最低 0；世界恐慌降低 2 个百分点，已有 Inundai Debt −25。君主执行时国家 Menace +10，其他领主为 +5。",
            "limit": "有 Deep One Sympathies，且 Deep One Cult 的 Menace ≥30。",
            "time": "10 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Cooperation、Deepones",
            "negativeTags": "Danger",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-embracedrownedprophet",
            "name": "Embrace Drowned Prophet",
            "text": "世界恐慌增加 2 个百分点，移除当地 Deep One Cult 与 Deep One Sympathies，领主死亡，地点归入 Drowned Prophet 教团，并创建规模 15 的 Breathless Horde。",
            "limit": "Drowned Prophet 存在；所在地已经信仰该教团，或领主极端喜欢 Deep Ones。由 Deep One Sympathies 提供。",
            "time": "10 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": false,
            "positiveTags": "Shadow、Deepones",
            "negativeTags": "无",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-drownedprophet-breathless",
            "name": "From the Waters",
            "text": "在当地创建一个 Breathless 自主单位。",
            "limit": "有 Drowned Prophet Domain，且所属教团或国家已经完成 Hymn of Transformation。",
            "time": "7 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconBreathless.png",
            "baseGame": false,
            "positiveTags": "Deepones",
            "negativeTags": "无",
            "location": "有 Drowned Prophet Domain 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-drownedprophet-horde",
            "name": "Mass Drownings",
            "text": "创建规模 20 的 Breathless Horde，人口减少随机 1–3，并增加损失人口 ×10 的 Death。人口耗尽则聚居地毁灭。",
            "limit": "有 Drowned Prophet Domain，且已发起 Abyssal Crusade。",
            "time": "5 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconBreathless.png",
            "baseGame": false,
            "positiveTags": "Deepones",
            "negativeTags": "无",
            "location": "有 Drowned Prophet Domain 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-drownedprophet-idle",
            "name": "Worship",
            "text": "无效果。",
            "limit": "由 Drowned Prophet Domain 提供。",
            "time": "7 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png",
            "baseGame": false,
            "positiveTags": "Deepones",
            "negativeTags": "无",
            "location": "有 Drowned Prophet Domain 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-seamonster-destroy",
            "name": "Destroy Abyssal Corpse",
            "text": "Abyssal Corpse 强度减半并进入加速销毁状态；已有 Unrest 减少 15。",
            "limit": "尸体强度 >0，且尚未选择销毁、掠夺或屠宰。",
            "time": "10 回合",
            "image": "/locations/game/hideInAbyss.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "Deepones、Discord、Madness",
            "location": "有 Abyssal Corpse 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-seamonster-food",
            "name": "Butcher Abyssal Corpse",
            "text": "领主获得 50 Gold，已有 Unrest 减少 10；尸体切换为屠宰用途，提高食物供应并加快腐败。",
            "limit": "当地有正强度 Abyssal Corpse，尚未选择处理用途。",
            "time": "10 回合",
            "image": "/locations/game/hideInAbyss.png",
            "baseGame": false,
            "positiveTags": "Deepones、Cooperation",
            "negativeTags": "Discord",
            "location": "有 Abyssal Corpse 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-seamonster-gold",
            "name": "Pillage Abyssal Corpse",
            "text": "领主获得 50 Gold；尸体切换为掠夺用途，提高当地 Prosperity 并加快腐败。",
            "limit": "当地有正强度 Abyssal Corpse，尚未选择处理用途。",
            "time": "10 回合",
            "image": "/locations/game/hideInAbyss.png",
            "baseGame": false,
            "positiveTags": "Deepones、Gold、Ambition",
            "negativeTags": "无",
            "location": "有 Abyssal Corpse 的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-acceptpatronage",
            "name": "Accept Inundai Patronage",
            "text": "获得 Inundai Patronage，并创建初始债额 −20 的 Inundai Debt。",
            "limit": "有未被封锁的 Inundai Presence，领主尚无 Inundai Patronage。",
            "time": "5 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaicult.png",
            "baseGame": false,
            "positiveTags": "Madness、Deepones、Ambition",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-blockpresence",
            "name": "Block Inundai Presence",
            "text": "消耗 100 Gold，封锁当地 Inundai Presence，Inundai Ire +15。全部 Presence 都被封锁后，移除 Inundai 相关人物特质与修正，将其教团转为普通 Deep One Cult，摧毁 Inundai Palace 并移除使者。",
            "limit": "当地 Presence 未被封锁；Gold ≥100，领主没有 Inundai Patronage。",
            "time": "5 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaiblocked.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "Deepones、Madness",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-coralstatue",
            "name": "Incomprehensible Rites",
            "text": "Sanity −3，已有 Coral Statues 强度 +25，已有 Inundai Debt −50。",
            "limit": "由 Coral Statues 提供，人口 >1，且当地 Inundai Presence 未被封锁。",
            "time": "5 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaicoralstatue.png",
            "baseGame": false,
            "positiveTags": "Madness、Discord、Deepones",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-createmadness",
            "name": "Spread Madness",
            "text": "Madness +15，Unrest +30。",
            "limit": "由 Inundai Debt 提供。",
            "time": "5 回合",
            "image": "/locations/game/madness.png",
            "baseGame": false,
            "positiveTags": "Madness、Discord",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-paydebt",
            "name": "Inundai Debt",
            "text": "以当地 Madness 的整数部分抵扣债务：足够时债务归零并减少一次欠款记录，不足时按可用量减债并增加一次欠款记录。完成代码未扣除 Madness。",
            "limit": "领主具有 Inundai Debt，且当地 Inundai Presence 未被封锁。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaithreat.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-food",
            "name": "Writhing Food",
            "text": "Writhing Food 强度 +30，Inundai Debt +50。",
            "limit": "由 Inundai Patronage 提供，且当地 Inundai Presence 未被封锁。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaifood.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-getwealth",
            "name": "Golden Scales",
            "text": "领主获得 25+⌊2 × 当地 Golden Scales 强度⌋ Gold；Golden Scales 强度 +25，Inundai Debt +25。",
            "limit": "由 Inundai Patronage 提供，且当地 Inundai Presence 未被封锁。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaigold.png",
            "baseGame": false,
            "positiveTags": "Gold",
            "negativeTags": "无",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-sanity",
            "name": "Protect Sanity",
            "text": "获得或延长 25 回合的 Sanity 保护；个人 Shadow 增加 15 个百分点，Inundai Debt +100。",
            "limit": "具有 Inundai Patronage，且当地 Inundai Presence 未被封锁。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaisanity.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "Madness",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-retribution",
            "name": "Promise of Retribution",
            "text": "个人 Shadow 增加 25 个百分点，Inundai Debt +50；使最厌恶的合格人类或精灵人物 Sanity −5。",
            "limit": "有 Inundai Patronage、未封锁 Presence，且存在存活、非玩家可控、未疯狂的仇视目标。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaiattack.png",
            "baseGame": false,
            "positiveTags": "Cruel",
            "negativeTags": "Cooperation",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          },
          {
            "id": "place-ruler-2879667447-act-inundai-unrest",
            "name": "Entrance Population",
            "text": "当地 Entranced Populace 强度 +25，Inundai Debt +50。",
            "limit": "有 Inundai Patronage、未封锁 Presence，且当地有 Unrest。",
            "time": "2 回合",
            "image": "/locations/mod/Wonderblunder_DeepOnes.iconinundaiunrest.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "Discord",
            "location": "有相应 Inundai 修正或领主特质的聚居地。"
          }
        ]
      }
    ]
  },
  {
    "id": "places-2932110698",
    "sections": [
      {
        "id": "places-2932110698-ruler-actions",
        "title": "统治者行动",
        "items": [
          {
            "id": "place-ruler-2932110698-act-nature-destructiveindustry",
            "name": "Destructive Industry",
            "text": "领主获得 ⌊45 × Prosperity × 人口/100⌋ Gold，Destructive Industry 增加 5。",
            "limit": "由 Living Wilds 的聚居地行动更新提供。",
            "time": "4 回合",
            "image": "/locations/mod/nature.property_destructive_industry.png",
            "baseGame": false,
            "positiveTags": "Gold",
            "negativeTags": "Nature",
            "location": "City。"
          },
          {
            "id": "place-ruler-2932110698-act-nature-enddestructiveindustry",
            "name": "End Destructive Industry",
            "text": "Destructive Industry 减少 5；当前完成代码没有实际扣除 Gold。",
            "limit": "当地有 Destructive Industry，且领主至少有 50 Gold。",
            "time": "4 回合",
            "image": "/locations/mod/nature.property_destructive_industry.png",
            "baseGame": false,
            "positiveTags": "Nature",
            "negativeTags": "Gold",
            "location": "有 Destructive Industry 的聚居地。"
          },
          {
            "id": "place-ruler-2932110698-act-nature-naturesanctuary",
            "name": "Nature Sanctuary",
            "text": "消耗 60 Gold，在相邻选定空地建立 Nature Sanctuary，保留原 Shadow。",
            "limit": "有合格相邻空地，统治者 Gold ≥60。",
            "time": "4 回合",
            "image": "/locations/mod/nature.property_sanctuary.png",
            "baseGame": false,
            "positiveTags": "Nature",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-2932110698-act-nature-organizehunt",
            "name": "Organize Hunt",
            "text": "消耗 50 Gold，在目标地建立强度 100 的 Wild Game，英雄可狩猎并为领主所在地补充食物；增加 125 狩猎冷却。",
            "limit": "已选出合格狩猎地点，尚无对应 Wild Game，Gold ≥50。",
            "time": "4 回合",
            "image": "/locations/mod/nature.property_wildgame.png",
            "baseGame": false,
            "positiveTags": "Nature",
            "negativeTags": "Gold",
            "location": "City。"
          },
          {
            "id": "place-ruler-2932110698-act-nature-plundersanctuary",
            "name": "Plunder Sanctuary",
            "text": "移除相邻 Nature Sanctuary，留下强度 100 的 Plundered Sanctuary，领主获得 40 Gold。",
            "limit": "所在地受到对应 Nature Sanctuary 影响。",
            "time": "4 回合",
            "image": "/locations/game/bribe.png",
            "baseGame": false,
            "positiveTags": "Gold",
            "negativeTags": "Nature",
            "location": "与 Nature Sanctuary 相邻、受到其修正影响的聚居地。"
          },
          {
            "id": "place-ruler-2932110698-act-nature-werewolfgridlock",
            "name": "Absent Ruler",
            "text": "狼人领主外出期间暂停正常治理；Unrest ≥200 时领主被撤换，并使 Unrest 减少 100。",
            "limit": "由正在外出变形的狼人领主特质提供。",
            "time": "1 回合",
            "image": "/locations/mod/nature.property_werewolfpack.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "无",
            "location": "狼人领主外出期间的聚居地。"
          }
        ]
      }
    ]
  },
  {
    "id": "places-2932765110",
    "sections": [
      {
        "id": "places-2932765110-ruler-actions",
        "title": "统治者行动",
        "items": [
          {
            "id": "place-ruler-2932765110-act-raiselucidity",
            "name": "Encourage Lucidity",
            "text": "当地已有 Lucidity 强度增加 15。",
            "limit": "当地有提供该行动的 Magic Plague，统治者未陷入 Insane。",
            "time": "7 回合",
            "image": "/locations/mod/CovenExpansionRecast.Icon_Lucid.png",
            "baseGame": false,
            "positiveTags": "无",
            "negativeTags": "Disease、Madness",
            "location": "有 Magic Plague 的人类体系聚居地。"
          }
        ]
      }
    ]
  },
  {
    "id": "places-base",
    "sections": [
      {
        "id": "places-base-ruler-actions",
        "title": "统治者行动",
        "items": [
          {
            "id": "place-ruler-base-act-muster",
            "name": "Muster Defences",
            "text": "消耗 10 Gold，防御增加 25。",
            "limit": "当前防御低于上限，统治者至少有 10 Gold。",
            "time": "7 回合",
            "image": "/locations/game/muster.png",
            "baseGame": true,
            "positiveTags": "Combat",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-treatdisease",
            "name": "Inoculate Population",
            "text": "Plague Immunity 增加 15。",
            "limit": "无额外限制。",
            "time": "7 回合",
            "image": "/locations/game/plagueImmunity.png",
            "baseGame": true,
            "positiveTags": "无",
            "negativeTags": "Disease",
            "location": "City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。"
          },
          {
            "id": "place-ruler-base-act-wardagainstshadow",
            "name": "Ward Against Shadow",
            "text": "Ward 增加 100，阻止 Shadow 向当地传播。",
            "limit": "世界平均 Shadow 超过 1%。",
            "time": "7 回合",
            "image": "/locations/game/driveBackShadow.png",
            "baseGame": true,
            "positiveTags": "无",
            "negativeTags": "Shadow",
            "location": "City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。"
          },
          {
            "id": "place-ruler-base-act-taxcitizens",
            "name": "Tax Citizens",
            "text": "统治者获得 ⌊45 × Prosperity × 人口/100⌋ Gold；Unrest 增加 20。",
            "limit": "无额外限制。",
            "time": "4 回合",
            "image": "/locations/game/tax.png",
            "baseGame": true,
            "positiveTags": "Gold",
            "negativeTags": "无",
            "location": "City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。"
          },
          {
            "id": "place-ruler-base-act-festival",
            "name": "Hold Festival",
            "text": "消耗 50 Gold，Unrest 减少 20。",
            "limit": "统治者至少有 50 Gold。",
            "time": "2 回合",
            "image": "/locations/game/festival.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "Gold、Cruel、Discord",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-fundchosenone",
            "name": "Fund Chosen One",
            "text": "完成时统治者至少有 10 Gold，便将当前 Gold 的 25%（向下取整）转交 Chosen One。",
            "limit": "Chosen One 存在、世界恐慌至少 15%。当前实现额外要求统治者 Awareness ≥10，正常 0–100% 范围内无法满足。",
            "time": "3 回合",
            "image": "/locations/game/tax.png",
            "baseGame": true,
            "positiveTags": "Cooperation、目标人物的正面标签",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-fundhero",
            "name": "Fund [Hero]",
            "text": "将统治者当前 Gold 的 25%（向下取整）转交以当地为家乡的目标英雄。",
            "limit": "非教程；目标存活且已有单位，并且不是自主邪恶人物。世界恐慌至少 15%，矮人统治者不受这一恐慌门槛限制。",
            "time": "3 回合",
            "baseGame": true,
            "positiveTags": "Cooperation、目标人物的正面标签",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-sabotagevisitor",
            "name": "Sabotage Visitor",
            "text": "从适用效果中等概率选一项：目标最多损失 50 Gold；Menace 增加 10；非玩家可控目标被打断 5 回合；正在执行且进度超过 20 的挑战失去 20 进度。",
            "limit": "当地或相邻地点有统治者厌恶的人物；候选检查排除自主邪恶人物。",
            "time": "2 回合",
            "image": "/locations/game/vendetta.png",
            "baseGame": true,
            "positiveTags": "Cruel",
            "negativeTags": "Cooperation",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-sabotageotherruler",
            "name": "Sabotage Other Ruler",
            "text": "选取本国统治者最厌恶的另一名领主，等概率造成：Political Gridlock、最多损失 100 Gold，或当地 Unrest 增加 100。",
            "limit": "本国有统治者厌恶的领主。",
            "time": "2 回合",
            "image": "/locations/game/vendetta.png",
            "baseGame": true,
            "positiveTags": "Cruel",
            "negativeTags": "Cooperation",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-raisearmy",
            "name": "Raise Army",
            "text": "创建一支 Human Army，成为当地驻军。",
            "limit": "当地没有配属军队；普通人类聚居地还须是首都或主要地点。",
            "time": "7 回合",
            "image": "/locations/game/humanArmy.png",
            "baseGame": true,
            "positiveTags": "Combat",
            "negativeTags": "无",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-exposecultists",
            "name": "Expose Cultists",
            "text": "创建 Cultists Exposed，使英雄可以调查并逮捕当地渗透者。",
            "limit": "使用对应 Alliance 规则，且 Infiltration 大于 0、尚无 Cultists Exposed。",
            "time": "6 回合",
            "image": "/locations/game/cultExposed.png",
            "baseGame": true,
            "positiveTags": "Cooperation、Cruel",
            "negativeTags": "Shadow、Discord",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-agitateagainstsovereign",
            "name": "Agitate Against Sovereign",
            "text": "Political Agitation 增加 35。",
            "limit": "普通 City，属于国家且不是首都。",
            "time": "7 回合",
            "image": "/locations/game/agitate.png",
            "baseGame": true,
            "positiveTags": "Ambition",
            "negativeTags": "Cooperation、君主的标签",
            "location": "非首都的 City。"
          },
          {
            "id": "place-ruler-base-act-attackagent",
            "name": "Hunt [Agent]",
            "text": "命令当地英雄追杀目标，并创建 Cavalry Escort 护送。",
            "limit": "启用军事护卫；存在合格的非玩家英雄和本城军队。目标 Profile ≥50、Menace >25，且未躲藏；Chosen One 不能被指定为追杀英雄。",
            "time": "7 回合",
            "baseGame": true,
            "positiveTags": "Combat",
            "negativeTags": "目标人物的标签",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-attackarmy",
            "name": "Engage [Army]",
            "text": "命令以当地为家乡的 Human Army 攻击目标军队。",
            "limit": "当地有本国配属军队；目标是 Menace 大于 0 的游荡军队。跨层行动还受地下认知限制。",
            "time": "7 回合",
            "baseGame": true,
            "positiveTags": "Combat、Danger",
            "negativeTags": "目标人物的标签；无人物时采用目标军队的正面标签",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-fundoutpost",
            "name": "Fund [Outpost]",
            "text": "将当前 Gold 的 50%（向下取整）投入本国 Outpost。",
            "limit": "统治者 Gold >10；Outpost 仍存在且资金不超过 200。",
            "time": "1 回合",
            "image": "/locations/game/humanColony.png",
            "baseGame": true,
            "positiveTags": "Cooperation、Ambition",
            "negativeTags": "Gold",
            "location": "符合条件的有人类体系统治者的聚居地。"
          },
          {
            "id": "place-ruler-base-act-reduceunrest",
            "name": "Reduce Unrest",
            "text": "消耗 10 Gold，Unrest 减少 25。",
            "limit": "Unrest 大于 0，统治者至少有 10 Gold。",
            "time": "7 回合",
            "image": "/locations/game/reduceUnrest.png",
            "baseGame": true,
            "positiveTags": "无",
            "negativeTags": "Gold、Discord",
            "location": "有 Unrest 的人类体系聚居地。"
          },
          {
            "id": "place-ruler-base-act-brutalcrackdown",
            "name": "Brutal Crackdown",
            "text": "Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。",
            "limit": "Unrest 大于 0。",
            "time": "7 回合",
            "image": "/locations/game/brutalJustice.png",
            "baseGame": true,
            "positiveTags": "Cruel",
            "negativeTags": "Discord",
            "location": "有 Unrest 的人类体系聚居地。"
          },
          {
            "id": "place-ruler-base-act-supportconclave",
            "name": "Support Conclave",
            "text": "对应 Conclave 强度增加 25，上限 300，降低被破坏的风险。",
            "limit": "统治者是该 Conclave Opportunity 指定的人物。",
            "time": "10 回合",
            "image": "/locations/game/conclave.png",
            "baseGame": true,
            "positiveTags": "Cooperation、Chosen One 的正面标签",
            "negativeTags": "无",
            "location": "有 Conclave Opportunity 的人类体系聚居地。"
          },
          {
            "id": "place-ruler-base-act-deepone-humanity",
            "name": "Maintain Humanity",
            "text": "Call of the Abyss 强度归零，抵抗造成的疲惫增加 3。",
            "limit": "统治者具有提供该行动的 Call of the Abyss。",
            "time": "7 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": true,
            "positiveTags": "无",
            "negativeTags": "Deepones",
            "location": "具有 Call of the Abyss 的领主所在聚居地。"
          },
          {
            "id": "place-ruler-base-act-deepone-descend",
            "name": "Descend into the Deep",
            "text": "Call of the Abyss 强度归零；领主离开职位，变为同一人物对应的 Deep One 自主单位。",
            "limit": "统治者具有提供该行动的 Call of the Abyss。",
            "time": "7 回合",
            "image": "/locations/game/deepOnes.png",
            "baseGame": true,
            "positiveTags": "Deepones",
            "negativeTags": "Danger",
            "location": "具有 Call of the Abyss 的领主所在聚居地。"
          },
          {
            "id": "place-ruler-base-act-goldlikethesun",
            "name": "Gold like the Sun",
            "text": "消耗 10 Gold，统治者个人 Shadow 归零，当地 Shadow 减半。",
            "limit": "矮人统治者，Gold ≥10，个人 Shadow >20%。",
            "time": "2 回合",
            "image": "/locations/game/sacrificeGold.png",
            "baseGame": true,
            "positiveTags": "无",
            "negativeTags": "Gold、Shadow",
            "location": "Dwarven City 或 Dwarven Outpost。"
          },
          {
            "id": "place-ruler-base-act-e-recruitwayfinder",
            "name": "Recruit Wayfinder",
            "text": "创建一名 Elven Wayfinder。",
            "limit": "精灵国家首都，且本国没有存活的 Wayfinder。",
            "time": "7 回合",
            "image": "/locations/game/humanArmy.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "无",
            "location": "Elven City，且为精灵国家首都。"
          },
          {
            "id": "place-ruler-base-act-e-recruitcrystalsmith",
            "name": "Recruit Crystalsmith",
            "text": "创建一名 Elven Crystalsmith。",
            "limit": "精灵国家首都，且本国没有存活的 Crystalsmith。",
            "time": "7 回合",
            "image": "/locations/game/humanArmy.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "无",
            "location": "Elven City，且为精灵国家首都。"
          },
          {
            "id": "place-ruler-base-act-e-expand",
            "name": "Expand",
            "text": "消耗 60 Gold，在相邻合格地点建立 Elven City；新城人口为人口上限的 20%（向上取整），Shadow 继承领主个人 Shadow。",
            "limit": "邻地须为无人控制的非海洋空地或 Ruins，宜居度至少 15%。",
            "time": "20 回合",
            "image": "/locations/game/humanColony.png",
            "baseGame": true,
            "positiveTags": "Cooperation、Ambition",
            "negativeTags": "Gold",
            "location": "Elven City。"
          },
          {
            "id": "place-ruler-base-an-quarantine",
            "name": "Impose Quarantine",
            "text": "消耗 25 Gold，给国内已有 Plague 的人类体系聚居地设置强度 25 的 Quarantine。",
            "limit": "君主至少有 25 Gold。",
            "time": "7 回合",
            "image": "/locations/game/quarantine.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "Disease、Danger、Gold",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-appeasenobles",
            "name": "Appease Nobles",
            "text": "消耗 45 Gold，首都 Political Instability 减少 20。",
            "limit": "君主至少有 45 Gold。",
            "time": "7 回合",
            "image": "/locations/game/crown.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "Gold",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-taxnobles",
            "name": "Tax Nobles",
            "text": "从各非首都普通 City 的领主处收取其 Gold 的 25%（向下取整）；各城 Political Agitation 增加 8 ×（领主 Gold 偏好等级+2）。",
            "limit": "国家拥有多座普通 City，或属于矮人国家。",
            "time": "4 回合",
            "image": "/locations/game/tax.png",
            "baseGame": true,
            "positiveTags": "Gold",
            "negativeTags": "Cooperation",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-abdicate",
            "name": "Abdicate",
            "text": "君主退位，Political Instability 减少 150；没有人物单位的原君主成为 Warrior。",
            "limit": "Political Instability >200，距离上次退位至少 20 回合。",
            "time": "1 回合",
            "image": "/locations/game/abdicate.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "Ambition、Gold、Danger",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-appointstatereligion",
            "name": "Appoint State Religion",
            "text": "消耗 100 Gold，把全国聚居地的宗教改为首都宗教；被迫改信的领主对君主好感降低 1 级，移除异教 Temple。Ophanim 教团的聚居地保留其信仰。",
            "limit": "君主至少有 100 Gold。",
            "time": "7 回合",
            "image": "/locations/game/temple.png",
            "baseGame": true,
            "positiveTags": "首都教团的标签；无教团时为无",
            "negativeTags": "Religion",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-formalliance",
            "name": "Form Alliance",
            "text": "成立或加入 Alliance；本国 Shadow >50% 的非首都普通城市可能先分裂。存在合格 Alliance 时，领地、人物与军队并入其中。",
            "limit": "国家不属于 Alliance、Dark Empire 或 Ophanim Theocracy；完成时君主 Shadow 不超过 50%。",
            "time": "3 回合",
            "image": "/locations/game/alliance.png",
            "baseGame": true,
            "positiveTags": "Cooperation",
            "negativeTags": "Shadow",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-declarewar",
            "name": "War: Invasion",
            "text": "向目标国家宣战，当前外交关系值减半。",
            "limit": "目标支持常规外交，且双方尚未交战。",
            "time": "7 回合",
            "image": "/locations/game/war.png",
            "baseGame": true,
            "positiveTags": "Combat、Danger、Cruel、Ambition",
            "negativeTags": "目标国家的标签；目标有君主时采用君主的标签",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-improverelations",
            "name": "Improve Relations",
            "text": "外交关系增加 0.05，上限 1；双方都受 Ophanim 控制时直接设为 1。",
            "limit": "目标是三步内支持常规外交的国家，关系尚未达到上限。",
            "time": "7 回合",
            "image": "/locations/game/diplomacy.png",
            "baseGame": true,
            "positiveTags": "Cooperation、目标国家或其君主的标签",
            "negativeTags": "Combat、Cruel、Danger；国家间距离小于 3 时另含 Ambition",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-worsenrelationship",
            "name": "Worsen Relatioship",
            "text": "外交关系减少 0.25，下限 −1。",
            "limit": "目标是三步内支持常规外交的国家，关系尚未达到下限。",
            "time": "5 回合",
            "image": "/locations/game/badDiplomacy.png",
            "baseGame": true,
            "positiveTags": "Combat、Danger、Ambition",
            "negativeTags": "目标国家的标签；目标有君主时采用君主的标签",
            "location": "国家首都，由君主执行。"
          },
          {
            "id": "place-ruler-base-an-razesubsettlement",
            "name": "Raze [Interest Point]",
            "text": "派最近的空闲 Human Army 前往摧毁目标兴趣点。",
            "limit": "目标 Menace >0、不能在聚居地毁灭后保留；目标领土无人控制、由本国或邪恶势力控制。",
            "time": "7 回合",
            "image": "/locations/game/raze.png",
            "baseGame": true,
            "positiveTags": "Combat",
            "negativeTags": "目标兴趣点的标签",
            "location": "国家首都，由君主执行。"
          }
        ]
      }
    ]
  }
];
export const locationRulerBindings: { scope: string; hosts: string[]; entryIds: string[] }[] = [
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-blamedeepones"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-requestaidagainstdeepones"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-wipeoutdeeponecult"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-supportdeepones"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-establishdeeponecult"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-concealdeepones"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-embracedrownedprophet"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-drownedprophet-breathless"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-drownedprophet-horde"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-drownedprophet-idle"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-seamonster-destroy"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-seamonster-food"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-seamonster-gold"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-acceptpatronage"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-blockpresence"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-coralstatue"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-createmadness"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-paydebt"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-food"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-getwealth"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-sanity"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-retribution"
    ]
  },
  {
    "scope": "places-2879667447",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2879667447-act-inundai-unrest"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-destructiveindustry"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-enddestructiveindustry"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-naturesanctuary"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-organizehunt"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-plundersanctuary"
    ]
  },
  {
    "scope": "places-2932110698",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2932110698-act-nature-werewolfgridlock"
    ]
  },
  {
    "scope": "places-2932765110",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-2932765110-act-raiselucidity"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-muster"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-treatdisease"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-wardagainstshadow"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-taxcitizens"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-festival"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-fundchosenone"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-fundhero"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-sabotagevisitor"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-sabotageotherruler"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-raisearmy"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-exposecultists"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city"
    ],
    "entryIds": [
      "place-ruler-base-act-agitateagainstsovereign"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-attackagent"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-attackarmy"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-fundoutpost"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-reduceunrest"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-brutalcrackdown"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-supportconclave"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-deepone-humanity"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-minorhuman",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-deepone-descend"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-act-goldlikethesun"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-elvencity"
    ],
    "entryIds": [
      "place-ruler-base-act-e-recruitwayfinder"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-elvencity"
    ],
    "entryIds": [
      "place-ruler-base-act-e-recruitcrystalsmith"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-elvencity"
    ],
    "entryIds": [
      "place-ruler-base-act-e-expand"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-quarantine"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-quarantine"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-appeasenobles"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-appeasenobles"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-taxnobles"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-taxnobles"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-abdicate"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-abdicate"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-appointstatereligion"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-temple"
    ],
    "entryIds": [
      "place-ruler-base-an-appointstatereligion"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-appointstatereligion"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-formalliance"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-formalliance"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-declarewar"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-declarewar"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-improverelations"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-improverelations"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-worsenrelationship"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-worsenrelationship"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-set-city",
      "location-set-elvencity",
      "location-set-dwarvencity",
      "location-set-dwarvenoutpost"
    ],
    "entryIds": [
      "place-ruler-base-an-razesubsettlement"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-temple",
      "location-sub-witchcoven"
    ],
    "entryIds": [
      "place-ruler-base-an-razesubsettlement"
    ]
  },
  {
    "scope": "places-base",
    "hosts": [
      "location-sub-city"
    ],
    "entryIds": [
      "place-ruler-base-an-razesubsettlement"
    ]
  }
];
