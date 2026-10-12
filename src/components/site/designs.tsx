import { Link } from "@tanstack/react-router";

export type JoineryDesign = {
  id: string;
  code: string;
  name: string;
  group: "Windows" | "Doors";
  fits: readonly string[];
};

const WINDOWS = "Timber windows";
const SASH = "Sash window repair";
const ENTRANCE = "Entrance door";
const HERITAGE = "Heritage or Federation door";
const BIFOLD = "Bifold doors";
const FRENCH = "French doors";
const SLIDER = "Pivot or sliding doors";

export const DESIGNS: JoineryDesign[] = [
  { id: "awning", code: "A", name: "Awning", group: "Windows", fits: [WINDOWS] },
  { id: "awning-pair", code: "AA", name: "Pair of awnings", group: "Windows", fits: [WINDOWS] },
  { id: "awning-fixed", code: "A/F", name: "Awning over fixed", group: "Windows", fits: [WINDOWS] },
  { id: "casement", code: "C", name: "Casement", group: "Windows", fits: [WINDOWS] },
  { id: "casement-pair", code: "CC", name: "Pair of casements", group: "Windows", fits: [WINDOWS] },
  { id: "hopper", code: "H", name: "Hopper", group: "Windows", fits: [WINDOWS] },
  { id: "double-hung", code: "D", name: "Double hung", group: "Windows", fits: [WINDOWS, SASH, HERITAGE] },
  { id: "hung-fixed", code: "DF", name: "Hung beside fixed", group: "Windows", fits: [WINDOWS, SASH] },
  { id: "federation", code: "DFD", name: "Federation three-light", group: "Windows", fits: [WINDOWS, SASH, HERITAGE] },
  { id: "sliding-xo", code: "XO", name: "Sliding, left sash", group: "Windows", fits: [WINDOWS] },
  { id: "sliding-xox", code: "XOX", name: "Sliding, centre sash", group: "Windows", fits: [WINDOWS] },
  { id: "fixed", code: "F", name: "Fixed light", group: "Windows", fits: [WINDOWS] },
  { id: "louvre", code: "L", name: "Louvre", group: "Windows", fits: [WINDOWS] },
  { id: "bay", code: "Bay", name: "Bay window", group: "Windows", fits: [WINDOWS, SASH, HERITAGE] },
  { id: "door", code: "SD", name: "Single hinged door", group: "Doors", fits: [ENTRANCE, HERITAGE] },
  { id: "sidelights", code: "SD+SL", name: "Door and sidelights", group: "Doors", fits: [ENTRANCE, HERITAGE] },
  { id: "fanlight", code: "SD+FL", name: "Door and fanlight", group: "Doors", fits: [ENTRANCE, HERITAGE] },
  { id: "french", code: "FD", name: "French pair", group: "Doors", fits: [FRENCH, HERITAGE] },
  { id: "french-sides", code: "FD+SL", name: "French pair and sidelights", group: "Doors", fits: [FRENCH, HERITAGE] },
  { id: "bifold-3", code: "BF3", name: "Three-leaf bifold", group: "Doors", fits: [BIFOLD] },
  { id: "bifold-4", code: "BF4", name: "Four-leaf bifold", group: "Doors", fits: [BIFOLD] },
  { id: "slide-door", code: "XO", name: "Sliding door", group: "Doors", fits: [SLIDER] },
  { id: "stacker", code: "OXXO", name: "Four-panel slider", group: "Doors", fits: [SLIDER] },
  { id: "pivot", code: "PV", name: "Pivot door", group: "Doors", fits: [SLIDER, ENTRANCE] },
  { id: "dutch", code: "DT", name: "Dutch door", group: "Doors", fits: [ENTRANCE] },
  { id: "barn", code: "BN", name: "Barn slider", group: "Doors", fits: [SLIDER, ENTRANCE] },
];

export function designsFor(project: string, allowAll: boolean) {
  if (project === "Mouldings or timber cut to size") return [];
  if (project === "Not sure yet") return allowAll ? DESIGNS : [];
  return DESIGNS.filter((design) => design.fits.includes(project));
}

export function designLabel(id: string) {
  const design = DESIGNS.find((item) => item.id === id);
  return design ? `${design.code} · ${design.name}` : "";
}

function Mark({ children }: { children?: React.ReactNode }) {
  return (
    <svg viewBox="0 0 88 64" className="h-16 w-full" aria-hidden="true">
      <rect x="3" y="3" width="82" height="58" fill="none" stroke="currentColor" strokeWidth="2" />
      {children}
    </svg>
  );
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.25" />;
}

