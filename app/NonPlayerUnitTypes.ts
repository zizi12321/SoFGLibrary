import type { DetailItem } from "./GodArchiveTypes";

export type NonPlayerUnitRecord = {
  id: string;
  name: string;
  group: string;
  source: string;
  faction: string;
  baseGame: boolean;
  image?: string;
  stats: string;
  origin: string;
  behavior: string;
  skills: DetailItem[];
  tasks: (DetailItem & { kind: string })[];
};
