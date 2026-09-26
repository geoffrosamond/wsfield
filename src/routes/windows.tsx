import { createFileRoute } from "@tanstack/react-router";
import { FeatureGrid, PieceList } from "@/components/site/pieces";
import { CtaBand, PageIntro, SiteShell, TalkAside } from "@/components/site/shell";
import { windowFeatures, windowList } from "@/data/site";

export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "Timber windows · WS Field Joinery, Brookvale" },
      {
        name: "description",
        content:
          "Custom casement, sash, hopper and box-frame timber windows. Call (02) 9905 1291.",
      },
    ],
  }),
  component: WindowsPage,
});

function WindowsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Windows"
        title="Windows that keep the weather out and the house looking like itself."
        lede="Casement, hopper, sliding, bifold and double-hung box frames. Hardwood sills. Finished as soon as they leave the bench so the timber lasts."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1fr_18rem] lg:items-start lg:py-16">
        <div className="space-y-10">
          <FeatureGrid items={windowFeatures} />
          <div>
            <h2 className="text-2xl">Styles and repairs</h2>
            <p className="mt-2 mb-4 text-muted">
              New windows, or sashes rebuilt because the old ones have rotted. No Federation profile is too particular to copy.
            </p>
            <PieceList items={windowList} />
          </div>
        </div>
        <TalkAside note="A photo of the existing window and a rough opening size is enough to start. We match the profile before we talk price." />
      </div>
      <CtaBand
        title="Need windows, or sashes replaced?"
        lede="Call and describe the elevation. If it is a repair, say which sashes have failed."
      />
    </SiteShell>
  );
}
