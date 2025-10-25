# Max Lindquist - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This site showcases my projects, skills, and experience as a full-stack web developer.

Check out the live website at [https://maxlindquist.dev](https://maxlindquist.dev)

## About

This is my personal portfolio website where I share information about myself, my technical skills, and the projects I've worked on. The site features a clean, minimalist design with interactive elements and real-time data fetching from the GitHub API.

## Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Server-Side Rendering** - Built with Next.js App Router for optimal performance and SEO
- **Dynamic Project Showcase** - Automatically fetches and displays my GitHub repositories with sorting by creation date
- **Interactive Components** - Includes animated UI elements like the expandable "Fun Facts" section with a live seconds counter
- **TypeScript** - Fully typed codebase for better developer experience and code reliability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Backend/API
- **Next.js API Routes** - Serverless API endpoints
- **GitHub REST API** - Integration for fetching repository data

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Project Structure

```
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page
├── public/                      # Static assets (images, logos)
└── ...
```

## Components

- **`AboutSection`** - Personal introduction with profile picture and bio
- **`FunFacts`** - Interactive component with animated slide-down reveal and live seconds counter
- **`ContactSection`** - Contact information and form
- **`ProjectsSection`** - Showcase of projects with GitHub integration
- **`RepoCard`** - Card component for displaying GitHub repository information
- **`TechStackSection`** - Display of technical skills and technologies
- **`TechStackCard`** - Individual technology card with logo
- **`Hobbies`** - Personal interests and hobbies section
- **`Header`** - Navigation header
- **`Footer`** - Site footer
- **`Button`** - Reusable button component

## License

© 2025 Max Lindquist. All rights reserved.



