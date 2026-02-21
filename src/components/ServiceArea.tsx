import { content } from "@/content";
import { Section } from "@/components/Section";

export function ServiceArea() {
  return (
    <Section title="Service area">
      <div className="rounded-2xl border p-5">
        <div className="text-sm text-neutral-700">Serving:</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {content.serviceArea.cities.map((c) => (
            <span key={c} className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
              {c}
            </span>
          ))}
        </div>
        <a
          className="mt-4 inline-block text-sm font-medium underline"
          href={content.serviceArea.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </Section>
  );
}
