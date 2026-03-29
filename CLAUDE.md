# Cheok Lab Website

## Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint with next config

## Project Structure
- `src/app/` — App Router pages and layouts
- `src/app/globals.css` — Global styles and Tailwind imports
- `public/` — Static assets (images, files)

## Pages
- **Home** — Lab overview, hero section, highlights
- **Research** — Research areas and active projects
- **Team** — PI and lab members with bios
- **Publications** — Publication list (can pull from PubMed)
- **Contact** — Location, email, joining the lab

## Design Guidelines
- Clean, professional academic lab aesthetic
- Responsive design (mobile-first)
- Consistent color palette and typography
- Accessible (WCAG AA compliance)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Conventions
- Use App Router conventions (page.tsx, layout.tsx, loading.tsx)
- Colocate components with their pages, or use `src/components/` for shared ones
- Use semantic HTML elements
- Images go in `public/images/`
