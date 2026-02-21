import { content } from "@/content";
import { Section } from "@/components/Section";

export function QuoteForm() {
  return (
    <Section>
      <div id="quote" className="rounded-2xl border p-6">
        <div className="text-xl font-semibold tracking-tight">{content.primaryCta}</div>
        <div className="mt-2 text-sm text-neutral-700">
          Send a few details and we’ll get back to you.
        </div>

        <form className="mt-6 grid gap-3" action="https://formspree.io/f/yourFormId" method="POST">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-neutral-600">Name</span>
              <input name="name" required className="rounded-lg border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-neutral-600">Phone</span>
              <input name="phone" required className="rounded-lg border px-3 py-2" />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-xs font-semibold text-neutral-600">Address / City</span>
            <input name="location" className="rounded-lg border px-3 py-2" />
          </label>

          <label className="grid gap-1">
            <span className="text-xs font-semibold text-neutral-600">What do you need done?</span>
            <textarea name="details" rows={4} className="rounded-lg border px-3 py-2" />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Request Quote
          </button>

          <div className="text-xs text-neutral-500">
            Form notes: Replace the Formspree action URL with your endpoint, or wire up /api/lead.
          </div>
        </form>
      </div>
    </Section>
  );
}
