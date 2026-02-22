import { content } from "@/content";

export function EmergencyHero() {
  const tel = `tel:${content.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {content.emergency.badge}
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {content.emergency.headline}
          </h1>
          <p className="mt-4 text-lg text-neutral-700">{content.emergency.subheadline}</p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-800">
            {content.emergency.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={tel}
              className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {content.primaryCta}: {content.phone}
            </a>
            <a
              href="#quote"
              className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              {content.secondaryCta}
            </a>
          </div>

          <div className="mt-4 text-xs text-neutral-600">{content.emergency.disclaimer}</div>
        </div>

        <div className="rounded-2xl border bg-neutral-50 p-6">
          <div className="text-sm font-semibold">{content.emergency.boxTitle}</div>
          <div className="mt-2 text-sm text-neutral-700">
            ⭐ {content.proof.rating} ({content.proof.reviewCount} reviews)
          </div>

          <div className="mt-4 grid gap-2">
            {content.emergency.boxItems.map((i) => (
              <div key={i.title} className="rounded-xl border bg-white p-4">
                <div className="text-sm font-semibold">{i.title}</div>
                <div className="mt-1 text-sm text-neutral-700">{i.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-neutral-600">
            Tip: swap this box for a technician photo + license numbers when you have them.
          </div>
        </div>
      </div>
    </section>
  );
}
