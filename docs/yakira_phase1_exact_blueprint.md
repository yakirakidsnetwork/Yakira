# YAKIRA KIDS NETWORK - PHASE 1 BUILD GUIDE
## Exact Blueprint Implementation with Coming Soon Features

**Based on:** Official Yakira Kids Network Blueprint Document  
**Version:** 1.0  
**Launch Date:** January 27, 2026  
**Founder:** Yvonne Muyselaar (Netherlands 🇳🇱)  
**Philosophy:** "We rise by lifting others."

---

## PHASE 1: UI/UX DESIGN DIRECTION

### PRIMARY DESIGN REFERENCE: "Charity Web Landing Page" by Tanim Khan

**🎨 DESIGN SOURCE:** Dribbble - "Charity Web Landing Page" by Tanim Khan  
**📊 POPULARITY:** 1k+ likes, 240k+ views  
**🔗 SEARCH ON DRIBBBLE:** "charity landing page warm colors"

**Why This Design is Perfect for Yakira:**
- ✅ Clean, modern, professional aesthetic
- ✅ Warm color palette (browns, oranges, greens) - perfect for African nonprofit
- ✅ Strong emotional hero sections with clear CTAs
- ✅ Card-based layout (easy to scan and navigate)
- ✅ Trust-building elements (impact metrics, testimonials)
- ✅ Mobile-first responsive design
- ✅ Generous whitespace (not cluttered)
- ✅ Professional but warm and inviting

---

### PHASE 1.1: COLOR PALETTE (From Tanim Khan Design + Blueprint)

### PHASE 1.1: COLOR PALETTE (From Tanim Khan Design + Blueprint)

**Copy these EXACT colors into your Tailwind config:**

```css
/* PRIMARY COLORS (Main brand colors) */
--african-earth: #8B6F47;      /* Rich brown - grounding, stability, African soil */
--hope-orange: #E8995F;         /* Warm orange - energy, hope, African sunset */
--life-green: #5F9B65;          /* Natural green - growth, life, prosperity */
--sunset-gold: #D4A574;         /* Golden yellow - warmth, Africa sunset, achievement */

/* ACCENT COLORS (Supporting colors) */
--spiritual-blue: #4A6FA5;      /* Trust, faith, stability */
--mentor-purple: #7B68A6;       /* Wisdom, guidance */
--donor-teal: #4A9B9B;          /* Generosity, abundance */

/* NEUTRALS (Backgrounds and text) */
--cream: #FAF8F3;               /* Soft backgrounds, warm alternative to white */
--warm-white: #FFFFFF;
--text-dark: #2D2D2D;           /* Main text color */
--text-light: #6B6B6B;          /* Secondary text */
--border-light: #E5E5E5;        /* Borders, dividers */
```

**Color Usage Rules:**
- **african-earth**: Headings, footer background, trust sections
- **hope-orange**: Primary CTA buttons (DONATE NOW), links, important highlights
- **life-green**: Success states, growth indicators, program icons
- **sunset-gold**: Impact metrics, achievement badges, hover states
- **spiritual-blue**: Hero overlays, dark sections, trust elements
- **cream**: Section backgrounds (alternating with white)
- **white**: Main backgrounds, card backgrounds

---

### PHASE 1.2: TYPOGRAPHY SYSTEM (From Tanim Khan Design)
### PHASE 1.2: TYPOGRAPHY SYSTEM (From Tanim Khan Design)

**Font Families (Google Fonts):**

```typescript
// Add to your Next.js layout or globals
import { Poppins, Inter, Playfair_Display } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})
```

**Typography Scale:**

```css
/* HEADINGS (Poppins) */
H1 (Hero):          64px (4rem) / Bold / -0.5px letter-spacing / Line-height: 1.1
H2 (Sections):      48px (3rem) / Bold / -0.3px letter-spacing / Line-height: 1.2
H3 (Subsections):   36px (2.25rem) / Semi-bold / Line-height: 1.3
H4 (Cards):         24px (1.5rem) / Semi-bold / Line-height: 1.4
H5 (Small):         20px (1.25rem) / Semi-bold / Line-height: 1.4
H6 (Tiny):          16px (1rem) / Semi-bold / Line-height: 1.5

/* BODY TEXT (Inter) */
Body Large:         18px (1.125rem) / Regular / Line-height: 1.7
Body Regular:       16px (1rem) / Regular / Line-height: 1.6
Body Small:         14px (0.875rem) / Regular / Line-height: 1.6
Caption:            12px (0.75rem) / Medium / Line-height: 1.5

/* SPECIAL (Playfair Display) */
Quote:              24px (1.5rem) / Italic / Line-height: 1.6
Founder Quote:      20px (1.25rem) / Italic / Line-height: 1.7

/* UI ELEMENTS */
Button Text:        16px (1rem) / Poppins Semi-bold / Letter-spacing: 0.3px
Link Text:          16px (1rem) / Inter Medium / Underline on hover
Nav Items:          15px (0.9375rem) / Poppins Medium
```

**Mobile Typography (Responsive):**
```css
/* Reduce sizes on mobile */
H1: 40px → 48px → 64px (mobile → tablet → desktop)
H2: 32px → 40px → 48px
H3: 28px → 32px → 36px
Body: 16px (stays consistent)
```

---

### PHASE 1.3: COMPONENT DESIGN PATTERNS (From Tanim Khan)

**Button Styles:**

```tsx
/* PRIMARY BUTTON (Donate Now, Main CTAs) */
Style: 
- Background: hope-orange (#E8995F)
- Text: White, Poppins Semi-bold, 16px
- Height: 56px
- Padding: 24px horizontal, 16px vertical
- Border-radius: 8px
- Shadow: 0 4px 12px rgba(232, 153, 95, 0.3)
- Hover: Darken 10% + translateY(-2px) + shadow increase
- Active: Darken 15% + translateY(0)
- Transition: all 0.3s ease

/* SECONDARY BUTTON (Outlined) */
Style:
- Background: Transparent
- Border: 2px solid current-color
- Text: african-earth or spiritual-blue
- Same dimensions as primary
- Hover: Fill with color, text becomes white
- Transition: all 0.3s ease

/* GHOST BUTTON (Subtle actions) */
Style:
- Background: Transparent
- No border
- Text: text-light with underline on hover
- Padding: 12px 16px
- Hover: Text becomes hope-orange
```

**Card Styles:**

```tsx
/* STANDARD CARD (Programs, Features) */
Style:
- Background: White
- Border-radius: 16px
- Padding: 32px
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
- Border: 1px solid rgba(0, 0, 0, 0.05) (subtle)
- Hover: 
  * translateY(-8px)
  * Shadow: 0 12px 24px rgba(0, 0, 0, 0.12)
- Transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)

/* ICON CIRCLE (For program/feature icons) */
Style:
- Size: 80px diameter
- Background: Icon color at 10% opacity
- Icon: 40px size, solid color
- Border-radius: 50% (perfect circle)
- Margin-bottom: 24px
- Center-aligned

/* TESTIMONIAL CARD */
Style:
- Background: cream (#FAF8F3)
- Border-radius: 16px
- Padding: 40px
- Border-left: 4px solid sunset-gold
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Quote marks: Large (48px), sunset-gold, positioned absolutely
```

**Impact Metric Counters:**

```tsx
Style:
- Background: spiritual-blue or dark gradient
- Number: Poppins Bold, 64px, sunset-gold color
- Label: Inter Medium, 18px, white
- Icon: 48px, sunset-gold at 60% opacity
- Layout: Icon top, number middle, label bottom
- Animation: Count-up when scrolled into view
- Duration: 2 seconds with ease-out easing
```

---

### PHASE 1.4: LAYOUT & SPACING SYSTEM (8px Grid)

**Spacing Scale (Base unit: 8px):**

```css
/* Tailwind Custom Spacing */
xs:     4px    (0.25rem)   /* Tiny gaps between elements */
sm:     8px    (0.5rem)    /* Small spacing */
md:     16px   (1rem)      /* Default spacing */
lg:     24px   (1.5rem)    /* Section padding */
xl:     32px   (2rem)      /* Large sections */
2xl:    48px   (3rem)      /* Page sections */
3xl:    64px   (4rem)      /* Hero sections */
4xl:    96px   (6rem)      /* Extra large spacing */
```

**Component Spacing:**

```css
/* Buttons */
padding-x: 24px (lg)
padding-y: 16px (md)
gap between buttons: 16px (md)

/* Cards */
padding: 32px (xl)
gap between cards: 32px (xl)
margin-bottom: 48px (2xl) for sections

/* Sections */
padding-top: 96px (4xl) desktop
padding-top: 64px (3xl) mobile
padding-bottom: 96px (4xl) desktop
padding-bottom: 64px (3xl) mobile

/* Container */
max-width: 1280px
padding-x: 32px (xl) desktop
padding-x: 24px (lg) tablet
padding-x: 16px (md) mobile
```

**Visual Hierarchy Spacing:**

```css
/* Between sections */
margin-bottom: 96px (4xl)

/* Between subsections */
margin-bottom: 48px (2xl)

/* Between elements */
margin-bottom: 24px (lg)

/* Between paragraphs */
margin-bottom: 16px (md)

/* Between inline elements */
gap: 8px (sm)
```

---

### PHASE 1.5: VISUAL DESIGN PRINCIPLES

**DO's (Following Tanim Khan Style):**

✅ **Generous Whitespace**: Don't cram content, let it breathe  
✅ **Soft Shadows**: Use subtle shadows (never harsh)  
✅ **Rounded Corners**: 8-16px for modern feel  
✅ **Warm Colors**: Earthy browns, oranges, greens  
✅ **Clear Hierarchy**: Large headings, clear structure  
✅ **Card-Based Layouts**: Group related content in cards  
✅ **Professional Photos**: Real African children (authentic)  
✅ **Emotional Imagery**: But not exploitative  
✅ **Large Touch Targets**: Minimum 44x44px (mobile)  
✅ **Consistent Icons**: Use lucide-react throughout  

**DON'Ts:**

❌ **No Harsh Shadows**: Avoid hard, dark shadows  
❌ **No Bright Neons**: Stay with earthy, natural colors  
❌ **No Stock Photos**: Avoid generic charity stock images  
❌ **No Clutter**: Keep layouts clean and focused  
❌ **No Poverty Porn**: Don't exploit children's suffering  
❌ **No Childish Elements**: Professional, not cartoonish  
❌ **No Busy Patterns**: Keep backgrounds simple  
❌ **No Sharp Corners**: Use border-radius consistently  

---

### PHASE 1.6: RESPONSIVE BREAKPOINTS

**Tailwind Breakpoints (Mobile-First):**

```css
/* Base (Mobile) */
320px - 639px: Single column, stacked layout, 16px padding

/* SM (Small tablets) */
640px+: 2 columns possible, 24px padding

/* MD (Tablets) */
768px+: 2-3 columns, 32px padding, side navigation

/* LG (Small desktops) */
1024px+: 3-4 columns, full navigation, 32px padding

/* XL (Desktop) */
1280px+: 4+ columns, max-width container, 32px padding

/* 2XL (Large desktop) */
1536px+: Same as XL but more breathing room
```

**Component Responsiveness:**

```
Header:
- Mobile: Hamburger menu, logo left, donate button
- Desktop: Full horizontal nav, logo left, menu center, utilities right

Hero:
- Mobile: Stack content, smaller text (40px H1)
- Desktop: Centered content, large text (64px H1)

Programs Grid:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns (2 in second row, centered)

Impact Metrics:
- Mobile: 1 column (stack)
- Tablet: 2x2 grid
- Desktop: 1x4 row

Footer:
- Mobile: Stack all 4 columns
- Tablet: 2x2 grid
- Desktop: 1x4 row
```

---

### PHASE 1.7: ANIMATION & INTERACTION GUIDELINES

**Hover States:**

```css
/* Buttons */
hover: background-color darken 10%
hover: transform translateY(-2px)
hover: box-shadow increase
transition: all 0.3s ease

/* Cards */
hover: transform translateY(-8px)
hover: box-shadow increase significantly
transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)

/* Links */
hover: color change to hope-orange
hover: underline appears
transition: all 0.2s ease

/* Images */
hover: scale(1.05) (slight zoom)
transition: transform 0.5s ease
```

**Page Load Animations:**

