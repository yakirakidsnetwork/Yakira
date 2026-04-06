# Codebase Handoff Report: Yakira Project

This document provides a comprehensive overview of the Yakira codebase to ensure a seamless transition for the next developer.

## 1. Project Overview & Tech Stack
Yakira is a modern web application built for empowering Africa's displaced children. It prioritizes performance, visual excellence, and a scalable architecture.

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) (Icons)
- **Animations**: `tailwindcss-animate` & `tw-animate-css`
- **Deployment**: [Vercel](https://vercel.com/)

---

## 2. Architecture & File Structure
The project follows the Next.js App Router convention with source code encapsulated in the `src` directory.

### Directory Roles
- **`src/app/`**: Contains the routing logic.
    - **`(public)/`**: A route group for all visitor-facing pages (About, Contact, Stories, etc.).
    - **`globals.css`**: Defines the CSS variables for the theme and global resets.
- **`src/components/`**: Organized by feature and role.
    - **`ui/`**: Base atomic components (Buttons, Cards, Inputs).
    - **`layout/`**: Persistent structure like `header.tsx` and `footer.tsx`.
    - **`sections/`**: Modular page sections (Hero, Features, Content blocks).
- **`src/lib/`**: Shared utilities (e.g., `cn` helper for Tailwind class merging).
- **`src/data/`**: Static JSON data for dynamic rendering (e.g., `episodes.json`).

---

## 3. Design System & Styling
The application uses a custom-tailored theme defined in `tailwind.config.ts` and `globals.css`.

### Color Palette (Theme Tokens)
- **African Earth**: `#8B6F47` (Primary grounding color)
- **Hope Orange**: `#E8995F` (Accent for calls to action)
- **Life Green**: `#5F9B65` (Success/Growth indicators)
- **Sunset Gold**: `#D4A574`
- **Spiritual Blue**: `#4A6FA5`
- **Mentor Purple**: `#7B68A6`

### Typography
The project utilizes Google Fonts via `next/font`:
1. **Poppins**: Headers and branding.
2. **Inter**: Body text and UI elements.
3. **Playfair Display**: Stylized accents or quotes.

---

## 4. Maintenance & Deployment "Gotchas"

> [!IMPORTANT]
> **Dependency Resolution**:
> The project uses a specific `.npmrc` file with `legacy-peer-deps=true`. This is critical for avoiding `ERESOLVE` conflicts with newer ESLint configurations. Keep `eslint-config-next` at version `^14.2.0` and `eslint` at `^8.57.0` to maintain stability with the current React/Next.js ecosystem.

### Current Deployment Workflow
- The repository is hosted on GitHub and automatically deployed via Vercel.
- **Primary Remote**: `origin` (`OlakunlePaul/Wekare`)
- **Secondary Remote**: `yakira-upstream` (`yakirakidsnetwork/Yakira`)

---

## 5. Future Roadmap Suggestions
- **Content Management**: Transition the JSON files in `src/data` to a headless CMS (e.g., Sanity or Contentful) as the content volume grows.
- **Form Handling**: Implement a robust form library like `react-hook-form` paired with `zod` for validation on the contact page.
- **State Management**: If user accounts or complex dashboards are added, consider [Zustand](https://github.com/pmndrs/zustand) for lightweight state management.
