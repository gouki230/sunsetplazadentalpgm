# Sunset Plaza Dental — Static Site

A static, React-based replacement for the WordPress site at https://sunsetplazadental.com. Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **AOS** (scroll animations), and **Embla Carousel**. Deploys as pure static HTML/CSS/JS.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # generates /out — pure static
npm run serve        # serves /out locally to spot-check the build
```

## Routes (production)

| Route | Source | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero slider, services grid, why-choose-us, testimonials, CTA |
| `/about` | `app/about/page.tsx` | Practice story + values |
| `/team` | `app/team/page.tsx` | Real dentist grid |
| `/team/[slug]` | `app/team/[slug]/page.tsx` | Dr. Afar + 5 other dentists |
| `/services` | `app/services/page.tsx` | Service overview grid |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | 8 services (cleaning, Invisalign, implants, veneers, whitening, crowns, root canal, extractions) |
| `/faq` | `app/faq/page.tsx` | FAQ accordion + `FAQPage` JSON-LD |
| `/appointment` | `app/appointment/page.tsx` | Formspree-backed appointment form |
| `/contact` | `app/contact/page.tsx` | Contact form, Google Map, hours |
| `/accessibility-statement` | `app/accessibility-statement/page.tsx` | WCAG 2.1 AA conformance statement |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Placeholder — replace with practice's HIPAA notice |
| `sitemap.xml`, `robots.txt` | `app/sitemap.ts`, `app/robots.ts` | Auto-generated at build |

## Where to edit content

All content lives in `data/*.ts`. There is no CMS — the repo is the source of truth.

| File | What it controls |
|---|---|
| `data/site.ts` | Practice name, address, phone, email, hours, geo coords, social links, review averages, logo paths |
| `data/services.ts` | Service catalog. Add/remove services here — pages and sitemap update automatically |
| `data/team.ts` | Dentists. Each entry generates `/team/[slug]`. `bioConfirmed: false` flags entries that still need full bios |
| `data/testimonials.ts` | Patient quotes shown on the home page |
| `data/faq.ts` | FAQ entries — also emitted as `FAQPage` JSON-LD for Google rich results |

### Adding a new service

1. Add an entry to the `services` array in `data/services.ts`.
2. Drop the hero image at `public/images/services/<slug>.jpg`.
3. `/services/<slug>` builds automatically, sitemap and breadcrumbs update.

### Adding or updating a team member

1. Add an entry to the `team` array in `data/team.ts`.
2. Drop their headshot at `public/images/team/<slug>.webp` (or .jpg).
3. Set `bioConfirmed: true` once the bio paragraphs are real.
4. `/team/<slug>` builds automatically.

## Branding & favicons

The logo lives at `public/images/sunset-logo.png`. Favicons (favicon.ico, multiple PNG sizes, apple-touch-icon, manifest icons, and OG image) are generated from it:

```bash
node scripts/generate-favicons.mjs
```

Re-run any time you swap the logo. The script crops just the sun icon (drops the "SUNSET PLAZA DENTAL" wordmark since it's unreadable at 16/32px) and outputs to `public/`.

## Form delivery (Formspree)

The appointment, contact, and footer newsletter forms all POST to a Formspree endpoint.

1. Create a Formspree account (free tier = 50 submissions/month).
2. Create a form pointed at `info@sunsetplazadental.com`.
3. Copy the form endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
4. Set the env var on your host (and locally in `.env.local`):
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://sunsetplazadental.com
   ```
5. Optional: enable Formspree's reCAPTCHA. The forms also include a hidden honeypot field for cheap bots.

## SEO

- Per-page metadata via the App Router `metadata` API.
- `/sitemap.xml` covers every page including dynamic services and team members.
- `/robots.txt` allows all crawlers and points at the sitemap.
- Structured data (JSON-LD):
  - `Dentist` / `LocalBusiness` on every page (root layout) — NAP, hours, aggregate rating, `sameAs` socials
  - `BreadcrumbList` on every non-home page
  - `FAQPage` on `/faq`
  - `MedicalProcedure` on each `/services/[slug]`
  - `Person` on each `/team/[slug]` with `knowsAbout` specialties + image
- OpenGraph and Twitter card metadata on every page.

After launch: submit `/sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and validate rich results with the [Rich Results Test](https://search.google.com/test/rich-results).

## Accessibility

Targets **WCAG 2.1 Level AA**:

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Skip-to-content link at the top of every page.
- Visible focus rings via `:focus-visible` (sunset orange, 3px).
- Keyboard-navigable everywhere — including the mobile menu (Esc closes).
- Hero slider announces slide changes via an `aria-live="polite"` region.
- Forms have labels, `autocomplete` attributes, and announce errors with `role="alert"`.
- `prefers-reduced-motion: reduce` disables non-essential motion (AOS auto-disables on phones for users with the setting on).

Before release:

```bash
npm install -g @axe-core/cli
npm run build && npm run serve
axe http://localhost:3000 http://localhost:3000/services/ http://localhost:3000/contact/
```

Then a manual keyboard pass plus a screen-reader smoke test (NVDA on Windows, VoiceOver on Mac).

## Deploying

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project from the repo.
3. **Build command**: `npm run build`
4. **Build output directory**: `out`
5. **Node version**: 20+ (set `NODE_VERSION=20` in env if needed).
6. **Env vars**:
   - `NEXT_PUBLIC_SITE_URL=https://sunsetplazadental.com`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`
7. The `public/_redirects` file is already configured to 301 old WordPress `?page_id=*` URLs to the new clean ones.
8. Point DNS (CNAME apex + www) at the Pages URL after staging review.

### Netlify

Same as above — `_redirects` works natively. Output dir is `out`.

### S3 + CloudFront

Upload `out/` to S3 with `aws s3 sync`. Use a CloudFront Function or Lambda@Edge to rewrite trailing slashes and serve `index.html` for directory paths. Translate `public/_redirects` rules into CloudFront Functions.

## Project layout

```
app/                Pages (App Router). Each folder is a route.
components/         Shared UI components (Header, Footer, HeroSlider, forms, …)
data/               Content — edit these to change the site
public/             Static assets: images, favicons, manifest, _redirects
scripts/            Build helpers (generate-favicons.mjs)
next.config.mjs     output: 'export' — produces static HTML
tailwind.config.ts  Brand tokens (navy, sunset, sun, sand)
```

## Stack

- **Next.js 15** App Router, static export (`output: 'export'`)
- **React 19**
- **Tailwind CSS 3** — brand palette: navy (#0b1d36), sunset orange (#F37335), sun yellow (#FDB813), sand (#FDF7EF)
- **Embla Carousel** — hero slider, testimonial carousel
- **AOS** (animate-on-scroll) — entrance animations, respects `prefers-reduced-motion`
- **sharp** + **png-to-ico** — favicon generation
- **TypeScript** throughout

## Owner TODOs before launch

- **Team bios** — Dr. Bijan Afar's full bio is in place. The other 5 dentists (Poneh Ghazri, Peyman Kakoli, Sheila Morim, Nancy Saghian, Alina Tiraspolskaya) have placeholder bios marked with `bioConfirmed: false` in `data/team.ts`. Replace and flip the flag to `true`.
- **Services** — confirm the final list in `data/services.ts`. Remove any not offered at the Sunset Plaza location.
- **Hours** — verify in `data/site.ts` (currently Mon–Fri 9 AM – 6 PM, Sat/Sun by appointment).
- **Photos** — drop real hero photos at `public/images/hero/hero-{1,2,3}.jpg` (real photos already pulled from the live site are in place).
- **Formspree** — create the form and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` on the host + locally.
- **Privacy Policy** — replace the placeholder template with the practice's HIPAA-aligned notice.
- **Analytics** — add GA4 / GTM / Meta Pixel if desired (insert in `app/layout.tsx`).
- **Google Business Profile** — ensure it's claimed; verify `sameAs` URLs in `data/site.ts` and `components/LocalBusinessJsonLd.tsx` match.