```css
/* Hero section */
Fade in from opacity 0 to 1
Duration: 0.8s
Delay: 0.2s

/* Section entrance */
Fade up (translateY(20px) to translateY(0))
Opacity: 0 to 1
Duration: 0.6s
Trigger: When scrolled into view (Intersection Observer)

/* Impact counters */
Count up from 0 to final number
Duration: 2s
Easing: ease-out
Trigger: When scrolled into view
```

**Scroll Behavior:**

```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Parallax (subtle, performance-friendly) */
Hero background: scrolls at 0.5x speed
Apply only on desktop (disable on mobile for performance)
```

---

### PHASE 1.8: ICON SYSTEM (Lucide React)

**Icon Usage:**

```tsx
/* Icon Sizes */
xs: 16px  // Inline with text
sm: 20px  // Small UI elements
md: 24px  // Default, navigation
lg: 32px  // Feature highlights
xl: 40px  // Inside icon circles
2xl: 48px // Impact metrics, large features

/* Program Icons */
Spiritual Foundation: BookOpen or Cross
Monthly Sustenance: Utensils or Apple
Educational Empowerment: GraduationCap
Creative Skill Hubs: Palette or Music
Welfare & Dignity: Heart or Shield

/* UI Icons */
Menu: Menu
Close: X
Arrow Right: ArrowRight or ChevronRight
External Link: ExternalLink
Download: Download
Search: Search
User: User or Users
Location: MapPin
Email: Mail
Phone: Phone
```

**Icon Implementation:**

```tsx
import { BookOpen, Utensils, GraduationCap, Palette, Heart } from 'lucide-react'

<div className="icon-circle bg-spiritual-blue/10">
  <BookOpen className="w-10 h-10 text-spiritual-blue" />
</div>
```

---


### PHASE 1.9: ACCESSIBILITY & PERFORMANCE STANDARDS

**WCAG 2.2 AA Requirements:**

```css
/* Color Contrast Ratios */
Normal text (16px): 4.5:1 minimum
Large text (24px+): 3.0:1 minimum
UI components: 3.0:1 minimum

/* Our palette compliance */
african-earth on white: 7.2:1 ✓
hope-orange on white: 3.8:1 ✓
text-dark on white: 14.5:1 ✓
white on spiritual-blue: 6.1:1 ✓
```

**Keyboard Navigation:**
- All interactive elements reachable via Tab
- Focus indicators: 2px solid hope-orange outline
- Skip to main content link
- Logical tab order
- Escape closes modals/dropdowns

**Performance Targets:**
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## PHASE 2: EXACT BLUEPRINT IMPLEMENTATION

Now that we have the design foundation from Tanim Khan's "Charity Web Landing Page" style, let's implement the exact Yakira Kids Network blueprint specifications.

### WHAT WE'RE BUILDING (3 Weeks)

**FULLY FUNCTIONAL PAGES:**
✅ Homepage (exact 6-section layout from blueprint)  
✅ About Us page  
✅ Programs index + 5 detail pages (Spiritual, Nutritional, Educational, Creative, Welfare)  
✅ **🆕 Our Journey / News & Stories (Story Dashboard)** - NEW ADDITION!  
✅ Contact page (working form)  
✅ Donate page (GoFundMe integration)  
✅ Legal pages (Privacy, Terms, **Child Safeguarding**)  
✅ Navigation (exact structure from blueprint)  
✅ Footer (exact 4-column layout)  

**COMING SOON PREVIEWS (With Tooltips):**
🔮 Bible Studies Dashboard (Phase 3 - April 2026)  
🔮 Donation Dashboard (Phase 2.5 - March 2026)  
🔮 Financial Ledger (Phase 2.5 - March 2026)  
🔮 Admin Dashboard (Phase 3 - April 2026)  
🔮 Social Networking Hub (Phase 3 - April 2026)  

**TOTAL DELIVERABLE:** 15 functional pages + 3 coming soon previews = **18 pages**  

---


✅ Homepage (exact layout from blueprint)  
✅ About Us page  
✅ Programs pages (5 pillars)  
✅ Contact page  
✅ Legal pages (Privacy, Terms, Safeguarding)  
✅ GoFundMe donation integration  
✅ Navigation (exact structure from blueprint)  

**COMING SOON (With Tooltips):**
🔮 Bible Studies Dashboard (Phase 3)  
🔮 Donation Dashboard (Phase 2)  
🔮 Financial Ledger (Phase 2)  
🔮 Admin Dashboard (Phase 3)  
🔮 Social Networking Hub (Phase 3)  

---

## PHASE 2: BUILD SESSIONS (Step-by-Step Implementation)

### PHASE 2.1: PROJECT SETUP & DESIGN SYSTEM

**SESSION 2.1.1 - Project Initialization:**
**SESSION 2.1.1 - Project Initialization:**
```
I'm building Phase 1 of Yakira Kids Network - a comprehensive nonprofit 
website for orphaned children in Africa.

DESIGN REFERENCE:
We're using "Charity Web Landing Page" by Tanim Khan (Dribbble) as our 
primary design inspiration. This design features:
- Clean, modern aesthetic with warm earthy colors
- Card-based layouts with soft shadows
- Strong hero sections with emotional imagery
- Trust-building elements and clear CTAs
- Mobile-first responsive design

Project details:
- Founder: Yvonne Muyselaar (Netherlands 🇳🇱)
- Launch: January 27, 2026
- Mission: "We rise by lifting others"
- Philosophy: Christian faith-based holistic support

Tech stack:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components

Please set up the project with:
1. Next.js 14 with TypeScript and App Router
2. Tailwind config with this EXACT color palette from Phase 1:

  colors: {
    'african-earth': '#8B6F47',
    'hope-orange': '#E8995F',
    'life-green': '#5F9B65',
    'sunset-gold': '#D4A574',
    'spiritual-blue': '#4A6FA5',
    'mentor-purple': '#7B68A6',
    'donor-teal': '#4A9B9B',
    'cream': '#FAF8F3',
  }

3. Install shadcn/ui and add these components: 
   Button, Card, Input, Textarea, Badge, Tooltip, DropdownMenu, Accordion

4. Configure fonts (Google Fonts):
   - Poppins (weights: 400, 500, 600, 700, 800) for headings
   - Inter (weights: 400, 500, 600) for body
   - Playfair Display (weights: 400, 700, italic) for quotes

5. Set up basic project structure following Next.js 14 App Router conventions

6. Configure 8px grid spacing system in Tailwind (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)

7. Set up CSS variables for design tokens

DESIGN STYLE TO IMPLEMENT:
- Modern charity landing page aesthetic (Tanim Khan style)
- Warm, inviting color palette
- Soft shadows (0 4px 12px rgba(0,0,0,0.08))
- Rounded corners (8-16px border-radius)
- Generous whitespace
- Card-based layouts
- Large, clear typography
- Professional but warm

Provide complete setup with all config files, folder structure, and 
global styles configured according to the design system from Phase 1.
```

**Expected Output:**
- ✅ Complete Next.js 14 project with TypeScript
- ✅ tailwind.config.ts with custom colors and spacing
- ✅ Font configuration in layout.tsx
- ✅ components/ui/ folder with shadcn components
- ✅ app/ folder structure (App Router)
- ✅ globals.css with design tokens
- ✅ All dependencies installed

---

**SESSION 2.1.2 - Design System Implementation:**
```
Now implement the complete design system from Phase 1 (Tanim Khan style).

Create these files:

1. lib/design-system.ts - Export all design tokens:
   - Colors (all 11 colors from Phase 1.1)
   - Typography scale (H1-H6, body sizes from Phase 1.2)
   - Spacing scale (8px grid from Phase 1.4)
   - Border radius values (8px, 12px, 16px)
   - Shadow values (soft shadows from Phase 1.3)
   - Animation timings (0.2s, 0.3s, 0.4s, 0.6s, 0.8s, 2s)

2. globals.css - Add custom utility classes:
   - Typography classes (.heading-1, .heading-2, etc.)
   - Card styles (.card-default, .card-hover)
   - Button styles (.btn-primary, .btn-secondary, .btn-ghost)
   - Icon circle (.icon-circle)
   - Section spacing (.section-padding)
   - Container (.container-default)

3. components/ui/design-preview.tsx - Create a preview page showing:
   - All colors with hex codes
   - All typography sizes
   - Button variants
   - Card examples
   - Icon sizes
   - Spacing examples
   
   This helps verify the design system is working correctly.

Reference Phase 1 sections 1.1-1.8 for exact specifications.

Use Tanim Khan's warm, modern charity aesthetic throughout.
```

**Expected Output:**
- ✅ lib/design-system.ts with all tokens
- ✅ Updated globals.css with utilities
- ✅ Design preview component (optional, for verification)
- ✅ Typography rendering correctly
- ✅ Colors accessible throughout app

---

### PHASE 2.2: NAVIGATION COMPONENTS

**SESSION 2.2.1 - Header Navigation (Exact from Blueprint):**
**SESSION 2.2.1 - Header Navigation (Exact from Blueprint):**
```
Create the header navigation EXACTLY as specified in the Yakira blueprint,
using Tanim Khan's design aesthetic.

DESIGN STYLE (from Phase 1):
- Background: White
- Shadow when scrolled: 0 2px 8px rgba(0,0,0,0.08)
- Height: 80px desktop, 64px mobile
- Sticky positioning (stays on scroll)
- Typography: Poppins Medium, 15px for nav items
- Colors: text-dark default, hope-orange on hover/active
- Smooth transitions (0.3s ease)

PRIMARY NAVIGATION (Header - Persistent, EXACT from blueprint):

LEFT SIDE:
- Logo: "Yakira Kids Network" 
  * Clickable to homepage
  * Font: Poppins Bold, 20px
  * Color: african-earth
  * Optional: Add logo image when provided

CENTER (Desktop only):
Menu Items (horizontal):
1. About Us → /about
2. Our Programs (Dropdown) → See dropdown structure below
3. **🆕 Our Journey → /stories** (NEW - Story Dashboard)
4. Bible Studies Dashboard 🔮 → ComingSoonTooltip (April 2026)
5. Donation Dashboard 🔮 → ComingSoonTooltip (March 2026)
6. Financial Ledger 🔮 → ComingSoonTooltip (March 2026)
7. Contact → /contact

OUR PROGRAMS DROPDOWN (EXACTLY these 5):
1. Spiritual Foundation → /programs/spiritual
2. Monthly Sustenance → /programs/nutritional
3. Education & Scholarships → /programs/educational
4. Creative Skill Hubs → /programs/creative
5. Welfare & Dignity → /programs/welfare

Dropdown styling (Tanim Khan aesthetic):
- Background: White
- Shadow: 0 8px 16px rgba(0,0,0,0.12)
- Border-radius: 12px
- Padding: 12px
- Each item: hover background cream, border-radius 8px
- Smooth slide-down animation (0.3s)

RIGHT SIDE (Utility Menu):
1. Login / Register (Dropdown):
   * Child/Mentor Login 🔮 (ComingSoonTooltip)
   * Donor Login 🔮 (ComingSoonTooltip)
   * Admin Login 🔮 (ComingSoonTooltip)
   
2. Search Icon (lucide-react Search, 20px)
   * Coming Soon in Phase 2, but show icon
   * Click shows "Search coming soon" tooltip

3. Social Media Icons (20px each, hope-orange color):
   * Facebook → https://facebook.com/yakira
   * Instagram → https://instagram.com/yakira
   * YouTube → https://youtube.com/yakira
   * Twitter → https://twitter.com/yakira
   * Open in new tab (target="_blank" rel="noopener")

4. Language Selector:
   * English (active, hope-orange)
   * French (grayed out, cursor-not-allowed)
   * Swahili (grayed out, cursor-not-allowed)
   * Tooltip: "More languages coming soon"

5. DONATE NOW Button (Most prominent):
   * Style: Primary button (hope-orange background)
   * Text: White, Poppins Semi-bold, 16px
   * Height: 48px, Padding: 24px horizontal
   * Border-radius: 8px
   * Shadow: 0 4px 12px rgba(232,153,95,0.3)
   * Hover: Darken + lift effect
   * Links to: /donate
   * ALWAYS VISIBLE (even on mobile)

MOBILE LAYOUT (<1024px):
- Hamburger menu icon (right side)
  * lucide-react Menu icon, 24px
  * Color: african-earth
  
- Logo (left side or center)
  * Smaller: 18px

- DONATE button (always visible, smaller)
  * Height: 40px, Padding: 16px

- Mobile Drawer (slides from right):
  * Full height
  * Background: White
  * All menu items stacked vertically
  * Close icon (X) at top right
  * Smooth slide animation (0.4s cubic-bezier)
  * Dark overlay behind drawer
  * Close on outside click or X

COMING SOON TOOLTIP Component:
Create: components/ui/ComingSoonTooltip.tsx

Props:
- title: string (feature name)
- description: string (what it does)
- launchDate: string (e.g., "March 2026")
- onNotifyClick?: () => void (optional)

Styling (Tanim Khan aesthetic):
- Background: Charcoal (#2D2D2D)
- Text: White
- Border-radius: 12px
- Padding: 20px
- Shadow: 0 8px 24px rgba(0,0,0,0.2)
- Max-width: 320px
- Arrow pointer to trigger element
- Appears on hover (desktop) or click (mobile)
- Badge with launch date (sunset-gold background)
- "Notify Me" button (optional, small, outlined)

Component location: components/layout/Header.tsx
Also create: components/ui/ComingSoonTooltip.tsx

Reference Tanim Khan's clean, modern navigation with soft shadows 
and smooth interactions.

Make it professional, warm, and perfectly aligned with the design system.
```

