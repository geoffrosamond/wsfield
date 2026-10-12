import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { DesignPicker, designLabel, designsFor } from "@/components/site/designs";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROJECTS,
  ROLES,
  type Project,
} from "@/data/site";

const STORAGE_KEY = "ws-field-briefs";

export type Brief = {
  id: string;
  name: string;
  phone: string;
  email: string;
  suburb: string;
  project: string;
  role: string;
  design: string;
  opening: string;
  message: string;
  createdAt: string;
};

function loadBriefs(): Brief[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Brief[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function briefText(brief: Brief) {
  return [
    "WS Field Joinery — quote brief",
    `Name: ${brief.name}`,
    `Phone: ${brief.phone}`,
    brief.email ? `Email: ${brief.email}` : "",
    brief.suburb ? `Suburb: ${brief.suburb}` : "",
    `Project: ${brief.project}`,
    brief.design ? `Arrangement: ${brief.design}` : "",
    brief.opening ? `Opening: ${brief.opening}` : "",
    brief.role ? `I am a: ${brief.role}` : "",
    brief.message ? `Notes: ${brief.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function QuoteForm({
  initialProject,
  allowAllDesigns = false,
}: {
  initialProject?: string;
  allowAllDesigns?: boolean;
}) {
  const starting = (PROJECTS as readonly string[]).includes(initialProject ?? "")
    ? (initialProject as Project)
    : "Not sure yet";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [project, setProject] = useState<string>(starting);
  const [role, setRole] = useState<string>("Homeowner");
  const [design, setDesign] = useState<string | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [saved, setSaved] = useState<Brief | null>(null);
  const [copied, setCopied] = useState(false);
  const [past, setPast] = useState<Brief[]>([]);

  useEffect(() => {
    setPast(loadBriefs());
  }, []);

  useEffect(() => {
    if ((PROJECTS as readonly string[]).includes(initialProject ?? "")) {
      setProject(initialProject as string);
    }
  }, [initialProject]);

  useEffect(() => {
    if (!design) return;
    const allowed = designsFor(project, allowAllDesigns).some((item) => item.id === design);
    if (!allowed) setDesign(null);
  }, [project, design, allowAllDesigns]);

  const fieldClass =
    "mt-1 w-full min-h-11 border border-line bg-bg px-3 text-fg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cedar";

  const summary = useMemo(() => (saved ? briefText(saved) : ""), [saved]);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) next.name = "Add your name so we know who is calling.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8) next.phone = "Add a phone number we can call back on.";
    setErrors(next);
    if (next.name || next.phone) return;

    const opening = [width.trim() && `${width.trim()} mm wide`, height.trim() && `${height.trim()} mm high`]
      .filter(Boolean)
      .join(" × ");
    const brief: Brief = {
      id: crypto.randomUUID(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      suburb: suburb.trim(),
      project,
      role,
      design: design ? designLabel(design) : "",
      opening,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    const all = [brief, ...loadBriefs()].slice(0, 8);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setPast(all);
    setSaved(brief);
    setCopied(false);
  }

  async function copy() {
    if (!saved) return;
    try {
      await navigator.clipboard.writeText(briefText(saved));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (saved) {
    return (
      <div className="border border-line bg-surface p-6 md:p-8">
        <p className="text-xs tracking-widest uppercase text-cedar">Your brief is ready</p>
        <h2 className="mt-3 text-3xl">Call us and read this through.</h2>
        <p className="mt-3 max-w-xl text-muted">
          This page keeps your note on this device. It does not email the workshop — the useful
          next step is a conversation with Andrew or Nick.
        </p>
        <a href={PHONE_TEL} className={buttonVariants() + " mt-6 w-full sm:w-auto"}>
          Call {PHONE_DISPLAY}
        </a>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-line bg-bg p-4 text-sm">
          {summary}
        </pre>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button type="button" variant="ghost" onClick={copy}>
            {copied ? "Copied" : "Copy brief"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setSaved(null);
              setName("");
              setPhone("");
              setDesign(null);
              setWidth("");
              setHeight("");
              setMessage("");
            }}
          >
            Write another
          </Button>
          <a href={MAPS_URL} className={buttonVariants({ variant: "ghost" })}>
            Get directions
          </a>
        </div>
        <p className="mt-4 text-sm text-muted">{HOURS}. Weekends closed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-surface p-6 md:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          Name
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          {errors.name ? <span className="mt-1 block text-cedar">{errors.name}</span> : null}
        </label>
        <label className="block text-sm">
          Phone
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          {errors.phone ? <span className="mt-1 block text-cedar">{errors.phone}</span> : null}
        </label>
        <label className="block text-sm">
          Suburb
          <input
            className={fieldClass}
            name="suburb"
            autoComplete="address-level2"
            value={suburb}
            onChange={(event) => setSuburb(event.target.value)}
          />
        </label>
        <label className="block text-sm">
          Email <span className="text-muted">(optional)</span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block text-sm">
          What are you making?
          <select
            className={fieldClass}
            name="project"
            value={project}
            onChange={(event) => setProject(event.target.value)}
          >
            {PROJECTS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          I am a
          <select className={fieldClass} name="role" value={role} onChange={(event) => setRole(event.target.value)}>
            {ROLES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <DesignPicker project={project} value={design} onChange={setDesign} allowAll={allowAllDesigns} />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          Rough width <span className="text-muted">(mm, optional)</span>
          <input
            className={fieldClass}
            name="width"
            inputMode="numeric"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
          />
        </label>
        <label className="block text-sm">
          Rough height <span className="text-muted">(mm, optional)</span>
          <input
            className={fieldClass}
            name="height"
            inputMode="numeric"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        Notes — opening sizes, timber, or what is already on the house
        <textarea
          className={fieldClass + " min-h-32 py-3"}
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Get a quote</Button>
        <a href={PHONE_TEL} className="text-sm underline underline-offset-4">
          Or call {PHONE_DISPLAY} now
        </a>
      </div>
      <p className="mt-4 text-sm text-muted">
        Your brief stays on this device so you can read it back on the call. {HOURS}.
      </p>
      {past.length > 0 ? (
        <p className="mt-3 text-sm text-muted">
          {past.length} saved {past.length === 1 ? "brief" : "briefs"} on this device.{" "}
          <Link to="/quote" className="underline underline-offset-4">
            Open the quote page
          </Link>
        </p>
      ) : null}
    </form>
  );
}
