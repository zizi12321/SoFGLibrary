"use client";

import { useEffect, useState } from "react";
import LivingVoidArchive from "./LivingVoidArchive";
import ChandalorArchive from "./ChandalorArchive";
import SheWhoWillFeastArchive from "./SheWhoWillFeastArchive";
import IasturArchive from "./IasturArchive";
import VinervaArchive from "./VinervaArchive";
import OphanimArchive from "./OphanimArchive";
import MammonArchive from "./MammonArchive";
import BrokenMakerArchive from "./BrokenMakerArchive";
import EvilBeneathArchive from "./EvilBeneathArchive";
import DeathsGamesArchive from "./DeathsGamesArchive";
import CordycepsArchive from "./CordycepsArchive";
import IxthusArchive from "./IxthusArchive";
import KishiArchive from "./KishiArchive";
import EscamrakArchive from "./EscamrakArchive";
import AdoliaArchive from "./AdoliaArchive";
import KalastropheArchive from "./KalastropheArchive";
import ThingFromBeyondArchive from "./ThingFromBeyondArchive";
import ParadoxisArchive from "./ParadoxisArchive";
import ShadowCounselArchive from "./ShadowCounselArchive";
import ShadowCounselWarArchive from "./ShadowCounselWarArchive";
import LotusEgregoreArchive from "./LotusEgregoreArchive";
import GodIndex from "./GodIndex";
import BaseLocationModifiersArchive from "./BaseLocationModifiersArchive";
import type { ArchivePageChoice } from "./GodArchiveTypes";

type GodChoice = ArchivePageChoice;

export default function GodArchive() {
  const [god, setGod] = useState<GodChoice>("index");
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("page") === "base-location-modifiers") {
      setGod("base-location-modifiers");
      return;
    }
    const requested = new URLSearchParams(window.location.search).get("god") as GodChoice | null;
    if (requested && ["she-who-will-feast", "iastur", "vinerva", "ophanim", "mammon", "broken-maker", "evil-beneath", "deaths-games", "cordyceps", "ixthus", "kishi", "living-void", "chandalor", "escamrak", "adolia", "kalastrophe", "thing-from-beyond", "paradoxis", "shadow-counsel", "shadow-counsel-war", "lotus-egregore"].includes(requested)) setGod(requested);
  }, []);
  const switchGod = (nextGod: GodChoice) => {
    setGod(nextGod);
    const url = nextGod === "index" ? window.location.pathname : nextGod === "base-location-modifiers" ? `${window.location.pathname}?page=base-location-modifiers` : `${window.location.pathname}?god=${nextGod}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  if (god === "index") return <GodIndex onSelect={switchGod} />;
  if (god === "base-location-modifiers") return <BaseLocationModifiersArchive onReturn={() => switchGod("index")} />;
  if (god === "she-who-will-feast") return <SheWhoWillFeastArchive onGodChange={switchGod} />;
  if (god === "iastur") return <IasturArchive onGodChange={switchGod} />;
  if (god === "vinerva") return <VinervaArchive onGodChange={switchGod} />;
  if (god === "ophanim") return <OphanimArchive onGodChange={switchGod} />;
  if (god === "mammon") return <MammonArchive onGodChange={switchGod} />;
  if (god === "broken-maker") return <BrokenMakerArchive onGodChange={switchGod} />;
  if (god === "evil-beneath") return <EvilBeneathArchive onGodChange={switchGod} />;
  if (god === "deaths-games") return <DeathsGamesArchive onGodChange={switchGod} />;
  if (god === "cordyceps") return <CordycepsArchive onGodChange={switchGod} />;
  if (god === "ixthus") return <IxthusArchive onGodChange={switchGod} />;
  if (god === "kishi") return <KishiArchive onGodChange={switchGod} />;
  if (god === "living-void") return <LivingVoidArchive onGodChange={switchGod} />;
  if (god === "chandalor") return <ChandalorArchive onGodChange={switchGod} />;
  if (god === "escamrak") return <EscamrakArchive onGodChange={switchGod} />;
  if (god === "kalastrophe") return <KalastropheArchive onGodChange={switchGod} />;
  if (god === "adolia") return <AdoliaArchive onGodChange={switchGod} />;
  if (god === "thing-from-beyond") return <ThingFromBeyondArchive onGodChange={switchGod} />;
  if (god === "paradoxis") return <ParadoxisArchive onGodChange={switchGod} />;
  if (god === "shadow-counsel") return <ShadowCounselArchive onGodChange={switchGod} />;
  if (god === "shadow-counsel-war") return <ShadowCounselWarArchive onGodChange={switchGod} />;
  if (god === "lotus-egregore") return <LotusEgregoreArchive onGodChange={switchGod} />;
  return <GodIndex onSelect={switchGod} />;
}