function Hinge({ dir, cx, cy }: { dir: "up" | "down" | "left" | "right"; cx: number; cy: number }) {
  const points = {
    up: `${cx},${cy - 6} ${cx - 5},${cy + 4} ${cx + 5},${cy + 4}`,
    down: `${cx},${cy + 6} ${cx - 5},${cy - 4} ${cx + 5},${cy - 4}`,
    left: `${cx - 6},${cy} ${cx + 4},${cy - 5} ${cx + 4},${cy + 5}`,
    right: `${cx + 6},${cy} ${cx - 4},${cy - 5} ${cx - 4},${cy + 5}`,
  }[dir];
  return <polygon points={points} fill="currentColor" />;
}

function Slide({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  const forward = x2 > x1;
  const tip = forward ? x2 : x2;
  const back = forward ? x2 - 6 : x2 + 6;
  return (
    <g stroke="currentColor" fill="currentColor" strokeWidth="1.25">
      <line x1={x1} y1={y} x2={back} y2={y} />
      <polygon points={`${tip},${y} ${back},${y - 3.5} ${back},${y + 3.5}`} />
    </g>
  );
}

function DesignMark({ id }: { id: string }) {
  switch (id) {
    case "awning":
      return (
        <Mark>
          <Hinge dir="up" cx={44} cy={32} />
        </Mark>
      );
    case "awning-pair":
      return (
        <Mark>
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Hinge dir="up" cx={24} cy={32} />
          <Hinge dir="up" cx={64} cy={32} />
        </Mark>
      );
    case "awning-fixed":
      return (
        <Mark>
          <Line x1={3} y1={28} x2={85} y2={28} />
          <Hinge dir="up" cx={44} cy={16} />
        </Mark>
      );
    case "casement":
      return (
        <Mark>
          <Hinge dir="left" cx={44} cy={32} />
        </Mark>
      );
    case "casement-pair":
      return (
        <Mark>
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Hinge dir="left" cx={24} cy={32} />
          <Hinge dir="right" cx={64} cy={32} />
        </Mark>
      );
    case "hopper":
      return (
        <Mark>
          <Hinge dir="down" cx={44} cy={32} />
        </Mark>
      );
    case "double-hung":
      return (
        <Mark>
          <Line x1={3} y1={32} x2={85} y2={32} />
          <Hinge dir="down" cx={44} cy={18} />
          <Hinge dir="up" cx={44} cy={46} />
        </Mark>
      );
    case "hung-fixed":
      return (
        <Mark>
          <Line x1={48} y1={3} x2={48} y2={61} />
          <Line x1={3} y1={32} x2={48} y2={32} />
          <Hinge dir="down" cx={25} cy={18} />
          <Hinge dir="up" cx={25} cy={46} />
        </Mark>
      );
    case "federation":
      return (
        <Mark>
          <Line x1={28} y1={3} x2={28} y2={61} />
          <Line x1={60} y1={3} x2={60} y2={61} />
          <Line x1={3} y1={32} x2={28} y2={32} />
          <Line x1={60} y1={32} x2={85} y2={32} />
          <Hinge dir="up" cx={15} cy={46} />
          <Hinge dir="up" cx={72} cy={46} />
        </Mark>
      );
    case "sliding-xo":
      return (
        <Mark>
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Slide x1={16} x2={34} y={32} />
        </Mark>
      );
    case "sliding-xox":
      return (
        <Mark>
          <Line x1={32} y1={3} x2={32} y2={61} />
          <Line x1={56} y1={3} x2={56} y2={61} />
          <Slide x1={36} x2={52} y={32} />
        </Mark>
      );
    case "fixed":
      return <Mark />;
    case "louvre":
      return (
        <Mark>
          {[14, 24, 34, 44, 54].map((y) => (
            <Line key={y} x1={12} y1={y} x2={76} y2={y - 3} />
          ))}
        </Mark>
      );
    case "bay":
      return (
        <Mark>
          <Line x1={24} y1={3} x2={24} y2={61} />
          <Line x1={64} y1={3} x2={64} y2={61} />
          <Line x1={8} y1={10} x2={20} y2={10} />
          <Line x1={68} y1={10} x2={80} y2={10} />
        </Mark>
      );
    case "door":
      return (
        <Mark>
          <circle cx={68} cy={34} r={2} fill="currentColor" />
        </Mark>
      );
    case "sidelights":
      return (
        <Mark>
          <Line x1={22} y1={3} x2={22} y2={61} />
          <Line x1={66} y1={3} x2={66} y2={61} />
          <circle cx={44} cy={34} r={2} fill="currentColor" />
        </Mark>
      );
    case "fanlight":
      return (
        <Mark>
          <Line x1={3} y1={18} x2={85} y2={18} />
          <Line x1={44} y1={3} x2={44} y2={18} />
          <Line x1={24} y1={3} x2={30} y2={18} />
          <Line x1={64} y1={3} x2={58} y2={18} />
          <circle cx={44} cy={40} r={2} fill="currentColor" />
        </Mark>
      );
    case "french":
      return (
        <Mark>
          <Line x1={44} y1={3} x2={44} y2={61} />
          <circle cx={38} cy={34} r={1.6} fill="currentColor" />
          <circle cx={50} cy={34} r={1.6} fill="currentColor" />
        </Mark>
      );
    case "french-sides":
      return (
        <Mark>
          <Line x1={20} y1={3} x2={20} y2={61} />
          <Line x1={68} y1={3} x2={68} y2={61} />
          <Line x1={44} y1={3} x2={44} y2={61} />
          <circle cx={38} cy={34} r={1.6} fill="currentColor" />
          <circle cx={50} cy={34} r={1.6} fill="currentColor" />
        </Mark>
      );
    case "bifold-3":
      return (
        <Mark>
          <Line x1={32} y1={3} x2={32} y2={61} />
          <Line x1={58} y1={3} x2={58} y2={61} />
          <Slide x1={14} x2={26} y={32} />
        </Mark>
      );
    case "bifold-4":
      return (
        <Mark>
          <Line x1={24} y1={3} x2={24} y2={61} />
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Line x1={64} y1={3} x2={64} y2={61} />
          <Slide x1={10} x2={20} y={32} />
          <Slide x1={78} x2={68} y={32} />
        </Mark>
      );
    case "slide-door":
      return (
        <Mark>
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Slide x1={14} x2={36} y={32} />
        </Mark>
      );
    case "stacker":
      return (
        <Mark>
          <Line x1={24} y1={3} x2={24} y2={61} />
          <Line x1={44} y1={3} x2={44} y2={61} />
          <Line x1={64} y1={3} x2={64} y2={61} />
          <Slide x1={28} x2={40} y={32} />
          <Slide x1={60} x2={48} y={32} />
        </Mark>
      );
    case "pivot":
      return (
        <Mark>
          <circle cx={44} cy={10} r={2} fill="none" stroke="currentColor" strokeWidth="1.25" />
          <circle cx={44} cy={54} r={2} fill="none" stroke="currentColor" strokeWidth="1.25" />
          <Line x1={44} y1={12} x2={44} y2={52} />
        </Mark>
      );
    case "dutch":
      return (
        <Mark>
          <Line x1={3} y1={32} x2={85} y2={32} />
          <circle cx={68} cy={20} r={1.7} fill="currentColor" />
          <circle cx={68} cy={46} r={1.7} fill="currentColor" />
        </Mark>
      );
    case "barn":
      return (
        <Mark>
          <Line x1={10} y1={10} x2={78} y2={10} />
          <rect x={18} y={14} width={36} height={42} fill="none" stroke="currentColor" strokeWidth="1.25" />
          <Slide x1={40} x2={62} y={34} />
        </Mark>
      );
    default:
      return <Mark />;
  }
}

export function DesignPicker({
  project,
  value,
  onChange,
  allowAll = false,
}: {
  project: string;
  value: string | null;
  onChange: (id: string | null) => void;
  allowAll?: boolean;
}) {
  if (project === "Mouldings or timber cut to size") {
    return (
      <p className="mt-4 text-sm text-muted">
        Mouldings and cut timber are not a standard window or door. Describe the profile in the notes.
      </p>
    );
  }

  const list = designsFor(project, allowAll);
  if (list.length === 0) {
    return (
      <p className="mt-4 text-sm text-muted">
        Pick the job above to see the usual arrangements, or{" "}
        <Link to="/quote" className="underline underline-offset-4">
          open the quote page
        </Link>
        .
      </p>
    );
  }

  const groups = (["Windows", "Doors"] as const).filter((group) => list.some((item) => item.group === group));

  return (
    <fieldset className="mt-6">
      <legend className="text-sm">
        Closest arrangement
        <span className="mt-1 block text-muted">
          Drawn from outside, the way an Australian window schedule is read. A triangle points at the
          hinge. An arrow is the sash that slides. These are not copies of AS 2047.
        </span>
      </legend>
      {groups.map((group) => (
        <div key={group} className="mt-4">
          {groups.length > 1 ? <p className="text-xs tracking-widest uppercase text-cedar">{group}</p> : null}
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {list
              .filter((item) => item.group === group)
              .map((item) => {
                const selected = value === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onChange(selected ? null : item.id)}
                    className={
                      "border px-2 py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cedar " +
                      (selected ? "border-fg bg-bg" : "border-line bg-bg/40")
                    }
                  >
                    <DesignMark id={item.id} />
                    <span className="mt-1 block text-xs tracking-widest uppercase text-cedar">{item.code}</span>
                    <span className="block text-sm">{item.name}</span>
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </fieldset>
  );
}
