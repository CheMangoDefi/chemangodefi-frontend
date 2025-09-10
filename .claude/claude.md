# CheMango DeFi Frontend – Project Overview & Claude Rulebook

> **This document is the canonical reference for all Claude code agents working on this project.**
> Always consult this file and the @context/ files before generating or changing code.

---

## 1. Project Purpose & Structure

CheMango DeFi is a playful, trustworthy, and finance-oriented web app for collaborative group investing on blockchain. The frontend is built with Next.js (React), using a component-driven, mobile-first design system.

**Key directories:**

- `app/` – Next.js app directory (pages, layout, global styles)
- `app/components/sections/` – All major landing page sections as isolated React components
- `context/` – Contains `style-guide.md`, `landing-page-design.md` and `design-principles.md` (see below)
- `public/` – Static assets (logo, mascot, images)

---

## 2. Design & UX Principles (see @context/design-principles.md)

- **Users first:** Reduce cognitive load, provide feedback, keep flows predictable.
- **Accessibility:** Follow WCAG AA, semantic HTML, keyboard navigation, proper contrast.
- **Performance:** Optimize Core Web Vitals (LCP, CLS, INP), use responsive images, code-splitting.
- **Component-driven:** Use Atomic Design (atoms → molecules → organisms → templates → pages).
- **Consistent UI:** All components must follow the design system and style guide.
- **Responsiveness:** Mobile-first, fluid layouts, test at 360px–1440px.
- **Clarity:** Avoid jargon, keep messaging simple and approachable.
- **Error handling:** Provide inline validation and actionable recovery steps.

---

## 3. Visual & Brand Identity (see @context/style-guide.md)

- **Mascot:** Happy mango holding cash. Use in hero and branding. Never distort or recolor.
- **Colors:**
  - Mango Orange `#FFA94D` (primary accent)
  - Mango Green `#6ABF4B` (secondary)
  - Leaf Green, Sunset Red/Orange gradients for backgrounds
  - Neutrals: Black, Dark Gray, Light Gray, White
- **Typography:**
  - Headings: Bold, sans-serif (Inter or Poppins)
  - Body: Neutral sans-serif (Inter Regular)
  - Hierarchy: H1 (3rem+), H2/H3 (1.5–2rem), Body (1rem)
- **Buttons:**
  - Primary: Mango Orange→Green gradient, pill shape, bold text, scale-up on hover
  - Secondary: White, orange border, color on hover
- **Layout:**
  - Hero: Full-width gradient, centered mascot, bold headline, horizontal CTAs
  - Navbar: Left logo, center links, right CTA
  - 12-column responsive grid, min 1.5rem padding
- **Illustrations:** Playful, financial theme (money, growth, teamwork)
- **Gradients:** Soft orange–green backgrounds, avoid flat blocks

---

## 4. Coding & Architecture Rules

- **Component Structure:**
  - Keep components small, composable, and isolated in `app/components/sections/`
  - Use functional React components, hooks for local state
  - Use presentational vs. container separation if logic grows
- **Styling:**
  - Use Tailwind CSS utility classes for layout, color, and spacing
  - Centralize tokens (colors, spacing, typography) as per style guide
- **State Management:**
  - Prefer local state (hooks)
  - Use React Query/SWR for server state if needed
  - Use global state (Context, Zustand) only if necessary
- **Data & API:**
  - Abstract API calls in `lib/api` or custom hooks (if/when added)
  - Never expose secrets in client code
- **Testing:**
  - Unit: Jest/Vitest
  - Integration: React Testing Library
  - E2E: Playwright/Cypress
  - Visual regression: Percy/Chromatic/Playwright snapshots
- **Accessibility:**
  - All interactive elements must be keyboard accessible
  - Use semantic HTML and ARIA attributes as needed
- **Performance:**
  - Optimize images, avoid layout shifts, minimize JS bundle size
- **Security:**
  - Validate/sanitize all inputs, never leak secrets, use secure auth patterns

---

## 5. Claude Agent Rulebook

**When generating or changing code, Claude must:**

1. **Consult both `@context/style-guide.md`,s `@context/landing-page-design.md`, `@context/framework-guideline.md`, `@context/seo-guideline.md` and `@context/design-principles.md` before any code change.**
2. **Preserve the playful, trustworthy, and finance-oriented brand tone.**
3. **Never break the visual or UX consistency described above.**
4. **Always use the correct color palette, typography, and spacing.**
5. **Ensure all new components are responsive and accessible.**
6. **Validate that all buttons, links, and forms are keyboard and screen-reader accessible.**
7. **Document any new component or pattern in code comments.**
8. **Never hardcode content that should be configurable or translatable.**
9. **Run and pass lint, type, and accessibility checks before merging.**
10. **If unsure, default to the most conservative, accessible, and maintainable solution.**
11. **Ensure all generated copy for the site is in Spanish.**

---

## 6. Quick QA Checklist (see @context/design-principles.md)

- Check responsiveness (mobile, tablet, desktop)
- Test reduced motion
- Take screenshots at 1440px desktop & 375px mobile
- Keyboard navigation works end-to-end
- Run automated accessibility tests (axe/Lighthouse)
- Run Lighthouse & Core Web Vitals check
- Confirm images optimized & no layout shifts
- Run lint, type-check, and tests
- Ensure no secrets in client-side code

---

## 7. References

- [@context/style-guide.md](../context/style-guide.md)
- [@context/design-principles.md](../context/design-principles.md)

> **Always validate new designs and code against this rulebook and the context files before merging to production.**
