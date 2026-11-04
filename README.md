# Max Lindquist - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This site showcases my projects, skills, and experience as a full-stack web developer.

Check out the live website at [https://maxlindquist.dev](https://maxlindquist.dev)

## About

This is my personal portfolio website where I share information about myself, my technical skills, and the projects I've worked on. The site features a clean, minimalist design with interactive elements and a curated set of featured projects.

## Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Static Rendering** - Built with the Next.js App Router and fully statically generated for performance and SEO
- **Featured Projects** - Curated project cards defined in `src/app/data/projects.ts`, with live demo and code links
- **Interactive Components** - Includes animated UI elements like the expandable "Fun Facts" section with a live seconds counter
- **TypeScript** - Fully typed codebase for better developer experience and code reliability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Project Structure

```
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       ├── data/projects.ts     # Featured project content
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page
├── public/                      # Static assets (images, logos)
└── ...
```

## Components

- **`AboutSection`** - Personal introduction with profile picture and bio
- **`FunFacts`** - Interactive component with animated slide-down reveal and live seconds counter
- **`ContactSection`** - Email, LinkedIn and GitHub contact links
- **`ProjectsSection`** - Grid of featured projects
- **`ProjectCard`** - Card for a single project (screenshot, highlights, tech, links)
- **`TechStackSection`** - Display of technical skills and technologies
- **`TechStackCard`** - Individual technology card with logo
- **`Hobbies`** - Personal interests and hobbies section
- **`Header`** - Hero with role, tagline and calls to action
- **`DesktopNav` / `MobileNav`** - Sticky top navigation (desktop) and bottom navigation (mobile) with active-section highlighting
- **`Footer`** - Site footer
- **`Button`** - Link styled as a button (internal or external)

## License

© Max Lindquist. All rights reserved.
