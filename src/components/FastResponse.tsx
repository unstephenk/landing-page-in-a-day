import { content } from "@/content";
import { Section } from "@/components/Section";

export function FastResponse() {
  return (
    <Section id="fast-response" title={content.fastResponse.title} subtitle={content.fastResponse.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.fastResponse.items.map((i) => (
          <div key={i.title} className="rounded-2xl border bg-white p-5">
            <div className="text-sm font-semibold">{i.title}</div>
            <div className="mt-2 text-sm text-neutral-700">{i.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-neutral-600">{content.fastResponse.finePrint}</div>
    </Section>
  );
}
