import type { DetailItem } from "./GodArchiveTypes";

export type AgentRecord = {
  id: string;
  name: string;
  group: string;
  image?: string;
  stats: string;
  recruitment: string;
  note: string;
  identity?: string;
  skills: DetailItem[];
  challenges: DetailItem[];
};
