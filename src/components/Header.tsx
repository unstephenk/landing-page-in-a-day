import { content } from "@/content";

export function Header() {
  const tel = `tel:${content.phone.replace(/[^\d+]/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{content.businessName}</div>
          <div className="truncate text-xs text-neutral-600">{content.city}</div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Call
          </a>
          <a
            href="#quote"
            className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
