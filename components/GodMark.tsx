import {
  BookText,
  Dna,
  Brain,
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
  | "adolia";

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
} as const;

export function GodMark({ god, size = 17 }: { god: GodMarkId; size?: number }) {
  const Icon = marks[god];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
