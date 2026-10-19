# Enegxi Institute — Project Handoff

This guide is for the next person maintaining the Enegxi Institute website. It explains how to run the app, where each feature lives, and which source files currently need implementation.

## Project overview

This is a Next.js App Router website built with React and TypeScript. Tailwind CSS provides most styling, Framer Motion handles animations, React Hook Form and Zod handle form state and validation, and Google Forms receives submissions.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Other scripts:

| Command | Purpose |
| --- | --- |
| `npm run build` | Build the production app |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

The review loader reads `NEXT_PUBLIC_REVIEWS_SHEET_CSV_URL` from the environment. Do not commit `.env.local` or credentials; `.env*` is ignored by Git. The Google Forms entry IDs are currently in source configuration and are public form identifiers, not secrets.

## How the app is assembled

`src/app/layout.tsx` wraps every route with the shared Navbar, page content, and Footer. The home route (`src/app/page.tsx`) composes the hero, statistics, program overview, course cards, consultation section, and partner section. Reusable visual pieces are grouped under `components/atoms`, `components/cards`, and `components/motion`; complete forms are under `components/forms`.

## Routes

| File | Route | Purpose / status |
| --- | --- | --- |
| `src/app/page.tsx` | `/` | Home page; composes the main marketing sections. |
| `src/app/cohort/page.tsx` | `/cohort` | Cohort application page using the course application form. |
| `src/app/courses/page.tsx` | `/courses` | **Empty file at handoff.** Course listing route has no page implementation yet. |
| `src/app/courses/[slug]/page.tsx` | `/courses/:slug` | **Empty file at handoff.** Dynamic course detail route has no implementation yet. |
| `src/app/gallery/page.tsx` | `/gallery` | **Empty file at handoff.** Gallery route has no page implementation yet. |
| `src/app/reviews/page.tsx` | `/reviews` | **Empty file at handoff.** Reviews route has no page implementation yet. |
| `src/app/api/forms/route.ts` | `POST /api/forms` | Server endpoint. Maps supplied values to configured Google `entry.*` fields, posts to Google Forms, and reports success/failure to the browser. |
| `src/app/layout.tsx` | Shared layout | Sets metadata, global CSS, font, navbar, main region, and footer. |
| `src/app/globals.css` | — | Tailwind import, global colors/body styles, and hidden-scrollbar helper for modal content. |

## Source file guide

### Sections — `src/components/sections/`

| File | What it does |
| --- | --- |
| `HeroSection.tsx` | Home page hero/intro area. |
| `StatBar.tsx` | Displays institute statistics. |
| `WhatWeDoSection.tsx` | Program value proposition and feature content, including the animated dotted arrow banner. |
| `HomeCoursesSection.tsx` | Course overview cards and the Join Next Cohort link. |
| `PartnerConsultationSection.tsx` | Contact/consultation content, benefits, process steps, and consultation form card. |
| `PartnerSection.tsx` | Partnership and hiring call-to-action/form area. |
| `TestimonialsSection.tsx` | Home page testimonial/review presentation. |
| `Navbar.tsx` | Shared navigation, mobile menu, and cohort link. |
| `Footer.tsx` | Shared footer: course links, newsletter UI, contact/social details, review logo, and animated background grid. |
| `FloatingWidget.tsx` | **Empty file at handoff.** No component is currently implemented here. The active connect widget is `components/atoms/ConnectWidget.tsx`. |

### Reusable atoms — `src/components/atoms/`

