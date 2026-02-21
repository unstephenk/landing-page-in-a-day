import { content } from "@/content";
import { Section } from "@/components/Section";

export function HowItWorks() {
  return (
    <Section title="How it works">
      <div className="grid gap-4 md:grid-cols-3">
        {content.howItWorks.map((s, idx) => (
          <div key={s.title} className="rounded-2xl border p-5">
            <div className="text-xs font-semibold text-neutral-500">Step {idx + 1}</div>
            <div className="mt-1 text-base font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-neutral-700">{s.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
