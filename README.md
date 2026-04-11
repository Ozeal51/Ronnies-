# Ronnie's Hair Salon Website

A modern, mobile-first React web application for **Ronnie's Hair Salon**, located at **Aminu Kano Crescent, Wuse 2, Abuja, Nigeria**.

The site uses a clean, elegant, feminine design system with soft blush/nude tones, subtle animation, smooth scrolling, and reusable components.

## Features

- Mobile-first responsive design (phone, tablet, desktop)
- Sticky navigation with smooth in-page scrolling
- Hero section using the real salon signage image (`src/assets/ronnies.jpeg`)
- About section (mission, vision, customer promise)
- Services grid with descriptions and pricing hints
- Responsive gallery grid (2 columns on small screens, 3–4 on larger screens)
- Contact section with:
	- WhatsApp CTA: `08033207529`
	- Instagram: `https://instagram.com/ronnieshairsalon`
	- Google Maps embed (Aminu Kano Crescent, Wuse 2, Abuja)
	- Contact form UI (name, email, message)
- Floating WhatsApp chat button
- Accessible focus states and reduced-motion support
- SEO-friendly semantic sectioning (`header`, `main`, `section`, `footer`)

## Tech Stack

- React (functional components + hooks)
- Vite
- Modern CSS (custom properties, responsive grid/flex, media queries)
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

## Quick Start

### 1) Install dependencies

```powershell
npm install
```

### 2) Run development server

```powershell
npm run dev
```

### 3) Build for production

```powershell
npm run build
```

### 4) Preview production build

```powershell
npm run preview
```

## Available Scripts

- `npm run dev` — start local development server
- `npm run build` — create optimized production build
- `npm run preview` — serve production build locally
- `npm run lint` — run ESLint checks

## Customization Guide

- Update brand copy/content in `src/App.jsx`:
	- navigation links (`navLinks`)
	- services list (`services`)
	- gallery images (`galleryImages`)
	- contact links (`whatsappLink`, `instagramLink`, `locationLink`)
- Update color palette and typography in `src/index.css` (`:root` variables)
- Adjust layout/animations in `src/App.css`
- Replace hero image in `src/assets/` and update import if filename changes

## Accessibility Notes

- Strong color contrast for content and CTAs
- Keyboard-visible focus rings on interactive elements
- `prefers-reduced-motion` media query to minimize animation for users who request it
- Meaningful `alt` text for imagery and icons marked decorative where appropriate

## Performance Notes

- Gallery images lazy-load (`loading="lazy"`)
- Layout uses lightweight CSS without heavy runtime UI libraries
- Vite production build for fast loading and deployment

## Deployment

This is a static Vite app and can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages (with Vite static build output)

Build output is generated in the `dist/` folder after running:

```powershell
npm run build
```

## Contact Info Used in This Project

- **Business:** Ronnie's Hair Salon
- **Address:** Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
- **WhatsApp:** 08033207529
- **Instagram:** `@ronnieshairsalon`
