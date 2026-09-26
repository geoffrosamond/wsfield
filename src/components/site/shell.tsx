import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  ADDRESS,
  HOURS_SHORT,
  MAPS_URL,
  nav,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/data/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-24 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-fg/15 bg-fg text-bg">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <Link to="/" className="mr-auto leading-tight">
          <span className="block font-display text-xl tracking-tight">WS Field</span>
          <span className="block text-xs tracking-widest uppercase text-bg/75">
            Joinery · est. 1977
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-bg/80 aria-[current=page]:text-bg aria-[current=page]:underline aria-[current=page]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={PHONE_TEL}
          className="hidden items-center gap-2 text-sm font-medium md:inline-flex"
        >
          <Phone className="size-4" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
        <Link to="/quote" className={cn(buttonVariants(), "hidden sm:inline-flex")}>
          Get a quote
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="border-t border-bg/15 px-5 py-3 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-11 items-center text-lg aria-[current=page]:text-bg aria-[current=page]:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="flex min-h-11 items-center text-lg">
                Get a quote
              </Link>
            </li>
            <li>
              <a href={PHONE_TEL} className="flex min-h-11 items-center text-lg">
                Call {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-cedar">{eyebrow}</p>
          <h1 className="mt-3 text-4xl text-fg md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{lede}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={PHONE_TEL} className={buttonVariants()}>
            Call {PHONE_DISPLAY}
          </a>
          <Link to="/quote" className={buttonVariants({ variant: "ghost" })}>
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CtaBand({
  title = "Call us about the job.",
  lede = "Andrew or Nick will talk through timber, style, and what the house actually needs.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-fg text-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-bg/85">{lede}</p>
          <p className="mt-3 text-sm text-bg/75">
            {HOURS_SHORT} · Brookvale workshop
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a href={PHONE_TEL} className={buttonVariants({ variant: "light" })}>
            Call {PHONE_DISPLAY}
          </a>
          <Link to="/quote" className={buttonVariants({ variant: "inverse" })}>
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TalkAside({ note }: { note: string }) {
  return (
    <aside className="h-fit border border-fg bg-fg p-6 text-bg lg:sticky lg:top-24">
      <p className="text-xs tracking-widest uppercase text-bg/70">Next step</p>
      <h2 className="mt-3 text-3xl">Call Andrew or Nick.</h2>
      <p className="mt-3 text-sm text-bg/85">{note}</p>
      <div className="mt-6 flex flex-col gap-3">
        <a href={PHONE_TEL} className={buttonVariants({ variant: "light" })}>
          Call {PHONE_DISPLAY}
        </a>
        <Link to="/quote" className={buttonVariants({ variant: "inverse" })}>
          Get a quote
        </Link>
      </div>
      <p className="mt-6 text-sm text-bg/80">{HOURS_SHORT}</p>
      <a href={MAPS_URL} className="mt-1 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
        Get directions
      </a>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">WS Field Joinery</p>
          <p className="mt-3 max-w-sm text-muted">
            Family-owned timber doors and windows, made in Brookvale since 1977 for Sydney’s
            Northern Beaches, North Shore and Eastern Suburbs.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-cedar">Visit</p>
          <p className="mt-3">{ADDRESS}</p>
          <p className="mt-2 text-muted">{HOURS_SHORT}. Closed weekends.</p>
          <a href={MAPS_URL} className="mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
            Get directions
          </a>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-cedar">Talk</p>
          <a href={PHONE_TEL} className="mt-3 block text-lg font-medium">
            {PHONE_DISPLAY}
          </a>
          <Link to="/quote" className="mt-2 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
            Get a quote
          </Link>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted">
          WS Field Joinery Pty Ltd · Brookvale · Est. 1977. Gallery photos are jobs from the workshop.
        </p>
      </div>
    </footer>
  );
}

function MobileCta() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface px-3 pt-3 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={PHONE_TEL} className={buttonVariants()}>
          Call
        </a>
        <Link to="/quote" className={buttonVariants({ variant: "ghost" })}>
          Get a quote
        </Link>
      </div>
    </div>
  );
}
