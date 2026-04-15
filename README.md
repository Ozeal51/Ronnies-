# Ronnie's Hair Salon — Premium Beauty Landing Page

Reference-inspired, mobile-first React website for **Ronnie's Hair Salon** in **Aminu Kano Crescent, Wuse 2, Abuja, Nigeria**.

The current design direction mirrors the clean, feminine, editorial salon style you requested, with Ronnie's branding/content and the provided salon hero image.

## What’s Included

- Sticky header with smooth-scroll section links
- Editorial hero section with Ronnie’s real signboard image (`src/assets/ronnies.jpeg`)
- New Guest Experience (3-step onboarding flow)
- About section (mission, vision, customer promise)
- Service menu with reusable service cards + specialties grid
- Testimonials section
- Responsive gallery (2 columns on mobile, 3–4 on larger screens)
- Newsletter/signup-style section
- Contact section with:
	- WhatsApp quick book: `08033207529`
	- Instagram: `https://instagram.com/ronnieshairsalon`
	- Google Maps embed for Wuse 2, Abuja
	- Contact form UI (name, email, message)
- Floating WhatsApp button
- Accessibility support (focus states + reduced motion)

## Tech Stack

- React (functional components + hooks)
- Vite
- Modern CSS (custom properties, grid, flex, responsive breakpoints)
- ESLint

## Project Structure

```text
src/
	App.jsx
	App.css
	index.css
	main.jsx
	assets/
		ronnies.jpeg
	components/
		GalleryGrid.jsx
		SectionHeading.jsx
		ServiceCard.jsx
		SiteNav.jsx
```

## Run Locally

```powershell
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Build for Production

```powershell
npm run build
npm run preview
```

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — create optimized production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Customization Notes

- Update text/content data in `src/App.jsx`:
	- `navLinks`
	- `guestSteps`
	- `services`
	- `specialties`
	- `testimonials`
	- `galleryImages`
- Update theme tokens in `src/index.css` (`:root`)
- Update section styling and responsive behavior in `src/App.css`
- Replace hero image in `src/assets/` and keep/update the import in `src/App.jsx`

## Minimal Code Comments

Minimal comments are added only where structure/intent benefits maintainability:

- `src/App.jsx` (data blocks and helper/icon sections)
- `src/components/*.jsx` (component intent)

## SEO, Accessibility, Performance

- Semantic structure (`header`, `main`, `section`, `footer`)
- Keyboard focus-visible styles for interactive controls
- `prefers-reduced-motion` support
- Lazy-loaded gallery images
- Lean CSS/React implementation for fast loading

## Contact Details (Configured)

- **Business:** Ronnie's Hair Salon
- **Address:** Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
- **WhatsApp:** `08033207529`
- **Instagram:** `@ronnieshairsalon`
