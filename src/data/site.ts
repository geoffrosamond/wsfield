export const PHONE_DISPLAY = "(02) 9905 1291";
export const PHONE_TEL = "tel:+61299051291";
export const ADDRESS_LINES = ["Unit 7, 16 Clearview Place", "Brookvale NSW 2100"];
export const ADDRESS = "Unit 7, 16 Clearview Place, Brookvale NSW 2100";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Unit+7+16+Clearview+Place+Brookvale+NSW+2100";
export const HOURS = "Monday to Friday, 7:30am – 4:00pm";
export const HOURS_SHORT = "Mon–Fri 7:30am–4:00pm";
export const ACCOYA_URL = "https://www.accoya.com/au/location/wsfield-joinery-pty-ltd/";

export const PROJECTS = [
  "Entrance door",
  "Bifold doors",
  "French doors",
  "Pivot or sliding doors",
  "Heritage or Federation door",
  "Timber windows",
  "Sash window repair",
  "Mouldings or timber cut to size",
  "Not sure yet",
] as const;

export type Project = (typeof PROJECTS)[number];

export const ROLES = ["Homeowner", "Builder", "Architect", "Other"] as const;

export const nav = [
  { to: "/doors", label: "Doors" },
  { to: "/windows", label: "Windows" },
  { to: "/heritage", label: "Heritage" },
  { to: "/workshop", label: "Workshop" },
] as const;

export const places = [
  "Palm Beach",
  "Northern Beaches",
  "Manly",
  "Fairlight",
  "Clontarf",
  "Balgowlah",
  "Brookvale",
  "Mosman",
  "Neutral Bay",
  "Kirribilli",
  "North Shore",
  "Paddington",
  "Rose Bay",
  "Double Bay",
  "Eastern Suburbs",
];

export const timbers = [
  "Western Red Cedar",
  "Accoya",
  "Spotted Gum",
  "Blackbutt",
  "Jarrah",
  "Merbau",
  "Tasmanian Oak",
  "American White Oak",
  "New Guinea Rosewood",
  "Gerrongang",
  "Cambian Ash",
];

export type Piece = {
  name: string;
  quote: Project;
  blurb: string;
  image?: string;
  alt?: string;
};

export const doorFeatures: Piece[] = [
  {
    name: "Entrance doors",
    quote: "Entrance door",
    image: "/photos/entrance.jpg",
    alt: "Solid timber entrance door with sidelights on a sandstone house",
    blurb:
      "A front door to your brief — panels, glazing and hardware — so the house feels like yours from the street.",
  },
  {
    name: "Bifold doors",
    quote: "Bifold doors",
    image: "/photos/bifold.jpg",
    alt: "Timber bifold doors folded open to a garden",
    blurb:
      "Top-running and bottom-running sets, including bifolds with integrated flyscreens for entertaining areas.",
  },
  {
    name: "French doors",
    quote: "French doors",
    image: "/photos/french.jpg",
    alt: "Pair of multi-lite timber French doors in a brick wall",
    blurb:
      "Single-lite or multi-lite pairs, with sidelights when the opening needs more glass and less frame.",
  },
  {
    name: "Heritage doors",
    quote: "Heritage or Federation door",
    image: "/photos/castle.jpg",
    alt: "Cedar entrance with a smaller door set inside a larger one, against sandstone",
    blurb:
      "Federation, Hampton and one-off heritage doors, including unusual briefs such as a castle door with an everyday wicket door.",
  },
];

export const doorList: Piece[] = [
  {
    name: "Pivot doors",
    quote: "Pivot or sliding doors",
    blurb: "A single pivoting leaf when you want a tall, quiet entrance rather than a hinged pair.",
  },
  {
    name: "Sliding doors",
    quote: "Pivot or sliding doors",
    blurb: "Timber sliders for wide openings where bifolds would stack too deep.",
  },
  {
    name: "Dutch doors",
    quote: "Entrance door",
    blurb: "Stable door leaves, so the top can open for air while the bottom stays shut.",
  },
  {
    name: "Barn-style doors",
    quote: "Entrance door",
    blurb: "Face-mounted timber slides, made as joinery rather than a hardware kit on a slab.",
  },
  {
    name: "Multi-light doors",
    quote: "French doors",
    blurb: "Glazing bars set out to match an existing elevation, not a generic grid.",
  },
  {
    name: "Hampton doors",
    quote: "Heritage or Federation door",
    blurb: "Painted, light, and proportioned for coastal and classic Sydney houses.",
  },
];

