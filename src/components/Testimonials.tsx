import { content } from "@/content";
import { Section } from "@/components/Section";

export function Testimonials() {
  return (
    <Section title="Testimonials">
      <div className="grid gap-4 md:grid-cols-2">
        {content.testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border p-5">
            <blockquote className="text-sm text-neutral-800">“{t.text}”</blockquote>
            <figcaption className="mt-3 text-xs font-semibold text-neutral-600">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
