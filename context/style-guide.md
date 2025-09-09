# CheMango DeFi – Style Guide

This document defines the **visual identity**, **design principles**, and **UI standards** for the CheMango DeFi frontend.  
Always follow this guide when implementing new components or updating the interface.

---

## 1. Brand Identity

### Logo & Mascot

- **Mascot**: A happy mango holding cash (used in hero sections and branding).
- **Tone**: Friendly, playful, trustworthy, and finance-oriented.
- **Usage**:  
  - Display in the navbar and landing hero section.  
  - Maintain clear space around the mascot.  
  - Do not distort, crop, or recolor.

---

## 2. Colors

### Primary Palette

| Color Name | Hex | Usage |
|------------|------|-------|
| **Mango Orange** | `#FFA94D` | Primary brand accent, CTA backgrounds |
| **Mango Green** | `#6ABF4B` | Secondary accent, success states |
| **Leaf Green** | `#4D9F3A` | Buttons hover states, icons |
| **Sunset Red/Orange Gradient** | `#FF6B35 → #FFA94D → #FFD43B → #6ABF4B` | Background gradients, hero sections |

### Neutrals

| Color | Hex | Usage |
|-------|------|-------|
| **Black** | `#000000` | Headings, logo outline |
| **Dark Gray** | `#333333` | Body text |
| **Light Gray** | `#F5F5F5` | Backgrounds, cards, section separators |
| **White** | `#FFFFFF` | Text on dark backgrounds, button text |

---

## 3. Typography

### Fonts

- **Headings**: Bold, sans-serif, playful yet readable. (Recommended: *Inter* or *Poppins*)
- **Body Text**: Neutral sans-serif, lightweight for readability. (Recommended: *Inter Regular*)

### Hierarchy

- **Hero Heading (H1)**:  
  - Size: `3rem+`  
  - Bold, uppercase or with strong emphasis.  
  - Example: `CheMango DeFi`
- **Subheading (H2/H3)**:  
  - Size: `1.5rem – 2rem`  
  - Used for sections like "Why us", "Features".
- **Body Text**:  
  - Size: `1rem` (16px)  
  - Clear, short paragraphs.

---

## 4. Layout & Spacing

- **Hero Section**:  
  - Full-width gradient background.  
  - Centered mascot + bold headline.  
  - Call-to-action (CTA) buttons aligned horizontally.
- **Navigation Bar**:  
  - Left: Logo (mascot).  
  - Center: Navigation links (`Why us`, `Opportunities`, `Features`).  
  - Right: CTA button ("Try it out!").
- **Grid System**:  
  - Use a 12-column responsive grid (Tailwind or CSS Grid).  
  - Consistent padding: `1.5rem` minimum.

---

## 5. Buttons & Components

### Primary Button

- Background: **Mango Orange → Green gradient**  
- Rounded corners: `2rem` (pill shape)  
- Text: Bold, black or white depending on background  
- Hover: Slight scale-up (`transform: scale(1.05)`)  

### Secondary Button

- Background: White  
- Border: `2px solid Mango Orange`  
- Text: Mango Orange or Dark Gray  
- Hover: Background turns light orange  

---

## 6. Visual Elements

### Illustrations

- Use **mango mascot** for friendly branding.  
- Maintain **playful financial theme** (money, growth, teamwork).  

### Gradients

- Use soft orange–green gradients in backgrounds.  
- Avoid flat single-color blocks unless separating sections.  

---

## 7. UX Guidelines

- **Consistency**: Buttons, spacing, and typography must follow this guide.  
- **Accessibility**: Ensure color contrast for readability (use WCAG AA as a baseline).  
- **Responsiveness**: Mobile-first design. Test across 360px → 1440px viewports.  
- **Clarity**: Avoid jargon; messaging should be simple and approachable.  

---

✅ **Always validate new designs against this guide before merging to production.**  
