import type { SectionConfig } from "./GodArchiveTypes";

export type ItemCategory = SectionConfig & {
  /** Acquisition routes shared by the items identified in this category. */
  acquisition?: string;
};
