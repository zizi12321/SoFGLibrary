/* Source-checked overlapping MIDCHALLENGE eligibility cases.
 * Guarded by the exact source conditions: changed definitions fall back to
 * independent candidate checks until re-audited.
 * EventRuntime: is_desertlike = Desert/Dry/Arid;
 * is_agent_human implies a commandable Agent of the Human species.
 * predicate is retained for source-equivalence tests, never shown as prose. */
export type EventSelectionCases = {
 conditions: Record<string, string>;
 cases: { condition: string; predicate: string; ids: string[] }[];
};
export const eventSelectionCases: EventSelectionCases[] = [
  {
    "conditions": {
      "anw.mid_sandstorm": "is_desert | is_dry",
      "fog.midch_sandstorm": "is_desert | is_desertlike | is_dry |is_arid"
    },
    "cases": [
      {
        "condition": "地形为 Desert 或 Dry",
        "predicate": "is_desert | is_dry",
        "ids": [
          "anw.mid_sandstorm",
          "fog.midch_sandstorm"
        ]
      },
      {
        "condition": "地形为 Arid",
        "predicate": "is_arid",
        "ids": [
          "fog.midch_sandstorm"
        ]
      }
    ]
  },
  {
    "conditions": {
      "maeRedux.mid_audacious_t1": "(turn > ($MAEREDUX_AUDACIOUS + 55) | $MAEREDUX_AUDACIOUS = 0) & turn < 200 & is_capital & challenge_is_intrigue & (is_species_elf|is_species_orc|is_species_human)",
      "maeRedux.mid_audacious_t2": "(turn > ($MAEREDUX_AUDACIOUS + 55) | $MAEREDUX_AUDACIOUS = 0) & (turn > 150) & (turn < 400) & is_capital & challenge_is_intrigue & is_agent_human",
      "maeRedux.mid_audacious_t3": "(turn > ($MAEREDUX_AUDACIOUS + 55) | $MAEREDUX_AUDACIOUS = 0) & (turn > 375) & is_capital & challenge_is_intrigue & is_agent_human"
    },
    "cases": [
      {
        "condition": "当前单位是 Human\n并且 回合 ≤ 150",
        "predicate": "is_agent_human & (turn < 151)",
        "ids": [
          "maeRedux.mid_audacious_t1"
        ]
      },
      {
        "condition": "当前单位是 Human\n并且 回合为 151–199",
        "predicate": "is_agent_human & (turn > 150 & turn < 200)",
        "ids": [
          "maeRedux.mid_audacious_t1",
          "maeRedux.mid_audacious_t2"
        ]
      },
      {
        "condition": "当前单位是 Human\n并且 回合为 200–375",
        "predicate": "is_agent_human & (turn > 199 & turn < 376)",
        "ids": [
          "maeRedux.mid_audacious_t2"
        ]
      },
      {
        "condition": "当前单位是 Human\n并且 回合为 376–399",
        "predicate": "is_agent_human & (turn > 375 & turn < 400)",
        "ids": [
          "maeRedux.mid_audacious_t2",
          "maeRedux.mid_audacious_t3"
        ]
      },
      {
        "condition": "当前单位是 Human\n并且 回合 ≥ 400",
        "predicate": "is_agent_human & (turn > 399)",
        "ids": [
          "maeRedux.mid_audacious_t3"
        ]
      },
      {
        "condition": "当前单位不是 Human\n并且 当前人物的种族是 Elf、Orc 或 Human\n并且 回合 < 200",
        "predicate": "!is_agent_human & (is_species_elf | is_species_orc | is_species_human) & turn < 200",
        "ids": [
          "maeRedux.mid_audacious_t1"
        ]
      }
    ]
  },
  {
    "conditions": {
      "maeRedux.midch_helpinghands_1": "(turn > ($MAEREDUX_HELPING_HANDS + 60) | $MAEREDUX_HELPING_HANDS = 0) & $MAEREDUX_HELPING_HANDS_LOCATION = 0 & (is_species_elf|is_species_orc|is_species_human|is_agent_cursed)",
      "maeRedux.midch_helpinghands_2": "(turn > ($MAEREDUX_HELPING_HANDS + 60) | $MAEREDUX_HELPING_HANDS = 0) & $MAEREDUX_HELPING_HANDS_LOCATION = 0 & (is_species_elf|is_species_orc|is_species_human|is_agent_cursed)",
      "maeRedux.midch_helpinghands_3": "(turn > ($MAEREDUX_HELPING_HANDS + 50) | $MAEREDUX_HELPING_HANDS = 0) & $MAEREDUX_HELPING_HANDS_LOCATION = 0 & (is_species_elf|is_species_orc|is_species_human|is_agent_cursed)"
    },
    "cases": [
      {
        "condition": "本局尚未触发 Helping Hands，或距离上次触发已超过 60 回合",
        "predicate": "$MAEREDUX_HELPING_HANDS = 0 | turn > ($MAEREDUX_HELPING_HANDS + 60)",
        "ids": [
          "maeRedux.midch_helpinghands_1",
          "maeRedux.midch_helpinghands_2",
          "maeRedux.midch_helpinghands_3"
        ]
      },
      {
        "condition": "本局已触发 Helping Hands\n并且 距离上次触发为 51–60 回合",
        "predicate": "$MAEREDUX_HELPING_HANDS ~ 0 & turn > ($MAEREDUX_HELPING_HANDS + 50) & turn < ($MAEREDUX_HELPING_HANDS + 61)",
        "ids": [
          "maeRedux.midch_helpinghands_3"
        ]
      }
    ]
  },
  {
    "conditions": {
      "maeRedux.mid_potentialbenefactor_1": "((turn > ($MAEREDUX_POT_BENEFACTOR + 50)) | $MAEREDUX_POT_BENEFACTOR = 0) & (is_human) & (gold < 25) & (power > 1) & (modifier_level_unrest > 50) & !is_agent_harvester",
      "maeRedux.mid_potentialbenefactor_2": "((turn > ($MAEREDUX_POT_BENEFACTOR + 50)) | $MAEREDUX_POT_BENEFACTOR = 0) & (is_human) & (gold < 25) & (power > 1) & (modifier_level_plague > 0) & !is_agent_harvester"
    },
    "cases": [
      {
        "condition": "当地 Unrest 强度 > 50\n并且 当地 Plague 强度 > 0",
        "predicate": "modifier_level_unrest > 50 & modifier_level_plague > 0",
        "ids": [
          "maeRedux.mid_potentialbenefactor_1",
          "maeRedux.mid_potentialbenefactor_2"
        ]
      },
      {
        "condition": "当地 Unrest 强度 > 50\n并且 当地 Plague 强度 ≤ 0",
        "predicate": "modifier_level_unrest > 50 & !(modifier_level_plague > 0)",
        "ids": [
          "maeRedux.mid_potentialbenefactor_1"
        ]
      },
      {
        "condition": "当地 Unrest 强度 ≤ 50\n并且 当地 Plague 强度 > 0",
        "predicate": "!(modifier_level_unrest > 50) & modifier_level_plague > 0",
        "ids": [
          "maeRedux.mid_potentialbenefactor_2"
        ]
      }
    ]
  },
  {
    "conditions": {
      "maeRedux.slowlearning_1_t1": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & !is_human & !is_agent_harvester & (turn > 150) & turn < 200",
      "maeRedux.slowlearning_1_t2": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & !is_human & !is_agent_harvester & (turn > 150) & (turn < 400)",
      "maeRedux.slowlearning_1_t3": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & !is_human & !is_agent_harvester & (turn > 375)",
      "maeRedux.slowlearning_2_T1": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & is_human & !is_agent_harvester & (turn < 200) & challenge_is_lore",
      "maeRedux.slowlearning_2_T2": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & is_human & !is_agent_harvester & (turn > 150) & (turn < 400) & challenge_is_lore",
      "maeRedux.slowlearning_2_T3": "(turn > ($MAEREDUX_SLOW_LEARNING_OUTSIDE + 50) | $MAEREDUX_SLOW_LEARNING_OUTSIDE = 0) & challenge_is_lore & is_human & !is_agent_harvester & (turn > 375) & challenge_is_lore"
    },
    "cases": [
      {
        "condition": "当地不是人类聚居地\n并且 回合为 151–199",
        "predicate": "!is_human & (turn > 150 & turn < 200)",
        "ids": [
          "maeRedux.slowlearning_1_t1",
          "maeRedux.slowlearning_1_t2"
        ]
      },
      {
        "condition": "当地不是人类聚居地\n并且 回合为 200–375",
        "predicate": "!is_human & (turn > 199 & turn < 376)",
        "ids": [
          "maeRedux.slowlearning_1_t2"
        ]
      },
      {
        "condition": "当地不是人类聚居地\n并且 回合为 376–399",
        "predicate": "!is_human & (turn > 375 & turn < 400)",
        "ids": [
          "maeRedux.slowlearning_1_t2",
          "maeRedux.slowlearning_1_t3"
        ]
      },
      {
        "condition": "当地不是人类聚居地\n并且 回合 ≥ 400",
        "predicate": "!is_human & (turn > 399)",
        "ids": [
          "maeRedux.slowlearning_1_t3"
        ]
      },
      {
        "condition": "当地是人类聚居地\n并且 回合 ≤ 150",
        "predicate": "is_human & (turn < 151)",
        "ids": [
          "maeRedux.slowlearning_2_T1"
        ]
      },
      {
        "condition": "当地是人类聚居地\n并且 回合为 151–199",
        "predicate": "is_human & (turn > 150 & turn < 200)",
        "ids": [
          "maeRedux.slowlearning_2_T1",
          "maeRedux.slowlearning_2_T2"
        ]
      },
      {
        "condition": "当地是人类聚居地\n并且 回合为 200–375",
        "predicate": "is_human & (turn > 199 & turn < 376)",
        "ids": [
          "maeRedux.slowlearning_2_T2"
        ]
      },
      {
        "condition": "当地是人类聚居地\n并且 回合为 376–399",
        "predicate": "is_human & (turn > 375 & turn < 400)",
        "ids": [
          "maeRedux.slowlearning_2_T2",
          "maeRedux.slowlearning_2_T3"
        ]
      },
      {
        "condition": "当地是人类聚居地\n并且 回合 ≥ 400",
        "predicate": "is_human & (turn > 399)",
        "ids": [
          "maeRedux.slowlearning_2_T3"
        ]
      }
    ]
  },
  {
    "conditions": {
      "maeRedux.mid_turncoatnoble_t1": "((turn > ($MAEREDUX_TURNCOAT_NOBLE + 50)) | $MAEREDUX_TURNCOAT_NOBLE = 0) & challenge_is_intrigue & turn < 200 & (gold > 24) & is_human",
      "maeRedux.mid_turncoatnoble_t2": "((turn > ($MAEREDUX_TURNCOAT_NOBLE + 50)) | $MAEREDUX_TURNCOAT_NOBLE = 0) & challenge_is_intrigue & (turn > 150) & (turn < 400) & (gold > 24) & is_human",
      "maeRedux.mid_turncoatnoble_t3": "((turn > ($MAEREDUX_TURNCOAT_NOBLE + 50)) | $MAEREDUX_TURNCOAT_NOBLE = 0) & challenge_is_intrigue & turn > 375 & (gold > 24) & is_human"
    },
    "cases": [
      {
        "condition": "回合 ≤ 150",
        "predicate": "turn < 151",
        "ids": [
          "maeRedux.mid_turncoatnoble_t1"
        ]
      },
      {
        "condition": "回合为 151–199",
        "predicate": "turn > 150 & turn < 200",
        "ids": [
          "maeRedux.mid_turncoatnoble_t1",
          "maeRedux.mid_turncoatnoble_t2"
        ]
      },
      {
        "condition": "回合为 200–375",
        "predicate": "turn > 199 & turn < 376",
        "ids": [
          "maeRedux.mid_turncoatnoble_t2"
        ]
      },
      {
        "condition": "回合为 376–399",
        "predicate": "turn > 375 & turn < 400",
        "ids": [
          "maeRedux.mid_turncoatnoble_t2",
          "maeRedux.mid_turncoatnoble_t3"
        ]
      },
      {
        "condition": "回合 ≥ 400",
        "predicate": "turn > 399",
        "ids": [
          "maeRedux.mid_turncoatnoble_t3"
        ]
      }
    ]
  }
];
