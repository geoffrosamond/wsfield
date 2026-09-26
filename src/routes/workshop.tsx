import { createFileRoute } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand, PageIntro, SiteShell } from "@/components/site/shell";
import { ACCOYA_URL, ADDRESS, HOURS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, testimonials } from "@/data/site";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "The workshop · WS Field Joinery, Brookvale" },
      {
        name: "description",
        content:
          "Family joinery workshop in Brookvale since 1977. Andrew, Nick and Peter. Visit Mon–Fri 7:30am–4:00pm.",
      },
    ],
  }),
  component: WorkshopPage,
});

function WorkshopPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="The workshop"
        title="A father, a son, and a bench that has been busy since 1977."
        lede="WS Field Joinery Pty Ltd is family owned and still in Brookvale. Andrew and Nick are qualified timber joiners. Peter works with them. Only the best quality is the standard they use."
      />
      <section className="grid lg:grid-cols-2">
        <img
          src="/photos/workshop.jpg"
          alt="Timber racks and a door frame in progress inside the joinery workshop"
          className="h-80 w-full object-cover lg:h-full"
        />
        <div className="flex flex-col justify-center px-5 py-12 lg:px-12">
          <h2 className="text-3xl">Come in. There is parking.</h2>
          <p className="mt-4 text-muted">
            The useful conversation happens in front of timber, not over a form. Bring drawings,
            a photo of the elevation, or just the problem. Nick’s site-building experience is what
            we use when the opening and the joinery have to agree with each other.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-xs tracking-widest uppercase text-cedar">Address</dt>
              <dd className="mt-1">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest uppercase text-cedar">Hours</dt>
              <dd className="mt-1">{HOURS}. Closed Saturday and Sunday.</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest uppercase text-cedar">Phone</dt>
              <dd className="mt-1">
                <a href={PHONE_TEL} className="text-lg font-medium">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_TEL} className={buttonVariants()}>
              Call {PHONE_DISPLAY}
            </a>
            <a href={MAPS_URL} className={buttonVariants({ variant: "ghost" })}>
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Andrew", "Qualified joiner. Has been making this work, with Nick, long enough that clients still ask for both by name."],
            ["Nick", "Qualified joiner and an experienced on-site builder. The person most people end up talking to about the detail."],
            ["Peter", "Part of the same bench. The three of them hold the same line on what “finished” means."],
          ].map(([name, text]) => (
            <article key={name} className="border-t border-cedar pt-4">
              <h2 className="text-2xl">{name}</h2>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted">
          Offcuts go to local woodworking groups and schools. Members of Warringah Permaculture
          collect the sawdust for community gardens. When a job suits it, we specify{" "}
          <a href={ACCOYA_URL} className="underline underline-offset-4">
            Accoya
          </a>{" "}
          — acetylated timber with a 50-year above-ground warranty — because it stays straight.
        </p>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl">What clients have written</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <li key={item.name} className="border border-line bg-bg p-6">
                <blockquote>
                  <p>“{item.quote}”</p>
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
      <CtaBand title="Visit, or call before you drive over." />
    </SiteShell>
  );
}
