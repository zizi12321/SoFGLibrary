import type { DetailItem } from "./GodArchiveTypes";

export type ArmyRecord = {
  id: string; name: string; baseGame: boolean; group: string; source: string; faction: string;
  image?: string; stats: string; hp: string; origin: string; behavior: string; skills: DetailItem[];
};
