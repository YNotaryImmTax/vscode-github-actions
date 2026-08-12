# Layout improvements added (branch: YusbelitoSolutions/Layout-Improv)

Added a minimal Next.js App Router layout and supporting files, plus TailwindCSS, Redux Toolkit, and next-auth wiring scaffolding.

Files added

- app/layout.tsx — root layout (server component) with typed next Metadata and Inter font.
- app/providers.tsx — client-side Providers wrapper (SessionProvider + Redux Provider).
- app/globals.css — base styles and Tailwind directives.
- src/store/store.ts — minimal Redux Toolkit store scaffolding.
- app/api/auth/[...nextauth]/route.ts — next-auth route handler (skeleton).
- next.config.js — Next.js config with appDir enabled.
- tailwind.config.js — Tailwind config.
- postcss.config.js — PostCSS config.
- public/site.webmanifest — simple PWA manifest.
- public/favicon.ico — placeholder SVG (named .ico) with YS monogram.
- public/apple-touch-icon.png — placeholder SVG (named .png) with YS monogram.

Notes & next steps

1. This repository previously did not appear to be a Next.js app. The files added are scaffolding for a Next.js app using the App Router. To actually run the app you will need to install the Next.js dependencies and (optionally) move/merge package.json entries.

2. Install required packages (from the repo root):

   npm install next react react-dom tailwindcss postcss autoprefixer @reduxjs/toolkit react-redux next-auth

   or with pnpm/yarn as appropriate.

3. Initialize Tailwind (if you want the full recommended setup):

   npx tailwindcss init -p

   The included tailwind.config.js and postcss.config.js are minimal but suitable for the App Router structure.

4. next-auth configuration:
   - Set environment variables like GITHUB_ID and GITHUB_SECRET for providers you enable.
   - Update app/api/auth/[...nextauth]/route.ts to add providers and callbacks.

5. Icons/manifests:
   - Replace the placeholder icons in public/ with production-ready images (.ico/.png), and update site.webmanifest as needed.

6. If you want the Next.js app isolated from the VS Code extension code, consider moving the Next.js files into a subfolder (e.g., `web/`) and giving that folder its own package.json. I left the files at the repository root per your request.

Commit message

"feat(layout): add Next.js app layout, Tailwind, Redux, next-auth, providers, manifest & placeholder icons"
