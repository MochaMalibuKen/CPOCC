# CPOCC Website (Next.js + App Router + Tailwind)

Initial scaffold for the Citizens Park Office & Conference Center website with sub-pages for Lily Event Center and the Citizen's Park Business Development Lab (CPBDL).

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS for design tokens and utilities
- Framer Motion ready (install packages already listed) for subtle transitions

## Structure
- `app/` — pages and API routes
  - `/` home
  - `/about`
  - `/offices`
  - `/lily`
  - `/business-lab`
  - `/contact`
  - `api/contact`, `api/leasing`, `api/lily`, `api/business-lab` — placeholder POST handlers (console log submissions)
- `components/` — shared UI (Header, Footer, CTAButton, Section, Card, Badge) and form components
- `public/assets/` — placeholder images and future PDFs
  - `images/cpocc`, `images/lily`, `images/business-lab`
  - `pdfs` for handbook or brochures

## Design tokens
Defined in `tailwind.config.ts` and `app/globals.css`:
- CPOCC base: navy/charcoal, warm neutral, muted gold accent
- Lily accent: sage/blush
- Lab accent: steel/mist
- Typography: Playfair Display (headings) + Source Sans 3 (body)

## Forms
Each page has its own form component with client-side validation and POST to its own API route. Responses currently log to the server console and return `{ ok: true }`.
- General: `ContactForm` → `/api/contact`
- Offices: `OfficeForm` → `/api/leasing`
- Lily: `LilyForm` → `/api/lily`
- Business Lab: `LabForm` → `/api/business-lab`

To wire a real backend, replace the `console.log` in each route handler with your integration (email service, CRM, etc.).

## Eventective / handbook placeholders
- Lily page: look for `TODO` near "Check Availability" to embed Eventective or booking links.
- Business Lab page: handbook link points to `/assets/pdfs/cpbdl-membership-handbook.pdf`; replace the placeholder PDF with the official handbook file.

## Local setup
1) Install deps: `npm install`
2) Run dev server: `npm run dev`
3) Lint: `npm run lint`

## SEO + notes
- Each page includes metadata title/description.
- Footer contains address and CPOCC socials only (Instagram + Facebook placeholders).
- Structured data TODOs can be added in page heads when ready (Organization / LocalBusiness / EventVenue).

## Content swap checklist
- Replace hero copy, stats, and listing data as leasing changes.
- Swap placeholder images with real photos in `public/assets/images/...` and update paths.
- Add real social links for CPOCC when available; avoid adding Lily socials until launched.
- Confirm pricing/availability text before going live.
