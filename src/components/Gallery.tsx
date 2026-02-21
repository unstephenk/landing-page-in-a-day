import { Section } from "@/components/Section";

const items = [
  {
    title: "Clean edges",
    desc: "Crisp lines along sidewalks and driveways. Makes the whole yard look cared for.",
  },
  {
    title: "Beds & trimming",
    desc: "We trim around fences, trees, and beds—then blow off hard surfaces.",
  },
  {
    title: "Seasonal cleanups",
    desc: "Leaf removal and haul-off to reset the yard fast.",
  },
];

export function Gallery() {
  return (
    <Section
      id="gallery"
      title="What great lawn care looks like"
      subtitle="A landing page for lawn care should be visual and straightforward. Here’s the vibe we build for clients."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-5"
          >
            <div className="mb-3 h-32 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.18),transparent_55%)]" />
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