**Expected Output:**
- ✅ Responsive header component (Tanim Khan style)
- ✅ Dropdown menu for Programs (all 5 items)
- ✅ Coming Soon tooltips integrated (3 dashboard links)
- ✅ Mobile hamburger menu with slide drawer
- ✅ Sticky scroll behavior with shadow
- ✅ Social media icons functional
- ✅ DONATE button prominent
- ✅ All interactions smooth (0.3s transitions)

---

**SESSION 2.2.2 - Footer Component (Exact from Blueprint):**
```
Create footer EXACTLY as specified in blueprint.

FOOTER STRUCTURE (4 Columns Desktop, Stacked Mobile):

COLUMN 1 - ABOUT US:
- Logo
- "We rise by lifting others"
- Mission snippet: "The Yakira Kids Network is a comprehensive business and 
  care network designed to provide holistic support for orphaned, displaced, 
  and parentless children in Africa."

COLUMN 2 - QUICK LINKS:
- Programs
- **🆕 Our Journey** (Story Dashboard - links to /stories)
- How to Volunteer
- Annual Reports
- Child Safeguarding Policy
- FAQs

COLUMN 3 - CONTACT INFO:
- Email: info@yakirakidsnetwork.org
- Phone: [To be provided]
- Address: [To be provided]

COLUMN 4 - SOCIAL MEDIA:
- Facebook icon + link
- Instagram icon + link
- YouTube icon + link
- Twitter/X icon + link

BOTTOM ROW (Full Width):
- Left: "© 2026 Yakira Kids Network. All rights reserved."
- Center: "From Netherlands 🇳🇱 | Founded by Yvonne Muyselaar"
- Right: Privacy Policy | Terms of Service | Copyright

STYLING:
- Background: african-earth (#8B6F47) or dark gradient
- Text: White/Cream
- Links: Hover to sunset-gold
- Spacing: Generous padding (py-16)
- Bottom row: Border top, py-6

Component: components/layout/Footer.tsx

Make it warm, professional, trustworthy.
```

---

### SESSION 2: HOMEPAGE - EXACT BLUEPRINT IMPLEMENTATION

**PROMPT 2.1 - Hero Section (Exact from Blueprint):**
```
Create homepage hero section EXACTLY as specified in blueprint.

HERO SECTION (Full-width, above the fold):

BACKGROUND:
- Dynamic video loop (children playing, learning, smiling)
- For now, use a placeholder video or high-quality image from Unsplash:
  "African children in classroom learning" or "African children smiling"
- Dark overlay (40% opacity) for text readability

OVERLAY TEXT (Centered):
- "YAKIRA KIDS NETWORK" 
  * Font: Poppins Bold, 64px desktop, 40px mobile
  * Color: White
  * Letter spacing: -0.5px
  
- Tagline: "Empowering Africa's displaced children through the Gospel, 
           holistic care, and sustainable skill-building."
  * Font: Inter Regular, 20px desktop, 16px mobile
  * Color: Cream (#FAF8F3)
  * Max-width: 600px
  
CALL TO ACTION:
- Primary button: "DONATE NOW"
  * Background: hope-orange (#E8995F)
  * Large: 56px height, 40px padding horizontal
  * Hover: Darken + lift effect
  * Font: Poppins Semi-bold, 18px
  
LAYOUT:
- Min height: 100vh (full viewport)
- Content: Vertically and horizontally centered
- Padding: Safe zones on mobile

ANIMATION:
- Fade in on load (0.8s)
- Parallax scroll effect (subtle, performance-friendly)

For video element, use:
<video autoPlay muted loop playsInline>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>

Component: components/sections/HeroSection.tsx

Reference Dribbble charity landing pages for inspiration on hero composition.
```

---

**PROMPT 2.2 - Founder's Note (Exact from Blueprint):**
```
Create "Founder's Note / Welcome Message" section exactly as specified.

LAYOUT: Two columns on desktop, stacked on mobile

LEFT COLUMN (40% width):
- Image of Yvonne Muyselaar
  * For now, use placeholder: circular frame, 400x400px
  * Soft shadow
  * Caption below: "Yvonne Muyselaar"
  * Subtitle: "Founder & Executive Director"
  * Small flag: "Netherlands 🇳🇱"

RIGHT COLUMN (60% width):
- Small heading: "From the Founder"
  * Font: Poppins Semi-bold, 14px
  * Color: sunset-gold
  * Letter spacing: 2px uppercase
  
- Main heading: "A Divine Calling"
  * Font: Poppins Bold, 36px desktop, 28px mobile
  * Color: african-earth
  
- Personal message paragraph (placeholder for now):
  "On January 27, 2026, we officially launch Yakira Kids Network—a vision 
   birthed from God's heart for Africa's most vulnerable children. Every 
   child deserves to know they are loved, valued, and equipped for greatness."
   
- QUOTE (styled prominently):
  "Children, you rise by lifting others. If you rise and do not lift another 
   person, you are a wicked person. We do this for the precious children, 
   because it is God's Will."
  
  * Font: Playfair Display Italic, 20px
  * Color: spiritual-blue
  * Border-left: 4px solid sunset-gold
  * Padding-left: 24px
  * Background: cream with subtle pattern
  
- CTA Link: "Read Full Story →"
  * Links to /about page
  * Color: hope-orange
  * Hover: Underline

SECTION STYLING:
- Background: Cream (#FAF8F3)
- Padding: py-20 desktop, py-12 mobile
- Container: Max-width 1200px, centered

Component: components/sections/FounderMessage.tsx

Make it warm, personal, faith-centered.
```

---

**PROMPT 2.3 - Our Pillars / Programs Overview (Exact from Blueprint):**
```
Create "Our Pillars / Programs Overview" section with EXACTLY 5 programs 
as specified in blueprint.

SECTION HEADING:
- "Our Five Pillars of Support"
- Centered, Poppins Bold, 48px desktop, 32px mobile

GRID LAYOUT:
- Desktop: 3 columns first row, 2 columns second row (centered)
- Tablet: 2 columns
- Mobile: 1 column

5 PROGRAM CARDS (EXACT from blueprint):

CARD 1 - Spiritual Foundation:
- Icon: Cross or Bible (lucide-react: Book or Cross)
- Color: spiritual-blue
- Title: "Spiritual Foundation"
- Description: "Fostering faith and character development."
- Link: "Learn More →" (to /programs/spiritual)

CARD 2 - Monthly Sustenance Program:
- Icon: Food/Bowl (lucide-react: Utensils or Apple)
- Color: life-green
- Title: "Monthly Sustenance Program"
- Description: "Consistent, nutritious meals for underserved regions."
- Link: "Learn More →" (to /programs/nutritional)

CARD 3 - Educational Empowerment:
- Icon: Graduation Cap/Book (lucide-react: GraduationCap)
- Color: hope-orange
- Title: "Educational Empowerment"
- Description: "Full scholarships for academic success."
- Link: "Learn More →" (to /programs/educational)

CARD 4 - Creative Skill Hubs:
- Icon: Palette/Music Note/Computer (lucide-react: Palette)
- Color: mentor-purple
- Title: "Creative Skill Hubs"
- Description: "Trades, arts, and digital skills for life."
- Link: "Learn More →" (to /programs/creative)

CARD 5 - Welfare & Dignity:
- Icon: Clothing/Hygiene (lucide-react: Heart or Shield)
- Color: donor-teal
- Title: "Welfare & Dignity"
- Description: "Providing essential clothing and personal items."
- Link: "Learn More →" (to /programs/welfare)

CARD STYLING (Dribbble-inspired):
- White background
- Border-radius: 16px
- Box-shadow: Soft (hover: lift and increase shadow)
- Padding: 32px
- Icon: 64px size, colored circle background (10% opacity of icon color)
- Title: Poppins Semi-bold, 24px
- Description: Inter Regular, 16px, text-light
- Hover: Transform translateY(-8px), shadow increases

SECTION STYLING:
- Background: White
- Padding: py-20
- Gap between cards: 32px

Component: components/sections/ProgramsOverview.tsx

Reference Dribbble charity cards for modern, clean styling.
```

---

**PROMPT 2.4 - Impact Section with Dynamic Counters (Exact from Blueprint):**
```
Create "Impact Section (Dynamic Counters & Visuals)" exactly as specified.

SECTION LAYOUT:
- Dark background (spiritual-blue #4A6FA5 or gradient)
- White text
- Full-width
- Centered heading

HEADING:
- "Our Impact" or "Making a Difference"
- Font: Poppins Bold, 48px
- Color: White
- Centered

METRICS (4 Big Numbers in a Row, Stack on Mobile):

COUNTER 1:
- Number: "2,450"
- Label: "Children Reached"
- Icon: Users (lucide-react)

COUNTER 2:
- Number: "147,890"
- Label: "Meals Served"
- Icon: Utensils

COUNTER 3:
- Number: "485"
- Label: "Scholarships Awarded"
- Icon: GraduationCap

COUNTER 4:
- Number: "89"
- Label: "Mentors Engaged"
- Icon: Heart

ANIMATION:
- Count-up animation when section enters viewport
- Use Intersection Observer
- Libraries: react-countup or custom implementation
- Duration: 2 seconds
- Easing: Smooth

STYLING (Per Metric):
- Number: 
  * Font: Poppins Bold, 64px desktop, 40px mobile
  * Color: sunset-gold (#D4A574)
  * Count-up animation
  
- Label:
  * Font: Inter Medium, 18px
  * Color: White
  * Margin-top: 8px
  
- Icon:
  * Size: 48px
  * Color: sunset-gold
  * Opacity: 0.6
  * Margin-bottom: 16px

LAYOUT:
- Grid: 4 columns desktop, 2 columns tablet, 1 column mobile
- Gap: 48px
- Each metric: Centered content

SECTION PADDING:
- py-24 desktop
- py-16 mobile

VISUAL ELEMENT (Optional):
- Infographic showing geographical reach in Africa
- Map silhouette with glowing points
- Can add in future iteration

Component: components/sections/ImpactMetrics.tsx

Install: npm install react-intersection-observer react-countup

Make it impressive, emotional, data-driven.
```

---

**PROMPT 2.5 - Testimonials / Success Stories (Exact from Blueprint):**
```
Create "Testimonials / Success Stories (Carousel)" section exactly as specified.

SECTION HEADING:
- "Stories of Hope"
- Centered, Poppins Bold, 48px

CAROUSEL LAYOUT:
- Horizontal scrolling carousel
- 3 testimonials visible on desktop, 1 on mobile
- Navigation arrows
- Dot indicators
- Auto-play (optional, 5 second intervals)

TESTIMONIAL CARD STRUCTURE:

CARD 1 (Sample):
- Quote: "Yakira changed my life. Through their programs, I learned about 
  Jesus and discovered hope for my future. Now I'm in school and dreaming big!"
- Attribution: "— Sarah, Age 12, Rwanda"
- Image: Circular photo placeholder (150x150px)
- Program badge: "Spiritual Foundation"

CARD 2 (Sample):
- Quote: "Thanks to the Monthly Sustenance Program, I no longer go to bed 
  hungry. I can focus on my studies and help my younger siblings."
- Attribution: "— David, Age 14, Kenya"
- Image: Photo placeholder
- Program badge: "Monthly Sustenance"

CARD 3 (Sample):
- Quote: "The Creative Skill Hubs taught me graphic design. I'm now creating 
  artwork and helping my community tell their stories."
- Attribution: "— Grace, Age 16, Nigeria"
- Image: Photo placeholder
- Program badge: "Creative Skill Hubs"

CARD STYLING:
- Background: White or cream
- Border-radius: 16px
- Box-shadow: Medium
- Padding: 40px
- Quote: 
  * Font: Inter Regular, 18px
  * Color: text-dark
  * Italic
  * Quote marks styled (large, sunset-gold)
- Attribution:
  * Font: Poppins Semi-bold, 14px
  * Color: african-earth
  * Margin-top: 24px
- Image:
  * Circular, centered or left-aligned
  * Soft shadow
- Badge:
  * Small pill, program color
  * Font: Inter Semi-bold, 12px

CAROUSEL CONTROLS:
- Previous/Next arrows: Large, clear
- Dots: Centered below, sunset-gold active
- Touch/swipe enabled on mobile

"MEET [CHILD'S NAME]" FEATURE:
- Link from each card: "Read Full Story →"
- Goes to /stories/[slug] (future page)

SECTION STYLING:
- Background: White or light cream
- Padding: py-20
- Max-width: 1400px

Component: components/sections/Testimonials.tsx

For carousel, use: embla-carousel-react or swiper

Make it emotional, authentic, child-focused.
```

