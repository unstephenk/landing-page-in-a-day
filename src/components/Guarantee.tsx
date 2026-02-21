import { content } from "@/content";
import { Section } from "@/components/Section";

export function Guarantee() {
  return (
    <Section
      id="guarantee"
      title="No-surprises service"
      subtitle="Lawn care clients churn when scheduling is flaky. This layout sells reliability."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h3 className="text-base font-semibold">On-time routes</h3>
          <p className="mt-1 text-sm text-neutral-600">
            Same day each week when possible. If weather shifts, we text the plan.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h3 className="text-base font-semibold">Upfront pricing</h3>
          <p className="mt-1 text-sm text-neutral-600">
            You’ll know the price before we show up. No awkward “it depends” at the driveway.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h3 className="text-base font-semibold">Text-first communication</h3>
          <p className="mt-1 text-sm text-neutral-600">
            Quick changes, gate codes, skip requests—handled by text so it’s documented.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="text-sm text-emerald-900">
          <span className="font-semibold">Quick quote:</span> text your address + service needs.
        </div>
        <a
          href="#quote"
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        >
          {content.primaryCta}
        </a>
      </div>
    </Section>
  );
}
