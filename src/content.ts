export const content = {
  businessName: "DFW Pressure Washing",
  city: "Richardson, TX",
  phone: "(214) 555-0123",
  email: "quotes@example.com",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call Now",

  hero: {
    headline: "Pressure Washing in Richardson, TX",
    subheadline: "Driveways, siding, patios, and fences. Fast quotes. Great results.",
    bullets: ["Same-week availability", "Licensed & insured", "Upfront pricing"],
  },

  proof: {
    rating: 4.9,
    reviewCount: 127,
    badges: ["Licensed & insured", "Free estimates", "Local & reliable"],
  },

  services: [
    { title: "Driveways & Sidewalks", desc: "Oil stains, algae, and grime removed." },
    { title: "House Washing", desc: "Low-pressure wash safe for siding." },
    { title: "Patios & Decks", desc: "Restore curb appeal in one visit." },
    { title: "Fences", desc: "Clean wood & vinyl fences." },
  ],

  howItWorks: [
    { title: "Tell us what you need", desc: "Call or request a quote online." },
    { title: "Get a fast quote", desc: "We confirm scope, price, and schedule." },
    { title: "We get it done", desc: "Show up on time and leave it spotless." },
  ],

  serviceArea: {
    cities: ["Richardson", "Plano", "Garland", "Addison", "Dallas"],
    googleMapsUrl: "https://maps.google.com/?q=Richardson+TX",
  },

  testimonials: [
    {
      name: "Jamie R.",
      text: "Fast quote, showed up on time, and the driveway looks brand new.",
    },
    {
      name: "Chris M.",
      text: "Professional and friendly. Great results on our patio.",
    },
  ],

  faq: [
    { q: "Do you offer free estimates?", a: "Yes—send photos or schedule a quick walkthrough." },
    { q: "Are you insured?", a: "Yes, we carry liability coverage." },
    { q: "How soon can you come out?", a: "Often within a few days depending on weather." },
  ],

  footer: {
    hours: "Mon–Sat 8am–6pm",
    license: "Licensed & insured",
  },
} as const;
