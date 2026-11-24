# 🍮 Pudding & 🍓 Strawberry

👉 **Live site: https://wuuyf.github.io/pudding-strawberry/**

A small, mobile-first introduction page for my two senior cats (17 years old),
built to be linked from my Instagram bio via Linktree.

## Features

- **Surprise intro** — tap "誰在裡面？" (Who's in there?) to reveal the cats, with a particle burst animation
- **Swipeable profile cards** and photo carousels (native CSS scroll-snap)
- **Bilingual UI** — Traditional Chinese / Japanese toggle, remembers the visitor's choice
- **Auto-calculated age** from birth year, so nothing needs updating each year
- **Lightbox** for full-size photos, sticky bottom navigation that highlights the current section
- Respects `prefers-reduced-motion`
- Photos converted to WebP with all EXIF metadata (including GPS) removed

## Tech

Plain HTML / CSS / JavaScript — no framework, no build step. Deployed with GitHub Pages.

## Structure

```
index.html   Page structure
style.css    Styles (color palette in :root)
script.js    CONFIG (birth year, background photo, links), i18n text, interactions
images/      Photos (WebP)
```

## Customize

Edit the `CONFIG` object at the top of `script.js`:

```js
const CONFIG = {
  birthYear: 2009,
  background: "images/together-2.webp",
  linktree: "",
  github: "https://github.com/wuuyf",
};
```