import type { DetailItem, EventCategory, EventChain } from "./GodArchiveTypes";
export type { EventCategory } from "./GodArchiveTypes";
export type EventRecord = {
  entry: DetailItem;
  source: string;
  sourceName: string;
  eventId: string;
  type: string;
  category: EventCategory;
  chain: EventChain | null;
  sourceFile: string;
  condition: string;
  decision: { trigger: string; condition: string; selection: string };
};
export type EventSourceGroup = { id: string; name: string; records: EventRecord[]; categoryNotes?: Partial<Record<EventCategory, string[]>> };
