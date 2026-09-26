import { createFileRoute } from "@tanstack/react-router";
import { FeatureGrid, PieceList } from "@/components/site/pieces";
import { CtaBand, PageIntro, SiteShell, TalkAside } from "@/components/site/shell";
import { doorFeatures, doorList } from "@/data/site";

export const Route = createFileRoute("/doors")({
  head: () => ({
    meta: [
      { title: "Timber doors · WS Field Joinery, Brookvale" },
      {
        name: "description",
        content:
          "Custom entrance, bifold, French and heritage timber doors. Call (02) 9905 1291 or get a quote.",
      },
    ],
  }),
  component: DoorsPage,
});

function DoorsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Doors"
        title="Solid timber doors, made to the opening."
        lede="Entrance, bifold, French, pivot, sliding and heritage. Tell us the house and we will talk through the leaf, the timber and the hardware."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1fr_18rem] lg:items-start lg:py-16">
        <div className="space-y-10">
          <FeatureGrid items={doorFeatures} />
          <div>
            <h2 className="text-2xl">Also on the bench</h2>
            <p className="mt-2 mb-4 text-muted">Same workshop. Same phone call.</p>
            <PieceList items={doorList} />
          </div>
        </div>
        <TalkAside note="Bring a photo of the existing door or a sketch of the one you want. We will tell you what is practical in timber." />
      </div>
      <CtaBand title="Ready to talk about a door?" lede="Call the workshop, or leave a brief and we will know which opening you mean." />
    </SiteShell>
  );
}
