export const content = {
  businessName: "DFW Lawn Care",
  city: "Richardson, TX",
  phone: "(214) 555-0199",
  email: "quotes@example.com",
  primaryCta: "Text for a Quote",
  secondaryCta: "Call Now",

  hero: {
    headline: "Lawn Care in Richardson, TX",
    subheadline: "Mowing, edging, cleanup, and seasonal care. Fast quotes. Reliable crews.",
    bullets: ["Weekly & bi-weekly", "Upfront pricing", "Same-week start"],
  },

  proof: {
    rating: 4.9,
    reviewCount: 94,
    badges: ["Free estimates", "Locally owned", "On-time service"],
  },

  services: [
    { title: "Mowing & Edging", desc: "Clean lines, consistent cuts, dependable schedule." },
    { title: "Trimming & Blowing", desc: "Beds, fences, and hard edges—finished look." },
    { title: "Yard Cleanup", desc: "Leaf removal, haul-off, and one-time resets." },
    { title: "Seasonal Services", desc: "Mulch refresh, aeration, and overseeding." },
  ],

  howItWorks: [
    { title: "Tell us your address", desc: "Call or text your address + what you need." },
    { title: "Get a fast quote", desc: "We confirm scope and send pricing." },
    { title: "We start service", desc: "We show up on schedule and keep it tidy." },
  ],

  serviceArea: {
    cities: ["Richardson", "Plano", "Garland", "Wylie", "Sachse"],
    googleMapsUrl: "https://maps.google.com/?q=Richardson+TX",
  },

  testimonials: [
    {
      name: "Alex P.",
      text: "Super responsive and the yard looks great every week. Easy to text for changes.",
    },
    {
      name: "Morgan T.",
      text: "Reliable, fair pricing, and they always clean up after.",
    },
  ],

  faq: [
    { q: "Do you offer weekly and bi-weekly service?", a: "Yes—most clients choose weekly during peak growth." },
    { q: "Do I need to be home?", a: "No—just make sure gates are unlocked and pets are inside." },
    { q: "How soon can you start?", a: "Often within a few days depending on route availability." },
  ],

  footer: {
    hours: "Mon–Sat 8am–6pm",
    license: "Insured for property work",
  },
} as const;
