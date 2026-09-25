import { eventGroups as sourceGroups } from "./EventsData";
import { presentEventGroups } from "./EventPresentation";
export const eventGroups = presentEventGroups(sourceGroups);
export { eventAliases } from "./EventsData";
