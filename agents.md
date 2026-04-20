# Project Context

## Overview
- Project: `palmetto-paralegal`
- Stack: React 18, Vite 5, Tailwind CSS 3
- Purpose: marketing site for a Greenville, South Carolina paralegal brand
- Direction: premium, credible, restrained

## Current Structure
- `src/App.jsx`: brand data, page composition, header
- `src/components/PalmettoMark.jsx`: logo mark used in header/favicon
- `src/components/HeroSection.jsx`: hero copy, CTA row, right-side value panel
- `src/components/ServicesSection.jsx`: services grid
- `src/components/AboutSection.jsx`: about card and positioning copy
- `src/components/ContactSection.jsx`: consultation form with client-side validation and `mailto:` flow
- `src/components/StructuredData.jsx`: JSON-LD schema
- `src/components/Footer.jsx`: footer and photo attribution

## Brand Notes
- Palette: deep navy, slate, white
- Tone: local, professional, modern
- Primary CTA: `Schedule a Consultation`
- Keep hero copy short and contained
- Avoid visible keyword stuffing

## Content Notes
- Still placeholder: phone, email, street address, about/credential copy
- Greenville photos are used as restrained background treatment, not standalone gallery content

## Engineering Notes
- Keep sections semantic and modular
- Prefer straightforward Tailwind utilities
- Avoid unnecessary dependencies or client logic
- Verify with `npm run build`

## Git
- Branch: `main`
- Remote: `origin` -> `https://github.com/jsteryous/palmetto-paralegal.git`
