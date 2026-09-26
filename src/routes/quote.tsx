import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/quote-form";
import { SiteShell } from "@/components/site/shell";
import { ADDRESS, HOURS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { type?: string } => {
    if (typeof search.type !== "string" || search.type.length === 0) return {};
    return { type: search.type };
  },
  head: () => ({
    meta: [
      { title: "Get a quote · WS Field Joinery" },
      {
        name: "description",
        content:
          "Request a timber door or window quote, or call WS Field Joinery on (02) 9905 1291. Brookvale workshop, Mon–Fri 7:30am–4:00pm.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const { type } = Route.useSearch();
  return (
    <SiteShell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1fr_18rem] lg:items-start lg:py-16">
        <div>
          <p className="text-xs tracking-widest uppercase text-cedar">Get a quote</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Tell us the opening. Then ring.</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            The workshop would rather talk than trade emails. Use this brief so the call starts in
            the right place — door, window, repair, or “not sure yet”.
          </p>
          <div className="mt-8">
            <QuoteForm initialProject={type} />
          </div>
        </div>
        <aside className="h-fit border border-fg bg-fg p-6 text-bg lg:sticky lg:top-24">
          <p className="text-xs tracking-widest uppercase text-bg/70">Faster</p>
          <h2 className="mt-3 text-3xl">Call the workshop.</h2>
          <a href={PHONE_TEL} className="mt-4 block font-display text-3xl">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-bg/85">{HOURS}</p>
          <p className="mt-2 text-sm text-bg/85">{ADDRESS}</p>
          <a href={MAPS_URL} className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
            Get directions
          </a>
        </aside>
      </div>
    </SiteShell>
  );
}
