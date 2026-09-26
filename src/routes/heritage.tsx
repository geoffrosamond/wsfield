import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand, PageIntro, SiteShell } from "@/components/site/shell";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage and Federation joinery · WS Field Joinery" },
      {
        name: "description",
        content:
          "Federation and heritage timber windows and doors, matched properly, plus sash repairs. Call (02) 9905 1291.",
      },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Heritage & Federation"
        title="Matched properly, the way councils expect."
        lede="Box-frame windows, casements, hoppers, sliders and doors reproduced with the joints and profiles the house already has."
      />
      <section className="grid lg:grid-cols-2">
        <img
          src="/gallery/013.jpg"
          alt="Heritage bay window in Western Red Cedar with copper dressing"
          className="h-80 w-full object-cover lg:h-full"
        />
        <div className="px-5 py-12 lg:px-12">
          <h2 className="text-3xl">What a sash actually is</h2>
          <p className="mt-4 text-muted">
            The sash is the framed panel of glass — the part that moves. On a double-hung window
            there are two. When the bottom rail rots or a stile splits, the whole window does not
            have to be thrown away. We repair or replace the sash and keep the box frame when it is
            still sound.
          </p>
          <p className="mt-4 text-muted">
            Check them once a year. A failed sash is a safety problem and a draught, and it is
            cheaper to catch before the frame goes as well.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_TEL} className={buttonVariants()}>
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/quote" search={{ type: "Sash window repair" }} className={buttonVariants({ variant: "ghost" })}>
              Get a quote
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl">What we take on</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Sash repairs", "Broken or rotted sashes, rebuilt to the original profile."],
            ["Federation matching", "Glazing bars, meeting rails and mouldings copied from the house, not from a nearby catalogue."],
            ["New heritage windows", "Box frame, casement, hopper, sliding and bifold, in the timber the facade needs."],
            ["Mouldings to match", "For a repair or an extension, run to the existing section so the new work disappears."],
            ["Timber cut to size", "Boards machined for people doing their own work who do not have the machines."],
            ["Council-sensitive jobs", "Traditional mortise and tenon, and the methods heritage controls usually require."],
          ].map(([title, text]) => (
            <li key={title} className="border border-line bg-surface p-5">
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand
        title="Have a rotten sash or a facade to match?"
        lede="Phone us with the address. A photo of the existing window is the fastest way to see if we can copy it."
      />
    </SiteShell>
  );
}
