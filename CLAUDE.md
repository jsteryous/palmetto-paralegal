# Palmetto Paralegal — Project Context

## Overview
Marketing site for a Greenville, SC paralegal practice. The client specializes in **title searches** and has **20+ years of experience** in South Carolina property records. Positioning: clear, credible, local.

## Stack
- React 18 + Vite 5 + Tailwind CSS 3
- Build: `npm run build`  |  Dev: `npm run dev`

## Brand
- Name: Palmetto Paralegal
- Tagline: "Title Search Specialists"
- Primary service: **title searches** (lead with this everywhere)
- Secondary: deed & lien research, property document prep, overflow paralegal support
- Service area: Greenville + Upstate SC (Spartanburg, Anderson, Pickens, Oconee, Laurens, Easley)
- Years experience: 20+ (drives `foundingDate` in structured data)
- Primary CTA: "Request a Title Search"

### Palette
- Palmetto green (`palmetto-50`…`palmetto-950`) — primary brand (buttons, accents, featured cards, footer)
- Sand (`sand-50`/`100`/`200`) — warm neutral for light mode and dim-mode body text
- Charcoal (`charcoal-50`…`charcoal-950`) — dim-mode surfaces/borders (neutral, not green)
- Defined in `tailwind.config.js`; CSS vars in `src/index.css`

### Theming (light / dim)
- Tailwind `darkMode: "class"` — toggled by `.dark` on `<html>`.
- CSS vars in `src/index.css` swap under `html.dark` (canvas, surface, line, input background, focus ring). **Dim mode is charcoal, not dark-green** — canvas `#131517`, surfaces on `charcoal-800/900`, body text `sand-100`. Palmetto stays as accent only (buttons, eyebrows, primary coverage pill, featured service card, footer).
- Dim-mode eyebrow/accent text uses `palmetto-200` (not `-300`) — the lighter green has stronger contrast on charcoal for small uppercase tracked labels.
- `ThemeToggle.jsx` persists choice to `localStorage` (key `palmetto-theme`), respects `prefers-color-scheme` on first load.
- Pre-hydration script in `index.html` sets the class before React mounts to prevent FOUC.
- When adding a section: every hardcoded `bg-white`, `text-slate-*`, `text-palmetto-900` needs a `dark:` variant. For surfaces/cards/inputs use `dark:bg-charcoal-800|900` + `dark:border-charcoal-700`; for body text `dark:text-sand-50|100` (avoid opacity below `/80`); for accents `dark:text-palmetto-200`. Prefer CSS vars (`bg-[var(--canvas)]`) where possible.

### Typography
- Display: **Fraunces** (serif, headings, `.font-display`) — never combine with `leading-none`; descenders (g/p/y) clip.
- Body: **Manrope** (sans)

## Structure
- `src/App.jsx` — brand object, services array, header with theme toggle + CTA, section composition
- `src/components/HeroSection.jsx` — H1, stat row, sample deliverable aside
- `src/components/ServicesSection.jsx` — services grid; first card is "Primary Service" (featured styling); per-service icons via `serviceIcons` map
- `src/components/AboutSection.jsx` — 20+ years story, best-fit panel, Coverage Area tile grid (6 counties + seat), three pillar cards
- `src/components/ContactSection.jsx` — title search request form, mailto flow
- `src/components/Footer.jsx` — dark palmetto footer with county list
- `src/components/PalmettoMark.jsx` — SVG logo (palmetto fronds + document base)
- `src/components/DocumentIllustration.jsx` — hero-side "sample deliverable" SVG: report header with SC seal, parcel/period/status row, chain-of-title timeline, findings/exceptions card. Palmetto-palette only.
- `src/components/ThemeToggle.jsx` — light/dim toggle button (sun/moon)
- `src/components/StructuredData.jsx` — JSON-LD (`LegalService` + `WebSite`, OfferCatalog, areaServed)
- `index.html` — SEO meta, OG/Twitter cards, geo tags, canonical, pre-hydration theme script
- `public/favicon.svg` — matches logo

## Content: still placeholder
These in `src/App.jsx` need real values before launch:
- `phone: "(864) 555-0148"`
- `email: "consultations@palmettoparalegal.com"`
- `address: "105 River Street, Greenville, SC 29601"`

`StructuredData.jsx` also hardcodes the street address + postal code — update alongside.

SEO/polish paused until client confirms real contact info. Outstanding items:
- No `og:image` / `twitter:image` — add a 1200×630 PNG to `/public/` and reference from `index.html` before social sharing.
- Google Fonts loaded via CSS `@import` (blocks render) — migrate to `<link rel="preconnect"> + <link rel="stylesheet">` in `index.html` when perf pass happens.

## Messaging rules
- Lead with title searches. Don't bury it under "freelance paralegal support."
- Use 20+ years as a trust anchor — headline, about, footer, structured data.
- Keep copy direct. "If you confuse the customer you lose." No jargon, no keyword stuffing.
- Hero CTA: "Request a Title Search." Secondary: "See What's Included."

## SEO notes
- Title: "Title Search Services in Greenville, SC | Palmetto Paralegal"
- Meta description and keywords focus on title search + Upstate SC + 20+ years.
- Structured data includes `foundingDate` derived from `yearsExperience`, `OfferCatalog` of services, and `areaServed` city list for local search.
- Footer lists counties for local-SEO signal.
- Don't visibly keyword-stuff body copy.

## Engineering notes
- Keep sections semantic and modular.
- Prefer Tailwind utilities + the `palmetto`/`sand` color tokens over ad-hoc hex.
- Avoid new dependencies.
- Verify with `npm run build` after structural changes.

## Git
- Branch: `main`
- Remote: `origin` → `https://github.com/jsteryous/palmetto-paralegal.git`
- Recent direction: pivoted from generic "paralegal support" site to title-search-led positioning with refreshed palette, logo, and SEO (2026-04).
- Follow-up pass (2026-04-19): rebuilt sample deliverable SVG in palmetto palette with chain-of-title + findings card; replaced faux Upstate SVG map with Coverage Area tile grid; added service-card icons; added dim-mode toggle with CSS-var-based theming and pre-hydration script; tightened footer text contrast; fixed header wordmark descender clipping (`leading-none` → `leading-[1.15]`).
- Readability pass (2026-04-19): replaced green-tinted dim mode with neutral charcoal — added `charcoal` palette to `tailwind.config.js`, rewrote `html.dark` CSS vars, swapped every `dark:bg-palmetto-800|900|950` surface to `dark:bg-charcoal-*` across Hero/Services/About/Contact/ThemeToggle (brand mark, featured card, footer, availability card intentionally stay green). Bumped eyebrow/accent text `palmetto-300` → `palmetto-200` site-wide and raised muted text contrast (`slate-500`→`600`, `sand-100/60|75|80`→`/80|85|90`, footer copy to full-opacity). Restructured Coverage pill to stack `Seat · {name}` under the county name so "Spartanburg County" no longer overflows.
