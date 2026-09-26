import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand, PageIntro, SiteShell } from "@/components/site/shell";
import { gallery, quoteFor, type GalleryShot } from "@/data/gallery";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

const filters = ["All", "Doors", "Windows", "Gates", "Joinery"] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Joinery gallery · WS Field Joinery, Brookvale" },
      {
        name: "description",
        content:
          "Doors, windows and gates made by WS Field Joinery in Brookvale. Call (02) 9905 1291.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<GalleryShot | null>(null);
  const shots = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((shot) => shot.kind === filter)),
    [filter],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const index = shots.findIndex((shot) => shot.src === open.src);
        if (index < 0) return;
        const next = event.key === "ArrowRight" ? index + 1 : index - 1;
        const shot = shots[(next + shots.length) % shots.length];
        if (shot) setOpen(shot);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shots]);

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Gallery"
        title="Work that has already left the bench."
        lede="Doors, windows, gates and the odd one-off, photographed from jobs made in Brookvale. Tap a picture, then call if you want something in the same family."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter the gallery">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={
                filter === item
                  ? buttonVariants()
                  : buttonVariants({ variant: "ghost" })
              }
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {shots.map((shot) => (
            <li key={shot.src}>
              <button type="button" onClick={() => setOpen(shot)} className="w-full text-left">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <span className="mt-2 block text-sm text-muted">{shot.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-fg/90 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close gallery photo"
            onClick={() => setOpen(null)}
          />
          <div className="relative z-10 w-full max-w-4xl bg-bg p-4 text-fg">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted">{open.kind}</p>
              <button type="button" onClick={() => setOpen(null)} className="inline-flex size-11 items-center justify-center">
                <span className="sr-only">Close</span>
                <X className="size-5" />
              </button>
            </div>
            <img src={open.src} alt={open.title} className="mt-2 max-h-[70vh] w-full object-contain" />
            <h2 className="mt-4 text-2xl">{open.title}</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link to="/quote" search={{ type: quoteFor(open) }} className={buttonVariants()}>
                Get a quote
              </Link>
              <a href={PHONE_TEL} className={buttonVariants({ variant: "ghost" })}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <CtaBand
        title="See something close to your job?"
        lede="Call with the photo in mind, or leave a brief and name the timber."
      />
    </SiteShell>
  );
}
