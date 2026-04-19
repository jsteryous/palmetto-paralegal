# Project Context

## Overview
- Project name: `palmetto-paralegal`
- Stack: React 18, Vite 5, Tailwind CSS 3
- Purpose: marketing site for a Greenville, South Carolina paralegal brand
- Design direction: high-end, trustworthy, modern, restrained

## Current Homepage Structure
- `src/App.jsx`: top-level brand data and page composition
- `src/components/HeroSection.jsx`: hero, primary CTA, trust/value framing
- `src/components/ServicesSection.jsx`: services grid and local SEO support copy
- `src/components/AboutSection.jsx`: positioning and background section
- `src/components/ContactSection.jsx`: consultation form with client-side validation and `mailto:` flow
- `src/components/StructuredData.jsx`: JSON-LD schema for local/legal service SEO
- `src/components/Footer.jsx`: footer contact and location summary

## Brand And UX Notes
- Visual palette: deep navy, slate gray, crisp white
- Tone: premium, credible, professional, local
- Primary CTA: `Schedule a Consultation`
- Avoid visible SEO keyword stuffing in UI copy
- Keep hero copy short enough to stay contained on desktop layouts

## Known Placeholder Data
- Phone number
- Email address
- Street address
- Canonical domain
- Final about/credential copy

## Engineering Notes
- Use semantic HTML and keep sections modular
- Prefer clean Tailwind utilities over heavy abstraction
- Preserve performance: minimal dependencies, no unnecessary client logic
- Verify changes with `npm run build`

## Git Notes
- Default branch: `main`
- Remote: `origin` -> `https://github.com/jsteryous/palmetto-paralegal.git`
