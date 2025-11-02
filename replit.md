# Plantae - Plant Science Research Website

## Overview
A React-based website for a plant science research organization. The site showcases research initiatives, educational programs, events, career opportunities, and diversity & inclusion efforts.

## Technology Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation

## Project Structure
- `src/pages/` - Page components (Index, Research, Careers, Events, EDI, Education, About, Contact)
- `src/components/` - Reusable UI components
- `src/components/ui/` - shadcn/ui components
- `public/` - Static assets

## Configuration

### Vite Configuration
The project is configured to:
- Run on port 5000 (Replit webview)
- Use base path "/" for GitHub Pages deployment
- Host on 0.0.0.0 for accessibility

### GitHub Pages Deployment
The project is configured with `base: "/"` for deployment to the root directory of GitHub Pages.

To build for production:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Development

### Running Locally
```bash
npm run dev
```
The application will be available at http://localhost:5000

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Recent Changes
- **2025-11-02**: Migrated from Lovable to Replit and configured for GitHub Pages
  - Configured Vite for GitHub Pages with root directory base path (`base: "/"`)
  - Updated server configuration to use port 5000 and host 0.0.0.0
  - **Changed from BrowserRouter to HashRouter** to fix blank page issue on GitHub Pages
    - HashRouter is required for GitHub Pages static hosting
    - URLs will use hash format (e.g., `/#/research` instead of `/research`)
  - Added React Router future flags for v7 compatibility
  - Installed all npm dependencies
  - Added gh-pages package for easy deployment
  - Created `.nojekyll` file in public folder for GitHub Pages
  - Added deploy scripts to package.json
  - Created DEPLOY.md with deployment instructions for GitHub Pages

## Pages
- **Home** (`/`) - Landing page with hero section
- **Research** (`/research`) - Research initiatives and projects
- **Careers** (`/careers`) - Job opportunities
- **Events** (`/events`) - Upcoming events and conferences
- **EDI** (`/edi`) - Equality, Diversity & Inclusion information
- **Education** (`/education`) - Educational programs and resources
- **About** (`/about`) - Organization information
- **Contact** (`/contact`) - Contact form and information
