import { content } from "@/content";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold">{content.businessName}</div>
          <div className="text-xs text-neutral-600">{content.city}</div>
        </div>
        <div className="text-xs text-neutral-600">
          {content.footer.hours} • {content.footer.license}
        </div>
      </div>
    </footer>
  );
}
