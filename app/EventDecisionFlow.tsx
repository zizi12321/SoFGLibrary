"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Maximize2, X } from "lucide-react";
import { RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { combatDecision, selectionRoutes, conditionSelectsVariant, resultSelectionLabels } from "./EventDecisionModel";
import { variantLabel } from "./EventBranchLabels";
import { familySelectionRule, type EventFamily } from "./EventVariantModel";

type Props = { config: ArchiveRecordConfig; family: EventFamily };

function FlowArrow({ label }: { label?: string }) {
 const marker = useId().replaceAll(":", "");
 return <div className="event-chart-arrow">
  <svg viewBox="0 0 200 42" aria-hidden="true">
   <defs><marker id={marker} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" /></marker></defs>
   <path d="M100 0 V37" markerEnd={"url(#" + marker + ")"} />
   {label && <text x="110" y="23">{label}</text>}
  </svg>
 </div>;
}

function Conditions({ config, text, label }: { config: ArchiveRecordConfig; text: string; label: string }) {
 return <div className="event-chart-node event-chart-condition">
  <b>{label}</b>
  <ul>{text.split("\n并且 ").map((term, index) =>
   <li key={index}><RichText config={config} text={term} /></li>)}</ul>
 </div>;
}

type ForkItem = { key: string; label: string; body: ReactNode };
function FlowFork({ items, className = "" }: { items: ForkItem[]; className?: string }) {
 const ref = useRef<HTMLDivElement>(null);
 const marker = useId().replaceAll(":", "");
 const [lines, setLines] = useState<{ width: number; height: number; paths: string[] }>({ width: 1, height: 1, paths: [] });
 useLayoutEffect(() => {
  const element = ref.current;
  if (!element) return;
  let frame = 0;
  const measure = () => {
   cancelAnimationFrame(frame);
   frame = requestAnimationFrame(() => {
    const bounds = element.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const nodes = [...element.querySelectorAll(":scope > .event-chart-fork-items > .event-chart-branch")];
    const oneRow = new Set(nodes.map(node => Math.round(node.getBoundingClientRect().top))).size === 1;
    const paths = nodes.map(node => {
     const target = node.getBoundingClientRect();
     const x = target.left - bounds.left + target.width / 2, y = target.top - bounds.top;
     return oneRow ? "M" + bounds.width / 2 + " 0 V" + (y - 18) + " H" + x + " V" + (y - 3)
      : "M" + bounds.width / 2 + " 0 V12 H7 V" + (y - 18) + " H" + x + " V" + (y - 3);
    });
    setLines(current => {
     const next = { width: bounds.width, height: bounds.height, paths };
     return JSON.stringify(current) === JSON.stringify(next) ? current : next;
    });
   });
  };
  const observer = new ResizeObserver(measure);
  observer.observe(element);
  for (const node of element.querySelectorAll(":scope > .event-chart-fork-items > .event-chart-branch")) observer.observe(node);
  measure();
  return () => { cancelAnimationFrame(frame); observer.disconnect(); };
 }, [items.length]);
 return <div ref={ref} className={"event-chart-fork " + className} style={{ "--chart-columns": Math.min(2, items.length), "--chart-wide-columns": Math.min(3, items.length) } as CSSProperties}>
  <svg className="event-chart-connections" width="100%" height="100%" viewBox={"0 0 " + lines.width + " " + lines.height} aria-hidden="true">
   <defs><marker id={marker} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" /></marker></defs>
   {lines.paths.map((path, index) => <path key={index} d={path} markerEnd={"url(#" + marker + ")"} />)}
  </svg>
  <div className="event-chart-fork-items">{items.map(item =>
   <section key={item.key} className="event-chart-branch" aria-label={item.label}>
    <div className="event-chart-branch-label">{item.label}</div>{item.body}
   </section>)}</div>
 </div>;
}


function ChartContent({ config, family }: Props) {
 const { records } = family;
 const conditionSelected = conditionSelectsVariant(records);
 const reference = (record: EventRecord) => '<CrossReference name="' + variantLabel(record) + ' · 选项与效果" href="#entry-' + record.entry.id + '" />';
 const results = (entries: EventRecord[]) => {
  const { relative, labels } = resultSelectionLabels(entries, records);
  return <div className="event-chart-node event-chart-result-group">
   {entries.length > 1 && <b>{relative ? "组内随机结果" : "候选结果"}</b>}
   {relative && <p className="event-chart-probability-note">抽中本框所列结果时的相对概率：</p>}
   {entries.map((record, index) => <div key={record.entry.id} className="event-chart-result event-flow-result" data-event-id={record.entry.id}>
    <RichText config={config} text={reference(record)} />
    {labels[index] && <p>{labels[index]}</p>}
   </div>)}
  </div>;
 };
 const combat = combatDecision(records);
 if (combat) {
  const roles = combat.opponents.flatMap(opponent => opponent.roles);
  const fixedRole = new Set(roles.map(role => role.name)).size === 1 ? roles[0].name : "";
  const states = roles.flatMap(role => role.results.map(entry => entry.state));
  const fixedState = new Set(states).size === 1 ? states[0] : "";
  const fixedOpponent = combat.opponents.length === 1 ? combat.opponents[0].name : "";
  const entry = [fixedOpponent && "与 " + fixedOpponent + " 战斗", fixedRole && "Agent 作为" + fixedRole, fixedRole ? combat.outcome.replace("Agent ", "") : combat.outcome, fixedState].filter(Boolean).join("，");
  const branches = combat.opponents.flatMap(opponent => opponent.roles.flatMap(role => role.results.map(({ state, record }) => ({
   key: record.entry.id!, label: variantLabel(record),
   body: <>
    <div className="event-chart-node event-chart-condition">{[
     !fixedOpponent && "对手：" + opponent.name, !fixedRole && "Agent：" + role.name, !fixedState && state,
    ].filter(Boolean).map((text, index) => <p key={index}>{text}</p>)}</div>
    <FlowArrow />{results([record])}
   </>,
  }))));
  return <div className="event-chart-content event-combat-decision">
   <div className="event-chart-node event-chart-start"><b>战斗结算</b><p>{entry}</p></div>
   <FlowFork className="event-chart-combat-fork" items={branches} />
  </div>;
 }
 const routes = selectionRoutes(records);
 const drawBranch = (branch: typeof routes[number]["branches"][number]) => <>
  {branch.condition && <><Conditions config={config} text={branch.condition} label="分支条件 · 全部满足" /><FlowArrow /></>}
  {results(branch.records)}
 </>;
 return <div className="event-chart-content">
  <p className="event-chart-rule">{conditionSelected ? "按条件区分事件版本。" : familySelectionRule(records)}</p>
  <div className="event-chart-routes">{routes.map((route, routeIndex) =>
   <section className="event-flow-route" key={route.trigger} aria-label={"触发入口 " + (routeIndex + 1)}>
    <div className="event-chart-node event-chart-start"><b>{routes.length > 1 ? "入口 " + String(routeIndex + 1).padStart(2, "0") : "触发入口"}</b>
     <p><RichText config={config} text={route.trigger} /></p>
    </div>
    <FlowArrow />
    {route.shared && <><Conditions config={config} text={route.shared} label="共同条件 · 全部满足" /><FlowArrow /></>}
    {route.branches.length === 1 ? <div className="event-chart-single-result">{drawBranch(route.branches[0])}</div>
     : <FlowFork items={route.branches.map((branch, index) => ({
      key: String(index), label: branch.records.map(record => variantLabel(record)).join("、"), body: drawBranch(branch),
     }))} />}
   </section>)}</div>
 </div>;
}

export default function EventDecisionFlow({ config, family }: Props) {
 const dialogRef = useRef<HTMLDialogElement>(null);
 const figureRef = useRef<HTMLElement>(null);
 const opener = useRef<HTMLButtonElement>(null);
 const [expanded, setExpanded] = useState(false);
 useEffect(() => {
  if (!expanded) return;
  const dialog = dialogRef.current!;
  const overflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  dialog.showModal();
  return () => { dialog.close(); document.body.style.overflow = overflow; opener.current?.focus({ preventScroll: true }); };
 }, [expanded]);
 const close = () => setExpanded(false);
 return <figure ref={figureRef} className="event-decision" aria-label={family.name + "判定流程图"}>
  <button ref={opener} type="button" className="event-chart-expand" onClick={() => setExpanded(true)}><Maximize2 size={15} />放大流程图</button>
  <ChartContent config={config} family={family} />
  {expanded && <dialog ref={dialogRef} className="event-chart-dialog" aria-label={family.name + "判定流程图"} onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}
   onClickCapture={event => {
    const link = (event.target as Element).closest(".cross-reference");
    if (!link) return;
    const inlineChart = figureRef.current?.querySelector(":scope > .event-chart-content");
    const target = [...(inlineChart?.querySelectorAll<HTMLAnchorElement>(".cross-reference") ?? [])].find(anchor => anchor.getAttribute("href") === link.getAttribute("href"));
    if (!target) return;
    event.preventDefault(); event.stopPropagation();
    const mouse = { bubbles: true, cancelable: true, view: window, ctrlKey: event.ctrlKey, metaKey: event.metaKey, shiftKey: event.shiftKey, altKey: event.altKey };
    close();
    // Keep preview state on the permanent inline reference, not on a link
    // that will be unmounted with this enlarged dialog.
    queueMicrotask(() => target.dispatchEvent(new MouseEvent("click", mouse)));
   }}>
   <header><div><small>判定流程图</small><h3>{family.name}</h3></div><button type="button" aria-label="关闭流程图" onClick={close}><X size={22} /></button></header>
   <div className="event-chart-dialog-body"><ChartContent config={config} family={family} /></div>
  </dialog>}
 </figure>;
}