---

**PROMPT 2.6 - Secondary CTA (Exact from Blueprint):**
```
Create "Call to Action (Secondary)" section exactly as specified.

SECTION LAYOUT:
- Full-width banner
- Background: Gradient (african-earth to sunset-gold) or solid hope-orange
- White text
- Centered content

HEADER:
- "Join Our Network of Hope"
- Font: Poppins Bold, 48px desktop, 32px mobile
- Color: White
- Margin-bottom: 32px

BUTTONS (3 options, horizontal layout):

BUTTON 1:
- Text: "Become a Volunteer"
- Style: Outlined (white border, white text)
- Hover: Fill white, text dark
- Links to: /volunteer (future page, show Coming Soon tooltip for now)

BUTTON 2:
- Text: "Explore Our Stories"
- Style: Outlined
- Links to: /stories (blog/testimonials page)

BUTTON 3:
- Text: "Read Our Latest News"
- Style: Outlined
- Links to: /blog

BUTTON STYLING:
- Height: 56px
- Padding: 24px horizontal
- Border-radius: 8px
- Font: Poppins Semi-bold, 16px
- Border: 2px solid white
- Gap between buttons: 16px
- Stack vertically on mobile

SECTION PADDING:
- py-16 desktop
- py-12 mobile

OPTIONAL ENHANCEMENT:
- Subtle background pattern or texture
- Icon next to each button text

Component: components/sections/SecondaryCTA.tsx

Make it inviting, action-oriented, clear options.
```

---

### SESSION 3: ABOUT US PAGE (EXACT BLUEPRINT)

**PROMPT 3.1 - About Us Page Structure:**
```
Create complete About Us page with all required sections.

URL: /app/(public)/about/page.tsx

PAGE SECTIONS (in order):

1. PAGE HERO:
   - Background: Image or solid african-earth color
   - Heading: "About Yakira Kids Network"
   - Subheading: "We rise by lifting others."
   - Clean, simple, professional

2. MISSION & VISION (Two Columns):
   
   LEFT - MISSION:
   - Icon: Target or Compass
   - Heading: "Our Mission"
   - Text: "Our mission is to provide holistic support for orphaned, 
     displaced, and parentless children in Africa through spiritual, 
     academic, and creative excellence."
   
   RIGHT - VISION:
   - Icon: Eye or Star
   - Heading: "Our Vision"
   - Text: "A future where every African child knows they are loved by 
     God and equipped to transform their communities."

3. FOUNDER'S FULL STORY:
   - Expanded version of homepage founder message
   - Photo of Yvonne Muyselaar
   - Her journey and calling
   - Why she started Yakira
   - Netherlands connection
   - Launch date significance (January 27, 2026)
   - Quote integration (same as homepage)

4. LEADERSHIP TEAM (Grid of 4):
   
   PERSON 1 - Yvonne Muyselaar:
   - Role: Executive Director
   - Photo placeholder
   - Bio: "Oversight of all operations; final approval on all board 
     actions and project plans. From Netherlands 🇳🇱"
   
   PERSON 2 - Pastor Johnson:
   - Role: Spiritual Lead
   - Photo placeholder
   - Bio: "Leading spiritual guidance and teachings aligning with 
     God's Word."
   
   PERSON 3 - Promise:
   - Role: Admin & Finance
   - Photo placeholder
   - Bio: "Managing all projects, legal frameworks (rules/regulations), 
     and financial occupations."
   
   PERSON 4 - David:
   - Role: Programs Coordinator
   - Photo placeholder
   - Bio: "Managing mentors, teaching schedules, feeding/clothing 
     programs, and trauma-informed art therapy."

5. OUR VALUES (Cards or List):
   - Faith-Centered
   - Child-Focused
   - Transparent
   - Empowering
   - Dignified
   - Service Integrity
   (Each with icon and short explanation)

6. FAQ SECTION (Accordion):
   Questions:
   - What is Yakira Kids Network?
   - Who do you serve?
   - How are donations used?
   - Can I volunteer?
   - Are you a registered nonprofit?
   - How can I partner with you?
   - What is your safeguarding policy?

7. FINAL CTA:
   - "Ready to make a difference?"
   - DONATE NOW button (primary)
   - VOLUNTEER button (secondary, with Coming Soon tooltip)

STYLING:
- Clean, professional layout
- Good use of whitespace
- Typography hierarchy clear
- Consistent brand colors
- Trust-building tone

Component structure:
- app/(public)/about/page.tsx (main page)
- components/about/* (section components)

Install shadcn Accordion component if not already added.

Make it comprehensive, trustworthy, inspiring.
```

---

### SESSION 4: PROGRAMS PAGES (5 EXACT PILLARS)

**PROMPT 4.1 - Programs Index Page:**
```
Create main Programs page that introduces all 5 pillars.

URL: /app/(public)/programs/page.tsx

PAGE STRUCTURE:

1. PAGE HERO:
   - Background: life-green gradient or African landscape image
   - Heading: "Our Five Pillars of Holistic Support"
   - Subheading: "Comprehensive care for Africa's displaced children"

2. INTRODUCTION:
   - Paragraph explaining the holistic approach
   - "At Yakira Kids Network, we believe in addressing the whole child—
     spiritually, physically, intellectually, and creatively. Our five 
     pillars work together to transform lives and build futures."

3. DETAILED PROGRAM CARDS (5 cards, more detail than homepage):
   
   Each card includes:
   - Large icon (colorful, engaging)
   - Program name
   - Full description (2-3 paragraphs)
   - KEY FEATURES (bullet points):
     * 3-4 specific benefits or components
   - Impact stat (if available)
   - "Learn More →" button to detail page
   - Background image or pattern related to program

   CARD 1 - SPIRITUAL FOUNDATION:
   Icon: Cross/Bible
   Description: "Introduce children to the Gospel and provide spiritual 
   mentorship to foster character and hope."
   Key Features:
   - Weekly Bible study sessions
   - One-on-one mentorship with trained spiritual leaders
   - Character development workshops
   - Prayer and worship gatherings
   Link: /programs/spiritual

   CARD 2 - MONTHLY SUSTENANCE:
   Icon: Utensils/Apple
   Description: "Implement a 'Monthly Sustenance Program' for consistent, 
   nutritious meals in underserved regions."
   Key Features:
   - Nutritious meals provided daily
   - Food security for families
   - Nutrition education
   - Community meal programs
   Link: /programs/nutritional

   CARD 3 - EDUCATIONAL EMPOWERMENT:
   Icon: GraduationCap
   Description: "Provide full scholarships (tuition, books, uniforms) for 
   formal academic learning."
   Key Features:
   - Complete scholarship coverage
   - School supplies and uniforms
   - Tutoring and academic support
   - University pathway program
   Link: /programs/educational

   CARD 4 - CREATIVE SKILL HUBS:
   Icon: Palette
   Description: "Establish 'Creative Skill Hubs' focusing on trades, arts, 
   and digital skills."
   Key Features:
   - Vocational training in trades
   - Arts and music education
   - Digital skills development
   - Entrepreneurship mentorship
   Link: /programs/creative

   CARD 5 - WELFARE & DIGNITY:
   Icon: Heart/Shield
   Description: "Provide quality clothing and personal items to ensure 
   children represent themselves with dignity."
   Key Features:
   - Quality clothing provision
   - Personal hygiene items
   - Dignity and self-worth education
   - Community representation support
   Link: /programs/welfare

4. HOW IT WORKS (Process Timeline):
   Step 1: "Child Enrollment" - Assessment and intake
   Step 2: "Program Matching" - Personalized program assignment
   Step 3: "Ongoing Support" - Regular monitoring and care
   Step 4: "Success & Growth" - Graduation and life skills

5. IMPACT STATS (if different from homepage):
   - Program-specific metrics
   - Success stories count
   - Geographic reach

6. CTA:
   - "Support Our Programs"
   - DONATE NOW button
   - "Learn about specific programs" links

STYLING:
- Visual hierarchy clear
- Engaging but professional
- Use actual photos where available (placeholders for now)
- Mobile-friendly card layout

Component: app/(public)/programs/page.tsx

Make it comprehensive, inspiring, action-oriented.
```

---

**PROMPT 4.2 - Individual Program Detail Pages (Template):**
```
Create a dynamic template for individual program detail pages.

ROUTE: /app/(public)/programs/[slug]/page.tsx

SLUGS (Exactly 5):
1. spiritual (Spiritual Foundation)
2. nutritional (Monthly Sustenance)
3. educational (Educational Empowerment)
4. creative (Creative Skill Hubs)
5. welfare (Welfare & Dignity)

PAGE TEMPLATE STRUCTURE:

1. HERO:
   - Program-specific background color or image
   - Large program icon
   - Program name (H1)
   - Tagline specific to program

2. OVERVIEW SECTION:
   - "What This Program Does"
   - Detailed description (3-4 paragraphs)
   - Who it serves
   - Why it matters
   - Biblical foundation (scripture reference)

3. HOW IT WORKS:
   - Program-specific process
   - Could be step-by-step or narrative
   - Visual flowchart or timeline
   - Real examples

4. IMPACT STORY:
   - "Meet [Child's Name]" section
   - Photo placeholder
   - Success story (2-3 paragraphs)
   - Before/after transformation
   - Quote from child

5. KEY FEATURES & BENEFITS:
   - Detailed list with icons
   - What children receive
   - Long-term outcomes
   - Community impact

6. WAYS TO HELP:
   - "How You Can Support This Program"
   - Donate specifically to this program
   - Volunteer opportunities (Coming Soon tooltip)
   - Sponsor a child (Coming Soon tooltip)
   - Partner with us

7. FAQ (Program-Specific):
   - 5-7 questions relevant to this program
   - Accordion format

8. RELATED PROGRAMS:
   - "You Might Also Be Interested In"
   - Cards linking to 2-3 other programs

9. CTA:
   - "Support [Program Name]"
   - Large DONATE button (program color)
   - Links to general donate page with program pre-selected

PROGRAM-SPECIFIC CONTENT (Placeholders for now):

Create content structure for each of the 5 programs. Use the 
blueprint descriptions as base, then expand with:
- Specific activities
- Expected outcomes
- Real-world examples
- Supporting scripture
- Statistics if available

DYNAMIC ROUTING:
- Use Next.js dynamic routes
- Data stored in: lib/programs-data.ts (TypeScript array/object)
- Easy to update content later

STYLING:
- Each program has accent color (from design system)
- Hero uses program color
- CTAs use program color
- Clean, readable typography
- Good use of images/photos
- Mobile-optimized

Components:
- app/(public)/programs/[slug]/page.tsx
- lib/programs-data.ts
- components/programs/ProgramDetail.tsx

Make it detailed, inspiring, specific to each program.
```

---

### SESSION 4B: STORY DASHBOARD / OUR JOURNEY PAGE (NEW!)

**🆕 ADDITION: Story Dashboard showing Yakira's journey through YouTube episodes**