export const windowFeatures: Piece[] = [
  {
    name: "Casement windows",
    quote: "Timber windows",
    image: "/photos/casement.jpg",
    alt: "Timber casement windows with one sash ajar",
    blurb: "Side-hung sashes that seal properly and open the room to the garden.",
  },
  {
    name: "Federation & box-frame",
    quote: "Sash window repair",
    image: "/photos/sash.jpg",
    alt: "Cream painted double-hung sash windows on a weatherboard house",
    blurb:
      "Double-hung box frames and Federation patterns, matched to what is already on the house.",
  },
  {
    name: "Made in the workshop",
    quote: "Timber windows",
    image: "/photos/workshop.jpg",
    alt: "Timber stacked in a joinery workshop with a door frame on the bench",
    blurb: "Every frame is machined and assembled in Brookvale, with hardwood sills for the weather.",
  },
];

export const windowList: Piece[] = [
  {
    name: "Hopper (awning) windows",
    quote: "Timber windows",
    blurb: "Top-hinged sashes for ventilation when a casement would swing into a path.",
  },
  {
    name: "Sliding windows",
    quote: "Timber windows",
    blurb: "Timber sliders where the reveal is tight or the outlook wants an uninterrupted rail.",
  },
  {
    name: "Bifold windows",
    quote: "Timber windows",
    blurb: "Windows that fold clear of the opening, useful on servery and verandah walls.",
  },
  {
    name: "Multi-light windows",
    quote: "Timber windows",
    blurb: "Bars and meeting rails set out to suit the facade, not a catalogue grid.",
  },
  {
    name: "Sash repairs",
    quote: "Sash window repair",
    blurb: "Broken or rotted sashes replaced or rebuilt. Awkward Federation profiles included.",
  },
];

export const testimonials = [
  {
    quote:
      "One of the best decisions that we have made was to work with Nick and the team. Their workmanship is second to none. I would recommend WS Field to any company or owner who wants the best quality at a reasonable price.",
    name: "Aaron Stevens",
    role: "Construction Manager, Design to Build",
  },
  {
    quote:
      "I have worked with these fine people for over 40 years. In all that time they have never let me down. They are fastidious with their detail and absolutely dependable.",
    name: "Richard Leplastrier",
    role: "Architect",
  },
  {
    quote:
      "We have been using WS Field Joinery for many years for all our window and door works. Their quality is of the highest standard and they always complete their work on time.",
    name: "Andrew Coope",
    role: "Director, Coope Building Services",
  },
  {
    quote:
      "Nick and his team did an amazing job on very specific and detailed work. Their attention to detail is second to none and they delivered within a fast time frame.",
    name: "Ben Oehlbeck",
    role: "Client",
  },
  {
    quote:
      "I have been dealing with WS Field Joinery for about ten years. The quality of product and attention to detail is of the highest order.",
    name: "Peter Brady",
    role: "Director, Mancaf Builders",
  },
  {
    quote:
      "At W.S. Field we found Andrew and Nick Waterman. No question was too simple. The restoration of two bay windows and a seven-sided sunroom were executed with meticulous care. People walking past constantly compliment the building.",
    name: "Mary Tracogna",
    role: "Seaforth",
  },
  {
    quote:
      "I would highly recommend Nick. He went out of his way on a complicated window, made calls on my behalf, and gave real, old-fashioned customer care.",
    name: "Aida Nedel",
    role: "Client",
  },
];

export const reasons = [
  {
    title: "Mortise and tenon",
    text: "Frames are joined the traditional way. Those joints are what keep a door or sash square for decades.",
  },
  {
    title: "Heritage councils recognise",
    text: "We match existing Federation joinery and reproduce heritage work with the methods councils ask for.",
  },
  {
    title: "You speak with the joiners",
    text: "Andrew and his son Nick have over 60 years between them. Nick is also a qualified on-site builder.",
  },
  {
    title: "On time, and human",
    text: "Builders stay because the joinery arrives when it should, and someone actually answers the phone.",
  },
];
