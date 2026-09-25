import type { PlacePage } from "./LocationPageModel";

/** Only base-game actions with at least three hosts on this page are extracted. */
export const commonPlaceActionScopes: Record<PlacePage, readonly { id: string; name: string; hosts: readonly string[]; actions: readonly string[] }[]> = {
  "locations": [
    {
      "id": "locations-common-0",
      "name": "城市与矮人据点通用",
      "hosts": [
        "location-set-city",
        "location-set-dwarvencity",
        "location-set-dwarvenoutpost",
        "location-set-elvencity"
      ],
      "actions": [
        "place-ruler-base-an-razesubsettlement",
        "place-ruler-base-an-appointstatereligion",
        "place-ruler-base-an-abdicate",
        "place-ruler-base-an-appeasenobles",
        "place-ruler-base-an-declarewar",
        "place-ruler-base-an-formalliance",
        "place-ruler-base-an-improverelations",
        "place-ruler-base-an-quarantine",
        "place-ruler-base-an-taxnobles",
        "place-ruler-base-an-worsenrelationship"
      ]
    },
    {
      "id": "locations-common-1",
      "name": "人类体系聚居地通用",
      "hosts": [
        "location-set-city",
        "location-set-dwarvencity",
        "location-set-dwarvenoutpost",
        "location-set-elvencity",
        "location-set-minorhuman"
      ],
      "actions": [
        "place-task-base-ch-h-buildtemple",
        "place-ruler-base-act-attackagent",
        "place-ruler-base-act-attackarmy",
        "place-ruler-base-act-brutalcrackdown",
        "place-ruler-base-act-deepone-descend",
        "place-ruler-base-act-deepone-humanity",
        "place-ruler-base-act-exposecultists",
        "place-ruler-base-act-festival",
        "place-ruler-base-act-fundchosenone",
        "place-ruler-base-act-fundhero",
        "place-ruler-base-act-fundoutpost",
        "place-ruler-base-act-muster",
        "place-ruler-base-act-raisearmy",
        "place-ruler-base-act-reduceunrest",
        "place-ruler-base-act-sabotageotherruler",
        "place-ruler-base-act-sabotagevisitor",
        "place-ruler-base-act-supportconclave",
        "place-task-base-ch-accessvault",
        "place-task-base-ch-accessvaultlimited",
        "place-task-base-ch-assassinatebrutal",
        "place-task-base-ch-assassinateenshadowedruler",
        "place-task-base-ch-assassinatesilent",
        "place-task-base-ch-drivebackshadow",
        "place-task-base-ch-h-aware",
        "place-task-base-ch-h-doomsay",
        "place-task-base-ch-h-militaryfervour",
        "place-task-base-ch-h-preach",
        "place-task-base-ch-h-preachtoruler",
        "place-task-base-ch-poisonhero",
        "place-task-base-ch-ransackpossessions",
        "place-task-base-ch-redeemruler",
        "place-task-base-ch-redeemsovereign",
        "place-task-base-ch-rest",
        "place-task-base-ch-sabotageruler",
        "place-task-base-ch-savehero",
        "place-task-base-ch-warntheworld",
        "place-task-base-ch-wellofshadows"
      ]
    },
    {
      "id": "locations-common-2",
      "name": "人类与矮人聚居地通用",
      "hosts": [
        "location-set-city",
        "location-set-dwarvencity",
        "location-set-dwarvenoutpost",
        "location-set-minorhuman"
      ],
      "actions": [
        "place-ruler-base-act-taxcitizens",
        "place-ruler-base-act-treatdisease",
        "place-ruler-base-act-wardagainstshadow"
      ]
    },
    {
      "id": "locations-common-3",
      "name": "人类与精灵聚居地通用",
      "hosts": [
        "location-set-city",
        "location-set-elvencity",
        "location-set-minorhuman"
      ],
      "actions": [
        "place-task-base-ch-elf-giveruleelfstone"
      ]
    }
  ],
  "points-of-interest": [
    {
      "id": "points-of-interest-common-0",
      "name": "可渗透兴趣点通用",
      "hosts": [
        "location-sub-catacombs",
        "location-sub-cathedral",
        "location-sub-city",
        "location-sub-docks",
        "location-sub-elvencity",
        "location-sub-farms",
        "location-sub-fort",
        "location-sub-goldmine",
        "location-sub-holyordercapital",
        "location-sub-library",
        "location-sub-market",
        "location-sub-sewers",
        "location-sub-temple",
        "location-sub-undergroundfort",
        "location-sub-witchcoven"
      ],
      "actions": [
        "place-task-base-ch-infiltrate"
      ]
    },
    {
      "id": "points-of-interest-common-1",
      "name": "宫殿、神殿与女巫集会所通用",
      "hosts": [
        "location-sub-city",
        "location-sub-temple",
        "location-sub-witchcoven"
      ],
      "actions": [
        "place-ruler-base-an-razesubsettlement"
      ]
    },
    {
      "id": "points-of-interest-common-2",
      "name": "野外隐匿兴趣点通用",
      "hosts": [
        "location-sub-ancientruins",
        "location-sub-deep-city",
        "location-sub-deep-sanctum",
        "location-sub-temple",
        "location-sub-witchcoven"
      ],
      "actions": [
        "place-task-base-ch-laylowwilderness"
      ]
    },
    {
      "id": "points-of-interest-common-3",
      "name": "随从招募兴趣点通用",
      "hosts": [
        "location-sub-city",
        "location-sub-sewers",
        "location-sub-temple",
        "location-sub-witchcoven"
      ],
      "actions": [
        "place-task-base-ch-recruitminion"
      ]
    },
    {
      "id": "points-of-interest-common-4",
      "name": "宫殿、教团总部与女巫集会所通用",
      "hosts": [
        "location-sub-city",
        "location-sub-holyordercapital",
        "location-sub-witchcoven"
      ],
      "actions": [
        "place-task-base-ch-enshadow"
      ]
    }
  ]
};
