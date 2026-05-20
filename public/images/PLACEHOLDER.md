# Image placeholder directory

Drop real assets into:

- `public/images/og-default.jpg` — 1200×630 Open Graph image (home + fallback)
- `public/images/services/*.jpg` — referenced from `data/services.ts`
- `public/images/team/*.jpg` — referenced from `data/team.ts`
- `public/images/before-after/*.jpg` — referenced from `data/beforeAfter.ts`

A favicon and apple-touch-icon should live at `public/favicon.ico` and `public/apple-touch-icon.png`.

Until the real assets are dropped in, the site renders gradient placeholders for hero/team and a stock layout for service cards.
