
import "./catalogue-navigation.css";

export type CatalogueNavGroup = {
  name: string;
  entries: { href: string; label: string }[];
};

/** Source groups use the same small headings and plain links as the Agent page. */
export function CatalogueNavigation({ groups, label }: { groups: CatalogueNavGroup[]; label: string }) {
  return <nav className="sidebar-nav catalogue-nav" aria-label={label}>
    {groups.map(group => <div className="catalogue-nav-group" key={group.name}>
      <p>{group.name}</p>
      {group.entries.map(entry => <a key={entry.href} href={entry.href}><b>{entry.label}</b></a>)}
    </div>)}
  </nav>;
}