**PROMPT 4B.1 - Story Dashboard Page:**
```
Create the "Our Journey" / "News & Stories" page - a Story Dashboard that 
tracks Yakira's evolution through YouTube episodes.

URL: /app/(public)/stories/page.tsx or /app/(public)/journey/page.tsx

FEATURE OVERVIEW:
This page visualizes the Yakira Kids Network journey through YouTube 
episodes, showing donors the transparent progress and impact over time.

DESIGN APPROACH FOR PHASE 1 (SIMPLIFIED):
- Static JSON file for episode data (NOT YouTube API yet)
- Manual curation of episodes (you control what shows)
- Filter by themes/tags
- Timeline layout with episode cards
- Migration to YouTube API in Phase 2

DATA STRUCTURE (JSON):

Create: data/episodes.json

```json
{
  "episodes": [
    {
      "id": "ep-001",
      "youtubeId": "VIDEO_ID_HERE",
      "title": "Episode 1: The Beginning - Why Yakira Exists",
      "description": "Yvonne shares the divine calling that led to Yakira Kids Network and introduces the mission to support Africa's displaced children.",
      "publishDate": "2026-01-27",
      "thumbnailUrl": "https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg",
      "duration": "12:34",
      "tags": ["Faith", "Leadership", "Community"],
      "impactMetrics": {
        "childrenReached": 0,
        "lessonsShared": 1,
        "milestone": "Official Launch - Yakira Goes Live"
      },
      "featured": true
    },
    {
      "id": "ep-002",
      "youtubeId": "VIDEO_ID_HERE",
      "title": "Episode 2: Meet Pastor Johnson - Spiritual Foundation",
      "description": "Pastor Johnson explains the spiritual pillar and how faith shapes everything we do at Yakira.",
      "publishDate": "2026-02-03",
      "thumbnailUrl": "https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg",
      "duration": "15:22",
      "tags": ["Faith", "Spiritual Foundation", "Leadership"],
      "impactMetrics": {
        "childrenReached": 25,
        "lessonsShared": 3,
        "milestone": "First Bible Study Session"
      },
      "featured": false
    },
    {
      "id": "ep-003",
      "youtubeId": "VIDEO_ID_HERE",
      "title": "Episode 3: First Meal Program - Feeding Hope",
      "description": "Watch as we serve the first meals through the Monthly Sustenance Program in Rwanda.",
      "publishDate": "2026-02-10",
      "thumbnailUrl": "https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg",
      "duration": "10:45",
      "tags": ["Monthly Sustenance", "Community", "Impact"],
      "impactMetrics": {
        "childrenReached": 50,
        "lessonsShared": 5,
        "milestone": "500 Meals Served"
      },
      "featured": false
    }
    // Add 10-15 episodes for launch
  ]
}
```

PAGE STRUCTURE:

1. HERO SECTION:
   - Background: Gradient (spiritual-blue to hope-orange) or video
   - Heading: "Our Journey: Stories of Hope"
   - Subheading: "Follow Yakira's mission through our YouTube episodes. 
     Watch our story unfold, one child at a time."
   - CTA Button: "Watch Latest Episode" (links to most recent)

2. STATISTICS SUMMARY (Above Filters):
   - Small cards showing:
     * Total Episodes: 12
     * Total Views: 5,234 (manual for now)
     * Children Featured: 47
     * Countries Reached: 4
   - Simple, clean display
   - Color: sunset-gold for numbers

3. THEME FILTERS:
   - Horizontal row of filter buttons
   - Tags: [All] [Faith] [Leadership] [Creativity] [STEM] 
           [Education] [Community] [Monthly Sustenance] 
           [Spiritual Foundation] [Impact Stories]
   - Active state: hope-orange background, white text
   - Inactive: cream background, text-dark text, border
   - Pill-shaped (border-radius: 20px)
   - Click to toggle, multiple selection allowed
   - "Clear Filters" button (small, text link)
   
   Styling (Tanim Khan):
   - Height: 40px
   - Padding: 12px 20px
   - Font: Poppins Medium, 14px
   - Gap: 12px
   - Hover: Border changes to hope-orange, slight scale (1.05)
   - Smooth transitions (0.3s)

4. RESULTS COUNT:
   - "Showing: 12 episodes"
   - Updates dynamically when filters applied
   - Font: Inter Regular, 16px
   - Color: text-light

5. TIMELINE LAYOUT:
   
   DESKTOP:
   - Vertical timeline line (2px solid, border-light color)
   - Centered on page
   - Month/Year markers as circles on the line
   - Episode cards branch off alternating left/right
   
   TABLET:
   - Timeline still visible
   - Cards stack more vertically
   
   MOBILE:
   - Timeline line on left side
   - All cards stack right of line
   - Simplified layout

   MONTH MARKERS:
   - Circle: 20px diameter
   - Background: hope-orange
   - Border: 4px solid white
   - Shadow: 0 2px 8px rgba(232,153,95,0.3)
   - Label: "JANUARY 2026" (Poppins Semi-bold, 14px, text-dark)
   - Positioned on timeline line

6. EPISODE CARDS (Tanim Khan Aesthetic):
   
   Structure for each card:
   
   ┌───────────────────────────────────┐
   │ [YouTube Thumbnail - 16:9]        │
   │                                   │
   │      ▶️ Play Button Overlay      │
   └───────────────────────────────────┘
   
   Episode 1: The Beginning
   January 27, 2026 • 12:34
   
   Yvonne shares the divine calling that 
   led to Yakira Kids Network...
   
   🏷️ Faith  Leadership  Community
   
   📊 IMPACT:
   👥 25 Children Reached
   📚 3 Lessons Shared
   🎯 Official Launch
   
   [Watch on YouTube →]
   
   Card Styling:
   - Background: White
   - Border-radius: 16px
   - Shadow: 0 4px 12px rgba(0,0,0,0.08)
   - Padding: 0 (thumbnail full-width), 24px (content area)
   - Hover: translateY(-8px), shadow increase
   - Transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)
   
   Thumbnail:
   - Aspect ratio: 16:9
   - Border-radius: 16px 16px 0 0 (top corners only)
   - Clickable (opens YouTube in new tab)
   - Hover: Slight scale (1.05)
   - Play button overlay (centered, 48px, hope-orange)
   
   Title:
   - Font: Poppins Semi-bold, 20px
   - Color: african-earth
   - Margin-bottom: 8px
   - Hover: Color changes to hope-orange
   
   Date & Duration:
   - Font: Inter Regular, 14px
   - Color: text-light
   - Format: "January 27, 2026 • 12:34"
   - Margin-bottom: 16px
   
   Description:
   - Font: Inter Regular, 16px
   - Color: text-dark
   - Line-height: 1.6
   - Max 2-3 lines, truncate with "..."
   - Margin-bottom: 16px
   
   Tags (Pills):
   - Display inline, wrap to new line
   - Each tag: 
     * Background: cream
     * Border: 1px solid border-light
     * Border-radius: 12px
     * Padding: 4px 12px
     * Font: Inter Medium, 12px
     * Color: text-dark
     * Margin: 4px
   - Hover: Border becomes hope-orange
   - Margin-bottom: 16px
   
   Impact Metrics Section:
   - Heading: "📊 IMPACT:" (Inter Semi-bold, 14px, text-dark)
   - Each metric on new line:
     * Icon (16px) + Text (Inter Regular, 14px)
     * Icon colors: 
       - Users icon (life-green)
       - Book icon (spiritual-blue)
       - Target icon (sunset-gold)
     * Vertical stack, gap: 8px
   - Background: cream with 10% opacity
   - Border-radius: 8px
   - Padding: 12px
   - Margin-bottom: 16px
   
   Button:
   - "Watch on YouTube →"
   - Style: Secondary button (outlined)
   - Border: 2px solid hope-orange
   - Color: hope-orange
   - Hover: Fill hope-orange, text white
   - Opens in new tab: target="_blank" rel="noopener noreferrer"

7. EMPTY STATE (If No Episodes Match Filter):
   
   Display when filters return no results:
   - Icon: Search X (lucide-react)
   - Heading: "No episodes found"
   - Text: "Try adjusting your filters or browse all episodes"
   - Button: "Clear All Filters"
   - Centered, clean design

8. LOAD MORE (If Many Episodes):
   
   - Initially show 9 episodes
   - "Load More Episodes" button at bottom
   - Loads next 9 on click
   - Button style: Secondary (outlined)
   - Eventually shows "All episodes loaded"

9. CALL TO ACTION SECTION (Bottom):
   
   - Background: Gradient (african-earth to sunset-gold)
   - White text
   - Heading: "Be Part of the Story"
   - Subheading: "Your support makes every episode possible"
   - Two buttons:
     * [Donate Now] (Primary, white bg, african-earth text)
     * [Subscribe on YouTube] (Secondary, outlined white)
   - Padding: py-20

FUNCTIONALITY:

1. Filter Logic:
   ```typescript
   const [activeFilters, setActiveFilters] = useState<string[]>([]);
   const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
   
   useEffect(() => {
     if (activeFilters.length === 0) {
       setFilteredEpisodes(episodes);
     } else {
       const filtered = episodes.filter(ep => 
         activeFilters.some(filter => ep.tags.includes(filter))
       );
       setFilteredEpisodes(filtered);
     }
   }, [activeFilters]);
   ```

2. YouTube Thumbnail URL:
   - Format: `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`
   - Auto-generated by YouTube
   - High quality (1280x720)
   - Fallback: `hqdefault.jpg` if maxres not available

3. YouTube Link:
   - Format: `https://www.youtube.com/watch?v={VIDEO_ID}`
   - Opens in new tab
   - rel="noopener noreferrer" for security

4. Scroll Animations:
   - Episode cards fade in as they enter viewport
   - Use Intersection Observer
   - Stagger animation (each card 100ms delay)
   - Smooth, subtle (0.6s duration)

RESPONSIVE DESIGN:

Desktop (1024px+):
- Timeline centered
- Cards alternate left/right
- 2 cards per row when side-by-side
- Filters in horizontal row

Tablet (768px-1023px):
- Timeline visible but simplified
- Cards mostly stack vertically
- Filters wrap to 2 rows
- Maintain card size

Mobile (<768px):
- Timeline on left edge
- All cards stack right
- Filters stack vertically or wrap
- Smaller card padding (16px)
- Smaller text sizes

COMPONENTS TO CREATE:

1. app/(public)/stories/page.tsx - Main page
2. components/stories/EpisodeCard.tsx - Individual episode card
3. components/stories/FilterButtons.tsx - Filter UI
4. components/stories/Timeline.tsx - Timeline visual
5. data/episodes.json - Episode data

LIBRARIES NEEDED:
- lucide-react (icons - already installed)
- date-fns (date formatting)
  ```bash
  npm install date-fns
  ```

MIGRATION NOTE (For Phase 2):
"This implementation uses a static JSON file for simplicity and 
reliability in Phase 1. In Phase 2 (March 2026), we'll integrate 
the YouTube Data API to auto-sync new episodes, pull view counts, 
and add more dynamic features. For now, you'll manually update 
episodes.json when new videos are published."

SEO OPTIMIZATION:
- Page title: "Our Journey - Yakira Kids Network Stories"
- Meta description: "Watch Yakira's mission unfold through our 
  YouTube episodes. See the real impact of your support, one child 
  at a time."
- Open Graph image: Featured episode thumbnail
- Schema markup: VideoObject for each episode

ACCESSIBILITY:
- All images have alt text
- Keyboard navigation for filters
- ARIA labels on interactive elements
- Focus indicators visible
- Screen reader friendly

Make it engaging, emotional, and transparent. Show donors the 
real journey. Use Tanim Khan's warm, modern aesthetic throughout.
```

**Expected Output:**
- ✅ Story Dashboard page (/stories or /journey)
- ✅ Episode cards with YouTube thumbnails
- ✅ Filter functionality (by theme/tag)
- ✅ Timeline visual layout
- ✅ Impact metrics per episode
- ✅ Mobile responsive
- ✅ Tanim Khan design aesthetic
- ✅ JSON data structure ready
- ✅ Smooth animations

**Time Estimate:** 10-12 hours

**Value:** High (differentiates Yakira, builds trust, engages donors)

---

### SESSION 5: CONTACT PAGE

**PROMPT 5.1 - Complete Contact Page:**
```
Create comprehensive contact page with working form.

URL: /app/(public)/contact/page.tsx

PAGE STRUCTURE:

1. PAGE HERO:
   - Heading: "Get in Touch"
   - Subheading: "We'd love to hear from you"
   - Background: Subtle pattern or image

