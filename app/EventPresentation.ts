import type { DetailItem } from "./GodArchiveTypes";
import type { EventSourceGroup } from "./EventTypes";

// Raw selection data stays in EventRecord.decision for relative calculations.
export function formatProbabilities(text: string) {
  return text.replace(/\b(\d+\.\d{3,})%/g, (_, value: string) => Number(Number(value).toFixed(2)) + "%")
    .replace(/^100%[：:]\s*/gm, "")
    .replace(/^(?:相对概率|概率)：100%。?\s*$/gm, "");
}

export function withoutSelectionDetails(text: string) {
  return text.split("\n").filter(line => !/^(?:抽选权重|探索抽选权重|打捞抽选权重|单次候选检查概率)：/.test(line.trim()))
    .join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

// Only merge adjacent additions with the same subject, direction and unit.
// Keep opposite signs and intervening effects in order (values may be bounded).
export function combineRepeatedEffects(text: string) {
  const lines = text.split("\n"), result: string[] = [];
  const change = /^(.*(?:好感等级|Menace|Profile|Sanity|Awareness|Gold|HP|Might|Lore|Intrigue|Command|XP)) ([+−-])(\d+(?:\.\d+)?)(%?。)$/;
  for (let index = 0; index < lines.length; index++) {
    const first = change.exec(lines[index]);
    if (!first) { result.push(lines[index]); continue; }
    let total = Number(first[3]), count = 1;
    while (index + 1 < lines.length) {
      const next = change.exec(lines[index + 1]);
      if (!next || next[1] !== first[1] || next[2] !== first[2] || next[4] !== first[4]) break;
      total += Number(next[3]); count++; index++;
    }
    result.push(count === 1 ? lines[index] : first[1] + " " + first[2] + Number(total.toFixed(8)) + first[4]);
  }
  return result.join("\n");
}

export function presentEventItems(items: DetailItem[]): DetailItem[] {
  const byId = new Map(items.filter(item => item.id).map(item => ["entry-" + item.id, item]));
  const ordinal = new Map<DetailItem, number>();
  const counts = new Map<string, number>();
  for (const item of items) {
    if (!item.eventChain) continue;
    const key = item.eventChain.id;
    const number = Number(/节点\s*(\d+)/.exec(item.meta ?? "")?.[1]) || (counts.get(key) ?? 0) + 1;
    ordinal.set(item, number); counts.set(key, number);
  }
  return items.map(item => {
    if (!item.eventCategory && !item.eventOptions) return item;
    const rewrite = (value: string) => combineRepeatedEffects(formatProbabilities(withoutSelectionDetails(value))
      .replace(/<CrossReference name="([^"]+)" href="#([^"]+)"\s*\/>/g, (full, name: string, hash: string) => {
        const target = byId.get(hash);
        if (!item.eventChain || !target?.eventChain || target.eventChain.id !== item.eventChain.id) return full;
        const number = ordinal.get(target);
        return number ? "节点 " + number : name;
      })
      .replace(/节点 \d+(?:、节点 \d+)+/g, list => {
        const numbers = [...new Set(list.match(/\d+/g) ?? [])].map(Number).sort((a, b) => a - b);
        return "节点 " + numbers.join("、");
      }));
    return {
      ...item, text: rewrite(item.text),
      eventOptions: item.eventOptions?.map(option => ({
        ...option, text: rewrite(option.text), condition: option.condition ? rewrite(option.condition) : undefined,
      })),
      eventComparison: item.eventComparison ? { ...item.eventComparison, changes: item.eventComparison.changes.map(rewrite) } : undefined,
    };
  });
}

export function presentEventGroups(groups: EventSourceGroup[]): EventSourceGroup[] {
  // Identical chain IDs from different mods must never share node numbering.
  return groups.map(group => {
    const entries = presentEventItems(group.records.map(record => record.entry));
    return { ...group, records: group.records.map((record, index) => ({ ...record, entry: entries[index] })) };
  });
}
