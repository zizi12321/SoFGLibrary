"use client";

import { lazy, Suspense, useEffect, useState } from "react";
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
import AlaiArchive from "./AlaiArchive";
import MekhaneArchive from "./MekhaneArchive";
import VillikosArchive from "./VillikosArchive";
import AberrantMetalArchive from "./AberrantMetalArchive";
import { ArchiveJumpReturnProvider } from "./ArchiveJumpReturn";
import GodIndex from "./GodIndex";
import BaseLocationModifiersArchive from "./BaseLocationModifiersArchive";
import ReligionsArchive from "./ReligionsArchive";
import NonPlayerUnitsArchive from "./NonPlayerUnitsArchive";
import ArmiesArchive from "./ArmiesArchive";
import BaseItemsArchive from "./BaseItemsArchive";
import MinionsArchive from "./MinionsArchive";
import type { ArchivePageChoice } from "./GodArchiveTypes";

const MagicArchive = lazy(() => import("./MagicArchive"));
const CharacterModifiersArchive = lazy(() => import("./CharacterModifiersArchive"));
const AgentsArchive = lazy(() => import("./AgentsArchive"));
const LocationsArchive = lazy(() => import("./LocationsArchive"));
const PointsOfInterestArchive = lazy(() => import("./PointsOfInterestArchive"));
const EventsArchive = lazy(() => import("./EventsArchive"));

type GodChoice = ArchivePageChoice;

function ArchivePage() {
  const [god, setGod] = useState<GodChoice>("index");
  useEffect(() => {
    const requestedPage = new URLSearchParams(window.location.search).get("page");
    if (requestedPage === "base-location-modifiers" || requestedPage === "base-items" || requestedPage === "agents" || requestedPage === "religions" || requestedPage === "magic" || requestedPage === "non-player-units" || requestedPage === "minions" || requestedPage === "armies" || requestedPage === "events" || requestedPage === "locations" || requestedPage === "character-modifiers" || requestedPage === "points-of-interest") {
      setGod(requestedPage);
      return;
    }
    const requested = new URLSearchParams(window.location.search).get("god") as GodChoice | null;
    if (requested && ["she-who-will-feast", "iastur", "vinerva", "ophanim", "mammon", "broken-maker", "evil-beneath", "deaths-games", "cordyceps", "ixthus", "kishi", "living-void", "chandalor", "escamrak", "adolia", "kalastrophe", "thing-from-beyond", "paradoxis", "shadow-counsel", "shadow-counsel-war", "lotus-egregore", "aberrant-metal", "alai", "mekhane", "villikos"].includes(requested)) setGod(requested);
  }, []);
  const switchGod = (nextGod: GodChoice) => {
    setGod(nextGod);
    const url = nextGod === "index" ? window.location.pathname : (nextGod === "base-location-modifiers" || nextGod === "base-items" || nextGod === "agents" || nextGod === "religions" || nextGod === "magic" || nextGod === "non-player-units" || nextGod === "minions" || nextGod === "armies" || nextGod === "events" || nextGod === "locations" || nextGod === "character-modifiers" || nextGod === "points-of-interest") ? `${window.location.pathname}?page=${nextGod}` : `${window.location.pathname}?god=${nextGod}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  if (god === "index") return <GodIndex />;
  if (god === "character-modifiers") return <Suspense fallback={<main className="archive-index"><p>正在载入角色特质…</p></main>}><CharacterModifiersArchive /></Suspense>;
  if (god === "locations") return <Suspense fallback={<main className="archive-index"><p>正在载入地点…</p></main>}><LocationsArchive onReturn={() => switchGod("index")} /></Suspense>;
  if (god === "points-of-interest") return <Suspense fallback={<main className="archive-index"><p>正在载入兴趣点…</p></main>}><PointsOfInterestArchive onReturn={() => switchGod("index")} /></Suspense>;
  if (god === "events") return <Suspense fallback={<main className="archive-index"><p>正在载入事件…</p></main>}><EventsArchive onReturn={() => switchGod("index")} /></Suspense>;
  if (god === "armies") return <ArmiesArchive onReturn={() => switchGod("index")} />;
  if (god === "non-player-units") return <NonPlayerUnitsArchive onReturn={() => switchGod("index")} />;
  if (god === "magic") return <Suspense fallback={<main className="archive-index"><p>正在载入魔法…</p></main>}><MagicArchive /></Suspense>;
  if (god === "religions") return <ReligionsArchive onReturn={() => switchGod("index")} />;
  if (god === "agents") return <Suspense fallback={<main className="archive-index"><p>正在载入 Agent…</p></main>}><AgentsArchive onReturn={() => switchGod("index")} /></Suspense>;
  if (god === "minions") return <MinionsArchive onReturn={() => switchGod("index")} />;
  if (god === "base-items") return <BaseItemsArchive onReturn={() => switchGod("index")} />;
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
  if (god === "villikos") return <VillikosArchive onGodChange={switchGod} />;
  if (god === "mekhane") return <MekhaneArchive onGodChange={switchGod} />;
  if (god === "alai") return <AlaiArchive onGodChange={switchGod} />;
  if (god === "aberrant-metal") return <AberrantMetalArchive onGodChange={switchGod} />;
  if (god === "lotus-egregore") return <LotusEgregoreArchive onGodChange={switchGod} />;
  return <GodIndex />;
}

export default function GodArchive() {
  return <ArchiveJumpReturnProvider><ArchivePage /></ArchiveJumpReturnProvider>;
}
