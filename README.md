# 🍮 Pudding & 🍓 Strawberry

👉 **Live site: https://wuuyf.github.io/pudding-strawberry/**

A small, mobile-first introduction page for my two senior cats (17 years old),
built to be linked from my Instagram bio via Linktree.

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
