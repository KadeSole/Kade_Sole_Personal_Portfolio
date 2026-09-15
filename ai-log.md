========= PROMPT =========
You are assisting with a small, public static portfolio website. 

Project context: 
- purpose: present my skills and internships to potential employers
- Existing system: an HTML / CSS / JavaScript portfolio template I will provide the template later
- Allowed changes: content, styling, and small front-end corrections
- Do not add: a backend, login system, analytics, or external data collection

Acceptance Criteria:
1. The landing page should display precise information about me like my name, university, and my current internship and studies
2. The portfolio should contain at least my 2 most recent internship's with job duties and achievments regarding them
3. the UI / UX should be responsive and easy to navigate
4. Ensure that the UI looks good on multiple display's example, mobile, table, and monitor
5. Do not reuse any information that is a placeholder.

Constraints: 
This portfolio will not require external hosting
This portfolio will not require a database
This portfolio will not require any form of credentials to access
This portfolio will adhere to my professor's guidelines
do not invent information that I have not provided you

First provide: 
1. A file by file implementation plan
2. Any assumptions or risks
3. a propsed test checklist 
4. any questions or requirements that must be addressed before implementation

DO NOT MODIFY FILES UNTIL I REVIEW THE PLAN


========= RESPONSE =========

# Portfolio Website Implementation Plan

Thanks for the detailed context. Since this is a planning-only phase, I've outlined everything below **without making any code changes**. I have some important questions at the end that need answers before implementation can proceed correctly.

---

## 1. File-by-File Implementation Plan

Since you'll provide the existing template later, this plan assumes a typical structure. I'll adjust once I see the actual files.

### `index.html` (Landing Page)
- Update `<head>` metadata (title, description) with your real name/role
- Hero section: Replace placeholder name, university, current internship/study status with your actual info
- Navigation bar: Ensure links (About, Experience, Projects, Contact) are semantic and keyboard-navigable
- Add `alt` text to any images (headshot, logos) for accessibility
- Ensure heading hierarchy (`<h1>` → `<h2>` → `<h3>`) is logical for screen readers

### `about.html` or `#about` section
- Replace placeholder bio with your real background, university, degree program, and current studies

### `experience.html` or `#experience` section
- Build two (minimum) structured entries for your most recent internships, each containing:
  - Company name, role title, dates (start–end)
  - 3–5 bullet points: duties performed
  - 1–2 bullet points: quantifiable achievements (if available)
- Use semantic HTML (`<article>` or `<section>` per internship) for structure and accessibility

### `styles.css`
- Audit existing CSS for hard-coded pixel widths that break responsiveness
- Implement/verify CSS Grid or Flexbox for layout containers
- Add media queries for breakpoints (e.g., mobile ≤480px, tablet ≤768px, desktop ≥1024px)
- Verify color contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text)
- Ensure font sizes use relative units (`rem`/`em`) for scalability

### `script.js`
- Review existing JS for any unnecessary features (e.g., analytics snippets, external API calls) — **remove per your constraints**
- Keep only front-end interactivity (e.g., nav toggle for mobile, smooth scroll)
- No form submission logic requiring backend/database

### `assets/` (images, icons, resume PDF if applicable)
- Replace placeholder images with your actual headshot/project screenshots (only if you provide them)
- Optimize image file sizes for performance

---

## 2. Assumptions & Risks

**Assumptions:**
- The template uses standard HTML/CSS/JS (no framework like React) — please confirm
- You will supply real internship details, dates, and bullet points before I write copy
- "Two most recent internships" implies you currently have 2+ internships completed or in progress

**Risks:**
- ⚠️ **Risk of invented content**: I will not write internship duties/achievements myself — I need this info from you directly to avoid violating your "no placeholder" rule
- ⚠️ **Template unknown**: Until you share the actual files, my plan is a general framework, not a precise diff
- ⚠️ **Professor guidelines unknown**: I don't know your specific rubric/requirements yet, which could affect file structure or content depth
- ⚠️ Responsive testing without real device access — I'll rely on browser dev tools' device emulation guidance

---

## 3. Proposed Test Checklist

**Content Accuracy**
- [ ] Name, university, and current internship/study status are 100% accurate (no leftover template text)
- [ ] Both internship entries contain real company names, dates, duties, achievements

**Responsiveness**
- [ ] Layout renders correctly at 320px (small mobile), 768px (tablet), 1024px+ (desktop)
- [ ] Navigation menu collapses to a mobile-friendly pattern (hamburger or stacked links) below tablet breakpoint
- [ ] No horizontal scrolling on any breakpoint
- [ ] Images scale proportionally, no overflow/distortion

**Accessibility (WCAG 2.1 AA)**
- [ ] All images have descriptive `alt` text
- [ ] Color contrast passes for text/background combinations
- [ ] Site is navigable via keyboard only (Tab/Enter)
- [ ] Heading structure is logical and sequential

**Functionality**
- [ ] All internal links/navigation work correctly
- [ ] No console errors in browser dev tools
- [ ] No backend calls, forms, or data collection scripts present (per constraints)

**Cross-Browser**
- [ ] Verified in Chrome, Firefox, and Safari (or your preferred set)

---

## 4. Questions & Requirements Before Implementation

I need the following before I can begin actual edits:

1. **The template files** — please share the HTML/CSS/JS you mentioned.
2. **Your real information:**
   - Full name (as you'd like it displayed)
   - University name and current program/major/year
   - Current internship title, company, and status (ongoing/completed)
3. **Two most recent internships** — for each, please provide:
   - Company name, job title, start/end dates
   - 3–5 duties you performed
   - Any measurable achievements (metrics, outcomes, tools used)
4. **Professor's specific guidelines** — is there a rubric or written requirement I should align formatting/content to?
5. **Assets** — do you have a headshot photo, resume PDF, or project screenshots to include? Or should I leave clearly-labeled space for you to add later?
6. **Contact method** — should the contact section link to email/LinkedIn only (static links), confirming no contact form (since no backend is allowed)?

---

Once you provide the template and the information above, I'll revise this into a precise, file-specific diff plan for your review before any code is written.