import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { QuoteForm } from "@/components/site/quote-form";
import { CtaBand, SiteShell } from "@/components/site/shell";
import {
  ACCOYA_URL,
  HOURS_SHORT,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  places,
  reasons,
  testimonials,
  timbers,
} from "@/data/site";
import { gallery } from "@/data/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WS Field Joinery · Timber doors and windows, Brookvale" },
      {
        name: "description",
        content:
          "Custom timber doors and windows made in Brookvale since 1977. Call (02) 9905 1291 or request a quote.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <section className="grid bg-fg text-bg lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-12 lg:col-span-5 lg:px-10 lg:py-20">
          <p className="text-xs tracking-widest uppercase text-bg/70">Brookvale workshop · since 1977</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Timber doors and windows, made for the house.</h1>
          <p className="mt-4 max-w-md text-lg text-bg/85">
            Solid timber joinery for the Northern Beaches, North Shore, Mosman and the Eastern
            Suburbs. You speak with Andrew or Nick — joiners, not a call centre.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_TEL} className={buttonVariants({ variant: "light" })}>
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/quote" className={buttonVariants({ variant: "inverse" })}>
              Get a quote
            </Link>
          </div>
          <a href={MAPS_URL} className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
            Get directions · {HOURS_SHORT}
          </a>
        </div>
        <div className="relative min-h-72 lg:col-span-7">
          <img
            src="/photos/entrance.jpg"
            alt="Solid timber entrance door with sidelights on a sandstone Sydney house"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-b border-line">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {[
            ["Doors", "Entrance, bifold, French and heritage.", "/doors"],
            ["Windows", "Casement, sash, hopper and box frame.", "/windows"],
            ["Heritage", "Match Federation work. Repair rotten sashes.", "/heritage"],
          ].map(([label, text, to]) => (
            <li key={label} className="bg-bg px-5 py-8">
              <h2 className="text-2xl">{label}</h2>
              <p className="mt-2 text-muted">{text}</p>
              <Link to={to as "/doors"} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-cedar underline underline-offset-4">
                See {label.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs tracking-widest uppercase text-cedar">From the workshop</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Jobs we have already made.</h2>
          </div>
          <Link to="/gallery" className={buttonVariants()}>
            See the gallery
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {["013", "001", "009", "005", "101", "049"].map((id) => {
            const shot = gallery.find((item) => item.src === `/gallery/${id}.jpg`);
            if (!shot) return null;
            return (
              <li key={id}>
                <Link to="/gallery" className="block">
                  <img src={shot.src} alt={shot.title} className="aspect-video w-full object-cover" />
                  <span className="mt-2 block text-sm text-muted">{shot.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-cedar">Why people come back</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Joinery that is built, not assembled from a catalogue.</h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="border-t border-line pt-5">
              <h3 className="text-2xl">{reason.title}</h3>
              <p className="mt-2 text-muted">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid lg:grid-cols-2">
        <img
          src="/photos/castle.jpg"
          alt="Cedar entrance with a smaller everyday door set into a larger ceremonial door"
          className="h-80 w-full object-cover lg:h-full"
        />
        <div className="flex flex-col justify-center bg-surface px-5 py-12 lg:px-12">
          <p className="text-xs tracking-widest uppercase text-cedar">Made to the brief</p>
          <h2 className="mt-3 text-3xl md:text-4xl">“My home is my castle.”</h2>
          <p className="mt-4 text-muted">
            One client asked for a castle-style entrance in sandblasted Western Red Cedar: a large
            ceremonial door, a smaller door for every day, and a viewing hatch. It sits against
            sandstone and still works as a front door. If you can describe it, we can make it —
            including Federation profiles councils expect to see matched, not approximated.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/quote" search={{ type: "Entrance door" }} className={buttonVariants()}>
              Get a quote
            </Link>
            <a href={PHONE_TEL} className={buttonVariants({ variant: "ghost" })}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs tracking-widest uppercase text-cedar">How a job starts</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Three steps. Then the bench.</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["Call or leave a brief", "Tell us the opening, the suburb, and whether you are matching something old."],
              ["Talk it through", "In the Brookvale workshop, or on site. Nick’s building background helps when the opening is awkward."],
              ["We make it here", "Mortise and tenon, your choice of timber, and a date we intend to keep."],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-display text-3xl text-cedar">{index + 1}</span>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <img
          src="/photos/joint.jpg"
          alt="Close view of a tight mortise and tenon joint in pale timber"
          className="aspect-video w-full object-cover"
        />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-widest uppercase text-cedar">From the people who use us</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Builders, an architect, and the houses themselves.</h2>
            </div>
            <Link to="/workshop" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">
              Read the workshop story
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <li key={item.name} className="border border-line bg-bg p-6">
                <blockquote>
                  <p className="text-lg">“{item.quote}”</p>
                  <footer className="mt-4 text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="block text-muted">{item.role}</span>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs tracking-widest uppercase text-cedar">Get a quote</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Tell us the job. Then call.</h2>
          <p className="mt-4 text-muted">
            A short brief means the first conversation is about timber and the opening, not starting
            from scratch. Or skip the form.
          </p>
          <a href={PHONE_TEL} className={buttonVariants() + " mt-6"}>
            Call {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-muted">{HOURS_SHORT} · Unit 7, 16 Clearview Place, Brookvale</p>
          <a href={MAPS_URL} className="mt-1 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
            Get directions
          </a>
        </div>
        <QuoteForm />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl">Where we work</h2>
            <p className="mt-3 text-muted">
              From Palm Beach to Manly, across the North Shore, and through Paddington, Rose Bay,
              Double Bay and the Eastern Suburbs.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {places.map((place) => (
                <li key={place} className="border border-line bg-surface px-3 py-1 text-sm">
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Timber we actually mill</h2>
            <p className="mt-3 text-muted">
              Hardwood sills as standard. Accoya when you want stability — we are an{" "}
              <a href={ACCOYA_URL} className="underline underline-offset-4">
                Accoya manufacturer
              </a>
              , and we use it on most joinery now. Offcuts go to local woodworkers and schools.
              Warringah Permaculture collects the sawdust.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {timbers.map((timber) => (
                <li key={timber} className="bg-fg px-3 py-1 text-sm text-bg">
                  {timber}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
