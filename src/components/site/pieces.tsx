import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import type { Piece } from "@/data/site";

export function FeatureGrid({ items }: { items: Piece[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name} className="flex flex-col border border-line bg-surface">
          {item.image ? (
            <img src={item.image} alt={item.alt ?? ""} className="aspect-video w-full object-cover" />
          ) : null}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h2 className="text-2xl">{item.name}</h2>
            <p className="flex-1 text-muted">{item.blurb}</p>
            <Link
              to="/quote"
              search={{ type: item.quote }}
              className={buttonVariants() + " w-full sm:w-fit"}
            >
              Get a quote
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PieceList({ items }: { items: Piece[] }) {
  return (
    <ul className="divide-y divide-line border border-line bg-surface">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div>
            <h3 className="text-xl">{item.name}</h3>
            <p className="mt-1 text-sm text-muted">{item.blurb}</p>
          </div>
          <Link to="/quote" search={{ type: item.quote }} className={buttonVariants() + " shrink-0"}>
            Get a quote
          </Link>
        </li>
      ))}
    </ul>
  );
}
