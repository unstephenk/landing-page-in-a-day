import { content } from "@/content";
import { Section } from "@/components/Section";

export function Services() {
  return (
    <Section title="Services">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-5">
            <div className="text-base font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-neutral-700">{s.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
