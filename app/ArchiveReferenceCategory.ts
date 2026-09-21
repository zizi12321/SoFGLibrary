import type { ArchiveRecordConfig, DetailItem, PowerItem } from "./GodArchiveTypes";

// Derive the label from the destination's module, not the referring link.
export function getReferenceCategory(
  config: ArchiveRecordConfig,
  entry: DetailItem | PowerItem | undefined,
  href?: string,
): string | undefined {
  const categoryTitle = (title: string) => title === "相关机制" ? "机制" : title;
  if (href && !href.startsWith("#")) return undefined;
  if (config.supplicant && (href === "#entry-supplicant" || href === "#agent")) return "初始 Agent";
  if (entry) {
    if (config.id === "base-items") return "物品";
    if (config.powers.includes(entry as PowerItem)) return "神力";
    if (config.drawPowers?.includes(entry as PowerItem)) return "卡牌神力";
    const group = config.powerGroups?.find(group => group.powers.includes(entry as PowerItem));
    if (group) return "神力 · " + group.title;
    if (config.supplicant?.abilities.includes(entry as DetailItem)) return "初始 Agent 能力";
    if (config.drawCards?.items.includes(entry as DetailItem)) return categoryTitle(config.drawCards.title);
    for (const section of config.sections) {
      if (section.items.includes(entry as DetailItem)) return categoryTitle(section.title);
      if (section.items.some(item => item.abilities?.includes(entry as DetailItem))) {
        return categoryTitle(section.title) + " · 能力";
      }
    }
  }
  const section = config.sections.find(section => href === "#" + section.id);
  return section ? categoryTitle(section.title) : undefined;
}
