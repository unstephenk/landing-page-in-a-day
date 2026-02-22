import { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-12">
      {title ? (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-neutral-700">{subtitle}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
