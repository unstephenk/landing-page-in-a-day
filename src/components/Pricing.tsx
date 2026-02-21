import { content } from "@/content";
import { Section } from "@/components/Section";

type Plan = {
  name: string;
  price: string;
  desc: string;
  bullets: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "One-Time Cut",
    price: "$59–$89",
    desc: "Perfect for a quick reset before an event or listing photos.",
    bullets: ["Mow + edge", "Trim & blow", "Same-week availability"],
  },
  {
    name: "Weekly",
    price: "$45/visit",
    desc: "Best results during peak growth. Consistent, clean lines every week.",
    bullets: ["Priority scheduling", "Text-based changes", "Route-based reliability"],
    highlight: true,
  },
  {
    name: "Bi-Weekly",
    price: "$65/visit",
    desc: "Budget-friendly maintenance for slower growth periods.",
    bullets: ["Mow + edge", "Trim & blow", "No long contracts"],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      title="Simple pricing"
      subtitle={`Fast quotes by text or call. We’ll confirm your address, gate access, and schedule.`}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={
              p.highlight
                ? "rounded-2xl border border-emerald-300 bg-emerald-50 p-5 shadow-sm"
                : "rounded-2xl border border-neutral-200 bg-white p-5"
            }
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="text-lg font-semibold text-neutral-900">{p.price}</div>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 inline-block size-2 rounded-full bg-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="#quote"
                className={
                  p.highlight
                    ? "inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                    : "inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                }
              >
                {content.primaryCta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Pricing varies by lot size, obstacles, and add-ons (mulch, aeration, cleanup). We’ll confirm
        details before scheduling.
      </p>
    </Section>
  );
}
