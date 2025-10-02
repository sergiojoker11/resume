# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally
- `npx prettier --write .` - Format code with Prettier (supports Astro files)

## Architecture

This is an Astro-based resume website with Tailwind CSS styling. The architecture is content-driven:

### Content Management

All resume content is centralized in `src/EDIT_ME/`:
- `user_info.json` - Name, tagline, contact info with icons (LinkedIn, GitHub, email, location)
- `site_info.json` - Page metadata, domain, favicon, thumbnail, and optional basePath
- `*.md` files (1_about.md, 2_work.md, etc.) - Resume sections with frontmatter `title` field

The main page (`src/pages/index.astro`) uses `Astro.glob("../EDIT_ME/*.md")` to auto-discover and render all markdown sections in order. Sections are rendered as `<h2>` titles followed by content.

### Layout Hierarchy

- `BaseLayout.astro` - HTML shell, meta tags, fonts (Manrope from Google Fonts), theme toggler
- `ResumeLayout.astro` - Resume-specific layout with NavBar, ResumeHeader, Footer, BackToTop
- Components consume data from `src/EDIT_ME/*.json` files

### Technical Features

- **Dark Mode**: Class-based dark mode (`darkMode: "class"` in Tailwind config)
- **Icons**: Uses astro-icon with @iconify-json/mdi for Material Design Icons
- **Last Modified Timestamps**: Custom remark plugin (`remark-modified-time.mjs`) uses git log to inject last modified dates into frontmatter
- **GitHub Pages Deployment**: Workflow at `.github/workflows/deploy.yml` auto-deploys on push to main

### Styling

Tailwind CSS with custom configuration:
- Custom breakpoint: `xs: 375px`
- Custom font: Manrope (via Google Fonts)
- Dark mode: class-based switching
