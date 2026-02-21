# landing-page-in-a-day

A reusable **Next.js + Tailwind** landing page template optimized for **local service businesses**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize for a client

Edit:
- `src/content.ts` (business name, phone, services, testimonials, etc.)

## Lead capture

The quote form is wired to a placeholder Formspree endpoint:
- `src/components/QuoteForm.tsx`

Replace it with:
- your Formspree form id, **or**
- a custom `/api/lead` route + email/SMS.

## Deploy

- Vercel: import repo, deploy.
- Cloudflare Pages: build command `npm run build`, output `.next`.

## License

MIT
