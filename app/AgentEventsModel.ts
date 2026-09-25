import type { DetailItem } from "./GodArchiveTypes";
import { agentEventBindings, agentEventNotes } from "./AgentEventBindings";
import { eventGroups } from "./EventCatalogueModel";
import { describeVariantEntry } from "./EventDecisionModel";
import { describeEventFamily, groupEventVariants, variantLabel } from "./EventVariantModel";

const records = eventGroups.flatMap(group => group.records);
const byId = new Map(records.map(record => [record.entry.id!, record]));
const families = groupEventVariants(records).filter(family => family.records.length > 1);
const familyByEntry = new Map(families.flatMap(family => family.records.map(record => [record.entry.id!, family] as const)));
const previews = new Map<string, { name: string; text: string; image?: string; category: string }>();
const titles = { tasks: "任务中事件", other: "其他事件", ruins: "遗迹事件", chains: "事件链" };
for (const record of records) previews.set("entry-" + record.entry.id, {
 name: record.entry.name,
 text: record.entry.text + "\n\n" + (record.entry.eventOptions ?? []).map(option => option.name + (option.condition ? "\n条件：" + option.condition : "") + "\n" + option.text).join("\n\n"),
 image: record.entry.image, category: titles[record.category],
});
for (const family of families) previews.set(family.id + "-overview", {
 name: family.name + " 系列事件", text: describeEventFamily(family),
 image: family.records[0].entry.image, category: titles[family.records[0].category],
});
const plain = (text: string) => text.replace(/<CrossReference name="([^"]+)"[^>]*\/>/g, "$1").replaceAll('"', "“");

// Shared events stay canonical. This page projects only this Agent's entries/options.
// Same-Agent references stay local; other events link to the event catalogue with a
// complete preview, so mobile never needs to navigate merely to read the result.
function reference(name: string, hash: string, localIds: Map<string, string>) {
 const local = localIds.get(hash);
 if (local) return '<CrossReference name="' + name + '" href="#' + local + '" />';
 const preview = previews.get(hash);
 return '<CrossReference name="' + name + '" href="?page=events#' + hash + '" meta="' + (preview?.category ?? "事件")
  + '" text="' + plain(preview?.text ?? "查看事件资料库中的对应分类。") + '"'
  + (preview?.image ? ' image="' + preview.image + '"' : "") + ' />';
}
export type AgentEventSource = { id: string; name: string; items: DetailItem[] };
export function getAgentEvents(agentId: string): AgentEventSource[] {
 const bindings = agentEventBindings[agentId] ?? [];
 const localId = (id: string) => "agent-" + agentId + "-" + id;
 const localIds = new Map(bindings.map(binding => ["entry-" + binding.id, "entry-" + localId(binding.id)]));
 const rewrite = (text: string) => text.replace(/<CrossReference name="([^"]+)" href="#([^"]+)"\s*\/>/g,
  (_, name: string, hash: string) => reference(name, hash, localIds));
 return eventGroups.flatMap(source => {
  const items = bindings.filter(binding => byId.get(binding.id)?.source === source.id).map(binding => {
   const record = byId.get(binding.id)!;
   const family = familyByEntry.get(binding.id);
   const text = [
    binding.note,
    family ? "进入条件：" + describeVariantEntry(record, family.records) : "",
    record.type === "INERT" && binding.kind === "专属事件" && binding.note
     ? record.entry.text.split("\n\n").filter(paragraph => paragraph !== record.decision.trigger).join("\n\n") : record.entry.text,
    binding.choices ? "下方列出该 Agent 对应的选项；完整事件：" + reference(record.entry.name, "entry-" + binding.id, new Map()) : "",
   ].filter(Boolean).join("\n\n");
   return {
    ...record.entry,
    id: localId(binding.id),
    name: binding.title ?? (family ? record.entry.name + " · " + variantLabel(record) : record.entry.name),
    text: rewrite(text),
    meta: binding.kind + " · " + titles[record.category],
    eventOptions: record.entry.eventOptions?.filter((_, index) => !binding.choices || binding.choices.includes(index))
     .map(option => ({ ...option, condition: option.condition ? rewrite(option.condition) : undefined, text: rewrite(option.text) })),
    eventComparison: record.entry.eventComparison ? {
     ...record.entry.eventComparison,
     original: {
      ...record.entry.eventComparison.original,
      href: "?page=events" + record.entry.eventComparison.original.href,
      meta: "任务中事件", text: plain(previews.get(record.entry.eventComparison.original.href.slice(1))?.text ?? ""),
     },
     changes: record.entry.eventComparison.changes.map(rewrite),
    } : undefined,
   };
  });
  return items.length ? [{ id: source.id, name: source.name, items }] : [];
 });
}
export { agentEventNotes };
