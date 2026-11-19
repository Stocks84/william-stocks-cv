# William Stocks CV

Interactive personal CV site for William Adam Stocks. Live via GitHub Pages from `main`.

## Stack
HTML5, vanilla JavaScript, Tailwind CSS v3 (precompiled and committed), custom CSS for themes, animations and print. No backend.

## Commands
- Install: `npm install` (only needed to rebuild CSS)
- Run: open `index.html`, or `python3 -m http.server 8000` then http://localhost:8000
- Check (no formal tests): `node --check js/main.js sw.js`
- Build CSS: `npm run build:css` (minified); `npm run watch:css` while editing. Commit the updated `css/tailwind.css`.

## Layout
- `index.html` — markup; `css/style.css` — custom styles; `css/tailwind.css` — generated
- `js/main.js` — theme, mobile menu, modal, animations, print
- `src/tailwind.css` — Tailwind input; `tailwind.config.js`
- `william-stocks-cv.pdf`, `william-stocks-headshot.jpg`, `qr-code.png`, icons

## Conventions
- The compiled Tailwind file is committed so the site works as plain static files.
- Do not run `build:css` from a Stop hook (it writes `css/tailwind.css`).
- Never commit secrets or Will's personal Gmail; use `124254214+Stocks84@users.noreply.github.com` instead. Git author must be `Stocks84 <124254214+Stocks84@users.noreply.github.com>`. Do not push to `main` or merge without Will's approval.

## End-of-job report
Every finished coding job must be reported in this shape. Only list a check under CHECKS RUN if it actually ran; anything untested goes under NOT CHECKED, never left out.

PROJECT: repo and branch
PULL REQUEST: link (or not created)
PREVIEW: link or how to open it (or unavailable)
BUILT: what changed, in plain words
CHECKS RUN: what ran and the result
NOT CHECKED: what nobody tested (e.g. real phone, live data, emails)
KNOWN ISSUES: list, or none
COST / USAGE: where to see it; never guess a number
NEXT DECISION: exactly what Will needs to say yes or no to
