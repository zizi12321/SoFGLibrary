
import type { ArchiveRecordConfig, DetailItem } from "./GodArchiveTypes";

const plain = (text: string) => text.replace(/<CrossReference name="([^"]+)"[^>]*\/>/g, "$1");
const unrestricted = (text: string) => /^(?:(?:执行者|Agent)(?:当前)?(?:所在地点|所在地|地点)|执行者与目标所在地点|拥有 Facial Plasticity 的人物当前位置)$/.test(text)
  || /^(?:携带|拥有).+(?:人物|Agent|玩家 Agent)(?:当前)?(?:所在地点|当前位置)(?:；不要求聚居地.*)?$/.test(text)
  || /^(?:任意地点|无地点限制|无固定地点|无地点或兴趣点限制)$/.test(text)
  || /^(?:The Builder\s*|Bumaro's Warhammer 持有者)所在地$/.test(text);

function locationTitle(location: string, config?: ArchiveRecordConfig) {
  const text = plain(location);
  if (unrestricted(text)) return "无地点／兴趣点限制";
  const named = (config?.sections ?? [])
    .filter(section => ["locations", "places", "points-of-interest", "location-modifiers"].includes(section.id))
    .flatMap(section => section.items.filter(item => !item.location).map(item => item.name))
    .concat(["Ancient Ruins", "City Palace", "Holy Order Seat", "Elder Tomb", "The Mountain", "Witch Coven", "Library", "Market", "Docks", "Temple", "Orc Camp", "Elven City", "City Ruins"])
    .filter((name, index, list) => list.indexOf(name) === index)
    .sort((a, b) => b.length - a.length);
  const found: string[] = [];
  for (const name of named) {
    const at = text.toLowerCase().indexOf(name.toLowerCase());
    if (at < 0 || found.some(long => long.includes(name))) continue;
    // Negative prerequisites do not identify the execution site.
    if (/(?:尚无|没有|尚未有|未成为|尚未成为|不要求|不能已有|无可替换)\s*$/.test(text.slice(Math.max(0, at - 10), at))) continue;
    if (text.slice(0, at).includes("；")) continue;
    found.push(name);
  }
  if (found.length) return found.map(name => {
    const entry = config?.sections.filter(section => ["locations", "places", "points-of-interest", "location-modifiers"].includes(section.id)).flatMap(section => section.items).find(item => item.name === name && !item.location);
    if (!entry) return name;
    const id = entry.id ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return '<CrossReference name="' + name + '" href="#entry-' + id + '" />';
  }).join("／");
  if (/首都/.test(text)) return "国家首都";
  if (/小型聚居地/.test(text)) return "小型聚居地";
  if (/人类(?:类|体系)?聚居地|人类或精灵聚居地/.test(text)) return "人类体系聚居地";
  if (/聚居地/.test(text)) return "聚居地";
  return location || "执行地点未找到";
}

export function taskLocationGroups(items: DetailItem[], config?: ArchiveRecordConfig) {
  const groups = new Map<string, { title: string; items: DetailItem[]; unrestricted: boolean }>();
  for (const item of items) {
    const location = item.location?.trim().replace(/[。；]+$/, "") ?? "";
    const title = item.locationGroup ?? locationTitle(location, config);
    const isUnrestricted = title === "无地点／兴趣点限制";
    if (!groups.has(title)) groups.set(title, { title, items: [], unrestricted: isUnrestricted });
    groups.get(title)!.items.push(item);
  }
  const order = (title: string) => title === "无地点／兴趣点限制" ? 0 : ["通用", "共通"].includes(title) ? 1 : title === "除Abyssal外通用" ? 2 : 3;
  return [...groups.values()].sort((a, b) => order(a.title) - order(b.title));
}
