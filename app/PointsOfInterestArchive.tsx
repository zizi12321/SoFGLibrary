"use client";

import LocationsArchive from "./LocationsArchive";

export default function PointsOfInterestArchive({ onReturn }: { onReturn: () => void }) {
  return <LocationsArchive kind="points-of-interest" onReturn={onReturn} />;
}
