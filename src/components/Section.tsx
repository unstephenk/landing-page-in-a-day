import { ReactNode } from "react";

export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      {title ? <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2> : null}
      {children}
    </section>
  );
}
