import { content } from "@/content";
import { Section } from "@/components/Section";

export function FAQ() {
  return (
    <Section title="FAQ">
      <div className="space-y-3">
        {content.faq.map((f) => (
          <details key={f.q} className="rounded-2xl border p-5">
            <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
            <p className="mt-3 text-sm text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
