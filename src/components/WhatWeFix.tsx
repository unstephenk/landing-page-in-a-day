import { content } from "@/content";
import { Section } from "@/components/Section";

export function WhatWeFix() {
  return (
    <Section id="what-we-fix" title={content.whatWeFix.title} subtitle={content.whatWeFix.subtitle}>
      <div className="grid gap-4 md:grid-cols-2">
        {content.whatWeFix.items.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-5">
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-neutral-700">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border bg-neutral-50 p-5 text-sm text-neutral-700">
        {content.whatWeFix.footerNote}
      </div>
    </Section>
  );
}