2. MAIN LAYOUT (Two Columns or Full Width + Sidebar):

   LEFT/MAIN - CONTACT FORM:
   
   Fields:
   - Name (required)
     * Validation: Min 2 characters
   - Email (required)
     * Validation: Valid email format
   - Subject (required)
     * Dropdown or text input
   - Message (required)
     * Textarea, min 10 characters
   - I'm interested in (optional checkboxes):
     □ Donating
     □ Volunteering
     □ Partnering
     □ General Inquiry
     □ Media/Press
   
   Submit button: "Send Message"
   - Primary style (hope-orange)
   - Loading state while submitting
   - Success message after submission
   - Error handling (show validation errors)

   RIGHT/SIDEBAR - CONTACT INFO:
   
   EMAIL ADDRESSES:
   - General: info@yakirakidsnetwork.org
   - Founder: yvonne@yakirakidsnetwork.org
   - Donations: giving@yakirakidsnetwork.org
   - Media: press@yakirakidsnetwork.org
   
   PHONE (if applicable):
   - [To be provided]
   
   OFFICE ADDRESSES:
   - Netherlands (Founder's location)
     * [Address to be provided]
   - Africa Offices (if any)
     * [To be provided]
   
   OFFICE HOURS:
   - "We respond within 24-48 hours"
   - "Email responses: Monday-Friday, 9AM-5PM WAT"

3. SOCIAL MEDIA SECTION:
   - "Connect With Us"
   - Large social media icons
   - Facebook, Instagram, YouTube, Twitter
   - Links open in new tab

4. MAP (Optional for Phase 1):
   - If office locations exist
   - Google Maps embed
   - Or visual representation of Africa with location pins
   - Can be added in Phase 2

5. ADDITIONAL RESOURCES:
   - "Looking for something else?"
   - Quick links:
     * FAQ page
     * Volunteer information (Coming Soon tooltip)
     * Donation page
     * About Us

6. TRUST SIGNALS:
   - "Your information is secure and will never be shared"
   - Privacy policy link
   - Response time guarantee

FORM SUBMISSION (Choose one):

Option A: Formspree (Easiest for Phase 1):
- Sign up at formspree.io (free tier)
- Get form endpoint
- No backend code needed
- Emails sent to specified address

Option B: EmailJS:
- Sign up at emailjs.com
- No backend needed
- Works from client-side

Option C: Custom API Route:
- Create /api/contact route
- Use Nodemailer
- Send via SMTP (requires email credentials)

Recommendation for Phase 1: Use Formspree for simplicity.

FORM VALIDATION:
- Client-side validation (instant feedback)
- Show error messages below fields
- Disable submit until form valid
- Loading spinner during submission
- Success message: "Thank you! We'll respond within 24-48 hours."
- Clear form after successful submission

STYLING:
- Clean, professional form
- Good spacing between fields
- Clear labels
- Error messages in red
- Success message in green
- Mobile-friendly (stack columns)

Component: app/(public)/contact/page.tsx

Make it easy to use, trustworthy, functional.
```

---

### SESSION 6: LEGAL PAGES (REQUIRED)

**PROMPT 6.1 - Privacy Policy:**
```
Create comprehensive Privacy Policy page.

URL: /app/(public)/privacy/page.tsx

STRUCTURE:

HEADER:
- Title: "Privacy Policy"
- Last updated: [Current date]
- Effective date: January 27, 2026

CONTENT (10 Sections):

1. INTRODUCTION:
   "Yakira Kids Network ('we', 'us', 'our') is committed to protecting 
   your privacy. This policy explains how we collect, use, and protect 
   your personal information."

2. INFORMATION WE COLLECT:
   - Name and contact information
   - Donation history
   - Payment information (via third-party processor)
   - Usage data (analytics)
   - Children's information (with guardian consent)

3. HOW WE USE INFORMATION:
   - Process donations
   - Send receipts and updates
   - Improve our services
   - Comply with legal obligations

4. HOW WE PROTECT INFORMATION:
   - SSL encryption
   - Secure servers
   - Limited access
   - Regular security audits

5. COOKIES AND TRACKING:
   - What cookies we use
   - Analytics (Google Analytics)
   - How to opt out

6. THIRD-PARTY SERVICES:
   - GoFundMe payment processing
   - Email service providers
   - Analytics providers
   - Links to their privacy policies

7. CHILDREN'S PRIVACY (CRITICAL):
   "We work with children and take their privacy extremely seriously:
   - Parental/guardian consent required
   - Minimal data collection
   - Photos only with written consent
   - No data sold or shared for marketing
   - Safeguarding protocols in place"

8. YOUR RIGHTS:
   - Access your data
   - Request correction
   - Request deletion
   - Opt out of communications
   - How to exercise these rights

9. INTERNATIONAL DATA TRANSFERS:
   - We operate internationally
   - Data may be processed in different countries
   - Adequate protections in place

10. CONTACT US:
    "Questions about this policy? Contact:
    privacy@yakirakidsnetwork.org"

LAYOUT:
- Clean, readable
- Table of contents (sticky sidebar on desktop)
- Clear section headings
- Professional but accessible language
- Not intimidating
- Mobile-friendly

STYLING:
- Max-width: 800px for readability
- Generous line-height: 1.8
- Section spacing
- Links to relevant pages (Terms, Safeguarding)

Component: app/(public)/privacy/page.tsx

Use a privacy policy generator as base (termly.io), then customize 
for Yakira's specific needs (especially children's privacy).

Make it compliant, clear, child-protection focused.
```

---

**PROMPT 6.2 - Terms of Service:**
```
Create Terms of Service page.

URL: /app/(public)/terms/page.tsx

Similar structure to Privacy Policy.

KEY SECTIONS:

1. ACCEPTANCE OF TERMS
2. USE OF WEBSITE:
   - Permitted uses
   - Prohibited activities
   - User responsibilities

3. DONATIONS:
   - Donation terms
   - Refund policy (donations generally final except fraud)
   - Tax deductibility statement
   - Currency and processing fees

4. INTELLECTUAL PROPERTY:
   - Content ownership
   - Yakira Kids Network trademarks
   - User-generated content (if any)

5. USER CONTENT:
   - Photos and stories
   - Consent requirements
   - How we may use content

6. PROHIBITED ACTIVITIES:
   - No illegal use
   - No harassment
   - No unauthorized access
   - No scraping/bots

7. DISCLAIMER OF WARRANTIES:
   - Service provided "as is"
   - No guarantee of uninterrupted service
   - Standard legal disclaimers

8. LIMITATION OF LIABILITY:
   - Limits on our liability
   - Standard legal protections

9. GOVERNING LAW:
   - Which jurisdiction applies
   - Dispute resolution process

10. CONTACT:
    legal@yakirakidsnetwork.org

DONATION-SPECIFIC CLAUSES:
- "Donations are generally final and non-refundable"
- "Tax receipts provided for eligible donations"
- "We reserve the right to refuse donations"
- "Donations may be used for general operations or specified programs"

CONTENT USAGE:
- "By submitting photos or stories, you grant us permission to use 
  them for promotional purposes"
- "We will never sell or use child images inappropriately"
- "All content subject to Child Safeguarding Policy"

Keep it simple for Phase 1. Can enhance with legal review later.

Component: app/(public)/terms/page.tsx

Make it clear, fair, legally sound.
```

---

**PROMPT 6.3 - Child Safeguarding Policy (CRITICAL):**
```
Create comprehensive Child Safeguarding Policy page.

URL: /app/(public)/safeguarding/page.tsx

This is CRITICAL for a children's organization. Must be thorough.

STRUCTURE:

HEADER:
- Title: "Child Safeguarding Policy"
- Effective date: January 27, 2026
- Last reviewed: [Date]
- Next review: [Annual]

OPENING STATEMENT:
"Yakira Kids Network is committed to the protection and well-being of 
all children in our care. This policy outlines our commitment to child 
safety and the procedures we have in place."

SECTIONS:

1. OUR COMMITMENT TO CHILD SAFETY:
   - Zero tolerance for child abuse
   - Safe environment for all children
   - Aligned with international child protection standards

2. WHO THIS POLICY APPLIES TO:
   - All staff members
   - Volunteers and mentors
   - Donors who interact with children
   - Partners and contractors
   - Board members

3. WHAT IS CHILD ABUSE (Definitions):
   - Physical abuse
   - Emotional abuse
   - Sexual abuse
   - Neglect
   - Online/cyber abuse

4. CODE OF CONDUCT (Detailed):
   
   APPROPRIATE BEHAVIORS:
   - Treating children with respect
   - Maintaining professional boundaries
   - Two-adult rule (never alone with child)
   - Appropriate physical contact (side hugs, high-fives)
   
   PROHIBITED BEHAVIORS:
   - Being alone with a child
   - Inappropriate physical contact
   - Sharing personal contact information
   - Taking unauthorized photos
   - Giving gifts without approval
   - Favoritism
   - Any form of abuse

5. RECRUITMENT AND SCREENING:
   - Background checks for all volunteers
   - Reference checks (minimum 2)
   - Interview process
   - Safeguarding training required
   - Ongoing monitoring

6. REPORTING PROCEDURES:
   
   IF YOU SUSPECT ABUSE:
   - Report immediately to: safeguarding@yakirakidsnetwork.org
   - Contact: Promise (Admin & Finance)
   - 24-hour response guarantee
   - Confidentiality maintained
   - No retaliation policy
   
   WHAT HAPPENS NEXT:
   - Immediate assessment
   - Child safety prioritized
   - Investigation process
   - External authorities contacted if needed

7. ONLINE SAFETY:
   - Social media guidelines
   - Photo/video consent process
   - Privacy protections for children
   - Monitoring of online interactions
   - No personal social media contact with children

8. PHOTO AND VIDEO POLICY:
   - Written consent required
   - No full names with photos (online)
   - No location data shared
   - Children can withdraw consent
   - Secure storage of media

9. CONSEQUENCES OF VIOLATIONS:
   - Immediate suspension
   - Investigation
   - Termination if substantiated
   - Legal action if necessary
   - Reporting to authorities

10. TRAINING AND AWARENESS:
    - Mandatory training for all staff/volunteers
    - Annual refresher training
    - Ongoing awareness campaigns

11. CONTACT INFORMATION:
    "Report concerns:
    Email: safeguarding@yakirakidsnetwork.org
    Phone: [Emergency contact]
    Address: [Physical address]
    
    All reports treated confidentially and seriously."

12. POLICY REVIEW:
    "This policy is reviewed annually and updated as needed to reflect 
    best practices in child protection."

ADDITIONAL RESOURCES:
- Link to volunteer application
- Link to background check info
- Link to training materials (future)

LAYOUT:
- Professional, serious document
- Clear headings and sections
- Easy to navigate
- Prominent in footer
- Downloadable as PDF

TONE:
- Serious and thorough
- Shows organizational commitment
- Clear and unambiguous
- Accessible language

Component: app/(public)/safeguarding/page.tsx

Reference established child-focused nonprofits for best practices:
- UNICEF child safeguarding
- Save the Children policy
- Compassion International

Make it comprehensive, clear, demonstrating commitment to child safety.
```

---

### SESSION 7: COMING SOON PREVIEW PAGES

**PROMPT 7.1 - Bible Studies Dashboard Preview:**
```
Create "Coming Soon" preview page for Bible Studies Dashboard.

URL: /app/(public)/bible-studies-dashboard/page.tsx

This is a teaser for the Phase 3 feature.

PAGE CONTENT:

1. HEADER:
   - Lock icon with glowing effect
   - Badge: "Launching April 2026"
   - Main heading: "Bible Studies Dashboard"
   - Subheading: "Gamified learning platform for children"

2. HERO MOCKUP:
   - Show a wireframe or design mockup of the dashboard
   - Can create a simple HTML/CSS mockup showing:
     * Dashboard layout
     * "Your Next Lesson" card
     * Kingdom Points counter
     * Leaderboard preview
     * Competition section
   - Or use a screenshot from design tools
   - Make it look real but clearly a preview

3. WHAT IT INCLUDES:
   
   "When this feature launches, children will be able to:"
   
   ✓ Watch engaging video Bible lessons
   ✓ Take interactive quizzes and earn Kingdom Points
   ✓ Compete with friends in faith-building challenges
   ✓ Track their spiritual growth journey
   ✓ Message their assigned mentors
   ✓ Earn badges and achievements
   ✓ View leaderboards and celebrate progress
   ✓ Access lessons anytime, anywhere

4. WHY IT MATTERS:
   - Paragraph about importance of spiritual foundation
   - "We're building this to make Bible learning fun, engaging, 
     and accessible for every child in our network."
   - Biblical basis (scripture reference)