| File | What it does |
| --- | --- |
| `Button.tsx` | Shared button variants and sizes. |
| `Badge.tsx` | Small reusable label/badge with visual variants. |
| `SectionHeading.tsx` | Shared section heading presentation. |
| `FormLabel.tsx` | Form label and required marker. |
| `FormErrorMessage.tsx` | Displays field validation errors. |
| `NameInput.tsx` | Reusable name/text input; sanitizes personal-name characters unless `allowSpecialCharacters` is enabled. |
| `EmailInput.tsx` | Email input with whitespace sanitization. |
| `PhoneInput.tsx` | Phone input with digits-only sanitization. |
| `TextareaInput.tsx` | Reusable textarea with allowed-character filtering. |
| `Checkbox.tsx` | Reusable checkbox. |
| `Dropdown.tsx` | Custom animated dropdown base used by select wrappers. |
| `CategorySelect.tsx` | General category dropdown wrapper. |
| `ExperienceSelect.tsx` | Experience-level dropdown wrapper. |
| `ConsultationDropdown.tsx` | Consultation-interest dropdown with service options. |
| `SubmitButton.tsx` | Form submit button with loading state. |
| `Modal.tsx` | Modal facade around `motion/ModalWrapper.tsx`. |
| `ConnectWidget.tsx` | Floating contact widget with WhatsApp, phone, email, location, and Instagram links. |
| `Arrow.tsx` | `DottedArrowMatrix`, a decorative dotted upward arrow. |
| `GlowingCircularGrid.tsx` | Decorative, wide glowing dot pattern used at the footer base. |
| `SocialIconLink.tsx` | Reusable social icon link. |

### Cards — `src/components/cards/`

| File | What it does |
| --- | --- |
| `CourseCard.tsx` | Presents a course and its apply action. |
| `FeatureCard.tsx` | Presents a feature/benefit card. |
| `GalleryCard.tsx` | Displays a gallery item card. |
| `ReviewCard.tsx` | Displays an individual review. |

### Forms — `src/components/forms/`

| File | What it does |
| --- | --- |
| `CourseApplicationForm.tsx` | Validates and submits a course application; course track is selected by its `courseType` prop. |
| `PartnerForm.tsx` | Validates and submits partnership inquiries. |
| `ConsultationForm.tsx` | Validates and submits consultation requests. |
| `NewsletterForm.tsx` | Standalone newsletter form component. Footer currently contains its own newsletter markup/state. |
| `FormSuccessState.tsx` | Shared post-submission confirmation UI. |

### Motion helpers — `src/components/motion/`

| File | What it does |
| --- | --- |
| `FadeIn.tsx` | Reusable fade-in animation wrapper. |
| `ScrollReveal.tsx` | Reusable reveal-on-scroll wrapper. |
| `AnimatedCard.tsx` | Reusable animated card wrapper. |
| `ModalWrapper.tsx` | Modal overlay, animation, close behavior, body-scroll lock, and scrollable modal content. |

### Configuration — `src/config/`

| File | What it does / status |
| --- | --- |
| `coursesData.ts` | Course content, slugs, durations, schedules, skills, prerequisites, and outline. |
| `formsConfig.ts` | Google Forms action URLs and `entry.*` IDs for course, partner, and consultation submissions. Keep IDs aligned with Google Form questions. |
| `galleryData.ts` | **Empty file at handoff.** No gallery data is currently defined. |
| `reviewsData.ts` | **Empty file at handoff.** No static review data is currently defined. |

### Types — `src/types/`

| File | What it does / status |
| --- | --- |
| `index.ts` | Shared exports/types for form keys/config, courses, and form payloads. |
| `course.ts` | Course and syllabus interfaces. A separate course shape also exists in `index.ts`; check both before changing course types. |
| `gallery.ts` | Gallery item interface. |
| `review.ts` | Review interface. |
| `forms.ts` | **Empty file at handoff.** Form types currently live in `index.ts`. |

### Utilities — `src/utils/`

| File | What it does |
| --- | --- |
| `cn.ts` | Combines conditional class names with Tailwind class merging. |
| `validationSchemas.ts` | Zod field schemas and schemas/types for course, partner, and consultation forms. |
| `submitToGoogleForms.ts` | Browser-side helper that posts form type/data to `/api/forms` and reads its success response. |
| `getReviewsFromSheet.ts` | Loads and parses review CSV data using `NEXT_PUBLIC_REVIEWS_SHEET_CSV_URL`; requests hourly revalidation. |

## Updating Google Forms

