import {
  Orbit,
  Hourglass,
  Drama,
  Swords,
  Flower2,
  BookText,
  Dna,
  Brain,
  ScanEye,
  Bug,
  CircleDashed,
  Crown,
  Droplets,
  Heart,
  Infinity,
  LayersArrowDown,
  Mountain,
  PlayingCardsFan,
  Sparkle,
  Trophy,
  Sprout,
  Utensils,
  Worm,
} from "lucide-react";

type GodMarkId =
  | "she-who-will-feast"
  | "iastur"
  | "vinerva"
  | "ophanim"
  | "mammon"
  | "broken-maker"
  | "evil-beneath"
  | "deaths-games"
  | "cordyceps"
  | "ixthus" | "kishi"
  | "living-void"
  | "chandalor"
  | "escamrak"
  | "adolia"
  | "kalastrophe" | "thing-from-beyond" | "paradoxis" | "shadow-counsel" | "shadow-counsel-war" | "lotus-egregore";

const marks = {
  "she-who-will-feast": Worm,
  iastur: BookText,
  vinerva: Sprout,
  ophanim: Sparkle,
  mammon: Mountain,
  "broken-maker": Infinity,
  "evil-beneath": LayersArrowDown,
  "deaths-games": PlayingCardsFan,
  cordyceps: Bug,
  ixthus: Trophy,
  kishi: Droplets,
  "living-void": CircleDashed,
  chandalor: Heart,
  escamrak: Dna,
  adolia: Brain,
  kalastrophe: ScanEye,
  "thing-from-beyond": Orbit,
  paradoxis: Hourglass,
  "shadow-counsel": Drama,
  "shadow-counsel-war": Swords,
  "lotus-egregore": Flower2,
} as const;

export function GodMark({ god, size = 17 }: { god: GodMarkId; size?: number }) {
  const Icon = marks[god];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