5. FOR KIDS:
   - Kid-friendly section
   - "Hey kids! Soon you'll be able to learn about Jesus in a fun 
     way with games, videos, and prizes!"
   - Colorful, engaging visuals

6. FOR DONORS:
   - How this helps fulfill mission
   - Impact on children's lives
   - Investment in technology

7. EMAIL SIGNUP:
   - "Be the first to know when it launches"
   - Simple form: Email input + "Notify Me" button
   - Success message: "Thanks! We'll email you when it's ready."
   - Store emails in database or localStorage for Phase 1

8. TIMELINE:
   - "Expected Launch: April 2026"
   - Development progress bar (optional)
   - "What's being built now"

9. IN THE MEANTIME:
   - "Children are currently learning through:"
     * In-person Bible studies
     * Printed materials
     * Mentor meetings
   - Link to Spiritual Foundation program

10. BACK TO:
    - Link to Programs page
    - Link to About page
    - Link to Donate (to support development)

STYLING:
- Exciting but professional
- Kid-friendly colors (but not childish)
- Clear launch date
- Trust-building (show we're really building this)
- Mobile-friendly

Components:
- app/(public)/bible-studies-dashboard/page.tsx
- components/coming-soon/EmailSignup.tsx

Make it exciting, clear about what's coming, builds anticipation.
```

---

**PROMPT 7.2 - Donation Dashboard Preview:**
```
Create "Coming Soon" preview for Donation Dashboard.

URL: /app/(public)/donation-dashboard/page.tsx

PAGE CONTENT:

1. HEADER:
   - Lock icon
   - Badge: "Launching March 2026"
   - Heading: "Donor Dashboard"
   - Subheading: "Track your giving and see your impact"

2. MOCKUP:
   - Show donor dashboard wireframe:
     * "Your Impact So Far" section
     * Donation history table
     * Charts showing giving over time
     * Quick donate options
   - Professional, clean design

3. FEATURES LIST:
   
   "Your personal donor portal will include:"
   
   ✓ Complete donation history
   ✓ Impact visualization (children helped, meals provided)
   ✓ Instant tax receipt download (PDF)
   ✓ Manage recurring gifts (edit, pause, cancel)
   ✓ See exactly where your donations went
   ✓ Read thank-you messages from children
   ✓ Track your giving goals
   ✓ Share your impact on social media

4. WHY WE'RE BUILDING THIS:
   - "Transparency builds trust"
   - "You deserve to see the impact of your generosity"
   - "Make giving easier and more rewarding"

5. DONOR TESTIMONIAL (Hypothetical):
   - "I can't wait for this feature! It'll be so much easier to 
     track my monthly giving and see the real impact." 
     — Margaret, Monthly Donor

6. EMAIL SIGNUP:
   - "Get notified when we launch"
   - Email form
   - Success message

7. SECURITY ASSURANCE:
   - "Your financial information will be secure"
   - "Bank-level encryption"
   - "Never share your data"
   - PCI compliance

8. FOR NOW:
   - "You can still donate via GoFundMe"
   - Link to donate page
   - "We'll send email receipts manually"
   - Contact email for donation questions

9. LAUNCH TIMELINE:
   - "March 2026"
   - "After we complete financial transparency system"
   - "Beta testing with select donors in February 2026"

Component: app/(public)/donation-dashboard/page.tsx

Make it professional, trust-building, clear value proposition.
```

---

**PROMPT 7.3 - Financial Ledger Preview:**
```
Create "Coming Soon" preview for Financial Transparency Ledger.

URL: /app/(public)/financial-ledger/page.tsx

PAGE CONTENT:

1. HEADER:
   - Lock icon
   - Badge: "Launching March 2026"
   - Heading: "Financial Transparency Ledger"
   - Subheading: "See exactly where every dollar goes"

2. MOCKUP:
   - Show ledger interface mockup:
     * Transaction list (income/expenses)
     * Charts (income vs expenses, program breakdown)
     * Receipt viewer
     * Filter options
   - Professional, data-rich design

3. WHAT YOU'LL SEE:
   
   ✓ Every donation received (real-time)
   ✓ Every dollar spent (with receipts)
   ✓ Program-specific budget tracking
   ✓ Monthly and quarterly summaries
   ✓ Visual charts and graphs
   ✓ Export to CSV/PDF
   ✓ Search and filter transactions
   ✓ Mobile-friendly interface

4. WHY TRANSPARENCY MATTERS:
   - Build donor trust
   - Accountability to supporters
   - Industry best practice
   - Biblical stewardship
   - "We believe sunlight is the best disinfectant"

5. SAMPLE TRANSACTION (Visual Example):
   
   Show a styled example entry:
   ───────────────────────────
   Date: Feb 15, 2026
   Type: EXPENSE
   Amount: ₦125,000
   Category: Monthly Sustenance
   Description: Food supplies for 50 children (February)
   Receipt: [PDF icon] View Receipt
   Program: Monthly Sustenance Program
   Status: Approved ✓
   ───────────────────────────

6. COMMITMENT TO TRANSPARENCY:
   - "100% of transactions will be public"
   - "Updated in real-time"
   - "No hidden costs"
   - "Independently audited"

7. EMAIL SIGNUP:
   - "Be notified when we launch"
   - Form

8. IN THE MEANTIME:
   - Download quarterly financial reports
   - View annual report
   - Contact for financial questions
   - Email: finance@yakirakidsnetwork.org

9. DONOR CONFIDENCE:
   - Stats on why transparency matters
   - "Organizations with transparent finances receive 
     40% more donations" (example stat)

Component: app/(public)/financial-ledger/page.tsx

Make it trust-building, professional, demonstrates commitment.
```

---

### SESSION 8: DONATE PAGE WITH GOFUNDME

**PROMPT 8.1 - Comprehensive Donate Page:**
```
Create compelling donate page with GoFundMe integration.

URL: /app/(public)/donate/page.tsx

PAGE STRUCTURE:

1. PAGE HERO:
   - Emotional image or video
   - Heading: "Make a Difference Today"
   - Subheading: "Your gift changes lives"
   - Immediate impact statement

2. IMPACT LEVELS:
   
   "What Your Donation Provides"
   
   Cards showing donation levels:
   
   $10 / ₦8,000:
   - "3 nutritious meals for a child"
   - Icon: Utensils
   - Color: life-green
   
   $25 / ₦20,000:
   - "School supplies for one month"
   - Icon: Book
   - Color: hope-orange
   
   $50 / ₦40,000:
   - "Bible study materials for 5 children"
   - Icon: BookOpen
   - Color: spiritual-blue
   
   $100 / ₦80,000:
   - "One week of comprehensive care"
   - Icon: Heart
   - Color: sunset-gold
   
   $500 / ₦400,000:
   - "Full scholarship for one semester"
   - Icon: GraduationCap
   - Color: mentor-purple

3. GOFUNDME INTEGRATION:
   
   Section heading: "Choose a Campaign"
   
   "We use GoFundMe for secure, transparent giving. All donations 
   are tracked publicly and receipts are issued."
   
   CAMPAIGN 1: General Fund
   - Title: "Support Yakira Kids Network"
   - Goal: $50,000
   - Raised: [Dynamic from GoFundMe]
   - Progress bar
   - "DONATE" button (opens GoFundMe in new tab)
   
   CAMPAIGN 2: Monthly Sustenance
   - Title: "Feed Hungry Children"
   - Goal: $25,000
   - Progress bar
   - Button
   
   CAMPAIGN 3: Educational Scholarships
   - Title: "Send a Child to School"
   - Goal: $30,000
   - Progress bar
   - Button
   
   CAMPAIGN 4: Emergency Relief
   - Title: "Urgent Needs Fund"
   - Goal: $10,000
   - Progress bar
   - Button
   
   For GoFundMe embedding:
   - Option A: Use iframe embed (if GoFundMe provides)
   - Option B: Styled buttons linking to GoFundMe campaigns
   - Option C: GoFundMe API integration (if available)
   
   For Phase 1, recommend: Styled buttons linking to actual 
   GoFundMe campaign pages. Create the campaigns on GoFundMe first.

4. WHY GOFUNDME:
   
   Cards with benefits:
   
   ✓ Secure & Trusted
   - "Used by millions worldwide"
   - "Bank-level encryption"
   
   ✓ Transparent
   - "See all donations publicly"
   - "Track campaign progress"
   
   ✓ Social Proof
   - "Others are giving too"
   - "Share on social media"
   
   ✓ Easy
   - "Donate in 30 seconds"
   - "Multiple payment methods"

5. OTHER WAYS TO GIVE:
   
   Accordion or tabs:
   
   - Bank Transfer:
     * Account details
     * Swift code (for international)
     * Reference: "Yakira Donation"
   
   - Check/Mail:
     * Address for mailing checks
     * Make payable to: "Yakira Kids Network"
   
   - Crypto (if applicable):
     * Bitcoin/Ethereum addresses
     * QR codes
   
   - Stock Donations (if applicable):
     * Instructions
     * Contact information
   
   - "Contact us for other options"
     * Email: giving@yakirakidsnetwork.org

6. FAQ (Accordion):
   
   Q: Is my donation tax-deductible?
   A: [Provide details based on nonprofit status]
   
   Q: How is my donation used?
   A: "100% goes to programs. See our financial transparency."
   
   Q: Can I give monthly?
   A: "Yes! Set up recurring gifts on GoFundMe or contact us."
   
   Q: What payment methods do you accept?
   A: "Credit/debit cards via GoFundMe, bank transfer, check, crypto."
   
   Q: Will I receive a receipt?
   A: "Yes, automatically via GoFundMe and our system."
   
   Q: Can I designate my gift to a specific program?
   A: "Yes, choose the program-specific campaign."

7. TRANSPARENCY PROMISE:
   
   - "100% of your donation goes to programs"
   - Link to Financial Ledger (Coming Soon tooltip)
   - Link to Annual Reports (future)
   - "We're committed to complete transparency"

8. IMPACT CALCULATOR (Optional Enhancement):
   
   Interactive slider:
   - User drags slider or enters amount
   - Shows real-time impact:
     * $50 = "10 meals + 2 Bible lessons + school supplies"
     * Updates as they adjust
   - Visual representation (icons, images)
   - "Donate This Amount" button
   
   Component: components/donate/ImpactCalculator.tsx
   
   This is optional but nice-to-have for engagement.

9. DONOR TESTIMONIALS:
   
   - Carousel of donor quotes
   - "Why I give to Yakira" stories
   - Mix of local and international donors

10. FINAL CTA:
    - Large section
    - "Ready to Change a Life?"
    - Big DONATE NOW button
    - Scroll to GoFundMe section

STYLING:
- Emotional but not manipulative
- Trust-building
- Clear value proposition
- Multiple entry points to donate
- Mobile-optimized (especially for GoFundMe buttons)
- Fast loading

Components:
- app/(public)/donate/page.tsx
- components/donate/ImpactLevels.tsx
- components/donate/GoFundMeCampaigns.tsx
- components/donate/ImpactCalculator.tsx (optional)

GOFUNDME SETUP INSTRUCTIONS:
1. Create GoFundMe account for Yakira Kids Network
2. Create 4 campaigns (General, Nutritional, Educational, Emergency)
3. Write compelling campaign descriptions
4. Add photos/videos to each campaign
5. Get shareable links
6. Embed or link in website

Make it compelling, conversion-optimized, trust-building.
```

---

### SESSION 9: RESPONSIVE & ACCESSIBILITY

**PROMPT 9.1 - Mobile Optimization:**
```
Audit and optimize entire site for mobile devices.

CHECKLIST:

1. NAVIGATION:
   ✓ Hamburger menu works smoothly
   ✓ Mobile drawer slides in nicely
   ✓ Logo readable
   ✓ Coming Soon tooltips work on touch
   ✓ Donate button always visible

2. HOMEPAGE:
   ✓ Hero scales properly
   ✓ Video works on mobile (or fallback image)
   ✓ Text readable (not too small)
   ✓ CTAs not cut off
   ✓ Programs stack vertically
   ✓ Impact counters trigger on mobile scroll
   ✓ Testimonials swipeable

3. ALL PAGES:
   ✓ Typography scales responsively
   ✓ Grids collapse appropriately
   ✓ Cards stack on mobile
   ✓ Forms easy to fill
   ✓ Buttons large enough (min 44x44px)
   ✓ Touch targets adequate
   ✓ No horizontal scroll

4. IMAGES:
   ✓ All using Next.js Image component
   ✓ Proper sizing (srcset)
   ✓ Lazy loading
   ✓ Compressed
   ✓ WebP format support

5. PERFORMANCE:
   ✓ Fast loading on 3G
   ✓ No layout shift
   ✓ Critical CSS inlined
   ✓ Fonts optimized

TEST BREAKPOINTS:
- 320px (iPhone SE)
- 375px (iPhone standard)
- 414px (iPhone Pro Max)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1280px (Desktop)
- 1920px (Large desktop)

TEST DEVICES:
- iPhone (Safari)
- Android (Chrome)
- iPad
- Various desktop browsers

Provide fixes for any mobile issues found.
```

---

**PROMPT 9.2 - Accessibility Audit:**
```
Ensure WCAG 2.2 AA compliance across entire site.

AUDIT CHECKLIST:

1. COLOR CONTRAST:
   ✓ Text on backgrounds: minimum 4.5:1
   ✓ Large text: minimum 3:1
   ✓ Buttons/UI: minimum 3:1
   ✓ Check all color combinations
   ✓ Fix any failing contrasts

2. KEYBOARD NAVIGATION:
   ✓ All interactive elements via Tab
   ✓ Logical tab order
   ✓ Visible focus indicators
   ✓ Skip to main content link
   ✓ No keyboard traps
   ✓ Dropdowns accessible

3. SCREEN READERS:
   ✓ All images have alt text
   ✓ Form labels associated
   ✓ ARIA labels where needed
   ✓ Heading hierarchy logical (H1→H2→H3)
   ✓ Landmarks defined (<nav>, <main>, <aside>)

4. FORMS:
   ✓ Errors clear and linked
   ✓ Required fields indicated
   ✓ Success confirmations
   ✓ Validation accessible

5. INTERACTIVE ELEMENTS:
   ✓ Tooltips accessible
   ✓ Modals accessible (focus trap, Esc closes)
   ✓ Accordions properly labeled
   ✓ Carousels pausable

6. REDUCED MOTION:
   ✓ Respect prefers-reduced-motion
   ✓ Disable animations for users who prefer it
   ✓ Parallax disabled in reduced motion

TOOLS TO USE:
- axe DevTools (Chrome extension)
- WAVE (browser extension)
- Lighthouse accessibility audit
- Keyboard navigation testing
- Screen reader testing (NVDA or VoiceOver)

Fix all violations and achieve 95+ accessibility score.
```

---

### SESSION 10: PERFORMANCE & SEO

**PROMPT 10.1 - Performance Optimization:**
```
Optimize site for fast loading and great performance.

OPTIMIZATIONS:

1. IMAGES:
   ✓ All using Next.js Image component
   ✓ Proper sizing with srcset
   ✓ Lazy loading enabled
   ✓ WebP format
   ✓ Compressed (80-85% quality)

2. FONTS:
   ✓ Google Fonts optimized
   ✓ font-display: swap
   ✓ Preload critical fonts
   ✓ Subset fonts if possible

3. CSS:
   ✓ Tailwind purged (unused classes removed)
   ✓ Critical CSS inlined
   ✓ No render-blocking CSS

4. JAVASCRIPT:
   ✓ Code splitting (Next.js automatic)
   ✓ Dynamic imports for heavy components
   ✓ Tree shaking enabled

5. THIRD-PARTY:
   ✓ GoFundMe links optimized
   ✓ Analytics loaded async
   ✓ Social media deferred

6. CACHING:
   ✓ Cache headers configured
   ✓ Static assets cached
   ✓ ISR for dynamic pages (if needed)

LIGHTHOUSE TARGETS:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Run Lighthouse and fix issues to achieve these scores.
```

---

**PROMPT 10.2 - SEO Optimization:**
```
Optimize site for search engines.

SEO TASKS:

1. META TAGS (Every page):
   ✓ Unique title (50-60 characters)
   ✓ Unique description (150-160 characters)
   ✓ Open Graph tags (for social sharing)
   ✓ Twitter Card tags
   ✓ Canonical URLs

2. STRUCTURED DATA:
   Add JSON-LD structured data:
   
   - Organization schema (homepage)
   - Nonprofit schema
   - Breadcrumbs schema (where applicable)
   - Article schema (blog posts if any)
   - Event schema (future events)

3. SITEMAP:
   - Generate sitemap.xml
   - Include all public pages
   - Submit to Google Search Console

4. ROBOTS.TXT:
   - Allow all pages
   - Link to sitemap

5. SEMANTIC HTML:
   ✓ Proper heading hierarchy (H1→H2→H3)
   ✓ Semantic tags (<nav>, <main>, <article>)
   ✓ ARIA labels where needed

6. INTERNAL LINKING:
   ✓ Related pages linked
   ✓ Footer navigation complete
   ✓ Breadcrumbs where helpful

7. CONTENT OPTIMIZATION:
   ✓ Target keywords naturally
   ✓ Alt text descriptive
   ✓ URL slugs clean
   ✓ Content quality high

8. PERFORMANCE:
   ✓ Fast loading (already done)
   ✓ Mobile-friendly (already done)
   ✓ HTTPS (will be configured)

Create all meta tags, structured data, sitemap, and robots.txt.
```

---

### SESSION 11: ANALYTICS & DEPLOYMENT

**PROMPT 11.1 - Google Analytics Setup:**
```
Set up Google Analytics 4 for tracking.

SETUP:

1. CREATE GA4 PROPERTY:
   - Property name: "Yakira Kids Network"
   - Time zone: West Africa Time
   - Currency: NGN or USD

2. INSTALL TRACKING:
   - Get GA4 Measurement ID (G-XXXXXXXXXX)
   - Install in Next.js app
   - Use environment variable: NEXT_PUBLIC_GA_ID

3. EVENTS TO TRACK:
   - Page views (automatic)
   - Donate button clicks
   - GoFundMe campaign clicks
   - Email signups (newsletter, notifications)
   - Contact form submissions
   - External link clicks
   - Program page views
   - Coming Soon clicks

4. CONVERSIONS:
   - Donation initiated
   - Contact form submitted
   - Newsletter signup
   - Coming Soon notification signup

5. IMPLEMENTATION:
   
   Create: lib/gtag.ts
   
   ```typescript
   export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
   
   // Track page view
   export const pageview = (url: string) => {
     window.gtag('config', GA_TRACKING_ID, {
       page_path: url,
     })
   }
   
   // Track event
   export const event = ({ action, category, label, value }) => {
     window.gtag('event', action, {
       event_category: category,
       event_label: label,
       value: value,
     })
   }
   ```
   
   Add to app/layout.tsx:
   - Include GA script in head
   - Track route changes

6. PRIVACY:
   - Cookie consent (if needed)
   - Privacy policy mentions tracking
   - Option to opt out

Provide complete GA4 setup code.
```

---

**PROMPT 11.2 - Deployment Preparation:**
```
Prepare site for deployment (Vercel or Contabo/Coolify).

TASKS:

1. ENVIRONMENT VARIABLES:
   
   Create .env.example:
   ```
   NEXT_PUBLIC_GA_ID=
   NEXT_PUBLIC_SITE_URL=
   FORMSPREE_ENDPOINT=
   # Add others as needed
   ```
   
   Document each variable in README.

2. BUILD CONFIGURATION:
   - Ensure build succeeds locally
   - No TypeScript errors
   - No console errors
   - Production optimizations enabled

3. README.md:
   
   Include:
   - Project overview
   - Tech stack
   - Getting started (installation)
   - Environment variables
   - Deployment instructions
   - Project structure
   - Contact information

4. DEPLOYMENT CHECKLIST:
   
   ✓ All environment variables set
   ✓ GA4 configured
   ✓ Performance optimized
   ✓ Accessibility tested
   ✓ SEO configured
   ✓ Images optimized
   ✓ Mobile tested
   ✓ All links working
   ✓ Forms tested
   ✓ Legal pages complete
   ✓ SSL certificate (will be configured on server)
   ✓ Domain pointed correctly

5. DEPLOYMENT OPTIONS:
   
   OPTION A: Vercel (Recommended for ease)
   - Connect GitHub repo
   - Auto-deploy on push
   - Environment variables in dashboard
   - Custom domain
   - SSL automatic
   
   OPTION B: Contabo + Coolify (Your choice)
   - Set up Coolify on Contabo VPS
   - Connect GitHub repo
   - Configure build settings
   - Set environment variables
   - SSL via Coolify (Let's Encrypt)
   - Custom domain

6. POST-DEPLOYMENT:
   - Test all functionality
   - Verify analytics working
   - Check forms submit
   - Test on multiple devices
   - Submit sitemap to Google

Provide complete deployment documentation.
```

---

## DELIVERABLES CHECKLIST

### PAGES (Fully Functional):
- ✅ Homepage (exact blueprint layout)
- ✅ About Us (with leadership team)
- ✅ Programs index
- ✅ 5 Program detail pages (dynamic)
- ✅ **🆕 Our Journey / Story Dashboard (YouTube episodes)**
- ✅ Donate page (with GoFundMe)
- ✅ Contact page (working form)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Child Safeguarding Policy

### COMING SOON PAGES:
- ✅ Bible Studies Dashboard preview
- ✅ Donation Dashboard preview
- ✅ Financial Ledger preview

### COMPONENTS:
- ✅ Header (exact from blueprint)
- ✅ Footer (exact from blueprint)
- ✅ ComingSoonTooltip
- ✅ Program cards
- ✅ Impact counters
- ✅ Testimonial carousel
- ✅ **🆕 Episode cards (Story Dashboard)**
- ✅ **🆕 Filter buttons (Story Dashboard)**
- ✅ **🆕 Timeline component (Story Dashboard)**
- ✅ Contact form
- ✅ Email signup

### FEATURES:
- ✅ GoFundMe integration
- ✅ Coming Soon tooltips
- ✅ **🆕 Story Dashboard (YouTube episodes timeline)**
- ✅ **🆕 Theme filtering (Faith, Leadership, STEM, etc.)**
- ✅ **🆕 Impact metrics per episode**
- ✅ Email signups (notifications)
- ✅ Contact form working
- ✅ Mobile responsive
- ✅ Accessible (WCAG 2.2 AA)
- ✅ Fast performance
- ✅ SEO optimized
- ✅ Analytics integrated

### DOCUMENTATION:
- ✅ README.md
- ✅ Deployment guide
- ✅ Environment setup
- ✅ Content guidelines

---

## DESIGN REFERENCE LINKS

**Study these Dribbble designs before building:**

1. **Search:** dribbble.com/search/child-charity
   - Look at top designs
   - Note: warm colors, emotional imagery, clear CTAs

2. **Search:** dribbble.com/search/nonprofit-website
   - Modern layouts
   - Card designs
   - Navigation patterns

3. **Specific inspiration:**
   - Warm earthy color palettes
   - African-inspired patterns (subtle)
   - Child-friendly but professional
   - Trust-building elements
   - Impact visualization
   - Donation page designs

---

## FINAL NOTES

**EXACT BLUEPRINT ADHERENCE:**
- Header navigation: EXACTLY as specified (7 items, 3 with tooltips)
- Footer: EXACTLY 4 columns as specified
- Homepage: ALL 6 sections in specified order
- Programs: EXACTLY 5 as named in blueprint
- Leadership: EXACTLY 4 people as specified
- Coming Soon: For Bible Studies, Donation, Financial Ledger, Admin, Social

**PHASE 1 SCOPE:**
- Public website fully functional
- Coming Soon tooltips for dashboards
- GoFundMe integration
- No actual dashboard implementation (Phase 2 & 3)

**QUALITY STANDARDS:**
- Lighthouse score: 90+
- Accessibility: WCAG 2.2 AA (95+)
- Mobile-first and responsive
- Fast loading (<2 seconds)
- Professional Dribbble-quality design
- Trust-building elements throughout

**TIMELINE:**
- Week 1: Setup + Header/Footer + Homepage
- Week 2: About, Programs, Contact, Legal pages
- Week 3: Coming Soon pages, optimization, deployment

**BUDGET:** ₦600,000
- Payment 1: ₦150K (Day 1 - Setup)
- Payment 2: ₦150K (Week 1 complete)
- Payment 3: ₦150K (Week 2 complete)
- Payment 4: ₦150K (Launch + training)

---

**START WITH SESSION 1 AND BUILD SYSTEMATICALLY!**

Each prompt is ready to copy-paste into Claude. Follow the exact blueprint specifications. Reference Dribbble for design inspiration. Build something professional and beautiful! 🚀

**"We rise by lifting others." - Let's lift these children by building something extraordinary!**