1. Open the destination Google Form and confirm the question labels and required fields.
2. Confirm each question’s `entry.*` identifier and the form’s `/formResponse` URL.
3. Update that form’s record in `src/config/formsConfig.ts`.
4. Ensure the form component sends keys that match the configured `fields` object. The API route only forwards matching keys.
5. Submit a real test through the app and verify it appears in the form’s **Responses** tab or linked spreadsheet.

The app displays success only when `/api/forms` reports success. Google Forms does not provide a conventional authenticated API response, so changes to its response HTML can affect the confirmation check in `src/app/api/forms/route.ts`.

## Content and assets

Place public assets in `public/`. They are referenced by URL paths beginning with `/`, such as `/images/logo/Enegxi-Institute-Logo.png`. Images are grouped under `public/images/` by purpose: backgrounds, course icons, feature icons, logo, and partners.

## Handoff notes

- The four route files marked empty and the empty `galleryData.ts`, `reviewsData.ts`, `forms.ts`, and `FloatingWidget.tsx` were empty when this guide was generated. Implement or remove them deliberately; do not assume the routes work because the files exist.
- `coursesData.ts` contains course detail content, but the courses list and dynamic detail pages are unimplemented.
- The root `README.md` is still the default Next.js starter README; this file is the project-specific guide.
- `AGENTS.md` says to consult the relevant docs bundled in `node_modules/next/dist/docs/` before changing Next.js code because installed APIs may differ from familiar conventions.
- `tsconfig.json` enables strict TypeScript and maps `@/*` to `src/*`.

## Root configuration files

| File | What it does |
| --- | --- |
| `package.json` | Project scripts and dependency declarations. |
| `package-lock.json` | npm dependency lockfile; retain for repeatable installs. |
| `next.config.ts` | Next.js configuration; React Compiler is enabled. |
| `tailwind.config.ts` | Tailwind content paths and project color/font extensions. |
| `postcss.config.mjs` | Enables the Tailwind PostCSS plugin. |
| `eslint.config.mjs` | ESLint configuration based on Next.js Core Web Vitals and TypeScript rules. |
| `tsconfig.json` | TypeScript strictness, module settings, and `@/*` alias. |
| `next-env.d.ts` | Generated Next.js TypeScript declarations. |
| `AGENTS.md` | Instructions for agents/developers working in this repository. |
| `CLAUDE.md` | Short assistant tooling note. |
| `.gitignore` | Excludes dependencies, build output, environment files, and generated artifacts. |
| `README.md` | Default starter README; this handoff guide contains project-specific details. |

### Public assets — `public/`

| File | What it is |
| --- | --- |
| `favicon.ico` | Browser tab icon. |
| `images/background-pictures/bgfake.png` | Background image asset. |
| `images/courses-icon/backend.png` | Backend course icon. |
| `images/courses-icon/frontend.png` | Frontend course icon. |
| `images/courses-icon/fullstack.png` | Full-stack course icon. |
| `images/courses-icon/mobiledev.png` | Mobile development course icon. |
| `images/courses-icon/productmanagement.png` | Product management course icon. |
| `images/courses-icon/webdev.png` | Web development course icon. |
| `images/feature-icons/no1.svg` – `no4.svg` | Four feature illustrations used by the home page. |
| `images/logo/Enegxi-Institute-Logo.png` | Main institute logo used in navigation. |
| `images/partners/acronis-logo2.png` | Acronis partner/logo artwork. |
| `images/partners/blog-02-600x425.png` | Partner/gallery image asset. |
| `images/partners/blog-05-600x425.png` | Partner/gallery image asset. |
| `images/partners/blog-06-600x425.png` | Partner/gallery image asset. |
| `images/partners/blog-07-600x425.png` | Partner/gallery image asset. |
| `images/partners/clutch-logo.svg` | Clutch logo shown in footer review block. |
| `images/partners/del.png` | Partner logo/artwork. |
| `images/partners/intel.png` | Intel partner logo. |
| `images/partners/ubiquiti.png` | Ubiquiti partner logo. |

Build output (`.next/`), installed packages (`node_modules/`), and TypeScript incremental state (`*.tsbuildinfo`) are generated/local artifacts and are not maintained as application source.
