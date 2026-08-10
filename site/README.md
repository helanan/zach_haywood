# Zach Haywood — Country Music

Modern one-page artist site: hero, about, discography, tour/merch placeholders, and social links.

Built with React + Vite + Tailwind.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Deploy to Vercel

Import this repo at [vercel.com/new](https://vercel.com/new) — it's a standard Vite app, no
config needed. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

## TODO before launch

- `src/links.js` — swap the placeholder Spotify search link for the real artist URL
  (`open.spotify.com/artist/<id>`), and add a real booking email.
- `src/assets/hero.jpg`, `src/assets/logo.jpg`, `src/assets/tracks/*.jpg` — all currently
  cropped from phone screenshots of the Spotify app as placeholders. Swap in real
  high-res photos and cover art when available.
- Tour dates and merch are currently "coming soon" placeholders in
  `src/components/Connect.jsx` — replace once there's something to show.
