export const content = {
  businessName: "DFW Emergency HVAC",
  city: "Richardson, TX",
  phone: "(214) 555-0123",
  email: "service@example.com",

  // Emergency pages should bias toward calling.
  primaryCta: "Call Now",
  secondaryCta: "Request Service",

  emergency: {
    badge: "24/7 Emergency Service",
    headline: "AC Out? Furnace Down? We Can Help — Fast",
    subheadline:
      "Emergency HVAC repair for no-cool / no-heat calls. Clear communication, upfront pricing, and a tech on the way.",
    bullets: ["Available 24/7", "Most calls answered in minutes", "Upfront pricing before work starts"],
    disclaimer:
      "If this is a life-safety emergency (gas smell, sparks, or smoke), leave the home and call emergency services first.",
    boxTitle: "Fast response, no runaround",
    boxItems: [
      { title: "Same-day appointments", desc: "When your system is down, we prioritize urgent calls." },
      { title: "Upfront pricing", desc: "You approve the price before we start repairs." },
      { title: "Licensed & insured", desc: "Professional techs with the right equipment." },
    ],
  },

  // Kept for compatibility with the base template components.
  hero: {
    headline: "Emergency HVAC Repair in Richardson, TX",
    subheadline: "No-cool? No-heat? Call now for fast service.",
    bullets: ["Available 24/7", "Upfront pricing", "Licensed & insured"],
  },

  proof: {
    rating: 4.9,
    reviewCount: 214,
    badges: ["Licensed & insured", "Upfront pricing", "24/7 emergency"],
  },

  fastResponse: {
    title: "What you get when you call",
    subtitle: "A simple, predictable emergency process — optimized for speed.",
    items: [
      {
        title: "1) Quick triage",
        desc: "We ask a few questions so we show up with the right parts and tools.",
      },
      {
        title: "2) Diagnose + confirm price",
        desc: "We diagnose the issue and confirm pricing before any repair work begins.",
      },
      {
        title: "3) Repair + get you comfortable",
        desc: "We repair what’s needed, test the system, and explain what we did.",
      },
    ],
    finePrint:
      "Availability and arrival times vary by schedule and location. This is a demo template — replace with your exact service promise.",
  },

  // Kept for compatibility with the base template components.
  services: [
    { title: "AC Not Cooling", desc: "Warm air, poor airflow, or AC running constantly." },
    { title: "No Heat", desc: "Furnace won’t ignite, short cycling, or thermostat problems." },
    { title: "Frozen Coil", desc: "Ice buildup, airflow restrictions, and drainage issues." },
    { title: "Breaker Keeps Tripping", desc: "Electrical faults, failing capacitors, motor issues." },
  ],

  whatWeFix: {
    title: "What we fix",
    subtitle: "Common emergency HVAC issues we can troubleshoot quickly.",
    items: [
      { title: "AC not cooling", desc: "Warm air, poor airflow, or AC running constantly." },
      { title: "No heat", desc: "Furnace won’t ignite, short cycling, or thermostat problems." },
      { title: "Frozen coil", desc: "Ice buildup, airflow restrictions, and drainage issues." },
      { title: "Breaker keeps tripping", desc: "Electrical faults, failing capacitors, motor issues." },
      { title: "Strange smells / sounds", desc: "Burning smells, rattling, grinding, or loud startup noises." },
      { title: "Water leaking", desc: "Clogged drain line, condensate pan overflow, or drain issues." },
    ],
    footerNote:
      "Not sure what’s wrong? Call anyway — we’ll help you figure out if it’s urgent and what to do next.",
  },

  howItWorks: [
    {
      title: "Call us (or request service)",
      desc: "For emergencies, calling is fastest. If it’s not urgent, use the form and we’ll follow up.",
    },
    {
      title: "We dispatch a technician",
      desc: "We confirm your service area, ETA, and any access notes.",
    },
    {
      title: "Diagnosis → repair",
      desc: "You’ll get clear options and upfront pricing before repairs begin.",
    },
  ],

  serviceArea: {
    cities: ["Richardson", "Plano", "Garland", "Addison", "Dallas"],
    googleMapsUrl: "https://maps.google.com/?q=Richardson+TX",
  },

  testimonials: [
    {
      name: "Taylor S.",
      text: "Our AC died at night and they still answered. Tech showed up fast and explained everything clearly.",
    },
    {
      name: "Morgan K.",
      text: "Upfront pricing and no pressure. They got our heat back on the same day.",
    },
  ],

  faq: [
    {
      q: "Do you really offer 24/7 service?",
      a: "This template is written for 24/7 emergency. Update the hours to match your real availability.",
    },
    {
      q: "How much does an emergency visit cost?",
      a: "Pricing depends on the issue. We provide upfront pricing before repairs begin.",
    },
    {
      q: "How fast can you arrive?",
      a: "We prioritize no-cool/no-heat calls. ETA depends on workload and location.",
    },
  ],

  footer: {
    hours: "24/7 Emergency Service",
    license: "Licensed & insured",
  },
} as const;
