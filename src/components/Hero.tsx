import { content } from "@/content";

export function Hero() {
  const tel = `tel:${content.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{content.hero.headline}</h1>
          <p className="mt-4 text-lg text-neutral-700">{content.hero.subheadline}</p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-800">
            {content.hero.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {content.primaryCta}
            </a>
            <a
              href={tel}
              className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              {content.secondaryCta}: {content.phone}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border bg-neutral-50 p-6">
          <div className="text-sm font-semibold">Trusted local service</div>
          <div className="mt-2 text-sm text-neutral-700">
            ⭐ {content.proof.rating} ({content.proof.reviewCount} reviews)
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.proof.badges.map((b) => (
              <span key={b} className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                {b}
              </span>
            ))}
          </div>

          <div className="mt-6 text-xs text-neutral-600">
            Tip: Replace this box with a photo/gallery once you have images.
          </div>
        </div>
      </div>
    </section>
  );
}
