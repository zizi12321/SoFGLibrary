import type { ReactNode } from "react";

export type ArchiveGodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps" | "ixthus" | "kishi" | "living-void" | "chandalor";
export type Relation = { name: string; href: string; meta?: string; text?: string; image?: string };
export type DetailItem = { name: string; text: string; image?: string; images?: string[]; seal?: number; meta?: string; statLine?: string; location?: string; limit?: string; id?: string; baseGame?: boolean; time?: string; stats?: string; abilities?: DetailItem[]; positiveTags?: string; negativeTags?: string; initialValue?: string; modifierChange?: { natural: string; external: string } };
export type PowerItem = { name: string; seal: number; cost: string | number; icon?: string; effect: string; limit: string; id?: string };
export type SealItem = { seal: number; progress: number; agents: number; reward: string[] };
export type SectionConfig = { id: string; title: string; items: DetailItem[]; media?: boolean; icon?: ReactNode };
export type SupplicantConfig = { name?: string; image?: string; stats: string; abilities: DetailItem[] };
export type GodConfig = {
  id: "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps" | "ixthus" | "she-who-will-feast" | "iastur" | "vinerva" | "kishi" | "living-void" | "chandalor"; name: string; number: string; theme: string; assetDir: string; background: string; portrait: string;
  flavour: string; caption: string; maxTurns: string; awaken: string; panic: string; finalAgents: string; progressLabel: string; unlockMethod?: string; dlc?: string; powerRecovery: string; supplicant?: SupplicantConfig;
  core: string[]; overviewExtra?: { title: string; text: string }; specialVictory?: string; seals: SealItem[]; powers: PowerItem[]; drawCards?: SectionConfig; sections: SectionConfig[];
  relations?: Record<string, { sources?: Relation[]; effects?: Relation[] }>;
};

export const O = (name: string, seal: number, cost: string | number, effect: string, limit: string, icon?: string): PowerItem => ({ name, seal, cost, effect, limit, icon });
export const D = (name: string, text: string, extra: Partial<DetailItem> = {}): DetailItem => ({ name, text, ...extra });

function anchorFor(name: string) {
  return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function disambiguateConfigEntries(config: GodConfig) {
  const seen = new Map<string, number>();
  [...config.powers, ...(config.supplicant?.abilities ?? []), ...(config.drawCards?.items ?? []), ...config.sections.flatMap(section => section.items)].forEach(item => {
    const base = item.id ? "entry-" + item.id : anchorFor(item.name);
    const count = seen.get(base) ?? 0;
    if (count > 0 && !item.id) item.id = base.replace(/^entry-/, "") + "-" + (count + 1);
    seen.set(base, count + 1);
  });
}

function normalizeTaskTags(config: GodConfig) {
  const taskSections = new Set(["hero-tasks", "religious-tasks", "ruler-actions"]);
  config.sections.filter(section => taskSections.has(section.id)).forEach(section => section.items.forEach(item => {
    item.positiveTags ??= "未找到";
    item.negativeTags ??= "未找到";
  }));
}

function normalizeLocationModifiers(config: GodConfig) {
  config.sections.filter(section => section.id === "location-modifiers").forEach(section => section.items.forEach(item => {
    item.initialValue ??= "未找到。";
    item.modifierChange ??= { natural: "未找到。", external: "未找到。" };
  }));
}

export function prepareGodConfig(config: GodConfig) {
  normalizeTaskTags(config);
  normalizeLocationModifiers(config);
  disambiguateConfigEntries(config);
  return config;
}