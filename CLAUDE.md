# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Vue 3 + TypeScript portfolio site featuring GSAP animations and Tailwind CSS styling. Single-page application showcasing projects, experience, and skills with smooth scroll-triggered animations.

## Development Commands

```bash
# Development server
npm run dev

# Build with type checking
npm run build

# Preview production build
npm run preview

# Clean dev (clears Tailwind cache)
npm run dev:clean
```

## Tech Stack
- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (with ScrollTrigger, TextPlugin, CSSPlugin)
- **Icons**: FontAwesome (brands, solid)
- **Router**: Vue Router (history mode)
- **Build Tool**: Vite

## Architecture

### Key Directories
- `src/views/` - Main page views (currently only Home.vue)
- `src/components/home/` - Home page sections (HomeHero, HomeAbout, HomeExperience, HomeProjects, HomeContact, HomeTechs)
- `src/composables/animations/` - Reusable GSAP animation logic
- `src/assets/data/` - Content data (projects, jobs, techs)
- `src/config/` - Configuration constants

### Animation System
The project uses a composable-based animation architecture:

- **useHeroAnimation** (`src/composables/animations/useHeroAnimation.ts`) - Hero section text reveal with rotating skill words
- **useNavigationAnimation** (`src/composables/animations/useNavigationAnimation.ts`) - Navigation intro and mobile menu toggle animations
- Legacy animations in `src/animations.ts` (being refactored to composables)

Animations are GSAP timeline-based and properly cleaned up in `onBeforeUnmount` hooks to prevent memory leaks.

### Data Management
Content is centralized in TypeScript files under `src/assets/data/`:
- **projects.ts** - Project portfolio items with types, links, GitHub repos
- **jobs.ts** - Work experience with highlights
- **techs.ts** - Technology stack

To update content, edit these data files rather than components directly.

### Path Alias
`@` is aliased to `./src` in vite.config.ts for cleaner imports.

### FontAwesome Setup
FontAwesome is globally registered in `src/main.ts`. Icons must be added to the library before use:
```typescript
library.add(faGithub, faLinkedin, fas)
```

### GSAP Plugins
GSAP plugins are registered globally in `src/main.ts`:
```typescript
gsap.registerPlugin(CSSPlugin, TextPlugin, ScrollTrigger)
```

## Development Notes

### Animation Development
- All animation timelines should be stored and killed in `onBeforeUnmount` to prevent memory leaks
- Use `nextTick()` when animating elements that may not be in DOM yet
- ScrollTrigger animations are configured in individual components using `fadeInTextBlock()` or custom ScrollTrigger configs

### Component Structure
Home page is component-based with sections:
- HomeHero - Hero with animated name and rotating job title
- HomeAbout - About section
- HomeExperience - Jobs timeline
- HomeProjects - Project cards
- HomeTechs - Technology stack
- HomeContact - Contact information

### Styling Approach
- Tailwind utility classes for layout and styling
- Custom Tailwind config in `tailwind.config.js`
- Global styles in `src/style.css`

### Type Safety
Project uses TypeScript with strict mode. Type definitions for data structures are co-located with data files (e.g., `Projects` type in `projects.ts`, `Job` interface in `jobs.ts`).
